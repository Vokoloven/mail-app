import { createSlice } from '@reduxjs/toolkit';
import { fetchTrackingByTtn } from '.';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import type { PayloadAction } from '@reduxjs/toolkit';

type TServiceSlice = {
    data: {};
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | unknown;
    list: { ttn?: string }[];
    ttn: string;
};

const initialState: TServiceSlice = {
    data: {},
    loading: 'idle',
    error: '',
    list: [],
    ttn: ''
};

const persistConfig = {
    key: 'service',
    storage,
    whitelist: ['list']
};

export const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {
        setList: (state, { payload }: PayloadAction<{}>) => {
            if (Object.keys(payload).length === 0) {
                state.list = [];
            } else {
                state.list = [...state.list, payload];
            }
        },
        setTtn: (state, { payload }: PayloadAction<string>) => {
            state.ttn = payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTrackingByTtn.pending, (state) => {
            state.loading = 'pending';
            state.error = '';
        });
        builder.addCase(fetchTrackingByTtn.fulfilled, (state, { payload }) => {
            state.loading = 'succeeded';
            state.data = { ...payload };
        });
        builder.addCase(fetchTrackingByTtn.rejected, (state, { payload }) => {
            state.loading = 'failed';
            state.error = payload;
        });
    }
});

export const persistedServiceReducer = persistReducer(
    persistConfig,
    serviceSlice.reducer
);

export const { setList, setTtn } = serviceSlice.actions;

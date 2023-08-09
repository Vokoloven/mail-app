import { createSlice } from '@reduxjs/toolkit';
import { fetchTrackingByTtn } from '.';

type TServiceSlice<T> = {
    data: T;
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | unknown;
};

const initialState: TServiceSlice<{}> = {
    data: {},
    loading: 'idle',
    error: ''
};

export const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {},
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

import { createSlice } from '@reduxjs/toolkit';
import { fetchWarehouses } from '.';
import { TWarehouse } from 'types/tWarehouse';

type TServiceSlice = {
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    hasNextPage: boolean;
    error: string | unknown;
    warehouses: Partial<TWarehouse<string, boolean | []>>;
};

const initialState: TServiceSlice = {
    loading: 'idle',
    error: '',
    warehouses: {},
    hasNextPage: false
};

export const warehouseSlice = createSlice({
    name: 'warehouse',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchWarehouses.pending, (state) => {
            state.loading = 'pending';
            state.error = '';
        });
        builder.addCase(fetchWarehouses.fulfilled, (state, { payload }) => {
            state.warehouses = { ...payload };
            state.loading = 'succeeded';
            state.hasNextPage = Boolean(payload?.data?.length);
        });
        builder.addCase(fetchWarehouses.rejected, (state, { payload }) => {
            state.loading = 'failed';
            state.error = payload;
        });
    }
});

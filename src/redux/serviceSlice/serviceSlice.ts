import { createSlice } from '@reduxjs/toolkit';

type TServiceSlice<T> = {
    data: T;
};

const initialState: TServiceSlice<{}> = {
    data: {}
};

export const serviceSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {}
});

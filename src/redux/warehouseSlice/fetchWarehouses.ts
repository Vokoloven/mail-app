import { axiosConfig } from 'services';
import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchWarehouses = createAsyncThunk(
    'tracking/fetchWarehouses',
    async (
        {
            cityRef = '',
            page = '1',
            limit = '50'
        }: { cityRef: string; page: string; limit?: string },
        thunkAPI
    ) => {
        try {
            const response = await axiosConfig.post('', {
                apiKey: process.env.REACT_APP_API_KEY,
                modelName: 'Address',
                calledMethod: 'getWarehouses',
                methodProperties: {
                    CityRef: cityRef,
                    Page: page,
                    Limit: limit
                }
            });

            const { data } = response;

            if (!data.success) throw new Error(data.errors);

            return data;
        } catch (err) {
            if (err instanceof AxiosError)
                return thunkAPI.rejectWithValue(err.response?.data);

            if (err instanceof Error)
                return thunkAPI.rejectWithValue(err.message);
        }
    }
);

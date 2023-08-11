import { axiosConfig } from 'services';
import { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTrackingByTtn = createAsyncThunk(
    'tracking/fetchByTtn',
    async (ttn: string, thunkAPI) => {
        try {
            const response = await axiosConfig.post('', {
                apiKey: process.env.REACT_APP_API_KEY,
                modelName: 'TrackingDocument',
                calledMethod: 'getStatusDocuments',
                methodProperties: {
                    Documents: [
                        {
                            DocumentNumber: ttn,
                            Phone: ''
                        }
                    ]
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

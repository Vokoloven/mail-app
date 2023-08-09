import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { serviceSlice } from './serviceSlice';

const rootReducer = combineReducers({
    [serviceSlice.name]: serviceSlice.reducer
});

export const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

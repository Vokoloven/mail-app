import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { serviceSlice } from './serviceSlice';
import { persistedServiceReducer } from './serviceSlice';
import { warehouseSlice } from './warehouseSlice';
import { persistStore } from 'redux-persist';

const rootReducer = combineReducers({
    [serviceSlice.name]: persistedServiceReducer,
    [warehouseSlice.name]: warehouseSlice.reducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false })
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from "@reduxjs/toolkit/query";
import { apiSlice } from '../features/api';
import globalReducer from '../features/global';
import paginateSlice from '../features/pagination';


export const store = configureStore({
    reducer : {
        global: globalReducer,
        paginate: paginateSlice,
        // add all the reducres here
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    // Add middleware for RTK query / caching middleware
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(apiSlice.middleware);
    }
});

setupListeners(store.dispatch);
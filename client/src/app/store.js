import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
    reducer : {
        // add all the reducres here
    },
    // Add middleware for RTK query / caching middleware
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat();
    }
});
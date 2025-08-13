import { configureStore } from "@reduxjs/toolkit";
import { catalogueApi } from "/src/features/catalogue/catalogueApi";
import { setupListeners } from '@reduxjs/toolkit/query';


//central store for redux
export const store = configureStore({
    reducer: {
        [catalogueApi.reducerPath]: catalogueApi.reducer,
        
    },
    //caching, error handling
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(catalogueApi.middleware)
});

// enables refetchOnFocus and refetchOnReconnect
setupListeners(store.dispatch); 
import { configureStore } from "@reduxjs/toolkit";
import { catalogueApi } from "../api//catalogueApi";
import { setupListeners } from '@reduxjs/toolkit/query';
import { cartApi } from "../api/cartApi";
import { uiSlice } from "../slices/uiSlice";
import { catalogueSlice } from "../slices/catalogueSlice";

//central store for redux
export const store = configureStore({
    reducer: {
        [catalogueApi.reducerPath]: catalogueApi.reducer,
        [cartApi.reducerPath]: cartApi.reducer,
        ui: uiSlice.reducer,
        catalogue: catalogueSlice.reducer,
    },
    //caching, error handling
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(
            catalogueApi.middleware,
            cartApi.middleware
        )       
});

// enables refetchOnFocus and refetchOnReconnect
setupListeners(store.dispatch); 




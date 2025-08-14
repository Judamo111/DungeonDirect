import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithErrorHandling } from './baseApi';

export const catalogueApi = createApi({
    reducerPath: 'catalogueApi',
    baseQuery: baseQueryWithErrorHandling,
    keepUnusedDataFor: 300,
    endpoints: (builder) => ({
        fetchProducts: builder.query({
            query: () =>  '/products'
        }),
        fetchProductDetails: builder.query({
            query: (productId) => `products/${productId}`
        })
    })
});

export const {useFetchProductDetailsQuery, useFetchProductsQuery} = catalogueApi
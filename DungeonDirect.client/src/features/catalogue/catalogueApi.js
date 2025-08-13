import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const catalogueApi = createApi({
    reducerPath: 'catalogueApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://localhost:7221/api'}),
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
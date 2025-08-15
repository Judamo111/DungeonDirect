import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithErrorHandling } from './baseApi';
import { filterEmptyValues } from 'src/lib/util';


export const catalogueApi = createApi({
    reducerPath: 'catalogueApi',
    baseQuery: baseQueryWithErrorHandling,
    keepUnusedDataFor: 300,
    endpoints: (builder) => ({
        fetchProducts: builder.query({
            query: (productParams) =>  {

                return {
                    url: 'products',
                    params: filterEmptyValues(productParams)
                }
                
            },

            transformResponse: (items, meta) => {
                const paginationHeader = meta?.response?.headers.get('Pagination');
                const pagination = paginationHeader ? JSON.parse(paginationHeader) : null;
                return {items, pagination}
            }
                
        }),
        fetchProductDetails: builder.query({
            query: (productId) => `products/${productId}`
        }),
        fetchFilters: builder.query({
            query: () => 'products/filters'
        }),
    })
});

export const {useFetchProductDetailsQuery, useFetchProductsQuery, useFetchFiltersQuery} = catalogueApi
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithErrorHandling } from "./baseApi";

export const cartApi = createApi({
    reducerPath: 'cartApi',
    baseQuery: baseQueryWithErrorHandling,
    endpoints: (builder) => ({
        fetchCart: builder.query({
            query: () => '/cart'
        }),
        addCartItem: builder.mutation ({
            query: ({productId, quantity}) => ({
                url: `cart?productId=${productId}&quantity=${quantity}`,
                method: 'POST'
            })
        }),

        removeCartItem: builder.mutation ({
            query: ({productId, quantity}) => ({
            url: `cart?productId=${productId}&quantity=${quantity}}`,
            method: 'DELETE'
            })
        })
    })
});

export const { useFetchCartQuery, useAddCartItemMutation } = cartApi;
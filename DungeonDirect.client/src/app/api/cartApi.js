import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithErrorHandling } from "./baseApi";

export const cartApi = createApi({
    reducerPath: 'cartApi',
    baseQuery: baseQueryWithErrorHandling,
    tagTypes: ['Cart'],
    endpoints: (builder) => ({
        fetchCart: builder.query({
            query: () => '/cart',
            providesTags: ['Cart']
        }),
        addCartItem: builder.mutation ({
            query: ({productId, quantity}) => ({
                url: `cart?productId=${productId}&quantity=${quantity}`,
                method: 'POST'
            }),
            onQueryStarted: async (_, {dispatch, queryFulfilled}) => {
                try {
                    await queryFulfilled;
                    dispatch(cartApi.util.invalidateTags(['Cart']));
                } catch (error) {
                    console.error(error)
                }
            }
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
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


        
    addCartItem: builder.mutation({
        query: ({ product, quantity }) => {
        const productId = product?.productId ?? product?.id;

        return {
            url: `cart?productId=${productId}&quantity=${quantity}`,
            method: 'POST',
        };
        },

        async onQueryStarted({ product, quantity }, { dispatch, queryFulfilled }) {
        let isNewCart = false;
        const productId = product?.productId ?? product?.id;

        const patchResult = dispatch(
            cartApi.util.updateQueryData('fetchCart', undefined, (draft) => {
            if (!draft?.cartId) {
                isNewCart = true;
                return;
            }

            const existing = draft.items.find((it) => it.productId === productId);

            if (existing) {
                existing.quantity = (existing.quantity ?? 0) + quantity;
            } else {
                const normalizedItem =
                product && typeof product === 'object' && 'quantity' in product
                    ? product
                    : { ...product, productId, quantity };

                draft.items.push(normalizedItem);
            }
            })
        );

        try {
            await queryFulfilled;
            if (isNewCart) dispatch(cartApi.util.invalidateTags(['Cart']));
        } catch (err) {
            console.log(err);
            patchResult.undo();
        }
        },
    }),




        removeCartItem: builder.mutation ({
            query: ({productId, quantity}) => ({
            url: `cart?productId=${productId}&quantity=${quantity}`,
            method: 'DELETE'
            }),
            onQueryStarted: async ({productId, quantity}, {dispatch, queryFulfilled}) => {
                const patchResult = dispatch(
                    cartApi.util.updateQueryData('fetchCart', undefined, (draft) => {
                        const itemIndex = draft.items.findIndex(item => item.productId === productId);
                        if (itemIndex >= 0) {
                            draft.items[itemIndex].quantity -= quantity;
                            if (draft.items[itemIndex].quantity <= 0) {
                                draft.items.splice(itemIndex, 1);
                            }
                        }
                    })
                )
                
                try {
                    await queryFulfilled;
                } catch (error) {
                    console.error(error);
                    patchResult.undo();
                }
            }
        })
    })
});

export const { useFetchCartQuery, useAddCartItemMutation, useRemoveCartItemMutation } = cartApi;
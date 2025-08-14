import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithErrorHandling } from "./baseApi";

export const errorTestApi = createApi({
    reducerPath: 'errorApi',
    baseQuery: baseQueryWithErrorHandling,
    endpoints: (builder) => ({
        get400Error: builder.query({
            query: () => ({url: 'test/bad-request'})
        }),
        get401Error: builder.query({
            query: () => ({url: 'test/unauthorized'})
        }),
        get404Error: builder.query({
            query: () => ({url: 'test/not-found'})
        }),
        get500Error: builder.query({
            query: () => ({url: 'test/server-error'})
        }),
        getValidationError: builder.query({
            query: () => ({url: 'test/validation-error'})
        }),
    })
});

export const {
    useLazyGet400ErrorQuery,
    useLazyGet401ErrorQuery,
    useLazyGet500ErrorQuery,
    useLazyGet404ErrorQuery,
    useLazyGetValidationErrorQuery
} = errorTestApi;
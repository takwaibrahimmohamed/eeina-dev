import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { BaseQueryFn, FetchArgs } from "@reduxjs/toolkit/query";

// base fetch
const baseQuery = fetchBaseQuery({
    // baseUrl: "/api/v1",
    baseUrl: "https://api.eeina.com/api/v1",
    credentials: "include",
});

const baseQueryWithAuth: BaseQueryFn<FetchArgs, unknown, unknown> = async (
    args,
    api,
    extraOptions
) => {
    const result = await baseQuery(args, api, extraOptions);
    return result;
};

// export minimal API
export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: baseQueryWithAuth,
    tagTypes: ["User"],
    endpoints: () => ({}),
});

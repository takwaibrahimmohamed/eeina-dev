import { baseApi } from "../../API/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (userInfo) => ({
                url: "/auth/login",
                method: "POST",
                body: userInfo,
            }),
            invalidatesTags: ["User"],
        }),

        signup: builder.mutation({
            query: (userInfo) => ({
                url: "/auth/signup",
                method: "POST",
                body: userInfo,
            }),
            invalidatesTags: ["User"],
        }),
        logOut: builder.mutation({
            query: () => ({
                url: "/auth/logout",
                method: "POST",
            }),
            invalidatesTags: ["User"],
        }),

        forgotPassword: builder.mutation({
            query: (forgotPasswordData) => ({
                url: "/auth/forgot-password",
                method: "POST",
                body: forgotPasswordData,
                credentials: "include",
            }),
            invalidatesTags: ["User"],
        }),

        resetPassword: builder.mutation({
            query: ({ resetPasswordData, token }) => ({
                url: `/auth/reset-password/${token}`,
                method: "POST",
                body: resetPasswordData,
                credentials: "include",
            }),
            invalidatesTags: ["User"],
        }),
    }),
});

export const {
    useLoginMutation,
    useSignupMutation,
    useLogOutMutation,
    useForgotPasswordMutation,
    useResetPasswordMutation,
} = authApi;

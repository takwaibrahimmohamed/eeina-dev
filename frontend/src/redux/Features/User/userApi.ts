/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "../../API/baseApi";

const userApi = baseApi.injectEndpoints({
      endpoints: (builder) => ({
            getMe: builder.query({
               query: () => ({
                  url: "/user/profile",
                  method: "GET",
               }),
               providesTags: ["User"],
            }),
            verifyEmail: builder.mutation({
                  query: ({ email, otp }) => ({
                        url: "/user/email-verification",
                        method: "POST",
                        body: { email, otp },
                        credentials: "include",
                  }),
                  invalidatesTags: ["User"],
            }),
            resendEmailOtp: builder.mutation({
                  query: ({ email }) => ({
                        url: "/user/resend-email-otp",
                        method: "POST",
                        body: { email },
                        credentials: "include",
                  }),
                  invalidatesTags: ["User"],
            }),
      }),
});

export const {
   useVerifyEmailMutation,
   useResendEmailOtpMutation,
   useGetMeQuery,
} = userApi;

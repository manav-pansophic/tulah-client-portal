// import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { APIService } from "..";

import { APIService } from "..";

export const authService = APIService.injectEndpoints({
  endpoints: (builder) => ({
    verifyPhone: builder.mutation({
      query: (credentials: any) => ({
        url: `https://sso-ebds.pansophictech.com/request-otp-phone`,
        method: "POST",
        body: credentials,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }),
    }),

    verifyOTP: builder.mutation({
      query: (credentials: any) => ({
        url: "https://sso-ebds.pansophictech.com/verify-otp-phone",
        method: "POST",
        body: credentials,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }),
    }),

    loginViaPassword: builder.mutation({
      query: (data: any) => ({
        url: "https://sso-ebds.pansophictech.com/login-via",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useVerifyPhoneMutation,
  useVerifyOTPMutation,
  useLoginViaPasswordMutation,
} = authService;

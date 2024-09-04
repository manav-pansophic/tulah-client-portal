import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authService = createApi({
  reducerPath: 'authService',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  tagTypes: ['SignUp'],
  endpoints: (builder) => ({
    // Register
    register: builder.mutation({
      query: (newUser) => ({
        url: 'signup',
        method: 'POST',
        body: newUser
      })
    }),

    // Login
    login: builder.mutation({
      query: (credentials) => ({
        url: 'signin',
        method: 'POST',
        body: credentials,
        headers: { 
          'Access-Control-Allow-Origin': '*'
        }
      })
    })
  })
});

export const { useRegisterMutation, useLoginMutation } = authService;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const APIService = createApi({
  reducerPath: 'APIService',
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  tagTypes: ['APIService'],
  endpoints: () => ({})
});

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_CONFIG } from '../utils/constant';

export const APIService = createApi({
  reducerPath: 'APIService',
  baseQuery: fetchBaseQuery({ baseUrl: API_CONFIG.BASE_URL }),
  tagTypes: ['APIService', 'GET_PAYMENT_HISTORY', 'GET_ALL_GUEST_LIST'],
  endpoints: () => ({})
});

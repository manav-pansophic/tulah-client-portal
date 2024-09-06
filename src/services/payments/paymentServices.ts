import { APIService } from "..";

export const paymentService = APIService.injectEndpoints({
  endpoints: (builder) => ({

    // Get Payment History
    getPaymentHistory: builder.query({
      query: ({visitorId}) => {
        return {
          url: `get_payment_history/${visitorId}`,
          method: 'GET'
        };
      },
      providesTags: ['GET_PAYMENT_HISTORY']
    }),
  }),
});

export const { useGetPaymentHistoryQuery } =
  paymentService;

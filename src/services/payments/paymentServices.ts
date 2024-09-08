import { toast } from "react-toastify";
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
      providesTags: ['GET_PAYMENT_HISTORY'],
      onQueryStarted: async (arg, { queryFulfilled }) => {

        const {data} = await queryFulfilled
        try {
          await queryFulfilled;
          toast.success(data?.message);
        } catch (error) {
          toast.error(error?.data?.message);
        }
      },
    }),
  }),
});

export const { useGetPaymentHistoryQuery } =
  paymentService;

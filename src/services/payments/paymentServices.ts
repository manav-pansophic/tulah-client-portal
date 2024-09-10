import { toast } from "react-toastify";
import { APIService } from "..";

export const paymentService = APIService.injectEndpoints({
  endpoints: (builder) => ({
    // Get Payment History
    getPaymentHistory: builder.query({
      query: ({ visitorId }) => {
        return {
          url: `get_payment_history/${visitorId}`,
          method: "GET",
        };
      },
      providesTags: ["GET_PAYMENT_HISTORY"],
      onQueryStarted: async (arg, { queryFulfilled }) => {
        const { data } = await queryFulfilled;
        try {
          await queryFulfilled;
          toast.success(data?.message);
        } catch (error) {
          toast.error(error?.data?.message);
        }
      },
    }),

    // Get Basket List
    getBasketList: builder.query({
      query: ({ visitorId }) => {
        return {
          url: `get_basket_info/${visitorId}`,
          method: "GET",
        };
      },
      providesTags: ["GET_BASKET_INFO"],
      onQueryStarted: async (arg, { queryFulfilled }) => {
        const { data } = await queryFulfilled;
        try {
          await queryFulfilled;
          toast.success(data?.message);
        } catch (error) {
          toast.error(error?.data?.message);
        }
      },
    }),

    // Remove Basket Item
    removeBasketItem: builder.mutation({
      query: (data) => {
        return {
          url: `remove_item`,
          body: data,
          method: "POST",
        };
      },
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

export const { useGetPaymentHistoryQuery, useGetBasketListQuery, useRemoveBasketItemMutation } =
  paymentService;

import { toast } from "react-toastify";
import { APIService } from "..";

export const scheduleService = APIService.injectEndpoints({
  endpoints: (builder) => ({
    // Get Access Code
    getAccessCode: builder.query({
      query: ({ guestId }) => {
        console.log(guestId)
        return {
          url: `generate_access_code/${guestId}`,
          method:"POST"
        };
      },
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

    // Create Schedule for Guest
    schedulePickup: builder.mutation({
      query: (values) => {
        return {
          url: `create_guest_arrival_schedule`,
          body: values,
          method: "POST",
        };
      },
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
    
  }),
});

export const { useGetAccessCodeQuery, useSchedulePickupMutation } = scheduleService;

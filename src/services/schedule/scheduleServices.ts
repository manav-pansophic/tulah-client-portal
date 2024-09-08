import { toast } from "react-toastify";
import { APIService } from "..";

export const scheduleService = APIService.injectEndpoints({
  endpoints: (builder) => ({
    // Get Access Code
    getAccessCode: builder.query({
      query: ({visitorId}) => {
        return {
          url: `get_code/${visitorId}`,
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

export const { useGetAccessCodeQuery } = scheduleService;

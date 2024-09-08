import { toast } from "react-toastify";
import { APIService } from "..";

export const guestService = APIService.injectEndpoints({
  endpoints: (builder) => ({
    // Create New guest
    addNewGuest: builder.mutation({
      query: ({
        visitor_id = "66d824947ce5e26ae9385d72",
        firstName,
        lastName,
      }) => {
        return {
          url: `create_guest`,
          body: { visitor_id, firstName, lastName },
          method: "POST",
        };
      },
      invalidatesTags: ["GET_ALL_GUEST_LIST"],
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

    // Update Guest Details
    updateGuestDetails: builder.mutation({
      query: (data) => {
        console.log("daata", data);
        return {
          url: `update_guest/${data?._id}`,
          body: { data},
          method: "POST",
        };
      },
      invalidatesTags: ["GET_ALL_GUEST_LIST"],
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

    //Guest List
    getAllGuestList: builder.query({
      query: () => {
        return {
          url: `guest_list`,
          method: "GET",
        };
      },
      providesTags: ["GET_ALL_GUEST_LIST"],
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

export const {
  useAddNewGuestMutation,
  useUpdateGuestDetailsMutation,
  useGetAllGuestListQuery,
} = guestService;

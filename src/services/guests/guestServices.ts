import { toast } from "@pansophictech/toast";
import { APIService } from "..";

export const guestService = APIService.injectEndpoints({
  endpoints: (builder) => ({
    // Create New guest
    addNewGuest: builder.mutation({
      query: ({ visitorId, firstName, lastName }) => {
        return {
          url: `create_guest`,
          body: {
            firstName: firstName,
            lastName: lastName,
            visitor_id: visitorId,
          },
          method: "POST",
        };
      },
      invalidatesTags: ["GET_ALL_GUEST_LIST"],
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

    // Update Guest Details
    updateGuestDetails: builder.mutation({
      query: (data) => {
        console.log("daata", data);
        return {
          url: `update_guest/${data?._id}`,
          body: { data },
          method: "POST",
        };
      },
      invalidatesTags: ["GET_ALL_GUEST_LIST"],
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

    //Guest List
    getAllGuestList: builder.query({
      query: ({ visitor_id }) => {
        return {
          url: `get_guest_by_visitor_id/${visitor_id}`,
          method: "GET",
        };
      },
      providesTags: ["GET_ALL_GUEST_LIST"],
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

export const {
  useAddNewGuestMutation,
  useUpdateGuestDetailsMutation,
  useGetAllGuestListQuery,
} = guestService;

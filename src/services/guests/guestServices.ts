import { APIService } from "..";

export const guestService = APIService.injectEndpoints({
  endpoints: (builder) => ({
    // Create New guest
    addNewGuest: builder.mutation({
      query: ({ visitor_id='66d824947ce5e26ae9385d72',firstName, lastName }) => {
        return {
          url: `create_guest`,
          body: { visitor_id ,firstName, lastName },
          method: "POST",
        };
      },
      invalidatesTags: ['GET_ALL_GUEST_LIST']
    }),

    //Guest List
    getAllGuestList: builder.query({
      query: () => {
        return {
          url: `guest_list`,
          method: 'GET'
        };
      },
      providesTags: ['GET_ALL_GUEST_LIST']
    }),
  }),
});

export const { useAddNewGuestMutation, useGetAllGuestListQuery } =
  guestService;

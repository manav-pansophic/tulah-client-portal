import { APIService } from '..';

export const guestService = APIService.injectEndpoints({
  endpoints: (builder) => ({

    // Create New guest
    addNewGuest: builder.mutation({
      query: () => `add_new_guest/create`
    }),

  })
});

export const {
  useAddNewGuestMutation,
} = guestService;

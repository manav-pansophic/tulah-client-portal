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
    }),
  }),
});

export const { useGetAccessCodeQuery } = scheduleService;

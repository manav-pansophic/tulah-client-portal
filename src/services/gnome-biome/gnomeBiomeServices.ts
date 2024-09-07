import { APIService } from '..';

export const gnomeBiomeService = APIService.injectEndpoints({
  endpoints: (builder) => ({

    // Get All Reports List
    getAllReports: builder.query({
      query: () => `tulah_reports`
    }),

  })
});

export const {
  useGetAllReportsQuery,
} = gnomeBiomeService;

import { APIService } from "..";

export const visitorsService = APIService.injectEndpoints({
  endpoints: (builder) => ({
    // Save Paf Form
    getVisitors: builder.query({
      query: (mobile_number) => {
        return {
          url: `get_visitor/${mobile_number}`,
          method: "GET",
        };
      },
      providesTags: ["GET_VISITORS"],
    }),
    // Get Paf Form
    addVisitors: builder.query({
      query: (data) => {
        console.log("data", data);
        return {
          url: "add_visitor",
          method: "POST",
          params: {
            mobile_no: data,
          },
        };
      },
    }),
  }),
});

export const { useLazyAddVisitorsQuery, useLazyGetVisitorsQuery } =
  visitorsService;

import { APIService } from "..";

export const assessmentService = APIService.injectEndpoints({
  endpoints: (builder) => ({
    // Save Paf Form
    saveAssessment: builder.mutation({
      query: (data) => {
        return {
          url: `create_paf`,
          body: data,
          method: "POST",
        };
      },
      invalidatesTags: ['GET_ASSESSMENT_DATA']
    }),

    // Get Paf Form
    getAssessment: builder.query({
      query: (id) => {
        return {
          url: `pre_assessment_form/${id}`,
          method: 'GET'
        };
      },
      providesTags: ['GET_ASSESSMENT_DATA']
    }),
  }),
});

export const { useSaveAssessmentMutation, useGetAssessmentQuery } =
  assessmentService;

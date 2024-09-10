import { toast } from "react-toastify";
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
      invalidatesTags: ["GET_ASSESSMENT_DATA"],
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

    // Get Paf Form
    getAssessment: builder.query({
      query: (id) => {
        return {
          url: `pre_assessment_form/${id}`,
          method: "GET",
        };
      },
      providesTags: ["GET_ASSESSMENT_DATA"],
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

export const { useSaveAssessmentMutation, useGetAssessmentQuery } =
  assessmentService;

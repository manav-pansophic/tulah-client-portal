import { toast } from "react-toastify";
import { APIService } from "..";

export const registerService = APIService.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => {
        return {
          url: `create_pafsd`,
          body: data,
          method: "POST",
        };
      },
      transformResponse: (response, meta) => {
        if (meta?.response?.ok) {
          toast.success("Register Sucessfully!!");
          return response;
        }
        return response;
      },
    }),
  }),
});

export const { useRegisterMutation } = registerService;

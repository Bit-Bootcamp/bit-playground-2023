import { api } from "./api";

const studentsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    upload: builder.mutation({
      query: (files) => {
        const formData = new FormData();

        if (files.length > 1) {
          for (let file of files) {
            formData.append("photos", file);
          }

          return {
            url: "/students/upload-multi",
            method: "POST",
            headers: {
              "Content-Type": undefined,
            },
            body: formData,
          };
        } else {
          formData.append("photo", files[0]);

          return {
            url: "/students/upload",
            method: "POST",
            headers: {
              "Content-Type": undefined,
            },
            body: formData,
          };
        }
      },
    }),
    createProfile: builder.mutation({
      query: (body) => ({
        url: "/students",
        method: "POST",
        body: body,
      }),
    }),
    getStudents: builder.query({
      query: () => "/students",
    }),
  }),
});

export const {
  useUploadMutation,
  useCreateProfileMutation,
  useGetStudentsQuery,
} = studentsApi;

import { api } from "@/redux/api/apiSlice";

const booksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBook: builder.query({
      query: (search) => `/all-book?search=${search as string}`,
      providesTags: ["book"],
    }),
    singleBook: builder.query({
      query: (id) => `/book/${id as string}`,
    }),
    postBook: builder.mutation({
      query: (data) => {
        return {
          url: `/book-add`,
          method: "POST",
          body: data,
        };
      },

      invalidatesTags: ["book"],
    }),
    deleteBook: builder.mutation({
      query: (id: string) => {
        console.log(id);
        return {
          url: `/book/${id}`,
          method: "DELETE",
        };
      },

      invalidatesTags: ["book"],
    }),
    updateBook: builder.mutation({
      query: ({ id, postData }) => {
        return {
          url: `/book-update/${id as string}`,
          method: "PATCH",
          body: { ...postData },
        };
      },

      invalidatesTags: ["book"],
    }),
    // getComment: builder.query({
    //   query: (id) => `/comment/${id}`,
    //   providesTags: ["comments"],
    // }),
  }),
});

export const {
  useGetBookQuery,
  useSingleBookQuery,
  usePostBookMutation,
  useDeleteBookMutation,
  useUpdateBookMutation,
} = booksApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const phonebookApi = createApi({
  reducerPath: "phonebookApi",
  tagTypes: ["contacts"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6208028b22c9e90017d32fce.mockapi.io/contacts/",
  }),
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ["contacts"],
    }),
    addContact: builder.mutation({
      query: (contact) => ({
        url: "/contacts",
        method: "POST",
        body: { ...contact },
      }),
      invalidatesTags: ["contacts"],
    }),
    deleteContact: builder.mutation({
      query: (contactId) => ({
        url: `/contacts/${contactId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["contacts"],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = phonebookApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://book-shop-server-indol.vercel.app/api/v1",
  }),
  tagTypes: ["book"],
  endpoints: () => ({}),
});

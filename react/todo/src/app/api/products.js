import { api } from "./api";

const productsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query(() => "/products"),
  }),
});

export const { useGetProductsQuery } = productsApi;

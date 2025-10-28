import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IProduct, IProductResponse } from '../../../types/products';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://noxer-test.ru/webapp/api/',
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      headers.set('Accept', 'application/json');
      return headers;
    },
  }),
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    getProducts: builder.mutation<IProduct[], { page: number; per_page?: number }>({
      query: ({ page, per_page = 20 }) => ({
        url: `products/filter?per_page=${per_page}&page=${page}`,
        method: 'POST',
        body: { test: 1 },
      }),
      transformResponse: (response: IProductResponse) => {
        if (!response.products || !Array.isArray(response.products)) {
          throw new Error('Invalid response format');
        }

        return response.products.map((product) => ({
          ...product,
          image: product.images[0]?.Image_URL || '',
          oldPrice: product.old_price,
          marks: product.marks.map((mark) => mark.Mark_Name),
          hasMore: response.pagination.has_next,
        }));
      },
    }),
  }),
});

export const { useGetProductsMutation } = productsApi;

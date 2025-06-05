import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { TListPosts } from '@/interfaces';

export const postsApi = createApi({
  reducerPath: 'postsRTK',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: builder => ({
    getPostsFromRTK: builder.query<TListPosts, null>({
      //query: name => `pokemon/${name}`,
      query: () => `posts`,
    }),
  }),
});

export const { useGetPostsFromRTKQuery } = postsApi;

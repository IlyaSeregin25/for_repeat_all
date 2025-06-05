import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IPost, TListPosts } from '@/interfaces';

export const postsApi = createApi({
  reducerPath: 'postsRTK',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: builder => ({
    getPostsFromRTK: builder.query<TListPosts, null>({
      //query: name => `pokemon/${name}`,
      query: () => `posts`,
    }),
    getPostFromRTKById: builder.query<IPost, string | number>({
      query: postId => `posts/${postId}`,
    }),
  }),
});

export const { useGetPostsFromRTKQuery, useGetPostFromRTKByIdQuery } = postsApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IPost, TListPosts } from '@/interfaces';
import { getPosts } from '../slices/postsSlice';

export const postsApi = createApi({
  reducerPath: 'postsRTK',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: builder => ({
    getPostsFromRTK: builder.query<TListPosts, null>({
      ////keepUnusedDataFor: 0, отключение кэширования
      query: () => `posts`,
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        const data = result.data;
        dispatch(getPosts(data));
      },
    }),
    getPostFromRTKById: builder.query<IPost, string | number>({
      query: postId => `posts/${postId}`,
    }),
  }),
});

export const { useGetPostsFromRTKQuery, useGetPostFromRTKByIdQuery } = postsApi;

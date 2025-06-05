import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { IPost, TListPosts } from '@/interfaces';
import { getPosts } from '../slices/postsSlice';

const API = import.meta.env.VITE_API_KEY;

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
    PostSmth: builder.query<IPost, paramsPost>({
      query: ({ id, name }) => {
        return {
          url: `posts/${id}`,
          params: {
            apikey: API,
          },
          method: 'POST',
          body: name,
        };
      },
    }),
    /* 
    example1: builder.query<IPost, null>({      //<выходные данные, входные параметры>
      //keepUnusedDataFor: 0, отключение кэширования
      query: () => `posts/1`,
    }),
    example2: builder.query<IPost, paramsPost>({
      query: ({ id, name }) => {
        return {
          url: `posts/${id}`,
          params: { apikey: API, name: name },
        };
      },
    }),
    example3: builder.query<IPost, paramsPost>({
      query: ({ id, name }) => {
        return {
          url: `posts/${id}`,
          params: { apikey: API },
          method: 'POST',
          body: name,
        };
      },
    }),
    example11: builder.query<IPost, null>({
      query: () => `posts/1`,
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        const data = result.data;
        dispatch(getPosts(data));
      },
      transformResponse: response => ({
        ...response,
        genres: response.genres.filter(({ genre }) => !excludeGenres.includes(genre)),
      }),
    }),
     */
  }),
});

interface paramsPost {
  apismthkey: string;
  id: string;
  name: string;
}

export const { useGetPostsFromRTKQuery, useGetPostFromRTKByIdQuery } = postsApi;

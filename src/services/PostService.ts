import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost } from '../models/IPost';

export const postApi = createApi({
  reducerPath: 'postAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001',
  }),
  tagTypes: ['Post'],
  endpoints: (build) => ({
    fetchAllPosts: build.query<IPost[], number>({
      query: (limit: number = 5) => ({
        url: '/posts',
        params: {
          _limit: limit,
        },
      }),
      providesTags: ['Post'],
    }),
    createPost: build.mutation<IPost, IPost>({
      query: (post: IPost) => ({
        url: '/posts',
        method: 'POST',
        body: post,
      }),
      invalidatesTags: ['Post'],
    }),
    updatePost: build.mutation<IPost, IPost>({
      query: (post: IPost) => ({
        url: `/posts/${post.id}`,
        method: 'PUT',
        body: post,
      }),
      invalidatesTags: ['Post'],
    }),
    deletePost: build.mutation<IPost, IPost>({
      query: (post: IPost) => ({
        url: `/posts/${post.id}`,
        method: 'DELETE',
        body: post,
      }),
      invalidatesTags: ['Post'],
    }),
  }),
});

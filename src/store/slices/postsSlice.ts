import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { TListPosts } from '@/interfaces';

interface IState {
  posts: TListPosts | [];
}

const initialState: IState = {
  posts: [],
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts: (state, action: PayloadAction<TListPosts>) => {
      state.posts = action.payload;
    },
  },
});

export const { getPosts } = postsSlice.actions;

export default postsSlice.reducer;

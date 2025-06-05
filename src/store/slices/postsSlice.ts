import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { TListPosts } from '@/interfaces';

interface IState {
  posts: TListPosts | [];
  filter: string;
}

const initialState: IState = {
  posts: [],
  filter: '',
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPosts: (state, action: PayloadAction<TListPosts>) => {
      state.posts = action.payload;
    },
    getFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
});

export const { getPosts, getFilter } = postsSlice.actions;

export default postsSlice.reducer;

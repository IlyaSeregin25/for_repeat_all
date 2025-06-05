import { configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import postsReducer from './slices/postsSlice';
import { postsApi } from './services/postsApi';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(postsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

setupListeners(store.dispatch);

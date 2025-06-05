import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
//import App from './pages/BaseLayout/ui/App.tsx';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Main } from './components/Main/index.ts';
import { BaseLayout } from './pages/BaseLayout/index.ts';
import { PostPage } from './pages/PostPage/index.ts';
import ErrorPage404 from './pages/ErrorPage404.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    errorElement: <ErrorPage404 />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: `posts/:postId`,
        element: <PostPage />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);

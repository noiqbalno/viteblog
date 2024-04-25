import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import UserPage from './pages/Users/UserPage';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import UserDetailPage from './pages/Users/UserDetailPage';
import PostDetailPage from './pages/Posts/PostDetailPage';
import AlbumDetailPage from './pages/Album/AlbumDetailPage';
import PostPage from './pages/Posts/PostPage';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 20 * 1000,
        refetchOnWindowFocus: false,
      },
    },
  });
  const router = createBrowserRouter([
    {
      path: '/',
      element: <UserPage />,
    },
    {
      path: '/user',
      element: <UserPage />,
    },
    {
      path: '/user/detail/:userId',
      element: <UserDetailPage />,
    },
    {
      path: '/post',
      element: <PostPage />,
    },
    {
      path: '/post/detail/:postId',
      element: <PostDetailPage />,
    },
    {
      path: '/album/detail/:albumId',
      element: <AlbumDetailPage />,
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;

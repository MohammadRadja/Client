import { AuthProvider } from 'react-auth-kit';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import BlogDetail from './pages/BlogDetail';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Register from './pages/Register';
import { Toaster } from 'react-hot-toast';
import FormInput from './pages/Form';
export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/blog',
      element: <Blog />,
    },
    {
      path: '/blog/:id',
      element: <BlogDetail />,
    },
    {
      path: '/form',
      element: <FormInput />,
    },
  ]);
  return (
    <>
      <AuthProvider
        authName="_auth"
        authType="cookie"
        cookieDomain={window.location.hostname}
        cookieSecure={window.location.protocol === 'https:'}
      >
        <Toaster />
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

import { AuthProvider, useIsAuthenticated } from 'react-auth-kit';
import { RouterProvider, createBrowserRouter, useRoutes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { Toaster } from 'react-hot-toast';
import LandingPage from './pages/LandingPage';
import TimeManagement from './pages/TimeManagement';
import DietPlan from './pages/DietPlan';
import FinancialRecord from './pages/FinancialRecord';
import Activity from './pages/Activity';
import ActivityDetail from './pages/ActivityDetail';

const PrivateRoute = ({ element }) => {
  const isAuth = useIsAuthenticated();

  if (!isAuth()) {
    // Redirect to the login page if not authenticated
    return <Navigate to="/" replace />;
  }

  return element;
};

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage />,
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
      path: '/home',
      element: <PrivateRoute element={<Home />} />,
    },
    {
      path: '/timeManagement',
      element: <PrivateRoute element={<TimeManagement />} />,
    },
    {
      path: '/dietPlan',
      element: <PrivateRoute element={<DietPlan />} />,
    },
    {
      path: '/financialRecord',
      element: <PrivateRoute element={<FinancialRecord />} />,
    },
    {
      path: '/activity',
      element: <PrivateRoute element={<Activity />} />,
    },
    {
      path: '/activity/:id',
      element: <PrivateRoute element={<ActivityDetail />} />,
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
};

export default App;

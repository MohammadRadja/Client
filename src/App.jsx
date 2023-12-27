import { AuthProvider, useIsAuthenticated } from "react-auth-kit";
import {
  RouterProvider,
  createBrowserRouter,
  useRoutes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import LandingPage from "./pages/LandingPage";
import TimeManagement from "./pages/TimeManagement";
import DietPlan from "./pages/DietPlan";
import FinancialRecord from "./pages/FinancialRecord";
import Activity from "./pages/Activity";
import ActivityDetail from "./pages/ActivityDetail";
import TimeManagementDetail from "./pages/TimeManagementDetail";
import FinancialRecordDetail from "./pages/FinancialRecordDetail";
import DietPlanDetail from "./pages/DietPlanDetail";
import BlogDetail from "./pages/BlogDetail";
import Blog from "./pages/Blog";

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
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },

    {
      path: "/home",
      element: <PrivateRoute element={<Home />} />,
    },

    {
      path: "/timeManagement",
      element: <PrivateRoute element={<TimeManagement />} />,
    },
    {
      path: "/timeManagement/:id",
      element: <PrivateRoute element={<TimeManagementDetail />} />,
    },

    {
      path: "/dietPlan",
      element: <PrivateRoute element={<DietPlan />} />,
    },
    {
      path: "/dietPlan/:id",
      element: <PrivateRoute element={<DietPlanDetail />} />,
    },

    {
      path: "/financialRecord",
      element: <PrivateRoute element={<FinancialRecord />} />,
    },
    {
      path: "/financialRecord/:id",
      element: <PrivateRoute element={<FinancialRecordDetail />} />,
    },

    {
      path: "/activity",
      element: <PrivateRoute element={<Activity />} />,
    },
    {
      path: "/activity/:id",
      element: <PrivateRoute element={<ActivityDetail />} />,
    },

    {
      path: "/blog",
      element: <PrivateRoute element={<Blog />} />,
    },
    {
      path: "/blog/:id",
      element: <PrivateRoute element={<BlogDetail />} />,
    },
  ]);

  return (
    <>
      <AuthProvider
        authName="_auth"
        authType="cookie"
        cookieDomain={window.location.hostname}
        cookieSecure={window.location.protocol === "https:"}
      >
        <Toaster />
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
};

export default App;

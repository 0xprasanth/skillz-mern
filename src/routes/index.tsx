import LoginPage from "@/pages/LoginPage";
import DashboardPage from "@/pages/DashboardPage";
import { Navigate, useRoutes } from "react-router-dom";
import SignupPage from "@/pages/SignupPage";
import { useAuthContext } from "@/hooks/useAuthContext";
import ErrorPage from "@/components/User/ErrorPage";
import TakeTestPage from "@/pages/TakeTestPage";
import TestPage from "@/pages/TestPage";

const Router = () => {
  const { isLoggedIn } = useAuthContext();

  return useRoutes([
    {
      path: "/",
      element: <Navigate to="/login" />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: isLoggedIn ? (
        <Navigate to="/dashboard" replace />
      ) : (
        <LoginPage />
      ),
    },
    {
      path: "/signup",
      element: isLoggedIn ? (
        <Navigate to="/dashboard" replace />
      ) : (
        <SignupPage />
      ),
    },
    {
      path: "/dashboard",
      element: isLoggedIn ? <DashboardPage /> : <Navigate to="/login" />,
    },
    {
      path: '/take-test',
      element: isLoggedIn ? <TakeTestPage /> : <Navigate to='/login' />
    },
    {
      path: '/take-test/:topic',
      element: isLoggedIn ? <TestPage /> : <Navigate to='/login' />
    }
  ]);
};

export default Router;

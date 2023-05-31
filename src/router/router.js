import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "../pages/error-page";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />
    },
    {
      path: "/sign_up",
      element: <SignUp />,
      errorElement: <ErrorPage />
    }
  ]);

export default router;
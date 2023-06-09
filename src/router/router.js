import {createBrowserRouter} from "react-router-dom";
import ErrorPage from "../pages/error-page";
import Home from "../pages/Home";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />
    },
  ]);

export default router;
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/index";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    // {
    //   path: "*",
    //   element: <NotFoundPage />,
    // },
  ]);

  return <RouterProvider router={router} />;
};

export default App;

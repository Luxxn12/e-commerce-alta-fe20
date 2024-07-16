import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/index";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Profile from "../pages/user/profile";
import Sales from "../pages/sales";
import Products from "../pages/product";
import AddProduct from "../pages/sales/add-product";
import EditProduct from "../pages/sales/edit-product";
import DetailProduct from "../pages/sales/detail-product";

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
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/my-product",
      element: <Sales />,
    },
    {
      path: "/my-product/add-product",
      element: <AddProduct />,
    },
    {
      path: "/my-product/:id_product",
      element: <EditProduct />,
    },
    {
      path: "/my-product/detail/:id_product",
      element: <DetailProduct />,
    },
    {
      path: "/products",
      element: <Products />,
    },
    // {
    //   path: "*",
    //   element: <NotFoundPage />,
    // },
  ]);

  return <RouterProvider router={router} />;
};

export default App;

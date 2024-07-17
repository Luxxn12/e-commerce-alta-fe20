import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/index";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Profile from "../pages/user/profile";
import Products from "../pages/product";
import AddProduct from "../pages/sales/add-product";
import EditProduct from "../pages/sales/edit-product";
import DetailProduct from "../pages/sales/detail-product";
// import Sales from "../pages/sales";
import Show from "../pages/product/show";
import Cart from "../pages/cart";
import Sales from "../pages/sales";
import MyTransaction from "../pages/my-transaction";
import DetailSeles from "../pages/my-transaction/sales-transaction/detail-seles";
import DetailTransaction from "../pages/my-transaction/transaction/detail-transaction";
import NotFoundPage from "../pages/not-found-page";
// import Sales from "../pages/sales";

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
    {
      path: "/product/:id_product",
      element: <Show />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/my-transaction",
      element: <MyTransaction />,
    },
    {
      path: "/my-transaction/detail-seles/:id_product",
      element: <DetailSeles />,
    },
    {
      path: "/my-transaction/detail-transaction/:id_product",
      element: <DetailTransaction />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;

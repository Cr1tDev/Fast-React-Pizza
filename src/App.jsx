import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { menuLoader, orderLoader, actionLoader } from "./services/dataLoader";

import Home from "./ui/Home";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

// Routing for the application
const router = createBrowserRouter([
  {
    // parent route for elements
    element: <AppLayout />,

    // Error always bubble up from child to parent ale
    errorElement: <Error />,
    // child routers nested route element
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        // provide data to menu element
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        // when form submit call the actionLoader and pass the data from the form
        action: actionLoader,
      },
      {
        /* URL → Route matched
          → loader runs (params injected)
          → data returned
          → component renders
          → useLoaderData() reads data */
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

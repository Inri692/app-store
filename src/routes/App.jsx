import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/Home";
import Detail from "../pages/Detail";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/detail/:id",
      element: <Detail />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;

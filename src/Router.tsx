// import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";

const Auth = React.lazy(() => import("./pages/Auth"));
const Profile = React.lazy(() => import("./pages/Profile"));
const Feed = React.lazy(() => import("./pages/Feed"));

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/auth",
      element: <Auth />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/feed",
      element: <Feed />,
    },
    {
      path: "*",
      element: <Auth />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;

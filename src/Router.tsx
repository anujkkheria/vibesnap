// import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import React from 'react'


const AddPost = React.lazy(() => import("./pages/AddPost"));
const Auth = React.lazy(() => import("./pages/Auth"));
const Profile = React.lazy(() => import("./pages/Profile"));
const Feed = React.lazy(() => import("./pages/Feed"));
const EditProfile = React.lazy(() => import('./pages/EditProfile'))

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/auth',
      element: <Auth />,
    },
    {
      path: '/profile',
      element: <Profile />,
    },
    {
      path: '/feed',
      element: <Feed />,
    },
    {
      path: "/add-post",
      element: <AddPost />,
    },
    {
      path: '/edit',
      element: <EditProfile />,
    },
    {
      path: '*',
      element: <Auth />,
    },
  ])
  return <RouterProvider router={router} />
}

export default Router

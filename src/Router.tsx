// import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Auth from './pages/Auth'
import Profile from './pages/Profile'

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
      path: '*',
      element: <Auth />,
    },
  ])
  return <RouterProvider router={router} />
}

export default Router

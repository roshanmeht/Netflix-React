import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import SigninPage from './SigninPage';
import Browse from './Browse';
import { RouterProvider } from 'react-router-dom';

 
const Body = () => {
    const route = createBrowserRouter([
        {
            path:"/",
            element:<SigninPage />
        },
        {
            path:"/browse",
            element:<Browse />
        }
     ])

 
  return (
    <div >
      <RouterProvider router={route} />
    </div>
  )
}

export default Body;

import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import SigninPage from './SigninPage';
import Browse from './Browse';
import { RouterProvider } from 'react-router-dom';
import Search from './Search';

 
const Body = () => {
    const route = createBrowserRouter([
        {
            path:"/",
            element:<SigninPage />
        },
        {
            path:"/browse",
            element:<Browse />
        },
        {
          path:"/search",
          element:<Search />
        }
     ])

 
  return (
    <div >
      <RouterProvider router={route} />
    </div>
  )
}

export default Body;

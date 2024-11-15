import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import ContextApi from "./ContextApi/ContextApi";

import Home from "./Layouts/Home";
import ErrorPage from "./ErrorPage/ErrorPage";
import NewsData from "./Components/NewsData";
import Auth from "./Layouts/Auth";


const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Home></Home>,
    children:[
      {
        path: "",
        element: <Navigate to="/news/category/01" replace />
      },
      
      
      {
        path:'/news/category/:category_id',
        element:<NewsData></NewsData>,
        loader:({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.category_id}`)
      }
    ]
  },
  {
    path:'/news',
    element:<h1>News Layout</h1>
  },
  {
    path:'/auth',
    element:<Auth></Auth>,
    children:[
      {
        path:"/auth/login",
        element:<h2>Login</h2>,
      },
      {
        path:"/auth/register",
        element:<h2>Register</h2>
      }
    ]
  },

]);
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextApi>
      <RouterProvider router={router} />
    </ContextApi>
  </React.StrictMode>
);

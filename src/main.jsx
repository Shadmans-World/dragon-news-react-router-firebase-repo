import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import ContextApi from "./ContextApi/ContextApi";

import Home from "./Layouts/Home";
import ErrorPage from "./ErrorPage/ErrorPage";
import NewsData from "./Components/NewsData";
import Auth from "./Layouts/Auth";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import NewsDetails from "./Pages/NewsDetails";
import PrivateRoute from "./PrivateRoute/PrivateRoute";


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
    path:'/news/:id',
    element:<PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
    loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
  },
  {
    path:'/auth',
    element:<Auth></Auth>,
    children:[
      {
        path:"/auth/login",
        element:<Login></Login>,
      },
      {
        path:"/auth/register",
        element:<Register></Register>
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

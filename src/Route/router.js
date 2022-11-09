import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog";
import Dashboard from "../Components/Dashboard";
import ForgetPassword from "../Components/ForgetPassword";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "resetpassword",
        element: <ForgetPassword></ForgetPassword>,
      },
    ],
  },
]);

export default router;

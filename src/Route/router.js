import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog";
import Dashboard from "../Components/Dashboard";
import ForgetPassword from "../Components/ForgetPassword";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Service from "../Components/Service";
import ServiceDetails from "../Components/ServiceDetails";
import PrivateRoute from "./PrivateRoute";
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
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "resetpassword",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "service",
        element: (
          <PrivateRoute>
            <Service></Service>
          </PrivateRoute>
        ),
      },
      {
        path: "servicedetails",
        element: <ServiceDetails></ServiceDetails>,
      },
    ],
  },
]);

export default router;

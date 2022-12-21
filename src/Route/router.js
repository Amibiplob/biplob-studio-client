import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AddItem from "../Components/AddItem";
import Blog from "../Components/Blog";
import ErrorPage from "../Components/ErrorPage";
import ForgetPassword from "../Components/ForgetPassword";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Profile from "../Components/Profile";
import Register from "../Components/Register";
import ReviewItem from "../Components/ReviewItem";
import Service from "../Components/Service";
import ServiceDetails from "../Components/ServiceDetails";
import ServiceReview from "../Components/ServiceReview";
import PrivateRoute from "./PrivateRoute";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "resetpassword",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "service",
        loader: () => fetch("https://biplob-studio.vercel.app/services"),
        element: <Service></Service>,
      },
      {
        path: "servicedetails/:id",
        loader: ({ params }) =>
          fetch(`https://biplob-studio.vercel.app/services/${params.id}`),
        element: (
          <PrivateRoute>
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "reviewitem",
        element: (
          <PrivateRoute>
            <ReviewItem></ReviewItem>
          </PrivateRoute>
        ),
      },
      {
        path: "servicereview",
        element: (
          <PrivateRoute>
            <ServiceReview></ServiceReview>
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "addservice",
        loader: () => fetch("https://biplob-studio.vercel.app/services"),
        element: (
          <PrivateRoute>
            <AddItem></AddItem>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Product from "./components/post";
import Profile from "./components/Profile";
import ErrorPage from "./sprint-page/errorspage";
import ProductDetails from "./sprint-page/ProductDetails";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./sprint-page/Login";
import FruitShop from "./components/fruit";
import Register from "./sprint-page/Register";
import UserDashboard from "./dashboard/dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FruitShop></FruitShop>,
    errorElement: <ErrorPage />,
  },
  {
    path: "products",
    element: <Product />,
    errorElement: <ErrorPage />,
  },
  {
    path: "cv",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "products/:id",
    element: <ProductDetails />,
    errorElement: <ErrorPage />,
  },
  {
    path: "Login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "Register",
    element: <Register />,
    errorElement: <ErrorPage />,
  },
  {
    path: "Dashboard",
    element: <UserDashboard />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

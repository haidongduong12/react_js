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

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
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

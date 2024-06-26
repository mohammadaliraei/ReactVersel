import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./componenet/Home.tsx";
import ErrorPage from "./ErrorPage.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <ErrorPage /> },
  { path: "/home", element: <Home /> },
]);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

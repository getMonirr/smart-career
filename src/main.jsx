// react import
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// rrd import
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// components import
import Home from "./components/Home";
import Statistics from "./components/Statistics";
import AppliedJob from "./components/AppliedJob";
import Blog from "./components/Blog";
import Hero from "./components/Hero";
import { categoriesAndJobsLoader } from "./Loader/categoriesAndJobsLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: categoriesAndJobsLoader,
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "applied-jobs",
        element: <AppliedJob />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

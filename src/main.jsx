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
import { categoriesAndJobsLoader } from "./Loader/categoriesAndJobsLoader";
import JobDetails from "./components/JobDetails";
import { jobLoader } from "./Loader/jobLoader";

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
        path: "job/:jobId",
        element: <JobDetails />,
        loader: jobLoader,
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

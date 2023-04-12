import React, { createContext, useState } from "react";
import { Header } from "./components/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import ScrollToTopFix from "./components/ScrollToTopFix";

export const AppliedJobsContext = createContext([]);

const App = () => {
  const appliedJob = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState(appliedJob);
  return (
    <>
      <AppliedJobsContext.Provider value={[appliedJobs, setAppliedJobs]}>
        <ScrollToTopFix />
        <div>
          <Header />
        </div>
        <div>
          <Outlet />
        </div>
        <div>
          <Footer />
        </div>
        <Toaster />
      </AppliedJobsContext.Provider>
    </>
  );
};

export default App;

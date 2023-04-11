import React, { createContext } from "react";
import { Header } from "./components/Header";
import { Outlet, useLoaderData } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Footer from "./components/Footer";
import ScrollToTopFix from "./components/ScrollToTopFix";

export const AppliedJobsContext = createContext([]);

const App = () => {
  const appliedJob = useLoaderData();
  return (
    <>
      <AppliedJobsContext.Provider value={appliedJob}>
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

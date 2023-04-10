import React from "react";

// components import
import Hero from "./Hero";
import JobCategories from "./JobCategories";
import FeaturedJobs from "./FeaturedJobs";

const Home = () => {
  return (
    <div>
      <Hero />
      <JobCategories />
      <FeaturedJobs />
    </div>
  );
};

export default Home;

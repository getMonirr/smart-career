import React from "react";
import { useLoaderData } from "react-router-dom";
import FeaturedJob from "./FeaturedJob";

const FeaturedJobs = () => {
  // jobs data load
  const {
    jobs: { jobs },
  } = useLoaderData();
  console.log(jobs);
  return (
    <div className="sm-container">
      <div className="text-center">
        <h3 className="text-3xl md:text-5xl font-extrabold mb-4 text-d1">
          Featured Jobs
        </h3>
        <p className="text-d3">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 mb-32 gap-6">
        {jobs.map((j) => (
          <FeaturedJob key={j.id} job={j} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedJobs;

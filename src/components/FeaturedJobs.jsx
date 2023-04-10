import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import FeaturedJob from "./FeaturedJob";
import Button from "./Button";

const FeaturedJobs = () => {
  // jobs data load
  const {
    jobs: { jobs },
  } = useLoaderData();

  // initial 4 jobs showing
  const initialJobs = jobs.slice(0, 4);

  const [showAll, setShowAll] = useState(initialJobs);

  // handle see all jobs
  const handleSeeAllJobs = () => {
    setShowAll(jobs);
  };
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
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-8 mb-10 gap-6">
        {showAll.map((j) => (
          <FeaturedJob key={j.id} job={j} />
        ))}
      </div>
      <div
        className={`text-center mb-32 ${
          showAll.length === jobs.length && "hidden"
        }`}
      >
        <Button handleOnClick={handleSeeAllJobs}>See All Jobs</Button>
      </div>
    </div>
  );
};

export default FeaturedJobs;

import React from "react";
import { useLoaderData } from "react-router-dom";
import JobCategory from "./JobCategory";

const JobCategories = () => {
  // load categories data
  const categories = useLoaderData();

  return (
    <div className="sm-container my-32">
      <div className="text-center">
        <h3 className="text-3xl md:text-5xl font-extrabold mb-4 text-d1">
          Job Category List
        </h3>
        <p className="text-d3">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 mb-32">
        {categories.map((c) => (
          <JobCategory key={c.id} category={c} />
        ))}
      </div>
    </div>
  );
};

export default JobCategories;

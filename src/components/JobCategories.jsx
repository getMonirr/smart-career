import React from "react";
import { useLoaderData } from "react-router-dom";
import JobCategory from "./JobCategory";

const JobCategories = () => {
  // load categories data
  const categories = useLoaderData();

  return (
    <div className="sm-container my-32">
      <div className="text-center">
        <h3 className="text-5xl font-extrabold mb-4">Job Category List</h3>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid grid-cols-4 gap-6 mt-8 mb-32">
        {categories.map((c) => (
          <JobCategory key={c.id} category={c} />
        ))}
      </div>
    </div>
  );
};

export default JobCategories;

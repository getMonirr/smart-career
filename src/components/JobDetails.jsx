import React from "react";
import { useLoaderData } from "react-router-dom";

// icon import
import Button from "./Button";
import JobDetailsCard from "./JobDetailsCard";
import JobDetailsDesc from "./JobDetailsDesc";

const JobDetails = () => {
  // job load
  const job = useLoaderData();

  return (
    <>
      <h3 className="text-center h-[400px] flex justify-center items-center hero-bg bg-[url('src/assets/Vector-1.png')]">Job Details</h3>
      <div className="sm-container">
        <div className="flex gap-6 items-start mt-32">
          <JobDetailsDesc job={job} />
          <div>
            <JobDetailsCard job={job} />
            <Button className="w-full mt-6">Apply Now</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;

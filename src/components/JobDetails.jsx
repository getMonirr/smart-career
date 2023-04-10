import React from "react";
import { useLoaderData } from "react-router-dom";

// components import
import Button from "./Button";
import JobDetailsCard from "./JobDetailsCard";
import JobDetailsDesc from "./JobDetailsDesc";
import DetailsCommonCompo from "./DetailsCommonCompo";

const JobDetails = () => {
  // job load
  const job = useLoaderData();

  return (
    <>
      <DetailsCommonCompo>
        Job Details
      </DetailsCommonCompo>
      <div className="sm-container">
        <div className="flex gap-6 items-start my-32">
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

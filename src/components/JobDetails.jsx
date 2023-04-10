import React from "react";
import { useLoaderData, useRouteError } from "react-router-dom";

// components import
import Button from "./Button";
import JobDetailsCard from "./JobDetailsCard";
import JobDetailsDesc from "./JobDetailsDesc";
import DetailsCommonCompo from "./DetailsCommonCompo";
import { addToDataBase } from "../utilities/fakedb";

const JobDetails = () => {
  // job load
  const job = useLoaderData();
  const { id } = job;

  // handle job apply
  const handleJobApply = (id) => {
    addToDataBase(id);
  };

  return (
    <>
      <DetailsCommonCompo>Job Details</DetailsCommonCompo>
      <div className="sm-container">
        <div className="lg:flex gap-6 items-start my-32">
          <JobDetailsDesc job={job} />
          <div>
            <JobDetailsCard job={job} />
            <Button
              handleOnClick={() => handleJobApply(id)}
              className="w-full mt-6"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;

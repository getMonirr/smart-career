import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";

// components import
import Button from "./Button";
import JobDetailsCard from "./JobDetailsCard";
import JobDetailsDesc from "./JobDetailsDesc";
import DetailsCommonCompo from "./DetailsCommonCompo";
import { addToDataBase } from "../utilities/fakedb";
import { toast } from "react-hot-toast";
import { AppliedJobsContext } from "../App";

const JobDetails = () => {
  const [appliedJobs, setAppliedJobs] = useContext(AppliedJobsContext);

  // job load
  const job = useLoaderData();
  const { id } = job;

  // handle job apply
  const handleJobApply = (job) => {
    addToDataBase(id);
    const applied = appliedJobs.find((ajb) => ajb.id === job.id);
    if (applied) {
      toast.error("Already Applied");
    } else {
      setAppliedJobs([...appliedJobs, job]);
      toast.success("Applied Successfully");
    }
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
              handleOnClick={() => handleJobApply(job)}
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

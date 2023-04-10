import React, { useState } from "react";
import DetailsCommonCompo from "./DetailsCommonCompo";
import { useLoaderData } from "react-router-dom";
import AppliedJob from "./AppliedJob";

const AppliedJobs = () => {
  const appliedJobs = useLoaderData();
  const [jobCart, setJobCart] = useState(appliedJobs);
  return (
    <>
      <DetailsCommonCompo>Applied Jobs</DetailsCommonCompo>
      <div className="sm-container my-32">
        <div>
          {jobCart.map((jb) => (
            <AppliedJob key={jb.id} appliedJob={jb} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AppliedJobs;

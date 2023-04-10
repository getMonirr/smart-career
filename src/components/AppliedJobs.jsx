import React, { useEffect, useState } from "react";
import DetailsCommonCompo from "./DetailsCommonCompo";
import { useLoaderData } from "react-router-dom";
import AppliedJob from "./AppliedJob";

const AppliedJobs = () => {
  const appliedJobs = useLoaderData();
  const [filteredJob, setFilteredJob] = useState(appliedJobs);

  // handle filter
  const handleFilter = (e) => {
    const filterOption = e.target.value;
    const filteredAppliedJob = appliedJobs.filter((ajb) => {
      if (filterOption.toLocaleLowerCase() !== "all") {
        return (
          ajb.type.toLocaleLowerCase() === filterOption.toLocaleLowerCase()
        );
      }
      return ajb;
    });
    setFilteredJob(filteredAppliedJob);
  };

  return (
    <>
      <DetailsCommonCompo>Applied Jobs</DetailsCommonCompo>
      <div className="sm-container my-32">
        <div className="text-end mb-8">
          <select
            onChange={handleFilter}
            className="select select-bordered w-32 max-w-xs rounded-lg"
          >
            <option disabled value>
              Filter By
            </option>
            <option>All</option>
            <option>Remote</option>
            <option>Onsite</option>
          </select>
        </div>
        <div>
          {filteredJob.map((jb) => (
            <AppliedJob key={jb.id} appliedJob={jb} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AppliedJobs;

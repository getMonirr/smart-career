import React, { useEffect, useState } from "react";
import DetailsCommonCompo from "./DetailsCommonCompo";
import { Link, useLoaderData } from "react-router-dom";
import AppliedJob from "./AppliedJob";
import Button from "./Button";

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
        {filteredJob.length > 0 && (
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
        )}
        <div>
          {filteredJob.length === 0 && (
            <div>
              <h1 className="text-2xl font-extrabold text-d2 mb-4">
                Currently you have no applied job
              </h1>
              <Link to="/">
                <Button>Find Job</Button>
              </Link>
            </div>
          )}
          {filteredJob.map((jb) => (
            <AppliedJob key={jb.id} appliedJob={jb} />
          ))}
        </div>
      </div>
    </>
  );
};

export default AppliedJobs;

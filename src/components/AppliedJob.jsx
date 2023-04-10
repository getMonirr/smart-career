import React from "react";
import locationIcon from "../assets/icons/Location_icon.png";
import dollarIcon from "../assets/icons/dollar.png";
import Button from "./Button";
import { Link } from "react-router-dom";

const AppliedJob = ({ appliedJob }) => {
  const { logo, title, name, type, timeType, salary, address, id } = appliedJob;
  return (
    <div className="flex items-center gap-8 p-7 border rounded-lg border-d6 mb-6">
      <div className="bg-d6 rounded-lg p-16">
        <img src={logo} alt={title} />
      </div>
      <div className="flex justify-between items-center flex-grow">
        <div>
          <h2 className="font-extrabold text-2xl text-d2 leading-8 mb-1">
            {" "}
            {title}{" "}
          </h2>
          <h3 className="text-d3 font-semibold text-xl mb-1">{name}</h3>
          <div className="my-4">
            <button className="jobs-btn mr-4">{type}</button>
            <button className="jobs-btn">{timeType}</button>
          </div>

          <div className="md:flex items-center md:space-x-6 space-y-2 md:space-y-0 mt-8 md:mt-0">
            <p className="inline-flex items-center gap-2">
              <img src={locationIcon} alt={locationIcon} />
              <span className="text-base font-semibold text-d3">{address}</span>
            </p>
            <p className="inline-flex items-center gap-2">
              <img src={dollarIcon} alt={dollarIcon} />
              <span className="text-base font-semibold text-d3">
                {" "}
                Salary: {salary}
              </span>
            </p>
          </div>
        </div>
        <div>
          <Link to={`../job/${id}`}>
            <Button className="lg:px-[18px] lg:py-[10px]">View Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppliedJob;

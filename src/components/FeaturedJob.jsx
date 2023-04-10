import React from "react";

// icon
import locationIcon from "../assets/icons/Location_icon.png";
import dollarIcon from "../assets/icons/dollar.png";
import Button from "./Button";
import { Link } from "react-router-dom";

const FeaturedJob = ({ job }) => {
  const { logo, title, name, type, timeType, salary, address, id } = job;
  return (
    <div className="p-5 lg:p-10 border rounded-lg border-d6">
      <div className="">
        <img className="mb-8 object-cover origin-center" src={logo} alt={name} />
      </div>
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
          <img src={dollarIcon} alt={locationIcon} />
          <span className="text-base font-semibold text-d3">
            {" "}
            Salary: {salary}
          </span>
        </p>
      </div>
      <Link to={`/job/${id}`}>
        <Button className={`lg:px-4 lg:py-3 mt-9`}>View Details</Button>
      </Link>
    </div>
  );
};

export default FeaturedJob;

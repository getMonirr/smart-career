import React from "react";

// icon import
import colorDollar from "../assets/icons/colorDollar.png";
import emailIcon from "../assets/icons/email.png";
import locationIcon from "../assets/icons/location.png";
import phoneIcon from "../assets/icons/phone.png";
import titleIcon from "../assets/icons/title.png";

const JobDetailsCard = ({ job }) => {
  const {
    salary,
    title,
    location,
    contact_info: { phone, email },
    address,
  } = job;
  return (
    <div>
      <div className="card w-[424px] bg-base-100">
        <div className="card-body job-details-bg rounded-lg p-7">
          <div>
            <h2 className="card-title text-xl font-extrabold text-d1">
              Job Details
            </h2>
            <hr className="my-6 border border-sm-bg1 border-opacity-30" />
            <p className="inline-flex text-lg font-extrabold text-d2 mb-4">
              {" "}
              <img className="mr-2" src={colorDollar} alt="salary" />
              Salary:
              <span className="font-medium text-d3">
                {salary} {"(Per Month)"}
              </span>
            </p>
            <p className="inline-flex gap-2 text-lg font-extrabold text-d2">
              {" "}
              <img src={titleIcon} alt="title" />
              Job Title: <span className="font-medium text-d3">{title}</span>
            </p>
          </div>
          <div>
            <h2 className="card-title">Contact Information</h2>
            <hr className="my-6 border border-sm-bg1 border-opacity-30" />
            <p className="inline-flex gap-2 text-lg font-extrabold text-d2 mb-4">
              {" "}
              <img src={phoneIcon} alt="phone" />
              Phone: <span className="font-medium text-d3">{phone}</span>
            </p>
            <p className="inline-flex gap-2 text-lg font-extrabold text-d2 mb-4">
              {" "}
              <img src={emailIcon} alt="email" />
              Email: <span className="font-medium text-d3">{email}</span>
            </p>
            <div className="flex text-lg font-extrabold text-d2 justify-start gap-2">
              {" "}
              <img className="h-7 w-7" src={locationIcon} alt="phone" />
              <p className="font-medium text-d3">
                {" "}
                <span className="text-lg font-extrabold text-d2">
                  Job Title:
                </span>
                {address} {location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetailsCard;

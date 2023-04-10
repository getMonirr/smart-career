import React from 'react';

const JobDetailsDesc = ({job}) => {
    const { description, responsibility, edu_requirements, experiences } = job;
    return (
        <div>
            <div className="font-extrabold text-base leading-8 space-y-6 text-d1">
          <p>
            Job Description:{" "}
            <span className="text-d3 font-medium">{description}</span>
          </p>
          <p>
            Job Responsibility:{" "}
            <span className="text-d3 font-medium">{responsibility}</span>
          </p>
          <div>
            <p>Educational Requirements:</p>
            <p className="text-d3 font-medium">{edu_requirements}</p>
          </div>
          <div>
            <p>Experiences:</p>
            <p className="text-d3 font-medium">{experiences}</p>
          </div>
        </div>
        </div>
    );
};

export default JobDetailsDesc;
import React from "react";
import Button from "./Button";

// person image import
import heroPerson from "../assets/parson.png";

const Hero = () => {
  return (
    <div className="hero-bg">
      <div className="flex justify-between gap-6 items-center flex-col-reverse md:flex-row sm-container py-6">
        <div className="md:w-5/12 space-y-8">
          <h1 className="font-extrabold text-4xl md:text-7xl md:leading-tight">
            One Step Closer To Your <br className="md:hidden" />{" "}
            <span className="active">Dream Job</span>
          </h1>
          <p className="text-base md:text-lg font-medium leading-8">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <Button>Get Started</Button>
        </div>
        <div className="md:w-6/12 md:-mr-20">
          <img
            className="object-right"
            src={heroPerson}
            alt="HeroPerson image"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

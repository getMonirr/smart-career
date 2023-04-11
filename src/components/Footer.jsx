import React from "react";
import socialGroup from "../assets/icons/socail-group.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-d1 text-d3 py-24">
      <div className="sm-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 space-y-14 md:space-y-0 text-base md:gap-8">
          <div className="space-y-4">
            <h4 className="font-extrabold text-3xl text-d6 mb-3">
              Smart Career
            </h4>
            <p>
              There are many variations of passages of Lorem Ipsum , but the
              majority have suffered alteration in some form.
            </p>
            <img src={socialGroup} alt="social group" />
          </div>
          <div>
            <h4 className="font-extrabold text-xl text-d6 mb-3">Company</h4>
            <ul className="font-normal text-base space-y-3 flex flex-col">
              <Link>About Us</Link>
              <Link>Work</Link>
              <Link>Latest news</Link>
              <Link>Career</Link>
            </ul>
          </div>
          <div>
            <h4 className="font-extrabold text-xl text-d6 mb-3">Product</h4>
            <ul className="font-normal text-base space-y-3 flex flex-col">
              <Link>About Us</Link>
              <Link>Work</Link>
              <Link>Latest news</Link>
              <Link>Career</Link>
            </ul>
          </div>
          <div>
            <h4 className="font-extrabold text-xl text-d6 mb-3">Support</h4>
            <ul className="font-normal text-base space-y-3 flex flex-col">
              <Link>About Us</Link>
              <Link>Work</Link>
              <Link>Latest news</Link>
              <Link>Career</Link>
            </ul>
          </div>
          <div>
            <h4 className="font-extrabold text-xl text-d6 mb-3">Contact</h4>
            <ul className="font-normal text-base space-y-3 flex flex-col">
              <Link>About Us</Link>
              <Link>Work</Link>
              <Link>Latest news</Link>
              <Link>Career</Link>
            </ul>
          </div>
        </div>
        <hr className="my-12 opacity-20" />
        <div className="md:flex justify-between items-center text-sm md:text-base space-y-6 md:skew-y-0 text-center">
          <p>@2023 SmartCareer. All Rights Reserved</p>
          <p>Powered by SmartCareer</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

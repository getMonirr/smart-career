import React from "react";
import bottomBg from "../assets/Vector.png";
import topBg from "../assets/Vector-1.png";

const DetailsCommonCompo = ({ children }) => {
  return (
    <div className="relative">
      <div
        className="text-center h-[250px] bg-no-repeat flex justify-center items-center"
        style={{
          backgroundImage: `url(${bottomBg}), linear-gradient(90deg, rgba(126, 144, 254, 0.05) 0%, rgba(152, 115, 255, 0.05) 100%)`,
          backgroundPosition: "left bottom, top right,center",
        }}
      >
        <h3 className="text-3xl font-extrabold text-d1">{children}</h3>
        <img className="absolute right-0 -top-36 -z-40" src={topBg} alt="bg" />
      </div>
    </div>
  );
};

export default DetailsCommonCompo;

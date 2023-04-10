import React from "react";

const Button = ({children,className}) => {
  return (
    <button
      className={ `px-3 py-2 lg:px-7 lg:py-5 bg-slate-500 rounded-lg bg-gradient-to-r from-sm-bg1 to-sm-bg2 font-extrabold text-base lg:text-xl text-white ${className}`}
    >
     {children}
    </button>
  );
};

export default Button;

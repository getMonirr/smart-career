import React from "react";

const JobCategory = ({ category }) => {
  const { name, jobs, img } = category;
  console.log(category);

  return (
    <div className="p-10 hero-bg rounded-lg">
      <img className="category-img-bg p-4 mb-8 rounded-md" src={img} alt={name} />
      <h4 className="font-extrabold text-xl mb-2 text-d2">{name}</h4>
      <p className="font-medium text-base text-d4">{jobs <= 100 ? `${jobs}+` : `${jobs}`} Jobs Available</p>
    </div>
  );
};

export default JobCategory;

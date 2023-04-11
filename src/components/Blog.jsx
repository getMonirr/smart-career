import React from "react";

const Blog = ({ blog }) => {
  const { question, answer } = blog;
  return (
    <div className="mockup-window border bg-base-300 mb-8">
      <div className="flex justify-center px-4 py-16 bg-base-200">
        <div>
        <h3 className="text-center my-4 text-2xl font-bold text-d1"> {question} </h3>
        <p className="font-medium text-d3 leading-8"> {answer} </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;

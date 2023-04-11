import React from "react";
import DetailsCommonCompo from "./DetailsCommonCompo";
import Blog from "./Blog";
import { useLoaderData } from "react-router-dom";

const Blogs = () => {
  const blogs = useLoaderData();
  return (
    <>
      <DetailsCommonCompo>Blog Page</DetailsCommonCompo>
      <div className="sm-container">
        <div className="my-32">
          {blogs.map((b) => (
            <Blog key={b.id} blog={b} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;

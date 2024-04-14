import React from "react";
import SubTitle from "./SubTitle";

const CardWork = ({ title, tech, image }) => {
  return (
    <div className="bg-base-100 rounded p-3 flex flex-col gap-1">
      <img src={image} className="bg-red-50 rounded-t h-48 object-cover" />
      <div className="text-xs">techstack: {tech}</div>
      <SubTitle title={title} />
    </div>
  );
};

export default CardWork;

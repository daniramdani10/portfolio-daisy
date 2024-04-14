import React from "react";

const TagTech = ({ children }) => {
  return (
    <span className="px-2 py-[1px] rounded text-[10px] badge-ghost font-normal">
      {children}
    </span>
  );
};

export default TagTech;

import React from "react";

const CardResume = ({ title, tahun, position, children }) => {
  return (
    <div className="text-sm flex flex-col gap-1 py-1">
      <div className="flex justify-between font-semibold bg-base-300">
        <div>{title}</div>
        <div>{tahun}</div>
      </div>
      <div className="text-xs">{position}</div>
      {children}
    </div>
  );
};

export default CardResume;

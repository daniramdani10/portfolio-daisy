import React from "react";

const ListProgress = ({ title, progress }) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="text-xs">{title}</div>
      <progress
        className="progress progress-primary w-full"
        value={progress}
        max="100"
      ></progress>
    </div>
  );
};

export default ListProgress;

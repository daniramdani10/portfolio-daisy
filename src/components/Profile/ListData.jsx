import React from "react";

const ListData = ({ children, label, content }) => {
  return (
    <div className="flex gap-5 items-center px-5">
      <div className="p-2 rounded-md shadow-md bg-base-200">{children}</div>
      <div>
        <div>{label}</div>
        <div className="text-sm">{content}</div>
      </div>
    </div>
  );
};

export default ListData;

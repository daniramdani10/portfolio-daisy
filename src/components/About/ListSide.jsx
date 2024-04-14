import React from "react";

const ListSide = ({ logo, label, children }) => {
  return (
    <div className="flex flex-col p-5 rounded-md border w-full gap-3">
      <div className="flex items-center font-extrabold text-sm">
        {logo}
        {label}
      </div>
      {children}
    </div>
  );
};

export default ListSide;

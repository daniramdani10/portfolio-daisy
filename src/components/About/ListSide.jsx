import React from "react";

const ListSide = ({ logo, label, children }) => {
  return (
    <div className="flex flex-col p-5 rounded-md bg-base-100 shadow-sm w-full lg:max-w-[438px] gap-3">
      <div className="flex items-center gap-3">
        {logo}
        {label}
      </div>
      {children}
    </div>
  );
};

export default ListSide;
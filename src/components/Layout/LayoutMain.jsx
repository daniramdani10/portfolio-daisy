import React from "react";

const LayoutMain = ({ title, children }) => {
  return (
    <div className="bg-base-200 rounded px-5 py-7 relative gap-3 flex flex-col my-7">
      <div className="absolute -top-3 font-bold bg-base-300 rounded shadow px-5 py-1 text-lg">
        {title}
      </div>
      {children}
    </div>
  );
};

export default LayoutMain;

import React from "react";

const HeaderContent = ({ title, children, logo }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="font-bold text-xl flex items-center gap-2">
        {logo}
        {title}
      </div>
      <div className="text-sm">{children}</div>
    </div>
  );
};

export default HeaderContent;

import React from "react";

const ListResume = ({
  year,
  title,
  position,
  ipk,
  title_description,
  children,
}) => {
  return (
    <div className="border p-5 rounded relative">
      <div className="text-base font-bold absolute -top-5 left-5 bg-[#212121] p-2 rounded-md">
        {title}
      </div>
      <div className="text-xs font-light absolute -top-4 right-5 bg-[#212121] p-2 rounded-md">
        {year}
      </div>
      <div className="text-xs ">{position}</div>
      <div className="text-primary">{ipk}</div>
      <div>
        {title_description} : <div className="text-xs">{children}</div>
      </div>
    </div>
  );
};

export default ListResume;

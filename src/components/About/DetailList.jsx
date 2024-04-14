import { Dot } from "@phosphor-icons/react";
import React from "react";

const DetailList = ({ children }) => {
  return (
    <div className="text-xs flex place-items-start ">
      <Dot size={20} />
      {children}
    </div>
  );
};

export default DetailList;

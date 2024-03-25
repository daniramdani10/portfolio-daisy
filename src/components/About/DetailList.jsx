import { CheckCircle } from "@phosphor-icons/react";
import React from "react";

const DetailList = ({ children }) => {
  return (
    <div className="flex items-center gap-2 text-xs">
      <CheckCircle size={20} />
      {children}
    </div>
  );
};

export default DetailList;

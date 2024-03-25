import React from "react";
import HeaderContent from "../atom/HeaderContent";
import ListProgress from "../atom/ListProgress";
import { DevToLogo } from "@phosphor-icons/react";

const Proficiency = () => {
  return (
    <div className="my-3 px-7">
      <HeaderContent title="Proficiency" logo={<DevToLogo size={32} />}>
        <ListProgress title="Front-end" progress={80} />
        <ListProgress title="Back-end" progress={70} />
        <ListProgress title="Programming" progress={50} />
      </HeaderContent>
    </div>
  );
};

export default Proficiency;

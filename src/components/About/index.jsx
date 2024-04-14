import { Dot } from "@phosphor-icons/react";
import React from "react";
import ListProgress from "../atom/ListProgress";
import LayoutMain from "../Layout/LayoutMain";
import SubTitle from "../atom/SubTitle";
import DetailList from "./DetailList";

const About = () => {
  return (
    <LayoutMain title="About">
      <div className="text-xs">
        I am a junior fornt-end developer who is attending a full-stack
        developer bootcamp in Harisenin. I turn designs into interactive web
        pages.
      </div>
      <div className="flex flex-col gap-1">
        <SubTitle title="Frontend" />
        <DetailList>
          Building responsive SPA & PWA in React.js and Vue.js
        </DetailList>
        <DetailList>
          Building Responsive Static Websites Using Next.js
        </DetailList>
      </div>
      <div className="flex flex-col gap-1">
        <SubTitle title="Backend" />
        <DetailList>Manage database system</DetailList>
        <DetailList>Building Rest API using Express and Prisma</DetailList>
      </div>
      <div>
        <div className="text-base font-semibold">Proficiency</div>
        <ListProgress title="Front-end" progress={80} />
        <ListProgress title="Back-end" progress={70} />
        <ListProgress title="Programming" progress={50} />
      </div>
    </LayoutMain>
  );
};

export default About;

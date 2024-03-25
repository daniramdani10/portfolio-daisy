import {
  Code,
  Database,
  Laptop,
  Student,
  UserCircle,
} from "@phosphor-icons/react";
import React from "react";
import DetailList from "./DetailList";
import ListSide from "./ListSide";
import TagTech from "./TagTech";
import HeaderContent from "../atom/HeaderContent";

const About = () => {
  return (
    <div className="flex flex-col px-7 gap-5">
      <HeaderContent title="About" logo={<UserCircle size={32} />}>
        I am a junior fornt-end developer who is attending a full-stack
        developer bootcamp in Harisenin. I turn designs into interactive web
        pages.
      </HeaderContent>
      <div className="flex flex-col gap-3">
        <HeaderContent
          title="What i do"
          logo={<Code size={32} />}
        ></HeaderContent>
      </div>
      <div className="flex justify-between gap-5 flex-wrap">
        <ListSide logo={<Laptop size={36} />} label="Front-end">
          <DetailList>
            Building responsive SPA & PWA in React.js and Vue.js
          </DetailList>
          <DetailList>
            Building Responsive Static Websites Using Next.js
          </DetailList>
          <div className="flex gap-3 items-start border-t py-3 border-neutral-content">
            <div className="text-xs min-w-20">Tech Stack:</div>
            <div className="flex gap-1 flex-wrap ">
              <TagTech>Html</TagTech>
              <TagTech>JavaScript</TagTech>
              <TagTech>Css</TagTech>
              <TagTech>React Js</TagTech>
              <TagTech>Vue Js</TagTech>
              <TagTech>TypeScript</TagTech>
              <TagTech>Next Js</TagTech>
              <TagTech>Redux Js</TagTech>
            </div>
          </div>
        </ListSide>

        <ListSide logo={<Database size={36} />} label="Back-end">
          <DetailList>Manage database system</DetailList>
          <DetailList>Building Rest API using Express and Prisma</DetailList>
          <div className="flex gap-3 items-start border-t py-3 border-neutral-content">
            <div className="text-xs min-w-20">Tech Stack:</div>
            <div className="flex gap-1 flex-wrap">
              <TagTech>Database</TagTech>
              <TagTech>Express</TagTech>
              <TagTech>Sequelize</TagTech>
              <TagTech>Prisma</TagTech>
            </div>
          </div>
        </ListSide>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import HeaderContent from "../atom/HeaderContent";
import ListResume from "./ListResume";
import LayoutMain from "../Layout/LayoutMain";
import SubTitle from "../atom/SubTitle";
import CardResume from "../atom/CardResume";
import { Dot } from "@phosphor-icons/react";
import DetailList from "../About/DetailList";

const index = () => {
  return (
    // <div className="my-3 px-7">
    //   <HeaderContent title="">
    //     <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
    //       <div className="flex flex-col gap-7">
    //         <div className="font-bold text-lg">Education</div>
    //         <ListResume
    //           year={2024}
    //           title="Harisenin Bootcamp"
    //           position="Fullstack - Developer"
    //           ipk="3.47 / 4.0"
    //           title_description="Final Project"
    //         >
    //           Design and Develop Sportwear commerce within three months
    //         </ListResume>
    //         <ListResume
    //           year={2020}
    //           title="Kuningan University"
    //           position="Bachelor's Degree in Informatics Engineering"
    //           ipk="3.47 / 4.0"
    //           title_description="Thesis"
    //         >
    //           The Virtual Reality-Based Shortest Path Searching Application For
    //           Existing Building Locations In Kuningan University Using Dijkstra
    //           Algorithm
    //         </ListResume>
    //       </div>
    //       <div className="flex flex-col gap-3">
    //         <div className="font-bold text-lg">Experience</div>
    //         <ListResume
    //           year="2018-Present"
    //           title="Roomfazza"
    //           position="Social Media Specialist"
    //           ipk=""
    //           title_description="Job desk"
    //         >
    //           <div>
    //             <div>Make plans to advertise product sales</div>
    //             <div>Create content for social media and advertising needs</div>
    //             <div>Scheduling content uploads to social media</div>
    //           </div>
    //         </ListResume>
    //       </div>
    //     </div>
    //   </HeaderContent>
    // </div>
    <LayoutMain title="Resume">
      <SubTitle title="Education" />
      <CardResume
        title="Harisenin Bootcamp"
        tahun="2024"
        position="Fullstack Developer - 3.4/4"
      >
        <div className="text-xs">
          Final Project : Design and Develop Sportwear commerce within three
          months
        </div>
      </CardResume>
      <CardResume
        title="Kuningan University"
        tahun="2015-2020"
        position="Bachelor's Degree in Informatics Engineering - 3.47/4.00"
      >
        <div className="text-xs">
          Thesis : The Virtual Reality-Based Shortest Path Searching Application
          For Existing Building Locations In Kuningan University Using Dijkstra
          Algorithm.
        </div>
      </CardResume>
      <SubTitle title="Experience" />
      <CardResume
        title="Roomfazza"
        tahun="2018-Present"
        position="Social Media Specialist"
      >
        <div className="text-xs">Jobdesk:</div>
        <DetailList>Make plans to advertise product sales</DetailList>
        <DetailList>
          Create content for social media and advertising needs
        </DetailList>
        <DetailList>Scheduling content uploads to social media</DetailList>
      </CardResume>
    </LayoutMain>
  );
};

export default index;

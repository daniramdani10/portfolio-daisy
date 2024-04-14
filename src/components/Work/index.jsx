import React from "react";
import LayoutMain from "../Layout/LayoutMain";
import SubTitle from "../atom/SubTitle";
import CardWork from "../atom/CardWork";

const index = () => {
  return (
    <LayoutMain title="Work">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-7">
        <CardWork
          title="Otaku Coffee"
          tech="express, prisma, react, axios"
          image="/images/profile.jpg"
        />
        <CardWork
          title="Recipe app"
          tech="express, prisma, react, axios"
          image="/images/ak.jpg"
        />
      </div>
    </LayoutMain>
  );
};

export default index;

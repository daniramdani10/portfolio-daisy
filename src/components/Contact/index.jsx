import React from "react";
import LayoutMain from "../Layout/LayoutMain";
import SubTitle from "../atom/SubTitle";

const index = () => {
  return (
    <LayoutMain title="Contact">
      <div className="mt-7 flex flex-col gap-1">
        <SubTitle title="I'm Always Open To Discussing Product" />
        <div className="text-xs">design work or partnerships.</div>
        <form action="" className="flex flex-col gap-2">
          <div className="flex flex-col">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              className="input input-sm"
              placeholder="Your Name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              className="input input-sm"
              placeholder="Your Email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message">Message:</label>
            <input
              type="text"
              name="message"
              id="message"
              className="input input-sm"
              placeholder="Message"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </LayoutMain>
  );
};

export default index;

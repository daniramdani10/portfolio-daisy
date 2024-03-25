import React from "react";
import HeaderContent from "../atom/HeaderContent";

const Resume = () => {
  return (
    <div>
      <HeaderContent title="Resume"></HeaderContent>
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Education"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end mb-10">
                <time className="font-mono italic">2024</time>
                <div className="text-lg font-black">Harisenin Bootcamp</div>
                <div className="text-xs">Fullstack-Developer</div>
                <div className="text-primary">3.47/4.0</div>
                <div className="text-xs">
                  Final Project : Design and Develop Sportwear commerce within
                  three months
                </div>
              </div>
              <hr />
            </li>
            <li>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start md:text-end mb-10">
                <time className="font-mono italic">2020</time>
                <div className="text-lg font-black">Kuningan University</div>
                <div className="text-xs">
                  Bachelor's Degree in Informatics Engineering
                </div>
                <div className="text-primary">3.47/4.00</div>
                <div className="text-xs">
                  Thesis : The Virtual Reality-Based Shortest Path Searching
                  Application For Existing Building Locations In Kuningan
                  University Using Dijkstra Algorithm
                </div>
              </div>
              <hr />
            </li>
          </ul>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab"
          aria-label="Experience"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end mb-10">
                <time className="font-mono italic">2018-present</time>
                <div className="text-lg font-black">Roomfazza</div>
                <div className="text-xs text-primary">
                  Social media specialist
                </div>
                <div className="text-xs">
                  <li>● Make plans to advertise product sales</li>
                  <li>
                    ● Create content for social media and advertising needs
                  </li>
                  <li>● Scheduling content uploads to social media</li>
                </div>
              </div>
              <hr />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;

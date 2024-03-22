import React, { useState } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";

function Experiences() {
  return (
    <section id="exp" className="2xl:my-32">
      <h2>Mes expériences</h2>
      <div className="flex">
        <div className="w-1/3">
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary">
                09:30 am
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Eat</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary">
                10:00 am
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Code</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary">
                12:00 am
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Sleep</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary">
                9:00 am
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Repeat</TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
        <div className="w-2/3">
          <h2>Titre poste</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="flex">
            <p>Langages1</p>
            <p>Langages2</p>
            <p>Langages3</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;

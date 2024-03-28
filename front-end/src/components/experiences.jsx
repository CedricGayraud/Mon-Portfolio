import React, { useState, useEffect } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import axios from "axios";

const Experiences = () => {
  const [jobs, setJobs] = useState([]);
  const [projectLanguages, setProjectLanguages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEnterprise, setSelectedEnterprise] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://127.0.0.1:8000/api/jobs");
        //console.log("liste des jobs :", res.data);
        if (res.data.status === 200) {
          setJobs(res.data["jobs"]);
          setProjectLanguages(res.data["projectLanguages"]);
          setLoading(false);
        }

        const firstJobId = res.data["jobs"][0].id;
        setSelectedEnterprise(firstJobId);
      } catch (error) {
        console.error("Error lors de la récupération des jobs", error);
      }
    };
    fetchData();

    return () => {};
  }, []);

  const handleEnterpriseSelect = (enterpriseId) => {
    setSelectedEnterprise(enterpriseId);
    //console.log("Selected Enterprise ID:", enterpriseId);
  };

  const isCurrentEnterprise = (enterpriseId) => {
    return selectedEnterprise === enterpriseId;
  };

  let jobsHTML = "";
  let jobsTimeLine = "";
  if (loading) {
    jobsHTML = <p>Loading...</p>;
    jobsTimeLine = <p>Loading...</p>;
  } else {
    jobsTimeLine = jobs.map((job) => (
      <div key={job.id} className="w-full">
        <Timeline className="py-0">
          <TimelineItem>
            <TimelineOppositeContent
              color="text.secondary"
              className="h-fit w-fit py-0"
            >
              <p
                className={`text-2xl w-fit m-auto hover:text-bleuFonce rounded-3xl hover:bg-bgScroll px-5 py-1.5 cursor-pointer ${
                  isCurrentEnterprise(job.id)
                    ? "text-bleuFonce rounded-3xl bg-bgScroll"
                    : ""
                }`}
                onClick={() => handleEnterpriseSelect(job.id)}
              >
                {job.enterpriseName}
              </p>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot className="w-4 h-4 bg-bleuFonce my-2" />
              <TimelineConnector className="h-4 w-[3px] bg-bleuFonce" />
            </TimelineSeparator>
            <TimelineContent className="block w-fit mx-auto">
              <div className="flex justify-center text-justify text-lg">
                <p className="w-fit text-nowrap">{job.dateStart}</p>
                <p>&nbsp; - &nbsp;</p>
                <p className="w-fit text-nowrap"> {job.dateEnd}</p>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    ));
    const filteredJobs = jobs.filter((job) => job.id === selectedEnterprise);

    jobsHTML = filteredJobs.map((job) => (
      <div key={job.id} className="flex justify-center w-full">
        <div className="w-full">
          <p className="text-bleuFonce text-3xl mb-3">{job.name}</p>
          <p className="text-bleuFonce text-base">{job.jobDescription}</p>
          <div className="flex gap-2 mt-4">
            {projectLanguages[job.id].map((projectLanguages, index) => (
              <p
                key={index}
                className="text-xl text-blanc uppercase bg-bleuFonce rounded-full py-2 px-4 w-fit"
              >
                {projectLanguages.language.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    ));
  }

  return (
    <section id="exp" className="2xl:my-32">
      <h1 className="2xl:text-5xl text-bleuFonce">Expériences</h1>
      <div className="flex justify-evenly my-20">
        <div className="w-2/5">{jobsTimeLine}</div>

        <div className="w-3/5">{jobsHTML}</div>
      </div>
    </section>
  );
};

export default Experiences;

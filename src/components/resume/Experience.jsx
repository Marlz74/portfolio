import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  // You can replace the link below with the actual URL of your hosted CV (e.g., Google Drive, Dropbox, etc.)
  const cvLink = "https://docs.google.com/document/d/17JZX1Hi9UoINXdzeYq5berbNb0axV6lo/";  // Replace this with your actual link

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20 flex-wrap" // Added flex-wrap for responsiveness
    >
      {/* View CV Section */}
      <div className="mt-12 w-full flex justify-center">
        <a
          href={cvLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-designColor text-white py-3 px-6 rounded-md text-lg font-semibold hover:bg-opacity-80 transition duration-300 w-full sm:w-auto text-center" // Adjusted width for responsiveness
        >
          View My CV
        </a>
      </div>

      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - {new Date().getFullYear()}</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Engineering Team Lead & Backend Developer"
            subTitle="Coderigi - (2024 - Present)"
            result="Uyo, Akwa Ibom State, Nigeria"
            des="Led backend development for Rigitix, an event ticketing and management platform, developing RESTful APIs, optimizing server performance, and integrating secure payment systems."
          />
          <ResumeCard
            title="Full Stack Developer"
            subTitle="Kreater - (2022 - 2024)"
            result="Uyo, Akwa Ibom State, Nigeria"
            des="Developed a shipment tracking system, integrated third-party tools like Mailchimp and Google Analytics, and optimized backend processes to improve application performance."
          />
          <ResumeCard
            title="Backend Developer (Contract)"
            subTitle="Story Sharing App (BLINK) - (October 2024)"
            result="Remote"
            des="Developed backend APIs for content management, integrated third-party payment gateways, and enhanced user security using JWT-based authentication."
          />
        </div>
      </div>

    </motion.div>
  );
};

export default Experience;

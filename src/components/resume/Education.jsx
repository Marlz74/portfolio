import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2003 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Eng in Computer Engineering"
            subTitle="University of Uyo (2017 - 2022)"
            result="3.51/5"
            des="Completed a comprehensive five year program focused on computer hardware, software systems, and electronics. Gained strong foundations in programming, system design, and digital logic essential for solving real world engineering problems."
          />

          <ResumeCard
            title="Secondary School Education"
            subTitle="Presbyterian Senior Science School, Ididep (2014 - 2017)"
            result="WASSCE/NECO"
            des="Completed senior secondary education with a focus on science subjects. Acquired strong foundational knowledge in Mathematics, Physics, Chemistry, and Biology, leading to certifications in WASSCE and NECO."
          />

          <ResumeCard
            title="Junior School Education"
            subTitle="Ikono People's High School, Nung Ukim (2011 - 2014)"
            result="BEC"
            des="Completed junior secondary education, developing core academic skills across subjects such as English, Basic Science, and Social Studies, and earned the Basic Education Certificate (BEC)."
          />

        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - {new Date().getFullYear()}</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Backend Developer"
            subTitle="Coderigi - (2024 - 2025)"
            result="Uyo, Nigeria"
            des="Responsible for designing, building, and maintaining server-side applications and APIs. Worked closely with frontend developers and DevOps teams to ensure smooth product delivery and optimal performance in production environments."
          />

          <ResumeCard
            title="Server Administrator"
            subTitle="Kreater Africa - (2022 - 2024)"
            result="Uyo, Nigeria"
            des="Managed and maintained company server, implemented security protocols, automated deployments, and ensured system uptime. Played a key role in supporting the infrastructure for internal tools and client applications."
          />

          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Wedigraf Technologies Ltd (2023), Coderigi (2024 - 2025)"
            result="Nigeria"
            des="Trained aspiring developers on full-stack web development with a focus on real-world projects. Mentored junior developers at Coderigi, offering guidance on best coding practices, version control, and industry standard workflows."
          />

        </div>
      </div>
    </motion.div>
  );
}

export default Education
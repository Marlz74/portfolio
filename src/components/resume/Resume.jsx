import React, { useState } from 'react'
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Experience from "./Experience"

const Resume = () => {
  const [educationData, setEducationData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [experienceData, setExperienceData] = useState(false);

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title
          title={`${new Date().getFullYear() - 2020}+ YEARS OF EXPERIENCE`}
          des="My Resume"
        />
      </div>
      <div className="flex justify-center mt-8">
        <ul className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 ">
          <li
            onClick={() =>
              setEducationData(true) &
              setSkillData(false) &
              setExperienceData(false)
            }
            className={`${educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
              } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(true) &
              setExperienceData(false)
            }
            className={`${skillData ? "border-designColor rounded-lg" : "border-transparent"
              } resumeLi`}
          >
            Professional Skills
          </li>
          <li
            onClick={() =>
              setEducationData(false) &
              setSkillData(false) &
              setExperienceData(true)
            }
            className={`${experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
              } resumeLi`}
          >
            Experience
          </li>
        </ul>
      </div>
      <div className="flex justify-center mt-12">
        {educationData && <Education />}
        {skillData && <Skills />}
        {experienceData && <Experience />}
      </div>
    </section>
  );
}

export default Resume;

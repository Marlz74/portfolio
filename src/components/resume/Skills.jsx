import React from 'react'
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Backend and Server Skills */}
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Backend & Server Skills</h2>
        </div>
        <div className="flex flex-col gap-6">
          {[
            { name: "PHP", level: "95%" },
            { name: "LARAVEL", level: "95%" },
            { name: "Node.js", level: "90%" },
            { name: "MySQL/PostgreSQL", level: "90%" },
            { name: "RESTful APIs", level: "100%" },
            { name: "Server Management", level: "90%" },
            { name: "DevOps, Docker & Deployment", level: "80%" },
            { name: "Authentication & JWT", level: "98%" },
          ].map((skill, i) => (
            <div className="overflow-x-hidden" key={i}>
              <p className="text-sm uppercase font-medium">{skill.name}</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  style={{ width: skill.level }}
                  className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">{skill.level}</span>
                </motion.span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Web Development & Mentorship */}
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Web Dev & Mentorship</h2>
        </div>
        <div className="flex flex-col gap-6">
          {[
            { name: "HTML5", level: "95%" },
            { name: "CSS3 / Tailwind", level: "88%" },
            { name: "JavaScript", level: "96%" },
            { name: "Node.js", level: "96%" },
            { name: "PHP/LARAVEL", level: "96%" },
            { name: "React", level: "75%" },
            { name: "Git & GitHub", level: "90%" },
            { name: "Technical Training & Mentorship", level: "100%" },
            { name: "Project Collaboration", level: "95%" },
          ].map((skill, i) => (
            <div className="overflow-x-hidden" key={i}>
              <p className="text-sm uppercase font-medium">{skill.name}</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  style={{ width: skill.level }}
                  className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                >
                  <span className="absolute -top-7 right-0">{skill.level}</span>
                </motion.span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;

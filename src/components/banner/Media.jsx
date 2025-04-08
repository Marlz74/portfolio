import React from 'react';
import { FaPhp, FaNodeJs, FaDatabase, FaLinkedinIn } from "react-icons/fa"; // Import icons for PHP, Node.js, MySQL, and LinkedIn
import { SiLaravel, SiMysql } from "react-icons/si"; // Import Laravel and MySQL icons

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className="flex gap-4">
          {/* X Icon with hover effect */}
          <span className="bannerIcon hover-effect">
            <a href="https://x.com/SD_Marlz74" target="_blank" rel="noopener noreferrer" title="X" >
              <img src="/icon/x.svg" alt="X Logo" className="w-6 h-6" title="X" />
            </a>
          </span>
          <span className="bannerIcon hover-effect">
            <a href="https://www.linkedin.com/in/utibe-bassey-019846245/" target="_blank" title="LinkedIn" rel="noopener noreferrer">
              <FaLinkedinIn className="w-6 h-6" title="LinkedIn" />
            </a>
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon hover-effect" title="PHP" >
            <FaPhp className="w-6 h-6" title="PHP" />
          </span>
          <span className="bannerIcon hover-effect" title="Laravel" >
            <SiLaravel className="w-6 h-6" title="Laravel" />
          </span>
          <span className="bannerIcon hover-effect" title="Node.js" >
            <FaNodeJs className="w-6 h-6" title="Node.js"  />
          </span>
          <span className="bannerIcon hover-effect" title="MySQL" >
            <SiMysql className="w-6 h-6" title="MySQL" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
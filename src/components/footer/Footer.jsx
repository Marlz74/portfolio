import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import logo from "/images/logo.png";
import { navLinksdata } from '../../constants'
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 lgl:grid-cols-2 gap-8">
      {/* Left Section (Logo + Socials) */}
      <div className="flex flex-col gap-8">
        <div className="w-32 h-32 flex items-center justify-center rounded-full border-2 border-gray-400 overflow-hidden ">
          <img className="w-32 object-contain" src={logo} alt="logo" />
        </div>
        <div className="flex gap-4">
          <span className="bannerIcon hover-effect">
            <a href="https://x.com/SD_Marlz74" target="_blank" rel="noopener noreferrer" title="X" >
              <img src="/icon/x.svg" alt="X Logo" className="w-6 h-6" />
            </a>
          </span>
          <span className="bannerIcon hover-effect">
            <a href="https://www.linkedin.com/in/utibe-bassey-019846245/" target="_blank" title="LinkedIn" rel="noopener noreferrer">
              <FaLinkedinIn className="w-6 h-6" />
            </a>
          </span>
        </div>
      </div>

      {/* Right Section (Quick Links + Developers) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Quick Links */}
        <div className="w-full h-full">
          <h3 className="text-xl uppercase text-designColor tracking-wider">
            Quick Link
          </h3>
          <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
            {navLinksdata.map((item) => (
              <li
                key={item._id}
                className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              >
                <Link to={item.link} smooth={true} duration={500}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Developers */}
        <div className="w-full h-full">
          <h3 className="text-xl uppercase text-designColor tracking-wider">
            DEVELOPERS
          </h3>
          <ul className="flex flex-col gap-4 font-titleFont font-medium overflow-hidden py-6">
            <li>
              <a
                href="https://github.com/Marlz74/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                  Github
                  <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@utpatrick74"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="w-full text-lg relative hover:text-designColor duration-300 group cursor-pointer">
                  Blog
                  <span className="w-full h-[1px] bg-designColor inline-flex absolute left-0 -bottom-1 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;

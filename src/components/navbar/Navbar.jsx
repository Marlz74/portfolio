import React, { useState } from 'react'
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaPhp, FaNodeJs, FaDatabase, FaLinkedinIn } from "react-icons/fa"; // Import icons for PHP, Node.js, MySQL, and LinkedIn
import { SiLaravel, SiMysql } from "react-icons/si"; // Import Laravel and MySQL icons
import { navLinksdata } from '../../constants'
import logo from "/images/logo.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div className="flex items-center justify-center gap-2">
        <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-400 overflow-hidden">
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 object-contain"
          />
        </div>
        <span className="text-xl font-bold ">SD</span>
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="w-32" src={logo} alt="logo" />
                <p className="text-sm text-gray-400 mt-2">
                  I build scalable web applications and APIs that solve real-world problems, combining clean code with great user experience. With experience in both fintech and a wide range projects, I enjoy turning complex challenges into simple solutions. When I'm not coding, I'm exploring new tech trends or sharing insights on development and productivity.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">
                  Find me in
                </h2>
                <div className="flex gap-4">
                  <span className="bannerIcon hover-effect" title="PHP" >
                    <FaPhp className="w-6 h-6" title="PHP" />
                  </span>
                  <span className="bannerIcon hover-effect" title="Laravel" >
                    <SiLaravel className="w-6 h-6" title="Laravel" />
                  </span>
                  <span className="bannerIcon hover-effect" title="Node.js" >
                    <FaNodeJs className="w-6 h-6" title="Node.js" />
                  </span>
                  <span className="bannerIcon hover-effect" title="MySQL" >
                    <SiMysql className="w-6 h-6" title="MySQL" />
                  </span>
                </div>
              </div>
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar
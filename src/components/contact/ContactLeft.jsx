import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src="/images/contactImg.png"
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Utibe Patrick (SD)</h3>
        <p className="text-lg font-normal text-gray-400">
          Fullstack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          Need clean APIs, smart backend logic, or a solid dev to bring your product to life? Send a message. Let's build something that works.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <a href="tel:+2348059533333" className="text-lightText">+234 8059533333</a>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <a href="mailto:utpatrick74@gmail.com" className="text-lightText">utpatrick74@gmail.com</a>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
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
    </div>
  );
}

export default ContactLeft
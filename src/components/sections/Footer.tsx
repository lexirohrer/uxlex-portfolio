
import React from "react";

const Footer = () => {
  return (
    <footer className="px-4 md:px-8 lg:px-16 py-6 bg-transparent relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-6">
          {/* Left Side - Website Credit */}
          <div className="flex-1">
            <p className="text-[#EAE8F3] text-left text-xs md:text-sm">
              Website by uxlex and cursor ✨
            </p>
          </div>
          
          {/* Right Side - Icons */}
          <div className="flex flex-row gap-4 items-center justify-end md:justify-end flex-shrink-0">
            <a
              href="https://www.linkedin.com/in/alexandra-rohrer/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center"
            >
              <img
                src={`${import.meta.env.BASE_URL}LinkedIn.png`}
                alt="LinkedIn"
                className="w-12 h-12 md:w-16 md:h-16 drop-shadow-xl transform transition-transform duration-200 group-hover:scale-110"
                loading="lazy"
              />
            </a>
            <a
              href="mailto:lexirohrer@gmail.com"
              className="group flex items-center justify-center"
            >
              <img
                src={`${import.meta.env.BASE_URL}Gmail.png`}
                alt="Gmail"
                className="w-12 h-12 md:w-16 md:h-16 drop-shadow-xl transform transition-transform duration-200 group-hover:scale-110"
                loading="lazy"
              />
            </a>
            <a
              href="https://calendar.app.google/K8owt9w3d5wnVL9B6"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center"
            >
              <img
                src={`${import.meta.env.BASE_URL}Calendar.png`}
                alt="Calendar"
                className="w-12 h-12 md:w-16 md:h-16 drop-shadow-xl transform transition-transform duration-200 group-hover:scale-110"
                loading="lazy"
              />
            </a>
            <a
              href="https://uxlex.substack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center"
            >
              <img
                src={`${import.meta.env.BASE_URL}Substack.png`}
                alt="Substack"
                className="w-12 h-12 md:w-16 md:h-16 drop-shadow-xl transform transition-transform duration-200 group-hover:scale-110"
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

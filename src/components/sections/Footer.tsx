
import React from "react";

const Footer = () => {
  return (
    <footer className="px-4 md:px-8 lg:px-16 py-10 bg-white dark:!bg-transparent">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Icons - Left aligned */}
        <div className="flex items-center gap-4 md:gap-6">
          <a 
            href="mailto:lexirohrer@gmail.com" 
            className="group flex items-center justify-center"
            aria-label="Email Lexi"
          >
            <img 
              src={`${import.meta.env.BASE_URL}Gmail.png`} 
              alt="Gmail" 
              className="w-10 h-10 md:w-12 md:h-12 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300" 
            />
          </a>
          <a 
            href="https://www.linkedin.com/in/alexandra-rohrer/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-center"
            aria-label="Connect with Lexi on LinkedIn"
          >
            <img 
              src={`${import.meta.env.BASE_URL}LinkedIn.png`} 
              alt="LinkedIn" 
              className="w-10 h-10 md:w-12 md:h-12 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300" 
            />
          </a>
          <a 
            href="https://calendar.app.google/K8owt9w3d5wnVL9B6" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-center"
            aria-label="Book a coffee chat with Lexi"
          >
            <img 
              src={`${import.meta.env.BASE_URL}Calendar.png`} 
              alt="Calendar" 
              className="w-10 h-10 md:w-12 md:h-12 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300" 
            />
          </a>
          <a 
            href="https://uxlex.substack.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center justify-center"
            aria-label="Read Lexi's newsletter on Substack"
          >
            <img 
              src={`${import.meta.env.BASE_URL}Substack.png`} 
              alt="Substack" 
              className="w-10 h-10 md:w-12 md:h-12 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300" 
            />
          </a>
        </div>
        
        {/* Text - Right aligned */}
        <div className="text-[#2B2C34] dark:text-[#EAE8F3] text-sm md:text-base">
          Website by uxlex and cursor ✨
        </div>
      </div>
    </footer>
  );
};

export default Footer;

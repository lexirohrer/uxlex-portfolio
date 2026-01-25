
import React from "react";

const Footer = () => {
  return (
    <footer className="px-4 md:px-8 lg:px-16 py-10 bg-white dark:!bg-transparent">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4">
        {/* Text - Centered */}
        <div className="text-[#2B2C34] dark:text-[#EAE8F3] text-sm md:text-base">
          Website by uxlex and cursor ✨
        </div>
      </div>
    </footer>
  );
};

export default Footer;

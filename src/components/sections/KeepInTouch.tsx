import React from "react";

const KeepInTouch = () => {
  return (
    <section
      className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 flex items-center justify-center py-16 md:py-20 lg:py-24"
      style={{
        minHeight: "max(640px, calc(100vw * 0.667))",
      }}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center">
        <img
          src={`${import.meta.env.BASE_URL}cave_bckg.png`}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-[#EAE8F3] mb-6 font-hagrid">
            I love to chat - reach out anytime ✨
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 grid-rows-2 gap-2 md:gap-3 lg:gap-4">
            {/* Gmail */}
            <a 
              href="mailto:lexirohrer@gmail.com" 
              className="group flex items-center justify-center aspect-square rounded-xl transition-all duration-300"
              aria-label="Email Lexi"
            >
              <img src={`${import.meta.env.BASE_URL}Gmail.png`} alt="Gmail" className="w-20 h-20 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
            </a>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/alexandra-rohrer/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center aspect-square rounded-xl transition-all duration-300"
              aria-label="Connect with Lexi on LinkedIn"
            >
              <img src={`${import.meta.env.BASE_URL}LinkedIn.png`} alt="LinkedIn" className="w-20 h-20 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
            </a>

            {/* Calendar */}
            <a 
              href="https://calendar.app.google/K8owt9w3d5wnVL9B6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center aspect-square rounded-xl transition-all duration-300"
              aria-label="Book a coffee chat with Lexi"
            >
              <img src={`${import.meta.env.BASE_URL}Calendar.png`} alt="Calendar" className="w-20 h-20 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
            </a>

            {/* Substack */}
            <a 
              href="https://uxlex.substack.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center aspect-square rounded-xl transition-all duration-300"
              aria-label="Read Lexi's newsletter on Substack"
            >
              <img src={`${import.meta.env.BASE_URL}Substack.png`} alt="Substack" className="w-20 h-20 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeepInTouch;

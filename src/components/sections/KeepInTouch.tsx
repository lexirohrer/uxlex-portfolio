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
      <div className="pointer-events-none absolute inset-0 -z-5 bg-white/80 dark:bg-slate-900/80" aria-hidden="true" />

      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-[#EAE8F3] mb-6 font-hagrid">
            I love to chat - reach out anytime ✨
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Gmail */}
            <div className="text-center">
              <a 
                href="mailto:lexirohrer@gmail.com" 
                className="group flex flex-col items-center space-y-4 p-6 rounded-xl transition-all duration-300"
              >
                <div className="w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img src={`${import.meta.env.BASE_URL}Gmail.png`} alt="Gmail" className="w-20 h-20 object-contain drop-shadow-lg" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Email
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    lexirohrer@gmail.com
                  </p>
                </div>
              </a>
            </div>

            {/* LinkedIn */}
            <div className="text-center">
              <a 
                href="https://www.linkedin.com/in/alexandra-rohrer/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center space-y-4 p-6 rounded-xl transition-all duration-300"
              >
                <div className="w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img src={`${import.meta.env.BASE_URL}LinkedIn.png`} alt="LinkedIn" className="w-20 h-20 object-contain drop-shadow-lg" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    LinkedIn
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Connect with me
                  </p>
                </div>
              </a>
            </div>

            {/* Calendar */}
            <div className="text-center">
              <a 
                href="https://calendar.app.google/K8owt9w3d5wnVL9B6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center space-y-4 p-6 rounded-xl transition-all duration-300"
              >
                <div className="w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img src={`${import.meta.env.BASE_URL}Calendar.png`} alt="Calendar" className="w-20 h-20 object-contain drop-shadow-lg" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Coffee Chat
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Book a meeting
                  </p>
                </div>
              </a>
            </div>

            {/* Substack */}
            <div className="text-center">
              <a 
                href="https://uxlex.substack.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center space-y-4 p-6 rounded-xl transition-all duration-300"
              >
                <div className="w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img src={`${import.meta.env.BASE_URL}Substack.png`} alt="Substack" className="w-20 h-20 object-contain drop-shadow-lg" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Newsletter
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    UX insights & updates
                  </p>
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default KeepInTouch;

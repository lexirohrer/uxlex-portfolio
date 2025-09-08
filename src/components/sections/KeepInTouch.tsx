import React from "react";

const KeepInTouch = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Keep in Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Let's connect! Reach out through any of these channels.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Gmail */}
            <div className="text-center">
              <a 
                href="mailto:lexirohrer@gmail.com" 
                className="group flex flex-col items-center space-y-4 p-6 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
              >
                <div className="w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img src="/Gmail.png" alt="Gmail" className="w-20 h-20 object-contain drop-shadow-lg" />
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

            {/* Substack */}
            <div className="text-center">
              <a 
                href="https://uxlex.substack.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center space-y-4 p-6 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
              >
                <div className="w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img src="/Substack.png" alt="Substack" className="w-20 h-20 object-contain drop-shadow-lg" />
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

            {/* Calendar */}
            <div className="text-center">
              <a 
                href="https://calendar.app.google/K8owt9w3d5wnVL9B6" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center space-y-4 p-6 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
              >
                <div className="w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img src="/Calendar.png" alt="Calendar" className="w-20 h-20 object-contain drop-shadow-lg" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Schedule
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Book a meeting
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

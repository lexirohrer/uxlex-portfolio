import React from "react";

const Hero = () => {
  return (
    <div className="w-[1100px] h-[600px] rounded-3xl shadow-2xl border border-white/30 max-lg:w-[85vw] max-lg:h-[450px] max-md:w-[90vw] max-md:h-[350px] bg-white/20 backdrop-blur-lg relative px-12 py-8" style={{
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)'
    }}>
      {/* Moving gradient overlay inside card */}
      <div className="absolute inset-0 moving-gradient opacity-20 rounded-3xl"></div>
      
      {/* Main content - centered */}
      <div className="relative z-10 w-full flex flex-col items-start justify-center h-full text-left">
        <h1 className="font-hagrid text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-6 leading-tight">
          Hi, I'm Lexi 👋
        </h1>
        
        <h2 className="font-hagrid text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800 mb-8">
          a social impact designer*
        </h2>
      </div>
      
      {/* Asterisk explanation - bottom aligned */}
      <div className="absolute bottom-8 left-12 right-12 z-10">
        <div className="text-left w-full">
          <p className="text-gray-700 text-lg md:text-xl lg:text-2xl leading-relaxed">
            *meaning I work with social enterprises, B-corps, and impact focused orgs on UX and service design problems. I wear many hats, most often designer or researcher 🤓
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

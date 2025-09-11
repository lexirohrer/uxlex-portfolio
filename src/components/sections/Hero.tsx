import React from "react";
import { useTypewriter } from "@/hooks/useTypewriter";

const Hero = () => {
  const headerText = "Hi, I'm Lexi 👋";
  const subheaderText = "a social impact designer*";
  const bodyText = "*this means I work with social enterprises, B-corps, and impact focused orgs on UX and service design problems. I wear many hats, most often designer or researcher 🤓";

  const { displayedText: displayedHeader, showCursor: showHeaderCursor, isComplete: headerComplete } = useTypewriter({
    text: headerText,
    speed: 80,
    delay: 500
  });

  const { displayedText: displayedSubheader, showCursor: showSubheaderCursor, isComplete: subheaderComplete } = useTypewriter({
    text: subheaderText,
    speed: 60,
    delay: 2750
  });

  const { displayedText: displayedBody, showCursor: showBodyCursor } = useTypewriter({
    text: bodyText,
    speed: 30,
    delay: 4000
  });

  return (
    <div className="w-[1100px] rounded-3xl shadow-2xl border border-white/30 max-lg:w-[85vw] max-md:w-[90vw] bg-white/20 backdrop-blur-lg relative px-12 py-8" style={{
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)'
    }}>
      {/* Moving gradient overlay inside card */}
      <div className="absolute inset-0 moving-gradient opacity-20 rounded-3xl"></div>
      
      {/* Main content with proper spacing */}
      <div className="relative z-10 w-full flex flex-col items-start justify-start text-left">
        {/* Main heading */}
        <div className="pt-8">
          <h1 className="font-hagrid text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 leading-tight">
            {displayedHeader.replace('👋', '')}
            {displayedHeader.includes('👋') && (
              <span className={`inline-block ${headerComplete ? 'animate-bounce' : ''}`} style={{
                animation: headerComplete ? 'wave 0.25s ease-in-out 3' : 'none'
              }}>
                👋
              </span>
            )}
            {showHeaderCursor && <span className="animate-pulse">|</span>}
          </h1>
        </div>
        
        {/* Subtitle */}
        <div className="mt-8 sm:mt-12 md:mt-16">
          <h2 className="font-hagrid text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800">
            {displayedSubheader.replace('*', '').replace('social impact designer', '')}
            {displayedSubheader.includes('social impact designer') && subheaderComplete && (
              <span className="underline decoration-2 underline-offset-4">social impact designer</span>
            )}
            {displayedSubheader.includes('*') && subheaderComplete && (
              <span>*</span>
            )}
            {showSubheaderCursor && <span className="animate-pulse">|</span>}
          </h2>
        </div>
        
        {/* Asterisk explanation */}
        <div className="mt-16 sm:mt-24 md:mt-32 lg:mt-40 xl:mt-64 pb-8">
          <p className="text-gray-700 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
            {displayedBody}
            {showBodyCursor && <span className="animate-pulse">|</span>}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

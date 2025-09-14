import React, { useState, useEffect } from "react";
import { useTypewriter } from "@/hooks/useTypewriter";

const Hero = () => {
  const headerText = "Hi, I'm Lexi 👋";
  const subheaderText = "a social impact designer*";
  const bodyText = "*this means I work with social enterprises, B-corps, and impact focused orgs on UX and service design problems. I wear many hats, most often designer or researcher 🤓";
  
  const [showAsterisk, setShowAsterisk] = useState(false);

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
    delay: 5500
  });

  // Show asterisk after underline animation completes
  useEffect(() => {
    if (subheaderComplete) {
      const timer = setTimeout(() => {
        setShowAsterisk(true);
      }, 1000); // 200ms delay + 800ms animation = 1000ms total
      
      return () => clearTimeout(timer);
    }
  }, [subheaderComplete]);

  return (
    <div className="w-[900px] h-[600px] rounded-3xl shadow-2xl border border-white/30 max-lg:w-[75vw] max-md:w-[80vw] bg-white/20 backdrop-blur-lg relative px-8 py-6" style={{
      boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)'
    }}>
      {/* Moving gradient overlay inside card */}
      <div className="absolute inset-0 moving-gradient opacity-20 rounded-3xl"></div>
      
      {/* Main content with proper spacing */}
      <div className="relative z-10 w-full h-full flex flex-col items-start justify-between text-left">
        {/* Top content */}
        <div className="pt-4">
          {/* Main heading */}
          <div>
            <h1 className="font-hagrid text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
              {displayedHeader.replace('👋', '')}
              {displayedHeader.includes('👋') && (
                <span className={`inline-block ${headerComplete ? 'animate-bounce' : ''}`} style={{
                  animation: headerComplete ? 'wave 0.25s ease-in-out 3' : 'none'
                }}>
                  👋
                </span>
              )}
              {showHeaderCursor && headerComplete && <span className="animate-pulse">|</span>}
            </h1>
          </div>
          
          {/* Subtitle */}
          <div className="mt-4 sm:mt-6 md:mt-8">
            <h2 className="font-hagrid text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-800">
              {displayedSubheader.replace('*', '').replace('social impact designer', '')}
              {displayedSubheader.includes('social impact designer') && subheaderComplete && (
                <span className="relative">
                  social impact designer
                  <span 
                    className="absolute bottom-0 left-0 h-0.5 bg-gray-800"
                    style={{
                      animation: 'drawUnderline 0.8s ease-out forwards',
                      animationDelay: '0.2s',
                      width: '0%'
                    }}
                  ></span>
                </span>
              )}
              {displayedSubheader.includes('*') && showAsterisk && (
                <span>*</span>
              )}
              {showSubheaderCursor && subheaderComplete && <span className="animate-pulse">|</span>}
            </h2>
          </div>
        </div>
        
        {/* Bottom content - Asterisk explanation */}
        <div className="pb-4">
          <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
            {displayedBody}
            {showBodyCursor && <span className="animate-pulse">|</span>}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

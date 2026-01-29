import React, { useEffect, useRef, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import CaseStudies from "@/components/sections/CaseStudies";

const Portfolio = () => {
  // Mouse-responsive Memoji state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const memojiRef = useRef<HTMLDivElement>(null);
  const caseStudiesRef = useRef<HTMLElement>(null);

  // Mouse-responsive effect for Memoji
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!memojiRef.current) return;
      
      // Check if we're still in hero section by checking the element's visibility
      const rect = memojiRef.current.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return; // Element not visible
      
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate mouse position relative to center of Memoji
      const x = (e.clientX - centerX) / rect.width;
      const y = (e.clientY - centerY) / rect.height;
      
      // Apply movement with a multiplier for subtle effect (adjust 15 for more/less movement)
      setMousePosition({
        x: x * 15,
        y: y * 15,
      });
    };

    const handleMouseLeave = () => {
      // Reset position when mouse leaves
      setMousePosition({ x: 0, y: 0 });
    };

    // Add mouse move listener - will only work when element is visible
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    const memojiElement = memojiRef.current;
    if (memojiElement) {
      memojiElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (memojiElement) {
        memojiElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <>
      <div className="min-h-screen bg-[#0A0520] w-full">
        <Header />
        
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-20 relative w-full">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 max-w-7xl mx-auto w-full">
            {/* Memoji - Right Side on desktop, Top on mobile */}
            <div 
              ref={memojiRef}
              className="flex-shrink-0 order-1 md:order-2"
              style={{
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                transition: 'transform 0.3s ease-out',
                willChange: 'transform',
              }}
            >
              <img
                src={`${import.meta.env.BASE_URL}Memoji.png`}
                alt="Lexi Memoji"
                className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain drop-shadow-2xl transition-transform duration-300"
                loading="eager"
                style={{
                  // Additional subtle rotation based on mouse position (very subtle)
                  transform: `rotate(${mousePosition.x * 0.1}deg)`,
                }}
              />
            </div>

            {/* Text Content - Left Side on desktop, Below Memoji on mobile */}
            <div className="flex-1 max-w-2xl text-left md:text-left order-2 md:order-1">
              <h1 className="font-hagrid text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                <span className="text-white">Hi, I'm Lexi</span>
                <br />
                <span className="text-white text-2xl md:text-3xl lg:text-4xl font-normal">
                  a social impact technologist
                </span>
              </h1>
              <p className="text-white text-base md:text-lg leading-relaxed mt-6">
                This means I design services, create products, and conduct research on some of the world's biggest problems to make their solutions more citizen centered. Occasionally I code things as well, like this portfolio.
              </p>
              {/* Icons - Full width on mobile, normal on desktop */}
              <div className="mt-8 w-full flex items-center justify-between md:justify-start md:gap-4">
                <a
                  href="https://www.linkedin.com/in/alexandra-rohrer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center flex-shrink-0"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}LinkedIn.png`}
                    alt="LinkedIn"
                    className="w-20 h-20 md:w-16 md:h-16 drop-shadow-xl transform transition-transform duration-200 group-hover:scale-110"
                    loading="eager"
                  />
                </a>
                <a
                  href="mailto:lexirohrer@gmail.com"
                  className="group flex items-center justify-center flex-shrink-0"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}Gmail.png`}
                    alt="Gmail"
                    className="w-20 h-20 md:w-16 md:h-16 drop-shadow-xl transform transition-transform duration-200 group-hover:scale-110"
                    loading="eager"
                  />
                </a>
                <a
                  href="https://calendar.app.google/K8owt9w3d5wnVL9B6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center flex-shrink-0"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}Calendar.png`}
                    alt="Calendar"
                    className="w-20 h-20 md:w-16 md:h-16 drop-shadow-xl transform transition-transform duration-200 group-hover:scale-110"
                    loading="eager"
                  />
                </a>
                <a
                  href="https://uxlex.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center flex-shrink-0"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}Substack.png`}
                    alt="Substack"
                    className="w-20 h-20 md:w-16 md:h-16 drop-shadow-xl transform transition-transform duration-200 group-hover:scale-110"
                    loading="eager"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Scroll prompt - Anchored to bottom of hero section */}
          <button
            onClick={() => {
              caseStudiesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 text-white hover:text-white/80 transition-colors duration-200 flex items-center gap-3 cursor-pointer"
            aria-label="Scroll to portfolio projects"
          >
            <span className="text-lg md:text-xl">↓</span>
            <span className="text-base md:text-lg font-regular">check out my work over here</span>
            <span className="text-lg md:text-xl">↓</span>
          </button>
        </section>

        {/* Case Studies Section */}
        <main ref={caseStudiesRef} className="px-[120px] pt-[120px] pb-[100px] max-md:px-10 max-md:pt-[96px] max-md:pb-[60px] max-sm:px-5 max-sm:pt-[88px] max-sm:pb-[40px] relative z-10">
          <CaseStudies />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Portfolio;

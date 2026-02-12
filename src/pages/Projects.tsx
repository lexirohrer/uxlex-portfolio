import React, { useEffect, useRef, useState } from "react";
import Header from "@/components/layout/Header";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

const projects = [
  {
    href: "/case-study/quickbooks-onboarding",
    title: "QuickBooks Onboarding",
    description: "Leading the design effort to streamline onboarding for small business owners",
    tools: ["Figma", "Figjam", "Usertesting.com", "Google Suite", "37% metric bump"],
    image: "QB cover.png",
    imageDark: "QB_cover_dark.png",
    imageAlt: "QuickBooks Onboarding"
  },
  {
    href: "/case-study/muvmi-tuk-tuks",
    title: "MuvMi electric Tuk Tuks",
    description: "Co-designed sustainable mobility options with Thai tourists and citizens",
    tools: ["Figma", "User Research", "Co-design", "Prototyping", "Workshop Facilitation"],
    image: "MuvMi cover.png",
    imageDark: "MuvMi cover.png",
    imageAlt: "MuvMi Electric Tuk Tuk"
  },
  {
    href: "/case-study/bridgebox-disaster-response",
    title: "BridgeBox Disaster Response System",
    description: "Overhauled the UI for a climate disaster communication in rural Thailand",
    tools: ["Figma", "Participatory Design", "User Research", "AI/ML", "Workshop Facilitation", "AI for social good"],
    image: "BBX cover.png",
    imageDark: "BBX cover.png",
    imageAlt: "BridgeBox Disaster Response"
  },
  {
    href: "/case-study/fuse-chrome-extension",
    title: "Fuse Google Chrome Extension",
    description: "Designed a second brain for researchers making sense of information",
    tools: ["Sketch", "Illustrator", "InDesign", "Photoshop", "InVision Studio"],
    image: "Fuse cover.png",
    imageDark: "Fuse cover.png",
    imageAlt: "Fuse Chrome Extension"
  }
];

const Projects = () => {
  const isMobile = useIsMobile();
  
  // Active project carousel state
  const [activeProject, setActiveProject] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(960);
  
  // Function to scroll to projects section
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('[data-projects-section]');
    if (projectsSection) {
      const elementRect = projectsSection.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const middle = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2);
      window.scrollTo({
        top: middle,
        behavior: 'smooth'
      });
    }
  };

  // Measure card width for arrow positioning
  useEffect(() => {
    const updateCardWidth = () => {
      if (cardRef.current) {
        const width = cardRef.current.getBoundingClientRect().width;
        setCardWidth(width);
      }
    };

    // Update on mount and when active project changes
    updateCardWidth();

    // Update on window resize
    window.addEventListener('resize', updateCardWidth);
    
    // Use a small delay to ensure card is rendered
    const timeoutId = setTimeout(updateCardWidth, 100);
    
    return () => {
      window.removeEventListener('resize', updateCardWidth);
      clearTimeout(timeoutId);
    };
  }, [activeProject]);
  
  if (isMobile) {
    return (
      <>
        <div className="min-h-screen bg-transparent">
          <Header />
          
          {/* Hero Section */}
          <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-20 relative w-full">
            <div className="flex items-center justify-center px-4 sm:px-6 md:px-[120px] max-w-[1440px] mx-auto w-full max-md:px-10 max-sm:px-5">
              <div className="w-full text-left">
                {/* Glassmorphic Card */}
                <div 
                  className="relative rounded-3xl overflow-hidden p-8 md:p-10 lg:p-12"
                  style={{
                    background: 'rgba(10, 5, 32, 0.3)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <div className="relative z-10">
                    <h1 className="font-hagrid text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-left">
                  <span className="text-white">Hi, I'm Lexi</span>
                  <br />
                      <span className="text-white text-2xl md:text-3xl lg:text-4xl font-normal">
                    a social impact technologist
                  </span>
                </h1>
                    <p className="text-white text-base md:text-lg leading-relaxed mt-6 text-left">
                  This means I design services, create products, and conduct research on some of the world's biggest problems to make their solutions more citizen centered. Occasionally I code things as well, like this portfolio.
                </p>
                  </div>
                </div>
                
                {/* Icons and Button - Inline on desktop */}
                <div className="mt-8 w-full flex flex-col md:flex-row items-start md:items-center justify-start gap-4 md:gap-6">
                  <div className="w-full md:w-auto flex items-center justify-between md:justify-start gap-2 sm:gap-3 md:gap-4">
                  <a
                    href="https://www.linkedin.com/in/alexandra-rohrer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center flex-shrink-0"
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}LinkedIn.png`}
                      alt="LinkedIn"
                        className="w-20 h-20 sm:w-20 sm:h-20 md:w-16 md:h-16 drop-shadow-xl transform transition-transform duration-200 group-hover:scale-110"
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
                        className="w-20 h-20 sm:w-20 sm:h-20 md:w-16 md:h-16 drop-shadow-xl transform transition-transform duration-200 group-hover:scale-110"
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
                        className="w-20 h-20 sm:w-20 sm:h-20 md:w-16 md:h-16 drop-shadow-xl transform transition-transform duration-200 group-hover:scale-110"
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
                        className="w-20 h-20 sm:w-20 sm:h-20 md:w-16 md:h-16 drop-shadow-xl transform transition-transform duration-200 group-hover:scale-110"
                      loading="eager"
                    />
                  </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Scroll prompt - Anchored to bottom of hero section */}
            <button
              onClick={scrollToProjects}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 text-white hover:text-white/80 transition-colors duration-200 flex items-center gap-3 cursor-pointer"
              aria-label="Scroll to portfolio projects"
            >
              <span className="text-lg md:text-xl">↓</span>
              <span className="text-base md:text-lg font-regular">check out my work over here</span>
              <span className="text-lg md:text-xl">↓</span>
            </button>
          </section>
          
          {/* Project Sections */}
          <div data-projects-section>
          {projects.map((project, index) => {
            const imageSrc = project.image === "QB cover.png" 
              ? project.imageDark 
              : project.image;
            
            return (
              <section key={index} className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-20">
                <div className="w-full max-w-6xl mx-auto">
                  <Link to={project.href} className="block w-full group">
                    <div 
                      className="relative rounded-3xl overflow-hidden transition-all duration-300 hover:scale-[0.99]"
                      style={{
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                      }}
                    >
                      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[400px] lg:min-h-[500px]">
                        <div className={`relative order-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} flex items-center justify-center p-6 lg:p-10`}>
                          <img
                            src={`${import.meta.env.BASE_URL}${imageSrc}`}
                            className="w-full h-full max-h-[400px] object-contain"
                            alt={project.imageAlt}
                          />
                        </div>
                        
                        <div className={`relative order-2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} flex flex-col justify-center p-8 lg:p-12`}>
                          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 font-hagrid group-hover:text-white transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-lg md:text-xl text-white/90 mb-6 leading-relaxed">
                            {project.description}
                          </p>
                          
                          {project.tools && project.tools.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                              {project.tools.map((tool, toolIndex) => (
                                <span
                                  key={toolIndex}
                                  className="bg-[#0A0520]/30 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </section>
            );
          })}
        </div>
        </div>
      </>
    );
  }
  
  // Desktop: Regular page layout with hero and carousel
  return (
    <>
      <div className="min-h-screen bg-transparent">
        <Header />
        
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 py-20 relative w-full">
          <div className="flex items-center justify-center px-4 sm:px-6 md:px-[120px] max-w-[1440px] mx-auto w-full max-md:px-10 max-sm:px-5">
            <div className="w-full lg:w-3/4 lg:mx-auto text-left">
              {/* Glassmorphic Card */}
              <div 
                className="relative rounded-3xl overflow-hidden p-8 md:p-10 lg:p-12"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <div className="relative z-10">
                  <h1 className="font-hagrid text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-left">
                <span className="text-white">Hi, I'm Lexi</span>
                <br />
                <span className="text-white text-2xl md:text-3xl lg:text-4xl font-normal">
                  a social impact technologist
                </span>
              </h1>
                  <p className="text-white text-base md:text-lg leading-relaxed mt-6 text-left">
                This means I design services, create products, and conduct research on some of the world's biggest problems to make their solutions more citizen centered. Occasionally I code things as well, like this portfolio.
              </p>
                </div>
              </div>
              
              {/* Icons and Button - Inline on desktop */}
              <div className="mt-8 w-full flex flex-col md:flex-row items-start md:items-center justify-start gap-4 md:gap-6">
                <div className="w-full md:w-auto flex items-center justify-between md:justify-start gap-2 sm:gap-3 md:gap-4">
                <a
                  href="https://www.linkedin.com/in/alexandra-rohrer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center flex-shrink-0"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}LinkedIn.png`}
                    alt="LinkedIn"
                      className="w-16 h-16 sm:w-18 sm:h-18 md:w-16 md:h-16 drop-shadow-xl transform transition-transform duration-200 group-hover:scale-110"
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
                      className="w-16 h-16 sm:w-18 sm:h-18 md:w-16 md:h-16 drop-shadow-xl transform transition-transform duration-200 group-hover:scale-110"
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
                      className="w-16 h-16 sm:w-18 sm:h-18 md:w-16 md:h-16 drop-shadow-xl transform transition-transform duration-200 group-hover:scale-110"
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
                      className="w-16 h-16 sm:w-18 sm:h-18 md:w-16 md:h-16 drop-shadow-xl transform transition-transform duration-200 group-hover:scale-110"
                    loading="eager"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        
          {/* Scroll prompt - Anchored to bottom of hero section */}
          <button
            onClick={scrollToProjects}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 text-white hover:text-white/80 transition-colors duration-200 flex items-center gap-3 cursor-pointer"
            aria-label="Scroll to portfolio projects"
          >
            <span className="text-lg md:text-xl">↓</span>
            <span className="text-base md:text-lg font-regular">check out my work over here</span>
            <span className="text-lg md:text-xl">↓</span>
          </button>
        </section>
        
        {/* Project Carousel - Matching testimonials carousel style */}
        <section data-projects-section className="relative w-full min-h-[700px] flex items-center justify-center py-20 px-4 sm:px-6 md:px-8 overflow-visible">
          <div className="relative w-full max-w-7xl mx-auto min-h-[500px] flex items-center justify-center pb-32 pt-0 overflow-visible">
            {/* Card Container with Arrows */}
            <div className="relative w-full h-full flex items-center justify-center overflow-visible px-8 md:px-0" style={{ pointerEvents: 'none' }}>
              {projects.map((project, index) => {
                const imageSrc = project.image === "QB cover.png" 
            ? project.imageDark 
            : project.image;
          
                const position = index - activeProject;
                const isActive = index === activeProject;
                
                let transform = '';
                let zIndex = 0;
                let opacity = 0;
                let filter = 'blur(0px)';
                
                if (isActive) {
                  transform = 'translateX(0px) scale(1) perspective(1000px) rotateY(0deg)';
                  zIndex = 10;
                  opacity = 1;
                  filter = 'blur(0px)';
                } else if (position > 0) {
                  transform = `translateX(${120 * position}px) scale(${1 - 0.2 * position}) perspective(1000px) rotateY(-8deg)`;
                  zIndex = 10 - position;
                  opacity = position > 2 ? 0 : 0.6;
                  filter = 'blur(3px)';
                } else if (position < 0) {
                  const absPosition = Math.abs(position);
                  transform = `translateX(${-120 * absPosition}px) scale(${1 - 0.2 * absPosition}) perspective(1000px) rotateY(8deg)`;
                  zIndex = 10 - absPosition;
                  opacity = absPosition > 2 ? 0 : 0.6;
                  filter = 'blur(3px)';
                }
          
          return (
            <div
              key={index}
                    ref={isActive ? cardRef : null}
                    className="absolute rounded-3xl border border-white/10 bg-[#0A0520]/40 backdrop-blur-lg cursor-pointer overflow-hidden w-[95%] sm:w-[85%] md:w-[75%] flex flex-col justify-center"
              style={{
                      transform,
                      zIndex,
                      opacity,
                      filter,
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                      pointerEvents: isActive ? 'auto' : 'none',
                      minHeight: '400px',
                      maxWidth: '960px',
                    }}
                    onClick={() => setActiveProject(index)}
                  >
                    <Link to={project.href} className="block group relative z-10" style={{ width: '100%', height: '100%' }}>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[320px] sm:min-h-[360px] md:min-h-[400px] lg:min-h-[500px]">
                        <div className={`relative order-1 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'} flex items-center justify-center p-3 sm:p-5 md:p-6 lg:p-10`}>
                        <img
                          src={`${import.meta.env.BASE_URL}${imageSrc}`}
                            className="w-full h-full max-h-[180px] sm:max-h-[240px] md:max-h-[280px] lg:max-h-[400px] object-contain"
                          alt={project.imageAlt}
                          loading="lazy"
                        />
                      </div>
                      
                        <div className={`relative order-2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} flex flex-col justify-center p-3 sm:p-5 md:p-6 lg:p-12`}>
                          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-white mb-2 sm:mb-2 md:mb-3 lg:mb-4 font-hagrid group-hover:text-white transition-colors">
                          {project.title}
                        </h3>
                          <p className="text-xs sm:text-sm md:text-base lg:text-xl text-white/90 mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-relaxed">
                          {project.description}
                        </p>
                        
                        {project.tools && project.tools.length > 0 && (
                            <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2">
                            {project.tools.map((tool, toolIndex) => (
                              <span
                                key={toolIndex}
                                  className="bg-[#0A0520]/30 text-white px-2 py-0.5 sm:px-2.5 sm:py-1 md:px-4 md:py-2 rounded-full text-[10px] sm:text-xs md:text-sm font-medium backdrop-blur-sm border border-white/10"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                    </Link>
                  </div>
                );
              })}

              {/* Navigation Buttons - Desktop: Side */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveProject(prev => prev > 0 ? prev - 1 : prev);
                }}
                className="hidden md:block absolute left-2 lg:left-8 z-50 text-white bg-[#0A0520]/30 backdrop-blur-lg border border-white/10 rounded-full p-2 lg:p-3 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105"
                disabled={activeProject === 0}
                aria-label="Previous project"
                style={{ pointerEvents: 'auto' }}
              >
                <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveProject(prev => prev < projects.length - 1 ? prev + 1 : prev);
                }}
                className="hidden md:block absolute right-2 lg:right-8 z-50 text-white bg-[#0A0520]/30 backdrop-blur-lg border border-white/10 rounded-full p-2 lg:p-3 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105"
                disabled={activeProject === projects.length - 1}
                aria-label="Next project"
                style={{ pointerEvents: 'auto' }}
              >
                <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
                </div>
            
            {/* Mobile Navigation Buttons - Below Cards */}
            <div className="md:hidden absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-50 mb-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveProject(prev => prev > 0 ? prev - 1 : prev);
                }}
                className="text-white bg-[#0A0520]/30 backdrop-blur-lg border border-white/10 rounded-full p-2 disabled:opacity-30 disabled:cursor-not-allowed"
                disabled={activeProject === 0}
                aria-label="Previous project"
                style={{ pointerEvents: 'auto' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {/* Dots Indicator - Mobile */}
              <div className="flex gap-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveProject(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeProject
                        ? 'bg-white w-6'
                        : 'bg-white/40'
                    }`}
                    aria-label={`Go to project ${index + 1}`}
                    style={{ pointerEvents: 'auto' }}
                  />
                ))}
              </div>
              
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveProject(prev => prev < projects.length - 1 ? prev + 1 : prev);
                }}
                className="text-white bg-[#0A0520]/30 backdrop-blur-lg border border-white/10 rounded-full p-2 disabled:opacity-30 disabled:cursor-not-allowed"
                disabled={activeProject === projects.length - 1}
                aria-label="Next project"
                style={{ pointerEvents: 'auto' }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Dots Indicator - Desktop */}
            <div className="hidden md:flex absolute bottom-4 left-1/2 transform -translate-x-1/2 gap-2 z-50">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeProject
                      ? 'bg-white w-6'
                      : 'bg-white/40'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                  style={{ pointerEvents: 'auto' }}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Spacer section to allow carousel to be centered when scrolled */}
        <div className="h-[160px] w-full"></div>
      </div>
    </>
  );
};

export default Projects;

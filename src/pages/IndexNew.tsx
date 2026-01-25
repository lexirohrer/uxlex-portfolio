
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import AboutMeContent from "@/components/sections/AboutMeContent";
import { allFunFacts } from "@/data/funFacts";

const IndexNew = () => {
  // Testimonial slider state
  const [activeTestimonial, setActiveTestimonial] = useState(2);
  
  // Track which fact indices have been shown (using ref for reliable access)
  const shownFactIndicesRef = useRef<Set<number>>(new Set([0, 1, 2])); // Start with first 3 facts shown
  const [shownFactIndices, setShownFactIndices] = useState<Set<number>>(
    shownFactIndicesRef.current
  );
  
  // Initialize with first 3 facts
  const [displayedFacts, setDisplayedFacts] = useState(() => 
    allFunFacts.slice(0, 3)
  );
  
  // Track which cards are flipped
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  
  // Track if cards are rotating (full flip on shuffle)
  const [isRotating, setIsRotating] = useState(false);
  
  // Delay video load to improve initial page performance
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  
  // Parallax scroll effect
  const { scrollY } = useScroll();
  
  // Delay video load after initial render to prevent blocking
  useEffect(() => {
    // Load video after 1.5 seconds to allow initial render to complete
    const timer = setTimeout(() => {
      setShouldLoadVideo(true);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Background layers with parallax offsets (farther layers move less)
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 150]);
  const mountainsY = useTransform(scrollY, [0, 1000], [0, 450]);
  
  const caseStudies = [
   
  ];

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.6,
        ease: [0.18, 1.15, 0.28, 1] as [number, number, number, number]
      }
    }
  };

  const testimonials = [
    {
      text: "Lexi is the definition of a team player – always willing to go the extra mile and contribute to the project's success. She has a strong sense of self-awareness and a desire to learn and grow.",
      author: "Jen Hong",
      title: "Staff Product Designer @ Intuit",
      gradient: "from-pink-200/20 via-white/10 to-purple-200/20 dark:from-pink-500/10 dark:via-transparent dark:to-purple-500/10",
      quoteColor: "text-orange-300 dark:text-orange-400"
    },
    {
      text: "Lexi always brings positive energy, proactivity, courage, customer obsession, collaboration, and strong systems thinking to any project she was tasked with. She naturally has a learning mindset and always comes to the table with a strong data-backed POV",
      author: "Womo Iyegha",
      title: "Product Design Leader @ Intuit",
      gradient: "from-indigo-200/20 via-white/10 to-blue-200/20 dark:from-indigo-500/10 dark:via-transparent dark:to-blue-500/10",
      quoteColor: "text-purple-300 dark:text-purple-400"
    },
    {
      text: "If they asked me to clean a rocketship with a toothbrush, I'd say yes if Lexi was doing it with me. If I put a design dream team together, she's at the top of my list. 🚀",
      author: "Zip Lehnus",
      title: "Staff Content Designer, Intuit ",
      gradient: "from-purple-200/20 via-white/10 to-purple-200/20 dark:from-purple-500/10 dark:via-transparent dark:to-purple-500/10",
      quoteColor: "text-purple-300 dark:text-purple-400"
    },
    {
      text: "Lexi's UX expertise made sure our design solutions were grounded in real needs. Her enthusiasm, optimism, and constructive approach made collaboration a joy - I would gladly work with her again.",
      author: "Tanida Disyabut",
      title: "Social Enterprise Founder",
      gradient: "from-yellow-200/20 via-white/10 to-orange-200/20 dark:from-yellow-500/10 dark:via-transparent dark:to-orange-500/10",
      quoteColor: "text-yellow-300 dark:text-yellow-400"
    },
    {
      text: "Lexi has a drive, fearlessness, and openness to improvement that set her apart and in my personal experience is highly correlated with top levels of achievement and success.",
      author: "Aniket Kittur",
      title: "Cooper-Siegel Chair, Human-Computer Interaction Institute, Carnegie Mellon University",
      gradient: "from-pink-200/20 via-white/10 to-purple-200/20 dark:from-pink-500/10 dark:via-transparent dark:to-purple-500/10",
      quoteColor: "text-orange-300 dark:text-orange-400"
    },
    {
      text: "Lexi is one of those very rare designers who not only excels at her craft but also uplifts everyone around her with her proactivity, curiosity, and positivity.",
      author: "Grace Kim",
      title: "UX Research Lead",
      gradient: "from-rose-200/20 via-white/10 to-pink-200/20 dark:from-rose-500/10 dark:via-transparent dark:to-pink-500/10",
      quoteColor: "text-rose-300 dark:text-rose-400"
    }
  ];
  
  // Shuffle facts - pick 3 random facts that haven't been shown yet
  const shuffleFacts = () => {
    // Trigger full rotation animation first
    setIsRotating(true);
    
    // Wait for rotation to complete, then update facts
    setTimeout(() => {
      setIsRotating(false);
      
      // Use ref to get current shown indices (always up-to-date)
      const prevShownIndices = shownFactIndicesRef.current;
      
      // Get indices that haven't been shown yet
      const unshownIndices = allFunFacts
        .map((_, index) => index)
        .filter(index => !prevShownIndices.has(index));
      
      // If we have 3 or more unshown facts, pick 3 random ones
      // Otherwise, reset and start over
      let newIndices: number[];
      let updatedShownIndices: Set<number>;
      
      if (unshownIndices.length >= 3) {
        // Shuffle unshown indices and pick 3
        const shuffled = [...unshownIndices].sort(() => Math.random() - 0.5);
        newIndices = shuffled.slice(0, 3);
        updatedShownIndices = new Set([...prevShownIndices, ...newIndices]);
      } else {
        // Not enough unshown facts, reset and start fresh
        // First, use remaining unshown facts
        const remaining = [...unshownIndices];
        // Then add random facts from all facts to fill to 3
        const allIndices = allFunFacts.map((_, index) => index);
        const shuffled = [...allIndices].sort(() => Math.random() - 0.5);
        const additional = shuffled.filter(index => !remaining.includes(index));
        newIndices = [...remaining, ...additional].slice(0, 3);
        // Reset tracking to only these 3
        updatedShownIndices = new Set(newIndices);
      }
      
      // Update ref and state
      shownFactIndicesRef.current = updatedShownIndices;
      setShownFactIndices(updatedShownIndices);
      
      // Update displayed facts
      const newFacts = newIndices.map(index => allFunFacts[index]);
      setDisplayedFacts(newFacts);
      
      // Reset all cards to unflipped state
      setFlippedCards(new Set());
    }, 600); // Duration matches animation
  };
  
  // Toggle flip state of a card
  const toggleFlip = (index: number) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const renderFactCard = (
    fact: typeof displayedFacts[number],
    index: number,
    keyPrefix: string,
    layout: "grid" | "stack" = "grid"
  ) => {
    const isFlipped = flippedCards.has(index);
    return (
      <div
        key={`${keyPrefix}-${fact.text}`}
        className="relative cursor-pointer hover:scale-[1.02] transition-transform duration-300 w-full"
        style={{ perspective: "1000px" }}
        onClick={() => toggleFlip(index)}
      >
        <div
          className={`relative w-full ${isRotating ? "animate-flip-full" : "transition-transform duration-500"}`}
          style={{
            transform: isRotating
              ? undefined
              : isFlipped
              ? "rotateY(180deg)"
              : "rotateY(0deg)",
            transformStyle: "preserve-3d",
            minHeight: layout === "stack" ? "240px" : "220px",
          }}
        >
          <div
            className="absolute inset-0 w-full h-full bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 flex items-center justify-center backface-hidden px-6"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(0deg)",
            }}
          >
            <span className="text-white/90 font-hagrid font-medium text-3xl text-center">
              flip me 👀
            </span>
          </div>
          <div
            className="absolute inset-0 w-full h-full bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 flex flex-col items-center justify-center gap-3 px-4 py-6 backface-hidden"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <span className="text-4xl md:text-5xl">{fact.emoji}</span>
            <span className="text-white/90 text-base leading-relaxed text-center">
              {fact.text}
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Hero Section - Bento Box Dashboard Style */}
      <div
        className="relative min-h-[100vh] w-full overflow-visible bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-[80px] pb-32"
        data-hero-section
      >
        {/* Mountains Background - Anchored to bottom of hero section */}
        <motion.div
          style={{ y: mountainsY }}
          className="absolute bottom-0 left-0 w-full z-[2] pointer-events-none"
        >
          <img
            src={`${import.meta.env.BASE_URL}mountains_hero.png`}
            alt=""
            className="w-full h-auto"
            style={{ 
              display: 'block',
              objectPosition: 'bottom'
            }}
            loading="eager"
          />
        </motion.div>
        {/* Parallax Background Layers */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 w-full h-full z-0 overflow-hidden"
        >
          {shouldLoadVideo ? (
            <video
              src={`${import.meta.env.BASE_URL}Clouds_bckg.mp4`}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="none"
            />
          ) : (
            // Placeholder gradient to maintain visual consistency while video loads
            <div className="w-full h-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
          )}
        </motion.div>
        
        <div className="relative z-10">
          <Header />
        </div>
        
        {/* Hero Text - Behind Mountains (z-0) */}
        <div className="relative z-[10] max-w-[95%] lg:max-w-[90%] mx-auto px-2 md:px-4 mt-2 md:mt-12 mb-3">
          <div className="px-4 md:px-6 py-6 md:py-8 w-full">
            <div className="max-w-full sm:max-w-[90%] md:max-w-[80%] lg:max-w-[72%] xl:max-w-[68%]">
              <h1 className="font-hagrid text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
                Hi, I'm Lexi <span className="text-xl md:text-2xl lg:text-3xl font-normal text-white/90">a social impact technologist</span>
              </h1>
              <p className="text-white/80 text-base">
                This means I design services, create products, and conduct research on some of the world's biggest problems to make their solutions more citizen centered. Occasionally I code things as well, like this portfolio.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/alexandra-rohrer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}LinkedIn.png`}
                    alt="LinkedIn"
                    className="w-16 h-16 drop-shadow-xl transform transition-transform duration-200 group-hover:scale-110"
                    loading="eager"
                  />
                </a>
                <a
                  href="mailto:lexirohrer@gmail.com"
                  className="group flex items-center justify-center"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}Gmail.png`}
                    alt="Gmail"
                    className="w-16 h-16 drop-shadow-xl transform transition-transform duration-200 group-hover:scale-110"
                    loading="eager"
                  />
                </a>
                <a
                  href="https://calendar.app.google/K8owt9w3d5wnVL9B6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}Calendar.png`}
                    alt="Calendar"
                    className="w-16 h-16 drop-shadow-xl transform transition-transform duration-200 group-hover:scale-110"
                    loading="eager"
                  />
                </a>
                <a
                  href="https://uxlex.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center"
                >
                  <img
                    src={`${import.meta.env.BASE_URL}Substack.png`}
                    alt="Substack"
                    className="w-16 h-16 drop-shadow-xl transform transition-transform duration-200 group-hover:scale-110"
                    loading="eager"
                  />
                </a>
                <Button
                  asChild
                  className="transform transition-transform duration-300 hover:shadow-xl hover:scale-110 h-16 w-full sm:w-auto"
                >
                  <a
                    href="/portfolio"
                    className="flex w-full sm:w-auto items-center justify-center gap-3 h-full px-6"
                  >
                    <span>see my work</span>
                    <span aria-hidden="true" className="text-lg">→</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Other Boxes - In Front of Mountains (z-20) */}
        <div className="relative z-20 max-w-[95%] lg:max-w-[90%] mx-auto px-2 md:px-4 pb-16 mt-3">
          {/* Additional hero content intentionally left blank */}
        </div>
        
        {/* Gradient transition overlay removed to allow mountains to show through */}
        
        {/* Hero section scroll cue - positioned at bottom of hero */}
        <motion.button
          onClick={() => {
            const aboutMeSection = document.getElementById('about-me-section');
            if (aboutMeSection) {
              aboutMeSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }}
          className="absolute bottom-8 left-1/2 z-[30] text-white/80 dark:text-white/70 tracking-[0.2em] uppercase text-xs cursor-pointer hover:text-white/90 dark:hover:text-white transition-colors duration-200 flex items-center justify-center gap-3 p-0 border-0 bg-transparent whitespace-nowrap"
          initial={{ opacity: 0, y: 20, x: '-50%' }}
          animate={{ opacity: 1, y: 0, x: '-50%' }}
          transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          aria-label="Scroll to next section"
        >
          <span aria-hidden="true" className="text-lg">↓</span>
          <span>dive a little deeper</span>
          <span aria-hidden="true" className="text-lg">↓</span>
        </motion.button>
      </div>
      
      {/* Bento Grid Section */}
      <div id="bento-grid-section" className="relative w-full pt-96 md:pt-[120] lg:pt-[40rem] px-4 md:px-8 lg:px-16 pb-16">
        <div className="max-w-7xl mx-auto">

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 md:gap-x-6 lg:gap-x-8 gap-y-24 md:gap-y-32 lg:gap-y-40 auto-rows-auto">
            
            {/* About Me - Grid Layout with MeMoji */}
            <motion.div
              id="about-me-section"
              className="relative lg:col-span-4 lg:row-span-1 transition-all duration-300 mt-16 md:mt-24 overflow-visible px-4 lg:px-0"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="relative flex flex-col gap-6 overflow-visible max-w-4xl mx-auto">
                <AboutMeContent
                  renderFactCard={renderFactCard}
                  displayedFacts={displayedFacts}
                  shuffleFacts={shuffleFacts}
                />
              </div>
            </motion.div>



            {/* Testimonials 3D Card Slider */}
            <motion.div
              className="relative lg:col-span-4 lg:row-span-1 flex flex-col items-center justify-center py-8 px-4 mt-24 overflow-hidden"
              style={{
                minHeight: "max(640px, calc(100vw * 0.667))",
                marginLeft: 'calc(-50vw + 50%)',
                marginRight: 'calc(-50vw + 50%)',
                width: '100vw',
              }}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Background color layer - extends behind cave image for smooth transition */}
              <div className="absolute inset-0 pointer-events-none -z-20 bg-background" />
              
              {/* Background image at 50% opacity - married to testimonials section */}
              <div className="absolute inset-0 pointer-events-none -z-10 flex justify-center overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}cave_bckg.png`}
                  alt=""
                  className="w-full h-full object-cover"
                  style={{ opacity: 0.5 }}
                  aria-hidden="true"
                  loading="lazy"
                />
              </div>
              
              {/* Gradient fade overlay at top - extends upward to cover gap and fade smoothly into cave image */}
              <div 
                className="absolute left-0 right-0 pointer-events-none -z-[5]"
                style={{
                  top: '-300px',
                  height: '500px',
                  background: 'linear-gradient(to bottom, hsl(var(--background)) 0%, hsl(var(--background)) 15%, hsl(var(--background) / 0.85) 30%, hsl(var(--background) / 0.6) 45%, hsl(var(--background) / 0.35) 60%, hsl(var(--background) / 0.15) 75%, hsl(var(--background) / 0.05) 90%, transparent 100%)',
                }}
              />
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-[#EAE8F3] mb-10 font-hagrid text-center w-full relative z-10">what it's like to work with me</h2>
              <div className="relative w-full min-h-[380px] flex items-center justify-center pb-12 z-10">
                {/* Navigation Buttons */}
                <button
                  onClick={() => setActiveTestimonial(prev => prev > 0 ? prev - 1 : prev)}
                  className="absolute left-0 md:left-8 z-50 text-[#1A103F] dark:text-white bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-full p-3 disabled:opacity-30 disabled:cursor-not-allowed matte-3d-button"
                  disabled={activeTestimonial === 0}
                  aria-label="Previous testimonial"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Card Container */}
                <div className="relative w-full h-full flex items-center justify-center overflow-visible">
                  {testimonials.map((testimonial, index) => {
                    const position = index - activeTestimonial;
                    const isActive = index === activeTestimonial;
                    
                    // Calculate transform based on position
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
                      // Cards to the right
                      transform = `translateX(${120 * position}px) scale(${1 - 0.2 * position}) perspective(1000px) rotateY(-8deg)`;
                      zIndex = 10 - position;
                      opacity = position > 2 ? 0 : 0.6;
                      filter = 'blur(3px)';
                    } else if (position < 0) {
                      // Cards to the left
                      const absPosition = Math.abs(position);
                      transform = `translateX(${-120 * absPosition}px) scale(${1 - 0.2 * absPosition}) perspective(1000px) rotateY(8deg)`;
                      zIndex = 10 - absPosition;
                      opacity = absPosition > 2 ? 0 : 0.6;
                      filter = 'blur(3px)';
                    }
                    
                    return (
                      <div
                        key={index}
                        className="absolute rounded-3xl border border-white/30 dark:border-white/10 bg-white/20 dark:bg-white/5 backdrop-blur-lg p-6 sm:p-8 shadow-2xl cursor-pointer w-[95%] sm:w-[520px] md:w-[600px] lg:w-[700px] min-h-[320px] md:min-h-[360px]"
                        style={{
                          transform,
                          zIndex,
                          opacity,
                          filter,
                          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                          pointerEvents: isActive ? 'auto' : 'none'
                        }}
                        onClick={() => setActiveTestimonial(index)}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} rounded-3xl`}></div>
                        <div className="relative z-10 flex flex-col gap-6">
                          <div className="flex-1">
                            <img 
                              src={`${import.meta.env.BASE_URL}open-quotes-light.png`} 
                              alt="" 
                              className="block dark:hidden w-12 h-12 md:w-16 md:h-16 mb-2 opacity-60"
                              loading="lazy"
                            />
                            <img 
                              src={`${import.meta.env.BASE_URL}open-quotes-dark.png`} 
                              alt="" 
                              className="hidden dark:block w-12 h-12 md:w-16 md:h-16 mb-2 opacity-60"
                              loading="lazy"
                            />
                            <p className="text-gray-800 dark:text-[#EAE8F3] italic text-base md:text-2xl leading-relaxed">
                              {testimonial.text}
                            </p>
                          </div>
                          <div className="mt-4 flex-shrink-0">
                            <p className="font-semibold text-gray-800 dark:text-[#EAE8F3] text-sm md:text-base">{testimonial.author}</p>
                            <p className="text-xs md:text-sm text-gray-600 dark:text-[#EAE8F3]/70">{testimonial.title}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <button
                  onClick={() => setActiveTestimonial(prev => prev < testimonials.length - 1 ? prev + 1 : prev)}
                  className="absolute right-0 md:right-8 z-50 text-[#1A103F] dark:text-white bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-full p-3 disabled:opacity-30 disabled:cursor-not-allowed matte-3d-button"
                  disabled={activeTestimonial === testimonials.length - 1}
                  aria-label="Next testimonial"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              {/* Dots Indicator */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2 z-50">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 matte-3d-button ${
                      index === activeTestimonial
                        ? 'bg-[#1A103F] dark:bg-white w-6'
                        : 'bg-[#1A103F]/40 dark:bg-white/40'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            </motion.div>

            {/* Case Study Boxes - 4 boxes taking 2 columns each */}
            {caseStudies.map((study, index) => (
              <motion.a 
                key={index} 
                href={study.link}
                className="relative lg:col-span-2 lg:row-span-1 rounded-3xl border border-white/30 dark:border-white/10 bg-white/20 dark:bg-white/5 backdrop-blur-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${study.color} rounded-3xl`}></div>
                <div className="relative z-10 p-6 flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-[#EAE8F3] mb-2 font-hagrid group-hover:text-gray-900 transition-colors">{study.title}</h3>
                    <p className="text-gray-700 dark:text-[#EAE8F3]/90">{study.description}</p>
                  </div>
                  <div className="w-full md:w-48 h-32 flex-shrink-0">
                    <img 
                      src={`${import.meta.env.BASE_URL}${study.image}`} 
                      alt={study.title} 
                      className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </motion.a>
            ))}

          </div>
        </div>

      </div>

      <Footer />
    </>
  );
};

export default IndexNew;


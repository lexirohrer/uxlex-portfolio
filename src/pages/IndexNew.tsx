
import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import KeepInTouch from "@/components/sections/KeepInTouch";
import Footer from "@/components/sections/Footer";

const IndexNew = () => {
  // Testimonial slider state
  const [activeTestimonial, setActiveTestimonial] = useState(2);
  
  // Fun Facts master list
  const allFunFacts = [
    { emoji: "📚", text: "I collect library cards from every place I've lived" },
    { emoji: "🎤", text: "I love public speaking (weirdo)" },
    { emoji: "🏔️", text: "I once backpacked for a month straight in the Rocky Mountains" },
    { emoji: "🌍", text: "I grew up living with 56 exchange students from 16 different countries" },
    { emoji: "🗣️", text: "I minored in Linguistics & love languages" },
    { emoji: "✈️", text: "So far, I've visited 35 countries and 23 states"},
    { emoji: "🇹🇭", text: "I'm currently learning to speak Thai. It is very hard." },
    { emoji: "🎨", text: "I fell in love with design because I get to work on interdisciplinary problems" },
    { emoji: "🌱", text: "I've been a climate activist for over 10 years" },
    { emoji: "🏔️", text: "I climbed the highest mountain in the continental US – twice!" },
    { emoji: "👽", text: "If you want to talk for hours abour Sci Fi Books, I'm your gal" },
    { emoji: "☕️", text: "People say I have a ton of energy, but I've never had a cup of coffee!" },
    { emoji: "👯‍♀️", text: "I was voted 'most talkative' in my high school yearbook" }
  ];
  
  // Initialize with first 4 facts
  const [displayedFacts, setDisplayedFacts] = useState(() => 
    allFunFacts.slice(0, 4)
  );
  
  // Track which cards are flipped
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  
  // Track if cards are rotating (full flip on shuffle)
  const [isRotating, setIsRotating] = useState(false);
  
  // Parallax scroll effect
  const { scrollY } = useScroll();
  
  // Background layer moves much faster for dramatic effect
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 600]);
  // Mountains layer moves at medium-fast speed
  const mountainsY = useTransform(scrollY, [0, 1000], [0, 350]);
  
  const caseStudies = [
   
  ];

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
      gradient: "from-green-200/20 via-white/10 to-teal-200/20 dark:from-green-500/10 dark:via-transparent dark:to-teal-500/10",
      quoteColor: "text-green-300 dark:text-green-400"
    },
    {
      text: "Lexi's UX expertise made sure our design solutions were grounded in real needs. Her enthusiasm, optimism, and constructive approach made collaboration a joy - I would gladly work with her again.",
      author: "Tanida Disyabut",
      title: "Social Enterprise Founder",
      gradient: "from-yellow-200/20 via-white/10 to-orange-200/20 dark:from-yellow-500/10 dark:via-transparent dark:to-orange-500/10",
      quoteColor: "text-yellow-300 dark:text-yellow-400"
    },
    {
      text: "Lexi is one of those very rare designers who not only excels at her craft but also uplifts everyone around her with her proactivity, curiosity, and positivity.",
      author: "Grace Kim",
      title: "UX Research Lead",
      gradient: "from-rose-200/20 via-white/10 to-pink-200/20 dark:from-rose-500/10 dark:via-transparent dark:to-pink-500/10",
      quoteColor: "text-rose-300 dark:text-rose-400"
    }
  ];
  
  // Shuffle facts - pick 4 random facts from master list
  const shuffleFacts = () => {
    // Trigger full rotation animation first
    setIsRotating(true);
    
    // Wait for rotation to complete, then update facts
    setTimeout(() => {
      setIsRotating(false);
      const shuffled = [...allFunFacts].sort(() => Math.random() - 0.5);
      setDisplayedFacts(shuffled.slice(0, 4));
      // Reset all cards to unflipped state
      setFlippedCards(new Set());
    }, 600); // Duration matches animation
  };
  
  // Toggle flip state of a card
  const toggleFlip = (index: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Work+Sans:wght@400;600;700&family=Plus+Jakarta+Sans:wght@400;700&family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      
      {/* Hero Section - Bento Box Dashboard Style */}
      <div
        className="relative min-h-[100vh] w-full overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-[80px] pb-32"
        data-hero-section
      >
        {/* Parallax Background Layers */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 w-full h-full z-0"
        >
          <img
            src={`${import.meta.env.BASE_URL}bkg_hero.svg`}
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <motion.div
          style={{ y: mountainsY }}
          className="absolute inset-0 w-full h-full z-[1]"
        >
          <img
            src={`${import.meta.env.BASE_URL}mountains_hero.svg`}
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <div className="relative z-10">
          <Header />
        </div>
        
        {/* Hero Text Box - Behind Mountains (z-0) */}
        <div className="relative z-0 max-w-[95%] lg:max-w-[90%] mx-auto px-2 md:px-4 mt-4 mb-6">
          <div className="relative rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 md:p-12 shadow-2xl group transition-all duration-300 w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-pink-500/20 to-purple-500/20 rounded-3xl"></div>
            <div className="relative z-10 w-full">
                  <h1 className="font-hagrid text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
                Hi, I'm Lexi <span className="text-2xl md:text-3xl lg:text-4xl font-normal text-white/90">a social impact technologist</span>
                  </h1>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed">
                This means I design services, create products, and conduct research on some of the world's biggest problems to make their solutions more citizen centered. Occasionally I code things as well, like this portfolio.
              </p>
            </div>
          </div>
                </div>
        
        {/* Other Boxes - In Front of Mountains (z-20) */}
        <div className="relative z-20 max-w-[95%] lg:max-w-[90%] mx-auto px-2 md:px-4 pb-32 mt-6">
          
          {/* Main Content Row */}
          <div className="flex flex-col lg:flex-row gap-4 items-stretch">
            
            {/* Memoji Box - Narrower width, full height */}
            {false && (
            <div className="relative rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-6 md:p-8 shadow-2xl hover:scale-[1.02] transition-all duration-300 w-full lg:w-[22%] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-3xl"></div>
              <div className="relative z-10">
                <img 
                  src={`${import.meta.env.BASE_URL}Memoji.png`} 
                  alt="Lexi Memoji" 
                  className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain"
                />
              </div>
            </div>
            )}

            {/* Middle Column - Currently + Experience Stacked */}
            <div className="flex flex-col gap-6 w-full lg:w-[50%]">
              
              {/* Currently Box */}
              <div className="relative rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 md:p-12 shadow-2xl group transition-all duration-300">
                <div className="relative z-10">
                  <h3 className="font-hagrid text-2xl font-bold text-white mb-3">Currently</h3>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="flex items-center gap-2 justify-center">
                      <div className="text-2xl md:text-3xl flex-shrink-0">🌏</div>
                      <div className="text-white/90 text-lg md:text-base leading-relaxed">Based in Bangkok & Bay Area</div>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <div className="text-2xl md:text-3xl flex-shrink-0">🌱</div>
                      <div className="text-white/90 text-lg md:text-base leading-relaxed">Leading Design @ Basilica Bio</div>
                    </div>
                    <div className="flex items-center gap-2 justify-center">
                      <div className="text-2xl md:text-3xl flex-shrink-0">📣</div>
                      <div className="text-white/90 text-lg md:text-base leading-relaxed">Open to new collaborations</div>
                    </div>
                  </div>
              </div>
            </div>

              {/* Experience Box */}
              <div className="relative rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 md:p-12 shadow-2xl group transition-all duration-300">
                <div className="relative z-10">
                  <h3 className="font-hagrid text-2xl font-bold text-white mb-3">Experience</h3>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <div className="text-2xl md:text-3xl font-bold text-white">5+</div>
                      <div className="text-white/70 text-xs md:text-sm">Years</div>
                    </div>
                    <div>
                      <div className="text-2xl md:text-3xl font-bold text-white">35</div>
                      <div className="text-white/70 text-xs md:text-sm">Countries</div>
                    </div>
                    <div>
                      <div className="text-2xl md:text-3xl font-bold text-white">10+</div>
                      <div className="text-white/70 text-xs md:text-sm">Talks & Panels</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Fun Facts - 4 square cards in grid */}
            <div className="w-full lg:flex-1 flex flex-col">
              <div className="relative grid grid-cols-2 gap-4 flex-1 h-full" style={{ gridAutoRows: '1fr' }}>
                  {displayedFacts.map((fact, index) => {
                    const isFlipped = flippedCards.has(index);
                    return (
                      <div
                        key={`${fact.text}-${index}`}
                        className="relative cursor-pointer hover:scale-[1.02] transition-transform duration-300 h-full w-full"
                        style={{ perspective: "1000px" }}
                        onClick={() => toggleFlip(index)}
                      >
                        <div
                          className={`relative w-full h-full ${isRotating ? 'animate-flip-full' : 'transition-transform duration-500'}`}
                          style={{
                            transform: isRotating ? undefined : (isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"),
                            transformStyle: "preserve-3d"
                          }}
                        >
                          {/* Front of card - shows "flip for fun fact" */}
                          <div
                            className="absolute inset-0 w-full h-full bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 flex items-center justify-center backface-hidden"
                            style={{
                              backfaceVisibility: "hidden",
                              WebkitBackfaceVisibility: "hidden",
                              transform: "rotateY(0deg)"
                            }}
                          >
                            <span className="text-white/90 font-hagrid font-medium text-3xl text-center">flip me 👀</span>
                          </div>
                          {/* Back of card - shows emoji and text */}
                          <div
                            className="absolute inset-0 w-full h-full bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 flex flex-col items-center justify-center gap-2 px-4 backface-hidden"
                            style={{
                              backfaceVisibility: "hidden",
                              WebkitBackfaceVisibility: "hidden",
                              transform: "rotateY(180deg)"
                            }}
                          >
                            <span className="text-4xl md:text-5xl">{fact.emoji}</span>
                            <span className="text-white/90 text-xl leading-relaxed text-center">{fact.text}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  {/* Central Shuffle Button */}
                  <button
                    onClick={shuffleFacts}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-36 h-36 rounded-full transition-all duration-200 flex items-center justify-center hover:scale-110 shadow-2xl overflow-hidden group"
                    style={{
                      background: 'linear-gradient(180deg, #3D2F5C 0%, #5C4B8D 25%, #7A6BA5 50%, #A68B7D 75%, #D49B7C 100%)',
                      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.4), inset 0 2px 0 rgba(255, 255, 255, 0.5), inset 0 -2px 0 rgba(0, 0, 0, 0.4), inset -10px 0 20px rgba(0, 0, 0, 0.2), inset 10px 0 20px rgba(0, 0, 0, 0.2)'
                    }}
                    aria-label="Shuffle facts"
                  >
                    {/* Darker sides for 3D effect */}
                    <div 
                      className="absolute inset-0 rounded-full opacity-40"
                      style={{
                        background: 'radial-gradient(ellipse at 0% 50%, rgba(0, 0, 0, 0.3) 0%, transparent 50%), radial-gradient(ellipse at 100% 50%, rgba(0, 0, 0, 0.3) 0%, transparent 50%)',
                        pointerEvents: 'none'
                      }}
                    />
                    {/* Glossy highlight */}
                    <div 
                      className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full opacity-70"
                      style={{
                        background: 'radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.3), transparent 70%)',
                        pointerEvents: 'none'
                      }}
                    />
                    {/* Concentric rings */}
                    <div 
                      className="absolute inset-0 rounded-full opacity-25"
                      style={{
                        background: 'conic-gradient(from 0deg, transparent, rgba(255, 255, 255, 0.15), transparent 120deg, rgba(255, 255, 255, 0.15), transparent 240deg)',
                        pointerEvents: 'none'
                      }}
                    />
                    <img 
                      src={`${import.meta.env.BASE_URL}Shuffle_Icon.svg`}
                      alt="Shuffle"
                      className="w-12 h-12 relative z-10 drop-shadow-lg"
                    />
                  </button>
              </div>
            </div>

            {/* App Icons Column - Full row height */}
            <div className="hidden lg:flex flex-col justify-between w-auto gap-4">
              <a href="https://www.linkedin.com/in/alexandra-rohrer/" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center hover:scale-110 transition-all duration-300">
                <img src={`${import.meta.env.BASE_URL}LinkedIn.png`} alt="LinkedIn" className="w-full h-full max-w-[80px] max-h-[80px] object-contain drop-shadow-lg" />
              </a>
              <a href="mailto:lexirohrer@gmail.com" className="flex-1 flex items-center justify-center hover:scale-110 transition-all duration-300">
                <img src={`${import.meta.env.BASE_URL}Gmail.png`} alt="Gmail" className="w-full h-full max-w-[80px] max-h-[80px] object-contain drop-shadow-lg" />
              </a>
              <a href="https://calendar.app.google/K8owt9w3d5wnVL9B6" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center hover:scale-110 transition-all duration-300">
                <img src={`${import.meta.env.BASE_URL}Calendar.png`} alt="Calendar" className="w-full h-full max-w-[80px] max-h-[80px] object-contain drop-shadow-lg" />
              </a>
              <a href="https://uxlex.substack.com/" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center hover:scale-110 transition-all duration-300">
                <img src={`${import.meta.env.BASE_URL}Substack.png`} alt="Substack" className="w-full h-full max-w-[80px] max-h-[80px] object-contain drop-shadow-lg" />
              </a>
            </div>

          </div>
        </div>
        
        {/* Gradient transition overlay for smooth blend */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent via-orange-50/30 to-orange-50 dark:via-[#1A103F]/30 dark:to-[#1A103F] pointer-events-none z-[25]"></div>
      </div>
      
      {/* Bento Grid Section */}
      <div className="w-full bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-[#1A103F] dark:via-[#1A103F] dark:to-[#1A103F] pt-24 md:pt-32 lg:pt-40 pb-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto">
            
            {/* About Me - Grid Layout with MeMoji */}
            <div className="relative lg:col-span-4 lg:row-span-1 rounded-3xl transition-all duration-300 mt-8">
              <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 overflow-visible">
                {/* Radial gradient behind Memoji - positioned at grid level, centered behind Memoji */}
                <div className="absolute left-1/2 lg:left-3/4 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
                  <div 
                    className="rounded-full"
                    style={{
                      width: 'clamp(400px, 100vw, 750px)',
                      height: 'clamp(400px, 100vw, 750px)',
                      background: 'radial-gradient(circle, rgba(93, 54, 77, 0.7) 0%, rgba(93, 54, 77, 0.65) 15%, rgba(93, 54, 77, 0.55) 25%, rgba(93, 54, 77, 0.45) 35%, rgba(85, 50, 72, 0.38) 45%, rgba(77, 46, 68, 0.32) 52%, rgba(70, 40, 63, 0.26) 58%, rgba(63, 36, 59, 0.21) 65%, rgba(55, 31, 55, 0.16) 72%, rgba(48, 28, 51, 0.12) 78%, rgba(40, 24, 47, 0.08) 84%, rgba(33, 20, 55, 0.05) 90%, rgba(26, 16, 63, 0.02) 95%, rgba(26, 16, 63, 0) 100%)'
                    }}
                  ></div>
                </div>
                
                {/* About Me Content - Left Column */}
                <div className="relative z-10 p-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-[#EAE8F3] mb-6 font-hagrid text-left">about me</h2>
                  <div className="space-y-4 text-gray-700 dark:text-[#EAE8F3]/90 dark:text-[#EAE8F3]/90 leading-relaxed text-justify">
                    <p className="text-lg">
                      I design experiences that create positive social impact. As a Fulbright fellow, I most recently used participatory design to make sure Smart City tech solves real problems for Bangkok residents.
                    </p>
                    <p className="text-lg">
                      Nights and weekends I design for Basilica Bio, an environmental justice nonprofit building resilience and climate knowledge in Washington frontline communities. If I'm not in Figma or planning my next international adventure, you can find me at the climbing gym or doing Thai flashcards on the elliptical.
                    </p>            
                    <p className="text-lg">
                      If you're working on a social impact problem and need a UX consultant, book a time to chat or reach out at lexirohrer@gmail.com
                    </p>
                  </div>
                </div>
                
                {/* MeMoji Card - Right Column */}
                <div className="relative flex items-center justify-center p-6 md:p-8 z-10">
                  <img 
                    src={`${import.meta.env.BASE_URL}Memoji.png`} 
                    alt="Lexi Memoji" 
                    className="relative z-10 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain"
                  />
                </div>
              </div>
            </div>



            {/* Testimonials 3D Card Slider */}
            <div className="relative lg:col-span-4 lg:row-span-1 flex flex-col items-center justify-center py-8 px-4 mt-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-[#EAE8F3] mb-8 font-hagrid text-center w-full">testimonials</h2>
              <div className="relative w-full h-[380px] flex items-center justify-center">
                {/* Navigation Buttons */}
                <button
                  onClick={() => setActiveTestimonial(prev => prev > 0 ? prev - 1 : prev)}
                  className="absolute left-0 md:left-8 z-50 text-white bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-full p-3 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed"
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
                        className="absolute rounded-3xl border border-white/30 dark:border-white/10 bg-white/20 dark:bg-white/5 backdrop-blur-lg p-8 shadow-2xl cursor-pointer w-[90%] md:w-[600px] lg:w-[700px] min-h-[320px] max-h-[340px]"
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
                        <div className="relative z-10 h-full flex flex-col justify-between overflow-y-auto">
                          <div className="flex-1">
                            <div className={`text-4xl md:text-5xl ${testimonial.quoteColor} opacity-60 mb-2`}>"</div>
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
                  className="absolute right-0 md:right-8 z-50 text-white bg-white/10 dark:bg-white/5 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-full p-3 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed"
                  disabled={activeTestimonial === testimonials.length - 1}
                  aria-label="Next testimonial"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
            </div>

              {/* Dots Indicator */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2 z-50">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeTestimonial
                        ? 'bg-white w-6'
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Case Study Boxes - 4 boxes taking 2 columns each */}
            {caseStudies.map((study, index) => (
              <a 
                key={index} 
                href={study.link}
                className="relative lg:col-span-2 lg:row-span-1 rounded-3xl border border-white/30 dark:border-white/10 bg-white/20 dark:bg-white/5 backdrop-blur-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] group"
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
              </a>
            ))}

          </div>
        </div>

        {/* Keep in Touch Section */}
        <KeepInTouch />
      </div>

      <Footer />
    </>
  );
};

export default IndexNew;


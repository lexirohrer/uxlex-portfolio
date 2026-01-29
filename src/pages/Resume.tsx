
import React, { useState, useRef, useCallback, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { allFunFacts } from "@/data/funFacts";
import { useIsMobile } from "@/hooks/use-mobile";

const Resume = () => {
  const isMobile = useIsMobile();
  
  // Track which fact indices have been shown
  const shownFactIndicesRef = useRef<Set<number>>(new Set());
  const [shownFactIndices, setShownFactIndices] = useState<Set<number>>(
    shownFactIndicesRef.current
  );
  
  // Initialize with all facts
  const [displayedFacts, setDisplayedFacts] = useState(() => 
    allFunFacts
  );
  
  // Track which cards are flipped
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  
  // Track if cards are rotating (full flip on shuffle)
  const [isRotating, setIsRotating] = useState(false);
  
  // Testimonials state
  const [activeTestimonial, setActiveTestimonial] = useState(2);
  
  // Track card heights for consistent sizing on mobile
  const [maxCardHeight, setMaxCardHeight] = useState<number | null>(null);
  const cardBackRefs = useRef<(HTMLDivElement | null)[]>([]);

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
  
  // Shuffle facts function
  const shuffleFacts = () => {
    setIsRotating(true);
    
    setTimeout(() => {
      setIsRotating(false);
      
      const prevShownIndices = shownFactIndicesRef.current;
      const unshownIndices = allFunFacts
        .map((_, index) => index)
        .filter(index => !prevShownIndices.has(index));
      
      // Shuffle all facts for 4x4 grid
      const allIndices = allFunFacts.map((_, index) => index);
      const shuffled = [...allIndices].sort(() => Math.random() - 0.5);
      const newIndices = shuffled;
      
      shownFactIndicesRef.current = new Set(newIndices);
      setShownFactIndices(new Set(newIndices));
      setDisplayedFacts(newIndices.map(index => allFunFacts[index]));
      setFlippedCards(new Set());
    }, 600);
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
  
  // Measure card heights on mobile to ensure consistent sizing based on backside content
  useEffect(() => {
    if (!isMobile || cardBackRefs.current.length === 0) {
      setMaxCardHeight(null);
      return;
    }
    
    // Use requestAnimationFrame to ensure DOM is ready
    const measureHeights = () => {
      const heights = cardBackRefs.current
        .filter(ref => ref !== null)
        .map(ref => {
          // Temporarily make it visible and relative to measure natural height
          const originalPosition = ref!.style.position;
          const originalOpacity = ref!.style.opacity;
          const originalZIndex = ref!.style.zIndex;
          const originalTransform = ref!.style.transform;
          
          ref!.style.position = 'relative';
          ref!.style.opacity = '1';
          ref!.style.zIndex = '1';
          ref!.style.transform = 'none';
          
          const height = ref!.scrollHeight;
          
          // Restore original styles
          ref!.style.position = originalPosition;
          ref!.style.opacity = originalOpacity;
          ref!.style.zIndex = originalZIndex;
          ref!.style.transform = originalTransform;
          
          return height;
        });
      
      if (heights.length > 0) {
        const maxHeight = Math.max(...heights);
        setMaxCardHeight(maxHeight);
      }
    };
    
    // Delay measurement to ensure cards are rendered
    const timeoutId = setTimeout(measureHeights, 100);
    return () => clearTimeout(timeoutId);
  }, [isMobile, displayedFacts]);
  
  const renderFactCard = useCallback((
    fact: typeof displayedFacts[number],
    index: number,
    keyPrefix: string,
    layout: "grid" | "stack" = "grid"
  ) => {
    const isFlipped = flippedCards.has(index);
    const cardHeight = isMobile && maxCardHeight ? `${maxCardHeight}px` : undefined;
    
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
            minHeight: isMobile 
              ? (cardHeight || "180px") // Use measured height or fallback
              : layout === "stack" ? "240px" : "220px",
            height: isMobile && cardHeight ? cardHeight : undefined,
          }}
        >
          <div
            className="fact-card-glass absolute inset-0 w-full h-full rounded-3xl border border-white/20 flex items-center justify-center backface-hidden px-6"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(0deg)",
              position: "absolute",
              zIndex: isMobile ? (isFlipped ? 0 : 1) : 1,
              opacity: isMobile ? (isFlipped ? 0 : 1) : 1,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              isolation: "isolate",
              willChange: "backdrop-filter",
            }}
          >
            <span className="text-white/90 font-hagrid font-medium text-3xl text-center">
              flip me 👀
            </span>
          </div>
          <div
            ref={(el) => {
              cardBackRefs.current[index] = el;
            }}
            className="fact-card-glass absolute inset-0 w-full h-full rounded-3xl border border-white/20 flex flex-col items-center justify-center gap-3 px-4 py-6 backface-hidden"
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              position: "absolute",
              zIndex: isMobile ? (isFlipped ? 1 : 0) : 1,
              opacity: isMobile ? (isFlipped ? 1 : 0) : 1,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              isolation: "isolate",
              willChange: "backdrop-filter",
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
  }, [flippedCards, isRotating, isMobile, maxCardHeight]);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Rohrer-Resume-2025.pdf';
    link.download = 'Rohrer-Resume-2025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="max-w-[1440px] w-full mx-auto my-0 max-md:max-w-[991px] max-sm:max-w-screen-sm relative overflow-hidden bg-white dark:bg-transparent min-h-screen">
        <Header />
        <main className="px-[120px] pt-[180px] pb-[100px] max-md:px-10 max-md:pt-[144px] max-md:pb-[60px] max-sm:px-5 max-sm:pt-[132px] max-sm:pb-[40px] relative z-10">
          
          {/* About Me Section */}
          <section className="mb-60">
            <div className="w-full">

              {/* Fun Facts - 4x4 Grid on Desktop, Stacked on Mobile */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4 mt-6">
                {displayedFacts.map((fact, index) => (
                  <div key={`wrapper-${index}`} className="w-full">
                    {renderFactCard(fact, index, "grid", "grid")}
                  </div>
                ))}
              </div>

              {/* Shuffle Button - Full Width */}
              <button
                onClick={shuffleFacts}
                className="w-full mt-6 py-4 px-6 rounded-3xl transition-all duration-200 flex items-center justify-center gap-3 shadow-2xl bg-white/10 dark:bg-white/10 backdrop-blur-xl border border-white/20 dark:border-white/20 hover:scale-[1.02]"
                aria-label="Shuffle facts"
              >
                <img
                  src={`${import.meta.env.BASE_URL}Shuffle_Icon.svg`}
                  alt="Shuffle"
                  className="w-6 h-6 drop-shadow-lg"
                  loading="lazy"
                />
                <span className="text-gray-700 dark:text-[#EAE8F3]/90 font-hagrid font-medium text-xl">
                  shuffle
                </span>
              </button>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="mb-60">
            <div className="w-full">
              <div className="relative w-full min-h-[380px] flex items-center justify-center pb-12">
                {/* Navigation Buttons */}
                <button
                  onClick={() => setActiveTestimonial(prev => prev > 0 ? prev - 1 : prev)}
                  className="absolute left-2 md:left-8 z-50 text-gray-800 dark:text-white bg-white/10 dark:bg-white/10 backdrop-blur-lg border border-white/20 dark:border-white/20 rounded-full p-2 md:p-3 disabled:opacity-30 disabled:cursor-not-allowed"
                  disabled={activeTestimonial === 0}
                  aria-label="Previous testimonial"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Card Container */}
                <div className="relative w-full h-full flex items-center justify-center overflow-visible px-8 md:px-0">
                  {testimonials.map((testimonial, index) => {
                    const position = index - activeTestimonial;
                    const isActive = index === activeTestimonial;
                    
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
                        className="absolute rounded-3xl border border-white/30 dark:border-white/10 bg-white/20 dark:bg-[#0A0520]/20 backdrop-blur-lg p-6 sm:p-8 shadow-2xl cursor-pointer w-[95%] sm:w-[520px] md:w-[600px] lg:w-[700px] min-h-[320px] md:min-h-[360px]"
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
                        <div className="absolute inset-0 bg-white/20 dark:bg-[#0A0520]/20 rounded-3xl backdrop-blur-xl"></div>
                        <div className="absolute inset-0 bg-white/20 dark:bg-white/20 rounded-3xl"></div>
                        <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} rounded-3xl backdrop-blur-sm`}></div>
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
                            <p className="text-gray-800 dark:text-white italic text-base md:text-2xl leading-relaxed">
                              {testimonial.text}
                            </p>
                          </div>
                          <div className="mt-4 flex-shrink-0">
                            <p className="font-semibold text-gray-800 dark:text-white text-sm md:text-base">{testimonial.author}</p>
                            <p className="text-xs md:text-sm text-gray-700 dark:text-white/70">{testimonial.title}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <button
                  onClick={() => setActiveTestimonial(prev => prev < testimonials.length - 1 ? prev + 1 : prev)}
                  className="absolute right-2 md:right-8 z-50 text-gray-800 dark:text-white bg-white/10 dark:bg-white/10 backdrop-blur-lg border border-white/20 dark:border-white/20 rounded-full p-2 md:p-3 disabled:opacity-30 disabled:cursor-not-allowed"
                  disabled={activeTestimonial === testimonials.length - 1}
                  aria-label="Next testimonial"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Dots Indicator */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex gap-2 z-50">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activeTestimonial
                          ? 'bg-gray-800 dark:bg-white w-6'
                          : 'bg-gray-400 dark:bg-white/40'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Resume Section */}
          <section className="mb-60">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-start">
            {/* Left Column: Experience, then Education */}
            <div className="space-y-7">
              {/* Experience */}
              <div className="relative rounded-3xl border border-white/30 dark:border-white/10 overflow-hidden shadow-xl hover:shadow-[inset_0_2px_8px_rgba(0,0,0,0.15)] dark:hover:shadow-[inset_0_2px_12px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-[0.99] p-8">
                <div>
                  <h2 className="text-gray-800 dark:text-[#EAE8F3] text-2xl font-semibold mb-6 font-hagrid text-left">Experience</h2>
                  <div className="space-y-6">
                  <div>
                    <h3 className="text-gray-800 dark:text-[#EAE8F3] text-xl font-semibold">Fulbright Fellow on Smart City Technology</h3>
                    <p className="text-gray-700 dark:text-[#EAE8F3]/90 font-medium">August 2024 - Present</p>
                    <p className="text-gray-700 dark:text-[#EAE8F3]/90 mt-2">Lived and worked in Bangkok, Thailand on a year long design & research fellowship. Facilitated 15+ participatory design workshops across 5 NGO, private, and public orgs.</p>
                  </div>
                  <div>
                    <h3 className="text-gray-800 dark:text-[#EAE8F3] text-xl font-semibold">Product Designer</h3>
                    <p className="text-gray-700 dark:text-[#EAE8F3]/90 font-medium">Intuit • September 2021 - August 2024</p>
                    <p className="text-gray-700 dark:text-[#EAE8F3]/90 mt-2">Designing onboarding experiences to help small business owners set up and use QuickBooks across web and mobile. Leading the design effort to unify and tailor the QuickBooks onboarding experience across geographic regions.</p>
                  </div>
                  <div>
                    <h3 className="text-gray-800 dark:text-[#EAE8F3] text-xl font-semibold">Design & Communications Director</h3>
                    <p className="text-gray-700 dark:text-[#EAE8F3]/90 font-medium">Basilica Bio • April 2021 - Present</p>
                    <p className="text-gray-700 dark:text-[#EAE8F3]/90 mt-2">Facilitating and participating in environmental justice education workshops. Created Basilica Bio's brand system, communication strategy, and website.</p>
                  </div>
                  <div>
                    <h3 className="text-gray-800 dark:text-[#EAE8F3] text-xl font-semibold">Human Computer Interaction Research Intern</h3>
                    <p className="text-gray-700 dark:text-[#EAE8F3]/90 font-medium">Carnegie Mellon University • June 2019 - September 2019</p>
                    <p className="text-gray-700 dark:text-[#EAE8F3]/90 mt-2">Designed the onboarding flow for the chrome extension by Dr. Aniket Kittur's lab. Planned, recruited for, and conducted concept tests with users on prospective feature development.</p>
                  </div>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="relative rounded-3xl border border-white/30 dark:border-white/10 overflow-hidden shadow-xl hover:shadow-[inset_0_2px_8px_rgba(0,0,0,0.15)] dark:hover:shadow-[inset_0_2px_12px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-[0.99] p-8">
                <div>
                  <h2 className="text-gray-800 dark:text-[#EAE8F3] text-2xl font-semibold mb-6 font-hagrid text-left">Education</h2>
                  <div className="space-y-4">
                  <div>
                    <h3 className="text-gray-800 dark:text-[#EAE8F3] text-xl font-semibold">B.S. | Human Centered Design & Engineering</h3>
                    <p className="text-gray-700 dark:text-[#EAE8F3]/90 font-medium">Minor | Linguistics</p>
                    <p className="text-gray-700 dark:text-[#EAE8F3]/90 font-medium">University of Washington, Seattle • 2017-2021</p>
                    <p className="text-gray-700 dark:text-[#EAE8F3]/90 mt-2">GPA: 3.98</p>
                  </div>
                  <div>
                    <h3 className="text-gray-800 dark:text-[#EAE8F3] text-xl font-semibold">UX Certificate in Interaction Design</h3>
                    <p className="text-gray-700 dark:text-[#EAE8F3]/90 font-medium">Nielsen Norman Group, Vancouver • August 2018</p>
                    <p className="text-gray-700 dark:text-[#EAE8F3]/90 mt-2">ID 1025553</p>
                  </div>
                  </div>
                </div>
              </div>

              {/* Download PDF Resume Button */}
              <div className="flex justify-start">
                <Button onClick={handleDownload}>
                  <Download size={20} />
                  Download PDF Resume
                </Button>
              </div>
            </div>

            {/* Right Column: Publications, Skills */}
            <div className="space-y-7">
              {/* Publications */}
              <div className="relative rounded-3xl border border-white/30 dark:border-white/10 overflow-hidden shadow-xl hover:shadow-[inset_0_2px_8px_rgba(0,0,0,0.15)] dark:hover:shadow-[inset_0_2px_12px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-[0.99] p-8">
                <div>
                  <h2 className="text-gray-800 dark:text-[#EAE8F3] text-2xl font-semibold mb-6 font-hagrid text-left">Talks, Publications, Patents</h2>
                  <div className="space-y-6">
                  <div>
                    <h3 className="text-gray-800 dark:text-[#EAE8F3] text-xl font-semibold">Patent IPR-2412979US: Automatic Onboarding to a Computer Application by Scraping Website Data</h3>
                    <p className="text-gray-700 dark:text-[#EAE8F3]/90 font-medium">Patent Application, 2024</p>
                    <p className="text-gray-700 dark:text-[#EAE8F3]/90 mt-2">Automated system for streamlining user onboarding by extracting relevant business information from websites.</p>
                  </div>
                  <div>
                    <h3 className="text-gray-800 dark:text-[#EAE8F3] text-xl font-semibold">Mock to Stock: Let's Jam on a Minimum Lovable Product</h3>
                    <p className="text-gray-700 dark:text-[#EAE8F3]/90 font-medium">Grace Hopper conference, Sept 2023</p>
                    <p className="text-gray-700 dark:text-[#EAE8F3]/90 mt-2">Designed and facilitated a workshop guiding 80+ engineers through Intuit's E2E design process.</p>
                  </div>
                  <div>
                    <h3 className="text-gray-800 dark:text-[#EAE8F3] text-xl font-semibold">Human Centered Principles for Applying Augmented Reality in Manufacturing</h3>
                    <p className="text-gray-700 dark:text-[#EAE8F3]/90 font-medium">Massachusetts Institute of Technology (MIT), January 2019</p>
                    <p className="text-gray-700 dark:text-[#EAE8F3]/90 mt-2">Conference presentation accompanying my primary author publication at MIT's Undergraduate Research Technology Conference.</p>
                  </div>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="relative rounded-3xl border border-white/30 dark:border-white/10 overflow-hidden shadow-xl hover:shadow-[inset_0_2px_8px_rgba(0,0,0,0.15)] dark:hover:shadow-[inset_0_2px_12px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-[0.99] p-8">
                <div>
                    <h2 className="text-gray-800 dark:text-[#EAE8F3] text-2xl font-semibold mb-6 font-hagrid text-left">Skills</h2>
                  <div className="space-y-4">
                  <div>
                    <h3 className="text-gray-800 dark:text-[#EAE8F3] text-lg font-semibold mb-2">Design & Research</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Figma</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Adobe CC</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Prototyping</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Design Systems</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">User Research</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">User Interviews</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Usability Testing</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">A/B Testing</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-gray-800 dark:text-[#EAE8F3] text-lg font-semibold mb-2">Methods & Strategy</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Design Thinking</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Human-Centered Design</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Service Design</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Design critique</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Storyboarding</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Wireframing</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Content Strategy</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Information Architecture</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-gray-800 dark:text-[#EAE8F3] text-lg font-semibold mb-2">Collaboration & Analysis</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Cross-functional Collaboration</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Stakeholder Management</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Workshop Facilitation</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Product Strategy</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Data Analysis</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Competitive Analysis</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-gray-800 dark:text-[#EAE8F3] text-lg font-semibold mb-2">Technical Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Sketch</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">InVision</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Miro</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Notion</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Python</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">HTML/CSS</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">JavaScript</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-gray-800 dark:text-[#EAE8F3] text-lg font-semibold mb-2">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">English (Native)</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Thai (Conversational)</span>
                    </div>
                  </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
          </section>

          {/* Contact Section - Footer Style */}
          <section className="mb-60">
            <div className="w-full">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-8">
                {/* Left Side - Content */}
                <div className="flex-1">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-[#EAE8F3] mb-4 font-hagrid text-left">say hello 👋</h2>
                  <p className="text-gray-700 dark:text-[#EAE8F3]/90 text-left text-lg md:text-xl max-w-3xl">
                    If you're working on a social impact problem and need a UX consultant, book a time on my calendar or reach out at lexirohrer@gmail.com
                  </p>
                </div>
                
                {/* Right Side - Icons */}
                <div className="flex flex-row gap-6 items-center justify-end md:justify-end flex-shrink-0">
                  <a
                    href="https://www.linkedin.com/in/alexandra-rohrer/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center"
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}LinkedIn.png`}
                      alt="LinkedIn"
                      className="w-16 h-16 md:w-20 md:h-20 drop-shadow-xl transform transition-transform duration-200 group-hover:scale-110"
                      loading="lazy"
                    />
                  </a>
                  <a
                    href="mailto:lexirohrer@gmail.com"
                    className="group flex items-center justify-center"
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}Gmail.png`}
                      alt="Gmail"
                      className="w-16 h-16 md:w-20 md:h-20 drop-shadow-xl transform transition-transform duration-200 group-hover:scale-110"
                      loading="lazy"
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
                      className="w-16 h-16 md:w-20 md:h-20 drop-shadow-xl transform transition-transform duration-200 group-hover:scale-110"
                      loading="lazy"
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
                      className="w-16 h-16 md:w-20 md:h-20 drop-shadow-xl transform transition-transform duration-200 group-hover:scale-110"
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Resume;


import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import Footer from "@/components/sections/Footer";

const IndexNew = () => {
  // Testimonial slider state
  const [activeTestimonial, setActiveTestimonial] = useState(2);
  
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
      text: "exi's expertise in UX design and feedback collection methods allowed us to engage users deeply and meaningfully, ensuring that our design solutions were grounded in real needs. Her enthusiasm, optimism, and constructive approach made collaboration a joy - I would gladly work with her again.",
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
          <div className="relative rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-8 md:p-12 shadow-2xl group hover:scale-[1.01] transition-all duration-300 w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-pink-500/20 to-purple-500/20 rounded-3xl"></div>
            <div className="relative z-10 w-full">
              <h1 className="font-hagrid text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Hi, I'm Lexi 
              </h1>
              <h2 className="font-hagrid text-2xl md:text-3xl lg:text-4xl text-white/90 mb-8">
                a <span className="relative inline-block">
                  <span className="relative z-10">social impact technologist</span>
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-pink-400"></span>
                </span>
              </h2>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-3xl">
                I work with social impact focused orgs on UX and service design problems.
              </p>
            </div>
          </div>
        </div>
        
        {/* Other Boxes - In Front of Mountains (z-20) */}
        <div className="relative z-20 max-w-[95%] lg:max-w-[90%] mx-auto px-2 md:px-4 pb-32 mt-6">
          
          {/* Main Content Row */}
          <div className="flex flex-col lg:flex-row gap-4 items-stretch">
            
            {/* Memoji Box - Narrower width, full height */}
            <div className="relative rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-6 md:p-8 shadow-2xl hover:scale-[1.02] transition-all duration-300 w-full lg:w-[22%] flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-3xl"></div>
              <div className="relative z-10">
                <img 
                  src={`${import.meta.env.BASE_URL}Memoji.png`} 
                  alt="Lexi Memoji" 
                  className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain"
                />
              </div>
            </div>

            {/* Middle Column - Currently + Experience Stacked */}
            <div className="flex flex-col gap-6 w-full lg:w-[26%]">
              
              {/* Currently Box */}
              <div className="relative rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-6 md:p-8 shadow-2xl hover:scale-[1.02] transition-all duration-300 flex-1">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-3xl"></div>
                <div className="relative z-10">
                  <h3 className="font-hagrid text-2xl font-bold text-white mb-4">Currently</h3>
                  <p className="text-white/90 text-sm md:text-base leading-relaxed">
                    🌏 Based in Bangkok & Bay Area<br/>
                    🌱 Designing for an Environmental Justice nonprofit<br/>
                    🧗‍♀️ Learning Thai & Climbing
                  </p>
                </div>
              </div>

              {/* Experience Box */}
              <div className="relative rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-6 md:p-8 shadow-2xl hover:scale-[1.02] transition-all duration-300 flex-1">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-teal-400/20 rounded-3xl"></div>
                <div className="relative z-10">
                  <h3 className="font-hagrid text-2xl font-bold text-white mb-4">Experience</h3>
                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div>
                      <div className="text-2xl md:text-3xl font-bold text-white">4+</div>
                      <div className="text-white/70 text-xs md:text-sm">Years</div>
                    </div>
                    <div>
                      <div className="text-2xl md:text-3xl font-bold text-white">22</div>
                      <div className="text-white/70 text-xs md:text-sm">Countries</div>
                    </div>
                    <div>
                      <div className="text-2xl md:text-3xl font-bold text-white">10+</div>
                      <div className="text-white/70 text-xs md:text-sm">Projects</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Fun Facts Box - full height */}
            <div className="relative rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-6 md:p-8 shadow-2xl hover:scale-[1.02] transition-all duration-300 w-full lg:flex-1">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 rounded-3xl"></div>
              <div className="relative z-10">
                <h3 className="font-hagrid text-2xl md:text-3xl font-bold text-white mb-6">Fun Facts</h3>
                <ul className="space-y-4 text-white/90 text-sm md:text-base">
                  <li className="flex items-start gap-2">
                    <span>📚</span>
                    <span>Collects library cards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>🎤</span>
                    <span>Loves public speaking (weirdo)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>⚡</span>
                    <span>Once backpacked for 30 days straight</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>🌍</span>
                    <span>Lived with 56 exchange students from 16 different countries</span>
                  </li>
                </ul>
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
      <div className="w-full bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50 dark:from-[#1A103F] dark:via-[#1A103F] dark:to-[#1A103F] py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto">
            
            {/* About Me - Large Box */}
            <div className="relative lg:col-span-4 lg:row-span-1 rounded-3xl border border-white/30 dark:border-white/10 bg-white/20 dark:bg-white/5 backdrop-blur-lg p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-200/20 via-white/10 to-pink-200/20 dark:from-purple-500/10 dark:via-transparent dark:to-pink-500/10 rounded-3xl"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-gray-800 dark:text-[#EAE8F3] dark:text-[#EAE8F3] mb-6 font-hagrid">about me</h2>
                <div className="space-y-4 text-gray-700 dark:text-[#EAE8F3]/90 dark:text-[#EAE8F3]/90 leading-relaxed">
                  <p className="text-lg">
                    I design experiences that create positive social impact. As a Fulbright fellow, I used participatory design to make sure Smart City tech solves real problems for Bangkok residents.
                  </p>
                  <p className="text-lg">
                    Nights and weekends I design for Basilica Bio, an environmental justice nonprofit building resilience and climate knowledge in Washington frontline communities.
                  </p>
                  <p className="text-lg">
                    If I'm not in Figma or planning my next international adventure, you can find me at the climbing gym or studying Thai 🇹🇭
                  </p>
                  <a href="mailto:lexirohrer@gmail.com" className="inline-block mt-4 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full hover:shadow-lg transition-all duration-300 font-semibold">
                    Get in touch
                  </a>
                </div>
              </div>
            </div>



            {/* Testimonials 3D Card Slider */}
            <div className="relative lg:col-span-4 lg:row-span-1 flex items-center justify-center py-8 px-4">
              <div className="relative w-full max-w-4xl h-[380px] flex items-center justify-center">
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
                        className="absolute rounded-3xl border border-white/30 dark:border-white/10 bg-white/20 dark:bg-white/5 backdrop-blur-lg p-8 shadow-2xl cursor-pointer w-[90%] md:w-[500px] min-h-[320px] max-h-[340px]"
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
                            <p className="text-gray-800 dark:text-[#EAE8F3] italic text-sm md:text-base leading-relaxed">
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
      </div>

      <Footer />
    </>
  );
};

export default IndexNew;


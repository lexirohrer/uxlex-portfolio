import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import CaseStudyNavigation from "@/components/sections/CaseStudyNavigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";

const FuseCaseStudy = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const storyboardImages = [
    "Fuse_storyboard1",
    "Fuse_Storyboard2",
    "fuse_storyboard3",
    "Fuse_storyboard4",
    "Fuse_Storyboard5",
    "Fuse_storyboard6",
  ];
  const [storyboardApi, setStoryboardApi] = useState<CarouselApi | null>(null);
  const [currentStoryboardIndex, setCurrentStoryboardIndex] = useState(0);

  useEffect(() => {
    if (!storyboardApi) {
      return;
    }

    const onSelect = () => {
      setCurrentStoryboardIndex(storyboardApi.selectedScrollSnap());
    };

    storyboardApi.on("select", onSelect);
    onSelect();

    return () => {
      storyboardApi.off("select", onSelect);
    };
  }, [storyboardApi]);

  return (
    <>
      <Header />
      
      {/* Hero Section - Full Width */}
      <section className="relative w-full py-16 max-sm:py-12 overflow-hidden">
        {/* Header - No background */}
        <div className="relative z-10 w-full py-8">
          <div className="max-w-[1440px] mx-auto px-[120px] max-md:px-10 max-sm:px-5">
            <Link 
              to="/portfolio" 
              className="inline-flex items-center text-gray-700 text-[#EAE8F3]/80 hover:text-gray-900 hover:text-[#EAE8F3] transition-colors duration-200 mb-4"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm font-medium">Back to projects</span>
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 text-[#EAE8F3] mb-2 max-md:text-3xl font-hagrid">
              Fuse Google Chrome Extension
            </h1>
            <p className="text-lg lg:text-xl text-gray-700 text-[#EAE8F3]/90 font-normal leading-relaxed">
              Building a second brain for researchers synthesizing information
            </p>
          </div>
        </div>
        
        <div className="max-w-[1440px] mx-auto px-[120px] max-md:px-10 max-sm:px-5">
            {/* Header with logo */}
            <div className="flex justify-between items-start mb-6 max-lg:flex-col max-lg:gap-6">
              <div className="flex-1">
                
              </div>
              
              {/* HCI Logo */}
              
            </div>

            {/* Main content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-8">
              {/* Left content */}
              <div className="space-y-4">
                {/* Context */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 text-[#EAE8F3] mb-2 font-hagrid">Context</h2>
                  <p className="text-gray-700 text-[#EAE8F3]/90 leading-relaxed">
                    Fuse is a Google Chrome extension that helps researchers collect and organize information. In summer 2019, I interned and designed for the Fuse team at Carnegie Mellon's Human Computer Interaction Institute.
                  </p>
                </div>

                {/* Role */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 text-[#EAE8F3] mb-2 font-hagrid">Role</h2>
                  <p className="text-gray-700 text-[#EAE8F3]/90 leading-relaxed">
                    UX research and design intern on a 7 person cross functional team
                  </p>
                </div>

                {/* Duration */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 text-[#EAE8F3] mb-2 font-hagrid">Duration</h2>
                  <p className="text-gray-700 text-[#EAE8F3]/90 leading-relaxed">
                    June - August 2019
                  </p>
                </div>

                                  {/* Tools */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 text-[#EAE8F3] mb-2 font-hagrid">Tools</h2>
                    <div className="flex flex-wrap gap-3">
                      <span className="bg-white bg-opacity-20 text-gray-800 text-[#EAE8F3] border border-gray-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm shadow-sm flex items-center gap-2">
                        <img src={`${import.meta.env.BASE_URL}Sketch_Logo.png`} alt="Sketch" className="w-5 h-5" />
                        Sketch
                      </span>
                      <span className="bg-white bg-opacity-20 text-gray-800 text-[#EAE8F3] border border-gray-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm shadow-sm flex items-center gap-2">
                        <img src={`${import.meta.env.BASE_URL}Illustrator logo.png`} alt="Illustrator" className="w-5 h-5" />
                        Illustrator
                      </span>
                      <span className="bg-white bg-opacity-20 text-gray-800 text-[#EAE8F3] border border-gray-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm shadow-sm flex items-center gap-2">
                        <img src={`${import.meta.env.BASE_URL}ID_logo.png`} alt="InDesign" className="w-5 h-5" />
                        InDesign
                      </span>
                      <span className="bg-white bg-opacity-20 text-gray-800 text-[#EAE8F3] border border-gray-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm shadow-sm flex items-center gap-2">
                        <img src={`${import.meta.env.BASE_URL}Photoshop-logo.png`} alt="Photoshop" className="w-5 h-5" />
                        Photoshop
                      </span>
                      <span className="bg-white bg-opacity-20 text-gray-800 text-[#EAE8F3] border border-gray-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm shadow-sm flex items-center gap-2">
                        <img src={`${import.meta.env.BASE_URL}Invision Logo.png`} alt="InVision Studio" className="w-5 h-5" />
                        InVision Studio
                      </span>
                    </div>
                  </div>
              </div>

              {/* Right content - Computer mockup */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full">
                  <img 
                    src={`${import.meta.env.BASE_URL}lovable-uploads/62572add-39f9-457c-b8bf-91e39cde4c63.png`} 
                    alt="Fuse Chrome Extension Interface with CMU HCII Logo"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent via-white/80 to-white via-[#1A103F]/60 to-[#1A103F]"></div>
        </section>
        
        <div className="max-w-[1440px] w-full mx-auto my-0 max-md:max-w-[991px] max-sm:max-w-screen-sm bg-transparent relative z-10">
          <main className="px-[120px] py-[60px] max-md:px-10 max-md:py-[40px] max-sm:px-5 relative z-10">

              {/* Background */}
              <section className="mb-24">
                <h2 className="text-[#EAE8F3] text-[32px] font-bold mb-8 font-hagrid">Background</h2>
                <p className="text-[#EAE8F3]/90 text-lg mb-6">
                  For summer 2019, I relocated to Pittsburgh to work in Carnegie Mellon's <strong>Human Computer Interaction Institute (HCII)</strong> as a <strong>UX research intern</strong>. Working closely with Dr. Aniket Kittur and his team of talented researchers, I assisted in developing <strong>Fuse: a chrome extension</strong> to <strong>help researchers collect and organize information.</strong>
                </p>
                
                <p className="text-[#EAE8F3]/90 text-lg mb-6">
                  This video shows an overview of our extension and the potential it holds for supporting sensemaking throughout various stages of the research process. To download the fuse extension, <strong>visit the Fuse website at getfuse.io.</strong>
                </p>
                
                <div className="w-full mb-8">
                  <div className="relative w-full bg-black rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                    <iframe 
                      src="https://www.youtube-nocookie.com/embed/hb7ubuVzYr0?start=19&enablejsapi=1&rel=0" 
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen={true}
                      className="absolute top-0 left-0 w-full h-full"
                      title="Welcome to Fuse overview video"
                      loading="lazy"
                    />
                  </div>
                </div>
                
                <p className="text-[#EAE8F3]/90 text-lg mb-6">
                  <strong>My contributions throughout the summer revolved around three key projects:</strong>
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-[#E6F0F7] bg-white/10 p-6 rounded-2xl">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#557592] bg-[#EAE8F3] text-white text-[#1A103F] rounded-full text-xl font-bold mb-4">1</div>
                    <h4 className="text-[#EAE8F3] text-2xl font-bold mb-3">Onboarding Design and Testing</h4>
                    <p className="text-[#EAE8F3] text-md">Start to finish design and testing of a new onboarding sequence to introduce users to Fuse.</p>
                  </div>
                  
                  <div className="bg-[#E6F0F7] bg-white/10 p-6 rounded-2xl">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#557592] bg-[#EAE8F3] text-white text-[#1A103F] rounded-full text-xl font-bold mb-4">2</div>
                    <h4 className="text-[#EAE8F3] text-2xl font-bold mb-3">Storyboarding for Prospective Feature Development</h4>
                    <p className="text-[#EAE8F3] text-md">Created storyboards detailing common challenges researchers face and how Fuse features address them.</p>
                  </div>

                  <div className="bg-[#E6F0F7] bg-white/10 p-6 rounded-2xl">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#557592] bg-[#EAE8F3] text-white text-[#1A103F] rounded-full text-xl font-bold mb-4">3</div>
                    <h4 className="text-[#EAE8F3] text-2xl font-bold mb-3">"Getting Information Out of Fuse" User Research</h4>
                    <p className="text-[#EAE8F3] text-md">Conducted interviews and synthesized insights about how users extract information from Fuse for external use.</p>
                  </div>
                </div>
              </section>

              {/* Onboarding Design and Testing */}
              <section className="mb-24">
                <div className="bg-white/20 border border-white/10 rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12 mb-8">
                  <div className="relative">
                    <img 
                      src={`${import.meta.env.BASE_URL}open-quotes-light.png`} 
                      alt="" 
                      className="absolute top-8 left-2 hidden block w-16 h-16 opacity-60"
                    />
                    <img 
                      src={`${import.meta.env.BASE_URL}open-quotes-dark.png`} 
                      alt="" 
                      className="absolute top-8 left-2 block hidden w-16 h-16 opacity-60"
                    />
                    <p className="text-[#EAE8F3] text-xl sm:text-2xl pl-28 max-sm:pl-8 pt-2 mb-2">Lexi was instrumental in driving forward several high-impact initiatives despite being here only for the summer. These included spearheading the onboarding experience for the system, generating storyboards and getting feedback on them, and developing process flows for getting information into and out of the system. <strong>I would have been happy with a summer researcher who did only one of those activities; Lexi drove all three</strong></p>
                    <p className="text-[#EAE8F3] text-lg sm:text-xl pl-28 max-sm:pl-8 pt-2">— Aniket Kittur, Cooper-Siegel Chair, Human-Computer Interaction Institute, Carnegie Mellon University</p>
                  </div>
                </div>
                
                <h2 className="text-[#EAE8F3] text-[32px] font-bold mb-8 font-hagrid">Onboarding Design and Testing</h2>
                <p className="text-[#EAE8F3]/90 text-lg mb-6">
                  My biggest project during the summer was <strong>the start to finish design and testing of a new onboarding sequence.</strong> In past versions of Fuse, there had been no onboarding procedure besides a pop up message encouraging new users to "try capturing and saving content", so this was a first effort at designing an onboarding sequence to introduce users to Fuse.
                </p>
                
                <p className="text-[#EAE8F3]/90 text-lg mb-6">
                  I began this task by building context and knowledge about different styles of onboarding. After conducting a competitive analysis of similar information gathering and synthesis tools (e.g. Notion, Trello, etc), <strong>I thought about situations in which users would be introduced to Fuse.</strong> Looking at the similarities and differences between our products and those I'd researched, I decided to design a Trello-style onboarding. Trello, a web-based list-making application, onboards users by dropping them into a pre-populated board and allowing them to explore the interface organically.
                </p>

                <p className="text-[#EAE8F3]/90 text-lg mb-6">
                  Becuase we only had one developer on the team, I would be responsible for both developing and implementing the designs I created. Following the style of the Trello board, I built the first version of the onboarding experience using the drag and drop interface built into Fuse, and set out to usability test it. Because we were a small team without funding to recruit and compensate, I had to get creative. <strong>I spent the next week working from the campus coffee shop, chatting with people in line and offering to buy their cup in exchange for some feedback.</strong> After 5 interviews, I began to see consistent usability issues and feedback patterns, and began to synthesize my findings
                </p>
                
                <div className="mb-8 text-center">
                  <a 
                    href="https://drive.google.com/file/d/1AIKdU7_SR0CnruXWZK2NUdGW2yBr_cXx/view" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-[#EAE8F3] text-[#1A103F] px-6 py-3 rounded-lg font-semibold hover:bg-[#EAE8F3]/90 transition-colors"
                  >
                    Onboarding insights full document
                  </a>
                </div>

                <p className="text-[#EAE8F3]/90 text-lg mb-6">
                  The three key pieces of feedback on the first version of the onboarding sequence were:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-[#E6F0F7] bg-white/10 p-6 rounded-2xl flex flex-col items-start text-left">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#557592] bg-[#EAE8F3] text-white text-[#1A103F] rounded-full text-xl font-bold mb-4">1</div>
                    <h4 className="text-[#EAE8F3] text-2xl font-bold mb-3">Too much clutter</h4>
                    <p className="text-[#EAE8F3]/90 text-md">
                      Users struggled with "too much clutter and too little information." The first draft of the onboarding sequence felt overwhelming, so the revisions focused on progressive disclosure and simplifying navigation
                    </p>
                  </div>
                  <div className="bg-[#E6F0F7] bg-white/10 p-6 rounded-2xl flex flex-col items-start text-left">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#557592] bg-[#EAE8F3] text-white text-[#1A103F] rounded-full text-xl font-bold mb-4">2</div>
                    <h4 className="text-[#EAE8F3] text-2xl font-bold mb-3">Order of information</h4>
                    <p className="text-[#EAE8F3]/90 text-md">
                      Users were confused by the order and structure of information presented; the hierarchy of info presented was nearly flat, and users didn't feel like they were starting with the basics before moving on to more niche features
                    </p>
                  </div>
                  <div className="bg-[#E6F0F7] bg-white/10 p-6 rounded-2xl flex flex-col items-start text-left">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#557592] bg-[#EAE8F3] text-white text-[#1A103F] rounded-full text-xl font-bold mb-4">3</div>
                    <h4 className="text-[#EAE8F3] text-2xl font-bold mb-3">Too much motion</h4>
                    <p className="text-[#EAE8F3]/90 text-md">
                      A video's worth a thousand pictures - but v1 of the onboarding used too may GIFs, distracting users from linear progressin towards a goal. The final design reintroduced GIFs judiciously to highlight key interactions, guiding attention without overwhelming the user.
                    </p>
                  </div>
                </div>
                
                <p className="text-[#EAE8F3]/90 text-lg mb-6">
                  The below video shows the final version of the onboarding project, and the way a user might scroll through it and interact with the information at first glance.
                </p>
                
                <div className="w-full mb-8">
                  <div className="relative w-full bg-black rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                    <iframe 
                      src="https://www.youtube-nocookie.com/embed/dMjL7yd-0fE?enablejsapi=1&rel=0" 
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen={true}
                      className="absolute top-0 left-0 w-full h-full"
                      title="Fuse Onboarding Demo"
                      loading="lazy"
                    />
                  </div>
                </div>
                
                <p className="text-[#EAE8F3]/90 text-lg mb-6">
                  Beyond the introductory onboarding project, <strong>several "example" projects typifying the key use cases we expected with Fuse</strong> were created to show users different ways to organize information:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="bg-[#E6F0F7] bg-white/10 p-6 rounded-2xl flex flex-col items-start text-left h-full">
                    <h4 className="text-[#EAE8F3] text-xl font-bold mb-2">Product Comparison</h4>
                    <p className="text-[#EAE8F3]/90 text-md">
                      Example project comparing different wireless headphone brands to help users evaluate features side by side.
                    </p>
                  </div>
                  <div className="bg-[#E6F0F7] bg-white/10 p-6 rounded-2xl flex flex-col items-start text-left h-full">
                    <h4 className="text-[#EAE8F3] text-xl font-bold mb-2">Trip Planning</h4>
                    <p className="text-[#EAE8F3]/90 text-md">
                      Example project showing a completed Fuse project for planning a family vacation to Hawaii.
                    </p>
                  </div>
                  <div className="bg-[#E6F0F7] bg-white/10 p-6 rounded-2xl flex flex-col items-start text-left h-full">
                    <h4 className="text-[#EAE8F3] text-xl font-bold mb-2">Academic Research</h4>
                    <p className="text-[#EAE8F3]/90 text-md">
                      Example project demonstrating how a researcher can organize and save sources for a literature review.
                    </p>
                  </div>
                </div>
                
                <p className="text-[#EAE8F3]/90 text-lg mb-6">
                  New users are dropped into an onboarding project, but their sidebar also contains these three example projects for exploration. The below video shows the way a user might scroll through the product comparison example project.
                </p>
                
                <div className="w-full">
                  <div className="relative w-full bg-black rounded-lg overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                    <iframe 
                      src="https://www.youtube-nocookie.com/embed/7zaX_PeiQII?enablejsapi=1&rel=0" 
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen={true}
                      className="absolute top-0 left-0 w-full h-full"
                      title="Fuse Example Project Demo"
                      loading="lazy"
                    />
                  </div>
                </div>
              </section>

              {/* Storyboards */}
              <section className="mb-24">
                <h2 className="text-[#EAE8F3] text-[32px] font-bold mb-8 font-hagrid">Storyboards</h2>
                <p className="text-[#EAE8F3]/90 text-lg mb-6">
                  My work with storyboards aimed to explore the link between existing or prospective features and the value they bring to our users. To examine these relationships, I created a series of storyboards detailing common challenges that befall researchers. These storyboards illustrate the way Fuse allows users to tackle challenges using existing features, or how they could do so with prospective features.
                </p>
                
                <p className="text-[#EAE8F3]/90 text-lg mb-8">
                  After creating these storyboards, I conducted interviews with users to determine whether the problems presented were truly valid and disruptive, and if the proposed solutions were feasible and amenable. After holding these in-person interviews and synthesizing early insights, I designed and ran an online survey to reach a wider audience and learn more in relation to those early insights. Testing with boards showcasing existing features allowed us to discover whether these features were realistically used in the predicted ways. Speaking with users about the value of prospective features allowed us to prioritize these features' development in accordance with real user needs.
                </p>
                
                <div className="w-full mb-8">
                  <Carousel className="w-full" setApi={setStoryboardApi}>
                    <CarouselContent>
                      {storyboardImages.map((name, index) => (
                        <CarouselItem key={name}>
                          <div className="flex items-center justify-center">
                            <img
                              src={`${import.meta.env.BASE_URL}${name}.png`}
                              alt={`Fuse Storyboard ${index + 1}`}
                              className="w-full h-auto rounded-lg shadow-lg"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="!-left-8 !top-1/2 !-translate-y-1/2 w-12 h-12 flex items-center justify-center bg-[#1A103F] border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-200" />
                    <CarouselNext className="!-right-8 !top-1/2 !-translate-y-1/2 w-12 h-12 flex items-center justify-center bg-[#1A103F] border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-200" />
                  </Carousel>
                  <div className="flex justify-center mt-6 space-x-3">
                    {storyboardImages.map((name, index) => (
                      <button
                        key={name}
                        onClick={() => storyboardApi?.scrollTo(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 matte-3d-button ${
                          currentStoryboardIndex === index
                            ? "bg-[#403930] bg-[#EAE8F3] scale-125"
                            : "bg-[#D1D5DB] bg-[#EAE8F3]/30"
                        }`}
                        aria-label={`Go to storyboard ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </section>

              {/* User Research */}
              <section className="mb-24">
                <h2 className="text-[#EAE8F3] text-[32px] font-bold mb-8 font-hagrid">User Research: Getting Information Out of Fuse</h2>
                <p className="text-[#EAE8F3]/90 text-lg mb-6">
                  The sentiment we had noted many times across many interviews, <strong>no one on our research team really understood what this notion meant.</strong> I began by breaking down the overarching research question into more specific questions:
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#557592] bg-[#EAE8F3] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-[#EAE8F3]/90 text-lg">What do users mean by "getting their information out of Fuse?"</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#557592] bg-[#EAE8F3] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-[#EAE8F3]/90 text-lg">What information do users want to get out of Fuse?</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#557592] bg-[#EAE8F3] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-[#EAE8F3]/90 text-lg">What do users want to do with this information once it's out?</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#557592] bg-[#EAE8F3] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-[#EAE8F3]/90 text-lg">How does getting their information out contribute to users' higher level goals?</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#557592] bg-[#EAE8F3] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-[#EAE8F3]/90 text-lg">Do users want to put this information back into Fuse?</p>
                  </div>
                </div>
                
                <p className="text-[#EAE8F3]/90 text-lg mb-6">
                  My interview protocol, <strong>besides a traditional question and answer format, included an observational process walkthrough.</strong> For the process walkthrough, I asked users to take a source they'd saved in Fuse and go through the motions of moving it to a different application. This portion of the interview allowed me to catch parts of the processes the users themselves were unaware of, and therefore couldn't describe.
                </p>
                
                <p className="text-[#EAE8F3]/90 text-lg mb-6">
                  Insights from this particular portion of the interview were so valuable that I decided to capture them in their own document, shown below. This insights document shows synthesized process flows for users methods of getting information out of Fuse. Most notably, these process flows allowed me to emphasize the tediousness of some processes our users were following in my presentation to the team.
                </p>
                
                <p className="text-[#EAE8F3]/90 text-lg mb-8">
                  I synthesized my findings into <strong>two key insights documents</strong> and made them <strong>maximally skimmable and distributed them across the team for future use.</strong>
                </p>
                <div className="w-full mb-8">
                  <img
                    src={`${import.meta.env.BASE_URL}Fuse_UXR_insights.png`}
                    alt="Getting Stuff Out of Fuse Research Insights"
                    className="w-full h-auto rounded-lg mb-6"
                  />
                  <p className="text-[#EAE8F3]/90 text-lg mb-4">
                    For the process walkthough, I asked users to take a source they'd saved in Fuse and go through the motions of moving it to a different application. This portion of the interview allowed me to catch parts of the processes the users themselves were unaware of, and therefore couldn't describe. Insights from this particular portion of the interview were so valuable that I decided to capture them in their own document, shown below.
                  </p>
                  <p className="text-[#EAE8F3]/90 text-lg mb-6">
                    This insights document shows synthesized process flows for users methods of getting information out of Fuse. Most notably, these process flows allowed me to emphasize the tediousness of some processes our users were following in my presentation to the team.
                  </p>
                  <img
                    src={`${import.meta.env.BASE_URL}Fuse_UXR_insights2.png`}
                    alt="Fuse User Research Insights - Process Flows"
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </section>

              {/* Key Takeaways */}
              <section className="mb-24">
                <h2 className="text-[#EAE8F3] text-[32px] font-bold mb-8 font-hagrid">Key Takeaways</h2>
                <p className="text-[#EAE8F3]/90 text-lg mb-8">
                  Although my work with the Fuse team was conducted in an academic research setting, it often felt more like a startup environment with so many opportunities to jump in and lend a hand on many different aspects of the product. In this setting, I learned several meaningful takeaways that I know will allow me to better navigate future work environments and contribute to those projects with competence.
                </p>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-[#EAE8F3] text-xl font-bold mb-4">Flexibility is key for working in cross functional teams.</h3>
                    <p className="text-[#EAE8F3]/90 text-lg">
                      In many of my collaborative projects for school, I worked with solely UX designers to create a final prototype that could theoretically be passed on to a development team. With Fuse, our designers and developers were exchanging information daily, and using feedback from each other to iteratively improve our work. With this structure, I grew to understand that the pure version of the User Centered Design process that my schooling has hammered into me isn't realistically implementable, but that incorporating the key elements of that process is still valuable.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-[#EAE8F3] text-xl font-bold mb-4">Good research design includes awareness of your own biases.</h3>
                    <p className="text-[#EAE8F3]/90 text-lg">
                      Although I've encountered the mantra "you are not the user" in the UX community time and time again, in this case those of us creating the tool actually were the users. Fuse began as a tool to help academic researchers — those who make up the team working on Fuse — and grew into a tool for more general purpose research. This situation made it tempting at times to rely on assumptions drawn from our own habits, and sidestep time consuming user research showing how others do things differently. Rather than relying on our conceptions of "I do it this way and I'm a researcher, so all our researcher users must do it in this way", I made a concerted effort advocate for user research that ensured our product was accessible for a wide range of user workflows.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-[#EAE8F3] text-xl font-bold mb-4">Understanding communication norms in the working environment vastly improves efficiency.</h3>
                    <p className="text-[#EAE8F3]/90 text-lg">
                      As someone who really likes feedback, adjusting to an industry-like position without grading, peer reviews, and teacher comments was initially difficult. Throughout the course of the internship, I learned to feel out a balance between soliciting valuable feedback while respecting my coworkers' and supervisor's time. In communicating shared goals and articulating prospective projects in multiple ways, I also learned firsthand the value of ensuring that everyone is on the same page before moving forward with a project. In particular, honing this strategy allowed me to solicit meaningful feedback throughout the life cycle of each project and feel more confident about my work's value.
                    </p>
                  </div>
                </div>
              </section>

          {/* Case Study Navigation */}
          <div className="max-w-[1440px] w-full mx-auto px-[120px] max-md:px-10 max-sm:px-5">
            <CaseStudyNavigation />
          </div>
          </main>
          <Footer />
        </div>
        </>
      );
    };

export default FuseCaseStudy;
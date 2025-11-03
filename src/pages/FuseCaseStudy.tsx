import React, { useEffect } from "react";
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

const FuseCaseStudy = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Work+Sans:wght@400;600;700&family=Plus+Jakarta+Sans:wght@400;700&family=Inter:wght@400;500;600;700&family=Holtwood+One+SC&display=swap"
        rel="stylesheet"
      />
      <Header />
      
      {/* Hero Section - Full Width */}
      <section className="relative bg-gradient-to-br from-rose-100 via-pink-50 to-rose-200 dark:bg-[#1A103F] w-full py-16 max-sm:py-12 overflow-hidden">
        {/* Grainy overlay - hidden in dark mode */}
        <div className="absolute inset-0 opacity-30 dark:hidden" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}></div>
        
        {/* Header - No background */}
        <div className="relative z-10 w-full py-8">
          <div className="max-w-[1440px] mx-auto px-[120px] max-md:px-10 max-sm:px-5">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-[#EAE8F3] mb-4 max-md:text-3xl font-hagrid">
              Fuse Google Chrome Extension
            </h1>
            <p className="text-lg lg:text-xl text-gray-700 dark:text-[#EAE8F3]/90 font-medium">
              Building a second brain for researchers synthesizing information
            </p>
          </div>
        </div>
        
        <div className="max-w-[1440px] mx-auto px-[120px] max-md:px-10 max-sm:px-5">
            {/* Header with logo */}
            <div className="flex justify-between items-start mb-12 max-lg:flex-col max-lg:gap-6">
              <div className="flex-1">
                
              </div>
              
              {/* HCI Logo */}
              
            </div>

            {/* Main content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
              {/* Left content */}
              <div className="space-y-4">
                {/* Context */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-[#EAE8F3] mb-2 font-hagrid">Context</h2>
                  <p className="text-gray-700 dark:text-[#EAE8F3]/90 leading-relaxed">
                    Fuse is a Google Chrome extension that helps researchers collect and organize information. In summer 2019, I interned and designed for the Fuse team at Carnegie Mellon's Human Computer Interaction Institute.
                  </p>
                </div>

                {/* Role */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-[#EAE8F3] mb-2 font-hagrid">Role</h2>
                  <p className="text-gray-700 dark:text-[#EAE8F3]/90 leading-relaxed">
                    UX research and design intern on a 7 person cross functional team
                  </p>
                </div>

                {/* Duration */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-[#EAE8F3] mb-2 font-hagrid">Duration</h2>
                  <p className="text-gray-700 dark:text-[#EAE8F3]/90 leading-relaxed">
                    June - August 2019
                  </p>
                </div>

                                  {/* Tools */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 dark:text-[#EAE8F3] mb-2 font-hagrid">Tools</h2>
                    <div className="flex flex-wrap gap-3">
                      <span className="bg-white bg-opacity-20 text-gray-800 dark:text-[#EAE8F3] border border-gray-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm shadow-sm flex items-center gap-2">
                        <img src={`${import.meta.env.BASE_URL}Sketch_Logo.png`} alt="Sketch" className="w-5 h-5" />
                        Sketch
                      </span>
                      <span className="bg-white bg-opacity-20 text-gray-800 dark:text-[#EAE8F3] border border-gray-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm shadow-sm flex items-center gap-2">
                        <img src={`${import.meta.env.BASE_URL}Illustrator logo.png`} alt="Illustrator" className="w-5 h-5" />
                        Illustrator
                      </span>
                      <span className="bg-white bg-opacity-20 text-gray-800 dark:text-[#EAE8F3] border border-gray-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm shadow-sm flex items-center gap-2">
                        <img src={`${import.meta.env.BASE_URL}ID_logo.png`} alt="InDesign" className="w-5 h-5" />
                        InDesign
                      </span>
                      <span className="bg-white bg-opacity-20 text-gray-800 dark:text-[#EAE8F3] border border-gray-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm shadow-sm flex items-center gap-2">
                        <img src={`${import.meta.env.BASE_URL}Photoshop-logo.png`} alt="Photoshop" className="w-5 h-5" />
                        Photoshop
                      </span>
                      <span className="bg-white bg-opacity-20 text-gray-800 dark:text-[#EAE8F3] border border-gray-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm shadow-sm flex items-center gap-2">
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
        </section>
        
        <div className="max-w-[1440px] w-full mx-auto my-0 max-md:max-w-[991px] max-sm:max-w-screen-sm bg-white dark:bg-[#1A103F]">
          <main className="px-[120px] py-[60px] max-md:px-10 max-md:py-[40px] max-sm:px-5">

              {/* Background */}
              <section className="mb-16">
                <h2 className="text-[#403930] dark:text-[#EAE8F3] text-[32px] font-bold mb-8 font-hagrid">Background</h2>
                <p className="text-[#403930] dark:text-[#EAE8F3]/90 text-lg mb-6">
                  For summer 2019, I relocated to Pittsburgh to work in Carnegie Mellon's <strong>Human Computer Interaction Institute (HCII)</strong> as a <strong>UX research intern</strong>. Working closely with Dr. Aniket Kittur and his team of talented researchers, I assisted in developing <strong>Fuse: a chrome extension</strong> to <strong>help researchers collect and organize information.</strong>
                </p>
                
                <p className="text-[#403930] dark:text-[#EAE8F3]/90 text-lg mb-6">
                  This video shows an overview of our extension and the potential it holds for supporting sensemaking throughout various stages of the research process. To download the fuse extension, <strong>visit the Fuse website at getfuse.io.</strong>
                </p>
                
                <div className="w-full aspect-video rounded-lg overflow-hidden mb-8">
                  <iframe 
                    src="https://www.youtube.com/embed/hb7ubuVzYr0?start=19" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full"
                    title="Welcome to Fuse overview video"
                  ></iframe>
                </div>
                
                <p className="text-[#403930] dark:text-[#EAE8F3]/90 text-lg mb-6">
                  <strong>My contributions throughout the summer revolved around three key projects:</strong>
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-[#E6F0F7] dark:bg-white/10 p-6 rounded-2xl">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#557592] dark:bg-[#EAE8F3] text-white rounded-full text-xl font-bold mb-4">1</div>
                    <h4 className="text-[#403930] dark:text-[#EAE8F3] text-2xl font-bold mb-3">Onboarding Design and Testing</h4>
                    <p className="text-[#403930] dark:text-[#EAE8F3] text-md">Start to finish design and testing of a new onboarding sequence to introduce users to Fuse.</p>
                  </div>
                  
                  <div className="bg-[#E6F0F7] dark:bg-white/10 p-6 rounded-2xl">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#557592] dark:bg-[#EAE8F3] text-white rounded-full text-xl font-bold mb-4">2</div>
                    <h4 className="text-[#403930] dark:text-[#EAE8F3] text-2xl font-bold mb-3">Storyboarding for Prospective Feature Development</h4>
                    <p className="text-[#403930] dark:text-[#EAE8F3] text-md">Created storyboards detailing common challenges researchers face and how Fuse features address them.</p>
                  </div>

                  <div className="bg-[#E6F0F7] dark:bg-white/10 p-6 rounded-2xl">
                    <div className="flex items-center justify-center w-12 h-12 bg-[#557592] dark:bg-[#EAE8F3] text-white rounded-full text-xl font-bold mb-4">3</div>
                    <h4 className="text-[#403930] dark:text-[#EAE8F3] text-2xl font-bold mb-3">"Getting Information Out of Fuse" User Research</h4>
                    <p className="text-[#403930] dark:text-[#EAE8F3] text-md">Conducted interviews and synthesized insights about how users extract information from Fuse for external use.</p>
                  </div>
                </div>
                
                <p className="text-[#403930] dark:text-[#EAE8F3]/90 text-lg">
                  I'll explore each of these projects in greater detail below.
                </p>
              </section>

              {/* Onboarding Design and Testing */}
              <section className="mb-16">
                <div className="bg-gray-100 dark:bg-white/5 rounded-2xl p-4 mb-8">
                  <div className="relative">
                    <span className="absolute -top-2 -left-2 text-6xl text-[#557592] dark:text-[#EAE8F3]/70 leading-none opacity-60" style={{ fontFamily: 'Holtwood One SC, serif' }}>"</span>
                    <p className="text-[#403930] dark:text-[#EAE8F3] text-2xl pl-6 pt-2 mb-2">Lexi was instrumental in driving forward several high-impact initiatives despite being here only for the summer. These included spearheading the onboarding experience for the system, generating storyboards and getting feedback on them, and developing process flows for getting information into and out of the system. I would have been happy with a contractor who did only one of those activities; Lexi drove all three</p>
                    <p className="text-[#403930] dark:text-[#EAE8F3] text-xl pl-6 pt-2">— Aniket Kittur, Cooper-Siegel Chair, Human-Computer Interaction Institute, Carnegie Mellon University</p>
                  </div>
                </div>
                
                <h2 className="text-[#403930] dark:text-[#EAE8F3] text-[32px] font-bold mb-8 font-hagrid">Onboarding Design and Testing</h2>
                <p className="text-[#403930] dark:text-[#EAE8F3]/90 text-lg mb-6">
                  My biggest project during my summer on the Fuse team was <strong>the start to finish design and testing of a new onboarding sequence.</strong> In past versions of Fuse, there had been no onboarding procedure besides a pop up message encouraging new users to "try capturing and saving content", so this was a first effort at designing an onboarding sequence to introduce users to Fuse.
                </p>
                
                <p className="text-[#403930] dark:text-[#EAE8F3]/90 text-lg mb-6">
                  To approach this task, I began by researching various styles of onboarding. After reading up on situations where different onboarding strategies were more or less successful, <strong>I thought about situations in which users would be introduced to Fuse.</strong> In comparing my research to the situations in which users would first encounter Fuse, I decided to design a Trello-style onboarding. Trello, a web-based list-making application, onboards users by dropping them into a pre-populated board and allowing them to explore the interface organically.
                </p>
                
                <div className="bg-[#E6F0F7] dark:bg-white/10 p-6 rounded-2xl mb-8 text-center">
                  <a 
                    href="https://drive.google.com/file/d/1AIKdU7_SR0CnruXWZK2NUdGW2yBr_cXx/view" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-[#557592] dark:bg-[#EAE8F3] text-white dark:text-[#1A103F] px-6 py-3 rounded-lg font-semibold hover:bg-[#4a6b8a] dark:hover:bg-[#EAE8F3]/90 transition-colors"
                  >
                    ONBOARDING INSIGHTS DOCUMENT
                  </a>
                </div>
                
                <p className="text-[#403930] dark:text-[#EAE8F3]/90 text-lg mb-6">
                  <strong>Overarching themes</strong> included balancing "too much clutter and too little information," user difficulties with organizing information, and the "strategic use of GIFs." The first draft was "information heavy" and "overwhelming the user," while the second draft (without GIFs) left users "at a loss for where to direct their attention." The final design "reimplemented GIFs, but did so more strategically to draw users' attention to certain parts of the screen, moving them through the onboarding project without explicitly using a tooltip sequence."
                </p>
                
                <p className="text-[#403930] dark:text-[#EAE8F3]/90 text-lg mb-6">
                  The below video shows the completed onboarding project, and the way a user might scroll through it and interact with the information at first glance.
                </p>
                
                <div className="w-full aspect-video rounded-lg overflow-hidden mb-8">
                  <iframe 
                    src="https://www.youtube.com/embed/dMjL7yd-0fE" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full"
                    title="Fuse Onboarding Demo"
                  ></iframe>
                </div>
                
                <p className="text-[#403930] dark:text-[#EAE8F3]/90 text-lg mb-6">
                  Beyond the introductory onboarding project, <strong>several "example" projects typifying the key use cases we expected with Fuse</strong> were created to show users different ways to organize information:
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#557592] dark:bg-[#EAE8F3] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-[#403930] dark:text-[#EAE8F3]/90 text-lg">A product comparison example project (comparing different wireless headphone brands)</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#557592] dark:bg-[#EAE8F3] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-[#403930] dark:text-[#EAE8F3]/90 text-lg">A trip planning example project (showing a completed Fuse project planning a family vacation to Hawaii)</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#557592] dark:bg-[#EAE8F3] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-[#403930] dark:text-[#EAE8F3]/90 text-lg">An academic research example project (showing how a researcher might organize and save sources for a literature review)</p>
                  </div>
                </div>
                
                <p className="text-[#403930] dark:text-[#EAE8F3]/90 text-lg mb-6">
                  New users are dropped into an onboarding project, but their sidebar also contains these three example projects for exploration. The below video shows the way a user might scroll through the product comparison example project.
                </p>
                
                <div className="w-full aspect-video rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.youtube.com/embed/7zaX_PeiQII" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full"
                    title="Fuse Example Project Demo"
                  ></iframe>
                </div>
              </section>

              {/* Storyboards */}
              <section className="mb-16">
                <h2 className="text-[#403930] dark:text-[#EAE8F3] text-[32px] font-bold mb-8 font-hagrid">Storyboards</h2>
                <p className="text-[#403930] dark:text-[#EAE8F3]/90 text-lg mb-6">
                  My work with storyboards aimed to explore the link between existing or prospective features and the value they bring to our users. To examine these relationships, I created a series of storyboards detailing common challenges that befall researchers. These storyboards illustrate the way Fuse allows users to tackle challenges using existing features, or how they could do so with prospective features.
                </p>
                
                <p className="text-[#403930] dark:text-[#EAE8F3]/90 text-lg mb-8">
                  After creating these storyboards, I conducted interviews with users to determine whether the problems presented were truly valid and disruptive, and if the proposed solutions were feasible and amenable. After holding these in-person interviews and synthesizing early insights, I designed and ran an online survey to reach a wider audience and learn more in relation to those early insights. Testing with boards showcasing existing features allowed us to discover whether these features were realistically used in the predicted ways. Speaking with users about the value of prospective features allowed us to prioritize these features' development in accordance with real user needs.
                </p>
                
                <div className="w-full mb-8">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                        <CarouselItem key={num}>
                          <div className="flex items-center justify-center">
                            <img
                              src={`${import.meta.env.BASE_URL}Fuse_Storyboards${num}.png`}
                              alt={`Fuse Storyboard ${num}`}
                              className="w-full h-auto rounded-lg"
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </div>
              </section>

              {/* User Research */}
              <section className="mb-16">
                <h2 className="text-[#403930] dark:text-[#EAE8F3] text-[32px] font-bold mb-8 font-hagrid">User Research: Getting Information Out of Fuse</h2>
                <p className="text-[#403930] dark:text-[#EAE8F3]/90 text-lg mb-6">
                  The sentiment we had noted many times across many interviews, <strong>no one on our research team really understood what this notion meant.</strong> I began by breaking down the overarching research question into more specific questions:
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#557592] dark:bg-[#EAE8F3] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-[#403930] dark:text-[#EAE8F3]/90 text-lg">What do users mean by "getting their information out of Fuse?"</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#557592] dark:bg-[#EAE8F3] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-[#403930] dark:text-[#EAE8F3]/90 text-lg">What information do users want to get out of Fuse?</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#557592] dark:bg-[#EAE8F3] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-[#403930] dark:text-[#EAE8F3]/90 text-lg">What do users want to do with this information once it's out?</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#557592] dark:bg-[#EAE8F3] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-[#403930] dark:text-[#EAE8F3]/90 text-lg">How does getting their information out contribute to users' higher level goals?</p>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-[#557592] dark:bg-[#EAE8F3] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-[#403930] dark:text-[#EAE8F3]/90 text-lg">Do users want to put this information back into Fuse?</p>
                  </div>
                </div>
                
                <p className="text-[#403930] dark:text-[#EAE8F3]/90 text-lg mb-6">
                  My interview protocol, <strong>besides a traditional question and answer format, included an observational process walkthrough.</strong> For the process walkthrough, I asked users to take a source they'd saved in Fuse and go through the motions of moving it to a different application. This portion of the interview allowed me to catch parts of the processes the users themselves were unaware of, and therefore couldn't describe.
                </p>
                
                <p className="text-[#403930] dark:text-[#EAE8F3]/90 text-lg mb-6">
                  Insights from this particular portion of the interview were so valuable that I decided to capture them in their own document, shown below. This insights document shows synthesized process flows for users methods of getting information out of Fuse. Most notably, these process flows allowed me to emphasize the tediousness of some processes our users were following in my presentation to the team.
                </p>
                
                <p className="text-[#403930] dark:text-[#EAE8F3]/90 text-lg mb-8">
                  I synthesized my findings into <strong>two key insights documents</strong> and made them <strong>maximally skimmable and distributed them across the team for future use.</strong>
                </p>
                
                <div className="bg-[#E6F0F7] dark:bg-white/10 p-8 rounded-2xl mb-8">
                  <h3 className="text-[#403930] dark:text-[#EAE8F3] text-2xl font-bold text-center mb-6">"Getting Stuff Out of Fuse" Research Insights</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-[#403930] dark:text-[#EAE8F3] text-lg font-semibold mb-4">Research Questions</h4>
                      <p className="text-[#557592] dark:text-[#EAE8F3]/70 text-sm">What do users mean by...</p>
                    </div>
                    <div>
                      <h4 className="text-[#403930] dark:text-[#EAE8F3] text-lg font-semibold mb-4">Insights</h4>
                      <p className="text-[#557592] dark:text-[#EAE8F3]/70 text-sm mb-4">Two Main Use Cases:</p>
                      <p className="text-[#557592] dark:text-[#EAE8F3]/70 text-sm mb-4">Taking notes, clips, and links they've saved, and:</p>
                      <div className="space-y-2">
                        <button className="bg-[#557592] dark:bg-[#EAE8F3] text-white dark:text-[#1A103F] px-4 py-2 rounded text-sm">Use Case 1</button>
                        <button className="bg-[#557592] dark:bg-[#EAE8F3] text-white dark:text-[#1A103F] px-4 py-2 rounded text-sm">Use Case 2</button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-100 dark:bg-white/5 p-8 rounded-2xl text-center">
                  <p className="text-[#557592] dark:text-[#EAE8F3]/70 text-lg italic">📍 [Placeholder for detailed process flow diagrams showing user methods for getting information out of Fuse]</p>
                </div>
              </section>

              {/* Key Takeaways */}
              <section className="mb-16">
                <h2 className="text-[#403930] dark:text-[#EAE8F3] text-[32px] font-bold mb-8 font-hagrid">Key Takeaways from the Summer</h2>
                <p className="text-[#403930] dark:text-[#EAE8F3]/90 text-lg mb-8">
                  Although my work with the Fuse team was conducted in an academic research setting, it often felt more like a startup environment with so many opportunities to jump in and lend a hand on many different aspects of the product. In this setting, I learned several meaningful takeaways that I know will allow me to better navigate future work environments and contribute to those projects with competence.
                </p>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-[#403930] dark:text-[#EAE8F3] text-xl font-bold mb-4">Flexibility is key for working in cross functional teams.</h3>
                    <p className="text-[#403930] dark:text-[#EAE8F3]/90 text-lg">
                      In many of my collaborative projects for school, I worked with solely UX designers to create a final prototype that could theoretically be passed on to a development team. With Fuse, our designers and developers were exchanging information daily, and using feedback from each other to iteratively improve our work. With this structure, I grew to understand that the pure version of the User Centered Design process that my schooling has hammered into me isn't realistically implementable, but that incorporating the key elements of that process is still valuable.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-[#403930] dark:text-[#EAE8F3] text-xl font-bold mb-4">Good research design includes awareness of your own biases.</h3>
                    <p className="text-[#403930] dark:text-[#EAE8F3]/90 text-lg">
                      Although I've encountered the mantra "you are not the user" in the UX community time and time again, in this case those of us creating the tool actually were the users. Fuse began as a tool to help academic researchers — those who make up the team working on Fuse — and grew into a tool for more general purpose research. This situation made it tempting at times to rely on assumptions drawn from our own habits, and sidestep time consuming user research showing how others do things differently. Rather than relying on our conceptions of "I do it this way and I'm a researcher, so all our researcher users must do it in this way", I made a concerted effort advocate for user research that ensured our product was accessible for a wide range of user workflows.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-[#403930] dark:text-[#EAE8F3] text-xl font-bold mb-4">Understanding communication norms in the working environment vastly improves efficiency.</h3>
                    <p className="text-[#403930] dark:text-[#EAE8F3]/90 text-lg">
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
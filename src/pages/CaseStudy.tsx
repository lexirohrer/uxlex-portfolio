import React, { useRef, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";

const CaseStudy = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(console.error);
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Work+Sans:wght@400;600;700&family=Plus+Jakarta+Sans:wght@400;700&family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <Header />
      
      {/* Hero Section - Full Width */}
      <section className="relative bg-gradient-to-br from-blue-100 via-indigo-50 to-blue-200 w-full py-16 max-sm:py-12 overflow-hidden">
        {/* Grainy overlay */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}></div>
        
        {/* Header - No background */}
        <div className="relative z-10 w-full py-8">
          <div className="max-w-[1440px] mx-auto px-[120px] max-md:px-10 max-sm:px-5">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 max-md:text-3xl font-hagrid">
              QuickBooks Onboarding
            </h1>
            <p className="text-lg lg:text-xl text-gray-700 font-medium leading-relaxed">
              Tailoring accounting software onboarding to different mindsets
            </p>
          </div>
        </div>
        
        <div className="max-w-[1440px] mx-auto px-[120px] max-md:px-10 max-sm:px-5">
            {/* Header with logo */}
            <div className="flex justify-between items-start mb-12 max-lg:flex-col max-lg:gap-6">
              <div className="flex-1">
                
              </div>
              
              {/* QuickBooks Logo */}
              
            </div>

            {/* Main content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
              {/* Left content */}
              <div className="space-y-4">
                {/* Context */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2 font-hagrid">Context</h2>
                  <p className="text-gray-700 leading-relaxed">
                  Quickbooks is the gold standard for small businesses looking to manage their finances. After two years on the onboarding team, I identified major problems in the space, proposed this redesign, and led the project to the finish line, yielding record breaking metrics outcomes.
                  </p>
                </div>

                 {/* Impact */}
                 <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2 font-hagrid">Impact</h2>
                  <ul className="text-gray-700 leading-relaxed">
                    <li>
                    <b>37% increase in users completing multiple onboarding tasks</b> — the highest bump to this critical metric in 3+ years
                    </li>
                    <li>
                    AI-driven flows reduced manual data entry, <b> shortening average time spent onboarding by 40% </b>
                    </li>
                    <li>
                    40+ usability tests on live production flows unearthed critical usability issues that stopped users from setting up QuickBooks successfully
                    </li>
                  </ul>
                </div>

                {/* Role */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2 font-hagrid">My role</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Design lead & research co-facilitator
                  </p>
                </div>

                {/* Duration */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2 font-hagrid">Duration</h2>
                  <p className="text-gray-700 leading-relaxed">
                    November 2021 - January 2022
                  </p>
                </div>

                {/* Tools */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2 font-hagrid">Tools</h2>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-white bg-opacity-20 text-gray-800 border border-gray-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm shadow-sm flex items-center gap-2">
                    <img src={`${import.meta.env.BASE_URL}Figma Logo Thumbnail.png`} alt="Figma-logo" className="w-5 h-5" />
                      Figma
                    </span>
                    <span className="bg-white bg-opacity-20 text-gray-800 border border-gray-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm shadow-sm flex items-center gap-2">
                    <img src={`${import.meta.env.BASE_URL}Figma Logo Thumbnail.png`} alt="Figma-logo" className="w-5 h-5" />
                      Figjam
                    </span>
                    <span className="bg-white bg-opacity-20 text-gray-800 border border-gray-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm shadow-sm flex items-center gap-2">
                    <img src={`${import.meta.env.BASE_URL}UT-logo.png`} alt="UT-logo" className="w-5 h-5" />
                      Usertesting.com
                    </span>
                    <span className="bg-white bg-opacity-20 text-gray-800 border border-gray-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm shadow-sm flex items-center gap-2">
                      Google Suite
                    </span>
                  </div>
                </div>
              </div>

              {/* Right content - QuickBooks cover */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full">
                  <img 
                    src={`${import.meta.env.BASE_URL}QB cover.png`} 
                    alt="QuickBooks Interface Mockup"
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <div className="max-w-[1440px] w-full mx-auto my-0 max-md:max-w-[991px] max-sm:max-w-screen-sm">
          <main className="px-[120px] py-[60px] max-md:px-10 max-md:py-[40px] max-sm:px-5">
          {/* Overview */}
          <section className="mb-16">
            <h2 className="text-[#403930] text-[32px] font-bold mb-8 font-hagrid">Overview</h2>
            <div className="space-y-4">
            <p className="text-[#403930] text-lg mt-6">
              Over the years, onboarding had become a silver bullet for teams who needed a guarunteed boost to their metrics - but with each new step added, the more complex and tiresome the end to end flow became. The end result was an onboarding flow that took <b> 17 minutes to complete on average</b>, slowing users down at the exact moment they were most excited to explore the product.
            </p>
            <p className="text-[#403930] text-lg mt-6">
              Something had to change - but it was going to be <b> a matter of politics and design</b>. No team wanted their part of onboarding removed, as their metrics would suffer the consequences.
            </p>
            <p className="text-[#403930] text-lg mt-6">
            As the lead designer for this project, <b>my goals</b> to tackle this complicated space included:
            </p>
            <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">
                  Align multiple internal teams around a shared vision for onboarding.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">
                  Reduce friction in the onboarding journey and help users reach value faster.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">
                  Identify the biggest usability issues preventing successful setup.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">
                  Explore responsible AI integrations to save users time and effort.
                </p>
              </div>
            </div>
          </section>

          {/* Project Process */}
          <section className="mb-16">
            <h2 className="text-[#403930] text-[32px] font-bold mb-8 font-hagrid">Project Process</h2>
            
            {/* Building alignment */}
            <div className="mb-12">
              <h3 className="text-[#403930] text-2xl font-bold mb-6">Building alignment</h3>
              <p className="text-[#403930] text-lg mb-6">
                I knew from past projects that simply proposing a shorter flow wouldn't be enough — removing steps from onboarding was a debate that often escalated to the VP-level, and rarely stuck. Instead, I asked each team to send representatives to a design sprint, to reorient them around shared goals, and get them invested in building a customer focused solution. This hybrid design sprint included:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="bg-[#E6F0F7] p-6 rounded-2xl">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#557592] text-white rounded-full text-xl font-bold mb-4">1</div>
                  <h4 className="text-[#403930] text-2xl font-bold mb-3">Listening</h4>
                  <p className="text-[#403930] text-md">Each team shared their goals and why their step had been added.</p>
                </div>

                <div className="bg-[#E6F0F7] p-6 rounded-2xl">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#557592] text-white rounded-full text-xl font-bold mb-4">2</div>
                  <h4 className="text-[#403930] text-2xl font-bold mb-3">Showing evidence</h4>
                  <p className="text-[#403930] text-md">I shared data on the 18-minute average onboarding time. Then, <b> we watched recordings of people cursing, huffing, and struggling through the flow.</b></p>
                </div>

                <div className="bg-[#E6F0F7] p-6 rounded-2xl">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#557592] text-white rounded-full text-xl font-bold mb-4">3</div>
                  <h4 className="text-[#403930] text-2xl font-bold mb-3">Finding Shared Goals</h4>
                  <p className="text-[#403930] text-md">Together, we agreed that the primary goal of onboarding should be to get users to value quickly, not to maximize every team's KPIs.</p>
                </div>

                <div className="bg-[#E6F0F7] p-6 rounded-2xl">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#557592] text-white rounded-full text-xl font-bold mb-4">4</div>
                  <h4 className="text-[#403930] text-2xl font-bold mb-3">Co-designing</h4>
                  <p className="text-[#403930] text-md">Now aligned on shared principles, each team sketched the leanest possible flow <i>they</i> could think of. We aligned these visions, and deferred other setup tasks to contextual moments later in the product.</p>
                </div>
              </div>
            </div>

            {/* Designing with AI */}
            <div className="mb-12">
              <h3 className="text-[#403930] text-2xl font-bold mb-6">Knowing when AI adds values</h3>
              <p className="text-[#403930] text-lg mb-6">
                Even after reducing the number of steps that were prioritized upfront, a large part of onboarding was just data entry. And we all know who's great at mindless repetitive tasks...<b>this is an area where AI could add massive value to the user experience.</b> 
              </p>
              <p className="text-[#403930] text-lg mb-6">
              Past customer surveys showed that 75% of QuickBooks customers had websites, which already contained much of the information needed to create their account — things like business name, email, industry, and branding. Alongside my engineers, we designed an AI import flow that allowed users to scrape data from their public website, rather than importing it manually. <b> With one click, QuickBooks generated a business profile pre-filled with all the user's information we had pulled, which users could then confirm or edit.</b>
              </p>
                <div className="bg-gray-50 rounded-2xl p-4 mb-6">
                 <p>PUT qb-ai-import-flow HERE</p>
                </div>
              <p className="text-[#403930] text-lg mb-6">
                When tested in production, this step alone saved users significant time in the onboarding process. It also created a more personalized experience later on: if a user chose to learn how to create an invoice, QuickBooks could surprise them with a sample invoice already set up using the colors and branding from their website.
              </p>
               <div className="bg-gray-50 rounded-2xl p-4 mb-6">
                 <video 
                   ref={videoRef}
                   className="w-full h-auto rounded-lg"
                   controls 
                   muted 
                   loop
                   playsInline
                   preload="metadata"
                 >
                   <source src={`${import.meta.env.BASE_URL}qb-ai-importdata.mp4`} type="video/mp4"/>
                   Your browser does not support the video tag.
                 </video>
               </div>
              <p className="text-[#403930] text-lg mb-6">
                This flow not only streamlined setup but also built early trust and delight by showing users how their data could be put to work for them right away. Plus, it gave us early insight into their brand, so that we could suprise them later by AI-generating an invoice with their color pallete and confirmed data
              </p>
            
            </div>

            {/* Testing and iteration */}
            <div className="mb-12">
              <h3 className="text-[#403930] text-2xl font-bold mb-6">Testing and iteration</h3>
              <p className="text-[#403930] text-lg mb-6">
                With a proposed flow in place, I worked closely with content designers, PMs, and engineers to create prototypes and bring them into production for testing. This looked like:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#403930] text-lg">
                    Running 40+ usability tests across end-to-end flows to gain confidence in our design direction
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#403930] text-lg">
                    Identifying critical blockers that prevented setup success.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#403930] text-lg">
                    Iterating on both interaction design and copy to ensure clarity.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-100 p-8 rounded-2xl text-center">
                <p className="text-[#557592] text-lg italic">📍 [Placeholder for usability test quotes and screenshots of friction points.]</p>
              </div>
            </div>

          </section>

          {/* Final Design */}
          <section className="mb-16">
            <h2 className="text-[#403930] text-[32px] font-bold mb-8 font-hagrid">Final Design</h2>
            <p className="text-[#403930] text-lg mb-6">
              The new flow emphasized speed while ensuring users didn't lose the ability to complete important setup later.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">
                  <strong>Streamlined onboarding:</strong> fewer upfront steps, clearer progression, and faster access to the homepage.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">
                  <strong>AI-supported imports:</strong> reduced manual work and increased confidence in setup.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">
                  <strong>Flexible hand-offs:</strong> less critical tasks were moved into contextual "right time, right place" experiences.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-100 p-8 rounded-2xl text-center">
              <p className="text-[#557592] text-lg italic">📍 [Placeholder for final UI screenshots of streamlined flow + AI import step.]</p>
            </div>
          </section>

          {/* Reflection */}
          <section className="mb-16">
            <h2 className="text-[#403930] text-[32px] font-bold mb-8 font-hagrid">Reflection</h2>
            <p className="text-[#403930] text-lg mb-6">
              This project reinforced that designing for impact means balancing user needs with organizational realities. Onboarding wasn't just an interaction design or user journey flow problem — it was a stakeholder alignment challenge. By creating space for teams to see the bigger picture, we were able to shift from siloed decision-making toward a shared vision centered on user success.
            </p>
            
            <p className="text-[#403930] text-lg mb-8">
              For me, this was a reminder that good design is as much about facilitation and diplomacy as it is about pixels on a screen. The same approach — aligning different points of view, grounding decisions in user data, and designing responsibly with AI — is what I continue to bring to complex projects that work on systemic issues.
            </p>
            
            <div className="bg-gray-100 p-8 rounded-2xl text-center">
              <p className="text-[#557592] text-lg italic">📍 [Placeholder for "metrics at a glance" graphic: +37% completion, 40+ usability tests, 18 → reduced minutes.]</p>
            </div>
          </section>
          </main>
          <Footer />
        </div>
    </>
  );
};

export default CaseStudy;
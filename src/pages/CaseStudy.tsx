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
                   <ul className="list-disc list-outside text-gray-700 leading-relaxed space-y-3 ml-6 pl-2">
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
                  <p className="text-[#403930] text-md ">Now aligned on shared principles, each team sketched the leanest possible flow <i>they</i> could think of. We aligned these visions, and deferred other setup tasks to contextual moments later in the product.</p>
                </div>
              </div>
              <p className="text-[#403930] text-md mb-6"> After many back and forth sessions during the week long design sprint, then making my case further up the chain with managers and VPs, the streamlined onboarding flow was born! The final version of this flow cut the number of questions we asked users in half, and added additional access points to ask setup questions in the right time and place, throughout the product - rather than grilling the user up front: </p>
              <img src={`${import.meta.env.BASE_URL}qb-length-comp.png`} 
                    alt="chart comparing of the length of the old flow to the length of the new flow"
                    className="w-full h-auto rounded-2xl"
              />
              

            </div>

            {/* Designing with AI */}
            <div className="mb-12">
              <h3 className="text-[#403930] text-2xl font-bold mb-6">Knowing when AI adds value</h3>
              <p className="text-[#403930] text-lg mb-6">
                Even after reducing the number of steps that were prioritized upfront, a large part of onboarding was just data entry. And we all know who's great at mindless repetitive tasks...<b>this is an area where AI could add massive value to the user experience.</b> 
              </p>
              <p className="text-[#403930] text-lg mb-6">
              Past customer surveys showed that 75% of QuickBooks customers had websites, which already contained much of the information needed to create their account — things like business name, email, industry, and branding. Alongside my engineers, we designed an AI import flow that allowed users to scrape data from their public website, rather than importing it manually. <b> With one click, QuickBooks generated a business profile pre-filled with all the user's information we had pulled, which users could then confirm or edit.</b>
              </p>
                </div>
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
              When tested in production, this step alone contributed most significantly to shortening the time in flow by 40% compared to control. This step also gave us the opportunity to create a moment of delight later on - if a user chose to create an invoice, <b> QuickBooks would magically generate a personalized invoice</b>, with the logo and colors already pulled in from their website.
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
                   <source src={`${import.meta.env.BASE_URL}qb-invoice.mp4`} type="video/mp4"/>
                   Your browser does not support the video tag.
                 </video>
               </div>

            
            {/* Testing */}
            <div className="mb-12">
              <h3 className="text-[#403930] text-2xl font-bold mb-6">Testing & iteration</h3>
              <p className="text-[#403930] text-lg mb-6">
                Having tackled the major flow overhauls, I worked closely with 2 content designers, one PMs, and my team of 8 engineers to create prototypes and bring them into production for testing. To prove the value of this design overhaul, I spearheaded:
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
              
            <p className="text-[#403930] text-lg mb-6">Because of the scale of usability testing I wanted to pursue, I chose to run the tests remotely through UsertTesting.com. To test our current control flow, I set up 20 trial production accounts, then configured the UserTesting.com script to email users their login credentials, and a link to an actual production account - so we were getting the most realistic usability feedback possible on our current state. The users who tested the new streamlined experience used a hyperrealistic prototype with flow branching, micro-interactions, and personalized variables, such as their business name repeated throughout.</p>
            <p className="text-[#403930] text-lg mb-6">The results of the test couldn't have been more clearer: users wanted short, sweet, to-the-point setup, and our new flow delivered:</p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              
              {/* Control Flow Quote */}
               <div className="bg-gray-100 rounded-2xl p-4">
                 <div className="mb-4">
                   <span className="bg-white bg-opacity-50 text-gray-800 border border-gray-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-lg shadow-sm">
                     Control Flow
                   </span>
                 </div>
                 <div className="relative">
                   <span className="absolute -top-2 -left-2 text-6xl text-[#557592] font-serif leading-none opacity-60">"</span>
                   <p className="text-[#403930] text-2xl pl-6 pt-2 mb-2">It feels like I've been here forever. Jeez, if I wasn't getting paid for this, <b>I would've given up a long time ago</b>"</p>
                  <p className="text-[#403930] text-xl pl-6 pt-2">– User 16, an independent business consultant in Canada </p>
                 </div>
               </div>

               {/* Streamlined Flow Quote */}
               <div className="bg-gray-50 rounded-2xl p-4">
                 <div className="mb-4">
                   <span className="bg-white bg-opacity-50 text-gray-800 border border-gray-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-lg shadow-sm">
                     Streamlined Flow
                   </span>
                 </div>
                 <div className="relative">
                   <span className="absolute -top-2 -left-2 text-6xl text-[#557592] font-serif leading-none opacity-60">"</span>
                   <p className="text-[#403930] text-2xl pl-6 pt-2 mb-2">Overall <b> setting up QuickBooks was easy, it was terrific.</b> The best thing that you did was just to go ahead and tell me how many hours I saved. Fabulous… This is a great setup—A+."</p>
                  <p className="text-[#403930] text-xl pl-6 pt-2">- User 23, runs a coffee shop in Seattle </p>
                 </div>
               </div>
             </div>

             <p className="text-[#403930] text-lg mb-6"> We measured success on these usability tests three ways: average time to complete, sentiment analysis of quotes, and the ansswers to two key questions</p>
            <ol className="list-decimal list-outside text-[#403930] text-lg space-y-3 ml-6 pl-2">
              <li>"On a scale of 1 to 7, how would you rate <b>your confidence that you have successfully set up QuickBooks?</b> (1 = not at all confident, and 7 = extremely confident)"</li>
              <li>"On a scale of 1 to 7, how would you rate the <b>difficulty of steps in this flow?</b> (with 1 being extremely difficult and 7 being extremely easy)"</li>
            </ol>
             </div>
             <p className="text-[#403930] text-lg mb-6"> The results of the test spoke for themselves - usability of the new flow was undeniably better than the control, and we had strong confidence that we were solving the right problems with the new design direction.</p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <img src={`${import.meta.env.BASE_URL}qb-control-usability.png`} alt="usability scorecard for the control flow,with a 5.3 confidence score and a 5.2 ease of use score, both in the red" />
               <img src={`${import.meta.env.BASE_URL}qb-streamlined-usability.png`} alt="usability scorecard the Streamlined flow, boasting a 6.0 confidence score and a 6.4 ease of use score, both in the green" />
             </div>

              <p className="text-[#403930] text-lg mb-6"> However, despite success on the major usability issues of length, ease of use, and confidence, there was still room to grow. To put the finishing touches on this flow, I examined the usability issues that stopped users from giving the new designs a perfect 7. These included:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-red-50 p-6 rounded-2xl">
                  <div className="mb-4">
                    <span className="bg-red-100 text-red-800 border border-red-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-lg shadow-sm flex items-center gap-2 w-fit">
                      <span className="text-lg">👎</span>
                      Pain Point
                    </span>
                  </div>
                  <p className="text-[#403930] text-lg">Inconsistent growth then stagnation in the progress bar at the top of the flow</p>
                </div>
                
                <div className="bg-red-50 p-6 rounded-2xl">
                  <div className="mb-4">
                    <span className="bg-red-100 text-red-800 border border-red-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-lg shadow-sm flex items-center gap-2 w-fit">
                      <span className="text-lg">👎</span>
                      Pain Point
                    </span>
                  </div>
                  <p className="text-[#403930] text-lg">Users didn't understand why we needed all this information up front</p>
                </div>
                
                <div className="bg-red-50 p-6 rounded-2xl">
                  <div className="mb-4">
                    <span className="bg-red-100 text-red-800 border border-red-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-lg shadow-sm flex items-center gap-2 w-fit">
                      <span className="text-lg">👎</span>
                      Pain Point
                    </span>
                  </div>
                  <p className="text-[#403930] text-lg">Generalized uncertainty about whether the product was right for them</p>
                </div>
              </div>
           </section>


          {/* Final touches */}
          <div className="mb-12">
            <h3 className="text-[#403930] text-2xl font-bold mb-6">Final touches 🪄</h3>
            <p className="text-[#403930] text-lg mb-6"> To shoot for that perfect usability score in the real experiment, I took each key pain point above, and ideated, prototyped, and brought solutions to design critique before settling on the most comprehensive ones: </p>
              
              {/* Progress bar pain point */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-red-50 p-6 rounded-2xl">
                  <div className="mb-4">
                    <span className="bg-red-100 text-red-800 border border-red-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-lg shadow-sm flex items-center gap-2 w-fit">
                      <span className="text-lg">👎</span>
                      Pain Point 1
                    </span>
                  </div>
                  <p className="text-[#403930] text-lg">Inconsistent growth then stagnation in the progress bar at the top of the flow</p>
                </div>
                <div className="bg-green-50 p-6 rounded-2xl">
                  <div className="mb-4">
                    <span className="bg-green-100 text-green-800 border border-green-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-lg shadow-sm flex items-center gap-2 w-fit">
                      <span className="text-lg">👍</span>
                      Solution 1
                    </span>
                  </div>
                  <p className="text-[#403930] text-lg">Work with developers to understand why the progress bar doesn't grow predictably, and design around engineering constraints</p>
                </div>
              </div>
              
              <p className="text-[#403930] text-lg mb-6"> Essentially, when the user would complete some steps in the flow, the progress bar at the top would grow a large amount, and when they took other steps, it wouldn't grow at all. This wasn't a bug, but rather a side effect of having a large, branching flow. If the user chose to complete an optional setup job, like learning about invoice creation, the progress calculation would reset the denominator to include the additional 5 screens involved in invoice creation. Because of this, when a user chose to do extra setup, we rewarded them with... a more confusing progress indicator. Not exactly the setup behavior we were trying to encourage  </p>
              <p className="text-[#403930] text-lg mb-6"> To fix this issue, we broke the progress bar into two sections: one requied, static section on basic information needed, and a second section for optional setup tasks. This was not only more descriptive, but also allowed the progress bar caluclations to be done <i> after</i> the user had selected or skipped the optional step, so that it could grow predictably and consistently. </p>
              <img src={`${import.meta.env.BASE_URL}qb-progress-bars.png`} alt="screenshot of the old and new progress bar with a static section for basic information and a dynamic section for optional setup tasks" className="w-full h-auto rounded-2xl mb-20"/>
              
            {/* Tooltips pain point */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-red-50 p-6 rounded-2xl">
                  <div className="mb-4">
                    <span className="bg-red-100 text-red-800 border border-red-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-lg shadow-sm flex items-center gap-2 w-fit">
                      <span className="text-lg">👎</span>
                      Pain Point 2
                    </span>
                  </div>
                  <p className="text-[#403930] text-lg">Users didn't understand why we needed all this information up front</p>
                </div>
                <div className="bg-green-50 p-6 rounded-2xl">
                  <div className="mb-4">
                    <span className="bg-green-100 text-green-800 border border-green-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-lg shadow-sm flex items-center gap-2 w-fit">
                      <span className="text-lg">👍</span>
                      Solution 2
                    </span>
                  </div>
                  <p className="text-[#403930] text-lg">Add tooltips on fields that frequently elicited questions during user testing. Build these on the basis of progressive disclosure, so that users who aren't confused can continue without being slowed down.</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-2xl p-4 mb-20">
                <video 
                  className="w-full h-auto rounded-lg"
                  controls 
                  muted 
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src={`${import.meta.env.BASE_URL}qb-streamline-Tooltips.mp4`} type="video/mp4"/>
                  Your browser does not support the video tag.
                </video>
              </div>
              
              {/* Generalized uncertainty pain point */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-red-50 p-6 rounded-2xl">
                  <div className="mb-4">
                    <span className="bg-red-100 text-red-800 border border-red-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-lg shadow-sm flex items-center gap-2 w-fit">
                      <span className="text-lg">👎</span>
                      Pain Point 3
                    </span>
                  </div>
                  <p className="text-[#403930] text-lg">Generalized uncertainty about whether the product was right for them</p>
                </div>
                <div className="bg-green-50 p-6 rounded-2xl">
                  <div className="mb-4">
                    <span className="bg-green-100 text-green-800 border border-green-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-lg shadow-sm flex items-center gap-2 w-fit">
                      <span className="text-lg">👍</span>
                      Solution 3
                    </span>
                  </div>
                  <p className="text-[#403930] text-lg"> Worked with 2 motion designers over the span of a month to create an updated welcome screen, and loading screens that give an overview of the many things QuickBooks can do</p>
                </div>
              </div>
                  <div className="bg-gray-50 rounded-2xl p-4 mb-6">
                    <video 
                      className="w-full h-auto rounded-lg"
                      controls 
                      muted 
                      loop
                      playsInline
                      preload="metadata"
                    >
                      <source src={`${import.meta.env.BASE_URL}qb-welcome-animation.mp4`} type="video/mp4"/>
                      Your browser does not support the video tag.
                    </video>
                </div>
                <div className="bg-gray-50 rounded-2xl p-4 mb-6">
                    <video 
                      className="w-full h-auto rounded-lg"
                      controls 
                      muted 
                      loop
                      playsInline
                      preload="metadata"
                    >
                      <source src={`${import.meta.env.BASE_URL}qb-load-tips.mp4`} type="video/mp4"/>
                      Your browser does not support the video tag.
                    </video>
                </div> 
            </div>

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
                  <strong>Streamlined onboarding</strong> meant fewer upfront steps, clearer progression, and faster access to the homepage.
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
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">
                  <strong>Attention to detail</strong> allowed me to fix longstanding usability issues like confusion over the progress bar and lack of tooltips
                </p>
              </div>
            </div>
            <p className="text-[#403930] text-lg">
                  Here's a walkthrough of the end to end flow:
                </p>

                <div className="bg-gray-50 rounded-2xl p-4 mb-6">
                  <a 
                    href="https://drive.google.com/file/d/1AxKJpkcx9lF__oN7RUE9HgUh-kaz231I/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative block group cursor-pointer"
                  >
                    <img 
                      src={`${import.meta.env.BASE_URL}qb-streamline-e2e-cover.png`}
                      alt="QuickBooks streamlined end-to-end flow"
                      className="w-full h-auto rounded-lg"
                    />
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="bg-white bg-opacity-90 group-hover:bg-opacity-100 rounded-full p-6 shadow-md transform group-hover:scale-110 transition-all duration-300 pointer-events-auto">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 24 24" 
                          fill="currentColor" 
                          className="w-12 h-12 text-gray-800"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div> 
                 <p className="text-[#403930] text-lg mb-6">As noted in the beginning of this case study, this was one of the most successful tests our team has ever run. It achieved its goal of reducing cognitive load, as evidenced by:</p>
                 
                 <ul className="list-disc list-outside text-[#403930] text-lg space-y-3 ml-6 pl-2 mb-6">
                   <li><b>37% increase in customers choosing to engage</b> in additional optional setup tasks, compared to control</li>
                   <li><b>4% increase in trial conversion</b></li>
                   <li><b>40% reduction in average time to complete</b></li>
                 </ul>
            
          </section>

          {/* Reflection */}
          <section className="mb-16">
            <h2 className="text-[#403930] text-[32px] font-bold mb-8 font-hagrid">Reflection</h2>
            <p className="text-[#403930] text-lg mb-8">
              For me, this project was an important reminder that good design is as much about facilitation and diplomacy as it is about arranging pixels on a screen. Our team had been redesigning this flow on our own for years - but once we stepped back, decided to address root causes, and worked on aligning different points of view, grounding decisions in user data, and designing responsibly with AI, we cracked critical metrics and solved the biggest user facing and organizational problem plaguing the onboarding space.
            </p>
            
            <p className="text-[#403930] text-lggit a mb-6">
            This combination of design and stakeholder alignment challenge directly inspired my future work in social impact arenas. Fundamentally, this project gave me first hand belief that by creating space for opposing sides to see the bigger picture, we can shift away from siloed decision-making toward a shared vision of user success - a strategy I continue to leverage in each complex, systemic issue I encounter.
            </p>
            
        
            
    
          </section>
          </main>
          <Footer />
        </div>
    </>
  );
};

export default CaseStudy;
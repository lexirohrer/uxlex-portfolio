import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";

const CaseStudy = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Work+Sans:wght@400;600;700&family=Plus+Jakarta+Sans:wght@400;700&family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div className="max-w-[1440px] w-full mx-auto my-0 max-md:max-w-[991px] max-sm:max-w-screen-sm">
        <Header />
        
        {/* Hero Section - Full Width */}
        <section className="bg-gradient-to-br from-blue-100 via-indigo-50 to-blue-200 w-full py-16 max-sm:py-12">
          {/* Glassmorphic Header - Full Width */}
          <div className="bg-[#EAD6D7]/50 backdrop-blur-md w-full py-8 border-b border-[#EAD6D7]/30">
            <div className="px-[120px] max-md:px-10 max-sm:px-5">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 max-md:text-3xl font-hagrid">
                QuickBooks Onboarding
              </h1>
              <p className="text-lg lg:text-xl text-gray-700 font-medium">
                Tailoring accounting software onboarding to different mindsets
              </p>
            </div>
          </div>
          
          <div className="px-[120px] max-md:px-10 max-sm:px-5">
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
                    QuickBooks is an accounting and business management software for small business owners. This redesign was one of the first major projects I drove after joining the QuickBooks onboarding team.
                  </p>
                </div>

                {/* Role */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2 font-hagrid">Role</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Research co-facilitator and Design lead for the project
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
                    <span className="bg-white bg-opacity-20 text-gray-800 border border-gray-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm shadow-sm">
                      Figma
                    </span>
                    <span className="bg-white bg-opacity-20 text-gray-800 border border-gray-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm shadow-sm">
                      Figjam
                    </span>
                    <span className="bg-white bg-opacity-20 text-gray-800 border border-gray-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm shadow-sm">
                      Usertesting.com
                    </span>
                    <span className="bg-white bg-opacity-20 text-gray-800 border border-gray-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm shadow-sm">
                      Google Suite
                    </span>
                  </div>
                </div>
              </div>

              {/* Right content - QuickBooks mockup */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full">
                  <img 
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop" 
                    alt="QuickBooks Interface Mockup"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <main className="px-[120px] py-[60px] max-md:px-10 max-md:py-[40px] max-sm:px-5">
          {/* Project Goals */}
          <section className="mb-16">
            <h2 className="text-[#403930] text-[32px] font-bold mb-8 font-hagrid">Project Goals</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">
                  Reduce friction in the onboarding journey and help users reach value faster.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">
                  Align multiple internal teams around a shared vision for onboarding.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">
                  Identify usability issues preventing successful setup.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">
                  Explore responsible AI integrations to save users time and effort.
                </p>
              </div>
            </div>
            <p className="text-[#403930] text-lg mt-6">
              Onboarding had become a silver bullet for teams to guarantee a boost to completion of their specific setup tasks and meet their target metrics. While each addition seemed valuable on its own, the result was a long, bloated flow that slowed users down at the exact moment when their excitement to see the product was highest.
            </p>
          </section>

          {/* Project Process */}
          <section className="mb-16">
            <h2 className="text-[#403930] text-[32px] font-bold mb-8 font-hagrid">Project Process</h2>
            
            {/* Building alignment */}
            <div className="mb-12">
              <h3 className="text-[#403930] text-2xl font-bold mb-6">Building alignment</h3>
              <p className="text-[#403930] text-lg mb-6">
                I knew from past projects that simply proposing a shorter flow wouldn't be enough — removing steps from onboarding was a debate that often escalated to the VP-level, and rarely stuck. Instead, I brought stakeholders together for a design sprint to reorient stakeholders around shared goals, and get them invested in building a customer focused solution
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="bg-[#E6F0F7] p-6 rounded-2xl">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#557592] text-white rounded-full text-xl font-bold mb-4">1</div>
                  <h4 className="text-[#403930] text-lg font-bold mb-3">Listening</h4>
                  <p className="text-[#557592] text-sm">Each team shared their goals and why their step had been added.</p>
                </div>

                <div className="bg-[#E6F0F7] p-6 rounded-2xl">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#557592] text-white rounded-full text-xl font-bold mb-4">2</div>
                  <h4 className="text-[#403930] text-lg font-bold mb-3">Grounding in evidence</h4>
                  <p className="text-[#557592] text-sm">I presented metrics showing the 18-minute average onboarding time and shared quotes from users describing the process as "endless paperwork."</p>
                </div>

                <div className="bg-[#E6F0F7] p-6 rounded-2xl">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#557592] text-white rounded-full text-xl font-bold mb-4">3</div>
                  <h4 className="text-[#403930] text-lg font-bold mb-3">Shared principles</h4>
                  <p className="text-[#557592] text-sm">Together, we agreed that the primary goal of onboarding should be to get users to value quickly, not to maximize every team's KPIs.</p>
                </div>

                <div className="bg-[#E6F0F7] p-6 rounded-2xl">
                  <div className="flex items-center justify-center w-12 h-12 bg-[#557592] text-white rounded-full text-xl font-bold mb-4">4</div>
                  <h4 className="text-[#403930] text-lg font-bold mb-3">Co-designing</h4>
                  <p className="text-[#557592] text-sm">We sketched out a lean flow with only the most essential steps, with other setup tasks deferred to contextual moments later in the product.</p>
                </div>
              </div>
              
              <div className="bg-gray-100 p-8 rounded-2xl text-center">
                <p className="text-[#557592] text-lg italic">📍 [Placeholder for workshop collage or sticky note wall photo.]</p>
              </div>
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

            {/* Designing with AI */}
            <div className="mb-12">
              <h3 className="text-[#403930] text-2xl font-bold mb-6">Designing with AI</h3>
              <p className="text-[#403930] text-lg mb-6">
                One of the biggest opportunities we saw was to reduce the amount of manual entry during setup. Our data showed that 75% of QuickBooks customers had websites, which already contained much of the information needed to create their account — things like business name, email, industry, and branding.
              </p>
              
              <p className="text-[#403930] text-lg mb-6">
                We introduced an AI-powered step that asked users if they'd like to import data directly from their website. With one click, QuickBooks generated a business profile pre-filled with the information we had pulled, which users could then confirm or edit.
              </p>
              
              <p className="text-[#403930] text-lg mb-6">
                When tested in production, this step alone saved users significant time in the onboarding process. It also created a more personalized experience later on: if a user chose to learn how to create an invoice, QuickBooks could surprise them with a sample invoice already set up using the colors and branding from their website.
              </p>
              
              <p className="text-[#403930] text-lg mb-6">
                This flow not only streamlined setup but also built early trust and delight by showing users how their data could be put to work for them right away.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-gray-100 p-8 rounded-2xl text-center">
                  <p className="text-[#557592] text-lg italic">📍 [Placeholder for before/after wireframe: manual entry vs. AI business profile import.]</p>
                </div>
                <div className="bg-gray-100 p-8 rounded-2xl text-center">
                  <p className="text-[#557592] text-lg italic">📍 [Placeholder for before/after wireframe: manual entry vs. AI import.]</p>
                </div>
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
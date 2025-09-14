import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";

const MuvMiCaseStudy = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Work+Sans:wght@400;600;700&family=Plus+Jakarta+Sans:wght@400;700&family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div className="max-w-[1440px] w-full mx-auto my-0 max-md:max-w-[991px] max-sm:max-w-screen-sm">
        <Header />
        
        {/* Hero Section - Full Width */}
        <section className="bg-gradient-to-br from-green-100 via-emerald-50 to-green-200 w-full py-16 max-sm:py-12">
          {/* Glassmorphic Header - Full Width */}
          <div className="bg-[#EAD6D7]/50 backdrop-blur-md w-full py-8 border-b border-[#EAD6D7]/30">
            <div className="px-[120px] max-md:px-10 max-sm:px-5">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 max-md:text-3xl font-hagrid">
                MuvMi Electric Tuk Tuks
              </h1>
              <p className="text-lg lg:text-xl text-gray-700 font-medium">
                Designing sustainable transportation with participatory design
              </p>
            </div>
          </div>
          
          <div className="px-[120px] max-md:px-10 max-sm:px-5">
            {/* Header with logo */}
            <div className="flex justify-between items-start mb-12 max-lg:flex-col max-lg:gap-6">
              <div className="flex-1">
                
              </div>
              
              {/* MuvMi Logo */}
              
            </div>

            {/* Main content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
              {/* Left content */}
              <div className="space-y-4">
                {/* Context */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2 font-hagrid">Context</h2>
                  <p className="text-gray-700 leading-relaxed">
                    As part of my Fulbright fellowship on Human-Centered Design in Thailand, I partnered with MuvMi, a Bangkok-based ridesharing startup operating a fleet of electric Tuk Tuks. MuvMi's mission is to create a safer, more affordable, and greener first–last mile transit option, supporting Thailand's Smart Mobility, Smart Environment, and Smart Economy pillars.
                  </p>
                </div>

                {/* Role */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2 font-hagrid">Role</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Fulbright Research Fellow & UX Designer
                  </p>
                </div>

                {/* Duration */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2 font-hagrid">Duration</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Bangkok, 2025 – Fulbright Research Project
                  </p>
                </div>

                {/* Tools */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2 font-hagrid">Methods</h2>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-white bg-opacity-20 text-gray-800 border border-gray-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm shadow-sm">
                      Participatory Design
                    </span>
                    <span className="bg-white bg-opacity-20 text-gray-800 border border-gray-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm shadow-sm">
                      Ethnography
                    </span>
                    <span className="bg-white bg-opacity-20 text-gray-800 border border-gray-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm shadow-sm">
                      Paper Prototyping
                    </span>
                  </div>
                </div>
              </div>

              {/* Right content - MuvMi cover */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full">
                  <img 
                    src="/MuvMi cover.png" 
                    alt="MuvMi Electric Tuk Tuk"
                    className="w-full h-auto rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <main className="px-[120px] py-[60px] max-md:px-10 max-md:py-[40px] max-sm:px-5">
          {/* Summary */}
          <section className="mb-16">
            <h2 className="text-[#403930] text-[32px] font-bold mb-8 font-hagrid">Summary</h2>
            <p className="text-[#403930] text-lg mb-6">
              Through participatory design methods—including ethnographic ride-alongs, paper prototyping workshops, and group feedback sessions—I worked with both tourists and locals to explore how MuvMi's dual offerings could be unified into one app without compromising the user experience.
            </p>
            
            <p className="text-[#403930] text-lg mb-8">
              <strong>Key outcomes included:</strong>
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">Concrete service concepts (visual travel zones, integrated modes, and expanded tourist options) later implemented by MuvMi.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">A shift in methodology, with staff noting participatory design produced more "realistic and usable" solutions than interviews or surveys.</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">A cultural shift, as employees began informally using personas and participatory outputs in everyday decision-making.</p>
              </div>
            </div>
          </section>

          {/* Project Goals */}
          <section className="mb-16">
            <h2 className="text-[#403930] text-[32px] font-bold mb-8 font-hagrid">Project Goals</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">
                  Explore how Human-Centered Design methods can be adapted to Thailand's cultural context, as part of my Fulbright research.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">
                  Improve the onboarding and ride experience for both tourist and local riders.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">
                  Generate actionable service design concepts aligned with smart city goals.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">
                  Introduce participatory methods that could realistically fit into a Thai startup environment.
                </p>
              </div>
            </div>
          </section>

          {/* Project Process */}
          <section className="mb-16">
            <h2 className="text-[#403930] text-[32px] font-bold mb-8 font-hagrid">Project Process</h2>
            
            {/* Why participatory design */}
            <div className="mb-12">
              <h3 className="text-[#403930] text-2xl font-bold mb-6">Why participatory design?</h3>
              <p className="text-[#403930] text-lg mb-6">
                In Thailand, indirect feedback tendencies often make traditional user interviews difficult. Participatory methods were chosen not just to overcome this, but because of their cultural fit. In a collectivist society, people are well-practiced at collaborating to solve systemic challenges for the broader good.
              </p>
              
              <div className="bg-[#E6F0F7] p-6 rounded-2xl mb-6">
                <p className="text-[#403930] text-lg italic mb-4">
                  "People [in Thailand] think that 'user-first' just means you're thinking about the user and what they would want — but it's actually about being with the user, talking to them, and hearing them speak for themselves about what they want. This isn't well understood yet here."
                </p>
                <p className="text-[#557592] text-sm">— Thai CEO, Stanford HCI graduate (Interview, 06/12/2025)</p>
              </div>
              
              <div className="bg-gray-100 p-8 rounded-2xl text-center">
                <p className="text-[#557592] text-lg italic">📍 [Placeholder for diagram: Western HCD vs. adapted participatory design in Thai context]</p>
              </div>
            </div>

            {/* Observing real-world experiences */}
            <div className="mb-12">
              <h3 className="text-[#403930] text-2xl font-bold mb-6">Observing real-world experiences</h3>
              <p className="text-[#403930] text-lg mb-6">
                Ethnographic ride-alongs with tourists and group feedback sessions with locals surfaced key differences:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#403930] text-lg">
                    <strong>Local riders</strong> accepted MuvMi's zone-based system as familiar, mirroring gas Tuk Tuk norms.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#403930] text-lg">
                    <strong>Tourists</strong>, influenced by ride-hailing apps, expected on-demand, unlimited travel. The zones felt confusing and restrictive.
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-100 p-8 rounded-2xl text-center">
                <p className="text-[#557592] text-lg italic">📍 [Placeholder for UI/service image: Zone-based travel — before and after redesign]</p>
              </div>
            </div>

            {/* Paper prototyping methodology */}
            <div className="mb-12">
              <h3 className="text-[#403930] text-2xl font-bold mb-6">Paper prototyping methodology</h3>
              <p className="text-[#403930] text-lg mb-6">
                The product team had several ideas for improving the app but worried that presenting polished concepts would bias users toward polite approval. To avoid this, we adapted a paper prototyping method:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#403930] text-lg">
                    We deconstructed the app into low-fidelity paper feature cards.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#403930] text-lg">
                    Users were asked to reconstruct a user flow (e.g., booking a ride) using the kit.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#403930] text-lg">
                    They could add their own ideas if features weren't already represented.
                  </p>
                </div>
              </div>
              
              <p className="text-[#403930] text-lg mb-6">
                The results were sets of reconstructed apps across participants, clearly showing what users prioritized when building the experience themselves.
              </p>
              
              <div className="bg-[#E6F0F7] p-6 rounded-2xl mb-6">
                <p className="text-[#403930] text-lg italic mb-4">
                  "Activities like paper prototyping felt like another layer — the user has to think deeper on what they want and why, instead of just tell us what they don't like."
                </p>
                <p className="text-[#557592] text-sm">— MuvMi Employee (Interview, 04/08/2025)</p>
              </div>
              
              <div className="bg-gray-100 p-8 rounded-2xl text-center">
                <p className="text-[#557592] text-lg italic">📍 [Placeholder for workshop photos: paper feature kit, reconstructed flows]</p>
              </div>
            </div>

            {/* Co-designing solutions */}
            <div className="mb-12">
              <h3 className="text-[#403930] text-2xl font-bold mb-6">Co-designing solutions</h3>
              <p className="text-[#403930] text-lg mb-6">
                Through this process, users generated actionable concepts:
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#403930] text-lg">Visual travel zones displayed directly on the map.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#403930] text-lg">A switchable tourist vs. local mode within the same app.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#403930] text-lg">Expanded radius for tourists willing to pay more.</p>
                </div>
              </div>
              
              <div className="bg-[#E6F0F7] p-6 rounded-2xl mb-6">
                <p className="text-[#403930] text-lg italic mb-4">
                  "You not only remember what the users say, but what they felt about it at the time… you can truly trust what they say because you can see their frustration or happiness."
                </p>
                <p className="text-[#557592] text-sm">— MuvMi Employee (Interview, 04/08/2025)</p>
              </div>
              
              <div className="bg-gray-100 p-8 rounded-2xl text-center">
                <p className="text-[#557592] text-lg italic">📍 [Placeholder for UI mockups of revised concepts: zone maps, toggleable modes, expanded radius pricing]</p>
              </div>
            </div>
          </section>

          {/* Solution */}
          <section className="mb-16">
            <h2 className="text-[#403930] text-[32px] font-bold mb-8 font-hagrid">Solution</h2>
            <p className="text-[#403930] text-lg mb-6">
              Within months of the project, MuvMi implemented several of the co-designed features:
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">
                  <strong>Travel zones</strong> now appear visually on the in-app map.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">
                  <strong>Tourists</strong> can access expanded routes with premium pricing.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">
                  A <strong>unified app experience</strong> is being tested to merge tourist and local flows.
                </p>
              </div>
            </div>
            
            <p className="text-[#403930] text-lg mb-8">
              Participatory design was consistently rated by staff as producing more "realistic and usable" solutions than focus groups or interviews, reinforcing its value in Thai contexts.
            </p>
            
            <div className="bg-gray-100 p-8 rounded-2xl text-center">
              <p className="text-[#557592] text-lg italic">📍 [Placeholder for final UI screenshots of visual zones + expanded routes]</p>
            </div>
          </section>

          {/* Impact */}
          <section className="mb-16">
            <h2 className="text-[#403930] text-[32px] font-bold mb-8 font-hagrid">Impact</h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">
                  <strong>Concrete service changes</strong> implemented in the live app.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">
                  <strong>Methodological shift:</strong> participatory methods now complement surveys and interviews in MuvMi's toolkit.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">
                  <strong>Cultural change:</strong> staff informally reference personas and user flows in daily conversation.
                </p>
              </div>
            </div>
            
            <p className="text-[#403930] text-lg">
              As one employee reflected, participatory methods gave them not only insights but also confidence in those insights.
            </p>
          </section>

          {/* Reflection */}
          <section className="mb-16">
            <h2 className="text-[#403930] text-[32px] font-bold mb-8 font-hagrid">Reflection</h2>
            <p className="text-[#403930] text-lg mb-6">
              This project was part of my larger Fulbright research into Smart City technologies and how HCD methods can be adapted to Thai cultural norms.
            </p>
            
            <p className="text-[#403930] text-lg mb-6">
              With MuvMi, participatory design proved especially effective because it built on Thailand's collectivist strengths while addressing limitations of more traditional methods. By meeting users in real travel contexts and engaging them in co-design, we surfaced solutions that were both innovative and implementable.
            </p>
            
            <p className="text-[#403930] text-lg mb-8">
              The broader lesson: smart cities aren't built by technology alone. They require participatory approaches that respect cultural norms and actively involve citizens in shaping urban futures.
            </p>
            
            <div className="bg-gray-100 p-8 rounded-2xl text-center">
              <p className="text-[#557592] text-lg italic">📍 [Placeholder for "outcomes at a glance" graphic: service changes implemented, participatory methods tested, cultural shift toward personas]</p>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MuvMiCaseStudy; 
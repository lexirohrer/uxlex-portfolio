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
      <Header />
      
      {/* Hero Section - Full Width */}
      <section className="relative bg-gradient-to-br from-green-100 via-emerald-50 to-green-200 w-full py-16 max-sm:py-12 overflow-hidden">
        {/* Grainy overlay */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}></div>
        
        {/* Header - No background */}
        <div className="relative z-10 w-full py-8">
          <div className="max-w-[1440px] mx-auto px-[120px] max-md:px-10 max-sm:px-5">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 max-md:text-3xl font-hagrid">
              MuvMi Electric Tuk Tuks
            </h1>
            <p className="text-lg lg:text-xl text-gray-700 font-medium">
              Designing sustainable transportation with participatory design
            </p>
          </div>
        </div>
        
        <div className="max-w-[1440px] mx-auto px-[120px] max-md:px-10 max-sm:px-5">
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
                    src={`${import.meta.env.BASE_URL}MuvMi cover.png`} 
                    alt="MuvMi Electric Tuk Tuk"
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
            <p className="text-[#403930] text-lg mb-6">
            MuvMi, a Bangkok-based ridesharing startup, operates a fleet of electric Tuk Tuks (a three wheeled motorized vehicle). The electric Tuk Tuks are positioned as a cleaner first-last mile alternative to motorbikes, busses, cars, or gas-powered Tuk Tuks. MuvMi offered separate products for tourists and locals, and much of my work with them focused on <strong> how to unite these two services without compromising on the user experience</strong> for either group. I took on this project as a part of my Fulbright Research study on how to adapt Western-created Design Thinking Methods to Global South Contexts - so this project focused on not only redesigning the service, but <strong>adapting the methodologies used to specific cultural contexts.</strong>
            </p>
              <div className="bg-gray-100 rounded-2xl p-4 mb-6">
                <div className="relative">
                  <span className="absolute -top-2 -left-2 text-6xl text-[#557592] font-serif leading-none opacity-60">"</span>
                  <p className="text-[#403930] text-2xl pl-6 pt-2 mb-2">People [in Thailand] think that 'user-first' just means you're thinking about the user and what they would want — but it's actually about being with the user, talking to them, and hearing them speak for themselves about what they want. This isn't well understood yet here.</p>
                  <p className="text-[#403930] text-xl pl-6 pt-2">— Thai CEO, Stanford HCI graduate (Interview, 06/12/2025)</p>
                </div>
              </div>
              <p className="text-[#403930] text-lg mb-6"> 
                Thai culture's engrained attention to hierarcical power dynamics and strong values of social harmony can make it dfficult to elicit direct cricital feedback. For these reasons, ethnographic ride-alongs and participatory design were chosen as methods to allow users to show, not tell, their honest assesments of the service. Previously, Muvmi had used surveys and interviews to gather feedback, so these research methods were new to the team, so I worked closely with them to explore how MuvMi's dual tourist and local offerings could be unified into one unified experience.
              </p>
         
            
            {/* Project Goals and Key Outcomes Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Project Goals Card */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="bg-[#E6F0F7] p-6">
                  <h3 className="text-[#403930] text-xl font-bold font-hagrid">
                    Project Goals
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[#403930] text-base">
                        Explore how Human-Centered Design methods can be adapted to Thailand's cultural context, as part of my Fulbright research.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[#403930] text-base">
                        Improve the onboarding and ride experience for both tourist and local riders.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[#403930] text-base">
                        Generate actionable service design concepts aligned with smart city goals.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[#403930] text-base">
                        Introduce participatory methods that could realistically fit into a Thai startup environment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Outcomes Card */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="bg-[#E6F0F7] p-6">
                  <h3 className="text-[#403930] text-xl font-bold font-hagrid">
                    Key Outcomes
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[#403930] text-base">
                        Concrete service concepts (visual travel zones, integrated modes, and expanded tourist options) later implemented by MuvMi.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[#403930] text-base">
                        A shift in methodology, with staff noting participatory design produced more "realistic and usable" solutions than interviews or surveys.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[#403930] text-base">
                        A cultural shift, as employees began informally using personas and participatory outputs in everyday decision-making.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Project Process */}
          <section className="mb-16">
            <h2 className="text-[#403930] text-[32px] font-bold mb-8 font-hagrid">Project Process</h2>
            
            {/* Process graphic */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-[#E6F0F7] p-6 rounded-2xl">
                <div className="flex items-center justify-center w-12 h-12 bg-[#557592] text-white rounded-full text-xl font-bold mb-4">1</div>
                <h4 className="text-[#403930] text-2xl font-bold mb-3">Ethnographic ride alongs</h4>
                <p className="text-[#403930] text-md">MuvMi employees and Ibserved tourists using the serviceto understand their expectations and pain points with calling, finding, and riding the Tuk Tuks.</p>
              </div>

              <div className="bg-[#E6F0F7] p-6 rounded-2xl">
                <div className="flex items-center justify-center w-12 h-12 bg-[#557592] text-white rounded-full text-xl font-bold mb-4">2</div>
                <h4 className="text-[#403930] text-2xl font-bold mb-3">Paper prototyping sessions</h4>
                <p className="text-[#403930] text-md">I used low-fidelity paper feature cards to have tourists construct their ideal app experience.</p>
              </div>

              <div className="bg-[#E6F0F7] p-6 rounded-2xl">
                <div className="flex items-center justify-center w-12 h-12 bg-[#557592] text-white rounded-full text-xl font-bold mb-4">3</div>
                <h4 className="text-[#403930] text-2xl font-bold mb-3">Participatory design workshop</h4>
                <p className="text-[#403930] text-md">MuvMi employees hosted a workshop to co-design solutions with local riders.
                </p>
              </div>

              <div className="bg-[#E6F0F7] p-6 rounded-2xl">
                <div className="flex items-center justify-center w-12 h-12 bg-[#557592] text-white rounded-full text-xl font-bold mb-4">4</div>
                <h4 className="text-[#403930] text-2xl font-bold mb-3">Synthesis & implementation</h4>
                <p className="text-[#403930] text-md">Consolidated insights from both user groups and worked with MuvMi to implement unified service concepts.</p>
              </div>
            </div>
          </section>

          {/* Phase 1: Ethnographic ride alongs */}
          <section className="mb-16">
            <h2 className="text-[#403930] text-[32px] font-bold mb-8 font-hagrid">Ethnographic ride alongs</h2>
            <p className="text-[#403930] text-md mb-6"> Alongside MuvMi employees, I conducted ethnographic research, <strong> observing 4 groups of real tourists using the MuvMi app and Tuk Tuk service.</strong> Each tourist group was on vacation in Bangkok, some for the first time and others as repeat visitors. We recruited these tourists through "Travel in Bangkok" Facebook groups, local walking tours, and flyers in nearby hotel lobbies, and they were compensated after the research session with a day pass for free rides on the MuvMi Tuk Tuks.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch mb-6">
              <img
                src={`${import.meta.env.BASE_URL}MuvMi-ridealong.png`}
                alt="MuvMi ride along"
                className="rounded-xl w-full md:w-2/3 h-full object-contain"
              />
              <img
                src={`${import.meta.env.BASE_URL}MuvMi-ridealong-app.png`}
                alt="MuvMi ride along app view"
                className="rounded-xl w-full md:w-1/3 h-full object-cover"
              /> 
            </div>
            <p className="text-[#403930] text-lg space-y-3 ml-6 pl-2 mb-6"> Each session followed a similar structure:
            </p>
            <ol className="list-decimal list-outside text-[#403930] text-lg space-y-3 ml-6 pl-2 mb-6">
              <li>Meet with the tourists at their hotel and observe as they downloaded the app, navigated the checkout flow, and called their first Tuk Tuk</li>
              <li>Observe as the tourists attempted to find and board their Tuk Tuk</li>
              <li>Ride with the tourists to their destination, asking them to "think out loud" about their experience of riding in the Tuk Tuk</li>
              <li>Debrief with the tourists about the ride and their experience, including a 15 minute paper prototyping session where they redesigned the app in low fidelity to match their ideal flow</li>
            </ol>
            <p className="text-[#403930] text-lg space-y-3 ml-6 pl-2 mb-6"> Across the 4 sets of tourists, these ride alongs generated many key insights, with the most notable being:
            </p>

            {/* Key Insights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-green-50 p-6 rounded-2xl">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 text-[#B38C28] rounded-full text-2xl font-bold mb-4">👍</div>
                <h4 className="text-[#403930] text-2xl font-regular mb-3">Users loved how <strong>safe, clean, and comfortable</strong> the vehicles were</h4>
              </div>

              <div className="bg-red-50 p-6 rounded-2xl">
                <div className="flex items-center justify-center w-12 h-12 bg-red-100 text-[#B38C28] rounded-full text-2xl font-bold mb-4">👎</div>
                <h4 className="text-[#403930] text-2xl font-regular mb-3">Users <strong>struggled the most with the checkout flow</strong>, with key UI issues preventing them from success</h4>
              </div>

              <div className="bg-red-50 p-6 rounded-2xl">
                <div className="flex items-center justify-center w-12 h-12 bg-red-100 text-[#B38C28] rounded-full text-2xl font-bold mb-4">👎</div>
                <h4 className="text-[#403930] text-2xl font-regular mb-3">Tourist users were <strong>confused</strong> why they could only go <strong>limited distances</strong> in the Tuk Tuks</h4>
              </div>
            </div>
            <p className="text-[#403930] text-lg space-y-3 ml-6 pl-2 mb-6"> The safety, cleanliness, and comfort of the Tuk Tuk rides was a major highlight - but there were two key areas for improvement in the app experience. Firstly, the UI of the checkout was confusing - UI issues like selection components and text hierarchy created a confusing flow, and add on options like "include hotel pickup" didn't give a field place for the user to input their hotel.
            </p>
              <img
                src={`${import.meta.env.BASE_URL}Muvmi-checkout-1.png`}
                alt="MuvMi checkout screens showing the checkout flow and the issues with the UI"
                className="rounded-xl w-full md:w-fill h-full object-contain mb-6"
              />
              <img
                src={`${import.meta.env.BASE_URL}Muvmi-checkout-2.png`}
                alt="MuvMi checkout screens showing the checkout flow and the issues with the UI"
                className="rounded-xl w-full md:w-fill h-full object-cover mb-6"
              /> 
            <p className="text-[#403930] text-lg space-y-3 ml-6 pl-2 mb-6"> Next, tourist users had a mismatched mental model from local users. Local users accepted MuvMi's zone-based system as familiar, mirroring gas Tuk Tuk norms. Tourist users, influenced by ride-hailing apps, expected on-demand, unlimited travel. The zones felt confusing and restrictive.
            </p>
            <img
                src={`${import.meta.env.BASE_URL}Muvmi-zones.png`}
                alt="MuvMi checkout screens showing the checkout flow and the issues with the UI"
                className="rounded-xl w-full md:w-fill h-full object-cover mb-6"
              /> 

          </section>

          {/* Phase 2: Paper prototyping */}
          <section className="mb-16">
            <h2 className="text-[#403930] text-[32px] font-bold mb-8 font-hagrid">Paper prototyping</h2>
            <div className="bg-gray-100 p-8 rounded-2xl text-center">
              <p className="text-[#557592] text-lg italic">📍 [Placeholder content for Phase 2]</p>
            </div>
          </section>

          {/* Phase 3: Participatory Design workshop with local users */}
          <section className="mb-16">
            <h2 className="text-[#403930] text-[32px] font-bold mb-8 font-hagrid">Participatory Design workshop with local users</h2>
            <div className="bg-gray-100 p-8 rounded-2xl text-center">
              <p className="text-[#557592] text-lg italic">📍 [Placeholder content for Phase 3]</p>
            </div>
          </section>

          {/* Phase 4: Synthesis & implementation of new features */}
          <section className="mb-16">
            <h2 className="text-[#403930] text-[32px] font-bold mb-8 font-hagrid">Synthesis & implementation of new features</h2>
            <div className="bg-gray-100 p-8 rounded-2xl text-center">
              <p className="text-[#557592] text-lg italic">📍 [Placeholder content for Phase 4]</p>
            </div>
          </section>

          {/* Additional Context */}
          <section className="mb-16">
            <h2 className="text-[#403930] text-[32px] font-bold mb-8 font-hagrid">Additional Context</h2>
            
            {/* Why participatory design */}
            <div className="mb-12">
              <h3 className="text-[#403930] text-2xl font-bold mb-6">Why participatory design?</h3>
              <p className="text-[#403930] text-lg mb-6">
                In Thailand, indirect feedback tendencies often make traditional user interviews difficult. Participatory methods were chosen not just to overcome this, but because of their cultural fit. In a collectivist society, people are well-practiced at collaborating to solve systemic challenges for the broader good.
              </p>
              
          
              
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
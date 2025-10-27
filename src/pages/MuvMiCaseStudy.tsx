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
            MuvMi, a Bangkok-based ridesharing startup, operates a fleet of electric Tuk Tuks (a three wheeled motorized vehicle). The electric Tuk Tuks are positioned as a cleaner first-last mile alternative to motorbikes, busses, cars, or gas-powered Tuk Tuks. MuvMi offered separate products for tourists and locals, and much of my work with them focused on <strong> how to unite these two services without compromising the user experience</strong> for either group. I took on this project as a part of my Fulbright Research study on how to adapt Western-created Design Thinking Methods to Global South Contexts - so this project focused on not only redesigning the service, but <strong>adapting the methodologies used to specific cultural contexts.</strong>
            </p>

            {/* Why participatory design */}
          <section className="mb-0">
            <h2 className="text-[#403930] text-[32px] font-bold mb-8 font-hagrid">Why Participatory Design?</h2>
            
            <div className="mb-12">
              <p className="text-[#403930] text-lg mb-6">
                Thai culture's engrained attention to social harmony and respect for authority can make it difficult to elicit direct critical feedback using classic design research methods such as interviews and focus groups. Despite the mismatch between culture and methodology, these methods are the most widely taught and used in places like Thailand, where integration of human centered design is still cutting edge rather than assumed in the technology sector. 
              </p>
            
              <div className="bg-gray-100 rounded-2xl p-4 mb-6">
                <div className="relative">
                  <span className="absolute -top-2 -left-2 text-6xl text-[#557592] font-serif leading-none opacity-60">"</span>
                  <p className="text-[#403930] text-2xl pl-6 pt-2 mb-2">People [in Thailand] think that 'user-first' just means you're thinking about the user and what they would want — but it's actually about being with the user, talking to them, and hearing them speak for themselves about what they want. This isn't well understood yet here.</p>
                  <p className="text-[#403930] text-xl pl-6 pt-2">— Thai CEO, Stanford HCI graduate (Interview, 06/12/2025)</p>
                </div>
              </div>
              <p className="text-[#403930] text-lg mb-6"> 
                The reality is that classic design research methods were created by and for Western contexts, and don't always work well when copy pasted into new cultures and situations. To elicit richer, more honest insights, <strong>this project focused not only on solving the design challenges, but adapting human centered design to the Global South cultural realities</strong>. For these reasons, ethnographic ride-alongs and participatory design workshops were chosen as methods to allow users to show, not tell, their honest assesments of the service.
              </p>
            </div>
            </section>
            
            {/* Project Goals and Key Outcomes Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              {/* Project Goals Card */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="bg-[#E6F0F7] p-6">
                  <h3 className="text-[#403930] text-2xl font-bold font-hagrid">
                    Project Goals
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[#403930] text-lg text-base">
                        Explore how Human-Centered Design methods can be adapted to Thailand's cultural context, as part of my Fulbright research.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[#403930] text-lg text-base">
                        Improve the onboarding and ride experience for both tourist and local riders.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[#403930] text-lg text-base">
                        Generate actionable service design concepts aligned with smart city goals.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[#403930] text-lg text-base">
                        Introduce participatory methods that could realistically fit into a Thai startup environment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Outcomes Card */}
              <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <div className="bg-[#E6F0F7] p-6">
                  <h3 className="text-[#403930] text-2xl font-bold font-hagrid">
                    Key Outcomes
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[#403930] text-lg text-base">
                        Concrete service concepts (visual travel zones, integrated modes, and expanded tourist options) later implemented by MuvMi.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[#403930] text-lg text-base">
                        A shift in methodology, with staff noting participatory design produced more "realistic and usable" solutions than interviews or surveys.
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-[#403930] text-lg text-base">
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
                <h4 className="text-[#403930] text-2xl font-bold mb-3">Locals Focus Group</h4>
                <p className="text-[#403930] text-md">MuvMi employees hosted a focus group to discuss pain points with local riders.
                </p>
              </div>
              
              <div className="bg-[#E6F0F7] p-6 rounded-2xl">
                <div className="flex items-center justify-center w-12 h-12 bg-[#557592] text-white rounded-full text-xl font-bold mb-4">2</div>
                <h4 className="text-[#403930] text-2xl font-bold mb-3">Tourist ethnographic ride alongs</h4>
                <p className="text-[#403930] text-md">MuvMi employees and I observed tourists using the service to understand their expectations and pain points with calling, finding, and riding the Tuk Tuks.</p>
              </div>

              <div className="bg-[#E6F0F7] p-6 rounded-2xl">
                <div className="flex items-center justify-center w-12 h-12 bg-[#557592] text-white rounded-full text-xl font-bold mb-4">3</div>
                <h4 className="text-[#403930] text-2xl font-bold mb-3"> Tourist paper prototyping</h4>
                <p className="text-[#403930] text-md">I created low-fidelity paper feature cards, and asked tourists to construct their ideal app experience.</p>
              </div>

              <div className="bg-[#E6F0F7] p-6 rounded-2xl">
                <div className="flex items-center justify-center w-12 h-12 bg-[#557592] text-white rounded-full text-xl font-bold mb-4">4</div>
                <h4 className="text-[#403930] text-2xl font-bold mb-3">Synthesis & implementation</h4>
                <p className="text-[#403930] text-md"> I consolidated insights from both user groups and worked with MuvMi to implement unified service concepts.</p>
              </div>
            </div>
          </section>

           {/* Phase 3: Focus Group  with local users */}
           <section className="mb-16">
            <h2 className="text-[#403930] text-[32px] font-bold mb-8 font-hagrid">Local users: focus group </h2>
            <p className="text-[#403930] text-lg space-y-3 pl-2 mb-6"> Despite being a very user centered company, MuvMi's research methods have largely been limited to surveys, interviews, and focus groups with users. Because of the engrained tendencies towards social harmony and respect for authority (e.g. workshop facilitators), often it can be difficult to elicit honest, direct critique from Thai users. These factors, in addition to the well known issues with groupthink in focus groups, encouraged us to compare traditional methods with adapted participatory design methods for this project. 
            </p>
            <p className="text-[#403930] text-lg space-y-3 pl-2 mb-6"> Because of language constraints, internal MuvMi employees first conducted the focus groups they were comfortable with with local users to better understand their pain points and needs, while I designed more collaborative methodologies for tourist research. The local workshops were structured as roundtable discussions, focused on specific pain points and needs identified from feedback widgets within the app, and raised similar issues as MuvMi had heard about their service before:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-green-50 p-6 rounded-2xl">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 text-[#B38C28] rounded-full text-2xl font-bold mb-4">👍</div>
                <h4 className="text-[#403930] text-2xl font-regular mb-3">Local users choose MuvMi Tuk Tuks <strong>because they are safer</strong> than other travel methods (e.g. motorbikes, walking, etc.)</h4>
              </div>

              <div className="bg-red-50 p-6 rounded-2xl">
                <div className="flex items-center justify-center w-12 h-12 bg-red-100 text-[#B38C28] rounded-full text-2xl font-bold mb-4">👎</div>
                <h4 className="text-[#403930] text-2xl font-regular mb-3">Local users cared about speed, but <strong>reliability was even more important.</strong>  ETA inconsistencies damaged trust.</h4>
              </div>

              <div className="bg-red-50 p-6 rounded-2xl">
                <div className="flex items-center justify-center w-12 h-12 bg-red-100 text-[#B38C28] rounded-full text-2xl font-bold mb-4">👎</div>
                <h4 className="text-[#403930] text-2xl font-regular mb-3">Local users <strong>understood why travel was limited to a certain zone</strong>, but often didn't know what zone they were in</h4>
              </div>
            </div>
            <p className="text-[#403930] text-lg space-y-3 pl-2 mb-6"> As with all transportation technology, speed is important – but <strong>one insight that stood out was reliablity's equal importance.</strong> Users reported that the ETA for the MuvMi Tuk Tuk pickup felt random, and didn't match estimated wait times. These inconsistencies were side effects of a complicated algorithm - pickup time calculation incorporates many factors such as average waiting times in that area for that time of day, live locations of nearby Tuk Tuks, and consolidating multiple users' requests to form the most efficient rideshare route. This precise calculation can only be done after the user calls a car, so a user might see an estimated "15 minute wait time" based on average data, then when they actually call the car, have less than 5 minutes to run to the pickup point. <strong>Over time, repeated interactions like this were hurting trust and user adoption.</strong>
            </p>
            <p className="text-[#403930] text-lg space-y-3 pl-2 mb-6"> Interestingly, while Tuk Tuk distance limits was a confusing concept for tourists (see later research), it was a familiar and understandable to locals, who had grown up with territorial gas Tuk Tuk networks that were limited to certain neighborhoods to ensure fair distribution of rides.
            </p>
          </section>

          {/* Phase 1: Ethnographic ride alongs */}
          <section className="mb-16">
            <h2 className="text-[#403930] text-[32px] font-bold mb-8 font-hagrid">Tourist users: ethnographic ride alongs</h2>
            <p className="text-[#403930] text-md mb-6"> After observing the structure of these focus groups, I designed the tourist research phases to coach MuvMi employees on using resesarch methdos that would allow the user to "show not tell" what they liked and didn't like about the service. ALongside a few MuvMi employees, I conducted ethnographic research, <strong> observing 4 groups of real tourists using the MuvMi app and Tuk Tuk service.</strong> Each tourist group was on vacation in Bangkok, some for the first time and others as repeat visitors. We recruited these tourists through "Travel in Bangkok" Facebook groups, local walking tours, and flyers in nearby hotel lobbies, and they were compensated after the research session with a day pass for free rides on the MuvMi Tuk Tuks.
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
            <p className="text-[#403930] text-lg space-y-3 pl-2 mb-6"> Each session followed a similar structure:
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
                <h4 className="text-[#403930] text-2xl font-regular mb-3">Tourist users loved how <strong>safe, clean, and comfortable</strong> the vehicles were</h4>
              </div>

              <div className="bg-red-50 p-6 rounded-2xl">
                <div className="flex items-center justify-center w-12 h-12 bg-red-100 text-[#B38C28] rounded-full text-2xl font-bold mb-4">👎</div>
                <h4 className="text-[#403930] text-2xl font-regular mb-3">Tourist users <strong>struggled the most with the checkout flow</strong>, with key UI issues preventing them from success</h4>
              </div>

              <div className="bg-red-50 p-6 rounded-2xl">
                <div className="flex items-center justify-center w-12 h-12 bg-red-100 text-[#B38C28] rounded-full text-2xl font-bold mb-4">👎</div>
                <h4 className="text-[#403930] text-2xl font-regular mb-3">Tourist users were <strong>confused</strong> why they could only go <strong>limited distances</strong> in the Tuk Tuks</h4>
              </div>
            </div>
            <p className="text-[#403930] text-lg space-y-3 ml-6 pl-2 mb-6"> The safety, cleanliness, and comfort of the Tuk Tuk rides was a major highlight - but there were two key areas for improvement in the app experience. Firstly, the UI of the checkout was unintuitive - issues like selection components and text hierarchy created a confusing flow, and add on options like "include hotel pickup" didn't tell the user that hotel pickup needed to be booked 30 minutes in advance.
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
            <p className="text-[#403930] text-lg space-y-3 pl-2 mb-6"> Next, tourist users had a mismatched mental model from local users. Local users accepted MuvMi's zone-based system as familiar, mirroring gas Tuk Tuk norms. Tourist users, influenced by ride-hailing apps, expected on-demand, unlimited travel. The zones felt confusing and restrictive.
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
            <p className="text-[#403930] text-lg space-y-3 pl-2 mb-6"> After each ride-along session, the tourists were invited into a nearby coffee shop for a paper prototyping session. Rather than having users react to concepts that the designers had created, the generative nature of this method allowed designers to see the users' honest opinions of the service. To implement this method: 
            </p> 
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#403930] text-lg">
                    I deconstructed the app into low-fidelity paper feature cards.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#403930] text-lg">
                    After each ride-along session, users were asked to reconstruct a user flow (e.g., booking a ride) using the paper feature kit.
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#403930] text-lg">
                    Users could add their own ideas if features weren't already represented.
                  </p>
                </div>
              </div>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch mb-6">
              <img
                src={`${import.meta.env.BASE_URL}MuvMi-workshop.png`}
                alt="MuvMi ride along"
                className="rounded-xl w-full md:w-1/2 h-full object-contain"
              />
              <img
                src={`${import.meta.env.BASE_URL}MuvMi-pps.png`}
                alt="MuvMi ride along app view"
                className="rounded-xl w-full md:w-1/2 h-full object-cover"
              /> 
            </div>
            <p className="text-[#403930] text-lg space-y-3 pl-2 mb-6"> In an ideal world, tourists would generate these mockups of the app from scratch; however, the extremely time sensitive nature of working with real tourists necessitated a hybrid paper prototyping / sketching activity, which could be constrained to 15 minute sessions. This activity was generative rather than evaluative, allowing MuvMi to gain understand <strong>what features they should prioritize building or improving based on what users omitted, not what they critiqued. </strong>This alternative method prevented feedback from being biased by cultural norms of social harmony or authority.
            </p>
            <p className="text-[#403930] text-lg space-y-3 pl-2 mb-6"> To synthesize these insights, I created both a paper prototype that showed the key features users prioritized when building the experience themselves. These workshops also contributed to a combined analysis of opportunities for uniting the tourist and locals services.
            </p>
            <img
                src={`${import.meta.env.BASE_URL}MuvMi-pps2.png`}
                alt="MuvMi ride along app view"
                className="rounded-3xl w-full md:w-full h-full object-cover"
              /> 
          </section>


          {/* Phase 4: Synthesis & implementation of new features */}

          <section className="mb-16">
            <h2 className="text-[#403930] text-[32px] font-bold mb-8 font-hagrid">Synthesis & implementation</h2>
            <p className="text-[#403930] text-lg space-y-3 pl-2 mb-6"> After conducting both tourist and local user research, key differences between the two emerged. For example:
            </p>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              {/* Local Riders Box */}
              <div className="flex-1 bg-gray-100 rounded-2xl p-6 shadow-sm">
                <h4 className="font-bold text-[#403930] text-xl mb-4 text-left">Local Riders...</h4>
                <ul className="space-y-4 text-[#403930] text-lg list-disc list-inside">
                  <li>
                    Accepted MuvMi's <strong>zone-based system</strong> as familiar—it mirrors traditional gas Tuk Tuk service norms.
                  </li>
                  <li>
                    Could distinguish <strong>MuvMi electric Tuk Tuks</strong> and gas Tuk Tuks, making it easier for them to find the vehicle picking them up.
                  </li>
                  <li>
                    Preferred <strong>paying per ride</strong> as expected for other transport types
                  </li>
                </ul>
              </div>
              {/* Tourist Riders Box */}
              <div className="flex-1 bg-gray-100 rounded-2xl p-6 shadow-sm">
                <h4 className="font-bold text-[#403930] text-xl mb-4 text-left">Tourists...</h4>
                <ul className="space-y-4 text-[#403930] text-lg list-disc list-inside">
                  <li>
                    Expected tha they could go any distance, as with ride-hailing apps like Uber. <strong>Found the zone system confusing and restrictive</strong>.
                  </li>
                  <li>
                    Often <strong>could not distinguish</strong> MuvMi electric from gas Tuk Tuks, making pickups harder in touristy areas.
                  </li>
                  <li>
                    Preferred the <strong>hands-off nature</strong> of unlimited-ride day passes, as it caused less transactional friction.
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-[#403930] text-2xl font-bold mb-6">Design recommendations</h3>
            <p className="text-[#403930] text-lg mb-6">
              After conducting both tourist and local user research, I synthesized the insights and user generated concepts into a set of design recommendations for the MuvMi team to implement. These included:
           
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#403930] text-lg">Visual travel zones displayed directly on the map, to juggle the tourist "ride-hailing" mental model with the local "gas Tuk Tuk" mental model</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#403930] text-lg">A switchable tourist vs. local mode within the same app.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#403930] text-lg">Expanded radius for tourists willing to pay more.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#403930] text-lg">Improving usability of the checkout flow for tourists</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#403930] text-lg">Implementing convenience features like "saved places" that would increase user adption for locals and ease first time use for tourists</p>
                </div>
              </div>
            <img
                src={`${import.meta.env.BASE_URL}MuvMi-design-reccs.png`}
                alt="MuvMi design recommendations from the research"
                className="rounded-3xl w-full md:w-full h-full object-cover mb-6"
              /> 

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
                  Both tourists and locals can <strong>access longer distance routes</strong> with premium pricing.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">
                  A <strong>unified app experience</strong> is being tested to merge tourist and local checkout and ride hailing flows.
                </p>
              </div>
            </div>

        {/* Methodology Learnings */}
          <h3 className="text-[#403930] text-2xl font-bold mb-6">Methodology Learnings</h3>
          <p className="text-[#403930] text-lg space-y-3 pl-2 mb-6"> This project was focused not only on solving the desgin challenges at hand, but also on <strong>adapting the methodologies used to specific cultural contexts.</strong> After shadowing and practicing ethnographic observation and participatory design workshops, one Muvmi employee reflected:
          </p> 
          <div className="bg-gray-100 rounded-2xl p-4 mb-6">
            <div className="relative">
              <span className="absolute -top-2 -left-2 text-6xl text-[#557592] font-serif leading-none opacity-60">"</span>
              <p className="text-[#403930] text-2xl pl-6 pt-2 mb-2">Activities like paper prototyping felt like another layer — the user has to think deeper on what they want and why, instead of just tell us what they don't like.</p>
              <p className="text-[#403930] text-xl pl-6 pt-2">— MuvMi Employee (Interview, 04/08/2025)</p>
            </div>
          </div>

          <p className="text-[#403930] text-lg mb-6">
              Other employees reflected that participatory methods gave them not only gave them deeper insights but also confidence in the truthfulness of those insights, compared to the use of traditional interview and focus group methods:
            </p>
          <div className="bg-gray-100 rounded-2xl p-4 mb-6">
            <div className="relative">
              <span className="absolute -top-2 -left-2 text-6xl text-[#557592] font-serif leading-none opacity-60">"</span>
              <p className="text-[#403930] text-2xl pl-6 pt-2 mb-2">You not only remember what the users say, but what they felt about it at the time… you can truly trust what they say because you can see their frustration or happiness.</p>
              <p className="text-[#403930] text-xl pl-6 pt-2">— MuvMi Employee (Interview, 04/08/2025)</p>
            </div>
          </div>
        </section>

          {/* Impact */}
          <section className="mb-16">
            <h2 className="text-[#403930] text-[32px] font-bold mb-8 font-hagrid">Impact</h2>
            <p className="text-[#403930] text-lg mb-6">Across the board, MuvMi employees <strong>rated participatory methods as producing more "realisitic and usable" solutions</strong> than traditional interview and focus group methods. Beyond just the feature updates and changes, this project also represented a <strong>cultural shift in the way MuvMi employees approach design.</strong> After shadowing and practicing ethnographic observation and participatory design workshops, the MuvMi CEO reported observing:
            </p>

          <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">
                  <strong> Cultural change:</strong> staff informally reference personas and user flows in daily conversation.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">
                  <strong>Methodological shifts:</strong> participatory methods now complement surveys and interviews in MuvMi's toolkit.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">
                  <strong>Richer understanding:</strong> staff have a more accurate concept of "user centricity" as stemming from encouraging users to show, not tell, their honest assesments of the service.
                </p>
              </div>
            </div>
          </section>

          {/* Reflection */}
          <section className="mb-16">
            <h2 className="text-[#403930] text-[32px] font-bold mb-8 font-hagrid">Reflection</h2>
            <p className="text-[#403930] text-lg mb-6">
            This project was part of my larger Fulbright research into Smart City technologies and how HCD methods can be adapted to Thai cultural norms. MuvMi is already an incredibly user-centered startup in their design and development processes. However, the interview and focus group methods they were defaulted to often clashed with the indirect feedback tendencies engrained in Thai culture, making these methods less successful than they had been in their original contexts. This project was a unique opportunity to explore the wider realm of existing design research methods, and consider which might be better fits for this particular context.
            </p>
            
            <p className="text-[#403930] text-lg mb-6">
            Exploring how to teach and adapt these methods was one of my most rewarding UX projects to date, and the one that first sparked my fascination with International Development & Design. I’ve come to understand that, more than just being a tool to build better businesses, adapting participatory approaches is a crucial step towards empowering citizens to shape their own urban futures.
            </p>
          </section>
          </main>
          <Footer />
        </div>
    </>
  );
};

export default MuvMiCaseStudy; 
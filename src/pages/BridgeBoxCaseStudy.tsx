import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";

const BridgeBoxCaseStudy = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Work+Sans:wght@400;600;700&family=Plus+Jakarta+Sans:wght@400;700&family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div className="max-w-[1440px] w-full mx-auto my-0 max-md:max-w-[991px] max-sm:max-w-screen-sm">
        <Header />
        
        {/* Hero Section - Full Width */}
        <section className="bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-200 w-full py-16 max-sm:py-12">
          {/* Glassmorphic Header - Full Width */}
          <div className="bg-white/50 backdrop-blur-md w-full py-8 border-b border-white/30">
            <div className="px-[120px] max-md:px-10 max-sm:px-5">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 max-md:text-3xl font-hagrid">
                Designing for Disaster Response
              </h1>
              <p className="text-lg lg:text-xl text-gray-700 font-medium">
                Human-centered design for climate disaster communication in rural Thailand
              </p>
            </div>
          </div>
          
          <div className="px-[120px] max-md:px-10 max-sm:px-5">
            {/* Header with logo */}
            <div className="flex justify-between items-start mb-12 max-lg:flex-col max-lg:gap-6">
              <div className="flex-1">
                
              </div>
              
              {/* BridgeBox Logo placeholder */}
              
            </div>

            {/* Main content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
              {/* Left content */}
              <div className="space-y-4">
                {/* Context */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2 font-hagrid">Context</h2>
                  <p className="text-gray-700 leading-relaxed">
                    As part of my Fulbright fellowship on Human-Centered Design in Thailand, I collaborated with BridgeBox, a startup developing a communication system for climate disaster response. BridgeBox connects rural "reporters" with urban "responders" (local governments, nonprofits, and employers) through a mobile app and desktop interface, advancing Thailand's Smart Environment and Smart Living pillars.
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
                    Thailand, 2025 – Fulbright Research Project (10 months)
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
                      User Research
                    </span>
                    <span className="bg-white bg-opacity-20 text-gray-800 border border-gray-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm shadow-sm">
                      AI/ML Design
                    </span>
                    <span className="bg-white bg-opacity-20 text-gray-800 border border-gray-200 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm shadow-sm">
                      Workshop Facilitation
                    </span>
                  </div>
                </div>
              </div>

              {/* Right content - BridgeBox mockup placeholder */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full bg-gradient-to-br from-blue-200 to-purple-300 rounded-2xl p-8 flex items-center justify-center">
                  <div className="text-center text-gray-700">
                    <div className="text-6xl mb-4">📱</div>
                    <p className="text-lg font-medium">BridgeBox App Interface</p>
                    <p className="text-sm opacity-75">Disaster Response Communication</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <main className="px-[120px] py-[60px] max-md:px-10 max-md:py-[40px] max-sm:px-5">
          {/* Summary */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-hagrid">Summary</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Over a 10-month collaboration, I worked with the team to adapt participatory design methods for rural Thai users with low digital literacy, leading to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-3 mb-6">
                <li>New features such as offline emergency reporting, proxy reporting for non-smartphone users, and a "Bridge Alert" function for critical announcements.</li>
                <li>AI support features that automatically categorized cases by urgency, helping responders prioritize between life-threatening issues and routine requests.</li>
                <li>A participatory process that employees described as producing more "creative and realistic" solutions than surveys or interviews.</li>
                <li>Stronger trust and confidence among rural users in adopting new tools for disaster communication.</li>
              </ul>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
                <p className="text-blue-800 font-medium">
                  📍 [Placeholder for "metrics at a glance" graphic: e.g. xx% increase in clients acquired, xx% increase in disaster response cases resolved within x days.]
                </p>
              </div>
            </div>
          </section>

          {/* Project Goals */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-hagrid">Project Goals</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Cultural Adaptation</h3>
                <p className="text-gray-700">Adapt Human-Centered Design methods to Thai cultural contexts as part of my Fulbright research.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Accessibility</h3>
                <p className="text-gray-700">Make BridgeBox accessible to rural users with low digital literacy.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Service Design</h3>
                <p className="text-gray-700">Generate service design improvements through participatory methods.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">AI Integration</h3>
                <p className="text-gray-700">Design and test AI-supported features to help responders categorize and prioritize disaster reports.</p>
              </div>
            </div>
          </section>

          {/* Project Process */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-hagrid">Project Process</h2>
            
            {/* Why participatory design? */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why participatory design?</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Past research at BridgeBox relied on surveys and interviews, but these methods often failed to surface deeper insights. Participatory approaches were chosen not only to work around indirect feedback tendencies but also to build on cultural strengths.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                In a collectivist society like Thailand, participation is highly resonant — people are accustomed to working together toward systemic solutions for the wider good. This made participatory workshops a natural fit.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <p className="text-yellow-800 font-medium">
                  📍 [Placeholder for diagram: Traditional research vs. participatory design in Thai context]
                </p>
              </div>
            </div>

            {/* Running workshops in rural contexts */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Running workshops in rural contexts</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We facilitated five co-design workshops in Songkhla Province, a politically sensitive and flood-prone area. Adjustments were needed for participants with lower technical literacy:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-3 mb-6">
                <li>Activities were broken down into simple, detailed steps (e.g., "First, write the steps you'd take to report an incident. Then draw the screen you'd expect to see for each step").</li>
                <li>In-person sessions proved essential, as many participants were not comfortable juggling tools like Zoom or online whiteboards. Using familiar materials like pen and paper allowed participants to engage fully.</li>
                <li>Flexible pacing respected Thailand's polychronic view of time, where building consensus mattered more than keeping to strict schedules.</li>
              </ul>
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-6">
                <p className="text-blue-800 italic">
                  "It's important to have someone in the field with participants, because online it's difficult to get their full attention… in person, you can see the time they spent to write down what they actually think."
                </p>
                <p className="text-blue-700 text-sm mt-2">— BridgeBox founder</p>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <p className="text-yellow-800 font-medium">
                  📍 [Placeholder for workshop photos and participant sketches]
                </p>
              </div>
            </div>

            {/* Generative sketching and prototyping */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Generative sketching and prototyping</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Workshops used generative sketching and paper prototyping to invite participants to imagine solutions beyond the existing software. This encouraged participants to propose ideas, compare alternatives, and frame feedback as preferences rather than critiques.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This approach yielded tangible concepts like:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Offline emergency reporting.</li>
                <li>Proxy reporting for those without smartphones.</li>
                <li>Bridge Alert, a one-way channel for urgent announcements from responders to rural users.</li>
              </ul>
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-6">
                <p className="text-blue-800 italic">
                  "With the participatory approach, they take ownership in designing."
                </p>
                <p className="text-blue-700 text-sm mt-2">— BridgeBox employee</p>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <p className="text-yellow-800 font-medium">
                  📍 [Placeholder for paper prototype examples and side-by-side sketches vs. final UI]
                </p>
              </div>
            </div>

            {/* Designing with AI */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Designing with AI</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Alongside participatory workshops, I collaborated with BridgeBox to design and test AI-supported features for responders.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Reports were automatically tagged by urgency: urgent "medical emergency" or "human rights violation" cases were prioritized over lower-urgency issues like "documentation approval needed."
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                User testing confirmed that these AI tags helped responders triage more effectively, saving time and reducing cognitive overload during crisis situations.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <p className="text-yellow-800 font-medium">
                  📍 [Placeholder for UI screenshots: AI-driven case categorization screen — before/after]
                </p>
              </div>
            </div>
          </section>

          {/* Solution */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-hagrid">Solution</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The final design combined user-driven features with AI-assisted tools:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="text-3xl mb-3">📱</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Mobile App</h3>
                <p className="text-gray-700">A mobile app for rural reporters with offline and proxy functionality.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="text-3xl mb-3">💻</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Desktop Interface</h3>
                <p className="text-gray-700">A desktop interface for responders with automated case prioritization.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="text-3xl mb-3">🚨</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Bridge Alert</h3>
                <p className="text-gray-700">A "Bridge Alert" feature ensuring critical announcements reached rural users quickly.</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed mt-6">
              Participatory workshops not only shaped these solutions but also increased users' confidence in adopting the platform.
            </p>
          </section>

          {/* Impact */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-hagrid">Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Platform Features</h3>
                  <p className="text-gray-700">Concrete features added to the BridgeBox platform within the collaboration period.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">AI Efficiency</h3>
                  <p className="text-gray-700">AI categorization tools improved responder efficiency in handling urgent vs. routine cases.</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">User Adoption</h3>
                  <p className="text-gray-700">User adoption and trust increased, with rural participants more confident in using the app after co-design involvement.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Design Process</h3>
                  <p className="text-gray-700">Employees consistently rated participatory design as producing more "realistic and usable" solutions than interviews or focus groups.</p>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mt-8">
              <p className="text-blue-800 font-medium">
                📍 [Placeholder for "metrics at a glance" graphic: e.g. xx% increase in adoption, xx% faster case triage, 5 participatory workshops]
              </p>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default BridgeBoxCaseStudy;

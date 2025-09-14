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
                BridgeBox 
              </h1>
              <p className="text-lg lg:text-xl text-gray-700 font-medium">
                Designing disaster response tools in rural Thailand
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

              {/* Right content - BridgeBox cover */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full">
                  <img 
                    src="/BBX cover.png" 
                    alt="BridgeBox Disaster Response"
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
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-hagrid">Summary</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                As part of my Fulbright fellowship on adapting Participatory Design to Thailand, I collaborated with BridgeBox, a startup developing a communication system for climate disaster response. BridgeBox builds a mobile app for rural residents to call for help during disasters like flash flooding, and a desktop software for "responders" (local governments, nonprofits, and employers) to manage and respond to the submitted cases. The high stakes and unique context for rural Thai users made usability a critical priority for both the mobile and desktop interface.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Over 10-months, I helped the BridgeBox team adapt participatory design for use with rural Thai users who had low digital literacy. Results included:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-3 mb-6">
                <li>New features such as offline emergency reporting, proxy reporting for non-smartphone users, and a "Bridge Alert" function for critical announcements.</li>
                <li>AI support features that auto-categorized cases by urgency, helping responders prioritize between life-threatening issues and routine requests.</li>
                <li>A participatory design process that employees described as producing more "creative and realistic" solutions than surveys or interviews.</li>
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
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>Adapt Human-Centered Design methods to Thai cultural contexts as part of my Fulbright research.</li>
              <li>Make BridgeBox accessible to rural users with low digital literacy.</li>
              <li>Generate service design improvements through participatory methods.</li>
              <li>Design and test AI-supported features to help responders categorize and prioritize disaster reports.</li>
            </ul>
          </section>

          {/* Project Process */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-hagrid">Project Process</h2>
            
            {/* Why participatory design? */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why participatory design?</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Past research and design at BridgeBox relied on surveys and interviews, but these methods often yielded little more than confirmation of expected issues. Participatory approaches were chosen for two key reasons:
              </p>
              <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-4">
                <li>To gather honest critique despite Thailand's culturally engrained indirect feedback tendencies</li>
                <li>To play to collectivist cultural strengths. Thai social values are heavily focused on building trustworthy relationships and amicable collaboration, making this context a particularly good fit for participatory design workshops</li>
              </ol>
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
                To achieve the project goals, I planned five participatory design workshops for users in the Songkhla Province, a politically sensitive and flood-prone area. In the first two workshops, I ran while my collaborator from BridgeBox translated - however, we quickly realized that common technology concepts in English often don't have a clear Thai translation. Moreover, my Thai collaborators were interested in learning participatory design, so I decided to take the more intensive process of training Thai collaborators in participatory design, so that they could lead workshop facilitation. By the final workshop, Thai collaborators were comfortable facilitating sessions independently, and since this project's conclusion have continued to do so.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                After each workshop, I reflected not only on the product feedback received, but the methodological blockers to a successful session. Through successive rounds of participatory design, I learned that a successful participatory design workshops for rural users with lower technical literacy should include:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-3 mb-6">
                <li>Activity instructions that are more detailed than typical, and broken in discrete steps (e.g., "First, write the steps you'd take to report an incident. Then, draw the screen you'd expect to see for each step").</li>
                <li>In-person sessions, as many participants were not comfortable juggling tools like Zoom or online whiteboards. Using familiar materials like pen and paper allowed participants to express their ideas more comfortably. The BridgeBox founder, after co-facilitating, noted "It's important to have someone in the field with participants, because online it's difficult to get their full attention… in person, you can see the time they spent to write down what they actually think."</li>
                <li>Flexible pacing with respect to Thailand's polychronic view of time, where building consensus matters more than keeping to strict schedules.</li>
              </ul>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <p className="text-yellow-800 font-medium">
                  📍 [Placeholder for workshop photos and participant sketches]
                </p>
              </div>
            </div>

            {/* Workshop activities: generative sketching */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Workshop activities: generative sketching</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Workshops used generative sketching to invite participants to imagine solutions beyond the existing software. This encouraged participants to propose ideas, compare alternatives, and frame feedback as preferences rather than critiques.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This approach yielded tangible concepts that met real user needs, such as:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
                <li>Offline emergency reporting for inconsistent connection in rural areas</li>
                <li>Proxy reporting for those without smartphones.</li>
                <li>Bridge Alert, a one-way channel for urgent announcements from responders to users.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-6">
                Beyond feature improvements, collaborating on the solution garnered buy in from users, with one BridgeBox facilitator noting "[Rural responders] realized that the existing process does not work well and were keen to adopt new tools. With the participatory approach, they take ownership in designing." This buy in is crucial not only for efficient emergency response, but also for BridgeBox itself, who work under immense pressure to scale their solutions quickly amid the dramatic climate changes in Thailand.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <p className="text-yellow-800 font-medium">
                  📍 [Placeholder for paper prototype examples and side-by-side sketches vs. final UI]
                </p>
              </div>
            </div>

            {/* AI for Social Good */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">AI for Social Good</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                At participatory design workshops, emergency responders often spoke with frustration of trying to correctly sort cases into categories using a complex set of government guidelines. While time consuming for a human, this well defined task would be simple for an AI model. The feature I proposed would auto-suggest tags for submitted cases by category and urgency. Reports that were automatically tagged as urgent, such as "medical emergency" or "human rights violation" could then be prioritized over more routine issues like "documentation approval needed."
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Because the BridgeBox team only had one engineer, I volunteered to design this feature and build the model that would power it. The feature's goals were to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
                <li>Auto suggest tags for submitted cases by category and urgency. Reports were automatically tagged by urgency: urgent "medical emergency" or "human rights violation" cases were prioritized over lower-urgency issues like "documentation approval needed."</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                First, I designed the flow that would allow users to accept or correct the AI's suggested categories, saving time and creating feedback models where the AI could continually improve its performance with human input. Next, I gathered historical data from BridgeBox cases, with the correct tags for each one based on the handbook. Then, I uploaded the data to &lt;TOOL&gt;, iteratively training and testing the model, until we achieved a satisfactory &lt;name of test&gt;. From here, I passed my work off to the developer for integration.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <p className="text-yellow-800 font-medium">
                  📍 [Placeholder for UI video of AI-driven case categorization]
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed mt-6">
                At the time of writing, BridgeBox is seeking further funding to implement this time saving feature for current and new clients.
              </p>
            </div>
          </section>

          {/* End to End Solution */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-hagrid">End to End Solution</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The end to end designs incorporated co-designed features, AI-assisted case categorization, and a tiered subscription model for organizations with different resource constraints. Key functionality included:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-3 mb-6">
              <li>A mobile app for rural reporters with offline and proxy functionality.</li>
              <li>A desktop interface for responders to manage cases, with AI-driven case prioritization.</li>
              <li>A "Bridge Alert" feature to send early warnings and critical announcements through mass text messages and app announcements</li>
            </ul>
          </section>

          {/* Impact */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-hagrid">Impact</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-3 mb-6">
              <li>Concrete features added to the BridgeBox platform within the collaboration period.</li>
              <li>AI categorization tools improved responder efficiency in handling urgent vs. routine cases.</li>
              <li>User adoption and trust increased, with rural participants more confident in using the app after co-design involvement.</li>
              <li>Employees consistently rated participatory design as producing more "realistic and usable" solutions than interviews or focus groups.</li>
            </ul>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
              <p className="text-blue-800 font-medium">
                📍 [Placeholder for "metrics at a glance" graphic: e.g. xx% increase in adoption, xx% faster case triage, 5 participatory workshops]
              </p>
            </div>
          </section>

          {/* Reflection */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-hagrid">Reflection</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              This project reinforced that smart city technologies succeed only when adapted to cultural and infrastructural realities.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Working with BridgeBox, I learned that participatory design — carefully adapted for rural, low-digital-literacy users — could uncover solutions that were both technically feasible and socially resonant. By involving participants directly in sketching, testing, and decision-making, we not only shaped platform features but also built lasting user trust.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              I was drawn to this collaboration for my Fulbright Fellowship because of the opportunity to work on Smart City tech for frontline communities, who bear the brunt of effects from the climate crisis. My approach to designing disaster response tools is so much more than just building software — it's about facilitating trust, participation, and context-sensitive innovation to engrain self-empowered resilience into the communities that need it most.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
              <p className="text-yellow-800 font-medium">
                📍 [Placeholder for final UI screenshots: offline reporting, Bridge Alert, AI case categorization]
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

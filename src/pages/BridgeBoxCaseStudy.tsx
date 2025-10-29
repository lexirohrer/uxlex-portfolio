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
      <Header />
      
      {/* Hero Section - Full Width */}
      <section className="relative bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-200 w-full py-16 max-sm:py-12 overflow-hidden">
        {/* Grainy overlay */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}></div>
        
        {/* Header - No background */}
        <div className="relative z-10 w-full py-8">
          <div className="max-w-[1440px] mx-auto px-[120px] max-md:px-10 max-sm:px-5">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 max-md:text-3xl font-hagrid">
              BridgeBox 
            </h1>
            <p className="text-lg lg:text-xl text-gray-700 font-medium">
              Designing disaster response tools in rural Thailand
            </p>
          </div>
        </div>
        
        <div className="max-w-[1440px] mx-auto px-[120px] max-md:px-10 max-sm:px-5">
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
                    As part of my Fulbright fellowship on Human-Centered Design in Thailand, I collaborated with BridgeBox, a startup developing a communication system for climate disaster response. BridgeBox connects rural "reporters" with urban "responders" (local governments, nonprofits, and employers) through a mobile app and desktop interface.
                  </p>
                </div>

                {/* Role */}
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-2 font-hagrid">Role</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Sole UX/UI Designer, co-workshop facilitator
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
                    src={`${import.meta.env.BASE_URL}BBX cover.png`} 
                    alt="BridgeBox Disaster Response"
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
                As part of my Fulbright fellowship on adapting Participatory Design to Thailand, I collaborated with BridgeBox, a startup developing <strong>a communication system for climate disaster response.</strong> BridgeBox builds a mobile app for rural residents to call for help during disasters like flash flooding, and a desktop software for "responders" (local governments, nonprofits, and employers) to manage and respond to the submitted cases. The high stakes and unique context for rural Thai users made usability a critical priority in this project.
              </p>
          </section>

          {/* Project Goals */}
          <section className="mb-16">
            <h2 className="text-[#403930] text-[32px] font-bold mb-8 font-hagrid">Project Goals</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-yellow-50 p-6 rounded-2xl flex flex-col items-start text-left h-full">
                <div className="flex items-center justify-center w-12 h-12 bg-[#F7E59E] text-[#403E33] rounded-full text-xl font-bold mb-4">🏆</div>
                <h4 className="text-[#403930] text-2xl font-bold mb-3">Adapt HCD Methods</h4>
                <p className="text-[#403930] text-md">Adapt Design Research methods like participatory design to Thai cultural contexts as part of my Fulbright research.</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-2xl flex flex-col items-start text-left h-full">
                <div className="flex items-center justify-center w-12 h-12 bg-[#FDEFB4] text-[#403930] rounded-full text-xl font-bold mb-4">🏆</div>
                <h4 className="text-[#403930] text-2xl font-bold mb-3">Increase Access</h4>
                <p className="text-[#403930] text-md">Make BridgeBox more user-friendly and accessible to rural users with lower digital literacy rates.</p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-2xl flex flex-col items-start text-left h-full">
                <div className="flex items-center justify-center w-12 h-12 bg-[#F7E59E] text-[#403930] rounded-full text-xl font-bold mb-4">🏆</div>
                <h4 className="text-[#403930] text-2xl font-bold mb-3">Integrate Responsible AI</h4>
                <p className="text-[#403930] text-md">Design AI support features to help responders categorize and prioritize disaster reports, so they can focus on the most urgent cases.</p>
              </div>
            </div>
          </section>

          {/* Project Process */}
          <section className="mb-16">
            <h2 className="text-[#403930] text-[32px] font-bold mb-8 font-hagrid">Project Process</h2>
            <p className="text-[#403930] text-lg mb-6">
              Durign this project, I planned a series of participatory design workshops for rural Thai users, trained BridgeBox employees to faciliate design workshops, synthesized workshop results, and produced the final UI designs for implementation. During the 10 month partnership, we:
            </p>
            
            {/* Process graphic */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-[#E6F0F7] p-6 rounded-2xl">
                <div className="flex items-center justify-center w-12 h-12 bg-[#557592] text-white rounded-full text-xl font-bold mb-4">1</div>
                <h4 className="text-[#403930] text-2xl font-bold mb-3">Planned co-design workshops</h4>
                <p className="text-[#403930] text-md">First, we decided on which participatory methods would best elicit honest critique and leverage Thai collectivist cultural strengths among</p>
              </div>
              
              <div className="bg-[#E6F0F7] p-6 rounded-2xl">
                <div className="flex items-center justify-center w-12 h-12 bg-[#557592] text-white rounded-full text-xl font-bold mb-4">2</div>
                <h4 className="text-[#403930] text-2xl font-bold mb-3">Training local facilitators</h4>
                <p className="text-[#403930] text-md">Next, I trained Thai collaborators in workshop facilitation to overcome language barriers, and ensure they could reuse these skills after our partnership ended. </p>
              </div>

              <div className="bg-[#E6F0F7] p-6 rounded-2xl">
                <div className="flex items-center justify-center w-12 h-12 bg-[#557592] text-white rounded-full text-xl font-bold mb-4">3</div>
                <h4 className="text-[#403930] text-2xl font-bold mb-3">Ran Co-design workshops </h4>
                <p className="text-[#403930] text-md">Co-designed features with rural users through paper prototyping and generative sketching activities. Iterated on these workshops as we found what worked and didn't.</p>
              </div>

              <div className="bg-[#E6F0F7] p-6 rounded-2xl">
                <div className="flex items-center justify-center w-12 h-12 bg-[#557592] text-white rounded-full text-xl font-bold mb-4">4</div>
                <h4 className="text-[#403930] text-2xl font-bold mb-3">Designed UI & AI features</h4>
                <p className="text-[#403930] text-md">I overhauled the UI based on user-generated designs, and built an ML models to auto-categorize emergency cases by urgency</p>
              </div>
            </div>

            <p className="text-[#403930] text-lg mb-6">
              Results from this 10 month process included:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">
                  User-generated features such as offline emergency reporting, proxy reporting for non-smartphone users, and a "Bridge Alert" function for critical announcements.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">
                  AI support to auto-categorize cases by urgency, helping responders prioritize between life-threatening issues and routine requests.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">
                  Stronger trust and confidence among rural users in adopting new tools for disaster communication.
                </p>
              </div>
            </div>
            
            {/* Why participatory design? */}
            <div className="mb-12">
              <h3 className="text-[#403930] text-2xl font-bold mb-6">Why participatory design?</h3>
              <p className="text-[#403930] text-lg mb-6">
                Past research and design at BridgeBox relied on surveys and interviews, but these methods often yielded little more than confirmation of expected issues. Participatory approaches were chosen for two key reasons:
              </p>
              <ol className="list-decimal list-outside text-[#403930] text-lg space-y-3 ml-6 pl-2 mb-6">
                <li>To gather honest critique despite Thailand's culturally engrained indirect feedback tendencies</li>
                <li>To play to collectivist cultural strengths. Thai social values are heavily focused on building trustworthy relationships and amicable collaboration, making this context a particularly good fit for participatory design workshops</li>
              </ol>
            </div>

            {/* Running workshops in rural contexts */}
            <div className="mb-12">
              <h3 className="text-[#403930] text-2xl font-bold mb-6">Running workshops in rural contexts</h3>
              <p className="text-[#403930] text-lg mb-6">
                These workshops were conducted with two partner organizations – the Human Rights Development Foundation (HRDF), and the Songkhla Disaster Center. At each organization, employees joined in 3 participatory design workshops, structured as follows: 
              </p>
              <ol className="list-decimal list-outside text-[#403930] text-lg space-y-3 ml-6 pl-2 mb-6">
                <li><strong>Workshop 1:</strong> Usability testing of the existing BridgeBox app</li>
                <li><strong>Workshop 2:</strong> Community dreaming exercises & feature prioritization</li>
                <li><strong>Workshop 3:</strong> Generative sketching and co-design of new features</li>
              </ol>
              <p className="text-[#403930] text-lg mb-6">
                Both contexts had to be structured carefully; At HRDF, lawyers were working to address human rights violations for migrant and rural workers across many site. In Songkhla, frequent flash flooding paried with the tension from political insurgency created a general mistrust of government and aid responders when climate disasters struck.In both contexts, it was crucial to make the submission UI extremely intuitive for rural users, correctly prioritze the submitted cases, and build trust through open lines of communication open between reporters and responders.
              </p>
               <div className="bg-gray-100 rounded-2xl p-4 mb-6">
                 <div className="relative">
                   <span className="absolute -top-2 -left-2 text-6xl text-[#557592] font-serif leading-none opacity-60">"</span>
                   <p className="text-[#403930] text-2xl pl-6 pt-2 mb-2">These areas, long affected by ongoing conflict, have endured deep pain—where <strong>violence, bombings, and gunfire have sadly become part of daily life.</strong> What makes it even harder is how <strong>this unrest blocks access to help during natural disasters.</strong> Floods often submerge entire neighborhoods, leaving families homeless and vulnerable. In such conditions, delivering timely support becomes incredibly difficult.</p>
                   <p className="text-[#403930] text-xl pl-6 pt-2">— Tanida Disyabut, BridgeBox Founder</p>
                 </div>
               </div>
              <p className="text-[#403930] text-lg mb-6">
                For the first workshop with each organization, we focused on usability testing. I had created a prototype of the website and app, but we quickly realized that our users didn't understand how a "prototype" was different than the real app, and what it could or could not do. They had trouble opening the prototype on their own computers, navigating the systems, and understanding the limitations - so we quickly switched to user testing with live versions of the software.
                </p>

              <p className="text-[#403930] text-lg mb-6"> Some of the workshops were originally hosted as hybrid – however, we quickly saw that this format was going to prevent true collaboration. With rural participants, <strong>in person sessions were essential for building trust and comfort. </strong>Many users weren’t used to juggling tools like Zoom and an online whiteboard, so being face to face with facilitators and using familiar tools like pen and paper put them at ease and allowed them to meaningfully participate without insecurity or confusion. 
              </p>
              
              <div className="flex flex-col md:flex-row gap-6 items-stretch justify-center mb-6 w-full max-w-full md:h-[350px] lg:h-[450px] xl:h-[500px]">
              <img
                src={`${import.meta.env.BASE_URL}BBx_Songkhla1.png`}
                alt="Picture of workshop participants in Songkhla Province"
                className="rounded-xl w-full md:w-auto md:h-full md:max-w-full object-contain"
              />
              <img
                src={`${import.meta.env.BASE_URL}BBx_workshop1.png`}
                alt="Picture of HRDF workshop participants"
                className="rounded-xl w-full md:w-auto md:h-full md:max-w-full object-contain"
              /> 
            </div>
            <div className="bg-gray-100 rounded-2xl p-4 mb-6">
                 <div className="relative">
                   <span className="absolute -top-2 -left-2 text-6xl text-[#557592] font-serif leading-none opacity-60">"</span>
                   <p className="text-[#403930] text-2xl pl-6 pt-2 mb-2">It’s important to have someone in the field with [the participants], because online it’s difficult to get their full attention…in person, you can see the time they spent to write down what they actually think.</p>
                   <p className="text-[#403930] text-xl pl-6 pt-2">— Tanida Disyabut, BridgeBox Founder</p>
                 </div>
               </div>
              <p className="text-[#403930] text-lg mb-6">
                During this first workshop, I faciliated while my collaborator from BridgeBox translated - however, we quickly realized that common technology concepts in English often don't have a clear Thai translation. Moreover, my Thai collaborators from BridgeBox were interested in learning participatory design, so <strong>I took a step back and conducted training for BridgeBox employees in faciliating participatory design workshops</strong>, so that they could lead sessions themselves. By the final workshop, Thai BridgeBox employees were comfortable facilitating sessions independently, and since this project's conclusion have continued to do so.
              </p>
            </div>

            {/* Workshop activities: generative sketching */}
            <div className="mb-12">
              <h3 className="text-[#403930] text-2xl font-bold mb-6">Workshop activities: generative sketching</h3>
              <p className="text-[#403930] text-lg mb-6">
                Workshops used generative sketching to invite participants to imagine solutions beyond the existing software. In this exercise, users were given a situation like "Imagine that there is a flash flood, and you are working on dispatching emergency aid to different areas. Think about the information would you want people calling for help to provide to you to help you dispatch the right aid to the right area. Keeping in mind that reporters need to be able to fill out this information as quickly as possible, what should the screens look like to report an emergency?"
              </p>

              <div className="flex flex-col md:flex-row gap-6 items-stretch justify-center mb-6 w-full max-w-full md:h-[350px] lg:h-[450px] xl:h-[500px]">
              <img
                src={`${import.meta.env.BASE_URL}BBx_sketch1.png`}
                alt="Example 1 of sketching activity"
                className="rounded-xl w-full md:w-auto md:h-full md:max-w-full object-contain"
              />
              <img
                src={`${import.meta.env.BASE_URL}BBx_sketch2.png`}
                alt="Example 2 of sketching activity"
                className="rounded-xl w-full md:w-auto md:h-full md:max-w-full object-contain"
              /> 
            </div>
              <p className="text-[#403930] text-lg mb-6">
              This approach encouraged participants to propose ideas, share what they came up with, compare alternatives, and frame feedback as preferences rather than critiques. The generative sketching activities yielded tangible concepts that met real user needs, many of which BridgeBox later developed. These included:
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#403930] text-lg">
                    Offline emergency reporting for inconsistent connection in rural areas
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#403930] text-lg">
                    Proxy reporting for those without smartphones
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#403930] text-lg">
                    Bridge Alert, a one-way channel for urgent announcements from responders to users
                  </p>
                </div>
              </div>
              <p className="text-[#403930] text-lg mb-6">
                Beyond feature improvements, collaborating on the solution garnered buy in from users, with one BridgeBox facilitator noting:
              </p>
              <div className="bg-gray-100 rounded-2xl p-4 mb-6">
                 <div className="relative">
                   <span className="absolute -top-2 -left-2 text-6xl text-[#557592] font-serif leading-none opacity-60">"</span>
                   <p className="text-[#403930] text-2xl pl-6 pt-2 mb-2">[Rural responders] realized that the existing process does not work well and were keen to adopt new tools. With the participatory approach, they take ownership in designing.</p>
                   <p className="text-[#403930] text-xl pl-6 pt-2">— BridgeBox Facilitator</p>
                 </div>
              </div>
              <p className="text-[#403930] text-lg mb-6">
                This buy in is crucial not only for efficient emergency response, but also for BridgeBox itself, who work under immense pressure to scale their solutions quickly amid the dramatic climate changes in Thailand.
              </p>
            </div>

            {/* AI for Social Good */}
            <div className="mb-12">
              <h3 className="text-[#403930] text-2xl font-bold mb-6">AI for Social Good</h3>
              <p className="text-[#403930] text-lg mb-6">
                At participatory design workshops, emergency responders often spoke with frustration of trying to correctly sort cases into categories using a complex set of government guidelines. While time consuming for a human, this well defined task would be simple for an AI model. The feature I proposed would auto-suggest tags for submitted cases by category and urgency. Reports that were automatically tagged as urgent, such as "medical emergency" or "human rights violation" could then be prioritized over more routine issues like "documentation approval needed."
              </p>
              <p className="text-[#403930] text-lg mb-6">
                Because the BridgeBox team only had one engineer, I volunteered to design this feature and build the model that would power it. The feature's goals were to:
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#403930] text-lg">
                    Auto suggest tags for submitted cases by category and urgency. Reports were automatically tagged by urgency: urgent "medical emergency" or "human rights violation" cases were prioritized over lower-urgency issues like "documentation approval needed."
                  </p>
                </div>
              </div>
              <p className="text-[#403930] text-lg mb-6">
                First, I designed the flow that would allow users to accept or correct the AI's suggested categories, saving time and creating feedback models where the AI could continually improve its performance with human input. Next, I gathered historical data from BridgeBox cases, with the correct tags for each one based on the handbook. Then, I uploaded the data to &lt;TOOL&gt;, iteratively training and testing the model, until we achieved a satisfactory &lt;name of test&gt;. From here, I passed my work off to the developer for integration.
              </p>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
                <p className="text-yellow-800 font-medium">
                  📍 [Placeholder for UI video of AI-driven case categorization]
                </p>
              </div>
              <p className="text-[#403930] text-lg mt-6">
                At the time of writing, BridgeBox is seeking further funding to implement this time saving feature for current and new clients.
              </p>
            </div>
          </section>

          {/* End to End Solution */}
          <section className="mb-16">
            <h2 className="text-[#403930] text-[32px] font-bold mb-8 font-hagrid">End to End Solution</h2>
            <p className="text-[#403930] text-lg mb-6">
              The end to end designs incorporated co-designed features, AI-assisted case categorization, and a tiered subscription model for organizations with different resource constraints. Key functionality included:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">
                  A mobile app for rural reporters with offline and proxy functionality.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">
                  A desktop interface for responders to manage cases, with AI-driven case prioritization.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">
                  A "Bridge Alert" feature to send early warnings and critical announcements through mass text messages and app announcements
                </p>
              </div>
            </div>
          </section>

          {/* Impact */}
          <section className="mb-16">
            <h2 className="text-[#403930] text-[32px] font-bold mb-8 font-hagrid">Outcomes</h2>
            <h3 className="text-[#403930] text-2xl font-bold mb-6">Concrete Changes</h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">
                  Concrete features added to the BridgeBox platform within the collaboration period.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">
                  AI categorization tools improved responder efficiency in handling urgent vs. routine cases.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">
                  User adoption and trust increased, with rural participants more confident in using the app after co-design involvement.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">
                  Employees consistently rated participatory design as producing more "realistic and usable" solutions than interviews or focus groups.
                </p>
              </div>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
              <p className="text-blue-800 font-medium">
                📍 [Placeholder for "metrics at a glance" graphic: e.g. xx% increase in adoption, xx% faster case triage, 5 participatory workshops]
              </p>
            </div>
          </section>

          <h3 className="text-[#403930] text-2xl font-bold mb-6">Methodology Learnings</h3>
          <p className="text-[#403930] text-lg mb-6">
                After each workshop, I reflected not only on the product feedback received, but the methodological blockers to a successful session. Through successive rounds of participatory design, I learned that a successful participatory design workshops for rural users with lower technical literacy should include:
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#403930] text-lg">
                    Activity instructions that are more detailed than typical, and broken in discrete steps (e.g., "First, write the steps you'd take to report an incident. Then, draw the screen you'd expect to see for each step").
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#403930] text-lg">
                    In-person sessions, as many participants were not comfortable juggling tools like Zoom or online whiteboards. Using familiar materials like pen and paper allowed participants to express their ideas more comfortably. The BridgeBox founder, after co-facilitating, noted "It's important to have someone in the field with participants, because online it's difficult to get their full attention… in person, you can see the time they spent to write down what they actually think."
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#403930] text-lg">
                    Flexible pacing with respect to Thailand's polychronic view of time, where building consensus matters more than keeping to strict schedules.
                  </p>
                </div>
              </div>

          {/* Reflection */}
          <section className="mb-16">
            <h2 className="text-[#403930] text-[32px] font-bold mb-8 font-hagrid">Reflection</h2>
            <p className="text-[#403930] text-lg mb-6">
              This project reinforced that smart city technologies succeed only when adapted to cultural and infrastructural realities.
            </p>
            <p className="text-[#403930] text-lg mb-6">
              Working with BridgeBox, I learned that participatory design — carefully adapted for rural, low-digital-literacy users — could uncover solutions that were both technically feasible and socially resonant. By involving participants directly in sketching, testing, and decision-making, we not only shaped platform features but also built lasting user trust.
            </p>
            <p className="text-[#403930] text-lg mb-6">
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

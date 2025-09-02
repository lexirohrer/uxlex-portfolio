import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
const FuseCaseStudy = () => {
  return <>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Work+Sans:wght@400;600;700&family=Plus+Jakarta+Sans:wght@400;700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      <div className="max-w-[1440px] w-full mx-auto my-0 max-md:max-w-[991px] max-sm:max-w-screen-sm">
        <Header />
        <main className="px-[120px] py-[60px] max-md:px-10 max-md:py-[40px] max-sm:px-5">
          
          {/* Hero Section */}
          <section className="bg-gradient-to-br from-rose-100 via-pink-50 to-rose-200 -mx-[120px] px-[120px] py-16 max-md:-mx-10 max-md:px-10 max-sm:-mx-5 max-sm:px-5 max-sm:py-12 mb-16">
            <div className="max-w-6xl mx-auto">
              {/* Header with logo */}
              <div className="flex justify-between items-start mb-12 max-lg:flex-col max-lg:gap-6">
                <div className="flex-1">
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 max-md:text-3xl">
                    Fuse Google Chrome Extension
                  </h1>
                  <p className="text-lg lg:text-xl text-gray-700 font-medium">
                    Designing a second brain for researchers collecting information
                  </p>
                </div>
                
                {/* HCI Logo */}
                
              </div>

              {/* Main content grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                {/* Left content */}
                <div className="space-y-8">
                  {/* Context */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Context</h2>
                    <p className="text-gray-700 leading-relaxed">
                      Fuse is a Google Chrome extension that helps researchers collect and organize information. In summer 2019, I interned and designed for the Fuse team at Carnegie Mellon's Human Computer Interaction Institute.
                    </p>
                  </div>

                  {/* Role */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Role</h2>
                    <p className="text-gray-700 leading-relaxed">
                      UX research and design intern on a 7 person cross functional team
                    </p>
                  </div>

                  {/* Duration */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Duration</h2>
                    <p className="text-gray-700 leading-relaxed">
                      June - August 2019
                    </p>
                  </div>

                  {/* Tools */}
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Tools</h2>
                    <div className="grid grid-cols-3 gap-3 max-w-sm">
                      {/* Sketch */}
                      <div className="bg-white p-3 rounded-lg shadow-sm flex items-center gap-2">
                        <div className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center">
                          <span className="text-white font-bold text-xs">S</span>
                        </div>
                        <span className="text-sm font-medium text-gray-800">Sketch</span>
                      </div>
                      
                      {/* Illustrator */}
                      <div className="bg-white p-3 rounded-lg shadow-sm flex items-center gap-2">
                        <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center">
                          <span className="text-white font-bold text-xs">Ai</span>
                        </div>
                        <span className="text-sm font-medium text-gray-800">Illustrator</span>
                      </div>
                      
                      {/* InDesign */}
                      <div className="bg-white p-3 rounded-lg shadow-sm flex items-center gap-2">
                        <div className="w-8 h-8 bg-pink-600 rounded flex items-center justify-center">
                          <span className="text-white font-bold text-xs">Id</span>
                        </div>
                        <span className="text-sm font-medium text-gray-800">InDesign</span>
                      </div>
                      
                      {/* Photoshop */}
                      <div className="bg-white p-3 rounded-lg shadow-sm flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                          <span className="text-white font-bold text-xs">Ps</span>
                        </div>
                        <span className="text-sm font-medium text-gray-800">Photoshop</span>
                      </div>
                      
                      {/* InVision Studio */}
                      <div className="bg-white p-3 rounded-lg shadow-sm flex items-center gap-2 col-span-2">
                        <div className="w-8 h-8 bg-pink-500 rounded flex items-center justify-center">
                          <span className="text-white font-bold text-xs">in</span>
                        </div>
                        <span className="text-sm font-medium text-gray-800">InVision Studio</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right content - Computer mockup */}
                <div className="flex justify-center lg:justify-end">
                  <div className="relative max-w-lg w-full">
                    {/* iMac-style computer frame */}
                    <div className="bg-gray-800 rounded-t-2xl p-4 relative">
                      {/* Screen bezel */}
                      <div className="bg-black rounded-lg p-1">
                        {/* Screen content */}
                        <div className="bg-white rounded aspect-[4/3] relative overflow-hidden">
                          {/* Browser UI */}
                          <div className="bg-gray-100 h-8 flex items-center px-4 border-b">
                            <div className="flex gap-2">
                              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                            </div>
                          </div>
                          
                          {/* Google Scholar interface */}
                          <div className="p-6 h-full bg-white">
                            <div className="text-center mb-6">
                              <div className="text-2xl font-bold text-blue-600 mb-2">Google Scholar</div>
                              <div className="w-64 h-8 bg-gray-100 rounded-full mx-auto border"></div>
                              <div className="text-xs text-gray-500 mt-2">Stand on the shoulders of giants</div>
                            </div>
                            
                            {/* Fuse extension panel */}
                            <div className="absolute top-16 right-4 w-48 bg-purple-100 border-2 border-purple-300 rounded-lg p-3 shadow-lg">
                              <div className="text-xs font-bold text-purple-800 mb-2">Welcome to Fuse!</div>
                              <div className="space-y-2">
                                <div className="bg-white p-2 rounded text-xs">Organize Content</div>
                                <div className="bg-white p-2 rounded text-xs">Save Research</div>
                                <div className="bg-purple-200 p-2 rounded text-xs">Create Project</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Stand */}
                    <div className="bg-gray-300 h-8 w-32 mx-auto rounded-b-lg"></div>
                    <div className="bg-gray-400 h-4 w-48 mx-auto rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Background */}
          <section className="mb-16">
            <h2 className="text-[#403930] text-[32px] font-bold mb-8">Background</h2>
            <p className="text-[#403930] text-lg mb-6">
              For summer 2019, I relocated to Pittsburgh to work in Carnegie Mellon's <strong>Human Computer Interaction Institute (HCII)</strong> as a <strong>UX research intern</strong>. Working closely with Dr. Aniket Kittur and his team of talented researchers, I assisted in developing <strong>Fuse: a chrome extension</strong> to <strong>help researchers collect and organize information.</strong>
            </p>
            
            <p className="text-[#403930] text-lg mb-6">
              This video shows an overview of our extension and the potential it holds for supporting sensemaking throughout various stages of the research process. To download the fuse extension, <strong>visit the Fuse website at getfuse.io.</strong>
            </p>
            
            <div className="bg-gray-100 p-8 rounded-2xl text-center mb-8">
              <p className="text-[#557592] text-lg italic">📍 [Placeholder for embedded video: "Welcome to Fuse" overview video]</p>
            </div>
            
            <p className="text-[#403930] text-lg mb-6">
              <strong>My contributions throughout the summer revolved around three key projects:</strong>
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-[#557592] text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">1</div>
                <p className="text-[#403930] text-lg">Onboarding Design and Testing</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-[#557592] text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">2</div>
                <p className="text-[#403930] text-lg">Storyboarding for Prospective Feature Development</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-[#557592] text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">3</div>
                <p className="text-[#403930] text-lg">"Getting Information Out of Fuse" User Research</p>
              </div>
            </div>
            
            <p className="text-[#403930] text-lg">
              I'll explore each of these projects in greater detail below.
            </p>
          </section>

          {/* Onboarding Design and Testing */}
          <section className="mb-16">
            <h2 className="text-[#403930] text-[32px] font-bold mb-8">Onboarding Design and Testing</h2>
            <p className="text-[#403930] text-lg mb-6">
              My biggest project during my summer on the Fuse team was <strong>the start to finish design and testing of a new onboarding sequence.</strong> In past versions of Fuse, there had been no onboarding procedure besides a pop up message encouraging new users to "try capturing and saving content", so this was a first effort at designing an onboarding sequence to introduce users to Fuse.
            </p>
            
            <p className="text-[#403930] text-lg mb-6">
              To approach this task, I began by researching various styles of onboarding. After reading up on situations where different onboarding strategies were more or less successful, <strong>I thought about situations in which users would be introduced to Fuse.</strong> In comparing my research to the situations in which users would first encounter Fuse, I decided to design a Trello-style onboarding. Trello, a web-based list-making application, onboards users by dropping them into a pre-populated board and allowing them to explore the interface organically.
            </p>
            
            <div className="bg-[#E6F0F7] p-6 rounded-2xl mb-8 text-center">
              <button className="bg-[#557592] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4a6b8a] transition-colors">
                ONBOARDING INSIGHTS DOCUMENT
              </button>
            </div>
            
            <p className="text-[#403930] text-lg mb-6">
              <strong>Overarching themes</strong> included balancing "too much clutter and too little information," user difficulties with organizing information, and the "strategic use of GIFs." The first draft was "information heavy" and "overwhelming the user," while the second draft (without GIFs) left users "at a loss for where to direct their attention." The final design "reimplemented GIFs, but did so more strategically to draw users' attention to certain parts of the screen, moving them through the onboarding project without explicitly using a tooltip sequence."
            </p>
            
            <p className="text-[#403930] text-lg mb-6">
              The below video shows the completed onboarding project, and the way a user might scroll through it and interact with the information at first glance.
            </p>
            
            <div className="bg-gray-100 p-8 rounded-2xl text-center mb-8">
              <p className="text-[#557592] text-lg italic">📍 [Placeholder for embedded video: "Fuse Onboarding Demo" showing user interaction with onboarding]</p>
            </div>
            
            <p className="text-[#403930] text-lg mb-6">
              Beyond the introductory onboarding project, <strong>several "example" projects typifying the key use cases we expected with Fuse</strong> were created to show users different ways to organize information:
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">A product comparison example project (comparing different wireless headphone brands)</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">A trip planning example project (showing a completed Fuse project planning a family vacation to Hawaii)</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">An academic research example project (showing how a researcher might organize and save sources for a literature review)</p>
              </div>
            </div>
            
            <p className="text-[#403930] text-lg mb-6">
              New users are dropped into an onboarding project, but their sidebar also contains these three example projects for exploration. The below video shows the way a user might scroll through the product comparison example project.
            </p>
            
            <div className="bg-gray-100 p-8 rounded-2xl text-center">
              <p className="text-[#557592] text-lg italic">📍 [Placeholder for embedded video: "Fuse Example Project Demo" showing product comparison project]</p>
            </div>
          </section>

          {/* Storyboards */}
          <section className="mb-16">
            <h2 className="text-[#403930] text-[32px] font-bold mb-8">Storyboards</h2>
            <p className="text-[#403930] text-lg mb-6">
              My work with storyboards aimed to explore the link between existing or prospective features and the value they bring to our users. To examine these relationships, I created a series of storyboards detailing common challenges that befall researchers. These storyboards illustrate the way Fuse allows users to tackle challenges using existing features, or how they could do so with prospective features.
            </p>
            
            <p className="text-[#403930] text-lg mb-8">
              After creating these storyboards, I conducted interviews with users to determine whether the problems presented were truly valid and disruptive, and if the proposed solutions were feasible and amenable. After holding these in-person interviews and synthesizing early insights, I designed and ran an online survey to reach a wider audience and learn more in relation to those early insights. Testing with boards showcasing existing features allowed us to discover whether these features were realistically used in the predicted ways. Speaking with users about the value of prospective features allowed us to prioritize these features' development in accordance with real user needs.
            </p>
            
            <div className="bg-gray-100 p-8 rounded-2xl text-center">
              <p className="text-[#557592] text-lg italic">📍 [Placeholder for storyboard panels showing onboarding scenarios and user workflows]</p>
            </div>
          </section>

          {/* User Research */}
          <section className="mb-16">
            <h2 className="text-[#403930] text-[32px] font-bold mb-8">User Research: Getting Information Out of Fuse</h2>
            <p className="text-[#403930] text-lg mb-6">
              The sentiment we had noted many times across many interviews, <strong>no one on our research team really understood what this notion meant.</strong> I began by breaking down the overarching research question into more specific questions:
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">What do users mean by "getting their information out of Fuse?"</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">What information do users want to get out of Fuse?</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">What do users want to do with this information once it's out?</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">How does getting their information out contribute to users' higher level goals?</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">Do users want to put this information back into Fuse?</p>
              </div>
            </div>
            
            <p className="text-[#403930] text-lg mb-6">
              My interview protocol, <strong>besides a traditional question and answer format, included an observational process walkthrough.</strong> For the process walkthrough, I asked users to take a source they'd saved in Fuse and go through the motions of moving it to a different application. This portion of the interview allowed me to catch parts of the processes the users themselves were unaware of, and therefore couldn't describe.
            </p>
            
            <p className="text-[#403930] text-lg mb-6">
              Insights from this particular portion of the interview were so valuable that I decided to capture them in their own document, shown below. This insights document shows synthesized process flows for users methods of getting information out of Fuse. Most notably, these process flows allowed me to emphasize the tediousness of some processes our users were following in my presentation to the team.
            </p>
            
            <p className="text-[#403930] text-lg mb-8">
              I synthesized my findings into <strong>two key insights documents</strong> and made them <strong>maximally skimmable and distributed them across the team for future use.</strong>
            </p>
            
            <div className="bg-[#E6F0F7] p-8 rounded-2xl mb-8">
              <h3 className="text-[#403930] text-2xl font-bold text-center mb-6">"Getting Stuff Out of Fuse" Research Insights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-[#403930] text-lg font-semibold mb-4">Research Questions</h4>
                  <p className="text-[#557592] text-sm">What do users mean by...</p>
                </div>
                <div>
                  <h4 className="text-[#403930] text-lg font-semibold mb-4">Insights</h4>
                  <p className="text-[#557592] text-sm mb-4">Two Main Use Cases:</p>
                  <p className="text-[#557592] text-sm mb-4">Taking notes, clips, and links they've saved, and:</p>
                  <div className="space-y-2">
                    <button className="bg-[#557592] text-white px-4 py-2 rounded text-sm">Use Case 1</button>
                    <button className="bg-[#557592] text-white px-4 py-2 rounded text-sm">Use Case 2</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 p-8 rounded-2xl text-center">
              <p className="text-[#557592] text-lg italic">📍 [Placeholder for detailed process flow diagrams showing user methods for getting information out of Fuse]</p>
            </div>
          </section>

          {/* Key Takeaways */}
          <section className="mb-16">
            <h2 className="text-[#403930] text-[32px] font-bold mb-8">Key Takeaways from the Summer</h2>
            <p className="text-[#403930] text-lg mb-8">
              Although my work with the Fuse team was conducted in an academic research setting, it often felt more like a startup environment with so many opportunities to jump in and lend a hand on many different aspects of the product. In this setting, I learned several meaningful takeaways that I know will allow me to better navigate future work environments and contribute to those projects with competence.
            </p>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-[#403930] text-xl font-bold mb-4">Flexibility is key for working in cross functional teams.</h3>
                <p className="text-[#403930] text-lg">
                  In many of my collaborative projects for school, I worked with solely UX designers to create a final prototype that could theoretically be passed on to a development team. With Fuse, our designers and developers were exchanging information daily, and using feedback from each other to iteratively improve our work. With this structure, I grew to understand that the pure version of the User Centered Design process that my schooling has hammered into me isn't realistically implementable, but that incorporating the key elements of that process is still valuable.
                </p>
              </div>
              
              <div>
                <h3 className="text-[#403930] text-xl font-bold mb-4">Good research design includes awareness of your own biases.</h3>
                <p className="text-[#403930] text-lg">
                  Although I've encountered the mantra "you are not the user" in the UX community time and time again, in this case those of us creating the tool actually were the users. Fuse began as a tool to help academic researchers — those who make up the team working on Fuse — and grew into a tool for more general purpose research. This situation made it tempting at times to rely on assumptions drawn from our own habits, and sidestep time consuming user research showing how others do things differently. Rather than relying on our conceptions of "I do it this way and I'm a researcher, so all our researcher users must do it in this way", I made a concerted effort advocate for user research that ensured our product was accessible for a wide range of user workflows.
                </p>
              </div>
              
              <div>
                <h3 className="text-[#403930] text-xl font-bold mb-4">Understanding communication norms in the working environment vastly improves efficiency.</h3>
                <p className="text-[#403930] text-lg">
                  As someone who really likes feedback, adjusting to an industry-like position without grading, peer reviews, and teacher comments was initially difficult. Throughout the course of the internship, I learned to feel out a balance between soliciting valuable feedback while respecting my coworkers' and supervisor's time. In communicating shared goals and articulating prospective projects in multiple ways, I also learned firsthand the value of ensuring that everyone is on the same page before moving forward with a project. In particular, honing this strategy allowed me to solicit meaningful feedback throughout the life cycle of each project and feel more confident about my work's value.
                </p>
              </div>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>;
};
export default FuseCaseStudy;
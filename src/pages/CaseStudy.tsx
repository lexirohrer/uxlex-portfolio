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
        <main className="px-[120px] py-[60px] max-md:px-10 max-md:py-[40px] max-sm:px-5">
          
          {/* Hero Section */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-[#557592] text-[48px] font-bold mb-6 max-md:text-[36px]">
                  QuickBooks Onboarding
                </h1>
                <p className="text-[#403930] text-xl mb-8">
                  Tailoring accounting software onboarding to different mindsets
                </p>
                
                <div className="space-y-6">
                  <div className="bg-[#E6F0F7] p-6 rounded-2xl">
                    <h3 className="text-[#403930] text-lg font-semibold mb-3">Context</h3>
                    <p className="text-[#557592] text-sm">
                      QuickBooks is an accounting and business management software for small business owners. This redesign was one of the first major projects I drove after joining the QuickBooks onboarding team.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-[#E6F0F7] p-4 rounded-2xl">
                      <h4 className="text-[#403930] font-semibold mb-2">Role</h4>
                      <p className="text-[#557592] text-sm">Research co-facilitator</p>
                      <p className="text-[#557592] text-sm">Design lead for the project</p>
                    </div>
                    
                    <div className="bg-[#E6F0F7] p-4 rounded-2xl">
                      <h4 className="text-[#403930] font-semibold mb-2">Duration</h4>
                      <p className="text-[#557592] text-sm">November 2021 - January 2022</p>
                    </div>
                    
                    <div className="bg-[#E6F0F7] p-4 rounded-2xl">
                      <h4 className="text-[#403930] font-semibold mb-2">Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-[#557592] text-white px-3 py-1 rounded-full text-xs">Figma</span>
                        <span className="bg-[#557592] text-white px-3 py-1 rounded-full text-xs">Figjam</span>
                        <span className="bg-[#557592] text-white px-3 py-1 rounded-full text-xs">Usertesting.com</span>
                        <span className="bg-[#557592] text-white px-3 py-1 rounded-full text-xs">Google Suite</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
                    className="w-full max-w-[500px] rounded-2xl shadow-lg"
                    alt="QuickBooks Interface Mockup"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Project Goals */}
          <section className="mb-16">
            <h2 className="text-[#403930] text-[32px] font-bold mb-8">Project Goals</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">
                  Discover how trial users think about onboarding to QuickBooks, compared to users who buy the product for 50% off without a free trial
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">
                  Identify trial users' pain points with the current onboarding experience
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#403930] text-lg">
                  Design an onboarding flow that eliminates these pain points while helping trial users get the most out of their free trial
                </p>
              </div>
            </div>
            <p className="text-[#557592] text-lg mt-6">
              To help achieve these goals, I contributed to and led various phases of the project as it followed a double diamond design process
            </p>
          </section>

          {/* Project Process */}
          <section className="mb-16">
            <h2 className="text-[#403930] text-[32px] font-bold mb-8">Project process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <div className="bg-[#E6F0F7] p-6 rounded-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-[#557592] text-white rounded-full text-xl font-bold mb-4">1</div>
                <h3 className="text-[#403930] text-lg font-bold mb-3">Qual & quant research</h3>
                <ul className="text-[#557592] text-sm space-y-1">
                  <li>• Advised on interview script</li>
                  <li>• Sat in on 8/17 interviews</li>
                  <li>• Helped draft survey with reach of 976 users</li>
                </ul>
              </div>

              <div className="bg-[#E6F0F7] p-6 rounded-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-[#557592] text-white rounded-full text-xl font-bold mb-4">2</div>
                <h3 className="text-[#403930] text-lg font-bold mb-3">Generative brainstorming</h3>
                <ul className="text-[#557592] text-sm space-y-1">
                  <li>• Facilitated 3 working team sessions</li>
                  <li>• Facilitated 1 session with design leadership</li>
                </ul>
              </div>

              <div className="bg-[#E6F0F7] p-6 rounded-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-[#557592] text-white rounded-full text-xl font-bold mb-4">3</div>
                <h3 className="text-[#403930] text-lg font-bold mb-3">User testing</h3>
                <ul className="text-[#557592] text-sm space-y-1">
                  <li>• Ran 4/8 moderated user tests</li>
                  <li>• Set up 6 unmoderated user tests</li>
                </ul>
              </div>

              <div className="bg-[#E6F0F7] p-6 rounded-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-[#557592] text-white rounded-full text-xl font-bold mb-4">4</div>
                <h3 className="text-[#403930] text-lg font-bold mb-3">Final design cycles</h3>
                <ul className="text-[#557592] text-sm space-y-1">
                  <li>• Refined interactions</li>
                  <li>• Created responsive specs</li>
                  <li>• Laid out end to end flow</li>
                </ul>
              </div>
            </div>
            <div className="text-center mt-8">
              <p className="text-[#557592] text-lg">the team aligned on a few core ideas to test</p>
              <div className="flex justify-center mt-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#557592]">
                  <path d="M12 5v14m7-7l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </section>

          {/* Summary */}
          <section className="mb-16">
            <h2 className="text-[#403930] text-[32px] font-bold mb-8">Summary</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-[#403930] text-lg mb-6">
                <strong>50% of new QuickBooks signups come from a 30 day free trial</strong>, but only <strong>16% of those trial customers converted</strong> to a paid subscription after their free trial. Through initial research into this user group, we discovered that the product's onboarding didn't fit their goals for the first month of using QuickBooks - the onboarding focused on lots of manual data entry and setup, while <strong>trial users wanted to explore and evaluate the product's fit without a lot of up front work</strong>.
              </p>
              
              <p className="text-[#403930] text-lg mb-6">
                In short, an onboarding that wasn't designed for the trial mindset was causing these users to abandon the product. As a product designer on the onboarding team, I assisted with the research and led the design of an onboarding experience tailored to meet these trial users' specific needs during their first 30 days using QuickBooks. We started with the following question:
              </p>
              
              <blockquote className="border-l-4 border-[#557592] pl-6 text-[#403930] text-xl font-medium italic mb-6">
                How might we tailor the QuickBooks onboarding flow to reflect trial users needs?
              </blockquote>
              
              <p className="text-[#557592] text-lg">
                The below prototype shows my final solution - read on for more in depth descriptions of the project process to produce these designs.
              </p>
            </div>
          </section>

          {/* Final Design */}
          <section>
            <h2 className="text-[#403930] text-[32px] font-bold mb-8">Final Design</h2>
            <div className="bg-[#E6F0F7] p-8 rounded-2xl">
              <div className="text-center mb-6">
                <div className="inline-flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">QB</span>
                  </div>
                  <span className="text-[#403930] font-semibold">quickbooks</span>
                </div>
                
                <div className="flex justify-center items-center gap-8 mb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">1</div>
                    <span className="text-[#403930] font-medium">Business</span>
                    <div className="w-24 h-1 bg-green-500 rounded"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-400 text-xs font-bold">2</div>
                    <span className="text-gray-400 font-medium">People</span>
                    <div className="w-24 h-1 bg-gray-200 rounded"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-400 text-xs font-bold">3</div>
                    <span className="text-gray-400 font-medium">Get started</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-100 to-green-100 p-8 rounded-xl text-center">
                <h3 className="text-[#403930] text-2xl font-bold mb-4">Tell us about your business</h3>
                <p className="text-[#557592] text-lg mb-8">We'll use this info to get you started in QuickBooks.</p>
                
                <div className="max-w-md mx-auto">
                  <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                    <label className="block text-left text-[#403930] font-medium mb-2">What's your business name?</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#557592]"
                      placeholder="Enter business name"
                    />
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=200&h=200&fit=crop"
                    className="w-32 h-32 object-contain"
                    alt="Business illustration"
                  />
                </div>
              </div>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
};

export default CaseStudy;
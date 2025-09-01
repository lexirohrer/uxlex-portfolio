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
        <main className="px-[120px] py-[60px] max-md:px-10 max-md:py-[40px] max-sm:px-5">
          
          {/* Hero Section */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-[#403930] text-[48px] font-bold mb-6 max-md:text-[36px]">
                  Lexi Rohrer
                </h1>
                <p className="text-[#557592] text-xl mb-8">
                  user experience designer
                </p>
                
                {/* Project Box */}
                <div className="bg-pink-100 p-8 rounded-2xl mb-8 relative">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h2 className="text-red-800 text-[32px] font-bold mb-3">
                        MuvMi: Co-designing Electric Tuk Tuks
                      </h2>
                      <p className="text-[#403930] text-lg">
                        Designing sustainable transportation solutions through community collaboration
                      </p>
                    </div>
                    <div className="ml-6">
                      <div className="bg-red-600 text-white p-3 rounded-lg text-center">
                        <div className="text-sm font-bold">MuvMi</div>
                        <div className="text-xs">Electric</div>
                        <div className="text-xs">Transport</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-[#E6F0F7] p-6 rounded-2xl">
                    <h3 className="text-[#403930] text-lg font-semibold mb-3">Context</h3>
                    <p className="text-[#557592] text-sm">
                      MuvMi is a sustainable transportation startup focused on electric tuk-tuk services in Thailand. This project involved co-designing the user experience for their mobile application and service ecosystem with local communities and drivers.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-[#E6F0F7] p-4 rounded-2xl">
                      <h4 className="text-[#403930] font-semibold mb-2">Role</h4>
                      <p className="text-[#557592] text-sm">UX Designer & Co-design Facilitator</p>
                    </div>
                    
                    <div className="bg-[#E6F0F7] p-4 rounded-2xl">
                      <h4 className="text-[#403930] font-semibold mb-2">Duration</h4>
                      <p className="text-[#557592] text-sm">March - June 2023</p>
                    </div>
                    
                    <div className="bg-[#E6F0F7] p-4 rounded-2xl">
                      <h4 className="text-[#403930] font-semibold mb-2">Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-[#557592] text-white px-3 py-1 rounded-full text-xs">Figma</span>
                        <span className="bg-[#557592] text-white px-3 py-1 rounded-full text-xs">User Research</span>
                        <span className="bg-[#557592] text-white px-3 py-1 rounded-full text-xs">Co-design</span>
                        <span className="bg-[#557592] text-white px-3 py-1 rounded-full text-xs">Prototyping</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop"
                    className="w-full max-w-[500px] rounded-2xl shadow-lg"
                    alt="MuvMi Electric Tuk Tuk"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Background */}
          <section className="mb-16">
            <h2 className="text-[#403930] text-[32px] font-bold mb-8">Background</h2>
            <p className="text-[#403930] text-lg mb-6">
              MuvMi (มูฟมี) is a Thai electric tuk-tuk service that aims to provide sustainable, accessible transportation solutions in urban areas. The company operates with a unique co-design approach, involving local communities, drivers, and passengers in the design process to create a service that truly meets local needs.
            </p>
            
            <p className="text-[#403930] text-lg mb-6">
              The project focused on designing the mobile application experience for both passengers and drivers, while also considering the broader service ecosystem including vehicle design, payment systems, and community engagement.
            </p>
            
            <div className="bg-gray-100 p-8 rounded-2xl text-center mb-8">
              <p className="text-[#557592] text-lg italic">📍 [Placeholder for MuvMi service overview video or interactive prototype]</p>
            </div>
            
            <p className="text-[#403930] text-lg mb-6">
              <strong>Key challenges addressed in this project:</strong>
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-[#557592] text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">1</div>
                <p className="text-[#403930] text-lg">Designing for diverse user groups (passengers, drivers, local communities)</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-[#557592] text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">2</div>
                <p className="text-[#403930] text-lg">Integrating sustainable transportation with local cultural practices</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 bg-[#557592] text-white rounded-full flex items-center justify-center text-sm font-bold mt-1 flex-shrink-0">3</div>
                <p className="text-[#403930] text-lg">Creating accessible technology for users with varying digital literacy</p>
              </div>
            </div>
          </section>

          {/* Co-Design Process */}
          <section className="mb-16">
            <h2 className="text-[#403930] text-[32px] font-bold mb-8">Co-Design Process</h2>
            <p className="text-[#403930] text-lg mb-6">
              The core of this project was a collaborative design process that brought together multiple stakeholders to ensure the solution would work for everyone in the ecosystem. This involved extensive fieldwork, community workshops, and iterative prototyping with real users.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-[#E6F0F7] p-6 rounded-2xl">
                <h3 className="text-[#403930] text-lg font-bold mb-4">Community Engagement</h3>
                <p className="text-[#557592] text-sm mb-4">
                  Conducted workshops with local communities to understand transportation needs, cultural preferences, and accessibility requirements.
                </p>
                <ul className="text-[#557592] text-sm space-y-2">
                  <li>• Neighborhood mapping exercises</li>
                  <li>• Cultural immersion sessions</li>
                  <li>• Accessibility audits</li>
                </ul>
              </div>
              
              <div className="bg-[#E6F0F7] p-6 rounded-2xl">
                <h3 className="text-[#403930] text-lg font-bold mb-4">Driver Collaboration</h3>
                <p className="text-[#557592] text-sm mb-4">
                  Worked directly with tuk-tuk drivers to understand their workflow, challenges, and opportunities for improvement.
                </p>
                <ul className="text-[#557592] text-sm space-y-2">
                  <li>• Ride-along observations</li>
                  <li>• Driver interviews and surveys</li>
                  <li>• Prototype testing sessions</li>
                </ul>
              </div>
              
              <div className="bg-[#E6F0F7] p-6 rounded-2xl">
                <h3 className="text-[#403930] text-lg font-bold mb-4">Passenger Research</h3>
                <p className="text-[#557592] text-sm mb-4">
                  Studied passenger behavior, preferences, and pain points to create an intuitive booking and riding experience.
                </p>
                <ul className="text-[#557592] text-sm space-y-2">
                  <li>• Journey mapping workshops</li>
                  <li>• Usability testing</li>
                  <li>• Accessibility considerations</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-100 p-8 rounded-2xl text-center">
              <p className="text-[#557592] text-lg italic">📍 [Placeholder for co-design workshop photos and community engagement documentation]</p>
            </div>
          </section>

          {/* Design Solutions */}
          <section className="mb-16">
            <h2 className="text-[#403930] text-[32px] font-bold mb-8">Design Solutions</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-[#403930] text-xl font-bold mb-4">Passenger App Experience</h3>
                <p className="text-[#403930] text-lg mb-4">
                  Designed an intuitive mobile application that accommodates users with varying levels of digital literacy, incorporating local language support and cultural design patterns.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#E6F0F7] p-4 rounded-2xl">
                    <h4 className="text-[#403930] font-semibold mb-2">Key Features</h4>
                    <ul className="text-[#557592] text-sm space-y-1">
                      <li>• Simple booking flow with minimal steps</li>
                      <li>• Visual location selection with landmarks</li>
                      <li>• Real-time driver tracking</li>
                      <li>• Multiple payment options</li>
                      <li>• Accessibility features for elderly users</li>
                    </ul>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-2xl text-center">
                    <p className="text-[#557592] text-sm italic">📍 [Placeholder for passenger app screenshots]</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-[#403930] text-xl font-bold mb-4">Driver App Experience</h3>
                <p className="text-[#403930] text-lg mb-4">
                  Created a driver-focused interface that supports efficient route planning, fare management, and communication with passengers while considering the challenges of mobile use while driving.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#E6F0F7] p-4 rounded-2xl">
                    <h4 className="text-[#403930] font-semibold mb-2">Key Features</h4>
                    <ul className="text-[#557592] text-sm space-y-1">
                      <li>• Large touch targets for easy interaction</li>
                      <li>• Voice-guided navigation</li>
                      <li>• Simplified fare calculation</li>
                      <li>• Offline functionality</li>
                      <li>• Battery management for electric vehicles</li>
                    </ul>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-2xl text-center">
                    <p className="text-[#557592] text-sm italic">📍 [Placeholder for driver app screenshots]</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-[#403930] text-xl font-bold mb-4">Service Ecosystem Design</h3>
                <p className="text-[#403930] text-lg mb-4">
                  Designed the broader service experience including vehicle branding, payment systems, and community engagement initiatives that support the sustainable transportation mission.
                </p>
                <div className="bg-gray-100 p-8 rounded-2xl text-center">
                  <p className="text-[#557592] text-lg italic">📍 [Placeholder for service ecosystem diagrams and branding guidelines]</p>
                </div>
              </div>
            </div>
          </section>

          {/* Impact & Results */}
          <section className="mb-16">
            <h2 className="text-[#403930] text-[32px] font-bold mb-8">Impact & Results</h2>
            <p className="text-[#403930] text-lg mb-6">
              The co-design approach resulted in a transportation service that better serves the local community while advancing sustainable mobility goals. The project demonstrated the value of inclusive design processes in creating solutions that work for diverse user groups.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-[#E6F0F7] p-6 rounded-2xl text-center">
                <div className="text-[#557592] text-3xl font-bold mb-2">85%</div>
                <p className="text-[#403930] text-sm font-semibold">User Satisfaction</p>
                <p className="text-[#557592] text-xs mt-2">Among both passengers and drivers</p>
              </div>
              
              <div className="bg-[#E6F0F7] p-6 rounded-2xl text-center">
                <div className="text-[#557592] text-3xl font-bold mb-2">40%</div>
                <p className="text-[#403930] text-sm font-semibold">Reduced Carbon Emissions</p>
                <p className="text-[#557592] text-xs mt-2">Compared to traditional tuk-tuks</p>
              </div>
              
              <div className="bg-[#E6F0F7] p-6 rounded-2xl text-center">
                <div className="text-[#557592] text-3xl font-bold mb-2">200+</div>
                <p className="text-[#403930] text-sm font-semibold">Community Members</p>
                <p className="text-[#557592] text-xs mt-2">Participated in co-design process</p>
              </div>
            </div>
            
            <div className="bg-gray-100 p-8 rounded-2xl text-center">
              <p className="text-[#557592] text-lg italic">📍 [Placeholder for impact metrics dashboard and user testimonials]</p>
            </div>
          </section>

          {/* Key Learnings */}
          <section className="mb-16">
            <h2 className="text-[#403930] text-[32px] font-bold mb-8">Key Learnings</h2>
            <p className="text-[#403930] text-lg mb-8">
              This project reinforced the importance of community-centered design approaches and highlighted how sustainable technology can be successfully integrated into local transportation systems when designed with and for the people who will use it.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-[#403930] text-xl font-bold mb-4">The Power of Co-Design</h3>
                <p className="text-[#403930] text-lg">
                  Involving multiple stakeholders from the beginning led to solutions that were more culturally appropriate, accessible, and sustainable. The co-design process revealed insights that would have been impossible to discover through traditional research methods alone.
                </p>
              </div>
              
              <div>
                <h3 className="text-[#403930] text-xl font-bold mb-4">Sustainability Through Accessibility</h3>
                <p className="text-[#403930] text-lg">
                  Making sustainable transportation accessible to diverse user groups is crucial for adoption. This means considering not just environmental sustainability, but also economic accessibility, cultural relevance, and ease of use for people with varying abilities and digital literacy levels.
                </p>
              </div>
              
              <div>
                <h3 className="text-[#403930] text-xl font-bold mb-4">Local Context Matters</h3>
                <p className="text-[#403930] text-lg">
                  Transportation solutions must be deeply rooted in local context, culture, and existing infrastructure. What works in one city or country may not work in another, making local collaboration essential for successful implementation.
                </p>
              </div>
            </div>
          </section>

        </main>
        <Footer />
      </div>
    </>
  );
};

export default MuvMiCaseStudy; 
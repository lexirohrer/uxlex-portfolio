
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Rohrer-Resume-2025.pdf';
    link.download = 'Rohrer-Resume-2025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="max-w-[1440px] w-full mx-auto my-0 max-md:max-w-[991px] max-sm:max-w-screen-sm relative overflow-hidden bg-white dark:bg-transparent min-h-screen">
        <Header />
        <main className="px-[120px] pt-[120px] pb-[100px] max-md:px-10 max-md:pt-[96px] max-md:pb-[60px] max-sm:px-5 max-sm:pt-[88px] max-sm:pb-[40px] relative z-10">
          <div className="mb-10">
            <div className="flex items-center justify-between mb-6 max-sm:flex-col max-sm:items-start max-sm:gap-4">
              <h1 className="text-[#403930] dark:text-[#EAE8F3] text-[40px] font-semibold font-hagrid">Resume</h1>
              <Button onClick={handleDownload}>
                <Download size={20} />
                Download PDF Resume
              </Button>
            </div>
            <p className="text-[#594F43] dark:text-[#EAE8F3]/90 text-xl mb-8">
              I care about value-driven design that strives for positive social impact. Growing up in a home that hosted 56 exchange students from 16 different countries fostered my love of travel and language learning.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 items-start">
            {/* Left Column: Experience, then Skills */}
            <div className="space-y-7">
              {/* Experience */}
              <div className="relative rounded-3xl border border-white/30 dark:border-white/10 overflow-hidden shadow-xl hover:shadow-[inset_0_2px_8px_rgba(0,0,0,0.15)] dark:hover:shadow-[inset_0_2px_12px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-[0.99] p-8">
                <div>
                  <h2 className="text-gray-800 dark:text-[#EAE8F3] text-2xl font-semibold mb-6 font-hagrid">Experience</h2>
                  <div className="space-y-6">
                  <div>
                    <h3 className="text-gray-800 dark:text-[#EAE8F3] text-xl font-semibold">Fulbright Fellow on Smart City Technology</h3>
                    <p className="text-gray-700 dark:text-[#EAE8F3]/90 font-medium">August 2024 - Present</p>
                    <p className="text-gray-700 dark:text-[#EAE8F3]/90 mt-2">Lived and worked in Bangkok, Thailand on a year long design & research fellowship. Facilitated 15+ participatory design workshops across 5 NGO, private, and public orgs.</p>
                  </div>
                  <div>
                    <h3 className="text-gray-800 dark:text-[#EAE8F3] text-xl font-semibold">Product Designer</h3>
                    <p className="text-gray-700 dark:text-[#EAE8F3]/90 font-medium">Intuit • September 2021 - August 2024</p>
                    <p className="text-gray-700 dark:text-[#EAE8F3]/90 mt-2">Designing onboarding experiences to help small business owners set up and use QuickBooks across web and mobile. Leading the design effort to unify and tailor the QuickBooks onboarding experience across geographic regions.</p>
                  </div>
                  <div>
                    <h3 className="text-gray-800 dark:text-[#EAE8F3] text-xl font-semibold">Design & Communications Director</h3>
                    <p className="text-gray-700 dark:text-[#EAE8F3]/90 font-medium">Basilica Bio • April 2021 - Present</p>
                    <p className="text-gray-700 dark:text-[#EAE8F3]/90 mt-2">Facilitating and participating in environmental justice education workshops. Created Basilica Bio's brand system, communication strategy, and website.</p>
                  </div>
                  <div>
                    <h3 className="text-gray-800 dark:text-[#EAE8F3] text-xl font-semibold">Human Computer Interaction Research Intern</h3>
                    <p className="text-gray-700 dark:text-[#EAE8F3]/90 font-medium">Carnegie Mellon University • June 2019 - September 2019</p>
                    <p className="text-gray-700 dark:text-[#EAE8F3]/90 mt-2">Designed the onboarding flow for the chrome extension by Dr. Aniket Kittur's lab. Planned, recruited for, and conducted concept tests with users on prospective feature development.</p>
                  </div>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="relative rounded-3xl border border-white/30 dark:border-white/10 overflow-hidden shadow-xl hover:shadow-[inset_0_2px_8px_rgba(0,0,0,0.15)] dark:hover:shadow-[inset_0_2px_12px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-[0.99] p-8">
                <div>
                  <h2 className="text-gray-800 dark:text-[#EAE8F3] text-2xl font-semibold mb-6 font-hagrid">Skills</h2>
                  <div className="space-y-4">
                  <div>
                    <h3 className="text-gray-800 dark:text-[#EAE8F3] text-lg font-semibold mb-2">Design & Research</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Figma</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Adobe CC</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Prototyping</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Design Systems</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">User Research</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">User Interviews</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Usability Testing</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">A/B Testing</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-gray-800 dark:text-[#EAE8F3] text-lg font-semibold mb-2">Methods & Strategy</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Design Thinking</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Human-Centered Design</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Service Design</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Design critique</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Storyboarding</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Wireframing</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Content Strategy</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Information Architecture</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-gray-800 dark:text-[#EAE8F3] text-lg font-semibold mb-2">Collaboration & Analysis</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Cross-functional Collaboration</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Stakeholder Management</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Workshop Facilitation</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Product Strategy</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Data Analysis</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Competitive Analysis</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-gray-800 dark:text-[#EAE8F3] text-lg font-semibold mb-2">Technical Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Sketch</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">InVision</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Miro</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Notion</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Python</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">HTML/CSS</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">JavaScript</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-gray-800 dark:text-[#EAE8F3] text-lg font-semibold mb-2">Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">English (Native)</span>
                      <span className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10">Thai (Conversational)</span>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Publications, Education, Contact */}
            <div className="space-y-7">
              {/* Publications */}
              <div className="relative rounded-3xl border border-white/30 dark:border-white/10 overflow-hidden shadow-xl hover:shadow-[inset_0_2px_8px_rgba(0,0,0,0.15)] dark:hover:shadow-[inset_0_2px_12px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-[0.99] p-8">
                <div>
                  <h2 className="text-gray-800 dark:text-[#EAE8F3] text-2xl font-semibold mb-6 font-hagrid">Talks, Publications, Patents</h2>
                  <div className="space-y-6">
                  <div>
                    <h3 className="text-gray-800 dark:text-[#EAE8F3] text-xl font-semibold">Patent IPR-2412979US: Automatic Onboarding to a Computer Application by Scraping Website Data</h3>
                    <p className="text-gray-700 dark:text-[#EAE8F3]/90 font-medium">Patent Application, 2024</p>
                    <p className="text-gray-700 dark:text-[#EAE8F3]/90 mt-2">Automated system for streamlining user onboarding by extracting relevant business information from websites.</p>
                  </div>
                  <div>
                    <h3 className="text-gray-800 dark:text-[#EAE8F3] text-xl font-semibold">Mock to Stock: Let's Jam on a Minimum Lovable Product</h3>
                    <p className="text-gray-700 dark:text-[#EAE8F3]/90 font-medium">Grace Hopper conference, Sept 2023</p>
                    <p className="text-gray-700 dark:text-[#EAE8F3]/90 mt-2">Designed and facilitated a workshop guiding 80+ engineers through Intuit's E2E design process.</p>
                  </div>
                  <div>
                    <h3 className="text-gray-800 dark:text-[#EAE8F3] text-xl font-semibold">Human Centered Principles for Applying Augmented Reality in Manufacturing</h3>
                    <p className="text-gray-700 dark:text-[#EAE8F3]/90 font-medium">Massachusetts Institute of Technology (MIT), January 2019</p>
                    <p className="text-gray-700 dark:text-[#EAE8F3]/90 mt-2">Conference presentation accompanying my primary author publication at MIT's Undergraduate Research Technology Conference.</p>
                  </div>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="relative rounded-3xl border border-white/30 dark:border-white/10 overflow-hidden shadow-xl hover:shadow-[inset_0_2px_8px_rgba(0,0,0,0.15)] dark:hover:shadow-[inset_0_2px_12px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-[0.99] p-8">
                <div>
                  <h2 className="text-gray-800 dark:text-[#EAE8F3] text-2xl font-semibold mb-6 font-hagrid">Education</h2>
                  <div className="space-y-4">
                  <div>
                    <h3 className="text-gray-800 dark:text-[#EAE8F3] text-xl font-semibold">B.S. | Human Centered Design & Engineering</h3>
                    <p className="text-gray-700 dark:text-[#EAE8F3]/90 font-medium">Minor | Linguistics</p>
                    <p className="text-gray-700 dark:text-[#EAE8F3]/90 font-medium">University of Washington, Seattle • 2017-2021</p>
                    <p className="text-gray-700 dark:text-[#EAE8F3]/90 mt-2">GPA: 3.98</p>
                  </div>
                  <div>
                    <h3 className="text-gray-800 dark:text-[#EAE8F3] text-xl font-semibold">UX Certificate in Interaction Design</h3>
                    <p className="text-gray-700 dark:text-[#EAE8F3]/90 font-medium">Nielsen Norman Group, Vancouver • August 2018</p>
                    <p className="text-gray-700 dark:text-[#EAE8F3]/90 mt-2">ID 1025553</p>
                  </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="relative rounded-3xl border border-white/30 dark:border-white/10 overflow-hidden shadow-xl hover:shadow-[inset_0_2px_8px_rgba(0,0,0,0.15)] dark:hover:shadow-[inset_0_2px_12px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-[0.99] p-8">
                <div className="flex flex-row gap-8 items-start">
                  <div className="flex-1 min-w-0">
                    <h2 className="text-gray-800 dark:text-[#EAE8F3] text-2xl font-semibold mb-6 font-hagrid">Contact</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-gray-800 dark:text-[#EAE8F3] text-lg font-semibold">Portfolio</h3>
                        <a href="https://uxlex.com" className="text-gray-700 dark:text-[#EAE8F3]/90 underline hover:text-gray-900 dark:hover:text-white transition-colors">uxlex.com</a>
                      </div>
                      <div>
                        <h3 className="text-gray-800 dark:text-[#EAE8F3] text-lg font-semibold">Email</h3>
                        <a href="mailto:lexirohrer@gmail.com" className="text-gray-700 dark:text-[#EAE8F3]/90 underline hover:text-gray-900 dark:hover:text-white transition-colors">lexirohrer@gmail.com</a>
                      </div>
                      <div>
                        <h3 className="text-gray-800 dark:text-[#EAE8F3] text-lg font-semibold">LinkedIn</h3>
                        <a href="https://linkedin.com/in/alexandra-rohrer/" className="text-gray-700 dark:text-[#EAE8F3]/90 underline hover:text-gray-900 dark:hover:text-white transition-colors">linkedin.com/in/alexandra-rohrer/</a>
                      </div>
                      <div>
                        <h3 className="text-gray-800 dark:text-[#EAE8F3] text-lg font-semibold">Book a Coffee Chat</h3>
                        <a href="https://calendar.app.google/F1HEuEakYHH7GsBbA" className="text-gray-700 dark:text-[#EAE8F3]/90 underline hover:text-gray-900 dark:hover:text-white transition-colors">Schedule a meeting</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Resume;

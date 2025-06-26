
import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/6e809fb2-1d82-4528-bee5-9474a08453fe.png';
    link.download = 'Lexi_Rohrer_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Work+Sans:wght@400;600;700&family=Plus+Jakarta+Sans:wght@400;700&family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div className="max-w-[1440px] w-full mx-auto my-0 max-md:max-w-[991px] max-sm:max-w-screen-sm">
        <Header />
        <main className="px-[120px] py-[60px] max-md:px-10 max-md:py-[40px] max-sm:px-5">
          <div className="mb-10">
            <div className="flex items-center justify-between mb-6 max-sm:flex-col max-sm:items-start max-sm:gap-4">
              <h1 className="text-[#403930] text-[40px] font-semibold">Resume</h1>
              <Button 
                onClick={handleDownload}
                className="bg-[#FCA61F] hover:bg-[#E8951C] text-white px-6 py-2 rounded-lg flex items-center gap-2"
              >
                <Download size={20} />
                Download PDF Resume
              </Button>
            </div>
            <p className="text-[#594F43] text-xl mb-8">
              I care about value-driven design that strives for positive social impact. Growing up in a home that hosted 56 exchange students from 16 different countries fostered my love of travel and language learning.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {/* Left Column: Experience, then Skills */}
            <div className="space-y-6">
              {/* Experience */}
              <div className="bg-[#FFF8F2] p-8 rounded-3xl">
                <h2 className="text-[#403930] text-2xl font-semibold mb-6">Experience</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-[#403930] text-xl font-semibold">Fulbright Fellow on Smart City Technology</h3>
                    <p className="text-[#594F43] font-medium">August 2024 - Present</p>
                    <p className="text-[#594F43] mt-2">Lived and worked in Bangkok, Thailand on a year long design & research fellowship. Facilitated 15+ participatory design workshops across 5 NGO, private, and public orgs.</p>
                  </div>
                  <div>
                    <h3 className="text-[#403930] text-xl font-semibold">Product Designer</h3>
                    <p className="text-[#594F43] font-medium">Intuit • September 2021 - August 2024</p>
                    <p className="text-[#594F43] mt-2">Designing onboarding experiences to help small business owners set up and use QuickBooks across web and mobile. Leading the design effort to unify and tailor the QuickBooks onboarding experience across geographic regions.</p>
                  </div>
                  <div>
                    <h3 className="text-[#403930] text-xl font-semibold">Design & Communications Director</h3>
                    <p className="text-[#594F43] font-medium">Basilica Bio • April 2021 - Present</p>
                    <p className="text-[#594F43] mt-2">Facilitating and participating in environmental justice education workshops. Created Basilica Bio's brand system, communication strategy, and website.</p>
                  </div>
                  <div>
                    <h3 className="text-[#403930] text-xl font-semibold">Human Computer Interaction Research Intern</h3>
                    <p className="text-[#594F43] font-medium">Carnegie Mellon University • June 2019 - September 2019</p>
                    <p className="text-[#594F43] mt-2">Designed the onboarding flow for the chrome extension by Dr. Aniket Kittur's lab. Planned, recruited for, and conducted concept tests with users on prospective feature development.</p>
                  </div>
                </div>
              </div>

              {/* Skills */}
              <div className="bg-[#FFF8F2] p-8 rounded-3xl">
                <h2 className="text-[#403930] text-2xl font-semibold mb-6">Skills</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-[#403930] text-lg font-semibold mb-2">Proficient in</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-[#EDC048] text-[#403930] px-3 py-1 rounded-full text-sm">Figma</span>
                      <span className="bg-[#EDC048] text-[#403930] px-3 py-1 rounded-full text-sm">Adobe CC</span>
                      <span className="bg-[#EDC048] text-[#403930] px-3 py-1 rounded-full text-sm">Prototyping</span>
                      <span className="bg-[#EDC048] text-[#403930] px-3 py-1 rounded-full text-sm">Design critique</span>
                      <span className="bg-[#EDC048] text-[#403930] px-3 py-1 rounded-full text-sm">Storyboarding</span>
                      <span className="bg-[#EDC048] text-[#403930] px-3 py-1 rounded-full text-sm">User Interviews</span>
                      <span className="bg-[#EDC048] text-[#403930] px-3 py-1 rounded-full text-sm">Usability Testing</span>
                      <span className="bg-[#EDC048] text-[#403930] px-3 py-1 rounded-full text-sm">Content Strategy</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[#403930] text-lg font-semibold mb-2">Working knowledge of</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-[#FCA61F] text-white px-3 py-1 rounded-full text-sm">Sketch</span>
                      <span className="bg-[#FCA61F] text-white px-3 py-1 rounded-full text-sm">InVision</span>
                      <span className="bg-[#FCA61F] text-white px-3 py-1 rounded-full text-sm">Competitive Analysis</span>
                      <span className="bg-[#FCA61F] text-white px-3 py-1 rounded-full text-sm">Python</span>
                      <span className="bg-[#FCA61F] text-white px-3 py-1 rounded-full text-sm">HTML/CSS</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Publications, Education, Contact */}
            <div className="space-y-6">
              {/* Publications */}
              <div className="bg-[#FFF8F2] p-8 rounded-3xl">
                <h2 className="text-[#403930] text-2xl font-semibold mb-6">Talks & Publications</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-[#403930] text-xl font-semibold">Mock to Stock: Let's Jam on a Minimum Lovable Product</h3>
                    <p className="text-[#594F43] font-medium">Grace Hopper conference, Sept 2023</p>
                    <p className="text-[#594F43] mt-2">Designed and facilitated a workshop guiding 80+ engineers through Intuit's E2E design process.</p>
                  </div>
                  <div>
                    <h3 className="text-[#403930] text-xl font-semibold">Human Centered Principles for Applying Augmented Reality in Manufacturing</h3>
                    <p className="text-[#594F43] font-medium">Massachusetts Institute of Technology (MIT), January 2019</p>
                    <p className="text-[#594F43] mt-2">Conference presentation accompanying my primary author publication at MIT's Undergraduate Research Technology Conference.</p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="bg-[#FFF8F2] p-8 rounded-3xl">
                <h2 className="text-[#403930] text-2xl font-semibold mb-6">Education</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-[#403930] text-xl font-semibold">B.S. | Human Centered Design & Engineering</h3>
                    <p className="text-[#594F43] font-medium">Minor | Linguistics</p>
                    <p className="text-[#594F43] font-medium">University of Washington, Seattle • 2017-2021</p>
                    <p className="text-[#594F43] mt-2">GPA: 3.98</p>
                  </div>
                  <div>
                    <h3 className="text-[#403930] text-xl font-semibold">UX Certificate in Interaction Design</h3>
                    <p className="text-[#594F43] font-medium">Nielsen Norman Group, Vancouver • August 2018</p>
                    <p className="text-[#594F43] mt-2">ID 1025553</p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-[#FFF8F2] p-8 rounded-3xl">
                <h2 className="text-[#403930] text-2xl font-semibold mb-6">Contact</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-[#403930] text-lg font-semibold">Portfolio</h3>
                    <a href="https://uxlex.com" className="text-[#594F43] underline hover:text-[#403930]">uxlex.com</a>
                  </div>
                  <div>
                    <h3 className="text-[#403930] text-lg font-semibold">Email</h3>
                    <a href="mailto:lexirohrer@gmail.com" className="text-[#594F43] underline hover:text-[#403930]">lexirohrer@gmail.com</a>
                  </div>
                  <div>
                    <h3 className="text-[#403930] text-lg font-semibold">LinkedIn</h3>
                    <a href="https://linkedin.com/in/alexandra-rohrer/" className="text-[#594F43] underline hover:text-[#403930]">linkedin.com/in/alexandra-rohrer/</a>
                  </div>
                  <div>
                    <h3 className="text-[#403930] text-lg font-semibold">Book a Coffee Chat</h3>
                    <a href="https://calendar.app.google/F1HEuEakYHH7GsBbA" className="text-[#594F43] underline hover:text-[#403930]">Schedule a meeting</a>
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

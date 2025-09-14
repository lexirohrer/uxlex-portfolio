
import React from "react";
import CaseStudyCard from "../ui/CaseStudyCard";

const CaseStudies = () => {
  return (
    <section
      id="case-studies"
      className="py-[88px] max-md:py-[60px] max-sm:py-10"
    >

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7">
        <a href="/case-study/quickbooks-onboarding" className="block">
          <CaseStudyCard
            title="QuickBooks Onboarding"
            description="Helping small business owners learn money management"
            tools={["Figma", "Figjam", "Usertesting.com", "Google Suite"]}
          >
            <img
              src="/QB cover.png"
              className="w-full h-full object-contain"
              alt="QuickBooks Onboarding"
            />
          </CaseStudyCard>
        </a>

        <a href="/case-study/muvmi-tuk-tuks" className="block">
          <CaseStudyCard
            title="MuvMi: Co-designing electric Tuk Tuks"
            description="Sustainable mobility for Thai tourists and citizens"
            tools={["Figma", "User Research", "Co-design", "Prototyping", "Workshop Facilitation"]}
          >
            <img
              src="/MuvMi cover.png"
              className="w-full h-full object-contain"
              alt="MuvMi Electric Tuk Tuk"
            />
          </CaseStudyCard>
        </a>

        <a href="/case-study/bridgebox-disaster-response" className="block">
          <CaseStudyCard
            title="Designing for Disaster Response with BridgeBox"
            description="Human-centered design for climate disaster communication in rural Thailand"
            tools={["Figma", "Participatory Design", "User Research", "AI/ML", "Workshop Facilitation", "AI for social good"]}
          >
            <img
              src="/BBX cover.png"
              className="w-full h-full object-contain"
              alt="BridgeBox Disaster Response"
            />
          </CaseStudyCard>
        </a>

        <a href="/case-study/fuse-chrome-extension" className="block">
          <CaseStudyCard
            title="Fuse Google Chrome Extension"
            description="Designing a second brain for researchers collecting information"
            tools={["Sketch", "Illustrator", "InDesign", "Photoshop", "InVision Studio"]}
          >
            <img
              src="/Fuse cover.png"
              className="w-full h-full object-contain"
              alt="Fuse Chrome Extension"
            />
          </CaseStudyCard>
        </a>
      </div>
    </section>
  );
};

export default CaseStudies;

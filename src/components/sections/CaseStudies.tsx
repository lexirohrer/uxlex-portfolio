
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
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
              className="w-full h-full object-cover"
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
              src="/MuvMi.png"
              className="w-full h-full object-cover"
              alt="MuvMi Electric Tuk Tuk"
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
              src="/CMU cover pic.png"
              className="w-full h-full object-contain"
              alt="Fuse Chrome Extension"
            />
          </CaseStudyCard>
        </a>

        <CaseStudyCard
          title="Harvest app"
          description="Putting a seasonal spin on accessible farmers market information"
          tools={["Figma", "Illustrator", "Lucid Chart", "Marvel"]}
        >
          <img
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop"
            className="w-full h-full object-cover"
            alt="Harvest App"
          />
        </CaseStudyCard>
      </div>
    </section>
  );
};

export default CaseStudies;

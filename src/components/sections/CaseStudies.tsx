
import React from "react";
import { useTheme } from "@/contexts/ThemeContext";

const caseStudies = [
  {
    href: "/case-study/quickbooks-onboarding",
    title: "QuickBooks Onboarding",
    description: "Helping small business owners learn money management",
    tools: ["Figma", "Figjam", "Usertesting.com", "Google Suite"],
    image: "QB cover.png",
    imageAlt: "QuickBooks Onboarding"
  },
  {
    href: "/case-study/muvmi-tuk-tuks",
    title: "MuvMi: Co-designing electric Tuk Tuks",
    description: "Sustainable mobility for Thai tourists and citizens",
    tools: ["Figma", "User Research", "Co-design", "Prototyping", "Workshop Facilitation"],
    image: "MuvMi cover.png",
    imageAlt: "MuvMi Electric Tuk Tuk"
  },
  {
    href: "/case-study/bridgebox-disaster-response",
    title: "Designing for Disaster Response with BridgeBox",
    description: "Human-centered design for climate disaster communication in rural Thailand",
    tools: ["Figma", "Participatory Design", "User Research", "AI/ML", "Workshop Facilitation", "AI for social good"],
    image: "BBX cover.png",
    imageAlt: "BridgeBox Disaster Response"
  },
  {
    href: "/case-study/fuse-chrome-extension",
    title: "Fuse Google Chrome Extension",
    description: "Designing a second brain for researchers collecting information",
    tools: ["Sketch", "Illustrator", "InDesign", "Photoshop", "InVision Studio"],
    image: "Fuse cover.png",
    imageAlt: "Fuse Chrome Extension"
  }
];

const CaseStudies = () => {
  const { theme } = useTheme();
  
  return (
    <section
      id="case-studies"
      className="py-[88px] max-md:py-[60px] max-sm:py-10"
    >
      <div className="flex flex-col gap-7">
        {caseStudies.map((study, index) => {
          // Alternate image position: even indices (0, 2) have image on left, odd (1, 3) have image on right
          const imageOnLeft = index % 2 === 0;
          
          // Use dark cover image for QB in dark mode
          const imageSrc = study.image === "QB cover.png" && theme === 'dark' 
            ? "QB_cover_dark.png" 
            : study.image;
          
          return (
            <a
              key={index}
              href={study.href}
              className="block w-full group"
            >
              <div className="relative rounded-3xl border border-white/30 dark:border-white/10 bg-white/20 dark:bg-white/5 backdrop-blur-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-200/20 via-pink-200/20 to-purple-200/20 dark:from-orange-500/10 dark:via-transparent dark:to-purple-500/10 rounded-3xl"></div>
                
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-0 min-h-[400px] md:min-h-[500px]">
                  {/* Image Column */}
                  <div className={`relative ${imageOnLeft ? 'order-1' : 'order-2'} flex items-center justify-center p-6 md:p-10`}>
                    <img
                      src={`${import.meta.env.BASE_URL}${imageSrc}`}
                      className="w-full h-full max-h-[400px] object-contain group-hover:scale-105 transition-transform duration-300"
                      alt={study.imageAlt}
                    />
                  </div>
                  
                  {/* Info Column */}
                  <div className={`relative ${imageOnLeft ? 'order-2' : 'order-1'} flex flex-col justify-center p-8 md:p-12`}>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-[#EAE8F3] mb-4 font-hagrid group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-lg md:text-xl text-gray-700 dark:text-[#EAE8F3]/90 mb-6 leading-relaxed">
                      {study.description}
                    </p>
                    
                    {study.tools && study.tools.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {study.tools.map((tool, toolIndex) => (
                          <span
                            key={toolIndex}
                            className="bg-white/30 dark:bg-white/10 text-gray-800 dark:text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/20 dark:border-white/10"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default CaseStudies;

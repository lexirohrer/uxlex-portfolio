
import React from "react";

const caseStudies = [
  {
    href: "/case-study/quickbooks-onboarding",
    title: "QuickBooks Onboarding",
    description: "Leading the design effort to streamline onboarding for small business owners",
    tools: ["Figma", "Figjam", "Usertesting.com", "Google Suite", "37% metric bump"],
    image: "QB_cover_dark.png",
    imageAlt: "QuickBooks Onboarding"
  },
  {
    href: "/case-study/muvmi-tuk-tuks",
    title: "MuvMi electric Tuk Tuks",
    description: "Co-designed sustainable mobility options with Thai tourists and citizens",
    tools: ["Figma", "User Research", "Co-design", "Prototyping", "Workshop Facilitation"],
    image: "MuvMi cover.png",
    imageAlt: "MuvMi Electric Tuk Tuk"
  },
  {
    href: "/case-study/bridgebox-disaster-response",
    title: "BridgeBox Disaster Response System",
    description: "Overhauled the UI for a climate disaster communication in rural Thailand",
    tools: ["Figma", "Participatory Design", "User Research", "AI/ML", "Workshop Facilitation", "AI for social good"],
    image: "BBX cover.png",
    imageAlt: "BridgeBox Disaster Response"
  },
  {
    href: "/case-study/fuse-chrome-extension",
    title: "Fuse Google Chrome Extension",
    description: "Designed a second brain for researchers making sense of information",
    tools: ["Sketch", "Illustrator", "InDesign", "Photoshop", "InVision Studio"],
    image: "Fuse cover.png",
    imageAlt: "Fuse Chrome Extension"
  }
];

const CaseStudies = () => {
  return (
    <section
      id="case-studies"
      className="py-[88px] max-md:py-[60px] max-sm:py-10"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-7">
        {caseStudies.map((study, index) => {
          // Alternate image position: even indices (0, 2) have image on left, odd (1, 3) have image on right
          const imageOnLeft = index % 2 === 0;
          
          return (
            <a
              key={index}
              href={study.href}
              className="block w-full group"
            >
              <div className="relative rounded-3xl border border-white/10 overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),inset_0_2px_12px_rgba(0,0,0,0.5)] transition-all duration-300 hover:scale-[0.99] bg-[#0A0520]/30" style={{ 
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 8px 24px rgba(0, 0, 0, 0.2)' 
              }}>
                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0 min-h-[400px] lg:min-h-[500px]">
                  {/* Image Column */}
                  <div className={`relative order-1 ${imageOnLeft ? 'lg:order-1' : 'lg:order-2'} flex items-center justify-center p-6 lg:p-10`}>
                    <img
                      src={`${import.meta.env.BASE_URL}${study.image}`}
                      className="w-full h-full max-h-[400px] object-contain"
                      alt={study.imageAlt}
                    />
                  </div>
                  
                  {/* Info Column */}
                  <div className={`relative order-2 ${imageOnLeft ? 'lg:order-2' : 'lg:order-1'} flex flex-col justify-center p-8 lg:p-12`}>
                    <h3 className="text-3xl md:text-4xl font-bold text-[#EAE8F3] mb-4 font-hagrid group-hover:text-white transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-lg md:text-xl text-[#EAE8F3]/90 mb-6 leading-relaxed">
                      {study.description}
                    </p>
                    
                    {study.tools && study.tools.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {study.tools.map((tool, toolIndex) => (
                          <span
                            key={toolIndex}
                            className="bg-[#0A0520]/30 text-[#EAE8F3] px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm border border-white/10"
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
      </div>
    </section>
  );
};

export default CaseStudies;

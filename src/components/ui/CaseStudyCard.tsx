
import React from "react";

interface CaseStudyCardProps {
  title: string;
  description: string;
  context?: string;
  role?: string;
  duration?: string;
  tools?: string[];
  children: React.ReactNode;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  description,
  tools,
  children,
}) => {
  return (
    <article className="relative group bg-white rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer h-[400px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        {children}
      </div>
      
      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300"></div>
      
      {/* Content Overlay */}
      <div className="relative h-full p-10 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="text-white">
          <h3 className="text-white text-[32px] font-semibold mb-2">
            {title}
          </h3>
          <p className="text-white text-2xl font-medium mb-4">
            {description}
          </p>
          
          {tools && tools.length > 0 && (
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <span 
                    key={index}
                    className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default CaseStudyCard;

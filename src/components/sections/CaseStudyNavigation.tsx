import React from "react";
import { Link, useLocation } from "react-router-dom";

interface CaseStudy {
  path: string;
  title: string;
}

const caseStudies: CaseStudy[] = [
  {
    path: "/case-study/quickbooks-onboarding",
    title: "QuickBooks Onboarding"
  },
  {
    path: "/case-study/muvmi-tuk-tuks",
    title: "MuvMi: Co-designing electric Tuk Tuks"
  },
  {
    path: "/case-study/bridgebox-disaster-response",
    title: "Designing for Disaster Response with BridgeBox"
  },
  {
    path: "/case-study/fuse-chrome-extension",
    title: "Fuse Google Chrome Extension"
  }
];

const CaseStudyNavigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Find current index
  const currentIndex = caseStudies.findIndex(
    study => study.path === currentPath
  );
  
  // Get previous and next case studies
  const previousStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextStudy = currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;
  
  // If no match found or no navigation needed, return null
  if (currentIndex === -1 || (!previousStudy && !nextStudy)) {
    return null;
  }

  // Scroll to top when navigating
  const handleNavigation = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <nav className="border-t border-gray-200 dark:border-white/10 pt-8 mt-16 mb-8">
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6 sm:gap-8">
        {/* Previous Case Study */}
        {previousStudy ? (
          <Link
            to={previousStudy.path}
            onClick={handleNavigation}
            className="group flex items-center gap-3 sm:gap-4 flex-1 hover:opacity-80 transition-opacity"
          >
            <div className="flex items-center gap-2 text-gray-500 dark:text-[#EAE8F3]/60 group-hover:text-gray-700 dark:group-hover:text-[#EAE8F3] transition-colors flex-shrink-0">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-400 dark:text-[#EAE8F3]/50 mb-1">Previous project</p>
              <p className="text-sm sm:text-base font-medium text-gray-700 dark:text-[#EAE8F3]/90 group-hover:text-gray-900 dark:group-hover:text-[#EAE8F3] transition-colors line-clamp-2">
                {previousStudy.title}
              </p>
            </div>
          </Link>
        ) : (
          <div className="flex-1"></div>
        )}

        {/* Next Case Study */}
        {nextStudy ? (
          <Link
            to={nextStudy.path}
            onClick={handleNavigation}
            className="group flex items-center gap-3 sm:gap-4 flex-1 sm:text-right hover:opacity-80 transition-opacity"
          >
            <div className="flex-1 min-w-0 order-2 sm:order-1">
              <p className="text-xs text-gray-400 dark:text-[#EAE8F3]/50 mb-1">Next project</p>
              <p className="text-sm sm:text-base font-medium text-gray-700 dark:text-[#EAE8F3]/90 group-hover:text-gray-900 dark:group-hover:text-[#EAE8F3] transition-colors line-clamp-2">
                {nextStudy.title}
              </p>
            </div>
            <div className="flex items-center gap-2 text-gray-500 dark:text-[#EAE8F3]/60 group-hover:text-gray-700 dark:group-hover:text-[#EAE8F3] transition-colors flex-shrink-0 order-1 sm:order-2">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </Link>
        ) : (
          <div className="flex-1"></div>
        )}
      </div>
    </nav>
  );
};

export default CaseStudyNavigation;


import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import CaseStudies from "@/components/sections/CaseStudies";

const Portfolio = () => {
  return (
    <>
      <div className="max-w-[1440px] w-full mx-auto my-0 max-md:max-w-[991px] max-sm:max-w-screen-sm bg-white dark:bg-transparent min-h-screen">
        <Header />
        <main className="px-[120px] pt-[120px] pb-[100px] max-md:px-10 max-md:pt-[96px] max-md:pb-[60px] max-sm:px-5 max-sm:pt-[88px] max-sm:pb-[40px]">
          <div className="mb-10">
            <h1 className="text-[#403930] dark:text-[#EAE8F3] text-[40px] font-semibold mb-1 font-hagrid">Portfolio</h1>
            <p className="text-[#594F43] dark:text-[#EAE8F3]/90 text-xl mb-2">
              Browse the work I've done for corporations, startups, governments and NGOs
            </p>
          </div>
          <CaseStudies />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Portfolio;

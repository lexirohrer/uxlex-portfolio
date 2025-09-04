
import React from "react";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import CaseStudies from "@/components/sections/CaseStudies";
import Testimonials from "@/components/sections/Testimonials";
import SubstackEmbed from "@/components/sections/SubstackEmbed";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Work+Sans:wght@400;600;700&family=Plus+Jakarta+Sans:wght@400;700&family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div className="max-w-[1440px] w-full mx-auto my-0 max-md:max-w-[991px] max-sm:max-w-screen-sm">
        <Header />
        <main>
          <Hero />
          <CaseStudies />

          <Testimonials />
          <SubstackEmbed />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";

const Blog = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Work+Sans:wght@400;600;700&family=Plus+Jakarta+Sans:wght@400;700&family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <div className="max-w-[1440px] w-full mx-auto my-0 max-md:max-w-[991px] max-sm:max-w-screen-sm">
        <Header />
        <main className="px-[120px] py-[100px] max-md:px-10 max-md:py-[60px] max-sm:px-5 max-sm:py-[40px]">
          <div className="mb-10">
            <h1 className="text-[#403930] text-[40px] font-semibold mb-6">Blog</h1>
            <p className="text-[#594F43] text-xl mb-8">
              Thoughts on design, technology, and creative processes. Find inspiration and insights from my journey.
            </p>
          </div>
          
          <div className="w-full">
            <div data-supascribe-embed-id="480238654356" data-supascribe-feed></div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Blog;

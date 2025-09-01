import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";

const Podcast = () => {
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
            <h1 className="text-[#403930] text-[40px] font-semibold mb-6">Podcast</h1>
            <p className="text-[#594F43] text-xl mb-8">
              Listen to my podcast episodes where I talk about design, product management, and technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Podcast episode cards */}
            <div className="bg-[#FFF8F2] p-8 rounded-3xl">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/a202d7d453ef40b4c0f6a38d676bc289c4f859f5"
                  className="w-16 h-16 rounded-full"
                  alt="Guest"
                />
                <div>
                  <h3 className="text-[#403930] text-xl font-semibold">Design Systems</h3>
                  <p className="text-[#594F43]">With Jane Cooper</p>
                </div>
              </div>
              <p className="text-[#594F43] mb-4">
                In this episode, we discuss how design systems improve collaboration between designers and developers.
              </p>
              <button className="flex items-center gap-2 text-[#4E5E80] font-semibold">
                <span>Listen Now</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.5 8.5L15.5 15.5M15.5 8.5L8.5 15.5" stroke="#4E5E80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            <div className="bg-[#FFF8F2] p-8 rounded-3xl">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/14077c8eb9cec2c986999e8bd99920d450545822"
                  className="w-16 h-16 rounded-full"
                  alt="Guest"
                />
                <div>
                  <h3 className="text-[#403930] text-xl font-semibold">Product Management</h3>
                  <p className="text-[#594F43]">With John Smith</p>
                </div>
              </div>
              <p className="text-[#594F43] mb-4">
                Learn about product management methodologies and how to prioritize features effectively.
              </p>
              <button className="flex items-center gap-2 text-[#4E5E80] font-semibold">
                <span>Listen Now</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.5 8.5L15.5 15.5M15.5 8.5L8.5 15.5" stroke="#4E5E80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            <div className="bg-[#FFF8F2] p-8 rounded-3xl">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ad84a347b874af6b6d41d5ac96bea495d0f820a"
                  className="w-16 h-16 rounded-full"
                  alt="Guest"
                />
                <div>
                  <h3 className="text-[#403930] text-xl font-semibold">UX Research</h3>
                  <p className="text-[#594F43]">With Amy Johnson</p>
                </div>
              </div>
              <p className="text-[#594F43] mb-4">
                Discover how to conduct effective user research and apply insights to your designs.
              </p>
              <button className="flex items-center gap-2 text-[#4E5E80] font-semibold">
                <span>Listen Now</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.5 8.5L15.5 15.5M15.5 8.5L8.5 15.5" stroke="#4E5E80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            <div className="bg-[#FFF8F2] p-8 rounded-3xl">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/83f25fe2a593b1986d9244e708fad23def61dc8d"
                  className="w-16 h-16 rounded-full"
                  alt="Guest"
                />
                <div>
                  <h3 className="text-[#403930] text-xl font-semibold">UI Animation</h3>
                  <p className="text-[#594F43]">With Michael Brown</p>
                </div>
              </div>
              <p className="text-[#594F43] mb-4">
                Learn techniques for creating engaging and meaningful UI animations.
              </p>
              <button className="flex items-center gap-2 text-[#4E5E80] font-semibold">
                <span>Listen Now</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.5 8.5L15.5 15.5M15.5 8.5L8.5 15.5" stroke="#4E5E80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Podcast;

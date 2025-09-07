import React, { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    text: "If they asked me to clean a rocketship with a toothbrush, I'd say yes if Lexi was doing it with me. If I put a design dream team together, she's at the top of my list.",
    author: "Zip Lehnus",
    title: "Staff Content Designer"
  },
  {
    id: 2,
    text: "Working with Lexi on the onboarding team for about a year was an incredible experience. She's one of those very rare designers who not only excels at her craft but also uplifts everyone around her with her proactivity, curiosity, and positivity.",
    author: "Grace Kim",
    title: "Senior Product Designer"
  },
  {
    id: 3,
    text: "Lexi's expertise in UX design and feedback collection methods allowed us to engage users deeply and meaningfully, ensuring that our design solutions were grounded in real needs. Her enthusiasm, optimism, and constructive approach made collaboration a joy - I would gladly work with her again.",
    author: "Tanida Disyabut",
    title: "Social Enterprise Founder"
  },
  {
    id: 4,
    text: "Lexi always brings positive energy, proactivity, courage, customer obsession, collaboration, and strong systems thinking to any project she was tasked with. She naturally has a learning mindset and always comes to the table with a strong data-backed POV",
    author: "Womo Iyegha",
    title: "Product Design Leader @ Intuit"
  },
  {
    id: 5,
    text: "Lexi is the definition of a team player – always willing to go the extra mile and contribute to the project's success. She has a strong sense of self-awareness and a desire to learn and grow.",
    author: "Jen Hong",
    title: "Staff Product Designer"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF]">
      <div className="max-w-6xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#403930] text-[40px] font-semibold mb-4 font-hagrid">
            what it's like to work with me:
          </h2>
        </div>

        <div className="relative">
          {/* Testimonial Card */}
          <div className="bg-white rounded-3xl shadow-xl p-12 max-w-4xl mx-auto relative">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 text-6xl text-[#FFDDBF] opacity-60">
              "
            </div>
            
            <div className="relative z-10">
              <p className="text-[#403930] text-xl leading-relaxed mb-8 text-center italic">
                {testimonials[currentIndex].text}
              </p>
              
              <div className="text-center">
                <h4 className="text-[#403930] text-lg font-semibold mb-1">
                  {testimonials[currentIndex].author}
                </h4>
                <p className="text-[#557592] text-base">
                  {testimonials[currentIndex].title}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 z-20"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-[#403930]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 z-20"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-[#403930]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-[#403930] scale-125' 
                    : 'bg-[#D1D5DB] hover:bg-[#9CA3AF]'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

       
        
      </div>
    </section>
  );
};

export default Testimonials; 
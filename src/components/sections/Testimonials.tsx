import React, { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    text: "It is super inspiring to see Lexi grow as a designer and a leader; always bringing positive energy, proactively, courage, customer obsession, collaboration, and strong systems thinking to any project she was tasked with. She naturally has a learning mindset and always comes to the table with a strong data-backed POV; advocating for what's best for the customer and pushing to balance customer and business outcomes.",
    author: "Womo Iyegha",
    title: "Product Design Leader @ Intuit"
  },
  {
    id: 2,
    text: "If I put a design dream team together, Lexi is at the top of my list. There are a few core qualities that Lexi possesses: first, she has great design hygiene. That is, Lexi applies best practices to every project, from designing customer research, to broad iteration and exploration, to an exacting eye for detail. Second, Lexi's positive attitude is infectious. No obstacle or pivot discourages her; she just keeps at it. She builds teams by example; she embraces projects whole-heartedly. Third, Lexi is curious. She is genuinely interested - in design, in culture, in technology - everything is an opportunity to learn more. Lexi thinks big, swings hard, and cares deeply.",
    author: "Zip Lehnus",
    title: "Staff Content Designer"
  },
  {
    id: 3,
    text: "Lexi is the definition of a team player – always willing to go the extra mile and contribute to the project's success. Her communication is clear, concise, and she's incredibly responsive, which is essential in our fast-paced environment. Beyond her strong work ethic, Lexi possesses a genuine passion for improving user experience and meeting customer needs. She confidently leads discussions, drives projects to completion, and proactively engages with a systems mindset. She's also not afraid to ask for guidance when needed, which shows a strong sense of self-awareness and a desire to learn and grow.",
    author: "Jen Hong",
    title: "Staff Product Designer"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

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
          <h2 className="text-[#403930] text-[40px] font-semibold mb-4">
            What People Say About My Work
          </h2>
          <p className="text-[#557592] text-xl max-w-2xl mx-auto">
            Here's what colleagues and managers have shared about working with me
          </p>
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

        {/* Progress Bar */}
        <div className="mt-8 max-w-md mx-auto">
          <div className="w-full bg-[#E5E7EB] rounded-full h-1">
            <div 
              className="bg-[#403930] h-1 rounded-full transition-all duration-1000 ease-out"
              style={{ 
                width: `${((currentIndex + 1) / testimonials.length) * 100}%` 
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 
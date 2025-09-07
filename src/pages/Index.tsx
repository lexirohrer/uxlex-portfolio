
import React from "react";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import AboutMe from "@/components/sections/AboutMe";
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
      {/* Home page content moved here */}
      <div
        className="relative min-h-screen w-full overflow-hidden flex items-start justify-center pt-[120px]"
        data-hero-section
        style={{
          backgroundImage: "url('/bkg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Header />
        {/* matcha-blur.png, 3x size, 2vw from left, behind center widget, flipped on x axis */}
        <img
          src="/matcha-blur.png"
          alt="Matcha"
          className="hidden md:block absolute z-0"
          style={{
            left: '2vw',
            bottom: 0,
            width: '18rem', // 3x original h-24 (6rem)
            height: '18rem',
            transform: 'scaleX(-1)',
          }}
        />
        {/* keyboard-blur.png, 4x size, centered, flush with bottom */}
        <img
          src="/keyboard-blur.png"
          alt="Keyboard"
          className="hidden md:block absolute z-10"
          style={{
            left: '50%',
            transform: 'translateX(-50%)',
            bottom: 0,
            width: '32rem', // 4x original h-24 (6rem)
            height: '32rem',
          }}
        />
        {/* mouse-blur.png, same size, 5vw from right, flush with bottom */}
        <img
          src="/mouse-blur.png"
          alt="Mouse"
          className="hidden md:block absolute z-10"
          style={{
            right: '5vw',
            bottom: 0,
            height: '6rem',
            width: 'auto',
          }}
        />
        {/* Second glass screen - behind and offset */}
        <div className="absolute z-10 w-[1100px] h-[600px] rounded-3xl shadow-2xl border border-white/20 max-lg:w-[85vw] max-lg:h-[450px] max-md:w-[90vw] max-md:h-[350px] bg-white/15 backdrop-blur-lg" style={{
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.12)',
          left: 'calc(50% - 100px)',
          top: 'calc(120px - 40px)',
          transform: 'translateX(-50%)'
        }}>
          {/* Gradient overlay inside card */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 via-white/15 to-purple-200/20 rounded-3xl"></div>
        </div>

        {/* Hero component with new design */}
        <div className="absolute z-20" style={{
          left: '50%',
          top: '120px',
          transform: 'translateX(-50%)'
        }}>
          <Hero />
        </div>
        
        {/* Floating icons anchored to the right of the glass screen */}
        <div className="hidden md:block absolute z-30 space-y-4" style={{
          left: 'calc(50% + 550px + 20px)', // 50% (center) + 550px (half glass width) + 20px (margin)
          top: 'calc(120px + 20px)' // 20px down from top of glass screen
        }}>
          <a href="https://uxlex.substack.com/" target="_blank" rel="noopener noreferrer" className="w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform duration-300">
            <img src="/Substack.png" alt="Substack" className="w-16 h-16 object-contain drop-shadow-lg" />
          </a>
          <a href="https://calendar.app.google/K8owt9w3d5wnVL9B6" target="_blank" rel="noopener noreferrer" className="w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform duration-300">
            <img src="/Calendar.png" alt="Calendar" className="w-16 h-16 object-contain drop-shadow-lg" />
          </a>
          <div className="w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform duration-300">
            <img src="/Spotify - Dark.png" alt="Spotify" className="w-16 h-16 object-contain drop-shadow-lg" />
          </div>
          <div className="w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform duration-300">
            <img src="/Libby.png" alt="Libby" className="w-16 h-16 object-contain drop-shadow-lg" />
          </div>
        </div>
      </div>
      
      {/* Original Index page content */}
      <div className="max-w-[1440px] w-full mx-auto my-0 max-md:max-w-[991px] max-sm:max-w-screen-sm">
        <main>
          <AboutMe />
          <Testimonials />
          <SubstackEmbed />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

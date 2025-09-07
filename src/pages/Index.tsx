
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
      {/* Home page content moved here */}
      <div
        className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-[100px]"
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
        {/* Floating icons on the right side */}
        <div className="hidden md:block absolute right-8 top-1/2 transform -translate-y-1/2 z-30 space-y-4">
          <div className="w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform duration-300">
            <img src="/Substack.png" alt="Substack" className="w-10 h-10 object-contain drop-shadow-lg" />
          </div>
          <div className="w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform duration-300">
            <img src="/Calendar.png" alt="Calendar" className="w-10 h-10 object-contain drop-shadow-lg" />
          </div>
          <div className="w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform duration-300">
            <img src="/Spotify - Dark.png" alt="Spotify" className="w-10 h-10 object-contain drop-shadow-lg" />
          </div>
          <div className="w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform duration-300">
            <img src="/Libby.png" alt="Libby" className="w-10 h-10 object-contain drop-shadow-lg" />
          </div>
        </div>

        {/* Main center widget with glassmorphism effect - increased horizontal margins */}
        <div className="relative z-20 w-[900px] h-[500px] rounded-3xl shadow-2xl border border-white/30 max-lg:w-[80vw] max-lg:h-[400px] max-md:w-[90vw] max-md:h-[300px] bg-white/20 backdrop-blur-lg flex flex-col items-center justify-center text-center px-8" style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)'}}>
          <h1 className="mb-4 max-md:text-4xl">
            Hi I'm Lexi <span className="text-5xl">👋</span>
          </h1>
          <h2 className="mb-2 max-md:text-xl">
            a social impact designer*
          </h2>
          <p className="text-sm text-gray-500 max-w-2xl leading-relaxed max-md:text-xs">
            *I work with social impact focused orgs on UX and service design problems. I wear many hats, most often designer or researcher 🤓
          </p>
        </div>
      </div>
      
      {/* Original Index page content */}
      <div className="max-w-[1440px] w-full mx-auto my-0 max-md:max-w-[991px] max-sm:max-w-screen-sm">
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

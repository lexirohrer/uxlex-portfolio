import React from "react";
import Header from "@/components/layout/Header";

const Home = () => {
  return (
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
      {/* Main center widget with glassmorphism effect */}
      <div className="relative z-20 w-[1200px] h-[700px] rounded-3xl shadow-2xl border border-white/30 max-lg:w-[98vw] max-lg:h-[500px] max-md:w-full max-md:h-[300px] bg-white/20 backdrop-blur-lg" style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)'}}>
        {/* Intentionally left blank: all inner and surrounding elements removed */}
      </div>
    </div>
  );
};

export default Home; 
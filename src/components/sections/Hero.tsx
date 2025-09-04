import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="flex px-[120px] py-[100px] max-md:flex-col max-md:px-10 max-md:py-[60px] max-sm:px-5 max-sm:py-10">
      <div className="flex-1">
        <h1 className="text-[#403930] text-[64px] font-semibold leading-[80px] tracking-[1.28px] mb-10 max-md:text-5xl max-sm:text-4xl font-hagrid">
          <span>I'm Lexi,</span>
          <br />
          <span>A problem solver</span>
          <br />
          <span>and a Storyteller</span>
        </h1>
        <div className="flex gap-4 max-sm:flex-col">
          <Link
            to="/portfolio"
            className="flex items-center gap-3 text-[#F3F2FF] text-2xl font-semibold bg-[#FCA61F] px-10 py-6 rounded-2xl"
          >
            <span>View Portfolio</span>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5f71713a122f9855978132c7230e8d99ce27627" alt="chevron-right" />
          </Link>
          <Link
            to="/resume"
            className="text-[#4D5566] text-2xl font-semibold px-10 py-6 rounded-2xl border-4 border-solid border-[#4D5566]"
          >
            View Resume
          </Link>
        </div>
      </div>
      <div className="relative flex-1">
        <div>
          <div
            dangerouslySetInnerHTML={{
              __html:
                '<svg id="2:5" width="667" height="661" viewBox="0 0 667 661" fill="none" xmlns="http://www.w3.org/2000/svg" class="hero-blob" style="width: 100%; height: auto"> <g filter="url(#filter0_d_2_5)"> <path d="M641 326.5C641 494.671 641 591.607 361.455 631C207.066 631 26 595.816 26 427.645C26 259.474 207.066 22 361.455 22C515.843 22 641 158.329 641 326.5Z" fill="#EDC048"></path> </g> <defs> <filter id="filter0_d_2_5" x="0" y="0" width="667" height="661" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix> <feOffset dy="4"></feOffset> <feGaussianBlur stdDeviation="13"></feGaussianBlur> <feComposite in2="hardAlpha" operator="out"></feComposite> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_5"></feBlend> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_5" result="shape"></feBlend> </filter> </defs> </svg>',
            }}
          />
        </div>
        <div className="absolute w-[340px] h-[340px] right-0 top-0 flex items-center justify-center z-10 max-md:w-[220px] max-md:h-[220px]">
          <div className="rounded-full ring-8 ring-white shadow-2xl p-2 bg-white/0">
            <img
              src="/COB profile.png"
              alt="Profile"
              className="w-full h-full object-contain rounded-full drop-shadow-lg"
            />
          </div>
        </div>
        <div className="absolute shadow-[0px_40px_30px_0px_rgba(25,25,46,0.04)] text-[#5D87A8] text-2xl bg-white px-6 py-4 rounded-2xl right-[20%] top-[20%]">
          🔔 TECH
        </div>
        <div className="absolute shadow-[0px_40px_30px_0px_rgba(25,25,46,0.04)] text-[#5D87A8] text-2xl bg-white px-6 py-4 rounded-2xl right-[10%] top-2/4">
          🎨 DESIGN
        </div>
      </div>
    </section>
  );
};

export default Hero;

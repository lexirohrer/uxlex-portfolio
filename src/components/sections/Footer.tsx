
import React from "react";

const Footer = () => {
  return (
    <footer className="text-center px-0 py-10">
      <div className="mb-10">
        <div className="text-[#403930] text-2xl font-semibold bg-[#E6F0F7] mr-2.5 px-6 py-3 rounded-[10px] inline-block">
          Follow me on
        </div>
        <div className="text-[40px] mb-5">👇</div>
        <div className="flex justify-center gap-5 max-sm:flex-wrap">
          <a href="#" aria-label="Facebook" className="transition-transform duration-300 hover:[transform:rotateZ(180deg)]">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/271da27022739480abbe6e789e12147b4af38a69" className="w-[50px] h-[50px]" alt="Facebook" />
          </a>
          <a href="#" aria-label="Instagram" className="transition-transform duration-300 hover:[transform:rotateZ(180deg)]">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc91a3c76a8535a4156941061d7eb5e5eb0782a7" className="w-[50px] h-[50px]" alt="Instagram" />
          </a>
          <a href="#" aria-label="LinkedIn" className="transition-transform duration-300 hover:[transform:rotateZ(180deg)]">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/94419f4ba7b276af31c84962b9a61581e8ab7be9" className="w-[50px] h-[50px]" alt="LinkedIn" />
          </a>
          <a href="#" aria-label="Twitter" className="transition-transform duration-300 hover:[transform:rotateZ(180deg)]">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a66617870a5d8744fc521f3b18c8839e638dd2c" className="w-[50px] h-[50px]" alt="Twitter" />
          </a>
          <a href="#" aria-label="Discord" className="transition-transform duration-300 hover:[transform:rotateZ(180deg)]">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4bd8828636c0b196b1355102997099a5524f92e2" className="w-[50px] h-[50px]" alt="Discord" />
          </a>
          <a href="#" aria-label="Dribbble" className="transition-transform duration-300 hover:[transform:rotateZ(180deg)]">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/71fbe29c1990dc95594600631bf18402b4acdc22" className="w-[50px] h-[50px]" alt="Dribbble" />
          </a>
          <a href="#" aria-label="Youtube" className="transition-transform duration-300 hover:[transform:rotateZ(180deg)]">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a40c00ae29653431f458adcbcaa1abfbf7b18223" className="w-[50px] h-[50px]" alt="Youtube" />
          </a>
        </div>
      </div>
      <div className="text-[#2B2C34] text-sm">
        © 2022 Made With ❤️ by @samarjiit
      </div>
    </footer>
  );
};

export default Footer;


import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex items-center px-[120px] py-[60px] max-md:flex-col max-md:p-10 max-sm:p-5"
    >
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8df69c137b64898f61d28ac246677c7c5fb18a0" className="w-6/12 h-auto" alt="Contact" />
      <div className="flex-1 px-[60px] py-0 max-md:px-0 max-md:py-10">
        <h2 className="text-[#403930] text-[50px] font-semibold leading-[62.5px] tracking-[1px] mb-10 max-sm:text-4xl">
          Let's work together and make everything super cute and super useful.
        </h2>
        <a
          href="mailto:contact@samar.in"
          className="inline-block text-[#557592] text-2xl font-semibold px-10 py-6 rounded-2xl border-4 border-solid border-[#557592] hover:bg-[#557592] hover:text-white transition-colors"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Contact;

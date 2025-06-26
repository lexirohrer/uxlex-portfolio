
import React from "react";

const Blogs = () => {
  return (
    <section id="blogs" className="px-[120px] py-[60px] max-md:p-10">
      <div className="text-center mb-10">
        <h2 className="text-gray-900 text-[40px] font-semibold mb-2.5">
          BLOGS
        </h2>
        <p className="text-[#557592] text-sm mb-5">
          Find inspiration has never been easier than it is now.
        </p>
        <a
          href="#"
          className="inline-block text-white text-sm bg-[#557592] hover:bg-[#4A6680] px-9 py-5 rounded-[5px] transition-colors"
        >
          VIEW MORE
        </a>
      </div>
      <div className="grid grid-cols-[repeat(4,1fr)] gap-5 max-sm:grid-cols-[repeat(2,1fr)]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a202d7d453ef40b4c0f6a38d676bc289c4f859f5"
          className="w-full h-[200px] object-cover rounded-[20px]"
          alt="Blog 1"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/14077c8eb9cec2c986999e8bd99920d450545822"
          className="w-full h-[200px] object-cover rounded-[20px]"
          alt="Blog 2"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ad84a347b874af6b6d41d5ac96bea495d0f820a"
          className="w-full h-[200px] object-cover rounded-[20px]"
          alt="Blog 3"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/83f25fe2a593b1986d9244e708fad23def61dc8d"
          className="w-full h-[200px] object-cover rounded-[20px]"
          alt="Blog 4"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb531133f43816be159e11688f16206b90f22246"
          className="w-full h-[200px] object-cover rounded-[20px]"
          alt="Blog 5"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/45e9658326de96663b66a58ed9690fcb22dd3fcb"
          className="w-full h-[200px] object-cover rounded-[20px]"
          alt="Blog 6"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8808928824fcfd0e082de0c62a8d898e514dd92"
          className="w-full h-[200px] object-cover rounded-[20px]"
          alt="Blog 7"
        />
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ddc721e59c1764727984117a57715bdea9b00fa9"
          className="w-full h-[200px] object-cover rounded-[20px]"
          alt="Blog 8"
        />
      </div>
    </section>
  );
};

export default Blogs;

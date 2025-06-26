
import React, { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setMessage("Thanks for subscribing!");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="flex flex-col items-center px-0 py-[58px]">
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              '<svg id="2:1293" layer-name="Icon" width="130" height="130" viewBox="0 0 130 130" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="subscribe-icon" style="width: 130px; height: 130px; margin-bottom: 30px"> <circle cx="65" cy="65" r="65" fill="#FFFFFE"></circle> <mask id="mask0_2_1293" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="130" height="130"> <circle cx="65" cy="65" r="65" fill="#FFFFFE"></circle> </mask> <g mask="url(#mask0_2_1293)"> <rect x="24.9668" y="23.2451" width="80.0662" height="106.755" fill="url(#pattern0_2_1293)"></rect> </g> <defs> <pattern id="pattern0_2_1293" patternContentUnits="objectBoundingBox" width="1" height="1"> <use xlink:href="#image0_2_1293" transform="matrix(0.00546448 0 0 0.00409836 -0.00819673 0)"></use> </pattern>  </defs> </svg>',
          }}
        />
      </div>
      <h2 className="text-[#2B2C34] text-4xl font-bold mb-2.5">
        Subscribe For the lastest updates
      </h2>
      <p className="text-[#4D5566] text-xl mb-[30px]">
        Subscribe to newsletter and never miss the new post every week.
      </p>
      {message && <div className="text-green-600 mb-4">{message}</div>}
      <form onSubmit={handleSubmit} className="flex gap-5 max-sm:flex-col">
        <input
          type="email"
          placeholder="Enter your email here...."
          className="text-xl w-[400px] px-[25px] py-[21px] rounded-lg border-2 border-solid border-[#557592] max-sm:w-full focus:outline-none focus:border-[#4A6680]"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="text-white text-xl font-bold bg-[#557592] hover:bg-[#4A6680] px-[23px] py-5 rounded-lg border-[none] transition-colors"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
    </section>
  );
};

export default Subscribe;

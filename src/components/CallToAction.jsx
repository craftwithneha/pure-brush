import React from "react";

const CallToAction = () => {
  return (
    <section className="relative w-full min-h-[579px] flex items-center justify-center lg:justify-start bg-[#E6E1DC] px-6 lg:px-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/Callbg.jpeg"
          alt="Toothbrush Promotion"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-lg 
        text-center md:text-center lg:text-left 
        flex flex-col items-center lg:items-start
        lg:w-1/2 lg:max-w-[600px] mt-16 md:mt-10 lg:mt-0 mb-12">
        <h2 className="text-white text-3xl md:text-5xl font-semibold">
          Get Yours Today!
        </h2>
        <p className="text-white mt-3 text-lg max-w-lg">
          Don't wait to experience the best in oral care! Click 'Buy now' to
          secure your favorites and enjoy a brighter, healthier smile.
        </p>
        
        {/* Button - Below on Mobile with Extra Margin */}
        <div className="mt-10 sm:mt-16 md:mt-8 lg:mt-6 md:flex md:justify-center lg:justify-start w-full">
          <button className="bg-white text-black px-10 py-4 font-medium shadow-md cursor-pointer">
            Buy now with 15% off
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;

import React from 'react'

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-[586px] bg-[url('/Hero.png')] bg-cover bg-center bg-no-repeat text-white 
                 flex flex-col items-center md:items-start justify-center px-6 md:px-[113px] text-center md:text-left"
    >
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl w-full max-w-[416px]">
        Love Your Smile.
      </h1>

      {/* Description */}
      <p className="text-lg md:leading-6 w-full max-w-[419px] mt-4">
        It's a confidence booster. Our easy-to-use applicator ensures even coverage, making it perfect for daily use.
      </p>

      {/* Button */}
      <button className="w-[144px] h-[50px] md:h-[66px] mt-6 bg-white text-black hover:bg-white">
        Shop Now
      </button>
    </section>
  );
}

export default Hero;

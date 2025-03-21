import React from "react";

const FeaturesSection = () => {
  return (
    <section className="w-full">
      <div className="max-w-full mx-auto flex flex-col gap-0">
        
        {/* Feature 1 */}
        <div className="flex flex-col md:flex-row items-center bg-white">
          <img src="/section3(a).png" alt="Improved Oral Health" 
            className="w-full md:w-1/2 h-[458px] object-cover" />
          <div className="flex-1 text-center md:text-left p-8">
            <h1 className="text-[34px] font-[400] leading-[40px] tracking-[0px] ">
              Improved Oral Health
            </h1>
            <p className="text-gray-600 text-[16px] leading-[24px]">
              Maintain good oral hygiene by preventing tooth decay and reducing the risk of gum disease.
            </p>
            <button className="mt-4 px-6 py-2 bg-[#00473E] text-white rounded">Shop Now</button>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col md:flex-row-reverse items-center bg-white">
          <img src="/section3(b).png" alt="Enhanced Appearance" 
            className="w-full md:w-1/2 h-[458px] object-cover" />
          <div className="flex-1 text-center md:text-left p-8">
            <h1 className="text-[34px] font-[400] leading-[40px] tracking-[0px] ">
              Enhanced Appearance
            </h1>
            <p className="text-gray-600 text-[16px] leading-[24px]">
              A whiter, more attractive smile can boost your confidence and leave a positive impression.
            </p>
            <button className="mt-4 px-6 py-2 bg-[#00473E] text-white rounded">Shop Now</button>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col md:flex-row items-center bg-white">
          <img src="/section3(c).png" alt="Fresh Breath" 
            className="w-full md:w-1/2 h-[458px] object-cover" />
          <div className="flex-1 text-center md:text-left p-8">
            <h1 className="text-[34px] font-[400] leading-[40px] tracking-[0px] ">
              Fresh Breath
            </h1>
            <p className="text-gray-600 text-[16px] leading-[24px]">
              Provide a pleasant, long-lasting freshness, contributing to better overall oral hygiene.
            </p>
            <button className="mt-4 px-6 py-2 bg-[#00473E] text-white rounded">Shop Now</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;

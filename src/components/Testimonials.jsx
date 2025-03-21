import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const testimonials = [
  { img: "/img-1.png", text: "It effectively fights cavities, reduces plaque, and promotes overall oral health." },
  { img: "/img-2.png", text: '"Trusted by healthcare professionals, PureBrush is a reliable choice for daily care."' },
  { img: "/img-3.png", text: '"At our store, PureBrush’s toothpaste has consistently been a top-selling product."' },
  { img: "/img-4.png", text: '"It complements our commitment to high-quality, natural products."' },
  { img: "/img-5.png", text: '"It’s a product we recommend to consumers seeking a reliable toothbrush."' }
];

const Testimonials = () => {
  return (
    <section className="w-full bg-[#F8F5ED] py-16 px-8">
      <div className="max-w-[1366px] mx-auto">
        
        {/* Desktop Grid View */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 text-center">
          {testimonials.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex justify-center"> {/* Centering Image */}
                <img src={item.img} alt={`Testimonial ${index + 1}`} className="w-40 h-20 object-contain" />
              </div>
              <p className="text-gray-700 text-lg mt-4 px-8 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Mobile & Tablet Slider */}
        <div className="md:hidden">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index} className="flex flex-col items-center text-center">
                <div className="flex justify-center"> {/* Centering Image */}
                  <img src={item.img} alt={`Testimonial ${index + 1}`} className="w-40 h-20 object-contain" />
                </div>
                <p className="text-gray-700 text-lg mt-4 px-8 leading-relaxed">{item.text}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;


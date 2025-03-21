

import React from "react"; 
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const products = [
  {
    id: 1,
    image: "/card1.png",
    name: "PureClean Toothbrush",
    price: "$138",
    description: "Ultra-soft bristles that gently sweep away plaque and debris."
  },
  {
    id: 2,
    image: "/card2.png",
    name: "Product Name",
    price: "$138",
    description: "A short description of the product or service of the website."
  },
  {
    id: 3,
    image: "/card3.png",
    name: "Product Name",
    price: "$138",
    description: "A short description of the product or service of the website."
  }
];

const ProductSeller = () => {
  return (
    <section className="bg-[#A5B7B0] p-24 text-center">
      <h2 className="text-2xl font-semibold">Explore our best-sellers</h2>
      <p className="text-gray-700 mt-4">
        Each product is crafted with the finest materials and backed by rave reviews from our loyal customers.
      </p>
      
      {/* Slider for Tablet & Mobile */}
      <div className="md:hidden mt-10">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          className="pb-16"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="bg-white shadow-lg p-6 mx-auto max-w-xs sm:max-w-md min-h-[550px] sm:min-h-[600px]">
                <div className="w-full h-64 mb-4">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold mt-4 text-lg">{product.name}</h3>
                  <p className="text-gray-600 mt-4 text-lg">{product.price}</p>
                </div>
                <p className="text-gray-500 text-sm mt-4 text-left leading-relaxed">{product.description}</p>
                <button className="mt-12 bg-[#10332B] text-white py-4 px-4 w-full cursor-pointer">Shop Now</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Swiper Pagination */}
        <div className="swiper-pagination mt-6"></div>
      </div>
      
      {/* Grid for Desktop */}
      <div className="hidden md:grid md:grid-cols-3 gap-6 mt-14 max-w-5xl mx-auto px-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg p-6 max-w-[300px] min-h-[500px] mx-auto">
            <div className="w-full h-64 mb-4">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex justify-between items-center">
              <h3 className="font-semibold mt-4 text-lg">{product.name}</h3>
              <p className="text-gray-600 mt-4 text-lg">{product.price}</p>
            </div>
            <p className="text-gray-500 text-sm mt-4 text-left leading-relaxed">{product.description}</p>
            <button className="mt-12 bg-[#10332B] text-white py-4 px-4 w-full cursor-pointer">Shop Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSeller;

// Swiper Pagination Styling
import "swiper/css/pagination";
import "swiper/css";

const swiperStyles = `
  .swiper-pagination-bullet {
    width: 14px;
    height: 14px;
    background-color: #166534;
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background-color: #065F46;
  }
  .swiper-pagination {
    position: relative;
    bottom: -10px;
    margin-top: 24px;
  }
`;
const style = document.createElement("style");
style.innerHTML = swiperStyles;
document.head.appendChild(style);

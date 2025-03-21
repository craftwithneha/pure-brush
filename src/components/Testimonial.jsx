// import React from "react";
// import { FaStar } from "react-icons/fa";

// const Testimonial = () => {
//   const reviews = [
//     { name: "Sarah Han", text: "After just two weeks, my teeth are noticeably whiter" },
//     { name: "Johny Matt", text: "I've tried many toothbrushes over the years, but PureBrush stands out." },
//     { name: "Amanda Christen", text: "I love that they're made from sustainable materials" },
//   ];

//   return (
//     <section className="w-full bg-[#A3B7B3] py-20 px-10 text-center">
//       <h2 className="text-2xl font-semibold text-gray-900 mb-12">
//         What our clients say
//       </h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {reviews.map((item, index) => (
//           <div key={index} className="flex flex-col items-center">
//             {/* ⭐ Stars */}
//             <div className="flex space-x-1 text-[#00473E] mb-6">
//               {[...Array(5)].map((_, i) => (
//                 <FaStar key={i} />
//               ))}
//             </div>
//             {/* 📌 Review Text */}
//             <p className="text-lg italic text-gray-900 mt-4">"{item.text}"</p>
//             {/* 📝 Author Name */}
//             <p className="text-gray-700 mt-2">- {item.name}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Testimonial;





import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  const reviews = [
    { name: "Sarah Han", text: "After just two weeks, my teeth are noticeably whiter" },
    { name: "Johny Matt", text: "I've tried many toothbrushes over the years, but PureBrush stands out." },
    { name: "Amanda Christen", text: "I love that they're made from sustainable materials" },
  ];

  return (
    <section className="w-full bg-[#A3B7B3] py-20 px-10 text-center">
      <h2 className="text-2xl font-semibold text-gray-900 mb-12">
        What our clients say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 
              sm:border sm:border-[#00473E] sm:rounded-lg 
              sm:w-[90%] sm:mx-auto
              xs:w-[95%] xs:p-8" // Mobile: Wider & More Padding
          >
            {/* ⭐ Stars */}
            <div className="flex space-x-1 text-[#00473E] mb-6">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            {/* 📌 Review Text */}
            <p className="text-lg italic text-gray-900 mt-4">"{item.text}"</p>
            {/* 📝 Author Name */}
            <p className="text-gray-700 mt-2">- {item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;

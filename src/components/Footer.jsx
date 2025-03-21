// import React from "react";
// import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-[#FAF6EE] w-full px-6 md:px-16 py-8">
//       <div className="max-w-[1366px] mx-auto flex flex-col items-center">
//         {/* Brand Name */}
//         <h2 className="text-3xl mt-6 font-semibold text-black">PureBrush</h2>

//         {/* Navigation Links */}
//         <ul className="flex space-x-8 mt-8 text-black text-lg font-medium">
//           <li><a href="#" className="hover:text-[#0E4B42] transition">Categories</a></li>
//           <li><a href="#" className="hover:text-[#0E4B42] transition">Benefits</a></li>
//           <li><a href="#" className="hover:text-[#0E4B42] transition">Best-sellers</a></li>
//           <li><a href="#" className="hover:text-[#0E4B42] transition">About us</a></li>
//         </ul>

//         {/* Subscription and Social Icons - Side by Side */}
//         <div className="flex flex-col md:flex-row justify-between  items-center w-full max-w-3xl mt-18">
//           {/* Subscription Box */}
//           <div className="flex items-center space-x-3">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="border border-gray-500 text-black px-4 py-3 w-72 md:w-96 focus:outline-none focus:border-[#0E4B42]"
//             />
//             <button className="bg-[#0E4B42] text-white px-6 py-3 font-medium cursor-pointer hover:bg-[#09372F] transition">
//               Subscribe
//             </button>
//           </div>

//           {/* Social Icons */}
//           <div className="flex space-x-4 mt-4 md:mt-0">
//             <a href="#" className="text-black text-2xl hover:text-[#E4405F] transition"><FaInstagram /></a>
//             <a href="#" className="text-black text-2xl hover:text-[#25D366] transition"><FaWhatsapp /></a>
//             <a href="#" className="text-black text-2xl hover:text-[#1877F2] transition"><FaFacebook /></a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from "react"; 
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#FAF6EE] w-full px-6 md:px-16 py-8">
      <div className="max-w-[1366px] mx-auto flex flex-col items-center">
        {/* Brand Name */}
        <h2 className="text-3xl mt-6 font-semibold text-black">PureBrush</h2>

        {/* Navigation Links */}
        <ul className="grid grid-cols-2 gap-4 md:flex md:space-x-8 mt-6 text-black text-lg font-medium text-center">
          <li><a href="#" className="hover:text-[#0E4B42] transition">Categories</a></li>
          <li><a href="#" className="hover:text-[#0E4B42] transition">Benefits</a></li>
          <li><a href="#" className="hover:text-[#0E4B42] transition">Best-sellers</a></li>
          <li><a href="#" className="hover:text-[#0E4B42] transition">About us</a></li>
        </ul>

        {/* Subscription and Social Icons */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-3xl mt-8">
          {/* Subscription Box */}
          <div className="flex flex-col md:flex-row items-center w-full md:w-auto space-y-3 md:space-y-0 md:space-x-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="border border-gray-500 text-black px-4 py-3 w-full md:w-96 focus:outline-none focus:border-[#0E4B42]"
            />
            <button className="bg-[#0E4B42] text-white px-6 py-3 font-medium cursor-pointer hover:bg-[#09372F] transition w-full md:w-auto">
              Subscribe
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-black text-2xl hover:text-[#E4405F] transition"><FaInstagram /></a>
            <a href="#" className="text-black text-2xl hover:text-[#25D366] transition"><FaWhatsapp /></a>
            <a href="#" className="text-black text-2xl hover:text-[#1877F2] transition"><FaFacebook /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
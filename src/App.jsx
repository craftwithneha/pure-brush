import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header"; // Import Header
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import FeaturesSection from "./components/FeaturesSection";
import Testimonial from "./components/Testimonial";
import InstagramSection from "./components/InstagramSection";
import ProductSeller from "./components/ProductSeller";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header /> 
      <Hero/>
      <Testimonials/>
      <FeaturesSection/>
      <Testimonial/>
      <InstagramSection/>
      <ProductSeller/>
      <CallToAction/>
      <Footer/>
      <Routes>
        <Route path="/" element={<h1></h1>} />
        <Route path="/benefits" element={<h1></h1>} />
        <Route path="/best-sellers" element={<h1></h1>} />
        <Route path="/shop" element={<h1></h1>} />
      </Routes>
    </>
  );
};

export default App;

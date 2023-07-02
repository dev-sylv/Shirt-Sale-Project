import React from "react";
import Hero from "./Hero";
import ShirtGallery from "./ShirtGallery";
import Features from "./Features";
import SpecialShirts from "./SpecialShirts";
import Products from "./Products";

const HomeScreen = () => {
  return (
    <div>
      <Hero />
      <Features />
      <ShirtGallery />
      <SpecialShirts />
      <Products />
    </div>
  );
};

export default HomeScreen;

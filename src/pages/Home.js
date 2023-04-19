import React from "react";
import FeatureProducts from "../components/FeatureProducts";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import Trusted from "../components/Trusted";

const HomePage = () => {
  return (
    <>
      <HeroSection name="React Store" />
      <FeatureProducts />
      <Services />
      <Trusted />
    </>
  );
};

export default HomePage;

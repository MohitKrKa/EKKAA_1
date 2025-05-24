import React from "react";
import Header from "../../Home/Header/Header";
import Hero from "./Hero";
import ScreenTime from "./ScreenTime/ScreenTime";

import Footer from "../../Footer";
import Navbar from "../../Home/Header/Navbar";
import RefreshRate from "./Specification/components/RefreshRate";
import Sound from "./Specification/components/Sound";
import SlimBezel from "./Specification/components/SlimBezel";
import Inches from "./Specification/components/Inches";



const LedTv = () => {
  return (
    <>
      <div className=" bg-[#000000] overflow-hidden">
        <Navbar />
        <Hero />
        <ScreenTime />
        <RefreshRate/>
    <Sound/>
    <SlimBezel/>
    <Inches/>
        <Footer />
      </div>
    </>
  );
};

export default LedTv;

import React from "react";
import Header from "../../Home/Header/Header";
import Hero from "./Hero";
import ScreenTime from "./ScreenTime/ScreenTime";
import Specs from "./Specification/specs";
import Footer from "../../Footer";
import Navbar from "../../Home/Header/Navbar";

const LedTv = () => {
  return (
    <>
      <div className=" bg-[#000000] overflow-hidden">
        <Navbar />
        <Hero />
        <ScreenTime />
        <Specs />
        <Footer />
      </div>
    </>
  );
};

export default LedTv;

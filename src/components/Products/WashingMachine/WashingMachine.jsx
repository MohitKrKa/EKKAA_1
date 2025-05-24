import React from "react";
import Header from "../../Home/Header/Header";
import Hero from "./Hero";
import About from "./About";
import Flawless from "./Flawless/Flawless";
import Navbar from "../../Home/Header/Navbar";
import WarrantyCoverage from "./WarrantyCoverage";
import Footer from "../../Footer";

const WashingMachine = () => {
  return (
    <>
      <Navbar />
      <div className="overflow-hidden ">
        <Hero />
        <About />
        <Flawless />
        <WarrantyCoverage/>
        <Footer/>
      </div>
    </>
  );
};

export default WashingMachine;

import React from "react";

import Hero from "./Hero";
import Purpose from "./Purpose/Purpose";
import Values from "./Values";
import WhyChooseUs from "./WhyChooseUs";
import Vision from "./Vision";
import Guiding from "./Guiding/Guiding";
import Ideas from "./Ideas";
import Together from "./Together";
import Footer from "../Footer";
import Navbar from "../Home/Header/Navbar";

const About = () => {
  return (
    <>
      <div className="overflow-hidden ">
        <Navbar />
        <Hero />
        <Purpose />
        <Values />
        <WhyChooseUs />
        <Vision />

        <Guiding />

        <Ideas />
        <Together />
        <Footer />
      </div>
    </>
  );
};

export default About;

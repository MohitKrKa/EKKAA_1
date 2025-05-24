import React from "react";
import bg from "/Products/Washing Machine/About/bg.png";
import wm from "/Products/Washing Machine/About/washingMachine.png";
import water from "/Products/Washing Machine/About/water.svg";
import ell from "/Products/Washing Machine/About/ell.svg";
import KnowMore from "./KnowMore";

const About = () => {
  return (
    <div className="relative w-full h-[70vh]   justify-center  flex items-center bebas-neue">
      <div className="absolute top-0 h-full  w-full bg-gradient-to-r from-[#000000]/0 to-[#000000] z-8"/>
      <img src={bg} alt="" className="w-full h-full" />
      <img
        src={water}
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover z-10"
      />
      <div className="absolute  z-30 h-full flex md:flex-row flex-col md:p-32 p-6 items-center  gap-10 ">
        {/* Left side text */}
        <div className="md:w-[58%] ">
          <h2 className="font-[500] md:text-5xl text-2xl md:text-start text-center text-[#FFFFFF]">
            Washing Machines
          </h2>
          <br />
          <p className="text-[#CACACA] text-xs md:text-base md:leading-6 font-[Poppins]">
            At Ekka, we blend comfort, performance, and energy efficiency to
            give your laundry the care it deserves. Designed with advanced
            technology and intelligent features, our machines don't just clean —
            they simplify your routine. With every wash, Ekka delivers
            precision, power, and peace of mind, all wrapped in sleek
            innovation.
          </p>
          <br />
          <KnowMore strokeColor="#FFFFFF" circleColor="#FFFFFF" textColor="#FFFFFF" text="Know more"/>
        </div>

        {/* Right side images */}
        <div className=" relative">
          <img
            src={wm}
            alt=""
            className="w-full object-contain md:h-[50vh] h-[20vh] relative z-10"
          />
          
        </div>
        <img
            src={ell}
            alt=""
            className="absolute right-4 md:flex hidden h-[90vh]   object-contain z-9"
          />
      </div>
    </div>
  );
};

export default About;

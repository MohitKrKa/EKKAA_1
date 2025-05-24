import React from "react";
import im from "/Products/Washing Machine/Flawless/im.png";
import water from "/Products/Washing Machine/Flawless/water.png";
import KnowMore from "../KnowMore";
import SvgAnimation from "./SvgAnimation";

const Flawless = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col justify-center  relative  md:pt-15 md:pl-10 px-6 py-10 font-[Poppins] ">
        <div className="hidden md:flex   w-[50vw]">
          <img src={im} alt="" className="" />
          
        </div>

        <div className="relative md:w-[59vw] w-full md:p-0 p-4">
          <img
            src={water}
            alt=""
            className=" -top-4 -right-6 md:w-90 w-20 absolute"
          />

          <div className="md:w-[40vw]">
            <h2 className="font-[500] md:text-5xl text-3xl text-[#000000] bebas-neue">
              Flawless laundry, in a fraction of the time.
            </h2>
            <br />
            <p className="font-[200] text-sm md:text-base text-[#525B68] leading-6">
              VarioSpeed does the thinking for you. Using intelligent sensors,
              it analyzes the load size and fabric type, then fine-tunes the
              wash cycle to save time without compromising on care. It even
              speeds up detergent activation with a gentle boost in temperature
              — for faster, fresher laundry every time.
            </p>
            <br />
            <KnowMore
              circleColor="#6D6D6D"
              strokeColor="#6D6D6D"
              textColor="#6D6D6D"
              text="Know more"
            />
          </div>

          <div className="hidden md:flex absolute -left-1/4 top-3/8 mt-4">
            <SvgAnimation />
          </div>

          
        </div>

        <div className="flex md:hidden  items-center justify-center">
          <img src={im} alt="" className="w-[50vw]" />
        </div>
      </div>
    </>
  );
};

export default Flawless;

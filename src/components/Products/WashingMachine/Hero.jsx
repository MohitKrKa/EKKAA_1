import React from "react";
import herobg from "/Products/Washing Machine/Hero/herobg.png";
import hero from "/Products/Washing Machine/Hero/hero.png";
import ov from "/Products/Washing Machine/Hero/ov.svg";
import ove from "/About/Hero/over.svg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative md:pt-0 pt-10">
      <img
        src={ove}
        alt=""
        className="absolute -top-1 left-0 w-full h-[20%] z-10 "
      />

      <img src={hero} alt="" className="w-screen md:h-screen object-cover" />

      {/* Details 1 */}
      {/* <div className="absolute top-[19%] left-[28%] flex w-[20vw]bg-opacity-50 text-white p-4 z-20 ">
        <svg
          width="414"
          height="126"
          viewBox="-117 -15 414 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1.60547"
            y1="5.16846"
            x2="209.516"
            y2="5.16846"
            stroke="white"
            stroke-opacity="0.4"
          />
          <line
            x1="209.016"
            y1="92.8843"
            x2="209.016"
            y2="5.6687"
            stroke="white"
            stroke-opacity="0.4"
          />
          <circle cx="4.5144" cy="4.75903" r="3.8894" fill="#D9D9D9" />
          <circle cx="209.515" cy="91.884" r="3.8894" fill="#D9D9D9" />

          <text
            x="-117"
            y="10"
            font-size="18"
            font-weight="600"
            fill="white"
            font-family="SF Pro Display"
            text-anchor="start"
          >
            PCB Assembly
          </text>
        </svg>
      </div> */}

      {/* Details 2 */}
      {/* <div className="absolute top-[37%]  right-[19%] flex bg-opacity-50 text-white p-4 z-20 ">
        <svg
          width="324"
          height="81"
          viewBox="25 -20 190 71"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="158.602"
            y1="43"
            x2="158.602"
            y2="0.668579"
            stroke="white"
            stroke-opacity="0.4"
          />
          <line
            x1="157.973"
            y1="42.5"
            x2="4.00049"
            y2="42.5"
            stroke="white"
            stroke-opacity="0.4"
          />
          <circle cx="159.101" cy="4.55786" r="3.8894" fill="#D9D9D9" />
          <circle cx="3.99976" cy="41.9998" r="3.8894" fill="#D9D9D9" />

          <text
            x="120"
            y="-3"
            font-size="16"
            font-weight="600"
            fill="white"
            font-family="SF Pro Display"
            text-anchor="start"
          >
            Plastic Moulding
          </text>
        </svg>
      </div> */}

      {/* Details 3 */}
      {/* <div className="absolute bottom-[34%]  right-[6%] flex bg-opacity-50 text-white p-4 z-20 ">
        <svg
          width="450"
          height="40"
          viewBox="0 0 355 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="6.60547"
            y1="5.16846"
            x2="214.516"
            y2="5.16846"
            stroke="white"
            stroke-opacity="0.4"
          />
          <circle cx="4.71558" cy="4.55786" r="3.8894" fill="#D9D9D9" />
          <circle cx="210.626" cy="4.55786" r="3.8894" fill="#D9D9D9" />

          <text
            x="220"
            y="9"
            font-size="16"
            font-weight="600"
            fill="white"
            font-family="SF Pro Display"
            text-anchor="start"
          >
            Metal Tub Pressing
          </text>
        </svg>
      </div> */}

      {/* Details 4 */}
      {/* <div className="absolute bottom-[34%]  left-[10%] flex bg-opacity-50 text-white p-4 z-20 ">
        <svg
          width="346"
          height="29"
          viewBox="-130 0 276 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            y1="4.5"
            x2="141.551"
            y2="4.5"
            stroke="white"
            stroke-opacity="0.4"
          />
          <circle cx="141.551" cy="4.8894" r="3.8894" fill="#D9D9D9" />
          <circle cx="4.8894" cy="3.8894" r="3.8894" fill="#D9D9D9" />

          <text
            x="-120"
            y="6"
            font-size="16"
            font-weight="600"
            fill="white"
            font-family="SF Pro Display"
            text-anchor="start"
          >
            Plastic Moulding
          </text>
        </svg>
      </div> */}

      <img src={ov} alt="" className="absolute bottom-0 w-full  z-10" />
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 14,
          delay: 0.3,
        }}
        className="absolute bottom-6 left-1/2 text-center -translate-x-1/2 text-white md:text-7xl text-2xl font-[500] bebas-neue z-20 drop-shadow-md"
      >
        Care for Clothes. Love Your Home.
      </motion.h2>
    </div>
  );
};

export default Hero;

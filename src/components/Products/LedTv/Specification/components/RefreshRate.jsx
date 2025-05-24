import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import refreshRateImage from "/Products/LedTv/Gigantic/RefreshRate/refreshRateImage.png";
import smallscreenImage from "/Products/LedTv/Gigantic/RefreshRate/smallscreenimage.png";
import line from "/Products/LedTv/Gigantic/RefreshRate/line.svg";
import hz from "/Products/LedTv/Gigantic/RefreshRate/60hz.svg";
import hz1 from "/Products/LedTv/Gigantic/RefreshRate/120hz.svg";

const RefreshRate = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    amount: 0.5,
    once: true,
  });

  return (
    <div
      ref={sectionRef}
      className="h-auto mt-5 justify-center font-[SF Pro Display]"
    >
      <div className="flex flex-col items-center">
        <h2 className="bg-gradient-to-r font-[300] p-3 from-[#C1F0A2] to-[#E2F9EF] bg-clip-text text-transparent md:text-7xl text-3xl">
          Next generation refresh rate
        </h2>
        <p className="text-white md:max-w-[52vw] md:p-0 p-5 md:text-center md:text-base text-sm font-[200] leading-relaxed">
          Experience ultra-smooth performance with true 120Hz displays that
          deliver sharp, high-resolution visuals. Whether you're running,
          racing, or in the heat of battle, enjoy seamless gameplay free from
          screen tearing, motion blur, or stutter.
        </p>
      </div>
      <div className="md:hidden mt-4">
        <img src={smallscreenImage} alt="" className="w-full h-full" />
      </div>

      <div className=" hidden md:flex relative  p-20 justify-center items-center">
        <img src={hz} alt="" className="absolute top-30 z-1 left-30" />

        <div className=" relative w-full h-[90vh] overflow-hidden">
          <img
            src={refreshRateImage}
            alt=""
            className="w-full h-full object-cover"
          />

          {/* Animated Overlay */}
          <motion.div
            initial={{ width: "0%" }}
            animate={
              isInView ? { width: ["0%", "100%", "50%"] } : { width: "0%" }
            }
            transition={{
              duration: 2,
              times: [0, 0.5, 1],
              ease: "easeInOut",
            }}
            className="absolute top-0 left-0 h-full backdrop-blur-xs "
          />

          {/* Line moves along with overlay */}
          <motion.img
            src={line}
            alt=""
            initial={{ left: "0%" }}
            animate={
              isInView ? { left: ["0%", "100%", "50%"] } : { left: "0%" }
            }
            transition={{
              duration: 2,
              times: [0, 0.5, 1],
              ease: "easeInOut",
            }}
            className="h-[91vh]  absolute top-0 transform -translate-x-1/2"
            style={{ position: "absolute" }}
          />
        </div>

        <img src={hz1} alt="" className="absolute right-30 top-30" />
      </div>
    </div>
  );
};

export default RefreshRate;

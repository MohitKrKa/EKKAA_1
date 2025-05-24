import React from "react";
import { motion } from "framer-motion";
import heroimage from "/Products/LedTv/Gigantic/Hero/heroimage.png";
import ava from "/Products/LedTv/Gigantic/Hero/ava.svg";
import slim from "/Products/LedTv/Gigantic/Hero/slim.svg";
import refresh from "/Products/LedTv/Gigantic/Hero/refresh.svg";
import speaker from "/Products/LedTv/Gigantic/Hero/speaker.svg";

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (customDelay) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: customDelay,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Hero = () => {
  return (
    <div className="relative h-screen text-white w-screen">
      <img
        src={heroimage}
        alt="About Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#000000] via-[#00000096]/60 to-[#00000096]/100 z-1" />

      <div className="absolute bottom-10 inset-0 w-screen flex justify-between items-end md:items-end z-20 text-7xl font-[Poppins] md:px-6">
        {/* Left Content */}
        <motion.div
          className="flex font-[600]  flex-col gap-8"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          custom={0.6}
        >
          <div className="md:text-base text-xs items-center gap-4 flex">
            <img src={slim} alt="Slim Bezel" className="md:w-[2vw] w-[5vw]" />
            <span>Slim Bezel</span>
          </div>
          <div className="md:text-base text-xs items-center gap-4 flex">
            <img src={ava} alt="Availability" className="md:w-[2vw] w-[5vw]" />
            Available in 75", 86" and 98"
          </div>
        </motion.div>

        {/* Center Content */}
        <motion.div
          className="flex flex-col gap-4 items-center md:static absolute top-1/2 left-1/2 md:transform-none transform md:translate-x-0 -translate-x-1/2 md:translate-y-0 -translate-y-1/2 md:w-auto w-[80vw] "
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          custom={0.3}
        >
          <h2 className="md:text-8xl text-5xl text-center font-[200] p-2 bg-gradient-to-r from-[#6EAEBC] to-[#E2F9EF] text-transparent bg-clip-text bebas-neue ">
            Gigantic Series
          </h2>
          <span className="md:text-xl text-sm font-[400] bg-gradient-to-r from-[#C1F0A2] to-[#E2F9EF] text-transparent bg-clip-text text-center">
            Cinematic Excellence, Right in your living room
          </span>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="flex font-[600] flex-col md:mr-0 mr-1 gap-4"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          custom={0.6}
        >
          <div className="md:text-base text-xs items-center gap-4 flex">
            <img
              src={refresh}
              alt="Refresh Rate"
              className="md:w-[2vw] w-[5vw]"
            />
            <span>Refresh rate</span>
          </div>
          <div className="md:text-base text-xs items-center gap-3 flex">
            <img
              src={speaker}
              alt="Sound Output"
              className="md:w-[2vw] w-[5vw]"
            />
            <span>24W Sound Output</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;

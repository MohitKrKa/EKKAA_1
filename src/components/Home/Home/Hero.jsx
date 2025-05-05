import React from "react";
import herobg from "/Home/Hero.webm";
import { motion } from "framer-motion";

const text = "Bridging Technology, Empowering Brands";

// Split the text into two parts at the comma
const [firstLine, secondLine] = text.split(",");

// Helper to return animated letters with random delays
const renderAnimatedText = (line) => {
  const letters = line.split("");
  const delays = letters.map(() => Math.random() * 1.5);

  return letters.map((char, i) => (
    <motion.span
      key={i}
      initial={{ opacity: 0, y: -10 }}
      animate={{
        opacity: [0, 1, 0.4, 1], // Fade in, blink, restore
        y: [-10, 0, 0, 0],
      }}
      transition={{
        delay: delays[i],
        duration: 1, // Total duration of animation
        times: [0, 0.5, 0.7, 1],
        ease: "easeOut",
      }}
    >
      {char === " " ? "\u00A0" : char}
    </motion.span>
  ));
};

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={herobg}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="relative z-10 flex items-center justify-center h-full text-white uppercase bebas-neue">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[8vh] font-semibold  justify-center items-center space-y-6">
          <span className="block tracking-wider">{renderAnimatedText(firstLine + ",")}</span>
          <span className="block tracking-wider">{renderAnimatedText(secondLine)}</span>
        </h1>
      </div>

      {/* <div className="relative z-10 flex items-center uppercase font-[poppins] justify-center h-full text-white">
      <h1 className="text-[10vh] font-[600] space-y-3 ">
      <span className="block">{renderAnimatedText(firstLine + ",")}</span>
      <span className="block">{renderAnimatedText(secondLine)}</span>
    </h1>
      </div> */}
    </div>
  );
};

export default Hero;

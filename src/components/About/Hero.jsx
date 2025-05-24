import React from "react";
import { motion } from "framer-motion";
import herobg from "/About/Hero/hero.png";


// Split text into characters for animation
const AnimatedText = ({ text }) => {
  const letters = text.split("");

  return (
    <motion.div
      initial={{ x: -100, opacity: 0, filter: "blur(8px)" }}
      animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      className="flex flex-wrap"
    >
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

const Hero = () => {
  return (
    <div className="relative md:h-screen h-100 w-full text-white overflow-hidden">
      <img
        src={herobg}
        alt="About Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <motion.div
      initial={{ x: -100, opacity: 0, filter: "blur(8px)" }}
      animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      className="absolute top-0 left-0 w-[35%] backdrop-blur-[4px]  h-full bg-gradient-to-r from-black/50 via-black/50 to-transparent z-10 "/>
      
      <div className="absolute bottom-1/2 md:top-1/3 left-2 md:right-8 z-10 text-[12vw] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl bebas-neue font-[200] leading-tight">
        <AnimatedText text="About Us" />
      </div>
    </div>
  );
};

export default Hero;

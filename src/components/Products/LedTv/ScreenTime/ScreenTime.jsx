import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import bgi from "/Products/LedTv/Gigantic/ScreenTime/bg.svg";
import tv from "/Products/LedTv/Gigantic/ScreenTime/tv.png";
import ballon from "/Products/LedTv/Gigantic/ScreenTime/ballon.svg";
import ellipse from "/Products/LedTv/Gigantic/ScreenTime/ellipse.svg";
import ellipse1 from "/Products/LedTv/Gigantic/ScreenTime/ellipse1.svg";
import CloudI from "./CloudI";

const ScreenTime = () => {
  const ballonRef1 = useRef(null);
  const ballonRef2 = useRef(null);
  const isInView1 = useInView(ballonRef1, { once: true,  }); 
  const isInView2 = useInView(ballonRef2, { once: true,  }); 

  return (
    <div className="relative flex md:flex-row flex-col bebas-neue md:h-screen h-[86vh] text-white">
      <img
        src={bgi}
        alt=""
        className="absolute w-full h-full object-cover z-0"
      />
      <CloudI classname="absolute top-10 -left-10 opacity-50 w-[40vh] z-20" />

      {/* Content div */}
      <div

        className="z-10 p-10 md:w-[40vw] flex flex-col justify-center"
      >
        <h2 className="bg-gradient-to-r from-[#C1F0A2] to-[#E2F9EF] text-transparent bg-clip-text md:text-7xl text-3xl font-[200] mb-4 ">
          Redefining your screen time
        </h2>
        <p className="md:text-lg text-sm font-[200] leading-relaxed font-[Poppins]">
          We deliver high-performance LED TVs tailored for global brands.
          Ranging from 24” to 98”, our displays combine exceptional visuals,
          clarity and durability to meet the evolving needs of electronics and
          appliance companies worldwide.
          <br />
          <br />
          Engineered for reliability and cost-efficiency, our innovative
          solutions ensure your brand offers the best in immersive viewing, with
          uncompromising quality and modern design to match today's consumer
          demands.
        </p>
      </div>

      {/* Image div */}
      <div  className="relative z-10 md:w-[60vw] ">
        <CloudI classname="absolute hidden md:flex top-1/4 -left-30 w-[40vh] z-20" />
        <CloudI classname="absolute hidden md:flex top-50 right-1/4 z-20" />
        <CloudI classname="absolute hidden md:flex top-60 -right-20 w-[27vh] z-20" />

        <img src={tv} alt="" className="absolute md:bottom-0 z-10 right-0 md:w-full w-[70vw]" />
        <img src={ellipse} alt="" className="absolute -left-80 bottom-0 h-[80vh] " />
        {/* <img src={ellipse1} alt="" className="absolute right-8 z-9 h-[80vh] " /> */}

        
        {/* Ballon 1 */}
        <motion.img
          ref={ballonRef2}
          src={ballon}
          alt=""
          initial={{ y: 100, opacity: 0.8 }}
          animate={isInView2 ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute hidden md:flex right-0  z-11 bottom-1/4 md:h-32 h-20"
        />
        
        {/* Ballon 2*/}
        <motion.img
          ref={ballonRef1}
          src={ballon}
          alt=""
          initial={{ y: 200, opacity: 0.8 }}
          animate={isInView1 ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute hidden md:flex left-1/9 z-11 h-[60vh]"
        />
      </div>
    </div>
  );
};

export default ScreenTime;

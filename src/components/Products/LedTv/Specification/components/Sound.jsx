import React from "react";
import { motion } from "framer-motion";
import tv from "/Products/LedTv/Gigantic/Sound/tv.png";

const waveVariant = (rStart, rEnd, delay = 0) => ({
  initial: {
    r: rStart,
    opacity: 1,
  },
  animate: {
    r: rEnd,
    opacity: 0,
    transition: {
      duration: 1.2,
      ease: [0, 0.2, 0.8, 1],
      repeat: Infinity,
      delay,
    },
  },
});

const Sound = () => {
  return (
    <>
      {/* Mobile version */}
      <div className="flex md:hidden relative bebas-neue max-h-[40vh] pt-10 ">
        <div className="relative z-10 w-[80vw]">
          <img src={tv} alt="" />
        </div>
        <div className="flex md:hidden absolute top-0 transform translate-x-1/3  z-0 w-[500px] max-w-full ">
          <svg
            viewBox="0 0 977 977"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient
                id="textGradientMobile"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#C1F0A2" />
                <stop offset="100%" stopColor="#E2F9EF" />
              </linearGradient>
            </defs>

            {/* Animated ripple circles */}
            <motion.circle
              cx="488.5"
              cy="488.5"
              stroke="#717171"
              fill="transparent"
              variants={waveVariant(140, 256)}
              initial="initial"
              animate="animate"
            />
            <motion.circle
              cx="488.5"
              cy="488.5"
              stroke="#717171"
              fill="transparent"
              variants={waveVariant(256.496, 379, 0.4)}
              initial="initial"
              animate="animate"
            />
            <motion.circle
              cx="488.5"
              cy="488.5"
              stroke="#717171"
              fill="transparent"
              variants={waveVariant(379, 487.774, 0.8)}
              initial="initial"
              animate="animate"
            />
            <motion.circle
              cx="488.5"
              cy="488.5"
              stroke="#717171"
              fill="transparent"
              variants={waveVariant(487.774, 600, 1.2)}
              initial="initial"
              animate="animate"
            />

            {/* Static text in center */}
            <text
              x="488.5"
              y="488.5"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              <tspan
                x="488.5"
                dy="-30"
                fontSize="96"
                fontWeight="200"
                fill="url(#textGradientMobile)"
              >
                24W
              </tspan>
              <tspan
                x="488.5"
                dy="60"
                fontSize="40"
                fontWeight="100"
                fill="#FFFFFF"
              >
                Sound Output
              </tspan>
            </text>
          </svg>
        </div>
      </div>

      {/* Desktop version */}
      <div className="hidden md:flex h-screen  bebas-neue pl-40 pt-10 justify-center">
        <div className="relative z-10 w-full">
          <img src={tv} alt="" className="w-[50vw]"/>
        </div>

        <div className="hidden md:flex absolute ml-60 -mt-26 z-0">
          <svg
            width="977"
            height="977"
            viewBox="0 0 977 977"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="textGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#C1F0A2" />
                <stop offset="100%" stopColor="#E2F9EF" />
              </linearGradient>
            </defs>

            {/* Animated ripple circles */}
            <motion.circle
              cx="488.5"
              cy="488.5"
              stroke="#717171"
              fill="transparent"
              variants={waveVariant(140, 256)}
              initial="initial"
              animate="animate"
            />
            <motion.circle
              cx="488.5"
              cy="488.5"
              stroke="#717171"
              fill="transparent"
              // opacity="0.8"
              variants={waveVariant(256.496, 379, 0.4)}
              initial="initial"
              animate="animate"
            />
            <motion.circle
              cx="488.5"
              cy="488.5"
              stroke="#717171"
              fill="transparent"
              // opacity="0.7"
              variants={waveVariant(379, 487.774, 0.8)}
              initial="initial"
              animate="animate"
            />
            <motion.circle
              cx="488.5"
              cy="488.5"
              stroke="#717171"
              fill="transparent"
              // opacity="0.6"
              variants={waveVariant(487.774, 600, 1.2)}
              initial="initial"
              animate="animate"
            />

            {/* Static text in center */}
            <text
              x="488.5"
              y="488.5"
              textAnchor="middle"
              dominantBaseline="middle"
            >
              <tspan
                x="488.5"
                dy="-30"
                fontSize="96"
                fontWeight="200"
                fill="url(#textGradient)"
              >
                24W
              </tspan>
              <tspan
                x="488.5"
                dy="60"
                fontSize="40"
                fontWeight="100"
                fill="#FFFFFF"
              >
                Sound Output
              </tspan>
            </text>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Sound;

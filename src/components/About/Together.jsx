import React from "react";
import { motion } from "framer-motion";

import line from "/About/Together/line.svg";
import im from "/About/Together/im.svg";
import im1 from "/About/Together/im1.png";
import im2 from "/About/Together/im2.png";
import im4 from "/About/Together/im3.png";
import im3 from "/About/Together/im4.png";
import im5 from "/About/Together/im5.png";
import im6 from "/About/Together/im6.png";
import im7 from "/About/Together/im7.png";
import im8 from "/About/Together/im8.png";
import stronger1 from "/About/Together/stronger1.png";
import stronger2 from "/About/Together/stronger2.png";
import stronger3 from "/About/Together/stronger3.png";
import stronger4 from "/About/Together/stronger4.png";
import stronger5 from "/About/Together/stronger5.png";

const itemVariants = {
  hidden: { opacity: 0, x: -10 },
  show: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      type: "spring",
      stiffness: 100,
      ease: "easeInOut",
    },
  }),
};

const Together = () => {
  return (
    <>
      <div className="flex flex-row gap-10 md:ml-12 mt-10 md:mr-20 bebas-neue p-10 justify-between">
        <div className="md:w-[55vw] flex  flex-col gap-10  justify-center">
          <h2 className="font-[150]   text-5xl uppercase text-[#011E4D]">
            Stronger Together
          </h2>
          <p className="text-lg font-[200] font-[Poppins] text-[#6D6D6D]">
            At Ekkaa Electronics, we team up with industry leaders to fuel
            innovation and accelerate growth. Our strategic partnerships bring
            you cutting-edge solutions, exceptional customer experiences and a
            future built on sustainability.
          </p>
          <img src={line} alt="" />
          <div className="flex gap-10 flex-wrap w-fit">
            <img src={stronger1} alt="" className="w-" />
            <img src={stronger2} alt="" className="w-" />
            <img src={stronger3} alt="" className="w-" />
            <img src={stronger4} alt="" className="w-" />
            <img src={stronger5} alt="" className="w-" />
          </div>
        </div>

        <motion.div
          className="hidden md:flex relative w-[30vw]  h-[56vh]   gap-2 "
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.8 }}
        >
          <div className="flex absolute top-0  gap-2 ">
            <motion.img
              custom={4}
              variants={itemVariants}
              src={im7}
              alt=""
              className="w-[130px] h-[130px] "
            />
            {/* hands */}
            <motion.img
              custom={5}
              variants={itemVariants}
              src={im8}
              alt=""
              className="w-[130px] h-[130px]  "
            />
            <motion.div
              custom={6}
              variants={itemVariants}
              className="bg-gradient-to-tr from-[#E6AF2E] to-black h-[130px] w-[130px]"
            />
          </div>
          <div className="flex absolute gap-2 top-34 right-8">
            {/* Bulb */}
            <motion.div
              custom={3}
              variants={itemVariants}
              className="bg-gradient-to-br  from-[#E6AF2E] to-black h-[130px] w-[130px]"
            />

            <motion.img
              custom={2}
              variants={itemVariants}
              src={im5}
              alt=""
              className="w-[130px] h-[130px] "
            />
            {/* HandShake */}
            <motion.img
              custom={3}
              variants={itemVariants}
              src={im6}
              alt=""
              className="w-[130px] h-[130px] "
            />
          </div>
          <div className="flex gap-2 absolute top-68 ">
            {/* Tree */}
            <motion.img
              custom={1}
              variants={itemVariants}
              src={im3}
              alt=""
              className="w-[130px] h-[130px] "
            />
            {/* Pen */}
            <motion.img
              custom={2}
              variants={itemVariants}
              src={im4}
              alt=""
              className="w-[130px] h-[130px] "
            />
            <motion.div
              custom={3}
              variants={itemVariants}
              className="bg-gradient-to-br from-[#E6AF2E] to-black h-[130px] w-[130px]"
            />
          </div>
          <div className="flex gap-2 absolute  bottom-3 -left-21">
            {/* Screen */}
            <motion.img
              custom={0}
              variants={itemVariants}
              src={im1}
              alt=""
              className="w-[130px] h-[130px] "
            />
            {/* Family */}
            <motion.img
              custom={1}
              variants={itemVariants}
              src={im2}
              alt=""
              className="w-[130px] h-[130px] "
            />
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Together;

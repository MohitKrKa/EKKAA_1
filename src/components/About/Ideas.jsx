import React, {useRef } from "react";
import { motion, useInView } from "framer-motion";
import im from "/About/Ideas/im.png";


const Ideas = () => {

  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.6, once: true });

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div
      ref={ref}
      className="relative md:mt-40 bg-[#000000] bebas-neue md:p-0 px-10 py-10 md:h-[40vh] md:w-full "
    >
      <div className="relative md:w-[50vw] py-10 md:ml-20 h-full flex items-center z-10">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
        >
          <h1 className="mb-6 md:text-5xl text-2xl font-[200] text-white ">
            Where Ideas Take Shape
          </h1>
          <p className="md:text-lg text-sm font-[200]  text-[#FFFFFF]  font-[Poppins]">
            Our best-in-class R&D facilities drive innovation, delivering
            future-ready OEM/ODM solutions. With three advanced centres and a
            team of experts, we create high-quality, durable products that
            exceed evolving industry standards and client needs. Driven by
            cutting-edge research, we continuously expand our diverse portfolio,
            offering reliable, technologically advanced solutions you can count
            on.
          </p>
        </motion.div>
      </div>
      <motion.img
        src={im}
        alt="Ideas Visual"
        className="absolute bottom-0 md:h-[53vh] h-[40vh] md:right-0 -right-25"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUp}
        transition={{ delay: 0.6 }}
      />
    </div>
  );
};

export default Ideas;

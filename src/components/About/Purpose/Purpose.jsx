import React from "react";
import AnimatedTestimonials from "./Anim";
import { motion } from "framer-motion";

const Purpose = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  return (
    <>
    <div className="flex flex-col  md:items-center md:text-center md:p-20 p-4 overflow-hidden bg-black text-white">
      <motion.p
        className="md:text-7xl text-2xl  bebas-neue font-[200] mb-8 uppercase"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        From trusted consumer electronics to everyday appliances, we are setting
        new industry standards in quality, reliability and creativity.
      </motion.p>
      <motion.p
        className="md:text-2xl text-sm font-[Poppins] font-[200] leading-relaxed md:px-20"
        variants={textVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Inspired by the vision of Atmanirbhar Bharat and the 'Make in India'
        initiative, we are creating future-ready products through research,
        development and uncompromising quality. With a strong foundation across
        multiple segments, we continue to forge lasting relationships built on
        trust, excellence and shared growth.
      </motion.p>

    </div>
      <AnimatedTestimonials />
    </>
  );
};

export default Purpose;
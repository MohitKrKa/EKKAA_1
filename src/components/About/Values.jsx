import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import customer from "/About/Values/customer.svg";
import integrity from "/About/Values/integrity.svg";
import loyalty from "/About/Values/loyalty.svg";
import sustainability from "/About/Values/sustainability.svg";
import quality from "/About/Values/quality.svg";
import line from "/About/Values/Line.svg";

const Values = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
  };

  const valuesData = [
    { image: customer, text: "Customer Centricity" },
    { image: quality, text: "Quality" },
    { image: loyalty, text: "Loyalty" },
    { image: sustainability, text: "Sustainability" },
    { image: integrity, text: "Integrity & Honesty" },
  ];

  const renderDesktop = () => (
    <div className="flex p-6 items-center justify-center bg-black  relative text-[#FFFFFF]  overflow-hidden">
      <div className="flex items-center justify-center">
        <h2 className="text-5xl font-[300] bebas-neue">Values</h2>
        <motion.div
          className="flex justify-center  ml-16  gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <img src={line} alt="" className="mx-8 " />
          {valuesData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className=" flex items-center justify-center pb-14 flex-col h-[18vh] w-[10vw] p-6"
            >
              <img
                src={item.image}
                alt={item.text}
                className="h-20  max-w-[4vw] cursor-pointer"
              />
              <p className="mt-5 text-xl font-[400] text-center  max-h-[1vh] font-[Poppins] ">{item.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );

  const renderMobile = () => (
    <div className="bg-black  py-8 px-4 text-white ">
      <h2 className="text-3xl font-[300] mb-6 text-center bebas-neue">Values</h2>
      <motion.div
        className="flex flex-col items-center gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        {valuesData.map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            variants={itemVariants}
          >
            <img src={item.image} alt={item.text} className="h-14" />
            <p className="mt-2 text-sm font-[400] font-[Poppins] text-center">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );

  return <>{isMobile ? renderMobile() : renderDesktop()}</>;
};

export default Values;

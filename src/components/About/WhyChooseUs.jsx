import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import im from "/About/WhyChooseUs/im.png";
import textbg from "/About/WhyChooseUs/textbg.svg";
import bgimage from "/About/WhyChooseUs/bg.png";

const AnimatedText = ({ text, keyPrefix = "", animationType = "fadeInUp" }) => (
  <p className="ml-1 mt-4 text-[#6D6D6D] text-[16px] flex flex-wrap">
    {text.split(" ").map((word, i) => (
      <span
        key={`${keyPrefix}-${i}`}
        className="inline-block word-span opacity-0"
        style={{
          animation: `${animationType} 0.4s ease-out forwards`,
          animationDelay: `${i * 40}ms`,
        }}
      >
        {word}&nbsp;
      </span>
    ))}
  </p>
);

const accordionData = [
  {
    title: "360° Manufacturing and Turnkey Solutions",
    content:
      "We manage the entire process from concept to packaging, delivering fully finished, ready-to-sell products. Our integrated approach ensures seamless execution, efficiency and quality output at every stage.",
  },
  {
    title: "Expert ODM Manufacturer",
    content:
      "We manage the entire process from concept to packaging, delivering fully finished, ready-to-sell products. Our integrated approach ensures seamless execution, efficiency and quality output at every stage.",
  },
  {
    title: "Customisable Solutions",
    content:
      "We manage the entire process from concept to packaging, delivering fully finished, ready-to-sell products. Our integrated approach ensures seamless execution, efficiency and quality output at every stage.",
  },
  {
    title: "Uncompromising Quality",
    content:
      "We manage the entire process from concept to packaging, delivering fully finished, ready-to-sell products. Our integrated approach ensures seamless execution, efficiency and quality output at every stage.",
  },
  {
    title: "Optimised Production and Value",
    content:
      "We manage the entire process from concept to packaging, delivering fully finished, ready-to-sell products. Our integrated approach ensures seamless execution, efficiency and quality output at every stage.",
  },
  {
    title: "Global Standards Compliance",
    content:
      "We manage the entire process from concept to packaging, delivering fully finished, ready-to-sell products. Our integrated approach ensures seamless execution, efficiency and quality output at every stage.",
  },
  {
    title: "Seamless After-sales Support",
    content:
      "We manage the entire process from concept to packaging, delivering fully finished, ready-to-sell products. Our integrated approach ensures seamless execution, efficiency and quality output at every stage.",
  },
];

const WhyChooseUs = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const toggleSection = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className=" overflow-x-hidden relative text-white font-[SF Pro Display]">
      <img src={bgimage} alt="" className="absolute w-screen h-full" />
      {isMobile ? (
        // 📱 Mobile Layout
        <div className="flex flex-col px-6 items-center py-10">
          <h2 className="text-3xl text-[#011E4D] mb-6 uppercase font-[500]">
            Why Choose Us?
          </h2>
          <img src={im} alt="" className="w-full mb-6 rounded-lg" />

          <div className="space-y-6 w-full px-4">
            {accordionData.map((item, index) => (
              <div key={index}>
                <div
                  className="flex items-center cursor-pointer space-x-3"
                  onClick={() => toggleSection(index)}
                >
                  <div className="bg-[#E6AF2E] text-white p-1 rounded-sm transition-all duration-300">
                    {openIndex === index ? <FaMinus /> : <FaPlus />}
                  </div>
                  <h3 className="text-[#000000] font-[300] text-lg">
                    {item.title}
                  </h3>
                </div>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden text-sm"
                    >
                      <AnimatedText text={item.content} keyPrefix={index} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="pl-24 flex py-20">
          <img src={im} alt="" className="w-[50vw] h-[85vh]" />

          {/* TextBG container */}
          <div className="relative w-[81vh] h-[74vh] flex  p-6 ml-[-10vw]">
            <img
              src={textbg}
              alt=""
              className="absolute w-full h-full object-cover  rounded-md"
            />
            <div className="relative z-10 px-9">
              <h2 className="text-5xl text-[#011E4D] p-10 uppercase font-[100] mb-4">
                Why Choose Us?
              </h2>

              <div className="space-y-8 w-[38vw] ml-10">
                {accordionData.map((item, index) => (
                  <div key={index}>
                    <div
                      className="flex items-center cursor-pointer space-x-4"
                      onClick={() => toggleSection(index)}
                    >
                      <div className="bg-[#E6AF2E] text-white p-2 rounded-sm transition-all duration-300">
                        {openIndex === index ? <FaMinus /> : <FaPlus />}
                      </div>
                      <h3 className="text-[#000000] font-[300] text-2xl">
                        {item.title}
                      </h3>
                    </div>

                    <AnimatePresence initial={false}>
                      {openIndex === index && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 100, opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden max-w-[90%]"
                        >
                          <AnimatedText text={item.content} keyPrefix={index} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WhyChooseUs;

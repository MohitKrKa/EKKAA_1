import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import aboutbg from "/Home/Aboutbg.webm";
import aboutBtn from "/Home/AboutBtn.svg";

const About = () => {
  const text = `Ekkaa Electronics powers experiences that shape everyday life. Our innovations are behind some of the most trusted consumer electronics and appliances that make life simpler, smarter and more enjoyable.`;
  const words = text.split(" ");

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 1 });
  const [visibleWords, setVisibleWords] = useState(0);

  const handleScroll = (e) => {
    if (!isInView) return;

    if (e.deltaY > 0) {
      setVisibleWords((prev) =>
        prev < words.length ? prev + 1 : words.length
      );
    } else {
      setVisibleWords((prev) => (prev > 0 ? prev - 1 : 0));
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  }, [isInView]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={aboutbg}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-black/45 to-black/30 z-10 pointer-events-none" />
      <div className="absolute inset-0 flex items-center justify-center z-20 md:hidden px-4">
        <p className="text-white text-xl font-semibold leading-snug w-full max-w-[90%] text-center">
          {words.map((word, index) => (
            <span
              key={index}
              animate={{ color: index < visibleWords ? "#ffffff" : "#888888" }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.1 }}
            >
              {word + " "}
            </span>
          ))}
        </p>
      </div>

      <div
        ref={sectionRef}
        className="hidden md:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10  flex-col items-center justify-center text-white uppercase bebas-neue py-32 px-4 text-center"
      >
        {/* Responsive width wrapper */}
        <div className="w-[90%] sm:w-[80%] md:w-full">
          <h2 className="hidden md:flex text-base sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug  flex-wrap gap-x-3 sm:gap-x-4 md:gap-x-5 ">
            {words.map((word, index) => (
              <motion.span
                key={index}
                animate={{
                  color: index < visibleWords ? "#ffffff" : "#888888",
                }}
                transition={{ duration: 0.001, ease: "easeInOut", delay: 0.1 }}
              >
                {word + " "}
              </motion.span>
            ))}
          </h2>
        </div>

        <div className="z-20 mt-10 sm:mt-16 md:mt-0 md:absolute md:bottom-0 md:right-0">
          <img
            src={aboutBtn}
            alt="Explore"
            className="w-12 sm:w-14 md:w-auto h-auto cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

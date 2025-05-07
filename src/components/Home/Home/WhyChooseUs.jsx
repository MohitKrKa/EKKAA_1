import React from "react";
import Marquee from "react-fast-marquee";
import im from "/Home/WhyChooseUs/Choose/im.png";
import im1 from "/Home/WhyChooseUs/Choose/im1.png";
import im2 from "/Home/WhyChooseUs/Choose/im2.png";
import im3 from "/Home/WhyChooseUs/Choose/im3.png";
import im4 from "/Home/WhyChooseUs/Choose/im4.png";
import im5 from "/Home/WhyChooseUs/Choose/im5.png";
import im6 from "/Home/WhyChooseUs/Choose/im6.png";
import ove from "/Home/WhyChooseUs/Choose/over.png";

const images = [
  { src: im, text: "360° Manufacturing and ", text1: "Turnkey Solutions" },
  { src: im1, text: "Customisable ", text1: "Solutions" },
  { src: im2, text: "Expert ODM ", text1: "Manufacturer" },
  { src: im3, text: "Uncompromising ", text1: "Quality" },
  { src: im4, text: "Seamless After-sales ", text1: "Support" },
  { src: im5, text: "Optimised Production ", text1: "and Value" },
  { src: im6, text: "Compliance with ", text1: "Global Standards" },
];

const WhyChooseUs = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-[#000000] p-10 overflow-hidden">
      <h1 className="text-white bebas-neue font-[275] text-4xl sm:text-5xl md:text-6xl lg:text-8xl uppercase pb-10">
        Why Choose Us
      </h1>

      <Marquee gradient={false} speed={70} pauseOnHover={true} direction="left">
        {images.map((item, index) => (
          <div
            key={index}
            className="relative  w-96 h-[370px] mx-4 overflow-hidden  shadow-lg"
          >
            {/* Base image */}
            <img
              src={item.src}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />

            {/* Overlay image */}
            <img
              src={ove}
              alt="Overlay"
              className="absolute inset-0 w-full h-full object-cover z-10"
            />

            {/* Text Overlay */}
            <div className="absolute inset-0 z-20 flex items-end justify-center p-4">
              <span className="text-white text-xl font-[Poppins] font-[200] whitespace-pre-line text-center">
                {item.text + (item.text1 ? "\n" + item.text1 : "")}
              </span>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default WhyChooseUs;

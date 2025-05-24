import React, { useEffect, useRef, useState } from "react";
import im from "/About/Purpose/im.png";
import im1 from "/About/Purpose/im1.png";
import im2 from "/About/Purpose/im2.png";
import imbg from "/About/Purpose/bg.png";

const testimonials = [
  {
    quote:
      "An Indian Company with bold aspirations to become a trusted global partner for OEMs and ODMs. With a strong foundation in R&D, advanced technology and quality manufacturing, we focus on delivering innovative solutions that drive progress. Our goal is to build lasting partnerships, ensure reliability and set new industry standards.",
    src: im,
  },
  {
    quote:
      "An Indian Company with bold aspirations to become a trusted global partner for OEMs and ODMs. With a strong foundation in R&D, advanced technology and quality manufacturing, we focus on delivering innovative solutions that drive progress. Our goal is to build lasting partnerships, ensure reliability and set new industry standards.",
    src: im1,
  },
  {
    quote:
      "An Indian Company with bold aspirations to become a trusted global partner for OEMs and ODMs. With a strong foundation in R&D, advanced technology and quality manufacturing, we focus on delivering innovative solutions that drive progress. Our goal is to build lasting partnerships, ensure reliability and set new industry standards.",
    src: im2,
  },
];

// Word animation utility
const renderQuote = (quote, key) =>
  quote.split(" ").map((word, i) => (
    <span
      key={`${key}-${i}`}
      className="inline-block word-span opacity-0 translate-y-[10px] blur-md"
      style={{
        // animation: `fadeInWord 1s ease-out forwards`,
        animation: `fadeInWord 0.3s ease-out forwards`,
        animationDelay: `${i * 20}ms`,
      }}
    >
      {word}&nbsp;
    </span>
  ));

const ArrowButton = ({ direction, onClick }) => {
  const isLeft = direction === "left";
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition"
    >
      <svg
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-10 h-10 transition-transform ${
          isLeft ? "hover:-rotate-12" : "hover:rotate-12"
        }`}
      >
        <circle
          cx={isLeft ? "18" : "18.5"}
          cy="18"
          r="17.25"
          transform={isLeft ? "matrix(-1 0 0 1 36 0)" : ""}
          stroke="#9D9D9D"
          strokeWidth="1.5"
        />
        <path
          d={
            isLeft
              ? "M13.7929 18.7071C13.4024 18.3166 13.4024 17.6834 13.7929 17.2929L20.1569 10.9289C20.5474 10.5384 21.1805 10.5384 21.5711 10.9289C21.9616 11.3195 21.9616 11.9526 21.5711 12.3431L15.9142 18L21.5711 23.6569C21.9616 24.0474 21.9616 24.6805 21.5711 25.0711C21.1805 25.4616 20.5474 25.4616 20.1569 25.0711L13.7929 18.7071Z"
              : "M23.7071 18.7071C24.0976 18.3166 24.0976 17.6834 23.7071 17.2929L17.3431 10.9289C16.9526 10.5384 16.3195 10.5384 15.9289 10.9289C15.5384 11.3195 15.5384 11.9526 15.9289 12.3431L21.5858 18L15.9289 23.6569C15.5384 24.0474 15.5384 24.6805 15.9289 25.0711C16.3195 25.4616 16.9526 25.4616 17.3431 25.0711L23.7071 18.7071Z"
          }
          fill="#9D9D9D"
        />
      </svg>
    </button>
  );
};

const TestimonialDesktop = ({ index, setIndex, keyVal, next, prev }) => {
  return (
    <div
      className="w-full flex justify-center p-16 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${imbg})` }}
    >
      <div className="relative z-10 flex gap-30 ml-20 mr-20 flex-row">
        {/* Image Section */}
        <div
          className="relative h-96 min-w-[30vw]"
          style={{ perspective: "1000px" }}
        >
          {testimonials.map((t, i) => {
            const offset =
              (i - index + testimonials.length) % testimonials.length;
            const isActive = i === index;

            let translateX = "0%",
              translateY = "0%",
              rotateY = "0deg";
            if (offset === 1 || offset === -2) {
              translateX = "20%";
              translateY = "-10%";
              rotateY = "-15deg";
            } else if (offset === 2 || offset === -1) {
              translateX = "-20%";
              translateY = "-10%";
              rotateY = "15deg";
            }

            return (
              <img
                key={i}
                src={t.src}
                className="absolute w-full h-full object-cover transition-all duration-500"
                style={{
                  transform: `translate(${translateX}, ${translateY}) scale(${
                    isActive ? 1 : 0.85
                  }) rotateY(${rotateY})`,
                  zIndex: testimonials.length - Math.abs(offset),
                }}
              />
            );
          })}
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-6">
            <h3 className="text-6xl bebas-neue text-[#000000] text-left font-[100] ">
              Purpose
            </h3>
            <p className="text-xl font-[Poppins] text-[#6D6D6D] leading-relaxed text-left flex flex-wrap">
              {renderQuote(testimonials[index].quote, keyVal)}
            </p>
          </div>
          <div className="flex gap-4 mt-4">
            <ArrowButton direction="left" onClick={prev} />
            <ArrowButton direction="right" onClick={next} />
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialMobile = ({ index, keyVal, next, prev }) => {
  return (
    <div
      className="p-6 flex flex-col items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${imbg})` }}
    >
      <h3 className="text-3xl mb-4 bebas-neue  font-[300]">Purpose</h3>

      {/* Animated image carousel - same logic as desktop */}
      <div
        className="relative h-56 w-full mb-4"
        style={{ perspective: "1000px" }}
      >
        {testimonials.map((t, i) => {
          const offset =
            (i - index + testimonials.length) % testimonials.length;
          const isActive = i === index;

          let translateX = "0%",
            translateY = "0%",
            rotateY = "0deg";
          if (offset === 1 || offset === -2) {
            translateX = "20%";
            translateY = "-10%";
            rotateY = "-15deg";
          } else if (offset === 2 || offset === -1) {
            translateX = "-20%";
            translateY = "-10%";
            rotateY = "15deg";
          }

          return (
            <img
              key={i}
              src={t.src}
              className="absolute w-full h-full object-cover transition-all duration-500 rounded-xl"
              style={{
                transform: `translate(${translateX}, ${translateY}) scale(${
                  isActive ? 1 : 0.85
                }) rotateY(${rotateY})`,
                zIndex: testimonials.length - Math.abs(offset),
              }}
            />
          );
        })}
      </div>

      {/* Quote text with animation */}
      <p className="text-center text-sm  px-2 flex flex-wrap justify-center">
        {renderQuote(testimonials[index].quote, keyVal)}
      </p>

      {/* Arrows */}
      <div className="flex gap-4 mt-4">
        <ArrowButton direction="left" onClick={prev} />
        <ArrowButton direction="right" onClick={next} />
      </div>
    </div>
  );
};

const AnimatedTestimonials = () => {
  const [index, setIndex] = useState(0);
  const [keyVal, setKeyVal] = useState(0);
  const intervalRef = useRef(null);
  const pauseTimeoutRef = useRef(null);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
    setKeyVal((prev) => prev + 1);
    resetAutoSlide();
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setKeyVal((prev) => prev + 1);
    resetAutoSlide();
  };

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
      setKeyVal((prev) => prev + 1);
    }, 3000);
  };

  const stopAutoSlide = () => clearInterval(intervalRef.current);

  const resetAutoSlide = () => {
    stopAutoSlide();
    clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => startAutoSlide(), 5000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      stopAutoSlide();
      clearTimeout(pauseTimeoutRef.current);
    };
  }, []);

  return (
    <>
      <div className="hidden md:block">
        <TestimonialDesktop
          index={index}
          setIndex={setIndex}
          keyVal={keyVal}
          next={next}
          prev={prev}
        />
      </div>
      <div className="block md:hidden">
        <TestimonialMobile
          index={index}
          setIndex={setIndex}
          keyVal={keyVal}
          next={next}
          prev={prev}
        />
      </div>
    </>
  );
};

export default AnimatedTestimonials;

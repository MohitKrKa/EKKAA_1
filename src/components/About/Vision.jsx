import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import line from "/About/Vision/line.svg";
import line1 from "/About/Vision/line1.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const timelineData = [
  {
    year: "2018",
    description:
      "Ekkaa commissioned its first factory, marking the beginning of its journey in 2018.",
  },
  {
    year: "2019",
    description:
      "Began manufacturing small-size LED TVs and complete built units (CBUs).",
  },
  {
    year: "2020",
    description:
      "Emerged as one of the largest ODM factories, reaching the milestone of 100,000 LED TVs produced by February 2020.",
  },
  {
    year: "2021",
    description:
      "Planned India's largest LED TV factory with a capacity of 6 million units, spanning 15,000 sqm in Noida, India's electronics hub.",
  },
  {
    year: "2022",
    description:
      "Partnered with leading ODMs and global suppliers to expand manufacturing capabilities.",
  },
  {
    year: "2023",
    description:
      "Opened a new plant for manufacturing LED TVs, washing machines, induction cooktops, hearables and wearables, and multimedia speakers.",
  },
  {
    year: "2024",
    description: "[Inputs required from the client]",
  },
];

const AnimatedTimelineItem = ({ item, isEven }) => {
  const ref = useRef(null);
 const isInView = useInView(ref, { once: true, amount: 0.6 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: isEven ? -30 : 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="h-[40vh] flex items-center justify-center "
    >
      <div className="relative w-3xs h-full flex items-center ml-10">
        {/* <div className="absolute top-1/2 w-[80vw] left-1 h-[2px] bg-[#DCDCDC] z-0" /> */}
        {isEven ? (
          <div className="relative h-full flex items-center">
            <div className="absolute w-[50px] bottom-4">
              <img src={line} alt="" />
            </div>
            <div className="absolute w-[16vw] left-6">
              <div className="absolute bottom-0 mb-4 w-full">
                <p className="text-[#E6AF2E] font-[500] text-5xl">{item.year}</p>
              </div>
              <div className="absolute mt-6 w-full">
                <p className="text-white w-full font-[Poppins] font-[200] text-lg">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative h-full mr-30 flex items-center justify-center">
            <div className="absolute w-[50px] h-full top-10">
              <img src={line1} alt="" />
            </div>
            <div className="absolute left-0 w-[16vw]">
              <div className="absolute bottom-0 mb-4 w-full">
                <p className="text-white w-full font-[Poppins] font-[200] text-lg">
                  {item.description}
                </p>
              </div>
              <div className="absolute mt-6 w-full">
                <p className="text-[#E6AF2E] font-[500] text-5xl">{item.year}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const DesktopVision = ({ timelineData, sliderRef, settings, goToPrev, goToNext }) => (
  <div className="relative font-[Poppins] bg-black pt-10 pb-5 px-4 overflow-hidden hidden md:block">
    <div className="flex justify-center items-center relative mb-8">
      <h2 className="text-center bebas-neue mb-8 text-5xl font-[200] text-white">
        FROM VISION TO REALITY
      </h2>
      <div className="absolute top-16 right-20 flex items-center space-x-2">
        <button
          onClick={goToPrev}
          className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition"
        >
          {/* Left Chevron */}
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle
              cx="18"
              cy="18"
              r="17.25"
              transform="matrix(-1 0 0 1 36 0)"
              stroke="#9D9D9D"
              strokeWidth="1.5"
            />
            <path
              d="M13.7929 18.7071C13.4024 18.3166 13.4024 17.6834 13.7929 17.2929L20.1569 10.9289C20.5474 10.5384 21.1805 10.5384 21.5711 10.9289C21.9616 11.3195 21.9616 11.9526 21.5711 12.3431L15.9142 18L21.5711 23.6569C21.9616 24.0474 21.9616 24.6805 21.5711 25.0711C21.1805 25.4616 20.5474 25.4616 20.1569 25.0711L13.7929 18.7071Z"
              fill="#9D9D9D"
            />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition"
        >
          {/* Right Chevron */}
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="17.25" stroke="#9D9D9D" strokeWidth="1.5" />
            <path
              d="M22.2071 17.2929C22.5976 17.6834 22.5976 18.3166 22.2071 18.7071L15.8431 25.0711C15.4526 25.4616 14.8195 25.4616 14.4289 25.0711C14.0384 24.6805 14.0384 24.0474 14.4289 23.6569L20.0858 18L14.4289 12.3431C14.0384 11.9526 14.0384 11.3195 14.4289 10.9289C14.8195 10.5384 15.4526 10.5384 15.8431 10.9289L22.2071 17.2929Z"
              fill="#9D9D9D"
            />
          </svg>
        </button>
      </div>
    </div>

    <Slider ref={sliderRef} {...settings}>
      {timelineData.map((item, index) => (
        <AnimatedTimelineItem key={index} item={item} isEven={index % 2 === 0} />
      ))}
    </Slider>
  </div>
);

const MobileVision = ({ timelineData }) => (
  <div className="relative p-5 font-[Poppins] bg-black pt-6 px-2 overflow-hidden block md:hidden">
    <h2 className="text-center bebas-neue mb-6 text-2xl font-[200] text-white">
      FROM VISION TO REALITY
    </h2>
    <div className="relative">
      <div className="absolute top-0 bottom-0 left-6 border-l-2 border-[#DCDCDC]" />
      {timelineData.map((item, index) => (
        <div key={index} className="mb-6 relative pl-10">
          <div className="absolute left-0 top-0 w-12 h-12 rounded-full bg-[#F5F5F5] flex items-center justify-center">
            <p className="text-[#E6AF2E] font-semibold text-sm">{item.year}</p>
          </div>
          <div className="ml-4 mt-2">
            <p className="text-white text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Vision = () => {
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const goToPrev = () => sliderRef.current?.slickPrev();
  const goToNext = () => sliderRef.current?.slickNext();

  return (
    <>
      <DesktopVision
        timelineData={timelineData}
        sliderRef={sliderRef}
        settings={settings}
        goToPrev={goToPrev}
        goToNext={goToNext}
      />
      <MobileVision timelineData={timelineData} />
    </>
  );
};

export default Vision;

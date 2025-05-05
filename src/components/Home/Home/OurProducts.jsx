import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";

import LEDtV from "/Home/LedTv.png";
import StB from "/Home/set-top-box.png";
import WM from "/Home/washing-machine.png";
import Speaker from "/Home/speaker.png";
import SW from "/Home/smart-watch.png";

gsap.registerPlugin(Observer);

const products = [
  { img: LEDtV, label: "LED TVs" },
  { img: StB, label: "DTH SET TOP BOX" },
  { img: WM, label: "WASHING MACHINE" },
  { img: Speaker, label: "MULTIMEDIA SPEAKER" },
  { img: SW, label: "WEARABLES & HEARABLE" },
];

const OurProducts = () => {
  const boxesRef = useRef([]);
  const sectionRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(-1); // Start at first card
  const animatingRef = useRef(false);
  const observerRef = useRef(null);
  const [active, setActive] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Set all cards to hidden initially
    boxesRef.current.forEach((box, i) => {
      if (box) {
        gsap.set(box, { opacity: 0, x: 200 });
      }
    });
  }, []);

  useEffect(() => {
    // Watch if section is in view
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
        } else {
          setActive(false);
        }
      },
      { threshold: 1 }
    );

    if (sectionRef.current) {
      sectionObserver.observe(sectionRef.current);
    }

    return () => sectionObserver.disconnect();
  }, []);

  // useEffect(() => {
  //   if (active && boxesRef.current[0] && currentIndex === 0) {
  //     // Show first card when section is active
  //     gsap.to(boxesRef.current[0], {
  //       x: 0,
  //       opacity: 1,
  //       duration: 0.4,
  //       ease: "power3.out",
  //     });
  //   }
  // }, [active, currentIndex]);

  useEffect(() => {
    if (!active) return;

    observerRef.current = Observer.create({
      target: window,
      type: "wheel,touch",
      wheelSpeed: 1,
      onDown: () => {
        if (isAnimating || animatingRef.current) return;

        const nextIndex = currentIndex + 1;
        if (nextIndex >= products.length) {
          observerRef.current.disable();
          return;
        }

        setIsAnimating(true);
        animatingRef.current = true;
        const nextBox = boxesRef.current[nextIndex];

        gsap.to(nextBox, {
          x: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power3.out",
          onComplete: () => {
            setCurrentIndex(nextIndex);
            animatingRef.current = false;
            setIsAnimating(false);
          },
        });
      },
      onUp: () => {
        if (isAnimating || animatingRef.current) return;

        const prevIndex = currentIndex;
        if (prevIndex < 0) {
          // 👇 NEW: allow exiting section by re-enabling scroll
          observerRef.current.disable();
          return;
        }

        setIsAnimating(true);
        animatingRef.current = true;

        const prevBox = boxesRef.current[prevIndex];
        const prevBoxToShow = boxesRef.current[prevIndex - 1];

        gsap.to(prevBox, {
          x: 200,
          opacity: 0,
          duration: 0.4,
          ease: "power3.in",
          onComplete: () => {
            setCurrentIndex(prevIndex - 1);
            animatingRef.current = false;
            setIsAnimating(false);

            if (prevIndex - 1 >= 0) {
              gsap.to(prevBoxToShow, {
                x: 0,
                opacity: 1,
                duration: 0.4,
                ease: "power3.out",
              });
            }
          },
        });
      },

      preventDefault: true,
      allowClicks: true,
    });

    return () => observerRef.current?.kill();
  }, [active, currentIndex, isAnimating]);

  const renderDesktop = () => (
    <div className="h-[200vh] bg-black">
      {/* Pinning section */}
      <section
        ref={sectionRef}
        className="sticky top-0 h-screen w-full overflow-hidden text-white flex flex-col items-center justify-center font-[Bebas Neue] bg-black z-10"
      >
        <h2 className="text-7xl uppercase font-[400] mt-12 mb-10">
          Our products
        </h2>
        <div className="flex flex-row items-center justify-center gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              ref={(el) => (boxesRef.current[index] = el)}
              className="flex flex-col items-center justify-center shadow-lg border-2 border-[#2f2f2fb2] h-[60vh] w-[18vw] p-6 bg-[#1a1a1a] rounded-md"
            >
              <img src={product.img} alt={product.label} className="w-full cursor-pointer" />
              <p className="mt-4 text-[1rem] font-[400]">{product.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );

  const renderMobile = () => (
    <section className="bg-black py-8 px-4 text-white font-[Bebas Neue]">
      <h2 className="text-3xl font-[300] mb-6 text-center">Our products</h2>
      <div className="flex flex-col items-center gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center shadow-lg border-2 border-[#2f2f2fb2] h-[20vh] w-[20vh] p-4 bg-[#1a1a1a] rounded-md"
          >
            <img
              src={product.img}
              alt={product.label}
              className="h-16 w-auto object-contain"
            />
            <p className="mt-2 text-sm font-[400] text-center">
              {product.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );

  return <>{isMobile ? renderMobile() : renderDesktop()}</>;
};

export default OurProducts;

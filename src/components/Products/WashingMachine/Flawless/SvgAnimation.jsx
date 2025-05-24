import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import im1 from "/Products/Washing Machine/Flawless/im1.png";
import im2 from "/Products/Washing Machine/Flawless/im2.png";
import im3 from "/Products/Washing Machine/Flawless/im3.png";
import im4 from "/Products/Washing Machine/Flawless/im4.png";

const SvgAnimation = () => {
  const svgRef = useRef(null);
  const triggered = useRef(false); // prevent re-triggering

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;

          const ctx = gsap.context(() => {
            // Animate the main circle
            gsap.fromTo(
              "#main-circle",
              { scale: 0, transformOrigin: "center", opacity: 0 },
              { scale: 1, opacity: 1, duration: 1.5, ease: "power2.out" }
            );

            // Animate image icons
            gsap.fromTo(
              ".svg-image",
              { scale: 0, opacity: 0 },
              {
                scale: 1,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "back.out(1.7)",
                delay: 1,
              }
            );

            // Animate texts
            gsap.fromTo(
              ".svg-text",
              { y: 20, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 0.6,
                stagger: 0.2,
                ease: "power2.out",
                delay: 1.5,
              }
            );
          }, svgRef);
        }
      },
      { threshold: 0.3 } // trigger when 30% is in view
    );

    if (svgRef.current) observer.observe(svgRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={svgRef} className="">
      <svg
        width="740"
        height="603"
        viewBox="0 0 830 503"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Circle outline */}
        <circle
          id="main-circle"
          cx="201.5"
          cy="201.5"
          r="300.5"
          stroke="url(#paint0_linear_60_486)"
          strokeWidth="2"
        />
        {/* Static background circles */}
        <circle cx="398" cy="-20.3628" r="40" fill="#DCE9EE" />
        <circle cx="497.66" cy="129.981" r="40" fill="#DCE9EE" />
        <circle cx="478.66" cy="300.672" r="40" fill="#DCE9EE" />
        <circle cx="360" cy="448.003" r="40" fill="#DCE9EE" />

        {/* Images */}
        <image
          href={im1}
          x="362"
          y="-55"
          width="80"
          height="80"
          clipPath="circle(50px at center)"
          className="svg-image"
        />
        <image
          href={im2}
          x="459.66"
          y="92.981"
          width="80"
          height="80"
          clipPath="circle(50px at center)"
          className="svg-image"
        />
        <image
          href={im3}
          x="438.66"
          y="264.672"
          width="80"
          height="80"
          clipPath="circle(50px at center)"
          className="svg-image"
        />
        <image
          href={im4}
          x="326"
          y="410.003"
          width="70"
          height="70"
          clipPath="circle(50px at center)"
          className="svg-image"
        />

        {/* Labels */}
        <text
          x="442"
          y="-20"
          fontSize="18"
          fontWeight="400"
          fontFamily="SF Pro Display"
          fill="#011E4D"
          className="svg-text"
        >
          Performance & Efficiency
        </text>
        <text
          x="550"
          y="133"
          fontSize="18"
          fontWeight="400"
          fontFamily="SF Pro Display"
          fill="#011E4D"
          className="svg-text"
        >
          Fabric Care & Hygiene
        </text>
        <text
          x="530"
          y="305"
          fontSize="18"
          fontWeight="400"
          fontFamily="SF Pro Display"
          fill="#011E4D"
          className="svg-text"
        >
          Energy & Water Efficiency
        </text>
        <text
          x="410"
          y="465"
          fontSize="18"
          fontWeight="400"
          fontFamily="SF Pro Display"
          fill="#011E4D"
          className="svg-text"
        >
          Smart Features
        </text>

        {/* Gradient Definition */}
        <defs>
          <linearGradient
            id="paint0_linear_60_486"
            x1="403"
            y1="201.5"
            x2="0"
            y2="201.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#A4ACB9" />
            <stop offset="0.548077" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default SvgAnimation;

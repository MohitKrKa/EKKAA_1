import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BgLine = () => {
  const [lineDrawn, setLineDrawn] = useState(false);
  const [circlesVisible, setCirclesVisible] = useState(false);

  const { ref: svgRef, inView: svgInView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const { ref: circlesRef, inView: circlesInView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    setLineDrawn(svgInView);
  }, [svgInView]);

  useEffect(() => {
    setCirclesVisible(circlesInView);
  }, [circlesInView]);

  return (
    <div ref={svgRef} className="w-[36vw] border border-red-400 h-[24vh]  md:w-[40vw] md:h-[10vh] lg:w-[10wv] lg:h-[33vh]">
      <svg
        viewBox="0 0 260 281"
        preserveAspectRatio="xMidYMid meet"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M73.4245 4.6709H1.74609L1.74609 101.388L142.473 278.812H258.046V80.8214V4.6709H198.764"
          stroke="#E6AF2E"
          strokeWidth="3"
          fill="none"
          initial={{ strokeDasharray: 1000, strokeDashoffset: 1000 }}
          animate={{ strokeDashoffset: lineDrawn ? 0 : 1000 }}
          transition={{ delay: 0.3, duration: 1.3 }}
        />
        <motion.circle
          ref={circlesRef}
          cx="75.9775"
          cy="4.53955"
          r="4.23145"
          fill={circlesVisible ? "#E6AF2E" : "transparent"}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: circlesVisible ? 1 : 0, scale: circlesVisible ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        <motion.circle
          cx="200.294"
          cy="4.53955"
          r="4.23145"
          fill={circlesVisible ? "#E6AF2E" : "transparent"}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: circlesVisible ? 1 : 0, scale: circlesVisible ? 1 : 0 }}
          transition={{ delay: 0.6, duration: 0.5, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
};

export default BgLine;

import React from "react";
import { motion } from "framer-motion";

const Logo = () => {
  const circleVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  return (
    <div className="text-white flex bg-black h-[100vh] justify-center items-center w-screen ">
      <svg
        width="350"
        height="360"
        viewBox="0 0 65 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Animated lines */}
        <motion.rect
          x="12.4304"
          y="1.05331"
          width="0.845632"
          height="7.61079"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="0.25"
          initial={{ width: 0 }} // Start with width 0
          animate={{ width: 0.845632 }} // Animate to full width
          transition={{ duration: 1, ease: "easeOut" }}
        />

        <motion.rect
          x="43.719"
          y="1.05319"
          width="0.845632"
          height="7.61079"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="0.25"
          initial={{ width: 0 }}
          animate={{ width: 0.845632 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Vertical line animation */}
        <motion.rect
          x="43.719"
          y="1.05319"
          width="0.845643"
          height="30.4427"
          transform="rotate(90 43.719 1.05319)"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="0.25"
          initial={{ height: 0 }}
          animate={{ height: 30.4427 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Left side horizontal line */}
        <motion.rect
          x="26.8058"
          y="7.81838"
          width="0.845642"
          height="14.3757"
          transform="rotate(90 26.8058 7.81838)"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="0.25"
          initial={{ height: 0 }}
          animate={{ height: 14.3757 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Right side horizontal line */}
        <motion.rect
          x="43.719"
          y="7.81838"
          width="0.845642"
          height="6.76505"
          transform="rotate(90 43.719 7.81838)"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="0.25"
          initial={{ height: 0 }}
          animate={{ height: 6.76505 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        {/* Animated circles */}
        <motion.circle
          cx="30.3866"
          cy="8.24122"
          r="1"
          fill="currentColor"
          variants={circleVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.2 }}
        />

        <motion.circle
          cx="35.4675"
          cy="8.24068"
          r="1"
          fill="currentColor"
          variants={circleVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 0.4 }}
        />

        {/* Path animations */}
        <motion.path
          d="M30.976 8.24122C30.976 9.28476 30.1301 10.1307 29.0866 10.1307C28.0431 10.1307 27.1971 9.28476 27.1971 8.24122C27.1971 7.19768 28.0431 6.35174 29.0866 6.35174C30.1301 6.35174 30.976 7.19768 30.976 8.24122Z"
          fill="currentColor"
          stroke="currentColor"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        <motion.path
          d="M37.3564 8.24068C37.3564 9.28392 36.5107 10.1296 35.4675 10.1296C34.4243 10.1296 33.5786 9.28392 33.5786 8.24068C33.5786 7.19744 34.4243 6.35174 35.4675 6.35174C36.5107 6.35174 37.3564 7.19744 37.3564 8.24068Z"
          fill="currentColor"
          stroke="currentColor"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />

        <motion.path
          d="M30.3906 35.7689L12.8533 13.6107H44.6725V20.6467H27.1352L34.3812 29.0479H44.6725V35.7689H30.3906Z"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Text at the bottom */}
        <motion.text
          x="52%"
          y="50"
          textAnchor="middle"
          fontSize="10"
          fill="currentColor"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
        >
          EKKAA
        </motion.text>
      </svg>
    </div>
  );
};

export default Logo;
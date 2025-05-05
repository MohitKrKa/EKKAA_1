import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./components/Home/Home/Home";
import Logo from "./components/Home/Home/Logo";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false); // Set loading to false after the delay
    }, 2200); // 4 seconds delay for logo animation

    return () => clearTimeout(timeout);
  }, []);



  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            zIndex: 10, // Ensure it's above other content
            backgroundColor: "black", // Match Logo background
          }}
        >
          <Logo />
        </motion.div>
      ) : (
        <motion.div
          style={{ backgroundColor: "transparent" }} // Initial background transparent for the website content
        >
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;

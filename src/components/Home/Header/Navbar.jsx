import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import TalktoExpert from "./TalktoExpert";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  {
    name: "Products",
    submenu: [
      { name: "TV", path: "/product/tv" },
      { name: "Washing Machine", path: "/product/washing-machine" },
    ],
  },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mobileOpenIndex, setMobileOpenIndex] = useState(null);

  return (
    <header className="fixed top-0 left-0 w-full   z-50 bg-black/70 backdrop-blur-2xl  px-6 py-4 font-[Poppins]">
      <div className="flex items-center justify-between ">
        {/* Logo */}
        <img src="/logo.svg" alt="Logo" className="md:w-auto w-[12vw]" />

        {/* Spacer */}
        <div className="flex-1" />

        {/* Hamburger */}
        <div className="flex md:gap-4 gap-0">
          <div
            className="relative w-[50px] h-[40px] cursor-pointer z-40 "
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <motion.span
              className="absolute left-0 md:w-11 w-8  h-[2px] bg-[#E6AF2E] "
              style={{ top: "8px" }}
              animate={menuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute left-0 md:w-11 w-8  h-[2px] bg-[#E6AF2E] "
              style={{ top: "17px" }}
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="absolute left-0 md:w-11 w-8  h-[2px] bg-[#E6AF2E] "
              style={{ top: "26px" }}
              animate={menuOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="hidden md:flex">
            <TalktoExpert />
          </div>
        </div>
      </div>

      {/* Centered Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Mobile Sidebar Menu */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              className="fixed top-0 right-0 h-screen w-[70vw] bg-black/90 z-30 px-6 py-10 md:hidden flex flex-col gap-6 overflow-y-auto"
            >
              {menuItems.map((item, index) => (
                <div key={index}>
                  {item.path ? (
                    <Link
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className="block text-white text-lg hover:text-[#E6AF2E]"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <div
                      onClick={() =>
                        setMobileOpenIndex(
                          mobileOpenIndex === index ? null : index
                        )
                      }
                      className="flex justify-between items-center hover:text-[#E6AF2E] text-white text-lg cursor-pointer"
                    >
                      <span>{item.name}</span>
                    </div>
                  )}

                  {/* Animated Mobile Submenu */}
                  <AnimatePresence initial={false}>
                    {item.submenu && mobileOpenIndex === index && (
                      <motion.div
                        key="submenu"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <ul className="ml-4 mt-2 space-y-2">
                          {item.submenu.map((sub, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                to={sub.path}
                                onClick={() => setMenuOpen(false)}
                                className="text-white text-sm hover:text-[#E6AF2E]"
                              >
                                {sub.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>

            {/* Desktop Menu — unchanged */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-0 right-20 md:flex hidden w-full h-full justify-center py-8 shadow-md"
            >
              <ul className="flex md:flex-row gap-6 text-lg relative">
                {menuItems.map((item, index) => (
                  <li
                    key={index}
                    className="relative"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    {item.path ? (
                      <Link
                        to={item.path}
                        className="cursor-pointer text-white hover:text-[#E6AF2E]"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <span className="cursor-pointer text-white hover:text-[#E6AF2E]">
                        {item.name}
                      </span>
                    )}

                    {/* Desktop Submenu */}
                    <AnimatePresence>
                      {hoveredIndex === index &&
                        item.submenu &&
                        item.submenu.length > 0 && (
                          <motion.ul
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="absolute left-0 top-full w-52 mt-2 bg-black shadow-md px-4 py-2 space-y-2 z-10 text-white"
                          >
                            {item.submenu.map((sub, subIndex) => (
                              <li key={subIndex}>
                                <Link
                                  to={sub.path}
                                  className="hover:text-[#E6AF2E] cursor-pointer"
                                >
                                  {sub.name}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                    </AnimatePresence>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

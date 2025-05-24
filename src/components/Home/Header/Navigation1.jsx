import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import searchIcon from "/Header/searchIcon.png"; // Adjust path accordingly

const navItems = [
  {
    name: "Home",
    path: "/",
  },
  { name: "About", path: "/about" },
  {
    name: "Products",
  },
];

const searchVariants = {
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: "12em",
    height: "1.5rem",
    opacity: 1,
    right: 0,
  },
};

const mobileNavVariants = {
  open: {
    height: "auto",
    opacity: 1,
    transition: { type: "spring", stiffness: 50 },
  },
  closed: {
    height: 0,
    opacity: 0,
    pointerEvents: "none",
    transition: { type: "spring", stiffness: 50 },
  },
};

const megaMenuVariants = {
  open: {
    opacity: 1,
    scaleY: 1,
    originY: 0,
    display: "block",
    transition: { stiffness: 100 },
  },
  closed: { opacity: 0, scaleY: 0, originY: 0, display: "none" },
};

const seriesVariants = {
  hidden: { opacity: 0, transition: { duration: 0.3 } },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};

const Navigation1 = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMegaMenuVisible, setMegaMenuVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeMegaMenuItem, setActiveMegaMenuItem] = useState(null);

  const searchInputRef = useRef(null);
  const searchContainerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const productsRef = useRef(null);
  const megaMenuContentRef = useRef(null);
  let megaMenuCloseTimer;

  const toggleSearch = () => {
    setSearchVisible((prev) => !prev);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    setSearchVisible(false);
  };


  const handleMouseLeaveProducts = () => {
    megaMenuCloseTimer = setTimeout(() => {
      setMegaMenuVisible(false);
      setActiveCategory(null);
    }, 10);
  };

  const handleMouseEnterMegaMenu = (item) => {
    clearTimeout(megaMenuCloseTimer);
    setMegaMenuVisible(true);
    setActiveMegaMenuItem(item);
  };

  const handleClickOutside = (e) => {
    if (
      searchContainerRef.current &&
      !searchContainerRef.current.contains(e.target)
    )
      setSearchVisible(false);

    if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target))
      setMobileMenuOpen(false);

    if (
      productsRef.current &&
      !productsRef.current.contains(e.target) &&
      megaMenuContentRef.current &&
      !megaMenuContentRef.current.contains(e.target)
    ) {
      setMegaMenuVisible(false);
      setActiveCategory(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isSearchVisible && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchVisible]);

  return (
    <div className="flex items-center justify-end m-4 p-4 fixed top-0 right-0 bg-white z-50 shadow-md rounded-3xl">
      <div className="flex items-center gap-4">
        <motion.div
          onClick={toggleSearch}
          className="cursor-pointer h-5 w-5 relative"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          ref={searchContainerRef}
        >
          <img src={searchIcon} alt="Search" className="h-full w-full" />
          <AnimatePresence>
            {isSearchVisible && (
              <motion.input
                key="search-input"
                type="text"
                placeholder="Search..."
                className="bg-white rounded-md focus:outline-none absolute top-0 right-0 h-full w-48 px-2 text-sm"
                variants={searchVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                ref={searchInputRef}
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </AnimatePresence>
        </motion.div>

        <button onClick={toggleMobileMenu} className="text-xl cursor-pointer text-black">
          {isMobileMenuOpen ? <IoClose /> : <GiHamburgerMenu />}
        </button>
      </div>

      <motion.div
        ref={mobileMenuRef}
        className="absolute top-12 right-4 w-60 bg-white rounded-2xl shadow-md overflow-hidden z-40"
        variants={mobileNavVariants}
        initial="closed"
        animate={isMobileMenuOpen ? "open" : "closed"}
      >
        <nav className="flex flex-col p-4 gap-4">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer text-sm sm:text-base"
              onMouseEnter={() => handleMouseEnterMegaMenu(item)}
              onMouseLeave={handleMouseLeaveProducts}
              ref={item.name === "Products" ? productsRef : null}
            >
              {item.path ? (
                <Link to={item.path}>{item.name}</Link>
              ) : (
                <span className="cursor-pointer">{item.name}</span>
              )}

            </div>
          ))}
        </nav>
      </motion.div>
    </div>
  );
};

export default Navigation1;

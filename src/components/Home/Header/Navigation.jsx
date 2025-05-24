// Navigation.js
import React, { useState, useRef, useEffect } from "react";
import searchIcon from "/Header/searchIcon.png";
import { motion, AnimatePresence } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import logo from "/Header/logo.svg";
import talktoExpert from "/Header/talk.png";
import { Link } from "react-router-dom";

const Navigation = ({ isScrolled }) => {
  const navItems = [
    {
      name: "About Ekkaa",
      path: "/about",
    },
    {
      name: "Our Offerings",
      path: "",
    },
    {
      name: "Products",
      path: "",
    },
    { name: "Services", path: "" },
    { name: "Why Choose Us?", path: "" },
    { name: "Contact Us", path: "" },
  ];

  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const searchContainerRef = useRef(null);
  const searchInputRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const [isMegaMenuVisible, setMegaMenuVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const productsRef = useRef(null);
  const megaMenuContentRef = useRef(null);

  const [activeMegaMenuItem, setActiveMegaMenuItem] = useState(null);

  const handleMouseEnterMegaMenu = (item) => {
    clearTimeout(megaMenuCloseTimer);
    setMegaMenuVisible(true);
    setActiveMegaMenuItem(item);
  };

  const toggleSearch = () => {
    setSearchVisible((prev) => !prev);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    setSearchVisible(false);
  };
  let megaMenuCloseTimer;

  const handleMouseEnterProducts = () => {
    clearTimeout(megaMenuCloseTimer);
    setMegaMenuVisible(true);
  };

  const handleMouseLeaveProducts = () => {
    megaMenuCloseTimer = setTimeout(() => {
      setMegaMenuVisible(false);
      setActiveCategory(null);
    }, 10);
  };

  const handleMouseEnterCategory = (categoryName) => {
    setActiveCategory(categoryName);
  };

  const handleMouseLeaveCategory = () => {
    setActiveCategory(null);
  };

  const handleClickOutside = (event) => {
    if (
      searchContainerRef.current &&
      !searchContainerRef.current.contains(event.target)
    ) {
      setSearchVisible(false);
    }
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target)
    ) {
      setMobileMenuOpen(false);
    }
    if (
      productsRef.current &&
      !productsRef.current.contains(event.target) &&
      megaMenuContentRef.current &&
      !megaMenuContentRef.current.contains(event.target)
    ) {
      setMegaMenuVisible(false);
      setActiveCategory(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isSearchVisible && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchVisible]);

  const searchVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "12em",
      height: "1.5rem",
      opacity: 1,
      right: 0,
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
    hidden: {
      opacity: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    visible: {
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
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
      transition: { type: "spring", stiffness: 50 },
      pointerEvents: "none",
    },
  };

  return (
    <div className="rounded-2xl text-black text-sm">
      {/* Desktop Navigation */}
      <motion.div
        className={`
          ${
            isScrolled
              ? "w-full flex justify-center fixed top-0 bg-white items-center pt-2 h-18 gap-6 pb-4 font-[Poppins] text-sm sm:text-base md:text-lg lg:text-xl xl:text-[1.3rem] left-0 z-30"
              : "flex items-center gap-6 md:gap-8 lg:gap-10 pb-2 bg-white w-full md:w-[60rem] pl-6 md:pl-10 pt-2 text-black h-12 font-[Poppins] font-[400] max-md:hidden"
          }`}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        layout
      >
        {isScrolled && (
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="h-18 w-auto cursor-pointer pt-3 ml-4 sm:ml-8"
            />
          </Link>
        )}

        <nav
          className={`flex flex-wrap gap-4  sm:gap-6 md:gap-8 font-[Poppins] font-[400] ${
            isScrolled ? "text-black mt-2 w-full justify-center" : ""
          }`}
        >
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative cursor-pointer  text-sm sm:text-base md:text-lg"
              onMouseEnter={() =>
                item.megaMenu ? handleMouseEnterMegaMenu(item) : undefined
              }
              onMouseLeave={
                item.megaMenu ? handleMouseLeaveProducts : undefined
              }
              ref={item.name === "Products" ? productsRef : null}
            >
              <Link to={item.path}>{item.name}</Link>
              <AnimatePresence>
                {" "}
                {isMegaMenuVisible &&
                  activeMegaMenuItem?.megaMenu &&
                  activeMegaMenuItem.name === item.name && (
                    <motion.div
                      key={activeMegaMenuItem.name}
                      ref={megaMenuContentRef}
                      className="fixed top-19  left-0 w-screen bg-black text-white z-40 "
                      variants={megaMenuVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                      transition={{ type: "tween", duration: 0.2 }}
                      onMouseEnter={() => clearTimeout(megaMenuCloseTimer)}
                      onMouseLeave={() => {
                        setMegaMenuVisible(false);
                        setActiveMegaMenuItem(null);
                      }}
                    >
                      <div className="p-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-[1200px] mx-auto">
                        {activeMegaMenuItem.megaMenu.categories.map(
                          (category) => (
                            <div
                              key={category.name}
                              className="flex flex-col items-start"
                              onMouseEnter={() =>
                                handleMouseEnterCategory(category.name)
                              }
                              onMouseLeave={handleMouseLeaveCategory}
                            >
                              <div className="flex flex-col w-55 items-center gap-2 mb-2">
                                {category.icon && (
                                  <img
                                    src={category.icon}
                                    alt={category.name}
                                    className="h-8 w-8 object-contain"
                                  />
                                )}
                                <h3
                                  className={`font-[500] text-base cursor-pointer transition-colors duration-200 ${
                                    activeCategory === category.name
                                      ? "text-[#BCF0BE]"
                                      : "hover:text-[#BCF0BE]"
                                  }`}
                                >
                                  {category.name}
                                </h3>
                              </div>

                              <AnimatePresence>
                                {category.series &&
                                  activeCategory === category.name && (
                                    <motion.div
                                      className="absolute top-full  left-0 w-screen bg-black flex justify-center items-center gap-20 flex-row z-50"
                                      variants={seriesVariants}
                                      initial="hidden"
                                      animate="visible"
                                      exit="hidden"
                                    >
                                      {category.series.map((seriesItem) => (
                                        <div
                                          key={seriesItem.name}
                                          className="relative px-4 py-4 text-white text-sm cursor-pointer group"
                                        >
                                          <Link to={seriesItem.path}>
                                            <span className="transition text-white group-hover:text-[#BCF0BE]">
                                              {seriesItem.name}
                                            </span>
                                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#BCF0BE] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                          </Link>
                                        </div>
                                      ))}
                                    </motion.div>
                                  )}
                              </AnimatePresence>
                            </div>
                          )
                        )}
                      </div>
                    </motion.div>
                  )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        <motion.div
          className={`flex gap-4  font-[Poppins] font-[400] ${
            isScrolled
              ? "relative cursor-pointer mr-4 md:mr-8 h-8 w-6"
              : "relative cursor-pointer ml-4 md:ml-8 h-6 w-6"
          }`}
          whileTap={{ scale: 0.9 }}
        >
          <img
            src={searchIcon}
            alt="Search"
            className="h-full w-full object-contain"
            onClick={toggleSearch}
          />
          <AnimatePresence>
            {isSearchVisible && (
              <motion.div ref={searchContainerRef}>
                <motion.input
                  key="search-input"
                  type="text"
                  placeholder="Search..."
                  className={`bg-gray-300 rounded-md focus:outline-none absolute top-0 ${
                    isScrolled ? "right-0 h-14 w-14" : "left-0 h-12 w-8"
                  }`}
                  variants={searchVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  ref={searchInputRef}
                  onClick={(e) => e.stopPropagation()}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {isScrolled && (
          <button className="mr-4 md:mr-10 cursor-pointer">
            <img
              src={talktoExpert}
              alt="Talk to Expert"
              className="h-12 w-40 sm:w-44 "
            />
          </button>
        )}
      </motion.div>

      {/* Mobile Navigation */}
      <div className="max-md:flex items-center justify-end p-4 hidden fixed top-0 right-0 rounded-4xl shadow-md z-50 bg-white">
        <div className="flex items-center gap-4">
          <motion.div
            onClick={toggleSearch}
            className="cursor-pointer h-5 w-5 relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            ref={searchContainerRef}
          >
            <img
              src={searchIcon}
              alt="Search"
              className="h-full w-full object-contain"
            />
            <AnimatePresence>
              {isSearchVisible && (
                <motion.input
                  key="search-input"
                  type="text"
                  placeholder="Search..."
                  className="bg-white rounded-md focus:outline-none absolute top-0 right-0 h-full w-24"
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
          <button onClick={toggleMobileMenu} className="text-xl text-black">
            {isMobileMenuOpen ? <IoClose /> : <GiHamburgerMenu />}
          </button>
        </div>

        <motion.div
          ref={mobileMenuRef}
          className="absolute top-12 right-4 w-48 bg-white rounded-2xl shadow-md overflow-hidden z-40"
          variants={mobileNavVariants}
          initial="closed"
          animate={isMobileMenuOpen ? "open" : "closed"}
        >
          <nav className="flex flex-col p-4 gap-4">
            {navItems.map((item, index) => (
              <div
                key={index}
                className="cursor-pointer py-2 text-sm sm:text-base"
              >
                <Link to={item.path}>{item.name}</Link>
                {item.megaMenu && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    {item.megaMenu.categories.map((category) => (
                      <div key={category.name}>
                        {category.name}
                        {category.series && (
                          <div className="ml-4 flex flex-col gap-1 mt-1">
                            {category.series.map((seriesItem) => (
                              <Link
                                key={seriesItem.name}
                                to={seriesItem.path}
                                className="text-xs"
                              >
                                {seriesItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </motion.div>
      </div>
    </div>
  );
};

export default Navigation;

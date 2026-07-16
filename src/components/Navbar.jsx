import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ activeSection, setActiveSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Resume", id: "resume" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsSmallMobile(window.innerWidth < 350); // Hamburger menu only for screens < 350px wide
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const activeItem = navItems.find((item) => item.id === activeSection);
  const activeLabel = activeItem ? activeItem.name.toUpperCase() : "PORTFOLIO";

  return (
    <div className="fixed top-3 md:top-4 left-1/2 md:left-auto -translate-x-1/2 md:translate-x-0 md:right-8 lg:right-12 z-50 no-cursor-expand w-[calc(100vw-24px)] md:w-auto max-w-xl md:max-w-none">
      
      {/* 1. HAMBURGER MENU BAR (Only visible on screens < 350px wide) */}
      {isSmallMobile && (
        <div className="flex items-center justify-between px-5 py-2.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-2xl w-full relative">
          <span className="text-white text-xs font-semibold tracking-[0.2em]">
            {activeLabel}
          </span>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex flex-col justify-center items-center w-12 h-12 gap-[4.5px] focus:outline-none cursor-pointer relative -mr-3"
            aria-label="Toggle navigation menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="w-5 h-[1.5px] bg-white rounded-full origin-center"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
              className="w-5 h-[1.5px] bg-white rounded-full"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className="w-5 h-[1.5px] bg-white rounded-full origin-center"
            />
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-12 left-0 w-full bg-[#0a0e14]/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 flex flex-col gap-3 shadow-2xl z-40"
              >
                {navItems.map((item, idx) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04 }}
                      onClick={() => {
                        setActiveSection(item.id);
                        setIsOpen(false);
                      }}
                      className={`text-left text-sm py-2 px-3 rounded-xl border border-transparent transition-all flex items-center justify-between ${
                        isActive
                          ? "bg-white/10 text-white font-semibold border-white/10 shadow-[0_2px_10px_rgba(255,255,255,0.03)]"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      <span>{item.name}</span>
                      {isActive && <span className="text-[10px] text-cyan-400">●</span>}
                    </motion.button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* 2. HORIZONTAL TAB BAR (Visible on screens >= 350px wide, custom responsive mobile sizing) */}
      {!isSmallMobile && (
        <div className="flex flex-nowrap items-center justify-between md:justify-center gap-0 md:gap-1 px-2 py-1 md:py-1.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-2xl w-full">
          <div className="flex flex-nowrap items-center justify-between md:justify-center text-[10px] sm:text-xs md:text-sm relative w-full md:w-auto">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <motion.button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative flex-1 md:flex-none text-center px-0.5 sm:px-1.5 md:px-3 py-1.5 rounded-full overflow-visible group transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavTab"
                      className="absolute inset-0 bg-white/15 border border-white/25 rounded-full shadow-[0_4px_12px_rgba(255,255,255,0.05)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}

                  <span
                    className={`relative z-10 transition duration-300 ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-gray-400 group-hover:text-white"
                    }`}
                  >
                    {item.name}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
}


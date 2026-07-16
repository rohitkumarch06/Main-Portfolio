import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar({ activeSection, setActiveSection }) {
  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Resume", id: "resume" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <div className="fixed top-4 right-8 md:right-12 z-50 no-cursor-expand">
      <div className="flex items-center gap-1 px-2 py-1.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-2xl">
        {/* NAV ITEMS */}
        <div className="flex items-center gap-1 text-sm relative">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <motion.button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-3 py-1.5 rounded-full overflow-visible group transition-all duration-300 cursor-pointer"
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
    </div>
  );
}


import React from 'react';
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

export default function RotatingBadge({ link }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover="hover"
      className="relative w-[120px] h-[120px] block cursor-pointer"
    >
      {/* ROTATING TEXT */}
      <motion.div
        variants={{
          hover: { scale: 1.05 }
        }}
        animate={{ rotate: 360 }}
        transition={{ 
          rotate: { repeat: Infinity, duration: 10, ease: "linear" },
          scale: { duration: 0.3 }
        }}
        className="absolute inset-0"
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            <path
              id="circlePath"
              d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
          </defs>

          <text fill="white" fontSize="13" letterSpacing="1.8" className="font-semibold">
            <textPath href="#circlePath">
              GITHUB REPO • VISIT CODE •
            </textPath>
          </text>
        </svg>
      </motion.div>

      {/* CENTER BUTTON */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          variants={{
            hover: { 
              scale: 1.18, 
              backgroundColor: "#22d3ee",
              color: "#000000",
              boxShadow: "0 0 20px rgba(34, 211, 238, 0.6)"
            }
          }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="w-[50px] h-[50px] rounded-full bg-white text-black flex items-center justify-center text-xl font-bold shadow-lg"
        >
          <FaGithub size={24} />
        </motion.div>
      </div>
    </motion.a>
  );
}


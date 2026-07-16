import React from 'react';
import { motion, useScroll, useTransform } from "framer-motion";

export default function TopLeft() {
  const { scrollY } = useScroll();

  // Fade out between 0 → 150px scroll
  const opacity = useTransform(scrollY, [0, 150], [1, 0]);

  return (
    <motion.div
      style={{ opacity }}
      className="fixed top-6 left-6 flex items-center gap-3 text-xs z-50"
    >
      <span className="font-semibold bg-gradient-to-r from-gray-400 via-gray-200 to-gray-500 text-transparent bg-clip-text tracking-wide">
        RK
      </span>
      <span className="text-gray-600">|</span>

      <div className="flex flex-col gap-[2px] text-gray-400">
        <span className="uppercase tracking-[0.2em] text-[10px]">
          Software Engineer
        </span>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span className="text-green-500 text-[10px]">
            Building the future
          </span>
        </div>
      </div>
    </motion.div>
  );
}

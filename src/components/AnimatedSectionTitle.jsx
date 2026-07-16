import React from "react";
import { motion } from "framer-motion";

export default function AnimatedSectionTitle({ 
  text, 
  gradient = "from-cyan-400 via-purple-400 to-indigo-500",
  subtitle = "",
  align = "center", // "center" or "left"
  sizeClass = "text-5xl sm:text-6xl md:text-7xl lg:text-8xl",
  letterSpacing = "tracking-wide"
}) {
  const characters = text.split("");
  const N = characters.length;
  const centerIndex = (N - 1) / 2;
  const letterWidth = align === "left" ? 65 : 45; // letter width approximation for coordinate calculations

  // Adjust animation duration so that the staggered rising delay fits perfectly (slower premium speed)
  const duration = 1.3 + N * 0.13;

  return (
    <div className={`flex flex-col ${align === "left" ? "items-start text-left" : "items-center text-center"} relative w-full h-[60vh] justify-center overflow-visible`}>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 0.5, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs tracking-[0.25em] text-white/50 mb-3 uppercase font-mono z-20"
        >
          {subtitle}
        </motion.p>
      )}

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        className={`flex flex-wrap ${align === "left" ? "justify-start" : "justify-center"} items-center ${letterSpacing} py-2 select-none w-full relative z-20`}
      >
        {characters.map((char, index) => {
          if (char === " ") {
            return <span key={index} className="w-5 sm:w-7 md:w-8" />;
          }

          // 1. Offscreen starting coordinates at the top
          // Column values distribute characters across Left, Middle, and Right
          const column = index % 3;
          const startX = column === 0 ? -250 : column === 2 ? 250 : 0;
          const startY = -450; // High offscreen
          const startRotate = (index % 2 === 0 ? 55 : -55) + (index * 12);

          // 2. Pool coordinates at the bottom
          // Characters stack closely at the bottom center with tight spacing
          const bottomX = -((index - centerIndex) * letterWidth) + (index - centerIndex) * 12;
          const bottomY = 260; // Settle at the bottom of the page
          const bottomRotate = index % 2 === 0 ? 15 : -15;

          // Timeline mapping keyframes (slower premium speed):
          // f0: Initial top start
          // f1: Drop and hit the bottom
          // f2: Rests combined in the pile at the bottom
          // f3: Staggered start of the rise animation for letter 'index'
          // f4: Target spelling position reached
          // f5: Final scale settle
          const f0 = 0;
          const f1 = 0.32 / duration;
          const f2 = 0.48 / duration;
          const f3 = (0.48 + index * 0.10) / duration;
          const f4 = (0.48 + index * 0.10 + 0.38) / duration;
          const f5 = 1.0;

          const keyframeTimes = [f0, f1, f2, f3, f4, f5];

          const charVariants = {
            hidden: {
              opacity: 0,
              x: startX,
              y: startY,
              rotate: startRotate,
              scale: 0.5,
            },
            visible: {
              opacity: [0, 1, 1, 1, 1, 1],
              x: [startX, bottomX, bottomX, bottomX, 0, 0],
              y: [startY, bottomY, bottomY, bottomY, 0, 0],
              rotate: [startRotate, bottomRotate, 0, 0, 0, 0],
              scale: [0.5, 0.9, 0.9, 0.9, 1.1, 1],
              transition: {
                duration: duration,
                times: keyframeTimes,
                ease: ["easeIn", "easeOut", "linear", "backOut", "easeOut"],
              },
            },
          };

          return (
            <motion.span
              key={index}
              variants={charVariants}
              whileHover={{
                scale: 1.15,
                color: "#f1f5f9",
                WebkitTextFillColor: "#f1f5f9",
                textShadow: "0 0 15px rgba(255, 255, 255, 0.6)",
              }}
              className={`inline-block ${sizeClass} font-bold bg-gradient-to-br from-white via-cyan-100 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(255,255,255,0.15)] cursor-default select-none`}
              style={{ fontFamily: "'Cinzel Decorative', serif" }}
            >
              {char}
            </motion.span>
          );
        })}
      </motion.div>
    </div>
  );
}

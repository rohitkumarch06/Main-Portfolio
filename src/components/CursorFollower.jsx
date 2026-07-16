import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollower() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Springs for smooth fluid trail (tuned for responsive, smooth cursor follow)
  const ringX = useSpring(cursorX, { stiffness: 350, damping: 28, mass: 0.2 });
  const ringY = useSpring(cursorY, { stiffness: 350, damping: 28, mass: 0.2 });

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check if mouse is hovering over interactive elements
      const target = e.target;
      if (target && target.closest) {
        const isInteractive = target.closest(
          "a, button, [role='button'], input, select, textarea, .cursor-pointer, .hover-trigger"
        );
        const shouldDisableExpand = target.closest(".no-cursor-expand");
        setIsHovered(!!isInteractive && !shouldDisableExpand);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible, cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* 1. FLUID LAGGING TRAILING RING */}
      <motion.div
        style={{
          left: ringX,
          top: ringY,
          translateX: "-50%",
          translateY: "-50%",
          position: "fixed",
          pointerEvents: "none",
          zIndex: 99999,
        }}
        animate={{
          width: isHovered ? 80 : 36,
          height: isHovered ? 80 : 36,
          rotate: isClicking ? 45 : 0,
          borderWidth: isHovered ? "1px" : "1.5px",
          borderColor: isHovered ? "rgba(168, 85, 247, 0.8)" : "rgba(34, 211, 238, 0.6)",
          boxShadow: isHovered 
            ? "0 0 25px rgba(168, 85, 247, 0.4), inset 0 0 15px rgba(168, 85, 247, 0.2)"
            : "0 0 15px rgba(34, 211, 238, 0.2)",
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 22,
          mass: 0.1,
        }}
        className="hidden md:block rounded-full border border-dashed"
      />

      {/* 2. INVERTING CENTER LENS */}
      <motion.div
        style={{
          left: cursorX,
          top: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          position: "fixed",
          pointerEvents: "none",
          zIndex: 99999,
          mixBlendMode: "difference",
        }}
        animate={{
          width: isHovered ? 60 : 10,
          height: isHovered ? 60 : 10,
          scale: isClicking ? 0.8 : 1,
          backgroundColor: "#ffffff",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 24,
        }}
        className="hidden md:block rounded-full"
      />

      {/* 3. DYNAMIC GLOW DOT CORE */}
      <motion.div
        style={{
          left: cursorX,
          top: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          position: "fixed",
          pointerEvents: "none",
          zIndex: 99999,
        }}
        animate={{
          scale: isHovered ? 0 : isClicking ? 0.5 : 1,
        }}
        className="hidden md:block w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]"
      />
    </>
  );
}


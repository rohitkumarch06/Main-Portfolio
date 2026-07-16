import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function IdCard({
  image = "/profile3.jpg",
  name = "Rohit Kumar",
  role = "SOFTWARE ENGINEER",
}) {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position values for 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for 3D rotation
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), {
    stiffness: 250,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), {
    stiffness: 250,
    damping: 22,
  });

  // Holographic sheen position
  const shineX = useTransform(mouseX, [-0.5, 0.5], [20, 80]);
  const shineY = useTransform(mouseY, [-0.5, 0.5], [20, 80]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const normalizedX = (e.clientX - rect.left) / width - 0.5;
    const normalizedY = (e.clientY - rect.top) / height - 0.5;

    mouseX.set(normalizedX);
    mouseY.set(normalizedY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div className="relative flex flex-col items-center select-none pointer-events-auto">
      {/* LANYARD STRAP FROM TOP */}
      <div className="relative flex flex-col items-center">
        {/* STRAP RIBBON */}
        <div className="w-7 sm:w-8 h-36 sm:h-44 md:h-52 bg-[#111115] border-x border-white/10 shadow-2xl relative overflow-hidden flex flex-col items-center justify-around py-2">
          {/* STRAP TEXT */}
          <div className="text-[8px] sm:text-[9px] font-mono tracking-[0.25em] text-white/70 font-semibold uppercase whitespace-nowrap [writing-mode:vertical-lr] rotate-180 opacity-90 select-none">
            ROHIT KUMAR • 3D CARD
          </div>
          <div className="text-[8px] sm:text-[9px] font-mono tracking-[0.25em] text-white/50 font-semibold uppercase whitespace-nowrap [writing-mode:vertical-lr] rotate-180 select-none">
            SOFTWARE ENGINEER
          </div>
          {/* STRAP FABRIC TEXTURE OVERLAY */}
          <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:4px_4px] opacity-10 pointer-events-none" />
        </div>

        {/* METAL LANYARD CLIP ASSEMBLY */}
        <div className="relative -mt-1 z-20 flex flex-col items-center">
          {/* METAL BUCKLE */}
          <div className="w-5 sm:w-6 h-3 bg-gradient-to-r from-gray-700 via-gray-400 to-gray-800 rounded-sm border border-black/60 shadow-md" />
          {/* METAL RING/HOOK */}
          <div className="w-3.5 sm:w-4 h-4.5 border-2 border-gray-400 rounded-full border-t-transparent shadow-sm -mt-1" />
          {/* CARABINER CLIP */}
          <div className="w-2 sm:w-2.5 h-5 sm:h-6 bg-gradient-to-b from-gray-300 via-gray-500 to-gray-700 rounded-full -mt-2 shadow-lg border border-black/40" />
        </div>
      </div>

      {/* SWINGING & TILTING 3D BADGE CONTAINER */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        drag
        dragConstraints={{ left: -25, right: 25, top: -15, bottom: 25 }}
        dragElastic={0.15}
        whileDrag={{ scale: 1.03, cursor: "grabbing" }}
        animate={{
          rotateZ: isHovered ? 0 : [-1.5, 1.5, -1.5],
        }}
        transition={{
          rotateZ: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          perspective: 1000,
        }}
        className="-mt-2 cursor-grab relative group"
      >
        {/* BADGE OUTER FRAME (WHITE / LIGHT BEZEL LIKE REFERENCE IMAGE) */}
        <div className="w-[240px] sm:w-[270px] md:w-[290px] h-[350px] sm:h-[390px] md:h-[410px] bg-gradient-to-b from-gray-100 via-gray-200 to-gray-300 rounded-[26px] p-2.5 sm:p-3 shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_20px_rgba(255,255,255,0.08)] border border-white/60 relative flex flex-col items-center">
          
          {/* TOP LANYARD HOLE CUTOUT */}
          <div className="w-9 sm:w-10 h-3 sm:h-3.5 bg-[#0a0e14] border border-gray-400/50 rounded-full mb-2 flex items-center justify-center shadow-inner relative z-20">
            <div className="w-6 sm:w-7 h-1 sm:h-1.5 bg-black rounded-full" />
          </div>

          {/* INNER PHOTO & DETAILS CONTAINER */}
          <div className="w-full h-full bg-[#0a0c10] rounded-[18px] sm:rounded-[20px] p-2 sm:p-2.5 flex flex-col justify-between relative overflow-hidden border border-black/40 shadow-inner">
            
            {/* PHOTO BOX */}
            <div className="relative w-full h-[230px] sm:h-[265px] md:h-[280px] rounded-[12px] sm:rounded-[14px] overflow-hidden bg-neutral-900 border border-white/10 group-hover:border-white/30 transition-all">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
              />

              {/* LIGHT SPOTLIGHT / GLOW EFFECT INSIDE PHOTO BOX */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

              {/* HOLOGRAPHIC SHEEN OVERLAY */}
              <motion.div
                style={{
                  background: `radial-gradient(circle at ${shineX}% ${shineY}%, rgba(255,255,255,0.3) 0%, transparent 60%)`,
                }}
                className="absolute inset-0 pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity"
              />
            </div>

            {/* BADGE FOOTER DETAILS */}
            <div className="px-2 py-1 flex items-center justify-between z-10">
              <div className="flex flex-col">
                <span className="text-[13px] sm:text-[14px] font-bold text-white tracking-wide font-sans leading-tight">
                  {name}
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-semibold mt-0.5">
                  {role}
                </span>
              </div>

              {/* SECURITY CHIP / LOGO STICKER */}
              <div className="flex flex-col items-end">
                <div className="w-5 sm:w-6 h-3.5 sm:h-4 bg-gradient-to-br from-amber-200 via-amber-400 to-yellow-600 rounded-[3px] border border-amber-300/40 shadow-sm flex items-center justify-center p-[2px]">
                  <div className="w-full h-full border border-amber-800/40 rounded-[1px] grid grid-cols-2 gap-[1px]">
                    <div className="bg-amber-700/30" />
                    <div className="bg-amber-700/30" />
                  </div>
                </div>
                <span className="text-[7px] sm:text-[8px] font-mono text-gray-500 uppercase tracking-widest mt-1">
                  ID: #2026-RK
                </span>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </div>
  );
}

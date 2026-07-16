import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
import AnimatedSectionTitle from "./AnimatedSectionTitle";

const images = ["/img1.jpg", "/img2.jpg", "/img3.jpg"];

export default function About({ scrollContainer, setActiveSection }) {
  const [index, setIndex] = useState(0);
  const [isStackHovered, setIsStackHovered] = useState(false);

  // Rotate images automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleNavigation = () => {
    if (setActiveSection) {
      setActiveSection("projects");
    }
  };

  return (
    <section id="about" style={{ background: 'radial-gradient(circle at 30% 20%, #182024 0%, #0a0e14 55%, #050508 100%)' }} className="relative text-white w-full">
      {/* AMBIENT BACKGROUND GLOW */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-900/20 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* HEADING (occupies full screen cover) */}
      <div className="w-full h-screen flex flex-col items-center justify-center snap-start snap-always relative z-10">
        <AnimatedSectionTitle text="ABOUT ME" subtitle="A QUICK GLANCE" gradient="from-slate-300 via-cyan-200/80 to-slate-500" />
      </div>

      {/* ACTUAL CONTENT */}
      <div className="relative w-full flex flex-col md:flex-row items-center justify-between z-10 px-6 md:px-12 lg:px-16 snap-start snap-always min-h-screen py-24">
        {/* LEFT COLUMN: ABOUT DETAILS */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-end md:pr-12 lg:pr-16">
          <div className="w-full max-w-xl">
            <p className="text-xs tracking-[0.3em] text-white/60 mb-6">
              A QUICK GLANCE
            </p>

            <h1 className="text-[42px] md:text-[64px] lg:text-[50px] font-semibold leading-[1.1]">
              <span className="block">
                Let me introduce
              </span>

              <span className="block">
                myself to{" "}
                <span className="font-serif italic bg-gradient-to-r from-gray-600 via-gray-400 to-gray-700 text-transparent bg-clip-text">
                  you
                </span>
              </span>
            </h1>

            <div className="mt-8 text-white/70 leading-relaxed space-y-4">
              <p>
                Hello, I'm Rohit Kumar. I am a B.Tech student in Computer Science and Engineering
                with a specialization in Artificial Intelligence and Machine Learning at Haldia Institute of
                Technology.
              </p>
              <p>
                I specialize in frontend development crafting responsive and user-friendly websites, with a
                strong interest in expanding into backend technologies to become a full-stack developer.
                I'm passionate about machine learning and enjoy working on data-driven projects that push
                my analytical and technical skills.
              </p>
            </div>

            {/* PROFILE INFO GRID */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { label: "Name", val: "Rohit Kumar", accent: "rgba(56, 189, 248, 0.15)" },
                { label: "Email", val: "rohitkch596@gmail.com", accent: "rgba(168, 85, 247, 0.15)", link: "mailto:rohitkch596@gmail.com" },
                { label: "Location", val: "Haldia, West Bengal, India", accent: "rgba(34, 197, 94, 0.15)" },
                { label: "Experience", val: "Trainee - Capgemini & PwC", accent: "rgba(244, 63, 94, 0.15)" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ 
                    scale: 1.03,
                    borderColor: "rgba(255, 255, 255, 0.15)",
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    boxShadow: `0 10px 30px -10px ${item.accent}`
                  }}
                  className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-md transition-all duration-300"
                >
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider font-mono">{item.label}</p>
                  {item.link ? (
                    <a href={item.link} className="text-sm font-semibold text-white mt-1 text-xs md:text-sm truncate block hover:text-purple-400 transition-colors">
                      {item.val}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-white mt-1">{item.val}</p>
                  )}
                </motion.div>
              ))}
            </div>

            {/* SOCIAL LINKS */}
            <div className="flex items-center gap-5 mt-8 text-white/50">
              {[
                {href: "https://www.linkedin.com/in/rohit-kumar-779293257/", icon: <FaLinkedin />, color: "#0077b5" },
                { href: "https://github.com/rohitkumarch06", icon: <FaGithub />, color: "#ffffff" },
                { href: "https://leetcode.com/Rohit_Kumar95", icon: <SiLeetcode />, color: "#ffa116" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.25, rotate: 5, color: social.color }}
                  className="transition-colors duration-300 text-xl"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* ACTION BUTTON */}
            <motion.button
              onClick={handleNavigation}
              whileHover="hover"
              className="mt-8 inline-flex items-center gap-3 text-sm text-white group cursor-pointer bg-transparent border-0 outline-none"
            >
              <span className="font-semibold tracking-wider">View my work</span>
              <motion.span 
                variants={{
                  hover: { x: 6, borderColor: "rgba(255, 255, 255, 1)", backgroundColor: "rgba(255, 255, 255, 1)", color: "#000" }
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="w-8 h-8 flex items-center justify-center border border-white/20 rounded-full text-white transition-colors duration-300"
              >
                →
              </motion.span>
            </motion.button>
          </div>
        </div>

        {/* RIGHT COLUMN: CAROUSEL IMAGE STACK */}
        <div 
          className="w-full md:w-1/2 flex items-center justify-center md:justify-start md:pl-24 lg:pl-[220px] xl:pl-[300px] mt-12 md:mt-0 md:-translate-y-10 lg:-translate-y-16 relative z-10"
          onMouseEnter={() => setIsStackHovered(true)}
          onMouseLeave={() => setIsStackHovered(false)}
        >
          <div className="relative w-[340px] h-[420px] flex items-center justify-center">
            {images.map((img, i) => {
              const position = (i - index + images.length) % images.length;

              // Calculate positions based on fanning hover state
              let targetX = 0;
              let targetRotate = 0;
              let targetScale = 1;
              let targetY = 0;

              if (position === 0) {
                targetX = 0;
                targetRotate = isStackHovered ? -2 : 0;
                targetScale = 1;
                targetY = 0;
              } else if (position === 1) {
                targetX = isStackHovered ? 100 : 80;
                targetRotate = isStackHovered ? 12 : 8;
                targetScale = 0.92;
                targetY = isStackHovered ? 8 : 0;
              } else {
                targetX = isStackHovered ? -100 : -80;
                targetRotate = isStackHovered ? -12 : -8;
                targetScale = 0.92;
                targetY = isStackHovered ? 8 : 0;
              }

              return (
                <motion.div
                  key={i}
                  className="absolute w-full h-full rounded-2xl overflow-hidden border-2 border-white/15 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)]"
                  animate={{
                    x: targetX,
                    y: targetY,
                    scale: targetScale,
                    rotate: targetRotate,
                    zIndex: position === 0 ? 3 : position === 1 ? 2 : 1,
                    opacity: position === 2 ? 0.7 : 1,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <img
                    src={img}
                    alt="Rohit image stack item"
                    className="w-full h-full object-cover"
                  />
                  {/* Premium glass frame borders and gradient sheen overlays */}
                  <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08] pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
}

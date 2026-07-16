import React, { useState } from 'react';
import { motion } from "framer-motion";
import { SiLeetcode } from "react-icons/si";
import PremiumCube from "./PremiumCube";
import IdCard from "./IdCard";
import AnimatedSectionTitle from "./AnimatedSectionTitle";

export default function Hero({ activeSection, setActiveSection }) {
  const text = "ROHIT";
  const [activeTab, setActiveTab] = useState("Motion");
  const isHomeActive = activeSection === "home";

  const handleNavigation = (id) => {
    if (setActiveSection) {
      setActiveSection(id);
    }
  };

  return (
    <div id="home">
      {/* ================= HERO CONTENT ================= */}
      <main id="home-main" style={{ background: 'radial-gradient(circle at 20% 70%, #182024 0%, #0a0e14 55%, #050508 100%)' }} className="relative min-h-screen text-white flex flex-col md:flex-row items-stretch justify-between z-10 px-6 md:px-12 lg:px-16 overflow-hidden">

        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-900/20 via-teal-900/20 to-emerald-900/10 opacity-40 blur-[140px] rounded-full -translate-x-1/2 -translate-y-1/2 animate-[pulse_6s_ease-in-out_infinite]" />
        </div>

        {/* LEFT COLUMN: HERO DETAILS */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-end md:pr-12 lg:pr-16 pt-32 pb-20 md:py-0 relative z-10">
          <div className="w-full max-w-xl text-left">
            {/* Cursive Subtitle */}
            <motion.p
              initial={{ opacity: 0, x: -100 }}
              animate={isHomeActive ? { opacity: 0.9, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ duration: 1.0, ease: "easeOut" }}
              style={{ fontFamily: "'Alex Brush', cursive" }}
              className="text-3xl tracking-normal text-rose-300/90 mb-3 pl-1"
            >
              Software Engineer
            </motion.p>

            {/* NAME (Staggered Letter Reveal - Slow One-by-One in Cinzel Decorative) */}
            <motion.h1
              style={{ fontFamily: "'Cinzel Decorative', serif" }}
              className="text-[70px] md:text-[100px] lg:text-[120px] xl:text-[140px] font-bold tracking-normal leading-none text-left flex overflow-hidden py-2"
            >
              {text.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={isHomeActive ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
                  transition={{
                    duration: 1.4,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.4 + index * 0.22,
                  }}
                  whileHover={{
                    scale: 1.15,
                    color: "#f1f5f9",
                    WebkitTextFillColor: "#f1f5f9",
                    textShadow: "0 0 15px rgba(255, 255, 255, 0.6)",
                  }}
                  className="inline-block bg-gradient-to-br from-white via-cyan-100 to-cyan-400 text-transparent bg-clip-text cursor-default select-none"
                  style={{ fontFamily: "'Cinzel Decorative', serif" }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            {/* TAGLINE */}
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              animate={isHomeActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              className="mt-4 text-3xl md:text-5xl font-semibold text-left"
            >
              Crafting digital{" "}
              <span className="font-serif italic text-gray-400">
                experiences
              </span>{" "}
              that matter
            </motion.h2>

            {/* SUBTEXT */}
            <motion.p
              initial={{ opacity: 0, x: -80 }}
              animate={isHomeActive ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="mt-6 text-gray-400 max-w-2xl mr-auto text-left"
            >
              I build modern full-stack web products, craft responsive layouts, and explore machine learning solutions.
            </motion.p>
          </div>
        </div>

        {/* RIGHT COLUMN: ID CARD CONTAINER */}
        <div className="w-full md:w-1/2 flex items-start justify-center md:justify-start md:pl-24 lg:pl-[220px] xl:pl-[300px] mt-12 md:mt-0 relative z-10">
          <motion.div
            initial={{ y: -800, opacity: 0 }}
            animate={isHomeActive ? { y: 0, opacity: 1 } : { y: -800, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 14,
              mass: 1.2,
              delay: 0.2
            }}
            className="relative"
          >
            <IdCard image="/profile3.jpg" name="Rohit Kumar" role="SOFTWARE ENGINEER" />
          </motion.div>
        </div>

        {/* BOTTOM LEFT */}
        <div className="absolute bottom-6 left-6 md:left-12 lg:left-16 z-40">
          <div className="flex items-start gap-2">
            <span className="text-green-500 text-lg">📍</span>

            <div className="flex flex-col leading-tight">
              <span className="text-white text-[12px] uppercase tracking-[0.15em]">
                Based in Jagdishpur,
              </span>
              <span className="text-gray-500 text-[11px] uppercase tracking-[0.15em]">
                West Champaran, Bihar, India
              </span>
            </div>
          </div>
        </div>

        {/* BOTTOM RIGHT */}
        <div className="absolute bottom-6 right-6 md:right-12 lg:right-16 z-40 text-center">
          <div className="flex justify-center mb-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-blue-500">
              <path d="M12 3L3 8L12 13L21 8L12 3Z" stroke="currentColor" strokeWidth="1.5" />
              <path d="M3 12L12 17L21 12" stroke="currentColor" strokeWidth="1.5" />
              <path d="M3 16L12 21L21 16" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>

          <div className="leading-tight">
            <p className="text-white text-[12px] uppercase tracking-[0.15em]">
              SOFTWARE ENG,
            </p>
            <p className="text-gray-500 text-[11px] uppercase tracking-[0.15em]">
              & CS STUDENT
            </p>
          </div>
        </div>

      </main>

      {/* ================= BENTO GRID ================= */}
      <section id="home-bento" style={{ background: 'radial-gradient(circle at 20% 70%, #182024 0%, #0a0e14 55%, #050508 100%)' }} className="py-16 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">

        {/* LEFT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            y: -8,
            scale: 1.015,
            borderColor: "rgba(56, 189, 248, 0.3)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.5), 0 0 25px rgba(56,189,248,0.08)"
          }}
          transition={{ duration: 0.4 }}
          className="md:col-span-1 h-[520px] bg-white/[0.03] border border-white/10 rounded-[32px] p-6 backdrop-blur-xl flex flex-col justify-between transition-colors duration-300"
        >
          <div>
            <h2 className="text-[26px] font-semibold">
              Rohit{" "}
              <span className="font-serif italic text-gray-400">
                Kumar
              </span>
            </h2>

            <p className="mt-2 text-xs text-gray-500 uppercase tracking-widest">
              Haldia, IN
            </p>
          </div>

          {/* CUBE */}
          <div className="flex justify-center items-center h-[220px] mt-2">
            <PremiumCube containerSize={220} />
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center gap-6 text-gray-400 items-center">
            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/rohit-kumar-779293257/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.25, rotate: 6, color: "#0077b5" }}
              className="transition-colors duration-300"
            >
              <svg width="18" height="18" fill="currentColor">
                <path d="M16 0H2C.9 0 0 .9 0 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zM5.3 13.5H2.7V6h2.6v7.5zM4 4.9c-.8 0-1.4-.6-1.4-1.4S3.2 2 4 2s1.4.6 1.4 1.4S4.8 4.9 4 4.9zM15.3 13.5h-2.6v-3.6c0-.9-.3-1.5-1.1-1.5-.6 0-1 .4-1.2.8-.1.2-.1.5-.1.8v3.5H7.7V6h2.5v1h.1c.3-.6 1-1.4 2.4-1.4 1.8 0 3.1 1.2 3.1 3.7v4.2z" />
              </svg>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/rohitkumarch06"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.25, rotate: -6, color: "#ffffff" }}
              className="transition-colors duration-300"
            >
              <svg width="18" height="18" fill="currentColor">
                <path d="M9 0C4 0 0 4 0 9c0 4 2.6 7.4 6.2 8.6.5.1.7-.2.7-.5v-1.7c-2.5.5-3-1.2-3-1.2-.4-1-.9-1.3-.9-1.3-.8-.5 0-.5 0-.5.9.1 1.4.9 1.4.9.8 1.3 2.1.9 2.6.7.1-.6.3-1 .6-1.2-2-.2-4-1-4-4.4 0-1 .4-1.9 1-2.5-.1-.2-.4-1.2.1-2.5 0 0 .8-.3 2.6 1 .8-.2 1.6-.3 2.4-.3s1.6.1 2.4.3c1.8-1.3 2.6-1 2.6-1 .5 1.3.2 2.3.1 2.5.6.6 1 1.5 1 2.5 0 3.4-2 4.2-4 4.4.3.3.6.8.6 1.6v2.3c0 .3.2.6.7.5C15.4 16.4 18 13 18 9c0-5-4-9-9-9z" />
              </svg>
            </motion.a>

            {/* LeetCode */}
            <motion.a
              href="https://leetcode.com/Rohit_Kumar95"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.25, rotate: 6, color: "#ffa116" }}
              className="transition-colors duration-300 text-[15px]"
            >
              <SiLeetcode />
            </motion.a>
          </div>
        </motion.div>

        {/* CENTER CARD */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            y: -8,
            scale: 1.01,
            borderColor: "rgba(168, 85, 247, 0.3)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.5), 0 0 25px rgba(168,85,247,0.08)"
          }}
          transition={{ duration: 0.4 }}
          className="md:col-span-2 h-[520px] relative rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden transition-colors duration-300"
        >
          {/* SOFT GLOW */}
          <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.05),transparent_60%)] pointer-events-none" />

          {/* CONTENT */}
          <div className="relative z-10 p-12 flex flex-col h-full justify-start">

            {/* TOP */}
            <div className="flex justify-between text-xs text-gray-500 tracking-widest mb-10">
              <span>DETAIL-DRIVEN UI</span>
              <span>PHILOSOPHY ✦</span>
            </div>

            {/* MIDDLE */}
            <div className="grid grid-cols-2 gap-10 items-start">

              {/* LEFT */}
              <div>
                <h2 className="text-4xl md:text-[42px] font-semibold leading-tight">
                  Interfaces <br />
                  <span className="font-serif italic text-gray-400 text-[28px] md:text-[32px]">
                    you can feel.
                  </span>
                </h2>

                <p className="mt-5 text-gray-400 text-[13px] leading-relaxed">
                  I strive to create digital experiences that feel organic and human.
                </p>
              </div>

              {/* RIGHT */}
              <div className="text-right">
                <div className="flex flex-wrap justify-end gap-1.5 mb-2">
                  {["Motion", "Type", "Feedback", "Craft"].map((t) => (
                    <motion.span
                      key={t}
                      onClick={() => setActiveTab(t)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-2 py-[2px] text-[10px] rounded-full border cursor-pointer transition ${activeTab === t
                        ? "border-purple-500 text-purple-400"
                        : "border-white/10 text-gray-300 hover:border-white/30"
                        }`}
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>

                <p className="text-white text-xs font-medium">
                  {activeTab === "Motion" && "Micro-interactions"}
                  {activeTab === "Type" && "Typography"}
                  {activeTab === "Feedback" && "Responsiveness"}
                  {activeTab === "Craft" && "Attention to detail"}
                </p>

                <p className="mt-3 text-gray-400 text-xs max-w-[260px] leading-relaxed">
                  {activeTab === "Motion" && "Subtle movement that confirms intent — never distracting."}
                  {activeTab === "Type" && "Clean hierarchy and rhythm for effortless scanning."}
                  {activeTab === "Feedback" && "Every hover, click, and focus gets a crisp response."}
                  {activeTab === "Craft" && "Polish lives in the edges: spacing, timing, and states."}
                </p>
              </div>
            </div>

            {/* BOTTOM: INTERACTIVE SIMULATOR */}
            <div className="mt-8 pt-6 border-t border-white/5 flex-grow flex flex-col justify-between">
              <div className="text-[10px] text-gray-500 uppercase tracking-wider mb-3">Live Interactive Spec:</div>
              
              <div className="bg-white/[0.01] border border-white/5 rounded-2xl p-4 flex items-center justify-between min-h-[140px]">
                
                {/* Active Tab Preview Element */}
                <div className="flex-1 flex justify-center items-center">
                  {activeTab === "Motion" && (
                    <motion.button
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.85, rotate: -2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-xs font-semibold shadow-[0_0_20px_rgba(168,85,247,0.3)] cursor-pointer"
                    >
                      Bouncy Button
                    </motion.button>
                  )}

                  {activeTab === "Type" && (
                    <div className="space-y-1.5 w-full text-left">
                      <div className="relative border-b border-dashed border-white/10 pb-1">
                        <span className="absolute -top-3 right-0 text-[8px] text-purple-400 font-mono">20px / 700 / Outfit</span>
                        <h4 className="text-sm font-bold text-white tracking-wide">Dynamic Header</h4>
                      </div>
                      <div className="relative pt-0.5">
                        <span className="absolute -bottom-3 right-0 text-[8px] text-purple-400 font-mono">11px / 400 / Inter</span>
                        <p className="text-[10px] text-gray-400 leading-normal">
                          Crafting layouts with strict horizontal rhythm & balance.
                        </p>
                      </div>
                    </div>
                  )}

                  {activeTab === "Feedback" && (
                    <div className="flex gap-3">
                      {[
                        { name: "Cyan", color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:bg-cyan-500/30" },
                        { name: "Rose", color: "bg-rose-500/20 text-rose-400 border-rose-500/30 hover:shadow-[0_0_15px_rgba(251,113,133,0.3)] hover:bg-rose-500/30" },
                        { name: "Amber", color: "bg-amber-500/20 text-amber-400 border-amber-500/30 hover:shadow-[0_0_15px_rgba(251,191,36,0.3)] hover:bg-amber-500/30" }
                      ].map((swatch, idx) => (
                        <motion.div
                          key={idx}
                          whileHover={{ y: -4 }}
                          className={`w-14 h-14 rounded-xl border flex flex-col justify-center items-center text-[8px] font-mono font-bold cursor-pointer transition-all duration-300 ${swatch.color}`}
                        >
                          <span>{swatch.name}</span>
                          <span className="text-[6px] opacity-60 mt-1">HOVER</span>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {activeTab === "Craft" && (
                    <div className="relative w-44 h-16 rounded-xl border border-white/10 bg-white/[0.02] backdrop-blur-md flex items-center justify-between px-3 overflow-hidden">
                      {/* Corner indicators */}
                      <span className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-purple-400"></span>
                      <span className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-purple-400"></span>
                      <span className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-purple-400"></span>
                      <span className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-purple-400"></span>
                      
                      <div className="flex flex-col">
                        <span className="text-[9px] font-mono text-white font-semibold">Glass Card</span>
                        <span className="text-[7px] text-gray-500 font-mono mt-0.5">r: 12px / filter: blur</span>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-purple-500/20 border border-purple-500/40 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Vertical Divider */}
                <div className="w-[1px] h-20 bg-white/5 mx-4"></div>

                {/* CSS/Spec Code Preview Panel */}
                <div className="w-1/2 text-left font-mono text-[9px] text-gray-500 leading-relaxed overflow-hidden">
                  {activeTab === "Motion" && (
                    <>
                      <span className="text-purple-400">transition</span>: &#123;<br />
                      &nbsp;&nbsp;type: <span className="text-cyan-400">"spring"</span>,<br />
                      &nbsp;&nbsp;stiffness: <span className="text-amber-400">400</span>,<br />
                      &nbsp;&nbsp;damping: <span className="text-amber-400">15</span><br />
                      &#125;;
                    </>
                  )}
                  {activeTab === "Type" && (
                    <>
                      <span className="text-purple-400">font-family</span>: <span className="text-cyan-400">"Inter, sans"</span>;<br />
                      <span className="text-purple-400">font-size</span>: <span className="text-amber-400">11px</span>;<br />
                      <span className="text-purple-400">line-height</span>: <span className="text-amber-400">1.6</span>;<br />
                      <span className="text-purple-400">letter-spacing</span>: <span className="text-amber-400">0.02em</span>;
                    </>
                  )}
                  {activeTab === "Feedback" && (
                    <>
                      <span className="text-purple-400">.pill:hover</span> &#123;<br />
                      &nbsp;&nbsp;filter: <span className="text-cyan-400">drop-shadow(glow)</span>;<br />
                      &nbsp;&nbsp;transform: <span className="text-cyan-400">translateY(-4px)</span>;<br />
                      &nbsp;&nbsp;transition: <span className="text-amber-400">300ms ease</span>;<br />
                      &#125;
                    </>
                  )}
                  {activeTab === "Craft" && (
                    <>
                      <span className="text-purple-400">.glass-panel</span> &#123;<br />
                      &nbsp;&nbsp;border: <span className="text-cyan-400">1px solid white/10</span>;<br />
                      &nbsp;&nbsp;backdrop-filter: <span className="text-cyan-400">blur(12px)</span>;<br />
                      &nbsp;&nbsp;border-radius: <span className="text-amber-400">12px</span>;<br />
                      &#125;
                    </>
                  )}
                </div>

              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            y: -8,
            scale: 1.015,
            borderColor: "rgba(34, 197, 94, 0.3)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.5), 0 0 25px rgba(34,197,94,0.08)"
          }}
          transition={{ duration: 0.4 }}
          className="md:col-span-1 h-[520px] bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[32px] p-6 flex flex-col justify-between relative overflow-hidden transition-colors duration-300"
        >
          {/* SOFT GLOW */}
          <div className="absolute inset-0 rounded-[32px] bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.05),transparent_60%)] pointer-events-none" />

          {/* TOP */}
          <div className="flex justify-between relative z-10">
            <div className="w-8 h-8 border border-white/10 rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>

            <div className="flex items-center gap-2 text-xs px-3 py-1 border border-white/10 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available
            </div>
          </div>

          {/* TEXT */}
          <div className="relative z-10">
            <h2 className="text-2xl font-bold leading-tight">
              LET’S BUILD <br />
              SOMETHING <br />
              <span className="font-serif italic text-gray-400">
                that works.
              </span>
            </h2>
          </div>

          {/* BUTTON */}
          <motion.button
            onClick={() => handleNavigation("contact")}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 0 25px rgba(16, 185, 129, 0.4)",
              background: "linear-gradient(90deg, #10b981, #059669)"
            }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-2.5 px-5 rounded-full relative overflow-hidden bg-gradient-to-r from-green-600 via-emerald-500 to-green-700 text-white text-sm font-semibold tracking-[0.12em] border border-white/10 backdrop-blur-md transition-all duration-300 z-10 cursor-pointer"
          >
            CONNECT NOW ↗
          </motion.button>
        </motion.div>

      </section>
    </div>
  );
}

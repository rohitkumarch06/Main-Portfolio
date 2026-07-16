import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";
import AnimatedSectionTitle from "./AnimatedSectionTitle";
import InteractiveTerminal from "./InteractiveTerminal";

export default function Contact({ scrollContainer }) {
  return (
    <section id="contact" style={{ background: 'radial-gradient(circle at 50% 80%, #182024 0%, #0a0e14 55%, #050508 100%)' }} className="relative text-white w-full">
      {/* AMBIENT BACKGROUND GLOW */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-900/20 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* HEADING (occupies full screen cover) */}
      <div className="w-full h-screen flex flex-col items-center justify-center snap-start snap-always relative z-10">
        <AnimatedSectionTitle text="GET IN TOUCH" subtitle="SAY HELLO" gradient="from-slate-300 via-emerald-200/70 to-slate-500" />
      </div>

      {/* ACTUAL CONTENT */}
      <div className="w-full min-h-screen flex items-center justify-center snap-start snap-always py-24 relative z-10 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl w-full mx-auto text-center">

          {/* HEADING */}
          <div className="inline-block mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white relative pb-4">
              Contact
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full" />
            </h2>
          </div>

          {/* 3 DETAIL CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

            {/* EMAIL */}
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.02,
                borderColor: "rgba(56, 189, 248, 0.4)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.5), 0 0 25px rgba(56,189,248,0.12)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 flex flex-col items-center shadow-lg transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 text-xl">
                <FaEnvelope />
              </div>
              <h3 className="text-gray-400 text-sm font-mono tracking-wider uppercase mb-2">Email</h3>
              <a href="mailto:rohitkch596@gmail.com" className="text-white text-base font-semibold hover:text-blue-400 transition break-all cursor-pointer">
                rohitkch596@gmail.com
              </a>
            </motion.div>

            {/* PHONE */}
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.02,
                borderColor: "rgba(16, 185, 129, 0.4)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.5), 0 0 25px rgba(16, 185, 129, 0.12)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 flex flex-col items-center shadow-lg transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 text-xl">
                <FaPhoneAlt />
              </div>
              <h3 className="text-gray-400 text-sm font-mono tracking-wider uppercase mb-2">Phone</h3>
              <a href="tel:+919525806681" className="text-white text-base font-semibold hover:text-blue-400 transition cursor-pointer">
                +91-9525806681
              </a>
            </motion.div>

            {/* LOCATION */}
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.02,
                borderColor: "rgba(244, 63, 94, 0.4)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.5), 0 0 25px rgba(244, 63, 94, 0.12)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 flex flex-col items-center shadow-lg transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 text-xl">
                <FaMapMarkerAlt />
              </div>
              <h3 className="text-gray-400 text-sm font-mono tracking-wider uppercase mb-2">Location</h3>
              <p className="text-white text-base font-semibold leading-relaxed">
                Jagdishpur, West Champaran, Bihar, India
              </p>
            </motion.div>

          </div>

          {/* INTERACTIVE TERMINAL WIDGET */}
          <div className="w-full max-w-3xl mx-auto mb-16 px-2">
            <p className="text-gray-400 text-sm font-mono tracking-wider uppercase mb-6">
              Interactive Developer Console
            </p>
            <InteractiveTerminal />
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-gray-400 text-sm font-mono tracking-wider uppercase">
              Let's connect on social media
            </p>

            <div className="flex items-center gap-5 text-gray-400">
              {[
                { href: "https://github.com/rohitkumarch06", icon: <FaGithub />, color: "#ffffff", shadowColor: "rgba(255, 255, 255, 0.4)" },
                { href: "https://www.linkedin.com/in/rohit-kumar-779293257/", icon: <FaLinkedin />, color: "#0077b5", shadowColor: "rgba(0, 119, 181, 0.4)" },
                { href: "https://leetcode.com/Rohit_Kumar95", icon: <SiLeetcode />, color: "#ffa116", shadowColor: "rgba(255, 161, 22, 0.4)" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.15,
                    color: social.color,
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    borderColor: social.color,
                    boxShadow: `0 0 15px ${social.shadowColor}`
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-lg transition duration-300 cursor-pointer"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


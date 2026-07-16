import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function Footer({ setActiveSection }) {
  const handleNavigation = (id) => {
    if (setActiveSection) {
      setActiveSection(id);
    }
  };

  return (
    <footer className="bg-transparent px-6 md:px-16 lg:px-24 pb-12 pt-16 flex flex-col justify-between">
      
      {/* BRAND & NAVIGATION CARD */}
      <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row justify-between gap-8 max-w-6xl w-full mx-auto">
        
        {/* LEFT BRAND INFO */}
        <div className="max-w-sm">
          <h2 className="text-[44px] md:text-[52px] text-white leading-none italic font-serif mb-4">
            ROHIT
          </h2>
          <p className="text-white/60 text-[14px] leading-[1.6] font-medium tracking-tight">
            Building digital experiences that matter, one line of code at a time.
            Crafting interfaces that feel alive, solving problems that make a difference,
            and turning ideas into reality. Every pixel has a purpose.
          </p>
        </div>

        {/* RIGHT NAVIGATION GRID */}
        <div className="grid grid-cols-2 gap-16 text-sm md:pr-10">
          
          {/* SECTIONS */}
          <div>
            <h3 className="text-white/30 text-xs tracking-wider uppercase mb-4">Navigation</h3>
            <ul className="space-y-2.5">
              {[
                { name: "Home", id: "home" },
                { name: "About", id: "about" },
                { name: "Skills", id: "skills" },
                { name: "Projects", id: "projects" },
                { name: "Resume", id: "resume" },
                { name: "Contact", id: "contact" }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavigation(item.id)}
                    className="block text-white/70 text-[15px] font-medium tracking-tight hover:text-white transition cursor-pointer text-left"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* SOCIALS */}
          <div>
            <h3 className="text-white/30 text-xs tracking-wider uppercase mb-4">Socials</h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://github.com/rohitkumarch06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white/70 text-[15px] font-medium tracking-tight hover:text-white transition"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/rohit-kumar-779293257/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white/70 text-[15px] font-medium tracking-tight hover:text-white transition"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://leetcode.com/Rohit_Kumar95"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white/70 text-[15px] font-medium tracking-tight hover:text-white transition"
                >
                  LeetCode
                </a>
              </li>
            </ul>
          </div>

        </div>

      </div>

      {/* COPYRIGHT & ICON BAR */}
      <div className="mt-16 pb-2 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 max-w-6xl w-full mx-auto">
        
        {/* LEFT COPYRIGHT */}
        <p className="text-white/40 text-xs tracking-tight">
          © {new Date().getFullYear()} ROHIT KUMAR. ALL RIGHTS RESERVED.
        </p>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-5 text-gray-400">
          <a
            href="https://github.com/rohitkumarch06"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition text-lg"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/rohit-kumar-779293257/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition text-lg"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://leetcode.com/Rohit_Kumar95"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition text-[15px]"
          >
            <SiLeetcode />
          </a>
        </div>

      </div>

    </footer>
  );
}

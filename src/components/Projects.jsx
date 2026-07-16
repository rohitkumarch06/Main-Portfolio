import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import RotatingBadge from "./RotatingBadge";
import { FaReact, FaNodeJs, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiJavascript, SiGoogle } from "react-icons/si";
import AnimatedSectionTitle from "./AnimatedSectionTitle";

// ─── DATA ─────────────────────────────────────────────
const projects = [
  {
    id: 1,
    title: "AI Interview Prep",
    link: "https://github.com/rohitkumarch06",
    desc: "Engineered a full-stack MERN app enabling 100+ users to upload resumes and receive AI-generated mock interview questions via Grok/Gemini AI API, improving prep efficiency by 35%. Implemented secure JWT authentication and role-based session management across 10+ RESTful APIs, reducing unauthorized access by 100%.",
    gradient: "from-red-500 to-red-700",
    images: [
      "/projects/cvforge2.png",
      "/projects/cvforge1.png",
      "/projects/cvforge3.png",
    ],
    tech: [
      { name: "React", icon: <FaReact className="text-blue-400" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "Gemini AI", icon: <SiGoogle className="text-red-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
    ]
  },
  {
    id: 2,
    title: "Nearby Places Finder",
    link: "https://github.com/rohitkumarch06",
    desc: "Built a location discovery app using Geolocation APIs, surfacing 200+ famous Indian landmarks within a 10 km radius with 95% location accuracy. Integrated OpenStreetMap and Leaflet.js for interactive mapping with distance-based filters to optimize search relevance by 30%.",
    gradient: "from-blue-500 to-blue-700",
    images: [
      "/projects/Snapurl1.png",
      "/projects/Snapurl2.png",
      "/projects/Snapurl3.png",
    ],
    tech: [
      { name: "React.js", icon: <FaReact className="text-blue-400" /> },
      { name: "Leaflet.js", icon: <span className="text-green-400 font-bold">L</span> },
      { name: "OpenStreetMap", icon: <span className="text-blue-400 font-bold">OSM</span> },
      { name: "Geolocation API", icon: <span className="text-yellow-400 font-bold">GPS</span> },
    ]
  },
  {
    id: 3,
    title: "Personal Portfolio",
    link: "https://github.com/rohitkumarch06",
    desc: "Developed a fully responsive portfolio with smooth CSS keyframe animations, achieving 100% mobile responsiveness and a 90+ Lighthouse performance score. Showcases experience, projects, skills list, and a contact form with sleek custom slide navigation.",
    gradient: "from-yellow-500 to-orange-500",
    images: [
      "/projects/codestruct2.png",
      "/projects/codestruct1.jpg",
      "/projects/codestruct3.png",
    ],
    tech: [
      { name: "React.js", icon: <FaReact className="text-blue-400" /> },
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    ]
  },
];

// ─── LEFT PANEL ───────────────────────────────────────
function LeftPanel({ activeIndex }) {
  const project = projects[activeIndex];

  if (!project) return null;

  return (
    <div className="sticky top-32 h-[70vh] flex flex-col justify-start pt-10 pl-16 pr-10 lg:pl-28">
      <AnimatePresence mode="wait">
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
        >
          {/* TITLE */}
          <h3 className="text-3xl italic font-semibold text-white tracking-tight mb-4 font-serif">
            {project.title}
          </h3>
          {/* DESCRIPTION */}
          <p className="text-gray-400 text-[13px] leading-7 max-w-xl mb-6">
            🚀 {project.desc}
          </p>

          {/* TECH STACK */}
          <div className="flex flex-wrap gap-3 mb-6">
            {project.tech?.map((t, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111] border border-white/10 text-xs text-gray-300 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <span>{t.icon}</span>
                {t.name}
              </div>
            ))}
          </div>

          {/* GITHUB REPOSITORY LINK BUTTON */}
          <div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 text-xs font-semibold tracking-wider text-white transition-all duration-300 shadow-lg group"
            >
              <FaGithub size={16} className="text-white group-hover:scale-110 transition-transform" />
              <span>GITHUB REPOSITORY</span>
              <FaExternalLinkAlt size={10} className="text-gray-400 group-hover:text-white transition-colors" />
            </a>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ─── CARD ─────────────────────────────────────────────
function ProjectCard({
  project,
  onVisible,
  scrollContainer,
}) {
  const ref = useRef(null);
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    container: scrollContainer,
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const opacity = useTransform(scrollYProgress, [0.05, 0.25, 0.75, 0.92], [0, 1, 1, 0]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onVisible(project.id);
      },
      { threshold: 0.6 }
    );

    const handleObserve = () => {
      observer.observe(el);
    };
    handleObserve();
    return () => observer.disconnect();
  }, [project.id, onVisible]);

  return (
    <motion.div
      ref={ref}
      style={{ 
        scale: isMobile ? 1 : scale, 
        y: isMobile ? 0 : y, 
        opacity: isMobile ? 1 : opacity 
      }}
      onMouseEnter={() => setIsCardHovered(true)}
      onMouseLeave={() => setIsCardHovered(false)}
      className="relative h-screen lg:h-[70vh] flex flex-col lg:flex-row items-center justify-center snap-start snap-always scroll-mt-0 px-4 md:px-8 lg:px-0 py-16 lg:py-0 w-full"
    >
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-6 items-center w-full max-w-[90vw] lg:max-w-none mx-auto lg:mx-0">

        {/* MOBILE ONLY CONTENT: TITLE, DESC, TECH STACK, GITHUB (Compact to fit on one screen) */}
        <div className="block lg:hidden w-full text-left space-y-3 mb-2">
          <h3 className="text-xl sm:text-2xl italic font-semibold text-white tracking-tight font-serif">
            {project.title}
          </h3>
          <p className="text-gray-400 text-[11px] leading-relaxed line-clamp-4">
            🚀 {project.desc}
          </p>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tech?.map((t, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#111] border border-white/10 text-[9px] text-gray-300"
              >
                <span>{t.icon}</span>
                {t.name}
              </div>
            ))}
          </div>
          <div className="pt-2">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-[10px] font-semibold text-white transition-all shadow-lg"
            >
              <FaGithub size={12} className="text-white" />
              <span>GITHUB REPOSITORY</span>
              <FaExternalLinkAlt size={8} className="text-gray-400" />
            </a>
          </div>
        </div>

        {/* IMAGES CONTAINER (Side-by-side on mobile, custom sizes) */}
        <div className="flex flex-row items-center justify-center gap-3 mt-2 lg:contents w-full">
          {/* SMALL CARDS (Column on both mobile and desktop) */}
          <div className="flex flex-col gap-2 justify-center">
            {project.images?.slice(0, 2).map((img, i) => (
              <motion.div
                key={i}
                animate={{ 
                  y: isCardHovered && !isMobile ? (i === 0 ? -10 : 10) : 0,
                  scale: isCardHovered ? 1.04 : 1 
                }}
                transition={{ type: "spring", stiffness: 350, damping: 22 }}
                className="w-[30vw] max-w-[120px] h-[18vw] max-h-[70px] lg:w-[240px] lg:h-[140px] lg:max-w-none lg:max-h-none overflow-hidden rounded-xl lg:rounded-2xl border border-white/5 shadow-lg"
              >
                <motion.img
                  src={img}
                  alt="project item thumbnail"
                  animate={{ scale: isCardHovered ? 1.1 : 1 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>

          {/* BIG CARD */}
          <motion.div 
            animate={{ 
              scale: isCardHovered ? 1.03 : 1,
              boxShadow: isCardHovered ? "0 20px 40px rgba(0, 0, 0, 0.5), 0 0 25px rgba(56, 189, 248, 0.15)" : "0 10px 20px rgba(0,0,0,0.3)"
            }}
            transition={{ type: "spring", stiffness: 350, damping: 22 }}
            className="relative w-[56vw] max-w-[210px] h-[38vw] max-h-[148px] lg:w-[400px] lg:h-[200px] lg:max-w-none lg:max-h-none rounded-xl lg:rounded-2xl border border-white/10 overflow-visible transition-colors duration-300 mx-auto lg:mx-0"
          >
            <div className="w-full h-full rounded-xl lg:rounded-2xl overflow-hidden flex items-center justify-center">
              <motion.img
                src={project.images?.[2]}
                alt="project main thumbnail"
                animate={{ scale: isCardHovered ? 1.08 : 1 }}
                transition={{ duration: 0.4 }}
                className="w-full h-full object-cover"
              />
            </div>

            <motion.div 
              animate={{ 
                scale: isCardHovered ? 1.15 : 1,
                rotate: isCardHovered ? 6 : 0
              }}
              className="absolute -top-10 -right-10 z-20 scale-75 lg:scale-100 origin-center"
            >
              <RotatingBadge link={project.link} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── MAIN ─────────────────────────────────────────────
export default function Projects({ scrollContainer, activeSection }) {
  const [activeId, setActiveId] = useState(null);
  const activeIndex = projects.findIndex((p) => p.id === activeId);

  useEffect(() => {
    if (activeSection === "projects") {
      setActiveId(null);
    }
  }, [activeSection]);

  return (
    <section id="projects" style={{ background: 'radial-gradient(circle at 20% 70%, #182024 0%, #0a0e14 55%, #050508 100%)' }} className="relative w-full min-h-screen">
      {/* AMBIENT BACKGROUND GLOW */}
      <div className="absolute bottom-1/3 left-10 w-[650px] h-[350px] bg-emerald-900/20 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* HEADING (occupies full screen cover) */}
      <div className="w-full h-screen flex flex-col items-center justify-center snap-start snap-always relative z-10">
        <AnimatedSectionTitle text="VENTURE SHOWCASE" subtitle="CRAFTING MODERN EXPERIENCES" gradient="from-slate-300 via-blue-200/80 to-slate-500" />
      </div>

      <div className="flex min-h-screen">

        {/* LEFT */}
        <div className="hidden lg:block w-[45%]">
          <LeftPanel activeIndex={activeIndex} />
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-[55%] px-4 lg:px-6 py-16 flex flex-col gap-16">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onVisible={setActiveId}
              scrollContainer={scrollContainer}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

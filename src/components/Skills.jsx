 import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { FaReact, FaNodeJs, FaDocker, FaAws, FaGitAlt, FaGithub, FaPython, FaLinux, FaCode, FaGlobe, FaCloud, FaServer, FaDatabase, FaLaptopCode, FaTools } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiPostgresql, SiMongodb, SiGithubactions } from "react-icons/si";
import { DiJava } from "react-icons/di";
import AnimatedSectionTitle from "./AnimatedSectionTitle";

// ─── CUSTOM VECTOR LOGO CARDS ─────────────────────────
function ReactLogoCard() {
  return (
    <div className="w-full h-full flex items-center justify-center relative bg-gradient-to-br from-cyan-500/10 to-transparent p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.18),transparent_70%)] pointer-events-none" />
      <motion.img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" 
        alt="React Logo" 
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(34,211,238,0.4)]"
      />
    </div>
  );
}

function NextjsLogoCard() {
  return (
    <div className="w-full h-full flex items-center justify-center relative bg-gradient-to-br from-zinc-500/10 to-transparent p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)] pointer-events-none" />
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" 
        alt="Next.js Logo" 
        className="w-full h-full object-contain filter invert drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
      />
    </div>
  );
}

function DockerLogoCard() {
  return (
    <div className="w-full h-full flex items-center justify-center relative bg-gradient-to-br from-blue-500/10 to-transparent p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.18),transparent_70%)] pointer-events-none" />
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" 
        alt="Docker Logo" 
        className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.4)]"
      />
    </div>
  );
}

function AwsLogoCard() {
  return (
    <div className="w-full h-full flex items-center justify-center relative bg-gradient-to-br from-amber-500/10 to-transparent p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(234,179,8,0.18),transparent_70%)] pointer-events-none" />
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" 
        alt="AWS Logo" 
        className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(234,179,8,0.4)]"
      />
    </div>
  );
}

function GitLogoCard() {
  return (
    <div className="w-full h-full flex items-center justify-center relative bg-gradient-to-br from-orange-500/10 to-transparent p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(240,80,51,0.18),transparent_70%)] pointer-events-none" />
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" 
        alt="Git Logo" 
        className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(240,80,51,0.4)]"
      />
    </div>
  );
}

function GithubLogoCard() {
  return (
    <div className="w-full h-full flex items-center justify-center relative bg-gradient-to-br from-zinc-400/10 to-transparent p-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)] pointer-events-none" />
      <img 
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
        alt="GitHub Logo" 
        className="w-full h-full object-contain filter invert drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]"
      />
    </div>
  );
}

// ─── SKILL CATEGORIES DATA (with icons & sub-groups) ──
const skillCategories = [
  {
    id: 1,
    title: "Programming & Web",
    desc: "Clean code, object-oriented design, and full-stack web applications across multiple languages and frameworks.",
    badgeText: "PROGRAMMING • WEB DEV •",
    images: [
      { type: "image", src: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=400&h=250&q=80" },
      { type: "image", src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&h=250&q=80" },
      { type: "image", src: "/skills_frontend.png" }
    ],
    groups: [
      {
        label: "Programming Languages",
        icon: <FaCode className="text-blue-400" />,
        accent: "from-blue-500/20 to-cyan-500/10",
        border: "border-blue-500/20",
        dot: "bg-blue-400",
        skills: [
          { name: "C", icon: <span className="text-blue-400 font-bold font-mono text-xs">C</span> },
          { name: "C++ (DSA)", icon: <span className="text-blue-400 font-bold font-mono text-xs">C++</span> },
          { name: "Python", icon: <FaPython className="text-yellow-500" /> },
          { name: "Java", icon: <DiJava className="text-red-500 animate-pulse" /> },
          { name: "SQL", icon: <span className="text-blue-500 font-bold">SQL</span> }
        ]
      },
      {
        label: "Web Technologies",
        icon: <FaGlobe className="text-orange-400" />,
        accent: "from-orange-500/20 to-yellow-500/10",
        border: "border-orange-500/20",
        dot: "bg-orange-400",
        skills: [
          { name: "HTML", icon: <span className="text-orange-500 font-bold">H5</span> },
          { name: "CSS", icon: <span className="text-blue-400 font-bold">CSS</span> },
          { name: "JavaScript", icon: <span className="text-yellow-400 font-bold">JS</span> },
          { name: "React.js", icon: <FaReact className="text-cyan-400 animate-spin-slow" /> },
          { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
          { name: "Express.js", icon: <FaNodeJs className="text-green-400" /> },
          { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Cloud & DevOps",
    desc: "Cloud infrastructure provisioning, CI/CD automation, container orchestration, and deployment pipelines.",
    badgeText: "CLOUD ENG • DEVOPS •",
    images: [
      { type: "image", src: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=400&h=250&q=80" },
      { type: "image", src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&h=250&q=80" },
      { type: "image", src: "/skills_backend.png" }
    ],
    groups: [
      {
        label: "Cloud Platforms",
        icon: <FaCloud className="text-yellow-400" />,
        accent: "from-yellow-500/20 to-orange-500/10",
        border: "border-yellow-500/20",
        dot: "bg-yellow-400",
        skills: [
          { name: "AWS", icon: <FaAws className="text-yellow-500" /> },
          { name: "Azure", icon: <span className="text-blue-400 font-bold">Az</span> },
          { name: "Terraform", icon: <span className="text-purple-400 font-bold">TF</span> }
        ]
      },
      {
        label: "DevOps & OS Skills",
        icon: <FaServer className="text-cyan-400" />,
        accent: "from-cyan-500/20 to-blue-500/10",
        border: "border-cyan-500/20",
        dot: "bg-cyan-400",
        skills: [
          { name: "Docker", icon: <FaDocker className="text-cyan-400" /> },
          { name: "Kubernetes", icon: <span className="text-blue-500 font-bold">K8s</span> },
          { name: "CI/CD Pipelines", icon: <SiGithubactions className="text-white" /> },
          { name: "Linux", icon: <FaLinux className="text-yellow-600" /> },
          { name: "Shell Scripting", icon: <span className="text-green-400 font-mono">$_</span> }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Databases, Concepts & Tools",
    desc: "Data management, core computer science fundamentals, and developer tooling for structured engineering workflows.",
    badgeText: "CONCEPTS • TOOLS •",
    images: [
      { type: "image", src: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=400&h=250&q=80" },
      { type: "image", src: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&w=400&h=250&q=80" },
      { type: "image", src: "/skills_devops.png" }
    ],
    groups: [
      {
        label: "Databases",
        icon: <FaDatabase className="text-red-400" />,
        accent: "from-red-500/20 to-pink-500/10",
        border: "border-red-500/20",
        dot: "bg-red-400",
        skills: [
          { name: "MySQL", icon: <SiPostgresql className="text-blue-400" /> },
          { name: "Oracle", icon: <SiPostgresql className="text-red-400" /> },
          { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> }
        ]
      },
      {
        label: "Core Concepts",
        icon: <FaLaptopCode className="text-purple-400" />,
        accent: "from-purple-500/20 to-indigo-500/10",
        border: "border-purple-500/20",
        dot: "bg-purple-400",
        skills: [
          { name: "Operating System", icon: <span className="text-white/50 font-mono text-xs">OS</span> },
          { name: "DBMS", icon: <span className="text-white/50 font-mono text-xs">DB</span> },
          { name: "SDLC", icon: <span className="text-white/50 font-mono text-xs">SD</span> }
        ]
      },
      {
        label: "Tools & IDE",
        icon: <FaTools className="text-green-400" />,
        accent: "from-green-500/20 to-emerald-500/10",
        border: "border-green-500/20",
        dot: "bg-green-400",
        skills: [
          { name: "VS Code", icon: <span className="text-blue-400 font-mono text-xs">VS</span> },
          { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
          { name: "GitHub", icon: <FaGithub className="text-white" /> }
        ]
      }
    ]
  }
];

const getBrandColor = (name) => {
  const lowercaseName = name.toLowerCase();
  if (lowercaseName.includes("react")) return "rgba(56, 189, 248, 0.4)";
  if (lowercaseName.includes("node") || lowercaseName.includes("express")) return "rgba(34, 197, 94, 0.4)";
  if (lowercaseName.includes("next")) return "rgba(255, 255, 255, 0.4)";
  if (lowercaseName.includes("python")) return "rgba(234, 179, 8, 0.4)";
  if (lowercaseName.includes("java")) return "rgba(239, 68, 68, 0.4)";
  if (lowercaseName.includes("sql") || lowercaseName.includes("mysql") || lowercaseName.includes("oracle")) return "rgba(59, 130, 246, 0.4)";
  if (lowercaseName.includes("mongo")) return "rgba(16, 185, 129, 0.4)";
  if (lowercaseName.includes("aws")) return "rgba(245, 158, 11, 0.4)";
  if (lowercaseName.includes("azure")) return "rgba(0, 137, 214, 0.4)";
  if (lowercaseName.includes("docker")) return "rgba(14, 165, 233, 0.4)";
  if (lowercaseName.includes("kubernetes")) return "rgba(50, 109, 230, 0.4)";
  if (lowercaseName.includes("git")) return "rgba(240, 80, 51, 0.4)";
  if (lowercaseName.includes("html") || lowercaseName.includes("css") || lowercaseName.includes("javascript") || lowercaseName.includes("js")) return "rgba(249, 115, 22, 0.4)";
  return "rgba(255, 255, 255, 0.2)";
};

// ─── SKILL GROUP CONTAINER ─────────────────────────────
function SkillGroupBox({ group, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.08 }}
      className={`rounded-xl border ${group.border} bg-gradient-to-br ${group.accent} backdrop-blur-sm p-3.5`}
    >
      {/* Group header with logo icon - signature serif italic font style */}
      <div className="flex items-center gap-2 mb-2.5">
        <div className="w-5.5 h-5.5 rounded-md bg-white/10 flex items-center justify-center text-xs shadow-inner">
          {group.icon}
        </div>
        <h4 className="text-[13px] font-serif italic font-semibold tracking-wide text-white">
          {group.label}
        </h4>
      </div>

      {/* Individual skill pills with icons */}
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill, i) => {
          const glowColor = getBrandColor(skill.name);
          return (
            <motion.div
              key={i}
              whileHover={{ 
                scale: 1.08, 
                y: -2,
                borderColor: glowColor.replace("0.4", "0.6").replace("0.15", "0.4").replace("0.2", "0.4"),
                boxShadow: `0 0 15px ${glowColor}`,
                backgroundColor: "rgba(255, 255, 255, 0.08)"
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-medium text-gray-200 bg-white/5 border border-white/10 transition-all duration-200 cursor-pointer shadow-sm font-sans"
            >
              <span className="text-xs">{skill.icon}</span>
              <span>{skill.name}</span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

// ─── LEFT PANEL ────────────────────────────────────────
function LeftPanel({ activeIndex }) {
  const category = skillCategories[activeIndex];

  if (!category) return null;

  return (
    <div className="sticky top-32 h-[70vh] flex flex-col justify-start pt-8 pl-14 pr-8 lg:pl-24 overflow-y-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-4"
        >
          {/* TITLE */}
          <h3 className="text-3xl italic font-semibold text-white tracking-tight font-serif">
            {category.title}
          </h3>
          {/* DESCRIPTION */}
          <p className="text-gray-400 text-[12px] leading-6 max-w-lg">
            ✦ {category.desc}
          </p>

          {/* SKILL GROUP CONTAINERS */}
          <div className="flex flex-col gap-3 mt-1">
            {category.groups.map((group, i) => (
              <SkillGroupBox key={i} group={group} index={i} />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ─── RIGHT SKILL CARD (images unchanged) ──────────────
function SkillCard({ category, onVisible, scrollContainer }) {
  const ref = useRef(null);

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
        if (entry.isIntersecting) onVisible(category.id);
      },
      { threshold: 0.6 }
    );

    const handleObserve = () => {
      observer.observe(el);
    };
    handleObserve();
    return () => observer.disconnect();
  }, [category.id, onVisible]);

  return (
    <motion.div
      ref={ref}
      style={{ scale, y, opacity }}
      className="relative h-[80vh] min-h-[500px] flex items-center justify-center snap-start snap-always scroll-mt-28"
    >
      <div className="flex gap-6 items-center">

        {/* SMALL CARDS */}
        <div className="flex flex-col gap-6">
          {category.images?.slice(0, 2).map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ 
                scale: 1.04, 
                borderColor: "rgba(56, 189, 248, 0.3)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.5), 0 0 15px rgba(56,189,248,0.06)" 
              }}
              className="w-[240px] h-[140px] rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-xl shadow-md overflow-hidden flex items-center justify-center relative transition-colors duration-300"
            >
              {item.type === "component" ? item.component : <img src={item.src} alt="skills sub preview" className="w-full h-full object-cover" />}
            </motion.div>
          ))}
        </div>

        {/* BIG CARD */}
        <motion.div 
          whileHover={{ 
            scale: 1.02, 
            borderColor: "rgba(56, 189, 248, 0.3)",
            boxShadow: "0 15px 35px rgba(0,0,0,0.5), 0 0 20px rgba(56,189,248,0.06)"
          }}
          className="relative w-[400px] h-[200px] rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl shadow-lg transition-all duration-300"
        >
          <div className="w-full h-full rounded-2xl overflow-hidden flex items-center justify-center">
            {category.images?.[2].type === "component"
              ? category.images?.[2].component
              : <img src={category.images?.[2].src} alt="skills main preview" className="w-full h-full object-cover" />}
          </div>

          <motion.div 
            whileHover={{ scale: 1.15 }}
            className="absolute -top-10 -right-10 pointer-events-auto cursor-pointer"
          >
            <div className="relative w-[120px] h-[120px] block select-none">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                className="absolute inset-0"
              >
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                    <path
                      id={`circlePath-skills-${category.id}`}
                      d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                    />
                  </defs>
                  <text fill="white" fontSize="13" letterSpacing="1.8" className="font-semibold">
                    <textPath href={`#circlePath-skills-${category.id}`}>
                      {category.badgeText}
                    </textPath>
                  </text>
                </svg>
              </motion.div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[50px] h-[50px] rounded-full bg-white text-black flex items-center justify-center text-lg font-bold shadow-md hover:scale-105 transition">
                  ⚡
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </motion.div>
  );
}

// ─── MAIN EXPORT ───────────────────────────────────────
export default function Skills({ scrollContainer, activeSection }) {
  const [activeId, setActiveId] = useState(null);
  const activeIndex = skillCategories.findIndex((c) => c.id === activeId);

  useEffect(() => {
    if (activeSection === "skills") {
      setActiveId(null);
    }
  }, [activeSection]);

  return (
    <section id="skills" style={{ background: 'radial-gradient(circle at 70% 30%, #182024 0%, #0a0e14 55%, #050508 100%)' }} className="relative w-full min-h-screen">
      {/* AMBIENT BACKGROUND GLOW */}
      <div className="absolute top-1/4 right-10 w-[650px] h-[350px] bg-emerald-900/20 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* HEADING (occupies full screen cover) */}
      <div className="w-full h-screen flex flex-col items-center justify-center snap-start snap-always relative z-10">
        <AnimatedSectionTitle text="CORE SKILLSET" subtitle="TECHNICAL STACK CAPABILITIES" gradient="from-slate-300 via-purple-200/80 to-slate-500" />
      </div>

      <div className="flex min-h-screen">

        {/* LEFT STICKY DETAILS */}
        <div className="hidden lg:block w-[45%]">
          <LeftPanel activeIndex={activeIndex} />
        </div>

        {/* RIGHT SCROLLABLE CARDS */}
        <div className="relative w-full lg:w-[55%] px-6 py-16 flex flex-col gap-16">
          {skillCategories.map((category) => (
            <SkillCard
              key={category.id}
              category={category}
              onVisible={setActiveId}
              scrollContainer={scrollContainer}
            />
          ))}
        </div>

      </div>

    </section>
  );
}

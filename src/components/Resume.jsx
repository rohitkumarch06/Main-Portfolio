import React from "react";
import { motion } from "framer-motion";
import AnimatedSectionTitle from "./AnimatedSectionTitle";

export default function Resume({ scrollContainer }) {
  const experiences = [
    {
      role: "Cloud Technology Trainee",
      company: "Capgemini (5-Month Program)",
      period: "Jan 2026 - May 2026",
      description: "Completed 120+ hours of intensive cloud training on AWS & Azure infrastructure design, deployment, and management. Automated CI/CD pipelines using Jenkins & Git, provisioned IaC using Terraform, and containerized apps with Docker/Kubernetes.",
    },
    {
      role: "Launchpad 3.0 Trainee",
      company: "PwC US (6-Month Program)",
      period: "Feb 2025 - Jul 2025",
      description: "Completed industry training on enterprise IT systems, OOP, SQL databases, and DevOps methodologies, ranking in the top 15% of participants. Deployed 3+ solutions utilizing Java, SQL, and DevOps integrations.",
    },
    {
      role: "B.Tech CSE (AI & ML Specialization)",
      company: "Haldia Institute of Technology",
      period: "2022 - 2026",
      description: "Specialized in Artificial Intelligence and Machine Learning. Acquired hands-on experience building full-stack products with the MERN stack and deploying on cloud containers. CGPA: 8.59.",
    },
    {
      role: "Intermediate Education",
      company: "A.N. College, Patna, Bihar",
      period: "2019 - 2021",
      description: "Completed senior secondary education focusing on mathematics and science, achieving an aggregate score of 79.4%.",
    },
    {
      role: "Matriculation (Class 10)",
      company: "Krishna International Public School",
      period: "2018 - 2019",
      description: "Completed secondary school education with focus on general science and mathematics, achieving an aggregate score of 70%.",
    }
  ];

  return (
    <section id="resume" style={{ background: 'radial-gradient(circle at 50% 20%, #182024 0%, #0a0e14 55%, #050508 100%)' }} className="relative text-white w-full">
      {/* AMBIENT BACKGROUND GLOW */}
      <div className="absolute top-1/3 right-1/4 w-[650px] h-[350px] bg-emerald-900/20 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* HEADING (occupies full screen cover) */}
      <div className="w-full h-screen flex flex-col items-center justify-center snap-start snap-always relative z-10">
        <AnimatedSectionTitle text="MY RESUME" subtitle="MY JOURNEY" gradient="from-slate-300 via-amber-200/70 to-slate-500" />
      </div>

      {/* ACTUAL CONTENT */}
      <div className="w-full min-h-screen flex items-center justify-center snap-start snap-always py-24 relative z-10 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl w-full mx-auto">
        
        {/* HEADING */}
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] text-white/50 mb-4">
            MY JOURNEY
          </p>
          <h2 className="text-4xl md:text-6xl font-bold font-serif italic text-white">
            Qualifications & Resume
          </h2>
        </div>

        {/* CONTAINER */}
        <div className="grid md:grid-cols-3 gap-12 items-start">
          
          {/* LEFT: PROFESSIONAL SUMMARY */}
          <div className="md:col-span-1 space-y-6">
            <h3 className="text-xl font-semibold text-white">Professional Summary</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Computer Science graduate specializing in AI & ML with hands-on experience building full-stack MERN projects and implementing automated cloud deployments (AWS, Azure, Docker, Kubernetes). Passionate about writing scalable, performant software.
            </p>

            <motion.a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#a855f7",
                color: "#ffffff",
                boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)"
              }}
              whileTap={{ scale: 0.98 }}
              className="inline-block py-3 px-6 rounded-full bg-white text-black text-xs font-semibold tracking-widest transition-all mt-4 cursor-pointer"
            >
              DOWNLOAD RESUME ↓
            </motion.a>
          </div>

          {/* RIGHT: TIMELINE GRID */}
          <div className="md:col-span-2 space-y-10 border-l border-white/10 pl-6 md:pl-10">
            {experiences.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ x: 6 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="relative space-y-2 group"
              >
                {/* TIMELINE BULLET */}
                <motion.div 
                  whileHover={{ scale: 1.5, backgroundColor: "#a855f7", boxShadow: "0 0 10px #a855f7" }}
                  className="absolute -left-[31px] md:-left-[47px] top-1.5 w-3 h-3 rounded-full bg-white/20 transition-all border-4 border-[#0a0e14] z-10 cursor-pointer" 
                />
                
                <span className="text-[11px] font-mono text-white/40 tracking-wider transition-colors group-hover:text-purple-400">
                  {exp.period}
                </span>

                <h4 className="text-lg font-semibold text-white transition-colors group-hover:text-white">
                  {exp.role}
                </h4>

                <p className="text-sm text-purple-400 font-medium">
                  {exp.company}
                </p>

                <p className="text-sm text-white/60 leading-relaxed max-w-xl">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
      </div>
    </section>
  );
}

import React, { useState, useCallback, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import TopLeft from './components/TopLeft';
import CursorFollower from './components/CursorFollower';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';


const SECTION_IDS = ["home", "about", "skills", "projects", "resume", "contact"];

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [aboutEl, setAboutEl] = useState(null);
  const [skillsEl, setSkillsEl] = useState(null);
  const [projectsEl, setProjectsEl] = useState(null);
  const [resumeEl, setResumeEl] = useState(null);
  const [contactEl, setContactEl] = useState(null);
  const [glowPos, setGlowPos] = useState({ x: -300, y: -300 });
  const mainContainerRef = React.useRef(null);

  const aboutCallbackRef = useCallback((el) => { if (el) setAboutEl(el); }, []);
  const skillsCallbackRef = useCallback((el) => { if (el) setSkillsEl(el); }, []);
  const projectsCallbackRef = useCallback((el) => { if (el) setProjectsEl(el); }, []);
  const resumeCallbackRef = useCallback((el) => { if (el) setResumeEl(el); }, []);
  const contactCallbackRef = useCallback((el) => { if (el) setContactEl(el); }, []);

  const activeIndex = SECTION_IDS.indexOf(activeSection);

  useEffect(() => {
    const resetScroll = () => {
      window.scrollTo(0, 0);
      document.body.scrollTop = 0;
      if (document.documentElement) {
        document.documentElement.scrollTop = 0;
      }
      if (mainContainerRef.current) {
        mainContainerRef.current.scrollTop = 0;
      }
    };

    resetScroll();
    window.addEventListener("load", resetScroll);
    window.addEventListener("DOMContentLoaded", resetScroll);

    const handleMouseMove = (e) => {
      setGlowPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener("load", resetScroll);
      window.removeEventListener("DOMContentLoaded", resetScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
    }
    if (mainContainerRef.current) {
      mainContainerRef.current.scrollTop = 0;
    }

    if (activeSection === "about" && aboutEl) {
      aboutEl.scrollTop = 0;
    }
    if (activeSection === "skills" && skillsEl) {
      skillsEl.scrollTop = 0;
    }
    if (activeSection === "projects" && projectsEl) {
      projectsEl.scrollTop = 0;
    }
    if (activeSection === "resume" && resumeEl) {
      resumeEl.scrollTop = 0;
    }
    if (activeSection === "contact" && contactEl) {
      contactEl.scrollTop = 0;
    }
  }, [activeSection, aboutEl, skillsEl, projectsEl, resumeEl, contactEl]);


  return (
    <div ref={mainContainerRef} style={{ height: '100vh', width: '100vw', overflow: 'hidden', background: '#0a0e14', color: '#fff', position: 'relative' }}>
      <Toaster position="top-right" />
      <CursorFollower />
      
      {/* Global Interactive Ambient Backlight */}
      <div 
        style={{
          position: 'fixed',
          left: glowPos.x,
          top: glowPos.y,
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, rgba(56, 189, 248, 0.02) 45%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1,
          borderRadius: '50%',
        }}
      />

      <TopLeft />
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />


      {/* Main slide container — shifts up by 100vh per section */}
      <div
        style={{
          width: '100%',
          height: `${SECTION_IDS.length * 100}vh`,
          display: 'flex',
          flexDirection: 'column',
          transition: 'transform 1000ms cubic-bezier(0.16,1,0.3,1)',
          transform: `translateY(-${activeIndex * 100}vh)`,
        }}
      >
        {/* HOME */}
        <div style={{ width: '100%', height: '100vh', flexShrink: 0, overflow: 'hidden' }}>
          <div style={{ width: '100%', height: '100%', overflowY: 'auto', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0px, transparent 80px, black 120px)', maskImage: 'linear-gradient(to bottom, transparent 0px, transparent 80px, black 120px)' }}>
            <Hero activeSection={activeSection} setActiveSection={setActiveSection} />
          </div>
        </div>

        {/* ABOUT */}
        <div style={{ width: '100%', height: '100vh', flexShrink: 0, overflow: 'hidden' }}>
          <div 
            ref={aboutCallbackRef}
            style={{ position: 'relative', width: '100%', height: '100%', overflowY: 'auto', scrollBehavior: 'smooth', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0px, transparent 80px, black 120px)', maskImage: 'linear-gradient(to bottom, transparent 0px, transparent 80px, black 120px)' }}
            className="snap-y snap-mandatory"
          >
            {aboutEl && <About scrollContainer={{ current: aboutEl }} setActiveSection={setActiveSection} />}
          </div>
        </div>

        {/* SKILLS */}
        <div style={{ width: '100%', height: '100vh', flexShrink: 0, overflow: 'hidden' }}>
          <div
            ref={skillsCallbackRef}
            style={{ position: 'relative', width: '100%', height: '100%', overflowY: 'auto', scrollBehavior: 'smooth', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0px, transparent 80px, black 120px)', maskImage: 'linear-gradient(to bottom, transparent 0px, transparent 80px, black 120px)' }}
            className="snap-y snap-mandatory"
          >
            {skillsEl && <Skills scrollContainer={{ current: skillsEl }} activeSection={activeSection} />}
          </div>
        </div>

        {/* PROJECTS */}
        <div style={{ width: '100%', height: '100vh', flexShrink: 0, overflow: 'hidden' }}>
          <div
            ref={projectsCallbackRef}
            style={{ position: 'relative', width: '100%', height: '100%', overflowY: 'auto', scrollBehavior: 'smooth', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0px, transparent 80px, black 120px)', maskImage: 'linear-gradient(to bottom, transparent 0px, transparent 80px, black 120px)' }}
            className="snap-y snap-mandatory"
          >
            {projectsEl && <Projects scrollContainer={{ current: projectsEl }} activeSection={activeSection} />}
          </div>
        </div>

        {/* RESUME */}
        <div style={{ width: '100%', height: '100vh', flexShrink: 0, overflow: 'hidden' }}>
          <div 
            ref={resumeCallbackRef}
            style={{ position: 'relative', width: '100%', height: '100%', overflowY: 'auto', scrollBehavior: 'smooth', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0px, transparent 80px, black 120px)', maskImage: 'linear-gradient(to bottom, transparent 0px, transparent 80px, black 120px)' }}
            className="snap-y snap-mandatory"
          >
            {resumeEl && <Resume scrollContainer={{ current: resumeEl }} />}
          </div>
        </div>

        {/* CONTACT */}
        <div style={{ width: '100%', height: '100vh', flexShrink: 0, overflow: 'hidden' }}>
          <div 
            ref={contactCallbackRef}
            style={{ position: 'relative', width: '100%', height: '100%', overflowY: 'auto', scrollBehavior: 'smooth', WebkitMaskImage: 'linear-gradient(to bottom, transparent 0px, transparent 80px, black 120px)', maskImage: 'linear-gradient(to bottom, transparent 0px, transparent 80px, black 120px)' }}
            className="snap-y snap-mandatory"
          >
            {contactEl && (
              <>
                <Contact scrollContainer={{ current: contactEl }} />
                <Footer setActiveSection={setActiveSection} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

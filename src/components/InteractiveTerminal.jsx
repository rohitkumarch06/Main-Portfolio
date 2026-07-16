import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function InteractiveTerminal() {
  const [history, setHistory] = useState([
    { type: "output", text: "Welcome to Rohit's Interactive Terminal [v1.0.0]" },
    { type: "output", text: "Type 'help' to view all available commands." },
    { type: "output", text: "" }
  ]);
  const [inputVal, setInputVal] = useState("");
  const terminalEndRef = useRef(null);
  const inputRef = useRef(null);
  const isFirstRender = useRef(true);

  // Auto-scroll to bottom of console
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e) => {
    if (e.key !== "Enter") return;

    const trimmedInput = inputVal.trim();
    if (!trimmedInput) return;

    const cmd = trimmedInput.toLowerCase();
    const newHistory = [...history, { type: "input", text: trimmedInput }];

    switch (cmd) {
      case "help":
        newHistory.push({
          type: "output",
          text: "Available commands:\n  about    - Learn more about me\n  skills   - View my technical skillset\n  projects - View my core ventures\n  contact  - View contact coordinates\n  clear    - Clear console display\n  secret   - Discover a hidden fact"
        });
        break;
      case "about":
        newHistory.push({
          type: "output",
          text: "Rohit Kumar - B.Tech CSE (AI & ML) student at Haldia Institute of Technology.\nFrontend developer and machine learning enthusiast who loves building interactive systems."
        });
        break;
      case "skills":
        newHistory.push({
          type: "output",
          text: "• Languages: C, C++ (DSA), Python, Java, SQL\n• Web Tech: HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB\n• DevOps: AWS, Docker, Kubernetes, CI/CD, Git, Linux"
        });
        break;
      case "projects":
        newHistory.push({
          type: "output",
          text: "1. CVForge   - Dynamic Resume Builder and Evaluator\n2. SnapURL   - Analytics-driven URL Shortener platform\n3. CodeStruct - Real-time visual code structure compiler"
        });
        break;
      case "contact":
        newHistory.push({
          type: "output",
          text: "Email: rohitkch596@gmail.com\nPhone: +91-9525806681\nLocation: Haldia, West Bengal, India"
        });
        break;
      case "secret":
        newHistory.push({
          type: "output",
          text: "🚀 Fun Fact: This portfolio utilizes GPU layer acceleration to maintain a fluid 60FPS scroll refresh!"
        });
        break;
      case "clear":
        setHistory([]);
        setInputVal("");
        return;
      default:
        newHistory.push({
          type: "output",
          text: `Command not found: "${trimmedInput}". Type "help" to see valid commands.`
        });
    }

    setHistory(newHistory);
    setInputVal("");
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div 
      onClick={focusInput}
      className="w-full h-[320px] rounded-3xl bg-black/70 border border-white/10 backdrop-blur-xl shadow-2xl p-6 font-mono text-xs text-left relative flex flex-col overflow-hidden group cursor-text transition-all duration-300 hover:border-white/20"
    >
      {/* TERMINAL HEADER DOTS */}
      <div className="flex items-center justify-between pb-4 border-b border-white/5 select-none pointer-events-none">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <span className="text-[10px] text-gray-500 tracking-wider font-semibold uppercase font-mono">terminal - rohit@portfolio</span>
        <div className="w-12" /> {/* spacer */}
      </div>

      {/* CONSOLE DISPLAY AREA */}
      <div className="flex-1 overflow-y-auto mt-4 space-y-2.5 pr-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
        {history.map((item, idx) => (
          <div key={idx} className="whitespace-pre-line leading-relaxed font-mono">
            {item.type === "input" ? (
              <p className="text-emerald-400 font-semibold font-mono">
                rohit@portfolio:~$ <span className="text-white font-normal font-mono">{item.text}</span>
              </p>
            ) : (
              <p className="text-gray-300 font-light font-mono">{item.text}</p>
            )}
          </div>
        ))}

        {/* INPUT PROMPT */}
        <div className="flex items-center gap-1 font-mono">
          <span className="text-emerald-400 font-semibold select-none font-mono">rohit@portfolio:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleCommand}
            className="flex-1 bg-transparent border-none outline-none text-white font-normal p-0 focus:ring-0 focus:border-none focus:outline-none font-mono"
          />
        </div>
        <div ref={terminalEndRef} />
      </div>
    </div>
  );
}

import { useState, useEffect } from 'react';
import { ArrowRight, Download, Terminal, Sparkles, ChevronDown } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin, InstagramIcon as Instagram, TwitterIcon as Twitter } from './BrandIcons';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [terminalState, setTerminalState] = useState('code');

  const roles = portfolioData.roles;

  useEffect(() => {
    let timer;
    const handleTyping = () => {
      const fullText = roles[roleIndex];
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, roles, typingSpeed]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Dynamic pulsing dot grid and radial glows */}
      <div className="pulse-dot-grid" />
      <div className="hero-glow-spotlight" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        {/* Text Info */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-accent-purple/20 bg-accent-purple/10 text-accent-purple text-xs font-mono font-semibold w-fit"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Available for Opportunities</span>
          </motion.div>

          <div className="space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-text-gray font-mono font-medium text-lg md:text-xl"
            >
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-blue-500 font-extrabold">{portfolioData.developerName}</span> 👋
            </motion.h2>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-white text-4xl md:text-6xl font-extrabold tracking-tight leading-none"
            >
              {portfolioData.hero.headline}
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="h-10 text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-blue to-accent-purple font-mono"
            >
              I am a <span className="text-white font-sans">{currentText}</span>
              <span className="animate-pulse text-accent-purple ml-1">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-text-gray text-base md:text-lg max-w-xl leading-relaxed"
            >
              {portfolioData.hero.subtitle}
            </motion.p>
          </div>

          {/* Socials & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-4 items-center"
          >
            <a
              href="#projects"
              className="group flex items-center space-x-2 px-6 py-3 rounded-full bg-accent-blue text-bg-black hover:bg-accent-blue/90 font-bold text-sm active:scale-95 shadow-lg shadow-accent-blue/20 transition-all duration-300"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-bg-black" />
            </a>

            <a
              href={portfolioData.hero.resumeUrl}
              className="group flex items-center space-x-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/20 active:scale-95 transition-all duration-300"
            >
              <Download className="w-4 h-4 text-text-gray group-hover:text-white transition-colors" />
              <span>Download Resume</span>
            </a>

            <div className="flex items-center space-x-3 ml-2">
              <a
                href={portfolioData.hero.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/10 hover:text-white text-text-gray transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={portfolioData.hero.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/10 hover:text-white text-text-gray transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={portfolioData.hero.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/10 hover:text-white text-text-gray transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={portfolioData.hero.twitterUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/10 hover:text-white text-text-gray transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Visual Terminal/Avatar Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -8, 0]
          }}
          transition={{ 
            opacity: { duration: 0.6, delay: 0.3 },
            scale: { duration: 0.6, delay: 0.3 },
            y: { repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.9 }
          }}
          className="lg:col-span-5 hidden lg:block"
        >
          <div 
            onMouseMove={handleMouseMove}
            className="w-full glass-panel spotlight-card rounded-2xl overflow-hidden border border-white/5 shadow-2xl relative"
          >
            <div className="spotlight-card-bg" />
            {/* Header bar */}
            <div className="bg-bg-dark/80 px-4 py-3 flex items-center justify-between border-b border-white/5 relative z-10">
              <div className="flex space-x-1.5">
                <button
                  onClick={() => setTerminalState(prev => prev === 'closed' ? 'code' : 'closed')}
                  className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer transition-all duration-200 hover:scale-110 hover:bg-red-500 active:scale-95 border-none outline-none"
                  title="Close Terminal"
                />
                <button
                  onClick={() => setTerminalState(prev => prev === 'minimized' ? 'code' : 'minimized')}
                  className="w-3 h-3 rounded-full bg-yellow-500/80 cursor-pointer transition-all duration-200 hover:scale-110 hover:bg-yellow-500 active:scale-95 border-none outline-none"
                  title="Minimize Terminal"
                />
                <button
                  onClick={() => setTerminalState(prev => prev === 'dashboard' ? 'code' : 'dashboard')}
                  className="w-3 h-3 rounded-full bg-green-500/80 cursor-pointer transition-all duration-200 hover:scale-110 hover:bg-green-500 active:scale-95 border-none outline-none"
                  title="Toggle Data Dashboard"
                />
              </div>
              <div className="flex items-center space-x-1 text-xs text-text-gray font-mono select-none">
                <Terminal className="w-3 h-3 text-[#00F2FE]" />
                <span className={terminalState !== 'code' ? 'opacity-65' : ''}>
                  {terminalState === 'dashboard' ? 'dashboard.xml' : 'analyst.py'}
                </span>
              </div>
              <div className="w-12" />
            </div>

            {/* Editor Body */}
            {terminalState === 'code' && (
              <div className="p-6 font-mono text-xs md:text-sm text-text-gray space-y-3 bg-bg-black/90 relative z-10 animate-[fadeIn_0.3s_ease]">
                <div>
                  <span className="text-accent-purple">class</span> <span className="text-white">DataAnalyst</span>:
                </div>
                <div className="pl-4">
                  <span className="text-accent-purple">def</span> <span className="text-accent-blue">__init__</span>(self):
                  <div className="pl-4">
                    self.name = <span className="text-accent-blue">"{portfolioData.developerName}"</span>
                  </div>
                  <div className="pl-4">
                    self.role = <span className="text-accent-blue">"Data Analyst"</span>
                  </div>
                  <div className="pl-4">
                    self.skills = [
                    <span className="text-emerald-400">"SQL"</span>, <span className="text-emerald-400">"Python"</span>, <span className="text-emerald-400">"PowerBI"</span>, <span className="text-emerald-400">"Excel"</span>
                    ]
                  </div>
                  <div className="pl-4">
                    self.insights_driven = <span className="text-amber-500">True</span>
                  </div>
                </div>
                <div className="pl-4">
                  <span className="text-accent-purple">def</span> <span className="text-accent-blue">is_hireable</span>(self):
                  <div className="pl-4">
                    <span className="text-accent-purple">return</span> self.insights_driven <span className="text-accent-purple">and</span> len(self.skills) &gt;= <span className="text-amber-500">4</span>
                  </div>
                </div>
                <div className="border-t border-white/5 pt-4 text-text-gray/50 text-[10px] flex justify-between items-center">
                  <span>UTF-8</span>
                  <span>Python</span>
                </div>
              </div>
            )}

            {terminalState === 'closed' && (
              <div className="p-8 font-mono text-xs md:text-sm text-center text-text-gray space-y-4 bg-bg-black/95 flex flex-col items-center justify-center min-h-[225px] relative z-10 animate-[fadeIn_0.3s_ease]">
                <Terminal className="w-8 h-8 text-red-500/80 animate-pulse" />
                <div>
                  <p className="text-red-400 font-bold text-sm">analyst.py: Session Terminated</p>
                  <p className="text-[10px] text-text-gray/40 mt-1">Host connection closed by user click.</p>
                </div>
                <button 
                  onClick={() => setTerminalState('code')} 
                  className="cursor-pointer px-4 py-1.5 rounded-full border border-red-500/30 text-red-400 hover:bg-red-500/10 hover:border-red-500 text-xs font-bold font-mono transition-all duration-300 active:scale-95"
                >
                  sh run analyst.py
                </button>
              </div>
            )}

            {terminalState === 'minimized' && (
              <div className="p-8 font-mono text-xs md:text-sm text-center text-text-gray space-y-4 bg-bg-black/95 flex flex-col items-center justify-center min-h-[225px] relative z-10 animate-[fadeIn_0.3s_ease]">
                <div className="w-8 h-1 bg-yellow-500/60 rounded-full animate-pulse mb-1" />
                <div>
                  <p className="text-yellow-500 font-bold text-sm">analyst.py: Session Suspended</p>
                  <p className="text-[10px] text-text-gray/40 mt-1">Process paused in background. Ready to resume.</p>
                </div>
                <button 
                  onClick={() => setTerminalState('code')} 
                  className="cursor-pointer px-4 py-1.5 rounded-full border border-yellow-500/40 text-yellow-500 hover:bg-yellow-500/10 hover:border-yellow-500/80 text-xs font-bold font-mono transition-all duration-300 active:scale-95"
                >
                  Resume Session
                </button>
              </div>
            )}

            {terminalState === 'dashboard' && (
              <div className="p-6 font-mono text-xs md:text-sm text-text-gray space-y-4 bg-bg-black/95 min-h-[225px] flex flex-col justify-between relative z-10 animate-[fadeIn_0.3s_ease]">
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-[#00F2FE] font-bold text-[10px] md:text-xs">INSIGHTS_DASHBOARD_v1.0</span>
                  <span className="text-[#00F2FE] text-[9px] font-semibold animate-pulse flex items-center space-x-1">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00F2FE]" />
                    <span>LIVE_METRICS</span>
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2.5 my-1 text-center">
                  <div className="p-2 border border-[#00F2FE]/15 rounded bg-bg-dark/50">
                    <div className="text-[8px] text-text-gray/70">ACCURACY</div>
                    <div className="text-xs font-bold text-white mt-0.5">99.8%</div>
                  </div>
                  <div className="p-2 border border-[#00F2FE]/15 rounded bg-bg-dark/50">
                    <div className="text-[8px] text-text-gray/70">CLEANED</div>
                    <div className="text-xs font-bold text-white mt-0.5">4.8M+ Rows</div>
                  </div>
                  <div className="p-2 border border-[#00F2FE]/15 rounded bg-bg-dark/50">
                    <div className="text-[8px] text-[#00F2FE]/80">INSIGHTS</div>
                    <div className="text-xs font-bold text-[#00F2FE] mt-0.5">Actionable</div>
                  </div>
                </div>
                {/* Visual Chart representations */}
                <div className="space-y-2 text-[9px] md:text-[10px]">
                  <div className="flex items-center space-x-2">
                    <span className="w-8 text-text-gray/60 font-semibold text-left text-[9px]">SQL</span>
                    <div className="h-1.5 flex-grow bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-[#00F2FE] shadow-[0_0_6px_#00F2FE]" style={{ width: '92%' }} />
                    </div>
                    <span className="w-6 text-right text-white/70">92%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-8 text-text-gray/60 font-semibold text-left text-[9px]">PBI</span>
                    <div className="h-1.5 flex-grow bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-[#06B6D4] shadow-[0_0_6px_#06B6D4]" style={{ width: '85%' }} />
                    </div>
                    <span className="w-6 text-right text-white/70">85%</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-8 text-text-gray/60 font-semibold text-left text-[9px]">PY</span>
                    <div className="h-1.5 flex-grow bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-600 shadow-[0_0_6px_#0891b2]" style={{ width: '80%' }} />
                    </div>
                    <span className="w-6 text-right text-white/70">80%</span>
                  </div>
                </div>
                <div className="text-center pt-2 border-t border-white/5">
                  <button 
                    onClick={() => setTerminalState('code')}
                    className="cursor-pointer text-[9px] text-[#00F2FE] hover:underline"
                  >
                    &lt; Return to Code View
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 opacity-50 text-text-gray pointer-events-none font-mono text-[9px] tracking-widest uppercase z-10">
        <span>Scroll</span>
        <ChevronDown className="w-3.5 h-3.5 animate-bounce-slow text-[#00F2FE]" />
      </div>
    </section>
  );
}

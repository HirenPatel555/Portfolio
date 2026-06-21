import { useState, useEffect } from 'react';
import { ArrowRight, Download, Terminal, Sparkles } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './BrandIcons';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

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

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-accent-blue/15 to-accent-purple/15 rounded-full blur-3xl pointer-events-none z-0 animate-glow" />

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
              {portfolioData.hero.greeting}
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
              className="group flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold text-sm hover:opacity-95 active:scale-95 shadow-lg shadow-accent-purple/20 transition-all duration-300"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
            </div>
          </motion.div>
        </div>

        {/* Visual Terminal/Avatar Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="lg:col-span-5 hidden lg:block"
        >
          <div className="w-full glass-panel rounded-2xl overflow-hidden border border-white/5 shadow-2xl relative">
            {/* Header bar */}
            <div className="bg-bg-dark/80 px-4 py-3 flex items-center justify-between border-b border-white/5">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center space-x-1 text-xs text-text-gray font-mono">
                <Terminal className="w-3 h-3 text-accent-purple" />
                <span>developer.js</span>
              </div>
              <div className="w-12" />
            </div>

            {/* Editor Body */}
            <div className="p-6 font-mono text-xs md:text-sm text-text-gray space-y-4 bg-bg-black/90">
              <div>
                <span className="text-accent-purple">const</span> developer = &#123;
              </div>
              <div className="pl-4">
                name: <span className="text-accent-blue">'{portfolioData.developerName}'</span>,
              </div>
              <div className="pl-4">
                title: <span className="text-accent-blue">'Full Stack Software Engineer'</span>,
              </div>
              <div className="pl-4">
                skills: [
                <div className="pl-4 text-emerald-400">
                  'Laravel', 'PHP', 'React', 'MySQL', 'Node.js', 'TailwindCSS'
                </div>
                ],
              </div>
              <div className="pl-4">
                hardWorker: <span className="text-amber-500">true</span>,
              </div>
              <div className="pl-4">
                problemSolver: <span className="text-amber-500">true</span>,
              </div>
              <div className="pl-4">
                hireable: <span className="text-accent-purple">function</span>() &#123;
                <div className="pl-4">
                  <span className="text-accent-purple">return</span> (
                  <div className="pl-4">
                    this.hardWorker && this.skills.length &gt;= 5
                  </div>
                  );
                </div>
                &#125;
              </div>
              <div>&#125;;</div>
              <div className="border-t border-white/5 pt-4 text-text-gray/50 text-[10px] flex justify-between items-center">
                <span>UTF-8</span>
                <span>JavaScript</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

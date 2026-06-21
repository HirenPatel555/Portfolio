import { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import WhyWorkWithMe from './components/WhyWorkWithMe';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import { portfolioData } from './data/portfolioData';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [is404, setIs404] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor Scroll Progress Indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Monitor URL Hash changes for showing the 404 page
  useEffect(() => {
    const checkHash = () => {
      if (window.location.hash === '#404') {
        setIs404(true);
      } else {
        setIs404(false);
      }
    };
    
    // Check initial load hash
    checkHash();

    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  // Simulate console startup screen loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Loading Screen Layout
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-bg-black flex flex-col justify-center items-center z-50 font-mono text-xs md:text-sm text-text-gray px-6 select-none">
        <div className="space-y-3 max-w-xs md:max-w-md w-full">
          <div className="flex items-center space-x-2 text-white">
            <Terminal className="w-5 h-5 text-accent-purple animate-pulse" />
            <span className="font-bold">SYSTEM BOOT: PORTFOLIO</span>
          </div>
          <div className="border border-white/5 bg-bg-dark p-4 rounded-lg space-y-1.5 shadow-2xl">
            <div className="flex justify-between">
              <span>Initializing environment...</span>
              <span className="text-emerald-400">[ OK ]</span>
            </div>
            <div className="flex justify-between">
              <span>Loading theme modules...</span>
              <span className="text-emerald-400">[ OK ]</span>
            </div>
            <div className="flex justify-between">
              <span>Optimizing interface buffers...</span>
              <span className="text-emerald-400">[ OK ]</span>
            </div>
            <div className="w-full bg-white/5 h-1.5 rounded-full mt-3 overflow-hidden relative">
              <div className="bg-gradient-to-r from-accent-blue to-accent-purple h-full rounded-full w-full origin-left animate-[shimmer_2s_infinite]" />
            </div>
          </div>
          <div className="text-[10px] text-text-gray/40 text-center pt-2">
            PRESS ANY KEY TO SKIP INITIALIZATION
          </div>
        </div>
      </div>
    );
  }

  // 404 Error Page Layout
  if (is404) {
    return (
      <>
        <CustomCursor />
        <NotFound
          onReturn={() => {
            window.location.hash = '#home';
            setIs404(false);
          }}
        />
      </>
    );
  }

  return (
    <div className="relative min-h-screen bg-bg-black text-white selection:bg-accent-purple/35 selection:text-white">
      {/* Dynamic Cursor Aura effect */}
      <CustomCursor />

      {/* Global Scroll Progress Indicator */}
      <div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-blue to-accent-purple z-50 origin-left transition-all duration-100"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Header Sticky Navbar */}
      <Navbar />

      {/* Sections Wrapper */}
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <WhyWorkWithMe />
        <Contact />
      </main>

      {/* Developer Footer */}
      <footer className="py-8 bg-bg-black border-t border-white/5 text-center text-xs text-text-gray font-mono">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {portfolioData.developerName}. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#404" className="text-red-400/80 hover:text-red-400 transition-colors flex items-center space-x-1">
              <span>View 404 Page</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

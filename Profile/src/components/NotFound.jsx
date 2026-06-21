import { motion } from 'framer-motion';
import { Home, Compass, Terminal } from 'lucide-react';

export default function NotFound({ onReturn }) {
  return (
    <div className="min-h-screen bg-bg-black flex flex-col justify-center items-center px-6 relative overflow-hidden text-center">
      {/* Space Mesh Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Floating neon orbits */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-accent-blue/10 rounded-full blur-3xl pointer-events-none z-0 animate-glow animate-pulse-slow" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-accent-purple/10 rounded-full blur-3xl pointer-events-none z-0 animate-glow" />

      <div className="relative z-10 space-y-8 max-w-lg">
        {/* Neon Terminal Indicator */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/10 text-red-400 text-xs font-mono font-semibold"
        >
          <Terminal className="w-3.5 h-3.5" />
          <span>ERROR_CODE: 404</span>
        </motion.div>

        {/* Glitch title */}
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white text-5xl md:text-7xl font-extrabold tracking-tight font-mono select-none"
          >
            404
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white text-xl md:text-2xl font-bold font-sans"
          >
            Lost in the digital void.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-text-gray text-sm md:text-base leading-relaxed"
          >
            The coordinates you requested lead to an empty array or deprecated route. Let's redirect your request.
          </motion.p>
        </div>

        {/* Return Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onReturn}
            className="group w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold text-sm hover:opacity-95 active:scale-95 transition-all duration-200"
          >
            <Home className="w-4 h-4" />
            <span>Return to Orbit</span>
          </button>
          
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="group w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3 rounded-xl border border-white/5 bg-white/5 text-text-gray hover:text-white text-sm font-semibold hover:bg-white/10 transition-all duration-200"
          >
            <Compass className="w-4 h-4" />
            <span>Search GitHub</span>
          </a>
        </motion.div>
      </div>

      {/* Footer system details */}
      <div className="absolute bottom-6 left-0 right-0 text-[10px] text-text-gray/20 font-mono">
        SYSTEM_PORTFOLIO // LATENCY: 0.04ms // SCALE: 1.00
      </div>
    </div>
  );
}

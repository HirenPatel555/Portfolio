import { motion } from 'framer-motion';
import { Database, Server, GitBranch, Code, LayoutGrid } from 'lucide-react';
import { GithubIcon as Github } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';

// Map icon names to custom SVGs or Lucide icons for high quality display
function SkillIcon({ name, className = "w-8 h-8" }) {
  const normName = name.toLowerCase();

  if (normName === 'html') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.7 3h14.6l-1.37 15.26L12 21l-5.93-2.74L4.7 3z" />
        <path d="M12 7.5H8.5l.3 3.5H12" />
        <path d="M12 11h3.2l-.3 3.5-2.9 1.3-2.9-1.3-.1-1.5" />
      </svg>
    );
  }
  if (normName === 'css') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.7 3h14.6l-1.37 15.26L12 21l-5.93-2.74L4.7 3z" />
        <path d="M8.5 7.5h7l-1 5h-6l.2 2.5 3.3.9 3.3-.9.2-2" />
      </svg>
    );
  }
  if (normName === 'javascript') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M15 9h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2" />
        <path d="M11 15h3a2 2 0 0 0 2-2v-4" />
      </svg>
    );
  }
  if (normName === 'react') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
        <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      </svg>
    );
  }
  if (normName === 'bootstrap') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M8 8h4.5a2.5 2.5 0 0 1 0 5H8z" />
        <path d="M8 13h5.5a2.5 2.5 0 0 1 0 5H8z" />
      </svg>
    );
  }
  if (normName === 'php') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="12" rx="10" ry="6" />
        <path d="M7.5 9v6M7.5 12h3M10.5 9v6M13.5 15V9h3.5a1.5 1.5 0 0 1 0 3H13.5" />
      </svg>
    );
  }
  if (normName === 'laravel') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" />
        <path d="M12 22V12" />
        <path d="M21 7l-9 5L3 7" />
        <path d="M12 12l9-5M12 12L3 7" />
      </svg>
    );
  }
  if (normName === 'node.js' || normName === 'node') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L4.5 6.5v11L12 22l7.5-4.5v-11L12 2z" />
        <path d="M12 2v10l7.5 4.5" />
        <path d="M12 12L4.5 16.5" />
      </svg>
    );
  }
  if (normName === 'mysql' || normName === 'mysql') {
    return <Database className={className} />;
  }
  if (normName === 'sql' || normName === 'database') {
    return <Server className={className} />;
  }
  if (normName === 'git') {
    return <GitBranch className={className} />;
  }
  if (normName === 'github') {
    return <Github className={className} />;
  }
  if (normName === 'vs code') {
    return <Code className={className} />;
  }

  return <LayoutGrid className={className} />;
}

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="skills" className="py-24 bg-bg-black relative overflow-hidden">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-accent-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col space-y-2 mb-16 text-center md:text-left">
          <span className="text-xs font-mono font-semibold tracking-widest text-accent-purple uppercase">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Core Technologies & Expertise
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full mx-auto md:mx-0 mt-2" />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {portfolioData.skills.map((categoryData, catIdx) => (
            <motion.div
              key={categoryData.category}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="glass-panel p-6 rounded-2xl border border-white/5 bg-bg-dark/50"
            >
              <h3 className="text-lg font-bold text-white mb-6 border-b border-white/5 pb-2 font-mono flex items-center justify-between">
                <span>{categoryData.category}</span>
                <span className="text-accent-purple text-xs">/0{catIdx + 1}</span>
              </h3>

              <div className="flex flex-col space-y-4">
                {categoryData.items.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ x: 5, scale: 1.01 }}
                    className="flex items-center space-x-4 p-3 rounded-xl border border-white/5 bg-bg-black/60 hover:bg-bg-dark hover:border-white/10 group transition-all duration-300 cursor-pointer"
                  >
                    <div className="p-2 rounded-lg bg-white/5 text-text-gray group-hover:text-accent-purple group-hover:bg-accent-purple/10 transition-all duration-300">
                      <SkillIcon name={skill.name} className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <span className="text-text-gray group-hover:text-white text-sm font-semibold transition-colors duration-200">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

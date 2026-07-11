import { motion } from 'framer-motion';
import { Database, Server, GitBranch, Code, LayoutGrid, BarChart, PieChart, TrendingUp, Sparkles, Terminal, Table } from 'lucide-react';
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
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#777BB4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="12" rx="10" ry="6" />
        <path d="M7.5 9v6M7.5 12h3M10.5 9v6M13.5 15V9h3.5a1.5 1.5 0 0 1 0 3H13.5" />
      </svg>
    );
  }
  if (normName === 'laravel') {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="#FF2D20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
  if (normName === 'python') {
    return (
      <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.09-.34-.09-.41-.33-.41-.41-.09-.41.09z" fill="#3776AB" />
        <path d="M15.15 6.34l.01 2.75.02.37-.05.34-.11.31-.17.28-.25.26-.31.23-.38.2-.44.18-.51.15-.58.12-.64.1-.71.06-.77.04-.84.02-1.27-.05-1.27-.05-.9-.2-.73-.26-.59-.3-.45-.32-.34-.34-.25-.34-.16-.33-.1-.3-.04-.26-.02-.2.01-.13V15.5l.05-.63.13-.55.21-.46.26-.38.3-.31.33-.25.35-.19.35-.14.33-.1.3-.07.26-.04.21-.02h5.18l.69-.05.59-.14.5-.22.41-.27.33-.32.27-.35.2-.36.15-.37.1-.35.07-.32.04-.27.02-.21v-3.06h3.03l.21.03.28.07.32.12.35.18.36.26.36.36.35.46.32.59.28.73.21.88.14 1.05.05 1.23-.06 1.22-.16 1.04-.24.87-.32.71-.36.57-.4.44-.42.33-.42.24-.4.16-.36.1-.32.05-.24.01h-.16l-.06-.01H9.84v.83h5.95zm-3.3 6.88l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.09-.34-.09-.41-.33-.41-.41-.09-.41.09z" fill="#FFD43B" />
      </svg>
    );
  }
  if (normName === 'excel') {
    return (
      <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M23 1.5q.41 0 .7.3.3.29.3.7v19q0 .41-.3.7-.29.3-.7.3H7q-.41 0-.7-.3-.3-.29-.3-.7V18H1q-.41 0-.7-.3-.3-.29-.3-.7V7q0-.41.3-.7Q.58 6 1 6h5V2.5q0-.41.3-.7.29-.3.7-.3H23zm-6.82 3.65L13.59 9.3l2.59 4.07h-2.24l-1.46-2.42-1.48 2.42h-2.18l2.62-4.07-2.43-3.85h2.18l1.37 2.33 1.35-2.33h2.17z" fill="#107C41" />
      </svg>
    );
  }
  if (normName === 'power bi') {
    return (
      <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="14" width="4" height="7" rx="1" fill="#E6AD12" />
        <rect x="10" y="8" width="4" height="13" rx="1" fill="#F2C811" />
        <rect x="16" y="2" width="4" height="19" rx="1" fill="#FEF200" />
      </svg>
    );
  }
  if (normName === 'data cleaning') {
    return <Sparkles className={className} style={{ color: '#00F2FE' }} />;
  }
  if (normName === 'data visualization') {
    return <PieChart className={className} style={{ color: '#22C55E' }} />;
  }
  if (normName === 'business insights') {
    return <TrendingUp className={className} style={{ color: '#F59E0B' }} />;
  }
  if (normName === 'mysql') {
    return <Database className={className} style={{ color: '#00758F' }} />;
  }
  if (normName === 'sql' || normName === 'database') {
    return <Server className={className} style={{ color: '#38BDF8' }} />;
  }
  if (normName === 'git') {
    return (
      <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.721.722-1.885.722-2.604 0-.719-.717-.719-1.879 0-2.6.148-.147.319-.268.497-.354V9.014c-.178-.086-.349-.207-.497-.355-.515-.515-.658-1.258-.438-1.9L7.548 6.099c-.645.223-1.387.078-1.9-.435-.721-.72-.721-1.884 0-2.604.719-.719 1.881-.719 2.6 0 .539.541.674 1.337.404 1.996l2.76 2.76-2.175 2.175-9.357-9.357c-.604-.603-1.582-.603-2.188 0L.452 10.93c-.604.603-.604 1.582 0 2.188l10.479 10.479c.604.603 1.582.603 2.188 0l10.479-10.479c.604-.603.604-1.582 0-2.188z" fill="#F05032" />
      </svg>
    );
  }
  if (normName === 'github') {
    return <Github className={className} style={{ fill: '#F8F9FA' }} />;
  }
  if (normName === 'vs code') {
    return (
      <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 23.15 2.587z" fill="#007ACC" />
      </svg>
    );
  }

  return <LayoutGrid className={className} />;
}

const skillColors = {
  'sql': {
    text: 'group-hover:text-[#38BDF8]', 
    bg: 'group-hover:bg-[#38BDF8]/10',
    border: 'hover:border-[#38BDF8]/30'
  },
  'python': {
    text: 'group-hover:text-[#3776AB]', 
    bg: 'group-hover:bg-[#3776AB]/10',
    border: 'hover:border-[#3776AB]/30'
  },
  'excel': {
    text: 'group-hover:text-[#107C41]', 
    bg: 'group-hover:bg-[#107C41]/10',
    border: 'hover:border-[#107C41]/30'
  },
  'power bi': {
    text: 'group-hover:text-[#F2C811]', 
    bg: 'group-hover:bg-[#F2C811]/10',
    border: 'hover:border-[#F2C811]/30'
  },
  'data cleaning': {
    text: 'group-hover:text-[#38BDF8]', 
    bg: 'group-hover:bg-[#38BDF8]/10',
    border: 'hover:border-[#38BDF8]/30'
  },
  'data visualization': {
    text: 'group-hover:text-[#22C55E]', 
    bg: 'group-hover:bg-[#22C55E]/10',
    border: 'hover:border-[#22C55E]/30'
  },
  'business insights': {
    text: 'group-hover:text-[#F59E0B]', 
    bg: 'group-hover:bg-[#F59E0B]/10',
    border: 'hover:border-[#F59E0B]/30'
  },
  'mysql': {
    text: 'group-hover:text-[#00758F]', 
    bg: 'group-hover:bg-[#00758F]/10',
    border: 'hover:border-[#00758F]/30'
  },
  'php': {
    text: 'group-hover:text-[#777BB4]', 
    bg: 'group-hover:bg-[#777BB4]/10',
    border: 'hover:border-[#777BB4]/30'
  },
  'laravel': {
    text: 'group-hover:text-[#FF2D20]', 
    bg: 'group-hover:bg-[#FF2D20]/10',
    border: 'hover:border-[#FF2D20]/30'
  },
  'git': {
    text: 'group-hover:text-[#F05032]', 
    bg: 'group-hover:bg-[#F05032]/10',
    border: 'hover:border-[#F05032]/30'
  },
  'github': {
    text: 'group-hover:text-[#F8FAFC]', 
    bg: 'group-hover:bg-[#F8FAFC]/10',
    border: 'hover:border-[#F8FAFC]/30'
  },
  'vs code': {
    text: 'group-hover:text-[#007ACC]', 
    bg: 'group-hover:bg-[#007ACC]/10',
    border: 'hover:border-[#007ACC]/30'
  }
};

export default function Skills() {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

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
              onMouseMove={handleMouseMove}
              className="glass-panel spotlight-card p-6 rounded-2xl border border-white/5 bg-bg-dark/50"
            >
              <div className="spotlight-card-bg" />
              <h3 className="text-lg font-bold text-white mb-6 border-b border-white/5 pb-2 font-mono flex items-center justify-between relative z-10">
                <span>{categoryData.category}</span>
                <span className="text-accent-purple text-xs">/0{catIdx + 1}</span>
              </h3>

              <div className="flex flex-col space-y-4 relative z-10">
                {categoryData.items.map((skill, index) => {
                  const colors = skillColors[skill.name.toLowerCase()] || {
                    text: 'group-hover:text-accent-purple',
                    bg: 'group-hover:bg-accent-purple/10',
                    border: 'hover:border-accent-purple/30'
                  };
                  return (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{ x: 5, scale: 1.01 }}
                      className={`group flex items-center space-x-4 p-3 rounded-xl border border-white/5 bg-bg-black/60 hover:bg-bg-dark transition-all duration-300 cursor-pointer ${colors.border}`}
                    >
                      <div className={`p-2 rounded-lg bg-white/5 text-text-gray transition-all duration-300 ${colors.text} ${colors.bg}`}>
                        <SkillIcon name={skill.name} className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <span className={`text-text-gray text-sm font-semibold transition-colors duration-200 ${colors.text}`}>
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

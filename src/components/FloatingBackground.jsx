import { motion } from 'framer-motion';
import { Database, Server, Code, Terminal, BarChart2, PieChart, TrendingUp, Cpu, GitBranch, Hash } from 'lucide-react';

function BackgroundIcon({ name, className }) {
  switch (name) {
    case 'Database': return <Database className={className} />;
    case 'Server': return <Server className={className} />;
    case 'Code': return <Code className={className} />;
    case 'Terminal': return <Terminal className={className} />;
    case 'BarChart2': return <BarChart2 className={className} />;
    case 'PieChart': return <PieChart className={className} />;
    case 'TrendingUp': return <TrendingUp className={className} />;
    case 'Cpu': return <Cpu className={className} />;
    case 'GitBranch': return <GitBranch className={className} />;
    default: return <Hash className={className} />;
  }
}

const FLOATING_ENTITIES = [
  { id: 1, type: 'text', content: 'SELECT * FROM data', x: '10%', y: '8%', delay: 0, duration: 16, scale: 0.9 },
  { id: 2, type: 'icon', name: 'Database', x: '88%', y: '12%', delay: 2, duration: 18, scale: 1.1 },
  { id: 3, type: 'text', content: 'df.groupby("insights")', x: '75%', y: '22%', delay: 4, duration: 20, scale: 0.8 },
  { id: 4, type: 'icon', name: 'BarChart2', x: '12%', y: '28%', delay: 6, duration: 17, scale: 1.2 },
  { id: 5, type: 'text', content: 'import pandas as pd', x: '82%', y: '35%', delay: 1, duration: 22, scale: 0.95 },
  { id: 6, type: 'icon', name: 'PieChart', x: '6%', y: '42%', delay: 3, duration: 15, scale: 1.0 },
  { id: 7, type: 'text', content: 'np.mean(metrics)', x: '72%', y: '48%', delay: 8, duration: 19, scale: 0.85 },
  { id: 8, type: 'icon', name: 'TrendingUp', x: '92%', y: '56%', delay: 5, duration: 18, scale: 1.1 },
  { id: 9, type: 'text', content: 'git commit -m "insights"', x: '8%', y: '64%', delay: 2, duration: 24, scale: 0.9 },
  { id: 10, type: 'icon', name: 'Code', x: '86%', y: '70%', delay: 7, duration: 17, scale: 1.15 },
  { id: 11, type: 'text', content: 'SQL JOIN ON id', x: '6%', y: '78%', delay: 3, duration: 21, scale: 1.0 },
  { id: 12, type: 'icon', name: 'Terminal', x: '79%', y: '83%', delay: 5, duration: 23, scale: 0.9 },
  { id: 13, type: 'text', content: 'Power BI / Excel', x: '86%', y: '90%', delay: 1, duration: 18, scale: 1.05 },
  { id: 14, type: 'icon', name: 'Server', x: '14%', y: '92%', delay: 4, duration: 20, scale: 1.1 },
  { id: 15, type: 'text', content: 'scikit-learn', x: '42%', y: '96%', delay: 6, duration: 26, scale: 0.8 },
];

export default function FloatingBackground() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {FLOATING_ENTITIES.map((entity) => (
        <motion.div
          key={entity.id}
          initial={{
            opacity: 0.01,
            y: 0,
            x: 0,
          }}
          animate={{
            opacity: [0.01, 0.08, 0.01],
            y: [0, -25, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: entity.duration,
            delay: entity.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            left: entity.x,
            top: entity.y,
            scale: entity.scale,
          }}
          className="select-none font-mono text-[10px] md:text-xs text-accent-blue/40 drop-shadow-[0_0_12px_rgba(0,242,254,0.15)] flex items-center justify-center pointer-events-none"
        >
          {entity.type === 'text' ? (
            <span className="whitespace-nowrap px-2 py-1 rounded bg-accent-blue/[0.02] border border-accent-blue/[0.04]">
              {entity.content}
            </span>
          ) : (
            <div className="p-1.5 rounded-full bg-accent-blue/[0.02] border border-accent-blue/[0.04]">
              <BackgroundIcon name={entity.name} className="w-4 h-4 md:w-5 md:h-5 text-accent-blue/40" />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

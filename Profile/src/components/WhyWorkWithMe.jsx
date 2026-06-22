import { motion } from 'framer-motion';
import { ShieldCheck, Flame, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

function FeatureIcon({ index, className = "w-6 h-6" }) {
  if (index === 0) return <ShieldCheck className={`${className} text-emerald-400`} />;
  if (index === 1) return <Flame className={`${className} text-amber-500`} />;
  return <GraduationCap className={`${className} text-accent-purple`} />;
}

export default function WhyWorkWithMe() {
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
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section className="py-24 bg-bg-dark relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col space-y-2 mb-16 text-center">
          <span className="text-xs font-mono font-semibold tracking-widest text-accent-purple uppercase">
            Value
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Why Work With Me
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full mx-auto mt-2" />
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {portfolioData.whyWorkWithMe.map((feature, idx) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.01 }}
              onMouseMove={handleMouseMove}
              className="glass-panel spotlight-card p-8 rounded-2xl border border-white/5 bg-bg-black/50 hover:bg-bg-black transition-all duration-300 flex flex-col items-center text-center md:items-start md:text-left group"
            >
              <div className="spotlight-card-bg" />
              <div className="relative z-10 flex flex-col items-center text-center md:items-start md:text-left w-full h-full">
                {/* Icon Container */}
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FeatureIcon index={idx} className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-text-gray text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

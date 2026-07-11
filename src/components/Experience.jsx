import { motion } from 'framer-motion';
import { Calendar, Briefcase, ChevronRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="experience" className="py-24 bg-bg-dark relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col space-y-2 mb-16 text-center">
          <span className="text-xs font-mono font-semibold tracking-widest text-accent-purple uppercase">
            History
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Professional Experience
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full mx-auto mt-2" />
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12 py-4">
          {portfolioData.experiences.map((exp, index) => (
            <motion.div
              key={exp.company + exp.position}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 md:pl-10 group"
            >
              {/* Timeline marker */}
              <div className="absolute top-1.5 -left-[7px] w-3 h-3 rounded-full bg-bg-black border-2 border-accent-purple group-hover:bg-accent-purple group-hover:scale-125 transition-all duration-300 shadow-md shadow-accent-purple/30" />

              <div 
                onMouseMove={handleMouseMove}
                className="glass-panel spotlight-card p-6 md:p-8 rounded-2xl border border-white/5 bg-bg-black/40 transition-all duration-300"
              >
                <div className="spotlight-card-bg" />
                <div className="relative z-10">
                  {/* Meta details */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-accent-purple transition-colors duration-200">
                        {exp.position}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-text-gray mt-1">
                      <Briefcase className="w-4 h-4 text-accent-blue" />
                      <span className="font-semibold text-white/80">{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-xs font-mono text-accent-purple bg-accent-purple/10 px-3 py-1.5 rounded-full border border-accent-purple/10 w-fit">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Job responsibilities list */}
                <ul className="space-y-2.5 mb-6 text-sm text-text-gray leading-relaxed">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start space-x-2">
                      <ChevronRight className="w-4 h-4 text-accent-purple mt-1 flex-shrink-0" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-white/70 hover:text-white hover:border-white/20 transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import { GithubIcon as Github } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 20, stiffness: 100 }
    }
  };

  return (
    <section id="projects" className="py-24 bg-bg-black relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-accent-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col space-y-2 mb-16 text-center md:text-left">
          <span className="text-xs font-mono font-semibold tracking-widest text-accent-purple uppercase">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Featured Projects & Apps
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full mx-auto md:mx-0 mt-2" />
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {portfolioData.projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="glass-panel rounded-2xl overflow-hidden border border-white/5 bg-bg-dark/40 flex flex-col h-full card-glow-hover group"
            >
              {/* Project Preview Layout */}
              <div className={`h-48 bg-gradient-to-br ${project.imageGradient} p-6 relative overflow-hidden flex items-center justify-center`}>
                {/* Background grid representation */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                
                {/* Dynamic visual representation of code/UI */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="w-4/5 h-4/5 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg p-3 flex flex-col justify-between shadow-2xl relative z-10 transition-colors group-hover:border-white/20"
                >
                  <div className="flex items-center justify-between border-b border-white/5 pb-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 rounded-full bg-white/20" />
                      <div className="w-2 h-2 rounded-full bg-white/20" />
                      <div className="w-2 h-2 rounded-full bg-white/20" />
                    </div>
                    <span className="text-[9px] font-mono text-white/40">app.view</span>
                  </div>
                  <div className="flex flex-col justify-center items-center py-4 space-y-1">
                    <Code className="w-6 h-6 text-white/50 group-hover:text-accent-purple transition-colors duration-300" />
                    <span className="text-white text-[10px] font-bold tracking-widest uppercase opacity-75">{project.title.split(' ')[0]}</span>
                  </div>
                  <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                    <div className="w-3/5 bg-gradient-to-r from-accent-blue to-accent-purple h-full rounded-full animate-shimmer" />
                  </div>
                </motion.div>
              </div>

              {/* Card Details */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-purple transition-colors duration-200">
                    {project.title}
                  </h3>
                  <p className="text-text-gray text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/5 text-white/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center space-x-4 border-t border-white/5 pt-4">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center space-x-1.5 text-xs text-text-gray hover:text-white font-medium transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Repository</span>
                    </a>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center space-x-1.5 text-xs text-text-gray hover:text-white font-medium transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

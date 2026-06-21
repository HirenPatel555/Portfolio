import { motion } from 'framer-motion';
import { User, Award, BookOpen, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  const { role, description, education, passion, stats } = portfolioData.about;

  return (
    <section id="about" className="py-24 bg-bg-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-40 right-10 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col space-y-2 mb-16 text-center md:text-left">
          <span className="text-xs font-mono font-semibold tracking-widest text-accent-purple uppercase">
            About
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            My Journey & Background
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full mx-auto md:mx-0 mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 glass-panel p-8 md:p-10 rounded-2xl border border-white/5 space-y-6"
          >
            <div className="flex items-center space-x-3 text-white">
              <User className="w-6 h-6 text-accent-purple" />
              <h3 className="text-xl font-bold">{role}</h3>
            </div>

            <p className="text-text-gray leading-relaxed text-sm md:text-base">
              {description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/5">
              <div className="flex items-start space-x-3">
                <BookOpen className="w-5 h-5 text-accent-blue mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold text-sm">Education</h4>
                  <p className="text-text-gray text-xs md:text-sm mt-1">{education}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Heart className="w-5 h-5 text-accent-purple mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold text-sm">Passion</h4>
                  <p className="text-text-gray text-xs md:text-sm mt-1">{passion}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Stats Cards */}
          <div className="lg:col-span-4 flex flex-col space-y-6 w-full">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 relative overflow-hidden group flex flex-col justify-center text-center md:text-left card-glow-hover"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-purple/10 to-accent-blue/10 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
                <span className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-accent-blue to-accent-purple font-mono mb-2">
                  {stat.value}
                </span>
                <span className="text-white font-medium text-sm md:text-base tracking-wide">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

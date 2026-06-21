import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      tempErrors.message = 'Message content is required';
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters long';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API request call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Auto close success alert after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error dynamically when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-24 bg-bg-black relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-accent-purple/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col space-y-2 mb-16 text-center">
          <span className="text-xs font-mono font-semibold tracking-widest text-accent-purple uppercase">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            {portfolioData.contact.heading}
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-accent-blue to-accent-purple rounded-full mx-auto mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Details / Social Info Column */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">Let's Connect</h3>
              <p className="text-text-gray text-sm md:text-base leading-relaxed">
                Whether you have a project idea, want to discuss software engineering, or just want to say hi, feel free to drop a message. I'll get back to you as soon as possible!
              </p>
            </div>

            {/* Direct Mail Details */}
            <div className="flex items-center space-x-4 p-4 rounded-xl border border-white/5 bg-bg-dark/40 w-fit">
              <div className="p-2.5 rounded-lg bg-accent-purple/10 text-accent-purple">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-text-gray font-mono">DIRECT EMAIL</p>
                <a href={`mailto:${portfolioData.contact.email}`} className="text-sm md:text-base text-white hover:text-accent-purple font-semibold transition-colors">
                  {portfolioData.contact.email}
                </a>
              </div>
            </div>

            {/* Social Buttons List */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">Find Me On</h4>
              <div className="flex items-center space-x-4">
                <a
                  href={portfolioData.contact.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 px-4 py-2.5 rounded-xl border border-white/5 bg-bg-dark/50 hover:bg-white/5 text-sm font-medium text-text-gray hover:text-white transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </a>

                <a
                  href={portfolioData.contact.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-2 px-4 py-2.5 rounded-xl border border-white/5 bg-bg-dark/50 hover:bg-white/5 text-sm font-medium text-text-gray hover:text-white transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 w-full">
            <form onSubmit={handleSubmit} className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 bg-bg-dark/40 space-y-6 relative">
              
              {/* Success Notification Alert */}
              <AnimatePresence>
                {isSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex items-center space-x-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm mb-4"
                  >
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Thank you! Your message has been sent successfully.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Name Field */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="name" className="text-xs font-semibold text-text-gray font-mono uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={`w-full px-4 py-3 rounded-xl border bg-bg-black/60 text-white placeholder-white/20 text-sm focus:outline-none focus:ring-1 focus:ring-accent-purple transition-all duration-300 ${
                    errors.name ? 'border-red-500/50' : 'border-white/5 focus:border-accent-purple'
                  }`}
                />
                {errors.name && (
                  <span className="text-red-400 text-xs flex items-center space-x-1 mt-1 font-mono">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.name}</span>
                  </span>
                )}
              </div>

              {/* Email Field */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-xs font-semibold text-text-gray font-mono uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="johndoe@example.com"
                  className={`w-full px-4 py-3 rounded-xl border bg-bg-black/60 text-white placeholder-white/20 text-sm focus:outline-none focus:ring-1 focus:ring-accent-purple transition-all duration-300 ${
                    errors.email ? 'border-red-500/50' : 'border-white/5 focus:border-accent-purple'
                  }`}
                />
                {errors.email && (
                  <span className="text-red-400 text-xs flex items-center space-x-1 mt-1 font-mono">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.email}</span>
                  </span>
                )}
              </div>

              {/* Message Field */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="message" className="text-xs font-semibold text-text-gray font-mono uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project, ideas, or questions here..."
                  className={`w-full px-4 py-3 rounded-xl border bg-bg-black/60 text-white placeholder-white/20 text-sm focus:outline-none focus:ring-1 focus:ring-accent-purple transition-all duration-300 resize-none ${
                    errors.message ? 'border-red-500/50' : 'border-white/5 focus:border-accent-purple'
                  }`}
                />
                {errors.message && (
                  <span className="text-red-400 text-xs flex items-center space-x-1 mt-1 font-mono">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.message}</span>
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-gradient-to-r from-accent-blue to-accent-purple text-white font-semibold text-sm hover:opacity-95 disabled:opacity-50 shadow-lg shadow-accent-purple/20 transition-all duration-300"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Send, CheckCircle2, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="py-20 bg-transparent border-t border-slate-200/60 dark:border-[#1e262e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Messaging Column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-mono font-medium uppercase tracking-widest text-sky-600 dark:text-sky-400 mb-3 block">
                06 — GET IN TOUCH
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-4 font-sans">
                Let's turn data into better decisions.
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                I'm open to connecting with professionals, recruiters, and hiring managers looking for a Data Analyst or Business Analyst with strong technical capabilities.
              </p>
            </div>

            {/* Direct Social / Email Cards */}
            <div className="space-y-3 pt-2">
              {/* Email */}
              <a
                href={`mailto:${portfolioData.personal.emailPlaceholder}`}
                className="p-4 bg-white dark:bg-[#11161b] rounded-xl border border-slate-200 dark:border-[#1e262e] flex items-center gap-4 hover:border-sky-400 transition-all group shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-50 dark:bg-[#151c22] text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">
                    Email Address
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white truncate block">
                    {portfolioData.personal.emailPlaceholder}
                  </span>
                </div>
              </a>

              {/* LinkedIn with Official Brand Icon */}
              <a
                href={portfolioData.personal.linkedInPlaceholder}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white dark:bg-[#11161b] rounded-xl border border-slate-200 dark:border-[#1e262e] flex items-center gap-4 hover:border-sky-400 transition-all group shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-50 dark:bg-[#151c22] text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">
                    LinkedIn Profile
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white block">
                    linkedin.com/in/hirenpatel555
                  </span>
                </div>
              </a>

              {/* GitHub with Official Brand Icon */}
              <a
                href={portfolioData.personal.gitHubPlaceholder}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white dark:bg-[#11161b] rounded-xl border border-slate-200 dark:border-[#1e262e] flex items-center gap-4 hover:border-sky-400 transition-all group shadow-sm"
              >
                <div className="w-10 h-10 rounded-lg bg-sky-50 dark:bg-[#151c22] text-sky-600 dark:text-sky-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-slate-400 block">
                    GitHub Profile
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white block">
                    github.com/HirenPatel555
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Contact Form Column */}
          <div className="lg:col-span-7 bg-white dark:bg-[#11161b] p-8 rounded-2xl border border-slate-200 dark:border-[#1e262e] shadow-xl">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 font-sans">
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Have an open Data Analyst position or analytics inquiry? Fill out the form below.
            </p>

            {submitted ? (
              <div className="p-6 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl text-center space-y-3 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-md shadow-emerald-500/20">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-emerald-900 dark:text-emerald-100 font-sans">
                  Message Submitted!
                </h4>
                <p className="text-xs text-emerald-700 dark:text-emerald-300 leading-relaxed max-w-md mx-auto">
                  Thank you for reaching out.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 text-xs font-semibold text-emerald-800 dark:text-emerald-200 bg-white dark:bg-[#151c22] rounded-lg border border-emerald-300 dark:border-emerald-700 hover:bg-emerald-100 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 text-xs bg-slate-50 dark:bg-[#151c22] border border-slate-200 dark:border-[#1e262e] rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400 text-slate-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5">
                      Your Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 text-xs bg-slate-50 dark:bg-[#151c22] border border-slate-200 dark:border-[#1e262e] rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400 text-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5">
                    Subject / Role Title
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Data Analyst Position Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 text-xs bg-slate-50 dark:bg-[#151c22] border border-slate-200 dark:border-[#1e262e] rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400 text-slate-900 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Brief details about your team, company, or analytical project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 text-xs bg-slate-50 dark:bg-[#151c22] border border-slate-200 dark:border-[#1e262e] rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-400 text-slate-900 dark:text-white resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 rounded-full transition-all disabled:opacity-50"
                >
                  {loading ? 'Submitting...' : 'Send Message'}
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

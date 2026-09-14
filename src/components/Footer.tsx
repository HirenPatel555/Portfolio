'use client';

import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Footer() {
  return (
    <footer className="py-10 bg-transparent border-t border-slate-200/60 dark:border-[#1e262e] text-slate-600 dark:text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Branding */}
        <div className="flex items-center gap-2">
          <span className="font-extrabold text-xl tracking-tighter text-slate-900 dark:text-white font-sans">
            HP<span className="text-sky-400 font-serif">.</span>
          </span>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
            {portfolioData.personal.roleTitle}
          </span>
        </div>

        {/* Quick Links */}
        <div className="flex items-center gap-6 font-mono text-xs">
          <a
            href={portfolioData.personal.linkedInPlaceholder}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-500 transition-colors flex items-center gap-1.5"
          >
            <LinkedinIcon className="w-3.5 h-3.5" /> LinkedIn
          </a>
          <a
            href={portfolioData.personal.gitHubPlaceholder}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5"
          >
            <GithubIcon className="w-3.5 h-3.5" /> GitHub
          </a>
          <a
            href={`mailto:${portfolioData.personal.emailPlaceholder}`}
            className="hover:text-sky-500 transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" /> Email
          </a>
        </div>

        {/* Copyright & Credit */}
        <div className="flex flex-col md:items-end gap-0.5 text-center md:text-right font-mono text-[11px]">
          <span>© 2026 {portfolioData.personal.name}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

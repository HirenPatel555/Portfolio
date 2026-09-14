'use client';

import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { FileText, Download, CheckCircle } from 'lucide-react';

export default function ResumeSection() {
  return (
    <section className="py-16 bg-transparent border-t border-slate-200/60 dark:border-[#1e262e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 dark:bg-[#11161b] text-white p-8 sm:p-12 rounded-2xl border border-slate-800 dark:border-[#1e262e] shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Text */}
          <div className="space-y-4 max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-mono border border-sky-500/30">
              <FileText className="w-3.5 h-3.5" />
              <span>OFFICIAL RESUME</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight font-sans">
              Looking for a Complete Summary of My Profile?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 dark:text-slate-400 leading-relaxed">
              Download my official resume detailing data analytics competencies, SQL expertise, business analysis frameworks, and academic background in Business Analytics and IT.
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs text-slate-300 dark:text-slate-400 pt-2 font-mono">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-sky-400" /> Data Analyst roles
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-sky-400" /> ATS-Optimized PDF
              </span>
            </div>
          </div>

          {/* Right Action */}
          <div className="flex flex-col items-center gap-3 shrink-0">
            <a
              href={portfolioData.personal.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 rounded-full shadow-md transition-all hover:scale-[1.02]"
            >
              <Download className="w-4 h-4 text-slate-900" />
              Download Resume (PDF)
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

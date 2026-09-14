'use client';

import React from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  FileSpreadsheet,
  Database,
  Search,
  Target,
  BarChart3,
  Lightbulb,
  CheckCircle2,
  Code
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileSpreadsheet,
  Database,
  Search,
  Target,
  BarChart3,
  Lightbulb,
};

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-transparent border-t border-slate-200/60 dark:border-[#1e262e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-14">
          <span className="text-xs font-mono font-medium uppercase tracking-widest text-sky-600 dark:text-sky-400 mb-3">
            01 — ABOUT ME
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-4 font-sans">
            Bridging Technical Systems & Business Strategy
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            I combine technical knowledge with business-focused thinking to turn raw, structured data into clear executive insights.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Bio Narrative */}
          <div className="lg:col-span-6 space-y-4 text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
            {portfolioData.personal.bioParagraphs.map((paragraph, index) => (
              <p key={index} className="bg-white dark:bg-[#11161b] p-5 rounded-xl border border-slate-200 dark:border-[#1e262e] shadow-sm">
                {paragraph}
              </p>
            ))}

            {/* Differentiator Banner */}
            <div className="p-5 rounded-xl bg-slate-100 dark:bg-[#151c22] border border-slate-200 dark:border-[#1e262e] text-slate-900 dark:text-slate-100 flex items-start gap-3.5">
              <Code className="w-5 h-5 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
              <div className="text-xs space-y-1">
                <span className="font-bold text-sm block">My Technical Advantage</span>
                <p className="leading-normal text-slate-600 dark:text-slate-400">
                  Because I have written SQL queries, designed MySQL relational database tables, and built backend APIs, I understand how data is stored, structured, and queried under the hood. This eliminates communication gaps when working with engineering teams.
                </p>
              </div>
            </div>
          </div>

          {/* "What I Bring" Core Capabilities */}
          <div className="lg:col-span-6">
            <h3 className="text-xs font-mono font-medium uppercase tracking-widest text-sky-600 dark:text-sky-400 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              What I Bring To The Table
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {portfolioData.personal.whatIBring.map((item) => {
                const IconComponent = iconMap[item.icon] || BarChart3;
                return (
                  <div
                    key={item.title}
                    className="p-4 bg-white dark:bg-[#11161b] rounded-xl border border-slate-200 dark:border-[#1e262e] shadow-sm hover:border-sky-400 transition-all group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-sky-50 dark:bg-[#151c22] text-sky-600 dark:text-sky-400 flex items-center justify-center mb-2.5 group-hover:bg-sky-400 group-hover:text-slate-900 transition-colors">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

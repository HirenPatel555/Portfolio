'use client';

import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-transparent border-t border-slate-200/60 dark:border-[#1e262e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow and Section Title */}
        <div className="mb-14">
          <div className="text-xs font-mono font-medium uppercase tracking-widest text-sky-600 dark:text-sky-400 mb-3">
            02 — EXPERIENCE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight font-sans">
            Working with data that people rely on.
          </h2>
        </div>

        {/* Timeline Layout */}
        <div className="relative pl-6 sm:pl-8 space-y-12 before:absolute before:left-2.5 sm:before:left-3 before:top-2 before:bottom-2 before:w-[1px] before:bg-slate-200 dark:before:bg-[#1e262e]">
          {portfolioData.experiences.map((exp) => (
            <div key={exp.id} className="relative group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
              {/* Cyan Node Dot on Timeline */}
              <div className="absolute -left-6 sm:-left-8 top-1.5 w-2.5 h-2.5 rounded-full bg-sky-400 border-2 border-white dark:border-[#0b0f12] shadow-sm z-10" />

              {/* Left Column: Period & Location */}
              <div className="md:col-span-4 lg:col-span-3 pt-0.5">
                <div className="text-xs font-bold text-slate-900 dark:text-white font-sans">
                  {exp.period}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {exp.location}
                </div>
              </div>

              {/* Right Column: Company, Role, Description, Tags */}
              <div className="md:col-span-8 lg:col-span-9 space-y-3">
                {/* Company Name in Cyan Monospace Uppercase */}
                <div className="text-xs font-mono uppercase tracking-widest text-sky-600 dark:text-sky-400 font-semibold">
                  {exp.company}
                </div>

                {/* Role Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-sans">
                  {exp.role}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
                  {exp.description}
                </p>

                {/* Tech & Impact Tag Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.impactTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[11px] font-sans font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-[#151c22] border border-slate-200 dark:border-[#222c36] rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-transparent border-t border-slate-200/60 dark:border-[#1e262e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-14">
          <span className="text-xs font-mono font-medium uppercase tracking-widest text-sky-600 dark:text-sky-400 mb-3">
            05 — ACADEMIC BACKGROUND
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-4 font-sans">
            Education & Qualifications
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Academic degrees pairing strategic business analytics with computer science and information technology foundations.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.education.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-[#11161b] p-8 rounded-xl border border-slate-200 dark:border-[#1e262e] flex flex-col justify-between hover:border-sky-400 transition-all shadow-sm group"
            >
              <div>
                {/* Header Icon & Period */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-sky-50 dark:bg-[#151c22] text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold shadow-sm">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="flex items-center gap-1.5 px-3 py-1 text-xs font-mono bg-slate-100 dark:bg-[#151c22] text-slate-600 dark:text-slate-400 rounded-lg border border-slate-200 dark:border-[#1e262e]">
                    <Calendar className="w-3.5 h-3.5 text-sky-500" />
                    {item.period}
                  </span>
                </div>

                {/* Degree & Institution */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 font-sans">
                  {item.degree}
                </h3>
                <div className="text-xs font-mono font-semibold text-sky-600 dark:text-sky-400 flex items-center gap-2 mb-4">
                  <span>{item.institution}</span>
                  {item.location && (
                    <>
                      <span className="text-slate-300 dark:text-slate-700">•</span>
                      <span className="text-xs font-normal text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {item.location}
                      </span>
                    </>
                  )}
                </div>

                {/* Details Description */}
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {item.details}
                </p>

                {/* Academic Highlights */}
                <div className="space-y-2 pt-4 border-t border-slate-100 dark:border-[#1e262e]">
                  <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider">
                    Core Focus & Highlights:
                  </span>
                  <ul className="space-y-2">
                    {item.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

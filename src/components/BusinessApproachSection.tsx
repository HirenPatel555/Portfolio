'use client';

import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Target, Search, BarChart3, Lightbulb, Check } from 'lucide-react';

const stepIcons = [Target, Search, BarChart3, Lightbulb];

export default function BusinessApproachSection() {
  return (
    <section id="approach" className="py-20 bg-transparent border-t border-slate-200/60 dark:border-[#1e262e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-14">
          <span className="text-xs font-mono font-medium uppercase tracking-widest text-sky-600 dark:text-sky-400 mb-3">
            07 — BUSINESS METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-4 font-sans">
            How I Approach Business Problems
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Data is only valuable when tied to business questions. I follow a structured 4-step framework to move seamlessly from raw numbers to high-impact strategy.
          </p>
        </div>

        {/* 4-Step Process Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {portfolioData.approach.map((item, index) => {
            const IconComponent = stepIcons[index] || Target;
            return (
              <div
                key={item.number}
                className="relative bg-white dark:bg-[#11161b] rounded-xl p-6 border border-slate-200 dark:border-[#1e262e] flex flex-col justify-between hover:border-sky-400 transition-all group shadow-sm"
              >
                <div>
                  {/* Step Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="w-9 h-9 rounded-lg bg-sky-50 dark:bg-[#151c22] text-sky-600 dark:text-sky-400 font-mono text-xs font-bold flex items-center justify-center border border-sky-200 dark:border-sky-800">
                      {item.number}
                    </span>
                    <IconComponent className="w-5 h-5 text-slate-400 group-hover:text-sky-500 transition-colors" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 font-sans">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Key Action Points */}
                  <ul className="space-y-2 border-t border-slate-100 dark:border-[#1e262e] pt-3">
                    {item.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-[11px] text-slate-600 dark:text-slate-400">
                        <Check className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

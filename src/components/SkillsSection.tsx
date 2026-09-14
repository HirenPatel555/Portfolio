'use client';

import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import {
  Database,
  LineChart,
  BarChart2,
  Cpu,
  Code2,
  CheckCircle,
  Filter,
  Sparkles
} from 'lucide-react';

const categoryIcons = [Database, LineChart, BarChart2, Cpu, Code2];

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');

  const categories = portfolioData.skills;

  const filteredCategories =
    selectedCategory === 'ALL'
      ? categories
      : categories.filter((c) => c.title === selectedCategory);

  return (
    <section id="skills" className="py-20 bg-transparent border-t border-slate-200/60 dark:border-[#1e262e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-12">
          <span className="text-xs font-mono font-medium uppercase tracking-widest text-sky-600 dark:text-sky-400 mb-3">
            03 — SKILLS & COMPETENCIES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-4 font-sans">
            Technical & Analytical Toolkit
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Categorized overview of analytical query languages, business analysis frameworks, BI dashboarding tools, and database systems.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-200 dark:border-[#1e262e]">
          <span className="text-xs font-mono text-slate-400 dark:text-slate-500 mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            Filter:
          </span>
          <button
            onClick={() => setSelectedCategory('ALL')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              selectedCategory === 'ALL'
                ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm'
                : 'bg-slate-100 dark:bg-[#151c22] text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-[#1c242c]'
            }`}
          >
            All Skills
          </button>
          {categories.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setSelectedCategory(cat.title)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === cat.title
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-sm'
                  : 'bg-slate-100 dark:bg-[#151c22] text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-[#1c242c]'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, idx) => {
            const IconComponent = categoryIcons[idx % categoryIcons.length] || Database;
            return (
              <div
                key={cat.title}
                className="bg-white dark:bg-[#11161b] p-6 rounded-xl border border-slate-200 dark:border-[#1e262e] flex flex-col justify-between hover:border-sky-400 transition-all shadow-sm"
              >
                <div>
                  {/* Category Title & Icon */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-sky-50 dark:bg-[#151c22] text-sky-600 dark:text-sky-400 flex items-center justify-center font-bold">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-mono font-bold text-slate-900 dark:text-white tracking-wider uppercase">
                        {cat.title}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400">
                        {cat.skills.length} skills listed
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                    {cat.description}
                  </p>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                          skill.isPrimary
                            ? 'bg-slate-50 dark:bg-[#151c22] text-sky-700 dark:text-sky-300 border-sky-300 dark:border-sky-800 shadow-sm font-semibold'
                            : 'bg-white dark:bg-[#11161b] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-[#1e262e]'
                        }`}
                      >
                        {skill.isPrimary ? (
                          <Sparkles className="w-3 h-3 text-sky-500" />
                        ) : (
                          <CheckCircle className="w-3 h-3 text-emerald-500" />
                        )}
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

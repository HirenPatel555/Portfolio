'use client';

import React, { useState } from 'react';
import { portfolioData, CaseStudy } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import {
  ArrowRight,
  AlertCircle
} from 'lucide-react';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);

  return (
    <section id="projects" className="py-20 bg-transparent border-t border-slate-200/60 dark:border-[#1e262e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-3xl mb-14">
          <span className="text-xs font-mono font-medium uppercase tracking-widest text-sky-600 dark:text-sky-400 mb-3">
            04 — PROJECTS & CASE STUDIES
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white tracking-tight mb-4 font-sans">
            Analytical Case Studies
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Detailed analytics case studies demonstrating business problem solving, data preparation, SQL query modeling, and executive recommendation workflows.
          </p>
          <div className="mt-3 text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-[#151c22] px-3 py-1.5 rounded-md border border-slate-200 dark:border-[#1e262e] flex items-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5 shrink-0 text-sky-500" />
            <span>Clearly labeled demo projects using realistic sample datasets for portfolio demonstration.</span>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-[#11161b] rounded-xl border border-slate-200 dark:border-[#1e262e] overflow-hidden flex flex-col justify-between hover:border-sky-400 hover:shadow-xl transition-all group"
            >
              <div className="p-6">
                {/* Header Category & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider bg-sky-50 dark:bg-[#151c22] text-sky-600 dark:text-sky-400 rounded border border-sky-200 dark:border-sky-800">
                    {project.category}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    Case Study
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-sky-500 transition-colors font-sans">
                  {project.title}
                </h3>

                {/* Short Business Problem */}
                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed mb-6">
                  {project.businessProblem}
                </p>

                {/* Tools Stack Pills */}
                <div className="flex flex-wrap items-center gap-1.5 mb-6">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 text-[11px] font-mono bg-slate-100 dark:bg-[#151c22] text-slate-700 dark:text-slate-300 rounded border border-slate-200 dark:border-[#1e262e]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Key Metrics Preview */}
                <div className="grid grid-cols-2 gap-2 p-3 bg-slate-50 dark:bg-[#151c22] rounded-lg border border-slate-100 dark:border-[#1e262e] mb-4">
                  {project.kpis.slice(0, 2).map((kpi, i) => (
                    <div key={i}>
                      <span className="text-[10px] text-slate-400 font-mono block truncate">
                        {kpi.label}
                      </span>
                      <span className="text-sm font-bold text-slate-900 dark:text-white font-mono">
                        {kpi.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Trigger Footer */}
              <div className="px-6 py-4 bg-slate-50 dark:bg-[#151c22] border-t border-slate-100 dark:border-[#1e262e] flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400">
                  Interactive Breakdown
                </span>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-600 dark:text-sky-400 hover:underline transition-colors"
                >
                  View Case Study
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal View */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

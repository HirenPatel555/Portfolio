'use client';

import React, { useState } from 'react';
import { CaseStudy } from '../data/portfolioData';
import {
  X,
  Database,
  FileSpreadsheet,
  BarChart3,
  TrendingUp,
  AlertCircle,
  Lightbulb,
  CheckCircle2,
  ListOrdered,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Cell
} from 'recharts';

interface ProjectModalProps {
  project: CaseStudy | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'data' | 'insights' | 'charts'>('overview');

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-white dark:bg-[#11161b] rounded-2xl shadow-2xl border border-slate-200 dark:border-[#1e262e] overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-[#151c22] border-b border-slate-200 dark:border-[#1e262e] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wide bg-sky-50 dark:bg-[#1b232c] text-sky-600 dark:text-sky-400 rounded-md border border-sky-200 dark:border-sky-800">
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 text-sky-400" />
              Sample Data
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-lg hover:bg-slate-200 dark:hover:bg-[#1e262e] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project Header Info */}
        <div className="p-6 sm:p-8 border-b border-slate-100 dark:border-[#1e262e] bg-white dark:bg-[#11161b] shrink-0">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2 font-sans">
            {project.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
            {project.subtitle}
          </p>

          {/* Tools Badges & Key Stats Row */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase text-slate-400 mr-1">
                Tools Used:
              </span>
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 text-xs font-mono bg-slate-100 dark:bg-[#151c22] text-slate-700 dark:text-slate-300 rounded-md border border-slate-200 dark:border-[#1e262e]"
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* Sub Nav Tabs */}
            <div className="flex items-center gap-1 bg-slate-100 dark:bg-[#151c22] p-1 rounded-xl border border-slate-200 dark:border-[#1e262e]">
              {(['overview', 'data', 'charts', 'insights'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono capitalize transition-all ${
                    activeTab === tab
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Scrollable Content Area */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
          {/* Top KPI Cards Grid */}
          <div>
            <h3 className="text-xs font-mono font-medium uppercase tracking-widest text-sky-600 dark:text-sky-400 mb-3 flex items-center gap-1.5">
              <BarChart3 className="w-3.5 h-3.5" />
              Key Executive Metrics (KPIs)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {project.kpis.map((kpi, i) => (
                <div
                  key={i}
                  className="p-4 bg-slate-50 dark:bg-[#151c22] rounded-xl border border-slate-200 dark:border-[#1e262e]"
                >
                  <span className="text-[11px] font-mono text-slate-400 block mb-1">
                    {kpi.label}
                  </span>
                  <div className="text-xl font-bold font-mono text-slate-900 dark:text-white">
                    {kpi.value}
                  </div>
                  {kpi.trend && (
                    <span className="text-[11px] font-mono text-sky-500 flex items-center gap-1 mt-1">
                      <TrendingUp className="w-3 h-3" /> {kpi.trend}
                    </span>
                  )}
                  <span className="text-[10px] text-slate-400 block mt-1">
                    {kpi.description}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* TAB 1: OVERVIEW */}
          {(activeTab === 'overview' || activeTab === 'data') && (
            <div className="space-y-6">
              {/* Business Problem */}
              <div className="p-5 bg-sky-50/50 dark:bg-[#151c22] rounded-xl border border-sky-200 dark:border-[#1e262e]">
                <h3 className="text-xs font-mono uppercase font-bold text-sky-700 dark:text-sky-400 mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-sky-500" />
                  1. Business Problem & Challenge
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.businessProblem}
                </p>
              </div>

              {/* Objective */}
              <div className="p-5 bg-slate-50 dark:bg-[#151c22] rounded-xl border border-slate-200 dark:border-[#1e262e]">
                <h3 className="text-xs font-mono uppercase font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-sky-500" />
                  2. Analytical Objective
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.objective}
                </p>
              </div>

              {/* Dataset Description */}
              <div className="p-5 bg-slate-50 dark:bg-[#151c22] rounded-xl border border-slate-200 dark:border-[#1e262e]">
                <h3 className="text-xs font-mono uppercase font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  <Database className="w-4 h-4 text-sky-500" />
                  3. Dataset Description
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.datasetInfo}
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: DATA PREP & APPROACH */}
          {(activeTab === 'overview' || activeTab === 'data') && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Data Preparation */}
              <div className="p-5 bg-white dark:bg-[#151c22] rounded-xl border border-slate-200 dark:border-[#1e262e] shadow-sm">
                <h3 className="text-xs font-mono uppercase font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <FileSpreadsheet className="w-4 h-4 text-sky-500" />
                  4. Data Preparation & Cleaning
                </h3>
                <ul className="space-y-2.5">
                  {project.dataPreparation.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Analytical Approach */}
              <div className="p-5 bg-white dark:bg-[#151c22] rounded-xl border border-slate-200 dark:border-[#1e262e] shadow-sm">
                <h3 className="text-xs font-mono uppercase font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                  <ListOrdered className="w-4 h-4 text-sky-500" />
                  5. Analytical Approach & SQL Logic
                </h3>
                <ul className="space-y-2.5">
                  {project.analyticalApproach.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* TAB 3: CHARTS & VISUALIZATIONS */}
          {(activeTab === 'overview' || activeTab === 'charts') && (
            <div className="space-y-6">
              <h3 className="text-xs font-mono font-medium uppercase tracking-widest text-sky-600 dark:text-sky-400 flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                6. Data Visualizations
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Trend Line Chart */}
                <div className="p-5 bg-slate-50 dark:bg-[#151c22] rounded-xl border border-slate-200 dark:border-[#1e262e]">
                  <h4 className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-4 uppercase">
                    Monthly Performance Trend
                  </h4>
                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={project.chartData.trendData}>
                        <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                        <XAxis dataKey="name" stroke="#94a3b8" fontSize={11} />
                        <YAxis stroke="#94a3b8" fontSize={11} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: '#11161b',
                            borderColor: '#1e262e',
                            borderRadius: '8px',
                            color: '#fff',
                            fontSize: '12px',
                          }}
                        />
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke="#38bdf8"
                          strokeWidth={3}
                          dot={{ fill: '#38bdf8', r: 4 }}
                          activeDot={{ r: 6 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Category Bar Chart */}
                <div className="p-5 bg-slate-50 dark:bg-[#151c22] rounded-xl border border-slate-200 dark:border-[#1e262e]">
                  <h4 className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 mb-4 uppercase">
                    Category Breakdown
                  </h4>
                  <div className="h-64 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={project.chartData.categoryData}>
                        <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                        <XAxis dataKey="name" stroke="#94a3b8" fontSize={10} interval={0} />
                        <YAxis stroke="#94a3b8" fontSize={11} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: '#11161b',
                            borderColor: '#1e262e',
                            borderRadius: '8px',
                            color: '#fff',
                            fontSize: '12px',
                          }}
                        />
                        <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                          {project.chartData.categoryData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color || '#38bdf8'} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: INSIGHTS & RECOMMENDATIONS */}
          {(activeTab === 'overview' || activeTab === 'insights') && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Key Insights */}
              <div className="p-5 bg-slate-50 dark:bg-[#151c22] rounded-xl border border-slate-200 dark:border-[#1e262e]">
                <h3 className="text-xs font-mono font-bold text-sky-600 dark:text-sky-400 mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  7. Key Analytical Insights
                </h3>
                <ul className="space-y-3">
                  {project.keyInsights.map((insight, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      <span className="font-mono font-bold text-sky-400 shrink-0">
                        0{idx + 1}.
                      </span>
                      <span>{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Business Recommendations */}
              <div className="p-5 bg-slate-50 dark:bg-[#151c22] rounded-xl border border-slate-200 dark:border-[#1e262e]">
                <h3 className="text-xs font-mono font-bold text-sky-600 dark:text-sky-400 mb-3 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  8. Strategic Business Recommendations
                </h3>
                <ul className="space-y-3">
                  {project.businessRecommendations.map((rec, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                      <ArrowUpRight className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 dark:bg-[#151c22] border-t border-slate-200 dark:border-[#1e262e] flex items-center justify-between shrink-0">
          <span className="text-[11px] text-slate-400 font-mono">
            Sample metrics for portfolio demonstration.
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-mono font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-[#11161b] border border-slate-200 dark:border-[#1e262e] rounded-lg hover:bg-slate-100 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

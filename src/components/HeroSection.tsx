'use client';

import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowRight, ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column - Headline & Main Intro */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Personal Intro Badge with Full Name */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-sky-50 dark:bg-[#151c22] border border-sky-200/80 dark:border-[#1e262e] mb-4 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                Hi, I&apos;m <span className="font-bold text-slate-900 dark:text-white">{portfolioData.personal.name}</span>
              </span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 font-semibold">
                {portfolioData.personal.roleTitle}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white tracking-tight leading-[1.1] mb-6 font-sans">
              Turning data <br />
              into clear <br />
              business <br />
              decisions.
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed mb-8">
              Data Analyst and Business Analytics professional with a technical background in SQL, Python, Excel, Power BI, and relational databases. I transform raw data into meaningful insights, dashboards, and actionable business recommendations.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('projects');
                  if (element) {
                    const y = element.getBoundingClientRect().top + window.pageYOffset - 90;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold rounded-lg transition-all bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 shadow-sm"
              >
                View my work
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={portfolioData.personal.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 bg-transparent border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-[#161c23] rounded-lg transition-all"
              >
                Download resume
                <ArrowDown className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column - Analytics Overview Card (Image 1 Exact Match) */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-[#0f1418] rounded-xl p-5 sm:p-6 border border-slate-200 dark:border-[#1e262e] shadow-xl backdrop-blur-sm">
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100 dark:border-[#1e262e]">
                <span className="text-xs font-mono uppercase tracking-wider text-sky-600 dark:text-sky-400 font-semibold">
                  ANALYTICS OVERVIEW
                </span>
                <span className="text-xs font-mono text-sky-600 dark:text-sky-400 cursor-pointer hover:underline">
                  Sample data
                </span>
              </div>

              {/* Top 3 KPI Metric Boxes */}
              <div className="grid grid-cols-3 gap-2.5 mb-5">
                {/* Revenue */}
                <div className="p-3 bg-slate-50 dark:bg-[#151c22] rounded-lg border border-slate-100 dark:border-[#1e262e]">
                  <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 mb-1">Revenue</div>
                  <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">₹ 4.82L</div>
                  <div className="text-[10px] font-mono text-sky-600 dark:text-sky-400 mt-1 flex items-center gap-0.5">
                    <span>↗</span> 12.0%
                  </div>
                </div>

                {/* Orders */}
                <div className="p-3 bg-slate-50 dark:bg-[#151c22] rounded-lg border border-slate-100 dark:border-[#1e262e]">
                  <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 mb-1">Orders</div>
                  <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">4,821</div>
                  <div className="text-[10px] font-mono text-sky-600 dark:text-sky-400 mt-1 flex items-center gap-0.5">
                    <span>↗</span> 8.4%
                  </div>
                </div>

                {/* Customers */}
                <div className="p-3 bg-slate-50 dark:bg-[#151c22] rounded-lg border border-slate-100 dark:border-[#1e262e]">
                  <div className="text-[10px] font-mono text-slate-500 dark:text-slate-400 mb-1">Customers</div>
                  <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">2,940</div>
                  <div className="text-[10px] font-mono text-sky-600 dark:text-sky-400 mt-1 flex items-center gap-0.5">
                    <span>↗</span> 6.1%
                  </div>
                </div>
              </div>

              {/* Performance Trend Chart */}
              <div className="p-4 bg-slate-50 dark:bg-[#151c22] rounded-lg border border-slate-100 dark:border-[#1e262e] mb-5">
                <div className="flex items-center justify-between text-xs font-mono mb-4 text-slate-700 dark:text-slate-300">
                  <span>Performance trend</span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400">Jan – Jun</span>
                </div>

                {/* SVG Curve Chart */}
                <div className="relative h-24 w-full">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 300 80">
                    {/* Horizontal Grid lines */}
                    <line x1="0" y1="20" x2="300" y2="20" stroke="currentColor" className="text-slate-200 dark:text-[#25303a]" strokeDasharray="3 3" />
                    <line x1="0" y1="50" x2="300" y2="50" stroke="currentColor" className="text-slate-200 dark:text-[#25303a]" strokeDasharray="3 3" />

                    {/* Smooth Cyan Path */}
                    <path
                      d="M 0,60 C 40,55 60,35 100,45 C 130,52 160,25 200,30 C 230,34 260,10 300,12"
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />

                    {/* End glowing cyan dot */}
                    <circle cx="300" cy="12" r="4" fill="#38bdf8" />
                  </svg>
                </div>
              </div>

              {/* Bullet Features (2 Columns) */}
              <div className="grid grid-cols-2 gap-y-2 text-xs font-mono text-slate-600 dark:text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  <span>Data cleaning</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  <span>SQL analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  <span>BI dashboards</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  <span>Business insights</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

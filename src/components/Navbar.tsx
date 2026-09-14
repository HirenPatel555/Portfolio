'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { portfolioData } from '../data/portfolioData';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return;
    e.preventDefault();
    const targetId = href.replace('#', '');
    if (targetId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('about');
      setMobileMenuOpen(false);
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -90; // offset so header pill doesn't overlap section title
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(targetId);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-3 px-4 sm:px-6 lg:px-8 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 px-4 sm:px-6 py-2.5 flex items-center justify-between border ${
          scrolled
            ? 'bg-white/95 dark:bg-[#11161b]/95 backdrop-blur-md border-slate-200/90 dark:border-[#1e262e] shadow-lg shadow-black/5 dark:shadow-black/30'
            : 'bg-white/80 dark:bg-[#11161b]/80 backdrop-blur-sm border-slate-200/70 dark:border-[#1e262e]/80'
        }`}
      >
        {/* Brand Logo - HP. */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2.5 focus:outline-none rounded-lg group"
          aria-label={`${portfolioData.personal.name} - Home`}
        >
          <span className="font-extrabold text-2xl tracking-tighter text-slate-900 dark:text-white font-sans group-hover:text-sky-500 transition-colors">
            HP<span className="text-sky-400 font-serif">.</span>
          </span>
          <span className="hidden sm:inline-block text-xs sm:text-sm font-semibold tracking-tight text-slate-800 dark:text-slate-200 border-l border-slate-200 dark:border-slate-800 pl-2.5 group-hover:text-sky-500 transition-colors">
            {portfolioData.personal.name}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-xs font-medium tracking-wide transition-colors ${
                  isActive
                    ? 'text-sky-600 dark:text-sky-400 font-semibold'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action Bar */}
        <div className="hidden md:flex items-center gap-4">
          {/* Social Links with Official Icons */}
          <a
            href={portfolioData.personal.linkedInPlaceholder}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-white transition-colors p-1"
            aria-label="LinkedIn"
            title="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href={portfolioData.personal.gitHubPlaceholder}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors p-1"
            aria-label="GitHub"
            title="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          {/* Theme Switcher Toggle Button */}
          <button
            onClick={(e) => toggleTheme(e)}
            className="p-1.5 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#1a2128] rounded-full transition-colors"
            aria-label="Toggle theme"
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>

          {/* Primary View Projects Pill Button */}
          <a
            href="#projects"
            onClick={(e) => handleNavClick(e, '#projects')}
            className="px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-900 shadow-sm"
          >
            View projects
          </a>
        </div>

        {/* Mobile Hamburger Controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={(e) => toggleTheme(e)}
            className="p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700" />
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 bg-white dark:bg-[#11161b] rounded-2xl border border-slate-200 dark:border-[#1e262e] p-4 shadow-xl animate-in slide-in-from-top duration-200 max-w-7xl mx-auto">
          <nav className="flex flex-col space-y-2 mb-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-3 py-2 rounded-lg text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-[#1a2128] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-100 dark:border-[#1e262e] flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <a
                href={portfolioData.personal.linkedInPlaceholder}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-lg"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={portfolioData.personal.gitHubPlaceholder}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-lg"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
            <a
              href="#projects"
              onClick={(e) => handleNavClick(e, '#projects')}
              className="px-4 py-2 text-xs font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-full"
            >
              View projects
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

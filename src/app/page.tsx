import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import BusinessApproachSection from '@/components/BusinessApproachSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col relative selection:bg-sky-500 selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Sections Flow */}
      <div className="flex-1">
        <HeroSection />
        <AboutSection />
        <BusinessApproachSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </div>

      {/* Minimal Footer */}
      <Footer />
    </main>
  );
}

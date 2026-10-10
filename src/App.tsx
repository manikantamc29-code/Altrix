import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeDivider } from './components/MarqueeDivider';
import { ProjectShowcase } from './components/ProjectShowcase';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true; // Default dark for modern portfolio feel
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const handleToggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 flex flex-col font-sans selection:bg-teal-500/20 selection:text-teal-900 dark:selection:text-teal-200">
      {/* Top Fixed Header with Scroll Progress */}
      <Navbar darkMode={darkMode} onToggleTheme={handleToggleTheme} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <MarqueeDivider />
        <ProjectShowcase />
        <AboutSection />
        <SkillsSection />
        <ExperienceTimeline />
        <Testimonials />
        <ContactSection />
      </main>

      {/* Quiet Footer */}
      <Footer />
    </div>
  );
}

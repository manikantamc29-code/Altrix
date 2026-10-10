import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <span className="font-bold text-zinc-900 dark:text-zinc-100">KAI VANCE</span>
          <span className="hidden sm:inline" aria-hidden="true">·</span>
          <span>© 2026 Kai Vance. All rights reserved.</span>
          <span className="hidden sm:inline" aria-hidden="true">·</span>
          <span>Crafted with React, TypeScript & Tailwind CSS</span>
        </div>

        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-5 text-xs text-zinc-500 dark:text-zinc-400">
            <a href="#work" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              Work
            </a>
            <a href="#about" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              Expertise
            </a>
            <a href="#experience" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              Career
            </a>
            <a href="#contact" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              Contact
            </a>
          </nav>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-2 rounded-lg text-zinc-500 hover:text-zinc-950 dark:hover:text-zinc-50 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            aria-label="Scroll back to top of page"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

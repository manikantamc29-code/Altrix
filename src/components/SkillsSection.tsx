import React, { useState } from 'react';
import { Cpu, Search } from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header with Search Input */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 font-medium mb-3">
              <Cpu className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>CORE COMPETENCIES & TOOLING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
              Technical Disciplines & Stack
            </h2>
          </div>

          {/* Quick Technology Search Filter */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter technologies..."
              className="w-full h-10 pl-10 pr-4 text-xs rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-teal-600/30 transition-all"
            />
          </div>
        </div>

        {/* 4 Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILL_GROUPS.map((group) => {
            const filteredSkills = group.skills.filter((s) =>
              s.name.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (searchQuery && filteredSkills.length === 0) return null;

            return (
              <div
                key={group.category}
                className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800/90 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-zinc-950 dark:text-zinc-50">
                    {group.category}
                  </h3>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 mb-6 leading-relaxed">
                    {group.description}
                  </p>

                  <div className="space-y-3">
                    {filteredSkills.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between py-2 border-b border-zinc-100 dark:border-zinc-800/60 last:border-none"
                      >
                        <span className="text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200">
                          {skill.name}
                        </span>

                        <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                          <span className="text-teal-700 dark:text-teal-400 font-sans font-medium text-[11px]">
                            {skill.level}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span className="tabular-nums">{skill.years}</span>
                        </div>
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
};

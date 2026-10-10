import React, { useState } from 'react';
import { ArrowUpRight, Layers } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const ProjectShowcase: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web-apps', label: 'Clinical & Web Apps' },
    { id: 'fintech', label: 'FinTech & Analytics' },
    { id: 'creative-audio', label: 'Spatial & Audio' },
    { id: 'design-systems', label: 'Design Systems' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 font-medium mb-3">
              <Layers className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>CASE STUDIES & PRODUCTION RELEASES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
              Selected Engineering Works
            </h2>
          </div>

          {/* Functional Filter Segmented Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-zinc-200/70 dark:bg-zinc-800/70 rounded-xl max-w-full overflow-x-auto">
            {filters.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  activeFilter === tab.id
                    ? 'bg-white dark:bg-zinc-900 text-zinc-950 dark:text-zinc-50 shadow-xs'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-zinc-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const isFeatured = index === 0;

            return (
              <article
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`group relative rounded-2xl border border-zinc-200/90 dark:border-zinc-800/90 bg-white dark:bg-zinc-900/90 overflow-hidden shadow-xs hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isFeatured && activeFilter === 'all' ? 'md:col-span-2' : 'col-span-1'
                }`}
              >
                {/* Visual Image Container with Hover Zoom */}
                <div
                  className={`relative w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800 border-b border-zinc-200/70 dark:border-zinc-800/70 ${
                    isFeatured && activeFilter === 'all'
                      ? 'aspect-[16/9] md:aspect-[21/9]'
                      : 'aspect-[16/9]'
                  }`}
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />

                  {/* Top-Right Quick Inspection Badge */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-zinc-950/80 backdrop-blur-md text-white text-xs font-medium border border-white/10 shadow-sm">
                      <span>View Architecture</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                  <div>
                    {/* Unboxed Metadata with Typographic Separators */}
                    <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 mb-2 font-medium">
                      <span>{project.categoryLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.client}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.year}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-sm text-zinc-600 dark:text-zinc-300 mt-2 leading-relaxed">
                      {project.summary}
                    </p>
                  </div>

                  {/* Bottom Strip: Metric & Technologies */}
                  <div className="mt-6 pt-5 border-t border-zinc-200/70 dark:border-zinc-800/70 flex flex-wrap items-center justify-between gap-4">
                    <div className="text-xs font-semibold text-teal-800 dark:text-teal-400">
                      {project.metrics}
                    </div>

                    <div className="flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                      <span className="underline-offset-4 group-hover:underline flex items-center gap-1">
                        <span>Case Study Deep Dive</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

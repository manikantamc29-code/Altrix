import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 bg-zinc-100/60 dark:bg-zinc-900/40 border-y border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 font-medium mb-3">
            <Briefcase className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>CAREER TRAJECTORY & IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
            Work Experience & Leadership
          </h2>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-8">
          {EXPERIENCES.map((item) => (
            <article
              key={item.id}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800/90 shadow-xs"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-zinc-950 dark:text-zinc-50">
                    {item.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1 font-medium">
                    <span className="text-teal-700 dark:text-teal-400 font-semibold">{item.company}</span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.period}</span>
                </div>
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-6">
                {item.summary}
              </p>

              {/* Highlights */}
              <div className="space-y-2 mb-6">
                {item.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    <span className="text-teal-600 dark:text-teal-400 mt-1">―</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Technologies Applied */}
              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

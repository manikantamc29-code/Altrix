import React from 'react';
import { Compass, Check } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const principles = [
    {
      index: '01',
      title: 'Aesthetic Nuance & Typographic Precision',
      description:
        'Interfaces are physical tactile objects on a 2D plane. I design with mathematical spatial rhythms, deliberate font scales, and strict contrast ratios that prioritize reading comprehension over decorative noise.',
    },
    {
      index: '02',
      title: 'Computational Budgets & Frame Latency',
      description:
        'A beautiful interface is ruined the second it drops frames. Whether optimizing WebGL shaders, Canvas tick loops, or React DOM re-renders, I hold software to a strict 60 FPS standard with sub-100ms user interaction latency.',
    },
    {
      index: '03',
      title: 'Resilient Design Token Architecture',
      description:
        'Bridging Figma and production code through headless, multi-brand design tokens. I build component libraries that empower dozens of engineers to ship consistent, WCAG AAA accessible software without design bottlenecks.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-zinc-100/60 dark:bg-zinc-900/40 border-y border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Narrative */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 font-medium mb-3">
              <Compass className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
              <span>PHILOSOPHY & APPROACH</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 leading-tight mb-6">
              Engineering interfaces that respect human attention.
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              <p>
                Over the past 8 years, I have worked across the entire digital product spectrum:
                from pixel-level typographic micro-layouts to multi-million user financial pipelines and clinical decision stations.
              </p>
              <p>
                I believe the most enduring software lives at the convergence of relentless engineering rigor and refined human empathy. When an interface feels instantaneous, intuitive, and calm, users can focus entirely on their craft.
              </p>
            </div>

            {/* Quick Fast Facts list */}
            <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800 space-y-2.5 text-xs text-zinc-600 dark:text-zinc-400 font-medium">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                <span>B.S. in Computer Science & Interactive Media</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                <span>Speaker at Design Systems Coalition & WebGL SF</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-teal-600 dark:text-teal-400 shrink-0" />
                <span>Open-source contributor to Radix UI & Three.js ecosystem</span>
              </div>
            </div>
          </div>

          {/* Right Column: Three Principles Cards */}
          <div className="lg:col-span-7 space-y-6">
            {principles.map((item) => (
              <div
                key={item.index}
                className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800/90 shadow-xs"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono font-bold text-teal-700 dark:text-teal-400">
                    {item.index}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-zinc-950 dark:text-zinc-50">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/portfolioData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 font-medium mb-3">
            <Quote className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
            <span>ENDORSEMENTS & IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50">
            What Engineering & Design Leaders Say
          </h2>
        </div>

        {/* 3-in-a-row Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/90 dark:border-zinc-800/90 shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Metric Strip on top */}
                <div className="text-xs font-semibold text-teal-700 dark:text-teal-400 mb-4 pb-3 border-b border-zinc-100 dark:border-zinc-800">
                  {item.metric}
                </div>

                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed italic mb-8">
                  "{item.quote}"
                </p>
              </div>

              {/* Attribution */}
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 font-bold text-xs flex items-center justify-center shrink-0 border border-teal-200 dark:border-teal-800">
                  {item.avatarText}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-950 dark:text-zinc-50 leading-snug">
                    {item.author}
                  </h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {item.role} · {item.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';

export const MarqueeDivider: React.FC = () => {
  const items = [
    'INTERFACE ENGINEERING',
    'HIGH-THROUGHPUT WORKSTATIONS',
    'CREATIVE 3D & SHADERS',
    'MULTI-BRAND DESIGN SYSTEMS',
    'ACCESSIBILITY WCAG AAA',
    'PERFORMANCE BUDGETS',
    'WEBGL TOPOGRAPHY',
    'LATENCY OPTIMIZATION',
  ];

  return (
    <div className="py-5 border-y border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-100/50 dark:bg-zinc-900/40 overflow-hidden select-none" aria-hidden="true">
      <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-xs font-semibold tracking-wider text-zinc-500 dark:text-zinc-400">
        {/* Render twice for continuous loop */}
        {[...items, ...items].map((text, idx) => (
          <span key={idx} className="flex items-center gap-8">
            <span>{text}</span>
            <span className="text-zinc-300 dark:text-zinc-700">·</span>
          </span>
        ))}
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { ArrowDown, Download, Check, Sparkles, MapPin } from 'lucide-react';
import { CREATOR_PROFILE } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [cvDownloaded, setCvDownloaded] = useState(false);

  const handleDownloadCV = () => {
    // Generate and download a formatted resume markdown text file for demonstration
    const resumeContent = `# ${CREATOR_PROFILE.name}
${CREATOR_PROFILE.role} — ${CREATOR_PROFILE.location}
Contact: ${CREATOR_PROFILE.email}

## Summary
${CREATOR_PROFILE.bio}

## Key Metrics
- ${CREATOR_PROFILE.metrics.map(m => `${m.label}: ${m.value}`).join('\n- ')}

## Expertise
- Interface Engineering (TypeScript, React 19, Next.js, Tailwind CSS)
- Systems & Low-Latency Workstations (WebSockets, Canvas API, WASM)
- Creative 3D & Audio (Three.js, WebGL, WebAudio API)
- Design Systems & Accessibility (Figma Variables, WCAG AAA)
`;

    const blob = new Blob([resumeContent], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Kai_Vance_Resume_2026.md`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setCvDownloaded(true);
    setTimeout(() => setCvDownloaded(false), 3000);
  };

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Split-Screen Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Status / Kicker */}
            <div className="flex items-center gap-2.5 text-xs text-zinc-500 dark:text-zinc-400 mb-4 font-medium">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-teal-600 dark:text-teal-400" />
                <span>San Francisco, California</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="text-teal-700 dark:text-teal-400 font-medium">
                {CREATOR_PROFILE.status}
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-zinc-950 dark:text-zinc-50 leading-[1.08] mb-6"
              style={{ textWrap: 'balance' }}
            >
              Crafting precision interfaces, generative systems, and high-performance digital products.
            </h1>

            {/* Lead Copy */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed max-w-2xl mb-8">
              I am a staff design engineer specializing in high-throughput data workstations,
              spatial 3D interactive graphics, and resilient multi-brand design systems.
              Bridging engineering rigor with uncompromising aesthetic nuance.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                href="#work"
                className="h-12 px-6 rounded-xl bg-teal-700 hover:bg-teal-800 dark:bg-teal-500 dark:text-zinc-950 dark:hover:bg-teal-400 text-white font-medium text-sm flex items-center gap-2 transition-all active:scale-[0.98] shadow-sm cursor-pointer"
              >
                <span>Explore Selected Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={handleDownloadCV}
                className="h-12 px-5 rounded-xl border border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-600 bg-white/70 dark:bg-zinc-900/70 text-zinc-800 dark:text-zinc-200 font-medium text-sm flex items-center gap-2 transition-all active:scale-[0.98] cursor-pointer"
              >
                {cvDownloaded ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>CV Downloaded</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    <span>Download Curriculum Vitae</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: High-Fidelity Creator Visual Container */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] aspect-square rounded-2xl overflow-hidden border border-zinc-200/90 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 shadow-sm group">
              <img
                src={CREATOR_PROFILE.portrait}
                alt="Kai Vance, Staff Design Engineer & Creative Technologist"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />

              {/* Minimalist Overlay Label */}
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-zinc-950/75 backdrop-blur-md text-white border border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-wide">Kai Vance</p>
                  <p className="text-[11px] text-zinc-300">Staff Design Engineer</p>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-zinc-300">
                  <Sparkles className="w-3.5 h-3.5 text-teal-400" />
                  <span>Systems & Aesthetics</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Quantitative Rigor Row (Proof Metrics strip below the split) */}
        <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {CREATOR_PROFILE.metrics.map((metric) => (
            <div key={metric.label} className="flex flex-col">
              <span className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 font-mono tabular-nums">
                {metric.value}
              </span>
              <span className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1 font-medium">
                {metric.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

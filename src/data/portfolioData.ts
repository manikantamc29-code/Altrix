import { Project, ExperienceItem, SkillGroup, Testimonial } from '../types/portfolio';

// Generated asset paths
import portraitImage from '../assets/images/hero_creator_portrait_1791604192068.jpg';
import healthCopilotImg from '../assets/images/project_health_copilot_1791604206358.jpg';
import fintechTerminalImg from '../assets/images/project_fintech_terminal_1791604218214.jpg';
import spatialAudioImg from '../assets/images/project_spatial_audio_1791604229230.jpg';
import designSystemImg from '../assets/images/project_design_system_1791604240709.jpg';

export const CREATOR_PROFILE = {
  name: 'Kai Vance',
  role: 'Staff Design Engineer & Creative Technologist',
  location: 'San Francisco, CA',
  status: 'Available for Select Q4 2026 Collaborations',
  email: 'kai.vance@studio-aura.dev',
  bio: 'Bridging the chasm between expressive design and rock-solid systems architecture. Specializing in high-performance WebGL interfaces, real-time data workstations, and enterprise design systems built for scale.',
  portrait: portraitImage,
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://x.com',
    dribbble: 'https://dribbble.com',
  },
  metrics: [
    { label: 'Years of Experience', value: '8+' },
    { label: 'Production Apps Shipped', value: '42' },
    { label: 'Design & Eng Honors', value: '14' },
    { label: 'Daily Active Users Impacted', value: '1.4M+' },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'altrix-health-copilot',
    title: 'Altrix Health Copilot',
    subtitle: 'Clinical AI Diagnostic & Biometric Telemetry Station',
    category: 'web-apps',
    categoryLabel: 'Health & Clinical Intelligence',
    year: '2025–2026',
    client: 'Altrix Medical Technologies',
    metrics: '-42% Clinician Triage Latency · 99.4% Extraction Precision',
    summary: 'A clinical workstation unifying multimodal OCR of physical prescriptions, continuous patient vital streams, and bilingual consultation summaries across 22 languages.',
    challenge: 'Physicians were spending up to 18 minutes deciphering handwritten referral notes and correlating cross-clinic biometric logs, leading to diagnostic fatigue.',
    solution: 'Designed and engineered an ultra-fast web dashboard with real-time WebGL charts, 256-bit row-level encryption vault, and keyboard-first diagnostic hotkeys.',
    technologies: ['TypeScript', 'React 19', 'Tailwind CSS', 'WebGL', 'WebSockets', 'Python OCR'],
    imageUrl: healthCopilotImg,
    liveUrl: 'https://example.com/altrix',
    githubUrl: 'https://github.com/example/altrix-clinical',
    featured: true,
  },
  {
    id: 'alphaflow-trading',
    title: 'AlphaFlow Quantitative Terminal',
    subtitle: 'High-Frequency Order Book & Volatility Topography',
    category: 'fintech',
    categoryLabel: 'FinTech & High-Frequency Analytics',
    year: '2025',
    client: 'AlphaFlow Global Capital',
    metrics: '60 FPS Canvas at 250k Ticks/Sec · Sub-12ms Event Delivery',
    summary: 'A Wall Street-grade algorithmic trading console supporting ultra-dense order books, interactive market depth, and instant risk mitigation triggers.',
    challenge: 'Off-the-shelf financial dashboards crashed or stuttered when processing simultaneous tick spikes during market opening auctions.',
    solution: 'Engineered a bespoke hybrid WebAssembly and HTML5 Canvas pipeline with custom ring-buffer data stores that processes 250,000 live price ticks per second with zero UI frame drops.',
    technologies: ['Rust (WASM)', 'React', 'Canvas API', 'TypeScript', 'WebSockets', 'ChartEngine'],
    imageUrl: fintechTerminalImg,
    liveUrl: 'https://example.com/alphaflow',
    githubUrl: 'https://github.com/example/alphaflow-terminal',
    featured: true,
  },
  {
    id: 'sonicflow-spatial-audio',
    title: 'SonicFlow 3D Acoustic Studio',
    subtitle: 'Interactive Spatial Audio Synthesis & Frequency Modulator',
    category: 'creative-audio',
    categoryLabel: 'Audio Engineering & 3D Spatial',
    year: '2024–2025',
    client: 'SoundLab Creative Labs',
    metrics: '120k Active Sound Designers · 0.2ms Audio Processing Jitter',
    summary: 'Browser-based parametric 3D audio synthesizer rendering real-time acoustic reverberation, frequency landscapes, and multichannel surround positioning.',
    challenge: 'Sound designers lacked accessible in-browser tools to prototype binaural spatial audio for spatial computing headsets and interactive web experiences.',
    solution: 'Built an interactive 3D topography using Three.js custom vertex shaders wired directly into the Web Audio API audio graph nodes with live MIDI controller mapping.',
    technologies: ['Three.js', 'WebAudio API', 'GLSL Shaders', 'React', 'Zustand', 'TypeScript'],
    imageUrl: spatialAudioImg,
    liveUrl: 'https://example.com/sonicflow',
    githubUrl: 'https://github.com/example/sonicflow-engine',
    featured: false,
  },
  {
    id: 'arctic-design-system',
    title: 'Arctic Enterprise Design System',
    subtitle: 'Multi-Brand Token Architecture & Headless Component Library',
    category: 'design-systems',
    categoryLabel: 'Design Engineering & Infrastructure',
    year: '2024',
    client: 'Arctic Cloud Platforms',
    metrics: 'Adopted by 34 Engineering Squads · 100% WCAG AAA Compliance',
    summary: 'An open-source design system powering 18 web applications with zero-runtime CSS tokens, automated contrast audits, and accessible keyboard primitives.',
    challenge: 'A distributed engineering team of 240+ developers struggled with divergent UI patterns, inconsistent dark-mode contrast, and accessibility regressions.',
    solution: 'Created an automated token pipeline synchronized with Figma Variables, headless accessible primitives, and an interactive component playground with instant code export.',
    technologies: ['TypeScript', 'Tailwind CSS', 'Radix Primitives', 'Storybook', 'Figma API', 'Vite'],
    imageUrl: designSystemImg,
    liveUrl: 'https://example.com/arctic-ds',
    githubUrl: 'https://github.com/example/arctic-ui-system',
    featured: false,
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Interface Engineering',
    description: 'Constructing resilient, high-speed client architectures with meticulous attention to typography, micro-interactions, and accessibility standards.',
    skills: [
      { name: 'TypeScript / Modern JavaScript', level: 'Mastery', years: '8 yrs' },
      { name: 'React / Next.js Architecture', level: 'Mastery', years: '7 yrs' },
      { name: 'Tailwind CSS & CSS Grid Math', level: 'Expert', years: '6 yrs' },
      { name: 'Headless UI & Accessible Primitives', level: 'Expert', years: '5 yrs' },
      { name: 'State Machines & Resilient Stores', level: 'Expert', years: '6 yrs' },
    ],
  },
  {
    category: 'Systems & Data Workstations',
    description: 'Handling real-time data pipelines, high-density visualization layouts, and low-latency client-side processing.',
    skills: [
      { name: 'WebSockets & Streaming SSE', level: 'Expert', years: '5 yrs' },
      { name: 'HTML5 Canvas & 2D Context Pipelines', level: 'Expert', years: '5 yrs' },
      { name: 'Rust & WebAssembly Compilation', level: 'Proficient', years: '3 yrs' },
      { name: 'REST & GraphQL Architecture', level: 'Mastery', years: '7 yrs' },
      { name: 'Client Performance & Memory Profiling', level: 'Mastery', years: '6 yrs' },
    ],
  },
  {
    category: 'Creative Tech & 3D Spatial',
    description: 'Immersive graphic programming, physics simulations, and generative soundscapes designed for modern web browsers.',
    skills: [
      { name: 'Three.js & WebGL Topography', level: 'Expert', years: '4 yrs' },
      { name: 'Custom GLSL Shaders & Materials', level: 'Proficient', years: '3 yrs' },
      { name: 'WebAudio API & Spatial Graph Nodes', level: 'Expert', years: '4 yrs' },
      { name: 'Motion Orchestration & Physics', level: 'Mastery', years: '6 yrs' },
      { name: 'Interactive SVG Data Topography', level: 'Expert', years: '6 yrs' },
    ],
  },
  {
    category: 'Design Systems & Foundations',
    description: 'Unifying design tokens, cross-platform component primitives, and automated accessibility verification suites.',
    skills: [
      { name: 'Design Token Architecture & Sync', level: 'Mastery', years: '6 yrs' },
      { name: 'WCAG AAA Accessibility Auditing', level: 'Mastery', years: '5 yrs' },
      { name: 'Figma Component Systems & APIs', level: 'Expert', years: '7 yrs' },
      { name: 'Interactive Documentation & Playgrounds', level: 'Expert', years: '5 yrs' },
      { name: 'Micro-Interaction Spring Mechanics', level: 'Mastery', years: '6 yrs' },
    ],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-1',
    role: 'Staff Design Engineer',
    company: 'Apex Technologies / Lab',
    period: '2023 — Present',
    location: 'San Francisco, CA',
    summary: 'Leading core web experience architecture, performance budgets, and high-frequency data rendering pipelines across the flagship software suite.',
    highlights: [
      'Architected a unified Canvas and WebGL rendering layer that reduced CPU utilization by 38% during high-density real-time telemetry streaming.',
      'Mentored a guild of 14 front-end engineers across 3 timezones, establishing strict code quality, motion budgets, and WCAG AA compliance gates.',
      'Authored the cross-platform design token engine powering 6 enterprise applications with automated color-contrast enforcement.',
    ],
    skills: ['TypeScript', 'WebGL', 'React', 'Architecture', 'Design Systems'],
  },
  {
    id: 'exp-2',
    role: 'Senior UI & Systems Engineer',
    company: 'Veloce Data Systems',
    period: '2021 — 2023',
    location: 'New York, NY (Remote)',
    summary: 'Built mission-critical analytics surfaces and algorithmic decision workspaces for high-growth enterprise customers.',
    highlights: [
      'Engineered an interactive query workspace processing 100,000+ tabular records with virtualized zero-lag scrolling and instant column filtering.',
      'Decreased bundle size by 46% and achieved 99+ Lighthouse performance scores across all tier-1 client landing dashboards.',
      'Partnered closely with product management to ship 8 major product initiatives on schedule with zero critical production regressions.',
    ],
    skills: ['React', 'Next.js', 'WebSockets', 'Canvas API', 'Tailwind CSS'],
  },
  {
    id: 'exp-3',
    role: 'Lead Creative Developer',
    company: 'Hyperion Interactive Studio',
    period: '2018 — 2021',
    location: 'San Francisco, CA',
    summary: 'Crafted bespoke digital experiences, experimental microsites, and 3D product visualizers for global technology and automotive brands.',
    highlights: [
      'Won 3 Awwwards Site of the Day honors and 2 FWA recognitions for pioneering WebGL spatial storytelling and physics interactions.',
      'Spearheaded creative code workshops for internal teams, establishing reusable shader libraries and spring physics boilerplates.',
      'Delivered 22 high-impact commercial web launches with stringent deadline milestones and cross-device performance.',
    ],
    skills: ['Three.js', 'GLSL', 'Animation', 'Creative Direction', 'WebGL'],
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    quote: 'Kai operates at the vanishing intersection where world-class aesthetic taste meets uncompromising systems engineering. When our data workstation choked on live market feeds, Kai re-engineered the rendering loop from first principles—delivering buttery 60 FPS under peak load.',
    author: 'Elena Rostova',
    role: 'VP of Engineering',
    company: 'AlphaFlow Capital',
    metric: '60 FPS under 250k ticks/sec',
    avatarText: 'ER',
  },
  {
    id: 't-2',
    quote: 'Rarely do you find an engineer who will obsess over typographic kerning and sub-pixel alignment while simultaneously writing clean, maintainable TypeScript state machines. Kai revolutionized our design system adoption from day one.',
    author: 'Marcus Vance-Lin',
    role: 'Head of Product Design',
    company: 'Altrix Medical',
    metric: '34 squads onboarded in 90 days',
    avatarText: 'ML',
  },
  {
    id: 't-3',
    quote: 'Working with Kai on our 3D spatial audio suite was a masterclass in modern web capabilities. He translated complex acoustic differential equations into an intuitive, tactile interface that our audio creators adore.',
    author: 'Dr. Soraya Mendez',
    role: 'Chief Audio Architect',
    company: 'SoundLab Creative',
    metric: '120,000+ creators active',
    avatarText: 'SM',
  },
];

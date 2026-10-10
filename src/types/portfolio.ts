export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'web-apps' | 'fintech' | 'creative-audio' | 'design-systems';
  categoryLabel: string;
  year: string;
  client: string;
  metrics: string;
  summary: string;
  challenge: string;
  solution: string;
  technologies: string[];
  imageUrl: string;
  liveUrl: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  skills: string[];
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: {
    name: string;
    level: string;
    years: string;
  }[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  metric: string;
  avatarText: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

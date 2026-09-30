import toolbizhubImg from '../assets/images/project_toolbizhub_1790751986259.jpg';
import modernBusinessImg from '../assets/images/project_modern_business_1790751997948.jpg';
import creativeLandingImg from '../assets/images/project_creative_landing_1790752008806.jpg';
import portfolioShowcaseImg from '../assets/images/project_portfolio_showcase_1790752027440.jpg';

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  image: string;
  liveUrl?: string;
  tags: string[];
  deliverables: string[];
  overview: string;
}

export interface SkillItem {
  name: string;
  category: 'Design' | 'Development' | 'Interactive';
  highlight?: boolean;
}

export const SITE_CONFIG = {
  name: 'Nasim Sarwar',
  title: 'Website Designer',
  initials: 'NS',
  email: 'sarwar.ns326@gmail.com', // Configurable email address
  headline: 'NASIM SARWAR',
  subheadline: 'Website Designer',
  heroBio:
    'I create modern, responsive, and engaging digital experiences that combine thoughtful design, clean interfaces, and modern web technologies.',
  aboutHeading: 'Design with purpose. Built for the web.',
  aboutQuote:
    'I’m Nasim Sarwar, a creative Website Designer focused on building modern, responsive, and engaging digital experiences. I combine clean visual design, thoughtful user experiences, and modern web technologies to create websites that are both beautiful and functional.',
  philosophyHeading: 'Beautiful interfaces should also feel effortless to use.',
  philosophyCopy:
    'I focus on clarity, responsive layouts, thoughtful interactions, and modern visual systems that make digital experiences feel natural.',
  contactHeading: "Let's create something meaningful.",
  contactCopy:
    'Have a website idea, redesign, or digital experience in mind? Let’s talk.',
  availability: 'Available for select projects',
  location: 'Remote · Worldwide',
  copyrightYear: 2026,
};

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Contact', href: '#contact' },
];

export const SKILLS_DATA: SkillItem[] = [
  { name: 'UI/UX Design', category: 'Design', highlight: true },
  { name: 'Web Design', category: 'Design', highlight: true },
  { name: 'Responsive Design', category: 'Design' },
  { name: 'Landing Page Design', category: 'Design' },
  { name: 'Figma', category: 'Design' },
  { name: 'HTML', category: 'Development' },
  { name: 'CSS', category: 'Development' },
  { name: 'JavaScript', category: 'Development' },
  { name: 'WordPress', category: 'Development' },
  { name: 'Website Development', category: 'Development', highlight: true },
  { name: 'Performance Optimization', category: 'Interactive' },
  { name: 'SEO-Friendly Design', category: 'Interactive' },
  { name: '3D & Interactive Web Experiences', category: 'Interactive', highlight: true },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'toolbizhub',
    number: '01',
    title: 'ToolBizHub',
    category: 'Multi-Tools Platform & Web Application',
    description:
      'A modern multi-tools website that brings a collection of useful online tools together in one convenient platform. The project focuses on a clean interface, easy navigation, responsive design, and a smooth user experience across devices.',
    image: toolbizhubImg,
    liveUrl: 'https://toolbizhub.com',
    tags: ['Web Design', 'UI/UX', 'Responsive System', 'Multi-Tool Platform'],
    deliverables: ['UI/UX System', 'Interactive Dashboard', 'Responsive Layouts', 'Design Tokens'],
    overview:
      'ToolBizHub aggregates essential productivity utilities within a unified, high-contrast dark interface. Emphasizing fluid navigation and cross-device consistency, the design reduces cognitive overhead while offering quick access to everyday digital utilities.',
  },
  {
    id: 'modern-business',
    number: '02',
    title: 'Modern Business Website',
    category: 'Corporate Digital Identity & Experience',
    description:
      'A responsive business website designed with a clean and professional visual identity, focusing on clear content structure, strong calls-to-action, and an engaging user experience.',
    image: modernBusinessImg,
    tags: ['Brand Identity', 'Information Architecture', 'Editorial Typography', 'Responsive Design'],
    deliverables: ['Design System', 'Desktop & Mobile Prototypes', 'CTA Architecture', 'Visual Language'],
    overview:
      'Created to communicate credibility and forward-thinking corporate leadership. The layout leverages strategic whitespace, refined typography, and subtle glass accents to guide prospective clients toward meaningful conversion milestones.',
  },
  {
    id: 'creative-landing',
    number: '03',
    title: 'Creative Landing Page',
    category: 'High-Impact Product & Studio Presentation',
    description:
      'A modern landing page concept focused on visual storytelling, strong typography, responsive layouts, and conversion-oriented user experience.',
    image: creativeLandingImg,
    tags: ['Visual Storytelling', 'Landing Page Design', 'Conversion Strategy', 'Dynamic Motion'],
    deliverables: ['Hero Narrative', 'Bento Sectioning', 'Conversion Funnel', 'Figma Production'],
    overview:
      'A study in tension between bold editorial typography and atmospheric liquid glass. Every fold guides the visitor with deliberate pacing, emphasizing emotional resonance alongside clarity of product messaging.',
  },
  {
    id: 'personal-portfolio',
    number: '04',
    title: 'Personal Portfolio Website',
    category: 'Futuristic 3D & Liquid Glass Showcase',
    description:
      'A personal portfolio experience designed to showcase creative work, skills, projects, and professional identity through a modern and interactive interface.',
    image: portfolioShowcaseImg,
    tags: ['3D Web Experiences', 'Liquid Glass System', 'Creative Direction', 'WebGL Interaction'],
    deliverables: ['Procedural 3D Scene', 'Custom Glassmorphism UI', 'Fluid Parallax', 'Full-Stack Portfolio'],
    overview:
      'A celebration of modern web technologies, marrying interactive WebGL procedural sculptures with subtle glass refraction, restrained dark aesthetics, and seamless responsive design.',
  },
];

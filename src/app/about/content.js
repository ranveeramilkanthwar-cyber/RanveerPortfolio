// ─────────────────────────────────────────────
//  ABOUT SECTION — edit everything here
// ─────────────────────────────────────────────

import {
  SiReact, SiNextdotjs, SiJavascript, SiTailwindcss,
  SiFlutter, SiPython, SiCplusplus,
  SiDavinciresolve, SiFigma,
  SiHtml5, SiCss, SiTypescript,
  SiGit, SiDocker, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql,
  SiVercel, SiNetlify, SiPostman,
  SiUnity, SiThreedotjs, SiVite, SiOpenai,
} from "react-icons/si";
import {
  TbBrandAdobeAfterEffect, TbBrandAdobePremier,
  TbBrandAdobePhotoshop, TbBrandAdobeIllustrator,
} from "react-icons/tb";

export const SECTION = {
  label: "About Me",
};

export const HEADING = {
  line1: "I'm",
  line2: "Ranveer.",
  line3: "Developer & Creator.",   // ghost (outline) style
};

// *word* = highlighted/bold in BlurText
export const BIO = [
  "I am a *creative developer* and *UI engineer* from *India*, passionate about building immersive *3D games*, *web applications*, and premium digital experiences. I engineer everything from zero to launch — blending cinematic design with high-performance code.",
  "I specialize in *Three.js 3D browser games*, *React & Next.js* web apps, *Python & AI/ML* projects, *Flutter mobile apps*, and *Unity game development*. I love creating interactive experiences that feel *alive* and *premium*.",
  "Some of my work includes *CyberRun 3D* — a Fall Guys-style physics obstacle course game built with Three.js and Cannon.js, *SpaceDefenders 3D* — a high-intensity space shooter, and *MazeEscapers 3D* — a cinematic 3D maze game.",
  "Beyond games, I build *AI-powered web apps*, *e-commerce websites*, *open source tools*, and *cross-platform mobile apps*. My workflow spans the full stack — from UI/UX design in Figma to backend APIs in Node.js and Express.",
  "I combine *development and design* into one creative workflow, crafting products that are not only technically solid but also visually *striking* and *emotionally engaging*. Every project is built from scratch with attention to performance, SEO, and cross-device compatibility.",
];

export const RESUME_URL = "/resume.pdf";

export const TECH = [
  { name: "React",        icon: SiReact },
  { name: "Next.js",      icon: SiNextdotjs },
  { name: "Three.js",     icon: SiThreedotjs },
  { name: "JavaScript",   icon: SiJavascript },
  { name: "TypeScript",   icon: SiTypescript },
  { name: "HTML5",        icon: SiHtml5 },
  { name: "CSS3",         icon: SiCss },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Vite",         icon: SiVite },
  { name: "Node.js",      icon: SiNodedotjs },
  { name: "Express",      icon: SiExpress },
  { name: "Python",       icon: SiPython },
  { name: "AI / ML",      icon: SiOpenai },
  { name: "Flutter",      icon: SiFlutter },
  { name: "C++",          icon: SiCplusplus },
  { name: "C#",           icon: SiCsharp },
  { name: "Unity",        icon: SiUnity },
  { name: "Git",          icon: SiGit },
  { name: "MongoDB",      icon: SiMongodb },
  { name: "PostgreSQL",   icon: SiPostgresql },
  { name: "Vercel",       icon: SiVercel },
  { name: "Netlify",      icon: SiNetlify },
];

export const CREATIVE = [
  { name: "Figma",        icon: SiFigma },
  { name: "Photoshop",    icon: TbBrandAdobePhotoshop },
  { name: "Illustrator",  icon: TbBrandAdobeIllustrator },
  { name: "After Effects",icon: TbBrandAdobeAfterEffect },
  { name: "Premiere Pro", icon: TbBrandAdobePremier },
  { name: "DaVinci Resolve", icon: SiDavinciresolve },
];

export const EXPERIENCE = [
  { role: "Creative Developer & UI Engineer",    period: "2024 – Present" },
  { role: "3D Game Developer (Three.js/Unity)",  period: "2024 – Present" },
  { role: "AI/ML Engineer & App Developer",      period: "2025 – Present" },
];

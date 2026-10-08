"use client";
import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SECTION } from "@/app/work/content";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES = [
  {
    num: "01",
    label: "Website",
    title: "Web Design & Development",
    description: "High-performance websites, dynamic web apps, and immersive 3D Three.js experiences built for speed.",
    href: "/projects?cat=website",
    gradient: "from-[var(--orange)] to-transparent",
    bg: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    num: "02",
    label: "Games",
    title: "3D Game Development",
    description: "Full physics simulations, custom WebGL shaders, and browser-based cinematic gaming experiences.",
    href: "/projects?cat=website",
    gradient: "from-[var(--cyber-purple)] to-transparent",
    bg: "https://images.unsplash.com/photo-1614729939124-03290b56c9ce?q=80&w=2000&auto=format&fit=crop"
  },
  {
    num: "03",
    label: "AI / ML",
    title: "Artificial Intelligence",
    description: "Python-powered AI automation, intelligent chatbots, and machine learning solutions.",
    href: "/projects?cat=website",
    gradient: "from-cyan-400 to-transparent",
    bg: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop"
  },
  {
    num: "04",
    label: "Visuals",
    title: "Motion & UI/UX",
    description: "Brand identities, interactive Figma prototypes, and cinematic video editing.",
    href: "/projects?cat=design",
    gradient: "from-pink-500 to-transparent",
    bg: "https://images.unsplash.com/photo-1557682260-96773eb01377?q=80&w=2000&auto=format&fit=crop"
  }
];

export default function Work() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".work-card").forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none none" },
          y: 60,
          opacity: 0,
          rotateX: 10,
          duration: 1,
          ease: "power3.out",
          delay: i * 0.1,
        });
      });

      gsap.to(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: "bottom 80%",
          end: "bottom 20%",
          scrub: 1,
        },
        opacity: 0,
        y: -50,
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      id="work-section"
      className="relative w-full min-h-screen px-6 md:px-20 pt-64 pb-72 flex flex-col justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,229,255,0.02)] to-transparent pointer-events-none" />
      
      <div className="max-w-7xl w-full mx-auto relative z-10">
        {/* Header */}
        <div className="mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="font-sans text-[10px] text-[var(--orange)] tracking-[0.5em] uppercase mb-4 font-bold drop-shadow-[0_0_10px_rgba(0,229,255,0.8)]">
              {SECTION.label}
            </p>
            <h2
              className="font-sans font-black tracking-tighter text-white leading-none"
              style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
            >
              Expertise &<br />Capabilities.
            </h2>
          </div>
          
          <Link
            href="/projects"
            className="group hidden md:inline-flex items-center gap-4 px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/40 transition-all duration-300"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/80 group-hover:text-white">View Full Archive</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 12L12 2M12 2H4M12 2v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* 3D Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CATEGORIES.map((cat, i) => (
            <Link
              key={cat.num}
              href={cat.href}
              className="work-card relative group block h-[400px] rounded-3xl overflow-hidden cursor-none"
              style={{ perspective: "1000px" }}
            >
              {/* Background Image & Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${cat.bg})`, filter: "grayscale(100%) contrast(1.2)" }}
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors duration-500" />
              <div className={`absolute inset-0 bg-gradient-to-t ${cat.gradient} opacity-40 mix-blend-screen group-hover:opacity-80 transition-opacity duration-700`} />
              
              {/* Animated Border */}
              <div className="absolute inset-0 border border-white/10 rounded-3xl group-hover:border-[var(--orange)]/50 transition-colors duration-500 z-20" />

              {/* Glass Content Box */}
              <motion.div 
                className="absolute inset-x-4 bottom-4 p-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/10 translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-white/40 group-hover:text-[var(--orange)] tracking-widest transition-colors duration-300">
                    {cat.num}
                  </span>
                  <span className="px-3 py-1 rounded-full border border-white/10 text-[9px] uppercase tracking-widest text-white/50 group-hover:border-white/30 group-hover:text-white transition-all">
                    {cat.label}
                  </span>
                </div>
                
                <h3 className="font-sans text-2xl md:text-3xl font-black text-white tracking-tight mb-3">
                  {cat.title}
                </h3>
                
                <p className="font-sans text-sm text-white/50 group-hover:text-white/90 font-light leading-relaxed max-w-sm transition-colors duration-300 line-clamp-2">
                  {cat.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[var(--orange)] opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 delay-100">
                  Explore category
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Mobile View All CTA */}
        <div className="mt-12 flex justify-center md:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[var(--orange)] bg-[var(--orange)]/10 text-[var(--orange)] text-[10px] font-bold uppercase tracking-widest"
          >
            View Full Archive
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 10L10 2M10 2H4M10 2v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

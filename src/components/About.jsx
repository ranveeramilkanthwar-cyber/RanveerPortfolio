"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import BlurText from "./BlurText";
import { SECTION, HEADING, BIO, RESUME_URL, TECH, CREATIVE, EXPERIENCE } from "@/app/about/content";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

export default function About({ standalone = false }) {
  const ref = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".about-label", { y: 20, opacity: 0, duration: 0.5, ease: "power3.out" })
        .from(".about-h", { y: 40, opacity: 0, duration: 0.6, ease: "power4.out" }, "-=0.3")
        .from(".about-p", { y: 30, opacity: 0, duration: 0.5, stagger: 0.1, ease: "power3.out" }, "-=0.4")
        .from(".about-card", { y: 30, opacity: 0, scale: 0.95, duration: 0.6, stagger: 0.1, ease: "power3.out" }, "-=0.2");

      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        y: 80,
      });

      gsap.to(ref.current, {
        scrollTrigger: {
          trigger: ref.current,
          start: "bottom 70%",
          end: "bottom 10%",
          scrub: 1.2,
        },
        opacity: 0,
        y: -40,
      });

      setTimeout(() => ScrollTrigger.refresh(), 300);
    }, ref);
    return () => ctx.revert();
  }, [standalone]);

  return (
    <section
      id="about-section"
      ref={ref}
      className={`relative w-full min-h-screen px-6 md:px-20 py-32 overflow-hidden ${standalone ? "" : "z-20"}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--orange)]/5 via-transparent to-[var(--cyber-purple)]/5 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">

        {/* Left Bio */}
        <div className="w-full lg:w-[55%] flex flex-col items-start">
          <p className="about-label text-[10px] text-[var(--orange)] tracking-[0.5em] uppercase mb-6 font-bold drop-shadow-[0_0_10px_rgba(0,229,255,0.8)]">
            {SECTION.label}
          </p>

          <h2
            className="about-h font-black tracking-tighter leading-[0.88] mb-10"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
          >
            <span className="block text-white">{HEADING.line1}</span>
            <span className="block text-white">{HEADING.line2}</span>
            <span className="block ghost text-transparent" style={{ WebkitTextStroke: "1px var(--orange)" }}>{HEADING.line3}</span>
          </h2>

          <div className="flex flex-col gap-5 border-l-2 border-white/10 pl-6 mb-10">
            {BIO.map((text, i) => (
              <BlurText
                key={i}
                text={text}
                delay={20}
                animateBy="words"
                direction="bottom"
                stepDuration={0.15}
                className="about-p text-sm md:text-base text-white/60 font-light leading-relaxed max-w-lg"
              />
            ))}
          </div>

          <motion.a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="about-p inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold uppercase tracking-widest hover:bg-[var(--orange)] hover:text-black hover:border-[var(--orange)] transition-all duration-300 group shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Full Resume
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </motion.a>
        </div>

        {/* Right Dynamic Glass Cards */}
        <div className="w-full lg:w-[45%] flex flex-col gap-6">
          
          {/* Aesthetic Floating Image */}
          <div className="about-card relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,229,255,0.15)] group cursor-none">
            <div className="absolute inset-0 bg-[var(--orange)] mix-blend-overlay opacity-20 z-10 group-hover:opacity-0 transition-opacity duration-700" />
            <Image
              ref={imageRef}
              src="/photo/about me.webp"
              alt="Ranveer"
              fill
              className="object-cover object-center scale-110 transition-transform duration-[2s] group-hover:scale-100 filter grayscale group-hover:grayscale-0"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 rounded-3xl border border-white/10 z-20 pointer-events-none" />
          </div>

          {/* Interactive Stack Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="about-card p-6 rounded-3xl bg-black/40 border border-white/10 backdrop-blur-xl hover:border-[var(--orange)]/50 transition-colors duration-500">
              <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-4 font-bold">Tech Stack</p>
              <div className="flex gap-2 flex-wrap">
                {TECH.slice(0, 10).map((s) => (
                  <span key={s.name} className="group px-3 py-1.5 flex items-center gap-1.5 border border-white/5 bg-white/5 rounded-full text-[9px] text-white/60 tracking-widest uppercase transition-all hover:bg-[var(--orange)] hover:text-black">
                    <s.icon className="w-2.5 h-2.5 opacity-70 group-hover:opacity-100" />
                    {s.name}
                  </span>
                ))}
                <span className="px-3 py-1.5 text-[9px] text-white/30 uppercase tracking-widest">+ {TECH.length - 10} MORE</span>
              </div>
            </div>

            <div className="about-card flex flex-col gap-4">
              <div className="p-6 rounded-3xl bg-black/40 border border-white/10 backdrop-blur-xl hover:border-[var(--cyber-purple)]/50 transition-colors duration-500 flex-1">
                <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-4 font-bold">Creative</p>
                <div className="flex gap-2 flex-wrap">
                  {CREATIVE.slice(0, 4).map((s) => (
                    <span key={s.name} className="group px-3 py-1.5 flex items-center gap-1.5 border border-white/5 bg-white/5 rounded-full text-[9px] text-white/60 tracking-widest uppercase transition-all hover:bg-[var(--cyber-purple)] hover:text-black">
                      <s.icon className="w-2.5 h-2.5 opacity-70 group-hover:opacity-100" />
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-6 rounded-3xl bg-black/40 border border-white/10 backdrop-blur-xl hover:border-white/30 transition-colors duration-500 flex-1">
                 <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-4 font-bold">Experience</p>
                 <div className="flex flex-col gap-3">
                   {EXPERIENCE.slice(0, 2).map((exp, i) => (
                     <div key={i}>
                       <p className="text-white/90 text-[11px] font-bold tracking-wide">{exp.role}</p>
                       <p className="text-[var(--orange)] text-[8px] tracking-widest uppercase mt-0.5">{exp.period}</p>
                     </div>
                   ))}
                 </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, User } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import { HeroScene } from './HeroScene';
import portraitImg from '../assets/images/nasim_sarwar_portrait_1790751974096.jpg';

interface HeroProps {
  scrollY: number;
}

export const Hero: React.FC<HeroProps> = ({ scrollY }) => {
  const [imgError, setImgError] = useState(false);
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Parallax calculations for the portrait card
  const parallaxOffset = Math.min(scrollY * 0.18, 120);
  const portraitScale = Math.max(1 - (scrollY / 1200) * 0.15, 0.9);

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* 3D WebGL / Canvas Centerpiece Layer */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
        <div className="w-full max-w-5xl h-[85vh] opacity-90">
          <HeroScene scrollY={scrollY} />
        </div>
      </div>

      {/* Atmospheric radial glow highlights */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-1/4 w-[450px] h-[450px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none -z-10"
      />

      <div className="relative z-10 max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left Column: Hero Content & Headlines */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Micro-label: Status */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-xs font-medium uppercase tracking-wider text-zinc-300">
              {SITE_CONFIG.availability}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-2 font-display">
            {SITE_CONFIG.headline}
          </h1>

          {/* Secondary Headline */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-cyan-300 tracking-wide mb-6 font-display flex items-center gap-2">
            <span>{SITE_CONFIG.subheadline}</span>
            <span className="w-8 h-[1px] bg-cyan-400/50 hidden sm:inline-block" />
          </h2>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg text-zinc-300 max-w-xl leading-relaxed mb-8 font-normal font-sans text-pretty">
            {SITE_CONFIG.heroBio}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => scrollTo('#work')}
              className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-black bg-gradient-to-r from-cyan-200 via-white to-sky-100 hover:from-white hover:to-cyan-200 rounded-xl shadow-[0_0_30px_rgba(110,231,249,0.3)] hover:shadow-[0_0_40px_rgba(110,231,249,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <span>View My Work</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => scrollTo('#contact')}
              className="w-full sm:w-auto px-7 py-3.5 text-sm font-medium text-white bg-white/[0.04] hover:bg-white/[0.09] border border-white/15 hover:border-cyan-400/40 rounded-xl backdrop-blur-xl transition-all duration-200 flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-4 h-4 text-cyan-300" />
            </button>
          </div>

          {/* Floating glass micro-detail tags */}
          <div className="mt-10 pt-6 border-t border-white/[0.08] w-full flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs text-zinc-400">
            <span className="text-zinc-500 text-[11px] uppercase tracking-wider font-medium mr-1">
              Disciplines
            </span>
            <span className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] backdrop-blur-md text-zinc-300">
              Website Designer
            </span>
            <span className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] backdrop-blur-md text-zinc-300">
              UI / UX
            </span>
            <span className="px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] backdrop-blur-md text-zinc-300">
              3D Web
            </span>
          </div>
        </div>

        {/* Right Column: Nasim's Portrait in a Premium Liquid Glass Frame */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div
            className="relative group w-full max-w-[340px] sm:max-w-[380px] transition-transform duration-300 ease-out animate-float-slow"
            style={{
              transform: `translateY(${parallaxOffset}px) scale(${portraitScale})`,
            }}
          >
            {/* Outer Aura Glow */}
            <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-tr from-cyan-500/25 via-blue-500/10 to-violet-500/30 blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none" />

            {/* Glass Container */}
            <div className="relative rounded-[2rem] p-3 sm:p-4 liquid-glass-interactive overflow-hidden">
              {/* Internal Refraction Highlight */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.12] via-transparent to-black/40 pointer-events-none" />

              {/* Portrait Image Frame */}
              <div className="relative rounded-[1.6rem] overflow-hidden aspect-[3/4] bg-[#0c0e14] border border-white/10 shadow-inner flex items-center justify-center">
                {!imgError ? (
                  <img
                    src={portraitImg}
                    alt="Nasim Sarwar — Website Designer portrait"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="eager"
                    referrerPolicy="no-referrer"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full p-8 flex flex-col items-center justify-center text-center bg-gradient-to-b from-cyan-950/40 to-zinc-950">
                    <User className="w-16 h-16 text-cyan-400/60 mb-4" />
                    <p className="font-display font-bold text-lg text-white">Nasim Sarwar</p>
                    <p className="text-xs text-cyan-300">Website Designer</p>
                  </div>
                )}

                {/* Subtle bottom gradient scrim to ground portrait */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#050608]/90 via-[#050608]/30 to-transparent pointer-events-none" />

                {/* Floating micro glass label on portrait */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#090b10]/75 backdrop-blur-md border border-white/15 flex items-center justify-between shadow-lg">
                  <div>
                    <p className="text-xs font-semibold text-white font-display">Nasim Sarwar</p>
                    <p className="text-[11px] text-cyan-300">Website Designer</p>
                  </div>
                  <div className="w-7 h-7 rounded-lg bg-white/[0.08] border border-white/10 flex items-center justify-center text-cyan-200">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[11px] tracking-widest uppercase text-zinc-400">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-white/20 p-1 flex justify-center">
          <div className="w-1 h-2 bg-cyan-400 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

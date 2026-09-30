import React from 'react';
import { Layers, Palette, Sparkles, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';
import portraitImg from '../assets/images/nasim_sarwar_portrait_1790751974096.jpg';

interface AboutProps {
  scrollY: number;
}

export const About: React.FC<AboutProps> = ({ scrollY }) => {
  return (
    <section
      id="about"
      className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10"
      />

      {/* Editorial Section Header */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs uppercase font-mono tracking-widest text-cyan-400">
            01 / Narrative
          </span>
          <span className="w-12 h-[1px] bg-cyan-500/30" />
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-3xl font-display leading-[1.15] text-balance">
          {SITE_CONFIG.aboutHeading}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        {/* Left Column: Secondary Portrait Crop with Editorial Liquid Glass Frame */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="relative group">
            {/* Subtle glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-violet-500/20 to-blue-500/20 blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />

            <div className="relative rounded-3xl p-3 liquid-glass overflow-hidden">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-zinc-900 border border-white/10">
                {/* Secondary portrait crop: centered studio close-up */}
                <img
                  src={portraitImg}
                  alt="Nasim Sarwar Website Designer at work"
                  className="w-full h-full object-cover object-center grayscale-[20%] contrast-[1.05] group-hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                
                {/* Glass reflection gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-transparent to-white/[0.04] pointer-events-none" />

                {/* Editorial quote tag */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#08090C]/85 backdrop-blur-xl border border-white/10 shadow-lg">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                    <span className="text-xs font-semibold text-white tracking-wide">Design Intention</span>
                  </div>
                  <p className="text-[12px] text-zinc-300 leading-normal">
                    Crafting responsive, high-performance websites where form elevates function.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio inside Liquid Glass Editorial Panel */}
        <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
          <div className="p-8 sm:p-10 rounded-3xl liquid-glass border border-white/10 shadow-2xl relative overflow-hidden">
            {/* Internal ambient corner highlight */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

            {/* Exact Required Quotation Content */}
            <blockquote className="text-lg sm:text-xl md:text-2xl text-zinc-100 font-light leading-relaxed font-sans mb-8">
              "{SITE_CONFIG.aboutQuote}"
            </blockquote>

            <div className="h-[1px] w-full bg-gradient-to-r from-white/15 via-white/5 to-transparent mb-8" />

            {/* Design Principles / Capabilities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300 mb-3">
                  <Palette className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1 font-display">Clean Visual Systems</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Strategic typography, balanced whitespace, and purposeful contrast that honor content hierarchy.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 transition-colors">
                <div className="w-9 h-9 rounded-xl bg-violet-500/10 border border-violet-400/20 flex items-center justify-center text-violet-300 mb-3">
                  <Layers className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1 font-display">Responsive Architecture</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Engineered seamlessly for desktop, tablet, and mobile with fluid proportions and fast loading.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

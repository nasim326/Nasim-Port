import React from 'react';
import { Compass, Eye, Zap } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

export const Philosophy: React.FC = () => {
  return (
    <section
      id="philosophy"
      className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden"
    >
      {/* Background soft ambient halo */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 rounded-full blur-[160px] pointer-events-none -z-10"
      />

      <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 liquid-glass border border-white/10 shadow-2xl overflow-hidden">
        {/* Subtle glass grid lines */}
        <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-cyan-300 uppercase tracking-widest mb-8">
            <span>04 / Philosophy</span>
          </div>

          {/* Large Typographic Composition */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-display mb-8 leading-[1.12] text-balance">
            {SITE_CONFIG.philosophyHeading}
          </h2>

          <p className="text-base sm:text-xl text-zinc-300 leading-relaxed font-sans max-w-2xl mx-auto mb-14 text-pretty">
            {SITE_CONFIG.philosophyCopy}
          </p>

          {/* 3 Core Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md">
              <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300 mb-4">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2 font-display">
                Clarity of Purpose
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Interfaces stripped of unnecessary noise, putting the focus entirely on what matters to the visitor.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md">
              <div className="w-10 h-10 rounded-xl bg-blue-400/10 border border-blue-400/20 flex items-center justify-center text-blue-300 mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2 font-display">
                Responsive Harmony
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Adaptive layouts that feel intentionally tailored whether viewed on an ultra-wide desktop or mobile screen.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-md">
              <div className="w-10 h-10 rounded-xl bg-violet-400/10 border border-violet-400/20 flex items-center justify-center text-violet-300 mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2 font-display">
                Tactile Interactions
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Subtle liquid glass reflections, restrained physics, and zero-latency micro-feedback that make the web feel alive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { SKILLS_DATA, SkillItem } from '../config/site';
import { Code2, Figma, Globe, Layout, Sparkles, Smartphone, Gauge, Search, Box } from 'lucide-react';

const getSkillIcon = (name: string) => {
  switch (name) {
    case 'UI/UX Design':
      return Layout;
    case 'Web Design':
      return Globe;
    case 'Responsive Design':
      return Smartphone;
    case 'Landing Page Design':
      return Layout;
    case 'Figma':
      return Figma;
    case 'HTML':
    case 'CSS':
    case 'JavaScript':
    case 'WordPress':
    case 'Website Development':
      return Code2;
    case 'Performance Optimization':
      return Gauge;
    case 'SEO-Friendly Design':
      return Search;
    case '3D & Interactive Web Experiences':
      return Box;
    default:
      return Sparkles;
  }
};

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Design' | 'Development' | 'Interactive'>('All');

  const filteredSkills =
    activeTab === 'All'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((skill) => skill.category === activeTab);

  return (
    <section
      id="skills"
      className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden"
    >
      {/* Background soft glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none -z-10"
      />

      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs uppercase font-mono tracking-widest text-cyan-400">
              02 / Capabilities
            </span>
            <span className="w-12 h-[1px] bg-cyan-500/30" />
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display">
            What I work with
          </h2>
        </div>

        {/* Category Filter Controls */}
        <div className="flex items-center gap-1.5 p-1 bg-white/[0.03] border border-white/10 rounded-xl backdrop-blur-xl">
          {(['All', 'Design', 'Development', 'Interactive'] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                activeTab === tab
                  ? 'bg-white/15 text-white shadow-sm border border-white/15'
                  : 'text-zinc-400 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Interactive Glass Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.map((skill: SkillItem) => {
          const Icon = getSkillIcon(skill.name);
          return (
            <div
              key={skill.name}
              className={`group relative p-5 rounded-2xl liquid-glass border transition-all duration-300 hover:-translate-y-1 ${
                skill.highlight
                  ? 'border-white/15 hover:border-cyan-400/40 bg-white/[0.04]'
                  : 'border-white/[0.08] hover:border-white/20 bg-white/[0.02]'
              }`}
            >
              {/* Subtle hover backlight glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-violet-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      skill.highlight
                        ? 'bg-cyan-500/10 border border-cyan-400/25 text-cyan-300 group-hover:bg-cyan-500/20'
                        : 'bg-white/[0.05] border border-white/10 text-zinc-300 group-hover:text-white group-hover:bg-white/10'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight group-hover:text-cyan-200 transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-zinc-400 font-mono tracking-wide mt-0.5">
                      {skill.category}
                    </p>
                  </div>
                </div>

                {skill.highlight && (
                  <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

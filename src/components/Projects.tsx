import React, { useState } from 'react';
import { PROJECTS_DATA, ProjectItem } from '../config/site';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section
      id="work"
      className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none -z-10"
      />

      {/* Section Header */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-xs uppercase font-mono tracking-widest text-cyan-400">
            03 / Portfolio
          </span>
          <span className="w-12 h-[1px] bg-cyan-500/30" />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display">
            Selected Work
          </h2>
          <p className="text-sm text-zinc-400 max-w-sm">
            Curated visual case studies exploring clean interfaces, thoughtful user experiences, and responsive web systems.
          </p>
        </div>
      </div>

      {/* 2x2 Grid of Mini Visual Case Studies */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={(proj) => setSelectedProject(proj)}
          />
        ))}
      </div>

      {/* In-Depth Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

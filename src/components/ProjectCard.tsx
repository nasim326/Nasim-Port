import React, { useRef, useState } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { ProjectItem } from '../config/site';

interface ProjectCardProps {
  project: ProjectItem;
  onSelect: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -6; // max 6 deg tilt
    const rY = ((x - centerX) / centerX) * 6;

    setRotateX(rX);
    setRotateY(rY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(project)}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
      }}
      className="group relative cursor-pointer rounded-3xl p-6 sm:p-8 liquid-glass border border-white/10 hover:border-cyan-400/30 transition-all duration-300 shadow-2xl overflow-hidden flex flex-col justify-between"
    >
      {/* Dynamic interactive glare highlight */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 350px at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.08), transparent 70%)`,
        }}
      />

      {/* Subtle Cyan/Violet Ambient Corner Glow */}
      <div className="absolute -top-20 -right-20 w-44 h-44 bg-cyan-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Top Bar: Editorial Index Number & Category */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <span className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-white/40 group-hover:text-cyan-300 transition-colors">
          {project.number}
        </span>
        <div className="flex items-center gap-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-400/20 text-cyan-300 text-xs font-medium transition-colors"
              title="Open external live link"
            >
              <span>toolbizHub.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
          <span className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-zinc-300 group-hover:text-white group-hover:bg-cyan-400 group-hover:text-black group-hover:scale-105 transition-all">
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </div>
      </div>

      {/* Project Mockup Visual Container */}
      <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-zinc-950 border border-white/10 mb-6 shadow-inner flex items-center justify-center">
        {!imgError ? (
          <img
            src={project.image}
            alt={`${project.title} presentation preview`}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full p-6 flex flex-col items-center justify-center text-center bg-gradient-to-br from-cyan-950/30 to-violet-950/30">
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-1">{project.category}</span>
            <span className="font-display font-bold text-lg text-white">{project.title}</span>
          </div>
        )}
        {/* Subtle glass overlay reflection */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050608]/80 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Project Content */}
      <div className="flex flex-col">
        <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-1.5">
          {project.category}
        </p>
        <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-3 group-hover:text-cyan-200 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-zinc-300 leading-relaxed line-clamp-3 mb-5 font-normal">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 text-xs text-zinc-400">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] group-hover:border-white/10 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

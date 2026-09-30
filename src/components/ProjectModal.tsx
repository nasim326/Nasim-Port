import React, { useEffect } from 'react';
import { X, ExternalLink, Check, Sparkles } from 'lucide-react';
import { ProjectItem } from '../config/site';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl liquid-glass border border-white/15 bg-[#090b10]/95 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] p-6 sm:p-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-zinc-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Metadata */}
        <div className="flex items-center gap-3 text-xs font-mono text-cyan-400 mb-2">
          <span>PROJECT {project.number}</span>
          <span>·</span>
          <span>{project.category}</span>
        </div>

        <h3
          id="modal-project-title"
          className="text-2xl sm:text-4xl font-bold text-white font-display mb-4"
        >
          {project.title}
        </h3>

        {/* Project Visual Showcase */}
        <div className="relative rounded-2xl overflow-hidden aspect-[16/9] mb-8 border border-white/10 shadow-2xl bg-zinc-900">
          <img
            src={project.image}
            alt={`${project.title} detailed visual presentation`}
            className="w-full h-full object-cover"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#090b10]/80 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Description & Overview */}
        <div className="space-y-6 text-zinc-300">
          <div>
            <h4 className="text-xs uppercase font-mono tracking-widest text-zinc-400 mb-2">
              Case Study Overview
            </h4>
            <p className="text-base sm:text-lg leading-relaxed text-zinc-200">
              {project.description}
            </p>
          </div>

          <p className="text-sm text-zinc-300 leading-relaxed">
            {project.overview}
          </p>

          {/* Deliverables List */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-widest text-zinc-400 mb-3">
              Key Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs sm:text-sm text-zinc-300"
                >
                  <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div>
            <h4 className="text-xs uppercase font-mono tracking-widest text-zinc-400 mb-2">
              Technology & Craft
            </h4>
            <div className="flex flex-wrap gap-2 text-xs text-zinc-300">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Live Action Link if Available */}
          {project.liveUrl && (
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-zinc-400">Live Web Address: {project.liveUrl}</span>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-black bg-cyan-300 hover:bg-cyan-200 rounded-xl transition-colors shadow-lg"
              >
                <span>Visit Live Platform</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

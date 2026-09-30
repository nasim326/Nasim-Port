import React from 'react';

export const BackgroundAura: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-20 overflow-hidden"
    >
      {/* Deep Obsidian Canvas */}
      <div className="absolute inset-0 bg-[#050608]" />

      {/* Subtle Grain Texture Overlay */}
      <div className="absolute inset-0 bg-noise opacity-40 mix-blend-screen" />

      {/* Atmospheric Light Blob 1: Cyan-Blue glow top-left */}
      <div
        className="absolute -top-[15%] -left-[10%] w-[55vw] h-[55vw] max-w-[850px] max-h-[850px] rounded-full bg-gradient-to-br from-cyan-600/12 via-blue-600/8 to-transparent blur-[140px] animate-float-slow"
        style={{ animationDuration: '22s' }}
      />

      {/* Atmospheric Light Blob 2: Violet-Purple glow center-right */}
      <div
        className="absolute top-[35%] -right-[15%] w-[50vw] h-[50vw] max-w-[750px] max-h-[750px] rounded-full bg-gradient-to-bl from-purple-600/10 via-indigo-600/8 to-transparent blur-[160px] animate-float-slow"
        style={{ animationDuration: '28s', animationDirection: 'reverse' }}
      />

      {/* Atmospheric Light Blob 3: Deep Sky-Blue glow bottom-left */}
      <div
        className="absolute bottom-[5%] left-[10%] w-[45vw] h-[45vw] max-w-[700px] max-h-[700px] rounded-full bg-gradient-to-tr from-sky-600/10 via-cyan-500/6 to-transparent blur-[150px] animate-float-slow"
        style={{ animationDuration: '25s' }}
      />
    </div>
  );
};

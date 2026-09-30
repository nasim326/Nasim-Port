import React from 'react';
import { ArrowUp } from 'lucide-react';
import { NAV_LINKS, SITE_CONFIG } from '../config/site';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#050608]/90 backdrop-blur-xl py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand Lockup */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-6 h-6 rounded-md bg-white/[0.08] border border-white/10 flex items-center justify-center font-display font-bold text-xs text-cyan-300">
              {SITE_CONFIG.initials}
            </span>
            <span className="font-display font-bold text-lg text-white">
              {SITE_CONFIG.name}
            </span>
          </div>
          <p className="text-xs text-zinc-400 font-normal">
            {SITE_CONFIG.title}
          </p>
        </div>

        {/* Navigation Links */}
        <nav
          aria-label="Footer Navigation"
          className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-zinc-400"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Back to Top & Copyright */}
        <div className="flex items-center gap-4">
          <span className="text-xs text-zinc-500 font-mono">
            © {SITE_CONFIG.copyrightYear} {SITE_CONFIG.name}
          </span>
          <button
            type="button"
            onClick={scrollToTop}
            className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Scroll back to top"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

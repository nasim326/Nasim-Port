import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS, SITE_CONFIG } from '../config/site';

interface NavbarProps {
  scrollY: number;
}

export const Navbar: React.FC<NavbarProps> = ({ scrollY }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isScrolled = scrollY > 20;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 py-4 ${
        isScrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300 ${
            isScrolled
              ? 'liquid-glass-nav border-white/10 shadow-2xl backdrop-blur-2xl'
              : 'bg-white/[0.02] border border-white/[0.05] backdrop-blur-md'
          }`}
        >
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg py-1 px-1.5"
            aria-label="Nasim Sarwar - Home"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-white/15 flex items-center justify-center font-display font-bold text-sm tracking-wider text-cyan-200 group-hover:border-cyan-400/40 group-hover:scale-105 transition-all">
              NS
            </span>
            <span className="font-display font-medium text-sm sm:text-base tracking-tight text-white group-hover:text-cyan-200 transition-colors">
              Nasim Sarwar
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-400"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="relative py-1 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Primary Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-white/[0.07] hover:bg-white/[0.14] border border-white/15 hover:border-cyan-400/50 rounded-xl backdrop-blur-lg shadow-sm transition-all duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-white/[0.05] border border-white/10 text-zinc-300 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-5 rounded-2xl liquid-glass border border-white/10 backdrop-blur-2xl shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="px-3 py-2 text-base font-medium text-zinc-300 hover:text-cyan-200 hover:bg-white/[0.04] rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, '#contact')}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-400/30 rounded-xl"
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight className="w-4 h-4 text-cyan-300" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

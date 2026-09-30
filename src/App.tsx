import React, { useEffect, useState } from 'react';
import { BackgroundAura } from './components/BackgroundAura';
import { Cursor } from './components/Cursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Philosophy } from './components/Philosophy';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.pageYOffset);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050608] text-[#F5F7FA] selection:bg-cyan-500/25 selection:text-cyan-200">
      {/* Custom Desktop Cursor */}
      <Cursor />

      {/* Atmospheric Liquid Glass Animated Background */}
      <BackgroundAura />

      {/* Floating Liquid Glass Header */}
      <Navbar scrollY={scrollY} />

      {/* Main Content Flow */}
      <main id="main-content" className="relative z-10">
        <Hero scrollY={scrollY} />
        <About scrollY={scrollY} />
        <Skills />
        <Projects />
        <Philosophy />
        <Contact />
      </main>

      {/* Semantic Footer */}
      <Footer />
    </div>
  );
}

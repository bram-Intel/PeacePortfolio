import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { ContactButton } from './ContactButton';
import { ThemeToggle } from './ThemeToggle';
import { Avatar3DCanvas } from './Avatar3DCanvas';
import { BrandLogo } from './BrandLogo';
import { MapPin, Menu, X } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-x-clip bg-[var(--background)] px-5 sm:px-8 md:px-10 pb-6 text-[var(--text)] transition-colors duration-300">
      {/* 1. Navbar Header */}
      <FadeIn delay={0} y={-20} className="w-full pt-5 md:pt-8 z-40">
        <nav className="flex items-center justify-between w-full">
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-3 group">
            <BrandLogo className="transition-transform duration-300 group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="text-[var(--text)] font-bold uppercase tracking-widest text-sm md:text-base group-hover:text-[var(--accent)] transition-colors leading-tight">
                Peace
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)]">
                Product Designer
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-[var(--text)] font-semibold uppercase tracking-wider text-sm lg:text-[1.05rem] hover:text-[var(--accent)] transition-colors duration-200"
              >
                {item}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full bg-[var(--surface)] border border-[var(--border)] text-[var(--text)] hover:border-[var(--accent)] transition-colors shadow-sm"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-x-4 top-20 z-50 p-6 rounded-3xl bg-[var(--surface)]/95 backdrop-blur-xl border border-[var(--border)] shadow-2xl flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-bold uppercase tracking-wider text-[var(--text)] hover:text-[var(--accent)] py-2 border-b border-[var(--border)]/50 last:border-none transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </FadeIn>

      {/* 2. DESKTOP HERO LAYOUT */}
      <div className="hidden md:flex flex-col items-center overflow-hidden w-full text-center -mt-8 lg:-mt-14 z-10">
        <FadeIn delay={0.08} y={-10} className="mb-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--border)] text-sm tracking-wide shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)] animate-ping" />
            <MapPin className="w-4 h-4 text-[var(--accent)]" />
            <span className="font-bold text-[var(--text)]">Lagos, Nigeria</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[18vw] lg:text-[19vw]">
            Peace
          </h1>
        </FadeIn>
      </div>

      {/* Desktop 3D Head Avatar (Centered Overlay — Sole 3D Feature) */}
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 z-30 w-[420px] lg:w-[480px] bottom-4 pointer-events-auto">
        <FadeIn delay={0.5} y={30}>
          <Avatar3DCanvas />
        </FadeIn>
      </div>

      {/* 3. MOBILE HERO LAYOUT (Clean Vertical Stack With Zero Overlap) */}
      <div className="flex md:hidden flex-col items-center justify-center my-6 z-20 text-center w-full">
        <FadeIn delay={0.08} y={-10} className="mb-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--border)] text-xs tracking-wide shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[var(--accent)] animate-ping" />
            <MapPin className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span className="font-bold text-[var(--text)]">Lagos, Nigeria</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.15} y={20} className="w-full">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none text-[18vw] sm:text-[17vw] whitespace-nowrap my-1">
            Peace
          </h1>
        </FadeIn>

        <FadeIn delay={0.25} y={20} className="w-full my-2">
          <Avatar3DCanvas />
        </FadeIn>
      </div>

      {/* 4. Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-end pb-4 sm:pb-8 z-30 w-full mt-4 md:mt-0 gap-5 md:gap-0">
        <FadeIn delay={0.35} y={20} className="max-w-[300px] sm:max-w-[340px] md:max-w-[320px] text-center md:text-left">
          <p
            className="text-[var(--text-muted)] font-medium uppercase tracking-wide leading-snug"
            style={{ fontSize: 'clamp(0.75rem, 1.2vw, 1.15rem)' }}
          >
            Product Designer (UI/UX – Web &amp; Mobile) turning ideas into intuitive digital experiences.
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20} className="flex gap-3">
          <ContactButton
            label="Explore Work"
            onClick={() => {
              const el = document.getElementById('projects');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        </FadeIn>
      </div>
    </section>
  );
};

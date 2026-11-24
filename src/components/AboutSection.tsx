import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';
import { Mail, Phone, MessageCircle, Figma, FileText, Sparkles, Palette, Layers, BookOpen } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const profileText =
    "I'm Peace, a Product & UI/UX Designer with hands-on experience designing user-centred digital experiences, responsive web interfaces, and intuitive product solutions. Skilled in Figma, wireframing, prototyping, user flows, information architecture, and interface design — combining a collaborative product mindset with digital marketing, creative communication, and brand development.";

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center bg-[var(--background)] px-5 sm:px-8 md:px-10 py-24 overflow-hidden text-[var(--text)] transition-colors duration-300"
    >
      {/* Subtle Blue & White Decorative Corner Accents */}
      <div className="hidden sm:block absolute top-[8%] left-[4%] pointer-events-none z-10 opacity-75">
        <FadeIn delay={0.1} x={-60} y={0} duration={0.9}>
          <div className="p-4 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-lg rotate-[-8deg]">
            <Palette className="w-10 h-10 md:w-12 md:h-12 text-[var(--accent)]" />
          </div>
        </FadeIn>
      </div>

      <div className="hidden sm:block absolute bottom-[10%] left-[6%] pointer-events-none z-10 opacity-75">
        <FadeIn delay={0.25} x={-60} y={0} duration={0.9}>
          <div className="px-4 py-2.5 rounded-2xl bg-[var(--surface)] border border-[var(--border)] shadow-lg rotate-[6deg] flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[var(--accent)]" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text)]">UI / UX</span>
          </div>
        </FadeIn>
      </div>

      <div className="hidden sm:block absolute top-[10%] right-[4%] pointer-events-none z-10 opacity-75">
        <FadeIn delay={0.15} x={60} y={0} duration={0.9}>
          <div className="p-4 rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-lg rotate-[10deg]">
            <Layers className="w-10 h-10 md:w-12 md:h-12 text-[var(--accent)]" />
          </div>
        </FadeIn>
      </div>

      {/* Main Center Content Container */}
      <div className="relative z-20 flex flex-col items-center max-w-4xl w-full text-center">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 10vw, 130px)' }}
          >
            About Me
          </h2>
        </FadeIn>

        <div className="mt-10 sm:mt-14 md:mt-16 w-full flex justify-center">
          <AnimatedText
            text={profileText}
            className="max-w-[700px] font-medium leading-relaxed"
            style={{ fontSize: 'clamp(1rem, 1.8vw, 1.3rem)' }}
          />
        </div>

        {/* Direct Contact, Figma Portfolio & CV Badges */}
        <FadeIn delay={0.3} y={20} className="mt-9 flex flex-wrap justify-center gap-3.5">
          <a
            href="mailto:olododoimoaseda@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface)] border border-[var(--border)] text-xs sm:text-sm font-semibold text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors shadow-sm"
          >
            <Mail className="w-4 h-4 text-[var(--accent)]" />
            <span>olododoimoaseda@gmail.com</span>
          </a>
          <a
            href="https://wa.me/2347034644644"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface)] border border-[var(--border)] text-xs sm:text-sm font-semibold text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-[var(--accent)]" />
            <span>WhatsApp: 07034644644</span>
          </a>
          <a
            href="tel:+2349130685316"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface)] border border-[var(--border)] text-xs sm:text-sm font-semibold text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors shadow-sm"
          >
            <Phone className="w-4 h-4 text-[var(--accent)]" />
            <span>09130685316</span>
          </a>
          <a
            href="https://www.behance.net/gallery/258910589/GoalBox"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface)] border border-[var(--border)] text-xs sm:text-sm font-semibold text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors shadow-sm"
          >
            <BookOpen className="w-4 h-4 text-[var(--accent)]" />
            <span>Behance Case Study</span>
          </a>
          <a
            href="https://www.figma.com/design/NYhqBxZVmVnieeyyK34SVG/Untitled?node-id=0-1"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface)] border border-[var(--border)] text-xs sm:text-sm font-semibold text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors shadow-sm"
          >
            <Figma className="w-4 h-4 text-[var(--accent)]" />
            <span>Figma Portfolio</span>
          </a>
          <a
            href="https://drive.google.com/file/d/1s90CXH5Ba2yayf0mYS7jcK4DbhVoVsrl/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--surface)] border border-[var(--border)] text-xs sm:text-sm font-semibold text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors shadow-sm"
          >
            <FileText className="w-4 h-4 text-[var(--accent)]" />
            <span>View CV</span>
          </a>
        </FadeIn>

        <div className="mt-12 sm:mt-16">
          <FadeIn delay={0.4} y={20}>
            <ContactButton
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

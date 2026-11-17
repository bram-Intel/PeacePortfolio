import React from 'react';
import { FadeIn } from './FadeIn';
import { GraduationCap, Award, Mic, Music, BookOpen, Utensils, Compass, Sparkles } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section
      id="experience"
      className="bg-[var(--background)] text-[var(--text)] px-5 sm:px-8 md:px-10 py-24 border-t border-[var(--border)] w-full relative z-20 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Experience & Education (7 cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <FadeIn delay={0} y={40}>
              <h2
                className="hero-heading font-black uppercase leading-none tracking-tight mb-8"
                style={{ fontSize: 'clamp(2.5rem, 8vw, 90px)' }}
              >
                Experience
              </h2>
            </FadeIn>

            <FadeIn delay={0.1} y={20}>
              <div className="relative pl-6 border-l-2 border-[var(--accent)] space-y-10">
                {/* Jureb */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[var(--accent)] border-4 border-[var(--background)] animate-pulse" />
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-[var(--accent)]">
                      Digital Marketing / UI/UX Intern
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-[var(--surface)] border border-[var(--border)] text-xs font-mono font-bold text-[var(--accent)]">
                      Jureb
                    </span>
                  </div>
                  <ul className="space-y-2.5 text-sm sm:text-base font-normal text-[var(--text-muted)] leading-relaxed list-disc list-inside">
                    <li>Contributed to product design, responsive web interfaces, and digital marketing activities.</li>
                    <li>Collaborated closely with designers and developers across product meetings and design reviews.</li>
                    <li>Supported planning and execution of key product relaunch initiatives.</li>
                  </ul>
                </div>

                {/* Harrowspot Digitals */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#0B4F6C] border-4 border-[var(--background)]" />
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-[var(--text)]">
                      Creative Assistant &amp; Social Media Manager
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-[var(--surface)] border border-[var(--border)] text-xs font-mono text-[var(--text-muted)]">
                      Harrowspot Digitals
                    </span>
                  </div>
                  <ul className="space-y-2.5 text-sm sm:text-base font-normal text-[var(--text-muted)] leading-relaxed list-disc list-inside">
                    <li>Managed creative content across Instagram, Facebook, and TikTok with structured content calendars and scripts.</li>
                    <li>Supervised visual design deliverables, produced voice-over content, and collaborated across creative campaigns.</li>
                  </ul>
                </div>

                {/* Champs Interior Decoration */}
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-[#0B4F6C] border-4 border-[var(--background)]" />
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-[var(--text)]">
                      Design Intern
                    </h3>
                    <span className="px-3 py-1 rounded-full bg-[var(--surface)] border border-[var(--border)] text-xs font-mono text-[var(--text-muted)]">
                      Champs Interior Decoration
                    </span>
                  </div>
                  <ul className="space-y-2.5 text-sm sm:text-base font-normal text-[var(--text-muted)] leading-relaxed list-disc list-inside">
                    <li>Contributed to visual and creative design activities inside a collaborative studio environment.</li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Education & Certifications Box */}
          <FadeIn delay={0.2} y={20} className="mt-12 space-y-4">
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[28px] p-6 sm:p-8 flex items-start gap-4 shadow-sm">
              <div className="p-3 rounded-2xl bg-[var(--accent)]/10 text-[var(--accent)] flex-shrink-0">
                <GraduationCap className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-mono font-semibold">
                  Education
                </span>
                <h4 className="text-lg sm:text-xl font-bold uppercase text-[var(--text)] mt-1">
                  Mass Communication
                </h4>
                <p className="text-sm text-[var(--text-muted)] mt-1 font-medium">
                  Université Protestante de l&apos;Afrique de l&apos;Ouest (UPAO)
                </p>
              </div>
            </div>

            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[28px] p-6 sm:p-8 flex items-start gap-4 shadow-sm">
              <div className="p-3 rounded-2xl bg-[var(--accent)]/10 text-[var(--accent)] flex-shrink-0">
                <Award className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-[var(--text-muted)] font-mono font-semibold">
                  Certifications &amp; Learning
                </span>
                <ul className="mt-2 space-y-1.5 text-sm sm:text-base font-medium text-[var(--text)]">
                  <li>
                    Pexels Design School — <span className="text-[var(--accent)]">UI/UX Design</span>
                  </li>
                  <li className="text-[var(--text-muted)]">
                    Udemy — Complete Web &amp; Mobile Designer: UI/UX, Figma, + More <span className="text-xs font-mono uppercase text-[var(--accent)]">(Ongoing)</span>
                  </li>
                </ul>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Right Column: Interests & Personal Hobbies (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <FadeIn delay={0.15} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight mb-8"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 90px)' }}
            >
              Interests
            </h2>
          </FadeIn>

          <FadeIn delay={0.25} y={20}>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[24px] p-5 flex flex-col items-center text-center gap-3 hover:border-[var(--accent)] transition-colors shadow-sm">
                <Mic className="w-8 h-8 text-[var(--accent)]" />
                <span className="font-bold uppercase tracking-wider text-xs sm:text-sm text-[var(--text)]">
                  Voice-Over Artist
                </span>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[24px] p-5 flex flex-col items-center text-center gap-3 hover:border-[var(--accent)] transition-colors shadow-sm">
                <Music className="w-8 h-8 text-sky-500" />
                <span className="font-bold uppercase tracking-wider text-xs sm:text-sm text-[var(--text)]">
                  Singing
                </span>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[24px] p-5 flex flex-col items-center text-center gap-3 hover:border-[var(--accent)] transition-colors shadow-sm">
                <BookOpen className="w-8 h-8 text-indigo-500" />
                <span className="font-bold uppercase tracking-wider text-xs sm:text-sm text-[var(--text)]">
                  Reading &amp; Learning
                </span>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[24px] p-5 flex flex-col items-center text-center gap-3 hover:border-[var(--accent)] transition-colors shadow-sm">
                <Utensils className="w-8 h-8 text-amber-500" />
                <span className="font-bold uppercase tracking-wider text-xs sm:text-sm text-[var(--text)]">
                  Cooking
                </span>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[24px] p-5 flex flex-col items-center text-center gap-3 hover:border-[var(--accent)] transition-colors shadow-sm">
                <Compass className="w-8 h-8 text-teal-500" />
                <span className="font-bold uppercase tracking-wider text-xs sm:text-sm text-[var(--text)]">
                  Adventures
                </span>
              </div>
              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-[24px] p-5 flex flex-col items-center text-center gap-3 hover:border-[var(--accent)] transition-colors shadow-sm">
                <Sparkles className="w-8 h-8 text-[var(--accent)]" />
                <span className="font-bold uppercase tracking-wider text-xs sm:text-sm text-[var(--text)]">
                  New Experiences
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

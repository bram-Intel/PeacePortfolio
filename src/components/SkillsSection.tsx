import React, { useState } from 'react';
import { FadeIn } from './FadeIn';

interface SkillCategory {
  id: string;
  category: string;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'tools',
    category: 'Design & Prototyping Tools',
    skills: ['Figma', 'Framer', 'Sketch', 'Miro', 'Canva'],
  },
  {
    id: 'ui',
    category: 'UI & Interface Craft',
    skills: [
      'Product Design',
      'UI Design',
      'Website Design',
      'Responsive Web Design',
      'Mobile App Interface Design',
      'Design Systems',
    ],
  },
  {
    id: 'ux',
    category: 'UX Research & Architecture',
    skills: [
      'UX Research',
      'User-Centred Design',
      'User Personas & Empathy Mapping',
      'Wireframing',
      'Interactive Prototyping',
      'Usability Testing',
    ],
  },
  {
    id: 'creative',
    category: 'Creative & Brand Content',
    skills: [
      'Voice-Over Services',
      'Social Media Creative Direction',
      'Content Calendars & Scripting',
      'Visual Storytelling',
      'Cross-Functional Collaboration',
    ],
  },
];

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredCategories =
    activeTab === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === activeTab);

  return (
    <section
      id="skills"
      className="bg-[var(--surface)] text-[var(--text)] px-5 sm:px-8 md:px-10 py-24 border-t border-[var(--border)] w-full relative z-20 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-8"
            style={{ fontSize: 'clamp(3rem, 10vw, 120px)' }}
          >
            Design Toolkit
          </h2>
          <p className="text-center text-[var(--text-muted)] max-w-xl mx-auto text-sm sm:text-base mb-12 uppercase tracking-widest font-medium">
            Combining user research, clean visual systems, and interactive prototyping for web &amp; mobile products.
          </p>
        </FadeIn>

        {/* Filter Tabs */}
        <FadeIn delay={0.1} y={20} className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-[#0B4F6C] to-[#2563EB] text-white'
                  : 'bg-[var(--background)] text-[var(--text-muted)] hover:text-[var(--accent)] border border-[var(--border)]'
              }`}
            >
              All Categories
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm ${
                  activeTab === cat.id
                    ? 'bg-gradient-to-r from-[#0B4F6C] to-[#2563EB] text-white'
                    : 'bg-[var(--background)] text-[var(--text-muted)] hover:text-[var(--accent)] border border-[var(--border)]'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Skill Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((cat, idx) => (
            <FadeIn key={cat.id} delay={idx * 0.05} y={20}>
              <div className="bg-[var(--background)] border border-[var(--border)] rounded-[28px] p-6 hover:border-[var(--accent)]/50 transition-colors duration-300 shadow-sm h-full">
                <h3 className="text-lg font-bold uppercase tracking-wider text-[var(--accent)] mb-4 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent)]" />
                  {cat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3.5 py-1.5 rounded-full bg-[var(--surface)] border border-[var(--border)] text-xs sm:text-sm font-semibold text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

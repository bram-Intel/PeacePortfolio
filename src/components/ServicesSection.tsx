import React, { useState } from 'react';
import { FadeIn } from './FadeIn';
import { ArrowUpRight, CheckCircle2, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';

interface ServiceItem {
  number: string;
  name: string;
  description: string;
  tags: string[];
  deliverables: string[];
}

const SERVICES: ServiceItem[] = [
  {
    number: '01',
    name: 'Product & UI Design',
    description:
      'Transforming ideas into refined, visually engaging web and mobile product interfaces rooted in user-centred design.',
    tags: ['Figma', 'Sketch', 'Framer', 'Visual Hierarchy'],
    deliverables: ['High-Fidelity Product Screens', 'User-Centred Interface Flows', 'Developer-Ready Handoff'],
  },
  {
    number: '02',
    name: 'UX Research & Usability Testing',
    description:
      'Uncovering real user challenges through quantitative & qualitative research, empathy mapping, personas, and iterative usability testing.',
    tags: ['Miro', 'User Personas', 'Empathy Maps', 'Usability Testing'],
    deliverables: ['Research Synthesis & Findings', 'Journey & Empathy Mapping', 'Actionable Usability Insights'],
  },
  {
    number: '03',
    name: 'Web & Mobile Interface Design',
    description:
      'Designing responsive website layouts and native mobile app experiences across healthcare, fintech, logistics, and e-commerce.',
    tags: ['Responsive Web', 'iOS & Android UI', 'Landing Pages', 'Accessibility'],
    deliverables: ['Desktop & Mobile Breakpoints', 'Conversion-Focused Landing Pages', 'Clean Navigation Patterns'],
  },
  {
    number: '04',
    name: 'Wireframing & Prototyping',
    description:
      'Structuring information early with low-fidelity wireframes and bringing concepts to life with clickable interactive prototypes.',
    tags: ['Wireframes', 'Interactive Prototypes', 'User Flows', 'Figma'],
    deliverables: ['Low-Fidelity Structural Flows', 'Clickable Stakeholder Prototypes', 'Micro-Interaction States'],
  },
  {
    number: '05',
    name: 'Design Systems & Visual Assets',
    description:
      'Establishing consistent typography, color tokens, spacing scales, and reusable UI components alongside clean brand visuals.',
    tags: ['Design Systems', 'Tokens', 'Component Libraries', 'Canva'],
    deliverables: ['Color & Typography Foundations', 'Reusable Component Kits', 'Social & Brand Visual Collateral'],
  },
  {
    number: '06',
    name: 'Voice-Over Services',
    description:
      'Delivering expressive, clear voice-over recordings for product walkthroughs, marketing reels, brand campaigns, and storytelling.',
    tags: ['Voice-Over', 'Narration', 'Brand Storytelling', 'Audio Content'],
    deliverables: ['Commercial & Product Voice-Overs', 'Promo & Social Reel Narration', 'Clean Studio-Ready Audio'],
  },
];

export const ServicesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="services"
      className="bg-[var(--surface)] text-[var(--text)] px-5 sm:px-8 md:px-10 py-24 relative z-20 w-full border-t border-[var(--border)] transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn delay={0} y={40}>
          <div className="text-center mb-16 sm:mb-20">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--background)] border border-[var(--border)] text-xs font-mono font-bold text-[var(--accent)] mb-4 shadow-sm">
              <Sparkles className="w-4 h-4 text-[var(--accent)]" />
              Design &amp; Creative Offerings
            </span>
            <h2
              className="hero-heading font-black uppercase text-center leading-none tracking-tight"
              style={{ fontSize: 'clamp(3rem, 10vw, 130px)' }}
            >
              Services
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-muted)] max-w-xl mx-auto mt-4 font-medium">
              Click any service below to explore deliverables and design tools.
            </p>
          </div>
        </FadeIn>

        <div className="divide-y divide-[var(--border)] border-t border-b border-[var(--border)]">
          {SERVICES.map((service, index) => {
            const isExpanded = activeIndex === index;
            return (
              <FadeIn key={service.number} delay={index * 0.06} y={20}>
                <div
                  onClick={() => toggleAccordion(index)}
                  className={`group cursor-pointer transition-all duration-300 px-4 sm:px-6 py-8 sm:py-10 md:py-11 rounded-3xl my-2 ${
                    isExpanded
                      ? 'bg-gradient-to-r from-[#0B4F6C]/10 via-[#2563EB]/10 to-transparent border-l-4 border-[var(--accent)] shadow-md'
                      : 'hover:bg-gradient-to-r hover:from-[#0B4F6C]/5 hover:via-[#2563EB]/10 hover:to-transparent hover:border-l-4 hover:border-[var(--accent)]'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-10">
                    <div
                      className={`font-black leading-none select-none flex-shrink-0 transition-all duration-300 ${
                        isExpanded
                          ? 'text-[var(--accent)] scale-110'
                          : 'text-[var(--accent)]/70 group-hover:text-[var(--accent)] group-hover:scale-105'
                      }`}
                      style={{ fontSize: 'clamp(2.75rem, 7vw, 110px)' }}
                    >
                      {service.number}
                    </div>

                    <div className="flex flex-col gap-2 flex-grow max-w-2xl w-full">
                      <div className="flex items-center justify-between gap-4">
                        <h3
                          className={`font-bold uppercase transition-colors duration-300 ${
                            isExpanded ? 'text-[var(--accent)]' : 'text-[var(--text)] group-hover:text-[var(--accent)]'
                          }`}
                          style={{ fontSize: 'clamp(1.1rem, 2.2vw, 2rem)' }}
                        >
                          {service.name}
                        </h3>
                        <div
                          className={`w-10 h-10 rounded-full border flex-shrink-0 flex items-center justify-center transition-all duration-300 shadow-sm ${
                            isExpanded
                              ? 'border-[var(--accent)] bg-[var(--accent)] text-white shadow-md'
                              : 'border-[var(--border)] bg-[var(--background)] text-[var(--accent)] group-hover:border-[var(--accent)]'
                          }`}
                          title={isExpanded ? 'Click to collapse' : 'Click to expand'}
                        >
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 transition-transform duration-300" />
                          ) : (
                            <ChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5" />
                          )}
                        </div>
                      </div>
                      <p className="font-normal leading-relaxed text-[var(--text-muted)]" style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)' }}>
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="mt-8 pt-6 border-t border-[var(--border)] grid grid-cols-1 md:grid-cols-12 gap-6">
                      <div className="md:col-span-7 space-y-3">
                        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--accent)] block">
                          Key Deliverables
                        </span>
                        <div className="space-y-2">
                          {service.deliverables.map((item, dIdx) => (
                            <div key={dIdx} className="flex items-center gap-2.5 text-sm font-semibold text-[var(--text)]">
                              <CheckCircle2 className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="md:col-span-5 space-y-3 flex flex-col justify-between">
                        <div>
                          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--accent)] block mb-2">
                            Tools &amp; Focus
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {service.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 rounded-full bg-[var(--background)] border border-[var(--border)] text-xs font-semibold text-[var(--accent)] shadow-sm"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              const el = document.getElementById('contact');
                              if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0B4F6C] text-white text-xs font-bold uppercase tracking-wider hover:bg-[var(--accent)] transition-colors shadow-md"
                          >
                            <span>Inquire This Service</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};

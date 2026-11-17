import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from './FadeIn';
import { LiveProjectButton } from './LiveProjectButton';
import { ExternalLink } from 'lucide-react';

interface ProjectData {
  id: string;
  number: string;
  category: string;
  name: string;
  tools: string[];
  summary: string;
  mainImg: string;
  figmaUrl: string;
}

const FIGMA_PORTFOLIO_URL =
  'https://www.figma.com/design/NYhqBxZVmVnieeyyK34SVG/Untitled?node-id=0-1&p=f&t=3L7WRNtzHKgcLSgR-0';

const PROJECTS: ProjectData[] = [
  {
    id: 'proj-1',
    number: '01',
    category: 'HealthTech • Web & Mobile UI',
    name: 'VaxiTrack — Child Vaccination Platform',
    tools: ['Figma', 'User Flows', 'Responsive Web', 'Mobile UI'],
    summary:
      "A digital healthcare solution designed to help mothers track their children's vaccination schedules, appointments, nearby hospitals, and medication reminders in one accessible experience.",
    mainImg: '/assets/project_vaxitrack.jpg',
    figmaUrl: FIGMA_PORTFOLIO_URL,
  },
  {
    id: 'proj-2',
    number: '02',
    category: 'FinTech • Student Savings App',
    name: 'GoalBox — Student Savings Fintech App',
    tools: ['Figma', 'UX Research', 'Design System', 'Miro'],
    summary:
      'A student-focused savings application encouraging financial discipline with goal-based target boxes and emergency funds, backed by quantitative research, personas, and empathy mapping.',
    mainImg: '/assets/project_goalbox.jpg',
    figmaUrl: FIGMA_PORTFOLIO_URL,
  },
  {
    id: 'proj-3',
    number: '03',
    category: 'Logistics • Web Platform',
    name: 'UrbanFleet — Logistics & Delivery Platform',
    tools: ['Figma', 'Web UI', 'Sketch', 'Information Architecture'],
    summary:
      'A logistics platform concept designed to simplify local dispatch services and cross-border shipping through road and air transportation with clear quote request workflows.',
    mainImg: '/assets/project_urbanfleet.jpg',
    figmaUrl: FIGMA_PORTFOLIO_URL,
  },
  {
    id: 'proj-4',
    number: '04',
    category: 'FoodTech • Mobile App UI',
    name: 'Mealio — Food Ordering Platform',
    tools: ['Figma', 'Mobile Design', 'Canva', 'Prototyping'],
    summary:
      'A vibrant food-ordering mobile product concept focused on effortless meal discovery, category browsing, hot deals, and a seamless end-to-end checkout experience.',
    mainImg: '/assets/project_mealio.jpg',
    figmaUrl: FIGMA_PORTFOLIO_URL,
  },
];

const Card: React.FC<{
  project: ProjectData;
  index: number;
  totalCards: number;
}> = ({ project, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.02;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="sticky min-h-[60vh] flex items-center justify-center mb-8 sm:mb-12"
      style={{ top: `${48 + index * 14}px` }}
    >
      <motion.div
        style={{ scale }}
        className="w-full max-w-6xl rounded-[28px] sm:rounded-[36px] md:rounded-[44px] border-2 border-[var(--border)] bg-[var(--surface)] p-4 sm:p-6 md:p-7 shadow-xl flex flex-col justify-between"
      >
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3 sm:gap-5">
            <span
              className="font-black leading-none text-[var(--accent)] select-none"
              style={{ fontSize: 'clamp(1.75rem, 4vw, 56px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <span className="text-xs uppercase tracking-widest text-[var(--accent)] font-mono font-bold">
                {project.category}
              </span>
              <h3 className="text-base sm:text-xl md:text-2xl font-bold uppercase text-[var(--text)]">
                {project.name}
              </h3>
            </div>
          </div>

          <LiveProjectButton href={project.figmaUrl} label="View Figma" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
          <div className="lg:col-span-7 w-full h-[190px] sm:h-[250px] md:h-[285px] lg:h-[310px] rounded-[20px] sm:rounded-[28px] overflow-hidden border border-[var(--border)] bg-[var(--background)] group shadow-sm">
            <img
              src={project.mainImg}
              alt={project.name}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <p className="text-xs sm:text-sm font-normal text-[var(--text-muted)] leading-relaxed">
              {project.summary}
            </p>

            <div>
              <span className="text-[11px] uppercase tracking-widest text-[var(--text-muted)] font-mono font-semibold block mb-1.5">
                Design Tools &amp; Focus
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-0.5 rounded-full bg-[var(--background)] border border-[var(--border)] text-xs font-semibold text-[var(--accent)] shadow-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={project.figmaUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-[var(--accent)] font-bold hover:underline"
            >
              <span>Open in Figma Portfolio</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="bg-[var(--background)] text-[var(--text)] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 pt-16 pb-28 w-full border-t border-[var(--border)] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-12 sm:mb-16"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 120px)' }}
          >
            Selected Work
          </h2>
        </FadeIn>

        <div className="relative">
          {PROJECTS.map((project, index) => (
            <Card
              key={project.id}
              project={project}
              index={index}
              totalCards={PROJECTS.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

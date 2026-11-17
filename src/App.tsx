import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactFooter } from './components/ContactFooter';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <main
        className="bg-[var(--background)] text-[var(--text)] font-sans min-h-screen w-full relative transition-colors duration-300"
        style={{ overflowX: 'clip' }}
      >
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactFooter />
      </main>
    </ThemeProvider>
  );
};

export default App;

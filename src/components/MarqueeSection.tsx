import React, { useEffect, useState, useRef } from 'react';
import { Sparkles, Layout, Palette, Layers, Figma, Users, Mic } from 'lucide-react';

interface QuoteCard {
  quote: string;
  author: string;
  tag: string;
}

interface MetricCard {
  icon: React.ElementType;
  metric: string;
  title: string;
  subtitle: string;
  gradient: string;
}

const QUOTES: QuoteCard[] = [
  {
    quote: "Design isn't just about beautiful screens, it's about solving real problems.",
    author: "Olododo Peace",
    tag: "Design Philosophy",
  },
  {
    quote: "Good design is as little design as possible.",
    author: "Dieter Rams",
    tag: "Minimalism",
  },
  {
    quote: "Design is not just what it looks like and feels like. Design is how it works.",
    author: "Steve Jobs",
    tag: "Product Thinking",
  },
  {
    quote: "Good design is actually a lot harder to notice than poor design.",
    author: "Don Norman",
    tag: "User Experience",
  },
  {
    quote: "If you can design one thing, you can design everything.",
    author: "Massimo Vignelli",
    tag: "Visual Craft",
  },
  {
    quote: "Simplicity is about subtracting the obvious and adding the meaningful.",
    author: "John Maeda",
    tag: "Clarity",
  },
];

const METRICS: MetricCard[] = [
  {
    icon: Users,
    metric: "UCD",
    title: "User-Centred Design",
    subtitle: "Quantitative & Qualitative Research",
    gradient: "from-[#0B4F6C]/15 to-[#2563EB]/20 border-[var(--accent)]/30 text-[var(--accent)]",
  },
  {
    icon: Layout,
    metric: "Web+App",
    title: "Responsive Interfaces",
    subtitle: "Seamless Mobile & Desktop Flows",
    gradient: "from-sky-500/15 to-blue-500/20 border-sky-500/30 text-sky-500",
  },
  {
    icon: Figma,
    metric: "Figma",
    title: "Interactive Prototyping",
    subtitle: "Wireframes, Flows & Micro-Interactions",
    gradient: "from-indigo-500/15 to-blue-600/20 border-indigo-500/30 text-indigo-500",
  },
  {
    icon: Layers,
    metric: "Systems",
    title: "Scalable Design Systems",
    subtitle: "Color Tokens, Type & Components",
    gradient: "from-cyan-500/15 to-[#0B4F6C]/20 border-cyan-500/30 text-cyan-600",
  },
  {
    icon: Palette,
    metric: "4+ Apps",
    title: "Multi-Industry Concepts",
    subtitle: "HealthTech, FinTech, Logistics & Food",
    gradient: "from-blue-500/15 to-sky-400/20 border-blue-500/30 text-[var(--accent)]",
  },
  {
    icon: Mic,
    metric: "Voice",
    title: "Creative Voice-Over",
    subtitle: "Brand Storytelling & Audio Direction",
    gradient: "from-teal-500/15 to-sky-500/20 border-teal-500/30 text-teal-600",
  },
];

const REPEATED_QUOTES = [...QUOTES, ...QUOTES, ...QUOTES, ...QUOTES];
const REPEATED_METRICS = [...METRICS, ...METRICS, ...METRICS, ...METRICS];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  const [dragRow1, setDragRow1] = useState(0);
  const [dragRow2, setDragRow2] = useState(0);

  const isDraggingRow1 = useRef(false);
  const startXRow1 = useRef(0);
  const dragStartRow1 = useRef(0);
  const [isGrabbing1, setIsGrabbing1] = useState(false);

  const isDraggingRow2 = useRef(false);
  const startXRow2 = useRef(0);
  const dragStartRow2 = useRef(0);
  const [isGrabbing2, setIsGrabbing2] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.offsetTop;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.35;
      setScrollOffset(offset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleStartRow1 = (clientX: number) => {
    isDraggingRow1.current = true;
    startXRow1.current = clientX;
    dragStartRow1.current = dragRow1;
    setIsGrabbing1(true);
  };

  const handleMoveRow1 = (clientX: number) => {
    if (!isDraggingRow1.current) return;
    setDragRow1(dragStartRow1.current + (clientX - startXRow1.current));
  };

  const handleEndRow1 = () => {
    isDraggingRow1.current = false;
    setIsGrabbing1(false);
  };

  const handleStartRow2 = (clientX: number) => {
    isDraggingRow2.current = true;
    startXRow2.current = clientX;
    dragStartRow2.current = dragRow2;
    setIsGrabbing2(true);
  };

  const handleMoveRow2 = (clientX: number) => {
    if (!isDraggingRow2.current) return;
    setDragRow2(dragStartRow2.current + (clientX - startXRow2.current));
  };

  const handleEndRow2 = () => {
    isDraggingRow2.current = false;
    setIsGrabbing2(false);
  };

  return (
    <section
      ref={sectionRef}
      className="bg-[var(--surface)] pt-20 sm:pt-28 md:pt-32 pb-12 overflow-hidden w-full relative z-20 border-t border-[var(--border)] transition-colors duration-300 select-none"
    >
      <div className="flex flex-col gap-5 w-full">
        {/* Row 1: Design Principles & Quotes (Moves RIGHT + Drag/Touch) */}
        <div
          className={`flex gap-4 w-max ${isGrabbing1 ? 'cursor-grabbing' : 'cursor-grab'}`}
          style={{
            transform: `translateX(${scrollOffset - 220 + dragRow1}px)`,
            transition: isGrabbing1 ? 'none' : 'transform 0.1s ease-out',
            willChange: 'transform',
          }}
          onMouseDown={(e) => handleStartRow1(e.clientX)}
          onMouseMove={(e) => handleMoveRow1(e.clientX)}
          onMouseUp={handleEndRow1}
          onMouseLeave={handleEndRow1}
          onTouchStart={(e) => e.touches.length > 0 && handleStartRow1(e.touches[0].clientX)}
          onTouchMove={(e) => e.touches.length > 0 && handleMoveRow1(e.touches[0].clientX)}
          onTouchEnd={handleEndRow1}
        >
          {REPEATED_QUOTES.map((item, idx) => (
            <div
              key={`quote-${idx}`}
              className="w-[330px] sm:w-[400px] md:w-[430px] h-[190px] flex-shrink-0 rounded-3xl p-6 bg-[var(--background)] border border-[var(--border)] flex flex-col justify-between shadow-sm pointer-events-none"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-[var(--surface)] text-[var(--accent)] font-semibold border border-[var(--accent)]/30">
                  {item.tag}
                </span>
                <Sparkles className="w-4 h-4 text-[var(--accent)]" />
              </div>
              <p className="text-sm sm:text-base font-medium text-[var(--text)] italic leading-snug">
                &ldquo;{item.quote}&rdquo;
              </p>
              <span className="text-xs font-semibold text-[var(--text-muted)] tracking-wide uppercase font-mono">
                — {item.author}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2: Craft & Highlights (Moves LEFT + Drag/Touch) */}
        <div
          className={`flex gap-4 w-max ${isGrabbing2 ? 'cursor-grabbing' : 'cursor-grab'}`}
          style={{
            transform: `translateX(${-(scrollOffset - 220) + dragRow2}px)`,
            transition: isGrabbing2 ? 'none' : 'transform 0.1s ease-out',
            willChange: 'transform',
          }}
          onMouseDown={(e) => handleStartRow2(e.clientX)}
          onMouseMove={(e) => handleMoveRow2(e.clientX)}
          onMouseUp={handleEndRow2}
          onMouseLeave={handleEndRow2}
          onTouchStart={(e) => e.touches.length > 0 && handleStartRow2(e.touches[0].clientX)}
          onTouchMove={(e) => e.touches.length > 0 && handleMoveRow2(e.touches[0].clientX)}
          onTouchEnd={handleEndRow2}
        >
          {REPEATED_METRICS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={`metric-${idx}`}
                className={`w-[330px] sm:w-[400px] md:w-[430px] h-[190px] flex-shrink-0 rounded-3xl p-6 bg-gradient-to-br ${item.gradient} border flex flex-col justify-between shadow-sm pointer-events-none`}
              >
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-2xl bg-[var(--background)] border border-[var(--border)] shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-black font-mono tracking-tight text-[var(--accent)]">
                    {item.metric}
                  </span>
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-bold uppercase text-[var(--text)] tracking-wide">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[var(--text-muted)] font-mono mt-1 font-medium">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

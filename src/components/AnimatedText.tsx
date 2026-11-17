import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

const Character: React.FC<{
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <span className="relative inline-block">
      <span className="opacity-20 text-[var(--text-muted)]">{char === ' ' ? '\u00A0' : char}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0 text-[var(--text)] font-semibold">
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '', style }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.25'],
  });

  const characters = text.split('');
  const total = characters.length;

  return (
    <p ref={containerRef} style={style} className={`leading-relaxed text-center font-medium ${className}`}>
      {characters.map((char, index) => {
        const start = index / total;
        const end = start + 1 / total;
        return (
          <Character
            key={index}
            char={char}
            progress={scrollYProgress}
            range={[start, end]}
          />
        );
      })}
    </p>
  );
};

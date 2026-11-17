import React, { useState, useEffect, useRef } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}) => {
  const [transform, setTransform] = useState('translate3d(0px, 0px, 0px)');
  const [transition, setTransition] = useState(inactiveTransition);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.hypot(distanceX, distanceY);

      const maxDistance = Math.max(rect.width, rect.height) / 2 + padding;

      if (distance < maxDistance) {
        setTransition(activeTransition);
        const translateX = distanceX / strength;
        const translateY = distanceY / strength;
        setTransform(`translate3d(${translateX}px, ${translateY}px, 0px)`);
      } else {
        setTransition(inactiveTransition);
        setTransform('translate3d(0px, 0px, 0px)');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [padding, strength, activeTransition, inactiveTransition]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform,
        transition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};

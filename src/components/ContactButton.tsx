import React from 'react';

interface ContactButtonProps {
  onClick?: () => void;
  className?: string;
  label?: string;
  icon?: React.ReactNode;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  onClick,
  className = '',
  label = 'Contact Me',
  icon,
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative inline-flex items-center justify-center gap-2.5 rounded-full text-white font-medium uppercase tracking-widest transition-transform hover:scale-105 active:scale-95 duration-200 px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base shadow-lg ${className}`}
      style={{
        background: 'linear-gradient(123deg, #0B4F6C 7%, #2563EB 52%, #0B4F6C 100%)',
        boxShadow: '0px 6px 18px rgba(37, 99, 235, 0.28)',
        outline: '2px solid white',
        outlineOffset: '-3px',
      }}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

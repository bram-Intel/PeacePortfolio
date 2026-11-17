import React from 'react';

interface LiveProjectButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
  label?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  href,
  onClick,
  className = '',
  label = 'View Figma',
}) => {
  const content = (
    <span
      className={`inline-flex items-center justify-center rounded-full border-2 border-[var(--accent)] text-[var(--accent)] font-semibold uppercase tracking-widest px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm hover:bg-[var(--accent)] hover:text-white transition-colors duration-200 shadow-sm ${className}`}
    >
      {label}
    </span>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {content}
      </a>
    );
  }

  return <button onClick={onClick}>{content}</button>;
};

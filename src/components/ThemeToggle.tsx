import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme mode"
      title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
      className={`p-2.5 rounded-full border transition-all duration-300 flex items-center gap-2 shadow-sm ${
        theme === 'dark'
          ? 'bg-[#0B2336] border-[#1A3652] text-[#7DD3FC] hover:border-[#38BDF8]'
          : 'bg-[#F4F8FC] border-[#DCE6F2] text-[#0B4F6C] hover:border-[#2563EB]'
      } ${className}`}
    >
      {theme === 'dark' ? (
        <>
          <Sun className="w-4 h-4 text-amber-400" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider hidden md:inline">Light</span>
        </>
      ) : (
        <>
          <Moon className="w-4 h-4 text-[#0B4F6C]" />
          <span className="text-xs font-mono font-bold uppercase tracking-wider hidden md:inline">Dark</span>
        </>
      )}
    </button>
  );
};

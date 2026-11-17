import React from 'react';

interface BrandLogoProps {
  className?: string;
  sizeClass?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  sizeClass = 'w-12 h-12 md:w-14 md:h-14',
}) => {
  return (
    <div
      className={`${sizeClass} rounded-2xl bg-gradient-to-br from-[#0B4F6C] via-[#2563EB] to-[#38BDF8] border border-white/25 flex items-center justify-center shadow-md overflow-hidden select-none ${className}`}
    >
      <span className="text-white font-black tracking-tighter text-lg md:text-xl leading-none drop-shadow-sm">
        JP
      </span>
    </div>
  );
};

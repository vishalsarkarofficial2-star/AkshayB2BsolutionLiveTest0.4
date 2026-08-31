import React, { useState } from 'react';
import logoImg from '../assets/images/logo.png';

interface BrandLogoProps {
  className?: string;
  imgClassName?: string;
  alt?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = 'w-10 h-10',
  imgClassName = 'w-full h-full object-contain',
  alt = 'akshayb2bsolutions logo',
}) => {
  const [attempt, setAttempt] = useState<number>(0);
  const [allFailed, setAllFailed] = useState<boolean>(false);

  // Compute candidates based on current environment and GitHub Pages subpath
  const getCandidateSrc = (step: number): string => {
    const base = import.meta.env.BASE_URL || '/';
    const normalizedBase = base.endsWith('/') ? base : `${base}/`;
    
    // Check if we are running in a GitHub Pages subfolder (e.g. /reponame/)
    let repoPrefix = '';
    if (typeof window !== 'undefined') {
      const pathParts = window.location.pathname.split('/').filter(Boolean);
      if (window.location.hostname.includes('github.io') && pathParts.length > 0) {
        repoPrefix = `/${pathParts[0]}/`;
      }
    }

    switch (step) {
      case 0:
        // Vite bundled ESM asset
        return logoImg;
      case 1:
        // Relative to Vite base URL
        return `${normalizedBase}logo.png`;
      case 2:
        // If on GitHub Pages repo subpath
        return repoPrefix ? `${repoPrefix}logo.png` : '/logo.png';
      case 3:
        // Absolute root path
        return '/logo.png';
      case 4:
        // Relative path
        return 'logo.png';
      default:
        return logoImg;
    }
  };

  const handleImgError = () => {
    if (attempt < 4) {
      setAttempt((prev) => prev + 1);
    } else {
      setAllFailed(true);
    }
  };

  if (allFailed) {
    // High-resolution SVG Brand Monogram fallback ensuring the brand icon is ALWAYS rendered
    return (
      <div className={`flex items-center justify-center bg-white rounded-lg border border-slate-200 shadow-xs overflow-hidden ${className}`}>
        <svg viewBox="0 0 100 100" className="w-4/5 h-4/5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="100" height="100" rx="20" fill="#0B3D91" />
          <path d="M50 18L78 34V66L50 82L22 66V34L50 18Z" stroke="#FF5A00" strokeWidth="4" fill="#0B3D91" />
          <path d="M36 68L50 32L64 68H55.5L50 52L44.5 68H36Z" fill="#FFFFFF" />
          <path d="M42 58H58" stroke="#FF5A00" strokeWidth="3" strokeLinecap="round" />
          <circle cx="50" cy="32" r="3.5" fill="#FF5A00" />
        </svg>
      </div>
    );
  }

  return (
    <img
      src={getCandidateSrc(attempt)}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={handleImgError}
      className={imgClassName}
    />
  );
};

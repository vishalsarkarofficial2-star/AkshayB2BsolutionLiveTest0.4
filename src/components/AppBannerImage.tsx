import React, { useState } from 'react';
import appLogoImg from '../assets/images/Applogo.png';

interface AppBannerImageProps {
  className?: string;
  alt?: string;
}

export const AppBannerImage: React.FC<AppBannerImageProps> = ({
  className = 'w-48 h-auto object-contain rounded-2xl shadow-md transition-transform duration-300 hover:scale-105',
  alt = 'Akshay B2B Solutions Mobile App',
}) => {
  const [attempt, setAttempt] = useState<number>(0);
  const [allFailed, setAllFailed] = useState<boolean>(false);

  const getCandidateSrc = (step: number): string => {
    const base = import.meta.env.BASE_URL || '/';
    const normalizedBase = base.endsWith('/') ? base : `${base}/`;

    // Dynamic GitHub Pages repository path detection
    let repoPrefix = '';
    if (typeof window !== 'undefined') {
      const pathParts = window.location.pathname.split('/').filter(Boolean);
      if (window.location.hostname.includes('github.io') && pathParts.length > 0) {
        repoPrefix = `/${pathParts[0]}/`;
      }
    }

    switch (step) {
      case 0:
        // Vite bundled ESM asset (automatically hashed and prefixed with Vite base)
        return appLogoImg;
      case 1:
        // Vite dynamic base URL
        return `${normalizedBase}Applogo.png`;
      case 2:
        // GitHub Pages repository subpath
        return repoPrefix ? `${repoPrefix}Applogo.png` : '/Applogo.png';
      case 3:
        // Absolute root path
        return '/Applogo.png';
      case 4:
        // Relative path
        return 'Applogo.png';
      default:
        return appLogoImg;
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
    // Elegant fallback container if all image loading fails
    return (
      <div className={`flex flex-col items-center justify-center p-4 bg-gradient-to-br from-navy-900 to-slate-900 text-white rounded-2xl border border-white/20 shadow-xl ${className}`}>
        <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center font-bold text-xl shadow-md mb-2">
          AB
        </div>
        <p className="text-xs font-semibold text-center text-slate-200">Akshay B2B App</p>
        <span className="text-[10px] text-orange-400 mt-1">Available on iOS & Android</span>
      </div>
    );
  }

  return (
    <img
      src={getCandidateSrc(attempt)}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={handleImgError}
      className={className}
    />
  );
};

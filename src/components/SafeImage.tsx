import React, { useState } from 'react';
import { Building2 } from 'lucide-react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  alt?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({ 
  src, 
  alt, 
  fallbackSrc, 
  className,
  ...props 
}) => {
  const [error, setError] = useState(false);

  // Resolve image URL for GitHub Pages / subpaths
  let resolvedSrc = src || '';
  if (resolvedSrc.startsWith('/')) {
    const base = import.meta.env.BASE_URL || '/';
    if (base !== '/') {
      const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
      resolvedSrc = `${cleanBase}${resolvedSrc}`;
    }
  }

  // Ensure https for absolute URLs
  const safeSrc = resolvedSrc.replace(/^http:\/\//i, 'https://');

  if (error || !safeSrc) {
    return (
      <div className={`w-full h-full bg-gradient-to-br from-slate-800 via-slate-900 to-[#0B3D91] flex flex-col items-center justify-center p-4 text-white text-center ${className || ''}`}>
        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-2 shadow-inner">
          <Building2 className="w-5 h-5 text-blue-400" />
        </div>
        <span className="text-xs font-semibold tracking-wide text-slate-200 line-clamp-1 px-2">{alt || 'Professional Service'}</span>
        <span className="text-[10px] text-blue-300 mt-0.5">Verified Compliance</span>
      </div>
    );
  }

  return (
    <img
      src={safeSrc}
      alt={alt || 'Image'}
      className={`block max-w-full h-auto object-cover ${className || ''}`}
      onError={() => {
        if (!error) {
          setError(true);
        }
      }}
      loading="lazy"
      referrerPolicy="no-referrer"
      {...props}
    />
  );
};



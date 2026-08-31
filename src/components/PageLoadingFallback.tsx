import React from 'react';

export const PageLoadingFallback: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-slate-900">
      <div className="flex flex-col items-center space-y-4 max-w-sm text-center">
        {/* Animated Brand Ring Spinner */}
        <div className="relative w-12 h-12">
          <div className="absolute inset-0 rounded-full border-3 border-blue-100 animate-ping opacity-30"></div>
          <div className="w-12 h-12 rounded-full border-3 border-slate-200 border-t-[#0B3D91] border-r-[#FF5A00] animate-spin"></div>
        </div>
        <div className="space-y-1">
          <p className="text-sm font-bold text-[#0B3D91] tracking-wide">
            Loading Akshay B2B Solutions...
          </p>
          <p className="text-xs text-slate-500">
            Fetching legal compliance details
          </p>
        </div>
      </div>
    </div>
  );
};

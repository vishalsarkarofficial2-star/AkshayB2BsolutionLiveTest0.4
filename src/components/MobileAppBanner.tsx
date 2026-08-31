import React from 'react';
import { Bell, Shield, MessageCircle } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/servicesData';
import { AppBannerImage } from './AppBannerImage';

interface MobileAppBannerProps {
  title?: string;
  description?: string;
}

export const MobileAppBanner: React.FC<MobileAppBannerProps> = ({
  title = `NOW YOUR COMPLIANCE PARTNER ONE CLICK AWAY WITH ${COMPANY_DETAILS.name.toUpperCase()} APP!`,
  description = 'Track live MCA status, receive instant WhatsApp & SMS due-date alerts, download government registration certificates directly into your device vault, and connect with assigned legal executives on 24x7 priority chat.'
}) => {
  return (
    <section id="mobile-app-banner-section" className="py-14 bg-gradient-to-r from-[#0B3D91] via-[#0D47A1] to-[#1565C0] text-white relative overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 skew-x-12 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text and Features */}
          <div className="lg:col-span-8 space-y-4">
            <span className="inline-block px-3 py-1 bg-orange-400 text-slate-950 text-xs font-black uppercase tracking-wider rounded-full shadow-xs">
              Mobile App Release
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white leading-tight">
              {title}
            </h2>

            <p className="text-sm sm:text-base text-blue-100 font-normal leading-relaxed max-w-2xl">
              {description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-bold text-white bg-white/10 p-2.5 rounded-lg border border-white/10">
                <Bell className="w-4 h-4 text-orange-300" />
                <span>Live Status Alerts</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-white bg-white/10 p-2.5 rounded-lg border border-white/10">
                <Shield className="w-4 h-4 text-orange-300" />
                <span>Encrypted Vault</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-white bg-white/10 p-2.5 rounded-lg border border-white/10">
                <MessageCircle className="w-4 h-4 text-orange-300" />
                <span>1-Tap CA Support</span>
              </div>
            </div>

            {/* App Store / Play Store Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105 active:scale-95 duration-200 cursor-pointer focus:outline-none"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play Store"
                  referrerPolicy="no-referrer"
                  className="h-[44px] sm:h-[48px] object-contain"
                />
              </a>

              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-105 active:scale-95 duration-200 cursor-pointer focus:outline-none"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on Apple App Store"
                  referrerPolicy="no-referrer"
                  className="h-[44px] sm:h-[48px] object-contain"
                />
              </a>
            </div>
          </div>

          {/* Right Image Container - Displays Applogo */}
          <div className="lg:col-span-4 flex justify-center items-center">
            <AppBannerImage
              className="w-full max-w-[320px] h-auto object-contain transition-transform duration-300 hover:scale-105 drop-shadow-xl"
              alt="Akshay B2B Solutions Mobile App"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

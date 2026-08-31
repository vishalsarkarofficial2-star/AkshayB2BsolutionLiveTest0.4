import React from 'react';
import { Mail, Phone, FileText, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/servicesData';

interface TopUtilityBarProps {
  onBackToHome?: () => void;
  onOpenBrochure?: () => void;
}

export const TopUtilityBar: React.FC<TopUtilityBarProps> = ({ onOpenBrochure }) => {
  return (
    <div id="top-utility-bar" className="bg-[#0D47A1] text-white text-[11px] md:text-xs py-1.5 sm:py-2 px-3 sm:px-4 border-b border-white/10 z-50 relative">
      <div className="max-w-7xl mx-auto">
        {/* MOBILE VIEW (< 768px): Stacked 2-line layout */}
        <div className="flex flex-col items-center justify-center gap-1 sm:gap-2 md:hidden">
          {/* LINE 1 (Top Center): Envelope Icon (Orange) + Clickable Email */}
          <div className="flex items-center justify-center">
            <a
              id="top-email-link-mobile"
              href={`mailto:${COMPANY_DETAILS.email}`}
              className="flex items-center gap-1.5 text-white hover:text-[#FF5A00] transition-colors font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-[#FF5A00]" />
              <span>{COMPANY_DETAILS.email}</span>
            </a>
          </div>

          {/* LINE 2 (Bottom Center): Phone Icon (Orange) + Clickable Phone | Document Icon + Company Brochure */}
          <div className="flex items-center flex-wrap justify-center gap-3">
            <a
              id="top-phone-link-mobile"
              href={`tel:${COMPANY_DETAILS.phoneClean}`}
              className="flex items-center gap-1.5 text-white hover:text-[#FF5A00] transition-colors font-bold"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF5A00]" />
              <span>{COMPANY_DETAILS.phone}</span>
            </a>

            <span className="text-white/40">|</span>

            <button
              id="top-brochure-btn-mobile"
              onClick={onOpenBrochure}
              className="flex items-center gap-1.5 text-white hover:text-[#FF5A00] transition-colors font-medium cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[#FF5A00]" />
              <span>Company Brochure</span>
            </button>
          </div>
        </div>

        {/* TABLET & DESKTOP VIEW (>= 768px): Single continuous horizontal line with space-between */}
        <div className="hidden md:flex items-center justify-between">
          {/* Left Side Group */}
          <div className="flex items-center gap-2 lg:gap-3">
            <a
              id="top-email-link-desktop"
              href={`mailto:${COMPANY_DETAILS.email}`}
              className="flex items-center gap-1.5 text-white hover:text-[#FF5A00] transition-colors font-medium whitespace-nowrap"
            >
              <Mail className="w-3.5 h-3.5 text-[#FF5A00]" />
              <span>{COMPANY_DETAILS.email}</span>
            </a>

            <span className="text-white/30">|</span>

            <span className="text-white font-medium text-[11px] lg:text-xs whitespace-nowrap">
              Support: Mon-Sat, 09:00 AM - 07:30 PM
            </span>
          </div>

          {/* Right Side Group */}
          <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
            <a
              id="top-phone-link-desktop"
              href={`tel:${COMPANY_DETAILS.phoneClean}`}
              className="flex items-center gap-1.5 text-white hover:text-[#FF5A00] transition-colors font-bold whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF5A00]" />
              <span>{COMPANY_DETAILS.phone}</span>
            </a>

            <span className="text-white/30">|</span>

            <button
              id="top-brochure-btn-desktop"
              onClick={onOpenBrochure}
              className="flex items-center gap-1.5 text-white hover:text-[#FF5A00] transition-colors font-medium cursor-pointer whitespace-nowrap"
            >
              <FileText className="w-3.5 h-3.5 text-[#FF5A00]" />
              <span>Company Brochure</span>
            </button>

            <span className="text-white/30">|</span>

            {/* Social Media Icons */}
            <div className="flex items-center gap-1.5 lg:gap-2">
              <a
                id="top-social-fb"
                href={COMPANY_DETAILS.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FF5A00] transition-colors p-1"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                id="top-social-insta"
                href={COMPANY_DETAILS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FF5A00] transition-colors p-1"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                id="top-social-yt"
                href={COMPANY_DETAILS.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FF5A00] transition-colors p-1"
                aria-label="YouTube"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
              <a
                id="top-social-in"
                href={COMPANY_DETAILS.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#FF5A00] transition-colors p-1"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};




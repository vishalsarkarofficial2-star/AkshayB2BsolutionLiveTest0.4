import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  ShieldCheck,
  Plus,
  Minus
} from 'lucide-react';
import { COMPANY_DETAILS, MEGA_CATEGORIES } from '../data/servicesData';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onSelectService: (serviceName: string) => void;
}

const COMPANY_LINKS = [
  { name: 'Home', key: 'home' },
  { name: 'About Us', key: 'about-us' },
  { name: 'All Services', key: 'all-services' },
  { name: 'Contact', key: 'contact' },
  { name: 'Book Consultation', key: 'book-consultation' },
  { name: 'Make a Payment', key: 'make-payment' }
];

const COMPANY_POLICY_LINKS = [
  { name: 'Privacy Policy', key: 'privacy-policy' },
  { name: 'Terms & Conditions', key: 'terms-and-conditions' },
  { name: 'Refund & Cancellation', key: 'refund-and-cancellation' },
  { name: 'Service Delivery', key: 'service-delivery' }
];

const DESKTOP_IMPORTANT_CATEGORIES = [
  {
    title: 'BUSINESS STARTUP',
    services: [
      'Private Limited Company',
      'Sole Proprietorship Firm',
      'Limited Liability Partnership',
      'One Person Company',
      'Partnership Firm',
      'Producer Company Registration',
      'Section 8 Company',
      'NGO Registration'
    ]
  },
  {
    title: 'REGISTRATION & LICENSE',
    services: [
      'FSSAI Registration',
      'FSSAI State License',
      'MSME Registration',
      'Startup India Registration',
      'Trade License',
      'Shop and Establishment',
      'EPF & ESI Registration',
      'RERA Registration'
    ]
  },
  {
    title: 'TRADE & TAXATION',
    services: [
      'IEC Registration',
      'ICEGATE & AD Code',
      'GST Registration',
      'GST Return Filing',
      'Income Tax Return',
      'TDS Returns',
      'Accounting & Bookkeeping',
      'EPR Registration'
    ]
  },
  {
    title: 'IP & CERTIFICATIONS',
    services: [
      'Trademark Registration',
      'Trademark Objection',
      'Copyright Registration',
      'ISO 9001:2015',
      'ISO 27001 (ISMS)',
      'POSH Compliance'
    ]
  }
];

export const Footer: React.FC<FooterProps> = ({ onSelectService }) => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [openSubCategory, setOpenSubCategory] = useState<string | null>(null);

  const toggleCategory = (catId: string) => {
    if (openCategory === catId) {
      setOpenCategory(null);
      setOpenSubCategory(null);
    } else {
      setOpenCategory(catId);
      setOpenSubCategory(null);
    }
  };

  const toggleSubCategory = (subKey: string) => {
    setOpenSubCategory((prev) => (prev === subKey ? null : subKey));
  };

  return (
    <footer id="main-footer" className="bg-slate-50 text-slate-700 border-t border-slate-200 pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-200">
          {/* Column 1: Company Logo + About + Socials (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-xs overflow-hidden p-0.5">
                <BrandLogo
                  className="w-10 h-10"
                  imgClassName="w-full h-full object-contain"
                  alt={COMPANY_DETAILS.name}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#0B3D91]">
                  akshay<span className="text-[#FF5A00]">b2b</span>solutions
                </span>
                <span className="text-[11px] font-bold tracking-widest text-slate-500 uppercase -mt-1">
                  make paper work
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              India&apos;s leading technology-driven Legal Compliance, Company Registration, Tax Filing &amp; IP Protection consultancy. Empowering over 10,000+ businesses with frictionless statutory execution.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a
                id="footer-social-fb"
                href={COMPANY_DETAILS.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white border border-slate-200 hover:border-[#0B3D91] hover:bg-blue-50 text-slate-600 hover:text-[#0B3D91] flex items-center justify-center transition-colors shadow-2xs"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                id="footer-social-insta"
                href={COMPANY_DETAILS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white border border-slate-200 hover:border-[#0B3D91] hover:bg-blue-50 text-slate-600 hover:text-[#0B3D91] flex items-center justify-center transition-colors shadow-2xs"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                id="footer-social-yt"
                href={COMPANY_DETAILS.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white border border-slate-200 hover:border-[#0B3D91] hover:bg-blue-50 text-slate-600 hover:text-[#0B3D91] flex items-center justify-center transition-colors shadow-2xs"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                id="footer-social-in"
                href={COMPANY_DETAILS.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white border border-slate-200 hover:border-[#0B3D91] hover:bg-blue-50 text-slate-600 hover:text-[#0B3D91] flex items-center justify-center transition-colors shadow-2xs"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-2 font-medium">
              <ShieldCheck className="w-4 h-4 text-orange-600" />
              <span>ISO 9001:2015 &amp; ISO 27001 Certified System</span>
            </div>
          </div>

          {/* MOBILE ONLY: Nested Accordions for Category -> Sub-Category -> Services */}
          <div className="block lg:hidden space-y-3">
            {/* COMPANY Section Accordion */}
            <div className="space-y-1">
              <button
                type="button"
                onClick={() => toggleCategory('company-sec')}
                aria-expanded={openCategory === 'company-sec'}
                className="w-full flex items-center justify-between gap-2 text-xs font-bold uppercase tracking-wider text-[#0B3D91] border-b border-slate-200 pb-2 text-left cursor-pointer hover:text-[#FF5A00] transition-colors py-1 group"
              >
                <span>COMPANY</span>
                <span className="text-[#FF5A00] flex-shrink-0 font-bold">
                  {openCategory === 'company-sec' ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openCategory === 'company-sec' ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden space-y-2.5 pl-2 border-l-2 border-slate-200 my-1">
                  <ul className="space-y-2 text-xs py-1">
                    {COMPANY_LINKS.map((link) => (
                      <li key={link.name}>
                        <button
                          onClick={() => onSelectService(link.key)}
                          className="text-slate-700 hover:text-[#0B3D91] hover:underline font-semibold transition-colors text-left cursor-pointer w-full py-0.5"
                        >
                          {link.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* COMPANY POLICY Accordion */}
            <div className="space-y-1">
              <button
                type="button"
                onClick={() => toggleCategory('company-policy-sec')}
                aria-expanded={openCategory === 'company-policy-sec'}
                className="w-full flex items-center justify-between gap-2 text-xs font-bold uppercase tracking-wider text-[#0B3D91] border-b border-slate-200 pb-2 text-left cursor-pointer hover:text-[#FF5A00] transition-colors py-1 group"
              >
                <span>COMPANY POLICY</span>
                <span className="text-[#FF5A00] flex-shrink-0 font-bold">
                  {openCategory === 'company-policy-sec' ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openCategory === 'company-policy-sec' ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden space-y-2.5 pl-2 border-l-2 border-slate-200 my-1">
                  <ul className="space-y-2 text-xs py-1">
                    {COMPANY_POLICY_LINKS.map((link) => (
                      <li key={link.name}>
                        <button
                          onClick={() => onSelectService(link.key)}
                          className="text-slate-700 hover:text-[#0B3D91] hover:underline font-semibold transition-colors text-left cursor-pointer w-full py-0.5"
                        >
                          {link.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Service Categories Accordions */}
            {MEGA_CATEGORIES.map((cat) => {
              const isCatOpen = openCategory === cat.id;

              return (
                <div key={cat.id} className="space-y-1">
                  {/* Category Header (Level 1) */}
                  <button
                    type="button"
                    onClick={() => toggleCategory(cat.id)}
                    aria-expanded={isCatOpen}
                    className="w-full flex items-center justify-between gap-2 text-xs font-bold uppercase tracking-wider text-[#0B3D91] border-b border-slate-200 pb-2 text-left cursor-pointer hover:text-[#FF5A00] transition-colors py-1 group"
                  >
                    <span>{cat.title}</span>
                    <span className="text-[#FF5A00] flex-shrink-0 font-bold">
                      {isCatOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  {/* Level 1 Accordion Content (Sub-Categories) */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isCatOpen ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden space-y-2.5 pl-2 border-l-2 border-slate-200 my-1">
                      {cat.columns.map((col) => {
                        const subKey = `${cat.id}-${col.columnName}`;
                        const isSubOpen = openSubCategory === subKey;

                        return (
                          <div key={col.columnName} className="space-y-1">
                            {/* Sub-Category Header (Level 2) */}
                            <button
                              type="button"
                              onClick={() => toggleSubCategory(subKey)}
                              aria-expanded={isSubOpen}
                              className="w-full flex items-center justify-between text-xs font-semibold text-slate-800 hover:text-[#FF5A00] py-1 text-left cursor-pointer bg-slate-100/70 hover:bg-slate-100 px-2.5 rounded-md transition-colors"
                            >
                              <span className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A00]"></span>
                                {col.columnName}
                              </span>
                              <span className="text-slate-500 font-bold text-[11px]">
                                {isSubOpen ? (
                                  <Minus className="w-3.5 h-3.5" />
                                ) : (
                                  <Plus className="w-3.5 h-3.5" />
                                )}
                              </span>
                            </button>

                            {/* Level 2 Accordion Content (Services) */}
                            <div
                              className={`grid transition-all duration-250 ease-in-out ${
                                isSubOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                              }`}
                            >
                              <div className="overflow-hidden pl-4 pr-1">
                                <ul className="space-y-1.5 text-xs py-1">
                                  {col.items.map((item) => (
                                    <li key={item}>
                                      <button
                                        onClick={() => onSelectService(item)}
                                        className="text-slate-600 hover:text-[#0B3D91] hover:underline transition-colors text-left cursor-pointer w-full py-0.5"
                                      >
                                        {item}
                                      </button>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* DESKTOP ONLY: 6 Columns Grid (COMPANY + COMPANY POLICY + 4 Important Service Categories) */}
          <div className="hidden lg:grid lg:col-span-9 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5 gap-y-8">
            {/* COMPANY Column */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B3D91] border-b border-slate-200 pb-1.5">
                COMPANY
              </h4>
              <ul className="space-y-2 text-xs">
                {COMPANY_LINKS.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => onSelectService(link.key)}
                      className="text-slate-700 font-semibold hover:text-[#FF5A00] hover:underline transition-colors text-left cursor-pointer text-[12px]"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* COMPANY POLICY Column */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B3D91] border-b border-slate-200 pb-1.5">
                COMPANY POLICY
              </h4>
              <ul className="space-y-2 text-xs">
                {COMPANY_POLICY_LINKS.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => onSelectService(link.key)}
                      className="text-slate-700 font-semibold hover:text-[#FF5A00] hover:underline transition-colors text-left cursor-pointer text-[12px]"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4 Service Columns */}
            {DESKTOP_IMPORTANT_CATEGORIES.map((cat) => (
              <div key={cat.title} className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B3D91] border-b border-slate-200 pb-1.5">
                  {cat.title}
                </h4>
                <ul className="space-y-1.5 text-xs">
                  {cat.services.map((item) => (
                    <li key={item}>
                      <button
                        onClick={() => onSelectService(item)}
                        className="text-slate-600 hover:text-[#0B3D91] hover:underline transition-colors text-left cursor-pointer text-[12px]"
                      >
                        {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info Strip */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-8 border-b border-slate-200 text-xs">
          <div className="flex items-start gap-2.5">
            <Mail className="w-4 h-4 text-[#0B3D91] flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-500 block font-bold">Email:</span>
              <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-slate-800 hover:text-[#0B3D91] font-semibold">
                {COMPANY_DETAILS.email}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Phone className="w-4 h-4 text-[#0B3D91] flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-500 block font-bold">Phone:</span>
              <a href={`tel:${COMPANY_DETAILS.phoneClean}`} className="text-slate-800 hover:text-[#0B3D91] font-semibold">
                {COMPANY_DETAILS.phone}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <MapPin className="w-4 h-4 text-[#0B3D91] flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-500 block font-bold">Address:</span>
              <a
                href={COMPANY_DETAILS.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-800 hover:text-[#0B3D91] hover:underline leading-tight block"
              >
                <span className="font-semibold text-slate-700">Head Office:</span> Noida, Uttar Pradesh<br />
                <span className="font-semibold text-slate-700">Branches:</span> Kanpur &amp; Raebareli, UP
              </a>
            </div>
          </div>

          <div className="flex items-start gap-2.5">
            <Clock className="w-4 h-4 text-[#0B3D91] flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-500 block font-bold">Working Hours:</span>
              <span className="text-slate-800">
                {COMPANY_DETAILS.workingHours}
              </span>
            </div>
          </div>
        </div>

        {/* Official Disclaimer Banner */}
        <div className="mt-10 p-5 rounded-xl bg-slate-50 border border-slate-200 text-slate-500 text-[11px] sm:text-xs leading-relaxed">
          <p className="font-sans">
            <strong className="text-slate-800 font-bold block mb-1.5 uppercase tracking-wider text-[10px]">Official Disclaimer:</strong>
            This is not a Government run website and the form is not the actual registration form; it is just to collect information from our clients so that our expert can easily understand their business or needs. The fee collected on this website is a consultancy fee, separate from government fees.
          </p>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500 font-medium border-t border-slate-100">
          <div className="space-y-1.5 text-center md:text-left">
            <p>
              &copy; {new Date().getFullYear()} <span className="text-slate-800 font-bold">{COMPANY_DETAILS.legalName || COMPANY_DETAILS.name}</span>. All Rights Reserved.
            </p>
            <p className="text-[11px] text-slate-400">
              Corporate Identification Number (CIN): <span className="font-mono font-semibold text-slate-600 tracking-wider bg-slate-100 px-1.5 py-0.5 rounded">U70200UP2026PTC251575</span>
            </p>
          </div>

          {/* Secure Payment Partner Badges */}
          <div className="flex flex-col items-center md:items-end gap-2 w-full md:w-auto">
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-extrabold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              100% Secure Payment Gateways
            </span>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {/* PhonePe */}
              <div className="h-8 px-3 py-1.5 bg-white border border-slate-200 rounded-lg shadow-2xs flex items-center gap-2 hover:border-[#5F259F]/50 hover:shadow-xs transition-all duration-300">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#5F259F]" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 2H5C3.34 2 2 3.34 2 5V19C2 20.66 3.34 22 5 22H19C20.66 22 22 20.66 22 19V5C22 3.34 20.66 2 19 2ZM17.5 13H15.5V11H17.5C18.33 11 19 10.33 19 9.5C19 8.67 18.33 8 17.5 8H13V16H11V6H17.5C19.43 6 21 7.57 21 9.5C21 11.43 19.43 13 17.5 13ZM15.5 16H13V18H15.5C16.33 18 17 17.33 17 16.5C17 15.67 16.33 15 15.5 15V16Z" fill="#5F259F"/>
                </svg>
                <span className="font-sans font-black text-slate-800 text-[11px] tracking-tight">PhonePe</span>
              </div>

              {/* Paytm */}
              <div className="h-8 px-3 py-1.5 bg-white border border-slate-200 rounded-lg shadow-2xs flex items-center gap-1.5 hover:border-[#002970]/50 hover:shadow-xs transition-all duration-300">
                <span className="font-sans font-black text-[#00BAF2] text-[11px] tracking-tighter">pay</span>
                <span className="font-sans font-black text-[#002970] text-[11px] tracking-tighter">tm</span>
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
              </div>

              {/* Google Pay */}
              <div className="h-8 px-3 py-1.5 bg-white border border-slate-200 rounded-lg shadow-2xs flex items-center gap-2 hover:border-slate-300 hover:shadow-xs transition-all duration-300">
                <div className="flex items-center gap-0.5">
                  <span className="w-1.5 h-3 bg-[#4285F4] rounded-xs"></span>
                  <span className="w-1.5 h-3 bg-[#EA4335] rounded-xs"></span>
                  <span className="w-1.5 h-3 bg-[#FBBC05] rounded-xs"></span>
                  <span className="w-1.5 h-3 bg-[#34A853] rounded-xs"></span>
                </div>
                <span className="font-sans font-extrabold text-slate-700 text-[11px] tracking-tight">G Pay</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

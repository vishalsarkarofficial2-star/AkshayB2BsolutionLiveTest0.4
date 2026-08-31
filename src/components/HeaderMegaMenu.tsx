import React, { useState, useEffect } from 'react';
import {
  ChevronDown,
  ChevronRight,
  Menu,
  X,
  Search,
  Sparkles,
  ArrowRight,
  PhoneCall,
  ShieldCheck,
  Plus,
  Minus
} from 'lucide-react';
import { MEGA_CATEGORIES, COMPANY_DETAILS, ALL_SERVICES_LIST } from '../data/servicesData';
import { MegaCategory } from '../types';
import { BrandLogo } from './BrandLogo';

interface HeaderMegaMenuProps {
  onSelectService: (serviceName: string) => void;
  onOpenConsultation: () => void;
}

export const HeaderMegaMenu: React.FC<HeaderMegaMenuProps> = ({
  onSelectService,
  onOpenConsultation
}) => {
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileCategory, setExpandedMobileCategory] = useState<string | null>(null);
  const [expandedMobileSubCategory, setExpandedMobileSubCategory] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveMegaMenu(null);
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Filtered search results
  const searchResults = searchQuery.trim().length > 1
    ? ALL_SERVICES_LIST.filter(s => s.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 8)
    : [];

  const handleServiceClick = (serviceName: string) => {
    setActiveMegaMenu(null);
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
    setSearchQuery('');
    onSelectService(serviceName);
  };

  const activeCategory = MEGA_CATEGORIES.find((cat) => cat.id === activeMegaMenu);

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200'
          : 'bg-white border-b border-slate-200'
      }`}
      onMouseLeave={() => setActiveMegaMenu(null)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <a
              id="header-brand-logo"
              href="#"
              className="flex items-center gap-2.5 group"
            >
              <div className="w-10 h-10 rounded-lg bg-white border border-slate-200/80 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform overflow-hidden p-0.5">
                <BrandLogo
                  className="w-10 h-10"
                  imgClassName="w-full h-full object-contain"
                  alt={COMPANY_DETAILS.name}
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#0B3D91] group-hover:text-blue-900 transition-colors">
                  akshay<span className="text-[#FF5A00]">b2b</span>solutions
                </span>
                <span className="text-[11px] font-bold tracking-widest text-slate-500 uppercase -mt-1 flex items-center gap-1">
                  <span>make paper work</span>
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#FF5A00] animate-pulse"></span>
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1" aria-label="Main Navigation">
            {MEGA_CATEGORIES.map((cat: MegaCategory) => {
              const isOpen = activeMegaMenu === cat.id;
              return (
                <div
                  key={cat.id}
                  onMouseEnter={() => setActiveMegaMenu(cat.id)}
                >
                  <button
                    id={`nav-item-${cat.id}`}
                    onClick={() => setActiveMegaMenu(isOpen ? null : cat.id)}
                    className={`px-3 py-2 rounded-md text-xs font-bold uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer select-none ${
                      isOpen
                        ? 'text-[#0B3D91] bg-blue-50/90 border-b-2 border-[#FF5A00]'
                        : 'text-slate-700 hover:text-[#0B3D91] hover:bg-slate-50'
                    }`}
                    aria-expanded={isOpen}
                  >
                    <span>{cat.title}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#0B3D91]' : 'text-slate-400'
                      }`}
                    />
                  </button>
                </div>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger */}
            <div className="relative">
              <button
                id="header-search-toggle"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 rounded-lg text-slate-600 hover:text-[#0B3D91] hover:bg-slate-100 transition-colors"
                aria-label="Search Services"
                title="Search 80+ Legal & Compliance Services"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* Search Dropdown Modal */}
              {isSearchOpen && (
                <div
                  id="search-popup-panel"
                  className="absolute right-0 top-12 w-80 sm:w-96 bg-white border border-slate-200 rounded-xl shadow-2xl p-4 z-50 animate-in fade-in slide-in-from-top-2"
                >
                  <div className="relative">
                    <input
                      id="search-services-input"
                      type="text"
                      placeholder="Search FSSAI, GST, Pvt Ltd, IEC, ISO..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      autoFocus
                      className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 pl-9 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0B3D91] focus:ring-1 focus:ring-[#0B3D91]"
                    />
                    <Search className="w-4 h-4 text-slate-400 absolute left-2.5 top-2.5" />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="text-slate-400 hover:text-slate-700 absolute right-2.5 top-2.5"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  {searchResults.length > 0 ? (
                    <div className="mt-3 divide-y divide-slate-100 max-h-60 overflow-y-auto">
                      {searchResults.map((item, idx) => (
                        <button
                          key={idx}
                          id={`search-item-${idx}`}
                          onClick={() => handleServiceClick(item)}
                          className="w-full text-left py-2 px-2 text-xs text-slate-700 hover:bg-blue-50 hover:text-[#0B3D91] rounded flex items-center justify-between transition-colors"
                        >
                          <span className="font-medium">{item}</span>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                        </button>
                      ))}
                    </div>
                  ) : searchQuery.length > 1 ? (
                    <div className="mt-3 text-center py-4 text-xs text-slate-500">
                      No matching services found for &quot;{searchQuery}&quot;
                    </div>
                  ) : (
                    <div className="mt-3 text-[11px] text-slate-500">
                      <p className="font-bold text-slate-700 mb-1.5">Popular Searches:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {['Pvt Ltd Company', 'FSSAI License', 'IEC Code', 'GST Registration', 'Trademark', 'ISO 9001'].map((tag) => (
                          <span
                            key={tag}
                            onClick={() => handleServiceClick(tag)}
                            className="bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#0B3D91] px-2 py-0.5 rounded cursor-pointer transition-colors border border-slate-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Book Consultation Button */}
            <button
              id="header-consult-btn"
              onClick={onOpenConsultation}
              className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0B3D91] hover:bg-blue-900 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#FF5A00]" />
              <span>Get Consultation</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-700 hover:text-[#0B3D91] hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Mobile Navigation"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-slate-700" />}
            </button>
          </div>
        </div>

        {/* Desktop Mega Menu Dropdown Panel (Anchored to Max-W Container) */}
        {activeCategory && (
          <div
            id={`megamenu-panel-${activeCategory.id}`}
            onMouseEnter={() => setActiveMegaMenu(activeCategory.id)}
            onMouseLeave={() => setActiveMegaMenu(null)}
            className="hidden xl:grid absolute left-4 right-4 sm:left-6 sm:right-6 top-[calc(100%-2px)] bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden p-6 grid-cols-12 gap-6 animate-in fade-in slide-in-from-top-1 duration-150 z-50 text-slate-800"
          >
            {/* Subcategory Columns */}
            <div
              className={`grid gap-5 ${
                activeCategory.columns.length === 5
                  ? 'col-span-9 grid-cols-5'
                  : activeCategory.columns.length === 4
                  ? 'col-span-8 grid-cols-4'
                  : activeCategory.columns.length === 3
                  ? 'col-span-8 grid-cols-3'
                  : 'col-span-8 grid-cols-2'
              }`}
            >
              {activeCategory.columns.map((col, idx) => (
                <div key={idx} className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B3D91] border-b border-slate-100 pb-1.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A00]"></span>
                    <span>{col.columnName}</span>
                  </h4>
                  <ul className="space-y-1.5">
                    {col.items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        <button
                          id={`mega-link-${item.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                          onClick={() => handleServiceClick(item)}
                          className="text-left text-xs text-slate-600 hover:text-[#0B3D91] hover:font-semibold hover:translate-x-1 transition-all block w-full py-0.5 line-clamp-1 group/item cursor-pointer"
                        >
                          <span className="group-hover/item:text-[#0B3D91]">{item}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Promo Card on Right Side */}
            <div className={`${activeCategory.columns.length === 5 ? 'col-span-3' : 'col-span-4'} bg-slate-50 border border-slate-200 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden group`}>
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-orange-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform pointer-events-none"></div>

              <div className="relative z-10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-orange-100 text-orange-900 rounded-full border border-orange-200 flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5 text-[#FF5A00]" />
                    <span>{activeCategory.promo.badge}</span>
                  </span>
                </div>

                <div className="h-24 w-full rounded-lg overflow-hidden my-2 border border-slate-200">
                  <img
                    src={activeCategory.promo.image}
                    alt={activeCategory.promo.title}
                    width={300}
                    height={100}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <h5 className="text-sm font-bold text-slate-900 group-hover:text-[#0B3D91] transition-colors">
                  {activeCategory.promo.title}
                </h5>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {activeCategory.promo.description}
                </p>
              </div>

              <div className="relative z-10 pt-3">
                <button
                  id={`mega-promo-btn-${activeCategory.id}`}
                  onClick={() => handleServiceClick(activeCategory.promo.ctaAction)}
                  className="w-full text-xs font-bold py-2 px-3 bg-[#0B3D91] hover:bg-blue-900 text-white rounded-lg flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer"
                >
                  <span>{activeCategory.promo.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF5A00]" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Drawer Navigation (Accordion Style) */}
      {isMobileMenuOpen && (
        <div
          id="mobile-drawer-menu"
          className="xl:hidden fixed inset-x-0 top-20 bottom-0 bg-white/98 backdrop-blur-lg border-t border-slate-200 overflow-y-auto p-4 z-50 animate-in slide-in-from-top duration-200 text-slate-800"
        >
          {/* Mobile Menu Header with Close Icon */}
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
            <span className="text-xs font-extrabold text-[#0B3D91] tracking-wider uppercase flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              Navigation Menu
            </span>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-1.5 rounded-lg text-slate-500 hover:text-[#0B3D91] hover:bg-slate-100 transition-colors flex items-center justify-center cursor-pointer border border-slate-200"
              aria-label="Close Menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Contact Badge in Mobile Menu */}
          <div className="bg-slate-50 border border-slate-200 p-3 rounded-lg mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#0B3D91]" />
              <span className="text-xs font-bold text-slate-800">ISO 9001:2015 Certified Portal</span>
            </div>
            <a
              href={`tel:${COMPANY_DETAILS.phoneClean}`}
              className="text-xs text-[#0B3D91] font-bold flex items-center gap-1 bg-blue-50 px-2.5 py-1 rounded-md"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#FF5A00]" />
              <span>Call Us</span>
            </a>
          </div>

          <div className="space-y-2.5">
            {MEGA_CATEGORIES.map((cat) => {
              const isExpanded = expandedMobileCategory === cat.id;
              return (
                <div
                  key={cat.id}
                  className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-xs"
                >
                  {/* Category Header (Level 1) */}
                  <button
                    id={`mobile-accordion-btn-${cat.id}`}
                    type="button"
                    onClick={() => setExpandedMobileCategory(isExpanded ? null : cat.id)}
                    className="w-full px-4 py-3.5 text-left font-extrabold text-xs uppercase tracking-wider text-slate-800 flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span>{cat.title}</span>
                    <span className="text-[#FF5A00] flex-shrink-0 font-bold">
                      {isExpanded ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  {/* Level 1 Accordion Content (Sub-Categories) */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isExpanded ? 'grid-rows-[1fr] opacity-100 border-t border-slate-100' : 'grid-rows-[0fr] opacity-0 h-0 overflow-hidden'
                    }`}
                  >
                    <div className="overflow-hidden bg-slate-50/50 p-3 space-y-2.5">
                      {cat.columns.map((col, cIdx) => {
                        const subKey = `${cat.id}-${col.columnName}`;
                        const isSubExpanded = expandedMobileSubCategory === subKey;

                        return (
                          <div key={cIdx} className="space-y-1">
                            {/* Sub-Category Header (Level 2) */}
                            <button
                              type="button"
                              onClick={() => setExpandedMobileSubCategory(isSubExpanded ? null : subKey)}
                              className="w-full flex items-center justify-between text-xs font-bold text-slate-700 hover:text-[#0B3D91] py-2 text-left cursor-pointer bg-white border border-slate-200/60 hover:bg-slate-50 px-3 rounded-lg transition-colors shadow-2xs"
                            >
                              <span className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A00]"></span>
                                <span>{col.columnName}</span>
                              </span>
                              <span className="text-slate-500 font-bold">
                                {isSubExpanded ? (
                                  <Minus className="w-3.5 h-3.5" />
                                ) : (
                                  <Plus className="w-3.5 h-3.5" />
                                )}
                              </span>
                            </button>

                            {/* Level 2 Accordion Content (Services) */}
                            <div
                              className={`grid transition-all duration-200 ease-in-out ${
                                isSubExpanded ? 'grid-rows-[1fr] opacity-100 mt-1 pl-2' : 'grid-rows-[0fr] opacity-0 h-0 overflow-hidden'
                              }`}
                            >
                              <div className="overflow-hidden bg-white/50 border-l-2 border-slate-200 py-1.5 pl-3.5 pr-1 space-y-1 rounded-r-lg">
                                {col.items.map((item, iIdx) => (
                                  <button
                                    key={iIdx}
                                    id={`mobile-subitem-${item.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                                    onClick={() => handleServiceClick(item)}
                                    className="text-left text-xs text-slate-600 hover:text-[#0B3D91] hover:font-bold py-1 flex items-center gap-2 transition-all cursor-pointer w-full"
                                  >
                                    <ChevronRight className="w-3.5 h-3.5 text-[#FF5A00]" />
                                    <span className="line-clamp-1">{item}</span>
                                  </button>
                                ))}
                              </div>
                            </div>
                          </div>
                        );
                      })}

                      {/* Promo highlight inside mobile category */}
                      <div className="mt-3 p-3 rounded-xl bg-orange-50/75 border border-orange-200 flex items-center justify-between shadow-3xs">
                        <div className="space-y-0.5">
                          <p className="text-xs font-black text-orange-950">{cat.promo.title}</p>
                          <p className="text-[10px] text-orange-800 line-clamp-1">{cat.promo.description}</p>
                        </div>
                        <button
                          onClick={() => handleServiceClick(cat.promo.ctaAction)}
                          className="px-3 py-1 bg-[#0B3D91] hover:bg-blue-900 text-white text-xs font-bold rounded-lg cursor-pointer transition-colors shadow-sm"
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200 space-y-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 bg-[#0B3D91] hover:bg-blue-900 text-white font-bold text-sm rounded-lg flex items-center justify-center gap-2 shadow-md"
            >
              <PhoneCall className="w-4 h-4 text-[#FF5A00]" />
              <span>Book Expert Consultation</span>
            </button>
            <div className="text-center text-xs text-slate-500">
              <p>Email: {COMPANY_DETAILS.email}</p>
              <p className="mt-1">Mon-Sat: 10:00 AM - 06:30 PM</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

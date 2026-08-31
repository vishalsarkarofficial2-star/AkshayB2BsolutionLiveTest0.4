import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Zap,
  Award,
  Sparkles,
  ArrowRight,
  Building2,
  Utensils,
  Globe2,
  FileSpreadsheet,
  CheckCircle2,
  Clock,
  FileCheck
} from 'lucide-react';
import { COMPANY_DETAILS } from '../data/servicesData';
import akshayHeroBanner from '../assets/images/akshay_hero_banner_1787759206181.jpg';

interface HeroCarouselProps {
  onSelectService: (serviceName: string) => void;
  onOpenConsultation: () => void;
}

// Google Drive direct embed / thumbnail URLs with standard view link format
const USER_BANNER_URL = 'https://lh3.googleusercontent.com/d/1KES2Unoy-nt69g52LM5XtCZGzrOni-22';
const USER_BANNER_URL_2 = 'https://lh3.googleusercontent.com/d/1EORLf2Dn-KtfSVzQoyf4-EKjufkEJI_H';
const USER_BANNER_URL_3 = 'https://lh3.googleusercontent.com/d/1J2hUVHhnNKoceo4gWhSKLf6MbPhOUsyz';
const USER_BANNER_URL_4 = 'https://lh3.googleusercontent.com/d/1b1e3b711q5xV8AnFLT280tzEK1m8Egb9';
const USER_BANNER_URL_5 = 'https://lh3.googleusercontent.com/d/1_34_1nkVnNAfp5mtfFY-aB5_x_-t6aQg';

export const HERO_SLIDES = [
  {
    id: 1,
    serviceKey: 'Private Limited Company',
    tag: 'AI-Powered Compliance Platform',
    title: "India's Fastest Service Provider with AI Technology",
    headlineEmphasis: 'with AI Technology',
    subtitle: 'Registration, Compliances and filings in one unified digital ecosystem.',
    highlight: 'Zero error document automation backed by Senior Chartered Accountants & Advocates.',
    image: USER_BANNER_URL,
    fallbackImage: akshayHeroBanner,
    accentBadge: '100% Online & Paperless',
    stat1: '24-48 Hrs TAT',
    stat2: 'AI Auto-Validated',
    stat3: 'Zero Discrepancy',
    icon: Zap
  },
  {
    id: 2,
    serviceKey: 'Private Limited Company',
    tag: 'Fast-Track Business Incorporation',
    title: 'Launch Your Private Limited Company in 3-5 Days',
    headlineEmphasis: 'in 3-5 Days',
    subtitle: 'Complete SPICe+ filing, Name Approval, 2 DSCs, DIN & Corporate PAN/TAN included.',
    highlight: 'Zero government fee promotion on nominal capital up to ₹15 Lakhs under MCA rules.',
    image: USER_BANNER_URL_2,
    fallbackImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop&q=80',
    accentBadge: 'MCA V3 Compliant',
    stat1: '₹0 Govt MCA Fee',
    stat2: '2 Free DSCs Included',
    stat3: 'Bank A/c Assistance',
    icon: Building2
  },
  {
    id: 3,
    serviceKey: 'IEC Registration',
    tag: 'Global Trade & Export Gateway',
    title: 'Instant DGFT IEC Code & Icegate AD Code Registration',
    headlineEmphasis: 'Instant DGFT IEC',
    subtitle: 'Expand your market worldwide with seamless customs clearance and foreign trade perks.',
    highlight: 'Same day electronic certificate issuance with lifetime validity across all Indian ports.',
    image: USER_BANNER_URL_3,
    fallbackImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&auto=format&fit=crop&q=80',
    accentBadge: 'DGFT Certified Partner',
    stat1: 'Same Day Issuance',
    stat2: 'Lifetime Validity',
    stat3: 'All Indian Ports',
    icon: Globe2
  },
  {
    id: 4,
    serviceKey: 'FSSAI Registration',
    tag: 'Food Safety & FoSCoS Licensing',
    title: 'FSSAI Basic, State & Central License in 24-48 Hours',
    headlineEmphasis: 'in 24-48 Hours',
    subtitle: 'FoSCoS registration for cloud kitchens, restaurants, food manufacturers & exporters.',
    highlight: 'Full regulatory compliance on food packaging labels, hygiene audits & mandatory returns.',
    image: USER_BANNER_URL_4,
    fallbackImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&auto=format&fit=crop&q=80',
    accentBadge: 'Food Safety Experts',
    stat1: '1-5 Yrs Validity',
    stat2: 'FoSCoS Compliant',
    stat3: 'Label Guidelines',
    icon: Utensils
  },
  {
    id: 5,
    serviceKey: 'Trademark Registration',
    tag: 'Brand Protection & IP India',
    title: 'Protect Your Brand with Trademark (™) Registration',
    headlineEmphasis: 'Trademark (™) Protection',
    subtitle: 'Secure nationwide brand exclusivity and legally defend against counterfeiters.',
    highlight: 'Claim 50% government fee concession with MSME Udyam certificate registration.',
    image: USER_BANNER_URL_5,
    fallbackImage: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=1200&auto=format&fit=crop&q=80',
    accentBadge: 'Same-Day TM Filing',
    stat1: '50% MSME Rebate',
    stat2: '10 Yrs Protection',
    stat3: 'Class Search Free',
    icon: ShieldCheck
  }
];

const QUICK_ACCESS_PILLS = [
  { name: 'Private Limited Company', icon: Building2 },
  { name: 'FSSAI Registration', icon: Utensils },
  { name: 'IEC Registration', icon: Globe2 },
  { name: 'GST Registration', icon: FileSpreadsheet },
  { name: 'Trademark Registration', icon: ShieldCheck },
  { name: 'ISO Certificate', icon: Award },
  { name: 'Company Compliances', icon: FileCheck }
];

export const HeroCarousel: React.FC<HeroCarouselProps> = ({
  onSelectService,
  onOpenConsultation
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Preload all banner images immediately on mount so all slides appear instantly without delay
  useEffect(() => {
    HERO_SLIDES.forEach((s) => {
      const img = new Image();
      img.src = s.image;
      if (s.fallbackImage) {
        const fallbackImg = new Image();
        fallbackImg.src = s.fallbackImage;
      }
    });
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const slide = HERO_SLIDES[currentSlide];
  const CurrentIcon = slide.icon;

  return (
    <section
      id="hero-section"
      className="relative bg-gradient-to-br from-[#0B3D91] via-[#0D47A1] to-[#082a66] text-white overflow-hidden flex flex-col justify-between border-b border-slate-200 pt-6 sm:pt-8 pb-8 sm:pb-10"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Dynamic Background Images Pre-rendered for Instant Crossfade */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {HERO_SLIDES.map((s, idx) => (
          <img
            key={`bg-img-${s.id}`}
            src={s.image}
            alt={s.title}
            width={1200}
            height={600}
            loading="eager"
            decoding="async"
            onError={(e) => {
              if (s.fallbackImage && e.currentTarget.src !== s.fallbackImage) {
                e.currentTarget.src = s.fallbackImage;
              }
            }}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 ease-out filter brightness-90 saturate-125 ${
              idx === currentSlide
                ? 'opacity-25 sm:opacity-30 scale-105'
                : 'opacity-0 scale-100 pointer-events-none'
            }`}
            referrerPolicy="no-referrer"
          />
        ))}
        {/* Soft gradient wash to maintain crisp text contrast while keeping image visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B3D91] via-[#0B3D91]/90 to-[#0B3D91]/60 lg:to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#082a66] via-transparent to-[#0B3D91]/60"></div>
        <div className="absolute top-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-[#FF5A00]/10 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      {/* Main Hero Grid Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-2 sm:pt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Dynamic Hero Content for Active Slide */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            
            {/* Tag Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-black tracking-wide uppercase shadow-sm bg-[#FF5A00] text-white shadow-orange-950/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{slide.tag}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-blue-100 text-[11px] sm:text-xs font-bold border border-white/20 backdrop-blur-xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FF5A00]" />
                <span>{slide.accentBadge}</span>
              </span>
            </div>

            {/* Main Headline for Active Slide */}
            <h1
              id="hero-main-heading"
              className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight"
            >
              {slide.title}
            </h1>

            {/* Tagline Sub-line */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base text-blue-100 font-normal leading-relaxed">
                {slide.subtitle}
              </p>
              
              <div className="p-3 rounded-xl bg-white/10 border border-white/15 backdrop-blur-xs flex items-start gap-2.5 text-xs sm:text-sm text-orange-200">
                <Zap className="w-4 h-4 text-[#FF5A00] flex-shrink-0 mt-0.5" />
                <span className="font-medium text-white">{slide.highlight}</span>
              </div>
            </div>

            {/* Popular Quick Access Services */}
            <div className="space-y-2 pt-1">
              <p className="text-[11px] uppercase font-bold tracking-wider text-blue-200">
                Popular Quick Access Filings:
              </p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {QUICK_ACCESS_PILLS.map((pill, idx) => {
                  const Icon = pill.icon;
                  return (
                    <button
                      key={idx}
                      id={`hero-pill-${idx}`}
                      onClick={() => onSelectService(pill.name)}
                      className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-[#FF5A00] text-xs font-semibold transition-all shadow-xs hover:scale-[1.02] cursor-pointer group backdrop-blur-xs active:scale-95"
                    >
                      <Icon className="w-3.5 h-3.5 text-[#FF5A00] group-hover:scale-110 transition-transform" />
                      <span>{pill.name}</span>
                      <ArrowRight className="w-3 h-3 text-blue-200 group-hover:text-[#FF5A00] group-hover:translate-x-0.5 transition-all" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Action CTA Buttons - Mobile Optimized */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                id="hero-book-consultation-btn"
                onClick={onOpenConsultation}
                className="w-full sm:w-auto justify-center px-6 py-3.5 rounded-xl bg-[#FF5A00] hover:bg-orange-600 text-white font-extrabold text-sm sm:text-base shadow-lg hover:shadow-xl flex items-center gap-2 transition-all cursor-pointer active:scale-98"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-apply-service-btn"
                onClick={() => onSelectService(slide.serviceKey)}
                className="w-full sm:w-auto justify-center px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base border border-white/30 transition-all flex items-center gap-2 backdrop-blur-xs cursor-pointer active:scale-98"
              >
                <span>Apply for {slide.serviceKey}</span>
              </button>
            </div>

            {/* Trust Badges - Mobile Optimized Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-4 pt-3 text-xs text-blue-100 border-t border-white/15">
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#FF5A00] shrink-0" />
                <span className="truncate">1,00,000+ Registered</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#FF5A00] shrink-0" />
                <span className="truncate">ISO 9001:2015 &amp; 27001</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <Clock className="w-4 h-4 text-[#FF5A00] shrink-0" />
                <span className="truncate">{COMPANY_DETAILS.tagline}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Prominent, High-Visibility Hero Banner Card (Mobile Adjusted) */}
          <div className="lg:col-span-5 flex justify-center w-full mt-2 lg:mt-0">
            <div
              id="hero-active-banner-card"
              className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-white/40 group hover:border-[#FF5A00] transition-all duration-300"
            >
              {/* High-Resolution Visible Banner Image Frame with Responsive Fit for All Devices */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:h-64 w-full overflow-hidden bg-slate-950 flex items-center justify-center">
                {HERO_SLIDES.map((s, idx) => (
                  <img
                    key={`card-img-${s.id}`}
                    src={s.image}
                    alt={s.title}
                    width={600}
                    height={350}
                    loading="eager"
                    decoding="async"
                    onError={(e) => {
                      if (s.fallbackImage && e.currentTarget.src !== s.fallbackImage) {
                        e.currentTarget.src = s.fallbackImage;
                      }
                    }}
                    className={`absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700 filter brightness-95 contrast-105 ${
                      idx === currentSlide
                        ? 'opacity-100'
                        : 'opacity-0 pointer-events-none'
                    }`}
                    referrerPolicy="no-referrer"
                  />
                ))}
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30 pointer-events-none"></div>
                
                {/* Top Badge on Banner Image */}
                <div className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 right-2.5 sm:right-3 flex items-center justify-between">
                  <span className="px-2.5 sm:px-3 py-1 rounded-full bg-[#0B3D91]/90 backdrop-blur-md text-[#FF5A00] text-[10px] sm:text-xs font-black uppercase tracking-wider border border-white/20 shadow-md">
                    Banner {slide.id} of {HERO_SLIDES.length}
                  </span>
                  <span className="px-2 sm:px-2.5 py-1 rounded-full bg-[#FF5A00] text-white text-[10px] sm:text-[11px] font-bold shadow-md flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Active 2026</span>
                  </span>
                </div>

                {/* Bottom Overlay Info on Image */}
                <div className="absolute bottom-2.5 sm:bottom-3 left-2.5 sm:left-3 right-2.5 sm:right-3 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <CurrentIcon className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#FF5A00]" />
                    <span className="text-[11px] sm:text-xs font-bold text-orange-300 uppercase tracking-wider">
                      {slide.tag}
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-white line-clamp-1">
                    {slide.title}
                  </h4>
                </div>
              </div>

              {/* Banner Details Body */}
              <div className="p-4 sm:p-5 text-slate-900 bg-white space-y-3 sm:space-y-4">
                {/* 3 Key Stats Badges */}
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2 text-center">
                  <div className="p-1.5 sm:p-2 rounded-xl bg-blue-50 border border-blue-100">
                    <span className="text-[9px] sm:text-[10px] uppercase font-bold text-slate-500 block truncate">Speed</span>
                    <span className="text-[11px] sm:text-xs font-extrabold text-[#0B3D91] block truncate">{slide.stat1}</span>
                  </div>
                  <div className="p-1.5 sm:p-2 rounded-xl bg-orange-50 border border-orange-100">
                    <span className="text-[9px] sm:text-[10px] uppercase font-bold text-slate-500 block truncate">Standard</span>
                    <span className="text-[11px] sm:text-xs font-extrabold text-orange-800 block truncate">{slide.stat2}</span>
                  </div>
                  <div className="p-1.5 sm:p-2 rounded-xl bg-orange-50 border border-orange-100">
                    <span className="text-[9px] sm:text-[10px] uppercase font-bold text-slate-500 block truncate">Guarantee</span>
                    <span className="text-[11px] sm:text-xs font-extrabold text-orange-800 block truncate">{slide.stat3}</span>
                  </div>
                </div>

                {/* Banner Action Footer & Slide Navigation */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-100 gap-2">
                  <div className="flex items-center gap-1 sm:gap-1.5">
                    <button
                      id="hero-card-prev-btn"
                      onClick={prevSlide}
                      className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                      aria-label="Previous Slide"
                      title="Previous Slide"
                    >
                      <ChevronLeft className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                    </button>
                    {/* Slide dots */}
                    <div className="flex items-center gap-1 px-1">
                      {HERO_SLIDES.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentSlide(idx)}
                          className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                            currentSlide === idx
                              ? 'w-4 sm:w-5 bg-[#0B3D91]'
                              : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                          }`}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                    <button
                      id="hero-card-next-btn"
                      onClick={nextSlide}
                      className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                      aria-label="Next Slide"
                      title="Next Slide"
                    >
                      <ChevronRight className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => onSelectService(slide.serviceKey)}
                    className="px-3 sm:px-4 py-2 bg-[#0B3D91] hover:bg-blue-900 text-white text-[11px] sm:text-xs font-extrabold rounded-lg shadow-sm flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap"
                  >
                    <span>Instant Filing</span>
                    <ArrowRight className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#FF5A00]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { AppBannerImage } from '../components/AppBannerImage';
import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Zap,
  Award,
  CheckCircle2,
  Clock,
  ArrowRight,
  Phone,
  Mail,
  FileText,
  Building2,
  Users,
  ChevronDown,
  Star,
  Download,
  Calendar,
  Check,
  TrendingUp,
  Briefcase,
  Sparkles,
  Search,
  ExternalLink,
  Lock,
  RotateCcw,
  Smartphone,
  Scale,
  BadgeCheck,
  Share2,
  HelpCircle,
  IndianRupee,
  Layers,
  AlertCircle
} from 'lucide-react';
import { ServiceDetailConfig } from '../data/categoryServices/types';
import { COMPANY_DETAILS, INDIAN_STATES_AND_UTS, BUSINESS_TYPES, BUSINESS_ACTIVITIES } from '../data/servicesData';
import { HeaderMegaMenu } from '../components/HeaderMegaMenu';
import { TopUtilityBar } from '../components/TopUtilityBar';
import { AuthModal } from '../components/AuthModal';
import { Footer } from '../components/Footer';
import { FssaiRegistrationMultiStepForm } from '../components/FssaiRegistrationMultiStepForm';
import { ExportServicesLeadForm } from '../components/ExportServicesLeadForm';

interface CategoryServiceDetailLandingProps {
  service: ServiceDetailConfig;
  onBackToHome: () => void;
  onSelectService: (serviceName: string) => void;
  onOpenBrochure: () => void;
  onOpenAppointment: () => void;
}

const TOC_LINKS = [
  { id: 'overview', label: 'Overview' },
  { id: 'registration', label: 'Registration Process' },
  { id: 'what-is', label: 'What is Service' },
  { id: 'key-characteristics', label: 'Key Characteristics' },
  { id: 'importance-benefits', label: 'Importance & Benefits' },
  { id: 'packages', label: 'Package & Pricing' },
  { id: 'types', label: 'Types / Sub-Categories' },
  { id: 'comparison-tables', label: 'Comparison' },
  { id: 'laws-governing', label: 'Laws Governing' },
  { id: 'eligibility', label: 'Eligibility & Documents' },
  { id: 'step-by-step-process', label: 'Step-by-Step Process' },
  { id: 'compliance', label: 'Post-Registration' },
  { id: 'timelines', label: 'Timelines' },
  { id: 'certification', label: 'Certification' },
  { id: 'fees', label: 'Fees Structure' },
  { id: 'taxation', label: 'Taxation & Benefits' },
  { id: 'why-us', label: 'Why Akshay B2B' },
  { id: 'faqs', label: "FAQ's" }
];

export function CategoryServiceDetailLanding({
  service,
  onBackToHome,
  onSelectService,
  onOpenBrochure,
  onOpenAppointment
}: CategoryServiceDetailLandingProps) {
  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [state, setState] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [businessActivity, setBusinessActivity] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Modal State
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  // Active TOC Section
  const [activeToc, setActiveToc] = useState('overview');

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Calculate pricing status
  const hasPricing = service.priceType !== 'no_price_show' &&
    service.priceDisplay !== 'Custom Quote' &&
    service.priceDisplay !== 'Custom Quote + Govt Fee' &&
    Boolean(service.price) &&
    service.price !== 'Custom Quote' &&
    service.price !== 'Custom' &&
    service.price !== 'Contact Us';

  // Dynamic SEO & Meta Update on Mount/Change
  useEffect(() => {
    const pageTitle = service.metaTitle || `Apply Online ${service.name} | ${service.name} Service - Akshayb2bsolutions`;
    document.title = pageTitle;

    const updateMeta = (nameAttr: string, valueAttr: string, content: string) => {
      let meta = document.querySelector(`meta[${nameAttr}="${valueAttr}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(nameAttr, valueAttr);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    const desc = service.metaDescription || `Apply online for ${service.name} with Akshayb2bsolutions. Fast, secure, and hassle-free. Call us today at ${COMPANY_DETAILS.phone}.`;
    const kws = (service.seoKeywords || service.keywords || [service.name, `${service.name} registration`, `${service.name} online`]).join(', ');

    updateMeta('name', 'description', desc);
    updateMeta('name', 'keywords', kws);
    updateMeta('property', 'og:title', pageTitle);
    updateMeta('property', 'og:description', desc);
    updateMeta('name', 'twitter:title', pageTitle);
    updateMeta('name', 'twitter:description', desc);

    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [service]);

  // ScrollSpy for TOC
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const item of TOC_LINKS) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveToc(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFullName('');
      setEmail('');
      setPhone('');
      setState('');
      setBusinessType('');
      setBusinessActivity('');
    }, 1200);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div id={`page-${service.slug}`} className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased">
      {/* Top Utility Bar */}
      <TopUtilityBar
        onOpenAppointment={onOpenAppointment}
        onOpenBrochure={onOpenBrochure}
        onOpenLogin={() => setIsAuthOpen(true)}
      />

      {/* Main Header with Mega Menu */}
      <HeaderMegaMenu
        onSelectService={(sName) => onSelectService(sName)}
        onOpenBrochure={onOpenBrochure}
        onOpenAppointment={onOpenAppointment}
        onGoHome={onBackToHome}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200/80 py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto text-xs text-slate-500 flex items-center gap-2 flex-wrap font-medium">
          <button 
            onClick={onBackToHome}
            className="text-[#0B3D91] hover:text-[#FF5A00] transition-colors cursor-pointer"
          >
            Home
          </button>
          <span className="text-slate-400">&gt;</span>
          {(service.parentCategory || service.category) && (
            <>
              <span className="text-[#0B3D91] font-semibold">{service.parentCategory || service.category}</span>
              <span className="text-slate-400">&gt;</span>
            </>
          )}
          <span className="text-slate-900 font-bold">{service.name}</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0D47A1] via-[#112d4e] to-[#0f3460] text-white pt-10 pb-16 lg:pt-14 lg:pb-20 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-orange-400/10 border border-orange-400/40 px-3.5 py-1.5 rounded-full text-orange-300 text-xs sm:text-sm font-semibold tracking-wide shadow-sm backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-orange-400" />
                <span>{service.specialCallout || 'Certified Legal & Compliance Services'}</span>
              </div>

              {/* H1 Heading */}
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                {service.name}
              </h1>

              {/* Subheading / Price Hook */}
              <p className="text-lg sm:text-xl font-medium text-orange-400 leading-relaxed">
                {service.heroPriceHook}
              </p>

              {/* Intro Paragraph */}
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed text-justify">
                {service.heroIntro}
              </p>

              {/* Key Deliverables Checkpoints */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {service.keyTags.map((tag, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 bg-white/5 border border-white/10 rounded-lg p-2.5 backdrop-blur-xs text-xs sm:text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                    <span className="text-slate-100 font-medium">{tag}</span>
                  </div>
                ))}
              </div>

              {/* Trust Indicators Strip */}
              <div className="pt-4 border-t border-slate-700/60 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-orange-400" />
                  <span>100% Government Portal Verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-orange-400" />
                  <span>{service.timelines.tat}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-400" />
                  <span>CA / CS Expert Assistance</span>
                </div>
              </div>

              {/* Quick Contact Line */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-1">
                <span>Direct Support:</span>
                <a
                  href={`tel:${COMPANY_DETAILS.phoneClean}`}
                  className="text-orange-400 font-semibold hover:underline flex items-center gap-1"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {COMPANY_DETAILS.phone}
                </a>
                <span>|</span>
                <a
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="text-orange-400 font-semibold hover:underline flex items-center gap-1"
                >
                  <Mail className="w-3.5 h-3.5" />
                  {COMPANY_DETAILS.email}
                </a>
              </div>
            </div>

            {/* Right Column: Lead Form */}
            <div className="lg:col-span-5">
              {service.slug.includes('fssai') ? (
                <FssaiRegistrationMultiStepForm
                  onApply={() => onOpenAppointment()}
                />
              ) : (service.category?.includes('export') || service.category?.includes('Export') ||
                   ['aepc', 'apeda', 'capexil', 'chemexcil', 'eepc', 'pharmexcil', 'plexconcil', 'spices-board', 'coffee-board', 'fieo', 'mpeda', 'export'].some(k => service.slug.includes(k))) ? (
                <ExportServicesLeadForm
                  serviceName={service.name}
                  onApply={() => onOpenAppointment()}
                />
              ) : (
                <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-800 border border-slate-100 relative">
                {/* Form Header */}
                <div className="text-center pb-5 border-b border-slate-100 mb-5">
                  <div className="inline-flex items-center justify-center bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full mb-2 uppercase tracking-wide">
                    Fast Track Application
                  </div>
                  <h3 className="text-xl font-bold text-[#0D47A1]">
                    Apply for {service.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1">
                    {hasPricing ? (
                      <>
                        Complete package at <span className="font-extrabold text-orange-700 text-sm">{service.priceDisplay}</span> + Govt Fee
                      </>
                    ) : (
                      <span className="font-extrabold text-orange-700 text-xs sm:text-sm">
                        Tailored Quotation • Contact Us for Best Rates
                      </span>
                    )}
                  </p>
                  {service.urgencyText && (
                    <div className="mt-2 text-xs font-medium text-red-600 bg-red-50 border border-red-200 rounded p-1.5 flex items-center justify-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{service.urgencyText}</span>
                    </div>
                  )}
                </div>

                {submitSuccess ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-14 h-14 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-bold text-[#0D47A1]">Application Received!</h4>
                    <p className="text-xs text-slate-600">
                      Our senior legal & compliance consultant will call you within 15 minutes to initiate your {service.name}.
                    </p>
                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="text-xs text-blue-700 font-semibold hover:underline"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-3.5 text-xs sm:text-sm">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="rahul@example.com"
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Mobile Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          pattern="[0-9]{10}"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="10-digit number"
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        State / UT <span className="text-red-500">*</span>
                      </label>
                      <select
                        required
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all"
                      >
                        <option value="">-- Select State --</option>
                        {INDIAN_STATES_AND_UTS.map((st) => (
                          <option key={st} value={st}>
                            {st}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Business Entity Type
                        </label>
                        <select
                          value={businessType}
                          onChange={(e) => setBusinessType(e.target.value)}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all"
                        >
                          <option value="">-- Select Type --</option>
                          {BUSINESS_TYPES.map((bt) => (
                            <option key={bt} value={bt}>
                              {bt}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Business Activity
                        </label>
                        <select
                          value={businessActivity}
                          onChange={(e) => setBusinessActivity(e.target.value)}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-800 text-xs focus:ring-2 focus:ring-blue-600 focus:outline-none transition-all"
                        >
                          <option value="">-- Select Activity --</option>
                          {BUSINESS_ACTIVITIES.map((ba) => (
                            <option key={ba} value={ba}>
                              {ba}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full mt-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-slate-950 font-bold py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 uppercase tracking-wide text-xs sm:text-sm cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <Clock className="w-4 h-4 animate-spin" />
                          <span>Processing Application...</span>
                        </>
                      ) : (
                        <>
                          <span>{service.ctaText || 'Get Started Now'}</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-center gap-3 pt-2 text-[10px] text-slate-500">
                      <span className="flex items-center gap-1">
                        <Lock className="w-3 h-3 text-orange-600" />
                        100% Confidential
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-blue-600" />
                        Zero Spam Guarantee
                      </span>
                    </div>
                  </form>
                )}
              </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Trust Stats Bar */}
      <section className="bg-[#0D47A1] border-t border-slate-700/80 py-6 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-orange-400">10,000+</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">Happy Clients</div>
            </div>
            <div className="space-y-1 border-l border-slate-700/60 pl-4">
              <div className="text-2xl sm:text-3xl font-extrabold text-orange-400">15,000+</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">Certificates Issued</div>
            </div>
            <div className="space-y-1 border-l border-slate-700/60 pl-4">
              <div className="text-2xl sm:text-3xl font-extrabold text-blue-400">50+</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">In-House Professionals</div>
            </div>
            <div className="space-y-1 border-l border-slate-700/60 pl-4">
              <div className="text-2xl sm:text-3xl font-extrabold text-orange-400 flex items-center justify-center gap-1">
                <span>4.9</span>
                <Star className="w-5 h-5 fill-orange-400 text-orange-400" />
              </div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">Average Client Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Review Badges Row */}
      <section className="bg-slate-100 border-b border-slate-200 py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs font-semibold text-slate-700">
            <div className="flex items-center gap-2">
              <span className="text-blue-700 font-extrabold">Google Reviews</span>
              <div className="flex text-orange-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <span className="text-slate-900 font-bold">4.9/5</span>
            </div>
            <div className="hidden sm:inline text-slate-300">|</div>
            <div className="flex items-center gap-2">
              <span className="text-orange-700 font-extrabold">AmbitionBox</span>
              <div className="flex text-orange-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <span className="text-slate-900 font-bold">4.9/5</span>
            </div>
            <div className="hidden sm:inline text-slate-300">|</div>
            <div className="flex items-center gap-2">
              <span className="text-orange-600 font-extrabold">Trustpilot</span>
              <div className="flex text-orange-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <span className="text-slate-900 font-bold">4.7/5</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout with Sticky Sidebar TOC */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Sidebar Table of Contents */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white rounded-xl shadow-xs border border-slate-200 p-4">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-2 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-blue-600" />
                  Table of Contents
                </h4>
                <nav className="space-y-1">
                  {TOC_LINKS.map((item) => {
                    const isActive = activeToc === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
                          isActive
                            ? 'bg-blue-50 text-blue-800 font-bold border-l-3 border-blue-600'
                            : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                        }`}
                      >
                        <span className="truncate">{item.label}</span>
                        {isActive && <ChevronDown className="w-3 h-3 -rotate-90 text-blue-600" />}
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Sidebar Quick Action Card */}
              <div className="bg-gradient-to-br from-[#0D47A1] to-[#112d4e] rounded-xl p-5 text-white shadow-md">
                <h5 className="text-sm font-bold text-orange-400 mb-1">Need Legal Guidance?</h5>
                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  Speak directly with an experienced compliance specialist.
                </p>
                <div className="space-y-2 text-xs">
                  <a
                    href={`tel:${COMPANY_DETAILS.phoneClean}`}
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 p-2.5 rounded-lg font-medium text-white transition-colors"
                  >
                    <Phone className="w-4 h-4 text-orange-400" />
                    <span>{COMPANY_DETAILS.phone}</span>
                  </a>
                  <a
                    href={`https://wa.me/${COMPANY_DETAILS.phoneClean.replace('+', '')}?text=Hello,%20I%20need%20assistance%20with%20${encodeURIComponent(service.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 p-2.5 rounded-lg font-bold text-white transition-colors text-center justify-center"
                  >
                    <Smartphone className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 18 Comprehensive Master Sections */}
          <div className="lg:col-span-9 space-y-14">
            {/* Section 1: Overview */}
            <section id="overview" className="scroll-mt-24 space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 text-blue-800 font-bold text-sm uppercase tracking-wider">
                <FileText className="w-4 h-4" />
                <span>Section 1</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0D47A1]">
                Overview — {service.name}
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
                {service.overview.p1}
              </p>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed text-justify">
                {service.overview.p2}
              </p>
            </section>

            {/* Section 2: Registration / Process Overview */}
            <section id="registration" className="scroll-mt-24 space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 text-blue-800 font-bold text-sm uppercase tracking-wider">
                <Building2 className="w-4 h-4" />
                <span>Section 2</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0D47A1]">
                Registration & Approval Process Overview
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                  <span className="text-xs text-slate-500 font-bold uppercase">Legal Status</span>
                  <p className="text-sm font-semibold text-slate-900">{service.registrationProcessOverview.status}</p>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                  <span className="text-xs text-slate-500 font-bold uppercase">Governing Authority</span>
                  <p className="text-sm font-semibold text-slate-900">{service.registrationProcessOverview.governingAuthority}</p>
                </div>
              </div>
              <div className="space-y-3 pt-2">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Process Summary:</h4>
                  <p className="text-sm text-slate-700 leading-relaxed text-justify">{service.registrationProcessOverview.summary}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Post-Approval Status:</h4>
                  <p className="text-sm text-slate-700 leading-relaxed text-justify">{service.registrationProcessOverview.postApproval}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">Our Professional Role:</h4>
                  <p className="text-sm text-slate-700 leading-relaxed text-justify">{service.registrationProcessOverview.assistanceRole}</p>
                </div>
              </div>
            </section>

            {/* Section 3: What is [Service] */}
            <section id="what-is" className="scroll-mt-24 space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 text-blue-800 font-bold text-sm uppercase tracking-wider">
                <HelpCircle className="w-4 h-4" />
                <span>Section 3</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0D47A1]">
                What is {service.name}?
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-medium">
                {service.whatIs.definition}
              </p>
              <div className="space-y-2.5 pt-2">
                {service.whatIs.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-1" />
                    <p className="text-sm text-slate-700 leading-relaxed">{pt}</p>
                  </div>
                ))}
              </div>
              {service.whatIs.closing && (
                <p className="text-slate-700 text-sm italic pt-2 border-t border-slate-100">
                  {service.whatIs.closing}
                </p>
              )}
            </section>

            {/* Section 4: Key Characteristics */}
            <section id="key-characteristics" className="scroll-mt-24 space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 text-blue-800 font-bold text-sm uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Section 4</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0D47A1]">
                Key Characteristics of {service.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {service.keyCharacteristics.map((item, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-4.5 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center font-bold text-xs">
                        {idx + 1}
                      </div>
                      <h4 className="text-sm font-bold text-[#0D47A1]">{item.title}</h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-8">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: Importance & Benefits */}
            <section id="importance-benefits" className="scroll-mt-24 space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 text-blue-800 font-bold text-sm uppercase tracking-wider">
                <TrendingUp className="w-4 h-4" />
                <span>Section 5</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0D47A1]">
                Importance & Strategic Benefits
              </h2>
              <p className="text-slate-700 text-sm leading-relaxed">
                {service.importanceBenefits.intro}
              </p>
              <div className="space-y-3 pt-2">
                {service.importanceBenefits.benefits.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-orange-50/50 border border-orange-100 rounded-xl p-3.5">
                    <Check className="w-4 h-4 text-orange-600 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{b.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-0.5">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              {service.importanceBenefits.closing && (
                <p className="text-slate-700 text-sm pt-2 italic border-t border-slate-100">
                  {service.importanceBenefits.closing}
                </p>
              )}
            </section>

            {/* Section 6: Package (Single tier ₹X or Custom Quote + Govt Fee) */}
            <section id="packages" className="scroll-mt-24 space-y-4 bg-gradient-to-br from-[#0D47A1] to-[#112d4e] text-white p-6 sm:p-8 rounded-2xl shadow-md">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2 text-orange-400 font-bold text-sm uppercase tracking-wider">
                  <Award className="w-4 h-4" />
                  <span>Section 6 — All-Inclusive Package</span>
                </div>
                <span className="bg-orange-400 text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full uppercase">
                  {service.priceType === 'no_price_show' ? 'Tailored Scope' : 'Single Transparent Pricing'}
                </span>
              </div>
              <div className="border-b border-slate-700/80 pb-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                  {service.package.title || `${service.name} Professional Filing & Assistance`}
                </h2>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-2xl sm:text-3xl font-extrabold text-orange-400">
                    {service.priceDisplay || service.price}
                  </span>
                  <span className="text-xs sm:text-sm text-slate-300">
                    {service.priceType === 'no_price_show' ? '+ Applicable Statutory Govt. Fee' : '/- only + Govt. Fee'}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mt-2">{service.package.description}</p>
              </div>

              {/* Highlight Boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="bg-white/10 border border-white/15 rounded-xl p-3.5 flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-white">Transparent Pricing Model</h5>
                    <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5">
                      No hidden costs, fee customized strictly based on business scale and product category.
                    </p>
                  </div>
                </div>
                <div className="bg-white/10 border border-white/15 rounded-xl p-3.5 flex items-start gap-2.5">
                  <Zap className="w-5 h-5 text-orange-400 shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-white">Priority Processing</h5>
                    <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5">
                      Direct CA/CS docket assignment to kickstart documentation and filing without delays.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-2.5 pt-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-orange-300">
                  What is included in this package:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {service.package.checklist.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                      <span className="text-slate-200">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => scrollToSection('hero')}
                  className="bg-orange-400 hover:bg-orange-500 text-slate-950 font-bold px-6 py-3 rounded-lg text-xs sm:text-sm uppercase tracking-wide transition-all shadow text-center cursor-pointer"
                >
                  {service.ctaText || (service.priceType === 'no_price_show' ? 'Request Custom Quote' : 'Get This Package')}
                </button>
                <a
                  href={`tel:${COMPANY_DETAILS.phoneClean}`}
                  className="bg-white/10 hover:bg-white/20 text-white font-medium px-5 py-3 rounded-lg text-xs sm:text-sm transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-orange-400" />
                  <span>Call {COMPANY_DETAILS.phone}</span>
                </a>
              </div>
            </section>

            {/* Section 7: Types / Sub-Categories */}
            <section id="types" className="scroll-mt-24 space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 text-blue-800 font-bold text-sm uppercase tracking-wider">
                <Briefcase className="w-4 h-4" />
                <span>Section 7</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0D47A1]">
                Types / Categories of {service.name}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {service.types.map((tp, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-[#0D47A1]">{tp.title}</h4>
                      {tp.eligibility && (
                        <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                          {tp.eligibility}
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {tp.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 8: Comparison Table(s) */}
            {(service.comparisonTables || service.comparison) && (
              <section id="comparison-tables" className="scroll-mt-24 space-y-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
                <div className="flex items-center gap-2 text-blue-800 font-bold text-sm uppercase tracking-wider">
                  <Scale className="w-4 h-4" />
                  <span>Section 8</span>
                </div>

                {service.comparisonTables ? (
                  <div className="space-y-8">
                    {service.comparisonTables.map((tbl, tIdx) => (
                      <div key={tIdx} className="space-y-3">
                        <h2 className="text-xl sm:text-2xl font-bold text-[#0D47A1]">
                          {tbl.title}
                        </h2>
                        <div className="overflow-x-auto">
                          <table className="w-full text-left text-xs sm:text-sm border-collapse border border-slate-200 rounded-lg overflow-hidden">
                            <thead className="bg-[#0D47A1] text-white">
                              <tr>
                                {tbl.headers.map((h, idx) => (
                                  <th key={idx} className="p-3 font-semibold border-b border-slate-700">
                                    {h}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                              {tbl.rows.map((row, idx) => (
                                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                                  <td className="p-3 font-bold text-slate-900 border-r border-slate-200">
                                    {row.aspect}
                                  </td>
                                  <td className="p-3 text-slate-700 border-r border-slate-200">
                                    {row.col1}
                                  </td>
                                  <td className="p-3 text-slate-700">
                                    {row.col2}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : service.comparison ? (
                  <div className="space-y-3">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#0D47A1]">
                      {service.comparison.title}
                    </h2>
                    <div className="overflow-x-auto pt-2">
                      <table className="w-full text-left text-xs sm:text-sm border-collapse border border-slate-200 rounded-lg overflow-hidden">
                        <thead className="bg-[#0D47A1] text-white">
                          <tr>
                            {service.comparison.headers.map((h, idx) => (
                              <th key={idx} className="p-3 font-semibold border-b border-slate-700">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                          {service.comparison.rows.map((row, idx) => (
                            <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                              <td className="p-3 font-bold text-slate-900 border-r border-slate-200">
                                {row.aspect}
                              </td>
                              <td className="p-3 text-slate-700 border-r border-slate-200">
                                {row.col1}
                              </td>
                              <td className="p-3 text-slate-700">
                                {row.col2}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ) : null}
              </section>
            )}

            {/* Section 9: Laws Governing */}
            <section id="laws-governing" className="scroll-mt-24 space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 text-blue-800 font-bold text-sm uppercase tracking-wider">
                <Scale className="w-4 h-4" />
                <span>Section 9</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0D47A1]">
                Laws & Regulatory Framework
              </h2>
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <span className="text-xs text-slate-500 font-bold uppercase">Governing Act & Rules:</span>
                <p className="text-sm font-bold text-[#0D47A1] mt-0.5">{service.lawsGoverning.actName}</p>
                <p className="text-xs text-slate-600 mt-1">Authority: <span className="font-semibold">{service.lawsGoverning.authority}</span></p>
              </div>
              <div className="space-y-2 pt-1">
                {service.lawsGoverning.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-700">{pt}</p>
                  </div>
                ))}
              </div>
              {service.lawsGoverning.penalties && (
                <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700">
                  <span className="font-bold">Penal Provisions for Non-Compliance:</span> {service.lawsGoverning.penalties}
                </div>
              )}
            </section>

            {/* Section 10: Eligibility & Documents */}
            <section id="eligibility" className="scroll-mt-24 space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 text-blue-800 font-bold text-sm uppercase tracking-wider">
                <BadgeCheck className="w-4 h-4" />
                <span>Section 10</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0D47A1]">
                Eligibility Criteria & Documents Required
              </h2>
              <p className="text-slate-700 text-sm leading-relaxed">{service.eligibilityRequirements.intro}</p>

              <div className="space-y-2 pt-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">Eligibility Checklist:</h4>
                {service.eligibilityRequirements.criteria.map((c, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <Check className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2.5 pt-3 border-t border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-800">Mandatory Documents Checklist:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {service.eligibilityRequirements.documentsRequired.map((doc, idx) => (
                    <div key={idx} className="flex items-start gap-2 bg-slate-50 border border-slate-200 p-2.5 rounded-lg text-xs">
                      <FileText className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span className="text-slate-800 font-medium">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 11: Step-by-Step Process */}
            <section id="step-by-step-process" className="scroll-mt-24 space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 text-blue-800 font-bold text-sm uppercase tracking-wider">
                <Layers className="w-4 h-4" />
                <span>Section 11</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0D47A1]">
                Step-by-Step Execution Process
              </h2>
              <div className="space-y-4 pt-2">
                {service.processSteps.map((st) => (
                  <div key={st.step} className="flex items-start gap-4 bg-slate-50 border border-slate-200 rounded-xl p-4.5">
                    <div className="w-8 h-8 rounded-full bg-[#0D47A1] text-orange-400 flex items-center justify-center font-bold text-sm shrink-0">
                      {st.step}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-[#0D47A1]">{st.title}</h4>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{st.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 12: Post-Registration / Compliance */}
            <section id="compliance" className="scroll-mt-24 space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 text-blue-800 font-bold text-sm uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Section 12</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0D47A1]">
                Post-Registration & Ongoing Compliances
              </h2>
              <p className="text-slate-700 text-sm leading-relaxed">{service.postRegistrationCompliance.intro}</p>
              <div className="space-y-2 pt-1">
                {service.postRegistrationCompliance.points.map((pt, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 13: Timelines */}
            <section id="timelines" className="scroll-mt-24 space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 text-blue-800 font-bold text-sm uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>Section 13</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0D47A1]">
                Expected Timelines & Turnaround Time (TAT)
              </h2>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex items-center gap-3">
                <Clock className="w-6 h-6 text-blue-600 shrink-0" />
                <div>
                  <span className="text-xs font-bold text-blue-900 uppercase">Standard Processing Time:</span>
                  <p className="text-base font-extrabold text-blue-950">{service.timelines.tat}</p>
                </div>
              </div>
              <div className="space-y-2 pt-1 text-xs sm:text-sm text-slate-700">
                <p className="font-bold text-slate-800">Factors Influencing Processing Speed:</p>
                <ul className="list-disc list-inside space-y-1 pl-2 text-slate-600">
                  {service.timelines.delayFactors.map((df, idx) => (
                    <li key={idx}>{df}</li>
                  ))}
                </ul>
                <p className="text-orange-700 font-medium pt-1">
                  Speed Assurance: {service.timelines.speedAssurance}
                </p>
              </div>
            </section>

            {/* Section 14: Certification */}
            <section id="certification" className="scroll-mt-24 space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 text-blue-800 font-bold text-sm uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>Section 14</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0D47A1]">
                Official Certificate & Validity Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                  <span className="text-[11px] text-slate-500 font-bold uppercase">Issuing Authority</span>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">{service.certification.issuingAuthority}</p>
                </div>
                <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                  <span className="text-[11px] text-slate-500 font-bold uppercase">Certificate Validity</span>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">{service.certification.validity}</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                <span className="font-bold">Legal Significance:</span> {service.certification.legalSignificance}
              </p>
              <div>
                <span className="text-xs font-bold text-slate-800">Certificate Key Information Fields:</span>
                <div className="flex flex-wrap gap-2 pt-1.5">
                  {service.certification.contents.map((c, idx) => (
                    <span key={idx} className="bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded-md border border-slate-200">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 15: Fees */}
            <section id="fees" className="scroll-mt-24 space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 text-blue-800 font-bold text-sm uppercase tracking-wider">
                <IndianRupee className="w-4 h-4" />
                <span>Section 15</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0D47A1]">
                Fees & Government Statutory Charges
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="bg-orange-50/50 border border-orange-200 p-4 rounded-xl">
                  <span className="text-xs font-bold text-orange-900 uppercase">Professional Service Fee</span>
                  <p className="text-xl font-extrabold text-orange-900 mt-1">{service.fees.professionalFee}</p>
                </div>
                <div className="bg-blue-50/50 border border-blue-200 p-4 rounded-xl">
                  <span className="text-xs font-bold text-blue-900 uppercase">Statutory Government Fee</span>
                  <p className="text-sm font-semibold text-blue-950 mt-1">{service.fees.govtFee}</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 italic">
                {service.fees.transparencyNote}
              </p>
            </section>

            {/* Section 16: Taxation */}
            <section id="taxation" className="scroll-mt-24 space-y-4 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 text-blue-800 font-bold text-sm uppercase tracking-wider">
                <TrendingUp className="w-4 h-4" />
                <span>Section 16</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0D47A1]">
                Taxation & Financial Treatment
              </h2>
              <div className="space-y-3 pt-1 text-xs sm:text-sm text-slate-700">
                <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                  <h4 className="font-bold text-slate-900">Direct Tax & Deductibility:</h4>
                  <p className="text-slate-600 mt-0.5">{service.taxation.directTaxImpact}</p>
                </div>
                <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                  <h4 className="font-bold text-slate-900">GST Implications & Input Tax Credit:</h4>
                  <p className="text-slate-600 mt-0.5">{service.taxation.gstImplications}</p>
                </div>
                {service.taxation.deductionsOrExemptions && (
                  <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                    <h4 className="font-bold text-slate-900">Exemptions & Penal Savings:</h4>
                    <p className="text-slate-600 mt-0.5">{service.taxation.deductionsOrExemptions}</p>
                  </div>
                )}
              </div>
            </section>

            {/* Section 17: Why Us */}
            <section id="why-us" className="scroll-mt-24 space-y-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 text-blue-800 font-bold text-sm uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>Section 17</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0D47A1]">
                Why Choose Akshay B2B Solutions for {service.name}?
              </h2>

              {/* 6-Card Icon Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 space-y-2 hover:border-blue-300 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-[#0D47A1]">Expert Legal Guidance</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Direct access to experienced Chartered Accountants, Company Secretaries, and seasoned regulatory advocates.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 space-y-2 hover:border-blue-300 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-orange-100 text-orange-800 flex items-center justify-center font-bold">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-[#0D47A1]">Time-Saving Process</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Streamlined documentation flow and active government portal milestone tracking to avoid application rejections.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 space-y-2 hover:border-blue-300 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-orange-100 text-orange-800 flex items-center justify-center font-bold">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-[#0D47A1]">Transparent Pricing</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Zero surprise costs, fixed scope commitments, and fully itemized statutory fees with official challan receipts.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 space-y-2 hover:border-blue-300 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-purple-100 text-purple-800 flex items-center justify-center font-bold">
                    <Users className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-[#0D47A1]">Trusted by 10,000+</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Nationwide portfolio of startups, MSMEs, corporate entities, NGOs, and manufacturers spanning 28+ Indian states.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 space-y-2 hover:border-blue-300 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-rose-100 text-rose-800 flex items-center justify-center font-bold">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-[#0D47A1]">Compliance Alerts</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Automated calendar notifications for periodic filings, statutory renewals, and sudden departmental policy changes.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 space-y-2 hover:border-blue-300 transition-colors">
                  <div className="w-9 h-9 rounded-lg bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-[#0D47A1]">Secure & Confidential</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Strict non-disclosure agreements (NDAs) and enterprise-grade data security to safeguard all client filings.
                  </p>
                </div>
              </div>

              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">Detailed Service Assurances:</h4>
                {service.whyUs.map((w, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-blue-50/40 border border-blue-100 p-3 rounded-lg">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-800 font-medium">{w}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 18: FAQs & Related Services */}
            <section id="faqs" className="scroll-mt-24 space-y-6 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 text-blue-800 font-bold text-sm uppercase tracking-wider">
                <HelpCircle className="w-4 h-4" />
                <span>Section 18</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0D47A1]">
                Frequently Asked Questions (FAQs)
              </h2>

              <div className="space-y-3 pt-1">
                {service.faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-slate-200 rounded-xl overflow-hidden transition-all"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full text-left p-4 bg-slate-50 hover:bg-slate-100/80 font-bold text-xs sm:text-sm text-[#0D47A1] flex items-center justify-between gap-3 transition-colors cursor-pointer"
                      >
                        <span>{faq.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-blue-700 shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <div className="p-4 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Social Share Row */}
              <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <Share2 className="w-4 h-4 text-blue-700" />
                  <span>Share This Page:</span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(`Check out ${service.name} at Akshay B2B Solutions: ` + window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-orange-50 text-orange-700 border border-orange-200 hover:bg-orange-100 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`Apply for ${service.name} online with expert CA/CS support: `)}&url=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 border border-slate-300 hover:bg-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <span>X (Twitter)</span>
                  </a>
                  <a
                    href={`mailto:?subject=${encodeURIComponent(`Information on ${service.name}`)}&body=${encodeURIComponent(`Check out ${service.name} details here: ` + window.location.href)}`}
                    className="px-3 py-1.5 rounded-lg bg-orange-50 text-orange-800 border border-orange-200 hover:bg-orange-100 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <span>Gmail / Email</span>
                  </a>
                </div>
              </div>

              {/* Book Appointment CTA Banner */}
              <div className="bg-gradient-to-r from-[#0D47A1] to-[#1a3a60] rounded-2xl p-6 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="space-y-1 text-center sm:text-left">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-400 uppercase tracking-wider">
                    <Calendar className="w-4 h-4" />
                    <span>Free 1-on-1 Consultation</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold">
                    Confused About {service.name} Requirements?
                  </h3>
                  <p className="text-xs text-slate-300 max-w-xl">
                    Schedule a free 15-minute phone or video consultation with our senior compliance officers.
                  </p>
                </div>
                <button
                  onClick={onOpenAppointment}
                  className="bg-orange-400 hover:bg-orange-500 text-slate-950 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm uppercase tracking-wide transition-all shadow-md shrink-0 cursor-pointer"
                >
                  Book Free Appointment
                </button>
              </div>

              {/* Related Services Grid */}
              {service.relatedServices && service.relatedServices.length > 0 && (
                <div className="pt-8 border-t border-slate-200 space-y-4">
                  <h3 className="text-lg font-bold text-[#0D47A1]">
                    Related Corporate & Compliance Services
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
                    {service.relatedServices.map((rs, idx) => (
                      <div
                        key={idx}
                        onClick={() => onSelectService(rs.name)}
                        className="group bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-xl p-4 transition-all cursor-pointer flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between gap-1 mb-1">
                            <h4 className="text-xs sm:text-sm font-bold text-[#0D47A1] group-hover:text-blue-700 transition-colors">
                              {rs.name}
                            </h4>
                            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-700 shrink-0" />
                          </div>
                          <p className="text-[11px] sm:text-xs text-slate-500 line-clamp-2">
                            {rs.desc}
                          </p>
                        </div>
                        <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center justify-between text-xs">
                          <span className="text-slate-500 font-medium">Starts from</span>
                          <span className="font-extrabold text-blue-900">{rs.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Mobile App Advertisement Banner */}
              <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/30 text-blue-400 flex items-center justify-center shrink-0">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold">Track Your Applications On-The-Go</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Download the Akshay B2B Mobile App to upload documents, chat with your assigned CA, and get live filing status updates.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => alert('Akshay B2B Android App will be available on Google Play shortly!')}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-xs font-semibold text-white flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-orange-400" />
                    <span>Google Play</span>
                  </button>
                  <button
                    onClick={() => alert('Akshay B2B iOS App will be available on Apple App Store shortly!')}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg text-xs font-semibold text-white flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-blue-400" />
                    <span>App Store</span>
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Bottom Sticky Action Bar */}
      <div className="fixed bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-slate-200 py-3 px-4 z-40 shadow-xl">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden sm:block">
            <span className="text-xs text-slate-500">Service:</span>
            <span className="text-sm font-bold text-[#0D47A1] ml-1.5">{service.name}</span>
            <span className="ml-2 text-xs font-extrabold text-orange-700 bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
              {hasPricing ? `${service.priceDisplay} + Govt Fee` : 'Custom Quote Available'}
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <a
              href={`https://wa.me/${COMPANY_DETAILS.phoneClean.replace('+', '')}?text=Hello,%20I%20want%20to%20apply%20for%20${encodeURIComponent(service.name)}.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 bg-orange-600 hover:bg-orange-700 text-white text-xs sm:text-sm font-bold py-2.5 px-4 rounded-lg transition-colors"
            >
              <Smartphone className="w-4 h-4" />
              <span>WhatsApp Chat</span>
            </a>
            <button
              onClick={() => scrollToSection('page-' + service.slug)}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-slate-950 text-xs sm:text-sm font-bold py-2.5 px-5 rounded-lg shadow transition-colors cursor-pointer uppercase tracking-wide"
            >
              <span>{service.ctaText || 'Apply Online'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

        {/* 22. MOBILE APP PROMOTION BANNER */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="bg-gradient-to-r from-[#0B3D91] via-[#0D47A1] to-[#082a66] text-white rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-xl">
              {/* Ambient decoration */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-orange-400/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>

              <div className="space-y-4 max-w-md relative z-10">
                <span className="text-xs font-black uppercase tracking-wider text-[#FF5A00] bg-white/10 px-3 py-1 rounded-full border border-white/20">
                  Compliance on Mobile
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Track Your Business Registration in Real-Time
                </h3>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Download the akshayb2bsolutions mobile application for iOS &amp; Android. Access your incorporation certificates, GST returns, and get direct CA chat support 24x7.
                </p>
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href="https://play.google.com/store"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-105 active:scale-95 duration-200"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                      alt="Get it on Google Play"
                      className="h-10 object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </a>
                  <a
                    href="https://www.apple.com/app-store/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform hover:scale-105 active:scale-95 duration-200"
                  >
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                      alt="Download on the App Store"
                      className="h-10 object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </a>
                </div>
              </div>

              <div className="relative z-10">
                <AppBannerImage alt="Compliance Mobile App" className="w-48 h-auto object-contain rounded-2xl shadow-md transition-transform duration-300 hover:scale-105" />
              </div>
            </div>
          </div>
        </section>

      {/* Footer */}
      <Footer onSelectService={onSelectService} onGoHome={onBackToHome} />

      {/* Auth Modal */}
      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </div>
  );
}

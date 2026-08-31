import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, CheckCircle2, Star, Clock, FileText, 
  HelpCircle, ArrowRight, Award, ChevronDown, ChevronUp, Lock, Sparkles, Building2, UserCheck, ArrowUpRight,
  Share2, Facebook, Twitter, Linkedin, Mail, MessageCircle, PhoneCall, Award as AwardIcon, Check
} from 'lucide-react';
import { RcmcServiceConfig } from '../data/rcmcServicesData';
import { GlobalMultiStepLeadForm } from './GlobalMultiStepLeadForm';
import { HeaderMegaMenu } from './HeaderMegaMenu';
import { TopUtilityBar } from './TopUtilityBar';
import { Footer } from './Footer';
import { WhyChooseUsGrid } from './WhyChooseUsGrid';
import { MobileAppBanner } from './MobileAppBanner';

export interface RcmcPageTemplateProps {
  config: RcmcServiceConfig;
  onBackToHome?: () => void;
  onSelectService?: (serviceName: string) => void;
  onOpenBrochure?: () => void;
  onOpenAppointment?: () => void;
}

export const RcmcPageTemplate: React.FC<RcmcPageTemplateProps> = ({
  config,
  onBackToHome,
  onSelectService,
  onOpenBrochure,
  onOpenAppointment
}) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Animated Counter States
  const [counts, setCounts] = useState({ clients: 0, certs: 0, pros: 0 });

  useEffect(() => {
    // 1. Update Head SEO Tags
    document.title = config.pageTitle;
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', config.metaDescription);

    let metaKw = document.querySelector('meta[name="keywords"]');
    if (!metaKw) {
      metaKw = document.createElement('meta');
      metaKw.setAttribute('name', 'keywords');
      document.head.appendChild(metaKw);
    }
    metaKw.setAttribute('content', config.keywords.join(', '));

    // OpenGraph
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', config.pageTitle);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', config.metaDescription);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'instant' });

    // 2. Animate Trust Counters from 0+
    const duration = 1500;
    const steps = 30;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounts({
        clients: Math.floor(10000 * progress),
        certs: Math.floor(15000 * progress),
        pros: Math.floor(50 * progress)
      });
      if (step >= steps) {
        clearInterval(timer);
        setCounts({ clients: 10000, certs: 15000, pros: 50 });
      }
    }, interval);

    return () => clearInterval(timer);
  }, [config]);

  const scrollToSection = (id: string) => {
    setActiveTab(id);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '#';
  const shareText = `Apply online for ${config.serviceName} with Akshayb2bsolutions - Fast & Reliable RCMC Registration`;

  // Related Import & Export RCMC Services for Carousel
  const RCMC_CAROUSEL_ITEMS = [
    { slug: 'aepc-registration', title: 'AEPC Registration', desc: 'Apparel Export Promotion Council RCMC for garments & textiles.' },
    { slug: 'apeda-registration', title: 'APEDA Registration', desc: 'Food & scheduled agricultural products export authorization.' },
    { slug: 'capexil-certification', title: 'CAPEXIL Registration', desc: 'Chemicals, minerals, glass, ceramics & paper exports RCMC.' },
    { slug: 'chemexcil-rcmc-registration', title: 'CHEMEXCIL Registration', desc: 'Basic chemicals, dyes, cosmetics & agrochemicals export license.' },
    { slug: 'engineering-export-promotion-council', title: 'EEPC Registration', desc: 'Engineering goods, machinery & auto components export certificate.' },
    { slug: 'pharmaceutical-export-promotion-council', title: 'Pharmexcil Registration', desc: 'Active pharma ingredients (APIs), formulations & herbal medicines.' },
    { slug: 'plastic-export-promotion-council', title: 'PLEXCONCIL Registration', desc: 'Polymers, plastic packaging, masterbatches & PVC pipes RCMC.' },
    { slug: 'spice-board-export-promotion-council', title: 'Spice Board Registration', desc: 'CRES registration for 52 scheduled spices & spice oils.' },
    { slug: 'coffee-board-export-promotion-council', title: 'Coffee Board Registration', desc: 'Arabica & Robusta green beans, roasted & instant coffee permits.' },
    { slug: 'fieo-registration', title: 'FIEO Registration', desc: 'Apex body RCMC for multi-commodity & service exporters.' },
    { slug: 'mpeda-registration', title: 'MPEDA Registration', desc: 'Frozen seafood, shrimp, fish & marine products export license.' }
  ].filter(item => item.slug !== config.slug);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans antialiased selection:bg-orange-500 selection:text-white flex flex-col">
      {/* 1. Header Navigation */}
      <TopUtilityBar onOpenBrochure={onOpenBrochure} />
      <HeaderMegaMenu
        onSelectService={(srv) => onSelectService && onSelectService(srv)}
        onOpenConsultation={() => scrollToSection('lead-form-hero')}
      />

      <main className="flex-grow">
        {/* 2. Breadcrumbs */}
        <div className="bg-white border-b border-slate-200/80 py-3 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto text-xs text-slate-500 flex items-center gap-2 flex-wrap font-medium">
            <button 
              onClick={onBackToHome}
              className="text-[#0B3D91] hover:text-[#FF5A00] transition-colors cursor-pointer"
            >
              Home
            </button>
            <span className="text-slate-400">&gt;</span>
            <span className="text-slate-900 font-bold">{config.serviceName}</span>
          </div>
        </div>

        {/* 3. HERO SECTION (No Pricing) */}
        <section id="lead-form-hero" className="bg-gradient-to-b from-white via-slate-50 to-[#F8FAFC] border-b border-slate-200 py-8 lg:py-12 px-4 sm:px-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full filter blur-3xl -z-10 pointer-events-none" />

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Hero Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-[#0D47A1] text-xs font-extrabold rounded-full border border-blue-100 shadow-2xs">
                <AwardIcon className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span>DGFT & Ministry Recognized Export RCMC Desk • Akshayb2bsolutions</span>
              </div>

              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  {config.serviceName}
                </h1>
                <p className="text-base sm:text-lg font-bold text-[#0D47A1]">
                  {config.tagline}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal pt-1 border-t border-slate-200/80">
                  {config.introParagraph}
                </p>
              </div>

              {/* Related Sub-Service Chips */}
              <div className="space-y-2">
                <span className="text-[11px] font-black uppercase tracking-wider text-slate-400 block">
                  Key Registration Scope & Deliverables:
                </span>
                <div className="flex flex-wrap gap-2">
                  {config.subServiceChips.map((chip, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 bg-white border border-slate-200 rounded-xl text-xs font-bold text-slate-800 shadow-2xs flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{chip}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact / Price Callout Action */}
              <div className="pt-2 flex items-center gap-4 flex-wrap">
                <button
                  onClick={() => scrollToSection('lead-form-hero')}
                  className="px-6 py-3.5 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-lg shadow-orange-500/20 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Contact Us for Best Pricing</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href="tel:+919718004839"
                  className="px-5 py-3.5 bg-white hover:bg-slate-50 text-[#0D47A1] border-2 border-[#0D47A1] font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-2xs"
                >
                  <PhoneCall className="w-4 h-4 text-emerald-600" />
                  <span>Call: +91 97180 04839</span>
                </a>
              </div>

              {/* Key Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {config.keyHighlights.map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs font-medium text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200/80">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Hero Column: Sticky Multi-Step Lead Form (No Fixed Pricing) */}
            <div className="lg:col-span-5 w-full">
              <GlobalMultiStepLeadForm
                serviceName={config.serviceName}
                hidePricing={true}
                badgeText="🔥 EXPORT RCMC SPECIALIST"
                submitButtonText="Get Customized Quote & Free Callback ✔"
                quoteMessage={`Thank you! Our export compliance expert for ${config.serviceName} will contact you shortly with a customized quote.`}
                onSuccess={(data) => {
                  // RCMC Lead submitted

                  if (onOpenAppointment) onOpenAppointment();
                }}
              />
            </div>

          </div>
        </section>

        {/* 4. TRUST COUNTER STRIP */}
        <section className="bg-white border-y border-slate-200 py-6 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Animated Counters */}
            <div className="md:col-span-7 grid grid-cols-3 gap-4 text-center divide-x divide-slate-100">
              <div className="space-y-0.5 px-2">
                <div className="text-2xl sm:text-3xl font-black text-[#0D47A1]">
                  {counts.clients.toLocaleString()}+
                </div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Happy Clients
                </div>
              </div>

              <div className="space-y-0.5 px-2">
                <div className="text-2xl sm:text-3xl font-black text-[#FF6B00]">
                  {counts.certs.toLocaleString()}+
                </div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Certificates Issued
                </div>
              </div>

              <div className="space-y-0.5 px-2">
                <div className="text-2xl sm:text-3xl font-black text-slate-900">
                  {counts.pros.toLocaleString()}+
                </div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                  Senior CAs & Lawyers
                </div>
              </div>
            </div>

            {/* Linked Review Badges */}
            <div className="md:col-span-5 flex items-center justify-center md:justify-end gap-3 flex-wrap pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
              <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200/80 text-xs font-bold text-slate-800">
                <Star className="w-4 h-4 fill-orange-400 text-orange-400 flex-shrink-0" />
                <span>Google 4.9 ★</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200/80 text-xs font-bold text-slate-800">
                <AwardIcon className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Ambitionbox 4.8 ★</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200/80 text-xs font-bold text-slate-800">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Trustpilot 4.9 ★</span>
              </div>
            </div>

          </div>
        </section>

        {/* 5. STICKY IN-PAGE ANCHOR NAVIGATION (8 Jump Links) */}
        <div className="sticky top-0 z-30 bg-white border-b border-slate-200 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center gap-2 overflow-x-auto py-3 no-scrollbar text-xs font-bold">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'benefits', label: 'Benefits' },
              { id: 'eligibility', label: 'Eligibility' },
              { id: 'checklist', label: 'Checklist' },
              { id: 'process', label: 'Process' },
              { id: 'why-choose-us', label: 'Why Choose us' },
              { id: 'requirements', label: 'Requirements' },
              { id: 'faqs', label: 'FAQs' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`px-3.5 py-2 rounded-xl uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-[#0D47A1] text-white shadow-sm font-black'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 6. CONTENT SECTIONS */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-12">
          
          {/* 1. OVERVIEW SECTION */}
          <section id="overview" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-xs font-black text-[#0D47A1] uppercase tracking-wider">
              <FileText className="w-4 h-4" />
              <span>Statutory Framework & Foreign Trade Policy</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {config.overviewContent.heading}
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {config.overviewContent.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
              <p className="font-bold text-slate-900 pt-2 border-t border-slate-100">
                {config.overviewContent.closingLine}
              </p>
            </div>
          </section>

          {/* 2. BENEFITS SECTION */}
          <section id="benefits" className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-black text-[#0D47A1] uppercase tracking-wider">Export Advantages</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Benefits of {config.serviceName}
              </h2>
              <p className="text-xs sm:text-sm font-bold text-slate-700 pt-1">
                Obtaining {config.serviceName} opens doors to international trade incentives, customs duty relief, and official market promotion:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {config.benefits.map((b, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-3 relative group overflow-hidden"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0D47A1] font-black flex items-center justify-center text-sm border border-blue-100 group-hover:bg-[#0D47A1] group-hover:text-white transition-colors">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0D47A1] transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 3. ELIGIBILITY SECTION */}
          <section id="eligibility" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-xs font-black text-[#0D47A1] uppercase tracking-wider">
              <UserCheck className="w-4 h-4" />
              <span>Applicant Criteria</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Eligibility & Applicability
            </h2>
            <div className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal bg-slate-50/80 p-5 rounded-xl border border-slate-200">
              <p>{config.eligibility}</p>
            </div>
          </section>

          {/* 4. CHECKLIST / DOCUMENTS REQUIRED SECTION */}
          <section id="checklist" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-black text-[#0D47A1] uppercase tracking-wider">Documentation Guidelines</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Checklist / Documents Required for {config.serviceName}
              </h2>
              <p className="text-xs sm:text-sm font-bold text-slate-800">
                {config.checklist.summary}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {config.checklist.documents.map((docGroup, idx) => (
                <div key={idx} className="bg-slate-50/80 rounded-xl p-6 border border-slate-200/80 space-y-4">
                  <h3 className="text-xs font-black text-[#0D47A1] uppercase tracking-wider flex items-center gap-2 border-b border-slate-200 pb-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>{docGroup.category}</span>
                  </h3>
                  <ul className="space-y-2.5">
                    {docGroup.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="text-xs sm:text-sm text-slate-700 font-medium flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] flex-shrink-0 mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* 5. PROCESS STEPS SECTION */}
          <section id="process" className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-black text-[#0D47A1] uppercase tracking-wider">CA & Lawyer Execution Workflow</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Process of {config.serviceName}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {config.processSteps.map((step) => (
                <div 
                  key={step.stepNumber} 
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs relative flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="inline-block px-2.5 py-1 bg-orange-100 text-orange-900 text-[10px] font-black rounded-lg uppercase tracking-wider">
                      STEP {step.stepNumber < 10 ? `0${step.stepNumber}` : step.stepNumber}:
                    </span>
                    <h3 className="text-base font-bold text-slate-900">{step.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 6. WHY CHOOSE US SECTION */}
          <section id="why-choose-us" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-black text-[#0D47A1] uppercase tracking-wider">The Akshayb2bsolutions Advantage</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Why Choose us
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {config.whyChooseUsPoints.map((item, idx) => (
                <div key={idx} className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-7">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 7. REQUIREMENTS SECTION */}
          <section id="requirements" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-black text-[#0D47A1] uppercase tracking-wider">Compliance Framework</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {config.serviceName} Requirements
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {config.requirements.map((req, idx) => (
                <div key={idx} className="p-4 bg-slate-50/80 rounded-xl border border-slate-200 flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#FF6B00] mt-2 flex-shrink-0" />
                  <div className="space-y-1 text-xs sm:text-sm">
                    <span className="font-bold text-slate-900">{req.term}</span> — <span className="text-slate-600">{req.explanation}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 8. FREQUENTLY ASKED QUESTIONS */}
          <section id="faqs" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-black text-[#0D47A1] uppercase tracking-wider">Expert Answers</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {config.faqs.map((faq, idx) => (
                <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-5 py-4 text-left font-bold text-xs sm:text-sm text-slate-900 bg-slate-50/60 hover:bg-slate-100/80 transition-colors flex justify-between items-center gap-4 cursor-pointer"
                  >
                    <span>{idx + 1}. {faq.question}</span>
                    {openFaq === idx ? (
                      <ChevronUp className="w-4 h-4 text-[#0D47A1] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 py-4 text-xs sm:text-sm text-slate-600 border-t border-slate-100 bg-white leading-relaxed font-normal">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* SOCIAL SHARE BAR */}
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
              <Share2 className="w-4 h-4 text-[#0D47A1]" />
              <span>Share this service with fellow exporters & partners:</span>
            </div>
            <div className="flex items-center gap-2">
              <a 
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                title="Share on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors"
                title="Share on X (Twitter)"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(config.pageTitle)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors"
                title="Share on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors"
                title="Share on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a 
                href={`mailto:?subject=${encodeURIComponent(config.pageTitle)}&body=${encodeURIComponent(shareText + '\n\n' + shareUrl)}`}
                className="w-9 h-9 rounded-xl bg-orange-50 text-orange-700 flex items-center justify-center hover:bg-orange-600 hover:text-white transition-colors"
                title="Share via Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* "WHY CHOOSE US" VISUAL CARD BLOCK */}
          <WhyChooseUsGrid />

          {/* CTA BANNER (No Pricing) */}
          <div className="bg-gradient-to-r from-[#0D47A1] via-blue-900 to-slate-900 text-white rounded-3xl p-8 lg:p-10 shadow-xl border border-blue-800 relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-block px-3 py-1 bg-orange-400 text-slate-900 text-[10px] font-black uppercase tracking-wider rounded-full">
                EXPERT EXPORT CONSULTATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
                Not Sure Which RCMC Registration You Need?
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed max-w-xl">
                Our senior trade consultants analyze your product HS codes and recommend the exact Export Promotion Council (EPC) or Commodity Board registration required for seamless foreign trade.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => scrollToSection('lead-form-hero')}
                  className="px-6 py-3.5 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-lg transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 hidden lg:flex justify-end">
              <div className="w-44 h-44 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-4 flex flex-col justify-between text-white shadow-2xl">
                <ShieldCheck className="w-10 h-10 text-orange-400" />
                <div>
                  <div className="text-sm font-black">100% Guaranteed</div>
                  <div className="text-xs text-slate-300">DGFT & Council Approval Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* RELATED PRODUCTS CAROUSEL */}
          <section className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-black text-[#0D47A1] uppercase tracking-wider">Explore Import & Export Services</span>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                Related Export Promotion & RCMC Registrations
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {RCMC_CAROUSEL_ITEMS.slice(0, 6).map((item) => (
                <div 
                  key={item.slug}
                  className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs hover:border-blue-300 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0D47A1]">DGFT Compliant</span>
                    <button
                      onClick={() => onSelectService && onSelectService(item.title)}
                      className="text-xs font-bold text-[#FF6B00] hover:text-[#e05e00] flex items-center gap-1 cursor-pointer"
                    >
                      <span>View Registration</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>

        {/* APP PROMO STRIP */}
        <MobileAppBanner />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

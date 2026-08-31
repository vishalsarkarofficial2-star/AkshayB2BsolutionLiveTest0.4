import React, { useState } from 'react';
import { 
  ShieldCheck, CheckCircle2, Star, Clock, FileText, 
  HelpCircle, ArrowRight, Award, ChevronDown, ChevronUp, Lock, Sparkles, Building2, UserCheck, ArrowUpRight
} from 'lucide-react';
import { GlobalMultiStepLeadForm } from './GlobalMultiStepLeadForm';
import { HeaderMegaMenu } from './HeaderMegaMenu';
import { TopUtilityBar } from './TopUtilityBar';
import { Footer } from './Footer';

export interface ServicePageConfig {
  serviceName: string;
  categoryName: string;
  categorySlug?: string;
  heroPrice?: string;
  submitButtonText?: string;
  tagline: string;
  ratingScore: string;
  totalReviews: string;
  trustBadges?: string[];
  keyHighlights: string[];
  overviewContent: {
    heading: string;
    paragraphs: string[];
  };
  benefits: Array<{ title: string; desc: string }>;
  documentsRequired: Array<{ category: string; items: string[] }>;
  processSteps: Array<{ stepNumber: number; title: string; desc: string }>;
  faqs: Array<{ question: string; answer: string }>;
  relatedServices?: Array<{ title: string; desc: string; price: string }>;
}

export interface ServicePageTemplateProps {
  config: ServicePageConfig;
  onBackToHome?: () => void;
  onSelectService?: (serviceName: string) => void;
  onOpenBrochure?: () => void;
  onOpenAppointment?: () => void;
}

export const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
  config,
  onBackToHome,
  onSelectService,
  onOpenBrochure,
  onOpenAppointment
}) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans antialiased selection:bg-orange-500 selection:text-white flex flex-col">
      {/* 1. Top Utility Header & Navigation */}
      <TopUtilityBar onOpenBrochure={onOpenBrochure} />
      <HeaderMegaMenu
        onSelectService={onSelectService}
        onOpenConsultation={() => scrollToSection('lead-form-hero')}
      />

      <main className="flex-grow">
        {/* 2. Breadcrumb Navigation */}
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

        {/* 3. HERO SECTION */}
        <section id="lead-form-hero" className="bg-gradient-to-b from-white via-slate-50 to-[#F8FAFC] border-b border-slate-200 py-8 lg:py-12 px-4 sm:px-8 relative overflow-hidden">
          {/* Subtle Ambient Accent */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full filter blur-3xl -z-10 pointer-events-none" />

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Information */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Category Tag */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-50 text-[#0D47A1] text-xs font-extrabold rounded-full border border-blue-100 shadow-2xs">
                <Award className="w-4 h-4 text-orange-500 flex-shrink-0" />
                <span>Government Portal Authorized Tax & Legal Desk • Noida</span>
              </div>

              {/* Title & Tagline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  {config.serviceName}
                </h1>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-2xl">
                  {config.tagline}
                </p>
              </div>

              {/* Trust Ratings & Badges */}
              <div className="flex items-center gap-4 py-3 border-y border-slate-200/80 flex-wrap">
                <div className="flex items-center gap-1.5 bg-orange-50 px-3 py-1.5 rounded-xl border border-orange-200">
                  <Star className="w-4 h-4 fill-orange-400 text-orange-400" />
                  <span className="text-xs font-black text-slate-900">{config.ratingScore} ★</span>
                </div>
                <span className="text-xs text-slate-600 font-medium">
                  Based on <strong className="text-slate-900">{config.totalReviews}</strong> Verified Corporate Reviews
                </span>
                <span className="text-slate-300 hidden sm:inline">|</span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200/60">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  100% Tax Audit Support
                </span>
              </div>

              {/* Key Bullet Highlights */}
              <div className="space-y-2.5 pt-1">
                <h3 className="text-xs font-black text-slate-400 uppercase tracking-wider">
                  Service Key Deliverables
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {config.keyHighlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-bold text-slate-800 bg-white p-3 rounded-xl border border-slate-200/70 shadow-2xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instant Assurance Box */}
              <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 text-white rounded-2xl p-5 shadow-lg flex items-center justify-between gap-4 border border-blue-800/40">
                <div className="space-y-1">
                  <span className="text-[10px] font-black uppercase tracking-wider text-orange-400 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Zero Penalty Assurance
                  </span>
                  <p className="text-xs text-slate-200 font-medium">
                    On-time tax filing guarantee by Senior Chartered Accountants & Tax Consultants.
                  </p>
                </div>
                <button
                  onClick={() => scrollToSection('lead-form-hero')}
                  className="px-4 py-2.5 bg-[#FF6B00] hover:bg-[#e05e00] text-white text-xs font-bold rounded-xl whitespace-nowrap shadow-md transition-all cursor-pointer flex-shrink-0"
                >
                  File Return Now →
                </button>
              </div>

            </div>

            {/* Right Column: Reusable Multi-Step Lead Form */}
            <div className="lg:col-span-5 w-full">
              <GlobalMultiStepLeadForm
                serviceName={config.serviceName}
                heroPrice={config.heroPrice}
                submitButtonText={config.submitButtonText || 'Submit & File Corporate Return ✔'}
                onSuccess={(data) => {
                  // Corporate Tax Lead submitted

                  if (onOpenAppointment) onOpenAppointment();
                }}
              />
            </div>

          </div>
        </section>

        {/* 4. STICKY ANCHOR NAVIGATION */}
        <div className="sticky top-0 z-30 bg-white border-b border-slate-200 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center gap-2 overflow-x-auto py-3 no-scrollbar text-xs font-bold">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'benefits', label: 'Key Benefits' },
              { id: 'documents', label: 'Documents Required' },
              { id: 'process', label: 'Process Steps' },
              { id: 'faqs', label: 'FAQs' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`px-4 py-2 rounded-xl uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
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

        {/* 5. CONTENT SECTIONS */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-10 space-y-12">
          
          {/* OVERVIEW SECTION */}
          <section id="overview" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-xs font-black text-[#0D47A1] uppercase tracking-wider">
              <FileText className="w-4 h-4" />
              <span>Statutory Compliance & Regulatory Framework</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {config.overviewContent.heading}
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              {config.overviewContent.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </section>

          {/* KEY BENEFITS SECTION */}
          <section id="benefits" className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-black text-[#0D47A1] uppercase tracking-wider">Why File With CAs</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Key Business Advantages of Corporate Tax Return Filing
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {config.benefits.map((b, idx) => (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-3 relative group overflow-hidden"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0D47A1] font-black flex items-center justify-center text-sm border border-blue-100/80 group-hover:bg-[#0D47A1] group-hover:text-white transition-colors">
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

          {/* DOCUMENTS REQUIRED SECTION */}
          <section id="documents" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-black text-[#0D47A1] uppercase tracking-wider">Mandatory Checklist</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Required Documents for Corporate Income Tax Filing
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {config.documentsRequired.map((docGroup, idx) => (
                <div key={idx} className="bg-slate-50/80 rounded-xl p-6 border border-slate-200/80 space-y-4">
                  <h3 className="text-sm font-black text-[#0D47A1] uppercase tracking-wider flex items-center gap-2 border-b border-slate-200 pb-2.5">
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

          {/* PROCESS STEPS SECTION */}
          <section id="process" className="space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-black text-[#0D47A1] uppercase tracking-wider">Streamlined CA Workflow</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Step-by-Step Corporate Tax Filing Process
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {config.processSteps.map((step) => (
                <div 
                  key={step.stepNumber} 
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs relative flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="inline-block px-2.5 py-1 bg-orange-100 text-orange-900 text-[10px] font-black rounded-lg uppercase tracking-wider">
                      STEP 0{step.stepNumber}
                    </span>
                    <h3 className="text-base font-bold text-slate-900">{step.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FREQUENTLY ASKED QUESTIONS */}
          <section id="faqs" className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-black text-[#0D47A1] uppercase tracking-wider">Got Questions?</span>
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
                    <span>{faq.question}</span>
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

          {/* RELATED SERVICES CROSS-LINKING */}
          {config.relatedServices && config.relatedServices.length > 0 && (
            <section className="space-y-6">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                Explore Other Tax & Corporate Compliance Services
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {config.relatedServices.map((rel, idx) => (
                  <div 
                    key={idx}
                    className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs hover:border-blue-300 transition-all flex flex-col justify-between"
                  >
                    <div className="space-y-2">
                      <h3 className="text-sm font-bold text-slate-900">{rel.title}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed">{rel.desc}</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-black text-[#0D47A1]">{rel.price}</span>
                      <button
                        onClick={() => onSelectService && onSelectService(rel.title)}
                        className="text-xs font-bold text-[#FF6B00] hover:text-[#e05e00] flex items-center gap-1 cursor-pointer"
                      >
                        <span>View Service</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

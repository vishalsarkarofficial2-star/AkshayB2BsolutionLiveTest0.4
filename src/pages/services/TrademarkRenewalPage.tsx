import { AppBannerImage } from '../../components/AppBannerImage';
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
  MapPin,
  FileText,
  CreditCard,
  Building2,
  Users,
  ChevronDown,
  Star,
  Download,
  Calendar,
  Check,
  HelpCircle,
  TrendingUp,
  Briefcase,
  Layers,
  Sparkles,
  Tag,
  Flame,
  Search,
  ExternalLink,
  Lock,
  RotateCcw,
  Smartphone,
  Scale,
  Receipt,
  FileCheck,
  BarChart3,
  IndianRupee,
  Landmark,
  Handshake,
  FileSignature,
  Users2,
  Gavel,
  UserPlus,
  BookOpenCheck
} from 'lucide-react';
import {
  INDIAN_STATES_AND_UTS,
  BUSINESS_TYPES,
  BUSINESS_ACTIVITIES,
  COMPANY_DETAILS
} from '../../data/servicesData';
import { HeaderMegaMenu } from '../../components/HeaderMegaMenu';
import { TopUtilityBar } from '../../components/TopUtilityBar';
import { Footer } from '../../components/Footer';

interface TrademarkRenewalPageProps {
  onBackToHome: () => void;
  onSelectService: (serviceName: string) => void;
  onOpenBrochure: () => void;
  onOpenAppointment: () => void;
}

// 6 Accordion FAQs — Trademark Renewal in India
const FAQ_ITEMS = [
  { q: 'How often does a trademark need renewal in India?', a: 'A registered trademark in India is generally renewed for successive periods of 10 years. Renewal keeps the registration active and helps the proprietor continue relying on registered trademark rights.' },
  { q: 'Which form is used for trademark renewal?', a: 'Trademark renewal is generally requested through Form TM-R with the applicable government fee. The filing details depend on the trademark number, class and current registration status.' },
  { q: 'How early can I renew my trademark?', a: 'Under the Trade Marks Rules, 2017, a renewal application may be made up to one year before the expiry of the last registration.' },
  { q: 'What if my trademark has already expired?', a: 'If renewal was missed, delayed renewal with surcharge may be available within six months after expiry. If the mark has been removed for non-payment, restoration and renewal may be requested within one year from expiry, subject to the Registrar and applicable requirements.' },
  { q: 'What details are generally required for renewal?', a: 'Usually the trademark registration number, class, proprietor details, expiry/status information, address for service and authorization details where an agent files the request are required.' },
  { q: 'Is the government fee included in this service page?', a: 'No fixed service price is displayed here. Government fees depend on the applicable filing and class details. Share your trademark number and our team can review the status and provide a clear quote before filing.' }
]

// Related services cross-linking items — sourced from Trademark-adjacent structures
const RELATED_SERVICES = [
  {
    title: 'Trademark Registration',
    desc: 'Protect a new brand name, logo or business identity through trademark application filing support in India.',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&auto=format&fit=crop&q=80',
    price: 'Get Quote'
  },
  {
    title: 'Trademark Objection Reply',
    desc: 'Professional examination report review, legal reply drafting and filing assistance for trademark objections.',
    img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=80',
    price: 'Get Quote'
  },
  {
    title: 'Trademark Opposition',
    desc: 'Support for trademark opposition matters, notices, counter-statements and case documentation.',
    img: 'https://images.unsplash.com/photo-1589578527966-fdac0f44566c?w=600&auto=format&fit=crop&q=80',
    price: 'Get Quote'
  },
  {
    title: 'Trademark Hearing Support',
    desc: 'Prepare for Registry hearing requirements with document review and professional case support.',
    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&auto=format&fit=crop&q=80',
    price: 'Get Quote'
  },
  {
    title: 'Trademark Search',
    desc: 'Search similar marks and assess potential conflicts before filing a fresh trademark application.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80',
    price: 'Get Quote'
  },
  {
    title: 'Trademark Assignment',
    desc: 'Assistance for transferring trademark ownership and recording assignment details with the Registry.',
    img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&auto=format&fit=crop&q=80',
    price: 'Get Quote'
  },
  {
    title: 'Trademark Rectification',
    desc: 'Professional support for eligible rectification or correction matters relating to the Trade Marks Register.',
    img: 'https://images.unsplash.com/photo-1436450412740-6b988f486c6b?w=600&auto=format&fit=crop&q=80',
    price: 'Get Quote'
  },
  {
    title: 'Copyright Registration',
    desc: 'Protect eligible creative works with copyright application and documentation assistance in India.',
    img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&auto=format&fit=crop&q=80',
    price: 'Get Quote'
  },
  {
    title: 'Design Registration',
    desc: 'Protect the visual design of eligible products through design registration filing support.',
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&auto=format&fit=crop&q=80',
    price: 'Get Quote'
  }
]

export const TrademarkRenewalPage: React.FC<TrademarkRenewalPageProps> = ({
  onBackToHome,
  onSelectService,
  onOpenBrochure,
  onOpenAppointment
}) => {
  // Navigation tabs state
  const [activeNavTab, setActiveNavTab] = useState('packages');

  // Form state
  const [formStep, setFormStep] = useState(1);
  const [selectedState, setSelectedState] = useState('Uttar Pradesh');
  const [businessType, setBusinessType] = useState(BUSINESS_TYPES[0]);
  const [businessActivity, setBusinessActivity] = useState(BUSINESS_ACTIVITIES[0]);
  const [panNumber, setPanNumber] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('Trademark Renewal Complete Assistance');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaCode, setCaptchaCode] = useState('7K3P9');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [applicantMobile, setApplicantMobile] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');

  // Animated counters
  const [counterClients, setCounterClients] = useState(0);
  const [counterCertificates, setCounterCertificates] = useState(0);
  const [counterProfessionals, setCounterProfessionals] = useState(0);

  // FAQ accordion state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Counter animation effect
  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const steps = 40;
    const intervalTime = duration / steps;
    const timer = setInterval(() => {
      start += 1;
      const progress = start / steps;
      setCounterClients(Math.floor(progress * 10000));
      setCounterCertificates(Math.floor(progress * 15000));
      setCounterProfessionals(Math.floor(progress * 50));
      if (start >= steps) {
        clearInterval(timer);
        setCounterClients(10000);
        setCounterCertificates(15000);
        setCounterProfessionals(50);
      }
    }, intervalTime);
    return () => clearInterval(timer);
  }, []);

  const handleNextStep = () => {
    if (formStep === 1) {
      if (!selectedState) return;
      setFormStep(2);
    } else if (formStep === 2) {
      if (!applicantName || !applicantMobile) {
        alert('Please provide your name and phone number to proceed.');
        return;
      }
      setFormStep(3);
    }
  };

  const handlePrevStep = () => {
    if (formStep > 1) setFormStep(formStep - 1);
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (captchaInput.trim().toUpperCase() !== captchaCode.toUpperCase()) {
      alert('Invalid Captcha. Please enter the correct verification code.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 900);
  };

  const regenerateCaptcha = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 5; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(code);
  };

  const scrollToSection = (sectionId: string) => {
    setActiveNavTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-500 selection:text-white flex flex-col antialiased">
      {/* 1. TOP UTILITY BAR */}
      <TopUtilityBar onOpenBrochure={onOpenBrochure} />

      {/* Main Header / Mega Menu */}
      <HeaderMegaMenu
        onSelectService={onSelectService}
        onOpenConsultation={() => scrollToSection('lead-capture-widget')}
      />

      <main className="flex-grow">
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
            <span className="text-slate-900 font-bold">Trademark Renewal</span>
          </div>
        </div>
        {/* 2. HERO SECTION */}
        <section
          id="hero-section"
          className="relative bg-gradient-to-br from-[#0B3D91] via-[#0D47A1] to-[#082a66] text-white pt-8 sm:pt-12 pb-14 sm:pb-16 overflow-hidden border-b border-slate-200"
        >
          {/* Ambient Glows */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-15 overflow-hidden">
            <div className="absolute -top-12 -right-12 w-80 h-80 bg-orange-400/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-blue-300/30 rounded-full blur-2xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Heading, Tagline, Badges & Social Proof */}
              <div className="lg:col-span-7 space-y-5">
                {/* Location & Trust Pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-orange-300">
                  <MapPin className="w-3.5 h-3.5 text-[#FF5A00]" />
                  <span>Pan-India Trademark Renewal Desk</span>
                  <span className="w-1 h-1 rounded-full bg-white/60"></span>
                  <span className="text-white">Priority Renewal Assistance</span>
                </div>

                {/* H1 Heading & Tagline */}
                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight antialiased">
                    Trademark Renewal
                  </h1>
                  <div className="space-y-0.5">
                    <p className="text-xl sm:text-2xl font-black text-orange-300 antialiased">
                      Keep your trademark protection active with{' '}
                      <span className="underline decoration-[#FF5A00] decoration-2 underline-offset-4 font-black text-white">
                        Renew Before Expiry. Protect Your Brand.
                      </span>
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-blue-100 antialiased">
                      Renewal guidance based on your trademark status
                    </p>
                  </div>
                </div>

                {/* Definition: 2-3 Line Description */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                  A registered trademark in India is generally protected for 10 years at a time. Timely renewal helps keep your registration active and preserves your brand protection. Share your trademark number and our team will review the status, class and renewal window before filing.
                </p>

                {/* 6 Feature Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Clock className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Timely Renewal Support</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Handshake className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>10-Year Renewal Cycle</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <FileSignature className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Legal Renewal Filing Preparation</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Zap className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Online & Hassle-Free</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Gavel className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>IP India Filing Support</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Users2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Trademark Specialist</span>
                  </div>
                </div>

                {/* Trust Counters */}
                <div className="grid grid-cols-3 gap-3 pt-3">
                  <div className="p-3 rounded-2xl bg-white/10 border border-white/20 text-center">
                    <div className="text-xl sm:text-3xl font-black text-orange-300 font-mono">
                      {counterClients.toLocaleString()}+
                    </div>
                    <div className="text-[10px] sm:text-xs font-semibold text-slate-200 uppercase tracking-wider mt-0.5">
                      Happy Clients
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/10 border border-white/20 text-center">
                    <div className="text-xl sm:text-3xl font-black text-white font-mono">
                      {counterCertificates.toLocaleString()}+
                    </div>
                    <div className="text-[10px] sm:text-xs font-semibold text-slate-200 uppercase tracking-wider mt-0.5">
                      Filings Assisted
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/10 border border-white/20 text-center">
                    <div className="text-xl sm:text-3xl font-black text-orange-300 font-mono">
                      {counterProfessionals}+
                    </div>
                    <div className="text-[10px] sm:text-xs font-semibold text-slate-200 uppercase tracking-wider mt-0.5">
                      Professionals
                    </div>
                  </div>
                </div>

                {/* Review Badges */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 border border-white/15 text-xs text-white">
                    <div className="flex text-orange-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-orange-400" />
                      ))}
                    </div>
                    <span className="font-bold">4.9/5</span>
                    <span className="text-slate-300 text-[11px]">Google Reviews</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 border border-white/15 text-xs text-white">
                    <Award className="w-3 h-3 text-orange-300" />
                    <span className="font-bold">4.9/5</span>
                    <span className="text-slate-300 text-[11px]">AmbitionBox</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 border border-white/15 text-xs text-white">
                    <ShieldCheck className="w-3 h-3 text-orange-400" />
                    <span className="font-bold">4.7/5</span>
                    <span className="text-slate-300 text-[11px]">Trustpilot</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Multi-Step Lead Capture Form */}
              <div id="lead-capture-widget" className="lg:col-span-5 scroll-mt-24">
                <div className="bg-white rounded-2xl shadow-2xl border-2 border-orange-400/80 p-5 sm:p-6 text-slate-900 relative">
                  {/* Urgency Badge */}
                  <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-[#FF5A00] text-[#0B3D91] text-xs font-black uppercase tracking-wider shadow-md flex items-center gap-1">
                    <Flame className="w-3 h-3 fill-[#0B3D91]" />
                    <span>Complete Renewal Support</span>
                  </div>

                  {formSubmitted ? (
                    <div className="text-center py-8 space-y-4 animate-in fade-in">
                      <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Renewal Request Received!</h3>
                      <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
                        Thank you <span className="font-bold">{applicantName}</span>. Our trademark specialist has been assigned to review your renewal requirement matter. We will call you within 15 minutes at <span className="font-bold">{applicantMobile}</span>.
                      </p>
                      <button
                        onClick={() => {
                          setFormSubmitted(false);
                          setFormStep(1);
                        }}
                        className="px-5 py-2 rounded-lg bg-[#0B3D91] text-white text-xs font-bold shadow-md hover:bg-blue-900 transition-colors"
                      >
                        Submit Another Renewal Request
                      </button>
                    </div>
                  ) : (
                    <>
                      {/* Form Header */}
                      <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3">
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                            <h3 className="text-base font-extrabold text-[#0B3D91]">
                              Online Trademark Renewal Desk
                            </h3>
                          </div>
                          <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                            Step {formStep} of 3 • Quick 60-second setup
                          </p>
                        </div>
                        <span className="text-[10px] font-bold text-orange-700 bg-orange-50 border border-orange-200 px-2 py-0.5 rounded">
                          SSL 256-Bit Encrypted
                        </span>
                      </div>

                      {/* Default Price Highlight Box */}
                      <div className="bg-gradient-to-r from-orange-50 to-orange-50 border border-orange-300 rounded-xl p-3 mb-4 flex items-center justify-between shadow-xs">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-[#0B3D91] text-white flex items-center justify-center font-black text-sm shadow-xs flex-shrink-0"><FileCheck className="w-4 h-4" /></div>
                          <div>
                            <span className="text-[10px] font-black uppercase tracking-wider text-orange-900 block leading-tight">
                              Renewal Assistance
                            </span>
                            <span className="text-base font-black text-[#0B3D91] leading-none">
                              Custom Quote
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-[11px] font-bold text-slate-800 block leading-tight">
                            Renewal Status Review
                          </span>
                          <span className="text-[10px] font-medium text-slate-500 block leading-tight">
                            in one trademark registration details
                          </span>
                        </div>
                      </div>

                      {/* Step Progress Indicators */}
                      <div className="grid grid-cols-3 gap-1.5 mb-5">
                        <div className={`h-1.5 rounded-full ${formStep >= 1 ? 'bg-[#0B3D91]' : 'bg-slate-200'}`}></div>
                        <div className={`h-1.5 rounded-full ${formStep >= 2 ? 'bg-[#0B3D91]' : 'bg-slate-200'}`}></div>
                        <div className={`h-1.5 rounded-full ${formStep >= 3 ? 'bg-[#0B3D91]' : 'bg-slate-200'}`}></div>
                      </div>

                      <form onSubmit={handleSubmitForm} className="space-y-4">
                        {/* STEP 1: State Selector */}
                        {formStep === 1 && (
                          <div className="space-y-3 animate-in fade-in">
                            <div>
                              <label className="block text-xs font-bold text-slate-700 mb-1">
                                Select State / Location *
                              </label>
                              <select
                                value={selectedState}
                                onChange={(e) => setSelectedState(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#0B3D91] focus:ring-1 focus:ring-[#0B3D91]"
                              >
                                {INDIAN_STATES_AND_UTS.map((st) => (
                                  <option key={st} value={st}>
                                    {st}
                                  </option>
                                ))}
                              </select>
                              <span className="text-[11px] text-slate-500 mt-1 block">
                                Used only to understand applicant jurisdiction and coordinate your trademark renewal support.
                              </span>
                            </div>

                            <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100 text-xs text-slate-600 space-y-1">
                              <div className="flex items-center gap-1.5 font-bold text-[#0B3D91]">
                                <ShieldCheck className="w-4 h-4 text-[#FF5A00]" />
                                <span>Why register with akshayb2bsolutions?</span>
                              </div>
                              <p className="text-[11px]">
                                One affordable package for renewal-status review, renewal status analysis, renewal drafting, evidence guidance and filing assistance.
                              </p>
                            </div>
                          </div>
                        )}

                        {/* STEP 2: Business Type, Activity & Personal Details */}
                        {formStep === 2 && (
                          <div className="space-y-3 animate-in fade-in">
                            <div className="grid grid-cols-2 gap-2">
                              <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">
                                  Registered Proprietor Type *
                                </label>
                                <select
                                  value={businessType}
                                  onChange={(e) => setBusinessType(e.target.value)}
                                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                                >
                                  {BUSINESS_TYPES.map((bt) => (
                                    <option key={bt} value={bt}>
                                      {bt}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">
                                  Business / Brand Activity *
                                </label>
                                <select
                                  value={businessActivity}
                                  onChange={(e) => setBusinessActivity(e.target.value)}
                                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                                >
                                  {BUSINESS_ACTIVITIES.map((ba) => (
                                    <option key={ba} value={ba}>
                                      {ba}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </div>

                            <div>
                              <label className="block text-xs font-bold text-slate-700 mb-1">
                                Applicant / Authorized Person Name *
                              </label>
                              <input
                                type="text"
                                required
                                value={applicantName}
                                onChange={(e) => setApplicantName(e.target.value)}
                                placeholder="As per PAN / Aadhaar"
                                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                              />
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                              <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">
                                  Mobile Number *
                                </label>
                                <input
                                  type="tel"
                                  required
                                  value={applicantMobile}
                                  onChange={(e) => setApplicantMobile(e.target.value)}
                                  placeholder="10-digit mobile"
                                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                                />
                              </div>
                              <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">
                                  Email Address
                                </label>
                                <input
                                  type="email"
                                  value={applicantEmail}
                                  onChange={(e) => setApplicantEmail(e.target.value)}
                                  placeholder="name@gmail.com"
                                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                                />
                              </div>
                            </div>
                          </div>
                        )}

                        {/* STEP 3: PAN Number, Package Selector & Captcha */}
                        {formStep === 3 && (
                          <div className="space-y-3 animate-in fade-in">
                            <div>
                              <label className="block text-xs font-bold text-slate-700 mb-1">
                                Trademark Application Number / PAN (Optional)
                              </label>
                              <input
                                type="text"
                                value={panNumber}
                                onChange={(e) => setPanNumber(e.target.value.toUpperCase())}
                                placeholder="ABCDE1234F"
                                maxLength={10}
                                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs font-mono uppercase font-bold text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                              />
                            </div>

                            <div>
                              <label className="block text-xs font-bold text-slate-700 mb-1">
                                Select Trademark Renewal Service *
                              </label>
                              <select
                                value={selectedPackage}
                                onChange={(e) => setSelectedPackage(e.target.value)}
                                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                              >
                                <option value="Trademark Renewal Package (Custom Quote)">Complete Trademark Renewal Assistance</option>
                              </select>
                            </div>

                            {/* Captcha */}
                            <div>
                              <label className="block text-xs font-bold text-slate-700 mb-1">
                                Security Verification *
                              </label>
                              <div className="flex items-center gap-2">
                                <div className="bg-slate-900 text-[#FF5A00] px-3 py-2 rounded-lg font-mono font-bold tracking-widest text-sm select-none">
                                  {captchaCode}
                                </div>
                                <button
                                  type="button"
                                  onClick={regenerateCaptcha}
                                  className="p-2 text-slate-500 hover:text-[#0B3D91] transition-colors"
                                  title="Change Captcha"
                                >
                                  <RotateCcw className="w-4 h-4" />
                                </button>
                                <input
                                  type="text"
                                  required
                                  value={captchaInput}
                                  onChange={(e) => setCaptchaInput(e.target.value)}
                                  placeholder="Enter code"
                                  className="flex-1 bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 uppercase focus:outline-none focus:border-[#0B3D91]"
                                />
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Navigation Buttons */}
                        <div className="pt-2 flex items-center gap-2">
                          {formStep > 1 && (
                            <button
                              type="button"
                              onClick={handlePrevStep}
                              className="px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-xs font-bold text-slate-700 transition-colors"
                            >
                              Back
                            </button>
                          )}
                          {formStep < 3 ? (
                            <button
                              type="button"
                              onClick={handleNextStep}
                              className="flex-1 py-2.5 rounded-xl bg-[#0B3D91] hover:bg-blue-900 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md transition-colors"
                            >
                              <span>Continue to Step {formStep + 1}</span>
                              <ArrowRight className="w-4 h-4 text-[#FF5A00]" />
                            </button>
                          ) : (
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className="flex-1 py-2.5 rounded-xl bg-[#0B3D91] hover:bg-blue-900 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-lg transition-colors cursor-pointer"
                            >
                              {isSubmitting ? (
                                <span className="flex items-center gap-2">
                                  <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                  <span>Processing...</span>
                                </span>
                              ) : (
                                <>
                                  <span>Submit &amp; Check Renewal Status</span>
                                  <CheckCircle2 className="w-4 h-4 text-[#FF5A00]" />
                                </>
                              )}
                            </button>
                          )}
                        </div>
                      </form>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. STICKY IN-PAGE ANCHOR NAVIGATION */}
        <div className="sticky top-20 z-30 bg-white border-b border-slate-200 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-2.5 no-scrollbar text-xs font-bold text-slate-600">
              {[
                { id: 'packages', label: 'Packages' },
                { id: 'overview', label: 'Overview' },
                { id: 'registration', label: 'Renewal Assistance' },
                { id: 'advantages', label: 'Advantages' },
                { id: 'checklist', label: 'Checklist' },
                { id: 'eligibility', label: 'Eligibility' },
                { id: 'documents', label: 'Documents Required' },
                { id: 'steps', label: 'Steps' },
                { id: 'legal-status', label: 'Legal Status' },
                { id: 'post-compliance', label: 'After Filing' },
                { id: 'comparison', label: 'Renewal Timing' },
                { id: 'tax-implications', label: 'Late Renewal' },
                { id: 'financing', label: 'Evidence & Strategy' },
                { id: 'why-akshayb2b', label: 'Why akshayb2bsolutions?' },
                { id: 'faqs', label: 'FAQs' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`px-3 py-1 rounded-full whitespace-nowrap transition-colors cursor-pointer ${
                    activeNavTab === tab.id
                      ? 'bg-[#0B3D91] text-white'
                      : 'hover:bg-slate-100 text-slate-700'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 4. PRICING PACKAGES (SINGLE CARD WITH REQUIRED BADGES) */}
        <section id="packages" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">One Complete Service</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0D47A1] mt-2">Complete Trademark Renewal Package</h2>
              <p className="text-sm text-slate-500 mt-2 mx-auto max-w-2xl text-center">No fixed price is displayed because the applicable government fee and filing route depend on your trademark class and current status. Share your trademark number and get a clear renewal quote after review.</p>
            </div>
            <div className="max-w-[520px] mx-auto">
              <div className="bg-white rounded-2xl border-t-4 border-t-[#FF6B00] border-l border-r border-b border-slate-200 p-6 sm:p-8 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-start flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 rounded bg-orange-100 text-orange-900 text-[10px] font-black uppercase tracking-wide">PROTECT YOUR ACTIVE REGISTRATION</span>
                    <span className="px-3 py-1 rounded bg-yellow-100 text-yellow-900 text-[10px] font-black uppercase tracking-wide">STATUS REVIEW BEFORE FILING</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0D47A1]">Trademark Renewal Assistance</h3>
                  <p className="text-sm text-slate-500 mb-6">Ideal for registered trademark owners who want to renew on time, understand late-renewal options, or check whether restoration is required.</p>
                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#0D47A1]">Get a Custom Renewal Quote</span>
                    <span className="text-xs text-slate-500 font-medium block mt-1">Quote provided after trademark number, class and status review</span>
                  </div>
                  <div className="space-y-3.5 mb-8">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">PACKAGE INCLUSIONS:</p>
                    {[
                      'Trademark Registration & Expiry Status Review',
                      'Renewal Window & Eligibility Check',
                      'Form TM-R Filing Assistance',
                      'Government Fee & Class Guidance',
                      'Late Renewal / Restoration Route Guidance',
                      'Dedicated Trademark Specialist Support'
                    ].map((item, idx) => (<div key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-[#FF6B00] flex-shrink-0 mt-0.5" /><span>{item}</span></div>))}
                  </div>
                </div>
                <button onClick={() => { setSelectedPackage('Trademark Renewal Complete Assistance'); scrollToSection('lead-capture-widget'); }} className="w-full py-4 rounded-xl bg-[#0D47A1] hover:bg-blue-900 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer text-center">Check My Trademark Renewal</button>
              </div>
            </div>
          </div>
        </section>
        {/* 5. OVERVIEW SECTION */}
        <section id="overview" className="py-14 bg-white border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Renewal Overview</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">What is Trademark Renewal in India?</h2></div><p className="text-slate-700 text-sm sm:text-base leading-relaxed">Trademark renewal extends the registration of an existing registered trademark for another 10-year period. Timely renewal helps maintain continuity of registered rights and avoids the complications that can arise when renewal is missed.</p><div className="space-y-3">{[
          {title:'10-Year Protection Cycle',desc:'A registered trademark can be renewed for successive periods of 10 years.'},
          {title:'Renew Before Expiry',desc:'A renewal application may be filed up to one year before the expiry of the last registration.'},
          {title:'Form TM-R',desc:'Renewal, delayed renewal with surcharge and restoration/renewal use Form TM-R under the applicable rules.'},
          {title:'Class-Based Government Fee',desc:'Government fees are linked to the applicable trademark class and filing mode.'},
          {title:'Keep Your Brand Protected',desc:'Timely action helps avoid removal from the register and preserves continuity of registered protection.'}
        ].map((item,idx)=>(<div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200"><ShieldCheck className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5"/><div className="text-xs sm:text-sm text-slate-700"><strong className="text-slate-900 font-bold block mb-0.5">{item.title}:</strong>{item.desc}</div></div>))}</div></div></section>

        {/* 6. REGISTRATION SECTION */}
        <section id="registration" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Renewal Framework</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">How Trademark Renewal Works in India</h2></div><p className="text-slate-700 text-sm leading-relaxed">We first verify the trademark number, registration status, class and renewal due date. Based on that review, the filing may be a standard renewal, a delayed renewal with surcharge, or a restoration-and-renewal request where permitted.</p><div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-2"><h4 className="text-xs font-bold uppercase tracking-wider text-[#0B3D91] flex items-center gap-1.5"><FileCheck className="w-4 h-4 text-[#FF5A00]"/><span>How akshayb2bsolutions Helps:</span></h4><p className="text-xs text-slate-600 leading-relaxed">Our team checks the renewal window, confirms filing details, guides you on the applicable government fee, assists with TM-R filing and tracks the status after submission.</p></div></div></section>

        {/* 7. ADVANTAGES */}
        <section id="advantages" className="py-14 bg-white border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Why Renew On Time</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Benefits of Timely Trademark Renewal</h2></div><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{[
          {title:'Maintain Registered Rights',desc:'Keep the trademark registration active for the next 10-year period.'},
          {title:'Protect Brand Continuity',desc:'Avoid unnecessary gaps in the registered status of a valuable brand asset.'},
          {title:'Reduce Late-Filing Complications',desc:'Timely renewal helps avoid surcharge or restoration steps that may apply after expiry.'},
          {title:'Support Licensing & Business Deals',desc:'An active registration can be important for licensing, assignments, due diligence and brand transactions.'},
          {title:'Preserve Enforcement Position',desc:'Keeping the registration current supports continued reliance on registered trademark rights.'},
          {title:'Simple Digital Assistance',desc:'Status review, document guidance and filing support can be handled remotely.'}
        ].map((item,idx)=>(<div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200"><div className="flex items-center gap-2 text-slate-900 font-bold text-sm"><CheckCircle2 className="w-5 h-5 text-[#0B3D91]"/><h4>{item.title}</h4></div><p className="text-xs text-slate-600 leading-relaxed pl-7 mt-1">{item.desc}</p></div>))}</div></div></section>

        {/* 8. CHECKLIST */}
        <section id="checklist" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Before Filing</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Trademark Renewal Checklist</h2></div><div className="space-y-3">{[
          {title:'Trademark Registration Number',desc:'Share the correct registered trademark number for status verification.'},
          {title:'Trademark Class',desc:'Confirm the class or classes covered by the registration.'},
          {title:'Registered Proprietor Details',desc:'Check that the proprietor name and address details match the register.'},
          {title:'Renewal Due Date',desc:'Verify whether the mark is before expiry, within the late-renewal window, or requires restoration review.'},
          {title:'Address for Service',desc:'Ensure current contact and service details are available for filing and Registry communication.'},
          {title:'Authorization, if Applicable',desc:'Agent authorization may be required where the renewal is filed through an authorized representative.'}
        ].map((item,idx)=>(<div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200"><CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5"/><div className="text-xs sm:text-sm text-slate-700"><strong className="text-slate-900 font-bold block mb-0.5">{item.title}:</strong>{item.desc}</div></div>))}</div></div></section>

        {/* 9. ELIGIBILITY */}
        <section id="eligibility" className="py-14 bg-white border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Who This Is For</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Who Can Use Trademark Renewal Assistance?</h2></div><p className="text-slate-700 text-sm leading-relaxed">This service is for registered trademark proprietors or their authorized representatives who need to renew an Indian trademark registration or understand the appropriate route after the renewal due date has passed.</p><div className="space-y-3">{[
          {title:'Trademark Still Active',desc:'Suitable when the mark is approaching its renewal due date.'},
          {title:'Within Six Months After Expiry',desc:'Delayed renewal with the applicable surcharge may be available, subject to the rules.'},
          {title:'Removed for Non-Payment',desc:'Restoration and renewal may be considered within one year from expiry, subject to the Registrar and applicable conditions.'},
          {title:'Single or Multiple Classes',desc:'The filing and government fee are assessed according to the registered class details.'}
        ].map((item,idx)=>(<div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200"><ShieldCheck className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5"/><div className="text-xs sm:text-sm text-slate-700"><strong className="text-slate-900 font-bold block mb-0.5">{item.title}:</strong>{item.desc}</div></div>))}</div></div></section>

        {/* 10. DOCUMENTS */}
        <section id="documents" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Document Checklist</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Details Required for Trademark Renewal</h2></div><p className="text-slate-700 text-sm leading-relaxed">Renewal is usually driven by the existing registration record, so the key requirement is accurate trademark and proprietor information.</p><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{[
          {title:'Trademark Registration Number',desc:'The registered trademark number used to check status and due date.'},
          {title:'Class Details',desc:'The class or classes for which the mark is registered.'},
          {title:'Registered Proprietor Information',desc:'Name, address and other proprietor details as reflected on the register.'},
          {title:'Registration / Renewal Record',desc:'Existing certificate or renewal information if available.'},
          {title:'Address for Service & Contact Details',desc:'Current email, mobile and service address for communication.'},
          {title:'Authorization, if Filing Through Agent',desc:'Applicable authorization details where an advocate, trademark agent or constituted attorney files the request.'}
        ].map((item,idx)=>(<div key={idx} className="p-4 rounded-xl bg-white border border-slate-200"><div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm"><FileText className="w-4 h-4 text-[#0B3D91]"/><h4>{item.title}</h4></div><p className="text-xs text-slate-600 leading-relaxed pl-6 mt-1">{item.desc}</p></div>))}</div></div></section>

        {/* 11. STEPS */}
        <section id="steps" className="py-14 bg-white border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Renewal Sequence</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Step-by-Step Trademark Renewal Process</h2></div><div className="space-y-4">{[
          {step:'Step 1',title:'Share Trademark Number',desc:'Provide the registration number and basic proprietor/contact details.'},
          {step:'Step 2',title:'Status & Due-Date Review',desc:'We check whether the mark is before expiry, in the late-renewal period, or needs restoration review.'},
          {step:'Step 3',title:'Confirm Class & Filing Route',desc:'The relevant class details and renewal route are confirmed before filing.'},
          {step:'Step 4',title:'Quote & Government Fee Guidance',desc:'You receive a clear service scope and applicable government-fee guidance before proceeding.'},
          {step:'Step 5',title:'TM-R Filing Assistance',desc:'We assist with preparing and submitting the renewal request with the required details.'},
          {step:'Step 6',title:'Status Tracking',desc:'We help track the filing status and guide you on any further Registry action, if required.'}
        ].map((item,idx)=>(<div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200"><div className="px-2.5 py-1 rounded-lg bg-[#0B3D91] text-[#FF5A00] text-[10px] font-black whitespace-nowrap">{item.step}</div><div><h4 className="text-sm font-bold text-slate-900">{item.title}</h4><p className="text-xs text-slate-600 leading-relaxed mt-0.5">{item.desc}</p></div></div>))}</div></div></section>

        {/* 12. LEGAL STATUS */}
        <section id="legal-status" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Legal Position</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Legal Position of Trademark Renewal</h2></div><p className="text-slate-700 text-sm leading-relaxed">Section 25 of the Trade Marks Act, 1999 provides for renewal of registration for further periods of 10 years. The Trade Marks Rules, 2017 set out the filing process and timing for renewal, surcharge and restoration.</p><div className="space-y-3">{[
          {title:'Renewal Before Expiry',desc:'The standard route is to renew while the registration is still within the permitted pre-expiry filing window.'},
          {title:'Late Renewal',desc:'If the fee is not paid by expiry, renewal with surcharge may be available within six months after expiry.'},
          {title:'Restoration & Renewal',desc:'Where the mark has been removed for non-payment, restoration and renewal may be requested within one year from expiry, subject to the Registrar.'},
          {title:'Registrar Has Final Authority',desc:'Acceptance of restoration or any conditions remain subject to the Trade Marks Registry and applicable law.'}
        ].map((item,idx)=>(<div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200"><Gavel className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5"/><div className="text-xs sm:text-sm text-slate-700"><strong className="text-slate-900 font-bold block mb-0.5">{item.title}:</strong>{item.desc}</div></div>))}</div></div></section>

        {/* 13. POST-RENEWAL */}
        <section id="post-compliance" className="py-14 bg-white border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">After Filing</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">What Happens After Trademark Renewal?</h2></div><div className="space-y-3">{[
          {title:'Filing Acknowledgement',desc:'Keep the filing reference and payment record for your compliance records.'},
          {title:'Registry Processing',desc:'The Trade Marks Registry processes the renewal request and updates the register when the filing is accepted.'},
          {title:'Check Updated Status',desc:'Verify that the renewed status and next renewal date are reflected correctly.'},
          {title:'Update Contact Details',desc:'Keep proprietor and address-for-service details current to avoid missing future Registry notices.'},
          {title:'Plan the Next Renewal',desc:'Record the next 10-year renewal cycle well in advance.'}
        ].map((item,idx)=>(<div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200"><CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5"/><div className="text-xs sm:text-sm text-slate-700"><strong className="text-slate-900 font-bold block mb-0.5">{item.title}:</strong>{item.desc}</div></div>))}</div></div></section>

        {/* 14. RENEWAL TIMING */}
        <section id="comparison" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Timing Matters</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Trademark Renewal Timing at a Glance</h2></div><div className="space-y-3">{[
          {title:'Up to 1 Year Before Expiry',desc:'A renewal application may be made during this pre-expiry window.'},
          {title:'At Expiry / Within 6 Months After Expiry',desc:'If renewal was missed, the rules provide a route with the applicable surcharge.'},
          {title:'After 6 Months and Within 1 Year From Expiry',desc:'If the mark has been removed, restoration and renewal may be requested, subject to the Registrar.'},
          {title:'Beyond the Permitted Window',desc:'The available legal route depends on the current Registry status and should be reviewed before taking action.'}
        ].map((item,idx)=>(<div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200"><Clock className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5"/><div className="text-xs sm:text-sm text-slate-700"><strong className="text-slate-900 font-bold block mb-0.5">{item.title}:</strong>{item.desc}</div></div>))}</div></div></section>

        {/* 15. LATE RENEWAL */}
        <section id="tax-implications" className="py-14 bg-white border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Missed the Due Date?</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Late Renewal & Restoration Guidance</h2></div><p className="text-slate-700 text-sm leading-relaxed">Missing the normal renewal date does not always mean the trademark is immediately lost. The available route depends on how much time has passed and whether the mark has already been removed from the register.</p><div className="space-y-3">{[
          {title:'Late Renewal With Surcharge',desc:'A renewal request may be made within six months after expiry with the applicable surcharge.'},
          {title:'Restoration Request',desc:'For a mark removed due to non-payment, restoration and renewal may be requested within one year from expiry.'},
          {title:'Case-Specific Review',desc:'Status should be checked before filing because Registry records and timing determine the correct route.'},
          {title:'No Automatic Guarantee',desc:'Restoration is subject to the Registrar and applicable conditions.'}
        ].map((item,idx)=>(<div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200"><Gavel className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5"/><div className="text-xs sm:text-sm text-slate-700"><strong className="text-slate-900 font-bold block mb-0.5">{item.title}:</strong>{item.desc}</div></div>))}</div></div></section>

        {/* 16. STATUS GUIDANCE */}
        <section id="financing" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Before You Pay</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Why We Review Trademark Status First</h2></div><p className="text-slate-700 text-sm leading-relaxed">A renewal quote should be based on the actual registration status and class details—not a generic one-price assumption. That is why this page does not display a fixed service price.</p><div className="space-y-3">{[
          {title:'Confirm Registration Number',desc:'Avoid filing against the wrong or inactive trademark record.'},
          {title:'Check Expiry Date',desc:'Determine whether standard renewal, surcharge or restoration rules apply.'},
          {title:'Verify Class Count',desc:'Government fee exposure depends on the applicable registered class details.'},
          {title:'Review Proprietor Details',desc:'Identify whether any ownership or contact updates may need separate attention.'},
          {title:'Give a Clear Quote',desc:'Once the status is known, we can explain the service scope and government fee before filing.'}
        ].map((item,idx)=>(<div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200"><Search className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5"/><div className="text-xs sm:text-sm text-slate-700"><strong className="text-slate-900 font-bold block mb-0.5">{item.title}:</strong>{item.desc}</div></div>))}</div></div></section>

        {/* 17. HOW AKSHAYB2BSOLUTIONS HELPS */}
        <section id="why-akshayb2b" className="py-14 bg-white border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Professional Support</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">How akshayb2bsolutions Helps You Renew</h2></div><div className="space-y-3">{[
          {title:'Trademark Status Verification',desc:'We review the registration number, class, proprietor details and due date before filing.'},
          {title:'Correct Renewal Route',desc:'We identify whether standard renewal, late renewal with surcharge or restoration review applies.'},
          {title:'TM-R Filing Assistance',desc:'We assist with preparing the renewal request and organizing the required filing details.'},
          {title:'Government Fee Guidance',desc:'Applicable Registry fees are explained separately based on your filing situation.'},
          {title:'Post-Filing Status Support',desc:'We help you track the renewal and understand any next action shown by the Registry.'}
        ].map((item,idx)=>(<div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200"><CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5"/><div className="text-xs sm:text-sm text-slate-700"><strong className="text-slate-900 font-bold block mb-0.5">{item.title}:</strong>{item.desc}</div></div>))}</div></div></section>

        {/* 18. TRUST / WHY US SECTION (6 CARDS) */}
        <section className="py-14 bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Proven Excellence
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Why Brand Owners Choose akshayb2bsolutions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Expert Legal Guidance',
                  desc: 'Backed by Senior Chartered Accountants, Company Secretaries, and Corporate Advocates headquartered in Noida.',
                  icon: Award
                },
                {
                  title: 'Time-Saving Digital Process',
                  desc: '100% online workflow designed to simplify trademark renewal and reduce unnecessary paperwork.',
                  icon: Clock
                },
                {
                  title: 'Transparent Consultation',
                  desc: 'No fixed price shown until status review; service scope and government fees are explained clearly before filing.',
                  icon: Tag
                },
                {
                  title: 'Trusted by Thousands',
                  desc: 'Pan-India support for registered trademark proprietors, startups, businesses and brand owners.',
                  icon: Users
                },
                {
                  title: 'Automated Compliance Alerts',
                  desc: 'Get timely guidance for renewal filing, Registry updates and future renewal planning.',
                  icon: Zap
                },
                {
                  title: 'Secure and Confidential',
                  desc: 'Enterprise-grade 256-bit SSL encryption protecting your applicants\' KYC, financial records, and business documentation.',
                  icon: Lock
                }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 19. FAQ SECTION (6 Q&A ACCORDION) */}
        <section id="faqs" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Got Questions?
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-3">
              {FAQ_ITEMS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50 transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-4 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 hover:text-[#0B3D91] transition-colors cursor-pointer"
                    >
                      <span className="flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-[#0B3D91] flex-shrink-0" />
                        <span>{faq.q}</span>
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-500 transition-transform ${
                          isOpen ? 'rotate-180 text-[#0B3D91]' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="p-4 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 20. CTA BANNER + BOOK APPOINTMENT */}
        <section className="py-14 bg-gradient-to-r from-[#0B3D91] to-[#082a66] text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
            <span className="text-xs font-black uppercase tracking-widest text-[#FF5A00] bg-white/10 px-3 py-1 rounded-full border border-white/20">
              Keep Your Trademark Active
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              Renew Your Trademark with Confidence
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Protect your brand before the renewal deadline. Share your trademark number, get the status reviewed, understand the applicable filing route and receive a clear quote before submission.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => scrollToSection('lead-capture-widget')}
                className="px-6 py-3 rounded-xl bg-[#FF5A00] hover:bg-orange-500 text-[#0B3D91] font-black text-xs sm:text-sm shadow-xl transition-all cursor-pointer"
              >
                Check Renewal Status & Get Quote
              </button>
              <button
                onClick={onOpenAppointment}
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all cursor-pointer"
              >
                Book Appointment with CA
              </button>
            </div>
          </div>
        </section>

        {/* 21. RELATED SERVICES CROSS-LINKING (9 SERVICE CARDS) */}
        <section className="py-14 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91]">
                  Explore Solutions
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                  Popular Related Legal &amp; Compliance Services
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {RELATED_SERVICES.map((srv, idx) => (
                <div
                  key={idx}
                  className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="h-40 w-full overflow-hidden relative">
                      <img
                        src={srv.img}
                        alt={srv.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-xs text-orange-400 text-xs font-bold px-2.5 py-1 rounded">
                        {srv.price}
                      </span>
                    </div>
                    <div className="p-4 space-y-2">
                      <h4 className="text-base font-bold text-slate-900 group-hover:text-[#0B3D91] transition-colors">
                        {srv.title}
                      </h4>
                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                        {srv.desc}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 pt-0">
                    <button
                      onClick={() => {
                        onSelectService(srv.title);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="w-full py-2 px-3 rounded-lg bg-slate-50 hover:bg-[#0B3D91] text-slate-700 hover:text-white text-xs font-bold border border-slate-200 hover:border-[#0B3D91] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Explore Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

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
                  Track Your Trademark Matter in Real-Time
                </h3>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Download the akshayb2bsolutions mobile application for iOS &amp; Android. Track your trademark matter, access documents, and get support from your assigned specialist.
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
      </main>

      {/* 23. SITEMAP FOOTER WITH MANDATORY DISCLAIMER */}
      <Footer onSelectService={onSelectService} />
    </div>
  );
};


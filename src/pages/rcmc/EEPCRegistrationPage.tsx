import { AppBannerImage } from '../../components/AppBannerImage';
import React, { useState, useEffect } from 'react';
import { Footer } from '../../components/Footer';

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

interface EEPCRegistrationPageProps {
  onBackToHome: () => void;
  onSelectService: (serviceName: string) => void;
  onOpenBrochure: () => void;
  onOpenAppointment: () => void;
}

// 6 Accordion FAQs — EEPC India / Engineering Export Membership focused
const FAQ_ITEMS = [
  { q: 'What is EEPC India Registration / Membership?', a: 'EEPC India membership is for eligible engineering goods and services exporters. Members can obtain Registration-cum-Membership Certificate (RCMC/e-RCMC) through the DGFT Common Digital Platform and access export-promotion support offered by the Council.' },
  { q: 'Who should apply for EEPC India membership?', a: 'Manufacturers, merchant exporters and eligible engineering service exporters dealing in engineering products or services can apply, subject to EEPC India membership criteria and document verification.' },
  { q: 'Is IEC required for EEPC India membership?', a: 'Yes. An active Import Export Code (IEC) is a key requirement for the e-RCMC process. Additional enterprise and GST-related documents may also be required depending on the applicant category.' },
  { q: 'What is the difference between Associate and Ordinary Membership?', a: 'EEPC India provides membership categories including Associate and Ordinary Membership. Eligibility can depend on export performance and other prescribed criteria, so the correct category should be selected before filing.' },
  { q: 'How much does EEPC India membership cost?', a: 'EEPC India subscription and admission charges can vary according to membership category and export performance, and applicable GST may be charged. Contact us for a current quote after a quick eligibility review.' },
  { q: 'What are the benefits of EEPC India membership?', a: 'Eligible members can access RCMC-related Foreign Trade Policy benefits, trade fairs and buyer-seller opportunities, market intelligence, export-import data, seminars, visa recommendation support, Certificate of Origin facilities and other member services.' }
];

// Related services cross-linking items — export & engineering business focused
const RELATED_SERVICES = [
  {
    title: 'IEC Registration',
    desc: 'Get your Import Export Code for starting import-export activities and accessing DGFT services in India.',
    img: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=600&auto=format&fit=crop&q=80',
    price: 'Contact Us'
  },
  {
    title: 'IEC Renewal / Update',
    desc: 'Keep your IEC particulars updated on the DGFT portal with guided annual confirmation and modification support.',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&auto=format&fit=crop&q=80',
    price: 'Contact Us'
  },
  {
    title: 'AD Code Registration',
    desc: 'Register your bank AD Code for customs port processing and smoother export shipping documentation.',
    img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&auto=format&fit=crop&q=80',
    price: 'Contact Us'
  },
  {
    title: 'ICEGATE Registration',
    desc: 'Get assistance with ICEGATE registration for customs e-filing, shipping bills and online trade services.',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=80',
    price: 'Contact Us'
  },
  {
    title: 'RCMC Registration',
    desc: 'Professional support for selecting the appropriate Export Promotion Council and completing the e-RCMC application.',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&auto=format&fit=crop&q=80',
    price: 'Contact Us'
  },
  {
    title: 'MSME Udyam Registration',
    desc: 'Obtain Udyam recognition for eligible micro, small and medium enterprises with online filing support.',
    img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&auto=format&fit=crop&q=80',
    price: 'Contact Us'
  },
  {
    title: 'GST Registration',
    desc: 'Complete GST registration and compliance setup for eligible exporters and engineering businesses.',
    img: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600&auto=format&fit=crop&q=80',
    price: 'Contact Us'
  },
  {
    title: 'Trademark Registration',
    desc: 'Protect your engineering brand, business name and logo with trademark filing assistance in India.',
    img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=80',
    price: 'Contact Us'
  },
  {
    title: 'BIS Registration',
    desc: 'Get compliance assistance for applicable engineering and industrial products requiring BIS certification or registration.',
    img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&auto=format&fit=crop&q=80',
    price: 'Contact Us'
  }
];

export const EEPCRegistrationPage: React.FC<EEPCRegistrationPageProps> = ({
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
  const [businessType, setBusinessType] = useState('Exporter');
  const [businessActivity, setBusinessActivity] = useState(BUSINESS_ACTIVITIES[0]);
  const [panNumber, setPanNumber] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('EEPC India Membership Assistance — Custom Quote');
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
            <span className="text-slate-900 font-bold">Engineering Export Promotion Council</span>
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
                  <span>Pan-India Export Registration Desk</span>
                  <span className="w-1 h-1 rounded-full bg-white/60"></span>
                  <span className="text-white">Expert e-RCMC Assistance</span>
                </div>

                {/* H1 Heading & Tagline */}
                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight antialiased">
                    Engineering Export Promotion Council
                  </h1>
                  <div className="space-y-0.5">
                    <p className="text-xl sm:text-2xl font-black text-orange-300 antialiased">
                      Grow your engineering exports with{' '}
                      <span className="underline decoration-[#FF5A00] decoration-2 underline-offset-4 font-black text-white">
                        EEPC India Membership Support
                      </span>
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-blue-100 antialiased">
                      EEPC subscription/admission fee and GST are payable as applicable
                    </p>
                  </div>
                </div>

                {/* Definition: 2-3 Line Description */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                  EEPC India is the Government-recognised Export Promotion Council for engineering products and services. Eligible exporters can obtain e-RCMC through the DGFT Common Digital Platform and use membership to access applicable export-policy benefits, trade promotion, market intelligence and international business opportunities.
                </p>

                {/* 6 Feature Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Clock className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>DGFT e-RCMC Filing Support</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Handshake className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Manufacturer & Merchant Exporters</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <FileSignature className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>IEC & Export Document Review</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Zap className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>100% Guided Online Process</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Gavel className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>EEPC / DGFT Coordination</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Users2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Dedicated Export Advisor</span>
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
                      Applications Assisted
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
                    <span>Get Expert Eligibility Check</span>
                  </div>

                  {formSubmitted ? (
                    <div className="text-center py-8 space-y-4 animate-in fade-in">
                      <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Application Received!</h3>
                      <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
                        Thank you <span className="font-bold">{applicantName}</span>. Our export registration specialist has been assigned to your EEPC India membership enquiry. We will call you within 15 minutes at <span className="font-bold">{applicantMobile}</span>.
                      </p>
                      <button
                        onClick={() => {
                          setFormSubmitted(false);
                          setFormStep(1);
                        }}
                        className="px-5 py-2 rounded-lg bg-[#0B3D91] text-white text-xs font-bold shadow-md hover:bg-blue-900 transition-colors"
                      >
                        Submit Another Application
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
                              Online Registration Desk
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
                          <div className="w-8 h-8 rounded-lg bg-[#0B3D91] text-white flex items-center justify-center font-black text-sm shadow-xs flex-shrink-0">
                            ₹
                          </div>
                          <div>
                            <span className="text-[10px] font-black uppercase tracking-wider text-orange-900 block leading-tight">
                              Professional Fee
                            </span>
                            <span className="text-base font-black text-[#0B3D91] leading-none">
                              Custom Quote
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-[11px] font-bold text-slate-800 block leading-tight">
                            EEPC Fee
                          </span>
                          <span className="text-[10px] font-medium text-slate-500 block leading-tight">
                            as per category / export performance
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
                                Select State of Engineering Export Promotion Council *
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
                                Your business location, exporter profile, product category and documentation help us prepare the correct EEPC India membership/e-RCMC application.
                              </span>
                            </div>

                            <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100 text-xs text-slate-600 space-y-1">
                              <div className="flex items-center gap-1.5 font-bold text-[#0B3D91]">
                                <ShieldCheck className="w-4 h-4 text-[#FF5A00]" />
                                <span>Why apply with akshayb2bsolutions?</span>
                              </div>
                              <p className="text-[11px]">
                                Get exporter eligibility review, document checklist, DGFT e-RCMC filing guidance, EEPC membership assistance and query-resolution support in one streamlined process.
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
                                  Exporter Type *
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
                                  Engineering Product / Activity *
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
                                Authorized Person Full Name *
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
                                Authorized Person PAN Number (Optional for quote)
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
                                Select EEPC India Assistance Package *
                              </label>
                              <select
                                value={selectedPackage}
                                onChange={(e) => setSelectedPackage(e.target.value)}
                                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                              >
                                <option value="EEPC India Membership Assistance — Custom Quote">EEPC India Membership Assistance — Contact for Pricing</option>
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
                                  <span>Submit &amp; Get Expert Call Back</span>
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
                { id: 'registration', label: 'Registration' },
                { id: 'advantages', label: 'Advantages' },
                { id: 'checklist', label: 'Checklist' },
                { id: 'eligibility', label: 'Eligibility' },
                { id: 'documents', label: 'Documents Required' },
                { id: 'steps', label: 'Steps' },
                { id: 'legal-status', label: 'Legal Status' },
                { id: 'post-compliance', label: 'Post-Registration' },
                { id: 'comparison', label: 'Structure vs Others' },
                { id: 'tax-implications', label: 'Tax Implications' },
                { id: 'financing', label: 'Financing Options' },
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
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Transparent Consultancy Tiers
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0D47A1] mt-2">
                EEPC India Membership Assistance
              </h2>
              <p className="text-sm text-slate-500 mt-2 mx-auto max-w-2xl text-center">
                A conversion-focused single assistance package for engineering exporters who want expert help with eligibility, documents, DGFT e-RCMC filing and EEPC membership coordination.
              </p>
            </div>

            <div className="max-w-[520px] mx-auto">
              <div className="bg-white rounded-2xl border-t-4 border-t-[#FF6B00] border-l border-r border-b border-slate-200 p-6 sm:p-8 shadow-xl flex flex-col justify-between">
                <div>
                  {/* Badges */}
                  <div className="flex items-center justify-start flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 rounded bg-orange-100 text-orange-900 text-[10px] font-black uppercase tracking-wide">
                      EXPORTER SUPPORT PACKAGE
                    </span>
                    <span className="px-3 py-1 rounded bg-yellow-100 text-yellow-900 text-[10px] font-black uppercase tracking-wide">
                      CUSTOM QUOTE • NO HIDDEN SURPRISES
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0D47A1]">EEPC Export Growth Package</h3>
                  <p className="text-sm text-slate-500 mb-6">
                    Built for engineering exporters who want to complete EEPC India membership correctly and move faster toward export opportunities.
                  </p>

                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <div className="flex items-baseline gap-3">
                      <span className="text-lg text-slate-400">Professional Assistance</span>
                      <span className="text-3xl sm:text-4xl font-extrabold text-[#0D47A1]">Get Custom Quote</span>
                    </div>
                    <span className="text-xs text-slate-500 font-medium block mt-1">
                      EEPC subscription/admission fee and GST are payable as applicable
                    </span>
                  </div>

                  {/* Checklist */}
                  <div className="space-y-3.5 mb-8">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">PACKAGE INCLUSIONS:</p>
                    {[
                      'EEPC India Eligibility & Membership Category Review',
                      'IEC, GST & Enterprise Document Checklist',
                      'EEPC / DGFT Coordination Support',
                      'Engineering Product / Service Panel Mapping Support',
                      'Application Query & Follow-Up Assistance',
                      'Dedicated Export Registration Specialist Support'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedPackage('EEPC India Membership Assistance — Custom Quote');
                    scrollToSection('lead-capture-widget');
                  }}
                  className="w-full py-4 rounded-xl bg-[#0D47A1] hover:bg-blue-900 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer text-center"
                >
                  Get Started with EEPC Export Growth Package
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 5. OVERVIEW SECTION */}
        <section id="overview" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Structural Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                What is EEPC India Membership?
              </h2>
            </div>

            {/* Definition paragraph */}
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              EEPC India membership connects eligible engineering exporters with a recognised Export Promotion Council and enables them to obtain e-RCMC through the DGFT Common Digital Platform. Membership can support access to Foreign Trade Policy benefits and a wider export-promotion ecosystem.
            </p>

            {/* 5 Bullets with bold lead-ins */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Target Business Audience:</strong>
                  Ideal for manufacturers, merchant exporters and engineering service exporters looking to strengthen their export credentials and access sector-focused trade promotion support.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Operational Flexibility:</strong>
                  The application should correctly reflect your IEC, GST profile, enterprise status, engineering product/service category, export performance and authorised representative details.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Defined Legal Structure:</strong>
                  EEPC membership does not replace your business incorporation or IEC. It functions as an export-promotion membership/RCMC credential linked to your eligible engineering export activity.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Export-Ready Membership Credential:</strong>
                  For engineering exporters seeking applicable Foreign Trade Policy benefits, an RCMC from the competent Export Promotion Council can be an important export-compliance credential, subject to policy requirements and exemptions.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Market Access & Export Growth:</strong>
                  EEPC India members can access trade promotion initiatives, market intelligence, international fairs, virtual B2B opportunities, seminars and other export-development services subject to programme terms.
                </div>
              </div>
            </div>

            {/* Closing Summary */}
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-2">
              In summary, EEPC India membership can help an eligible engineering exporter become better positioned for export benefits, market access and sector-specific promotion. Our team helps with eligibility, document preparation, e-RCMC filing guidance and application follow-up.
            </p>
          </div>
        </section>

        {/* 6. REGISTRATION SECTION */}
        <section id="registration" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Regulatory Framework
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                How Engineering Export Promotion Council Works in India
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              EEPC India membership/e-RCMC applications are processed through the DGFT Common Digital Platform. The applicant should have an active IEC and provide the documents applicable to its exporter and enterprise category.
            </p>

            <p className="text-slate-700 text-sm leading-relaxed">
              After successful processing, the exporter can obtain the e-RCMC/membership credential for the eligible engineering product or service category and use it for applicable export-policy benefits and Council services.
            </p>

            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B3D91] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#FF5A00]" />
                <span>How akshayb2bsolutions Streamlines Your EEPC Application:</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our export compliance desk reviews IEC/GST/enterprise documents, maps the appropriate engineering category, assists with DGFT e-RCMC filing and supports resolution of application queries.
              </p>
            </div>
          </div>
        </section>

        {/* 7. ADVANTAGES (6 ITEMS) */}
        <section id="advantages" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Core Benefits
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Key Benefits of EEPC India Membership
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: 'RCMC & Foreign Trade Policy Support',
                  desc: 'A valid RCMC can support access to applicable export benefits and concessions under the Foreign Trade Policy for engineering products and services.'
                },
                {
                  title: 'International Trade Promotion',
                  desc: 'Eligible members can participate in international trade fairs, virtual trade fairs and export-promotion programmes, including subsidised opportunities where applicable.'
                },
                {
                  title: 'Market Intelligence & Export Data',
                  desc: 'Access market intelligence reports, export-import data, metal price information, publications and regular export updates available to members.'
                },
                {
                  title: 'Buyer-Seller & B2B Opportunities',
                  desc: 'Use EEPC India networking initiatives, virtual B2B meets and buyer-focused programmes to explore overseas business opportunities.'
                },
                {
                  title: 'Certificate of Origin & Member Services',
                  desc: 'Members may access online Certificate of Origin facilities, visa recommendation support, seminars, webinars, training and other Council services.'
                },
                {
                  title: 'Export Ecosystem Advantage',
                  desc: 'Eligible exporters can leverage Council support around policy, quality, technology upgradation, testing and other export-development initiatives, subject to scheme conditions.'
                }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <span className="w-6 h-6 rounded-full bg-[#0B3D91] text-[#FF5A00] text-xs flex items-center justify-center font-mono">
                      {idx + 1}
                    </span>
                    <h4>{item.title}</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-8">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-xs text-slate-500 text-center pt-2">
              akshayb2bsolutions helps you understand the right membership route, prepare cleaner documentation and reduce avoidable errors before submission.
            </p>
          </div>
        </section>

        {/* 8. CHECKLIST (8 BULLETS) */}
        <section id="checklist" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Export Readiness</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Checklist Before Applying for EEPC India Membership</h2>
            </div>
            <div className="space-y-3">
              {[
                { title: 'Active Import Export Code (IEC)', desc: 'Keep your IEC active and ensure the business details are updated on the DGFT portal before starting the e-RCMC application.' },
                { title: 'Correct Engineering Product / Service Category', desc: 'Identify the engineering goods or services you export so the application can be mapped to the appropriate EEPC India product panel/category.' },
                { title: 'GST Registration Certificate', desc: 'Keep the GST registration certificate and related business details ready wherever applicable to your exporter profile.' },
                { title: 'MSME / Udyam or Large Enterprise Proof', desc: 'MSME applicants should keep Udyam/Udyog Aadhaar-related proof ready; large enterprises may require the prescribed industrial registration evidence.' },
                { title: 'Export Performance Details', desc: 'Keep previous financial-year engineering export turnover details ready because membership category and subscription may depend on export performance.' },
                { title: 'Authorized Representative Details', desc: 'Prepare the name, contact information and authorization details of the person who will represent the business for the membership application.' },
                { title: 'DGFT Portal Access', desc: 'Use your existing DGFT importer/exporter login or create the required access to use the Common Digital Platform for e-RCMC.' },
                { title: 'Pre-Filing Document Review', desc: 'Our team checks your core documents and application details before filing to reduce avoidable mismatches, delays and queries.' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200">
                  <FileCheck className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-700"><strong className="text-slate-900 font-bold block mb-0.5">{item.title}:</strong>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. ELIGIBILITY CRITERIA */}
        <section id="eligibility" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Exporter Eligibility</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Who Can Apply for EEPC India Membership?</h2>
            </div>
            <p className="text-slate-700 text-sm leading-relaxed">EEPC India membership is designed for eligible exporters of engineering products and services. The appropriate membership category depends on the applicant profile, engineering export activity and prescribed export-performance criteria.</p>
            <div className="space-y-3">
              {[
                { title: 'Engineering Goods / Services Exporter', desc: 'Your business should export engineering products or eligible engineering services covered by EEPC India.' },
                { title: 'Manufacturer or Merchant Exporter', desc: 'Both eligible manufacturer exporters and merchant exporters can apply subject to membership rules and document verification.' },
                { title: 'Active IEC Required', desc: 'An active Import Export Code issued through DGFT is a core requirement for the e-RCMC process.' },
                { title: 'Associate / Ordinary Membership', desc: 'Applicants may fall under Associate or Ordinary membership depending on prescribed eligibility, including export performance.' },
                { title: 'Valid Business & Tax Documents', desc: 'IEC, GST and enterprise-related documents should match the legal name and business particulars used in the application.' },
                { title: 'Export Performance Evidence', desc: 'Where applicable, export turnover for the relevant previous financial year should be available for subscription/category assessment.' },
                { title: 'Professional Eligibility Review', desc: 'We review your exporter profile first so you can proceed with the correct membership route and documentation set.' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <ShieldCheck className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-700"><strong className="text-slate-900 font-bold block mb-0.5">{item.title}:</strong>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. REQUIRED DOCUMENTS */}
        <section id="documents" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Document Checklist</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Documents for EEPC India Membership / e-RCMC</h2>
            </div>
            <p className="text-slate-700 text-sm leading-relaxed">The exact document set can vary by applicant and membership category. We first review your profile and then share a precise checklist so you do not waste time uploading unnecessary or mismatched documents.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Active IEC Details', desc: 'Active Import Export Code and matching DGFT profile details of the applicant business.' },
                { title: 'GST Registration Certificate', desc: 'GST REG-06 / GST registration details where applicable to the exporter.' },
                { title: 'MSME / Udyam Proof', desc: 'Udyam/Udyog Aadhaar or prescribed MSME proof for MSME applicants.' },
                { title: 'Large Enterprise Proof', desc: 'SIA/IEM or other prescribed industrial registration evidence, where applicable to large enterprises.' },
                { title: 'Export Performance Information', desc: 'Previous-year engineering export turnover/details required for membership category and subscription assessment.' },
                { title: 'Authorized Representative & Supporting KYC', desc: 'Contact/authorization details and other supporting documents requested for completing the membership application.' }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm"><FileText className="w-4 h-4 text-[#0B3D91]" /><h4>{item.title}</h4></div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. STEPS */}
        <section id="steps" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Application Sequence</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Step-by-Step EEPC India Membership Process</h2>
            </div>
            <div className="space-y-4">
              {[
                { step: 'Step 1', title: 'Eligibility & Export Profile Review', desc: 'We understand your engineering product/service, exporter type, IEC status and previous export performance.' },
                { step: 'Step 2', title: 'Membership Category & Product Mapping', desc: 'We help identify the suitable membership route and relevant engineering product/service panel.' },
                { step: 'Step 3', title: 'Prepare Required Documents', desc: 'Arrange active IEC, GST, enterprise proof, export-performance details and authorization documents as applicable.' },
                { step: 'Step 4', title: 'DGFT e-RCMC Application', desc: 'Complete the EEPC India membership/e-RCMC application through the DGFT Common Digital Platform.' },
                { step: 'Step 5', title: 'Fee Payment & Query Resolution', desc: 'Pay applicable EEPC subscription/admission charges through the prescribed online process and respond to any application query.' },
                { step: 'Step 6', title: 'Receive e-RCMC & Start Using Member Benefits', desc: 'After approval, access the e-RCMC/membership credential and explore eligible EEPC India export-promotion services and benefits.' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-[#0B3D91] text-[#FF5A00] font-black text-xs flex items-center justify-center flex-shrink-0 shadow-xs">{item.step}</div>
                  <div><h4 className="text-sm font-bold text-slate-900 mb-0.5">{item.title}</h4><p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 12. LEGAL / REGULATORY STATUS */}
        <section id="legal-status" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Export Credential</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">EEPC India Membership & e-RCMC Status</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: '1. Government-Recognised Export Promotion Council', desc: 'EEPC India is recognised as an Export Promotion Council for engineering products and services.' },
                { title: '2. RCMC for Export Policy Benefits', desc: 'RCMC is used by eligible exporters for accessing applicable benefits or concessions under the Foreign Trade Policy, subject to policy conditions.' },
                { title: '3. DGFT Common Digital Platform', desc: 'The e-RCMC application is processed online through the DGFT Common Digital Platform using importer/exporter access.' },
                { title: '4. Membership Does Not Replace IEC', desc: 'EEPC membership/e-RCMC works alongside your existing business registrations and active IEC; it is not a substitute for them.' }
              ].map((item, idx) => <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5"><h4 className="text-sm font-bold text-[#0B3D91]">{item.title}</h4><p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p></div>)}
            </div>
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-slate-700 space-y-1"><h4 className="font-bold text-[#0B3D91]">5. Our Role:</h4><p>We help you understand the process, organise documents, select the appropriate route and complete the application with fewer avoidable errors.</p></div>
          </div>
        </section>

        {/* 13. POST-REGISTRATION COMPLIANCE */}
        <section id="post-compliance" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">After Approval</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">After EEPC Membership: Exporter Checklist</h2></div>
            <p className="text-slate-700 text-sm leading-relaxed">Once your membership/e-RCMC is active, keep your exporter information current and use the membership strategically for compliance, trade promotion and market-development opportunities.</p>
            <div className="space-y-3">
              {[
                { title: 'Keep IEC Details Updated', desc: 'Maintain accurate IEC and DGFT profile information and complete required annual IEC confirmation/update.' },
                { title: 'Renew / Pay Membership Subscription', desc: 'Pay applicable annual EEPC membership subscription according to the current category and export-performance slab.' },
                { title: 'Maintain GST & Business Records', desc: 'Keep GST, enterprise registration and core business records current so they match your export credentials.' },
                { title: 'Track Export Performance', desc: 'Maintain engineering export turnover records because membership subscription/category may depend on export performance.' },
                { title: 'Use Trade Promotion Opportunities', desc: 'Watch for EEPC India trade fairs, B2B meets, webinars, market intelligence and other member opportunities relevant to your products.' },
                { title: 'Use RCMC for Eligible FTP Benefits', desc: 'Use the valid RCMC when required for applicable Foreign Trade Policy benefits, concessions or schemes.' },
                { title: 'Ongoing Compliance Support', desc: 'Our team can also assist with IEC updates, GST, AD Code, ICEGATE, other RCMC needs and export-related registrations.' }
              ].map((item, idx) => <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200"><CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" /><div className="text-xs sm:text-sm text-slate-700"><strong className="text-slate-900 font-bold block mb-0.5">{item.title}:</strong>{item.desc}</div></div>)}
            </div>
          </div>
        </section>

        {/* 14. COMPARISON */}
        <section id="comparison" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Know the Difference</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">EEPC India vs Other Export Registrations</h2></div>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
              <table className="w-full min-w-[820px] text-xs text-left"><thead className="bg-[#0B3D91] text-white"><tr><th className="p-3.5">Credential</th><th className="p-3.5">Primary Purpose</th><th className="p-3.5">Who Typically Needs It</th><th className="p-3.5">Key Use</th></tr></thead><tbody className="divide-y divide-slate-200 text-slate-700">
                <tr><td className="p-3.5 font-bold">EEPC India Membership / e-RCMC</td><td className="p-3.5">Engineering export promotion council membership</td><td className="p-3.5">Eligible engineering goods/services exporters</td><td className="p-3.5">Applicable FTP benefits + EEPC member services</td></tr>
                <tr><td className="p-3.5 font-bold">IEC</td><td className="p-3.5">Importer Exporter Code</td><td className="p-3.5">Businesses undertaking import/export</td><td className="p-3.5">Core DGFT import-export identity</td></tr>
                <tr><td className="p-3.5 font-bold">AD Code</td><td className="p-3.5">Bank/customs port linkage</td><td className="p-3.5">Exporters using customs ports</td><td className="p-3.5">Shipping bill/export customs processing</td></tr>
                <tr><td className="p-3.5 font-bold">ICEGATE Registration</td><td className="p-3.5">Customs electronic services access</td><td className="p-3.5">Importers/exporters and trade users</td><td className="p-3.5">E-filing and customs-related online services</td></tr>
              </tbody></table>
            </div>
          </div>
        </section>

        {/* 15. FEES */}
        <section id="tax-implications" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Pricing Clarity</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">EEPC India Fees, GST & Custom Quote</h2></div>
            <p className="text-slate-700 text-sm leading-relaxed">There is no single fixed price suitable for every applicant. EEPC India subscription can depend on membership category and engineering export performance; admission/readmission charges and GST may also apply. That is why this page uses a custom quote instead of showing a misleading fixed fee.</p>
            <div className="space-y-3">
              {[
                { title: 'Subscription Based on Export Performance', desc: 'Associate/Ordinary member subscription is structured by engineering export performance slabs for the relevant financial year.' },
                { title: 'Admission / Readmission Fee May Apply', desc: 'New or revived members may have an additional one-time admission/readmission fee as prescribed by EEPC India.' },
                { title: 'GST on Applicable Fees', desc: 'GST is charged on subscription/admission/readmission fees at the applicable rate.' },
                { title: 'Professional Assistance Fee', desc: 'Our service fee depends on the complexity of your documents, category mapping and level of filing/follow-up support required.' },
                { title: 'Transparent Quote Before Work Starts', desc: 'We review your case first and provide a clear quote so you know the professional assistance scope before proceeding.' },
                { title: 'No False Fixed-Price Promise', desc: 'Because official membership charges can vary, we do not advertise one fixed total that may not apply to your business.' }
              ].map((item, idx) => <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200"><IndianRupee className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" /><div className="text-xs sm:text-sm text-slate-700"><strong className="text-slate-900 font-bold block mb-0.5">{item.title}:</strong>{item.desc}</div></div>)}
            </div>
          </div>
        </section>

        {/* 16. EXPORT GROWTH OPTIONS */}
        <section id="financing" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Member Growth Opportunities</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">How EEPC India Membership Can Support Export Growth</h2></div>
            <p className="text-slate-700 text-sm leading-relaxed">The value of EEPC membership goes beyond the certificate. Eligible members can use Council programmes and information resources to discover markets, buyers, knowledge and trade-promotion opportunities.</p>
            <div className="space-y-3">
              {[
                { title: 'International Trade Fairs', desc: 'Explore participation opportunities in overseas trade fairs, including subsidised participation under applicable programmes.' },
                { title: 'Virtual B2B Meets', desc: 'Connect with overseas buyers through one-to-one virtual business matching opportunities.' },
                { title: 'Market Intelligence & Export-Import Data', desc: 'Use market reports, export-import data, price information and publications to make better export decisions.' },
                { title: 'Certificate of Origin', desc: 'Members can access eligible online Certificate of Origin services through the Council.' },
                { title: 'Seminars, Webinars & Training', desc: 'Attend export-focused knowledge sessions and training programmes, often at member-preferred rates.' },
                { title: 'Visa Recommendation Support', desc: 'Eligible members can seek visa recommendation letters for relevant international business travel.' },
                { title: 'Policy, Quality & Technology Support', desc: 'Access professional consultation and Council initiatives around policy issues, quality and technology upgradation.' }
              ].map((item, idx) => <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200"><TrendingUp className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" /><div className="text-xs sm:text-sm text-slate-700"><strong className="text-slate-900 font-bold block mb-0.5">{item.title}:</strong>{item.desc}</div></div>)}
            </div>
          </div>
        </section>

        {/* 17. HOW AKSHAYB2BSOLUTIONS HELPS */}
        <section id="why-akshayb2b" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Our Value Proposition</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">How akshayb2bsolutions Helps Engineering Exporters</h2></div>
            <div className="space-y-3">
              {[
                { title: 'Exporter Eligibility Check', desc: 'We review your IEC, exporter type, engineering activity and export profile before you spend time on the application.' },
                { title: 'Correct Product / Service Mapping', desc: 'We help align your engineering export activity with the appropriate EEPC India panel/category for cleaner filing.' },
                { title: 'Document Preparation & Verification', desc: 'We organise the required IEC, GST, MSME/enterprise, export-performance and authorization documents.' },
                { title: 'DGFT e-RCMC Filing Guidance', desc: 'Get step-by-step support for completing the e-RCMC process on the DGFT Common Digital Platform.' },
                { title: 'Query Resolution & Follow-Up Support', desc: 'If clarification or correction is required, our team helps you respond and keep the application moving.' }
              ].map((item, idx) => <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200"><CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" /><div className="text-xs sm:text-sm text-slate-700"><strong className="text-slate-900 font-bold block mb-0.5">{item.title}:</strong>{item.desc}</div></div>)}
            </div>
          </div>
        </section>

        {/* 18. TRUST / WHY US SECTION (6 CARDS) */}
        <section className="py-14 bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Proven Excellence
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Why Engineering Exporters Choose akshayb2bsolutions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Expert Legal Guidance',
                  desc: 'Export-registration guidance backed by a process-focused compliance team for pan-India applicants.',
                  icon: Award
                },
                {
                  title: 'Time-Saving Digital Process',
                  desc: 'Guided digital workflows designed to reduce repetitive paperwork and unnecessary back-and-forth during filing.',
                  icon: Clock
                },
                {
                  title: 'Affordable Transparent Pricing',
                  desc: 'Clear professional-fee communication with a custom quote based on your exporter profile, membership category and required support.',
                  icon: Tag
                },
                {
                  title: 'Trusted by Thousands',
                  desc: 'Process-driven registration and compliance assistance for businesses across India, backed by dedicated support and digital workflows.',
                  icon: Users
                },
                {
                  title: 'Automated Compliance Alerts',
                  desc: 'Never miss a GST or tax filing due date with our automated SMS and email reminders.',
                  icon: Zap
                },
                {
                  title: 'Secure and Confidential',
                  desc: 'Enterprise-grade 256-bit SSL encryption protecting your IEC, GST, KYC and export-related business documents.',
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
              Launch Your Enterprise Today
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              Get EEPC India Membership Support with Confidence
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Take the next step toward a stronger engineering export profile. Get document review, e-RCMC filing guidance and dedicated application support with a clear custom quote before you proceed.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => scrollToSection('lead-capture-widget')}
                className="px-6 py-3 rounded-xl bg-[#FF5A00] hover:bg-orange-500 text-[#0B3D91] font-black text-xs sm:text-sm shadow-xl transition-all cursor-pointer"
              >
                Check Eligibility & Get Quote
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
                        Starts {srv.price}
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
                  Track Your Export Registration Support
                </h3>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Access application updates, uploaded documents and support conversations from one convenient workflow during your export registration journey.
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
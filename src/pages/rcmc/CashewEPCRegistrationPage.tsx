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
  BookOpenCheck,
  Nut,
  Globe2,
  Ship,
  PackageCheck,
  BadgeCheck,
  Factory
} from 'lucide-react';
import {
  INDIAN_STATES_AND_UTS,
  BUSINESS_TYPES,
  BUSINESS_ACTIVITIES,
  COMPANY_DETAILS
} from '../../data/servicesData';
import { HeaderMegaMenu } from '../../components/HeaderMegaMenu';
import { TopUtilityBar } from '../../components/TopUtilityBar';

interface CashewEPCRegistrationPageProps {
  onBackToHome: () => void;
  onSelectService: (serviceName: string) => void;
  onOpenBrochure: () => void;
  onOpenAppointment: () => void;
}

// 6 Accordion FAQs (adapted from the Indian CEPCI Act, 1932 framework)
const FAQ_ITEMS = [
  { q: 'What is Cashew Export Promotion Council Registration?', a: 'Cashew Export Promotion Council Registration generally refers to membership / Registration-Cum-Membership Certificate (RCMC) with the Cashew Export Promotion Council of India (CEPCI) for eligible cashew exporters.' },
  { q: 'Who should apply for CEPCI RCMC?', a: 'Eligible cashew processors, manufacturer exporters, merchant exporters and other businesses engaged in covered cashew export activities can apply, subject to CEPCI and DGFT requirements.' },
  { q: 'Why is CEPCI Registration useful for cashew exporters?', a: 'CEPCI membership / RCMC can support participation in the cashew export promotion ecosystem, access to sector information, policy representation, export-promotion initiatives and applicable Foreign Trade Policy benefits.' },
  { q: 'How is CEPCI RCMC applied for?', a: 'RCMC applications, renewals and amendments are handled through the DGFT e-RCMC platform. An active IEC, updated IEC profile and valid DSC or Aadhaar e-Sign are generally required for filing.' },
  { q: 'What documents are commonly required?', a: 'The exact checklist depends on exporter category, but typically includes IEC-linked exporter details, PAN/entity information, business and export details, authorized-signatory information and supporting records requested through the DGFT / CEPCI process.' },
  { q: 'Is CEPCI registration fee fixed for everyone?', a: 'No. Membership and subscription charges can vary by exporter category and the applicable membership schedule. We provide a custom quote after reviewing your exporter profile and support requirements.' }
]

// Related services cross-linking items — sourced from CEPCI-adjacent structures
const RELATED_SERVICES = [
  { title: 'IEC Registration', desc: 'Importer Exporter Code registration support for cashew processors, manufacturers and merchant exporters entering global trade.', img: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&auto=format&fit=crop&q=80', price: 'Contact Contact for Price' },
  { title: 'RCMC Registration', desc: 'Registration-Cum-Membership Certificate support through the appropriate Export Promotion Council or registering authority.', img: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=600&auto=format&fit=crop&q=80', price: 'Contact Contact for Price' },
  { title: 'AD Code Registration', desc: 'AD Code and port-related customs registration support for cashew exporters shipping goods from India.', img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&auto=format&fit=crop&q=80', price: 'Contact Contact for Price' },
  { title: 'GST Registration', desc: 'GST registration and compliance support for cashew processors, traders, manufacturers and export businesses.', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&auto=format&fit=crop&q=80', price: 'Contact Contact for Price' },
  { title: 'FSSAI Registration', desc: 'Food business licensing and registration support for eligible cashew processors, packers, importers and exporters.', img: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&auto=format&fit=crop&q=80', price: 'Contact Contact for Price' },
  { title: 'Trademark Registration', desc: 'Protect your cashew brand, packaging identity and logo before expanding into domestic and international markets.', img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=80', price: 'Contact Contact for Price' },
  { title: 'MSME Udyam Registration', desc: 'Udyam registration support for eligible cashew processors, manufacturers and export-focused MSMEs.', img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&auto=format&fit=crop&q=80', price: 'Contact Contact for Price' },
  { title: 'Export Documentation Support', desc: 'Practical assistance with export documentation, shipping readiness and compliance coordination for cashew exporters.', img: 'https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?w=600&auto=format&fit=crop&q=80', price: 'Contact Contact for Price' },
  { title: 'Cashew Export Compliance Consultation', desc: 'Combined roadmap for IEC, CEPCI RCMC, FSSAI, GST, AD Code and other export-readiness requirements.', img: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&auto=format&fit=crop&q=80', price: 'Contact Contact for Price' }
]

export const CashewEPCRegistrationPage: React.FC<CashewEPCRegistrationPageProps> = ({
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
  const [businessType, setBusinessType] = useState('Manufacturer Exporter');
  const [businessActivity, setBusinessActivity] = useState(BUSINESS_ACTIVITIES[0]);
  const [panNumber, setPanNumber] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('CEPCI Registration Support — Custom Quote');
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
            <span className="text-slate-900 font-bold">Cashew Export Promotion Council Registration</span>
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
                  <span>Noida &amp; Pan-India Registration Desk</span>
                  <span className="w-1 h-1 rounded-full bg-white/60"></span>
                  <span className="text-white">Fast-Track 7-15 Days TAT</span>
                </div>

                {/* H1 Heading & Tagline */}
                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight antialiased">
                    Cashew Export Promotion Council Registration
                  </h1>
                  <div className="space-y-0.5">
                    <p className="text-xl sm:text-2xl font-black text-orange-300 antialiased">
                      Take your cashew exports global with{' '}
                      <span className="underline decoration-[#FF5A00] decoration-2 underline-offset-4 font-black text-white">
                        CEPCI RCMC support
                      </span>
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-blue-100 antialiased">
                      Custom quote after exporter-profile review
                    </p>
                  </div>
                </div>

                {/* Definition: 2-3 Line Description */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                  Cashew Export Promotion Council Registration in India is the legal process of establishing a non-governmental organization for charitable, social-welfare, educational, healthcare, religious, or community-focused objectives. Depending on the chosen structure, an CEPCI may be registered as a Society, Trust, or Section 8 Company under applicable Indian laws.
                </p>

                {/* 6 Feature Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Clock className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>DGFT e-RCMC Filing</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Nut className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Cashew Exporter Focused</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <PackageCheck className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Exporter Document Review</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Zap className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Digital RCMC Support</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Globe2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>DGFT / CEPCI Filing</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Ship className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
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
                      Certificates Issued
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
                    <span>Free Exporter Eligibility Check</span>
                  </div>

                  {formSubmitted ? (
                    <div className="text-center py-8 space-y-4 animate-in fade-in">
                      <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Application Received!</h3>
                      <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
                        Thank you <span className="font-bold">{applicantName}</span>. Our Noida-based CEPCI specialist has been assigned to your registration docket. We will call you within 15 minutes at <span className="font-bold">{applicantMobile}</span>.
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
                              Registration Support
                            </span>
                            <span className="text-base font-black text-[#0B3D91] leading-none">
                              Contact Contact for Price
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-[11px] font-bold text-slate-800 block leading-tight">
                            + CEPCI / Statutory Charges
                          </span>
                          <span className="text-[10px] font-medium text-slate-500 block leading-tight">
                            As applicable to your category
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
                                Select Your State / Export Business Location *
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
                                The applicable registration authority and documentation depend on whether your CEPCI is formed as a Society, Trust, or Section 8 Company.
                              </span>
                            </div>

                            <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100 text-xs text-slate-600 space-y-1">
                              <div className="flex items-center gap-1.5 font-bold text-[#0B3D91]">
                                <ShieldCheck className="w-4 h-4 text-[#FF5A00]" />
                                <span>Why register with akshayb2bsolutions?</span>
                              </div>
                              <p className="text-[11px]">
                                Complete CEPCI name-check, MOA / Trust Deed / Society Rules drafting, government filing support, and registration guidance with minimal paperwork.
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
                                  CEPCI Structure *
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
                                  CEPCI Activity / Objective *
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
                                Applicant / Authorized Signatory Full Name *
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
                                Applicant / Business PAN Number (Optional for quote)
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
                                Select CEPCI Registration Support *
                              </label>
                              <select
                                value={selectedPackage}
                                onChange={(e) => setSelectedPackage(e.target.value)}
                                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                              >
                                <option value="CEPCI Registration Support — Custom Quote">Cashew Export Promotion Council Registration Package — Contact Contact for Price + CEPCI / Statutory Chargess</option>
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
                                  <span>Submit &amp; Get CEPCI Quote</span>
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
                Cashew Export Growth Support
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0D47A1] mt-2">
                Choose Your CEPCI Package
              </h2>
              <p className="text-sm text-slate-500 mt-2 mx-auto max-w-2xl text-center">
                This package includes professional CEPCI registration guidance, document preparation, applicable government filing support, and dedicated compliance assistance.
              </p>
            </div>

            <div className="max-w-[520px] mx-auto">
              <div className="bg-white rounded-2xl border-t-4 border-t-[#FF6B00] border-l border-r border-b border-slate-200 p-6 sm:p-8 shadow-xl flex flex-col justify-between">
                <div>
                  {/* Badges */}
                  <div className="flex items-center justify-start flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 rounded bg-orange-100 text-orange-900 text-[10px] font-black uppercase tracking-wide">
                      CASHEW EXPORTER GROWTH PACKAGE
                    </span>
                    <span className="px-3 py-1 rounded bg-yellow-100 text-yellow-900 text-[10px] font-black uppercase tracking-wide">
                      CUSTOM QUOTE AFTER PROFILE REVIEW
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0D47A1]">CEPCI Export Growth Package</h3>
                  <p className="text-sm text-slate-500 mb-6">
                    For eligible cashew processors, manufacturer exporters and merchant exporters who want CEPCI / RCMC support plus a practical checklist for the next export-compliance steps.
                  </p>

                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <div className="flex items-baseline gap-3">
                      <span className="text-lg text-slate-400 line-through">Contact Contact for Price</span>
                      <span className="text-4xl font-extrabold text-[#0D47A1]">Contact Contact for Price</span>
                    </div>
                    <span className="text-xs text-slate-500 font-medium block mt-1">
                      Custom quote after exporter-profile review
                    </span>
                  </div>

                  {/* Checklist */}
                  <div className="space-y-3.5 mb-8">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">PACKAGE INCLUSIONS:</p>
                    {[
                      'CEPCI / RCMC Eligibility & Profile Review',
                      'IEC & DGFT Profile Readiness Check',
                      'DGFT / CEPCI Filing Support',
                      'Basic CEPCI Name Availability Check',
                      'Required Document Checklist & Verification',
                      'Dedicated CEPCI Registration Support'
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
                    setSelectedPackage('CEPCI Registration Support — Custom Quote');
                    scrollToSection('lead-capture-widget');
                  }}
                  className="w-full py-4 rounded-xl bg-[#0D47A1] hover:bg-blue-900 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer text-center"
                >
                  Get Started with CEPCI Export Growth Package
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
                Cashew Export Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                What is a CEPCI in India?
              </h2>
            </div>

            {/* Definition paragraph */}
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              CEPCI registration gives a non-governmental organization a recognized legal identity to operate for lawful charitable or social-welfare objectives. The organization may be structured as a Society, Trust, or Section 8 Company, with its governing documents defining its purpose, members or trustees, management, and rules.
            </p>

            {/* 5 Bullets with bold lead-ins */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Target Business Audience:</strong>
                  Ideal for charitable organizations, social-welfare initiatives, educational and healthcare projects, community organizations, foundations, and other non-profit initiatives seeking a legally recognized structure.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Operational Flexibility:</strong>
                  Properly drafted MOA, Trust Deed, or Society Rules clearly define the CEPCI's objectives, governance, membership or trusteeship, powers, duties, and operational framework.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Defined Legal Structure:</strong>
                  The legal identity and liability framework depends on whether the CEPCI is formed as a Society, Trust, or Section 8 Company; the governing documents and applicable law determine the responsibilities of members, trustees, directors, and office bearers.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Optional but Valuable Registration:</strong>
                  Registration under the Indian CEPCI Act is not mandatory, but it offers significant legal advantages, including the right to sue third parties and fellow members / trustees in case of disputes.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Growth and Capital Limitations:</strong>
                  An CEPCI is not formed for distributing profits to members. Eligible organizations can pursue donations, grants, CSR opportunities, and other lawful funding avenues subject to applicable approvals and compliance.
                </div>
              </div>
            </div>

            {/* Closing Summary */}
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-2">
              In summary, CEPCI registration provides a recognized legal framework for pursuing social and charitable objectives. Our team supports name selection, documentation, filing, government coordination, and post-registration guidance.
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
                How Cashew Export Promotion Council Registration Works in India
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              CEPCI registration is the formal legal process of establishing a non-governmental organization in India. The application and documents vary according to whether the organization is registered as a Society, Trust, or Section 8 Company.
            </p>

            <p className="text-slate-700 text-sm leading-relaxed">
              After approval, the relevant authority issues the CEPCI registration certificate or incorporation document. This helps establish legal recognition and supports activities such as opening a bank account, entering agreements, applying for eligible grants, and building donor confidence.
            </p>

            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B3D91] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#FF5A00]" />
                <span>How akshayb2bsolutions Streamlines Your Registration:</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our legal desk helps prepare the appropriate MOA, Trust Deed, Society Rules, declarations, and supporting documents and assists with filing and government follow-up.
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
                Key Advantages of a CEPCI
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Legal Recognition & Right to Sue',
                  desc: 'Legal recognition helps the CEPCI operate through a defined legal structure, enter agreements, maintain records, and pursue its stated charitable or social objectives.'
                },
                {
                  title: 'Shared Capital & Combined Expertise',
                  desc: 'Members / Trustees pool resources, skills, and networks, enabling faster growth than a single-owner structure with minimal capital constraints.'
                },
                {
                  title: 'Minimal Start-up Costs & Quick Setup',
                  desc: 'Get professional documentation and registration support with transparent professional fees; the final timeline depends on CEPCI structure, state, authority, and government verification.'
                },
                {
                  title: 'Improved Business Credibility',
                  desc: 'Registration builds trust with clients, banks, and vendors, which is critical when applying for loans, tenders, or large contracts.'
                },
                {
                  title: 'Simplified Compliance Structure',
                  desc: 'Free from board meetings, MCA annual filings, and complex registrar disclosures required of companies and LLPs.'
                },
                {
                  title: 'Access to Government Benefits',
                  desc: 'Eligible CEPCIs may access government schemes, grants, CSR opportunities, and donor programs subject to the relevant eligibility and compliance requirements.'
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
              akshayb2bsolutions ensures you leverage each of these advantages while staying fully compliant with all local, state, and central tax regulations.
            </p>
          </div>
        </section>

        {/* 8. CHECKLIST (8 BULLETS) */}
        <section id="checklist" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Pre-Application Readiness
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Checklist Before Registering Your CEPCI
              </h2>
            </div>

            <div className="space-y-3">
              {[
                {
                  title: 'Unique CEPCI Name Selection',
                  desc: 'Choose a distinctive, legally permissible firm name that does not infringe on registered trademarks or violate state naming guidelines.'
                },
                {
                  title: 'Clear Commercial Business Activity Identification',
                  desc: 'Define your primary goods, services, or trading products to accurately draft the deed and map applicable HSN/SAC codes.'
                },
                {
                  title: 'Clearly Defined CEPCI Objectives and Governance',
                  desc: 'Agree in advance on each founder / trustee\'s capital contribution and profit/loss sharing ratio to avoid disputes after registration.'
                },
                {
                  title: 'Valid Identity and Address Proofs of All Members / Trustees',
                  desc: 'Ensure each founder / trustee\'s PAN Card and Aadhaar Card details match identically and are linked to an active mobile number for OTP verification.'
                },
                {
                  title: 'Commercial or Residential Business Address Proof',
                  desc: 'Prepare recent utility bills (electricity, water, or municipal tax receipt under 2 months old) along with a rent agreement or ownership proof.'
                },
                {
                  title: 'Draft MOA / Trust Deed / Society Rules',
                  desc: 'Clearly state the CEPCI objectives, governance, membership or trusteeship, powers, duties, meetings, accounts, and dissolution provisions in the governing document.'
                },
                {
                  title: 'Identification of Required Sectoral Licenses',
                  desc: 'Determine whether supplementary licenses such as FSSAI, GST, or Import Export Code are required for your trade activity.'
                },
                {
                  title: 'akshayb2bsolutions Verification Role',
                  desc: 'Our compliance team conducts a preliminary document review to identify discrepancies and improve filing accuracy before submission.'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-700">
                    <strong className="text-slate-900 font-bold block mb-0.5">{item.title}:</strong>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. ELIGIBILITY CRITERIA */}
        <section id="eligibility" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Statutory Qualification
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                CEPCI Registration Eligibility
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              To register a CEPCI in India, there must be a minimum of two members / trustees and a maximum of twenty. All members / trustees must be competent to contract under the Indian Contract Act, meaning they are of sound mind, legally qualified, and above eighteen years of age.
            </p>

            <div className="space-y-3">
              {[
                {
                  title: 'Minimum Two, Maximum Twenty Members / Trustees',
                  desc: 'The minimum founders, members, trustees, or directors depend on the chosen CEPCI structure and applicable state or central law.'
                },
                {
                  title: 'Age and Legal Capacity',
                  desc: 'Founders, trustees, members, or directors must satisfy the eligibility and documentation requirements applicable to the selected CEPCI structure.'
                },
                {
                  title: 'Unique CEPCI Name Requirement',
                  desc: 'The CEPCI must have a unique name that does not infringe on existing trademarks or include prohibited or restricted words.'
                },
                {
                  title: 'Written CEPCI Deed',
                  desc: 'The appropriate MOA, Trust Deed, or Society Rules must clearly state the CEPCI objectives, governance structure, powers, duties, and operating rules.'
                },
                {
                  title: 'Principal Place of Business in India',
                  desc: 'The CEPCI must have a valid registered office address with acceptable address proof and NOC where required.'
                },
                {
                  title: 'Sector-Specific Regulations',
                  desc: 'Regulated sectors such as banking, insurance, and NBFC operations require corporate company status and cannot operate as a CEPCI.'
                },
                {
                  title: 'Pre-Registration Compliance Verification',
                  desc: 'akshayb2bsolutions validates each founder / trustee\'s identity, KYC credentials, and deed clauses to ensure 100% statutory eligibility before filing.'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <ShieldCheck className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-700">
                    <strong className="text-slate-900 font-bold block mb-0.5">{item.title}:</strong>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. REQUIRED DOCUMENTS (6 BULLETS) */}
        <section id="documents" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Document Checklist
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Documents Commonly Required for CEPCI / RCMC
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              To process your CEPCI registration smoothly, identity and address proofs of founders, trustees, members, or directors, registered-office proof, photographs, and the applicable governing documents are generally required. Documents can be collected digitally.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Members / Trustees\' Identity Proof (PAN Cards)',
                  desc: 'Scanned copies of each founder / trustee\'s Permanent Account Number (PAN) card, which serves as the primary tax identifier.'
                },
                {
                  title: 'Members / Trustees\' Address Proof (Aadhaar Card / Voter ID)',
                  desc: 'Accepted identity and address proof such as Aadhaar, Voter ID, Passport, or other applicable documents for founders, trustees, members, or directors.'
                },
                {
                  title: 'Business Premises Address Proof',
                  desc: 'Recent electricity bill, water bill, or property tax receipt (less than 2 months old) for the registered business premises.'
                },
                {
                  title: 'No Objection Certificate (NOC) / Rent Agreement',
                  desc: 'Registered rent agreement and a signed NOC from the property owner if the business premises are rented or leased.'
                },
                {
                  title: 'Signed MOA / Trust Deed / Society Rules',
                  desc: 'The applicable governing document signed/executed by the required founders, trustees, members, or directors, covering CEPCI objectives and governance rules.'
                },
                {
                  title: 'akshayb2bsolutions Document Support & Formatting',
                  desc: 'Our legal drafting team prepares the applicable MOA, Trust Deed, Society Rules, NOC drafts, declarations, and supporting documents according to the relevant authority requirements.'
                }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm">
                    <FileText className="w-4 h-4 text-[#0B3D91]" />
                    <h4>{item.title}</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. STEPS (6 NUMBERED STEPS) */}
        <section id="steps" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Registration Sequence
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Step-by-Step CEPCI / RCMC Process
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  step: 'Step 1',
                  title: 'Draft MOA / Trust Deed / Society Rules',
                  desc: 'We prepare the appropriate governing document detailing the CEPCI objectives, founders/trustees, governance, powers, duties, and operating rules.'
                },
                {
                  step: 'Step 2',
                  title: 'Collect Documents & KYC of All Members / Trustees',
                  desc: 'Upload PAN, identity/address proof, registered-office proof, NOC where required, and photographs of the required founders, trustees, members, or directors.'
                },
                {
                  step: 'Step 3',
                  title: 'Choose & Verify a Unique CEPCI Name',
                  desc: 'Our team helps check the proposed CEPCI name against applicable naming requirements and obvious conflicts before filing.'
                },
                {
                  step: 'Step 4',
                  title: 'Submit Application to relevant registering authority',
                  desc: 'We file Form 1, the stamped CEPCI deed, and supporting documents with the state\'s relevant registering authority on your behalf.'
                },
                {
                  step: 'Step 5',
                  title: 'IEC & DGFT Profile Readiness Check & GST Registration',
                  desc: 'We apply for the CEPCI\'s PAN and, where turnover thresholds apply, complete GST registration for tax compliance.'
                },
                {
                  step: 'Step 6',
                  title: 'Certificate Dispatch & Bank Account Resolution Kit',
                  desc: 'Receive the CEPCI registration certificate/incorporation documents and governing-document copies, followed by guidance for opening the CEPCI bank account and completing applicable post-registration formalities.'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-[#0B3D91] text-[#FF5A00] font-black text-xs flex items-center justify-center flex-shrink-0 shadow-xs">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-0.5">{item.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 12. LEGAL STATUS (5 SUB-HEADINGS) */}
        <section id="legal-status" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Jurisprudential Position
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Legal Status of a CEPCI
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
                <h4 className="text-sm font-bold text-[#0B3D91]">1. Legal Identity</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The legal personality of an CEPCI depends on its structure. A Section 8 Company has a separate corporate identity, while Society and Trust structures are governed by their respective laws and constitutive documents.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
                <h4 className="text-sm font-bold text-[#0B3D91]">2. Compliance Requirements</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Post-registration compliance depends on the CEPCI structure and activities and may include annual returns, accounts, tax filings, renewal/updates, donor records, and other statutory reporting.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
                <h4 className="text-sm font-bold text-[#0B3D91]">3. Advantages &amp; Limitations</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Offers speed, shared responsibility, and pooled resources, but registered firms still lack perpetual succession — the entity may dissolve upon a founder / trustee\'s exit, unless the deed states otherwise.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
                <h4 className="text-sm font-bold text-[#0B3D91]">4. Risk &amp; Responsibility</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The responsibilities and liability of members, trustees, directors, and office bearers depend on the selected legal structure and applicable law.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-slate-700 space-y-1">
              <h4 className="font-bold text-[#0B3D91]">5. akshayb2bsolutions&apos;s Role in Explaining Legal Implications:</h4>
              <p>
                Our legal advisors guide you on the appropriate CEPCI structure, governing documents, tax registrations, donor-related registrations, and ongoing compliance requirements.
              </p>
            </div>
          </div>
        </section>

        {/* 13. POST-REGISTRATION COMPLIANCE (7 BULLETS) */}
        <section id="post-compliance" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Ongoing Obligations
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Post-Registration Compliance Checklist
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              After registration, CEPCIs must adhere to ongoing compliance requirements to remain legally valid and avoid monetary penalties or interest charges.
            </p>

            <div className="space-y-3">
              {[
                {
                  title: 'PAN / TAN & Applicable Tax Registration',
                  desc: 'Apply for a Permanent Account Number (PAN) in the CEPCI\'s name and, if applicable, register for Goods and Services Tax (GST).'
                },
                {
                  title: 'Current Bank Account Opening',
                  desc: 'Open a dedicated bank account in the registered CEPCI name with the required registration and KYC documents.'
                },
                {
                  title: 'Annual CEPCI Compliance & Tax Filing',
                  desc: 'File the CEPCI\'s annual tax return at the flat 30% corporate-style rate plus applicable surcharge and cess, along with audit if turnover exceeds limits.'
                },
                {
                  title: 'Report Changes to the relevant registering authority',
                  desc: 'Report applicable changes to governing documents, trustees, directors, registered office, or other particulars to the relevant authority.'
                },
                {
                  title: 'Periodic GST Return Filings',
                  desc: 'File monthly or quarterly GST returns summarizing sales, input tax credits, and net tax liabilities within statutory due dates.'
                },
                {
                  title: 'Labour Law Compliance (EPF/ESI)',
                  desc: 'Comply with labour laws, including Employees\' Provident Fund (EPF) and Employee State Insurance (ESI), if the CEPCI employs staff.'
                },
                {
                  title: 'akshayb2bsolutions Ongoing Compliance Support',
                  desc: 'Our cloud compliance system sends automated SMS/email alerts for every upcoming filing date and provides automated CA return preparation.'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-700">
                    <strong className="text-slate-900 font-bold block mb-0.5">{item.title}:</strong>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 14. COMPARISON TABLE (8 ROWS) */}
        <section id="comparison" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Structure Comparison
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                CEPCI vs Other Business Structures
              </h2>
            </div>

            <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left text-xs border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-[#0B3D91] text-white">
                    <th className="p-3.5 font-bold border-r border-blue-800">Parameter</th>
                    <th className="p-3.5 font-bold bg-orange-500 text-[#0B3D91] border-r border-orange-600">
                      CEPCI
                    </th>
                    <th className="p-3.5 font-bold border-r border-blue-800">Sole Proprietorship</th>
                    <th className="p-3.5 font-bold border-r border-blue-800">LLP</th>
                    <th className="p-3.5 font-bold">Private Limited Company</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">1. Governing Law</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold text-orange-800 border-r border-slate-200">
                      Indian CEPCI Act, 1932
                    </td>
                    <td className="p-3.5 border-r border-slate-200">No Single Central Statute</td>
                    <td className="p-3.5 border-r border-slate-200">LLP Act, 2008</td>
                    <td className="p-3.5">Companies Act, 2013</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">2. Number of Owners</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold text-orange-800 border-r border-slate-200">
                      2 to 20 Members / Trustees
                    </td>
                    <td className="p-3.5 border-r border-slate-200">1 Sole Owner</td>
                    <td className="p-3.5 border-r border-slate-200">2 or More Designated Members / Trustees</td>
                    <td className="p-3.5">2 to 200 Shareholders</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">3. Liability Exposure</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold text-rose-700 border-r border-slate-200">
                      Unlimited, Joint &amp; Several
                    </td>
                    <td className="p-3.5 border-r border-slate-200">Unlimited Personal Liability</td>
                    <td className="p-3.5 border-r border-slate-200">Limited to Contribution</td>
                    <td className="p-3.5 text-orange-800 font-semibold">Limited to Share Capital</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">4. Taxation</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold border-r border-slate-200">
                      Tax treatment depends on CEPCI structure and applicable exemptions
                    </td>
                    <td className="p-3.5 border-r border-slate-200">Personal Slab Rates</td>
                    <td className="p-3.5 border-r border-slate-200">Flat 30% on LLP</td>
                    <td className="p-3.5 text-orange-800 font-semibold">22%-25% Corporate Rate</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">5. Decision-Making</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold border-r border-slate-200">
                      Consensus Among Members / Trustees
                    </td>
                    <td className="p-3.5 border-r border-slate-200">100% Sole Owner Autonomy</td>
                    <td className="p-3.5 border-r border-slate-200">As per LLP Agreement</td>
                    <td className="p-3.5">Board of Directors &amp; Shareholders</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">6. Compliance Burden</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold text-orange-800 border-r border-slate-200">
                      Low (Income Tax &amp; GST)
                    </td>
                    <td className="p-3.5 border-r border-slate-200">Lowest (Tax Filings Only)</td>
                    <td className="p-3.5 border-r border-slate-200">Medium (Form 8 &amp; 11 MCA)</td>
                    <td className="p-3.5">High (AOC-4, MGT-7, Audits)</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">7. Credibility &amp; Trust</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold border-r border-slate-200">
                      Structure-dependent compliance
                    </td>
                    <td className="p-3.5 border-r border-slate-200">Moderate (Local Trade)</td>
                    <td className="p-3.5 border-r border-slate-200">High</td>
                    <td className="p-3.5 text-orange-800 font-semibold">Highest (Global Standards)</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">8. Ideal For</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold text-slate-900 border-r border-slate-200">
                      Charitable, Social &amp; Community Initiatives
                    </td>
                    <td className="p-3.5 border-r border-slate-200">Solo Founders, Retailers</td>
                    <td className="p-3.5 border-r border-slate-200">Social Welfare &amp; Non-Profit Organizations</td>
                    <td className="p-3.5">High-Growth Startups &amp; Tech</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 15. TAX IMPLICATIONS (6 BULLETS) */}
        <section id="tax-implications" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Tax Architecture
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Tax Treatment for CEPCIs in India
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              CEPCI tax treatment depends on the legal structure and eligibility for applicable exemptions. Eligible charitable organizations may apply for tax registrations and exemptions subject to the Income Tax Act and approval requirements.
            </p>

            <div className="space-y-3">
              {[
                {
                  title: 'Tax Treatment Depends on CEPCI Structure',
                  desc: 'Tax liability and exemptions depend on whether the CEPCI is a Trust, Society, or Section 8 Company and on applicable approvals and activities.'
                },
                {
                  title: 'Charitable Application of Income',
                  desc: 'Eligible CEPCIs must apply income according to their charitable objects and comply with the conditions attached to applicable tax exemptions.'
                },
                {
                  title: 'Deductible Remuneration & Interest',
                  desc: 'Remuneration and interest paid to working members / trustees are taxable in the founder / trustee\'s hands but deductible for the CEPCI, subject to prescribed limits.'
                },
                {
                  title: 'GST Threshold Exemption Limits',
                  desc: 'GST registration remains optional until annual turnover crosses Contact Contact for Price Lakhs for goods suppliers (Contact Contact for Price Lakhs for special category states) and Contact Contact for Price Lakhs for service providers.'
                },
                {
                  title: 'Mandatory Tax Audit Above Turnover Limits',
                  desc: 'Eligible CEPCIs should maintain proper books, supporting records, annual accounts, and complete audits or filings required under their applicable law.'
                },
                {
                  title: 'akshayb2bsolutions Tax Planning Support',
                  desc: 'Our compliance team helps organize accounts, tax registrations, applicable exemptions, and statutory reporting in line with the CEPCI structure.'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <IndianRupee className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-700">
                    <strong className="text-slate-900 font-bold block mb-0.5">{item.title}:</strong>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 16. FINANCING OPTIONS (7 BULLETS) */}
        <section id="financing" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Capital Raising
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Financing and Funding Options
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              CEPCIs generally rely on donations, grants, CSR funding, membership contributions, and other lawful funding sources rather than equity investment. Eligibility and approvals vary by activity and legal structure.
            </p>

            <div className="space-y-3">
              {[
                {
                  title: 'Donations & Grants',
                  desc: 'Eligible CEPCIs may receive donations, grants, and institutional support subject to applicable law, donor conditions, and required registrations.'
                },
                {
                  title: 'Commercial Business Loans & Overdraft Facilities',
                  desc: 'Depending on eligibility and banking requirements, CEPCIs may explore suitable institutional finance and banking facilities for permitted activities.'
                },
                {
                  title: 'Pradhan Mantri MUDRA Yojana (PMMY)',
                  desc: 'Obtain collateral-free micro loans up to Contact Contact for Price Lakhs across Shishu, Kishore, and Tarun categories for non-corporate micro enterprises.'
                },
                {
                  title: 'Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE)',
                  desc: 'Avail credit guarantees for collateral-free business loans up to Contact Contact for Price–5 Crore from scheduled commercial banks.'
                },
                {
                  title: 'Supplier Trade Credit and Vendor Credit',
                  desc: 'Negotiate 30 to 90-day credit windows with domestic distributors and manufacturers using your verified registration credentials.'
                },
                {
                  title: 'Equity Financing Limitations',
                  desc: 'Equity-style venture capital is generally not the purpose of an CEPCI; organizations seeking commercial investment should evaluate a suitable for-profit structure separately.'
                },
                {
                  title: 'akshayb2bsolutions Loan Documentation Support',
                  desc: 'We prepare complete CMA data reports, projected balance sheets, and MSME subsidy files to accelerate bank loan sanctions.'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200">
                  <Landmark className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-700">
                    <strong className="text-slate-900 font-bold block mb-0.5">{item.title}:</strong>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 17. HOW AKSHAYB2BSOLUTIONS HELPS (5 BULLETS) */}
        <section id="why-akshayb2b" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Our Value Proposition
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                How akshayb2bsolutions Helps You
              </h2>
            </div>

            <div className="space-y-3">
              {[
                {
                  title: 'Comprehensive Initial Legal Assessment',
                  desc: 'We analyze your business model and recommend the precise deed clauses and registration combination tailored to your members / trustees\' needs.'
                },
                {
                  title: 'Flawless Deed Drafting & Digital Verification',
                  desc: 'Our compliance specialists draft a legally sound CEPCI deed, rent agreements, and declarations to eliminate Registrar rejections.'
                },
                {
                  title: 'Direct Liaison & Registrar Follow-Ups',
                  desc: 'We manage all interactions with the state relevant registering authority, GST authorities, and local licensing bodies, resolving queries proactively.'
                },
                {
                  title: 'Guaranteed Bank Account Resolution Kit',
                  desc: 'Receive official resolution kits and documentation packages formatted to meet the strict KYC standards of leading Indian commercial banks.'
                },
                {
                  title: 'Dedicated Post-Registration Growth Advisory',
                  desc: 'Enjoy complimentary access to our tax advisory desk, deed amendment support, and automated compliance calendars.'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-700">
                    <strong className="text-slate-900 font-bold block mb-0.5">{item.title}:</strong>
                    {item.desc}
                  </div>
                </div>
              ))}
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
                Why Thousands of Co-Founders Trust akshayb2bsolutions
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
                  desc: '100% online, automated workflows that save you from tedious paperwork and bureaucratic Registrar office visits.',
                  icon: Clock
                },
                {
                  title: 'Affordable Transparent Pricing',
                  desc: 'Zero hidden costs, crystal-clear pricing starting at just Contact Contact for Price, and transparent separate government fee breakdowns.',
                  icon: Tag
                },
                {
                  title: 'Trusted by Thousands',
                  desc: 'Over 18,500+ successful business registrations completed across Uttar Pradesh, Delhi NCR, and nationwide.',
                  icon: Users
                },
                {
                  title: 'Automated Compliance Alerts',
                  desc: 'Never miss a GST or tax filing due date with our automated SMS and email reminders.',
                  icon: Zap
                },
                {
                  title: 'Secure and Confidential',
                  desc: 'Enterprise-grade 256-bit SSL encryption protecting your members / trustees\' KYC, financial records, and business documentation.',
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
              Register Your CEPCI with Confidence
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Join thousands of thriving Indian co-founders who launched their CEPCI with akshayb2bsolutions. Zero hidden charges, 100% digital filing, and guaranteed resolution support.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => scrollToSection('lead-capture-widget')}
                className="px-6 py-3 rounded-xl bg-[#FF5A00] hover:bg-orange-500 text-[#0B3D91] font-black text-xs sm:text-sm shadow-xl transition-all cursor-pointer"
              >
                Start Registration at Contact Contact for Price
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
                  Track Your Firm Registration in Real-Time
                </h3>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Download the akshayb2bsolutions mobile application for iOS &amp; Android. Access your deed, registration certificate, and get direct CA chat support 24x7.
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
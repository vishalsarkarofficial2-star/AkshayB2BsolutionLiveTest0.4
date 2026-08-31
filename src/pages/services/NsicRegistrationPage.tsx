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
import { MobileAppBanner } from '../../components/MobileAppBanner';
import { Footer } from '../../components/Footer';
import { TopUtilityBar } from '../../components/TopUtilityBar';

interface NsicRegistrationPageProps {
  onBackToHome: () => void;
  onSelectService: (serviceName: string) => void;
  onOpenBrochure: () => void;
  onOpenAppointment: () => void;
}

// 6 Accordion FAQs for NSIC Single Point Registration Scheme (SPRS)
const FAQ_ITEMS = [
  { q: 'What is NSIC Registration in India?', a: 'NSIC Registration generally refers to enlistment of eligible Micro and Small Enterprises under the NSIC Single Point Registration Scheme (SPRS) for participation in Government Purchases and access to applicable public procurement benefits.' },
  { q: 'Who is eligible for NSIC SPRS Registration?', a: 'Micro and Small Enterprises engaged in manufacturing or services and having a valid Udyam Registration are generally eligible. Traders are not eligible under the SPRS.' },
  { q: 'What are the main benefits of NSIC Registration?', a: 'Eligible SPRS-registered MSEs can receive benefits such as free tender sets, exemption from Earnest Money Deposit (EMD), procurement preference under the applicable Public Procurement Policy, and consortia support for tender marketing.' },
  { q: 'How long is the NSIC SPRS Certificate valid?', a: 'A regular SPRS certificate is generally valid for two years from the date of registration and can be renewed thereafter. Eligible start-ups that have commenced commercial production but have not completed one year may qualify for provisional registration subject to NSIC rules.' },
  { q: 'Is Udyam Registration required before NSIC Registration?', a: 'Yes. A valid Udyam Registration is a key eligibility requirement for Micro and Small Enterprises applying under NSIC Single Point Registration Scheme.' },
  { q: 'Is there a fixed fee for NSIC Registration?', a: 'No single fixed fee is shown on this page. NSIC charges can depend on the enterprise category, turnover and applicable inspection requirements. Contact our team for a case-specific quotation and applicable government/NSIC charges.' }
]

// Related services cross-linking items — MSME & government procurement focused
const RELATED_SERVICES = [
  {
    title: 'MSME Udyam Registration',
    desc: 'Obtain Udyam Registration for your Micro or Small Enterprise before applying for NSIC SPRS benefits.',
    img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&auto=format&fit=crop&q=80',
    price: 'Get Quote'
  },
  {
    title: 'GeM Registration',
    desc: 'Seller registration and onboarding support for businesses that want to participate in Government e-Marketplace opportunities.',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80',
    price: 'Get Quote'
  },
  {
    title: 'Startup India Registration',
    desc: 'DPIIT Startup recognition support for eligible innovative and scalable businesses in India.',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=80',
    price: 'Get Quote'
  },
  {
    title: 'ISO Certification',
    desc: 'Certification support to strengthen quality systems, tender readiness and business credibility.',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&auto=format&fit=crop&q=80',
    price: 'Get Quote'
  },
  {
    title: 'GST Registration',
    desc: 'GST registration and compliance assistance for eligible businesses supplying goods or services in India.',
    img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=80',
    price: 'Get Quote'
  },
  {
    title: 'Trademark Registration',
    desc: 'Protect your business name, brand and logo through trademark application support.',
    img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=80',
    price: 'Get Quote'
  },
  {
    title: 'IEC Registration',
    desc: 'Import Export Code registration support for businesses planning cross-border trade.',
    img: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=600&auto=format&fit=crop&q=80',
    price: 'Get Quote'
  },
  {
    title: 'Tender Registration Support',
    desc: 'Documentation and registration guidance to improve readiness for government and PSU tender participation.',
    img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&auto=format&fit=crop&q=80',
    price: 'Get Quote'
  },
  {
    title: 'Digital Signature Certificate',
    desc: 'DSC assistance for authorized signatories where digital signing is required for registrations and e-tenders.',
    img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&auto=format&fit=crop&q=80',
    price: 'Get Quote'
  }
]

export const NsicRegistrationPage: React.FC<NsicRegistrationPageProps> = ({
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
  const [selectedPackage, setSelectedPackage] = useState('NSIC Registration Assistance Package');
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
            <span className="text-slate-900 font-bold">NSIC Registration</span>
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
                  <span className="text-white">Pan-India Online Support</span>
                </div>

                {/* H1 Heading & Tagline */}
                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight antialiased">
                    NSIC Registration
                  </h1>
                  <div className="space-y-0.5">
                    <p className="text-xl sm:text-2xl font-black text-orange-300 antialiased">
                      Apply for NSIC SPRS with{' '}
                      <span className="underline decoration-[#FF5A00] decoration-2 underline-offset-4 font-black text-white">
                        Expert Assistance
                      </span>
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-blue-100 antialiased">
                      Price provided after consultation • NSIC / inspection charges as applicable
                    </p>
                  </div>
                </div>

                {/* Definition: 2-3 Line Description */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                  NSIC Single Point Registration Scheme (SPRS) is designed for eligible Micro and Small Enterprises seeking participation in Government Purchases. A valid Udyam Registration is generally required, and approved MSEs can access applicable public procurement benefits subject to NSIC and tender conditions.
                </p>

                {/* 6 Feature Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Clock className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Online Application Support</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Handshake className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Micro & Small Enterprises</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <FileSignature className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Udyam & KYC Review</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Zap className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Fast &amp; Hassle-Free</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Gavel className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>NSIC SPRS Filing</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Users2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Dedicated Advisor</span>
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
                    <span>Get Custom Quote</span>
                  </div>

                  {formSubmitted ? (
                    <div className="text-center py-8 space-y-4 animate-in fade-in">
                      <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Application Received!</h3>
                      <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
                        Thank you <span className="font-bold">{applicantName}</span>. Our NSIC registration specialist has been assigned to your application request. We will call you within 15 minutes at <span className="font-bold">{applicantMobile}</span>.
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
                              Consultancy Price
                            </span>
                            <span className="text-base font-black text-[#0B3D91] leading-none">
                              Contact for Price
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-[11px] font-bold text-slate-800 block leading-tight">
                            NSIC / Inspection Fee
                          </span>
                          <span className="text-[10px] font-medium text-slate-500 block leading-tight">
                            (as applicable, quoted separately)
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
                                Select State of Enterprise *
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
                                The application is processed under NSIC SPRS. Documentation and inspection requirements may vary by enterprise type, products/services and location.
                              </span>
                            </div>

                            <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100 text-xs text-slate-600 space-y-1">
                              <div className="flex items-center gap-1.5 font-bold text-[#0B3D91]">
                                <ShieldCheck className="w-4 h-4 text-[#FF5A00]" />
                                <span>Why register with akshayb2bsolutions?</span>
                              </div>
                              <p className="text-[11px]">
                                Complete Udyam and eligibility review, document checklist assistance, online SPRS application support and coordination for applicable inspection requirements.
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
                                  Enterprise Constitution *
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
                                  Business Activity *
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
                                Authorized Signatory Full Name *
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
                                Authorized Signatory PAN Number (Optional for quote)
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
                                Select NSIC Registration Package *
                              </label>
                              <select
                                value={selectedPackage}
                                onChange={(e) => setSelectedPackage(e.target.value)}
                                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                              >
                                <option value="NSIC Registration Assistance Package">NSIC Registration Assistance Package — Contact for Price</option>
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
                                  <span>Submit &amp; Get NSIC Assistance</span>
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
                { id: 'legal-status', label: 'Certificate Status' },
                { id: 'post-compliance', label: 'Post-Registration' },
                { id: 'comparison', label: 'Registration Comparison' },
                { id: 'tax-implications', label: 'Tax & Compliance' },
                { id: 'financing', label: 'Market Opportunities' },
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
                NSIC SPRS Assistance
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0D47A1] mt-2">
                NSIC Registration Assistance Package
              </h2>
              <p className="text-sm text-slate-500 mt-2 mx-auto max-w-2xl text-center">
                This package includes NSIC SPRS eligibility review, document preparation guidance, online application assistance, inspection coordination support and dedicated compliance assistance. Final professional and applicable NSIC/inspection charges are shared after reviewing your case.
              </p>
            </div>

            <div className="max-w-[520px] mx-auto">
              <div className="bg-white rounded-2xl border-t-4 border-t-[#FF6B00] border-l border-r border-b border-slate-200 p-6 sm:p-8 shadow-xl flex flex-col justify-between">
                <div>
                  {/* Badges */}
                  <div className="flex items-center justify-start flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 rounded bg-orange-100 text-orange-900 text-[10px] font-black uppercase tracking-wide">
                      MSE FOCUSED SUPPORT
                    </span>
                    <span className="px-3 py-1 rounded bg-yellow-100 text-yellow-900 text-[10px] font-black uppercase tracking-wide">
                      PRICE AFTER REVIEW
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0D47A1]">NSIC SPRS Assistance</h3>
                  <p className="text-sm text-slate-500 mb-6">
                    Application support for eligible Micro and Small Enterprises seeking NSIC Single Point Registration for Government Purchases.
                  </p>

                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <div className="flex items-baseline gap-3">
                      
                      <span className="text-3xl font-extrabold text-[#0D47A1]">Contact for Price</span>
                    </div>
                    <span className="text-xs text-slate-500 font-medium block mt-1">
                      NSIC / inspection charges, if applicable, are separate
                    </span>
                  </div>

                  {/* Checklist */}
                  <div className="space-y-3.5 mb-8">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">PACKAGE INCLUSIONS:</p>
                    {[
                      'Udyam Registration & Eligibility Review',
                      'PAN, Udyam & Enterprise KYC Checklist',
                      'NSIC SPRS Filing Support',
                      'Products / Services Enlistment Guidance',
                      'Inspection Coordination Guidance',
                      'Dedicated NSIC Registration Specialist Support'
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
                    setSelectedPackage('NSIC Registration Assistance Package');
                    scrollToSection('lead-capture-widget');
                  }}
                  className="w-full py-4 rounded-xl bg-[#0D47A1] hover:bg-blue-900 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer text-center"
                >
                  Get Quote & Start Application
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 5. OVERVIEW SECTION */}
        <section id="overview" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Scheme Overview</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">What is NSIC Registration in India?</h2></div>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">NSIC Single Point Registration Scheme (SPRS) enlists eligible Micro and Small Enterprises for participation in Government Purchases. Registered MSEs can access applicable benefits under the Public Procurement Policy for Micro and Small Enterprises.</p>
            <div className="space-y-4 pt-2">{[
              {title:'Government Purchase Access',desc:'SPRS is designed to help eligible MSEs participate in purchases by Central Ministries, Departments and Public Sector Undertakings.'},
              {title:'Tender & EMD Benefits',desc:'Valid SPRS units may receive free tender sets and exemption from Earnest Money Deposit (EMD), subject to tender conditions and applicable policy.'},
              {title:'Udyam-Based Eligibility',desc:'A valid Udyam Registration is a core eligibility requirement for Micro and Small Enterprises applying under SPRS.'},
              {title:'Manufacturing & Services',desc:'Micro and Small Enterprises engaged in manufacturing or services can apply. Traders are not eligible under the scheme.'},
              {title:'Online Registration Process',desc:'The SPRS application is processed online and may include document verification and third-party inspection depending on the case.'}
            ].map((item,idx)=><div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200"><CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5"/><div className="text-sm text-slate-700"><strong className="text-slate-900 font-bold block mb-0.5">{item.title}:</strong>{item.desc}</div></div>)}</div>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-2">Our team assists with eligibility review, documentation, online application support and coordination through the NSIC SPRS process.</p>
          </div>
        </section>

        {/* 6. REGISTRATION SECTION */}
        <section id="registration" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Government Purchase Scheme</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">How NSIC SPRS Registration Works</h2></div><p className="text-slate-700 text-sm leading-relaxed">Eligible Micro and Small Enterprises first ensure they hold a valid Udyam Registration and then submit the SPRS application online with enterprise, financial, product/service and supporting documents.</p><p className="text-slate-700 text-sm leading-relaxed">NSIC may require technical inspection for applicable units. After successful verification, payment of applicable charges and completion of requirements, the SPRS certificate is issued online.</p><div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-2"><h4 className="text-xs font-bold uppercase tracking-wider text-[#0B3D91] flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-[#FF5A00]"/><span>How akshayb2bsolutions Supports You:</span></h4><p className="text-xs text-slate-600 leading-relaxed">We help review Udyam details, compile required forms and documents, organize product/service information, assist with the online application and guide you through inspection or clarification requirements.</p></div></div></section>

        {/* 7. ADVANTAGES (6 ITEMS) */}
        <section id="advantages" className="py-14 bg-white border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Core Benefits</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Key Benefits of NSIC SPRS</h2></div><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{[
{title:'Free Tender Sets',desc:'Eligible SPRS-registered MSEs can receive tender sets free of cost under applicable Government Purchase provisions.'},
{title:'EMD Exemption',desc:'Valid registered MSEs may be exempted from payment of Earnest Money Deposit for eligible government tenders.'},
{title:'Public Procurement Preference',desc:'Eligible MSEs can access benefits available under the Public Procurement Policy for Micro and Small Enterprises.'},
{title:'Tender Marketing Support',desc:'NSIC provides consortia and tender marketing facilities that can help eligible MSEs pursue larger procurement opportunities.'},
{title:'Government Market Visibility',desc:'SPRS enlistment strengthens an MSE\'s readiness to participate in procurement by government departments and PSUs.'},
{title:'Two-Year Registration Cycle',desc:'Regular SPRS registration is generally valid for two years and can be renewed as per NSIC requirements.'}
].map((item,idx)=><div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1"><div className="flex items-center gap-2 text-slate-900 font-bold text-sm"><span className="w-6 h-6 rounded-full bg-[#0B3D91] text-[#FF5A00] text-xs flex items-center justify-center font-mono">{idx+1}</span><h4>{item.title}</h4></div><p className="text-xs text-slate-600 leading-relaxed pl-8">{item.desc}</p></div>)}</div><p className="text-xs text-slate-500 text-center pt-2">Benefits are subject to valid registration, applicable procurement rules and individual tender conditions.</p></div></section>

        {/* 8. CHECKLIST (8 BULLETS) */}
        <section id="checklist" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Pre-Application Readiness</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Checklist Before Applying for NSIC Registration</h2></div><div className="space-y-3">{[
{title:'Valid Udyam Registration',desc:'Keep an active Udyam Registration Number for the Micro or Small Enterprise.'},
{title:'Eligible Business Activity',desc:'Confirm that the unit is engaged in manufacturing or services; traders are not eligible under SPRS.'},
{title:'Enterprise PAN & Constitution Proof',desc:'Keep PAN and constitution-related documents of the proprietorship, partnership, LLP or company ready.'},
{title:'Financial Statements',desc:'Prepare applicable audited financial statements and turnover details used for assessment and monetary-limit calculation.'},
{title:'Products / Services Details',desc:'Prepare a clear list of stores, products or services for which enlistment is requested.'},
{title:'Premises & Operational Proof',desc:'Keep registered office/factory address proofs and operational documents ready as applicable.'},
{title:'Technical & Inspection Documents',desc:'Manufacturing/service cases may require technical information and third-party inspection depending on NSIC rules.'},
{title:'Digital Upload Readiness',desc:'Keep scanned forms, annexures and supporting documents organized for the completely online application process.'}
].map((item,idx)=><div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200"><CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5"/><div className="text-xs sm:text-sm text-slate-700"><strong className="text-slate-900 font-bold block mb-0.5">{item.title}:</strong>{item.desc}</div></div>)}</div></div></section>

        {/* 9. ELIGIBILITY CRITERIA */}
        <section id="eligibility" className="py-14 bg-white border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Eligibility Criteria</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Who Can Apply for NSIC SPRS?</h2></div><p className="text-slate-700 text-sm leading-relaxed">Micro and Small Enterprises having a valid Udyam Registration and engaged in manufacturing or services can generally apply under NSIC Single Point Registration Scheme, subject to scheme conditions.</p><div className="space-y-3">{[
{title:'Micro or Small Enterprise',desc:'The applicant must fall within the Micro or Small Enterprise category under applicable MSME classification.'},
{title:'Valid Udyam Registration',desc:'Udyam Registration is required before applying for SPRS.'},
{title:'Manufacturing or Service Activity',desc:'Manufacturing and service MSEs are eligible; wholesale traders, retail traders and commission agents are not eligible under SPRS.'},
{title:'Commercial Production / Service Commencement',desc:'The enterprise should have commenced commercial production or service activity. Eligible newer units may qualify for provisional registration.'},
{title:'No Applicable Disqualification',desc:'Blacklisted units during the blacklisting period and certain other ineligible activities/persons may not qualify.'},
{title:'Document & Inspection Compliance',desc:'Approval depends on valid documents, payment of applicable charges and successful inspection where required.'}
].map((item,idx)=><div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200"><ShieldCheck className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5"/><div className="text-xs sm:text-sm text-slate-700"><strong className="text-slate-900 font-bold block mb-0.5">{item.title}:</strong>{item.desc}</div></div>)}</div></div></section>

        {/* 10. REQUIRED DOCUMENTS (6 BULLETS) */}
        <section id="documents" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Document Checklist</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Documents Required for NSIC Registration</h2></div><p className="text-slate-700 text-sm leading-relaxed">The exact checklist can vary by enterprise constitution, activity, turnover and inspection requirement. Common documents typically include Udyam, PAN, constitution and financial/operational records.</p><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{[
{title:'Udyam Registration Certificate',desc:'Valid Udyam Registration details of the Micro or Small Enterprise.'},
{title:'PAN & Constitution Documents',desc:'Enterprise PAN and applicable proprietorship, partnership, LLP or company constitution documents.'},
{title:'Authorized Signatory KYC',desc:'Identity/address proof and authorization documents of the proprietor, partners or directors as applicable.'},
{title:'Financial Statements & Turnover Proof',desc:'Applicable audited balance sheets, profit and loss accounts and sales/turnover information.'},
{title:'Product / Service & Technical Details',desc:'List of products, stores or services for enlistment along with technical information where required.'},
{title:'Premises / Factory & Supporting Proofs',desc:'Address, ownership/lease, licences and other operational proofs required by the official checklist.'}
].map((item,idx)=><div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 space-y-1"><div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm"><FileText className="w-4 h-4 text-[#0B3D91]"/><h4>{item.title}</h4></div><p className="text-xs text-slate-600 leading-relaxed pl-6">{item.desc}</p></div>)}</div></div></section>

        {/* 11. STEPS (6 NUMBERED STEPS) */}
        <section id="steps" className="py-14 bg-white border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Registration Sequence</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Step-by-Step NSIC SPRS Process</h2></div><div className="space-y-4">{[
{step:'Step 1',title:'Confirm Udyam & Eligibility',desc:'Verify that the applicant is an eligible Micro or Small manufacturing/service enterprise with valid Udyam Registration.'},
{step:'Step 2',title:'Collect Forms & Supporting Documents',desc:'Prepare the official checklist, annexures, enterprise records, financial statements and product/service details.'},
{step:'Step 3',title:'Submit Online SPRS Application',desc:'Complete the NSIC SPRS online application carefully and upload the required documents.'},
{step:'Step 4',title:'Pay Applicable Charges',desc:'Applicable registration and inspection charges are determined according to the enterprise category, turnover and case requirements.'},
{step:'Step 5',title:'Technical / Third-Party Inspection',desc:'Where required, the enterprise coordinates inspection through the applicable empanelled inspection agency.'},
{step:'Step 6',title:'Verification & Certificate',desc:'After successful verification, inspection and clearance of applicable dues, the final SPRS certificate becomes available online.'}
].map((item,idx)=><div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200"><div className="w-10 h-10 rounded-xl bg-[#0B3D91] text-[#FF5A00] font-black text-xs flex items-center justify-center flex-shrink-0 shadow-xs">{item.step}</div><div><h4 className="text-sm font-bold text-slate-900 mb-0.5">{item.title}</h4><p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p></div></div>)}</div></div></section>

        {/* 12. LEGAL STATUS (5 SUB-HEADINGS) */}
        <section id="legal-status" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Scheme Status</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Understanding Your NSIC SPRS Certificate</h2></div><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{[
{title:'1. Government Purchase Enlistment',desc:'SPRS enlists eligible MSEs for participation in Government Purchases; it does not replace the enterprise\'s legal incorporation or Udyam Registration.'},
{title:'2. Certificate Validity',desc:'A regular SPRS certificate is generally valid for two years and can be renewed under NSIC rules.'},
{title:'3. Monetary Limit',desc:'The monetary limit is assessed using the enterprise\'s financial performance and applicable NSIC methodology.'},
{title:'4. Scope of Enlisted Items',desc:'Benefits apply in relation to the products/services and scope reflected in the valid registration certificate and applicable tender conditions.'}
].map((item,idx)=><div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5"><h4 className="text-sm font-bold text-[#0B3D91]">{item.title}</h4><p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p></div>)}</div><div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-slate-700 space-y-1"><h4 className="font-bold text-[#0B3D91]">5. akshayb2bsolutions&apos;s Role:</h4><p>Our team helps you understand eligibility, documents, product/service enlistment, application stages, inspection requirements and renewal planning.</p></div></div></section>

        {/* 13. POST-REGISTRATION COMPLIANCE (7 BULLETS) */}
        <section id="post-compliance" className="py-14 bg-white border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Post-Registration</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">After NSIC Registration: What to Maintain</h2></div><p className="text-slate-700 text-sm leading-relaxed">Keep your enterprise information and SPRS registration details current so the certificate remains useful for government procurement opportunities.</p><div className="space-y-3">{[
{title:'Track Certificate Validity',desc:'Regular SPRS certificates are generally valid for two years; renewal can be planned before expiry.'},
{title:'Maintain Udyam & Enterprise Records',desc:'Keep Udyam, PAN, constitution, address and business records accurate and updated.'},
{title:'Maintain Financial Statements',desc:'Keep audited financials, turnover and sales records available for renewal and monetary-limit assessment.'},
{title:'Apply for Amendments When Needed',desc:'Changes in name, office/factory address, partners/directors, monetary limit, category or enlisted items may require amendment.'},
{title:'Follow Tender Conditions',desc:'SPRS benefits do not remove the need to satisfy technical, quality, eligibility and performance conditions of individual tenders.'},
{title:'Prepare for Renewal',desc:'Review the official renewal checklist and inspection requirements in advance.'},
{title:'Compliance Support',desc:'Our team can assist with renewal, amendment and related MSME/tender-readiness documentation.'}
].map((item,idx)=><div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200"><CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5"/><div className="text-xs sm:text-sm text-slate-700"><strong className="text-slate-900 font-bold block mb-0.5">{item.title}:</strong>{item.desc}</div></div>)}</div></div></section>

        {/* 14. COMPARISON TABLE (8 ROWS) */}
        <section id="comparison" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20"><div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Registration Comparison</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">NSIC SPRS vs Other MSME Registrations</h2></div><div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm"><table className="w-full text-left text-xs border-collapse min-w-[700px]"><thead><tr className="bg-[#0B3D91] text-white"><th className="p-3.5 font-bold">Parameter</th><th className="p-3.5 font-bold bg-orange-500 text-[#0B3D91]">NSIC SPRS</th><th className="p-3.5 font-bold">Udyam Registration</th><th className="p-3.5 font-bold">GeM Seller Registration</th></tr></thead><tbody className="divide-y divide-slate-200 text-slate-700">{[
['Primary Purpose','Government Purchase enlistment & procurement benefits','MSME recognition/classification','Selling products/services on Government e-Marketplace'],
['Key Eligibility','Eligible Micro & Small manufacturing/service enterprises','Eligible MSMEs under Udyam rules','Eligible sellers/service providers meeting GeM requirements'],
['Udyam Needed','Yes, generally required before SPRS','This is the Udyam registration itself','May be useful/required for MSME benefits depending on seller profile'],
['Tender Set / EMD Benefits','Available under applicable public procurement provisions','Not the same as SPRS benefits','Tender/bid conditions vary on GeM'],
['Validity','Generally 2 years for regular SPRS certificate','As per Udyam framework','Account remains subject to GeM compliance'],
['Inspection','May involve third-party inspection','No NSIC SPRS inspection','Product/service verification can vary by category'],
['Ideal For','MSEs targeting government procurement','Businesses seeking MSME recognition','Businesses selling directly through GeM']
].map((row,idx)=><tr key={idx} className="hover:bg-slate-50">{row.map((cell,j)=><td key={j} className={`p-3.5 ${j===0?'font-bold text-slate-900':''} ${j===1?'bg-orange-50/60 font-semibold':''}`}>{cell}</td>)}</tr>)}</tbody></table></div></div></section>

        {/* 15. TAX IMPLICATIONS (6 BULLETS) */}
        <section id="tax-implications" className="py-14 bg-white border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Business Compliance</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Tax & Compliance Position of NSIC Registration</h2></div><p className="text-slate-700 text-sm leading-relaxed">NSIC SPRS is a government-purchase enlistment scheme; it does not replace GST, income-tax, company/LLP or other statutory registrations applicable to the enterprise.</p><div className="space-y-3">{[
{title:'Separate from GST',desc:'GST registration and return obligations depend on the enterprise\'s activities and applicable GST law, not simply on having SPRS.'},
{title:'Separate from Income Tax',desc:'The enterprise continues to follow income-tax and accounting requirements applicable to its legal constitution.'},
{title:'Udyam Must Remain Accurate',desc:'Enterprise classification and Udyam information should remain correct and consistent with current business details.'},
{title:'Tender-Specific Tax Documents',desc:'Government tenders may ask for GST, PAN, ITR, turnover, audit and other certificates independently of SPRS.'},
{title:'Financial Records Matter',desc:'Audited financial information is relevant for NSIC assessment, renewal and fixation of monetary limit.'},
{title:'Compliance Assistance',desc:'Our team can coordinate SPRS assistance with related GST, Udyam, GeM and tender documentation services.'}
].map((item,idx)=><div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200"><Receipt className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5"/><div className="text-xs sm:text-sm text-slate-700"><strong className="text-slate-900 font-bold block mb-0.5">{item.title}:</strong>{item.desc}</div></div>)}</div></div></section>

        {/* 16. FINANCING OPTIONS (7 BULLETS) */}
        <section id="financing" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Market Opportunities</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">How NSIC SPRS Can Support Business Opportunities</h2></div><p className="text-slate-700 text-sm leading-relaxed">SPRS is primarily focused on government procurement rather than direct financing. Its value comes from helping eligible MSEs access procurement benefits and improve tender participation readiness.</p><div className="space-y-3">{[
{title:'Government Tender Participation',desc:'Use valid SPRS enlistment while participating in applicable government and PSU procurement opportunities.'},
{title:'EMD Cost Relief',desc:'EMD exemption can reduce upfront tender-participation cost where the benefit is accepted under the applicable tender terms.'},
{title:'Tender Set Cost Relief',desc:'Eligible registered MSEs can access tender sets free of cost under applicable procurement provisions.'},
{title:'Procurement Preference',desc:'Qualifying MSEs may receive procurement preference as provided under the Public Procurement Policy and tender conditions.'},
{title:'Consortia / Tender Marketing',desc:'NSIC also provides consortia facilities for tender marketing to help MSEs pursue opportunities collaboratively.'},
{title:'Related NSIC Support',desc:'Separate NSIC schemes may support areas such as marketing, raw material and other MSME services subject to their own eligibility rules.'}
].map((item,idx)=><div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200"><TrendingUp className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5"/><div className="text-xs sm:text-sm text-slate-700"><strong className="text-slate-900 font-bold block mb-0.5">{item.title}:</strong>{item.desc}</div></div>)}</div></div></section>

        {/* 17. HOW AKSHAYB2BSOLUTIONS HELPS (5 BULLETS) */}
        <section id="why-akshayb2b" className="py-14 bg-white border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Our Value Proposition</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">How akshayb2bsolutions Helps with NSIC Registration</h2></div><div className="space-y-3">{[
{title:'Eligibility & Udyam Review',desc:'We check whether your enterprise profile is suitable for NSIC SPRS before documentation begins.'},
{title:'Document Checklist Preparation',desc:'We organize the required enterprise, financial, KYC, product/service and supporting documents.'},
{title:'Online SPRS Application Support',desc:'We assist with application data, uploads and submission workflow to reduce avoidable errors.'},
{title:'Inspection Coordination Guidance',desc:'Where third-party inspection applies, we guide you on readiness and coordination requirements.'},
{title:'Renewal & Amendment Support',desc:'We can also assist with future renewal, amendment and related MSME/tender compliance requirements.'}
].map((item,idx)=><div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200"><CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5"/><div className="text-xs sm:text-sm text-slate-700"><strong className="text-slate-900 font-bold block mb-0.5">{item.title}:</strong>{item.desc}</div></div>)}</div></div></section>

        {/* 18. TRUST / WHY US SECTION (6 CARDS) */}
        <section className="py-14 bg-slate-50 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Proven Excellence
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Why Businesses Choose akshayb2bsolutions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Expert Legal Guidance',
                  desc: 'Professional assistance for MSME, registration, tax and compliance workflows across India.',
                  icon: Award
                },
                {
                  title: 'Time-Saving Digital Process',
                  desc: 'Digital-first document collection and application assistance to reduce avoidable paperwork and follow-up effort.',
                  icon: Clock
                },
                {
                  title: 'Case-Based Transparent Pricing',
                  desc: 'No fixed price is displayed for this service. We share the professional fee and applicable NSIC/inspection charges after reviewing your enterprise case.',
                  icon: Tag
                },
                {
                  title: 'Trusted by Thousands',
                  desc: 'Business compliance support for entrepreneurs and enterprises across India.',
                  icon: Users
                },
                {
                  title: 'Automated Compliance Alerts',
                  desc: 'Stay organized for NSIC renewal, amendments and related business-compliance milestones.',
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
              Government Purchase Readiness
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              Apply for NSIC SPRS with Confidence
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Get guided support for NSIC Single Point Registration — from Udyam and eligibility review to documentation, online filing and applicable inspection coordination.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => scrollToSection('lead-capture-widget')}
                className="px-6 py-3 rounded-xl bg-[#FF5A00] hover:bg-orange-500 text-[#0B3D91] font-black text-xs sm:text-sm shadow-xl transition-all cursor-pointer"
              >
                Get Price & Start Application
              </button>
              <button
                onClick={onOpenAppointment}
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all cursor-pointer"
              >
                Book Consultation
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

        {/* 23. SITEMAP FOOTER WITH MANDATORY DISCLAIMER */}
        <Footer onSelectService={onSelectService} />
      </main>
    </div>
  );
};
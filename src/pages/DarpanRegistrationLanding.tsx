import { AppBannerImage } from '../components/AppBannerImage';
import React, { useState, useEffect } from 'react';
import { Footer } from '../components/Footer';

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
} from '../data/servicesData';
import { HeaderMegaMenu } from '../components/HeaderMegaMenu';
import { TopUtilityBar } from '../components/TopUtilityBar';

interface DarpanRegistrationLandingProps {
  onBackToHome: () => void;
  onSelectService: (serviceName: string) => void;
  onOpenBrochure: () => void;
  onOpenAppointment: () => void;
}

// Darpan Registration FAQs and related NGO services
const FAQ_ITEMS = [
  {
    q: 'What is NGO Darpan Registration?',
    a: 'NGO Darpan Registration is the online enrollment of NGOs and voluntary organizations on the NGO Darpan portal managed by NITI Aayog. It provides a unique ID and helps organizations interact with government departments and apply for eligible schemes and grants.'
  },
  {
    q: 'Is NGO Darpan Registration mandatory for every NGO?',
    a: 'No. It is not mandatory for every NGO, but Darpan registration is important when an organization wants to apply for certain government grants, schemes or funding opportunities that require a Darpan ID.'
  },
  {
    q: 'Who can apply for Darpan Registration?',
    a: 'Eligible NGOs and voluntary organizations registered as a Society, Trust or Section 8 Company can apply, subject to the portal requirements and availability of the required organizational documents.'
  },
  {
    q: 'What documents are required for Darpan Registration?',
    a: 'Common documents include the organization registration certificate, NGO PAN, chief functionary details, PAN/Aadhaar of key members, registered office proof, activity details, email ID and mobile number.'
  },
  {
    q: 'Is there a government fee for NGO Darpan Registration?',
    a: 'The NGO Darpan portal registration itself is generally free. Our professional assistance fee is ₹1,499, while any applicable third-party or government charges are payable separately if applicable.'
  },
  {
    q: 'How long does Darpan Registration take?',
    a: 'The timeline depends on document readiness and portal verification. A complete application can commonly be processed within a few working days, but final approval or verification time may vary.'
  }
];

const RELATED_SERVICES = [
  {
    title: 'NGO Registration',
    desc: 'Set up your NGO as a Society, Trust or Section 8 Company before applying for Darpan.',
    img: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&auto=format&fit=crop&q=80',
    price: '₹2,999'
  },
  {
    title: 'Society Registration',
    desc: 'Registration support for charitable, educational and social welfare societies in India.',
    img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&auto=format&fit=crop&q=80',
    price: '₹2,999'
  },
  {
    title: 'Trust Registration',
    desc: 'Create a charitable or private trust with documentation and registration assistance.',
    img: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&auto=format&fit=crop&q=80',
    price: '₹4,999'
  },
  {
    title: 'Section 8 Company Registration',
    desc: 'Non-profit company structure for organizations pursuing charitable and social objectives.',
    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&auto=format&fit=crop&q=80',
    price: '₹4,999'
  },
  {
    title: '12A / 12AB & 80G Registration',
    desc: 'Tax exemption and donor deduction registration support for eligible charitable organizations.',
    img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=80',
    price: '₹3,999'
  },
  {
    title: 'CSR-1 Registration',
    desc: 'Registration support for eligible entities seeking to undertake CSR implementation activities.',
    img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&auto=format&fit=crop&q=80',
    price: '₹1,999'
  },
  {
    title: 'FCRA Registration',
    desc: 'Compliance and application assistance for eligible NGOs seeking foreign contribution registration.',
    img: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&auto=format&fit=crop&q=80',
    price: '₹9,999'
  },
  {
    title: 'NGO Compliance & Annual Filing',
    desc: 'Ongoing documentation and compliance support for registered NGOs and charitable organizations.',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&auto=format&fit=crop&q=80',
    price: '₹2,499'
  }
];

export const DarpanRegistrationLanding: React.FC<DarpanRegistrationLandingProps> = ({
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
  const [businessType, setBusinessType] = useState('Darpan Registration');
  const [businessActivity, setBusinessActivity] = useState(BUSINESS_ACTIVITIES[0]);
  const [panNumber, setPanNumber] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('Darpan Registration (₹1,499)');
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
            <span className="text-slate-900 font-bold">Darpan Registration</span>
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
                    Darpan Registration
                  </h1>
                  <div className="space-y-0.5">
                    <p className="text-xl sm:text-2xl font-black text-orange-300 antialiased">
                      Complete your Darpan Registration at just{' '}
                      <span className="underline decoration-[#FF5A00] decoration-2 underline-offset-4 font-black text-white">
                        ₹1,499/- only!
                      </span>
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-blue-100 antialiased">
                      + Govt. Fee (as applicable, paid separately)
                    </p>
                  </div>
                </div>

                {/* Definition: 2-3 Line Description */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">NGO Darpan is a NITI Aayog initiative that provides a unique identification number to eligible NGOs and voluntary organizations. Our service helps you verify documents, complete the online application and submit accurate organizational details for smooth Darpan registration.</p>

                {/* 6 Feature Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Clock className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>3-10 Working Days*</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Building2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Society / Trust / Section 8</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <FileCheck className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Document Verification</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Smartphone className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Online &amp; Paperless</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Landmark className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>NITI Aayog Portal Filing</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Users className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Dedicated Darpan Advisor</span>
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
                    <span>Fast-Track Process</span>
                  </div>

                  {formSubmitted ? (
                    <div className="text-center py-8 space-y-4 animate-in fade-in">
                      <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Application Received!</h3>
                      <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
                        Thank you <span className="font-bold">{applicantName}</span>. Our Noida-based Darpan Registration specialist has been assigned to your registration docket. We will call you within 15 minutes at <span className="font-bold">{applicantMobile}</span>.
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
                              ₹1,499/- only
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-[11px] font-bold text-slate-800 block leading-tight">
                            + Govt. Fee
                          </span>
                          <span className="text-[10px] font-medium text-slate-500 block leading-tight">
                            (as applicable, paid later)
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
                                Select State of Business Registration *
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
                                State jurisdiction determines the applicable NGO Darpan Portal and stamp duty on the deed.
                              </span>
                            </div>

                            <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100 text-xs text-slate-600 space-y-1">
                              <div className="flex items-center gap-1.5 font-bold text-[#0B3D91]">
                                <ShieldCheck className="w-4 h-4 text-[#FF5A00]" />
                                <span>Why register with akshayb2bsolutions?</span>
                              </div>
                              <p className="text-[11px]">
                                Complete NGO Registration Documents drafting, PAN application, and NGO Darpan Portal resolution kit prepared with zero visit to government offices.
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
                                  Business Type *
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
                                Authorized Member Full Name *
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
                                Authorized Member PAN Number (Optional for quote)
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
                                Select Registration Package *
                              </label>
                              <select
                                value={selectedPackage}
                                onChange={(e) => setSelectedPackage('Darpan Registration (₹1,499)')}
                                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                              >
                                <option value="Darpan Registration (₹1,499)">Darpan Registration — ₹1,499 + Govt. Fee (as applicable)</option>
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
                                  <span>Submit &amp; Get Registration Certificate</span>
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
                { id: 'comparison', label: 'Darpan vs Other NGO Registrations' },
                { id: 'tax-implications', label: 'Grants & Compliance' },
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
                Choose Your Darpan Registration Package
              </h2>
              <p className="text-sm text-slate-500 mt-2 mx-auto max-w-2xl text-center">
                One transparent package includes Darpan application guidance, document verification, portal filing support, and dedicated compliance assistance.
              </p>
            </div>

            <div className="max-w-[520px] mx-auto">
              <div className="bg-white rounded-2xl border-t-4 border-t-[#FF6B00] border-l border-r border-b border-slate-200 p-6 sm:p-8 shadow-xl flex flex-col justify-between">
                <div>
                  {/* Badges */}
                  <div className="flex items-center justify-start flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 rounded bg-orange-100 text-orange-900 text-[10px] font-black uppercase tracking-wide">
                      LOWEST COST FIRST TIME EVER
                    </span>
                    <span className="px-3 py-1 rounded bg-yellow-100 text-yellow-900 text-[10px] font-black uppercase tracking-wide">
                      INSTANT ₹2,000 LESS
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0D47A1]">Darpan Registration Package</h3>
                  <p className="text-sm text-slate-500 mb-6">
                    Essential online Darpan registration support for eligible NGOs and voluntary organizations.
                  </p>

                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <div className="flex items-baseline gap-3">
                      <span className="text-lg text-slate-400 line-through">₹4,999</span>
                      <span className="text-4xl font-extrabold text-[#0D47A1]">₹1,499</span>
                    </div>
                    <span className="text-xs text-slate-500 font-medium block mt-1">
                      + Govt. Fee (as applicable, paid separately)
                    </span>
                  </div>

                  {/* Checklist */}
                  <div className="space-y-3.5 mb-8">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">PACKAGE INCLUSIONS:</p>
                    {[
                      'Darpan Application Guidance & Verification',
                      'NGO PAN & Registration Document Verification',
                      'NGO Darpan Portal Submission Support',
                      'Eligibility & Darpan Profile Check',
                      'Document Checklist & Upload Guidance',
                      'Dedicated Darpan Registration Specialist Support'
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
                    setSelectedPackage('Darpan Registration (₹1,499)');
                    scrollToSection('lead-capture-widget');
                  }}
                  className="w-full py-4 rounded-xl bg-[#0D47A1] hover:bg-blue-900 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer text-center"
                >
                  Get Started with Darpan Registration
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 5. OVERVIEW SECTION */}
        <section id="overview" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">About NGO Darpan</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">What is Darpan Registration in India?</h2></div>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">NGO Darpan is an initiative of NITI Aayog that maintains a central database of NGOs and voluntary organizations in India. Eligible organizations can register online and receive a unique Darpan ID, which can be useful for government communication, eligible grants, schemes and funding applications.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[['NITI Aayog NGO Database','Creates a centralized profile for eligible NGOs and voluntary organizations.'],['Unique Darpan ID','Provides a unique identification number used in eligible government applications and communications.'],['Government Scheme Access','A Darpan ID may be required for certain government grants, schemes and funding opportunities.'],['Improved Credibility','A verified profile can strengthen transparency and credibility with government departments and stakeholders.'],['Online Process','Application, document upload and profile updates are handled through the online portal.'],['Digital Profile Updates','Eligible organizational details such as office address and governing body information can be updated when required.']].map(([title,desc],idx)=>(<div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200"><CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5"/><div className="text-sm text-slate-700"><strong className="text-slate-900 font-bold block mb-0.5">{title}:</strong>{desc}</div></div>))}
            </div>
          </div>
        </section>

        {/* 6. REGISTRATION */}
        <section id="registration" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Online Government Portal</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">How Darpan Registration Works</h2></div>
            <p className="text-slate-700 text-sm leading-relaxed">The process is completed online through the NGO Darpan portal. We help verify eligibility, organize the required information, complete the application, upload documents and track the application through the verification stage.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[['Eligibility Check','Confirm that the NGO is legally registered as a Society, Trust or Section 8 Company and that required information is available.'],['Online Application','Create or use the NGO Darpan login, enter organization details, chief functionary information and activity details.'],['Verification & ID','Upload supporting documents, submit the profile and track verification until the Darpan ID is generated.']].map(([title,desc],idx)=>(<div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm"><div className="w-10 h-10 rounded-xl bg-[#0B3D91] text-[#FF5A00] flex items-center justify-center font-black mb-3">{idx+1}</div><h4 className="font-bold text-slate-900 text-sm mb-1">{title}</h4><p className="text-xs text-slate-600 leading-relaxed">{desc}</p></div>))}
            </div>
          </div>
        </section>

        {/* 7. ADVANTAGES */}
        <section id="advantages" className="py-14 bg-white border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91]">Why Register</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Benefits of NGO Darpan Registration</h2></div><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{[['Government Grants','Supports applications for eligible central and state government funding programs.'],['CSR Opportunities','A Darpan profile can support NGO credibility when approaching eligible CSR partners.'],['Unique Identification','The Darpan ID provides a consistent reference for government interactions.'],['Better Transparency','Centralized organizational information improves transparency with authorities and stakeholders.'],['Wider Visibility','Listing can help eligible organizations connect with potential partners and funders.'],['Compliance Support','Maintaining accurate organizational information helps keep the government profile current.']].map(([title,desc],idx)=><div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200"><div className="flex gap-3"><ShieldCheck className="w-5 h-5 text-[#0B3D91] flex-shrink-0"/><div><h4 className="font-bold text-sm text-slate-900">{title}</h4><p className="text-xs text-slate-600 mt-1 leading-relaxed">{desc}</p></div></div></div>)}</div></div></section>

        {/* 8. CHECKLIST */}
        <section id="checklist" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91]">Before You Apply</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Darpan Registration Checklist</h2></div><div className="space-y-3">{[['Valid NGO Registration','Keep the Society, Trust or Section 8 registration certificate ready.'],['Organization PAN','Ensure the NGO PAN details match the legal registration records.'],['Chief Functionary Details','Keep the name, designation, mobile number and email details of the head of the organization ready.'],['Key Member KYC','Prepare PAN and Aadhaar details of governing body or key members as required.'],['Registered Office Proof','Keep a recent utility bill, rent agreement or ownership proof available.'],['Activity Details','Prepare a clear summary of the NGO activities, objectives and projects.']].map(([title,desc],idx)=><div key={idx} className="flex gap-3 p-4 bg-white rounded-xl border border-slate-200"><CheckCircle2 className="w-5 h-5 text-[#FF6B00] flex-shrink-0"/><div><strong className="text-sm text-slate-900">{title}</strong><p className="text-xs text-slate-600 mt-0.5">{desc}</p></div></div>)}</div></div></section>

        {/* 9. ELIGIBILITY */}
        <section id="eligibility" className="py-14 bg-white border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91]">Eligibility</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Who Can Apply for Darpan Registration?</h2></div><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{[['Registered Organization','The applicant should be an eligible NGO or voluntary organization registered as a Society, Trust or Section 8 Company.'],['Valid Registration Records','The legal registration certificate and organization details should be available and consistent.'],['PAN Availability','The organization should have a valid PAN for identification and verification.'],['Authorized Functionary','A chief functionary or authorized representative should be available for portal verification and communication.'],['Accurate Activity Information','The organization should be able to provide genuine information about its objectives and activities.'],['Digital Contact Details','An active email address and mobile number are required for OTP and portal communication.']].map(([title,desc],idx)=><div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50"><div className="flex gap-3"><Scale className="w-5 h-5 text-[#0B3D91]"/><div><h4 className="font-bold text-sm text-slate-900">{title}</h4><p className="text-xs text-slate-600 mt-1 leading-relaxed">{desc}</p></div></div></div>)}</div></div></section>

        {/* 10. DOCUMENTS */}
        <section id="documents" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91]">Document Checklist</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Documents Required for Darpan Registration</h2></div><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{[['NGO Registration Certificate','Proof of legal registration under the applicable Society, Trust or Section 8 framework.'],['NGO PAN Card','Organization PAN required for profile and financial identification.'],['Chief Functionary Details','Name, designation, contact information and identity details of the chief functionary.'],['Key Member PAN & Aadhaar','KYC details of governing body or key members as required by the portal.'],['Registered Office Proof','Recent utility bill, rent agreement or ownership document for the office address.'],['Activity & Contact Details','Details of activities, email address and mobile number for OTP verification and communication.']].map(([title,desc],idx)=><div key={idx} className="p-4 rounded-xl bg-white border border-slate-200"><div className="flex items-center gap-2 text-slate-900 font-bold text-sm"><FileText className="w-4 h-4 text-[#0B3D91]"/><h4>{title}</h4></div><p className="text-xs text-slate-600 leading-relaxed pl-6 mt-1">{desc}</p></div>)}</div></div></section>

        {/* 11. STEPS */}
        <section id="steps" className="py-14 bg-white border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91]">Registration Sequence</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Step-by-Step Darpan Registration Process</h2></div><div className="space-y-4">{[['Eligibility Check','Confirm the NGO structure and verify that the registration certificate, PAN and organizational records are available.'],['Collect Documents','Gather the registration certificate, NGO PAN, office proof, chief functionary details and key member KYC.'],['Create / Access Darpan Login','Create the organization profile on the NGO Darpan portal and complete email/mobile verification.'],['Fill Organization Profile','Enter registration details, objectives, activities, office information and governing body details accurately.'],['Upload & Submit','Upload documents in the required format, review the information and submit the application.'],['Track & Receive Darpan ID','Track verification, respond to portal queries if any, and obtain the unique Darpan ID after successful approval.']].map(([title,desc],idx)=><div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200"><div className="w-11 h-11 rounded-xl bg-[#0B3D91] text-[#FF5A00] font-black text-sm flex items-center justify-center flex-shrink-0">{idx+1}</div><div><h4 className="text-sm font-bold text-slate-900">{title}</h4><p className="text-xs text-slate-600 leading-relaxed mt-0.5">{desc}</p></div></div>)}</div></div></section>

        {/* 12. GOVERNMENT RECOGNITION */}
        <section id="legal-status" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91]">Government Recognition</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">What the Darpan ID Means</h2></div><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{[['Central NGO Database','The NGO profile is maintained through the NITI Aayog NGO Darpan system.'],['Unique Identification','Successful registration provides a unique Darpan ID for the organization.'],['Government Interaction','The ID can be used in eligible communications and applications with government departments.'],['Funding Readiness','Certain government grants and schemes may require a Darpan ID as part of the application.'],['CSR & Partnerships','Darpan registration can strengthen documentation readiness when approaching eligible CSR partners.'],['Not a Substitute for NGO Registration','Darpan registration does not itself create a Society, Trust or Section 8 Company; the NGO must already be legally registered.']].map(([title,desc],idx)=><div key={idx} className="p-4 rounded-xl bg-white border border-slate-200"><h4 className="text-sm font-bold text-[#0B3D91]">{idx+1}. {title}</h4><p className="text-xs text-slate-600 leading-relaxed mt-1">{desc}</p></div>)}</div></div></section>

        {/* 13. POST REGISTRATION */}
        <section id="post-compliance" className="py-14 bg-white border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91]">After Registration</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Post-Darpan Compliance & Updates</h2></div><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{[['Keep Profile Updated','Update organization information when there are changes in office address, governing body or other portal details.'],['Maintain Source Documents','Keep registration certificates, PAN, activity records and member KYC safely available for future verification.'],['Use Darpan ID Consistently','Use the correct Darpan ID whenever an eligible government application asks for it.'],['Monitor Funding Requirements','Check the specific eligibility and documentation requirements of each grant or scheme separately.'],['Maintain NGO Compliance','Darpan registration does not replace annual accounts, tax filings, 12A/12AB, 80G, CSR-1, FCRA or other applicable compliances.'],['Respond to Portal Queries','Address verification or correction requests promptly to keep the profile accurate.']].map(([title,desc],idx)=><div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200"><div className="flex gap-3"><FileCheck className="w-5 h-5 text-[#0B3D91]"/><div><h4 className="font-bold text-sm text-slate-900">{title}</h4><p className="text-xs text-slate-600 mt-1 leading-relaxed">{desc}</p></div></div></div>)}</div></div></section>

        {/* 14. COMPARISON */}
        <section id="comparison" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91]">Know the Difference</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Darpan vs Other NGO Registrations</h2></div><div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm"><table className="w-full text-xs sm:text-sm"><thead className="bg-[#0B3D91] text-white"><tr><th className="p-3 text-left">Registration</th><th className="p-3 text-left">Purpose</th><th className="p-3 text-left">Creates Legal Entity?</th></tr></thead><tbody>{[['NGO Darpan','Government NGO database / unique ID','No'],['Society Registration','Create a registered society','Yes'],['Trust Registration','Create a trust under applicable law','Yes'],['Section 8 Company','Create a non-profit company','Yes'],['12A / 12AB & 80G','Tax exemption / donor benefit','No — tax registration'],['FCRA','Eligibility for foreign contribution','No — regulatory registration']].map((r,i)=><tr key={i} className="border-b border-slate-100"><td className="p-3 font-bold text-slate-900">{r[0]}</td><td className="p-3 text-slate-600">{r[1]}</td><td className="p-3 text-slate-600">{r[2]}</td></tr>)}</tbody></table></div></div></section>

        {/* 15. GRANTS & COMPLIANCE */}
        <section id="tax-implications" className="py-14 bg-white border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91]">Funding & Compliance</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Darpan, Grants & NGO Compliance</h2></div><p className="text-slate-700 text-sm leading-relaxed">Darpan registration can help an eligible NGO become ready for government grant and scheme applications, but it does not automatically guarantee funding. Each program has its own eligibility, documentation and compliance requirements.</p><div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">{[['Government Grants','Use the Darpan ID where a particular scheme requires it and maintain the supporting records.'],['CSR Funding','Keep Darpan, CSR-1, 12A/12AB and 80G documentation aligned where applicable.'],['Foreign Contribution','FCRA registration or prior permission is a separate requirement where foreign contribution rules apply.']].map(([title,desc],idx)=><div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200"><Landmark className="w-5 h-5 text-[#0B3D91] mb-2"/><h4 className="font-bold text-sm text-slate-900">{title}</h4><p className="text-xs text-slate-600 mt-1 leading-relaxed">{desc}</p></div>)}</div></div></section>

        {/* 16. FUNDING */}
        <section id="financing" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91]">Funding Readiness</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">How Darpan Supports NGO Funding Readiness</h2></div><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{[['Government Scheme Applications','A valid Darpan ID can be a prerequisite for selected government grant and scheme applications.'],['CSR Partnerships','A verified organizational profile can improve documentation readiness when engaging corporate CSR teams.'],['Institutional Collaboration','Government departments and partners can use the Darpan profile to verify basic organizational information.'],['Better Documentation','A centralized profile encourages NGOs to keep their registration, PAN, office and activity details organized.']].map(([title,desc],idx)=><div key={idx} className="p-4 rounded-xl bg-white border border-slate-200"><Handshake className="w-5 h-5 text-[#0B3D91] mb-2"/><h4 className="font-bold text-sm text-slate-900">{title}</h4><p className="text-xs text-slate-600 mt-1 leading-relaxed">{desc}</p></div>)}</div></div></section>

        {/* 17. WHY US */}
        <section id="why-akshayb2b" className="py-14 bg-white border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91]">Why Choose Us</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Why Use Professional Darpan Registration Assistance?</h2></div><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{[['Document Review','We review registration, PAN, office proof and member information before submission.'],['Accurate Portal Filing','Our team helps enter organizational and activity details accurately to reduce avoidable errors.'],['Online Process','The service is handled digitally so organizations can complete the process without unnecessary office visits.'],['Query & Correction Support','We help identify discrepancies and guide corrections if the portal raises a query.'],['Transparent Pricing','Professional service fee is ₹1,499, with applicable government/third-party charges shown separately.'],['Dedicated Assistance','A registration specialist remains available throughout the application process.']].map(([title,desc],idx)=><div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200"><div className="flex gap-3"><ShieldCheck className="w-5 h-5 text-[#0B3D91]"/><div><h4 className="font-bold text-sm text-slate-900">{title}</h4><p className="text-xs text-slate-600 mt-1 leading-relaxed">{desc}</p></div></div></div>)}</div></div></section>

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
              Complete Your Darpan Registration with Confidence
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Get your NGO listed on the NITI Aayog NGO Darpan portal with accurate documentation, online filing support, and dedicated assistance. Zero hidden service charges.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => scrollToSection('lead-capture-widget')}
                className="px-6 py-3 rounded-xl bg-[#FF5A00] hover:bg-orange-500 text-[#0B3D91] font-black text-xs sm:text-sm shadow-xl transition-all cursor-pointer"
              >
                Start Darpan Registration at ₹1,499/-
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
                  Track Your Organization Registration in Real-Time
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
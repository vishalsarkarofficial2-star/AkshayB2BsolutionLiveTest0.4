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

interface TwelveA80GLandingProps {
  onBackToHome: () => void;
  onSelectService: (serviceName: string) => void;
  onOpenBrochure: () => void;
  onOpenAppointment: () => void;
}

// 6 Accordion FAQs for 12A & 80G Registration
const FAQ_ITEMS = [
  {
    q: 'What is 12A & 80G Registration?',
    a: '12A/12AB registration provides eligible charitable organizations with income-tax exemption benefits, while 80G registration enables eligible donors to claim tax deductions on qualifying donations, subject to applicable law.'
  },
  {
    q: 'Which organizations can apply for 12A & 80G?',
    a: 'Eligible charitable trusts, societies, and Section 8 companies can apply, provided their objects and activities satisfy the applicable charitable and compliance requirements.'
  },
  {
    q: 'Can a newly formed NGO apply for 12A and 80G?',
    a: 'Yes. Newly established eligible entities may apply for provisional registration where applicable. The exact route depends on the entity status, commencement of activities, and current Income Tax rules.'
  },
  {
    q: 'What documents are generally required?',
    a: 'Common documents include the trust deed or MOA/bye-laws, organization PAN, registered office proof, governing-body details, bank details, financial statements, activity report, and other documents requested by the Income Tax Department.'
  },
  {
    q: 'How long does the process take?',
    a: 'The timeline depends on document completeness, filing accuracy, and departmental verification. A typical professional estimate is around 4 to 8 weeks, but government processing can vary.'
  },
  {
    q: 'Is renewal required?',
    a: 'Yes. 12A/12AB and 80G approvals are subject to the applicable validity and renewal framework. The organization should track expiry dates and file renewal applications within the prescribed timelines.'
  }
];

// Related services cross-linking items — sourced from 12A & 80G-adjacent structures
const RELATED_SERVICES = [
  { title: 'NGO Registration', desc: 'Set up an eligible non-profit entity as a Society, Trust, or Section 8 Company.', img: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&auto=format&fit=crop&q=80', price: '₹2,999' },
  { title: 'Society Registration', desc: 'Register a charitable or social-welfare society with governing documents and Registrar support.', img: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&auto=format&fit=crop&q=80', price: '₹2,999' },
  { title: 'Trust Registration', desc: 'Create a charitable trust with a professionally drafted trust deed and registration assistance.', img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop&q=80', price: '₹4,999' },
  { title: 'Section 8 Company Registration', desc: 'Incorporate a not-for-profit company for charitable, educational, social, or public-benefit objectives.', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80', price: '₹7,999' },
  { title: 'Darpan Registration', desc: 'Obtain NGO Darpan registration/ID for eligible non-profit organizations and government-scheme readiness.', img: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&auto=format&fit=crop&q=80', price: '₹1,499' },
  { title: 'CSR-1 Registration', desc: 'Registration support for NGOs seeking eligibility to undertake CSR implementation activities.', img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&auto=format&fit=crop&q=80', price: '₹1,999' },
  { title: 'FCRA Registration', desc: 'Compliance and application assistance for eligible organizations receiving foreign contributions.', img: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=600&auto=format&fit=crop&q=80', price: '₹7,999' },
  { title: 'NGO Annual Compliance', desc: 'Ongoing support for statutory records, filings, renewals, and compliance tracking.', img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&auto=format&fit=crop&q=80', price: '₹2,999' },
  { title: 'GST Registration', desc: 'GST registration support for eligible charitable organizations and related taxable activities.', img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=80', price: '₹999' }
];

export const TwelveA80GLanding: React.FC<TwelveA80GLandingProps> = ({
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
  const [businessType, setBusinessType] = useState('Trust / Society / Section 8 Company');
  const [businessActivity, setBusinessActivity] = useState(BUSINESS_ACTIVITIES[0]);
  const [panNumber, setPanNumber] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('12A & 80G Registration (₹5,999 + Govt. Fee)');
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
            <span className="text-slate-900 font-bold">12A & 80G Registration</span>
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
                    12A & 80G Registration
                  </h1>
                  <div className="space-y-0.5">
                    <p className="text-xl sm:text-2xl font-black text-orange-300 antialiased">
                      Get your 12A & 80G Registration at just{' '}
                      <span className="underline decoration-[#FF5A00] decoration-2 underline-offset-4 font-black text-white">
                        ₹5,999/- only!
                      </span>
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-blue-100 antialiased">
                      + Govt. Fee (as applicable, paid separately)
                    </p>
                  </div>
                </div>

                {/* Definition: 2-3 Line Description */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                  12A & 80G registration helps eligible charitable trusts, societies, NGOs, and Section 8 companies obtain income-tax exemption recognition and enable eligible donors to claim deductions on qualifying donations. The process is handled through the Income Tax Department and requires proper governing documents, PAN, financial records, and evidence of charitable activities.
                </p>

                {/* 6 Feature Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Clock className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>4-8 Weeks*</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Handshake className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Trusts, Societies & Section 8</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <FileSignature className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>12A & 80G Application Support</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Zap className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Fast &amp; Hassle-Free</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Gavel className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Income Tax Department Filing</span>
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
                    <span>Professional Fee ₹5,999</span>
                  </div>

                  {formSubmitted ? (
                    <div className="text-center py-8 space-y-4 animate-in fade-in">
                      <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Application Received!</h3>
                      <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
                        Thank you <span className="font-bold">{applicantName}</span>. Our Noida-based 12A & 80G Registration specialist has been assigned to your registration docket. We will call you within 15 minutes at <span className="font-bold">{applicantMobile}</span>.
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
                              ₹5,999/- only
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
                                State jurisdiction determines the applicable Income Tax Department and stamp duty on the deed.
                              </span>
                            </div>

                            <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100 text-xs text-slate-600 space-y-1">
                              <div className="flex items-center gap-1.5 font-bold text-[#0B3D91]">
                                <ShieldCheck className="w-4 h-4 text-[#FF5A00]" />
                                <span>Why register with akshayb2bsolutions?</span>
                              </div>
                              <p className="text-[11px]">
                                Complete 12A & 80G application preparation, document review, and Income Tax Department filing support prepared with zero visit to government offices.
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
                                Authorized Representative Full Name *
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
                                Organization PAN Number (Optional for quote)
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
                                onChange={(e) => setSelectedPackage(e.target.value)}
                                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                              >
                                <option value="12A & 80G Registration (₹5,999 + Govt. Fee)">12A & 80G Package — ₹5,999 + Govt. Fee</option>
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
                12A & 80G Registration Package
              </h2>
              <p className="text-sm text-slate-500 mt-2 mx-auto max-w-2xl text-center">
                The package covers eligibility review, document verification, preparation and filing assistance for 12A & 80G applications, and coordination for departmental queries.
              </p>
            </div>

            <div className="max-w-[520px] mx-auto">
              <div className="bg-white rounded-2xl border-t-4 border-t-[#FF6B00] border-l border-r border-b border-slate-200 p-6 sm:p-8 shadow-xl flex flex-col justify-between">
                <div>
                  {/* Badges */}
                  <div className="flex items-center justify-start flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 rounded bg-orange-100 text-orange-900 text-[10px] font-black uppercase tracking-wide">
                      SINGLE PROFESSIONAL PACKAGE
                    </span>
                    <span className="px-3 py-1 rounded bg-yellow-100 text-yellow-900 text-[10px] font-black uppercase tracking-wide">
                      GOVT. FEE EXTRA
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0D47A1]">12A &amp; 80G Registration</h3>
                  <p className="text-sm text-slate-500 mb-6">
                    Complete professional assistance for 12A &amp; 80G application preparation, filing and departmental coordination.
                  </p>

                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <div className="flex items-baseline gap-3">
                      <span className="text-4xl font-extrabold text-[#0D47A1]">₹5,999</span>
                    </div>
                    <span className="text-xs text-slate-500 font-medium block mt-1">
                      + Govt. Fee (as applicable, paid separately)
                    </span>
                  </div>

                  {/* Checklist */}
                  <div className="space-y-3.5 mb-8">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">PACKAGE INCLUSIONS:</p>
                    {[
                      'Document Review: Trust Deed / MOA / Bye-laws',
                      'Eligibility & Document Review',
                      '12A & 80G Application Preparation',
                      'Income Tax Portal Filing Support',
                      'Departmental Clarification Support',
                      'Registration Status Follow-Up'
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
                    setSelectedPackage('12A & 80G Registration (₹5,999 + Govt. Fee)');
                    scrollToSection('lead-capture-widget');
                  }}
                  className="w-full py-4 rounded-xl bg-[#0D47A1] hover:bg-blue-900 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer text-center"
                >
                  Get Started with 12A &amp; 80G Registration
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 5. OVERVIEW SECTION */}
        <section id="overview" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Income Tax Compliance</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">What is 12A &amp; 80G Registration in India?</h2>
            </div>
            <p className="text-slate-700 text-sm leading-relaxed">12A/12AB registration is designed for eligible charitable organizations seeking income-tax exemption, while 80G registration helps eligible donors claim deductions on qualifying donations. These registrations are relevant for charitable trusts, societies, NGOs and Section 8 companies that satisfy the applicable legal and tax conditions.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {icon: ShieldCheck, title: 'Tax Exemption Recognition', desc: 'Eligible charitable income can receive tax-exemption treatment subject to the conditions of the Income Tax Act.'},
                {icon: Receipt, title: 'Donor Tax Benefit', desc: 'Eligible donors may claim deductions for qualifying donations to an approved organization under applicable Section 80G rules.'},
                {icon: Landmark, title: 'Income Tax Department Approval', desc: 'Applications are submitted through the Income Tax e-filing system and reviewed by the competent tax authority.'},
                {icon: Handshake, title: 'Funding & Credibility', desc: 'Valid registrations can strengthen donor confidence and support fundraising, grant and institutional funding opportunities.'}
              ].map((item, idx) => { const Icon = item.icon; return <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200"><Icon className="w-6 h-6 text-[#0B3D91] mb-2" /><h4 className="font-bold text-slate-900 text-sm">{item.title}</h4><p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p></div>; })}
            </div>
          </div>
        </section>

        <section id="registration" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Online Filing Support</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">How 12A &amp; 80G Registration Works</h2></div>
            <p className="text-slate-700 text-sm leading-relaxed">Our digital process focuses on eligibility checking, document verification, application preparation, online filing and coordination for departmental clarifications. The final approval remains subject to Income Tax Department verification.</p>
            <div className="grid md:grid-cols-3 gap-4">
              {[['12A / 12AB','Tax exemption recognition for eligible charitable entities.'],['80G','Donor deduction benefit for qualifying donations.'],['Income Tax Portal','Online application and document submission route.']].map(([title,desc],i)=><div key={i} className="bg-white border border-slate-200 rounded-xl p-5"><div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center mb-3"><FileCheck className="w-5 h-5" /></div><h4 className="font-bold text-slate-900">{title}</h4><p className="text-xs text-slate-600 mt-1 leading-relaxed">{desc}</p></div>)}
            </div>
          </div>
        </section>

        <section id="advantages" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Key Benefits</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Benefits of 12A &amp; 80G Registration</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{[
              ['Income Tax Exemption','Eligible charitable income may receive exemption subject to statutory conditions and continued compliance.'],
              ['Donor Confidence','80G eligibility can make qualifying donations more attractive to donors by providing a potential tax deduction.'],
              ['Grant & Funding Readiness','Many funding programs and institutional donors prefer organizations with structured tax and compliance records.'],
              ['Better Credibility','Tax registrations demonstrate that the organization maintains a formal compliance framework.'],
              ['Transparent Governance','Proper books, activity records and supporting documents help maintain a strong compliance trail.'],
              ['Long-Term Fundraising Support','A compliant tax structure can support sustainable fundraising and donor relationships.']
            ].map(([title,desc],i)=><div key={i} className="flex gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200"><CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5"/><div><h4 className="font-bold text-slate-900 text-sm">{title}</h4><p className="text-xs text-slate-600 mt-1 leading-relaxed">{desc}</p></div></div>)}</div>
          </div>
        </section>

        <section id="checklist" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Pre-Filing Checklist</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Checklist Before Applying</h2></div>
            <div className="space-y-3">{[
              'Confirm the entity is a legally established Trust, Society, or Section 8 Company.',
              'Verify that the charitable objects are genuine and fall within applicable charitable purposes.',
              'Keep organization PAN, governing documents and registered-office proof ready.',
              'Maintain an active bank account and clear accounting records.',
              'Compile financial statements, receipts/payments and activity reports where applicable.',
              'Ensure trustee, governing-body or director details and KYC documents are complete.'
            ].map((text,i)=><div key={i} className="flex items-center gap-3 p-3.5 rounded-xl bg-white border border-slate-200"><Check className="w-4 h-4 text-emerald-600 flex-shrink-0"/><span className="text-sm text-slate-700">{text}</span></div>)}</div>
          </div>
        </section>

        <section id="eligibility" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Eligibility</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Who Can Apply for 12A &amp; 80G?</h2></div>
            <p className="text-slate-700 text-sm leading-relaxed">Eligible non-profit entities such as charitable trusts, societies and Section 8 companies may apply when their objects and activities satisfy the applicable provisions of the Income Tax Act and related rules.</p>
            <div className="space-y-3">{[
              ['Eligible Non-Profit Structure','The applicant should be a legally established charitable trust, society or Section 8 company.'],
              ['Genuine Charitable Objects','Objects should cover eligible charitable purposes such as education, healthcare, relief of the poor or general public utility.'],
              ['No Private Profit Distribution','Income and assets should be used in accordance with the organization’s charitable objectives and applicable law.'],
              ['Proper Accounts & Records','The organization should maintain books, financial records, activity details and supporting evidence.'],
              ['Valid PAN & Bank Account','A valid organizational PAN and supporting banking information are generally required for application and verification.']
            ].map(([title,desc],i)=><div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200"><ShieldCheck className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5"/><div className="text-xs sm:text-sm text-slate-700"><strong className="text-slate-900 font-bold block mb-0.5">{title}:</strong>{desc}</div></div>)}</div>
          </div>
        </section>

        <section id="documents" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Document Checklist</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Documents Required for 12A &amp; 80G</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{[
              ['Trust Deed / MOA / Bye-laws','Constitutional document defining the organization’s legal structure and charitable objects.'],
              ['Organization PAN Card','Self-certified PAN of the trust, society or Section 8 company.'],
              ['Registered Office Proof','Address proof and recent utility bill or other accepted premises documentation.'],
              ['Trustee / Governing Body KYC','Identity and address proof of trustees, governing members or directors as applicable.'],
              ['Financial Statements','Income & expenditure account, balance sheet, receipts/payments and other available financial records.'],
              ['Activity Report & Supporting Evidence','Details and evidence of charitable activities, programs, beneficiaries and utilization of funds.'],
              ['Bank Account Details','Organization bank account information and supporting banking records.'],
              ['Additional Clarification Documents','Any further document requested by the Income Tax Department during scrutiny.' ]
            ].map(([title,desc],i)=><div key={i} className="p-4 rounded-xl bg-white border border-slate-200 space-y-1"><div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm"><FileText className="w-4 h-4 text-[#0B3D91]"/><h4>{title}</h4></div><p className="text-xs text-slate-600 leading-relaxed pl-6">{desc}</p></div>)}</div>
          </div>
        </section>

        <section id="steps" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Application Process</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Step-by-Step 12A &amp; 80G Registration Process</h2></div>
            <div className="space-y-4">{[
              ['Step 1','Eligibility & Document Review','We review the organization structure, charitable objects, PAN, governing documents and financial records.'],
              ['Step 2','Prepare Application & Attachments','Required application details and supporting documents are prepared in the applicable format.'],
              ['Step 3','Online Filing','The applicable application is submitted through the Income Tax e-filing portal with required attachments.'],
              ['Step 4','Department Verification','The Income Tax Department reviews the application and may request clarifications or additional evidence.'],
              ['Step 5','Clarification Support','We help organize responses and supporting documents for departmental queries, where required.'],
              ['Step 6','Registration / Order','After satisfactory verification, the department issues the applicable registration/order electronically.']
            ].map(([step,title,desc],i)=><div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200"><div className="w-10 h-10 rounded-xl bg-[#0B3D91] text-[#FF5A00] font-black text-xs flex items-center justify-center flex-shrink-0">{step.replace('Step ','')}</div><div><h4 className="text-sm font-bold text-slate-900 mb-0.5">{title}</h4><p className="text-xs text-slate-600 leading-relaxed">{desc}</p></div></div>)}</div>
          </div>
        </section>

        <section id="legal-status" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Legal &amp; Tax Position</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Legal Status of 12A &amp; 80G Approval</h2></div>
            <div className="grid md:grid-cols-2 gap-4">{[
              ['12A / 12AB Benefit','The approval concerns tax exemption treatment for eligible income of the charitable organization, subject to statutory conditions.'],
              ['80G Benefit','The approval concerns tax deduction eligibility for donors making qualifying donations, subject to applicable provisions.'],
              ['Not an Entity Formation','12A & 80G registration does not create a Trust, Society or Section 8 Company. The applicant must already have an eligible legal structure.'],
              ['Departmental Approval','Registration is granted by the Income Tax Department after review; professional assistance cannot guarantee approval.']
            ].map(([title,desc],i)=><div key={i} className="p-5 rounded-xl bg-white border border-slate-200"><h4 className="text-sm font-bold text-[#0B3D91] mb-1">{i+1}. {title}</h4><p className="text-xs text-slate-600 leading-relaxed">{desc}</p></div>)}</div>
          </div>
        </section>

        <section id="post-compliance" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">After Approval</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Post-Registration Compliance</h2></div>
            <div className="space-y-3">{[
              ['Maintain Books of Accounts','Keep proper books, receipts, expenditure records and financial statements.'],
              ['Use Funds for Approved Objects','Apply income and donations in accordance with charitable objects and applicable conditions.'],
              ['File Income Tax Returns','Complete applicable annual income-tax and related compliance filings on time.'],
              ['Maintain Activity Evidence','Keep reports, photographs, beneficiary details, invoices and other evidence of charitable activities.'],
              ['Track Validity & Renewal','Monitor the validity of approvals and apply for renewal within the prescribed statutory window.'],
              ['Respond to Department Queries','Maintain records and provide timely clarifications if the tax authority seeks additional information.']
            ].map(([title,desc],i)=><div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200"><CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0"/><div><strong className="text-slate-900 text-sm block">{title}</strong><p className="text-xs text-slate-600 mt-1">{desc}</p></div></div>)}</div>
          </div>
        </section>

        <section id="comparison" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Know the Difference</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">12A &amp; 80G vs Other NGO Registrations</h2></div>
            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white"><table className="w-full text-xs text-left"><thead className="bg-[#0B3D91] text-white"><tr><th className="p-3">Registration</th><th className="p-3">Primary Purpose</th><th className="p-3">Authority / System</th><th className="p-3">Creates Legal Entity?</th></tr></thead><tbody>{[
              ['12A / 12AB','Income-tax exemption for eligible charitable income','Income Tax Department','No'],
              ['80G','Eligible donor tax deduction on qualifying donations','Income Tax Department','No'],
              ['Darpan','NGO identification and government-scheme readiness','NITI Aayog','No'],
              ['Society Registration','Legal formation of a society','Registrar of Societies','Yes'],
              ['Trust Registration','Legal formation of a trust','Applicable state authority','Yes'],
              ['Section 8 Company','Incorporation of a not-for-profit company','MCA','Yes']
            ].map((r,i)=><tr key={i} className="border-t border-slate-200"><td className="p-3 font-bold text-slate-900">{r[0]}</td><td className="p-3 text-slate-600">{r[1]}</td><td className="p-3 text-slate-600">{r[2]}</td><td className="p-3 text-slate-600">{r[3]}</td></tr>)}</tbody></table></div>
          </div>
        </section>

        <section id="tax-implications" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Tax Impact</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Tax Implications of 12A &amp; 80G</h2></div>
            <p className="text-slate-700 text-sm leading-relaxed">12A/12AB and 80G are tax-compliance approvals rather than business registrations. Their benefits depend on the organization continuing to satisfy the applicable conditions, maintaining records and completing required filings.</p>
            <div className="grid md:grid-cols-2 gap-4">{[
              ['12A / 12AB','Supports income-tax exemption for eligible charitable income when statutory conditions are satisfied.'],
              ['80G','Allows eligible donors to claim deductions on qualifying donations, subject to applicable tax rules and documentation.'],
              ['Annual Compliance','Tax returns, accounts, audit requirements and other applicable filings should be maintained on time.'],
              ['Renewal & Validity','Organizations should track approval validity and comply with renewal requirements to avoid disruption.']
            ].map(([title,desc],i)=><div key={i} className="p-5 rounded-xl bg-slate-50 border border-slate-200"><h4 className="font-bold text-slate-900 text-sm">{title}</h4><p className="text-xs text-slate-600 mt-1 leading-relaxed">{desc}</p></div>)}</div>
          </div>
        </section>

        <section id="financing" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Funding &amp; Donor Support</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Funding Opportunities Supported by Better Compliance</h2></div>
            <div className="grid md:grid-cols-2 gap-4">{[
              ['Individual Donations','80G eligibility can improve donor confidence and may provide tax deduction benefits to eligible donors.'],
              ['CSR Partnerships','Structured NGO compliance can support readiness for CSR collaborations, subject to CSR rules and separate registrations such as CSR-1 where applicable.'],
              ['Institutional Grants','Many grant-makers review legal, tax and financial compliance before funding an organization.'],
              ['Government Schemes','Some schemes or funding programs may require specific registrations or portal IDs in addition to 12A & 80G.']
            ].map(([title,desc],i)=><div key={i} className="flex gap-3 p-4 rounded-xl bg-white border border-slate-200"><TrendingUp className="w-5 h-5 text-[#0B3D91] flex-shrink-0"/><div><h4 className="font-bold text-slate-900 text-sm">{title}</h4><p className="text-xs text-slate-600 mt-1 leading-relaxed">{desc}</p></div></div>)}</div>
          </div>
        </section>


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
                  title: 'Eligibility & Documentation Assessment',
                  desc: 'We review your entity structure, charitable objects, governing documents, PAN and financial records before filing.'
                },
                {
                  title: 'Accurate Application Preparation',
                  desc: 'We prepare the applicable 12A/12AB and 80G application details and organize supporting documents for online submission.'
                },
                {
                  title: 'Income Tax Department Coordination',
                  desc: 'We coordinate filing status and help organize responses to Income Tax Department clarification requests where required.'
                },
                {
                  title: 'Secure Digital Documentation',
                  desc: 'Your KYC, governing documents and financial information are handled through a structured digital document collection process.'
                },
                {
                  title: 'Post-Registration Compliance Guidance',
                  desc: 'Receive guidance on validity, renewal, record keeping and related NGO compliance requirements.'
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
                Why Organizations Choose akshayb2bsolutions
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
                  desc: '100% online, automated workflows that save you from tedious paperwork and bureaucratic government office visits.',
                  icon: Clock
                },
                {
                  title: 'Affordable Transparent Pricing',
                  desc: 'Zero hidden costs, crystal-clear pricing starting at just ₹5,999/-, and transparent separate government fee breakdowns.',
                  icon: Tag
                },
                {
                  title: 'Trusted by Thousands',
                  desc: 'Professional compliance support for NGOs, trusts, societies and Section 8 companies across India.',
                  icon: Users
                },
                {
                  title: 'Automated Compliance Alerts',
                  desc: 'Track tax, renewal and compliance requirements with structured reminders and support.',
                  icon: Zap
                },
                {
                  title: 'Secure and Confidential',
                  desc: 'Enterprise-grade 256-bit SSL encryption protecting your trustee / governing members\' KYC, financial records, and business documentation.',
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
              Strengthen Your NGO Compliance Today
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              Get 12A & 80G Registration with Confidence
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Get structured 12A & 80G application assistance with transparent professional pricing, digital document collection, and support for departmental clarifications.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => scrollToSection('lead-capture-widget')}
                className="px-6 py-3 rounded-xl bg-[#FF5A00] hover:bg-orange-500 text-[#0B3D91] font-black text-xs sm:text-sm shadow-xl transition-all cursor-pointer"
              >
                Start 12A & 80G Registration at ₹5,999/-
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

// Backward-compatible export name if this file replaces the existing TwelveAEightyGLanding component.
export const TwelveAEightyGLanding = TwelveA80GLanding;
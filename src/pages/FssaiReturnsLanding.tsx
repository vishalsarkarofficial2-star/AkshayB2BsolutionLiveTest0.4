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

interface FssaiReturnsLandingProps {
  onBackToHome: () => void;
  onSelectService: (serviceName: string) => void;
  onOpenBrochure: () => void;
  onOpenAppointment: () => void;
}

// 6 Accordion FAQs (adapted from the Applicable for eligible licensed FBOs framework)
const FAQ_ITEMS = [
  { q: 'What is an FSSAI Return?', a: 'An FSSAI Return is a statutory filing submitted by eligible licensed Food Business Operators for food business activities carried out during the previous financial year. The filing is completed online through the FoSCoS portal.' },
  { q: 'Who is required to file the FSSAI Annual Return?', a: 'FSSAI licensed manufacturers, including repackers and relabellers, importers, and manufacturer-exporters are generally required to submit the annual return. The requirement depends on the Kind of Business endorsed on the FSSAI license.' },
  { q: 'What is the due date for filing the FSSAI Annual Return?', a: 'The annual return is generally due by 31 May for activities conducted during the previous financial year. Filing after the due date may attract a late penalty as prescribed by FSSAI.' },
  { q: 'How is the FSSAI Return filed?', a: 'The return is filed online through the Food Safety Compliance System (FoSCoS). Physical submission of the annual return is not accepted.' },
  { q: 'What information is generally required for FSSAI Return filing?', a: 'The filing generally requires FSSAI license details and relevant food-product, quantity, manufacturing, import or export information for the applicable financial year, depending on the licensed Kind of Business.' },
  { q: 'What happens if the FSSAI Return is filed late?', a: 'Delayed annual return filing may attract a penalty from 1 June, subject to the applicable FSSAI rules and maximum limits. Our team can review your filing status before submission.' }
]

// Related services cross-linking items — sourced from NGO-adjacent structures
const RELATED_SERVICES = [
  {
    title: 'FSSAI Basic Registration',
    desc: 'Registration assistance for eligible small and petty food businesses in India.',
    img: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&auto=format&fit=crop&q=80',
    price: 'Contact for Price'
  },
  {
    title: 'FSSAI State License',
    desc: 'State License application support for eligible food businesses based on activity and licensing criteria.',
    img: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600&auto=format&fit=crop&q=80',
    price: 'Contact for Price'
  },
  {
    title: 'FSSAI Central License',
    desc: 'Central License application assistance for eligible manufacturers, importers, exporters and other qualifying FBOs.',
    img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&auto=format&fit=crop&q=80',
    price: 'Contact for Price'
  },
  {
    title: 'FSSAI License Renewal',
    desc: 'Timely renewal support for existing FSSAI Registration, State License or Central License.',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&auto=format&fit=crop&q=80',
    price: 'Contact for Price'
  },
  {
    title: 'FSSAI License Modification',
    desc: 'Assistance for updating business details, products, address, Kind of Business or other permitted license particulars.',
    img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=80',
    price: 'Contact for Price'
  },
  {
    title: 'FSSAI Annual Return Filing',
    desc: 'Online FoSCoS annual return filing support for eligible licensed manufacturers, importers and manufacturer-exporters.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80',
    price: 'Contact for Price'
  },
  {
    title: 'Food Business Compliance Support',
    desc: 'Ongoing assistance for FSSAI filings, license updates, document review and compliance reminders.',
    img: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&auto=format&fit=crop&q=80',
    price: 'Contact for Price'
  },
  {
    title: 'GST Registration',
    desc: 'GST registration assistance for eligible food manufacturers, traders, restaurants and other businesses.',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&auto=format&fit=crop&q=80',
    price: 'Contact for Price'
  },
  {
    title: 'Trademark Registration',
    desc: 'Trademark filing support to help protect your food brand name, logo and business identity.',
    img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=80',
    price: 'Contact for Price'
  }
]

export const FssaiReturnsLanding: React.FC<FssaiReturnsLandingProps> = ({
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
  const [selectedPackage, setSelectedPackage] = useState('FSSAI Returns Filing (Contact for Price)');
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
            <span className="text-slate-900 font-bold">FSSAI Returns</span>
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
                  <span>Pan-India FSSAI Compliance Desk</span>
                  <span className="w-1 h-1 rounded-full bg-white/60"></span>
                  <span className="text-white">Online FoSCoS Filing Support</span>
                </div>

                {/* H1 Heading & Tagline */}
                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight antialiased">
                    FSSAI Returns
                  </h1>
                  <div className="space-y-0.5">
                    <p className="text-xl sm:text-2xl font-black text-orange-300 antialiased">
                      File your FSSAI Return with expert support{' '}
                      <span className="underline decoration-[#FF5A00] decoration-2 underline-offset-4 font-black text-white">
                        Contact for Price
                      </span>
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-blue-100 antialiased">
                      Fee depends on filing requirement and case review
                    </p>
                  </div>
                </div>

                {/* Definition: 2-3 Line Description */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                  FSSAI Return filing is an ongoing compliance requirement for eligible licensed Food Business Operators. Manufacturers, including repackers and relabellers, importers and manufacturer-exporters generally submit their annual return online through the FoSCoS portal for food business activities carried out during the previous financial year.
                </p>

                {/* 6 Feature Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Clock className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Online FoSCoS Filing</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Handshake className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Annual Compliance Support</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <FileSignature className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Return Data Review</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Zap className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Accurate &amp; Hassle-Free</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Gavel className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>FoSCoS Submission Support</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Users2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Dedicated FSSAI Advisor</span>
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
                      Filings Supported
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
                    <span>Compliance Support</span>
                  </div>

                  {formSubmitted ? (
                    <div className="text-center py-8 space-y-4 animate-in fade-in">
                      <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Application Received!</h3>
                      <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
                        Thank you <span className="font-bold">{applicantName}</span>. Our FSSAI compliance specialist has been assigned to your return filing request. We will call you within 15 minutes at <span className="font-bold">{applicantMobile}</span>.
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
                              Online FSSAI Return Desk
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
                              Filing Fee
                            </span>
                            <span className="text-base font-black text-[#0B3D91] leading-none">
                              Contact for Price
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-[11px] font-bold text-slate-800 block leading-tight">
                            Final Quote
                          </span>
                          <span className="text-[10px] font-medium text-slate-500 block leading-tight">
                            (shared after requirement review)
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
                                Select State / UT of Food Business *
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
                                Your FSSAI return requirement depends on the license type, Kind of Business and activities endorsed on the FSSAI license.
                              </span>
                            </div>

                            <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100 text-xs text-slate-600 space-y-1">
                              <div className="flex items-center gap-1.5 font-bold text-[#0B3D91]">
                                <ShieldCheck className="w-4 h-4 text-[#FF5A00]" />
                                <span>Why file with akshayb2bsolutions?</span>
                              </div>
                              <p className="text-[11px]">
                                We review your FSSAI license details, return applicability, food-business data and filing information before assisting with online FoSCoS submission.
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
                                  Business Constitution *
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
                                Business / Authorized Person PAN (Optional for quote)
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
                                Select FSSAI Return Service *
                              </label>
                              <select
                                value={selectedPackage}
                                onChange={(e) => setSelectedPackage(e.target.value)}
                                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                              >
                                <option value="FSSAI Returns Filing (Contact for Price)">FSSAI Returns Filing — Contact for Price</option>
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
                                  <span>Submit &amp; Request FSSAI Return Filing</span>
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
                { id: 'registration', label: 'Return Filing' },
                { id: 'advantages', label: 'Benefits' },
                { id: 'checklist', label: 'Checklist' },
                { id: 'eligibility', label: 'Eligibility' },
                { id: 'documents', label: 'Documents Required' },
                { id: 'steps', label: 'Steps' },
                { id: 'legal-status', label: 'Applicability' },
                { id: 'post-compliance', label: 'Post-Filing' },
                { id: 'comparison', label: 'Who Must File' },
                { id: 'tax-implications', label: 'Late Filing' },
                { id: 'financing', label: 'Records Required' },
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
                FSSAI Returns Filing Assistance
              </h2>
              <p className="text-sm text-slate-500 mt-2 mx-auto max-w-2xl text-center">
                Get professional assistance for FSSAI annual return applicability review, data verification and online FoSCoS filing. Contact us for pricing based on your filing requirement.
              </p>
            </div>

            <div className="max-w-[520px] mx-auto">
              <div className="bg-white rounded-2xl border-t-4 border-t-[#FF6B00] border-l border-r border-b border-slate-200 p-6 sm:p-8 shadow-xl flex flex-col justify-between">
                <div>
                  {/* Badges */}
                  <div className="flex items-center justify-start flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 rounded bg-orange-100 text-orange-900 text-[10px] font-black uppercase tracking-wide">
                      ONLINE FILING SUPPORT
                    </span>
                    <span className="px-3 py-1 rounded bg-yellow-100 text-yellow-900 text-[10px] font-black uppercase tracking-wide">
                      CONTACT FOR PRICE
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0D47A1]">FSSAI Return Filing</h3>
                  <p className="text-sm text-slate-500 mb-6">
                    Professional filing support for eligible licensed Food Business Operators required to submit FSSAI annual returns.
                  </p>

                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <div className="flex items-baseline gap-3">
                      <span className="text-lg text-slate-400 line-through">Pricing</span>
                      <span className="text-4xl font-extrabold text-[#0D47A1]">Contact Us</span>
                    </div>
                    <span className="text-xs text-slate-500 font-medium block mt-1">
                      Fee depends on filing requirement and case review
                    </span>
                  </div>

                  {/* Checklist */}
                  <div className="space-y-3.5 mb-8">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">PACKAGE INCLUSIONS:</p>
                    {[
                      'FSSAI License & Return Applicability Review',
                      'Previous Financial Year Data Checklist',
                      'Online FoSCoS Return Filing Support',
                      'Food Product / Activity Data Review',
                      'Submission Verification & Acknowledgement Support',
                      'Dedicated FSSAI Compliance Specialist Support'
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
                    setSelectedPackage('FSSAI Returns Filing (Contact for Price)');
                    scrollToSection('lead-capture-widget');
                  }}
                  className="w-full py-4 rounded-xl bg-[#0D47A1] hover:bg-blue-900 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer text-center"
                >
                  Contact Us for Filing Price
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
                FSSAI Return Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                What are FSSAI Returns?
              </h2>
            </div>

            {/* Definition paragraph */}
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              FSSAI Returns are compliance filings submitted by eligible licensed Food Business Operators to report specified food business activities for the previous financial year. The annual return is submitted online through FoSCoS and is generally applicable to licensed manufacturers, repackers, relabellers, importers and manufacturer-exporters.
            </p>

            {/* 5 Bullets with bold lead-ins */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Target Business Audience:</strong>
                  Relevant for eligible FSSAI licensed manufacturers, repackers, relabellers, importers and manufacturer-exporters that are required to submit annual returns.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Operational Flexibility:</strong>
                  Accurate filing requires matching the return information with the FSSAI license, endorsed Kind of Business, food categories and activity data for the relevant financial year.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Defined Legal Structure:</strong>
                  Return applicability depends on the Kind of Business shown on the FSSAI license. Other categories such as retailers, distributors, wholesalers, storage, transporters and food services may not presently fall under the annual return requirement unless otherwise prescribed.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Optional but Valuable Registration:</strong>
                  For eligible licensed FBOs, annual return filing is a statutory compliance requirement and should be completed within the prescribed timeline through FoSCoS.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Growth and Capital Limitations:</strong>
                  Timely and accurate return filing helps maintain a cleaner FSSAI compliance record and reduces exposure to late-filing penalties.
                </div>
              </div>
            </div>

            {/* Closing Summary */}
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-2">
              In summary, FSSAI Return filing is an important annual compliance task for applicable licensed food businesses. Our team helps review applicability, organize filing data and complete the online submission process.
            </p>
          </div>
        </section>

        {/* 6. REGISTRATION SECTION */}
        <section id="registration" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                FSSAI Compliance Framework
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                How FSSAI Return Filing Works in India
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              Eligible FBOs prepare the required annual return information for the previous financial year and submit it through the FoSCoS portal. The return should reflect the activities and food products handled under the applicable FSSAI license.
            </p>

            <p className="text-slate-700 text-sm leading-relaxed">
              After online submission, the FBO should retain the filing acknowledgement and supporting records. If any discrepancy or revision is required, the applicable FoSCoS process should be followed.
            </p>

            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B3D91] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#FF5A00]" />
                <span>How akshayb2bsolutions Streamlines Your Registration:</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our compliance desk assists with return applicability review, data checklist preparation, FoSCoS filing support and submission follow-up.
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
                Benefits of Timely FSSAI Return Filing
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Timely Statutory Compliance',
                  desc: 'Filing the applicable FSSAI return within the prescribed timeline helps the food business meet its annual regulatory obligation.'
                },
                {
                  title: 'Accurate Business Reporting',
                  desc: 'The filing records applicable food products and business activity information for the relevant financial year.'
                },
                {
                  title: 'Reduced Filing Errors',
                  desc: 'A structured review of license and business data can help reduce avoidable mistakes before online submission.'
                },
                {
                  title: 'Better Compliance Records',
                  desc: 'Maintaining filed returns and acknowledgements supports organized regulatory records for the licensed food business.'
                },
                {
                  title: 'Online FoSCoS Submission',
                  desc: 'FSSAI annual returns are submitted online through FoSCoS, enabling a digital filing and acknowledgement trail.'
                },
                {
                  title: 'Late-Penalty Risk Management',
                  desc: 'Timely filing helps avoid or reduce exposure to late-filing penalties applicable after the prescribed due date.'
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
              akshayb2bsolutions assists with data review and online filing support so your applicable FSSAI return can be submitted in an organized and timely manner.
            </p>
          </div>
        </section>

        {/* 8. CHECKLIST (8 BULLETS) */}
        <section id="checklist" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Pre-Filing Readiness
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Checklist Before Filing Your FSSAI Return
              </h2>
            </div>

            <div className="space-y-3">
              {[
                {
                  title: 'Verify FSSAI License Details',
                  desc: 'Confirm the correct FSSAI license number, validity and Kind of Business before preparing the return.'
                },
                {
                  title: 'Confirm Return Applicability',
                  desc: 'Check whether the licensed food business falls under the categories currently required to submit the annual return.'
                },
                {
                  title: 'Collect Previous Financial Year Data',
                  desc: 'Agree in advance on each founder / trustee\'s capital contribution and profit/loss sharing ratio to avoid disputes after registration.'
                },
                {
                  title: 'Match Food Products with License',
                  desc: 'Ensure each founder / trustee\'s PAN Card and Aadhaar Card details match identically and are linked to an active mobile number for OTP verification.'
                },
                {
                  title: 'Keep Business Records Ready',
                  desc: 'Keep production, import, export and related records available to support the figures entered in the return, as applicable.'
                },
                {
                  title: 'Check Financial Year & Due Date',
                  desc: 'Prepare the filing for the correct previous financial year and target submission by the applicable due date.'
                },
                {
                  title: 'Check FoSCoS Access Details',
                  desc: 'Keep the registered mobile/email and FoSCoS access details ready where needed for verification and filing.'
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
                Return Applicability
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Eligibility Criteria for FSSAI Returns
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              FSSAI annual return filing is generally applicable to licensed food manufacturers, including repackers and relabellers, importers and manufacturer-exporters. Applicability is determined by the Kind of Business endorsed on the FSSAI license and current FSSAI requirements.
            </p>

            <div className="space-y-3">
              {[
                {
                  title: 'Licensed Manufacturers',
                  desc: 'Licensed manufacturers, including applicable repackers and relabellers, are generally covered by the annual return requirement.'
                },
                {
                  title: 'Licensed Importers',
                  desc: 'Food importers holding an applicable FSSAI license are generally required to submit the annual return.'
                },
                {
                  title: 'Manufacturer-Exporters',
                  desc: 'Manufacturer-exporters are also covered by the annual return requirement for applicable activities.'
                },
                {
                  title: 'Registration Certificate Holders',
                  desc: 'Petty FBOs holding only an FSSAI Registration Certificate are generally not required to file the annual return.'
                },
                {
                  title: 'Other Kinds of Business',
                  desc: 'Retailers, distributors, wholesalers, storage, transporters and food-service businesses may not presently be covered by the annual return requirement unless specifically prescribed.'
                },
                {
                  title: 'License-Specific Applicability',
                  desc: 'The final requirement should always be checked against the Kind of Business and activities endorsed on the actual FSSAI license.'
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
                Filing Information Checklist
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Documents Required for FSSAI Returns
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              The exact information needed depends on the Kind of Business and activities on the FSSAI license. In general, keep the license details and relevant food-product, quantity, manufacturing, import or export records for the previous financial year ready.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Members / Trustees\' Identity Proof (PAN Cards)',
                  desc: 'Scanned copies of each founder / trustee\'s Permanent Account Number (PAN) card, which serves as the primary tax identifier.'
                },
                {
                  title: 'Members / Trustees\' Address Proof (Aadhaar Card / Voter ID)',
                  desc: 'Relevant production, processing, repacking, relabelling, import or export records for the financial year, as applicable.'
                },
                {
                  title: 'Food Product Details',
                  desc: 'Details of food products handled during the year in accordance with the products and activities endorsed on the license.'
                },
                {
                  title: 'Quantity / Activity Information',
                  desc: 'Applicable quantity and business activity information needed for the return fields on FoSCoS.'
                },
                {
                  title: 'FoSCoS Verification Details',
                  desc: 'Registered contact details or portal access information may be needed for OTP verification and online submission.'
                },
                {
                  title: 'akshayb2bsolutions Filing Data Review',
                  desc: 'Our compliance team helps organize the available business data into a filing-ready checklist before FoSCoS submission.'
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
                Filing Sequence
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Step-by-Step FSSAI Return Filing Process
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  step: 'Step 1',
                  title: 'Check Financial Year & Due Date',
                  desc: 'We review your FSSAI license, Kind of Business and current filing requirement.'
                },
                {
                  step: 'Step 2',
                  title: 'Collect Financial Year Data',
                  desc: 'Share the relevant food-product and business activity records for the previous financial year.'
                },
                {
                  step: 'Step 3',
                  title: 'Review & Reconcile Filing Information',
                  desc: 'We organize the data and check it against the available FSSAI license details before submission.'
                },
                {
                  step: 'Step 4',
                  title: 'Prepare Online FoSCoS Return',
                  desc: 'We prepare the applicable annual return information for online submission through the FoSCoS portal.'
                },
                {
                  step: 'Step 5',
                  title: 'Submit FSSAI Return Online',
                  desc: 'We assist with submitting the reviewed FSSAI return online through FoSCoS.'
                },
                {
                  step: 'Step 6',
                  title: 'Save Acknowledgement & Compliance Record',
                  desc: 'Keep the submission acknowledgement and supporting business records for future compliance reference.'
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
                Regulatory Position
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Applicability & Compliance Position of FSSAI Returns
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
                <h4 className="text-sm font-bold text-[#0B3D91]">1. Who Is Covered</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Annual returns are generally required from applicable FSSAI licensed manufacturers, repackers, relabellers, importers and manufacturer-exporters.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
                <h4 className="text-sm font-bold text-[#0B3D91]">2. Filing Mode</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The annual return is filed online through FoSCoS. Physical submission is not accepted.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
                <h4 className="text-sm font-bold text-[#0B3D91]">3. Due Date</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Offers speed, shared responsibility, and pooled resources, but registered firms still lack perpetual succession — the entity may dissolve upon a founder / trustee\'s exit, unless the deed states otherwise.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
                <h4 className="text-sm font-bold text-[#0B3D91]">4. Late Filing Risk</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Late filing may attract a prescribed daily penalty from 1 June, subject to the applicable maximum limit.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-slate-700 space-y-1">
              <h4 className="font-bold text-[#0B3D91]">5. akshayb2bsolutions&apos;s Role in Explaining Legal Implications:</h4>
              <p>
                Our compliance advisors help determine applicability, organize filing data and support online submission through FoSCoS.
              </p>
            </div>
          </div>
        </section>

        {/* 13. POST-REGISTRATION COMPLIANCE (7 BULLETS) */}
        <section id="post-compliance" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Ongoing FSSAI Obligations
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Post-Filing FSSAI Compliance Checklist
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              After filing the FSSAI return, keep the acknowledgement and supporting records safely and continue meeting the other conditions attached to the food business license.
            </p>

            <div className="space-y-3">
              {[
                {
                  title: 'Keep Filing Acknowledgement',
                  desc: 'Save the FoSCoS submission acknowledgement and return details for your compliance records.'
                },
                {
                  title: 'Maintain Supporting Records',
                  desc: 'Retain the business records used to prepare the return, including applicable product and quantity information.'
                },
                {
                  title: 'Track Next Annual Return',
                  desc: 'Prepare for the next annual return cycle and maintain the relevant records throughout the financial year.'
                },
                {
                  title: 'Update FSSAI License When Required',
                  desc: 'If business particulars, premises, products or Kind of Business change, use the applicable FSSAI modification process.'
                },
                {
                  title: 'Renew License on Time',
                  desc: 'Monitor the FSSAI license validity and apply for renewal within the applicable timeline.'
                },
                {
                  title: 'Follow License Conditions',
                  desc: 'Continue complying with applicable food safety, hygiene, record-keeping and FSSAI license conditions.'
                },
                {
                  title: 'akshayb2bsolutions Ongoing FSSAI Support',
                  desc: 'Our team can assist with return filing, renewal, modification and other FSSAI compliance requirements.'
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
                Filing Applicability
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                FSSAI Return Applicability by Kind of Business
              </h2>
            </div>

            <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left text-xs border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-[#0B3D91] text-white">
                    <th className="p-3.5 font-bold border-r border-blue-800">Parameter</th>
                    <th className="p-3.5 font-bold bg-orange-500 text-[#0B3D91] border-r border-orange-600">
                      FSSAI Annual Return
                    </th>
                    <th className="p-3.5 font-bold border-r border-blue-800">Manufacturer</th>
                    <th className="p-3.5 font-bold border-r border-blue-800">Importer</th>
                    <th className="p-3.5 font-bold">Other Food Businesses</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">1. Return Requirement</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold text-orange-800 border-r border-slate-200">
                      Applicable for eligible licensed FBOs
                    </td>
                    <td className="p-3.5 border-r border-slate-200">Generally Required</td>
                    <td className="p-3.5 border-r border-slate-200">Importer Act, 2008</td>
                    <td className="p-3.5">Depends on Kind of Business</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">2. Typical Coverage</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold text-orange-800 border-r border-slate-200">
                      Manufacturer / Repacker / Relabeller
                    </td>
                    <td className="p-3.5 border-r border-slate-200">Licensed Manufacturer</td>
                    <td className="p-3.5 border-r border-slate-200">Licensed Importer</td>
                    <td className="p-3.5">Retailer / Distributor / Wholesaler / Food Service etc.</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">3. Filing Mode</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold text-rose-700 border-r border-slate-200">
                      Online through FoSCoS
                    </td>
                    <td className="p-3.5 border-r border-slate-200">Online FoSCoS</td>
                    <td className="p-3.5 border-r border-slate-200">Online FoSCoS</td>
                    <td className="p-3.5 text-orange-800 font-semibold">Check current requirement</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">4. Filing Period</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold border-r border-slate-200">
                      Previous Financial Year
                    </td>
                    <td className="p-3.5 border-r border-slate-200">Previous Financial Year</td>
                    <td className="p-3.5 border-r border-slate-200">Flat 30% on Importer</td>
                    <td className="p-3.5 text-orange-800 font-semibold">As applicable</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">5. General Due Date</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold border-r border-slate-200">
                      31 May
                    </td>
                    <td className="p-3.5 border-r border-slate-200">31 May</td>
                    <td className="p-3.5 border-r border-slate-200">As per Importer Agreement</td>
                    <td className="p-3.5">Check if filing applies</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">6. Late Filing</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold text-orange-800 border-r border-slate-200">
                      Penalty may apply after due date
                    </td>
                    <td className="p-3.5 border-r border-slate-200">Penalty may apply</td>
                    <td className="p-3.5 border-r border-slate-200">Penalty may apply</td>
                    <td className="p-3.5">If annual return is applicable</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">7. Key Data</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold border-r border-slate-200">
                      License + food activity details
                    </td>
                    <td className="p-3.5 border-r border-slate-200">Production / product data</td>
                    <td className="p-3.5 border-r border-slate-200">Import / product data</td>
                    <td className="p-3.5 text-orange-800 font-semibold">Import / product dataest (Global Standards)</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">8. Best Action</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold text-slate-900 border-r border-slate-200">
                      Verify applicability before filing
                    </td>
                    <td className="p-3.5 border-r border-slate-200">Prepare annual data</td>
                    <td className="p-3.5 border-r border-slate-200">Prepare import data</td>
                    <td className="p-3.5">Import / product data-Growth Startups &amp; Tech</td>
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
                Late Filing & Revision
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Late Filing, Penalty & Revised FSSAI Return
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              Eligible FBOs should submit the annual return within the prescribed timeline. Delayed filing can attract a daily penalty, and revised annual return filing is subject to the applicable FSSAI conditions and fee rules.
            </p>

            <div className="space-y-3">
              {[
                {
                  title: 'Annual Return Due Date',
                  desc: 'The annual return is generally due by 31 May for food business activities carried out during the previous financial year.'
                },
                {
                  title: 'Late Penalty from 1 June',
                  desc: 'A prescribed late penalty may apply from 1 June when an applicable annual return has not been filed by the due date.'
                },
                {
                  title: 'Maximum Penalty Limit',
                  desc: 'The late penalty is subject to the maximum limit prescribed by FSSAI for annual return non-submission.'
                },
                {
                  title: 'Online Filing Only',
                  desc: 'Annual returns are accepted through the online FoSCoS process; physical submission is not accepted.'
                },
                {
                  title: 'Revised Annual Return',
                  desc: 'A revised annual return may be filed subject to the applicable timeline and fee conditions prescribed by FSSAI.'
                },
                {
                  title: 'akshayb2bsolutions Late Filing Support',
                  desc: 'Our team can review your pending return, available data and current late-filing position before submission.'
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
                Filing Readiness
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Records to Keep Ready for FSSAI Returns
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              Maintaining organized records throughout the financial year makes annual FSSAI return preparation easier and helps reduce discrepancies at the time of online filing.
            </p>

            <div className="space-y-3">
              {[
                {
                  title: 'FSSAI License Copy / Details',
                  desc: 'Keep the current FSSAI license details and endorsed Kind of Business available for verification.'
                },
                {
                  title: 'Production / Processing Records',
                  desc: 'Manufacturers should maintain appropriate records of food products manufactured or processed during the financial year.'
                },
                {
                  title: 'Repacking / Relabelling Records',
                  desc: 'Where applicable, maintain product and quantity details for repacking or relabelling activities.'
                },
                {
                  title: 'Import Records',
                  desc: 'Importers should maintain the relevant food-product and import information required for annual return filing.'
                },
                {
                  title: 'Manufacturer-Exporter Records',
                  desc: 'Manufacturer-exporters should organize applicable manufacturing and export activity information for the year.'
                },
                {
                  title: 'Supporting Business Records',
                  desc: 'Keep supporting records that allow the reported figures to be reconciled with the business activities covered by the license.'
                },
                {
                  title: 'akshayb2bsolutions Data Checklist Support',
                  desc: 'We provide a filing-oriented checklist based on your available license and Kind of Business before preparing the return.'
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
                  title: 'FSSAI Return Applicability Review',
                  desc: 'We review the FSSAI license and Kind of Business to identify whether annual return filing applies.'
                },
                {
                  title: 'Return Data Checklist & Verification',
                  desc: 'Our team organizes the key filing information and checks available data before online submission.'
                },
                {
                  title: 'FoSCoS Filing Assistance',
                  desc: 'We assist with preparing and submitting the applicable FSSAI return through the FoSCoS portal.'
                },
                {
                  title: 'Submission Acknowledgement Support',
                  desc: 'We help ensure the filing acknowledgement and return record are retained after submission.'
                },
                {
                  title: 'Ongoing FSSAI Compliance Assistance',
                  desc: 'Get support for future FSSAI return filing, renewal, modification and related compliance requirements.'
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
                Why Food Businesses Choose akshayb2bsolutions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'FSSAI Compliance Guidance',
                  desc: 'Practical assistance for FSSAI return applicability, filing data and FoSCoS submission.',
                  icon: Award
                },
                {
                  title: 'Online Filing Process',
                  desc: 'Digital document and data coordination for online FSSAI return filing through FoSCoS.',
                  icon: Clock
                },
                {
                  title: 'Requirement-Based Pricing',
                  desc: 'Contact us for the professional fee after we review your FSSAI license and filing requirement.',
                  icon: Tag
                },
                {
                  title: 'Compliance-Focused Support',
                  desc: 'Structured assistance for food businesses across India with filing and compliance requirements.',
                  icon: Users
                },
                {
                  title: 'Compliance Reminder Support',
                  desc: 'Stay informed about annual return, renewal and other relevant FSSAI compliance timelines.',
                  icon: Zap
                },
                {
                  title: 'Secure and Confidential',
                  desc: 'Enterprise-grade 256-bit SSL encryption protecting your business information and compliance documentation.',
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
              Complete Your FSSAI Compliance
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              File Your FSSAI Return with Confidence
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Get professional support to review your filing requirement, organize return data and complete the applicable FSSAI annual return through FoSCoS.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => scrollToSection('lead-capture-widget')}
                className="px-6 py-3 rounded-xl bg-[#FF5A00] hover:bg-orange-500 text-[#0B3D91] font-black text-xs sm:text-sm shadow-xl transition-all cursor-pointer"
              >
                Contact for Filing Price
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
                  Related FSSAI &amp; Business Compliance Services
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
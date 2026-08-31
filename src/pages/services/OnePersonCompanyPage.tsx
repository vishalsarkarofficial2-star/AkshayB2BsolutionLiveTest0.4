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
  UserCheck
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

interface OnePersonCompanyPageProps {
  onBackToHome: () => void;
  onSelectService: (serviceName: string) => void;
  onOpenBrochure: () => void;
  onOpenAppointment: () => void;
}

// 6 Accordion FAQs for One Person Company
const FAQ_ITEMS = [
  {
    q: 'Who is eligible to incorporate a One Person Company (OPC) in India?',
    a: 'Under Section 2(62) of the Companies Act, 2013 and recent MCA amendments, any natural person who is an Indian citizen (whether resident in India or Non-Resident Indian (NRI), having stayed in India for not less than 120 days during the immediately preceding financial year) is eligible to incorporate an OPC and act as its sole shareholder and nominee.'
  },
  {
    q: 'Can a person incorporate or be a nominee in more than one One Person Company?',
    a: 'No. A natural person can be a member/promoter of only one One Person Company at any given time, and the same individual cannot be a nominee in more than one OPC simultaneously.'
  },
  {
    q: 'What is the mandatory role of a Nominee in an OPC?',
    a: 'Every One Person Company must mandatorily appoint a nominee in its Memorandum and Articles of Association (MOA/AOA) with prior written consent in Form INC-3. In the event of death or incapacity of the sole member, the nominee seamlessly steps in as the new shareholder, guaranteeing perpetual succession.'
  },
  {
    q: 'Is there any minimum paid-up capital requirement to start an OPC?',
    a: 'No statutory minimum capital requirement exists. You can incorporate your One Person Company with as little as ₹1,000/- or whatever authorized capital aligns with your solo business vision.'
  },
  {
    q: 'How long does the complete OPC incorporation process take in India?',
    a: 'The complete process typically takes 7 to 10 working days, subject to MCA SPICe+ Part A name approval, Class-3 DSC issuance, SPICe+ Part B form verification, and Registrar of Companies (ROC) processing speeds.'
  },
  {
    q: 'Can an OPC later convert into a standard Private Limited Company?',
    a: 'Yes. An OPC can voluntarily convert into a multi-shareholder Private Limited Company or Public Company at any time after incorporation by amending its MOA/AOA and increasing the minimum number of members and directors in accordance with the Companies Act, 2013.'
  }
];

// Related services cross-linking items
const RELATED_SERVICES = [
  {
    title: 'Private Limited Company Registration',
    desc: 'Register a multi-founder private limited company with MCA incorporation support.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80',
    price: '₹1,499'
  },
  {
    title: 'Limited Liability Partnership (LLP)',
    desc: 'Incorporate an LLP for flexible partnership operations with limited liability protection.',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&auto=format&fit=crop&q=80',
    price: '₹1,499'
  },
  {
    title: 'Sole Proprietorship Registration',
    desc: 'Simple single-owner business registration with zero statutory MCA overhead.',
    img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&auto=format&fit=crop&q=80',
    price: '₹999'
  },
  {
    title: 'GST Registration',
    desc: 'Mandatory tax registration for goods & service providers with fast ARN dispatch.',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&auto=format&fit=crop&q=80',
    price: '₹699'
  },
  {
    title: 'Trademark Registration',
    desc: 'Protect your brand name, logo, and intellectual property across all 45 classes.',
    img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=80',
    price: '₹1,499 + Govt. Fees'
  },
  {
    title: 'MSME Udyam Registration',
    desc: 'Government recognized MSME certificate for bank loan priority and credit subsidies.',
    img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&auto=format&fit=crop&q=80',
    price: '₹499'
  },
  {
    title: 'ROC Annual Filing for OPC',
    desc: 'Complete annual filing support for Form AOC-4, MGT-7A, and DIR-3 KYC.',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80',
    price: '₹4,999'
  },
  {
    title: 'Company Address Change',
    desc: 'Update the registered office address with MCA filing and documentation support.',
    img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&auto=format&fit=crop&q=80',
    price: '₹2,499'
  },
  {
    title: 'Director DIN KYC Filing',
    desc: 'Annual DIR-3 KYC compliance to ensure uninterrupted MCA director identification status.',
    img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=80',
    price: '₹499'
  }
];

export const OnePersonCompanyPage: React.FC<OnePersonCompanyPageProps> = ({
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
  const [businessType, setBusinessType] = useState('One Person Company (OPC)');
  const [businessActivity, setBusinessActivity] = useState(BUSINESS_ACTIVITIES[0]);
  const [panNumber, setPanNumber] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('One Person Company Package (₹1,499)');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaCode, setCaptchaCode] = useState('4M9Q2');
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
      setFormStep(2);
    } else if (formStep === 2) {
      if (!applicantName || !applicantMobile) {
        alert('Please provide your name and phone number to proceed.');
        return;
      }
      setFormStep(3);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (captchaInput.trim() !== captchaCode) {
      alert('Security code does not match. Please verify and try again.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1000);
  };

  const refreshCaptcha = () => {
    const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(result);
    setCaptchaInput('');
  };

  const scrollToSection = (id: string) => {
    setActiveNavTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-500 selection:text-white flex flex-col antialiased">
      {/* Top Utility Bar */}
      <TopUtilityBar />

      {/* Header Mega Menu */}
      <HeaderMegaMenu
        onSelectService={onSelectService}
        onOpenAppointment={onOpenAppointment}
        onOpenBrochure={onOpenBrochure}
        onBackToHome={onBackToHome}
      />

      <main className="flex-1">
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
            <span className="text-slate-900 font-bold">One Person Company (OPC) Registration</span>
          </div>
        </div>
        {/* 1. HERO SECTION & INTEGRATED MULTI-STEP LEAD DESK */}
        <section id="hero-section" className="relative bg-gradient-to-br from-[#0B3D91] via-[#0D47A1] to-[#082a66] text-white py-12 lg:py-16 overflow-hidden">
          {/* Subtle Background Elements */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-orange-400/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Heading, Tagline, Badges & Social Proof */}
              <div className="lg:col-span-7 space-y-5">
                {/* Location & Trust Pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-orange-300">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Pan-India One Person Company Registration Desk</span>
                  <span className="w-1 h-1 rounded-full bg-white/60"></span>
                  <span className="text-white">Fast-Track 7-10 Days MCA Support</span>
                </div>

                {/* H1 Heading & Tagline */}
                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight antialiased">
                    One Person Company (OPC) Registration
                  </h1>
                  <div className="space-y-0.5">
                    <p className="text-xl sm:text-2xl font-black text-orange-300 antialiased">
                      Launch your solo corporate venture at just{' '}
                      <span className="underline decoration-[#FF5A00] decoration-2 underline-offset-4 font-black text-white">
                        ₹1,499/- only!
                      </span>
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-blue-100 antialiased">
                      + Govt. Fees (as applicable, paid separately)
                    </p>
                  </div>
                </div>

                {/* Definition: 2-3 Line Description */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                  Registered under Section 2(62) of the Companies Act, 2013, a One Person Company (OPC) delivers the ideal corporate structure for solo entrepreneurs. Enjoy 100% individual ownership and decision-making authority combined with the limited liability protection, perpetual succession, and banking credibility of a full private limited company.
                </p>

                {/* 6 Feature Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Clock className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Fast SPICe+ MCA Filing</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <UserCheck className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>100% Solo Ownership</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <FileSignature className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Nominee Consent (INC-3)</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <ShieldCheck className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Limited Liability Shield</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Gavel className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>COI, PAN, TAN &amp; DIN Included</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Users2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Dedicated CA/CS Specialist</span>
                  </div>
                </div>

                {/* Live Stats Counters */}
                <div className="grid grid-cols-3 gap-3 pt-3">
                  <div className="p-3 rounded-2xl bg-white/10 border border-white/20 text-center">
                    <div className="text-xl sm:text-2xl font-black text-orange-300 tracking-tight font-mono">
                      {counterClients.toLocaleString()}+
                    </div>
                    <div className="text-[10px] sm:text-xs font-semibold text-slate-200 uppercase tracking-wider mt-0.5">
                      Entrepreneurs Assisted
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/10 border border-white/20 text-center">
                    <div className="text-xl sm:text-2xl font-black text-orange-300 tracking-tight font-mono">
                      {counterCertificates.toLocaleString()}+
                    </div>
                    <div className="text-[10px] sm:text-xs font-semibold text-slate-200 uppercase tracking-wider mt-0.5">
                      OPCs Incorporated
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/10 border border-white/20 text-center">
                    <div className="text-xl sm:text-2xl font-black text-orange-300 tracking-tight font-mono">
                      {counterProfessionals.toLocaleString()}+
                    </div>
                    <div className="text-[10px] sm:text-xs font-semibold text-slate-200 uppercase tracking-wider mt-0.5">
                      Legal Specialists
                    </div>
                  </div>
                </div>

                {/* Rating Badges */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 border border-white/15 text-xs text-white">
                    <Star className="w-3.5 h-3.5 fill-orange-400 text-orange-400" />
                    <span className="font-bold">4.9/5</span>
                    <span className="text-slate-300 text-[11px]">(3,800+ Google Reviews)</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 border border-white/15 text-xs text-white">
                    <Award className="w-3 h-3 text-orange-300" />
                    <span className="font-bold">4.9/5</span>
                    <span className="text-slate-300 text-[11px]">AmbitionBox</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 border border-white/15 text-xs text-white">
                    <ShieldCheck className="w-3 h-3 text-orange-400" />
                    <span className="text-[11px] text-slate-200">ISO 9001:2015 Certified Portal</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Multi-Step Lead Capture Form */}
              <div className="lg:col-span-5" id="lead-capture-widget">
                <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-2xl border border-slate-200 text-slate-900 relative">
                  {/* Urgency Badge */}
                  <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-[#FF5A00] text-[#0B3D91] text-xs font-black uppercase tracking-wider shadow-md flex items-center gap-1">
                    <Flame className="w-3 h-3 fill-[#0B3D91]" />
                    <span>SOLO ENTREPRENEUR PACKAGE</span>
                  </div>

                  {formSubmitted ? (
                    <div className="text-center py-8 space-y-4 animate-in fade-in">
                      <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Application Received!</h3>
                      <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
                        Thank you <span className="font-bold">{applicantName}</span>. Our One Person Company incorporation specialist at akshayb2bsolutions has been assigned to your request. We will call you within 15 minutes at <span className="font-bold">{applicantMobile}</span>.
                      </p>
                      <button
                        onClick={() => {
                          setFormSubmitted(false);
                          setFormStep(1);
                        }}
                        className="px-5 py-2 rounded-lg bg-[#0B3D91] text-white text-xs font-bold shadow-md hover:bg-blue-900 transition-colors cursor-pointer"
                      >
                        Submit Another Application
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit}>
                      {/* Form Header */}
                      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                            <h3 className="text-base font-extrabold text-[#0B3D91]">
                              Online OPC Registration Desk
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
                              OPC Registration Package
                            </span>
                            <span className="text-base font-black text-[#0B3D91] leading-none">
                              ₹1,499/- only
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-[11px] font-bold text-slate-800 block leading-tight">
                            + Govt. Fees
                          </span>
                          <span className="text-[10px] font-medium text-slate-500 block leading-tight">
                            (as applicable, paid separately)
                          </span>
                        </div>
                      </div>

                      {/* STEP Progress Bar */}
                      <div className="grid grid-cols-3 gap-1 mb-4">
                        <div className={`h-1.5 rounded-full ${formStep >= 1 ? 'bg-[#0B3D91]' : 'bg-slate-200'}`}></div>
                        <div className={`h-1.5 rounded-full ${formStep >= 2 ? 'bg-[#0B3D91]' : 'bg-slate-200'}`}></div>
                        <div className={`h-1.5 rounded-full ${formStep >= 3 ? 'bg-[#0B3D91]' : 'bg-slate-200'}`}></div>
                      </div>

                      {/* STEP 1: Registered State */}
                      {formStep === 1 && (
                        <div className="space-y-3 animate-in fade-in">
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">
                              Select Registered Office State *
                            </label>
                            <select
                              value={selectedState}
                              onChange={(e) => setSelectedState(e.target.value)}
                              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                            >
                              {INDIAN_STATES_AND_UTS.map((st) => (
                                <option key={st} value={st}>
                                  {st}
                                </option>
                              ))}
                            </select>
                            <span className="text-[11px] text-slate-500 mt-1 block">
                              Your registered state determines the ROC jurisdiction and applicable state stamp duty.
                            </span>
                          </div>

                          <div className="p-3 bg-blue-50/70 border border-blue-100 rounded-xl text-slate-700 text-xs space-y-1">
                            <div className="flex items-center gap-1.5 font-bold text-[#0B3D91]">
                              <ShieldCheck className="w-4 h-4 text-[#FF5A00]" />
                              <span>Why register your OPC with akshayb2bsolutions?</span>
                            </div>
                            <p className="text-[11px]">
                              Get SPICe+ Part A name approval, Class-3 DSC, DIN allotment, Form INC-3 nominee drafting, and PAN/TAN generation with zero physical paperwork.
                            </p>
                          </div>
                        </div>
                      )}

                      {/* STEP 2: Business Activity & Sole Director Details */}
                      {formStep === 2 && (
                        <div className="space-y-3 animate-in fade-in">
                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <label className="block text-[11px] font-bold text-slate-700 mb-1">
                                Business Structure
                              </label>
                              <input
                                type="text"
                                disabled
                                value={businessType}
                                className="w-full bg-slate-100 border border-slate-200 rounded-lg px-2.5 py-1.5 text-[11px] font-semibold text-slate-600 cursor-not-allowed"
                              />
                            </div>
                            <div>
                              <label className="block text-[11px] font-bold text-slate-700 mb-1">
                                Primary Industry Activity *
                              </label>
                              <select
                                value={businessActivity}
                                onChange={(e) => setBusinessActivity(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-2 py-1.5 text-[11px] font-medium text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                              >
                                {BUSINESS_ACTIVITIES.map((act) => (
                                  <option key={act} value={act}>
                                    {act}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">
                              Sole Director / Applicant Full Name *
                            </label>
                            <input
                              type="text"
                              required
                              value={applicantName}
                              onChange={(e) => setApplicantName(e.target.value)}
                              placeholder="e.g. Vikram Sharma"
                              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <label className="block text-xs font-bold text-slate-700 mb-1">
                                Phone Number *
                              </label>
                              <div className="relative">
                                <span className="absolute left-2.5 top-2 text-xs font-bold text-slate-400">
                                  +91
                                </span>
                                <input
                                  type="tel"
                                  required
                                  maxLength={10}
                                  value={applicantMobile}
                                  onChange={(e) => setApplicantMobile(e.target.value.replace(/\D/g, ''))}
                                  placeholder="9876543210"
                                  className="w-full bg-slate-50 border border-slate-300 rounded-lg pl-10 pr-2 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                                />
                              </div>
                            </div>

                            <div>
                              <label className="block text-xs font-bold text-slate-700 mb-1">
                                Email Address (Optional)
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
                              Sole Promoter PAN Number (Optional for quote)
                            </label>
                            <input
                              type="text"
                              maxLength={10}
                              value={panNumber}
                              onChange={(e) => setPanNumber(e.target.value.toUpperCase())}
                              placeholder="ABCDE1234F"
                              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium uppercase text-slate-900 tracking-wider focus:outline-none focus:border-[#0B3D91]"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">
                              Select One Person Company Package *
                            </label>
                            <select
                              value={selectedPackage}
                              onChange={(e) => setSelectedPackage(e.target.value)}
                              className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                            >
                              <option value="One Person Company Package (₹1,499)">One Person Company Package — ₹1,499 + Govt. Fees</option>
                            </select>
                          </div>

                          {/* Captcha */}
                          <div>
                            <label className="block text-xs font-bold text-slate-700 mb-1">
                              Security Verification *
                            </label>
                            <div className="flex items-center gap-2">
                              <div className="bg-slate-200 border border-slate-300 rounded-lg px-3 py-1.5 select-none font-mono font-bold text-sm tracking-widest text-slate-800 flex items-center justify-center">
                                {captchaCode}
                              </div>
                              <button
                                type="button"
                                onClick={refreshCaptcha}
                                className="p-2 text-slate-500 hover:text-slate-800 rounded hover:bg-slate-100 transition-colors"
                                title="Refresh Code"
                              >
                                <RotateCcw className="w-4 h-4" />
                              </button>
                              <input
                                type="text"
                                required
                                value={captchaInput}
                                onChange={(e) => setCaptchaInput(e.target.value)}
                                placeholder="Enter code"
                                className="flex-1 bg-slate-50 border border-slate-300 rounded-lg px-3 py-1.5 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                              />
                            </div>
                          </div>

                          {/* Assurance message */}
                          <div className="p-2.5 bg-green-50/80 border border-green-200 rounded-xl flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-green-700 flex-shrink-0" />
                            <span className="text-[10px] font-semibold text-green-800 leading-tight">
                              Instant acknowledgement, zero spam guarantee &amp; 100% data confidentiality.
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Navigation buttons */}
                      <div className="flex items-center gap-2 pt-3">
                        {formStep > 1 && (
                          <button
                            type="button"
                            onClick={() => setFormStep(formStep - 1)}
                            className="px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                          >
                            Back
                          </button>
                        )}

                        {formStep < 3 ? (
                          <button
                            type="button"
                            onClick={handleNextStep}
                            className="flex-1 py-2.5 rounded-xl bg-[#0B3D91] hover:bg-blue-900 text-white font-extrabold text-xs shadow-md flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                          >
                            <span>Next Step</span>
                            <ArrowRight className="w-3.5 h-3.5 text-[#FF5A00]" />
                          </button>
                        ) : (
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-1 py-3 rounded-xl bg-[#0B3D91] hover:bg-blue-900 text-white font-black text-xs shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-75"
                          >
                            {isSubmitting ? (
                              <span className="flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5 animate-spin" />
                                Processing...
                              </span>
                            ) : (
                              <>
                                <span>Submit &amp; Start OPC Registration</span>
                                <CheckCircle2 className="w-4 h-4 text-[#FF5A00]" />
                              </>
                            )}
                          </button>
                        )}
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. STICKY ANCHOR NAVIGATION BAR */}
        <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-2.5 no-scrollbar text-xs font-bold text-slate-600">
              {[
                { id: 'packages', label: 'Packages' },
                { id: 'overview', label: 'Overview' },
                { id: 'companies-act', label: 'Companies Act' },
                { id: 'nominee-rules', label: 'Nominee Rules' },
                { id: 'features', label: 'Key Features' },
                { id: 'advantages', label: 'Benefits' },
                { id: 'checklist', label: 'Checklist' },
                { id: 'documents', label: 'Documents Required' },
                { id: 'steps', label: 'Steps' },
                { id: 'comparison', label: 'OPC vs Others' },
                { id: 'tax-implications', label: 'Tax & Compliance' },
                { id: 'use-cases', label: 'Best Use Cases' },
                { id: 'why-akshayb2b', label: 'Why akshayb2bsolutions?' },
                { id: 'faqs', label: 'FAQs' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                    activeNavTab === tab.id
                      ? 'bg-[#0B3D91] text-white shadow-xs font-black'
                      : 'hover:bg-slate-100 text-slate-600'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 3. PRICING PACKAGES (SINGLE TRANSPARENT CARD) */}
        <section id="packages" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Simple, Transparent OPC Registration
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0D47A1] mt-2">
                One Person Company Package
              </h2>
              <p className="text-sm text-slate-500 mt-2 mx-auto max-w-2xl text-center">
                One all-inclusive package for solo founders who want full corporate identity, limited liability, and complete MCA incorporation support.
              </p>
            </div>

            <div className="max-w-[540px] mx-auto">
              <div className="bg-white rounded-2xl border-t-4 border-t-[#FF6B00] border-l border-r border-b border-slate-200 p-6 sm:p-8 shadow-xl flex flex-col justify-between">
                <div>
                  {/* Badges */}
                  <div className="flex items-center justify-start flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 rounded bg-orange-100 text-orange-900 text-[10px] font-black uppercase tracking-wide">
                      OPC STARTER PACKAGE
                    </span>
                    <span className="px-3 py-1 rounded bg-yellow-100 text-yellow-900 text-[10px] font-black uppercase tracking-wide">
                      INSTANT ₹2,000 LESS
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0D47A1]">One Person Company Package</h3>
                  <p className="text-sm text-slate-500 mb-6">
                    Perfect for single entrepreneurs, consultants, tech founders, and independent creators who want corporate power without needing a co-founder.
                  </p>

                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <div className="flex items-baseline gap-3">
                      <span className="text-lg text-slate-400 line-through">₹3,499</span>
                      <span className="text-4xl font-extrabold text-[#0D47A1]">₹1,499</span>
                    </div>
                    <span className="text-xs text-slate-500 font-medium block mt-1">
                      + Govt. Fees (as applicable, paid separately)
                    </span>
                  </div>

                  {/* Checklist */}
                  <div className="space-y-3.5 mb-8">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">PACKAGE INCLUSIONS:</p>
                    {[
                      'SPICe+ Part A Name Reservation Assistance',
                      'Class-3 Digital Signature Certificate (DSC)',
                      'Director Identification Number (DIN) Allotment',
                      'MOA & AOA Electronic Drafting (e-MOA & e-AOA)',
                      'Nominee Consent Form INC-3 Preparation',
                      'Certificate of Incorporation (COI) with CIN',
                      'Company PAN & TAN Generation',
                      'EPFO & ESIC Registration Generation',
                      'Zero-Balance Corporate Bank Account Resolution Kit',
                      'Dedicated CA & Corporate Law Expert Support'
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
                    setSelectedPackage('One Person Company Package (₹1,499)');
                    scrollToSection('lead-capture-widget');
                  }}
                  className="w-full py-4 rounded-xl bg-[#0D47A1] hover:bg-blue-900 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer text-center"
                >
                  Get Started with OPC Registration Package
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 4. OVERVIEW SECTION */}
        <section id="overview" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                OPC Business Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                What is a One Person Company (OPC)?
              </h2>
            </div>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              A One Person Company (OPC) is a revolutionary corporate structure introduced by the Ministry of Corporate Affairs under the Companies Act, 2013. It allows a single founder to create a registered body corporate with a distinct legal personality, perpetual existence, and limited liability protection—eliminating the historic requirement of finding a mandatory dummy co-founder or second partner.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Single-Founder Autonomy:</strong>
                  The sole shareholder exercises 100% control over strategic decisions, capital allocation, and business management without needing board approvals from co-directors.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Complete Limited Liability:</strong>
                  The personal assets, homes, and private bank accounts of the solo founder are strictly shielded from company debts, vendor dues, and legal disputes.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Corporate Brand Recognition:</strong>
                  An OPC receives a 21-digit Corporate Identification Number (CIN) and official Certificate of Incorporation from the MCA, commanding high credibility with enterprise clients and financial institutions.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Perpetual Succession via Nominee:</strong>
                  By nominating a successor under Form INC-3, the business endures continuously across generations without administrative gridlock in case of unforeseen emergencies.
                </div>
              </div>
            </div>

            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-2">
              In summary, OPC registration offers solo entrepreneurs the perfect balance between entrepreneurial autonomy and corporate prestige. Our team assists with name reservation, documentation, MCA SPICe+ filing, and post-incorporation statutory compliance.
            </p>
          </div>
        </section>

        {/* 5. STATUTORY FRAMEWORK & COMPANIES ACT 2013 */}
        <section id="companies-act" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Companies Act &amp; SPICe+ MCA Rules
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Governing Law: Section 2(62) of Companies Act, 2013
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              The Companies Act, 2013 formally categorizes a One Person Company as a class of Private Limited Company. Section 2(62) explicitly defines it as &quot;a company which has only one person as a member.&quot; It is governed under the Companies (Incorporation) Rules, 2014 and recent decriminalization amendments.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {[
                {
                  title: 'Relaxed Residency Norms (120 Days)',
                  desc: 'Recent MCA amendments have reduced the Indian residency requirement from 182 days to just 120 days, allowing NRIs to easily incorporate an OPC in India.'
                },
                {
                  title: 'No Paid-Up Capital Ceiling',
                  desc: 'The historic mandatory conversion thresholds (turnover of ₹2 Crores or paid-up capital of ₹50 Lakhs) have been abolished, allowing OPCs to grow without forced restructuring.'
                },
                {
                  title: 'SPICe+ Unified Electronic Portal',
                  desc: 'Incorporation is executed completely online through the SPICe+ (INC-32) integrated form on the Ministry of Corporate Affairs V3 portal.'
                },
                {
                  title: 'Decriminalized Minor Defaults',
                  desc: 'Technical corporate filing delays are treated as civil defaults with rationalized fees, eliminating harsh criminal penalties for solo founders.'
                }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Scale className="w-4 h-4 text-[#0B3D91]" />
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

        {/* 6. NOMINEE RULES (INC-3) */}
        <section id="nominee-rules" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Succession &amp; Governance
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Nominee Requirements &amp; Succession Protocol
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              Because an OPC is formed by a single individual, the law mandates a built-in succession mechanism to safeguard creditors, employees, and assets. The Memorandum of Association must specify a nominee who will assume ownership in the event of the member&apos;s demise or legal incapacity.
            </p>

            <div className="space-y-3">
              {[
                {
                  title: 'Form INC-3 Written Consent',
                  desc: 'The nominee must execute a prior written consent in Form INC-3 along with self-attested PAN and identity/address proof.'
                },
                {
                  title: 'Eligibility Criteria for Nominee',
                  desc: 'The nominee must be a natural person who is an Indian citizen. A minor cannot be appointed as a nominee or hold beneficial share interest.'
                },
                {
                  title: 'Right of Nominee Withdrawal',
                  desc: 'The nominee has the statutory right to withdraw consent at any time by giving written notice to the sole member and company.'
                },
                {
                  title: 'Member&apos;s Right to Change Nominee (Form INC-4)',
                  desc: 'The sole shareholder can replace the nominee at any time without requiring a complex MOA amendment by simply intimating the ROC via Form INC-4.'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <UserPlus className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-700">
                    <strong className="text-slate-900 font-bold block mb-0.5">{item.title}:</strong>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. KEY FEATURES & PRIVILEGES */}
        <section id="features" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Operational Privileges
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Key Features &amp; Statutory Exemptions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Exempt from Annual General Meetings (AGM)', desc: 'Under Section 96, an OPC is not required to hold mandatory annual general meetings of members.' },
                { title: 'Relaxed Board Meeting Requirements', desc: 'If there is only 1 director, no board meetings are required. If multiple directors exist, only 1 meeting per half calendar year is needed.' },
                { title: 'No Cash Flow Statement Mandatory', desc: 'Financial statements of an OPC do not necessarily need to include a complex cash flow statement under Section 2(40).' },
                { title: 'Simplified Annual Returns Signing', desc: 'The annual return (Form MGT-7A) can be signed directly by the sole director without requiring compulsory Company Secretary sign-off.' },
                { title: 'Up to 15 Directors Allowed', desc: 'While there can be only 1 shareholder, the OPC can appoint up to 15 executive directors for smooth day-to-day operations.' },
                { title: 'Easy Access to MSME Benefits', desc: 'An OPC can easily register under MSME Udyam and Startup India for priority sector bank lending and collateral subsidies.' }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
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
          </div>
        </section>

        {/* 8. ADVANTAGES */}
        <section id="advantages" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Core Advantages
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Why Solo Founders Choose an OPC
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'No Founder Friction or Deadlock', desc: 'With zero co-founders or conflicting partners, decisions are made instantly without shareholder veto disputes.' },
                { title: 'Separate Corporate Tax Identity', desc: 'Enjoy corporate tax benefits, claim standard business expense write-offs, and pay corporate tax rates on net earnings.' },
                { title: 'High Supplier & Vendor Trust', desc: 'Corporate suppliers and international software providers prefer contracting with incorporated OPC entities over proprietorships.' },
                { title: 'Bank Loan Eligibility', desc: 'Commercial banks and NBFCs readily sanction credit lines, overdrafts, and corporate cards to incorporated companies.' }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                    <Award className="w-4 h-4 text-[#0B3D91]" />
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

        {/* 9. CHECKLIST */}
        <section id="checklist" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Pre-Application Readiness
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Checklist Before Registering an OPC
              </h2>
            </div>

            <div className="space-y-3">
              {[
                { title: 'Sole Member & Director Selection', desc: 'Confirm that the proposed promoter is a natural person and an Indian citizen.' },
                { title: 'Finalize a Responsible Nominee', desc: 'Identify a trusted family member or associate who agrees to be nominated under Form INC-3.' },
                { title: 'Select a Unique Company Name', desc: 'Choose a distinctive brand name ending with &quot;(OPC) Private Limited&quot; compliant with MCA naming guidelines.' },
                { title: 'Define Main Object Clauses', desc: 'Articulate the primary business activities and services the company will deliver.' },
                { title: 'Arrange Registered Office Proof', desc: 'Keep electricity bill, rent agreement, and property owner NOC ready (under 2 months old).' },
                { title: 'Procure Class-3 DSC', desc: 'Get Aadhaar-linked video verification completed for Class-3 digital signature procurement.' },
                { title: 'Decide Authorized Share Capital', desc: 'Set the initial authorized and paid-up capital structure (e.g. ₹10,000 to ₹1,00,000).' },
                { title: 'Pre-Filing Document Verification', desc: 'Our corporate legal team verifies every spelling, signature, and government ID match.' }
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

        {/* 10. DOCUMENTS REQUIRED */}
        <section id="documents" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Document Checklist
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Documents Required for One Person Company
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              All documents can be uploaded digitally through our secure platform. Zero physical visits to government offices are required.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Promoter & Nominee PAN Cards',
                  desc: 'Self-attested PAN cards of both the single promoter-director and the nominated person.'
                },
                {
                  title: 'Identity & Address Proofs',
                  desc: 'Aadhaar Card, Passport, Voter ID, or Driving License copies for both promoter and nominee.'
                },
                {
                  title: 'Recent Bank Statements / Utility Bills',
                  desc: 'Bank statement or electricity/telephone bill (not older than 2 months) showing residential address.'
                },
                {
                  title: 'Registered Office Address Proof',
                  desc: 'Electricity bill, water bill, or property tax receipt for the registered premises (under 2 months old).'
                },
                {
                  title: 'Owner NOC & Rent Agreement',
                  desc: 'Signed No-Objection Certificate from the property owner along with valid rent/lease agreement.'
                },
                {
                  title: 'Signed Form INC-3, DIR-2 & INC-9',
                  desc: 'Our automated drafting desk generates the statutory consent forms and declarations ready for digital signing.'
                }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
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

        {/* 11. STEP-BY-STEP PROCESS */}
        <section id="steps" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Registration Sequence
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Step-by-Step OPC Incorporation Process
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  step: 'Step 1',
                  title: 'Procure Class-3 Digital Signature Certificate (DSC)',
                  desc: 'We generate a secure Class-3 DSC token for the sole promoter with Aadhaar OTP and video verification.'
                },
                {
                  step: 'Step 2',
                  title: 'SPICe+ Part A Name Reservation',
                  desc: 'We verify trademark availability and submit proposed company names ending with &quot;(OPC) Private Limited&quot; to the MCA.'
                },
                {
                  step: 'Step 3',
                  title: 'Draft e-MOA, e-AOA & Form INC-3 Nominee Deed',
                  desc: 'Our legal experts draft your charter documents, company object clauses, and statutory nominee consent forms.'
                },
                {
                  step: 'Step 4',
                  title: 'Integrated SPICe+ Part B Electronic Filing',
                  desc: 'We compile all declarations, owner NOCs, and submit the integrated incorporation application with ROC.'
                },
                {
                  step: 'Step 5',
                  title: 'Certificate of Incorporation (COI), PAN & TAN',
                  desc: 'The MCA approves the application and issues the official Certificate of Incorporation containing your CIN, PAN, and TAN.'
                },
                {
                  step: 'Step 6',
                  title: 'Bank Account Resolution & First Board Minutes',
                  desc: 'We supply the certified bank account opening kit, corporate resolution, and post-incorporation advisory.'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-slate-200">
                  <div className="w-10 h-10 rounded-xl bg-[#0B3D91] text-[#FF5A00] font-black text-xs flex items-center justify-center flex-shrink-0 shadow-xs">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 12. COMPARISON TABLE: OPC vs SOLE PROPRIETORSHIP vs PVT LTD */}
        <section id="comparison" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Structure Comparison
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                OPC vs Sole Proprietorship vs Private Limited
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 font-bold border-b border-slate-200">
                    <th className="p-3 border border-slate-200">Feature</th>
                    <th className="p-3 border border-slate-200 bg-blue-50 text-[#0B3D91]">One Person Company (OPC)</th>
                    <th className="p-3 border border-slate-200">Sole Proprietorship</th>
                    <th className="p-3 border border-slate-200">Private Limited Company</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr>
                    <td className="p-3 font-bold border border-slate-200">Legal Entity</td>
                    <td className="p-3 border border-slate-200 bg-blue-50/50 font-semibold text-green-700">Separate Legal Entity</td>
                    <td className="p-3 border border-slate-200 text-red-600">No Separate Entity</td>
                    <td className="p-3 border border-slate-200 text-green-700">Separate Legal Entity</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold border border-slate-200">Liability</td>
                    <td className="p-3 border border-slate-200 bg-blue-50/50 font-semibold text-green-700">Limited to shares</td>
                    <td className="p-3 border border-slate-200 text-red-600">Unlimited Personal Liability</td>
                    <td className="p-3 border border-slate-200 text-green-700">Limited to shares</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold border border-slate-200">Min. / Max. Members</td>
                    <td className="p-3 border border-slate-200 bg-blue-50/50 font-semibold">1 Member only</td>
                    <td className="p-3 border border-slate-200">1 Proprietor only</td>
                    <td className="p-3 border border-slate-200">Min. 2 / Max. 200</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold border border-slate-200">Nominee Requirement</td>
                    <td className="p-3 border border-slate-200 bg-blue-50/50 font-semibold text-[#0B3D91]">Mandatory (INC-3)</td>
                    <td className="p-3 border border-slate-200">Not Applicable</td>
                    <td className="p-3 border border-slate-200">Not Mandatory</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold border border-slate-200">Perpetual Succession</td>
                    <td className="p-3 border border-slate-200 bg-blue-50/50 font-semibold text-green-700">Yes (via Nominee)</td>
                    <td className="p-3 border border-slate-200 text-red-600">Ends with owner death</td>
                    <td className="p-3 border border-slate-200 text-green-700">Yes (Perpetual)</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold border border-slate-200">AGM Mandate</td>
                    <td className="p-3 border border-slate-200 bg-blue-50/50 font-semibold text-green-700">Exempted</td>
                    <td className="p-3 border border-slate-200">Not Applicable</td>
                    <td className="p-3 border border-slate-200 text-orange-700">Mandatory every year</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold border border-slate-200">Statutory Act</td>
                    <td className="p-3 border border-slate-200 bg-blue-50/50 font-semibold">Companies Act, 2013</td>
                    <td className="p-3 border border-slate-200">Common Commercial Law</td>
                    <td className="p-3 border border-slate-200">Companies Act, 2013</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 13. TAX & ANNUAL COMPLIANCE */}
        <section id="tax-implications" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Statutory Maintenance
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Taxation &amp; Annual Compliance for OPC
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                <h4 className="text-sm font-bold text-[#0B3D91] flex items-center gap-1.5">
                  <Receipt className="w-4 h-4 text-orange-600" />
                  <span>Corporate Income Tax Rate</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  An OPC is taxed as a domestic corporate company. The base income tax rate is flat 22% (plus applicable surcharge &amp; cess under Section 115BAA) or standard 25% for domestic companies with turnover up to ₹400 Crores.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                <h4 className="text-sm font-bold text-[#0B3D91] flex items-center gap-1.5">
                  <FileCheck className="w-4 h-4 text-orange-600" />
                  <span>ROC Form AOC-4 Filing</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Financial statements of the OPC must be filed with the Registrar of Companies in Form AOC-4 within 180 days from the closure of the financial year (by 27th September).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                <h4 className="text-sm font-bold text-[#0B3D91] flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-orange-600" />
                  <span>Form MGT-7A (Annual Return)</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The simplified annual return for One Person Companies must be filed with the ROC within 60 days from the completion of the 180-day financial year statutory period.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2">
                <h4 className="text-sm font-bold text-[#0B3D91] flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-orange-600" />
                  <span>Director DIR-3 KYC</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every director holding a DIN must complete the mandatory annual DIR-3 KYC verification before 30th September to maintain active director status.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 14. BEST USE CASES */}
        <section id="use-cases" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Ideal Archetypes
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Best Use Cases for One Person Company
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Solo Tech Founders & SaaS Creators', desc: 'Launch independent software, mobile apps, and developer tools under a recognized corporate umbrella.' },
                { title: 'Independent Consultants & Advisors', desc: 'Deliver strategic advisory, legal, financial, and marketing solutions to large corporate enterprise clients.' },
                { title: 'E-commerce & D2C Brand Owners', desc: 'Sell on Amazon, Flipkart, or custom web storefronts while keeping personal assets 100% protected.' },
                { title: 'Patent & IP Holding Entities', desc: 'Hold valuable intellectual property, copyrights, and technology patents in a distinct corporate persona.' },
                { title: 'Bootstrapped Solo Entrepreneurs', desc: 'Retain 100% equity upside without sharing governance or voting rights with casual co-founders.' },
                { title: 'Professional Freelancers Scaling Up', desc: 'Transition seamlessly from unstructured freelance invoicing to corporate banking credibility.' }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 15. WHY AKSHAY B2B SOLUTIONS */}
        <section id="why-akshayb2b" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Our Corporate Desk
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Why Incorporate Your OPC with akshayb2bsolutions?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 text-center">
                <div className="w-12 h-12 rounded-xl bg-[#0B3D91] text-[#FF5A00] flex items-center justify-center mx-auto">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">CA &amp; CS Led Precision</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Every SPICe+ filing, object clause, and INC-3 nominee deed is scrutinized by senior corporate advocates to prevent ROC resubmission queries.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 text-center">
                <div className="w-12 h-12 rounded-xl bg-[#0B3D91] text-[#FF5A00] flex items-center justify-center mx-auto">
                  <Zap className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">100% Digital Process</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Complete everything from home or office through digital signatures and online document verification without physical visits.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2 text-center">
                <div className="w-12 h-12 rounded-xl bg-[#0B3D91] text-[#FF5A00] flex items-center justify-center mx-auto">
                  <Handshake className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold text-slate-900">Post-Incorporation Advisory</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We don&apos;t just incorporate; we support you with bank account opening, GST registration, MSME Udyam, and annual ROC filings.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 16. FAQS */}
        <section id="faqs" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Frequently Asked Questions
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Questions on One Person Company Registration
              </h2>
            </div>

            <div className="space-y-3">
              {FAQ_ITEMS.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 bg-slate-50 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className="w-full p-4 text-left font-bold text-slate-900 flex items-center justify-between gap-4 text-xs sm:text-sm hover:text-[#0B3D91] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 transition-transform duration-200 flex-shrink-0 ${
                        openFaqIndex === idx ? 'rotate-180 text-[#0B3D91]' : ''
                      }`}
                    />
                  </button>
                  {openFaqIndex === idx && (
                    <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 17. FINAL CONVERSION BANNER */}
        <section className="py-14 bg-gradient-to-r from-[#0B3D91] to-[#082a66] text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6">
            <span className="text-xs font-black uppercase tracking-widest text-[#FF5A00] bg-white/10 px-3 py-1 rounded-full border border-white/20">
              Start Your Solo Venture Today
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              Register Your One Person Company with Confidence
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Join thousands of thriving Indian solo entrepreneurs who launched their One Person Company with akshayb2bsolutions. Zero hidden charges, 100% digital filing, and guaranteed resolution support.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => scrollToSection('lead-capture-widget')}
                className="px-6 py-3 rounded-xl bg-[#FF5A00] hover:bg-orange-500 text-[#0B3D91] font-black text-xs sm:text-sm shadow-xl transition-all cursor-pointer"
              >
                Start OPC Registration at ₹1,499/-
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

        {/* 18. RELATED SERVICES CROSS-LINKING */}
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
                  className="group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
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

        {/* 19. MOBILE APP PROMOTION BANNER */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="bg-gradient-to-r from-[#0B3D91] via-[#0D47A1] to-[#082a66] text-white rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-xl">
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-orange-400/10 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>

              <div className="space-y-4 max-w-md relative z-10">
                <span className="text-xs font-black uppercase tracking-wider text-[#FF5A00] bg-white/10 px-3 py-1 rounded-full border border-white/20">
                  Compliance on Mobile
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Track Your OPC Incorporation in Real-Time
                </h3>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Download the akshayb2bsolutions mobile application for iOS &amp; Android. Access your incorporation certificate, e-MOA/AOA, and get direct CA chat support 24x7.
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <div className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl flex items-center gap-2 cursor-pointer transition-all">
                    <Smartphone className="w-5 h-5 text-[#FF5A00]" />
                    <div className="text-left text-[11px] leading-tight">
                      <span className="text-slate-300 block text-[9px]">Available on</span>
                      <span className="font-bold text-white">Google Play</span>
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl flex items-center gap-2 cursor-pointer transition-all">
                    <Smartphone className="w-5 h-5 text-white" />
                    <div className="text-left text-[11px] leading-tight">
                      <span className="text-slate-300 block text-[9px]">Download on</span>
                      <span className="font-bold text-white">App Store</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-48 h-48 bg-white/10 border border-white/20 rounded-2xl flex flex-col items-center justify-center p-4 text-center relative z-10 shadow-lg">
                <div className="w-28 h-28 bg-white rounded-lg p-2 flex items-center justify-center mb-2 shadow-md">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://www.akshayb2bsolutions.com/&color=0B3D91"
                    alt="Scan to Download akshayb2bsolutions App"
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-[10px] text-slate-100 font-bold">Scan to Download App</span>
              </div>
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
      </main>

      {/* 23. SITEMAP FOOTER WITH MANDATORY DISCLAIMER */}
      <Footer onSelectService={onSelectService} />
    </div>
  );
};
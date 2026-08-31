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

interface GstReturnPageProps {
  onBackToHome: () => void;
  onSelectService: (serviceName: string) => void;
  onOpenBrochure: () => void;
  onOpenAppointment: () => void;
}

// 6 Accordion FAQs for GST Return Filing in India
const FAQ_ITEMS = [
  { q: 'What is GST Return Filing?', a: 'GST return filing is the periodic reporting of outward supplies, tax liability, eligible input tax credit and other prescribed details by registered taxpayers on the GST Portal. The applicable forms and frequency depend on the taxpayer category and return scheme.' },
  { q: 'Which GST returns are commonly filed by regular taxpayers?', a: 'Regular taxpayers commonly file GSTR-1 for outward supplies and GSTR-3B for summary tax liability and input tax credit. Eligible small taxpayers may opt for the QRMP scheme and file GSTR-1 and GSTR-3B quarterly while paying tax monthly.' },
  { q: 'What is included in the ₹500/month GST Return package?', a: 'The monthly package includes basic return-data review, GSTR-1 and GSTR-3B preparation support for eligible regular taxpayers, reconciliation assistance, filing guidance and compliance reminders. Additional or complex filings may require a separate scope.' },
  { q: 'What documents are required every month?', a: 'Keep sales invoices, purchase invoices, debit/credit notes, e-way bill details where applicable, previous return data, tax payment details and supporting records ready. Exact documents depend on your business and GST filing profile.' },
  { q: 'What happens if GST returns are filed late?', a: 'Late filing can attract applicable late fees, interest on delayed tax payment and may affect compliance status. Timely filing also helps maintain smoother input tax credit and business compliance records.' },
  { q: 'Can NIL GST returns also be filed?', a: 'Yes. Where a return is due even without business transactions for the period, the applicable NIL return should generally be filed on time to avoid unnecessary late fees, subject to the taxpayer\'s filing requirement.' }
]

// Related GST and tax compliance services
const RELATED_SERVICES = [
  {
    title: 'GST Registration',
    desc: 'Get GST registration support for eligible businesses with document review and application assistance.',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&auto=format&fit=crop&q=80',
    price: '₹699'
  },
  {
    title: 'GST Modification',
    desc: 'Update eligible GST registration details with professional amendment and document support.',
    img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=80',
    price: '₹699'
  },
  {
    title: 'GST Cancellation',
    desc: 'End an eligible GST registration with guided application and compliance support.',
    img: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600&auto=format&fit=crop&q=80',
    price: 'Contact Us'
  },
  {
    title: 'GST LUT Filing',
    desc: 'LUT filing support for eligible exporters supplying goods or services without payment of IGST.',
    img: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?w=600&auto=format&fit=crop&q=80',
    price: 'Contact Us'
  },
  {
    title: 'GST Annual Return',
    desc: 'Professional assistance for applicable annual GST return preparation, reconciliation and filing.',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&auto=format&fit=crop&q=80',
    price: 'Contact Us'
  },
  {
    title: 'TDS Return Filing',
    desc: 'Quarterly TDS return preparation and filing support with challan and deductee-data review.',
    img: 'https://images.unsplash.com/photo-1554224155-1696413565d3?w=600&auto=format&fit=crop&q=80',
    price: 'Contact Us'
  },
  {
    title: 'TAN Registration',
    desc: 'TAN application assistance for businesses and entities responsible for TDS/TCS compliance.',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&auto=format&fit=crop&q=80',
    price: '₹699'
  },
  {
    title: 'Income Tax Return',
    desc: 'ITR preparation and filing support for individuals and businesses based on applicable income details.',
    img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=80',
    price: 'Contact Us'
  },
  {
    title: 'MSME Registration',
    desc: 'Udyam Registration support for eligible micro, small and medium enterprises in India.',
    img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&auto=format&fit=crop&q=80',
    price: '₹999'
  }
]
export const GstReturnPage: React.FC<GstReturnPageProps> = ({
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
  const [businessType, setBusinessType] = useState('Business');
  const [businessActivity, setBusinessActivity] = useState(BUSINESS_ACTIVITIES[0]);
  const [panNumber, setPanNumber] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('GST Return Filing Package (₹500/month)');
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
            <span className="text-slate-900 font-bold">GST Return Filing</span>
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
                    GST Return Filing
                  </h1>
                  <div className="space-y-0.5">
                    <p className="text-xl sm:text-2xl font-black text-orange-300 antialiased">
                      File your GST returns from just{' '}
                      <span className="underline decoration-[#FF5A00] decoration-2 underline-offset-4 font-black text-white">
                        ₹500/month
                      </span>
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-blue-100 antialiased">
                      Simple monthly compliance support • No hidden professional charges
                    </p>
                  </div>
                </div>

                {/* Definition: 2-3 Line Description */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                  GST Return Filing is the recurring compliance process for GST-registered businesses to report outward supplies, tax liability, eligible input tax credit and other prescribed details. Our ₹500/month plan is designed to make regular GST compliance simpler for small businesses with guided GSTR-1 and GSTR-3B filing support.
                </p>

                {/* 6 Feature Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Clock className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Monthly Filing Support</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Receipt className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>GSTR-1 & GSTR-3B Support</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <FileCheck className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Invoice Data Review</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Zap className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Fast &amp; Hassle-Free</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <IndianRupee className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>GST Portal Filing Support</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <ShieldCheck className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Dedicated GST Advisor</span>
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
                      Returns Filed
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
                        Thank you <span className="font-bold">{applicantName}</span>. Our GST return specialist has received your filing request. We will call you within 15 minutes at <span className="font-bold">{applicantMobile}</span>.
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
                              Online GST Filing Desk
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
                              Monthly Plan
                            </span>
                            <span className="text-base font-black text-[#0B3D91] leading-none">
                              ₹500/month
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-[11px] font-bold text-slate-800 block leading-tight">
                            GST Filing Support
                          </span>
                          <span className="text-[10px] font-medium text-slate-500 block leading-tight">
                            for eligible regular filing scope
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
                                Select State of GST Return Filing *
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
                                Select the State/UT linked to your GSTIN so our team can review your filing profile and applicable return frequency.
                              </span>
                            </div>

                            <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100 text-xs text-slate-600 space-y-1">
                              <div className="flex items-center gap-1.5 font-bold text-[#0B3D91]">
                                <ShieldCheck className="w-4 h-4 text-[#FF5A00]" />
                                <span>Why file GST returns with akshayb2bsolutions?</span>
                              </div>
                              <p className="text-[11px]">
                                Share your monthly sales and purchase data once; our team helps organise the return, check key figures, guide tax payment and support timely filing with minimal compliance stress.
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
                                Taxpayer / Authorized Person Name *
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
                                GSTIN / PAN (Optional for enquiry)
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
                                Select GST Return Filing Package *
                              </label>
                              <select
                                value={selectedPackage}
                                onChange={(e) => setSelectedPackage(e.target.value)}
                                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                              >
                                <option value="GST Return Filing Package (₹500/month)">GST Return Filing — ₹500/month</option>
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
                                  <span>Submit &amp; Start GST Filing</span>
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
                Simple GST Return Filing Plan
              </h2>
              <p className="text-sm text-slate-500 mt-2 mx-auto max-w-2xl text-center">
                One affordable monthly plan designed for small businesses that want reliable GST return assistance without complicated pricing.
              </p>
            </div>

            <div className="max-w-[520px] mx-auto">
              <div className="bg-white rounded-2xl border-t-4 border-t-[#FF6B00] border-l border-r border-b border-slate-200 p-6 sm:p-8 shadow-xl flex flex-col justify-between">
                <div>
                  {/* Badges */}
                  <div className="flex items-center justify-start flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 rounded bg-orange-100 text-orange-900 text-[10px] font-black uppercase tracking-wide">
                      SMALL BUSINESS FRIENDLY
                    </span>
                    <span className="px-3 py-1 rounded bg-yellow-100 text-yellow-900 text-[10px] font-black uppercase tracking-wide">
                      ONLY ₹500 / MONTH
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0D47A1]">GST Monthly Care</h3>
                  <p className="text-sm text-slate-500 mb-6">
                    Keep your GST compliance on track every month with guided return preparation, review and filing support.
                  </p>

                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <div className="flex items-baseline gap-3">
                      <span className="text-lg text-slate-400 line-through">₹999</span>
                      <span className="text-4xl font-extrabold text-[#0D47A1]">₹500</span>
                    </div>
                    <span className="text-xs text-slate-500 font-medium block mt-1">
                      Simple monthly compliance support • No hidden professional charges
                    </span>
                  </div>

                  {/* Checklist */}
                  <div className="space-y-3.5 mb-8">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">PACKAGE INCLUSIONS:</p>
                    {[
                      'Monthly Sales & Purchase Data Review',
                      'GSTR-1 Preparation Support',
                      'GST Portal Filing Support Support',
                      'Input Tax Credit & Liability Review',
                      'GST Portal Filing & Acknowledgement Support',
                      'Dedicated GST Compliance Support'
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
                    setSelectedPackage('GST Return Filing Package (₹500/month)');
                    scrollToSection('lead-capture-widget');
                  }}
                  className="w-full py-4 rounded-xl bg-[#0D47A1] hover:bg-blue-900 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer text-center"
                >
                  Get Started with GST Monthly Care
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
                What is GST Return Filing in India?
              </h2>
            </div>

            {/* Definition paragraph */}
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              GST return filing is the recurring compliance process through which registered taxpayers report outward supplies, tax liability, eligible input tax credit and other prescribed details to the GST system. For many regular taxpayers, GSTR-1 and GSTR-3B are the key periodic filings.
            </p>

            {/* 5 Bullets with bold lead-ins */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Target Business Audience:</strong>
                  Ideal for GST-registered proprietorships, partnerships, LLPs, companies, traders, service providers and small businesses that need recurring GST return support.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Operational Flexibility:</strong>
                  A consistent monthly process helps keep invoice data, outward supplies, purchase records, input tax credit and tax liability organised before filing.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Defined Legal Structure:</strong>
                  Your applicable return type and frequency depend on GST registration status, taxpayer category, turnover, scheme selection and current portal rules.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Optional but Valuable Registration:</strong>
                  Timely GST return filing is a recurring statutory compliance requirement for registered taxpayers who are required to furnish the relevant returns, even in many NIL-activity periods.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Growth and Capital Limitations:</strong>
                  Accurate filing can reduce avoidable mismatches, late fees and interest exposure while helping keep GST records and input tax credit positions better organised.
                </div>
              </div>
            </div>

            {/* Closing Summary */}
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-2">
              In summary, our GST Return service is built to make recurring compliance simpler: share your monthly records, let our team organise and review the data, and receive guided filing support at an affordable monthly price.
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
                How GST Return Filing Works in India
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              GST return filing involves preparing and submitting the prescribed return forms based on the taxpayer's GST profile. Regular taxpayers commonly deal with GSTR-1 for outward supplies and GSTR-3B for summary tax liability and eligible ITC.
            </p>

            <p className="text-slate-700 text-sm leading-relaxed">
              Eligible small taxpayers may use the QRMP scheme to file GSTR-1 and GSTR-3B quarterly while making monthly tax payments. Filing frequency and due dates should always be checked against the taxpayer's current GST Portal profile.
            </p>

            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B3D91] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#FF5A00]" />
                <span>How akshayb2bsolutions Streamlines Your Registration:</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our GST desk helps organise invoice data, review key return figures, prepare applicable return working, guide tax payment and support filing and acknowledgement on the GST Portal.
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
                Why Timely GST Return Filing Matters
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Legal Recognition & Right to Sue',
                  desc: 'Timely GST return filing helps maintain an active compliance trail and reduces avoidable filing delays and follow-up issues.'
                },
                {
                  title: 'Shared Capital & Combined Expertise',
                  desc: 'Monthly review of sales and purchase data helps identify missing invoices, mismatches and potential ITC issues before filing.'
                },
                {
                  title: 'Minimal Start-up Costs & Quick Setup',
                  desc: 'Get recurring GST return assistance at a transparent ₹500/month professional fee for the standard package scope.'
                },
                {
                  title: 'Improved Business Credibility',
                  desc: 'Regular compliance supports smoother vendor/customer relationships and can help when GST records are reviewed for business, finance or tender requirements.'
                },
                {
                  title: 'Simplified Compliance Structure',
                  desc: 'A structured filing workflow reduces the burden of repeatedly organising invoices and tax figures at the last moment.'
                },
                {
                  title: 'Access to Government Benefits',
                  desc: 'Businesses can focus on operations while receiving guided support for recurring GST return preparation and filing.'
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
              akshayb2bsolutions helps you organise GST records and file applicable returns more consistently, while final tax positions remain subject to your actual books and statutory requirements.
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
                GST Return Filing Checklist
              </h2>
            </div>

            <div className="space-y-3">
              {[
                {
                  title: 'GSTIN & Filing Profile Check',
                  desc: 'Confirm the correct GSTIN, legal name, return frequency and taxpayer profile before preparing the period return.'
                },
                {
                  title: 'Sales Invoice & HSN/SAC Review',
                  desc: 'Keep complete sales invoices and applicable HSN/SAC details ready for outward-supply reporting.'
                },
                {
                  title: 'Purchase & ITC Record Readiness',
                  desc: 'Maintain purchase invoices and supporting records to review eligible input tax credit before GSTR-3B filing.'
                },
                {
                  title: 'Taxpayer & Authorized Signatory Access',
                  desc: 'Keep valid GST Portal credentials and authorized signatory access ready for filing through the permitted authentication method.'
                },
                {
                  title: 'Debit / Credit Notes & Adjustments',
                  desc: 'Share debit notes, credit notes, amendments and other relevant period adjustments so return values are not missed.'
                },
                {
                  title: 'Reconcile Books with GST Data',
                  desc: 'Reconcile key sales, purchase, tax and ITC figures with available GST data before final filing.'
                },
                {
                  title: 'Check Pending Returns & Tax Liability',
                  desc: 'Review pending periods, payable tax, cash/credit ledger position and any compliance alerts before filing.'
                },
                {
                  title: 'akshayb2bsolutions Verification Role',
                  desc: 'Our compliance team reviews the information you share and flags obvious gaps before preparing the return working.'
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
                Who Needs GST Return Filing Support?
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              GST return filing applies to registered persons according to their taxpayer category and prescribed filing requirements. The exact forms, frequency and tax payment obligations vary by registration profile and scheme.
            </p>

            <div className="space-y-3">
              {[
                {
                  title: 'GST Registration Must Be Active / Applicable',
                  desc: 'The taxpayer should have a GST registration for which the relevant return is due for the period.'
                },
                {
                  title: 'Correct Return Frequency',
                  desc: 'Confirm whether the GSTIN is on monthly filing or an eligible quarterly scheme such as QRMP.'
                },
                {
                  title: 'Complete Period Data',
                  desc: 'Sales, purchase, debit/credit note and relevant tax-payment information should be available for the filing period.'
                },
                {
                  title: 'GST Portal Access',
                  desc: 'GST Portal access and authorized filing credentials should be available to complete the return filing process.'
                },
                {
                  title: 'Books & GST Data Reconciliation',
                  desc: 'Key return values should be checked against books and available GST data before final submission.'
                },
                {
                  title: 'Special Taxpayer Categories',
                  desc: 'Composition taxpayers, ISDs, TDS/TCS deductors/collectors, non-residents and other categories can have different return forms and are outside a standard GSTR-1/GSTR-3B scope unless specifically agreed.'
                },
                {
                  title: 'Pre-Filing Compliance Review',
                  desc: 'akshayb2bsolutions reviews the GSTIN profile and filing information shared by the taxpayer before preparing the applicable return working.'
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
                Documents & Data Required for GST Returns
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              For smooth GST return filing, keep the period sales and purchase records, GSTIN details, debit/credit notes, tax-payment information and relevant supporting data ready. Records can be shared digitally.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: 'GSTIN & Legal Business Details',
                  desc: 'Share the GSTIN, legal/trade name and filing period so the correct return profile can be identified.'
                },
                {
                  title: 'Sales / Outward Supply Data',
                  desc: 'Provide sales invoices, B2B/B2C details, exports or other outward-supply records applicable to the period.'
                },
                {
                  title: 'Purchase & Expense Invoices',
                  desc: 'Provide purchase invoices and expense records relevant to input tax credit review and return preparation.'
                },
                {
                  title: 'Debit / Credit Notes & Amendments',
                  desc: 'Share period debit notes, credit notes, invoice amendments and other adjustments affecting GST values.'
                },
                {
                  title: 'Tax Payment & Ledger Information',
                  desc: 'Keep tax payable details, challans and relevant electronic cash/credit ledger information available where needed.'
                },
                {
                  title: 'GST Data Review & Filing Support',
                  desc: 'Our team organises the data you provide into a filing-ready working and supports submission of the applicable return within the agreed service scope.'
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
        <section id="steps" className="py-14 bg-white border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Filing Workflow</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Step-by-Step GST Return Filing Process</h2></div><div className="space-y-4">{[
{ step: 'Step 1', title: 'Share Monthly GST Data', desc: 'Send sales invoices, purchase invoices, debit/credit notes and relevant transaction details for the filing period.' },
{ step: 'Step 2', title: 'GSTIN & Return Profile Check', desc: 'We review your GSTIN, taxpayer category, filing frequency and pending return period before preparation.' },
{ step: 'Step 3', title: 'Prepare GSTR-1', desc: 'Outward-supply information is organised and checked for the applicable GSTR-1 reporting period.' },
{ step: 'Step 4', title: 'Review ITC & GSTR-3B Working', desc: 'Purchase records, available GST data, eligible ITC and tax liability are reviewed before finalising the summary return.' },
{ step: 'Step 5', title: 'Tax Payment Guidance', desc: 'Where tax is payable, we help you understand the amount and filing-stage payment requirement based on the return working.' },
{ step: 'Step 6', title: 'File & Share Acknowledgement', desc: 'The applicable return is filed through the GST Portal using the permitted authentication method and filing proof is shared for your records.' }
].map((item, idx) => (<div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200"><div className="w-10 h-10 rounded-xl bg-[#0B3D91] text-[#FF5A00] font-black text-xs flex items-center justify-center flex-shrink-0 shadow-xs">{item.step}</div><div><h4 className="text-sm font-bold text-slate-900 mb-0.5">{item.title}</h4><p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p></div></div>))}</div></div></section>

        {/* 12. LEGAL STATUS (5 SUB-HEADINGS) */}
        <section id="legal-status" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">GST Compliance Position</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Understanding Your GST Return Status</h2></div><div className="grid grid-cols-1 md:grid-cols-2 gap-4"><div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5"><h4 className="text-sm font-bold text-[#0B3D91]">1. Return Obligation</h4><p className="text-xs text-slate-600 leading-relaxed">A registered taxpayer must furnish the returns applicable to its GST registration profile, taxpayer category and filing frequency.</p></div><div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5"><h4 className="text-sm font-bold text-[#0B3D91]">2. Monthly or Quarterly Filing</h4><p className="text-xs text-slate-600 leading-relaxed">Regular taxpayers may have monthly filing obligations, while eligible small taxpayers can opt for QRMP and file GSTR-1 and GSTR-3B quarterly with monthly tax payment.</p></div><div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5"><h4 className="text-sm font-bold text-[#0B3D91]">3. NIL Return Responsibility</h4><p className="text-xs text-slate-600 leading-relaxed">Where an applicable return is due even without transactions, timely NIL filing may still be required for the period.</p></div><div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5"><h4 className="text-sm font-bold text-[#0B3D91]">4. Late Filing Risk</h4><p className="text-xs text-slate-600 leading-relaxed">Delayed filing can trigger applicable late fee, interest on delayed tax payment and other compliance consequences.</p></div></div><div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-slate-700 space-y-1"><h4 className="font-bold text-[#0B3D91]">5. akshayb2bsolutions Support:</h4><p>We help identify your filing profile, organise return data, prepare working papers and support timely GST Portal filing within the agreed package scope.</p></div></div></section>

        {/* 13. POST-REGISTRATION COMPLIANCE (7 BULLETS) */}
        <section id="post-compliance" className="py-14 bg-white border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Ongoing GST Compliance</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Monthly GST Compliance Checklist</h2></div><p className="text-slate-700 text-sm leading-relaxed">Good GST compliance is not only about clicking “file”. Accurate invoice records, tax payment, ITC review and timely return submission all matter.</p><div className="space-y-3">{[
{ title: 'Maintain Sales Records', desc: 'Keep complete tax invoices and outward-supply details for the return period.' },
{ title: 'Maintain Purchase Records', desc: 'Keep purchase and expense invoices to support input tax credit review.' },
{ title: 'Review GSTR-2B / Available ITC Data', desc: 'Compare available GST data with books before considering eligible input tax credit in GSTR-3B.' },
{ title: 'File GSTR-1 on Time', desc: 'Report applicable outward-supply details within the prescribed filing cycle.' },
{ title: 'File GSTR-3B & Pay Tax', desc: 'Complete the summary return and discharge applicable tax liability within the prescribed timeline.' },
{ title: 'Resolve Mismatches & Notices', desc: 'Address discrepancies, pending periods or GST Portal notices promptly when they arise.' },
{ title: 'akshayb2bsolutions Monthly Support', desc: 'Our team provides a repeatable monthly workflow, filing reminders and return preparation support so compliance does not become a last-minute task.' }
].map((item, idx) => <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200"><CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" /><div className="text-xs sm:text-sm text-slate-700"><strong className="text-slate-900 font-bold block mb-0.5">{item.title}:</strong>{item.desc}</div></div>)}</div></div></section>

        {/* 14. COMPARISON TABLE (8 ROWS) */}
        <section id="comparison" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20"><div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Return Comparison</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Common GST Return Types at a Glance</h2></div><div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm"><table className="w-full min-w-[760px] text-xs text-left"><thead className="bg-[#0B3D91] text-white"><tr><th className="p-3.5">Return</th><th className="p-3.5">Main Purpose</th><th className="p-3.5">Typical User</th><th className="p-3.5">Frequency</th></tr></thead><tbody className="divide-y divide-slate-200"><tr><td className="p-3.5 font-bold">GSTR-1</td><td className="p-3.5">Outward supply / sales details</td><td className="p-3.5">Regular taxpayers</td><td className="p-3.5">Monthly or quarterly, as applicable</td></tr><tr><td className="p-3.5 font-bold">GSTR-3B</td><td className="p-3.5">Summary tax liability and eligible ITC</td><td className="p-3.5">Regular taxpayers</td><td className="p-3.5">Monthly or quarterly, as applicable</td></tr><tr><td className="p-3.5 font-bold">CMP-08</td><td className="p-3.5">Statement-cum-challan for composition taxpayers</td><td className="p-3.5">Composition taxpayers</td><td className="p-3.5">Quarterly</td></tr><tr><td className="p-3.5 font-bold">GSTR-4</td><td className="p-3.5">Annual return for composition taxpayers</td><td className="p-3.5">Composition taxpayers</td><td className="p-3.5">Annual</td></tr><tr><td className="p-3.5 font-bold">GSTR-9</td><td className="p-3.5">Annual return where applicable</td><td className="p-3.5">Eligible regular taxpayers</td><td className="p-3.5">Annual</td></tr></tbody></table></div></div></section>

        {/* 15. TAX IMPLICATIONS (6 BULLETS) */}
        <section id="tax-implications" className="py-14 bg-white border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Tax & ITC Review</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">GST Tax, ITC & Payment Overview</h2></div><p className="text-slate-700 text-sm leading-relaxed">GST return filing brings together outward tax liability, eligible input tax credit, cash/credit ledger positions and statutory payment requirements for the period.</p><div className="space-y-3">{[
{ title: 'Output GST Liability', desc: 'GST collected or payable on taxable outward supplies forms part of the period tax liability.' },
{ title: 'Input Tax Credit Review', desc: 'Eligible ITC should be supported by valid documents and considered in line with applicable GST conditions and available portal data.' },
{ title: 'Cash vs Credit Ledger', desc: 'Available electronic credit may offset eligible liability, while the balance must generally be discharged through the cash ledger as applicable.' },
{ title: 'Late Fee & Interest Exposure', desc: 'Late return filing and delayed tax payment can result in applicable late fee and interest.' },
{ title: 'Reconciliation Matters', desc: 'Regular reconciliation between books, sales records, purchase records and GST data can reduce filing errors and mismatches.' },
{ title: 'akshayb2bsolutions Filing Support', desc: 'We help organise the working, review key figures and guide the filing process based on the information and records provided by you.' }
].map((item, idx) => <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200"><IndianRupee className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" /><div className="text-xs sm:text-sm text-slate-700"><strong className="text-slate-900 font-bold block mb-0.5">{item.title}:</strong>{item.desc}</div></div>)}</div></div></section>

        {/* 16. FINANCING OPTIONS (7 BULLETS) */}
        <section id="financing" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Business Impact</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Why Consistent GST Compliance Helps Your Business</h2></div><p className="text-slate-700 text-sm leading-relaxed">Accurate and timely GST records can support cleaner financial documentation, smoother vendor relationships and better readiness when banks, customers or tender authorities ask for tax-compliance evidence.</p><div className="space-y-3">{[
{ title: 'Cleaner Compliance Record', desc: 'Regular filing helps avoid accumulation of pending returns and repeated compliance follow-up.' },
{ title: 'Better Vendor Coordination', desc: 'Accurate invoice reporting supports smoother reconciliation across buyers and suppliers.' },
{ title: 'Improved Credit Readiness', desc: 'Filed GST returns can form part of the financial information requested by lenders when assessing a business.' },
{ title: 'Tender & Marketplace Readiness', desc: 'Many business opportunities may require active GST registration and recent compliance records.' },
{ title: 'Reduced Last-Minute Pressure', desc: 'A monthly filing routine means data is collected and reviewed before deadlines rather than after problems arise.' },
{ title: 'More Time for Business', desc: 'Outsourcing routine GST filing support lets you focus more attention on sales, operations and customers.' }
].map((item, idx) => <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200"><TrendingUp className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" /><div className="text-xs sm:text-sm text-slate-700"><strong className="text-slate-900 font-bold block mb-0.5">{item.title}:</strong>{item.desc}</div></div>)}</div></div></section>

        {/* 17. HOW AKSHAYB2BSOLUTIONS HELPS (5 BULLETS) */}
        <section id="why-akshayb2b" className="py-14 bg-white border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Our Value Proposition</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">How akshayb2bsolutions Helps with GST Returns</h2></div><div className="space-y-3">{[
{ title: 'Simple Monthly Data Collection', desc: 'We tell you exactly what sales, purchase and adjustment data is needed so the process stays easy.' },
{ title: 'Return Working Preparation', desc: 'Our team organises the information into a structured GSTR-1 and GSTR-3B working for the standard package scope.' },
{ title: 'ITC & Tax Liability Review', desc: 'We review key purchase, tax and ITC figures based on the records and portal data made available to us.' },
{ title: 'GST Portal Filing Support', desc: 'We support return submission and share filing acknowledgement details for your records.' },
{ title: 'Monthly Compliance Reminder', desc: 'A repeatable filing process and deadline reminders help keep your GST compliance from becoming a last-minute problem.' }
].map((item, idx) => <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200"><CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" /><div className="text-xs sm:text-sm text-slate-700"><strong className="text-slate-900 font-bold block mb-0.5">{item.title}:</strong>{item.desc}</div></div>)}</div></div></section>

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
              Monthly GST Compliance Made Simple
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              File GST Returns with Confidence
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Make GST compliance easier with a simple ₹500/month filing plan. Share your records digitally, get guided return preparation, and stay on top of monthly or applicable quarterly filing requirements.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => scrollToSection('lead-capture-widget')}
                className="px-6 py-3 rounded-xl bg-[#FF5A00] hover:bg-orange-500 text-[#0B3D91] font-black text-xs sm:text-sm shadow-xl transition-all cursor-pointer"
              >
                Start GST Filing at ₹500/month
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
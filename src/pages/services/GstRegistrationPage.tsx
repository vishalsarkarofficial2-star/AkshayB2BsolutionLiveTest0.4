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

interface GstRegistrationLandingProps {
  onBackToHome: () => void;
  onSelectService: (serviceName: string) => void;
  onOpenBrochure: () => void;
  onOpenAppointment: () => void;
}

// 6 Accordion FAQs — GST Registration India
const FAQ_ITEMS = [
  { q: 'What is GST Registration in India?', a: 'GST Registration is the process of obtaining a Goods and Services Tax Identification Number (GSTIN) for a business through the GST portal. Once registered, eligible taxpayers can collect GST, issue GST-compliant tax invoices, file returns, and claim eligible input tax credit subject to GST law.' },
  { q: 'Who should take GST Registration?', a: 'Businesses may need GST registration when they cross the applicable turnover threshold or fall under compulsory-registration categories. Voluntary registration may also be available to eligible businesses that want a GSTIN.' },
  { q: 'What documents are generally required for GST Registration?', a: 'Common requirements include PAN, Aadhaar/identity details, photograph, business constitution proof, principal place of business proof, bank details where applicable, and authorised signatory documents depending on the entity type.' },
  { q: 'How long does GST Registration take?', a: 'Processing time depends on document accuracy, Aadhaar authentication, risk checks, and whether the GST officer raises a clarification. Our team focuses on complete documentation and quick response to queries.' },
  { q: 'Can I register for GST voluntarily?', a: 'Yes. A person who is not otherwise liable may apply for voluntary GST registration, subject to the provisions of the CGST Act and applicable rules.' },
  { q: 'What happens after GST Registration?', a: 'After registration, the taxpayer should issue compliant invoices where applicable, maintain records, file required GST returns, pay tax within due dates, and keep registration details updated.' }
]

// Related GST & business compliance services
const RELATED_SERVICES = [
  {
    title: 'GST Return Filing',
    desc: 'Stay compliant with timely GST return preparation and filing support for your registered business.',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&auto=format&fit=crop&q=80',
    price: 'Get Quote'
  },
  {
    title: 'GST Modification',
    desc: 'Update business address, trade name, authorised signatory and other permitted GST registration details.',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&auto=format&fit=crop&q=80',
    price: 'Get Quote'
  },
  {
    title: 'GST Cancellation',
    desc: 'Professional assistance for GST cancellation applications and closure-related compliance.',
    img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=80',
    price: 'Get Quote'
  },
  {
    title: 'GST LUT Filing',
    desc: 'LUT filing support for eligible exporters supplying goods or services without payment of IGST.',
    img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&auto=format&fit=crop&q=80',
    price: 'Get Quote'
  },
  {
    title: 'MSME Udyam Registration',
    desc: 'Get Udyam registration support for eligible micro, small and medium enterprises.',
    img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&auto=format&fit=crop&q=80',
    price: 'Get Quote'
  },
  {
    title: 'Trade License',
    desc: 'Business trade licence assistance based on the applicable local municipal requirements.',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=80',
    price: 'Get Quote'
  },
  {
    title: 'Import Export Code (IEC)',
    desc: 'IEC registration assistance for businesses planning to import or export goods and services.',
    img: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&auto=format&fit=crop&q=80',
    price: 'Get Quote'
  },
  {
    title: 'Trademark Registration',
    desc: 'Protect your brand name and logo with trademark application support in India.',
    img: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=600&auto=format&fit=crop&q=80',
    price: 'Get Quote'
  },
  {
    title: 'Company Registration',
    desc: 'Start your business with professional incorporation and compliance support.',
    img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&auto=format&fit=crop&q=80',
    price: 'Get Quote'
  }
]

export const GstRegistrationPage: React.FC<GstRegistrationLandingProps> = ({
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
  const [businessType, setBusinessType] = useState('Proprietorship');
  const [businessActivity, setBusinessActivity] = useState(BUSINESS_ACTIVITIES[0]);
  const [panNumber, setPanNumber] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('GST Registration Package (₹699)');
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
            <span className="text-slate-900 font-bold">GST Registration</span>
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
                  <span>Pan-India GST Registration Desk</span>
                  <span className="w-1 h-1 rounded-full bg-white/60"></span>
                  <span className="text-white">Online Application Support</span>
                </div>

                {/* H1 Heading & Tagline */}
                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight antialiased">
                    GST Registration
                  </h1>
                  <div className="space-y-0.5">
                    <p className="text-xl sm:text-2xl font-black text-orange-300 antialiased">
                      Get GST Registration assistance at just{' '}
                      <span className="underline decoration-[#FF5A00] decoration-2 underline-offset-4 font-black text-white">
                        ₹699/- only!
                      </span>
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-blue-100 antialiased">
                      Professional GST registration assistance package
                    </p>
                  </div>
                </div>

                {/* Definition: 2-3 Line Description */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                  GST Registration helps eligible Indian businesses obtain a GSTIN through the official GST portal. A valid GST registration enables compliant tax invoicing, GST return filing and, subject to applicable conditions, eligible input tax credit—helping your business operate with stronger tax compliance and credibility.
                </p>

                {/* 6 Feature Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Clock className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>100% Online Support</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Handshake className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>GSTIN Application Assistance</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <FileSignature className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Document & KYC Review</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Zap className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Fast &amp; Hassle-Free</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Gavel className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>GST Portal Filing Support</span>
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
                    <span>Limited-Time ₹699 Service</span>
                  </div>

                  {formSubmitted ? (
                    <div className="text-center py-8 space-y-4 animate-in fade-in">
                      <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Application Received!</h3>
                      <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
                        Thank you <span className="font-bold">{applicantName}</span>. Our GST registration specialist has been assigned to your application. We will call you within 15 minutes at <span className="font-bold">{applicantMobile}</span>.
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
                              ₹699/- only
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-[11px] font-bold text-slate-800 block leading-tight">
                            GST Portal Fee
                          </span>
                          <span className="text-[10px] font-medium text-slate-500 block leading-tight">
                            No hidden professional charges
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
                                Select State / UT of GST Registration *
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
                                Select the State or UT from which your business makes or intends to make taxable supplies. GST registration is generally State/UT specific.
                              </span>
                            </div>

                            <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100 text-xs text-slate-600 space-y-1">
                              <div className="flex items-center gap-1.5 font-bold text-[#0B3D91]">
                                <ShieldCheck className="w-4 h-4 text-[#FF5A00]" />
                                <span>Why register with akshayb2bsolutions?</span>
                              </div>
                              <p className="text-[11px]">
                                Get document screening, GST application preparation, portal filing assistance and clarification-response support from one dedicated team.
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
                                Applicant / Authorised Signatory Name *
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
                                Applicant / Business PAN Number
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
                                Select GST Registration Package *
                              </label>
                              <select
                                value={selectedPackage}
                                onChange={(e) => setSelectedPackage(e.target.value)}
                                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                              >
                                <option value="GST Registration Package (₹699)">GST Registration Assistance — ₹699</option>
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
                                  <span>Submit &amp; Start GST Registration</span>
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
                { id: 'legal-status', label: 'GSTIN & Compliance' },
                { id: 'post-compliance', label: 'Post-Registration' },
                { id: 'comparison', label: 'Business Impact' },
                { id: 'tax-implications', label: 'GST & ITC' },
                { id: 'financing', label: 'Business Growth' },
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
                GST Registration Package
              </h2>
              <p className="text-sm text-slate-500 mt-2 mx-auto max-w-2xl text-center">
                A simple, conversion-focused package for businesses that want expert help preparing and submitting a GST registration application without unnecessary complexity.
              </p>
            </div>

            <div className="max-w-[520px] mx-auto">
              <div className="bg-white rounded-2xl border-t-4 border-t-[#FF6B00] border-l border-r border-b border-slate-200 p-6 sm:p-8 shadow-xl flex flex-col justify-between">
                <div>
                  {/* Badges */}
                  <div className="flex items-center justify-start flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 rounded bg-orange-100 text-orange-900 text-[10px] font-black uppercase tracking-wide">
                      START GST COMPLIANCE TODAY
                    </span>
                    <span className="px-3 py-1 rounded bg-yellow-100 text-yellow-900 text-[10px] font-black uppercase tracking-wide">
                      SERVICE FEE ONLY ₹699
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0D47A1]">GST Registration Starter Package</h3>
                  <p className="text-sm text-slate-500 mb-6">
                    Ideal for proprietors, freelancers, startups and businesses that want reliable GST registration assistance with document checks and filing support.
                  </p>

                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <div className="flex items-baseline gap-3">
                      <span className="text-lg text-slate-400 line-through">₹1,499</span>
                      <span className="text-4xl font-extrabold text-[#0D47A1]">₹699</span>
                    </div>
                    <span className="text-xs text-slate-500 font-medium block mt-1">
                      Professional GST registration assistance package
                    </span>
                  </div>

                  {/* Checklist */}
                  <div className="space-y-3.5 mb-8">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">PACKAGE INCLUSIONS:</p>
                    {[
                      'GST Registration Eligibility & Requirement Check',
                      'PAN, Aadhaar & KYC Document Review',
                      'GST REG-01 Application Preparation & Filing Support',
                      'Business Details & HSN/SAC Guidance',
                      'Clarification / Query Response Assistance',
                      'Dedicated GST Registration Specialist Support'
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
                    setSelectedPackage('GST Registration Package (₹699)');
                    scrollToSection('lead-capture-widget');
                  }}
                  className="w-full py-4 rounded-xl bg-[#0D47A1] hover:bg-blue-900 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer text-center"
                >
                  Get GST Registration Assistance — ₹699
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* 5. OVERVIEW SECTION */}
        <section id="overview" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">GST Overview</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">What is GST Registration in India?</h2>
            </div>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">GST Registration is the online process through which an eligible business receives a Goods and Services Tax Identification Number (GSTIN). Registration links the business to the GST compliance system for tax invoices, returns, tax payment and eligible input tax credit.</p>
            <div className="space-y-4 pt-2">
              {[
                { title: 'Built for Indian Businesses', desc: 'Suitable for eligible proprietorships, partnerships, LLPs, companies, freelancers, traders, service providers and other taxable persons.' },
                { title: 'GSTIN for Business Compliance', desc: 'A GSTIN helps your business issue GST-compliant invoices and fulfil applicable GST obligations.' },
                { title: 'Input Tax Credit Opportunity', desc: 'Registered taxpayers may claim eligible input tax credit subject to GST law, invoice conditions and return compliance.' },
                { title: 'State/UT-Specific Registration', desc: 'GST registration is linked to the State or Union Territory from which taxable supplies are made or intended to be made.' },
                { title: 'Online Registration Process', desc: 'The application is filed online through the GST common portal with PAN, contact details, business information and prescribed supporting documents.' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <Receipt className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-slate-700"><strong className="text-slate-900 font-bold block mb-0.5">{item.title}:</strong>{item.desc}</div>
                </div>
              ))}
            </div>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-2">Our team helps you prepare the application, review documents, reduce avoidable errors and respond to registration queries so you can move toward GST compliance with confidence.</p>
          </div>
        </section>
        {/* 6. REGISTRATION SECTION */}
        <section id="registration" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">GST Framework</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">How GST Registration Works in India</h2></div>
            <p className="text-slate-700 text-sm leading-relaxed">The applicant submits registration details online in the prescribed GST registration form with PAN, mobile number, email address, State/UT and supporting business documents. Aadhaar authentication or additional verification may apply depending on the case.</p>
            <p className="text-slate-700 text-sm leading-relaxed">After successful approval, the GST registration certificate containing the GSTIN can be downloaded from the GST portal. The registered taxpayer then becomes responsible for applicable invoicing, returns, tax payment and record-keeping obligations.</p>
            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-2"><h4 className="text-xs font-bold uppercase tracking-wider text-[#0B3D91] flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-[#FF5A00]" /><span>How akshayb2bsolutions Simplifies Your GST Registration:</span></h4><p className="text-xs text-slate-600 leading-relaxed">We verify documents, prepare application details, guide you through portal requirements and help respond to clarification notices so your filing is complete and professionally handled.</p></div>
          </div>
        </section>
        {/* 7. ADVANTAGES */}
        <section id="advantages" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Business Benefits</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Key Benefits of GST Registration</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'GST-Compliant Tax Invoicing', desc: 'Issue tax invoices with GSTIN and applicable GST details when required.' },
                { title: 'Eligible Input Tax Credit', desc: 'Claim eligible GST credit on business purchases subject to statutory conditions and compliance.' },
                { title: 'Stronger B2B Credibility', desc: 'A valid GSTIN can improve confidence when dealing with GST-registered clients, vendors and marketplaces.' },
                { title: 'Inter-State & Online Business Readiness', desc: 'GST registration supports applicable inter-State and e-commerce compliance requirements, subject to current law and exemptions.' },
                { title: 'Formal Tax Compliance Identity', desc: 'Your business becomes identifiable within the GST system for applicable returns, tax payments and notices.' },
                { title: 'Growth Without Last-Minute Registration Stress', desc: 'Registering when required helps avoid business disruption as turnover, client requirements or supply patterns change.' }
              ].map((item, idx) => (<div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1"><div className="flex items-center gap-2 text-slate-900 font-bold text-sm"><span className="w-6 h-6 rounded-full bg-[#0B3D91] text-[#FF5A00] text-xs flex items-center justify-center font-mono">{idx + 1}</span><h4>{item.title}</h4></div><p className="text-xs text-slate-600 leading-relaxed pl-8">{item.desc}</p></div>))}
            </div>
            <p className="text-xs text-slate-500 text-center pt-2">Benefits depend on your business type, supply pattern and compliance status. Our team helps identify the suitable registration path before filing.</p>
          </div>
        </section>
        {/* 8. CHECKLIST */}
        <section id="checklist" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Pre-Application Readiness</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Checklist Before Applying for GST Registration</h2></div><div className="space-y-3">{[
          { title: 'Correct PAN & Legal Name', desc: 'Keep PAN and legal-name details accurate and consistent with income-tax records.' },
          { title: 'Active Mobile & Email', desc: 'Use accessible contact details for OTP verification and GST portal communication.' },
          { title: 'Business Constitution Details', desc: 'Identify whether the applicant is a proprietorship, partnership, LLP, company or another entity type.' },
          { title: 'Principal Place of Business Proof', desc: 'Prepare acceptable ownership, rent/lease, consent or utility-related documents as applicable.' },
          { title: 'Authorised Signatory Details', desc: 'Keep identity, photograph and authorisation documents ready where an authorised signatory is required.' },
          { title: 'Business Activity & HSN/SAC', desc: 'Identify your main goods or services so the application reflects the correct nature of business.' },
          { title: 'Bank Details When Required', desc: 'Keep bank-account information and supporting proof ready where applicable to the registration process.' },
          { title: 'Document Quality Check', desc: 'Clear, readable and consistent documents reduce the chance of avoidable clarification notices.' }
        ].map((item, idx)=>(<div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200"><FileCheck className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5"/><div className="text-xs sm:text-sm text-slate-700"><strong className="text-slate-900 font-bold block mb-0.5">{item.title}:</strong>{item.desc}</div></div>))}</div></div></section>
        {/* 9. ELIGIBILITY CRITERIA */}
        <section id="eligibility" className="py-14 bg-white border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Registration Applicability</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Who May Need GST Registration?</h2></div><p className="text-slate-700 text-sm leading-relaxed">GST registration liability depends on aggregate turnover, the nature and location of supplies and compulsory-registration provisions. Some businesses may also choose voluntary registration even when they are not otherwise liable.</p><div className="space-y-3">{[
          { title: 'Businesses Crossing Applicable Turnover Limits', desc: 'Registration may become mandatory when aggregate turnover crosses the applicable threshold, subject to current notifications and category-specific rules.' },
          { title: 'Compulsory Registration Categories', desc: 'Certain persons can be required to register irrespective of the normal turnover threshold under the CGST Act, subject to exemptions and notifications.' },
          { title: 'Voluntary Registration', desc: 'Eligible businesses below the mandatory threshold may apply voluntarily and then follow the compliance obligations of a registered taxpayer.' },
          { title: 'Multiple States / UTs', desc: 'A business may need separate GST registrations for States or UTs from which it is liable to make taxable supplies.' },
          { title: 'Taxable Goods or Services', desc: 'Applicability depends on whether supplies are taxable, exempt, non-taxable or covered by specific GST provisions.' },
          { title: 'Business-Specific Review Recommended', desc: 'Because exemptions and compulsory-registration rules can change, we review the exact business model before filing.' }
        ].map((item, idx)=>(<div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200"><ShieldCheck className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5"/><div className="text-xs sm:text-sm text-slate-700"><strong className="text-slate-900 font-bold block mb-0.5">{item.title}:</strong>{item.desc}</div></div>))}</div></div></section>
        {/* 10. REQUIRED DOCUMENTS */}
        <section id="documents" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Document Checklist</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Documents Required for GST Registration</h2></div><p className="text-slate-700 text-sm leading-relaxed">The exact document set depends on the business constitution and premises status. Common documents include identity, business-constitution, principal-place and authorised-signatory proofs.</p><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{[
          { title: 'PAN & Identity Details', desc: 'PAN and identity details of the applicant / relevant promoters, partners, directors or authorised persons as applicable.' },
          { title: 'Photograph & Contact Details', desc: 'Recent photograph plus active mobile number and email for registration authentication and communication.' },
          { title: 'Business Constitution Proof', desc: 'Partnership deed, incorporation certificate, registration certificate or other constitution document where applicable.' },
          { title: 'Principal Place of Business Proof', desc: 'Property tax receipt, electricity bill, rent/lease agreement, consent letter or other accepted proof depending on occupancy.' },
          { title: 'Authorised Signatory Proof', desc: 'Letter of authorisation, board resolution or other prescribed proof where the application is signed by an authorised person.' },
          { title: 'Additional Supporting Documents', desc: 'Bank details, additional-place proof or clarification documents may be required depending on the application and portal workflow.' }
        ].map((item, idx)=>(<div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 space-y-1"><div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm"><FileText className="w-4 h-4 text-[#0B3D91]"/><h4>{item.title}</h4></div><p className="text-xs text-slate-600 leading-relaxed pl-6">{item.desc}</p></div>))}</div></div></section>
        {/* 11. STEPS */}
        <section id="steps" className="py-14 bg-white border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Registration Sequence</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Step-by-Step GST Registration Process</h2></div><div className="space-y-4">{[
          { step:'Step 1', title:'Eligibility & Business Review', desc:'We review your business constitution, State/UT, turnover and supply pattern to identify the suitable registration route.' },
          { step:'Step 2', title:'Collect & Verify Documents', desc:'PAN, identity, address, constitution, premises and authorised-signatory documents are checked for consistency.' },
          { step:'Step 3', title:'Prepare GST Application Details', desc:'We organise the legal name, trade name, business activity, goods/services and place-of-business information required for filing.' },
          { step:'Step 4', title:'Submit GST Registration Application', desc:'The registration application is filed online on the GST portal with the required information and documents.' },
          { step:'Step 5', title:'Authentication / Clarification Support', desc:'We guide you through applicable authentication steps and help prepare a response if the department seeks clarification.' },
          { step:'Step 6', title:'GSTIN & Certificate Guidance', desc:'After approval, download the GST registration certificate and begin applicable invoice, return and record-keeping compliance.' }
        ].map((item,idx)=>(<div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200"><div className="w-10 h-10 rounded-xl bg-[#0B3D91] text-[#FF5A00] font-black text-xs flex items-center justify-center flex-shrink-0 shadow-xs">{item.step}</div><div><h4 className="text-sm font-bold text-slate-900 mb-0.5">{item.title}</h4><p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p></div></div>))}</div></div></section>
        {/* 12. LEGAL STATUS */}
        <section id="legal-status" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">GST Compliance Position</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">What GST Registration Means for Your Business</h2></div><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{[
          {title:'1. GSTIN Identity',desc:'A successful registration provides a GSTIN linked to the taxpayer, PAN and registered State/UT.'},
          {title:'2. Tax Invoice Responsibility',desc:'Registered taxpayers must follow applicable GST invoice rules for taxable supplies.'},
          {title:'3. Return & Payment Compliance',desc:'Applicable GST returns and tax liabilities must be handled within prescribed timelines.'},
          {title:'4. Record Maintenance',desc:'Books, invoices and supporting GST records should be maintained as required under GST law.'}
        ].map((item,idx)=>(<div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5"><h4 className="text-sm font-bold text-[#0B3D91]">{item.title}</h4><p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p></div>))}</div><div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-slate-700 space-y-1"><h4 className="font-bold text-[#0B3D91]">5. akshayb2bsolutions&apos;s Role:</h4><p>We help you understand the registration scope, prepare the application and transition smoothly into post-registration GST compliance.</p></div></div></section>
        {/* 13. POST-REGISTRATION COMPLIANCE */}
        <section id="post-compliance" className="py-14 bg-white border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">After GSTIN</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Post-Registration GST Compliance Checklist</h2></div><p className="text-slate-700 text-sm leading-relaxed">Obtaining a GSTIN is the beginning of GST compliance. Registered taxpayers should continue with applicable invoicing, return filing, payment and record-maintenance obligations.</p><div className="space-y-3">{[
          {title:'Display GSTIN & Use Correct Invoice Format',desc:'Use the registered legal/trade details and GSTIN on applicable invoices and business documents.'},
          {title:'File Applicable GST Returns',desc:'File the returns applicable to your taxpayer type and filing frequency within prescribed due dates.'},
          {title:'Pay GST Liability on Time',desc:'Deposit net GST liability after eligible credits and other adjustments within applicable timelines.'},
          {title:'Reconcile Input Tax Credit',desc:'Review purchase data and claim only eligible input tax credit subject to GST conditions.'},
          {title:'Update Registration Details',desc:'Apply for amendments when core or non-core registration particulars change, as applicable.'},
          {title:'Maintain GST Records',desc:'Keep invoices, purchase records, tax-payment evidence and supporting documents for the required period.'},
          {title:'Ongoing Compliance Support',desc:'Our team can assist with GST returns, amendments, LUT, cancellation and other post-registration services.'}
        ].map((item,idx)=>(<div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200"><CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5"/><div className="text-xs sm:text-sm text-slate-700"><strong className="text-slate-900 font-bold block mb-0.5">{item.title}:</strong>{item.desc}</div></div>))}</div></div></section>

        {/* 14. COMPARISON TABLE (8 ROWS) */}
        <section id="comparison" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Structure Comparison
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                GST Registration: When It Helps Your Business
              </h2>
            </div>

            <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left text-xs border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-[#0B3D91] text-white">
                    <th className="p-3.5 font-bold border-r border-blue-800">Parameter</th>
                    <th className="p-3.5 font-bold bg-orange-500 text-[#0B3D91] border-r border-orange-600">
                      GST Registered Business
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
                      CGST Act, 2017 + applicable SGST/UTGST law
                    </td>
                    <td className="p-3.5 border-r border-slate-200">No Single Central Statute</td>
                    <td className="p-3.5 border-r border-slate-200">LLP Act, 2008</td>
                    <td className="p-3.5">Companies Act, 2013</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">2. Number of Owners</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold text-orange-800 border-r border-slate-200">
                      Any eligible business constitution
                    </td>
                    <td className="p-3.5 border-r border-slate-200">1 Sole Owner</td>
                    <td className="p-3.5 border-r border-slate-200">2 or More Designated Partners</td>
                    <td className="p-3.5">2 to 200 Shareholders</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">3. Liability Exposure</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold text-rose-700 border-r border-slate-200">
                      Liability as per underlying business constitution
                    </td>
                    <td className="p-3.5 border-r border-slate-200">Unlimited Personal Liability</td>
                    <td className="p-3.5 border-r border-slate-200">Limited to Contribution</td>
                    <td className="p-3.5 text-orange-800 font-semibold">Limited to Share Capital</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">4. Taxation</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold border-r border-slate-200">
                      GST on taxable supplies as applicable
                    </td>
                    <td className="p-3.5 border-r border-slate-200">Personal Slab Rates</td>
                    <td className="p-3.5 border-r border-slate-200">Flat 30% on LLP</td>
                    <td className="p-3.5 text-orange-800 font-semibold">22%-25% Corporate Rate</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">5. Decision-Making</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold border-r border-slate-200">
                      As per underlying business structure
                    </td>
                    <td className="p-3.5 border-r border-slate-200">100% Sole Owner Autonomy</td>
                    <td className="p-3.5 border-r border-slate-200">As per LLP Agreement</td>
                    <td className="p-3.5">Board of Directors &amp; Shareholders</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">6. Compliance Burden</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold text-orange-800 border-r border-slate-200">
                      GST returns, tax payment & records
                    </td>
                    <td className="p-3.5 border-r border-slate-200">Lowest (Tax Filings Only)</td>
                    <td className="p-3.5 border-r border-slate-200">Medium (Form 8 &amp; 11 MCA)</td>
                    <td className="p-3.5">High (AOC-4, MGT-7, Audits)</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">7. Credibility &amp; Trust</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold border-r border-slate-200">
                      GSTIN strengthens tax-compliance visibility
                    </td>
                    <td className="p-3.5 border-r border-slate-200">Moderate (Local Trade)</td>
                    <td className="p-3.5 border-r border-slate-200">High</td>
                    <td className="p-3.5 text-orange-800 font-semibold">Highest (Global Standards)</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">8. Ideal For</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold text-slate-900 border-r border-slate-200">
                      Taxable businesses requiring or choosing GST registration
                    </td>
                    <td className="p-3.5 border-r border-slate-200">Solo Founders, Retailers</td>
                    <td className="p-3.5 border-r border-slate-200">Professional & Service Businesses</td>
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
                GST Tax & Input Credit Basics
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              After registration, GST is charged on taxable supplies at the applicable rate unless an exemption, composition provision or other specific rule applies. Eligible input tax credit can reduce net tax cost when statutory conditions are satisfied.
            </p>

            <div className="space-y-3">
              {[
                {
                  title: 'GST Rate Depends on Supply Classification',
                  desc: 'The GST rate depends on the goods or services supplied, classification, place of supply and applicable notifications.'
                },
                {
                  title: 'Input Tax Credit (ITC)',
                  desc: 'Eligible registered taxpayers may claim ITC on qualifying inward supplies subject to invoice, receipt, payment and return-related conditions.'
                },
                {
                  title: 'Output Tax & Net Liability',
                  desc: 'Output GST on taxable supplies is adjusted against eligible input tax credit and other permitted adjustments to determine the net tax payable.'
                },
                {
                  title: 'Registration Threshold & Compulsory Cases',
                  desc: 'Registration liability depends on applicable turnover thresholds, compulsory-registration provisions, exemptions and current notifications.'
                },
                {
                  title: 'Return & Record Compliance',
                  desc: 'Registered taxpayers should maintain prescribed records and file the GST returns applicable to their category and filing scheme.'
                },
                {
                  title: 'akshayb2bsolutions GST Compliance Support',
                  desc: 'Our compliance team can assist with registration, returns, amendments, LUT, cancellation and GST documentation support.'
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
                How GST Registration Supports Business Growth
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              GST registration is primarily a tax-compliance requirement, but a valid GSTIN can also support day-to-day business operations with registered clients, vendors, e-commerce channels and formal documentation.
            </p>

            <div className="space-y-3">
              {[
                {
                  title: 'B2B Client Readiness',
                  desc: 'Many GST-registered businesses prefer vendors who can issue compliant tax invoices and support eligible input tax credit.'
                },
                {
                  title: 'Formal Business Documentation',
                  desc: 'A GSTIN and GST records can form part of the documentation businesses use in banking, vendor onboarding and commercial transactions.'
                },
                {
                  title: 'E-Commerce & Marketplace Compliance',
                  desc: 'Where GST registration is required for your marketplace or supply model, having the registration ready helps avoid onboarding delays.'
                },
                {
                  title: 'Inter-State Business Readiness',
                  desc: 'GST registration supports compliant expansion where your business becomes liable for registration due to inter-State or other specified supplies.'
                },
                {
                  title: 'Vendor & Corporate Onboarding',
                  desc: 'A valid GSTIN can simplify tax and vendor-master verification with larger customers and suppliers.'
                },
                {
                  title: 'Better Compliance Visibility',
                  desc: 'Consistent GST invoicing and return filing can strengthen the compliance trail of an operating business.'
                },
                {
                  title: 'akshayb2bsolutions Growth Compliance Support',
                  desc: 'We help businesses move from GST registration into returns, amendments and other compliance services as they grow.'
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
                  title: 'GST Registration Applicability Check',
                  desc: 'We analyze your business model and recommend the precise deed clauses and registration combination tailored to your members / trustees\' needs.'
                },
                {
                  title: 'Document & Data Verification',
                  desc: 'We cross-check PAN, business details, premises proof and authorised-signatory documents to reduce avoidable errors.'
                },
                {
                  title: 'GST Portal Filing & Query Support',
                  desc: 'We assist with GST portal filing and help prepare responses when clarification is requested during registration.'
                },
                {
                  title: 'Business Activity & HSN/SAC Guidance',
                  desc: 'We help organise your main goods/services and business activity details for a cleaner registration application.'
                },
                {
                  title: 'Post-Registration Compliance Guidance',
                  desc: 'After GSTIN approval, we guide you on invoices, returns, amendments and ongoing GST compliance options.'
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
                Why Businesses Choose akshayb2bsolutions for GST Registration
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
                  desc: 'Clear ₹699 professional service fee for the GST registration assistance package, with no hidden package upgrades.',
                  icon: Tag
                },
                {
                  title: 'Trusted by Thousands',
                  desc: 'Pan-India online assistance designed for proprietors, freelancers, startups and growing businesses.',
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
              Start GST Compliance Today
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              Get GST Registration Assistance at ₹699
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Make your GST registration process simpler with document review, application preparation and filing support—all in one affordable ₹699 service package.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => scrollToSection('lead-capture-widget')}
                className="px-6 py-3 rounded-xl bg-[#FF5A00] hover:bg-orange-500 text-[#0B3D91] font-black text-xs sm:text-sm shadow-xl transition-all cursor-pointer"
              >
                Start GST Registration — ₹699
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
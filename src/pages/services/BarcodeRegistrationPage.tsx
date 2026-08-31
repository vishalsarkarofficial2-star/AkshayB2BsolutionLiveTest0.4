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
  Barcode,
  ScanLine,
  PackageSearch
} from 'lucide-react';
import {
  INDIAN_STATES_AND_UTS,
  BUSINESS_TYPES,
  BUSINESS_ACTIVITIES,
  COMPANY_DETAILS
} from '../../data/servicesData';
import { HeaderMegaMenu } from '../../components/HeaderMegaMenu';
import { TopUtilityBar } from '../../components/TopUtilityBar';

interface BarcodeRegistrationPageProps {
  onBackToHome: () => void;
  onSelectService: (serviceName: string) => void;
  onOpenBrochure: () => void;
  onOpenAppointment: () => void;
}

// 6 Accordion FAQs — Barcode / GS1 India focused
const FAQ_ITEMS = [
  { q: 'What is Barcode Registration in India?', a: 'Barcode registration generally refers to obtaining GS1 identification numbers, such as a GS1 Company Prefix or GTINs, so products can carry globally unique barcodes for retail, ecommerce, inventory, logistics, and supply-chain use.' },
  { q: 'Who should apply for barcode numbers?', a: 'Manufacturers, brand owners, importers, exporters, ecommerce sellers, distributors, and businesses that need unique product identification for packaged goods or retail listings can apply based on their requirements.' },
  { q: 'Which documents are generally required?', a: 'Typical requirements may include PAN, GST or other business-registration proof, organization details, authorized-person details, product information, and supporting documents requested by the issuing authority. Exact requirements can vary by applicant type.' },
  { q: 'How many barcodes should I apply for?', a: 'The quantity depends on how many distinct products and variants you sell. Different sizes, colours, packs, or configurations generally require separate GTINs when they are treated as distinct trade items.' },
  { q: 'Can GS1 barcodes be used on Amazon, Flipkart and retail stores?', a: 'GS1-issued GTINs are widely used for retail and ecommerce product identification. Marketplace acceptance is also subject to each platform’s current listing rules and category requirements.' },
  { q: 'Does barcode registration need renewal?', a: 'GS1 licensing and subscription terms may include validity and renewal requirements depending on the plan or identification capacity selected. We help you understand the applicable process before filing.' }
]

// Related services cross-linking items — barcode and product compliance services
const RELATED_SERVICES = [
  {
    title: 'Trademark Registration',
    desc: 'Protect your product or brand name before expanding across marketplaces and retail channels.',
    img: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&auto=format&fit=crop&q=80',
    price: 'Contact for Price'
  },
  {
    title: 'GST Registration',
    desc: 'GST registration support for eligible businesses selling goods and services across India.',
    img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=80',
    price: 'Contact for Price'
  },
  {
    title: 'MSME Udyam Registration',
    desc: 'Get Udyam recognition for eligible micro, small, and medium enterprises in India.',
    img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&auto=format&fit=crop&q=80',
    price: 'Contact for Price'
  },
  {
    title: 'Import Export Code (IEC)',
    desc: 'IEC application support for businesses planning to import or export products from India.',
    img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&auto=format&fit=crop&q=80',
    price: 'Contact for Price'
  },
  {
    title: 'FSSAI Registration',
    desc: 'Food business registration and licensing support for eligible manufacturers, sellers, and brands.',
    img: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?w=600&auto=format&fit=crop&q=80',
    price: 'Contact for Price'
  },
  {
    title: 'BIS Registration',
    desc: 'BIS compliance assistance for products covered under applicable Indian quality requirements.',
    img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&auto=format&fit=crop&q=80',
    price: 'Contact for Price'
  },
  {
    title: 'GeM Registration',
    desc: 'Seller onboarding and documentation support for eligible businesses on Government e-Marketplace.',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80',
    price: 'Contact for Price'
  },
  {
    title: 'Startup India Registration',
    desc: 'DPIIT Startup recognition assistance for eligible innovative and scalable businesses.',
    img: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&auto=format&fit=crop&q=80',
    price: 'Contact for Price'
  },
  {
    title: 'Legal Metrology Registration',
    desc: 'Support for applicable packaged-commodity and measurement compliance requirements in India.',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&auto=format&fit=crop&q=80',
    price: 'Contact for Price'
  }
]

export const BarcodeRegistrationPage: React.FC<BarcodeRegistrationPageProps> = ({
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
  const [businessType, setBusinessType] = useState('Manufacturer / Brand Owner');
  const [businessActivity, setBusinessActivity] = useState(BUSINESS_ACTIVITIES[0]);
  const [panNumber, setPanNumber] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('Barcode Registration — Contact for Price');
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
            <span className="text-slate-900 font-bold">Barcode Registration</span>
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
                    Barcode Registration
                  </h1>
                  <div className="space-y-0.5">
                    <p className="text-xl sm:text-2xl font-black text-orange-300 antialiased">
                      Get your GS1 barcode registration with{' '}
                      <span className="underline decoration-[#FF5A00] decoration-2 underline-offset-4 font-black text-white">
                        expert assistance
                      </span>
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-blue-100 antialiased">
                      Pricing depends on barcode capacity and applicable authority charges
                    </p>
                  </div>
                </div>

                {/* Definition: 2-3 Line Description */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                  Barcode Registration in India helps businesses obtain globally unique product identification numbers, commonly through GS1 standards, for packaged products, retail billing, ecommerce listings, warehousing, logistics, and supply-chain operations.
                </p>

                {/* 6 Feature Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Clock className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Application Timeline Varies</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Barcode className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Multiple Product GTINs</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <FileCheck className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>GS1 Application Support</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Zap className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Fast &amp; Hassle-Free</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <PackageSearch className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Product Data Guidance</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <ScanLine className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Dedicated Barcode Advisor</span>
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
                      Registrations Assisted
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
                    <span>Barcode Support Desk</span>
                  </div>

                  {formSubmitted ? (
                    <div className="text-center py-8 space-y-4 animate-in fade-in">
                      <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Application Received!</h3>
                      <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
                        Thank you <span className="font-bold">{applicantName}</span>. Our Noida-based barcode specialist has been assigned to your application. We will call you within 15 minutes at <span className="font-bold">{applicantMobile}</span>.
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

                      {/* Default Price Consumer-facing digital informationlight Box */}
                      <div className="bg-gradient-to-r from-orange-50 to-orange-50 border border-orange-300 rounded-xl p-3 mb-4 flex items-center justify-between shadow-xs">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-[#0B3D91] text-white flex items-center justify-center font-black text-sm shadow-xs flex-shrink-0">
                            ₹
                          </div>
                          <div>
                            <span className="text-[10px] font-black uppercase tracking-wider text-orange-900 block leading-tight">
                              Service Pricing
                            </span>
                            <span className="text-base font-black text-[#0B3D91] leading-none">
                              Contact for Price
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-[11px] font-bold text-slate-800 block leading-tight">
                            Authority / Subscription Fee
                          </span>
                          <span className="text-[10px] font-medium text-slate-500 block leading-tight">
                            (as applicable to your requirement)
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
                                Select Business State *
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
                                Select the Indian state or union territory where your business is registered or primarily operates. This helps us review the application details and supporting documents.
                              </span>
                            </div>

                            <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100 text-xs text-slate-600 space-y-1">
                              <div className="flex items-center gap-1.5 font-bold text-[#0B3D91]">
                                <ShieldCheck className="w-4 h-4 text-[#FF5A00]" />
                                <span>Why register with akshayb2bsolutions?</span>
                              </div>
                              <p className="text-[11px]">
                                Get assistance with application review, business-document verification, barcode capacity selection, product identification guidance, and filing support with minimal paperwork.
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
                                  Applicant / Business Type *
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
                                  Primary Business Activity *
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
                                Authorized Applicant Full Name *
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
                                Authorized Applicant PAN Number (Optional for quote)
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
                                Select Barcode Registration Requirement *
                              </label>
                              <select
                                value={selectedPackage}
                                onChange={(e) => setSelectedPackage(e.target.value)}
                                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                              >
                                <option value="Barcode Registration Package (Contact for Price)">Barcode Registration Package — Contact for Price Authority / Subscription Fees</option>
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
                Choose Your Barcode Registration Package
              </h2>
              <p className="text-sm text-slate-500 mt-2 mx-auto max-w-2xl text-center">
                Our barcode assistance package includes requirement assessment, document review, GS1/GTIN application guidance, product-identification support, and dedicated application assistance. Final pricing is shared after reviewing the number of barcodes and applicant requirements.
              </p>
            </div>

            <div className="max-w-[520px] mx-auto">
              <div className="bg-white rounded-2xl border-t-4 border-t-[#FF6B00] border-l border-r border-b border-slate-200 p-6 sm:p-8 shadow-xl flex flex-col justify-between">
                <div>
                  {/* Badges */}
                  <div className="flex items-center justify-start flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 rounded bg-orange-100 text-orange-900 text-[10px] font-black uppercase tracking-wide">
                      TAILORED TO YOUR REQUIREMENT
                    </span>
                    <span className="px-3 py-1 rounded bg-yellow-100 text-yellow-900 text-[10px] font-black uppercase tracking-wide">
                      CONTACT FOR EXACT QUOTE
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0D47A1]">Barcode Registration Assistance</h3>
                  <p className="text-sm text-slate-500 mb-6">
                    Suitable for brand owners, manufacturers, sellers, importers, exporters, and businesses needing unique product barcodes for retail or ecommerce.
                  </p>

                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl sm:text-4xl font-extrabold text-[#0D47A1]">Contact for Price</span>
                    </div>
                    <span className="text-xs text-slate-500 font-medium block mt-1">
                      Pricing depends on barcode capacity and applicable authority charges
                    </span>
                  </div>

                  {/* Checklist */}
                  <div className="space-y-3.5 mb-8">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">PACKAGE INCLUSIONS:</p>
                    {[
                      'Barcode Requirement & Capacity Assessment',
                      'Business Document Review',
                      'Product Data Guidance Support',
                      'Product & Variant Identification Guidance',
                      'Barcode Usage & Packaging Guidance',
                      'Dedicated Barcode Registration Specialist'
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
                    setSelectedPackage('Barcode Registration — Contact for Price');
                    scrollToSection('lead-capture-widget');
                  }}
                  className="w-full py-4 rounded-xl bg-[#0D47A1] hover:bg-blue-900 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer text-center"
                >
                  Get Started with Barcode Registration Assistance
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
                What is Barcode Registration in India?
              </h2>
            </div>

            {/* Definition paragraph */}
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Barcode registration enables a business to assign standardized, globally unique identification numbers to products and trade items. These identifiers can be encoded into barcode symbols and used across retail, ecommerce, inventory, logistics, and supply-chain systems.
            </p>

            {/* 5 Bullets with bold lead-ins */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Who Typically Needs It:</strong>
                  Ideal for manufacturers, private-label brands, importers, exporters, ecommerce sellers, distributors, and packaged-product businesses that need standardized product identification.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Product-Level Identification:</strong>
                  Different products, pack sizes, colours, quantities, or variants may require separate GTINs so each trade item can be uniquely identified in commercial systems.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Retail & Ecommerce Compatibility:</strong>
                  GS1-based identifiers are widely used throughout retail and supply chains. Marketplace listing acceptance remains subject to the current rules of each ecommerce platform and category.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Standardized Supply-Chain Data:</strong>
                  Standardized barcode identifiers help trading partners, warehouses, POS systems, and marketplaces identify the same product consistently across different systems.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Scalable for Growing Catalogues:</strong>
                  Businesses can select barcode capacity based on catalogue size and future product expansion, helping organize product identification as the brand grows.
                </div>
              </div>
            </div>

            {/* Closing Summary */}
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-2">
              In summary, barcode registration creates a standardized product-identification foundation for retail and ecommerce growth. Our team supports requirement assessment, documentation, application guidance, product mapping, and post-registration usage assistance.
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
                How Barcode Registration Works in India
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              Businesses generally apply for GS1 identification capacity based on the number of products or trade items they need to identify. Application details, supporting business documents, and applicable subscription or licensing requirements are reviewed before identifiers are allotted.
            </p>

            <p className="text-slate-700 text-sm leading-relaxed">
              After approval and allotment, the business can assign GTINs to products and create barcode artwork according to the required symbology and packaging standards. These numbers can then be used in compatible retail, ecommerce, warehouse, and distribution workflows.
            </p>

            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B3D91] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#FF5A00]" />
                <span>How akshayb2bsolutions Streamlines Your Registration:</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our compliance desk helps review your business documents, estimate barcode capacity, organize application data, guide filing, and assist with product-level GTIN mapping after allotment.
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
                Key Advantages of Barcode Registration
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Globally Standardized Product Identification',
                  desc: 'GS1-standard product identifiers help create a consistent identification system that can be recognized across many retail and supply-chain environments.'
                },
                {
                  title: 'Better Retail & Ecommerce Readiness',
                  desc: 'Barcodes make it easier to prepare products for organized retail, marketplace listings, inventory systems, and distributor workflows where GTIN-based identification is expected.'
                },
                {
                  title: 'Efficient Inventory & Billing',
                  desc: 'Scannable product codes support faster stock movement, billing, warehousing, and catalogue management when integrated with compatible systems.'
                },
                {
                  title: 'Improved Product Data Accuracy',
                  desc: 'Unique identifiers reduce ambiguity between similar products and variants, helping maintain cleaner product and inventory records.'
                },
                {
                  title: 'Supports Multiple Product Variants',
                  desc: 'Separate GTINs can be assigned to distinct trade items such as different sizes, packs, colours, or configurations where required.'
                },
                {
                  title: 'Useful Across Supply Chains',
                  desc: 'Standardized identifiers can support communication between manufacturers, sellers, logistics partners, warehouses, retailers, and digital marketplaces.'
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
                Checklist Before Applying for Barcode Registration
              </h2>
            </div>

            <div className="space-y-3">
              {[
                {
                  title: 'Confirm Business & Brand Details',
                  desc: 'Keep the applicant business name, brand name, legal entity details, and contact information ready and consistent with supporting documents.'
                },
                {
                  title: 'Estimate Number of Products & Variants',
                  desc: 'Count distinct products and variants that may need unique GTINs so the appropriate barcode capacity can be selected.'
                },
                {
                  title: 'Prepare Product Catalogue Information',
                  desc: 'Agree in advance on each founder / trustee\'s capital contribution and profit/loss sharing ratio to avoid disputes after registration.'
                },
                {
                  title: 'Authorized Person KYC',
                  desc: 'Ensure each founder / trustee\'s PAN Card and Aadhaar Card details match identically and are linked to an active mobile number for OTP verification.'
                },
                {
                  title: 'Business Address & Registration Proof',
                  desc: 'Keep GST, incorporation, Udyam, IEC, or other applicable business proof and registered-address details available for verification.'
                },
                {
                  title: 'Assess Barcode Requirement',
                  desc: 'Choose an identification capacity suited to your current catalogue and reasonable future expansion, subject to the issuing authority’s available options.'
                },
                {
                  title: 'Check Marketplace / Retail Requirements',
                  desc: 'Review whether your target marketplaces, retailers, distributors, or export channels have specific GTIN, labelling, packaging, or category requirements.'
                },
                {
                  title: 'akshayb2bsolutions Verification Role',
                  desc: 'Our compliance team reviews applicant details, documents, and estimated barcode requirements to reduce avoidable application errors before submission.'
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
                Who Can Apply for Barcode Registration
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              Indian businesses and organizations that own, manufacture, market, import, export, or distribute products may need GS1 identification numbers depending on their commercial use case and channel requirements.
            </p>

            <div className="space-y-3">
              {[
                {
                  title: 'Eligible Business / Organization',
                  desc: 'The applicant may be a company, QR Code, partnership, proprietorship, startup, manufacturer, importer, exporter, or other eligible organization with valid business credentials.'
                },
                {
                  title: 'Authorized Applicant',
                  desc: 'An authorized proprietor, partner, director, employee, or representative should submit the application and supporting details on behalf of the organization.'
                },
                {
                  title: 'Valid Business Documents',
                  desc: 'PAN and applicable registration or tax documents should accurately reflect the applicant organization’s legal details.'
                },
                {
                  title: 'Defined Barcode Requirement',
                  desc: 'The business should estimate how many unique products or trade-item variants require identification before choosing barcode capacity.'
                },
                {
                  title: 'Product Ownership / Responsibility',
                  desc: 'The applicant should be responsible for the products or brand for which identifiers are being requested and use the assigned numbers according to applicable GS1 rules.'
                },
                {
                  title: 'Sector-Specific Labelling Rules',
                  desc: 'Barcode registration does not replace sector licences or mandatory labelling rules such as FSSAI, Legal Metrology, BIS, or other product-specific compliance where applicable.'
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
                Documents Required for Barcode Registration
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              Barcode application documents generally include business identity and registration proofs, PAN, applicant details, and supporting organization information. Exact documents can vary by entity type and issuing-authority requirements.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: 'PAN of Applicant Organization / Proprietor',
                  desc: 'A clear PAN copy of the business entity or proprietor, as applicable to the applicant structure.'
                },
                {
                  title: 'Authorized Person Identity & Contact Details',
                  desc: 'Identity and contact details of the authorized applicant or signatory may be required for application verification and communication.'
                },
                {
                  title: 'Business Registration / GST Proof',
                  desc: 'GST certificate, incorporation certificate, Udyam, partnership proof, IEC, or other applicable business-registration evidence may be requested.'
                },
                {
                  title: 'Business Address Proof',
                  desc: 'Registered-office or business-address proof may be required depending on the applicant type and supporting documents submitted.'
                },
                {
                  title: 'Product / Barcode Requirement Details',
                  desc: 'A summary of products, variants, catalogue size, and expected barcode quantity helps determine the suitable application capacity.'
                },
                {
                  title: 'akshayb2bsolutions Document Review Support',
                  desc: 'Our team helps organize applicant information and supporting documents in the required format and flags missing or inconsistent details before filing.'
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
                Step-by-Step Barcode Registration Process
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  step: 'Step 1',
                  title: 'Assess Barcode Requirement',
                  desc: 'We review your product catalogue and estimate the number of unique GTINs needed for products, variants, packs, or configurations.'
                },
                {
                  step: 'Step 2',
                  title: 'Collect Business Documents & Applicant Details',
                  desc: 'Share the applicable PAN, GST or registration proof, business details, authorized-person information, and other requested supporting documents.'
                },
                {
                  step: 'Step 3',
                  title: 'Select Suitable Barcode Capacity',
                  desc: 'Based on your current and expected product count, we guide you toward a suitable identification capacity or application option.'
                },
                {
                  step: 'Step 4',
                  title: 'Prepare & Submit Application',
                  desc: 'We assist with completing the relevant application details and submitting supporting documents through the applicable registration process.'
                },
                {
                  step: 'Step 5',
                  title: 'Application Review & Allotment Follow-Up',
                  desc: 'We help address application clarifications and track the process until eligible identification numbers or licence details are allotted.'
                },
                {
                  step: 'Step 6',
                  title: 'GTIN Mapping & Barcode Usage Guidance',
                  desc: 'After allotment, we guide you on assigning GTINs to products and preparing barcode usage for labels, packaging, retail, or ecommerce workflows.'
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
                Standards & Usage
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Barcode Standards & Usage in India
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
                <h4 className="text-sm font-bold text-[#0B3D91]">1. Product Identification Standard</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A GTIN identifies a trade item; it does not create a separate legal entity, trademark right, or product licence. The business remains responsible for the products and associated compliance.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
                <h4 className="text-sm font-bold text-[#0B3D91]">2. GS1 Number Management</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Assigned numbers should be managed carefully so each distinct trade item receives the correct identifier and retired or changed products are handled according to applicable GS1 rules.
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
                  The applicant is responsible for accurate product data, correct GTIN assignment, compliant packaging, and keeping organizational details current where required.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-slate-700 space-y-1">
              <h4 className="font-bold text-[#0B3D91]">5. akshayb2bsolutions&apos;s Role in Explaining Legal Implications:</h4>
              <p>
                Our advisors explain barcode capacity, GTIN assignment principles, packaging usage, and related product-compliance requirements so your team can use the identifiers correctly.
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
              After receiving barcode identification capacity, businesses should maintain accurate product records and follow applicable renewal, number-management, packaging, marketplace, and sector-compliance requirements.
            </p>

            <div className="space-y-3">
              {[
                {
                  title: 'Keep Applicant Details Updated',
                  desc: 'Keep the legal business name, address, contact details, and other applicant information current where updates are required.'
                },
                {
                  title: 'Maintain a GTIN Master List',
                  desc: 'Maintain a structured record linking every allotted GTIN with the correct product, variant, pack size, and status.'
                },
                {
                  title: 'Renew / Maintain Subscription if Applicable',
                  desc: 'Review the validity and renewal terms of the selected barcode licensing or subscription plan and renew on time where applicable.'
                },
                {
                  title: 'Control Product Changes Carefully',
                  desc: 'Major product changes, new variants, pack configurations, or replacement items may require a new GTIN under applicable identification rules.'
                },
                {
                  title: 'Check Packaging & Printing Quality',
                  desc: 'Ensure printed barcode dimensions, contrast, quiet zones, and placement are suitable for reliable scanning on final packaging.'
                },
                {
                  title: 'Follow Marketplace & Sector Rules',
                  desc: 'Continue to follow ecommerce listing policies, Legal Metrology, FSSAI, BIS, GST, and other applicable product or business requirements.'
                },
                {
                  title: 'akshayb2bsolutions Ongoing Compliance Support',
                  desc: 'Our team can help with barcode record organization, renewal reminders, new-product GTIN planning, and related product-compliance support.'
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
                Barcode Identification Options Comparison
              </h2>
            </div>

            <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left text-xs border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-[#0B3D91] text-white">
                    <th className="p-3.5 font-bold border-r border-blue-800">Parameter</th>
                    <th className="p-3.5 font-bold bg-orange-500 text-[#0B3D91] border-r border-orange-600">
                      GS1 GTIN / Barcode
                    </th>
                    <th className="p-3.5 font-bold border-r border-blue-800">Internal SKU</th>
                    <th className="p-3.5 font-bold border-r border-blue-800">QR Code</th>
                    <th className="p-3.5 font-bold">Marketplace Product ID</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">1. Primary Purpose</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold text-orange-800 border-r border-slate-200">
                      Standardized trade-item identification
                    </td>
                    <td className="p-3.5 border-r border-slate-200">Internal inventory identification</td>
                    <td className="p-3.5 border-r border-slate-200">QR Code Act, 2008</td>
                    <td className="p-3.5">Platform-specific listing identification</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">2. Global Standardization</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold text-orange-800 border-r border-slate-200">
                      Consumer-facing digital information — GS1 standards
                    </td>
                    <td className="p-3.5 border-r border-slate-200">No — business-specific</td>
                    <td className="p-3.5 border-r border-slate-200">Not primarily a product ID system</td>
                    <td className="p-3.5">Platform-dependent</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">3. Retail Scanning</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold text-rose-700 border-r border-slate-200">
                      Unlimited, Joint &amp; Several
                    </td>
                    <td className="p-3.5 border-r border-slate-200">Possible only in own systems</td>
                    <td className="p-3.5 border-r border-slate-200">QR scanners / cameras</td>
                    <td className="p-3.5 text-orange-800 font-semibold">Depends on platform workflow</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">4. Typical Use</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold border-r border-slate-200">
                      Retail, ecommerce, logistics & supply chain
                    </td>
                    <td className="p-3.5 border-r border-slate-200">Warehouse / internal stock</td>
                    <td className="p-3.5 border-r border-slate-200">Flat 30% on QR Code</td>
                    <td className="p-3.5 text-orange-800 font-semibold">Marketplace catalogue</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">5. Uniqueness Scope</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold border-r border-slate-200">
                      Globally unique when properly assigned
                    </td>
                    <td className="p-3.5 border-r border-slate-200">Unique only inside your system</td>
                    <td className="p-3.5 border-r border-slate-200">As per QR Code Agreement</td>
                    <td className="p-3.5">Board of Directors &amp; Shareholders</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">6. External Acceptance</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold text-orange-800 border-r border-slate-200">
                      Low (Income Tax &amp; GST)
                    </td>
                    <td className="p-3.5 border-r border-slate-200">Limited external recognition</td>
                    <td className="p-3.5 border-r border-slate-200">Medium (Form 8 &amp; 11 MCA)</td>
                    <td className="p-3.5">Limited to the marketplace</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">7. Credibility &amp; Trust</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold border-r border-slate-200">
                      Commercial product identification
                    </td>
                    <td className="p-3.5 border-r border-slate-200">Internal inventory control</td>
                    <td className="p-3.5 border-r border-slate-200">Consumer-facing digital information</td>
                    <td className="p-3.5 text-orange-800 font-semibold">Consumer-facing digital informationest (Global Standards)</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">8. Cross-Channel Portability</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold text-slate-900 border-r border-slate-200">
                      Charitable, Social &amp; Community Initiatives
                    </td>
                    <td className="p-3.5 border-r border-slate-200">Low</td>
                    <td className="p-3.5 border-r border-slate-200">Social Welfare &amp; Non-Profit Organizations</td>
                    <td className="p-3.5">Consumer-facing digital information-Growth Startups &amp; Tech</td>
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
                Tax & Regulatory Considerations for Barcoded Products
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              Barcode registration itself does not determine income-tax or GST treatment. Tax, invoicing, packaging, and product-compliance obligations continue to depend on your business structure, turnover, product category, and applicable laws.
            </p>

            <div className="space-y-3">
              {[
                {
                  title: 'GST & Tax Rules Remain Separate',
                  desc: 'Getting a barcode does not create or replace GST registration, tax filings, invoicing requirements, or other business-tax obligations.'
                },
                {
                  title: 'Barcode Does Not Replace HSN / SAC',
                  desc: 'GTINs identify products commercially, while HSN/SAC and tax classification serve different regulatory and invoicing purposes.'
                },
                {
                  title: 'Legal Metrology & Label Declarations',
                  desc: 'Packaged commodities may require mandatory label declarations under applicable Legal Metrology rules in addition to the barcode itself.'
                },
                {
                  title: 'Sector Licences Remain Applicable',
                  desc: 'Food, electronics, medical, imported, or regulated products may require FSSAI, BIS, CDSCO, IEC, or other approvals depending on the product and activity.'
                },
                {
                  title: 'Accurate Invoice & Product Master Data',
                  desc: 'Keep GTIN, product description, HSN, tax rate, MRP, pack size, and other commercial data aligned across ERP, billing, and marketplace systems.'
                },
                {
                  title: 'akshayb2bsolutions Compliance Support',
                  desc: 'Our team can coordinate barcode registration support with GST, trademark, IEC, FSSAI, BIS, and other applicable business-compliance services.'
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
                Commercial Enablement
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Business Uses of Barcode Registration
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              Barcode registration can support commercial readiness across product catalogues, retail, ecommerce, logistics, exports, and inventory systems. The exact benefit depends on your sales channels and technology stack.
            </p>

            <div className="space-y-3">
              {[
                {
                  title: 'Organized Retail Distribution',
                  desc: 'Unique GTINs help retailers and distributors identify, scan, receive, bill, and replenish products consistently.'
                },
                {
                  title: 'Ecommerce Marketplace Listings',
                  desc: 'Many marketplace workflows use product identifiers for catalogue matching and listing, subject to the platform’s current policies and exemptions.'
                },
                {
                  title: 'Warehouse & Inventory Management',
                  desc: 'Barcodes can connect physical products to digital inventory records for receiving, picking, packing, stock counts, and dispatch.'
                },
                {
                  title: 'Point-of-Sale Billing',
                  desc: 'Retail POS systems can scan compliant barcodes to retrieve product and pricing information from the seller’s database.'
                },
                {
                  title: 'Export & Distribution Readiness',
                  desc: 'Standard product identifiers can help maintain consistent trade-item data when dealing with distributors, international buyers, and supply-chain partners.'
                },
                {
                  title: 'Brand Catalogue Scalability',
                  desc: 'A structured GTIN system supports catalogue expansion by giving distinct items and variants unique identifiers.'
                },
                {
                  title: 'akshayb2bsolutions Product Compliance Support',
                  desc: 'We can help coordinate barcode registration with trademark, GST, IEC, FSSAI, BIS, Legal Metrology, and related compliance requirements.'
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
                  title: 'Application Preparation & Digital Verification',
                  desc: 'Our compliance specialists review applicant details and supporting documents to reduce avoidable discrepancies before submission.'
                },
                {
                  title: 'Application Coordination & Follow-Ups',
                  desc: 'We assist with application clarifications, document requests, and process follow-ups through the applicable registration channel.'
                },
                {
                  title: 'GTIN Assignment Guidance',
                  desc: 'After allotment, we help you understand how to map identifiers to products and variants without duplicating product codes.'
                },
                {
                  title: 'Post-Registration Barcode Support',
                  desc: 'Get support for new-product barcode planning, packaging usage, renewal reminders, and related compliance requirements.'
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
                Why Businesses Choose akshayb2bsolutions for Barcode Registration
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Barcode & Compliance Guidance',
                  desc: 'Guidance from a compliance-focused team for barcode registration, supporting business documents, and related product registrations.',
                  icon: Award
                },
                {
                  title: 'Time-Saving Digital Process',
                  desc: 'Digital document collection and guided workflows help reduce unnecessary paperwork and repeated application errors.',
                  icon: Clock
                },
                {
                  title: 'Requirement-Based Transparent Pricing',
                  desc: 'Pricing is shared after assessing barcode quantity, business type, and applicable authority or subscription charges—no fixed package amount is shown upfront.',
                  icon: Tag
                },
                {
                  title: 'Trusted by Thousands',
                  desc: 'Experienced in assisting Indian businesses with registration and compliance requirements across multiple service categories.',
                  icon: Users
                },
                {
                  title: 'Renewal & Compliance Reminders',
                  desc: 'Stay informed about applicable renewal, document, and related compliance follow-ups for your product-registration workflow.',
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
              Identify Your Products Professionally
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              Get Your Barcode Registration with Confidence
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Get guided support for barcode requirement assessment, document preparation, application filing, and product identification. Pricing is provided after reviewing your exact barcode needs.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => scrollToSection('lead-capture-widget')}
                className="px-6 py-3 rounded-xl bg-[#FF5A00] hover:bg-orange-500 text-[#0B3D91] font-black text-xs sm:text-sm shadow-xl transition-all cursor-pointer"
              >
                Get Price & Start Registration
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

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
  Recycle,
  PackageCheck,
  Factory,
  Cpu,
  BatteryCharging,
  Leaf,
  ClipboardCheck
} from 'lucide-react';
import {
  INDIAN_STATES_AND_UTS,
  BUSINESS_TYPES,
  BUSINESS_ACTIVITIES,
  COMPANY_DETAILS
} from '../../data/servicesData';
import { HeaderMegaMenu } from '../../components/HeaderMegaMenu';
import { TopUtilityBar } from '../../components/TopUtilityBar';

interface EPRRegistrationLandingProps {
  onBackToHome: () => void;
  onSelectService: (serviceName: string) => void;
  onOpenBrochure: () => void;
  onOpenAppointment: () => void;
}

// 6 Accordion FAQs — EPR Registration in India
const FAQ_ITEMS = [
  { q: 'What is EPR Registration in India?', a: 'Extended Producer Responsibility (EPR) registration is the regulatory registration required for eligible producers, importers, brand owners and other covered entities that place regulated products or packaging into the Indian market. The exact registration route depends on the waste stream and applicable CPCB rules.' },
  { q: 'Which EPR categories can you help with?', a: 'We assist with EPR registration support for Plastic Packaging, E-Waste, Battery Waste and other applicable producer-responsibility categories, subject to the current CPCB framework and your business activity.' },
  { q: 'What documents are generally required?', a: 'Common documents include PAN, GST details, CIN or business registration proof where applicable, authorized person KYC, registered office proof, product or packaging details, sales or import data, brand details and category-specific declarations.' },
  { q: 'How long does EPR registration take?', a: 'The timeline depends on the EPR category, document readiness, portal scrutiny and any clarification raised by CPCB or the concerned authority. We first review your case and share a practical estimate before filing.' },
  { q: 'Is the EPR registration fee fixed?', a: 'No single professional fee applies to every EPR case. Pricing depends on the waste stream, business model, number of brands or products, data volume and filing scope. Share your requirement and we will provide a clear quote before starting.' },
  { q: 'Do you also support post-registration compliance?', a: 'Yes. Depending on the category, we can assist with EPR target or obligation mapping, return filing support, certificate or credit documentation, data updates, portal coordination and ongoing compliance guidance.' }
]

// Related EPR & environmental compliance services
const RELATED_SERVICES = [
  {
    title: 'EPR Plastic Waste',
    desc: 'Registration and compliance support for eligible Producers, Importers and Brand Owners dealing with plastic packaging in India.',
    img: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&auto=format&fit=crop&q=80',
    price: 'Contact for Price'
  },
  {
    title: 'EPR E-Waste',
    desc: 'CPCB EPR registration and compliance support for producers of covered electrical and electronic equipment.',
    img: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?w=600&auto=format&fit=crop&q=80',
    price: 'Contact for Price'
  },
  {
    title: 'EPR Battery Waste',
    desc: 'Registration support for eligible battery producers plus guidance on category-specific EPR obligations and portal compliance.',
    img: 'https://images.unsplash.com/photo-1609592424824-1e6269d69a2a?w=600&auto=format&fit=crop&q=80',
    price: 'Contact for Price'
  },
  {
    title: 'Plastic Waste Processor Registration',
    desc: 'Application support for eligible recyclers, processors and waste-management entities under the applicable plastic waste framework.',
    img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&auto=format&fit=crop&q=80',
    price: 'Contact for Price'
  },
  {
    title: 'EPR Annual / Periodic Return Support',
    desc: 'Organized data preparation and filing assistance for applicable EPR returns, sales data and compliance submissions.',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&auto=format&fit=crop&q=80',
    price: 'Contact for Price'
  },
  {
    title: 'Environmental Compliance Consultation',
    desc: 'Practical compliance mapping for waste-management, producer responsibility and related environmental registrations in India.',
    img: 'https://images.unsplash.com/photo-1497250681960-ef046c08a56e?w=600&auto=format&fit=crop&q=80',
    price: 'Contact for Price'
  }
]

export const EPRRegistrationLanding: React.FC<EPRRegistrationLandingProps> = ({
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
  const [selectedPackage, setSelectedPackage] = useState('EPR Registration — Contact for Pricing');
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
            <span className="text-slate-900 font-bold">EPR Registration</span>
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
                  <span>Pan-India EPR Compliance Desk</span>
                  <span className="w-1 h-1 rounded-full bg-white/60"></span>
                  <span className="text-white">Expert Filing Support</span>
                </div>

                {/* H1 Heading & Tagline */}
                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight antialiased">
                    EPR Registration
                  </h1>
                  <div className="space-y-0.5">
                    <p className="text-xl sm:text-2xl font-black text-orange-300 antialiased">
                      Get your EPR registration handled{' '}
                      <span className="underline decoration-[#FF5A00] decoration-2 underline-offset-4 font-black text-white">
                        with expert support
                      </span>
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-blue-100 antialiased">
                      Final quote depends on category, scope & filing requirements
                    </p>
                  </div>
                </div>

                {/* Definition: 2-3 Line Description */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                  EPR Registration in India is the legal process of establishing a non-governmental organization for charitable, social-welfare, educational, healthcare, religious, or community-focused objectives. Depending on the chosen structure, an EPR may be registered as a Society, Trust, or Section 8 Company under applicable Indian laws.
                </p>

                {/* 6 Feature Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Recycle className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Category-Based Timeline</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Factory className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Producer / Importer / Brand Owner</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <PackageCheck className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>CPCB Portal Documentation</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Cpu className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Digital Filing Support</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <BatteryCharging className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>CPCB / Portal Filing</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Leaf className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Compliance Specialist</span>
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
                      Registrations Supported
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
                        Thank you <span className="font-bold">{applicantName}</span>. Our EPR compliance specialist has been assigned to your requirement. We will call you within 15 minutes at <span className="font-bold">{applicantMobile}</span>.
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
                              Consultancy Fee
                            </span>
                            <span className="text-base font-black text-[#0B3D91] leading-none">
                              Contact for Pricing
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-[11px] font-bold text-slate-800 block leading-tight">
                            Scope Based
                          </span>
                          <span className="text-[10px] font-medium text-slate-500 block leading-tight">
                            Quote shared before filing
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
                                Select State of EPR Registration *
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
                                Your EPR registration route and documents depend on the waste category, business activity and applicable CPCB / regulatory requirements.
                              </span>
                            </div>

                            <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100 text-xs text-slate-600 space-y-1">
                              <div className="flex items-center gap-1.5 font-bold text-[#0B3D91]">
                                <ShieldCheck className="w-4 h-4 text-[#FF5A00]" />
                                <span>Why register with akshayb2bsolutions?</span>
                              </div>
                              <p className="text-[11px]">
                                We review your EPR category, prepare the documentation checklist, organize application data, support portal filing and assist with clarification handling until the application reaches the appropriate stage.
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
                                Select EPR Registration Package *
                              </label>
                              <select
                                value={selectedPackage}
                                onChange={(e) => setSelectedPackage(e.target.value)}
                                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                              >
                                <option value="EPR Registration Package (Contact for Pricing)">EPR Registration Package — Contact for Pricing Scope Baseds</option>
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
                Choose Your EPR Registration Package
              </h2>
              <p className="text-sm text-slate-500 mt-2 mx-auto max-w-2xl text-center">
                One focused EPR assistance package with requirement review, category mapping, document preparation, portal filing support and dedicated compliance guidance. Pricing is shared after we understand your exact EPR category and filing scope.
              </p>
            </div>

            <div className="max-w-[520px] mx-auto">
              <div className="bg-white rounded-2xl border-t-4 border-t-[#FF6B00] border-l border-r border-b border-slate-200 p-6 sm:p-8 shadow-xl flex flex-col justify-between">
                <div>
                  {/* Badges */}
                  <div className="flex items-center justify-start flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 rounded bg-orange-100 text-orange-900 text-[10px] font-black uppercase tracking-wide">
                      CUSTOM SCOPE • CLEAR QUOTE
                    </span>
                    <span className="px-3 py-1 rounded bg-yellow-100 text-yellow-900 text-[10px] font-black uppercase tracking-wide">
                      NO HIDDEN PROFESSIONAL CHARGES
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0D47A1]">EPR Registration Assistance</h3>
                  <p className="text-sm text-slate-500 mb-6">
                    Built for Indian producers, importers, brand owners and covered businesses that need reliable EPR registration support without compliance confusion.
                  </p>

                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl sm:text-4xl font-extrabold text-[#0D47A1]">Contact for Pricing</span>
                    </div>
                    <span className="text-xs text-slate-500 font-medium block mt-1">
                      Final quote depends on category, scope & filing requirements
                    </span>
                  </div>

                  {/* Checklist */}
                  <div className="space-y-3.5 mb-8">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">PACKAGE INCLUSIONS:</p>
                    {[
                      'EPR Category & Applicability Assessment',
                      'Customized Document Checklist & Data Review',
                      'CPCB / Portal Filing Support',
                      'Product / Brand / Packaging Data Mapping',
                      'Application Clarification & Follow-up Support',
                      'Dedicated EPR Compliance Specialist'
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
                    setSelectedPackage('EPR Registration Package (Contact for Pricing)');
                    scrollToSection('lead-capture-widget');
                  }}
                  className="w-full py-4 rounded-xl bg-[#0D47A1] hover:bg-blue-900 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer text-center"
                >
                  Request EPR Registration Quote
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
                What is EPR Registration in India?
              </h2>
            </div>

            {/* Definition paragraph */}
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Extended Producer Responsibility (EPR) is a compliance framework that places responsibility on eligible producers and other covered entities for environmentally responsible management of products or packaging after use. Registration and ongoing obligations depend on the waste stream, product category and the applicable Indian rules.
            </p>

            {/* 5 Bullets with bold lead-ins */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Who Typically Needs It:</strong>
                  Suitable for eligible producers, importers, brand owners, manufacturers and other regulated entities dealing with plastic packaging, electrical/electronic equipment, batteries or other EPR-covered categories.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Category-Specific Compliance:</strong>
                  Each waste stream has its own registration, data, target, return and certificate requirements. We map the correct route before documents are prepared.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">CPCB / Regulatory Portal Filing:</strong>
                  Applications are prepared and filed through the applicable CPCB or regulatory portal based on the relevant EPR category and applicant type.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Compliance-Driven Registration:</strong>
                  Where EPR rules apply, proper registration and timely compliance help businesses avoid regulatory disruption, environmental compensation exposure and portal-related compliance gaps.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Business Continuity & Market Readiness:</strong>
                  A properly organized EPR compliance system supports smoother vendor onboarding, marketplace documentation, institutional procurement and responsible brand operations.
                </div>
              </div>
            </div>

            {/* Closing Summary */}
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-2">
              In summary, EPR registration is not just a certificate exercise—it is the starting point for ongoing producer-responsibility compliance. Our team helps simplify applicability, documents, filing, portal coordination and post-registration guidance.
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
                How EPR Registration Works in India
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              EPR registration starts with identifying the correct waste stream and applicant category. The filing process then uses business KYC, product or packaging information, sales/import data and category-specific declarations on the applicable regulatory portal.
            </p>

            <p className="text-slate-700 text-sm leading-relaxed">
              After scrutiny and approval, the authority issues the applicable EPR registration or registration certificate. The business must then continue to meet any target, certificate, return, data-update and record-keeping obligations that apply to its category.
            </p>

            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B3D91] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#FF5A00]" />
                <span>How akshayb2bsolutions Streamlines Your Registration:</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our compliance desk reviews applicability, prepares a tailored checklist, organizes portal-ready data and declarations, supports filing and assists with authority queries or clarification requirements.
              </p>
            </div>
          </div>
        </section>

        {/* 7. ADVANTAGES (6 ITEMS) */}
        <section id="advantages" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Business Value</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Why Businesses Choose Professional EPR Support</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Correct Applicability from Day One', desc: 'Avoid filing under the wrong waste stream or applicant type by mapping your products, brands, imports and packaging before application.' },
                { title: 'Cleaner Documentation & Data', desc: 'Structured KYC, sales/import data, product details and declarations reduce avoidable portal errors and clarification cycles.' },
                { title: 'CPCB / Portal Filing Support', desc: 'Get guided support for application preparation, uploads, submissions and portal coordination for the applicable EPR framework.' },
                { title: 'Compliance-Ready Business Records', desc: 'Organized EPR records help with audits, marketplace requirements, vendor checks and future return filing.' },
                { title: 'Post-Registration Guidance', desc: 'Understand the ongoing targets, certificates, credits, returns or data updates that may apply after registration.' },
                { title: 'One Dedicated Compliance Contact', desc: 'Work with a single specialist who understands your filing scope and can guide you through application-stage queries.' }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm"><span className="w-6 h-6 rounded-full bg-[#0B3D91] text-[#FF5A00] text-xs flex items-center justify-center font-mono">{idx + 1}</span><h4>{item.title}</h4></div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-8">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 text-center pt-2">Our team focuses on accurate filing support and practical compliance guidance under the applicable Indian EPR framework.</p>
          </div>
        </section>

        {/* 8. CHECKLIST (8 BULLETS) */}
        <section id="checklist" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Pre-Application Readiness</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Checklist Before Applying for EPR Registration</h2></div>
            <div className="space-y-3">
              {[
                { title: 'Identify the Correct EPR Waste Stream', desc: 'Confirm whether your obligation relates to plastic packaging, e-waste, battery waste or another covered category.' },
                { title: 'Confirm Applicant Category', desc: 'Map whether your business is acting as a producer, importer, brand owner, manufacturer, recycler, refurbisher or another regulated stakeholder.' },
                { title: 'Keep PAN, GST & Business Registration Ready', desc: 'Ensure core business details match across PAN, GST, CIN or other registration records used in the application.' },
                { title: 'Authorized Person KYC', desc: 'Keep the authorized person\'s PAN, contact details and supporting KYC information ready for portal registration and verification.' },
                { title: 'Product / Packaging Details', desc: 'Prepare category-wise product, brand, packaging, battery or electrical/electronic equipment details relevant to your filing.' },
                { title: 'Sales / Import / Procurement Data', desc: 'Organize the historical or current-period data required to determine EPR obligations and application disclosures.' },
                { title: 'Declarations & Supporting Documents', desc: 'Prepare applicable undertakings, declarations, authorization letters and supporting evidence in portal-ready format.' },
                { title: 'Professional Pre-Filing Review', desc: 'Our compliance team checks the data pack for obvious gaps before submission to reduce avoidable back-and-forth.' }
              ].map((item, idx) => (<div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200"><ClipboardCheck className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5"/><div className="text-xs sm:text-sm text-slate-700"><strong className="text-slate-900 font-bold block mb-0.5">{item.title}:</strong>{item.desc}</div></div>))}
            </div>
          </div>
        </section>

        {/* 9. ELIGIBILITY CRITERIA */}
        <section id="eligibility" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Applicability Check</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Who Should Check EPR Registration Applicability?</h2></div>
            <p className="text-slate-700 text-sm leading-relaxed">EPR applicability is driven by what your business manufactures, imports, sells under its own brand or places into the Indian market. The exact definition and obligations vary by waste stream, so the first step is a category-specific review.</p>
            <div className="space-y-3">
              {[
                { title: 'Producers & Manufacturers', desc: 'Businesses manufacturing or placing covered products or packaging into the market should verify category-specific producer obligations.' },
                { title: 'Importers', desc: 'Importers of covered goods, components, batteries, electrical/electronic equipment or packaged products may fall within EPR requirements.' },
                { title: 'Brand Owners / Private Labels', desc: 'Businesses selling eligible products or packaging under their own brand should check whether they qualify as a regulated brand owner or producer.' },
                { title: 'Online & Multi-Channel Sellers', desc: 'Selling through marketplaces, e-commerce or retail channels does not by itself remove EPR obligations where the legal definition applies.' },
                { title: 'Recyclers / Refurbishers / Processors', desc: 'Certain waste streams also require registration of recyclers, refurbishers or waste processors under their respective portal framework.' },
                { title: 'Businesses Unsure About Coverage', desc: 'If your product mix spans multiple categories, we can review the scope before you invest time in the wrong registration route.' }
              ].map((item, idx) => (<div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200"><ShieldCheck className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5"/><div className="text-xs sm:text-sm text-slate-700"><strong className="text-slate-900 font-bold block mb-0.5">{item.title}:</strong>{item.desc}</div></div>))}
            </div>
          </div>
        </section>

        {/* 10. REQUIRED DOCUMENTS (6 BULLETS) */}
        <section id="documents" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Document Checklist</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Documents Commonly Required for EPR Registration</h2></div>
            <p className="text-slate-700 text-sm leading-relaxed">The final document list depends on your EPR category and applicant type. We provide a customized checklist after reviewing your business activity.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'PAN & GST Details', desc: 'PAN and GST registration details of the business, with matching legal name and registered information.' },
                { title: 'Business Constitution Proof', desc: 'CIN, LLP details, partnership or proprietorship proof, incorporation documents or equivalent records as applicable.' },
                { title: 'Authorized Person KYC', desc: 'Authorized person name, PAN, mobile, email, designation and supporting authorization where required.' },
                { title: 'Registered Office Proof', desc: 'Registered business address and supporting address documentation requested for the applicable portal.' },
                { title: 'Product / Brand / Category Data', desc: 'Relevant product lists, brand information, packaging type, battery category or EEE details according to the waste stream.' },
                { title: 'Sales / Import Data & Declarations', desc: 'Required period-wise sales/import/procurement data plus declarations, undertakings or supporting statements.' }
              ].map((item, idx) => (<div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 space-y-1"><div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm"><FileText className="w-4 h-4 text-[#0B3D91]"/><h4>{item.title}</h4></div><p className="text-xs text-slate-600 leading-relaxed pl-6">{item.desc}</p></div>))}
            </div>
          </div>
        </section>

        {/* 11. STEPS (6 NUMBERED STEPS) */}
        <section id="steps" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Registration Sequence</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Step-by-Step EPR Registration Process</h2></div>
            <div className="space-y-4">
              {[
                { step: 'Step 1', title: 'EPR Applicability Review', desc: 'We understand your products, brands, imports and waste stream to identify the correct registration route.' },
                { step: 'Step 2', title: 'Document & Data Checklist', desc: 'You receive a tailored checklist for KYC, business documents, product details, sales/import data and declarations.' },
                { step: 'Step 3', title: 'Data Preparation & Validation', desc: 'Our team organizes the application inputs and checks for common inconsistencies before portal submission.' },
                { step: 'Step 4', title: 'Portal Application Filing', desc: 'The application is prepared and filed on the applicable CPCB or regulatory portal with the required supporting documents.' },
                { step: 'Step 5', title: 'Clarification / Query Support', desc: 'If the authority requests additional information or corrections, we help prepare the response and supporting documents.' },
                { step: 'Step 6', title: 'Registration & Next-Step Guidance', desc: 'After approval, we explain the key post-registration obligations relevant to your category, such as returns, targets, certificates or data updates.' }
              ].map((item, idx) => (<div key={idx} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200"><div className="w-12 h-12 rounded-xl bg-[#0B3D91] text-[#FF5A00] flex items-center justify-center font-black text-xs flex-shrink-0">{idx + 1}</div><div><div className="text-[10px] font-bold uppercase tracking-wider text-orange-600">{item.step}</div><h4 className="text-sm font-bold text-slate-900">{item.title}</h4><p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p></div></div>))}
            </div>
          </div>
        </section>

        {/* 12. LEGAL STATUS (5 SUB-HEADINGS) */}
        <section id="legal-status" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Regulatory Position</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">EPR Registration & Compliance Status</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[{icon: Recycle,title:'Waste-Stream Specific',desc:'EPR registration is linked to the applicable waste category, such as plastic packaging, e-waste or batteries.'},{icon: ShieldCheck,title:'Regulatory Registration',desc:'Eligible entities must use the applicable CPCB or regulatory portal and maintain the registration as required under the relevant rules.'},{icon: ClipboardCheck,title:'Ongoing Responsibility',desc:'Registration may be followed by targets, returns, certificates, records and periodic data updates depending on the category.'}].map((item,idx)=>{const Icon=item.icon;return <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200"><Icon className="w-7 h-7 text-[#0B3D91] mb-3"/><h4 className="font-bold text-slate-900 text-sm">{item.title}</h4><p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p></div>})}
            </div>
          </div>
        </section>

        {/* 13. POST-REGISTRATION COMPLIANCE (7 BULLETS) */}
        <section id="post-compliance" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">After Registration</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Post-Registration EPR Compliance Support</h2></div>
            <p className="text-slate-700 text-sm leading-relaxed">Getting registered is only the first step. Depending on the waste stream, your business may need to manage EPR obligations, certificates or credits, sales data, returns and other portal updates.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{[
              {title:'Target / Obligation Mapping',desc:'Understand the applicable EPR obligation based on category, sales/import data and current rules.'},
              {title:'Return & Data Filing Support',desc:'Prepare and organize periodic or annual data and return submissions where applicable.'},
              {title:'Certificate / Credit Documentation',desc:'Guidance on documentation and portal records related to EPR certificates, credits or recycling evidence where relevant.'},
              {title:'Profile & Product Data Updates',desc:'Support for changes in business details, brands, products, categories or authorized-person information.'},
              {title:'Record Keeping',desc:'Maintain a practical compliance file containing registrations, returns, transactions, declarations and supporting evidence.'},
              {title:'Compliance Review',desc:'Periodic review to identify missing filings or data gaps before they become larger portal or regulatory issues.'}
            ].map((item,idx)=><div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200"><div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-orange-600"/><h4 className="text-sm font-bold text-slate-900">{item.title}</h4></div><p className="text-xs text-slate-600 mt-1 pl-6 leading-relaxed">{item.desc}</p></div>)}</div>
          </div>
        </section>

        {/* 14. COMPARISON TABLE (8 ROWS) */}
        <section id="comparison" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Category Guide</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">EPR Categories at a Glance</h2></div>
            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white"><table className="w-full min-w-[760px] text-xs"><thead className="bg-[#0B3D91] text-white"><tr><th className="p-4 text-left">Category</th><th className="p-4 text-left">Typical Covered Businesses</th><th className="p-4 text-left">Typical Compliance Focus</th></tr></thead><tbody className="divide-y divide-slate-200"><tr><td className="p-4 font-bold">Plastic Packaging</td><td className="p-4">Eligible producers, importers and brand owners</td><td className="p-4">Registration, packaging data, obligations, certificates/credits and returns</td></tr><tr><td className="p-4 font-bold">E-Waste</td><td className="p-4">Eligible producers of covered electrical/electronic equipment</td><td className="p-4">Producer registration, EPR targets/obligations, certificates and return filing</td></tr><tr><td className="p-4 font-bold">Battery Waste</td><td className="p-4">Eligible battery producers and other covered stakeholders</td><td className="p-4">Registration, category data, EPR obligations, certificates and portal compliance</td></tr></tbody></table></div>
            <p className="text-xs text-slate-500">The exact legal definition, data requirement and obligation varies by category and current rule position. We confirm applicability before filing.</p>
          </div>
        </section>

        {/* 15. TAX IMPLICATIONS (6 BULLETS) */}
        <section id="tax-implications" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Ongoing Compliance</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">EPR Compliance & Ongoing Obligations</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{[
            {title:'Registration Validity & Updates',desc:'Track validity, amendments and profile updates required under the applicable EPR framework.'},
            {title:'Sales / Import Data',desc:'Maintain accurate period-wise business data used for obligation calculation and portal reporting.'},
            {title:'EPR Targets / Obligations',desc:'Monitor the applicable recycling, collection or other responsibility targets defined for your category.'},
            {title:'Certificates / Credits',desc:'Maintain evidence of eligible certificates, credits or transactions where the rules use such mechanisms.'},
            {title:'Returns & Declarations',desc:'Complete applicable periodic or annual returns and declarations within the required timeline.'},
            {title:'Audit-Ready Records',desc:'Keep supporting records organized for internal review, portal verification or regulatory scrutiny.'}
          ].map((item,idx)=><div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-200"><h4 className="text-sm font-bold text-slate-900">{item.title}</h4><p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p></div>)}</div></div>
        </section>

        {/* 16. FINANCING OPTIONS (7 BULLETS) */}
        <section id="financing" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Business Support</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">How EPR Compliance Supports Business Readiness</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{[
            {title:'Marketplace & Vendor Documentation',desc:'A proper EPR compliance record can support documentation requests from marketplaces, distributors and enterprise buyers.'},
            {title:'Import & Supply-Chain Readiness',desc:'Clear registration and product data help reduce compliance confusion when importing or distributing covered goods.'},
            {title:'Brand Governance',desc:'Structured producer-responsibility records strengthen internal ESG and environmental compliance processes.'},
            {title:'Future Filing Efficiency',desc:'Well-organized product, packaging and sales data makes later returns and updates easier to manage.'}
          ].map((item,idx)=><div key={idx} className="p-4 rounded-xl bg-white border border-slate-200"><h4 className="text-sm font-bold text-slate-900">{item.title}</h4><p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p></div>)}</div></div>
        </section>

        {/* 17. HOW AKSHAYB2BSOLUTIONS HELPS (5 BULLETS) */}
        <section id="why-akshayb2b" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6"><div className="text-center max-w-3xl mx-auto mb-10"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Why Choose Us</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Why Choose akshayb2bsolutions for EPR Registration?</h2><p className="text-sm text-slate-600 mt-2">Focused support from applicability review to filing and post-registration guidance.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">{[
            {icon:Recycle,title:'EPR-Focused Review',desc:'We start by identifying the correct waste stream and applicant type for your business.'},
            {icon:FileCheck,title:'Document Accuracy',desc:'Your KYC, product data, declarations and supporting files are reviewed before submission.'},
            {icon:PackageCheck,title:'Category Mapping',desc:'Plastic packaging, e-waste and battery requirements are handled with category-specific checklists.'},
            {icon:Clock,title:'Responsive Follow-up',desc:'We help you respond to application-stage clarification requests with organized documentation.'},
            {icon:ShieldCheck,title:'Clear Scope & Quote',desc:'No fixed one-size-fits-all fee. You receive a clear quote after we understand your actual filing scope.'},
            {icon:Handshake,title:'Dedicated Specialist',desc:'A dedicated compliance contact supports you throughout the registration workflow.'}
          ].map((item,idx)=>{const Icon=item.icon;return <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200"><Icon className="w-7 h-7 text-[#0B3D91] mb-3"/><h4 className="text-sm font-bold text-slate-900">{item.title}</h4><p className="text-xs text-slate-600 mt-1 leading-relaxed">{item.desc}</p></div>})}</div></div>
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
                  desc: 'Clear scope, transparent quotation and no hidden professional charges. Pricing is confirmed after reviewing your EPR category, applicant type and compliance requirements.',
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
                  desc: 'Enterprise-grade 256-bit SSL encryption protecting your authorized stakeholders\' KYC, financial records, and business documentation.',
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
              Get Your EPR Registration Started with Confidence
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Tell us your product, packaging or waste category and our team will review your EPR applicability, required documents and filing scope. Get a clear quote before you proceed—no forced package pricing.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => scrollToSection('lead-capture-widget')}
                className="px-6 py-3 rounded-xl bg-[#FF5A00] hover:bg-orange-500 text-[#0B3D91] font-black text-xs sm:text-sm shadow-xl transition-all cursor-pointer"
              >
                Request EPR Quote
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
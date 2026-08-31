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
  Cpu,
  MonitorSmartphone,
  Leaf,
  Factory,
  PackageCheck
} from 'lucide-react';
import {
  INDIAN_STATES_AND_UTS,
  BUSINESS_TYPES,
  BUSINESS_ACTIVITIES,
  COMPANY_DETAILS
} from '../../data/servicesData';
import { HeaderMegaMenu } from '../../components/HeaderMegaMenu';
import { TopUtilityBar } from '../../components/TopUtilityBar';

interface EprEWastePageProps {
  onBackToHome: () => void;
  onSelectService: (serviceName: string) => void;
  onOpenBrochure: () => void;
  onOpenAppointment: () => void;
}

// 6 Accordion FAQs (adapted from the E-Waste (Management) Rules, 2022 framework)
const FAQ_ITEMS = [
  { q: 'What is EPR E-Waste Registration in India?', a: 'EPR E-Waste Registration is the CPCB registration and compliance framework applicable to producers of electrical and electronic equipment covered under the E-Waste (Management) Rules, 2022. It connects producers with recycling obligations and EPR certificate-based compliance.' },
  { q: 'Who needs EPR E-Waste Registration?', a: 'A producer who manufactures and sells electrical or electronic equipment under its own brand, sells under its brand equipment made by another manufacturer, imports electrical or electronic equipment, or imports used electrical and electronic equipment may fall within the producer definition and should assess registration applicability.' },
  { q: 'Which authority handles EPR E-Waste Registration?', a: 'Central Pollution Control Board (CPCB) manages registration and EPR compliance through the E-Waste EPR Portal under the E-Waste (Management) Rules, 2022.' },
  { q: 'What documents are generally required?', a: 'Common requirements may include company constitution documents, PAN, GST details, IEC for importers, registered office details, authorized signatory details, product/EEE code information, sales or import data, and other portal-specific declarations or supporting records.' },
  { q: 'Is there a fixed price for EPR E-Waste Registration?', a: 'No single consultancy price fits every case because scope depends on producer category, number of EEE codes, document readiness, historical data, target obligations, portal work and any additional compliance support. Share your details to receive a tailored quotation.' },
  { q: 'What happens after registration?', a: 'Registered producers must continue meeting applicable EPR obligations, maintain records, file required returns or information on the portal, and fulfil recycling targets through valid EPR certificates from registered recyclers as applicable.' }
]

// Related EPR and electronics compliance services
const RELATED_SERVICES = [
  {
    title: 'EPR Battery Waste',
    desc: 'End-to-end EPR registration and compliance support for producers and importers covered under Battery Waste Management Rules.',
    img: 'https://images.unsplash.com/photo-1619641805634-b867f535071c?w=600&auto=format&fit=crop&q=80',
    price: 'Get Quote'
  },
  {
    title: 'EPR Plastic Waste',
    desc: "Registration and compliance assistance for PIBOs under India's Plastic Waste Management EPR framework.",
    img: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&auto=format&fit=crop&q=80',
    price: 'Get Quote'
  },
  {
    title: 'EPR Tyre Waste',
    desc: 'CPCB EPR registration and compliance support for tyre producers, importers and other covered entities.',
    img: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?w=600&auto=format&fit=crop&q=80',
    price: 'Get Quote'
  },
  {
    title: 'EPR Used Oil',
    desc: 'EPR registration and compliance guidance for entities covered under the Extended Producer Responsibility framework for used oil.',
    img: 'https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?w=600&auto=format&fit=crop&q=80',
    price: 'Get Quote'
  },
  {
    title: 'BIS Registration',
    desc: 'BIS compliance support for applicable electronic and electrical products sold or imported into India.',
    img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&auto=format&fit=crop&q=80',
    price: 'Get Quote'
  },
  {
    title: 'WPC ETA Approval',
    desc: 'WPC Equipment Type Approval assistance for eligible wireless and RF-enabled electronic products in India.',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80',
    price: 'Get Quote'
  },
  {
    title: 'LMPC Registration',
    desc: 'Legal Metrology registration support for importers and packers of pre-packaged electronic and consumer products.',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&auto=format&fit=crop&q=80',
    price: 'Get Quote'
  },
  {
    title: 'IEC Registration',
    desc: 'Import Export Code registration support for businesses importing electrical and electronic equipment into India.',
    img: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&auto=format&fit=crop&q=80',
    price: 'Get Quote'
  },
  {
    title: 'Trademark Registration',
    desc: 'Protect the brand name and logo used for your electronics, appliances or technology products in India.',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&auto=format&fit=crop&q=80',
    price: 'Get Quote'
  }
]

export const EprEWastePage: React.FC<EprEWastePageProps> = ({
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
  const [businessType, setBusinessType] = useState('Producer / Importer');
  const [businessActivity, setBusinessActivity] = useState(BUSINESS_ACTIVITIES[0]);
  const [panNumber, setPanNumber] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('EPR E-Waste Compliance Package — Get Custom Quote');
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
            <span className="text-slate-900 font-bold">EPR E-Waste</span>
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
                  <span>CPCB EPR Compliance Desk • Pan-India</span>
                  <span className="w-1 h-1 rounded-full bg-white/60"></span>
                  <span className="text-white">Expert-Led Online Filing Support</span>
                </div>

                {/* H1 Heading & Tagline */}
                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight antialiased">
                    EPR E-Waste
                  </h1>
                  <div className="space-y-0.5">
                    <p className="text-xl sm:text-2xl font-black text-orange-300 antialiased">
                      Get your E-Waste EPR compliance{' '}
                      <span className="underline decoration-[#FF5A00] decoration-2 underline-offset-4 font-black text-white">
                        with a custom quote
                      </span>
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-blue-100 antialiased">
                      Final quote after reviewing your EEE codes, business profile and compliance scope
                    </p>
                  </div>
                </div>

                {/* Definition: 2-3 Line Description */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                  EPR E-Waste in India is the Extended Producer Responsibility framework for covered electrical and electronic equipment under the E-Waste (Management) Rules, 2022. Covered producers register with CPCB through the E-Waste EPR Portal and fulfil applicable recycling obligations through the prescribed EPR certificate mechanism.
                </p>

                {/* 6 Feature Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Clock className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>CPCB Portal Filing Support</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Factory className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Producer & Importer Coverage</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Cpu className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>EEE Code Mapping Support</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <MonitorSmartphone className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Digital Documentation</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Recycle className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>CPCB EPR Portal Filing</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Leaf className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Dedicated EPR Advisor</span>
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
                      Compliance Cases
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
                    <span>Custom Quote Available</span>
                  </div>

                  {formSubmitted ? (
                    <div className="text-center py-8 space-y-4 animate-in fade-in">
                      <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Application Received!</h3>
                      <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
                        Thank you <span className="font-bold">{applicantName}</span>. Our EPR E-Waste specialist has received your enquiry and will review your business profile, EEE codes and compliance scope. We will call you within 15 minutes at <span className="font-bold">{applicantMobile}</span>.
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
                            <Recycle className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-[10px] font-black uppercase tracking-wider text-orange-900 block leading-tight">
                              Consultancy Pricing
                            </span>
                            <span className="text-base font-black text-[#0B3D91] leading-none">
                              Get Custom Quote
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-[11px] font-bold text-slate-800 block leading-tight">
                            Scope-Based Pricing
                          </span>
                          <span className="text-[10px] font-medium text-slate-500 block leading-tight">
                            After compliance assessment
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
                                Select State of EPR E-Waste *
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
                                Your registered office, producer profile, product categories and EEE codes help us assess the documentation and CPCB EPR filing scope.
                              </span>
                            </div>

                            <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100 text-xs text-slate-600 space-y-1">
                              <div className="flex items-center gap-1.5 font-bold text-[#0B3D91]">
                                <ShieldCheck className="w-4 h-4 text-[#FF5A00]" />
                                <span>Why register with akshayb2bsolutions?</span>
                              </div>
                              <p className="text-[11px]">
                                Get EEE code mapping, document review, CPCB portal application support, query-response assistance and post-registration compliance guidance through one coordinated desk.
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
                                  Applicant Category *
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
                                  Electrical / Electronic Product Activity *
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
                                Authorized Signatory / Business PAN (Optional for quote)
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
                                Select EPR E-Waste Package *
                              </label>
                              <select
                                value={selectedPackage}
                                onChange={(e) => setSelectedPackage(e.target.value)}
                                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                              >
                                <option value="EPR E-Waste Compliance Package — Get Custom Quote">EPR E-Waste Compliance Package — Contact for Pricing</option>
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
                                  <span>Submit &amp; Get EPR Assessment</span>
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
                { id: 'registration', label: 'CPCB Registration' },
                { id: 'advantages', label: 'Advantages' },
                { id: 'checklist', label: 'Checklist' },
                { id: 'eligibility', label: 'Eligibility' },
                { id: 'documents', label: 'Documents Required' },
                { id: 'steps', label: 'Steps' },
                { id: 'legal-status', label: 'Legal Framework' },
                { id: 'post-compliance', label: 'Post-Registration' },
                { id: 'comparison', label: 'EPR Comparison' },
                { id: 'tax-implications', label: 'Cost Factors' },
                { id: 'financing', label: 'Compliance Planning' },
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
                Scope-Based EPR Consultancy
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0D47A1] mt-2">
                EPR E-Waste Compliance Package
              </h2>
              <p className="text-sm text-slate-500 mt-2 mx-auto max-w-2xl text-center">
                One focused package designed to move serious applicants from confusion to a clear CPCB EPR action plan. We review your producer profile, identify applicable EEE codes, prepare the filing set, support portal submission and guide ongoing compliance — with pricing shared after assessing your actual scope.
              </p>
            </div>

            <div className="max-w-[520px] mx-auto">
              <div className="bg-white rounded-2xl border-t-4 border-t-[#FF6B00] border-l border-r border-b border-slate-200 p-6 sm:p-8 shadow-xl flex flex-col justify-between">
                <div>
                  {/* Badges */}
                  <div className="flex items-center justify-start flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 rounded bg-orange-100 text-orange-900 text-[10px] font-black uppercase tracking-wide">
                      COMPLIANCE-FIRST SUPPORT
                    </span>
                    <span className="px-3 py-1 rounded bg-yellow-100 text-yellow-900 text-[10px] font-black uppercase tracking-wide">
                      CUSTOM QUOTE AFTER ASSESSMENT
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0D47A1]">EPR E-Waste Complete Support</h3>
                  <p className="text-sm text-slate-500 mb-6">
                    Built for manufacturers, brand owners, importers and sellers of covered electrical/electronic equipment who want a structured, expert-assisted path to CPCB EPR compliance.
                  </p>

                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <div className="flex items-baseline gap-3">
                      <span className="text-3xl sm:text-4xl font-extrabold text-[#0D47A1]">Contact for Pricing</span>
                    </div>
                    <span className="text-xs text-slate-500 font-medium block mt-1">
                      Final quote after reviewing your EEE codes, business profile and compliance scope
                    </span>
                  </div>

                  {/* Checklist */}
                  <div className="space-y-3.5 mb-8">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">PACKAGE INCLUSIONS:</p>
                    {[
                      'Producer Applicability & EEE Code Assessment',
                      'CPCB EPR Portal Registration Support',
                      'CPCB EPR Portal Filing Support',
                      'Sales / Import Data Review & Target Mapping',
                      'CPCB Query / Clarification Response Support',
                      'Post-Registration EPR Compliance Guidance'
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
                    setSelectedPackage('EPR E-Waste Compliance Package — Get Custom Quote');
                    scrollToSection('lead-capture-widget');
                  }}
                  className="w-full py-4 rounded-xl bg-[#0D47A1] hover:bg-blue-900 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer text-center"
                >
                  Request EPR E-Waste Quote
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
                EPR Compliance Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                What is EPR E-Waste in India?
              </h2>
            </div>

            {/* Definition paragraph */}
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              EPR for e-waste is a regulatory responsibility placed on producers of covered electrical and electronic equipment. Under India’s E-Waste (Management) Rules, 2022, covered producers register on the CPCB E-Waste EPR Portal and fulfil applicable recycling obligations through the prescribed EPR certificate mechanism.
            </p>

            {/* 5 Bullets with bold lead-ins */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Who Should Apply:</strong>
                  Relevant for manufacturers selling under their own brand, brand owners using third-party manufacturing, importers of new or used electrical/electronic equipment, and other businesses falling within the producer definition for covered EEE categories.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">End-to-End Compliance Support:</strong>
                  A structured filing approach helps align business details, EEE codes, sales/import data, portal registration, CPCB responses and ongoing EPR obligation tracking in one compliance workflow.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">CPCB-Linked Registration:</strong>
                  Covered entities must register in the applicable category on the E-Waste EPR Portal. Producers, manufacturers, refurbishers and recyclers are separately recognized categories under the rules.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Business-Critical Compliance:</strong>
                  For entities covered by the E-Waste (Management) Rules, registration is a core compliance requirement. Operating without required registration can create regulatory and commercial risk.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">EPR Target Responsibility:</strong>
                  Registered producers must fulfil applicable e-waste recycling obligations and manage EPR certificates through registered recyclers in accordance with CPCB framework and portal requirements.
                </div>
              </div>
            </div>

            {/* Closing Summary */}
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-2">
              In summary, EPR E-Waste compliance is not just a registration certificate — it is an ongoing producer-responsibility framework. Our team helps you identify applicability, prepare documentation, file on the CPCB portal and stay organised for continuing obligations.
            </p>
          </div>
        </section>

        {/* 6. REGISTRATION SECTION */}
        <section id="registration" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                CPCB Regulatory Framework
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                How EPR E-Waste Works in India
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              The E-Waste (Management) Rules, 2022 require covered entities to register on the CPCB portal in the applicable category. For producers, the filing generally involves business details, covered EEE codes, supporting registrations, product data and other information required by the portal.
            </p>

            <p className="text-slate-700 text-sm leading-relaxed">
              After CPCB approval, the producer receives EPR registration on the portal and must continue complying with applicable recycling targets, EPR certificate requirements, information/return filings and other obligations prescribed under the rules and CPCB procedures.
            </p>

            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B3D91] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#FF5A00]" />
                <span>How akshayb2bsolutions Streamlines Your Registration:</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our compliance desk helps map applicable EEE codes, review business and import/sales information, prepare portal data and supporting documents, assist with CPCB filing and handle clarification/query support where required.
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
                Why EPR E-Waste Compliance Matters
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Operate with Regulatory Readiness',
                  desc: 'A properly assessed and completed EPR registration supports lawful market participation for covered electrical and electronic equipment and strengthens compliance readiness.'
                },
                {
                  title: 'Reduce Compliance Confusion',
                  desc: 'Expert mapping of producer category, EEE codes and documentation reduces avoidable filing errors and helps your team focus on business operations.'
                },
                {
                  title: 'Structured CPCB Filing',
                  desc: 'A structured CPCB filing workflow brings documents, portal data, supporting evidence and clarifications together for more efficient application handling.'
                },
                {
                  title: 'Build Buyer & Marketplace Confidence',
                  desc: 'EPR readiness can support vendor onboarding, marketplace compliance, importer documentation and enterprise procurement requirements for regulated electronic products.'
                },
                {
                  title: 'Plan Ongoing EPR Obligations',
                  desc: 'Registration is only the beginning. A clear compliance plan helps track obligations, recycler/EPR certificate activity and required portal reporting.'
                },
                {
                  title: 'Avoid Regulatory Disruption',
                  desc: 'Timely compliance helps reduce the risk of notices, portal issues, business interruptions and environmental compensation exposure arising from non-compliance.'
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
              akshayb2bsolutions combines application support with practical compliance guidance so your EPR filing is prepared around your actual product and business profile.
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
                Checklist Before Applying for EPR E-Waste
              </h2>
            </div>

            <div className="space-y-3">
              {[
                {
                  title: 'Confirm Producer Applicability',
                  desc: 'Check whether your business qualifies as a producer, manufacturer, refurbisher or recycler and whether your electrical/electronic products fall within covered EEE categories.'
                },
                {
                  title: 'Map Applicable EEE Codes',
                  desc: 'Identify the correct electrical and electronic equipment codes/product categories for which EPR registration and obligations may apply.'
                },
                {
                  title: 'Prepare Sales / Import Data',
                  desc: 'Agree in advance on each founder / trustee\'s capital contribution and profit/loss sharing ratio to avoid disputes after registration.'
                },
                {
                  title: 'Keep Business KYC Consistent',
                  desc: 'Ensure each founder / trustee\'s PAN Card and Aadhaar Card details match identically and are linked to an active mobile number for OTP verification.'
                },
                {
                  title: 'Prepare Registered Office Proof',
                  desc: 'Keep valid registered office/address documents and business constitution records ready for document verification and portal filing.'
                },
                {
                  title: 'Applicability & Producer Profile Review',
                  desc: 'Identify the authorized signatory and keep the contact, authorization and digital documentation needed for the EPR portal process ready.'
                },
                {
                  title: 'Check Connected Product Compliances',
                  desc: 'Depending on the product, additional requirements such as BIS, WPC, LMPC or IEC may also be relevant alongside EPR E-Waste compliance.'
                },
                {
                  title: 'akshayb2bsolutions Verification Role',
                  desc: 'Our compliance team performs a preliminary applicability, EEE-code and document review to identify gaps before CPCB portal submission.'
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
                Eligibility Criteria for EPR E-Waste
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              EPR E-Waste applicability depends on the role your business plays in placing covered electrical and electronic equipment on the Indian market. Producers may include own-brand manufacturers/sellers, brand owners sourcing from another manufacturer, importers of EEE and importers of used EEE.
            </p>

            <div className="space-y-3">
              {[
                {
                  title: 'Own-Brand Manufacturer / Seller',
                  desc: 'Businesses manufacturing and selling covered electrical/electronic equipment under their own brand should assess producer registration applicability.'
                },
                {
                  title: 'Brand Owner Using Third-Party Manufacturing',
                  desc: 'A business selling covered EEE under its own brand even when another manufacturer produces the goods can fall within the producer definition.'
                },
                {
                  title: 'Importer of Electrical / Electronic Equipment',
                  desc: 'Importers placing covered EEE on the Indian market should assess EPR registration and ongoing obligation requirements.'
                },
                {
                  title: 'Importer of Used EEE',
                  desc: 'Importers of used electrical and electronic equipment are expressly included within the producer definition under the E-Waste framework.'
                },
                {
                  title: 'Covered EEE Categories',
                  desc: 'Your products must be mapped against the EEE categories/codes covered by the rules and CPCB portal before the correct filing scope can be determined.'
                },
                {
                  title: 'Separate Registration by Category',
                  desc: 'An entity falling under more than one regulated category such as producer, manufacturer, refurbisher or recycler may require separate registration for the applicable categories.'
                },
                {
                  title: 'Pre-Filing Applicability Review',
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
                Documents Required for EPR E-Waste
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              The exact document set varies by applicant profile and portal requirements. Commonly, businesses should be ready with constitution/KYC records, PAN/GST details, IEC for importers, registered-office information, authorized signatory details, product/EEE code data and sales/import information.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Business PAN & Constitution Documents',
                  desc: 'Keep the business PAN and entity constitution documents such as incorporation or registration records ready in the correct legal name.'
                },
                {
                  title: 'GST & IEC Details',
                  desc: 'GST registration details are commonly required; importers should also keep a valid IEC and matching business particulars ready.'
                },
                {
                  title: 'Registered Office / Business Address Proof',
                  desc: 'Keep current registered office and business address records consistent with PAN, GST, IEC and incorporation/registration documents.'
                },
                {
                  title: 'Authorized Signatory Details',
                  desc: 'Provide the details and authorization documents of the person handling the EPR portal application on behalf of the business.'
                },
                {
                  title: 'Product, EEE Code & Sales / Import Data',
                  desc: 'Prepare a product list mapped to relevant EEE codes plus applicable sales/import quantities and supporting data needed for registration and obligation assessment.'
                },
                {
                  title: 'Application File Preparation Support',
                  desc: 'Our team organises the application data, supporting documents, EEE mapping and declarations in a CPCB-portal-ready structure and assists with corrections where needed.'
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
                Step-by-Step EPR E-Waste Process
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  step: 'Step 1',
                  title: 'Applicability & Producer Profile Review',
                  desc: 'We assess your business role, brand/import model and covered products to determine likely EPR E-Waste applicability and registration scope.'
                },
                {
                  step: 'Step 2',
                  title: 'Collect Business KYC & Registrations',
                  desc: 'We organise PAN, GST, IEC (where applicable), entity documents, registered office records and authorized signatory information for filing.'
                },
                {
                  step: 'Step 3',
                  title: 'Map Products to Applicable EEE Codes',
                  desc: 'Your electrical/electronic products are mapped to relevant EEE categories/codes so the application reflects the correct product scope.'
                },
                {
                  step: 'Step 4',
                  title: 'Prepare & Submit CPCB EPR Portal Application',
                  desc: 'We prepare the portal information, declarations and supporting documents and assist with submission on the CPCB E-Waste EPR Portal.'
                },
                {
                  step: 'Step 5',
                  title: 'CPCB Query / Clarification Support',
                  desc: 'If CPCB raises an observation or asks for clarification, we help prepare the response, corrections and supporting information for resubmission.'
                },
                {
                  step: 'Step 6',
                  title: 'Registration & Ongoing Compliance Roadmap',
                  desc: 'After registration, we guide you on maintaining portal records, EPR obligations, recycler/EPR certificate coordination and periodic compliance actions relevant to your profile.'
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
                Legal & Compliance Position of EPR E-Waste
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
                <h4 className="text-sm font-bold text-[#0B3D91]">1. Legal Identity</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  EPR E-Waste is an environmental compliance framework under the E-Waste (Management) Rules, 2022. Registration is administered by CPCB through the dedicated E-Waste EPR Portal for regulated entity categories.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
                <h4 className="text-sm font-bold text-[#0B3D91]">2. Compliance Requirements</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  After registration, producers must continue meeting applicable EPR targets, portal reporting and record-keeping requirements and use valid EPR certificates from registered recyclers as prescribed.
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
                  The regulated business remains responsible for accurate portal information and continuing compliance. Internal teams should maintain evidence supporting product data, transactions and EPR fulfilment.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-slate-700 space-y-1">
              <h4 className="font-bold text-[#0B3D91]">5. akshayb2bsolutions&apos;s Role in Explaining Legal Implications:</h4>
              <p>
                Our EPR advisors explain applicability, EEE mapping, portal requirements, producer obligations, recycler/EPR certificate workflow and practical post-registration compliance steps.
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
              After CPCB registration, EPR compliance continues throughout the business lifecycle. Producers should track obligations, maintain records, use registered recyclers and complete required portal actions to reduce non-compliance risk.
            </p>

            <div className="space-y-3">
              {[
                {
                  title: 'Maintain Updated CPCB Registration Details',
                  desc: 'Keep company name, address, GST, IEC and other linked business details updated and complete portal amendments where required.'
                },
                {
                  title: 'Track EPR Recycling Obligations',
                  desc: 'Monitor applicable recycling targets/obligations for your covered EEE codes and plan fulfilment within the relevant compliance period.'
                },
                {
                  title: 'Use Valid EPR Certificates',
                  desc: 'Fulfil applicable obligations through valid EPR certificates from registered recyclers for the relevant EEE codes, in line with CPCB framework and portal requirements.'
                },
                {
                  title: 'Maintain Sales / Import & Product Records',
                  desc: 'Maintain reliable records of covered product quantities, imports/sales and related compliance evidence so portal reporting and target reconciliation remain supportable.'
                },
                {
                  title: 'Complete Required Portal Returns / Information',
                  desc: 'Submit returns, information, confirmations or other periodic portal requirements applicable to the registered entity within prescribed timelines.'
                },
                {
                  title: 'Deal with Registered E-Waste Stakeholders',
                  desc: 'Coordinate EPR fulfilment with eligible registered recyclers and other registered stakeholders where the rules require registered-channel dealing.'
                },
                {
                  title: 'akshayb2bsolutions Ongoing Compliance Support',
                  desc: 'Our compliance desk can help track recurring EPR actions, documentation gaps, portal updates and filing readiness so your team does not lose sight of ongoing obligations.'
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

        {/* 14. E-WASTE EPR ROLES COMPARISON */}
        <section id="epr-roles" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Compliance Matrix
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                E-Waste EPR Stakeholder Obligations
              </h2>
            </div>

            <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left text-xs border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-[#0B3D91] text-white">
                    <th className="p-3.5 font-bold border-r border-blue-800">Parameter</th>
                    <th className="p-3.5 font-bold bg-orange-500 text-[#0B3D91] border-r border-orange-600 text-center">Producer</th>
                    <th className="p-3.5 font-bold border-r border-blue-800 text-center">Importer</th>
                    <th className="p-3.5 font-bold border-r border-blue-800 text-center">Recycler</th>
                    <th className="p-3.5 font-bold text-center">Refurbisher</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">1. Role</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold text-orange-800 border-r border-slate-200">
                      Manufacturers of notified EEE codes.
                    </td>
                    <td className="p-3.5 border-r border-slate-200">Brings EEE/Used EEE into India.</td>
                    <td className="p-3.5 border-r border-slate-200">Processes E-Waste into raw materials.</td>
                    <td className="p-3.5 text-center">Extends life of used EEE products.</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">2. EPR Obligation</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold text-orange-800 border-r border-slate-200 text-center">
                      Recycling Targets (EEE Categories)
                    </td>
                    <td className="p-3.5 border-r border-slate-200 text-center">Imported Qty Based Targets</td>
                    <td className="p-3.5 border-r border-slate-200 text-center">Certificate Generation</td>
                    <td className="p-3.5 text-center">Certificate Generation (Refurbish)</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">3. Target Fulfillment</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold text-rose-700 border-r border-slate-200 text-center">
                      Purchase EPR Credits
                    </td>
                    <td className="p-3.5 border-r border-slate-200 text-center font-semibold text-rose-700">Purchase EPR Credits</td>
                    <td className="p-3.5 border-r border-slate-200 text-center font-semibold text-rose-700">Trade EPR Credits</td>
                    <td className="p-3.5 text-center font-semibold text-rose-700">Trade EPR Credits</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">4. Return Filing</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold border-r border-slate-200 text-center">Annual Portal Return</td>
                    <td className="p-3.5 border-r border-slate-200 text-center">Annual Portal Return</td>
                    <td className="p-3.5 border-r border-slate-200 text-center">Quarterly/Annual Portal Return</td>
                    <td className="p-3.5 text-center">Quarterly/Annual Portal Return</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 15. E-WASTE COMPLIANCE ARCHITECTURE */}
        <section id="compliance-architecture" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Statutory Framework
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Operational Realities of E-Waste EPR
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed text-center max-w-3xl mx-auto">
              The E-Waste (Management) Rules, 2022 require a robust digital record-keeping system for every gram of electronic waste generated, collected, and processed in India.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {[
                {
                  title: '106 Notified EEE Categories',
                  desc: 'Compliance applies to specific codes ranging from IT/Telecom equipment to Large Appliances and Medical Devices.'
                },
                {
                  title: 'Solar Cell / Module Exclusion',
                  desc: 'Specific exemptions and separate handling rules apply for solar photovoltaic cells and modules.'
                },
                {
                  title: 'Inventory Traceability',
                  desc: 'Producers must maintain detailed records of products sold to allow for accurate end-of-life target calculation.'
                },
                {
                  title: 'Authorized Recycler Network',
                  desc: 'Physical recycling must only happen through SPCB/CPCB authorized recyclers to generate valid portal credits.'
                },
                {
                  title: 'Environmental Compensation (EC)',
                  desc: 'Failure to purchase required credits by the deadline attracts EC fines, which do not exempt you from the original obligation.'
                },
                {
                  title: 'Portal Query Resolution',
                  desc: 'Our experts handle technical queries and documentation mismatches raised by CPCB officials during the registration audit.'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
                  <Cpu className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm text-slate-700">
                    <strong className="text-slate-900 font-bold block mb-0.5">{item.title}</strong>
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="tax-implications" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Scope & Cost Planning
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Compliance & Cost Factors for EPR E-Waste
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              There is no universal one-price EPR E-Waste case. Compliance scope depends on applicant category, EEE codes, product quantities, historical data, CPCB portal requirements and ongoing obligation support.
            </p>

            <div className="space-y-3">
              {[
                {
                  title: 'Pricing Depends on Actual Scope',
                  desc: 'Consultancy pricing should be based on your applicant category, number of EEE codes, document readiness, portal workload and support required after registration.'
                },
                {
                  title: 'Statutory / Portal Charges',
                  desc: 'Government/CPCB fees, annual maintenance charges and other statutory amounts may apply separately as prescribed and can change based on category or notified structure.'
                },
                {
                  title: 'EEE Code & Obligation Mapping',
                  desc: 'Applicable obligations are linked to covered EEE codes and relevant product quantities/data recognised under the CPCB framework rather than a flat one-size-fits-all package.'
                },
                {
                  title: 'Keep GST & IEC Details Aligned',
                  desc: 'Importers should keep GST and IEC information aligned with the legal entity details used for EPR registration; inconsistent data can delay review or amendment processing.'
                },
                {
                  title: 'Maintain EPR Evidence & Records',
                  desc: 'Maintain product, sales/import, recycler and EPR-certificate records so the business can support portal filings and demonstrate compliance if reviewed.'
                },
                {
                  title: 'akshayb2bsolutions EPR Planning Support',
                  desc: 'Our compliance team helps organise registration data, product mapping, EPR evidence and portal actions according to your actual producer profile.'
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
              EPR compliance should be budgeted as an operating compliance function. Costs can include statutory portal charges, professional support, internal data management and EPR certificate procurement for applicable recycling obligations.
            </p>

            <div className="space-y-3">
              {[
                {
                  title: 'Donations & Grants',
                  desc: 'Plan the compliance budget early so registration, annual maintenance, data preparation and obligation fulfilment do not become last-minute operational blockers.'
                },
                {
                  title: 'Commercial Business Loans & Overdraft Facilities',
                  desc: 'Businesses can build recurring EPR compliance costs into product, import and channel economics rather than treating EPR as a one-time certificate expense.'
                },
                {
                  title: 'Pradhan Mantri MUDRA Yojana (PMMY)',
                  desc: "EPR certificate procurement costs, where applicable, depend on market availability, eligible recycler output and the producer's obligation profile."
                },
                {
                  title: 'Registered Recycler Network',
                  desc: 'Producers should work with registered recyclers that are eligible for the relevant EEE codes when fulfilling obligations through EPR certificates.'
                },
                {
                  title: 'Supplier Trade Credit and Vendor Credit',
                  desc: 'Maintain commercial and compliance records for EPR certificate transactions and related portal activity to support reconciliation and audits/reviews.'
                },
                {
                  title: 'Equity Financing Limitations',
                  desc: 'If your business expands into new EEE categories or changes its legal/import profile, reassess EPR scope and complete required portal amendments before compliance gaps arise.'
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
                  desc: 'We assess your business role, brand/import model, product categories and EEE codes to define the practical EPR registration and compliance scope.'
                },
                {
                  title: 'Portal-Ready Document Preparation',
                  desc: 'Our compliance specialists organise KYC, registrations, product data, EEE mapping and declarations into a structured filing set for CPCB portal submission.'
                },
                {
                  title: 'CPCB Query & Follow-Up Support',
                  desc: 'We support CPCB observations, corrections and clarification responses so your application can move forward with fewer avoidable delays.'
                },
                {
                  title: 'EEE Code & Target Guidance',
                  desc: 'Get guidance on relevant EEE code mapping, sales/import data readiness and the compliance information needed to understand likely EPR obligations.'
                },
                {
                  title: 'Dedicated Post-Registration Growth Advisory',
                  desc: 'Get practical guidance on portal updates, EPR certificate workflow, recycler coordination and recurring compliance readiness after registration.'
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
                Why Businesses Choose akshayb2bsolutions for EPR E-Waste
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
                  desc: 'A digital-first workflow for document collection, EEE mapping, CPCB portal preparation and application follow-up without unnecessary office visits.',
                  icon: Clock
                },
                {
                  title: 'Affordable Transparent Pricing',
                  desc: 'Scope-first pricing with no misleading fixed-fee promise: we review your EEE codes and requirements first, then share a clear professional quote and statutory-fee note.',
                  icon: Tag
                },
                {
                  title: 'Trusted by Thousands',
                  desc: 'Pan-India compliance support for businesses that want practical guidance, document coordination and a structured CPCB EPR filing process.',
                  icon: Users
                },
                {
                  title: 'Automated Compliance Alerts',
                  desc: 'Stay organised for recurring EPR actions, portal updates and compliance checkpoints with structured reminders and advisor support.',
                  icon: Zap
                },
                {
                  title: 'Secure and Confidential',
                  desc: 'Enterprise-grade 256-bit SSL encryption protecting your business KYC, product information, sales/import records and compliance documentation.',
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
              Start Your EPR E-Waste Compliance with Clarity
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Share your product categories, business role and basic documents. Our team will assess the likely EPR scope and explain the filing path before you commit to a package.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => scrollToSection('lead-capture-widget')}
                className="px-6 py-3 rounded-xl bg-[#FF5A00] hover:bg-orange-500 text-[#0B3D91] font-black text-xs sm:text-sm shadow-xl transition-all cursor-pointer"
              >
                Get EPR E-Waste Quote
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
                  Track Your EPR Application & Compliance
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
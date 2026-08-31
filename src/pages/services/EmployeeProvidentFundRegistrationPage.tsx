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

interface EmployeeProvidentFundRegistrationPageProps {
  onBackToHome: () => void;
  onSelectService: (serviceName: string) => void;
  onOpenBrochure: () => void;
  onOpenAppointment: () => void;
}

// 6 Accordion FAQs for Employee Provident Fund (EPF) Registration
const FAQ_ITEMS = [
  { q: 'What is Employee Provident Fund Registration?', a: 'Employee Provident Fund (EPF) Registration is the process through which an eligible establishment registers with the Employees’ Provident Fund Organisation (EPFO) so that provident fund benefits can be provided to eligible employees and statutory contributions can be managed online.' },
  { q: 'Who needs EPF Registration in India?', a: 'EPF registration generally applies to establishments covered under the Employees’ Provident Funds and Miscellaneous Provisions Act, 1952, including establishments that meet the applicable employee-strength or coverage conditions. Voluntary registration may also be possible subject to EPFO rules.' },
  { q: 'What documents are generally required for EPF registration?', a: 'Common documents include establishment PAN, registration or incorporation proof, address proof, bank details, employer or authorised signatory KYC, employee details, and other establishment information required on the EPFO portal.' },
  { q: 'How long does EPF registration take?', a: 'The timeline depends on document readiness, establishment details, portal verification, and any clarification requested by EPFO. Complete and accurate information can help avoid unnecessary delays.' },
  { q: 'What happens after EPF registration?', a: 'After registration, the establishment receives an EPF establishment code and can proceed with employee enrolment, UAN-related processes, contribution payments, ECR filing, and other ongoing EPFO compliances as applicable.' },
  { q: 'Is EPF registration a one-time process?', a: 'The establishment registration is generally a one-time process, but ongoing compliance continues through employee enrolment, contribution deposits, ECR filing, employee exits, KYC updates, and other EPFO requirements.' }
]

// Related services cross-linking items — employment and business compliance
const RELATED_SERVICES = [
  {
    title: 'ESI Registration',
    desc: 'Employee State Insurance registration support for eligible establishments and employees.',
    img: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&auto=format&fit=crop&q=80',
    price: '₹4,999'
  },
  {
    title: 'Professional Tax Registration',
    desc: 'Professional Tax registration and enrolment support where applicable under state law.',
    img: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&auto=format&fit=crop&q=80',
    price: '₹4,999'
  },
  {
    title: 'Shop & Establishment Registration',
    desc: 'Registration support under the applicable state Shops and Establishments law.',
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=80',
    price: '₹9,999'
  },
  {
    title: 'Payroll Compliance Support',
    desc: 'Payroll compliance assistance for salary processing, statutory deductions, and employee records.',
    img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&auto=format&fit=crop&q=80',
    price: '₹4,999'
  },
  {
    title: 'GST Registration',
    desc: 'GST registration support for eligible businesses and establishments across India.',
    img: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&auto=format&fit=crop&q=80',
    price: '₹1,999'
  },
  {
    title: 'MSME Udyam Registration',
    desc: 'Udyam registration support for eligible micro, small, and medium enterprises.',
    img: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&auto=format&fit=crop&q=80',
    price: '₹999'
  },
  {
    title: 'Trade License',
    desc: 'Trade License application assistance for eligible businesses as required by local authorities.',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&auto=format&fit=crop&q=80',
    price: '₹9,999'
  },
  {
    title: 'MSME Udyam Registration',
    desc: 'Udyam registration support for eligible micro, small, and medium enterprises.',
    img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&auto=format&fit=crop&q=80',
    price: '₹499'
  },
  {
    title: 'Trademark Registration',
    desc: 'Protect your business name, logo, and brand identity through trademark registration support.',
    img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=80',
    price: '₹1,499'
  }
]

export const EmployeeProvidentFundRegistrationPage: React.FC<EmployeeProvidentFundRegistrationPageProps> = ({
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
  const [businessType, setBusinessType] = useState('EPF');
  const [businessActivity, setBusinessActivity] = useState(BUSINESS_ACTIVITIES[0]);
  const [panNumber, setPanNumber] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('Employee Provident Fund Registration Package (₹999)');
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
            <span className="text-slate-900 font-bold">Employee Provident Fund Registration</span>
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
                    Employee Provident Fund Registration
                  </h1>
                  <div className="space-y-0.5">
                    <p className="text-xl sm:text-2xl font-black text-orange-300 antialiased">
                      Get EPF Registration support at just{' '}
                      <span className="underline decoration-[#FF5A00] decoration-2 underline-offset-4 font-black text-white">
                        ₹999/- only!
                      </span>
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-blue-100 antialiased">
                      Professional service fee
                    </p>
                  </div>
                </div>

                {/* Definition: 2-3 Line Description */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                  Employee Provident Fund (EPF) Registration helps eligible establishments register with the Employees’ Provident Fund Organisation (EPFO) for provident fund compliance. It supports employer registration, employee enrolment, UAN-linked records, statutory contribution management, and ongoing EPF filings as applicable.
                </p>

                {/* 6 Feature Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Clock className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Online Registration Support</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Handshake className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Employer & Employee Coverage</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <FileSignature className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>EPFO Application Assistance</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Zap className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Fast &amp; Hassle-Free</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Gavel className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>EPFO Portal Filing</span>
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
                    <span>Fast-Track Process</span>
                  </div>

                  {formSubmitted ? (
                    <div className="text-center py-8 space-y-4 animate-in fade-in">
                      <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Application Received!</h3>
                      <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
                        Thank you <span className="font-bold">{applicantName}</span>. Our EPF registration specialist has been assigned to your application. We will call you within 15 minutes at <span className="font-bold">{applicantMobile}</span>.
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
                              ₹999/- only
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-[11px] font-bold text-slate-800 block leading-tight">
                            Service Fee
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
                                Select State of Establishment *
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
                                Select the state where your establishment is located so our team can review the applicable employer and labour-compliance details.
                              </span>
                            </div>

                            <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100 text-xs text-slate-600 space-y-1">
                              <div className="flex items-center gap-1.5 font-bold text-[#0B3D91]">
                                <ShieldCheck className="w-4 h-4 text-[#FF5A00]" />
                                <span>Why register with akshayb2bsolutions?</span>
                              </div>
                              <p className="text-[11px]">
                                Complete EPF registration assistance, establishment-detail review, document checking, EPFO portal filing guidance, and dedicated support with minimal paperwork.
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
                                  Establishment Type *
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
                                Employer / Authorized Signatory Name *
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
                                Employer / Authorized Signatory PAN Number (Optional for quote)
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
                                Select EPF Registration Package *
                              </label>
                              <select
                                value={selectedPackage}
                                onChange={(e) => setSelectedPackage(e.target.value)}
                                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                              >
                                <option value="Employee Provident Fund Registration Package (₹999)">Employee Provident Fund Registration Package — ₹999 Service Fees</option>
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
                Choose Your EPF Registration Package
              </h2>
              <p className="text-sm text-slate-500 mt-2 mx-auto max-w-2xl text-center">
                This package includes professional EPF registration guidance, document review, EPFO portal filing assistance, and dedicated compliance support.
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
                      INSTANT ₹1,000 LESS
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0D47A1]">Basic Package</h3>
                  <p className="text-sm text-slate-500 mb-6">
                    Essential EPF registration assistance for eligible employers and establishments in India.
                  </p>

                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <div className="flex items-baseline gap-3">
                      <span className="text-lg text-slate-400 line-through">₹1,999</span>
                      <span className="text-4xl font-extrabold text-[#0D47A1]">₹999</span>
                    </div>
                    <span className="text-xs text-slate-500 font-medium block mt-1">
                      Professional service fee
                    </span>
                  </div>

                  {/* Checklist */}
                  <div className="space-y-3.5 mb-8">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">PACKAGE INCLUSIONS:</p>
                    {[
                      'EPF Registration Application Assistance',
                      'Employer & Establishment Detail Review',
                      'EPFO Portal Filing Support',
                      'Document & Eligibility Review',
                      'Employee / UAN Process Guidance',
                      'Dedicated EPF Compliance Specialist Support'
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
                    setSelectedPackage('Employee Provident Fund Registration Package (₹999)');
                    scrollToSection('lead-capture-widget');
                  }}
                  className="w-full py-4 rounded-xl bg-[#0D47A1] hover:bg-blue-900 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer text-center"
                >
                  Get Started with Basic Package
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
                What is Employee Provident Fund Registration?
              </h2>
            </div>

            {/* Definition paragraph */}
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              EPF registration connects an eligible establishment with the EPFO framework for provident fund compliance. It allows employers to manage establishment registration, employee enrolment, UAN-linked records, statutory contributions, and related EPF filings through the prescribed online process.
            </p>

            {/* 5 Bullets with bold lead-ins */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Target Business Audience:</strong>
                  Suitable for establishments that fall under EPF coverage requirements or employers seeking applicable provident fund registration and employee-benefit compliance support.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Operational Flexibility:</strong>
                  Proper establishment and employee information helps ensure accurate EPFO registration and smoother ongoing contribution and filing compliance.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Defined Legal Structure:</strong>
                  EPF obligations depend on statutory coverage, establishment category, employee strength, wage conditions, and the applicable provisions administered by EPFO.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Optional but Valuable Registration:</strong>
                  Where EPF coverage becomes applicable, timely registration and compliance are important for managing employer obligations and employee provident fund benefits.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Growth and Capital Limitations:</strong>
                  Proper EPF compliance supports employee social-security benefits, organised payroll processes, transparent contribution records, and statutory employer compliance.
                </div>
              </div>
            </div>

            {/* Closing Summary */}
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-2">
              In summary, EPF registration helps eligible employers establish the required EPFO compliance framework. Our team supports document review, registration filing, employee-related guidance, and post-registration compliance assistance.
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
                How EPF Registration Works in India
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              EPF registration is an online statutory process for eligible establishments to obtain registration under the EPFO system. The employer submits establishment, authorised signatory, banking, and employee-related information through the prescribed portal process.
            </p>

            <p className="text-slate-700 text-sm leading-relaxed">
              After successful registration, the establishment receives its EPF registration details and can proceed with employee enrolment, UAN-linked processes, contribution payments, ECR filing, and other applicable EPFO compliances.
            </p>

            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B3D91] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#FF5A00]" />
                <span>How akshayb2bsolutions Streamlines Your Registration:</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our compliance desk reviews establishment documents, prepares the required registration details, assists with EPFO portal filing, and supports clarification or follow-up where required.
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
                Key Benefits of EPF Registration
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Statutory EPF Compliance',
                  desc: 'Helps eligible employers meet provident fund registration obligations and maintain a formal EPFO compliance framework.'
                },
                {
                  title: 'Employee Social-Security Benefits',
                  desc: 'Supports provident fund benefits for eligible employees through structured employer and employee contributions.'
                },
                {
                  title: 'Digital Registration Process',
                  desc: 'EPF registration and related compliance activities are handled online, subject to accurate documents and portal verification.'
                },
                {
                  title: 'Organised Payroll Compliance',
                  desc: 'Integrates provident fund obligations into a more organised employee payroll and statutory compliance process.'
                },
                {
                  title: 'UAN-Linked Employee Records',
                  desc: 'Supports employee enrolment and UAN-linked provident fund records as required under the EPFO system.'
                },
                {
                  title: 'Long-Term Employee Savings',
                  desc: 'Provident fund contributions support long-term employee savings and eligible social-security benefits under applicable rules.'
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
                Checklist Before EPF Registration
              </h2>
            </div>

            <div className="space-y-3">
              {[
                {
                  title: 'Establishment Registration Details',
                  desc: 'Keep the establishment name, legal constitution, registration details, and business address ready for the EPFO application.'
                },
                {
                  title: 'Business Activity & Establishment Category',
                  desc: 'Clearly identify the nature of business and establishment category for accurate EPF registration information.'
                },
                {
                  title: 'Employee Strength & Coverage Details',
                  desc: 'Keep accurate employee-strength and workforce details ready to assess and complete applicable EPF coverage requirements.'
                },
                {
                  title: 'Authorized Signatory KYC',
                  desc: 'Keep PAN, Aadhaar or accepted KYC details, mobile number, and email of the employer or authorised signatory ready.'
                },
                {
                  title: 'Establishment Address Proof',
                  desc: 'Prepare valid proof of the establishment address such as utility bill, ownership proof, rent agreement, or other accepted document.'
                },
                {
                  title: 'Assess EPF Coverage & Eligibility',
                  desc: 'Keep establishment bank account details and supporting proof ready for verification and future statutory payments.'
                },
                {
                  title: 'Employee Data Readiness',
                  desc: 'Prepare employee identity, joining, wage, and other required details for enrolment and UAN-related compliance as applicable.'
                },
                {
                  title: 'Pre-Filing Verification',
                  desc: 'Our compliance team reviews establishment and employer details to identify discrepancies and improve filing accuracy before submission.'
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
                Eligibility Criteria for EPF Registration
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              EPF registration eligibility depends on the establishment’s coverage under the Employees’ Provident Funds and Miscellaneous Provisions Act, 1952 and applicable EPFO rules. Coverage can depend on establishment type, employee strength, and other statutory conditions.
            </p>

            <div className="space-y-3">
              {[
                {
                  title: 'Covered Establishment',
                  desc: 'The establishment should fall within applicable EPF coverage conditions or qualify for registration under the relevant EPFO provisions.'
                },
                {
                  title: 'Employer / Authorized Signatory',
                  desc: 'An employer or authorised signatory with valid identity, contact, and establishment credentials should complete the registration process.'
                },
                {
                  title: 'Valid Establishment Details',
                  desc: 'The legal establishment name, PAN, address, registration details, and business information should be accurate and consistent.'
                },
                {
                  title: 'Employee Coverage Information',
                  desc: 'Employee-strength and workforce information should be available to determine and maintain applicable EPF coverage.'
                },
                {
                  title: 'Establishment Address in India',
                  desc: 'A valid establishment address with acceptable supporting proof is required for registration records.'
                },
                {
                  title: 'Compliance with EPFO Requirements',
                  desc: 'The establishment must provide the information and documents required by EPFO and comply with applicable provident fund rules after registration.'
                },
                {
                  title: 'Pre-Registration Verification',
                  desc: 'akshayb2bsolutions reviews employer KYC, establishment records, employee information, and application details before filing.'
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
                Documents Required for EPF Registration
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              To process EPF registration smoothly, establishment records, employer or authorised signatory KYC, address proof, bank details, and applicable employee information are generally required. Documents can be collected digitally.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Establishment PAN / Business PAN',
                  desc: 'Copy of the establishment PAN or applicable business PAN used for statutory registration and verification.'
                },
                {
                  title: 'Employer / Authorized Signatory KYC',
                  desc: 'PAN, Aadhaar or other accepted identity and address proof of the employer or authorised signatory, as applicable.'
                },
                {
                  title: 'Establishment Address Proof',
                  desc: 'Recent utility bill, ownership document, rent agreement, or other acceptable proof of the establishment address.'
                },
                {
                  title: 'Business Registration / Incorporation Proof',
                  desc: 'Certificate of incorporation, registration certificate, licence, partnership deed, or other applicable proof of establishment constitution.'
                },
                {
                  title: 'Bank Account Proof',
                  desc: 'Cancelled cheque, bank statement, or other accepted document showing the establishment bank account details.'
                },
                {
                  title: 'Employee & Establishment Data Support',
                  desc: 'Our compliance team helps organise employer, establishment, bank, and employee data in the format required for the EPF registration process.'
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
                Step-by-Step EPF Registration Process
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  step: 'Step 1',
                  title: 'Assess EPF Coverage & Eligibility',
                  desc: 'We review your establishment type, employee strength, and available records to understand the applicable EPF registration requirement.'
                },
                {
                  step: 'Step 2',
                  title: 'Collect Employer & Establishment Documents',
                  desc: 'Provide establishment PAN, registration proof, address proof, bank details, authorised signatory KYC, and required employee information.'
                },
                {
                  step: 'Step 3',
                  title: 'Prepare EPFO Registration Details',
                  desc: 'Our team organises the establishment and employer information required for the online EPFO registration process.'
                },
                {
                  step: 'Step 4',
                  title: 'Submit EPF Registration Application',
                  desc: 'We assist with submission of the EPF registration application and required establishment information through the prescribed EPFO process.'
                },
                {
                  step: 'Step 5',
                  title: 'Verification & Clarification Support',
                  desc: 'We assist with document verification and any registration-related clarification or correction that may be required during processing.'
                },
                {
                  step: 'Step 6',
                  title: 'Registration Completion & Compliance Guidance',
                  desc: 'After registration, receive guidance on establishment code usage, employee enrolment, UAN processes, ECR filing, contributions, and ongoing EPF compliance.'
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
                Legal & Compliance Position of EPF Registration
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
                <h4 className="text-sm font-bold text-[#0B3D91]">1. Legal Identity</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  EPF registration is a statutory labour-compliance registration administered through the Employees’ Provident Fund Organisation for establishments covered under applicable provident fund law.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
                <h4 className="text-sm font-bold text-[#0B3D91]">2. Compliance Requirements</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Post-registration compliance may include employee enrolment, contribution deposits, ECR filing, employee exit updates, KYC maintenance, and other EPFO requirements as applicable.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
                <h4 className="text-sm font-bold text-[#0B3D91]">3. Advantages &amp; Limitations</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Offers speed, shared responsibility, and pooled resources, but registered firms still lack perpetual succession — the entity may dissolve upon a employer / authorised signatory\'s exit, unless the deed states otherwise.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
                <h4 className="text-sm font-bold text-[#0B3D91]">4. Risk &amp; Responsibility</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The employer is responsible for maintaining accurate employee records, deducting and depositing applicable contributions, and completing required EPFO filings within prescribed timelines.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-slate-700 space-y-1">
              <h4 className="font-bold text-[#0B3D91]">5. akshayb2bsolutions&apos;s Role in Explaining Legal Implications:</h4>
              <p>
                Our compliance advisors guide you on EPF registration, employee enrolment, UAN-related processes, contribution filings, and ongoing EPFO compliance requirements.
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
              After EPF registration, employers should follow ongoing EPFO compliance requirements to maintain accurate employee records and avoid statutory defaults, interest, or penalties.
            </p>

            <div className="space-y-3">
              {[
                {
                  title: 'Employee Enrolment & UAN Mapping',
                  desc: 'Add eligible employees to the establishment and complete UAN generation or linking processes as applicable.'
                },
                {
                  title: 'Monthly EPF Contribution Calculation',
                  desc: 'Calculate employer and employee provident fund contributions based on applicable wages and statutory rules.'
                },
                {
                  title: 'ECR Filing & Contribution Payment',
                  desc: 'File the Electronic Challan-cum-Return (ECR) and deposit applicable EPF contributions within the prescribed due dates.'
                },
                {
                  title: 'Employee Exit & Transfer Updates',
                  desc: 'Update employee exit details and support transfer or service-history processes where applicable.'
                },
                {
                  title: 'KYC & Member Detail Updates',
                  desc: 'Keep employee KYC, bank, Aadhaar, nomination, and other member details updated as required on the EPFO system.'
                },
                {
                  title: 'Record Maintenance & Reconciliation',
                  desc: 'Maintain payroll and EPF records and regularly reconcile contribution and employee account information.'
                },
                {
                  title: 'akshayb2bsolutions EPF Compliance Support',
                  desc: 'Our compliance team supports periodic EPF filing reminders, employee updates, contribution guidance, and registration-related assistance.'
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
                Compliance Snapshot
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                EPF Registration: Key Compliance Snapshot
              </h2>
            </div>

            <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left text-xs border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-[#0B3D91] text-white">
                    <th className="p-3.5 font-bold border-r border-blue-800">Parameter</th>
                    <th className="p-3.5 font-bold bg-orange-500 text-[#0B3D91] border-r border-orange-600">
                      EPF
                    </th>
                    <th className="p-3.5 font-bold border-r border-blue-800">Coverage</th>
                    <th className="p-3.5 font-bold border-r border-blue-800">Key Requirement</th>
                    <th className="p-3.5 font-bold">Ongoing Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">1. Governing Law</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold text-orange-800 border-r border-slate-200">
                      Employees’ Provident Funds & Miscellaneous Provisions Act, 1952
                    </td>
                    <td className="p-3.5 border-r border-slate-200">Eligible establishment under applicable rules</td>
                    <td className="p-3.5 border-r border-slate-200">Valid establishment & employer data</td>
                    <td className="p-3.5">Follow EPFO filing requirements</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">2. Number of Owners</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold text-orange-800 border-r border-slate-200">
                      Coverage depends on applicable establishment conditions
                    </td>
                    <td className="p-3.5 border-r border-slate-200">Employee-strength / coverage conditions</td>
                    <td className="p-3.5 border-r border-slate-200">Employer / authorised signatory</td>
                    <td className="p-3.5">Employee enrolment as applicable</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">3. Liability Exposure</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold text-rose-700 border-r border-slate-200">
                      Statutory employer responsibility
                    </td>
                    <td className="p-3.5 border-r border-slate-200">Coverage obligation when applicable</td>
                    <td className="p-3.5 border-r border-slate-200">Accurate contribution calculation</td>
                    <td className="p-3.5 text-orange-800 font-semibold">Timely deposit & filing</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">4. Taxation</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold border-r border-slate-200">
                      Provident fund contributions governed by applicable EPF rules
                    </td>
                    <td className="p-3.5 border-r border-slate-200">Employee & employer contribution records</td>
                    <td className="p-3.5 border-r border-slate-200">ECR / challan compliance</td>
                    <td className="p-3.5 text-orange-800 font-semibold">Member account updates</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">5. Decision-Making</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold border-r border-slate-200">
                      Employer-managed statutory compliance
                    </td>
                    <td className="p-3.5 border-r border-slate-200">Employer administers compliance</td>
                    <td className="p-3.5 border-r border-slate-200">EPFO rules & establishment records</td>
                    <td className="p-3.5">Employee record maintenance</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">6. Compliance Burden</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold text-orange-800 border-r border-slate-200">
                      Monthly/periodic EPFO compliance as applicable
                    </td>
                    <td className="p-3.5 border-r border-slate-200">Registration + employee data</td>
                    <td className="p-3.5 border-r border-slate-200">Periodic ECR & contribution filings</td>
                    <td className="p-3.5">Ongoing updates & reconciliation</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">7. Credibility &amp; Trust</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold border-r border-slate-200">
                      Supports formal employee-benefit compliance
                    </td>
                    <td className="p-3.5 border-r border-slate-200">Employee benefit compliance</td>
                    <td className="p-3.5 border-r border-slate-200">Organised statutory records</td>
                    <td className="p-3.5 text-orange-800 font-semibold">Formal EPFO compliance trail</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">8. Ideal For</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold text-slate-900 border-r border-slate-200">
                      Eligible establishments and employers
                    </td>
                    <td className="p-3.5 border-r border-slate-200">Covered establishments</td>
                    <td className="p-3.5 border-r border-slate-200">Employers with eligible employees</td>
                    <td className="p-3.5">Businesses requiring EPF compliance</td>
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
                Contribution Framework
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                EPF Contribution & Compliance Framework
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              EPF compliance is primarily about employer and employee provident fund contributions, employee records, UAN-linked processes, ECR filing, and timely deposits under applicable EPFO rules. Exact contribution treatment can vary based on statutory provisions and employee circumstances.
            </p>

            <div className="space-y-3">
              {[
                {
                  title: 'Employer & Employee Contributions',
                  desc: 'EPF generally involves prescribed employer and employee contributions, subject to applicable wage, coverage, and statutory rules.'
                },
                {
                  title: 'Monthly ECR & Payment Compliance',
                  desc: 'Employers should file the Electronic Challan-cum-Return and deposit applicable contributions within prescribed timelines.'
                },
                {
                  title: 'UAN & Member Account Management',
                  desc: 'Eligible employees are managed through UAN-linked member accounts for contribution, service, transfer, and withdrawal-related processes.'
                },
                {
                  title: 'Employee KYC & Nomination Updates',
                  desc: 'Accurate Aadhaar, PAN, bank, nomination, and other member information helps reduce claim and account mismatches.'
                },
                {
                  title: 'Payroll & EPF Reconciliation',
                  desc: 'Payroll records should be reconciled with EPF contributions and employee data to maintain accurate statutory records.'
                },
                {
                  title: 'akshayb2bsolutions EPF Compliance Support',
                  desc: 'Our compliance team supports registration, employee enrolment guidance, ECR-related processes, contribution records, and ongoing EPFO compliance assistance.'
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
                Employee Benefit Administration
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Post-Registration EPF Services
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              After EPF registration, employers may need recurring support for employee onboarding, UAN management, contribution filing, exits, transfers, KYC updates, and statutory record maintenance.
            </p>

            <div className="space-y-3">
              {[
                {
                  title: 'Employee Onboarding & UAN Support',
                  desc: 'Support for adding eligible employees and completing UAN generation or linking processes as applicable.'
                },
                {
                  title: 'Monthly ECR Filing Support',
                  desc: 'Assistance with preparing and filing monthly contribution details through the EPFO compliance process.'
                },
                {
                  title: 'Contribution Payment Guidance',
                  desc: 'Guidance for timely deposit of applicable employer and employee EPF contributions and challan records.'
                },
                {
                  title: 'Employee Exit & Transfer Support',
                  desc: 'Support for employee exit updates and provident fund transfer-related processes where applicable.'
                },
                {
                  title: 'KYC & Member Detail Corrections',
                  desc: 'Assistance with correcting or updating employee KYC and member details subject to EPFO procedures.'
                },
                {
                  title: 'Record Reconciliation',
                  desc: 'Reconcile payroll, employee records, and EPF contribution data to reduce mismatches and compliance issues.'
                },
                {
                  title: 'akshayb2bsolutions Ongoing EPF Support',
                  desc: 'We support employers with recurring EPF compliance tasks, employee updates, filing guidance, and document organisation.'
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
                  title: 'EPF Coverage & Registration Assessment',
                  desc: 'We review establishment type, employee strength, business records, and available documents to assess EPF registration readiness.'
                },
                {
                  title: 'Document Review & Digital Verification',
                  desc: 'Our compliance specialists review establishment PAN, registration proof, address proof, bank details, and authorised signatory KYC before filing.'
                },
                {
                  title: 'EPFO Filing & Query Support',
                  desc: 'We assist with EPFO registration filing and support clarification or correction requests related to the application.'
                },
                {
                  title: 'Employee Enrolment Guidance',
                  desc: 'Receive guidance for employee enrolment, UAN linking, and member-detail readiness after establishment registration.'
                },
                {
                  title: 'Dedicated Post-Registration Compliance Support',
                  desc: 'Get support for ECR filing, contribution processes, employee updates, and recurring EPFO compliance requirements.'
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
                Why Employers Trust akshayb2bsolutions
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
                  desc: 'Zero hidden professional costs with clear EPF registration support pricing starting at just ₹999.',
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
                  desc: 'Enterprise-grade 256-bit SSL encryption protecting employer KYC, employee information, financial records, and business documentation.',
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
              Register for EPF with Confidence
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Get professional EPF registration assistance with document review, online filing support, and dedicated guidance for employer and employee compliance requirements.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => scrollToSection('lead-capture-widget')}
                className="px-6 py-3 rounded-xl bg-[#FF5A00] hover:bg-orange-500 text-[#0B3D91] font-black text-xs sm:text-sm shadow-xl transition-all cursor-pointer"
              >
                Start EPF Registration at ₹999/-
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
                  Track Your EPF Registration in Real-Time
                </h3>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Download the akshayb2bsolutions mobile application for iOS &amp; Android. Access your registration updates, compliance documents, and get direct support for EPF-related queries.
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
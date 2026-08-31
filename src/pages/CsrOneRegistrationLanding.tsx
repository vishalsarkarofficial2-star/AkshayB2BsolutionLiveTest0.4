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

interface NGORegistrationLandingProps {
  onBackToHome: () => void;
  onSelectService: (serviceName: string) => void;
  onOpenBrochure: () => void;
  onOpenAppointment: () => void;
}

// CSR-1 Registration FAQs based on MCA CSR-1 filing requirements
const FAQ_ITEMS = [
  { q: 'What is CSR-1 Registration in India?', a: 'CSR-1 Registration is the MCA filing through which eligible entities such as registered trusts, societies and Section 8 companies register their details to become eligible for undertaking CSR activities and receiving CSR funding, subject to applicable law and eligibility.' },
  { q: 'Who can apply for CSR-1 Registration?', a: 'Eligible entities may include Section 8 companies, registered public charitable trusts, societies and certain government/statutory bodies that meet the applicable CSR eligibility conditions. The entity should have the required registrations and documents, including applicable 12A/12AB and 80G status where required.' },
  { q: 'What documents are required for CSR-1 filing?', a: 'Common requirements include the entity registration certificate, PAN, 12A/12AB and 80G documents where applicable, details of directors/trustees/office bearers, authorised signatory details and a valid Digital Signature Certificate (DSC).' },
  { q: 'How is CSR-1 filed?', a: 'The CSR-1 form is filed online on the MCA portal. The authorised signatory signs the form digitally and the filing is certified by a practicing CA, CS or CMA as applicable.' },
  { q: 'Is CSR-1 required to receive CSR funds?', a: 'Eligible implementing entities generally need to complete CSR-1 registration to undertake CSR activities as an implementing agency and receive CSR contributions under the applicable Companies Act and CSR Rules.' },
  { q: 'How long does CSR-1 registration take?', a: 'Processing time depends on document readiness, DSC validity, professional certification and MCA processing. A practical timeline is commonly around 7–15 working days after a complete and correctly prepared filing, subject to MCA processing.' }
]

// Related legal & compliance services for CSR-1 applicants
const RELATED_SERVICES = [
  {
    title: '12A & 80G Registration',
    desc: 'Tax registration support for eligible charitable entities preparing for CSR funding and ongoing compliance.',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&auto=format&fit=crop&q=80',
    price: '₹4,999'
  },
  {
    title: 'NGO Darpan Registration',
    desc: 'NGO Darpan registration assistance for eligible organisations seeking government and institutional opportunities.',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&auto=format&fit=crop&q=80',
    price: '₹1,999'
  },
  {
    title: 'Trust Registration',
    desc: 'Trust formation and registration support for charitable and public welfare objectives in India.',
    img: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&auto=format&fit=crop&q=80',
    price: '₹2,499'
  },
  {
    title: 'Society Registration',
    desc: 'Society registration support for charitable, educational, cultural and social-welfare organisations.',
    img: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&auto=format&fit=crop&q=80',
    price: '₹4,999'
  },
  {
    title: 'Section 8 Company Registration',
    desc: 'Not-for-profit company incorporation support for organisations working on social-impact and charitable objectives.',
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&auto=format&fit=crop&q=80',
    price: '₹9,999'
  },
  {
    title: 'FCRA Registration',
    desc: 'Foreign contribution registration support for eligible organisations planning to receive overseas donations.',
    img: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&auto=format&fit=crop&q=80',
    price: '₹9,999'
  },
  {
    title: 'CSR Compliance & Reporting',
    desc: 'Ongoing CSR documentation, project records and compliance support for eligible implementing organisations.',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&auto=format&fit=crop&q=80',
    price: '₹2,499'
  },
  {
    title: 'Digital Signature Certificate (DSC)',
    desc: 'DSC assistance for authorised signatories who need to digitally sign MCA forms and statutory filings.',
    img: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&auto=format&fit=crop&q=80',
    price: '₹999'
  },
  {
    title: 'Annual NGO Compliance',
    desc: 'Ongoing statutory and tax compliance assistance for trusts, societies and Section 8 companies.',
    img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&auto=format&fit=crop&q=80',
    price: '₹2,499'
  }
]

const CSR1_REFERENCE_URL = 'https://www.legalpapersindia.com/csr-1-registration'

export const NGORegistrationLanding: React.FC<NGORegistrationLandingProps> = ({
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
  const [selectedPackage, setSelectedPackage] = useState('CSR-1 Registration Package (₹2,499 + Govt. Fees)');
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
            <span className="text-slate-900 font-bold">CSR-1 Registration</span>
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
                  <span className="text-white">Fast-Track 7–15 Working Days*</span>
                </div>

                {/* H1 Heading & Tagline */}
                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight antialiased">
                    CSR-1 Registration
                  </h1>
                  <div className="space-y-0.5">
                    <p className="text-xl sm:text-2xl font-black text-orange-300 antialiased">
                      Complete your CSR-1 registration at{' '}
                      <span className="underline decoration-[#FF5A00] decoration-2 underline-offset-4 font-black text-white">
                        ₹2,499 + Govt. Fees!
                      </span>
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-blue-100 antialiased">
                      + Govt. Fees
                    </p>
                  </div>
                </div>

                {/* Definition: 2-3 Line Description */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                  CSR-1 Registration is the MCA compliance filing for eligible trusts, societies, Section 8 companies and other qualifying entities that intend to undertake CSR activities and receive CSR funding. The process verifies the organisation, authorised signatory and supporting registrations before filing with the Ministry of Corporate Affairs.
                </p>
                <a href={CSR1_REFERENCE_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-xs font-bold text-orange-300 hover:text-white underline underline-offset-4">
                  View CSR-1 reference guide <ExternalLink className="w-3.5 h-3.5" />
                </a>

                {/* 6 Feature Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Clock className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>7-15 Working Days*</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Handshake className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Eligible Trusts / Societies / Section 8</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <FileSignature className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>CSR-1 Form & Document Review</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Zap className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Fast &amp; Hassle-Free</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Gavel className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>MCA Portal Filing</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Users2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Dedicated CSR Advisor</span>
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
                        Thank you <span className="font-bold">{applicantName}</span>. Our MCA compliance specialist has been assigned to your registration docket. We will call you within 15 minutes at <span className="font-bold">{applicantMobile}</span>.
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
                              ₹2,499 + Govt. Fees
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
                                Select State of CSR-1 Registration *
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
                                CSR-1 eligibility and documentation depend on the entity type, applicable registrations, authorised signatory and MCA filing requirements.
                              </span>
                            </div>

                            <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100 text-xs text-slate-600 space-y-1">
                              <div className="flex items-center gap-1.5 font-bold text-[#0B3D91]">
                                <ShieldCheck className="w-4 h-4 text-[#FF5A00]" />
                                <span>Why register with akshayb2bsolutions?</span>
                              </div>
                              <p className="text-[11px]">
                                Complete CSR-1 eligibility review, document verification, MCA form preparation, professional certification coordination and online filing support with minimal paperwork.
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
                                  Entity Type *
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
                                  CSR Activity / Organisation Objective *
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
                                Authorized Member / Trustee Full Name *
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
                                Authorized Member / Trustee PAN Number (Optional for quote)
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
                                Select CSR-1 Registration Package *
                              </label>
                              <select
                                value={selectedPackage}
                                onChange={(e) => setSelectedPackage(e.target.value)}
                                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                              >
                                <option value="CSR-1 Registration Package (₹2,499 + Govt. Fees)">CSR-1 Registration Package — ₹2,499 + Govt. Fees</option>
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
                Choose Your CSR-1 Registration Package
              </h2>
              <p className="text-sm text-slate-500 mt-2 mx-auto max-w-2xl text-center">
                This package includes professional CSR-1 registration guidance, document preparation, applicable government filing support, and dedicated compliance assistance.
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

                  <h3 className="text-2xl font-bold text-[#0D47A1]">Basic Package</h3>
                  <p className="text-sm text-slate-500 mb-6">
                    Essential MCA CSR-1 filing support for eligible trusts, societies and Section 8 companies seeking CSR implementation opportunities.
                  </p>

                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <div className="flex items-baseline gap-3">
                      <span className="text-lg text-slate-400 line-through">₹4,999</span>
                      <span className="text-4xl font-extrabold text-[#0D47A1]">₹2,499</span>
                    </div>
                    <span className="text-xs text-slate-500 font-medium block mt-1">
                      + Govt. Fees
                    </span>
                  </div>

                  {/* Checklist */}
                  <div className="space-y-3.5 mb-8">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">PACKAGE INCLUSIONS:</p>
                    {[
                      'Entity Registration & CSR-1 Document Verification',
                      'PAN, 12A/12AB & 80G Document Review',
                      'MCA Portal Filing Support',
                      'CSR-1 Eligibility & Document Check',
                      'CSR Project Documentation Guidance',
                      'Dedicated Registration Specialist Support'
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
                    setSelectedPackage('CSR-1 Registration Package (₹2,499 + Govt. Fees)');
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
            <div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Overview</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">What is CSR-1 Registration in India?</h2></div>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">CSR-1 Registration is the MCA filing through which eligible implementing entities such as registered trusts, societies and Section 8 companies register their details for CSR implementation. It does not create a new legal entity; it records the eligible organisation with MCA for CSR-related purposes.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                ['Who It Is For','Eligible trusts, societies, Section 8 companies and other qualifying entities seeking CSR implementation opportunities.'],
                ['MCA Compliance','The filing is submitted online through the MCA portal with authorised signatory details and applicable professional certification.'],
                ['CSR Funding Readiness','CSR-1 helps eligible entities establish their compliance profile for approaching companies for CSR projects, subject to corporate due diligence.'],
                ['Supporting Registrations','12A/12AB and 80G records are important where required by the applicable CSR eligibility conditions.'],
                ['Digital Process','Documents are verified, the CSR-1 form is prepared, digitally signed and submitted online.'],
                ['No Funding Guarantee','CSR-1 registration does not guarantee CSR funding; project selection depends on eligibility, corporate priorities and due diligence.']
              ].map(([title,desc],idx)=>(<div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200"><CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5"/><div className="text-sm text-slate-700"><strong className="text-slate-900 font-bold block mb-0.5">{title}:</strong>{desc}</div></div>))}
            </div>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-2">Our team supports eligibility review, document verification, CSR-1 form preparation, professional certification coordination, MCA filing and post-filing guidance.</p>
          </div>
        </section>

        {/* 6. REGISTRATION SECTION */}
        <section id="registration" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">MCA Filing Process</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">How CSR-1 Registration Works in India</h2></div>
            <p className="text-slate-700 text-sm leading-relaxed">CSR Form 1 is filed online with the Ministry of Corporate Affairs for eligible entities that intend to undertake CSR activities. The filing captures the organisation’s legal registration, key functionaries and authorised signatory information.</p>
            <p className="text-slate-700 text-sm leading-relaxed">The authorised signatory signs the form digitally and the filing is certified by a practicing CA, CS or CMA as applicable. Correct documentation and accurate MCA filing reduce the risk of delay or resubmission.</p>
            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-2"><h4 className="text-xs font-bold uppercase tracking-wider text-[#0B3D91] flex items-center gap-1.5"><FileCheck className="w-4 h-4 text-[#FF5A00]"/><span>How Our Compliance Desk Helps:</span></h4><p className="text-xs text-slate-600 leading-relaxed">We review eligibility, verify supporting registrations, prepare the CSR-1 form, coordinate professional certification and assist with online MCA submission and status tracking.</p></div>
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
                Key Advantages of CSR-1 Registration
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: 'MCA CSR-1 Compliance Recognition',
                  desc: 'CSR-1 registration helps an eligible implementing entity establish its compliance record for CSR activities and improves readiness for corporate CSR partnerships.'
                },
                {
                  title: 'Access to Corporate CSR Partnerships',
                  desc: 'Registered implementing entities can approach eligible companies for CSR project opportunities, subject to project suitability and corporate due diligence.'
                },
                {
                  title: 'Digital MCA Filing Process',
                  desc: 'Get professional CSR-1 documentation and filing support through a digital process; the final timeline depends on document readiness and MCA processing.'
                },
                {
                  title: 'Improved CSR Partner Credibility',
                  desc: 'Accurate CSR-1 records improve transparency when companies evaluate eligible implementing agencies for CSR projects.'
                },
                {
                  title: 'Structured CSR Documentation',
                  desc: 'CSR-1 creates a structured compliance record linking the eligible entity, authorised signatory and CSR implementation details with MCA.'
                },
                {
                  title: 'Access to CSR Funding Opportunities',
                  desc: 'Eligible implementing entities can pursue CSR funding opportunities from companies subject to Section 135, CSR Rules and the company’s project requirements.'
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
                Checklist Before CSR-1 Filing
              </h2>
            </div>

            <div className="space-y-3">
              {[
                {
                  title: 'Verify Entity & Registration Details',
                  desc: 'Verify the legal name, registration number, entity type and supporting registration documents before CSR-1 filing.'
                },
                {
                  title: 'CSR Activity & Project Information',
                  desc: 'Keep the organisation’s CSR activity areas and project information ready for accurate disclosure and corporate due diligence.'
                },
                {
                  title: 'Clear CSR Objectives & Governance',
                  desc: 'Agree in advance on each founder / trustee\'s capital contribution and profit/loss sharing ratio to avoid disputes after registration.'
                },
                {
                  title: 'Valid Identity and Address Proofs of All Members / Trustees',
                  desc: 'Ensure each founder / trustee\'s PAN Card and Aadhaar Card details match identically and are linked to an active mobile number for OTP verification.'
                },
                {
                  title: 'Commercial or Residential Business Address Proof',
                  desc: 'Prepare recent utility bills (electricity, water, or municipal tax receipt under 2 months old) along with a rent agreement or ownership proof.'
                },
                {
                  title: 'Draft MOA / Trust Deed / Society Rules',
                  desc: 'Ensure the entity’s governing documents and authorised signatory details are consistent with the CSR-1 filing.'
                },
                {
                  title: 'Check Applicable CSR & Tax Registrations',
                  desc: 'Confirm the entity has the registrations and tax documents required for CSR-1 eligibility, including 12A/12AB and 80G where applicable.'
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
                Statutory Qualification
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Eligibility Criteria for CSR-1 Registration
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              To file CSR-1, the applicant must be an eligible entity under the applicable CSR Rules and should have the required registrations, authorised signatory and supporting documents.
            </p>

            <div className="space-y-3">
              {[
                {
                  title: 'Eligible Legal Entity Structure',
                  desc: 'The applicant should be an eligible trust, society, Section 8 company or other qualifying entity under the applicable CSR Rules.'
                },
                {
                  title: 'Authorised Signatory Eligibility',
                  desc: 'The authorised signatory must have the required authority and valid identity/KYC details for the CSR-1 filing.'
                },
                {
                  title: 'Valid Entity Name & Registration Details',
                  desc: 'The legal entity name and registration details should match the registration certificate, PAN and other MCA filing records.'
                },
                {
                  title: 'Valid Governing / Registration Documents',
                  desc: 'The trust deed, society documents or Section 8 incorporation records should be valid and consistent with the entity’s CSR-1 information.'
                },
                {
                  title: 'Registered Office & Contact Details',
                  desc: 'Keep the entity’s registered office and contact details accurate across supporting documents and statutory records.'
                },
                {
                  title: 'CSR Activity Eligibility',
                  desc: 'CSR projects should fall within eligible CSR activities and comply with the applicable Companies Act and CSR Rules.'
                },
                {
                  title: 'CSR-1 Pre-Filing Verification',
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
                Documents Required for CSR-1 Registration
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              To process your CSR-1 registration smoothly, identity and address proofs of founders, trustees, members, or directors, registered-office proof, photographs, and the applicable governing documents are generally required. Documents can be collected digitally.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Members / Trustees\' Identity Proof (PAN Cards)',
                  desc: 'Scanned copies of each founder / trustee\'s Permanent Account Number (PAN) card, which serves as the primary tax identifier.'
                },
                {
                  title: 'Members / Trustees\' Address Proof (Aadhaar Card / Voter ID)',
                  desc: 'Provide the required name, designation, DIN/PAN or other identification and contact details of directors, trustees, office bearers and authorised signatory.'
                },
                {
                  title: '12A/12AB & 80G Certificates',
                  desc: 'Provide valid 12A/12AB and 80G certificates where applicable to establish the entity’s CSR funding eligibility.'
                },
                {
                  title: 'Digital Signature Certificate (DSC)',
                  desc: 'A valid DSC of the authorised signatory is required for digital execution of the CSR-1 filing.'
                },
                {
                  title: 'Governing / Incorporation Documents',
                  desc: 'Provide the trust deed, society registration records or Section 8 incorporation documents and related amendments, as applicable.'
                },
                {
                  title: 'akshayb2bsolutions Document Support & Formatting',
                  desc: 'Our legal drafting team prepares the applicable MOA, Trust Deed, Society Rules, NOC drafts, declarations, and supporting documents according to the relevant authority requirements.'
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
                Step-by-Step CSR-1 Registration Process
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  step: 'Step 1',
                  title: 'Check CSR-1 Eligibility',
                  desc: 'Verify that the trust, society, Section 8 company or other applicant meets the applicable CSR-1 eligibility conditions and has the required registrations.'
                },
                {
                  step: 'Step 2',
                  title: 'Collect Entity & KYC Documents',
                  desc: 'Share the registration certificate, PAN, 12A/12AB and 80G documents where applicable, authorised signatory details and other required records.'
                },
                {
                  step: 'Step 3',
                  title: 'Verify DSC & Authorised Signatory',
                  desc: 'We verify the authorised signatory details and coordinate the Digital Signature Certificate requirements for MCA filing.'
                },
                {
                  step: 'Step 4',
                  title: 'Prepare CSR-1 Form',
                  desc: 'Our compliance team prepares the CSR-1 form with the entity registration details, CSR activity information and authorised signatory particulars.'
                },
                {
                  step: 'Step 5',
                  title: 'Professional Certification & MCA Filing',
                  desc: 'The form is digitally signed and certified by the applicable practicing CA, CS or CMA before online submission on the MCA portal.'
                },
                {
                  step: 'Step 6',
                  title: 'Track Approval & Share Filing Proof',
                  desc: 'We track the filing status and provide the CSR-1 acknowledgement/approval records and next-step guidance after MCA processing.'
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
                CSR-1 Registration & MCA Status
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
                <h4 className="text-sm font-bold text-[#0B3D91]">1. Legal Identity</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  CSR-1 does not create a new legal entity. It records an eligible existing trust, society, Section 8 company or other qualifying entity with MCA for CSR implementation purposes.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
                <h4 className="text-sm font-bold text-[#0B3D91]">2. Compliance Requirements</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  After CSR-1 approval, the entity should maintain accurate statutory, tax, financial and CSR project records and comply with the requirements applicable to its legal structure and activities.
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
                  The responsibilities and liability of members, trustees, directors, and office bearers depend on the selected legal structure and applicable law.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-slate-700 space-y-1">
              <h4 className="font-bold text-[#0B3D91]">5. akshayb2bsolutions&apos;s Role in Explaining Legal Implications:</h4>
              <p>
                Our legal advisors guide you on CSR-1 eligibility, supporting registrations, MCA filing documents, CSR project records and ongoing compliance requirements.
              </p>
            </div>
          </div>
        </section>

        {/* 13. POST-REGISTRATION COMPLIANCE */}
        <section id="post-compliance" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Ongoing CSR Readiness</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Post-Registration CSR Compliance Checklist</h2></div>
            <p className="text-slate-700 text-sm leading-relaxed">After CSR-1 approval, maintain accurate statutory, tax, financial and project records so the organisation remains ready for corporate due diligence and CSR implementation reporting.</p>
            <div className="space-y-3">
              {[
                {title:'Keep MCA & Entity Details Updated',desc:'Ensure the entity’s legal name, registration details and authorised signatory information remain accurate.'},
                {title:'Maintain 12A/12AB & 80G Records',desc:'Keep applicable tax-exemption and donor-benefit registrations valid and properly documented.'},
                {title:'Maintain CSR Project Records',desc:'Keep project proposals, budgets, agreements, utilisation evidence, photographs and reports organised.'},
                {title:'Maintain Financial Records',desc:'Keep bank statements, invoices, vouchers, accounts and audit records for transparent CSR utilisation.'},
                {title:'CSR Reporting & Utilisation Support',desc:'Provide reports and utilisation evidence to corporate CSR partners according to project agreements and applicable requirements.'},
                {title:'Monitor MCA & CSR Rule Updates',desc:'Review applicable legal and regulatory changes and update compliance processes where required.'},
                {title:'Professional Compliance Support',desc:'Our team can assist with document updates, CSR records, filings and compliance coordination as your organisation grows.'}
              ].map((item,idx)=>(<div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200"><CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5"/><div className="text-xs sm:text-sm text-slate-700"><strong className="text-slate-900 font-bold block mb-0.5">{item.title}:</strong>{item.desc}</div></div>))}
            </div>
          </div>
        </section>

        {/* 14. CSR-1 COMPLIANCE COMPARISON */}
        <section id="comparison" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">CSR Compliance Snapshot</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">CSR-1 Registration at a Glance</h2>
            </div>
            <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left text-xs border-collapse min-w-[700px]">
                <thead><tr className="bg-[#0B3D91] text-white">
                  <th className="p-3.5 font-bold border-r border-blue-800">Parameter</th><th className="p-3.5 font-bold bg-orange-500 text-[#0B3D91] border-r border-orange-600">CSR-1 Registration</th><th className="p-3.5 font-bold border-r border-blue-800">12A/12AB &amp; 80G</th><th className="p-3.5 font-bold border-r border-blue-800">NGO Darpan</th><th className="p-3.5 font-bold">FCRA</th>
                </tr></thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  {[
                    ['Purpose','CSR funding / implementing agency registration','Tax exemption & donor benefit','Government NGO identification','Foreign contribution compliance'],
                    ['Primary Portal / Authority','MCA','Income Tax Department','NITI Aayog / NGO Darpan','Ministry of Home Affairs'],
                    ['Typical Applicant','Eligible Trust / Society / Section 8 entity','Eligible charitable entity','Eligible NGO / VOs','Eligible organisation meeting FCRA conditions'],
                    ['Key Documents','Registration proof, PAN, 12A/12AB, 80G, key functionary & DSC details','Constitutional documents, PAN, accounts and supporting records','Registration and organisation details','Registration, financial and statutory records'],
                    ['Digital Filing','CSR-1 on MCA portal','Online tax application','Online NGO profile','Online FCRA portal'],
                    ['Funding Link','Corporate CSR contributions','Tax-exempt charitable receipts','Government / institutional visibility','Foreign contributions'],
                    ['Approval Depends On','Eligibility, correct filing and MCA processing','Income Tax eligibility and approval','Profile and document verification','FCRA eligibility and government approval']
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50"><td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">{row[0]}</td><td className="p-3.5 bg-orange-50/60 font-semibold border-r border-slate-200">{row[1]}</td><td className="p-3.5 border-r border-slate-200">{row[2]}</td><td className="p-3.5 border-r border-slate-200">{row[3]}</td><td className="p-3.5">{row[4]}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 15. CSR-1 COMPLIANCE & SUPPORTING RECORDS */}
        <section id="tax-implications" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Compliance &amp; Records</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">CSR-1 Compliance &amp; Supporting Records</h2></div>
            <p className="text-slate-700 text-sm leading-relaxed">CSR-1 is an MCA compliance filing. Eligible implementing entities should keep their registration, tax-exemption, governance and financial records updated because companies may review these documents before entering CSR project arrangements.</p>
            <div className="space-y-3">
              {[
                {title:'Keep 12A/12AB & 80G Records Updated',desc:'Maintain valid tax-exemption and donor-benefit registration records where these are required for CSR eligibility.'},
                {title:'Maintain PAN & Entity Registration Records',desc:'Ensure the organisation PAN, trust/society/Section 8 registration details and statutory records remain consistent.'},
                {title:'Maintain Authorised Signatory & DSC Details',desc:'Keep authorised signatory information and digital signature credentials valid for MCA filings and updates.'},
                {title:'Maintain CSR Project Documentation',desc:'Keep project proposals, agreements, budgets, utilisation evidence and reports organised for corporate due diligence.'},
                {title:'Maintain Financial & Accounting Records',desc:'Proper books, supporting invoices, bank records and utilisation documents help demonstrate transparent use of CSR funds.'},
                {title:'Monitor Regulatory Updates',desc:'CSR Rules and MCA filing requirements can change; review applicable updates and maintain ongoing compliance accordingly.'}
              ].map((item,idx)=>(<div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200"><IndianRupee className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5"/><div className="text-xs sm:text-sm text-slate-700"><strong className="text-slate-900 font-bold block mb-0.5">{item.title}:</strong>{item.desc}</div></div>))}
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
                CSR Funding & Partnership Opportunities
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              CSR-1 registration supports eligible implementing entities in approaching companies for CSR projects. Actual funding depends on corporate CSR policy, project eligibility, due diligence and available budgets.
            </p>

            <div className="space-y-3">
              {[
                {
                  title: 'Corporate CSR Contributions',
                  desc: 'Eligible implementing entities may receive CSR contributions for approved CSR activities subject to the Companies Act, CSR Rules, project agreements and corporate due diligence.'
                },
                {
                  title: 'CSR Project Partnerships',
                  desc: 'Build compliant CSR project proposals and partnership documentation for discussions with companies looking for eligible implementing agencies.'
                },
                {
                  title: 'CSR Project Documentation',
                  desc: 'Maintain project proposals, budgets, utilisation records and supporting documents required by CSR partners and applicable compliance frameworks.'
                },
                {
                  title: 'CSR Utilisation & Reporting Records',
                  desc: 'Maintain proper project records, utilisation evidence and reporting documents to support transparent CSR implementation.'
                },
                {
                  title: 'Corporate Due Diligence Readiness',
                  desc: 'Keep statutory registrations, financial records, governing documents and authorised signatory information organised for corporate CSR due diligence.'
                },
                {
                  title: 'Funding Depends on CSR Eligibility',
                  desc: 'CSR-1 does not guarantee funding. CSR partnerships depend on eligibility, approved CSR activities, corporate priorities, due diligence and project selection.'
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
                  desc: 'We analyze your business model and recommend the precise deed clauses and registration combination tailored to your members / trustees\' needs.'
                },
                {
                  title: 'Flawless Deed Drafting & Digital Verification',
                  desc: 'Our compliance specialists verify CSR-1 documents, authorised signatory details and MCA filing requirements to reduce errors and delays.'
                },
                {
                  title: 'Direct Liaison & Registrar Follow-Ups',
                  desc: 'We coordinate CSR-1 filing, professional certification and MCA-related follow-ups, resolving document queries proactively.'
                },
                {
                  title: 'Guaranteed Bank Account Resolution Kit',
                  desc: 'Receive a CSR-1 filing/document pack organised for MCA records and future corporate CSR due diligence.'
                },
                {
                  title: 'Dedicated Post-Registration Growth Advisory',
                  desc: 'Get guidance on CSR records, applicable tax registrations and ongoing compliance calendars after filing.'
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
                  desc: 'Zero hidden costs, crystal-clear pricing starting at just ₹2,499 + Govt. Fees, and transparent separate government fee details.',
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
              Launch Your Enterprise Today
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              Complete Your CSR-1 Registration with Confidence
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Get professional CSR-1 filing assistance with a digital, India-wide compliance process. Zero hidden charges, 100% digital filing, and guaranteed resolution support.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => scrollToSection('lead-capture-widget')}
                className="px-6 py-3 rounded-xl bg-[#FF5A00] hover:bg-orange-500 text-[#0B3D91] font-black text-xs sm:text-sm shadow-xl transition-all cursor-pointer"
              >
                Start CSR-1 Registration at ₹2,499 + Govt. Fees
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

// Backward-compatible export name if this file replaces the existing CsrOneRegistrationLanding component.
export const CsrOneRegistrationLanding = NGORegistrationLanding;

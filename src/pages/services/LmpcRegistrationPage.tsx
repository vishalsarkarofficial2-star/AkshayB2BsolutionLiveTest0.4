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
  BookOpenCheck,
  PackageCheck,
  Boxes,
  Tags
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

interface LmpcRegistrationPageProps {
  onBackToHome: () => void;
  onSelectService: (serviceName: string) => void;
  onOpenBrochure: () => void;
  onOpenAppointment: () => void;
}

// 6 Accordion FAQs — LMPC / Legal Metrology focused
const FAQ_ITEMS = [
  { q: 'What is LMPC Registration in India?', a: 'LMPC Registration is the registration required for eligible manufacturers, packers and importers of pre-packaged commodities under Rule 27 of the Legal Metrology (Packaged Commodities) Rules, 2011. It helps establish compliance before packaged goods are sold or distributed in India.' },
  { q: 'Who generally needs LMPC Registration?', a: 'Businesses manufacturing, packing or importing pre-packaged commodities for sale, distribution or delivery in India should evaluate Rule 27 registration requirements. The exact applicability depends on the product, packaging and business role.' },
  { q: 'What declarations are commonly required on packaged commodities?', a: 'Common declarations include the name and address of the manufacturer, packer or importer, country of origin for imported goods, common or generic product name, net quantity, MRP inclusive of taxes, month and year details where applicable, and consumer care information.' },
  { q: 'Is LMPC Registration important for importers?', a: 'Yes. For imported packaged commodities, the registered importer in India carries important compliance responsibility. Correct registration and label declarations can help reduce customs, marketplace and enforcement issues.' },
  { q: 'Can LMPC applications be submitted online?', a: 'The Department of Consumer Affairs provides an online system for registration of manufacturers, packers and importers of packaged commodities under Rule 27.' },
  { q: 'Do all products require the same LMPC declarations?', a: 'No. Applicability and declarations can vary based on the commodity, package type, quantity, sector-specific rules and exemptions. A product-wise compliance review is recommended before filing or printing labels.' }
]

// Related services cross-linking items — LMPC-adjacent compliance services
const RELATED_SERVICES = [
  {
    title: 'Import Export Code (IEC) Registration',
    desc: 'Get IEC support for starting import-export activities and building your cross-border compliance setup.',
    img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&auto=format&fit=crop&q=80',
    price: 'Contact for Price'
  },
  {
    title: 'ICEGATE Registration',
    desc: 'Registration assistance for customs e-filing, import-export documentation and ICEGATE access.',
    img: 'https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=600&auto=format&fit=crop&q=80',
    price: 'Contact for Price'
  },
  {
    title: 'Legal Metrology License',
    desc: 'Compliance support for businesses dealing with weights, measures and regulated packaged commodities.',
    img: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=600&auto=format&fit=crop&q=80',
    price: 'Contact for Price'
  },
  {
    title: 'Product Label Compliance',
    desc: 'Review packaged-product labels for mandatory declarations before printing, importing or listing online.',
    img: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=600&auto=format&fit=crop&q=80',
    price: 'Contact for Price'
  },
  {
    title: 'GST Registration',
    desc: 'GST registration and compliance assistance for eligible manufacturers, importers and trading businesses.',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&auto=format&fit=crop&q=80',
    price: 'Contact for Price'
  },
  {
    title: 'Trademark Registration',
    desc: 'Protect your product name, logo and brand identity while building a compliant retail presence.',
    img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=80',
    price: 'Contact for Price'
  },
  {
    title: 'BIS Registration',
    desc: 'BIS compliance assistance for products covered by mandatory Indian quality and safety requirements.',
    img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&auto=format&fit=crop&q=80',
    price: 'Contact for Price'
  },
  {
    title: 'FSSAI Registration',
    desc: 'Food business registration and licensing support for eligible packaged food manufacturers and importers.',
    img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&auto=format&fit=crop&q=80',
    price: 'Contact for Price'
  },
  {
    title: 'E-commerce Compliance',
    desc: 'Compliance review for packaged goods sold through marketplaces and e-commerce websites in India.',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&auto=format&fit=crop&q=80',
    price: 'Contact for Price'
  }
]

export const LmpcRegistrationPage: React.FC<LmpcRegistrationPageProps> = ({
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
  const [businessType, setBusinessType] = useState('Importer / Manufacturer / Packer');
  const [businessActivity, setBusinessActivity] = useState(BUSINESS_ACTIVITIES[0]);
  const [panNumber, setPanNumber] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('LMPC Registration – Custom Quote');
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
            <span className="text-slate-900 font-bold">LMPC Registration</span>
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
                    LMPC Registration
                  </h1>
                  <div className="space-y-0.5">
                    <p className="text-xl sm:text-2xl font-black text-orange-300 antialiased">
                      Get your packaged-goods compliance reviewed{' '}
                      <span className="underline decoration-[#FF5A00] decoration-2 underline-offset-4 font-black text-white">
                        with Expert Support
                      </span>
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-blue-100 antialiased">
                      Government fee, if applicable, is communicated separately
                    </p>
                  </div>
                </div>

                {/* Definition: 2-3 Line Description */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                  LMPC Registration in India helps eligible manufacturers, packers and importers of pre-packaged commodities comply with the Legal Metrology (Packaged Commodities) Rules, 2011. Our team supports applicability review, Rule 27 documentation, filing assistance and mandatory package-label declaration checks.
                </p>

                {/* 6 Feature Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Clock className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Application Timeline Depends on Authority</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Handshake className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>For Importers, Manufacturers & Packers</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <FileSignature className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Package Label Compliance Review</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Zap className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Fast &amp; Hassle-Free</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Gavel className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Legal Metrology Filing Support</span>
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
                    <span>Get Expert Consultation</span>
                  </div>

                  {formSubmitted ? (
                    <div className="text-center py-8 space-y-4 animate-in fade-in">
                      <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Application Received!</h3>
                      <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
                        Thank you <span className="font-bold">{applicantName}</span>. Our LMPC compliance specialist has been assigned to your request. We will call you within 15 minutes at <span className="font-bold">{applicantMobile}</span>.
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
                              Professional Service Fee
                            </span>
                            <span className="text-base font-black text-[#0B3D91] leading-none">
                              Custom Quote
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-[11px] font-bold text-slate-800 block leading-tight">
                            Govt. Fee
                          </span>
                          <span className="text-[10px] font-medium text-slate-500 block leading-tight">
                            as applicable
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
                                Select State of LMPC Registration *
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
                                Your filing route and supporting documents may depend on your business role, state, product category and packaged-commodity activity.
                              </span>
                            </div>

                            <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100 text-xs text-slate-600 space-y-1">
                              <div className="flex items-center gap-1.5 font-bold text-[#0B3D91]">
                                <ShieldCheck className="w-4 h-4 text-[#FF5A00]" />
                                <span>Why register with akshayb2bsolutions?</span>
                              </div>
                              <p className="text-[11px]">
                                Get document review, Rule 27 registration assistance, label declaration guidance and filing support for packaged-commodity compliance.
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
                                  Business Role *
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
                                  Product / Business Activity *
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
                                Select LMPC Registration Package *
                              </label>
                              <select
                                value={selectedPackage}
                                onChange={(e) => setSelectedPackage(e.target.value)}
                                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                              >
                                <option value="LMPC Registration – Custom Quote">LMPC Registration Package — Contact for Price</option>
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
                                  <span>Submit &amp; Get LMPC Consultation</span>
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
                { id: 'registration', label: 'How It Works' },
                { id: 'advantages', label: 'Benefits' },
                { id: 'checklist', label: 'Checklist' },
                { id: 'eligibility', label: 'Eligibility' },
                { id: 'documents', label: 'Documents Required' },
                { id: 'steps', label: 'Steps' },
                { id: 'legal-status', label: 'Label Rules' },
                { id: 'post-compliance', label: 'After Registration' },
                { id: 'comparison', label: 'Applicability' },
                { id: 'tax-implications', label: 'Declarations' },
                { id: 'financing', label: 'Business Impact' },
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
                Choose Your LMPC Compliance Package
              </h2>
              <p className="text-sm text-slate-500 mt-2 mx-auto max-w-2xl text-center">
                One focused package for LMPC registration, document review, packaged-commodity declaration guidance and filing assistance. Final professional fee is shared after reviewing your product and business requirements.
              </p>
            </div>

            <div className="max-w-[520px] mx-auto">
              <div className="bg-white rounded-2xl border-t-4 border-t-[#FF6B00] border-l border-r border-b border-slate-200 p-6 sm:p-8 shadow-xl flex flex-col justify-between">
                <div>
                  {/* Badges */}
                  <div className="flex items-center justify-start flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 rounded bg-orange-100 text-orange-900 text-[10px] font-black uppercase tracking-wide">
                      CUSTOM QUOTE AFTER REVIEW
                    </span>
                    <span className="px-3 py-1 rounded bg-yellow-100 text-yellow-900 text-[10px] font-black uppercase tracking-wide">
                      NO FIXED PRICE
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0D47A1]">Basic Package</h3>
                  <p className="text-sm text-slate-500 mb-6">
                    Professional LMPC registration and packaged-label compliance support tailored to your product, business role and filing requirement.
                  </p>

                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <div className="flex items-baseline gap-3">
                      
                      <span className="text-3xl font-extrabold text-[#0D47A1]">Contact for Price</span>
                    </div>
                    <span className="text-xs text-slate-500 font-medium block mt-1">
                      Government fee, if applicable, is communicated separately
                    </span>
                  </div>

                  {/* Checklist */}
                  <div className="space-y-3.5 mb-8">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">PACKAGE INCLUSIONS:</p>
                    {[
                      'LMPC Applicability & Product Review',
                      'Rule 27 Registration Documentation Support',
                      'Legal Metrology Filing Support Support',
                      'Mandatory Package Declaration Checklist',
                      'Importer / Manufacturer / Packer Compliance Review',
                      'Dedicated LMPC Compliance Specialist'
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
                    setSelectedPackage('LMPC Registration – Custom Quote');
                    scrollToSection('lead-capture-widget');
                  }}
                  className="w-full py-4 rounded-xl bg-[#0D47A1] hover:bg-blue-900 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer text-center"
                >
                  Request LMPC Quote & Start
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 5. WHAT IS LMPC REGISTRATION IN INDIA? */}
        <section id="overview" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Legal Metrology Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">What is LMPC Registration in India?</h2>
            </div>
            <p className="text-slate-700 text-sm leading-relaxed text-center max-w-3xl mx-auto">LMPC compliance is designed for pre-packaged commodities sold, distributed or imported in India. Registration and correct label declarations help businesses reduce avoidable compliance issues before products reach customers.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Rule 27 Registration', desc: 'Eligible manufacturers, packers and importers of pre-packaged commodities should evaluate registration under Rule 27 of the Legal Metrology (Packaged Commodities) Rules, 2011.' },
                { title: 'Built for Packaged Goods', desc: 'The rules focus on commodities packed without the purchaser being present and intended for retail or other covered sale/distribution.' },
                { title: 'Importer Responsibility', desc: 'For imported packaged commodities, the registered importer in India carries important responsibility for compliance.' },
                { title: 'Consumer-Facing Declarations', desc: 'Correct declarations help customers identify quantity, price, origin and responsible business details clearly.' }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-start gap-3">
                    <Scale className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. HOW LMPC REGISTRATION WORKS */}
        <section id="registration" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Simple Filing Journey
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">How LMPC Registration Works</h2>
            </div>
            <p className="text-slate-700 text-sm leading-relaxed text-center max-w-3xl mx-auto">We simplify the process from applicability check to documentation, filing and label review so you can focus on launching or importing your products.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: '1. Applicability Check', desc: 'We first review whether your product and business role fall within LMPC registration requirements or an exemption.' },
                { title: '2. Document Collection', desc: 'Business identity, address, product and authorization documents are organized for the application.' },
                { title: '3. Online Application Support', desc: 'The application is prepared and submitted through the applicable Legal Metrology online process.' },
                { title: '4. Query & Approval Support', desc: 'We assist with clarification requests, corrections and follow-up until the registration process is completed.' }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-start gap-3">
                    <FileCheck className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. BUSINESS BENEFITS OF LMPC COMPLIANCE */}
        <section id="advantages" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Why Businesses Act Early
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Business Benefits of LMPC Compliance</h2>
            </div>
            <p className="text-slate-700 text-sm leading-relaxed text-center max-w-3xl mx-auto">Early compliance can prevent last-minute label changes, marketplace listing issues and avoidable regulatory friction.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Import & Market Readiness', desc: 'A compliance-ready setup helps importers and sellers move products toward customs clearance and market launch with fewer surprises.' },
                { title: 'Stronger Consumer Trust', desc: 'Clear MRP, quantity, origin and consumer-care declarations improve transparency at the point of sale.' },
                { title: 'Lower Rework Risk', desc: 'Reviewing labels before mass printing can reduce costly relabelling or packaging corrections.' },
                { title: 'Better E-commerce Readiness', desc: 'Mandatory packaged-commodity information should be considered when products are sold through e-commerce channels.' },
                { title: 'Compliance Documentation', desc: 'A structured filing record supports internal audits, marketplace onboarding and regulatory correspondence.' },
                { title: 'Specialist Guidance', desc: 'Get one point of contact for product-wise documentation, application and label-declaration queries.' }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. LMPC REGISTRATION READINESS CHECKLIST */}
        <section id="checklist" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Before You Apply
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">LMPC Registration Readiness Checklist</h2>
            </div>
            <p className="text-slate-700 text-sm leading-relaxed text-center max-w-3xl mx-auto">Keep these details ready to make the review faster and reduce back-and-forth.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Business Role', desc: 'Confirm whether you are acting as manufacturer, packer, importer, brand owner or another relevant entity.' },
                { title: 'Product List', desc: 'Prepare the packaged products or categories you manufacture, pack or import.' },
                { title: 'Business KYC', desc: 'Keep PAN, business registration and authorized-person details available.' },
                { title: 'Principal Business Address', desc: 'Provide valid proof of the premises linked with the application.' },
                { title: 'Import Details', desc: 'Importers should keep IEC and relevant import/business documents available where applicable.' },
                { title: 'Sample Labels', desc: 'Share current or proposed package artwork for declaration review.' },
                { title: 'Consumer Care Details', desc: 'Keep the consumer complaint contact details you intend to declare on packaging.' },
                { title: 'Authority-Specific Documents', desc: 'Additional documents may be required depending on state, product and filing authority.' }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. ELIGIBILITY & APPLICABILITY FOR LMPC */}
        <section id="eligibility" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Who Should Check Applicability
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Eligibility & Applicability for LMPC</h2>
            </div>
            <p className="text-slate-700 text-sm leading-relaxed text-center max-w-3xl mx-auto">LMPC is not a one-size-fits-all licence. Applicability depends on your business role, product, package and exemptions under the rules.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Manufacturers', desc: 'Businesses manufacturing pre-packaged commodities for covered sale or distribution should check registration and declaration duties.' },
                { title: 'Packers', desc: 'Entities packing commodities into retail packages may have Rule 27 registration and labelling obligations.' },
                { title: 'Importers', desc: 'Businesses importing pre-packaged commodities into India should review importer registration and package declaration requirements.' },
                { title: 'E-commerce Sellers', desc: 'Online sellers should ensure required packaged-commodity declarations are available both on product packaging and where required online.' },
                { title: 'Exempt Products / Packages', desc: 'Certain commodities or package situations may be exempt or treated differently; applicability should be checked product by product.' },
                { title: 'Multi-State Operations', desc: 'Your filing and compliance setup may require additional review when packing or business premises exist in multiple locations.' }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-start gap-3">
                    <Building2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. DOCUMENTS COMMONLY REQUIRED FOR LMPC REGISTRATION */}
        <section id="documents" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Document Checklist
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Documents Commonly Required for LMPC Registration</h2>
            </div>
            <p className="text-slate-700 text-sm leading-relaxed text-center max-w-3xl mx-auto">Exact documents vary by applicant type and authority, but the following are commonly reviewed for filing.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'PAN & Business Constitution Proof', desc: 'PAN and entity proof such as incorporation, partnership or proprietorship documents, as applicable.' },
                { title: 'Address Proof', desc: 'Proof of the principal place of business or premises relevant to the registration.' },
                { title: 'Authorized Person Details', desc: 'Identity, contact information and authorization for the person handling the filing.' },
                { title: 'IEC for Importers', desc: 'Import Export Code and importer details where the applicant is importing packaged commodities.' },
                { title: 'Product / Commodity Details', desc: 'List of products, brands and packaging details relevant to the application.' },
                { title: 'Package / Label Artwork', desc: 'Existing or proposed labels may be reviewed for mandatory declarations and obvious gaps.' }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. STEP-BY-STEP LMPC REGISTRATION PROCESS */}
        <section id="steps" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                From Review to Filing
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Step-by-Step LMPC Registration Process</h2>
            </div>
            <p className="text-slate-700 text-sm leading-relaxed text-center max-w-3xl mx-auto">Our conversion-focused process is designed to move you from “Is LMPC applicable?” to a filing-ready application with clear next steps.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Step 1 — Free Requirement Check', desc: 'Share your business role and product details so the scope can be identified.' },
                { title: 'Step 2 — Custom Quote', desc: 'After understanding your product and filing requirement, we share the professional fee and expected scope.' },
                { title: 'Step 3 — Document Collection', desc: 'Upload the required business, address, authorization and product documents digitally.' },
                { title: 'Step 4 — Application Preparation', desc: 'We prepare the registration particulars and supporting documents for filing.' },
                { title: 'Step 5 — Filing & Follow-up', desc: 'Application submission, query response and authority follow-up are handled with your inputs.' },
                { title: 'Step 6 — Label Compliance Guidance', desc: 'Before market launch, we help you check key mandatory declarations on the packaged commodity.' }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 12. KEY LMPC LABEL DECLARATIONS */}
        <section id="legal-status" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Package Declaration Rules
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Key LMPC Label Declarations</h2>
            </div>
            <p className="text-slate-700 text-sm leading-relaxed text-center max-w-3xl mx-auto">Pre-packaged commodities generally need clear and prominent declarations so consumers can identify the product, quantity, price, origin and responsible business.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Manufacturer / Packer / Importer Details', desc: 'Declare the relevant name and address details required for the packaged commodity.' },
                { title: 'Country of Origin', desc: 'Imported packaged commodities generally need country-of-origin information.' },
                { title: 'Common / Generic Product Name', desc: 'The package should identify what the commodity actually is in clear terms.' },
                { title: 'Net Quantity', desc: 'Declare quantity using the applicable standard unit of weight, measure, number or other prescribed format.' },
                { title: 'MRP Inclusive of Taxes', desc: 'Retail packages generally require the maximum retail price in Indian currency, inclusive of applicable taxes.' },
                { title: 'Consumer Care Information', desc: 'Provide the required consumer complaint contact information, including relevant contact details.' }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-start gap-3">
                    <Tags className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 13. WHAT HAPPENS AFTER LMPC REGISTRATION? */}
        <section id="post-compliance" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Stay Compliant After Approval
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">What Happens After LMPC Registration?</h2>
            </div>
            <p className="text-slate-700 text-sm leading-relaxed text-center max-w-3xl mx-auto">Registration is only one part of compliance. Packaging, product additions, address changes and marketplace listings should remain aligned with current requirements.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Use Correct Registration Details', desc: 'Keep registration particulars consistent across business records and compliance documentation.' },
                { title: 'Review New Product Labels', desc: 'Check declarations before introducing new packaged products or variants.' },
                { title: 'Update Business Changes', desc: 'Material changes in business particulars should be reviewed for amendment or intimation requirements.' },
                { title: 'Maintain Records', desc: 'Keep copies of applications, certificates, labels and supporting documents for future reference.' },
                { title: 'Monitor Rule Changes', desc: 'Legal Metrology rules and declaration formats can change, so labels should be reviewed periodically.' },
                { title: 'Respond to Notices Promptly', desc: 'If an authority raises a query or notice, organize records and respond within the applicable timeline.' }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-start gap-3">
                    <PackageCheck className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 14. LMPC VS OTHER COMMON REGISTRATIONS */}
        <section id="comparison" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Know What You Need
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">LMPC vs Other Common Registrations</h2>
            </div>
            <p className="text-slate-700 text-sm leading-relaxed text-center max-w-3xl mx-auto">Businesses often need LMPC together with other licences. The right combination depends on product, business model and sales channel.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'LMPC Registration', desc: 'Focuses on packaged-commodity registration and mandatory declarations under Legal Metrology rules.' },
                { title: 'IEC Registration', desc: 'Required for carrying out import-export activities, but IEC alone does not replace LMPC obligations for covered packaged imports.' },
                { title: 'BIS Registration', desc: 'Covers specified product quality/safety standards and is separate from packaged-commodity declaration compliance.' },
                { title: 'FSSAI Licence', desc: 'Applies to food businesses and packaged food; it may be required in addition to Legal Metrology requirements.' },
                { title: 'GST Registration', desc: 'Covers indirect-tax registration and does not substitute LMPC registration or packaging declarations.' },
                { title: 'Trademark Registration', desc: 'Protects brand identity but does not replace statutory package-label compliance.' }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-start gap-3">
                    <Layers className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 15. MANDATORY DECLARATIONS THAT DRIVE COMPLIANCE */}
        <section id="tax-implications" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                What Customers See
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Mandatory Declarations That Drive Compliance</h2>
            </div>
            <p className="text-slate-700 text-sm leading-relaxed text-center max-w-3xl mx-auto">Good packaging compliance is both a legal requirement and a conversion tool: customers are more confident when key information is easy to find and understand.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'MRP', desc: 'Display the maximum retail price in the prescribed manner and Indian currency for covered retail packages.' },
                { title: 'Net Quantity', desc: 'Show the actual quantity using the correct legal unit and format.' },
                { title: 'Origin & Responsible Entity', desc: 'Imported products should clearly identify country of origin and the responsible importer details as applicable.' },
                { title: 'Product Identity', desc: 'Use the common or generic name so buyers know what the package contains.' },
                { title: 'Date Declarations', desc: 'Month/year or other date information may be required depending on commodity and applicable rule.' },
                { title: 'Consumer Support', desc: 'Provide accessible consumer-care details so buyers can raise product or packaging concerns.' }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-start gap-3">
                    <Receipt className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 16. HOW LMPC COMPLIANCE SUPPORTS BUSINESS GROWTH */}
        <section id="financing" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Protect Your Launch
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">How LMPC Compliance Supports Business Growth</h2>
            </div>
            <p className="text-slate-700 text-sm leading-relaxed text-center max-w-3xl mx-auto">Compliance can directly affect how smoothly a packaged product moves from sourcing to sale.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Faster Product Launches', desc: 'Pre-reviewing registration and labels reduces the risk of last-minute corrections before launch.' },
                { title: 'Marketplace Onboarding', desc: 'Clear statutory declarations can support smoother listing reviews on e-commerce marketplaces.' },
                { title: 'Importer Confidence', desc: 'A structured LMPC file gives import teams a clearer compliance checklist before consignments arrive.' },
                { title: 'Lower Packaging Waste', desc: 'Catch missing declarations before bulk label printing or packaging production.' },
                { title: 'Brand Credibility', desc: 'Transparent packaging can build trust with distributors, retailers and end customers.' },
                { title: 'Scalable Compliance', desc: 'Create a repeatable checklist for future SKUs, variants and imported product lines.' }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 17. WHY AKSHAYB2BSOLUTIONS FOR LMPC REGISTRATION? */}
        <section id="why-akshayb2b" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Why Choose Us
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">Why akshayb2bsolutions for LMPC Registration?</h2>
            </div>
            <p className="text-slate-700 text-sm leading-relaxed text-center max-w-3xl mx-auto">Get practical, product-focused support instead of a generic filing service.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Product-Wise Applicability Review', desc: 'We start by understanding what you sell, import or pack before deciding the filing scope.' },
                { title: 'Custom Pricing', desc: 'No misleading fixed price. You receive a quote after the actual compliance requirement is reviewed.' },
                { title: 'Digital Documentation', desc: 'Share documents and package artwork online for faster coordination.' },
                { title: 'Label Compliance Support', desc: 'We help identify common declaration gaps before printing or market launch.' },
                { title: 'Dedicated Specialist', desc: 'One point of contact coordinates application preparation, queries and follow-up.' },
                { title: 'Pan-India Support', desc: 'Remote assistance is available for businesses across India, subject to authority-specific requirements.' }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-start gap-3">
                    <Handshake className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-sm text-slate-900">{item.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
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
              Make Your Packaged Products Market-Ready
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              Get LMPC Compliance Support with Confidence
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Avoid preventable packaging and registration issues before your products reach customers. Share your product details and get a clear LMPC applicability review, document checklist and custom quote.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => scrollToSection('lead-capture-widget')}
                className="px-6 py-3 rounded-xl bg-[#FF5A00] hover:bg-orange-500 text-[#0B3D91] font-black text-xs sm:text-sm shadow-xl transition-all cursor-pointer"
              >
                Get Custom LMPC Quote
              </button>
              <button
                onClick={onOpenAppointment}
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all cursor-pointer"
              >
                Book Compliance Consultation
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
                  Track Your LMPC Compliance Request
                </h3>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Download the akshayb2bsolutions mobile application for iOS &amp; Android. Access your application updates, compliance documents and specialist support from one place.
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
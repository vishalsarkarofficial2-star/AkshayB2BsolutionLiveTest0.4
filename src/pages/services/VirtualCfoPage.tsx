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

interface VirtualCfoPageProps {
  onBackToHome: () => void;
  onSelectService: (serviceName: string) => void;
  onOpenBrochure: () => void;
  onOpenAppointment: () => void;
}

// 6 Accordion FAQs — Virtual CFO Services in India
const FAQ_ITEMS = [
  { q: 'What is a Virtual CFO service?', a: 'A Virtual Chief Financial Officer (Virtual CFO) gives growing businesses access to senior-level finance guidance without hiring a full-time CFO. The service can cover financial planning, cash-flow visibility, MIS reporting, budgeting, profitability analysis, internal controls, and coordination with tax and compliance professionals.' },
  { q: 'Which businesses can benefit from a Virtual CFO?', a: 'Virtual CFO support is useful for startups, MSMEs, private limited companies, LLPs, e-commerce businesses, agencies, manufacturers, traders, and growing service businesses that need stronger financial control and management reporting.' },
  { q: 'What does the Virtual CFO package include?', a: 'The scope is tailored to your business and may include monthly MIS, cash-flow planning, budgeting, financial dashboards, receivables and payables review, margin analysis, management reporting, compliance coordination, and strategic finance support.' },
  { q: 'Do I need a full-time CFO for my business?', a: 'Not always. Many small and mid-sized businesses need CFO-level insight but not a full-time senior finance executive. A Virtual CFO model provides flexible professional support based on the complexity and reporting needs of the business.' },
  { q: 'How is Virtual CFO pricing decided?', a: 'Pricing depends on business size, transaction volume, number of entities, reporting frequency, accounting quality, team involvement, and the level of strategic support required. Share your requirements to receive a tailored quote.' },
  { q: 'Can a Virtual CFO help with GST, TDS and tax compliance?', a: 'A Virtual CFO can help organize financial data, monitor compliance calendars, review tax-impacting decisions, and coordinate with your accountant or tax professional for GST, TDS, income-tax and other applicable filings.' }
]

// Related finance, accounting and compliance services
const RELATED_SERVICES = [
  {
    title: 'Accounting & Bookkeeping',
    desc: 'Keep your books accurate and decision-ready with organized monthly accounting, reconciliations, and financial reports.',
    img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=80',
    price: 'Contact Us'
  },
  {
    title: 'GST Return Filing',
    desc: 'Professional GST return preparation and filing support with reconciliation and compliance tracking.',
    img: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600&auto=format&fit=crop&q=80',
    price: 'Contact Us'
  },
  {
    title: 'TDS Returns',
    desc: 'TDS calculation, challan and return filing support for businesses with timely compliance assistance.',
    img: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&auto=format&fit=crop&q=80',
    price: '₹599/month'
  },
  {
    title: 'Income Tax Return Filing',
    desc: 'Business and professional income-tax return support with financial-data review and filing assistance.',
    img: 'https://images.unsplash.com/photo-1554224155-1696413565d3?w=600&auto=format&fit=crop&q=80',
    price: 'Contact Us'
  },
  {
    title: 'Payroll Management',
    desc: 'Streamline payroll processing, salary records, statutory deductions, and monthly payroll reporting.',
    img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&auto=format&fit=crop&q=80',
    price: 'Contact Us'
  },
  {
    title: 'Financial Planning & Analysis',
    desc: 'Turn business numbers into budgets, forecasts, scenario plans, and management insights for better decisions.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80',
    price: 'Contact Us'
  },
  {
    title: 'Internal Audit Support',
    desc: 'Strengthen financial controls, process discipline, and risk visibility with structured internal review support.',
    img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&auto=format&fit=crop&q=80',
    price: 'Contact Us'
  },
  {
    title: 'Startup Financial Advisory',
    desc: 'Build investor-ready financial models, runway plans, unit economics and reporting systems for growing startups.',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=80',
    price: 'Contact Us'
  },
  {
    title: 'Business Compliance Management',
    desc: 'Centralize recurring financial and statutory compliance tracking so important deadlines do not get missed.',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80',
    price: 'Contact Us'
  }
]

export const VirtualCfoPage: React.FC<VirtualCfoPageProps> = ({
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
  const [businessType, setBusinessType] = useState('Private Limited Company');
  const [businessActivity, setBusinessActivity] = useState(BUSINESS_ACTIVITIES[0]);
  const [panNumber, setPanNumber] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('Virtual CFO Custom Plan');
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
            <span className="text-slate-900 font-bold">Virtual Chief Financial Officer</span>
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
                  <span>India-wide Virtual Finance Desk</span>
                  <span className="w-1 h-1 rounded-full bg-white/60"></span>
                  <span className="text-white">Remote CFO Support for Indian Businesses</span>
                </div>

                {/* H1 Heading & Tagline */}
                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight antialiased">
                    Virtual Chief Financial Officer
                  </h1>
                  <div className="space-y-0.5">
                    <p className="text-xl sm:text-2xl font-black text-orange-300 antialiased">
                      Get CFO-level financial guidance{' '}
                      <span className="underline decoration-[#FF5A00] decoration-2 underline-offset-4 font-black text-white">
                        without a full-time CFO hire
                      </span>
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-blue-100 antialiased">
                      Scope depends on turnover, transaction volume, reporting frequency and complexity
                    </p>
                  </div>
                </div>

                {/* Definition: 2-3 Line Description */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                  A Virtual Chief Financial Officer helps Indian businesses bring structure, visibility and discipline to finance without the fixed cost of a full-time senior CFO. Get practical support for cash flow, budgets, MIS, profitability, financial controls, compliance coordination and management decision-making.
                </p>

                {/* 6 Feature Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Clock className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Monthly MIS & Financial Review</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <BarChart3 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Cash-Flow & Working Capital Focus</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <IndianRupee className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Budgeting & Forecasting Support</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Zap className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Decision-Ready Financial Insights</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Receipt className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>GST, TDS & Tax Coordination</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Briefcase className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Dedicated Virtual CFO Support</span>
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
                      Reports & Reviews
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
                    <span>Tailored CFO Engagement</span>
                  </div>

                  {formSubmitted ? (
                    <div className="text-center py-8 space-y-4 animate-in fade-in">
                      <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Application Received!</h3>
                      <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
                        Thank you <span className="font-bold">{applicantName}</span>. Our Virtual CFO specialist has received your business requirements. We will call you within 15 minutes at <span className="font-bold">{applicantMobile}</span>.
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
                              Virtual CFO Consultation Desk
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
                              Contact for Pricing
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-[11px] font-bold text-slate-800 block leading-tight">
                            Custom Scope
                          </span>
                          <span className="text-[10px] font-medium text-slate-500 block leading-tight">
                            Based on business requirements
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
                                Select Your Business State *
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
                                Your business location, entity type, transaction volume and compliance footprint help us understand the right Virtual CFO scope.
                              </span>
                            </div>

                            <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100 text-xs text-slate-600 space-y-1">
                              <div className="flex items-center gap-1.5 font-bold text-[#0B3D91]">
                                <ShieldCheck className="w-4 h-4 text-[#FF5A00]" />
                                <span>Why choose Virtual CFO support?</span>
                              </div>
                              <p className="text-[11px]">
                                Get structured finance oversight, monthly management reporting, cash-flow visibility, budgeting support and a clearer view of what is driving profit, cost and working capital.
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
                                  Business Entity Type *
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
                                  Business Activity / Industry *
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
                                Business Owner / Authorized Person Name *
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
                                Business / Authorized Person PAN (Optional for consultation)
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
                                Select Virtual CFO Plan *
                              </label>
                              <select
                                value={selectedPackage}
                                onChange={(e) => setSelectedPackage(e.target.value)}
                                className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                              >
                                <option value="Virtual CFO Custom Plan">Virtual CFO Custom Plan — Contact for Pricing</option>
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
                                  <span>Submit &amp; Request CFO Consultation</span>
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
                { id: 'eligibility', label: 'Who Needs It' },
                { id: 'documents', label: 'Information Required' },
                { id: 'steps', label: 'Steps' },
                { id: 'legal-status', label: 'Finance Governance' },
                { id: 'post-compliance', label: 'Ongoing CFO Support' },
                { id: 'comparison', label: 'Virtual vs Full-time CFO' },
                { id: 'tax-implications', label: 'Tax & Compliance' },
                { id: 'financing', label: 'Funding Readiness' },
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
                Flexible CFO Engagement
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0D47A1] mt-2">
                Choose Your Virtual CFO Plan
              </h2>
              <p className="text-sm text-slate-500 mt-2 mx-auto max-w-2xl text-center">
                A focused finance leadership package built around your business stage, reporting needs and growth priorities. Get clarity on cash, margins, budgets, controls and financial decisions without adding a full-time CFO to payroll.
              </p>
            </div>

            <div className="max-w-[520px] mx-auto">
              <div className="bg-white rounded-2xl border-t-4 border-t-[#FF6B00] border-l border-r border-b border-slate-200 p-6 sm:p-8 shadow-xl flex flex-col justify-between">
                <div>
                  {/* Badges */}
                  <div className="flex items-center justify-start flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 rounded bg-orange-100 text-orange-900 text-[10px] font-black uppercase tracking-wide">
                      FLEXIBLE CFO SUPPORT
                    </span>
                    <span className="px-3 py-1 rounded bg-yellow-100 text-yellow-900 text-[10px] font-black uppercase tracking-wide">
                      CUSTOM SCOPE • NO FIXED PLAN
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0D47A1]">Virtual CFO Growth Plan</h3>
                  <p className="text-sm text-slate-500 mb-6">
                    Senior finance support for founders and management teams that need better control, visibility and decision-ready reporting as the business grows.
                  </p>

                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <div className="flex items-baseline gap-3">
                      <span className="text-sm text-slate-500 font-bold">Tailored to your business</span>
                      <span className="text-3xl font-extrabold text-[#0D47A1]">Contact for Pricing</span>
                    </div>
                    <span className="text-xs text-slate-500 font-medium block mt-1">
                      Scope depends on turnover, transaction volume, reporting frequency and complexity
                    </span>
                  </div>

                  {/* Checklist */}
                  <div className="space-y-3.5 mb-8">
                    <p className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-4">PACKAGE INCLUSIONS:</p>
                    {[
                      'Monthly MIS, KPI Dashboard & Management Reporting',
                      'Cash-Flow Planning & Working Capital Review',
                      'Budgeting, Forecasting & Variance Analysis',
                      'Profitability, Cost & Margin Analysis',
                      'GST, TDS, Tax & Compliance Coordination',
                      'Dedicated Virtual CFO & Management Review Support'
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
                    setSelectedPackage('Virtual CFO Custom Plan');
                    scrollToSection('lead-capture-widget');
                  }}
                  className="w-full py-4 rounded-xl bg-[#0D47A1] hover:bg-blue-900 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer text-center"
                >
                  Request Your Virtual CFO Consultation
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
                Strategic Finance Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                What is a Virtual CFO?
              </h2>
            </div>

            {/* Definition paragraph */}
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              A Virtual CFO works as an outsourced finance leader for your business. Instead of only recording transactions, the role focuses on turning accounting data into management information, improving cash discipline, monitoring financial performance, and helping founders make better commercial decisions.
            </p>

            {/* 5 Bullets with bold lead-ins */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Target Business Audience:</strong>
                  Ideal for startups, MSMEs, private limited companies, LLPs, agencies, manufacturers, traders, e-commerce brands and growing businesses that need stronger finance leadership without hiring a full-time CFO.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Operational Flexibility:</strong>
                  A structured reporting rhythm creates visibility into revenue, gross margin, operating costs, receivables, payables, cash position and key business KPIs.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Defined Legal Structure:</strong>
                  The Virtual CFO works alongside founders, management, accountants and tax professionals to improve financial controls, ownership of numbers and decision-making discipline.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Optional but Valuable Registration:</strong>
                  The engagement is flexible: businesses can start with a focused monthly finance review and expand the scope as reporting, fundraising, banking or operational complexity grows.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Growth and Capital Limitations:</strong>
                  Better financial visibility helps management identify margin leakage, cash-flow pressure, cost trends and funding needs early—so action can be taken with better information.
                </div>
              </div>
            </div>

            {/* Closing Summary */}
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pt-2">
              In summary, a Virtual CFO brings senior finance thinking into your business on a flexible basis—combining reporting, planning, control and management support to help you operate with greater financial clarity.
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
                How Virtual CFO Services Work in India
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              We begin by understanding your business model, current accounting setup, financial pain points, reporting requirements and management goals. The engagement is then structured around the areas where senior finance oversight can create the most value.
            </p>

            <p className="text-slate-700 text-sm leading-relaxed">
              Once the scope is agreed, the Virtual CFO reviews your financial data, sets a reporting rhythm, builds key dashboards and works with your internal accountant or external professionals to improve controls, forecasts and management visibility.
            </p>

            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B3D91] flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-[#FF5A00]" />
                <span>How akshayb2bsolutions Strengthens Your Finance Function:</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our finance team helps organize management reporting, cash-flow monitoring, budgets, financial controls, performance reviews and compliance coordination so business owners get clearer numbers and faster decision support.
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
                Key Benefits of a Virtual CFO
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Clear Cash-Flow Visibility',
                  desc: 'Know where cash is coming from, where it is going, and which upcoming commitments may create pressure on working capital.'
                },
                {
                  title: 'Decision-Ready MIS Reporting',
                  desc: 'Receive structured management reports and KPI views that turn accounting data into useful business insight.'
                },
                {
                  title: 'Better Budget & Forecast Discipline',
                  desc: 'Build realistic budgets, compare actual performance with plans, and update forecasts as business conditions change.'
                },
                {
                  title: 'Profitability & Margin Focus',
                  desc: 'Review product, service, customer or channel economics to identify margin leakage and areas needing management attention.'
                },
                {
                  title: 'Stronger Financial Controls',
                  desc: 'Improve approval workflows, reconciliations, receivable follow-up, payable planning and ownership of key financial processes.'
                },
                {
                  title: 'Flexible Senior Finance Support',
                  desc: 'Access CFO-level guidance without the fixed salary and overhead of building a full-time senior finance role from day one.'
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
                Onboarding Readiness
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Virtual CFO Onboarding Checklist
              </h2>
            </div>

            <div className="space-y-3">
              {[
                { title: 'Latest Accounting Data', desc: 'Keep your books reasonably updated so the Virtual CFO can review revenue, expenses, receivables, payables and cash accurately.' },
                { title: 'Bank & Cash Position', desc: 'Share current bank balances, major payment commitments, loan obligations and expected collections for working-capital planning.' },
                { title: 'Revenue & Cost Drivers', desc: 'Identify the main products, services, customers, channels and cost heads that drive your business economics.' },
                { title: 'Receivables & Payables Ageing', desc: 'Prepare customer outstanding and vendor payable data to improve collections, payment planning and cash conversion.' },
                { title: 'Existing Budgets or Targets', desc: 'Share any sales targets, expense budgets, hiring plans or expansion assumptions already used by management.' },
                { title: 'Compliance Calendar', desc: 'Provide the current GST, TDS, payroll, income-tax and other recurring compliance responsibilities relevant to the business.' },
                { title: 'Management Reporting Needs', desc: 'Define which KPIs and decisions founders or management want to review weekly, monthly or quarterly.' },
                { title: 'Key Business Challenges', desc: 'Highlight issues such as cash shortage, low margins, delayed collections, rising costs, funding needs or weak reporting so the engagement can prioritize them.' }
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
                Ideal Client Profile
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Who Should Consider a Virtual CFO?
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              Virtual CFO services are not restricted to a specific legal structure. The service is most valuable when a business has meaningful transaction volume, management reporting needs, cash-flow complexity or growth decisions that require stronger financial oversight.
            </p>

            <div className="space-y-3">
              {[
                { title: 'Growing Startups & MSMEs', desc: 'Businesses that have outgrown basic bookkeeping and need better planning, reporting and financial control.' },
                { title: 'Founder-Led Businesses', desc: 'Promoters who spend too much time interpreting numbers, chasing reports or making financial decisions without a structured finance partner.' },
                { title: 'Businesses Facing Cash-Flow Pressure', desc: 'Companies with delayed collections, uneven payment cycles, inventory pressure or unpredictable cash needs.' },
                { title: 'Companies Preparing for Funding or Loans', desc: 'Businesses that need stronger forecasts, financial models, management reports and lender/investor-ready financial information.' },
                { title: 'Multi-Branch or Multi-Channel Businesses', desc: 'Organizations that need consolidated performance visibility across locations, products, teams or sales channels.' },
                { title: 'Businesses with Compliance Complexity', desc: 'Companies managing recurring GST, TDS, payroll, tax and statutory responsibilities across a growing operation.' },
                { title: 'Management Teams Seeking Better KPIs', desc: 'Businesses that want a consistent monthly review of revenue, margins, costs, cash, working capital and operational financial metrics.' }
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
                Information Required to Start Virtual CFO Services
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              To start efficiently, we generally need access to your latest financial and operational information. The exact data requirement depends on your accounting system, reporting frequency, business complexity and the agreed Virtual CFO scope.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Accounting Data / Trial Balance', desc: 'Latest accounting data, trial balance or ledger export from Tally, Zoho Books, Busy, ERP or your existing accounting system.' },
                { title: 'Bank Statements & Reconciliations', desc: 'Recent bank statements and available reconciliation data to understand actual cash movement and outstanding entries.' },
                { title: 'Sales, Purchase & Expense Reports', desc: 'Monthly sales, purchase, operating-expense and other relevant reports used to analyze business performance.' },
                { title: 'Receivables & Payables Ageing', desc: 'Customer and vendor ageing schedules for collections planning, payment prioritization and working-capital review.' },
                { title: 'Tax & Compliance Information', desc: 'Relevant GST, TDS, payroll, income-tax and statutory filing information for compliance coordination and financial planning.' },
                { title: 'Budgets, Loans & Management Targets', desc: 'Existing budgets, loan schedules, business targets, capex plans and expansion assumptions used for forecasting and decision support.' }
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
                Engagement Process
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Step-by-Step Virtual CFO Engagement Process
              </h2>
            </div>

            <div className="space-y-4">
              {[
                { step: 'Step 1', title: 'Business & Finance Diagnostic', desc: 'Understand your business model, current accounting process, finance team, pain points, reporting gaps and management priorities.' },
                { step: 'Step 2', title: 'Review Financial Data & Controls', desc: 'Review accounting data, bank position, receivables, payables, margins, loans, compliance status and existing internal controls.' },
                { step: 'Step 3', title: 'Define CFO Scope & Reporting Rhythm', desc: 'Agree the monthly deliverables, KPIs, dashboards, review cadence and responsibilities between your team and the Virtual CFO.' },
                { step: 'Step 4', title: 'Build MIS, Budget & Cash-Flow View', desc: 'Create practical management reports, cash-flow tracking, budgets and forecasts aligned with the decisions management needs to make.' },
                { step: 'Step 5', title: 'Monthly Performance Review', desc: 'Review actual performance against targets, identify variances, working-capital issues, cost trends and priority actions with management.' },
                { step: 'Step 6', title: 'Continuous Finance Improvement', desc: 'Strengthen controls, reporting quality, compliance coordination, forecasts and financial processes as the business evolves.' }
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
                Finance Governance
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Financial Governance & Management Control
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
                <h4 className="text-sm font-bold text-[#0B3D91]">1. Legal Identity</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The Virtual CFO acts as a management finance partner; statutory responsibilities and signing authority remain with the business and the appropriately authorized professionals or officers.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
                <h4 className="text-sm font-bold text-[#0B3D91]">2. Compliance Requirements</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The finance governance scope may include monthly close discipline, MIS review, cash-flow monitoring, budget control, compliance calendars, receivable follow-up and management action tracking.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
                <h4 className="text-sm font-bold text-[#0B3D91]">3. Advantages &amp; Limitations</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A Virtual CFO provides senior finance perspective without adding a permanent senior position, but the quality of outcomes depends on timely data, clear ownership and management participation.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1.5">
                <h4 className="text-sm font-bold text-[#0B3D91]">4. Risk &amp; Responsibility</h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Management remains responsible for business decisions and statutory obligations, while the Virtual CFO provides analysis, structure, recommendations and coordination support.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-xs text-slate-700 space-y-1">
              <h4 className="font-bold text-[#0B3D91]">5. akshayb2bsolutions&apos;s Role in Explaining Legal Implications:</h4>
              <p>
                Our finance professionals help define practical reporting, planning, control and compliance-coordination processes aligned with your business stage and internal team.
              </p>
            </div>
          </div>
        </section>

        {/* 13. ONGOING VIRTUAL CFO SUPPORT (7 BULLETS) */}
        <section id="post-compliance" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Ongoing Obligations
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Ongoing Virtual CFO Support Checklist
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              A Virtual CFO engagement works best as an ongoing management rhythm. Regular reviews help founders spot cash pressure, margin leakage, compliance gaps and performance trends before they become larger business problems.
            </p>

            <div className="space-y-3">
              {[
                {
                  title: 'Compliance & Tax Calendar Oversight',
                  desc: 'Track GST, TDS, payroll, income-tax and other relevant finance/compliance deadlines with clear ownership and documentation readiness.'
                },
                {
                  title: 'Bank & Cash Management Review',
                  desc: 'Review bank balances, payment commitments, collections, borrowing and near-term cash requirements to improve liquidity planning.'
                },
                {
                  title: 'Monthly Close & Management Reporting',
                  desc: 'Build a dependable monthly close and MIS process so management receives timely revenue, margin, cost, cash and working-capital information.'
                },
                {
                  title: 'Budget vs Actual Review',
                  desc: 'Compare actual results against budgets and forecasts, explain key variances and agree corrective actions with responsible teams.'
                },
                {
                  title: 'Receivables & Payables Management',
                  desc: 'Monitor ageing, collection priorities, vendor obligations and payment scheduling to strengthen working-capital discipline.'
                },
                {
                  title: 'Profitability & Cost Review',
                  desc: 'Review cost trends, margins and unit economics to identify leakage, inefficient spending and opportunities for better commercial decisions.'
                },
                {
                  title: 'Virtual CFO Management Support',
                  desc: 'Receive structured follow-ups on agreed financial actions, reporting priorities and compliance coordination through a consistent management review process.'
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
                Engagement Comparison
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Virtual CFO vs Accountant vs Full-Time CFO
              </h2>
            </div>

            <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm">
              <table className="w-full text-left text-xs border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-[#0B3D91] text-white">
                    <th className="p-3.5 font-bold border-r border-blue-800">Parameter</th>
                    <th className="p-3.5 font-bold bg-orange-500 text-[#0B3D91] border-r border-orange-600">
                      Virtual CFO
                    </th>
                    <th className="p-3.5 font-bold border-r border-blue-800">Accountant / Bookkeeper</th>
                    <th className="p-3.5 font-bold border-r border-blue-800">Part-Time Finance Manager</th>
                    <th className="p-3.5 font-bold">Full-Time CFO</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">1. Primary Role</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold text-orange-800 border-r border-slate-200">
                      Strategic finance leadership & management reporting
                    </td>
                    <td className="p-3.5 border-r border-slate-200">Bookkeeping, accounting & routine reports</td>
                    <td className="p-3.5 border-r border-slate-200">Operational finance supervision</td>
                    <td className="p-3.5">Executive finance leadership</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">2. Typical Engagement</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold text-orange-800 border-r border-slate-200">
                      Flexible monthly / retained support
                    </td>
                    <td className="p-3.5 border-r border-slate-200">Monthly or transaction-based service</td>
                    <td className="p-3.5 border-r border-slate-200">Part-time / scheduled involvement</td>
                    <td className="p-3.5">Full-time employment</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">3. Strategic Depth</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold text-rose-700 border-r border-slate-200">
                      High — planning, analysis & decision support
                    </td>
                    <td className="p-3.5 border-r border-slate-200">Low to Medium</td>
                    <td className="p-3.5 border-r border-slate-200">Medium</td>
                    <td className="p-3.5 text-orange-800 font-semibold">Highest</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">4. Cost Structure</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold border-r border-slate-200">
                      Variable, scope-based professional fee
                    </td>
                    <td className="p-3.5 border-r border-slate-200">Lower routine accounting cost</td>
                    <td className="p-3.5 border-r border-slate-200">Moderate recurring cost</td>
                    <td className="p-3.5 text-orange-800 font-semibold">Highest fixed salary & overhead</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">5. Management Support</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold border-r border-slate-200">
                      Regular founder / management finance review
                    </td>
                    <td className="p-3.5 border-r border-slate-200">Limited to accounting information</td>
                    <td className="p-3.5 border-r border-slate-200">Operational finance support</td>
                    <td className="p-3.5">Direct executive participation</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">6. Best Use Case</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold text-orange-800 border-r border-slate-200">
                      Growing business needing senior finance insight
                    </td>
                    <td className="p-3.5 border-r border-slate-200">Routine books and transaction recording</td>
                    <td className="p-3.5 border-r border-slate-200">Businesses needing day-to-day finance supervision</td>
                    <td className="p-3.5">Larger organizations needing an in-house finance head</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">7. Scalability</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold border-r border-slate-200">
                      Easy to expand scope as the business grows
                    </td>
                    <td className="p-3.5 border-r border-slate-200">Scales mainly with transaction volume</td>
                    <td className="p-3.5 border-r border-slate-200">Moderate</td>
                    <td className="p-3.5 text-orange-800 font-semibold">High, but requires full-time organizational commitment</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200">8. Ideal For</td>
                    <td className="p-3.5 bg-orange-50/60 font-semibold text-slate-900 border-r border-slate-200">
                      Startups, MSMEs & growing founder-led businesses
                    </td>
                    <td className="p-3.5 border-r border-slate-200">Small businesses needing clean books</td>
                    <td className="p-3.5 border-r border-slate-200">Businesses needing stronger operational finance control</td>
                    <td className="p-3.5">Larger, complex businesses with continuous CFO workload</td>
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
                Tax & Compliance Coordination for Indian Businesses
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              A Virtual CFO does not replace statutory professionals where certification or filing authority is required. Instead, the role helps keep financial data organized, highlights tax and compliance impact on business decisions, and coordinates timely action with your accountant, CA or tax advisor.
            </p>

            <div className="space-y-3">
              {[
                { title: 'GST & Indirect Tax Coordination', desc: 'Keep sales, purchases, input-tax information and reconciliations organized so GST decisions and filings can be coordinated efficiently with your tax professional.' },
                { title: 'TDS & Withholding Visibility', desc: 'Track payment categories, TDS obligations, challan data and return requirements as part of the monthly finance calendar.' },
                { title: 'Income-Tax Planning Inputs', desc: 'Review profitability, advance-tax impact, major deductions, provisions and year-end requirements with the appropriate tax advisor.' },
                { title: 'Payroll & Statutory Cost Review', desc: 'Monitor salary costs, payroll deductions and applicable statutory contributions as part of monthly financial reporting.' },
                { title: 'Audit & Year-End Readiness', desc: 'Maintain cleaner schedules, reconciliations and supporting financial records to reduce last-minute year-end and audit preparation pressure.' },
                { title: 'Compliance Calendar & Ownership', desc: 'Create visibility on key finance and statutory deadlines, data requirements and responsible team members so compliance work is better coordinated.' }
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
                Funding Readiness
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                How a Virtual CFO Improves Funding Readiness
              </h2>
            </div>

            <p className="text-slate-700 text-sm leading-relaxed">
              Strong financial reporting improves funding readiness. Clear forecasts, runway visibility, working-capital planning and credible management information can help founders communicate more effectively with banks, investors and other finance providers.
            </p>

            <div className="space-y-3">
              {[
                { title: 'Bank Loan Readiness', desc: 'Organize financial statements, forecasts, debt schedules and management information that lenders commonly review during credit assessment.' },
                { title: 'Working-Capital Planning', desc: 'Estimate cash gaps created by receivable cycles, inventory, vendor terms and growth so funding requirements can be identified earlier.' },
                { title: 'Investor-Ready Financial Model', desc: 'Build a structured view of revenue assumptions, costs, runway, profitability and future cash needs for fundraising discussions.' },
                { title: 'CMA & Projection Support', desc: 'Prepare management projections and supporting schedules that can be used with your CA, banker or finance advisor for lending conversations.' },
                { title: 'Debt vs Equity Scenario Review', desc: 'Compare the financial impact of borrowing, promoter infusion or equity fundraising based on cash flow, dilution and repayment capacity.' },
                { title: 'Use-of-Funds Planning', desc: 'Link funding requirements to inventory, hiring, capex, expansion or marketing plans so capital is connected to measurable business priorities.' },
                { title: 'Lender / Investor Reporting Support', desc: 'Maintain consistent management reporting and financial explanations for follow-up discussions with banks, investors and stakeholders.' }
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
                { title: 'Business & Finance Diagnostic', desc: 'We review your business model, current accounts, reporting gaps, cash-flow issues and management priorities before defining the CFO scope.' },
                { title: 'Custom MIS & Dashboard Design', desc: 'We structure practical monthly reports and KPI views around the numbers your founders and management team actually need to monitor.' },
                { title: 'Cash-Flow & Working-Capital Discipline', desc: 'We help improve visibility on collections, payments, bank position and future cash requirements through a consistent review process.' },
                { title: 'Budget, Forecast & Performance Review', desc: 'We build and review budgets, forecasts and variances so management can respond faster when actual performance moves away from plan.' },
                { title: 'Dedicated Strategic Finance Support', desc: 'Get an experienced finance partner for management discussions, compliance coordination, funding preparation and financial decision support.' }
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
                  desc: 'Remote-first finance workflows reduce unnecessary paperwork and give management a consistent reporting and review process.',
                  icon: Clock
                },
                {
                  title: 'Scope-Based Transparent Pricing',
                  desc: 'Pricing is tailored to business size, transaction volume, reporting frequency, entities and the level of finance leadership required.',
                  icon: Tag
                },
                {
                  title: 'Trusted by Thousands',
                  desc: 'Designed to support Indian startups, MSMEs and growing businesses with professional finance and compliance coordination.',
                  icon: Users
                },
                {
                  title: 'Compliance Calendar Visibility',
                  desc: 'Keep key finance and statutory deadlines visible so your team can prepare data and coordinate filings on time.',
                  icon: Zap
                },
                {
                  title: 'Secure and Confidential',
                  desc: 'Enterprise-grade 256-bit SSL encryption protecting sensitive financial records, management reports and business documentation.',
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
              Build a Stronger Finance Function with a Virtual CFO
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 max-w-2xl mx-auto leading-relaxed">
              Move from reactive accounting to proactive financial management. Get a tailored Virtual CFO engagement designed around your business model, current systems, growth plans and management reporting needs.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button
                onClick={() => scrollToSection('lead-capture-widget')}
                className="px-6 py-3 rounded-xl bg-[#FF5A00] hover:bg-orange-500 text-[#0B3D91] font-black text-xs sm:text-sm shadow-xl transition-all cursor-pointer"
              >
                Request Virtual CFO Consultation
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
                  Popular Related Finance &amp; Compliance Services
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
                  Track Your Finance & Compliance in One Place
                </h3>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Use the akshayb2bsolutions mobile experience to stay connected with financial updates, compliance reminders, documents and professional support from anywhere.
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

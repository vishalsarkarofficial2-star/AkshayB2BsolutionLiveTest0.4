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
  Monitor,
  Layout,
  Rocket,
  Server,
  Code2,
  Globe,
  CheckSquare,
  XCircle,
  Cpu,
  Layers3,
  RefreshCw,
  Wrench,
  UserCheck,
  BarChart3,
  MessageSquare,
  Database
} from 'lucide-react';
import { HeaderMegaMenu } from '../components/HeaderMegaMenu';
import { TopUtilityBar } from '../components/TopUtilityBar';

interface CRMDevelopmentLandingProps {
  onBackToHome: () => void;
  onSelectService: (serviceName: string) => void;
  onOpenBrochure: () => void;
  onOpenAppointment: () => void;
}

// 6 Accordion FAQs for CRM Development
const FAQ_ITEMS = [
  {
    q: 'Why should my business choose a Custom CRM over off-the-shelf software like Salesforce or Zoho?',
    a: 'Off-the-shelf CRMs charge expensive monthly per-user subscription fees and force your team into rigid, generic workflows. A Custom CRM gives you 100% source code ownership, zero per-user seat fees, complete data privacy on your private cloud, and workflows built strictly around your sales process.'
  },
  {
    q: 'Can the CRM integrate with our existing website, Meta Ads, and WhatsApp Business API?',
    a: 'Yes, 100%! We engineer custom webhooks and API connectors so inquiries from Meta Ads, Google Ads, your website contact forms, and WhatsApp automatically populate inside your CRM leads pipeline in real time.'
  },
  {
    q: 'How long does it take to develop and deploy a custom CRM platform?',
    a: 'A streamlined custom CRM platform with lead tracking, sales pipelines, and team roles is typically delivered in 2 to 3 weeks. Enterprise CRMs with complex ERP sync or telephony integrations take 4 to 6 weeks.'
  },
  {
    q: 'Will my sales team be able to use the CRM on their mobile phones?',
    a: 'Yes, all our custom CRM platforms are engineered with mobile-responsive progressive web architectures or dedicated Android/iOS apps so your sales executives can update lead statuses and log client calls on the go.'
  },
  {
    q: 'How do you handle data privacy and access controls for different team roles?',
    a: 'We implement granular Role-Based Access Control (RBAC). For example, telecallers only see assigned leads, sales managers see team pipelines, and administrators hold master revenue reports and export access.'
  },
  {
    q: 'What training and post-deployment support do you provide?',
    a: 'We provide comprehensive video training walkthroughs for your staff, user documentation manuals, and 12 months of free technical support for server upkeep, security patches, and bug resolution.'
  }
];

// Related IT & Digital Services cross-linking
const RELATED_SERVICES = [
  {
    title: 'Website Development',
    desc: 'Fast, responsive corporate websites, landing pages, and e-commerce portals built on React.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
    price: 'Custom Pricing'
  },
  {
    title: 'App Development',
    desc: 'High-performance Android & iOS mobile applications with native UI and cloud synchronization.',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=80',
    price: 'Custom Pricing'
  },
  {
    title: 'Software Development',
    desc: 'Enterprise ERPs, billing software, SaaS platforms, and operational automation software.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80',
    price: 'Custom Pricing'
  },
  {
    title: 'Digital Marketing',
    desc: 'Results-driven Meta Ads, Google PPC campaigns, organic SEO, and lead generation.',
    img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&auto=format&fit=crop&q=80',
    price: 'Custom Pricing'
  },
  {
    title: 'Meta Ads Management',
    desc: 'Laser-targeted Facebook & Instagram ad campaigns engineered for maximum ROI.',
    img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&auto=format&fit=crop&q=80',
    price: 'Custom Pricing'
  }
];

export const CRMDevelopmentLanding: React.FC<CRMDevelopmentLandingProps> = ({
  onBackToHome,
  onSelectService,
  onOpenBrochure,
  onOpenAppointment
}) => {
  // Navigation tabs state
  const [activeNavTab, setActiveNavTab] = useState('packages');

  // Form state
  const [formStep, setFormStep] = useState(1);
  const [selectedSubService, setSelectedSubService] = useState('Custom CRM Development');
  const [teamSize, setTeamSize] = useState('11 - 50 Team Members');
  const [selectedBudget, setSelectedBudget] = useState('₹25,000 - ₹50,000');
  const [selectedPackage, setSelectedPackage] = useState('Standard Growth CRM (Custom Pricing)');
  const [applicantName, setApplicantName] = useState('');
  const [applicantMobile, setApplicantMobile] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [projectNote, setProjectNote] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaCode, setCaptchaCode] = useState('4C9R7');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Animated counters
  const [counterClients, setCounterClients] = useState(0);
  const [counterCRMs, setCounterCRMs] = useState(0);
  const [counterUsers, setCounterUsers] = useState(0);

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
      setCounterClients(Math.floor(progress * 1200));
      setCounterCRMs(Math.floor(progress * 420));
      setCounterUsers(Math.floor(progress * 25000));
      if (start >= steps) {
        clearInterval(timer);
        setCounterClients(1200);
        setCounterCRMs(420);
        setCounterUsers(25000);
      }
    }, intervalTime);
    return () => clearInterval(timer);
  }, []);

  const handleNextStep = () => {
    if (formStep === 1) {
      if (!selectedSubService) return;
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
        {/* 2. BREADCRUMB NAVIGATION */}
        <div className="bg-white border-b border-slate-200/80 py-3 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto text-xs text-slate-500 flex items-center gap-2 flex-wrap font-medium">
            <button
              onClick={onBackToHome}
              className="text-[#0B3D91] hover:text-[#FF5A00] transition-colors cursor-pointer"
            >
              Home
            </button>
            <span className="text-slate-400">&gt;</span>
            <span className="text-[#0B3D91] font-semibold">IT &amp; Digital Services</span>
            <span className="text-slate-400">&gt;</span>
            <span className="text-slate-900 font-bold">CRM Development Services</span>
          </div>
        </div>

        {/* 3. HERO SECTION */}
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
                  <BarChart3 className="w-3.5 h-3.5 text-[#FF5A00]" />
                  <span>Enterprise CRM Engineering Studio</span>
                  <span className="w-1 h-1 rounded-full bg-white/60"></span>
                  <span className="text-white">Zero Per-User Seat Fees</span>
                </div>

                {/* H1 Heading & Tagline */}
                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight antialiased">
                    Custom CRM Development Services
                  </h1>
                  <div className="space-y-0.5">
                    <p className="text-xl sm:text-2xl font-black text-orange-300 antialiased">
                      Build your bespoke sales &amp; lead CRM with{' '}
                      <span className="underline decoration-[#FF5A00] decoration-2 underline-offset-4 font-black text-white">
                        Custom Pricing
                      </span>
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-blue-100 antialiased">
                      + 100% Code Ownership &amp; WhatsApp Automation Integration
                    </p>
                  </div>
                </div>

                {/* Definition: 2-3 Line Description */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                  We design and build custom Customer Relationship Management (CRM) platforms tailored strictly to your sales workflow. Seamlessly automate lead capture from Meta &amp; Google Ads, track deal pipelines, trigger instant WhatsApp communications, and empower your team without recurring per-seat subscription charges.
                </p>

                {/* 6 Feature Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Users className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Zero Per-Seat Costs</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Zap className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Instant Lead Auto-Route</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <MessageSquare className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>WhatsApp Business API</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Lock className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Private Cloud Data Privacy</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Award className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>100% Source Code Handoff</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <BarChart3 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Sales Executive Reports</span>
                  </div>
                </div>

                {/* Trust Counters */}
                <div className="grid grid-cols-3 gap-3 pt-3">
                  <div className="p-3 rounded-2xl bg-white/10 border border-white/20 text-center">
                    <div className="text-xl sm:text-3xl font-black text-orange-300 font-mono">
                      {counterCRMs.toLocaleString()}+
                    </div>
                    <div className="text-[10px] sm:text-xs font-semibold text-slate-200 uppercase tracking-wider mt-0.5">
                      CRMs Deployed
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/10 border border-white/20 text-center">
                    <div className="text-xl sm:text-3xl font-black text-white font-mono">
                      {counterClients.toLocaleString()}+
                    </div>
                    <div className="text-[10px] sm:text-xs font-semibold text-slate-200 uppercase tracking-wider mt-0.5">
                      Corporate Clients
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/10 border border-white/20 text-center">
                    <div className="text-xl sm:text-3xl font-black text-orange-300 font-mono">
                      {counterUsers.toLocaleString()}+
                    </div>
                    <div className="text-[10px] sm:text-xs font-semibold text-slate-200 uppercase tracking-wider mt-0.5">
                      Daily Active Users
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
                    <span className="text-slate-300 text-[11px]">User Rating</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 border border-white/15 text-xs text-white">
                    <Award className="w-3 h-3 text-orange-300" />
                    <span className="font-bold">100%</span>
                    <span className="text-slate-300 text-[11px]">Data Privacy</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 border border-white/15 text-xs text-white">
                    <ShieldCheck className="w-3 h-3 text-orange-400" />
                    <span className="font-bold">Zero</span>
                    <span className="text-slate-300 text-[11px]">Monthly License Fees</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Multi-Step Lead Capture Form */}
              <div id="lead-capture-widget" className="lg:col-span-5 scroll-mt-24">
                <div className="bg-white rounded-2xl shadow-2xl border-2 border-orange-400/80 p-5 sm:p-6 text-slate-900 relative">
                  {/* Urgency Badge */}
                  <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-[#FF5A00] text-[#0B3D91] text-xs font-black uppercase tracking-wider shadow-md flex items-center gap-1">
                    <Flame className="w-3 h-3 fill-[#0B3D91]" />
                    <span>Free CRM Blueprint</span>
                  </div>

                  {formSubmitted ? (
                    <div className="text-center py-8 space-y-4 animate-in fade-in">
                      <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Application Received!</h3>
                      <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
                        Thank you <span className="font-bold">{applicantName}</span>. Our lead CRM solutions consultant has been assigned to your project docket. We will call you at <span className="font-bold">{applicantMobile}</span> within 15 minutes.
                      </p>
                      <button
                        onClick={() => {
                          setFormSubmitted(false);
                          setFormStep(1);
                        }}
                        className="px-5 py-2 rounded-lg bg-[#0B3D91] text-white text-xs font-bold shadow-md hover:bg-blue-900 transition-colors cursor-pointer"
                      >
                        Submit Another Inquiry
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
                              CRM Consultation Desk
                            </h3>
                          </div>
                          <p className="text-[11px] text-slate-500 font-medium mt-0.5">
                            Step {formStep} of 3 • Quick 60-second setup
                          </p>
                        </div>
                        <span className="text-[10px] font-bold text-orange-700 bg-orange-50 border border-orange-200 px-2 py-0.5 rounded">
                          Free Price Estimate
                        </span>
                      </div>

                      {/* Default Price Highlight Box */}
                      <div className="bg-gradient-to-r from-orange-50 to-orange-50 border border-orange-300 rounded-xl p-3 mb-4 flex items-center justify-between shadow-xs">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-[#0B3D91] text-[#FF5A00] flex items-center justify-center font-black text-sm shadow-xs flex-shrink-0">
                            ₹
                          </div>
                          <div>
                            <span className="text-[10px] font-black uppercase tracking-wider text-orange-900 block leading-tight">
                              Indicative Starting Price
                            </span>
                            <span className="text-base font-black text-[#0B3D91] leading-none">
                              Custom Pricing
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-[11px] font-bold text-slate-800 block leading-tight">
                            Custom Scope Quote
                          </span>
                          <span className="text-[10px] font-medium text-slate-500 block leading-tight">
                            One-Time Investment
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
                        {/* STEP 1: Select Sub-Service & Team Size */}
                        {formStep === 1 && (
                          <div className="space-y-3 animate-in fade-in">
                            <div>
                              <label className="block text-xs font-bold text-slate-700 mb-1">
                                Select CRM Category *
                              </label>
                              <select
                                value={selectedSubService}
                                onChange={(e) => setSelectedSubService(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                              >
                                <option value="Custom CRM Development">Custom CRM Development</option>
                                <option value="Sales CRM">Sales &amp; Pipeline CRM</option>
                                <option value="Lead Management CRM">Lead Management &amp; Auto-Routing CRM</option>
                                <option value="Customer Management System">Customer Service &amp; Ticketing System</option>
                              </select>
                            </div>

                            <div>
                              <label className="block text-xs font-bold text-slate-700 mb-1">
                                Team / User Count *
                              </label>
                              <select
                                value={teamSize}
                                onChange={(e) => setTeamSize(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                              >
                                <option value="1 - 10 Team Members">1 - 10 Users / Executives</option>
                                <option value="11 - 50 Team Members">11 - 50 Users / Executives</option>
                                <option value="51 - 200 Team Members">51 - 200 Users / Executives</option>
                                <option value="200+ Enterprise Team">200+ Enterprise Team</option>
                              </select>
                            </div>

                            <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100 text-xs text-slate-600 space-y-1">
                              <div className="flex items-center gap-1.5 font-bold text-[#0B3D91]">
                                <ShieldCheck className="w-4 h-4 text-[#FF5A00]" />
                                <span>Why build a custom CRM with us?</span>
                              </div>
                              <p className="text-[11px]">
                                Zero recurring seat fees, 100% source code ownership, WhatsApp Business API integration, and private cloud data control.
                              </p>
                            </div>
                          </div>
                        )}

                        {/* STEP 2: Personal Contact Details */}
                        {formStep === 2 && (
                          <div className="space-y-3 animate-in fade-in">
                            <div>
                              <label className="block text-xs font-bold text-slate-700 mb-1">
                                Your Full Name *
                              </label>
                              <input
                                type="text"
                                required
                                value={applicantName}
                                onChange={(e) => setApplicantName(e.target.value)}
                                placeholder="e.g. Rajesh Malhotra"
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
                                  placeholder="name@company.com"
                                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                                />
                              </div>
                            </div>

                            <div>
                              <label className="block text-xs font-bold text-slate-700 mb-1">
                                Workflow Requirements (Optional)
                              </label>
                              <textarea
                                rows={2}
                                value={projectNote}
                                onChange={(e) => setProjectNote(e.target.value)}
                                placeholder="Briefly describe your current lead sources or team sales process..."
                                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-1.5 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                              />
                            </div>
                          </div>
                        )}

                        {/* STEP 3: Budget Range, Package & Captcha */}
                        {formStep === 3 && (
                          <div className="space-y-3 animate-in fade-in">
                            <div className="grid grid-cols-2 gap-2">
                              <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">
                                  Estimated Budget *
                                </label>
                                <select
                                  value={selectedBudget}
                                  onChange={(e) => setSelectedBudget(e.target.value)}
                                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                                >
                                  <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                                  <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                                  <option value="₹1,00,000 - ₹2,50,000">₹1,00,000 - ₹2,50,000</option>
                                  <option value="₹2,50,000+">₹2,50,000+</option>
                                </select>
                              </div>

                              <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">
                                  Select Package *
                                </label>
                                <select
                                  value={selectedPackage}
                                  onChange={(e) => setSelectedPackage(e.target.value)}
                                  className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                                >
                                  <option value="Basic Starter CRM (Custom Pricing)">Basic Starter CRM</option>
                                  <option value="Standard Growth CRM (Custom Pricing)">Standard Growth CRM</option>
                                  <option value="Enterprise Bespoke CRM (Custom Pricing)">Enterprise Bespoke CRM</option>
                                </select>
                              </div>
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
                                  className="p-2 text-slate-500 hover:text-[#0B3D91] transition-colors cursor-pointer"
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
                              className="px-4 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-100 text-xs font-bold text-slate-700 transition-colors cursor-pointer"
                            >
                              Back
                            </button>
                          )}
                          {formStep < 3 ? (
                            <button
                              type="button"
                              onClick={handleNextStep}
                              className="flex-1 py-2.5 rounded-xl bg-[#0B3D91] hover:bg-blue-900 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md transition-colors cursor-pointer"
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
                                  <span>Request Free CRM Quote</span>
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

        {/* 4. STICKY IN-PAGE ANCHOR NAVIGATION */}
        <div className="sticky top-20 z-30 bg-white border-b border-slate-200 shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-2.5 no-scrollbar text-xs font-bold text-slate-600">
              {[
                { id: 'packages', label: 'Packages' },
                { id: 'overview', label: 'Overview' },
                { id: 'process', label: 'Process' },
                { id: 'advantages', label: 'Advantages' },
                { id: 'sub-services', label: 'Sub-Services' },
                { id: 'requirements', label: 'Prerequisites' },
                { id: 'tech-stack', label: 'Tech Stack' },
                { id: 'comparison', label: 'Comparison' },
                { id: 'why-us', label: 'Why Us' },
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

        {/* 5. PRICING PACKAGES (3-TIER CARDS WITH TODO PLACEHOLDERS) */}
        <section id="packages" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Tiered Investment Packages
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0D47A1] mt-2">
                Custom CRM Development Tiers
              </h2>
              <p className="text-sm text-slate-500 mt-2 mx-auto max-w-2xl text-center">
                One-time development cost with zero per-user monthly licenses. You own 100% of the platform and database.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* TIER 1: BASIC */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="px-3 py-1 rounded bg-slate-100 text-slate-700 text-[10px] font-black uppercase tracking-wide inline-block mb-3">
                    LEAD &amp; SALES CRM
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">Basic Package</h3>
                  <p className="text-xs text-slate-500 mt-1 mb-4">
                    Ideal for small sales teams (1-10 users) needing lead tracking, status stages, and basic reports.
                  </p>
                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <div className="text-3xl font-extrabold text-[#0D47A1]">Custom Pricing</div>
                    <span className="text-xs text-slate-400 font-medium">One-time payment</span>
                  </div>

                  <ul className="space-y-3 mb-8 text-xs text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Up to 15 User Credentials</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Visual Lead Pipeline Kanban</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Website Form Webhook Integration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Daily Lead Activity Logs</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>CSV Lead Import &amp; Export</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => {
                    setSelectedPackage('Basic Starter CRM (Custom Pricing)');
                    scrollToSection('lead-capture-widget');
                  }}
                  className="w-full py-3 rounded-xl bg-[#0B3D91] hover:bg-blue-900 text-white font-bold text-xs shadow-md transition-colors cursor-pointer"
                >
                  Choose Basic CRM
                </button>
              </div>

              {/* TIER 2: STANDARD (POPULAR) */}
              <div className="bg-white rounded-2xl border-2 border-[#FF5A00] p-6 sm:p-8 shadow-xl flex flex-col justify-between relative ring-2 ring-orange-500/10">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF5A00] text-white text-[10px] uppercase font-black tracking-widest px-3 py-0.5 rounded-full">
                  MOST POPULAR
                </span>
                <div>
                  <span className="px-3 py-1 rounded bg-orange-100 text-orange-900 text-[10px] font-black uppercase tracking-wide inline-block mb-3">
                    WHATSAPP &amp; ADS AUTOMATION
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">Standard Package</h3>
                  <p className="text-xs text-slate-500 mt-1 mb-4">
                    Full sales automation platform with Meta Ads auto-lead capture, WhatsApp API triggers, and team KPIs.
                  </p>
                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <div className="text-3xl font-extrabold text-[#0D47A1]">Custom Pricing</div>
                    <span className="text-xs text-slate-400 font-medium">One-time payment</span>
                  </div>

                  <ul className="space-y-3 mb-8 text-xs text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                      <span>Up to 50 User Accounts (RBAC)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                      <span>Meta Lead Ads Real-Time Webhooks</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                      <span>WhatsApp Business API Auto-Welcome</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                      <span>Round-Robin Executive Lead Distribution</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                      <span>Sales Rep Performance Analytics</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                      <span>12 Months Free Technical Support</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => {
                    setSelectedPackage('Standard Growth CRM (Custom Pricing)');
                    scrollToSection('lead-capture-widget');
                  }}
                  className="w-full py-3 rounded-xl bg-[#FF5A00] hover:bg-orange-600 text-white font-bold text-xs shadow-md transition-colors cursor-pointer"
                >
                  Choose Standard Package
                </button>
              </div>

              {/* TIER 3: PREMIUM */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="px-3 py-1 rounded bg-blue-100 text-blue-900 text-[10px] font-black uppercase tracking-wide inline-block mb-3">
                    ENTERPRISE CRM ECOSYSTEM
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">Enterprise Package</h3>
                  <p className="text-xs text-slate-500 mt-1 mb-4">
                    Bespoke enterprise CRM integrated with Cloud Telephony dialers, accounting software, and ERP systems.
                  </p>
                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <div className="text-3xl font-extrabold text-[#0D47A1]">Custom Pricing</div>
                    <span className="text-xs text-slate-400 font-medium">Milestone based</span>
                  </div>

                  <ul className="space-y-3 mb-8 text-xs text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Unlimited User Accounts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Cloud Telephony Click-to-Call Dialer</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Tally / ERP Billing System Sync</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Customer Support Ticketing Portal</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Private AWS Cloud Infrastructure</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => {
                    setSelectedPackage('Enterprise Bespoke CRM (Custom Pricing)');
                    scrollToSection('lead-capture-widget');
                  }}
                  className="w-full py-3 rounded-xl bg-[#0B3D91] hover:bg-blue-900 text-white font-bold text-xs shadow-md transition-colors cursor-pointer"
                >
                  Request Enterprise Quote
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 6. OVERVIEW SECTION */}
        <section id="overview" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Service Category Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                What is Custom CRM Development?
              </h2>
            </div>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Custom CRM Development is the engineering of dedicated customer relationship platforms designed around your company’s unique lead handling, sales pipeline, and client support workflows. Unlike off-the-shelf software with expensive per-user licenses, a custom CRM gives your organization full ownership, total data privacy, and zero recurring seat charges.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Target Business Audience:</strong>
                  Designed for B2B companies, real estate firms, educational institutes, financial consultancies, and service businesses managing active sales teams.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Zero Recurring Seat Subscriptions:</strong>
                  Eliminate monthly per-user licenses (Salesforce/Zoho) — pay once for custom development and scale your team infinitely.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Automated Lead Capture &amp; Routing:</strong>
                  Connect Meta Lead Ads, Google Ads, website forms, and WhatsApp inquiries into a unified pipeline with auto-assignment.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Strict Enterprise Data Privacy:</strong>
                  Your customer data stays securely on your private cloud database with role-based view and export permissions.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Full Source Code Ownership:</strong>
                  Receive 100% complete source code handoff and database rights with zero vendor lock-in.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. HOW IT WORKS / OUR PROCESS SUMMARY */}
        <section id="process" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Agile Methodology
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                How We Deliver Your Custom CRM
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  title: 'Sales Workflow Scoping',
                  desc: 'We audit your existing lead channels, sales stages, and employee reporting requirements.'
                },
                {
                  step: '02',
                  title: 'Dashboard Prototyping',
                  desc: 'Designing Figma wireframes for executive lead boards, manager analytics, and telecaller views.'
                },
                {
                  step: '03',
                  title: 'Full-Stack CRM Coding',
                  desc: 'Engineering backend API lead webhooks, database schema, and mobile-responsive dashboards.'
                },
                {
                  step: '04',
                  title: 'Cloud Launch & Training',
                  desc: 'Deploying CRM on private cloud, setting up WhatsApp API, and conducting staff training sessions.'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-3 relative">
                  <span className="text-3xl font-black text-[#FF5A00] font-mono">{item.step}</span>
                  <h4 className="font-bold text-slate-900 text-base">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. ADVANTAGES SECTION (6 NUMBERED CARDS) */}
        <section id="advantages" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Key Benefits
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                6 Key Advantages of Custom CRM Platforms
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  num: '01',
                  title: 'Zero Lead Leakage',
                  desc: 'Automatic real-time capture from Meta, Google, WhatsApp, and websites ensures zero lost leads.'
                },
                {
                  num: '02',
                  title: 'Automated Round-Robin Routing',
                  desc: 'Instantly distribute incoming lead inquiries among sales reps based on availability or geography.'
                },
                {
                  num: '03',
                  title: 'Instant WhatsApp Auto-Triggers',
                  desc: 'Send automated WhatsApp welcome messages and PDF brochures the moment a prospect submits a lead form.'
                },
                {
                  num: '04',
                  title: 'Role-Based Access Control',
                  desc: 'Protect client databases by restricting view, edit, and export access according to employee hierarchy.'
                },
                {
                  num: '05',
                  title: 'Real-Time Executive Analytics',
                  desc: 'Monitor call counts, deal conversion rates, revenue forecasts, and team leaderboards in one dashboard.'
                },
                {
                  num: '06',
                  title: 'Infinite Scalability',
                  desc: 'Add hundreds of new employees or branches without paying additional monthly SaaS licensing fees.'
                }
              ].map((adv, idx) => (
                <div key={idx} className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                  <span className="text-2xl font-black text-[#0B3D91] font-mono">{adv.num}</span>
                  <h4 className="font-bold text-slate-900 text-base">{adv.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{adv.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. SUB-SERVICES CHECKLIST / GRID SECTION (KEY SECTION FOR THIS PAGE) */}
        <section id="sub-services" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Core Offerings
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0D47A1] mt-2">
                CRM Development Sub-Services
              </h2>
              <p className="text-sm text-slate-500 mt-2 mx-auto max-w-2xl text-center">
                Explore our specialized CRM development solutions designed for sales pipelines, lead routing, and customer support management.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* 1. Custom CRM Development */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-[#0B3D91] flex items-center justify-center">
                    <Database className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Custom CRM Development</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Bespoke CRM platforms built strictly around your company's operational hierarchy, custom stages, and proprietary sales workflows.
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-500">
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> 100% Tailored Modules &amp; Fields</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> Zero Per-User Subscription Charges</li>
                  </ul>
                </div>
                <button
                  onClick={() => onSelectService('Custom CRM Development')}
                  className="w-full py-2 bg-slate-100 hover:bg-[#0B3D91] hover:text-white text-slate-800 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  View Details
                </button>
              </div>

              {/* 2. Sales CRM */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 text-[#FF5A00] flex items-center justify-center">
                    <BarChart3 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Sales &amp; Pipeline CRM</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Visual Kanban deal pipelines, quotation generation, sales target tracking, commission calculators, and revenue forecasting dashboards.
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-500">
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> Visual Kanban Deal Stages</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> Instant Invoice &amp; Quotation PDF Generator</li>
                  </ul>
                </div>
                <button
                  onClick={() => onSelectService('Sales CRM')}
                  className="w-full py-2 bg-slate-100 hover:bg-[#0B3D91] hover:text-white text-slate-800 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  View Details
                </button>
              </div>

              {/* 3. Lead Management CRM */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Lead Management &amp; Auto-Routing CRM</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Automated lead capture from Meta Ads, Google PPC, and websites with round-robin distribution, WhatsApp auto-replies, and call logs.
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-500">
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> Real-Time Ads Lead Webhooks</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> WhatsApp Business API Automation</li>
                  </ul>
                </div>
                <button
                  onClick={() => onSelectService('Lead Management CRM')}
                  className="w-full py-2 bg-slate-100 hover:bg-[#0B3D91] hover:text-white text-slate-800 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  View Details
                </button>
              </div>

              {/* 4. Customer Management System */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Customer Management &amp; Service Ticketing</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    360-degree customer history profile, support ticket escalation desks, renewal reminders, and post-sales client portal access.
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-500">
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> Complete Customer Interaction History</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> Support Ticketing &amp; SLA Tracking</li>
                  </ul>
                </div>
                <button
                  onClick={() => onSelectService('Customer Management System')}
                  className="w-full py-2 bg-slate-100 hover:bg-[#0B3D91] hover:text-white text-slate-800 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 10. REQUIREMENTS / PREREQUISITES CHECKLIST */}
        <section id="requirements" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Client Inputs Needed
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                What You Need to Provide Before CRM Development
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Sales Workflow & Pipeline Stages', desc: 'List of lead statuses (e.g., New, Contacted, Demo Scheduled, Quotation Sent, Won, Lost).' },
                { title: 'Employee Hierarchy & Roles', desc: 'Organizational chart detailing Telecallers, Team Leads, Managers, and Admins.' },
                { title: 'Lead Source Channels', desc: 'Details of Meta Ads accounts, Google Ads, website forms, or third-party lead portals.' },
                { title: 'WhatsApp Business API Details', desc: 'Meta Business Manager details if integrating official WhatsApp API templates.' },
                { title: 'Sample Reports Needed', desc: 'Format of daily lead reports or sales performance metrics you currently monitor.' }
              ].map((item, idx) => (
                <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-3">
                  <CheckSquare className="w-5 h-5 text-[#FF5A00] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 11. STEP-BY-STEP PROCESS */}
        <section className="py-14 bg-slate-50 border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Detailed Delivery Roadmap
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                5-Step CRM Project Execution Roadmap
              </h2>
            </div>

            <div className="space-y-4">
              {[
                { step: 'Step 1', title: 'Sales Process Audit & Blueprint', desc: 'We document your exact sales steps, lead fields, and team permissions.' },
                { step: 'Step 2', title: 'Interactive Wireframe Prototype', desc: 'Creating clickable Figma wireframes for sales rep and executive manager views.' },
                { step: 'Step 3', title: 'CRM Database & Webhook Development', desc: 'Coding custom database schemas, lead distribution algorithms, and Meta/WhatsApp APIs.' },
                { step: 'Step 4', title: 'Data Migration & Staff Sandbox Testing', desc: 'Importing historical client data, performing role testing, and conducting team training.' },
                { step: 'Step 5', title: 'Cloud Production Deployment', desc: 'Deploying CRM on private AWS cloud server, DNS configuration, and full source code handoff.' }
              ].map((st, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 flex items-start gap-4 shadow-xs">
                  <span className="px-3 py-1 bg-[#0B3D91] text-white text-xs font-black rounded-lg flex-shrink-0">
                    {st.step}
                  </span>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{st.title}</h4>
                    <p className="text-xs text-slate-600 mt-1">{st.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 12. TECHNOLOGY & TOOLS USED */}
        <section id="tech-stack" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Robust Tech Stack
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Technologies Behind Our CRM Solutions
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: 'React / Next.js', desc: 'Fast UI Dashboard' },
                { name: 'Node.js / Express', desc: 'High-Scale Backend' },
                { name: 'PostgreSQL', desc: 'Relational Database' },
                { name: 'WhatsApp API', desc: 'Auto Messaging' },
                { name: 'Cloud Telephony', desc: 'Click-to-Call API' },
                { name: 'AWS Cloud', desc: 'Encrypted Hosting' }
              ].map((tech, idx) => (
                <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center space-y-1">
                  <Database className="w-6 h-6 text-[#0B3D91] mx-auto" />
                  <h4 className="font-bold text-slate-900 text-xs">{tech.name}</h4>
                  <p className="text-[10px] text-slate-500">{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 13. POST-DELIVERY SUPPORT & MAINTENANCE */}
        <section className="py-14 bg-slate-50 border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="bg-[#0B3D91] text-white rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
              <span className="text-xs font-black uppercase tracking-widest text-[#FF5A00]">
                Continuous Guarantee
              </span>
              <h3 className="text-xl sm:text-2xl font-bold">Post-Launch Support &amp; SLA Commitment</h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                We back every custom CRM deployment with 12 months of free technical support, covering database backups, server uptime monitoring, security updates, and instant bug resolution so your sales team never faces downtime.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs font-semibold text-orange-200">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#FF5A00]" /> Automated Daily Cloud Backups</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#FF5A00]" /> 99.9% Server Uptime SLA</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#FF5A00]" /> Dedicated Lead Technical Manager</span>
              </div>
            </div>
          </div>
        </section>

        {/* 14. COMPARISON TABLE */}
        <section id="comparison" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Market Comparison
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Custom CRM vs Off-the-Shelf SaaS Software
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 font-bold">
                    <th className="p-3 border border-slate-200">Comparison Parameters</th>
                    <th className="p-3 border border-slate-200 text-[#0B3D91] bg-blue-50">Our Custom CRM</th>
                    <th className="p-3 border border-slate-200">SaaS CRMs (Salesforce/Zoho)</th>
                    <th className="p-3 border border-slate-200">Excel / Google Sheets</th>
                    <th className="p-3 border border-slate-200">Freelancer Scripts</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr>
                    <td className="p-3 border border-slate-200 font-bold">Monthly Seat Costs</td>
                    <td className="p-3 border border-slate-200 font-bold text-[#0B3D91] bg-blue-50/50">Zero Monthly Seat Fees</td>
                    <td className="p-3 border border-slate-200">₹1,500 - ₹5,000 / user / mo</td>
                    <td className="p-3 border border-slate-200">Free</td>
                    <td className="p-3 border border-slate-200">Varies</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 font-bold">Workflow Customization</td>
                    <td className="p-3 border border-slate-200 font-bold text-[#0B3D91] bg-blue-50/50">100% Tailored to Your Process</td>
                    <td className="p-3 border border-slate-200">Rigid Generic Layouts</td>
                    <td className="p-3 border border-slate-200">Manual Entry Only</td>
                    <td className="p-3 border border-slate-200">Basic Features Only</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 font-bold">Data Privacy &amp; Control</td>
                    <td className="p-3 border border-slate-200 font-bold text-[#0B3D91] bg-blue-50/50">Private Server Database</td>
                    <td className="p-3 border border-slate-200">Shared Multi-Tenant Cloud</td>
                    <td className="p-3 border border-slate-200">High Risk of Data Theft</td>
                    <td className="p-3 border border-slate-200">Unencrypted Storage</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 font-bold">Source Code Ownership</td>
                    <td className="p-3 border border-slate-200 font-bold text-[#0B3D91] bg-blue-50/50">100% Full Ownership Rights</td>
                    <td className="p-3 border border-slate-200">Zero Code Access</td>
                    <td className="p-3 border border-slate-200">N/A</td>
                    <td className="p-3 border border-slate-200">Often Restricted</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 font-bold">WhatsApp API Integration</td>
                    <td className="p-3 border border-slate-200 font-bold text-[#0B3D91] bg-blue-50/50">Native Direct Integration</td>
                    <td className="p-3 border border-slate-200">Pricey Add-on Extensions</td>
                    <td className="p-3 border border-slate-200">Manual Copy-Paste</td>
                    <td className="p-3 border border-slate-200">Unstable Web Hooks</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 15. PRICING & INVESTMENT EXPLANATION */}
        <section className="py-14 bg-slate-50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Understanding Custom CRM Investment</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Custom CRM pricing depends on specific functional modules required (such as lead auto-routing, sales commission rules, cloud telephony integration, and custom report builders). Pay once for development and eliminate ongoing per-user monthly SaaS subscription bills.
            </p>
          </div>
        </section>

        {/* 16. TIMELINE & DELIVERABLES */}
        <section className="py-14 bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-slate-900">Project Timeline &amp; Core Deliverables</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#FF5A00]" /> Estimated Timeline
                </h4>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li>• <strong>Starter Lead CRM:</strong> 10 - 14 Working Days</li>
                  <li>• <strong>Standard Sales CRM:</strong> 2 - 3 Weeks</li>
                  <li>• <strong>Enterprise Custom CRM:</strong> 4 - 6 Weeks</li>
                </ul>
              </div>
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0B3D91]" /> Handover Package
                </h4>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li>• 100% Source Code Git Repository</li>
                  <li>• Private Database Credentials &amp; Cloud Setup</li>
                  <li>• Staff Training Manuals &amp; Video Walkthroughs</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 17. WHY CHOOSE VISHAL SARKAR BRAND */}
        <section className="py-14 bg-slate-50 border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6">
            <div className="text-center">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Pillar Values
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Why Partner with Our CRM Studio
              </h2>
            </div>

            <div className="space-y-3">
              {[
                { title: 'Experienced Enterprise Solution Architects', desc: 'Our team has built sales automation systems managing over 25,000 daily leads for Indian companies.' },
                { title: 'Zero Per-User Seat Monopoly', desc: 'We empower your company with complete ownership so you never pay recurring seat fees as your team expands.' },
                { title: 'Direct WhatsApp API Engineering', desc: 'Native WhatsApp Business API integration for instant lead welcome notifications and automated follow-ups.' },
                { title: 'Granular Security & Data Privacy', desc: 'Role-based access control protecting your sensitive customer phone numbers and sales data from internal theft.' },
                { title: 'Dedicated Support SLA', desc: 'Continuous 12-month post-launch technical assistance with direct account manager access.' }
              ].map((item, idx) => (
                <div key={idx} className="p-4 bg-white border border-slate-200 rounded-xl flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF5A00] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                    <p className="text-xs text-slate-600 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 18. TRUST / WHY US GRID (6 CARDS) */}
        <section id="why-us" className="py-14 bg-white border-b border-slate-200 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Our Commitments
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Built for High-Growth Sales Teams
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: ShieldCheck, title: '100% Data Privacy', desc: 'Your leads remain strictly on your private cloud database.' },
                { icon: Zap, title: 'Instant Lead Sync', desc: 'Sub-second webhook capture from Meta Ads & Google PPC.' },
                { icon: Award, title: 'Zero Monthly Seat Fees', desc: 'Scale from 5 to 500 sales executives at zero extra software cost.' },
                { icon: Clock, title: 'Rapid 2-3 Week Deployment', desc: 'Fast project turnaround with comprehensive team training.' },
                { icon: Users, title: 'Granular User Permissions', desc: 'Configure exact view, edit, and export rules per employee role.' },
                { icon: Lock, title: 'Full Source Handoff', desc: 'Complete ownership of application codebase and cloud assets.' }
              ].map((card, idx) => {
                const IconComp = card.icon;
                return (
                  <div key={idx} className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-3">
                    <IconComp className="w-7 h-7 text-[#0B3D91]" />
                    <h4 className="font-bold text-slate-900 text-base">{card.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{card.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 19. FAQ ACCORDION (6 SPECIFIC Q&A) */}
        <section id="faqs" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
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
                  <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-4 text-left font-bold text-slate-800 text-xs sm:text-sm flex justify-between items-center gap-4 hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform ${
                          isOpen ? 'rotate-180 text-[#0B3D91]' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="p-4 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 20. CTA BANNER */}
        <section className="bg-gradient-to-r from-[#0B3D91] to-blue-900 text-white py-12 px-4 text-center space-y-4 shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold">Ready to Build Your Custom Sales CRM?</h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto">
            Schedule a free consultation call with our senior CRM architect to design your sales pipeline blueprint and receive a custom estimate.
          </p>
          <button
            onClick={() => scrollToSection('lead-capture-widget')}
            className="px-6 py-3 bg-[#FF5A00] hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-colors cursor-pointer"
          >
            Book Free CRM Scoping Call
          </button>
        </section>

        {/* 21. RELATED SERVICES CROSS-LINKING CARDS */}
        <section className="py-14 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="border-b border-slate-200 pb-4 mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#FF5A00]">
                Explore Other Digital Solutions
              </span>
              <h3 className="text-xl font-bold text-[#0B3D91] mt-1">
                Related IT &amp; Digital Services
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {RELATED_SERVICES.map((srv, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
                >
                  <div className="h-36 w-full overflow-hidden bg-slate-100">
                    <img
                      src={srv.img}
                      alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm group-hover:text-[#0B3D91] transition-colors">
                        {srv.title}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">{srv.desc}</p>
                    </div>
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-bold text-[#FF5A00]">{srv.price}</span>
                      <button
                        onClick={() => onSelectService(srv.title)}
                        className="text-xs font-semibold text-[#0B3D91] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>Explore</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 22. MOBILE APP / WHATSAPP CONTACT PROMOTION BANNER */}
        <section className="py-10 bg-slate-50 border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded">
                  Instant WhatsApp Connect
                </span>
                <h3 className="text-lg font-bold text-emerald-950">Prefer Instant Chat over Email?</h3>
                <p className="text-xs text-emerald-700">Connect with our CRM solutions architect directly on WhatsApp for instant scope discussions.</p>
              </div>
              <button
                onClick={onOpenAppointment}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-md transition-colors flex items-center gap-2 cursor-pointer flex-shrink-0"
              >
                <Phone className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* 23. SITEMAP FOOTER WITH MANDATORY DISCLAIMER */}
      <Footer onSelectService={onSelectService} />
    </div>
  );
};

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
  Receipt,
  Terminal,
  Cloud
} from 'lucide-react';
import { HeaderMegaMenu } from '../components/HeaderMegaMenu';
import { TopUtilityBar } from '../components/TopUtilityBar';

interface SoftwareDevelopmentLandingProps {
  onBackToHome: () => void;
  onSelectService: (serviceName: string) => void;
  onOpenBrochure: () => void;
  onOpenAppointment: () => void;
}

// 6 Accordion FAQs for Software Development
const FAQ_ITEMS = [
  {
    q: 'What types of custom business software do you engineer?',
    a: 'We build enterprise ERP suites, GST-compliant billing and invoice software, SaaS platforms, inventory management systems, HR/payroll portals, and automated business workflow engines.'
  },
  {
    q: 'Can the software be deployed on our local office servers or private cloud?',
    a: 'Yes! We support on-premise local server deployment (for high security), private AWS/Azure cloud infrastructure, or hybrid desktop/cloud synchronizations.'
  },
  {
    q: 'Do you provide full source code handoff and intellectual property (IP) rights?',
    a: 'Yes, 100%. Upon project completion and milestone sign-off, we transfer full source code repositories, IP ownership, architecture documentation, and database credentials to your company.'
  },
  {
    q: 'How do you handle data migration from our existing spreadsheets or legacy systems?',
    a: 'Our database engineers build automated ETL scripts to extract, sanitize, and import your existing Excel spreadsheets, CSVs, or legacy database records with zero data loss.'
  },
  {
    q: 'Is the software scalable to handle thousands of concurrent transactions?',
    a: 'Yes. We architect enterprise software using microservices, Docker containerization, PostgreSQL databases, and redis caching to handle high transaction volumes smoothly.'
  },
  {
    q: 'What post-launch software maintenance and SLA support do you provide?',
    a: 'We offer 12 months of free post-launch technical support for server health monitoring, security patch updates, feature enhancements, and bug resolution.'
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
    title: 'CRM Development',
    desc: 'Bespoke sales pipeline management, lead auto-routing, and customer service dashboards.',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=80',
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

export const SoftwareDevelopmentLanding: React.FC<SoftwareDevelopmentLandingProps> = ({
  onBackToHome,
  onSelectService,
  onOpenBrochure,
  onOpenAppointment
}) => {
  // Navigation tabs state
  const [activeNavTab, setActiveNavTab] = useState('packages');

  // Form state
  const [formStep, setFormStep] = useState(1);
  const [selectedSubService, setSelectedSubService] = useState('Custom Software Development');
  const [deploymentTarget, setDeploymentTarget] = useState('Cloud Web Application');
  const [selectedBudget, setSelectedBudget] = useState('₹25,000 - ₹50,000');
  const [selectedPackage, setSelectedPackage] = useState('Standard Growth Software (Custom Pricing)');
  const [applicantName, setApplicantName] = useState('');
  const [applicantMobile, setApplicantMobile] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [projectNote, setProjectNote] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaCode, setCaptchaCode] = useState('9X4M2');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Animated counters
  const [counterClients, setCounterClients] = useState(0);
  const [counterProjects, setCounterProjects] = useState(0);
  const [counterArchitects, setCounterArchitects] = useState(0);

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
      setCounterClients(Math.floor(progress * 1650));
      setCounterProjects(Math.floor(progress * 620));
      setCounterArchitects(Math.floor(progress * 45));
      if (start >= steps) {
        clearInterval(timer);
        setCounterClients(1650);
        setCounterProjects(620);
        setCounterArchitects(45);
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
            <span className="text-slate-900 font-bold">Software Development Services</span>
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
                  <Cpu className="w-3.5 h-3.5 text-[#FF5A00]" />
                  <span>Enterprise Software Engineering</span>
                  <span className="w-1 h-1 rounded-full bg-white/60"></span>
                  <span className="text-white">ERP, Billing &amp; SaaS Platforms</span>
                </div>

                {/* H1 Heading & Tagline */}
                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight antialiased">
                    Software Development Services
                  </h1>
                  <div className="space-y-0.5">
                    <p className="text-xl sm:text-2xl font-black text-orange-300 antialiased">
                      Build custom enterprise software with{' '}
                      <span className="underline decoration-[#FF5A00] decoration-2 underline-offset-4 font-black text-white">
                        Custom Pricing
                      </span>
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-blue-100 antialiased">
                      + 100% Source Code Ownership &amp; Private Cloud Deployment
                    </p>
                  </div>
                </div>

                {/* Definition: 2-3 Line Description */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                  Our Custom Software Engineering team builds enterprise ERP suites, GST billing systems, business management tools, and SaaS platforms. We transform complex manual operations into secure, automated software tailored strictly to your business workflows.
                </p>

                {/* 6 Feature Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Layers3 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>ERP &amp; Billing Suites</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Zap className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Workflow Automation</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Cloud className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>SaaS &amp; Web Portals</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Lock className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>On-Prem / Private Cloud</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Award className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>100% Source Code Handoff</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Users className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Dedicated Technical Architect</span>
                  </div>
                </div>

                {/* Trust Counters */}
                <div className="grid grid-cols-3 gap-3 pt-3">
                  <div className="p-3 rounded-2xl bg-white/10 border border-white/20 text-center">
                    <div className="text-xl sm:text-3xl font-black text-orange-300 font-mono">
                      {counterProjects.toLocaleString()}+
                    </div>
                    <div className="text-[10px] sm:text-xs font-semibold text-slate-200 uppercase tracking-wider mt-0.5">
                      Systems Built
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/10 border border-white/20 text-center">
                    <div className="text-xl sm:text-3xl font-black text-white font-mono">
                      {counterClients.toLocaleString()}+
                    </div>
                    <div className="text-[10px] sm:text-xs font-semibold text-slate-200 uppercase tracking-wider mt-0.5">
                      Enterprise Clients
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/10 border border-white/20 text-center">
                    <div className="text-xl sm:text-3xl font-black text-orange-300 font-mono">
                      {counterArchitects}+
                    </div>
                    <div className="text-[10px] sm:text-xs font-semibold text-slate-200 uppercase tracking-wider mt-0.5">
                      Software Engineers
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
                    <span className="text-slate-300 text-[11px]">Client Rating</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 border border-white/15 text-xs text-white">
                    <Award className="w-3 h-3 text-orange-300" />
                    <span className="font-bold">100%</span>
                    <span className="text-slate-300 text-[11px]">Source Handoff</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 border border-white/15 text-xs text-white">
                    <ShieldCheck className="w-3 h-3 text-orange-400" />
                    <span className="font-bold">ISO</span>
                    <span className="text-slate-300 text-[11px]">Quality Standard</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Multi-Step Lead Capture Form */}
              <div id="lead-capture-widget" className="lg:col-span-5 scroll-mt-24">
                <div className="bg-white rounded-2xl shadow-2xl border-2 border-orange-400/80 p-5 sm:p-6 text-slate-900 relative">
                  {/* Urgency Badge */}
                  <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-[#FF5A00] text-[#0B3D91] text-xs font-black uppercase tracking-wider shadow-md flex items-center gap-1">
                    <Flame className="w-3 h-3 fill-[#0B3D91]" />
                    <span>Free Tech Scope</span>
                  </div>

                  {formSubmitted ? (
                    <div className="text-center py-8 space-y-4 animate-in fade-in">
                      <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Application Received!</h3>
                      <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
                        Thank you <span className="font-bold">{applicantName}</span>. Our lead software architect has been assigned to your software project docket. We will call you at <span className="font-bold">{applicantMobile}</span> within 15 minutes.
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
                              Software Scoping Desk
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
                            Custom Software Quote
                          </span>
                          <span className="text-[10px] font-medium text-slate-500 block leading-tight">
                            Based on Modules
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
                        {/* STEP 1: Select Sub-Service & Deployment Target */}
                        {formStep === 1 && (
                          <div className="space-y-3 animate-in fade-in">
                            <div>
                              <label className="block text-xs font-bold text-slate-700 mb-1">
                                Select Software Category *
                              </label>
                              <select
                                value={selectedSubService}
                                onChange={(e) => setSelectedSubService(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                              >
                                <option value="Custom Software Development">Custom Software Development</option>
                                <option value="Business Management Software">Business Operations &amp; Management Software</option>
                                <option value="Billing & Invoice Software">Billing &amp; GST Invoice Software</option>
                                <option value="ERP Development">Enterprise ERP Suite Development</option>
                                <option value="SaaS Development">SaaS Product Platform Development</option>
                              </select>
                            </div>

                            <div>
                              <label className="block text-xs font-bold text-slate-700 mb-1">
                                Deployment Target *
                              </label>
                              <select
                                value={deploymentTarget}
                                onChange={(e) => setDeploymentTarget(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                              >
                                <option value="Cloud Web Application">Cloud Web Application (AWS / Azure / GCP)</option>
                                <option value="On-Premise Server">On-Premise Local Office Server</option>
                                <option value="Desktop Application">Windows / Mac Desktop Executable</option>
                                <option value="Hybrid Cloud & Desktop">Hybrid Cloud + Offline Desktop Sync</option>
                              </select>
                            </div>

                            <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100 text-xs text-slate-600 space-y-1">
                              <div className="flex items-center gap-1.5 font-bold text-[#0B3D91]">
                                <ShieldCheck className="w-4 h-4 text-[#FF5A00]" />
                                <span>Why build software with us?</span>
                              </div>
                              <p className="text-[11px]">
                                100% source code ownership, clean modern architecture, scalable databases, and 12-month post-launch SLA support.
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
                                placeholder="e.g. Vikram Singhania"
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
                                Software Scope Notes (Optional)
                              </label>
                              <textarea
                                rows={2}
                                value={projectNote}
                                onChange={(e) => setProjectNote(e.target.value)}
                                placeholder="Briefly describe your current software needs or workflow pain points..."
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
                                  Select Tier *
                                </label>
                                <select
                                  value={selectedPackage}
                                  onChange={(e) => setSelectedPackage(e.target.value)}
                                  className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                                >
                                  <option value="Basic Starter Software (Custom Pricing)">Basic Starter Software</option>
                                  <option value="Standard Growth Software (Custom Pricing)">Standard Growth Software</option>
                                  <option value="Enterprise Custom ERP/SaaS (Custom Pricing)">Enterprise Custom ERP/SaaS</option>
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
                                  <span>Request Free Software Quote</span>
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
                Software Development Packages
              </h2>
              <p className="text-sm text-slate-500 mt-2 mx-auto max-w-2xl text-center">
                Select a software package built to streamline your internal business operations or build your SaaS product.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* TIER 1: BASIC */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="px-3 py-1 rounded bg-slate-100 text-slate-700 text-[10px] font-black uppercase tracking-wide inline-block mb-3">
                    BILLING &amp; MANAGEMENT
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">Basic Package</h3>
                  <p className="text-xs text-slate-500 mt-1 mb-4">
                    Ideal for small businesses needing GST invoice software, inventory management, or single-process automation.
                  </p>
                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <div className="text-3xl font-extrabold text-[#0D47A1]">Custom Pricing</div>
                    <span className="text-xs text-slate-400 font-medium">One-time payment</span>
                  </div>

                  <ul className="space-y-3 mb-8 text-xs text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Single Management Module</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>GST Invoicing &amp; Billing PDF Engine</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Basic Stock Inventory Tracking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Export Reports to Excel &amp; PDF</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Cloud or Local PC Installation</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => {
                    setSelectedPackage('Basic Starter Software (Custom Pricing)');
                    scrollToSection('lead-capture-widget');
                  }}
                  className="w-full py-3 rounded-xl bg-[#0B3D91] hover:bg-blue-900 text-white font-bold text-xs shadow-md transition-colors cursor-pointer"
                >
                  Choose Basic Package
                </button>
              </div>

              {/* TIER 2: STANDARD (POPULAR) */}
              <div className="bg-white rounded-2xl border-2 border-[#FF5A00] p-6 sm:p-8 shadow-xl flex flex-col justify-between relative ring-2 ring-orange-500/10">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF5A00] text-white text-[10px] uppercase font-black tracking-widest px-3 py-0.5 rounded-full">
                  MOST POPULAR
                </span>
                <div>
                  <span className="px-3 py-1 rounded bg-orange-100 text-orange-900 text-[10px] font-black uppercase tracking-wide inline-block mb-3">
                    FULL BUSINESS SOFTWARE SUITE
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">Standard Package</h3>
                  <p className="text-xs text-slate-500 mt-1 mb-4">
                    Integrated business management platform connecting billing, HR/payroll, inventory, and executive dashboards.
                  </p>
                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <div className="text-3xl font-extrabold text-[#0D47A1]">Custom Pricing</div>
                    <span className="text-xs text-slate-400 font-medium">One-time payment</span>
                  </div>

                  <ul className="space-y-3 mb-8 text-xs text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                      <span>Multi-Module Operations Suite</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                      <span>GST Billing &amp; Payment Gateway Sync</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                      <span>Staff HR &amp; Attendance Tracking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                      <span>Role-Based Access Control (RBAC)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                      <span>Automated WhatsApp Invoicing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                      <span>12 Months Free Technical SLA Support</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => {
                    setSelectedPackage('Standard Growth Software (Custom Pricing)');
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
                    ENTERPRISE ERP &amp; SAAS PLATFORM
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">Enterprise Package</h3>
                  <p className="text-xs text-slate-500 mt-1 mb-4">
                    Custom multi-tenant SaaS architecture or full enterprise ERP system with microservices and API integrations.
                  </p>
                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <div className="text-3xl font-extrabold text-[#0D47A1]">Custom Pricing</div>
                    <span className="text-xs text-slate-400 font-medium">Milestone based</span>
                  </div>

                  <ul className="space-y-3 mb-8 text-xs text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Full Enterprise ERP / SaaS Engine</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Multi-Tenant Stripe / Razorpay Billing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Custom API Gateway Integration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>High-Throughput PostgreSQL DB</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Private AWS Container Infrastructure</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => {
                    setSelectedPackage('Enterprise Custom ERP/SaaS (Custom Pricing)');
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
                What is Custom Software Engineering?
              </h2>
            </div>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Custom Software Development is the process of designing, building, and deploying software applications engineered specifically for your company's operational needs. Unlike rigid, expensive off-the-shelf software packages, custom software gives your organization complete control over features, workflow automation, data security, and source code intellectual property.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Target Business Audience:</strong>
                  Ideal for manufacturers, distributors, retail chains, healthcare organizations, financial firms, and tech startups building SaaS platforms.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">100% Tailored Workflows:</strong>
                  Software built around your exact business rules, GST compliance formats, and employee reporting structures.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Automated Operations &amp; Billing:</strong>
                  Replace error-prone Excel files with real-time inventory tracking, auto-invoicing, and instant WhatsApp billing updates.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Enterprise Cloud Security:</strong>
                  Hosted on private AWS cloud infrastructure or local servers with automated database back-ups and role-based access control.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Full IP &amp; Source Code Ownership:</strong>
                  Complete ownership rights to the software codebase, database schemas, and documentation with zero vendor lock-in.
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
                How We Engineer Custom Software
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  title: 'Requirement Scoping',
                  desc: 'We map out business modules, user roles, database architecture, and integration webhooks.'
                },
                {
                  step: '02',
                  title: 'UI/UX Prototyping',
                  desc: 'Designing interactive Figma wireframes for staff portals and executive management dashboards.'
                },
                {
                  step: '03',
                  title: 'Full-Stack Development',
                  desc: 'Coding clean backend logic in Node.js/Python and high-speed web/desktop interfaces.'
                },
                {
                  step: '04',
                  title: 'Deployment & Training',
                  desc: 'Deploying software on cloud/local servers, performing data migration, and training staff.'
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
                6 Key Advantages of Custom Software
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  num: '01',
                  title: 'Eliminate Recurring SaaS Fees',
                  desc: 'Pay once for software development and save lakhs of rupees annually on recurring per-user license fees.'
                },
                {
                  num: '02',
                  title: '100% Match to Business Rules',
                  desc: 'Software adapts exactly to your company operational workflow rather than forcing you to change your habits.'
                },
                {
                  num: '03',
                  title: 'Automated Billing & GST',
                  desc: 'Instant GST invoice generation, E-way bill creation, and automated payment collection reconciliation.'
                },
                {
                  num: '04',
                  title: 'Real-Time Inventory Control',
                  desc: 'Track stock movement across multiple warehouses, raw materials, and finished goods in real time.'
                },
                {
                  num: '05',
                  title: 'Total Data Ownership',
                  desc: 'Your operational data stays on your private cloud database with zero risk of vendor lock-in.'
                },
                {
                  num: '06',
                  title: 'Role-Based Access Control',
                  desc: 'Granular control over which employees can view, edit, approve, or export business records.'
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
                Software Development Sub-Services
              </h2>
              <p className="text-sm text-slate-500 mt-2 mx-auto max-w-2xl text-center">
                Explore our custom software solutions designed for business management, billing automation, ERP suites, and SaaS platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 1. Custom Software Development */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-[#0B3D91] flex items-center justify-center">
                    <Terminal className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Custom Software Development</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Bespoke internal business tools, automation scripts, and custom desktop or cloud applications built for your unique operational needs.
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-500">
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> Tailored Functional Modules</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> 100% Full Source Code Handoff</li>
                  </ul>
                </div>
                <button
                  onClick={() => onSelectService('Custom Software Development')}
                  className="w-full py-2 bg-slate-100 hover:bg-[#0B3D91] hover:text-white text-slate-800 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  View Details
                </button>
              </div>

              {/* 2. Business Management Software */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 text-[#FF5A00] flex items-center justify-center">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Business Management Software</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Operations management portals, stock inventory control, HR attendance tracking, and executive reporting dashboards.
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-500">
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> Real-Time Stock &amp; Order Tracking</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> Staff HR &amp; Attendance Desk</li>
                  </ul>
                </div>
                <button
                  onClick={() => onSelectService('Business Management Software')}
                  className="w-full py-2 bg-slate-100 hover:bg-[#0B3D91] hover:text-white text-slate-800 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  View Details
                </button>
              </div>

              {/* 3. Billing & Invoice Software */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center">
                    <Receipt className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Billing &amp; Invoice Software</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    GST-compliant invoice generation, automated payment gateway reconciliation, recurring client billing, and WhatsApp PDF invoices.
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-500">
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> GST Invoicing &amp; E-Way Bills</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> Automated WhatsApp Invoice PDF</li>
                  </ul>
                </div>
                <button
                  onClick={() => onSelectService('Billing & Invoice Software')}
                  className="w-full py-2 bg-slate-100 hover:bg-[#0B3D91] hover:text-white text-slate-800 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  View Details
                </button>
              </div>

              {/* 4. ERP Development */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center">
                    <Layers3 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">ERP Suite Development</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Comprehensive Enterprise Resource Planning systems connecting manufacturing, procurement, inventory, accounting, and multi-branch operations.
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-500">
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> End-to-End Enterprise Modules</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> Multi-Branch &amp; Warehouse Sync</li>
                  </ul>
                </div>
                <button
                  onClick={() => onSelectService('ERP Development')}
                  className="w-full py-2 bg-slate-100 hover:bg-[#0B3D91] hover:text-white text-slate-800 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  View Details
                </button>
              </div>

              {/* 5. SaaS Development */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between md:col-span-2 lg:col-span-1">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center">
                    <Cloud className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">SaaS Platform Development</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Multi-tenant Cloud Software-as-a-Service applications with recurring subscription billing (Stripe/Razorpay), tenant isolation, and microservices backend.
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-500">
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> Multi-Tenant Architecture</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> Automated Subscription Billing</li>
                  </ul>
                </div>
                <button
                  onClick={() => onSelectService('SaaS Development')}
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
                What You Need to Provide Before Software Development
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Operational Workflow Description', desc: 'Summary of business steps, inputs, approvals, and outputs required in the software.' },
                { title: 'User Roles & Permission Hierarchy', desc: 'List of staff categories (e.g., Data Entry Clerk, Accountant, Manager, Admin).' },
                { title: 'Existing Spreadsheets / Legacy Data', desc: 'Sample Excel sheets or database exports for data migration and schema mapping.' },
                { title: 'GST & Invoice Templates', desc: 'Your company GST numbers, bank details, and preferred invoice layout samples.' },
                { title: 'Third-Party Hardware / API Details', desc: 'Documentation for barcode scanners, thermal printers, or existing API webhooks.' }
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
                5-Step Software Engineering Roadmap
              </h2>
            </div>

            <div className="space-y-4">
              {[
                { step: 'Step 1', title: 'Architecture & System Design', desc: 'Mapping database schemas, API webhooks, security encryption, and cloud topology.' },
                { step: 'Step 2', title: 'Interactive Dashboard Wireframing', desc: 'Designing interactive Figma prototypes for staff entry screens and executive reports.' },
                { step: 'Step 3', title: 'Full-Stack Software Coding', desc: 'Engineering backend logic in Node.js/Python and high-speed web/desktop interfaces.' },
                { step: 'Step 4', title: 'Data Migration & User Acceptance Testing', desc: 'Importing historical client data, sandbox security testing, and staff training sessions.' },
                { step: 'Step 5', title: 'Cloud / Local Server Production Launch', desc: 'Deploying software, setting up automated database backups, and full source code handoff.' }
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
                Enterprise Tech Stack
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Technologies &amp; Frameworks We Use
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: 'React / Next.js', desc: 'Modern Web Frontend' },
                { name: 'Node.js / Python', desc: 'High-Scale Backend' },
                { name: 'PostgreSQL', desc: 'Relational Database' },
                { name: 'Docker / K8s', desc: 'Container Isolation' },
                { name: 'AWS Cloud', desc: 'Encrypted Infrastructure' },
                { name: 'Electron', desc: 'Desktop App Engine' }
              ].map((tech, idx) => (
                <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center space-y-1">
                  <Terminal className="w-6 h-6 text-[#0B3D91] mx-auto" />
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
              <h3 className="text-xl sm:text-2xl font-bold">12 Months Post-Launch Support &amp; Maintenance</h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                All custom software deployments include 12 months of free technical SLA support covering database backups, server uptime monitoring, security patches, and instant bug resolution.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs font-semibold text-orange-200">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#FF5A00]" /> Automated Daily Database Backups</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#FF5A00]" /> 99.9% Uptime Commitment</span>
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
                Custom Software vs Off-the-Shelf Packages
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 font-bold">
                    <th className="p-3 border border-slate-200">Evaluation Criteria</th>
                    <th className="p-3 border border-slate-200 text-[#0B3D91] bg-blue-50">Our Custom Software</th>
                    <th className="p-3 border border-slate-200">Legacy Off-The-Shelf</th>
                    <th className="p-3 border border-slate-200">Excel / Google Sheets</th>
                    <th className="p-3 border border-slate-200">Freelancer Scripts</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr>
                    <td className="p-3 border border-slate-200 font-bold">Workflow Alignment</td>
                    <td className="p-3 border border-slate-200 font-bold text-[#0B3D91] bg-blue-50/50">100% Tailored to Your Process</td>
                    <td className="p-3 border border-slate-200">Rigid Generic Layouts</td>
                    <td className="p-3 border border-slate-200">Manual Formulas</td>
                    <td className="p-3 border border-slate-200">Incomplete Features</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 font-bold">Recurring SaaS Licensing</td>
                    <td className="p-3 border border-slate-200 font-bold text-[#0B3D91] bg-blue-50/50">Zero Recurring License Fees</td>
                    <td className="p-3 border border-slate-200">Expensive Annual Fees</td>
                    <td className="p-3 border border-slate-200">Free</td>
                    <td className="p-3 border border-slate-200">Varies</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 font-bold">Data Privacy &amp; Security</td>
                    <td className="p-3 border border-slate-200 font-bold text-[#0B3D91] bg-blue-50/50">Private Server / Database</td>
                    <td className="p-3 border border-slate-200">Vendor Cloud Dependency</td>
                    <td className="p-3 border border-slate-200">High Risk of File Loss</td>
                    <td className="p-3 border border-slate-200">Unencrypted Storage</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 font-bold">Source Code Handoff</td>
                    <td className="p-3 border border-slate-200 font-bold text-[#0B3D91] bg-blue-50/50">100% Full Ownership Rights</td>
                    <td className="p-3 border border-slate-200">Proprietary Lock-in</td>
                    <td className="p-3 border border-slate-200">N/A</td>
                    <td className="p-3 border border-slate-200">Often Restricted</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 font-bold">Post-Launch Support</td>
                    <td className="p-3 border border-slate-200 font-bold text-[#0B3D91] bg-blue-50/50">12 Months Dedicated SLA</td>
                    <td className="p-3 border border-slate-200">Slow Support Tickets</td>
                    <td className="p-3 border border-slate-200">None</td>
                    <td className="p-3 border border-slate-200">No Support Guarantee</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 15. PRICING & INVESTMENT EXPLANATION */}
        <section className="py-14 bg-slate-50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Understanding Custom Software Investment</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Software development pricing is determined by functional scope, number of custom modules, database complexity, and deployment infrastructure. We provide fixed transparent milestone quotes after a thorough technical discovery session.
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
                  <li>• <strong>Basic Management Tool:</strong> 2 - 3 Weeks</li>
                  <li>• <strong>Standard Operations Suite:</strong> 3 - 5 Weeks</li>
                  <li>• <strong>Enterprise ERP / SaaS Engine:</strong> 6 - 8 Weeks</li>
                </ul>
              </div>
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0B3D91]" /> Handover Package
                </h4>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li>• 100% Source Code Git Repository</li>
                  <li>• Database Schemas &amp; Cloud Credentials</li>
                  <li>• Staff User Manuals &amp; Technical Architecture Docs</li>
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
                Why Partner with Our Software Studio
              </h2>
            </div>

            <div className="space-y-3">
              {[
                { title: 'Certified Enterprise Software Architects', desc: 'Our senior developers possess 8+ years of hands-on experience building complex business systems.' },
                { title: 'Zero Recurring Software Licensing', desc: 'We deliver complete source code ownership so you never pay annual per-user seat software bills.' },
                { title: 'Strict Enterprise Security Standards', desc: 'Encrypted databases, role-based access control, and automated cloud backup protocols.' },
                { title: 'Weekly Demo Sprints', desc: 'Review working software modules on live test servers every week during active development.' },
                { title: '12 Months Dedicated Support SLA', desc: 'Continuous post-launch technical assistance with direct account lead access.' }
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
                Engineered for High-Scale Operations
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: ShieldCheck, title: '100% IP Ownership', desc: 'Complete software copyright transfer to your enterprise.' },
                { icon: Zap, title: 'High Transaction Speed', desc: 'Sub-second database queries optimized for high data volume.' },
                { icon: Award, title: 'Zero Per-User SaaS Fees', desc: 'Scale employees infinitely with zero additional software licenses.' },
                { icon: Clock, title: 'Predictable Sprint Delivery', desc: 'Agile development schedules with milestone sign-offs.' },
                { icon: Users, title: 'Role-Based Access Control', desc: 'Configure exact view and edit permissions per staff tier.' },
                { icon: Lock, title: 'Private Cloud Infrastructure', desc: 'Deploy on AWS or local servers with complete data privacy.' }
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
          <h2 className="text-2xl sm:text-3xl font-extrabold">Ready to Build Your Custom Software System?</h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto">
            Schedule a free consultation call with our senior software architect to review your operational requirements and get a detailed proposal.
          </p>
          <button
            onClick={() => scrollToSection('lead-capture-widget')}
            className="px-6 py-3 bg-[#FF5A00] hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-colors cursor-pointer"
          >
            Book Free Technical Scoping Call
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
                <p className="text-xs text-emerald-700">Connect with our senior software architect directly on WhatsApp for instant scope discussions.</p>
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

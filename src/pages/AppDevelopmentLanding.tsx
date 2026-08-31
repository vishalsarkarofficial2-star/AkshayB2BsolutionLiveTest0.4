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
  Apple
} from 'lucide-react';
import { HeaderMegaMenu } from '../components/HeaderMegaMenu';
import { TopUtilityBar } from '../components/TopUtilityBar';

interface AppDevelopmentLandingProps {
  onBackToHome: () => void;
  onSelectService: (serviceName: string) => void;
  onOpenBrochure: () => void;
  onOpenAppointment: () => void;
}

// 6 Accordion FAQs for App Development
const FAQ_ITEMS = [
  {
    q: 'How long does it take to develop a custom mobile app?',
    a: 'MVP cross-platform mobile apps are typically completed within 2 to 3 weeks. Feature-rich native Android and iOS apps with custom backend APIs require 4 to 6 weeks depending on complex integration needs.'
  },
  {
    q: 'Should I choose Native (Kotlin/Swift) or Cross-Platform (Flutter/React Native)?',
    a: 'Cross-platform frameworks like Flutter or React Native allow building for both iOS and Android simultaneously from a single codebase, saving up to 40% development cost. Native is ideal for heavy hardware access or intensive 3D graphics.'
  },
  {
    q: 'Will your team handle Google Play Store and Apple App Store publishing?',
    a: 'Yes, our team handles end-to-end store publishing including app store guidelines compliance, metadata optimization, privacy policy compliance, app submission, and review approval management.'
  },
  {
    q: 'Do I get 100% full source code ownership after development?',
    a: 'Yes. Upon completion and final payment, we hand over full source code repositories (GitHub/GitLab), store developer account transfers, API documentation, and server credentials with zero vendor lock-in.'
  },
  {
    q: 'Can the app support offline mode, push notifications, and payment gateways?',
    a: 'Absolutely! We routinely integrate FCM push notifications, offline local SQLite/Realm sync, biometric login (FaceID/Fingerprint), and Indian payment gateways like Razorpay, Cashfree, and PhonePe.'
  },
  {
    q: 'What post-launch maintenance support is included?',
    a: 'We provide 12 months of post-launch technical support for bug resolution, new Android/iOS OS version compatibility updates, server monitoring, and app store updates.'
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
    title: 'CRM Development',
    desc: 'Bespoke sales pipeline management, lead auto-routing, and customer service dashboards.',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=80',
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

export const AppDevelopmentLanding: React.FC<AppDevelopmentLandingProps> = ({
  onBackToHome,
  onSelectService,
  onOpenBrochure,
  onOpenAppointment
}) => {
  // Navigation tabs state
  const [activeNavTab, setActiveNavTab] = useState('packages');

  // Form state
  const [formStep, setFormStep] = useState(1);
  const [selectedSubService, setSelectedSubService] = useState('Android App Development');
  const [platformTarget, setPlatformTarget] = useState('Android & iOS (Cross-Platform)');
  const [selectedBudget, setSelectedBudget] = useState('₹25,000 - ₹50,000');
  const [selectedPackage, setSelectedPackage] = useState('Standard Growth App (Custom Pricing)');
  const [applicantName, setApplicantName] = useState('');
  const [applicantMobile, setApplicantMobile] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [projectNote, setProjectNote] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaCode, setCaptchaCode] = useState('8M3P9');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Animated counters
  const [counterClients, setCounterClients] = useState(0);
  const [counterApps, setCounterApps] = useState(0);
  const [counterEngineers, setCounterEngineers] = useState(0);

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
      setCounterClients(Math.floor(progress * 1900));
      setCounterApps(Math.floor(progress * 850));
      setCounterEngineers(Math.floor(progress * 35));
      if (start >= steps) {
        clearInterval(timer);
        setCounterClients(1900);
        setCounterApps(850);
        setCounterEngineers(35);
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
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-500 selection:text-[#0B3D91] flex flex-col antialiased">
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
            <span className="text-slate-900 font-bold">App Development Services</span>
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
                  <Smartphone className="w-3.5 h-3.5 text-[#FF5A00]" />
                  <span>Mobile App Engineering Studio</span>
                  <span className="w-1 h-1 rounded-full bg-white/60"></span>
                  <span className="text-white">Android &amp; iOS Store Launch</span>
                </div>

                {/* H1 Heading & Tagline */}
                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight antialiased">
                    Mobile App Development Services
                  </h1>
                  <div className="space-y-0.5">
                    <p className="text-xl sm:text-2xl font-black text-orange-300 antialiased">
                      Build high-performance mobile apps with{' '}
                      <span className="underline decoration-[#FF5A00] decoration-2 underline-offset-4 font-black text-white">
                        Custom Pricing
                      </span>
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-blue-100 antialiased">
                      + 100% Source Code &amp; Play Store / App Store Publishing
                    </p>
                  </div>
                </div>

                {/* Definition: 2-3 Line Description */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                  Our Mobile App Development team engineers scalable native (Kotlin &amp; Swift) and cross-platform (Flutter &amp; React Native) applications. We build secure, offline-ready, push-notification integrated business apps designed for maximum user retention and seamless app store approvals.
                </p>

                {/* 6 Feature Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Smartphone className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Android &amp; iOS</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Zap className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Native Performance</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Rocket className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Store Publishing</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Lock className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Biometric &amp; SSL Security</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Award className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>100% Code Ownership</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Users className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Dedicated App Architect</span>
                  </div>
                </div>

                {/* Trust Counters */}
                <div className="grid grid-cols-3 gap-3 pt-3">
                  <div className="p-3 rounded-2xl bg-white/10 border border-white/20 text-center">
                    <div className="text-xl sm:text-3xl font-black text-orange-300 font-mono">
                      {counterApps.toLocaleString()}+
                    </div>
                    <div className="text-[10px] sm:text-xs font-semibold text-slate-200 uppercase tracking-wider mt-0.5">
                      Apps Delivered
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/10 border border-white/20 text-center">
                    <div className="text-xl sm:text-3xl font-black text-white font-mono">
                      {counterClients.toLocaleString()}+
                    </div>
                    <div className="text-[10px] sm:text-xs font-semibold text-slate-200 uppercase tracking-wider mt-0.5">
                      Happy Clients
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/10 border border-white/20 text-center">
                    <div className="text-xl sm:text-3xl font-black text-orange-300 font-mono">
                      {counterEngineers}+
                    </div>
                    <div className="text-[10px] sm:text-xs font-semibold text-slate-200 uppercase tracking-wider mt-0.5">
                      Mobile Engineers
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
                    <span className="text-slate-300 text-[11px]">Google Play Reviews</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 border border-white/15 text-xs text-white">
                    <Award className="w-3 h-3 text-orange-300" />
                    <span className="font-bold">4.9/5</span>
                    <span className="text-slate-300 text-[11px]">App Store Rating</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 border border-white/15 text-xs text-white">
                    <ShieldCheck className="w-3 h-3 text-orange-400" />
                    <span className="font-bold">100%</span>
                    <span className="text-slate-300 text-[11px]">Source Handoff</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Multi-Step Lead Capture Form */}
              <div id="lead-capture-widget" className="lg:col-span-5 scroll-mt-24">
                <div className="bg-white rounded-2xl shadow-2xl border-2 border-orange-400/80 p-5 sm:p-6 text-slate-900 relative">
                  {/* Urgency Badge */}
                  <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-[#FF5A00] text-[#0B3D91] text-xs font-black uppercase tracking-wider shadow-md flex items-center gap-1">
                    <Flame className="w-3 h-3 fill-[#0B3D91]" />
                    <span>Free App Blueprint</span>
                  </div>

                  {formSubmitted ? (
                    <div className="text-center py-8 space-y-4 animate-in fade-in">
                      <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Application Received!</h3>
                      <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
                        Thank you <span className="font-bold">{applicantName}</span>. Our lead mobile app architect has been assigned to your app requirement docket. We will call you at <span className="font-bold">{applicantMobile}</span> within 15 minutes.
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
                              App Consultation Desk
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
                            Custom App Quote
                          </span>
                          <span className="text-[10px] font-medium text-slate-500 block leading-tight">
                            Based on Features
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
                        {/* STEP 1: Select Sub-Service & Platform Target */}
                        {formStep === 1 && (
                          <div className="space-y-3 animate-in fade-in">
                            <div>
                              <label className="block text-xs font-bold text-slate-700 mb-1">
                                Select App Development Category *
                              </label>
                              <select
                                value={selectedSubService}
                                onChange={(e) => setSelectedSubService(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                              >
                                <option value="Android App Development">Android App Development</option>
                                <option value="iOS App Development">iOS App Development</option>
                                <option value="Cross-Platform App Development">Cross-Platform App Development (Flutter / React Native)</option>
                                <option value="Business App Development">Business Enterprise App Development</option>
                              </select>
                            </div>

                            <div>
                              <label className="block text-xs font-bold text-slate-700 mb-1">
                                Target Platform *
                              </label>
                              <select
                                value={platformTarget}
                                onChange={(e) => setPlatformTarget(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                              >
                                <option value="Android & iOS (Cross-Platform)">Android &amp; iOS Both (Flutter / React Native)</option>
                                <option value="Android Only">Android Only (Play Store)</option>
                                <option value="iOS Only">iOS Only (Apple App Store)</option>
                              </select>
                            </div>

                            <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100 text-xs text-slate-600 space-y-1">
                              <div className="flex items-center gap-1.5 font-bold text-[#0B3D91]">
                                <ShieldCheck className="w-4 h-4 text-[#FF5A00]" />
                                <span>Why build mobile apps with us?</span>
                              </div>
                              <p className="text-[11px]">
                                100% source code ownership, Play Store / App Store submission guarantee, native speed, and 12-month technical support.
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
                                placeholder="e.g. Ananya Sharma"
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
                                App Idea Summary (Optional)
                              </label>
                              <textarea
                                rows={2}
                                value={projectNote}
                                onChange={(e) => setProjectNote(e.target.value)}
                                placeholder="Briefly describe your app idea or features needed..."
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
                                  <option value="Basic Starter App (Custom Pricing)">Basic Starter App</option>
                                  <option value="Standard Growth App (Custom Pricing)">Standard Growth App</option>
                                  <option value="Enterprise Custom App (Custom Pricing)">Enterprise Custom App</option>
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
                                  <span>Request Free App Quote</span>
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
                Tiered App Packages
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0D47A1] mt-2">
                Flexible App Development Tiers
              </h2>
              <p className="text-sm text-slate-500 mt-2 mx-auto max-w-2xl text-center">
                Select an app development package engineered for your operational scale. All packages include complete source code ownership.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* TIER 1: BASIC */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="px-3 py-1 rounded bg-slate-100 text-slate-700 text-[10px] font-black uppercase tracking-wide inline-block mb-3">
                    MVP STARTER APP
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">Basic App Package</h3>
                  <p className="text-xs text-slate-500 mt-1 mb-4">
                    Ideal for startups testing an early mobile app concept or single-purpose utility.
                  </p>
                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <div className="text-3xl font-extrabold text-[#0D47A1]">Custom Pricing</div>
                    <span className="text-xs text-slate-400 font-medium">One-time investment</span>
                  </div>

                  <ul className="space-y-3 mb-8 text-xs text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Single Platform (Android or iOS)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Up to 6 UI Screens</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Firebase Auth &amp; Database Sync</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Push Notifications Setup</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Play Store Publishing Guidance</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => {
                    setSelectedPackage('Basic Starter App (Custom Pricing)');
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
                    CROSS-PLATFORM PRO
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">Standard Package</h3>
                  <p className="text-xs text-slate-500 mt-1 mb-4">
                    Full cross-platform Flutter/React Native app running seamlessly on both Android &amp; iOS.
                  </p>
                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <div className="text-3xl font-extrabold text-[#0D47A1]">Custom Pricing</div>
                    <span className="text-xs text-slate-400 font-medium">One-time investment</span>
                  </div>

                  <ul className="space-y-3 mb-8 text-xs text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                      <span>Android + iOS Dual Build (Flutter)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                      <span>Up to 15 UI Screen Flows</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                      <span>Payment Gateway (Razorpay/Stripe)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                      <span>Admin Web Management Dashboard</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                      <span>Both Play Store &amp; App Store Upload</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                      <span>12 Months Free Technical Support</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => {
                    setSelectedPackage('Standard Growth App (Custom Pricing)');
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
                    ENTERPRISE ENGINE
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">Enterprise Package</h3>
                  <p className="text-xs text-slate-500 mt-1 mb-4">
                    High-throughput mobile ecosystem with microservices backend, offline sync, and custom hardware IoT/BLE integrations.
                  </p>
                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <div className="text-3xl font-extrabold text-[#0D47A1]">Custom Pricing</div>
                    <span className="text-xs text-slate-400 font-medium">Milestone based</span>
                  </div>

                  <ul className="space-y-3 mb-8 text-xs text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Native Swift &amp; Kotlin Engineering</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Microservices Backend (Node/AWS)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Real-Time WebSockets &amp; Location Tracking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Biometric Auth &amp; Encryption</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Custom API Gateway Integration</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => {
                    setSelectedPackage('Enterprise Custom App (Custom Pricing)');
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
                What is Professional App Development?
              </h2>
            </div>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Mobile App Development is the end-to-end engineering of smartphone applications for Android and iOS operating systems. Mobile apps provide businesses with a direct, personal communication channel to customers, enabling push notification marketing, location-based services, offline functionality, and seamless in-app transactions.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Target Business Audience:</strong>
                  Ideal for consumer brands, logistics companies, healthcare providers, fintech startups, and B2B enterprises needing mobile customer channels.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">High Customer Engagement &amp; Retention:</strong>
                  Push notifications keep your brand top-of-mind, driving up to 3x higher retention rates compared to standard web visits.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Native Hardware Capability:</strong>
                  Leverage smartphone hardware including GPS location, camera scanning, biometric touch/face login, and bluetooth devices.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Store Visibility &amp; Monetization:</strong>
                  Publish directly on Google Play Store and Apple App Store to reach millions of prospective users globally.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">100% Code &amp; Data Ownership:</strong>
                  Full ownership of mobile app source code repositories, API backends, and customer database logs with zero vendor restrictions.
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
                How We Build &amp; Publish Mobile Apps
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  title: 'Wireframing & UX',
                  desc: 'Designing intuitive screen workflows and interactive Figma prototypes tailored for mobile thumbs.'
                },
                {
                  step: '02',
                  title: 'Frontend & API Coding',
                  desc: 'Building responsive mobile UI screens linked with secure Node.js or Firebase cloud backends.'
                },
                {
                  step: '03',
                  title: 'Device QA Testing',
                  desc: 'Testing across various Android & iPhone screen sizes, OS versions, and network speeds.'
                },
                {
                  step: '04',
                  title: 'App Store Launch',
                  desc: 'Managing submission to Google Play Store & Apple App Store until official live approval.'
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
                6 Key Advantages of Custom Mobile Apps
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  num: '01',
                  title: 'Direct Home Screen Access',
                  desc: 'Your brand icon sits directly on the user’s smartphone home screen for instant one-tap access.'
                },
                {
                  num: '02',
                  title: 'Push Notification Marketing',
                  desc: 'Send targeted broadcasts, promotional offers, and order status updates directly to user lockscreens.'
                },
                {
                  num: '03',
                  title: 'Offline Mode Availability',
                  desc: 'Enable users to view saved information and perform key actions even when disconnected from internet.'
                },
                {
                  num: '04',
                  title: 'Biometric & One-Tap Security',
                  desc: 'Instant, secure authentication using Fingerprint, FaceID, or SMS OTP verification.'
                },
                {
                  num: '05',
                  title: 'Seamless In-App Payments',
                  desc: 'Single-tap UPI, Google Pay, Apple Pay, and credit card checkouts with minimal transaction drop-offs.'
                },
                {
                  num: '06',
                  title: 'App Store Discovery',
                  desc: 'Attract organic users via Play Store & App Store search optimization (ASO).'
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
                App Development Sub-Services
              </h2>
              <p className="text-sm text-slate-500 mt-2 mx-auto max-w-2xl text-center">
                Explore our mobile app solutions engineered for Android, iOS, cross-platform frameworks, and enterprise portals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* 1. Android App Development */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Android App Development</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Native Android apps developed using Kotlin and Jetpack Compose for peak hardware performance and Google Play Store deployment.
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-500">
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> Native Kotlin Architecture</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> Google Play Store Publishing</li>
                  </ul>
                </div>
                <button
                  onClick={() => onSelectService('Android App Development')}
                  className="w-full py-2 bg-slate-100 hover:bg-[#0B3D91] hover:text-white text-slate-800 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  View Details
                </button>
              </div>

              {/* 2. iOS App Development */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 text-slate-900 flex items-center justify-center">
                    <Apple className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">iOS App Development</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Premium iOS applications written in Swift and SwiftUI for iPhone, iPad, and Apple Watch with strict App Store guideline compliance.
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-500">
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> Native Swift / SwiftUI Code</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> Apple App Store Review Handoff</li>
                  </ul>
                </div>
                <button
                  onClick={() => onSelectService('iOS App Development')}
                  className="w-full py-2 bg-slate-100 hover:bg-[#0B3D91] hover:text-white text-slate-800 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  View Details
                </button>
              </div>

              {/* 3. Cross-Platform App Development */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-[#0B3D91] flex items-center justify-center">
                    <Layers className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Cross-Platform App Development</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Single codebase app engineering with Flutter or React Native, powering identical high-performance experiences across Android and iOS.
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-500">
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> Flutter / React Native Engine</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> 40% Cost Savings vs Dual Build</li>
                  </ul>
                </div>
                <button
                  onClick={() => onSelectService('Cross-Platform App Development')}
                  className="w-full py-2 bg-slate-100 hover:bg-[#0B3D91] hover:text-white text-slate-800 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  View Details
                </button>
              </div>

              {/* 4. Business App Development */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 text-[#FF5A00] flex items-center justify-center">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Business Enterprise App Development</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Custom operational apps for field force tracking, inventory management, customer portals, and internal employee workflow automation.
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-500">
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> Role-Based Employee Login</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> Secure ERP / CRM Webhook Integration</li>
                  </ul>
                </div>
                <button
                  onClick={() => onSelectService('Business App Development')}
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
                What You Need to Provide Before App Development
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'App Concept & Feature Requirements', desc: 'List of core screen features (e.g., user registration, cart, booking, map tracking).' },
                { title: 'Brand Assets & Icons', desc: 'High-resolution app logo vector files, brand colors, and splash screen graphics.' },
                { title: 'Developer Account Credentials', desc: 'Google Play Console and Apple Developer Account access (or we can assist in setup).' },
                { title: 'API & Server Documentation', desc: 'Existing server endpoints or database credentials if connecting to an established system.' },
                { title: 'Reference App Examples', desc: '2-3 sample mobile apps from Google Play or App Store whose layout style you like.' }
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
                5-Step Mobile App Delivery Roadmap
              </h2>
            </div>

            <div className="space-y-4">
              {[
                { step: 'Step 1', title: 'App Architecture Scoping', desc: 'We map out screen flows, user roles, API endpoints, and database models.' },
                { step: 'Step 2', title: 'Figma UI/UX Clickable Prototype', desc: 'Designing interactive mobile screen prototypes for design approval.' },
                { step: 'Step 3', title: 'Mobile Frontend & Cloud Backend Coding', desc: 'Building mobile app screens in Flutter/Native Swift/Kotlin with Node.js backend.' },
                { step: 'Step 4', title: 'Real-Device Quality & Performance Testing', desc: 'Testing app performance on various Android phones and iPhones for speed, offline sync, and battery drain.' },
                { step: 'Step 5', title: 'Play Store & App Store Publishing', desc: 'App submission, store listing graphics optimization, review approval, and full source code handover.' }
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
                Modern Mobile Stack
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Technologies &amp; Frameworks We Use
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: 'Flutter', desc: 'Cross-Platform Framework' },
                { name: 'React Native', desc: 'JavaScript App Engine' },
                { name: 'Kotlin', desc: 'Android Native Code' },
                { name: 'Swift', desc: 'iOS Native Engine' },
                { name: 'Firebase', desc: 'Auth & Push Cloud' },
                { name: 'Node.js / AWS', desc: 'API Microservices' }
              ].map((tech, idx) => (
                <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center space-y-1">
                  <Cpu className="w-6 h-6 text-[#0B3D91] mx-auto" />
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
              <h3 className="text-xl sm:text-2xl font-bold">Post-Launch App Maintenance &amp; OS Updates</h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Every mobile app includes 12 months of post-launch technical support to ensure seamless operation across mandatory new Android OS &amp; iOS updates, store policy compliance, server monitoring, and instant bug fixes.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs font-semibold text-orange-200">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#FF5A00]" /> Android &amp; iOS OS Update SLA</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#FF5A00]" /> Store Re-Submission Assistance</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#FF5A00]" /> Dedicated Lead Developer Contact</span>
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
                Why Choose Our App Engineering Studio?
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 font-bold">
                    <th className="p-3 border border-slate-200">Comparison Metrics</th>
                    <th className="p-3 border border-slate-200 text-[#0B3D91] bg-blue-50">Our App Studio</th>
                    <th className="p-3 border border-slate-200">In-House App Team</th>
                    <th className="p-3 border border-slate-200">Freelancers</th>
                    <th className="p-3 border border-slate-200">Big Consultancies</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr>
                    <td className="p-3 border border-slate-200 font-bold">Development Cost</td>
                    <td className="p-3 border border-slate-200 font-bold text-[#0B3D91] bg-blue-50/50">Fixed Predictable Pricing</td>
                    <td className="p-3 border border-slate-200">High Monthly Overhead</td>
                    <td className="p-3 border border-slate-200">Uncertain Scope Costs</td>
                    <td className="p-3 border border-slate-200">Overpriced Billing</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 font-bold">Store Publishing SLA</td>
                    <td className="p-3 border border-slate-200 font-bold text-[#0B3D91] bg-blue-50/50">Guaranteed Approval Support</td>
                    <td className="p-3 border border-slate-200">Internal Dependency</td>
                    <td className="p-3 border border-slate-200">No Publishing Support</td>
                    <td className="p-3 border border-slate-200">Long Legal Bureaucracy</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 font-bold">Source Code Handoff</td>
                    <td className="p-3 border border-slate-200 font-bold text-[#0B3D91] bg-blue-50/50">100% Repository Ownership</td>
                    <td className="p-3 border border-slate-200">Internal Repo</td>
                    <td className="p-3 border border-slate-200">Incomplete Code Handoff</td>
                    <td className="p-3 border border-slate-200">Proprietary Lock-in</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 font-bold">Performance Optimization</td>
                    <td className="p-3 border border-slate-200 font-bold text-[#0B3D91] bg-blue-50/50">60 FPS Native Animations</td>
                    <td className="p-3 border border-slate-200">Varies</td>
                    <td className="p-3 border border-slate-200">Frequent Lag &amp; Crashes</td>
                    <td className="p-3 border border-slate-200">High Standard</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 font-bold">Post-Launch Support</td>
                    <td className="p-3 border border-slate-200 font-bold text-[#0B3D91] bg-blue-50/50">12 Months Dedicated SLA</td>
                    <td className="p-3 border border-slate-200">Ongoing Salary Cost</td>
                    <td className="p-3 border border-slate-200">Disappears Post Launch</td>
                    <td className="p-3 border border-slate-200">High Retainer Fees</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 15. PRICING & INVESTMENT EXPLANATION */}
        <section className="py-14 bg-slate-50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Understanding Mobile App Investment</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Mobile app development pricing varies based on target platforms (Android, iOS, or both), total UI screen complexity, payment gateway integrations, push notification architecture, and backend API requirements. We provide fixed milestone quotations after analyzing your complete feature list.
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
                  <li>• <strong>MVP Single Platform App:</strong> 2 - 3 Weeks</li>
                  <li>• <strong>Standard Cross-Platform App:</strong> 3 - 5 Weeks</li>
                  <li>• <strong>Custom Enterprise App Ecosystem:</strong> 6 - 8 Weeks</li>
                </ul>
              </div>
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0B3D91]" /> Handover Package
                </h4>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li>• APK / AAB (Android) &amp; IPA (iOS) Build Files</li>
                  <li>• 100% Full Source Code Git Repository</li>
                  <li>• Google Play Store &amp; Apple App Store Approval</li>
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
                Why Partner with Our App Development Studio
              </h2>
            </div>

            <div className="space-y-3">
              {[
                { title: 'Certified Mobile Solution Architects', desc: 'Our developers possess 7+ years of experience building scalable Flutter, React Native, Swift, and Kotlin apps.' },
                { title: 'Store Approval Guarantee', desc: 'We take complete responsibility for meeting Apple App Store and Google Play Store submission policies.' },
                { title: 'Zero Hidden Costs', desc: 'Upfront transparent milestone quotes covering design, development, API backends, and store launch.' },
                { title: 'Weekly Test Build Distribution', desc: 'Test live APK/TestFlight builds on your personal smartphone every week during active development.' },
                { title: 'Dedicated Support Account Lead', desc: 'Direct access to your assigned app development team via phone, email, and WhatsApp.' }
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
                Built on Quality, Speed &amp; Reliability
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: ShieldCheck, title: '100% Code Ownership', desc: 'Complete IP rights transfer upon project completion.' },
                { icon: Zap, title: '60 FPS Native Speed', desc: 'Fluid animations optimized for high refresh rate screens.' },
                { icon: Award, title: 'Store Policy Compliant', desc: 'Adhering to strict Apple Human Interface & Google Material guidelines.' },
                { icon: Clock, title: 'On-Time Milestone Delivery', desc: 'Strict sprint delivery schedules backed by agreement.' },
                { icon: Users, title: 'Dedicated App Engineers', desc: 'Direct communication with senior mobile developers.' },
                { icon: Lock, title: '256-Bit API Security', desc: 'Encrypted communication between mobile app and backend cloud.' }
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
          <h2 className="text-2xl sm:text-3xl font-extrabold">Ready to Build Your Custom Mobile App?</h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto">
            Schedule a free consultation call with our senior app architect to discuss your feature list and receive a detailed technical proposal.
          </p>
          <button
            onClick={() => scrollToSection('lead-capture-widget')}
            className="px-6 py-3 bg-[#FF5A00] hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-colors cursor-pointer"
          >
            Book Free App Blueprint Call
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
                <p className="text-xs text-emerald-700">Connect with our senior app architect directly on WhatsApp for instant scope discussions.</p>
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

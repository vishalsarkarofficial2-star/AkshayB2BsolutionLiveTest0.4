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
  ShoppingCart,
  RefreshCw,
  Wrench
} from 'lucide-react';
import { HeaderMegaMenu } from '../components/HeaderMegaMenu';
import { TopUtilityBar } from '../components/TopUtilityBar';

interface WebsiteDevelopmentLandingProps {
  onBackToHome: () => void;
  onSelectService: (serviceName: string) => void;
  onOpenBrochure: () => void;
  onOpenAppointment: () => void;
}

// 6 Accordion FAQs for Website Development
const FAQ_ITEMS = [
  {
    q: 'How long does it take to develop a business website?',
    a: 'Standard corporate websites are typically completed within 7 to 10 working days. E-commerce sites take 10 to 14 days, while complex custom web applications require 3 to 4 weeks depending on specific feature requirements.'
  },
  {
    q: 'Will my website be mobile-responsive and compatible across all browsers?',
    a: 'Yes, 100%. All our web solutions are engineered with a mobile-first responsive architecture ensuring seamless display and optimal performance across iPhones, Android devices, tablets, and desktop displays.'
  },
  {
    q: 'Will I get full source code ownership after the project is completed?',
    a: 'Absolutely. Upon project completion and final payment, we hand over 100% source code ownership, repository access, admin credentials, and cloud deployment rights with zero vendor lock-in.'
  },
  {
    q: 'Is basic search engine optimization (SEO) included in the web development package?',
    a: 'Yes, every website built by our team includes fundamental Technical and On-Page SEO: meta tags, clean semantic HTML5 markup, image alt tags, XML sitemap, robots.txt, and fast page load speeds.'
  },
  {
    q: 'Can I edit and update content on my website without coding knowledge?',
    a: 'Yes! We integrate user-friendly Content Management Systems (CMS) or custom admin dashboards, and provide a video walkthrough so your team can easily update text, images, products, and blog posts.'
  },
  {
    q: 'What post-launch technical support and maintenance do you provide?',
    a: 'We offer 12 months of complimentary technical support covering server uptime monitoring, bug fixes, and SSL maintenance, alongside flexible monthly maintenance retainers for continuous content updates.'
  }
];

// Related IT & Digital Services cross-linking
const RELATED_SERVICES = [
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
    title: 'Software Development',
    desc: 'Enterprise ERPs, billing software, SaaS platforms, and operational automation software.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80',
    price: 'Custom Pricing'
  },
  {
    title: 'Digital Marketing',
    desc: 'Results-driven Meta Ads, Google PPC campaigns, organic SEO, and lead generation.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
    price: 'Custom Pricing'
  },
  {
    title: 'Meta Ads Management',
    desc: 'Laser-targeted Facebook & Instagram ad campaigns engineered for maximum ROI.',
    img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&auto=format&fit=crop&q=80',
    price: 'Custom Pricing'
  }
];

export const WebsiteDevelopmentLanding: React.FC<WebsiteDevelopmentLandingProps> = ({
  onBackToHome,
  onSelectService,
  onOpenBrochure,
  onOpenAppointment
}) => {
  // Navigation tabs state
  const [activeNavTab, setActiveNavTab] = useState('packages');

  // Form state
  const [formStep, setFormStep] = useState(1);
  const [selectedSubService, setSelectedSubService] = useState('Business Website Development');
  const [industryType, setIndustryType] = useState('Corporate / Services');
  const [selectedBudget, setSelectedBudget] = useState('₹10,000 - ₹25,000');
  const [selectedPackage, setSelectedPackage] = useState('Standard Growth Package (Custom Pricing)');
  const [applicantName, setApplicantName] = useState('');
  const [applicantMobile, setApplicantMobile] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [projectNote, setProjectNote] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaCode, setCaptchaCode] = useState('7W9K2');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Animated counters
  const [counterClients, setCounterClients] = useState(0);
  const [counterWebsites, setCounterWebsites] = useState(0);
  const [counterExperts, setCounterExperts] = useState(0);

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
      setCounterClients(Math.floor(progress * 2500));
      setCounterWebsites(Math.floor(progress * 1800));
      setCounterExperts(Math.floor(progress * 45));
      if (start >= steps) {
        clearInterval(timer);
        setCounterClients(2500);
        setCounterWebsites(1800);
        setCounterExperts(45);
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
            <span className="text-slate-900 font-bold">Website Development Services</span>
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
                  <Globe className="w-3.5 h-3.5 text-[#FF5A00]" />
                  <span>Pan-India Web Development Studio</span>
                  <span className="w-1 h-1 rounded-full bg-white/60"></span>
                  <span className="text-white">Fast-Track 7-Day TAT</span>
                </div>

                {/* H1 Heading & Tagline */}
                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight antialiased">
                    Professional Website Development
                  </h1>
                  <div className="space-y-0.5">
                    <p className="text-xl sm:text-2xl font-black text-orange-300 antialiased">
                      Build your modern corporate website with{' '}
                      <span className="underline decoration-[#FF5A00] decoration-2 underline-offset-4 font-black text-white">
                        Custom Pricing
                      </span>
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-blue-100 antialiased">
                      + Free 1-Year Hosting Assistance &amp; SSL Included
                    </p>
                  </div>
                </div>

                {/* Definition: 2-3 Line Description */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                  Our Website Development engineering team builds fast, mobile-responsive, and SEO-optimized web solutions. From high-converting business sites and feature-rich e-commerce portals to custom web applications and landing pages, we deliver 100% source code ownership with enterprise-grade cloud security.
                </p>

                {/* 6 Feature Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Clock className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>7 Days Delivery</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Smartphone className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Mobile First Design</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Search className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>SEO Architecture</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Zap className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Sub-Second Load Speed</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Lock className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>SSL Security Included</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Users className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Dedicated Web Architect</span>
                  </div>
                </div>

                {/* Trust Counters */}
                <div className="grid grid-cols-3 gap-3 pt-3">
                  <div className="p-3 rounded-2xl bg-white/10 border border-white/20 text-center">
                    <div className="text-xl sm:text-3xl font-black text-orange-300 font-mono">
                      {counterWebsites.toLocaleString()}+
                    </div>
                    <div className="text-[10px] sm:text-xs font-semibold text-slate-200 uppercase tracking-wider mt-0.5">
                      Websites Built
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
                      {counterExperts}+
                    </div>
                    <div className="text-[10px] sm:text-xs font-semibold text-slate-200 uppercase tracking-wider mt-0.5">
                      Senior Engineers
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
                    <span className="text-slate-300 text-[11px]">Client Rating</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 border border-white/15 text-xs text-white">
                    <ShieldCheck className="w-3 h-3 text-orange-400" />
                    <span className="font-bold">100%</span>
                    <span className="text-slate-300 text-[11px]">Source Code Handoff</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Multi-Step Lead Capture Form */}
              <div id="lead-capture-widget" className="lg:col-span-5 scroll-mt-24">
                <div className="bg-white rounded-2xl shadow-2xl border-2 border-orange-400/80 p-5 sm:p-6 text-slate-900 relative">
                  {/* Urgency Badge */}
                  <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-[#FF5A00] text-[#0B3D91] text-xs font-black uppercase tracking-wider shadow-md flex items-center gap-1">
                    <Flame className="w-3 h-3 fill-[#0B3D91]" />
                    <span>Free Tech Quote</span>
                  </div>

                  {formSubmitted ? (
                    <div className="text-center py-8 space-y-4 animate-in fade-in">
                      <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Application Received!</h3>
                      <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
                        Thank you <span className="font-bold">{applicantName}</span>. Our senior web solution architect has been assigned to your project request. We will contact you at <span className="font-bold">{applicantMobile}</span> within 15 minutes.
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
                              Web Consultation Desk
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
                            Custom Quote
                          </span>
                          <span className="text-[10px] font-medium text-slate-500 block leading-tight">
                            Based on Scope
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
                        {/* STEP 1: Select Sub-Service & Industry */}
                        {formStep === 1 && (
                          <div className="space-y-3 animate-in fade-in">
                            <div>
                              <label className="block text-xs font-bold text-slate-700 mb-1">
                                Select Website Service Type *
                              </label>
                              <select
                                value={selectedSubService}
                                onChange={(e) => setSelectedSubService(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                              >
                                <option value="Business Website Development">Business Website Development</option>
                                <option value="E-commerce Website Development">E-commerce Website Development</option>
                                <option value="Custom Website Development">Custom Website Development</option>
                                <option value="Landing Page Development">Landing Page Development</option>
                                <option value="Website Redesign">Website Redesign</option>
                                <option value="Website Maintenance">Website Maintenance</option>
                              </select>
                            </div>

                            <div>
                              <label className="block text-xs font-bold text-slate-700 mb-1">
                                Industry / Business Category *
                              </label>
                              <select
                                value={industryType}
                                onChange={(e) => setIndustryType(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                              >
                                <option value="Corporate / Services">Corporate &amp; Professional Services</option>
                                <option value="E-commerce & Retail">E-commerce &amp; Retail Store</option>
                                <option value="Healthcare & Medical">Healthcare &amp; Clinic</option>
                                <option value="Real Estate & Construction">Real Estate &amp; Construction</option>
                                <option value="Education & EdTech">Education &amp; E-Learning</option>
                                <option value="Restaurant & Hospitality">Restaurant &amp; Hospitality</option>
                                <option value="Technology & SaaS">Technology &amp; SaaS Startup</option>
                              </select>
                            </div>

                            <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100 text-xs text-slate-600 space-y-1">
                              <div className="flex items-center gap-1.5 font-bold text-[#0B3D91]">
                                <ShieldCheck className="w-4 h-4 text-[#FF5A00]" />
                                <span>Why build with our Web Studio?</span>
                              </div>
                              <p className="text-[11px]">
                                100% source code handoff, sub-second load speeds, modern responsive design, and dedicated post-launch support.
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
                                placeholder="e.g. Vikramaditya Singh"
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
                                Brief Project Notes (Optional)
                              </label>
                              <textarea
                                rows={2}
                                value={projectNote}
                                onChange={(e) => setProjectNote(e.target.value)}
                                placeholder="Describe your website goals or reference site URLs..."
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
                                  Budget Range *
                                </label>
                                <select
                                  value={selectedBudget}
                                  onChange={(e) => setSelectedBudget(e.target.value)}
                                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                                >
                                  <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000</option>
                                  <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                                  <option value="₹50,000 - ₹1,000,000">₹50,000 - ₹1,00,000</option>
                                  <option value="₹1,00,000+">₹1,00,000+</option>
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
                                  <option value="Basic Starter Package (Custom Pricing)">Basic Starter Package</option>
                                  <option value="Standard Growth Package (Custom Pricing)">Standard Growth Package</option>
                                  <option value="Enterprise Custom Package (Custom Pricing)">Enterprise Custom Package</option>
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
                                  <span>Request Free Tech Quote</span>
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
                Tiered Web Development Packages
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0D47A1] mt-2">
                Flexible Investment Options
              </h2>
              <p className="text-sm text-slate-500 mt-2 mx-auto max-w-2xl text-center">
                Select a web development package engineered for your current growth stage. All tiers include 100% source code ownership.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* TIER 1: BASIC */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="px-3 py-1 rounded bg-slate-100 text-slate-700 text-[10px] font-black uppercase tracking-wide inline-block mb-3">
                    STARTER SITE
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">Basic Package</h3>
                  <p className="text-xs text-slate-500 mt-1 mb-4">
                    Ideal for small businesses and consultants launching their first corporate website.
                  </p>
                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <div className="text-3xl font-extrabold text-[#0D47A1]">Custom Pricing</div>
                    <span className="text-xs text-slate-400 font-medium">One-time investment</span>
                  </div>

                  <ul className="space-y-3 mb-8 text-xs text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>5 Custom Designed Pages</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Mobile-First Responsive Layout</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Contact Form &amp; WhatsApp Integration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Basic On-Page SEO Setup</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Free SSL Certificate Setup</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => {
                    setSelectedPackage('Basic Starter Package (Custom Pricing)');
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
                    GROWTH ENTERPRISE
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">Standard Package</h3>
                  <p className="text-xs text-slate-500 mt-1 mb-4">
                    Full-featured corporate website with CMS blog portal, speed optimization, and CRM webhooks.
                  </p>
                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <div className="text-3xl font-extrabold text-[#0D47A1]">Custom Pricing</div>
                    <span className="text-xs text-slate-400 font-medium">One-time investment</span>
                  </div>

                  <ul className="space-y-3 mb-8 text-xs text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                      <span>Up to 15 Custom Pages</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                      <span>Figma UI/UX Prototyping</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                      <span>Blog / News CMS Portal</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                      <span>Lead Auto-Capture &amp; CRM Webhook</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                      <span>Sub-Second PageSpeed Acceleration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                      <span>Google Analytics 4 &amp; Tag Manager</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => {
                    setSelectedPackage('Standard Growth Package (Custom Pricing)');
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
                    BESPOKE WEB APP
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">Enterprise Package</h3>
                  <p className="text-xs text-slate-500 mt-1 mb-4">
                    Custom web platforms built with React/Next.js, user portals, database &amp; payment APIs.
                  </p>
                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <div className="text-3xl font-extrabold text-[#0D47A1]">Custom Pricing</div>
                    <span className="text-xs text-slate-400 font-medium">Milestone based</span>
                  </div>

                  <ul className="space-y-3 mb-8 text-xs text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>React / Next.js + Node.js Stack</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Custom Database Architecture</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>User Authentication &amp; Role Access</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Payment Gateway Integration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>AWS / Cloudflare Infrastructure</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => {
                    setSelectedPackage('Enterprise Custom Package (Custom Pricing)');
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
                What is Professional Website Development?
              </h2>
            </div>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Website Development involves designing, engineering, and deploying responsive digital portals that reflect your business identity, showcase your core products or services, and convert online visitors into loyal customers. In today's digital-first economy, a high-speed corporate website is the single most critical asset for establishing market credibility and generating inbound business leads.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Target Business Audience:</strong>
                  Designed for corporate companies, startups, local retailers, service providers, and brands looking to scale their digital footprint and automate lead generation.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Strategic Digital Credibility:</strong>
                  Establishes an official corporate web presence that builds trust with prospective B2B clients, investors, and retail buyers instantly.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Conversion-Driven UI/UX:</strong>
                  Structured layout design with strategically placed call-to-action (CTA) banners, WhatsApp chat triggers, and contact lead capture forms.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Google Search Engine Visibility:</strong>
                  Built on clean semantic HTML5, fast asset delivery, mobile-first responsiveness, and structured schema data to ensure high organic Google rankings.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Full Code &amp; Asset Ownership:</strong>
                  You receive 100% complete source code ownership, cloud hosting access, and full administrative rights upon final handover.
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
                How We Deliver Your Web Project
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  title: 'Discovery & Sitemap',
                  desc: 'We analyze your business requirements, define site architecture, and map out page navigation.'
                },
                {
                  step: '02',
                  title: 'Figma UI/UX Design',
                  desc: 'Crafting brand-aligned visual prototypes in Figma for desktop and mobile preview approvals.'
                },
                {
                  step: '03',
                  title: 'Full-Stack Coding',
                  desc: 'Writing clean, fast, modular code using modern frameworks and responsive Tailwind CSS layout.'
                },
                {
                  step: '04',
                  title: 'QA & Cloud Launch',
                  desc: 'Cross-browser testing, speed optimization, SSL installation, and production cloud launch.'
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
                6 Key Advantages of a Custom Business Website
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  num: '01',
                  title: 'Enhanced Brand Credibility',
                  desc: 'A modern, professional corporate website signals legitimacy to buyers, partners, and enterprise stakeholders.'
                },
                {
                  num: '02',
                  title: 'Inbound Lead Generation',
                  desc: 'Integrated lead capture forms, WhatsApp chat widgets, and clear CTAs convert passive traffic into active customer inquiries.'
                },
                {
                  num: '03',
                  title: '24/7 Digital Sales Presence',
                  desc: 'Your business details, product catalogs, and contact channels remain accessible to prospective clients 24 hours a day.'
                },
                {
                  num: '04',
                  title: 'Search Engine Dominance',
                  desc: 'Built with technical SEO standards to help your company rank for high-intent Google search keywords.'
                },
                {
                  num: '05',
                  title: 'Mobile & Speed Optimization',
                  desc: 'Sub-second page loading speeds and fluid responsiveness keep bounce rates low across all mobile devices.'
                },
                {
                  num: '06',
                  title: 'Complete Ownership & Control',
                  desc: 'Zero reliance on third-party marketplace algorithms. You own 100% of your domain, code, and customer data.'
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
                Website Development Sub-Services
              </h2>
              <p className="text-sm text-slate-500 mt-2 mx-auto max-w-2xl text-center">
                Explore our specialized web development offerings built for corporate brands, e-commerce stores, and digital startups.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 1. Business Website Development */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-[#0B3D91] flex items-center justify-center">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Business Website Development</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Professional corporate websites designed to present company credentials, service offerings, client testimonials, and contact touchpoints clearly.
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-500">
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> 5-10 Custom Corporate Pages</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> Lead Forms &amp; Google Map Setup</li>
                  </ul>
                </div>
                <button
                  onClick={() => onSelectService('Business Website Development')}
                  className="w-full py-2 bg-slate-100 hover:bg-[#0B3D91] hover:text-white text-slate-800 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  View Details
                </button>
              </div>

              {/* 2. E-commerce Website Development */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 text-[#FF5A00] flex items-center justify-center">
                    <ShoppingCart className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">E-commerce Website Development</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Online store development featuring interactive product catalogs, cart workflows, payment gateways (Razorpay, Stripe), and order management.
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-500">
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> Payment Gateway &amp; Cart Integration</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> Inventory &amp; Order Admin Panel</li>
                  </ul>
                </div>
                <button
                  onClick={() => onSelectService('E-commerce Website Development')}
                  className="w-full py-2 bg-slate-100 hover:bg-[#0B3D91] hover:text-white text-slate-800 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  View Details
                </button>
              </div>

              {/* 3. Custom Website Development */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-[#0B3D91] flex items-center justify-center">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Custom Website Development</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Bespoke web applications built with React, Next.js, and Node.js for complex business logic, multi-user portals, and REST API integrations.
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-500">
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> React / Next.js Custom Code</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> Tailored Database &amp; API Logic</li>
                  </ul>
                </div>
                <button
                  onClick={() => onSelectService('Custom Website Development')}
                  className="w-full py-2 bg-slate-100 hover:bg-[#0B3D91] hover:text-white text-slate-800 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  View Details
                </button>
              </div>

              {/* 4. Landing Page Development */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Landing Page Development</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    High-converting single-page landing pages optimized specifically for Meta and Google paid ad campaigns to maximize inquiry ROI.
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-500">
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> Laser-Focused Copy &amp; CTA Layout</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> Sub-Second Load Time for Ads</li>
                  </ul>
                </div>
                <button
                  onClick={() => onSelectService('Landing Page Development')}
                  className="w-full py-2 bg-slate-100 hover:bg-[#0B3D91] hover:text-white text-slate-800 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  View Details
                </button>
              </div>

              {/* 5. Website Redesign */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center">
                    <RefreshCw className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Website Redesign</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Modernize outdated sites with fresh UI component layouts, mobile optimization, page speed acceleration, and 301 SEO URL preservation.
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-500">
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> Complete Visual Overhaul</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> SEO Ranking Preservation</li>
                  </ul>
                </div>
                <button
                  onClick={() => onSelectService('Website Redesign')}
                  className="w-full py-2 bg-slate-100 hover:bg-[#0B3D91] hover:text-white text-slate-800 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  View Details
                </button>
              </div>

              {/* 6. Website Maintenance */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-[#0B3D91] flex items-center justify-center">
                    <Wrench className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Website Maintenance</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Monthly support retainers covering daily cloud backups, security malware scans, uptime monitoring, and ongoing content updates.
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-500">
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> Daily Backups &amp; Malware Scans</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> Dedicated Monthly Edit Hours</li>
                  </ul>
                </div>
                <button
                  onClick={() => onSelectService('Website Maintenance')}
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
                What You Need to Provide Before We Start
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Brand Assets & Logo', desc: 'High-resolution logo files (PNG/SVG) and preferred brand color palette.' },
                { title: 'Company & Service Details', desc: 'Text content describing your company history, services, and team background.' },
                { title: 'Domain & Hosting Access', desc: 'Login details for existing domain registrars (GoDaddy, Namecheap) or cloud hosting.' },
                { title: 'Contact Touchpoints', desc: 'Official phone numbers, support emails, address for map pin, and social links.' },
                { title: 'Reference Website URLs', desc: '2-3 sample websites whose layout style or feature design you admire.' }
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
                5-Step Project Execution Roadmap
              </h2>
            </div>

            <div className="space-y-4">
              {[
                { step: 'Step 1', title: 'Scope Requirement & Discovery Call', desc: 'We conduct an initial technical scoping call to finalize page sitemap, functionality lists, and project milestones.' },
                { step: 'Step 2', title: 'UI/UX Wireframing & Figma Design', desc: 'Our senior designer creates desktop and mobile Figma prototypes for client review and feedback iterations.' },
                { step: 'Step 3', title: 'Full-Stack Frontend & Backend Development', desc: 'Developers write clean, responsive code, building dynamic pages, contact forms, and API integrations.' },
                { step: 'Step 4', title: 'Quality Control, Speed & Security Audit', desc: 'Rigorous testing across browser types, Google PageSpeed optimization, SSL certificate testing, and form spam protection.' },
                { step: 'Step 5', title: 'Live Cloud Launch & Training Handoff', desc: 'Domain DNS mapping, production server deployment, full source code delivery, and admin panel walkthrough.' }
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
                Modern Stack
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Technologies &amp; Frameworks We Use
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: 'React / Next.js', desc: 'Frontend Framework' },
                { name: 'Tailwind CSS', desc: 'Responsive Styling' },
                { name: 'Node.js', desc: 'Backend Architecture' },
                { name: 'PostgreSQL / Mongo', desc: 'Database Systems' },
                { name: 'Figma', desc: 'UI/UX Prototyping' },
                { name: 'AWS / Cloudflare', desc: 'Cloud & CDN' }
              ].map((tech, idx) => (
                <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center space-y-1">
                  <Code2 className="w-6 h-6 text-[#0B3D91] mx-auto" />
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
              <h3 className="text-xl sm:text-2xl font-bold">Post-Launch Technical Support &amp; Maintenance</h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                We don't disappear after launch. Every web project includes 12 months of complimentary technical support covering server uptime checks, security patch updates, SSL certificate monitoring, and immediate bug resolution.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs font-semibold text-orange-200">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#FF5A00]" /> 99.9% Uptime Guarantee</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#FF5A00]" /> Automated Daily Backups</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#FF5A00]" /> Dedicated WhatsApp Support</span>
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
                Why Choose Our Web Studio Over Options?
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 font-bold">
                    <th className="p-3 border border-slate-200">Feature Comparison</th>
                    <th className="p-3 border border-slate-200 text-[#0B3D91] bg-blue-50">Our Web Studio</th>
                    <th className="p-3 border border-slate-200">In-House Developer</th>
                    <th className="p-3 border border-slate-200">Freelancers</th>
                    <th className="p-3 border border-slate-200">Traditional Agencies</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr>
                    <td className="p-3 border border-slate-200 font-bold">Cost Model</td>
                    <td className="p-3 border border-slate-200 font-bold text-[#0B3D91] bg-blue-50/50">Transparent Fixed Price</td>
                    <td className="p-3 border border-slate-200">High Monthly Salary</td>
                    <td className="p-3 border border-slate-200">Unpredictable Hourly</td>
                    <td className="p-3 border border-slate-200">High Enterprise Fees</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 font-bold">Delivery Speed</td>
                    <td className="p-3 border border-slate-200 font-bold text-[#0B3D91] bg-blue-50/50">Fast 7-10 Days</td>
                    <td className="p-3 border border-slate-200">4-6 Weeks</td>
                    <td className="p-3 border border-slate-200">Frequent Delays</td>
                    <td className="p-3 border border-slate-200">6-8 Weeks</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 font-bold">Code Ownership</td>
                    <td className="p-3 border border-slate-200 font-bold text-[#0B3D91] bg-blue-50/50">100% Full Ownership</td>
                    <td className="p-3 border border-slate-200">Company Owned</td>
                    <td className="p-3 border border-slate-200">Often Restricted</td>
                    <td className="p-3 border border-slate-200">Vendor Lock-in</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 font-bold">SEO &amp; Speed Optimization</td>
                    <td className="p-3 border border-slate-200 font-bold text-[#0B3D91] bg-blue-50/50">Included by Default</td>
                    <td className="p-3 border border-slate-200">Varies</td>
                    <td className="p-3 border border-slate-200">Rarely Included</td>
                    <td className="p-3 border border-slate-200">Extra Charge</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 font-bold">Post-Launch Support</td>
                    <td className="p-3 border border-slate-200 font-bold text-[#0B3D91] bg-blue-50/50">12 Months Dedicated SLA</td>
                    <td className="p-3 border border-slate-200">Internal Dependency</td>
                    <td className="p-3 border border-slate-200">Unreliable</td>
                    <td className="p-3 border border-slate-200">Expensive Maintenance</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 15. PRICING & INVESTMENT EXPLANATION */}
        <section className="py-14 bg-slate-50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Understanding Web Development Costs</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Website development pricing depends on factors such as total page count, custom UI component complexity, payment gateway integrations, and third-party API requirements. We provide upfront fixed-price quotations after initial requirement scoping so you never encounter hidden charges.
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
                  <Clock className="w-4 h-4 text-[#FF5A00]" /> Estimated Delivery Timeline
                </h4>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li>• <strong>Starter Corporate Site:</strong> 5 - 7 Working Days</li>
                  <li>• <strong>E-commerce Online Store:</strong> 10 - 14 Working Days</li>
                  <li>• <strong>Custom Web Application:</strong> 3 - 4 Weeks</li>
                </ul>
              </div>
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0B3D91]" /> Handover Package
                </h4>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li>• 100% Complete Source Code Repository</li>
                  <li>• Admin CMS Credentials &amp; Walkthrough Video</li>
                  <li>• SSL Security &amp; Google Analytics Setup</li>
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
                Why Partner with Our Web Engineering Studio
              </h2>
            </div>

            <div className="space-y-3">
              {[
                { title: 'Experienced Senior Engineers', desc: 'Our full-stack team brings 8+ years of hands-on experience building enterprise web portals.' },
                { title: 'Zero Vendor Lock-In', desc: 'Full source code ownership handed over upon launch with complete hosting freedom.' },
                { title: 'Agile Weekly Demos', desc: 'Regular live staging previews and sprint reviews to keep you updated on progress.' },
                { title: 'SEO & Speed Guarantee', desc: 'Every line of code is benchmarked against Google PageSpeed and Lighthouse metrics.' },
                { title: 'Dedicated Project Manager', desc: 'Single point of contact available via phone, email, and WhatsApp for prompt assistance.' }
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
                Built on Trust, Performance &amp; Integrity
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: ShieldCheck, title: '100% Code Ownership', desc: 'Complete IP rights transfer upon project completion.' },
                { icon: Zap, title: 'Speed Accelerated', desc: 'Sub-second page loads engineered for low bounce rates.' },
                { icon: Award, title: 'ISO Security Standards', desc: 'Following W3C & OWASP web security best practices.' },
                { icon: Clock, title: 'On-Time Delivery SLA', desc: 'Strict milestone adherence guaranteed by contract.' },
                { icon: Users, title: 'Dedicated Support', desc: 'Direct access to your assigned solution architect.' },
                { icon: Lock, title: 'Transparent Pricing', desc: 'Fixed milestone quotes with zero hidden development costs.' }
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
          <h2 className="text-2xl sm:text-3xl font-extrabold">Ready to Build Your Business Website?</h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto">
            Speak with our senior web architects today for a free project scoping consultation and custom proposal.
          </p>
          <button
            onClick={() => scrollToSection('lead-capture-widget')}
            className="px-6 py-3 bg-[#FF5A00] hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-colors cursor-pointer"
          >
            Book Free Tech Consultation
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
                <p className="text-xs text-emerald-700">Connect with our web lead architect directly on WhatsApp for instant scope discussions.</p>
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

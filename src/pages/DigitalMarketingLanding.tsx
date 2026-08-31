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
  Megaphone,
  Target,
  Share2,
  BarChart,
  PieChart
} from 'lucide-react';
import { HeaderMegaMenu } from '../components/HeaderMegaMenu';
import { TopUtilityBar } from '../components/TopUtilityBar';

interface DigitalMarketingLandingProps {
  onBackToHome: () => void;
  onSelectService: (serviceName: string) => void;
  onOpenBrochure: () => void;
  onOpenAppointment: () => void;
}

// 6 Accordion FAQs for Digital Marketing Services
const FAQ_ITEMS = [
  {
    q: 'How quickly can I expect qualified leads from Digital Marketing campaigns?',
    a: 'Meta Ads and Google Ads start generating incoming calls and lead inquiries within 24 to 48 hours of campaign launch. Organic SEO and social media content growth build compounding high-intent traffic over 3 to 6 months.'
  },
  {
    q: 'Do you manage both Ad Spend budget and Creative Ad designs?',
    a: 'Yes! We handle end-to-end campaign execution including ad copy writing, high-converting banner & Reel graphic design, landing page optimization, A/B testing, and daily ROAS performance tracking.'
  },
  {
    q: 'What is the difference between Meta Ads (FB/IG) and Google Ads?',
    a: 'Google Ads capture high-intent users actively searching for your service right now. Meta Ads proactively target prospective clients based on demographics, interests, and behavior across Instagram and Facebook.'
  },
  {
    q: 'Do I get transparent access to ad performance reports?',
    a: 'Yes, 100%! All ad accounts are set up directly under your business ownership. We provide weekly performance reports showing exact cost-per-lead (CPL), conversion rates, total ad spend, and return on ad spend (ROAS).'
  },
  {
    q: 'Can you integrate leads directly with our CRM or WhatsApp?',
    a: 'Absolutely! We set up real-time lead webhooks so incoming lead entries from Facebook Lead Forms, Google Ads, or landing pages immediately trigger WhatsApp instant messages and route directly into your CRM.'
  },
  {
    q: 'Is there a minimum monthly ad budget commitment?',
    a: 'We work with flexible ad budgets starting from ₹10,000/month for local business promotions up to multi-lakh monthly scale for nationwide campaigns.'
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
    title: 'Software Development',
    desc: 'Enterprise ERPs, billing software, SaaS platforms, and operational automation software.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80',
    price: 'Custom Pricing'
  },
  {
    title: 'Meta Ads Management',
    desc: 'Laser-targeted Facebook & Instagram ad campaigns engineered for maximum ROI.',
    img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&auto=format&fit=crop&q=80',
    price: 'Custom Pricing'
  }
];

export const DigitalMarketingLanding: React.FC<DigitalMarketingLandingProps> = ({
  onBackToHome,
  onSelectService,
  onOpenBrochure,
  onOpenAppointment
}) => {
  // Navigation tabs state
  const [activeNavTab, setActiveNavTab] = useState('packages');

  // Form state
  const [formStep, setFormStep] = useState(1);
  const [selectedSubService, setSelectedSubService] = useState('Meta Ads Management');
  const [campaignGoal, setCampaignGoal] = useState('Instant Qualified Lead Generation');
  const [selectedBudget, setSelectedBudget] = useState('₹15,000 - ₹30,000 Ad Budget');
  const [selectedPackage, setSelectedPackage] = useState('Standard Growth Campaign (Custom Pricing)');
  const [applicantName, setApplicantName] = useState('');
  const [applicantMobile, setApplicantMobile] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [projectNote, setProjectNote] = useState('');
  const [captchaInput, setCaptchaInput] = useState('');
  const [captchaCode, setCaptchaCode] = useState('7K2P4');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Animated counters
  const [counterLeads, setCounterLeads] = useState(0);
  const [counterClients, setCounterClients] = useState(0);
  const [counterROAS, setCounterROAS] = useState(0);

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
      setCounterLeads(Math.floor(progress * 480000));
      setCounterClients(Math.floor(progress * 950));
      setCounterROAS(Math.floor(progress * 480));
      if (start >= steps) {
        clearInterval(timer);
        setCounterLeads(480000);
        setCounterClients(950);
        setCounterROAS(480);
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
            <span className="text-slate-900 font-bold">Digital Marketing Services</span>
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
                  <Megaphone className="w-3.5 h-3.5 text-[#FF5A00]" />
                  <span>Performance Marketing Agency</span>
                  <span className="w-1 h-1 rounded-full bg-white/60"></span>
                  <span className="text-white">Meta, Google Ads &amp; SEO</span>
                </div>

                {/* H1 Heading & Tagline */}
                <div className="space-y-2">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight antialiased">
                    Digital Marketing &amp; Lead Generation
                  </h1>
                  <div className="space-y-0.5">
                    <p className="text-xl sm:text-2xl font-black text-orange-300 antialiased">
                      Generate qualified customer leads with{' '}
                      <span className="underline decoration-[#FF5A00] decoration-2 underline-offset-4 font-black text-white">
                        Custom Pricing
                      </span>
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-blue-100 antialiased">
                      + High ROAS Meta Ads, Google PPC &amp; Local SEO Campaigns
                    </p>
                  </div>
                </div>

                {/* Definition: 2-3 Line Description */}
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                  We engineer ROI-focused digital marketing campaigns across Meta (Facebook &amp; Instagram) Ads, Google Search PPC, local SEO ranking, and social media content management. We convert cold online traffic into high-intent customer inquiries and revenue for your business.
                </p>

                {/* 6 Feature Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Target className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Meta &amp; Google Ads</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <TrendingUp className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>High ROAS Lead Generation</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Search className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Top-Rank SEO Growth</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Share2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Social Media Content</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <Award className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>100% Ad Account Access</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold text-white">
                    <BarChart className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                    <span>Weekly Performance SLA</span>
                  </div>
                </div>

                {/* Trust Counters */}
                <div className="grid grid-cols-3 gap-3 pt-3">
                  <div className="p-3 rounded-2xl bg-white/10 border border-white/20 text-center">
                    <div className="text-xl sm:text-3xl font-black text-orange-300 font-mono">
                      {counterLeads.toLocaleString()}+
                    </div>
                    <div className="text-[10px] sm:text-xs font-semibold text-slate-200 uppercase tracking-wider mt-0.5">
                      Leads Generated
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/10 border border-white/20 text-center">
                    <div className="text-xl sm:text-3xl font-black text-white font-mono">
                      {counterClients.toLocaleString()}+
                    </div>
                    <div className="text-[10px] sm:text-xs font-semibold text-slate-200 uppercase tracking-wider mt-0.5">
                      Ad Campaigns Run
                    </div>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/10 border border-white/20 text-center">
                    <div className="text-xl sm:text-3xl font-black text-orange-300 font-mono">
                      {(counterROAS / 100).toFixed(1)}x
                    </div>
                    <div className="text-[10px] sm:text-xs font-semibold text-slate-200 uppercase tracking-wider mt-0.5">
                      Avg Campaign ROAS
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
                    <span className="text-slate-300 text-[11px]">Meta Partner Rating</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 border border-white/15 text-xs text-white">
                    <Award className="w-3 h-3 text-orange-300" />
                    <span className="font-bold">100%</span>
                    <span className="text-slate-300 text-[11px]">Transparent Reporting</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/10 border border-white/15 text-xs text-white">
                    <ShieldCheck className="w-3 h-3 text-orange-400" />
                    <span className="font-bold">Google</span>
                    <span className="text-slate-300 text-[11px]">Ads Certified</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Multi-Step Lead Capture Form */}
              <div id="lead-capture-widget" className="lg:col-span-5 scroll-mt-24">
                <div className="bg-white rounded-2xl shadow-2xl border-2 border-orange-400/80 p-5 sm:p-6 text-slate-900 relative">
                  {/* Urgency Badge */}
                  <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-[#FF5A00] text-[#0B3D91] text-xs font-black uppercase tracking-wider shadow-md flex items-center gap-1">
                    <Flame className="w-3 h-3 fill-[#0B3D91]" />
                    <span>Free Growth Audit</span>
                  </div>

                  {formSubmitted ? (
                    <div className="text-center py-8 space-y-4 animate-in fade-in">
                      <div className="w-16 h-16 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900">Application Received!</h3>
                      <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
                        Thank you <span className="font-bold">{applicantName}</span>. Our lead digital media strategist has been assigned to your marketing audit docket. We will call you at <span className="font-bold">{applicantMobile}</span> within 15 minutes.
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
                              Digital Growth Consultation
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
                            Custom Retainer Quote
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
                        {/* STEP 1: Select Sub-Service & Campaign Goal */}
                        {formStep === 1 && (
                          <div className="space-y-3 animate-in fade-in">
                            <div>
                              <label className="block text-xs font-bold text-slate-700 mb-1">
                                Select Digital Service Category *
                              </label>
                              <select
                                value={selectedSubService}
                                onChange={(e) => setSelectedSubService(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                              >
                                <option value="Meta Ads Management">Meta Ads Management (FB &amp; IG)</option>
                                <option value="Google Ads Management">Google Ads Management (Search PPC &amp; Display)</option>
                                <option value="Social Media Marketing">Social Media Marketing &amp; Content Management</option>
                                <option value="Lead Generation">Targeted B2B / B2C Lead Generation</option>
                                <option value="SEO Services">Search Engine Optimization (SEO &amp; GMB)</option>
                                <option value="Social Media Management">Social Media Brand Management</option>
                              </select>
                            </div>

                            <div>
                              <label className="block text-xs font-bold text-slate-700 mb-1">
                                Primary Campaign Objective *
                              </label>
                              <select
                                value={campaignGoal}
                                onChange={(e) => setCampaignGoal(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                              >
                                <option value="Instant Qualified Lead Generation">Instant Qualified Customer Leads</option>
                                <option value="High-ROAS E-commerce Sales">E-commerce Sales &amp; Revenue Growth</option>
                                <option value="Brand Awareness & Organic Reach">Brand Awareness &amp; Social Followers</option>
                                <option value="Local Business Footfall">Local Store Traffic &amp; Phone Inquiries</option>
                              </select>
                            </div>

                            <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-100 text-xs text-slate-600 space-y-1">
                              <div className="flex items-center gap-1.5 font-bold text-[#0B3D91]">
                                <ShieldCheck className="w-4 h-4 text-[#FF5A00]" />
                                <span>Why choose our digital marketing agency?</span>
                              </div>
                              <p className="text-[11px]">
                                100% transparent live dashboard access, high CPL efficiency, custom ad graphic creatives, and real-time WhatsApp lead routing.
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
                                placeholder="e.g. Priyanshu Kapoor"
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
                                Business Website / Page URL (Optional)
                              </label>
                              <input
                                type="url"
                                value={projectNote}
                                onChange={(e) => setProjectNote(e.target.value)}
                                placeholder="https://yourcompany.com or IG handle"
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
                                  Monthly Ad Spend *
                                </label>
                                <select
                                  value={selectedBudget}
                                  onChange={(e) => setSelectedBudget(e.target.value)}
                                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs font-medium text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                                >
                                  <option value="₹15,000 - ₹30,000 Ad Budget">₹15,000 - ₹30,000 / mo</option>
                                  <option value="₹30,000 - ₹75,000 Ad Budget">₹30,000 - ₹75,000 / mo</option>
                                  <option value="₹75,000 - ₹2,00,000 Ad Budget">₹75,000 - ₹2,00,000 / mo</option>
                                  <option value="₹2,00,000+ Scale Budget">₹2,00,000+ Scale / mo</option>
                                </select>
                              </div>

                              <div>
                                <label className="block text-xs font-bold text-slate-700 mb-1">
                                  Select Retainer *
                                </label>
                                <select
                                  value={selectedPackage}
                                  onChange={(e) => setSelectedPackage(e.target.value)}
                                  className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs font-bold text-slate-900 focus:outline-none focus:border-[#0B3D91]"
                                >
                                  <option value="Basic Starter Campaign (Custom Pricing)">Basic Starter Campaign</option>
                                  <option value="Standard Growth Campaign (Custom Pricing)">Standard Growth Campaign</option>
                                  <option value="Enterprise Scale Marketing (Custom Pricing)">Enterprise Scale Marketing</option>
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
                                  <span>Request Free Marketing Strategy</span>
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
                Performance Retainer Tiers
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0D47A1] mt-2">
                Digital Marketing Packages
              </h2>
              <p className="text-sm text-slate-500 mt-2 mx-auto max-w-2xl text-center">
                Transparent agency management retainers with zero hidden margins. You retain 100% control over your ad accounts.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* TIER 1: BASIC */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="px-3 py-1 rounded bg-slate-100 text-slate-700 text-[10px] font-black uppercase tracking-wide inline-block mb-3">
                    LOCAL LEAD CAMPAIGN
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">Basic Marketing Package</h3>
                  <p className="text-xs text-slate-500 mt-1 mb-4">
                    Ideal for small businesses targeting local customer inquiries via Meta Lead Ads or Google Local Search.
                  </p>
                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <div className="text-3xl font-extrabold text-[#0D47A1]">Custom Pricing</div>
                    <span className="text-xs text-slate-400 font-medium">Monthly agency retainer</span>
                  </div>

                  <ul className="space-y-3 mb-8 text-xs text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Single Channel (Meta or Google Ads)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Up to 4 Custom Image Ad Creatives</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Audience Demographics &amp; Interest Targeting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>WhatsApp Instant Lead Notification Setup</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Bi-Weekly Performance Report</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => {
                    setSelectedPackage('Basic Starter Campaign (Custom Pricing)');
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
                    OMNICHANNEL LEAD ENGINE
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">Standard Package</h3>
                  <p className="text-xs text-slate-500 mt-1 mb-4">
                    Full multi-channel campaign covering Meta Ads, Google PPC, Reel videos, and high-converting landing pages.
                  </p>
                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <div className="text-3xl font-extrabold text-[#0D47A1]">Custom Pricing</div>
                    <span className="text-xs text-slate-400 font-medium">Monthly agency retainer</span>
                  </div>

                  <ul className="space-y-3 mb-8 text-xs text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                      <span>Dual Platform (Meta Ads + Google Search PPC)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                      <span>8 Banners + 2 Short Video Reel Ad Creatives</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                      <span>Custom Landing Page Design &amp; Copy</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                      <span>A/B Copy &amp; Audience Split Testing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                      <span>Meta Pixel Retargeting &amp; Lookalikes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                      <span>Weekly Live Performance SLA Review</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => {
                    setSelectedPackage('Standard Growth Campaign (Custom Pricing)');
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
                    FULL DIGITAL MARKETING SUITE
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">Enterprise Package</h3>
                  <p className="text-xs text-slate-500 mt-1 mb-4">
                    High-volume nationwide digital marketing encompassing Meta Ads, Google Ads, SEO, and Social Media Management.
                  </p>
                  <div className="mb-6 pb-6 border-b border-slate-100">
                    <div className="text-3xl font-extrabold text-[#0D47A1]">Custom Pricing</div>
                    <span className="text-xs text-slate-400 font-medium">Monthly agency retainer</span>
                  </div>

                  <ul className="space-y-3 mb-8 text-xs text-slate-700 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Complete Omnichannel Ad Management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Technical SEO &amp; Monthly Keyword Ranking</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>12 Monthly Social Media Posts + 4 Reels</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Real-Time Webhook Integration with CRM</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>Dedicated Growth Strategist Account Manager</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => {
                    setSelectedPackage('Enterprise Scale Marketing (Custom Pricing)');
                    scrollToSection('lead-capture-widget');
                  }}
                  className="w-full py-3 rounded-xl bg-[#0B3D91] hover:bg-blue-900 text-white font-bold text-xs shadow-md transition-colors cursor-pointer"
                >
                  Request Enterprise Proposal
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
                What is Performance Digital Marketing?
              </h2>
            </div>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Performance Digital Marketing is the data-driven execution of paid advertising (Meta &amp; Google Ads), organic search engine optimization (SEO), and social media branding engineered to drive direct customer inquiries, phone calls, and e-commerce transactions for your business.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Target Business Audience:</strong>
                  Ideal for service providers, B2B companies, healthcare clinics, educational institutes, real estate firms, and e-commerce brands wanting predictable lead flow.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Laser-Targeted Audience Reach:</strong>
                  Target prospects based on precise geographical location, income demographics, personal interests, and high-intent Google search keywords.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Predictable Cost-Per-Lead (CPL):</strong>
                  Monitor exact daily ad spend against total leads received, enabling controlled scaling of your marketing budget with clear ROI.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">Compounding Organic SEO Growth:</strong>
                  Rank your website on Google search first page for core business keywords to generate free, ongoing organic traffic over time.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
                <div className="text-sm text-slate-700">
                  <strong className="text-slate-900 font-bold block mb-0.5">100% Ad Account Ownership:</strong>
                  All campaigns run directly inside your company's official Meta Business Manager and Google Ads manager accounts.
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
                Data-Driven Methodology
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                How We Execute Digital Campaigns
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  title: 'Audience & Competitor Audit',
                  desc: 'We research your target customer profiles, high-intent keywords, and top competitor ad creatives.'
                },
                {
                  step: '02',
                  title: 'Creative Ad Design & Copy',
                  desc: 'Designing eye-catching banner ad creatives, Reel video hooks, and high-converting copy.'
                },
                {
                  step: '03',
                  title: 'Pixel Setup & Campaign Launch',
                  desc: 'Setting up Meta Pixel, Google Conversion Tracking, and launching targeted ad sets.'
                },
                {
                  step: '04',
                  title: 'Daily Optimization & SLA Reports',
                  desc: 'Continuously optimizing cost-per-lead, purging low-performing ads, and sending weekly performance reports.'
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
                6 Key Advantages of Professional Marketing
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  num: '01',
                  title: 'Instant Lead Inquiries',
                  desc: 'Receive qualified prospect inquiries within 24-48 hours of activating Meta or Google Ads.'
                },
                {
                  num: '02',
                  title: 'Multi-Channel Audience Retargeting',
                  desc: 'Show follow-up ads to website visitors across Instagram, Facebook, and YouTube until they convert.'
                },
                {
                  num: '03',
                  title: 'Custom Ad Graphic Creatives',
                  desc: 'Our in-house designers create professionally branded banners and Reel video ads for your business.'
                },
                {
                  num: '04',
                  title: 'Top Google Keyword Rankings',
                  desc: 'Dominating organic search results and Google Maps Pack for local customers.'
                },
                {
                  num: '05',
                  title: 'WhatsApp Lead Auto-Routing',
                  desc: 'Instantly notify your sales team on WhatsApp the moment a new lead form is submitted.'
                },
                {
                  num: '06',
                  title: 'Complete Account Transparency',
                  desc: 'Zero markups on media spend — pay ad networks directly while keeping 100% account ownership.'
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
                Digital Marketing Sub-Services
              </h2>
              <p className="text-sm text-slate-500 mt-2 mx-auto max-w-2xl text-center">
                Explore our specialized performance marketing solutions designed for lead generation, SEO rankings, and social brand growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 1. Meta Ads Management */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 text-[#0B3D91] flex items-center justify-center">
                    <Megaphone className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Meta Ads Management (FB &amp; IG)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Laser-targeted Facebook and Instagram ad campaigns engineered for instant lead generation, lookalike scaling, and high ROAS.
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-500">
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> Instant Lead Forms &amp; WhatsApp Ads</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> Lookalike Audience Scaling</li>
                  </ul>
                </div>
                <button
                  onClick={() => onSelectService('Meta Ads Management')}
                  className="w-full py-2 bg-slate-100 hover:bg-[#0B3D91] hover:text-white text-slate-800 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  View Details
                </button>
              </div>

              {/* 2. Google Ads Management */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 text-[#FF5A00] flex items-center justify-center">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Google Ads Management (Search PPC)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    High-intent Google Search PPC, Display Network banners, YouTube Video Ads, and Shopping campaigns optimized for conversions.
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-500">
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> High-Intent Keyword Bidding</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> Negative Keyword Waste Filtering</li>
                  </ul>
                </div>
                <button
                  onClick={() => onSelectService('Google Ads Management')}
                  className="w-full py-2 bg-slate-100 hover:bg-[#0B3D91] hover:text-white text-slate-800 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  View Details
                </button>
              </div>

              {/* 3. Social Media Marketing */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 text-purple-600 flex items-center justify-center">
                    <Share2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Social Media Marketing</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Strategic brand positioning across Instagram, LinkedIn, and Facebook to grow an engaged follower base and foster brand trust.
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-500">
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> Brand Positioning Strategy</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> Influencer Collaboration Execution</li>
                  </ul>
                </div>
                <button
                  onClick={() => onSelectService('Social Media Marketing')}
                  className="w-full py-2 bg-slate-100 hover:bg-[#0B3D91] hover:text-white text-slate-800 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  View Details
                </button>
              </div>

              {/* 4. Lead Generation */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Targeted Lead Generation</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Custom high-converting landing pages, sales funnel optimization, and verified B2B/B2C prospect lead capture workflows.
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-500">
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> Dedicated High-Converting Landing Page</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> Instant Lead Verification &amp; CRM Sync</li>
                  </ul>
                </div>
                <button
                  onClick={() => onSelectService('Lead Generation')}
                  className="w-full py-2 bg-slate-100 hover:bg-[#0B3D91] hover:text-white text-slate-800 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  View Details
                </button>
              </div>

              {/* 5. SEO Services */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center">
                    <Search className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">SEO Services &amp; Local GMB Ranking</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    On-page technical SEO, keyword optimization, high-authority backlink building, and Google My Business local map pack domination.
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-500">
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> Technical On-Page SEO Audit</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> Google My Business Map Pack Top 3</li>
                  </ul>
                </div>
                <button
                  onClick={() => onSelectService('SEO Services')}
                  className="w-full py-2 bg-slate-100 hover:bg-[#0B3D91] hover:text-white text-slate-800 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                >
                  View Details
                </button>
              </div>

              {/* 6. Social Media Management */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-pink-50 border border-pink-100 text-pink-600 flex items-center justify-center">
                    <BarChart className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">Social Media Management</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    End-to-end content calendar design, Instagram Reel video editing, carousel post graphic creation, and daily community management.
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-500">
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> Monthly Graphic &amp; Reel Content Calendar</li>
                    <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#FF5A00]" /> Community Engagement &amp; Comment Replies</li>
                  </ul>
                </div>
                <button
                  onClick={() => onSelectService('Social Media Management')}
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
                What You Need to Provide Before Launching Campaigns
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Ad Account Access', desc: 'Admin or partner access to your Meta Business Manager and Google Ads account.' },
                { title: 'Target Customer Demographics', desc: 'Information on target locations, age groups, income brackets, and core customer needs.' },
                { title: 'Brand Assets & Media Files', desc: 'High-resolution logo files, product images, raw video clips, and brand style guidelines.' },
                { title: 'Website / Landing Page Access', desc: 'WordPress or React admin credentials to install Meta Pixel and Google Conversion tags.' },
                { title: 'Monthly Ad Spend Allocation', desc: 'Dedicated credit or debit card attached directly to your Meta/Google billing profile.' }
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
                5-Step Digital Campaign Execution Roadmap
              </h2>
            </div>

            <div className="space-y-4">
              {[
                { step: 'Step 1', title: 'Target Market & Competitor Audit', desc: 'We analyze your target audience segments, high-converting keywords, and competitor ad creatives.' },
                { step: 'Step 2', title: 'Creative Graphic & Video Production', desc: 'Designing high-converting ad banners, video Hooks, and copy tailored for Meta & Google.' },
                { step: 'Step 3', title: 'Tracking Pixel & Landing Page Setup', desc: 'Installing Meta Pixel, Google Analytics 4 tags, and publishing lead-capture landing pages.' },
                { step: 'Step 4', title: 'Campaign Launch & A/B Split Testing', desc: 'Activating ad sets across multiple demographics to identify the lowest cost-per-lead winners.' },
                { step: 'Step 5', title: 'Daily Optimization & SLA Reporting', desc: 'Refining audience targeting daily and sending weekly performance reporting dashboards.' }
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
                Marketing Tech Stack
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Platforms &amp; Tools We Leverage
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: 'Meta Business Suite', desc: 'FB & IG Ads Manager' },
                { name: 'Google Ads PPC', desc: 'Search & YouTube Ads' },
                { name: 'Google Analytics 4', desc: 'Event Conversion Tracking' },
                { name: 'Semrush / Ahrefs', desc: 'SEO Keyword Intelligence' },
                { name: 'WhatsApp API', desc: 'Instant Lead Routing' },
                { name: 'Canva / Adobe', desc: 'Ad Graphic Creatives' }
              ].map((tech, idx) => (
                <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-center space-y-1">
                  <Megaphone className="w-6 h-6 text-[#0B3D91] mx-auto" />
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
                Continuous Commitment
              </span>
              <h3 className="text-xl sm:text-2xl font-bold">Ongoing Campaign Optimization &amp; SLA Commitment</h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                We monitor your ad campaigns daily to prevent ad fatigue, purge underperforming target segments, refresh ad creative graphics, and maintain optimal Cost-Per-Lead (CPL) efficiency throughout your retainer contract.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs font-semibold text-orange-200">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#FF5A00]" /> Daily Budget &amp; Bid Optimization</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#FF5A00]" /> Weekly Cost-Per-Lead (CPL) Audits</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#FF5A00]" /> Dedicated Performance Strategist</span>
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
                Why Hire Our Managed Digital Agency?
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse border border-slate-200">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 font-bold">
                    <th className="p-3 border border-slate-200">Comparison Parameters</th>
                    <th className="p-3 border border-slate-200 text-[#0B3D91] bg-blue-50">Our Marketing Studio</th>
                    <th className="p-3 border border-slate-200">In-House Marketer</th>
                    <th className="p-3 border border-slate-200">Freelancers</th>
                    <th className="p-3 border border-slate-200">DIY Ad Boosting</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr>
                    <td className="p-3 border border-slate-200 font-bold">Cost-Per-Lead Efficiency</td>
                    <td className="p-3 border border-slate-200 font-bold text-[#0B3D91] bg-blue-50/50">Optimized via A/B Testing</td>
                    <td className="p-3 border border-slate-200">Fixed Monthly Salary Cost</td>
                    <td className="p-3 border border-slate-200">Unpredictable Results</td>
                    <td className="p-3 border border-slate-200">Wasted Ad Spend</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 font-bold">Ad Creative Production</td>
                    <td className="p-3 border border-slate-200 font-bold text-[#0B3D91] bg-blue-50/50">In-House Graphic &amp; Video Designers</td>
                    <td className="p-3 border border-slate-200">Limited Design Skills</td>
                    <td className="p-3 border border-slate-200">Basic Templates</td>
                    <td className="p-3 border border-slate-200">No Creative Design</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 font-bold">Account Transparency</td>
                    <td className="p-3 border border-slate-200 font-bold text-[#0B3D91] bg-blue-50/50">100% Direct Account Access</td>
                    <td className="p-3 border border-slate-200">Internal Access</td>
                    <td className="p-3 border border-slate-200">Hidden Markups</td>
                    <td className="p-3 border border-slate-200">Direct Billing</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 font-bold">Lead Funnel Integration</td>
                    <td className="p-3 border border-slate-200 font-bold text-[#0B3D91] bg-blue-50/50">Instant WhatsApp &amp; CRM Sync</td>
                    <td className="p-3 border border-slate-200">Manual Export</td>
                    <td className="p-3 border border-slate-200">No Technical Integration</td>
                    <td className="p-3 border border-slate-200">No Webhooks</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-slate-200 font-bold">Reporting SLA</td>
                    <td className="p-3 border border-slate-200 font-bold text-[#0B3D91] bg-blue-50/50">Weekly Dashboard &amp; Review</td>
                    <td className="p-3 border border-slate-200">Monthly Internal Review</td>
                    <td className="p-3 border border-slate-200">Irregular Reporting</td>
                    <td className="p-3 border border-slate-200">No Analysis</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 15. PRICING & INVESTMENT EXPLANATION */}
        <section className="py-14 bg-slate-50 border-b border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Understanding Digital Marketing Investment</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Digital marketing retainers cover campaign strategy, creative graphic &amp; video ad design, copy writing, audience targeting, landing page setup, and daily optimization. Media ad spend budgets are paid directly to Meta or Google with zero agency markups.
            </p>
          </div>
        </section>

        {/* 16. TIMELINE & DELIVERABLES */}
        <section className="py-14 bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-slate-900">Campaign Setup Timeline &amp; Core Deliverables</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#FF5A00]" /> Setup Timeline
                </h4>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li>• <strong>Audit &amp; Strategy Scoping:</strong> 24 Hours</li>
                  <li>• <strong>Ad Creative &amp; Copy Design:</strong> 48 Hours</li>
                  <li>• <strong>Pixel Setup &amp; Live Launch:</strong> 72 Hours</li>
                </ul>
              </div>
              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0B3D91]" /> Handover &amp; Deliverables
                </h4>
                <ul className="space-y-2 text-xs text-slate-600">
                  <li>• 100% Owned Ad Accounts &amp; Pixel Setup</li>
                  <li>• High-Resolution Graphic &amp; Video Ad Assets</li>
                  <li>• Weekly CPL &amp; ROAS Performance Dashboards</li>
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
                Why Partner with Our Digital Marketing Agency
              </h2>
            </div>

            <div className="space-y-3">
              {[
                { title: 'Certified Performance Media Buyers', desc: 'Our strategists possess 6+ years of experience managing high-scale Meta Ads and Google PPC budgets.' },
                { title: 'In-House Creative Studio', desc: 'Custom banner graphics, Reel video editing, and ad copywriting tailored for higher click-through rates (CTR).' },
                { title: 'Zero Hidden Ad Markups', desc: 'Complete billing transparency — your media spend goes directly to Meta/Google while we manage the agency retainer.' },
                { title: 'Real-Time WhatsApp Lead Routing', desc: 'Ensure zero lost leads by delivering incoming ad form responses instantly to your sales reps.' },
                { title: 'Dedicated Growth Account Lead', desc: 'Direct access to your assigned performance marketing manager via phone and WhatsApp.' }
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
                Engineered for High ROAS &amp; Lead Growth
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: ShieldCheck, title: '100% Account Ownership', desc: 'Your ad accounts, pixels, and data remain strictly in your control.' },
                { icon: Zap, title: 'Rapid 48-Hour Setup', desc: 'Fast campaign activation to start receiving leads quickly.' },
                { icon: Award, title: 'Certified Meta & Google Agency', desc: 'Executing proven media buying strategies and compliance guidelines.' },
                { icon: Clock, title: 'Daily Budget Monitoring', desc: 'Proactive bid optimization to lower Cost-Per-Lead (CPL).' },
                { icon: Users, title: 'Dedicated Growth Lead', desc: 'Direct phone & WhatsApp contact with your campaign manager.' },
                { icon: Lock, title: 'Transparent SLA Reporting', desc: 'Weekly clear breakdowns of ad spend, lead counts, and ROAS.' }
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
          <h2 className="text-2xl sm:text-3xl font-extrabold">Ready to Scale Your Customer Lead Flow?</h2>
          <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto">
            Schedule a free consultation call with our lead digital strategist to review your target market and receive a custom campaign growth proposal.
          </p>
          <button
            onClick={() => scrollToSection('lead-capture-widget')}
            className="px-6 py-3 bg-[#FF5A00] hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-colors cursor-pointer"
          >
            Book Free Marketing Growth Call
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
                <p className="text-xs text-emerald-700">Connect with our lead digital marketing strategist directly on WhatsApp for instant scope discussions.</p>
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

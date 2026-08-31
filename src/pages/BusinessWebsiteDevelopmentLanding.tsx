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
  Globe,
  Code2,
  Monitor,
  Layout,
  Rocket,
  Server,
  Headphones
} from 'lucide-react';
import {
  INDIAN_STATES_AND_UTS,
  BUSINESS_TYPES,
  BUSINESS_ACTIVITIES,
  COMPANY_DETAILS
} from '../data/servicesData';
import { HeaderMegaMenu } from '../components/HeaderMegaMenu';
import { TopUtilityBar } from '../components/TopUtilityBar';

interface BusinessWebsiteDevelopmentLandingProps {
  onBackToHome: () => void;
  onSelectService: (serviceName: string) => void;
  onOpenBrochure: () => void;
  onOpenAppointment: () => void;
}

const FAQ_ITEMS = [
  {
    q: 'How long does it take to develop a business website?',
    a: 'Standard corporate business websites are typically designed, developed, and delivered within 7 to 10 working days after content and brand assets are received.'
  },
  {
    q: 'Will my website be mobile-friendly and responsive across devices?',
    a: 'Yes, 100%. All our websites are engineered with mobile-first responsive architecture ensuring fluid display across smartphones, tablets, laptops, and ultra-wide desktop screens.'
  },
  {
    q: 'What is included in the ₹9,999 Business Website Development package?',
    a: 'The package includes up to 5-10 custom pages, mobile-first design, speed optimization, contact lead forms, Google Maps & WhatsApp chat integration, SSL certificate setup, and 1-year hosting guidance.'
  },
  {
    q: 'Can I edit and update content on my website after launch?',
    a: 'Yes, we provide an intuitive admin content management system (CMS) along with video walkthrough training so your team can easily update images, text, and blogs without coding.'
  },
  {
    q: 'Will my business website be SEO-optimized for Google search?',
    a: 'Yes, every site we build includes fundamental Technical SEO including meta tags, clean HTML5 markup, XML sitemaps, fast loading speed, and schema structured data.'
  },
  {
    q: 'Do you provide post-launch maintenance and technical support?',
    a: 'Yes, we offer 12 months of free technical support for bug fixes and server uptime, alongside optional monthly maintenance retainers for continuous content updates.'
  }
];

const PACKAGES = [
  {
    name: 'Starter Business Site',
    price: '₹9,999',
    period: 'one-time',
    badge: 'Popular for Small Businesses',
    desc: 'Perfect for startups, consultants, and SMBs establishing an online corporate presence.',
    features: [
      '5 Custom Designed Pages',
      'Mobile-First Responsive Layout',
      'Contact Lead Form & WhatsApp Chat',
      'Basic On-Page SEO Setup',
      'SSL Security Certificate',
      'Fast 7-Day Project Delivery'
    ],
    highlight: false
  },
  {
    name: 'Growth Corporate Site',
    price: '₹18,999',
    period: 'one-time',
    badge: 'Recommended for Enterprises',
    desc: 'Comprehensive web architecture with blog portal, dynamic forms, and CRM integration.',
    features: [
      'Up to 15 Custom Pages',
      'Interactive UI Prototyping in Figma',
      'Blog / News CMS Portal',
      'CRM & Lead Webhook Integration',
      'Speed Acceleration (<1.5s Load)',
      'Google Analytics 4 & Tag Manager',
      'Dedicated Account Manager'
    ],
    highlight: true
  },
  {
    name: 'Custom Web Application',
    price: 'Custom Quote',
    period: 'milestone based',
    badge: 'Bespoke Engineering',
    desc: 'Complex web platforms with custom databases, user portals, and REST API integrations.',
    features: [
      'React / Next.js + Node.js Stack',
      'Custom Database Architecture',
      'User Authentication & Role Control',
      'Payment Gateway Integration',
      'Third-Party REST API Connectors',
      'AWS / GCP Cloud Server Deployment',
      'Dedicated Technical SLA Support'
    ],
    highlight: false
  }
];

const PROCESS_STEPS = [
  {
    step: 1,
    title: 'Requirement Discovery & Wireframing',
    desc: 'We analyze your business goals, target audience, and key offerings to create visual sitemaps and wireframe layouts.'
  },
  {
    step: 2,
    title: 'UI/UX Design & Prototyping',
    desc: 'Our design team crafts modern, brand-aligned Figma UI prototypes focusing on user conversion and clean typography.'
  },
  {
    step: 3,
    title: 'Full-Stack Web Development',
    desc: 'We write clean, modular, high-performance code adhering to W3C standards and mobile responsiveness.'
  },
  {
    step: 4,
    title: 'Speed, SEO & QA Audit',
    desc: 'Rigorous cross-browser testing, mobile device checks, Google PageSpeed audits, and lead form security verification.'
  },
  {
    step: 5,
    title: 'Cloud Launch & Admin Training',
    desc: 'Domain mapping, SSL deployment, live cloud launch, and hands-on admin panel walkthrough training for your team.'
  }
];

const RELATED_SERVICES = [
  {
    title: 'E-commerce Website Development',
    desc: 'Full online store with payment gateway, product catalog, and order tracking.',
    img: 'https://images.unsplash.com/photo-1556742049-0a670f4a4591?w=600&auto=format&fit=crop&q=80',
    price: 'Starts @ ₹19,999'
  },
  {
    title: 'Landing Page Development',
    desc: 'High-converting single-page landing pages optimized for Meta & Google Ad campaigns.',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
    price: 'Starts @ ₹4,999'
  },
  {
    title: 'Android App Development',
    desc: 'High-performance Kotlin & Flutter Android apps published on Google Play Store.',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=80',
    price: 'Starts @ ₹24,999'
  },
  {
    title: 'Custom CRM Development',
    desc: 'Bespoke sales pipeline and lead management software tailored to your workflow.',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&auto=format&fit=crop&q=80',
    price: 'Starts @ ₹29,999'
  },
  {
    title: 'SEO Services',
    desc: 'Rank on Google top search results with technical SEO, content, and backlinks.',
    img: 'https://images.unsplash.com/photo-1571721795195-a2ca2d3370a9?w=600&auto=format&fit=crop&q=80',
    price: 'Starts @ ₹9,999/mo'
  },
  {
    title: 'Google Ads Management',
    desc: 'Targeted search and display ad campaigns for instant inbound customer leads.',
    img: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=600&auto=format&fit=crop&q=80',
    price: 'Starts @ ₹8,999/mo'
  }
];

export const BusinessWebsiteDevelopmentLanding: React.FC<BusinessWebsiteDevelopmentLandingProps> = ({
  onBackToHome,
  onSelectService,
  onOpenBrochure,
  onOpenAppointment
}) => {
  const [activeNavTab, setActiveNavTab] = useState('overview');
  const [formStep, setFormStep] = useState(1);
  const [selectedState, setSelectedState] = useState('Uttar Pradesh');
  const [businessType, setBusinessType] = useState('Private Limited Company');
  const [selectedPackage, setSelectedPackage] = useState('Starter Business Site (₹9,999)');
  const [applicantName, setApplicantName] = useState('');
  const [applicantMobile, setApplicantMobile] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [projectRequirements, setProjectRequirements] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Animated counters
  const [counterClients, setCounterClients] = useState(0);
  const [counterWebsites, setCounterWebsites] = useState(0);
  const [counterExperts, setCounterExperts] = useState(0);

  useEffect(() => {
    let start = 0;
    const steps = 40;
    const intervalTime = 30;
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
      if (!applicantName || !applicantMobile) {
        alert('Please enter your name and mobile number.');
        return;
      }
      setFormStep(2);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <TopUtilityBar />
      <HeaderMegaMenu
        onSelectService={(serviceName) => {
          if (serviceName.toLowerCase().includes('business website')) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          } else {
            onSelectService(serviceName);
          }
        }}
        onOpenBrochure={onOpenBrochure}
        onOpenAppointment={onOpenAppointment}
      />

      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200 py-3 px-4 sm:px-6 lg:px-8 text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-slate-600 flex-wrap">
          <button
            onClick={onBackToHome}
            className="hover:text-[#0B3D91] transition-colors cursor-pointer"
          >
            Home
          </button>
          <span className="text-slate-400">&gt;</span>
          <span className="text-[#0B3D91] font-semibold">IT & Digital Services</span>
          <span className="text-slate-400">&gt;</span>
          <span className="text-slate-900 font-bold">Business Website Development</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0B3D91] via-blue-900 to-slate-900 text-white py-12 lg:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          {/* Left Hero Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full border border-orange-500/30 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-[#FF5A00]" />
              <span>High Performance Tech & Custom Web Design</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Business Website <span className="text-[#FF5A00]">Development</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
              Get a modern, fast, mobile-responsive corporate website engineered to command brand authority, showcase products, and generate qualified inbound business leads.
            </p>

            {/* Key Service Highlights Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {['Starts @ ₹9,999', 'Mobile First Design', 'SEO Optimized', 'SSL & Cloud Hosting', 'Fast 7-Day Delivery'].map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-lg text-xs font-medium text-slate-200 border border-white/10 flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5A00]" />
                  <span>{tag}</span>
                </span>
              ))}
            </div>

            {/* Trust Metrics Row */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white">{counterWebsites.toLocaleString()}+</p>
                <p className="text-xs text-slate-300">Websites Launched</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white">{counterClients.toLocaleString()}+</p>
                <p className="text-xs text-slate-300">Happy Business Clients</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-white">99.8%</p>
                <p className="text-xs text-slate-300">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Consultation Lead Form */}
          <div className="lg:col-span-5 bg-white text-slate-900 rounded-2xl shadow-2xl p-6 border border-slate-100">
            <div className="text-center mb-5">
              <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#FF5A00] bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                Free Tech Consultation
              </span>
              <h3 className="text-xl font-bold text-[#0B3D91] mt-2">Get Custom Web Quote</h3>
              <p className="text-xs text-slate-500">Speak with our senior solution architect today</p>
            </div>

            {formSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-emerald-900">Inquiry Submitted Successfully!</h4>
                <p className="text-xs text-emerald-700">
                  Thank you <strong>{applicantName}</strong>. Our senior web consultant will reach out on <strong>{applicantMobile}</strong> within 15 minutes.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormStep(1);
                  }}
                  className="text-xs text-[#0B3D91] font-semibold underline"
                >
                  Submit Another Project Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                {formStep === 1 ? (
                  <>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={applicantName}
                        onChange={(e) => setApplicantName(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-[#0B3D91] focus:bg-white outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={applicantMobile}
                        onChange={(e) => setApplicantMobile(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-[#0B3D91] focus:bg-white outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        placeholder="rahul@company.com"
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-[#0B3D91] focus:bg-white outline-none"
                      />
                    </div>

                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="w-full py-2.5 bg-[#FF5A00] hover:bg-orange-600 text-white font-bold rounded-lg text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md"
                    >
                      <span>Proceed to Scope Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Select Package</label>
                      <select
                        value={selectedPackage}
                        onChange={(e) => setSelectedPackage(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-[#0B3D91] outline-none"
                      >
                        {PACKAGES.map((pkg, idx) => (
                          <option key={idx} value={`${pkg.name} (${pkg.price})`}>
                            {pkg.name} - {pkg.price}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">State / Location</label>
                      <select
                        value={selectedState}
                        onChange={(e) => setSelectedState(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-[#0B3D91] outline-none"
                      >
                        {INDIAN_STATES_AND_UTS.map((st, idx) => (
                          <option key={idx} value={st}>{st}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Brief Project Note</label>
                      <textarea
                        rows={2}
                        placeholder="Describe your business or features needed..."
                        value={projectRequirements}
                        onChange={(e) => setProjectRequirements(e.target.value)}
                        className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs focus:ring-2 focus:ring-[#0B3D91] outline-none"
                      ></textarea>
                    </div>

                    <div className="flex gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => setFormStep(1)}
                        className="w-1/3 py-2.5 bg-slate-200 text-slate-700 font-bold rounded-lg text-xs"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-2/3 py-2.5 bg-[#0B3D91] hover:bg-blue-900 text-white font-bold rounded-lg text-xs uppercase flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {isSubmitting ? 'Submitting...' : 'Request Proposal'}
                      </button>
                    </div>
                  </>
                )}
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Overview & Key Characteristics */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 lg:p-8 shadow-sm space-y-6">
          <div className="space-y-2 border-b border-slate-100 pb-4">
            <span className="text-xs font-extrabold uppercase text-[#FF5A00] tracking-wider">
              Service Overview
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#0B3D91]">
              Why Your Business Needs a Professional Corporate Website
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-slate-600 text-sm leading-relaxed">
            <p>
              In today's digital economy, your business website serves as the primary touchpoint for potential clients, partners, and investors. A poorly designed or slow website hurts brand trust and loses valuable leads to competitors.
            </p>
            <p>
              Our Business Website Development team crafts bespoke, high-converting digital experiences tailored around your core value proposition, complete with speed optimization, mobile responsiveness, and automated lead capture pipelines.
            </p>
          </div>

          {/* Key Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <Monitor className="w-6 h-6 text-[#0B3D91]" />
              <h4 className="font-bold text-slate-900 text-sm">Responsive Across Devices</h4>
              <p className="text-xs text-slate-500">Fluid layouts engineered for iPhones, Android, iPad, and desktop monitors.</p>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <Zap className="w-6 h-6 text-[#FF5A00]" />
              <h4 className="font-bold text-slate-900 text-sm">Sub-Second Load Speed</h4>
              <p className="text-xs text-slate-500">Optimized asset delivery, CDN acceleration, and clean code for high Google PageSpeed scores.</p>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <Search className="w-6 h-6 text-[#0B3D91]" />
              <h4 className="font-bold text-slate-900 text-sm">Google SEO Compliant</h4>
              <p className="text-xs text-slate-500">Structured Schema markup, XML sitemaps, and clean URL routing for search engines.</p>
            </div>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <ShieldCheck className="w-6 h-6 text-emerald-600" />
              <h4 className="font-bold text-slate-900 text-sm">SSL & Enterprise Security</h4>
              <p className="text-xs text-slate-500">Bank-grade HTTPS encryption, spam protection on forms, and continuous uptime monitoring.</p>
            </div>
          </div>
        </section>

        {/* Pricing Packages Comparison */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-extrabold uppercase text-[#FF5A00] tracking-wider">
              Transparent Pricing
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#0B3D91]">
              Select Your Business Web Development Package
            </h2>
            <p className="text-xs text-slate-500 max-w-xl mx-auto">
              No hidden fees. Every package comes with complete source code handoff and 12-month hosting assistance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {PACKAGES.map((pkg, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-2xl p-6 border flex flex-col justify-between relative ${
                  pkg.highlight
                    ? 'border-2 border-[#FF5A00] shadow-xl ring-2 ring-orange-500/10'
                    : 'border-slate-200 shadow-sm'
                }`}
              >
                {pkg.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF5A00] text-white text-[10px] uppercase font-bold tracking-widest px-3 py-0.5 rounded-full">
                    {pkg.badge}
                  </span>
                )}

                <div className="space-y-4">
                  <div className="border-b border-slate-100 pb-4">
                    <h3 className="font-bold text-lg text-slate-900">{pkg.name}</h3>
                    <p className="text-xs text-slate-500 mt-1">{pkg.desc}</p>
                    <div className="mt-3 flex items-baseline gap-1">
                      <span className="text-3xl font-extrabold text-[#0B3D91]">{pkg.price}</span>
                      <span className="text-xs text-slate-400">/{pkg.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-600">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => {
                    const formEl = document.getElementById('search-popup-panel');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`w-full mt-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    pkg.highlight
                      ? 'bg-[#FF5A00] hover:bg-orange-600 text-white shadow-md'
                      : 'bg-[#0B3D91] hover:bg-blue-900 text-white'
                  }`}
                >
                  Select Package
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Development Process / Pipeline */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 lg:p-8 shadow-sm space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-extrabold uppercase text-[#FF5A00] tracking-wider">
              Step-by-Step Execution
            </span>
            <h2 className="text-2xl lg:text-3xl font-bold text-[#0B3D91]">
              Our Business Website Development Process
            </h2>
            <p className="text-xs text-slate-500">Agile project delivery pipeline with weekly progress demos</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3 relative">
                <div className="w-8 h-8 rounded-full bg-[#0B3D91] text-white font-bold text-xs flex items-center justify-center">
                  0{step.step}
                </div>
                <h4 className="font-bold text-slate-900 text-xs leading-snug">{step.title}</h4>
                <p className="text-[11px] text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs Section */}
        <section className="bg-white rounded-2xl border border-slate-200 p-6 lg:p-8 shadow-sm space-y-6">
          <div className="space-y-2 border-b border-slate-100 pb-4">
            <span className="text-xs font-extrabold uppercase text-[#FF5A00] tracking-wider">
              Frequently Asked Questions
            </span>
            <h2 className="text-2xl font-bold text-[#0B3D91]">
              Questions About Business Website Development
            </h2>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
                >
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
        </section>

        {/* Related Services */}
        <section className="space-y-6">
          <div className="border-b border-slate-200 pb-4">
            <span className="text-xs font-extrabold uppercase text-[#FF5A00] tracking-wider">
              Explore More Tech Solutions
            </span>
            <h3 className="text-xl font-bold text-[#0B3D91] mt-1">
              Related IT & Digital Services
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
        </section>
      </div>

      {/* Footer Branding Banner */}
      <section className="bg-[#0B3D91] text-white py-12 px-4 text-center space-y-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold">Ready to Build Your Business Website?</h2>
        <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto">
          Get in touch with our tech experts for a free demo and detailed project quotation.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="px-6 py-3 bg-[#FF5A00] hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-lg cursor-pointer"
        >
          Book Free Consultation Today
        </button>
      </section>
    </div>
  );
};

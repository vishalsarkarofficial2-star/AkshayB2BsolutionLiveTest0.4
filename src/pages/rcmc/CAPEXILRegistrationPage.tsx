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

interface CAPEXILRegistrationLandingProps {
  onBackToHome: () => void;
  onSelectService: (serviceName: string) => void;
  onOpenBrochure: () => void;
  onOpenAppointment: () => void;
}

// 6 Accordion FAQs (adapted from the Indian CAPEXIL Act, 1932 framework)
const FAQ_ITEMS = [
  { q: 'What is CAPEXIL Registration?', a: 'CAPEXIL Registration generally refers to obtaining membership and, where applicable, a Registration-Cum-Membership Certificate (RCMC) from CAPEXIL for exporters dealing in products covered by the council. The appropriate membership category and requirements depend on your export activity, product panel, turnover and applicable CAPEXIL rules.' },
  { q: 'Who should apply for CAPEXIL membership / RCMC?', a: 'Exporters whose products fall under CAPEXIL-covered sectors may apply, subject to the council’s product-panel and membership criteria. We first review your IEC, business profile and export products so you apply under the appropriate category.' },
  { q: 'What documents are generally required?', a: 'Common requirements can include IEC details, PAN, GST details where applicable, business constitution documents, bank and contact details, product information and export-turnover declaration or supporting records. Final requirements depend on the membership category and CAPEXIL rules.' },
  { q: 'Is the CAPEXIL fee fixed for every exporter?', a: 'No. CAPEXIL fees can vary by turnover, membership category, number of years and additional product panels. Our package therefore uses a custom quote after a quick eligibility and category check.' },
  { q: 'Can you help with CAPEXIL RCMC application and follow-up?', a: 'Yes. Our support covers document pre-check, application preparation, category guidance, filing assistance and follow-up support. Approval and final issuance remain subject to CAPEXIL verification and applicable rules.' },
  { q: 'Can existing members get renewal or update support?', a: 'Yes. Existing members may need membership renewal, RCMC endorsement, profile updates, annual documents or other compliance actions. We can review the current status and guide the next required step.' }
]

// Related services cross-linking items — sourced from CAPEXIL-adjacent structures
const RELATED_SERVICES = [
  { title: 'IEC Registration', desc: 'Get Import Export Code registration support for starting import-export activities in India.', img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&auto=format&fit=crop&q=80', price: 'Get Quote' },
  { title: 'IEC Renewal / Update', desc: 'Keep IEC particulars updated and receive support for modification or reactivation requirements.', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&auto=format&fit=crop&q=80', price: 'Get Quote' },
  { title: 'AD Code Registration', desc: 'Register your bank AD Code with customs for smoother export documentation and shipping bills.', img: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&auto=format&fit=crop&q=80', price: 'Get Quote' },
  { title: 'RCMC Registration', desc: 'Professional assistance for Registration-Cum-Membership Certificate with the relevant export promotion council.', img: 'https://images.unsplash.com/photo-1521791055366-0d553872125f?w=600&auto=format&fit=crop&q=80', price: 'Get Quote' },
  { title: 'LUT Registration', desc: 'GST LUT filing support for eligible exporters supplying goods or services without payment of IGST.', img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&auto=format&fit=crop&q=80', price: 'Get Quote' },
  { title: 'GST Registration', desc: 'GST registration assistance for businesses and exporters with document and application support.', img: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=600&auto=format&fit=crop&q=80', price: 'Get Quote' },
  { title: 'MSME Udyam Registration', desc: 'Udyam registration support for eligible micro, small and medium enterprises in India.', img: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&auto=format&fit=crop&q=80', price: 'Get Quote' },
  { title: 'Trademark Registration', desc: 'Protect your export brand name or logo with trademark application support in India.', img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&auto=format&fit=crop&q=80', price: 'Get Quote' },
  { title: 'ICEGATE Registration', desc: 'Get assistance with ICEGATE registration and customs-facing digital trade setup.', img: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=600&auto=format&fit=crop&q=80', price: 'Get Quote' }
]

export const CAPEXILRegistrationPage: React.FC<CAPEXILRegistrationLandingProps> = ({
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
  const [businessType, setBusinessType] = useState(BUSINESS_TYPES[0]);
  const [businessActivity, setBusinessActivity] = useState(BUSINESS_ACTIVITIES[0]);
  const [panNumber, setPanNumber] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('CAPEXIL Registration Support Package');
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
            <span className="text-slate-900 font-bold">CAPEXIL Registration</span>
          </div>
        </div>
        {/* 2. HERO SECTION */}
        <section id="hero-section" className="relative bg-gradient-to-br from-[#0B3D91] via-[#0D47A1] to-[#082a66] text-white pt-8 sm:pt-12 pb-14 sm:pb-16 overflow-hidden border-b border-slate-200">
          <div className="absolute inset-0 z-0 pointer-events-none opacity-15 overflow-hidden"><div className="absolute -top-12 -right-12 w-80 h-80 bg-orange-400/30 rounded-full blur-2xl"></div><div className="absolute -bottom-12 -left-12 w-80 h-80 bg-blue-300/30 rounded-full blur-2xl"></div></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6"><div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-orange-300"><MapPin className="w-3.5 h-3.5 text-[#FF5A00]" /><span>Pan-India Export Compliance Desk</span><span className="w-1 h-1 rounded-full bg-white/60"></span><span className="text-white">CAPEXIL Membership &amp; RCMC Support</span></div>
              <div className="space-y-2"><h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-tight antialiased">CAPEXIL Registration</h1><p className="text-xl sm:text-2xl font-black text-orange-300">Export with the right council support — <span className="underline decoration-[#FF5A00] decoration-2 underline-offset-4 text-white">Get Your Custom Quote</span></p><p className="text-xs sm:text-sm font-semibold text-blue-100">Fee depends on applicable CAPEXIL category, turnover, validity and product panel.</p></div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">Planning to export CAPEXIL-covered products? Get professional assistance for membership / RCMC documentation, category review and application support so you can move forward with greater clarity and fewer avoidable filing errors.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold"><Landmark className="w-4 h-4 text-[#FF5A00]" /><span>Export Promotion Council</span></div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold"><FileCheck className="w-4 h-4 text-[#FF5A00]" /><span>RCMC Filing Support</span></div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold"><Briefcase className="w-4 h-4 text-[#FF5A00]" /><span>Exporter Category Review</span></div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold"><Search className="w-4 h-4 text-[#FF5A00]" /><span>Document Pre-Check</span></div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold"><TrendingUp className="w-4 h-4 text-[#FF5A00]" /><span>Export Growth Ready</span></div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white/10 border border-white/20 text-xs font-semibold"><Users2 className="w-4 h-4 text-[#FF5A00]" /><span>Dedicated Advisor</span></div>
              </div>
              <div className="grid grid-cols-3 gap-3 pt-3"><div className="p-3 rounded-2xl bg-white/10 border border-white/20 text-center"><div className="text-xl sm:text-3xl font-black text-orange-300 font-mono">{counterClients.toLocaleString()}+</div><div className="text-[10px] sm:text-xs font-semibold text-slate-200 uppercase mt-0.5">Happy Clients</div></div><div className="p-3 rounded-2xl bg-white/10 border border-white/20 text-center"><div className="text-xl sm:text-3xl font-black text-white font-mono">{counterCertificates.toLocaleString()}+</div><div className="text-[10px] sm:text-xs font-semibold text-slate-200 uppercase mt-0.5">Applications Assisted</div></div><div className="p-3 rounded-2xl bg-white/10 border border-white/20 text-center"><div className="text-xl sm:text-3xl font-black text-orange-300 font-mono">{counterProfessionals}+</div><div className="text-[10px] sm:text-xs font-semibold text-slate-200 uppercase mt-0.5">Professionals</div></div></div>
            </div>
            <div id="lead-capture-widget" className="lg:col-span-5 scroll-mt-24"><div className="bg-white rounded-2xl shadow-2xl border-2 border-orange-400/80 p-5 sm:p-6 text-slate-900 relative">
              <div className="absolute -top-3.5 right-6 px-3 py-1 rounded-full bg-[#FF5A00] text-[#0B3D91] text-xs font-black uppercase tracking-wider shadow-md flex items-center gap-1"><Flame className="w-3 h-3 fill-[#0B3D91]" /><span>Get Category Check</span></div>
              {formSubmitted ? <div className="text-center py-8 space-y-4"><CheckCircle2 className="w-12 h-12 text-orange-600 mx-auto"/><h3 className="text-xl font-bold">Request Received!</h3><p className="text-xs text-slate-600">Thank you <span className="font-bold">{applicantName}</span>. Our CAPEXIL registration advisor will review your requirement and connect with you at <span className="font-bold">{applicantMobile}</span>.</p><button onClick={()=>{setFormSubmitted(false);setFormStep(1)}} className="px-5 py-2 rounded-lg bg-[#0B3D91] text-white text-xs font-bold">Submit Another Request</button></div> : <>
                <div className="border-b border-slate-100 pb-3 mb-3"><h3 className="text-base font-extrabold text-[#0B3D91]">CAPEXIL Registration Desk</h3><p className="text-[11px] text-slate-500">Step {formStep} of 3 • Quick requirement check</p></div>
                <div className="bg-gradient-to-r from-orange-50 to-orange-50 border border-orange-300 rounded-xl p-3 mb-4"><span className="text-[10px] font-black uppercase tracking-wider text-orange-900 block">Package Price</span><span className="text-base font-black text-[#0B3D91]">Custom Quote</span><span className="text-[10px] text-slate-500 block">Based on CAPEXIL category &amp; applicable charges</span></div>
                <form onSubmit={handleSubmitForm} className="space-y-4">
                  {formStep===1 && <div><label className="block text-xs font-bold text-slate-700 mb-1">Select Your Business State *</label><select value={selectedState} onChange={(e)=>setSelectedState(e.target.value)} className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs">{INDIAN_STATES_AND_UTS.map(st=><option key={st} value={st}>{st}</option>)}</select><p className="text-[11px] text-slate-500 mt-2">We use this to route your request and understand your exporter profile.</p></div>}
                  {formStep===2 && <div className="space-y-3"><div className="grid grid-cols-2 gap-2"><div><label className="block text-xs font-bold mb-1">Business Type *</label><select value={businessType} onChange={(e)=>setBusinessType(e.target.value)} className="w-full bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs">{BUSINESS_TYPES.map(bt=><option key={bt} value={bt}>{bt}</option>)}</select></div><div><label className="block text-xs font-bold mb-1">Business Activity *</label><select value={businessActivity} onChange={(e)=>setBusinessActivity(e.target.value)} className="w-full bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs">{BUSINESS_ACTIVITIES.map(ba=><option key={ba} value={ba}>{ba}</option>)}</select></div></div><input type="text" required value={applicantName} onChange={(e)=>setApplicantName(e.target.value)} placeholder="Authorized Person Name" className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs"/><div className="grid grid-cols-2 gap-2"><input type="tel" required value={applicantMobile} onChange={(e)=>setApplicantMobile(e.target.value)} placeholder="Mobile Number" className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs"/><input type="email" value={applicantEmail} onChange={(e)=>setApplicantEmail(e.target.value)} placeholder="Email" className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs"/></div></div>}
                  {formStep===3 && <div className="space-y-3"><div><label className="block text-xs font-bold mb-1">PAN / IEC Reference (Optional)</label><input type="text" value={panNumber} onChange={(e)=>setPanNumber(e.target.value.toUpperCase())} placeholder="Enter PAN or IEC reference" className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs font-mono uppercase"/></div><div><label className="block text-xs font-bold mb-1">Package</label><select value={selectedPackage} onChange={(e)=>setSelectedPackage(e.target.value)} className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs font-bold"><option value="CAPEXIL Registration Support Package">CAPEXIL Registration Support — Custom Quote</option></select></div><div className="flex items-center gap-2"><div className="bg-slate-900 text-[#FF5A00] px-3 py-2 rounded-lg font-mono font-bold tracking-widest text-sm">{captchaCode}</div><button type="button" onClick={regenerateCaptcha} className="p-2"><RotateCcw className="w-4 h-4"/></button><input type="text" required value={captchaInput} onChange={(e)=>setCaptchaInput(e.target.value)} placeholder="Enter code" className="flex-1 bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs uppercase"/></div></div>}
                  <div className="pt-2 flex items-center gap-2">{formStep>1 && <button type="button" onClick={handlePrevStep} className="px-4 py-2.5 rounded-xl border border-slate-300 text-xs font-bold">Back</button>}{formStep<3 ? <button type="button" onClick={handleNextStep} className="flex-1 py-2.5 rounded-xl bg-[#0B3D91] text-white text-xs font-bold flex items-center justify-center gap-1.5">Continue <ArrowRight className="w-4 h-4 text-[#FF5A00]"/></button> : <button type="submit" disabled={isSubmitting} className="flex-1 py-2.5 rounded-xl bg-[#0B3D91] text-white text-xs font-bold">{isSubmitting?'Processing...':'Submit & Get Custom Quote'}</button>}</div>
                </form></>}
            </div></div>
          </div></div>
        </section>

        {/* 3. STICKY IN-PAGE ANCHOR NAVIGATION */}
        <div className="sticky top-20 z-30 bg-white border-b border-slate-200 shadow-xs"><div className="max-w-7xl mx-auto px-4 sm:px-6"><div className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-2.5 no-scrollbar text-xs font-bold text-slate-600">{[
          {id:'packages',label:'Package'},{id:'overview',label:'Overview'},{id:'registration',label:'Registration'},{id:'advantages',label:'Benefits'},{id:'checklist',label:'Checklist'},{id:'eligibility',label:'Eligibility'},{id:'documents',label:'Documents'},{id:'steps',label:'Process'},{id:'legal-status',label:'RCMC Status'},{id:'post-compliance',label:'After Registration'},{id:'comparison',label:'Who Needs It'},{id:'tax-implications',label:'Export Compliance'},{id:'financing',label:'Export Growth'},{id:'why-akshayb2b',label:'Why Us'},{id:'faqs',label:'FAQs'}
        ].map(tab=><button key={tab.id} onClick={()=>scrollToSection(tab.id)} className={`px-3 py-1 rounded-full whitespace-nowrap transition-colors ${activeNavTab===tab.id?'bg-[#0B3D91] text-white':'hover:bg-slate-100 text-slate-700'}`}>{tab.label}</button>)}</div></div></div>

        {/* 4. PRICING PACKAGES (SINGLE CARD WITH REQUIRED BADGES) */}
        <section id="packages" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20"><div className="max-w-7xl mx-auto px-4 sm:px-6"><div className="text-center max-w-3xl mx-auto mb-10"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Exporter-Focused Support</span><h2 className="text-2xl sm:text-4xl font-extrabold text-[#0D47A1] mt-2">CAPEXIL Registration Support Package</h2><p className="text-sm text-slate-500 mt-2">One clear support package. Your final quote is shared after checking the applicable CAPEXIL membership / RCMC category, turnover and product panel.</p></div><div className="max-w-[560px] mx-auto"><div className="bg-white rounded-2xl border-t-4 border-t-[#FF6B00] border border-slate-200 p-6 sm:p-8 shadow-xl"><div className="flex flex-wrap gap-2 mb-4"><span className="px-3 py-1 rounded bg-orange-100 text-orange-900 text-[10px] font-black uppercase">CUSTOM QUOTE</span><span className="px-3 py-1 rounded bg-yellow-100 text-yellow-900 text-[10px] font-black uppercase">CATEGORY CHECK FIRST</span></div><h3 className="text-2xl font-bold text-[#0D47A1]">CAPEXIL Registration Assistance</h3><p className="text-sm text-slate-500 mb-6">Ideal for exporters who want guided membership / RCMC filing without guessing the applicable category or documentation.</p><div className="mb-6 pb-6 border-b border-slate-100"><span className="text-4xl font-extrabold text-[#0D47A1]">Get Quote</span><span className="text-xs text-slate-500 font-medium block mt-1">Final fee depends on CAPEXIL category, turnover, validity, product panel and applicable taxes/charges.</span></div><div className="space-y-3.5 mb-8">{['Exporter eligibility & product-panel review','Membership / RCMC category guidance','Document checklist & pre-verification','Application preparation and filing assistance','Turnover declaration / supporting document guidance','Application status and follow-up support','Dedicated compliance advisor'].map((item,idx)=><div key={idx} className="flex items-start gap-3 text-sm text-slate-700 font-medium"><CheckCircle2 className="w-5 h-5 text-[#FF6B00] flex-shrink-0 mt-0.5"/><span>{item}</span></div>)}</div><button onClick={()=>{setSelectedPackage('CAPEXIL Registration Support Package');scrollToSection('lead-capture-widget')}} className="w-full py-4 rounded-xl bg-[#0D47A1] hover:bg-blue-900 text-white font-bold text-sm shadow-lg">Check Eligibility &amp; Get Quote</button></div></div></div></section>

        {/* 5. OVERVIEW SECTION */}<section id="overview" className="py-14 bg-white border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Exporter Overview</span><h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">What is CAPEXIL Registration?</h2></div><p className="text-slate-700 text-sm sm:text-base leading-relaxed">CAPEXIL is an Export Promotion Council under India’s Ministry of Commerce &amp; Industry framework for promotion of specified chemical, allied, mineral and non-mineral product exports. Eligible exporters may obtain CAPEXIL membership and, where applicable, an RCMC for their covered products.</p><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{[{t:'For Relevant Exporters',d:'Best suited to exporters whose products fall under CAPEXIL-covered panels and categories.'},{t:'RCMC & Membership',d:'Registration can support access to a Registration-Cum-Membership Certificate and council membership services, subject to eligibility.'},{t:'Product-Panel Mapping',d:'Correctly identifying the product panel helps avoid applying under the wrong category.'},{t:'Export Promotion Support',d:'Members can access council circulars, events and trade-related support made available by CAPEXIL.'}].map((x,i)=><div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200"><CheckCircle2 className="w-5 h-5 text-[#0B3D91] mb-2"/><h4 className="font-bold text-sm">{x.t}</h4><p className="text-xs text-slate-600 mt-1">{x.d}</p></div>)}</div></div></section>

        {/* 6. REGISTRATION SECTION */}<section id="registration" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Application Framework</span><h2 className="text-2xl sm:text-3xl font-extrabold mt-2">How CAPEXIL Registration Works</h2></div><p className="text-slate-700 text-sm leading-relaxed">The process starts by matching your IEC holder profile and export products with the appropriate CAPEXIL category. After the document set and applicable fee basis are identified, the membership / RCMC application is prepared and submitted for council review.</p><div className="bg-white rounded-2xl border border-slate-200 p-5"><h4 className="text-xs font-bold uppercase tracking-wider text-[#0B3D91] flex items-center gap-2"><Sparkles className="w-4 h-4 text-[#FF5A00]"/>Why pre-check matters</h4><p className="text-xs text-slate-600 mt-2">Turnover, product panel, business constitution and existing membership status can affect documentation and charges. A pre-check makes the quotation and filing route clearer before payment.</p></div></div></section>

        {/* 7. ADVANTAGES */}<section id="advantages" className="py-14 bg-white border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Exporter Benefits</span><h2 className="text-2xl sm:text-3xl font-extrabold mt-2">Why CAPEXIL Membership / RCMC Matters</h2></div><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{[{t:'Recognized Export Council Linkage',d:'Connect your business with the relevant export promotion ecosystem for covered products.'},{t:'RCMC Support',d:'Obtain RCMC where applicable for eligible trade-policy benefits, authorisations or concessions.'},{t:'Industry Updates',d:'Access relevant circulars, policy information, events and sector-focused initiatives available to members.'},{t:'Export Market Exposure',d:'Participate in council-led trade promotion opportunities subject to event and program eligibility.'},{t:'Better Compliance Readiness',d:'Keep membership, product-panel and exporter details aligned with current records.'},{t:'Professional Filing Support',d:'Reduce avoidable document gaps with structured pre-check and guided submission.'}].map((x,i)=><div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200"><div className="flex gap-2"><span className="w-6 h-6 rounded-full bg-[#0B3D91] text-[#FF5A00] text-xs flex items-center justify-center font-bold">{i+1}</span><div><h4 className="font-bold text-sm">{x.t}</h4><p className="text-xs text-slate-600 mt-1">{x.d}</p></div></div></div>)}</div></div></section>

        {/* 8. CHECKLIST */}<section id="checklist" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Before You Apply</span><h2 className="text-2xl sm:text-3xl font-extrabold mt-2">CAPEXIL Registration Readiness Checklist</h2></div><div className="space-y-3">{['Active IEC details and exporter profile','Correct legal name, PAN and business constitution','GST details where applicable','Clear list of products proposed for export','Correct CAPEXIL product panel / category mapping','Export turnover information or declaration, where required','Authorized signatory and contact details','Existing CAPEXIL membership / RCMC details, if any'].map((x,i)=><div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 text-sm"><CheckCircle2 className="w-5 h-5 text-orange-600 flex-shrink-0"/><span>{x}</span></div>)}</div></div></section>

        {/* 9. ELIGIBILITY CRITERIA */}<section id="eligibility" className="py-14 bg-white border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Eligibility Check</span><h2 className="text-2xl sm:text-3xl font-extrabold mt-2">Who Can Apply for CAPEXIL Registration?</h2></div><p className="text-sm text-slate-700 mb-5">Eligibility depends mainly on whether your export products fall within CAPEXIL’s covered sectors/panels and whether your exporter profile satisfies the applicable membership requirements.</p><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{['IEC holder engaged in eligible export activities','Merchant or manufacturer exporter, as applicable','Products falling under an appropriate CAPEXIL panel','Valid business and tax/KYC records','Turnover information available where required','Authorized person able to complete declarations and filings'].map((x,i)=><div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex gap-3 text-sm"><ShieldCheck className="w-5 h-5 text-[#0B3D91] flex-shrink-0"/><span>{x}</span></div>)}</div></div></section>

        {/* 10. REQUIRED DOCUMENTS */}<section id="documents" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Document Checklist</span><h2 className="text-2xl sm:text-3xl font-extrabold mt-2">Documents Commonly Needed</h2></div><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{[{t:'IEC Details',d:'Import Export Code and exporter profile details.'},{t:'PAN & Business Proof',d:'PAN and constitution/registration documents of the business.'},{t:'GST Details',d:'GST registration information where applicable.'},{t:'Product Information',d:'Products, HS/HSN references and proposed CAPEXIL panel.'},{t:'Export Turnover Declaration',d:'Turnover declaration/supporting information where required by the applicable fee or membership rules.'},{t:'Authorized Signatory Details',d:'Contact, designation and authorization details for filing and declarations.'}].map((x,i)=><div key={i} className="p-4 rounded-xl bg-white border border-slate-200"><div className="flex gap-2 items-center"><FileText className="w-4 h-4 text-[#0B3D91]"/><h4 className="font-bold text-sm">{x.t}</h4></div><p className="text-xs text-slate-600 mt-1 pl-6">{x.d}</p></div>)}</div><p className="text-[11px] text-slate-500 mt-4 text-center">Exact documents may vary by membership category, product panel, exporter status and CAPEXIL requirements.</p></div></section>

        {/* 11. STEPS */}<section id="steps" className="py-14 bg-white border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Application Sequence</span><h2 className="text-2xl sm:text-3xl font-extrabold mt-2">Step-by-Step CAPEXIL Registration Process</h2></div><div className="space-y-4">{[{s:'Step 1',t:'Exporter & Product Review',d:'Check IEC holder profile, business type and products.'},{s:'Step 2',t:'Identify CAPEXIL Category',d:'Map the applicable product panel and membership / RCMC route.'},{s:'Step 3',t:'Document Pre-Check',d:'Review KYC, IEC, GST, turnover and supporting information.'},{s:'Step 4',t:'Quote & Application Preparation',d:'Share the applicable support quote and prepare the filing set.'},{s:'Step 5',t:'Submit Application',d:'File the membership / RCMC application through the applicable CAPEXIL process.'},{s:'Step 6',t:'Follow-up & Status Support',d:'Assist with status tracking, clarifications and next steps until decision.'}].map((x,i)=><div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex gap-4"><span className="text-xs font-black text-[#0B3D91] bg-blue-100 px-3 py-1 rounded h-fit">{x.s}</span><div><h4 className="font-bold text-sm">{x.t}</h4><p className="text-xs text-slate-600 mt-1">{x.d}</p></div></div>)}</div></div></section>

        {/* 12. LEGAL STATUS */}<section id="legal-status" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">RCMC Position</span><h2 className="text-2xl sm:text-3xl font-extrabold mt-2">Understanding CAPEXIL Membership &amp; RCMC</h2></div><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{[{t:'Membership',d:'Membership connects eligible exporters with CAPEXIL and its member services.'},{t:'RCMC',d:'The Registration-Cum-Membership Certificate is relevant where required under Foreign Trade Policy for specified authorisations, benefits or concessions.'},{t:'Product Panel',d:'Your RCMC/membership should correspond to the appropriate covered export products.'},{t:'Validity & Updates',d:'Membership and RCMC validity, renewal and annual documentation requirements depend on applicable CAPEXIL rules.'}].map((x,i)=><div key={i} className="p-4 rounded-xl bg-white border border-slate-200"><Landmark className="w-5 h-5 text-[#0B3D91] mb-2"/><h4 className="font-bold text-sm">{x.t}</h4><p className="text-xs text-slate-600 mt-1">{x.d}</p></div>)}</div></div></section>

        {/* 13. POST-REGISTRATION COMPLIANCE */}<section id="post-compliance" className="py-14 bg-white border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Stay Current</span><h2 className="text-2xl sm:text-3xl font-extrabold mt-2">After CAPEXIL Registration</h2></div><div className="space-y-3">{['Keep CAPEXIL profile, IEC, GST and contact details updated','Renew / endorse membership or RCMC within applicable timelines','Submit annual export turnover information and required documents where applicable','Update product panels when your export product range changes','Track council circulars, notices and member requirements','Maintain copies of submissions, payment records and certificates'].map((x,i)=><div key={i} className="flex gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm"><FileCheck className="w-5 h-5 text-orange-600 flex-shrink-0"/><span>{x}</span></div>)}</div></div></section>

        {/* 14. COMPARISON TABLE */}<section id="comparison" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20"><div className="max-w-6xl mx-auto px-4 sm:px-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Requirement Guide</span><h2 className="text-2xl sm:text-3xl font-extrabold mt-2">When CAPEXIL Registration May Be Relevant</h2></div><div className="overflow-x-auto bg-white rounded-2xl border border-slate-200"><table className="w-full text-left text-xs"><thead className="bg-[#0B3D91] text-white"><tr><th className="p-4">Exporter Situation</th><th className="p-4">CAPEXIL Relevance</th></tr></thead><tbody>{[['Exporting CAPEXIL-covered products','Potentially relevant — product panel and eligibility should be checked'],['Applying for FTP authorisation / benefit where RCMC is required','RCMC may be required under applicable Foreign Trade Policy provisions'],['Only claiming post-export remission such as RoDTEP / drawback','RCMC treatment can differ; verify the current DGFT requirement for the specific scheme'],['Existing CAPEXIL member adding products','May require profile or additional panel action'],['Existing member near expiry','Renewal / endorsement may be needed']].map((r,i)=><tr key={i} className="border-b border-slate-100"><td className="p-4 font-bold">{r[0]}</td><td className="p-4 text-slate-600">{r[1]}</td></tr>)}</tbody></table></div></div></section>

        {/* 15. TAX IMPLICATIONS */}<section id="tax-implications" className="py-14 bg-white border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Export Compliance</span><h2 className="text-2xl sm:text-3xl font-extrabold mt-2">CAPEXIL Registration &amp; Other Export Registrations</h2></div><p className="text-sm text-slate-700 mb-5">CAPEXIL membership / RCMC does not replace your other statutory registrations. Depending on your business, you may separately need IEC, GST, LUT, AD Code, ICEGATE or product-specific approvals.</p><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{['IEC: primary import-export identification','GST / LUT: tax compliance for eligible export supplies','AD Code: customs/bank linkage for export shipping processes','ICEGATE: customs digital interface requirements','Product-specific licenses/certifications where applicable','RCMC: export promotion council membership certification where required'].map((x,i)=><div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex gap-3 text-sm"><Receipt className="w-5 h-5 text-[#0B3D91] flex-shrink-0"/><span>{x}</span></div>)}</div></div></section>

        {/* 16. FINANCING OPTIONS */}<section id="financing" className="py-14 bg-slate-50 border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Export Growth</span><h2 className="text-2xl sm:text-3xl font-extrabold mt-2">How CAPEXIL Membership Can Support Export Growth</h2></div><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{[{t:'Trade Information',d:'Stay informed through sector circulars, market information and policy updates shared with members.'},{t:'Events & Outreach',d:'Explore trade fairs, buyer-seller meets, seminars and export promotion activities subject to availability.'},{t:'Industry Representation',d:'Benefit from a council that represents covered export sectors before relevant stakeholders.'},{t:'Compliance Awareness',d:'Access sector-focused updates that can help exporters prepare for changing market requirements.'}].map((x,i)=><div key={i} className="p-4 bg-white rounded-xl border border-slate-200"><TrendingUp className="w-5 h-5 text-orange-600 mb-2"/><h4 className="font-bold text-sm">{x.t}</h4><p className="text-xs text-slate-600 mt-1">{x.d}</p></div>)}</div></div></section>

        {/* 17. HOW AKSHAYB2BSOLUTIONS HELPS */}<section id="why-akshayb2b" className="py-14 bg-white border-b border-slate-200 scroll-mt-20"><div className="max-w-5xl mx-auto px-4 sm:px-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Our Support</span><h2 className="text-2xl sm:text-3xl font-extrabold mt-2">How akshayb2bsolutions Helps You</h2></div><div className="space-y-3">{[{t:'No Guesswork on Category',d:'We first review your exporter profile and products before recommending the filing route.'},{t:'Transparent Quote After Review',d:'Because CAPEXIL charges can vary, we quote after checking the applicable category instead of showing a misleading fixed price.'},{t:'Document Pre-Verification',d:'We help identify common document gaps before submission.'},{t:'Application Assistance',d:'Structured support for form preparation, uploads and filing workflow.'},{t:'Follow-up Support',d:'Help with status tracking, clarifications and next-step guidance.'}].map((x,i)=><div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200"><div className="flex gap-3"><Handshake className="w-5 h-5 text-[#0B3D91] flex-shrink-0"/><div><h4 className="font-bold text-sm">{x.t}</h4><p className="text-xs text-slate-600 mt-1">{x.d}</p></div></div></div>)}</div></div></section>

        {/* 18. TRUST / WHY US SECTION */}<section className="py-14 bg-slate-50 border-b border-slate-200"><div className="max-w-6xl mx-auto px-4 sm:px-6"><div className="text-center max-w-3xl mx-auto mb-10"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Why Choose Us</span><h2 className="text-2xl sm:text-3xl font-extrabold mt-2">Exporter-Focused Registration Support</h2></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{[{t:'India-Focused Compliance',i:<Landmark className="w-6 h-6"/>},{t:'Dedicated Advisor',i:<Users2 className="w-6 h-6"/>},{t:'Document Pre-Check',i:<FileCheck className="w-6 h-6"/>},{t:'Clear Filing Roadmap',i:<Layers className="w-6 h-6"/>},{t:'Transparent Scope',i:<Receipt className="w-6 h-6"/>},{t:'Post-Filing Support',i:<ShieldCheck className="w-6 h-6"/>}].map((x,i)=><div key={i} className="p-5 bg-white rounded-2xl border border-slate-200 text-center"><div className="w-12 h-12 mx-auto rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center mb-3">{x.i}</div><h4 className="font-bold text-sm">{x.t}</h4></div>)}</div></div></section>

        {/* 19. FAQ SECTION */}<section id="faqs" className="py-14 bg-white border-b border-slate-200 scroll-mt-20"><div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6"><div className="text-center mb-8"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Got Questions?</span><h2 className="text-2xl sm:text-3xl font-extrabold mt-2">CAPEXIL Registration FAQs</h2></div><div className="space-y-3">{FAQ_ITEMS.map((faq,idx)=>{const isOpen=openFaqIndex===idx;return <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden"><button onClick={()=>setOpenFaqIndex(isOpen?null:idx)} className="w-full p-4 flex justify-between items-center text-left font-bold text-sm bg-slate-50"><span>{faq.q}</span><ChevronDown className={`w-4 h-4 transition-transform ${isOpen?'rotate-180':''}`}/></button>{isOpen&&<div className="p-4 text-xs text-slate-600 leading-relaxed bg-white">{faq.a}</div>}</div>})}</div></div></section>

        {/* 20. CTA BANNER + BOOK APPOINTMENT */}<section className="py-14 bg-gradient-to-r from-[#0B3D91] to-[#082a66] text-white"><div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6"><span className="text-xs font-black uppercase tracking-widest text-[#FF5A00] bg-white/10 px-3 py-1 rounded-full border border-white/20">Ready to Export Smarter?</span><h2 className="text-2xl sm:text-4xl font-extrabold">Start Your CAPEXIL Registration with a Category Check</h2><p className="text-xs sm:text-sm text-slate-200 max-w-2xl mx-auto">Tell us your IEC, product and exporter profile. We’ll help identify the relevant CAPEXIL registration route and share a clear custom quote before you proceed.</p><div className="flex flex-col sm:flex-row gap-3 justify-center"><button onClick={()=>scrollToSection('lead-capture-widget')} className="px-6 py-3 rounded-xl bg-[#FF5A00] text-[#0B3D91] font-black text-sm">Get Custom Quote</button><button onClick={onOpenAppointment} className="px-6 py-3 rounded-xl bg-white/10 border border-white/30 text-white font-bold text-sm"><Calendar className="w-4 h-4 inline mr-2"/>Book Consultation</button></div></div></section>

        {/* 21. RELATED SERVICES CROSS-LINKING */}<section className="py-14 bg-slate-50 border-b border-slate-200"><div className="max-w-7xl mx-auto px-4 sm:px-6"><div className="text-center mb-10"><span className="text-xs font-black uppercase tracking-wider text-[#0B3D91] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">Related Export Services</span><h2 className="text-2xl sm:text-3xl font-extrabold mt-2">Services Exporters Often Need</h2><p className="text-sm text-slate-500 mt-2">Complete your export compliance setup with related registrations and filing support.</p></div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">{RELATED_SERVICES.map((service,idx)=><div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"><img src={service.img} alt={service.title} className="w-full h-40 object-cover"/><div className="p-5"><h3 className="font-bold text-[#0D47A1]">{service.title}</h3><p className="text-xs text-slate-600 mt-2 min-h-[48px]">{service.desc}</p><div className="mt-4 flex items-center justify-between"><span className="text-xs font-bold text-orange-600">{service.price}</span><button onClick={()=>onSelectService(service.title)} className="text-xs font-bold text-[#0B3D91] flex items-center gap-1">View Service <ArrowRight className="w-3.5 h-3.5"/></button></div></div></div>)}</div></div></section>

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
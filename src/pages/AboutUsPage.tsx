import React from 'react';
import {
  ShieldCheck,
  Building2,
  Users,
  CheckCircle2,
  Clock,
  ArrowRight,
  Lock,
  Award,
  Sparkles,
  MapPin,
  FileText,
  Briefcase,
  Zap,
  HelpCircle,
  ArrowLeft,
  Calendar,
  Layers,
  Target,
  Quote,
  Star,
  Mail,
  Phone,
  CheckSquare
} from 'lucide-react';
import { TopUtilityBar } from '../components/TopUtilityBar';
import { HeaderMegaMenu } from '../components/HeaderMegaMenu';
import { Footer } from '../components/Footer';
import founderImg from '../assets/images/founder image.png';
import seemaKumariImg from '../assets/images/oparetionhead image.png';

interface AboutUsPageProps {
  onBackToHome: () => void;
  onSelectService: (serviceName: string) => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({
  onBackToHome,
  onSelectService
}) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans antialiased">
      {/* Utility Bar & Header */}
      <TopUtilityBar />
      <HeaderMegaMenu
        onSelectService={onSelectService}
        onOpenConsultation={() => onSelectService('book-consultation')}
      />

      {/* Hero Header */}
      <section className="bg-[#164694] text-white py-14 sm:py-16 px-4 sm:px-6 relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,90,0,0.18),transparent)] pointer-events-none"></div>
        <div className="absolute inset-0 z-0 pointer-events-none opacity-15 overflow-hidden">
          <div className="absolute -top-12 -right-12 w-80 h-80 bg-orange-400/30 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-blue-300/30 rounded-full blur-2xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-300 mb-6">
            <button
              onClick={onBackToHome}
              className="hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Home
            </button>
            <span>/</span>
            <span className="text-[#FF5A00] font-semibold">About Us</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 text-xs font-semibold uppercase tracking-wider">
              <Building2 className="w-4 h-4 text-[#FF5A00]" />
              ABOUT AKSHAY B2B SOLUTIONS
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Your Trusted Business &amp; Compliance Partner Across India
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Akshay B2B Solutions helps entrepreneurs, startups and established businesses simplify registrations, licences, taxation, compliance and business support through a streamlined digital process.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 py-12 space-y-16">
        
        {/* Who We Are */}
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-50 text-[#FF5A00] text-xs font-bold uppercase tracking-wider">
                <Users className="w-3.5 h-3.5" />
                WHO WE ARE
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B3D91]">
                Empowering Businesses With End-to-End Compliance Solutions
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Akshay B2B Solutions provides professional business registration, licensing, compliance and documentation support across India. Founded with a vision to eliminate regulatory bottlenecks for Indian entrepreneurs, we combine technology with expert legal and financial advisory.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Whether you are registering a new Private Limited Company, applying for FSSAI licenses, filing GST returns, protecting your intellectual property, or developing a digital presence, our dedicated team of CAs, CSs, and legal professionals ensures total accuracy and peace of mind.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <div className="text-2xl font-extrabold text-[#0B3D91]">10,000+</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Businesses Assisted</div>
                </div>
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <div className="text-2xl font-extrabold text-[#FF5A00]">99.4%</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">Approval Rate</div>
                </div>
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 col-span-2 sm:col-span-1">
                  <div className="text-2xl font-extrabold text-[#0B3D91]">Pan India</div>
                  <div className="text-xs text-slate-500 font-medium mt-0.5">State Coverage</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-gradient-to-br from-[#0B3D91] to-[#082A66] p-6 text-white shadow-lg space-y-6">
                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-500 text-white flex items-center justify-center font-bold">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-white">ISO Certified System</h3>
                    <p className="text-xs text-slate-300">ISO 9001:2015 &amp; ISO 27001 Standard</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-200">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0 mt-0.5" />
                    <span>Technology-driven automated tracking for statutory deadlines.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0 mt-0.5" />
                    <span>Dedicated Relationship Manager for every business client.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0 mt-0.5" />
                    <span>Strict confidentiality and encrypted document storage protocols.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0 mt-0.5" />
                    <span>Transparent pricing without hidden portal fees or surprise charges.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership & Executive Team */}
        <section className="space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#FF5A00] text-xs font-extrabold uppercase tracking-wider">
              <Award className="w-4 h-4 text-[#FF5A00]" />
              MEET OUR LEADERSHIP
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B3D91] tracking-tight">
              Driven by Experience &amp; Operational Excellence
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Our vision and everyday execution are guided by experienced industry professionals committed to empowering entrepreneurs and streamlining corporate governance across India.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* 1. Akshay Kumar - Founder */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between group">
              <div className="p-6 sm:p-8 space-y-6">
                {/* Header Profile Info */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                  <div className="relative flex-shrink-0">
                    <img
                      src={founderImg}
                      alt="Akshay Kumar - Founder & Managing Director"
                      className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover border-4 border-slate-100 shadow-md group-hover:scale-[1.02] transition-transform"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.dataset.tried) {
                          target.dataset.tried = 'true';
                          target.src = '/founder-image.png';
                        }
                      }}
                    />
                    <span className="absolute -bottom-2 -right-2 bg-[#FF5A00] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-xs uppercase tracking-wider">
                      FOUNDER
                    </span>
                  </div>

                  <div className="space-y-2 text-center sm:text-left">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-blue-50 text-[#0B3D91] text-xs font-bold">
                      <Building2 className="w-3.5 h-3.5 text-[#FF5A00]" />
                      Founder &amp; Managing Director
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B3D91]">
                      Akshay Kumar
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-slate-500">
                      12+ Years Experience in Corporate Law &amp; Compliance Strategy
                    </p>
                    <div className="flex items-center justify-center sm:justify-start gap-2 pt-1 text-xs text-slate-500">
                      <span className="flex items-center gap-1 text-amber-600 font-bold bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" /> Startup Mentor
                      </span>
                      <span className="flex items-center gap-1 text-slate-600 font-medium">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" /> UP &amp; Delhi NCR
                      </span>
                    </div>
                  </div>
                </div>

                {/* Biography */}
                <div className="space-y-3 pt-2 border-t border-slate-100">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#0B3D91] flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#FF5A00]" /> Biography &amp; Vision
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Akshay Kumar established Akshay B2B Solutions with a clear mission: to eliminate regulatory bottlenecks for Indian businesses. Combining legal domain expertise with digital workflow innovation, he has pioneered paperless corporate registration, MCA filings, and licensing services tailored for MSMEs and enterprises.
                  </p>
                </div>

                {/* Core Responsibilities */}
                <div className="space-y-3">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#0B3D91] flex items-center gap-2">
                    <Target className="w-4 h-4 text-[#FF5A00]" /> Key Focus Areas
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                    {[
                      'Strategic Expansion',
                      'Corporate Legal Advisory',
                      'Client Advocacy & Growth'
                    ].map((area, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-slate-700 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5A00] flex-shrink-0" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-2 text-xs text-slate-600 bg-blue-50/60 p-3.5 rounded-xl border border-blue-100">
                  <div className="font-bold text-[#0B3D91] flex items-center gap-1.5 mb-1">
                    <Award className="w-4 h-4 text-[#FF5A00]" /> Key Milestone Achievements:
                  </div>
                  <ul className="space-y-1.5 pl-5 list-disc marker:text-[#FF5A00]">
                    <li>Guided 10,000+ startups in company incorporation, GST, &amp; IP protection.</li>
                    <li>Built paperless portal execution frameworks for business compliance.</li>
                    <li>Advisor to regional industrial associations and incubation centers.</li>
                  </ul>
                </div>

                {/* Quote Callout */}
                <div className="relative p-4 rounded-2xl bg-gradient-to-r from-[#0B3D91] to-[#082A66] text-white space-y-2 shadow-sm">
                  <Quote className="w-6 h-6 text-orange-400 opacity-60 absolute top-3 right-3" />
                  <p className="text-xs italic text-slate-100 leading-relaxed relative z-10">
                    &ldquo;Our core belief is simple: no Indian entrepreneur should ever stall their growth due to complex regulatory paperwork. We handle the law so you can focus on building your enterprise.&rdquo;
                  </p>
                  <div className="text-[11px] font-bold text-orange-400 uppercase tracking-wider">
                    — Akshay Kumar, Founder
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Seema Kumari - Operations Head */}
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col justify-between group">
              <div className="p-6 sm:p-8 space-y-6">
                {/* Header Profile Info */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                  <div className="relative flex-shrink-0">
                    <img
                      src={seemaKumariImg}
                      alt="Seema Kumari - Operations Head"
                      className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover border-4 border-slate-100 shadow-md group-hover:scale-[1.02] transition-transform"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.dataset.tried) {
                          target.dataset.tried = 'true';
                          target.src = '/operationhead-image.png';
                        }
                      }}
                    />
                    <span className="absolute -bottom-2 -right-2 bg-[#0B3D91] text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-xs uppercase tracking-wider">
                      OPS HEAD
                    </span>
                  </div>

                  <div className="space-y-2 text-center sm:text-left">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-orange-50 text-[#FF5A00] text-xs font-bold">
                      <Briefcase className="w-3.5 h-3.5 text-[#0B3D91]" />
                      Operations Head
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B3D91]">
                      Seema Kumari
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-slate-500">
                      10+ Years Experience in Regulatory Operations &amp; Delivery Management
                    </p>
                    <div className="flex items-center justify-center sm:justify-start gap-2 pt-1 text-xs text-slate-500">
                      <span className="flex items-center gap-1 text-blue-700 font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                        <CheckSquare className="w-3.5 h-3.5 text-blue-600" /> Process Perfectionist
                      </span>
                      <span className="flex items-center gap-1 text-slate-600 font-medium">
                        <Clock className="w-3.5 h-3.5 text-slate-400" /> SLA &amp; Quality Lead
                      </span>
                    </div>
                  </div>
                </div>

                {/* Biography */}
                <div className="space-y-3 pt-2 border-t border-slate-100">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#0B3D91] flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#FF5A00]" /> Biography &amp; Role
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Seema Kumari heads operational execution at Akshay B2B Solutions, orchestrating daily document validation, statutory portal submissions, and cross-departmental workflows. Her rigorous quality standards ensure that all filings—from FSSAI licenses to tax returns—meet statutory guidelines with 100% accuracy.
                  </p>
                </div>

                {/* Core Responsibilities */}
                <div className="space-y-3">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#0B3D91] flex items-center gap-2">
                    <Target className="w-4 h-4 text-[#FF5A00]" /> Key Focus Areas
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                    {[
                      'End-to-End Service Delivery',
                      'Government Portal Auditing',
                      'Client SLA & Quality Assurance'
                    ].map((area, idx) => (
                      <div key={idx} className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 font-semibold text-slate-700 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0B3D91] flex-shrink-0" />
                        <span>{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-2 text-xs text-slate-600 bg-orange-50/60 p-3.5 rounded-xl border border-orange-100">
                  <div className="font-bold text-[#0B3D91] flex items-center gap-1.5 mb-1">
                    <Award className="w-4 h-4 text-[#FF5A00]" /> Operational Milestones:
                  </div>
                  <ul className="space-y-1.5 pl-5 list-disc marker:text-[#0B3D91]">
                    <li>Achieved a 99.4% first-time document approval rate across MCA &amp; GST portals.</li>
                    <li>Reduced average client turnaround times by 35% through streamlined SOPs.</li>
                    <li>Supervised over 50,000+ completed licensing &amp; compliance applications.</li>
                  </ul>
                </div>

                {/* Quote Callout */}
                <div className="relative p-4 rounded-2xl bg-gradient-to-r from-[#0B3D91] to-[#082A66] text-white space-y-2 shadow-sm">
                  <Quote className="w-6 h-6 text-orange-400 opacity-60 absolute top-3 right-3" />
                  <p className="text-xs italic text-slate-100 leading-relaxed relative z-10">
                    &ldquo;Operational accuracy is non-negotiable when dealing with government authorities. Every file that leaves our office is thoroughly verified to ensure absolute client peace of mind.&rdquo;
                  </p>
                  <div className="text-[11px] font-bold text-orange-400 uppercase tracking-wider">
                    — Seema Kumari, Operations Head
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#FF5A00] uppercase tracking-wider">OUR CORE PURPOSE</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B3D91]">Our Mission</h2>
            <p className="text-sm text-slate-600">
              Transforming statutory compliance from a complex burden into a smooth digital experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              {
                icon: Zap,
                title: 'Simplifying Compliance',
                desc: 'Translating complex legal codes and government procedures into simple, step-by-step actions.'
              },
              {
                icon: FileText,
                title: 'Reducing Paperwork',
                desc: 'Complete digital documentation submission and paperless processing for hassle-free approvals.'
              },
              {
                icon: ShieldCheck,
                title: 'Transparent Service',
                desc: '100% upfront pricing with clear timelines and real-time status updates at every stage.'
              },
              {
                icon: Layers,
                title: 'Digital Support',
                desc: 'Online consultation, electronic file vaults, and instant online support via phone & WhatsApp.'
              },
              {
                icon: MapPin,
                title: 'Pan India Service',
                desc: 'Seamless assistance for businesses operating across all 28 states and 8 union territories.'
              }
            ].map((m, idx) => {
              const IconComp = m.icon;
              return (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:border-[#0B3D91]/40 hover:shadow-md transition-all space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center">
                    <IconComp className="w-5 h-5 text-[#FF5A00]" />
                  </div>
                  <h3 className="font-bold text-sm text-[#0B3D91]">{m.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{m.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#FF5A00] uppercase tracking-wider">PROVEN EXCELLENCE</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B3D91]">Why Choose Us</h2>
            <p className="text-sm text-slate-600">
              Why thousands of business owners across India trust Akshay B2B Solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Clock,
                title: 'Fast Service',
                desc: 'Quick turnaround time with priority document processing and accelerated portal submission.'
              },
              {
                icon: Users,
                title: 'Expert Support',
                desc: 'Guided by experienced Chartered Accountants, Company Secretaries, and Legal Consultants.'
              },
              {
                icon: Lock,
                title: 'Secure Process',
                desc: 'Bank-grade SSL data encryption ensuring your sensitive identity & business files remain safe.'
              },
              {
                icon: ShieldCheck,
                title: 'Transparent Pricing',
                desc: 'Flat fee policy with zero hidden costs, clear government breakdown, and receipt guarantee.'
              },
              {
                icon: MapPin,
                title: 'Pan India Service',
                desc: 'Complete coverage for local, state, and central registrations across all Indian states.'
              },
              {
                icon: Briefcase,
                title: 'Dedicated Assistance',
                desc: 'Single point of contact for personalized assistance throughout your compliance journey.'
              }
            ].map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#FF5A00] flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-bold text-base text-[#0B3D91]">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Our Process */}
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#FF5A00] uppercase tracking-wider">HOW IT WORKS</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B3D91]">Our 4-Step Process</h2>
            <p className="text-sm text-slate-600">
              Simple, transparent, and completely digital execution from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              {
                step: '01',
                title: 'Share Requirement',
                desc: 'Select your required business registration, license or tax service and fill out a basic inquiry.'
              },
              {
                step: '02',
                title: 'Submit Documents',
                desc: 'Upload required documents securely via our online platform or share them with your advisor.'
              },
              {
                step: '03',
                title: 'Expert Processing',
                desc: 'Our professionals verify details, draft legal paperwork, and file applications with government portals.'
              },
              {
                step: '04',
                title: 'Receive Completion',
                desc: 'Receive your approved license, incorporation certificate, or filing receipt directly in your inbox.'
              }
            ].map((s, idx) => (
              <div key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3 relative group hover:border-[#0B3D91] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#0B3D91] text-white font-extrabold text-sm flex items-center justify-center">
                  {s.step}
                </div>
                <h3 className="font-bold text-base text-slate-900 group-hover:text-[#0B3D91] transition-colors">{s.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#164694] text-white rounded-2xl shadow-xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,90,0,0.2),transparent)] pointer-events-none"></div>
          <div className="absolute inset-0 z-0 pointer-events-none opacity-15 overflow-hidden">
            <div className="absolute -top-12 -right-12 w-80 h-80 bg-orange-400/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-blue-300/30 rounded-full blur-2xl"></div>
          </div>
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Need Help With Your Business Compliance?
            </h2>
            <p className="text-sm sm:text-base text-slate-200">
              Speak with our senior business consultants today and get step-by-step guidance for your business growth.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10 pt-2">
            <button
              onClick={() => onSelectService('all-services')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-[#0B3D91] hover:bg-slate-100 font-bold text-sm transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Briefcase className="w-4 h-4 text-[#FF5A00]" />
              Explore Services
            </button>
            <button
              onClick={() => onSelectService('book-consultation')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#FF5A00] hover:bg-[#FF6B00] text-white font-bold text-sm transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              Book Consultation
            </button>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer onSelectService={onSelectService} />
    </div>
  );
};

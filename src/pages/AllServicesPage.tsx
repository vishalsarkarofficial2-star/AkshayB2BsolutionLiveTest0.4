import React, { useState, useMemo } from 'react';
import {
  Search,
  ArrowRight,
  Building2,
  FileText,
  ShieldCheck,
  Globe,
  Award,
  Laptop,
  CheckCircle2,
  ArrowLeft,
  Briefcase,
  Sparkles,
  HelpCircle,
  Clock,
  Star,
  Zap,
  PhoneCall,
  ChevronDown,
  ChevronUp,
  FileCheck2,
  Headphones,
  IndianRupee
} from 'lucide-react';
import { TopUtilityBar } from '../components/TopUtilityBar';
import { HeaderMegaMenu } from '../components/HeaderMegaMenu';
import { Footer } from '../components/Footer';

interface AllServicesPageProps {
  onBackToHome: () => void;
  onSelectService: (serviceName: string) => void;
}

// 1. TOP IMPORTANT FEATURED SERVICES
const IMPORTANT_FEATURED_SERVICES = [
  {
    name: 'Private Limited Company',
    category: 'Business Startup',
    badge: 'Most Popular',
    badgeColor: 'bg-orange-500 text-white',
    desc: 'Best for startups looking for funding, limited liability, and high credibility.',
    highlights: ['Includes 2 DSCs & DINs', 'MOA, AOA & PAN/TAN Included', '100% Online MCA Filing'],
    icon: Building2,
    targetService: 'Private Limited Company'
  },
  {
    name: 'Sole Proprietorship Firm',
    category: 'Business Startup',
    badge: 'Fastest Setup',
    badgeColor: 'bg-blue-600 text-white',
    desc: 'Easiest and most affordable business structure for single business owners in India.',
    highlights: ['No Minimum Capital Required', 'Current Bank Account Opening', 'GST & MSME Included'],
    icon: Briefcase,
    targetService: 'Sole Proprietorship Firm'
  },
  {
    name: 'GST Registration',
    category: 'Tax & Compliance',
    badge: 'Essential',
    badgeColor: 'bg-emerald-600 text-white',
    desc: 'Mandatory tax registration for businesses selling goods or services online or inter-state.',
    highlights: ['Fast GSTIN Allotment', 'Input Tax Credit (ITC) Eligible', 'HSN/SAC Code Mapping'],
    icon: FileText,
    targetService: 'GST Registration'
  },
  {
    name: 'FSSAI Food License',
    category: 'Registration & License',
    badge: 'Mandatory for Food',
    badgeColor: 'bg-amber-600 text-white',
    desc: 'Required for restaurants, food traders, cloud kitchens, and manufacturers.',
    highlights: ['Basic / State / Central License', '1 to 5 Years Validity', 'Complete FoSCoS Assistance'],
    icon: ShieldCheck,
    targetService: 'FSSAI Registration'
  },
  {
    name: 'Trademark Brand Registration',
    category: 'Trademark & IP',
    badge: 'Brand Protection',
    badgeColor: 'bg-purple-600 text-white',
    desc: 'Secure exclusive legal rights to your brand name, slogan, or company logo.',
    highlights: ['Legal ™ Symbol Rights', '10 Years Validity Nationwide', 'Objection Advisory Included'],
    icon: Award,
    targetService: 'Trademark Registration'
  },
  {
    name: 'MSME / Udyam Registration',
    category: 'Registration & License',
    badge: 'Govt Benefits',
    badgeColor: 'bg-indigo-600 text-white',
    desc: 'Avail collateral-free bank loans, electricity subsidies, and tender exemptions.',
    highlights: ['Lifetime Validity', 'Instant Certificate Download', '100% Free Consultation'],
    icon: CheckCircle2,
    targetService: 'MSME Registration'
  },
  {
    name: 'Import Export Code (IEC)',
    category: 'Import Export',
    badge: 'Global Trade',
    badgeColor: 'bg-teal-600 text-white',
    desc: 'Mandatory 10-digit code issued by DGFT for importing or exporting goods & services.',
    highlights: ['No Annual Renewal Required', 'Fast DGFT Portal Approval', 'AD Code Registration Help'],
    icon: Globe,
    targetService: 'Import Export Code'
  },
  {
    name: 'Limited Liability Partnership (LLP)',
    category: 'Business Startup',
    badge: 'Partnership',
    badgeColor: 'bg-sky-600 text-white',
    desc: 'Combines the flexibility of a partnership with the limited liability of a company.',
    highlights: ['No Required Audit < ₹40L Turn', 'Legal Entity Identification', 'LLP Agreement Drafting'],
    icon: Building2,
    targetService: 'Limited Liability Partnership'
  }
];

// 2. IMPORTANT CATEGORIZED SERVICES
const CATEGORIZED_IMPORTANT_SERVICES = [
  {
    id: 'business-startup',
    title: 'Business Startup & Incorporation',
    icon: Building2,
    desc: 'Turn your idea into a legally recognized company or firm in India.',
    services: [
      { name: 'Private Limited Company', desc: 'Ideal for tech startups, scalable businesses, and equity investment.', icon: Building2 },
      { name: 'Sole Proprietorship Firm', desc: 'Simplest business model with lowest compliance and setup costs.', icon: Briefcase },
      { name: 'Limited Liability Partnership', desc: 'Great for professional services and partner-managed businesses.', icon: Building2 },
      { name: 'One Person Company', desc: 'Single founder startup with limited liability protection.', icon: Laptop },
      { name: 'Partnership Firm', desc: 'Registered partnership deed under Indian Partnership Act, 1932.', icon: Briefcase },
      { name: 'Section 8 NGO / Trust', desc: 'Non-profit organization for social welfare, charity, and education.', icon: ShieldCheck }
    ]
  },
  {
    id: 'registration-license',
    title: 'Government Registrations & Licenses',
    icon: ShieldCheck,
    desc: 'Statutory approvals, permits, and government certificates required to operate.',
    services: [
      { name: 'FSSAI Food License', desc: 'Mandatory Food Safety & Standards Authority of India licensing.', icon: ShieldCheck },
      { name: 'MSME Udyam Registration', desc: 'Official MSME certificate for government schemes and low-interest loans.', icon: CheckCircle2 },
      { name: 'Shop and Establishment Certificate', desc: 'Local municipal shop license for commercial establishments & offices.', icon: Building2 },
      { name: 'Trade License', desc: 'Municipal authority permit to carry out commercial operations in your city.', icon: FileText },
      { name: 'Labour License & PF/ESI', desc: 'Employee welfare registration under Labour Department guidelines.', icon: Laptop }
    ]
  },
  {
    id: 'tax-compliance',
    title: 'Taxation & Annual Compliance',
    icon: FileText,
    desc: 'Stay 100% compliant with GST, Income Tax, and MCA statutory returns.',
    services: [
      { name: 'GST Registration', desc: 'Obtain 15-digit GSTIN for selling goods/services across India.', icon: FileText },
      { name: 'GST Monthly & Annual Return Filing', desc: 'Timely filing of GSTR-1, GSTR-3B, and GSTR-9 annual returns.', icon: FileCheck2 },
      { name: 'Income Tax Return (ITR) Filing', desc: 'Personal & corporate ITR filing prepared by experienced CAs.', icon: Laptop },
      { name: 'Accounting & Bookkeeping Services', desc: 'End-to-end digital tally/zoho accounting & financial reporting.', icon: Briefcase },
      { name: 'ROC Annual Compliance for Pvt Ltd', desc: 'Mandatory AOC-4, MGT-7, and Director KYC filings with MCA.', icon: Award }
    ]
  },
  {
    id: 'trademark-ip',
    title: 'Trademark & Intellectual Property',
    icon: Award,
    desc: 'Protect your brand identity, logo, patents, and original creations.',
    services: [
      { name: 'Trademark Registration', desc: 'Register your brand name, slogan, or logo under IP India Controller.', icon: Award },
      { name: 'Trademark Objection Reply', desc: 'Draft legal response to examiner objections and hearing advocacy.', icon: FileText },
      { name: 'Copyright Registration', desc: 'Legal protection for software, literary, artistic, and design works.', icon: ShieldCheck }
    ]
  },
  {
    id: 'import-export',
    title: 'Import Export & Global Business',
    icon: Globe,
    desc: 'Cross-border trade setup, DGFT licensing, and custom codes.',
    services: [
      { name: 'Import Export Code (IEC)', desc: '10-digit PAN-based DGFT code for international shipping.', icon: Globe },
      { name: 'AD Code Registration', desc: 'Authorized Dealer code registration with customs ports.', icon: Briefcase }
    ]
  },
  {
    id: 'iso-quality',
    title: 'ISO & Quality Certifications',
    icon: CheckCircle2,
    desc: 'Boost business credibility with internationally benchmarked certifications.',
    services: [
      { name: 'ISO 9001:2015 Certification', desc: 'Quality Management System certificate for tenders and vendor onboarding.', icon: CheckCircle2 },
      { name: 'CE Mark & GMP Quality Standards', desc: 'Safety and manufacturing compliance for export & industrial goods.', icon: Award }
    ]
  }
];

// 3. FREQUENTLY ASKED QUESTIONS (CONTENT)
const IMPORTANT_FAQS = [
  {
    q: 'How do I choose the right business structure for my startup?',
    a: 'If you plan to raise venture capital or offer ESOPs, a Private Limited Company is the best choice. For single entrepreneurs starting small with low risk, a Sole Proprietorship Firm is fastest. If you have partners and want limited liability without heavy compliance, choose an LLP.'
  },
  {
    q: 'Are all registration processes 100% online?',
    a: 'Yes! At Akshay B2B Solutions, all application forms, document submissions, digital signatures, and government processing are handled completely online. You never need to visit any government office.'
  },
  {
    q: 'What documents are generally needed for business registration?',
    a: 'Generally, you will need: (1) PAN Card & Aadhaar Card of owners/directors, (2) Passport size photograph, (3) Proof of business address (Electricity bill / Rent Agreement / NOC), and (4) Bank statement or cancelled cheque.'
  },
  {
    q: 'How fast can my company or license be processed?',
    a: 'Proprietorship and MSME registrations take 1-2 working days. Private Limited Company incorporation takes approximately 5-7 working days, subject to MCA portal approval times.'
  },
  {
    q: 'Do you provide post-registration tax and compliance support?',
    a: 'Absolutely. We provide dedicated post-incorporation services including GST return filing, TDS compliance, Income Tax Return (ITR), accounting, and annual ROC filings.'
  }
];

export const AllServicesPage: React.FC<AllServicesPageProps> = ({
  onBackToHome,
  onSelectService
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('all');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Filtered list based on search or category filter
  const filteredCategoryGroups = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();
    
    return CATEGORIZED_IMPORTANT_SERVICES.map((catGroup) => {
      if (selectedCategoryFilter !== 'all' && catGroup.id !== selectedCategoryFilter) {
        return { ...catGroup, services: [] };
      }

      if (!term) return catGroup;

      const matchedServices = catGroup.services.filter(
        (srv) => srv.name.toLowerCase().includes(term) || srv.desc.toLowerCase().includes(term)
      );

      return {
        ...catGroup,
        services: matchedServices
      };
    }).filter(catGroup => catGroup.services.length > 0);
  }, [searchTerm, selectedCategoryFilter]);

  const totalServicesCount = filteredCategoryGroups.reduce((acc, cat) => acc + cat.services.length, 0);

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
        <div className="max-w-7xl mx-auto relative z-10 space-y-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <button
              onClick={onBackToHome}
              className="hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Home
            </button>
            <span>/</span>
            <span className="text-[#FF5A00] font-semibold">Important Business Services</span>
          </div>

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-[#FF5A00]" />
              OFFICIAL BUSINESS COMPLIANCE CATALOGUE
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Essential Services for Indian Enterprises
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Fast-track company incorporation, government licensing, tax registration, and brand protection with 100% paperless execution.
            </p>
          </div>

          {/* Search Bar Component */}
          <div className="max-w-2xl pt-2">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
              <input
                type="text"
                placeholder="Search key service (e.g. Private Limited, GST, FSSAI, Proprietorship, Trademark)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-white text-slate-900 placeholder-slate-400 text-sm font-medium border border-slate-200 shadow-md focus:outline-none focus:ring-2 focus:ring-[#FF5A00]"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3.5 text-slate-400 hover:text-slate-600 text-xs font-bold bg-slate-100 hover:bg-slate-200 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 py-10 space-y-14">
        
        {/* SECTION 1: TOP IMPORTANT FEATURED SERVICES SPOTLIGHT */}
        {!searchTerm && (
          <section className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-slate-200 pb-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#FF5A00] uppercase tracking-wider mb-1">
                  <Star className="w-4 h-4 fill-[#FF5A00] text-[#FF5A00]" />
                  MOST REQUESTED
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B3D91] tracking-tight">
                  Top Important Services
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  Our core, high-demand compliance packages trusted by 10,000+ business owners across India.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {IMPORTANT_FEATURED_SERVICES.map((srv, idx) => {
                const IconComponent = srv.icon;
                return (
                  <div
                    key={idx}
                    onClick={() => onSelectService(srv.targetService)}
                    className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#0B3D91] transition-all p-5 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center group-hover:bg-[#0B3D91] group-hover:text-white transition-colors shadow-xs">
                          <IconComponent className="w-5 h-5 text-[#FF5A00] group-hover:text-white transition-colors" />
                        </div>
                        <span className={`text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-2xs ${srv.badgeColor}`}>
                          {srv.badge}
                        </span>
                      </div>

                      <div className="space-y-1.5">
                        <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                          {srv.category}
                        </span>
                        <h3 className="font-extrabold text-base text-slate-900 group-hover:text-[#0B3D91] transition-colors leading-snug">
                          {srv.name}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {srv.desc}
                        </p>
                      </div>

                      {/* Key Highlight Bullets */}
                      <ul className="space-y-1.5 pt-2 border-t border-slate-100 text-xs">
                        {srv.highlights.map((item, i) => (
                          <li key={i} className="flex items-center gap-1.5 text-slate-600 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5A00] flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0B3D91]">
                      <span>Apply Now</span>
                      <div className="w-7 h-7 rounded-full bg-blue-50 text-[#0B3D91] flex items-center justify-center group-hover:bg-[#FF5A00] group-hover:text-white transition-all">
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Category Filters Pill Strip */}
        <div className="space-y-4 pt-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-extrabold text-slate-400 uppercase tracking-wider">
              Filter By Service Category
            </h3>
            {searchTerm && (
              <span className="text-xs font-bold text-[#0B3D91]">
                Found {totalServicesCount} match(es) for &ldquo;{searchTerm}&rdquo;
              </span>
            )}
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setSelectedCategoryFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategoryFilter === 'all'
                  ? 'bg-[#0B3D91] text-white shadow-xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
              }`}
            >
              All Important Categories
            </button>
            {CATEGORIZED_IMPORTANT_SERVICES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategoryFilter(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors whitespace-nowrap cursor-pointer ${
                  selectedCategoryFilter === cat.id
                    ? 'bg-[#0B3D91] text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* SECTION 2: STREAMLINED IMPORTANT CATEGORIZED SERVICES */}
        {filteredCategoryGroups.length === 0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-4 max-w-md mx-auto">
            <HelpCircle className="w-12 h-12 text-slate-300 mx-auto" />
            <h3 className="font-bold text-lg text-slate-800">No Service Found</h3>
            <p className="text-xs text-slate-500">
              We couldn&apos;t find any key service matching &ldquo;{searchTerm}&rdquo;. Try searching for &lsquo;Proprietorship&rsquo;, &lsquo;FSSAI&rsquo;, &lsquo;GST&rsquo;, or &lsquo;Trademark&rsquo;.
            </p>
            <button
              onClick={() => setSearchTerm('')}
              className="px-4 py-2 bg-[#0B3D91] text-white text-xs font-bold rounded-xl hover:bg-[#082A66] transition-colors"
            >
              Reset Search
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            {filteredCategoryGroups.map((catGroup) => {
              const CatIcon = catGroup.icon;
              return (
                <section key={catGroup.id} className="space-y-4">
                  <div className="flex items-center justify-between border-b-2 border-[#0B3D91] pb-2">
                    <div className="space-y-1">
                      <h2 className="text-lg sm:text-xl font-extrabold text-[#0B3D91] uppercase tracking-wider flex items-center gap-2">
                        <CatIcon className="w-5 h-5 text-[#FF5A00]" />
                        {catGroup.title}
                      </h2>
                      <p className="text-xs text-slate-500">{catGroup.desc}</p>
                    </div>
                    <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                      {catGroup.services.length} Key Services
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {catGroup.services.map((srv) => {
                      const IconComp = srv.icon;
                      return (
                        <div
                          key={srv.name}
                          onClick={() => onSelectService(srv.name)}
                          className="bg-white border border-slate-200 rounded-2xl p-5 hover:border-[#0B3D91] hover:shadow-md transition-all group flex flex-col justify-between cursor-pointer relative"
                        >
                          <div className="space-y-3">
                            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center group-hover:bg-[#0B3D91] group-hover:text-white transition-colors">
                              <IconComp className="w-5 h-5 text-[#FF5A00] group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="font-bold text-sm text-slate-900 group-hover:text-[#0B3D91] transition-colors leading-snug">
                              {srv.name}
                            </h3>
                            <p className="text-xs text-slate-500 leading-relaxed">
                              {srv.desc}
                            </p>
                          </div>

                          <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0B3D91]">
                            <span>View Details &amp; Apply</span>
                            <ArrowRight className="w-4 h-4 text-[#FF5A00] group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              );
            })}
          </div>
        )}

        {/* SECTION 3: HOW IT WORKS / 4-STEP PROCESS (IMPORTANT CONTENT) */}
        {!searchTerm && (
          <section className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10 space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#FF5A00] text-xs font-extrabold uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5 text-[#FF5A00]" />
                SIMPLE &amp; TRANSPARENT PROCESS
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B3D91]">
                How Akshay B2B Solutions Works
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Get your business registered and 100% compliant in 4 easy digital steps.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {[
                {
                  step: '01',
                  title: 'Select Service',
                  desc: 'Choose your desired registration or license package and submit basic details.',
                  icon: Briefcase
                },
                {
                  step: '02',
                  title: 'Upload Documents',
                  desc: 'Share required KYC, address proof, and identity documents through our secure portal.',
                  icon: FileText
                },
                {
                  step: '03',
                  title: 'Expert Processing',
                  desc: 'Our legal & CA team verifies documents and files your application with statutory portals.',
                  icon: ShieldCheck
                },
                {
                  step: '04',
                  title: 'Receive Certificate',
                  desc: 'Get your official government certificate, PAN, TAN, & GSTIN delivered digitally.',
                  icon: CheckCircle2
                }
              ].map((st, idx) => {
                const StIcon = st.icon;
                return (
                  <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-3 relative">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-black text-[#FF5A00] opacity-80">{st.step}</span>
                      <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-[#0B3D91] flex items-center justify-center">
                        <StIcon className="w-4 h-4 text-[#0B3D91]" />
                      </div>
                    </div>
                    <h3 className="font-extrabold text-sm text-[#0B3D91]">{st.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{st.desc}</p>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* SECTION 4: WHY CHOOSE US & TRUST METRICS (IMPORTANT CONTENT) */}
        {!searchTerm && (
          <section className="bg-gradient-to-r from-[#0B3D91] to-[#082a66] text-white rounded-3xl p-8 sm:p-12 space-y-8 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 border border-orange-400/30 text-xs font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5 text-orange-400" />
                  THE TRUSTED COMPLIANCE PARTNER
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight">
                  Why 10,000+ Business Owners Rely On Us
                </h2>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  We blend deep corporate legal expertise with paperless digital workflows to make government compliance fast, affordable, and stress-free.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="bg-white/10 backdrop-blur-xs p-4 rounded-2xl border border-white/10 space-y-1">
                    <div className="text-2xl font-black text-orange-400">10,000+</div>
                    <div className="text-xs font-bold text-slate-200">Businesses Assisted</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-xs p-4 rounded-2xl border border-white/10 space-y-1">
                    <div className="text-2xl font-black text-orange-400">99.4%</div>
                    <div className="text-xs font-bold text-slate-200">Approval Rate</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { title: '100% Online Execution', desc: 'No physical branch visits or manual paperwork required.', icon: Laptop },
                  { title: 'Transparent Pricing', desc: 'Fixed clear charges with zero hidden government costs.', icon: IndianRupee },
                  { title: 'CA & Legal Support', desc: 'Direct advisory from seasoned corporate legal experts.', icon: Headphones },
                  { title: 'SLA Guarantee', desc: 'Fastest turnarounds backed by quality audit checks.', icon: Clock }
                ].map((item, idx) => {
                  const FeatureIcon = item.icon;
                  return (
                    <div key={idx} className="bg-white/10 backdrop-blur-xs p-4 rounded-2xl border border-white/10 space-y-2">
                      <FeatureIcon className="w-6 h-6 text-orange-400" />
                      <h3 className="font-extrabold text-sm text-white">{item.title}</h3>
                      <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* SECTION 5: FREQUENTLY ASKED QUESTIONS (CONTENT) */}
        {!searchTerm && (
          <section className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#0B3D91] text-xs font-extrabold uppercase tracking-wider">
                <HelpCircle className="w-3.5 h-3.5 text-[#FF5A00]" />
                NEED HELP?
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B3D91]">
                Frequently Asked Questions
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Common questions about business registration, licensing, and compliance in India.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-3">
              {IMPORTANT_FAQS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-2xs transition-all"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 font-extrabold text-sm sm:text-base text-[#0B3D91] hover:bg-slate-50 transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-[#FF5A00] flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* SECTION 6: CONSULTATION & PAYMENT CTA */}
        <section className="bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-3xl p-8 sm:p-10 text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-3 relative z-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              Need Assistance Picking the Right Service?
            </h2>
            <p className="text-xs sm:text-sm text-amber-50 leading-relaxed">
              Talk to our business compliance advisors today for a free consultation or pay securely online.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
              <button
                onClick={() => onSelectService('book-consultation')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white text-[#0B3D91] font-extrabold text-xs sm:text-sm shadow-md hover:bg-slate-100 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-[#FF5A00]" /> Book Free Consultation
              </button>
              <button
                onClick={() => onSelectService('make-payment')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#0B3D91] text-white font-extrabold text-xs sm:text-sm shadow-md hover:bg-[#082a66] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <IndianRupee className="w-4 h-4 text-orange-400" /> Make Direct Payment
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer onSelectService={onSelectService} />
    </div>
  );
};


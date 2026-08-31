import React, { useState } from 'react';
import {
  FileSignature, ChevronRight, CheckCircle2,
  Clock, Shield, Award, MapPin, Search,
  Briefcase, Scale, ArrowRight, Home, Users, CheckSquare, Plus, Minus
} from 'lucide-react';
import { GlobalMultiStepLeadForm } from '../components/GlobalMultiStepLeadForm';
import { COMPANY_DETAILS } from '../data/servicesData';
import { ALL_CATEGORY_SERVICES } from '../data/categoryServices';
import { MobileAppBanner } from '../components/MobileAppBanner';

interface LegalDraftingLandingProps {
  onBackToHome: () => void;
  onSelectService: (serviceName: string) => void;
  onApply: (serviceName: string) => void;
}

export const LegalDraftingLanding: React.FC<LegalDraftingLandingProps> = ({
  onBackToHome,
  onSelectService,
  onApply
}) => {
  const [activeSection, setActiveSection] = useState('overview');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const FAQS = [
    {
      q: 'Are these drafted contracts legally valid in Indian courts?',
      a: 'Yes. All our agreements are drafted by practicing advocates and senior corporate consultants in strict adherence to the Indian Contract Act, 1872, and other relevant statutes, ensuring complete legal enforceability in Indian courts.'
    },
    {
      q: 'How long does it take to draft a custom agreement?',
      a: 'Standard drafts like NDAs or Employment Contracts are typically delivered within 24 to 48 hours. Complex agreements (e.g., Shareholders Agreements) may take 3-4 days based on the intricacies of the commercial terms.'
    },
    {
      q: 'Is stamp duty included, or do we pay it separately?',
      a: 'Stamp duty and notary charges are paid separately based on the specific state jurisdiction and the transaction value. We provide exact calculations and guidance for executing the document appropriately.'
    },
    {
      q: 'Can I request revisions if I need changes in the draft?',
      a: 'Absolutely. We offer free revision support on the initial draft to ensure all your commercial requirements and specific protective clauses are perfectly captured.'
    },
    {
      q: 'What is the difference between a draft and a registered agreement?',
      a: 'A draft is the finalized text of the contract. An agreement becomes registered when it is executed on appropriate stamp paper and, where required by law (like commercial leases over 11 months), presented before the Sub-Registrar.'
    },
    {
      q: 'Does akshayb2bsolutions handle complete end-to-end execution?',
      a: 'Yes, beyond drafting, our team guides you through the process of e-stamping, digital signatures (if applicable), and physical registration to ensure your document is fully executed and binding.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-500 selection:text-white">
      {/* 0. BREADCRUMB */}
      <div className="bg-white border-b border-slate-200/80 py-3 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto text-xs text-slate-500 flex items-center gap-2 flex-wrap font-medium">
          <button 
            onClick={onBackToHome}
            className="text-[#0B3D91] hover:text-[#FF5A00] transition-colors cursor-pointer"
          >
            Home
          </button>
          <span className="text-slate-400">&gt;</span>
          <span className="text-slate-900 font-bold">Legal Drafting & Agreements</span>
        </div>
      </div>

      {/* 1. HERO SECTION */}
      <div className="bg-slate-900 text-white pt-8 pb-16 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-[#FF6B00] blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#FF6B00] text-xs font-bold uppercase tracking-widest shadow-lg">
              <Scale className="w-4 h-4" />
              <span>Noida's Premium Legal Desk</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1]">
              Legal Drafting <br className="hidden sm:block" />
              <span className="text-[#0D47A1] bg-white px-2 rounded-lg mt-2 inline-block">
                & Agreements
              </span>
            </h1>

            <p className="text-lg sm:text-xl font-medium text-slate-300">
              Draft & Review Standard Legal Contracts with Certified Legal Experts
            </p>

            <p className="text-sm text-slate-400 leading-relaxed max-w-xl border-l-2 border-[#FF6B00] pl-4">
              Protect your business interests, ensure statutory compliance, and avoid future litigation with watertight agreements binding and enforceable under the Indian Contract Act, 1872.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
              {[
                { icon: Clock, text: '24-48 Hrs Turnaround' },
                { icon: FileSignature, text: 'Custom Legal Tailoring' },
                { icon: Users, text: 'Experienced Advocates & CAs' },
                { icon: Shield, text: '100% Legally Binding' },
                { icon: CheckSquare, text: 'Free Revision Support' },
                { icon: Award, text: 'Dedicated Legal Specialist' },
              ].map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-300 bg-white/5 p-2 rounded-lg border border-white/10">
                  <badge.icon className="w-4 h-4 text-[#FF6B00]" />
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-800">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white">10,000+</span>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Drafts Prepared</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white">5,000+</span>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Happy Businesses</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white">15+</span>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">Legal Advocates</span>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 text-[10px] font-bold tracking-wider text-slate-300 uppercase">
              <span className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded"><span className="text-yellow-400">★</span> Google 4.9</span>
              <span className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded"><span className="text-yellow-400">★</span> Ambitionbox 4.9</span>
              <span className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded"><span className="text-yellow-400">★</span> Trustpilot 4.7</span>
            </div>
          </div>

          {/* 2. LEAD CAPTURE FORM (multi-step) */}
          <div className="lg:ml-auto w-full max-w-[500px]" id="legal-drafting-form">
            <GlobalMultiStepLeadForm
              serviceName="Legal Drafting & Agreements"
              badgeText="⚡ ADVOCATE VETTED DRAFTS"
              customTrustPoints={[
                'Drafted by High Court & Senior Corporate Advocates',
                'Customized to your exact business clause requirements',
                '100% Legal Enforceability under Indian Contract Act',
                'Fast turnaround with 2 free revision rounds'
              ]}
              onSuccess={() => onApply('Legal Drafting Form Submitted')}
            />
          </div>
        </div>
      </div>

      {/* 3. STICKY ANCHOR NAVIGATION */}
      <div className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-6 overflow-x-auto py-3 hide-scrollbar">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'essential-agreements', label: 'Essential Agreements' },
              { id: 'advantages', label: 'Advantages' },
              { id: 'checklist', label: 'Pre-Drafting Checklist' },
              { id: 'eligibility', label: 'Eligibility & Scope' },
              { id: 'required-info', label: 'Required Information' },
              { id: 'steps', label: 'Drafting Steps' },
              { id: 'enforceability', label: 'Legal Enforceability' },
              { id: 'post-drafting', label: 'Post-Drafting Compliance' },
              { id: 'comparison', label: 'Drafting vs Templates' },
              { id: 'statutory', label: 'Statutory Framework' },
              { id: 'custom-clauses', label: 'Custom Clauses' },
              { id: 'why-us', label: 'Why akshayb2bsolutions?' },
              { id: 'faq', label: 'FAQs' }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-colors cursor-pointer ${
                  activeSection === link.id ? 'text-[#0D47A1] border-b-2 border-[#0D47A1] pb-1' : 'text-slate-500 hover:text-slate-900'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-16">
          {/* 4. CONTENT SECTIONS */}
          
          {/* OVERVIEW */}
          <section id="overview" className="scroll-mt-24 space-y-6">
            <h2 className="text-3xl font-black text-slate-900 border-b border-slate-200 pb-4">
              Overview of Legal Drafting
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              Legal drafting is the art and science of constructing structured legal documents that accurately reflect commercial intentions while providing maximum protection under the law.
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700">
                  <strong className="text-slate-900">Scope of Work:</strong> Defining the exact services, deliverables, and expectations to prevent future disputes.
                </p>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700">
                  <strong className="text-slate-900">Risk Mitigation:</strong> Allocating liabilities and embedding safeguards for financial and operational risks.
                </p>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700">
                  <strong className="text-slate-900">Custom Clauses:</strong> Structuring specific covenants that generic templates fail to cover.
                </p>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700">
                  <strong className="text-slate-900">Dispute Prevention:</strong> Establishing clear mechanisms for arbitration and jurisdiction.
                </p>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700">
                  <strong className="text-slate-900">Broad Applicability:</strong> Applicable across employment, vendor sourcing, IP licensing, and equity distribution.
                </p>
              </li>
            </ul>
            <p className="text-slate-600 leading-relaxed text-sm bg-blue-50 p-4 rounded-xl border border-blue-100">
              Partnering with <strong className="text-[#0D47A1]">akshayb2bsolutions</strong> ensures that your contracts are drafted by seasoned legal professionals who prioritize your business security over generic boilerplate text.
            </p>
          </section>

          {/* ESSENTIAL AGREEMENTS */}
          <section id="essential-agreements" className="scroll-mt-24 space-y-6">
            <h2 className="text-3xl font-black text-slate-900 border-b border-slate-200 pb-4">
              Essential Agreements for Businesses
            </h2>
            <div className="prose prose-slate max-w-none text-sm text-slate-600">
              <p>
                In today's complex commercial landscape, relying on verbal commitments or generic online templates poses a massive risk to business continuity. Regulatory frameworks require precision in detailing rights, obligations, and compliance standards. A poorly drafted document can render a contract entirely void under the Indian Contract Act, stripping you of legal recourse.
              </p>
              <p>
                At <strong className="text-[#0D47A1]">akshayb2bsolutions</strong>, our advocate-vetted process guarantees that every clause is meticulously tailored to your industry's specific regulatory demands. Whether it is safeguarding trade secrets through an NDA or establishing operational clarity via an SLA, our experts ensure your business remains legally fortified against unforeseen liabilities.
              </p>
            </div>
          </section>

          {/* ADVANTAGES */}
          <section id="advantages" className="scroll-mt-24 space-y-6">
            <h2 className="text-3xl font-black text-slate-900 border-b border-slate-200 pb-4">
              Advantages of Professional Drafting
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Custom Tailoring', desc: 'Contracts perfectly aligned with your unique operational and commercial needs.' },
                { title: 'Legal Immunity', desc: 'Robust defense mechanisms built-in against potential lawsuits and breaches.' },
                { title: 'Clear Rights & Obligations', desc: 'Eliminates ambiguity by precisely defining what each party must deliver.' },
                { title: 'Smooth Dispute Resolution', desc: 'Pre-defined arbitration and jurisdiction clauses save time and legal costs.' },
                { title: 'Compliance Assurance', desc: 'Guarantees adherence to state and central commercial laws automatically.' },
                { title: 'Intellectual Property Protection', desc: 'Safeguards your brand assets, trade secrets, and proprietary data.' }
              ].map((adv, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-1">{adv.title}</h4>
                  <p className="text-xs text-slate-600">{adv.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CHECKLIST */}
          <section id="checklist" className="scroll-mt-24 space-y-6">
            <h2 className="text-3xl font-black text-slate-900 border-b border-slate-200 pb-4">
              Pre-Drafting Checklist
            </h2>
            <ul className="space-y-4">
              {[
                { title: 'Party Details', desc: 'Complete legal names, addresses, and authorized signatory details.' },
                { title: 'Consideration Terms', desc: 'Exact payment structures, timelines, and financial obligations.' },
                { title: 'Termination Clauses', desc: 'Conditions under which the contract can be legally exited.' },
                { title: 'Jurisdiction Preference', desc: 'Preferred city or state courts for handling legal disputes.' },
                { title: 'Specific Covenants', desc: 'Unique restrictions or performance requirements.' },
                { title: 'Document Verification', desc: 'Our team at akshayb2bsolutions cross-verifies all KYC and entity details.' }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700">
                    <strong className="text-slate-900">{item.title}:</strong> {item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          {/* ELIGIBILITY & SCOPE */}
          <section id="eligibility" className="scroll-mt-24 space-y-6">
            <h2 className="text-3xl font-black text-slate-900 border-b border-slate-200 pb-4">
              Eligibility & Scope
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              As per Section 11 of the Indian Contract Act, 1872, only legally competent parties can enter into binding agreements. 
            </p>
            <ul className="space-y-4">
              {[
                { title: 'Minors Exclusion', desc: 'Individuals under 18 cannot enter into enforceable contracts.' },
                { title: 'Sound Mind Requirement', desc: 'Parties must be of sound mind and capable of understanding the terms.' },
                { title: 'Lawful Object', desc: 'The purpose of the agreement must not violate any Indian laws.' },
                { title: 'Sector-Specific Regulatory Limits', desc: 'Certain agreements require specific sectoral licenses to be valid.' },
                { title: 'Address Requirements', desc: 'Valid registered addresses for all executing parties.' },
                { title: 'Identity Verification', desc: 'Valid government-issued IDs for executing signatories.' },
                { title: 'Eligibility Screening Role', desc: 'akshayb2bsolutions performs initial vetting to ensure party competence.' }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700">
                    <strong className="text-slate-900">{item.title}:</strong> {item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          {/* REQUIRED INFO */}
          <section id="required-info" className="scroll-mt-24 space-y-6">
            <h2 className="text-3xl font-black text-slate-900 border-b border-slate-200 pb-4">
              Required Information & Documents
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              To craft a precise document, basic identification and commercial intent details are mandatory.
            </p>
            <ul className="space-y-4">
              {[
                { title: 'ID Proofs', desc: 'PAN, Aadhaar, or Passport copies of the signing authorities.' },
                { title: 'Entity Incorporation Docs', desc: 'CIN, GSTIN, or MSME certificates of the participating businesses.' },
                { title: 'Commercial Term Sheet', desc: 'An outline of the agreed-upon business terms and deliverables.' },
                { title: 'Existing Draft Copies', desc: 'Previous agreements or templates (if applicable for review).' },
                { title: 'Bank/Financial Terms', desc: 'Account details and payment milestones.' },
                { title: 'Data Protection Guarantee', desc: 'akshayb2bsolutions ensures 100% confidentiality of your submitted data.' }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700">
                    <strong className="text-slate-900">{item.title}:</strong> {item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          {/* STEPS */}
          <section id="steps" className="scroll-mt-24 space-y-6">
            <h2 className="text-3xl font-black text-slate-900 border-b border-slate-200 pb-4">
              Drafting Steps
            </h2>
            <div className="space-y-4">
              {[
                { title: 'Request Consultation', desc: 'Submit your requirement details through our secure portal.' },
                { title: 'Legal Discovery & Requirement Gathering', desc: 'Our advocates analyze your commercial intent and risks.' },
                { title: 'First Draft Creation', desc: 'A bespoke legal document is drafted based on your input.' },
                { title: 'Client Review & Revisions', desc: 'You review the document and request any necessary adjustments.' },
                { title: 'Final Legal Vetting', desc: 'Senior counsel approves the final, error-free version.' },
                { title: 'Stamp Duty & Execution Guidance', desc: 'We assist with stamping and signing procedures.' }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-4 items-start bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="w-8 h-8 rounded-full bg-[#0D47A1] text-white font-black flex items-center justify-center flex-shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{step.title}</h4>
                    <p className="text-xs text-slate-600 mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* LEGAL ENFORCEABILITY */}
          <section id="enforceability" className="scroll-mt-24 space-y-6">
            <h2 className="text-3xl font-black text-slate-900 border-b border-slate-200 pb-4">
              Legal Enforceability & Status
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">1. Enforceability under Indian Law</h3>
                <p className="text-sm text-slate-600 mt-1">Contracts are strictly drafted to comply with the Indian Contract Act, ensuring complete validity in civil courts.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">2. Stamp Duty & Registration Requirements</h3>
                <p className="text-sm text-slate-600 mt-1">Adherence to the Indian Stamp Act, 1899, with accurate calculations for state-specific duty rates.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">3. Digital Signatures & E-Contracts (IT Act 2000)</h3>
                <p className="text-sm text-slate-600 mt-1">Full support for executing agreements via legally recognized Class 3 DSCs or Aadhaar eSign.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">4. Dispute Resolution & Arbitration Clauses</h3>
                <p className="text-sm text-slate-600 mt-1">Integration of robust Arbitration and Conciliation Act frameworks to bypass lengthy court battles.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">5. Company's Role in Legal Compliance Safeguards</h3>
                <p className="text-sm text-slate-600 mt-1"><strong className="text-[#0D47A1]">akshayb2bsolutions</strong> continuously monitors changing legislations to keep your templates fully compliant.</p>
              </div>
            </div>
          </section>

          {/* POST-DRAFTING COMPLIANCE */}
          <section id="post-drafting" className="scroll-mt-24 space-y-6">
            <h2 className="text-3xl font-black text-slate-900 border-b border-slate-200 pb-4">
              Post-Drafting Compliance
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              Effective contract lifecycle management ensures that your agreements remain active and enforceable.
            </p>
            <ul className="space-y-4">
              {[
                { title: 'Term Renewal Tracking', desc: 'Monitoring expiry dates to negotiate and renew terms timely.' },
                { title: 'Performance Milestones', desc: 'Tracking deliverables mapped against payment tranches.' },
                { title: 'Periodic Legal Reviews', desc: 'Auditing old contracts against new statutory changes.' },
                { title: 'Amendment Execution', desc: 'Drafting valid addendums to modify existing clauses.' },
                { title: 'Breach Notifications', desc: 'Issuing formal legal notices in case of non-compliance.' },
                { title: 'Recordkeeping', desc: 'Secure archival of physical and digital executed copies.' },
                { title: 'Ongoing Legal Counsel', desc: 'akshayb2bsolutions provides continuous advisory support post-execution.' }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700">
                    <strong className="text-slate-900">{item.title}:</strong> {item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          {/* COMPARISON TABLE */}
          <section id="comparison" className="scroll-mt-24 space-y-6">
            <h2 className="text-3xl font-black text-slate-900 border-b border-slate-200 pb-4">
              Custom Legal Drafting vs Generic Templates
            </h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-4 font-bold border-b border-slate-700">Feature</th>
                    <th className="p-4 font-bold border-b border-slate-700 text-[#FF6B00]">Custom Drafting (akshayb2bsolutions)</th>
                    <th className="p-4 font-bold border-b border-slate-700">Generic Online Templates</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {[
                    ['Legal Enforceability', '100% Guaranteed in Indian Courts', 'Highly Questionable & Risky'],
                    ['Customization Level', 'Bespoke to specific commercial needs', 'Rigid boilerplate text'],
                    ['Risk Protection', 'High (Mitigates unique liabilities)', 'Low (Ignores nuanced risks)'],
                    ['Jurisdiction Alignment', 'Tailored to state-specific laws', 'Vague or incorrect jurisdiction'],
                    ['Industry Compliance', 'Yes (Sector-specific clauses included)', 'No (One-size-fits-all approach)'],
                    ['Lawyer Consultation', 'Included (Direct expert advice)', 'None (Self-service only)'],
                    ['Future Dispute Immunity', 'Strong Arbitration Clauses', 'Weak or absent dispute resolution'],
                    ['Ideal For', 'High-stakes business deals, employees, assets', 'Low-value, non-critical matters']
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-bold text-slate-900">{row[0]}</td>
                      <td className="p-4 font-semibold text-green-700 bg-green-50/30">{row[1]}</td>
                      <td className="p-4 text-slate-500">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* STATUTORY & TAX */}
          <section id="statutory" className="scroll-mt-24 space-y-6">
            <h2 className="text-3xl font-black text-slate-900 border-b border-slate-200 pb-4">
              Statutory & Tax Implications
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              Understanding the tax and duty implications ensures your contract is legally admissible.
            </p>
            <ul className="space-y-4">
              {[
                { title: 'Stamp Duty Rules', desc: 'Inadequate stamp duty renders a document inadmissible in court.' },
                { title: 'GST on Legal Services', desc: 'Understanding Reverse Charge Mechanism (RCM) applicability on legal fees.' },
                { title: 'Tax Deduction Clauses', desc: 'Clear guidelines on TDS responsibilities between parties.' },
                { title: 'Indemnity Terms', desc: 'Tax indemnification clauses to protect against future tax liabilities.' },
                { title: 'Dispute Jurisdiction Fees', desc: 'Court fee calculations based on the claim amount.' },
                { title: 'Company\'s Advisory Support', desc: 'akshayb2bsolutions guides you through exact stamp duty calculations across India.' }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700">
                    <strong className="text-slate-900">{item.title}:</strong> {item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          {/* CUSTOM CLAUSES */}
          <section id="custom-clauses" className="scroll-mt-24 space-y-6">
            <h2 className="text-3xl font-black text-slate-900 border-b border-slate-200 pb-4">
              Custom Clauses & Special Provisions
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm">
              The true value of a custom agreement lies in its protective provisions.
            </p>
            <ul className="space-y-4">
              {[
                { title: 'Indemnity', desc: 'Forces the defaulting party to compensate for losses incurred.' },
                { title: 'Non-Compete', desc: 'Prevents partners or employees from starting rival businesses.' },
                { title: 'Severability', desc: 'Ensures the contract survives even if one clause is deemed invalid.' },
                { title: 'Force Majeure', desc: 'Protects parties from liability during unpredictable acts of god.' },
                { title: 'Confidentiality', desc: 'Binds parties to non-disclosure of proprietary trade secrets.' },
                { title: 'Governing Law', desc: 'Dictates which state\'s laws apply to interpreting the contract.' },
                { title: 'Custom Drafting Support', desc: 'akshayb2bsolutions crafts bespoke clauses tailored precisely to your operational risks.' }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700">
                    <strong className="text-slate-900">{item.title}:</strong> {item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          {/* HOW WE HELP */}
          <section id="why-us" className="scroll-mt-24 space-y-6">
            <h2 className="text-3xl font-black text-slate-900 border-b border-slate-200 pb-4">
              How akshayb2bsolutions Helps
            </h2>
            <ul className="space-y-4">
              {[
                { title: 'Legal Assessment', desc: 'We conduct a deep dive into your business model before drafting.' },
                { title: 'Precision Drafting', desc: 'Eliminating ambiguous language that leads to loopholes.' },
                { title: 'Senior Advocate Review', desc: 'Every draft is vetted by an experienced legal professional.' },
                { title: 'Execution & Stamp Duty Guidance', desc: 'Complete assistance on the final signing process.' },
                { title: 'Post-Execution Support', desc: 'We remain available for amendments or breach notices.' }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#FF6B00] flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700">
                    <strong className="text-slate-900">{item.title}:</strong> {item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          {/* FAQs */}
          <section id="faq" className="scroll-mt-24 space-y-6">
            <h2 className="text-3xl font-black text-slate-900 border-b border-slate-200 pb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left font-bold text-slate-900 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {openFaq === idx ? (
                      <Minus className="w-5 h-5 text-[#FF6B00] flex-shrink-0" />
                    ) : (
                      <Plus className="w-5 h-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-5 text-sm text-slate-600 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* 5. RIGHT SIDEBAR */}
        <div className="hidden lg:block space-y-8">
          <div className="sticky top-24">
            <div className="bg-slate-900 rounded-2xl p-6 shadow-xl text-white">
              <h3 className="text-xl font-bold mb-2">Protect Your Business Now</h3>
              <p className="text-sm text-slate-400 mb-6">Connect with Noida's top legal minds for custom drafting.</p>
              <button 
                onClick={() => onApply('Legal Drafting - Sidebar')}
                className="w-full py-3.5 bg-[#FF6B00] hover:bg-orange-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-orange-500/20"
              >
                Apply For Legal Drafting
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="mt-8 space-y-4">
              <h4 className="font-black text-slate-900 uppercase tracking-wider text-xs">Trust / Why Us</h4>
              <div className="grid grid-cols-1 gap-4">
                {[
                  { title: 'Expert Advocates', desc: 'Vetted network of Bar Council registered lawyers.' },
                  { title: 'Fast Delivery', desc: 'Drafts ready within 24 to 48 hours for standard requests.' },
                  { title: 'Zero Hidden Terms', desc: 'Transparent drafting process with clear explanations.' },
                  { title: '100% Confidential', desc: 'Strict attorney-client privilege maintained at all times.' },
                  { title: 'Dedicated Legal Counsel', desc: 'A single point of contact for your entire case.' },
                  { title: 'Transparent Process', desc: 'No surprises. You review and approve everything.' }
                ].map((feature, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-start gap-3">
                    <Shield className="w-5 h-5 text-[#0D47A1] flex-shrink-0" />
                    <div>
                      <h5 className="font-bold text-slate-900 text-sm">{feature.title}</h5>
                      <p className="text-xs text-slate-500 mt-0.5">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 6. CTA & CROSS-LINKING */}
      <section className="bg-[#0D47A1] py-16 px-4 sm:px-6 mt-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-black text-white">Protect Your Business with Water-Tight Legal Contracts</h2>
          <p className="text-blue-100 text-lg">Leave the legal complexities to our certified advocates.</p>
          <button 
            onClick={() => onApply('Legal Drafting - Bottom CTA')}
            className="px-8 py-4 bg-[#FF6B00] hover:bg-orange-600 text-white font-bold text-lg rounded-xl inline-flex items-center gap-2 transition-all cursor-pointer shadow-xl"
          >
            Apply For Legal Drafting
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <section className="py-16 bg-white px-4 sm:px-6 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-black text-slate-900 mb-8 text-center">Related Services</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Private Limited Incorporation', 'GST Registration', 'Trademark Filing', 
              'Sole Proprietorship', 'Partnership Firm', 'LLP Registration', 
              'NDA Drafting', 'SLA Drafting', 'Shareholder Agreement'
            ].map((srv, idx) => (
              <button 
                key={idx}
                onClick={() => onSelectService(srv)}
                className="px-4 py-2 bg-slate-50 border border-slate-200 hover:border-[#0D47A1] hover:text-[#0D47A1] text-slate-700 rounded-lg text-sm font-semibold transition-all cursor-pointer"
              >
                {srv}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MOBILE APP BANNER */}
      <MobileAppBanner />

      {/* FOOTER DISCLAIMER */}
      <section className="bg-slate-900 text-slate-400 py-8 px-4 sm:px-6 text-center text-xs">
        <div className="max-w-5xl mx-auto space-y-4">
          <p className="font-bold text-slate-300">akshayb2bsolutions | Noida Headquarters</p>
          <p>
            <strong className="text-white">Disclaimer:</strong> This is not a Government run website and the form is not the actual registration form; it is just to collect information from our clients so that our expert can easily understand their business or needs. The fee collected on this website is a consultancy fee, separate from government fees.
          </p>
          <div className="pt-4 border-t border-slate-800">
            &copy; {new Date().getFullYear()} akshayb2bsolutions. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
};

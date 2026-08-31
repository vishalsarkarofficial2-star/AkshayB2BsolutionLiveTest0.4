import React from 'react';
import {
  ShieldCheck,
  Scale,
  FileText,
  CheckCircle2,
  AlertCircle,
  Clock,
  Award,
  BadgeCheck,
  HelpCircle,
  Building2,
  DollarSign,
  Briefcase,
  Users,
  ChevronDown,
  ArrowRight
} from 'lucide-react';

interface ContentProps {
  onScrollToForm: () => void;
  openFaqIndex: number | null;
  setOpenFaqIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

export const FAQ_ITEMS = [
  {
    q: 'Is registration of a Partnership Firm mandatory in India?',
    a: 'Registration under the Indian Partnership Act, 1932 is optional at inception. However, an unregistered firm cannot file legal suits against third parties or enforce contractual rights in court, making formal RoF registration strongly recommended.'
  },
  {
    q: 'What are the minimum and maximum partner requirements for a partnership firm?',
    a: 'A minimum of 2 partners is legally required to form a partnership firm. Under Section 464 of the Companies Act, 2013 read with relevant rules, the maximum number of partners permitted in a general partnership firm is capped at 50 individuals.'
  },
  {
    q: 'Can a Partnership Firm be converted into an LLP or Private Limited Company later?',
    a: 'Yes, a registered partnership firm can seamlessly convert into a Limited Liability Partnership (LLP) under Chapter X of the LLP Act or into a Private Limited Company under Part I of Chapter XXI of the Companies Act, 2013 without incurring capital gains tax under prescribed conditions.'
  },
  {
    q: 'What key documents are required for Partnership Firm registration?',
    a: 'Essential documents include PAN cards and Aadhaar/voter IDs of all partners, notarized/stamped Partnership Deed, proof of principal place of business (electricity bill/rent agreement + NOC), passport-size photographs, and signed Form 1 application.'
  },
  {
    q: 'How long does it take to obtain the Partnership Registration Certificate?',
    a: 'Deed drafting and partner execution take 2-3 working days. Total Registrar of Firms (RoF) verification and certificate issuance typically take between 7 to 14 working days depending on state government processing speeds.'
  },
  {
    q: 'When is GST registration mandatory for a Partnership Firm?',
    a: 'GST registration is mandatory if aggregate annual turnover exceeds ₹40 Lakhs for goods suppliers (₹20 Lakhs for special category states) or ₹20 Lakhs for service providers (₹10 Lakhs for special category states), or if conducting inter-state supply.'
  }
];

export const PartnershipContentSections: React.FC<ContentProps> = ({
  onScrollToForm,
  openFaqIndex,
  setOpenFaqIndex
}) => {
  return (
    <div className="space-y-16 py-6 text-slate-800 text-sm leading-relaxed">
      {/* a) OVERVIEW ON PARTNERSHIP FIRM */}
      <section id="overview" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-[#0B3D91] text-xs font-bold uppercase tracking-wider">
            Section 1
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Overview on Partnership Firm
          </h2>
        </div>
        <p className="font-medium text-slate-900">
          A Partnership Firm is a premier traditional business entity structured by two or more competent individuals who mutually agree to combine their financial capital, professional expertise, and managerial abilities to operate a commercial venture and share profits and losses. Governed comprehensively under the Indian Partnership Act, 1932, it represents one of India's most agile and accessible co-founding arrangements.
        </p>
        <p>
          Unlike rigid corporate setups, a partnership firm affords unparalleled operational flexibility, allowing co-founders to tailor internal management, profit-sharing ratios, capital interests, and executive duties through a customized Partnership Deed. While registration with the state Registrar of Firms (RoF) is legally optional at inception, formal registration confers pivotal legal advantages—such as the statutory right to enforce contracts against third parties in court, seamless institutional bank account onboarding, and eligibility for state and central government tenders.
        </p>
      </section>

      {/* b) PARTNERSHIP FIRM REGISTRATION */}
      <section id="registration" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-[#0B3D91] text-xs font-bold uppercase tracking-wider">
            Section 2
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Partnership Firm Registration
          </h2>
        </div>
        <p>
          Partnership firm registration is the formal administrative process of submitting the executed partnership deed and prescribed statutory application (Form 1) to the Registrar of Firms (RoF) within the state jurisdiction where the firm's principal place of business is located. Although the Indian Partnership Act, 1932 permits unregistered firms to conduct daily trade, an unregistered firm suffers severe legal disabilities under Section 69, including the inability to file civil suits against defaulting clients, vendors, or breach of contract.
        </p>
        <p>
          Upon submission and verification of the deed, address proofs, partner identities, and requisite state stamp duties, the Registrar enters the firm's particulars into the Register of Firms and issues an official <strong>Certificate of Registration</strong>. Akshay B2B Solutions assists co-founders across Noida, Uttar Pradesh, and nationwide in drafting legally airtight deeds, verifying stamp values, coordinating with the RoF, and securing the registration certificate seamlessly.
        </p>
      </section>

      {/* c) WHAT IS A PARTNERSHIP FIRM? */}
      <section id="partnership-firm" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-[#0B3D91] text-xs font-bold uppercase tracking-wider">
            Section 3
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            What is a Partnership Firm?
          </h2>
        </div>
        <p className="font-bold text-base text-slate-900">
          A Partnership Firm is a collective association of two or more individuals who have entered into a contract to carry on a business in common with a view to profit.
        </p>
        <ul className="space-y-2.5">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Multi-Partner Structure:</strong> Requires a minimum of 2 partners and allows up to 50 partners under Indian corporate regulations.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Mutual Agency & Decision-Making:</strong> Every active partner acts as both a principal and an agent for the other partners in day-to-day trade.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Unlimited Joint & Several Liability:</strong> Partners bear collective liability for all firm obligations, debts, and contractual commitments.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Legal Entity Status:</strong> Not a distinct juristic person from its partners, but recognized for tax assessments, PAN, and banking.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Ideal Use Case:</strong> Best suited for professional practices (lawyers, doctors, accountants), retail outlets, local distributors, and family-run trading businesses.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Minimal Compliance Overhead:</strong> Free from mandatory annual MCA filings, statutory director board meetings, or public disclosures.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Imperative Documentation:</strong> Requires a clear, comprehensive Partnership Deed to prevent internal deadlock, dispute, or unexpected dissolution.</span>
          </li>
        </ul>
        <p className="font-bold text-slate-900 bg-slate-50 p-3 rounded-xl border border-slate-200">
          In summary, a partnership firm combines pooled resources and operational autonomy with minimal regulatory burden for growing co-founded enterprises.
        </p>
      </section>

      {/* d) KEY CHARACTERISTICS */}
      <section id="key-characteristics" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-[#0B3D91] text-xs font-bold uppercase tracking-wider">
            Section 4
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Key Characteristics of a Partnership Firm
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
              <Users className="w-4 h-4 text-[#0B3D91]" />
              <span>Overview of Structure</span>
            </h3>
            <p className="text-xs text-slate-600">
              Formed by an explicit written agreement (Partnership Deed) between a minimum of 2 and maximum of 50 natural persons or legal entities capable of contracting under the Indian Contract Act, 1872.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
              <DollarSign className="w-4 h-4 text-[#0B3D91]" />
              <span>Profit Sharing and Liability</span>
            </h3>
            <p className="text-xs text-slate-600">
              Profits and losses are apportioned strictly in accordance with agreed ratios in the deed. Partners carry joint and several unlimited personal liability for any unresolved liabilities of the firm.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
              <Briefcase className="w-4 h-4 text-[#0B3D91]" />
              <span>Management and Decision-Making</span>
            </h3>
            <p className="text-xs text-slate-600">
              All active partners have the statutory right to participate in day-to-day operations and inspect firm accounts, unless explicit management powers are designated to managing partners in the deed.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-[#0B3D91]" />
              <span>Compliance and Naming Guidelines</span>
            </h3>
            <p className="text-xs text-slate-600">
              The proposed firm name must not include restricted terms (like Crown, Emperor, National) or infringe on registered trademarks. Ongoing compliance is primarily restricted to Income Tax and GST.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100">
          <h4 className="font-bold text-[#0B3D91] text-xs uppercase tracking-wider mb-1">
            Key Considerations
          </h4>
          <p className="text-xs text-slate-700">
            Because partners are bound by mutual agency, the commercial actions and contracts signed by one partner legally bind all other partners. A robust dispute-resolution clause and clear partner exit mechanisms are essential.
          </p>
        </div>
      </section>

      {/* e) IMPORTANCE & BENEFITS OF REGISTERING */}
      <section id="importance-benefits" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-[#0B3D91] text-xs font-bold uppercase tracking-wider">
            Section 5
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Importance &amp; Benefits of Registering a Partnership Firm
          </h2>
        </div>
        <p className="font-semibold text-slate-900">
          Registering your partnership firm with the Registrar of Firms elevates your enterprise from an informal arrangement to a legally acknowledged commercial organization. It provides invaluable procedural standing in civil courts and unlocks institutional banking facilities.
        </p>

        <div className="space-y-3 pt-2">
          {[
            {
              title: 'Statutory Legal Recognition',
              desc: 'Bestows formal government-certified validity under the Indian Partnership Act, 1932, serving as conclusive proof of partnership existence.'
            },
            {
              title: 'Right to Sue Third Parties',
              desc: 'Under Section 69 of the Act, only a registered firm and its registered partners possess the lawful capacity to institute legal suits against third parties for debt recovery and breach of contract.'
            },
            {
              title: 'Enhanced Institutional Credibility',
              desc: 'Lenders, commercial banks, institutional vendors, and enterprise clients demand an official RoF registration certificate prior to extending credit or vendor onboarding.'
            },
            {
              title: 'Access to Government Tenders & Schemes',
              desc: 'Registered firms can readily participate in state and central e-procurement tenders, GeM portal registrations, and MSME subsidy programs.'
            },
            {
              title: 'Easy Partner Admission & Expansion',
              desc: 'Statutory records maintain transparency regarding partner entries, retirements, and capital adjustments, preventing ownership conflicts.'
            },
            {
              title: 'Protection of Internal Partner Rights',
              desc: 'Enables individual partners to enforce deed rights against co-partners in judicial forums during dissolutions, profit settlements, or partner misconduct.'
            }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
              <BadgeCheck className="w-5 h-5 text-[#0B3D91] flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
                <p className="text-xs text-slate-600 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-slate-600 italic">
          In conclusion, registering your partnership firm safeguards co-founders from legal disabilities, builds market reputation, and lays the groundwork for sustained commercial growth.
        </p>
      </section>

      {/* g) TYPES OF PARTNERSHIP FIRM IN INDIA */}
      <section id="types" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-[#0B3D91] text-xs font-bold uppercase tracking-wider">
            Section 6
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Types of Partnership Firms in India
          </h2>
        </div>
        <p>
          In India, partnership firms are broadly classified based on registration status and operational duration. By registration, they are categorized into <strong>Registered Partnership Firms</strong> (formally recorded with the RoF) and <strong>Unregistered Partnership Firms</strong> (operating solely on deed without RoF entry). By duration and scope, they include <strong>Partnership at Will</strong> (where no fixed period or specific venture is agreed upon, allowing any partner to dissolve the firm by giving written notice) and <strong>Particular Partnership</strong> (formed exclusively to execute a single venture, contract, or specified duration, automatically terminating upon completion).
        </p>
      </section>

      {/* h) COMPARISON TABLE 1: REGISTERED VS UNREGISTERED */}
      <section id="table-registered-vs-unregistered" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-[#0B3D91] text-xs font-bold uppercase tracking-wider">
            Comparison 1
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Registered Partnership vs Unregistered Partnership
          </h2>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-[#0B3D91] text-white">
                <th className="p-3 font-bold border-r border-blue-900">Aspect</th>
                <th className="p-3 font-bold border-r border-blue-900">Registered Partnership Firm</th>
                <th className="p-3 font-bold">Unregistered Partnership Firm</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr className="bg-white">
                <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Legal Recognition</td>
                <td className="p-3 text-orange-800 font-semibold border-r border-slate-200">Officially certified by Registrar of Firms (RoF)</td>
                <td className="p-3 text-slate-600">Recognized as contract only; no RoF registry</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Right to Enforce Agreements</td>
                <td className="p-3 text-orange-800 font-semibold border-r border-slate-200">Full statutory power to sue third parties in court</td>
                <td className="p-3 text-rose-700 font-semibold">Barred under Section 69 from suing third parties</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Credibility &amp; Trust</td>
                <td className="p-3 text-slate-800 border-r border-slate-200">High trust for bank credit, vendor accounts, and leases</td>
                <td className="p-3 text-slate-600">Moderate to low; banks may require collateral/guarantees</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Participation in Tenders/Schemes</td>
                <td className="p-3 text-orange-800 font-semibold border-r border-slate-200">Eligible for government e-tenders, GeM, and subsidies</td>
                <td className="p-3 text-rose-700 font-semibold">Generally disqualified from major public tenders</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Ease of Formation</td>
                <td className="p-3 text-slate-800 border-r border-slate-200">Requires RoF filing, stamp duty &amp; verification (7-14 days)</td>
                <td className="p-3 text-slate-600">Immediate; simple deed notarization on stamp paper</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Legal &amp; Financial Protection</td>
                <td className="p-3 text-orange-800 font-semibold border-r border-slate-200">Superior judicial enforceability among co-partners</td>
                <td className="p-3 text-slate-600">Limited; complex litigation to resolve partner disputes</td>
              </tr>
              <tr className="bg-orange-50/60 font-bold">
                <td className="p-3 text-[#0B3D91] border-r border-slate-200">Recommendation</td>
                <td className="p-3 text-[#0B3D91] border-r border-slate-200">Strongly recommended for all commercial businesses</td>
                <td className="p-3 text-slate-600">Only suitable for temporary, short-term ventures</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* i) COMPARISON TABLE 2: GENERAL PARTNERSHIP VS LLP */}
      <section id="table-partnership-vs-llp" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-[#0B3D91] text-xs font-bold uppercase tracking-wider">
            Comparison 2
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            General Partnership vs Limited Liability Partnership (LLP)
          </h2>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-[#0B3D91] text-white">
                <th className="p-3 font-bold border-r border-blue-900">Aspect</th>
                <th className="p-3 font-bold border-r border-blue-900">Partnership Firm</th>
                <th className="p-3 font-bold">Limited Liability Partnership (LLP)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr className="bg-white">
                <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Governing Law</td>
                <td className="p-3 text-slate-800 border-r border-slate-200">Indian Partnership Act, 1932</td>
                <td className="p-3 text-slate-800">Limited Liability Partnership Act, 2008</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Liability of Partners</td>
                <td className="p-3 text-rose-700 font-semibold border-r border-slate-200">Unlimited (Personal assets are at risk)</td>
                <td className="p-3 text-orange-800 font-semibold">Limited to agreed capital contribution</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Legal Identity</td>
                <td className="p-3 text-slate-600 border-r border-slate-200">No separate legal personality from partners</td>
                <td className="p-3 text-orange-800 font-semibold">Separate legal juristic person with perpetual succession</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Decision-Making</td>
                <td className="p-3 text-slate-800 border-r border-slate-200">Governed flexibly by Partnership Deed</td>
                <td className="p-3 text-slate-800">Governed by LLP Agreement &amp; Designated Partners</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Ease of Formation</td>
                <td className="p-3 text-orange-800 font-semibold border-r border-slate-200">Extremely simple, fast &amp; cost-effective</td>
                <td className="p-3 text-slate-800">Requires MCA SPICe+/FiLLiP, DIN &amp; DSC approval</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Annual Compliance Burden</td>
                <td className="p-3 text-orange-800 font-semibold border-r border-slate-200">Very low; only ITR-5 and GST returns</td>
                <td className="p-3 text-slate-800">Moderate; Form 8 &amp; Form 11 mandatory MCA filings</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Suitability</td>
                <td className="p-3 text-slate-800 border-r border-slate-200">Small family businesses, traders, local agencies</td>
                <td className="p-3 text-slate-800">Tech startups, consultancies, high-turnover firms</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* j) COMPARISON TABLE 3: KEY DIFFERENCES */}
      <section id="table-differences" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-[#0B3D91] text-xs font-bold uppercase tracking-wider">
            Comparison 3
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Key Differences Across Business Structures
          </h2>
        </div>
        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-[#0B3D91] text-white">
                <th className="p-3 font-bold border-r border-blue-900">Aspect</th>
                <th className="p-3 font-bold border-r border-blue-900">Partnership Firm</th>
                <th className="p-3 font-bold border-r border-blue-900">Private Limited Company</th>
                <th className="p-3 font-bold">Sole Proprietorship</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              <tr className="bg-white">
                <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Registration Authority</td>
                <td className="p-3 text-slate-800 border-r border-slate-200">Registrar of Firms (State RoF)</td>
                <td className="p-3 text-slate-800 border-r border-slate-200">Ministry of Corporate Affairs (MCA)</td>
                <td className="p-3 text-slate-800">Local Authority / MSME / GST</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Statutory Compliance</td>
                <td className="p-3 text-orange-800 font-semibold border-r border-slate-200">Minimal</td>
                <td className="p-3 text-rose-700 font-semibold border-r border-slate-200">High (AOC-4, MGT-7, Audit)</td>
                <td className="p-3 text-orange-800 font-semibold">Minimal to Zero</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Market Credibility</td>
                <td className="p-3 text-slate-800 border-r border-slate-200">Moderate to High</td>
                <td className="p-3 text-orange-800 font-semibold border-r border-slate-200">Highest (Institutional Grade)</td>
                <td className="p-3 text-slate-600">Low to Moderate</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Choice Consideration</td>
                <td className="p-3 text-slate-800 border-r border-slate-200">Multi-person business with low overhead</td>
                <td className="p-3 text-slate-800 border-r border-slate-200">Equity fundraising &amp; VC scalability</td>
                <td className="p-3 text-slate-800">Single individual low-risk venture</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* k) LAWS GOVERNING */}
      <section id="laws-governing" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-[#0B3D91] text-xs font-bold uppercase tracking-wider">
            Section 7
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Laws Governing Partnership Firms in India
          </h2>
        </div>
        <p className="font-bold text-slate-900">
          Partnership firms in India are primarily governed by the Indian Partnership Act, 1932, alongside relevant state stamp acts and complementary commercial statutes.
        </p>
        <ul className="space-y-2 pt-1">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Indian Partnership Act, 1932:</strong> Defines statutory definitions, creation of partnership, mutual rights and duties of partners, relations with third parties, and modes of dissolution.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Indian Contract Act, 1872:</strong> Regulates the foundational validity of the partnership contract, competency of parties, free consent, and lawful object.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>State Stamp Duty Acts:</strong> Dictates the mandatory non-judicial stamp paper value on which the partnership deed must be drafted, varying state-by-state.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Income Tax Act, 1961:</strong> Governs taxation of partnership firms as a separate taxable entity under Section 184 and limits partner remuneration under Section 40(b).</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Goods and Services Tax (GST) Act:</strong> Applies when aggregate turnover crosses statutory thresholds or during inter-state trade.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Consequences of Non-Compliance:</strong> Non-adherence leads to penal interest, tax disallowances of partner salary, and loss of legal standing in commercial disputes.</span>
          </li>
        </ul>
      </section>

      {/* l) ELIGIBILITY AND REQUIREMENTS */}
      <section id="eligibility" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-[#0B3D91] text-xs font-bold uppercase tracking-wider">
            Section 8
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Eligibility and Requirements for Registration
          </h2>
        </div>
        <p className="font-bold text-slate-900">
          Any two or more persons of sound mind, who have attained the age of majority (18+ years) and are legally competent to contract, can form a partnership firm in India.
        </p>
        <ul className="space-y-2 pt-1">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Member Criteria:</strong> Minimum 2 partners; maximum 50 partners. Minors may only be admitted to the benefits of a partnership with unanimous consent.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Proposed Firm Name:</strong> Must be original, distinct, and free from emblems, names of state leaders, or registered trademarks.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Formal Partnership Deed:</strong> Comprehensive legal deed executed on state-prescribed non-judicial stamp paper and notarized.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Principal Place of Business Proof:</strong> Electricity bill, water bill, or property tax receipt not older than 2 months, along with rent agreement and owner NOC.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Partner KYC Documents:</strong> Self-attested PAN cards, Aadhaar cards/passport/voter ID, and passport-size photographs of all partners.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>State RoF Application Form 1:</strong> Duly verified, signed by all partners, and accompanied by statutory registration fees.</span>
          </li>
        </ul>
        <p className="text-xs text-slate-600">
          Meeting these baseline requirements ensures instant verification without procedural rejections from the state Registrar.
        </p>
      </section>

      {/* m) STEP-BY-STEP REGISTRATION PROCESS */}
      <section id="process" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-[#0B3D91] text-xs font-bold uppercase tracking-wider">
            Section 9
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Step-by-Step Registration Process
          </h2>
        </div>
        <p className="text-slate-700">
          Akshay B2B Solutions manages the complete 6-stage registration workflow for your partnership firm with precision:
        </p>
        <div className="space-y-3 pt-1">
          {[
            {
              step: '1',
              title: 'Draft Partnership Deed',
              desc: 'Our legal experts draft a comprehensive, customized deed outlining capital ratios, profit distribution, partner duties, remuneration, interest on capital, and dispute arbitration.'
            },
            {
              step: '2',
              title: 'Obtain Required Documents',
              desc: 'We collect and verify self-attested partner KYCs, address proofs, utility bills, rent agreements, and owner NOC for the business address.'
            },
            {
              step: '3',
              title: 'Choose and Finalize Firm Name',
              desc: 'We conduct rigorous trademark and market availability checks to ensure the proposed name meets Indian Partnership Act standards.'
            },
            {
              step: '4',
              title: 'Submit Application to Registrar of Firms (RoF)',
              desc: 'We prepare and submit statutory Form 1, executed stamped deed, and supporting annexures to the jurisdictional state registrar.'
            },
            {
              step: '5',
              title: 'Pay State Registration Fees & Stamp Duties',
              desc: 'Requisite government fees and state stamp duties are paid directly via the respective state online treasury or RoF portal.'
            },
            {
              step: '6',
              title: 'Receive Certificate of Registration',
              desc: 'Upon scrutiny, the RoF records your firm in the official register and issues the Certificate of Registration.'
            }
          ].map((item) => (
            <div key={item.step} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="w-7 h-7 rounded-lg bg-[#0B3D91] text-white flex items-center justify-center font-black text-xs flex-shrink-0">
                {item.step}
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
                <p className="text-xs text-slate-600 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* n) POST-REGISTRATION COMPLIANCE */}
      <section id="compliance" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-[#0B3D91] text-xs font-bold uppercase tracking-wider">
            Section 10
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Post-Registration Compliance
          </h2>
        </div>
        <p className="font-bold text-slate-900">
          Following certificate issuance, the firm must fulfill essential operational and tax compliances to maintain active legal standing:
        </p>
        <ul className="space-y-2 pt-1">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Firm PAN &amp; TAN Application:</strong> Apply for a separate 10-digit alphanumeric PAN card in the firm's name and TAN for TDS compliance.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Current Bank Account Opening:</strong> Open a dedicated commercial bank account using the certificate, deed, and firm PAN.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Bookkeeping &amp; Income Tax Returns (ITR-5):</strong> Maintain accurate books of account and file annual ITR-5 by July 31 (non-audit) or October 31 (audit).</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Reporting Partner or Address Changes:</strong> File Form 2 or Form 5 with the RoF whenever partners join, resign, or registered office changes.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Labour Law &amp; Industrial Registrations:</strong> Obtain EPF, ESIC, and Professional Tax registrations once employee thresholds are reached.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Sectoral License Renewals:</strong> Secure and renew relevant commercial permits including GST, MSME Udyam, Shop &amp; Establishment, and FSSAI.</span>
          </li>
        </ul>
        <p className="text-xs text-slate-600">
          Adhering to these post-registration norms guarantees seamless business operations and zero statutory penalties.
        </p>
      </section>

      {/* o) TIMELINES FOR REGISTRATION */}
      <section id="timelines" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-[#0B3D91] text-xs font-bold uppercase tracking-wider">
            Section 11
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Timelines for Partnership Firm Registration
          </h2>
        </div>
        <p className="font-bold text-slate-900">
          The overall turnaround time to register a partnership firm in India ranges between 7 to 14 working days.
        </p>
        <ul className="space-y-2 pt-1">
          <li className="flex items-start gap-2">
            <Clock className="w-4 h-4 text-[#0B3D91] flex-shrink-0 mt-1" />
            <span><strong>Deed Drafting &amp; Partner Review:</strong> 1 to 2 working days to draft, customize, and finalize clauses.</span>
          </li>
          <li className="flex items-start gap-2">
            <Clock className="w-4 h-4 text-[#0B3D91] flex-shrink-0 mt-1" />
            <span><strong>Stamp Paper Purchase &amp; Notarization:</strong> 1 working day upon partner approval.</span>
          </li>
          <li className="flex items-start gap-2">
            <Clock className="w-4 h-4 text-[#0B3D91] flex-shrink-0 mt-1" />
            <span><strong>RoF Submission &amp; Scrutiny:</strong> 5 to 10 working days depending on state government department workload.</span>
          </li>
          <li className="flex items-start gap-2">
            <Clock className="w-4 h-4 text-[#0B3D91] flex-shrink-0 mt-1" />
            <span><strong>Factors Causing Delay:</strong> Incomplete address proof, mismatched partner signatures, or peak season backlogs at the registrar office.</span>
          </li>
        </ul>
        <p className="text-xs text-slate-600">
          Akshay B2B Solutions minimizes delays through rigorous pre-submission verification and proactive departmental tracking.
        </p>
      </section>

      {/* p) POST-REGISTRATION (DETAILED) */}
      <section id="post-registration-detailed" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-[#0B3D91] text-xs font-bold uppercase tracking-wider">
            Section 12
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Post-Registration Operational Readiness
          </h2>
        </div>
        <p>
          Achieving post-registration operational readiness requires converting your legal certificate into active market presence. The initial priority is opening a dedicated current bank account in the firm name, ensuring complete segregation of commercial funds from partners' personal accounts. Immediately following account activation, the firm must execute its PAN and GST registrations, establish double-entry bookkeeping ledgers, secure trade licenses (such as Shop and Establishment), and enroll in MSME Udyam. Furthermore, any future alterations in partnership constitution, profit-sharing ratios, or branch expansions must be promptly recorded with the RoF via supplemental deeds to ensure uninterrupted legal validity.
        </p>
      </section>

      {/* q) CERTIFICATION */}
      <section id="certification" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-[#0B3D91] text-xs font-bold uppercase tracking-wider">
            Section 13
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Partnership Firm Registration Certificate
          </h2>
        </div>
        <p>
          The <strong>Partnership Firm Registration Certificate</strong> is an official statutory instrument issued under the seal and signature of the Registrar of Firms (RoF). It contains the firm's unique registration number, registered legal name, principal place of business, date of registration, and complete names of all admitted partners. This certificate serves as unassailable legal proof of the firm's registered status under the Indian Partnership Act, 1932. Akshay B2B Solutions ensures pristine document compilation, coordinates with registrar officers, and delivers the digital and physical certificate directly to your doorstep.
        </p>
      </section>

      {/* r) FEES */}
      <section id="fees" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-[#0B3D91] text-xs font-bold uppercase tracking-wider">
            Section 14
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Partnership Firm Registration Fees &amp; Structure
          </h2>
        </div>
        <p>
          The total cost of registering a partnership firm comprises three distinct components: statutory state RoF filing fees, non-judicial stamp duty, and professional consultancy fees. State government fees and stamp duty rates vary across states (e.g., Uttar Pradesh, Delhi, Maharashtra, Karnataka) depending on the agreed capital investment. Akshay B2B Solutions maintains 100% transparent pricing with a single flat professional consultancy fee of <strong>₹2999/- only</strong>, ensuring zero hidden costs or surprise surcharges throughout the registration cycle.
        </p>
      </section>

      {/* s) TAXATION */}
      <section id="taxation" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-[#0B3D91] text-xs font-bold uppercase tracking-wider">
            Section 15
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Taxation and Financial Considerations for Partnership Firms
          </h2>
        </div>
        <p>
          Under the Income Tax Act, 1961, a partnership firm is taxed as a separate legal entity at a flat corporate tax rate of <strong>30%</strong> (plus applicable 12% surcharge if total income exceeds ₹1 Crore, along with a 4% Health &amp; Education Cess). Key financial and tax provisions include:
        </p>
        <ul className="space-y-2 pt-1">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Partner Profit Exemption:</strong> Share of profit received by individual partners from the firm is 100% tax-exempt in their hands under Section 10(2A).</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Partner Remuneration &amp; Salary:</strong> Salary, bonus, and commission paid to working partners are deductible as business expenses under Section 40(b), up to prescribed statutory limits.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Interest on Capital:</strong> Simple interest paid to partners on their capital contribution is tax-deductible up to a maximum rate of 12% per annum, provided it is authorized by the deed.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Tax Audit Mandate (Section 44AB):</strong> Mandatory if gross turnover exceeds ₹1 Crore in business (₹10 Crores if 95%+ transactions are digital) or ₹50 Lakhs in professional services.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>TDS and Advance Tax:</strong> The firm must deduct TDS on vendor payments and discharge quarterly advance tax obligations.</span>
          </li>
        </ul>
        <p className="text-xs text-slate-600">
          Akshay B2B Solutions provides complete tax planning and annual compliance guidance to optimize your firm's post-tax profitability.
        </p>
      </section>

      {/* t) WHY AKSHAY B2B SOLUTIONS */}
      <section id="why-akshayb2b" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-[#0B3D91] text-xs font-bold uppercase tracking-wider">
            Section 16
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Why Akshay B2B Solutions for Partnership Firm Registration?
          </h2>
        </div>
        <p className="font-bold text-slate-900">
          Akshay B2B Solutions is North India's premier corporate compliance and legal consultancy, based in Noida, Uttar Pradesh, trusted by thousands of thriving co-founders.
        </p>
        <ul className="space-y-2 pt-1">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>End-to-End Professional Handling:</strong> Complete management from customized deed drafting and stamp paper stamping to RoF filing and PAN issuance.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>State-Specific Legal Clarity:</strong> Deep expertise in Uttar Pradesh, Delhi NCR, and nationwide state-specific stamp duty laws and RoF bylaws.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Zero Delay Processing:</strong> Thorough pre-vetting of documents prevents registrar queries and shortens registration timelines.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Holistic Post-Registration Ecosystem:</strong> Immediate support for GST, MSME, bank account opening, bookkeeping, and annual ITR filing.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Transparent Pricing &amp; High Accuracy:</strong> Single flat consultancy fee of ₹2999/- with zero hidden costs, backed by seasoned CAs and corporate advocates.</span>
          </li>
        </ul>
      </section>

      {/* FAQ SECTION */}
      <section id="faqs" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-[#0B3D91] text-xs font-bold uppercase tracking-wider">
            Section 17
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Frequently Asked Questions (FAQs)
          </h2>
        </div>

        <div className="space-y-3 pt-2">
          {FAQ_ITEMS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-slate-50/70 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-xs sm:text-sm hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#0B3D91] flex-shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-[#0B3D91]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-200/60 bg-white">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

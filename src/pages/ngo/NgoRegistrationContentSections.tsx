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
  Building2,
  DollarSign,
  Briefcase,
  Users,
  Heart,
  Globe,
  Landmark,
  GraduationCap,
  ChevronDown,
  ArrowRight,
  Sparkles,
  Layers,
  HelpCircle,
  Check,
  X
} from 'lucide-react';

interface ContentProps {
  onScrollToForm: () => void;
  openFaqIndex: number | null;
  setOpenFaqIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

export const NGO_FAQ_ITEMS = [
  {
    q: 'Is it mandatory to register an NGO to do social work in India?',
    a: 'While an informal group can do informal charity at a very small scale, formal registration is legally mandatory if you wish to accept donations, issue 80G tax receipts, apply for government grants or CSR funds, open a dedicated non-profit bank account, or hire full-time staff. Unregistered bodies lack legal personality, exposing founders to personal liability and strict income tax scrutiny.'
  },
  {
    q: 'Which structure is best for my NGO: Trust, Society, or Section 8 Company?',
    a: 'The ideal structure depends on your objectives: (1) Trust is best for small family/private endowments, religious charities, and single-state causes with minimal ongoing compliance; (2) Society is ideal for democratic member-driven clubs, cultural/literary bodies, and state-level social causes; (3) Section 8 Company is the gold standard for modern pan-India NGOs, scalable social enterprises, and organizations seeking large institutional grants, corporate CSR funding, and international FCRA eligibility.'
  },
  {
    q: 'What documents are required from founders for NGO registration?',
    a: 'Key documents include: PAN card and Aadhaar card (or Passport/Voter ID) of all founders/trustees/directors, passport-size photographs, electricity bill or property tax receipt for the registered office, NOC from the landlord, and the drafted constitutional document (Trust Deed, Society MOA & By-laws, or Section 8 MOA/AOA).'
  },
  {
    q: 'How long does the entire NGO registration process take?',
    a: 'Timelines vary by structure: A Public Charitable Trust typically takes 4–7 working days (subject to Sub-Registrar appointment); a Section 8 Company takes 7–12 working days under MCA Centralized Processing; a Registered Society takes 15–25 working days depending on state Registrar of Societies processing queues.'
  },
  {
    q: 'Does NGO registration automatically make all donations tax-exempt?',
    a: 'No. Registration gives your NGO legal status, but tax exemptions require separate applications. To make your NGO income 100% tax-free, you must obtain Section 12A (12AB) registration from the Income Tax Department. To allow your donors to claim a 50% deduction on their donations, you must secure Section 80G registration.'
  },
  {
    q: 'Can a registered NGO receive donations from foreign countries?',
    a: 'Yes, but only after obtaining registration or prior permission under the Foreign Contribution (Regulation) Act (FCRA), 2010 from the Ministry of Home Affairs (MHA), Government of India. The NGO must have a track record of minimum 3 years of active social work and a dedicated FCRA account in SBI Main Branch, New Delhi.'
  }
];

export const NgoRegistrationContentSections: React.FC<ContentProps> = ({
  onScrollToForm,
  openFaqIndex,
  setOpenFaqIndex
}) => {
  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-12 text-slate-700 leading-relaxed text-sm">
      {/* 9.a. Overview */}
      <section id="overview" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 1
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Overview: Non-Governmental Organization (NGO) Registration in India
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          In India, a Non-Governmental Organization (NGO) is a non-profit, voluntary citizens' group organized on a local, national, or international level to address critical social, philanthropic, educational, health, cultural, or environmental causes. NGOs operate independently of government control and are dedicated to public welfare without any profit motive. Under the Indian legal framework, non-profit institutions cannot be registered simply as an "NGO" entity name; rather, they must choose one of three recognized statutory vehicles: a <strong>Public Charitable Trust</strong> under state Trust Acts or the Indian Trusts Act 1882, a <strong>Society</strong> under the Societies Registration Act 1860, or a <strong>Section 8 Company</strong> under the Companies Act 2013.
        </p>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Securing legal registration is the indispensable first step for any non-profit initiative. Registration confers separate legal personality, enables lawful fundraising, unlocks eligibility for federal and state government grants, opens doors to corporate CSR (Corporate Social Responsibility) funding under Section 135 of the Companies Act, and allows the NGO to apply for lucrative tax exemptions under Sections 12A and 80G of the Income Tax Act, 1961. At Akshay B2B Solutions, our dedicated non-profit legal wing provides comprehensive, end-to-end guidance from structural advisory and deed drafting to registrar filings and post-incorporation tax certifications.
        </p>
      </section>

      {/* 9.b. Registration/Process Overview */}
      <section id="registration" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 2
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Registration / Process Overview
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          The NGO registration process begins with an objective assessment of your organization’s mission, planned geographical footprint, and funding strategy. Depending on whether you choose a Trust (governed by local Sub-Registrars), a Society (governed by the State Registrar of Societies), or a Section 8 Company (governed nationally by the Ministry of Corporate Affairs), the procedural path involves drafting specialized constitutional charters with irrevocable non-profit covenants.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center font-black text-xs">
              01
            </div>
            <h3 className="font-bold text-xs text-slate-900">1. Charter Drafting</h3>
            <p className="text-xs text-slate-500">
              Formulating clear charitable objectives, dissolution clauses, trustee/governing body powers, and non-distribution covenants.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center font-black text-xs">
              02
            </div>
            <h3 className="font-bold text-xs text-slate-900">2. Statutory Filing</h3>
            <p className="text-xs text-slate-500">
              Submitting stamped documents to the respective Sub-Registrar, Registrar of Societies, or MCA SPICe+ / INC-12 licensing portal.
            </p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center font-black text-xs">
              03
            </div>
            <h3 className="font-bold text-xs text-slate-900">3. Tax &amp; Portal Onboarding</h3>
            <p className="text-xs text-slate-500">
              PAN/TAN issuance, NITI Aayog NGO Darpan enrollment, Form CSR-1 registration, and 12A/80G income tax filings.
            </p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
          Once official certification is granted, the NGO acquires legal status to execute property leases, open interest-bearing savings and project accounts with scheduled commercial banks, and onboard institutional partners with complete statutory protection.
        </p>
      </section>

      {/* 9.c. What is NGO Registration? */}
      <section id="what-is-ngo-registration" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 3
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            What is NGO Registration?
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-800 font-bold leading-relaxed">
          NGO Registration is the formal legal process of incorporating or registering a non-profit organization under Indian statutory law to grant it independent legal existence, perpetual succession, and regulatory authorization to carry out charitable, scientific, educational, religious, and philanthropic activities for public benefit.
        </p>

        <p className="text-xs sm:text-sm text-slate-600">
          Core pillars and legal characteristics of a registered NGO include:
        </p>

        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Statutory Legal Personality:</strong> Enables the NGO to hold movable and immovable property in its own name, enter binding contractual agreements, and sue or be sued in courts of law.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Irrevocable Non-Profit Character:</strong> Prohibits the distribution of profits, surplus, dividends, or bonuses to founders, trustees, or members; all revenue must be utilized solely towards institutional objects.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Three Recognized Legal Formats:</strong> Allows founders to choose between a Trust (charity/endowment), a Society (democratic membership), or a Section 8 Company (corporate-level governance).
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Eligible for 12A &amp; 80G Tax Deductions:</strong> Allows the organization to receive tax-free donations and issue certificates enabling donors to claim 50% deductions under Section 80G.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Access to Government &amp; CSR Grants:</strong> Pre-requisite for enrolling on NITI Aayog’s NGO Darpan portal and obtaining MCA Form CSR-1 approval for corporate CSR allocations.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Foreign Contribution Eligibility (FCRA):</strong> Provides the statutory legal foundation required to subsequently seek clearance under the FCRA, 2010 to receive international philanthropy.
            </span>
          </li>
        </ul>

        <p className="text-xs sm:text-sm text-slate-800 font-bold pt-1">
          In essence, NGO registration transforms an informal community cause into a permanent, highly credible, and transparent institution trusted by donors, banks, and government regulators.
        </p>
      </section>

      {/* 9.d. Key Characteristics */}
      <section id="key-characteristics" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 4
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Key Characteristics of Registered NGOs
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1.5">
            <div className="flex items-center gap-2 text-blue-800 font-bold text-xs">
              <Users className="w-4 h-4 text-blue-700" />
              <span>1. Minimum Membership &amp; Governance</span>
            </div>
            <p className="text-xs text-slate-600">
              A Trust requires a minimum of 2 Trustees; a Society requires a minimum of 7 Governing Body members (or 8 for national scope); a Section 8 Company requires a minimum of 2 Directors and 2 Shareholders.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1.5">
            <div className="flex items-center gap-2 text-blue-800 font-bold text-xs">
              <Clock className="w-4 h-4 text-blue-700" />
              <span>2. Perpetual Succession &amp; Validity</span>
            </div>
            <p className="text-xs text-slate-600">
              Trusts and Section 8 Companies enjoy perpetual lifespan; changes in trustees or directors do not dissolve the legal entity. Society registrations are typically valid for 1 to 5 years subject to periodic state renewal.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1.5">
            <div className="flex items-center gap-2 text-blue-800 font-bold text-xs">
              <Landmark className="w-4 h-4 text-blue-700" />
              <span>3. Regulatory Authorities</span>
            </div>
            <p className="text-xs text-slate-600">
              Trusts report to local Sub-Registrars / Charity Commissioners; Societies report to State Registrars of Societies; Section 8 Companies report federally to the Ministry of Corporate Affairs (MCA) and Registrar of Companies (ROC).
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1.5">
            <div className="flex items-center gap-2 text-blue-800 font-bold text-xs">
              <Scale className="w-4 h-4 text-blue-700" />
              <span>4. Non-Distribution of Profits</span>
            </div>
            <p className="text-xs text-slate-600">
              Any financial surplus generated from operational activities, events, publications, or service delivery must be reinvested 100% back into the organization's approved social objectives.
            </p>
          </div>
        </div>
      </section>

      {/* 9.e. Importance & Benefits */}
      <section id="importance-benefits" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 5
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Importance &amp; Strategic Benefits of NGO Registration
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-800 font-bold">
          Registering your non-profit provides critical legal safeguards, unmatched institutional credibility, and statutory access to public and private funding pipelines.
        </p>

        <div className="space-y-3 pt-1">
          {[
            {
              title: 'Independent Legal Identity',
              desc: 'The NGO becomes an autonomous legal juristic person capable of entering contracts, holding assets, signing memorandums of understanding (MoUs), and protecting founders from personal liability.'
            },
            {
              title: '100% Tax Exemption Under Section 12A',
              desc: 'Surplus income, voluntary donations, corpus contributions, and capital receipts are fully exempt from income tax assessment under Section 12A/12AB of the Income Tax Act.'
            },
            {
              title: 'Donor Tax Deduction Under Section 80G',
              desc: 'Philanthropic donors, HNIs, and corporate partners can claim a 50% tax deduction on their donations, significantly boosting fundraising appeal.'
            },
            {
              title: 'Access to Corporate CSR Funding (Form CSR-1)',
              desc: 'Indian corporates must mandatorily spend 2% of net profits on CSR under Section 135 of the Companies Act; only registered NGOs with Form CSR-1 can receive these multi-crore allocations.'
            },
            {
              title: 'Government Grants & Scheme Subsidies',
              desc: 'Enables registration on NITI Aayog NGO Darpan, making the organization eligible to apply for central and state ministry grants, welfare tenders, and government-aided projects.'
            },
            {
              title: 'Eligibility for Foreign Contributions (FCRA)',
              desc: 'Provides the mandatory statutory foundation required to receive international grants, overseas philanthropic aid, and UN project contributions under FCRA compliance.'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3"
            >
              <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold">
                ✓
              </div>
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-slate-900">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-slate-500 italic pt-1">
          Summary: Operating without formal registration severely limits fundraising, exposes founders to civil liabilities, and prevents donors from claiming tax relief. Registration is the gateway to scalable philanthropic impact.
        </p>
      </section>

      {/* 9.g. Types of NGOs */}
      <section id="types" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 7
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Types of NGO Structures in India
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-600">
          Founders can incorporate their non-profit under one of three distinct statutory structures, each tailored to different operational scales, management styles, and governance preferences:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
          {/* Trust */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2 border-t-4 border-t-blue-600">
            <div className="flex items-center gap-2 text-blue-800 font-bold text-sm">
              <Heart className="w-4 h-4 text-blue-700" />
              <span>1. Public Charitable Trust</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Formed by a Settlor dedicating movable/immovable property for public charitable or religious purposes via a registered Trust Deed. Managed by a Board of Trustees with minimal ongoing state filings. Ideal for family trusts, local schools, temples, and small charitable dispensaries.
            </p>
            <div className="text-[11px] font-semibold text-slate-500 bg-slate-50 p-2 rounded-xl">
              <strong>Min. Members:</strong> 2 Trustees <br />
              <strong>Governing Law:</strong> State Trust Act / Indian Trusts Act 1882
            </div>
          </div>

          {/* Society */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2 border-t-4 border-t-blue-700">
            <div className="flex items-center gap-2 text-blue-800 font-bold text-sm">
              <Users className="w-4 h-4 text-blue-700" />
              <span>2. Registered Society</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Formed by an association of 7 or more individuals coming together for literary, scientific, cultural, educational, or charitable purposes. Operates under a democratic General Body and elected Governing Body with annual elections and state Registrar renewals.
            </p>
            <div className="text-[11px] font-semibold text-slate-500 bg-slate-50 p-2 rounded-xl">
              <strong>Min. Members:</strong> 7 Members (8 for National) <br />
              <strong>Governing Law:</strong> Societies Registration Act, 1860
            </div>
          </div>

          {/* Section 8 */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2 border-t-4 border-t-blue-900">
            <div className="flex items-center gap-2 text-blue-800 font-bold text-sm">
              <Building2 className="w-4 h-4 text-blue-700" />
              <span>3. Section 8 Company</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Incorporated under federal corporate law with a central government license. Offers limited liability protection, standardized MCA corporate governance, and highest credibility among foreign donors, venture philanthropies, and corporate CSR committees.
            </p>
            <div className="text-[11px] font-semibold text-slate-500 bg-slate-50 p-2 rounded-xl">
              <strong>Min. Members:</strong> 2 Directors &amp; 2 Shareholders <br />
              <strong>Governing Law:</strong> Companies Act, 2013 (MCA)
            </div>
          </div>
        </div>
      </section>

      {/* 9.h. Comparison Tables */}
      <section id="comparison-tables" className="scroll-mt-28 space-y-6">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 8
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Comparison Tables: NGO Formats &amp; Registration Status
          </h2>
        </div>

        {/* Table 1: Trust vs Society vs Section 8 Company */}
        <div className="space-y-2">
          <h3 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
            <Scale className="w-4 h-4 text-blue-700" />
            <span>Table 1: Trust vs. Society vs. Section 8 Company</span>
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
            <table className="w-full text-xs text-left text-slate-600">
              <thead className="bg-slate-900 text-white font-bold text-[11px] uppercase tracking-wider">
                <tr>
                  <th className="p-3">Aspect</th>
                  <th className="p-3">Trust</th>
                  <th className="p-3">Society</th>
                  <th className="p-3">Section 8 Company</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-900">Governing Law</td>
                  <td className="p-3">State Trust Act / Indian Trusts Act 1882</td>
                  <td className="p-3">Societies Registration Act 1860</td>
                  <td className="p-3">Companies Act 2013 (Central Law)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-900">Legal Identity</td>
                  <td className="p-3">Tied to Board of Trustees</td>
                  <td className="p-3">Quasi-corporate legal entity</td>
                  <td className="p-3">Distinct corporate juristic person</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-900">Registration Authority</td>
                  <td className="p-3">Local Sub-Registrar of Assurances</td>
                  <td className="p-3">State Registrar of Societies</td>
                  <td className="p-3">Ministry of Corporate Affairs (MCA)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-900">Minimum Members</td>
                  <td className="p-3">2 Trustees</td>
                  <td className="p-3">7 Members (8 for National)</td>
                  <td className="p-3">2 Directors &amp; 2 Members</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-900">Management Structure</td>
                  <td className="p-3">Trustees / Managing Trustee</td>
                  <td className="p-3">President, Secretary, Treasurer</td>
                  <td className="p-3">Board of Directors &amp; Shareholders</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-900">Credibility with Donors</td>
                  <td className="p-3">Moderate (Local/Family focused)</td>
                  <td className="p-3">Good (State level community focus)</td>
                  <td className="p-3">Highest (Pan-India &amp; Global CSR)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-900">12A, 80G &amp; FCRA Ease</td>
                  <td className="p-3">Standard processing</td>
                  <td className="p-3">Standard processing</td>
                  <td className="p-3">Fastest due to standardized ROC records</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 2: Registered NGO vs Unregistered NGO */}
        <div className="space-y-2 pt-2">
          <h3 className="text-xs sm:text-sm font-bold text-slate-900 flex items-center gap-1.5">
            <Scale className="w-4 h-4 text-blue-700" />
            <span>Table 2: Registered NGO vs. Unregistered NGO</span>
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
            <table className="w-full text-xs text-left text-slate-600">
              <thead className="bg-slate-900 text-white font-bold text-[11px] uppercase tracking-wider">
                <tr>
                  <th className="p-3">Aspect</th>
                  <th className="p-3">Registered NGO</th>
                  <th className="p-3">Unregistered NGO / Group</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-900">Legal Recognition</td>
                  <td className="p-3 text-orange-700 font-bold">Recognized under Indian Statutory Law</td>
                  <td className="p-3 text-rose-600 font-bold">No legal standing / Informal gathering</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-900">Bank Account Opening</td>
                  <td className="p-3">Dedicated NGO current account in its own name</td>
                  <td className="p-3">Prohibited; only personal accounts can be used</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-900">Grants &amp; CSR Eligibility</td>
                  <td className="p-3">Fully eligible for Govt Schemes, CSR &amp; Grants</td>
                  <td className="p-3">Strictly ineligible for institutional funding</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-900">Tax Exemption (12A/80G)</td>
                  <td className="p-3">Eligible for 100% tax exemption &amp; 80G donor relief</td>
                  <td className="p-3">No tax exemptions; taxed at maximum marginal rates</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-900">Donor &amp; Public Credibility</td>
                  <td className="p-3">High transparency and legal accountability</td>
                  <td className="p-3">Low credibility; donors cannot verify fund usage</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-900">Recommendation</td>
                  <td className="p-3 font-bold text-blue-800">Mandatory for genuine, scalable social work</td>
                  <td className="p-3 text-slate-500">Not recommended; leads to tax notices</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 9.i. Laws Governing */}
      <section id="laws-governing" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 9
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Laws Governing NGO Registration in India
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-800 font-bold">
          Non-profit organizations in India operate under a multi-tier statutory architecture comprising foundational entity registration acts and specialized non-profit taxation statutes.
        </p>

        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
          <li className="flex items-start gap-2.5">
            <BadgeCheck className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Indian Trusts Act, 1882 &amp; State Public Trust Acts:</strong> Governs the creation, execution, trustee responsibilities, and property alienation of charitable and religious trusts across India.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <BadgeCheck className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Societies Registration Act, 1860:</strong> Regulates the formation, memorandum drafting, governing body elections, and annual list filings of cultural, literary, and social societies.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <BadgeCheck className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Companies Act, 2013 (Section 8):</strong> Enforces federal corporate compliance, statutory audit mandates, Board fiduciary duties, and ROC disclosures for non-profit companies.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <BadgeCheck className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Income Tax Act, 1961 (Sections 11, 12, 12A, 12AB &amp; 80G):</strong> Provides the statutory mechanism for institutional income tax exemption and donor tax deduction certificates.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <BadgeCheck className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Foreign Contribution (Regulation) Act, 2010 (FCRA):</strong> Governs the receipt, utilization, and reporting of foreign donations, grants, and international aid through the Ministry of Home Affairs (MHA).
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <BadgeCheck className="w-4 h-4 text-blue-700 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Penalties for Non-Compliance:</strong> Failure to maintain statutory books, misuse of funds for private benefit, or misfiling annual tax returns can lead to revocation of 12A/80G status, freezing of bank accounts, and severe financial penalties under the Income Tax Act.
            </span>
          </li>
        </ul>
      </section>

      {/* 9.j. Eligibility and Requirements */}
      <section id="eligibility" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 10
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Eligibility and Document Requirements
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-800 font-bold">
          Any group of Indian citizens with a clear public welfare objective and clean legal credentials can incorporate an NGO.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <h3 className="font-bold text-xs sm:text-sm text-slate-900 flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-700" />
              <span>Founder &amp; Member Eligibility</span>
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-600">
              <li>• Minimum 2 Trustees (Trust) or 7 Members (Society) or 2 Directors (Section 8)</li>
              <li>• Founders must be at least 18 years of age and competent to contract</li>
              <li>• Valid PAN card and Aadhaar card (or Passport for foreign nationals)</li>
              <li>• No criminal convictions involving financial fraud or moral turpitude</li>
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <h3 className="font-bold text-xs sm:text-sm text-slate-900 flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-700" />
              <span>Mandatory Documentation</span>
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-600">
              <li>• Self-attested PAN and Identity/Address proofs of all trustees/directors</li>
              <li>• Registered office utility bill (Electricity/Water bill not older than 2 months)</li>
              <li>• Rent Agreement and No-Objection Certificate (NOC) from property owner</li>
              <li>• Drafted Trust Deed, Society MOA &amp; Rules, or Section 8 Charter</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 9.k. Step-by-Step Process */}
      <section id="step-by-step-process" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 11
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Step-by-Step NGO Registration Process
          </h2>
        </div>

        <div className="space-y-3 pt-1">
          {[
            {
              step: 'Step 1',
              title: 'Structure Selection & Name Approval',
              desc: 'Select the optimal structure (Trust, Society, or Section 8 Company) and verify name availability to ensure non-conflict with existing registered entities or protected emblems.'
            },
            {
              step: 'Step 2',
              title: 'Charter Drafting (Deed / MOA & Rules)',
              desc: 'Our legal experts draft customized Trust Deeds or Society MOA/By-laws with ironclad charitable objects clauses, trustee succession rules, and non-profit covenants.'
            },
            {
              step: 'Step 3',
              title: 'Stamp Duty & Document Execution',
              desc: 'Purchase requisite state non-judicial e-stamp paper and execute deeds in the presence of witnesses with digital signature verification (DSC for Section 8).'
            },
            {
              step: 'Step 4',
              title: 'Registrar Submission & Physical / Digital Verification',
              desc: 'Submit application dossiers to the Sub-Registrar of Assurances, state Registrar of Societies, or MCA SPICe+ portal for verification by government officers.'
            },
            {
              step: 'Step 5',
              title: 'Issuance of Registration Certificate, PAN & TAN',
              desc: 'Upon scrutiny and approval, the statutory authority issues the Certificate of Registration along with dedicated NGO PAN and TAN for operational banking.'
            },
            {
              step: 'Step 6',
              title: 'Darpan & 12A / 80G Tax Exemption Onboarding',
              desc: 'Complete onboarding on NITI Aayog NGO Darpan, file Form CSR-1 for corporate funding, and apply for provisional 12A/80G tax exemptions.'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3.5"
            >
              <span className="px-2.5 py-1 rounded-xl bg-blue-900 text-white font-mono font-bold text-xs flex-shrink-0 mt-0.5">
                {item.step}
              </span>
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-slate-900">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9.l. Post-Registration/Compliance */}
      <section id="compliance" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 12
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Post-Registration Statutory Compliances
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-800 font-bold">
          Maintaining active, penalty-free NGO status requires rigorous adherence to annual reporting and taxation mandates:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1.5">
            <h4 className="font-bold text-xs text-slate-900">1. Mandatory Annual Audit (Form 10B / 10BB)</h4>
            <p className="text-xs text-slate-600">
              All registered NGOs holding 12A tax exemption must get their annual accounts audited by an independent Chartered Accountant (CA) before filing ITR-7.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1.5">
            <h4 className="font-bold text-xs text-slate-900">2. Income Tax Return (ITR-7 Filing)</h4>
            <p className="text-xs text-slate-600">
              Mandatory annual filing of Form ITR-7 by October 31st every financial year, detailing donations received, project disbursements, and corpus funds.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1.5">
            <h4 className="font-bold text-xs text-slate-900">3. Statement of Donations (Form 10BD &amp; 10BE)</h4>
            <p className="text-xs text-slate-600">
              Annual filing of Form 10BD with the Income Tax Department listing all donor PANs, and issuing Form 10BE donation certificates to donors by May 31st.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1.5">
            <h4 className="font-bold text-xs text-slate-900">4. ROC / Registrar Annual Filings</h4>
            <p className="text-xs text-slate-600">
              Section 8 companies file AOC-4 and MGT-7 with MCA; Societies submit annual governing body lists and audited balance sheets to the state Registrar.
            </p>
          </div>
        </div>
      </section>

      {/* 9.m. Timelines */}
      <section id="timelines" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 13
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Registration Timelines
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-800 font-bold">
          Typical turnaround times for establishing your registered non-profit organization across India:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
          <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-center space-y-1.5">
            <Clock className="w-5 h-5 text-blue-800 mx-auto" />
            <div className="text-lg font-black text-blue-900">4 – 7 Days</div>
            <div className="text-xs font-bold text-slate-900">Public Charitable Trust</div>
            <p className="text-[11px] text-slate-600">Sub-Registrar appointment &amp; deed stamping</p>
          </div>

          <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-center space-y-1.5">
            <Clock className="w-5 h-5 text-blue-800 mx-auto" />
            <div className="text-lg font-black text-blue-900">15 – 25 Days</div>
            <div className="text-xs font-bold text-slate-900">Registered Society</div>
            <p className="text-[11px] text-slate-600">State Registrar scrutiny &amp; certificate issuance</p>
          </div>

          <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-center space-y-1.5">
            <Clock className="w-5 h-5 text-blue-800 mx-auto" />
            <div className="text-lg font-black text-blue-900">7 – 12 Days</div>
            <div className="text-xs font-bold text-slate-900">Section 8 Company</div>
            <p className="text-[11px] text-slate-600">MCA centralized processing &amp; INC-16 license</p>
          </div>
        </div>

        <p className="text-xs text-slate-500 pt-1">
          *Note: Processing durations depend on government registrar appointment queues and state stamp duty verifications. Our legal desk pre-audits all dossiers to prevent queries and re-submissions.
        </p>
      </section>

      {/* 9.n. Certification Details */}
      <section id="certification" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 14
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Certification &amp; Issuing Authorities
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Upon successful completion of legal scrutiny, the issuing authority grants the official legal registration certificate:
        </p>

        <div className="space-y-3 pt-1">
          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
            <Award className="w-5 h-5 text-blue-800 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-xs text-slate-900">Trust: Registered Trust Deed &amp; Endorsement</h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Stamped and registered Trust Deed bearing government seal, book number, volume number, and page endorsement from the Sub-Registrar.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
            <Award className="w-5 h-5 text-blue-800 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-xs text-slate-900">Society: Certificate of Registration</h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Official Certificate issued under Section 3 of the Societies Registration Act, 1860 with unique Society Registration Number and approved Bye-laws.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-start gap-3">
            <Award className="w-5 h-5 text-blue-800 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-xs text-slate-900">Section 8: Certificate of Incorporation (INC-11) &amp; License (INC-16)</h4>
              <p className="text-xs text-slate-600 mt-0.5">
                Central government license under Section 8(1) and Certificate of Incorporation containing unique Corporate Identification Number (CIN) and PAN/TAN.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9.o. Fees */}
      <section id="fees" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 15
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Fee Structure &amp; Transparent Cost Breakdown
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-600">
          Akshay B2B Solutions maintains a strict transparent pricing commitment with zero hidden costs, unexpected drafting charges, or consultation surcharges.
        </p>

        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
          <div className="flex justify-between items-center py-1 border-b border-slate-200">
            <span className="font-bold text-slate-800">Professional Service Fee (Akshay B2B Solutions)</span>
            <span className="font-black text-blue-800 text-sm">₹2,999/- only</span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-slate-200">
            <span className="text-slate-600">State Stamp Duty &amp; Stamping (Varies by State)</span>
            <span className="font-semibold text-slate-700">At actuals as per state laws</span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-slate-200">
            <span className="text-slate-600">Registrar / MCA Government Filing Fees</span>
            <span className="font-semibold text-slate-700">At actuals against official challans</span>
          </div>
          <div className="flex justify-between items-center pt-1 font-bold text-slate-900">
            <span>Hidden Markups / Advisory Surprises</span>
            <span className="text-orange-700">₹0 (Guaranteed Zero Hidden Cost)</span>
          </div>
        </div>
      </section>

      {/* 9.p. Taxation */}
      <section id="taxation" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 16
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Taxation, 12A/80G Benefits, CSR &amp; FCRA Regulations
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          NGOs (whether registered as Trust, Society, or Section 8 Company) are taxed under the Income Tax Act, 1961 as Association of Persons (AOP) unless they obtain specialized statutory tax exemptions under Sections 12A and 80G.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1.5">
            <div className="flex items-center gap-2 text-blue-800 font-bold text-xs">
              <DollarSign className="w-4 h-4 text-blue-700" />
              <span>Section 12A / 12AB (Tax Exemption on Income)</span>
            </div>
            <p className="text-xs text-slate-600">
              Grants 100% tax exemption on donations, grants, corpus contributions, and interest earnings, provided at least 85% of institutional income is applied toward approved charitable objectives in India.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1.5">
            <div className="flex items-center gap-2 text-blue-800 font-bold text-xs">
              <Award className="w-4 h-4 text-blue-700" />
              <span>Section 80G (Tax Deduction for Donors)</span>
            </div>
            <p className="text-xs text-slate-600">
              Allows individual, corporate, and institutional donors to claim a 50% deduction on taxable income for donations made to the NGO, boosting fundraising and donor participation.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1.5">
            <div className="flex items-center gap-2 text-blue-800 font-bold text-xs">
              <Building2 className="w-4 h-4 text-blue-700" />
              <span>Form CSR-1 (Corporate CSR Grants)</span>
            </div>
            <p className="text-xs text-slate-600">
              Mandatory MCA electronic filing required for any NGO intending to undertake CSR activities funded by private or public companies under Section 135 of the Companies Act.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1.5">
            <div className="flex items-center gap-2 text-blue-800 font-bold text-xs">
              <Globe className="w-4 h-4 text-blue-700" />
              <span>FCRA Clearance (Foreign Funding)</span>
            </div>
            <p className="text-xs text-slate-600">
              Enables receipt of international grants and overseas donations under the Foreign Contribution (Regulation) Act, 2010 after completing minimum 3 years of active operations.
            </p>
          </div>
        </div>
      </section>

      {/* 9.q. Why Akshay B2B Solutions */}
      <section id="why-us" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 17
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Why Akshay B2B Solutions For NGO Registration?
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-800 font-bold">
          Akshay B2B Solutions is India's leading corporate and non-profit compliance consultancy, empowering over 18,500 organizations with flawless registration and advisory services:
        </p>

        <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600">
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
            <span>
              <strong>End-to-End Multi-Structure Guidance:</strong> Unbiased advisory helping you choose the exact non-profit model (Trust, Society, or Section 8 Company) matching your operational goals.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Specialized Charter Drafting:</strong> Custom drafting of Trust Deeds and Articles of Association by senior non-profit advocates to guarantee 100% compliance with 12A/80G prerequisites.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Integrated Post-Registration Stack:</strong> Seamless onboarding for NITI Aayog NGO Darpan, Form CSR-1 corporate eligibility, and fast-track 12A/80G provisional tax exemption certificates.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Zero Hidden Fee Commitment:</strong> Fixed professional fee of ₹2,999/- only with government challans shared at absolute cost transparency.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Dedicated Non-Profit Relationship Manager:</strong> 1-on-1 support from certified CAs and advocates throughout your registration journey.
            </span>
          </li>
        </ul>

        <div className="pt-2">
          <button
            onClick={onScrollToForm}
            className="px-6 py-3 rounded-xl bg-blue-800 hover:bg-blue-900 text-white font-black text-xs uppercase tracking-wider shadow-md transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            <span>Start Your NGO Registration at ₹2999</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 15. FAQ Section */}
      <section id="faqs" className="scroll-mt-28 space-y-4 pt-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 18
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Frequently Asked Questions (FAQs)
          </h2>
        </div>
        <p className="text-xs text-slate-600">
          Got questions regarding NGO registration, Trust vs. Society vs. Section 8, or 12A/80G tax exemptions? Here are answers to common queries:
        </p>

        <div className="space-y-2.5 pt-1">
          {NGO_FAQ_ITEMS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-4 sm:px-5 py-3.5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 hover:bg-slate-50 cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-blue-700 flex-shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'transform rotate-180 text-blue-800' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-100 leading-relaxed bg-slate-50/50">
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

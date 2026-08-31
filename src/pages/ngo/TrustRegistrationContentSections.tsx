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
  X,
  BookOpen,
  Calendar,
  Lock
} from 'lucide-react';

interface ContentProps {
  onScrollToForm: () => void;
  openFaqIndex: number | null;
  setOpenFaqIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

export const TRUST_FAQ_ITEMS = [
  {
    q: 'What is a Public Charitable Trust and how does it operate?',
    a: 'A Public Charitable Trust is a non-profit legal entity established by a Settlor by executing and registering a Trust Deed before the local Sub-Registrar. It vests property or initial corpus funds in a Board of Trustees who administer the trust for public benefits such as education, healthcare, poverty relief, and environmental preservation.'
  },
  {
    q: 'How many trustees are required to register a Public Charitable Trust in India?',
    a: 'A minimum of two trustees (one Settlor/Author and one Trustee) are legally required. However, having 3 to 7 trustees is strongly recommended for operational efficiency, decision-making quorum, and smooth opening of bank accounts.'
  },
  {
    q: 'Can family members be trustees in a Public Charitable Trust?',
    a: 'Yes, family members can legally be appointed as trustees in a Public Charitable Trust. However, the trust’s objectives and financial expenditures must serve the general public at large, and no undue personal benefit may be distributed to trustees or their relatives.'
  },
  {
    q: 'Where is the Trust Deed registered in India?',
    a: 'The Trust Deed must be physically registered at the office of the Sub-Registrar of Assurances having jurisdiction over the registered address of the trust or where the trust property/corpus is situated.'
  },
  {
    q: 'Is a Trust eligible for tax exemption under Section 12A and 80G?',
    a: 'Yes. Upon receiving the registered Trust Deed, the trust can immediately apply for 12A (100% tax exemption on charitable income) and 80G (50% income tax deduction for donors) through the Income Tax portal via Form 10A.'
  },
  {
    q: 'What is the key difference between a Trust and a Society?',
    a: 'A Trust requires a minimum of 2 persons, is governed by a permanent Trust Deed with minimal government interference, and does not require annual elections. A Society requires at least 7 members, operates democratically under the Societies Registration Act 1860, and requires periodic governing body elections.'
  }
];

export const TrustRegistrationContentSections: React.FC<ContentProps> = ({
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
            Overview: Trust Registration in India
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          A <strong>Public Charitable Trust</strong> is one of the oldest and most respected legal vehicles for non-profit and philanthropic endeavors in India. Established through a registered <strong>Trust Deed</strong>, it allows individuals, families, and organizations to dedicate property, financial corpus, and resources to promote education, medical relief, religious causes, environmental conservation, and social welfare.
        </p>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Governed under the Indian Trusts Act, 1882 (and state-specific enactments such as the Maharashtra Public Trusts Act or local endowment legislations), a Public Trust offers perpetual succession, enduring founder legacy, and minimal statutory interference. Akshay B2B Solutions provides end-to-end legal drafting of customized Trust Deeds, Sub-Registrar appointment handling, PAN/TAN registration, and subsequent 12A &amp; 80G tax certifications.
        </p>
      </section>

      {/* 9.b. Registration/Process Overview */}
      <section id="registration" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 2
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Registration &amp; Process Overview
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          The registration of a Charitable Trust requires drafting a comprehensive Trust Deed defining the Settlor, Board of Trustees, Beneficiaries (the public), Trust Corpus, Powers of Trustees, Dissolution clauses, and core non-profit objectives. The Deed is stamped with appropriate state stamp duty and formally executed before the local <strong>Sub-Registrar of Assurances</strong>.
        </p>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Following registration, the trust obtains its independent PAN and TAN cards, opens a dedicated institutional bank account, and enrolls for Section 12A, 80G, and NGO Darpan recognitions.
        </p>
      </section>

      {/* 9.c. What is Trust Registration? */}
      <section id="what-is-ngo-registration" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 3
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            What is Trust Registration?
          </h2>
        </div>

        <p className="text-xs sm:text-sm font-bold text-slate-900">
          A Trust (specifically a Public Charitable Trust) is a legal entity created by a settler through a registered Trust Deed under the Indian Trusts Act, 1882 (or state-specific trust laws such as the Bombay Public Trusts Act, 1950), in which property or assets are transferred to trustees to manage for the benefit of a specified public or charitable purpose.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          {[
            {
              title: 'Sub-Registrar Execution',
              desc: 'Legally enforceable instrument executed before the jurisdictional Sub-Registrar of Assurances.'
            },
            {
              title: 'Minimal Trustee Requirement',
              desc: 'Can be initiated with just 2 persons (1 Settlor and 1 Trustee), though 3+ trustees are recommended.'
            },
            {
              title: 'Perpetual Succession & Legacy',
              desc: 'Continues indefinitely irrespective of changes in trustees, safeguarding long-term family or institutional legacy.'
            },
            {
              title: 'Tax Exemption under 12A & 80G',
              desc: 'Eligible for 100% income tax exemption on donations/corpus and gives 50% tax deductions to donors.'
            },
            {
              title: 'Ideal for Schools & Hospitals',
              desc: 'The preferred legal framework across India for building schools, universities, hospitals, and ashrams.'
            },
            {
              title: 'Low Annual Governance Burden',
              desc: 'Fewer ongoing filing requirements compared to corporate structures like Section 8 Companies.'
            }
          ].map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <h4 className="font-bold text-xs text-blue-900 mb-1">{item.title}</h4>
              <p className="text-xs text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 9.d. Key Characteristics */}
      <section id="key-characteristics" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 4
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Key Characteristics of a Public Charitable Trust
          </h2>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-slate-600">
          <div>
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">
              1. Three Key Pillars: Settlor, Trustee, Beneficiary
            </h4>
            <p>
              The <strong>Settlor</strong> creates the trust and contributes initial corpus; the <strong>Trustees</strong> administer the trust assets; the <strong>Beneficiaries</strong> are the general public or designated community groups.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">
              2. Registered Trust Deed as the Supreme Constitution
            </h4>
            <p>
              The Trust Deed outlines the powers, rules of succession, appointment/removal of trustees, meeting quorum, and investment protocols with zero ambiguity.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">
              3. Irrevocability &amp; Asset Protection
            </h4>
            <p>
              Public charitable trusts are irrevocable. Assets transferred to the trust become public property dedicated solely to social causes and cannot revert to the settlor.
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
            Importance &amp; Benefits of Trust Registration
          </h2>
        </div>

        <div className="space-y-2.5 text-xs text-slate-600">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <strong className="text-slate-900 font-bold block mb-0.5">
              1. Clear Legal Recognition &amp; Capacity to Own Property
            </strong>
            A registered trust can acquire land, construct buildings, hold investments, and open dedicated bank accounts in its name.
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <strong className="text-slate-900 font-bold block mb-0.5">
              2. 100% Tax Exemption on Charitable Receipts (Section 12A)
            </strong>
            Donations, voluntary grants, and institution revenues are completely exempt from Income Tax when 85% of funds are applied towards charitable objectives.
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <strong className="text-slate-900 font-bold block mb-0.5">
              3. 50% Tax Deduction for Donors (Section 80G)
            </strong>
            Encourages philanthropists and corporations to donate generously by providing verifiable tax deduction benefits.
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <strong className="text-slate-900 font-bold block mb-0.5">
              4. Founder Control &amp; Family Succession
            </strong>
            Allows founders to maintain long-term trusteeship and appoint hereditary or nominated successor trustees without democratic election volatility.
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <strong className="text-slate-900 font-bold block mb-0.5">
              5. Government Grant &amp; CSR Eligibility
            </strong>
            Seamlessly registers on NITI Aayog NGO Darpan and MCA Form CSR-1 to receive public and corporate funding.
          </div>
        </div>
      </section>

      {/* 9.g. Types */}
      <section id="types" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 7
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Types of Trusts in India
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center font-bold text-xs">
              01
            </div>
            <h3 className="font-bold text-xs text-slate-900">Public Charitable Trust</h3>
            <p className="text-xs text-slate-600">
              Created for the benefit of the general public for education, medical relief, poverty alleviation, and welfare. Eligible for 12A/80G.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center font-bold text-xs">
              02
            </div>
            <h3 className="font-bold text-xs text-slate-900">Public Religious Trust</h3>
            <p className="text-xs text-slate-600">
              Formed for managing temples, mosques, churches, gurdwaras, and religious endowments for community devotion.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center font-bold text-xs">
              03
            </div>
            <h3 className="font-bold text-xs text-slate-900">Private Family Trust</h3>
            <p className="text-xs text-slate-600">
              Formed strictly for specific family members or individuals for estate planning and asset protection. Not eligible for 12A/80G.
            </p>
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
            Comparative Analysis: Trust vs Society vs Section 8 Company
          </h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
          <table className="w-full text-xs text-left text-slate-700">
            <thead className="bg-slate-900 text-white font-bold">
              <tr>
                <th className="p-3">Aspect</th>
                <th className="p-3 bg-blue-900">Public Charitable Trust</th>
                <th className="p-3">Private Trust</th>
                <th className="p-3">Society</th>
                <th className="p-3">Section 8 Company</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              <tr>
                <td className="p-3 font-semibold text-slate-900">Governing Law</td>
                <td className="p-3 bg-blue-50/50 font-medium">Indian Trusts Act 1882 / State Acts</td>
                <td className="p-3 text-slate-500">Indian Trusts Act 1882</td>
                <td className="p-3 text-slate-500">Societies Reg. Act 1860</td>
                <td className="p-3 text-slate-500">Companies Act, 2013</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">Minimum Members/Trustees</td>
                <td className="p-3 bg-blue-50/50 font-bold text-blue-900">2 Persons</td>
                <td className="p-3 text-slate-500">2 Persons</td>
                <td className="p-3 text-slate-500">7 Members</td>
                <td className="p-3 text-slate-500">2 Directors / Shareholders</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">Main Purpose</td>
                <td className="p-3 bg-blue-50/50">Public charity, education, healthcare</td>
                <td className="p-3 text-slate-500">Family wealth &amp; succession</td>
                <td className="p-3 text-slate-500">Literary, cultural, community clubs</td>
                <td className="p-3 text-slate-500">Professional non-profit, global CSR</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">Public Benefit Requirement</td>
                <td className="p-3 bg-blue-50/50 font-bold text-orange-700">Mandatory (General Public)</td>
                <td className="p-3 text-rose-600">No (Family/Individual)</td>
                <td className="p-3 font-bold text-orange-700">Mandatory</td>
                <td className="p-3 font-bold text-orange-700">Mandatory</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">Tax Exemption (12A &amp; 80G)</td>
                <td className="p-3 bg-blue-50/50 font-bold text-orange-700">100% Eligible</td>
                <td className="p-3 text-rose-600">Not Eligible</td>
                <td className="p-3 font-bold text-orange-700">100% Eligible</td>
                <td className="p-3 font-bold text-orange-700">100% Eligible</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">Best Suited For</td>
                <td className="p-3 bg-blue-50/50 font-bold text-blue-900">Philanthropists, Schools, Hospitals, Temples</td>
                <td className="p-3 text-slate-500">Estate planning &amp; inheritance</td>
                <td className="p-3 text-slate-500">Community clubs, RWAs, sports</td>
                <td className="p-3 text-slate-500">Large-scale NGOs, VC-backed non-profits</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 9.i. Laws Governing */}
      <section id="laws-governing" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 9
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Governing Laws &amp; Legal Framework
          </h2>
        </div>

        <ul className="space-y-2 text-xs text-slate-600 list-disc list-inside">
          <li>
            <strong>Indian Trusts Act, 1882:</strong> Central statute guiding private trusts and principles of fiduciary trustee responsibilities across India.
          </li>
          <li>
            <strong>State Public Trusts Enactments:</strong> States like Maharashtra and Gujarat govern public trusts via the Maharashtra Public Trusts Act, 1950 and the Charity Commissioner.
          </li>
          <li>
            <strong>Registration Act, 1908:</strong> Mandates the compulsory registration of immovable property trust deeds before the Sub-Registrar.
          </li>
          <li>
            <strong>Income Tax Act, 1961 (Sections 11, 12, 12A, 12AB, 80G):</strong> Grants statutory tax exemptions to registered public charitable trusts.
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
            Eligibility Criteria &amp; Required Documents
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
            <h4 className="font-bold text-blue-900 uppercase tracking-wider">
              Eligibility Criteria
            </h4>
            <ul className="space-y-1.5 text-slate-600 list-disc list-inside">
              <li>Minimum 1 Settlor and 1 Trustee (2 individuals minimum; 3+ recommended).</li>
              <li>Trustees must be major individuals of sound mind.</li>
              <li>Must have a physical registered office address in India.</li>
              <li>Clear charitable objectives serving the general public.</li>
              <li>Initial nominal corpus fund (e.g., ₹1,000 to ₹10,000+).</li>
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
            <h4 className="font-bold text-blue-900 uppercase tracking-wider">
              Required Documents
            </h4>
            <ul className="space-y-1.5 text-slate-600 list-disc list-inside">
              <li>PAN Card &amp; Aadhaar Card of Settlor and all Trustees.</li>
              <li>Two passport-sized photographs of each Trustee.</li>
              <li>Registered Office proof (Electricity bill + NOC + Rent agreement / Sale deed).</li>
              <li>Draft Trust Deed printed on non-judicial stamp paper.</li>
              <li>ID proof of two independent witnesses for Sub-Registrar execution.</li>
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
            Step-by-Step Trust Registration Process
          </h2>
        </div>

        <div className="space-y-3">
          {[
            {
              step: 'Step 1',
              title: 'Name Selection &amp; Charitable Objectives Drafting',
              desc: 'Select a unique name for the trust and define comprehensive charitable objects (education, healthcare, relief, etc.).'
            },
            {
              step: 'Step 2',
              title: 'Drafting the Master Trust Deed',
              desc: 'Our legal advocates draft a legally airtight Trust Deed detailing powers, tenure, corpus, and governance rules.'
            },
            {
              step: 'Step 3',
              title: 'Stamp Duty Payment &amp; Documentation',
              desc: 'Purchase non-judicial stamp papers based on state stamp duty regulations and attach all trustee KYC proofs.'
            },
            {
              step: 'Step 4',
              title: 'Execution before the Sub-Registrar',
              desc: 'Settlor and Trustees appear before the jurisdictional Sub-Registrar of Assurances with 2 witnesses for physical biometric signing.'
            },
            {
              step: 'Step 5',
              title: 'Issuance of Registered Trust Deed',
              desc: 'The Sub-Registrar endorses and registers the deed, delivering the official registered Trust Certificate.'
            },
            {
              step: 'Step 6',
              title: 'PAN, TAN &amp; Bank Account Opening',
              desc: 'Apply for trust PAN and TAN cards, followed by opening a dedicated institutional bank account.'
            }
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-white border border-slate-200 flex items-start gap-3 shadow-xs"
            >
              <span className="px-2.5 py-1 rounded-lg bg-blue-900 text-white font-black text-xs flex-shrink-0">
                {item.step}
              </span>
              <div>
                <h4
                  className="font-bold text-xs text-slate-900"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
                <p className="text-xs text-slate-600 mt-0.5">{item.desc}</p>
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
            Post-Registration Mandatory Compliances
          </h2>
        </div>

        <p className="text-xs font-bold text-slate-900">
          Following trust registration, maintain these essential statutory compliances:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block mb-1">Section 12A &amp; 80G Registration</strong>
            Apply via Form 10A on the Income Tax portal within statutory deadlines for tax exemptions.
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block mb-1">Annual Income Tax Return (ITR-7)</strong>
            File audited accounts in Form ITR-7 along with Audit Report in Form 10B/10BB before October 31.
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block mb-1">Form 10BD Statement of Donations</strong>
            File annual electronic statement of donations received to generate donor tax certificates.
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block mb-1">NITI Aayog Darpan &amp; CSR-1 Enrolment</strong>
            Register on NGO Darpan and MCA Form CSR-1 to unlock public schemes and CSR grants.
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
            Timelines for Trust Registration
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          The entire Trust Registration process generally takes <strong>7 to 14 working days</strong>:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 pt-1">
          <div className="p-3 rounded-xl bg-white border border-slate-200">
            <strong className="text-slate-900 block font-bold mb-1">Days 1–3</strong>
            Trust Deed legal drafting, object finalization &amp; trustee review.
          </div>
          <div className="p-3 rounded-xl bg-white border border-slate-200">
            <strong className="text-slate-900 block font-bold mb-1">Days 4–7</strong>
            Stamp paper purchase, appointment booking &amp; Sub-Registrar presentation.
          </div>
          <div className="p-3 rounded-xl bg-white border border-slate-200">
            <strong className="text-slate-900 block font-bold mb-1">Days 8–14</strong>
            Sub-Registrar deed release, Trust PAN/TAN application &amp; bank opening.
          </div>
        </div>
      </section>

      {/* 9.n. Certification */}
      <section id="certification" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 14
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Trust Registration Certificate / Endorsed Deed
          </h2>
        </div>

        <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-200 text-xs space-y-2">
          <p className="text-slate-700">
            The registered <strong>Trust Deed</strong> bearing the official Sub-Registrar's seal, volume/book number, registration number, and registration date serves as the primary Certificate of Registration for the Trust.
          </p>
          <p className="font-bold text-blue-900">
            This endorsed deed is universally recognized by Banks, Income Tax Department, NITI Aayog, and courts across India.
          </p>
        </div>
      </section>

      {/* 9.o. Fees */}
      <section id="fees" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 15
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Fee Breakdown
          </h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
          <table className="w-full text-xs text-left text-slate-700">
            <thead className="bg-slate-900 text-white font-bold">
              <tr>
                <th className="p-3">Component</th>
                <th className="p-3">Fee Amount</th>
                <th className="p-3">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              <tr>
                <td className="p-3 font-semibold text-slate-900">Professional Fee (Akshay B2B)</td>
                <td className="p-3 font-bold text-blue-900">₹2,999/- only</td>
                <td className="p-3 text-slate-600">Trust deed drafting, Sub-Registrar appointment, PAN/TAN assistance.</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">State Stamp Duty</td>
                <td className="p-3 text-slate-600">Varies by State (₹500 to ₹2,000+)</td>
                <td className="p-3 text-slate-600">Based on trust corpus and state stamp act (paid directly).</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">Sub-Registrar Registration Fee</td>
                <td className="p-3 text-slate-600">Varies by State (₹100 to ₹1,100+)</td>
                <td className="p-3 text-slate-600">Government recording fee at the time of presentation.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 9.p. Taxation */}
      <section id="taxation" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 16
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Taxation Framework for Public Trusts
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 bg-white rounded-xl border border-slate-200">
            <strong className="text-blue-900 block mb-1">Section 12A Exemption</strong>
            All voluntary contributions and income applied for charitable purposes are 100% tax-exempt. 85% of total income must be utilized annually.
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-200">
            <strong className="text-blue-900 block mb-1">Section 80G Tax Deduction</strong>
            Donors receive a 50% deduction from their taxable income when donating to an 80G registered public trust.
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-200">
            <strong className="text-blue-900 block mb-1">Section 10(23C) Provisions</strong>
            Specific exemptions available for educational institutions and medical hospitals operating without profit motives.
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-200">
            <strong className="text-blue-900 block mb-1">FCRA Clearance</strong>
            Mandatory prior permission or permanent FCRA registration from Ministry of Home Affairs to receive foreign grants.
          </div>
        </div>
      </section>

      {/* 9.q. Why Us */}
      <section id="why-us" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 17
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Why Choose Akshay B2B Solutions?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 bg-white rounded-xl border border-slate-200">
            <strong className="text-blue-900 block mb-0.5">Specialist Non-Profit Counsel</strong>
            Experienced advocates tailoring Trust Deeds to your specific educational, religious, or healthcare vision.
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-200">
            <strong className="text-blue-900 block mb-0.5">Sub-Registrar Coordination</strong>
            Complete appointment scheduling and document presentation support across all states and UTs.
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-200">
            <strong className="text-blue-900 block mb-0.5">Complete Tax Exemption Setup</strong>
            Seamless continuation into 12A &amp; 80G certification and NITI Aayog Darpan enrolment.
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-200">
            <strong className="text-blue-900 block mb-0.5">Transparent Fixed Price</strong>
            Flat fee of ₹2,999 with zero hidden charges or surprise markups.
          </div>
        </div>
      </section>

      {/* 9.r. FAQs */}
      <section id="faqs" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 18
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Frequently Asked Questions (FAQs)
          </h2>
        </div>

        <div className="space-y-2 pt-1">
          {TRUST_FAQ_ITEMS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 font-bold text-xs text-slate-900 hover:bg-slate-50 cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-blue-800 flex-shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      isOpen ? 'rotate-180 text-blue-800' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
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

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

export const TWELVE_A_FAQ_ITEMS = [
  {
    q: 'What is the main difference between Section 12A (12AB) and Section 80G?',
    a: 'Section 12A (now administered under Section 12AB) exempts the NGO from paying income tax on its surplus donations and receipts (provided 85% is utilized for charitable activities). Section 80G benefits the donor, allowing them to claim a 50% income tax deduction on eligible donations made to the NGO.'
  },
  {
    q: 'Can newly incorporated NGOs apply for 12A and 80G immediately?',
    a: 'Yes. Under the revised Income Tax regime, newly incorporated NGOs (without prior activity or audited accounts) can immediately apply for Provisional Registration under Form 10A, which is granted automatically within a few days for a validity of 3 years.'
  },
  {
    q: 'What is the validity period of Provisional vs Regular 12A and 80G certificates?',
    a: 'Provisional 12A/80G registration is valid for 3 assessment years. At least 6 months prior to its expiry (or within 6 months of commencing charitable activities), the NGO must apply for Regular 12AB/80G under Form 10AB, which is valid for 5 years.'
  },
  {
    q: 'What is Form 10BD and is it mandatory for 80G registered non-profits?',
    a: 'Form 10BD is an annual electronic statement of donations that every 80G-certified NGO must file on the Income Tax e-filing portal before May 31 for the preceding financial year. It issues unique Certificate Form 10BE to donors to validate their tax deduction claims.'
  },
  {
    q: 'Can Religious Trusts obtain 80G certification?',
    a: 'Generally, trusts created solely for religious purposes (e.g., temples, places of worship) are not eligible for 80G donor tax deductions, even though they can obtain 12A income tax exemption. Only public charitable trusts serving secular objectives are eligible for 80G.'
  },
  {
    q: 'What is the 85% expenditure rule under Section 12A?',
    a: 'To retain 100% tax exemption on annual income, an NGO must apply at least 85% of its total receipts towards its stated charitable objectives in India during the financial year. The remaining 15% can be accumulated unconditionally.'
  }
];

export const TwelveAEightyGContentSections: React.FC<ContentProps> = ({
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
            Overview: 12A &amp; 80G Tax Exemption Registrations
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          In India, forming a non-profit organization (Trust, Society, or Section 8 Company) is only the first step. Without obtaining <strong>Section 12A (now Section 12AB)</strong> and <strong>Section 80G</strong> registrations from the Income Tax Department, the NGO is treated as an ordinary taxable entity subject to standard corporate or slab tax rates on its donation revenues.
        </p>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          <strong>Section 12A</strong> shields the organization's charitable surplus from heavy income taxes, while <strong>Section 80G</strong> serves as the primary fundraising engine by providing individual and corporate donors with a 50% deduction on their taxable income. Akshay B2B Solutions handles the comprehensive preparation of Form 10A / 10AB, past activity audit summaries, trustee disclosures, and representations before the Commissioner of Income Tax (Exemptions).
        </p>
      </section>

      {/* 9.b. Registration/Process Overview */}
      <section id="registration" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 2
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Registration &amp; Application Architecture
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Under the modernized Income Tax framework introduced in Finance Act amendments, the registration mechanism is divided into two phases: <strong>Provisional Registration (Form 10A)</strong> for newly incorporated entities valid for 3 years, and <strong>Regular/Final Registration (Form 10AB)</strong> for active non-profits valid for 5 years.
        </p>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Applications are submitted electronically through the Income Tax e-filing portal signed via Digital Signature Certificate (DSC) or Aadhaar Electronic Verification Code (EVC).
        </p>
      </section>

      {/* 9.c. What is 12A & 80G Registration? */}
      <section id="what-is-ngo-registration" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 3
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            What is 12A &amp; 80G Registration?
          </h2>
        </div>

        <p className="text-xs sm:text-sm font-bold text-slate-900">
          12A &amp; 80G Registrations are statutory tax exemptions granted under the Income Tax Act, 1961. Section 12A grants full income tax exemption on the NGO's surplus income/receipts (provided at least 85% is spent on charitable purposes), while Section 80G allows donors to claim a 50% tax deduction on their contributions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          {[
            {
              title: 'Section 12A / 12AB (NGO Tax Exemption)',
              desc: 'Exempts 100% of charitable surplus, voluntary contributions, and membership revenues from Income Tax liability.'
            },
            {
              title: 'Section 80G (Donor Tax Deduction)',
              desc: 'Enables individual donors, businesses, and high-net-worth philanthropists to deduct 50% of their donation value from taxable income.'
            },
            {
              title: 'CSR & Grant Magnet',
              desc: 'CSR funding committees and institutional foundations mandate both 12A and 80G certificates before releasing grants.'
            },
            {
              title: 'Form 10A / 10AB Dual Filing',
              desc: 'Combined single-window filing on the Income Tax portal handled seamlessly by our chartered accountants.'
            },
            {
              title: 'Uniform Unique Registration Number (URN)',
              desc: 'Allots a 16-digit central URN universally verifiable by tax assessing officers and donors nationwide.'
            },
            {
              title: 'Protection from Commercial Tax Slabs',
              desc: 'Shields non-profit bank deposits, endowments, and property income from standard 30%+ commercial tax slabs.'
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
            Key Characteristics of the 12A &amp; 80G Regime
          </h2>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-slate-600">
          <div>
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">
              1. The 85% Utilization Mandate
            </h4>
            <p>
              To maintain 12A tax exemption, an NGO must apply at least 85% of its total annual receipts towards charitable objectives. The remaining 15% may be retained as operational reserves without tax penalties.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">
              2. Annual Statement of Donations (Form 10BD &amp; 10BE)
            </h4>
            <p>
              80G-certified non-profits must electronically report all donor details in Form 10BD by May 31 annually, generating digital 10BE donation certificates for donors.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">
              3. Strict Restriction on Private Benefits (Section 13)
            </h4>
            <p>
              Section 13 prohibits using non-profit funds to provide personal benefits, excessive salaries, or undue perks to founders, trustees, or their relatives.
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
            Importance &amp; Benefits of Dual 12A &amp; 80G Certification
          </h2>
        </div>

        <div className="space-y-2.5 text-xs text-slate-600">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <strong className="text-slate-900 font-bold block mb-0.5">
              1. Zero Income Tax on Donations &amp; Grants (12A)
            </strong>
            Shields entire organizational revenue from the standard 30% corporate income tax rate, keeping all funds dedicated to public welfare.
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <strong className="text-slate-900 font-bold block mb-0.5">
              2. Powerful Donor Incentive (80G)
            </strong>
            Donors receive a 50% deduction on eligible donations, making your NGO vastly more attractive to high-net-worth individuals and corporate partners.
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <strong className="text-slate-900 font-bold block mb-0.5">
              3. Unlocks Corporate CSR Funding
            </strong>
            Companies require active 12A and 80G registrations prior to issuing Corporate Social Responsibility (CSR) allocations.
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <strong className="text-slate-900 font-bold block mb-0.5">
              4. Institutional Credibility &amp; Trust
            </strong>
            Proves that your non-profit undergoes rigorous regulatory scrutiny by the Income Tax Department (Exemptions).
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
            Types of 12A &amp; 80G Registrations
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1.5">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center font-bold text-xs">
              01
            </div>
            <h3 className="font-bold text-xs text-slate-900">Provisional 12A &amp; 80G (Form 10A)</h3>
            <p className="text-xs text-slate-600">
              For newly established NGOs without prior operations or audited accounts. Valid for <strong>3 years</strong>, issued automatically to kickstart fundraising immediately.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1.5">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center font-bold text-xs">
              02
            </div>
            <h3 className="font-bold text-xs text-slate-900">Regular / Final 12AB &amp; 80G (Form 10AB)</h3>
            <p className="text-xs text-slate-600">
              For active NGOs with operational track records or provisional certificate holders converting within 6 months of commencing activities. Valid for <strong>5 years</strong>.
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
            Comparative Analysis: Section 12A vs Section 80G vs Both Combined
          </h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
          <table className="w-full text-xs text-left text-slate-700">
            <thead className="bg-slate-900 text-white font-bold">
              <tr>
                <th className="p-3">Aspect</th>
                <th className="p-3">Section 12A Only</th>
                <th className="p-3">Section 80G Only</th>
                <th className="p-3 bg-blue-900">Both Combined (12A + 80G)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              <tr>
                <td className="p-3 font-semibold text-slate-900">Primary Beneficiary</td>
                <td className="p-3 font-medium">The NGO / Non-Profit</td>
                <td className="p-3 font-medium">The Donors / Contributors</td>
                <td className="p-3 bg-blue-50/50 font-bold text-orange-700">Both NGO &amp; Donors</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">Tax Benefit to NGO</td>
                <td className="p-3 text-orange-600 font-bold">100% Tax Exemption on Surplus</td>
                <td className="p-3 text-rose-600">None (Full tax applies to surplus)</td>
                <td className="p-3 bg-blue-50/50 font-bold text-orange-700">100% Tax Exemption</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">Tax Benefit to Donor</td>
                <td className="p-3 text-slate-500">None</td>
                <td className="p-3 text-orange-600 font-bold">50% Deduction on taxable income</td>
                <td className="p-3 bg-blue-50/50 font-bold text-orange-700">50% Deduction on taxable income</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">Fundraising Impact</td>
                <td className="p-3 text-slate-600">Moderate</td>
                <td className="p-3 text-slate-600">High for retail donations</td>
                <td className="p-3 bg-blue-50/50 font-bold text-blue-900">Maximum (Individual + Corporate + Grants)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">CSR Fund Eligibility</td>
                <td className="p-3 text-slate-500">Partial</td>
                <td className="p-3 text-slate-500">Partial</td>
                <td className="p-3 bg-blue-50/50 font-bold text-orange-700">100% Eligible</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">Recommendation</td>
                <td className="p-3 text-slate-500">Incomplete setup</td>
                <td className="p-3 text-slate-500">Incomplete setup</td>
                <td className="p-3 bg-blue-50/50 font-bold text-orange-700">Industry Gold Standard</td>
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
            Governing Legal Sections of the Income Tax Act, 1961
          </h2>
        </div>

        <ul className="space-y-2 text-xs text-slate-600 list-disc list-inside">
          <li>
            <strong>Section 11 &amp; 12:</strong> Defines conditions for income derived from property held under trust for charitable or religious purposes.
          </li>
          <li>
            <strong>Section 12AB:</strong> Sets forth the procedure for grant of provisional and regular 5-year registrations.
          </li>
          <li>
            <strong>Section 80G(5):</strong> Stipulates approval criteria for non-profit entities to issue tax-deductible receipts to contributors.
          </li>
          <li>
            <strong>Section 115BBI:</strong> Imposes a flat 30% tax penalty on accreted income or non-exempt expenditures in case of violations.
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
            Eligibility &amp; Required Documents
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
            <h4 className="font-bold text-blue-900 uppercase tracking-wider">
              Entity Eligibility
            </h4>
            <ul className="space-y-1.5 text-slate-600 list-disc list-inside">
              <li>Must be registered as a Public Trust, Society, or Section 8 Company.</li>
              <li>Objectives must be exclusively charitable (education, health, relief, environment).</li>
              <li>No personal profit sharing or commercial business motive.</li>
              <li>Activities must be open to all individuals irrespective of caste or creed.</li>
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
            <h4 className="font-bold text-blue-900 uppercase tracking-wider">
              Required Documents
            </h4>
            <ul className="space-y-1.5 text-slate-600 list-disc list-inside">
              <li>Registration Certificate / Trust Deed / MOA &amp; AOA.</li>
              <li>PAN Card of the NGO.</li>
              <li>PAN &amp; Aadhaar Cards of all Trustees / Directors / Governing Body.</li>
              <li>Detailed Note on past activities (or proposed activities for new NGOs).</li>
              <li>Audited Financial Statements for past 3 years (for existing NGOs).</li>
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
            Step-by-Step 12A &amp; 80G Filing Process
          </h2>
        </div>

        <div className="space-y-3">
          {[
            {
              step: 'Step 1',
              title: 'Eligibility Check &amp; Document Audit',
              desc: 'Chartered accountants review the NGO constitution, charitable objects, and financial accounts.'
            },
            {
              step: 'Step 2',
              title: 'Electronic Form 10A Preparation',
              desc: 'Draft comprehensive electronic application on the Income Tax e-filing portal with proper code classifications.'
            },
            {
              step: 'Step 3',
              title: 'Digital Signature &amp; Verification',
              desc: 'Sign and submit Form 10A using the Digital Signature Certificate (DSC) or Aadhaar EVC of the authorized trustee/director.'
            },
            {
              step: 'Step 4',
              title: 'Processing by CIT (Exemptions)',
              desc: 'The Centralized Processing Centre / CIT (Exemptions) reviews the application and constitutional documents.'
            },
            {
              step: 'Step 5',
              title: 'Issuance of 12A &amp; 80G Certificates (Form 10AC)',
              desc: 'The department issues the official 12A & 80G certificates with a permanent 16-character Unique Registration Number (URN).'
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
            Ongoing Compliances for 12A &amp; 80G Entities
          </h2>
        </div>

        <p className="text-xs font-bold text-slate-900">
          To protect your tax-exempt status, maintain strict compliance with these annual mandates:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block mb-1">Form 10BD Statement of Donations</strong>
            Mandatory annual filing by May 31 declaring all donations received during the preceding financial year.
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block mb-1">Annual ITR-7 &amp; Audit Report (Form 10B/10BB)</strong>
            File audited income tax returns and CA audit reports before the statutory deadline (October 31).
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block mb-1">85% Charitable Utilization Rule</strong>
            Spend at least 85% of total annual income on specified non-profit objectives in India.
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block mb-1">5-Year Regular Renewal (Form 10AB)</strong>
            Apply for regular 5-year renewal at least 6 months prior to expiry of the provisional certificate.
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
            Processing Timelines
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Provisional 12A &amp; 80G registration is typically issued within <strong>7 to 10 working days</strong> from electronic submission. Regular Form 10AB applications involving commissioner scrutiny and activity verification take between <strong>1 to 3 months</strong>.
        </p>
      </section>

      {/* 9.n. Certification */}
      <section id="certification" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 14
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            12A &amp; 80G Order in Form 10AC
          </h2>
        </div>

        <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-200 text-xs space-y-2">
          <p className="text-slate-700">
            The Income Tax Department issues <strong>Form No. 10AC (Order for Registration / Provisional Registration)</strong> containing the 16-digit Unique Registration Number (URN), period of validity, and digital approval of the Commissioner of Income Tax.
          </p>
          <p className="font-bold text-blue-900">
            This digital certificate serves as conclusive legal proof of tax-exempt status across all government departments and corporate CSR desks.
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
            Fee Structure
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          The Income Tax Department charges zero statutory fee for 12A and 80G applications. Akshay B2B Solutions provides comprehensive dual application drafting, CA audit review, activity report formatting, and filing at an all-inclusive flat fee of <strong>₹5,999/- only</strong>.
        </p>
      </section>

      {/* 9.p. Taxation */}
      <section id="taxation" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 16
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Taxation Benefits Summary
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 bg-white rounded-xl border border-slate-200">
            <strong className="text-blue-900 block mb-1">100% Surplus Exemption (12A)</strong>
            Surplus funds and interest income generated are entirely exempt from corporate tax rates.
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-200">
            <strong className="text-blue-900 block mb-1">50% Donor Tax Relief (80G)</strong>
            Donors reduce their taxable income by 50% of the donated sum under Chapter VI-A.
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-200">
            <strong className="text-blue-900 block mb-1">Exempt Corpus Donations</strong>
            Specific corpus donations given with specific written directions remain 100% non-taxable capital additions.
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-200">
            <strong className="text-blue-900 block mb-1">Protection from Section 115BBI</strong>
            Proper 12A maintenance shields the non-profit from punitive 30% tax levies on accumulated reserves.
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
            Why Akshay B2B Solutions for 12A &amp; 80G?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 bg-white rounded-xl border border-slate-200">
            <strong className="text-blue-900 block mb-0.5">Chartered Accountant Team</strong>
            Experienced CA/CPA team specializing in NGO taxation and exemption jurisprudence.
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-200">
            <strong className="text-blue-900 block mb-0.5">Dual Filing Synergy</strong>
            Simultaneous submission of Form 10A for 12A and 80G for maximum speed.
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-200">
            <strong className="text-blue-900 block mb-0.5">Notice &amp; Query Handling</strong>
            Comprehensive replies to Income Tax Department queries during commissioner verification.
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-200">
            <strong className="text-blue-900 block mb-0.5">Flat Transparent Pricing</strong>
            Clear ₹5,999 pricing with zero hidden surcharges.
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
          {TWELVE_A_FAQ_ITEMS.map((faq, idx) => {
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

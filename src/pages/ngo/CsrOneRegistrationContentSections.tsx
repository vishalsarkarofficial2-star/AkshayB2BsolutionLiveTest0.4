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

export const CSR1_FAQ_ITEMS = [
  {
    q: 'What is Form CSR-1 and why is it mandatory?',
    a: 'Form CSR-1 is an electronic form prescribed under the Companies (Corporate Social Responsibility Policy) Rules, 2014. It is legally mandatory for any implementing agency (Trust, Society, Section 8 Company) that wishes to receive Corporate Social Responsibility (CSR) funds from Indian or multinational corporations.'
  },
  {
    q: 'Can a company release CSR funds to an NGO without Form CSR-1?',
    a: 'No. Under Section 135 of the Companies Act, 2013, companies are strictly prohibited from disbursing CSR expenditure to any NGO that does not possess a valid, MCA-allotted CSR Registration Number.'
  },
  {
    q: 'What are the essential prerequisites for filing Form CSR-1?',
    a: 'The NGO must possess: (1) Active PAN Card, (2) Valid Registration under Section 12A and 80G of the Income Tax Act, (3) Verified NITI Aayog NGO Darpan Unique ID, and (4) Digital Signature Certificate (DSC) of the authorized director/trustee.'
  },
  {
    q: 'Is certification by a practicing professional mandatory for Form CSR-1?',
    a: 'Yes. Form CSR-1 must be digitally certified and verified by an independent practicing Chartered Accountant (CA), Company Secretary (CS), or Cost Accountant (CMA) holding a valid certificate of practice.'
  },
  {
    q: 'How long does it take to obtain the CSR Registration Number?',
    a: 'Form CSR-1 is processed through the MCA Straight Through Process (STP). Once certified and digitally signed, the MCA portal automatically generates the CSR Registration Number and approval letter within 1 to 2 business days.'
  },
  {
    q: 'What is the validity of the CSR Registration Number?',
    a: 'The CSR Registration Number has lifetime validity, provided the underlying NGO maintains active Section 12A/80G tax registrations and updates any constitutional changes on the MCA portal.'
  }
];

export const CsrOneRegistrationContentSections: React.FC<ContentProps> = ({
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
            Overview: Form CSR-1 Registration (MCA Portal)
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          <strong>Form CSR-1</strong> is a mandatory electronic registration filed with the <strong>Ministry of Corporate Affairs (MCA)</strong> under the Companies (Corporate Social Responsibility Policy) Amendment Rules, 2021. It serves as the official mechanism to register implementing agencies (Public Trusts, Societies, and Section 8 Companies) eligible to receive statutory CSR spending from companies operating in India.
        </p>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Under Section 135 of the Companies Act, 2013, Indian corporations with significant net worth or profitability are mandated to spend at least 2% of their average net profits on social impact programs. Form CSR-1 guarantees that only compliant, tax-exempt, and professionally certified non-profits can access this multi-thousand crore CSR funding pool.
        </p>
      </section>

      {/* 9.b. Registration/Process Overview */}
      <section id="registration" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 2
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Registration &amp; Processing Framework
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          The registration involves filing Form CSR-1 digitally on the MCA V3 portal. The form captures the entity’s PAN, legal registration nature, Section 12A/80G Unique Registration Numbers (URN), and NITI Aayog Darpan ID.
        </p>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          The electronic form must be signed with a Class 3 Digital Signature Certificate (DSC) by an authorized trustee/director and certified by a practicing Chartered Accountant (CA) or Company Secretary (CS). Upon submission, the MCA system processes the form via Straight Through Processing (STP) and immediately issues an official <strong>CSR Registration Number Certificate</strong>.
        </p>
      </section>

      {/* 9.c. What is CSR-1 Registration? */}
      <section id="what-is-ngo-registration" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 3
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            What is Form CSR-1 Registration?
          </h2>
        </div>

        <p className="text-xs sm:text-sm font-bold text-slate-900">
          Form CSR-1 is an electronic form filed on the MCA portal through which an NGO (Trust, Society, or Section 8 Company) registers itself to become legally eligible to receive Corporate Social Responsibility (CSR) funds from companies under Section 135 of the Companies Act, 2013.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          {[
            {
              title: 'Mandatory MCA Compliance',
              desc: 'Enforced by the Ministry of Corporate Affairs to regulate non-profit implementing agencies receiving corporate funding.'
            },
            {
              title: 'Unique CSR Registration Number',
              desc: 'Generates a unique 11-digit CSR identifier (e.g., CSR00012345) quoted on all corporate CSR project grant agreements.'
            },
            {
              title: 'Pre-requisite for CSR Grantees',
              desc: 'Corporate CSR boards are legally prohibited from transferring CSR funds to any entity lacking a valid CSR-1 number.'
            },
            {
              title: 'Practicing Professional Certification',
              desc: 'Mandatory verification and digital sign-off by a practicing CA, CS, or CMA ensures 100% legal compliance.'
            },
            {
              title: 'Cross-Entity Applicability',
              desc: 'Available for Registered Societies, Public Trusts, and Section 8 Companies with active 12A/80G status.'
            },
            {
              title: 'Lifetime Validity',
              desc: 'Permanent registration requiring no annual renewal, provided 12A/80G tax exemptions remain current.'
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
            Key Characteristics of the CSR-1 Regime
          </h2>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-slate-600">
          <div>
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">
              1. Straight Through Processing (STP)
            </h4>
            <p>
              The MCA portal validates PAN, 12A/80G URN, and Darpan ID electronically, generating the CSR Registration Number instantly upon digital certification.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">
              2. Strict Professional Accountability
            </h4>
            <p>
              The practicing CA/CS certifies that they have verified the NGO’s registration certificates, original trust deed/MOA, and valid 12A/80G orders.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">
              3. Alignment with Schedule VII
            </h4>
            <p>
              Enables non-profits to execute projects across sectors listed under Schedule VII of the Companies Act (hunger, education, healthcare, gender equality, rural development, environment).
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
            Importance &amp; Strategic Benefits of CSR-1 Registration
          </h2>
        </div>

        <div className="space-y-2.5 text-xs text-slate-600">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <strong className="text-slate-900 font-bold block mb-0.5">
              1. Unlocks India’s ₹25,000+ Crore Annual CSR Pool
            </strong>
            Enables your non-profit to pitch for and receive high-value corporate social responsibility budgets from public and private corporations.
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <strong className="text-slate-900 font-bold block mb-0.5">
              2. Absolute Legal Compliance for Corporate Donors
            </strong>
            Provides corporate donors with complete legal indemnity under Section 135, ensuring their CSR expenditure is approved by auditors and MCA.
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <strong className="text-slate-900 font-bold block mb-0.5">
              3. High Institutional Credibility
            </strong>
            Appears on the official MCA public registry of verified CSR Implementing Agencies across India.
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <strong className="text-slate-900 font-bold block mb-0.5">
              4. Seamless Long-Term Corporate Partnerships
            </strong>
            Facilitates multi-year corporate partnerships and grant disbursement agreements with minimal procedural friction.
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
            Categories of Entities Eligible for Form CSR-1
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center font-bold text-xs">
              01
            </div>
            <h3 className="font-bold text-xs text-slate-900">CSR-1 for Section 8 Companies</h3>
            <p className="text-xs text-slate-600">
              Registered Section 8 non-profit companies possessing valid 12A/80G certificates.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center font-bold text-xs">
              02
            </div>
            <h3 className="font-bold text-xs text-slate-900">CSR-1 for Registered Societies</h3>
            <p className="text-xs text-slate-600">
              Societies registered under Societies Registration Act 1860 with active 12A/80G and Darpan ID.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center font-bold text-xs">
              03
            </div>
            <h3 className="font-bold text-xs text-slate-900">CSR-1 for Public Trusts</h3>
            <p className="text-xs text-slate-600">
              Public Charitable Trusts created under a registered Trust Deed with active 12A/80G recognitions.
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
            Comparative Analysis: CSR-1 Registered vs Non-Registered NGO
          </h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
          <table className="w-full text-xs text-left text-slate-700">
            <thead className="bg-slate-900 text-white font-bold">
              <tr>
                <th className="p-3">Aspect</th>
                <th className="p-3 bg-blue-900">CSR-1 Registered NGO</th>
                <th className="p-3">Non-CSR-1 Registered NGO</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              <tr>
                <td className="p-3 font-semibold text-slate-900">Eligibility for Corporate CSR Grants</td>
                <td className="p-3 bg-blue-50/50 font-bold text-orange-700">100% Eligible under Section 135</td>
                <td className="p-3 text-rose-600 font-medium">Strictly Illegal for companies to fund</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">Legal Compliance (Companies Act)</td>
                <td className="p-3 bg-blue-50/50 font-bold text-blue-900">Fully Compliant with MCA mandate</td>
                <td className="p-3 text-rose-600">Non-compliant (Penalties on corporate donors)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">Corporate Donor Trust</td>
                <td className="p-3 bg-blue-50/50">Maximum; verified MCA registration number</td>
                <td className="p-3 text-slate-500">Low; corporate compliance desks reject immediately</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">Ministry Verification</td>
                <td className="p-3 bg-blue-50/50">Publicly verified on MCA V3 database</td>
                <td className="p-3 text-slate-500">Unlisted in MCA implementing agency registry</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">Recommendation</td>
                <td className="p-3 bg-blue-50/50 font-bold text-orange-700">Mandatory for any fundraising NGO</td>
                <td className="p-3 text-slate-500">Limited to individual retail donations only</td>
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
            Governing Legal Framework
          </h2>
        </div>

        <ul className="space-y-2 text-xs text-slate-600 list-disc list-inside">
          <li>
            <strong>Section 135, Companies Act 2013:</strong> Mandates 2% CSR expenditure for qualifying companies and governs eligible implementing entities.
          </li>
          <li>
            <strong>Companies (CSR Policy) Amendment Rules, 2021:</strong> Introduced mandatory electronic Form CSR-1 filing for all implementing agencies.
          </li>
          <li>
            <strong>Schedule VII of Companies Act:</strong> Defines approved social impact activities (education, health, poverty, environment, heritage).
          </li>
          <li>
            <strong>Penalties for Illegal Transfers:</strong> Companies violating CSR disbursement rules face penalties up to twice the unspent amount or ₹1 crore.
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
              Entity Prerequisites
            </h4>
            <ul className="space-y-1.5 text-slate-600 list-disc list-inside">
              <li>Must be a registered Section 8 Company, Registered Society, or Public Trust.</li>
              <li>Must have active <strong>Section 12A &amp; 80G</strong> registrations.</li>
              <li>Must be enrolled on the <strong>NITI Aayog NGO Darpan</strong> portal.</li>
              <li>Must have at least 3 years track record in undertaking similar activities (if an independent implementing agency).</li>
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
            <h4 className="font-bold text-blue-900 uppercase tracking-wider">
              Required Documents
            </h4>
            <ul className="space-y-1.5 text-slate-600 list-disc list-inside">
              <li>Copy of NGO PAN Card.</li>
              <li>Registration Certificate / Trust Deed / MOA-AOA.</li>
              <li>Section 12A and 80G Registration Orders (Form 10AC).</li>
              <li>NGO Darpan Unique ID proof.</li>
              <li>Class 3 DSC of authorized Trustee / Director.</li>
              <li>PAN and Email ID of all governing body members.</li>
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
            Step-by-Step CSR-1 Filing Process
          </h2>
        </div>

        <div className="space-y-3">
          {[
            {
              step: 'Step 1',
              title: 'Prerequisite Audit (12A, 80G &amp; Darpan ID)',
              desc: 'Our chartered accountants verify active status of your 12A/80G certificates and NITI Aayog portal listing.'
            },
            {
              step: 'Step 2',
              title: 'Drafting Electronic Form CSR-1',
              desc: 'Prepare the electronic web form on the MCA portal with precise entity classification and director/trustee KYC data.'
            },
            {
              step: 'Step 3',
              title: 'Digital Signature (DSC) Affixation',
              desc: 'Affix the Class 3 Digital Signature Certificate (DSC) of the authorized director, trustee, or secretary.'
            },
            {
              step: 'Step 4',
              title: 'Professional CA/CS Certification',
              desc: 'Our practicing Chartered Accountant / Company Secretary digitally certifies the legal compliance of the filing.'
            },
            {
              step: 'Step 5',
              title: 'Submission &amp; Instant CSR Number Generation',
              desc: 'The MCA system processes the form via STP and immediately issues the official CSR Registration Approval Letter.'
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
            Post-Registration Compliance for CSR Funds
          </h2>
        </div>

        <p className="text-xs font-bold text-slate-900">
          When receiving and utilizing CSR funds, non-profits must adhere to strict financial discipline:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block mb-1">Separate CSR Bank Account</strong>
            Maintain dedicated project-specific accounting to track receipt and utilization of CSR funds.
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block mb-1">Utilization Certificates (UC)</strong>
            Provide CA-certified Fund Utilization Certificates and project progress reports to corporate donors.
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block mb-1">Schedule VII Alignment</strong>
            Ensure every rupee of CSR money is spent solely on activities approved under Schedule VII.
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block mb-1">Annual 10BD Reporting</strong>
            Declare all CSR grants in annual Form 10BD filings to the Income Tax Department.
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
          Form CSR-1 registration is typically completed within <strong>1 to 2 working days</strong>. Document review and CA certification take 24 hours; upon portal submission, the MCA STP engine delivers the CSR Registration Number within 24 to 48 hours.
        </p>
      </section>

      {/* 9.n. Certification */}
      <section id="certification" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 14
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            MCA CSR Registration Letter
          </h2>
        </div>

        <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-200 text-xs space-y-2">
          <p className="text-slate-700">
            The Ministry of Corporate Affairs issues an official <strong>Approval Letter &amp; CSR Registration Certificate</strong> containing the 11-character CSR Registration Number (e.g., CSR00019876), Entity Name, Registration Date, and Registrar signature.
          </p>
          <p className="font-bold text-blue-900">
            This certificate is universally accepted by all Corporate CSR Committees, MNC CSR Trusts, and statutory auditors across India.
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
          MCA charges zero statutory government filing fee for Form CSR-1. Akshay B2B Solutions provides complete pre-requisite audits, form drafting, practicing CA certification, and submission at an all-inclusive flat fee of <strong>₹2,499/- only</strong>.
        </p>
      </section>

      {/* 9.p. Taxation */}
      <section id="taxation" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 16
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Taxation Aspects of CSR Grants
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          While Form CSR-1 is a corporate regulatory filing under the Companies Act, CSR receipts in the hands of the NGO are governed by Sections 11 and 12 of the Income Tax Act. Provided the NGO maintains its 12A exemption and applies at least 85% of CSR funds towards charitable objects, the CSR receipts remain 100% tax-free.
        </p>
      </section>

      {/* 9.q. Why Us */}
      <section id="why-us" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 17
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Why Akshay B2B Solutions for CSR-1?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 bg-white rounded-xl border border-slate-200">
            <strong className="text-blue-900 block mb-0.5">In-House Practicing CA/CS</strong>
            Direct digital certification by certified professionals with zero third-party delays.
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-200">
            <strong className="text-blue-900 block mb-0.5">Rapid 24–48 Hour Turnaround</strong>
            Fast filing on MCA V3 portal with immediate tracking and resolution.
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-200">
            <strong className="text-blue-900 block mb-0.5">Complete Non-Profit Compliance</strong>
            Integrated solutions for 12A/80G, Darpan ID, and CSR Grant reporting.
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-200">
            <strong className="text-blue-900 block mb-0.5">Fixed Honest Pricing</strong>
            Flat fee of ₹2,499 with zero hidden charges.
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
          {CSR1_FAQ_ITEMS.map((faq, idx) => {
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

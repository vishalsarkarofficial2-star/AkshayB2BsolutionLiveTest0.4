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

export const DARPAN_FAQ_ITEMS = [
  {
    q: 'Is NGO Darpan registration mandatory for all non-profits in India?',
    a: 'While optional for informal private charity work, NGO Darpan registration is legally mandatory for any Trust, Society, or Section 8 Company that wishes to apply for government grants, access central/state ministry funding, participate in government tenders, or receive corporate CSR funding under Form CSR-1.'
  },
  {
    q: 'Who is eligible to apply for an NGO Darpan Unique ID?',
    a: 'Any legally registered Non-Governmental Organization—including a Public Charitable Trust, Registered Society, or Section 8 Company—possessing a valid PAN card and active executive trustees/directors can register on the NITI Aayog NGO Darpan portal.'
  },
  {
    q: 'What documents are required for NGO Darpan Portal registration?',
    a: 'Mandatory documents include: NGO PAN card, Certificate of Incorporation/Registration, Trust Deed / MOA & Rules / Section 8 MOA-AOA, PAN and Aadhaar of at least 3 governing body members/trustees, official mobile number, active email ID, and details of past project grants/achievements (if applicable).'
  },
  {
    q: 'How long does it take to generate an NGO Darpan Unique ID?',
    a: 'The NITI Aayog portal verification typically takes 3 to 7 working days once all documentation, trustee Aadhaar authentication, and registration proofs are uploaded and verified by the system.'
  },
  {
    q: 'What is the validity period of the NGO Darpan Unique ID?',
    a: 'The NGO Darpan Unique ID has lifetime validity once issued. However, the NGO must periodically update its portal profile with annual audited accounts, changed trustee details, and newly received grant information to maintain an active, credible status.'
  },
  {
    q: 'Can a newly formed NGO without a track record register on Darpan?',
    a: 'Yes. Newly registered NGOs (even those incorporated just a few days ago) can immediately apply for and receive an NGO Darpan Unique ID to establish official government credibility and prepare for upcoming ministry funding calls.'
  }
];

export const DarpanRegistrationContentSections: React.FC<ContentProps> = ({
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
            Overview: NGO Darpan Registration (NITI Aayog Portal)
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          <strong>NGO-Darpan</strong> is a flagship e-governance portal maintained jointly by <strong>NITI Aayog</strong> (National Institution for Transforming India) and the <strong>National Informatics Centre (NIC)</strong>. It acts as an authoritative central repository and interface connecting Voluntary Organizations (VOs) and Non-Governmental Organizations (NGOs) with Central Government Ministries, Departments, and State Governments across India.
        </p>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Registration on the Darpan portal generates a verified <strong>Unique NGO ID</strong>. This unique alphanumeric identification is statutory for non-profit entities (Trusts, Societies, and Section 8 Companies) wishing to apply for federal grants-in-aid, participate in centrally sponsored social schemes, or partner with corporate social responsibility (CSR) programs. Akshay B2B Solutions handles the entire portal enrollment, profile structuring, and Aadhaar authentication process end-to-end.
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
          The registration is conducted 100% online through the official NITI Aayog portal. The process involves creating an authorized portal account, entering the NGO's PAN details, uploading constitutional certificates (Trust Deed, Society Registration, or Section 8 Certificate), and capturing the KYC credentials and Aadhaar verifications of key office bearers (Trustees, President, Secretary, Directors).
        </p>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Upon submission, the NITI Aayog administrative desk reviews the entity records and issues an official <strong>Darpan Unique ID Certificate</strong>. Our legal experts ensure that the profile data, sector operational tags, and governing member disclosures are perfectly aligned to prevent application rejections or portal query loops.
        </p>
      </section>

      {/* 9.c. What is Darpan Registration? */}
      <section id="what-is-ngo-registration" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 3
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            What is NGO Darpan Registration?
          </h2>
        </div>

        <p className="text-xs sm:text-sm font-bold text-slate-900">
          NGO Darpan Registration is the statutory enrollment of a non-profit organization on the NITI Aayog portal to obtain a verified Unique ID that enables official government coordination and funding eligibility.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          {[
            {
              title: 'Central Government Repository',
              desc: 'Enables real-time verification of your non-profit’s existence, legal standing, and key trustees by all ministries.'
            },
            {
              title: 'Mandatory for Ministry Grants',
              desc: 'Required to access grant portals for Social Justice, Women & Child, Education, Tribal Affairs, and Health ministries.'
            },
            {
              title: 'Prerequisite for Form CSR-1',
              desc: 'Required for e-filing Form CSR-1 on the Ministry of Corporate Affairs portal to receive Corporate CSR funding.'
            },
            {
              title: 'Unique Digital Identity',
              desc: 'Generates a permanent government-recognized alphanumeric ID displayed publicly across verified NGO registries.'
            },
            {
              title: 'Applicable to All Legal Forms',
              desc: 'Available for Registered Public Trusts, Societies (Act 1860), and Section 8 Non-Profit Companies alike.'
            },
            {
              title: 'Enhanced Institutional Trust',
              desc: 'Boosts philanthropic donor credibility by demonstrating complete government transparency and regulatory compliance.'
            }
          ].map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <h4 className="font-bold text-xs text-blue-900 mb-1">{item.title}</h4>
              <p className="text-xs text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-xs font-bold text-slate-900 pt-1">
          Without Darpan enrollment, an NGO is effectively invisible to central and state government funding opportunities.
        </p>
      </section>

      {/* 9.d. Key Characteristics */}
      <section id="key-characteristics" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 4
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Key Characteristics of NGO Darpan Enrolment
          </h2>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-slate-600">
          <div>
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">
              1. One Entity, One Unique ID
            </h4>
            <p>
              Each registered entity receives one unique identifier linked strictly to its permanent PAN card, preventing duplicate or ghost NGO listings.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">
              2. Aadhaar-Linked Governance
            </h4>
            <p>
              Mandates electronic Aadhaar verification of at least three key executive trustees/office bearers to ensure authentic, accountable non-profit leadership.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">
              3. Lifetime Validity
            </h4>
            <p>
              The generated Unique ID does not expire. It remains permanently valid subject to periodic profile data and annual return updates.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">
              4. Pan-India Ministry Interoperability
            </h4>
            <p>
              Seamlessly integrates across central ministries (MSJE, MoWCD, MEITY, MoTA, MoEFCC) for instantaneous grant processing.
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
            Importance &amp; Strategic Benefits of Darpan Registration
          </h2>
        </div>

        <div className="space-y-2.5 text-xs text-slate-600">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <strong className="text-slate-900 font-bold block mb-0.5">
              1. Unlocks Central &amp; State Government Grants
            </strong>
            Government ministries mandate Darpan Unique ID entry on all grant application portals before processing budget allocations.
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <strong className="text-slate-900 font-bold block mb-0.5">
              2. Gateway to Corporate CSR Funds (MCA CSR-1 Linkage)
            </strong>
            Corporate CSR committees and funding foundations cross-verify Darpan portal listings before releasing CSR grant cheques.
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <strong className="text-slate-900 font-bold block mb-0.5">
              3. Public Verification &amp; Credibility
            </strong>
            Provides a publicly searchable government profile, proving that your non-profit is legitimate, audited, and compliant.
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <strong className="text-slate-900 font-bold block mb-0.5">
              4. Direct Ministry Notifications &amp; Scheme Updates
            </strong>
            Enrolled NGOs receive direct departmental updates regarding new schemes, pilot projects, workshops, and grant deadlines.
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <strong className="text-slate-900 font-bold block mb-0.5">
              5. Zero Physical Office Visits
            </strong>
            100% digital processing with rapid online authentication managed smoothly from anywhere in India.
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
            Types of Darpan Registrations by Entity Structure
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center font-bold text-xs">
              01
            </div>
            <h3 className="font-bold text-xs text-slate-900">Darpan ID for Trusts</h3>
            <p className="text-xs text-slate-600">
              Registered for Public Charitable Trusts using registered Trust Deed and trustee KYC verifications.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center font-bold text-xs">
              02
            </div>
            <h3 className="font-bold text-xs text-slate-900">Darpan ID for Societies</h3>
            <p className="text-xs text-slate-600">
              Enrolled for societies under the 1860 Act using Registration Certificate, MOA, and Governing Body details.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center font-bold text-xs">
              03
            </div>
            <h3 className="font-bold text-xs text-slate-900">Darpan ID for Section 8 Companies</h3>
            <p className="text-xs text-slate-600">
              Configured for non-profit companies using MCA Certificate of Incorporation, CIN, and Director DIN/Aadhaar data.
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
            Comparative Analysis: Registered vs Non-Registered NGO
          </h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
          <table className="w-full text-xs text-left text-slate-700">
            <thead className="bg-slate-900 text-white font-bold">
              <tr>
                <th className="p-3">Aspect</th>
                <th className="p-3 bg-blue-900">Darpan Registered NGO</th>
                <th className="p-3">Non-Darpan Registered NGO</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white">
              <tr>
                <td className="p-3 font-semibold text-slate-900">Eligibility for Government Grants</td>
                <td className="p-3 bg-blue-50/50 font-bold text-orange-700">100% Eligible across all ministries</td>
                <td className="p-3 text-rose-600 font-medium">Strictly Ineligible (Portal rejects application)</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">CSR Fund Access (Form CSR-1)</td>
                <td className="p-3 bg-blue-50/50 font-bold text-blue-900">Eligible to receive corporate CSR donations</td>
                <td className="p-3 text-slate-500">Ineligible to file Form CSR-1 on MCA</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">Transparency &amp; Credibility</td>
                <td className="p-3 bg-blue-50/50">High; publicly verified by NITI Aayog portal</td>
                <td className="p-3 text-slate-500">Low; unverified status creates donor hesitation</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">Ministry-Wise Scheme Access</td>
                <td className="p-3 bg-blue-50/50">Direct single-sign-on access to all central schemes</td>
                <td className="p-3 text-slate-500">No access to federal grant dashboards</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold text-slate-900">Recommendation</td>
                <td className="p-3 bg-blue-50/50 font-bold text-orange-700">Mandatory for any active non-profit</td>
                <td className="p-3 text-slate-500">Only suitable for small informal private groups</td>
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
            Regulatory Authority &amp; Legal Framework
          </h2>
        </div>

        <ul className="space-y-2 text-xs text-slate-600 list-disc list-inside">
          <li>
            <strong>NITI Aayog Guidelines:</strong> The portal operates under directives issued by NITI Aayog and Cabinet Secretariat to establish unified NGO governance in India.
          </li>
          <li>
            <strong>General Financial Rules (GFR), 2017:</strong> Mandates that all ministries releasing grants to voluntary bodies must route them through Darpan-registered entities.
          </li>
          <li>
            <strong>Companies (CSR Policy) Amendment Rules:</strong> Mandates NGO Darpan Unique ID for e-filing Form CSR-1 with the Ministry of Corporate Affairs.
          </li>
          <li>
            <strong>Penalties for Misrepresentation:</strong> Submitting fake PAN, forged deeds, or unverified trustee Aadhaar numbers results in permanent blacklisting from all central government funding.
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
              Entity Eligibility
            </h4>
            <ul className="space-y-1.5 text-slate-600 list-disc list-inside">
              <li>Must be a legally incorporated Trust, Society, or Section 8 Company.</li>
              <li>Must possess an active, valid PAN card issued in the NGO’s name.</li>
              <li>Must have at least 3 executive trustees/directors with valid Aadhaar numbers.</li>
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
            <h4 className="font-bold text-blue-900 uppercase tracking-wider">
              Required Documents
            </h4>
            <ul className="space-y-1.5 text-slate-600 list-disc list-inside">
              <li>Copy of NGO PAN Card.</li>
              <li>Registration Certificate / Incorporation Certificate.</li>
              <li>Trust Deed / Society MOA &amp; Rules / Section 8 MOA-AOA.</li>
              <li>PAN and Aadhaar of at least 3 executive members/trustees.</li>
              <li>Official mobile number and active email ID for OTP authentication.</li>
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
            Step-by-Step NGO Darpan Registration Process
          </h2>
        </div>

        <div className="space-y-3">
          {[
            {
              step: 'Step 1',
              title: 'Profile Signup on NITI Aayog Portal',
              desc: 'Initiate portal registration using official NGO email and authorized mobile number.'
            },
            {
              step: 'Step 2',
              title: 'Entity Details &amp; PAN Verification',
              desc: 'Enter statutory registration number, date of incorporation, act category, and validate PAN with the Income Tax database.'
            },
            {
              step: 'Step 3',
              title: 'Governing Body &amp; Trustee Aadhaar Verification',
              desc: 'Input full profile details and complete electronic Aadhaar verification for all key executive members.'
            },
            {
              step: 'Step 4',
              title: 'Document Upload &amp; Sector Mapping',
              desc: 'Upload clear PDF copies of the Trust Deed/MOA/Certificate and map key operational sectors (Education, Healthcare, Environment, etc.).'
            },
            {
              step: 'Step 5',
              title: 'Unique Darpan ID Generation',
              desc: 'Upon successful automated validation by NITI Aayog servers, the permanent Darpan Unique ID is allotted.'
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
            Ongoing Maintenance &amp; Profile Updates
          </h2>
        </div>

        <p className="text-xs font-bold text-slate-900">
          Once your Darpan ID is active, keep it up-to-date with these standard practices:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block mb-1">Annual Financial Update</strong>
            Update annual operational budget, source of funds, and audited balance sheet summary.
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block mb-1">Governing Body Changes</strong>
            Update trustee details immediately if a trustee resigns, is replaced, or new directors join.
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block mb-1">Grant Project Reporting</strong>
            Log all newly received government ministry and CSR project sanctions on the portal.
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block mb-1">FCRA / 12A / 80G Status Linkage</strong>
            Keep tax exemption numbers and FCRA registration validity dates synchronized.
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
          Darpan Registration is typically completed within <strong>3 to 5 working days</strong>. Document review and profile drafting take 24–48 hours; Aadhaar OTP authentication and document upload take 1 day; and final portal automated approval and ID generation occur within 2–3 business days.
        </p>
      </section>

      {/* 9.n. Certification */}
      <section id="certification" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 14
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Darpan Unique ID Certificate
          </h2>
        </div>

        <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-200 text-xs space-y-2">
          <p className="text-slate-700">
            The <strong>NGO Darpan Acknowledgement / ID Record</strong> displays the Unique Alphanumeric ID (e.g., DL/2023/0123456), Registered Organization Name, PAN, Registration Type, State Jurisdiction, and Operational Sectors.
          </p>
          <p className="font-bold text-blue-900">
            This ID is officially quoted on all e-Anudaan, NGO Darpan grant schemes, and Form CSR-1 submissions.
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
          NITI Aayog charges zero government fees for portal registration. Akshay B2B Solutions provides complete profile drafting, document digitization, trustee Aadhaar authentication, and ID generation at an all-inclusive flat professional fee of <strong>₹1,499/- only</strong>.
        </p>
      </section>

      {/* 9.p. Taxation */}
      <section id="taxation" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 16
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Taxation Implications &amp; Relationship with 12A/80G
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Darpan Registration itself has no direct tax implication as it is an administrative portal enrolment rather than a legal entity incorporation. However, it is an essential prerequisite for accessing government funding schemes and is cross-referenced by authorities to verify the organization's 12A (tax exemption) and 80G (donor tax deduction) compliance status.
        </p>
      </section>

      {/* 9.q. Why Us */}
      <section id="why-us" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 17
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Why Akshay B2B Solutions for Darpan Registration?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 bg-white rounded-xl border border-slate-200">
            <strong className="text-blue-900 block mb-0.5">Zero Error Profile Structuring</strong>
            Precise classification of sector objectives and executive members to avoid NITI Aayog rejections.
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-200">
            <strong className="text-blue-900 block mb-0.5">Quick 3-Day Turnaround</strong>
            Rapid document verification and immediate Aadhaar authentication coordination.
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-200">
            <strong className="text-blue-900 block mb-0.5">Complete Non-Profit Roadmap</strong>
            Integrated assistance for Form CSR-1, 12A/80G, and FCRA filings.
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-200">
            <strong className="text-blue-900 block mb-0.5">Guaranteed Transparent Pricing</strong>
            Flat fee of ₹1,499 with zero hidden charges.
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
          {DARPAN_FAQ_ITEMS.map((faq, idx) => {
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

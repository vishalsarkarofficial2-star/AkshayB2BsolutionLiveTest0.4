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
  Calendar
} from 'lucide-react';

interface ContentProps {
  onScrollToForm: () => void;
  openFaqIndex: number | null;
  setOpenFaqIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

export const SOCIETY_FAQ_ITEMS = [
  {
    q: 'Is Society registration mandatory to operate a club or welfare association?',
    a: 'While informal cultural or hobby clubs can function without registration at a very small local level, formal registration under the Societies Registration Act, 1860 is mandatory if the society wishes to hold property, open an institutional bank account, apply for government grants, obtain 12A/80G tax exemptions, or sue and be sued in its legal name.'
  },
  {
    q: 'What is the minimum number of members required to register a Society?',
    a: 'Under the Societies Registration Act, 1860, a minimum of 7 (seven) members is required to register a State-level Society. For an All-India (National Level) Society, minimum 8 to 9 members from different Indian states are typically mandated by state Registrar guidelines.'
  },
  {
    q: 'What are the essential documents required for Society Registration?',
    a: 'Required documents include: PAN and Aadhaar/Passport of all founding members, passport-size photographs, registered office address proof (utility bill/rent agreement + landlord NOC), drafted Memorandum of Association (MOA) stating aims & objectives, and Rules & Regulations (By-laws) signed by the President, Secretary, and Treasurer.'
  },
  {
    q: 'How long does it take to obtain a Society Registration Certificate?',
    a: 'The approval timeline generally ranges between 15 to 25 working days, depending on the state Registrar of Societies processing queue, document verification, and local SDM/Registrar physical or electronic scrutiny.'
  },
  {
    q: 'Can family members form a registered Society together?',
    a: 'Generally, the Governing Body of a registered Society cannot consist exclusively of immediate family members (such as husband, wife, son, daughter). Regulators mandate that a society must have independent, unrelated members representing a broader democratic community to ensure public welfare orientation.'
  },
  {
    q: 'Is a registered Society automatically exempt from Income Tax?',
    a: 'No. Society registration grants legal identity, but tax exemption requires a separate application under Section 12A/12AB of the Income Tax Act, 1961. To provide 50% tax deductions to donors, the Society must also register under Section 80G.'
  }
];

export const SocietyRegistrationContentSections: React.FC<ContentProps> = ({
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
            Overview: Society Registration in India
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          A <strong>Society</strong> is a formal, democratic association of individuals united together by mutual consent to deliberate, govern, and act cooperatively for the promotion of literature, science, fine arts, charitable relief, education, or sports. Governed nationally under the <strong>Societies Registration Act, 1860</strong> (and respective state-specific amendments), registering a society confers recognized legal personality upon an association, establishing distinct identity separate from its individual members.
        </p>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Society registration is vital for Resident Welfare Associations (RWAs), cultural groups, charitable educational institutions, sports bodies, and community development foundations. Once registered with the Registrar of Societies (ROS), the organization can lawfully purchase movable and immovable assets, maintain dedicated institutional bank accounts, institute legal proceedings, receive government grants, and seek income tax exemptions under Sections 12A and 80G.
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
          The registration process entails drafting two core charter documents: the <strong>Memorandum of Association (MOA)</strong> detailing the primary aims, objects, and founding member list, and the <strong>Rules &amp; Regulations (By-laws)</strong> defining election rules, quorum requirements, meeting procedures, and executive power allocation. The complete dossier, along with founder KYC, utility bills, and affidavits, is submitted to the local Registrar of Societies in the jurisdiction of the society's registered office.
        </p>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Upon thorough scrutiny and fee verification by the Registrar, an official <strong>Certificate of Registration</strong> bearing a unique registration number is issued. Akshay B2B Solutions assists non-profit founders at every phase—from object drafting and state-compliant by-law formation to physical registrar liaison and PAN/TAN allotment.
        </p>
      </section>

      {/* 9.c. What is Society Registration? */}
      <section id="what-is-ngo-registration" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 3
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            What is a Registered Society?
          </h2>
        </div>

        <p className="text-xs sm:text-sm font-bold text-slate-900">
          A Registered Society is a non-profit legal entity established under the Societies Registration Act, 1860, managed by an elected Governing Body for philanthropic, educational, cultural, or socio-economic community objectives.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          {[
            {
              title: 'Democratic Governance',
              desc: 'Managed by an Executive Committee elected democratically by general body members at regular Annual General Meetings.'
            },
            {
              title: 'Minimum 7 Founding Members',
              desc: 'Requires a minimum of seven individuals (or companies/associations) subscribing to the Memorandum of Association.'
            },
            {
              title: 'Non-Profit Distribution Rule',
              desc: 'No profits, dividends, or surpluses can be disbursed to members; all funds must be reinvested solely into stated society aims.'
            },
            {
              title: 'Separate Legal Status',
              desc: 'Can own immovable properties in the society name, enter contracts, and file legal suits through authorized office-bearers.'
            },
            {
              title: 'Dual Charter Documents',
              desc: 'Governed strictly by its Memorandum of Association (MOA) and certified Rules & Regulations (By-laws).'
            },
            {
              title: 'Grant & 12A/80G Eligibility',
              desc: 'Eligible for Central/State government subsidies, NITI Aayog NGO Darpan listing, and Income Tax donor deduction certificates.'
            }
          ].map((item, idx) => (
            <div key={idx} className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <h4 className="font-bold text-xs text-blue-900 mb-1">{item.title}</h4>
              <p className="text-xs text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-xs font-bold text-slate-900 pt-1">
          Registration transforms an informal committee into a recognized, trustworthy legal institution empowered to drive large-scale community impact.
        </p>
      </section>

      {/* 9.d. Key Characteristics */}
      <section id="key-characteristics" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 4
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Key Characteristics of a Society
          </h2>
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-slate-600">
          <div>
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">
              1. Minimum Membership Threshold
            </h4>
            <p>
              Requires at least 7 members for state-level jurisdiction. For National/All-India status, members must represent different Indian states to satisfy Registrar multi-state jurisdiction rules.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">
              2. Democratic Executive Committee
            </h4>
            <p>
              Includes mandatory office bearers such as President, Vice President, General Secretary, Treasurer, and Executive Members elected for fixed terms outlined in the by-laws.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">
              3. Perpetual Succession
            </h4>
            <p>
              The society's legal existence continues unaffected by changes in membership, resignations, or demise of individual founding members.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-1">
              4. Annual Compliance &amp; AGMs
            </h4>
            <p>
              Requires mandatory holding of an Annual General Meeting (AGM) and filing the updated list of Governing Body members and audited accounts annually with the Registrar.
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
            Importance &amp; Strategic Benefits of Society Registration
          </h2>
        </div>

        <p className="text-xs font-bold text-slate-900">
          Formally registering your society under the 1860 Act delivers indispensable institutional credibility and statutory protection:
        </p>

        <div className="space-y-2.5 text-xs text-slate-600">
          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <strong className="text-slate-900 font-bold block mb-0.5">
              1. Institutional Identity &amp; Asset Ownership
            </strong>
            The society can purchase land, buildings, vehicles, and intellectual property directly in its registered corporate name without risking individual member liability.
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <strong className="text-slate-900 font-bold block mb-0.5">
              2. Government Grant Eligibility &amp; Darpan Portal Listing
            </strong>
            Central and State Government departments strictly release development grants and project allocations exclusively to formally registered non-profit societies.
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <strong className="text-slate-900 font-bold block mb-0.5">
              3. Income Tax Exemptions (Section 12A &amp; 80G)
            </strong>
            Enables full exemption of income surplus from central taxes and grants tax deduction certificates to institutional and individual donors.
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <strong className="text-slate-900 font-bold block mb-0.5">
              4. Democratic Self-Governance &amp; Dispute Redressal
            </strong>
            Well-drafted by-laws establish clear quorum rules, voting rights, and arbitration clauses, preventing autocratic takeover or management deadlocks.
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
            <strong className="text-slate-900 font-bold block mb-0.5">
              5. Enhanced Philanthropic &amp; Public Trust
            </strong>
            Public donors, CSR committees, and international development agencies favor registered societies with verifiable registrar registration numbers over informal groups.
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
            Types of Societies in India
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center font-bold text-xs">
              01
            </div>
            <h3 className="font-bold text-xs text-slate-900">Charitable Societies</h3>
            <p className="text-xs text-slate-600">
              Formed for poverty alleviation, free medical clinics, orphan care, disaster relief, and general public utility missions.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center font-bold text-xs">
              02
            </div>
            <h3 className="font-bold text-xs text-slate-900">Educational &amp; Scientific Societies</h3>
            <p className="text-xs text-slate-600">
              Instituted to establish schools, research centers, colleges, technical libraries, and vocational training institutes.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center font-bold text-xs">
              03
            </div>
            <h3 className="font-bold text-xs text-slate-900">Cultural &amp; Literary Societies</h3>
            <p className="text-xs text-slate-600">
              Dedicated to preserving heritage crafts, fine arts, music, theatre, classical literature, and indigenous cultural traditions.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
            <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-800 flex items-center justify-center font-bold text-xs">
              04
            </div>
            <h3 className="font-bold text-xs text-slate-900">Welfare &amp; Community Associations</h3>
            <p className="text-xs text-slate-600">
              Includes Resident Welfare Associations (RWAs), market trade associations, and sports promotion bodies.
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
            Comparative Structural Analysis
          </h2>
        </div>

        {/* Table 1: Society vs Trust */}
        <div className="space-y-2">
          <h3 className="font-bold text-xs text-slate-900 uppercase tracking-wider">
            Table 1: Society vs Trust
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
            <table className="w-full text-xs text-left text-slate-700">
              <thead className="bg-slate-900 text-white font-bold">
                <tr>
                  <th className="p-3">Aspect</th>
                  <th className="p-3 bg-blue-900">Society</th>
                  <th className="p-3">Trust</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Governing Law</td>
                  <td className="p-3 bg-blue-50/50 font-medium">Societies Registration Act, 1860</td>
                  <td className="p-3">Indian Trusts Act, 1882 / State Trust Acts</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Legal Identity</td>
                  <td className="p-3 bg-blue-50/50">Separate corporate legal entity</td>
                  <td className="p-3">Vested in the Board of Trustees</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Minimum Members</td>
                  <td className="p-3 bg-blue-50/50 font-bold text-blue-900">Minimum 7 Members</td>
                  <td className="p-3">Minimum 2 Trustees</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Management Structure</td>
                  <td className="p-3 bg-blue-50/50">Elected Governing Body / Executive Committee</td>
                  <td className="p-3">Managing Trustee and Board of Trustees</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Registration Authority</td>
                  <td className="p-3 bg-blue-50/50">Registrar of Societies (State Gov)</td>
                  <td className="p-3">Sub-Registrar / Charity Commissioner</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Best Suited For</td>
                  <td className="p-3 bg-blue-50/50">Member-driven clubs, RWAs, schools, social groups</td>
                  <td className="p-3">Family endowments, temples, private charities</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 2: Registered vs Unregistered Society */}
        <div className="space-y-2 pt-2">
          <h3 className="font-bold text-xs text-slate-900 uppercase tracking-wider">
            Table 2: Registered vs Unregistered Society
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
            <table className="w-full text-xs text-left text-slate-700">
              <thead className="bg-slate-900 text-white font-bold">
                <tr>
                  <th className="p-3">Aspect</th>
                  <th className="p-3 bg-blue-900">Registered Society</th>
                  <th className="p-3">Unregistered Society</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Legal Recognition</td>
                  <td className="p-3 bg-blue-50/50 font-bold text-orange-700">Full statutory legal personality</td>
                  <td className="p-3 text-rose-600">No separate legal status</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Right to Own Property</td>
                  <td className="p-3 bg-blue-50/50">Holds property in society name</td>
                  <td className="p-3">Cannot own property legally</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Eligibility for Grants</td>
                  <td className="p-3 bg-blue-50/50 font-bold text-blue-900">Eligible for Govt &amp; CSR funding</td>
                  <td className="p-3 text-slate-400">Strictly ineligible</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Tax Exemption Eligibility</td>
                  <td className="p-3 bg-blue-50/50">Eligible for 12A and 80G approvals</td>
                  <td className="p-3 text-slate-400">Ineligible (taxed as AOP/BOI)</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-slate-900">Institutional Credibility</td>
                  <td className="p-3 bg-blue-50/50 font-bold text-blue-900">High public trust &amp; audit transparency</td>
                  <td className="p-3 text-rose-600">Extremely low credibility</td>
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
            Laws Governing Society Registration in India
          </h2>
        </div>

        <p className="text-xs font-bold text-slate-900">
          Societies operate under a comprehensive statutory matrix of central and state legislations:
        </p>

        <ul className="space-y-2 text-xs text-slate-600 list-disc list-inside">
          <li>
            <strong>Societies Registration Act, 1860 (Central Act 21 of 1860):</strong> The primary parent framework governing registration, legal status, and dissolution of non-profit societies.
          </li>
          <li>
            <strong>State-Specific Adaptations:</strong> Many states have enacted localized legislations (such as West Bengal Societies Registration Act 1961, Tamil Nadu Societies Registration Act 1975, or Maharashtra Public Trusts Act).
          </li>
          <li>
            <strong>Income Tax Act, 1961 (Sections 11, 12A, 80G, 10(23C)):</strong> Regulates income tax exemptions and philanthropic donor deductions.
          </li>
          <li>
            <strong>Foreign Contribution (Regulation) Act, 2010 (FCRA):</strong> Governs receipt and statutory utilization of foreign grants and international donations.
          </li>
          <li>
            <strong>Penalties for Non-Compliance:</strong> Failure to file annual lists of governing body members or unapproved by-law amendments can trigger cancellation of registration or prosecution under Section 11 of the Act.
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
              Statutory Eligibility
            </h4>
            <ul className="space-y-1.5 text-slate-600 list-disc list-inside">
              <li>Minimum 7 adult members of sound mind.</li>
              <li>A clearly defined non-profit objective (charity, art, education, sports).</li>
              <li>Unique proposed society name not infringing on registered trademarks or state emblems.</li>
              <li>Designated registered office within the territorial jurisdiction of the Registrar.</li>
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
            <h4 className="font-bold text-blue-900 uppercase tracking-wider">
              Mandatory Documents
            </h4>
            <ul className="space-y-1.5 text-slate-600 list-disc list-inside">
              <li>PAN &amp; Aadhaar/Passport of all 7+ founding members.</li>
              <li>Passport-size photographs of President, Secretary, and Treasurer.</li>
              <li>Electricity bill / municipal tax receipt of registered office address.</li>
              <li>No Objection Certificate (NOC) from the property owner.</li>
              <li>Drafted MOA and Rules &amp; Regulations signed on all pages.</li>
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
            Step-by-Step Society Registration Process
          </h2>
        </div>

        <div className="space-y-3">
          {[
            {
              step: 'Step 1',
              title: 'Name Selection &amp; Availability Verification',
              desc: 'Select a unique, dignified name reflecting the society’s core social mission, ensuring compliance with the Emblems and Names (Prevention of Improper Use) Act, 1950.'
            },
            {
              step: 'Step 2',
              title: 'Drafting Memorandum of Association (MOA)',
              desc: 'Draft the constitutional MOA declaring the society name, registered office address, object clause, and list of governing body subscribers.'
            },
            {
              step: 'Step 3',
              title: 'Drafting Rules &amp; Regulations (By-laws)',
              desc: 'Formalize internal governance clauses covering member admission, voting rights, AGM protocols, financial auditing, and executive term limits.'
            },
            {
              step: 'Step 4',
              title: 'Dossier Submission with State Registrar of Societies',
              desc: 'File the complete physical or electronic application bundle with the jurisdictional Sub-Registrar / Registrar along with government stamp duty fees.'
            },
            {
              step: 'Step 5',
              title: 'Registrar Scrutiny &amp; Certificate Issuance',
              desc: 'Upon official verification of objectives and founder identities, the Registrar issues the sealed Society Registration Certificate.'
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
            Post-Registration Compliance Obligations
          </h2>
        </div>

        <p className="text-xs font-bold text-slate-900">
          Maintaining active, compliant status requires fulfilling ongoing statutory filings:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block mb-1">Annual General Meeting (AGM)</strong>
            Conduct mandatory annual meeting of all members to approve annual accounts and review activities.
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block mb-1">Annual List of Governing Body Filing</strong>
            Submit the updated list of elected executive committee members within 14 days of the AGM to the Registrar.
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block mb-1">Statutory CA Audit &amp; ITR Filing</strong>
            Get accounts audited annually by a practicing Chartered Accountant and file Form ITR-7 with the Income Tax Department.
          </div>
          <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
            <strong className="text-slate-900 block mb-1">Darpan &amp; 12A/80G Revalidation</strong>
            Maintain active NGO Darpan profile and file Form 10BD statement of donations before May 31st annually.
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

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          The typical processing turnaround for Society Registration is <strong>15 to 25 working days</strong>. Drafting MOA and By-laws takes 2–3 days; physical or electronic submission with the Registrar takes 1 day; and departmental verification, police verification (in specific sensitive states), and Registrar issuance take roughly 10–20 days. Akshay B2B Solutions fast-tracks filings through pre-checked document bundles.
        </p>
      </section>

      {/* 9.n. Certification */}
      <section id="certification" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 14
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Certificate of Registration Details
          </h2>
        </div>

        <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-200 text-xs space-y-2">
          <p className="text-slate-700">
            The <strong>Certificate of Registration</strong> issued by the Registrar of Societies contains the official Society Name, Unique Registration Number, Date of Incorporation, District Jurisdiction, and Official Seal/Digital Signature of the Registrar.
          </p>
          <p className="font-bold text-blue-900">
            This document serves as permanent conclusive legal evidence of the society's incorporation and is required for opening bank accounts, buying land, and securing 12A/80G approvals.
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
            Transparent Fee Structure
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Akshay B2B Solutions charges a flat professional fee of <strong>₹2,999/- only</strong> for complete end-to-end society registration assistance. Official government registration fees and state stamp duty (varying from ₹50 to ₹1,500 depending on state jurisdiction) are paid directly to the government without hidden markups.
        </p>
      </section>

      {/* 9.p. Taxation */}
      <section id="taxation" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 16
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Taxation &amp; Exemption Framework for Societies
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Societies are assessed under the Income Tax Act, 1961 as an Association of Persons (AOP) unless they obtain formal tax-exempt status. With <strong>Section 12A (12AB)</strong> registration, 100% of the society's income applied towards charitable objects is tax-exempt. With <strong>Section 80G</strong> registration, donors can deduct 50% of their contributions from their taxable income. Societies receiving foreign donations must independently obtain FCRA registration under the Ministry of Home Affairs.
        </p>
      </section>

      {/* 9.q. Why Us */}
      <section id="why-us" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider">
            Section 17
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Why Akshay B2B Solutions for Society Registration?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="p-3 bg-white rounded-xl border border-slate-200">
            <strong className="text-blue-900 block mb-0.5">Custom MOA &amp; By-law Drafting</strong>
            Tailored charter drafting ensuring smooth registrar approvals and zero governance ambiguity.
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-200">
            <strong className="text-blue-900 block mb-0.5">All-India State Network</strong>
            Expertise across all state-specific Societies Registration Acts and local registrar offices.
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-200">
            <strong className="text-blue-900 block mb-0.5">100% Transparent Flat Pricing</strong>
            Zero hidden surcharges; complete clarity on state stamp duty and registrar fees.
          </div>
          <div className="p-3 bg-white rounded-xl border border-slate-200">
            <strong className="text-blue-900 block mb-0.5">Post-Incorporation Compliance Suite</strong>
            Seamless assistance with PAN, TAN, 12A, 80G, CSR-1, and NITI Aayog Darpan enrolment.
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
          {SOCIETY_FAQ_ITEMS.map((faq, idx) => {
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

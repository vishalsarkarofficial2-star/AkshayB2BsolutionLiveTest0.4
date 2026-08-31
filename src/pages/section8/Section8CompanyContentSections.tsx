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
  Sparkles
} from 'lucide-react';

interface ContentProps {
  onScrollToForm: () => void;
  openFaqIndex: number | null;
  setOpenFaqIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

export const SECTION8_FAQ_ITEMS = [
  {
    q: 'Is a Section 8 Company completely exempt from paying income tax?',
    a: 'Incorporation under Section 8 of the Companies Act provides non-profit corporate status, but income tax exemption is not automatic. The company must separately apply for and obtain registration under Section 12A (or Section 12AB) and Section 80G of the Income Tax Act, 1961 to enjoy 100% tax exemption on donations/grants and offer 50% tax deductions to donors.'
  },
  {
    q: 'Can members or directors of a Section 8 Company receive dividends or salaries?',
    a: 'Under Section 8(1) of the Companies Act, 2013, payment of any dividend, bonus, or profit distribution to members is strictly prohibited. However, reasonable remuneration, honorarium, or out-of-pocket reimbursements may be paid to directors or employees for actual professional services rendered, provided it is authorized by the Articles of Association and Board resolutions.'
  },
  {
    q: 'What is the minimum number of directors and members required for incorporation?',
    a: 'A Section 8 Company requires a minimum of 2 directors and 2 members (shareholders or guarantee subscribers) if formed as a private limited entity, or a minimum of 3 directors and 7 members if formed as a public limited entity. There is no requirement for minimum paid-up share capital.'
  },
  {
    q: 'Is the word "Limited" or "Private Limited" mandatory in the company name?',
    a: 'No. Section 8 Companies are granted a statutory exemption from using the suffix "Limited" or "Private Limited" in their corporate names. Instead, their names typically conclude with words like Foundation, Association, Society, Council, Club, Institute, Federation, or Forum.'
  },
  {
    q: 'Can a Section 8 Company receive foreign funds or international grants?',
    a: 'Yes, a Section 8 Company can receive foreign contributions, grants, and international donations, but only after obtaining prior permission or registration under the Foreign Contribution (Regulation) Act (FCRA) from the Ministry of Home Affairs (MHA), Government of India.'
  },
  {
    q: 'How does a Section 8 Company compare to a Trust or a Society in terms of credibility?',
    a: 'A Section 8 Company enjoys significantly higher credibility among international donors, corporate CSR committees, government departments, and institutional grantmakers because it is incorporated under federal corporate law (MCA) with standardized national governance, strict annual ROC auditing, and transparent public disclosures.'
  }
];

export const Section8CompanyContentSections: React.FC<ContentProps> = ({
  onScrollToForm,
  openFaqIndex,
  setOpenFaqIndex
}) => {
  return (
    <div className="space-y-16 py-6 text-slate-800 text-sm leading-relaxed">
      {/* a) OVERVIEW */}
      <section id="overview" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider">
            Section 1
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Overview on Section 8 Company Registration
          </h2>
        </div>
        <p className="font-medium text-slate-900">
          A Section 8 Company is an officially registered non-profit corporate organization incorporated under Section 8 of the Companies Act, 2013 (corresponding to Section 25 of the erstwhile Companies Act, 1956). It is specifically formulated to promote charitable objectives, education, social welfare, poverty alleviation, healthcare, science, art, literature, sports, religion, environmental conservation, and clean energy.
        </p>
        <p>
          Unlike conventional commercial corporations, a Section 8 Company mandatorily applies its entire income, donations, and operational surplus exclusively toward furthering its charter objectives. Payment of any dividend, profit distribution, or bonus to members is statutorily prohibited. Regulated directly by the Ministry of Corporate Affairs (MCA), it represents India's most prestigious and legally robust institutional framework for NGOs, social enterprises, CSR-funded foundations, and philanthropic trusts.
        </p>
      </section>

      {/* b) REGISTRATION / PROCESS OVERVIEW */}
      <section id="registration" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider">
            Section 2
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Section 8 Company Registration &amp; Process Overview
          </h2>
        </div>
        <p>
          The registration of a Section 8 Company involves obtaining a central government statutory license issued by the Registrar of Companies (ROC) under the Ministry of Corporate Affairs (MCA). The procedure requires securing Digital Signatures (DSC) for directors, reserving a meaningful name reflecting non-profit purpose via the SPICe+ Part A portal, preparing specialized Memorandum &amp; Articles of Association (MOA &amp; AOA) embedded with statutory non-profit clauses, and securing the Section 8 License (Form INC-16).
        </p>
        <p>
          Following CRC approval, the ROC issues the Certificate of Incorporation containing the Corporate Identification Number (CIN), along with Permanent Account Number (PAN) and Tax Deduction Account Number (TAN). Akshay B2B Solutions coordinates the entire incorporation lifecycle, drafts bespoke charitable MOA clauses, and guides social founders through subsequent 12A, 80G, CSR-1, and FCRA registrations.
        </p>
      </section>

      {/* c) WHAT IS SECTION 8 COMPANY? */}
      <section id="what-is-section-8-company" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider">
            Section 3
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            What is a Section 8 Company?
          </h2>
        </div>
        <p className="font-bold text-base text-slate-900">
          A Section 8 Company is a non-profit company registered under the Companies Act, 2013 with limited liability, whose charter strictly mandates utilizing all profits and revenue for non-profit and charitable promotion without distributing dividends to members.
        </p>
        <ul className="space-y-2.5">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0 mt-1" />
            <span><strong>Dedicated Charitable Purpose:</strong> Established for promoting art, science, commerce, education, research, social welfare, religion, charity, protection of environment, or sports.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0 mt-1" />
            <span><strong>Zero Dividend Distribution:</strong> Profits and financial surpluses are strictly reinvested into organizational objectives; dividend payment to members is legally prohibited.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0 mt-1" />
            <span><strong>Separate Legal Entity:</strong> Enjoys independent corporate existence with perpetual succession, separate from its founders, directors, and donor members.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0 mt-1" />
            <span><strong>Limited Liability Protection:</strong> The financial liability of founder members is limited to their unpaid shares or guaranteed subscription amounts.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0 mt-1" />
            <span><strong>Exemption from "Limited" Suffix:</strong> Can be incorporated without appending the terms "Limited" or "Private Limited" to its official legal name.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0 mt-1" />
            <span><strong>National Operational Jurisdiction:</strong> Can execute projects, open regional branches, and own immovable property across all Indian states without territorial limits.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0 mt-1" />
            <span><strong>High Institutional Donor Trust:</strong> Premier eligibility for Corporate Social Responsibility (CSR-1) funding, central government grants, and foreign donations (FCRA).</span>
          </li>
        </ul>
        <p className="font-bold text-slate-900 bg-rose-50/60 p-3 rounded-xl border border-rose-200">
          In summary, a Section 8 Company merges the philanthropic mission of an NGO with the transparency, governance, and institutional stature of a corporate enterprise.
        </p>
      </section>

      {/* d) KEY CHARACTERISTICS */}
      <section id="key-characteristics" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider">
            Section 4
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Key Characteristics of a Section 8 Company
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
              <Users className="w-4 h-4 text-rose-700" />
              <span>Directors &amp; Members Threshold</span>
            </h3>
            <p className="text-xs text-slate-600">
              Minimum of 2 directors and 2 members for private status (or 3 directors and 7 members for public status). No ceiling on maximum membership.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-rose-700" />
              <span>Central Government License (INC-16)</span>
            </h3>
            <p className="text-xs text-slate-600">
              Requires a specialized Section 8 License granted by the Registrar of Companies prior to final incorporation under the Companies Act.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
              <DollarSign className="w-4 h-4 text-rose-700" />
              <span>Capital Structure Flexibility</span>
            </h3>
            <p className="text-xs text-slate-600">
              Can be incorporated either with share capital or limited by guarantee. No minimum paid-up capital requirement under MCA regulations.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-rose-700" />
              <span>Standardized Corporate Governance</span>
            </h3>
            <p className="text-xs text-slate-600">
              Governed nationally with mandatory annual ROC filings (AOC-4, MGT-7), statutory CA auditing, and transparent public register records.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200">
          <h4 className="font-bold text-rose-900 text-xs uppercase tracking-wider mb-1">
            Naming Conventions &amp; Suffix Exemptions
          </h4>
          <p className="text-xs text-slate-700">
            Section 8 Companies can exclude the words "Pvt Ltd" or "Ltd" and adopt words like <em>Foundation, Association, Society, Council, Club, Institute, Federation, or Forum</em>, conferring an authentic philanthropic identity.
          </p>
        </div>
      </section>

      {/* e) IMPORTANCE & BENEFITS */}
      <section id="importance-benefits" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider">
            Section 5
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Importance &amp; Benefits of Section 8 Company Registration
          </h2>
        </div>
        <p className="font-semibold text-slate-900">
          Choosing a Section 8 Company structure delivers unmatched institutional credibility, operational scalability, and legal safety compared to informal trusts and state-level societies.
        </p>

        <div className="space-y-3 pt-2">
          {[
            {
              title: 'Preferred Vehicle for Corporate CSR Grants (Form CSR-1)',
              desc: 'Blue-chip corporations and PSU donors overwhelmingly prefer partnering with Section 8 entities due to audited financial disclosures and MCA public filings.'
            },
            {
              title: '100% Tax Deductions for Donors (Section 80G)',
              desc: 'Enables individual and corporate donors to claim 50% tax deductions on their philanthropic contributions, substantially accelerating fundraising efforts.'
            },
            {
              title: 'Tax Exemption on Operational Income (Section 12A / 12AB)',
              desc: 'All donations, subscription grants, and income earned through charitable activities are 100% tax-free upon obtaining Income Tax 12A registration.'
            },
            {
              title: 'Limited Liability for Founders & Trustees',
              desc: 'Directors and members are fully protected against personal liability for contractual obligations or debts incurred by the organization.'
            },
            {
              title: 'Perpetual Succession & Seamless Asset Holding',
              desc: 'Can own institutional properties, bank accounts, and patents in its corporate name; existence remains unaffected by changes in board directorship.'
            },
            {
              title: 'Smooth Foreign Funding Access (FCRA)',
              desc: 'Standardized national governance structure facilitates faster security scrutiny and approval for foreign contributions from international donor agencies.'
            }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
              <BadgeCheck className="w-5 h-5 text-rose-700 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
                <p className="text-xs text-slate-600 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-slate-600 italic">
          In conclusion, Section 8 Company registration creates a modern, transparent, and investment-grade platform for achieving sustainable social impact.
        </p>
      </section>

      {/* g) TYPES */}
      <section id="types" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider">
            Section 6
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Types &amp; Formats of Section 8 Companies in India
          </h2>
        </div>
        <p>
          Section 8 Companies can be structured under different liability and capital models based on the scale of philanthropic operations and founder preferences:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-xs">
              <Building2 className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-xs text-slate-900">Section 8 Company Limited by Shares</h4>
            <p className="text-xs text-slate-600">
              Incorporated with authorized and subscribed share capital. Member liability is strictly restricted to unpaid share amounts.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-xs">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-xs text-slate-900">Section 8 Company Limited by Guarantee</h4>
            <p className="text-xs text-slate-600">
              Formed without share capital where members pledge a predetermined financial guarantee payable only in the event of winding up.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-800 flex items-center justify-center font-bold text-xs">
              <Globe className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-xs text-slate-900">With or Without Share Capital Models</h4>
            <p className="text-xs text-slate-600">
              Can operate either as member-subscribed entities or philanthropic guarantee bodies depending on grant models.
            </p>
          </div>
        </div>
      </section>

      {/* h) COMPARISON TABLES */}
      <section id="comparison-tables" className="scroll-mt-28 space-y-8">
        {/* Table 1: Section 8 Company vs Trust */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider">
              Comparison 1
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Section 8 Company vs Public Charitable Trust
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-rose-900 text-white">
                  <th className="p-3 font-bold border-r border-rose-950">Aspect</th>
                  <th className="p-3 font-bold border-r border-rose-950">Section 8 Company</th>
                  <th className="p-3 font-bold">Public Charitable Trust</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="bg-white">
                  <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Governing Law</td>
                  <td className="p-3 text-rose-900 font-semibold border-r border-slate-200">Companies Act, 2013 (Federal Central Law)</td>
                  <td className="p-3 text-slate-700">Indian Trusts Act, 1882 / State Public Trust Acts</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Registration Authority</td>
                  <td className="p-3 text-rose-900 font-semibold border-r border-slate-200">Ministry of Corporate Affairs (MCA / ROC)</td>
                  <td className="p-3 text-slate-600">Local Sub-Registrar of Assurances / Charity Commissioner</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Legal Identity &amp; Succession</td>
                  <td className="p-3 text-rose-900 font-semibold border-r border-slate-200">Independent legal entity with perpetual succession</td>
                  <td className="p-3 text-slate-600">Vested in individual trustees; succession issues on death</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Personal Liability of Management</td>
                  <td className="p-3 text-rose-900 font-semibold border-r border-slate-200">Limited liability (protected from organizational debt)</td>
                  <td className="p-3 text-slate-700 border-r border-slate-200">Trustees may face unlimited personal liability</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Management &amp; Board Structure</td>
                  <td className="p-3 text-slate-800 border-r border-slate-200">Board of Directors elected by members</td>
                  <td className="p-3 text-slate-600">Board of Trustees governed by static Trust Deed</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Credibility with Donors &amp; Government</td>
                  <td className="p-3 text-rose-900 font-semibold border-r border-slate-200">Very High (standardized online national disclosures)</td>
                  <td className="p-3 text-slate-600">Moderate (state-specific manual records)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Table 2: Section 8 Company vs Society */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider">
              Comparison 2
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Section 8 Company vs Registered Society
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-3 font-bold border-r border-slate-800">Aspect</th>
                  <th className="p-3 font-bold border-r border-slate-800">Section 8 Company</th>
                  <th className="p-3 font-bold">Registered Society</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="bg-white">
                  <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Governing Statute</td>
                  <td className="p-3 text-rose-900 font-semibold border-r border-slate-200">Companies Act, 2013 (National Scope)</td>
                  <td className="p-3 text-slate-800">Societies Registration Act, 1860 (State-Level Acts)</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Minimum Members Required</td>
                  <td className="p-3 text-rose-900 font-semibold border-r border-slate-200">Min 2 Members (Easy to incorporate &amp; manage)</td>
                  <td className="p-3 text-slate-800">Min 7 Members (from different states for national society)</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Registration Authority</td>
                  <td className="p-3 text-rose-900 font-semibold border-r border-slate-200">Registrar of Companies (ROC / MCA Online)</td>
                  <td className="p-3 text-slate-800">Registrar of Societies (State Government Office)</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Compliance &amp; Transparency</td>
                  <td className="p-3 text-slate-800 border-r border-slate-200">Strict electronic ROC annual filings &amp; audit trails</td>
                  <td className="p-3 text-slate-800">Varies widely by state; manual annual renewal in many states</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Suitability</td>
                  <td className="p-3 text-rose-900 font-semibold border-r border-slate-200">Institutional NGOs, CSR execution partners, incubators</td>
                  <td className="p-3 text-slate-800">Local clubs, resident welfare associations, cultural groups</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Ease of Obtaining 12A / 80G &amp; FCRA</td>
                  <td className="p-3 text-rose-900 font-semibold border-r border-slate-200">Fast-track due to MCA verified corporate structure</td>
                  <td className="p-3 text-slate-800">Requires extensive local registrar verification documentation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* i) LAWS GOVERNING */}
      <section id="laws-governing" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider">
            Section 7
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Laws Governing Section 8 Companies in India
          </h2>
        </div>
        <p className="font-bold text-slate-900">
          Section 8 Companies operate under federal corporate legislation administered by the Ministry of Corporate Affairs, alongside statutory tax exemption and social finance laws.
        </p>
        <ul className="space-y-2 pt-1">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0 mt-1" />
            <span><strong>Companies Act, 2013 (Section 8):</strong> Outlines the legal criteria, licensing protocol, governance rules, and winding-up procedures for non-profit companies.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0 mt-1" />
            <span><strong>Companies (Incorporation) Rules, 2014:</strong> Governs SPICe+ Part A &amp; B digital filings, Form INC-12 licensing, and electronic MOA/AOA charter requirements.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0 mt-1" />
            <span><strong>Income Tax Act, 1961 (Sections 12A, 12AB &amp; 80G):</strong> Provides 100% tax exemption on organizational income and allows donors 50% deduction on contributions.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0 mt-1" />
            <span><strong>Companies (CSR Policy) Rules, 2014 (Form CSR-1):</strong> Mandates registration on the MCA portal to qualify as an implementing agency for corporate CSR budgets.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0 mt-1" />
            <span><strong>Foreign Contribution (Regulation) Act, 2010 (FCRA):</strong> Regulates the receipt and utilization of foreign donations and grants under Ministry of Home Affairs oversight.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0 mt-1" />
            <span><strong>Penalties for Violation:</strong> Non-compliance or diversion of funds for private gain risks revocation of the Section 8 license and penal fines up to ₹1 Crore.</span>
          </li>
        </ul>
      </section>

      {/* j) ELIGIBILITY AND REQUIREMENTS */}
      <section id="eligibility" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider">
            Section 8
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Eligibility and Requirements for Registration
          </h2>
        </div>
        <p className="font-bold text-slate-900">
          Any individual, group of individuals, or registered corporate entity seeking to promote genuine non-profit, educational, or charitable objectives can form a Section 8 Company.
        </p>
        <ul className="space-y-2 pt-1">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0 mt-1" />
            <span><strong>Minimum Founding Members:</strong> At least 2 members (for private entity) or 7 members (for public entity). Both Indian residents and NRIs/foreign citizens can be members.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0 mt-1" />
            <span><strong>Minimum Board of Directors:</strong> At least 2 directors holding valid Director Identification Numbers (DIN) and Digital Signature Certificates (DSC). At least 1 director must be an Indian resident.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0 mt-1" />
            <span><strong>Clear Charitable Charter:</strong> Defined objects in the MOA exclusively dedicated to social welfare, education, healthcare, environmental protection, or science.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0 mt-1" />
            <span><strong>Director KYC Documents:</strong> Self-attested PAN card, Aadhaar card/Passport/Voter ID, latest bank statement (under 2 months), and passport photographs.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0 mt-1" />
            <span><strong>Registered Office Proof:</strong> Electricity bill/water bill (under 2 months), rent agreement, and No Objection Certificate (NOC) from property owner.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0 mt-1" />
            <span><strong>3-Year Projected Financials:</strong> Statement of estimated future annual income and expenditure for the non-profit activities.</span>
          </li>
        </ul>
      </section>

      {/* k) STEP-BY-STEP PROCESS */}
      <section id="step-by-step-process" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider">
            Section 9
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Step-by-Step Registration Process
          </h2>
        </div>
        <p className="text-slate-700">
          Akshay B2B Solutions manages the complete 5-stage Section 8 Company incorporation process with dedicated corporate legal specialists:
        </p>
        <div className="space-y-3 pt-1">
          {[
            {
              step: '1',
              title: 'Document Collection & Director Digital Signatures (DSC)',
              desc: 'We collect KYC documents from all proposed directors/subscribers and procure Class-3 Digital Signature Certificates (DSC).'
            },
            {
              step: '2',
              title: 'Name Reservation via SPICe+ Part A (RUN)',
              desc: 'We file the proposed non-profit name (incorporating words like Foundation, Council, Association, or Society) through the MCA portal.'
            },
            {
              step: '3',
              title: 'Drafting Specialized MOA & AOA with Non-Profit Covenants',
              desc: 'Our senior corporate advocates draft specialized Memorandum and Articles of Association containing mandatory clauses under Section 8(1).'
            },
            {
              step: '4',
              title: 'Section 8 License (Form INC-12) & SPICe+ Part B Integrated Filing',
              desc: 'We submit the integrated incorporation forms along with AGILE-PRO-S (for EPFO, ESIC, Professional Tax, and Bank Account opening) to the MCA CRC.'
            },
            {
              step: '5',
              title: 'Certificate of Incorporation & Post-Setup Grant Guidance',
              desc: 'Upon CRC scrutiny, the ROC issues the Certificate of Incorporation with CIN, PAN, and TAN. We then assist in applying for 12A, 80G, and CSR-1.'
            }
          ].map((item) => (
            <div key={item.step} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="w-7 h-7 rounded-lg bg-rose-900 text-white flex items-center justify-center font-black text-xs flex-shrink-0">
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

      {/* l) POST-REGISTRATION / COMPLIANCE */}
      <section id="compliance" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider">
            Section 10
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Post-Registration Compliance Obligations
          </h2>
        </div>
        <p className="font-bold text-slate-900">
          To preserve its active legal standing and non-profit tax exemptions, a Section 8 Company must comply with statutory corporate and tax filings:
        </p>
        <ul className="space-y-2 pt-1">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0 mt-1" />
            <span><strong>Commencement of Business (Form INC-20A):</strong> Mandatory filing within 180 days of incorporation confirming subscription deposit.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0 mt-1" />
            <span><strong>Appointment of Statutory Auditor (Form ADT-1):</strong> Board must appoint a Chartered Accountant within 30 days of registration.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0 mt-1" />
            <span><strong>Annual ROC Returns (Form AOC-4 &amp; MGT-7):</strong> File audited balance sheet, profit &amp; loss account, and annual return within 30/60 days of the AGM.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0 mt-1" />
            <span><strong>Statutory Board &amp; General Meetings:</strong> Conduct at least 2 Board meetings every financial year (one in each half) and one Annual General Meeting (AGM).</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0 mt-1" />
            <span><strong>Income Tax Return (Form ITR-7):</strong> Annual tax return filing on or before October 31st with audited utilization reports.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0 mt-1" />
            <span><strong>Director KYC (Form DIR-3 KYC):</strong> Annual electronic KYC verification for all directors by September 30th every year.</span>
          </li>
        </ul>
      </section>

      {/* m) TIMELINES */}
      <section id="timelines" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider">
            Section 11
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Timelines for Section 8 Company Registration
          </h2>
        </div>
        <p className="font-bold text-slate-900">
          The typical turnaround time for complete Section 8 Company incorporation is between 7 to 12 working days.
        </p>
        <ul className="space-y-2 pt-1">
          <li className="flex items-start gap-2">
            <Clock className="w-4 h-4 text-rose-700 flex-shrink-0 mt-1" />
            <span><strong>Director DSC Generation &amp; Document Vetting:</strong> 1 to 2 working days upon receipt of KYC papers.</span>
          </li>
          <li className="flex items-start gap-2">
            <Clock className="w-4 h-4 text-rose-700 flex-shrink-0 mt-1" />
            <span><strong>Name Approval via SPICe+ Part A:</strong> 1 to 3 working days subject to MCA CRC portal processing speeds.</span>
          </li>
          <li className="flex items-start gap-2">
            <Clock className="w-4 h-4 text-rose-700 flex-shrink-0 mt-1" />
            <span><strong>Section 8 License &amp; SPICe+ Part B Filing:</strong> 2 to 3 working days for charter compilation and government submission.</span>
          </li>
          <li className="flex items-start gap-2">
            <Clock className="w-4 h-4 text-rose-700 flex-shrink-0 mt-1" />
            <span><strong>ROC Approval &amp; Certificate Issuance:</strong> 2 to 4 working days for final CIN, PAN, and TAN generation.</span>
          </li>
        </ul>
        <p className="text-xs text-slate-600">
          Akshay B2B Solutions minimizes government queries through strict pre-vetting of non-profit objectives.
        </p>
      </section>

      {/* n) CERTIFICATION */}
      <section id="certification" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider">
            Section 12
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Certificate of Incorporation &amp; License Details
          </h2>
        </div>
        <p>
          Upon successful scrutiny by the Central Registration Centre (CRC), the Registrar of Companies issues the official <strong>Certificate of Incorporation</strong> along with the <strong>Section 8 License (Form INC-16)</strong>. This digital certificate contains the unique 21-digit Corporate Identification Number (CIN), the approved non-profit corporate name, date of incorporation, Permanent Account Number (PAN), and Tax Deduction Account Number (TAN). It serves as conclusive legal evidence of incorporation across all courts, banking institutions, and donor bodies in India.
        </p>
      </section>

      {/* o) FEES */}
      <section id="fees" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider">
            Section 13
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Section 8 Company Registration Fees &amp; Structure
          </h2>
        </div>
        <p>
          The total cost for incorporating a Section 8 Company consists of statutory government fees, state stamp duty on MOA/AOA, and professional consultancy fees. Under government initiatives to promote social entrepreneurship, MCA ROC incorporation fees are substantially waived. Akshay B2B Solutions provides complete pricing transparency with a single flat professional consultancy fee of <strong>₹2499/- only</strong>, guaranteeing zero hidden costs or unexpected administrative markups.
        </p>
      </section>

      {/* p) TAXATION */}
      <section id="taxation" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider">
            Section 14
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Taxation, 12A/80G &amp; Foreign Funding (FCRA)
          </h2>
        </div>
        <p>
          Section 8 Companies are taxed as corporate bodies under the Income Tax Act, 1961, but unlock powerful tax exemptions through specialized registrations:
        </p>
        <ul className="space-y-2 pt-1">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0 mt-1" />
            <span><strong>100% Tax Exemption under Section 12A / 12AB:</strong> Renders all voluntary contributions, grants, and operational revenues completely tax-exempt when applied towards charitable objects.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0 mt-1" />
            <span><strong>Donor Tax Relief under Section 80G:</strong> Allows donors to claim 50% tax deductions on contributions, significantly stimulating corporate and individual fundraising.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0 mt-1" />
            <span><strong>CSR Registration (Form CSR-1):</strong> Essential for receiving Corporate Social Responsibility funds from public and private corporations under Section 135.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0 mt-1" />
            <span><strong>FCRA Registration for Foreign Grants:</strong> Enables receiving international charitable donations, grants, and foreign developmental assistance.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0 mt-1" />
            <span><strong>Mandatory CA Audit &amp; ITR-7:</strong> Annual accounts must be audited by a practicing Chartered Accountant and submitted under Form ITR-7.</span>
          </li>
        </ul>
      </section>

      {/* q) WHY AKSHAY B2B SOLUTIONS */}
      <section id="why-us" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider">
            Section 15
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Why Choose Akshay B2B Solutions for Section 8 Company Registration?
          </h2>
        </div>
        <p className="font-bold text-slate-900">
          Akshay B2B Solutions is India's leading corporate compliance and non-profit advisory firm, offering end-to-end legal support for social entrepreneurs and NGOs.
        </p>
        <div className="space-y-2.5 pt-1">
          {[
            {
              title: 'Specialized Non-Profit Legal Mastery',
              desc: 'Dedicated corporate advocates and CAs with in-depth expertise in drafting compliant Section 8 MOA covenants, 12A/80G filings, and CSR-1 onboarding.'
            },
            {
              title: 'Rapid Turnaround & Zero Rejection Focus',
              desc: 'Rigorous pre-submission validation ensures fast-track approval from the MCA Central Registration Centre without government resubmissions.'
            },
            {
              title: 'All-India Digital Incorporation',
              desc: '100% paperless digital onboarding across Delhi NCR, Mumbai, Bengaluru, Hyderabad, Kolkata, Chennai, and tier-2/3 cities.'
            },
            {
              title: 'Post-Incorporation Grant & Compliance Advisory',
              desc: 'Comprehensive post-registration assistance covering 12A, 80G, NITI Aayog NGO Darpan enrollment, and CSR-1 filing.'
            },
            {
              title: '100% Transparent Flat Pricing',
              desc: 'Single flat professional fee of ₹2499/- only with zero hidden costs, ensuring maximum value for social impact initiatives.'
            }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
              <CheckCircle2 className="w-5 h-5 text-rose-700 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
                <p className="text-xs text-slate-600 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ ACCORDION SECTION */}
      <section id="faqs" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-800 text-xs font-bold uppercase tracking-wider">
            Section 16
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Frequently Asked Questions (FAQ's)
          </h2>
        </div>
        <p className="text-xs text-slate-500">
          Get quick, authoritative answers to common legal, tax, and governance questions regarding Section 8 Company registration in India.
        </p>

        <div className="space-y-3 pt-2">
          {SECTION8_FAQ_ITEMS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full text-left p-4 flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 hover:text-rose-900 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-900 flex items-center justify-center text-[10px] font-black flex-shrink-0">
                      Q
                    </span>
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-rose-900' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="p-4 pt-0 text-xs text-slate-600 border-t border-slate-100 bg-slate-50/50 leading-relaxed">
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

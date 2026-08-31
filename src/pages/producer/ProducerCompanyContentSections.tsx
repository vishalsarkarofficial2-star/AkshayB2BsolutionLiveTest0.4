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
  Sprout,
  Tractor,
  Wheat,
  ChevronDown,
  ArrowRight
} from 'lucide-react';

interface ContentProps {
  onScrollToForm: () => void;
  openFaqIndex: number | null;
  setOpenFaqIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

export const PRODUCER_FAQ_ITEMS = [
  {
    q: 'Is registration of a Producer Company mandatory to form a Farmer Producer Organization (FPO)?',
    a: 'While an FPO can technically be registered as a cooperative society or trust, registering as a Producer Company under the Companies Act, 2013 is strongly preferred and often mandatory to access central government subsidies, NABARD financial assistance, SFAC equity matching grants, and commercial bank credit.'
  },
  {
    q: 'Who is eligible to become a member or shareholder in a Producer Company?',
    a: 'Only primary producers—defined as individuals engaged in farming, horticulture, floriculture, animal husbandry, dairy, pisciculture, viticulture, forestry, or handloom/handicrafts—or registered Producer Institutions/Cooperatives are eligible to subscribe to shares and become voting members.'
  },
  {
    q: 'What are the minimum member and director requirements to incorporate a Producer Company?',
    a: 'A minimum of 10 individual primary producers, OR 2 or more producer institutions, OR a combination of 10 individual producers and producer institutions are required. In addition, a minimum of 5 directors (up to a maximum of 15 directors) must be appointed to the Board.'
  },
  {
    q: 'Can a Producer Company issue public shares or get listed on a stock exchange?',
    a: 'No. A Producer Company operates strictly on mutual cooperative principles with limited liability. Its equity shares cannot be traded publicly on stock exchanges, nor can they be transferred to non-producers. Shares can only be transferred to active primary producer members at par value.'
  },
  {
    q: 'How long does the complete incorporation process take?',
    a: 'The complete registration lifecycle—including Digital Signature Certificates (DSC), Director Identification Numbers (DIN), name reservation through SPICe+ Part A, and ROC incorporation under SPICe+ Part B—typically takes between 10 to 18 working days.'
  },
  {
    q: 'What is the corporate tax rate and income tax status for Producer Companies?',
    a: 'Producer Companies with a total annual turnover of up to ₹100 Crores enjoy 100% tax exemption on profits derived from eligible agricultural produce marketing, procurement, and processing activities under Section 80P / Section 80PA of the Income Tax Act, 1961 for up to 5 consecutive assessment years.'
  }
];

export const ProducerCompanyContentSections: React.FC<ContentProps> = ({
  onScrollToForm,
  openFaqIndex,
  setOpenFaqIndex
}) => {
  return (
    <div className="space-y-16 py-6 text-slate-800 text-sm leading-relaxed">
      {/* a) OVERVIEW */}
      <section id="overview" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 1
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Overview on Producer Company Registration
          </h2>
        </div>
        <p className="font-medium text-slate-900">
          A Producer Company is a legally recognized hybrid corporate entity conceptualized specifically for primary producers—such as farmers, agriculturists, milk producers, fishermen, weavers, and rural artisans. Governed under the Companies Act, 2013 (Section 465 read with Part IXA of the Companies Act, 1956), it harmoniously integrates the democratic ethos and mutual assistance philosophy of cooperative societies with the statutory governance, limited liability, and professional managerial structure of a private limited company.
        </p>
        <p>
          In India's evolving agricultural ecosystem, Producer Companies serve as the institutional cornerstone for Farmer Producer Organizations (FPOs) and Farmer Producer Companies (FPCs). They empower small and marginal cultivators to aggregate landholdings, pool capital, achieve economies of scale in seed and fertilizer procurement, access modern post-harvest agro-processing infrastructure, and negotiate bulk market prices directly with institutional buyers, eliminating predatory middlemen while retaining full statutory protection under corporate law.
        </p>
      </section>

      {/* b) REGISTRATION / PROCESS OVERVIEW */}
      <section id="registration" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 2
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Producer Company Registration Overview
          </h2>
        </div>
        <p>
          Producer Company registration is administered directly by the Ministry of Corporate Affairs (MCA) through the Central Registration Centre (CRC) and the jurisdictional Registrar of Companies (ROC). While forming an informal producer group is optional, securing statutory incorporation as a Producer Company is mandatory to obtain a Corporate Identification Number (CIN), open commercial escrow bank accounts, access NABARD refinance credit, and unlock up to ₹15 Lakhs in SFAC Equity Grant Subsidies.
        </p>
        <p>
          The registration protocol entails obtaining Digital Signatures (DSC) for all founding directors, verifying primary producer credentials (such as Sarpanch/Patwari farmer certificates or Khasra/Khatauni land records), drafting custom Memorandum &amp; Articles of Association (MOA &amp; AOA) aligned with agricultural objects, and filing integrated SPICe+ forms. Akshay B2B Solutions coordinates the entire incorporation lifecycle, ensuring fast approvals, compliant object drafting, and end-to-end guidance across India.
        </p>
      </section>

      {/* c) WHAT IS PRODUCER COMPANY? */}
      <section id="what-is-producer-company" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 3
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            What is a Producer Company?
          </h2>
        </div>
        <p className="font-bold text-base text-slate-900">
          A Producer Company is a body corporate registered under the Companies Act, whose members must exclusively be primary producers engaged in the production, harvesting, procurement, grading, pooling, handling, marketing, selling, or export of primary produce.
        </p>
        <ul className="space-y-2.5">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Exclusive Producer Membership:</strong> Only primary producers or registered producer institutions can hold voting equity shares.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Democratic Voting Principle:</strong> Follows the "one member, one vote" democratic rule, irrespective of individual shareholding size, preventing corporate hostile takeovers.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Separate Legal Entity &amp; Limited Liability:</strong> The liability of each farmer member is strictly limited to the unpaid amount on their subscribed share capital.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Specialized Objects:</strong> Activities are legally restricted to primary produce handling, processing, cold-chain storage, credit facilities to members, and agricultural insurance.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Patronage Bonus Distribution:</strong> Surplus profits are distributed among members in proportion to their active patronage and produce contribution, rather than capital holding alone.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Perpetual Succession:</strong> The existence of the company remains undisturbed by the death, retirement, or insolvency of any farmer member.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Statutory Name Mandate:</strong> The corporate name must end with the explicit suffix <em>"Producer Company Limited"</em>.</span>
          </li>
        </ul>
        <p className="font-bold text-slate-900 bg-orange-50/60 p-3 rounded-xl border border-orange-200">
          In essence, a Producer Company provides rural producers with corporate credibility, institutional funding access, and democratic self-governance under federal corporate law.
        </p>
      </section>

      {/* d) KEY CHARACTERISTICS */}
      <section id="key-characteristics" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 4
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Key Characteristics of a Producer Company
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
              <Users className="w-4 h-4 text-orange-700" />
              <span>Membership Thresholds</span>
            </h3>
            <p className="text-xs text-slate-600">
              Requires at least 10 individual primary producers, or 2 producer institutions, or a combination of both. There is no statutory ceiling on maximum membership.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-orange-700" />
              <span>Board of Directors Structure</span>
            </h3>
            <p className="text-xs text-slate-600">
              Must appoint a minimum of 5 directors up to a maximum of 15 directors. Expert directors or additional directors can be co-opted for technical advisory.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
              <DollarSign className="w-4 h-4 text-orange-700" />
              <span>Capital &amp; Share Restrictions</span>
            </h3>
            <p className="text-xs text-slate-600">
              Equity share capital with no minimum paid-up capital requirement. Shares are non-transferable to the general public and can only be transferred between active producer members.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
            <h3 className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-orange-700" />
              <span>Statutory Compliance Oversight</span>
            </h3>
            <p className="text-xs text-slate-600">
              Regulated nationally by the Ministry of Corporate Affairs (MCA) with mandatory annual ROC filings (AOC-4, MGT-7A), internal audits, and statutory AGMs.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-orange-50 border border-orange-200">
          <h4 className="font-bold text-orange-900 text-xs uppercase tracking-wider mb-1">
            Statutory Naming &amp; Scope Guidelines
          </h4>
          <p className="text-xs text-slate-700">
            The firm must adopt a distinct name reflecting its agricultural or artisanal activity and conclude with the mandatory words <em>"Producer Company Limited"</em>. The objects clause in the MOA cannot extend to non-producer commercial speculations.
          </p>
        </div>
      </section>

      {/* e) IMPORTANCE & BENEFITS */}
      <section id="importance-benefits" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 5
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Importance &amp; Benefits of Registering a Producer Company
          </h2>
        </div>
        <p className="font-semibold text-slate-900">
          Incorporating as a Producer Company transforms fragmented individual farming operations into a resilient commercial agribusiness. It bridges the gap between grassroots rural producers and mainstream institutional capital markets.
        </p>

        <div className="space-y-3 pt-2">
          {[
            {
              title: 'Access to Government Schemes & Grants',
              desc: 'Qualifies for central government subsidies under the 10,000 FPO Scheme, SFAC Equity Grant matching fund up to ₹15 Lakhs, and Credit Guarantee Scheme through NABARD/NCDC.'
            },
            {
              title: 'Limited Liability Protection',
              desc: 'Safeguards the personal agricultural land, homesteads, and private assets of individual farmers from business debts, crop failures, or market volatilities.'
            },
            {
              title: 'Direct Market Linkages & Bulk Bargaining',
              desc: 'Enables direct supply contracts with retail supermarkets, FMCG agro-processors, export houses, and e-NAM trading platforms without middlemen leakages.'
            },
            {
              title: 'Economies of Scale in Input Sourcing',
              desc: 'Allows collective bulk purchasing of certified seeds, fertilizers, pesticides, and farm machinery at discounted wholesale distributor rates.'
            },
            {
              title: 'Democratic Member Governance & Dividends',
              desc: 'Ensures transparent management where each member holds equal voting rights and receives bonus distributions linked directly to their volume of produce supplied.'
            },
            {
              title: '100% Tax Deductions on Agri-Income',
              desc: 'Eligible for 100% income tax deduction on profits derived from processing and marketing of members’ agricultural produce under Section 80PA of the Income Tax Act.'
            }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
              <BadgeCheck className="w-5 h-5 text-orange-700 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-slate-900">{item.title}</h4>
                <p className="text-xs text-slate-600 mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-slate-600 italic">
          In summary, Producer Companies create a sustainable, bankable, and self-reliant agribusiness foundation for Indian agricultural communities.
        </p>
      </section>

      {/* g) TYPES */}
      <section id="types" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 6
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Types &amp; Formats of Producer Companies in India
          </h2>
        </div>
        <p>
          Producer Companies are categorized based on their founding membership structure, geographical operational jurisdiction, and primary commercial activity:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-800 flex items-center justify-center font-bold text-xs">
              <Tractor className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-xs text-slate-900">Individual Producer Companies</h4>
            <p className="text-xs text-slate-600">
              Formed directly by 10 or more individual primary farmers or artisans from a cluster of villages pooling produce locally.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-800 flex items-center justify-center font-bold text-xs">
              <Building2 className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-xs text-slate-900">Federated Producer Institutions</h4>
            <p className="text-xs text-slate-600">
              Formed by 2 or more registered producer institutions/cooperatives to create apex state or national-level marketing federations.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-800 flex items-center justify-center font-bold text-xs">
              <Wheat className="w-4 h-4" />
            </div>
            <h4 className="font-bold text-xs text-slate-900">Multi-State vs Single-State FPCs</h4>
            <p className="text-xs text-slate-600">
              Single-state entities operate within one state, while multi-state setups establish processing plants and retail chains across India.
            </p>
          </div>
        </div>
      </section>

      {/* h) COMPARISON TABLES */}
      <section id="comparison-tables" className="scroll-mt-28 space-y-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
              Comparison 1
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Producer Company vs Cooperative Society
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-orange-800 text-white">
                  <th className="p-3 font-bold border-r border-orange-900">Aspect</th>
                  <th className="p-3 font-bold border-r border-orange-900">Producer Company</th>
                  <th className="p-3 font-bold">Cooperative Society</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="bg-white">
                  <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Governing Law &amp; Authority</td>
                  <td className="p-3 text-orange-800 font-semibold border-r border-slate-200">Companies Act, 2013 / MCA (Central Government)</td>
                  <td className="p-3 text-slate-600">State Cooperative Societies Act (State Registrar)</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Government Interference &amp; Bureaucracy</td>
                  <td className="p-3 text-orange-800 font-semibold border-r border-slate-200">Autonomous corporate board; minimal state interference</td>
                  <td className="p-3 text-rose-700 font-semibold">High state registrar oversight and political intervention</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Legal Personality &amp; Liability</td>
                  <td className="p-3 text-orange-800 font-semibold border-r border-slate-200">Corporate body with strict limited liability</td>
                  <td className="p-3 text-slate-700 border-r border-slate-200">Cooperative body with variable liability rules</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Geographical Operational Area</td>
                  <td className="p-3 text-orange-800 font-semibold border-r border-slate-200">Pan-India operations without territorial barriers</td>
                  <td className="p-3 text-slate-600">Generally restricted to local district/state boundaries</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Profit &amp; Patronage Bonus Distribution</td>
                  <td className="p-3 text-slate-800 border-r border-slate-200">Patronage bonus based strictly on member produce volume</td>
                  <td className="p-3 text-slate-600">Dividends capped by state cooperative registrar rules</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Ease of Raising Bank &amp; Scheme Capital</td>
                  <td className="p-3 text-orange-800 font-semibold border-r border-slate-200">High access to SFAC equity grants, NABARD &amp; private banks</td>
                  <td className="p-3 text-slate-600">Limited to regional cooperative bank credit lines</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
              Comparison 2
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900">
              Producer Company vs Private Limited Company
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="p-3 font-bold border-r border-slate-800">Aspect</th>
                  <th className="p-3 font-bold border-r border-slate-800">Producer Company</th>
                  <th className="p-3 font-bold">Private Limited Company</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr className="bg-white">
                  <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Who Can Be a Member?</td>
                  <td className="p-3 text-orange-800 font-semibold border-r border-slate-200">Only verified primary agricultural/rural producers</td>
                  <td className="p-3 text-slate-800">Any individual, NRI, or corporate investor</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Minimum Members &amp; Directors</td>
                  <td className="p-3 text-slate-800 border-r border-slate-200">Min 10 Members &amp; Min 5 Directors</td>
                  <td className="p-3 text-slate-800">Min 2 Members &amp; Min 2 Directors</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Voting Power Rule</td>
                  <td className="p-3 text-orange-800 font-semibold border-r border-slate-200">Democratic: 1 Member = 1 Vote</td>
                  <td className="p-3 text-slate-800">Proportional to equity shareholding percentage</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Commercial Object Scope</td>
                  <td className="p-3 text-slate-800 border-r border-slate-200">Restricted to primary produce &amp; allied value-add</td>
                  <td className="p-3 text-slate-800">Unrestricted across any lawful commercial sector</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Income Tax Exemption</td>
                  <td className="p-3 text-orange-800 font-semibold border-r border-slate-200">100% deduction under Section 80PA for turnover &lt; ₹100 Cr</td>
                  <td className="p-3 text-slate-800">Standard corporate tax rates (22% to 30%)</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 font-bold text-slate-900 border-r border-slate-200">Suitability</td>
                  <td className="p-3 text-slate-800 border-r border-slate-200">Farmer collectives, dairy clusters, rural artisans</td>
                  <td className="p-3 text-slate-800">Startups, tech ventures, manufacturing companies</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* i) LAWS GOVERNING */}
      <section id="laws-governing" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 7
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Laws Governing Producer Companies in India
          </h2>
        </div>
        <p className="font-bold text-slate-900">
          Producer Companies are governed under federal corporate legislation administered by the Ministry of Corporate Affairs (MCA), alongside key agricultural finance regulations.
        </p>
        <ul className="space-y-2 pt-1">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Companies Act, 2013 (Section 465):</strong> Re-enacted the statutory provisions of Part IXA (Sections 581A to 581ZT) of the Companies Act, 1956 governing Producer Companies.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Companies (Incorporation) Rules, 2014:</strong> Prescribes SPICe+ digital filing formats, RUN name approval guidelines, and statutory MOA/AOA templates.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Income Tax Act, 1961 (Section 80PA):</strong> Provides special 100% tax deductions for Producer Companies with turnover up to ₹100 Crores engaged in member produce activities.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>NABARD &amp; SFAC FPO Operational Guidelines:</strong> Outlines equity grant benchmarks, credit guarantee cover, and cluster development norms.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Food Safety and Standards Act, 2006 (FSSAI):</strong> Governs food processing, organic certification, packaging, and quality standards for agricultural products.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Consequences of Non-Compliance:</strong> Failure to submit mandatory ROC filings incurs daily additional fees of ₹100 per form and risks disqualification of directors.</span>
          </li>
        </ul>
      </section>

      {/* j) ELIGIBILITY AND REQUIREMENTS */}
      <section id="eligibility" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 8
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Eligibility and Requirements for Registration
          </h2>
        </div>
        <p className="font-bold text-slate-900">
          To qualify for Producer Company incorporation, all founding members must strictly satisfy primary producer eligibility criteria as verified by revenue or local authorities.
        </p>
        <ul className="space-y-2 pt-1">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Minimum Founding Members:</strong> At least 10 individual primary producers, OR 2 registered producer institutions, OR a combination of both.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Minimum Board of Directors:</strong> At least 5 directors holding valid Director Identification Numbers (DIN) and Digital Signatures (DSC).</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Primary Producer Proof:</strong> Certificate issued by Village Sarpanch, Tehsildar, Revenue Patwari, or Khasra/Khatauni land ownership records confirming active agricultural involvement.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Director KYC Documents:</strong> Self-attested PAN card, Aadhaar card/voter ID/passport, bank statement (under 2 months), and passport photographs for all directors.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Registered Office Proof:</strong> Electricity or water utility bill (under 2 months), rent agreement, and owner NOC for the business address.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Drafted MOA &amp; AOA:</strong> Specialized charter documents outlining mutual assistance principles, member voting rules, and produce procurement clauses.</span>
          </li>
        </ul>
      </section>

      {/* k) STEP-BY-STEP PROCESS */}
      <section id="step-by-step-process" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 9
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Step-by-Step Registration Process
          </h2>
        </div>
        <p className="text-slate-700">
          Akshay B2B Solutions manages the complete 5-stage Producer Company incorporation process with dedicated legal and CA specialists:
        </p>
        <div className="space-y-3 pt-1">
          {[
            {
              step: '1',
              title: 'Document Collection & Producer Verification',
              desc: 'We collect and verify KYCs of 10+ members and 5+ directors, along with revenue authority producer certificates and registered office utility bills.'
            },
            {
              step: '2',
              title: 'Digital Signatures (DSC) & Name Reservation (RUN / SPICe+ Part A)',
              desc: 'We procure Class-3 DSCs for directors and submit proposed firm names ending with "Producer Company Limited" through the MCA portal.'
            },
            {
              step: '3',
              title: 'Drafting Specialized MOA & AOA Charters',
              desc: 'Our corporate legal team drafts customized Memorandum and Articles of Association tailored to your crop, dairy, or artisanal cluster objectives.'
            },
            {
              step: '4',
              title: 'Integrated SPICe+ Part B Filing & Verification',
              desc: 'We file the integrated application (SPICe+ Part B, AGILE-PRO-S, e-MOA, e-AOA, INC-9) with the MCA Central Registration Centre for DIN, PAN, TAN, and EPFO/ESIC.'
            },
            {
              step: '5',
              title: 'Certificate of Incorporation & Bank Onboarding',
              desc: 'Upon CRC scrutiny, the ROC issues the Certificate of Incorporation with CIN. We then assist in opening the corporate bank account and drafting the first board minutes.'
            }
          ].map((item) => (
            <div key={item.step} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
              <div className="w-7 h-7 rounded-lg bg-orange-800 text-white flex items-center justify-center font-black text-xs flex-shrink-0">
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
          <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 10
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Post-Registration Compliance Obligations
          </h2>
        </div>
        <p className="font-bold text-slate-900">
          Following incorporation, a Producer Company must adhere to statutory ROC, tax, and governance requirements:
        </p>
        <ul className="space-y-2 pt-1">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Commencement of Business (Form INC-20A):</strong> Mandatory filing within 180 days of incorporation confirming capital deposit by founding members.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Appointment of Statutory Auditor (Form ADT-1):</strong> Board must appoint a Chartered Accountant within 30 days of registration.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Internal Audit Mandate:</strong> Part IXA mandates conducting internal audit of accounts by a CA at intervals specified in the AOA.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Annual ROC Returns (Form AOC-4 &amp; MGT-7A):</strong> File audited financial statements and annual return within 30/60 days of the AGM.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Statutory Board &amp; General Meetings:</strong> Minimum 4 Board meetings per year (at least one every quarter) and one Annual General Meeting (AGM).</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Income Tax Return (ITR-6) &amp; GST Compliance:</strong> Timely filing of annual tax returns and monthly/quarterly GST returns on trading activities.</span>
          </li>
        </ul>
      </section>

      {/* m) TIMELINES */}
      <section id="timelines" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 11
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Timelines for Producer Company Registration
          </h2>
        </div>
        <p className="font-bold text-slate-900">
          The typical turnaround time for complete Producer Company registration is between 10 to 18 working days.
        </p>
        <ul className="space-y-2 pt-1">
          <li className="flex items-start gap-2">
            <Clock className="w-4 h-4 text-orange-700 flex-shrink-0 mt-1" />
            <span><strong>Producer Documentation &amp; DSC Issuance:</strong> 2 to 3 working days upon receiving member credentials.</span>
          </li>
          <li className="flex items-start gap-2">
            <Clock className="w-4 h-4 text-orange-700 flex-shrink-0 mt-1" />
            <span><strong>Name Approval via RUN / SPICe+ Part A:</strong> 2 to 4 working days subject to MCA CRC processing speeds.</span>
          </li>
          <li className="flex items-start gap-2">
            <Clock className="w-4 h-4 text-orange-700 flex-shrink-0 mt-1" />
            <span><strong>MOA/AOA Drafting &amp; SPICe+ Part B Filing:</strong> 3 to 5 working days for charter compilation and government submission.</span>
          </li>
          <li className="flex items-start gap-2">
            <Clock className="w-4 h-4 text-orange-700 flex-shrink-0 mt-1" />
            <span><strong>ROC Scrutiny &amp; Certificate Issuance:</strong> 3 to 6 working days for final CIN, PAN, and TAN generation.</span>
          </li>
        </ul>
        <p className="text-xs text-slate-600">
          Akshay B2B Solutions minimizes government queries through strict pre-vetting of farmer land records and object drafting.
        </p>
      </section>

      {/* n) CERTIFICATION */}
      <section id="certification" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 12
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Producer Company Incorporation Certificate Details
          </h2>
        </div>
        <p>
          The <strong>Certificate of Incorporation</strong> issued by the Registrar of Companies (ROC) is the definitive legal birth certificate of the Producer Company. It bears the official seal of the Ministry of Corporate Affairs, unique 21-digit Corporate Identification Number (CIN), registered company name ending with <em>"Producer Company Limited"</em>, date of incorporation, Permanent Account Number (PAN), and Tax Deduction Account Number (TAN). This digital certificate constitutes conclusive evidence that all requirements of the Companies Act have been fully complied with.
        </p>
      </section>

      {/* o) FEES */}
      <section id="fees" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 13
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Producer Company Registration Fees &amp; Structure
          </h2>
        </div>
        <p>
          The total cost for incorporating a Producer Company comprises statutory government fees, state stamp duties, and professional consultancy fees. Under MCA initiatives, zero ROC incorporation fee is charged for authorized capital up to ₹15 Lakhs, with only nominal state stamp duty payable on the MOA and AOA. Akshay B2B Solutions delivers total cost transparency with a single flat professional consultancy fee of <strong>₹4999/- only</strong>, ensuring zero hidden charges or unexpected administrative markups.
        </p>
      </section>

      {/* p) TAXATION */}
      <section id="taxation" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 14
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Taxation &amp; Financial Considerations for Producer Companies
          </h2>
        </div>
        <p>
          Under the Income Tax Act, 1961, Producer Companies are taxed as corporate bodies, but enjoy remarkable fiscal incentives aimed at rural development:
        </p>
        <ul className="space-y-2 pt-1">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>100% Tax Exemption under Section 80PA:</strong> Producer Companies with total turnover of up to ₹100 Crores in any financial year are eligible for 100% profit deduction on income derived from eligible agri-produce marketing, supply, and processing.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Patronage Bonus Tax Treatment:</strong> Surplus distributed as patronage bonus to producer members is deductible as an operational expenditure.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Agricultural Income Exemption (Section 10(1)):</strong> Direct agricultural cultivation income generated by the company on its own land remains completely tax-exempt.</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>GST Exemption on Raw Produce:</strong> Trading in unbranded, raw agricultural produce, fresh vegetables, fruits, and raw milk is fully exempt from GST (0% rate).</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-600 flex-shrink-0 mt-1" />
            <span><strong>Mandatory Tax Audit:</strong> Tax audit under Section 44AB applies if business turnover crosses statutory thresholds for non-exempt commercial processing activities.</span>
          </li>
        </ul>
      </section>

      {/* q) WHY AKSHAY B2B SOLUTIONS */}
      <section id="why-us" className="scroll-mt-28 space-y-4">
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 15
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Why Choose Akshay B2B Solutions for Producer Company Registration?
          </h2>
        </div>
        <p className="font-bold text-slate-900">
          Akshay B2B Solutions is India's leading corporate and agribusiness compliance partner, offering end-to-end legal and financial advisory for Farmer Producer Organizations.
        </p>
        <div className="space-y-2.5 pt-1">
          {[
            {
              title: 'End-to-End Agri-Law Specialization',
              desc: 'Dedicated corporate advocates and Chartered Accountants with in-depth mastery over Companies Act Part IXA, NABARD norms, and SFAC grant schemes.'
            },
            {
              title: 'State-Specific Land & Revenue Record Clarity',
              desc: 'Seamless coordination for farmer land ownership verification across Uttar Pradesh, Madhya Pradesh, Maharashtra, Rajasthan, Bihar, and all Indian states.'
            },
            {
              title: 'Speed & Delay Minimization',
              desc: 'Rigorous pre-submission validation ensures first-time approval for name reservation and SPICe+ Part B incorporation without government resubmission delays.'
            },
            {
              title: 'Post-Incorporation Growth & Grant Advisory',
              desc: 'Guidance on drafting bylaws, applying for SFAC Equity Grants up to ₹15 Lakhs, NABARD credit guarantee onboarding, and FSSAI licensing.'
            },
            {
              title: '100% Transparent Flat Pricing',
              desc: 'Guaranteed single flat fee of ₹4999/- only with zero hidden surcharges, ensuring maximum value for grassroots producer groups.'
            }
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
              <CheckCircle2 className="w-5 h-5 text-orange-700 flex-shrink-0 mt-0.5" />
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
          <span className="px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 text-xs font-bold uppercase tracking-wider">
            Section 16
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Frequently Asked Questions (FAQ's)
          </h2>
        </div>
        <p className="text-xs text-slate-500">
          Get quick, authoritative answers to common legal and operational questions about Producer Company registration in India.
        </p>

        <div className="space-y-3 pt-2">
          {PRODUCER_FAQ_ITEMS.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full text-left p-4 flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 hover:text-orange-800 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-orange-100 text-orange-800 flex items-center justify-center text-[10px] font-black flex-shrink-0">
                      Q
                    </span>
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-orange-800' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs text-slate-600 border-t border-slate-100 leading-relaxed bg-slate-50/50">
                    <p>{faq.a}</p>
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

import { ServiceDetailConfig } from './types';

export const LICENSE_SERVICES: ServiceDetailConfig[] = [
  {
    slug: 'rera-registration',
    name: 'RERA Registration',
    category: 'License',
    parentCategory: 'Registration & License',
    priceType: 'edit_price',
    priceDisplay: 'Get Custom Quote',
    heroPriceHook: 'State RERA Registration for Real Estate Promoters & Channel Partners / Agents | State Regulatory Authority Clearances',
    specialCallout: 'State RERA Authority Approved',
    urgencyText: 'Instant consultation available today',
    ctaText: 'Get Custom Quote',
    metaTitle: 'RERA Registration Online | Real Estate Agent & Project Approval',
    metaDescription: 'Complete RERA registration for real estate builders, promoters & real estate agents / channel partners under Real Estate (Regulation and Development) Act, 2016.',
    seoKeywords: ['RERA registration', 'RERA agent registration', 'RERA project registration', 'RERA certificate online', 'MahaRERA registration', 'UP RERA agent license'],
    heroIntro: 'RERA Registration is a mandatory statutory license enacted under the Real Estate (Regulation and Development) Act, 2016, designed to bring transparency, accountability, and financial discipline to the Indian real estate sector. Every real estate promoter launching a commercial or residential project exceeding 500 square meters or 8 apartments, as well as every individual or corporate real estate agent (channel partner) facilitating property transactions, must secure an official RERA Registration Number prior to advertising, marketing, booking, or selling real estate.',
    keyTags: ['State RERA Authority', 'Agent / Broker License', 'Project Promoter Approval', 'Escrow 70% Account Norms', 'Real Estate Transparency'],
    overview: {
      p1: 'Under the Real Estate (Regulation and Development) Act, 2016 (RERA), no builder or promoter can advertise, market, book, sell, or invite persons to purchase any plot, apartment, or commercial building without first registering the real estate project with the State Real Estate Regulatory Authority.',
      p2: 'Similarly, Section 9 of the Act prohibits brokers and channel partners from facilitating property transactions without holding an active 5-year RERA Agent License. Operating without RERA registration attracts severe penalties up to 10% of project cost or ₹10,000 per day for brokers. Akshay B2B Solutions provides comprehensive project file structuring, escrow account documentation, and fast-track agent license allotment.'
    },
    registrationProcessOverview: {
      status: 'Mandatory under Section 3 & Section 9 of RERA Act, 2016',
      governingAuthority: 'Respective State Real Estate Regulatory Authority (e.g., MahaRERA, UP RERA, HRERA, RERA Karnataka, Delhi RERA)',
      summary: 'Electronic dossier submission on the state RERA portal with promoter/agent KYC, project title deeds, sanctioned building plans, layout approvals, and CA/Architect certificates.',
      postApproval: 'Issuance of official RERA Project Registration Certificate or 5-Year RERA Real Estate Agent License.',
      assistanceRole: 'Project title audit, CA/Engineer certificate formatting, quarterly compliance filing, and state portal representation.'
    },
    whatIs: {
      definition: 'RERA Registration is a statutory accreditation issued by State Real Estate Regulatory Authorities governing real estate projects and property brokers to ensure consumer protection and project transparency.',
      points: [
        'Mandatory for all residential & commercial projects > 500 sq. meters or > 8 units.',
        'Mandatory for all real estate agents, brokers, and channel partners.',
        'Enforces mandatory deposit of 70% customer funds into a separate project escrow account.',
        'Prohibits advertising or taking booking advances exceeding 10% prior to registration.',
        'Grants standard 5-year validity for agent licenses with renewal options.',
        'Enables transparent public display of project sanctioned plans and delivery timelines.'
      ],
      closing: 'It establishes absolute legal validity and investor trust across Indian real estate.'
    },
    keyCharacteristics: [
      {
        title: '70% Escrow Fund Discipline',
        description: 'Promoters must deposit 70% of collections into a dedicated bank escrow account used solely for land and construction costs.'
      },
      {
        title: 'Agent 5-Year License',
        description: 'Real estate brokers receive a unique state RERA registration number valid for 5 years across the state.'
      },
      {
        title: 'Carpet Area Standardization',
        description: 'Mandates selling and advertising strictly on standard net usable carpet area, eliminating super built-up ambiguity.'
      },
      {
        title: 'Quarterly Compliance Updates',
        description: 'Requires developers to upload quarterly project progress reports (QPR) on the public state RERA portal.'
      }
    ],
    importanceBenefits: {
      intro: 'Securing RERA Registration offers paramount legal and commercial protections:',
      benefits: [
        {
          title: 'Unrestricted Marketing & Sales Rights',
          desc: 'Legally authorizes public launch, hoarding advertisements, media promotions, and advance collection.'
        },
        {
          title: 'Protection from Punitive Fines',
          desc: 'Shields developers and agents from severe penalties up to 10% of total project cost and imprisonment up to 3 years.'
        },
        {
          title: 'Buyer & Investor Trust',
          desc: 'RERA-approved properties command premium valuations and faster homebuyer bookings due to state escrow security.'
        },
        {
          title: 'Bank Project Financing',
          desc: 'Nationalized and private banks approve home loans and construction finance exclusively for RERA-registered projects.'
        },
        {
          title: 'Legitimate Broker Commissions',
          desc: 'Guarantees enforceability of broker commission agreements with Tier-1 builders and corporate developers.'
        }
      ],
      closing: 'It transforms real estate transactions into transparent, bankable, and dispute-free assets.'
    },
    package: {
      title: 'RERA Registration Complete Package (Agent & Project)',
      description: 'End-to-end state RERA portal application preparation, title vetting, and fast license allotment.',
      checklist: [
        'State RERA Authority Jurisdiction & Eligibility Review',
        'Real Estate Agent (Individual / Firm / Company) Portal Filing',
        'Project Title Search & Encumbrance Documentation Structuring',
        'Sanctioned Architectural Layout & Municipal NOC Verification',
        '70% Escrow Bank Account Documentation Advisory',
        'CA (Form 3), Architect (Form 1) & Engineer (Form 2) Certificate Coordination',
        'Official State RERA Certificate & Unique Number Allotment',
        'Quarterly Progress Return (QPR) Compliance Guidance'
      ]
    },
    types: [
      {
        title: 'RERA Real Estate Agent License',
        desc: 'For individual brokers, channel partners, real estate consultancies, and marketing firms selling real estate.',
        eligibility: 'Individual / Firm / Pvt Ltd / LLP'
      },
      {
        title: 'RERA Project Registration (Residential / Commercial)',
        desc: 'For builders, colonizers, and promoters developing plotted layouts, apartments, villas, and commercial complexes.',
        eligibility: 'Land area > 500 sq.m or > 8 units'
      },
      {
        title: 'RERA Agent License Renewal',
        desc: 'Renewal of 5-year agent license upon expiration of validity.',
        eligibility: 'Existing registered agents'
      }
    ],
    comparison: {
      title: 'RERA Agent License vs RERA Project Registration',
      headers: ['Parameter', 'RERA Agent License', 'RERA Project Registration'],
      rows: [
        { aspect: 'Target Applicant', col1: 'Brokers, Channel Partners, Consultancies', col2: 'Builders, Developers, Landowners, Promoters' },
        { aspect: 'Validity Period', col1: '5 Years (Renewable)', col2: 'Project Completion Schedule (e.g., 3-5 Years)' },
        { aspect: 'Mandatory Requirement', col1: 'For marketing or brokering any RERA project', col2: 'For any project > 500 sq.m or > 8 units' },
        { aspect: 'Penalty for Non-Compliance', col1: '₹10,000 per day / Up to 5% unit cost', col2: 'Up to 10% of total estimated project cost' },
        { aspect: 'Escrow Account Requirement', col1: 'Not Applicable', col2: 'Mandatory 70% dedicated project bank account' }
      ]
    },
    lawsGoverning: {
      actName: 'Real Estate (Regulation and Development) Act, 2016 (RERA)',
      authority: 'State Real Estate Regulatory Authorities (e.g., MahaRERA, UP-RERA, HRERA)',
      points: [
        'Central Act No. 16 of 2016 passed by Parliament of India.',
        'Section 3 prohibits advertising/selling unregistered projects.',
        'Section 9 prohibits un-registered real estate agents from brokering real estate deals.',
        'Section 4 mandates deposit of 70% in scheduled bank escrow account.',
        'Section 59 imposes penalty up to 10% of estimated project cost and imprisonment up to 3 years for defaulting promoters.'
      ],
      penalties: 'Unregistered project sales attract up to 10% of total project cost penalty and up to 3 years imprisonment.'
    },
    eligibilityRequirements: {
      intro: 'Any builder launching a qualifying development or any broker marketing real estate must register:',
      criteria: [
        'Agents: Any individual, partnership, or company engaged in mediating real estate deals.',
        'Promoters: Any developer, housing board, or land colonizer where project land > 500 sq.m or units > 8.',
        'Must possess clean legal title of land or registered Joint Development Agreement (JDA).'
      ],
      documentsRequired: [
        'PAN Card, Aadhaar Card, and Photographs of Promoters / Partners / Directors / Agent',
        'Income Tax Returns (ITR) for last 3 financial years',
        'Title Deed / Conveyance Deed / Joint Development Agreement (JDA) (for Projects)',
        'Sanctioned Building Plan, Layout Approval & Commencement Certificate (CC) (for Projects)',
        'CA Certificate (Form 3), Architect Certificate (Form 1), Engineer Certificate (Form 2) (for Projects)',
        'Bank Statement of designated 70% Escrow Bank Account'
      ]
    },
    processSteps: [
      { step: 1, title: 'Category & Jurisdiction Mapping', desc: 'We verify your state RERA rules, classify applicant type (Agent or Project Promoter), and audit supporting records.' },
      { step: 2, title: 'Dossier Structuring & CA Certifications', desc: 'We prepare statutory disclosures, format CA/Architect certificates, and establish the project escrow framework.' },
      { step: 3, title: 'State RERA Portal Submission', desc: 'We upload the complete technical, legal, and financial files on the state regulatory portal and pay statutory fees.' },
      { step: 4, title: 'Authority Scrutiny & License Issuance', desc: 'The State Authority reviews the dossier, resolves technical clarifications, and issues the official RERA Registration Certificate.' }
    ],
    postRegistrationCompliance: {
      intro: 'RERA certificate holders must adhere to strict ongoing statutory duties:',
      points: [
        'Prominently quote RERA Registration Number on all advertisements, hoardings, and marketing brochures.',
        'Promoters must upload Quarterly Progress Reports (QPR) on the state portal detailing inventory and construction milestones.',
        'Agents must maintain books of accounts and records of all brokered transactions for 5 years.',
        'Promoters must obtain completion certificate (CC) and occupancy certificate (OC) within declared completion timeline.'
      ]
    },
    timelines: {
      tat: 'Real Estate Agent: 7 to 15 Days | Project Registration: 30 to 45 Days',
      delayFactors: ['Pending municipal layout sanctions', 'Title defects or land encumbrances', 'State authority technical scrutiny queries'],
      speedAssurance: 'Our real estate legal desk pre-audits all municipal NOCs and title documents for seamless approvals.'
    },
    certification: {
      issuingAuthority: 'State Real Estate Regulatory Authority (RERA)',
      validity: 'Agent: 5 Years | Project: Tied to declared completion date',
      legalSignificance: 'Statutory certificate granting legal authorization to develop, market, and broker real estate.',
      contents: ['Unique RERA Registration Number', 'Promoter / Agent Name & Address', 'Project Name, Land Area & Unit Count', 'Validity Period & Conditions', 'Official Seal of State Regulatory Authority']
    },
    fees: {
      govtFee: 'Variable based on state portal schedules, project land area, and applicant entity type',
      professionalFee: 'Custom Quote (Tailored to agent scale or project size)',
      transparencyNote: 'Custom quote provided upfront with zero hidden charges.'
    },
    taxation: {
      directTaxImpact: 'RERA statutory filing fees, legal consultancy, and escrow management costs are 100% tax-deductible project development expenses.',
      gstImplications: 'Sale of ready-to-move properties holding Completion Certificate is exempt from GST; under-construction properties attract 1% (affordable) or 5% (standard) GST without ITC.',
      deductionsOrExemptions: 'No direct tax exemptions, but avoids massive punitive penalties under Section 59 of the RERA Act.'
    },
    whyUs: [
      'Over 1,200+ RERA Agent licenses and 250+ Project registrations processed.',
      'Comprehensive in-house team of real estate advocates, chartered accountants, and civil engineers.',
      'Quarterly Progress Report (QPR) filing management services available.',
      'Multi-state coverage including MahaRERA, UP-RERA, HRERA, Delhi RERA, and Karnataka RERA.',
      'End-to-end guidance for escrow account opening with scheduled commercial banks.'
    ],
    faqs: [
      { q: 'Is RERA registration mandatory for individual property brokers?', a: 'Yes. Under Section 9 of the RERA Act, 2016, no real estate agent or broker can facilitate the sale of any property in a registered project without obtaining an official RERA Agent License.' },
      { q: 'What is the threshold for mandatory project registration under RERA?', a: 'Any commercial or residential real estate project where the land area exceeds 500 square meters or the number of apartments/plots exceeds 8 units must be registered with RERA.' },
      { q: 'What is the validity of a RERA Real Estate Agent License?', a: 'In most Indian states, a RERA Agent License is issued with a validity of 5 years, renewable upon payment of statutory renewal fees.' },
      { q: 'Can a builder advertise a project before receiving the RERA number?', a: 'No. Section 3 strictly prohibits advertising, marketing, booking, or selling any unit prior to securing official RERA registration. Doing so invites fines up to 10% of the project cost.' },
      { q: 'What is the 70% Escrow Account rule under RERA?', a: 'Promoters must deposit 70% of all customer collections into a designated bank escrow account. Withdrawals are allowed only in proportion to the percentage of construction completion, certified by an Architect, Engineer, and Chartered Accountant.' },
      { q: 'How do I get a custom quote for RERA registration?', a: 'Click "Get Custom Quote" to connect with our senior real estate compliance attorney who will review your project scale or agent entity type and provide an upfront fee schedule.' }
    ],
    relatedServices: [
      { name: 'Shop and Establishment Certificate', desc: 'State labor department registration for real estate offices.', price: '₹999 + Govt. Fee' },
      { name: 'Trade License', desc: 'Municipal corporation trade authorization certificate.', price: '₹999 + Govt. Fee' },
      { name: 'GST Registration', desc: 'Mandatory GSTIN registration for real estate consultancies & builders.', price: '₹699' },
      { name: 'MSME Registration', desc: 'Udyam certificate unlocking priority bank credit and subsidies.', price: '₹999' },
      { name: 'Pvt Ltd Company Compliances', desc: 'Annual corporate secretarial, tax, and labor compliances.', price: '₹7,999' },
      { name: 'Corporate Tax', desc: 'Real estate corporate tax structuring and project accounting.', price: '₹2,499' }
    ]
  },
  {
    slug: 'posh-compliance',
    name: 'POSH Compliance',
    category: 'License',
    parentCategory: 'Registration & License',
    priceType: 'no_price_show',
    priceDisplay: 'Request Consultation',
    heroPriceHook: 'End-to-End Workplace POSH Compliance & Internal Committee (IC) Setup | Prevention of Sexual Harassment at Workplace Act',
    specialCallout: 'Statutory Workplace Mandate',
    urgencyText: 'Consult our certified POSH legal experts',
    ctaText: 'Request Consultation',
    metaTitle: 'Workplace POSH Compliance & IC Setup | Prevention of Sexual Harassment Act',
    metaDescription: 'Complete POSH compliance for corporate organizations: Internal Committee (IC) constitution, External Member empanelment, employee training & annual reporting.',
    seoKeywords: ['POSH compliance', 'POSH Act 2013', 'Internal Committee setup', 'POSH external member', 'POSH annual report', 'sexual harassment at workplace compliance'],
    heroIntro: 'The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 (POSH Act) is a mandatory central statute governing every workplace in India employing 10 or more employees. It requires organizations to institute a zero-tolerance anti-harassment policy, constitute a formally qualified Internal Committee (IC) presided by a senior woman employee and an independent External Member, conduct regular employee sensitization and IC capacity-building workshops, and submit mandatory Annual Reports to the District Officer.',
    keyTags: ['POSH Act 2013', 'Mandatory 10+ Staff', 'Internal Committee (IC)', 'External Member Empanelment', 'Annual District Filing'],
    overview: {
      p1: 'The POSH Act, 2013 mandates that every employer employing 10 or more workers across offices, branches, factories, or remote workplaces must establish an effective, confidential, and time-bound redressal mechanism against sexual harassment.',
      p2: 'Failure to constitute an Internal Committee or non-filing of the annual compliance report attracts a statutory fine of ₹50,000 on the first conviction, doubling to ₹1,00,000 and cancellation of business licenses or government registrations on repeated default. Akshay B2B Solutions delivers end-to-end POSH audit, policy drafting, external member empanelment, and interactive employee training workshops.'
    },
    registrationProcessOverview: {
      status: 'Statutory Mandate for 10+ Employees',
      governingAuthority: 'Ministry of Women and Child Development & Local District Officers',
      summary: 'Drafting gender-neutral workplace POSH policy, formal constitution of 4-member Internal Committee (IC) with external legal expert, conducting mandatory employee workshops, and filing Annual Reports.',
      postApproval: 'Issuance of Complete POSH Statutory Compliance Dossier, IC Gazette Orders, and District Officer Annual Filing Receipts.',
      assistanceRole: 'Customized policy drafting, empanelling certified External Members, employee training webinars, inquiry procedure guidance, and annual return filings.'
    },
    whatIs: {
      definition: 'POSH Compliance refers to the complete legal and institutional framework instituted by an employer under the POSH Act, 2013 to prevent, prohibit, and redress workplace sexual harassment.',
      points: [
        'Mandatory for all companies, LLPs, NGOs, educational institutions, and factories with 10+ employees.',
        'Requires constitution of an Internal Committee (IC) at every physical branch/location.',
        'Mandates appointment of an independent External Member (lawyer / NGO activist).',
        'Requires mandatory gender sensitization training for all permanent and contractual employees.',
        'Demands strict 90-day time-bound conclusion of any formal inquiry proceedings.',
        'Requires submission of the Annual POSH Report to the local District Officer and inclusion in the MCA Board Report.'
      ],
      closing: 'It creates a safe, dignified, and legally protected working environment for women employees.'
    },
    keyCharacteristics: [
      {
        title: 'Internal Committee (IC) Quorum',
        description: 'IC must comprise at least 4 members: Presiding Officer (senior woman), ≥2 employee members, and 1 independent External Member; at least 50% must be women.'
      },
      {
        title: '90-Day Inquiry Window',
        description: 'Inquiries into complaints must be completed within 90 days following principles of natural justice.'
      },
      {
        title: 'Board Report Disclosure',
        description: 'Mandatory disclosure of POSH compliance and number of cases received/resolved in the MCA Directors Board Report under Section 134.'
      },
      {
        title: 'Strict Confidentiality Clause',
        description: 'Section 16 strictly prohibits publishing or publicizing identity of complainant, respondent, or witnesses (₹5,000 penalty for breach).'
      }
    ],
    importanceBenefits: {
      intro: 'Maintaining robust POSH compliance protects corporate reputation and employee morale:',
      benefits: [
        {
          title: 'Immunity from Statutory Penalties',
          desc: 'Avoids ₹50,000 to ₹1,00,000 monetary fines and prevents cancellation of municipal trade licenses and MCA registrations.'
        },
        {
          title: 'Employer Legal Protection',
          desc: 'Protects board directors and management from vicarious liability and criminal proceedings in employment disputes.'
        },
        {
          title: 'Inclusive Workplace Culture',
          desc: 'Fosters a safe, equitable, and dignified environment, boosting female workforce retention and employee productivity.'
        },
        {
          title: 'Investor & ESG Due Diligence',
          desc: 'Institutional investors, VC funds, and global enterprise clients mandate verified POSH audits prior to funding or vendor onboarding.'
        },
        {
          title: 'Structured Dispute Resolution',
          desc: 'Ensures domestic inquiries follow civil court evidence standards, eliminating arbitrary management decisions.'
        }
      ],
      closing: 'It establishes an ethical corporate foundation and safeguards leadership against liability.'
    },
    package: {
      title: 'Complete Corporate POSH Compliance Package',
      description: 'End-to-end statutory POSH audit, IC constitution, external member empanelment, and annual reporting.',
      checklist: [
        'Organizational POSH Applicability & Workforce Audit',
        'Customized Gender-Neutral POSH Policy Drafting',
        'Formal Internal Committee (IC) Constitution & Order Drafting',
        'Empanelment of Certified POSH Legal External Member',
        'Interactive Employee Sensitization Training Workshop (Virtual / On-site)',
        'Specialized IC Investigation Masterclass & Inquiry Kit',
        'POSH Annual Report Drafting & District Officer Submission',
        'MCA Board Report (Section 134) POSH Disclosure Documentation'
      ]
    },
    types: [
      {
        title: 'Complete POSH Implementation Package',
        desc: 'For organizations setting up POSH frameworks from scratch: Policy, IC setup, External Member, and Employee Training.',
        eligibility: 'All employers with 10+ staff'
      },
      {
        title: 'External Member Empanelment Retainer',
        desc: 'Retaining a certified POSH advocate / NGO specialist as the statutory independent member on your Internal Committee.',
        eligibility: 'Active corporate IC committees'
      },
      {
        title: 'Annual POSH Audit & District Officer Filing',
        desc: 'Annual compliance review, training recertification, and statutory filing with local District Magistrate / Officer.',
        eligibility: 'Annual corporate reporting'
      }
    ],
    comparison: {
      title: 'Informal HR Redressal vs Statutory POSH Internal Committee',
      headers: ['Parameter', 'Informal HR Redressal', 'Statutory POSH Internal Committee (IC)'],
      rows: [
        { aspect: 'Legal Standing', col1: 'No statutory standing in court', col2: 'Powers of a Civil Court under CPC (summons, evidence)' },
        { aspect: 'Independent Oversight', col1: 'Internal HR / Management bias risk', col2: 'Mandatory Independent External Expert Member' },
        { aspect: 'Prescribed Timelines', col1: 'Unregulated / Indefinite delays', col2: 'Strict 90-day inquiry completion mandate' },
        { aspect: 'Board Report Mandatory Audit', col1: 'Non-compliant under MCA Sec 134', col2: 'Fully compliant with ROC statutory disclosures' },
        { aspect: 'Statutory Fine Avoidance', col1: 'Subject to ₹50k - ₹1Lakh penalties', col2: '100% Legal immunity from regulatory action' }
      ]
    },
    lawsGoverning: {
      actName: 'Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013',
      authority: 'Ministry of Women & Child Development / Local District Officers / Labour Courts',
      points: [
        'Enacted under Central Act No. 14 of 2013 pursuant to landmark Vishaka Guidelines.',
        'Section 4 mandates constitution of Internal Committee at all workplaces with 10+ employees.',
        'Section 11 grants IC powers of a Civil Court to summon witnesses and enforce document production.',
        'Section 21 mandates submission of Annual Report to the District Officer.',
        'Section 26 prescribes fine up to ₹50,000 for non-compliance, doubling on second offense with cancellation of business licenses.'
      ],
      penalties: 'Non-compliance invites ₹50,000 fine for first offense, doubling to ₹1,00,000 with revocation of business registrations.'
    },
    eligibilityRequirements: {
      intro: 'Every private and public organization employing 10 or more staff must establish POSH compliance:',
      criteria: [
        'Applies to Private Limited Companies, Public Companies, LLPs, Partnerships, Sole Proprietorships, NGOs, and Trusts.',
        'Encompasses permanent, probationary, contractual, intern, apprentice, and consultant staff members.',
        'Applies to traditional physical offices, factories, retail outlets, co-working spaces, and remote work-from-home setups.'
      ],
      documentsRequired: [
        'Certificate of Incorporation / Registration Certificate of the Entity',
        'List of Employees across all locations / branches',
        'Proposed Internal Committee Member Details (Presiding Officer & 2 Employee Members)',
        'Company Letterhead & Logo for Policy Notification',
        'Past Year POSH Complaint Logs (if existing)'
      ]
    },
    processSteps: [
      { step: 1, title: 'Workforce Audit & Policy Formulation', desc: 'We audit your organizational structure and draft a tailored, legally vetted POSH Policy reflecting your culture and remote work norms.' },
      { step: 2, title: 'IC Constitution & External Member Empanelment', desc: 'We draft formal IC appointment letters, designate the Presiding Officer, and empanel our certified external POSH legal specialist.' },
      { step: 3, title: 'Employee Sensitization & IC Training', desc: 'We conduct comprehensive virtual or on-site workshops for employees and an in-depth inquiry simulation masterclass for IC members.' },
      { step: 4, title: 'Statutory Filings & Annual Compliance Kit', desc: 'We deliver your complete POSH compliance manual, notice board posters, and prepare the Annual Report for submission to the District Officer.' }
    ],
    postRegistrationCompliance: {
      intro: 'POSH compliance requires continuous active execution throughout the year:',
      points: [
        'Display POSH policy summary and IC member contact details conspicuously on office notice boards and employee intranet.',
        'Conduct mandatory refresher training for all new joiners and annual sensitization workshops for existing staff.',
        'Convene quarterly IC review meetings even if zero complaints were reported during the quarter.',
        'Submit the statutory POSH Annual Report to the local District Officer before 31st January every year.',
        'Include mandatory POSH disclosure metrics in the annual Directors Report filed with MCA.'
      ]
    },
    timelines: {
      tat: '3 to 5 Working Days for Complete Policy & IC Setup | Workshops scheduled as per client convenience',
      delayFactors: ['Delays in selecting internal committee members', 'Multi-location branch mapping coordination'],
      speedAssurance: 'Our dedicated POSH advisory cell delivers turn-key policy kits and external member empanelment within 48 hours.'
    },
    certification: {
      issuingAuthority: 'Internal Committee (IC) Gazette Order & District Officer Annual Receipt',
      validity: 'Annual Continuous Compliance (IC reconstituted every 3 years)',
      legalSignificance: 'Conclusive evidence of workplace compliance under POSH Act, 2013 for MCA, Labour Dept, and ESG Audits.',
      contents: ['POSH Policy Version & Effective Date', 'Internal Committee Order with Member Designations', 'External Member Empanelment Agreement', 'Annual Sensitization Workshop Records', 'District Officer Annual Report Acknowledgment']
    },
    fees: {
      govtFee: 'Nil (₹0 Government statutory filing fee)',
      professionalFee: 'Customized based on employee count, branch locations & training requirements',
      transparencyNote: 'Custom consultation quote provided following initial workforce review.'
    },
    taxation: {
      directTaxImpact: 'POSH policy advisory, external member retainers, and employee training expenses are 100% tax-deductible operational corporate expenses under Section 37.',
      gstImplications: 'Attracts 18% GST with full Input Tax Credit (ITC) available for corporate taxpayers.',
      deductionsOrExemptions: 'No direct tax exemptions, but insulates company against expensive labor court damages and legal liabilities.'
    },
    whyUs: [
      'Over 850+ corporate enterprises compliant under our POSH advisory desk.',
      'Empanelled network of certified high court advocates and specialized NGO leaders.',
      'Engaging, interactive employee training workshops featuring real-world case scenarios.',
      'End-to-end handling of District Officer annual report submissions across all Indian districts.',
      'Comprehensive Board Report disclosure templates compliant with MCA Section 134.'
    ],
    faqs: [
      { q: 'Is POSH compliance mandatory if my company has only 10 employees?', a: 'Yes. The POSH Act, 2013 mandatorily applies to every workplace employing 10 or more persons (including permanent, temporary, intern, or contractual workers).' },
      { q: 'Who must be on the Internal Committee (IC)?', a: 'The IC must have a minimum of 4 members: A Presiding Officer (senior woman employee), at least 2 employee members committed to women issues, and 1 independent External Member from an NGO or legal background. At least 50% of members must be women.' },
      { q: 'What is the role of the External Member?', a: 'The External Member brings legal expertise, neutrality, and unbiased judgment to prevent internal corporate pressures or management bias during sexual harassment inquiry proceedings.' },
      { q: 'What happens if a company fails to comply with the POSH Act?', a: 'Non-compliance attracts a statutory fine of ₹50,000 on first offense. Repeated default results in ₹1,00,000 fine and cancellation or non-renewal of business licenses/registrations.' },
      { q: 'Does POSH apply to remote work-from-home employees?', a: 'Yes. The definition of "workplace" under Section 2(o) of the POSH Act includes any place visited by the employee arising out of or during the course of employment, including digital workspaces, emails, and virtual meeting rooms.' },
      { q: 'How can I request a consultation for POSH compliance?', a: 'Click "Request Consultation" to schedule a confidential discussion with our senior POSH legal attorney and receive a tailored implementation plan for your organization.' }
    ],
    relatedServices: [
      { name: 'Shop and Establishment Certificate', desc: 'State labor department registration for commercial establishments.', price: '₹999 + Govt. Fee' },
      { name: 'Employee Provident Fund Registration', desc: 'EPFO employer code generation for employee social security.', price: '₹999' },
      { name: 'ESI Registration', desc: 'Employee State Insurance medical & disability coverage registration.', price: '₹999' },
      { name: 'Pvt Ltd Company Compliances', desc: 'Annual corporate secretarial, tax, and labor compliances.', price: '₹7,999' },
      { name: 'Trade License', desc: 'Municipal corporation trade authorization certificate.', price: '₹999 + Govt. Fee' },
      { name: 'Corporate Tax', desc: 'Corporate tax advisory, 80-IAC filings, and financial structuring.', price: '₹2,499' }
    ]
  }
];

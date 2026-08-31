import { ServiceDetailConfig } from './types';

export const TAX_DIRECT_SERVICES: ServiceDetailConfig[] = [
  // 1. Corporate Tax — ₹2499 + Govt. Fee
  {
    slug: 'corporate-tax',
    name: 'Corporate Tax',
    category: 'GST & Tax',
    parentCategory: 'Tax & Compliance',
    price: '₹2,499',
    priceType: 'fixed',
    priceDisplay: '₹2499 + Govt. Fee',
    heroPriceHook: 'Comprehensive Corporate Income Tax Computation, Audit Prep & ITR-6 Filing | ₹2499 + Govt. Fee',
    specialCallout: 'Chartered Accountant & Direct Tax Desk',
    urgencyText: 'Statutory Corporate ITR Due Date 31st October',
    ctaText: 'File Corporate Tax Return',
    metaTitle: 'Corporate Tax Filing & Computation Online @ ₹2499 | ITR-6 & Tax Audit',
    metaDescription: 'Expert Corporate Tax Return (ITR-6) filing, MAT calculation under Section 115JB, Section 115BAA concessional regime advisory, and corporate tax compliance starting @ ₹2499 + Govt. Fee.',
    seoKeywords: [
      'corporate tax filing',
      'ITR-6 online filing',
      'corporate income tax India',
      'Section 115BAA tax rate',
      'MAT computation Section 115JB',
      'corporate tax ₹2499',
      'corporate tax audit Form 3CA 3CD'
    ],
    keywords: ['corporate-tax', 'corporate tax', 'itr 6', 'company tax return', 'pvt ltd tax filing', 'corporate tax return'],
    heroIntro: 'Corporate Tax in India is a direct tax levied on the net taxable income earned by domestic and foreign corporations under the provisions of the Income Tax Act, 1961. Governed by the Central Board of Direct Taxes (CBDT), every registered Private Limited Company, Public Limited Company, and One Person Company must compute corporate tax liabilities, evaluate concessional rates under Section 115BAA/115BAB (22% or 15%), reconcile Minimum Alternate Tax (MAT) under Section 115JB, and mandatorily file Form ITR-6 electronically using Class 3 Digital Signatures before statutory audit and filing deadlines.',
    keyTags: [
      'ITR-6 Corporate Filing',
      'Section 115BAA 22% Concession',
      'MAT Computation (Sec 115JB)',
      'Tax Audit Form 3CA-3CD',
      'Advance Tax & DTAA Optimization'
    ],
    overview: {
      p1: 'Under the Indian Income Tax framework, corporate entities are treated as separate legal taxpayers subject to flat corporate tax rates plus applicable surcharge and 4% Health & Education Cess. Domestic companies can opt for the simplified 22% tax rate under Section 115BAA (effective rate 25.17% including surcharge and cess) without claiming specific exemptions, or remain under the standard regime subject to Minimum Alternate Tax (MAT) at 15% on book profits.',
      p2: 'Failing to compute corporate tax accurately or missing the 31st October statutory deadline triggers severe late filing fees under Section 234F, penal interest under Sections 234A/234B/234C (1% per month), disallowance of business losses, and departmental scrutiny under Section 143(3). Akshay B2B Solutions provides in-depth corporate book audit reconciliation, MAT computation, Section 115BAA tax planning, advance tax scheduling, and CA-certified ITR-6 filing.'
    },
    registrationProcessOverview: {
      status: 'Mandatory Annual Direct Tax Statutory Compliance for all Incorporated Companies',
      governingAuthority: 'Central Board of Direct Taxes (CBDT), Ministry of Finance, Government of India',
      summary: 'Auditing audited balance sheet and P&L accounts, computing depreciation as per Income Tax Act vs Companies Act, calculating MAT under Section 115JB, evaluating Section 115BAA regime choice, generating XML/JSON schema, and filing Form ITR-6 with director Class 3 DSC.',
      postApproval: 'Generation of official Form ITR-6 Electronic Acknowledgment (ITR-V) and subsequent processing under Section 143(1).',
      assistanceRole: 'Tax computation, book profit adjustment, 26AS/AIS reconciliation, tax audit Form 3CA/3CD coordination, and digital signature e-filing.'
    },
    whatIs: {
      definition: 'Corporate Tax is the statutory direct tax assessed on the net profits of incorporated business entities, requiring annual calculation, advance tax deposits, and mandatory electronic return submission in Form ITR-6.',
      points: [
        'Mandatory annual direct tax filing for all Private Limited, Public Limited, OPC, and foreign companies.',
        'Concessional corporate tax rate of 22% available under Section 115BAA for eligible domestic companies.',
        'Special 15% rate under Section 115BAB for newly setup domestic manufacturing corporations.',
        'Minimum Alternate Tax (MAT) under Section 115JB at 15% on adjusted book profits for entities under the old regime.',
        'Mandatory quarterly Advance Tax payment schedule (15% by Jun 15, 45% by Sep 15, 75% by Dec 15, 100% by Mar 15).',
        'Strict digital filing requirement: Form ITR-6 can only be filed electronically under Class 3 Digital Signature of a Director.'
      ],
      closing: 'It protects corporate balance sheets, eliminates penalty risks, and establishes pristine financial standing for banks and venture investors.'
    },
    keyCharacteristics: [
      {
        title: 'Section 115BAA Concessional Regime',
        description: 'Domestic companies can elect a flat 22% tax rate (effective 25.17% with 10% surcharge and 4% cess) with exemption from MAT.'
      },
      {
        title: 'Tax Audit (Section 44AB)',
        description: 'Mandatory tax audit by a practicing CA with Form 3CA and Form 3CD submission if gross business turnover exceeds ₹10 Crore (where digital transactions exceed 95%).'
      },
      {
        title: 'Depreciation & Disallowance Adjustments',
        description: 'Rigorous reconciliation between Companies Act Schedule II depreciation and Income Tax Section 32 block depreciation rates.'
      },
      {
        title: 'DSC-Mandated Electronic Filing',
        description: 'Every corporate return must be authenticated strictly using the Class 3 Digital Signature Certificate of an active director.'
      }
    ],
    importanceBenefits: {
      intro: 'Filing corporate tax with Akshay B2B Solutions delivers strategic financial advantages:',
      benefits: [
        {
          title: 'Optimal Tax Regime Selection (115BAA vs Old)',
          desc: 'Our senior direct tax CAs run dual comparative models to select the most cost-effective tax regime, minimizing gross corporate tax outflow.'
        },
        {
          title: 'Carry Forward of Business & Capital Losses',
          desc: 'Timely filing before the statutory deadline protects legal rights to carry forward business losses and unabsorbed depreciation for up to 8 years.'
        },
        {
          title: 'Avoidance of Compounding Penalties & Interest',
          desc: 'Shields the company from 1% monthly interest under Sections 234A/B/C and statutory late filing penalties under Section 234F.'
        },
        {
          title: 'Clean Financial Profile for Bank Loans & Tender Bids',
          desc: 'Verified ITR-6 acknowledgments are compulsory for securing corporate credit lines, term loans, and participating in public PSU tenders.'
        },
        {
          title: 'Full Reconciliation of 26AS, AIS & Advance Taxes',
          desc: '100% credit recovery of TDS deducted by clients and advance tax challans paid during the four financial quarters.'
        }
      ],
      closing: 'It keeps your corporate governance completely compliant with CBDT and MCA statutory standards.'
    },
    package: {
      title: 'Corporate Tax (ITR-6) Complete Package',
      description: 'End-to-end corporate tax computation, MAT calculation, 26AS/AIS reconciliation, CA verification, and DSC filing.',
      checklist: [
        'Audited Balance Sheet & Profit & Loss Statement Review',
        'Computation of Corporate Tax under Section 115BAA vs Standard Regime',
        'Minimum Alternate Tax (MAT) Calculation under Section 115JB & MAT Credit Schedule',
        'Reconciliation of Form 26AS, AIS, TIS and Advance Tax Challan Deposits',
        'Depreciation Schedule Recalculation under Section 32 of Income Tax Act',
        'Analysis of Section 43B Disallowances and TDS Compliance',
        'Preparation of Form ITR-6 JSON/XML and Form 10-IC Filing (for Section 115BAA)',
        'Class 3 Digital Signature Authentication & Official ITR-V Acknowledgment Delivery'
      ]
    },
    types: [
      {
        title: 'Domestic Companies under Section 115BAA',
        desc: 'Concessional flat 22% tax rate (+ surcharge & cess) with zero MAT applicability and simplified compliance.',
        eligibility: 'All domestic pvt ltd & public ltd companies'
      },
      {
        title: 'Manufacturing Startups under Section 115BAB',
        desc: 'Ultra-low 15% corporate tax rate for newly incorporated manufacturing entities setup on or after Oct 1, 2019.',
        eligibility: 'New manufacturing corporations'
      },
      {
        title: 'Standard Corporate Regime (with MAT)',
        desc: 'Standard 25% or 30% tax rate with entitlement to claim special investment allowances, SEZ exemptions, and MAT credits.',
        eligibility: 'Companies with existing tax exemptions'
      },
      {
        title: 'Foreign Company Corporate Tax',
        desc: 'Tax filing for foreign entities and liaison/project offices operating in India taxed at 40% (reduced to 35% in recent budget).',
        eligibility: 'Foreign branch & project offices'
      }
    ],
    comparison: {
      title: 'Section 115BAA New Regime vs Standard Old Corporate Regime',
      headers: ['Parameter', 'Section 115BAA (New Regime)', 'Standard Regime (Old Scheme)'],
      rows: [
        { aspect: 'Base Tax Rate', col1: '22% flat across all turnover levels', col2: '25% (turnover <= 400Cr) or 30% (> 400Cr)' },
        { aspect: 'Effective Tax Rate', col1: '25.17% (including 10% surcharge & 4% cess)', col2: '29.12% or 34.94% (depending on surcharge)' },
        { aspect: 'Minimum Alternate Tax (MAT)', col1: 'Exempted (Zero MAT applicability)', col2: 'Applicable (15% on adjusted book profits)' },
        { aspect: 'Special Deductions (80-IA, 35AD)', col1: 'Not allowed (must be foregone)', col2: 'Allowed as per statutory provisions' },
        { aspect: 'Filing Form Required', col1: 'Form 10-IC + Form ITR-6', col2: 'Form ITR-6 + Form 29B (MAT report)' }
      ]
    },
    lawsGoverning: {
      actName: 'Income Tax Act, 1961 & Income Tax Rules, 1962 (Chapter IV & XII)',
      authority: 'Central Board of Direct Taxes (CBDT), Ministry of Finance',
      points: [
        'Section 139(1) mandating every corporate entity to file an annual income tax return.',
        'Section 115BAA governing concessional 22% corporate tax rate for domestic companies.',
        'Section 115JB governing Minimum Alternate Tax (MAT) and computation of book profits.',
        'Section 44AB governing mandatory tax audit and submission of Form 3CA-3CD.',
        'Section 234A, 234B, and 234C prescribing 1% monthly interest on advance tax defaults.'
      ],
      penalties: 'Non-filing attracts ₹5,000 late fee under Section 234F, loss of carry-forward losses, 1% monthly interest, and prosecution under Section 276CC.'
    },
    eligibilityRequirements: {
      intro: 'All incorporated corporate entities registered in India are legally mandated to file Corporate Tax returns:',
      criteria: [
        'Private Limited Companies, Public Limited Companies, and One Person Companies (OPCs).',
        'Section 8 Companies and Producer Companies registered under Companies Act, 2013.',
        'Foreign corporations having a Permanent Establishment (PE) or branch office in India.',
        'Entities in commercial operational status, pre-revenue phase, or dormant status (mandatory Nil filing).'
      ],
      documentsRequired: [
        'Audited Financial Statements (Balance Sheet, Profit & Loss Account, Notes to Accounts)',
        'Tax Audit Report in Form 3CA and Form 3CD (if applicable)',
        'Form 26AS, Annual Information Statement (AIS), and Taxpayer Information Summary (TIS)',
        'Challan receipts for Advance Tax and Self-Assessment Tax payments (ITNS 280)',
        'Class 3 Digital Signature Certificate (DSC) of Authorized Director',
        'Income Tax E-Filing Portal Login Credentials'
      ]
    },
    processSteps: [
      { step: 1, title: 'Financial Statements Ingestion & AIS Reconciliation', desc: 'We ingest audited balance sheet figures, match 26AS/AIS TDS credits, and audit advance tax challans.' },
      { step: 2, title: 'Tax Computation & Regime Evaluation', desc: 'Our direct tax team calculates tax under Section 115BAA vs Old Regime, optimizing MAT credits and depreciation.' },
      { step: 3, title: 'ITR-6 Preparation & CA Certification', desc: 'We compile the complex corporate schedule, validate balance sheet schedules, and generate ITR-6 JSON schema.' },
      { step: 4, title: 'DSC Authentication & E-Filing', desc: 'We upload the return on the Income Tax portal, attach the director Class 3 DSC, and deliver the official ITR-V receipt.' }
    ],
    postRegistrationCompliance: {
      intro: 'Key obligations following corporate tax return filing:',
      points: [
        'Track the CPC processing status on the e-filing portal for Section 143(1) intimation.',
        'Reconcile any refund due or tax adjustment against pending demand on the portal.',
        'Schedule subsequent financial year advance tax installments (15th Jun, 15th Sep, 15th Dec, 15th Mar).',
        'Maintain audited financial statements, tax audit reports, and working papers for at least 8 assessment years.'
      ]
    },
    timelines: {
      tat: '2 to 4 Working Days',
      delayFactors: ['Pending statutory audit finalization by company statutory auditor', 'TDS credit mismatch in Form 26AS requiring vendor correction', 'Expiring Director Class 3 DSC'],
      speedAssurance: 'Our dedicated direct tax desk processes fully audited company accounts within 48 hours of document receipt.'
    },
    certification: {
      issuingAuthority: 'Central Processing Centre (CPC), Bengaluru & CBDT, Ministry of Finance',
      validity: 'Statutory direct tax compliance for the specific Assessment Year',
      legalSignificance: 'Official statutory acknowledgment of corporate taxable income declaration recognized by banks, courts, and regulators.',
      contents: [
        'Corporate PAN & Legal Entity Name',
        'Assessment Year (e.g. AY 2025-26)',
        'Gross Total Income & Net Taxable Income',
        'Total Tax Computed, Surcharge, Cess & Net Taxes Paid',
        'Electronic Acknowledgment Number & Digital Verification Hash'
      ]
    },
    fees: {
      govtFee: 'Nil (Official portal filing fee is Nil; statutory taxes paid directly to government)',
      professionalFee: '₹2,499/- only (Complete corporate tax computation and ITR-6 e-filing package; tax audit separate if required)',
      transparencyNote: 'Clear fixed pricing of ₹2499 + Govt. Fee with zero hidden charges.'
    },
    taxation: {
      directTaxImpact: 'Corporate tax computation fees are 100% tax-deductible operational business expenses under Section 37(1).',
      gstImplications: 'Reconciles corporate turnover reported in Income Tax with GSTR-9 annual return, preventing cross-portal scrutiny.',
      deductionsOrExemptions: 'Unlocks allowable business expense write-offs, depreciation benefits under Section 32, and carry forward of business losses.'
    },
    whyUs: [
      'Over 8,500+ corporate returns (ITR-6) successfully filed with zero adverse assessment notices.',
      'Team of seasoned Chartered Accountants and corporate direct tax attorneys.',
      'Dual-regime optimization engine comparing Section 115BAA vs Old Scheme to minimize tax outflow.',
      'Full-spectrum support covering tax audit, MAT computation, and transfer pricing disclosures.',
      'Dedicated compliance manager tracking advance tax due dates and Section 143(1) intimations.'
    ],
    faqs: [
      {
        q: 'What is the last date to file Corporate Tax Return (ITR-6) in India?',
        a: 'For corporate entities subject to statutory audit, the due date for filing ITR-6 is 31st October following the end of the financial year. If the company is subject to Transfer Pricing audit (Form 3CEB), the deadline is 30th November.'
      },
      {
        q: 'What is the tax rate for domestic companies under Section 115BAA?',
        a: 'Under Section 115BAA, eligible domestic companies can opt for a concessional base corporate tax rate of 22%. Adding the mandatory 10% surcharge and 4% Health & Education Cess, the effective corporate tax rate is 25.17%, with zero Minimum Alternate Tax (MAT).'
      },
      {
        q: 'Is it mandatory to file ITR-6 if the company had zero revenue or incurred losses?',
        a: 'Yes! Under Section 139(1) of the Income Tax Act, every incorporated company must mandatorily file its annual income tax return, even if it had zero business activity or incurred massive financial losses.'
      },
      {
        q: 'Can a company file ITR-6 without a Digital Signature Certificate (DSC)?',
        a: 'No. Corporate tax returns (Form ITR-6) must mandatorily be signed and verified electronically using the Class 3 Digital Signature Certificate (DSC) of the Managing Director or authorized Director.'
      },
      {
        q: 'What is Minimum Alternate Tax (MAT) under Section 115JB?',
        a: 'MAT is a statutory provision ensuring that companies declaring high book profits but zero taxable income due to exemptions pay a minimum direct tax of 15% on adjusted book profits. Companies opting for Section 115BAA are completely exempt from MAT.'
      },
      {
        q: 'How do I start Corporate Tax filing with Akshay B2B Solutions?',
        a: 'Click "File Corporate Tax Return" or contact our team at contact@akshayb2bsolutions.com / +91 97180 04839 to share your audited financials for an instant tax computation and filing roadmap.'
      }
    ],
    relatedServices: [
      { name: 'TDS Returns', desc: 'Quarterly Form 24Q, 26Q, and 27Q filing with Form 16 issuance.', price: '₹599/month' },
      { name: 'GST Return', desc: 'Monthly & quarterly GSTR-1 and GSTR-3B filing with ITC reconciliation.', price: '₹500/month' },
      { name: 'TAN Registration', desc: 'Allotment of 10-digit Tax Deduction Account Number.', price: '₹699 + Govt. Fee' },
      { name: 'Income Tax Return Filing', desc: 'Accurate tax filing for individuals, firms, and companies.', price: '₹999' },
      { name: 'Professional Tax Registration', desc: 'State statutory professional tax enrollment and return filing.', price: '₹999 + Govt. Fee' },
      { name: 'GST Registration', desc: 'New 15-digit GSTIN allotment in 3-7 working days.', price: '₹699 + Govt. Fee' }
    ]
  },

  // 2. TAN Registration — ₹699 + Govt. Fee
  {
    slug: 'tan-registration',
    name: 'TAN Registration',
    category: 'GST & Tax',
    parentCategory: 'Tax & Compliance',
    price: '₹699',
    priceType: 'fixed',
    priceDisplay: '₹699 + Govt. Fee',
    heroPriceHook: 'Get 10-Digit Tax Deduction Account Number (TAN) in 2-4 Days | ₹699 + Govt. Fee',
    specialCallout: '100% Online Fast-Track TAN Allotment',
    urgencyText: 'Mandatory before deducting TDS to avoid ₹10,000 penalty',
    ctaText: 'Apply for TAN Registration',
    metaTitle: 'TAN Registration Online India @ ₹699 | Apply Form 49B for TAN Number',
    metaDescription: 'Apply for new TAN (Tax Deduction and Collection Account Number) online at ₹699 + Govt. Fee. Fast Form 49B submission on NSDL portal, instant TAN allotment for employers & businesses.',
    seoKeywords: [
      'TAN registration online',
      'apply for TAN number',
      'Form 49B online filing',
      'TAN registration ₹699',
      'Tax Deduction Account Number',
      'NSDL TAN application',
      'TDS deduction TAN allotment'
    ],
    keywords: ['tan-registration', 'tan registration', 'apply tan', 'tax deduction account number', 'form 49b'],
    heroIntro: 'A Tax Deduction and Collection Account Number (TAN), issued under Section 203A of the Income Tax Act, 1961 by the Income Tax Department through Protean eGov Technologies (formerly NSDL), is a mandatory 10-digit alphanumeric identifier required by every individual, business, or organization deducting or collecting tax at source (TDS/TCS). Every employer paying taxable salaries, businesses paying contractor fees, rent, professional fees, or making cross-border payments must obtain a TAN and quote it on all TDS challans, quarterly TDS returns, and Form 16/16A certificates.',
    keyTags: [
      'Section 203A Income Tax Act',
      '10-Digit Alphanumeric TAN',
      'Form 49B Electronic Filing',
      'Mandatory for TDS & TCS',
      'Avoid ₹10,000 Section 272BB Penalty'
    ],
    overview: {
      p1: 'Under Indian direct tax legislation, any entity responsible for deducting Tax Deducted at Source (TDS) on salaries (Section 192), contractor bills (Section 194C), professional fees (Section 194J), rent (Section 194I), or collecting Tax Collected at Source (TCS under Section 206C) must obtain an independent TAN. PAN cannot be substituted for TAN in business TDS operations.',
      p2: 'Failing to apply for TAN or failing to quote TAN on TDS payments and quarterly returns attracts a statutory non-waivable penalty of ₹10,000 under Section 272BB. Furthermore, banks will reject Challan ITNS 281 deposits without a valid TAN, causing interest liabilities of 1.5% per month. Akshay B2B Solutions provides instant Form 49B drafting, NSDL digital submission, and expedited TAN allotment within 2 to 4 working days.'
    },
    registrationProcessOverview: {
      status: 'Mandatory Statutory Registration for all Direct Tax Deductors & Collectors',
      governingAuthority: 'Income Tax Department & Protean eGov Technologies (NSDL)',
      summary: 'Evaluating deductor category, compiling entity PAN and premise proof, filling electronic Form 49B on NSDL portal, uploading authorization proof, and processing government fee.',
      postApproval: 'Issuance of official 10-digit TAN Allotment Letter from the Income Tax Department with lifetime validity.',
      assistanceRole: 'Form 49B preparation, AO code selection, NSDL portal filing, tracking acknowledgment number, and delivering official TAN certificate.'
    },
    whatIs: {
      definition: 'TAN Registration is the statutory enrollment with the Income Tax Department to receive a unique 10-digit Tax Deduction Account Number required for deducting and depositing TDS.',
      points: [
        '10-digit alphanumeric code structured as: 4 Letters (City & Deductor Name) + 5 Digits + 1 Letter.',
        'Mandatory under Section 203A for all entities deducting TDS on salaries, vendor bills, rent, or commission.',
        'Compulsory for generating Challan ITNS 281 and depositing withholding tax into central treasury.',
        'Mandatory prerequisite for filing quarterly TDS returns (Form 24Q, 26Q, 27Q, 27EQ) on TRACES.',
        'Required for downloading authentic, digitally signed Form 16 and Form 16A certificates.',
        'Holds permanent lifetime validity across India with zero annual renewal fees.'
      ],
      closing: 'It empowers your enterprise to lawfully deduct withholding tax, maintain vendor relationships, and prevent heavy Section 272BB fines.'
    },
    keyCharacteristics: [
      {
        title: '10-Digit Alphanumeric Structure',
        description: 'First 3 letters represent city code, 4th letter is the first letter of deductor name, followed by 5 numbers and 1 check letter.'
      },
      {
        title: 'Distinct from Entity PAN',
        description: 'PAN is for declaring entity income; TAN is strictly for deducting, collecting, and depositing withholding taxes on third-party payments.'
      },
      {
        title: 'Single TAN for Multiple Branches',
        description: 'An entity can utilize a centralized TAN or apply for separate TANs for distinct branch locations and regional offices.'
      },
      {
        title: 'Lifetime Permanent Validity',
        description: 'Once issued, the TAN number remains active permanently throughout the lifecycle of the business entity.'
      }
    ],
    importanceBenefits: {
      intro: 'Securing your TAN Registration promptly provides vital legal and operational protections:',
      benefits: [
        {
          title: 'Lawful Salary & Vendor Payout Processing',
          desc: 'Enables lawful deduction and deposit of statutory TDS from employee payroll and contractor invoices.'
        },
        {
          title: 'Total Protection from ₹10,000 Penalty',
          desc: 'Avoid paying the mandatory statutory penalty of ₹10,000 imposed under Section 272BB for non-possession or non-quoting of TAN.'
        },
        {
          title: '100% Tax Deductibility of Business Expenses',
          desc: 'Prevents 30% statutory disallowance of business expenses under Section 40(a)(ia) for failure to deposit TDS under a valid TAN.'
        },
        {
          title: 'Seamless TRACES Account Registration',
          desc: 'Enables instant registration on the government TRACES portal for quarterly return filings and Form 16 generation.'
        },
        {
          title: 'Smooth Reflection in Deductee Form 26AS/AIS',
          desc: 'Ensures your vendors and staff receive verified tax credit reflections in their AIS and Form 26AS ledgers.'
        }
      ],
      closing: 'It establishes flawless direct tax compliance across all financial transactions of your firm.'
    },
    package: {
      title: 'TAN Registration Complete Package',
      description: 'End-to-end Form 49B preparation, AO code mapping, NSDL portal filing, and digital TAN letter delivery.',
      checklist: [
        'Deductor Category & AO (Assessing Officer) Code Mapping',
        'Preparation & Verification of Electronic Form 49B Application',
        'Entity PAN Card & Registered Premise Proof Vetting',
        'Authorized Signatory Identity Verification & KYC Review',
        'Submission on Protean NSDL / Income Tax E-Filing Portal',
        'Government Statutory Challan Fee Processing',
        'Generation of 14-Digit NSDL Acknowledgment Tracking Slip',
        'Delivery of Official Income Tax Department TAN Allotment Letter'
      ]
    },
    types: [
      {
        title: 'Corporate TAN (Companies & LLPs)',
        desc: 'For Private Limited, Public Limited, OPC, and LLP entities deducting TDS on staff salaries and vendor invoices.',
        eligibility: 'Incorporated corporate bodies'
      },
      {
        title: 'Firm & Proprietorship TAN',
        desc: 'For partnership firms, sole proprietors (under tax audit), and HUFs making taxable payments.',
        eligibility: 'Proprietors & firms'
      },
      {
        title: 'Branch / Regional Office TAN',
        desc: 'For decentralized corporate branches managing independent payroll and local vendor TDS disbursements.',
        eligibility: 'Corporate branches & divisions'
      },
      {
        title: 'Government / Autonomous Body TAN',
        desc: 'For state/central government departments, local authorities, and educational societies deducting TDS.',
        eligibility: 'Govt bodies & trusts'
      }
    ],
    comparison: {
      title: 'TAN (Tax Deduction Account Number) vs PAN (Permanent Account Number)',
      headers: ['Parameter', 'TAN Number', 'PAN Number'],
      rows: [
        { aspect: 'Governing Section', col1: 'Section 203A of Income Tax Act', col2: 'Section 139A of Income Tax Act' },
        { aspect: 'Primary Objective', col1: 'Deducting, collecting & depositing TDS/TCS', col2: 'Declaring income, paying taxes & filing ITR' },
        { aspect: 'Application Form', col1: 'Form 49B on NSDL portal', col2: 'Form 49A (Domestic) / Form 49AA (Foreign)' },
        { aspect: 'Quoting Requirement', col1: 'TDS Challans, Form 16, TDS Returns', col2: 'Income Tax Returns, Bank Accounts, Invoices' },
        { aspect: 'Penalty for Default', col1: '₹10,000 under Section 272BB', col2: '₹10,000 under Section 272B' }
      ]
    },
    lawsGoverning: {
      actName: 'Income Tax Act, 1961 (Section 203A & Section 272BB)',
      authority: 'Income Tax Department & Central Board of Direct Taxes (CBDT)',
      points: [
        'Section 203A mandating every person deducting or collecting tax to apply for TAN.',
        'Rule 114A of Income Tax Rules, 1962 prescribing application in Form 49B.',
        'Section 200 governing duty of person deducting tax to pay into government treasury.',
        'Section 272BB prescribing ₹10,000 penalty for failure to obtain or quote TAN.',
        'Section 40(a)(ia) disallowing 30% of expenditure if TDS is not deposited with valid TAN.'
      ],
      penalties: 'Non-possession of TAN attracts ₹10,000 non-waivable statutory penalty and 30% expenditure disallowance in P&L.'
    },
    eligibilityRequirements: {
      intro: 'Any entity or individual responsible for withholding tax under the Income Tax Act must obtain a TAN:',
      criteria: [
        'All Private Limited, Public Limited, OPC, and LLP corporate entities.',
        'Partnership Firms, Sole Proprietorships, and HUFs liable for tax audit under Section 44AB.',
        'Any individual or entity paying salary exceeding basic income tax exemption limits.',
        'Any business paying contractual bills, professional fees, or rent exceeding statutory TDS thresholds.'
      ],
      documentsRequired: [
        'PAN Card of the Business Entity / Proprietor',
        'Certificate of Incorporation / Partnership Deed / Registration Proof',
        'PAN & Aadhaar Card of Authorized Signatory / Director / Partner',
        'Registered Business Premise Proof (Electricity Bill / Rent Agreement)',
        'Active Mobile Number & Email Address for OTP and Status Updates'
      ]
    },
    processSteps: [
      { step: 1, title: 'Deductor Profile & AO Code Selection', desc: 'We verify your business constitution and identify the precise Jurisdictional Assessing Officer (AO) code.' },
      { step: 2, title: 'Form 49B Drafting & Verification', desc: 'We prepare the electronic Form 49B application on the Protean NSDL portal with complete entity details.' },
      { step: 3, title: 'NSDL Submission & Fee Processing', desc: 'We submit the application, discharge government statutory portal fees, and generate the 14-digit tracking receipt.' },
      { step: 4, title: 'TAN Number Allotment & Delivery', desc: 'The Income Tax Department allots the 10-digit TAN, and we deliver your official TAN Allotment Letter.' }
    ],
    postRegistrationCompliance: {
      intro: 'Key statutory obligations following TAN allotment:',
      points: [
        'Register the newly allotted TAN on the TRACES portal (tdscpc.gov.in) and Income Tax e-filing portal.',
        'Quote the 10-digit TAN on all monthly Challan ITNS 281 deposits made via net banking.',
        'File mandatory quarterly TDS returns (Form 24Q, 26Q, 27Q) on or before statutory quarterly deadlines.',
        'Issue authentic, digitally signed Form 16 / Form 16A certificates to deductees within prescribed timelines.'
      ]
    },
    timelines: {
      tat: '2 to 4 Working Days',
      delayFactors: ['Name mismatch between entity PAN and NSDL master database', 'Incorrect AO code selection', 'NSDL portal verification server backlog'],
      speedAssurance: 'Our direct tax desk pre-scrubs all PAN details to ensure instant single-pass TAN allotment.'
    },
    certification: {
      issuingAuthority: 'Income Tax Department, Government of India',
      validity: 'Lifetime / Permanent Validity',
      legalSignificance: 'Official statutory direct tax identifier authorizing deduction and deposit of withholding tax.',
      contents: [
        '10-Digit Alphanumeric TAN Number',
        'Deductor Legal Name & Trade Name',
        'Registered Address & Pin Code',
        'Jurisdictional Assessing Officer (AO) Code',
        'Date of Allotment & Government Seal'
      ]
    },
    fees: {
      govtFee: '₹65 (NSDL official portal statutory processing fee)',
      professionalFee: '₹699/- only (Complete Form 49B preparation, AO code mapping, and filing package)',
      transparencyNote: 'Fixed price of ₹699 + Govt. Fee with zero hidden charges.'
    },
    taxation: {
      directTaxImpact: 'TAN registration fees are 100% tax-deductible operational business expenses under Income Tax.',
      gstImplications: 'Ensures compliance with commercial withholding mandates without affecting GST Input Tax Credits.',
      deductionsOrExemptions: 'Prevents 30% expenditure disallowance on contractor and professional expenses under Section 40(a)(ia).'
    },
    whyUs: [
      'Over 12,000+ TAN numbers successfully allotted with zero application rejections.',
      'Instant same-day Form 49B submission on Protean NSDL e-Gov portal.',
      'Accurate AO (Assessing Officer) code selection preventing administrative jurisdiction delays.',
      'Complimentary TRACES portal onboarding and TDS compliance calendar.',
      'Dedicated tax advisor available for ongoing quarterly TDS filing and Form 16 generation.'
    ],
    faqs: [
      {
        q: 'What is TAN and who needs it in India?',
        a: 'TAN stands for Tax Deduction and Collection Account Number. It is a 10-digit alphanumeric number issued by the Income Tax Department. Any person or business entity responsible for deducting Tax Deducted at Source (TDS) or collecting Tax Collected at Source (TCS) must obtain a TAN.'
      },
      {
        q: 'Can I use my business PAN instead of TAN to deposit TDS?',
        a: 'No! PAN and TAN serve completely distinct legal functions. PAN is for declaring entity income and filing ITR, while TAN is exclusively for deducting and depositing TDS. Quoting PAN instead of TAN on TDS challans is illegal and attracts a ₹10,000 penalty.'
      },
      {
        q: 'What is the penalty for not having a TAN number?',
        a: 'Under Section 272BB of the Income Tax Act, 1961, failing to apply for TAN or failing to quote TAN on TDS challans, returns, and certificates attracts a mandatory flat penalty of ₹10,000.'
      },
      {
        q: 'How long does it take to receive the TAN number after applying?',
        a: 'Once Form 49B is successfully submitted on the NSDL portal, the Income Tax Department typically allots the 10-digit TAN number within 2 to 4 working days.'
      },
      {
        q: 'Does a TAN number require annual renewal or recurring fees?',
        a: 'No. TAN holds lifetime permanent validity. There is no renewal requirement or recurring government fee once the TAN is allotted.'
      },
      {
        q: 'How do I apply for TAN Registration with Akshay B2B Solutions?',
        a: 'Click "Apply for TAN Registration" or contact us at contact@akshayb2bsolutions.com / +91 97180 04839 to submit your PAN and premise details for instant same-day Form 49B filing.'
      }
    ],
    relatedServices: [
      { name: 'TDS Returns', desc: 'Quarterly Form 24Q, 26Q, and 27Q filing with Form 16 issuance.', price: '₹599/month' },
      { name: 'Corporate Tax', desc: 'Comprehensive corporate income tax computation and ITR-6 filing.', price: '₹2499 + Govt. Fee' },
      { name: 'Income Tax Return Filing', desc: 'Accurate tax filing for individuals, firms, and companies.', price: '₹999' },
      { name: 'GST Registration', desc: 'New 15-digit GSTIN allotment in 3-7 working days.', price: '₹699 + Govt. Fee' },
      { name: 'GST Return', desc: 'Monthly & quarterly GSTR-1 and GSTR-3B filing with ITC reconciliation.', price: '₹500/month' },
      { name: 'Professional Tax Registration', desc: 'State statutory professional tax enrollment and return filing.', price: '₹999 + Govt. Fee' }
    ]
  },

  // 3. TDS Returns — ₹599/month
  {
    slug: 'tds-returns',
    name: 'TDS Returns',
    category: 'GST & Tax',
    parentCategory: 'Tax & Compliance',
    price: '₹599',
    priceType: 'recurring',
    priceDisplay: '₹599/month',
    heroPriceHook: 'Quarterly Form 24Q, 26Q, 27Q & 27EQ TDS Filing with Form 16/16A Generation | ₹599/month',
    specialCallout: 'TRACES Portal Verification & NSDL FVU Validated',
    urgencyText: 'Avoid ₹200/day late fees under Section 234E',
    ctaText: 'Start TDS Return Filing',
    metaTitle: 'TDS Return Filing Online India @ ₹599/mo | Form 24Q, 26Q, 27Q on TRACES',
    metaDescription: 'File quarterly TDS returns online at ₹599/month. Form 24Q (Salary), 26Q (Non-Salary), 27Q (NRI) & 27EQ (TCS) on TRACES portal with NSDL FVU validation & instant Form 16/16A generation.',
    seoKeywords: [
      'TDS return filing',
      'Form 24Q filing',
      'Form 26Q filing',
      'TDS return ₹599/month',
      'TRACES portal filing',
      'Form 16 generation online',
      'NSDL FVU validation',
      'Section 234E late fee'
    ],
    keywords: ['tds-returns', 'tds-return', 'tds returns', 'tds return filing', 'form 24q', 'form 26q', 'form 27q'],
    heroIntro: 'A TDS Return Filing, governed under Section 200(3) of the Income Tax Act, 1961 read with Rule 31A of the Income Tax Rules, is the mandatory quarterly statutory declaration submitted by a Tax Deductor (holding a Tax Deduction and Collection Account Number or TAN) to the Income Tax Department through the TRACES portal. Every corporate employer, partnership firm, LLP, proprietorship (under tax audit), and government office deducting Tax Deducted at Source (TDS) on salaries, contractor payments, rent, professional fees, or commissions must file quarterly TDS returns to credit tax payments to deductees and avoid compounding late fees of ₹200 per day under Section 234E.',
    keyTags: [
      'Section 200(3) Income Tax Act',
      'Form 24Q (Salary) & 26Q (Non-Salary)',
      'TRACES Portal & Challan 281',
      'Form 16 & Form 16A Issuance',
      'Section 234E Penalty Shield'
    ],
    overview: {
      p1: 'The Tax Deducted at Source (TDS) framework acts as a vital revenue-collection pillar for the Government of India, requiring deductors to withhold specified tax percentages at the point of making payments (salaries, contractor invoices, professional fees, rent, commissions) and deposit the funds via Challan ITNS 281 before filing quarterly returns.',
      p2: 'Failing to file quarterly TDS returns on time triggers automated daily late fees of ₹200 per day under Section 234E, penalty up to ₹1,00,000 under Section 271H, 1.5% monthly interest on un-deposited TDS, and causes deductees to lose their tax credits in Form 26AS/AIS. Akshay B2B Solutions provides in-depth PAN verification, challan matching, FVU file validation, and seamless TRACES filing with Form 16/16A certificate generation.'
    },
    registrationProcessOverview: {
      status: 'Mandatory Quarterly Direct Tax Statutory Compliance for TAN Holders',
      governingAuthority: 'TRACES & Central Board of Direct Taxes (CBDT), Ministry of Finance',
      summary: 'Reconciling monthly Challan 281 tax deposits, verifying deductee PAN numbers and applicable tax sections (192, 194C, 194J, 194I, 194H), generating and validating electronic File Validation Utility (FVU) data, and filing on the TIN-NSDL / TRACES portal.',
      postApproval: 'Generation of official Form 27A Provisional Receipt and downloading of digitally signed Form 16 / 16A certificates from TRACES.',
      assistanceRole: 'Challan validation, deductee PAN scrubbing, FVU generation, portal submission, and TRACES Form 16 generation.'
    },
    whatIs: {
      definition: 'TDS Return Filing is a quarterly statutory statement submitted by a TAN holder summarizing all tax deductions made, deposited challan records, and deductee PAN allocations.',
      points: [
        'Form 24Q: Quarterly TDS return for salary payments made to employees (Section 192).',
        'Form 26Q: Quarterly TDS return for domestic non-salary payments (Contractor, Professional, Rent, Commission).',
        'Form 27Q: Quarterly TDS return for payments made to Non-Residents (NRIs) and foreign entities.',
        'Form 27EQ: Quarterly statement for Tax Collected at Source (TCS) under Section 206C.',
        'Ensures tax credits are reflected in deductees Form 26AS and AIS.',
        'Mandatory prerequisite for downloading verified Form 16 and Form 16A certificates from TRACES.'
      ],
      closing: 'It preserves employer credibility, prevents heavy non-compliance fines, and ensures deductees receive tax credits.'
    },
    keyCharacteristics: [
      {
        title: 'Four Quarterly Cycles',
        description: 'Q1 (Apr-Jun) due 31st July | Q2 (Jul-Sep) due 31st Oct | Q3 (Oct-Dec) due 31st Jan | Q4 (Jan-Mar) due 31st May.'
      },
      {
        title: 'NSDL FVU Validation',
        description: 'Data files must undergo cryptographic validation through the NSDL File Validation Utility (FVU) before portal upload.'
      },
      {
        title: 'Section 234E Daily Late Fee',
        description: 'Mandatory non-waivable statutory late fee of ₹200 per day for every single day of delay in filing.'
      },
      {
        title: 'TRACES Certificate Generation',
        description: 'Only quarterly filed returns enable authorized download of digitally signed Form 16 (Salary) and Form 16A (Non-Salary).'
      }
    ],
    importanceBenefits: {
      intro: 'Filing quarterly TDS returns on time provides crucial corporate and financial benefits:',
      benefits: [
        {
          title: 'Protection from ₹200/Day Late Fees & Section 271H',
          desc: 'Avoid accumulating thousands of rupees in statutory Section 234E late fees and severe penalties up to ₹1 Lakh.'
        },
        {
          title: 'Smooth Form 16 / 16A Issuance for Staff & Vendors',
          desc: 'Instantly generate authentic, digitally signed Form 16 (Part A & B) for your employees and Form 16A for your vendors.'
        },
        {
          title: 'Immediate 26AS Tax Credit Reflection',
          desc: 'Ensures your contractors and consultants see their TDS credits in Form 26AS/AIS, maintaining pristine business relationships.'
        },
        {
          title: '100% Tax Deductibility of Business Expenses',
          desc: 'Prevents 30% statutory disallowance of business expenses under Section 40(a)(ia) for non-deduction or non-filing of TDS.'
        },
        {
          title: 'Zero Department Scrutiny Notices',
          desc: 'Prevents automated TRACES short-deduction or short-payment demand notices and compounding penal interest.'
        }
      ],
      closing: 'It keeps your corporate direct tax ledger completely audit-proof and penalty-free.'
    },
    package: {
      title: 'TDS Return Filing Complete Package',
      description: 'End-to-end challan reconciliation, PAN validation, FVU file generation, TRACES filing, and Form 16/16A issuance.',
      checklist: [
        'Monthly Challan 281 Deposit Reconciliation & BSR Code Matching',
        'Deductee PAN Scrubbing & Tax Section Classification (192, 194C, 194J, 194I)',
        'Computation of Short-Deductions, Interest, and Higher 206AB Rates',
        'Preparation of Quarterly Return Data across Form 24Q, 26Q, 27Q, 27EQ',
        'NSDL File Validation Utility (FVU) Cryptographic Validation',
        'Electronic Submission on TIN-NSDL / Income Tax E-Filing Portal',
        'Generation of Form 27A Provisional Receipt & ARN Acknowledgment',
        'Bulk Download & Delivery of Digitally Signed Form 16 / Form 16A'
      ]
    },
    types: [
      {
        title: 'Form 24Q (Salary TDS)',
        desc: 'For employers deducting TDS from employee salaries under Section 192 (includes Annexure II in Q4).',
        eligibility: 'All corporate employers'
      },
      {
        title: 'Form 26Q (Domestic Non-Salary TDS)',
        desc: 'For TDS on contractor bills (194C), professional fees (194J), rent (194I), brokerage (194H), and interest (194A).',
        eligibility: 'All businesses making B2B payouts'
      },
      {
        title: 'Form 27Q (NRI & Foreign Payments TDS)',
        desc: 'For TDS deducted on payments made to non-residents, foreign corporations, and cross-border remittances (Section 195).',
        eligibility: 'Foreign remittance payers'
      },
      {
        title: 'Form 27EQ (TCS Collection)',
        desc: 'For entities collecting Tax Collected at Source on sale of scrap, timber, minerals, motor vehicles, or overseas tour packages.',
        eligibility: 'TCS collecting sellers'
      }
    ],
    comparison: {
      title: 'Form 24Q (Salary) vs Form 26Q (Non-Salary)',
      headers: ['Parameter', 'Form 24Q (Salary)', 'Form 26Q (Non-Salary)'],
      rows: [
        { aspect: 'Payment Nature', col1: 'Employee salaries & taxable allowances', col2: 'Contractors, consultants, rent, commissions' },
        { aspect: 'Governing Section', col1: 'Section 192', col2: 'Sections 194C, 194J, 194I, 194H, 194A, 194Q' },
        { aspect: 'Certificate Generated', col1: 'Form 16 (Part A & Part B)', col2: 'Form 16A' },
        { aspect: 'Quarter 4 Annexure', col1: 'Detailed salary breakup & deductions in Annexure II', col2: 'Standard quarterly deductee schedule' },
        { aspect: 'Threshold Limits', col1: 'Applicable if income > basic exemption limit', col2: 'Specific statutory section limits (e.g. ₹30K 194J)' }
      ]
    },
    lawsGoverning: {
      actName: 'Income Tax Act, 1961 (Chapter XVII-B) & Income Tax Rules, 1962',
      authority: 'TRACES & Directorate of Income Tax (Systems), CBDT',
      points: [
        'Section 200(3) mandating quarterly filing of TDS statements.',
        'Section 203 mandating issuance of Form 16 / Form 16A certificates to deductees.',
        'Section 234E levying mandatory late fee of ₹200 per day for delayed filing.',
        'Section 271H prescribing penalty from ₹10,000 to ₹1,00,000 for failure to file.',
        'Section 201(1A) levying 1% to 1.5% monthly interest for late deduction or late deposit.'
      ],
      penalties: 'Delayed filing attracts ₹200/day late fee, 30% expense disallowance, and penalties up to ₹1,00,000.'
    },
    eligibilityRequirements: {
      intro: 'Any entity holding a Tax Deduction and Collection Account Number (TAN) that deducted TDS must file:',
      criteria: [
        'All Private Limited, Public Limited, OPC, and LLP entities making business payments.',
        'Partnership Firms and Proprietorships liable for tax audit under Section 44AB.',
        'Government departments, autonomous bodies, trusts, and societies.',
        'Any entity collecting TCS under Section 206C.'
      ],
      documentsRequired: [
        '10-Digit TAN Number of the Deductor',
        'Monthly Challan ITNS 281 receipts (BSR Code, Challan No., Deposit Date & Amount)',
        'Deductee Master (Name, PAN Number, Nature of Payment & Gross Bill Amount)',
        'Employee Salary Breakup & Tax Declarations (for Form 24Q Quarter 4)',
        'TRACES Portal Login Credentials (User ID, Password & TAN)'
      ]
    },
    processSteps: [
      { step: 1, title: 'Challan & Deductee Ledger Ingestion', desc: 'We ingest your monthly Challan 281 payment receipts and vendor payment ledgers into our direct tax engine.' },
      { step: 2, title: 'PAN Scrubbing & Tax Section Audit', desc: 'We verify deductee PAN numbers on TRACES, check higher rate applicability (Section 206AB), and validate tax rates.' },
      { step: 3, title: 'FVU File Generation & Validation', desc: 'We prepare the quarterly data, run the NSDL File Validation Utility (FVU), and resolve all validation errors.' },
      { step: 4, title: 'Portal Filing & Form 16 Generation', desc: 'We submit the return on TIN-NSDL / Income Tax portal, deliver the Form 27A receipt, and download Form 16/16A from TRACES.' }
    ],
    postRegistrationCompliance: {
      intro: 'Key obligations following TDS return filing:',
      points: [
        'Download and issue Form 16 to employees within 15 days of filing Q4 (by 15th June).',
        'Download and issue Form 16A to vendors within 15 days of filing each quarterly return.',
        'Review the TRACES portal for any "Justification Report" flagging short-deductions or pan-errors.',
        'If discrepancies exist, file a TDS Correction Return on TRACES to rectify deductee records.'
      ]
    },
    timelines: {
      tat: '24 to 48 Hours',
      delayFactors: ['Incorrect or invalid deductee PAN numbers', 'Challan 281 BSR code or CIN mismatches on TIN-NSDL', 'TRACES portal server maintenance during peak quarterly due dates'],
      speedAssurance: 'Our direct tax desk pre-scrubs all PAN and challan data to guarantee single-pass FVU validation.'
    },
    certification: {
      issuingAuthority: 'TIN-NSDL & TRACES, Directorate of Income Tax (Systems)',
      validity: 'Statutory direct tax compliance proof for the specific quarterly cycle',
      legalSignificance: 'Official provisional receipt acknowledging statutory TDS filing, authorizing generation of Form 16/16A certificates.',
      contents: [
        'Provisional Receipt Number (PRN / Token Number)',
        'TAN Number & Deductor Legal Name',
        'Quarter & Financial Year (e.g. Q1 FY 2024-25)',
        'Total TDS Deducted & Deposited',
        'Digital Signature & Official NSDL Timestamp'
      ]
    },
    fees: {
      govtFee: '₹0 (Portal filing fee is Nil, unless Section 234E late fees apply for delayed filing)',
      professionalFee: '₹599/month (Comprehensive recurring retainer covering quarterly Form 24Q/26Q filings and Form 16 issuance)',
      transparencyNote: 'Transparent pricing at ₹599/month with zero hidden charges.'
    },
    taxation: {
      directTaxImpact: 'TDS return filing professional fees are 100% tax-deductible operational business expenses.',
      gstImplications: 'Ensures full compliance with tax deduction mandates, preventing 30% statutory disallowance of expenses in corporate P&L.',
      deductionsOrExemptions: 'Saves the enterprise from compounding ₹200/day late fees and Section 271H penalties.'
    },
    whyUs: [
      'Over 16,000+ quarterly TDS returns filed with 100% FVU validation success rate.',
      'Automated PAN scrubbing engine detecting inoperative or invalid PANs before submission.',
      'Comprehensive support for Form 24Q, 26Q, 27Q, 27EQ, and TRACES correction statements.',
      'Bulk automated generation and digital signing of Form 16 and Form 16A certificates.',
      'Dedicated direct tax manager tracking all quarterly deadlines and challan reconciliations.'
    ],
    faqs: [
      {
        q: 'Who is required to file quarterly TDS returns in India?',
        a: 'Any person or entity holding a valid TAN who has deducted Tax Deducted at Source (TDS) or collected Tax Collected at Source (TCS) on payments like salaries, contractor fees, professional charges, rent, or commission must file quarterly TDS returns.'
      },
      {
        q: 'What are the quarterly due dates for filing TDS returns?',
        a: 'Q1 (April - June): 31st July | Q2 (July - September): 31st October | Q3 (October - December): 31st January | Q4 (January - March): 31st May.'
      },
      {
        q: 'What is the late fee for delayed TDS return filing?',
        a: 'Under Section 234E of the Income Tax Act, a mandatory late fee of ₹200 per day is levied for every day the return is delayed, up to the total amount of TDS deducted in that quarter.'
      },
      {
        q: 'What is the difference between Form 16 and Form 16A?',
        a: 'Form 16 is an annual TDS certificate issued by employers to employees for salary payments (Section 192). Form 16A is a quarterly TDS certificate issued for non-salary payments like contractor bills, professional fees, and rent.'
      },
      {
        q: 'What is a TDS Correction Return?',
        a: 'If errors occur in the original filed return—such as incorrect deductee PAN, wrong challan CIN, incorrect amount, or wrong section code—a TDS Correction Statement is filed on the TRACES portal to rectify the data.'
      },
      {
        q: 'How do I start TDS return filing with Akshay B2B Solutions?',
        a: 'Click "Start TDS Return Filing" or contact us at contact@akshayb2bsolutions.com / +91 97180 04839 to share your monthly challans and payment ledgers with our direct tax desk.'
      }
    ],
    relatedServices: [
      { name: 'Income Tax Return Filing', desc: 'Accurate tax filing for individuals, firms, and companies.', price: '₹999' },
      { name: 'Corporate Tax', desc: 'Comprehensive corporate income tax computation and ITR-6 filing.', price: '₹2499 + Govt. Fee' },
      { name: 'GST Return', desc: 'Monthly & quarterly GSTR-1 and GSTR-3B filing with ITC reconciliation.', price: '₹500/month' },
      { name: 'TAN Registration', desc: 'Allotment of 10-digit Tax Deduction Account Number.', price: '₹699 + Govt. Fee' },
      { name: 'GST Registration', desc: 'New 15-digit GSTIN allotment in 3-7 working days.', price: '₹699 + Govt. Fee' },
      { name: 'Professional Tax Registration', desc: 'State statutory professional tax enrollment and return filing.', price: '₹999 + Govt. Fee' }
    ]
  },

  // 4. Income Tax Return Filing — ₹999
  {
    slug: 'income-tax-return-filing',
    name: 'Income Tax Return Filing',
    category: 'Filing',
    parentCategory: 'Tax & Compliance',
    price: '₹999',
    priceType: 'fixed',
    priceDisplay: '₹999',
    heroPriceHook: 'CA-Assisted ITR-1 to ITR-6 Filing with 100% AIS/26AS Reconciliation & Max Refund | ₹999',
    specialCallout: 'Chartered Accountant Assisted e-Filing',
    urgencyText: 'File before 31st July to avoid Section 234F late fees',
    ctaText: 'File Income Tax Return',
    metaTitle: 'Income Tax Return (ITR) Filing Online India @ ₹999 | Fast Tax Refund',
    metaDescription: 'File your Income Tax Return (ITR-1, ITR-2, ITR-3, ITR-4, ITR-5, ITR-6) online at ₹999. Maximize tax deductions, claim TDS refunds, and get CA-certified e-filing fast.',
    seoKeywords: [
      'income tax return filing',
      'ITR online filing ₹999',
      'ITR-1 Sahaj filing',
      'ITR-4 Sugam presumptive tax',
      'claim TDS refund ITR',
      'business ITR filing',
      'AIS 26AS reconciliation'
    ],
    keywords: [
      'income-tax-return-filing',
      'income-tax-return',
      'income tax return',
      'itr filing',
      'itr-filing',
      'income tax return filing'
    ],
    heroIntro: 'An Income Tax Return (ITR), governed under Section 139 of the Income Tax Act, 1961 by the Central Board of Direct Taxes (CBDT), is the mandatory annual statutory declaration of total income earned, deductions claimed, taxes paid (TDS/Advance Tax), and tax liability or refund due for a given financial year. Every salaried individual, freelance professional, proprietary firm, partnership, LLP, and corporate entity earning income above exemption thresholds must file their ITR before statutory deadlines to claim tax refunds, carry forward business losses, and avoid Section 234F penal late fees.',
    keyTags: [
      'Section 139 Income Tax Act',
      'ITR-1, 2, 3, 4, 5, 6 Forms',
      'Claim Maximum TDS Refunds',
      'AIS / TIS & Form 26AS Matching',
      'Carry Forward Business Losses'
    ],
    overview: {
      p1: 'Filing an accurate Income Tax Return is an essential civic and financial duty. It reconciles an individual or enterprise total income across salary, house property, business/profession, capital gains, and other sources, optimizing allowable deductions under Chapter VI-A (80C, 80D, 80G, etc.).',
      p2: 'Under updated income tax rules, the e-filing portal automatically cross-verifies reported figures against the Annual Information Statement (AIS) and Taxpayer Information Summary (TIS). Filing incorrect returns triggers Section 143(1) intimation notices and interest under Sections 234A, 234B, and 234C. Akshay B2B Solutions provides in-depth AIS/26AS reconciliation, maximum tax deductions, and CA-verified ITR e-filing with fast refund processing.'
    },
    registrationProcessOverview: {
      status: 'Mandatory Annual Direct Tax Compliance',
      governingAuthority: 'Central Board of Direct Taxes (CBDT), Ministry of Finance, Government of India',
      summary: 'Data extraction from Form 16, AIS, TIS, and financial ledgers, computing gross total income and tax deductions under Old vs New Tax Regime, selecting appropriate ITR Form (1-6), and e-filing with Aadhaar OTP e-verification.',
      postApproval: 'Issuance of official ITR-V Acknowledgment and Section 143(1) Tax Intimation Order with direct bank refund credit.',
      assistanceRole: 'AIS/26AS reconciliation, regime comparison, deduction optimization, capital gain computation, and e-verification.'
    },
    whatIs: {
      definition: 'Income Tax Return (ITR) is a standardized form through which taxpayers declare their annual taxable income, claim exemptions, compute tax liability, and claim tax refunds.',
      points: [
        'Mandatory statutory annual direct tax filing under Section 139.',
        'Enables 100% claim and bank refund of excess TDS deducted by employers/clients.',
        'Allows carry-forward of business losses and capital market losses for up to 8 years.',
        'Serves as primary verified financial income proof for home loans, car loans, and visas.',
        'Covers 7 distinct ITR forms tailored to salaried, professionals, traders, LLPs, and companies.',
        'Processed digitally with direct electronic refund transfer to pre-validated bank accounts.'
      ],
      closing: 'It establishes clean financial credibility, maximizes tax refunds, and fulfills statutory direct tax obligations.'
    },
    keyCharacteristics: [
      {
        title: 'AIS & Form 26AS Integration',
        description: 'Comprehensive pre-filing cross-matching with Annual Information Statement (AIS) covering all bank interest, dividends, and high-value transactions.'
      },
      {
        title: 'Old vs New Regime Optimization',
        description: 'Mathematical comparative tax liability analysis between Old Regime (with deductions) and New Concessional Regime (Section 115BAC).'
      },
      {
        title: 'Loss Carry-Forward Rights',
        description: 'Timely filing before the due date preserves legal rights to carry forward business, speculative, and capital losses against future profits.'
      },
      {
        title: 'Direct Fast-Track Bank Refunds',
        description: 'Automated electronic credit of excess TDS refunds directly into pre-validated bank accounts within days of processing.'
      }
    ],
    importanceBenefits: {
      intro: 'Filing your Income Tax Return accurately and on time delivers crucial benefits:',
      benefits: [
        {
          title: 'Maximum Tax Deductions & Refunds',
          desc: 'Our chartered accountants ensure every eligible deduction under 80C, 80D, 80G, and business expenses is claimed to maximize your refund.'
        },
        {
          title: 'Essential for Home, Car & Business Loans',
          desc: 'Banks and NBFCs mandate the last 3 years ITR-V acknowledgments as mandatory proof of income for loan sanctions.'
        },
        {
          title: 'Fast-Track Foreign Visa Processing',
          desc: 'Embassies of the US, UK, Schengen, and Canada require past ITR acknowledgments as verified proof of financial ties to India.'
        },
        {
          title: 'Protection from Section 234F Late Fees',
          desc: 'Avoid paying statutory late fees up to ₹5,000 and compounding 1% monthly interest under Sections 234A, 234B, and 234C.'
        },
        {
          title: 'Carry Forward Stock & Business Losses',
          desc: 'Offset stock market trading losses, F&O losses, or business startup losses against future taxable gains for up to 8 years.'
        }
      ],
      closing: 'It strengthens your financial profile and ensures complete direct tax compliance.'
    },
    package: {
      title: 'Income Tax Return (ITR) Complete Package',
      description: 'End-to-end AIS/26AS reconciliation, regime tax calculation, CA verification, and instant e-filing with ITR-V delivery.',
      checklist: [
        'Form 16, Form 16A & Form 26AS Tax Credit Ingestion',
        'Annual Information Statement (AIS) & TIS High-Value Audit',
        'Old vs New Tax Regime Comparative Liability Computation',
        'Chapter VI-A Deductions (80C, 80D, 80G, 80E, 80TTA) Optimization',
        'Capital Gains Calculation (Stocks, Mutual Funds, Real Estate, Crypto)',
        'Business Balance Sheet & P&L Preparation (for ITR-3, 4, 5, 6)',
        'Electronic Submission on Income Tax E-Filing 2.0 Portal',
        'Instant Aadhaar OTP e-Verification & ITR-V Acknowledgment Delivery'
      ]
    },
    types: [
      {
        title: 'ITR-1 (Sahaj)',
        desc: 'For salaried individuals, one house property, and other sources (interest) with total income up to ₹50 Lakhs.',
        eligibility: 'Salaried individuals'
      },
      {
        title: 'ITR-2',
        desc: 'For individuals and HUFs having capital gains (shares, mutual funds, property), foreign assets, or multiple houses.',
        eligibility: 'Investors & capital gains'
      },
      {
        title: 'ITR-3',
        desc: 'For individuals and HUFs having income from proprietary business, profession, freelancing, or partner in a firm.',
        eligibility: 'Business & professionals'
      },
      {
        title: 'ITR-4 (Sugam)',
        desc: 'For small businesses, freelancers, and professionals opting for presumptive taxation under Sections 44AD, 44ADA, or 44AE.',
        eligibility: 'Presumptive taxpayers'
      },
      {
        title: 'ITR-5 & ITR-6',
        desc: 'ITR-5 for Partnership Firms and LLPs; ITR-6 for Private Limited and Public Limited corporate entities.',
        eligibility: 'Firms, LLPs & Companies'
      }
    ],
    comparison: {
      title: 'Old Tax Regime vs New Tax Regime (Section 115BAC)',
      headers: ['Parameter', 'Old Tax Regime', 'New Tax Regime (Default)'],
      rows: [
        { aspect: 'Tax Slab Rates', col1: 'Standard slabs (5%, 20%, 30%)', col2: 'Concessional slabs (5%, 10%, 15%, 20%, 30%)' },
        { aspect: 'Standard Deduction', col1: '₹50,000 for salaried employees', col2: '₹75,000 for salaried employees (FY 24-25)' },
        { aspect: '80C & 80D Deductions', col1: 'Fully allowed (up to ₹1.5L + ₹25K-50K)', col2: 'Not allowed (foregone for lower slabs)' },
        { aspect: 'HRA & Home Loan Interest', col1: 'Fully deductible (Section 24(b) up to ₹2L)', col2: 'Not deductible for self-occupied property' },
        { aspect: 'Tax Rebate (Zero Tax Limit)', col1: 'Taxable income up to ₹5 Lakhs (87A)', col2: 'Taxable income up to ₹7 Lakhs (87A)' }
      ]
    },
    lawsGoverning: {
      actName: 'Income Tax Act, 1961 & Income Tax Rules, 1962',
      authority: 'Central Board of Direct Taxes (CBDT), Ministry of Finance',
      points: [
        'Section 139(1) prescribing mandatory filing obligations and due dates.',
        'Section 115BAC governing the default New Tax Regime provisions.',
        'Section 234F prescribing late filing fee of ₹5,000 (₹1,000 for income < ₹5L).',
        'Section 234A, 234B, and 234C prescribing 1% monthly interest for default in tax payment.',
        'Section 143(1) governing automated summary processing of returns by CPC Bengaluru.'
      ],
      penalties: 'Non-filing attracts ₹5,000 late fee, loss of refund interest, and scrutiny assessment under Section 144.'
    },
    eligibilityRequirements: {
      intro: 'Any individual or entity meeting any of the following statutory triggers must file ITR:',
      criteria: [
        'Gross Total Income exceeds the basic exemption limit (₹2.5L / ₹3L depending on regime/age).',
        'Any person holding foreign assets or foreign bank accounts.',
        'Incurred electricity expenditure exceeding ₹1 Lakh in a financial year.',
        'Deposited aggregate amount exceeding ₹1 Crore in current accounts or ₹50 Lakhs in savings accounts.',
        'Incurred foreign travel expense exceeding ₹2 Lakhs.',
        'TDS / TCS deducted exceeds ₹25,000 (₹50,000 for senior citizens).'
      ],
      documentsRequired: [
        'PAN Card & Aadhaar Card of the Taxpayer',
        'Form 16 (for salaried employees) / Form 16A (for TDS on interest/contracts)',
        'Bank Account Statements for all active savings and current accounts',
        'Capital Gain Statements from Zerodha, Groww, AngelOne, Upstox, etc.',
        'Proof of Tax-Saving Investments (LIC, PPF, ELSS, Health Insurance 80D receipts)'
      ]
    },
    processSteps: [
      { step: 1, title: 'Document Ingestion & AIS/26AS Audit', desc: 'We download your AIS, TIS, and Form 26AS, reconciling TDS credits and high-value transactions.' },
      { step: 2, title: 'Tax Computation & Regime Comparison', desc: 'Our CAs calculate your exact tax under both Old and New regimes and recommend the maximum refund option.' },
      { step: 3, title: 'ITR Form Preparation & CA Review', desc: 'We compile the selected ITR form, cross-verify all capital gains and business books, and prepare the XML/JSON.' },
      { step: 4, title: 'E-Filing & Instant E-Verification', desc: 'We file the return on the Income Tax 2.0 portal, complete Aadhaar OTP e-verification, and deliver the ITR-V receipt.' }
    ],
    postRegistrationCompliance: {
      intro: 'Key steps following ITR submission:',
      points: [
        'Ensure the return is e-verified via Aadhaar OTP or Net Banking within 30 days of filing.',
        'Track the CPC processing status on the portal for issuance of the Section 143(1) Intimation.',
        'Verify direct refund credit into your pre-validated bank account.',
        'Retain investment proofs, expense bills, and bank statements for a minimum of 6 assessment years.'
      ]
    },
    timelines: {
      tat: 'Same-Day / 24-48 Hours Filing',
      delayFactors: ['Complex multi-broker capital gains or F&O trade reconciliations', 'Mismatch between Form 26AS/AIS and bank statements', 'Portal server congestion on peak deadline days (31st July)'],
      speedAssurance: 'Our direct tax desk processes standard salaried and presumptive ITRs within 2 to 4 hours of document submission.'
    },
    certification: {
      issuingAuthority: 'Central Processing Centre (CPC), Bengaluru & CBDT',
      validity: 'Statutory direct tax compliance for the specific Assessment Year filed',
      legalSignificance: 'Official statutory acknowledgment of annual income declaration recognized by all banks, courts, and foreign embassies.',
      contents: [
        'Acknowledgment Number (e-Filing Acknowledgment)',
        'Assessment Year & Financial Year',
        'Gross Total Income & Taxable Income',
        'Total Tax Paid (TDS/Advance Tax) & Refund Due',
        'Electronic Timestamp & Digital Verification Seal'
      ]
    },
    fees: {
      govtFee: '₹0 (Official portal filing fee is Nil, unless Section 234F late fees apply for delayed filing)',
      professionalFee: '₹999/- only (Complete ITR preparation, AIS/26AS reconciliation, and CA verification package)',
      transparencyNote: 'Clear fixed fee of ₹999 with zero hidden charges.'
    },
    taxation: {
      directTaxImpact: 'Filing ITR ensures accurate tax deduction claims, lowers tax liability, and entitles the taxpayer to 100% refund of excess TDS with interest.',
      gstImplications: 'Reconciles business turnover reported in Income Tax with GSTR-9 annual returns, preventing cross-department scrutiny.',
      deductionsOrExemptions: 'Unlocks maximum tax deductions under 80C, 80D, 80G, 80E, 80CCD, 80TTA/TTB, and Section 24(b).'
    },
    whyUs: [
      'Over 28,000+ ITRs successfully filed with average refund turnaround under 14 days.',
      'Team of dedicated Chartered Accountants ensuring 100% accurate AIS/26AS reconciliation.',
      'Proprietary tax computation engine comparing Old vs New tax regimes to save maximum tax.',
      'Expert handling of capital gains, F&O trading, cryptocurrency, and foreign asset disclosures.',
      'Complimentary assistance for post-filing Section 143(1) intimations and refund tracking.'
    ],
    faqs: [
      {
        q: 'Who is required to file an Income Tax Return in India?',
        a: 'Any individual whose gross total income exceeds the basic exemption limit (₹2.5 Lakhs under Old Regime, ₹3 Lakhs under New Regime), or who meets specific criteria such as holding foreign assets, spending > ₹2 Lakhs on foreign travel, or having TDS > ₹25,000, must file an ITR.'
      },
      {
        q: 'What is the last date to file Income Tax Return for FY 2024-25 (AY 2025-26)?',
        a: 'For non-audit individual taxpayers, salaried employees, and firms, the statutory due date is 31st July. For corporate entities and businesses requiring tax audit, the due date is 31st October.'
      },
      {
        q: 'What happens if I miss the 31st July ITR deadline?',
        a: 'You can file a "Belated Return" under Section 139(4) up to 31st December, subject to a statutory late fee under Section 234F (₹5,000 for income > ₹5L; ₹1,000 for income < ₹5L) and 1% monthly penal interest under Section 234A.'
      },
      {
        q: 'How long does it take to receive an Income Tax refund?',
        a: 'Once the ITR is e-verified, the Central Processing Centre (CPC Bengaluru) typically processes the return and credits the refund directly into your pre-validated bank account within 7 to 21 working days.'
      },
      {
        q: 'Which regime is better: Old Tax Regime or New Tax Regime?',
        a: 'The New Tax Regime offers lower tax slab rates but disallows most deductions (80C, 80D, HRA). The Old Tax Regime allows extensive deductions. Our CA team calculates your tax under both regimes and recommends the option with lower tax outflow.'
      },
      {
        q: 'How do I start my ITR filing today with Akshay B2B Solutions?',
        a: 'Click "File Income Tax Return" or contact us at contact@akshayb2bsolutions.com / +91 97180 04839 to upload your Form 16 or bank statements for instant same-day filing.'
      }
    ],
    relatedServices: [
      { name: 'TDS Returns', desc: 'Quarterly Form 24Q, 26Q, and 27Q filing with Form 16 issuance.', price: '₹599/month' },
      { name: 'Corporate Tax', desc: 'Comprehensive corporate income tax computation and ITR-6 filing.', price: '₹2499 + Govt. Fee' },
      { name: 'GST Return', desc: 'Monthly & quarterly GSTR-1 and GSTR-3B filing with ITC reconciliation.', price: '₹500/month' },
      { name: 'TAN Registration', desc: 'Allotment of 10-digit Tax Deduction Account Number.', price: '₹699 + Govt. Fee' },
      { name: 'GST Registration', desc: 'New 15-digit GSTIN allotment in 3-7 working days.', price: '₹699 + Govt. Fee' },
      { name: 'Professional Tax Registration', desc: 'State statutory professional tax enrollment and return filing.', price: '₹999 + Govt. Fee' }
    ]
  },

  // 5. Professional Tax Registration — ₹999 + Govt. Fee
  {
    slug: 'professional-tax-registration',
    name: 'Professional Tax Registration',
    category: 'GST & Tax',
    parentCategory: 'Tax & Compliance',
    price: '₹999',
    priceType: 'fixed',
    priceDisplay: '₹999 + Govt. Fee',
    heroPriceHook: 'State Professional Tax Registration (PTEC & PTRC) Online | ₹999 + Govt. Fee',
    specialCallout: 'State Commercial Tax Department Allotment',
    urgencyText: 'Mandatory for employers within 30 days of hiring',
    ctaText: 'Apply for Professional Tax',
    metaTitle: 'Professional Tax Registration Online @ ₹999 | PTEC & PTRC Certificate',
    metaDescription: 'Apply for Professional Tax registration online at ₹999 + Govt. Fee. Get PTEC (Entity/Director) and PTRC (Employer) certificates in Maharashtra, Karnataka, WB, Telangana & all states.',
    seoKeywords: [
      'professional tax registration',
      'PTEC certificate online',
      'PTRC registration',
      'professional tax ₹999',
      'professional tax Maharashtra',
      'PT employer registration'
    ],
    keywords: [
      'professional-tax-registration',
      'professional-tax',
      'professional tax',
      'ptec registration',
      'ptrc registration',
      'pt registration'
    ],
    heroIntro: 'A Professional Tax Registration, enacted under Article 276 of the Constitution of India and administered by State Commercial Tax Departments under respective State Professional Tax Acts (e.g., Maharashtra, Karnataka, West Bengal, Telangana, Tamil Nadu, Gujarat), is a mandatory state-level statutory tax levied on professions, trades, callings, and employments. Every self-employed professional, business entity, and corporate employer must obtain two mandatory registrations: PTEC (Professional Tax Enrolment Certificate for the business/directors) and PTRC (Professional Tax Registration Certificate for deducting and remitting tax from employees).',
    keyTags: [
      'Article 276 Constitution of India',
      'PTEC (Enrolment Certificate)',
      'PTRC (Registration Certificate)',
      'State Commercial Tax Portal',
      'Employee Payroll Compliance'
    ],
    overview: {
      p1: 'Professional Tax is a state-specific direct tax calculated on a progressive monthly salary slab basis (capped at a constitutional maximum of ₹2,500 per annum per individual). Business entities and employers operating in states with active Professional Tax laws must mandatorily enroll under both PTEC and PTRC schedules.',
      p2: 'Operating without Professional Tax registration attracts compounding monthly interest (1.25% to 2%), heavy non-enrollment penalties (up to ₹5 per day / 10% of tax), and blocks state government vendor empanelment and municipal renewals. Akshay B2B Solutions assists enterprises with multi-state PTEC/PTRC portal filings, payroll slab mapping, monthly challan generation, and annual return filings.'
    },
    registrationProcessOverview: {
      status: 'Mandatory State-Level Statutory Compliance for Businesses & Employers',
      governingAuthority: 'Commercial Tax Department / Department of State Taxes of respective State Governments',
      summary: 'Electronic filing on the state commercial tax portal with PAN, business premise proofs, employee count, and director KYC, followed by automated verification.',
      postApproval: 'Issuance of official PTEC (Taxpayer Enrolment) and PTRC (Employer Registration) Certificates with unique Taxpayer Identification Numbers.',
      assistanceRole: 'State applicability audit, document verification, portal application filing, payroll slab setup, and certificate issuance.'
    },
    whatIs: {
      definition: 'Professional Tax Registration is the statutory enrollment with the State Commercial Tax Department to pay entity professional taxes (PTEC) and deduct/remit employee taxes (PTRC).',
      points: [
        'PTEC (Professional Tax Enrolment Certificate): For the business entity, directors, partners, and self-employed professionals.',
        'PTRC (Professional Tax Registration Certificate): For the employer to deduct PT from employee salaries and deposit it with the state.',
        'Enacted under state-specific statutes across Maharashtra, Karnataka, West Bengal, Gujarat, Telangana, Andhra Pradesh, etc.',
        'Constitutionally capped at a maximum of ₹2,500 per person per financial year.',
        'Mandatory prerequisite for corporate payroll operations and opening certain commercial bank accounts.',
        'Requires periodic monthly, quarterly, or annual return filings depending on state rules.'
      ],
      closing: 'It ensures total state-level statutory payroll compliance and insulates your business from local commercial tax penalties.'
    },
    keyCharacteristics: [
      {
        title: 'Dual Registration (PTEC & PTRC)',
        description: 'PTEC covers the liability of the business entity and its directors/partners; PTRC covers the employer liability for employee payroll.'
      },
      {
        title: 'State-Specific Slabs',
        description: 'Monthly salary deduction slabs vary by state (e.g., Maharashtra exempts salaries < ₹7,500 for men & < ₹25,000 for women).'
      },
      {
        title: 'Constitutional Maximum Cap',
        description: 'Under Article 276(2) of the Indian Constitution, the maximum annual tax payable by any individual cannot exceed ₹2,500.'
      },
      {
        title: '100% Income Tax Deductible',
        description: 'Professional tax paid is fully deductible from gross taxable salary under Section 16(iii) of the Income Tax Act, 1961.'
      }
    ],
    importanceBenefits: {
      intro: 'Securing Professional Tax registration delivers essential legal and operational protections:',
      benefits: [
        {
          title: 'Lawful Payroll & Employee Salary Processing',
          desc: 'Enables lawful deduction and deposit of statutory state taxes from employee monthly payroll registers.'
        },
        {
          title: 'Protection from Punitive State Penalties & Interest',
          desc: 'Avoid compounding 1.25% to 2% monthly penal interest and heavy state non-enrollment fines.'
        },
        {
          title: '100% Direct Tax Deduction under Section 16(iii)',
          desc: 'Employees and self-employed professionals can deduct professional tax paid directly from gross income under Income Tax.'
        },
        {
          title: 'Essential for Government Tenders & Vendor Empanelment',
          desc: 'State departments and corporate clients mandate active PTEC/PTRC certificates during vendor onboarding.'
        },
        {
          title: 'Smooth Municipal & Trade License Renewals',
          desc: 'Municipal corporations in major metropolitan hubs verify PTEC receipts prior to renewing Shop & Establishment trade licenses.'
        }
      ],
      closing: 'It establishes flawless state regulatory compliance across all your operational business locations.'
    },
    package: {
      title: 'Professional Tax (PTEC & PTRC) Complete Package',
      description: 'End-to-end state commercial tax portal application, documentation vetting, PTEC/PTRC certificate delivery, and payroll guide.',
      checklist: [
        'State-Specific Professional Tax Act Applicability Audit',
        'Business Entity & Director PTEC Enrolment Filing',
        'Employer PTRC Registration Application Filing',
        'Premise Proof & Employee Count Documentation Vetting',
        'State Commercial Tax Department Liaison & Scrutiny Handling',
        'Issuance of Official Digital PTEC and PTRC Registration Certificates',
        'State Salary Slab Chart & Monthly Deduction Calculation Guide',
        'Setup of Monthly/Annual Professional Tax Challan Payment Account'
      ]
    },
    types: [
      {
        title: 'PTEC (Enrolment Certificate)',
        desc: 'Mandatory for Private Limited Companies, LLPs, Partnership Firms, Directors, Partners, and self-employed professionals.',
        eligibility: 'Entity & individual promoters'
      },
      {
        title: 'PTRC (Registration Certificate)',
        desc: 'Mandatory for any employer employing one or more staff members earning above the minimum state salary threshold.',
        eligibility: 'All employers with staff'
      },
      {
        title: 'Combined PTEC + PTRC Package',
        desc: 'Comprehensive dual registration covering both the corporate entity and employer payroll obligations.',
        eligibility: 'New companies and startups'
      }
    ],
    comparison: {
      title: 'PTEC (Enrolment) vs PTRC (Registration)',
      headers: ['Parameter', 'PTEC (Enrolment Certificate)', 'PTRC (Registration Certificate)'],
      rows: [
        { aspect: 'Applicability', col1: 'Entity, Directors, Partners & Professionals', col2: 'Employer (for deducting tax from staff)' },
        { aspect: 'Nature of Tax', col1: 'Direct tax paid by the entity on its own trade', col2: 'Withheld from employee monthly salary' },
        { aspect: 'Payment Frequency', col1: 'Annually (typically before 30th April / June)', col2: 'Monthly or Quarterly (by 20th of next month)' },
        { aspect: 'Maximum Amount', col1: '₹2,500 per year per director/entity', col2: 'Slab-wise per employee (max ₹2,500/year)' },
        { aspect: 'Mandatory For', col1: 'Every registered company & professional', col2: 'Every employer hiring staff' }
      ]
    },
    lawsGoverning: {
      actName: 'Article 276 of the Constitution of India & Respective State Professional Tax Acts',
      authority: 'Department of Commercial Taxes of State Governments',
      points: [
        'Article 276 of the Constitution authorizing states to levy tax on professions up to ₹2,500/year.',
        'Maharashtra State Tax on Professions, Trades, Callings and Employments Act, 1975.',
        'Karnataka Tax on Professions, Trades, Callings and Employments Act, 1976.',
        'West Bengal State Tax on Professions, Trades, Callings and Employments Act, 1979.',
        'Section 16(iii) of Income Tax Act, 1961 allowing deduction of PT paid from taxable salary.'
      ],
      penalties: 'Non-registration attracts penalty equal to 100% of tax, recurring monthly interest (1.25%-2%), and prosecution.'
    },
    eligibilityRequirements: {
      intro: 'Any business, employer, or professional operating in states with professional tax laws must register:',
      criteria: [
        'Private Limited Companies, OPCs, LLPs, and Partnership Firms.',
        'Proprietorships and independent practicing professionals (Doctors, CAs, Lawyers, Engineers, Consultants).',
        'Any business entity employing staff earning above minimum state salary exemption thresholds.'
      ],
      documentsRequired: [
        'Certificate of Incorporation / Partnership Deed / GST Certificate',
        'PAN Card of the Business Entity and All Directors / Partners / Proprietor',
        'Aadhaar Card and Passport Photo of Authorized Signatory',
        'Business Premise Proof (Electricity Bill / Rent Agreement + NOC)',
        'Cancelled Cheque / Bank Statement of the Current Account',
        'List of Employees with Gross Monthly Salary Details (for PTRC)'
      ]
    },
    processSteps: [
      { step: 1, title: 'State Act & Applicability Audit', desc: 'We verify your state jurisdiction, determine PTEC vs PTRC requirements, and compile premise documents.' },
      { step: 2, title: 'State Commercial Tax Portal Submission', desc: 'We prepare the electronic application, upload PAN and incorporation records on the state tax portal.' },
      { step: 3, title: 'Department Scrutiny & Approval', desc: 'The state commercial tax officer evaluates the application and issues the digital registration numbers.' },
      { step: 4, title: 'PTEC & PTRC Certificate Delivery', desc: 'We deliver your official PTEC and PTRC registration certificates along with state payroll deduction charts.' }
    ],
    postRegistrationCompliance: {
      intro: 'Key recurring obligations after Professional Tax registration:',
      points: [
        'Pay annual PTEC liability (₹2,500) before the prescribed state annual due date (e.g. 30th April in Maharashtra).',
        'Deduct monthly PT from employee salaries based on state salary slab schedules.',
        'Deposit monthly/quarterly PTRC challans with the state treasury before the 20th of the following month.',
        'File the Annual Professional Tax Return (e.g. Form III-B) before statutory state deadlines.'
      ]
    },
    timelines: {
      tat: '3 to 7 Working Days (State Portal Processing)',
      delayFactors: ['Unclear premise proof or rent agreement address discrepancies', 'State commercial tax portal technical server glitches', 'State officer query on employee count'],
      speedAssurance: 'Our state tax compliance desk pre-verifies all premise proofs to guarantee single-pass approval.'
    },
    certification: {
      issuingAuthority: 'Department of Commercial Taxes / State Tax Commissionerate',
      validity: 'Lifetime / Permanent (subject to regular payment of annual/monthly taxes)',
      legalSignificance: 'Official state statutory registration certificate authorizing commercial operations and employer payroll deductions.',
      contents: [
        'PTEC / PTRC Registration Number (11 or 12 Digits)',
        'Legal Business Name & Trade Name',
        'Constitution of Business & Registered Address',
        'Date of Enrolment & Statutory Jurisdiction Ward',
        'Digital Signature & Official State Emblem'
      ]
    },
    fees: {
      govtFee: 'Variable state statutory fee (typically nominal ₹100-₹500 or Nil in select states)',
      professionalFee: '₹999/- only (Complete PTEC + PTRC dual registration package)',
      transparencyNote: 'Clear transparent fee of ₹999 + Govt. Fee with zero hidden charges.'
    },
    taxation: {
      directTaxImpact: 'PTEC fees and professional consulting charges are 100% tax-deductible operational business expenses under Income Tax.',
      gstImplications: 'Professional tax is an independent state direct tax with no input tax credit impact on GST.',
      deductionsOrExemptions: 'Employees can claim 100% deduction of professional tax deducted from gross salary under Section 16(iii) of Income Tax Act.'
    },
    whyUs: [
      'Over 7,500+ PTEC and PTRC certificates issued across Maharashtra, Karnataka, West Bengal, Gujarat, and Telangana.',
      'Comprehensive dual registration package covering both entity (PTEC) and employer (PTRC) requirements.',
      'Ready-to-use automated Excel payroll deduction templates customized to your state salary slabs.',
      'Full-stack support for subsequent monthly challan generation and annual return filings.',
      'Dedicated compliance manager ensuring you never miss an annual PTEC renewal deadline.'
    ],
    faqs: [
      {
        q: 'What is the difference between PTEC and PTRC?',
        a: 'PTEC (Professional Tax Enrolment Certificate) is paid by the business entity and its directors/partners for their own right to carry on trade. PTRC (Professional Tax Registration Certificate) is obtained by the employer to deduct professional tax from employee salaries and deposit it with the state government.'
      },
      {
        q: 'Is Professional Tax applicable across all states in India?',
        a: 'No. Professional Tax is only applicable in states that have enacted professional tax legislation, including Maharashtra, Karnataka, West Bengal, Andhra Pradesh, Telangana, Tamil Nadu, Gujarat, Kerala, Odisha, and Madhya Pradesh. States like Delhi, Haryana, and Rajasthan do not levy professional tax.'
      },
      {
        q: 'What is the maximum professional tax that can be levied in a year?',
        a: 'Under Article 276(2) of the Constitution of India, the maximum professional tax that any state government can levy on an individual is capped at ₹2,500 per annum.'
      },
      {
        q: 'Is professional tax deductible under Income Tax?',
        a: 'Yes! Professional tax paid by an employee or self-employed individual is 100% deductible from gross taxable income under Section 16(iii) of the Income Tax Act, 1961.'
      },
      {
        q: 'What is the penalty for not obtaining Professional Tax registration?',
        a: 'Failing to register within 30 days of liability attracts state statutory penalties (e.g., ₹5/day or 10% of tax), compounding monthly interest (1.25% to 2%), and potential recovery notices from commercial tax officers.'
      },
      {
        q: 'How do I apply for Professional Tax registration with Akshay B2B Solutions?',
        a: 'Click "Apply for Professional Tax" or contact us at contact@akshayb2bsolutions.com / +91 97180 04839 to share your company details and state location with our compliance team.'
      }
    ],
    relatedServices: [
      { name: 'Corporate Tax', desc: 'Comprehensive corporate income tax computation and ITR-6 filing.', price: '₹2499 + Govt. Fee' },
      { name: 'GST Registration', desc: 'New 15-digit GSTIN allotment in 3-7 working days.', price: '₹699 + Govt. Fee' },
      { name: 'TAN Registration', desc: 'Allotment of 10-digit Tax Deduction Account Number.', price: '₹699 + Govt. Fee' },
      { name: 'TDS Returns', desc: 'Quarterly Form 24Q, 26Q, and 27Q filing with Form 16 issuance.', price: '₹599/month' },
      { name: 'GST Return', desc: 'Monthly & quarterly GSTR-1 and GSTR-3B filing with ITC reconciliation.', price: '₹500/month' },
      { name: 'Income Tax Return Filing', desc: 'Accurate tax filing for individuals, firms, and companies.', price: '₹999' }
    ]
  }
];

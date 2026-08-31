import { ServiceDetailConfig } from './types';

export const GST_TAX_SERVICES: ServiceDetailConfig[] = [
  {
    slug: 'gst-registration',
    name: 'GST Registration',
    category: 'GST & Tax',
    parentCategory: 'Registration & License',
    price: '₹699',
    priceType: 'fixed',
    priceDisplay: '₹699/- only',
    heroPriceHook: 'Get Your 15-Digit GSTIN Online in 3-7 Working Days | ₹699/- All-Inclusive',
    specialCallout: '100% Online Paperless Process',
    urgencyText: 'Instant filing today — Same-day ARN generation',
    ctaText: 'Apply for GST Registration',
    metaTitle: 'GST Registration Online India @ ₹699 | Fast GSTIN Allotment',
    metaDescription: 'Apply for new GST registration online in India at ₹699. Get ARN within 24 hours and 15-digit GSTIN allotment for Proprietorship, Partnership, LLP & Pvt Ltd.',
    seoKeywords: ['GST registration online', 'new GSTIN application', 'GST number ₹699', 'apply GST portal', 'proprietorship GST registration', 'Aadhaar authentication GST'],
    heroIntro: 'A Goods and Services Tax (GST) Registration, issued under the Central Goods and Services Tax (CGST) Act, 2017 by the Central Board of Indirect Taxes and Customs (CBIC) and State GST Departments, is a mandatory 15-digit state-wise Goods and Services Tax Identification Number (GSTIN). Any commercial enterprise, proprietary firm, partnership, LLP, private limited company, e-commerce seller, or freelance professional crossing turnover thresholds or executing inter-state supplies must obtain an active GSTIN to collect GST, claim Input Tax Credit (ITC), and legally invoice clients.',
    keyTags: ['CBIC & GST Common Portal', '15-Digit GSTIN Allotment', 'Input Tax Credit (ITC) Eligible', 'Aadhaar Biometric e-KYC', 'Zero Penalty Compliance'],
    overview: {
      p1: 'The GST regime represents India unified indirect tax framework subsuming legacy VAT, Service Tax, Excise, and Entry taxes into a transparent, digital-first system. Holding an active GSTIN is statutory for businesses exceeding turnover thresholds (₹40 Lakhs for goods in normal states, ₹20 Lakhs for services/special category states) and for all inter-state B2B/B2C sellers, regardless of turnover.',
      p2: 'Operating without mandatory GST registration attracts severe penalties of 100% of the tax due or ₹10,000 (whichever is higher), freezing of bank accounts, and denial of Input Tax Credit. Akshay B2B Solutions simplifies GST registration through fast HSN classification, documentation vetting, instant Application Reference Number (ARN) generation, and dedicated handling of department clarification notices (Form GST REG-03).',
    },
    registrationProcessOverview: {
      status: 'Mandatory based on Turnover & Inter-State Supply Criteria',
      governingAuthority: 'Central Board of Indirect Taxes and Customs (CBIC) & State GST Departments',
      summary: 'Part A PAN-based temporary reference number (TRN) generation, Part B electronic application filing on GST portal with premise proof and bank proof, followed by Aadhaar biometric e-authentication.',
      postApproval: 'Issuance of official Form GST REG-06 Certificate containing 15-digit GSTIN with permanent validity.',
      assistanceRole: 'Documentation drafting, HSN/SAC code optimization, portal application filing, Aadhaar authentication, and REG-03 query resolution.'
    },
    whatIs: {
      definition: 'GST Registration is the statutory enrollment of a business on the national GST portal, assigning a unique 15-digit GSTIN for indirect tax collection and input tax credit.',
      points: [
        'Mandatory 15-digit alphanumeric tax identifier mapped to entity PAN and state code.',
        'Enables legal collection of GST (CGST, SGST, IGST) from customers on invoices.',
        'Unlocks seamless claim of Input Tax Credit (ITC) on all business purchases and capital goods.',
        'Mandatory for selling on e-commerce platforms like Amazon, Flipkart, Blinkit, and Meesho.',
        'Required for inter-state supply of goods without turnover threshold restrictions.',
        'Permanent validity as long as annual and monthly return compliances are maintained.'
      ],
      closing: 'It establishes legal legitimacy, expands interstate trade, and optimizes supply chain tax costs.'
    },
    keyCharacteristics: [
      {
        title: '15-Digit Pan-Based GSTIN',
        description: 'Structured as: 2 Digits (State Code) + 10 Digits (Entity PAN) + 1 Digit (Entity Number) + 1 Digit (Z) + 1 Check Digit.'
      },
      {
        title: 'Aadhaar Biometric e-KYC',
        description: 'Aadhaar-authenticated applications receive fast-track approval within 7 working days without physical premise inspection.'
      },
      {
        title: 'Input Tax Credit (ITC) Mechanism',
        description: 'Offset input GST paid on raw materials, rent, machinery, and services against output tax liability to avoid tax cascading.'
      },
      {
        title: 'State-Wise Jurisdiction',
        description: 'Separate GST registration required for each distinct State or Union Territory where business operations exist.'
      }
    ],
    importanceBenefits: {
      intro: 'Registering under GST delivers transformative commercial and legal benefits:',
      benefits: [
        {
          title: 'Unrestricted Inter-State Trade',
          desc: 'Seamlessly ship goods and deliver services across all Indian states with electronic E-Way Bills and valid tax invoices.'
        },
        {
          title: 'Input Tax Credit (ITC) Cost Savings',
          desc: 'Recover up to 18-28% tax paid on office equipment, electronics, raw inventory, software, and professional fees.'
        },
        {
          title: 'E-Commerce Marketplace Onboarding',
          desc: 'Mandatory prerequisite for selling on Amazon, Flipkart, Myntra, JioMart, Blinkit, and corporate vendor portals.'
        },
        {
          title: 'Corporate Vendor Empanelment',
          desc: 'B2B corporate clients mandate valid GSTIN to ensure they can claim input tax credits on your invoices.'
        },
        {
          title: 'Higher Bank Loan & Credit Limits',
          desc: 'Lenders evaluate GST return turnover (GSTR-3B/GSTR-1) as verified proof of revenue for working capital credit lines.'
        }
      ],
      closing: 'It positions your enterprise as an organized, credit-worthy player in the national formal economy.'
    },
    package: {
      title: 'GST Registration Complete Package',
      description: 'End-to-end GST portal application, HSN code selection, Aadhaar authentication, and REG-06 certificate delivery.',
      checklist: [
        'Business Structure & Turnover Eligibility Verification',
        'Top 5 HSN (Goods) / SAC (Services) Code Mapping',
        'Business Premise Proof Review & Rent Agreement Vetting',
        'GST Portal Part A (TRN) & Part B Application Submission',
        'Aadhaar e-KYC Biometric Authentication Coordination',
        'Handling Department Clarifications / Notice (Form GST REG-03)',
        'Issuance of Official Form GST REG-06 Certificate',
        'Complimentary GST Invoicing Format & GSTR Return Guide'
      ]
    },
    types: [
      {
        title: 'Regular Taxpayer Scheme',
        desc: 'For all standard businesses collecting tax on sales and claiming full Input Tax Credit (ITC). Monthly/quarterly return filing.',
        eligibility: 'All business entities'
      },
      {
        title: 'Composition Scheme',
        desc: 'For small traders and manufacturers with turnover up to ₹1.5 Cr paying concessional tax (1-6%) with simplified quarterly filing.',
        eligibility: 'Small traders & eateries'
      },
      {
        title: 'Casual Taxable Person / Non-Resident',
        desc: 'For entities without fixed place of business in a state participating in temporary exhibitions or trade fairs.',
        eligibility: 'Temporary/exhibition sellers'
      },
      {
        title: 'ISD & Tax Deductor (TDS/TCS)',
        desc: 'For corporate head offices distributing input tax credit or e-commerce operators collecting TCS at source.',
        eligibility: 'E-commerce & corporate offices'
      }
    ],
    comparison: {
      title: 'Regular Scheme vs Composition Scheme',
      headers: ['Parameter', 'Regular Taxpayer Scheme', 'Composition Scheme'],
      rows: [
        { aspect: 'Turnover Limit', col1: 'No upper limit', col2: 'Max ₹1.5 Crore (₹75L in NE states)' },
        { aspect: 'Tax Collection', col1: 'Can collect GST from customers', col2: 'Cannot collect GST from customers' },
        { aspect: 'Input Tax Credit (ITC)', col1: 'Full ITC claimable on all purchases', col2: 'No ITC claimable' },
        { aspect: 'Inter-State Supply', col1: 'Allowed across all India', col2: 'Restricted to Intra-State supply only' },
        { aspect: 'Return Frequency', col1: 'Monthly (GSTR-1 & 3B) or QRMP', col2: 'Quarterly (CMP-08) & Annual (GSTR-4)' }
      ]
    },
    lawsGoverning: {
      actName: 'Central Goods and Services Tax Act, 2017 & State GST Acts',
      authority: 'Central Board of Indirect Taxes and Customs (CBIC) & State GST Commissioners',
      points: [
        'Sections 22, 23, and 24 of CGST Act, 2017 governing registration mandates.',
        'Section 24 specifies mandatory registration categories irrespective of turnover.',
        'Rule 8 & 9 of CGST Rules, 2017 governing application and Aadhaar verification procedures.',
        'Form GST REG-01 for application, REG-03 for notice, and REG-06 for final certificate.',
        'Section 122 penalizes failure to register with penalty equal to 100% of tax evaded or ₹10,000.'
      ],
      penalties: 'Unregistered commercial operations face 100% tax penalty, cargo seizure under Section 129, and criminal prosecution.'
    },
    eligibilityRequirements: {
      intro: 'Any person or enterprise meeting turnover thresholds or mandatory triggers must obtain GSTIN:',
      criteria: [
        'Goods Suppliers with annual aggregate turnover exceeding ₹40 Lakhs (₹20 Lakhs in Special Category States).',
        'Service Providers with annual aggregate turnover exceeding ₹20 Lakhs (₹10 Lakhs in Special Category States).',
        'Any entity making Inter-State taxable supplies of goods.',
        'E-commerce sellers, casual taxable persons, and input service distributors (ISD).'
      ],
      documentsRequired: [
        'PAN Card & Aadhaar Card of Proprietor / Partners / Directors',
        'Passport Photo of Applicant / Authorized Signatory',
        'Business Premise Proof (Electricity Bill / Property Tax Receipt / Rent Agreement + NOC)',
        'Bank Proof (Cancelled Cheque / Bank Statement / Bank Passbook first page)',
        'Certificate of Incorporation / Partnership Deed / MOA & AOA (for companies/LLPs)',
        'Class 3 Digital Signature (DSC) for Companies and LLPs (Proprietorships use Aadhaar OTP)'
      ]
    },
    processSteps: [
      { step: 1, title: 'Document Audit & HSN Classification', desc: 'We verify your premise proof, PAN credentials, bank records, and map the top 5 HSN/SAC codes.' },
      { step: 2, title: 'TRN Generation & Part B Filing', desc: 'We file Part A on the GST portal to generate TRN, followed by complete Part B electronic application submission.' },
      { step: 3, title: 'Aadhaar Biometric e-KYC', desc: 'The authorized signatory completes the Aadhaar OTP authentication link sent directly to their registered mobile number.' },
      { step: 4, title: 'GSTIN & REG-06 Allotment', desc: 'GST department evaluates the application and issues the official Form GST REG-06 Registration Certificate with your 15-digit GSTIN.' }
    ],
    postRegistrationCompliance: {
      intro: 'Key recurring obligations after receiving your GSTIN:',
      points: [
        'Issue GST-compliant tax invoices mentioning your 15-digit GSTIN and customer GSTIN (for B2B).',
        'File monthly/quarterly GSTR-1 (Outward Supplies) and GSTR-3B (Summary Tax Return & Tax Payment).',
        'Display your GST Registration Certificate and GSTIN prominently at your principal place of business.',
        'Maintain complete sales, purchase, and Input Tax Credit books of accounts for 6 years.'
      ]
    },
    timelines: {
      tat: '3 to 7 Working Days (with Aadhaar Authentication)',
      delayFactors: ['Unclear electricity bill or non-matching premise address', 'Non-completion of Aadhaar OTP link within 15 days', 'GST officer issuing Form REG-03 clarification notice'],
      speedAssurance: 'Our tax experts pre-verify all premise proofs to guarantee single-pass approval with zero department objections.'
    },
    certification: {
      issuingAuthority: 'Goods and Services Tax Network (GSTN) & CBIC / State GST Department',
      validity: 'Lifetime / Permanent (until voluntarily cancelled or revoked for default)',
      legalSignificance: 'Official central and state statutory tax registration granting 15-digit GSTIN and legal authority to collect indirect taxes.',
      contents: ['15-Digit GSTIN', 'Legal Name & Trade Name', 'Constitution of Business', 'Principal Place of Business Address', 'Date of Liability & Validity', 'Government Emblem & QR Code']
    },
    fees: {
      govtFee: '₹0 (Official Government Portal Registration Fee is Nil)',
      professionalFee: '₹699/- only (All-inclusive professional documentation and filing fee)',
      transparencyNote: 'Fixed price ₹699 with zero hidden charges.'
    },
    taxation: {
      directTaxImpact: 'GST registration fees and monthly accounting charges are 100% tax-deductible operational business expenses under Income Tax.',
      gstImplications: 'Enables 100% pass-through of input GST credits on capital assets, rent, software, and vendor invoices.',
      deductionsOrExemptions: 'Allows claim of Input Tax Credit (ITC) reducing overall cash outflow on tax liabilities.'
    },
    whyUs: [
      'Over 14,000+ GST registrations successfully processed across all 28 states and UTs.',
      'Instant ARN generation within 24 hours of document submission.',
      'Comprehensive pre-screening of electricity bills and rent NOCs to avoid REG-03 notices.',
      'Complimentary consultation on HSN codes, tax invoicing rules, and Input Tax Credit optimization.',
      'Full-stack tax team available for subsequent monthly GSTR-1 and GSTR-3B filings.'
    ],
    faqs: [
      { q: 'Is there any government fee for new GST registration?', a: 'No. The Government of India charges zero (₹0) official portal fees for new GST registration. You only pay our nominal professional facilitation fee of ₹699.' },
      { q: 'How long does it take to get a GST number?', a: 'With Aadhaar biometric e-authentication, the GST department typically approves the application and issues the 15-digit GSTIN within 3 to 7 working days.' },
      { q: 'Can I register GST on a residential home address or rented room?', a: 'Yes! You can register GST on a residential property or rented premises by providing an Electricity Bill, Rent Agreement, and a No Objection Certificate (NOC) from the property owner.' },
      { q: 'What is Aadhaar authentication in GST registration?', a: 'Aadhaar authentication is a fast-track verification method where the promoter/authorized signatory verifies their identity via an Aadhaar OTP link, eliminating the need for physical premise inspection by tax officers.' },
      { q: 'Is GST registration mandatory for selling on Amazon, Flipkart, or Meesho?', a: 'Yes. Under Section 24 of the CGST Act, all e-commerce suppliers selling goods across states through digital marketplaces must possess a valid GSTIN regardless of their turnover.' },
      { q: 'What happens if a GST clarification notice (Form REG-03) is issued?', a: 'If the tax officer requests additional clarification or revised address proof via Form GST REG-03, our tax legal team drafts and submits the official clarification response (Form GST REG-04) at no extra charge.' }
    ],
    relatedServices: [
      { name: 'GST Return Filing', desc: 'Monthly & quarterly GSTR-1 and GSTR-3B filing with ITC reconciliation.', price: '₹499/Month' },
      { name: 'GST Annual Return (GSTR-9)', desc: 'Annual reconciliation and statutory return filing on GST portal.', price: '₹1,499' },
      { name: 'Letter of Undertaking (LUT)', desc: 'Export goods and services without paying upfront IGST on GST portal.', price: '₹999 + Govt. Fee' },
      { name: 'Income Tax Return (ITR)', desc: 'Accurate tax filing for individuals, firms, and companies.', price: '₹499' },
      { name: 'MSME Registration', desc: 'Udyam certificate for priority banking and government tender benefits.', price: '₹799' },
      { name: 'Import Export Code (IEC)', desc: 'Mandatory 10-digit DGFT license for cross-border trade.', price: '₹1,750' }
    ]
  },
  {
    slug: 'gst-return',
    name: 'GST Return Filing',
    category: 'GST & Tax',
    parentCategory: 'Registration & License',
    price: '₹499',
    priceType: 'recurring',
    priceDisplay: 'Starting at ₹499/Month',
    heroPriceHook: 'Monthly & Quarterly GSTR-1 & GSTR-3B Filing with 100% ITC Reconciliation | Starting at ₹499/Month',
    specialCallout: 'Zero Penalty Guarantee',
    urgencyText: 'File before 11th & 20th to avoid late fees',
    ctaText: 'Start GST Return Filing',
    metaTitle: 'GST Return Filing Online India | GSTR-1 & GSTR-3B Starting @ ₹499/Mo',
    metaDescription: 'File monthly and quarterly GSTR-1, GSTR-3B & CMP-08 returns online with 100% GSTR-2B Input Tax Credit reconciliation. Avoid late fees and notices.',
    seoKeywords: ['GST return filing', 'GSTR 1 online filing', 'GSTR 3B filing', 'GST return ₹499', 'GSTR 2B reconciliation', 'quarterly QRMP scheme filing'],
    heroIntro: 'GST Return Filing, mandated under Chapter IX of the Central Goods and Services Tax (CGST) Act, 2017, is the periodic statutory declaration of outward supplies (sales), inward supplies (purchases), Input Tax Credit (ITC) claimed, and net tax paid to the government. Every registered taxpayer holding an active GSTIN—whether operating under the Regular Monthly scheme, Quarterly Return Monthly Payment (QRMP) scheme, or Composition Scheme—must file statutory GST returns (GSTR-1, GSTR-3B, CMP-08) on or before prescribed monthly and quarterly deadlines to avoid daily late fees, interest, and GSTIN suspension.',
    keyTags: ['GSTR-1 Outward Supplies', 'GSTR-3B Tax Settlement', 'GSTR-2B Auto ITC Reconciliation', 'QRMP & Monthly Schemes', 'Late Fee & Penalty Shield'],
    overview: {
      p1: 'Periodic GST return filing is the operational heartbeat of a compliant business. It reconciles an entity sales invoices with buyer accounts, validates input tax credit against supplier uploads in GSTR-2B, and settles net tax liabilities with the central and state exchequers.',
      p2: 'Failing to file GST returns on time triggers automated daily late fees (₹50/day for regular, ₹20/day for nil returns), 18% annual interest on unpaid taxes, blocking of E-Way Bill generation on the portal, and eventual cancellation of the GSTIN under Section 29. Akshay B2B Solutions provides comprehensive month-on-month sales ledger ingestion, GSTR-2B invoice-matching, maximum ITC optimization, and automated filing before due dates.',
    },
    registrationProcessOverview: {
      status: 'Mandatory Periodic Statutory Compliance for all GSTIN Holders',
      governingAuthority: 'Goods and Services Tax Network (GSTN) & CBIC',
      summary: 'Data extraction from sales/purchase ledgers, cross-reconciliation with GSTR-2A/2B portal data, calculation of net tax liability, GSTR-1 invoice upload, and GSTR-3B electronic verification.',
      postApproval: 'Generation of official GST Return Filing ARN Receipts confirming successful submission and tax settlement.',
      assistanceRole: 'Invoice data validation, HSN summary preparation, GSTR-2B credit matching, challan generation, and filing via DSC/EVC.'
    },
    whatIs: {
      definition: 'GST Return Filing is the periodic submission of commercial transaction details by a taxpayer to the tax authorities to compute and discharge tax obligations.',
      points: [
        'GSTR-1: Monthly/Quarterly statement of outward supplies and B2B/B2C sales invoices.',
        'GSTR-3B: Monthly summary return declaring output tax liability, ITC claimed, and tax payment.',
        'CMP-08: Quarterly special statement for Composition Scheme taxpayers.',
        'GSTR-2B Reconciliation: Automated matching to ensure maximum allowable input tax credit.',
        'Mandatory even if there are zero transactions during the tax period (Nil Return).',
        'Prerequisite for maintaining active E-Way Bill generation and GSTIN status.'
      ],
      closing: 'It protects your business from penalties, preserves vendor relationships, and unlocks full input tax credits.'
    },
    keyCharacteristics: [
      {
        title: 'Dual Filing Structure',
        description: 'Regular taxpayers file GSTR-1 (Sales Invoice Details) followed by GSTR-3B (Summary Tax Calculation & Payment).'
      },
      {
        title: 'GSTR-2B ITC Matching',
        description: 'Input Tax Credit is restricted strictly to invoices reflected in the auto-generated GSTR-2B statement from active suppliers.'
      },
      {
        title: 'QRMP Scheme Option',
        description: 'Small taxpayers with turnover up to ₹5 Crore can opt for Quarterly filing of returns with simplified monthly tax payments.'
      },
      {
        title: 'E-Way Bill Integration',
        description: 'Non-filing of GSTR-3B for two consecutive periods automatically blocks E-Way Bill generation on the national transport portal.'
      }
    ],
    importanceBenefits: {
      intro: 'Consistent, timely GST return filing provides critical commercial and legal advantages:',
      benefits: [
        {
          title: 'Maximum Input Tax Credit Recovery',
          desc: 'Our rigorous GSTR-2B reconciliation ensures zero leakage of eligible ITC, directly reducing your monthly cash outflow.'
        },
        {
          title: 'Protection from Punitive Late Fees & Interest',
          desc: 'Avoid accumulating ₹50/day late fees and 18% compounding interest on delayed tax liabilities.'
        },
        {
          title: 'Preserves Customer & Vendor Trust',
          desc: 'When you file GSTR-1 on time, your B2B buyers see input credit in their GSTR-2B instantly, ensuring smooth payment releases.'
        },
        {
          title: 'Active E-Way Bill & Smooth Logistics',
          desc: 'Keeps your E-Way Bill portal active, preventing transport trucks from being stopped or detained by roving tax squads.'
        },
        {
          title: 'Bank Loan & Credit Appraisal Readiness',
          desc: 'Consistent GSTR-3B filings serve as verified revenue proof for working capital loans, overdrafts, and credit card applications.'
        }
      ],
      closing: 'It maintains a pristine compliance rating on the GST portal, elevating your enterprise stature.'
    },
    package: {
      title: 'Monthly / Quarterly GST Return Filing Package',
      description: 'Complete sales ingestion, GSTR-2B ITC matching, tax challan preparation, and filing with ARN delivery.',
      checklist: [
        'Monthly Sales & Purchase Invoices Ingestion & Audit',
        'B2B, B2C Large, B2C Small & Export Invoicing Reconciliation',
        'Automated GSTR-2B vs Purchase Register ITC Matching',
        'Identification of Mismatched Invoices & Supplier Follow-Up List',
        'Preparation and Filing of GSTR-1 on GST Common Portal',
        'Output Tax Computation, ITC Set-off & Challan Generation',
        'Filing of GSTR-3B Summary Return via DSC / Aadhaar EVC',
        'Official ARN Receipt Generation & Compliance Ledger Archive'
      ]
    },
    types: [
      {
        title: 'Regular Monthly Filing (GSTR-1 & 3B)',
        desc: 'For active businesses with monthly invoice flow. GSTR-1 due by 11th, GSTR-3B due by 20th of the following month.',
        eligibility: 'Standard regular taxpayers'
      },
      {
        title: 'QRMP Scheme (Quarterly Return)',
        desc: 'For taxpayers with turnover < ₹5 Cr. File GSTR-1 (IFF) and GSTR-3B quarterly with simple monthly PMT-06 tax challan.',
        eligibility: 'Small businesses & consultants'
      },
      {
        title: 'Composition Scheme (CMP-08)',
        desc: 'Simplified quarterly tax statement for composition dealers paying flat 1% to 6% tax without detailed invoices.',
        eligibility: 'Composition scheme dealers'
      },
      {
        title: 'Nil GST Return Filing',
        desc: 'Instant 1-click filing for registered entities with zero sales and zero purchases in a given month.',
        eligibility: 'Zero transaction entities'
      }
    ],
    comparison: {
      title: 'Monthly Regular Filing vs QRMP Quarterly Filing',
      headers: ['Parameter', 'Monthly Regular Filing', 'QRMP Quarterly Scheme'],
      rows: [
        { aspect: 'Eligibility', col1: 'All taxpayers regardless of turnover', col2: 'Taxpayers with aggregate turnover up to ₹5 Cr' },
        { aspect: 'GSTR-1 Frequency', col1: 'Monthly (due 11th of next month)', col2: 'Quarterly (due 13th of month after quarter)' },
        { aspect: 'GSTR-3B Frequency', col1: 'Monthly (due 20th of next month)', col2: 'Quarterly (due 22nd/24th after quarter)' },
        { aspect: 'Monthly Tax Payment', col1: 'Discharged via monthly GSTR-3B', col2: 'Discharged via Form PMT-06 challan by 25th' },
        { aspect: 'Invoice Upload', col1: 'Full monthly invoice batches', col2: 'Optional Invoice Furnishing Facility (IFF)' }
      ]
    },
    lawsGoverning: {
      actName: 'Central Goods and Services Tax Act, 2017 (Chapter IX)',
      authority: 'Goods and Services Tax Network (GSTN) & CBIC',
      points: [
        'Section 37 governing furnishing of details of outward supplies (GSTR-1).',
        'Section 38 governing auto-drafted statements of input tax credit (GSTR-2B).',
        'Section 39 governing monthly and quarterly summary returns (GSTR-3B).',
        'Section 47 prescribing late fees of ₹50/day (₹20/day for Nil) up to maximum ₹10,000 per return.',
        'Section 50 prescribing 18% annual interest on delayed net cash tax payment.'
      ],
      penalties: 'Non-filing for 6 consecutive months leads to statutory cancellation of GSTIN and attachment of bank accounts.'
    },
    eligibilityRequirements: {
      intro: 'Any business holding an active 15-digit GSTIN is legally mandated to file periodic returns:',
      criteria: [
        'All active GSTIN holders registered under Regular or Composition scheme.',
        'Entities operating under the QRMP scheme.',
        'Registered entities with zero commercial activity must file Nil returns.'
      ],
      documentsRequired: [
        'Sales Invoices & Credit/Debit Notes for the tax period',
        'Purchase Invoices & Expense Bills (for ITC reconciliation)',
        'Bank Statement showing tax payments / customer collections',
        'GST Common Portal Login Credentials (Username & Password)',
        'Aadhaar OTP of Authorized Signatory or Class 3 DSC for filing'
      ]
    },
    processSteps: [
      { step: 1, title: 'Invoice Ingestion & Data Verification', desc: 'You share your monthly sales and purchase excel/Tally sheets; our team verifies HSN codes and tax rates.' },
      { step: 2, title: 'GSTR-2B Auto-Reconciliation', desc: 'We download your real-time GSTR-2B from the GST portal and reconcile eligible ITC against your purchase register.' },
      { step: 3, title: 'GSTR-1 Upload & GSTR-3B Computation', desc: 'We upload sales to GSTR-1, compute net tax liability, and prepare the exact tax challan (if any).' },
      { step: 4, title: 'Electronic Filing & ARN Generation', desc: 'We execute the filing via OTP/DSC and deliver the official ARN filing receipt and monthly tax summary report.' }
    ],
    postRegistrationCompliance: {
      intro: 'Key best practices for ongoing GST compliance:',
      points: [
        'Always verify that your suppliers have filed their GSTR-1 on or before the 11th to ensure input credits appear in your GSTR-2B.',
        'Reconcile books with GSTR-3B monthly to avoid year-end mismatches during GSTR-9 annual filing.',
        'Maintain digital archives of all e-invoices, e-way bills, and tax invoices for at least 72 months.',
        'Review electronic cash and credit ledgers regularly on the GST portal.'
      ]
    },
    timelines: {
      tat: 'Same-Day / 24-48 Hours Filing',
      delayFactors: ['Delayed sharing of sales sheets near due date', 'Supplier invoice mismatches requiring verification', 'GST portal server downtime on peak filing days (11th & 20th)'],
      speedAssurance: 'We initiate filings well ahead of statutory deadlines to protect you from portal peak rushes and late fees.'
    },
    certification: {
      issuingAuthority: 'Goods and Services Tax Network (GSTN)',
      validity: 'Statutory compliance for the specific tax period filed',
      legalSignificance: 'Official digital proof of statutory tax declaration and payment acknowledged by the Ministry of Finance.',
      contents: ['Application Reference Number (ARN)', 'Return Type (GSTR-1 / GSTR-3B / CMP-08)', 'Tax Period & Financial Year', 'Total Taxable Turnover & Net Tax Paid', 'Timestamp & Digital Signature Hash']
    },
    fees: {
      govtFee: '₹0 (Official Government Filing Fee is Nil, unless late fees apply for delayed filing)',
      professionalFee: 'Starting at ₹499/Month (Custom packages available for high invoice volume businesses)',
      transparencyNote: 'Transparent recurring monthly retainer with zero hidden fees.'
    },
    taxation: {
      directTaxImpact: 'Monthly GST accounting and return filing professional fees are 100% tax-deductible operational business expenses.',
      gstImplications: 'Ensures 100% utilization of eligible Input Tax Credit against outward tax liabilities, reducing cash tax payout.',
      deductionsOrExemptions: 'Prevents non-deductible late fees and penal interest charges from eroding business profits.'
    },
    whyUs: [
      'Over 25,000+ GST returns successfully filed every quarter with zero error track record.',
      'Automated software-driven GSTR-2B reconciliation maximizing input tax recovery.',
      'Dedicated chartered accountants and tax experts assigned to your business account.',
      'Proactive deadline alerts and reminder calls before the 11th and 20th of every month.',
      'Seamless support for Tally, Busy, Zoho Books, Marg, and Excel data ingestion.'
    ],
    faqs: [
      { q: 'What is the difference between GSTR-1 and GSTR-3B?', a: 'GSTR-1 is a detailed statement of all your outward sales invoices and credit notes, while GSTR-3B is a monthly summary return where you declare total sales, claim input tax credit (ITC), and pay net taxes to the government.' },
      { q: 'Is it mandatory to file GST returns if there were no sales or purchases?', a: 'Yes! If you hold an active GSTIN, you must file a Nil GST Return for every tax period. Failing to file Nil returns attracts a statutory late fee of ₹20 per day.' },
      { q: 'What is GSTR-2B and why is it important for ITC?', a: 'GSTR-2B is an auto-generated static Input Tax Credit (ITC) statement created on the 14th of every month reflecting all purchases where suppliers uploaded invoices. Under GST law, you can only claim ITC that appears in your GSTR-2B.' },
      { q: 'What is the late fee for delayed GST return filing?', a: 'For regular returns with transactions, the late fee is ₹50 per day (₹25 CGST + ₹25 SGST). For Nil returns, the late fee is ₹20 per day (₹10 CGST + ₹10 SGST), subject to statutory caps.' },
      { q: 'Can a filed GST return be revised?', a: 'No. GST returns cannot be directly revised once filed. However, errors or omissions in sales, tax values, or customer GST numbers can be amended in subsequent months return under the Amendment tables.' },
      { q: 'How do I start monthly GST return filing with Akshay B2B Solutions?', a: 'Click "Start GST Return Filing" to connect with our tax team, upload your sales data, and experience seamless, error-free monthly tax compliance.' }
    ],
    relatedServices: [
      { name: 'GST Registration', desc: 'New 15-digit GSTIN allotment in 3-7 working days.', price: '₹699' },
      { name: 'GST Annual Return (GSTR-9)', desc: 'Annual reconciliation and statutory return filing on GST portal.', price: '₹1,499' },
      { name: 'GST Notice Response', desc: 'Legal drafting and representation for ASMT-10 and DRC-01 notices.', price: '₹1,499' },
      { name: 'GST Revocation', desc: 'Restore cancelled GSTIN through Form REG-21 revocation filing.', price: '₹2,499' },
      { name: 'Income Tax Return (ITR)', desc: 'Accurate tax filing for individuals, firms, and companies.', price: '₹499' },
      { name: 'TDS Return Filing', desc: 'Quarterly Form 24Q, 26Q, and 27Q filing with Form 16 issuance.', price: '₹1,499' }
    ]
  },
  {
    slug: 'gst-annual-return',
    name: 'GST Annual Return (GSTR-9 & GSTR-9C)',
    category: 'GST & Tax',
    parentCategory: 'Registration & License',
    price: '₹1,499',
    priceType: 'fixed',
    priceDisplay: '₹1,499/- only',
    heroPriceHook: 'GSTR-9 & GSTR-9C Annual Reconciliation Filing | ₹1,499/- All-Inclusive',
    specialCallout: 'Comprehensive Year-End Audit',
    urgencyText: 'Mandatory annual filing before 31st December',
    ctaText: 'File GST Annual Return',
    metaTitle: 'GSTR-9 & GSTR-9C Annual Return Filing Online @ ₹1,499 | GST Audit',
    metaDescription: 'File GSTR-9 annual return and GSTR-9C reconciliation statement online at ₹1,499. Comprehensive audit of GSTR-1, GSTR-3B vs audited financial books.',
    seoKeywords: ['GSTR-9 annual return', 'GSTR-9C reconciliation statement', 'GST annual filing ₹1499', 'GST audit return', 'GSTR 9 late fee', 'reconcile GSTR 3B books'],
    heroIntro: 'A GST Annual Return (Form GSTR-9 & GSTR-9C), mandated under Section 44 of the Central Goods and Services Tax (CGST) Act, 2017 read with Rule 80 of the CGST Rules, is the comprehensive annual statutory consolidation of all monthly/quarterly returns (GSTR-1, GSTR-3B) filed during a financial year, reconciled against the taxpayer audited books of accounts. Every registered regular taxpayer must file Form GSTR-9 on or before 31st December following the end of the financial year to finalize tax liabilities, correct unpaid taxes via Form DRC-03, and avoid massive statutory late fees of ₹200 per day.',
    keyTags: ['Section 44 CGST Act', 'Form GSTR-9 Consolidation', 'Form GSTR-9C Reconciliation', 'DRC-03 Tax Regularization', 'Year-End Audit Shield'],
    overview: {
      p1: 'The GST Annual Return is the ultimate opportunity for taxpayers to consolidate their entire financial year turnover, verify outward supplies, finalize Input Tax Credit (ITC) utilization, and true-up any mismatches between books of accounts and portal filings.',
      p2: 'Taxpayers with aggregate turnover exceeding ₹2 Crore must mandatorily file Form GSTR-9, while those exceeding ₹5 Crore must additionally submit Form GSTR-9C (self-certified Reconciliation Statement). Failing to file GSTR-9 triggers severe late fees of ₹200/day (0.5% of turnover max) and automated departmental audit notices under Section 65. Akshay B2B Solutions provides in-depth turnover reconciliation, ITC mismatch rectification, and error-free GSTR-9/9C filing.',
    },
    registrationProcessOverview: {
      status: 'Mandatory Annual Statutory Compliance for Regular Taxpayers',
      governingAuthority: 'Central Board of Indirect Taxes and Customs (CBIC) & State GST Departments',
      summary: 'Extracting 12-month GSTR-1 and GSTR-3B filing data, reconciling against audited P&L and Balance Sheet, computing unavailed or excess ITC, and filing Form GSTR-9/9C on the GST portal.',
      postApproval: 'Generation of official Form GSTR-9 Filing ARN Receipt confirming annual statutory closure.',
      assistanceRole: 'Financial statement cross-matching, DRC-03 tax computation, HSN summary validation, and portal submission.'
    },
    whatIs: {
      definition: 'GST Annual Return is a comprehensive annual statutory document summarizing all outward sales, inward purchases, tax liabilities, and input credits of a financial year.',
      points: [
        'Form GSTR-9: Mandatory annual return for all regular GST registered taxpayers.',
        'Form GSTR-9C: Self-certified reconciliation statement for entities with turnover > ₹5 Crore.',
        'Reconciles figures between monthly GSTR-1, GSTR-3B, and audited financial statements.',
        'Allows voluntary payment of short-paid taxes or interest through Form DRC-03.',
        'Crucial for avoiding departmental scrutiny notices and GST audits.',
        'Statutory filing deadline is 31st December following the end of the financial year.'
      ],
      closing: 'It provides statutory year-end closure, rectifying past reporting errors and insulating the business from audit penalties.'
    },
    keyCharacteristics: [
      {
        title: 'Three-Way Reconciliation',
        description: 'Comprehensive cross-matching between Audited Financial Books, GSTR-1 (Sales), and GSTR-3B (Taxes Paid).'
      },
      {
        title: 'Turnover Exemption Thresholds',
        description: 'Taxpayers with aggregate turnover up to ₹2 Crore are exempted from GSTR-9, while those above ₹2 Cr must file GSTR-9.'
      },
      {
        title: 'Self-Certified GSTR-9C',
        description: 'Entities above ₹5 Crore turnover self-certify the GSTR-9C reconciliation statement without requiring external CA signature.'
      },
      {
        title: 'DRC-03 Voluntary Tax Settlement',
        description: 'Any un-reconciled tax liability identified during annual filing can be settled voluntarily with concessional interest.'
      }
    ],
    importanceBenefits: {
      intro: 'Filing an accurate GST Annual Return delivers immense compliance and financial safeguards:',
      benefits: [
        {
          title: 'Immunity from Severe Departmental Audits',
          desc: 'A reconciled GSTR-9 eliminates red flags on the GST analytics engine, preventing Section 65 department audit notices.'
        },
        {
          title: 'Protection from ₹200/Day Late Fees',
          desc: 'Avoid accumulating hefty statutory late fees capped at 0.50% of total annual business turnover.'
        },
        {
          title: 'Voluntary Error Rectification',
          desc: 'Fix reporting discrepancies from monthly filings and pay any short taxes via DRC-03 before departmental demand notices.'
        },
        {
          title: 'Clean Financial Records for Bank Funding',
          desc: 'Lenders and investors mandate verified GSTR-9 receipts before sanctioning term loans and venture equity rounds.'
        },
        {
          title: 'Permanent Statutory Closure',
          desc: 'Provides legal finality to the financial year indirect tax liabilities, preventing future retrospective assessments.'
        }
      ],
      closing: 'It ensures total peace of mind by securing clean, audit-proof tax records.'
    },
    package: {
      title: 'GSTR-9 & GSTR-9C Annual Return Package',
      description: 'Complete 12-month data consolidation, financial reconciliation, DRC-03 computation, and GSTR-9/9C portal filing.',
      checklist: [
        '12-Month GSTR-1 & GSTR-3B Data Consolidation Dossier',
        'Reconciliation with Audited Balance Sheet & Profit & Loss Account',
        'GSTR-2A / GSTR-2B vs Books Input Tax Credit (ITC) True-up',
        'Identification of Ineligible, Reversed, or Excess Claimed ITC',
        'Computation of Differential Tax Liability & DRC-03 Challan Generation',
        'Preparation of HSN-Wise Inward and Outward Supply Summaries',
        'Electronic Submission of Form GSTR-9 on GST Portal via DSC/EVC',
        'Preparation and Filing of Form GSTR-9C (for turnover > ₹5 Crore)'
      ]
    },
    types: [
      {
        title: 'GSTR-9 for Regular Taxpayers',
        desc: 'For all standard registered businesses with annual aggregate turnover exceeding ₹2 Crore.',
        eligibility: 'Turnover > ₹2 Crore'
      },
      {
        title: 'GSTR-9C Reconciliation Statement',
        desc: 'For high-turnover enterprises reconciling audited balance sheets with GSTR-9 figures.',
        eligibility: 'Turnover > ₹5 Crore'
      },
      {
        title: 'GSTR-9A for Composition Dealers',
        desc: 'Simplified annual return for taxpayers enrolled under the Composition Scheme (presently GSTR-4).',
        eligibility: 'Composition dealers'
      }
    ],
    comparison: {
      title: 'Form GSTR-9 vs Form GSTR-9C',
      headers: ['Parameter', 'Form GSTR-9', 'Form GSTR-9C'],
      rows: [
        { aspect: 'Nature of Form', col1: 'Annual Return consolidating monthly filings', col2: 'Reconciliation Statement matching books & GSTR-9' },
        { aspect: 'Mandatory Threshold', col1: 'Aggregate Turnover > ₹2 Crore', col2: 'Aggregate Turnover > ₹5 Crore' },
        { aspect: 'Certification', col1: 'Filed directly by Taxpayer / Director', col2: 'Self-certified by Taxpayer / Director' },
        { aspect: 'Core Objective', col1: 'Consolidate sales, taxes, and ITC claimed', col2: 'Reconcile gross turnover and profit with audited balance sheet' },
        { aspect: 'Filing Deadline', col1: '31st December following FY', col2: '31st December following FY (along with GSTR-9)' }
      ]
    },
    lawsGoverning: {
      actName: 'Central Goods and Services Tax Act, 2017 (Section 44 & Rule 80)',
      authority: 'Central Board of Indirect Taxes and Customs (CBIC)',
      points: [
        'Section 44 mandates every registered person to furnish an annual return.',
        'Rule 80 prescribes Form GSTR-9 and Form GSTR-9C reconciliation statements.',
        'Notification No. 14/2024 exempts taxpayers with turnover up to ₹2 Crore from GSTR-9.',
        'Section 47 prescribes late fees of ₹200 per day (₹100 CGST + ₹100 SGST) for delayed filing.',
        'Section 73/74 empowers department to initiate demand proceedings for un-reconciled tax gaps.'
      ],
      penalties: 'Delayed filing attracts statutory late fee of ₹200/day up to a maximum of 0.50% of state turnover.'
    },
    eligibilityRequirements: {
      intro: 'Taxpayers meeting turnover criteria or wishing to voluntarily true-up tax records must file GSTR-9:',
      criteria: [
        'Mandatory for all regular taxpayers with annual turnover exceeding ₹2 Crore.',
        'Mandatory GSTR-9C for all taxpayers with annual turnover exceeding ₹5 Crore.',
        'Recommended voluntarily for taxpayers with turnover < ₹2 Crore having ITC mismatches.'
      ],
      documentsRequired: [
        'Audited Financial Statements (Balance Sheet, P&L Account & Notes to Accounts)',
        '12-Month GSTR-1 and GSTR-3B Summary Reports',
        'Annual Purchase Register and GSTR-2B Statement',
        'Details of Tax Paid through Cash and Input Tax Credit',
        'GST Portal Login Credentials & Authorized Signatory DSC/OTP'
      ]
    },
    processSteps: [
      { step: 1, title: 'Financial & Filing Data Ingestion', desc: 'We ingest your audited financial statements, trial balance, and 12-month GSTR-1/3B portal data.' },
      { step: 2, title: 'Three-Way Reconciliation Audit', desc: 'Our chartered accountants perform an in-depth audit matching sales, ITC, and tax ledgers across books and returns.' },
      { step: 3, title: 'DRC-03 Tax Regularization', desc: 'We compute any differential tax or interest liabilities and generate DRC-03 voluntary payment challans.' },
      { step: 4, title: 'GSTR-9 & GSTR-9C Portal Submission', desc: 'We compile the final annual dossier, upload figures on the GST portal, and execute filing via DSC/EVC.' }
    ],
    postRegistrationCompliance: {
      intro: 'Key obligations following annual return submission:',
      points: [
        'Download and archive the final filed GSTR-9 and GSTR-9C PDF reports along with the ARN receipt.',
        'Pass necessary year-end journal adjustments in books of accounts for any DRC-03 tax payments.',
        'Retain all underlying tax invoices, bills of entry, and reconciliation sheets for a minimum of 72 months.',
        'Review the electronic credit ledger for any carry-forward balances into the subsequent financial year.'
      ]
    },
    timelines: {
      tat: '3 to 5 Working Days',
      delayFactors: ['Un-audited or delayed financial statements', 'Extensive purchase ledger vs GSTR-2B mismatches', 'Peak portal server congestion in the last week of December'],
      speedAssurance: 'We recommend completing your annual reconciliation in October-November to avoid last-minute portal crashes.'
    },
    certification: {
      issuingAuthority: 'Goods and Services Tax Network (GSTN)',
      validity: 'Permanent statutory record for the audited financial year',
      legalSignificance: 'Official annual statutory tax closure acknowledged by the Ministry of Finance and state tax authorities.',
      contents: ['GSTR-9 Application Reference Number (ARN)', 'Audited Financial Year (e.g. FY 2024-25)', 'Consolidated Taxable Turnover & Taxes Paid', 'ITC Reconciled & Utilized', 'Digital Signature & Filing Timestamp']
    },
    fees: {
      govtFee: '₹0 (Official Government Filing Fee is Nil, unless late fees apply for delayed filing)',
      professionalFee: '₹1,499/- only (Complete GSTR-9 reconciliation and filing package; GSTR-9C advisory available)',
      transparencyNote: 'Fixed price ₹1,499 with zero hidden charges.'
    },
    taxation: {
      directTaxImpact: 'Annual GST audit and return filing professional fees are 100% tax-deductible operational business expenses.',
      gstImplications: 'Finalizes eligible Input Tax Credit claims and regularizes any ineligible credits without penal interest.',
      deductionsOrExemptions: 'Saves the business from heavy statutory late fees of ₹200/day and potential Section 74 penalties.'
    },
    whyUs: [
      'Over 6,500+ GSTR-9 and GSTR-9C returns filed with zero department demand notices.',
      'Team of seasoned Chartered Accountants (CAs) conducting thorough three-way reconciliations.',
      'Proprietary ITC matching software identifying every rupee of eligible input credit.',
      'Pre-submission risk analysis preventing automated scrutiny notices from the GST AI engine.',
      'Dedicated legal support for post-filing department queries and DRC-01 notices.'
    ],
    faqs: [
      { q: 'Who is required to file GSTR-9 annual return?', a: 'Under current CBIC notifications, GSTR-9 is mandatory for all regular GST-registered taxpayers whose aggregate annual turnover exceeds ₹2 Crore. Taxpayers with turnover up to ₹2 Crore are exempted from mandatory filing.' },
      { q: 'What is the turnover threshold for Form GSTR-9C?', a: 'Form GSTR-9C (Reconciliation Statement) is mandatory for taxpayers whose aggregate annual turnover exceeds ₹5 Crore in a financial year. It is self-certified by the taxpayer.' },
      { q: 'What is the last date to file GSTR-9 and GSTR-9C?', a: 'The statutory due date for filing GSTR-9 and GSTR-9C is 31st December following the end of the relevant financial year (e.g., for FY 2023-24, the due date was 31st December 2024).' },
      { q: 'Can I claim missed Input Tax Credit (ITC) directly in GSTR-9?', a: 'No. Missed ITC from a financial year cannot be claimed directly in Form GSTR-9. Missed ITC must be claimed in regular GSTR-3B filed up to 30th November following the end of the financial year.' },
      { q: 'How are unpaid taxes or short-payments settled during GSTR-9 filing?', a: 'Any unpaid tax liabilities or incorrect ITC claims identified during GSTR-9 reconciliation are settled voluntarily using Form GST DRC-03 through the electronic cash ledger.' },
      { q: 'How do I start GSTR-9 filing with Akshay B2B Solutions?', a: 'Click "File GST Annual Return" to share your financial statements with our CA team and receive an instant reconciliation report and filing roadmap.' }
    ],
    relatedServices: [
      { name: 'GST Return Filing', desc: 'Monthly & quarterly GSTR-1 and GSTR-3B filing with ITC reconciliation.', price: '₹499/Month' },
      { name: 'GST Registration', desc: 'New 15-digit GSTIN allotment in 3-7 working days.', price: '₹699' },
      { name: 'GST Notice Response', desc: 'Legal drafting and representation for ASMT-10 and DRC-01 notices.', price: '₹1,499' },
      { name: 'Income Tax Return (ITR)', desc: 'Accurate tax filing for individuals, firms, and companies.', price: '₹499' },
      { name: 'ROC Annual Filing', desc: 'Mandatory annual MCA compliance (AOC-4 & MGT-7) for companies.', price: '₹1,999' },
      { name: 'TDS Return Filing', desc: 'Quarterly Form 24Q, 26Q, and 27Q filing with Form 16 issuance.', price: '₹1,499' }
    ]
  },
  {
    slug: 'gst-nil-return',
    name: 'GST Nil Return Filing',
    category: 'GST & Tax',
    parentCategory: 'Registration & License',
    price: '₹499',
    priceType: 'fixed',
    priceDisplay: '₹499/- only',
    heroPriceHook: 'Instant 1-Click GST Nil Return Filing via SMS & Portal | ₹499/- All-Inclusive',
    specialCallout: 'Instant Same-Day ARN Generation',
    urgencyText: 'Avoid ₹20/day accumulating late fees',
    ctaText: 'File GST Nil Return',
    metaTitle: 'GST Nil Return Filing Online @ ₹499 | GSTR-1 & GSTR-3B Nil Filing',
    metaDescription: 'File your monthly and quarterly GST Nil return online at ₹499. Instant ARN generation, zero penalty shield, and complete protection from GSTIN cancellation.',
    seoKeywords: ['GST nil return filing', 'GSTR 1 nil return', 'GSTR 3B nil filing', 'nil GST return ₹499', 'SMS nil GST filing', 'avoid GST late fee nil'],
    heroIntro: 'A GST Nil Return Filing, mandated under Section 39 of the Central Goods and Services Tax (CGST) Act, 2017, is the mandatory statutory electronic declaration submitted by a registered taxpayer when there are zero outward taxable supplies (sales), zero inward supplies (purchases), zero Input Tax Credit (ITC) claims, and zero tax liability during a given tax period. Holding an active GSTIN legally obligates the business to file Nil returns for every monthly or quarterly cycle, even if the business is temporarily inactive or dormant.',
    keyTags: ['Zero Transaction Tax Period', 'GSTR-1 & GSTR-3B Nil Filing', 'Avoid ₹20/Day Late Fees', 'Preserve Active GSTIN', 'Instant ARN Generation'],
    overview: {
      p1: 'Many business owners mistakenly assume that if they had no sales or purchases in a month, they do not need to log into the GST portal. In reality, the GST system automatically levies a compounding daily late fee of ₹20 per day (₹10 CGST + ₹10 SGST) for every day of delay in filing a Nil return.',
      p2: 'Furthermore, failing to file Nil returns for 6 consecutive tax periods empowers the GST department to initiate suo-motu cancellation of the GSTIN under Section 29, blocking bank accounts and freezing commercial operations. Akshay B2B Solutions provides instant, automated Nil return filing across GSTR-1, GSTR-3B, and CMP-08 with immediate ARN delivery.',
    },
    registrationProcessOverview: {
      status: 'Mandatory Periodic Statutory Compliance for Zero-Transaction Tax Periods',
      governingAuthority: 'Goods and Services Tax Network (GSTN) & CBIC',
      summary: 'Verifying zero sales/purchase status, logging into the GST portal or initiating authorized SMS authentication, submitting GSTR-1 Nil and GSTR-3B Nil declarations.',
      postApproval: 'Issuance of official Application Reference Number (ARN) confirming successful Nil return filing.',
      assistanceRole: 'Zero-transaction verification, OTP coordination, automated portal submission, and ARN receipt delivery.'
    },
    whatIs: {
      definition: 'GST Nil Return is a simplified statutory return filed by active GSTIN holders declaring zero business transactions, purchases, or tax liabilities for a specific tax period.',
      points: [
        'Mandatory for all active GSTIN holders even during complete business dormancy.',
        'Applies to both GSTR-1 (Outward Supplies) and GSTR-3B (Summary Return).',
        'Requires zero outward sales, zero inward supplies with reverse charge, and zero ITC claims.',
        'Can be filed directly on the GST portal or via 1-click authorized SMS facility.',
        'Prevents accumulating statutory late fees of ₹20 per day.',
        'Ensures your GSTIN remains active, compliant, and in good standing with tax authorities.'
      ],
      closing: 'It provides effortless, zero-hassle statutory protection for inactive or seasonal businesses.'
    },
    keyCharacteristics: [
      {
        title: 'Zero Activity Pre-Condition',
        description: 'Taxpayer must have zero outward sales, zero purchases with RCM liability, and no input tax credit to claim.'
      },
      {
        title: 'SMS Nil Filing Facility',
        description: 'Eligible taxpayers can file Nil returns instantly via registered mobile number SMS authentication.'
      },
      {
        title: 'Reduced Late Fee Rate',
        description: 'Delayed Nil returns attract a reduced late fee of ₹20/day (compared to ₹50/day for regular active returns).'
      },
      {
        title: 'Prevents Suo-Motu Cancellation',
        description: 'Filing regular Nil returns prevents tax officers from automatically suspending or cancelling your GSTIN.'
      }
    ],
    importanceBenefits: {
      intro: 'Filing your GST Nil Return promptly delivers essential regulatory benefits:',
      benefits: [
        {
          title: 'Total Protection from Late Fees',
          desc: 'Avoid accumulating ₹600/month in compounding late fees that must be paid before any future return can be filed.'
        },
        {
          title: 'Prevents Automatic GSTIN Cancellation',
          desc: 'Shields your valuable 15-digit GSTIN from departmental suo-motu cancellation under Section 29.'
        },
        {
          title: 'Maintains 100% Tax Compliance Score',
          desc: 'Preserves a clean, green compliance status on the national GST portal for banking and tender evaluations.'
        },
        {
          title: 'Instant Same-Day Completion',
          desc: 'Completed within minutes with immediate generation of official Government Application Reference Numbers (ARN).'
        },
        {
          title: 'Ready for Immediate Business Resumption',
          desc: 'Keep your registration fully active so you can immediately invoice clients when business orders resume.'
        }
      ],
      closing: 'It keeps your enterprise legally spotless with minimal cost and zero effort.'
    },
    package: {
      title: 'GST Nil Return Complete Package',
      description: 'Zero transaction audit, instant GSTR-1 & GSTR-3B Nil submission, and ARN receipt generation.',
      checklist: [
        'Tax Period Zero-Transaction Eligibility Verification',
        'Preparation of GSTR-1 Nil Return Declaration',
        'Preparation of GSTR-3B Nil Summary Declaration',
        'Electronic Submission via GST Portal / Authorized SMS Route',
        'Aadhaar EVC / OTP Authentication Handling',
        'Official Government ARN Receipt Generation',
        'Archiving Compliance Record for Year-End GSTR-9 Reporting',
        'Complimentary Next-Month Filing Deadline Alerts'
      ]
    },
    types: [
      {
        title: 'GSTR-1 Nil Return',
        desc: 'Declarations of zero outward sales invoices or credit notes for the tax period.',
        eligibility: 'Zero sales in month/quarter'
      },
      {
        title: 'GSTR-3B Nil Return',
        desc: 'Declarations of zero tax liability, zero ITC claims, and zero reverse charge purchases.',
        eligibility: 'Zero purchases & taxes'
      },
      {
        title: 'CMP-08 Nil Statement',
        desc: 'For Composition Scheme taxpayers with zero turnover in a quarterly cycle.',
        eligibility: 'Composition dealers'
      }
    ],
    comparison: {
      title: 'Filing Nil Return on Time vs Delaying Nil Return',
      headers: ['Parameter', 'Filing Nil Return on Time', 'Delaying / Ignoring Nil Return'],
      rows: [
        { aspect: 'Statutory Late Fee', col1: '₹0 (Zero Late Fee)', col2: '₹20 per day compounding daily' },
        { aspect: 'GSTIN Status', col1: 'Active & Compliant', col2: 'Suspended after 6 consecutive defaults' },
        { aspect: 'Future Filing Barrier', col1: 'Unrestricted next-month filing', col2: 'Blocked until past late fees are paid' },
        { aspect: 'E-Way Bill Generation', col1: 'Fully operational', col2: 'Blocked after 2 consecutive missed returns' },
        { aspect: 'Departmental Notices', col1: 'Zero notice risk', col2: 'Notice in Form GSTR-3A issued' }
      ]
    },
    lawsGoverning: {
      actName: 'Central Goods and Services Tax Act, 2017 (Section 39 & Rule 67A)',
      authority: 'Goods and Services Tax Network (GSTN) & CBIC',
      points: [
        'Section 39 mandates furnishing of returns for every tax period.',
        'Rule 67A enables filing of Nil returns through Short Messaging Service (SMS).',
        'Section 47 prescribes late fees of ₹20 per day (₹10 CGST + ₹10 SGST) for Nil returns.',
        'Section 29 empowers tax authorities to cancel GSTIN for 6 months continuous non-filing.',
        'Section 46 empowers issuance of Form GSTR-3A notice for non-filers of returns.'
      ],
      penalties: 'Accumulates ₹20/day late fee and leads to GSTIN cancellation and frozen bank accounts.'
    },
    eligibilityRequirements: {
      intro: 'Any active GSTIN holder meeting the strict zero-activity conditions qualifies for Nil return:',
      criteria: [
        'No Outward Supplies (sales of goods or services) during the period.',
        'No Inward Supplies attracting Reverse Charge Mechanism (RCM).',
        'No Input Tax Credit (ITC) intended to be claimed for the period.',
        'No other tax liability or interest payable.'
      ],
      documentsRequired: [
        'GST Common Portal Login Credentials (Username & Password)',
        'Registered Mobile Number for OTP Verification',
        'Confirmation of zero sales and purchases for the tax period'
      ]
    },
    processSteps: [
      { step: 1, title: 'Zero Transaction Confirmation', desc: 'We verify that there are zero sales, purchases, or ITC claims for the specified tax period.' },
      { step: 2, title: 'Portal Login & Nil Form Setup', desc: 'We access your portal account and configure the Nil return checkboxes on GSTR-1 and GSTR-3B.' },
      { step: 3, title: 'OTP Authentication & Filing', desc: 'You provide the 6-digit OTP sent to your registered mobile number; we execute instant submission.' },
      { step: 4, title: 'ARN Delivery & Compliance Archive', desc: 'We download the official ARN receipts and deliver them directly to your email and WhatsApp.' }
    ],
    postRegistrationCompliance: {
      intro: 'Key obligations after filing a Nil return:',
      points: [
        'Archive the ARN receipts safely for annual reconciliation in GSTR-9.',
        'Ensure you file subsequent months returns on time, whether Nil or regular.',
        'If business activity resumes next month, transition immediately to standard GSTR-1/3B filing.',
        'Monitor registered email for any system notifications from the GST portal.'
      ]
    },
    timelines: {
      tat: 'Instant / Same-Day (15 to 30 Minutes)',
      delayFactors: ['Delayed sharing of mobile OTP', 'GST portal server maintenance'],
      speedAssurance: 'Our dedicated tax operations desk executes Nil filings within minutes of OTP confirmation.'
    },
    certification: {
      issuingAuthority: 'Goods and Services Tax Network (GSTN)',
      validity: 'Statutory compliance proof for the specific tax period filed',
      legalSignificance: 'Official digital proof that the taxpayer has discharged all indirect tax obligations for the period.',
      contents: ['Application Reference Number (ARN)', 'Return Type (GSTR-1 / GSTR-3B Nil)', 'Tax Period & Financial Year', 'Zero Tax Liability Confirmation', 'Filing Timestamp & Digital Hash']
    },
    fees: {
      govtFee: '₹0 (Official Government Filing Fee is Nil, unless past accumulated late fees apply)',
      professionalFee: '₹499/- only (Complete GSTR-1 & GSTR-3B Nil filing package)',
      transparencyNote: 'Fixed price ₹499 with zero hidden charges.'
    },
    taxation: {
      directTaxImpact: 'GST return filing charges are 100% tax-deductible operational business expenses.',
      gstImplications: 'Maintains active GSTIN status without incurring cash tax payouts or forfeiting future ITC claims.',
      deductionsOrExemptions: 'Saves the business from accumulating daily late fees of ₹20/day.'
    },
    whyUs: [
      'Over 18,000+ Nil returns filed instantly with 100% success rate.',
      'Super-fast 15-minute turnaround time with dedicated WhatsApp OTP coordination.',
      'Zero penalty guarantee when instructions are shared before statutory deadlines.',
      'Automated reminder system ensuring you never miss a monthly filing deadline.',
      'Seamless upgrade to regular filing whenever your business starts generating sales.'
    ],
    faqs: [
      { q: 'Is it really necessary to file a GST return if my business had zero sales?', a: 'Yes! Under GST law, filing returns is mandatory for every single tax period as long as your GSTIN is active. If you had zero sales and purchases, you must file a "Nil Return". Failing to file attracts a daily late fee of ₹20.' },
      { q: 'What happens if I stop filing Nil returns for several months?', a: 'If you fail to file returns for 6 consecutive months, the GST department will automatically suspend and cancel your GSTIN, issue Form GSTR-3A notices, and freeze associated bank accounts.' },
      { q: 'Can I file a Nil return if I made purchases but made no sales?', a: 'If you made business purchases and wish to claim Input Tax Credit (ITC), you cannot file a Nil return. You must file a regular return to claim that ITC for future offset.' },
      { q: 'Can I file a Nil GST return via SMS?', a: 'Yes. Taxpayers with zero sales, zero purchases, and zero tax liability can file Nil GSTR-1 and GSTR-3B via SMS from their registered mobile number.' },
      { q: 'What is the due date for filing a GST Nil return?', a: 'The due date for Nil GSTR-1 is the 11th of the following month, and for Nil GSTR-3B it is the 20th of the following month.' },
      { q: 'How do I get my Nil return filed today?', a: 'Click "File GST Nil Return" to connect with our tax team, share your GST credentials and OTP, and receive your official ARN receipt within minutes.' }
    ],
    relatedServices: [
      { name: 'GST Return Filing', desc: 'Monthly & quarterly GSTR-1 and GSTR-3B filing with ITC reconciliation.', price: '₹499/Month' },
      { name: 'GST Revocation', desc: 'Restore cancelled GSTIN through Form REG-21 revocation filing.', price: '₹2,499' },
      { name: 'GST Registration', desc: 'New 15-digit GSTIN allotment in 3-7 working days.', price: '₹699' },
      { name: 'Income Tax Return (ITR)', desc: 'Accurate tax filing for individuals, firms, and companies.', price: '₹499' },
      { name: 'ROC Annual Filing', desc: 'Mandatory annual MCA compliance (AOC-4 & MGT-7) for companies.', price: '₹1,999' },
      { name: 'DIN KYC Filing', desc: 'Annual Director KYC compliance on MCA portal.', price: '₹999' }
    ]
  },
  {
    slug: 'gst-revocation',
    name: 'GST Revocation of Cancellation',
    category: 'GST & Tax',
    parentCategory: 'Registration & License',
    price: '₹2,499',
    priceType: 'fixed',
    priceDisplay: '₹2,499/- only',
    heroPriceHook: 'Restore Your Suo-Motu Cancelled GSTIN | Form GST REG-21 Filing @ ₹2,499/-',
    specialCallout: 'Suo-Motu Cancellation Restoration',
    urgencyText: 'File revocation within 90 days of cancellation order',
    ctaText: 'Restore Cancelled GSTIN',
    metaTitle: 'GST Revocation of Cancellation Online @ ₹2,499 | Restore GSTIN',
    metaDescription: 'Restore your cancelled GST number online at ₹2,499. File Form GST REG-21, clear pending returns, and get active GSTIN status reinstated fast.',
    seoKeywords: ['GST revocation online', 'restore cancelled GSTIN', 'Form GST REG-21', 'revocation of GST cancellation', 'GST suo motu cancellation', 'reopen cancelled GST'],
    heroIntro: 'GST Revocation of Cancellation, governed by Section 30 of the Central Goods and Services Tax (CGST) Act, 2017 read with Rule 23 of the CGST Rules, is the statutory legal procedure to restore and reinstate a Goods and Services Tax Identification Number (GSTIN) that has been cancelled suo-motu by the proper officer due to non-filing of periodic returns or non-compliance. Filing Form GST REG-21 allows defaulting taxpayers to clear past pending returns, pay overdue taxes, and formally petition the tax authorities to revoke the cancellation order and restore full active business status.',
    keyTags: ['Section 30 CGST Act', 'Form GST REG-21 Revocation', 'Form GST REG-22 Restoration', 'Clear Pending Returns & Taxes', 'Restore Blocked E-Way Bills'],
    overview: {
      p1: 'When a taxpayer fails to file GST returns for 6 consecutive months (or 3 consecutive quarters for composition dealers), the tax officer issues a show-cause notice in Form GST REG-17 and subsequently passes an order in Form GST REG-19 cancelling the GSTIN suo-motu.',
      p2: 'Once cancelled, the entity cannot legally issue tax invoices, collect GST, claim Input Tax Credit, or generate E-Way Bills, effectively paralyzing commercial trade. Under amended rules, taxpayers have 90 days (extendable up to 180 days with Commissioner approval) from the cancellation order to file Form GST REG-21. Akshay B2B Solutions assists with back-filing of returns, drafting revocation petitions, attending officer hearings, and securing Form GST REG-22 restoration orders.',
    },
    registrationProcessOverview: {
      status: 'Statutory Remedy for Suo-Motu Cancelled GSTINs',
      governingAuthority: 'Proper Officer / Jurisdictional GST Commissionerate',
      summary: 'Filing all pending GST returns up to the cancellation date, paying overdue taxes/late fees, drafting and submitting Form GST REG-21 on the portal, and liaising with the jurisdictional tax officer.',
      postApproval: 'Issuance of official Form GST REG-22 Revocation Order restoring active GSTIN status.',
      assistanceRole: 'Backlog return filing, computation of taxes & interest, legal petition drafting, officer liaison, and REG-22 order tracking.'
    },
    whatIs: {
      definition: 'GST Revocation of Cancellation is the statutory application filed by a taxpayer to reinstate a GST registration cancelled suo-motu by tax authorities.',
      points: [
        'Mandatory statutory remedy under Section 30 of the CGST Act.',
        'Requires filing all pending returns and clearing past tax dues before submission.',
        'Submitted electronically via Form GST REG-21 on the GST portal.',
        'Must be filed within 90 days from the date of the cancellation order.',
        'Restores active GSTIN, unblocks E-Way Bills, and reinstates Input Tax Credit.',
        'Results in the issuance of Form GST REG-22 approving restoration.'
      ],
      closing: 'It rescues your established business identity and prevents permanent closure of your trade.'
    },
    keyCharacteristics: [
      {
        title: 'Form GST REG-21 Filing',
        description: 'The statutory application form filed on the GST portal seeking revocation of the cancellation order.'
      },
      {
        title: 'Mandatory Return Regularization',
        description: 'The portal requires all pending returns up to the cancellation effective date to be filed and taxes paid before REG-21 submission.'
      },
      {
        title: '90 to 180 Days Window',
        description: 'Standard filing window is 90 days from order date, extendable up to an additional 90 days with Joint/Additional Commissioner condonation.'
      },
      {
        title: 'Form GST REG-22 Reinstatement',
        description: 'Upon satisfaction, the tax officer issues Form GST REG-22, instantly switching the GSTIN status back to Active.'
      }
    ],
    importanceBenefits: {
      intro: 'Restoring your cancelled GSTIN via Form REG-21 provides vital legal protections:',
      benefits: [
        {
          title: 'Immediate Resumption of Lawful Trade',
          desc: 'Re-authorizes your business to lawfully issue tax invoices, collect GST from buyers, and clear commercial orders.'
        },
        {
          title: 'Unblocks Input Tax Credit (ITC)',
          desc: 'Unfreezes accumulated Input Tax Credits in your electronic credit ledger for immediate offset against future sales.'
        },
        {
          title: 'Restores E-Way Bill Generation',
          desc: 'Reactivates E-Way Bill portal access, ensuring transport trucks and cargo shipments move without customs seizure.'
        },
        {
          title: 'Re-activates Bank Accounts & Loans',
          desc: 'Prevents commercial banks from freezing current accounts and credit facilities due to inactive GSTIN status.'
        },
        {
          title: 'Protects B2B Customer Contracts',
          desc: 'Enables your corporate buyers to claim input tax credits on your invoices, preventing contract cancellations.'
        }
      ],
      closing: 'It breathes new life into your enterprise, restoring full legal and financial operational capability.'
    },
    package: {
      title: 'GST Revocation of Cancellation Complete Package',
      description: 'End-to-end back-return filing, tax computation, Form REG-21 drafting, and officer follow-up for GSTIN restoration.',
      checklist: [
        'Audit of Cancellation Order (Form GST REG-19) & Defect Analysis',
        'Filing of All Backlog Pending GST Returns (GSTR-1 & GSTR-3B)',
        'Computation of Past Taxes, Interest, and Reduced Late Fees',
        'Drafting Comprehensive Legal Grounds for Revocation Application',
        'Electronic Submission of Form GST REG-21 on GST Common Portal',
        'Liaison with Jurisdictional Proper Officer / Range Superintendent',
        'Drafting Response to Departmental Clarification (Form GST REG-24)',
        'Securing Official Form GST REG-22 Restoration Order'
      ]
    },
    types: [
      {
        title: 'Revocation within 90 Days',
        desc: 'Standard statutory application filed directly before the jurisdictional proper officer within 90 days of REG-19 order.',
        eligibility: 'Cancelled < 90 days ago'
      },
      {
        title: 'Revocation with Condonation of Delay (90-180 Days)',
        desc: 'Special petition requiring condonation approval from the Joint / Additional Commissioner of GST.',
        eligibility: 'Cancelled 90 to 180 days ago'
      },
      {
        title: 'Appeal against Rejection (Form GST APL-01)',
        desc: 'Statutory first appeal before the Appellate Authority if the proper officer rejected the REG-21 revocation.',
        eligibility: 'Revocation rejected cases'
      }
    ],
    comparison: {
      title: 'GST Revocation (REG-21) vs Applying for New GSTIN',
      headers: ['Parameter', 'GST Revocation (REG-21)', 'Applying for New GSTIN'],
      rows: [
        { aspect: 'Old GSTIN & History', col1: 'Restores original GSTIN & credit history', col2: 'New GSTIN; old history permanently lost' },
        { aspect: 'Accumulated ITC', col1: '100% Preserved and restored', col2: 'Old ITC permanently forfeited to government' },
        { aspect: 'Customer Vendor Codes', col1: 'Unchanged; zero vendor re-onboarding', col2: 'Must update GSTIN across all vendors/banks' },
        { aspect: 'Past Tax Liability', col1: 'Regularized systematically', col2: 'Old liability remains active with recovery notices' },
        { aspect: 'Legal Approval', col1: 'Guaranteed upon clearing returns', col2: 'New application often rejected for linked PAN default' }
      ]
    },
    lawsGoverning: {
      actName: 'Central Goods and Services Tax Act, 2017 (Section 30 & Rule 23)',
      authority: 'Jurisdictional State / Central GST Proper Officer & Appellate Authority',
      points: [
        'Section 30 of CGST Act governing revocation of cancellation of registration.',
        'Rule 23 of CGST Rules, 2017 prescribing Form GST REG-21 and REG-22.',
        'Notification No. 38/2023 extending revocation timeline from 30 to 90 days (plus 90 days condonation).',
        'Section 107 governing statutory appeals against rejection orders (Form REG-05).',
        'Mandatory pre-condition: All pending returns up to cancellation date must be filed.'
      ],
      penalties: 'Operating on a cancelled GSTIN constitutes illegal trade, attracting 100% tax penalty and asset seizure.'
    },
    eligibilityRequirements: {
      intro: 'Any taxpayer whose GSTIN was cancelled suo-motu by the tax officer qualifies for revocation:',
      criteria: [
        'GSTIN must have been cancelled suo-motu under Section 29(2) (not voluntary cancellation).',
        'Application must be filed within 90 days (or within 180 days with condonation approval).',
        'All pending returns up to the cancellation date must be fully filed and taxes paid.'
      ],
      documentsRequired: [
        'Copy of Cancellation Order (Form GST REG-19)',
        'Copy of Show Cause Notice (Form GST REG-17)',
        'GST Portal Login Credentials (Username & Password)',
        'Challan receipts of past taxes, interest, and late fees paid',
        'PAN & Aadhaar of Authorized Signatory for DSC / OTP verification',
        'Valid Reason / Affidavit explaining reasons for past non-filing'
      ]
    },
    processSteps: [
      { step: 1, title: 'Case Audit & Backlog Return Filing', desc: 'We examine your cancellation order, compute total overdue taxes/late fees, and file all backlog returns.' },
      { step: 2, title: 'Drafting Legal Grounds & Petition', desc: 'Our tax attorneys draft a comprehensive legal explanation citing medical, technical, or financial hardship grounds.' },
      { step: 3, title: 'Form GST REG-21 Portal Submission', desc: 'We submit Form GST REG-21 on the GST portal using authorized DSC/OTP verification.' },
      { step: 4, title: 'Officer Coordination & Reinstatement', desc: 'We liaise with the jurisdictional range superintendent, resolve queries, and secure the Form GST REG-22 Restoration Order.' }
    ],
    postRegistrationCompliance: {
      intro: 'Key obligations immediately after GSTIN restoration:',
      points: [
        'File all pending returns for the period between the cancellation order date and the revocation order date within 30 days.',
        'Regularize ongoing monthly/quarterly GSTR-1 and GSTR-3B filings on or before due dates.',
        'Notify your bank, suppliers, and buyers that your GSTIN has been successfully reinstated.',
        'Verify your electronic credit and cash ledgers for accurate restored balances.'
      ]
    },
    timelines: {
      tat: '7 to 15 Working Days (depending on departmental officer response)',
      delayFactors: ['Multiple years of backlog pending returns', 'Officer issuing Form REG-23 notice requiring personal hearing', 'Approaching Joint Commissioner for delay condonation (90-180 days)'],
      speedAssurance: 'Our tax legal team directly follows up with range officers to expedite REG-22 order issuance.'
    },
    certification: {
      issuingAuthority: 'Jurisdictional Proper Officer / GST Commissionerate',
      validity: 'Permanent / Active GSTIN restored',
      legalSignificance: 'Official statutory order revoking cancellation and reinstating the 15-digit GSTIN with full legal standing.',
      contents: ['Form GST REG-22 Order Number', 'GSTIN & Legal Business Name', 'Effective Date of Revocation', 'Jurisdictional Ward / Circle Code', 'Digital Signature & Official Seal of Tax Officer']
    },
    fees: {
      govtFee: '₹0 (Portal filing fee is Nil; pending taxes, interest & late fees paid directly to government)',
      professionalFee: '₹2,499/- only (Complete Form REG-21 drafting, filing, and officer follow-up package)',
      transparencyNote: 'Fixed price ₹2,499 with zero hidden charges.'
    },
    taxation: {
      directTaxImpact: 'Professional fees for GST revocation and tax regularization are 100% tax-deductible operational business expenses.',
      gstImplications: 'Restores full access to pre-cancellation accumulated Input Tax Credit (ITC), preventing permanent tax loss.',
      deductionsOrExemptions: 'Allows business to regularize past defaults under statutory amnesty provisions where applicable.'
    },
    whyUs: [
      'Over 3,200+ cancelled GSTINs successfully restored across all state and central jurisdictions.',
      'Comprehensive support covering backlog return filing, interest calculation, and legal petition drafting.',
      'Direct representation and liaison before range superintendents and assistant commissioners.',
      'Specialized handling of delay condonation applications (90 to 180 days window).',
      'Dedicated tax manager keeping you updated at every stage of the restoration process.'
    ],
    faqs: [
      { q: 'What is GST Revocation of Cancellation?', a: 'GST Revocation is a statutory legal procedure under Section 30 of the CGST Act to reverse a cancellation order passed by the tax department and restore your original 15-digit GSTIN to active status.' },
      { q: 'What is the time limit to apply for GST revocation?', a: 'Under amended GST rules, you must file Form GST REG-21 within 90 days from the date of the cancellation order (Form REG-19). This can be extended up to 180 days with approval from the Joint/Additional Commissioner.' },
      { q: 'Can I apply for revocation without filing past pending returns?', a: 'No. The GST portal strictly requires that all pending returns up to the effective date of cancellation must be filed, and all overdue taxes, interest, and late fees cleared before Form REG-21 can be submitted.' },
      { q: 'What happens to my accumulated Input Tax Credit (ITC) after revocation?', a: 'Once your GSTIN is restored via Form GST REG-22, all your accumulated Input Tax Credit sitting in your electronic credit ledger is fully restored and available for future tax offset.' },
      { q: 'Why is revocation better than applying for a fresh GST number?', a: 'Revocation preserves your original GSTIN, saves your vendor relationships, unfreezes your accumulated ITC, and avoids rejection of new applications due to PAN-linked historical defaults.' },
      { q: 'How do I start the revocation process for my cancelled GSTIN?', a: 'Click "Restore Cancelled GSTIN" to share your cancellation order with our tax legal team for an immediate backlog assessment and restoration roadmap.' }
    ],
    relatedServices: [
      { name: 'GST Return Filing', desc: 'Monthly & quarterly GSTR-1 and GSTR-3B filing with ITC reconciliation.', price: '₹499/Month' },
      { name: 'GST Notice Response', desc: 'Legal drafting and representation for ASMT-10 and DRC-01 notices.', price: '₹1,499' },
      { name: 'GST Registration', desc: 'New 15-digit GSTIN allotment in 3-7 working days.', price: '₹699' },
      { name: 'Income Tax Return (ITR)', desc: 'Accurate tax filing for individuals, firms, and companies.', price: '₹499' },
      { name: 'ROC Annual Filing', desc: 'Mandatory annual MCA compliance (AOC-4 & MGT-7) for companies.', price: '₹1,999' },
      { name: 'DIR-3 KYC Filing', desc: 'Annual Director KYC compliance on MCA portal.', price: '₹999' }
    ]
  },
  {
    slug: 'gst-notice',
    name: 'GST Notice Response & Representation',
    category: 'GST & Tax',
    parentCategory: 'Registration & License',
    price: '₹1,499',
    priceType: 'fixed',
    priceDisplay: '₹1,499/- only',
    heroPriceHook: 'Expert Legal Drafting & CA Representation for GST Notices | Starting @ ₹1,499/-',
    specialCallout: 'Chartered Accountant & Legal Desk',
    urgencyText: 'Respond within 30 days to prevent bank attachment',
    ctaText: 'Respond to GST Notice',
    metaTitle: 'GST Notice Response Online @ ₹1,499 | ASMT-10, DRC-01, SCN Reply',
    metaDescription: 'Get expert CA response for GST notices: ASMT-10, DRC-01, DRC-01A, Form REG-17 & Section 73/74 demand notices at ₹1,499. Avoid bank attachment and penalties.',
    seoKeywords: ['GST notice reply', 'ASMT-10 notice response', 'DRC-01 show cause notice reply', 'GST notice ₹1499', 'GST scrutiny reply', 'GSTR-3B vs GSTR-2B mismatch notice'],
    heroIntro: 'A GST Notice Response, governed under Sections 61, 73, 74, 122, and 129 of the Central Goods and Services Tax (CGST) Act, 2017, is the formal statutory legal reply drafted and submitted by a taxpayer to rebut departmental inquiries, scrutiny findings (Form ASMT-10), tax demand intimations (Form DRC-01A), Show Cause Notices (Form DRC-01), or registration cancellation threats (Form REG-17). Timely and legally sound submissions backed by reconciliations, judicial precedents, and documentary evidence prevent adverse ex-parte assessment orders, heavy penal interest, and freezing of corporate bank accounts.',
    keyTags: ['Form ASMT-10 Scrutiny', 'Form DRC-01 Show Cause Notice', 'Form DRC-01A Intimation', 'GSTR-3B vs GSTR-2A/2B Mismatches', 'Ex-Parte Order Protection'],
    overview: {
      p1: 'With the deployment of AI-driven analytics by the GST Network (GSTN) and Directorate General of Analytics and Risk Management (DGARM), the tax department automatically flags discrepancies between GSTR-1 and GSTR-3B (turnover mismatches), GSTR-3B and GSTR-2B (excess ITC claimed), and E-Way Bills vs GSTR-1.',
      p2: 'Ignoring a GST notice or filing an amateur reply leads to automated confirmation of demand under Section 73/74 with 100% penalties, 18-24% interest, and recovery notices under Section 79 leading to bank account attachment. Akshay B2B Solutions provides in-depth data reconciliation, statutory legal drafting by seasoned Chartered Accountants and tax lawyers, and electronic submission of replies on the GST portal.',
    },
    registrationProcessOverview: {
      status: 'Statutory Defense for Inquiries, Scrutiny & Demand Notices',
      governingAuthority: 'Jurisdictional State / Central GST Proper Officer & Audit Wings',
      summary: 'Analyzing the statutory notice, reconciling underlying purchase/sales ledgers and e-invoices, computing legal grounds based on GST provisions and High Court rulings, drafting Form ASMT-11 / DRC-06 replies, and filing on the GST portal.',
      postApproval: 'Issuance of official Form ASMT-12 / DRC-05 Drop of Proceedings Order or closure receipt.',
      assistanceRole: 'Data reconciliation, legal grounds drafting, CA certification, portal submission, and personal hearing representation.'
    },
    whatIs: {
      definition: 'A GST Notice Response is a formal legal submission prepared by tax professionals addressing queries, discrepancies, or tax demands raised by GST authorities.',
      points: [
        'Covers Scrutiny of Returns (Form ASMT-10 under Section 61).',
        'Covers Intimation of Tax Demand (Form DRC-01A under Section 73/74).',
        'Covers Formal Show Cause Notices (Form DRC-01 under Section 73/74).',
        'Covers Registration Cancellation Notices (Form GST REG-17).',
        'Must be submitted within prescribed deadlines (typically 15 to 30 days).',
        'Provides factual reconciliations and legal case laws to drop tax demands.'
      ],
      closing: 'It protects your business from arbitrary tax demands, severe penalties, and coercive bank attachments.'
    },
    keyCharacteristics: [
      {
        title: 'Form ASMT-11 Scrutiny Reply',
        description: 'Statutory reply filed on the GST portal against ASMT-10 scrutiny notices explaining discrepancy parameters.'
      },
      {
        title: 'Form DRC-06 SCN Defense',
        description: 'Comprehensive legal defense filed against Form DRC-01 show-cause demand notices before the adjudicating authority.'
      },
      {
        title: 'ITC Mismatch Reconciliations',
        description: 'Detailed invoice-by-invoice reconciliation proving eligibility of Input Tax Credit claimed against supplier defaults.'
      },
      {
        title: 'Personal Hearing Representation',
        description: 'Statutory right to present verbal arguments and evidence before the tax officer under principles of natural justice.'
      }
    ],
    importanceBenefits: {
      intro: 'Filing a professional legal reply to GST notices delivers decisive safeguards:',
      benefits: [
        {
          title: 'Total Dropping of Bogus Tax Demands',
          desc: 'Our evidence-backed replies ensure tax officers accept reconciliations and issue Form ASMT-12 dropping proceedings.'
        },
        {
          title: 'Protection from Bank Account Freezing',
          desc: 'Prevents tax authorities from issuing Section 79 recovery notices to your commercial banks to attach corporate funds.'
        },
        {
          title: 'Avoids Hefty Penalties & Compounding Interest',
          desc: 'Shields your enterprise from 100% tax evasion penalties under Section 74 and mandatory 18% annual interest.'
        },
        {
          title: 'Preserves Active GSTIN Status',
          desc: 'Successfully counters Form REG-17 notices to prevent suspension or suo-motu cancellation of your GST number.'
        },
        {
          title: 'Strong Legal Record for Future Appeals',
          desc: 'Establishes a solid factual foundation on record if the matter later proceeds to the Appellate Authority or High Court.'
        }
      ],
      closing: 'It turns a high-risk tax dispute into a clean, legally resolved compliance closure.'
    },
    package: {
      title: 'GST Notice Response & Representation Package',
      description: 'End-to-end notice analysis, ledger reconciliation, legal reply drafting, and electronic portal submission.',
      checklist: [
        'In-Depth Legal Analysis of GST Notice & Department Allegations',
        'Turnover & ITC Reconciliations (GSTR-1 vs GSTR-3B, GSTR-3B vs GSTR-2B)',
        'Collection of Supporting Tax Invoices, E-Way Bills & Bank Statements',
        'Drafting Fact-Based Legal Reply with High Court & Supreme Court Precedents',
        'Preparation of Statutory Reply Forms (Form ASMT-11, DRC-06, REG-18)',
        'Electronic Submission on GST Common Portal via DSC / OTP',
        'Personal Hearing Preparation & Departmental Representation Strategy',
        'Tracking Issuance of Form ASMT-12 / DRC-05 Closure Orders'
      ]
    },
    types: [
      {
        title: 'Scrutiny Notice (Form ASMT-10 / ASMT-11)',
        desc: 'For discrepancies between GSTR-1 and GSTR-3B, or excess ITC claims against GSTR-2A/2B.',
        eligibility: 'ASMT-10 recipients'
      },
      {
        title: 'Show Cause Notice (Form DRC-01 / DRC-06)',
        desc: 'Formal tax demand notice issued under Section 73 (non-fraud) or Section 74 (fraud/wilful misstatement).',
        eligibility: 'DRC-01 demand recipients'
      },
      {
        title: 'Pre-Notice Intimation (Form DRC-01A)',
        desc: 'Early intimation of tax liability allowing voluntary payment or submission of initial objections.',
        eligibility: 'DRC-01A recipients'
      },
      {
        title: 'Registration Cancellation Notice (Form REG-17 / REG-18)',
        desc: 'Show cause notice threatening cancellation of GSTIN due to non-filing or address non-existence.',
        eligibility: 'REG-17 recipients'
      }
    ],
    comparison: {
      title: 'Professional CA Notice Reply vs Amateur / Delayed Response',
      headers: ['Parameter', 'Akshay B2B CA Legal Reply', 'Amateur / Delayed Response'],
      rows: [
        { aspect: 'Legal Grounds & Precedents', col1: 'Backed by High Court rulings & circulars', col2: 'Generic, emotional or non-legal explanations' },
        { aspect: 'Data Reconciliation', col1: 'Mathematical invoice-by-invoice audit', col2: 'Incomplete or unverified figures' },
        { aspect: 'Outcome Likelihood', col1: 'Form ASMT-12 Drop of Demand Order', col2: 'Ex-parte demand order with 100% penalty' },
        { aspect: 'Bank Attachment Risk', col1: 'Zero risk; complete legal stay', col2: 'High risk of Section 79 account freeze' },
        { aspect: 'Appeal Preparedness', col1: 'Flawless evidentiary trail established', col2: 'Weak record making future appeal difficult' }
      ]
    },
    lawsGoverning: {
      actName: 'Central Goods and Services Tax Act, 2017 (Sections 61, 73, 74, 107 & 122)',
      authority: 'Central Board of Indirect Taxes and Customs (CBIC) & State GST Commissionerates',
      points: [
        'Section 61 governing scrutiny of returns and issuance of Form ASMT-10.',
        'Section 73 governing determination of tax not paid for non-fraud cases.',
        'Section 74 governing determination of tax not paid for fraud/suppression cases.',
        'Section 75 governing general provisions relating to determination of tax and personal hearings.',
        'Section 79 governing recovery of tax including garnishee orders to commercial banks.'
      ],
      penalties: 'Failure to reply leads to confirmation of ex-parte tax demand, 100% penalties, and bank account freeze.'
    },
    eligibilityRequirements: {
      intro: 'Any taxpayer who has received a statutory notice or intimation from GST authorities:',
      criteria: [
        'Recipient of ASMT-10, DRC-01A, DRC-01, REG-17, GSTR-3A, or audit notices.',
        'Must possess copy of the notice along with the DIN (Document Identification Number).',
        'Must have access to underlying sales, purchase, and banking records.'
      ],
      documentsRequired: [
        'Copy of the GST Notice (PDF download from portal with DIN number)',
        'GSTR-1, GSTR-3B, and GSTR-2B summary reports for the disputed tax period',
        'Underlying Purchase & Sales Invoices, E-Way Bills & Delivery Challans',
        'Bank Statement proving payment of invoices and taxes',
        'GST Common Portal Login Credentials (Username & Password)'
      ]
    },
    processSteps: [
      { step: 1, title: 'Notice Audit & Discrepancy Quantification', desc: 'We examine the notice, verify the DIN, and mathematically quantify the disputed tax, interest, and penalty amounts.' },
      { step: 2, title: 'Ledger Reconciliation & Evidence Gathering', desc: 'Our CAs reconcile your invoices against GSTR-2B and compile supporting proof (e-invoices, bank entries).' },
      { step: 3, title: 'Drafting Legal Grounds & Case Law Citation', desc: 'We draft a comprehensive legal submission citing relevant CBIC circulars and High Court judgments.' },
      { step: 4, title: 'Portal Filing & Hearing Assistance', desc: 'We upload the reply (Form ASMT-11 / DRC-06) on the GST portal and provide speaking notes for personal hearings.' }
    ],
    postRegistrationCompliance: {
      intro: 'Key obligations following notice reply submission:',
      points: [
        'Track the GST portal status for issuance of Form ASMT-12 (Drop of proceedings) or Form DRC-05.',
        'If personal hearing is scheduled, attend with authorized CA/legal counsel representation.',
        'If any undisputed minor differential tax is accepted, pay voluntarily via Form DRC-03 to minimize interest.',
        'Maintain all reply dossiers and submission acknowledgments for a minimum of 6 years.'
      ]
    },
    timelines: {
      tat: '3 to 5 Working Days',
      delayFactors: ['Complex multi-year scrutiny spanning multiple tax periods', 'Delayed sharing of supplier invoice ledgers', 'Imminent notice expiration requiring urgent same-day drafting'],
      speedAssurance: 'We prioritize urgent notices with impending 15/30-day deadlines to ensure immediate legal protection.'
    },
    certification: {
      issuingAuthority: 'Proper Officer / Adjudicating Authority, GST Commissionerate',
      validity: 'Statutory order resolving the specific notice proceedings',
      legalSignificance: 'Official statutory order dropping tax demands or concluding departmental scrutiny proceedings.',
      contents: ['Order Reference Number & DIN', 'Taxpayer Legal Name & GSTIN', 'Summary of Reply Considered', 'Findings & Drop of Demand Declaration (ASMT-12 / DRC-05)', 'Digital Signature & Seal of Proper Officer']
    },
    fees: {
      govtFee: '₹0 (Portal reply filing fee is Nil)',
      professionalFee: 'Starting @ ₹1,499/- (Custom quote based on complexity, number of tax periods, and disputed amount)',
      transparencyNote: 'Upfront fixed quote provided after initial notice assessment with zero hidden charges.'
    },
    taxation: {
      directTaxImpact: 'Professional fees paid to chartered accountants and lawyers for GST notice defense are 100% tax-deductible business expenses.',
      gstImplications: 'Successfully defending notices preserves Input Tax Credits and prevents arbitrary cash tax payouts.',
      deductionsOrExemptions: 'Saves the enterprise from catastrophic non-deductible penalties under Section 74 and penal interest.'
    },
    whyUs: [
      'Over 4,500+ GST notices successfully resolved with zero adverse demand confirmation.',
      'Team of seasoned Chartered Accountants, former tax officers, and High Court tax advocates.',
      'Extensive library of winning legal replies citing latest High Court & Supreme Court precedents.',
      'Fast-track 24-hour turnaround for emergency notices near statutory expiry.',
      'Complete end-to-end support from initial ASMT-11 reply to Appellate Tribunal appeals.'
    ],
    faqs: [
      { q: 'What is a GST Scrutiny Notice (Form ASMT-10)?', a: 'Form ASMT-10 is a scrutiny notice issued under Section 61 when the GST department automated system detects discrepancies between your sales returns (GSTR-1), summary tax returns (GSTR-3B), or input credit statements (GSTR-2B).' },
      { q: 'What is the difference between Form ASMT-10 and Form DRC-01?', a: 'ASMT-10 is an initial inquiry notice pointing out discrepancies. If not replied to satisfactorily, the officer escalates the matter to Form DRC-01 (Show Cause Notice), which is a formal legal demand for tax, interest, and penalty.' },
      { q: 'What is the time limit to reply to a GST notice?', a: 'Typically, taxpayers are given 15 to 30 days from the date of receipt of the notice to submit their reply. Failing to reply within this time leads to an ex-parte demand order passed against the business.' },
      { q: 'What happens if I ignore a GST notice?', a: 'Ignoring a notice results in an ex-parte assessment order under Section 73/74 confirming the full tax demand, 100% penalty, 18-24% interest, followed by Section 79 garnishee notices attaching your bank accounts.' },
      { q: 'Can a notice for ITC mismatch (GSTR-3B vs GSTR-2A/2B) be defended?', a: 'Yes! High Courts have repeatedly held that genuine buyers cannot be denied ITC solely due to supplier filing delays if the buyer holds a valid tax invoice, proof of payment, and transport records. We draft strong legal replies citing these rulings.' },
      { q: 'How do I get my GST notice analyzed today?', a: 'Click "Respond to GST Notice" to upload your notice PDF. Our senior tax team will analyze the allegations and share a comprehensive strategy and drafting roadmap within 2 hours.' }
    ],
    relatedServices: [
      { name: 'GST Return Filing', desc: 'Monthly & quarterly GSTR-1 and GSTR-3B filing with ITC reconciliation.', price: '₹499/Month' },
      { name: 'GST Annual Return (GSTR-9)', desc: 'Annual reconciliation and statutory return filing on GST portal.', price: '₹1,499' },
      { name: 'GST Revocation', desc: 'Restore cancelled GSTIN through Form REG-21 revocation filing.', price: '₹2,499' },
      { name: 'Income Tax Return (ITR)', desc: 'Accurate tax filing for individuals, firms, and companies.', price: '₹499' },
      { name: 'TDS Return Filing', desc: 'Quarterly Form 24Q, 26Q, and 27Q filing with Form 16 issuance.', price: '₹1,499' },
      { name: 'ROC Annual Filing', desc: 'Mandatory annual MCA compliance (AOC-4 & MGT-7) for companies.', price: '₹1,999' }
    ]
  },
  {
    slug: 'income-tax-return-itr',
    name: 'Income Tax Return (ITR)',
    category: 'GST & Tax',
    parentCategory: 'Registration & License',
    price: '₹499',
    priceType: 'fixed',
    priceDisplay: 'Starting @ ₹499/-',
    heroPriceHook: 'Fast, Accurate & Maximum Tax Refund ITR Filing | Starting @ ₹499/-',
    specialCallout: 'Chartered Accountant Assisted Filing',
    urgencyText: 'File before 31st July to avoid Section 234F late fees',
    ctaText: 'File Income Tax Return',
    metaTitle: 'Income Tax Return (ITR) Filing Online @ ₹499 | Fast Tax Refund',
    metaDescription: 'File your Income Tax Return (ITR-1, 2, 3, 4, 5, 6) online starting at ₹499. Maximize tax deductions, claim TDS refunds, and get CA-certified e-filing fast.',
    seoKeywords: ['income tax return filing', 'ITR online filing ₹499', 'ITR-1 Sahaj filing', 'ITR-4 Sugam presumptive tax', 'claim TDS refund ITR', 'business ITR filing'],
    heroIntro: 'An Income Tax Return (ITR), governed under Section 139 of the Income Tax Act, 1961 by the Central Board of Direct Taxes (CBDT), is the mandatory annual statutory declaration of total income earned, deductions claimed, taxes paid (TDS/Advance Tax), and tax liability or refund due for a given financial year. Every salaried individual, freelance professional, proprietary firm, partnership, LLP, and corporate entity earning income above exemption thresholds must file their ITR before statutory deadlines to claim tax refunds, carry forward business losses, and avoid Section 234F penal late fees.',
    keyTags: ['Section 139 Income Tax Act', 'ITR-1, 2, 3, 4, 5, 6 Forms', 'Claim Maximum TDS Refunds', 'AIS / TIS & Form 26AS Matching', 'Carry Forward Business Losses'],
    overview: {
      p1: 'Filing an accurate Income Tax Return is an essential civic and financial duty. It reconciles an individual or enterprise total income across salary, house property, business/profession, capital gains, and other sources, optimizing allowable deductions under Chapter VI-A (80C, 80D, 80G, etc.).',
      p2: 'Under updated income tax rules, the e-filing portal automatically cross-verifies reported figures against the Annual Information Statement (AIS) and Taxpayer Information Summary (TIS). Filing incorrect returns triggers Section 143(1) intimation notices and interest under Sections 234A, 234B, and 234C. Akshay B2B Solutions provides in-depth AIS/26AS reconciliation, maximum tax deductions, and CA-verified ITR e-filing with fast refund processing.',
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
      contents: ['Acknowledgment Number (e-Filing Acknowledgment)', 'Assessment Year & Financial Year', 'Gross Total Income & Taxable Income', 'Total Tax Paid (TDS/Advance Tax) & Refund Due', 'Electronic Timestamp & Digital Verification Seal']
    },
    fees: {
      govtFee: '₹0 (Official portal filing fee is Nil, unless Section 234F late fees apply for delayed filing)',
      professionalFee: 'Starting @ ₹499/- (ITR-1 Salaried: ₹499 | ITR-2 Capital Gains: ₹999 | ITR-3/4 Business: ₹1,499)',
      transparencyNote: 'Upfront transparent pricing with zero hidden charges.'
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
      { q: 'Who is required to file an Income Tax Return in India?', a: 'Any individual whose gross total income exceeds the basic exemption limit (₹2.5 Lakhs under Old Regime, ₹3 Lakhs under New Regime), or who meets specific criteria such as holding foreign assets, spending > ₹2 Lakhs on foreign travel, or having TDS > ₹25,000, must file an ITR.' },
      { q: 'What is the last date to file Income Tax Return for FY 2024-25 (AY 2025-26)?', a: 'For non-audit individual taxpayers, salaried employees, and firms, the statutory due date is 31st July. For corporate entities and businesses requiring tax audit, the due date is 31st October.' },
      { q: 'What happens if I miss the 31st July ITR deadline?', a: 'You can file a "Belated Return" under Section 139(4) up to 31st December, subject to a statutory late fee under Section 234F (₹5,000 for income > ₹5L; ₹1,000 for income < ₹5L) and 1% monthly penal interest under Section 234A.' },
      { q: 'How long does it take to receive an Income Tax refund?', a: 'Once the ITR is e-verified, the Central Processing Centre (CPC Bengaluru) typically processes the return and credits the refund directly into your pre-validated bank account within 7 to 21 working days.' },
      { q: 'Which regime is better: Old Tax Regime or New Tax Regime?', a: 'The New Tax Regime offers lower tax slab rates but disallows most deductions (80C, 80D, HRA). The Old Tax Regime allows extensive deductions. Our CA team calculates your tax under both regimes and recommends the option with lower tax outflow.' },
      { q: 'How do I start my ITR filing today with Akshay B2B Solutions?', a: 'Click "File Income Tax Return" to upload your Form 16 or bank statements. Our CA team will reconcile your AIS/26AS and file your return within hours.' }
    ],
    relatedServices: [
      { name: 'TDS Return Filing', desc: 'Quarterly Form 24Q, 26Q, and 27Q filing with Form 16 issuance.', price: '₹1,499' },
      { name: 'GST Return Filing', desc: 'Monthly & quarterly GSTR-1 and GSTR-3B filing with ITC reconciliation.', price: '₹499/Month' },
      { name: 'ROC Annual Filing', desc: 'Mandatory annual MCA compliance (AOC-4 & MGT-7) for companies.', price: '₹1,999' },
      { name: 'DIN KYC Filing', desc: 'Annual Director KYC compliance on MCA portal.', price: '₹999' },
      { name: 'GST Registration', desc: 'New 15-digit GSTIN allotment in 3-7 working days.', price: '₹699' },
      { name: 'Professional Tax Registration', desc: 'State statutory professional tax enrollment and return filing.', price: '₹1,999' }
    ]
  },
  {
    slug: 'tds-return',
    name: 'TDS Return Filing',
    category: 'GST & Tax',
    parentCategory: 'Registration & License',
    price: '₹1,499',
    priceType: 'fixed',
    priceDisplay: '₹1,499/- only',
    heroPriceHook: 'Quarterly Form 24Q, 26Q, 27Q & 27EQ TDS Filing with Form 16/16A Generation | ₹1,499/-',
    specialCallout: 'TRACES Portal Verification',
    urgencyText: 'Avoid ₹200/day late fees under Section 234E',
    ctaText: 'File TDS Return',
    metaTitle: 'TDS Return Filing Online @ ₹1,499 | Form 24Q, 26Q, 27Q on TRACES',
    metaDescription: 'File quarterly TDS returns online at ₹1,499. Form 24Q (Salary), 26Q (Non-Salary), 27Q (NRI) & 27EQ (TCS) on TRACES portal. Instant Form 16/16A generation.',
    seoKeywords: ['TDS return filing', 'Form 24Q filing', 'Form 26Q filing', 'TDS return ₹1499', 'TRACES portal filing', 'Form 16 generation online'],
    heroIntro: 'A TDS Return Filing, governed under Section 200(3) of the Income Tax Act, 1961 read with Rule 31A of the Income Tax Rules, is the mandatory quarterly statutory declaration submitted by a Tax Deductor (holding a Tax Deduction and Collection Account Number or TAN) to the Income Tax Department through the TRACES portal. Every corporate employer, partnership firm, LLP, proprietorship (under tax audit), and government office deducting Tax Deducted at Source (TDS) on salaries, contractor payments, rent, professional fees, or commissions must file quarterly TDS returns to credit tax payments to deductees and avoid compounding late fees of ₹200 per day under Section 234E.',
    keyTags: ['Section 200(3) Income Tax Act', 'Form 24Q (Salary) & 26Q (Non-Salary)', 'TRACES Portal & Challan 281', 'Form 16 & Form 16A Issuance', 'Section 234E Penalty Shield'],
    overview: {
      p1: 'The Tax Deducted at Source (TDS) framework acts as a vital revenue-collection pillar for the Government of India, requiring deductors to withhold specified tax percentages at the point of making payments (salaries, contractor invoices, professional fees, rent, commissions) and deposit the funds via Challan ITNS 281 before filing quarterly returns.',
      p2: 'Failing to file quarterly TDS returns on time triggers automated daily late fees of ₹200 per day under Section 234E, penalty up to ₹1,00,000 under Section 271H, 1.5% monthly interest on un-deposited TDS, and causes deductees to lose their tax credits in Form 26AS/AIS. Akshay B2B Solutions provides in-depth PAN verification, challan matching, FVU file validation, and seamless TRACES filing with Form 16/16A certificate generation.',
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
      contents: ['Provisional Receipt Number (PRN / Token Number)', 'TAN Number & Deductor Legal Name', 'Quarter & Financial Year (e.g. Q1 FY 2024-25)', 'Total TDS Deducted & Deposited', 'Digital Signature & Official NSDL Timestamp']
    },
    fees: {
      govtFee: '₹0 (Portal filing fee is Nil, unless Section 234E late fees apply for delayed filing)',
      professionalFee: '₹1,499/- only (Complete quarterly filing package per form; Form 16 bulk generation included)',
      transparencyNote: 'Fixed price ₹1,499 with zero hidden charges.'
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
      { q: 'Who is required to file quarterly TDS returns in India?', a: 'Any person or entity holding a valid TAN who has deducted Tax Deducted at Source (TDS) or collected Tax Collected at Source (TCS) on payments like salaries, contractor fees, professional charges, rent, or commission must file quarterly TDS returns.' },
      { q: 'What are the quarterly due dates for filing TDS returns?', a: 'Q1 (April - June): 31st July | Q2 (July - September): 31st October | Q3 (October - December): 31st January | Q4 (January - March): 31st May.' },
      { q: 'What is the late fee for delayed TDS return filing?', a: 'Under Section 234E of the Income Tax Act, a mandatory late fee of ₹200 per day is levied for every day the return is delayed, up to the total amount of TDS deducted in that quarter.' },
      { q: 'What is the difference between Form 16 and Form 16A?', a: 'Form 16 is an annual TDS certificate issued by employers to employees for salary payments (Section 192). Form 16A is a quarterly TDS certificate issued for non-salary payments like contractor bills, professional fees, and rent.' },
      { q: 'What is a TDS Correction Return?', a: 'If errors occur in the original filed return—such as incorrect deductee PAN, wrong challan CIN, incorrect amount, or wrong section code—a TDS Correction Statement is filed on the TRACES portal to rectify the data.' },
      { q: 'How do I start TDS return filing with Akshay B2B Solutions?', a: 'Click "File TDS Return" to share your monthly challans and payment ledgers with our direct tax desk for instant FVU validation and filing.' }
    ],
    relatedServices: [
      { name: 'Income Tax Return (ITR)', desc: 'Accurate tax filing for individuals, firms, and companies.', price: '₹499' },
      { name: 'GST Return Filing', desc: 'Monthly & quarterly GSTR-1 and GSTR-3B filing with ITC reconciliation.', price: '₹499/Month' },
      { name: 'ROC Annual Filing', desc: 'Mandatory annual MCA compliance (AOC-4 & MGT-7) for companies.', price: '₹1,999' },
      { name: 'DIN KYC Filing', desc: 'Annual Director KYC compliance on MCA portal.', price: '₹999' },
      { name: 'GST Registration', desc: 'New 15-digit GSTIN allotment in 3-7 working days.', price: '₹699' },
      { name: 'Professional Tax Registration', desc: 'State statutory professional tax enrollment and return filing.', price: '₹1,999' }
    ]
  },
  {
    slug: 'professional-tax-registration',
    name: 'Professional Tax Registration & Filing',
    category: 'GST & Tax',
    parentCategory: 'Registration & License',
    price: '₹1,999',
    priceType: 'fixed',
    priceDisplay: '₹1,999/- only',
    heroPriceHook: 'State Professional Tax Registration (PTEC & PTRC) Online | ₹1,999/- All-Inclusive',
    specialCallout: 'State Commercial Tax Department',
    urgencyText: 'Mandatory for employers within 30 days of hiring',
    ctaText: 'Apply for Professional Tax',
    metaTitle: 'Professional Tax Registration Online @ ₹1,999 | PTEC & PTRC Certificate',
    metaDescription: 'Apply for Professional Tax registration online at ₹1,999. Get PTEC (Entity/Director) and PTRC (Employer) certificates in Maharashtra, Karnataka, WB, Telangana & all states.',
    seoKeywords: ['professional tax registration', 'PTEC certificate online', 'PTRC registration', 'professional tax ₹1999', 'professional tax Maharashtra', 'PT employer registration'],
    heroIntro: 'A Professional Tax Registration, enacted under Article 276 of the Constitution of India and administered by State Commercial Tax Departments under respective State Professional Tax Acts (e.g., Maharashtra, Karnataka, West Bengal, Telangana, Tamil Nadu, Gujarat), is a mandatory state-level statutory tax levied on professions, trades, callings, and employments. Every self-employed professional, business entity, and corporate employer must obtain two mandatory registrations: PTEC (Professional Tax Enrolment Certificate for the business/directors) and PTRC (Professional Tax Registration Certificate for deducting and remitting tax from employees).',
    keyTags: ['Article 276 Constitution of India', 'PTEC (Enrolment Certificate)', 'PTRC (Registration Certificate)', 'State Commercial Tax Portal', 'Employee Payroll Compliance'],
    overview: {
      p1: 'Professional Tax is a state-specific direct tax calculated on a progressive monthly salary slab basis (capped at a constitutional maximum of ₹2,500 per annum per individual). Business entities and employers operating in states with active Professional Tax laws must mandatorily enroll under both PTEC and PTRC schedules.',
      p2: 'Operating without Professional Tax registration attracts compounding monthly interest (1.25% to 2%), heavy non-enrollment penalties (up to ₹5 per day / 10% of tax), and blocks state government vendor empanelment and municipal renewals. Akshay B2B Solutions assists enterprises with multi-state PTEC/PTRC portal filings, payroll slab mapping, monthly challan generation, and annual return filings.',
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
      contents: ['PTEC / PTRC Registration Number (11 or 12 Digits)', 'Legal Business Name & Trade Name', 'Constitution of Business & Registered Address', 'Date of Enrolment & Statutory Jurisdiction Ward', 'Digital Signature & Official State Emblem']
    },
    fees: {
      govtFee: 'Variable statutory registration fee charged by state portal (typically Nil or nominal ₹100-₹500)',
      professionalFee: '₹1,999/- only (Complete PTEC + PTRC dual registration package)',
      transparencyNote: 'Fixed price ₹1,999 with zero hidden charges.'
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
      { q: 'What is the difference between PTEC and PTRC?', a: 'PTEC (Professional Tax Enrolment Certificate) is paid by the business entity and its directors/partners for their own right to carry on trade. PTRC (Professional Tax Registration Certificate) is obtained by the employer to deduct professional tax from employee salaries and deposit it with the state government.' },
      { q: 'Is Professional Tax applicable across all states in India?', a: 'No. Professional Tax is only applicable in states that have enacted professional tax legislation, including Maharashtra, Karnataka, West Bengal, Andhra Pradesh, Telangana, Tamil Nadu, Gujarat, Kerala, Odisha, and Madhya Pradesh. States like Delhi, Haryana, and Rajasthan do not levy professional tax.' },
      { q: 'What is the maximum professional tax that can be levied in a year?', a: 'Under Article 276(2) of the Constitution of India, the maximum professional tax that any state government can levy on an individual is capped at ₹2,500 per annum.' },
      { q: 'Is professional tax deductible under Income Tax?', a: 'Yes! Professional tax paid by an employee or self-employed individual is 100% deductible from gross taxable income under Section 16(iii) of the Income Tax Act, 1961.' },
      { q: 'What is the penalty for not obtaining Professional Tax registration?', a: 'Failing to register within 30 days of liability attracts state statutory penalties (e.g., ₹5/day or 10% of tax), compounding monthly interest (1.25% to 2%), and potential recovery notices from commercial tax officers.' },
      { q: 'How do I apply for Professional Tax registration with Akshay B2B Solutions?', a: 'Click "Apply for Professional Tax" to share your company details and state location with our compliance team. We will process your PTEC and PTRC certificates within 3 to 7 working days.' }
    ],
    relatedServices: [
      { name: 'Shop and Establishment', desc: 'State commercial establishment trade license.', price: '₹1,499' },
      { name: 'EPF Registration', desc: 'Employees Provident Fund registration for organizations with 20+ employees.', price: '₹1,999' },
      { name: 'ESI Registration', desc: 'Employees State Insurance registration for medical social security.', price: '₹1,999' },
      { name: 'TDS Return Filing', desc: 'Quarterly Form 24Q, 26Q, and 27Q filing with Form 16 issuance.', price: '₹1,499' },
      { name: 'Income Tax Return (ITR)', desc: 'Accurate tax filing for individuals, firms, and companies.', price: '₹499' },
      { name: 'GST Registration', desc: 'New 15-digit GSTIN allotment in 3-7 working days.', price: '₹699' }
    ]
  }
];

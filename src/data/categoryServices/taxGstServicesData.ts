import { ServiceDetailConfig } from './types';

export const TAX_GST_SERVICES: ServiceDetailConfig[] = [
  // 1. GST Registration — ₹699 + Govt. Fee
  {
    slug: 'gst-registration',
    name: 'GST Registration',
    category: 'GST & Tax',
    parentCategory: 'Tax & Compliance',
    price: '₹699',
    priceType: 'fixed',
    priceDisplay: '₹699 + Govt. Fee',
    heroPriceHook: 'Get Your 15-Digit GSTIN Online in 3-7 Working Days | ₹699 + Govt. Fee',
    specialCallout: '100% Online & Biometric Aadhaar Authentication',
    urgencyText: 'Mandatory for interstate supply, e-commerce & turnover > ₹20L/₹40L',
    ctaText: 'Apply for GST Registration',
    metaTitle: 'GST Registration Online India @ ₹699 | New GST Number Application',
    metaDescription: 'Apply for new GST Registration online at ₹699 + Govt. Fee. Get your 15-digit GSTIN with Aadhaar OTP authentication, HSN classification, and expert CA verification.',
    seoKeywords: [
      'GST registration online',
      'apply for GST number',
      'new GST registration ₹699',
      'GSTIN application form REG-01',
      'online GST registration portal',
      'proprietorship GST registration',
      'pvt ltd GST registration',
      'composition scheme GST'
    ],
    keywords: [
      'gst-registration',
      'gst registration',
      'apply gst',
      'new gst number',
      'gstin application',
      'gst portal registration'
    ],
    heroIntro: 'Goods and Services Tax (GST) Registration, mandated under Section 22 to Section 24 of the Central Goods and Services Tax (CGST) Act, 2017, is the statutory requirement for any business, enterprise, or self-employed individual in India engaging in the supply of taxable goods or services. Once registered on the GST Common Portal, the business is allocated a unique 15-digit Goods and Services Tax Identification Number (GSTIN), enabling it to legally collect indirect tax from clients, claim Input Tax Credit (ITC) on commercial purchases, sell across state borders, and onboard on major e-commerce platforms like Amazon, Flipkart, and GeM.',
    keyTags: [
      '15-Digit GSTIN Allotment',
      'Form GST REG-01 Submission',
      'Aadhaar Authentication / Biometric',
      'Claim 100% Input Tax Credit',
      'Interstate & E-Commerce Ready'
    ],
    overview: {
      p1: 'The GST regime represents India’s unified indirect tax structure replacing multiple legacy taxes (Excise, VAT, Service Tax, CST). Registration is mandatory once aggregate turnover crosses statutory thresholds (₹40 Lakhs for goods in standard states, ₹20 Lakhs for services and special category states) or immediately upon engaging in interstate supply or online marketplaces.',
      p2: 'Operating an unregistered business above the threshold or engaging in interstate transactions without a GSTIN attracts severe penalties under Section 122 of the CGST Act (100% of the tax due or ₹10,000, whichever is higher), confiscation of goods in transit, and total forfeiture of Input Tax Credit. Akshay B2B Solutions provides end-to-end documentation auditing, principal place of business verification, HSN/SAC code mapping, and single-pass Form GST REG-01 approval.'
    },
    registrationProcessOverview: {
      status: 'Mandatory Statutory Indirect Tax Enrollment',
      governingAuthority: 'Goods and Services Tax Network (GSTN) & Central Board of Indirect Taxes and Customs (CBIC)',
      summary: 'Generating Temporary Reference Number (TRN), submitting Part A and Part B of Form GST REG-01 with premise proof and promoter KYC, completing Aadhaar biometric/OTP authentication, and responding to tax officer clarifications.',
      postApproval: 'Issuance of official Form GST REG-06 Certificate of Registration with 15-digit GSTIN.',
      assistanceRole: 'Premise proof vetting, HSN mapping, REG-01 portal drafting, Aadhaar authentication coordination, and officer query resolution.'
    },
    whatIs: {
      definition: 'GST Registration is the official process through which a commercial entity registers with tax authorities to obtain a 15-digit GSTIN to collect GST and pass on Input Tax Credits.',
      points: [
        'Mandatory under Section 22 for suppliers crossing turnover limits (₹40L for goods / ₹20L for services).',
        'Mandatory under Section 24 for all e-commerce sellers, interstate traders, and casual taxable persons regardless of turnover.',
        'Allots a state-specific 15-digit GSTIN (e.g. 09AAAAA0000A1Z5) tied to entity PAN.',
        'Unlocks seamless claiming of Input Tax Credit (ITC) on all raw materials, capital assets, and services.',
        'Enables creation of E-Way Bills for movement of goods exceeding ₹50,000 in value.',
        'Enables issuance of valid GST Tax Invoices to corporate B2B clients.'
      ],
      closing: 'It establishes complete commercial legitimacy, unlocks nationwide expansion, and eliminates indirect tax penalties.'
    },
    keyCharacteristics: [
      {
        title: '15-Digit PAN-Based GSTIN',
        description: 'First 2 digits represent State Code, next 10 digits are entity PAN, 13th digit is entity code, 14th is "Z", and 15th is a checksum character.'
      },
      {
        title: 'Aadhaar Authentication / Biometric',
        description: 'Instant Aadhaar OTP validation ensures rapid approval within 3 to 7 days without mandatory preliminary physical site inspection.'
      },
      {
        title: 'Regular vs Composition Scheme',
        description: 'Businesses can opt for Regular Scheme (full ITC flow) or Composition Scheme (concessional 1%-6% tax with minimal compliance).'
      },
      {
        title: 'Nationwide Inter-State Trade',
        description: 'A single GSTIN per state authorizes seamless interstate trade and pan-India distribution without state border checkposts.'
      }
    ],
    importanceBenefits: {
      intro: 'Obtaining your GST Registration through Akshay B2B Solutions unlocks essential business advantages:',
      benefits: [
        {
          title: '100% Input Tax Credit (ITC) Recovery',
          desc: 'Recover all GST paid on business purchases, office rent, software subscriptions, and raw materials against your output tax liability.'
        },
        {
          title: 'Unrestricted Inter-State Supply & E-Commerce',
          desc: 'Sell freely to clients across all Indian states and list products on Amazon, Flipkart, Blinkit, and Government e-Marketplace (GeM).'
        },
        {
          title: 'High Trust & Corporate B2B Vendor Eligibility',
          desc: 'Corporate clients strictly mandate a valid GSTIN to ensure they can claim input credit on your invoices.'
        },
        {
          title: 'Total Protection from Section 122 Penalties',
          desc: 'Avoid 100% tax evasion penalties, detention of shipments under Section 129, and coercive bank attachments.'
        },
        {
          title: 'Instant Current Account & Working Capital Loans',
          desc: 'A verified GST certificate and regular return filing history serve as prime collateral for pre-approved MSME credit lines.'
        }
      ],
      closing: 'It elevates your business from the unorganized sector into a high-growth, fully compliant enterprise.'
    },
    package: {
      title: 'GST Registration Complete Package',
      description: 'End-to-end Form GST REG-01 preparation, premise vetting, HSN classification, Aadhaar authentication, and GSTIN certificate delivery.',
      checklist: [
        'Eligibility & Threshold Analysis (Regular vs Composition Scheme)',
        'Principal & Additional Place of Business Document Vetting',
        'HSN (Goods) & SAC (Services) Code Mapping',
        'Generation of Temporary Reference Number (TRN)',
        'Filing of Form GST REG-01 (Part A & Part B) on GST Common Portal',
        'Aadhaar Authentication & OTP Coordination',
        'Handling Departmental Clarifications & Form GST REG-03 Notice Replies',
        'Delivery of Official Form GST REG-06 Registration Certificate'
      ]
    },
    types: [
      {
        title: 'Regular Taxpayer Registration',
        desc: 'For all standard businesses, wholesalers, manufacturers, and service providers claiming full Input Tax Credit.',
        eligibility: 'Standard businesses'
      },
      {
        title: 'Composition Scheme Registration',
        desc: 'For small traders and manufacturers (turnover < ₹1.5 Cr) paying flat 1% tax with simplified quarterly return filing.',
        eligibility: 'Small traders & manufacturers'
      },
      {
        title: 'Casual Taxable Person / Non-Resident',
        desc: 'Temporary GST registration valid for 90 days for seasonal businesses, exhibitions, and trade fairs.',
        eligibility: 'Exhibitions & foreign sellers'
      },
      {
        title: 'E-Commerce Operator & ISD',
        desc: 'For online marketplace platforms (Section 52 TCS) and Input Service Distributors (ISD) distributing branch credits.',
        eligibility: 'Marketplaces & head offices'
      }
    ],
    comparison: {
      title: 'Regular Taxpayer Scheme vs Composition Scheme',
      headers: ['Parameter', 'Regular Scheme', 'Composition Scheme'],
      rows: [
        { aspect: 'Turnover Eligibility', col1: 'No upper limit', col2: 'Turnover up to ₹1.5 Crore (₹75L in Special States)' },
        { aspect: 'Input Tax Credit (ITC)', col1: 'Fully available on all inputs & capital goods', col2: 'Not available (ITC cannot be claimed)' },
        { aspect: 'Tax Collection from Buyers', col1: 'Allowed (issues Tax Invoice with GST rate)', col2: 'Not allowed (issues Bill of Supply)' },
        { aspect: 'Inter-State Sales', col1: 'Allowed across all states and export', col2: 'Restricted (strictly intra-state sales only)' },
        { aspect: 'Return Frequency', col1: 'Monthly (GSTR-1 & GSTR-3B) or QRMP', col2: 'Quarterly CMP-08 + Annual GSTR-4' }
      ]
    },
    lawsGoverning: {
      actName: 'Central Goods and Services Tax (CGST) Act, 2017 & State GST Acts',
      authority: 'Central Board of Indirect Taxes and Customs (CBIC) & State Tax Departments',
      points: [
        'Section 22 specifying mandatory turnover thresholds for registration.',
        'Section 24 prescribing compulsory registration irrespective of turnover for interstate/ecommerce.',
        'Section 25 governing procedure for registration in Form GST REG-01.',
        'Section 122 prescribing penalties for failure to register (100% of tax or ₹10,000).',
        'Rule 8 and Rule 9 of CGST Rules, 2017 governing electronic verification and officer approval timelines.'
      ],
      penalties: 'Operating without GST when liable attracts penalty equal to 100% of tax evaded or ₹10,000 (whichever is higher).'
    },
    eligibilityRequirements: {
      intro: 'Any business entity or individual meeting any of the following criteria must register under GST:',
      criteria: [
        'Aggregate annual turnover exceeds ₹40 Lakhs for goods (₹20 Lakhs in Special Category States).',
        'Aggregate annual turnover exceeds ₹20 Lakhs for services (₹10 Lakhs in Special Category States).',
        'Making any inter-state supply of goods or services.',
        'Selling products or services via e-commerce platforms (Amazon, Flipkart, Swiggy, Zomato).',
        'Required to pay tax under Reverse Charge Mechanism (RCM).'
      ],
      documentsRequired: [
        'PAN Card of the Business Entity / Proprietor / Partners / Directors',
        'Aadhaar Card and Passport Photo of Authorized Signatory',
        'Proof of Principal Place of Business (Electricity Bill / Property Tax Receipt / Rent Agreement + NOC)',
        'Bank Account Proof (Cancelled Cheque / Bank Statement with Name & Address)',
        'Partnership Deed / Certificate of Incorporation & Board Resolution (for Companies/LLPs)'
      ]
    },
    processSteps: [
      { step: 1, title: 'Document Vetting & TRN Generation', desc: 'We verify premise ownership proofs, validate PAN/Aadhaar data, and generate the Temporary Reference Number.' },
      { step: 2, title: 'Form GST REG-01 Filing & HSN Mapping', desc: 'We complete Part B of REG-01, map correct 4/6/8-digit HSN/SAC codes, and upload verified premise files.' },
      { step: 3, title: 'Aadhaar Biometric / OTP Authentication', desc: 'The promoter authenticates the application via instant Aadhaar OTP link sent directly to registered mobile.' },
      { step: 4, title: 'Officer Scrutiny & GSTIN Issuance', desc: 'We track the ARN, address any Form REG-03 query raised by the tax officer, and deliver your Form REG-06 certificate.' }
    ],
    postRegistrationCompliance: {
      intro: 'Key statutory compliances immediately following GST registration:',
      points: [
        'Update the 15-digit GSTIN on your commercial bank account within 30 days of registration.',
        'Display your GSTIN on the principal business signboard and print it on all tax invoices.',
        'File monthly or quarterly GSTR-1 (Sales) and GSTR-3B (Summary Tax Return) on or before statutory due dates.',
        'Issue GST-compliant Tax Invoices mentioning HSN codes, tax rates, and buyer GSTIN.'
      ]
    },
    timelines: {
      tat: '3 to 7 Working Days (With Aadhaar Authentication)',
      delayFactors: ['Aadhaar demographic data mismatch (Name/DOB)', 'Unclear electricity bill or missing owner NOC', 'Department site inspection notice (Form REG-03)'],
      speedAssurance: 'Our compliance team pre-screens all premise proofs to guarantee single-pass approval without officer queries.'
    },
    certification: {
      issuingAuthority: 'Government of India & State Commercial Tax Department',
      validity: 'Lifetime / Permanent (until voluntarily cancelled or revoked)',
      legalSignificance: 'Official statutory indirect tax registration certificate authorizing collection of GST and nationwide trade.',
      contents: [
        '15-Digit Goods and Services Tax Identification Number (GSTIN)',
        'Legal Business Name & Trade Name',
        'Constitution of Business (Proprietorship / Pvt Ltd / LLP / Firm)',
        'Address of Principal and Additional Places of Business',
        'Date of Liability & Validity Period',
        'QR Code & Digital Signature of the Proper Officer'
      ]
    },
    fees: {
      govtFee: '₹0 (Government statutory registration portal fee is Nil)',
      professionalFee: '₹699/- only (Complete Form GST REG-01 preparation, premise vetting, and query handling package)',
      transparencyNote: 'Clear fixed fee of ₹699 + Govt. Fee with zero hidden charges.'
    },
    taxation: {
      directTaxImpact: 'GST registration fees are 100% tax-deductible operational business expenses under Income Tax.',
      gstImplications: 'Enables 100% seamless pass-through and credit claim of all Input Tax Credits on commercial purchases.',
      deductionsOrExemptions: 'Shields your enterprise from 100% tax evasion penalties under Section 122 and shipment seizure under Section 129.'
    },
    whyUs: [
      'Over 35,000+ GST registrations successfully completed across all 28 Indian states and 8 UTs.',
      '100% single-pass approval rate through rigorous pre-submission premise proof vetting.',
      'Accurate HSN and SAC code classification by practicing Chartered Accountants.',
      'Fast-track resolution of Form GST REG-03 clarification notices within 24 hours.',
      'Complimentary first-month GST return filing consultation and invoice template kit.'
    ],
    faqs: [
      {
        q: 'What is GST Registration and who is required to obtain it in India?',
        a: 'GST Registration is the mandatory enrollment of a commercial business with the GST department, resulting in the allotment of a 15-digit GSTIN. Any business with turnover exceeding ₹40 Lakhs (goods) or ₹20 Lakhs (services), or engaged in interstate trade or e-commerce sales, must obtain a GSTIN.'
      },
      {
        q: 'Can a business register for GST voluntarily even if turnover is below the limit?',
        a: 'Yes! Any business can apply for Voluntary GST Registration. This allows you to claim Input Tax Credit on your purchases, sell to corporate B2B clients, and expand across state borders without restrictions.'
      },
      {
        q: 'What documents are required to register a Proprietorship for GST?',
        a: 'The proprietor PAN card, Aadhaar card, passport photo, electricity bill or property tax receipt of the business premises, NOC from owner (if rented), rent agreement, and a cancelled cheque or bank statement.'
      },
      {
        q: 'How long does it take to get a GST number after applying?',
        a: 'With successful Aadhaar authentication, the GST department typically approves Form REG-01 and issues the 15-digit GSTIN within 3 to 7 working days. If an officer clarification notice (REG-03) is issued, it may take 7 to 10 working days.'
      },
      {
        q: 'Is physical premises inspection mandatory for getting GST registration?',
        a: 'No. If the applicant completes successful Aadhaar OTP authentication, physical site verification is generally waived unless the risk management system specifically flags the application.'
      },
      {
        q: 'How do I start my GST Registration with Akshay B2B Solutions?',
        a: 'Click "Apply for GST Registration" or contact our desk at contact@akshayb2bsolutions.com / +91 97180 04839 to upload your documents for same-day portal filing.'
      }
    ],
    relatedServices: [
      { name: 'GST Return', desc: 'Monthly & quarterly GSTR-1 and GSTR-3B filing with ITC reconciliation.', price: '₹500/month' },
      { name: 'GST Modification', desc: 'Update business address, director details, trade name & bank on GST portal.', price: '₹699 + Govt. Fee' },
      { name: 'GST Cancellation & Surrender', desc: 'Lawful surrender and closure of inactive or unneeded GSTIN.', price: '₹999 + Govt. Fee' },
      { name: 'Corporate Tax', desc: 'Comprehensive corporate income tax computation and ITR-6 filing.', price: '₹2499 + Govt. Fee' },
      { name: 'TAN Registration', desc: 'Allotment of 10-digit Tax Deduction Account Number.', price: '₹699 + Govt. Fee' },
      { name: 'Income Tax Return Filing', desc: 'Accurate tax filing for individuals, firms, and companies.', price: '₹999' }
    ]
  },

  // 2. GST Modification — ₹699 + Govt. Fee
  {
    slug: 'gst-modification',
    name: 'GST Modification',
    category: 'GST & Tax',
    parentCategory: 'Tax & Compliance',
    price: '₹699',
    priceType: 'fixed',
    priceDisplay: '₹699 + Govt. Fee',
    heroPriceHook: 'Update Business Address, Directors, Trade Name & Bank Details on GST Portal | ₹699 + Govt. Fee',
    specialCallout: 'Core & Non-Core Field Amendment via Form REG-14',
    urgencyText: 'Mandatory update within 15 days of business change',
    ctaText: 'Apply for GST Modification',
    metaTitle: 'GST Modification & Amendment Online @ ₹699 | Form GST REG-14 Filing',
    metaDescription: 'Update GST registration details online at ₹699 + Govt. Fee. Change registered address, add additional place of business, update directors/partners, change trade name via Form GST REG-14.',
    seoKeywords: [
      'GST modification online',
      'GST amendment Form REG-14',
      'change address in GST portal',
      'add director in GSTIN',
      'GST modification ₹699',
      'update bank account in GST',
      'core field amendment GST',
      'non-core field amendment GST'
    ],
    keywords: [
      'gst-modification',
      'gst modification',
      'gst amendment',
      'change gst address',
      'update gst details',
      'form reg 14'
    ],
    heroIntro: 'A GST Modification (Amendment of Registration), governed under Section 28 of the Central Goods and Services Tax (CGST) Act, 2017 read with Rule 19 of the CGST Rules, is the statutory procedure to officially update and alter existing registration particulars on the GST Common Portal using Form GST REG-14. Whenever there is a change in the legal business name, principal or additional place of business address, addition/removal of directors, partners, or managing trustees, or updates to business activities and bank accounts, the registered person must submit an amendment application within 15 days of the event.',
    keyTags: [
      'Section 28 CGST Act',
      'Form GST REG-14 Filing',
      'Core & Non-Core Field Amendments',
      'Principal Place Address Change',
      'Director & Partner KYC Updates'
    ],
    overview: {
      p1: 'Over the lifecycle of an active business, commercial changes frequently occur—such as relocating the corporate office or warehouse, inducting new partners or directors, updating commercial bank accounts, or adding new product lines (HSN codes). The GST law categorizes amendments into "Core Fields" (requiring tax officer approval) and "Non-Core Fields" (auto-approved instantly upon digital verification).',
      p2: 'Failing to update business address or director changes within 15 days violates Section 28 and Rule 19, risking physical premise inspection notices (Form REG-17), suspension of GSTIN, and blocking of E-Way Bill generation. Akshay B2B Solutions provides in-depth document vetting, resolution drafting, Form GST REG-14 preparation, and fast-track approval tracking on the GST portal.'
    },
    registrationProcessOverview: {
      status: 'Mandatory Statutory Amendment for Changes in Business Particulars',
      governingAuthority: 'Jurisdictional State / Central GST Proper Officer & GSTN',
      summary: 'Identifying Core vs Non-Core fields, drafting supporting resolutions and premise proofs, compiling Form GST REG-14 on the GST portal, and completing DSC/OTP electronic verification.',
      postApproval: 'Issuance of amended Form GST REG-06 Certificate of Registration reflecting updated business details.',
      assistanceRole: 'Document vetting, board resolution drafting, portal application filing, officer query response, and delivering amended certificate.'
    },
    whatIs: {
      definition: 'GST Modification is the formal legal process of updating, altering, or adding details in the master GST registration record through Form GST REG-14.',
      points: [
        'Core Fields: Legal business name, principal place of business, additional places of business, addition/deletion of directors or partners (requires officer approval within 15 working days).',
        'Non-Core Fields: Bank account details, email address, mobile number, authorized signatory particulars, HSN/SAC codes (auto-approved instantly).',
        'Must be submitted within 15 days of the event causing the change (e.g. signing a new lease or passing a board resolution).',
        'Prevents GST registration cancellation due to premise non-existence during departmental audit.',
        'Enables addition of branch offices and warehouses across the state under the same GSTIN.',
        'Results in the issuance of an updated Form GST REG-06 Registration Certificate.'
      ],
      closing: 'It keeps your official tax records fully synchronized with your real-world commercial operations.'
    },
    keyCharacteristics: [
      {
        title: 'Core vs Non-Core Fields',
        description: 'Core amendments require jurisdictional officer scrutiny and approval; Non-Core amendments are instantly approved on submission without human intervention.'
      },
      {
        title: '15-Day Statutory Window',
        description: 'Under Rule 19, the amendment application must be filed within 15 days from the date of the underlying change.'
      },
      {
        title: 'Multiple Places of Business',
        description: 'Add unlimited godowns, warehouses, and branch offices within the same state under a single GSTIN registration.'
      },
      {
        title: 'Updated REG-06 Issuance',
        description: 'Upon approval, the portal automatically regenerates the official Form GST REG-06 containing the new address or promoter roster.'
      }
    ],
    importanceBenefits: {
      intro: 'Filing timely GST Modifications through Akshay B2B Solutions delivers essential operational protections:',
      benefits: [
        {
          title: 'Protection from GSTIN Suspension & Suo-Motu Cancellation',
          desc: 'Prevents tax officers from issuing Form REG-17 cancellation notices if they find the business operating at a new un-updated address.'
        },
        {
          title: 'Uninterrupted E-Way Bill & Transit Delivery',
          desc: 'Ensures delivery addresses on E-Way Bills match the registered additional places of business, avoiding vehicle seizure under Section 129.'
        },
        {
          title: 'Seamless Addition of New Directors & Partners',
          desc: 'Officially inducts new promoters and authorized signatories with signing authority on the GST common portal.'
        },
        {
          title: 'Smooth Bank Account Updates',
          desc: 'Mandatory update of current bank accounts to ensure timely processing of GST cash refunds into company accounts.'
        },
        {
          title: 'Instant Addition of New HSN / SAC Codes',
          desc: 'Authorize new goods and services lines to ensure flawless B2B invoice generation and ITC pass-through.'
        }
      ],
      closing: 'It keeps your legal business profile pristine and fully compliant with CBIC regulations.'
    },
    package: {
      title: 'GST Modification Complete Package',
      description: 'End-to-end Core & Non-Core field amendment, premise proof vetting, resolution drafting, Form REG-14 filing, and updated certificate delivery.',
      checklist: [
        'Analysis of Proposed Changes (Core vs Non-Core Classification)',
        'Drafting Board Resolution / Partner Consent Letter for Modification',
        'Vetting of New Premise Proofs (Rent Agreement, NOC & Electricity Bill)',
        'Preparation of Form GST REG-14 Application on GST Portal',
        'Uploading Supporting Documents & Digital Signature (DSC) / OTP Verification',
        'Filing Response to Departmental Clarifications (Form GST REG-03/REG-04) if raised',
        'Tracking Application Reference Number (ARN) until Final Approval',
        'Delivery of Updated Form GST REG-06 Certificate of Registration'
      ]
    },
    types: [
      {
        title: 'Change in Principal / Additional Place of Business',
        desc: 'Core amendment updating the registered office, corporate office, or adding new branches and warehouses.',
        eligibility: 'Relocating or expanding businesses'
      },
      {
        title: 'Addition / Removal of Directors & Partners',
        desc: 'Core amendment updating the promoter roster upon appointment or resignation of key managerial personnel.',
        eligibility: 'Corporate restructuring'
      },
      {
        title: 'Change in Legal Name / Trade Name',
        desc: 'Core amendment updating the commercial branding or legal entity name following MCA/ROF approval.',
        eligibility: 'Rebranded businesses'
      },
      {
        title: 'Non-Core Field Amendments (Bank, HSN, Contact)',
        desc: 'Instant amendments for updating current bank accounts, primary email/phone, or adding new HSN codes.',
        eligibility: 'All active taxpayers'
      }
    ],
    comparison: {
      title: 'Core Field Amendment vs Non-Core Field Amendment',
      headers: ['Parameter', 'Core Field Amendment', 'Non-Core Field Amendment'],
      rows: [
        { aspect: 'Examples', col1: 'Principal address, branch address, directors/partners, legal name', col2: 'Bank account details, phone/email, HSN/SAC codes' },
        { aspect: 'Approval Requirement', col1: 'Requires approval of Jurisdictional GST Proper Officer', col2: 'Auto-approved instantly upon DSC/OTP submission' },
        { aspect: 'Processing Timeline', col1: 'Typically 3 to 15 working days', col2: 'Instant / Same-Day (within 15 minutes)' },
        { aspect: 'Supporting Proofs Needed', col1: 'Rent agreement, NOC, electricity bill, DIR-12, PAN', col2: 'Cancelled cheque / bank passbook, HSN description' },
        { aspect: 'Certificate Regeneration', col1: 'Regenerates updated Form GST REG-06', col2: 'Updates master record; REG-06 unchanged' }
      ]
    },
    lawsGoverning: {
      actName: 'Central Goods and Services Tax (CGST) Act, 2017 (Section 28) & CGST Rules, 2017',
      authority: 'Proper Officer, Jurisdictional Central / State GST Ward',
      points: [
        'Section 28 mandating registered persons to inform proper officer of any changes in registration.',
        'Rule 19 of CGST Rules prescribing procedure for amendment in Form GST REG-14.',
        'Rule 19(1) specifying the 15-day mandatory timeline from occurrence of change.',
        'Rule 19(2) empowering officer to approve or seek clarification via Form GST REG-03 within 15 working days.',
        'Section 122 prescribing penalties for failure to furnish correct registration information.'
      ],
      penalties: 'Operating at un-updated premises risks GSTIN suspension, physical inspection notices, and ₹10,000 penalty.'
    },
    eligibilityRequirements: {
      intro: 'Any active GSTIN holder undergoing structural, address, or operational changes must file:',
      criteria: [
        'Existing registered taxpayer with an active GSTIN on the GST Common Portal.',
        'Occurrence of change in business address, promoter roster, bank details, or trade name.',
        'Authorized Signatory possesses active Class 3 DSC or Aadhaar OTP access.'
      ],
      documentsRequired: [
        'GST Portal Login Credentials (Username & Password)',
        'For Address Change: Electricity Bill / Property Tax Receipt + Rent Agreement + Owner NOC',
        'For Director/Partner Change: PAN & Aadhaar of New Promoter + Board Resolution / Resignation Letter',
        'For Bank Update: Cancelled Cheque / Bank Statement with Entity Name & IFSC Code',
        'For Trade Name Change: Proof of amended trade name or MCA Certificate of Name Change'
      ]
    },
    processSteps: [
      { step: 1, title: 'Amendment Assessment & Proof Review', desc: 'We verify the exact changes required, classify Core vs Non-Core fields, and audit supporting premise documents.' },
      { step: 2, title: 'Drafting Board Resolution & Documentation', desc: 'We draft required company board resolutions or partner consent letters authorising the modification.' },
      { step: 3, title: 'Form GST REG-14 Filing on Portal', desc: 'We prepare the amendment application on the GST portal, attach verified proofs, and execute DSC/OTP verification.' },
      { step: 4, title: 'Officer Coordination & Updated Certificate Delivery', desc: 'We track the ARN, address any officer queries, and deliver your freshly updated Form GST REG-06 certificate.' }
    ],
    postRegistrationCompliance: {
      intro: 'Key steps following GST modification approval:',
      points: [
        'Download and print the freshly amended Form GST REG-06 Registration Certificate.',
        'Display the updated GST certificate and GSTIN at all newly added principal/additional premises.',
        'Ensure updated billing and dispatch addresses are configured in your ERP/invoicing software for E-Way Bills.',
        'Notify your commercial banking partners and major vendors of the updated official address.'
      ]
    },
    timelines: {
      tat: 'Core: 3-7 Working Days | Non-Core: Instant (Same-Day)',
      delayFactors: ['Discrepancy in new premise electricity bill address and rent agreement', 'Department officer issuing Form REG-03 clarification query', 'Pending DSC authorization update on portal'],
      speedAssurance: 'Our team pre-screens all documents to ensure immediate single-pass approval without officer objections.'
    },
    certification: {
      issuingAuthority: 'Department of Goods and Services Tax / CBIC',
      validity: 'Lifetime / Permanent (until subsequent modification or cancellation)',
      legalSignificance: 'Official statutory registration certificate reflecting legally amended commercial particulars.',
      contents: [
        '15-Digit Goods and Services Tax Identification Number (GSTIN)',
        'Updated Legal Name & Trade Name',
        'Updated Principal Place of Business Address',
        'Complete Annexure of Additional Places of Business (Branches/Godowns)',
        'Updated Promoter & Authorized Signatory Roster',
        'Digital Signature & Approval Timestamp of Proper Officer'
      ]
    },
    fees: {
      govtFee: '₹0 (Official portal modification filing fee is Nil)',
      professionalFee: '₹699/- only (Complete Form GST REG-14 preparation, premise vetting, and query handling package)',
      transparencyNote: 'Fixed price of ₹699 + Govt. Fee with zero hidden charges.'
    },
    taxation: {
      directTaxImpact: 'GST modification professional fees are 100% tax-deductible operational business expenses under Income Tax.',
      gstImplications: 'Ensures lawful movement of goods from new warehouses, preventing shipment seizures and 200% penalties under Section 129.',
      deductionsOrExemptions: 'Shields the enterprise from statutory fines and sudden suspension of GSTIN.'
    },
    whyUs: [
      'Over 14,000+ GST amendments successfully processed with 100% approval rate.',
      'Comprehensive support for complex Core Field modifications including head office relocations.',
      'Pre-drafted legal templates for board resolutions, partner consent letters, and owner NOCs.',
      'Instant same-day execution for Non-Core bank and contact detail modifications.',
      'Dedicated compliance manager tracking the ARN until final amended certificate delivery.'
    ],
    faqs: [
      {
        q: 'What is the time limit to file a GST Modification after a business change occurs?',
        a: 'Under Rule 19 of the CGST Rules, 2017, a registered person must apply for amendment in Form GST REG-14 within 15 days of the occurrence of the change (e.g. signing a new lease or appointing a director).'
      },
      {
        q: 'What is the difference between Core and Non-Core field amendments?',
        a: 'Core fields include business legal name, principal place of business, additional places of business, and addition/deletion of directors/partners. These require approval by the jurisdictional tax officer. Non-Core fields (bank details, email/phone, HSN codes) are auto-approved instantly on submission.'
      },
      {
        q: 'Can I change my business address from one state to another under GST modification?',
        a: 'No. Since the first two digits of a GSTIN represent the State Code, moving a business to a different state requires applying for a new GST registration in the destination state and cancelling/surrendering the old state GSTIN.'
      },
      {
        q: 'What documents are required to change the registered business address in GST?',
        a: 'Electricity bill or property tax receipt of the new premise, rent agreement with the landlord, NOC (No Objection Certificate) from the property owner, and a board resolution or partner consent letter.'
      },
      {
        q: 'Can I add multiple warehouses and branch offices under my existing GSTIN?',
        a: 'Yes! You can add unlimited additional places of business (branches, godowns, warehouses) within the same state under your existing GSTIN via Core Field amendment in Form GST REG-14.'
      },
      {
        q: 'How do I start my GST Modification with Akshay B2B Solutions?',
        a: 'Click "Apply for GST Modification" or contact us at contact@akshayb2bsolutions.com / +91 97180 04839 to upload your new premise or promoter details for same-day portal filing.'
      }
    ],
    relatedServices: [
      { name: 'GST Registration', desc: 'New 15-digit GSTIN allotment in 3-7 working days.', price: '₹699 + Govt. Fee' },
      { name: 'GST Cancellation & Surrender', desc: 'Lawful surrender and closure of inactive or unneeded GSTIN.', price: '₹999 + Govt. Fee' },
      { name: 'GST Return', desc: 'Monthly & quarterly GSTR-1 and GSTR-3B filing with ITC reconciliation.', price: '₹500/month' },
      { name: 'Corporate Tax', desc: 'Comprehensive corporate income tax computation and ITR-6 filing.', price: '₹2499 + Govt. Fee' },
      { name: 'TAN Registration', desc: 'Allotment of 10-digit Tax Deduction Account Number.', price: '₹699 + Govt. Fee' },
      { name: 'Income Tax Return Filing', desc: 'Accurate tax filing for individuals, firms, and companies.', price: '₹999' }
    ]
  },

  // 3. GST Cancellation & Surrender — ₹999 + Govt. Fee
  {
    slug: 'gst-cancellation',
    name: 'GST Cancellation & Surrender',
    category: 'GST & Tax',
    parentCategory: 'Tax & Compliance',
    price: '₹999',
    priceType: 'fixed',
    priceDisplay: '₹999 + Govt. Fee',
    heroPriceHook: 'Lawful Surrender & Complete Closure of GSTIN via Form GST REG-16 | ₹999 + Govt. Fee',
    specialCallout: 'Zero Pending Liability & Form GSTR-10 Final Return Assistance',
    urgencyText: 'Avoid accumulating recurring ₹50/day late fees on unfiled returns',
    ctaText: 'Apply for GST Cancellation',
    metaTitle: 'GST Cancellation & Surrender Online @ ₹999 | Form GST REG-16 Filing',
    metaDescription: 'Surrender and cancel your GST registration legally at ₹999 + Govt. Fee. Form GST REG-16 filing, input credit reversal, stock valuation, and Form GSTR-10 Final Return support.',
    seoKeywords: [
      'GST cancellation online',
      'GST surrender Form REG-16',
      'close GST number',
      'GST cancellation ₹999',
      'Form GSTR-10 final return',
      'cancel proprietorship GST',
      'ITC reversal on cancellation'
    ],
    keywords: [
      'gst-cancellation',
      'gst-cancellation-surrender',
      'gst cancellation',
      'gst surrender',
      'close gst',
      'form reg 16',
      'gstr 10'
    ],
    heroIntro: 'GST Cancellation & Surrender, governed under Section 29 of the Central Goods and Services Tax (CGST) Act, 2017 read with Rule 20 of the CGST Rules, is the statutory legal procedure for the formal deregistration and closure of an active Goods and Services Tax Identification Number (GSTIN) through Form GST REG-16. Whenever a business ceases operations, dissolves a partnership, closes a proprietorship, transfers ownership through amalgamation or sale, or drops below mandatory turnover thresholds, the taxpayer must apply for cancellation to halt ongoing monthly filing obligations and stop compounding late fees.',
    keyTags: [
      'Section 29 CGST Act',
      'Form GST REG-16 Electronic Filing',
      'Form GSTR-10 Final Return',
      'Stock & Capital Goods ITC Reversal',
      'Form GST REG-19 Cancellation Order'
    ],
    overview: {
      p1: 'An active GST registration carries strict, non-negotiable monthly or quarterly return filing obligations (GSTR-1 and GSTR-3B), regardless of whether the enterprise generated revenue or remained dormant. Simply abandoning an unneeded GST number without formal cancellation causes automated late fees (₹50 per day per return) and interest to accumulate indefinitely.',
      p2: 'Unaddressed GST numbers eventually face suo-motu cancellation by tax officers with severe recovery notices under Section 79, bank account attachment, and blocking of the promoter PAN for future business registrations. Akshay B2B Solutions provides in-depth pending return clearance, input credit reversal calculations on closing stock, Form GST REG-16 filing, and GSTR-10 Final Return submission.'
    },
    registrationProcessOverview: {
      status: 'Statutory Deregistration & Clean Exit from the GST Tax Net',
      governingAuthority: 'Jurisdictional State / Central GST Proper Officer & GSTN',
      summary: 'Auditing pending return liabilities, computing ITC reversal on closing stock/capital goods as per Section 29(5), submitting Form GST REG-16 on the portal, tracking officer approval, and filing Form GSTR-10 Final Return.',
      postApproval: 'Issuance of official Form GST REG-19 Order of Cancellation of Registration, legally terminating all ongoing compliance liabilities.',
      assistanceRole: 'Liability audit, ITC reversal calculation, REG-16 portal filing, officer query defense, and GSTR-10 final return filing.'
    },
    whatIs: {
      definition: 'GST Cancellation & Surrender is the formal legal process of terminating a GST registration to extinguish future tax filing duties and obtain a clean regulatory exit.',
      points: [
        'Voluntary cancellation filed by the taxpayer under Form GST REG-16.',
        'Applicable on business closure, death of sole proprietor, change in constitution, or turnover falling below threshold.',
        'Requires payment of tax on closing stock of raw materials, semi-finished goods, and capital assets (Section 29(5)).',
        'Immediate suspension of GSTIN on filing REG-16, halting monthly return filing requirements.',
        'Requires mandatory submission of Form GSTR-10 (Final Return) within 3 months of cancellation order.',
        'Concludes with the issuance of Form GST REG-19 official cancellation order.'
      ],
      closing: 'It provides a clean, legally binding conclusion to your indirect tax liabilities with zero lingering exposure.'
    },
    keyCharacteristics: [
      {
        title: 'Immediate Status Suspension',
        description: 'Once Form REG-16 is successfully submitted, the GSTIN status changes to "Suspended", immediately freezing routine monthly return obligations.'
      },
      {
        title: 'Section 29(5) ITC Reversal',
        description: 'Statutory calculation and payment of input credit attributable to closing inventory of goods and un-depreciated capital assets.'
      },
      {
        title: 'Officer Order in Form REG-19',
        description: 'The jurisdictional tax officer evaluates the application and issues the official Form GST REG-19 cancellation order within 30 days.'
      },
      {
        title: 'Mandatory Form GSTR-10 Final Return',
        description: 'The taxpayer must submit Form GSTR-10 (Final Return) within 3 months of the date of the cancellation order.'
      }
    ],
    importanceBenefits: {
      intro: 'Surrendering your GST registration lawfully through Akshay B2B Solutions delivers crucial financial safeguards:',
      benefits: [
        {
          title: 'Total Elimination of Recurring Late Fees',
          desc: 'Stop accumulating statutory late fees of ₹50/day (₹20/day for Nil returns) for every single month the GSTIN remains active.'
        },
        {
          title: 'Protection of Promoter PAN for Future Businesses',
          desc: 'Prevents blacklisting or flagging of your PAN by the GST department, allowing seamless incorporation of new future ventures.'
        },
        {
          title: 'Immunity from Suo-Motu Cancellation & SCNs',
          desc: 'Avoid receiving departmental Form REG-17 Show Cause Notices and coercive tax recovery proceedings against personal bank accounts.'
        },
        {
          title: 'Clean Regulatory Record for Banking & MCA',
          desc: 'Provides official Form REG-19 proof of closure required by banks to close current accounts and MCA to strike off companies.'
        },
        {
          title: 'Accurate Closing Stock ITC Settlement',
          desc: 'Our CAs calculate minimum statutory ITC reversal on closing stock, preventing future audit demands and interest penalties.'
        }
      ],
      closing: 'It cleanly concludes your business compliance lifecycle without any regulatory aftermath.'
    },
    package: {
      title: 'GST Cancellation & Surrender Complete Package',
      description: 'End-to-end pending return reconciliation, closing stock ITC computation, Form REG-16 filing, and Form GSTR-10 Final Return filing.',
      checklist: [
        'Comprehensive Audit of Pending Returns & Unpaid Tax Liabilities',
        'Closing Stock & Capital Goods Input Tax Credit (ITC) Reversal Calculation',
        'Drafting Reason for Cancellation & Supporting Closure Documents',
        'Preparation & Submission of Form GST REG-16 Application on Portal',
        'Aadhaar OTP / Class 3 Digital Signature (DSC) Authentication',
        'Handling Departmental Clarifications & Officer Scrutiny Notices',
        'Securing Official Form GST REG-19 Cancellation Order',
        'Preparation & Filing of Form GSTR-10 Final Return within Statutory Deadlines'
      ]
    },
    types: [
      {
        title: 'Closure of Business / Discontinuation',
        desc: 'For businesses shutting down operations, closing retail outlets, or ending commercial activities.',
        eligibility: 'Closed business entities'
      },
      {
        title: 'Change in Business Constitution',
        desc: 'When a proprietorship converts into a Partnership/Pvt Ltd, or upon amalgamation/merger requiring a new GSTIN.',
        eligibility: 'Restructured businesses'
      },
      {
        title: 'Turnover Dropping Below Mandatory Threshold',
        desc: 'For businesses whose aggregate annual revenue has fallen below ₹40L/₹20L and no longer wish to remain registered.',
        eligibility: 'Low-turnover traders'
      },
      {
        title: 'Death of Sole Proprietor',
        desc: 'Filing cancellation by legal heirs upon the demise of the sole proprietor with transfer to new entity.',
        eligibility: 'Legal heirs & successors'
      }
    ],
    comparison: {
      title: 'Voluntary Cancellation (Form REG-16) vs Suo-Motu Cancellation by Department',
      headers: ['Parameter', 'Voluntary Cancellation (Akshay B2B)', 'Suo-Motu Cancellation (Department)'],
      rows: [
        { aspect: 'Initiator', col1: 'Filed voluntarily by the taxpayer in Form REG-16', col2: 'Initiated unilaterally by proper officer (Form REG-17)' },
        { aspect: 'Promoter PAN Status', col1: 'Pristine; 100% clean record for future businesses', col2: 'Blacklisted / Flagged across GST & MCA networks' },
        { aspect: 'Accumulated Late Fees', col1: 'Immediately frozen upon REG-16 submission', col2: 'Compounding daily fees up to ₹10,000 per unfiled return' },
        { aspect: 'Recovery Proceedings', col1: 'Zero risk; lawful discharge of liabilities', col2: 'High risk of Section 79 bank account attachment' },
        { aspect: 'Final Closure Receipt', col1: 'Official Form REG-19 Order + GSTR-10 Receipt', col2: 'Adverse ex-parte cancellation order' }
      ]
    },
    lawsGoverning: {
      actName: 'Central Goods and Services Tax (CGST) Act, 2017 (Section 29) & CGST Rules, 2017',
      authority: 'Proper Officer, Central Board of Indirect Taxes and Customs (CBIC)',
      points: [
        'Section 29(1) specifying grounds on which a taxpayer can apply for cancellation.',
        'Section 29(5) mandating payment of an amount equal to ITC on closing stock/capital goods.',
        'Rule 20 prescribing submission of Form GST REG-16 within 30 days of occurrence of event.',
        'Section 45 read with Rule 81 mandating submission of Form GSTR-10 (Final Return) within 3 months.',
        'Section 79 governing recovery proceedings for un-discharged tax dues of cancelled taxpayers.'
      ],
      penalties: 'Abandoning a GSTIN attracts ₹50/day late fees, bank account freezing, and recovery of full tax demands.'
    },
    eligibilityRequirements: {
      intro: 'Any registered GST taxpayer seeking to lawfully terminate their GST registration:',
      criteria: [
        'Active or suspended GSTIN holder on the GST Common Portal.',
        'Business has discontinued operations, transferred ownership, or dissolved entity.',
        'All pending monthly/quarterly returns up to the date of cancellation application are filed.'
      ],
      documentsRequired: [
        'GST Common Portal Login Credentials (Username & Password)',
        'Statement of Closing Stock of Raw Materials, Semi-Finished Goods & Capital Assets',
        'Proof of Business Closure (Resolution / Dissolution Deed / Surrender Letter)',
        'Bank Account Details for any residual cash ledger refund claims',
        'Authorized Signatory DSC or Aadhaar OTP access for verification'
      ]
    },
    processSteps: [
      { step: 1, title: 'Return Ledger Audit & Liability Settlement', desc: 'We verify that all pending GSTR-1 and GSTR-3B returns are filed up to the cancellation date.' },
      { step: 2, title: 'Closing Stock ITC Reversal Computation', desc: 'Our CAs calculate statutory input tax credit reversals on closing inventory as mandated under Section 29(5).' },
      { step: 3, title: 'Form GST REG-16 Submission on Portal', desc: 'We prepare the cancellation application, upload closure proofs, and execute digital verification on the portal.' },
      { step: 4, title: 'Securing Form REG-19 & GSTR-10 Final Filing', desc: 'We track officer approval for Form GST REG-19 order and submit the mandatory Form GSTR-10 Final Return.' }
    ],
    postRegistrationCompliance: {
      intro: 'Key mandatory steps following GST cancellation:',
      points: [
        'Mandatorily file Form GSTR-10 (Final Return) on the portal within 3 months of the date of Form REG-19 order.',
        'Submit a copy of the Form REG-19 cancellation order to your bank to officially close the current account.',
        'Retain all sales invoices, purchase bills, and return acknowledgments for a statutory period of 6 years.',
        'Stop issuing GST tax invoices and remove the GSTIN from commercial letterheads and websites.'
      ]
    },
    timelines: {
      tat: '15 to 30 Working Days (Statutory Officer Approval Window)',
      delayFactors: ['Unpaid tax demands or unfiled past returns', 'Officer issuing Form REG-03 clarification query regarding closing stock value', 'Delay in submitting promoter Aadhaar OTP'],
      speedAssurance: 'Our team ensures 100% accurate closing stock valuation to secure swift Form REG-19 issuance.'
    },
    certification: {
      issuingAuthority: 'Department of Goods and Services Tax / CBIC',
      validity: 'Permanent Legal Cancellation Order',
      legalSignificance: 'Official statutory order terminating GST registration and releasing the taxpayer from future return obligations.',
      contents: [
        'Form Reference: Form GST REG-19 (Order for Cancellation of Registration)',
        '15-Digit Cancelled GSTIN & Legal Business Name',
        'Effective Date of Cancellation of Registration',
        'Determination of Final Tax & ITC Liability Settled',
        'Digital Signature & Official Seal of the Proper Officer'
      ]
    },
    fees: {
      govtFee: '₹0 (Official portal cancellation application fee is Nil)',
      professionalFee: '₹999/- only (Complete Form GST REG-16 filing, ITC reversal computation, and Form GSTR-10 Final Return package)',
      transparencyNote: 'Fixed transparent fee of ₹999 + Govt. Fee with zero hidden charges.'
    },
    taxation: {
      directTaxImpact: 'GST cancellation professional consulting fees are 100% tax-deductible business closure expenses under Income Tax.',
      gstImplications: 'Lawfully settles all Input Tax Credit liabilities under Section 29(5), terminating all indirect tax obligations.',
      deductionsOrExemptions: 'Shields promoters from compounding ₹50/day late fees and Section 79 recovery proceedings.'
    },
    whyUs: [
      'Over 9,200+ GST registrations successfully surrendered with zero residual tax notices.',
      'Comprehensive package including both Form GST REG-16 application and Form GSTR-10 Final Return.',
      'Accurate closing stock ITC reversal computation preventing future audit scrutiny.',
      'Fast-track resolution of departmental Form REG-17 notices and officer queries.',
      'Complete end-to-end guidance for closing corporate current bank accounts.'
    ],
    faqs: [
      {
        q: 'What happens if I just stop filing GST returns without formally cancelling?',
        a: 'If you abandon your GST number, the GST portal continues to levy automated statutory late fees of ₹50 per day (₹20/day for Nil returns) for every single unfiled return. Eventually, the department initiates suo-motu cancellation, issues recovery notices, freezes bank accounts, and blacklists your PAN.'
      },
      {
        q: 'What is Form GSTR-10 and is it mandatory after cancellation?',
        a: 'Yes! Form GSTR-10 is the "Final Return" that must be filed on the GST portal within 3 months of the date of the Form REG-19 cancellation order. Failing to file GSTR-10 attracts heavy statutory late fees and notices.'
      },
      {
        q: 'Do I have to pay tax on closing stock when cancelling GST?',
        a: 'Under Section 29(5) of the CGST Act, you must pay an amount equal to the Input Tax Credit (ITC) claimed on your closing inventory of raw materials, semi-finished goods, finished goods, and un-depreciated capital assets.'
      },
      {
        q: 'How long does it take to receive the Form REG-19 cancellation order?',
        a: 'Once Form GST REG-16 is submitted, the GSTIN status immediately becomes "Suspended". The jurisdictional tax officer evaluates the application and typically issues the final Form REG-19 cancellation order within 15 to 30 working days.'
      },
      {
        q: 'Can a cancelled GST registration be restored later if needed?',
        a: 'If a GST registration was cancelled by the department (suo-motu), it can be revoked via Form GST REG-21 within statutory timelines. However, if you voluntarily surrendered the GSTIN, you cannot revive it; you must apply for a fresh GST registration.'
      },
      {
        q: 'How do I start GST Cancellation with Akshay B2B Solutions?',
        a: 'Click "Apply for GST Cancellation" or contact us at contact@akshayb2bsolutions.com / +91 97180 04839 to share your GST portal credentials and closing stock details for instant filing.'
      }
    ],
    relatedServices: [
      { name: 'GST Return', desc: 'Monthly & quarterly GSTR-1 and GSTR-3B filing with ITC reconciliation.', price: '₹500/month' },
      { name: 'GST Modification', desc: 'Update business address, director details, trade name & bank on GST portal.', price: '₹699 + Govt. Fee' },
      { name: 'GST Registration', desc: 'New 15-digit GSTIN allotment in 3-7 working days.', price: '₹699 + Govt. Fee' },
      { name: 'Corporate Tax', desc: 'Comprehensive corporate income tax computation and ITR-6 filing.', price: '₹2499 + Govt. Fee' },
      { name: 'TAN Registration', desc: 'Allotment of 10-digit Tax Deduction Account Number.', price: '₹699 + Govt. Fee' },
      { name: 'Income Tax Return Filing', desc: 'Accurate tax filing for individuals, firms, and companies.', price: '₹999' }
    ]
  },

  // 4. GST Return — ₹500/month
  {
    slug: 'gst-return',
    name: 'GST Return',
    category: 'Filing',
    parentCategory: 'Tax & Compliance',
    price: '₹500',
    priceType: 'recurring',
    priceDisplay: '₹500/month',
    heroPriceHook: 'Monthly & Quarterly GSTR-1 & GSTR-3B Filing with 100% ITC Reconciliation | Starting at ₹500/month',
    specialCallout: 'Chartered Accountant Assisted Filing & Automated Reconciliation',
    urgencyText: 'Avoid ₹50/day late fees and 18% p.a. interest under Section 50',
    ctaText: 'Start GST Return Filing',
    metaTitle: 'GST Return Filing Online India @ ₹500/mo | GSTR-1 & GSTR-3B Filing',
    metaDescription: 'File monthly and quarterly GST Returns (GSTR-1, GSTR-3B, IFF, CMP-08) online starting at ₹500/month. 100% GSTR-2B Input Tax Credit reconciliation, e-invoicing, and E-Way bill support.',
    seoKeywords: [
      'GST return filing online',
      'GSTR-1 filing',
      'GSTR-3B filing',
      'GST return ₹500 per month',
      'GSTR-2B ITC reconciliation',
      'QRMP scheme return filing',
      'monthly GST compliance',
      'Section 50 GST interest'
    ],
    keywords: [
      'gst-return',
      'gst return',
      'gst return filing',
      'gstr 1',
      'gstr 3b',
      'gstr 1 filing',
      'gstr 3b filing',
      'gst return monthly'
    ],
    heroIntro: 'A GST Return Filing, governed under Section 37 to Section 44 of the Central Goods and Services Tax (CGST) Act, 2017 read with the CGST Rules, is the mandatory periodic statutory declaration submitted by every registered taxpayer (holding an active 15-digit GSTIN) to the Goods and Services Tax Network (GSTN). It summarizes outward supplies (sales), inward supplies (purchases), eligible Input Tax Credit (ITC) claims, and net tax liabilities discharged in cash or credit ledger for a given tax period (monthly or quarterly), ensuring complete transparency and compliance.',
    keyTags: [
      'Sections 37 & 39 CGST Act',
      'Monthly GSTR-1 (Outward Sales)',
      'Monthly GSTR-3B (Summary Tax)',
      '100% GSTR-2B ITC Matching',
      'QRMP Scheme & Nil Return Support'
    ],
    overview: {
      p1: 'Under the Indian GST framework, every active GSTIN must file regular returns (GSTR-1 for reporting sales invoices and GSTR-3B for claiming input tax credit and paying net taxes) regardless of whether commercial transactions occurred. Small taxpayers with aggregate turnover up to ₹5 Crore can elect the Quarterly Return Monthly Payment (QRMP) scheme with quarterly GSTR-1/3B filings.',
      p2: 'Failing to file GST returns on time triggers automated daily late fees (₹50 per day for regular returns, ₹20 per day for Nil returns), compounding 18% annual interest on unpaid tax liabilities under Section 50, blocking of E-Way Bill generation on the portal, and eventual suspension of the GSTIN under Rule 21A. Akshay B2B Solutions provides in-depth purchase-register-to-GSTR-2B reconciliation, e-invoice verification, tax liability computation, and timely return filing.'
    },
    registrationProcessOverview: {
      status: 'Mandatory Periodic Statutory Indirect Tax Compliance for all GSTIN Holders',
      governingAuthority: 'Goods and Services Tax Network (GSTN) & Central Board of Indirect Taxes and Customs (CBIC)',
      summary: 'Data extraction from sales and purchase ledgers, reconciling purchase registers with auto-populated GSTR-2B, computing net cash/credit tax liabilities, generating JSON schema, and filing Form GSTR-1 and GSTR-3B via OTP/DSC.',
      postApproval: 'Generation of official GST Return Application Reference Number (ARN) Receipt confirming statutory compliance.',
      assistanceRole: 'Sales register audit, GSTR-2B ITC matching, tax computation, portal filing, and ARN receipt delivery.'
    },
    whatIs: {
      definition: 'A GST Return is a standardized statutory document filed periodically containing details of sales, purchases, taxes collected, and Input Tax Credit claimed.',
      points: [
        'GSTR-1: Mandatory monthly/quarterly return reporting outward supplies of B2B and B2C goods and services.',
        'GSTR-3B: Mandatory monthly/quarterly summary return declaring total tax liability, claiming ITC, and paying taxes.',
        'IFF (Invoice Furnishing Facility): Optional monthly B2B invoice upload mechanism for QRMP taxpayers.',
        'CMP-08: Quarterly special statement-cum-challan for Composition Scheme taxpayers paying concessional tax.',
        'Enables buyers to view your sales in their GSTR-2B and claim legitimate Input Tax Credit.',
        'Prevents automated blocking of E-Way Bill generation and statutory late filing penalties.'
      ],
      closing: 'It preserves your active GSTIN standing, maximizes input credit claims, and ensures smooth B2B operations.'
    },
    keyCharacteristics: [
      {
        title: 'Monthly & QRMP Cycles',
        description: 'Monthly filers submit GSTR-1 by the 11th and GSTR-3B by the 20th of the following month; QRMP filers submit quarterly by the 13th and 22nd/24th.'
      },
      {
        title: 'GSTR-2B Dynamic Reconciliation',
        description: 'Rigorous invoice-by-invoice reconciliation ensuring ITC is claimed strictly against active supplier invoices in GSTR-2B under Section 16(2)(aa).'
      },
      {
        title: 'E-Way Bill Integration',
        description: 'Defaulting on return filings for two consecutive tax periods automatically blocks the taxpayer from generating E-Way Bills.'
      },
      {
        title: 'Nil Return 1-Click Support',
        description: 'Fast-track SMS or 1-click portal filing for tax periods with zero commercial turnover.'
      }
    ],
    importanceBenefits: {
      intro: 'Filing your GST returns promptly through Akshay B2B Solutions provides decisive financial advantages:',
      benefits: [
        {
          title: 'Maximum & Legitimate ITC Claims (GSTR-2B)',
          desc: 'Our automated reconciliation engine matches your purchase register with GSTR-2B, ensuring zero unclaimed input credit and zero ineligible claims.'
        },
        {
          title: 'Protection from Punitive Late Fees & 18% Interest',
          desc: 'Avoid accumulating thousands of rupees in statutory Section 47 late fees and 18% per annum compounding interest under Section 50.'
        },
        {
          title: 'Preserves Customer Relationships & B2B Trust',
          desc: 'Timely GSTR-1 filing ensures your B2B customers see their input tax credits in their GSTR-2B, avoiding payment withholding.'
        },
        {
          title: 'Uninterrupted E-Way Bill Generation',
          desc: 'Keeps your E-Way Bill portal access active, ensuring smooth nationwide dispatch and transit of goods without road seizures.'
        },
        {
          title: 'Zero Risk of GSTIN Suspension (Rule 21A)',
          desc: 'Prevents automated system suspension and suo-motu cancellation of your GST number by proper officers.'
        }
      ],
      closing: 'It keeps your enterprise indirect tax operations completely compliant and audit-ready.'
    },
    package: {
      title: 'GST Return Filing Complete Package',
      description: 'End-to-end sales ledger reconciliation, GSTR-2B ITC matching, tax computation, GSTR-1 & GSTR-3B filing, and ARN generation.',
      checklist: [
        'Monthly Sales Ledger & Outward Invoice Ingestion and Verification',
        'Automated Purchase Register vs Form GSTR-2B ITC Reconciliation',
        'Computation of Output GST Liability (IGST, CGST, SGST & Cess)',
        'Optimal Utilization of Electronic Credit Ledger vs Cash Payment',
        'Preparation & E-Filing of Form GSTR-1 (Outward Supplies)',
        'Preparation & E-Filing of Form GSTR-3B (Summary Tax Return)',
        'Challan Generation (PMT-06) for Net Cash Tax Settlement',
        'Delivery of Official Application Reference Number (ARN) Receipts'
      ]
    },
    types: [
      {
        title: 'Monthly Return Package (GSTR-1 + GSTR-3B)',
        desc: 'For standard regular taxpayers requiring monthly sales reporting and summary tax filing with full ITC reconciliation.',
        eligibility: 'Standard businesses'
      },
      {
        title: 'QRMP Scheme Package (Quarterly Return)',
        desc: 'For small enterprises (turnover < ₹5 Cr) filing quarterly GSTR-1/3B with monthly PMT-06 challan deposits.',
        eligibility: 'Small businesses'
      },
      {
        title: 'Composition Scheme Package (CMP-08 & GSTR-4)',
        desc: 'For composition taxpayers filing quarterly CMP-08 challans and annual GSTR-4 return.',
        eligibility: 'Composition dealers'
      },
      {
        title: 'Nil GST Return Package',
        desc: 'Economical fast-track return filing for businesses with zero transactions during the tax period.',
        eligibility: 'Dormant / seasonal entities'
      }
    ],
    comparison: {
      title: 'Form GSTR-1 (Sales) vs Form GSTR-3B (Summary Return)',
      headers: ['Parameter', 'Form GSTR-1', 'Form GSTR-3B'],
      rows: [
        { aspect: 'Primary Purpose', col1: 'Detailed reporting of outward sales & invoices', col2: 'Summary declaration of tax liability & ITC claim' },
        { aspect: 'Standard Monthly Due Date', col1: '11th of the following month', col2: '20th of the following month' },
        { aspect: 'Tax Payment Required', col1: 'No tax payment (reporting only)', col2: 'Yes, mandatory settlement of net tax liability' },
        { aspect: 'Input Tax Credit (ITC)', col1: 'Not claimed (reports sales only)', col2: 'Claimed against GSTR-2B auto-population' },
        { aspect: 'Customer Impact', col1: 'Reflects ITC in buyers GSTR-2B', col2: 'Maintains active taxpayer compliance score' }
      ]
    },
    lawsGoverning: {
      actName: 'Central Goods and Services Tax (CGST) Act, 2017 (Sections 37, 38, 39, 47 & 50)',
      authority: 'Goods and Services Tax Network (GSTN) & CBIC',
      points: [
        'Section 37 governing furnishing details of outward supplies in Form GSTR-1.',
        'Section 39 governing monthly/quarterly furnishing of returns in Form GSTR-3B.',
        'Section 16(2)(aa) mandating ITC eligibility strictly based on reflection in GSTR-2B.',
        'Section 47 prescribing statutory late fees for delayed return submission.',
        'Section 50 levying 18% annual interest on delayed cash tax payments.'
      ],
      penalties: 'Delayed filing attracts ₹50/day late fee (₹20/day Nil), 18% interest, E-Way Bill blocking, and GSTIN suspension.'
    },
    eligibilityRequirements: {
      intro: 'Every entity holding an active or suspended Goods and Services Tax Identification Number (GSTIN):',
      criteria: [
        'All active regular taxpayers, composition dealers, and casual taxable persons.',
        'Must file returns even if there were zero purchases or zero sales during the tax period (Nil return).',
        'Entities operating under the QRMP scheme or monthly filing frequency.'
      ],
      documentsRequired: [
        'GST Common Portal Login Credentials (Username & Password)',
        'Monthly Sales Invoices & Credit/Debit Notes (B2B, B2C, Exports, Nil-Rated)',
        'Monthly Purchase Register / Inward Invoices (to reconcile against GSTR-2B)',
        'Bank Statement proving tax payments (if cash challan required)',
        'Authorized Signatory Class 3 DSC or Mobile for Aadhaar OTP verification'
      ]
    },
    processSteps: [
      { step: 1, title: 'Sales Ledger Ingestion & Validation', desc: 'We ingest your monthly sales register, validate HSN codes and GST rates, and compile GSTR-1 data.' },
      { step: 2, title: 'Automated GSTR-2B Reconciliation', desc: 'We download GSTR-2B from the portal, cross-match purchase invoices, and identify eligible vs ineligible ITC.' },
      { step: 3, title: 'Tax Liability Computation & Challan Creation', desc: 'We calculate net tax payable after offsetting eligible ITC and generate the PMT-06 challan if needed.' },
      { step: 4, title: 'GSTR-1 & GSTR-3B E-Filing', desc: 'We file both returns on the GST portal under DSC/OTP and deliver the official ARN acknowledgment receipts.' }
    ],
    postRegistrationCompliance: {
      intro: 'Key recurring obligations after filing GST returns:',
      points: [
        'Verify that your B2B customers have received their Input Tax Credit reflection in their GSTR-2B.',
        'Download and archive the filed GSTR-1 and GSTR-3B PDF summaries and ARN receipts.',
        'Reconcile books of accounts monthly with electronic cash and credit ledgers on the portal.',
        'Prepare for the annual GSTR-9 and GSTR-9C reconciliation return at the close of the financial year.'
      ]
    },
    timelines: {
      tat: 'Same-Day / 24-48 Hours Filing',
      delayFactors: ['Delayed sharing of purchase ledgers by client', 'Significant invoice mismatches against supplier GSTR-2B', 'GST Common Portal server lag on peak deadline dates (11th & 20th)'],
      speedAssurance: 'Our dedicated indirect tax desk processes standard monthly returns within 24 hours of data receipt.'
    },
    certification: {
      issuingAuthority: 'Goods and Services Tax Network (GSTN), Government of India',
      validity: 'Statutory indirect tax compliance proof for the specific tax period filed',
      legalSignificance: 'Official statutory acknowledgment receipt confirming complete legal discharge of indirect tax obligations.',
      contents: [
        'Application Reference Number (ARN) & Token Timestamp',
        '15-Digit GSTIN & Legal Business Name',
        'Tax Period (e.g. May 2025) & Return Type (GSTR-1 / GSTR-3B)',
        'Gross Taxable Turnover Reported & Net Tax Discharged',
        'Digital Verification Hash & Official GSTN Timestamp'
      ]
    },
    fees: {
      govtFee: '₹0 (Portal filing fee is Nil, unless statutory late fees apply for past delayed returns)',
      professionalFee: 'Starting @ ₹500/month (Economical monthly retainer package covering GSTR-1, GSTR-3B, and GSTR-2B matching)',
      transparencyNote: 'Transparent pricing starting at ₹500/month with zero hidden charges.'
    },
    taxation: {
      directTaxImpact: 'GST return filing retainer fees are 100% tax-deductible operational business expenses under Income Tax.',
      gstImplications: 'Guarantees 100% timely recovery and pass-through of Input Tax Credits, optimizing working capital liquidity.',
      deductionsOrExemptions: 'Shields the enterprise from compounding ₹50/day late fees and 18% p.a. interest under Section 50.'
    },
    whyUs: [
      'Over 65,000+ monthly and quarterly GST returns successfully filed with zero penalty confirmations.',
      'Proprietary automated GSTR-2B reconciliation engine ensuring 100% accurate ITC claiming.',
      'Dedicated Chartered Accountant overseeing your monthly tax computations and filings.',
      'Proactive deadline reminders ensuring you never miss an 11th or 20th due date.',
      'Seamless support for QRMP scheme, Composition Scheme, and Nil return filings.'
    ],
    faqs: [
      {
        q: 'What is the difference between Form GSTR-1 and Form GSTR-3B?',
        a: 'GSTR-1 is a statement of outward supplies where you report all your sales invoices, credit notes, and debit notes. GSTR-3B is a summary return where you declare your total sales, claim eligible Input Tax Credit (ITC) from purchases, and pay the net tax liability in cash or credit ledger.'
      },
      {
        q: 'What are the monthly due dates for filing GST returns?',
        a: 'For monthly taxpayers: Form GSTR-1 is due on the 11th of the following month. Form GSTR-3B is due on the 20th of the following month. For QRMP taxpayers: Quarterly GSTR-1 is due on the 13th and GSTR-3B on the 22nd or 24th following the quarter.'
      },
      {
        q: 'What is GSTR-2B and why is it important for claiming Input Tax Credit (ITC)?',
        a: 'GSTR-2B is an auto-generated, static Input Tax Credit (ITC) statement generated on the 14th of every month. Under Section 16(2)(aa) of the CGST Act, a taxpayer can strictly claim ITC only if the supplier has filed their GSTR-1 and the invoice appears in the buyers GSTR-2B.'
      },
      {
        q: 'What is the late fee for delayed GST return filing?',
        a: 'Under Section 47 of the CGST Act, late filing of GSTR-1 or GSTR-3B attracts a statutory late fee of ₹50 per day (₹25 CGST + ₹25 SGST). For Nil returns (zero sales and purchases), the late fee is ₹20 per day (₹10 CGST + ₹10 SGST), capped at statutory limits.'
      },
      {
        q: 'Is it mandatory to file GST returns if there were no sales or purchases in a month?',
        a: 'Yes! Even if your business had zero transactions during a tax period, filing a "Nil Return" is legally mandatory. Failing to file a Nil return will cause statutory late fees of ₹20/day to accumulate automatically.'
      },
      {
        q: 'How do I start monthly GST Return filing with Akshay B2B Solutions?',
        a: 'Click "Start GST Return Filing" or contact us at contact@akshayb2bsolutions.com / +91 97180 04839 to share your sales invoices and purchase registers for fast-track filing.'
      }
    ],
    relatedServices: [
      { name: 'GST Registration', desc: 'New 15-digit GSTIN allotment in 3-7 working days.', price: '₹699 + Govt. Fee' },
      { name: 'GST Modification', desc: 'Update business address, director details, trade name & bank on GST portal.', price: '₹699 + Govt. Fee' },
      { name: 'GST Cancellation & Surrender', desc: 'Lawful surrender and closure of inactive or unneeded GSTIN.', price: '₹999 + Govt. Fee' },
      { name: 'TDS Returns', desc: 'Quarterly Form 24Q, 26Q, and 27Q filing with Form 16 issuance.', price: '₹599/month' },
      { name: 'Income Tax Return Filing', desc: 'Accurate tax filing for individuals, firms, and companies.', price: '₹999' },
      { name: 'Corporate Tax', desc: 'Comprehensive corporate income tax computation and ITR-6 filing.', price: '₹2499 + Govt. Fee' }
    ]
  }
];

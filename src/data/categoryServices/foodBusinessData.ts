import { ServiceDetailConfig } from './types';

export const FOOD_BUSINESS_SERVICES: ServiceDetailConfig[] = [
  {
    slug: 'fssai-registration',
    name: 'FSSAI Registration',
    category: 'Food Business',
    parentCategory: 'Registration & License',
    priceType: 'fixed',
    priceDisplay: '₹899',
    heroPriceHook: 'Basic 14-Digit FSSAI Registration at ₹899 Only | 100% Online FoSCoS Approval',
    specialCallout: 'Fast Track 24-48 Hr Processing',
    urgencyText: 'Instant discount available for 24 hours',
    ctaText: 'Get Started',
    metaTitle: 'FSSAI Basic Registration Online @ ₹899 | FoSCoS Food License Portal',
    metaDescription: 'Apply for 14-digit FSSAI Basic Registration online for petty food businesses, small retailers & cloud kitchens with turnover up to ₹12 Lakhs.',
    seoKeywords: ['FSSAI registration', 'FSSAI basic license', 'FoSCoS registration', 'food license online', 'food safety certificate India', 'petty food business registration'],
    heroIntro: 'Every petty food business operator (FBO), dairy, snack unit, and small home kitchen in India with an annual turnover up to ₹12 Lakhs must hold a mandatory 14-digit FSSAI Basic Registration. Governed by the Food Safety and Standards Authority of India (FSSAI) under the Food Safety and Standards Act, 2006, this registration establishes hygiene compliance, builds consumer trust, and ensures full legal authorization to manufacture, distribute, or sell food items across India.',
    keyTags: ['FSSAI 14-Digit Code', 'Turnover < ₹12 Lakhs', 'FoSCoS Portal', 'Hygiene Compliance', '1-5 Year Validity'],
    overview: {
      p1: 'FSSAI Basic Registration is the foundational statutory authorization issued by the Food Safety and Standards Authority of India for small-scale food operators, hawkers, temporary food stalls, home bakers, and distributors whose annual gross turnover does not exceed ₹12 Lakhs per annum.',
      p2: 'Operating any food-related commercial activity in India without a valid FSSAI registration is a punishable offense under Section 31 of the FSS Act, 2006. Akshay B2B Solutions helps small business owners prepare documentation, map correct food categories on the FoSCoS portal, and obtain fast-track registration certificate delivery within 3 to 5 business days.'
    },
    registrationProcessOverview: {
      status: 'Mandatory',
      governingAuthority: 'Food Safety and Standards Authority of India (FSSAI) / State Food Safety Department',
      summary: 'Filing Form A on the online FoSCoS portal along with applicant ID proof, business premise utility bills, and food category selection.',
      postApproval: 'Issuance of the official 14-digit FSSAI Registration Certificate containing QR code, validity period, and authorized food product codes.',
      assistanceRole: 'Complete application drafting, FoSCoS submission, department query resolution, and digital certificate delivery.'
    },
    whatIs: {
      definition: 'FSSAI Basic Registration is a 14-digit registration number granted to micro and petty food businesses ensuring foundational food safety and quality standards under the FSS Act, 2006.',
      points: [
        'Mandatory for all FBOs with annual turnover below ₹12,00,000.',
        'Encompasses food stalls, small cloud kitchens, canteens, tea stalls, and small retail groceries.',
        'Unique 14-digit number printed on packaging, receipts, and food display counters.',
        'Available with tenure options ranging from 1 year up to 5 years.',
        'Grants eligibility to sell on food delivery aggregators like Zomato, Swiggy, and Blinkit.',
        'Streamlined online approval without mandatory pre-registration physical inspection for petty units.'
      ],
      closing: 'It is the essential starting certificate for any food entrepreneur launching operations in India.'
    },
    keyCharacteristics: [
      {
        title: 'Turnover Ceiling',
        description: 'Specifically restricted to micro FBOs with an annual turnover up to ₹12 Lakhs or daily production capacity under 100 kg/liters.'
      },
      {
        title: 'Validity Term',
        description: 'Issued for a minimum of 1 year and maximum of 5 years as selected during application submission.'
      },
      {
        title: 'Display Mandate',
        description: 'The 14-digit number and FSSAI logo must be visibly displayed at the business premises and printed on all commercial invoices.'
      },
      {
        title: 'Online FoSCoS System',
        description: 'End-to-end digital processing through the unified Food Safety Compliance System portal.'
      }
    ],
    importanceBenefits: {
      intro: 'Securing an FSSAI Basic Registration delivers significant business, legal, and operational advantages:',
      benefits: [
        {
          title: 'Legal Protection',
          desc: 'Protects food ventures against steep fines, raids, and business closure orders from Food Safety Officers.'
        },
        {
          title: 'Consumer Trust',
          desc: 'Displays the standardized FSSAI badge reassuring consumers of strict adherence to hygiene norms.'
        },
        {
          title: 'Online Marketplace Onboarding',
          desc: 'Mandatory prerequisite for listing restaurant menus on Zomato, Swiggy, Zepto, and Amazon Pantry.'
        },
        {
          title: 'Bank Current Account Opening',
          desc: 'Acts as valid official business proof for opening commercial current accounts and merchant QR codes.'
        },
        {
          title: 'Business Scalability',
          desc: 'Allows seamless migration to FSSAI State or Central License when turnover exceeds ₹12 Lakhs.'
        }
      ],
      closing: 'A genuine FSSAI registration establishes enterprise credibility from day one.'
    },
    package: {
      title: 'FSSAI Basic Registration Package',
      description: 'Comprehensive registration package for petty food operators and small retailers.',
      checklist: [
        'Eligibility Check & Food Category Classification',
        'FoSCoS Form A Online Filing & Documentation',
        'Government Application Fee Processing',
        'Photo & Identity Proof Standardization',
        'Direct Liaison with Designated Officer (DO)',
        '14-Digit Digital Certificate Issuance',
        'Packaging & Menu Labeling Compliance Guide',
        'Free Renewal Alerts & Advisory Support'
      ]
    },
    types: [
      {
        title: 'FSSAI Basic Registration (Form A)',
        desc: 'For micro FBOs, temporary stalls, and home-based food ventures with annual turnover up to ₹12 Lakhs.',
        eligibility: 'Turnover ≤ ₹12 Lakhs/year'
      },
      {
        title: 'FSSAI State License (Form B)',
        desc: 'For medium-scale manufacturers, restaurants, distributors, and caterers with turnover between ₹12 Lakhs and ₹20 Crores.',
        eligibility: 'Turnover ₹12 Lakhs - ₹20 Crores'
      },
      {
        title: 'FSSAI Central License (Form B)',
        desc: 'For large manufacturers, 100% EOUs, importers, airport/railway canteens, and large multi-state operations.',
        eligibility: 'Turnover > ₹20 Crores or Importers/Multi-state units'
      }
    ],
    comparison: {
      title: 'FSSAI Basic Registration vs FSSAI State License',
      headers: ['Parameter', 'FSSAI Basic Registration', 'FSSAI State License'],
      rows: [
        { aspect: 'Annual Turnover Limit', col1: 'Up to ₹12 Lakhs', col2: '₹12 Lakhs to ₹20 Crores' },
        { aspect: 'Form Used', col1: 'Form A on FoSCoS', col2: 'Form B on FoSCoS' },
        { aspect: 'Approval Authority', col1: 'Designated Food Safety Officer', col2: 'State Food Safety Commissionerate' },
        { aspect: 'Turnaround Time', col1: '3 - 5 Working Days', col2: '15 - 30 Working Days' },
        { aspect: 'Typical Entities', col1: 'Hawkers, Home Bakers, Small Retail', col2: 'Restaurants, Medium Processors, Caterers' }
      ]
    },
    lawsGoverning: {
      actName: 'Food Safety and Standards Act, 2006',
      authority: 'Food Safety and Standards Authority of India (FSSAI), Ministry of Health & Family Welfare',
      points: [
        'Mandated under Section 31(1) of the FSS Act, 2006.',
        'Governed by Food Safety and Standards (Licensing and Registration of Food Businesses) Regulations, 2011.',
        'Specifies Schedule 4 general hygiene and sanitary practices for food handlers.',
        'Requires clear display of 14-digit registration number on packaging and premise entrances.',
        'Penalties under Section 63 include imprisonment up to 6 months and monetary fines up to ₹5 Lakhs for non-compliance.'
      ],
      penalties: 'Operating without registration can attract up to 6 months imprisonment and fines up to ₹5,00,000.'
    },
    eligibilityRequirements: {
      intro: 'Any petty individual or small enterprise involved in food production or retailing qualifies under the following norms:',
      criteria: [
        'Annual revenue not exceeding ₹12 Lakhs.',
        'Food production capacity (other than milk and meat) under 100 kg/ltr per day.',
        'Procurement or handling of milk up to 500 liters of milk per day.',
        'Slaughtering capacity of 2 large animals, 10 small animals, or 50 poultry birds per day.'
      ],
      documentsRequired: [
        'Passport Size Photograph of Food Business Operator',
        'Government ID Proof (Aadhaar Card / Voter ID / Passport)',
        'Premise Proof (Electricity Bill / Rent Agreement + NOC)',
        'List of Food Product Categories manufactured/handled',
        'Declaration of Annual Turnover & Hygiene Undertaking'
      ]
    },
    processSteps: [
      { step: 1, title: 'Document Collection & Review', desc: 'Our food legal specialists review your KYC, premise proof, and categorize your food items under standard FoSCoS codes.' },
      { step: 2, title: 'Form A Filing on FoSCoS Portal', desc: 'We prepare and submit Form A along with required declarations and pay the government fees electronically.' },
      { step: 3, title: 'Department Scrutiny & Verification', desc: 'The designated Food Safety Officer evaluates the application and issues approval within 3 to 7 working days.' },
      { step: 4, title: 'Certificate Delivery & Compliance Kit', desc: 'Download your authentic 14-digit FSSAI Registration Certificate with QR verification code and display guidelines.' }
    ],
    postRegistrationCompliance: {
      intro: 'Once registered, FBOs must maintain consistent hygiene and regulatory standards:',
      points: [
        'Display the registration certificate and FoSCoS QR code visibly at the retail/prep counter.',
        'Maintain daily cleanliness logs and pest control records as per Schedule 4 guidelines.',
        'Ensure all food handlers wear protective gear and undergo basic medical fitness checks.',
        'Renew the registration at least 30 days prior to expiry to avoid late fee penalties of ₹100/day.',
        'Report any substantial expansion in processing capacity or change of business address.'
      ]
    },
    timelines: {
      tat: '3 to 5 Working Days',
      delayFactors: ['Mismatched address details on electricity bill', 'Incorrect food product category mapping', 'Department server downtime during festival rushes'],
      speedAssurance: 'Our dedicated food regulatory team conducts pre-submission audits ensuring 99.4% first-time approval rate.'
    },
    certification: {
      issuingAuthority: 'Food Safety and Standards Authority of India (FSSAI)',
      validity: '1 to 5 Years (selectable by applicant)',
      legalSignificance: 'Conclusive legal proof that the food business operator is officially authorized and verified under Indian food safety statutes.',
      contents: ['14-Digit Registration Number', 'Business Entity Name & Registered Address', 'List of Permitted Food Categories', 'Date of Issue & Expiry Date', 'Digital QR Code & Signatory Seal']
    },
    fees: {
      govtFee: '₹100 per year (Govt statutory fee)',
      professionalFee: '₹899 (All inclusive legal drafting & filing)',
      transparencyNote: 'Akshay B2B Solutions maintains 100% upfront transparent pricing with zero hidden surcharges.'
    },
    taxation: {
      directTaxImpact: 'FSSAI registration fees and compliance expenses are 100% tax-deductible as legitimate business operational expenditures under the Income Tax Act.',
      gstImplications: 'Food products attract GST rates from 0% to 18% based on HSN classification. FSSAI registration does not automatically trigger GST unless turnover exceeds ₹40/20 Lakhs.',
      deductionsOrExemptions: 'No special food tax exemptions, but input tax credits (ITC) on commercial equipment are claimable if GST-registered.'
    },
    whyUs: [
      'Over 12,000+ FSSAI Food Licenses and Registrations approved nationwide.',
      'Expert FoSCoS category classification preventing regulatory objections.',
      'Fast-track 24-48 hr application filing with proactive government tracking.',
      'Automated renewal alert system ensuring you never incur ₹100/day penalties.',
      'Full post-registration support for Zomato, Swiggy, and Blinkit onboarding.'
    ],
    faqs: [
      { q: 'Is FSSAI Basic Registration mandatory for home bakers and cloud kitchens?', a: 'Yes. Every commercial food entity, including home bakers, cloud kitchens, and tiffin providers with turnover up to ₹12 Lakhs, is legally required to hold an FSSAI Basic Registration.' },
      { q: 'What is the validity period of an FSSAI Basic Registration?', a: 'An applicant can choose a validity period between 1 and 5 years during submission. Higher tenures avoid the hassle of annual renewals.' },
      { q: 'Can I sell on Zomato and Swiggy with an FSSAI Basic Registration?', a: 'Yes. An active 14-digit FSSAI Basic Registration Certificate is fully accepted by Zomato, Swiggy, and other online delivery platforms for restaurant onboarding.' },
      { q: 'What happens if my annual turnover crosses ₹12 Lakhs later?', a: 'You must apply for an upgrade from FSSAI Basic Registration to an FSSAI State License via the FoSCoS portal without losing your existing business identity.' },
      { q: 'What is the penalty for running a food business without FSSAI registration?', a: 'Operating without FSSAI registration can attract imprisonment up to 6 months and a penalty of up to ₹5,00,000 under Section 63 of the FSS Act, 2006.' },
      { q: 'When should I renew my FSSAI registration?', a: 'You must apply for renewal at least 30 days before the expiry date. Renewals filed within the 30-day window incur a mandatory late fee penalty of ₹100 per day.' }
    ],
    relatedServices: [
      { name: 'FSSAI State License', desc: 'For food units with turnover between ₹12 Lakhs and ₹20 Crores.', price: '₹2,499 + Govt. Fee' },
      { name: 'FSSAI Central License', desc: 'For large food manufacturers, importers, and multi-state operations.', price: '₹3,999 + Govt. Fee' },
      { name: 'FSSAI Returns', desc: 'Annual Form D1 and semi-annual milk return filing for licensed units.', price: 'Custom Quote' },
      { name: 'FSSAI Renewal', desc: 'Timely license renewal avoiding late fees and cancellation.', price: 'Custom Quote' },
      { name: 'Trade License', desc: 'Municipal corporation trade permit for operating commercial premises.', price: '₹999 + Govt. Fee' },
      { name: 'Shop and Establishment Certificate', desc: 'Mandatory state labor department registration for commercial establishments.', price: '₹999 + Govt. Fee' }
    ]
  },
  {
    slug: 'fssai-state-license',
    name: 'FSSAI State License',
    category: 'Food Business',
    parentCategory: 'Registration & License',
    priceType: 'fixed',
    priceDisplay: '₹2499 + Govt. Fee (₹2,000–₹5,000)',
    heroPriceHook: 'FSSAI State License at ₹2,499 + Govt Fee (₹2,000-₹5,000) | Full FoSCoS Form B Filing',
    specialCallout: 'Turnover ₹12 Lakhs to ₹20 Crores',
    urgencyText: 'Instant discount available for 24 hours',
    ctaText: 'Get Started',
    metaTitle: 'FSSAI State License Online Application @ ₹2,499 | FoSCoS Form B Filing',
    metaDescription: 'Get your FSSAI State Food License online with full documentation, layout plan vetting, FSMS plan & government liaison for turnover ₹12L - ₹20Cr.',
    seoKeywords: ['FSSAI state license', 'state food license India', 'FSSAI Form B filing', 'restaurant food license', 'food manufacturer license', 'FoSCoS state license fee'],
    heroIntro: 'Food business operators, mid-sized restaurants, distributors, food manufacturers, repackers, and caterers operating within a single state with annual revenues between ₹12 Lakhs and ₹20 Crores must obtain an FSSAI State License. Issued under the Food Safety and Standards (Licensing and Registration of Food Businesses) Regulations, 2011, this license enforces comprehensive food safety management systems (FSMS), detailed production layout approvals, and stringent quality verifications.',
    keyTags: ['Turnover ₹12L - ₹20Cr', 'State Jurisdiction', 'FoSCoS Form B', 'FSMS Plan Required', '1-5 Year Validity'],
    overview: {
      p1: 'The FSSAI State License is a mandatory statutory permit for medium-sized food enterprises operating within state boundaries. It governs mid-scale restaurants, cloud kitchen chains, food packaging units, grain mills, and cold storage facilities.',
      p2: 'Securing an FSSAI State License requires in-depth technical documentation, including equipment lists, factory blueprints, water test reports, and an approved Food Safety Management System (FSMS) plan. Akshay B2B Solutions provides end-to-end legal drafting, authority representation, and query resolution to guarantee compliance without processing delays.'
    },
    registrationProcessOverview: {
      status: 'Mandatory',
      governingAuthority: 'State Food Safety and Drug Administration / State Food Safety Commissioner',
      summary: 'Filing Form B on the FoSCoS portal with detailed factory layout, equipment specs, water analysis report, and FSMS implementation plan.',
      postApproval: 'Issuance of the 14-digit FSSAI State License Certificate granting legal authority to manufacture, process, and distribute food across the state.',
      assistanceRole: 'Blueprint vetting, water test coordination, FSMS documentation, FoSCoS filing, and inspection management.'
    },
    whatIs: {
      definition: 'An FSSAI State License is a comprehensive commercial food license granted by State Licensing Authorities to food enterprises with annual revenue between ₹12 Lakhs and ₹20 Crores.',
      points: [
        'Mandatory for mid-sized manufacturers, hotels (3-star & 4-star), restaurants, and banquet halls.',
        'Requires submission of detailed technical blueprints, machinery horsepower list, and water testing certificates.',
        'Authorizes distribution and wholesale supply within the designated state boundary.',
        'Includes mandatory Food Safety Management System (FSMS) compliance.',
        'Valid for 1 to 5 years subject to periodic state food safety inspections.'
      ],
      closing: 'It provides the institutional backing required to supply to modern retail chains and large corporate clients.'
    },
    keyCharacteristics: [
      {
        title: 'Turnover & Capacity',
        description: 'Applies to businesses with turnover between ₹12 Lakhs and ₹20 Crores, or production capacity up to 2 Metric Tonnes per day.'
      },
      {
        title: 'State Jurisdiction',
        description: 'Covers operations situated within one single state. Multi-state head offices require a Central License.'
      },
      {
        title: 'Technical Audits',
        description: 'Subject to pre-license or post-license on-site inspection by the state Food Safety Officer.'
      },
      {
        title: 'Form B Procedure',
        description: 'Involves multi-page disclosure of manufacturing lines, ingredients, packaging materials, and quality controls.'
      }
    ],
    importanceBenefits: {
      intro: 'An FSSAI State License unlocks major enterprise benefits:',
      benefits: [
        {
          title: 'Institutional Supply Contracts',
          desc: 'Eligible to bid for corporate cafeteria tenders, hotel supplies, and railway catering contracts.'
        },
        {
          title: 'Hyperlocal & Retail Expansion',
          desc: 'Seamlessly distribute goods to supermarkets, modern trade outlets, and regional retail networks.'
        },
        {
          title: 'Food Safety Trust',
          desc: 'Validates strict microbiological safety, water potability, and standard manufacturing hygiene.'
        },
        {
          title: 'Protection from Legal Seizures',
          desc: 'Prevents product recall notices, stock confiscation, and closure penalties by state authorities.'
        },
        {
          title: 'Investor Confidence',
          desc: 'Crucial compliance metric scrutinized during venture capital funding rounds and bank credit appraisals.'
        }
      ],
      closing: 'It solidifies your brand as a professional, compliant, and scalable food enterprise.'
    },
    package: {
      title: 'FSSAI State License Complete Package',
      description: 'End-to-end licensing package with full technical document preparation and government follow-up.',
      checklist: [
        'Eligibility & Capacity Threshold Evaluation',
        'FoSCoS Form B Electronic Application Preparation',
        'FSMS Plan (Food Safety Management System) Drafting',
        'Equipment & Machinery List Standardization',
        'Premise Blueprint / Layout Plan Assistance',
        'NABL-Accredited Water Test Report Guidance',
        'Direct Representation with State Licensing Authority',
        'Digital Certificate Issuance & Annual Compliance Guide'
      ]
    },
    types: [
      {
        title: 'State License for Food Manufacturers',
        desc: 'For dairy processing units, bakeries, edible oil extractors, and food processing plants.',
        eligibility: 'Capacity: 100 kg to 2 MT/day'
      },
      {
        title: 'State License for Restaurants & Caterers',
        desc: 'For mid-tier restaurants, bars, cloud kitchens, and event caterers with turnover > ₹12 Lakhs.',
        eligibility: 'Turnover ₹12L - ₹20Cr'
      },
      {
        title: 'State License for Storage & Wholesalers',
        desc: 'For cold storage facilities, warehouses, distributors, and wholesalers within the state.',
        eligibility: 'Capacity < 10,000 MT'
      }
    ],
    comparison: {
      title: 'FSSAI State License vs FSSAI Central License',
      headers: ['Feature', 'FSSAI State License', 'FSSAI Central License'],
      rows: [
        { aspect: 'Turnover Threshold', col1: '₹12 Lakhs to ₹20 Crores', col2: 'Above ₹20 Crores' },
        { aspect: 'Scope of Operations', col1: 'Within Single State', col2: 'Multi-state or 100% Export / Import' },
        { aspect: 'Issuing Body', col1: 'State FDA Commissioner', col2: 'Central FSSAI Authority, New Delhi' },
        { aspect: 'Government Fee', col1: '₹2,000 to ₹5,000 per year', col2: '₹7,500 per year' },
        { aspect: 'Typical Timeline', col1: '15 to 25 Days', col2: '25 to 40 Days' }
      ]
    },
    lawsGoverning: {
      actName: 'Food Safety and Standards Act, 2006 & Regulations 2011',
      authority: 'State Food Safety and Drug Administration / FSSAI',
      points: [
        'Formulated under Section 31(2) of the FSS Act, 2006.',
        'Requires adherence to Schedule 4 General Principles of Food Hygiene.',
        'Mandates appointment of a qualified Food Safety Supervisor (FSS).',
        'Mandatory testing of water potability twice a year by NABL-accredited labs.',
        'Requires filing of Annual Returns in Form D-1 by 31st May every year for manufacturers.'
      ],
      penalties: 'Operating an eligible unit without a State License attracts fines up to ₹5,00,000 and business closure.'
    },
    eligibilityRequirements: {
      intro: 'Entities meeting any of the following parameters must obtain an FSSAI State License:',
      criteria: [
        'Annual turnover between ₹12,00,000 and ₹20,00,00,000.',
        'Food manufacturing units producing up to 2 Metric Tonnes per day.',
        'Milk chilling centers handling between 501 to 50,000 liters per day.',
        'Cold storage capacity up to 10,000 Metric Tonnes.',
        'All 3-star and 4-star category hotels and standard restaurant chains.'
      ],
      documentsRequired: [
        'Premise Blueprint / Layout Plan showing operational dimensions',
        'List of Directors / Partners / Proprietor with full KYC & Contact Info',
        'List of Machinery with Installed Horsepower and Production Capacity',
        'NABL Laboratory Chemical & Bacteriological Water Analysis Report',
        'Proof of Possession of Premises (Sale Deed / Rent Agreement + NOC)',
        'Food Safety Management System (FSMS) Plan & SOPs',
        'NOC & Copy of License from Local Municipal Body / Panchayat'
      ]
    },
    processSteps: [
      { step: 1, title: 'Technical Dossier Preparation', desc: 'Our food compliance specialists compile your layout plan, machinery specifications, water test report, and FSMS documentation.' },
      { step: 2, title: 'FoSCoS Form B Electronic Filing', desc: 'We file the Form B application, upload technical exhibits, and pay the state government statutory fees.' },
      { step: 3, title: 'Department Scrutiny & Query Resolution', desc: 'We coordinate with the Designated Officer to address clarification requests or additional document calls.' },
      { step: 4, title: 'Site Inspection & License Issuance', desc: 'Following successful inspection by the Food Safety Officer, your 14-digit FSSAI State License is issued and delivered.' }
    ],
    postRegistrationCompliance: {
      intro: 'FSSAI State License holders must adhere to strict ongoing statutory duties:',
      points: [
        'File Annual Return (Form D-1) by 31st May of every financial year on the FoSCoS portal.',
        'Maintain daily oil quality testing, temperature logs, and raw material purchase registers.',
        'Conduct biannual water testing through an FSSAI-notified NABL laboratory.',
        'Employ at least one FoSTaC-trained Food Safety Supervisor per 25 food handlers.',
        'Apply for license renewal at least 30 days before validity expiration.'
      ]
    },
    timelines: {
      tat: '15 to 25 Working Days',
      delayFactors: ['Pending water potability test reports', 'Deficient premise layout drawings', 'Delays in scheduling site inspections by local food inspectors'],
      speedAssurance: 'We pre-vet all documents through retired food inspection officers to eliminate query rounds.'
    },
    certification: {
      issuingAuthority: 'State Food Safety Commissionerate / FSSAI',
      validity: '1 to 5 Years',
      legalSignificance: 'Authorizes commercial manufacturing, storage, catering, and distribution across the state under legal immunity.',
      contents: ['14-Digit State License Number', 'Entity Name & Factory Address', 'Approved Product Categories & Production Limits', 'Official Seal & Signature']
    },
    fees: {
      govtFee: '₹2,000 to ₹5,000/year (depending on business activity and production capacity)',
      professionalFee: '₹2,499 (Complete documentation, FSMS drafting & filing)',
      transparencyNote: 'Exact government fee receipts are provided with 100% financial transparency.'
    },
    taxation: {
      directTaxImpact: 'Licensing fees, water testing costs, and FSMS consulting fees are deductible business expenses under Section 37 of the Income Tax Act.',
      gstImplications: 'State license holders are almost always GST-registered; GST applies to final food products with full input tax credit on food-grade packaging and machinery.',
      deductionsOrExemptions: 'No direct tax exemptions on revenue, but capital investment subsidies are accessible via PMFME and MoFPI schemes.'
    },
    whyUs: [
      'In-house food technologists and experienced regulatory attorneys.',
      'Comprehensive FSMS plan and layout drafting included with zero extra charges.',
      'Assistance in arranging certified NABL water testing and lab reports.',
      'Direct liaison with state food safety commissionerates across all 28 states & 8 UTs.',
      'Over 98.7% first-pass inspection approval track record.'
    ],
    faqs: [
      { q: 'Who is required to obtain an FSSAI State License?', a: 'Any food business operator with an annual turnover between ₹12 Lakhs and ₹20 Crores, or manufacturing units with daily production capacity up to 2 MT, must obtain an FSSAI State License.' },
      { q: 'What is the government fee for an FSSAI State License?', a: 'The government fee varies between ₹2,000 and ₹5,000 per year depending on the nature of business (e.g., ₹2,000 for restaurants/caterers, ₹3,000 to ₹5,000 for manufacturing and processing units).' },
      { q: 'Is a physical inspection mandatory for obtaining an FSSAI State License?', a: 'Yes, for manufacturing, processing, and high-risk categories, the State Food Safety Officer conducts an on-site premise inspection before granting final approval.' },
      { q: 'What is the mandatory Annual Return for FSSAI State Licensees?', a: 'Food manufacturers and importers must file an Annual Return in Form D-1 on FoSCoS by 31st May of every financial year to avoid a late fee penalty of ₹100/day.' },
      { q: 'What is an FSMS plan and is it required?', a: 'An FSMS (Food Safety Management System) plan outlines hazard control and standard operating procedures. It is a mandatory submission for Form B State License applications.' },
      { q: 'Can a State License be transferred if I change my business location?', a: 'No, an FSSAI license is premise-specific. If you relocate to a new address, you must apply for a modification or a new license for the new premise.' }
    ],
    relatedServices: [
      { name: 'FSSAI Registration', desc: 'Basic registration for small food vendors with turnover < ₹12 Lakhs.', price: '₹899' },
      { name: 'FSSAI Central License', desc: 'For large manufacturers, importers, and multi-state headquarters.', price: '₹3,999 + Govt. Fee' },
      { name: 'FSSAI Returns', desc: 'Annual Form D1 and semi-annual milk return compliance.', price: 'Custom Quote' },
      { name: 'FSSAI Renewal', desc: 'Timely license renewal avoiding late fees and cancellation.', price: 'Custom Quote' },
      { name: 'Trade License', desc: 'Municipal trade authorization certificate for commercial premises.', price: '₹999 + Govt. Fee' },
      { name: 'GST Registration', desc: 'Mandatory GSTIN registration for food businesses.', price: '₹699' }
    ]
  },
  {
    slug: 'fssai-central-license',
    name: 'FSSAI Central License',
    category: 'Food Business',
    parentCategory: 'Registration & License',
    priceType: 'fixed',
    priceDisplay: '₹3999 + Govt. Fee',
    heroPriceHook: 'FSSAI Central License at ₹3,999 + Govt Fee | For Importers, Exporters & Large Units (₹20Cr+)',
    specialCallout: 'National & Global Trade Compliant',
    urgencyText: 'Instant discount available for 24 hours',
    ctaText: 'Get Started',
    metaTitle: 'FSSAI Central License Online Application @ ₹3,999 | Importers & Large FBOs',
    metaDescription: 'Obtain your FSSAI Central Food License for food imports, exports, multi-state chains, and large manufacturing facilities with turnover above ₹20 Crores.',
    seoKeywords: ['FSSAI central license', 'food import license India', 'FSSAI export license', 'central food license online', 'FSSAI head office license', 'large scale FBO license'],
    heroIntro: 'Large-scale food manufacturing enterprises, 100% Export Oriented Units (EOUs), food importers holding an Import Export Code (IEC), multi-state cloud kitchen head offices, and airport/seaport catering establishments must hold an FSSAI Central License. Issued directly by the Central Licensing Authority of FSSAI New Delhi, this apex authorization validates international food safety compliance, cross-border customs clearance, and nation-wide commercial distribution.',
    keyTags: ['Turnover > ₹20 Crores', 'Importers & Exporters', 'Multi-State Head Office', 'Central FSSAI Authority', 'Customs Port Clearance'],
    overview: {
      p1: 'The FSSAI Central License represents the highest tier of food safety authorization in India. It is legally mandatory for any enterprise generating annual turnover exceeding ₹20 Crores, food importers and exporters, proprietary food developers, and companies operating food branches across multiple Indian states.',
      p2: 'Securing a Central License requires rigorous regulatory filings, technical dossier vetting, IE-Code mapping on the ICEGATE portal, and direct representation before the Central Licensing Officers. Akshay B2B Solutions manages the complete lifecycle from technical documentation to final central certificate issuance.'
    },
    registrationProcessOverview: {
      status: 'Mandatory',
      governingAuthority: 'Central Licensing Authority, Food Safety and Standards Authority of India (FSSAI), New Delhi',
      summary: 'Filing Form B on FoSCoS portal with IEC details, import-export declarations, product test reports, and multi-state branch documentation.',
      postApproval: 'Issuance of the 14-digit FSSAI Central License permitting nation-wide distribution, seaport/airport customs clearance, and global export operations.',
      assistanceRole: 'Customs port mapping, IEC integration, FSMS plan drafting, and central authority liaison.'
    },
    whatIs: {
      definition: 'An FSSAI Central License is the premier food license issued by the Central Government of India to large-scale food processors, importers, multi-state operators, and defense/seaport catering facilities.',
      points: [
        'Mandatory for all food importers and export-oriented processing units.',
        'Compulsory for food manufacturers with annual turnover above ₹20 Crores.',
        'Required for Head Offices of food chains operating in two or more states.',
        'Governs specialized, proprietary, and genetically modified food products.',
        'Enables direct clearance of imported food consignments at international ports.',
        'Valid for 1 to 5 years with mandatory Form D-1 / D-2 annual return filings.'
      ],
      closing: 'It provides unconditional regulatory clearance for nationwide operations and international trade.'
    },
    keyCharacteristics: [
      {
        title: 'Apex Jurisdiction',
        description: 'Issued directly by Central FSSAI regional directors located across key hubs (New Delhi, Mumbai, Kolkata, Chennai, Guwahati).'
      },
      {
        title: 'Import & Customs Linked',
        description: 'Mandatorily linked to your IEC (Import Export Code) for automated clearance through the ICEGATE Single Window Interface for Facilitating Trade (SWIFT).'
      },
      {
        title: 'High-Volume Production',
        description: 'Covers industrial manufacturing units producing over 2 Metric Tonnes of food products daily.'
      },
      {
        title: 'Proprietary Foods',
        description: 'Enables approval and commercial release of novel ingredients, health supplements, and nutraceutical formulations.'
      }
    ],
    importanceBenefits: {
      intro: 'Holding an FSSAI Central License unlocks premier commercial advantages:',
      benefits: [
        {
          title: 'Import Clearance at Ports',
          desc: 'Seamlessly clear overseas food consignments through Indian customs without demurrage or laboratory detention.'
        },
        {
          title: 'Pan-India Multi-Branch Management',
          desc: 'Single central Head Office license covering procurement, marketing, and logistics for pan-India store chains.'
        },
        {
          title: 'Government & Defense Contracts',
          desc: 'Eligible to supply to Indian Railways (IRCTC), Armed Forces (Canteen Stores Department), and international airlines.'
        },
        {
          title: 'Global Export Authorization',
          desc: 'Issuance of Health Certificates and Free Sale Certificates required by foreign importing customs authorities.'
        },
        {
          title: 'FMCG Brand Leadership',
          desc: 'Signals highest tier compliance, essential for national supermarket distribution and public IPO listings.'
        }
      ],
      closing: 'It establishes full institutional scale for high-growth food corporations.'
    },
    package: {
      title: 'FSSAI Central License Enterprise Package',
      description: 'Comprehensive licensing package for large enterprises, multi-state operators, and importers.',
      checklist: [
        'Pre-Filing Eligibility & Production Capacity Audit',
        'IEC & ICEGATE Port Mapping Verification',
        'FoSCoS Central Form B Filing & Technical Exhibits',
        'Nutraceutical & Proprietary Food Classification',
        'Advanced FSMS Plan & Recall Management Manual',
        'Representation with Central Licensing Authority (CLA)',
        '14-Digit Central License Issuance & Customs Integration',
        'Post-License Annual Return & Lab Testing Advisory'
      ]
    },
    types: [
      {
        title: 'Central License for Importers',
        desc: 'Mandatory for bringing foreign food items, beverages, and raw ingredients into Indian domestic tariff areas.',
        eligibility: 'Valid IEC Code required'
      },
      {
        title: 'Central License for Large Manufacturers',
        desc: 'For dairy units (>50,000 LPD), meat processing, vegetable oil refineries, and food plants (>2 MT/day).',
        eligibility: 'Turnover > ₹20 Crores'
      },
      {
        title: 'Central License for Multi-State Head Offices',
        desc: 'For enterprise headquarters controlling food outlets, dark kitchens, or warehouses in 2+ states.',
        eligibility: 'Operations in 2+ states'
      },
      {
        title: 'Central License for Defense & Seaport Units',
        desc: 'For food catering units operating inside international airports, seaports, and military cantonments.',
        eligibility: 'Specific zone allocation'
      }
    ],
    comparison: {
      title: 'Central License vs State License vs Basic Registration',
      headers: ['Parameter', 'Basic Registration', 'State License', 'Central License'],
      rows: [
        { aspect: 'Annual Revenue', col1: 'Up to ₹12 Lakhs', col2: '₹12 Lakhs to ₹20 Crores', col3: 'Above ₹20 Crores' },
        { aspect: 'Import / Export', col1: 'Not Eligible', col2: 'Not Eligible', col3: 'Mandatory for All Importers' },
        { aspect: 'Multi-State HO', col1: 'No', col2: 'No', col3: 'Yes (1 Central + State per unit)' },
        { aspect: 'Governing Body', col1: 'Designated Officer', col2: 'State Food Commissioner', col3: 'Central FSSAI Authority' },
        { aspect: 'Annual Returns', col1: 'Not Required', col2: 'Form D-1 (Manufacturers)', col3: 'Form D-1 & Form D-2 (Mandatory)' }
      ]
    },
    lawsGoverning: {
      actName: 'Food Safety and Standards Act, 2006 (Central Jurisdiction)',
      authority: 'Food Safety and Standards Authority of India (FSSAI), Central Authority, New Delhi',
      points: [
        'Governed under Section 31 of FSS Act and Food Safety and Standards (Import) Regulations, 2017.',
        'Requires integration with the Indian Customs Electronic Commerce/Electronic Data Interchange (EC/EDI) Gateway.',
        'Mandatory testing of samples at accredited referral food laboratories.',
        'Strict compliance with Food Safety and Standards (Packaging and Labelling) Regulations, 2011.',
        'Mandates appointment of certified technical directors and compliance officers.'
      ],
      penalties: 'Importing food without central authorization invites customs confiscation and penalties up to ₹10,00,000.'
    },
    eligibilityRequirements: {
      intro: 'Any business entity falling under the following statutory criteria must secure an FSSAI Central License:',
      criteria: [
        'All food importers and 100% Export Oriented Units (EOUs).',
        'Food manufacturing or processing units with annual turnover exceeding ₹20 Crores.',
        'Dairy units handling over 50,000 liters of liquid milk per day or 2,500 MT of milk solids per annum.',
        'Edible oil refineries producing over 2 Metric Tonnes per day.',
        'Head offices of food business operators operating in two or more states or UTs.'
      ],
      documentsRequired: [
        'Import Export Code (IEC) Certificate issued by DGFT (for importers/exporters)',
        'Factory Layout Blueprint showing production lines and equipment layout',
        'Detailed List of Machinery and Installed Horsepower Capacity',
        'NABL Laboratory Water Potability Analysis Report',
        'Certificate of Incorporation / MOA / AOA / Partnership Deed',
        'Food Safety Management System (FSMS) Plan & Recall Procedure Manual',
        'NOC / Authorization letter from Central Ministry / Airport / Seaport Authority (if applicable)'
      ]
    },
    processSteps: [
      { step: 1, title: 'Scope & IEC Verification', desc: 'Our corporate food attorneys verify your turnover, production volume, and map your IEC code for import/export clearances.' },
      { step: 2, title: 'Form B Filing on FoSCoS Central Portal', desc: 'We compile the technical engineering blueprints, FSMS manuals, water test reports, and submit Form B to the Central Authority.' },
      { step: 3, title: 'Central Authority Liaison & Scrutiny', desc: 'We coordinate with Central Licensing Officers at FSSAI headquarters and promptly resolve technical clarifications.' },
      { step: 4, title: 'Inspection & Central License Grant', desc: 'Following verification, the Central Licensing Authority issues your 14-digit Central License with instant customs portal activation.' }
    ],
    postRegistrationCompliance: {
      intro: 'Central License holders must maintain highest standard continuous compliances:',
      points: [
        'File mandatory Annual Return in Form D-1 by 31st May every year on the FoSCoS portal.',
        'Milk and dairy units must file half-yearly returns in Form D-2 within 30 days of period end.',
        'Maintain batch-wise laboratory testing records for all manufactured or imported consignments.',
        'Ensure mandatory 14-digit central license number is printed on all consumer packaging.',
        'Notify the Central Licensing Authority of any change in directors, recipes, or storage capacity.'
      ]
    },
    timelines: {
      tat: '25 to 40 Working Days',
      delayFactors: ['Complex multi-product ingredient clearance', 'Delay in NABL lab testing results', 'Customs portal data synchronization'],
      speedAssurance: 'Our dedicated senior food legal team ensures thorough dossier preparation to expedite central approval.'
    },
    certification: {
      issuingAuthority: 'Central Licensing Authority, FSSAI, New Delhi',
      validity: '1 to 5 Years',
      legalSignificance: 'Apex food license granting legal authority for international trade, pan-India distribution, and large-scale manufacturing.',
      contents: ['14-Digit Central License Number', 'Entity Legal Name & Registered Office', 'Customs Port Clearance Allocation', 'Approved Product Lines & Installed Capacity', 'Official Seal & QR Verification Code']
    },
    fees: {
      govtFee: '₹7,500 per year (Fixed Central Government Statutory Fee)',
      professionalFee: '₹3,999 (Complete documentation, IEC integration & liaison)',
      transparencyNote: 'Official government receipt provided for all statutory fee payments.'
    },
    taxation: {
      directTaxImpact: 'Central licensing fees, laboratory testing fees, and recall insurance premiums are deductible business costs under Section 37 of the Income Tax Act.',
      gstImplications: 'Food imports attract Integrated GST (IGST) in addition to Basic Customs Duty (BCD), with complete input tax credit (ITC) available upon domestic sale.',
      deductionsOrExemptions: 'Export of food products is zero-rated under GST, enabling full refunds of unutilized input tax credits.'
    },
    whyUs: [
      'Experienced legal team handling complex import-export and FMCG licensing.',
      'Specialized in proprietary food approval, nutraceuticals, and dietary supplements.',
      'Direct customs integration and ICEGATE port code activation support.',
      'Comprehensive FSMS manual and recall plan drafting included.',
      'Dedicated compliance manager for annual returns and FSSAI audit preparation.'
    ],
    faqs: [
      { q: 'Is an FSSAI Central License mandatory for importing food into India?', a: 'Yes. Any individual or business importing food products into India must mandatorily hold an FSSAI Central License linked to their Import Export Code (IEC).' },
      { q: 'What is the government fee for an FSSAI Central License?', a: 'The government statutory fee for an FSSAI Central License is ₹7,500 per year across all categories.' },
      { q: 'If my business operates in 3 states, do I need 3 licenses or 1 Central License?', a: 'You need 1 FSSAI Central License for your Head Office, plus individual State Licenses or Basic Registrations for each operational branch or outlet in respective states.' },
      { q: 'Can an FSSAI Central License be used for export of food items?', a: 'Yes. An FSSAI Central License authorizes the holder to manufacture and export food products and apply for official Free Sale and Health Certificates.' },
      { q: 'What is the penalty for operating without a Central License when eligible?', a: 'Operating without a mandatory Central License attracts severe penalties, including seizure of goods, customs blacklisting, fines up to ₹10,00,000, and imprisonment.' },
      { q: 'How long is an FSSAI Central License valid?', a: 'You can apply for a validity period between 1 and 5 years. Renewal applications must be submitted at least 30 days before expiry.' }
    ],
    relatedServices: [
      { name: 'IEC Registration', desc: 'Mandatory 10-digit Import Export Code from DGFT.', price: '₹1,750' },
      { name: 'FSSAI State License', desc: 'For mid-scale food units with turnover between ₹12L and ₹20Cr.', price: '₹2,499 + Govt. Fee' },
      { name: 'FSSAI Returns', desc: 'Annual Form D-1 and Form D-2 return filing for licensed units.', price: 'Custom Quote' },
      { name: 'FSSAI Renewal', desc: 'Timely license renewal avoiding late fees and cancellation.', price: 'Custom Quote' },
      { name: 'ICEGATE Registration', desc: 'Customs portal registration for electronic bill of entry filing.', price: '₹1,999' },
      { name: 'AD Code Registration', desc: 'Authorized Dealer code registration at customs air and sea ports.', price: '₹3,500' }
    ]
  },
  {
    slug: 'fssai-returns',
    name: 'FSSAI Returns',
    category: 'Food Business',
    parentCategory: 'Registration & License',
    priceType: 'edit_price',
    priceDisplay: 'Get Custom Quote',
    heroPriceHook: 'Annual Form D-1 & Semi-Annual Form D-2 FoSCoS Return Filing | Get Custom Quote',
    specialCallout: 'Avoid ₹100/Day Mandatory Penalty',
    urgencyText: 'Get a free quote today',
    ctaText: 'Get Custom Quote',
    metaTitle: 'FSSAI Annual Returns Filing Online (Form D-1 / D-2) | FoSCoS Return Expert',
    metaDescription: 'File your mandatory FSSAI Annual Return Form D-1 and Semi-Annual Return Form D-2 on FoSCoS online to prevent ₹100 per day late filing penalties.',
    seoKeywords: ['FSSAI annual return', 'Form D1 filing', 'FSSAI return filing online', 'Form D2 milk return', 'FoSCoS return deadline', 'food license return compliance'],
    heroIntro: 'Every food manufacturing enterprise, processor, repacker, relabeller, and importer holding an FSSAI State or Central License is legally mandated to file an Annual Return in Form D-1 on the FoSCoS portal on or before 31st May of every financial year. Dairy and milk processing units must also submit half-yearly returns in Form D-2. Timely return filing prevents automatic statutory penalties of ₹100 per day and ensures clean compliance standing.',
    keyTags: ['Form D-1 Annual Return', 'Deadline 31st May', 'Form D-2 Milk Return', 'FoSCoS Portal', 'Production & Sales Data'],
    overview: {
      p1: 'FSSAI Returns are statutory financial and production reports submitted electronically by licensed Food Business Operators to declare product-wise manufacturing quantities, sales volumes, handling capacity, import consignments, and exported shipments for the preceding financial year.',
      p2: 'Under Clause 2.1.13 of the Food Safety and Standards (Licensing and Registration of Food Businesses) Regulations, 2011, failure to submit returns by the 31st May deadline attracts an automatic late fee penalty of ₹100 per day until compliance. Akshay B2B Solutions assists food businesses in compiling accurate batch production logs and filing flawless FoSCoS returns.'
    },
    registrationProcessOverview: {
      status: 'Mandatory',
      governingAuthority: 'Food Safety and Standards Authority of India (FSSAI)',
      summary: 'Aggregating annual production, packaging, sales, import, and export volumes and uploading structured Form D-1 / D-2 data on FoSCoS.',
      postApproval: 'Generation of the official FSSAI Return Filing Acknowledgement Slip containing transaction hash and verification stamp.',
      assistanceRole: 'Data collation, HSN/product code alignment, electronic return submission, and penalty mitigation.'
    },
    whatIs: {
      definition: 'FSSAI Returns are annual and semi-annual compliance statements filed on FoSCoS detailing the annual volume and value of food products manufactured, processed, imported, or exported.',
      points: [
        'Mandatory for all food manufacturers, processors, repackers, and importers.',
        'Form D-1 covers annual production and sales figures (due 31st May).',
        'Form D-2 covers half-yearly operations for milk and dairy businesses.',
        'Requires itemized breakdown of food categories, pack sizes, and selling prices.',
        'Filed 100% online through the FoSCoS Annual Return module.',
        'Late filing triggers a non-negotiable statutory fine of ₹100 per day.'
      ],
      closing: 'Filing returns on time safeguards your FSSAI license against suspension or show-cause notices.'
    },
    keyCharacteristics: [
      {
        title: 'Statutory Due Date',
        description: 'Form D-1 must be filed on or before 31st May following the close of the financial year on 31st March.'
      },
      {
        title: 'Applicability Scope',
        description: 'Mandatory for State and Central License holders. Pure restaurants and petty retailers are currently exempt.'
      },
      {
        title: 'Product-Level Data',
        description: 'Requires disclosure of raw material intake, installed capacity utilization, and finished goods dispatch.'
      },
      {
        title: 'Penalty Structure',
        description: 'Statutory penalty of ₹100 per day starts automatically from 1st June until the return is successfully submitted.'
      }
    ],
    importanceBenefits: {
      intro: 'Filing timely FSSAI Returns ensures uninterrupted commercial operations:',
      benefits: [
        {
          title: 'Zero Late Fee Penalties',
          desc: 'Avoid accumulating expensive compounding fines of ₹100/day (up to thousands of rupees per license).'
        },
        {
          title: 'License Renewal Eligibility',
          desc: 'FoSCoS blocks license renewal applications if past annual returns remain pending.'
        },
        {
          title: 'Clean Food Safety Standing',
          desc: 'Prevents automatic inspection flags, audit notices, and department inquiries by state food safety officers.'
        },
        {
          title: 'Corporate Tender Qualification',
          desc: 'Government supply tenders and e-commerce platforms mandate submission of past filed return acknowledgments.'
        },
        {
          title: 'Data Consistency',
          desc: 'Maintains harmonized production disclosures aligned with your GST returns and income tax balance sheets.'
        }
      ],
      closing: 'Proactive return filing preserves your business reputation and operational continuity.'
    },
    package: {
      title: 'FSSAI Return Filing Professional Service',
      description: 'Pricing depends on your business requirement — talk to our expert for a free quote.',
      checklist: [
        'Annual Production & Sales Data Review',
        'Product Category & FoSCoS Item Code Reconciliation',
        'Form D-1 / Form D-2 Electronic Preparation',
        'Dairy & Milk Handling Volume Verification (if applicable)',
        'Import / Export Consignment Cross-Matching',
        'Online FoSCoS Submission & Acknowledgement Delivery',
        'Past Penalty Calculation & Mitigation Guidance',
        'Annual Compliance Calendar & Renewal Reminders'
      ]
    },
    types: [
      {
        title: 'Form D-1 (Annual Return)',
        desc: 'For all food manufacturers, processors, repackers, relabellers, and importers. Due annually by 31st May.',
        eligibility: 'All licensed manufacturers/importers'
      },
      {
        title: 'Form D-2 (Half-Yearly Milk Return)',
        desc: 'Exclusively for dairy units, milk collection centers, and milk chilling plants. Due twice a year.',
        eligibility: 'Dairy and milk processing FBOs'
      }
    ],
    comparison: {
      title: 'Form D-1 vs Form D-2 Comparison',
      headers: ['Parameter', 'Form D-1 (Annual Return)', 'Form D-2 (Milk Return)'],
      rows: [
        { aspect: 'Frequency', col1: 'Once a Year', col2: 'Twice a Year (Half-Yearly)' },
        { aspect: 'Due Date', col1: '31st May (Every Year)', col2: '30th April & 31st October' },
        { aspect: 'Target FBOs', col1: 'All Food Manufacturers & Importers', col2: 'Dairy & Milk Processing Plants' },
        { aspect: 'Late Fee', col1: '₹100 per day', col2: '₹100 per day' },
        { aspect: 'Key Information', col1: 'Manufactured Qty, Sale Price, Export Qty', col2: 'Milk Procurement, Fat %, Solid Non-Fat %' }
      ]
    },
    lawsGoverning: {
      actName: 'Food Safety and Standards (Licensing and Registration) Regulations, 2011',
      authority: 'Food Safety and Standards Authority of India (FSSAI)',
      points: [
        'Mandated under Regulation 2.1.13 of FSS Regulations, 2011.',
        'FSSAI Order dated 18th December 2020 mandating 100% online return filing via FoSCoS.',
        'Physical hard-copy return submissions are no longer accepted by the department.',
        'Mandatory statutory late penalty of ₹100 per day enforced under Section 63/Regulation 2.1.13.',
        'Non-filing can result in suspension of FSSAI license and refusal of annual renewals.'
      ],
      penalties: 'Statutory late fine of ₹100/day starting 1st June; continuous default leads to license cancellation.'
    },
    eligibilityRequirements: {
      intro: 'The following food business operators are legally obligated to file annual FSSAI returns:',
      criteria: [
        'All holders of FSSAI State Licenses under manufacturing/processing categories.',
        'All holders of FSSAI Central Licenses under manufacturing, processing, or importing categories.',
        'Repackers, relabellers, and 100% Export Oriented Units.',
        'All milk and dairy processing units handling over 500 liters/day.'
      ],
      documentsRequired: [
        'Active FSSAI License Number & FoSCoS Login Credentials',
        'Statement of Monthly Production Quantities (in MT / Kg / Liters)',
        'Itemized List of Food Products manufactured with brand names',
        'Sales Value and Quantity dispatched in domestic market',
        'Details of Imported raw materials and Exported finished goods (if applicable)'
      ]
    },
    processSteps: [
      { step: 1, title: 'Production Data Collection', desc: 'We collect your monthly production logs, sales records, and product category classifications.' },
      { step: 2, title: 'Data Reconciliation & Form D-1 Draft', desc: 'Our food legal specialists compile and format the data in accordance with FoSCoS category codes.' },
      { step: 3, title: 'Electronic Submission on FoSCoS', desc: 'We log into your FoSCoS portal, upload the verified return statements, and complete submission.' },
      { step: 4, title: 'Filing Acknowledgement Issuance', desc: 'You receive the official FSSAI Return Filing Acknowledgement with transaction reference for your records.' }
    ],
    postRegistrationCompliance: {
      intro: 'Post return submission, businesses must maintain compliance readiness:',
      points: [
        'Preserve copies of filed Form D-1 acknowledgments for a minimum of 5 years.',
        'Ensure reported production quantities reconcile with annual audited financial statements.',
        'Track upcoming license renewal dates to submit renewal applications 30 days prior to expiry.',
        'Conduct periodic calibration of production meters and laboratory testing of food batches.'
      ]
    },
    timelines: {
      tat: '1 to 2 Working Days',
      delayFactors: ['Unorganized monthly production records', 'Password recovery for FoSCoS portal', 'FoSCoS server traffic during last week of May'],
      speedAssurance: 'We recommend submitting data by 15th May to avoid peak server congestion.'
    },
    certification: {
      issuingAuthority: 'Food Safety Compliance System (FoSCoS), FSSAI',
      validity: 'Valid for the filed Financial Year',
      legalSignificance: 'Official evidentiary record proving fulfillment of statutory annual compliance under FSS Regulations.',
      contents: ['License Number', 'Financial Year', 'Date & Time of Submission', 'Product Categories Reported', 'QR Code & Filing Reference ID']
    },
    fees: {
      govtFee: 'Nil (₹0 Government Fee if filed before 31st May; ₹100/day late fine if delayed)',
      professionalFee: 'Transparent Custom Quote based on product lines and data complexity',
      transparencyNote: 'Pricing depends on your business requirement — talk to our expert for a free quote.'
    },
    taxation: {
      directTaxImpact: 'Professional fees paid for statutory compliance and return filing are fully deductible business expenses under the Income Tax Act.',
      gstImplications: 'Reported sales values in FSSAI Form D-1 should reconcile with annual GST returns (GSTR-9) to avoid audit discrepancy queries.',
      deductionsOrExemptions: 'No tax deductions, but avoiding statutory penalties directly protects net operating margins.'
    },
    whyUs: [
      'Over 8,500+ FSSAI Annual Returns filed on FoSCoS with zero rejection rate.',
      'Dedicated team of food regulatory accountants and compliance specialists.',
      'Fast 24-hour turnaround for urgent filings near the 31st May deadline.',
      'Complete reconciliation with GST and audited financial accounts.',
      'Proactive annual reminders to eliminate all late fee penalties.'
    ],
    faqs: [
      { q: 'What is the last date to file the FSSAI Annual Return Form D-1?', a: 'The statutory due date for filing FSSAI Annual Return Form D-1 is 31st May of every year for the preceding financial year.' },
      { q: 'What is the penalty if I miss the 31st May deadline?', a: 'A mandatory late fee penalty of ₹100 per day is automatically levied on the FoSCoS portal starting from 1st June until the return is successfully filed.' },
      { q: 'Are restaurants and cloud kitchens required to file Form D-1?', a: 'Pure restaurants, fast food outlets, caterers, and canteens are currently exempt from filing Form D-1 unless they also hold a manufacturing or processing endorsement.' },
      { q: 'Can I file FSSAI returns in offline physical mode?', a: 'No. FSSAI has discontinued physical return submissions. All returns must be submitted electronically through the FoSCoS portal.' },
      { q: 'What is Form D-2 and who needs to file it?', a: 'Form D-2 is a semi-annual return specifically applicable to milk and dairy processing units, due on 30th April and 31st October.' },
      { q: 'Can I renew my FSSAI License if my previous year return is pending?', a: 'FoSCoS restricts license renewal applications if past mandatory annual returns are overdue until the returns are filed and late fees cleared.' }
    ],
    relatedServices: [
      { name: 'FSSAI State License', desc: 'For food manufacturing and processing units with turnover ₹12L - ₹20Cr.', price: '₹2,499 + Govt. Fee' },
      { name: 'FSSAI Central License', desc: 'For large food manufacturers, importers, and multi-state units.', price: '₹3,999 + Govt. Fee' },
      { name: 'FSSAI Renewal', desc: 'Timely license renewal avoiding late fees and cancellation.', price: 'Custom Quote' },
      { name: 'GST Return', desc: 'Monthly and quarterly GST return filing for compliant food businesses.', price: '₹500/Month' },
      { name: 'TDS Returns', desc: 'Quarterly TDS compliance and Form 24Q/26Q filings.', price: '₹599/Month' },
      { name: 'Income Tax Return Filing', desc: 'Annual corporate and business tax return preparation and filing.', price: '₹999' }
    ]
  },
  {
    slug: 'fssai-renewal',
    name: 'FSSAI Renewal',
    category: 'Food Business',
    parentCategory: 'Registration & License',
    priceType: 'edit_price',
    priceDisplay: 'Get Custom Quote',
    heroPriceHook: 'Fast-Track FSSAI License & Registration Renewal on FoSCoS | Get Custom Quote',
    specialCallout: 'Zero Business Disruption',
    urgencyText: 'Get a free quote today',
    ctaText: 'Get Custom Quote',
    metaTitle: 'FSSAI License Renewal Online | FoSCoS Renewal Application Portal',
    metaDescription: 'Renew your FSSAI Basic Registration, State License, or Central License online on FoSCoS before expiry to avoid license cancellation and daily late fees.',
    seoKeywords: ['FSSAI renewal', 'food license renewal online', 'FoSCoS renewal process', 'FSSAI late fee renewal', 'renew food registration', 'FSSAI validity extension'],
    heroIntro: 'Every FSSAI Basic Registration, State License, and Central License is issued for a fixed validity period between 1 and 5 years. Food Business Operators must submit a renewal application on the FoSCoS portal at least 30 days prior to the certificate expiry date. Renewing on time prevents automatic late fees of ₹100 per day, maintains continuous legal validity on food aggregator platforms, and protects your enterprise against license cancellation.',
    keyTags: ['FoSCoS Portal', '30-Day Prior Window', '1-5 Year Extension', 'Avoid Daily Penalties', 'Continuous Legitimacy'],
    overview: {
      p1: 'FSSAI License Renewal is the statutory process of extending the legal validity of an existing 14-digit food license or registration certificate. The application must be filed within the 180-day window before expiry and at least 30 days before the expiration date to avoid late fee penalties.',
      p2: 'If a license expires without renewal, the 14-digit number becomes permanently invalid, requiring the business to cease operations and apply for a brand new license from scratch. Akshay B2B Solutions tracks renewal timelines, handles documentation updates, and completes swift renewal processing.'
    },
    registrationProcessOverview: {
      status: 'Mandatory for Continuing Operations',
      governingAuthority: 'Food Safety and Standards Authority of India (FSSAI)',
      summary: 'Filing renewal application on FoSCoS, updating operational details, submitting annual return proofs, and paying statutory renewal fees.',
      postApproval: 'Issuance of the renewed 14-digit FSSAI Certificate with updated validity period (1 to 5 years).',
      assistanceRole: 'Audit of past compliances, Form A/B renewal preparation, query resolution, and renewed certificate delivery.'
    },
    whatIs: {
      definition: 'FSSAI Renewal is the statutory procedure to renew an expiring FSSAI Registration or License on the FoSCoS portal for an additional 1 to 5 years.',
      points: [
        'Applicable to all Basic Registrations, State Licenses, and Central Licenses.',
        'Renewal window opens 180 days before the official expiration date.',
        'Must be submitted at least 30 days before expiry to avoid late fee penalties.',
        'Filing within the last 30 days attracts an automatic penalty of ₹100 per day.',
        'Post-expiry, a license cannot be renewed and becomes completely void.',
        'Maintains existing 14-digit license number and business continuity.'
      ],
      closing: 'Timely renewal protects your commercial identity on packaging, billing, and food delivery apps.'
    },
    keyCharacteristics: [
      {
        title: 'Application Window',
        description: 'Eligible for renewal starting 180 days before expiration date on the FoSCoS portal.'
      },
      {
        title: 'Late Fee Trigger',
        description: 'Applications submitted within 30 days prior to expiry incur a mandatory statutory late fee of ₹100 per day.'
      },
      {
        title: 'Non-Renewable Expiry',
        description: 'Once the expiry date passes, the license cannot be renewed under any circumstance; a fresh license must be applied for.'
      },
      {
        title: 'Retains 14-Digit Number',
        description: 'Successful renewal preserves your original 14-digit FSSAI number and all associated registrations.'
      }
    ],
    importanceBenefits: {
      intro: 'Renewing your FSSAI license proactively provides essential safeguards:',
      benefits: [
        {
          title: 'Uninterrupted Aggregator Listings',
          desc: 'Prevents automatic de-listing of your restaurant or grocery store from Zomato, Swiggy, and Blinkit.'
        },
        {
          title: 'Packaging Continuity',
          desc: 'Avoids costly reprint cycles for consumer packaging, labels, and cartons bearing your 14-digit code.'
        },
        {
          title: 'Elimination of Late Fees',
          desc: 'Saves ₹100 per day in compounding late fees by filing before the 30-day pre-expiry cutoff.'
        },
        {
          title: 'Regulatory Immunity',
          desc: 'Shields the food business from raids, closure notices, and un-licensed operating penalties up to ₹5 Lakhs.'
        },
        {
          title: 'Simplified Documentation',
          desc: 'Renewal requires significantly fewer documents than applying for a fresh new license.'
        }
      ],
      closing: 'It guarantees that your enterprise maintains continuous, unbroken legal compliance.'
    },
    package: {
      title: 'FSSAI Renewal Complete Service',
      description: 'Pricing depends on your business requirement — talk to our expert for a free quote.',
      checklist: [
        'Expiry Date & Renewal Eligibility Audit',
        'Past Annual Return (Form D-1) Filing Status Check',
        'FoSCoS Renewal Form A / Form B Preparation',
        'Premise Proof & Contact Details Updates',
        'Statutory Government Renewal Fee Payment Assistance',
        'Direct Liaison with Licensing Authority for Expedited Approval',
        'Updated 14-Digit Certificate Download & Verification',
        'Automated Alerts for Future Expiries & Compliance'
      ]
    },
    types: [
      {
        title: 'FSSAI Basic Registration Renewal',
        desc: 'For petty food businesses with turnover up to ₹12 Lakhs. Fast-track 3-5 day approval.',
        eligibility: 'Existing Basic Registration'
      },
      {
        title: 'FSSAI State License Renewal',
        desc: 'For restaurants, processors, and caterers with turnover ₹12L - ₹20Cr.',
        eligibility: 'Existing State License'
      },
      {
        title: 'FSSAI Central License Renewal',
        desc: 'For large manufacturers, multi-state HOs, and importers. Central Authority processing.',
        eligibility: 'Existing Central License'
      }
    ],
    comparison: {
      title: 'Timely Renewal vs Expired License Consequences',
      headers: ['Aspect', 'Timely Renewal (>30 Days)', 'Late Renewal (<30 Days)', 'Expired License (>0 Days)'],
      rows: [
        { aspect: 'Government Late Fee', col1: '₹0 (Standard Fee Only)', col2: '₹100 per day penalty', col3: 'Cannot Renew (Void)' },
        { aspect: '14-Digit Number', col1: 'Retained 100%', col2: 'Retained 100%', col3: 'Permanently Lost' },
        { aspect: 'Zomato/Swiggy Status', col1: 'Active & Continuous', col2: 'Active & Continuous', col3: 'Instantly Delisted / Blocked' },
        { aspect: 'Packaging Impact', col1: 'Zero Reprints Needed', col2: 'Zero Reprints Needed', col3: 'Must Scrap Old Printed Stock' },
        { aspect: 'Processing Effort', col1: 'Fast Simplified Verification', col2: 'Fast Simplified Verification', col3: 'Full Fresh Application Needed' }
      ]
    },
    lawsGoverning: {
      actName: 'Food Safety and Standards (Licensing and Registration) Regulations, 2011',
      authority: 'Food Safety and Standards Authority of India (FSSAI)',
      points: [
        'Mandated under Regulation 2.1.7 of the FSS Regulations, 2011.',
        'Renewal window commences 180 days prior to expiry on the FoSCoS portal.',
        'Compulsory late fee penalty of ₹100 per day under Section 31 for filings within 30 days of expiry.',
        'Automatic expiration upon midnight of the validity date; no grace period granted.',
        'Operating on an expired license is legally treated as operating without a license (Section 63).'
      ],
      penalties: 'Operating after license expiry attracts fines up to ₹5,00,000 and immediate premise sealing.'
    },
    eligibilityRequirements: {
      intro: 'Any food business operator holding an active or near-expiry FSSAI license is eligible for renewal:',
      criteria: [
        'Must possess an active 14-digit FSSAI Registration, State License, or Central License.',
        'Application must be initiated prior to the official expiry date.',
        'Past mandatory Annual Returns (Form D-1/D-2) must be filed and up to date.',
        'No active revocation or stop-order issued by the Food Safety Commissioner.'
      ],
      documentsRequired: [
        'Copy of Existing FSSAI License / Registration Certificate',
        'Updated Premise Address Proof (if changes occurred)',
        'Latest Water Test Report (for manufacturing/processing licenses)',
        'Proof of Annual Return Submission (Form D-1 acknowledgement)',
        'Food Safety Management System (FSMS) updated declaration'
      ]
    },
    processSteps: [
      { step: 1, title: 'License Audit & Timeline Check', desc: 'We verify your license expiry date, past return records, and compute any applicable statutory fees.' },
      { step: 2, title: 'FoSCoS Renewal Filing', desc: 'We prepare the renewal application, update business information, and submit on the FoSCoS portal.' },
      { step: 3, title: 'Authority Verification', desc: 'The designated Food Safety Officer verifies the renewal submission and clears technical queries.' },
      { step: 4, title: 'Renewed Certificate Delivery', desc: 'Your renewed 14-digit FSSAI certificate is generated with the extended validity of 1 to 5 years.' }
    ],
    postRegistrationCompliance: {
      intro: 'Following license renewal, maintain ongoing statutory routines:',
      points: [
        'Download and print the renewed FSSAI certificate and display it prominently.',
        'Upload the renewed certificate on Zomato, Swiggy, and vendor vendor portals.',
        'Continue filing annual returns in Form D-1 on or before 31st May every year.',
        'Conduct routine biannual water potability tests and employee hygiene checks.'
      ]
    },
    timelines: {
      tat: '3 to 7 Working Days (Basic) | 10 to 20 Working Days (State/Central)',
      delayFactors: ['Pending past annual returns', 'Unpaid late fee penalties on portal', 'Department inspection queues'],
      speedAssurance: 'We initiate priority processing to secure renewed certificates before expiration.'
    },
    certification: {
      issuingAuthority: 'Food Safety and Standards Authority of India (FSSAI)',
      validity: '1 to 5 Years (as selected)',
      legalSignificance: 'Official statutory proof of continuous legal authorization under the Food Safety and Standards Act.',
      contents: ['14-Digit License Number', 'Entity Name & Business Location', 'New Extended Expiry Date', 'Official Digital Signature & QR Code']
    },
    fees: {
      govtFee: 'Standard annual government fee (₹100/yr for Basic, ₹2,000-₹5,000/yr for State, ₹7,500/yr for Central) + ₹100/day late fee if within 30 days',
      professionalFee: 'Transparent Custom Quote based on license category',
      transparencyNote: 'Pricing depends on your business requirement — talk to our expert for a free quote.'
    },
    taxation: {
      directTaxImpact: 'FSSAI renewal fees and professional charges are 100% tax-deductible as general operating expenses under Section 37.',
      gstImplications: 'Ensuring continuous FSSAI validity preserves GST input tax credits on commercial machinery and packaging materials.',
      deductionsOrExemptions: 'No tax deductions, but continuous operation eliminates revenue loss from platform de-listing.'
    },
    whyUs: [
      'Over 15,000+ FSSAI licenses renewed across all states in India.',
      'Automated renewal tracking system notifying you 120 days in advance.',
      'Comprehensive resolution of past pending returns and penalty calculations.',
      'Zero interruption guarantee for your online delivery and retail operations.',
      'Fast-track department follow-ups with experienced food compliance officers.'
    ],
    faqs: [
      { q: 'When can I apply for renewal of my FSSAI License?', a: 'You can apply for renewal starting 180 days before your license expiry date. You must apply at least 30 days before expiry to avoid late fee penalties.' },
      { q: 'What happens if I apply for renewal within 30 days before expiry?', a: 'A mandatory government late fee penalty of ₹100 per day is charged for every day delayed within the 30-day pre-expiry window.' },
      { q: 'Can I renew my FSSAI license after it has already expired?', a: 'No. Once a license passes its expiry date, it becomes permanently void on the FoSCoS portal. You must apply for a brand new FSSAI license.' },
      { q: 'Will my 14-digit FSSAI number change upon renewal?', a: 'No. When you renew on time, your existing 14-digit FSSAI license number remains exactly the same.' },
      { q: 'Can I change my business address during license renewal?', a: 'Minor updates can be made during renewal; however, if moving to a completely new premise, an official license modification must be filed.' },
      { q: 'Is physical inspection required for FSSAI renewal?', a: 'For basic registrations and low-risk state licenses, renewals are processed automatically online without fresh physical inspection in most cases.' }
    ],
    relatedServices: [
      { name: 'FSSAI Registration', desc: 'Basic registration for small food vendors with turnover < ₹12 Lakhs.', price: '₹899' },
      { name: 'FSSAI State License', desc: 'For food units with turnover between ₹12L and ₹20Cr.', price: '₹2,499 + Govt. Fee' },
      { name: 'FSSAI Central License', desc: 'For large manufacturers, importers, and multi-state units.', price: '₹3,999 + Govt. Fee' },
      { name: 'FSSAI Returns', desc: 'Annual Form D-1 and semi-annual milk return compliance.', price: 'Custom Quote' },
      { name: 'Trade License', desc: 'Municipal trade authorization certificate for commercial premises.', price: '₹999 + Govt. Fee' },
      { name: 'Shop and Establishment Certificate', desc: 'Mandatory state labor department registration for commercial establishments.', price: '₹999 + Govt. Fee' }
    ]
  }
];

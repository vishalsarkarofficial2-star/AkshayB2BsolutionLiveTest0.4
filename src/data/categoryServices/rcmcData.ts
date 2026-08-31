import { ServiceDetailConfig } from './types';
import { RCMC_PART2_SERVICES } from './rcmcTwoData';
import { RCMC_PART3_SERVICES } from './rcmcThreeData';
import { RCMC_PART4_SERVICES } from './rcmcFourData';
import { RCMC_PART5_SERVICES } from './rcmcFiveData';

export const RCMC_PART1_SERVICES: ServiceDetailConfig[] = [
  // 1. AEPC Registration (Apparel Export Promotion Council)
  {
    slug: 'aepc-registration',
    name: 'AEPC Registration (Apparel Export Promotion Council)',
    category: 'RCMC',
    parentCategory: 'Registration & License',
    priceType: 'no_price_show',
    priceDisplay: 'Custom Pricing / Price on Request',
    heroPriceHook: 'Get Registration Certificate & RCMC at Competitive Professional Fees — Transparent Process, No Hidden Charges!',
    specialCallout: 'Apparel Export Promotion Council (Ministry of Textiles)',
    urgencyText: 'Mandatory RCMC for Readymade Garment Exporters & RoSCTL Benefits',
    ctaText: 'Get Custom Quote',
    metaTitle: 'AEPC Registration (RCMC) Online in India | Apparel Export Council',
    metaDescription: 'Apply for AEPC Registration (RCMC) online for apparel & readymade garment exporters. Access RoSCTL incentives, international trade fairs & buyer networks.',
    seoKeywords: [
      'AEPC Registration',
      'AEPC RCMC online',
      'Apparel Export Promotion Council',
      'readymade garment export license',
      'RoSCTL scheme registration',
      'Ministry of Textiles RCMC',
      'garment export certificate India'
    ],
    keywords: [
      'aepc',
      'aepc registration',
      'apparel export promotion council',
      'garment export',
      'rosctl',
      'textile export'
    ],
    heroIntro:
      'AEPC is the official body responsible for promoting readymade garment exports from India. Obtaining an AEPC Registration and Registration-Cum-Membership Certificate (RCMC) is essential for apparel exporters to access international buyer networks, participate in global trade fairs, and claim Foreign Trade Policy (FTP) benefits like RoSCTL and Duty Drawback.',
    keyTags: [
      'Readymade Garment Exporters',
      'RCMC Certificate',
      'Ministry of Textiles',
      'RoSCTL Benefit Access',
      'International Trade Fairs',
      'DGFT Portal Compliance'
    ],
    overview: {
      p1: 'The Apparel Export Promotion Council (AEPC), established under the aegis of the Ministry of Textiles, is the apex nodal agency driving India’s multi-billion dollar readymade garment (RMG) export sector. Operating with an active AEPC Registration-Cum-Membership Certificate (RCMC) is statutory for exporters seeking foreign trade clearances, export quota allocations, and government financial assistance.',
      p2: 'Holding an AEPC RCMC connects Indian apparel manufacturers and merchant exporters directly with premier global fashion brands, international textile delegations, and subsidized trade pavilions at global expos (such as Texworld Paris and Magic Show Las Vegas). Akshay B2B Solutions provides end-to-end support for DGFT profile linking, turnover slab mapping, and expedited AEPC RCMC allotment.'
    },
    registrationProcessOverview: {
      status: 'Mandatory for Garment Exporters seeking RoSCTL & DGFT Export Incentives',
      governingAuthority: 'Apparel Export Promotion Council (AEPC), Ministry of Textiles, Government of India',
      summary: 'Electronic filing of RCMC application on the unified DGFT / AEPC portal with entity PAN, IEC, bank certificate, and past textile turnover records.',
      postApproval: 'Issuance of official digital AEPC Registration-Cum-Membership Certificate (RCMC) valid under Foreign Trade Policy.',
      assistanceRole: 'Turnover category classification, statutory documentation audit, portal application submission, and AEPC secretariat liaison.'
    },
    whatIs: {
      definition:
        'AEPC Registration is the official statutory accreditation of an apparel enterprise with the Apparel Export Promotion Council, conferring an official RCMC certificate under the Foreign Trade Policy.',
      points: [
        'Mandatory statutory registration for exporters of knitted and woven readymade garments.',
        'Issues the official Registration-Cum-Membership Certificate (RCMC) recognized by DGFT and Indian Customs.',
        'Primary gateway to claim RoSCTL (Rebate of State and Central Taxes and Levies) on garment shipments.',
        'Enables duty-free import of specified apparel embellishments and accessories under Advance Authorisation.',
        'Provides subsidized booth space at world-renowned apparel trade fairs and buyer-seller meets.',
        'Categorized into Merchant Exporter and Manufacturer Exporter memberships based on production infrastructure.'
      ],
      closing: 'It provides statutory market access, duty remission eligibility, and international credibility for Indian apparel exporters.'
    },
    keyCharacteristics: [
      {
        title: 'Apparel & Garment Exclusive Scope',
        description: 'Dedicated council covering woven and knitted garments, kidswear, activewear, formal attire, and fashion accessories.'
      },
      {
        title: 'RoSCTL Scheme Integration',
        description: 'Mandatory prerequisite for obtaining duty rebate scrips under the Ministry of Textiles RoSCTL tax refund scheme.'
      },
      {
        title: 'Global Trade Fair Privileges',
        description: 'Access to subsidized Indian pavilions at premier international exhibitions in USA, Europe, Japan, and UAE.'
      },
      {
        title: 'Multi-Tier Membership Architecture',
        description: 'Flexible membership tiers structured for startups, merchant traders, and large manufacturing apparel conglomerates.'
      }
    ],
    importanceBenefits: {
      intro: 'Securing an AEPC RCMC provides exceptional commercial, financial, and regulatory advantages:',
      benefits: [
        {
          title: 'Unrestricted RoSCTL Tax Rebates',
          desc: 'Unlock millions in export tax remissions on state and central levies through digital RoSCTL duty credit scrips.'
        },
        {
          title: 'Subsidized Global Fashion Expos',
          desc: 'Showcase collections at global fashion weeks, Texworld, and sourcing expos with up to 50-70% MAI stall subsidies.'
        },
        {
          title: 'Advance Authorisation & EPCG Benefits',
          desc: 'Import specialized fabrics, buttons, zippers, and sewing machinery at zero customs duty for export manufacturing.'
        },
        {
          title: 'Direct International Buyer Networking',
          desc: 'Connect directly with verified international buying houses, department store sourcing directors, and retail chains.'
        },
        {
          title: 'Global Compliance & ESG Credentials',
          desc: 'Align production standards with international social compliance, WRAP, SEDEX, and sustainable textile benchmarks.'
        }
      ],
      closing: 'It empowers Indian garment businesses to compete aggressively and profitably on the global fashion stage.'
    },
    package: {
      title: 'Complete AEPC End-to-End Registration Package',
      description: 'Comprehensive documentation audit, DGFT portal linkage, AEPC application drafting, and fast-track RCMC certificate generation.',
      checklist: [
        'Document Audit & Verification',
        'DGFT Portal Account Setup & Linking',
        'AEPC RCMC Application Drafting',
        'Turnover Slab & Fee Payment Assistance',
        'Merchant vs Manufacturer Exporter Classification',
        'Issuance of Official AEPC RCMC Certificate',
        'RoSCTL Scheme Eligibility Guidance',
        'Post-Registration Compliance & Return Support'
      ]
    },
    types: [
      {
        title: 'Merchant Exporter AEPC RCMC',
        desc: 'For trading companies, buying agents, and garment sourcing firms exporting readymade garments manufactured by third-party units.',
        eligibility: 'Trading & export firms with IEC'
      },
      {
        title: 'Manufacturer Exporter AEPC RCMC',
        desc: 'For stitching factories, garment manufacturing units, and textile mills exporting self-produced apparel.',
        eligibility: 'Apparel factories with Factory License / MSME / DIC proofs'
      }
    ],
    comparison: {
      title: 'AEPC Registered Garment Exporter vs Non-Registered Exporter',
      headers: ['Aspect', 'AEPC Registered Exporter', 'Non-Registered Exporter'],
      rows: [
        { aspect: 'RoSCTL Benefits', col1: 'Eligible for 100% tax rebate scrips on garments', col2: 'Strictly ineligible for RoSCTL tax remissions' },
        { aspect: 'Global Trade Fair Access', col1: 'Subsidized stall allocation at international expos', col2: 'Must pay full commercial rates or denied participation' },
        { aspect: 'DGFT Scheme Eligibility', col1: 'Full access to Advance Authorisation & EPCG', col2: 'Disqualified from duty-free raw material imports' },
        { aspect: 'Buyer Credibility', col1: 'High trust from Fortune 500 fashion retailers', col2: 'High risk perception from foreign buying houses' },
        { aspect: 'Customs Clearance', col1: 'Frictionless export shipping bill passing', col2: 'Subject to customs scrutinies and query delays' }
      ]
    },
    lawsGoverning: {
      actName: 'Foreign Trade Policy (FTP 2023) & Ministry of Textiles Mandates',
      authority: 'Apparel Export Promotion Council (AEPC) & Directorate General of Foreign Trade (DGFT)',
      points: [
        'Foreign Trade Policy 2023 Para 2.55 mandating RCMC for claiming export incentives.',
        'Ministry of Textiles guidelines for RoSCTL (Rebate of State and Central Taxes and Levies).',
        'Foreign Trade (Development and Regulation) Act, 1992 governing cross-border apparel consignments.',
        'Customs Act, 1962 regulating duty drawback and export shipping bills.',
        'Mandatory quarterly electronic export return submissions on the unified DGFT-AEPC portal.'
      ],
      penalties: 'Exporting readymade garments without an AEPC RCMC forfeits all RoSCTL rebates and DGFT incentive entitlements.'
    },
    eligibilityRequirements: {
      intro: 'Any business entity holding a valid DGFT Import Export Code (IEC) engaged in garment trade qualifies:',
      criteria: [
        'Must possess an active 10-digit DGFT Import Export Code (IEC).',
        'Must deal in knitted, woven, or embellished readymade garments.',
        'Manufacturer exporters must furnish factory registration / MSME / DIC proofs.'
      ],
      documentsRequired: [
        'Import Export Code (IEC) Certificate issued by DGFT',
        'PAN Card of Business Entity & Authorized Signatories',
        'Aadhaar Card & Contact Details of Directors / Partners / Proprietor',
        'CA Certified Export Turnover Certificate (or Zero Export declaration for startups)',
        'Factory License / MSME Udyam Certificate (for Manufacturer Exporters)',
        'Bank Certificate / Cancelled Cheque in prescribed format',
        'Certificate of Incorporation / Partnership Deed / GST Certificate'
      ]
    },
    processSteps: [
      { step: 1, title: 'Document & Turnover Audit', desc: 'We verify IEC, categorize merchant vs manufacturer status, and compute past annual export turnover tiers.' },
      { step: 2, title: 'DGFT-AEPC Portal Account Setup', desc: 'We link your DGFT digital profile with AEPC and draft the statutory Form ANF-2C electronic application.' },
      { step: 3, title: 'Application Submission & Fee Processing', desc: 'We upload factory proofs, submit the dossier to AEPC regional office, and process government membership fees.' },
      { step: 4, title: 'Verification & Secretariat Scrutiny', desc: 'AEPC scrutiny officers verify the apparel product codes and banking certifications.' },
      { step: 5, title: 'Official RCMC Generation & Delivery', desc: 'Your authentic digital AEPC Registration-Cum-Membership Certificate is generated and activated.' }
    ],
    postRegistrationCompliance: {
      intro: 'Key statutory compliances for active AEPC RCMC holders:',
      points: [
        'Submit quarterly electronic garment export returns on the DGFT/AEPC portal.',
        'Ensure timely renewal of annual AEPC membership subscription before March 31st.',
        'Maintain accurate batch records for RoSCTL claim audits and customs verifications.',
        'Notify AEPC within 30 days in case of changes in factory address or corporate management.'
      ]
    },
    timelines: {
      tat: '5 to 10 Working Days',
      delayFactors: ['Turnover certificate discrepancies', 'Unlinked DGFT digital signature profile', 'Clarifications on factory license validity'],
      speedAssurance: 'Our export law specialists pre-verify all apparel codes to guarantee single-pass AEPC clearance.'
    },
    certification: {
      issuingAuthority: 'Apparel Export Promotion Council (AEPC), New Delhi / Regional Chapters',
      validity: '5 Financial Years (Subject to Annual Membership Subscription)',
      legalSignificance: 'Statutory RCMC certificate certifying enrollment with AEPC for garment export incentives under FTP.',
      contents: ['AEPC Membership Number', 'RCMC Certificate Number', 'Exporter Category (Merchant / Manufacturer)', 'HS Codes for Garment Products', 'Digital Seal & Issuance Date']
    },
    fees: {
      govtFee: 'Tiered government membership subscription based on export turnover (Starting from approx. ₹8,000 + GST for small exporters)',
      professionalFee: 'Custom Pricing / Call for Best Quote (Tailored based on merchant/manufacturer filing scope)',
      transparencyNote: '100% transparent fee guarantee — clear breakdown of official council charges and professional service fees.'
    },
    taxation: {
      directTaxImpact: 'AEPC membership fees, exhibition booth charges, and export consulting are 100% tax-deductible operational business expenses.',
      gstImplications: 'Apparel export supplies are zero-rated under GST; exports can be executed without IGST payment under Letter of Undertaking (LUT).',
      deductionsOrExemptions: 'Essential for claiming RoSCTL rebates, Duty Drawback, and concessional customs duties on imported textile machinery.'
    },
    whyUs: [
      'Over 3,200+ AEPC RCMC certificates successfully issued for garment exporters.',
      'Specialized expertise in RoSCTL duty credit scrip filings and DGFT portal synchronization.',
      'Dedicated export legal desk for resolving customs cargo and shipping bill queries.',
      '100% online, paperless process with transparent upfront quotations.',
      'End-to-end guidance from IEC registration to international trade fair booth allocations.'
    ],
    faqs: [
      { q: 'What is AEPC Registration and who needs it?', a: 'AEPC (Apparel Export Promotion Council) registration is mandatory for any individual, firm, or company engaged in exporting readymade garments from India seeking Foreign Trade Policy incentives like RoSCTL.' },
      { q: 'Is AEPC registration compulsory for exporting clothes from India?', a: 'While customs clearance can technically occur with just an IEC, having an AEPC RCMC is legally mandatory to claim RoSCTL tax rebates, Duty Drawback, Advance Authorisation, and export subsidies.' },
      { q: 'What is the validity of an AEPC RCMC certificate?', a: 'An AEPC RCMC is valid for 5 financial years from the date of issue, subject to the annual payment of the council membership subscription fee.' },
      { q: 'What is the difference between Merchant and Manufacturer Exporter under AEPC?', a: 'Merchant Exporters source finished apparel from third-party manufacturers, whereas Manufacturer Exporters own garment stitching or processing factories and must submit factory license or MSME proofs.' },
      { q: 'How does AEPC help in claiming RoSCTL benefits?', a: 'Under the RoSCTL scheme, the DGFT verifies the exporter’s valid AEPC RCMC before crediting duty rebate scrips into the exporter’s customs electronic ledger.' },
      { q: 'How do I get a custom quote for AEPC registration?', a: 'Click "Get Custom Quote" or contact our export desk at +91 97180 04839 for an immediate turnover-based quote and step-by-step roadmap.' }
    ],
    relatedServices: [
      { name: 'Import Export Code (IEC)', desc: 'Mandatory 10-digit DGFT license for cross-border trade.', price: '₹1,750' },
      { name: 'Letter of Undertaking (LUT)', desc: 'Export apparel without paying upfront IGST on GST portal.', price: '₹999 + Govt. Fee' },
      { name: 'CAPEXIL Registration', desc: 'RCMC for chemical and allied products.', price: 'Custom Quote' },
      { name: 'GST Registration', desc: 'Mandatory GSTIN registration for zero-rated export tax refunds.', price: '₹699' },
      { name: 'Trademark Registration', desc: 'Protect your fashion and apparel brand identity globally.', price: '₹1,499 + Govt. Fee' },
      { name: 'FIEO Registration', desc: 'Apex export promotion council membership for multi-product exporters.', price: 'Custom Quote' }
    ]
  },

  // 2. APEDA Registration (Agricultural and Processed Food Products Export Development Authority)
  {
    slug: 'apeda-registration',
    name: 'APEDA Registration (Agricultural and Processed Food Products Export Development Authority)',
    category: 'RCMC',
    parentCategory: 'Registration & License',
    priceType: 'no_price_show',
    priceDisplay: 'Custom Pricing / Price on Request',
    heroPriceHook: 'Get Registration Certificate & RCMC at Competitive Professional Fees — Transparent Process, No Hidden Charges!',
    specialCallout: 'APEDA Ministry of Commerce & Industry',
    urgencyText: 'Mandatory for Scheduled Agricultural & Processed Food Exporters',
    ctaText: 'Get Custom Quote',
    metaTitle: 'APEDA Registration Online (RCMC) | Agricultural Food Export Council',
    metaDescription: 'Apply for APEDA Registration (RCMC) online for exporting agricultural, horticultural, and processed food products. Fast-track 5-year export certificate.',
    seoKeywords: [
      'APEDA registration',
      'APEDA RCMC certificate',
      'agricultural export license',
      'basmati rice export APEDA',
      'processed food export council',
      'APEDA online portal',
      'Ministry of Commerce agro export'
    ],
    keywords: [
      'apeda',
      'apeda registration',
      'agricultural export',
      'basmati rice export',
      'food export license',
      'processed food export'
    ],
    heroIntro:
      'APEDA (Agricultural and Processed Food Products Export Development Authority) registration is mandatory for exporters of scheduled agricultural, horticultural, and processed food products from India. An APEDA RCMC unlocks export incentives, compliance approvals, and access to international agri-markets.',
    keyTags: [
      'Agricultural Products Export',
      'Processed Food Export',
      'RCMC Certificate',
      'Ministry of Commerce',
      'Mandatory for Food Exporters',
      'Transport and Marketing Assistance (TMA)'
    ],
    overview: {
      p1: 'APEDA (Agricultural and Processed Food Products Export Development Authority) is the statutory apex body established under the APEDA Act, 1985 by the Ministry of Commerce and Industry. It regulates and promotes the cross-border trade of 14 major agricultural product schedules, including fresh fruits, vegetables, basmati rice, cereals, dairy products, meat, poultry, and processed foods.',
      p2: 'Under the Foreign Trade Policy, holding an authentic APEDA Registration-Cum-Membership Certificate (RCMC) is compulsory for clearing customs export shipping bills and claiming agricultural export subsidies. Akshay B2B Solutions handles the entire APEDA single-window portal registration, product categorization, and fast-track RCMC delivery.'
    },
    registrationProcessOverview: {
      status: 'Mandatory for Exporters of Scheduled Agricultural Products',
      governingAuthority: 'APEDA, Ministry of Commerce & Industry, Government of India',
      summary: 'Electronic application on the unified APEDA portal with DGFT IEC, entity PAN, bank certificate, and product category classification.',
      postApproval: 'Issuance of official digital APEDA Registration-Cum-Membership Certificate (RCMC) valid for 5 financial years.',
      assistanceRole: 'Scheduled product mapping, documentation review, portal application filing, and APEDA authority coordination.'
    },
    whatIs: {
      definition:
        'APEDA Registration is the statutory enrollment of an agricultural exporter with APEDA, granting an official 5-year RCMC membership certificate.',
      points: [
        'Mandatory for exporting fruits, vegetables, basmati rice, pulses, cereals, dairy, and confectionery.',
        'Official 5-year validity RCMC certificate recognized by Indian Customs and DGFT.',
        'Unlocks access to APEDA Financial Assistance Schemes for pack-houses, cold chains, and labs.',
        'Required for obtaining European Union, US-FDA, and Middle East phytosanitary export clearances.',
        'Enables participation in international food trade exhibitions with subsidized stall fees.',
        'Categorized into Merchant Exporter and Manufacturer Exporter memberships.'
      ],
      closing: 'It provides statutory market access and financial incentives for Indian food and agricultural exports.'
    },
    keyCharacteristics: [
      {
        title: 'Scheduled Products Scope',
        description: 'Covers 14 broad agricultural schedules including Fruits & Vegetables, Meat & Poultry, Dairy, Confectionery, Honey, Cereals, and Basmati Rice.'
      },
      {
        title: '5-Year RCMC Validity',
        description: 'The membership certificate remains valid for 5 financial years from the date of issuance.'
      },
      {
        title: 'APEDA Financial Assistance Schemes',
        description: 'Direct capital grants for cold-chain infrastructure, packaging development, lab testing, and market development.'
      },
      {
        title: 'Traceability & Quality Gate',
        description: 'Mandates compliance with digital quality traceability systems (e.g., Basmati.net, GrapeNet, Peanut.net, Meat.net).'
      }
    ],
    importanceBenefits: {
      intro: 'Securing an APEDA RCMC delivers essential regulatory and commercial benefits:',
      benefits: [
        {
          title: 'Unconditional Customs Agro Clearance',
          desc: 'Enables smooth generation of export Shipping Bills for agricultural consignments at all seaports and air cargo hubs.'
        },
        {
          title: 'Export Subsidies & Infrastructure Grants',
          desc: 'Access APEDA financial assistance covering up to 40-50% costs of automated packaging, testing labs, and refrigerated transport.'
        },
        {
          title: 'Global Trade Fair Subsidies',
          desc: 'Represent your brand at Gulfood Dubai, SIAL Paris, Anuga Germany with government-sponsored stall discounts.'
        },
        {
          title: 'Basmati & Grain Export Quotas',
          desc: 'Mandatory prerequisite for obtaining Basmati export allocation certificates and Minimum Export Price (MEP) registrations.'
        },
        {
          title: 'Global Buyer Credibility',
          desc: 'Assures international supermarket chains and importers of verified phytosanitary quality and organic compliance.'
        }
      ],
      closing: 'It transforms local farm produce into high-margin, globally certified export commodities.'
    },
    package: {
      title: 'Complete APEDA End-to-End Registration Package',
      description: 'Product categorization audit, document verification, APEDA portal filing, and 5-year RCMC delivery with expert support.',
      checklist: [
        'Product Categorization Audit',
        'Document Verification & Bank Certificate Formatting',
        'APEDA Online Profile Setup & DGFT Linkage',
        'RCMC Application Submission & Fee Assistance',
        'Official 5-Year APEDA Certificate Generation',
        'FSSAI-APEDA Compliance Alignment',
        'Traceability Guidance (Basmati.net / GrapeNet)',
        'Free Consultation on Export Incentive Schemes'
      ]
    },
    types: [
      {
        title: 'Merchant Exporter APEDA RCMC',
        desc: 'For trading companies, aggregators, and brokers sourcing agricultural goods domestically for global export.',
        eligibility: 'Trading & export firms'
      },
      {
        title: 'Manufacturer Exporter APEDA RCMC',
        desc: 'For food processing factories, rice mills, cold storages, and pack-houses exporting self-processed goods.',
        eligibility: 'Processing plants with FSSAI / Factory License'
      }
    ],
    comparison: {
      title: 'APEDA Registered Exporter vs Non-APEDA Exporter',
      headers: ['Aspect', 'APEDA Registered Exporter', 'Non-APEDA Exporter'],
      rows: [
        { aspect: 'Customs Clearance Ease', col1: 'Unrestricted shipping bill passing at all ports', col2: 'Consignments detained or rejected at customs' },
        { aspect: 'Access to Subsidy Schemes', col1: 'Eligible for TMA, cold chain, and lab grants', col2: 'Zero financial assistance or export grants' },
        { aspect: 'International Food Safety Approvals', col1: 'Phytosanitary clearance with traceability', col2: 'High rejection rates by foreign food authorities' },
        { aspect: 'Legal Export Right', col1: '100% compliant under APEDA Act & FTP 2023', col2: 'Unauthorized export subject to legal penalties' }
      ]
    },
    lawsGoverning: {
      actName: 'Agricultural and Processed Food Products Export Development Authority Act, 1985',
      authority: 'APEDA, Ministry of Commerce and Industry, Government of India',
      points: [
        'Enacted under Central Act No. 2 of 1986.',
        'Foreign Trade Policy (FTP 2023) Para 2.55 mandating RCMC for export incentives.',
        'Mandatory registration within 1 month from undertaking scheduled product exports.',
        'Section 12 empowers APEDA to inspect food processing facilities and packaging standards.',
        'Section 15 penalizes unauthorized export of scheduled products with prosecution and cancellation of export rights.'
      ],
      penalties: 'Exporting scheduled agricultural goods without APEDA RCMC invites customs cargo detention and forfeiture of export incentives.'
    },
    eligibilityRequirements: {
      intro: 'Any entity holding a valid DGFT Import Export Code intending to export agricultural products qualifies:',
      criteria: [
        'Must possess an active 10-digit DGFT Import Export Code (IEC).',
        'Must deal in products listed under the APEDA First Schedule.',
        'Manufacturer exporters must hold a valid FSSAI Manufacturing License or State Factory License.'
      ],
      documentsRequired: [
        'Import Export Code (IEC) Certificate issued by DGFT',
        'Bank Certificate signed by Commercial Bank Branch Manager (Form I format)',
        'Cancelled Cheque of the Bank Current Account',
        'PAN Card & Aadhaar Card of Proprietor / Partners / Directors',
        'FSSAI Central / State License (mandatory for manufacturer exporters)',
        'Certificate of Incorporation / Partnership Deed / GST Certificate'
      ]
    },
    processSteps: [
      { step: 1, title: 'Document & Product Audit', desc: 'We verify IEC, categorize merchant vs manufacturer status, and audit scheduled agricultural product codes.' },
      { step: 2, title: 'APEDA Portal Account Setup', desc: 'We compile bank certificates and create your official portal profile on the APEDA single-window platform.' },
      { step: 3, title: 'Application Drafting & Fee Payment', desc: 'We draft the detailed RCMC application and process the official statutory fee.' },
      { step: 4, title: 'Council Verification & Scrutiny', desc: 'APEDA scrutiny officers verify banking and FSSAI manufacturing credentials.' },
      { step: 5, title: 'Certificate & RCMC Generation', desc: 'Your authentic digital 5-year APEDA RCMC certificate is issued and delivered.' }
    ],
    postRegistrationCompliance: {
      intro: 'Key ongoing obligations for APEDA registered exporters:',
      points: [
        'Submit monthly electronic export return figures on the APEDA portal before the 15th of each month.',
        'Ensure shipments of Basmati rice, grapes, peanuts, and meat comply with digital traceability portals.',
        'Maintain high phytosanitary and sanitary standards matching importing country regulations.',
        'Apply for RCMC renewal at least 3 months prior to the 5-year expiration date.'
      ]
    },
    timelines: {
      tat: '5 to 10 Working Days',
      delayFactors: ['Bank certificate not in exact APEDA prescribed format', 'Missing FSSAI license for manufacturer exporters', 'APEDA portal technical review queries'],
      speedAssurance: 'Our foreign trade attorneys pre-verify all banking and FSSAI records to ensure single-pass approval.'
    },
    certification: {
      issuingAuthority: 'APEDA, Ministry of Commerce and Industry, New Delhi',
      validity: '5 Financial Years',
      legalSignificance: 'Official central statutory RCMC certificate authorizing export of scheduled agricultural commodities.',
      contents: ['APEDA Registration Number', 'RCMC Certificate Number', 'Entity Legal Name & Registered Address', 'Export Products Schedule Classification', '5-Year Validity Period & Digital Seal']
    },
    fees: {
      govtFee: '₹5,000 + 18% GST (Official APEDA statutory government fee for 5-year membership)',
      professionalFee: 'Custom Pricing / Call for Best Quote (Government membership fee extra at actuals)',
      transparencyNote: '100% transparent fee guarantee — clear breakdown of official council charges and professional service fees.'
    },
    taxation: {
      directTaxImpact: 'APEDA membership fees, testing charges, and export consulting are 100% tax-deductible operational business expenses.',
      gstImplications: 'Agricultural export supplies are zero-rated under GST, entitling exporters to 100% refund of input GST on packaging and processing.',
      deductionsOrExemptions: 'Unlocks APEDA financial grants covering up to 50% capital costs for cold chains, pack-houses, and lab testing.'
    },
    whyUs: [
      'Over 3,500+ APEDA RCMC certificates issued for leading agro and food brands.',
      'Comprehensive assistance with Basmati.net and GrapeNet traceability integration.',
      'End-to-end guidance for claiming APEDA Financial Assistance Scheme grants.',
      'Pre-formatted bank certificate templates recognized by all commercial banks.',
      'Dedicated foreign trade compliance desk for customs clearance resolution.'
    ],
    faqs: [
      { q: 'What is APEDA Registration and who needs it?', a: 'APEDA Registration is a mandatory statutory certification (RCMC) issued by the Agricultural and Processed Food Products Export Development Authority authorizing Indian businesses to export scheduled agricultural, food, and dairy products.' },
      { q: 'What products fall under APEDA purview?', a: 'APEDA governs 14 product schedules including: Fresh Fruits & Vegetables, Basmati & Non-Basmati Rice, Pulses, Meat & Poultry, Dairy Products, Honey, Alcoholic & Non-Alcoholic Beverages, Pickles, and Confectionery.' },
      { q: 'What is the validity of an APEDA RCMC certificate?', a: 'An APEDA RCMC is valid for 5 financial years from the date of issuance, renewable upon payment of statutory renewal fees.' },
      { q: 'Is FSSAI license mandatory for APEDA registration?', a: 'For Manufacturer Exporters, a valid FSSAI State or Central Manufacturing License is mandatory. For Merchant Exporters (traders), FSSAI is optional during APEDA registration but recommended.' },
      { q: 'What is the government fee for APEDA registration?', a: 'The official APEDA government statutory fee is ₹5,000 + 18% GST (Total ₹5,900) for a 5-year membership.' },
      { q: 'How do I get a custom quote for APEDA registration?', a: 'Click "Get Custom Quote" to connect with our agricultural export legal desk and receive an upfront fee schedule and implementation roadmap.' }
    ],
    relatedServices: [
      { name: 'Import Export Code (IEC)', desc: 'Mandatory 10-digit DGFT license for cross-border trade.', price: '₹1,750' },
      { name: 'FSSAI Central License', desc: 'Mandatory food license for 100% export oriented units.', price: '₹7,999 + Govt. Fee' },
      { name: 'Spices Board Registration', desc: 'Mandatory CRES certificate for exporting whole and ground spices.', price: 'Custom Quote' },
      { name: 'MPEDA Registration', desc: 'Marine products export development authority registration.', price: 'Custom Quote' },
      { name: 'Letter of Undertaking (LUT)', desc: 'Export goods and services without paying upfront IGST on GST portal.', price: '₹999 + Govt. Fee' },
      { name: 'Organic Certification', desc: 'NPOP organic certification for export of organic agro products.', price: 'Custom Quote' }
    ]
  },

  // 3. CAPEXIL Registration (Chemicals and Allied Products Export Promotion Council)
  {
    slug: 'capexil-registration',
    name: 'CAPEXIL Registration (Chemicals and Allied Products Export Promotion Council)',
    category: 'RCMC',
    parentCategory: 'Registration & License',
    priceType: 'no_price_show',
    priceDisplay: 'Custom Pricing / Price on Request',
    heroPriceHook: 'Get Registration Certificate & RCMC at Competitive Professional Fees — Transparent Process, No Hidden Charges!',
    specialCallout: 'Chemicals and Allied Products Export Promotion Council',
    urgencyText: 'Mandatory RCMC for Minerals, Rubber, Paints, Glass & Paper Exporters',
    ctaText: 'Get Custom Quote',
    metaTitle: 'CAPEXIL Registration Online (RCMC) | Chemicals & Allied Products Council',
    metaDescription: 'Apply for CAPEXIL Registration (RCMC) online for exporters of minerals, ores, rubber products, glass, paints & paper. Claim RoDTEP & Duty Drawback benefits.',
    seoKeywords: [
      'CAPEXIL Registration',
      'CAPEXIL RCMC online',
      'Chemicals Allied Products Export Council',
      'minerals export license India',
      'rubber export CAPEXIL',
      'glass and ceramics export RCMC',
      'RoDTEP chemical export'
    ],
    keywords: [
      'capexil',
      'capexil registration',
      'minerals export',
      'rubber export',
      'glass export',
      'paper export'
    ],
    heroIntro:
      'CAPEXIL (Chemicals and Allied Products Export Promotion Council) covers the export of minerals, ores, bulk minerals, rubber products, glass, paints, paper, and allied chemical items. A CAPEXIL RCMC proves product authenticity and qualifies exporters for government subsidies and export awards.',
    keyTags: [
      'Minerals & Ores Export',
      'Glass & Paints Export',
      'Rubber Products',
      'RCMC Issuance',
      'CAPEXIL Membership',
      'Export Incentive Schemes'
    ],
    overview: {
      p1: 'CAPEXIL (Chemicals and Allied Products Export Promotion Council), established by the Ministry of Commerce & Industry in 1958, is the premier export council for non-basic chemicals, minerals, ores, ceramics, paints, rubber manufactured goods, auto tires, paper, books, and allied industrial products across 16 major industrial panels.',
      p2: 'Holding an active CAPEXIL Registration-Cum-Membership Certificate (RCMC) is essential under Foreign Trade Policy for claiming RoDTEP export tax remissions, duty drawbacks, and Market Development Assistance (MDA). Akshay B2B Solutions guides mineral and allied chemical exporters through panel mapping, application drafting, and fast RCMC issuance.'
    },
    registrationProcessOverview: {
      status: 'Mandatory for Exporters of Minerals, Rubber, Paints & Allied Products seeking FTP Benefits',
      governingAuthority: 'Chemicals and Allied Products Export Promotion Council (CAPEXIL), Ministry of Commerce & Industry',
      summary: 'Online registration and dossier submission on the CAPEXIL portal with DGFT IEC, entity PAN, past export turnover, and panel mapping.',
      postApproval: 'Issuance of official digital CAPEXIL RCMC Certificate conferring full exporter rights.',
      assistanceRole: 'Panel selection, documentation compliance check, portal application filing, and CAPEXIL Kolkata/regional office coordination.'
    },
    whatIs: {
      definition:
        'CAPEXIL Registration is the official statutory membership granted by the Chemicals and Allied Products Export Promotion Council, providing an RCMC certificate for international trade in allied chemical and mineral goods.',
      points: [
        'Covers 16 diverse commodity panels including Minerals, Ores, Rubber, Glass, Paints, Paper, Books, and Plywood.',
        'Official RCMC certificate recognized across all Indian seaports, ICDs, and DGFT regional authorities.',
        'Compulsory for claiming RoDTEP duty remissions and Duty Drawback on mineral and manufactured exports.',
        'Provides access to CAPEXIL export market intelligence reports, international trade delegations, and trade fairs.',
        'Offers visa recommendation letters for exporters travelling overseas to meet international buyers.',
        'Structured into Ordinary Member and Associate Member categories based on turnover.'
      ],
      closing: 'It provides mandatory regulatory compliance and financial incentives for Indian mineral and allied chemical manufacturers.'
    },
    keyCharacteristics: [
      {
        title: '16 Industrial Product Panels',
        description: 'Comprehensive coverage including Natural Stones, Bulk Minerals, Rubber Products, Auto Tyres, Glassware, Paints, Printing, and Plywood.'
      },
      {
        title: 'Duty Remission Gateway',
        description: 'Enables seamless claims under the Remission of Duties and Taxes on Exported Products (RoDTEP) scheme.'
      },
      {
        title: 'Quality & Authenticity Badge',
        description: 'Validates commercial and industrial credibility when bidding on international procurement tenders.'
      },
      {
        title: 'Ordinary vs Associate Tiers',
        description: 'Membership categories accommodating both high-volume mining conglomerates and emerging merchant exporters.'
      }
    ],
    importanceBenefits: {
      intro: 'A CAPEXIL RCMC delivers immense operational, commercial, and financial benefits:',
      benefits: [
        {
          title: 'Maximum RoDTEP & Duty Drawback Claims',
          desc: 'Claim statutory duty remissions on mineral and manufactured goods exports, boosting bottom-line profitability.'
        },
        {
          title: 'Advance Authorisation for Raw Materials',
          desc: 'Import specialized resins, chemical binders, and packaging materials duty-free for export production.'
        },
        {
          title: 'Subsidized Participation in Global Expos',
          desc: 'Exhibit at stone, ceramics, rubber, and printing expos in Germany, USA, UAE, and China with government subsidies.'
        },
        {
          title: 'Export Awards & National Recognition',
          desc: 'Qualify for prestigious CAPEXIL National Export Awards, elevating your global brand reputation.'
        },
        {
          title: 'Consular Visa Recommendation Letters',
          desc: 'Obtain official CAPEXIL visa letters for expedited business visa approvals to key international markets.'
        }
      ],
      closing: 'It turns raw material and manufacturing capability into a globally respected export powerhouse.'
    },
    package: {
      title: 'Complete CAPEXIL End-to-End Registration Package',
      description: 'Panel selection and product mapping, document verification, CAPEXIL portal filing, and fast RCMC certificate issuance.',
      checklist: [
        'Panel Selection & 16-Commodity Product Mapping',
        'Document Audit & Financial Turnover Verification',
        'CAPEXIL Online Portal Registration',
        'RCMC Application Submission & Fee Assistance',
        'Merchant vs Manufacturer Exporter Classification',
        'Official CAPEXIL RCMC Certificate Delivery',
        'Duty Drawback & RoDTEP Scheme Consultation',
        'Post-Registration Return & Compliance Guidance'
      ]
    },
    types: [
      {
        title: 'Ordinary Member (Voting Member)',
        desc: 'For established exporters with continuous past export track records meeting prescribed turnover thresholds.',
        eligibility: 'High-turnover manufacturing & merchant export houses'
      },
      {
        title: 'Associate Member (Non-Voting Member)',
        desc: 'For new exporters, MSMEs, and startups entering the export of minerals, rubber, glass, or allied goods.',
        eligibility: 'Startups, MSMEs & emerging traders'
      }
    ],
    comparison: {
      title: 'CAPEXIL Merchant Exporter vs CAPEXIL Manufacturer Exporter',
      headers: ['Aspect', 'Merchant Exporter', 'Manufacturer Exporter'],
      rows: [
        { aspect: 'Factory License Requirement', col1: 'Not required (commercial proofs only)', col2: 'Mandatory Factory License / MSME proof' },
        { aspect: 'Membership Fee Tiers', col1: 'Standard merchant turnover slab fee', col2: 'Tiered based on production capacity/turnover' },
        { aspect: 'Certificate Validity', col1: '5 Financial Years (Annual Subscription)', col2: '5 Financial Years (Annual Subscription)' },
        { aspect: 'Audit Scope', col1: 'Purchase invoices and bank trading proofs', col2: 'Factory infrastructure & manufacturing audit' }
      ]
    },
    lawsGoverning: {
      actName: 'Foreign Trade Policy (FTP 2023) & Ministry of Commerce Mandates',
      authority: 'Chemicals and Allied Products Export Promotion Council (CAPEXIL) & DGFT',
      points: [
        'Foreign Trade Policy 2023 Para 2.55 mandating RCMC for export benefits.',
        'Foreign Trade (Development and Regulation) Act, 1992 governing cross-border trade.',
        'Mines and Minerals (Development and Regulation) Act guidelines for mineral exports.',
        'Customs Act, 1962 regulating duty drawback and export shipping bills.',
        'Mandatory quarterly electronic export return submissions on the DGFT portal.'
      ],
      penalties: 'Operating without CAPEXIL RCMC forfeits all RoDTEP benefits, duty drawback remissions, and export incentives.'
    },
    eligibilityRequirements: {
      intro: 'Any enterprise holding a valid DGFT IEC engaged in allied chemical/mineral exports qualifies:',
      criteria: [
        'Must possess an active 10-digit DGFT Import Export Code (IEC).',
        'Export commodities must fall under one of CAPEXIL’s 16 designated panels.',
        'Manufacturer exporters must furnish factory registration or MSME Udyam credentials.'
      ],
      documentsRequired: [
        'Import Export Code (IEC) Certificate issued by DGFT',
        'PAN Card of Business Entity & Authorized Signatories',
        'CA Certified Export Turnover Certificate (or zero export declaration)',
        'Factory License / MSME Udyam Certificate (for Manufacturer Exporters)',
        'Bank Certificate / Cancelled Cheque in prescribed format',
        'Certificate of Incorporation / Partnership Deed / GST Certificate',
        'Product Literature / Technical Catalogues for panel allocation'
      ]
    },
    processSteps: [
      { step: 1, title: 'Panel Mapping & Document Audit', desc: 'We classify your products across CAPEXIL’s 16 panels and verify turnover documents.' },
      { step: 2, title: 'Portal Account & Profile Setup', desc: 'We link your DGFT profile and prepare the electronic dossier on the CAPEXIL portal.' },
      { step: 3, title: 'Application Filing & Fee Payment', desc: 'We draft the detailed RCMC application and assist with the council membership fee.' },
      { step: 4, title: 'Council Scrutiny & Verification', desc: 'CAPEXIL regional officers review the commodity classification and banking records.' },
      { step: 5, title: 'Official RCMC Generation & Delivery', desc: 'Your authentic digital CAPEXIL RCMC certificate is issued and activated.' }
    ],
    postRegistrationCompliance: {
      intro: 'Key statutory obligations for active CAPEXIL members:',
      points: [
        'Submit quarterly electronic export returns on the DGFT and CAPEXIL portals.',
        'Renew annual CAPEXIL membership subscription before April 30th of each fiscal year.',
        'Maintain accurate production and purchase records for customs audits.',
        'Notify CAPEXIL promptly regarding changes in product panels or factory premises.'
      ]
    },
    timelines: {
      tat: '5 to 10 Working Days',
      delayFactors: ['Incorrect panel mapping for multi-composite products', 'Turnover certificate format mismatches', 'Clarifications requested by CAPEXIL scrutiny desk'],
      speedAssurance: 'Our export compliance desk pre-maps all HS codes to ensure zero queries and rapid approval.'
    },
    certification: {
      issuingAuthority: 'Chemicals and Allied Products Export Promotion Council (CAPEXIL), Kolkata / Regional Chapters',
      validity: '5 Financial Years (Subject to Annual Membership Subscription)',
      legalSignificance: 'Statutory RCMC certificate certifying enrollment with CAPEXIL for allied chemical and mineral export incentives.',
      contents: ['CAPEXIL Membership Number', 'RCMC Certificate Number', 'Exporter Category & Panel Name', 'Covered Export Commodity Codes', 'Digital Seal & Validity Date']
    },
    fees: {
      govtFee: 'Tiered government membership subscription based on export turnover (Starting from approx. ₹6,000 + GST for associate members)',
      professionalFee: 'Custom Pricing / Call for Best Quote (Government membership fee extra at actuals)',
      transparencyNote: '100% transparent fee guarantee — clear breakdown of official council charges and professional service fees.'
    },
    taxation: {
      directTaxImpact: 'CAPEXIL membership fees, trade delegation expenses, and consulting charges are 100% tax-deductible operational business expenses.',
      gstImplications: 'Export supplies are zero-rated under GST; exports can be executed without IGST payment under Letter of Undertaking (LUT).',
      deductionsOrExemptions: 'Essential for claiming RoDTEP rebates, Duty Drawback, and duty exemptions on imported raw materials under Advance Authorisation.'
    },
    whyUs: [
      'Over 2,800+ CAPEXIL RCMC certificates issued across all 16 industrial panels.',
      'Accurate panel classification to prevent customs clearance mismatches.',
      'Comprehensive assistance with RoDTEP and Duty Drawback claim filings.',
      'Direct liaison with CAPEXIL head office in Kolkata and regional offices in Delhi, Mumbai, and Chennai.',
      'End-to-end foreign trade advisory covering IEC, LUT, and customs clearance.'
    ],
    faqs: [
      { q: 'What is CAPEXIL Registration and who needs it?', a: 'CAPEXIL registration is a mandatory statutory certification (RCMC) for businesses exporting minerals, ores, rubber products, glass, ceramics, paints, paper, books, and allied chemical items seeking Foreign Trade Policy benefits.' },
      { q: 'How many product panels does CAPEXIL have?', a: 'CAPEXIL governs 16 industrial product panels including: Mineral & Ores, Rubber Products, Paints & Varnishes, Glassware, Ceramics, Paper & Publications, Plywood, and Ossein & Gelatine.' },
      { q: 'What is the validity of a CAPEXIL RCMC certificate?', a: 'A CAPEXIL RCMC is valid for 5 financial years from the date of issue, subject to timely payment of the annual membership subscription fee.' },
      { q: 'What is the difference between Ordinary and Associate Membership?', a: 'Ordinary Members are established exporters with higher past export turnover and voting rights, while Associate Membership is designed for startups, MSMEs, and emerging merchant exporters.' },
      { q: 'Can I claim RoDTEP benefits without CAPEXIL registration?', a: 'No. To claim RoDTEP tax remissions and duty drawbacks on products falling under CAPEXIL purview, holding a valid RCMC is mandatory under Foreign Trade Policy.' },
      { q: 'How do I get a custom quote for CAPEXIL registration?', a: 'Click "Get Custom Quote" or call our export desk at +91 97180 04839 for an immediate panel assessment and upfront fee quote.' }
    ],
    relatedServices: [
      { name: 'Import Export Code (IEC)', desc: 'Mandatory 10-digit DGFT license for cross-border trade.', price: '₹1,750' },
      { name: 'CHEMEXCIL Registration', desc: 'RCMC for basic chemicals, cosmetics, and dyes.', price: 'Custom Quote' },
      { name: 'GST Registration', desc: 'Mandatory GSTIN registration for zero-rated export tax refunds.', price: '₹699' },
      { name: 'Letter of Undertaking (LUT)', desc: 'Export goods without paying upfront IGST on GST portal.', price: '₹999 + Govt. Fee' },
      { name: 'LMPC Registration', desc: 'Legal metrology packaged commodities compliance for packaged products.', price: 'Custom Quote' },
      { name: 'FIEO Registration', desc: 'Apex export promotion council membership for multi-product exporters.', price: 'Custom Quote' }
    ]
  },

  // 4. CHEMEXCIL Registration (Basic Chemicals, Cosmetics & Dyes Export Promotion Council)
  {
    slug: 'chemexcil-registration',
    name: 'CHEMEXCIL Registration (Basic Chemicals, Cosmetics & Dyes Export Promotion Council)',
    category: 'RCMC',
    parentCategory: 'Registration & License',
    priceType: 'no_price_show',
    priceDisplay: 'Custom Pricing / Price on Request',
    heroPriceHook: 'Get Registration Certificate & RCMC at Competitive Professional Fees — Transparent Process, No Hidden Charges!',
    specialCallout: 'Basic Chemicals, Cosmetics & Dyes Export Promotion Council',
    urgencyText: 'Mandatory RCMC for Basic Chemicals, Dyes, Pigments & Cosmetics Exporters',
    ctaText: 'Get Custom Quote',
    metaTitle: 'CHEMEXCIL Registration Online (RCMC) | Basic Chemicals & Dyes Council',
    metaDescription: 'Apply for CHEMEXCIL Registration (RCMC) online for exporters of basic chemicals, dyes, cosmetics, soaps & agrochemicals. Fast-track approval with expert guidance.',
    seoKeywords: [
      'CHEMEXCIL Registration',
      'CHEMEXCIL RCMC online',
      'Basic Chemicals Export Council',
      'dyes and pigments export license',
      'cosmetics export RCMC India',
      'agrochemicals export registration',
      'Ministry of Commerce chemical export'
    ],
    keywords: [
      'chemexcil',
      'chemexcil registration',
      'chemical export',
      'dyes export',
      'cosmetics export',
      'agrochemicals export'
    ],
    heroIntro:
      'CHEMEXCIL caters to exporters of basic chemicals, dyes, cosmetics, soaps, agrochemicals, and specialty chemicals. Obtaining a CHEMEXCIL RCMC is mandatory for chemical exporters looking to utilize government export benefits and fulfill international regulatory standards.',
    keyTags: [
      'Basic Chemicals Export',
      'Dyes & Pigments',
      'Cosmetics & Soaps',
      'Agrochemicals',
      'RCMC Certificate',
      'Ministry of Commerce'
    ],
    overview: {
      p1: 'CHEMEXCIL (Basic Chemicals, Cosmetics & Dyes Export Promotion Council), established in 1963 by the Ministry of Commerce & Industry, is the nodal export promotion agency for India’s massive chemical manufacturing sector. It governs exports across 4 broad panels: (I) Inorganic & Organic Chemicals including Agrochemicals, (II) Dyes & Dye Intermediates, (III) Soaps, Detergents, Cosmetics & Toiletries, and (IV) Essential Oils & Castor Oil derivatives.',
      p2: 'Holding an active CHEMEXCIL Registration-Cum-Membership Certificate (RCMC) is statutory under the Foreign Trade Policy (FTP 2023) for claiming RoDTEP duty remissions, duty drawbacks, and Advance Authorisation for duty-free chemical feedstocks. Akshay B2B Solutions assists chemical merchants and plant operators with panel alignment, REACH compliance guidance, and fast RCMC issuance.'
    },
    registrationProcessOverview: {
      status: 'Mandatory for Basic Chemical, Dye, Agrochemical & Cosmetic Exporters seeking FTP Benefits',
      governingAuthority: 'Basic Chemicals, Cosmetics & Dyes Export Promotion Council (CHEMEXCIL), Ministry of Commerce & Industry',
      summary: 'Electronic filing and dossier submission on the CHEMEXCIL portal with DGFT IEC, entity PAN, past export turnover, and panel mapping.',
      postApproval: 'Issuance of official digital CHEMEXCIL RCMC Certificate conferring statutory export benefits.',
      assistanceRole: 'Chemical panel mapping, factory license verification, portal application drafting, and CHEMEXCIL Mumbai/regional desk coordination.'
    },
    whatIs: {
      definition:
        'CHEMEXCIL Registration is the statutory enrollment of a chemical or cosmetics exporter with CHEMEXCIL, granting an official 5-year RCMC recognized globally for chemical trade.',
      points: [
        'Covers 4 major industrial chemical panels spanning bulk chemicals, dyes, agrochemicals, cosmetics, and essential oils.',
        'Official 5-year validity RCMC certificate recognized by DGFT, Indian Customs, and international trade bodies.',
        'Mandatory prerequisite for claiming RoDTEP export duty remissions and Duty Drawback on chemical consignments.',
        'Unlocks duty-free raw material imports under Advance Authorisation for chemical manufacturing.',
        'Assists exporters with international regulatory compliance, including EU REACH and GHS labeling standards.',
        'Provides subsidized booth space at premier international chemical expos (e.g., CPhI, Chemspec Europe, In-Cosmetics).'
      ],
      closing: 'It provides mandatory legal compliance, international buyer trust, and vital financial incentives for Indian chemical exporters.'
    },
    keyCharacteristics: [
      {
        title: '4 Specialized Chemical Panels',
        description: 'Covers Dyes & Pigments, Basic Organic & Inorganic Chemicals, Agrochemicals, Cosmetics, Soaps, and Castor Oil products.'
      },
      {
        title: 'Global REACH Advisory',
        description: 'Active assistance in complying with European Union REACH and global chemical safety registrations.'
      },
      {
        title: 'RoDTEP & Advance License Access',
        description: 'Enables maximum duty remission claims and zero-duty import of active chemical raw ingredients.'
      },
      {
        title: 'Trade Dispute Resolution Support',
        description: 'Assistance in resolving international commercial trade and quality disputes through council legal desks.'
      }
    ],
    importanceBenefits: {
      intro: 'Securing a CHEMEXCIL RCMC membership confers critical operational, financial, and strategic advantages:',
      benefits: [
        {
          title: 'Maximum RoDTEP Duty Remissions',
          desc: 'Claim lucrative export tax refunds on chemical shipments, significantly improving price competitiveness in global markets.'
        },
        {
          title: 'Duty-Free Raw Chemical Imports',
          desc: 'Import key chemical intermediates, catalysts, and solvents at zero customs duty under Advance Authorisation.'
        },
        {
          title: 'Subsidized Global Chemical Expos',
          desc: 'Participate in Chemspec, CPhI, and In-Cosmetics with 50-70% government Market Access Initiative (MAI) stall subsidies.'
        },
        {
          title: 'International Buyer Credibility',
          desc: 'Establishes verified manufacturer/merchant status with multinational chemical distributors and pharmaceutical houses.'
        },
        {
          title: 'Consular Visa Recommendation Letters',
          desc: 'Receive official CHEMEXCIL visa recommendation letters for fast-track business visas to Europe, USA, and East Asia.'
        }
      ],
      closing: 'It positions your chemical enterprise as a compliant, world-class global supplier.'
    },
    package: {
      title: 'Complete CHEMEXCIL End-to-End Registration Package',
      description: 'Panel mapping, document preparation, CHEMEXCIL portal application submission, and fast RCMC certificate issuance.',
      checklist: [
        'Panel Verification (Dyes / Cosmetics / Basic Chemicals / Agrochemicals)',
        'Document Audit & CA Turnover Verification',
        'CHEMEXCIL Online Portal Registration',
        'RCMC Application Drafting & Submission',
        'Fee Payment & Category Classification Assistance',
        'Official 5-Year CHEMEXCIL RCMC Certificate Delivery',
        'Export Duty Benefit & RoDTEP Scheme Consultation',
        'Post-Registration Return & Compliance Guidance'
      ]
    },
    types: [
      {
        title: 'Merchant Exporter CHEMEXCIL RCMC',
        desc: 'For trading companies, chemical indenting agents, and export houses sourcing chemicals from domestic manufacturers.',
        eligibility: 'Trading & commercial firms with IEC'
      },
      {
        title: 'Manufacturer Exporter CHEMEXCIL RCMC',
        desc: 'For chemical synthesis plants, dye manufacturing units, cosmetic formulators, and agrochemical factories.',
        eligibility: 'Manufacturing units with Factory License / Pollution Control Consent'
      }
    ],
    comparison: {
      title: 'CHEMEXCIL Registered Exporter vs Non-Registered Exporter',
      headers: ['Aspect', 'CHEMEXCIL Registered Exporter', 'Non-Registered Exporter'],
      rows: [
        { aspect: 'Custom Duty Rebates', col1: 'Full entitlement to RoDTEP & Duty Drawback', col2: 'Zero duty remissions or tax rebates' },
        { aspect: 'Chemical Export Approvals', col1: 'Fast customs shipping bill clearance', col2: 'Subject to customs scrutinies and port detentions' },
        { aspect: 'Global Buyer Trust', col1: 'Recognized by international chemical buyers', col2: 'High compliance risk perceived by buyers' },
        { aspect: 'DGFT Incentives', col1: 'Full access to Advance License & EPCG', col2: 'Disqualified from all DGFT foreign trade schemes' }
      ]
    },
    lawsGoverning: {
      actName: 'Foreign Trade Policy (FTP 2023) & Ministry of Commerce Mandates',
      authority: 'Basic Chemicals, Cosmetics & Dyes Export Promotion Council (CHEMEXCIL) & DGFT',
      points: [
        'Foreign Trade Policy 2023 Para 2.55 mandating RCMC for export incentives.',
        'Foreign Trade (Development and Regulation) Act, 1992 governing chemical shipments.',
        'Environment Protection Act & State Pollution Control Board guidelines.',
        'Customs Act, 1962 regulating duty drawback and export shipping bills.',
        'Mandatory quarterly electronic export return submissions on the DGFT/CHEMEXCIL portals.'
      ],
      penalties: 'Operating without CHEMEXCIL RCMC forfeits all RoDTEP benefits, duty drawback remissions, and export incentives.'
    },
    eligibilityRequirements: {
      intro: 'Any enterprise holding a valid DGFT IEC engaged in chemical or cosmetic exports qualifies:',
      criteria: [
        'Must possess an active 10-digit DGFT Import Export Code (IEC).',
        'Export products must fall under one of CHEMEXCIL’s 4 chemical panels.',
        'Manufacturer exporters must furnish factory registration or Pollution Control Board Consent (CTO/CTE).'
      ],
      documentsRequired: [
        'Import Export Code (IEC) Certificate issued by DGFT',
        'PAN Card of Business Entity & Authorized Signatories',
        'CA Certified Export Turnover Certificate (or Zero Export declaration)',
        'Factory License / Pollution Control Consent / MSME Certificate (for Manufacturer Exporters)',
        'Bank Certificate / Cancelled Cheque in prescribed format',
        'Certificate of Incorporation / Partnership Deed / GST Certificate',
        'Safety Data Sheets (SDS) / Product Technical Data Sheets (TDS)'
      ]
    },
    processSteps: [
      { step: 1, title: 'Panel Mapping & Document Audit', desc: 'We verify IEC, categorize merchant vs manufacturer status, and map chemical HS codes to CHEMEXCIL panels.' },
      { step: 2, title: 'Portal Account & Profile Setup', desc: 'We link your DGFT profile and prepare the electronic dossier on the CHEMEXCIL single-window portal.' },
      { step: 3, title: 'Application Drafting & Fee Payment', desc: 'We draft the detailed RCMC application and process the council membership subscription fee.' },
      { step: 4, title: 'Council Scrutiny & Verification', desc: 'CHEMEXCIL scrutiny officers review the chemical panel classification and banking credentials.' },
      { step: 5, title: 'Official RCMC Generation & Delivery', desc: 'Your authentic digital CHEMEXCIL RCMC certificate is issued and activated.' }
    ],
    postRegistrationCompliance: {
      intro: 'Key statutory obligations for active CHEMEXCIL members:',
      points: [
        'Submit quarterly electronic chemical export returns on the DGFT and CHEMEXCIL portals.',
        'Renew annual CHEMEXCIL membership subscription before April 30th of each fiscal year.',
        'Maintain accurate production and purchase records for customs audits.',
        'Comply with international packaging and transport regulations (IMDG / IATA chemical safety).'
      ]
    },
    timelines: {
      tat: '5 to 10 Working Days',
      delayFactors: ['Incorrect panel mapping for specialized specialty chemicals', 'Missing pollution control consent for manufacturer exporters', 'CHEMEXCIL portal technical review queues'],
      speedAssurance: 'Our chemical industry legal desk pre-verifies all SDS and HS codes to ensure zero queries.'
    },
    certification: {
      issuingAuthority: 'Basic Chemicals, Cosmetics & Dyes Export Promotion Council (CHEMEXCIL), Mumbai / Regional Chapters',
      validity: '5 Financial Years (Subject to Annual Membership Subscription)',
      legalSignificance: 'Statutory RCMC certificate certifying enrollment with CHEMEXCIL for chemical and cosmetic export incentives.',
      contents: ['CHEMEXCIL Membership Number', 'RCMC Certificate Number', 'Exporter Category & Panel Name', 'Covered Export Commodity Codes', 'Digital Seal & Validity Date']
    },
    fees: {
      govtFee: 'Tiered government membership subscription based on export turnover (Starting from approx. ₹6,500 + GST for small exporters)',
      professionalFee: 'Custom Pricing / Call for Best Quote (Government membership fee extra at actuals)',
      transparencyNote: '100% transparent fee guarantee — clear breakdown of official council charges and professional service fees.'
    },
    taxation: {
      directTaxImpact: 'CHEMEXCIL membership fees, international expo participation, and consulting charges are 100% tax-deductible operational business expenses.',
      gstImplications: 'Export supplies are zero-rated under GST; exports can be executed without IGST payment under Letter of Undertaking (LUT).',
      deductionsOrExemptions: 'Essential for claiming RoDTEP rebates, Duty Drawback, and duty-free chemical raw material imports under Advance Authorisation.'
    },
    whyUs: [
      'Over 2,600+ CHEMEXCIL RCMC certificates issued nationwide.',
      'Specialized handling of REACH compliance and hazardous chemical export protocols.',
      'Accurate panel classification across Dyes, Cosmetics, Agrochemicals, and Basic Chemicals.',
      'Direct liaison with CHEMEXCIL headquarters in Mumbai and regional offices in Delhi, Kolkata, and Ahmedabad.',
      'End-to-end foreign trade advisory covering IEC, LUT, and customs clearance.'
    ],
    faqs: [
      { q: 'What is CHEMEXCIL Registration and who needs it?', a: 'CHEMEXCIL registration is a mandatory statutory certification (RCMC) for businesses exporting basic organic & inorganic chemicals, dyes, pigments, cosmetics, soaps, detergents, and agrochemicals seeking Foreign Trade Policy benefits.' },
      { q: 'Which product panels fall under CHEMEXCIL purview?', a: 'CHEMEXCIL covers 4 major panels: (I) Inorganic, Organic & Agrochemicals, (II) Dyes & Dye Intermediates, (III) Cosmetics, Soaps, Detergents & Toiletries, and (IV) Essential Oils, Castor Oil & derivatives.' },
      { q: 'What is the validity of a CHEMEXCIL RCMC certificate?', a: 'A CHEMEXCIL RCMC is valid for 5 financial years from the date of issue, subject to the annual payment of the council membership subscription fee.' },
      { q: 'Can merchant chemical exporters register with CHEMEXCIL without a factory?', a: 'Yes! Merchant Exporters can register by providing commercial office/warehouse address proofs and commercial banking credentials without needing a manufacturing factory.' },
      { q: 'How does CHEMEXCIL help in duty-free raw material imports?', a: 'Holding a CHEMEXCIL RCMC qualifies exporters for the DGFT Advance Authorisation scheme, allowing duty-free import of raw chemical feedstocks used in manufacturing export goods.' },
      { q: 'How do I get a custom quote for CHEMEXCIL registration?', a: 'Click "Get Custom Quote" or call our export desk at +91 97180 04839 for an immediate panel assessment and upfront fee schedule.' }
    ],
    relatedServices: [
      { name: 'Import Export Code (IEC)', desc: 'Mandatory 10-digit DGFT license for cross-border trade.', price: '₹1,750' },
      { name: 'CAPEXIL Registration', desc: 'RCMC for chemicals and allied products.', price: 'Custom Quote' },
      { name: 'Pharmexcil Registration', desc: 'RCMC for pharmaceuticals and medical devices.', price: 'Custom Quote' },
      { name: 'Letter of Undertaking (LUT)', desc: 'Export chemicals without paying upfront IGST on GST portal.', price: '₹999 + Govt. Fee' },
      { name: 'GST Registration', desc: 'Mandatory GSTIN registration for zero-rated export tax refunds.', price: '₹699' },
      { name: 'ISO Certification', desc: 'ISO 9001 & ISO 14001 certification for chemical processing units.', price: '₹2,499' }
    ]
  }
];

export const RCMC_SERVICES: ServiceDetailConfig[] = [
  ...RCMC_PART1_SERVICES,
  ...RCMC_PART2_SERVICES,
  ...RCMC_PART3_SERVICES,
  ...RCMC_PART4_SERVICES,
  ...RCMC_PART5_SERVICES
];


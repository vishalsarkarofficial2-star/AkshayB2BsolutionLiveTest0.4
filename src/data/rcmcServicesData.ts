export interface RcmcServiceConfig {
  slug: string;
  serviceName: string;
  councilName: string;
  categoryName: string;
  pageTitle: string;
  metaDescription: string;
  keywords: string[];
  tagline: string;
  introParagraph: string;
  subServiceChips: string[];
  ratingScore: string;
  totalReviews: string;
  keyHighlights: string[];
  overviewContent: {
    heading: string;
    paragraphs: string[];
    closingLine: string;
  };
  benefits: Array<{ title: string; desc: string }>;
  eligibility: string;
  checklist: {
    summary: string;
    documents: Array<{ category: string; items: string[] }>;
  };
  processSteps: Array<{ stepNumber: number; title: string; desc: string }>;
  whyChooseUsPoints: Array<{ title: string; desc: string }>;
  requirements: Array<{ term: string; explanation: string }>;
  faqs: Array<{ question: string; answer: string }>;
}

export const RCMC_SERVICES_DATA: Record<string, RcmcServiceConfig> = {
  'aepc-registration': {
    slug: 'aepc-registration',
    serviceName: 'AEPC Registration',
    councilName: 'Apparel Export Promotion Council (AEPC)',
    categoryName: 'Import & Export / RCMC',
    pageTitle: 'Apply Online AEPC Registration | AEPC RCMC Service - Akshayb2bsolutions',
    metaDescription: 'Get your AEPC RCMC Certificate fast & hassle-free online. Call Akshayb2bsolutions today at: +91 97180 04839. India\'s Top Legal Firm.',
    keywords: ['AEPC Registration', 'AEPC RCMC', 'AEPC Certificate Online', 'Apparel Export Membership India', 'AEPC Garment Export License'],
    tagline: 'Get Your AEPC Registration Certificate — Fast, Reliable & Fully Compliant Registration',
    introParagraph: 'The Apparel Export Promotion Council (AEPC) is the official body under the Ministry of Textiles, Govt. of India, dedicated to promoting ready-made garment and apparel exports globally. Obtaining an AEPC Registration-Cum-Membership Certificate (RCMC) is essential for garment manufacturers and merchant exporters to claim duty drawbacks, RODTEP benefits, participate in international apparel expos, and ensure seamless customs clearance.',
    subServiceChips: [
      'Garment Export License',
      'AEPC RCMC Online',
      'Ministry of Textiles Compliance',
      'Duty Drawback Assistance',
      'International Trade Fair Access',
      'RODTEP Scheme Eligibility'
    ],
    ratingScore: '4.9',
    totalReviews: '4,850+',
    keyHighlights: [
      'Official Ministry of Textiles AEPC RCMC Processing',
      '100% Online Document Verification & Filing',
      'Assistance in Manufacturer & Merchant Classification',
      'Expedited 3-5 Working Days Certificate Issuance'
    ],
    overviewContent: {
      heading: 'AEPC Registration in India - An Overview',
      paragraphs: [
        'The Apparel Export Promotion Council (AEPC) was established in 1978 under the sponsorship of the Ministry of Textiles, Government of India. It serves as the apex organization for readymade garment exporters across India, fostering global market reach, trade delegation access, and export policy compliance.',
        'Under India\'s Foreign Trade Policy (FTP), holding an active AEPC Registration-Cum-Membership Certificate (RCMC) is mandatory for any individual or company intending to export readymade garments, knitwear, or apparel accessories. AEPC RCMC empowers businesses to claim export incentives under schemes like RoSCTL, RoDTEP, and EPCG, while enhancing buyer confidence in overseas markets.',
        'Whether you are a merchant exporter sourcing finished garments or a manufacturer exporter with a unit, AEPC registration unlocks official trade portals and customs benefits required for sustainable international growth.'
      ],
      closingLine: 'Akshayb2bsolutions provides end-to-end guidance for AEPC registration, ensuring fast documentation, error-free portal submission, and hassle-free certificate issuance for your garment export business.'
    },
    benefits: [
      {
        title: 'Access to Export Incentives & RoSCTL Benefits',
        desc: 'Eligible exporters can claim state and central taxes/levies rebates under the RoSCTL and RoDTEP schemes only after registering with AEPC.'
      },
      {
        title: 'Customs Clearance & Duty Neutralization',
        desc: 'AEPC RCMC simplifies customs duty exemptions on imported raw materials, threads, buttons, and machinery under advance authorization.'
      },
      {
        title: 'Participation in Global Apparel Expos',
        desc: 'AEPC members receive subsidized stalls and buyer-seller meets in key markets across Europe, North America, Middle East, and Asia.'
      },
      {
        title: 'Government Subsidies & EPCG Scheme',
        desc: 'Import garment manufacturing machinery at 0% custom duty under the EPCG scheme with valid AEPC membership credentials.'
      },
      {
        title: 'Enhanced Overseas Buyer Credibility',
        desc: 'Global retail brands and apparel buyers require AEPC registration as proof of legitimate manufacturing and export compliance.'
      },
      {
        title: 'Market Intelligence & Export Advisory',
        desc: 'Receive regular updates on changing tariff rates, trade agreements, sustainability norms, and global garment trends from AEPC experts.'
      }
    ],
    eligibility: 'AEPC Registration is applicable to both Manufacturer Exporters (who own or lease a garment manufacturing unit with machinery) and Merchant Exporters (who source readymade garments from domestic manufacturers for export). Any valid business entity—including Sole Proprietorships, Partnerships, LLPs, Private Limited, and Public Limited companies holding a valid Importer-Exporter Code (IEC)—is eligible to apply.',
    checklist: {
      summary: 'Ensure all business details in your IEC match your GST and bank records prior to AEPC application.',
      documents: [
        {
          category: 'Primary Business Credentials',
          items: [
            'Copy of Importer-Exporter Code (IEC) issued by DGFT',
            'PAN Card of Business Entity / Proprietor',
            'GST Registration Certificate (Form REG-06)',
            'Certificate of Incorporation / Partnership Deed / LLP Agreement'
          ]
        },
        {
          category: 'Factory & Financial Verification',
          items: [
            'Bank Certificate / Cancelled Cheque from Bank Account linked with IEC',
            'Factory License / Udyam Aadhaar / SSI Certificate (For Manufacturer Exporters)',
            'SSI / Udyam Registration specifying garment manufacturing activities',
            'Digital Signature Certificate (DSC) of Authorized Signatory'
          ]
        }
      ]
    },
    processSteps: [
      { stepNumber: 1, title: 'Document Vetting & IEC Verification', desc: 'Our experts review your DGFT IEC code, GST REG-06, PAN, and bank certificates to ensure complete consistency.' },
      { stepNumber: 2, title: 'Category Selection (Merchant / Manufacturer)', desc: 'We classify your business as Manufacturer Exporter or Merchant Exporter based on your manufacturing infrastructure.' },
      { stepNumber: 3, title: 'Portal Registration & Form Filing', desc: 'We draft and file the AEPC online application on the official DGFT / AEPC portal with full detail accuracy.' },
      { stepNumber: 4, title: 'Fee Payment & Document Upload', desc: 'Applicable council membership fees are paid and verified supporting documents are attached electronically.' },
      { stepNumber: 5, title: 'Council Verification & Query Clearance', desc: 'AEPC officials review the submission; our team promptly addresses any clarifying queries raised by the council.' },
      { stepNumber: 6, title: 'AEPC RCMC Certificate Issuance', desc: 'Upon approval, your digital AEPC Registration-Cum-Membership Certificate is issued and delivered straight to your email.' }
    ],
    whyChooseUsPoints: [
      { title: 'Dedicated DGFT & RCMC Experts', desc: 'Our senior trade consultants have processed over 10,000+ export council registrations seamlessly.' },
      { title: 'End-to-End Paperwork Management', desc: 'We handle document preparation, category selection, and portal submissions without causing business downtime.' },
      { title: 'Transparent Quote & Guidance', desc: 'Zero hidden charges or unexpected fees. Clear timeline and complete pricing breakdown before filing.' },
      { title: 'Timely Submission Guarantee', desc: 'Applications are submitted within 24 hours of receiving complete documentation from your end.' },
      { title: 'Post-Registration Support', desc: 'Assistance with annual RCMC renewals, incentive claims, and quarterly export return submissions.' },
      { title: 'Proven Track Record Across India', desc: 'Trusted by top textile clusters in Tirupur, Ludhiana, Surat, Noida, Bengaluru, and Jaipur.' }
    ],
    requirements: [
      { term: 'Valid IEC Code', explanation: 'An active Importer-Exporter Code issued by DGFT with updated profile details.' },
      { term: 'Active GST Registration', explanation: 'Valid GSTIN registered in the name of the exporting entity.' },
      { term: 'Garment Trade Classification', explanation: 'Business activity mapped to apparel, textiles, or ready-made garments.' },
      { term: 'Factory Proof (For Manufacturers)', explanation: 'Factory license, Udyam certificate, or machinery proof for manufacturer status.' },
      { term: 'Class-3 Digital Signature', explanation: 'Required for signing digital online submissions on the DGFT/AEPC portal.' },
      { term: 'Bank Account Authorization', explanation: 'Valid bank certificate or cancelled cheque corresponding to your IEC profile.' }
    ],
    faqs: [
      { question: 'What is AEPC Registration?', answer: 'AEPC Registration provides the Registration-Cum-Membership Certificate (RCMC) issued by the Apparel Export Promotion Council under the Ministry of Textiles for ready-made garment exporters in India.' },
      { question: 'Who needs AEPC RCMC Certificate?', answer: 'Any manufacturer or merchant exporter dealing in ready-made garments, apparel, knitwear, or clothing accessories who wishes to claim export benefits and clear customs requires AEPC RCMC.' },
      { question: 'What is the validity period of AEPC RCMC?', answer: 'AEPC RCMC is generally valid for a period of 5 financial years (subject to annual membership fee renewal).' },
      { question: 'Can a merchant exporter apply for AEPC Registration?', answer: 'Yes, merchant exporters who source garments from third-party manufacturers can apply under the Merchant Exporter category with valid IEC and GST.' },
      { question: 'How much does AEPC Registration cost?', answer: 'Fees vary based on turnover and exporter category (Merchant vs Manufacturer). Please consult our export experts at Akshayb2bsolutions for a customized fee quote.' },
      { question: 'How long does it take to get AEPC RCMC?', answer: 'Once all verified documents are submitted, AEPC usually issues the digital RCMC certificate within 3 to 7 working days.' },
      { question: 'Is IEC code mandatory before applying for AEPC?', answer: 'Yes, holding an active Importer-Exporter Code (IEC) issued by DGFT is mandatory before applying for AEPC RCMC.' },
      { question: 'What happens if AEPC RCMC is not renewed?', answer: 'Failing to renew your AEPC RCMC will lead to suspension of export incentives under RoSCTL/RoDTEP schemes and customs clearance delays.' },
      { question: 'Can I claim duty drawbacks without AEPC RCMC?', answer: 'No, customs and DGFT require a valid RCMC for garment exports to process duty drawback and tax rebate claims.' },
      { question: 'How can Akshayb2bsolutions assist with AEPC Registration?', answer: 'Akshayb2bsolutions handles documentation, online portal submission, council query resolution, and fast certificate delivery with zero hassle.' }
    ]
  },

  'apeda-registration': {
    slug: 'apeda-registration',
    serviceName: 'APEDA Registration',
    councilName: 'Agricultural and Processed Food Products Export Development Authority (APEDA)',
    categoryName: 'Import & Export / RCMC',
    pageTitle: 'Apply Online APEDA Registration | APEDA RCMC Service - Akshayb2bsolutions',
    metaDescription: 'Obtain your APEDA RCMC Registration online fast. Call Akshayb2bsolutions today at: +91 97180 04839. India\'s Top Legal Firm.',
    keywords: ['APEDA Registration', 'APEDA RCMC', 'APEDA Food Export License', 'Basmati Rice Export License', 'APEDA Certificate Online'],
    tagline: 'Get Your APEDA Registration Certificate — Fast, Reliable & Fully Compliant Registration',
    introParagraph: 'The Agricultural and Processed Food Products Export Development Authority (APEDA) is a statutory body under the Ministry of Commerce and Industry, Govt. of India. APEDA RCMC registration is mandatory for exporters of scheduled agricultural, horticultural, and processed food products including basmati rice, mangoes, fresh fruits, vegetables, meat, dairy, and organic products. APEDA membership guarantees entry into international food markets and qualifies exporters for government subsidies.',
    subServiceChips: [
      'Scheduled Food Product RCMC',
      'Basmati Rice Export Authorization',
      'APEDA Online Portal Filing',
      'Organic Produce Export License',
      'Financial Assistance Schemes',
      'Phytosanitary & Lab Support'
    ],
    ratingScore: '4.9',
    totalReviews: '6,200+',
    keyHighlights: [
      'Official APEDA Ministry of Commerce Portal Submission',
      '100% Paperless Online Verification & Drafting',
      'Support for Basmati Rice & Organic Food Exporters',
      'Quick 3-5 Days Certificate Approval Guarantee'
    ],
    overviewContent: {
      heading: 'APEDA Registration in India - An Overview',
      paragraphs: [
        'Established under the Agricultural and Processed Food Products Export Development Authority Act of 1985, APEDA functions as the primary trade promoter for Indian agricultural commodities and processed foods globally.',
        'APEDA covers a wide array of scheduled products including fruits, vegetables, meat, poultry, dairy, confectionery, biscuits, honey, cocoa, alcoholic beverages, cereals, and organic farm produce. Exporters shipping any scheduled item must register with APEDA to obtain their RCMC.',
        'Apart from regulatory compliance, APEDA provides financial assistance for export infrastructure, cold chain setup, packaging development, and participation in international food trade fairs such as Gulfood, Anuga, and SIAL.'
      ],
      closingLine: 'Akshayb2bsolutions simplifies APEDA registration with streamlined document verification, accurate online submission, and quick RCMC issuance so you can focus on expanding your food export business.'
    },
    benefits: [
      {
        title: 'Eligibility for Agricultural Financial Schemes',
        desc: 'Access APEDA subsidies for market development, packaging improvement, quality management, and export transport logistics.'
      },
      {
        title: 'Basmati Rice & Grain Export Authorizations',
        desc: 'Mandatory requirement for issuing APEDA traceability certificates (e-Tracernet) required for Basmati rice shipments to EU & US.'
      },
      {
        title: 'Global Buyer Trust & Quality Assurance',
        desc: 'APEDA certification reassures overseas importers regarding product quality, pesticide residue control, and hygiene standards.'
      },
      {
        title: 'Participation in International Food Fairs',
        desc: 'Receive subsidized booths and trade delegation invitations at major global food expos in Dubai, Paris, Germany, and Tokyo.'
      },
      {
        title: 'Organic Food Export Authorization',
        desc: 'APEDA is the NPOP accredited body for authorizing certified organic product exports from India to global markets.'
      },
      {
        title: 'Seamless Customs & Port Clearances',
        desc: 'Avoid shipping holds and customs queries at Indian sea ports and air cargo terminals with verified APEDA credentials.'
      }
    ],
    eligibility: 'APEDA registration is mandatory for any individual or business entity exporting scheduled agricultural or processed food items listed in the APEDA Act. Both Merchant Exporters (sourcing agricultural produce from mandis or farmers) and Manufacturer/Processor Exporters (operating food processing plants or packhouses) with a valid IEC and FSSAI License are eligible.',
    checklist: {
      summary: 'Ensure your business name, address, and email in your IEC exactly match your FSSAI license and APEDA portal profile.',
      documents: [
        {
          category: 'Core Entity Credentials',
          items: [
            'Copy of Importer-Exporter Code (IEC) issued by DGFT',
            'PAN Card of Entity / Proprietor',
            'GST Registration Certificate (Form REG-06)',
            'FSSAI Central / State License copy for food handling'
          ]
        },
        {
          category: 'Financial & Processing Credentials',
          items: [
            'Bank Certificate / Cancelled Cheque from account linked to IEC',
            'Packhouse / Processing Plant Registration (For Manufacturer Exporters)',
            'Organic Certification copy (if exporting organic farm produce)',
            'Class-3 Digital Signature Certificate (DSC) of Authorized Signatory'
          ]
        }
      ]
    },
    processSteps: [
      { stepNumber: 1, title: 'Scheduled Product Code Mapping', desc: 'We verify your product catalog against APEDA scheduled categories (Basmati, Processed Food, Fresh Produce, etc.).' },
      { stepNumber: 2, title: 'Document Vetting & FSSAI Check', desc: 'Our team verifies your IEC, FSSAI license, PAN, and bank details to ensure zero discrepancy.' },
      { stepNumber: 3, title: 'APEDA Online Portal Application', desc: 'We fill out the official APEDA registration form electronically with complete precision.' },
      { stepNumber: 4, title: 'Government Fee Payment', desc: 'Applicable APEDA statutory registration fees are paid online through verified gateways.' },
      { stepNumber: 5, title: 'Scrutiny & Query Processing', desc: 'APEDA authorities review the application; our experts promptly manage any departmental clarifications.' },
      { stepNumber: 6, title: 'APEDA RCMC Certificate Delivery', desc: 'Upon approval, your official digital APEDA RCMC certificate is issued and sent directly to you.' }
    ],
    whyChooseUsPoints: [
      { title: 'Agro & Food Export Experts', desc: 'Experienced in handling complex APEDA filings, basmati rice authorizations, and organic trade rules.' },
      { title: '100% Online Paperless Filing', desc: 'No need to visit government offices; entire process managed digitally from your office or home.' },
      { title: 'Transparent Pricing Structure', desc: 'Clear quote with zero hidden charges. Honest pricing for merchant and manufacturer exporters.' },
      { title: 'Fast 3 to 5 Days Clearance', desc: 'Express handling ensures your export shipments are not delayed due to pending RCMC.' },
      { title: 'End-to-End Compliance Assistance', desc: 'Support with FSSAI linking, phytosanitary requirements, and APEDA annual renewals.' },
      { title: '50,000+ Satisfied Indian Exporters', desc: 'Trusted by leading agro traders across Punjab, Haryana, Gujarat, Maharashtra, and South India.' }
    ],
    requirements: [
      { term: 'Active IEC Code', explanation: 'Valid DGFT Importer-Exporter Code registered in the entity name.' },
      { term: 'FSSAI License', explanation: 'Central or State FSSAI License authorizing food export operations.' },
      { term: 'Scheduled Food Mapping', explanation: 'Product falling under APEDA scheduled agro & food categories.' },
      { term: 'Bank Account Certification', explanation: 'Active bank account linked with IEC and verified by bank certificate.' },
      { term: 'Class-3 Digital Signature', explanation: 'Required for signing online filings on DGFT & APEDA portals.' },
      { term: 'Packhouse Approval (If Applicable)', explanation: 'Mandatory for fresh fruit/mango exporters using APEDA recognized packhouses.' }
    ],
    faqs: [
      { question: 'What is APEDA Registration?', answer: 'APEDA Registration provides the Registration-Cum-Membership Certificate (RCMC) issued by the Agricultural and Processed Food Products Export Development Authority under the Ministry of Commerce.' },
      { question: 'Is APEDA mandatory for food export from India?', answer: 'Yes, exporting any scheduled agricultural commodity or processed food product listed under the APEDA Act strictly requires a valid APEDA RCMC.' },
      { question: 'What is the validity of APEDA RCMC?', answer: 'APEDA RCMC is valid for 5 financial years from the date of issuance.' },
      { question: 'Can merchant exporters register with APEDA?', answer: 'Yes, merchant exporters who purchase agricultural produce from mandi traders or farmers can register as Merchant Exporters.' },
      { question: 'How much does APEDA Registration cost?', answer: 'APEDA charges statutory government fees along with professional charges. Please contact Akshayb2bsolutions for an exact quote tailored to your business.' },
      { question: 'Is FSSAI required for APEDA Registration?', answer: 'Yes, a valid FSSAI Food License is mandatory for food exporters applying for APEDA RCMC.' },
      { question: 'How long does APEDA Registration take?', answer: 'It generally takes 3 to 5 working days to receive the APEDA RCMC certificate after submitting verified documents.' },
      { question: 'Is APEDA required for Basmati Rice export?', answer: 'Yes, APEDA RCMC is strictly mandatory for exporting Basmati rice and obtaining the mandatory e-Tracernet export certificate.' },
      { question: 'What happens if I export without APEDA RCMC?', answer: 'Exporting scheduled agro products without APEDA RCMC can lead to customs impoundment, penalties, and denial of export incentives.' },
      { question: 'How does Akshayb2bsolutions assist in APEDA registration?', answer: 'Akshayb2bsolutions manages documentation, FSSAI compliance verification, online filing, and fast certificate delivery with complete professional care.' }
    ]
  },

  'capexil-certification': {
    slug: 'capexil-certification',
    serviceName: 'CAPEXIL Registration',
    councilName: 'Chemicals & Allied Products Export Promotion Council (CAPEXIL)',
    categoryName: 'Import & Export / RCMC',
    pageTitle: 'Apply Online CAPEXIL Registration | CAPEXIL RCMC Service - Akshayb2bsolutions',
    metaDescription: 'Get your CAPEXIL RCMC Certificate fast online. Call Akshayb2bsolutions today at: +91 97180 04839. India\'s Top Legal Firm.',
    keywords: ['CAPEXIL Registration', 'CAPEXIL RCMC', 'CAPEXIL Certificate Online', 'Minerals Export License India', 'CAPEXIL Membership'],
    tagline: 'Get Your CAPEXIL Registration Certificate — Fast, Reliable & Fully Compliant Registration',
    introParagraph: 'The Chemicals & Allied Products Export Promotion Council (CAPEXIL) is an export promotion body sponsored by the Ministry of Commerce and Industry, Govt. of India. CAPEXIL handles non-metallic mineral products, natural rubber, glass, ceramics, cement, paper, publications, granite, and allied chemical items. Obtaining CAPEXIL RCMC is essential for mineral, glass, paper, and rubber exporters to claim foreign trade policy benefits and build international buyer trust.',
    subServiceChips: [
      'Minerals & Ores RCMC',
      'Glass & Ceramics Export License',
      'Rubber Products RCMC',
      'Paper & Books Export Certificate',
      'CAPEXIL Online Portal Filing',
      'RODTEP & Duty Neutralization'
    ],
    ratingScore: '4.8',
    totalReviews: '3,900+',
    keyHighlights: [
      'Official Ministry of Commerce CAPEXIL Portal Filing',
      'Expert Handling for Minerals, Glass, Paper & Rubber Sectors',
      '100% Online Paperless Process & Prompt Turnaround',
      'Assistance for Merchant & Manufacturer Exporters'
    ],
    overviewContent: {
      heading: 'CAPEXIL Registration in India - An Overview',
      paragraphs: [
        'CAPEXIL was established in 1958 by the Ministry of Commerce and Industry, Government of India, to promote the export of non-metallic mineral products, rubber goods, paints, paper, books, granite, ceramics, and cement.',
        'It encompasses 16 diverse product panels including natural rubber products, auto tyres, glass, ceramics, cement, refractory goods, paper, printing items, graphite, mineral ores, and granite. Exporters operating in these sectors must register with CAPEXIL to secure their Registration-Cum-Membership Certificate (RCMC).',
        'Holding CAPEXIL membership allows companies to participate in international buyer-seller meets, receive market access subsidies, and obtain customs duty exemptions under advance authorization and EPCG schemes.'
      ],
      closingLine: 'Akshayb2bsolutions offers smooth and fast CAPEXIL registration services, guiding you through panel selection, online filing, and prompt certificate issuance.'
    },
    benefits: [
      {
        title: 'Duty Drawback & Tax Neutralization',
        desc: 'Claim RODTEP, duty drawback, and GST refund benefits on export shipments of minerals, glass, and paper products.'
      },
      {
        title: 'Access to International Trade Delegations',
        desc: 'Participate in CAPEXIL sponsored trade delegations and buyer-seller meets in North America, Europe, Africa, and East Asia.'
      },
      {
        title: 'Zero-Duty Capital Goods Import (EPCG)',
        desc: 'Import heavy mining, granite cutting, paper making, or glass molding machinery under EPCG scheme with valid CAPEXIL RCMC.'
      },
      {
        title: 'Global Importer & Customs Credibility',
        desc: 'Overseas buyers and port customs recognize CAPEXIL RCMC as proof of accredited Indian exporter status.'
      },
      {
        title: 'Market Research & Trade Leads',
        desc: 'Gain exclusive access to country-wise demand reports, import tariffs, and global buyer leads in mineral and chemical sectors.'
      },
      {
        title: 'Customs & Port Expedited Processing',
        desc: 'Prevent export shipment holds at Indian sea ports and ICDs by displaying active CAPEXIL registration details.'
      }
    ],
    eligibility: 'CAPEXIL Registration is open to any business entity in India dealing in non-metallic minerals, granite, glass, ceramics, cement, rubber products, paper, and publications. Both Merchant Exporters (trading in finished non-metallic goods) and Manufacturer Exporters (operating processing plants, quarries, or factories) holding a valid IEC can apply.',
    checklist: {
      summary: 'Ensure your product falls into one of CAPEXIL\'s 16 designated product panels before filing.',
      documents: [
        {
          category: 'Primary Company Documentation',
          items: [
            'Copy of DGFT issued Importer-Exporter Code (IEC)',
            'PAN Card of Business Entity / Proprietor',
            'GST Registration Certificate (Form REG-06)',
            'Certificate of Incorporation / Partnership Deed'
          ]
        },
        {
          category: 'Panel & Operational Verification',
          items: [
            'Bank Certificate / Cancelled Cheque linked to IEC account',
            'Factory License / Mining Lease / Udyam Certificate (For Manufacturer Exporters)',
            'Self-declaration of major export items and target markets',
            'Class-3 Digital Signature Certificate (DSC)'
          ]
        }
      ]
    },
    processSteps: [
      { stepNumber: 1, title: 'Product Panel Classification', desc: 'We identify the correct CAPEXIL product panel (Granite, Glass, Rubber, Paper, Ores, etc.) for your business.' },
      { stepNumber: 2, title: 'Document Vetting & Verification', desc: 'Our experts cross-check IEC, GST, PAN, and bank details to prevent portal rejections.' },
      { stepNumber: 3, title: 'Online CAPEXIL Portal Filing', desc: 'We complete the registration form on the official CAPEXIL portal with precise product mapping.' },
      { stepNumber: 4, title: 'Statutory Fee Payment', desc: 'Government registration and annual membership fees are remitted through secure online channels.' },
      { stepNumber: 5, title: 'Council Review & Query Handling', desc: 'CAPEXIL desk officers verify the submission; our team handles any requested clarification immediately.' },
      { stepNumber: 6, title: 'CAPEXIL RCMC Certificate Issuance', desc: 'Your digital CAPEXIL RCMC is approved and delivered straight to your registered email.' }
    ],
    whyChooseUsPoints: [
      { title: 'Specialized Panel Knowledge', desc: 'In-depth expertise in mapping minerals, granite, rubber, and paper products to correct CAPEXIL panels.' },
      { title: 'Fast & Error-Free Portal Submission', desc: 'Applications submitted swiftly within 24 hours of receiving complete documentation.' },
      { title: 'Transparent Fee Structure', desc: 'No hidden charges or surprise invoices. Clear upfront quote for complete registration support.' },
      { title: 'Complete End-to-End Assistance', desc: 'We handle drafting, online uploading, departmental coordination, and certificate delivery.' },
      { title: 'Dedicated CA/CS Advisory', desc: 'Senior trade consultants advise on foreign trade policy benefits linked with your RCMC.' },
      { title: 'Trusted Nationwide Service', desc: 'Successfully registered exporters across Rajasthan, Karnataka, Tamil Nadu, Gujarat, and West Bengal.' }
    ],
    requirements: [
      { term: 'Active IEC Code', explanation: 'Valid DGFT Importer-Exporter Code in the business entity name.' },
      { term: 'GSTIN Registration', explanation: 'Active GST registration certificate covering non-metallic or chemical goods.' },
      { term: 'Panel Eligibility', explanation: 'Products falling under CAPEXIL\'s designated 16 non-metallic product categories.' },
      { term: 'Bank Verification', explanation: 'Bank certificate or cancelled cheque corresponding to IEC account.' },
      { term: 'Class-3 DSC', explanation: 'Digital Signature Certificate for electronic portal authentication.' },
      { term: 'Factory/Mining Proof', explanation: 'Quarry lease, factory license, or Udyam certificate for manufacturer exporters.' }
    ],
    faqs: [
      { question: 'What is CAPEXIL Registration?', answer: 'CAPEXIL Registration provides the Registration-Cum-Membership Certificate (RCMC) issued by the Chemicals & Allied Products Export Promotion Council under the Ministry of Commerce.' },
      { question: 'Which products are covered under CAPEXIL?', answer: 'CAPEXIL covers minerals, ores, granite, glass, ceramics, cement, natural rubber products, auto tyres, paper, books, and publications.' },
      { question: 'What is the validity period of CAPEXIL RCMC?', answer: 'CAPEXIL RCMC is valid for 5 financial years (subject to annual membership fee renewal).' },
      { question: 'Can merchant exporters register with CAPEXIL?', answer: 'Yes, merchant exporters who purchase non-metallic goods or minerals from domestic suppliers can register as Merchant Exporters.' },
      { question: 'How much does CAPEXIL Registration cost?', answer: 'Government fee depends on annual export turnover and category. Contact Akshayb2bsolutions for an exact, transparent quote.' },
      { question: 'How long does it take to get CAPEXIL RCMC?', answer: 'Once verified documents are uploaded, CAPEXIL issues the digital RCMC certificate within 4 to 7 working days.' },
      { question: 'Is IEC code mandatory before CAPEXIL filing?', answer: 'Yes, holding an active DGFT Importer-Exporter Code (IEC) is mandatory prior to CAPEXIL RCMC application.' },
      { question: 'Can granite exporters register under CAPEXIL?', answer: 'Yes, granite, marble, and natural stone exporters fall directly under CAPEXIL\'s Natural Stones and Granite product panel.' },
      { question: 'What happens if CAPEXIL RCMC is not renewed?', answer: 'Non-renewal leads to suspension of export incentives under RODTEP, EPCG, and advance authorization schemes.' },
      { question: 'How can Akshayb2bsolutions help with CAPEXIL Registration?', answer: 'Akshayb2bsolutions manages panel selection, document verification, online portal filing, and fast certificate delivery hassle-free.' }
    ]
  },

  'chemexcil-rcmc-registration': {
    slug: 'chemexcil-rcmc-registration',
    serviceName: 'CHEMEXCIL Registration',
    councilName: 'Basic Chemicals, Cosmetics & Dyes Export Promotion Council (CHEMEXCIL)',
    categoryName: 'Import & Export / RCMC',
    pageTitle: 'Apply Online CHEMEXCIL Registration | CHEMEXCIL RCMC Service - Akshayb2bsolutions',
    metaDescription: 'Get your CHEMEXCIL RCMC Certificate fast & compliant. Call Akshayb2bsolutions today at: +91 97180 04839. India\'s Top Legal Firm.',
    keywords: ['CHEMEXCIL Registration', 'CHEMEXCIL RCMC', 'Chemical Export License', 'Dyes & Cosmetics RCMC', 'CHEMEXCIL Certificate Online'],
    tagline: 'Get Your CHEMEXCIL Registration Certificate — Fast, Reliable & Fully Compliant Registration',
    introParagraph: 'The Basic Chemicals, Cosmetics & Dyes Export Promotion Council (CHEMEXCIL) was set up by the Ministry of Commerce and Industry, Govt. of India, to foster global trade in organic and inorganic chemicals, dyes, intermediates, cosmetics, soaps, toiletries, essential oils, and agrochemicals. Obtaining CHEMEXCIL RCMC is mandatory for chemical exporters seeking duty drawbacks, REACH compliance assistance, and export incentive claims.',
    subServiceChips: [
      'Chemical Exports RCMC',
      'Dyes & Intermediates License',
      'Cosmetics & Soaps RCMC',
      'Essential Oils & Agrochemicals',
      'CHEMEXCIL Portal Filing',
      'REACH Guidance & RODTEP Claims'
    ],
    ratingScore: '4.9',
    totalReviews: '5,100+',
    keyHighlights: [
      'Official Ministry of Commerce CHEMEXCIL Portal Filing',
      'Specialized Guidance for Organic & Inorganic Chemical Exporters',
      'Assistance for Merchant & Manufacturer Chemical Units',
      'Rapid 3-5 Working Days RCMC Approval Assurance'
    ],
    overviewContent: {
      heading: 'CHEMEXCIL Registration in India - An Overview',
      paragraphs: [
        'CHEMEXCIL was set up in 1963 by the Ministry of Commerce and Industry to promote the export of basic organic and inorganic chemicals, dyes, pigments, dye intermediates, cosmetics, soaps, detergents, essential oils, castor oil derivatives, and agrochemicals.',
        'It serves as a crucial bridge between Indian chemical exporters and international regulatory frameworks such as EU-REACH, US-EPA, and global chemical safety standards. Holding a CHEMEXCIL RCMC is compulsory under India\'s Foreign Trade Policy for exporters in these categories.',
        'CHEMEXCIL membership allows chemical businesses to claim tax rebates under RoDTEP, import raw material inputs duty-free under Advance Authorization, and gain entry into official government trade delegations.'
      ],
      closingLine: 'Akshayb2bsolutions provides professional CHEMEXCIL registration services, managing panel assignment, document verification, and portal submission for your chemical export business.'
    },
    benefits: [
      {
        title: 'Duty Drawback & RoDTEP Benefits',
        desc: 'Claim export tax rebates and duty drawbacks on chemical formulations, dyes, essential oils, and agrochemicals.'
      },
      {
        title: 'REACH & International Chemical Safety Support',
        desc: 'Receive expert guidance from CHEMEXCIL on EU-REACH registration, GHS labeling, and international safety compliance.'
      },
      {
        title: 'Duty-Free Chemical Raw Material Import',
        desc: 'Utilize Advance Authorization schemes to import precursor raw materials duty-free for chemical processing.'
      },
      {
        title: 'Global Trade Delegations & Expos',
        desc: 'Participate in international chemical expos, buyer-seller meets, and trade shows across Europe, USA, Asia, and LATAM.'
      },
      {
        title: 'Enhanced Buyer Credibility',
        desc: 'Overseas chemical importers require CHEMEXCIL membership as proof of verified, compliant Indian chemical manufacturing.'
      },
      {
        title: 'Streamlined Port & Customs Clearances',
        desc: 'Prevent customs detention at Indian ports by attaching active CHEMEXCIL RCMC credentials with shipping bills.'
      }
    ],
    eligibility: 'CHEMEXCIL Registration is mandatory for all Indian business entities exporting basic organic & inorganic chemicals, dyes, cosmetics, toiletries, essential oils, and agrochemicals. Both Manufacturer Exporters (owning chemical processing/formulation plants) and Merchant Exporters holding a valid DGFT IEC code are eligible.',
    checklist: {
      summary: 'Ensure your chemical product line aligns with CHEMEXCIL\'s designated product panels (Dyes, Basic Chemicals, Cosmetics, Agrochemicals).',
      documents: [
        {
          category: 'Business & Trade Registration',
          items: [
            'Copy of Importer-Exporter Code (IEC) issued by DGFT',
            'PAN Card of Entity / Proprietor',
            'GST Registration Certificate (Form REG-06)',
            'Certificate of Incorporation / Partnership Deed'
          ]
        },
        {
          category: 'Chemical & Plant Clearances',
          items: [
            'Bank Certificate / Cancelled Cheque from account linked to IEC',
            'Factory License / Pollution Control Board (PCB) NOC / Udyam (For Manufacturers)',
            'Product Safety Data Sheet (MSDS) summary (if required)',
            'Class-3 Digital Signature Certificate (DSC) of Authorized Signatory'
          ]
        }
      ]
    },
    processSteps: [
      { stepNumber: 1, title: 'Panel Mapping (Dyes/Chemicals/Cosmetics)', desc: 'We classify your chemical products into CHEMEXCIL\'s specific panels (Basic Organic, Dyes, Cosmetics, Agrochemicals).' },
      { stepNumber: 2, title: 'Document Vetting & PCB Verification', desc: 'Our experts check your IEC, GST, PAN, bank details, and factory NOCs for total accuracy.' },
      { stepNumber: 3, title: 'Online CHEMEXCIL Application Filing', desc: 'We fill out the CHEMEXCIL online application form with precise chemical product mapping.' },
      { stepNumber: 4, title: 'Fee Payment Submission', desc: 'Statutory registration and annual membership fees are remitted through secure gateways.' },
      { stepNumber: 5, title: 'Departmental Review & Clarifications', desc: 'CHEMEXCIL desk officers examine the file; our team resolves any departmental query promptly.' },
      { stepNumber: 6, title: 'CHEMEXCIL RCMC Certificate Delivery', desc: 'Upon approval, your official digital CHEMEXCIL RCMC is issued and emailed to you directly.' }
    ],
    whyChooseUsPoints: [
      { title: 'Chemical Sector Trade Specialists', desc: 'Deep understanding of chemical product panel classification, PCB clearances, and DGFT regulations.' },
      { title: 'Fast 3 to 5 Days Approval', desc: 'Express processing ensures your export shipments are not delayed due to pending RCMC.' },
      { title: 'Transparent Upfront Quote', desc: 'Zero hidden charges. Clear fee structure for merchant and manufacturer chemical exporters.' },
      { title: '100% Online Paperless Filing', desc: 'Complete filing executed digitally without requiring manual visits to government offices.' },
      { title: 'Dedicated CA/CS Support Team', desc: 'Personalized trade compliance manager allocated to handle your filing from end to end.' },
      { title: 'Trusted by Chemical Hubs Across India', desc: 'Active client base in Ankleshwar, Vapi, Thane, Hyderabad, Ahmedabad, and Chennai.' }
    ],
    requirements: [
      { term: 'Active IEC Code', explanation: 'Valid DGFT Importer-Exporter Code in the business entity name.' },
      { term: 'GSTIN Certificate', explanation: 'Active GST registration covering chemical manufacturing or trade.' },
      { term: 'Chemical Panel Mapping', explanation: 'Products falling under CHEMEXCIL\'s designated chemical product categories.' },
      { term: 'Bank Account Authorization', explanation: 'Bank certificate or cancelled cheque corresponding to IEC account.' },
      { term: 'Class-3 Digital Signature', explanation: 'Required for signing online filings on DGFT & CHEMEXCIL portals.' },
      { term: 'Factory / Pollution Clearances', explanation: 'Pollution Control Board NOC or factory license for manufacturer chemical units.' }
    ],
    faqs: [
      { question: 'What is CHEMEXCIL Registration?', answer: 'CHEMEXCIL Registration provides the Registration-Cum-Membership Certificate (RCMC) issued by the Basic Chemicals, Cosmetics & Dyes Export Promotion Council under the Ministry of Commerce.' },
      { question: 'Who needs CHEMEXCIL RCMC Certificate?', answer: 'Exporters of organic & inorganic chemicals, dyes, pigments, cosmetics, soaps, essential oils, and agrochemicals require CHEMEXCIL RCMC.' },
      { question: 'What is the validity period of CHEMEXCIL RCMC?', answer: 'CHEMEXCIL RCMC is valid for 5 financial years (subject to annual membership fee payment).' },
      { question: 'Can merchant chemical exporters apply for CHEMEXCIL?', answer: 'Yes, merchant exporters sourcing chemical products from domestic manufacturers can register as Merchant Exporters.' },
      { question: 'How much does CHEMEXCIL Registration cost?', answer: 'Government fee varies depending on annual export turnover. Contact Akshayb2bsolutions for an exact, transparent quote.' },
      { question: 'How long does it take to get CHEMEXCIL RCMC?', answer: 'Once verified documents are submitted, CHEMEXCIL issues the digital RCMC certificate within 3 to 5 working days.' },
      { question: 'Is IEC code required before CHEMEXCIL filing?', answer: 'Yes, holding an active DGFT Importer-Exporter Code (IEC) is mandatory prior to CHEMEXCIL application.' },
      { question: 'Does CHEMEXCIL assist with EU REACH compliance?', answer: 'Yes, CHEMEXCIL provides advisory services and trade guidance for Indian chemical exporters complying with EU-REACH norms.' },
      { question: 'What happens if CHEMEXCIL RCMC is not renewed?', answer: 'Non-renewal leads to loss of RoDTEP export benefits, duty drawbacks, and port clearance delays.' },
      { question: 'How does Akshayb2bsolutions assist with CHEMEXCIL Registration?', answer: 'Akshayb2bsolutions manages document verification, panel mapping, online portal submission, and fast certificate issuance hassle-free.' }
    ]
  },

  'engineering-export-promotion-council': {
    slug: 'engineering-export-promotion-council',
    serviceName: 'EEPC Registration',
    councilName: 'Engineering Export Promotion Council (EEPC India)',
    categoryName: 'Import & Export / RCMC',
    pageTitle: 'Apply Online EEPC Registration | EEPC RCMC Service - Akshayb2bsolutions',
    metaDescription: 'Get your EEPC India RCMC Certificate online fast. Call Akshayb2bsolutions today at: +91 97180 04839. India\'s Top Legal Firm.',
    keywords: ['EEPC Registration', 'EEPC RCMC', 'Engineering Export Promotion Council', 'EEPC Certificate Online', 'Engineering Export License India'],
    tagline: 'Get Your EEPC Registration Certificate — Fast, Reliable & Fully Compliant Registration',
    introParagraph: 'The Engineering Export Promotion Council (EEPC India) is the premier trade and investment promotion agency sponsored by the Ministry of Commerce and Industry, Govt. of India, for the engineering sector. EEPC RCMC is essential for exporters of industrial machinery, auto components, electrical equipment, steel fabrications, hand tools, and fasteners. EEPC membership opens doors to global engineering expos, technology up-gradation grants, and export incentives.',
    subServiceChips: [
      'Engineering Goods RCMC',
      'Heavy Machinery Export License',
      'Auto Components RCMC',
      'Steel & Metal Products Certificate',
      'EEPC India Online Filing',
      'EPCG Scheme & Technology Grants'
    ],
    ratingScore: '4.9',
    totalReviews: '7,400+',
    keyHighlights: [
      'Official Ministry of Commerce EEPC India Portal Filing',
      'Expert Panel Mapping for Heavy Engineering & Auto Components',
      '100% Paperless Application & Prompt Processing',
      'Assistance for Merchant & Manufacturer Exporters'
    ],
    overviewContent: {
      heading: 'EEPC Registration in India - An Overview',
      paragraphs: [
        'Set up in 1955 under the sponsorship of the Ministry of Commerce and Industry, Government of India, EEPC India is the apex body representing India\'s engineering export domain.',
        'Engineering goods constitute over 25% of India\'s total merchandise exports. EEPC covers diverse panels including heavy industrial machinery, automobile components, electrical equipment, medical devices, defense hardware, iron & steel fabrications, fasteners, and hand tools.',
        'Obtaining EEPC RCMC is mandatory under Foreign Trade Policy for engineering exporters seeking duty drawback, RoDTEP rebates, EPCG capital goods imports, and participation in international engineering expos like INDEE and Hannover Messe.'
      ],
      closingLine: 'Akshayb2bsolutions offers streamlined EEPC registration services, guiding you through panel mapping, online submission, and quick RCMC delivery.'
    },
    benefits: [
      {
        title: 'Duty Drawback & RoDTEP Tax Rebates',
        desc: 'Claim export tax refunds and duty drawbacks on machinery, steel items, auto components, and electrical goods.'
      },
      {
        title: 'Zero-Duty Capital Machinery Import (EPCG)',
        desc: 'Import advanced CNC machines, industrial presses, and engineering tools at 0% custom duty under EPCG scheme.'
      },
      {
        title: 'Participation in Global Engineering Expos',
        desc: 'Receive subsidized exhibition booths at world-renowned trade fairs including Hannover Messe, INDEE, and Big 5 Dubai.'
      },
      {
        title: 'Technology Up-Gradation Grants',
        desc: 'Access government financial assistance for R&D, product testing, quality certification, and technology modernization.'
      },
      {
        title: 'Global Buyer Credibility & B2B Matchmaking',
        desc: 'Gain access to EEPC\'s global buyer directory and participate in targeted international B2B buyer-seller meets.'
      },
      {
        title: 'Hassle-Free Customs & Port Clearances',
        desc: 'Ensure smooth export clearances at Indian sea ports, ICDs, and air cargo terminals with verified EEPC credentials.'
      }
    ],
    eligibility: 'EEPC Registration is mandatory for any individual, partnership, LLP, or company exporting engineering products, machinery, steel fabrications, electrical equipment, or auto components. Both Manufacturer Exporters (operating engineering workshops/factories) and Merchant Exporters with a valid DGFT IEC code are eligible.',
    checklist: {
      summary: 'Ensure your engineering products match EEPC\'s designated product panels (Machinery, Auto Parts, Steel, Electricals, etc.).',
      documents: [
        {
          category: 'Primary Business Credentials',
          items: [
            'Copy of DGFT issued Importer-Exporter Code (IEC)',
            'PAN Card of Business Entity / Proprietor',
            'GST Registration Certificate (Form REG-06)',
            'Certificate of Incorporation / Partnership Deed'
          ]
        },
        {
          category: 'Factory & Operational Verification',
          items: [
            'Bank Certificate / Cancelled Cheque linked to IEC account',
            'Factory License / Udyam Registration / SSI Certificate (For Manufacturers)',
            'Brief technical description of major engineering export items',
            'Class-3 Digital Signature Certificate (DSC) of Authorized Signatory'
          ]
        }
      ]
    },
    processSteps: [
      { stepNumber: 1, title: 'Product Panel Mapping', desc: 'We identify your specific engineering panel (Heavy Machinery, Auto Parts, Steel, Fasteners, Electricals).' },
      { stepNumber: 2, title: 'Document Vetting & IEC Checking', desc: 'Our team verifies your IEC, GST, PAN, bank details, and factory proof for 100% accuracy.' },
      { stepNumber: 3, title: 'Online EEPC Portal Application', desc: 'We fill out the EEPC India registration form electronically on the official portal.' },
      { stepNumber: 4, title: 'Statutory Fee Remittance', desc: 'Government registration and annual membership fees are remitted through secure online gateways.' },
      { stepNumber: 5, title: 'Scrutiny & Query Management', desc: 'EEPC officials review the file; our consultants resolve any departmental queries promptly.' },
      { stepNumber: 6, title: 'EEPC RCMC Certificate Delivery', desc: 'Your digital EEPC India RCMC certificate is issued and delivered straight to your registered email.' }
    ],
    whyChooseUsPoints: [
      { title: 'Engineering Sector Trade Specialists', desc: 'Deep expertise in engineering product classification, EPCG schemes, and DGFT trade rules.' },
      { title: 'Fast 3 to 5 Days Clearance', desc: 'Express handling ensures your machinery and engineering export shipments move without delay.' },
      { title: 'Transparent Upfront Quote', desc: 'No hidden charges. Clear fee structure for merchant and manufacturer engineering exporters.' },
      { title: '100% Online Paperless Process', desc: 'Entire registration executed digitally from your office without government office visits.' },
      { title: 'Dedicated CA/CS Trade Consultants', desc: 'Senior trade consultants handle your file from drafting to final certificate delivery.' },
      { title: 'Trusted by Engineering Hubs Nationally', desc: 'Serving engineering exporters across Pune, Rajkot, Coimbatore, Ludhiana, Jalandhar, and Ahmedabad.' }
    ],
    requirements: [
      { term: 'Active IEC Code', explanation: 'Valid DGFT Importer-Exporter Code in the business entity name.' },
      { term: 'GSTIN Registration', explanation: 'Active GST registration covering engineering goods trade or manufacturing.' },
      { term: 'Engineering Product Mapping', explanation: 'Products falling under EEPC designated engineering categories.' },
      { term: 'Bank Verification', explanation: 'Bank certificate or cancelled cheque corresponding to IEC account.' },
      { term: 'Class-3 Digital Signature', explanation: 'Required for signing online filings on DGFT & EEPC portals.' },
      { term: 'Factory License / Udyam', explanation: 'Factory license or Udyam certificate for manufacturer engineering units.' }
    ],
    faqs: [
      { question: 'What is EEPC Registration?', answer: 'EEPC Registration provides the Registration-Cum-Membership Certificate (RCMC) issued by the Engineering Export Promotion Council (EEPC India) under the Ministry of Commerce.' },
      { question: 'Who needs EEPC RCMC Certificate?', answer: 'Exporters of industrial machinery, auto components, electrical equipment, steel fabrications, hand tools, and fasteners require EEPC RCMC.' },
      { question: 'What is the validity period of EEPC RCMC?', answer: 'EEPC RCMC is valid for 5 financial years (subject to annual membership fee renewal).' },
      { question: 'Can merchant engineering exporters apply for EEPC?', answer: 'Yes, merchant exporters who source engineering goods from domestic manufacturers can register as Merchant Exporters.' },
      { question: 'How much does EEPC Registration cost?', answer: 'Government fee depends on annual export turnover and exporter category. Contact Akshayb2bsolutions for an exact quote.' },
      { question: 'How long does it take to get EEPC RCMC?', answer: 'Once verified documents are uploaded, EEPC issues the digital RCMC certificate within 3 to 5 working days.' },
      { question: 'Is IEC code mandatory before EEPC filing?', answer: 'Yes, holding an active DGFT Importer-Exporter Code (IEC) is mandatory prior to EEPC RCMC application.' },
      { question: 'Does EEPC help with EPCG machinery import?', answer: 'Yes, valid EEPC RCMC is mandatory to import capital machinery at 0% custom duty under the EPCG scheme.' },
      { question: 'What happens if EEPC RCMC is not renewed?', answer: 'Non-renewal leads to suspension of export incentives under RoDTEP, EPCG, and duty drawback schemes.' },
      { question: 'How does Akshayb2bsolutions assist with EEPC Registration?', answer: 'Akshayb2bsolutions handles document verification, panel mapping, online portal submission, and fast certificate delivery hassle-free.' }
    ]
  },

  'pharmaceutical-export-promotion-council': {
    slug: 'pharmaceutical-export-promotion-council',
    serviceName: 'Pharmexcil Registration',
    councilName: 'Pharmaceutical Export Promotion Council (Pharmexcil)',
    categoryName: 'Import & Export / RCMC',
    pageTitle: 'Apply Online Pharmexcil Registration | Pharmexcil RCMC Service - Akshayb2bsolutions',
    metaDescription: 'Obtain your Pharmexcil RCMC Registration online fast. Call Akshayb2bsolutions today at: +91 97180 04839. India\'s Top Legal Firm.',
    keywords: ['Pharmexcil Registration', 'Pharmexcil RCMC', 'Pharma Export License India', 'API & Bulk Drug Export RCMC', 'Pharmexcil Certificate Online'],
    tagline: 'Get Your Pharmexcil Registration Certificate — Fast, Reliable & Fully Compliant Registration',
    introParagraph: 'The Pharmaceutical Export Promotion Council (Pharmexcil) was set up by the Ministry of Commerce and Industry, Govt. of India, to facilitate exports of bulk drugs, active pharmaceutical ingredients (APIs), finished formulations, herbal medicines, vaccines, nutraceuticals, and medical devices. Pharmexcil RCMC is indispensable for obtaining drug export permissions, USFDA/EU-GMP compliance support, and incentive claims under Indian foreign trade policies.',
    subServiceChips: [
      'API & Bulk Drug Export RCMC',
      'Formulations & Generic Drugs',
      'Herbal & Ayurvedic Exporters',
      'Vaccines & Biotechnology RCMC',
      'Pharmexcil Online Portal Filing',
      'USFDA / EU-GMP Trade Guidance'
    ],
    ratingScore: '4.9',
    totalReviews: '8,100+',
    keyHighlights: [
      'Official Ministry of Commerce Pharmexcil Portal Submission',
      'Specialized Assistance for Formulations, APIs & Herbal Exporters',
      '100% Online Document Verification & Streamlined Processing',
      'Express 3-5 Working Days RCMC Approval Assurance'
    ],
    overviewContent: {
      heading: 'Pharmexcil Registration in India - An Overview',
      paragraphs: [
        'Pharmexcil was set up in 2004 by the Ministry of Commerce and Industry, Government of India, to boost Indian pharmaceutical exports, which position India as the "Pharmacy of the World".',
        'Pharmexcil covers bulk drugs, active pharmaceutical ingredients (APIs), finished formulations, herbal & ayurvedic medicines, vaccines, diagnostics, biotechnology products, nutraceuticals, and medical devices. Holding a Pharmexcil RCMC is mandatory under Foreign Trade Policy for exporters in these product categories.',
        'Pharmexcil membership enables exporters to obtain Non-Conviction Certificates, export NOCs from CDSCO, duty drawback benefits, RoDTEP rebates, and participation in international pharma conventions like CPhI Worldwide and Arab Health.'
      ],
      closingLine: 'Akshayb2bsolutions offers expert Pharmexcil registration services, ensuring your pharmaceutical export documentation complies fully with DGFT and Pharmexcil regulatory standards.'
    },
    benefits: [
      {
        title: 'Mandatory Drug Export Clearance & CDSCO NOC',
        desc: 'Essential for obtaining export NOCs and certificate of pharmaceutical product (COPP) required for shipping medicine consignments.'
      },
      {
        title: 'Duty Drawback & RoDTEP Tax Rebates',
        desc: 'Claim export tax refunds and duty drawbacks on pharmaceutical formulations, APIs, and herbal products.'
      },
      {
        title: 'Participation in CPhI & Global Pharma Expos',
        desc: 'Receive subsidized exhibition stalls and buyer-seller meets at CPhI Worldwide, Arab Health, and US pharma summits.'
      },
      {
        title: 'International Regulatory Guidance (USFDA / EU-GMP)',
        desc: 'Access Pharmexcil advisory services regarding WHO-GMP, USFDA, EU-GMP, and PIC/S regulatory filings.'
      },
      {
        title: 'Zero-Duty Capital Equipment Import (EPCG)',
        desc: 'Import specialized pharma machinery, cleanroom equipment, and testing tools duty-free under EPCG scheme.'
      },
      {
        title: 'Enhanced Overseas Buyer Trust',
        desc: 'Global pharmaceutical distributors and hospital procurement chains require Pharmexcil membership as proof of legitimacy.'
      }
    ],
    eligibility: 'Pharmexcil Registration is mandatory for any individual, company, or firm exporting active pharmaceutical ingredients (APIs), finished drug formulations, herbal/ayurvedic products, vaccines, or medical devices. Both Manufacturer Exporters (holding a valid State Drug Manufacturing License) and Merchant Exporters (holding a valid Wholesale Drug License) with a DGFT IEC code are eligible.',
    checklist: {
      summary: 'Ensure your State Drug License details match your IEC profile prior to filing with Pharmexcil.',
      documents: [
        {
          category: 'Pharma & Business Licenses',
          items: [
            'Copy of DGFT issued Importer-Exporter Code (IEC)',
            'PAN Card of Entity / Proprietor',
            'GST Registration Certificate (Form REG-06)',
            'Valid Wholesale Drug License (Form 20B/21B) or Manufacturing License (Form 25/28)'
          ]
        },
        {
          category: 'Financial & Operational Credentials',
          items: [
            'Bank Certificate / Cancelled Cheque linked to IEC account',
            'GMP / WHO-GMP Certificate copy (if available)',
            'Certificate of Incorporation / Partnership Deed',
            'Class-3 Digital Signature Certificate (DSC) of Authorized Signatory'
          ]
        }
      ]
    },
    processSteps: [
      { stepNumber: 1, title: 'Drug License & Category Mapping', desc: 'We verify your Wholesale / Manufacturing Drug License and classify your pharma product portfolio.' },
      { stepNumber: 2, title: 'Document Vetting & IEC Matching', desc: 'Our team verifies your IEC, Drug License, GST, PAN, and bank account details for complete consistency.' },
      { stepNumber: 3, title: 'Online Pharmexcil Portal Filing', desc: 'We draft and submit the Pharmexcil registration application on the official online portal.' },
      { stepNumber: 4, title: 'Statutory Fee Remittance', desc: 'Government registration and annual membership fees are remitted through secure online portals.' },
      { stepNumber: 5, title: 'Scrutiny & Query Management', desc: 'Pharmexcil officials examine the application; our experts resolve any departmental queries promptly.' },
      { stepNumber: 6, title: 'Pharmexcil RCMC Certificate Delivery', desc: 'Your digital Pharmexcil RCMC certificate is issued and delivered straight to your registered email.' }
    ],
    whyChooseUsPoints: [
      { title: 'Pharmaceutical Trade Regulatory Experts', desc: 'In-depth expertise in CDSCO rules, Drug License linking, Pharmexcil portal guidelines, and DGFT policies.' },
      { title: 'Fast 3 to 5 Days Clearance', desc: 'Express processing ensures your medicine shipments do not face customs holds.' },
      { title: 'Transparent Fee Quote', desc: 'No hidden charges. Clear, upfront quote for wholesale merchant and manufacturing pharma exporters.' },
      { title: '100% Online Paperless Filing', desc: 'Entire filing handled digitally from your office without requiring visits to government offices.' },
      { title: 'Dedicated CA/CS Advisory Team', desc: 'Assigned trade compliance manager oversees your filing from initial review to certificate issuance.' },
      { title: 'Trusted by Pharma Hubs Nationally', desc: 'Serving pharmaceutical exporters in Hyderabad, Baddi, Ahmedabad, Mumbai, Indore, and Bengaluru.' }
    ],
    requirements: [
      { term: 'Active IEC Code', explanation: 'Valid DGFT Importer-Exporter Code in the business entity name.' },
      { term: 'Drug License', explanation: 'Valid Wholesale Drug License (Form 20B/21B) or Manufacturing License (Form 25/28).' },
      { term: 'Pharma Product Mapping', explanation: 'Products falling under Pharmexcil designated pharmaceutical categories.' },
      { term: 'Bank Verification', explanation: 'Bank certificate or cancelled cheque corresponding to IEC account.' },
      { term: 'Class-3 Digital Signature', explanation: 'Required for signing online filings on DGFT & Pharmexcil portals.' },
      { term: 'GMP Certificate (Optional)', explanation: 'WHO-GMP or State GMP certificate for manufacturer pharmaceutical units.' }
    ],
    faqs: [
      { question: 'What is Pharmexcil Registration?', answer: 'Pharmexcil Registration provides the Registration-Cum-Membership Certificate (RCMC) issued by the Pharmaceutical Export Promotion Council under the Ministry of Commerce.' },
      { question: 'Who needs Pharmexcil RCMC Certificate?', answer: 'Exporters of active pharmaceutical ingredients (APIs), drug formulations, herbal medicines, vaccines, and medical devices require Pharmexcil RCMC.' },
      { question: 'What is the validity period of Pharmexcil RCMC?', answer: 'Pharmexcil RCMC is valid for 5 financial years (subject to annual membership fee renewal).' },
      { question: 'Is Wholesale Drug License required for Pharmexcil merchant exporters?', answer: 'Yes, merchant exporters must hold a valid Wholesale Drug License (Form 20B/21B) issued by the State Drug Control authority.' },
      { question: 'How much does Pharmexcil Registration cost?', answer: 'Government fee varies based on export turnover and category. Contact Akshayb2bsolutions for an exact, transparent quote.' },
      { question: 'How long does it take to get Pharmexcil RCMC?', answer: 'Once verified documents are submitted, Pharmexcil issues the digital RCMC certificate within 3 to 5 working days.' },
      { question: 'Is IEC code mandatory before Pharmexcil filing?', answer: 'Yes, holding an active DGFT Importer-Exporter Code (IEC) is mandatory prior to Pharmexcil RCMC application.' },
      { question: 'Can ayurvedic & herbal exporters register with Pharmexcil?', answer: 'Yes, herbal, ayurvedic, and nutraceutical exporters fall directly under Pharmexcil\'s Herbal & Ayush product panel.' },
      { question: 'What happens if Pharmexcil RCMC is not renewed?', answer: 'Non-renewal leads to suspension of export incentives under RoDTEP, EPCG, and port customs clearance holds.' },
      { question: 'How does Akshayb2bsolutions assist with Pharmexcil Registration?', answer: 'Akshayb2bsolutions manages Drug License verification, document filing, online portal submission, and fast certificate delivery hassle-free.' }
    ]
  },

  'plastic-export-promotion-council': {
    slug: 'plastic-export-promotion-council',
    serviceName: 'PLEXCONCIL Registration',
    councilName: 'Plastic Export Promotion Council (PLEXCONCIL)',
    categoryName: 'Import & Export / RCMC',
    pageTitle: 'Apply Online PLEXCONCIL Registration | PLEXCONCIL RCMC Service - Akshayb2bsolutions',
    metaDescription: 'Get your PLEXCONCIL RCMC Certificate fast online. Call Akshayb2bsolutions today at: +91 97180 04839. India\'s Top Legal Firm.',
    keywords: ['PLEXCONCIL Registration', 'PLEXCONCIL RCMC', 'Plastic Export License India', 'Polymer Export Certificate', 'PLEXCONCIL Online Filing'],
    tagline: 'Get Your PLEXCONCIL Registration Certificate — Fast, Reliable & Fully Compliant Registration',
    introParagraph: 'The Plastic Export Promotion Council (PLEXCONCIL) is an export promotion organization sponsored by the Ministry of Commerce and Industry, Govt. of India, representing the Indian plastics industry. PLEXCONCIL RCMC is mandatory for exporters of raw polymers, plastic packaging films, molded houseware, masterbatches, PVC pipes, and polyester films. Obtaining PLEXCONCIL membership unlocks duty drawbacks, EPCG machine imports, and participation in international plastic exhibitions.',
    subServiceChips: [
      'Raw Polymer & Plastic RCMC',
      'Plastic Packaging Export License',
      'PVC Pipes & Fitting Certificate',
      'Masterbatches & Polyester Films',
      'PLEXCONCIL Online Portal Filing',
      'EPCG Scheme & RoDTEP Benefits'
    ],
    ratingScore: '4.8',
    totalReviews: '4,200+',
    keyHighlights: [
      'Official Ministry of Commerce PLEXCONCIL Portal Filing',
      'Expert Mapping for Polymer, Packaging & Molded Product Exporters',
      '100% Online Paperless Process & Swift Clearance',
      'Assistance for Merchant & Manufacturer Exporters'
    ],
    overviewContent: {
      heading: 'PLEXCONCIL Registration in India - An Overview',
      paragraphs: [
        'PLEXCONCIL was established in 1955 by the Ministry of Commerce and Industry, Government of India, to drive the international expansion of India\'s plastic manufacturing sector.',
        'PLEXCONCIL covers raw plastic polymers, molded goods, plastic packaging, masterbatches, PVC pipes, polyester films, woven sacks, consumer plastic items, and recycled plastic products. Holding a PLEXCONCIL RCMC is compulsory under India\'s Foreign Trade Policy for exporters in these segments.',
        'Membership in PLEXCONCIL enables exporters to claim duty drawbacks, tax rebates under RoDTEP, duty-free raw polymer imports under Advance Authorization, and participation in international expos like Plastindia, NPE USA, and K-Show Germany.'
      ],
      closingLine: 'Akshayb2bsolutions offers smooth and fast PLEXCONCIL registration services, guiding you through panel selection, online submission, and quick RCMC issuance.'
    },
    benefits: [
      {
        title: 'Duty Drawback & RoDTEP Tax Rebates',
        desc: 'Claim export tax refunds and duty drawbacks on polymer raw materials, packaging films, molded goods, and PVC pipes.'
      },
      {
        title: 'Zero-Duty Capital Equipment Import (EPCG)',
        desc: 'Import advanced injection molding, blow molding, and film extrusion machinery at 0% custom duty under EPCG scheme.'
      },
      {
        title: 'Duty-Free Raw Polymer Import',
        desc: 'Utilize Advance Authorization to import raw polymer granules and masterbatches duty-free for export processing.'
      },
      {
        title: 'Participation in Global Plastic Expos',
        desc: 'Receive subsidized exhibition stalls and buyer-seller meets at K-Show Germany, Plastindia, and NPE USA.'
      },
      {
        title: 'Global Buyer Credibility & Trade Leads',
        desc: 'Gain entry into PLEXCONCIL\'s global trade directory and receive verified buyer leads across Europe, Middle East, and USA.'
      },
      {
        title: 'Streamlined Customs & Port Clearances',
        desc: 'Prevent shipment holds at Indian sea ports and ICDs by displaying active PLEXCONCIL registration credentials.'
      }
    ],
    eligibility: 'PLEXCONCIL Registration is mandatory for any individual, firm, or company exporting plastic polymers, packaging, molded items, PVC products, or masterbatches. Both Manufacturer Exporters (operating plastic processing/extrusion units) and Merchant Exporters with a valid DGFT IEC code are eligible.',
    checklist: {
      summary: 'Ensure your business details in your IEC match your GST registration and bank records prior to PLEXCONCIL filing.',
      documents: [
        {
          category: 'Primary Company Documentation',
          items: [
            'Copy of DGFT issued Importer-Exporter Code (IEC)',
            'PAN Card of Entity / Proprietor',
            'GST Registration Certificate (Form REG-06)',
            'Certificate of Incorporation / Partnership Deed'
          ]
        },
        {
          category: 'Factory & Operational Credentials',
          items: [
            'Bank Certificate / Cancelled Cheque linked to IEC account',
            'Factory License / Udyam Certificate / Pollution NOC (For Manufacturer Exporters)',
            'Self-declaration of major plastic product categories and target markets',
            'Class-3 Digital Signature Certificate (DSC) of Authorized Signatory'
          ]
        }
      ]
    },
    processSteps: [
      { stepNumber: 1, title: 'Product Category Mapping', desc: 'We map your plastic items (Polymers, Packaging, PVC, Molded Goods, Masterbatches) to PLEXCONCIL panels.' },
      { stepNumber: 2, title: 'Document Vetting & Verification', desc: 'Our team verifies your IEC, GST, PAN, bank details, and factory proof for 100% accuracy.' },
      { stepNumber: 3, title: 'Online PLEXCONCIL Application Filing', desc: 'We fill out the online registration form on the official PLEXCONCIL portal.' },
      { stepNumber: 4, title: 'Statutory Fee Remittance', desc: 'Government registration and annual membership fees are remitted through secure gateways.' },
      { stepNumber: 5, title: 'Scrutiny & Query Management', desc: 'PLEXCONCIL desk officers examine the file; our consultants resolve any departmental query promptly.' },
      { stepNumber: 6, title: 'PLEXCONCIL RCMC Certificate Delivery', desc: 'Your digital PLEXCONCIL RCMC certificate is issued and delivered straight to your registered email.' }
    ],
    whyChooseUsPoints: [
      { title: 'Plastics Sector Trade Specialists', desc: 'In-depth expertise in plastic product panel classification, EPCG schemes, and DGFT trade rules.' },
      { title: 'Fast 3 to 5 Days Clearance', desc: 'Express processing ensures your plastic export shipments move without customs delays.' },
      { title: 'Transparent Upfront Quote', desc: 'No hidden charges. Clear fee structure for merchant and manufacturer plastic exporters.' },
      { title: '100% Online Paperless Process', desc: 'Entire filing executed digitally without requiring manual visits to government offices.' },
      { title: 'Dedicated CA/CS Advisory Team', desc: 'Senior trade consultants manage your file from drafting to final certificate delivery.' },
      { title: 'Trusted by Plastic Hubs Nationally', desc: 'Serving plastic exporters in Daman, Silvassa, Mumbai, Ahmedabad, Morbi, and Chennai.' }
    ],
    requirements: [
      { term: 'Active IEC Code', explanation: 'Valid DGFT Importer-Exporter Code in the business entity name.' },
      { term: 'GSTIN Registration', explanation: 'Active GST registration covering plastic or polymer goods trade/manufacturing.' },
      { term: 'Plastic Product Mapping', explanation: 'Products falling under PLEXCONCIL designated plastic categories.' },
      { term: 'Bank Verification', explanation: 'Bank certificate or cancelled cheque corresponding to IEC account.' },
      { term: 'Class-3 Digital Signature', explanation: 'Required for signing online filings on DGFT & PLEXCONCIL portals.' },
      { term: 'Factory License / Udyam', explanation: 'Factory license or Udyam certificate for manufacturer plastic units.' }
    ],
    faqs: [
      { question: 'What is PLEXCONCIL Registration?', answer: 'PLEXCONCIL Registration provides the Registration-Cum-Membership Certificate (RCMC) issued by the Plastic Export Promotion Council under the Ministry of Commerce.' },
      { question: 'Who needs PLEXCONCIL RCMC Certificate?', answer: 'Exporters of raw plastic polymers, packaging films, molded houseware, PVC pipes, masterbatches, and polyester films require PLEXCONCIL RCMC.' },
      { question: 'What is the validity period of PLEXCONCIL RCMC?', answer: 'PLEXCONCIL RCMC is valid for 5 financial years (subject to annual membership fee renewal).' },
      { question: 'Can merchant plastic exporters apply for PLEXCONCIL?', answer: 'Yes, merchant exporters who purchase plastic goods from domestic manufacturers can register as Merchant Exporters.' },
      { question: 'How much does PLEXCONCIL Registration cost?', answer: 'Government fee depends on annual export turnover and exporter category. Contact Akshayb2bsolutions for an exact quote.' },
      { question: 'How long does it take to get PLEXCONCIL RCMC?', answer: 'Once verified documents are uploaded, PLEXCONCIL issues the digital RCMC certificate within 3 to 5 working days.' },
      { question: 'Is IEC code mandatory before PLEXCONCIL filing?', answer: 'Yes, holding an active DGFT Importer-Exporter Code (IEC) is mandatory prior to PLEXCONCIL RCMC application.' },
      { question: 'Does PLEXCONCIL help with EPCG machinery import?', answer: 'Yes, valid PLEXCONCIL RCMC is mandatory to import plastic processing machinery at 0% custom duty under the EPCG scheme.' },
      { question: 'What happens if PLEXCONCIL RCMC is not renewed?', answer: 'Non-renewal leads to suspension of export incentives under RoDTEP, EPCG, and duty drawback schemes.' },
      { question: 'How does Akshayb2bsolutions assist with PLEXCONCIL Registration?', answer: 'Akshayb2bsolutions handles document verification, panel mapping, online portal submission, and fast certificate delivery hassle-free.' }
    ]
  },

  'spice-board-export-promotion-council': {
    slug: 'spice-board-export-promotion-council',
    serviceName: 'Spice Board Registration',
    councilName: 'Spice Board India',
    categoryName: 'Import & Export / RCMC',
    pageTitle: 'Apply Online Spice Board Registration | CRES Certificate Service - Akshayb2bsolutions',
    metaDescription: 'Get your Spice Board CRES / RCMC Certificate fast online. Call Akshayb2bsolutions today at: +91 97180 04839. India\'s Top Legal Firm.',
    keywords: ['Spice Board Registration', 'Spice Board RCMC', 'CRES Certificate Online', 'Spice Export License India', 'Cardamom & Pepper Export License'],
    tagline: 'Get Your Spice Board Registration Certificate — Fast, Reliable & Fully Compliant Registration',
    introParagraph: 'Spice Board India is the flagship organization under the Ministry of Commerce and Industry, Govt. of India, regulating and promoting the export of 52 scheduled Indian spices. Obtaining the Certificate of Registration as Exporter of Spices (CRES) / Spice Board RCMC is mandatory for exporting cardamom, black pepper, ginger, turmeric, chili, cumin, coriander, and spice oils & oleoresins. Spice Board registration guarantees quality certification, lab testing support, and international buyer trust.',
    subServiceChips: [
      '52 Scheduled Spices Export CRES',
      'Cardamom & Black Pepper RCMC',
      'Spice Oils & Oleoresins License',
      'Quality Lab Testing Support',
      'Spice Board Online Portal Filing',
      'Subsidies & Market Assistance'
    ],
    ratingScore: '4.9',
    totalReviews: '5,800+',
    keyHighlights: [
      'Official Ministry of Commerce Spice Board CRES Portal Filing',
      'Expert Guidance for Whole Spices, Powders & Oleoresins',
      '100% Online Verification & Laboratory Quality Mapping',
      'Swift 3-5 Working Days CRES Certificate Approval'
    ],
    overviewContent: {
      heading: 'Spice Board Registration in India - An Overview',
      paragraphs: [
        'Constituted under the Spices Board Act 1986, Spice Board India is responsible for the overall development and global export promotion of 52 scheduled Indian spices and spice products.',
        'India is known as the "Land of Spices", supplying premium cardamom, black pepper, chili, turmeric, ginger, cumin, coriander, fennel, curry powder, spice oils, and oleoresins worldwide. Holding a valid Certificate of Registration as Exporter of Spices (CRES) / RCMC is compulsory under Indian law prior to exporting any scheduled spice.',
        'Spice Board CRES ensures exporter compliance with stringent pesticide residue limits, aflatoxin standards, and phytosanitary norms demanded by regulators in USFDA, EU, Japan, and the Middle East.'
      ],
      closingLine: 'Akshayb2bsolutions provides complete Spice Board registration services, taking care of documentation, product mapping, online CRES portal submission, and fast certificate issuance.'
    },
    benefits: [
      {
        title: 'Mandatory CRES Certificate for Spice Exports',
        desc: 'Required by Indian customs and foreign authorities for clearing all shipments of 52 scheduled spices and spice oils.'
      },
      {
        title: 'Spice Board Quality Lab & Testing Subsidies',
        desc: 'Access state-of-the-art Spice Board NABL laboratories across India for subsidized pesticide residue and quality testing.'
      },
      {
        title: 'Financial Subsidies for Processing & Packaging',
        desc: 'Benefit from financial assistance schemes for adopting modern spice processing, color sorting, and vacuum packaging technologies.'
      },
      {
        title: 'Participation in World Spice Congress & Expos',
        desc: 'Receive subsidized exhibition space and buyer-seller meet invites at the World Spice Congress and international food expos.'
      },
      {
        title: 'Duty Drawback & RoDTEP Tax Rebates',
        desc: 'Claim export tax refunds and duty drawbacks on value-added spice products, oleoresins, and essential oils.'
      },
      {
        title: 'Enhanced Overseas Importer Confidence',
        desc: 'Global spice buyers in USA, Europe, and Middle East require Spice Board CRES as proof of official Indian quality compliance.'
      }
    ],
    eligibility: 'Spice Board CRES / RCMC Registration is mandatory for any business entity in India intending to export one or more of the 52 scheduled spices, spice powders, or spice extracts. Both Merchant Exporters (sourcing spices from mandis or farmers) and Manufacturer Exporters (operating spice grinding or extraction plants) holding a DGFT IEC code and FSSAI License are eligible.',
    checklist: {
      summary: 'Ensure your FSSAI license covers spice processing/trading and matches your IEC business details.',
      documents: [
        {
          category: 'Primary Business Credentials',
          items: [
            'Copy of DGFT issued Importer-Exporter Code (IEC)',
            'PAN Card of Entity / Proprietor',
            'GST Registration Certificate (Form REG-06)',
            'FSSAI Central / State License copy for spice handling'
          ]
        },
        {
          category: 'Financial & Operational Credentials',
          items: [
            'Bank Certificate / Cancelled Cheque linked to IEC account',
            'Factory License / Udyam / Grounding Unit Proof (For Manufacturer Exporters)',
            'Lease Deed / Property proof of business premises',
            'Class-3 Digital Signature Certificate (DSC) of Authorized Signatory'
          ]
        }
      ]
    },
    processSteps: [
      { stepNumber: 1, title: 'Spice Category & FSSAI Verification', desc: 'We verify your spice product list against the 52 scheduled spices and check FSSAI coverage.' },
      { stepNumber: 2, title: 'Document Vetting & IEC Checking', desc: 'Our team verifies your IEC, GST, PAN, FSSAI, and bank account details for complete consistency.' },
      { stepNumber: 3, title: 'Online CRES Portal Application', desc: 'We fill out the CRES application form on the official Spice Board portal.' },
      { stepNumber: 4, title: 'Statutory Fee Remittance', desc: 'Government CRES registration fees are remitted through secure online payment gateways.' },
      { stepNumber: 5, title: 'Scrutiny & Query Processing', desc: 'Spice Board officials review the application; our team handles any departmental query immediately.' },
      { stepNumber: 6, title: 'CRES / RCMC Certificate Delivery', desc: 'Your official digital Spice Board CRES certificate is issued and delivered straight to your email.' }
    ],
    whyChooseUsPoints: [
      { title: 'Spice Industry Trade Specialists', desc: 'Deep expertise in CRES regulations, pesticide testing rules, FSSAI linking, and DGFT policies.' },
      { title: 'Fast 3 to 5 Days Approval', desc: 'Express processing ensures your spice export shipments move without customs holds.' },
      { title: 'Transparent Upfront Quote', desc: 'No hidden charges. Clear, honest fee structure for merchant and manufacturer spice exporters.' },
      { title: '100% Online Paperless Filing', desc: 'Entire registration handled digitally without requiring manual visits to government offices.' },
      { title: 'Dedicated CA/CS Advisory Team', desc: 'Assigned trade compliance manager oversees your filing from initial review to certificate delivery.' },
      { title: 'Trusted by Spice Hubs Nationally', desc: 'Serving spice exporters in Kochi, Guntur, Unjha, Nizamabad, Jodhpur, and Mumbai.' }
    ],
    requirements: [
      { term: 'Active IEC Code', explanation: 'Valid DGFT Importer-Exporter Code in the business entity name.' },
      { term: 'FSSAI License', explanation: 'Central or State FSSAI License authorizing spice trade/export.' },
      { term: 'Scheduled Spice List', explanation: 'Products falling under Spice Board\'s 52 scheduled spice list.' },
      { term: 'Bank Verification', explanation: 'Bank certificate or cancelled cheque corresponding to IEC account.' },
      { term: 'Class-3 Digital Signature', explanation: 'Required for signing online filings on DGFT & CRES portals.' },
      { term: 'Processing Unit Proof', explanation: 'Factory license or Udyam certificate for manufacturer spice grinding units.' }
    ],
    faqs: [
      { question: 'What is Spice Board Registration (CRES)?', answer: 'Spice Board Registration provides the Certificate of Registration as Exporter of Spices (CRES) / RCMC issued by Spice Board India under the Ministry of Commerce.' },
      { question: 'Who needs CRES Certificate?', answer: 'Anyone exporting any of the 52 scheduled spices, spice powders, spice oils, or oleoresins from India requires CRES.' },
      { question: 'What is the validity period of CRES Certificate?', answer: 'CRES certificate is valid for a block period of 3 financial years.' },
      { question: 'Can merchant exporters apply for Spice Board Registration?', answer: 'Yes, merchant exporters who purchase spices from mandi traders or farmers can register as Merchant Exporters.' },
      { question: 'How much does Spice Board CRES Registration cost?', answer: 'Government fee depends on category and turnover. Contact Akshayb2bsolutions for an exact, transparent quote.' },
      { question: 'How long does it take to get CRES Certificate?', answer: 'Once verified documents are submitted, Spice Board issues the digital CRES certificate within 3 to 5 working days.' },
      { question: 'Is FSSAI mandatory for Spice Board Registration?', answer: 'Yes, a valid FSSAI license covering spice processing or wholesale trade is mandatory prior to CRES filing.' },
      { question: 'Are spice oils & oleoresins covered under Spice Board?', answer: 'Yes, value-added spice extracts, spice oils, and oleoresins fall directly under Spice Board jurisdiction.' },
      { question: 'What happens if I export spices without CRES?', answer: 'Exporting scheduled spices without CRES is an offense leading to customs seizure and heavy penalties.' },
      { question: 'How does Akshayb2bsolutions assist with CRES Registration?', answer: 'Akshayb2bsolutions manages document verification, FSSAI check, online portal submission, and fast CRES delivery hassle-free.' }
    ]
  },

  'coffee-board-export-promotion-council': {
    slug: 'coffee-board-export-promotion-council',
    serviceName: 'Coffee Board Registration',
    councilName: 'Coffee Board of India',
    categoryName: 'Import & Export / RCMC',
    pageTitle: 'Apply Online Coffee Board Registration | Coffee RCMC Service - Akshayb2bsolutions',
    metaDescription: 'Get your Coffee Board Registration / Export Permit fast. Call Akshayb2bsolutions today at: +91 97180 04839. India\'s Top Legal Firm.',
    keywords: ['Coffee Board Registration', 'Coffee Board RCMC', 'Coffee Export License India', 'Coffee Export Permit', 'Coffee Exporter Certificate'],
    tagline: 'Get Your Coffee Board Registration Certificate — Fast, Reliable & Fully Compliant Registration',
    introParagraph: 'The Coffee Board of India is an autonomous organization under the Ministry of Commerce and Industry, Govt. of India, governing coffee production and international coffee trade. Registration with the Coffee Board is mandatory for exporters, growers, curers, and roasters dealing in Arabica, Robusta, green coffee beans, roasted coffee, ground coffee, and instant coffee. Coffee Board registration ensures export permit approvals, quality certifications, and financial subsidy eligibility.',
    subServiceChips: [
      'Green Coffee Beans Export Permit',
      'Arabica & Robusta Exporter RCMC',
      'Instant & Roasted Coffee License',
      'Quality Evaluation & Cupping Cert',
      'Coffee Board Portal Filing',
      'Export Subsidies & Market Access'
    ],
    ratingScore: '4.8',
    totalReviews: '3,200+',
    keyHighlights: [
      'Official Ministry of Commerce Coffee Board Portal Submission',
      'Assistance for Raw Beans, Roasted & Instant Coffee Exporters',
      '100% Online Paperless Process & Prompt Processing',
      'Swift 3-5 Working Days Registration Approval'
    ],
    overviewContent: {
      heading: 'Coffee Board Registration in India - An Overview',
      paragraphs: [
        'Established under the Coffee Act VII of 1942, the Coffee Board of India regulates the Indian coffee sector, famous for shade-grown Arabica and Robusta varieties produced in Karnataka, Kerala, and Tamil Nadu.',
        'India exports over 70% of its total coffee produce to major international markets in Europe, Russia, USA, and the Middle East. Registration with the Coffee Board is obligatory for any entity wishing to export raw green coffee beans, specialty coffee, roasted coffee beans, or instant soluble coffee.',
        'Holding a Coffee Board Registration / RCMC enables coffee exporters to obtain mandatory Export Permits for each shipment, access Coffee Board quality testing labs, and receive financial assistance for international market promotion.'
      ],
      closingLine: 'Akshayb2bsolutions provides hassle-free Coffee Board registration services, managing documentation, online portal submission, and quick certificate delivery.'
    },
    benefits: [
      {
        title: 'Mandatory Coffee Export Permit Approval',
        desc: 'Enables seamless online generation of mandatory Coffee Export Permits required by Indian customs for every coffee shipment.'
      },
      {
        title: 'Duty Drawback & RoDTEP Tax Rebates',
        desc: 'Claim export tax refunds and duty drawbacks on raw green coffee, roasted coffee, and instant coffee products.'
      },
      {
        title: 'Access to Coffee Board Quality & Cupping Labs',
        desc: 'Utilize Coffee Board testing laboratories for coffee grading, moisture analysis, and specialty coffee cupping certification.'
      },
      {
        title: 'Participation in World Coffee Conference & Expos',
        desc: 'Receive subsidized exhibition stalls and buyer-seller meet invitations at the World Coffee Conference and global trade expos.'
      },
      {
        title: 'Financial Subsidies for Processing Equipment',
        desc: 'Access government subsidies for installing modern coffee curing, color sorting, roasting, and packaging machinery.'
      },
      {
        title: 'Overseas Importer Trust & Credibility',
        desc: 'Global coffee roasters and trade houses require Coffee Board certification as proof of official Indian origin and quality.'
      }
    ],
    eligibility: 'Coffee Board Registration is mandatory for any individual, company, or firm exporting green coffee beans, roasted coffee, ground coffee, or instant coffee from India. Both Merchant Exporters (sourcing coffee from growers/curers) and Manufacturer/Roaster Exporters with a valid DGFT IEC code and FSSAI license are eligible.',
    checklist: {
      summary: 'Ensure your FSSAI license covers coffee processing or trading and matches your IEC profile.',
      documents: [
        {
          category: 'Primary Entity Credentials',
          items: [
            'Copy of DGFT issued Importer-Exporter Code (IEC)',
            'PAN Card of Business Entity / Proprietor',
            'GST Registration Certificate (Form REG-06)',
            'FSSAI License copy for coffee handling'
          ]
        },
        {
          category: 'Financial & Operational Credentials',
          items: [
            'Bank Certificate / Cancelled Cheque linked to IEC account',
            'Curing Works / Roasting Unit License (For Manufacturer Exporters)',
            'Lease Deed / Ownership proof of business premises',
            'Class-3 Digital Signature Certificate (DSC) of Authorized Signatory'
          ]
        }
      ]
    },
    processSteps: [
      { stepNumber: 1, title: 'Coffee Product Category Verification', desc: 'We verify whether you export Green Beans, Roasted Coffee, Ground, or Instant Soluble Coffee.' },
      { stepNumber: 2, title: 'Document Vetting & FSSAI Checking', desc: 'Our team verifies your IEC, FSSAI, GST, PAN, and bank details for complete accuracy.' },
      { stepNumber: 3, title: 'Online Coffee Board Application', desc: 'We fill out the online registration form on the official Coffee Board of India portal.' },
      { stepNumber: 4, title: 'Statutory Fee Remittance', desc: 'Government registration and annual membership fees are remitted through secure online channels.' },
      { stepNumber: 5, title: 'Scrutiny & Query Management', desc: 'Coffee Board officials review the application; our consultants resolve any query immediately.' },
      { stepNumber: 6, title: 'Coffee Board Certificate Delivery', desc: 'Your digital Coffee Board Registration / RCMC certificate is issued and emailed to you.' }
    ],
    whyChooseUsPoints: [
      { title: 'Coffee Industry Trade Specialists', desc: 'Deep expertise in Coffee Board regulations, Export Permit procedures, FSSAI linking, and DGFT policies.' },
      { title: 'Fast 3 to 5 Days Approval', desc: 'Express processing ensures your coffee export shipments do not face port clearance delays.' },
      { title: 'Transparent Upfront Quote', desc: 'No hidden charges. Clear fee structure for merchant and manufacturer coffee exporters.' },
      { title: '100% Online Paperless Process', desc: 'Entire filing executed digitally without requiring manual visits to government offices.' },
      { title: 'Dedicated CA/CS Advisory Team', desc: 'Senior trade consultants manage your file from drafting to final certificate delivery.' },
      { title: 'Trusted by Coffee Hubs Nationally', desc: 'Serving coffee exporters in Bengaluru, Chikmagalur, Coorg, Wayanad, Mangalore, and Chennai.' }
    ],
    requirements: [
      { term: 'Active IEC Code', explanation: 'Valid DGFT Importer-Exporter Code in the business entity name.' },
      { term: 'FSSAI License', explanation: 'Central or State FSSAI License authorizing coffee trade or processing.' },
      { term: 'Coffee Category Mapping', explanation: 'Products falling under green coffee beans, roasted, ground, or instant coffee.' },
      { term: 'Bank Verification', explanation: 'Bank certificate or cancelled cheque corresponding to IEC account.' },
      { term: 'Class-3 Digital Signature', explanation: 'Required for signing online filings on DGFT & Coffee Board portals.' },
      { term: 'Roasting / Curing License', explanation: 'Curing works license or roaster license for manufacturer coffee units.' }
    ],
    faqs: [
      { question: 'What is Coffee Board Registration?', answer: 'Coffee Board Registration provides the Registration Certificate / RCMC issued by the Coffee Board of India under the Ministry of Commerce.' },
      { question: 'Who needs Coffee Board Registration?', answer: 'Exporters of green coffee beans (Arabica & Robusta), roasted coffee, ground coffee, and instant coffee require Coffee Board Registration.' },
      { question: 'What is the validity period of Coffee Board Registration?', answer: 'Coffee Board Registration is generally valid for 3 financial years (subject to annual renewal).' },
      { question: 'Can merchant coffee exporters register with Coffee Board?', answer: 'Yes, merchant exporters who purchase coffee beans from curing works or estates can register as Merchant Exporters.' },
      { question: 'How much does Coffee Board Registration cost?', answer: 'Government fee depends on exporter category and turnover. Contact Akshayb2bsolutions for an exact quote.' },
      { question: 'How long does it take to get Coffee Board Registration?', answer: 'Once verified documents are submitted, Coffee Board issues the digital certificate within 3 to 5 working days.' },
      { question: 'Is Coffee Export Permit required for every shipment?', answer: 'Yes, registered coffee exporters must generate an online Coffee Export Permit for each export consignment before customs clearance.' },
      { question: 'Is FSSAI required for Coffee Board Registration?', answer: 'Yes, a valid FSSAI Food License covering coffee trade or processing is mandatory.' },
      { question: 'What happens if coffee is exported without registration?', answer: 'Exporting coffee without Coffee Board registration and export permits is illegal and leads to customs impoundment.' },
      { question: 'How does Akshayb2bsolutions assist with Coffee Board Registration?', answer: 'Akshayb2bsolutions handles document verification, FSSAI check, online portal submission, and fast certificate delivery hassle-free.' }
    ]
  },

  'fieo-registration': {
    slug: 'fieo-registration',
    serviceName: 'FIEO Registration',
    councilName: 'Federation of Indian Export Organisations (FIEO)',
    categoryName: 'Import & Export / RCMC',
    pageTitle: 'Apply Online FIEO Registration | FIEO RCMC Service - Akshayb2bsolutions',
    metaDescription: 'Obtain your FIEO RCMC Registration online fast. Call Akshayb2bsolutions today at: +91 97180 04839. India\'s Top Legal Firm.',
    keywords: ['FIEO Registration', 'FIEO RCMC', 'Federation of Indian Export Organisations', 'Multi Product Exporter RCMC', 'FIEO Certificate Online'],
    tagline: 'Get Your FIEO Registration Certificate — Fast, Reliable & Fully Compliant Registration',
    introParagraph: 'The Federation of Indian Export Organisations (FIEO) is the apex body of Indian export promotion organizations, jointly set up by the Ministry of Commerce and Industry, Govt. of India, and private trade bodies. FIEO RCMC is specifically designed for multi-commodity exporters, merchant exporters, service exporters, star export houses, and companies whose product lines are not covered by any commodity-specific council. FIEO membership offers global trade leads, visa recommendation letters, and comprehensive export advisory.',
    subServiceChips: [
      'Multi-Commodity Exporter RCMC',
      'Merchant Exporters FIEO License',
      'Service Exporters RCMC',
      'Star Export House Authorization',
      'FIEO Visa Recommendation Letter',
      'Global Business Delegations'
    ],
    ratingScore: '4.9',
    totalReviews: '9,500+',
    keyHighlights: [
      'Official Ministry of Commerce FIEO Portal Submission',
      'Ideal for Multi-Product Exporters, Traders & Service Providers',
      '100% Online Paperless Process & Prompt Certificate Approval',
      'Includes Visa Recommendation & Global Trade Leads Access'
    ],
    overviewContent: {
      heading: 'FIEO Registration in India - An Overview',
      paragraphs: [
        'Set up in 1965 as an apex body under the Ministry of Commerce and Industry, Government of India, FIEO represents the unified voice of Indian exporters across all product and service sectors.',
        'While commodity-specific councils (like APEDA or AEPC) focus on individual product segments, FIEO caters to multi-product exporters, merchant exporters dealing in multiple goods, service exporters (IT, engineering consultancy, healthcare services), and recognized Star Export Houses.',
        'Holding a FIEO Registration-Cum-Membership Certificate (RCMC) satisfies DGFT Foreign Trade Policy requirements, enabling businesses to claim duty drawbacks, RoDTEP tax refunds, EPCG capital imports, and express trade visa recommendation letters for overseas travel.'
      ],
      closingLine: 'Akshayb2bsolutions provides end-to-end FIEO registration services, ensuring your multi-commodity or service export business secures its RCMC quickly and error-free.'
    },
    benefits: [
      {
        title: 'Single RCMC for Multi-Commodity Exporters',
        desc: 'Ideal for merchant exporters trading in diverse products who wish to avoid taking multiple individual council RCMCs.'
      },
      {
        title: 'FIEO Trade Visa Recommendation Letters',
        desc: 'Receive priority official visa recommendation letters from FIEO for business travel to Europe, USA, Asia, and Middle East.'
      },
      {
        title: 'Duty Drawback & RoDTEP Tax Refunds',
        desc: 'Fulfill mandatory RCMC requirements under Foreign Trade Policy to claim duty drawbacks and RoDTEP tax rebates.'
      },
      {
        title: 'Global Business Delegations & Trade Shows',
        desc: 'Participate in FIEO organized international trade delegations, B2B meets, and subsidized exhibition pavilions worldwide.'
      },
      {
        title: 'Access to Indian Trade Portal & Buyer Leads',
        desc: 'Gain exclusive access to FIEO\'s Indian Trade Portal featuring international buyer inquiries, trade statistics, and tariff rates.'
      },
      {
        title: 'Legal & Export Advisory Services',
        desc: 'Receive expert advisory on free trade agreements (FTAs), GST export refunds, customs dispute resolution, and trade policy updates.'
      }
    ],
    eligibility: 'FIEO Registration is open to any individual, partnership, LLP, or company holding an active Importer-Exporter Code (IEC). It is especially recommended for Merchant Exporters trading in multiple distinct commodities, Service Exporters, Star Export Houses, and exporters whose product line does not fall under any specialized export promotion council.',
    checklist: {
      summary: 'Ensure your business details in your IEC match your GST registration and bank account before applying to FIEO.',
      documents: [
        {
          category: 'Primary Company Documentation',
          items: [
            'Copy of DGFT issued Importer-Exporter Code (IEC)',
            'PAN Card of Business Entity / Proprietor',
            'GST Registration Certificate (Form REG-06)',
            'Certificate of Incorporation / Partnership Deed'
          ]
        },
        {
          category: 'Financial & Authorized Signatory Credentials',
          items: [
            'Bank Certificate / Cancelled Cheque linked to IEC account',
            'Self-declaration of major export products / services handled',
            'Passport copy of Directors / Partners (For Visa Recommendation eligibility)',
            'Class-3 Digital Signature Certificate (DSC) of Authorized Signatory'
          ]
        }
      ]
    },
    processSteps: [
      { stepNumber: 1, title: 'Multi-Product / Service Mapping', desc: 'We evaluate your export portfolio to confirm FIEO eligibility over individual commodity councils.' },
      { stepNumber: 2, title: 'Document Vetting & Verification', desc: 'Our team verifies your IEC, GST, PAN, bank details, and director records for 100% accuracy.' },
      { stepNumber: 3, title: 'Online FIEO Portal Application', desc: 'We complete and submit the registration form on the official FIEO online portal.' },
      { stepNumber: 4, title: 'Statutory Fee Remittance', desc: 'Government registration and annual membership fees are remitted through secure gateways.' },
      { stepNumber: 5, title: 'Scrutiny & Query Management', desc: 'FIEO desk officers review the file; our consultants resolve any departmental queries immediately.' },
      { stepNumber: 6, title: 'FIEO RCMC Certificate Delivery', desc: 'Your digital FIEO RCMC certificate is issued and delivered straight to your registered email.' }
    ],
    whyChooseUsPoints: [
      { title: 'Apex Trade Body Regulatory Experts', desc: 'Deep expertise in FIEO rules, multi-commodity export guidelines, visa letters, and DGFT policies.' },
      { title: 'Fast 3 to 5 Days Clearance', desc: 'Express processing ensures your export shipments face zero port clearance delays.' },
      { title: 'Transparent Upfront Quote', desc: 'No hidden charges. Clear fee structure for merchant, service, and star export house entities.' },
      { title: '100% Online Paperless Process', desc: 'Entire filing executed digitally without requiring manual visits to government offices.' },
      { title: 'Dedicated CA/CS Advisory Team', desc: 'Senior trade consultants manage your file from drafting to final certificate delivery.' },
      { title: 'Trusted by Exporters Across India', desc: 'Serving multi-commodity exporters in Delhi NCR, Mumbai, Kolkata, Chennai, Bengaluru, and Hyderabad.' }
    ],
    requirements: [
      { term: 'Active IEC Code', explanation: 'Valid DGFT Importer-Exporter Code in the business entity name.' },
      { term: 'GSTIN Registration', explanation: 'Active GST registration covering general trading, manufacturing, or service export.' },
      { term: 'Multi-Product / Service Scope', explanation: 'Product or service lines suitable for apex multi-commodity FIEO registration.' },
      { term: 'Bank Verification', explanation: 'Bank certificate or cancelled cheque corresponding to IEC account.' },
      { term: 'Class-3 Digital Signature', explanation: 'Required for signing online filings on DGFT & FIEO portals.' },
      { term: 'Director / Partner Details', explanation: 'PAN and ID proof of authorized directors or partners for FIEO records.' }
    ],
    faqs: [
      { question: 'What is FIEO Registration?', answer: 'FIEO Registration provides the Registration-Cum-Membership Certificate (RCMC) issued by the Federation of Indian Export Organisations under the Ministry of Commerce.' },
      { question: 'Who should choose FIEO over other councils?', answer: 'Multi-commodity merchant exporters, service exporters, star export houses, and traders dealing in products not covered by specific councils should choose FIEO.' },
      { question: 'What is the validity period of FIEO RCMC?', answer: 'FIEO RCMC is valid for 5 financial years (subject to annual membership fee renewal).' },
      { question: 'Does FIEO issue Visa Recommendation Letters?', answer: 'Yes, active FIEO members can request official Visa Recommendation Letters for business travel abroad.' },
      { question: 'How much does FIEO Registration cost?', answer: 'Government fee varies based on exporter category (Ordinary vs Multi-Product vs Star House). Contact Akshayb2bsolutions for an exact quote.' },
      { question: 'How long does it take to get FIEO RCMC?', answer: 'Once verified documents are uploaded, FIEO issues the digital RCMC certificate within 3 to 5 working days.' },
      { question: 'Is IEC code mandatory before FIEO filing?', answer: 'Yes, holding an active DGFT Importer-Exporter Code (IEC) is mandatory prior to FIEO RCMC application.' },
      { question: 'Can service exporters register with FIEO?', answer: 'Yes, IT, consultancy, engineering design, and professional service exporters can obtain FIEO RCMC.' },
      { question: 'What happens if FIEO RCMC is not renewed?', answer: 'Non-renewal leads to suspension of export incentives under RoDTEP, EPCG, and visa letter privileges.' },
      { question: 'How does Akshayb2bsolutions assist with FIEO Registration?', answer: 'Akshayb2bsolutions handles document verification, multi-product mapping, online portal submission, and fast certificate delivery hassle-free.' }
    ]
  },

  'mpeda-registration': {
    slug: 'mpeda-registration',
    serviceName: 'MPEDA Registration',
    councilName: 'Marine Products Export Development Authority (MPEDA)',
    categoryName: 'Import & Export / RCMC',
    pageTitle: 'Apply Online MPEDA Registration | Marine Products RCMC Service - Akshayb2bsolutions',
    metaDescription: 'Obtain your MPEDA Registration / RCMC fast. Call Akshayb2bsolutions today at: +91 97180 04839. India\'s Top Legal Firm.',
    keywords: ['MPEDA Registration', 'MPEDA RCMC', 'Marine Products Export License', 'Seafood Export Certificate India', 'Frozen Shrimp Export License'],
    tagline: 'Get Your MPEDA Registration Certificate — Fast, Reliable & Fully Compliant Registration',
    introParagraph: 'The Marine Products Export Development Authority (MPEDA) is a statutory body under the Ministry of Commerce and Industry, Govt. of India, regulating and promoting marine product exports. Registration with MPEDA is mandatory for processing plants, cold storages, merchant exporters, and chilled/frozen seafood exporters dealing in shrimp, fish, squid, octopus, crab, and ornamental fish. MPEDA registration ensures compliance with EU, USFDA, and JAS health standards while qualifying exporters for marine export subsidies.',
    subServiceChips: [
      'Frozen Seafood & Shrimp RCMC',
      'Processing Plant Registration',
      'Cold Storage Approval Certificate',
      'Merchant Exporter Marine License',
      'EU & USFDA Export Standards',
      'MPEDA Subsidies & Infrastructure'
    ],
    ratingScore: '4.9',
    totalReviews: '4,600+',
    keyHighlights: [
      'Official Ministry of Commerce MPEDA Portal Filing',
      'Coverage for Merchant Exporters, Processing Plants & Cold Storages',
      '100% Online Paperless Verification & Streamlined Processing',
      'Swift 3-5 Working Days RCMC Certificate Approval'
    ],
    overviewContent: {
      heading: 'MPEDA Registration in India - An Overview',
      paragraphs: [
        'Established under the Marine Products Export Development Authority Act 1972, MPEDA is tasked with promoting the export of all varieties of marine products from India.',
        'India is among the top seafood exporters globally, shipping premium frozen shrimp, cephalopods (squid and octopus), frozen fish, crab meat, dried seafood, live aquatic animals, and ornamental fish. Registration with MPEDA is compulsory under Indian law for all entities involved in marine export trade.',
        'Holding MPEDA Registration / RCMC ensures seafood exporters can obtain EU export approvals, USFDA seafood HACCP certifications, duty drawback benefits, RoDTEP tax rebates, and financial subsidies for cold chain infrastructure.'
      ],
      closingLine: 'Akshayb2bsolutions provides complete MPEDA registration services, managing facility mapping, document verification, online portal filing, and fast certificate delivery.'
    },
    benefits: [
      {
        title: 'Mandatory Seafood Export Approval',
        desc: 'Required by Indian customs and international port health authorities for exporting all marine and seafood consignments.'
      },
      {
        title: 'Duty Drawback & RoDTEP Tax Rebates',
        desc: 'Claim export tax refunds and duty drawbacks on frozen shrimp, fish fillets, cephalopods, and processed marine products.'
      },
      {
        title: 'Financial Subsidies for Cold Chain Infrastructure',
        desc: 'Access MPEDA subsidies for setting up modern IQF freezing plants, refrigerated trucks, pre-processing centers, and flake ice units.'
      },
      {
        title: 'Participation in Global Seafood Expos',
        desc: 'Receive subsidized exhibition booths at major global seafood events such as Seafood Expo Global Brussels and Boston Seafood Show.'
      },
      {
        title: 'EU & USFDA Export Standard Compliance',
        desc: 'Receive MPEDA technical guidance for complying with EU food safety norms, USFDA HACCP, and SIMP traceabilities.'
      },
      {
        title: 'Overseas Buyer Trust & Quality Assurance',
        desc: 'International seafood importers in USA, Japan, Europe, and China require MPEDA registration as proof of quality compliance.'
      }
    ],
    eligibility: 'MPEDA Registration is mandatory for any individual, company, or firm exporting marine products from India. This includes Merchant Exporters (who export seafood without owning processing facilities), Manufacturer Exporters (owning processing plants or cold storages), Storage Premises, Handling Centers, and Fishing Vessels. A valid DGFT IEC code and FSSAI License are required.',
    checklist: {
      summary: 'Ensure your FSSAI license covers seafood handling/export and matches your IEC business details.',
      documents: [
        {
          category: 'Primary Entity Credentials',
          items: [
            'Copy of DGFT issued Importer-Exporter Code (IEC)',
            'PAN Card of Business Entity / Proprietor',
            'GST Registration Certificate (Form REG-06)',
            'FSSAI Central / State License for seafood processing or trade'
          ]
        },
        {
          category: 'Operational & Storage Credentials',
          items: [
            'Bank Certificate / Cancelled Cheque linked to IEC account',
            'Lease Agreement / Ownership proof of processing plant or cold storage (For Manufacturers)',
            'Pollution Control Board NOC / Factory License (For processing units)',
            'Class-3 Digital Signature Certificate (DSC) of Authorized Signatory'
          ]
        }
      ]
    },
    processSteps: [
      { stepNumber: 1, title: 'Category Mapping (Merchant / Plant)', desc: 'We determine whether you register as a Merchant Exporter, Processing Plant, or Cold Storage facility.' },
      { stepNumber: 2, title: 'Document Vetting & FSSAI Checking', desc: 'Our team verifies your IEC, FSSAI, GST, PAN, and bank account details for complete consistency.' },
      { stepNumber: 3, title: 'Online MPEDA Portal Application', desc: 'We fill out the registration form on the official MPEDA online portal.' },
      { stepNumber: 4, title: 'Statutory Fee Remittance', desc: 'Government registration and annual membership fees are remitted through secure online gateways.' },
      { stepNumber: 5, title: 'Scrutiny & Query Processing', desc: 'MPEDA officials examine the file; our consultants resolve any departmental query immediately.' },
      { stepNumber: 6, title: 'MPEDA RCMC Certificate Delivery', desc: 'Your official digital MPEDA Registration / RCMC certificate is issued and delivered straight to your email.' }
    ],
    whyChooseUsPoints: [
      { title: 'Marine Trade Regulatory Specialists', desc: 'Deep expertise in MPEDA rules, EU/USFDA compliance, FSSAI seafood norms, and DGFT policies.' },
      { title: 'Fast 3 to 5 Days Clearance', desc: 'Express processing ensures your frozen seafood shipments face zero port clearance delays.' },
      { title: 'Transparent Upfront Quote', desc: 'No hidden charges. Clear fee structure for merchant exporters and processing plant owners.' },
      { title: '100% Online Paperless Process', desc: 'Entire filing executed digitally without requiring manual visits to government offices.' },
      { title: 'Dedicated CA/CS Advisory Team', desc: 'Senior trade consultants manage your file from drafting to final certificate delivery.' },
      { title: 'Trusted by Marine Exporters Nationally', desc: 'Serving seafood exporters in Kochi, Visakhapatnam, Surat, Mangalore, Kolkata, and Chennai.' }
    ],
    requirements: [
      { term: 'Active IEC Code', explanation: 'Valid DGFT Importer-Exporter Code in the business entity name.' },
      { term: 'FSSAI License', explanation: 'Central or State FSSAI License authorizing seafood trade or processing.' },
      { term: 'Marine Category Scope', explanation: 'Products falling under frozen shrimp, fish, cephalopods, or marine goods.' },
      { term: 'Bank Verification', explanation: 'Bank certificate or cancelled cheque corresponding to IEC account.' },
      { term: 'Class-3 Digital Signature', explanation: 'Required for signing online filings on DGFT & MPEDA portals.' },
      { term: 'Plant / Storage License', explanation: 'Factory license and pollution NOC for manufacturer processing units.' }
    ],
    faqs: [
      { question: 'What is MPEDA Registration?', answer: 'MPEDA Registration provides the Registration Certificate / RCMC issued by the Marine Products Export Development Authority under the Ministry of Commerce.' },
      { question: 'Who needs MPEDA Registration?', answer: 'Exporters of frozen shrimp, fish, squid, octopus, crab, live aquatic animals, and dried seafood require MPEDA Registration.' },
      { question: 'What is the validity period of MPEDA Registration?', answer: 'MPEDA Registration is valid for a period of 3 financial years (subject to renewal).' },
      { question: 'Can merchant seafood exporters register with MPEDA?', answer: 'Yes, merchant exporters who tie up with MPEDA approved processing plants can register as Merchant Exporters.' },
      { question: 'How much does MPEDA Registration cost?', answer: 'Government fee depends on category (Merchant vs Processing Plant vs Storage). Contact Akshayb2bsolutions for an exact quote.' },
      { question: 'How long does it take to get MPEDA Registration?', answer: 'Once verified documents are submitted, MPEDA issues the digital certificate within 3 to 5 working days.' },
      { question: 'Is FSSAI mandatory for MPEDA Registration?', answer: 'Yes, a valid FSSAI license covering seafood processing or wholesale trade is mandatory.' },
      { question: 'What are EU and USFDA approvals in MPEDA?', answer: 'MPEDA assists seafood processing units in obtaining mandatory EU approval numbers and USFDA HACCP compliance required for EU/US exports.' },
      { question: 'What happens if seafood is exported without MPEDA registration?', answer: 'Exporting marine products without MPEDA registration is illegal and results in customs impoundment and port rejections.' },
      { question: 'How does Akshayb2bsolutions assist with MPEDA Registration?', answer: 'Akshayb2bsolutions handles document verification, FSSAI check, online portal submission, and fast certificate delivery hassle-free.' }
    ]
  }
};

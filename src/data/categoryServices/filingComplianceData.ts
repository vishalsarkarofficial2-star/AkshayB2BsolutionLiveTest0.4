import { ServiceDetailConfig } from './types';

export const FILING_COMPLIANCE_SERVICES: ServiceDetailConfig[] = [
  // --- FILING CATEGORY ---
  {
    slug: 'din-kyc',
    name: 'DIN KYC (DIR-3 KYC Web & e-Form)',
    category: 'Filing',
    parentCategory: 'Registration & License',
    price: '₹999',
    priceType: 'fixed',
    priceDisplay: '₹999/- only',
    heroPriceHook: 'Annual Mandatory Director KYC on MCA Portal | ₹999/- All-Inclusive',
    specialCallout: 'MCA V3 Portal Compliance',
    urgencyText: 'File before 30th September to avoid ₹5,000 penalty',
    ctaText: 'File DIN KYC',
    metaTitle: 'DIN KYC (DIR-3 KYC) Online @ ₹999 | Director KYC Filing MCA',
    metaDescription: 'Complete annual DIN KYC / DIR-3 KYC filing online at ₹999. Avoid ₹5,000 MCA penalty and reactivate de-activated Director Identification Number.',
    seoKeywords: ['DIN KYC online', 'DIR-3 KYC filing', 'director KYC MCA', 'DIR-3 KYC web ₹999', 'deactivated DIN reactivation', 'MCA V3 director KYC'],
    heroIntro: 'DIN KYC (Director Identification Number KYC), mandated under Rule 12A of the Companies (Appointment and Qualification of Directors) Rules, 2014 by the Ministry of Corporate Affairs (MCA), Government of India, is an annual statutory compliance requirement. Every individual holding an active Director Identification Number (DIN) or Designated Partner Identification Number (DPIN) allocated on or before the end of the financial year must submit their annual KYC details on the MCA V3 portal on or before 30th September to keep their DIN active and avoid a statutory late filing penalty of ₹5,000.',
    keyTags: ['Rule 12A MCA Rules', 'DIR-3 KYC Web (OTP based)', 'DIR-3 KYC e-Form (DSC based)', 'Avoid ₹5,000 MCA Penalty', 'De-activated DIN Restoration'],
    overview: {
      p1: 'The Ministry of Corporate Affairs mandates that all directors and designated partners must annually verify and update their personal credentials (mobile number, email ID, address proof) in the central MCA database.',
      p2: 'If a director fails to file DIN KYC on or before 30th September, the MCA system automatically marks the DIN status as "De-activated due to non-filing of DIR-3 KYC". Once de-activated, the director cannot sign company documents, file ROC annual returns, or incorporate new entities until a mandatory ₹5,000 government penalty is paid. Akshay B2B Solutions provides instant, seamless DIN KYC verification across Web-based OTP and DSC e-Forms.',
    },
    registrationProcessOverview: {
      status: 'Mandatory Annual MCA Statutory Compliance for all DIN Holders',
      governingAuthority: 'Ministry of Corporate Affairs (MCA), Government of India',
      summary: 'Extracting DIN master records from MCA V3 portal, validating mobile and email credentials, processing dual OTP authentication (or digital signature verification for e-Form), and submitting filing.',
      postApproval: 'Generation of official MCA SRN Challan confirming active DIN status for the financial year.',
      assistanceRole: 'DIN status audit, mobile/email OTP coordination, DSC attestation, MCA V3 filing, and penalty-free SRN generation.'
    },
    whatIs: {
      definition: 'DIN KYC is an annual electronic declaration submitted on the MCA portal verifying the personal contact details and identity of every DIN holder.',
      points: [
        'Mandatory for all individuals holding a DIN/DPIN, even if currently not serving on any board.',
        'DIR-3 KYC Web: 1-click OTP verification when personal details have not changed from prior year.',
        'DIR-3 KYC e-Form: Comprehensive filing with Class 3 DSC, PAN, and passport when details change.',
        'Due annually on or before 30th September for the preceding financial year.',
        'Prevents automatic de-activation of Director Identification Numbers.',
        'Saves the director from a steep ₹5,000 non-waivable MCA late penalty.'
      ],
      closing: 'It preserves your active director status and ensures uninterrupted corporate governance capability.'
    },
    keyCharacteristics: [
      {
        title: 'DIR-3 KYC Web vs e-Form',
        description: 'Web service is for repeat filers with unchanged details (Dual OTP based); e-Form is for first-time filers or detail updates (DSC based).'
      },
      {
        title: 'Dual OTP Verification',
        description: 'Separate 6-digit OTPs sent simultaneously to the director personal mobile number and personal email ID.'
      },
      {
        title: 'Automatic De-activation on Default',
        description: 'On 1st October, non-compliant DINs are automatically marked "De-activated" on the public MCA master index.'
      },
      {
        title: 'Mandatory ₹5,000 Penalty',
        description: 'Filing after 30th September requires mandatory payment of ₹5,000 government late fee per DIN.'
      }
    ],
    importanceBenefits: {
      intro: 'Filing your annual DIN KYC promptly delivers essential corporate protections:',
      benefits: [
        {
          title: 'Preserves Active DIN Status',
          desc: 'Keeps your Director Identification Number active on the MCA database, ensuring seamless corporate operations.'
        },
        {
          title: 'Total Protection from ₹5,000 MCA Penalty',
          desc: 'Avoid paying the hefty statutory late penalty of ₹5,000 imposed automatically on late filings.'
        },
        {
          title: 'Uninterrupted ROC Annual Filings',
          desc: 'Prevents blocking of company annual filings (AOC-4, MGT-7) which cannot be submitted if any director DIN is de-activated.'
        },
        {
          title: 'Protects Directorships Across All Companies',
          desc: 'A single de-activated DIN freezes directorship privileges and signing powers across all companies where the director holds office.'
        },
        {
          title: 'Same-Day Instant Resolution',
          desc: 'Completed within 15 to 30 minutes with immediate generation of official MCA Service Request Number (SRN) receipts.'
        }
      ],
      closing: 'It maintains your pristine professional standing in the corporate registry with zero downtime.'
    },
    package: {
      title: 'DIN KYC (DIR-3 KYC) Complete Package',
      description: 'MCA V3 profile verification, dual OTP / DSC coordination, portal filing, and official SRN delivery.',
      checklist: [
        'MCA Portal DIN Master Record Status Verification',
        'Verification of Registered Mobile Number & Personal Email ID',
        'DIR-3 KYC Web (OTP-Based) Electronic Submission',
        'DIR-3 KYC e-Form Preparation & Class 3 DSC Attestation (if required)',
        'Professional Certification by Practicing CA / CS / CMA',
        'MCA V3 Portal Fee Processing & Filing Submission',
        'Generation of Official MCA Service Request Number (SRN) Receipt',
        'Complimentary Directorship Master Summary Report'
      ]
    },
    types: [
      {
        title: 'DIR-3 KYC Web (OTP Based)',
        desc: 'For directors who previously filed an e-Form and have no changes in personal mobile, email, or address.',
        eligibility: 'Repeat filers with same details'
      },
      {
        title: 'DIR-3 KYC e-Form (DSC Based)',
        desc: 'For first-time DIN holders or directors updating mobile, email, residential address, or passport numbers.',
        eligibility: 'First-time filers & updates'
      },
      {
        title: 'De-activated DIN Reactivation',
        desc: 'For directors whose DIN is marked de-activated, requiring penalty payment of ₹5,000 and e-Form filing.',
        eligibility: 'De-activated DIN holders'
      }
    ],
    comparison: {
      title: 'DIR-3 KYC Web vs DIR-3 KYC e-Form',
      headers: ['Parameter', 'DIR-3 KYC Web', 'DIR-3 KYC e-Form'],
      rows: [
        { aspect: 'Applicability', col1: 'Subsequent annual filings with no changes', col2: 'First-time filers or when details update' },
        { aspect: 'Authentication', col1: 'Dual OTP on Mobile & Email', col2: 'Class 3 Digital Signature Certificate (DSC)' },
        { aspect: 'Document Upload', col1: 'Zero document uploads required', col2: 'PAN, Aadhaar, Passport & Address proof' },
        { aspect: 'Professional Attestation', col1: 'Not required', col2: 'Mandatory CA/CS/CMA professional certification' },
        { aspect: 'Filing Turnaround', col1: 'Instant (15 Minutes)', col2: '1 to 2 Working Days' }
      ]
    },
    lawsGoverning: {
      actName: 'Companies Act, 2013 (Section 153 & 157) & Companies Rules, 2014',
      authority: 'Ministry of Corporate Affairs (MCA), Government of India',
      points: [
        'Rule 12A of Companies (Appointment and Qualification of Directors) Rules, 2014.',
        'Mandatory annual filing on or before 30th September.',
        'Companies (Registration Offices and Fees) Rules, 2014 prescribing ₹5,000 late fee.',
        'Section 164 disqualification implications for non-filing directors.',
        'Prohibits de-activated directors from signing e-forms on MCA portal.'
      ],
      penalties: 'Non-filing marks DIN as de-activated and attracts a non-waivable statutory government late fee of ₹5,000.'
    },
    eligibilityRequirements: {
      intro: 'Any individual holding an approved DIN/DPIN as of 31st March of the preceding financial year:',
      criteria: [
        'All active DIN holders in Private Limited, Public Limited, Section 8, and OPC companies.',
        'All Designated Partners holding DPIN in LLPs.',
        'Disqualified directors or directors not currently appointed to any company must also file.'
      ],
      documentsRequired: [
        '8-Digit Director Identification Number (DIN)',
        'PAN Card of the Director',
        'Active Personal Mobile Number & Personal Email ID (for OTP verification)',
        'Aadhaar Card / Passport / Voter ID / Driving License (for e-Form updates)',
        'Class 3 Digital Signature Certificate (DSC) of Director (for e-Form updates)'
      ]
    },
    processSteps: [
      { step: 1, title: 'DIN Status Check & Verification', desc: 'We verify your DIN status on the MCA portal and determine whether Web KYC or e-Form KYC is applicable.' },
      { step: 2, title: 'OTP / DSC Coordination', desc: 'For Web KYC, we generate the OTPs on your mobile and email; for e-Form, we attach your DSC and professional CA certification.' },
      { step: 3, title: 'MCA V3 Portal Submission', desc: 'We submit the filing on the MCA V3 system and process the zero fee challan (or penalty challan if delayed).' },
      { step: 4, title: 'SRN Delivery & Confirmation', desc: 'We deliver your official MCA SRN Acknowledgment confirming your DIN remains Active on the national registry.' }
    ],
    postRegistrationCompliance: {
      intro: 'Key best practices following DIN KYC completion:',
      points: [
        'Verify on the MCA portal that your DIN status displays as "Active".',
        'Notify your company secretarial team that DIN KYC is completed so company annual filings can proceed.',
        'Update personal records promptly if mobile number, email, or residential address changes during the year.',
        'Calendar reminder for subsequent year DIN KYC before 30th September.'
      ]
    },
    timelines: {
      tat: 'Instant (15-30 Minutes for Web KYC) / 24 Hours for e-Form',
      delayFactors: ['Delayed sharing of dual OTPs', 'Expired or unregistered DSC on MCA V3 portal', 'MCA portal V3 technical server downtime near 30th September'],
      speedAssurance: 'Our MCA compliance desk executes Web KYC filings within 15 minutes of receiving dual OTPs.'
    },
    certification: {
      issuingAuthority: 'Ministry of Corporate Affairs (MCA), Government of India',
      validity: '1 Financial Year (Valid until next annual filing cycle on 30th September)',
      legalSignificance: 'Official statutory MCA challan receipt confirming compliance with Rule 12A and maintaining active directorship status.',
      contents: ['Service Request Number (SRN)', 'Director Identification Number (DIN)', 'Director Full Name', 'Financial Year Filed', 'MCA Digital Stamp & Timestamp']
    },
    fees: {
      govtFee: '₹0 (Official MCA fee is Nil if filed on or before 30th September; ₹5,000 late fee if filed after)',
      professionalFee: '₹999/- only (Complete DIR-3 KYC Web or e-Form filing package)',
      transparencyNote: 'Fixed price ₹999 with zero hidden charges.'
    },
    taxation: {
      directTaxImpact: 'Director KYC compliance professional charges are 100% tax-deductible operational business expenses for the company.',
      gstImplications: 'Attracts 18% GST with full Input Tax Credit (ITC) eligibility for corporate taxpayers.',
      deductionsOrExemptions: 'Saves the company from paying non-deductible ₹5,000 MCA statutory late penalties.'
    },
    whyUs: [
      'Over 22,000+ DIN KYCs successfully processed with 100% on-time track record.',
      'Super-fast 15-minute turnaround with dedicated WhatsApp dual-OTP assistance.',
      'In-house team of practicing Company Secretaries and Chartered Accountants for e-Form certifications.',
      'Proactive annual deadline reminders ensuring you never incur the ₹5,000 MCA late penalty.',
      'Specialized handling of MCA V3 portal technical migrations and profile registrations.'
    ],
    faqs: [
      { q: 'Who is required to file DIR-3 KYC?', a: 'Every individual who holds an approved Director Identification Number (DIN) or Designated Partner Identification Number (DPIN) as of 31st March must mandatorily file DIR-3 KYC every year on or before 30th September, even if they are not currently a director in any company.' },
      { q: 'What is the last date to file DIN KYC without penalty?', a: 'The statutory annual deadline to file DIR-3 KYC without penalty is 30th September of every financial year.' },
      { q: 'What happens if I miss the 30th September deadline?', a: 'If you miss the deadline, your DIN is automatically marked "De-activated due to non-filing of DIR-3 KYC" on 1st October. You can only reactivate it by paying a mandatory ₹5,000 MCA government late fee and filing the e-Form.' },
      { q: 'What is the difference between DIR-3 KYC Web and DIR-3 KYC e-Form?', a: 'DIR-3 KYC Web is an instant OTP-based verification for directors who previously filed an e-form and have no changes in their personal details. DIR-3 KYC e-Form is a detailed form with document attachments, DSC, and CA/CS certification used for first-time filers or when updating personal details.' },
      { q: 'Can a company file AOC-4 or MGT-7 if a director DIN is de-activated?', a: 'No! The MCA portal will block the filing of all company annual forms (AOC-4, MGT-7) and event-based forms if any of the signing directors hold a de-activated DIN.' },
      { q: 'How do I get my DIN KYC filed today?', a: 'Click "File DIN KYC" to share your DIN and contact details with our compliance team. We will generate the dual OTPs and deliver your official MCA SRN receipt in 15 minutes.' }
    ],
    relatedServices: [
      { name: 'ROC Annual Filing', desc: 'Mandatory annual MCA compliance (AOC-4 & MGT-7) for companies.', price: '₹1,999' },
      { name: 'DIR-3 KYC Filing', desc: 'Annual Director KYC compliance on MCA portal.', price: '₹999' },
      { name: 'Appointment of Director', desc: 'Formal appointment of new director with MCA Form DIR-12.', price: '₹1,499' },
      { name: 'Resignation of Director', desc: 'Formal resignation of director with MCA Form DIR-11 & DIR-12.', price: '₹1,499' },
      { name: 'Income Tax Return (ITR)', desc: 'Accurate tax filing for individuals, firms, and companies.', price: '₹499' },
      { name: 'GST Return Filing', desc: 'Monthly & quarterly GSTR-1 and GSTR-3B filing with ITC reconciliation.', price: '₹499/Month' }
    ]
  },
  {
    slug: 'roc-annual-filing',
    name: 'ROC Annual Filing (AOC-4 & MGT-7)',
    category: 'Filing',
    parentCategory: 'Registration & License',
    price: '₹1,999',
    priceType: 'fixed',
    priceDisplay: '₹1,999/- only',
    heroPriceHook: 'Annual MCA Compliance (AOC-4 & MGT-7/7A) for Pvt Ltd & OPC | ₹1,999/- All-Inclusive',
    specialCallout: 'MCA V3 Compliant Filing',
    urgencyText: 'Avoid ₹100/day compounding late penalty per form',
    ctaText: 'Start ROC Annual Filing',
    metaTitle: 'ROC Annual Filing Online @ ₹1,999 | AOC-4 & MGT-7 MCA Filing',
    metaDescription: 'Complete ROC Annual Filing (AOC-4 Financials & MGT-7 Annual Return) online at ₹1,999. In-house CS verification, Board Report drafting, and zero penalty guarantee.',
    seoKeywords: ['ROC annual filing', 'AOC-4 filing online', 'MGT-7 annual return', 'ROC filing ₹1999', 'MCA annual compliance pvt ltd', 'avoid ROC ₹100 per day penalty'],
    heroIntro: 'ROC Annual Filing, governed under Sections 92 and 137 of the Companies Act, 2013 read with the Companies (Management and Administration) Rules, 2014, is the mandatory annual statutory submission of audited financial statements (Form AOC-4) and the annual return of shareholders, directors, and corporate governance (Form MGT-7 / MGT-7A) by every registered Private Limited Company, One Person Company (OPC), Section 8 Company, and Public Limited Company to the Registrar of Companies (ROC), Ministry of Corporate Affairs (MCA). Failing to file before statutory deadlines triggers severe compounding penalties of ₹100 per day per form with no upper cap.',
    keyTags: ['Section 92 & 137 Companies Act', 'Form AOC-4 Financial Statements', 'Form MGT-7 / MGT-7A Annual Return', 'Avoid ₹100/Day Penalty per Form', 'Director Disqualification Shield'],
    overview: {
      p1: 'Every registered company in India, regardless of whether it conducted active business operations or remained dormant during the financial year, is legally obligated to hold an Annual General Meeting (AGM) and file its annual accounts and return with the Registrar of Companies.',
      p2: 'Form AOC-4 (Financial Statements, Balance Sheet, P&L, Directors Report, and Auditors Report) must be filed within 30 days of the AGM, and Form MGT-7 / MGT-7A (Annual Return) must be filed within 60 days of the AGM. Non-compliance results in an automatic ₹100/day penalty per form (₹200/day combined), officer-in-default prosecution under Section 454, and potential director disqualification under Section 164. Akshay B2B Solutions provides comprehensive Board Report drafting, financial formatting, CS certification, and error-free MCA V3 e-filing.',
    },
    registrationProcessOverview: {
      status: 'Mandatory Annual MCA Statutory Compliance for all Registered Companies',
      governingAuthority: 'Registrar of Companies (ROC), Ministry of Corporate Affairs (MCA)',
      summary: 'Drafting Directors Report, preparing audited Balance Sheet and P&L in MCA format, drafting AGM notice and resolutions, preparing Form AOC-4 and MGT-7/7A, attaching Class 3 DSC, and submitting on MCA V3 portal.',
      postApproval: 'Generation of official MCA SRN Challans confirming annual statutory compliance approval.',
      assistanceRole: 'Financial statement formatting, Board Report preparation, CS attestation, DSC affixation, and MCA portal filing.'
    },
    whatIs: {
      definition: 'ROC Annual Filing is the annual submission of a company audited financial statements and annual return to the Registrar of Companies to maintain active corporate standing.',
      points: [
        'Form AOC-4: Annual financial statements, Balance Sheet, P&L, Directors Report, and Auditors Report.',
        'Form MGT-7 / MGT-7A: Annual return containing shareholding structure, directorships, and board meetings.',
        'Mandatory for all active companies even with zero transactions (dormant companies).',
        'AOC-4 due within 30 days of AGM (typically by 29th October for 30th Sept AGM).',
        'MGT-7 due within 60 days of AGM (typically by 29th November for 30th Sept AGM).',
        'Prevents automatic compounding penalty of ₹100 per day per form under Section 403.'
      ],
      closing: 'It keeps your corporate entity in pristine standing, prevents disqualification, and safeguards director reputations.'
    },
    keyCharacteristics: [
      {
        title: 'Dual Mandatory Forms',
        description: 'AOC-4 covers the financial health and auditor disclosures; MGT-7 covers governance, share capital, and shareholding patterns.'
      },
      {
        title: 'MGT-7A for Small Companies & OPCs',
        description: 'Small companies (paid-up capital < ₹4 Cr & turnover < ₹40 Cr) and OPCs file an abridged, simplified Form MGT-7A.'
      },
      {
        title: 'Compounding ₹100/Day Penalty',
        description: 'Under Section 403, a mandatory additional fee of ₹100 per day per form accumulates endlessly until the forms are filed.'
      },
      {
        title: 'Director Disqualification Shield',
        description: 'Failing to file annual returns for 3 consecutive years results in automatic 5-year disqualification of all directors under Section 164(2).'
      }
    ],
    importanceBenefits: {
      intro: 'Filing your ROC annual returns promptly delivers decisive corporate safeguards:',
      benefits: [
        {
          title: 'Total Immunity from ₹100/Day Compounding Fines',
          desc: 'Avoid accumulating thousands of rupees in statutory additional fees that multiply every single day of delay.'
        },
        {
          title: 'Prevents Director Disqualification under Section 164(2)',
          desc: 'Shields company directors from losing directorships across all companies and being banned from the MCA portal for 5 years.'
        },
        {
          title: 'Prevents ROC Strike-Off & Shell Company Tag',
          desc: 'Protects the company from being struck off by ROC under Section 248 or labeled as an inactive shell entity.'
        },
        {
          title: 'Essential for Bank Loans, VC Funding & Credit Lines',
          desc: 'Lenders and investors verify the public MCA master database for up-to-date AOC-4 and MGT-7 filings before disbursing capital.'
        },
        {
          title: 'Government Tender & Corporate Vendor Empanelment',
          desc: 'Corporate enterprise clients and PSUs mandate active ROC compliance certificates during vendor onboarding.'
        }
      ],
      closing: 'It provides statutory legitimacy and complete legal security to your corporate enterprise.'
    },
    package: {
      title: 'ROC Annual Filing Complete Package',
      description: 'End-to-end Board Report drafting, financial formatting, CS certification, and AOC-4 & MGT-7 MCA V3 portal filing.',
      checklist: [
        'Audited Balance Sheet, P&L Account & Notes to Accounts Ingestion',
        'Drafting Comprehensive Directors Report & Statutory Annexures',
        'Preparation of Annual General Meeting (AGM) Notice & Resolutions',
        'Preparation of Form AOC-4 (Financial Statements & Disclosures)',
        'Preparation of Form MGT-7 / MGT-7A (Annual Return & Shareholding)',
        'Professional Attestation & Certification by Practicing CS / CA',
        'Electronic Submission on MCA V3 Portal with Class 3 DSC',
        'Generation of Official MCA Service Request Number (SRN) Receipts'
      ]
    },
    types: [
      {
        title: 'ROC Filing for Small Private Limited Company',
        desc: 'For small companies (capital < ₹4 Cr, turnover < ₹40 Cr) filing AOC-4 and abridged MGT-7A.',
        eligibility: 'Standard private limited companies'
      },
      {
        title: 'ROC Filing for One Person Company (OPC)',
        desc: 'For OPCs filing AOC-4 within 180 days of FY close and abridged MGT-7A.',
        eligibility: 'One Person Companies'
      },
      {
        title: 'ROC Filing for Section 8 NGO Companies',
        desc: 'For non-profit companies filing AOC-4 and MGT-7 with donor disclosure statements.',
        eligibility: 'Section 8 companies'
      },
      {
        title: 'ROC Filing for Public Limited Companies',
        desc: 'Comprehensive filing including AOC-4 XBRL formatting and secretarial audit certificates.',
        eligibility: 'Public limited companies'
      }
    ],
    comparison: {
      title: 'Form AOC-4 vs Form MGT-7',
      headers: ['Parameter', 'Form AOC-4', 'Form MGT-7 / MGT-7A'],
      rows: [
        { aspect: 'Subject Matter', col1: 'Financial Statements, Balance Sheet, P&L', col2: 'Annual Return, Governance, Shareholding' },
        { aspect: 'Governing Section', col1: 'Section 137 of Companies Act, 2013', col2: 'Section 92 of Companies Act, 2013' },
        { aspect: 'Filing Due Date', col1: 'Within 30 days of AGM (typically 29th Oct)', col2: 'Within 60 days of AGM (typically 29th Nov)' },
        { aspect: 'Mandatory Attachments', col1: 'Audited Financials, Board Report, Audit Report', col2: 'List of Shareholders, Directors, Meeting attendance' },
        { aspect: 'Late Fee', col1: '₹100 per day compounding', col2: '₹100 per day compounding' }
      ]
    },
    lawsGoverning: {
      actName: 'Companies Act, 2013 (Sections 92, 134, 137 & 403) & MCA Rules',
      authority: 'Registrar of Companies (ROC) & Ministry of Corporate Affairs',
      points: [
        'Section 137 mandating filing of copy of financial statements (Form AOC-4).',
        'Section 92 mandating preparation and filing of annual return (Form MGT-7).',
        'Section 134 mandating preparation and signing of Directors Report.',
        'Section 403 prescribing mandatory additional fee of ₹100 per day for delayed filing.',
        'Section 164(2) prescribing 5-year disqualification for 3 consecutive years of non-filing.'
      ],
      penalties: 'Delayed filing attracts ₹100/day penalty per form, director disqualification, and ROC strike-off.'
    },
    eligibilityRequirements: {
      intro: 'Every registered company incorporated under the Companies Act must file annual returns:',
      criteria: [
        'Private Limited Companies, OPCs, Section 8 Companies, and Public Limited Companies.',
        'Applicable even if the company had zero business turnover or incurred losses.',
        'Must possess audited financial statements signed by a chartered accountant auditor.'
      ],
      documentsRequired: [
        'Audited Financial Statements (Balance Sheet, P&L, Notes to Accounts & Auditors Report)',
        'Directors Report with statutory disclosures (drafted by our team)',
        'List of Shareholders and Transfers during the Financial Year',
        'Details of Board Meetings and AGM held during the year',
        'Class 3 Digital Signature Certificate (DSC) of minimum 2 Directors',
        'PAN Card & DIN of all signing Directors'
      ]
    },
    processSteps: [
      { step: 1, title: 'Financial Ingestion & Secretarial Audit', desc: 'We ingest your audited financial statements, verify share capital structure, and prepare the draft Directors Report.' },
      { step: 2, title: 'AGM Documentation & Resolutions', desc: 'We draft the formal AGM Notice, Board Resolutions, and shareholder attendance records for company records.' },
      { step: 3, title: 'Form AOC-4 & MGT-7 Preparation', desc: 'Our Company Secretaries populate the e-forms on MCA V3, attach PDF financial dossiers, and complete professional certification.' },
      { step: 4, title: 'DSC Affixation & Portal Submission', desc: 'We affix director DSCs, submit the e-forms on MCA V3 portal, and deliver the official SRN Challan receipts.' }
    ],
    postRegistrationCompliance: {
      intro: 'Key best practices following annual ROC filing:',
      points: [
        'Archive the filed AOC-4 and MGT-7 PDF forms along with MCA SRN Challans in the company statutory register.',
        'Maintain the Minutes Book of Board Meetings and General Meetings signed by the Chairman.',
        'Update statutory registers (Register of Members, Register of Directors & KMP) under Section 88.',
        'Verify on the MCA public index that the company balance sheet and annual return dates are updated.'
      ]
    },
    timelines: {
      tat: '3 to 5 Working Days',
      delayFactors: ['Delayed statutory audit completion by auditor', 'Unregistered or expired director DSCs on MCA V3 portal', 'MCA V3 portal technical server glitches during peak October-November months'],
      speedAssurance: 'Our secretarial team initiates filings well ahead of the October-November deadlines to ensure zero late fees.'
    },
    certification: {
      issuingAuthority: 'Registrar of Companies (ROC), Ministry of Corporate Affairs',
      validity: 'Statutory compliance proof for the specific Financial Year filed',
      legalSignificance: 'Official statutory MCA approval confirming the company accounts and annual returns are accepted on the public registry.',
      contents: ['Service Request Number (SRN)', 'Corporate Identification Number (CIN)', 'Company Legal Name', 'Form Type (AOC-4 / MGT-7)', 'Payment Receipt & MCA Digital Seal']
    },
    fees: {
      govtFee: 'Statutory MCA filing fee based on authorized capital (approx. ₹300-₹600 per form for small companies)',
      professionalFee: '₹1,999/- only (Complete AOC-4 & MGT-7/7A drafting, certification, and filing package)',
      transparencyNote: 'Fixed professional price ₹1,999 with zero hidden charges.'
    },
    taxation: {
      directTaxImpact: 'ROC secretarial compliance charges and professional fees are 100% tax-deductible operational business expenses.',
      gstImplications: 'Attracts 18% GST with full Input Tax Credit (ITC) eligibility for the company.',
      deductionsOrExemptions: 'Saves the company from catastrophic non-deductible ₹100/day MCA statutory late penalties.'
    },
    whyUs: [
      'Over 9,500+ ROC annual filings successfully completed with 100% MCA approval rate.',
      'Team of dedicated in-house practicing Company Secretaries (CS) and corporate attorneys.',
      'Comprehensive preparation of Directors Report, AGM documentation, and statutory disclosures.',
      'Seamless handling of MCA V3 portal technical migrations and DSC token registrations.',
      'Dedicated compliance manager tracking all corporate governance milestones and deadlines.'
    ],
    faqs: [
      { q: 'Is ROC Annual Filing mandatory if the company did not do any business?', a: 'Yes! Every registered company must file Form AOC-4 and Form MGT-7 every year, even if there were zero transactions or zero revenue. Dormant companies file Nil financial statements.' },
      { q: 'What is the penalty for late filing of AOC-4 and MGT-7?', a: 'Under Section 403 of the Companies Act, 2013, a mandatory late fee of ₹100 per day per form is charged. If both forms are delayed, the combined penalty is ₹200 per day with no upper cap.' },
      { q: 'What are the statutory due dates for AOC-4 and MGT-7?', a: 'Form AOC-4 must be filed within 30 days of the AGM (typically 29th October for an AGM held on 30th September). Form MGT-7 must be filed within 60 days of the AGM (typically 29th November).' },
      { q: 'What is Form MGT-7A and who can file it?', a: 'Form MGT-7A is an abridged, simplified annual return introduced for Small Companies (paid-up capital up to ₹4 Cr and turnover up to ₹40 Cr) and One Person Companies (OPCs).' },
      { q: 'Can directors be disqualified for not filing ROC annual returns?', a: 'Yes! Under Section 164(2) of the Companies Act, if a company fails to file its financial statements (AOC-4) or annual returns (MGT-7) for 3 consecutive financial years, all directors are automatically disqualified for 5 years.' },
      { q: 'How do I start ROC annual filing with Akshay B2B Solutions?', a: 'Click "Start ROC Annual Filing" to share your audited financials with our secretarial desk. We will draft your Board Report and file your MCA forms within 3 to 5 working days.' }
    ],
    relatedServices: [
      { name: 'DIN KYC Filing', desc: 'Annual Director KYC compliance on MCA portal.', price: '₹999' },
      { name: 'DIR-3 KYC Filing', desc: 'Annual Director KYC compliance on MCA portal.', price: '₹999' },
      { name: 'Income Tax Return (ITR)', desc: 'Accurate tax filing for individuals, firms, and companies.', price: '₹499' },
      { name: 'Appointment of Director', desc: 'Formal appointment of new director with MCA Form DIR-12.', price: '₹1,499' },
      { name: 'Resignation of Director', desc: 'Formal resignation of director with MCA Form DIR-11 & DIR-12.', price: '₹1,499' },
      { name: 'GST Annual Return (GSTR-9)', desc: 'Annual reconciliation and statutory return filing on GST portal.', price: '₹1,499' }
    ]
  },
  {
    slug: 'dir-3-kyc',
    name: 'DIR-3 KYC Filing',
    category: 'Filing',
    parentCategory: 'Registration & License',
    price: '₹999',
    priceType: 'fixed',
    priceDisplay: '₹999/- only',
    heroPriceHook: 'Fast-Track DIR-3 KYC Web & e-Form Compliance | ₹999/- All-Inclusive',
    specialCallout: 'MCA V3 Portal Verification',
    urgencyText: 'File before 30th September to avoid ₹5,000 penalty',
    ctaText: 'File DIR-3 KYC Now',
    metaTitle: 'DIR-3 KYC Filing Online @ ₹999 | Director KYC MCA V3 Portal',
    metaDescription: 'File DIR-3 KYC online at ₹999. Fast OTP-based Web KYC and DSC-based e-Form filing for company directors and LLP designated partners. Avoid ₹5,000 penalty.',
    seoKeywords: ['DIR-3 KYC filing online', 'director KYC ₹999', 'DIR 3 KYC web portal', 'DIN reactivation', 'MCA V3 director KYC', 'avoid 5000 DIN penalty'],
    heroIntro: 'DIR-3 KYC Filing, enacted under Rule 12A of the Companies (Appointment and Qualification of Directors) Rules, 2014 by the Ministry of Corporate Affairs (MCA), is the annual statutory verification of personal credentials for every individual holding an allocated Director Identification Number (DIN) or Designated Partner Identification Number (DPIN). Filing on or before 30th September ensures the DIN remains in "Active" status on the central MCA portal and insulates the director from a statutory late penalty of ₹5,000.',
    keyTags: ['Rule 12A MCA Rules', 'DIR-3 KYC Web & e-Form', 'Instant OTP Verification', 'Avoid ₹5,000 Penalty', 'Maintain Active Directorship'],
    overview: {
      p1: 'The Ministry of Corporate Affairs requires all directors to annually re-verify their personal contact information (mobile number and personal email address) on the centralized MCA V3 portal.',
      p2: 'Failing to file DIR-3 KYC before 30th September results in automatic de-activation of the DIN on 1st October, blocking the individual from signing company e-forms or filing ROC annual returns until a ₹5,000 government penalty is cleared. Akshay B2B Solutions executes seamless, same-day DIR-3 KYC filings with 100% accuracy.',
    },
    registrationProcessOverview: {
      status: 'Mandatory Annual MCA Statutory Compliance for all DIN Holders',
      governingAuthority: 'Ministry of Corporate Affairs (MCA), Government of India',
      summary: 'Validating DIN credentials, coordinating mobile and email OTPs (or DSC attestation for e-Forms), submitting on MCA V3, and generating official SRN receipt.',
      postApproval: 'Issuance of official MCA SRN Challan confirming active DIN status.',
      assistanceRole: 'DIN audit, OTP assistance, professional CS/CA attestation, portal submission, and SRN delivery.'
    },
    whatIs: {
      definition: 'DIR-3 KYC is an annual statutory verification filing required by the MCA to confirm that director contact and identity details remain accurate.',
      points: [
        'Mandatory for all individuals holding a DIN or DPIN as of 31st March.',
        'DIR-3 KYC Web: Fast OTP verification when details are unchanged.',
        'DIR-3 KYC e-Form: DSC-based filing when personal details or addresses are updated.',
        'Annual deadline is 30th September.',
        'Prevents de-activation of Director Identification Numbers.',
        'Avoids non-waivable statutory government late fee of ₹5,000.'
      ],
      closing: 'It preserves active directorship standing and ensures smooth corporate compliance.'
    },
    keyCharacteristics: [
      {
        title: 'Dual OTP Verification',
        description: 'Instant OTPs sent to the director personal mobile number and personal email ID for Web KYC verification.'
      },
      {
        title: '30th September Deadline',
        description: 'Statutory cutoff date across all corporate and LLP entities in India.'
      },
      {
        title: 'Penalty of ₹5,000 on Delay',
        description: 'Mandatory non-waivable statutory government fee charged for filings submitted after 30th September.'
      },
      {
        title: 'MCA V3 Integration',
        description: 'Directly linked to individual registered user profiles on the updated MCA V3 portal.'
      }
    ],
    importanceBenefits: {
      intro: 'Timely DIR-3 KYC filing provides essential protections:',
      benefits: [
        {
          title: 'Preserves Active DIN Status',
          desc: 'Maintains active directorship status across all companies where you serve on the board.'
        },
        {
          title: 'Saves ₹5,000 Government Late Penalty',
          desc: 'Avoid paying the hefty non-waivable ₹5,000 late fee per DIN for delayed submissions.'
        },
        {
          title: 'Enables Uninterrupted ROC Filings',
          desc: 'Ensures company annual returns (AOC-4, MGT-7) are not blocked due to director de-activation.'
        },
        {
          title: 'Instant 15-Minute Turnaround',
          desc: 'Completed within minutes with immediate generation of official MCA SRN Challan receipts.'
        },
        {
          title: 'Clean Corporate Track Record',
          desc: 'Maintains a flawless compliance score on public MCA director records.'
        }
      ],
      closing: 'It keeps your directorship credentials active, compliant, and legally recognized.'
    },
    package: {
      title: 'DIR-3 KYC Complete Package',
      description: 'MCA V3 status verification, dual OTP / DSC handling, and official SRN delivery.',
      checklist: [
        'DIN Master Record Status Audit on MCA Portal',
        'Verification of Mobile Number & Personal Email ID',
        'DIR-3 KYC Web (OTP-Based) Electronic Filing',
        'DIR-3 KYC e-Form Preparation & Professional CS/CA Attestation',
        'MCA V3 Portal Fee Processing',
        'Official MCA Service Request Number (SRN) Delivery',
        'Directorship Master Record Summary',
        'Subsequent Year Annual Compliance Reminders'
      ]
    },
    types: [
      {
        title: 'DIR-3 KYC Web (OTP Based)',
        desc: 'For directors with no changes in personal mobile, email, or address from prior year.',
        eligibility: 'Repeat filers'
      },
      {
        title: 'DIR-3 KYC e-Form (DSC Based)',
        desc: 'For first-time filers or updating mobile, email, passport, or residential address.',
        eligibility: 'First-time filers & updates'
      },
      {
        title: 'Reactivation of De-activated DIN',
        desc: 'For restoring DINs de-activated due to past non-filing, with ₹5,000 MCA penalty payment.',
        eligibility: 'De-activated DIN holders'
      }
    ],
    comparison: {
      title: 'DIR-3 KYC Web vs DIR-3 KYC e-Form',
      headers: ['Parameter', 'DIR-3 KYC Web', 'DIR-3 KYC e-Form'],
      rows: [
        { aspect: 'Prerequisite', col1: 'Must have filed e-Form in prior year', col2: 'First-time filers or updating details' },
        { aspect: 'Authentication', col1: 'Dual Mobile & Email OTP', col2: 'Class 3 Digital Signature (DSC)' },
        { aspect: 'Document Uploads', col1: 'None required', col2: 'PAN, Aadhaar, Passport & Address Proof' },
        { aspect: 'Professional Certification', col1: 'Not required', col2: 'Mandatory Practicing CA/CS/CMA' },
        { aspect: 'Filing Speed', col1: '15 Minutes', col2: '24 Hours' }
      ]
    },
    lawsGoverning: {
      actName: 'Companies (Appointment and Qualification of Directors) Rules, 2014 (Rule 12A)',
      authority: 'Ministry of Corporate Affairs (MCA), Government of India',
      points: [
        'Rule 12A mandating annual filing by 30th September.',
        'Section 153 and 157 of Companies Act, 2013 governing DIN allotment and monitoring.',
        'Prescribes ₹5,000 late fee under Companies (Registration Offices and Fees) Rules.',
        'De-activated DINs barred from signing e-forms on MCA portal.'
      ],
      penalties: 'De-activation of DIN and mandatory ₹5,000 government penalty.'
    },
    eligibilityRequirements: {
      intro: 'Any individual holding an approved DIN as of 31st March:',
      criteria: [
        'All directors in Private Limited, Public Limited, OPC, and Section 8 companies.',
        'All Designated Partners holding DPIN in LLPs.',
        'Individuals holding DIN even if not currently appointed to any board.'
      ],
      documentsRequired: [
        '8-Digit Director Identification Number (DIN)',
        'PAN Card of the Director',
        'Active Mobile Number and Email ID for OTP verification',
        'Aadhaar / Passport copy (for e-Form updates)',
        'Class 3 Digital Signature Certificate (for e-Form updates)'
      ]
    },
    processSteps: [
      { step: 1, title: 'DIN Status Verification', desc: 'We verify your DIN status on the MCA portal and identify whether Web KYC or e-Form is required.' },
      { step: 2, title: 'OTP / DSC Coordination', desc: 'We generate mobile and email OTPs or attach your Class 3 DSC with professional CS certification.' },
      { step: 3, title: 'MCA V3 Submission', desc: 'We submit the filing on the MCA V3 portal and process the filing challan.' },
      { step: 4, title: 'SRN Delivery', desc: 'We deliver the official MCA SRN receipt confirming your DIN remains Active.' }
    ],
    postRegistrationCompliance: {
      intro: 'Key obligations following DIR-3 KYC filing:',
      points: [
        'Verify active status on MCA portal.',
        'Notify company secretarial desk to proceed with annual filings.',
        'Update details promptly if residential address or phone changes.',
        'Calendar next year filing before 30th September.'
      ]
    },
    timelines: {
      tat: 'Instant (15-30 Minutes for Web KYC)',
      delayFactors: ['Delayed sharing of dual OTPs', 'MCA V3 server downtime near 30th September'],
      speedAssurance: 'Our team completes Web KYC within 15 minutes of receiving dual OTPs.'
    },
    certification: {
      issuingAuthority: 'Ministry of Corporate Affairs (MCA), Government of India',
      validity: '1 Financial Year (Valid until next 30th September cycle)',
      legalSignificance: 'Official statutory MCA challan receipt confirming compliance with Rule 12A.',
      contents: ['Service Request Number (SRN)', 'Director Identification Number (DIN)', 'Director Full Name', 'Financial Year Filed', 'MCA Digital Stamp & Timestamp']
    },
    fees: {
      govtFee: '₹0 (Nil if filed before 30th September; ₹5,000 late fee if filed after)',
      professionalFee: '₹999/- only (Complete filing package)',
      transparencyNote: 'Fixed price ₹999 with zero hidden charges.'
    },
    taxation: {
      directTaxImpact: 'Director KYC professional fees are 100% tax-deductible operational business expenses.',
      gstImplications: 'Attracts 18% GST with full Input Tax Credit eligibility.',
      deductionsOrExemptions: 'Saves the company from non-deductible ₹5,000 MCA late penalties.'
    },
    whyUs: [
      'Over 20,000+ DIR-3 KYCs successfully filed.',
      '15-minute express turnaround with WhatsApp dual-OTP assistance.',
      'Practicing CS/CA certification for e-Form updates.',
      'Proactive deadline reminders ensuring zero penalties.',
      'Full-stack corporate compliance desk for all MCA requirements.'
    ],
    faqs: [
      { q: 'Is DIR-3 KYC mandatory every year?', a: 'Yes! Under Rule 12A of the Companies Rules, DIR-3 KYC must be filed every year on or before 30th September by every individual who holds a DIN.' },
      { q: 'What is the government fee for DIR-3 KYC?', a: 'The official MCA portal fee is ₹0 (Nil) if filed on or before 30th September. If filed after 30th September, the government charges a mandatory late fee of ₹5,000.' },
      { q: 'Can I file DIR-3 KYC if I am no longer a director in any company?', a: 'Yes. As long as you hold an allotted DIN, you must file DIR-3 KYC annually, even if you do not currently hold directorship in any company.' },
      { q: 'What is the difference between DIR-3 KYC and DIN KYC?', a: 'They refer to the exact same statutory compliance. DIR-3 KYC is the formal form name prescribed by the MCA for annual Director Identification Number (DIN) KYC.' },
      { q: 'What documents are required for Web KYC?', a: 'For Web KYC (when personal details have not changed), no document uploads are required—only the DIN, PAN, and active Mobile/Email for dual OTP verification.' },
      { q: 'How do I start my DIR-3 KYC filing now?', a: 'Click "File DIR-3 KYC Now" to share your DIN and receive your official MCA SRN receipt within 15 minutes.' }
    ],
    relatedServices: [
      { name: 'DIN KYC (DIR-3 KYC Web & e-Form)', desc: 'Annual Mandatory Director KYC on MCA Portal.', price: '₹999' },
      { name: 'ROC Annual Filing', desc: 'Mandatory annual MCA compliance (AOC-4 & MGT-7) for companies.', price: '₹1,999' },
      { name: 'Appointment of Director', desc: 'Formal appointment of new director with MCA Form DIR-12.', price: '₹1,499' },
      { name: 'Resignation of Director', desc: 'Formal resignation of director with MCA Form DIR-11 & DIR-12.', price: '₹1,499' },
      { name: 'Income Tax Return (ITR)', desc: 'Accurate tax filing for individuals, firms, and companies.', price: '₹499' },
      { name: 'GST Return Filing', desc: 'Monthly & quarterly GSTR-1 and GSTR-3B filing with ITC reconciliation.', price: '₹499/Month' }
    ]
  },
  {
    slug: 'mgt-7-filing',
    name: 'Form MGT-7 / MGT-7A (Annual Return)',
    category: 'Filing',
    parentCategory: 'Registration & License',
    price: '₹1,499',
    priceType: 'fixed',
    priceDisplay: '₹1,499/- only',
    heroPriceHook: 'Company Annual Return (MGT-7 / MGT-7A) MCA Filing | ₹1,499/- All-Inclusive',
    specialCallout: 'MCA V3 Portal Certified Filing',
    urgencyText: 'Avoid ₹100/day compounding MCA penalty',
    ctaText: 'File Form MGT-7',
    metaTitle: 'Form MGT-7 / MGT-7A Filing Online @ ₹1,499 | Company Annual Return',
    metaDescription: 'File Form MGT-7 and MGT-7A annual returns online at ₹1,499. Shareholding structure, meeting disclosures, in-house CS certification, and zero penalty guarantee.',
    seoKeywords: ['Form MGT-7 filing', 'Form MGT-7A small company', 'annual return MCA filing', 'MGT-7 ₹1499', 'shareholding annual return', 'avoid ₹100 per day MGT-7 penalty'],
    heroIntro: 'Form MGT-7 (or abridged Form MGT-7A for Small Companies and OPCs), mandated under Section 92 of the Companies Act, 2013 read with Rule 11 of the Companies (Management and Administration) Rules, 2014, is the mandatory annual statutory return filed by every registered company with the Registrar of Companies (ROC), Ministry of Corporate Affairs (MCA). It captures comprehensive details of the company registered office, principal business activities, share capital structure, shareholding patterns, indebtedness, board meetings, director remuneration, and penalties. It must be filed within 60 days of the Annual General Meeting (AGM) to avoid a statutory penalty of ₹100 per day.',
    keyTags: ['Section 92 Companies Act', 'Form MGT-7 (Standard Companies)', 'Form MGT-7A (Small Companies & OPC)', 'Shareholding Pattern Disclosures', 'Avoid ₹100/Day Penalty'],
    overview: {
      p1: 'Form MGT-7 serves as the annual public snapshot of a company corporate structure, governance, and ownership. Every company incorporated in India—regardless of activity or revenue—must file its annual return with the ROC.',
      p2: 'Small companies (paid-up capital < ₹4 Cr and turnover < ₹40 Cr) and One Person Companies (OPCs) file the simplified abridged Form MGT-7A. Filing after the 60-day window triggers an automatic statutory penalty of ₹100 per day under Section 403. Akshay B2B Solutions prepares complete shareholding schedules, meeting summaries, CS certifications, and error-free MCA V3 filings.',
    },
    registrationProcessOverview: {
      status: 'Mandatory Annual MCA Statutory Compliance',
      governingAuthority: 'Registrar of Companies (ROC), Ministry of Corporate Affairs (MCA)',
      summary: 'Compiling shareholding registers, verifying board and general meeting minutes, preparing Form MGT-7/7A, attaching Practicing CS certification (if required), and filing on MCA V3 with Class 3 DSC.',
      postApproval: 'Generation of official MCA SRN Challan confirming approval of the annual return.',
      assistanceRole: 'Shareholding reconciliation, meeting register drafting, CS certification, DSC affixation, and MCA portal filing.'
    },
    whatIs: {
      definition: 'Form MGT-7 is the annual statutory return submitted by companies detailing their share capital, shareholding, directors, and governance during the financial year.',
      points: [
        'Mandatory annual return under Section 92 of Companies Act, 2013.',
        'Form MGT-7A is filed by Small Companies and One Person Companies.',
        'Covers shareholding pattern, promoters vs non-promoters, and share transfers.',
        'Covers details of Board Meetings, AGM, and director attendance.',
        'Must be filed within 60 days from the date of the Annual General Meeting (AGM).',
        'Avoids severe compounding statutory late fee of ₹100 per day.'
      ],
      closing: 'It maintains transparent corporate governance and ensures compliance with the Registrar of Companies.'
    },
    keyCharacteristics: [
      {
        title: 'MGT-7 vs MGT-7A',
        description: 'Standard companies file comprehensive Form MGT-7; Small Companies and OPCs file abridged Form MGT-7A.'
      },
      {
        title: '60-Day Filing Window',
        description: 'Must be submitted within 60 days from the AGM date (typically on or before 29th November).'
      },
      {
        title: 'Compounding ₹100/Day Penalty',
        description: 'Mandatory statutory additional fee of ₹100 per day accumulates automatically from the due date until filed.'
      },
      {
        title: 'Practicing CS Certification',
        description: 'Larger companies require formal certification by an independent Practicing Company Secretary (PCS).'
      }
    ],
    importanceBenefits: {
      intro: 'Filing Form MGT-7 / MGT-7A on time delivers vital corporate benefits:',
      benefits: [
        {
          title: 'Protection from ₹100/Day Compounding Fines',
          desc: 'Avoid accumulating thousands of rupees in statutory late penalties that multiply daily.'
        },
        {
          title: 'Shields Directors from Disqualification',
          desc: 'Prevents 5-year director disqualification under Section 164(2) resulting from 3 consecutive years of non-filing.'
        },
        {
          title: 'Verified Shareholding Record on Public MCA Registry',
          desc: 'Establishes verified proof of equity ownership, crucial for bank loan appraisals and equity funding rounds.'
        },
        {
          title: 'Prevents ROC Strike-Off & Shell Company Notices',
          desc: 'Shields the company from being struck off under Section 248 or receiving inquiry notices from the ROC.'
        },
        {
          title: 'Corporate Tender & Vendor Clearance',
          desc: 'Enterprise clients and government portals verify up-to-date MGT-7 filings during vendor due diligence.'
        }
      ],
      closing: 'It provides statutory governance clarity and protects corporate continuity.'
    },
    package: {
      title: 'Form MGT-7 / MGT-7A Complete Package',
      description: 'End-to-end shareholding schedule drafting, meeting records audit, CS certification, and MCA V3 filing.',
      checklist: [
        'Share Capital & Shareholding Structure Audit',
        'Preparation of List of Shareholders, Promoters & Share Transfers',
        'Board Meeting & AGM Date and Attendance Verification',
        'Preparation of Form MGT-7 / MGT-7A on MCA V3 Portal',
        'Practicing Company Secretary (PCS) Certification (if applicable)',
        'Affixation of Class 3 Digital Signature Certificates (DSC)',
        'MCA V3 Portal Submission & Fee Processing',
        'Generation of Official MCA Service Request Number (SRN) Receipt'
      ]
    },
    types: [
      {
        title: 'Form MGT-7A (Small Company & OPC)',
        desc: 'For small private limited companies (capital < ₹4 Cr, turnover < ₹40 Cr) and One Person Companies.',
        eligibility: 'Small companies & OPCs'
      },
      {
        title: 'Form MGT-7 (Standard Private Limited)',
        desc: 'For standard private limited companies exceeding small company thresholds.',
        eligibility: 'Standard private limited'
      },
      {
        title: 'Form MGT-7 (Public Limited & Section 8)',
        desc: 'For public limited, listed, and Section 8 non-profit corporate entities.',
        eligibility: 'Public & Section 8 entities'
      }
    ],
    comparison: {
      title: 'Form MGT-7 vs Form MGT-7A',
      headers: ['Parameter', 'Form MGT-7', 'Form MGT-7A'],
      rows: [
        { aspect: 'Applicability', col1: 'Standard & Large Companies, Public Companies', col2: 'Small Companies & One Person Companies (OPC)' },
        { aspect: 'Form Complexity', col1: 'Detailed comprehensive annual return', col2: 'Abridged simplified format' },
        { aspect: 'PCS Certification', col1: 'Mandatory for larger/public companies', col2: 'Self-certified by Director (no PCS required)' },
        { aspect: 'Filing Due Date', col1: 'Within 60 days of AGM', col2: 'Within 60 days of AGM (180 days from FY for OPC)' },
        { aspect: 'Late Fee', col1: '₹100 per day', col2: '₹100 per day' }
      ]
    },
    lawsGoverning: {
      actName: 'Companies Act, 2013 (Section 92 & Section 403) & Rule 11 of MCA Rules',
      authority: 'Registrar of Companies (ROC) & Ministry of Corporate Affairs',
      points: [
        'Section 92 mandating preparation and filing of annual return.',
        'Rule 11 prescribing Form MGT-7 and abridged Form MGT-7A.',
        'Section 403 prescribing ₹100/day penalty for delayed submissions.',
        'Section 92(5) penalizing company and officers for non-compliance.',
        'Section 164(2) director disqualification for continuous defaults.'
      ],
      penalties: 'Delayed filing attracts ₹100/day penalty, prosecution of officers, and director disqualification.'
    },
    eligibilityRequirements: {
      intro: 'Every company registered in India must file Form MGT-7 or MGT-7A annually:',
      criteria: [
        'Private Limited, Public Limited, OPC, and Section 8 Companies.',
        'Mandatory even if there were zero transactions or zero revenue.',
        'Must hold an AGM before filing (except OPCs).'
      ],
      documentsRequired: [
        'List of Shareholders with shareholding percentage as of 31st March',
        'Details of Share Transfers during the financial year',
        'Dates of Board Meetings, Committee Meetings, and AGM held',
        'Director details and remuneration paid during the year',
        'Class 3 Digital Signature Certificates (DSC) of Directors'
      ]
    },
    processSteps: [
      { step: 1, title: 'Shareholding & Governance Audit', desc: 'We compile your shareholding register, promoter holdings, and verify meeting attendance records.' },
      { step: 2, title: 'Form MGT-7 / 7A Preparation', desc: 'Our secretarial team prepares the form on MCA V3 and compiles the list of shareholders attachment.' },
      { step: 3, title: 'CS Certification & DSC Affixation', desc: 'Our Company Secretaries review and certify the form and affix director digital signatures.' },
      { step: 4, title: 'MCA V3 Submission & SRN Delivery', desc: 'We submit the form on the MCA V3 portal and deliver the official SRN Challan receipt.' }
    ],
    postRegistrationCompliance: {
      intro: 'Key best practices following MGT-7 submission:',
      points: [
        'Archive the filed MGT-7/7A PDF form and SRN Challan in the statutory register.',
        'Maintain signed minutes of the AGM and Board Meetings.',
        'Update the Register of Members (MGT-1) and Register of Directors (MBP-4).',
        'Verify that the company annual return date is updated on the public MCA portal.'
      ]
    },
    timelines: {
      tat: '2 to 4 Working Days',
      delayFactors: ['Complex multi-tier shareholding structures', 'Expired director DSC tokens on MCA V3', 'MCA portal peak congestion near 29th November deadline'],
      speedAssurance: 'Our secretarial team prepares MGT-7 forms in advance to guarantee smooth submission before statutory deadlines.'
    },
    certification: {
      issuingAuthority: 'Registrar of Companies (ROC), Ministry of Corporate Affairs',
      validity: 'Statutory compliance proof for the specific Financial Year filed',
      legalSignificance: 'Official statutory MCA approval confirming the annual return of the company is recorded on the public registry.',
      contents: ['Service Request Number (SRN)', 'Corporate Identification Number (CIN)', 'Company Legal Name', 'Form MGT-7 / MGT-7A', 'Payment Receipt & MCA Digital Seal']
    },
    fees: {
      govtFee: 'Statutory MCA filing fee based on authorized capital (approx. ₹300-₹600 for small companies)',
      professionalFee: '₹1,499/- only (Complete MGT-7/7A drafting, certification, and filing package)',
      transparencyNote: 'Fixed price ₹1,499 with zero hidden charges.'
    },
    taxation: {
      directTaxImpact: 'Secretarial compliance and ROC filing professional fees are 100% tax-deductible operational business expenses.',
      gstImplications: 'Attracts 18% GST with full Input Tax Credit eligibility for the company.',
      deductionsOrExemptions: 'Saves the company from non-deductible ₹100/day MCA statutory late penalties.'
    },
    whyUs: [
      'Over 8,000+ MGT-7 and MGT-7A returns successfully filed.',
      'Team of practicing Company Secretaries ensuring 100% statutory accuracy.',
      'Comprehensive preparation of shareholding schedules and meeting records.',
      'Seamless handling of MCA V3 portal migrations and DSC registrations.',
      'Dedicated compliance manager tracking all secretarial deadlines.'
    ],
    faqs: [
      { q: 'What is the due date for filing Form MGT-7?', a: 'Form MGT-7 must be filed within 60 days from the date of the Annual General Meeting (AGM). If the AGM is held on 30th September, the statutory due date is 29th November.' },
      { q: 'What is Form MGT-7A?', a: 'Form MGT-7A is an abridged, simplified annual return format introduced specifically for Small Companies (capital < ₹4 Cr and turnover < ₹40 Cr) and One Person Companies (OPCs).' },
      { q: 'What is the late fee for delayed filing of MGT-7?', a: 'Under Section 403 of the Companies Act, a mandatory late fee of ₹100 per day is charged for every day of delay after the statutory due date.' },
      { q: 'Is Practicing Company Secretary (PCS) certification mandatory for MGT-7?', a: 'For Small Companies and OPCs filing MGT-7A, PCS certification is not required (director signature is sufficient). For larger companies, public companies, and listed entities, certification by a Practicing CS is mandatory.' },
      { q: 'Can MGT-7 be filed before AOC-4?', a: 'Yes. Form AOC-4 and Form MGT-7 are independent filings under different sections (Section 137 and Section 92), though both relate to the same financial year.' },
      { q: 'How do I start Form MGT-7 filing with Akshay B2B Solutions?', a: 'Click "File Form MGT-7" to share your company shareholding and meeting details with our secretarial desk for fast preparation and filing.' }
    ],
    relatedServices: [
      { name: 'ROC Annual Filing (AOC-4 & MGT-7)', desc: 'Complete annual compliance package for private limited companies.', price: '₹1,999' },
      { name: 'Form AOC-4 (Financial Statements)', desc: 'Filing audited Balance Sheet & P&L with ROC.', price: '₹1,499' },
      { name: 'DIN KYC Filing', desc: 'Annual Director KYC compliance on MCA portal.', price: '₹999' },
      { name: 'Appointment of Director', desc: 'Formal appointment of new director with MCA Form DIR-12.', price: '₹1,499' },
      { name: 'Resignation of Director', desc: 'Formal resignation of director with MCA Form DIR-11 & DIR-12.', price: '₹1,499' },
      { name: 'Increase in Authorized Capital', desc: 'Enhance capital limits with MCA Form SH-7.', price: '₹2,499' }
    ]
  },
  {
    slug: 'aoc-4-filing',
    name: 'Form AOC-4 (Financial Statements Filing)',
    category: 'Filing',
    parentCategory: 'Registration & License',
    price: '₹1,499',
    priceType: 'fixed',
    priceDisplay: '₹1,499/- only',
    heroPriceHook: 'Company Financial Statements (Form AOC-4) MCA Filing | ₹1,499/- All-Inclusive',
    specialCallout: 'MCA V3 Compliant Financial Filing',
    urgencyText: 'Avoid ₹100/day compounding MCA late fee',
    ctaText: 'File Form AOC-4',
    metaTitle: 'Form AOC-4 Filing Online @ ₹1,499 | Financial Statements MCA Filing',
    metaDescription: 'File Form AOC-4 financial statements online at ₹1,499. Balance Sheet, P&L, Directors Report, Auditors Report, and in-house CS verification on MCA V3 portal.',
    seoKeywords: ['Form AOC-4 filing', 'AOC-4 financial statements', 'MCA financial filing', 'AOC-4 ₹1499', 'balance sheet ROC filing', 'avoid ₹100 per day AOC-4 penalty'],
    heroIntro: 'Form AOC-4 (along with AOC-4 CFS for consolidated accounts and AOC-4 XBRL for specified companies), governed under Section 137 of the Companies Act, 2013 read with Rule 12 of the Companies (Accounts) Rules, 2014, is the mandatory annual statutory filing submitted by every registered company to the Registrar of Companies (ROC), Ministry of Corporate Affairs (MCA). It contains the company audited Balance Sheet, Profit and Loss Account, Directors Report, Auditors Report, and Corporate Social Responsibility (CSR) disclosures. It must be filed within 30 days of the Annual General Meeting (AGM) to avoid a severe compounding penalty of ₹100 per day.',
    keyTags: ['Section 137 Companies Act', 'Audited Balance Sheet & P&L', 'Directors Report & Auditors Report', 'CSR Disclosures', 'Avoid ₹100/Day Penalty'],
    overview: {
      p1: 'Form AOC-4 is the official vehicle through which a company financial statements are placed on public record with the Ministry of Corporate Affairs. Every company—even if it conducted zero business or incurred losses—must file Form AOC-4 annually.',
      p2: 'The form must be submitted within 30 days of the AGM (typically 29th October for a 30th September AGM, or 180 days from FY close for OPCs). Delay in filing triggers an automated statutory penalty of ₹100 per day under Section 403, and continuous non-filing leads to director disqualification under Section 164(2). Akshay B2B Solutions provides in-depth financial formatting, Directors Report drafting, CS certification, and error-free MCA V3 e-filing.',
    },
    registrationProcessOverview: {
      status: 'Mandatory Annual MCA Statutory Compliance',
      governingAuthority: 'Registrar of Companies (ROC), Ministry of Corporate Affairs (MCA)',
      summary: 'Formatting audited financial statements into MCA structure, drafting statutory Directors Report and annexures, compiling Form AOC-4, certifying by Practicing CS/CA, and submitting on MCA V3 with Class 3 DSC.',
      postApproval: 'Generation of official MCA SRN Challan confirming approval of the financial statements.',
      assistanceRole: 'Financial dossier formatting, Board Report preparation, CS certification, DSC affixation, and MCA portal filing.'
    },
    whatIs: {
      definition: 'Form AOC-4 is the annual statutory filing submitted by companies to file their audited financial statements, Directors Report, and Auditors Report with the ROC.',
      points: [
        'Mandatory financial filing under Section 137 of Companies Act, 2013.',
        'Covers Balance Sheet, Profit & Loss Account, Notes to Accounts, and Cash Flow Statement.',
        'Includes statutory Directors Report with all required Section 134 disclosures.',
        'Includes Independent Auditors Report signed by the statutory auditor.',
        'Must be filed within 30 days of the AGM (typically on or before 29th October).',
        'Avoids severe compounding statutory late fee of ₹100 per day.'
      ],
      closing: 'It establishes transparent financial credibility and fulfills core statutory reporting duties.'
    },
    keyCharacteristics: [
      {
        title: 'Comprehensive Financial Dossier',
        description: 'Includes Balance Sheet, P&L Account, Directors Report, Auditors Report, and CSR reporting schedules.'
      },
      {
        title: '30-Day Statutory Window',
        description: 'Must be filed within 30 days of the AGM date (typically 29th October for 30th Sept AGM).'
      },
      {
        title: 'Compounding ₹100/Day Penalty',
        description: 'Mandatory statutory additional fee of ₹100 per day accumulates automatically from the due date.'
      },
      {
        title: 'Professional CS/CA Certification',
        description: 'Requires mandatory verification and digital certification by an independent practicing CS or CA.'
      }
    ],
    importanceBenefits: {
      intro: 'Filing Form AOC-4 on time provides vital corporate and legal protections:',
      benefits: [
        {
          title: 'Protection from ₹100/Day Compounding Fines',
          desc: 'Avoid accumulating thousands of rupees in statutory late penalties that multiply daily.'
        },
        {
          title: 'Shields Directors from Disqualification',
          desc: 'Prevents 5-year director disqualification under Section 164(2) resulting from non-filing of financial statements.'
        },
        {
          title: 'Essential for Bank Loans & Working Capital',
          desc: 'Commercial banks verify filed AOC-4 copies from the MCA database before sanctioning credit facilities.'
        },
        {
          title: 'Preserves Active Company Standing',
          desc: 'Protects the company from ROC strike-off proceedings and shell company notices under Section 248.'
        },
        {
          title: 'Public Financial Transparency for Investors',
          desc: 'Provides verified financial records for investors, credit rating agencies, and business partners.'
        }
      ],
      closing: 'It provides clean financial legitimacy and safeguards your corporate enterprise.'
    },
    package: {
      title: 'Form AOC-4 Complete Package',
      description: 'End-to-end financial dossier preparation, Directors Report drafting, CS certification, and MCA V3 filing.',
      checklist: [
        'Audited Financial Statements (Balance Sheet & P&L) Formatting',
        'Drafting Statutory Directors Report with Section 134 Disclosures',
        'Auditors Report & CSR Disclosures Verification',
        'Preparation of Form AOC-4 on MCA V3 Portal',
        'Professional Certification by Practicing Company Secretary / CA',
        'Affixation of Class 3 Digital Signature Certificates (DSC)',
        'MCA V3 Portal Submission & Filing Fee Processing',
        'Generation of Official MCA Service Request Number (SRN) Receipt'
      ]
    },
    types: [
      {
        title: 'Form AOC-4 (Standard Non-XBRL)',
        desc: 'For standard private limited companies filing standard financial statements.',
        eligibility: 'Standard private companies'
      },
      {
        title: 'Form AOC-4 CFS (Consolidated Accounts)',
        desc: 'For companies having one or more subsidiary, joint venture, or associate companies.',
        eligibility: 'Holding companies'
      },
      {
        title: 'Form AOC-4 XBRL',
        desc: 'For companies with paid-up capital ≥ ₹5 Cr or turnover ≥ ₹100 Cr, or listed entities.',
        eligibility: 'Large & listed companies'
      }
    ],
    comparison: {
      title: 'Form AOC-4 vs Form MGT-7',
      headers: ['Parameter', 'Form AOC-4', 'Form MGT-7'],
      rows: [
        { aspect: 'Focus Area', col1: 'Financial Statements, Balance Sheet, P&L', col2: 'Annual Return, Governance, Shareholding' },
        { aspect: 'Governing Section', col1: 'Section 137 of Companies Act, 2013', col2: 'Section 92 of Companies Act, 2013' },
        { aspect: 'Due Date', col1: 'Within 30 days of AGM (29th Oct)', col2: 'Within 60 days of AGM (29th Nov)' },
        { aspect: 'Core Attachments', col1: 'Audited Financials, Board Report, Audit Report', col2: 'Shareholder list, meeting attendance records' },
        { aspect: 'Late Fee Rate', col1: '₹100 per day compounding', col2: '₹100 per day compounding' }
      ]
    },
    lawsGoverning: {
      actName: 'Companies Act, 2013 (Section 137 & Section 403) & Rule 12 of MCA Accounts Rules',
      authority: 'Registrar of Companies (ROC) & Ministry of Corporate Affairs',
      points: [
        'Section 137 mandating filing of financial statements with ROC.',
        'Rule 12 of Companies (Accounts) Rules, 2014.',
        'Section 134 mandating approval and signing of Directors Report.',
        'Section 403 prescribing ₹100/day penalty for delayed filing.',
        'Section 164(2) prescribing director disqualification for 3 years non-filing.'
      ],
      penalties: 'Delayed filing attracts ₹100/day penalty, prosecution of officers, and director disqualification.'
    },
    eligibilityRequirements: {
      intro: 'Every registered company in India must file Form AOC-4 annually:',
      criteria: [
        'Private Limited Companies, OPCs, Section 8 Companies, and Public Limited Companies.',
        'Applicable even if the company had zero business turnover or incurred losses.',
        'Must possess audited financial statements signed by a chartered accountant auditor.'
      ],
      documentsRequired: [
        'Audited Financial Statements (Balance Sheet, P&L, Notes to Accounts)',
        'Statutory Auditors Report signed by Chartered Accountant',
        'Directors Report with statutory disclosures (we draft this)',
        'Notice of AGM and shareholder adoption resolutions',
        'Class 3 Digital Signature Certificates (DSC) of Directors'
      ]
    },
    processSteps: [
      { step: 1, title: 'Financial Ingestion & Formatting', desc: 'We ingest your audited financial statements and format them into the prescribed MCA structure.' },
      { step: 2, title: 'Directors Report Drafting', desc: 'Our secretarial team drafts the statutory Directors Report with all required Section 134 disclosures.' },
      { step: 3, title: 'Form Preparation & CS Certification', desc: 'Our Company Secretaries populate Form AOC-4 on MCA V3, attach PDF dossiers, and digitally certify.' },
      { step: 4, title: 'MCA V3 Submission & SRN Delivery', desc: 'We submit the form on the MCA V3 portal and deliver the official SRN Challan receipt.' }
    ],
    postRegistrationCompliance: {
      intro: 'Key best practices following AOC-4 submission:',
      points: [
        'Archive the filed AOC-4 PDF form and SRN Challan in the statutory register.',
        'File Form MGT-7 within 60 days of the AGM.',
        'Ensure the financial statement adoption date is reflected accurately on the MCA portal.',
        'Maintain the signed physical financial copies at the registered office.'
      ]
    },
    timelines: {
      tat: '2 to 4 Working Days',
      delayFactors: ['Delayed statutory audit completion by auditor', 'Expired director DSC tokens on MCA V3', 'MCA portal peak congestion near 29th October deadline'],
      speedAssurance: 'Our secretarial team prepares AOC-4 forms in advance to guarantee smooth submission before statutory deadlines.'
    },
    certification: {
      issuingAuthority: 'Registrar of Companies (ROC), Ministry of Corporate Affairs',
      validity: 'Statutory compliance proof for the specific Financial Year filed',
      legalSignificance: 'Official statutory MCA approval confirming the financial statements are recorded on the public registry.',
      contents: ['Service Request Number (SRN)', 'Corporate Identification Number (CIN)', 'Company Legal Name', 'Form AOC-4', 'Payment Receipt & MCA Digital Seal']
    },
    fees: {
      govtFee: 'Statutory MCA filing fee based on authorized capital (approx. ₹300-₹600 for small companies)',
      professionalFee: '₹1,499/- only (Complete AOC-4 preparation, Directors Report drafting, and filing package)',
      transparencyNote: 'Fixed price ₹1,499 with zero hidden charges.'
    },
    taxation: {
      directTaxImpact: 'Secretarial compliance and ROC filing professional fees are 100% tax-deductible operational business expenses.',
      gstImplications: 'Attracts 18% GST with full Input Tax Credit eligibility for the company.',
      deductionsOrExemptions: 'Saves the company from non-deductible ₹100/day MCA statutory late penalties.'
    },
    whyUs: [
      'Over 9,000+ AOC-4 financial filings successfully completed.',
      'Team of practicing Company Secretaries and Chartered Accountants.',
      'Comprehensive drafting of statutory Directors Report and annexures.',
      'Seamless handling of MCA V3 portal migrations and DSC registrations.',
      'Dedicated compliance manager tracking all corporate filing deadlines.'
    ],
    faqs: [
      { q: 'What is the due date for filing Form AOC-4?', a: 'Form AOC-4 must be filed within 30 days from the date of the Annual General Meeting (AGM). If the AGM is held on 30th September, the statutory due date is 29th October (or within 180 days of FY close for OPCs).' },
      { q: 'What is the penalty for late filing of Form AOC-4?', a: 'Under Section 403 of the Companies Act, a mandatory late fee of ₹100 per day is charged for every day of delay after the statutory due date, with no upper limit.' },
      { q: 'Is AOC-4 filing mandatory for dormant or loss-making companies?', a: 'Yes! Every registered company must file Form AOC-4 every year, regardless of whether it conducted business, remained inactive, or incurred losses.' },
      { q: 'What documents must be attached to Form AOC-4?', a: 'The mandatory attachments include: Audited Balance Sheet, Profit and Loss Account, Notes to Accounts, Cash Flow Statement (if applicable), Statutory Auditors Report, and the Directors Report with annexures.' },
      { q: 'Can a company file AOC-4 without holding an AGM?', a: 'If an AGM is not held, Form AOC-4 must still be filed within 30 days from the date the AGM ought to have been held, mentioning the reasons for not holding the AGM.' },
      { q: 'How do I start Form AOC-4 filing with Akshay B2B Solutions?', a: 'Click "File Form AOC-4" to share your audited financials with our secretarial desk for fast drafting, certification, and filing.' }
    ],
    relatedServices: [
      { name: 'ROC Annual Filing (AOC-4 & MGT-7)', desc: 'Complete annual compliance package for private limited companies.', price: '₹1,999' },
      { name: 'Form MGT-7 / MGT-7A (Annual Return)', desc: 'Filing annual return with shareholding structure.', price: '₹1,499' },
      { name: 'DIN KYC Filing', desc: 'Annual Director KYC compliance on MCA portal.', price: '₹999' },
      { name: 'Appointment of Director', desc: 'Formal appointment of new director with MCA Form DIR-12.', price: '₹1,499' },
      { name: 'Resignation of Director', desc: 'Formal resignation of director with MCA Form DIR-11 & DIR-12.', price: '₹1,499' },
      { name: 'GST Annual Return (GSTR-9)', desc: 'Annual reconciliation and statutory return filing on GST portal.', price: '₹1,499' }
    ]
  },

  // --- COMPANY COMPLIANCES ---
  {
    slug: 'appointment-of-director',
    name: 'Appointment of Director (Form DIR-12)',
    category: 'Company Compliances',
    parentCategory: 'Registration & License',
    price: '₹1,499',
    priceType: 'fixed',
    priceDisplay: '₹1,499/- only',
    heroPriceHook: 'Appoint New Director / Managing Director on MCA Portal | ₹1,499/- All-Inclusive',
    specialCallout: 'MCA Form DIR-12 Approval',
    urgencyText: 'File within 30 days of appointment date',
    ctaText: 'Appoint a Director',
    metaTitle: 'Appointment of Director Online @ ₹1,499 | MCA Form DIR-12 Filing',
    metaDescription: 'Appoint a new director, additional director or managing director online at ₹1,499. Board resolution drafting, consent Form DIR-2, and MCA Form DIR-12 filing fast.',
    seoKeywords: ['appointment of director', 'Form DIR-12 filing', 'appoint new director pvt ltd', 'add director MCA', 'director consent DIR-2', 'additional director appointment'],
    heroIntro: 'The Appointment of a Director, governed under Sections 152, 161, and 168 of the Companies Act, 2013 read with the Companies (Appointment and Qualification of Directors) Rules, 2014, is the formal statutory process of adding an individual to the Board of Directors of a Private Limited, Public Limited, or Section 8 company. The company must obtain written consent (Form DIR-2), eligibility declaration (Form DIR-8), pass a Board or General Meeting Resolution, and file electronic Form DIR-12 with the Registrar of Companies (ROC) on the MCA V3 portal within 30 days of appointment.',
    keyTags: ['Section 152 & 161 Companies Act', 'Form DIR-12 MCA Filing', 'Consent Form DIR-2 & DIR-8', 'Additional / Managing Director', 'MCA V3 Portal Certified'],
    overview: {
      p1: 'Appointing a new director strengthens leadership, fulfills statutory board composition requirements (minimum 2 directors for Pvt Ltd, 3 for Public Ltd), and supports business expansion.',
      p2: 'Failing to file Form DIR-12 within 30 days of appointment attracts severe compounding daily late penalties under Section 403 and renders the appointment legally invalid in ROC records. Akshay B2B Solutions provides turn-key secretarial documentation, DIN verification, Board Resolution drafting, consent vetting, and MCA Form DIR-12 filing.',
    },
    registrationProcessOverview: {
      status: 'Statutory Event-Based MCA Compliance',
      governingAuthority: 'Registrar of Companies (ROC), Ministry of Corporate Affairs (MCA)',
      summary: 'Verifying appointee DIN status, drafting Form DIR-2 consent and DIR-8 eligibility, convening Board Meeting to pass appointment resolution, preparing Form DIR-12, and filing on MCA V3 portal with Class 3 DSC.',
      postApproval: 'Issuance of official MCA SRN Challan updating the new director on the public company master data.',
      assistanceRole: 'DIN assistance, resolution drafting, consent compilation, CS certification, and DIR-12 portal submission.'
    },
    whatIs: {
      definition: 'Appointment of Director is the legal process of inducting a new member into the company board of directors and updating the official MCA records via Form DIR-12.',
      points: [
        'Applies to Additional Directors, Regular Directors, Managing Directors, and Alternate Directors.',
        'Requires active Director Identification Number (DIN) and Digital Signature (DSC).',
        'Mandatory written consent in Form DIR-2 and non-disqualification in Form DIR-8.',
        'Requires Board Resolution or Shareholder Resolution in General Meeting.',
        'Must be filed with ROC in Form DIR-12 within 30 days of appointment.',
        'Updates the public company master data on the MCA registry instantly.'
      ],
      closing: 'It provides formal corporate governance authority and statutory recognition to the new director.'
    },
    keyCharacteristics: [
      {
        title: 'Additional Director Route',
        description: 'Board of Directors can appoint an Additional Director immediately under Section 161(1), regularized at the next AGM.'
      },
      {
        title: 'Form DIR-12 Filing',
        description: 'Statutory e-form filed on MCA V3 within 30 days of the appointment date.'
      },
      {
        title: 'Mandatory DIR-2 Consent',
        description: 'Appointee must sign statutory consent Form DIR-2 and disclose any other directorships.'
      },
      {
        title: 'Immediate Master Data Update',
        description: 'Upon approval, the new director name and DIN appear publicly on the MCA company master data index.'
      }
    ],
    importanceBenefits: {
      intro: 'Proper statutory appointment of a director provides vital advantages:',
      benefits: [
        {
          title: 'Fulfills Statutory Board Requirements',
          desc: 'Maintains statutory board strength (min 2 for Pvt Ltd) and meets requirements for independent or resident directors.'
        },
        {
          title: 'Authorized Banking & Contractual Signing Power',
          desc: 'Empowers the new director to sign corporate agreements, operate bank accounts, and execute contracts lawfully.'
        },
        {
          title: 'Attracts Strategic Talent & Investor Nominees',
          desc: 'Formally inducts investor nominee directors, co-founders, or industry veterans to the board.'
        },
        {
          title: 'Protection from Late Filing Penalties',
          desc: 'Avoid accumulating compounding MCA late fees by filing Form DIR-12 within the statutory 30-day window.'
        },
        {
          title: 'Public Credibility & Investor Confidence',
          desc: 'Reflects professional governance on the MCA registry, boosting client and vendor trust.'
        }
      ],
      closing: 'It empowers your leadership team with full legal authority and statutory recognition.'
    },
    package: {
      title: 'Appointment of Director Complete Package',
      description: 'End-to-end DIN verification, Board Resolution drafting, consent documentation, and Form DIR-12 MCA filing.',
      checklist: [
        'Appointee DIN & KYC Status Audit on MCA Portal',
        'Drafting Consent to Act as Director (Form DIR-2)',
        'Drafting Declaration of Non-Disqualification (Form DIR-8)',
        'Drafting Notice & Certified Board Resolution for Appointment',
        'Drafting Formal Appointment Letter with Terms of Office',
        'Preparation of MCA Form DIR-12 on MCA V3 Portal',
        'Professional Attestation & Certification by Practicing CS / CA',
        'Generation of Official MCA Service Request Number (SRN) Receipt'
      ]
    },
    types: [
      {
        title: 'Appointment of Additional Director',
        desc: 'Appointed directly by Board of Directors to hold office until the next Annual General Meeting.',
        eligibility: 'Immediate board induction'
      },
      {
        title: 'Appointment of Managing / Whole-Time Director',
        desc: 'Executive director appointed with managerial powers under Section 196/203.',
        eligibility: 'Executive leadership'
      },
      {
        title: 'Appointment of Nominee / Independent Director',
        desc: 'Appointed by investors, financial institutions, or as non-executive independent board members.',
        eligibility: 'Investor & board nominees'
      }
    ],
    comparison: {
      title: 'Additional Director vs Regular Director',
      headers: ['Parameter', 'Additional Director (Section 161)', 'Regular Director (Section 152)'],
      rows: [
        { aspect: 'Appointing Authority', col1: 'Board of Directors', col2: 'Shareholders in General Meeting (AGM/EGM)' },
        { aspect: 'Tenure of Office', col1: 'Up to the date of the next AGM', col2: 'Permanent / Specified rotational term' },
        { aspect: 'Filing Requirement', col1: 'Form DIR-12 within 30 days of Board Meeting', col2: 'Form DIR-12 within 30 days of AGM/EGM' },
        { aspect: 'Voting Rights', col1: 'Full voting rights on board', col2: 'Full voting rights on board' }
      ]
    },
    lawsGoverning: {
      actName: 'Companies Act, 2013 (Sections 152, 161 & 170) & MCA Rules',
      authority: 'Registrar of Companies (ROC) & Ministry of Corporate Affairs',
      points: [
        'Section 152 governing appointment of directors.',
        'Section 161(1) governing appointment of additional directors.',
        'Rule 8 & 14 of Companies (Appointment and Qualification of Directors) Rules, 2014.',
        'Section 170 mandating filing of return of directors (Form DIR-12) within 30 days.',
        'Section 403 prescribing additional fees for delayed filing.'
      ],
      penalties: 'Delayed filing attracts heavy compounding late fees and invalidates board actions.'
    },
    eligibilityRequirements: {
      intro: 'Any individual qualifying under the Companies Act can be appointed as a director:',
      criteria: [
        'Must possess an active Director Identification Number (DIN).',
        'Must not be disqualified under Section 164 of the Companies Act.',
        'Must provide written consent in Form DIR-2.',
        'Must be an individual (corporate entities cannot be directors).'
      ],
      documentsRequired: [
        'Active DIN and PAN Card of the Proposed Director',
        'Aadhaar Card / Passport and Residential Address Proof',
        'Passport Size Photograph of the Appointee',
        'Signed Form DIR-2 (Consent) & Form DIR-8 (Non-disqualification)',
        'Class 3 Digital Signature Certificate (DSC) of Appointee & Signing Director'
      ]
    },
    processSteps: [
      { step: 1, title: 'DIN Verification & Consent Drafting', desc: 'We verify the appointee DIN, draft Form DIR-2 consent, DIR-8 declaration, and disclosure of interest.' },
      { step: 2, title: 'Board Resolution & Documentation', desc: 'We draft the certified Board Resolution and formal Letter of Appointment.' },
      { step: 3, title: 'Form DIR-12 Preparation & CS Certification', desc: 'Our Company Secretaries populate Form DIR-12 on MCA V3, attach PDF dossiers, and digitally certify.' },
      { step: 4, title: 'MCA V3 Submission & Master Data Update', desc: 'We submit the form on MCA V3 and deliver the official SRN receipt showing updated company master data.' }
    ],
    postRegistrationCompliance: {
      intro: 'Key steps following director appointment:',
      points: [
        'Update the Register of Directors and Key Managerial Personnel (Section 170).',
        'Update bank signing mandates and resolutions if the director is granted banking powers.',
        'Disclose director interest in Form MBP-1 at the first board meeting attended.',
        'Ensure the new director completes annual DIN KYC on or before 30th September.'
      ]
    },
    timelines: {
      tat: '2 to 3 Working Days',
      delayFactors: ['Appointee lacking active DIN (requires DIN application first)', 'Unregistered or expired director DSC tokens', 'MCA V3 portal technical processing queues'],
      speedAssurance: 'Our secretarial team processes DIR-12 filings within 48 hours of receiving signed consent forms.'
    },
    certification: {
      issuingAuthority: 'Registrar of Companies (ROC), Ministry of Corporate Affairs',
      validity: 'Statutory approval updating public company registry',
      legalSignificance: 'Official statutory MCA approval confirming the legal appointment of the director on the public company records.',
      contents: ['Service Request Number (SRN)', 'Company CIN & Legal Name', 'Appointed Director DIN & Name', 'Date of Appointment & Designation', 'Payment Receipt & MCA Digital Seal']
    },
    fees: {
      govtFee: 'Statutory MCA filing fee based on authorized capital (approx. ₹300-₹600 for small companies)',
      professionalFee: '₹1,499/- only (Complete documentation, resolution drafting, and DIR-12 filing package)',
      transparencyNote: 'Fixed price ₹1,499 with zero hidden charges.'
    },
    taxation: {
      directTaxImpact: 'Secretarial compliance and legal charges for director appointment are 100% tax-deductible operational business expenses.',
      gstImplications: 'Attracts 18% GST with full Input Tax Credit eligibility for the company.',
      deductionsOrExemptions: 'Director remuneration paid is tax-deductible in the company P&L subject to applicable TDS under Section 192/194J.'
    },
    whyUs: [
      'Over 4,500+ director appointments successfully processed across all ROC jurisdictions.',
      'Comprehensive preparation of DIR-2, DIR-8, Board Resolutions, and Appointment Letters.',
      'In-house team of practicing Company Secretaries ensuring flawless compliance.',
      'Fast-track DIN application support for new directors lacking a DIN.',
      'Dedicated secretarial manager keeping you updated at every stage.'
    ],
    faqs: [
      { q: 'What is the time limit to file Form DIR-12 for appointing a director?', a: 'Form DIR-12 must be filed with the Registrar of Companies (ROC) within 30 days from the date of the Board Meeting or General Meeting where the appointment was approved.' },
      { q: 'Can a person be appointed as a director without a DIN?', a: 'No. A valid Director Identification Number (DIN) is a mandatory prerequisite before any individual can be appointed to a company board. We can help apply for a fresh DIN if needed.' },
      { q: 'What is an Additional Director?', a: 'An Additional Director is appointed directly by the Board of Directors under Section 161(1) of the Companies Act to hold office immediately until the next Annual General Meeting (AGM).' },
      { q: 'What are Form DIR-2 and Form DIR-8?', a: 'Form DIR-2 is the formal written consent signed by the proposed director agreeing to act as a director. Form DIR-8 is a declaration that the person is not disqualified from being appointed under Section 164.' },
      { q: 'What is the penalty for late filing of Form DIR-12?', a: 'Filing Form DIR-12 after 30 days attracts compounding MCA additional fees starting from 2x up to 18x the normal filing fee depending on the delay.' },
      { q: 'How do I start the director appointment process today?', a: 'Click "Appoint a Director" to share the appointee details with our secretarial team for instant document drafting and filing.' }
    ],
    relatedServices: [
      { name: 'Resignation of Director', desc: 'Formal resignation of director with MCA Form DIR-11 & DIR-12.', price: '₹1,499' },
      { name: 'Removal of Director', desc: 'Special notice & shareholder resolution for director removal.', price: '₹1,999' },
      { name: 'DIN KYC Filing', desc: 'Annual Director KYC compliance on MCA portal.', price: '₹999' },
      { name: 'ROC Annual Filing', desc: 'Mandatory annual MCA compliance (AOC-4 & MGT-7) for companies.', price: '₹1,999' },
      { name: 'Increase in Authorized Capital', desc: 'Enhance capital limits with MCA Form SH-7.', price: '₹2,499' },
      { name: 'Transfer of Shares', desc: 'Execution of SH-4 and stamp duty compliance for share transfers.', price: '₹1,499' }
    ]
  },
  {
    slug: 'resignation-of-director',
    name: 'Resignation of Director (Form DIR-11 & DIR-12)',
    category: 'Company Compliances',
    parentCategory: 'Registration & License',
    price: '₹1,499',
    priceType: 'fixed',
    priceDisplay: '₹1,499/- only',
    heroPriceHook: 'Formal Director Resignation on MCA Portal | Form DIR-11 & DIR-12 @ ₹1,499/-',
    specialCallout: 'MCA Form DIR-11 & DIR-12 Certified',
    urgencyText: 'File within 30 days to avoid ongoing director liability',
    ctaText: 'Process Director Resignation',
    metaTitle: 'Resignation of Director Online @ ₹1,499 | Form DIR-11 & DIR-12 MCA',
    metaDescription: 'Process resignation of director online at ₹1,499. Resignation letter drafting, Board Resolution, Form DIR-11 (Director) and Form DIR-12 (Company) MCA filing.',
    seoKeywords: ['resignation of director', 'Form DIR-11 filing', 'Form DIR-12 resignation', 'remove director MCA', 'director resignation letter', 'relieve director liabilities'],
    heroIntro: 'The Resignation of a Director, governed under Section 168 of the Companies Act, 2013 read with Rule 15 and 16 of the Companies (Appointment and Qualification of Directors) Rules, 2014, is the formal statutory process by which a director steps down from the Board of Directors of a company. To legally terminate directorship responsibilities and absolve the resigning director from future corporate liabilities, the director must submit a formal resignation letter, the company must pass a Board Resolution, and dual MCA filings must be completed: Form DIR-12 (filed by the company) and optional Form DIR-11 (filed directly by the resigning director) within 30 days.',
    keyTags: ['Section 168 Companies Act', 'Form DIR-12 (Company Filing)', 'Form DIR-11 (Director Filing)', 'Absolve Future Corporate Liabilities', 'MCA V3 Master Data Update'],
    overview: {
      p1: 'When a director resigns, their resignation takes effect from the date notice is received by the company or the date specified in the letter. However, until Form DIR-12 is approved by the ROC on the MCA portal, the public registry continues to display the individual as an active director, leaving them vulnerable to regulatory notices and legal disputes.',
      p2: 'The company is legally mandated to file Form DIR-12 within 30 days. Additionally, the resigning director can file Form DIR-11 directly with the ROC to establish independent proof of resignation. Akshay B2B Solutions drafts formal resignation letters, Board Resolutions, and files both Form DIR-12 and Form DIR-11 for complete legal closure.',
    },
    registrationProcessOverview: {
      status: 'Statutory Event-Based MCA Compliance',
      governingAuthority: 'Registrar of Companies (ROC), Ministry of Corporate Affairs (MCA)',
      summary: 'Drafting formal resignation letter, convening Board Meeting to pass resolution taking note of resignation, drafting formal acknowledgment, filing Form DIR-12 on MCA V3, and optional filing of Form DIR-11 by the director.',
      postApproval: 'Issuance of official MCA SRN Challan removing the director name from the active board list.',
      assistanceRole: 'Resignation drafting, Board Resolution preparation, CS certification, DSC affixation, and dual DIR-11/DIR-12 filing.'
    },
    whatIs: {
      definition: 'Resignation of Director is the legal procedure through which a director formally relinquishes their board seat and updates the Registrar of Companies to extinguish future liabilities.',
      points: [
        'Governed under Section 168 of the Companies Act, 2013.',
        'Resignation is effective from the date specified in the notice.',
        'The company must file Form DIR-12 with ROC within 30 days.',
        'The director can independently file Form DIR-11 to secure their own legal protection.',
        'Requires minimum 2 directors to remain on the board for Private Limited companies.',
        'Relieves the outgoing director from any future corporate non-compliance or liabilities.'
      ],
      closing: 'It provides formal legal detachment and absolves the director from ongoing corporate liabilities.'
    },
    keyCharacteristics: [
      {
        title: 'Dual Filing Structure',
        description: 'Form DIR-12 is filed by the company to report the vacancy; Form DIR-11 is filed independently by the director for self-protection.'
      },
      {
        title: 'Section 168 Liability Shield',
        description: 'The resigning director remains liable for acts done during their tenure, but is fully absolved of all acts following the resignation effective date.'
      },
      {
        title: 'Minimum Board Quorum Rule',
        description: 'A director cannot resign if it reduces board strength below the statutory minimum (2 for Pvt Ltd) without appointing a replacement.'
      },
      {
        title: '30-Day Statutory Filing Window',
        description: 'Both Form DIR-12 and DIR-11 must be filed on the MCA portal within 30 days of the resignation effective date.'
      }
    ],
    importanceBenefits: {
      intro: 'Proper statutory resignation filing delivers crucial legal protections:',
      benefits: [
        {
          title: 'Total Legal Protection from Future Liabilities',
          desc: 'Formally extinguishes director liabilities for future company debts, GST defaults, ROC penalties, or legal disputes.'
        },
        {
          title: 'Immediate Removal from Public MCA Registry',
          desc: 'Removes your name from the active director list on public MCA search databases and third-party corporate indices.'
        },
        {
          title: 'Relief from Ongoing Governance Obligations',
          desc: 'Ends obligations to attend board meetings, sign annual financials, or maintain corporate statutory registers.'
        },
        {
          title: 'Independent Protection via Form DIR-11',
          desc: 'Filing Form DIR-11 ensures your resignation is officially recorded even if the company delays filing Form DIR-12.'
        },
        {
          title: 'Avoids Compounding MCA Late Penalties',
          desc: 'Protects the company and director from compounding additional late fees by filing within the 30-day window.'
        }
      ],
      closing: 'It guarantees clean, unambiguous legal separation from the corporate entity.'
    },
    package: {
      title: 'Resignation of Director Complete Package',
      description: 'End-to-end resignation letter drafting, Board Resolution preparation, Form DIR-12 and Form DIR-11 MCA filing.',
      checklist: [
        'Drafting Formal Notice / Letter of Resignation',
        'Drafting Notice & Board Resolution Taking Note of Resignation',
        'Drafting Formal Formal Relieving & Acknowledgment Letter',
        'Preparation of MCA Form DIR-12 on MCA V3 Portal',
        'Preparation of MCA Form DIR-11 (Director Self-Filing)',
        'Professional Certification by Practicing Company Secretary / CA',
        'Affixation of Class 3 Digital Signature Certificates (DSC)',
        'Generation of Official MCA Service Request Number (SRN) Receipts'
      ]
    },
    types: [
      {
        title: 'Company Filing (Form DIR-12)',
        desc: 'Mandatory filing by the company reporting the resignation and cessation of the director.',
        eligibility: 'Company compliance'
      },
      {
        title: 'Director Self-Filing (Form DIR-11)',
        desc: 'Filing by the outgoing director using their own DSC to report resignation directly to the ROC.',
        eligibility: 'Outgoing director'
      },
      {
        title: 'Simultaneous Replacement & Resignation',
        desc: 'Appointing a new director and accepting resignation of existing director in a single Board Meeting.',
        eligibility: 'Board restructuring'
      }
    ],
    comparison: {
      title: 'Form DIR-12 (Company) vs Form DIR-11 (Director)',
      headers: ['Parameter', 'Form DIR-12', 'Form DIR-11'],
      rows: [
        { aspect: 'Filed By', col1: 'The Company (signed by continuing director)', col2: 'The Resigning Director independently' },
        { aspect: 'Mandatory Nature', col1: 'Mandatory for the company under Section 168', col2: 'Optional but strongly recommended for director protection' },
        { aspect: 'Attachments', col1: 'Resignation Letter & Board Resolution', col2: 'Resignation Letter & Proof of Delivery to company' },
        { aspect: 'Filing Due Date', col1: 'Within 30 days of resignation', col2: 'Within 30 days of resignation' },
        { aspect: 'Digital Signature', col1: 'Continuing Director & Practicing CS', col2: 'Resigning Director DSC' }
      ]
    },
    lawsGoverning: {
      actName: 'Companies Act, 2013 (Section 168 & Section 170) & MCA Rules',
      authority: 'Registrar of Companies (ROC) & Ministry of Corporate Affairs',
      points: [
        'Section 168 governing resignation of directors.',
        'Rule 15 of Companies (Appointment and Qualification of Directors) Rules, 2014.',
        'Rule 16 enabling directors to file Form DIR-11 with ROC.',
        'Section 170 mandating company to file Form DIR-12 within 30 days.',
        'Section 403 prescribing additional fees for delayed filing.'
      ],
      penalties: 'Failure to file leaves director exposed to ongoing corporate liabilities and attracts MCA late fees.'
    },
    eligibilityRequirements: {
      intro: 'Any director wishing to resign must follow statutory procedures:',
      criteria: [
        'Director must serve formal written notice to the company.',
        'Board strength must not fall below statutory minimum (2 for Pvt Ltd, 3 for Public Ltd).',
        'Director must possess active DSC for Form DIR-11 filing.'
      ],
      documentsRequired: [
        'Formal Resignation Letter with effective date and reasons',
        'Certified True Copy of Board Resolution taking note of resignation',
        'Proof of Delivery / Email confirmation of resignation to the company',
        'Class 3 Digital Signature Certificate (DSC) of Resigning Director (for DIR-11)',
        'Class 3 DSC of Continuing Director (for DIR-12)'
      ]
    },
    processSteps: [
      { step: 1, title: 'Resignation Letter & Notice Drafting', desc: 'We draft the formal resignation letter specifying effective dates and compile proof of service.' },
      { step: 2, title: 'Board Resolution & Acknowledgment', desc: 'We draft the certified Board Resolution and company formal acknowledgment letter.' },
      { step: 3, title: 'Form DIR-12 & DIR-11 Preparation', desc: 'Our Company Secretaries prepare Form DIR-12 and Form DIR-11 on MCA V3 and digitally certify.' },
      { step: 4, title: 'MCA V3 Submission & Master Data Update', desc: 'We submit the forms on MCA V3 and deliver the official SRN receipts showing updated company board data.' }
    ],
    postRegistrationCompliance: {
      intro: 'Key steps following director resignation:',
      points: [
        'Update the Register of Directors and Key Managerial Personnel (Section 170).',
        'Notify company bankers to remove the resigned director from bank operating mandates.',
        'Retain copies of filed DIR-12, DIR-11, and SRN receipts for personal records.',
        'Ensure the resigned director completes annual DIN KYC if holding DIN in other companies.'
      ]
    },
    timelines: {
      tat: '2 to 3 Working Days',
      delayFactors: ['Dispute between outgoing director and continuing board', 'Expired DSC tokens on MCA V3 portal', 'MCA V3 portal processing queues'],
      speedAssurance: 'Our secretarial team completes DIR-12 and DIR-11 filings within 48 hours of document receipt.'
    },
    certification: {
      issuingAuthority: 'Registrar of Companies (ROC), Ministry of Corporate Affairs',
      validity: 'Statutory approval updating public company registry',
      legalSignificance: 'Official statutory MCA approval confirming the legal cessation of the director from the company.',
      contents: ['Service Request Number (SRN)', 'Company CIN & Legal Name', 'Resigned Director DIN & Name', 'Date of Cessation', 'Payment Receipt & MCA Digital Seal']
    },
    fees: {
      govtFee: 'Statutory MCA filing fee based on authorized capital (approx. ₹300-₹600 per form)',
      professionalFee: '₹1,499/- only (Complete resignation drafting, Board Resolution, and DIR-12/11 filing package)',
      transparencyNote: 'Fixed price ₹1,499 with zero hidden charges.'
    },
    taxation: {
      directTaxImpact: 'Secretarial compliance fees for director cessation are 100% tax-deductible operational business expenses.',
      gstImplications: 'Attracts 18% GST with full Input Tax Credit eligibility for the company.',
      deductionsOrExemptions: 'Relieves outgoing director from any future corporate tax liabilities or TDS default proceedings.'
    },
    whyUs: [
      'Over 3,800+ director resignations successfully processed with zero legal complications.',
      'Comprehensive dual filing support covering both Form DIR-12 and Form DIR-11.',
      'Expert drafting of protective resignation notices and Board Resolutions.',
      'In-house team of practicing Company Secretaries ensuring flawless compliance.',
      'Dedicated secretarial manager tracking your filing until master data update.'
    ],
    faqs: [
      { q: 'From what date does a director resignation become effective?', a: 'Under Section 168(2) of the Companies Act, the resignation of a director takes effect from the date on which the notice is received by the company or the date specified in the notice, whichever is later.' },
      { q: 'What is Form DIR-11 and should the resigning director file it?', a: 'Form DIR-11 is a direct filing made by the resigning director with the ROC to place their resignation on official record. While optional, it is strongly recommended because it protects the director if the company delays filing Form DIR-12.' },
      { q: 'Can a director resign if only 2 directors exist in a Private Limited company?', a: 'Under Section 149(1), a Private Limited company must have a minimum of 2 directors. If one resigns, the remaining director must simultaneously appoint a new director before or at the same time to avoid board paralysis.' },
      { q: 'Is the resigning director liable for company defaults after resignation?', a: 'No. Under Section 168, the resigning director is fully absolved of any acts, omissions, or defaults committed by the company after the effective date of their resignation.' },
      { q: 'What is the penalty for late filing of Form DIR-12?', a: 'Filing Form DIR-12 after 30 days attracts compounding MCA additional late fees ranging from 2x to 18x the standard filing fee.' },
      { q: 'How do I start the director resignation process today?', a: 'Click "Process Director Resignation" to share the details with our secretarial desk for instant document drafting and MCA filing.' }
    ],
    relatedServices: [
      { name: 'Appointment of Director', desc: 'Formal appointment of new director with MCA Form DIR-12.', price: '₹1,499' },
      { name: 'Removal of Director', desc: 'Special notice & shareholder resolution for director removal.', price: '₹1,999' },
      { name: 'DIN KYC Filing', desc: 'Annual Director KYC compliance on MCA portal.', price: '₹999' },
      { name: 'ROC Annual Filing', desc: 'Mandatory annual MCA compliance (AOC-4 & MGT-7) for companies.', price: '₹1,999' },
      { name: 'Transfer of Shares', desc: 'Execution of SH-4 and stamp duty compliance for share transfers.', price: '₹1,499' },
      { name: 'Increase in Authorized Capital', desc: 'Enhance capital limits with MCA Form SH-7.', price: '₹2,499' }
    ]
  }
];

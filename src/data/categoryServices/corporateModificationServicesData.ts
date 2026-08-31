import { ServiceDetailConfig } from './types';

export const CORPORATE_MODIFICATION_SERVICES: ServiceDetailConfig[] = [
  // 14. Company Address Change — ₹2499 + Govt. Fee
  {
    slug: 'company-address-change',
    name: 'Company Address Change',
    category: 'Modification in Company',
    parentCategory: 'Tax & Compliance',
    price: '₹2499',
    priceType: 'fixed',
    priceDisplay: '₹2499 + Govt. Fee',
    heroPriceHook: 'Fast-Track Registered Office Address Change (Form INC-22 / Form 15) | ₹2499 + Govt. Fee',
    specialCallout: 'MCA V3 Compliant Registered Office Relocation Process',
    urgencyText: 'Mandatory filing within 30 days of address change to avoid MCA penalties',
    ctaText: 'Change Company Address',
    metaTitle: 'Company Address Change Online @ ₹2499 | MCA Form INC-22 Filing',
    metaDescription: 'Change registered office address of Pvt Ltd Company or LLP online at ₹2499 + Govt. Fee. Board resolutions, utility bill vetting, Form INC-22 preparation, and MCA approval.',
    seoKeywords: [
      'company address change online',
      'change registered office address MCA',
      'Form INC-22 filing',
      'company address change ₹2499',
      'LLP Form 15 address change',
      'inter-state registered office shift',
      'ROC address change procedure'
    ],
    keywords: [
      'company-address-change',
      'change-company-address',
      'registered office change',
      'form inc 22',
      'change address pvt ltd',
      'llp form 15'
    ],
    heroIntro: 'Company Address Change is the statutory procedure to officially alter the registered office address of a Company or LLP with the Ministry of Corporate Affairs (MCA) under Form INC-22 (or Form 15 for LLP). Changes can occur within local limits, outside local limits within the same ROC, or across state jurisdictions requiring RD approval.',
    keyTags: [
      'Form INC-22',
      'Registered Office Change',
      'MCA Address Change',
      'Local vs Inter-State Address Change',
      'ROC Approval',
      'INC-28 Filing'
    ],
    overview: {
      p1: 'Under Section 12 of the Companies Act, 2013 and Section 13 of the LLP Act, 2008, every registered business entity must maintain a valid registered office capable of receiving official communications, notices, and statutory government correspondence from the Registrar of Companies (ROC), tax departments, and legal authorities.',
      p2: 'Whenever a company relocates its operational office, it is legally mandatory to notify the MCA within 30 days by filing Form INC-22 along with valid proof of address, utility bills, and landlord NOC. Failure to update the registered office leads to severe statutory fines of ₹1,000 per day under Section 12(8) and puts the company at risk of being marked "Active Non-Compliant" on the MCA portal. Akshay B2B Solutions provides seamless secretarial drafting and rapid MCA approval.'
    },
    registrationProcessOverview: {
      status: 'Statutory Event-Based MCA Compliance Filing',
      governingAuthority: 'Registrar of Companies (ROC) & Regional Director (RD), MCA',
      summary: 'Drafting Board Resolution (and Special Resolution for inter-city/inter-state), verifying address proof and landlord NOC, preparing Form INC-22 (or Form 15 for LLP), executing Director DSC, and submitting on MCA V3 portal.',
      postApproval: 'Issuance of official MCA Approval Letter / SRN Challan confirming updated registered office address in MCA master data.',
      assistanceRole: 'Resolution drafting, lease agreement review, utility bill verification, e-form preparation, CS certification, and MCA tracking.'
    },
    whatIs: {
      definition: 'Company Address Change is the formal legal procedure of updating an enterprise registered office location on the Ministry of Corporate Affairs central database by filing Form INC-22 or Form 15.',
      points: [
        'Within Local Limits (Same City/Town): Requires only a Board Resolution and filing of Form INC-22 within 30 days.',
        'Outside Local Limits (Same ROC): Requires Board Resolution, Special Resolution by Shareholders (EGM), and Form MGT-14 + Form INC-22.',
        'Change of ROC within Same State: Requires Regional Director (RD) approval in Form INC-23 followed by Form INC-28 and INC-22.',
        'Inter-State Address Change: Comprehensive procedure altering Memorandum of Association (MOA Clause II) requiring RD approval and public newspaper notices.',
        'LLP Address Change: Processed via Form 15 with supplementary LLP agreement amendment.',
        'Mandates recent utility bill (electricity, water, gas) not older than 2 months and Landlord NOC.'
      ],
      closing: 'It ensures uninterrupted legal correspondence and keeps your corporate registration completely compliant.'
    },
    keyCharacteristics: [
      {
        title: 'Form INC-22 Statutory e-Form',
        description: 'The mandatory electronic form submitted on MCA V3 to record registered office address alterations.'
      },
      {
        title: 'Strict 30-Day Filing Window',
        description: 'Must be filed within 30 days of passing the board resolution to prevent ₹1,000/day statutory late penalties.'
      },
      {
        title: 'Utility Bill & NOC Validation',
        description: 'Mandatory attachment of an electricity/gas/water bill dated within 60 days and notarized landlord NOC.'
      },
      {
        title: 'Instant Master Data Synchronization',
        description: 'Updates the public MCA master record, providing verified proof for bank accounts and GST updates.'
      }
    ],
    importanceBenefits: {
      intro: 'Updating your company registered office address with Akshay B2B Solutions secures crucial operational benefits:',
      benefits: [
        {
          title: 'Total Immunity from ₹1,000/Day Penalties',
          desc: 'Avoid statutory fines of ₹1,000 per day (up to ₹1 Lakh) levied on the company and every officer in default under Section 12(8).'
        },
        {
          title: 'Uninterrupted Receipt of Legal & Tax Notices',
          desc: 'Prevent default judgments and assessment orders resulting from missed physical notices sent to an outdated address.'
        },
        {
          title: 'Immediate Eligibility for Bank & GST Modification',
          desc: 'MCA approved Form INC-22 is the primary document required to update company bank accounts and state GST registrations.'
        },
        {
          title: 'Preserves "Active Compliant" MCA Standing',
          desc: 'Maintains verified physical address compliance on the public MCA database, vital for vendor and client due diligence.'
        },
        {
          title: 'End-to-End Secretarial Documentation Included',
          desc: 'Includes professionally drafted Board Resolutions, EGM notices, shareholder resolutions, and landlord NOC templates.'
        }
      ],
      closing: 'It protects your corporate legal standing and enables seamless banking and operational transitions.'
    },
    package: {
      title: 'Company Address Change Complete Package',
      description: 'Fast and seamless MCA filing for changing your registered office address anywhere in India.',
      checklist: [
        'Drafting Board Resolution for Registered Office Change',
        'Proof of Address Verification & Utility Bill Review',
        'Drafting Landlord No-Objection Certificate (NOC)',
        'Form INC-22 Preparation & Digital Verification',
        'Professional Certification by Practicing CS / CA',
        'E-Filing on Ministry of Corporate Affairs (MCA V3) Portal',
        'Updated MCA Master Data Verification Extract',
        'Guidance on Updating GSTIN, Bank Accounts & PAN/TAN'
      ]
    },
    types: [
      {
        title: 'Address Change Within Same City / Local Limits',
        desc: 'Simplest process requiring only a Board Resolution and Form INC-22 filing with the ROC within 30 days.',
        eligibility: 'Same city / municipal limits'
      },
      {
        title: 'Address Change Outside City (Same ROC)',
        desc: 'Requires Board Resolution, Shareholder Special Resolution (Form MGT-14), and Form INC-22 filing.',
        eligibility: 'Different city under same ROC'
      },
      {
        title: 'Change of Jurisdiction (Inter-State / Shift of ROC)',
        desc: 'Advanced process altering MOA Clause II, requiring Regional Director (RD) approval, public newspaper notices, and state approvals.',
        eligibility: 'State-to-state or ROC-to-ROC shift'
      }
    ],
    comparison: {
      title: 'Address Change Within City/Local Limits vs Change Outside Local Limits / Interstate',
      headers: ['Aspect', 'Within Local Limits (Same City)', 'Outside Local Limits / Inter-State'],
      rows: [
        { aspect: 'Approval Level', col1: 'Board of Directors (Board Resolution)', col2: 'Shareholders (Special Resolution) + RD Approval (for Inter-State)' },
        { aspect: 'MCA Forms Required', col1: 'Form INC-22 only', col2: 'Form MGT-14 + Form INC-23 (if RD) + Form INC-22' },
        { aspect: 'MOA Alteration', col1: 'No alteration of MOA required', col2: 'Mandatory alteration of MOA Clause II (Registered Office Clause)' },
        { aspect: 'Public Notice', col1: 'No newspaper notice required', col2: 'Mandatory newspaper advertisements in English & vernacular (for Inter-State)' },
        { aspect: 'Processing Timeline', col1: '3 to 5 Working Days', col2: '30 to 60 Working Days' }
      ]
    },
    comparisonTables: [
      {
        title: 'Address Change Within City/Local Limits vs Change Outside Local Limits / Interstate',
        headers: ['Aspect', 'Within Local Limits (Same City)', 'Outside Local Limits / Inter-State'],
        rows: [
          { aspect: 'Approval Level', col1: 'Board of Directors (Board Resolution)', col2: 'Shareholders (Special Resolution) + RD Approval (for Inter-State)' },
          { aspect: 'MCA Forms Required', col1: 'Form INC-22 only', col2: 'Form MGT-14 + Form INC-23 (if RD) + Form INC-22' },
          { aspect: 'MOA Alteration', col1: 'No alteration of MOA required', col2: 'Mandatory alteration of MOA Clause II (Registered Office Clause)' },
          { aspect: 'Public Notice', col1: 'No newspaper notice required', col2: 'Mandatory newspaper advertisements in English & vernacular (for Inter-State)' },
          { aspect: 'Processing Timeline', col1: '3 to 5 Working Days', col2: '30 to 60 Working Days' }
        ]
      },
      {
        title: 'MCA Form INC-22 (Companies) vs Form 15 (LLPs)',
        headers: ['Feature', 'Form INC-22 (Pvt Ltd / Public / OPC)', 'Form 15 (Limited Liability Partnerships)'],
        rows: [
          { aspect: 'Governing Act', col1: 'Section 12 of Companies Act, 2013', col2: 'Section 13 of LLP Act, 2008' },
          { aspect: 'Filing Due Date', col1: 'Within 30 days of change', col2: 'Within 30 days of change' },
          { aspect: 'Mandatory Signatory', col1: 'Director DSC + Practicing CS/CA certification', col2: 'Designated Partner DSC + Supplementary LLP Deed' },
          { aspect: 'Supporting Proofs', col1: 'Utility bill (< 2 months), NOC, Rent Deed', col2: 'Consent of all partners, utility bill, Landlord NOC' }
        ]
      }
    ],
    lawsGoverning: {
      actName: 'Companies Act, 2013 (Section 12) & Companies (Incorporation) Rules, 2014',
      authority: 'Registrar of Companies (ROC) & Regional Director (RD), MCA',
      points: [
        'Section 12(1) requiring company to have registered office capable of receiving notices.',
        'Section 12(4) mandating notice of change in registered office to ROC within 30 days in Form INC-22.',
        'Section 12(5) requiring Special Resolution for shifting registered office outside local limits.',
        'Section 13(4) governing alteration of MOA for shifting registered office from one State to another.',
        'Section 12(8) imposing statutory daily penalties of ₹1,000 for failure to comply.'
      ],
      penalties: 'Default attracts ₹1,000 per day penalty (up to ₹1,00,000) on company and every defaulting officer.'
    },
    eligibilityRequirements: {
      intro: 'Any active Private Limited Company, OPC, Public Company, or LLP changing its business address:',
      criteria: [
        'Company/LLP in active standing on the MCA portal.',
        'Valid commercial, industrial, or residential physical address.',
        'Landlord consent and non-expired utility connection.'
      ],
      documentsRequired: [
        'Proof of Address: Electricity Bill / Gas Bill / Water Bill (dated within 2 months)',
        'Notarized Rent Agreement / Lease Deed on appropriate Stamp Paper',
        'No-Objection Certificate (NOC) from the Property Owner / Landlord',
        'Certified Copy of Board Resolution approving the registered office shift',
        'Class 3 Digital Signature Certificate (DSC) of Authorized Director'
      ]
    },
    processSteps: [
      { step: 1, title: 'Document & Utility Bill Vetting', desc: 'We verify that the utility bill, rent agreement, and landlord NOC strictly match MCA address formats.' },
      { step: 2, title: 'Secretarial Resolution Drafting', desc: 'We draft the certified Board Resolution (and EGM Special Resolution if changing outside city limits).' },
      { step: 3, title: 'Form INC-22 Preparation & CS Attestation', desc: 'Our Company Secretaries prepare Form INC-22 on MCA V3, attach documents, and provide professional certification.' },
      { step: 4, title: 'MCA Submission & Approval Tracking', desc: 'We submit the e-form, track ROC verification, and deliver the approved SRN challan and updated master data.' }
    ],
    postRegistrationCompliance: {
      intro: 'Key statutory updates following registered office address change approval:',
      points: [
        'Update address on company letterheads, invoices, email signatures, and official website.',
        'Apply for core field amendment on the GST portal to update all active GSTIN registrations.',
        'Submit the approved INC-22 challan to banks to update current accounts and banking communications.',
        'Update state Professional Tax, Shop & Establishment, and IEC registrations.'
      ]
    },
    timelines: {
      tat: '3 to 5 Working Days (Local / Same ROC) | 30-45 Days (Inter-State)',
      delayFactors: ['Utility bill older than 2 months or mismatched address spelling', 'Pending landlord NOC signature', 'MCA V3 portal processing delays'],
      speedAssurance: 'Our team verifies utility bills against property title records to guarantee single-pass MCA approval.'
    },
    certification: {
      issuingAuthority: 'Registrar of Companies (ROC), Ministry of Corporate Affairs',
      validity: 'Permanent until subsequent registered office change',
      legalSignificance: 'Official government certification confirming lawful relocation of corporate registered office.',
      contents: [
        'Official MCA Service Request Number (SRN) Challan',
        'Approved Form INC-22 / Form 15 with ROC Digital Signature',
        'Updated MCA Company Master Data Extract displaying new address',
        'ROC Approval Certificate (for inter-city/inter-state jurisdiction changes)'
      ]
    },
    fees: {
      govtFee: '₹300 to ₹600 (Statutory MCA portal filing fee based on authorized capital)',
      professionalFee: '₹2,499/- only (Complete Board resolution, NOC drafting, Form INC-22 preparation, and CS certification)',
      transparencyNote: 'Fixed price of ₹2499 + Govt. Fee with zero hidden charges.'
    },
    taxation: {
      directTaxImpact: 'Requires mandatory alignment across GSTIN registrations, PAN/TAN databases, Professional Tax state portals, and updated tax communication notices.',
      gstImplications: 'Shifting to a new state requires obtaining a fresh GSTIN, whereas intra-state shifts require core amendment within 15 days.',
      deductionsOrExemptions: 'Secretarial filing fees are 100% tax-deductible operational business expenses under Section 37(1).'
    },
    whyUs: [
      'Executed by experienced Practicing Company Secretaries with fast MCA turnaround.',
      'Comprehensive drafting support including customized Board Resolutions and Landlord NOCs.',
      '100% first-pass approval track record across more than 4,200+ address change filings.',
      'Integrated post-approval support for updating GST, PAN, TAN, and bank records.',
      'Transparent pricing with zero hidden charges and continuous live filing tracking.'
    ],
    faqs: [
      {
        q: 'Can a residential address be used as the registered office of a company?',
        a: 'Yes. The Companies Act allows a residential address (such as a director or family member home) to be registered as the company office, provided a valid utility bill and landlord NOC are submitted.'
      },
      {
        q: 'What is the statutory deadline to file Form INC-22 after changing the office address?',
        a: 'Form INC-22 must be filed with the ROC within 30 days from the date of the Board Meeting approving the change of registered office.'
      },
      {
        q: 'What happens if a company fails to file Form INC-22 within 30 days?',
        a: 'Under Section 12(8), late filing attracts daily penalties of ₹1,000 per day (up to ₹1 Lakh) and MCA late fees. The company may also be flagged for physical verification.'
      },
      {
        q: 'Do I need shareholder approval (EGM) to change address within the same city?',
        a: 'No. Shifting the registered office within the local limits of the same city, town, or village requires only a Board Resolution passed by the directors.'
      },
      {
        q: 'How do I update my GST registration after MCA approves the address change?',
        a: 'Once Form INC-22 is approved, we file a Core Field Amendment on the GST portal attaching the approved INC-22 challan and new utility bill to update your GST certificate.'
      },
      {
        q: 'How do I start the Company Address Change process with Akshay B2B Solutions?',
        a: 'Click "Change Company Address" or contact our team at contact@akshayb2bsolutions.com / +91 97180 04839 with your new address proof for same-day resolution drafting.'
      }
    ],
    relatedServices: [
      { name: 'Pvt Ltd Company Compliances', desc: 'Annual Form AOC-4 & MGT-7 ROC filings and statutory minutes.', price: '₹7999 + Govt. Fee' },
      { name: 'GST Modification', desc: 'Core and non-core field amendments on the GST portal.', price: '₹699 + Govt. Fee' },
      { name: 'Removal of Director', desc: 'Form DIR-12 filing for director resignation or removal.', price: '₹1499 + Govt. Fee' },
      { name: 'Strike off Company', desc: 'Fast-track company closure under Form STK-2.', price: '₹11999 + Govt. Fee' },
      { name: 'Professional Tax Registration', desc: 'State-specific PTEC & PTRC employer registration.', price: '₹999 + Govt. Fee' },
      { name: 'Accounting and Bookkeeping', desc: 'Professional ledger maintenance, bank reconciliation, and P&L sheets.', price: 'Custom Quote' }
    ]
  },

  // 15. Removal of Director — ₹1499 + Govt. Fee
  {
    slug: 'removal-of-director',
    name: 'Removal of Director',
    category: 'Modification in Company',
    parentCategory: 'Tax & Compliance',
    price: '₹1499',
    priceType: 'fixed',
    priceDisplay: '₹1499 + Govt. Fee',
    heroPriceHook: 'Statutory Resignation or Removal of Director (Form DIR-12) | ₹1499 + Govt. Fee',
    specialCallout: 'Section 168 (Resignation) & Section 169 (Removal) Compliant Filing',
    urgencyText: 'Mandatory Form DIR-12 filing within 30 days to discharge statutory liabilities',
    ctaText: 'Process Director Removal',
    metaTitle: 'Removal / Resignation of Director Online @ ₹1499 | MCA Form DIR-12',
    metaDescription: 'Legal procedure for removal or resignation of director under Section 168/169 of Companies Act at ₹1499 + Govt. Fee. Resignation notice, Board resolution, and Form DIR-12 MCA filing.',
    seoKeywords: [
      'removal of director online',
      'resignation of director MCA',
      'Form DIR-12 filing',
      'director removal ₹1499',
      'Section 168 director resignation',
      'Section 169 removal of director',
      'discharge director liability MCA'
    ],
    keywords: [
      'removal-of-director',
      'remove-director',
      'resignation-of-director',
      'director resignation',
      'form dir 12',
      'section 168 169'
    ],
    heroIntro: 'Removal or Resignation of a Director is the legal process of updating a company\'s Board of Directors under Section 168/169 of the Companies Act, 2013 using MCA Form DIR-12. Whether due to voluntary resignation, disqualification, or shareholder removal, timely ROC filing is mandatory to discharge directorship liabilities.',
    keyTags: [
      'Form DIR-12',
      'Director Resignation',
      'Board Resignation Letter',
      'Section 168 Compliance',
      'MCA Board Update',
      'Removal under Sec 169'
    ],
    overview: {
      p1: 'Changes in the Board of Directors represent critical corporate restructuring events strictly governed under the Companies Act, 2013. Under Section 168 (Voluntary Resignation) or Section 169 (Removal by Shareholders), a company must formally update its directorship roster on the Ministry of Corporate Affairs portal by submitting Form DIR-12 within 30 days of the effective date.',
      p2: 'Failing to file Form DIR-12 exposes both the company and the exiting director to severe statutory complications—the company faces daily late penalties of ₹100/day, while the outgoing director remains legally and financially liable as an "Officer in Default" on the public MCA registry. Akshay B2B Solutions delivers legally watertight secretarial drafting, board resolutions, and prompt MCA V3 filing.'
    },
    registrationProcessOverview: {
      status: 'Mandatory Event-Based MCA Statutory Compliance',
      governingAuthority: 'Registrar of Companies (ROC), Ministry of Corporate Affairs (MCA)',
      summary: 'Reviewing resignation notice / special notice, drafting Board Resolution, passing shareholder resolution (for Section 169 removal), preparing Form DIR-12 on MCA V3, executing Director DSC signatures, and filing with ROC.',
      postApproval: 'Issuance of official MCA Service Request Number (SRN) Challan and updated MCA master data reflecting director cessation.',
      assistanceRole: 'Resignation letter drafting, Board Resolution preparation, CS certification, Form DIR-12 MCA V3 filing, and DIR-11 advisory.'
    },
    whatIs: {
      definition: 'Removal or Resignation of a Director is the formal statutory procedure executed on the MCA portal via Form DIR-12 to legally record the cessation of a director tenure and discharge ongoing directorship liabilities.',
      points: [
        'Voluntary Resignation (Section 168): Director submits written resignation; board acknowledges and files DIR-12 within 30 days.',
        'Shareholder Removal (Section 169): Shareholders serve Special Notice (14 days), provide hearing opportunity, pass Ordinary Resolution, and file DIR-12.',
        'Director Resignation Notice (Form DIR-11): Optional/recommended direct filing by the resigning director with the ROC.',
        'Mandatory Board Quorum: Company must maintain minimum statutory directors (2 for Pvt Ltd, 3 for Public, 1 for OPC).',
        'Cessation Effective Date: Resignation takes effect from date specified in notice or date received by company, whichever is later.',
        'Updates public MCA master records, removing signing rights and legal exposure.'
      ],
      closing: 'It provides statutory finality, legally extinguishing the individual future corporate liabilities.'
    },
    keyCharacteristics: [
      {
        title: 'Form DIR-12 MCA Filing',
        description: 'The mandatory electronic form submitted on the MCA portal within 30 days of director cessation.'
      },
      {
        title: 'Section 168 Resignation Protections',
        description: 'Exonerates the resigning director from corporate acts and liabilities occurring after the resignation date.'
      },
      {
        title: 'Minimum Board Quorum Preservation',
        description: 'Ensures the company maintains the statutory minimum of 2 directors (for Pvt Ltd) post-resignation.'
      },
      {
        title: 'Form DIR-11 Independent Director Safeguard',
        description: 'Allows exiting directors to independently notify the ROC to ensure complete personal liability protection.'
      }
    ],
    importanceBenefits: {
      intro: 'Filing director cessation through Akshay B2B Solutions guarantees crucial legal and operational safeguards:',
      benefits: [
        {
          title: 'Immediate Discharge of Directorship Liabilities',
          desc: 'Legally extinguishes personal liability for future company defaults, tax penalties, and ROC compounding notices.'
        },
        {
          title: 'Revokes Banking & Digital Signing Rights',
          desc: 'Formally removes the individual as an authorized signatory across company bank accounts, GSTIN, and MCA records.'
        },
        {
          title: 'Eliminates ₹100/Day Compounding MCA Penalties',
          desc: 'Avoid hefty late filing fees under Section 403 that compound daily until Form DIR-12 is approved.'
        },
        {
          title: 'Maintains Clean DIN Standing on MCA',
          desc: 'Protects the director Director Identification Number (DIN) from being tainted by future company non-compliances.'
        },
        {
          title: 'Complete Secretarial Documentation Package',
          desc: 'Includes customized resignation notices, Board Resolutions, certified extracts, and formal discharge letters.'
        }
      ],
      closing: 'It provides absolute legal certainty and clean corporate governance transition.'
    },
    package: {
      title: 'Removal / Resignation of Director Package',
      description: 'Error-free filing of Form DIR-12 to legally record director resignation or removal.',
      checklist: [
        'Review of Resignation Letter & Notice of Intention',
        'Drafting Board Resolution & Certified True Copy',
        'Drafting Formal Notice of Board Meeting & Minutes',
        'Preparation of MCA Form DIR-12 on MCA V3 Portal',
        'Professional Certification by Practicing Company Secretary (PCS)',
        'MCA E-Filing & Service Request Number (SRN) Generation',
        'Updated Company Master Data Verification Extract',
        'Discharge of Statutory Liabilities Confirmation Letter'
      ]
    },
    types: [
      {
        title: 'Voluntary Resignation Filing (Section 168)',
        desc: 'Director tenders voluntary resignation; company convenes board meeting and files Form DIR-12.',
        eligibility: 'Voluntary exit by director'
      },
      {
        title: 'Removal by Shareholder Resolution (Section 169)',
        desc: 'Shareholders issue Special Notice, convene EGM, pass Ordinary Resolution, and file Form DIR-12.',
        eligibility: 'Shareholder-initiated removal'
      },
      {
        title: 'Retirement by Rotation Compliance',
        desc: 'Formal cessation and re-appointment filings conducted during the Annual General Meeting (AGM).',
        eligibility: 'Public & Large Companies'
      }
    ],
    comparison: {
      title: 'Voluntary Director Resignation (Sec 168) vs Shareholder Removal (Sec 169)',
      headers: ['Parameter', 'Voluntary Resignation (Section 168)', 'Shareholder Removal (Section 169)'],
      rows: [
        { aspect: 'Initiated By', col1: 'The concerned Director submitting written notice', col2: 'Shareholders holding ≥1% voting power / ₹5L capital' },
        { aspect: 'Approval Required', col1: 'Board Meeting taking note of resignation', col2: 'Special Notice (14 days) + EGM Ordinary Resolution' },
        { aspect: 'Right to be Heard', col1: 'Not applicable (voluntary decision)', col2: 'Mandatory statutory right of representation under Sec 169(4)' },
        { aspect: 'MCA Filing', col1: 'Form DIR-12 (and optional DIR-11 by director)', col2: 'Form DIR-12 with EGM resolution and minutes' },
        { aspect: 'Processing Time', col1: '2 to 3 Working Days', col2: '15 to 20 Working Days' }
      ]
    },
    comparisonTables: [
      {
        title: 'Voluntary Director Resignation (Sec 168) vs Shareholder Removal (Sec 169)',
        headers: ['Parameter', 'Voluntary Resignation (Section 168)', 'Shareholder Removal (Section 169)'],
        rows: [
          { aspect: 'Initiated By', col1: 'The concerned Director submitting written notice', col2: 'Shareholders holding ≥1% voting power / ₹5L capital' },
          { aspect: 'Approval Required', col1: 'Board Meeting taking note of resignation', col2: 'Special Notice (14 days) + EGM Ordinary Resolution' },
          { aspect: 'Right to be Heard', col1: 'Not applicable (voluntary decision)', col2: 'Mandatory statutory right of representation under Sec 169(4)' },
          { aspect: 'MCA Filing', col1: 'Form DIR-12 (and optional DIR-11 by director)', col2: 'Form DIR-12 with EGM resolution and minutes' },
          { aspect: 'Processing Time', col1: '2 to 3 Working Days', col2: '15 to 20 Working Days' }
        ]
      },
      {
        title: 'Form DIR-12 (Company Side) vs Form DIR-11 (Director Side Notice)',
        headers: ['Feature', 'Form DIR-12 (Filed by Company)', 'Form DIR-11 (Filed by Director)'],
        rows: [
          { aspect: 'Filing Responsibility', col1: 'Mandatory obligation of the Company', col2: 'Optional / Recommended safeguard for the exiting Director' },
          { aspect: 'Filing Deadline', col1: 'Within 30 days of resignation/removal', col2: 'Within 30 days of resignation notice' },
          { aspect: 'Signatory Required', col1: 'Existing Director DSC + Practicing CS certification', col2: 'Exiting Director personal Class 3 DSC' },
          { aspect: 'Primary Purpose', col1: 'Updates company public master data on MCA', col2: 'Official proof that director notified ROC independently' }
        ]
      }
    ],
    lawsGoverning: {
      actName: 'Companies Act, 2013 (Section 168 & 169) & Appointment of Directors Rules, 2014',
      authority: 'Registrar of Companies (ROC), Ministry of Corporate Affairs',
      points: [
        'Section 168 governing resignation of director and effective date of cessation.',
        'Section 169 empowering shareholders to remove a director prior to tenure expiration.',
        'Rule 15 of Companies (Appointment and Qualification of Directors) Rules mandating Form DIR-12.',
        'Rule 16 permitting resigning director to file Form DIR-11 directly with ROC.',
        'Section 403 prescribing ₹100/day late filing penalties for delayed e-form submissions.'
      ],
      penalties: 'Non-filing within 30 days attracts ₹100/day late fee and leaves exiting director liable for company defaults.'
    },
    eligibilityRequirements: {
      intro: 'Applicable for any Private Limited, Public, or OPC entity processing a directorship change:',
      criteria: [
        'Active company registered with Registrar of Companies.',
        'Board must maintain statutory minimum directors post-cessation (2 for Pvt Ltd, 3 for Public).',
        'Valid Class 3 DSC of continuing director and resigning director.'
      ],
      documentsRequired: [
        'Formal Resignation Letter signed by the outgoing director',
        'Certified Copy of Board Resolution taking note of resignation',
        'Notice of Board Meeting and Proof of Dispatch to Directors',
        'Copy of EGM Ordinary Resolution & Special Notice (if removal under Sec 169)',
        'Class 3 Digital Signature Certificate (DSC) of Authorized Continuing Director'
      ]
    },
    processSteps: [
      { step: 1, title: 'Resignation Notice & Board Documentation', desc: 'We verify the resignation letter and draft the Board Resolution taking formal note of director cessation.' },
      { step: 2, title: 'Board Meeting & Resolution Execution', desc: 'The board convenes to pass the resolution and execute certified true copies.' },
      { step: 3, title: 'Form DIR-12 Preparation & CS Certification', desc: 'Our Company Secretaries prepare Form DIR-12 on MCA V3, attach documents, and provide professional CS certification.' },
      { step: 4, title: 'MCA Filing & Master Data Update', desc: 'We submit Form DIR-12, generate official SRN receipt, and verify that the MCA master data reflects cessation.' }
    ],
    postRegistrationCompliance: {
      intro: 'Key steps following director cessation approval:',
      points: [
        'Update the Register of Directors and Key Managerial Personnel (MBP-4) at the registered office.',
        'Notify company bankers to remove the outgoing director signing powers.',
        'Update authorized signatory profiles on the GST, Income Tax, and EPFO/ESIC portals.',
        'Outgoing director may file optional Form DIR-11 with ROC for independent personal protection.'
      ]
    },
    timelines: {
      tat: '2 to 3 Working Days from Document Execution',
      delayFactors: ['Mismatched resignation dates between notice and resolution', 'Expired DSC of continuing director', 'MCA V3 portal validation queues'],
      speedAssurance: 'Our team drafts resolutions within 24 hours to ensure same-week MCA approval.'
    },
    certification: {
      issuingAuthority: 'Ministry of Corporate Affairs (MCA), Government of India',
      validity: 'Permanent Statutory Corporate Record',
      legalSignificance: 'Official government proof confirming complete legal cessation of directorship and liability discharge.',
      contents: [
        'Official MCA Service Request Number (SRN) Challan',
        'Approved Form DIR-12 with ROC Digital Signature',
        'Updated MCA Master Data showing revised Board of Directors',
        'Practicing Company Secretary Certification Endorsement'
      ]
    },
    fees: {
      govtFee: '₹300 to ₹600 (Statutory MCA portal filing fee based on authorized capital)',
      professionalFee: '₹1,499/- only (Complete Board resolution drafting, Form DIR-12 preparation, and CS certification)',
      transparencyNote: 'Fixed price of ₹1499 + Govt. Fee with zero hidden charges.'
    },
    taxation: {
      directTaxImpact: 'Ensures proper transition of personal tax indemnities, removal as authorized signatory for GST/Bank accounts, and clean DIN profile status.',
      gstImplications: 'Requires updating authorized signatory profiles on the GST portal within 15 days via non-core amendment.',
      deductionsOrExemptions: 'Secretarial professional fees are 100% tax-deductible operational business expenses under Section 37(1).'
    },
    whyUs: [
      'Executed directly by practicing Company Secretaries and corporate legal experts.',
      '100% first-pass approval track record across more than 5,000+ DIR-12 filings.',
      'Includes complete secretarial drafting of resignation notices and Board Resolutions.',
      'Comprehensive advisory on filing optional Form DIR-11 for director personal protection.',
      'Fast turnaround within 48 to 72 hours with continuous live status updates.'
    ],
    faqs: [
      {
        q: 'What is the effective date of a director resignation under Section 168?',
        a: 'The resignation takes effect on the date on which the written notice is received by the company, or the specific future date specified by the director in the notice, whichever is later.'
      },
      {
        q: 'What is the statutory deadline for the company to file Form DIR-12 with the ROC?',
        a: 'The company must file Form DIR-12 with the Registrar of Companies within 30 days of the effective date of resignation or removal.'
      },
      {
        q: 'Is it mandatory for the resigning director to also file Form DIR-11?',
        a: 'Form DIR-11 is optional for the director under amended MCA rules, but highly recommended as it provides independent documentary proof to the ROC that the director has stepped down.'
      },
      {
        q: 'Can a Private Limited Company operate with only 1 director after resignation?',
        a: 'No. Section 149(1) mandates a minimum of 2 directors for a Private Limited Company. If a resignation reduces the board below 2, a new director must be appointed simultaneously.'
      },
      {
        q: 'Is the resigning director liable for company defaults after stepping down?',
        a: 'No. The director remains liable only for offenses and defaults committed during their tenure. Timely filing of Form DIR-12 protects them from all post-resignation liabilities.'
      },
      {
        q: 'How do I start the Director Removal / Resignation process with Akshay B2B Solutions?',
        a: 'Click "Process Director Removal" or contact our CS desk at contact@akshayb2bsolutions.com / +91 97180 04839 for same-day resolution drafting.'
      }
    ],
    relatedServices: [
      { name: 'Pvt Ltd Company Compliances', desc: 'Annual Form AOC-4 & MGT-7 ROC filings and statutory minutes.', price: '₹7999 + Govt. Fee' },
      { name: 'Company Address Change', desc: 'MCA Form INC-22 filing for registered office relocation.', price: '₹2499 + Govt. Fee' },
      { name: 'Strike off Company', desc: 'Fast-track company closure under Form STK-2.', price: '₹11999 + Govt. Fee' },
      { name: 'Winding Up Pvt Ltd', desc: 'Formal corporate liquidation and asset distribution.', price: '₹11999 + Govt. Fee' },
      { name: 'Corporate Tax', desc: 'MAT calculations, advance tax planning, and Form ITR-6 filing.', price: '₹2499 + Govt. Fee' },
      { name: 'Accounting and Bookkeeping', desc: 'Professional ledger maintenance, bank reconciliation, and P&L sheets.', price: 'Custom Quote' }
    ]
  },

  // 16. Strike off Company — ₹11999 + Govt. Fee
  {
    slug: 'strike-off-company',
    name: 'Strike off Company',
    category: 'Modification in Company',
    parentCategory: 'Tax & Compliance',
    price: '₹11999',
    priceType: 'fixed',
    priceDisplay: '₹11999 + Govt. Fee',
    heroPriceHook: 'Fast Track Exit (FTE) via Form STK-2 under Section 248 | ₹11999 + Govt. Fee',
    specialCallout: 'Section 248 Fast Track Exit (FTE) Closure Framework',
    urgencyText: 'Close defunct companies legally and stop recurring MCA compliance fines',
    ctaText: 'Close Company (Strike Off)',
    metaTitle: 'Strike off Company Online @ ₹11999 | Form STK-2 Fast Track Exit MCA',
    metaDescription: 'Close your defunct Private Limited Company legally through Fast Track Exit Form STK-2 at ₹11999 + Govt. Fee. CA statement of accounts, STK-3 indemnity bonds, and ROC dissolution.',
    seoKeywords: [
      'strike off company online',
      'Form STK-2 filing',
      'fast track exit company closure',
      'strike off company ₹11999',
      'close defunct private limited company',
      'Section 248 Companies Act',
      'Form STK-7 dissolution certificate'
    ],
    keywords: [
      'strike-off-company',
      'strike-off',
      'company-strike-off',
      'form stk 2',
      'close pvt ltd',
      'fast track exit'
    ],
    heroIntro: 'Strike Off Company (Fast Track Exit via Form STK-2) is the legal procedure under Section 248 of the Companies Act, 2013 to voluntarily close a defunct or in-active company. It allows eligible companies (no operations for 2+ years) to legally dissolve their corporate identity without undergoing lengthy liquidations.',
    keyTags: [
      'Form STK-2',
      'Fast Track Exit (FTE)',
      'Closure of Defunct Company',
      'Section 248',
      'Form STK-7',
      'No Business Operations',
      'Dissolution Certificate'
    ],
    overview: {
      p1: 'Maintaining an inactive or defunct Private Limited Company creates an ongoing compliance liability. Under the Companies Act, 2013, an inactive company that fails to file annual ROC returns (AOC-4 and MGT-7) accumulates compounding late fees of ₹100 per day per form indefinitely, leading to director disqualification and legal prosecution under Section 164(2).',
      p2: 'Section 248(2) of the Companies Act provides a legal, fast-track exit mechanism allowing defunct companies with nil assets and nil liabilities to apply for voluntary strike-off by submitting Form STK-2 to the Registrar of Companies (ROC). Akshay B2B Solutions provides complete financial audit, CA statement of accounts (Form STK-8), indemnity bonds (Form STK-3), affidavits (Form STK-4), and seamless MCA closure.'
    },
    registrationProcessOverview: {
      status: 'Statutory Fast-Track Corporate Dissolution Procedure',
      governingAuthority: 'Registrar of Companies (ROC), Ministry of Corporate Affairs (MCA)',
      summary: 'Extinguishing all assets and liabilities, closing corporate bank accounts, drafting CA-certified Statement of Accounts (STK-8), executing Director Indemnity Bonds (STK-3) & Affidavits (STK-4), passing 75% shareholder special resolution, filing Form STK-2 on MCA V3, and tracking public gazette notification.',
      postApproval: 'Publication of final Dissolution Notice in Form STK-7 in the Official Gazette, extinguishing the company legal entity.',
      assistanceRole: 'Liability clearance audit, CA certification, STK-3/4 legal drafting, Form STK-2 MCA V3 filing, and ROC gazette tracking.'
    },
    whatIs: {
      definition: 'Strike Off Company (Fast Track Exit) is the statutory procedure governed by Section 248 of the Companies Act, 2013 enabling defunct entities to remove their name from the Register of Companies cleanly and legally.',
      points: [
        'Governed by Section 248(2) of Companies Act, 2013 and Companies (Removal of Names) Rules, 2016.',
        'Eligibility: Company must have failed to commence business within 1 year of incorporation, OR not carried on business for 2 preceding financial years.',
        'Nil Assets & Liabilities: Company must extinguish all debts, settle vendor dues, and close all bank accounts.',
        'Shareholder Approval: Requires Special Resolution or consent of 75% members in terms of paid-up share capital.',
        'Form STK-2 Filing: Electronic application submitted on MCA V3 with government fee of ₹10,000.',
        'Public Notice (STK-5) & Gazette Dissolution (STK-7): ROC publishes 30-day public notice prior to final strike-off.'
      ],
      closing: 'It provides a clean, permanent legal closure, liberating directors from compounding compliance burdens.'
    },
    keyCharacteristics: [
      {
        title: 'Form STK-2 Fast Track Filing',
        description: 'Simplified electronic closure application submitted directly to the Registrar of Companies.'
      },
      {
        title: 'Form STK-8 Statement of Accounts',
        description: 'Mandatory statement of assets and liabilities certified by a practicing Chartered Accountant dated not older than 30 days.'
      },
      {
        title: 'Director Indemnity Bonds (STK-3)',
        description: 'Directors provide notarized personal indemnity bonds agreeing to indemnify any future undisclosed liabilities.'
      },
      {
        title: 'Form STK-7 Official Gazette Dissolution',
        description: 'Official notification published by the Ministry confirming final corporate dissolution.'
      }
    ],
    importanceBenefits: {
      intro: 'Executing a formal strike-off through Akshay B2B Solutions delivers total legal closure and peace of mind:',
      benefits: [
        {
          title: 'Permanently Eliminates Annual Compliance Costs',
          desc: 'Save ₹25,000 to ₹50,000 every year in recurring auditor fees, secretarial ROC filings, and accounting expenses.'
        },
        {
          title: 'Stops Compounding MCA Penalties of ₹100/Day',
          desc: 'Prevents accumulating thousands of rupees in statutory late penalties that multiply endlessly on inactive entities.'
        },
        {
          title: 'Protects Directors from Legal Prosecution & Disqualification',
          desc: 'Closes the entity cleanly under official law, preventing ROC officer-in-default notices and Section 164(2) DIN disqualification.'
        },
        {
          title: 'Maintains Clean Professional Track Record',
          desc: 'Leaves a clean, honorable exit record on the MCA public database rather than a forced penal strike-off.'
        },
        {
          title: 'Avoids Expensive Court/NCLT Liquidation Proceedings',
          desc: 'Provides a fast-track administrative route that avoids years of complex and expensive court winding-up processes.'
        }
      ],
      closing: 'It provides complete peace of mind and statutory closure to founders.'
    },
    package: {
      title: 'Strike Off of Company (Fast Track Exit) Package',
      description: 'Complete fast-track company closure assistance to remove compliance burden and recurring fees legally.',
      checklist: [
        'Comprehensive Corporate & Tax Liability Audit',
        'Drafting Board Resolutions & EGM Special Resolution / 75% Consent',
        'Drafting Director Indemnity Bonds (Form STK-3) & Notarization Support',
        'Drafting Director Affidavits (Form STK-4) & Non-Litigation Undertakings',
        'Preparation & Certification of Statement of Accounts (Form STK-8) by CA',
        'Bank Account Closure Certificate Verification',
        'Preparation of MCA Form STK-2 on MCA V3 Portal',
        'Professional Certification by Practicing Company Secretary / CA',
        'Generation of Official MCA Service Request Number (SRN) Receipt'
      ]
    },
    types: [
      {
        title: 'Voluntary Strike Off by Company (Section 248(2))',
        desc: 'Initiated voluntarily by the directors and shareholders filing Form STK-2 after extinguishing all liabilities.',
        eligibility: 'Defunct companies with nil assets & debts'
      },
      {
        title: 'Closure of Never-Commenced Company',
        desc: 'For companies incorporated that failed to commence business within 1 year of incorporation.',
        eligibility: 'Incorporated but never operated'
      },
      {
        title: 'Closure of Inactive Company (2 Years Inactive)',
        desc: 'For companies that operated in the past but had zero business transactions in the preceding 2 financial years.',
        eligibility: '2 years continuous inactivity'
      }
    ],
    comparison: {
      title: 'Fast Track Strike Off (Form STK-2) vs Formal Winding Up (Liquidation)',
      headers: ['Parameter', 'Fast Track Strike Off (Section 248 - STK-2)', 'Formal Winding Up / Liquidation (NCLT)'],
      rows: [
        { aspect: 'Applicability', col1: 'Defunct companies with zero assets & liabilities', col2: 'Companies with active assets, ongoing debts, or shareholder disputes' },
        { aspect: 'Approval Authority', col1: 'Registrar of Companies (ROC) Administrative', col2: 'National Company Law Tribunal (NCLT) Judicial' },
        { aspect: 'Process Duration', col1: '3 to 6 Months', col2: '1 to 3 Years' },
        { aspect: 'Liquidator Requirement', col1: 'Not required (handled directly by CA/CS)', col2: 'Mandatory appointment of Official Company Liquidator' },
        { aspect: 'Cost & Complexity', col1: 'Low fixed cost, simple fast-track process', col2: 'High cost, extensive court hearings and creditor meetings' }
      ]
    },
    comparisonTables: [
      {
        title: 'Fast Track Strike Off (Form STK-2) vs Formal Winding Up (Liquidation)',
        headers: ['Parameter', 'Fast Track Strike Off (Section 248 - STK-2)', 'Formal Winding Up / Liquidation (NCLT)'],
        rows: [
          { aspect: 'Applicability', col1: 'Defunct companies with zero assets & liabilities', col2: 'Companies with active assets, ongoing debts, or shareholder disputes' },
          { aspect: 'Approval Authority', col1: 'Registrar of Companies (ROC) Administrative', col2: 'National Company Law Tribunal (NCLT) Judicial' },
          { aspect: 'Process Duration', col1: '3 to 6 Months', col2: '1 to 3 Years' },
          { aspect: 'Liquidator Requirement', col1: 'Not required (handled directly by CA/CS)', col2: 'Mandatory appointment of Official Company Liquidator' },
          { aspect: 'Cost & Complexity', col1: 'Low fixed cost, simple fast-track process', col2: 'High cost, extensive court hearings and creditor meetings' }
        ]
      },
      {
        title: 'Active Defunct Company Risks vs Voluntarily Struck-Off Status',
        headers: ['Parameter', 'Active Inactive Defunct Company', 'Voluntarily Struck-Off Company'],
        rows: [
          { aspect: 'Annual Filing Burden', col1: 'Mandatory annual AOC-4, MGT-7, and audit expenses', col2: 'Zero future filings or compliance expenses permanently' },
          { aspect: 'Penalty Exposure', col1: 'Accumulating ₹100/day per form indefinitely', col2: 'Zero penalty exposure; entity legally dissolved' },
          { aspect: 'Director Credentials', col1: 'High risk of DIN disqualification and prosecution', col2: 'Clean, unblemished director record on MCA' },
          { aspect: 'Legal Standing', col1: 'Vulnerable to Section 248 ROC show-cause summons', col2: 'Official dissolution order published in Government Gazette' }
        ]
      }
    ],
    lawsGoverning: {
      actName: 'Companies Act, 2013 (Section 248 to 252) & Companies (Removal of Names) Rules, 2016',
      authority: 'Registrar of Companies (ROC) & Ministry of Corporate Affairs',
      points: [
        'Section 248(2) empowering companies to voluntarily apply for strike-off after extinguishing liabilities.',
        'Rule 4 prescribing application in Form STK-2 along with statutory ₹10,000 government fee.',
        'Rule 7 mandating notice publication in Official Gazette and leading newspapers (Form STK-5).',
        'Section 248(1) empowering ROC to suo-motu strike off defaulting companies.',
        'Section 251 prescribing severe personal fraud penalties for fraudulent applications.'
      ],
      penalties: 'Fraudulent strike-off attracts joint and several personal liability and Section 447 criminal fraud proceedings.'
    },
    eligibilityRequirements: {
      intro: 'Conditions required to apply for voluntary strike off under Section 248(2):',
      criteria: [
        'Company must have failed to commence business within 1 year of incorporation, OR not carried on business for 2 preceding financial years.',
        'Must have zero outstanding assets and zero outstanding liabilities.',
        'All bank accounts in the name of the company must be closed.',
        'Must not have pending income tax, GST, or court litigations.',
        'Must obtain consent of 75% members in terms of paid-up share capital.'
      ],
      documentsRequired: [
        'CA-Certified Statement of Accounts in Form STK-8 (dated not older than 30 days)',
        'Indemnity Bond in Form STK-3 executed on non-judicial stamp paper by all directors',
        'Notarized Affidavit in Form STK-4 executed by all directors',
        'Bank Account Closure Certificate / Nil Balance Bank Statement',
        'Certified Copy of Special Resolution or consent of 75% shareholders',
        'Class 3 Digital Signature Certificate (DSC) of Director & Practicing CS'
      ]
    },
    processSteps: [
      { step: 1, title: 'Liabilities Clearance & Bank Closure', desc: 'We review balance sheets, assist in clearing residual assets/liabilities, and verify bank account closure.' },
      { step: 2, title: 'Statement of Accounts & Legal Drafting', desc: 'Our CA prepares the certified Form STK-8 Statement of Accounts, and we draft STK-3 Indemnity Bonds and STK-4 Affidavits.' },
      { step: 3, title: 'Board & Shareholder Approvals', desc: 'We draft the certified Board Resolution and EGM Special Resolution / 75% shareholder consent letters.' },
      { step: 4, title: 'Form STK-2 Filing & ROC Gazette Tracking', desc: 'Our Company Secretaries prepare Form STK-2 on MCA V3, certify, submit, and track the filing through public gazette notification to final dissolution.' }
    ],
    postRegistrationCompliance: {
      intro: 'Key steps following STK-2 filing:',
      points: [
        'ROC issues public notice in Form STK-5 inviting objections from the public and tax authorities (30-day window).',
        'ROC verifies NOC from Income Tax Department and GST Department.',
        'ROC publishes final notice of dissolution in Form STK-7 in the Official Gazette.',
        'Company is officially struck off and ceases to exist as a corporate legal entity.'
      ]
    },
    timelines: {
      tat: '10 to 15 Days for MCA Submission | 3 to 6 Months for ROC Gazette Dissolution',
      delayFactors: ['Pending tax assessments or open IT/GST litigations', 'Delay in obtaining bank closure certificates', 'Objections raised during STK-5 public notice period'],
      speedAssurance: 'Our team performs comprehensive pre-filing tax reconciliations to guarantee objection-free ROC approvals.'
    },
    certification: {
      issuingAuthority: 'Registrar of Companies (ROC), Ministry of Corporate Affairs',
      validity: 'Permanent Corporate Dissolution',
      legalSignificance: 'Official government publication in the Gazette of India confirming dissolution of corporate entity.',
      contents: [
        'Official MCA Service Request Number (SRN) Receipt for Form STK-2',
        'Public Notice in Form STK-5 published on MCA portal',
        'Final Notice of Striking Off and Dissolution in Form STK-7',
        'Official Gazette of India Notification Extract'
      ]
    },
    fees: {
      govtFee: '₹10,000 (Statutory MCA portal filing fee for Form STK-2)',
      professionalFee: '₹11,999/- only (Complete CA statement of accounts STK-8, STK-3 bonds, STK-4 affidavits, STK-2 filing, and CS certification)',
      transparencyNote: 'Clear fixed fee of ₹11999 + Govt. Fee with zero hidden charges.'
    },
    taxation: {
      directTaxImpact: 'Final income tax clearance, mandatory filing of pending returns, closure of bank accounts, and settlement of all tax dues before initiating STK-2.',
      gstImplications: 'Requires prior surrender and formal cancellation of GST registration via Form GST REG-16 and filing GSTR-10 Final Return.',
      deductionsOrExemptions: 'Strike-off professional fees and stamp duty expenses are deductible in the final period statement of accounts.'
    },
    whyUs: [
      'Executed by senior Chartered Accountants and Practicing Company Secretaries.',
      '100% successful dissolution track record across more than 1,800+ company strike-offs.',
      'Includes CA-certified Form STK-8 Statement of Accounts and complete affidavit drafting.',
      'Comprehensive guidance on bank account closure and GST/tax surrender.',
      'Continuous tracking of ROC public notices until Form STK-7 gazette notification is issued.'
    ],
    faqs: [
      {
        q: 'Can a company with pending bank loans or creditor debts apply for Strike Off?',
        a: 'No. Under Section 248, a company must extinguish all its debts and liabilities, settle with creditors, and close all bank accounts before applying for strike-off via Form STK-2.'
      },
      {
        q: 'What is the government fee for filing Form STK-2 on the MCA portal?',
        a: 'The statutory MCA portal filing fee for Form STK-2 is ₹10,000.'
      },
      {
        q: 'How long does the entire strike-off process take until final dissolution?',
        a: 'We prepare and submit Form STK-2 within 10-15 working days. The ROC then issues a public notice (STK-5) for 30 days, and the final dissolution notice (STK-7) is published in the Official Gazette within 3 to 6 months.'
      },
      {
        q: 'What happens to the company bank account during strike-off?',
        a: 'All company bank accounts must be formally closed, with nil balance, and a Bank Account Closure Certificate must be attached to Form STK-2.'
      },
      {
        q: 'Is it necessary to file past pending annual returns before applying for strike-off?',
        a: 'Under current MCA guidelines, companies that never commenced business or have been inactive for 2 years can file STK-2 provided all basic statutory criteria and zero liability conditions are verified by a CA.'
      },
      {
        q: 'How do I start the Strike Off process with Akshay B2B Solutions?',
        a: 'Click "Close Company (Strike Off)" or contact our corporate legal desk at contact@akshayb2bsolutions.com / +91 97180 04839 for a free liability assessment.'
      }
    ],
    relatedServices: [
      { name: 'Winding Up Pvt Ltd', desc: 'Formal corporate liquidation and asset distribution.', price: '₹11999 + Govt. Fee' },
      { name: 'GST Cancellation & Surrender', desc: 'Form GST REG-16 filing and Final GSTR-10 closure return.', price: '₹999 + Govt. Fee' },
      { name: 'Removal of Director', desc: 'Form DIR-12 filing for director resignation or removal.', price: '₹1499 + Govt. Fee' },
      { name: 'Income Tax Return Filing', desc: 'Accurate tax computation and e-filing for businesses and founders.', price: '₹999' },
      { name: 'Pvt Ltd Company Compliances', desc: 'Annual Form AOC-4 & MGT-7 ROC filings and statutory minutes.', price: '₹7999 + Govt. Fee' },
      { name: 'Corporate Tax', desc: 'MAT calculations, advance tax planning, and Form ITR-6 filing.', price: '₹2499 + Govt. Fee' }
    ]
  },

  // 17. Winding Up Pvt Ltd — ₹11999 + Govt. Fee
  {
    slug: 'winding-up-pvt-ltd',
    name: 'Winding Up Pvt Ltd',
    category: 'Modification in Company',
    parentCategory: 'Tax & Compliance',
    price: '₹11999',
    priceType: 'fixed',
    priceDisplay: '₹11999 + Govt. Fee',
    heroPriceHook: 'Formal Corporate Liquidation & Asset Realization (IBC / NCLT) | ₹11999 + Govt. Fee',
    specialCallout: 'Insolvency and Bankruptcy Code (IBC) & Section 59 Voluntary Liquidation',
    urgencyText: 'Orderly realization of assets, settlement of creditors & formal dissolution',
    ctaText: 'Initiate Winding Up',
    metaTitle: 'Winding Up of Pvt Ltd Company @ ₹11999 | Voluntary Liquidation IBC Sec 59',
    metaDescription: 'Complete legal process for voluntary winding up and liquidation of Private Limited Company under Section 59 of IBC at ₹11999 + Govt. Fee. Liquidator appointment, asset distribution, and NCLT order.',
    seoKeywords: [
      'winding up pvt ltd company',
      'voluntary liquidation IBC Section 59',
      'company winding up ₹11999',
      'corporate liquidation process India',
      'insolvency and bankruptcy code liquidation',
      'liquidator appointment MCA',
      'NCLT dissolution order'
    ],
    keywords: [
      'winding-up-pvt-ltd',
      'winding-up-company',
      'company winding up',
      'voluntary liquidation',
      'ibc section 59',
      'liquidator appointment'
    ],
    heroIntro: 'Winding Up a Private Limited Company is the formal legal process of liquidating a company\'s assets, settling all outstanding debts, paying off tax liabilities, and distributing residual capital to shareholders under the Insolvency and Bankruptcy Code (IBC) or Companies Act. It is necessary when a business has active assets/liabilities that cannot use simple strike-off.',
    keyTags: [
      'Company Liquidation',
      'Voluntary Winding Up',
      'Insolvency & Bankruptcy Code',
      'Official Liquidator',
      'Settlement of Liabilities',
      'Court/NCLT Procedure'
    ],
    overview: {
      p1: 'When a company holds significant assets, ongoing commercial contracts, active creditors, or substantial capital reserves, it cannot use the simplified fast-track strike-off (STK-2) mechanism. Instead, it must undergo formal Voluntary Liquidation under Section 59 of the Insolvency and Bankruptcy Code, 2016 (IBC) read with the IBBI (Voluntary Liquidation Process) Regulations, 2017.',
      p2: 'Winding up involves a structured statutory procedure: executing a Declaration of Solvency by majority directors, appointing an Insolvency Professional as Company Liquidator, realizing corporate assets, settling verified creditor claims, paying statutory taxes, distributing residual proceeds to shareholders, and securing a final Dissolution Order from the National Company Law Tribunal (NCLT). Akshay B2B Solutions provides comprehensive legal, secretarial, and liquidation management.'
    },
    registrationProcessOverview: {
      status: 'Statutory Judicial / Quasi-Judicial Liquidation Framework',
      governingAuthority: 'Insolvency and Bankruptcy Board of India (IBBI), ROC & NCLT',
      summary: 'Preparing Declaration of Solvency with audited financials and valuation reports, convening EGM to pass special resolution appointing Liquidator, public announcement inviting claims, asset liquidation and creditor settlement, preparing Final Liquidator Report, and filing for NCLT dissolution.',
      postApproval: 'Receipt of Final Dissolution Order from National Company Law Tribunal (NCLT) and ROC master data closure.',
      assistanceRole: 'Declaration of Solvency drafting, Liquidator coordination, claims management, MCA/IBBI e-filing, and NCLT application support.'
    },
    whatIs: {
      definition: 'Winding Up of a Company is the comprehensive legal procedure under Section 59 of IBC where a solvent corporate entity systematically realizes its assets, discharges all creditor obligations, and distributes remaining capital to shareholders under the supervision of a Liquidator.',
      points: [
        'Governed under Section 59 of Insolvency and Bankruptcy Code (IBC), 2016.',
        'Declaration of Solvency: Majority directors verify that company has no debts or will pay debts in full within 3 years.',
        'Shareholder Special Resolution: Passed within 4 weeks of Declaration of Solvency appointing an Insolvency Professional.',
        'Public Announcement: Published in newspapers within 5 days inviting claims from creditors.',
        'Realization & Distribution: Liquidator opens dedicated liquidation bank account, recovers dues, and pays creditors.',
        'Final NCLT Dissolution: Liquidator submits final report to NCLT and ROC for official corporate dissolution order.'
      ],
      closing: 'It provides a transparent, legally unassailable exit for asset-holding corporate enterprises.'
    },
    keyCharacteristics: [
      {
        title: 'Section 59 IBC Voluntary Liquidation',
        description: 'Governed by modern insolvency laws providing a streamlined statutory framework for solvent entities.'
      },
      {
        title: 'Declaration of Solvency by Directors',
        description: 'Directors provide audited balance sheets and valuation reports declaring that the company is fully solvent.'
      },
      {
        title: 'Appointment of Insolvency Professional',
        description: 'An IBBI-registered Liquidator takes charge of company assets, bank accounts, and creditor distributions.'
      },
      {
        title: 'National Company Law Tribunal (NCLT) Order',
        description: 'The company is formally dissolved by an official judicial order passed by the jurisdictional NCLT bench.'
      }
    ],
    importanceBenefits: {
      intro: 'Executing formal winding up with Akshay B2B Solutions secures crucial institutional benefits:',
      benefits: [
        {
          title: 'Structured & Lawful Distribution of Residual Assets',
          desc: 'Enables tax-compliant distribution of accumulated reserves and surplus assets to shareholders.'
        },
        {
          title: 'Absolute Shield Against Future Creditor Litigations',
          desc: 'Public claim invitations and liquidator settlements permanently discharge all creditor and vendor claims.'
        },
        {
          title: 'Complete Corporate Tax & Capital Gains Clearance',
          desc: 'Ensures structured tax clearance on deemed dividend distributions and capital assets realization.'
        },
        {
          title: 'Judicial Finality via NCLT Dissolution Order',
          desc: 'An official NCLT order provides unassailable legal closure that cannot be challenged in lower courts.'
        },
        {
          title: 'End-to-End Legal, Accounting & Insolvency Coordination',
          desc: 'Managed by senior corporate advocates, Chartered Accountants, and registered Insolvency Professionals.'
        }
      ],
      closing: 'It guarantees an orderly, compliant, and legally bulletproof closure for complex corporate entities.'
    },
    package: {
      title: 'Winding Up of Pvt Ltd Company Package',
      description: 'Comprehensive legal and statutory management for corporate liquidation and formal winding up.',
      checklist: [
        'Preparation & Drafting of Declaration of Solvency (Form GNL-2)',
        'Audited Financial Statements & Asset Valuation Structuring',
        'Drafting Board Resolutions & EGM Special Resolution',
        'Appointment of IBBI-Registered Company Liquidator',
        'Public Announcement in Newspapers (Form A) & Claims Management',
        'Asset Realization & Creditor Settlement Structuring',
        'Preparation of Final Liquidator Report & Audit',
        'Submission of Final Filings to ROC, IBBI & NCLT Application Support'
      ]
    },
    types: [
      {
        title: 'Voluntary Winding Up by Members (Section 59 IBC)',
        desc: 'Initiated by solvent companies whose directors confirm total solvency and ability to pay all liabilities.',
        eligibility: 'Solvent companies with assets'
      },
      {
        title: 'Compulsory Winding Up under NCLT',
        desc: 'Initiated by creditors, ROC, or government petition under Section 271 of Companies Act for default or fraud.',
        eligibility: 'Insolvent / Defaulting companies'
      }
    ],
    comparison: {
      title: 'Voluntary Winding Up (Solvent Company) vs Involuntary/Compulsory Winding Up (Creditor Default)',
      headers: ['Parameter', 'Voluntary Winding Up (Section 59 IBC)', 'Compulsory Winding Up (NCLT Petition)'],
      rows: [
        { aspect: 'Company Solvency', col1: 'Company is completely solvent; debts fully discharged', col2: 'Company is insolvent or unable to pay debts' },
        { aspect: 'Initiated By', col1: 'Promoters and Shareholders passing special resolution', col2: 'Creditors, Contributories, or Registrar of Companies (ROC)' },
        { aspect: 'Liquidator Appointment', col1: 'Liquidator appointed directly by Shareholders', col2: 'Official Liquidator appointed by NCLT order' },
        { aspect: 'Management Control', col1: 'Handled in an orderly, cooperative manner with Liquidator', col2: 'Immediate seizure of books and assets by court liquidator' },
        { aspect: 'Timeline & Cost', col1: '6 to 12 Months; predictable professional fees', col2: '2 to 5+ Years; unpredictable heavy litigation costs' }
      ]
    },
    comparisonTables: [
      {
        title: 'Voluntary Winding Up (Solvent Company) vs Involuntary/Compulsory Winding Up (Creditor Default)',
        headers: ['Parameter', 'Voluntary Winding Up (Section 59 IBC)', 'Compulsory Winding Up (NCLT Petition)'],
        rows: [
          { aspect: 'Company Solvency', col1: 'Company is completely solvent; debts fully discharged', col2: 'Company is insolvent or unable to pay debts' },
          { aspect: 'Initiated By', col1: 'Promoters and Shareholders passing special resolution', col2: 'Creditors, Contributories, or Registrar of Companies (ROC)' },
          { aspect: 'Liquidator Appointment', col1: 'Liquidator appointed directly by Shareholders', col2: 'Official Liquidator appointed by NCLT order' },
          { aspect: 'Management Control', col1: 'Handled in an orderly, cooperative manner with Liquidator', col2: 'Immediate seizure of books and assets by court liquidator' },
          { aspect: 'Timeline & Cost', col1: '6 to 12 Months; predictable professional fees', col2: '2 to 5+ Years; unpredictable heavy litigation costs' }
        ]
      },
      {
        title: 'Strike Off (STK-2) vs Formal Liquidation / Winding Up',
        headers: ['Aspect', 'Strike Off (Form STK-2)', 'Formal Winding Up / Liquidation (IBC)'],
        rows: [
          { aspect: 'Asset / Liability Requirement', col1: 'Mandatory NIL assets and NIL liabilities', col2: 'Applicable when company holds active assets, contracts & funds' },
          { aspect: 'Applicability', col1: 'Defunct or inactive companies (2+ years inactive)', col2: 'Any operating company choosing to wind up business' },
          { aspect: 'Liquidator Required', col1: 'No liquidator required', col2: 'Mandatory appointment of IBBI Insolvency Professional' },
          { aspect: 'Final Approval Body', col1: 'Registrar of Companies (ROC)', col2: 'National Company Law Tribunal (NCLT)' }
        ]
      }
    ],
    lawsGoverning: {
      actName: 'Insolvency and Bankruptcy Code, 2016 (Section 59) & Companies Act, 2013',
      authority: 'Insolvency and Bankruptcy Board of India (IBBI), ROC & NCLT',
      points: [
        'Section 59 of IBC, 2016 governing voluntary liquidation proceedings for corporate persons.',
        'IBBI (Voluntary Liquidation Process) Regulations, 2017 prescribing step-by-step procedures.',
        'Section 271 of Companies Act, 2013 providing circumstances for winding up by Tribunal.',
        'Mandatory notification of Liquidator appointment to ROC within 7 days in Form MGT-14 & GNL-2.',
        'Section 59(7) requiring submission of final report to NCLT for dissolution order.'
      ],
      penalties: 'Failure to comply with liquidation procedures leads to personal penalties on directors and liquidators.'
    },
    eligibilityRequirements: {
      intro: 'Corporate entities eligible for Voluntary Winding Up under Section 59 of IBC:',
      criteria: [
        'Solvent Private Limited, Public Limited, or Section 8 Company.',
        'Majority directors able to execute Declaration of Solvency under oath.',
        'Approval of 75% shareholders via Special Resolution (and 2/3rd creditors if debts exist).'
      ],
      documentsRequired: [
        'Audited Financial Statements for preceding 2 Financial Years',
        'Record of Business Operations & Valuation Report of Assets by Registered Valuer',
        'Affidavit of Declaration of Solvency signed by majority directors',
        'Certified Copy of Board Resolution and EGM Special Resolution',
        'Consent letter and authorization from IBBI-Registered Insolvency Professional'
      ]
    },
    processSteps: [
      { step: 1, title: 'Declaration of Solvency & Asset Valuation', desc: 'Majority directors sign the Declaration of Solvency supported by audited balance sheets and valuation reports.' },
      { step: 2, title: 'Shareholder Resolution & Liquidator Appointment', desc: 'An EGM is convened within 4 weeks to pass a special resolution appointing the Insolvency Professional.' },
      { step: 3, title: 'Public Announcement & Asset Realization', desc: 'Liquidator publishes Form A notice in newspapers, collects claims, realizes assets, and settles liabilities.' },
      { step: 4, title: 'Final Report & NCLT Dissolution Order', desc: 'Liquidator prepares the Final Report, submits filings to ROC/IBBI, and files application with NCLT for final dissolution.' }
    ],
    postRegistrationCompliance: {
      intro: 'Key steps following NCLT dissolution order:',
      points: [
        'Submit certified copy of NCLT dissolution order to ROC within 14 days in Form INC-28.',
        'Close the dedicated liquidation bank account following final distributions to shareholders.',
        'Preserve liquidation registers and books of accounts for the statutory 8-year period.',
        'ROC marks the company status as "Dissolved" on the central MCA portal.'
      ]
    },
    timelines: {
      tat: '6 to 12 Months for Complete Voluntary Liquidation & NCLT Dissolution',
      delayFactors: ['Complex asset realization or pending vendor recoveries', 'Pending clearances from Income Tax / GST departments', 'NCLT bench hearing schedules'],
      speedAssurance: 'Our insolvency and CA team drives structured milestones to close the liquidation within the 180-day IBBI target.'
    },
    certification: {
      issuingAuthority: 'National Company Law Tribunal (NCLT) & Registrar of Companies (ROC)',
      validity: 'Permanent Corporate Dissolution',
      legalSignificance: 'Judicial Dissolution Order passed by NCLT extinguishing the corporate legal entity permanently.',
      contents: [
        'Certified Copy of Final Dissolution Order passed by NCLT Bench',
        'Approved Form INC-28 filed with Registrar of Companies',
        'Final Liquidator Report audited and submitted to IBBI & ROC',
        'MCA Master Data Status Extract showing "Dissolved"'
      ]
    },
    fees: {
      govtFee: '₹1,000 to ₹5,000 (ROC / IBBI / NCLT statutory filing fees + newspaper advertisement expenses)',
      professionalFee: '₹11,999/- only (Complete secretarial documentation, Declaration of Solvency, Board/EGM drafting, and regulatory filings)',
      transparencyNote: 'Clear fixed fee of ₹11999 + Govt. Fee with transparent milestone pricing.'
    },
    taxation: {
      directTaxImpact: 'Complete capital gains computation on asset distribution to shareholders, clearance of all pending IT/GST liabilities, and final tax audit clearance certificate.',
      gstImplications: 'Full reconciliation of GST input tax credits and formal cancellation of GSTIN before final report submission.',
      deductionsOrExemptions: 'Liquidation costs and legal expenses are priority deductible distributions from the liquidation estate.'
    },
    whyUs: [
      'Led by seasoned Corporate Advocates, Chartered Accountants, and IBBI Insolvency Professionals.',
      'Extensive track record handling multi-crore voluntary corporate liquidations under IBC.',
      'Comprehensive drafting of Declarations of Solvency, valuation reports, and NCLT petitions.',
      'Proactive liaison with ROC, IBBI, and tax authorities to obtain seamless clearances.',
      'Transparent, milestone-based pricing with zero hidden charges throughout the process.'
    ],
    faqs: [
      {
        q: 'What is the primary difference between Strike Off (STK-2) and Winding Up?',
        a: 'Strike Off (STK-2) is a simple fast-track administrative route for defunct companies with zero assets and zero debts. Winding Up (under IBC Section 59) is a formal liquidation process for companies with active assets, capital reserves, or debts that need to be realized and distributed to shareholders.'
      },
      {
        q: 'Can an insolvent company with unpaid debts apply for Voluntary Liquidation under Section 59?',
        a: 'No. Section 59 is strictly for solvent companies where directors declare under oath that the company has no debts or can pay all debts in full. Insolvent companies must undergo Corporate Insolvency Resolution Process (CIRP) under IBC.'
      },
      {
        q: 'Who is appointed as the Liquidator in Voluntary Winding Up?',
        a: 'The company shareholders must appoint an Insolvency Professional registered with the Insolvency and Bankruptcy Board of India (IBBI).'
      },
      {
        q: 'How are remaining company assets and cash distributed to shareholders?',
        a: 'After settling all creditor claims, liquidation expenses, and tax dues, the Liquidator distributes the surplus proceeds to shareholders in proportion to their shareholding.'
      },
      {
        q: 'Which authority issues the final order dissolving the company?',
        a: 'The National Company Law Tribunal (NCLT) bench having jurisdiction over the registered office passes the final Dissolution Order upon reviewing the Liquidator Final Report.'
      },
      {
        q: 'How do I initiate Winding Up with Akshay B2B Solutions?',
        a: 'Click "Initiate Winding Up" or contact our corporate insolvency team at contact@akshayb2bsolutions.com / +91 97180 04839 for a confidential case assessment.'
      }
    ],
    relatedServices: [
      { name: 'Strike off Company', desc: 'Fast-track company closure under Form STK-2.', price: '₹11999 + Govt. Fee' },
      { name: 'GST Cancellation & Surrender', desc: 'Form GST REG-16 filing and Final GSTR-10 closure return.', price: '₹999 + Govt. Fee' },
      { name: 'Corporate Tax', desc: 'MAT calculations, advance tax planning, and Form ITR-6 filing.', price: '₹2499 + Govt. Fee' },
      { name: 'Accounting and Bookkeeping', desc: 'Professional ledger maintenance, bank reconciliation, and P&L sheets.', price: 'Custom Quote' },
      { name: 'Removal of Director', desc: 'Form DIR-12 filing for director resignation or removal.', price: '₹1499 + Govt. Fee' },
      { name: 'Pvt Ltd Company Compliances', desc: 'Annual Form AOC-4 & MGT-7 ROC filings and statutory minutes.', price: '₹7999 + Govt. Fee' }
    ]
  }
];

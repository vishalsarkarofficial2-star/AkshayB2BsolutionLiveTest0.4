import { ServiceDetailConfig } from './types';

export const CORPORATE_COMPLIANCE_SERVICES: ServiceDetailConfig[] = [
  // 10. Accounting and Bookkeeping — Custom Quote (No Fixed Price)
  {
    slug: 'accounting-and-bookkeeping',
    name: 'Accounting and Bookkeeping',
    category: 'Company Compliances',
    parentCategory: 'Tax & Compliance',
    priceType: 'no_price_show',
    priceDisplay: 'Custom Quote',
    heroPriceHook: 'Custom Plans Based on Transaction Volume — Request a Custom Quote',
    specialCallout: 'Ind AS & Indian GAAP Compliant Accounting Framework',
    urgencyText: 'Maintain accurate ledgers, timely reconciliations & audit readiness',
    ctaText: 'Request Custom Quote',
    metaTitle: 'Accounting & Bookkeeping Services India | Cloud Accounting & Ledgers',
    metaDescription: 'Professional accounting and bookkeeping services for startups, SMEs, and enterprises. Ledger management, bank reconciliation, GST/TDS ledger matching, and P&L sheets.',
    seoKeywords: [
      'accounting and bookkeeping services',
      'outsourced bookkeeping India',
      'cloud accounting Tally Zoho Books',
      'ledger management India',
      'bank reconciliation services',
      'financial statement preparation',
      'monthly accounting retainer'
    ],
    keywords: [
      'accounting-and-bookkeeping',
      'accounting-bookkeeping',
      'accounting services',
      'bookkeeping',
      'ledger management',
      'zoho books tally'
    ],
    heroIntro: 'Accounting and Bookkeeping services provide structured financial recording, ledger management, bank reconciliations, and statutory statement preparation tailored to business scale. Maintaining accurate books ensures full compliance with Indian Accounting Standards (Ind AS), Income Tax Act, and GST laws, enabling accurate financial analysis and audit readiness.',
    keyTags: [
      'Bookkeeping Services',
      'Ledger Management',
      'Tally/Zoho Books',
      'Financial Statements',
      'Bank Reconciliation',
      'Profit & Loss Sheet',
      'Audit Ready Accounts'
    ],
    overview: {
      p1: 'Accounting and Bookkeeping form the foundational backbone of corporate governance, commercial transparency, and regulatory compliance. Under Section 128 of the Companies Act, 2013 and Section 44AA of the Income Tax Act, 1961, every commercial entity is legally required to keep proper books of accounts on an accrual basis with respect to all sums of money received and expended, sales and purchases of goods/services, and all assets and liabilities.',
      p2: 'Inaccurate, incomplete, or delayed bookkeeping leads to statutory penalties under Section 271A of the Income Tax Act, severe disallowance of GST Input Tax Credit (ITC) under Section 16(2), distorted financial visibility, and failed statutory audits. Akshay B2B Solutions delivers scalable, cloud-powered accounting solutions managed by qualified CAs and accountants using modern ERP software.'
    },
    registrationProcessOverview: {
      status: 'Mandatory Continuous Financial & Statutory Maintenance',
      governingAuthority: 'Ministry of Corporate Affairs (MCA), Income Tax Department & GSTN',
      summary: 'Setting up customized chart of accounts, recording purchase and sales invoices, categorizing expenses, reconciling multi-bank and payment gateway accounts, matching GST/TDS ledgers, and compiling periodic MIS statements.',
      postApproval: 'Delivery of month-end trial balances, profit & loss statements, balance sheets, and tax-ready schedules.',
      assistanceRole: 'Chart of accounts setup, daily/monthly data entry, automated bank feed integration, ledger auditing, tax reconciliation, and financial report generation.'
    },
    whatIs: {
      definition: 'Accounting and Bookkeeping is the systematic process of recording, classifying, summarizing, and reporting all financial transactions of an enterprise to establish true business profitability and ensure total statutory tax alignment.',
      points: [
        'Mandatory under Section 128 of the Companies Act, 2013 and Section 44AA of Income Tax Act.',
        'Captures all sales, purchases, operating expenses, asset purchases, and bank inflows/outflows.',
        'Executes regular bank, credit card, and payment gateway (Razorpay, Cashfree, Stripe) reconciliations.',
        'Matches supplier invoices with GSTR-2B to maximize verified Input Tax Credit claims.',
        'Calculates correct TDS deductions across Section 194C, 194J, 194I, and 194Q.',
        'Generates automated monthly Balance Sheets, Profit & Loss Statements, and Cash Flow metrics.'
      ],
      closing: 'It transforms raw transaction data into strategic financial intelligence while ensuring 100% tax and audit readiness.'
    },
    keyCharacteristics: [
      {
        title: 'Accrual-Based Double Entry System',
        description: 'Maintained strictly under the double-entry accounting method recognizing revenues and expenses in the accounting period they occur.'
      },
      {
        title: 'Multi-Software Compatibility',
        description: 'Seamless deployment across leading cloud and desktop platforms including Zoho Books, Tally Prime, QuickBooks, and SAP.'
      },
      {
        title: 'GST & TDS Real-Time Synchronization',
        description: 'Direct alignment between accounting ledgers and statutory tax portals preventing mismatched credits and assessment notices.'
      },
      {
        title: 'Statutory Section 128 Retention',
        description: 'Complete digital archiving of vouchers, invoices, and ledgers for the statutory 8-year retention mandate.'
      }
    ],
    importanceBenefits: {
      intro: 'Partnering with Akshay B2B Solutions for outsourced accounting and bookkeeping delivers unmatched operational advantages:',
      benefits: [
        {
          title: 'Audit-Ready Financial Statements',
          desc: 'Keep accounts perpetually updated and reconciled for statutory MCA audits, tax audits under Section 44AB, and GST audits.'
        },
        {
          title: 'Zero ITC Leakage & Full GST Recovery',
          desc: 'Rigorous reconciliation with GSTR-2B ensures no eligible input tax credit is lost, saving lakhs in working capital.'
        },
        {
          title: 'Significant Cost Savings over In-House Teams',
          desc: 'Eliminate expensive full-time accountant salaries, office overheads, and training costs while accessing senior CA oversight.'
        },
        {
          title: 'Strategic MIS & Cash Flow Visibility',
          desc: 'Receive insightful monthly profit & loss reports, debtor aging analysis, and burn rate metrics to drive growth decisions.'
        },
        {
          title: 'Total Regulatory Penalty Immunity',
          desc: 'Avoid statutory fines under Section 271A of Income Tax and MCA compounding penalties for improper book maintenance.'
        }
      ],
      closing: 'It gives business founders absolute financial clarity and institutional-grade compliance.'
    },
    package: {
      title: 'Accounting and Bookkeeping Custom Package',
      description: 'Customized accounting and bookkeeping solutions tailored to your business volume and software preference.',
      checklist: [
        'Daily/Monthly Ledger Recording',
        'Bank & Credit Card Reconciliation',
        'Accounts Payable & Receivable Tracking',
        'Trial Balance & Balance Sheet Preparation',
        'GST & TDS Ledger Reconciliation',
        'Monthly Financial Health Reports',
        'Vendor Invoicing & Debit/Credit Note Processing',
        'Year-End Statutory Audit Schedule Preparation'
      ]
    },
    types: [
      {
        title: 'Monthly Retainer Accounting',
        desc: 'Continuous ongoing monthly bookkeeping, ledger maintenance, and monthly MIS reporting for active businesses.',
        eligibility: 'Active startups, traders & companies'
      },
      {
        title: 'Quarterly Bookkeeping',
        desc: 'Periodic transaction entry and ledger finalization designed for low-volume or seasonal business operations.',
        eligibility: 'SMEs & consulting firms'
      },
      {
        title: 'Annual Finalization of Accounts',
        desc: 'Year-end consolidation, ledger clean-up, depreciation scheduling, and balance sheet finalization for ITR/ROC filings.',
        eligibility: 'Annual compliance filers'
      },
      {
        title: 'Cloud Accounting (Zoho / QuickBooks / Tally)',
        desc: 'Complete cloud software setup, automated bank feed integration, and multi-user remote access configuration.',
        eligibility: 'Tech-enabled modern enterprises'
      }
    ],
    comparison: {
      title: 'In-House Accountant vs Outsourced Professional Bookkeeping',
      headers: ['Parameter', 'In-House Accountant', 'Outsourced Professional Bookkeeping (Akshay B2B)'],
      rows: [
        { aspect: 'Cost & Overhead', col1: 'High fixed salary, PF/ESI, software licenses, office space', col2: 'Flexible custom monthly fee with zero overhead' },
        { aspect: 'Expertise & Quality', col1: 'Limited to single individual skill level & experience', col2: 'Supervised by senior Chartered Accountants and tax specialists' },
        { aspect: 'Continuity & Attrition', col1: 'High risk of disruption during resignations or leave', col2: '100% uninterrupted business continuity with backup teams' },
        { aspect: 'Tax Integration', col1: 'Requires separate CA for GST, TDS, and ITR filings', col2: 'Integrated accounting, GST return, and corporate tax execution' },
        { aspect: 'Software & Technology', col1: 'Often relies on legacy spreadsheets or single-system desktop', col2: 'Advanced cloud accounting (Zoho/Tally) with real-time dashboards' }
      ]
    },
    comparisonTables: [
      {
        title: 'In-House Accountant vs Outsourced Professional Bookkeeping',
        headers: ['Parameter', 'In-House Accountant', 'Outsourced Professional Bookkeeping (Akshay B2B)'],
        rows: [
          { aspect: 'Cost & Overhead', col1: 'High fixed salary, PF/ESI, software licenses, office space', col2: 'Flexible custom monthly fee with zero overhead' },
          { aspect: 'Expertise & Quality', col1: 'Limited to single individual skill level & experience', col2: 'Supervised by senior Chartered Accountants and tax specialists' },
          { aspect: 'Continuity & Attrition', col1: 'High risk of disruption during resignations or leave', col2: '100% uninterrupted business continuity with backup teams' },
          { aspect: 'Tax Integration', col1: 'Requires separate CA for GST, TDS, and ITR filings', col2: 'Integrated accounting, GST return, and corporate tax execution' },
          { aspect: 'Software & Technology', col1: 'Often relies on legacy spreadsheets or single-system desktop', col2: 'Advanced cloud accounting (Zoho/Tally) with real-time dashboards' }
        ]
      },
      {
        title: 'Cash-Based Accounting vs Accrual-Based Accounting',
        headers: ['Feature', 'Cash-Based Accounting', 'Accrual-Based Accounting (Statutory Standard)'],
        rows: [
          { aspect: 'Revenue Recognition', col1: 'Recorded only when cash is actually received', col2: 'Recorded when earned (invoice raised), regardless of cash receipt' },
          { aspect: 'Expense Recognition', col1: 'Recorded only when cash is actually paid out', col2: 'Recorded when incurred, matching against corresponding revenues' },
          { aspect: 'Statutory Compliance', col1: 'Permitted only for specific small professionals', col2: 'Mandatory for all Companies (Sec 128) and LLPs under MCA rules' },
          { aspect: 'Accuracy of Profitability', col1: 'Distorted by delayed receipts or advance payments', col2: 'Presents true and fair financial position for the specific period' }
        ]
      }
    ],
    lawsGoverning: {
      actName: 'Companies Act, 2013 (Section 128/129) & Income Tax Act, 1961 (Section 44AA)',
      authority: 'Ministry of Corporate Affairs (MCA), National Financial Reporting Authority (NFRA) & CBDT',
      points: [
        'Section 128 of Companies Act mandating books of accounts to be kept at registered office on accrual basis.',
        'Section 129 requiring financial statements to comply with prescribed Indian Accounting Standards (Ind AS).',
        'Section 44AA of Income Tax Act prescribing mandatory maintenance of books for businesses exceeding specified turnover.',
        'Section 271A of Income Tax Act imposing ₹25,000 fine for failure to maintain books of accounts.',
        'Rule 3 of Companies (Accounts) Rules, 2014 requiring accessible digital backups with audit trail (edit log).'
      ],
      penalties: 'Non-compliance attracts monetary fines up to ₹5 Lakhs on company officers and disallowance of tax deductions.'
    },
    eligibilityRequirements: {
      intro: 'Any operating business entity requiring systematic financial accounting and compliance maintenance:',
      criteria: [
        'Private Limited Companies, OPCs, and Public Limited Companies.',
        'Limited Liability Partnerships (LLPs) and Partnership Firms.',
        'Sole Proprietorships, Freelancers, and Professionals.',
        'E-commerce sellers, manufacturers, exporters, and service enterprises.'
      ],
      documentsRequired: [
        'Bank and Credit Card Statements in Excel / PDF format',
        'Sales Invoices, Billing Registers, and POS summaries',
        'Purchase Invoices, Vendor Bills, and Expense Vouchers',
        'GST Return Filed Summaries (GSTR-1, GSTR-3B, GSTR-2B)',
        'TDS Challans, Salary Sheets, and Loan Statements'
      ]
    },
    processSteps: [
      { step: 1, title: 'Workflow Scoping & System Setup', desc: 'We review your transaction volume, configure the chart of accounts, and connect cloud accounting software.' },
      { step: 2, title: 'Transaction Recording & Vouchering', desc: 'Our accountants systematically record all sales, purchases, payments, receipts, and journal entries.' },
      { step: 3, title: 'Bank, GST & TDS Reconciliation', desc: 'We execute bank reconciliations, match GSTR-2B input credits, and verify statutory withholding tax deductions.' },
      { step: 4, title: 'MIS Reporting & CA Review', desc: 'A senior Chartered Accountant audits the ledgers and delivers monthly P&L, balance sheet, and management reports.' }
    ],
    postRegistrationCompliance: {
      intro: 'Ongoing financial stewardship following bookkeeping integration:',
      points: [
        'Review monthly debtor and creditor aging reports to optimize working capital cycles.',
        'Ensure electronic audit trail (edit log) feature remains active in accounting software as per MCA rules.',
        'Provide finalized trial balance and depreciation schedules to statutory auditor for year-end sign-off.',
        'Archive all digital vouchers, supporting receipts, and bank logs for mandatory 8-year retention.'
      ]
    },
    timelines: {
      tat: 'Real-Time / Monthly Retainer Workflow',
      delayFactors: ['Delayed submission of bank statements or invoices', 'Unidentified payment gateway settlements', 'Missing vendor tax invoices'],
      speedAssurance: 'Our dedicated accounting managers close monthly books within 7 working days following the end of each month.'
    },
    certification: {
      issuingAuthority: 'Akshay B2B Solutions Chartered Accountants & MCA/Tax Authorities',
      validity: 'Continuous Annual Retainer Cycle',
      legalSignificance: 'Statutory compliance assurance providing true and fair view of accounts compliant with Ind AS and Indian GAAP.',
      contents: [
        'Classified Trial Balance and General Ledgers',
        'Statement of Profit and Loss (Income Statement)',
        'Balance Sheet with Asset & Liability Schedules',
        'Cash Flow Statement and Bank Reconciliation Statements',
        'GST & TDS Statutory Reconciliation Sheets'
      ]
    },
    fees: {
      govtFee: '₹0 (Accounting service is a professional service; no government portal fee)',
      professionalFee: 'Custom Quote (Tailored precisely to your monthly transaction volume and business complexity)',
      transparencyNote: 'Custom plans based on transaction volume with transparent pricing and zero hidden costs.'
    },
    taxation: {
      directTaxImpact: 'Accurate bookkeeping forms the foundation for ITR filings, MAT calculations, and audit disclosures under Sec 44AB.',
      gstImplications: 'Prevents GST Input Tax Credit (ITC) mismatches, ensuring 100% eligible ITC claims against output liabilities.',
      deductionsOrExemptions: 'Bookkeeping professional fees are 100% tax-deductible operational business expenses under Section 37(1).'
    },
    whyUs: [
      'Led by practicing Chartered Accountants and experienced corporate controllers.',
      'Dedicated compliance manager assigned to your account with guaranteed response times.',
      'Complete mastery of Tally Prime, Zoho Books, QuickBooks, and custom ERP systems.',
      'Seamless integration between bookkeeping, GST returns, TDS filings, and annual ITR.',
      'Strict NDAs and ISO-grade data encryption ensuring 100% confidentiality of financial records.'
    ],
    faqs: [
      {
        q: 'Why should I outsource accounting instead of hiring an in-house accountant?',
        a: 'Outsourcing to Akshay B2B Solutions provides access to a complete team of senior Chartered Accountants and tax specialists at a fraction of the cost of a full-time employee, eliminating employee turnover, recruitment costs, and management overhead.'
      },
      {
        q: 'Is maintenance of books of accounts mandatory for Private Limited Companies?',
        a: 'Yes. Under Section 128 of the Companies Act, 2013, every company must maintain proper books of accounts on an accrual basis using the double-entry system. Failure to do so attracts penalties and officer prosecution.'
      },
      {
        q: 'Which accounting software do you support for bookkeeping?',
        a: 'We work with all leading accounting platforms including Zoho Books, Tally Prime (with audit trail/edit log), QuickBooks, Busy, SAP, and custom cloud ERP systems.'
      },
      {
        q: 'How do you handle GST Input Tax Credit (ITC) reconciliation?',
        a: 'Our team performs line-by-line reconciliation between your purchase ledger and the auto-drafted GSTR-2B report on the GST portal to ensure you claim 100% eligible ITC without claiming mismatched credits.'
      },
      {
        q: 'How frequently will I receive financial performance reports (MIS)?',
        a: 'Under our monthly retainer package, you will receive a comprehensive MIS pack—including Profit & Loss, Balance Sheet, Debtor/Creditor Aging, and Cash Flow Statement—by the 7th to 10th of every month.'
      },
      {
        q: 'How do I get a custom quote for my business accounting?',
        a: 'Click "Request Custom Quote" or contact our advisory desk at contact@akshayb2bsolutions.com / +91 97180 04839 with your monthly transaction volume for an instant tailored proposal.'
      }
    ],
    relatedServices: [
      { name: 'Virtual CFO', desc: 'Strategic executive financial leadership, cash flow planning, and investor MIS.', price: 'Custom Quote' },
      { name: 'Corporate Tax', desc: 'MAT calculations, advance tax planning, and Form ITR-6 filing.', price: '₹2499 + Govt. Fee' },
      { name: 'GST Return', desc: 'Monthly & quarterly GSTR-1 and GSTR-3B filings with 2B reconciliation.', price: '₹500/month' },
      { name: 'TDS Returns', desc: 'Quarterly Form 24Q, 26Q, and 27Q filings with Form 16 generation.', price: '₹599/month' },
      { name: 'Pvt Ltd Company Compliances', desc: 'Annual Form AOC-4 & MGT-7 ROC filings and statutory minutes.', price: '₹7999 + Govt. Fee' },
      { name: 'LLP Firm Annual Compliance', desc: 'Form 11 Annual Return & Form 8 Solvency Statement filings.', price: '₹7999 + Govt. Fee' },
      { name: 'Income Tax Return Filing', desc: 'Accurate tax computation and e-filing for businesses and founders.', price: '₹999' }
    ]
  },

  // 11. LLP Firm Annual Compliance — ₹7999 + Govt. Fee
  {
    slug: 'llp-annual-compliance',
    name: 'LLP Firm Annual Compliance',
    category: 'Company Compliances',
    parentCategory: 'Tax & Compliance',
    price: '₹7999',
    priceType: 'fixed',
    priceDisplay: '₹7999 + Govt. Fee',
    heroPriceHook: 'Complete Annual MCA Filings for LLPs (Form 11 & Form 8) | ₹7999 + Govt. Fee',
    specialCallout: 'Zero Penalty Guarantee — Avoid ₹100/Day Uncapped MCA Late Fees',
    urgencyText: 'Form 11 due by 30th May & Form 8 due by 30th October',
    ctaText: 'File LLP Annual Compliance',
    metaTitle: 'LLP Annual Compliance Online @ ₹7999 | Form 11 & Form 8 Filing MCA',
    metaDescription: 'Complete annual compliance for Limited Liability Partnerships at ₹7999 + Govt. Fee. Form 11 (Annual Return), Form 8 (Statement of Accounts & Solvency), ITR-5, and partner registers.',
    seoKeywords: [
      'LLP annual compliance online',
      'LLP Form 11 filing',
      'LLP Form 8 filing',
      'LLP compliance ₹7999',
      'LLP annual return MCA',
      'LLP late fee penalty waiver',
      'LLP statement of accounts and solvency'
    ],
    keywords: [
      'llp-annual-compliance',
      'llp-firm-annual-compliance',
      'llp compliance',
      'llp form 11',
      'llp form 8',
      'llp annual return'
    ],
    heroIntro: 'LLP Annual Compliance involves filing statutory mandatory returns—Form 11 (Annual Return) and Form 8 (Statement of Accounts & Solvency)—with the Ministry of Corporate Affairs (MCA) under the Limited Liability Partnership Act, 2008. Timely filing avoids heavy per-day penalties and maintains active status on the MCA portal.',
    keyTags: [
      'Form 11 Filing',
      'Form 8 Filing',
      'LLP Annual Return',
      'Solvency Statement',
      'MCA Compliance',
      'Designated Partner Compliance',
      'Late Fee Waiver'
    ],
    overview: {
      p1: 'Every Limited Liability Partnership registered under the Limited Liability Partnership Act, 2008 is mandated by law to complete statutory annual filings with the Registrar of Companies (ROC), Ministry of Corporate Affairs, irrespective of whether the LLP conducted business operations, made a profit, or remained completely dormant during the financial year.',
      p2: 'Under Section 69 of the LLP Act, failing to file Form 11 and Form 8 attracts an exorbitant recurring late fee of ₹100 per day per form with no upper ceiling, quickly accumulating into lakhs of rupees in compounding penalties and resulting in designated partner disqualification. Akshay B2B Solutions provides comprehensive financial statement preparation, Form 11 drafting, Form 8 solvency certification, and seamless MCA V3 e-filing.'
    },
    registrationProcessOverview: {
      status: 'Mandatory Annual MCA Statutory Obligation for all Registered LLPs',
      governingAuthority: 'Registrar of Companies (ROC), Ministry of Corporate Affairs (MCA)',
      summary: 'Preparing statement of assets and liabilities, compiling partner contribution schedules, drafting Form 11 (due 30th May), drafting Form 8 (due 30th October), executing Designated Partners DSC authentication, and filing on MCA V3.',
      postApproval: 'Issuance of official MCA Service Request Number (SRN) Challan confirming compliant status.',
      assistanceRole: 'Financial statement structuring, partner capital reconciliation, e-form preparation, CS/CA certification, DSC signing, and portal submission.'
    },
    whatIs: {
      definition: 'LLP Annual Compliance is the mandatory annual reporting protocol consisting of Form 11 (summary of partners & management) and Form 8 (financial solvency declaration) submitted electronically to the MCA.',
      points: [
        'Form 11 (Annual Return): Due within 60 days of financial year closure (on or before 30th May).',
        'Form 8 (Statement of Accounts & Solvency): Due within 30 days from end of 6 months (on or before 30th October).',
        'Form ITR-5 (Income Tax Return): Due by 31st July (or 31st October if statutory tax audit applies).',
        'DIR-3 KYC: Mandatory annual KYC for all Designated Partners holding DPINs by 30th September.',
        'Audit Mandate: Audit required only if turnover exceeds ₹40 Lakhs or partner contribution exceeds ₹25 Lakhs.',
        'Mandatory even for dormant LLPs with zero revenue or bank transactions.'
      ],
      closing: 'It preserves the legal existence of the LLP, shields partners from uncapped fines, and maintains active status.'
    },
    keyCharacteristics: [
      {
        title: 'Form 11 Annual Return',
        description: 'Comprehensive report detailing partner roster, contribution changes, and business classification due on 30th May.'
      },
      {
        title: 'Form 8 Solvency Statement',
        description: 'Statutory financial statement and solvency declaration by designated partners due on 30th October.'
      },
      {
        title: 'Strict ₹100/Day Penalty Rule',
        description: 'Late filings attract a statutory penalty of ₹100 per day per form without any maximum capping.'
      },
      {
        title: 'Exemption from Mandatory Audit for Small LLPs',
        description: 'LLPs with turnover < ₹40 Lakhs and contribution < ₹25 Lakhs are legally exempt from mandatory audit.'
      }
    ],
    importanceBenefits: {
      intro: 'Filing your LLP annual compliances on time with Akshay B2B Solutions secures vital corporate protections:',
      benefits: [
        {
          title: 'Total Immunity from ₹100/Day Compounding Fines',
          desc: 'Avoid crushing late fees that accumulate at ₹6,000 per month across Form 11 and Form 8 indefinitely.'
        },
        {
          title: 'Protects Designated Partners from Disqualification',
          desc: 'Keeps DPINs active and prevents legal prosecution and de-activation on the MCA master portal.'
        },
        {
          title: 'Maintains Active Corporate Status on MCA',
          desc: 'Ensures the LLP remains in "Active" standing, required by banks, vendors, and tender authorities.'
        },
        {
          title: 'Seamless Access to Bank Loans & Credit Facilities',
          desc: 'Commercial banks strictly demand certified Form 8 and Form 11 filings prior to sanctioning MSME credit.'
        },
        {
          title: 'Enables Smooth Conversion or Future Closure',
          desc: 'An updated compliance record is a mandatory prerequisite for converting to a Pvt Ltd company or voluntary strike-off.'
        }
      ],
      closing: 'It maintains your firm commercial credibility and eliminates regulatory legal jeopardy.'
    },
    package: {
      title: 'LLP Firm Annual Compliance Complete Package',
      description: 'Complete annual filing suite for Limited Liability Partnerships handled by experienced Company Secretaries.',
      checklist: [
        'Financial Statement Preparation & Balance Sheet Finalization',
        'Drafting & E-Filing of Form 11 (Annual Return)',
        'Drafting & E-Filing of Form 8 (Statement of Accounts & Solvency)',
        'Designated Partners DSC Verification & Attestation',
        'DIR-3 KYC Filing for 2 Designated Partners',
        'Income Tax Return (ITR-5) Computation & Filing Support',
        'Partner Capital Account & Profit Sharing Reconciliation',
        'Generation of Official MCA Service Request Number (SRN) Receipts'
      ]
    },
    types: [
      {
        title: 'Standard Annual Compliance for Active LLPs',
        desc: 'End-to-end Form 11, Form 8, and ITR-5 filing for operating LLPs with ongoing commercial transactions.',
        eligibility: 'All active operating LLPs'
      },
      {
        title: 'Dormant LLP Annual Compliances',
        desc: 'Simplified Nil compliance filings for inactive LLPs to preserve active status without incurring late penalties.',
        eligibility: 'Dormant / Inactive LLPs'
      },
      {
        title: 'Audit-Mandatory LLP Annual Filings',
        desc: 'Comprehensive compliance package including statutory CA audit for LLPs crossing ₹40L turnover or ₹25L capital.',
        eligibility: 'Turnover > ₹40L or Capital > ₹25L'
      }
    ],
    comparison: {
      title: 'Form 11 (Annual Return) vs Form 8 (Statement of Accounts & Solvency)',
      headers: ['Parameter', 'Form 11 (Annual Return)', 'Form 8 (Statement of Accounts & Solvency)'],
      rows: [
        { aspect: 'Statutory Due Date', col1: '30th May (within 60 days of FY closure)', col2: '30th October (within 30 days of 6 months post FY)' },
        { aspect: 'Core Purpose', col1: 'Details of partners, contributions, management & penalties', col2: 'Statement of Assets, Liabilities, Income, Expenses & Solvency' },
        { aspect: 'Signatories Required', col1: 'Designated Partners + CS Certification (if turnover > ₹5 Cr)', col2: 'Designated Partners + CA/CS/CMA Certification' },
        { aspect: 'Late Filing Penalty', col1: '₹100 per day until filed', col2: '₹100 per day until filed' },
        { aspect: 'Mandatory Attachments', col1: 'Details of other business entities held by partners', col2: 'Disclosure under MSMED Act, 2006 & Statement of Contingent Liabilities' }
      ]
    },
    comparisonTables: [
      {
        title: 'Form 11 (Due 30th May) vs Form 8 (Due 30th October)',
        headers: ['Parameter', 'Form 11 (Annual Return)', 'Form 8 (Statement of Accounts & Solvency)'],
        rows: [
          { aspect: 'Statutory Due Date', col1: '30th May (within 60 days of FY closure)', col2: '30th October (within 30 days of 6 months post FY)' },
          { aspect: 'Core Purpose', col1: 'Details of partners, contributions, management & penalties', col2: 'Statement of Assets, Liabilities, Income, Expenses & Solvency' },
          { aspect: 'Signatories Required', col1: 'Designated Partners + CS Certification (if turnover > ₹5 Cr)', col2: 'Designated Partners + CA/CS/CMA Certification' },
          { aspect: 'Late Filing Penalty', col1: '₹100 per day until filed', col2: '₹100 per day until filed' },
          { aspect: 'Mandatory Attachments', col1: 'Details of other business entities held by partners', col2: 'Disclosure under MSMED Act, 2006 & Statement of Contingent Liabilities' }
        ]
      },
      {
        title: 'Timely LLP Filing vs Default Status (₹100/day Penalty Rule)',
        headers: ['Compliance Aspect', 'Timely Compliant LLP', 'Defaulted / Delayed LLP'],
        rows: [
          { aspect: 'MCA Late Fee', col1: 'Normal statutory filing fee (₹50 to ₹200)', col2: '₹100 per day compounding per form (₹6,000/month)' },
          { aspect: 'DPIN & Partner Standing', col1: 'Active and clear on public registry', col2: 'Risk of DPIN suspension and legal summons' },
          { aspect: 'Bank Account Operations', col1: 'Smooth, uninterrupted banking and credit lines', col2: 'Accounts flagged during annual KYC and banking audits' },
          { aspect: 'Company Conversion / Strike Off', col1: 'Eligible for fast-track conversion or strike-off', col2: 'Blocked by MCA until all past dues and fines are paid' }
        ]
      }
    ],
    lawsGoverning: {
      actName: 'Limited Liability Partnership Act, 2008 & LLP Rules, 2009',
      authority: 'Registrar of Companies (ROC), Ministry of Corporate Affairs',
      points: [
        'Section 34(4) mandating preparation and filing of Form 8 Statement of Accounts and Solvency.',
        'Section 35 requiring filing of Form 11 Annual Return within 60 days of financial year end.',
        'Section 69 specifying late filing fee of ₹100 per day for every day of default.',
        'Rule 24 of LLP Rules, 2009 governing audit requirements and maintenance of books.',
        'Rule 12A prescribing annual DIR-3 KYC compliance for all designated partners.'
      ],
      penalties: 'Defaulting LLPs face uncapped ₹100/day late fees, and partners face personal fines from ₹10,000 to ₹1,00,000.'
    },
    eligibilityRequirements: {
      intro: 'All Limited Liability Partnerships registered in India must complete annual filings:',
      criteria: [
        'Active LLP registered with Registrar of Companies under LLP Act, 2008.',
        'Minimum two Designated Partners with active DPINs and Class 3 DSCs.',
        'Applicable even if the LLP was incorporated on or before 30th September of the relevant financial year.'
      ],
      documentsRequired: [
        'LLP Agreement & Any Supplementary Amendment Deeds',
        'Bank Statements for the entire financial year',
        'Purchase and Sales Invoices / Statement of Revenue',
        'Proof of Partner Capital Contributions and Withdrawals',
        'Class 3 Digital Signature Certificates (DSC) of Designated Partners',
        'Copy of Filed GST Returns & Previous Year ITR-5 (if applicable)'
      ]
    },
    processSteps: [
      { step: 1, title: 'Financial Compilation & Partner Ledger Review', desc: 'We compile your annual accounts, reconcile partner capital contributions, and draft the balance sheet.' },
      { step: 2, title: 'Form 11 Annual Return Preparation', desc: 'We prepare Form 11 detailing partner rosters and business activities, executing DSC verification for 30th May filing.' },
      { step: 3, title: 'Form 8 Solvency Statement Drafting', desc: 'Our team drafts the Statement of Accounts & Solvency, obtains CA/CS certification, and files on MCA V3 by 30th October.' },
      { step: 4, title: 'ITR-5 Filing & SRN Generation', desc: 'We finalize partnership tax computations, file Form ITR-5 with Income Tax, and deliver official MCA SRN challans.' }
    ],
    postRegistrationCompliance: {
      intro: 'Key steps following successful LLP annual compliance completion:',
      points: [
        'Archive all approved MCA SRN receipts and filed Form 11 / Form 8 e-forms in the LLP compliance register.',
        'Ensure all designated partners complete their mandatory annual DIR-3 KYC on or before 30th September.',
        'Update minutes of partner meetings and statutory registers maintained at the registered office.',
        'Plan quarterly advance tax payments for the ongoing financial year.'
      ]
    },
    timelines: {
      tat: '3 to 5 Working Days from Document Submission',
      delayFactors: ['Expired Digital Signature Certificate (DSC) of Designated Partners', 'Unreconciled bank statements or pending partner signatures', 'MCA V3 portal technical outages near deadline dates'],
      speedAssurance: 'Our team initiates filings 30 days before statutory deadlines to guarantee zero penalty risk.'
    },
    certification: {
      issuingAuthority: 'Ministry of Corporate Affairs (MCA), Government of India',
      validity: 'Annual Statutory Clearance for the Financial Year',
      legalSignificance: 'Official government proof confirming complete statutory filing compliance and active corporate standing.',
      contents: [
        'Official MCA Service Request Number (SRN) Challan',
        'Approved Form 11 (Annual Return) with XML Stamp',
        'Approved Form 8 (Statement of Accounts & Solvency)',
        'CA / CS Digital Certification Watermark',
        'Income Tax Return (ITR-5) Electronic Acknowledgement'
      ]
    },
    fees: {
      govtFee: '₹50 to ₹200 per form (Statutory MCA portal filing fee based on contribution capital)',
      professionalFee: '₹7,999/- only (Complete Form 11, Form 8, ITR-5, DIR-3 KYC, and CS certification package)',
      transparencyNote: 'Clear fixed fee of ₹7999 + Govt. Fee with zero hidden charges.'
    },
    taxation: {
      directTaxImpact: 'Includes partner remuneration tax planning, 30% flat income tax liability calculation, partner capital account reconciliation, and mandatory tax audit compliance if turnover exceeds ₹40 Lakhs.',
      gstImplications: 'Ensures turnover reported across Form 8, Form 11, and annual GST returns (GSTR-9) matches with 100% precision.',
      deductionsOrExemptions: 'Compliance fees are 100% tax-deductible expenses under Section 37(1) of the Income Tax Act.'
    },
    whyUs: [
      'Managed directly by qualified Company Secretaries and Chartered Accountants.',
      '100% zero-penalty track record across more than 8,500+ LLP annual filings.',
      'Integrated package covering Form 11, Form 8, partner KYC, and Form ITR-5 income tax return.',
      'Automated reminder systems alerting you 45 days prior to all MCA and tax deadlines.',
      'Comprehensive legal assistance for partnership deed amendments and partner additions.'
    ],
    faqs: [
      {
        q: 'Is it mandatory to file Form 11 and Form 8 if our LLP had zero business activity?',
        a: 'Yes. Even if your LLP had zero revenue, no bank transactions, and remained dormant, filing Form 11 and Form 8 is strictly mandatory under the LLP Act. Non-filing attracts ₹100 per day penalty per form.'
      },
      {
        q: 'What are the statutory due dates for LLP annual filings?',
        a: 'Form 11 (Annual Return) is due by 30th May. Form 8 (Statement of Accounts & Solvency) is due by 30th October. Form ITR-5 (Income Tax) is due by 31st July (or 31st October if audit applies).'
      },
      {
        q: 'What is the penalty for late filing of LLP Form 11 or Form 8?',
        a: 'Under Section 69 of the LLP Act, a statutory late fee of ₹100 per day per form is levied from the day after the due date with no maximum limit.'
      },
      {
        q: 'When is a statutory CA audit mandatory for an LLP in India?',
        a: 'Audit is mandatory only if the LLP aggregate annual turnover exceeds ₹40 Lakhs OR if total partner capital contribution exceeds ₹25 Lakhs.'
      },
      {
        q: 'Do designated partners need to file annual DIR-3 KYC as well?',
        a: 'Yes. Every individual holding a DPIN/DIN must complete their annual DIR-3 KYC on the MCA portal on or before 30th September every year.'
      },
      {
        q: 'How do I start LLP Annual Compliance with Akshay B2B Solutions?',
        a: 'Click "File LLP Annual Compliance" or contact our CS desk at contact@akshayb2bsolutions.com / +91 97180 04839 to upload your financial records for fast-track filing.'
      }
    ],
    relatedServices: [
      { name: 'Pvt Ltd Company Compliances', desc: 'Annual Form AOC-4 & MGT-7 ROC filings and statutory minutes.', price: '₹7999 + Govt. Fee' },
      { name: 'Corporate Tax', desc: 'MAT calculations, advance tax planning, and Form ITR-6 filing.', price: '₹2499 + Govt. Fee' },
      { name: 'Accounting and Bookkeeping', desc: 'Professional ledger maintenance, bank reconciliation, and P&L sheets.', price: 'Custom Quote' },
      { name: 'Income Tax Return Filing', desc: 'Accurate tax computation and e-filing for businesses and founders.', price: '₹999' },
      { name: 'GST Return', desc: 'Monthly & quarterly GSTR-1 and GSTR-3B filings with 2B reconciliation.', price: '₹500/month' },
      { name: 'Virtual CFO', desc: 'Strategic executive financial leadership, cash flow planning, and investor MIS.', price: 'Custom Quote' }
    ]
  },

  // 12. Pvt Ltd Company Compliances — ₹7999 + Govt. Fee
  {
    slug: 'pvt-ltd-company-compliances',
    name: 'Pvt Ltd Company Compliances',
    category: 'Company Compliances',
    parentCategory: 'Tax & Compliance',
    price: '₹7999',
    priceType: 'fixed',
    priceDisplay: '₹7999 + Govt. Fee',
    heroPriceHook: 'Complete Annual ROC Filings (Form AOC-4, MGT-7, AGM & DIR-3 KYC) | ₹7999 + Govt. Fee',
    specialCallout: 'Zero Penalty Guarantee — Prevent Director Disqualification & Strike-Off',
    urgencyText: 'Mandatory AGM within 6 months & AOC-4 filing within 30 days of AGM',
    ctaText: 'File Pvt Ltd Compliances',
    metaTitle: 'Pvt Ltd Company Annual Compliance @ ₹7999 | AOC-4 & MGT-7 ROC Filing',
    metaDescription: 'Complete annual ROC compliance for Private Limited Companies at ₹7999 + Govt. Fee. Form AOC-4, Form MGT-7/MGT-7A, AGM minutes, Board resolutions, DIR-3 KYC, and CS certification.',
    seoKeywords: [
      'Pvt Ltd company compliance',
      'AOC-4 filing online',
      'MGT-7 annual return ROC',
      'Pvt ltd annual compliance ₹7999',
      'ROC annual filing MCA',
      'prevent director disqualification',
      'statutory AGM minutes drafting'
    ],
    keywords: [
      'pvt-ltd-company-compliances',
      'pvt-ltd-compliance',
      'pvt ltd annual compliance',
      'aoc 4 filing',
      'mgt 7 filing',
      'roc annual return'
    ],
    heroIntro: 'Private Limited Company Annual Compliance is a set of statutory filings mandated by the Companies Act, 2013, requiring companies to hold Board Meetings, an AGM, and file AOC-4 (Financial Statements) and MGT-7 (Annual Return) with the ROC. Adherence prevents director disqualification and protects corporate status.',
    keyTags: [
      'Form AOC-4',
      'Form MGT-7',
      'Statutory AGM',
      'Board Meeting Minutes',
      'DIR-3 KYC',
      'ROC Annual Return',
      'Director Disqualification Prevention'
    ],
    overview: {
      p1: 'Every Private Limited Company incorporated under the Companies Act, 2013 is legally obligated to maintain rigorous corporate governance standards, conduct periodic board meetings, convene an Annual General Meeting (AGM), and submit annual statutory returns to the Registrar of Companies (ROC) on the MCA V3 portal.',
      p2: 'Failing to file Form AOC-4 and Form MGT-7 attracts compounding late fees of ₹100 per day per form under Section 403, and continuous default for three consecutive years results in automatic Director Disqualification under Section 164(2) for a period of 5 years, along with suo-motu strike-off of the company. Akshay B2B Solutions provides end-to-end secretarial drafting, financial structuring, and professional CS certification.'
    },
    registrationProcessOverview: {
      status: 'Mandatory Statutory Annual MCA Compliance for all Registered Companies',
      governingAuthority: 'Registrar of Companies (ROC), Ministry of Corporate Affairs (MCA)',
      summary: 'Drafting 4 Board Meeting minutes, preparing AGM Notice and Director Report, compiling financial statements (Balance Sheet, P&L, Notes), preparing Form AOC-4 & MGT-7/MGT-7A, executing Director DSC signatures, and filing on MCA V3.',
      postApproval: 'Generation of official MCA Service Request Number (SRN) Challan and ROC master data update.',
      assistanceRole: 'Secretarial documentation drafting, financial statement structuring, CS attestation, DSC affixation, and portal submission.'
    },
    whatIs: {
      definition: 'Private Limited Company Annual Compliance is the comprehensive statutory framework governing annual reporting, AGM convening, and electronic filing of audited financial statements with the MCA.',
      points: [
        'Form AOC-4: Submission of audited Balance Sheet, Profit & Loss Statement, and Directors’ Report within 30 days of AGM.',
        'Form MGT-7 / MGT-7A: Annual Return detailing shareholding structure, directorships, and transfers within 60 days of AGM.',
        'Statutory Board Meetings: Minimum 4 meetings per calendar year with gap not exceeding 120 days.',
        'Annual General Meeting (AGM): Mandatory annual shareholder meeting held on or before 30th September.',
        'DIR-3 KYC: Mandatory annual KYC filing for all company directors by 30th September.',
        'Statutory Auditor Appointment: Form ADT-1 compliance for auditor tenure management.'
      ],
      closing: 'It preserves the limited liability veil, protects director credentials, and ensures flawless corporate standing.'
    },
    keyCharacteristics: [
      {
        title: 'Form AOC-4 Financial Reporting',
        description: 'Electronic submission of audited financials, auditor report, and director report certified by practicing CS/CA.'
      },
      {
        title: 'Form MGT-7 / MGT-7A Annual Return',
        description: 'Comprehensive management and shareholding return (MGT-7A for Small Companies with turnover < ₹40 Cr).'
      },
      {
        title: 'Section 164(2) Protection',
        description: 'Timely filing protects directors from statutory 5-year disqualification across all Indian companies.'
      },
      {
        title: 'Mandatory Secretarial Registers',
        description: 'Maintenance of statutory registers (Members, Directors, Loans, Charges) at the registered office.'
      }
    ],
    importanceBenefits: {
      intro: 'Managing your Pvt Ltd annual compliances through Akshay B2B Solutions delivers essential commercial safeguards:',
      benefits: [
        {
          title: 'Total Protection from Director Disqualification',
          desc: 'Shields your DIN from being marked "Disqualified" under Section 164(2), preventing debarment from corporate boards.'
        },
        {
          title: 'Eliminates ₹100/Day Compounding MCA Fines',
          desc: 'Avoid accumulating thousands of rupees in statutory late penalties that multiply endlessly on unfiled forms.'
        },
        {
          title: 'Investor & Venture Capital Due Diligence Ready',
          desc: 'Clean, certified MCA master data and up-to-date ROC filings are mandatory for raising VC funding and bank debt.'
        },
        {
          title: 'Immunity from Suo-Motu Company Strike-Off',
          desc: 'Prevents the Registrar of Companies from issuing Section 248 show-cause notices and striking off your company.'
        },
        {
          title: 'Comprehensive Secretarial Drafting Included',
          desc: 'Get professionally drafted Board Resolutions, AGM notices, Directors Reports, and statutory register templates.'
        }
      ],
      closing: 'It guarantees institutional-grade legal compliance and preserves company goodwill.'
    },
    package: {
      title: 'Pvt Ltd Company Compliances Complete Package',
      description: 'End-to-end annual ROC compliance management for Private Limited Companies by corporate CS experts.',
      checklist: [
        'Drafting 4 Board Meeting Notices, Agendas & Minutes',
        'Drafting AGM Notice, Director Report & Shareholder Resolutions',
        'Financial Statement Structuring & Balance Sheet Finalization',
        'Form AOC-4 (Financial Statements) Preparation & MCA Filing',
        'Form MGT-7 / MGT-7A (Annual Return) Preparation & MCA Filing',
        'DIR-3 KYC Filing for 2 Company Directors',
        'Statutory Auditor Appointment (ADT-1 Guidance)',
        'Professional Certification by Practicing Company Secretary (PCS)'
      ]
    },
    types: [
      {
        title: 'Annual Compliance for Small Companies',
        desc: 'Simplified reporting in Form MGT-7A for companies with paid-up capital ≤ ₹4 Cr and turnover ≤ ₹40 Cr.',
        eligibility: 'Small Private Limited Companies'
      },
      {
        title: 'Compliance for Active Venture-Backed Startups',
        desc: 'Advanced secretarial management including share allotment reporting (PAS-3), valuation filings, and investor MIS.',
        eligibility: 'Funded & High-Growth Startups'
      },
      {
        title: 'Dormant Company ROC Filings',
        desc: 'Statutory Nil returns and active status preservation filings for inactive or holding companies.',
        eligibility: 'Dormant / Holding Companies'
      }
    ],
    comparison: {
      title: 'Form AOC-4 (Financials) vs Form MGT-7 (Shareholding & Management Return)',
      headers: ['Parameter', 'Form AOC-4 (Financial Statements)', 'Form MGT-7 / MGT-7A (Annual Return)'],
      rows: [
        { aspect: 'Statutory Due Date', col1: 'Within 30 days of AGM (typically 29th October)', col2: 'Within 60 days of AGM (typically 29th November)' },
        { aspect: 'Core Filing Content', col1: 'Balance sheet, P&L, Directors Report, Auditor Report & CSR', col2: 'Shareholding pattern, director changes, transfers & board meetings' },
        { aspect: 'Small Company Form', col1: 'Form AOC-4', col2: 'Form MGT-7A (Abridged return for small companies)' },
        { aspect: 'Late Fee Penalty', col1: '₹100 per day until filed', col2: '₹100 per day until filed' },
        { aspect: 'Professional Certification', col1: 'Mandatory certification by CA / CS / CMA', col2: 'Small companies self-certified; others CS certified' }
      ]
    },
    comparisonTables: [
      {
        title: 'AOC-4 (Financials) vs MGT-7 (Shareholding & Management Return)',
        headers: ['Parameter', 'Form AOC-4 (Financial Statements)', 'Form MGT-7 / MGT-7A (Annual Return)'],
        rows: [
          { aspect: 'Statutory Due Date', col1: 'Within 30 days of AGM (typically 29th October)', col2: 'Within 60 days of AGM (typically 29th November)' },
          { aspect: 'Core Filing Content', col1: 'Balance sheet, P&L, Directors Report, Auditor Report & CSR', col2: 'Shareholding pattern, director changes, transfers & board meetings' },
          { aspect: 'Small Company Form', col1: 'Form AOC-4', col2: 'Form MGT-7A (Abridged return for small companies)' },
          { aspect: 'Late Fee Penalty', col1: '₹100 per day until filed', col2: '₹100 per day until filed' },
          { aspect: 'Professional Certification', col1: 'Mandatory certification by CA / CS / CMA', col2: 'Small companies self-certified; others CS certified' }
        ]
      },
      {
        title: 'Compliant Company vs Strike-off Risk / Disqualified Director Status',
        headers: ['Compliance Parameter', 'Compliant Private Limited Company', 'Non-Compliant Defaulting Company'],
        rows: [
          { aspect: 'Director DIN Status', col1: '100% Active with high credit credibility', col2: 'Disqualified for 5 years under Sec 164(2); DIN blocked' },
          { aspect: 'Company Master Status', col1: 'Active with unrestricted business capabilities', col2: 'Marked "Active Non-Compliant" or Struck-off under Sec 248' },
          { aspect: 'Financial Penalty', col1: 'Normal statutory MCA fees (₹300 - ₹600)', col2: '₹100/day per form compounding indefinitely' },
          { aspect: 'Bank & Tender Eligibility', col1: 'Eligible for all bank loans, credit lines & tenders', col2: 'Bank accounts frozen; barred from public tenders' }
        ]
      }
    ],
    lawsGoverning: {
      actName: 'Companies Act, 2013 & Companies (Management and Administration) Rules, 2014',
      authority: 'Registrar of Companies (ROC), Ministry of Corporate Affairs (MCA)',
      points: [
        'Section 137 mandating filing of financial statements in Form AOC-4 within 30 days of AGM.',
        'Section 92 requiring filing of annual return in Form MGT-7 / MGT-7A within 60 days of AGM.',
        'Section 164(2) prescribing automatic 5-year director disqualification for continuous 3-year filing default.',
        'Section 403 mandating additional fee of ₹100 per day for delayed e-form filings.',
        'Section 173 mandating minimum 4 board meetings every financial year.'
      ],
      penalties: 'Failure to file attracts ₹100/day per form late fee, company fine up to ₹2 Lakhs, and director disqualification.'
    },
    eligibilityRequirements: {
      intro: 'All Private Limited Companies, OPCs, and Section 8 companies registered in India:',
      criteria: [
        'Active company registered with Registrar of Companies under Companies Act, 2013.',
        'Minimum two directors with active DINs and Class 3 Digital Signature Certificates (DSC).',
        'Audited financial statements signed by statutory auditor.'
      ],
      documentsRequired: [
        'Audited Financial Statements (Balance Sheet, P&L, Auditor Report & Notes)',
        'Directors’ Report with Management Discussion & Analysis',
        'Notice and Minutes of Board Meetings and Annual General Meeting (AGM)',
        'List of Shareholders with Shareholding Pattern and Transfers',
        'Class 3 Digital Signature Certificate (DSC) of 2 Directors and Practicing CS'
      ]
    },
    processSteps: [
      { step: 1, title: 'Secretarial Drafting & Financial Audit Review', desc: 'We draft Board Resolutions, AGM notice, and Directors’ Report, reviewing the audited financial statements.' },
      { step: 2, title: 'Form AOC-4 Preparation & XBRL/PDF Formatting', desc: 'We structure Form AOC-4 with financial attachments, obtaining director and statutory auditor approvals.' },
      { step: 3, title: 'Form MGT-7 / MGT-7A Preparation', desc: 'We compile the annual return with shareholding patterns and director details, completing CS certification.' },
      { step: 4, title: 'MCA V3 E-Filing & DIR-3 KYC Execution', desc: 'We execute DSC signatures, submit forms on MCA V3, complete DIR-3 KYC, and deliver official SRN receipts.' }
    ],
    postRegistrationCompliance: {
      intro: 'Key steps following successful annual ROC compliance filing:',
      points: [
        'Maintain signed physical copies of Form AOC-4 and MGT-7 along with SRN receipts at registered office.',
        'Update Register of Members (MGT-1) and Register of Directors and Key Managerial Personnel (MBP-4).',
        'Verify that the company status remains "Active" on the public MCA master database.',
        'File corporate income tax return in Form ITR-6 on or before 31st October.'
      ]
    },
    timelines: {
      tat: '3 to 5 Working Days from Document Handover',
      delayFactors: ['Pending audit sign-off by statutory auditor', 'Expired director DSCs', 'MCA V3 portal server congestion near October/November due dates'],
      speedAssurance: 'We assign dedicated CS associates to ensure single-pass approvals well before statutory cutoffs.'
    },
    certification: {
      issuingAuthority: 'Ministry of Corporate Affairs (MCA), Government of India',
      validity: 'Annual Statutory Clearance for the Financial Year',
      legalSignificance: 'Official government verification confirming company financial transparency and active corporate standing.',
      contents: [
        'Official MCA Service Request Number (SRN) Challans',
        'Approved Form AOC-4 with ROC Digital Time Stamp',
        'Approved Form MGT-7 / MGT-7A with CS Attestation',
        'DIR-3 KYC Confirmation Acknowledgements',
        'ROC Master Data Verification Extract'
      ]
    },
    fees: {
      govtFee: '₹300 to ₹600 per form (Statutory MCA portal fee based on authorized share capital)',
      professionalFee: '₹7,999/- only (Complete AOC-4, MGT-7, AGM drafting, 2 DIR-3 KYC, and CS certification package)',
      transparencyNote: 'Fixed price of ₹7999 + Govt. Fee with zero hidden charges.'
    },
    taxation: {
      directTaxImpact: 'Alignment with Section 115BAA corporate tax (22% base rate), MAT disclosures, tax audit reports under Section 44AB, and statutory reporting of related-party transactions.',
      gstImplications: 'Ensures turnover declared in audited financial statements strictly reconciles with annual GST return GSTR-9.',
      deductionsOrExemptions: 'Secretarial and ROC compliance professional fees are 100% tax-deductible operational business expenses.'
    },
    whyUs: [
      'Handled directly by qualified Practicing Company Secretaries and Chartered Accountants.',
      '100% zero-penalty track record across more than 12,000+ corporate annual filings.',
      'Includes complete drafting of 4 Board Meeting minutes, AGM notice, and Directors’ Report.',
      'Complimentary DIR-3 KYC for 2 directors included within the package.',
      'Dedicated compliance manager providing continuous year-round corporate advisory.'
    ],
    faqs: [
      {
        q: 'What is the consequence of not filing Form AOC-4 and MGT-7 on time?',
        a: 'Failing to file on time attracts a compounding late fee of ₹100 per day per form with no maximum cap. If defaulted for 3 consecutive years, all company directors are automatically disqualified for 5 years under Section 164(2).'
      },
      {
        q: 'What are the statutory due dates for Pvt Ltd company annual filings?',
        a: 'The Annual General Meeting (AGM) must be held on or before 30th September. Form AOC-4 must be filed within 30 days of the AGM (by 29th October), and Form MGT-7 must be filed within 60 days of the AGM (by 29th November).'
      },
      {
        q: 'Is annual ROC filing mandatory for a company with no revenue or business activity?',
        a: 'Yes. Even if a Private Limited Company is completely dormant and had zero transactions, holding an AGM and filing Form AOC-4 and MGT-7 is strictly mandatory under the Companies Act.'
      },
      {
        q: 'What is the difference between Form MGT-7 and Form MGT-7A?',
        a: 'Form MGT-7 is the standard annual return for medium and large companies. Form MGT-7A is an abridged, simplified annual return introduced exclusively for Small Companies (capital ≤ ₹4 Cr and turnover ≤ ₹40 Cr) and One Person Companies (OPCs).'
      },
      {
        q: 'What secretarial documents are included in your annual compliance package?',
        a: 'Our package includes professionally drafted notices, agendas, and minutes for 4 Board Meetings, AGM Notice, Chairman Speech, Directors’ Report, AOC-2 related party disclosures, and statutory register templates.'
      },
      {
        q: 'How do I start Pvt Ltd Annual Compliance with Akshay B2B Solutions?',
        a: 'Click "File Pvt Ltd Compliances" or contact our corporate CS team at contact@akshayb2bsolutions.com / +91 97180 04839 to upload your financials for immediate filing.'
      }
    ],
    relatedServices: [
      { name: 'LLP Firm Annual Compliance', desc: 'Form 11 Annual Return & Form 8 Solvency Statement filings.', price: '₹7999 + Govt. Fee' },
      { name: 'Corporate Tax', desc: 'MAT calculations, advance tax planning, and Form ITR-6 filing.', price: '₹2499 + Govt. Fee' },
      { name: 'Accounting and Bookkeeping', desc: 'Professional ledger maintenance, bank reconciliation, and P&L sheets.', price: 'Custom Quote' },
      { name: 'Company Address Change', desc: 'MCA Form INC-22 filing for registered office relocation.', price: '₹2499 + Govt. Fee' },
      { name: 'Removal of Director', desc: 'Form DIR-12 filing for director resignation or removal.', price: '₹1499 + Govt. Fee' },
      { name: 'Virtual CFO', desc: 'Strategic executive financial leadership, cash flow planning, and investor MIS.', price: 'Custom Quote' },
      { name: 'Income Tax Return Filing', desc: 'Accurate tax computation and e-filing for businesses and founders.', price: '₹999' }
    ]
  },

  // 13. Virtual Chief Financial Officer (CFO) — Custom Quote (No Fixed Price)
  {
    slug: 'virtual-cfo',
    name: 'Virtual Chief Financial Officer (CFO)',
    category: 'Company Compliances',
    parentCategory: 'Tax & Compliance',
    priceType: 'no_price_show',
    priceDisplay: 'Custom Quote',
    heroPriceHook: 'Custom Growth Plans — Schedule an Executive Advisory Call for Custom Pricing',
    specialCallout: 'Fractional C-Suite Financial Leadership for Startups & Scale-ups',
    urgencyText: 'Strategic cash flow management, investor reporting & fundraising readiness',
    ctaText: 'Schedule Executive Advisory Call',
    metaTitle: 'Virtual CFO Services India | Fractional CFO for Startups & SMEs',
    metaDescription: 'Executive Virtual CFO services for growing enterprises. Strategic financial planning, cash flow forecasting, investor MIS reporting, budgeting, and corporate governance.',
    seoKeywords: [
      'virtual CFO services India',
      'fractional CFO for startups',
      'outsourced CFO services',
      'strategic financial management',
      'investor pitch financial model',
      'cash flow forecasting CFO',
      'corporate financial governance'
    ],
    keywords: [
      'virtual-cfo',
      'virtual-chief-financial-officer',
      'virtual cfo',
      'fractional cfo',
      'cfo services',
      'financial controller'
    ],
    heroIntro: 'Virtual CFO services provide high-level strategic financial leadership, cash flow oversight, budgeting, investor reporting, and internal compliance controls without the expense of a full-time executive. Designed for growing startups and SMEs, our Virtual CFOs drive corporate strategy and statutory financial governance.',
    keyTags: [
      'Strategic Financial Planning',
      'Cash Flow Management',
      'Investor Pitch & MIS',
      'Budgeting & Forecasting',
      'Compliance Oversight',
      'Fundraising Support'
    ],
    overview: {
      p1: 'As modern startups and SMEs scale, managing financial complexity becomes paramount. While basic accounting records past transactions, a Chief Financial Officer (CFO) looks forward—steering capital allocation, unit economics, runway management, debt structuring, and investor relations.',
      p2: 'Hiring an experienced full-time in-house CFO costs upwards of ₹40 to ₹80 Lakhs annually, which is prohibitive for growth-stage enterprises. Akshay B2B Solutions Virtual CFO service delivers elite, fractional C-Suite financial leadership led by seasoned Chartered Accountants and corporate strategists at a fraction of the cost.'
    },
    registrationProcessOverview: {
      status: 'Strategic Fractional C-Suite Executive Advisory Retainer',
      governingAuthority: 'Corporate Board of Directors, MCA, SEBI & Statutory Tax Authorities',
      summary: 'Conducting initial financial health diagnostic, establishing cash flow runways, structuring budgeting controls, setting up monthly investor MIS dashboards, optimizing corporate tax structures, and leading boardroom discussions.',
      postApproval: 'Delivery of executive financial governance frameworks, investor pitch models, and rolling forecasts.',
      assistanceRole: 'Strategic modeling, burn rate optimization, investor deck support, compliance audit defense, and executive board advisory.'
    },
    whatIs: {
      definition: 'A Virtual CFO (Fractional CFO) is an outsourced executive service that provides high-level financial leadership, commercial strategy, risk governance, and investor relations tailored to growing enterprises.',
      points: [
        'Strategic Financial Planning: Formulates rolling 3-5 year financial forecasts, unit economics, and growth models.',
        'Cash Flow & Runway Management: Optimizes working capital, monitors daily burn rate, and extends cash runway.',
        'Investor MIS & Board Reporting: Designs institutional-grade monthly performance packs for angels and VCs.',
        'Budgeting & Variance Analysis: Establishes departmental budgets and tracks variances to arrest cost overruns.',
        'Fundraising & Due Diligence: Prepares financial models, cap table structuring, and data rooms for seed/Series A/B rounds.',
        'Corporate Governance: Ensures multi-jurisdictional compliance across GST, Income Tax, FEMA, and Companies Act.'
      ],
      closing: 'It empowers founders with institutional financial acumen to scale sustainably and raise capital with confidence.'
    },
    keyCharacteristics: [
      {
        title: 'Fractional & Scalable Engagement',
        description: 'Access top-tier senior CFO expertise on a flexible retainer model that scales seamlessly with your business trajectory.'
      },
      {
        title: 'Predictive Forward-Looking Models',
        description: 'Focuses on predictive budgeting, sensitivity analysis, scenario planning, and cash runway optimization.'
      },
      {
        title: 'Investor-Grade Board Reporting',
        description: 'Standardized monthly MIS packs compliant with global VC/PE reporting benchmarks and metrics.'
      },
      {
        title: '360° Compliance & Tax Governance',
        description: 'Oversees statutory accounting, tax audits, transfer pricing, and ROC secretarial compliance.'
      }
    ],
    importanceBenefits: {
      intro: 'Engaging a Virtual CFO through Akshay B2B Solutions unlocks transformative enterprise advantages:',
      benefits: [
        {
          title: 'Strategic C-Suite Expertise at 80% Lower Cost',
          desc: 'Get access to seasoned corporate CFOs without incurring executive salary packages, stock options, or bonus overheads.'
        },
        {
          title: 'Extended Cash Runway & Burn Control',
          desc: 'Implement disciplined working capital controls, vendor negotiations, and expense rationalization to preserve capital.'
        },
        {
          title: 'Institutional Fundraising & Valuation Readiness',
          desc: 'Build audit-proof financial models, cap tables, and clean data rooms that instill instant confidence in VC investors.'
        },
        {
          title: 'Actionable Real-Time Financial Visibility',
          desc: 'Receive comprehensive unit economics breakdowns (CAC, LTV, Gross Margins, EBITDA) to drive profitable scaling.'
        },
        {
          title: 'Ironclad Regulatory & Tax Risk Mitigation',
          desc: 'Proactively manage corporate tax restructuring, transfer pricing, and statutory compliances to avoid legal exposures.'
        }
      ],
      closing: 'It bridges the gap between basic bookkeeping and high-growth enterprise financial leadership.'
    },
    package: {
      title: 'Virtual Chief Financial Officer (CFO) Package',
      description: 'Strategic, executive-level financial management tailored to your enterprise scale and growth roadmap.',
      checklist: [
        'Dedicated Senior CA/CFO Executive Advisor',
        'Monthly Performance & Investor MIS Reporting',
        'Rolling Budgeting & Cash Flow Forecasting Models',
        'Internal Financial Control (IFC) Setup & SOPs',
        'Vendor & Cost Optimization Analysis',
        'Board Meeting & Investor Presentation Support',
        'Cap Table & Fundraising Due Diligence Preparation',
        'Tax Optimization & Corporate Restructuring Advisory'
      ]
    },
    types: [
      {
        title: 'Startup Scale-Up CFO Package',
        desc: 'Designed for early-stage and seed-funded startups focusing on unit economics, runway tracking, and investor MIS.',
        eligibility: 'Seed & Early-Stage Startups'
      },
      {
        title: 'SME Operational CFO Package',
        desc: 'Tailored for established SMEs requiring working capital optimization, debt restructuring, and internal controls.',
        eligibility: 'Growing SMEs & Manufacturing Units'
      },
      {
        title: 'Pre-Audit & M&A Due Diligence CFO Advisory',
        desc: 'Specialized high-intensity advisory preparing enterprises for Big-4 audits, private equity investment, or acquisition.',
        eligibility: 'Series A/B Companies & M&A Targets'
      }
    ],
    comparison: {
      title: 'Full-Time In-House CFO vs Flexible Virtual CFO Advisory',
      headers: ['Parameter', 'Full-Time In-House CFO', 'Virtual CFO Advisory (Akshay B2B)'],
      rows: [
        { aspect: 'Annual Cost', col1: '₹40 Lakhs to ₹80+ Lakhs CTC + Equity/ESOPs', col2: 'Fractional custom monthly retainer (80% lower cost)' },
        { aspect: 'Experience Breadth', col1: 'Limited to individual prior industry background', col2: 'Backed by collective insights of 50+ CAs, CSs & corporate advisors' },
        { aspect: 'Scalability', col1: 'Fixed commitment; expensive to exit or scale down', col2: 'Flexible engagement; scale hours up or down based on business stage' },
        { aspect: 'Execution Ecosystem', col1: 'Requires separate accounting and compliance staff', col2: 'Integrated with bookkeeping, tax filing, and secretarial execution teams' },
        { aspect: 'Immediate Deployment', col1: 'Takes 3 to 6 months recruitment and notice periods', col2: 'Immediate onboarding within 48 hours with established SOPs' }
      ]
    },
    comparisonTables: [
      {
        title: 'Full-Time In-House CFO vs Flexible Virtual CFO Advisory',
        headers: ['Parameter', 'Full-Time In-House CFO', 'Virtual CFO Advisory (Akshay B2B)'],
        rows: [
          { aspect: 'Annual Cost', col1: '₹40 Lakhs to ₹80+ Lakhs CTC + Equity/ESOPs', col2: 'Fractional custom monthly retainer (80% lower cost)' },
          { aspect: 'Experience Breadth', col1: 'Limited to individual prior industry background', col2: 'Backed by collective insights of 50+ CAs, CSs & corporate advisors' },
          { aspect: 'Scalability', col1: 'Fixed commitment; expensive to exit or scale down', col2: 'Flexible engagement; scale hours up or down based on business stage' },
          { aspect: 'Execution Ecosystem', col1: 'Requires separate accounting and compliance staff', col2: 'Integrated with bookkeeping, tax filing, and secretarial execution teams' },
          { aspect: 'Immediate Deployment', col1: 'Takes 3 to 6 months recruitment and notice periods', col2: 'Immediate onboarding within 48 hours with established SOPs' }
        ]
      },
      {
        title: 'Basic Bookkeeping vs Executive Virtual CFO Strategic Services',
        headers: ['Function', 'Basic Bookkeeping / Accounting', 'Executive Virtual CFO Services'],
        rows: [
          { aspect: 'Time Horizon', col1: 'Historical (records what happened in the past)', col2: 'Forward-Looking (forecasts what will happen in the future)' },
          { aspect: 'Primary Objective', col1: 'Tax compliance, ledger balancing, and vouchers', col2: 'Profitability maximization, valuation growth, and cash runway' },
          { aspect: 'Key Deliverables', col1: 'Trial balance, ledger journals, basic P&L', col2: 'Investor MIS, rolling financial models, unit economics, budgets' },
          { aspect: 'Decision Making', col1: 'Routine transaction processing', col2: 'Active boardroom advisory on M&A, pricing, and capital structure' }
        ]
      }
    ],
    lawsGoverning: {
      actName: 'Companies Act, 2013, Income Tax Act, 1961 & SEBI Regulations',
      authority: 'Board of Directors, Ministry of Corporate Affairs, CBDT & Reserve Bank of India',
      points: [
        'Section 134(5) mandating directors responsibility for internal financial controls.',
        'Section 177 prescribing establishment of audit committees and oversight frameworks.',
        'Section 92 & 137 governance for institutional transparency and disclosure standards.',
        'FEMA regulations for overseas direct investment and foreign direct investment (FDI) inflows.',
        'Transfer pricing provisions under Section 92 of the Income Tax Act.'
      ],
      penalties: 'Inadequate financial controls lead to operational fraud, regulatory fines, and investor litigations.'
    },
    eligibilityRequirements: {
      intro: 'Enterprises seeking high-level financial governance, strategic modeling, and fundraising readiness:',
      criteria: [
        'Early-stage to growth-stage funded startups (Seed, Pre-Series A, Series A/B).',
        'Established SMEs, manufacturing firms, and retail chains scaling operations.',
        'Companies planning institutional debt syndication or equity fundraising.',
        'Enterprises undergoing corporate restructuring, mergers, or joint ventures.'
      ],
      documentsRequired: [
        'Historical Financial Statements (Audited Balance Sheets & P&Ls)',
        'Current Year Detailed Ledgers, Trial Balance, and Bank Accounts',
        'Cap Table & Shareholder Agreements (SHA/SSA if applicable)',
        'Existing Business Model, Revenue Projections, and Unit Economics Data',
        'List of Key Contracts, Debt Obligations, and Vendor Agreements'
      ]
    },
    processSteps: [
      { step: 1, title: 'Financial Diagnostic & Baseline Audit', desc: 'We conduct an in-depth review of existing books, unit economics, cost structures, and compliance health.' },
      { step: 2, title: 'Framework & Dashboard Setup', desc: 'We design custom rolling financial models, cash runway monitors, departmental budgets, and investor MIS dashboards.' },
      { step: 3, title: 'Continuous Executive Governance', desc: 'Your Virtual CFO conducts weekly cash reviews, leads monthly management reviews, and optimizes working capital.' },
      { step: 4, title: 'Board & Investor Representation', desc: 'We prepare board presentations, lead quarterly investor updates, and manage due diligence for fundraising rounds.' }
    ],
    postRegistrationCompliance: {
      intro: 'Ongoing strategic governance following Virtual CFO onboarding:',
      points: [
        'Maintain monthly rolling forecasts and review departmental budget variances.',
        'Conduct monthly financial reviews with the executive leadership team.',
        'Distribute standardized investor updates to stakeholders within 15 days of month end.',
        'Conduct annual internal control audits to prevent financial leakage.'
      ]
    },
    timelines: {
      tat: 'Immediate Onboarding within 48 Hours | Ongoing Retainer',
      delayFactors: ['Delayed handover of past accounting files', 'Unreconciled legacy bank accounts', 'Multiple offline transaction ledgers'],
      speedAssurance: 'Our team deploys initial financial health dashboards and runway trackers within 7 working days.'
    },
    certification: {
      issuingAuthority: 'Akshay B2B Solutions Executive Advisory Panel',
      validity: 'Ongoing Executive Advisory Engagement',
      legalSignificance: 'Institutional-grade corporate financial governance framework and investor-ready reporting.',
      contents: [
        'Executive Monthly MIS & KPI Dashboards',
        '3-5 Year Rolling Financial Forecasting Model',
        'Cap Table & Shareholding Dilution Schedules',
        'Internal Financial Controls (IFC) Manual',
        'Boardroom Presentation Packs & Due Diligence Data Rooms'
      ]
    },
    fees: {
      govtFee: '₹0 (Strategic executive advisory service; no government portal fee)',
      professionalFee: 'Custom Quote (Tailored precisely to your enterprise stage, advisory hours, and complexity)',
      transparencyNote: 'Custom growth plans with flexible monthly retainers and transparent pricing.'
    },
    taxation: {
      directTaxImpact: 'Comprehensive corporate tax restructuring, transfer pricing management, international tax structuring, and compliance alignment for prospective fundraising.',
      gstImplications: 'Optimizes multi-state GST input tax credit flows, inverted duty structure refunds, and export LUT compliance.',
      deductionsOrExemptions: 'Virtual CFO advisory fees are 100% tax-deductible corporate business expenses under Section 37(1).'
    },
    whyUs: [
      'Led by veteran Chartered Accountants with former Big-4 and high-growth startup CFO backgrounds.',
      'Proven track record supporting over 250+ startups in raising angel, VC, and venture debt capital.',
      'End-to-end integration with our in-house accounting, tax filing, and legal secretarial teams.',
      'Hands-on, actionable advisory focused on extending cash runway and improving gross margins.',
      'Strict confidentiality and non-disclosure protocols protecting your proprietary financial models.'
    ],
    faqs: [
      {
        q: 'What is the role of a Virtual CFO in a startup or SME?',
        a: 'A Virtual CFO acts as your strategic financial co-pilot—overseeing cash flow runways, financial forecasting, budgeting, unit economics, investor MIS reporting, fundraising due diligence, and corporate governance.'
      },
      {
        q: 'How does a Virtual CFO differ from a regular accountant?',
        a: 'An accountant focuses backward on historical transaction recording and tax filings. A Virtual CFO looks forward—steering financial strategy, profitability, cash runways, capital allocation, and investor relations.'
      },
      {
        q: 'How many hours of advisory support are included in a Virtual CFO engagement?',
        a: 'Our engagements are customized to your stage—ranging from fractional advisory (10-20 hours/month for early startups) to intensive dedicated financial controllership for growth-stage scale-ups.'
      },
      {
        q: 'Can a Virtual CFO assist with investor pitching and fundraising due diligence?',
        a: 'Yes! We build institutional-grade 3-5 year financial models, design investor pitch decks, structure cap tables, set up virtual data rooms, and actively participate in investor due diligence calls.'
      },
      {
        q: 'Is our company financial data kept secure and confidential?',
        a: 'Absolutely. We execute comprehensive non-disclosure agreements (NDAs) and enforce bank-grade security protocols across all financial models and communication channels.'
      },
      {
        q: 'How do I schedule an executive advisory call for Virtual CFO services?',
        a: 'Click "Schedule Executive Advisory Call" or contact our executive desk directly at contact@akshayb2bsolutions.com / +91 97180 04839 for a strategic consultation.'
      }
    ],
    relatedServices: [
      { name: 'Accounting and Bookkeeping', desc: 'Professional ledger maintenance, bank reconciliation, and P&L sheets.', price: 'Custom Quote' },
      { name: 'Corporate Tax', desc: 'MAT calculations, advance tax planning, and Form ITR-6 filing.', price: '₹2499 + Govt. Fee' },
      { name: 'Pvt Ltd Company Compliances', desc: 'Annual Form AOC-4 & MGT-7 ROC filings and statutory minutes.', price: '₹7999 + Govt. Fee' },
      { name: 'LLP Firm Annual Compliance', desc: 'Form 11 Annual Return & Form 8 Solvency Statement filings.', price: '₹7999 + Govt. Fee' },
      { name: 'Income Tax Return Filing', desc: 'Accurate tax computation and e-filing for businesses and founders.', price: '₹999' },
      { name: 'GST Return', desc: 'Monthly & quarterly GSTR-1 and GSTR-3B filings with 2B reconciliation.', price: '₹500/month' }
    ]
  }
];

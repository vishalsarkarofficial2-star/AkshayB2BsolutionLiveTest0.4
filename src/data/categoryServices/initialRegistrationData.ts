import { ServiceDetailConfig } from './types';

export const INITIAL_REGISTRATION_SERVICES: ServiceDetailConfig[] = [
  {
    slug: 'digital-signature-certificate',
    name: 'Digital Signature Certificate',
    category: 'Initial Registration',
    parentCategory: 'Registration & License',
    priceType: 'fixed',
    priceDisplay: '₹1999',
    heroPriceHook: 'Class 3 Digital Signature Certificate (DSC) at ₹1999 | USB Crypto Token Included + 2-Year Validity',
    specialCallout: 'Paperless Aadhaar Video eKYC',
    urgencyText: 'Instant discount available for 24 hours',
    ctaText: 'Get Started',
    metaTitle: 'Class 3 DSC Online @ ₹1999 | USB Token + Video eKYC Approval',
    metaDescription: 'Buy Class 3 Digital Signature Certificate (DSC) for MCA ROC filings, GST, Income Tax, EPFO, GeM portal & e-Tenders with USB token included.',
    seoKeywords: ['Digital signature certificate', 'Class 3 DSC online', 'DSC USB token', 'e-Tender DSC', 'MCA DSC token', 'Paperless DSC India'],
    heroIntro: 'A Class 3 Digital Signature Certificate (DSC) is a secure, legally recognized electronic identity issued by licensed Certifying Authorities (CAs) under the Information Technology Act, 2000. It authenticates the identity of an individual or authorized corporate signatory for signing digital documents, filing statutory returns on MCA (SPICe+, AOC-4, MGT-7), Income Tax (ITR), GST, EPFO, Trade Marks, and participating in Government e-Tenders and GeM procurement auctions.',
    keyTags: ['Class 3 Encryption', 'FIPS USB Token', 'MCA & Income Tax', 'e-Tendering & GeM', '2-Year Validity'],
    overview: {
      p1: 'A Digital Signature Certificate (DSC) is the electronic equivalent of a physical handwritten signature, backed by high-level 2048-bit asymmetric cryptographic encryption. Under the Information Technology Act, 2000, digital signatures carry full legal admissibility across all Indian judicial courts and statutory regulatory bodies.',
      p2: 'Following CCA (Controller of Certifying Authorities) guidelines, Class 3 is the only authorized DSC class for all commercial, governmental, and personal e-filings in India. Akshay B2B Solutions facilitates 100% paperless Aadhaar/PAN-based video eKYC processing with courier delivery of pre-configured FIPS-compliant USB crypto tokens within 24 to 48 hours.'
    },
    registrationProcessOverview: {
      status: 'Mandatory for Corporate Filings & e-Tendering',
      governingAuthority: 'Controller of Certifying Authorities (CCA), Ministry of Electronics & IT',
      summary: 'Paperless online Aadhaar OTP verification, 20-second video recording confirmation, and certificate generation into a secure USB token.',
      postApproval: 'Dispatch of password-protected FIPS Level 2 USB crypto token containing the active Class 3 Signature & Encryption certificate.',
      assistanceRole: 'Video eKYC assistance, token provisioning, driver installation support, and MCA/IT portal registration.'
    },
    whatIs: {
      definition: 'A Digital Signature Certificate (DSC) is a secure digital key issued by authorized Certifying Authorities that authenticates the identity of the certificate holder for electronic filings.',
      points: [
        'Mandatory Class 3 cryptographic security for all statutory corporate and tax filings.',
        'Available in Signing Only or Combo (Signing + Encryption) variants.',
        'Protected inside a tamper-proof FIPS-certified hardware USB token.',
        'Legally recognized equivalent to physical ink signatures under the IT Act, 2000.',
        'Required for company incorporation, MCA returns, e-Tenders, and Customs ICEGATE.',
        'Issued with standard validity of 2 years or 3 years.'
      ],
      closing: 'It is the essential electronic signature tool for modern digital business operations in India.'
    },
    keyCharacteristics: [
      {
        title: 'Class 3 Apex Standard',
        description: 'Features highest level 2048-bit encryption with mandatory video verification as prescribed by CCA.'
      },
      {
        title: 'FIPS Hardware USB Token',
        description: 'Stored securely inside an encrypted USB token (ePass 2003 Auto, WatchData, or ProxKey) preventing key extraction.'
      },
      {
        title: 'Universal Portal Compatibility',
        description: 'Seamlessly functions across MCA V3, Income Tax e-Filing, GST Portal, EPFO, ESIC, ICEGATE, and GeM.'
      },
      {
        title: 'Signing & Encryption Options',
        description: 'Signing certificate signs digital documents; Encryption certificate encrypts sensitive tender bid values.'
      }
    ],
    importanceBenefits: {
      intro: 'A Class 3 DSC provides indispensable security and compliance advantages:',
      benefits: [
        {
          title: 'Mandatory for Corporate Filings',
          desc: 'Required for signing all MCA e-Forms, director KYC (DIR-3 KYC), annual financial returns (AOC-4), and board resolutions.'
        },
        {
          title: 'Government e-Tender Bidding',
          desc: 'Mandatory requirement to encrypt and submit bids on CPPP (Central Public Procurement Portal), Railways (IREPS), and state tender portals.'
        },
        {
          title: 'Tamper-Proof Document Integrity',
          desc: 'Mathematically seals PDF documents; any alteration to the signed document instantly invalidates the digital signature.'
        },
        {
          title: 'Fast 15-Minute Paperless Issuance',
          desc: 'Zero physical paperwork; instant approval via Aadhaar OTP and brief video recording.'
        },
        {
          title: 'Full Legal Validity in Indian Courts',
          desc: 'Recognized under Section 5 of the Information Technology Act, 2000 as legally binding evidence.'
        }
      ],
      closing: 'It empowers executives and business owners to execute high-value transactions securely from anywhere.'
    },
    package: {
      title: 'Class 3 DSC Complete Package (2-Year Validity)',
      description: 'Includes paperless video eKYC verification, Class 3 certificate, and high-speed USB token with delivery.',
      checklist: [
        'Class 3 Digital Signature Certificate (Individual / Organization)',
        'Paperless Aadhaar OTP & Video eKYC Assistance',
        'FIPS 140-2 Level 2 Certified USB Crypto Token',
        'Signing Certificate (or Combo Signing + Encryption for Tenders)',
        'Free USB Token Driver Installation & Setup Support',
        'MCA Portal (V3) & Income Tax Portal DSC Registration Support',
        '2-Year Full Validity Guarantee',
        'Automated Expiry & Renewal Reminders'
      ]
    },
    types: [
      {
        title: 'Class 3 Individual DSC',
        desc: 'For Company Directors, Designated Partners, Proprietors, CAs, and Taxpayers for MCA, ITR, GST, and EPFO filings.',
        eligibility: 'Individual identity verification'
      },
      {
        title: 'Class 3 Organization DSC',
        desc: 'For Authorized Signatories representing Corporate Companies, LLPs, PSUs, and Govt Departments in high-value e-tendering.',
        eligibility: 'Company authorization letter required'
      },
      {
        title: 'Class 3 Combo (Signing + Encryption)',
        desc: 'Required for e-Tendering, CPPP, IREPS Railways, and GeM portal bids requiring dual authentication.',
        eligibility: 'Tender bidders and vendors'
      }
    ],
    comparison: {
      title: 'Individual DSC vs Organization DSC',
      headers: ['Parameter', 'Individual DSC', 'Organization DSC'],
      rows: [
        { aspect: 'Certificate Name Display', col1: 'Individual Name Only', col2: 'Individual Name + Organization Legal Name' },
        { aspect: 'Primary Usage', col1: 'MCA Filings, Director KYC, ITR, GST', col2: 'High-Value Tenders, CPPP Bidding, Customs ICEGATE' },
        { aspect: 'Documentation Required', col1: 'Aadhaar + PAN (Video eKYC)', col2: 'Aadhaar + PAN + Org Incorporation & Auth Letter' },
        { aspect: 'Validity Options', col1: '2 Years or 3 Years', col2: '2 Years or 3 Years' },
        { aspect: 'USB Token Hardware', col1: 'FIPS Certified Token Included', col2: 'FIPS Certified Token Included' }
      ]
    },
    lawsGoverning: {
      actName: 'Information Technology Act, 2000 (Amended 2008)',
      authority: 'Controller of Certifying Authorities (CCA), Ministry of Electronics & IT',
      points: [
        'Governed under Section 3, 5, and 35 of the Information Technology Act, 2000.',
        'Interoperability guidelines issued by CCA for Class 3 2048-bit RSA encryption.',
        'Mandatory storage in hardware crypto tokens compliant with FIPS 140-2 Level 2 standards.',
        'Legal recognition under Section 65B of the Indian Evidence Act, 1872.',
        'Strict penal provisions for unauthorized use or impersonation under Sections 66C and 66D.'
      ],
      penalties: 'Fraudulent creation or misuse of digital signatures attracts imprisonment up to 3 years and heavy fines.'
    },
    eligibilityRequirements: {
      intro: 'Any Indian citizen, NRI, foreign national, or corporate representative qualifies for a Class 3 DSC:',
      criteria: [
        'Must possess a valid Indian PAN card and Aadhaar card (or Passport for foreign applicants).',
        'Must have an active mobile number linked with Aadhaar for OTP verification.',
        'Must be able to record a 20-second video displaying original ID proofs.'
      ],
      documentsRequired: [
        'PAN Card of Applicant',
        'Aadhaar Card (Linked with active mobile for OTP)',
        'Passport Size Photograph / Live Webcam Capture',
        'Company Incorporation Certificate & Board Resolution (for Organization DSC only)',
        'Latest Bank Statement / GST Certificate of Entity (for Organization DSC only)'
      ]
    },
    processSteps: [
      { step: 1, title: 'Aadhaar OTP & Application Setup', desc: 'We initiate your paperless application; you verify with instant Aadhaar OTP on the secure Certifying Authority portal.' },
      { step: 2, title: '20-Second Video Verification', desc: 'You record a quick 20-second video on your smartphone or webcam reading a 3-digit verification code.' },
      { step: 3, title: 'CA Approval & Token Burning', desc: 'The licensed Certifying Authority verifies and approves the DSC within 15 minutes; we download and encrypt the certificate onto a FIPS USB token.' },
      { step: 4, title: 'Token Dispatch & Remote Setup', desc: 'We ship the USB token via priority courier to your doorstep and provide remote setup assistance on your PC.' }
    ],
    postRegistrationCompliance: {
      intro: 'Best practices for managing your active digital signature token:',
      points: [
        'Register your DSC on the MCA V3 portal, Income Tax portal, and GST portal before first use.',
        'Always keep your token PIN confidential and never share physical tokens.',
        'Never format the USB token directly as it permanently deletes the underlying private keys.',
        'Initiate renewal at least 15 days prior to the 2-year expiration date.'
      ]
    },
    timelines: {
      tat: '15 to 30 Minutes (eKYC Approval) | 24 to 48 Hours (Token Delivery)',
      delayFactors: ['Aadhaar mobile number not active for OTP', 'Unclear audio or lighting in video verification', 'Postal transit to remote pin codes'],
      speedAssurance: 'We offer instant soft copy certificate download support while hardware tokens are in transit.'
    },
    certification: {
      issuingAuthority: 'Licensed Certifying Authorities (eMudhra, Capricorn, VSign, Pantasign) under CCA Govt of India',
      validity: '2 Years (Standard) / 3 Years',
      legalSignificance: 'Conclusive statutory digital proof of signer identity under the Information Technology Act, 2000.',
      contents: ['Subscriber Name', 'Serial Number & Issuer CA', 'Public Encryption Key (2048-bit RSA)', 'Digital Signature of CA', 'Validity Start & End Dates']
    },
    fees: {
      govtFee: 'Nil (Included in professional package fee)',
      professionalFee: '₹1,999 (Complete Class 3 DSC + USB Token + Video eKYC + Doorstep Delivery)',
      transparencyNote: 'All-inclusive price with zero hidden delivery or token charges.'
    },
    taxation: {
      directTaxImpact: 'DSC procurement costs and USB token fees are 100% tax-deductible operational technology expenses under Section 37.',
      gstImplications: 'Attracts 18% GST with complete Input Tax Credit (ITC) available for GST-registered business entities.',
      deductionsOrExemptions: 'No direct tax exemptions, but enables error-free online tax filing and swift TDS refunds.'
    },
    whyUs: [
      'Over 40,000+ Class 3 Digital Signatures issued nationwide.',
      'Paperless 15-minute video verification with zero physical documentation.',
      'Premium FIPS 140-2 Level 2 high-speed USB hardware tokens included.',
      'Free remote desktop driver installation and portal registration support.',
      'Priority express courier delivery to all pin codes across India.'
    ],
    faqs: [
      { q: 'What is a Class 3 Digital Signature Certificate?', a: 'Class 3 is the highest security level DSC issued in India, featuring 2048-bit asymmetric encryption with mandatory video verification. It is mandatory for all MCA, Income Tax, GST, and e-Tender filings.' },
      { q: 'Is the physical USB token included in the ₹1,999 price?', a: 'Yes! The ₹1,999 package includes the Class 3 certificate, FIPS-compliant USB hardware crypto token, driver software, and doorstep courier delivery.' },
      { q: 'How is video eKYC completed?', a: 'You receive a secure link on your smartphone or PC. You record a 20-second video showing your original PAN card and Aadhaar card while reading a 3-digit verification code aloud.' },
      { q: 'Can I use one DSC for both MCA and Income Tax filings?', a: 'Yes. An Individual Class 3 DSC can be registered and used across multiple government portals including MCA V3, Income Tax, GST, EPFO, and TRACES.' },
      { q: 'What is the validity period of the DSC?', a: 'The standard validity of the Class 3 DSC is 2 years from the date of issuance. 3-year validity options are also available.' },
      { q: 'What should I do if I forget my USB token PIN?', a: 'You can use the token management utility on your computer with your administrator PUK code, or contact our support desk for remote token unblocking.' }
    ],
    relatedServices: [
      { name: 'MSME Registration', desc: 'Udyam certificate unlocking government subsidies and bank priority.', price: '₹999' },
      { name: 'Startup India Registration', desc: 'DPIIT startup recognition with 3-year tax exemptions and seed fund access.', price: '₹4,499' },
      { name: 'Trademark Registration', desc: 'Trademark application filing under IP India for brand protection.', price: '₹1,499 + Govt. Fee' },
      { name: 'IEC Registration', desc: 'Mandatory 10-digit Import Export Code from DGFT.', price: '₹1,750' },
      { name: 'GST Registration', desc: 'Mandatory GSTIN registration for trading and service firms.', price: '₹699' },
      { name: 'Pvt Ltd Company Compliances', desc: 'Annual corporate secretarial, tax, and labor compliances.', price: '₹7,999' }
    ]
  },
  {
    slug: 'msme-registration',
    name: 'MSME Registration',
    category: 'Initial Registration',
    parentCategory: 'Registration & License',
    priceType: 'fixed',
    priceDisplay: '₹999',
    heroPriceHook: 'Official Udyam MSME Registration Certificate at ₹999 Only | 100% Online Govt Portal Issuance',
    specialCallout: 'Lifetime Validity Udyam Certificate',
    urgencyText: 'Instant discount available for 24 hours',
    ctaText: 'Get Started',
    metaTitle: 'MSME Udyam Registration Online @ ₹999 | Ministry of MSME Certificate',
    metaDescription: 'Get your official MSME Udyam Registration Certificate online for Micro, Small & Medium enterprises to unlock collateral-free loans, 50% patent/TM subsidy & govt tenders.',
    seoKeywords: ['MSME registration', 'Udyam registration online', 'Udyam certificate portal', 'MSME subsidy India', 'Udyog Aadhaar registration', 'MSME loan benefits'],
    heroIntro: 'MSME Registration (officially known as Udyam Registration) is a permanent digital identity certificate granted by the Ministry of Micro, Small and Medium Enterprises, Government of India. Designed to empower manufacturing and service sector enterprises, holding an authentic 19-digit Udyam Registration Number unlocks collateral-free bank loans under the CGTMSE scheme, 50% government fee subsidies on trademark and patent filings, protection against delayed commercial payments under Section 15 of the MSMED Act, and exclusive access to government public procurement tenders.',
    keyTags: ['Udyam 19-Digit Code', 'Ministry of MSME', 'Collateral-Free CGTMSE Loans', '50% Trademark Subsidy', 'Delayed Payment Protection'],
    overview: {
      p1: 'The Udyam Registration system is the unified online portal introduced by the Government of India on 1st July 2020, replacing the legacy Udyog Aadhaar and EM-I/II frameworks. It classifies enterprises into Micro, Small, and Medium categories based on composite investment in plant/machinery and annual turnover thresholds.',
      p2: 'Holding an active Udyam certificate is indispensable for accessing central government interest subvention schemes, ISO certification subsidies, electricity tariff concessions, and priority sector lending from banks. Akshay B2B Solutions assists business owners in accurate NIC (National Industrial Classification) mapping and instant certificate issuance.'
    },
    registrationProcessOverview: {
      status: 'Voluntary but Highly Recommended',
      governingAuthority: 'Ministry of Micro, Small and Medium Enterprises (MoMSME), Government of India',
      summary: 'Electronic filing on the official Udyam portal with Aadhaar, PAN, GSTIN, bank details, and 5-digit National Industrial Classification (NIC) code mapping.',
      postApproval: 'Issuance of the permanent digital Udyam Registration Certificate containing a verifiable QR code and 19-digit registration number.',
      assistanceRole: 'NIC code classification, financial threshold computation, portal submission, and certificate delivery.'
    },
    whatIs: {
      definition: 'MSME Udyam Registration is a permanent 19-digit digital certificate issued by the Ministry of MSME certifying an enterprise as Micro, Small, or Medium under composite criteria.',
      points: [
        'Unified paperless registration linked with Income Tax (CBDT) and GST databases.',
        'Classifies businesses based on composite Investment & Turnover criteria.',
        'Grants access to collateral-free business loans under CGTMSE up to ₹5 Crores.',
        'Provides 50% discount on government fees for Trademark and Patent applications.',
        'Enforces mandatory 45-day payment statutory protection against delayed buyers.',
        'Features lifetime validity with zero renewal fees.'
      ],
      closing: 'It is the single most powerful regulatory tool for accelerating business growth in India.'
    },
    keyCharacteristics: [
      {
        title: 'Composite Criteria',
        description: 'Classifies units based on both Plant/Machinery Investment and Annual Turnover (excluding export turnover).'
      },
      {
        title: 'Lifetime Validity',
        description: 'The Udyam Registration Number is permanent and valid for life with zero recurring renewal charges.'
      },
      {
        title: 'Single Enterprise Identity',
        description: 'One enterprise can register multiple manufacturing and service activities under one single Udyam registration.'
      },
      {
        title: 'Integrated SAMADHAAN Portal',
        description: 'Direct access to the MSME SAMADHAAN facilitation council for recovering delayed dues with compounding interest.'
      }
    ],
    importanceBenefits: {
      intro: 'Udyam MSME Registration unlocks unprecedented financial and legal benefits:',
      benefits: [
        {
          title: 'Collateral-Free Bank Loans (CGTMSE)',
          desc: 'Eligible for priority sector bank credit without pledging personal property or third-party collateral.'
        },
        {
          title: '50% Trademark & Patent Govt Fee Subsidy',
          desc: 'Saves ₹4,500 on every trademark class application (Govt fee reduced from ₹9,000 to ₹4,500).'
        },
        {
          title: 'Protection from Delayed Payments (45 Days)',
          desc: 'Buyers must pay within 45 days; defaults attract compounding interest at 3x the RBI bank rate.'
        },
        {
          title: 'Government Tender Preferences',
          desc: 'Exemption from Earnest Money Deposit (EMD), tender fee waivers, and reserved 25% quota in public procurement.'
        },
        {
          title: 'Concession on Electricity & ISO Certifications',
          desc: 'Access state electricity bill tariff discounts and direct reimbursement of ISO certification expenses.'
        }
      ],
      closing: 'It provides immediate cost savings and legal leverage from day one of business operations.'
    },
    package: {
      title: 'MSME Udyam Registration Package',
      description: 'End-to-end Udyam portal filing, NIC code mapping, and authentic government certificate generation.',
      checklist: [
        'Composite Investment & Turnover Threshold Audit',
        'National Industrial Classification (NIC) 5-Digit Code Selection',
        'Aadhaar OTP & PAN Data Verification',
        'Udyam Portal Electronic Application Filing',
        'Official 19-Digit Udyam Registration Certificate Issuance',
        'QR-Code Verification & High-Resolution Certificate Delivery',
        'MSME SAMADHAAN Delayed Payment Recovery Guide',
        'Government Subsidy & Bank Loan Scheme Advisory'
      ]
    },
    types: [
      {
        title: 'Micro Enterprise',
        desc: 'Investment in Plant & Machinery ≤ ₹1 Crore AND Annual Turnover ≤ ₹5 Crores.',
        eligibility: 'Investment ≤ ₹1Cr | Turnover ≤ ₹5Cr'
      },
      {
        title: 'Small Enterprise',
        desc: 'Investment in Plant & Machinery ≤ ₹10 Crores AND Annual Turnover ≤ ₹50 Crores.',
        eligibility: 'Investment ≤ ₹10Cr | Turnover ≤ ₹50Cr'
      },
      {
        title: 'Medium Enterprise',
        desc: 'Investment in Plant & Machinery ≤ ₹50 Crores AND Annual Turnover ≤ ₹250 Crores.',
        eligibility: 'Investment ≤ ₹50Cr | Turnover ≤ ₹250Cr'
      }
    ],
    comparison: {
      title: 'Micro vs Small vs Medium MSME Classification',
      headers: ['Parameter', 'Micro Enterprise', 'Small Enterprise', 'Medium Enterprise'],
      rows: [
        { aspect: 'Max Investment (Plant/Machinery)', col1: 'Up to ₹1 Crore', col2: 'Up to ₹10 Crores', col3: 'Up to ₹50 Crores' },
        { aspect: 'Max Annual Turnover', col1: 'Up to ₹5 Crores', col2: 'Up to ₹50 Crores', col3: 'Up to ₹250 Crores' },
        { aspect: 'Export Turnover Treatment', col1: 'Excluded from Turnover calculation', col2: 'Excluded from Turnover calculation', col3: 'Excluded from Turnover calculation' },
        { aspect: 'Trademark Fee Discount', col1: '50% Discount (₹4,500 vs ₹9,000)', col2: '50% Discount (₹4,500 vs ₹9,000)', col3: '50% Discount (₹4,500 vs ₹9,000)' },
        { aspect: 'Govt Tender EMD Exemption', col1: '100% EMD Waiver', col2: '100% EMD Waiver', col3: '100% EMD Waiver' }
      ]
    },
    lawsGoverning: {
      actName: 'Micro, Small and Medium Enterprises Development (MSMED) Act, 2006',
      authority: 'Ministry of Micro, Small and Medium Enterprises, Government of India',
      points: [
        'Enacted under MSMED Act, 2006 and Gazette Notification S.O. 2119(E) dated 26th June 2020.',
        'Section 15 mandates payment within 45 days for goods and services supplied by registered MSMEs.',
        'Section 16 imposes compound interest with monthly rests at three times the RBI bank rate for defaults.',
        'Public Procurement Policy for MSEs Order, 2012 mandating 25% annual procurement by Central Ministries/PSUs.',
        'Integration with Section 43B(h) of Income Tax Act disallowing buyer expense deductions if MSME dues unpaid.'
      ],
      penalties: 'Buyers delaying MSME payments beyond 45 days face non-deductible compound interest penalties under tax law.'
    },
    eligibilityRequirements: {
      intro: 'All business entities engaged in manufacturing or services qualify for Udyam MSME Registration:',
      criteria: [
        'Proprietorship firms, Partnership firms, LLPs, Private Limited, One Person Companies, and Section 8 entities.',
        'Manufacturing or Service units with plant investment ≤ ₹50 Crores and turnover ≤ ₹250 Crores.',
        'Retail and wholesale traders are also eligible for priority sector bank lending.'
      ],
      documentsRequired: [
        'Aadhaar Card of the Proprietor / Managing Partner / Authorized Director',
        'PAN Card of the Business Entity (or Proprietor for proprietorships)',
        'Active Bank Account Details (Bank Name, Account Number, IFSC Code)',
        'Business Address Proof and Main Business Activity Description',
        'GSTIN (if GST registration is held or required)'
      ]
    },
    processSteps: [
      { step: 1, title: 'Data Gathering & Classification', desc: 'We review your Aadhaar, PAN, business activity, and map appropriate 5-digit National Industrial Classification (NIC) codes.' },
      { step: 2, title: 'Udyam Portal Electronic Filing', desc: 'We input enterprise details on the official Ministry of MSME portal and trigger instant Aadhaar OTP verification.' },
      { step: 3, title: 'Automated CBDT & GST Database Match', desc: 'The government portal automatically verifies PAN and turnover data against Income Tax and GST systems.' },
      { step: 4, title: 'Udyam Certificate Generation', desc: 'Your authentic 19-digit Udyam Registration Certificate with embedded QR code is issued and delivered instantly.' }
    ],
    postRegistrationCompliance: {
      intro: 'Once registered, MSMEs should leverage statutory mechanisms:',
      points: [
        'Mention your 19-digit Udyam Registration Number on all commercial invoices and tax receipts.',
        'File delayed payment recovery claims on the MSME SAMADHAAN portal if payments cross 45 days.',
        'Update annual turnover and investment data on the portal following annual tax returns.',
        'Claim 50% discount on all trademark, patent, and design filings using the Udyam certificate.'
      ]
    },
    timelines: {
      tat: '1 to 2 Working Days (Often Same-Day within 2 to 4 hours)',
      delayFactors: ['Aadhaar mobile number not reachable for OTP', 'PAN name mismatch with Aadhaar records', 'Udyam portal server maintenance'],
      speedAssurance: 'Our dedicated legal desk processes Udyam applications with immediate priority upon OTP receipt.'
    },
    certification: {
      issuingAuthority: 'Ministry of Micro, Small & Medium Enterprises, Government of India',
      validity: 'Permanent / Lifetime Validity',
      legalSignificance: 'Official central statutory proof of enterprise status under the MSMED Act, 2006.',
      contents: ['19-Digit Udyam Registration Number (e.g., UDYAM-XX-00-0000000)', 'Enterprise Name & Category (Micro/Small/Medium)', 'Registered Office & Plant Address', 'NIC Business Activity Codes', 'Dynamic Verifiable QR Code']
    },
    fees: {
      govtFee: 'Nil (₹0 Official Government statutory fee on Udyam portal)',
      professionalFee: '₹999 (Complete documentation, NIC mapping & certificate generation)',
      transparencyNote: '100% transparent pricing with zero surprise charges.'
    },
    taxation: {
      directTaxImpact: 'Under Section 43B(h) of the Income Tax Act, buyers cannot claim tax deduction for purchases from MSMEs unless payment is made within 45 days.',
      gstImplications: 'Udyam certificate does not alter GST rates, but export turnover is excluded when calculating MSME category thresholds.',
      deductionsOrExemptions: 'Subsidies received under MSME schemes for technology upgrades or patents are treated as non-taxable capital receipts in specific cases.'
    },
    whyUs: [
      'Over 25,000+ Udyam MSME certificates successfully generated.',
      'Precise 5-digit NIC code mapping to maximize subsidy and tender eligibility.',
      'Comprehensive guidance on utilizing MSME SAMADHAAN for delayed payment recovery.',
      'Free advisory on linking Udyam with GeM portal and trademark applications.',
      'Fast same-day processing with dedicated customer support.'
    ],
    faqs: [
      { q: 'Is Udyam MSME Registration free on the government portal?', a: 'The government portal charges ₹0 statutory fee. Our ₹999 professional fee covers end-to-end eligibility calculation, NIC code classification, portal filing, and post-issuance compliance advisory.' },
      { q: 'What are the main benefits of holding an MSME Udyam Certificate?', a: 'Key benefits include collateral-free bank loans (CGTMSE), 50% government fee discount on trademark and patent filings, protection against delayed payments under Section 15 of the MSMED Act, and government tender fee waivers.' },
      { q: 'Can retail and wholesale traders register for Udyam MSME?', a: 'Yes! The Ministry of MSME officially permits retail and wholesale traders to register on Udyam to access priority sector bank lending benefits.' },
      { q: 'What is the validity of the Udyam Registration Certificate?', a: 'Udyam Registration has permanent lifetime validity. There are no annual renewal fees or expiry dates.' },
      { q: 'What is Section 43B(h) and how does it protect MSMEs?', a: 'Section 43B(h) of the Income Tax Act states that any payment due to a registered Micro or Small enterprise must be cleared within 45 days (with agreement) or 15 days (without agreement). Otherwise, the buyer cannot claim the expense as a tax deduction until paid.' },
      { q: 'Is GSTIN mandatory for Udyam Registration?', a: 'GSTIN is mandatory only for entities that are legally required to obtain GST registration under the GST Act. Micro units exempt from GST can register using PAN and Aadhaar.' }
    ],
    relatedServices: [
      { name: 'Startup India Registration', desc: 'DPIIT startup recognition with 3-year tax exemptions and seed fund access.', price: '₹4,499' },
      { name: 'Trademark Registration', desc: 'Claim 50% discount on government fee with your Udyam certificate.', price: '₹1,499 + Govt. Fee' },
      { name: 'Digital Signature Certificate', desc: 'Class 3 DSC with USB token for e-tendering and corporate filings.', price: '₹1,999' },
      { name: 'IEC Registration', desc: 'Mandatory 10-digit Import Export Code from DGFT.', price: '₹1,750' },
      { name: 'Shop and Establishment Certificate', desc: 'State labor department registration for commercial establishments.', price: '₹999 + Govt. Fee' },
      { name: 'GST Registration', desc: 'Mandatory GSTIN registration for commercial businesses.', price: '₹699' }
    ]
  },
  {
    slug: 'startup-india-registration',
    name: 'Startup India Registration',
    category: 'Initial Registration',
    parentCategory: 'Registration & License',
    priceType: 'fixed',
    priceDisplay: '₹4499',
    heroPriceHook: 'DPIIT Startup India Recognition Certificate at ₹4,499 | Unlock 3-Year 100% Tax Exemption (80-IAC)',
    specialCallout: 'DPIIT & 80-IAC Tax Exemption',
    urgencyText: 'Instant discount available for 24 hours',
    ctaText: 'Get Started',
    metaTitle: 'Startup India DPIIT Recognition Online @ ₹4,499 | 80-IAC Tax Exemption',
    metaDescription: 'Get your DPIIT Startup India Recognition Certificate online to unlock 3-year 100% Income Tax Exemption (Section 80-IAC), Angel Tax exemption & Seed Fund access.',
    seoKeywords: ['Startup India registration', 'DPIIT recognition online', '80-IAC tax exemption', 'Startup India seed fund', 'Angel tax exemption startup', 'DPIIT certificate'],
    heroIntro: 'Startup India is a flagship initiative of the Government of India launched by the Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce and Industry. Securing an official DPIIT Startup Recognition Certificate grants eligible Private Limited Companies and LLPs full access to a 3-consecutive-year 100% Income Tax Exemption under Section 80-IAC, Angel Tax exemption under Section 56(2)(viib), up to 80% rebate on patent filings, self-certification under labor and environmental laws, and priority access to the ₹10,000 Crore Fund of Funds and Startup India Seed Fund Scheme (SISFS).',
    keyTags: ['DPIIT Recognition', '3-Year 100% Tax Holiday (80-IAC)', 'Angel Tax Exemption', '80% Patent Rebate', 'Startup India Seed Fund'],
    overview: {
      p1: 'DPIIT Startup India Recognition is the premier government accreditation for high-potential, innovative startups incorporated in India. It recognizes entities working towards innovation, development, or commercialization of new products, processes, or services driven by technology or intellectual property.',
      p2: 'Holding a DPIIT recognition certificate allows startups to self-certify compliance for 9 labor and environmental laws for 5 years without routine inspections, enjoy relaxed norms for government tenders with zero prior experience or turnover criteria, and raise equity from angel investors with complete tax security. Akshay B2B Solutions provides pitch-deck structuring, innovation narrative drafting, and DPIIT portal processing.'
    },
    registrationProcessOverview: {
      status: 'Voluntary for Eligible Innovative Startups',
      governingAuthority: 'Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce & Industry',
      summary: 'Filing detailed pitch deck, video pitch, proof of innovation, business scalability roadmap, and incorporation documents on the National Startup Portal.',
      postApproval: 'Issuance of the official DPIIT Startup Recognition Certificate bearing a unique DIPP Number.',
      assistanceRole: 'Innovation pitch narrative drafting, pitch deck structuring, DPIIT submission, and Section 80-IAC / Angel Tax filing support.'
    },
    whatIs: {
      definition: 'Startup India Recognition is a formal statutory certification granted by DPIIT acknowledging a company as an innovative, scalable startup entitled to government fiscal incentives.',
      points: [
        'Open to Private Limited Companies, LLPs, and Registered Partnership Firms.',
        'Entity must be incorporated within the last 10 years.',
        'Annual turnover must not have exceeded ₹100 Crores in any preceding financial year.',
        'Entity must be working towards innovation, development, or improvement of products/services.',
        'Must not be formed by splitting up or reconstruction of an existing business.',
        'Grants eligibility for Section 80-IAC 3-year 100% income tax exemption.'
      ],
      closing: 'It provides the ultimate regulatory catalyst for venture-backed and high-growth Indian startups.'
    },
    keyCharacteristics: [
      {
        title: '10-Year Eligibility Window',
        description: 'An entity remains recognized as a startup for up to 10 years from its date of incorporation.'
      },
      {
        title: 'Turnover Ceiling of ₹100 Crores',
        description: 'Maintains startup benefits until gross annual turnover crosses ₹100 Crores in any financial year.'
      },
      {
        title: 'Innovation & Scalability Requirement',
        description: 'Must demonstrate technical innovation, high potential for employment generation, or scalable wealth creation.'
      },
      {
        title: 'Self-Certification Facility',
        description: 'Permits self-certification under 6 Central Labour Acts and 3 Environmental Laws for up to 5 years.'
      }
    ],
    importanceBenefits: {
      intro: 'Securing DPIIT Startup India Recognition provides transformative financial and operational benefits:',
      benefits: [
        {
          title: '3-Year 100% Income Tax Holiday (80-IAC)',
          desc: 'Eligible to apply for 100% corporate tax exemption for 3 consecutive financial years out of the first 10 years.'
        },
        {
          title: 'Angel Tax Exemption (Section 56)',
          desc: 'Exempts premium share issuance to accredited domestic investors from angel tax scrutiny under Section 56(2)(viib).'
        },
        {
          title: 'Up to 80% Patent & 50% Trademark Rebate',
          desc: 'Fast-track patent examination with up to 80% reduction in government fees, and 50% fee rebate on trademark filings.'
        },
        {
          title: 'Startup India Seed Fund (SISFS)',
          desc: 'Eligible for up to ₹20 Lakhs in grant funding for proof-of-concept and up to ₹50 Lakhs in debt/convertible debentures.'
        },
        {
          title: 'Public Procurement & GeM Relaxation',
          desc: 'Exempted from prior turnover and prior experience criteria in government and PSU tenders.'
        }
      ],
      closing: 'It accelerates enterprise valuation, investor readiness, and statutory capital protection.'
    },
    package: {
      title: 'Startup India DPIIT Recognition Package',
      description: 'Comprehensive innovation dossier preparation, pitch deck refinement, and DPIIT portal processing.',
      checklist: [
        'DPIIT Eligibility & Incorporation Status Audit',
        'Problem Statement & Innovation Narrative Drafting',
        'Business Scalability & Employment Generation Model Writeup',
        'Startup India Portal Profile & Showcase Creation',
        'DPIIT Recognition Application Filing & Document Upload',
        'Direct Liaison with DPIIT Scrutiny Committee',
        'Official DPIIT Recognition Certificate Delivery',
        'Section 80-IAC & Seed Fund Scheme Application Guidance'
      ]
    },
    types: [
      {
        title: 'DPIIT Startup Recognition',
        desc: 'Core government certification unlocking self-certification, tender relaxations, patent rebates, and GeM access.',
        eligibility: 'All eligible innovative entities'
      },
      {
        title: 'Section 80-IAC Tax Exemption',
        desc: 'Advanced Inter-Ministerial Board (IMB) approval granting 3-year consecutive 100% income tax exemption.',
        eligibility: 'Pvt Ltd / LLPs incorporated post 1st April 2016'
      },
      {
        title: 'Angel Tax Exemption (Form 2)',
        desc: 'Declaration for exemption from taxation on share premium received above fair market value.',
        eligibility: 'Recognized startups with paid-up capital ≤ ₹25Cr'
      }
    ],
    comparison: {
      title: 'DPIIT Recognized Startup vs Standard Company',
      headers: ['Parameter', 'Standard Company', 'DPIIT Recognized Startup'],
      rows: [
        { aspect: 'Income Tax Holiday', col1: 'Normal Corporate Tax (22% / 25%)', col2: 'Eligible for 3-Year 100% Tax Exemption (80-IAC)' },
        { aspect: 'Angel Tax Exemption', col1: 'Subject to Section 56(2)(viib) scrutiny', col2: '100% Exempt from Angel Tax on share premium' },
        { aspect: 'Patent Filing Govt Fees', col1: 'Full Statutory Fee (₹8,000+)', col2: '80% Government Fee Rebate (Fast-track)' },
        { aspect: 'Government Tenders', col1: 'Must meet strict turnover/experience bars', col2: 'Exempt from Prior Turnover & Experience' },
        { aspect: 'Labor Law Inspections', col1: 'Mandatory annual routine inspections', col2: 'Self-certification with zero inspection for 5 yrs' }
      ]
    },
    lawsGoverning: {
      actName: 'Startup India Initiative & Section 80-IAC / 56 of Income Tax Act, 1961',
      authority: 'Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce & Industry',
      points: [
        'Notified via Ministry of Commerce and Industry Gazette Notification G.S.R. 127(E) dated 19th February 2019.',
        'Section 80-IAC of the Income Tax Act, 1961 providing 100% deduction of profits.',
        'Section 56(2)(viib) tax exemption on investments above Fair Market Value (FMV).',
        'Insolvency and Bankruptcy Code, 2016 fast-track voluntary winding-up within 90 days (vs 180 days).',
        'Self-certification under 6 Labour Laws (EPF, ESI, Gratuity, Bonus, etc.) and 3 Environmental Laws.'
      ],
      penalties: 'Misrepresentation of innovation or fraudulent split-up of existing businesses invites revocation and retroactive tax recovery.'
    },
    eligibilityRequirements: {
      intro: 'To qualify for DPIIT Startup India Recognition, an enterprise must satisfy all of the following criteria:',
      criteria: [
        'Entity Type: Must be a Private Limited Company, Limited Liability Partnership (LLP), or Registered Partnership Firm.',
        'Age of Entity: Period of existence must not exceed 10 years from the date of incorporation.',
        'Turnover Limit: Annual turnover must not have exceeded ₹100 Crores in any financial year since incorporation.',
        'Original Entity: Entity must not have been formed by splitting up or reconstruction of an existing business.',
        'Innovation Focus: Must be working towards innovation, development, or improvement of products/processes/services or have a scalable business model.'
      ],
      documentsRequired: [
        'Certificate of Incorporation / Registration Certificate & Partnership Deed',
        'Memorandum of Association (MOA) and Articles of Association (AOA) / LLP Agreement',
        'Detailed Pitch Deck (Business Model, Innovation, Scalability, Target Market)',
        'Link to Product Demo Video / Website / App / Proof of Concept',
        'Patents / Trademarks / Awards / Client Testimonials (if available)',
        'List of Directors / Designated Partners with PAN, Aadhaar, and LinkedIn profiles'
      ]
    },
    processSteps: [
      { step: 1, title: 'Eligibility & Innovation Audit', desc: 'Our startup legal team reviews your incorporation date, turnover history, and evaluates your innovation narrative.' },
      { step: 2, title: 'Pitch Deck & Application Dossier Preparation', desc: 'We draft the technical problem-solution writeup, market scalability metrics, and structure your pitch deck.' },
      { step: 3, title: 'National Startup Portal Submission', desc: 'We create your National Startup Profile and submit the official DPIIT recognition application.' },
      { step: 4, title: 'DPIIT Scrutiny & Certificate Issuance', desc: 'Following verification by the DPIIT evaluation team, your official Startup Recognition Certificate with DIPP number is issued.' }
    ],
    postRegistrationCompliance: {
      intro: 'Recognized startups should maintain compliance and access benefits:',
      points: [
        'Display your DPIIT Recognition Number on your corporate website and investor pitch decks.',
        'Apply for Section 80-IAC 3-year tax exemption through the Inter-Ministerial Board (IMB) portal.',
        'File Form 2 on the DPIIT portal for complete Angel Tax exemption before issuing equity shares.',
        'Self-certify compliance for EPF, ESI, and environmental laws through the Shram Suvidha portal.',
        'Apply for Startup India Seed Fund (SISFS) grants through approved partner incubators.'
      ]
    },
    timelines: {
      tat: '3 to 7 Working Days (DPIIT Recognition Certificate)',
      delayFactors: ['Weak innovation narrative in pitch deck', 'Entity formed by restructuring existing firm', 'Clarification queries raised by DPIIT scrutiny committee'],
      speedAssurance: 'Our experienced venture legal attorneys craft high-conviction innovation narratives to ensure 98.4% first-time approval.'
    },
    certification: {
      issuingAuthority: 'Department for Promotion of Industry and Internal Trade (DPIIT), Govt of India',
      validity: '10 Years from Incorporation Date (or until turnover crosses ₹100 Crores)',
      legalSignificance: 'Official central government accreditation certifying enterprise as an innovative startup under Indian law.',
      contents: ['DPIIT Recognition Number (DIPPXXXXX)', 'Company / LLP Legal Name', 'CIN / LLPIN Number', 'Date of Recognition & Incorporation', 'Digital Signature & National Emblem Seal']
    },
    fees: {
      govtFee: 'Nil (₹0 Government statutory fee on Startup India portal)',
      professionalFee: '₹4,499 (Complete innovation drafting, pitch deck structuring & DPIIT filing)',
      transparencyNote: '100% transparent pricing with zero hidden charges.'
    },
    taxation: {
      directTaxImpact: 'DPIIT recognized startups holding Section 80-IAC approval enjoy 100% tax holiday on profits for 3 consecutive financial years.',
      gstImplications: 'Startup recognition does not waive GST rates, but R&D capital equipment qualifies for full Input Tax Credit (ITC).',
      deductionsOrExemptions: 'Complete exemption from Section 56(2)(viib) Angel Tax on funds raised at a premium from qualified investors.'
    },
    whyUs: [
      'Over 4,500+ startups successfully recognized under the Startup India initiative.',
      'Specialized team of venture capital attorneys and startup narrative strategists.',
      'End-to-end guidance for Section 80-IAC tax exemption and SISFS seed fund applications.',
      'Free intellectual property (Patent & Trademark) subsidy consultation.',
      'High-conviction pitch deck structuring included in the package.'
    ],
    faqs: [
      { q: 'Can a Sole Proprietorship apply for Startup India DPIIT recognition?', a: 'No. The DPIIT scheme is open only to Private Limited Companies, Limited Liability Partnerships (LLPs), and Registered Partnership Firms.' },
      { q: 'What is the Section 80-IAC Income Tax Exemption?', a: 'Section 80-IAC allows an eligible DPIIT-recognized startup to receive a 100% income tax exemption on profits for 3 consecutive financial years out of its first 10 years of incorporation.' },
      { q: 'What is Angel Tax and how does Startup India help?', a: 'Angel Tax (Section 56(2)(viib)) taxes funds raised above Fair Market Value. Recognized startups can file Form 2 to receive 100% exemption from Angel Tax up to ₹25 Crores in paid-up capital.' },
      { q: 'How long does it take to receive the DPIIT certificate?', a: 'The DPIIT Recognition Certificate is typically issued within 3 to 7 working days following successful submission of the application and pitch deck.' },
      { q: 'Is there any government fee for Startup India registration?', a: 'No, the government charges zero statutory fee. Our professional fee of ₹4,499 covers business narrative drafting, pitch deck refinement, portal filing, and post-issuance compliance advisory.' },
      { q: 'Can a company older than 10 years be recognized as a startup?', a: 'No. The entity must have been incorporated within the last 10 years from the date of application.' }
    ],
    relatedServices: [
      { name: 'MSME Registration', desc: 'Udyam certificate unlocking government subsidies and bank priority.', price: '₹999' },
      { name: 'Trademark Registration', desc: 'Fast-track trademark filing with 50% government fee rebate.', price: '₹1,499 + Govt. Fee' },
      { name: 'Digital Signature Certificate', desc: 'Class 3 DSC with USB token for corporate and ROC filings.', price: '₹1,999' },
      { name: 'Pvt Ltd Company Compliances', desc: 'Annual corporate secretarial, tax, and labor compliances.', price: '₹7,999' },
      { name: 'IEC Registration', desc: 'Mandatory 10-digit Import Export Code from DGFT.', price: '₹1,750' },
      { name: 'Corporate Tax', desc: 'Corporate tax advisory, 80-IAC filings, and financial structuring.', price: '₹2,499' }
    ]
  }
];

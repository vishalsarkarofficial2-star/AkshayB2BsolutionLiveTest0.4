import { ServiceDetailConfig } from './types';

function createITServiceConfig(
  slug: string,
  name: string,
  category: string,
  priceDisplay: string,
  tagline: string,
  summary: string,
  benefitsList: Array<{ title: string; desc: string }>,
  featuresList: string[],
  processList: Array<{ step: number; title: string; desc: string }>,
  faqList: Array<{ q: string; a: string }>,
  keywords: string[]
): ServiceDetailConfig {
  return {
    slug,
    name,
    category,
    parentCategory: 'IT & Digital Services',
    priceType: 'no_price_show',
    priceDisplay: 'Custom Pricing',
    heroPriceHook: `${name} Solutions | Industry Grade Tech & Scalable Architecture`,
    specialCallout: 'Custom Engineered • High Performance • Dedicated Support',
    urgencyText: 'Free Tech Consultation & Cost Estimate Available Today',
    ctaText: 'Book Free Consultation',
    metaTitle: `${name} Services | Professional IT & Digital Solutions`,
    metaDescription: `Custom ${name} services built for high performance, security, and enterprise scaling. Get expert consultation today.`,
    seoKeywords: [name, `${name} India`, `${category} services`, ...keywords],
    keywords: [name, category, ...keywords],
    heroIntro: `${name} is engineered to empower modern businesses with high-performance digital infrastructure, seamless user experience, and secure scalable code. ${summary}`,
    keyTags: [category, 'Custom Architecture', 'Mobile & Web Responsive', 'Cloud Integration', 'Enterprise Security'],
    overview: {
      p1: `${name} plays a strategic role in transforming commercial operations, customer engagement, and business workflows into seamless digital experiences.`,
      p2: `Our engineering team delivers end-to-end consulting, modern UI/UX design, modular architecture, and continuous performance maintenance tailored to your exact business objectives.`
    },
    registrationProcessOverview: {
      status: 'Custom IT Project Delivery & Deployment Pipeline',
      governingAuthority: 'ISO / W3C Standards & Enterprise Tech Frameworks',
      summary: 'Requirement discovery, UI/UX prototyping, full-stack sprint development, quality assurance testing, and production deployment.',
      postApproval: 'Source code handoff, admin portal access, cloud server hosting configuration, and 12-month technical maintenance support.',
      assistanceRole: 'Dedicated Project Manager, System Architect, UI Designer, and Quality Engineers.'
    },
    whatIs: {
      definition: `${name} encompasses end-to-end design, custom development, API integration, and performance optimization for modern digital solutions.`,
      points: [
        'Custom built to align perfectly with your brand identity and operational requirements.',
        'Fully responsive and cross-browser compatible across desktop, tablet, and mobile devices.',
        'Optimized for rapid page load speeds, SEO compliance, and enterprise data security.',
        'Scalable cloud architecture ready for high user traffic and future feature additions.'
      ],
      closing: 'It provides a reliable digital backbone that boosts customer conversion, brand trust, and operational efficiency.'
    },
    keyCharacteristics: [
      {
        title: 'Modern Tech Stack',
        description: 'Built using latest frameworks including React, Node.js, Next.js, Python, Flutter, and AWS/GCP cloud.'
      },
      {
        title: 'Custom UI/UX & Responsive',
        description: 'Tailor-made design interfaces crafted for optimal conversion rates and intuitive navigation.'
      },
      {
        title: 'High Security & Speed',
        description: 'Bank-grade SSL encryption, OWASP vulnerability compliance, and CDN-accelerated speed.'
      },
      {
        title: 'Dedicated Support & SLA',
        description: 'Comprehensive post-launch technical support with 99.9% uptime guarantees and bug fixes.'
      }
    ],
    importanceBenefits: {
      intro: `Investing in professional ${name} delivers tangible competitive advantages:`,
      benefits: benefitsList,
      closing: 'Accelerate digital growth and streamline operations with enterprise-grade solutions.'
    },
    package: {
      title: `${name} Deliverables Package`,
      description: 'Comprehensive end-to-end development and deployment package including:',
      checklist: featuresList
    },
    types: [
      {
        title: 'Basic / MVP Solution',
        desc: 'Ideal for early-stage startups needing rapid market validation and core functionality.'
      },
      {
        title: 'Professional Growth Solution',
        desc: 'Designed for scaling SMBs requiring custom integrations, advanced workflows, and performance optimization.'
      },
      {
        title: 'Enterprise Custom Solution',
        desc: 'High-availability infrastructure with custom database architecture, multi-role security, and dedicated SLA.'
      }
    ],
    lawsGoverning: {
      actName: 'Information Technology Act 2000 & Digital Personal Data Protection (DPDP) Act 2023',
      authority: 'Ministry of Electronics and Information Technology (MeitY)',
      points: [
        'Mandatory adherence to user data privacy and consent mechanisms.',
        'Compliance with IT Security Guidelines and SSL/TLS encryption standards.',
        'Protection of Intellectual Property Rights (IPR) and source code ownership.'
      ],
      penalties: 'Non-compliance with data protection guidelines can result in regulatory audit penalties.'
    },
    eligibilityRequirements: {
      intro: 'Getting started with your project requires minimal initial information:',
      criteria: [
        'Clear project scope or business functional requirements.',
        'Brand assets (logo, brand colors, and content reference if available).',
        'Preference for cloud hosting or existing server environment details.'
      ],
      documentsRequired: [
        'Business Registration Details (for SLA agreement)',
        'Brand Assets & Guidelines',
        'Authorized Signatory Details'
      ]
    },
    processSteps: processList,
    postRegistrationCompliance: {
      intro: 'Post-launch support and continuous maintenance best practices:',
      points: [
        'Regular database backups and cloud security patch updates.',
        'Uptime monitoring and page performance optimization.',
        'Feature enhancements and API version upgrades.'
      ]
    },
    timelines: {
      tat: '2 to 6 Weeks (Depending on Scope)',
      delayFactors: ['Delayed client feedback on design prototypes', 'Third-party API credential delays'],
      speedAssurance: 'Agile 2-week sprint releases with weekly video walkthroughs and staging site access.'
    },
    certification: {
      issuingAuthority: 'Software IP Handoff & Source Code Ownership Guarantee',
      validity: 'Lifetime Perpetual Source Code Rights',
      legalSignificance: 'Full intellectual property transfer upon project completion.',
      contents: ['Complete Source Code Repository', 'Admin & Cloud Credentials', 'System Documentation & API Specs']
    },
    fees: {
      govtFee: 'Nil',
      professionalFee: 'Custom Pricing',
      transparencyNote: 'Transparent milestone-based pricing with zero hidden development costs.'
    },
    taxation: {
      directTaxImpact: 'Software development expenses qualify for business deduction under Income Tax Act.',
      gstImplications: 'Standard 18% GST applicable with Input Tax Credit (ITC) claimable for registered businesses.',
      deductionsOrExemptions: 'SEZ / Export of IT services options available under LUT scheme.'
    },
    whyUs: [
      'Experienced Senior Full-Stack Developers & Solution Architects',
      '100% Source Code Ownership & No Vendor Lock-in',
      'Agile Sprint Methodology with Regular Client Demos',
      'Post-Launch Technical Support & Dedicated Project Managers'
    ],
    faqs: faqList,
    relatedServices: [
      { name: 'Custom Software Development', desc: 'Enterprise ERPs and cloud management solutions', price: 'Custom Pricing' },
      { name: 'SEO Services', desc: 'Boost Google rankings and organic business leads', price: 'Custom Pricing' },
      { name: 'Google Ads Management', desc: 'High ROI targeted search and display campaigns', price: 'Custom Pricing' }
    ]
  };
}

const DEFAULT_PROCESS = [
  { step: 1, title: 'Discovery & Wireframing', desc: 'Requirement gathering, competitor analysis, and UI wireframe approval.' },
  { step: 2, title: 'UI/UX Design', desc: 'Creating modern interactive visual designs in Figma.' },
  { step: 3, title: 'Development & Sprinting', desc: 'Frontend & backend engineering with clean modular architecture.' },
  { step: 4, title: 'Testing & Quality Control', desc: 'Rigorous cross-device testing, speed audit, and security check.' },
  { step: 5, title: 'Deployment & Training', desc: 'Production launch on cloud servers with admin panel training.' }
];

export const IT_DIGITAL_SERVICES: ServiceDetailConfig[] = [
  // 1. Website Development
  createITServiceConfig(
    'business-website-development',
    'Business Website Development',
    'Website Development',
    'Starts @ ₹9,999',
    'Professional corporate website design for companies & brands',
    'Get a high-converting, mobile-responsive business website that builds trust and drives inbound leads.',
    [
      { title: 'Enhanced Brand Credibility', desc: 'Establish a corporate digital presence that commands trust with prospective clients.' },
      { title: 'Inbound Lead Generation', desc: 'Integrated contact forms, WhatsApp chat, and CTA banners to capture qualified leads.' }
    ],
    ['Mobile Responsive Design', '5 to 10 Custom Pages', 'SEO Friendly Architecture', 'Contact Form & Lead Capture', 'Free 1-Year Hosting Assistance'],
    DEFAULT_PROCESS,
    [
      { q: 'How long does it take to build a business website?', a: 'Standard corporate websites are typically delivered within 7 to 10 working days.' },
      { q: 'Will my website be mobile-friendly?', a: 'Yes, 100% responsive across smartphones, tablets, laptops, and ultra-wide screens.' }
    ],
    ['corporate website', 'business site design', 'company web development']
  ),

  createITServiceConfig(
    'ecommerce-website-development',
    'E-commerce Website Development',
    'Website Development',
    'Starts @ ₹19,999',
    'Feature-rich online store with payment gateway and inventory management',
    'Launch your online store with seamless payment integration, product catalogs, and automated order management.',
    [
      { title: 'Seamless Online Sales', desc: 'Accept credit cards, UPI, net banking, and COD payments seamlessly.' },
      { title: 'Automated Inventory & Orders', desc: 'Real-time stock tracking, order notifications, and shipping partner integration.' }
    ],
    ['Custom Product Catalog', 'Payment Gateway Integration (Razorpay/Paytm/Stripe)', 'Cart & Checkout Workflow', 'Order Management Dashboard', 'Customer Account Portal'],
    DEFAULT_PROCESS,
    [
      { q: 'Can I manage products on my own after launch?', a: 'Yes, we provide an easy-to-use admin panel with video training.' },
      { q: 'Which payment gateways are supported?', a: 'We integrate Razorpay, Paytm, PhonePe, Stripe, and custom payment processors.' }
    ],
    ['online store builder', 'shopping cart development', 'ecommerce site india']
  ),

  createITServiceConfig(
    'custom-website-development',
    'Custom Website Development',
    'Website Development',
    'Custom Quote',
    'Tailor-made web applications built with modern frontend and backend tech',
    'Bespoke web applications engineered specifically for your complex business logic and scalability needs.',
    [
      { title: '100% Unique Architecture', desc: 'No templates or rigid frameworks — crafted specifically to your exact functional spec.' },
      { title: 'High Performance & Security', desc: 'Optimized database queries and API speed for heavy traffic handling.' }
    ],
    ['React / Next.js Frontend', 'Node.js / Python Backend', 'Database Architecture Design', 'Custom REST / GraphQL APIs', 'Role-Based Access Control'],
    DEFAULT_PROCESS,
    [
      { q: 'What technologies do you use for custom development?', a: 'We use React, Next.js, Node.js, TypeScript, PostgreSQL, and AWS/GCP cloud.' }
    ],
    ['custom web app', 'full stack web development', 'bespoke web portal']
  ),

  createITServiceConfig(
    'landing-page-development',
    'Landing Page Development',
    'Website Development',
    'Starts @ ₹4,999',
    'High-converting single-page landing pages for ad campaigns and leads',
    'Maximize ad ROI with laser-focused landing pages designed specifically for high conversion rates.',
    [
      { title: 'Maximized Conversion Rate', desc: 'Strategic UI layout, persuasive copy flow, and clear CTA triggers.' },
      { title: 'Ultra-Fast Page Speed', desc: 'Sub-second load time to prevent drop-offs on Google and Meta ad campaigns.' }
    ],
    ['Single Page Conversion Design', 'Lead Capture Form Integration', 'A/B Test Ready Structure', 'Google Analytics & Pixel Setup', 'Fast 48-Hour Delivery'],
    DEFAULT_PROCESS,
    [
      { q: 'Can you integrate Meta Pixel and Google Ads tracking?', a: 'Yes, conversion pixels and tracking tags are included in setup.' }
    ],
    ['sales landing page', 'ad landing page', 'high conversion page']
  ),

  createITServiceConfig(
    'website-redesign',
    'Website Redesign',
    'Website Development',
    'Starts @ ₹7,999',
    'Modernize your existing website with updated UI, speed & mobile design',
    'Transform outdated websites into modern, sleek, and high-performing digital assets.',
    [
      { title: 'Modern Visual Identity', desc: 'Refresh your brand with contemporary UI components and typography.' },
      { title: 'Improved SEO & Speed', desc: 'Eliminate legacy code bloat and boost search engine visibility.' }
    ],
    ['Complete Visual Revamp', 'Mobile Optimization', 'SEO Preservation & Redirects', 'Speed Acceleration', 'Content Formatting'],
    DEFAULT_PROCESS,
    [
      { q: 'Will redesigning impact my existing Google rankings?', a: 'We implement 301 redirects and preserve URL structures to retain SEO rank.' }
    ],
    ['site revamp', 'website makeover', 'redesign company website']
  ),

  createITServiceConfig(
    'website-maintenance',
    'Website Maintenance',
    'Website Development',
    'Starts @ ₹2,999/mo',
    'Regular updates, security monitoring, backups & speed maintenance',
    'Ensure your website stays fast, secure, up-to-date, and completely hassle-free.',
    [
      { title: '24/7 Security & Uptime', desc: 'Continuous malware scanning, SSL monitoring, and cloud backup.' },
      { title: 'Regular Content Updates', desc: 'Hassle-free updates for text, imagery, banners, and product additions.' }
    ],
    ['Monthly Core Updates', 'Daily Cloud Backups', 'Malware Scanning & Cleanup', 'Performance Optimization', 'Dedicated Monthly Edit Hours'],
    DEFAULT_PROCESS,
    [
      { q: 'What is included in monthly maintenance?', a: 'Includes backups, security patches, plugin updates, content edits, and technical support.' }
    ],
    ['website maintenance retainer', 'site management service', 'web support package']
  ),

  // 2. App Development
  createITServiceConfig(
    'android-app-development',
    'Android App Development',
    'App Development',
    'Starts @ ₹24,999',
    'Native & Kotlin Android app development published on Play Store',
    'Build high-performance Android applications customized for millions of mobile users.',
    [
      { title: 'Vast Market Reach', desc: 'Tap into over 95% of mobile users across India and global Android markets.' },
      { title: 'Google Play Store Listing', desc: 'Complete deployment assistance following Play Store developer guidelines.' }
    ],
    ['Kotlin / Flutter Engineering', 'Intuitive Material UI/UX', 'Push Notifications Integration', 'Google Play Store Publishing', 'Offline Storage Capability'],
    DEFAULT_PROCESS,
    [
      { q: 'Do you help publish the app on Google Play Store?', a: 'Yes, we handle the entire Play Console deployment and review process.' }
    ],
    ['android app builder', 'play store app development', 'kotlin app development']
  ),

  createITServiceConfig(
    'ios-app-development',
    'iOS App Development',
    'App Development',
    'Starts @ ₹29,999',
    'Swift & Apple iOS apps crafted for iPhone and iPad devices',
    'Deliver premium iOS app experiences tailored for Apple device ecosystems.',
    [
      { title: 'High-Value User Base', desc: 'Target premium customers with smooth performance and Human Interface Design.' },
      { title: 'App Store Approval', desc: 'Rigorous compliance testing to pass Apple App Store review.' }
    ],
    ['Swift / Native iOS Engineering', 'Apple HIG Design Compliance', 'In-App Purchases & Apple Pay', 'App Store Connect Publishing', 'TestFlight Beta Testing'],
    DEFAULT_PROCESS,
    [
      { q: 'How long does Apple App Store review take?', a: 'Typically 24 to 48 hours once submitted through TestFlight.' }
    ],
    ['iphone app development', 'ios developer india', 'swift app development']
  ),

  createITServiceConfig(
    'cross-platform-app-development',
    'Cross-Platform App Development',
    'App Development',
    'Starts @ ₹21,999',
    'Single codebase Flutter/React Native apps running on Android & iOS',
    'Save up to 40% development cost with unified cross-platform mobile apps.',
    [
      { title: 'Dual Platform Launch', desc: 'Deploy simultaneous Android and iOS apps from one robust codebase.' },
      { title: 'Faster Time-To-Market', desc: 'Accelerate development cycle while maintaining near-native speed.' }
    ],
    ['Flutter / React Native Stack', 'Shared Codebase Architecture', 'Unified iOS & Android Releases', 'Native Plugin Integrations', 'Cost Efficient Maintenance'],
    DEFAULT_PROCESS,
    [
      { q: 'Is Flutter or React Native good for business apps?', a: 'Yes, top global apps like Instagram and Google Pay utilize cross-platform technology.' }
    ],
    ['flutter app development', 'react native mobile app', 'cross platform app']
  ),

  createITServiceConfig(
    'business-app-development',
    'Business App Development',
    'App Development',
    'Custom Quote',
    'Internal operational mobile apps for workforce, inventory & logistics',
    'Digitize field operations, sales tracking, employee attendance, and inventory via custom enterprise mobile apps.',
    [
      { title: 'Workforce Productivity', desc: 'Empower field agents, delivery teams, and sales representatives with real-time app access.' },
      { title: 'Real-Time Sync', desc: 'Instant database synchronization with central company server and ERP.' }
    ],
    ['Role-Based App Access', 'GPS Location Tracking', 'Offline Mode Data Collection', 'Barcode / QR Scanner Integration', 'Real-Time Admin Dashboard'],
    DEFAULT_PROCESS,
    [
      { q: 'Can the app work offline without active internet?', a: 'Yes, we can build local offline sync that uploads data once connectivity returns.' }
    ],
    ['enterprise mobile app', 'employee tracking app', 'field sales app']
  ),

  // 3. CRM Development
  createITServiceConfig(
    'custom-crm-development',
    'Custom CRM Development',
    'CRM Development',
    'Starts @ ₹29,999',
    'Bespoke Customer Relationship Management tailored to your workflow',
    'Replace spreadsheets with a unified CRM designed around your exact sales and service operations.',
    [
      { title: 'Tailored Sales Pipelines', desc: 'Map out your exact sales stages, lead qualification rules, and team permissions.' },
      { title: 'Automated Follow-ups', desc: 'Send automated WhatsApp, SMS, and Email reminders to prevent lead leakages.' }
    ],
    ['Custom Lead Lifecycle Stages', 'WhatsApp & Email Automation', 'Team Activity Logs & KPIs', 'Advanced Sales Reporting', 'Role-Based Dashboard Permissions'],
    DEFAULT_PROCESS,
    [
      { q: 'Why build custom CRM instead of buying off-the-shelf?', a: 'Custom CRM has zero monthly per-user licensing fees and fits your exact business process.' }
    ],
    ['custom crm system', 'bespoke crm development', 'enterprise crm india']
  ),

  createITServiceConfig(
    'sales-crm',
    'Sales CRM',
    'CRM Development',
    'Starts @ ₹19,999',
    'Pipeline management, deal tracking, sales forecasting & rep dashboards',
    'Equip your sales force with intelligent pipeline tools to close deals faster.',
    [
      { title: 'Deal Stage Visibility', desc: 'Track every deal from initial inquiry to final contract signing.' },
      { title: 'Rep Performance Analytics', desc: 'Monitor calls made, meetings booked, and conversion ratios per rep.' }
    ],
    ['Visual Kanban Pipeline', 'Quotation & Invoice Generator', 'Telephony / Click-To-Call Integration', 'Target Vs Achievement Dashboards', 'Mobile Friendly Sales App'],
    DEFAULT_PROCESS,
    [
      { q: 'Can Sales CRM integrate with calling systems?', a: 'Yes, we integrate cloud telephony solutions like Exotel, Knowlarity, and MyOperator.' }
    ],
    ['sales pipeline software', 'deal management crm', 'sales automation tool']
  ),

  createITServiceConfig(
    'lead-management-crm',
    'Lead Management CRM',
    'CRM Development',
    'Starts @ ₹14,999',
    'Capture, route, qualify & track leads from Meta, Google & Website',
    'Centralize leads from all advertising channels into a single auto-assigned dashboard.',
    [
      { title: 'Zero Lead Leakage', desc: 'Instant auto-capture from Facebook Ads, Google Ads, website forms, and IndiaMART.' },
      { title: 'Auto Lead Distribution', desc: 'Distribute incoming inquiries automatically among sales executives.' }
    ],
    ['Multi-Channel Lead Auto-Capture', 'Round-Robin Lead Assignment', 'Lead Status & Funnel Tracking', 'Instant Lead Alert System', 'Source Performance ROI Analytics'],
    DEFAULT_PROCESS,
    [
      { q: 'Can leads from Facebook Ads directly enter the CRM?', a: 'Yes, real-time webhook API integration automatically ingests Meta and Google leads.' }
    ],
    ['lead distribution software', 'lead capture crm', 'inquiry management system']
  ),

  createITServiceConfig(
    'customer-management-system',
    'Customer Management System',
    'CRM Development',
    'Starts @ ₹19,999',
    'Client portals, service ticketing, feedback & relationship history',
    'Deliver exceptional post-sales customer support and build long-term retention.',
    [
      { title: 'Helpdesk & Ticket Resolution', desc: 'Organize customer queries into tracked support tickets with SLAs.' },
      { title: 'Complete Customer History', desc: 'Maintain single-view history of orders, communications, and past tickets.' }
    ],
    ['Client Self-Service Portal', 'Support Ticket Lifecycle', 'SLA Escalation Rules', 'Customer Feedback Ratings', 'Document Repository Share'],
    DEFAULT_PROCESS,
    [
      { q: 'Can clients log into a portal to check status?', a: 'Yes, client access portals allow customers to submit tickets and view project/order updates.' }
    ],
    ['helpdesk system', 'customer support portal', 'client relationship software']
  ),

  // 4. Software Development
  createITServiceConfig(
    'custom-software-development',
    'Custom Software Development',
    'Software Development',
    'Custom Quote',
    'Bespoke desktop & cloud software built for complex business operations',
    'Automate complex operational workflows with custom cloud or desktop software solutions.',
    [
      { title: 'Tailored Operational Logic', desc: 'Eliminate manual workarounds with software tailored specifically for your company.' },
      { title: '100% IP & Data Ownership', desc: 'Full ownership of code, database, and operational data without third-party dependence.' }
    ],
    ['Requirement Analysis & Architecture', 'Modular Cloud / On-Premise Stack', 'Database Schema Optimization', 'Third-Party API Integrations', 'Comprehensive Staff Training'],
    DEFAULT_PROCESS,
    [
      { q: 'Do you offer cloud or on-premise installation?', a: 'We support both AWS/GCP cloud deployments and local server setups.' }
    ],
    ['custom business software', 'bespoke application development', 'software engineering company']
  ),

  createITServiceConfig(
    'business-management-software',
    'Business Management Software',
    'Software Development',
    'Starts @ ₹24,999',
    'Centralized operational software for inventory, staff, tasks & reporting',
    'Streamline core day-to-day business processes in one intuitive central platform.',
    [
      { title: 'Unified Operations', desc: 'Connect inventory, sales, purchasing, and staff management.' },
      { title: 'Real-Time Business MIS', desc: 'Live executive dashboards displaying revenue, profit margins, and stock levels.' }
    ],
    ['Inventory & Warehouse Management', 'Purchase Order & Vendor Tracking', 'Task & Workflow Assignment', 'Executive MIS Dashboard', 'Multi-Branch Operations Support'],
    DEFAULT_PROCESS,
    [
      { q: 'Can this manage multiple business branches?', a: 'Yes, multi-location branch management with central reporting is fully supported.' }
    ],
    ['business management tool', 'operations software', 'multi branch management']
  ),

  createITServiceConfig(
    'billing-invoice-software',
    'Billing & Invoice Software',
    'Software Development',
    'Starts @ ₹14,999',
    'GST billing, automated invoicing, e-way bill generation & payment tracking',
    'Fast, error-free GST billing and automated invoice collection for Indian businesses.',
    [
      { title: 'GST Compliant Invoicing', desc: 'Generate CGST, SGST, IGST tax invoices with HSN/SAC code lookups.' },
      { title: 'E-Invoicing & E-Way Bill Integration', desc: 'One-click tax portal filing integration for seamless compliance.' }
    ],
    ['Custom GST Invoice Templates', 'POS Counter Billing', 'E-Invoicing & E-Way Bill Integration', 'Payment Reminder Automations', 'Outstanding Payment Tracking'],
    DEFAULT_PROCESS,
    [
      { q: 'Does it support POS thermal printing?', a: 'Yes, supports standard thermal POS printers as well as A4/A5 PDF invoices.' }
    ],
    ['gst billing software', 'online invoicing tool', 'pos billing system']
  ),

  createITServiceConfig(
    'erp-development',
    'ERP Development',
    'Software Development',
    'Custom Quote',
    'Enterprise Resource Planning systems integrating finance, HR, inventory & manufacturing',
    'Transform enterprise productivity with a integrated custom ERP platform.',
    [
      { title: 'End-to-End Enterprise Control', desc: 'Connect procurement, production, inventory, HR, payroll, and finance.' },
      { title: 'Scalable Enterprise Architecture', desc: 'Engineered to support hundreds of concurrent employees and heavy transactions.' }
    ],
    ['Finance & Ledger Module', 'Supply Chain & Manufacturing', 'HR & Payroll Management', 'Real-Time Analytics Engine', 'Role-Based Access Control (RBAC)'],
    DEFAULT_PROCESS,
    [
      { q: 'How long does custom ERP development take?', a: 'Initial module phases are released within 4 to 8 weeks, followed by full deployment.' }
    ],
    ['custom erp development', 'enterprise resource planning software', 'manufacturing erp']
  ),

  createITServiceConfig(
    'saas-development',
    'SaaS Development',
    'Software Development',
    'Custom Quote',
    'Multi-tenant cloud Software-as-a-Service platforms with recurring subscription billing',
    'Build and launch scalable multi-tenant SaaS products ready for monetized global customers.',
    [
      { title: 'Multi-Tenant Architecture', desc: 'Secure data isolation for every customer workspace on shared infrastructure.' },
      { title: 'Automated Subscription Billing', desc: 'Integrated Stripe / Razorpay recurring billing, plan upgrades, and invoicing.' }
    ],
    ['Multi-Tenant Database Design', 'Recurring Subscription Gateway Integration', 'User Onboarding & Admin Panel', 'RESTful API Ecosystem', 'High-Availability Cloud Hosting Setup'],
    DEFAULT_PROCESS,
    [
      { q: 'Do you help architect cloud infrastructure for SaaS?', a: 'Yes, we configure auto-scaling AWS/GCP clusters with CI/CD deployment pipelines.' }
    ],
    ['saas product development', 'multi tenant cloud software', 'subscription software builder']
  ),

  // 5. Digital Marketing
  createITServiceConfig(
    'meta-ads-management',
    'Meta Ads Management',
    'Digital Marketing',
    'Starts @ ₹7,999/mo',
    'Facebook & Instagram ad campaigns targeting laser-focused customer audiences',
    'Generate high-converting lead generation and e-commerce sales via Meta ad campaigns.',
    [
      { title: 'Laser-Targeted Audience Reach', desc: 'Pinpoint prospective clients based on demographics, interests, and buying behaviors.' },
      { title: 'High Conversion ROI', desc: 'Constant A/B creative testing, copywriting refinement, and bid optimization.' }
    ],
    ['Campaign Strategy & Creative Design', 'Audience Research & Pixel Setup', 'Lead Ad & Conversion Campaigns', 'A/B Ad Testing & Copywriting', 'Weekly ROI Performance Reports'],
    DEFAULT_PROCESS,
    [
      { q: 'What is the recommended ad spend budget?', a: 'Ad spend starts according to your campaign goals; agency fee is managed separately.' }
    ],
    ['facebook ads agency', 'instagram ad management', 'meta lead generation']
  ),

  createITServiceConfig(
    'google-ads-management',
    'Google Ads Management',
    'Digital Marketing',
    'Starts @ ₹8,999/mo',
    'PPC Google Search, Display, Shopping & YouTube ad campaigns for instant leads',
    'Capture high-intent customers searching actively for your services on Google Search.',
    [
      { title: 'Immediate High-Intent Traffic', desc: 'Show up at the top of Google when prospective customers search your keywords.' },
      { title: 'Negative Keyword Optimization', desc: 'Prevent wasted ad spend by continuously filtering out irrelevant search queries.' }
    ],
    ['Keyword Strategy & Bidding Optimization', 'Google Search & Display Setup', 'Ad Copywriting & Extensions', 'Conversion Tracking Setup', 'Continuous Cost-Per-Lead (CPL) Reduction'],
    DEFAULT_PROCESS,
    [
      { q: 'How quickly can Google Ads generate leads?', a: 'Inquiries can start coming in within 24 to 48 hours of campaign activation.' }
    ],
    ['google ppc agency', 'google search ads', 'google ads manager india']
  ),

  createITServiceConfig(
    'social-media-marketing',
    'Social Media Marketing',
    'Digital Marketing',
    'Starts @ ₹6,999/mo',
    'Organic social content, graphic posts, video reels & community growth',
    'Build brand awareness and engage loyal followers across Instagram, LinkedIn & Facebook.',
    [
      { title: 'Strong Brand Visibility', desc: 'Consistent visual posting establishing brand authority and customer trust.' },
      { title: 'Engaging Content Strategy', desc: 'Custom infographics, promotional banners, carousels, and short video reels.' }
    ],
    ['Monthly Content Calendar', 'Custom Graphic Posts & Reels', 'Caption Writing & Hashtag Research', 'Community Engagement & Replies', 'Monthly Analytics Breakdown'],
    DEFAULT_PROCESS,
    [
      { q: 'How many posts are included per month?', a: 'Packages typically include 12 to 20 custom designed posts and reels per month.' }
    ],
    ['social media agency', 'instagram branding', 'linkedin business marketing']
  ),

  createITServiceConfig(
    'lead-generation',
    'Lead Generation',
    'Digital Marketing',
    'Custom Quote',
    'Performance-driven B2B & B2C qualified lead generation campaigns',
    'Fuel your sales team with a consistent pipeline of verified, qualified business inquiries.',
    [
      { title: 'Predictable Pipeline Growth', desc: 'Receive verified customer leads with phone numbers, emails, and requirements.' },
      { title: 'Multi-Channel Funneling', desc: 'Combining Google Search, Meta Ads, and High-Converting Landing Pages.' }
    ],
    ['Dedicated Landing Page Build', 'Multi-Channel Ad Setup', 'Lead Validation & Filtering', 'CRM Lead Delivery Integration', 'Transparent Cost-Per-Lead Models'],
    DEFAULT_PROCESS,
    [
      { q: 'Are the leads exclusive to my business?', a: 'Yes, 100% exclusive leads delivered in real time directly to your email / CRM.' }
    ],
    ['b2b lead generation', 'performance marketing india', 'qualified lead campaigns']
  ),

  createITServiceConfig(
    'seo-services',
    'SEO Services',
    'Digital Marketing',
    'Starts @ ₹9,999/mo',
    'Rank #1 on Google with Technical SEO, On-Page Optimization & Quality Backlinks',
    'Drive sustainable, organic website traffic and dominate Google search rankings.',
    [
      { title: 'Long-Term Free Organic Traffic', desc: 'Reduce reliance on paid ads by ranking naturally for high-value search queries.' },
      { title: 'Comprehensive SEO Overhaul', desc: 'Optimizing site speed, meta tags, schema markup, and authoritative backlinks.' }
    ],
    ['In-Depth Keyword Research', 'Technical & On-Page Optimization', 'Content Creation & Blog Strategy', 'High Domain Authority Backlinks', 'Monthly Google Search Console Reports'],
    DEFAULT_PROCESS,
    [
      { q: 'How long does SEO take to show results?', a: 'Initial ranking improvements are typically seen within 3 to 6 months of continuous optimization.' }
    ],
    ['search engine optimization', 'seo agency india', 'rank 1 on google']
  ),

  createITServiceConfig(
    'social-media-management',
    'Social Media Management',
    'Digital Marketing',
    'Starts @ ₹7,499/mo',
    'End-to-end management of corporate social media profiles and online reputation',
    'Complete management of your company profiles across Instagram, Facebook, LinkedIn & X.',
    [
      { title: 'Professional Reputation', desc: 'Maintain an active, highly responsive corporate image across all digital channels.' },
      { title: 'Executive LinkedIn Growth', desc: 'Build thought leadership profiles for company founders and directors.' }
    ],
    ['Cross-Platform Scheduling', 'Corporate Reputation Management', 'Influencer & Partner Outreach', 'Profile Bio & Grid Optimization', 'Bi-Weekly Strategy Calls'],
    DEFAULT_PROCESS,
    [
      { q: 'Which platforms do you manage?', a: 'We manage Instagram, Facebook, LinkedIn, Twitter/X, and YouTube Channels.' }
    ],
    ['social media manager', 'corporate linkedin branding', 'online reputation management']
  )
];

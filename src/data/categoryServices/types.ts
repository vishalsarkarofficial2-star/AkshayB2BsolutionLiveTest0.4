export type PriceType = 'fixed' | 'edit_price' | 'no_price_show' | 'recurring' | 'no_hidden_charges' | string;

export interface ComparisonRow {
  aspect: string;
  col1: string;
  col2: string;
  col3?: string;
}

export interface ServiceDetailConfig {
  slug: string;
  name: string;
  category: string;
  parentCategory: string;
  priceType: PriceType;
  priceDisplay: string;
  price?: string;
  heroPriceHook: string;
  specialCallout?: string;
  urgencyText?: string;
  ctaText: string;
  metaTitle: string;
  metaDescription: string;
  seoKeywords: string[];
  keywords?: string[];
  heroIntro: string;
  keyTags: string[];
  overview: {
    p1: string;
    p2: string;
  };
  registrationProcessOverview: {
    status: string;
    governingAuthority: string;
    summary: string;
    postApproval: string;
    assistanceRole: string;
  };
  whatIs: {
    definition: string;
    points: string[];
    closing: string;
  };
  keyCharacteristics: Array<{
    title: string;
    description: string;
  }>;
  importanceBenefits: {
    intro: string;
    benefits: Array<{ title: string; desc: string }>;
    closing: string;
  };
  package: {
    title: string;
    description: string;
    checklist: string[];
  };
  types: Array<{
    title: string;
    desc: string;
    eligibility?: string;
  }>;
  comparison?: {
    title: string;
    headers: string[];
    rows: ComparisonRow[];
  };
  comparisonTables?: Array<{
    title: string;
    headers: string[];
    rows: ComparisonRow[];
  }>;
  lawsGoverning: {
    actName: string;
    authority: string;
    points: string[];
    penalties: string;
  };
  eligibilityRequirements: {
    intro: string;
    criteria: string[];
    documentsRequired: string[];
  };
  processSteps: Array<{
    step: number;
    title: string;
    desc: string;
  }>;
  postRegistrationCompliance: {
    intro: string;
    points: string[];
  };
  timelines: {
    tat: string;
    delayFactors: string[];
    speedAssurance: string;
  };
  certification: {
    issuingAuthority: string;
    validity: string;
    legalSignificance: string;
    contents: string[];
  };
  fees: {
    govtFee: string;
    professionalFee: string;
    transparencyNote: string;
  };
  taxation: {
    directTaxImpact: string;
    gstImplications: string;
    deductionsOrExemptions: string;
  };
  whyUs: string[];
  faqs: Array<{
    q: string;
    a: string;
  }>;
  relatedServices: Array<{
    name: string;
    desc: string;
    price: string;
  }>;
}

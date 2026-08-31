import React, { lazy } from 'react';

export type ServicePageProps = {
  onBackToHome: () => void;
  onSelectService: (serviceName: string) => void;
  onOpenBrochure: () => void;
  onOpenAppointment: () => void;
};

// Helper for typed lazy component loading
function lazyPage<T extends React.ComponentType<ServicePageProps>>(
  importFn: () => Promise<Record<string, any>>,
  exportName: string
): React.LazyExoticComponent<T> {
  return lazy(async () => {
    const mod = await importFn();
    if (mod[exportName]) {
      return { default: mod[exportName] };
    }
    if (mod.default) {
      return { default: mod.default };
    }
    const firstExport = Object.values(mod).find((v) => typeof v === 'function');
    return { default: (firstExport as T) || (() => null) };
  }) as React.LazyExoticComponent<T>;
}

// Lazy loaded page components to keep initial bundle ultra-lightweight
export const SERVICE_PAGES_MAP: Record<string, React.LazyExoticComponent<React.ComponentType<ServicePageProps>>> = {
  // OPC
  'opc': lazyPage(() => import('./OnePersonCompanyPage'), 'OnePersonCompanyPage'),
  'one-person-company': lazyPage(() => import('./OnePersonCompanyPage'), 'OnePersonCompanyPage'),
  'one-person-company-registration': lazyPage(() => import('./OnePersonCompanyPage'), 'OnePersonCompanyPage'),
  'one-person-company-opc': lazyPage(() => import('./OnePersonCompanyPage'), 'OnePersonCompanyPage'),

  // LLP
  'llp': lazyPage(() => import('./LimitedLiabilityPartnershipPage'), 'LimitedLiabilityPartnershipPage'),
  'limited-liability-partnership': lazyPage(() => import('./LimitedLiabilityPartnershipPage'), 'LimitedLiabilityPartnershipPage'),

  // Accounting & Compliances
  'accounting-and-bookkeeping': lazyPage(() => import('./AccountingAndBookkeepingPage'), 'AccountingAndBookkeepingPage'),
  'llp-annual-compliance': lazyPage(() => import('./LlpAnnualCompliancePage'), 'LlpAnnualCompliancePage'),
  'pvt-ltd-company-compliances': lazyPage(() => import('./PvtLtdCompanyCompliancesPage'), 'PvtLtdCompanyCompliancesPage'),
  'virtual-cfo': lazyPage(() => import('./VirtualCfoPage'), 'VirtualCfoPage'),
  'company-address-change': lazyPage(() => import('./CompanyAddressChangePage'), 'CompanyAddressChangePage'),
  'removal-of-director': lazyPage(() => import('./RemovalOfDirectorPage'), 'RemovalOfDirectorPage'),
  'strike-off-company': lazyPage(() => import('./StrikeOffCompanyPage'), 'StrikeOffCompanyPage'),
  'winding-up-pvt-ltd': lazyPage(() => import('./WindingUpPvtLtdPage'), 'WindingUpPvtLtdPage'),

  // Tax & GST
  'gst-registration': lazyPage(() => import('./GstRegistrationPage'), 'GstRegistrationPage'),
  'gst-modification': lazyPage(() => import('./GstModificationPage'), 'GstModificationPage'),
  'gst-cancellation': lazyPage(() => import('./GstCancellationPage'), 'GstCancellationPage'),
  'gst-return': lazyPage(() => import('./GstReturnPage'), 'GstReturnPage'),
  'corporate-tax': lazyPage(() => import('./CorporateTaxPage'), 'CorporateTaxPage'),
  'tan-registration': lazyPage(() => import('./TanRegistrationPage'), 'TanRegistrationPage'),
  'tds-returns': lazyPage(() => import('./TdsReturnsPage'), 'TdsReturnsPage'),
  'income-tax-return-filing': lazyPage(() => import('./IncomeTaxReturnFilingPage'), 'IncomeTaxReturnFilingPage'),
  'professional-tax-registration': lazyPage(() => import('./ProfessionalTaxRegistrationPage'), 'ProfessionalTaxRegistrationPage'),

  // Registrations & Licenses
  'digital-signature-certificate': lazyPage(() => import('./DigitalSignatureCertificatePage'), 'DigitalSignatureCertificatePage'),
  'msme-registration': lazyPage(() => import('./MsmeRegistrationPage'), 'MsmeRegistrationPage'),
  'startup-india-registration': lazyPage(() => import('./StartupIndiaRegistrationPage'), 'StartupIndiaRegistrationPage'),
  'fssai-registration': lazyPage(() => import('./FssaiRegistrationPage'), 'FssaiRegistrationPage'),
  'fssai-state-license': lazyPage(() => import('./FssaiStateLicensePage'), 'FssaiStateLicensePage'),
  'fssai-central-license': lazyPage(() => import('./FssaiCentralLicensePage'), 'FssaiCentralLicensePage'),
  'fssai-returns': lazyPage(() => import('./FssaiReturnsPage'), 'FssaiReturnsPage'),
  'fssai-renewal': lazyPage(() => import('./FssaiRenewalPage'), 'FssaiRenewalPage'),
  'rera-registration': lazyPage(() => import('./ReraRegistrationPage'), 'ReraRegistrationPage'),
  'posh-compliance': lazyPage(() => import('./PoshCompliancePage'), 'PoshCompliancePage'),

  // Import / Export
  'iec-registration': lazyPage(() => import('./IecRegistrationPage'), 'IecRegistrationPage'),
  'icegate-registration': lazyPage(() => import('./IcegateRegistrationPage'), 'IcegateRegistrationPage'),
  'ad-code-registration': lazyPage(() => import('./AdCodeRegistrationPage'), 'AdCodeRegistrationPage'),
  'lut-registration': lazyPage(() => import('./LutRegistrationPage'), 'LutRegistrationPage'),
  'wpc-certificate': lazyPage(() => import('./WpcCertificatePage'), 'WpcCertificatePage'),
  'lmpc-certificate': lazyPage(() => import('./LmpcCertificatePage'), 'LmpcCertificatePage'),
  'iec-renewal': lazyPage(() => import('./IecRenewalPage'), 'IecRenewalPage'),
  'lmpc-registration': lazyPage(() => import('./LmpcRegistrationPage'), 'LmpcRegistrationPage'),
  'shop-and-establishment-certificate': lazyPage(() => import('./ShopAndEstablishmentCertificatePage'), 'ShopAndEstablishmentCertificatePage'),
  'trade-license': lazyPage(() => import('./TradeLicensePage'), 'TradeLicensePage'),
  'employee-provident-fund-registration': lazyPage(() => import('./EmployeeProvidentFundRegistrationPage'), 'EmployeeProvidentFundRegistrationPage'),
  'esi-registration': lazyPage(() => import('./EsiRegistrationPage'), 'EsiRegistrationPage'),

  // RCMC
  'aepc-registration': lazyPage(() => import('./AepcRegistrationPage'), 'AepcRegistrationPage'),
  'apeda-registration': lazyPage(() => import('./ApedaRegistrationPage'), 'ApedaRegistrationPage'),
  'capexil-registration': lazyPage(() => import('./CapexilRegistrationPage'), 'CapexilRegistrationPage'),
  'chemexcil-registration': lazyPage(() => import('./ChemexcilRegistrationPage'), 'ChemexcilRegistrationPage'),
  'eepc-registration': lazyPage(() => import('./EepcRegistrationPage'), 'EepcRegistrationPage'),
  'pharmexcil-registration': lazyPage(() => import('./PharmexcilRegistrationPage'), 'PharmexcilRegistrationPage'),
  'plexconcil-registration': lazyPage(() => import('./PlexconcilRegistrationPage'), 'PlexconcilRegistrationPage'),
  'spices-board-registration': lazyPage(() => import('./SpicesBoardRegistrationPage'), 'SpicesBoardRegistrationPage'),
  'coffee-board-registration': lazyPage(() => import('./CoffeeBoardRegistrationPage'), 'CoffeeBoardRegistrationPage'),
  'fieo-registration': lazyPage(() => import('./FieoRegistrationPage'), 'FieoRegistrationPage'),
  'mpeda-registration': lazyPage(() => import('./MpedaRegistrationPage'), 'MpedaRegistrationPage'),
  'cepci-registration': lazyPage(() => import('./CepciRegistrationPage'), 'CepciRegistrationPage'),
  'cdb-registration': lazyPage(() => import('./CdbRegistrationPage'), 'CdbRegistrationPage'),
  'cle-registration': lazyPage(() => import('./CleRegistrationPage'), 'CleRegistrationPage'),
  'esc-registration': lazyPage(() => import('./EscRegistrationPage'), 'EscRegistrationPage'),
  'gjepc-registration': lazyPage(() => import('./GjepcRegistrationPage'), 'GjepcRegistrationPage'),
  'hepc-registration': lazyPage(() => import('./HepcRegistrationPage'), 'HepcRegistrationPage'),
  'sepc-registration': lazyPage(() => import('./SepcRegistrationPage'), 'SepcRegistrationPage'),
  'tea-board-registration': lazyPage(() => import('./TeaBoardRegistrationPage'), 'TeaBoardRegistrationPage'),
  'epch-registration': lazyPage(() => import('./EpchRegistrationPage'), 'EpchRegistrationPage'),
  'efta-trade-agreement': lazyPage(() => import('./EftaTradeAgreementPage'), 'EftaTradeAgreementPage'),

  // EPR
  'epr-registration': lazyPage(() => import('./EprRegistrationPage'), 'EPRRegistrationLanding'),
  'epr-battery-waste': lazyPage(() => import('./EprBatteryWastePage'), 'EprBatteryWastePage'),
  'epr-e-waste': lazyPage(() => import('./EprEWastePage'), 'EprEWastePage'),
  'epr-plastic-waste': lazyPage(() => import('./EprPlasticWastePage'), 'EprPlasticWastePage'),

  // GST & ROC Returns
  'gst-annual-return': lazyPage(() => import('./GstAnnualReturnPage'), 'GstAnnualReturnPage'),
  'gst-nil-return': lazyPage(() => import('./GstNilReturnPage'), 'GstNilReturnPage'),
  'gst-revocation': lazyPage(() => import('./GstRevocationPage'), 'GstRevocationPage'),
  'gst-notice': lazyPage(() => import('./GstNoticePage'), 'GstNoticePage'),
  'income-tax-return-itr': lazyPage(() => import('./IncomeTaxReturnItrPage'), 'IncomeTaxReturnItrPage'),
  'tds-return': lazyPage(() => import('./TdsReturnPage'), 'TdsReturnPage'),
  'din-kyc': lazyPage(() => import('./DinKycPage'), 'DinKycPage'),
  'roc-annual-filing': lazyPage(() => import('./RocAnnualFilingPage'), 'RocAnnualFilingPage'),
  'dir-3-kyc': lazyPage(() => import('./Dir3KycPage'), 'Dir3KycPage'),
  'mgt-7-filing': lazyPage(() => import('./Mgt7FilingPage'), 'Mgt7FilingPage'),
  'aoc-4-filing': lazyPage(() => import('./Aoc4FilingPage'), 'Aoc4FilingPage'),

  // Company Modifications
  'appointment-of-director': lazyPage(() => import('./AppointmentOfDirectorPage'), 'AppointmentOfDirectorPage'),
  'resignation-of-director': lazyPage(() => import('./ResignationOfDirectorPage'), 'ResignationOfDirectorPage'),
  'increase-authorized-capital': lazyPage(() => import('./IncreaseAuthorizedCapitalPage'), 'IncreaseAuthorizedCapitalPage'),
  'change-in-object-clause': lazyPage(() => import('./ChangeInObjectClausePage'), 'ChangeInObjectClausePage'),
  'change-registered-office': lazyPage(() => import('./ChangeRegisteredOfficePage'), 'ChangeRegisteredOfficePage'),
  'change-in-company-name': lazyPage(() => import('./ChangeInCompanyNamePage'), 'ChangeInCompanyNamePage'),
  'transfer-of-shares': lazyPage(() => import('./TransferOfSharesPage'), 'TransferOfSharesPage'),

  // Trademark & IP
  'brand-name-registration': lazyPage(() => import('./BrandNameRegistrationPage'), 'BrandNameRegistrationPage'),
  'trademark-registration': lazyPage(() => import('./TrademarkRegistrationPage'), 'TrademarkRegistrationPage'),
  'trademark-objection': lazyPage(() => import('./TrademarkObjectionPage'), 'TrademarkObjectionPage'),
  'trademark-hearing': lazyPage(() => import('./TrademarkHearingPage'), 'TrademarkHearingPage'),
  'trademark-opposition': lazyPage(() => import('./TrademarkOppositionPage'), 'TrademarkOppositionPage'),
  'trademark-renewal': lazyPage(() => import('./TrademarkRenewalPage'), 'TrademarkRenewalPage'),
  'brand-name-suggestion': lazyPage(() => import('./BrandNameSuggestionPage'), 'BrandNameSuggestionPage'),
  'logo-design-services': lazyPage(() => import('./LogoDesignServicesPage'), 'LogoDesignServicesPage'),
  'copyright-registration': lazyPage(() => import('./CopyrightRegistrationPage'), 'CopyrightRegistrationPage'),

  // ISO & Quality
  'iso-9001': lazyPage(() => import('./Iso9001Page'), 'Iso9001Page'),
  'iso-14001': lazyPage(() => import('./Iso14001Page'), 'Iso14001Page'),
  'iso-45001': lazyPage(() => import('./Iso45001Page'), 'Iso45001Page'),
  'iso-22000': lazyPage(() => import('./Iso22000Page'), 'Iso22000Page'),
  'iso-27001': lazyPage(() => import('./Iso27001Page'), 'Iso27001Page'),
  'iso-certificate': lazyPage(() => import('./IsoCertificatePage'), 'IsoCertificatePage'),

  // Govt Schemes & Certifications
  'make-in-india-registration': lazyPage(() => import('./MakeInIndiaRegistrationPage'), 'MakeInIndiaRegistrationPage'),
  'nsic-registration': lazyPage(() => import('./NsicRegistrationPage'), 'NsicRegistrationPage'),
  'bis-registration': lazyPage(() => import('./BisRegistrationPage'), 'BisRegistrationPage'),
  'barcode-registration': lazyPage(() => import('./BarcodeRegistrationPage'), 'BarcodeRegistrationPage'),
  'isbn-registration': lazyPage(() => import('./IsbnRegistrationPage'), 'IsbnRegistrationPage'),
  'spice-board-registration': lazyPage(() => import('./SpiceBoardRegistrationPage'), 'SpiceBoardRegistrationPage'),

  // Legal Drafting & Consulting
  'legal-drafting-agreements': lazyPage(() => import('./LegalDraftingAgreementsPage'), 'LegalDraftingAgreementsPage'),
  'nda-founder-agreements': lazyPage(() => import('./NdaFounderAgreementsPage'), 'NdaFounderAgreementsPage'),
  'import-quality-control': lazyPage(() => import('./ImportQualityControlPage'), 'ImportQualityControlPage'),
  'tax-assessment-assistance': lazyPage(() => import('./TaxAssessmentAssistancePage'), 'TaxAssessmentAssistancePage'),
};

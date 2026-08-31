import { ServiceDetailConfig } from './types';
import { CORPORATE_COMPLIANCE_SERVICES } from './corporateComplianceServicesData';
import { CORPORATE_MODIFICATION_SERVICES } from './corporateModificationServicesData';
import { TAX_GST_SERVICES } from './taxGstServicesData';
import { TAX_DIRECT_SERVICES } from './taxDirectServicesData';
import { INITIAL_REGISTRATION_SERVICES } from './initialRegistrationData';
import { FOOD_BUSINESS_SERVICES } from './foodBusinessData';
import { LICENSE_SERVICES } from './licenseData';
import { IMPORT_EXPORT_SERVICES } from './importExportData';
import { LABOUR_DEPARTMENT_SERVICES } from './labourDepartmentData';
import { RCMC_SERVICES } from './rcmcData';
import { TRADE_EPR_SERVICES } from './tradeEprData';
import { GST_TAX_SERVICES } from './gstTaxData';
import { FILING_COMPLIANCE_SERVICES } from './filingComplianceData';
import { MODIFICATION_COMPANY_SERVICES } from './modificationCompanyData';
import { TRADEMARK_SERVICES } from './trademarkData';
import { INTELLECTUAL_PROPERTY_SERVICES } from './intellectualPropertyData';
import { ISO_SERVICES } from './isoData';
import { NO_PRICE_SERVICES } from './noPriceServicesData';
import { CORPORATE_COMPLIANCE_BATCH2_SERVICES } from './corporateComplianceBatch2Data';
import { IT_DIGITAL_SERVICES } from './itDigitalServicesData';

export * from './types';
export { CORPORATE_COMPLIANCE_SERVICES } from './corporateComplianceServicesData';
export { CORPORATE_MODIFICATION_SERVICES } from './corporateModificationServicesData';
export { TAX_GST_SERVICES } from './taxGstServicesData';
export { TAX_DIRECT_SERVICES } from './taxDirectServicesData';
export { INITIAL_REGISTRATION_SERVICES } from './initialRegistrationData';
export { FOOD_BUSINESS_SERVICES } from './foodBusinessData';
export { LICENSE_SERVICES } from './licenseData';
export { IMPORT_EXPORT_SERVICES } from './importExportData';
export { LABOUR_DEPARTMENT_SERVICES } from './labourDepartmentData';
export { RCMC_SERVICES } from './rcmcData';
export { TRADE_EPR_SERVICES } from './tradeEprData';
export { GST_TAX_SERVICES } from './gstTaxData';
export { FILING_COMPLIANCE_SERVICES } from './filingComplianceData';
export { MODIFICATION_COMPANY_SERVICES } from './modificationCompanyData';
export { TRADEMARK_SERVICES } from './trademarkData';
export { INTELLECTUAL_PROPERTY_SERVICES } from './intellectualPropertyData';
export { ISO_SERVICES } from './isoData';
export { NO_PRICE_SERVICES } from './noPriceServicesData';
export { CORPORATE_COMPLIANCE_BATCH2_SERVICES } from './corporateComplianceBatch2Data';
export { IT_DIGITAL_SERVICES } from './itDigitalServicesData';

export const ALL_CATEGORY_SERVICES: ServiceDetailConfig[] = [
  ...CORPORATE_COMPLIANCE_SERVICES,
  ...CORPORATE_MODIFICATION_SERVICES,
  ...TAX_GST_SERVICES,
  ...TAX_DIRECT_SERVICES,
  ...INITIAL_REGISTRATION_SERVICES,
  ...FOOD_BUSINESS_SERVICES,
  ...LICENSE_SERVICES,
  ...IMPORT_EXPORT_SERVICES,
  ...LABOUR_DEPARTMENT_SERVICES,
  ...RCMC_SERVICES,
  ...TRADE_EPR_SERVICES,
  ...GST_TAX_SERVICES,
  ...FILING_COMPLIANCE_SERVICES,
  ...MODIFICATION_COMPANY_SERVICES,
  ...TRADEMARK_SERVICES,
  ...INTELLECTUAL_PROPERTY_SERVICES,
  ...ISO_SERVICES,
  ...NO_PRICE_SERVICES,
  ...CORPORATE_COMPLIANCE_BATCH2_SERVICES,
  ...IT_DIGITAL_SERVICES,
];

export const getCategoryServiceBySlug = (slug: string): ServiceDetailConfig | undefined => {
  const normalized = slug.trim().toLowerCase().replace(/\/$/, '');
  const cleanNormalized = normalized.replace(/[^a-z0-9]/g, '');

  return ALL_CATEGORY_SERVICES.find(
    (s) =>
      s.slug.toLowerCase() === normalized ||
      s.name.toLowerCase() === normalized ||
      s.slug.replace(/[^a-z0-9]/g, '') === cleanNormalized ||
      s.name.toLowerCase().replace(/[^a-z0-9]/g, '') === cleanNormalized ||
      (s.keywords && s.keywords.some((k) => {
        const kNorm = k.toLowerCase().trim();
        return (
          kNorm === normalized ||
          kNorm.replace(/\s+/g, '-') === normalized ||
          kNorm.replace(/[^a-z0-9]/g, '') === cleanNormalized
        );
      })) ||
      (s.seoKeywords && s.seoKeywords.some((k) => {
        const kNorm = k.toLowerCase().trim();
        return (
          kNorm === normalized ||
          kNorm.replace(/\s+/g, '-') === normalized ||
          kNorm.replace(/[^a-z0-9]/g, '') === cleanNormalized
        );
      }))
  );
};

export const getCategoryServicesByCategory = (category: string): ServiceDetailConfig[] => {
  const normalized = category.trim().toLowerCase();
  return ALL_CATEGORY_SERVICES.filter(
    (s) => s.category.toLowerCase() === normalized || s.parentCategory.toLowerCase() === normalized
  );
};

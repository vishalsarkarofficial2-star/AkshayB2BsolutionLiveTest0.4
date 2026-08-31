import React, { useState, Suspense, lazy } from 'react';
import { TopUtilityBar } from './components/TopUtilityBar';
import { HeaderMegaMenu } from './components/HeaderMegaMenu';
import { HeroCarousel } from './components/HeroCarousel';
import { PartnersLogoStrip } from './components/PartnersLogoStrip';
import { ServicesShowcase } from './components/ServicesShowcase';
import { WhatMakesUsDifferent } from './components/WhatMakesUsDifferent';
import { CtaBanner } from './components/CtaBanner';
import { WorkingProcess } from './components/WorkingProcess';
import { OffersUpdatesDueDates } from './components/OffersUpdatesDueDates';
import { WhyLpiHighlights } from './components/WhyLpiHighlights';
import { AiComplianceSection } from './components/AiComplianceSection';
import { GlobalBrandsStrip } from './components/GlobalBrandsStrip';
import { WhyChooseUsGrid } from './components/WhyChooseUsGrid';
import { StatsCounter } from './components/StatsCounter';
import { CustomerReviews } from './components/CustomerReviews';
import { MultiStepLeadForm } from './components/MultiStepLeadForm';
import { MobileAppBanner } from './components/MobileAppBanner';
import { BlogSection } from './components/BlogSection';
import { Footer } from './components/Footer';
import { Chatbot } from './components/Chatbot';
import { PageLoadingFallback } from './components/PageLoadingFallback';
import { EmailJSIntegration } from './components/EmailJSIntegration';
import { pushAppPath, replaceAppPath } from './utils/urlHelper';

// Lazy load dedicated landing pages
const PrivateLimitedLanding = lazy(() => import('./pages/PrivateLimitedLanding').then(m => ({ default: m.PrivateLimitedLanding })));
const LegalDraftingLanding = lazy(() => import('./pages/LegalDraftingLanding').then(m => ({ default: m.LegalDraftingLanding })));
const SoleProprietorshipLanding = lazy(() => import('./pages/SoleProprietorshipLanding').then(m => ({ default: m.SoleProprietorshipLanding })));
const LLPLanding = lazy(() => import('./pages/LLPLanding').then(m => ({ default: m.LLPLanding })));
const OPCLanding = lazy(() => import('./pages/OPCLanding').then(m => ({ default: m.OPCLanding })));
const PartnershipFirmLanding = lazy(() => import('./pages/PartnershipFirmLanding').then(m => ({ default: m.PartnershipFirmLanding })));
const ProducerCompanyLanding = lazy(() => import('./pages/ProducerCompanyLanding').then(m => ({ default: m.ProducerCompanyLanding })));
const Section8CompanyLanding = lazy(() => import('./pages/Section8CompanyLanding').then(m => ({ default: m.Section8CompanyLanding })));
const NgoRegistrationLanding = lazy(() => import('./pages/NgoRegistrationLanding').then(m => ({ default: m.NgoRegistrationLanding })));
const SocietyRegistrationLanding = lazy(() => import('./pages/SocietyRegistrationLanding').then(m => ({ default: m.SocietyRegistrationLanding })));
const DarpanRegistrationLanding = lazy(() => import('./pages/DarpanRegistrationLanding').then(m => ({ default: m.DarpanRegistrationLanding })));
const BusinessWebsiteDevelopmentLanding = lazy(() => import('./pages/BusinessWebsiteDevelopmentLanding').then(m => ({ default: m.BusinessWebsiteDevelopmentLanding })));
const WebsiteDevelopmentLanding = lazy(() => import('./pages/WebsiteDevelopmentLanding').then(m => ({ default: m.WebsiteDevelopmentLanding })));
const AppDevelopmentLanding = lazy(() => import('./pages/AppDevelopmentLanding').then(m => ({ default: m.AppDevelopmentLanding })));
const CRMDevelopmentLanding = lazy(() => import('./pages/CRMDevelopmentLanding').then(m => ({ default: m.CRMDevelopmentLanding })));
const SoftwareDevelopmentLanding = lazy(() => import('./pages/SoftwareDevelopmentLanding').then(m => ({ default: m.SoftwareDevelopmentLanding })));
const DigitalMarketingLanding = lazy(() => import('./pages/DigitalMarketingLanding').then(m => ({ default: m.DigitalMarketingLanding })));
const TrustRegistrationLanding = lazy(() => import('./pages/TrustRegistrationLanding').then(m => ({ default: m.TrustRegistrationLanding })));
const TwelveAEightyGLanding = lazy(() => import('./pages/TwelveAEightyGLanding').then(m => ({ default: m.TwelveAEightyGLanding })));
const CsrOneRegistrationLanding = lazy(() => import('./pages/CsrOneRegistrationLanding').then(m => ({ default: m.CsrOneRegistrationLanding })));
const CorporateTaxLanding = lazy(() => import('./pages/CorporateTaxLanding').then(m => ({ default: m.CorporateTaxLanding })));
const CategoryServiceDetailLanding = lazy(() => import('./pages/CategoryServiceDetailLanding').then(m => ({ default: m.CategoryServiceDetailLanding })));
import { SERVICE_PAGES_MAP } from './pages/services';

// Lazy load RCMC Service Pages
const AEPCRegistrationPage = lazy(() => import('./pages/rcmc/AEPCRegistrationPage').then(m => ({ default: m.AEPCRegistrationPage })));
const APEDARegistrationPage = lazy(() => import('./pages/rcmc/APEDARegistrationPage').then(m => ({ default: m.APEDARegistrationPage })));
const CAPEXILRegistrationPage = lazy(() => import('./pages/rcmc/CAPEXILRegistrationPage').then(m => ({ default: m.CAPEXILRegistrationPage })));
const CHEMEXCILRegistrationPage = lazy(() => import('./pages/rcmc/CHEMEXCILRegistrationPage').then(m => ({ default: m.CHEMEXCILRegistrationPage })));
const EEPCRegistrationPage = lazy(() => import('./pages/rcmc/EEPCRegistrationPage').then(m => ({ default: m.EEPCRegistrationPage })));
const PharmexcilRegistrationPage = lazy(() => import('./pages/rcmc/PharmexcilRegistrationPage').then(m => ({ default: m.PharmexcilRegistrationPage })));
const PLEXCONCILRegistrationPage = lazy(() => import('./pages/rcmc/PLEXCONCILRegistrationPage').then(m => ({ default: m.PLEXCONCILRegistrationPage })));
const SpiceBoardRegistrationPage = lazy(() => import('./pages/rcmc/SpiceBoardRegistrationPage').then(m => ({ default: m.SpiceBoardRegistrationPage })));
const CoffeeBoardRegistrationPage = lazy(() => import('./pages/rcmc/CoffeeBoardRegistrationPage').then(m => ({ default: m.CoffeeBoardRegistrationPage })));
const FIEORegistrationPage = lazy(() => import('./pages/rcmc/FIEORegistrationPage').then(m => ({ default: m.FIEORegistrationPage })));
const MPEDARegistrationPage = lazy(() => import('./pages/rcmc/MPEDARegistrationPage').then(m => ({ default: m.MPEDARegistrationPage })));
import { ALL_CATEGORY_SERVICES, ServiceDetailConfig } from './data/categoryServices';

// Lazy load FSSAI Pages
const FssaiRegistrationLanding = lazy(() => import('./pages/FssaiRegistrationLanding').then(m => ({ default: m.FssaiRegistrationLanding })));
const FssaiStateLicenseLanding = lazy(() => import('./pages/FssaiStateLicenseLanding').then(m => ({ default: m.FssaiStateLicenseLanding })));
const FssaiCentralLicenseLanding = lazy(() => import('./pages/FssaiCentralLicenseLanding').then(m => ({ default: m.FssaiCentralLicenseLanding })));
const FssaiReturnsLanding = lazy(() => import('./pages/FssaiReturnsLanding').then(m => ({ default: m.FssaiReturnsLanding })));
const FssaiRenewalLanding = lazy(() => import('./pages/FssaiRenewalLanding').then(m => ({ default: m.FssaiRenewalLanding })));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage').then(m => ({ default: m.PrivacyPolicyPage })));
const TermsAndConditionsPage = lazy(() => import('./pages/TermsAndConditionsPage').then(m => ({ default: m.TermsAndConditionsPage })));
const RefundAndCancellationPage = lazy(() => import('./pages/RefundAndCancellationPage').then(m => ({ default: m.RefundAndCancellationPage })));
const ServiceDeliveryPage = lazy(() => import('./pages/ServiceDeliveryPage').then(m => ({ default: m.ServiceDeliveryPage })));
const AboutUsPage = lazy(() => import('./pages/AboutUsPage').then(m => ({ default: m.AboutUsPage })));
const AllServicesPage = lazy(() => import('./pages/AllServicesPage').then(m => ({ default: m.AllServicesPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const BookConsultationPage = lazy(() => import('./pages/BookConsultationPage').then(m => ({ default: m.BookConsultationPage })));
const MakePaymentPage = lazy(() => import('./pages/MakePaymentPage').then(m => ({ default: m.MakePaymentPage })));

import {
  BrochureModal,
  AppointmentModal,
  ServiceDetailModal,
  BlogArticleModal,
  SuccessModal
} from './components/Modals';
import { ServiceItem, BlogPost, LeadFormData } from './types';
import { SERVICES_DATA } from './data/servicesData';

export function App() {
  // Page view state
  const [currentPage, setCurrentPage] = useState<
    | 'home'
    | 'legal-drafting'
    | 'pvt-ltd-landing'
    | 'sole-proprietorship'
    | 'llp'
    | 'opc'
    | 'partnership'
    | 'producer'
    | 'section-8'
    | 'ngo-registration'
    | 'society-registration'
    | 'darpan-registration'
    | 'trust-registration'
    | '12a-80g-registration'
    | 'csr1-registration'
    | 'corporate-tax'
    | 'business-website-development'
    | 'website-development'
    | 'app-development'
    | 'crm-development'
    | 'software-development'
    | 'digital-marketing'
    | 'category-service-detail'
    | 'aepc-registration'
    | 'apeda-registration'
    | 'capexil-registration'
    | 'chemexcil-registration'
    | 'eepc-registration'
    | 'pharmexcil-registration'
    | 'plexconcil-registration'
    | 'spice-board-registration'
    | 'coffee-board-registration'
    | 'fieo-registration'
    | 'mpeda-registration'
    | 'fssai-basic-registration'
    | 'fssai-state-license'
    | 'fssai-central-license'
    | 'fssai-returns'
    | 'fssai-renewal'
    | 'privacy-policy'
    | 'terms-and-conditions'
    | 'refund-and-cancellation'
    | 'service-delivery'
    | 'about-us'
    | 'all-services'
    | 'contact'
    | 'book-consultation'
    | 'make-payment'
  >('home');

  const resolveRouteFromUrl = () => {
    let pathname = window.location.pathname.toLowerCase();
    const pathParts = pathname.split('/').filter(Boolean);
    const isGithubIo = typeof window !== 'undefined' && window.location.hostname.includes('github.io');
    if (isGithubIo && pathParts.length > 0) {
      pathParts.shift();
      pathname = '/' + pathParts.join('/');
    }

    const path = pathname.replace(/^\/+/, '');

    if (path.includes('privacy')) {
      setCurrentPage('privacy-policy');
      replaceAppPath('privacy-policy');
    } else if (path.includes('terms')) {
      setCurrentPage('terms-and-conditions');
      replaceAppPath('terms-and-conditions');
    } else if (path.includes('gst-cancellation') || path.includes('gst_cancellation')) {
      const catFound = ALL_CATEGORY_SERVICES.find((cs) => cs.slug === 'gst-cancellation');
      if (catFound) {
        setSelectedCategoryService(catFound);
        setCurrentPage('category-service-detail');
        replaceAppPath('gst-cancellation');
      }
    } else if (
      path === 'refund-and-cancellation' ||
      path === 'refund' ||
      path === 'cancellation-policy' ||
      path === 'refund-policy' ||
      (path.includes('refund') && !path.includes('gst') && !path.includes('tax'))
    ) {
      setCurrentPage('refund-and-cancellation');
      replaceAppPath('refund-and-cancellation');
    } else if (path.includes('service-delivery') || path.includes('delivery')) {
      setCurrentPage('service-delivery');
      replaceAppPath('service-delivery');
    } else if (path.includes('about')) {
      setCurrentPage('about-us');
    } else if (path.includes('all-services') || path.includes('allservices')) {
      setCurrentPage('all-services');
    } else if (path.includes('contact')) {
      setCurrentPage('contact');
    } else if (path.includes('book-consultation') || path.includes('consultation')) {
      setCurrentPage('book-consultation');
    } else if (path.includes('make-payment') || path.includes('payment')) {
      setCurrentPage('make-payment');
    } else if (path.includes('corporate-tax') || path.includes('corporate_tax')) {
      setCurrentPage('corporate-tax');
    } else if (path.includes('aepc')) {
      setCurrentPage('aepc-registration');
    } else if (path.includes('apeda')) {
      setCurrentPage('apeda-registration');
    } else if (path.includes('capexil')) {
      setCurrentPage('capexil-registration');
    } else if (path.includes('chemexcil')) {
      setCurrentPage('chemexcil-registration');
    } else if (path.includes('engineering-export') || path.includes('eepc')) {
      setCurrentPage('eepc-registration');
    } else if (path.includes('pharmaceutical-export') || path.includes('pharmexcil')) {
      setCurrentPage('pharmexcil-registration');
    } else if (path.includes('plastic-export') || path.includes('plexconcil')) {
      setCurrentPage('plexconcil-registration');
    } else if (path.includes('spice-board') || path.includes('spiceboard')) {
      setCurrentPage('spice-board-registration');
    } else if (path.includes('coffee-board') || path.includes('coffeeboard')) {
      setCurrentPage('coffee-board-registration');
    } else if (path.includes('fieo')) {
      setCurrentPage('fieo-registration');
    } else if (path.includes('mpeda')) {
      setCurrentPage('mpeda-registration');
    } else if (path.includes('fssai-basic') || path.includes('fssai-registration')) {
      setCurrentPage('fssai-basic-registration');
    } else if (path.includes('fssai-state')) {
      setCurrentPage('fssai-state-license');
    } else if (path.includes('fssai-central')) {
      setCurrentPage('fssai-central-license');
    } else if (path.includes('fssai-returns') || path.includes('fssai-return')) {
      setCurrentPage('fssai-returns');
    } else if (path.includes('fssai-renewal')) {
      setCurrentPage('fssai-renewal');
    }
  };

  React.useEffect(() => {
    resolveRouteFromUrl();
    window.addEventListener('popstate', resolveRouteFromUrl);
    return () => {
      window.removeEventListener('popstate', resolveRouteFromUrl);
    };
  }, []);

  // Modal states
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedCategoryService, setSelectedCategoryService] = useState<ServiceDetailConfig | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);
  const [submittedLead, setSubmittedLead] = useState<LeadFormData | null>(null);

  // Pre-selected service for lead form
  const [formPreselectedService, setFormPreselectedService] = useState<string>('');

  const handleSelectServiceByName = (serviceName: string) => {
    const lower = serviceName.toLowerCase().trim();

    if (lower === 'home' || lower === '/' || lower === 'homepage') {
      setCurrentPage('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (lower === 'about-us' || lower === 'about us' || lower.includes('about us') || lower === '/about-us') {
      setCurrentPage('about-us');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (lower === 'all-services' || lower === 'all services' || lower.includes('all services') || lower === '/all-services') {
      setCurrentPage('all-services');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (lower === 'contact' || lower === 'contact us' || lower.includes('contact us') || lower === '/contact') {
      setCurrentPage('contact');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (lower === 'book-consultation' || lower === 'book consultation' || lower.includes('book consultation') || lower === '/book-consultation') {
      setCurrentPage('book-consultation');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (lower === 'make-payment' || lower === 'make a payment' || lower.includes('make a payment') || lower === 'make payment' || lower === '/make-payment') {
      setCurrentPage('make-payment');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (lower === 'privacy-policy' || lower === 'privacy policy' || lower.includes('privacy') || lower === '/privacy-policy') {
      setCurrentPage('privacy-policy');
      pushAppPath('privacy-policy');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (lower === 'terms-and-conditions' || lower === 'terms & conditions' || lower.includes('terms') || lower === '/terms-and-conditions') {
      setCurrentPage('terms-and-conditions');
      pushAppPath('terms-and-conditions');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      lower === 'gst-cancellation' ||
      lower === 'gst cancellation' ||
      lower === 'gst cancellation & surrender' ||
      lower === 'gst-cancellation-surrender' ||
      lower.includes('gst cancellation') ||
      lower.includes('gst surrender') ||
      lower.includes('cancellation of gst') ||
      lower.includes('surrender gst') ||
      lower.includes('cancel gst') ||
      lower === 'gst cancellation and surrender'
    ) {
      const catFound = ALL_CATEGORY_SERVICES.find((cs) => cs.slug === 'gst-cancellation');
      if (catFound) {
        setSelectedCategoryService(catFound);
        setCurrentPage('category-service-detail');
        pushAppPath('gst-cancellation');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
    }

    if (
      lower === 'refund-and-cancellation' ||
      lower === 'refund & cancellation' ||
      lower === 'refund-cancellation' ||
      lower === 'refund policy' ||
      lower === 'cancellation policy' ||
      lower === 'refund and cancellation' ||
      lower === 'refund and cancellation policy' ||
      lower === '/refund-and-cancellation' ||
      lower === 'refund' ||
      ((lower.includes('refund') || lower.includes('cancellation policy')) && !lower.includes('gst') && !lower.includes('tax') && !lower.includes('itr') && !lower.includes('tds'))
    ) {
      setCurrentPage('refund-and-cancellation');
      pushAppPath('refund-and-cancellation');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (lower === 'service-delivery' || lower === 'service delivery' || lower.includes('delivery') || lower === '/service-delivery') {
      setCurrentPage('service-delivery');
      pushAppPath('service-delivery');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (lower === 'aepc' || lower.includes('aepc registration') || lower.includes('aepc rcmc') || lower.includes('apparel export promotion')) {
      setCurrentPage('aepc-registration');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (lower === 'apeda' || lower.includes('apeda registration') || lower.includes('apeda rcmc') || lower.includes('agricultural and processed food')) {
      setCurrentPage('apeda-registration');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (lower === 'capexil' || lower.includes('capexil registration') || lower.includes('capexil certification') || lower.includes('chemicals and allied products')) {
      setCurrentPage('capexil-registration');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (lower === 'chemexcil' || lower.includes('chemexcil registration') || lower.includes('chemexcil rcmc') || lower.includes('basic chemicals')) {
      setCurrentPage('chemexcil-registration');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (lower === 'engineering export promotion council' || lower.includes('eepc') || lower.includes('engineering export promotion')) {
      setCurrentPage('eepc-registration');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (lower === 'pharmaceutical export promotion council' || lower.includes('pharmexcil') || lower.includes('pharmaceutical export promotion')) {
      setCurrentPage('pharmexcil-registration');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (lower === 'plastic export promotion council' || lower.includes('plexconcil') || lower.includes('plastic export promotion')) {
      setCurrentPage('plexconcil-registration');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (lower === 'spice board' || lower.includes('spice board registration') || lower.includes('spices board') || lower.includes('cres certificate')) {
      setCurrentPage('spice-board-registration');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (lower === 'coffee board' || lower.includes('coffee board registration') || lower.includes('coffee board rcmc')) {
      setCurrentPage('coffee-board-registration');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (lower.includes('fieo registration') || lower === 'fieo' || lower.includes('federation of indian export')) {
      setCurrentPage('fieo-registration');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (lower.includes('mpeda registration') || lower === 'mpeda' || lower.includes('marine products export')) {
      setCurrentPage('mpeda-registration');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      lower === 'website development' ||
      lower.includes('website development') ||
      lower.includes('e-commerce website') ||
      lower.includes('custom website') ||
      lower.includes('landing page development') ||
      lower.includes('website redesign') ||
      lower.includes('website maintenance')
    ) {
      setCurrentPage('website-development');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      lower === 'app development' ||
      lower.includes('app development') ||
      lower.includes('android app') ||
      lower.includes('ios app') ||
      lower.includes('cross-platform app') ||
      lower.includes('business app')
    ) {
      setCurrentPage('app-development');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      lower === 'crm development' ||
      lower.includes('crm development') ||
      lower.includes('custom crm') ||
      lower.includes('sales crm') ||
      lower.includes('lead management crm') ||
      lower.includes('customer management system')
    ) {
      setCurrentPage('crm-development');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      lower === 'software development' ||
      lower.includes('software development') ||
      lower.includes('custom software') ||
      lower.includes('business management software') ||
      lower.includes('billing & invoice software') ||
      lower.includes('billing software') ||
      lower.includes('erp development') ||
      lower.includes('saas development')
    ) {
      setCurrentPage('software-development');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      lower === 'digital marketing' ||
      lower.includes('digital marketing') ||
      lower.includes('meta ads') ||
      lower.includes('google ads') ||
      lower.includes('social media marketing') ||
      lower.includes('lead generation') ||
      lower.includes('seo services') ||
      lower.includes('seo & gmb') ||
      lower.includes('social media management')
    ) {
      setCurrentPage('digital-marketing');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      lower === 'business website development' ||
      lower.includes('business website') ||
      lower.includes('corporate website')
    ) {
      setCurrentPage('business-website-development');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      lower.includes('corporate tax') ||
      lower.includes('corporate income tax') ||
      lower.includes('itr-6') ||
      lower.includes('itr 6') ||
      lower.includes('itr-7') ||
      lower.includes('itr 7')
    ) {
      setCurrentPage('corporate-tax');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (lower.includes('fssai central') || lower.includes('central food license') || lower.includes('central fssai')) {
      setCurrentPage('fssai-central-license');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (lower.includes('fssai state') || lower.includes('state food license') || lower.includes('state fssai')) {
      setCurrentPage('fssai-state-license');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (lower.includes('fssai returns') || lower.includes('fssai return') || lower.includes('fssai annual return')) {
      setCurrentPage('fssai-returns');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (lower.includes('fssai renewal') || lower.includes('fssai licensing renewal') || lower.includes('renew fssai') || lower.includes('renewal of fssai')) {
      setCurrentPage('fssai-renewal');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (lower === 'fssai' || lower.includes('fssai registration') || lower.includes('basic fssai') || lower.includes('basic food license')) {
      setCurrentPage('fssai-basic-registration');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // 1. First check in Category Services for high-precision matches (e.g. LLP Annual Compliance, Pvt Ltd Compliances, Winding Up Pvt Ltd, GST, etc.)
    const catFound = ALL_CATEGORY_SERVICES.find((cs) => {
      const csName = cs.name.toLowerCase();
      const csSlug = cs.slug.toLowerCase();
      return (
        csSlug === lower ||
        csSlug === lower.replace(/\s+/g, '-') ||
        csName === lower ||
        lower.includes(csName) ||
        csName.includes(lower) ||
        (cs.keywords && cs.keywords.some((k) => lower.includes(k.toLowerCase()) || k.toLowerCase().includes(lower)))
      );
    });

    if (catFound) {
      setSelectedCategoryService(catFound);
      setCurrentPage('category-service-detail');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (lower.includes('12a') || lower.includes('80g')) {
      setCurrentPage('12a-80g-registration');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (lower.includes('csr 1') || lower.includes('csr-1') || lower.includes('csr1')) {
      setCurrentPage('csr1-registration');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (lower.includes('darpan')) {
      setCurrentPage('darpan-registration');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (lower.includes('trust')) {
      setCurrentPage('trust-registration');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      lower.includes('legal drafting') ||
      lower.includes('legal agreement') ||
      lower.includes('agreement drafting') ||
      lower.includes('contract drafting') ||
      lower.includes('nda') ||
      lower.includes('sla') ||
      lower.includes('shareholder agreement')
    ) {
      setCurrentPage('legal-drafting');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (lower.includes('society')) {
      setCurrentPage('society-registration');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      lower.includes('ngo registration') ||
      lower.includes('non governmental')
    ) {
      setCurrentPage('ngo-registration');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      lower.includes('section 8') ||
      lower.includes('section-8') ||
      lower.includes('non profit') ||
      lower.includes('non-profit')
    ) {
      setCurrentPage('section-8');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      lower.includes('producer company') ||
      lower.includes('farmer producer') ||
      lower.includes('fpo')
    ) {
      setCurrentPage('producer');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      lower.includes('limited liability partnership') ||
      lower === 'llp' ||
      lower.includes('llp registration') ||
      lower.includes('llp-registration')
    ) {
      setCurrentPage('llp');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      lower.includes('partnership firm') ||
      lower.includes('partnership deed') ||
      (lower.includes('partnership') && !lower.includes('limited liability partnership') && !lower.includes('llp'))
    ) {
      setCurrentPage('partnership');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      lower.includes('sole proprietorship') ||
      lower.includes('proprietorship firm') ||
      lower.includes('sole proprietor')
    ) {
      setCurrentPage('sole-proprietorship');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      lower.includes('one person company') ||
      lower === 'opc' ||
      lower.includes('opc registration') ||
      lower.includes('opc company')
    ) {
      setCurrentPage('opc');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      lower.includes('private limited') ||
      lower.includes('pvt ltd')
    ) {
      setCurrentPage('pvt-ltd-landing');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const found = SERVICES_DATA.find(
      (s) => s.name.toLowerCase() === serviceName.toLowerCase()
    );
    if (found) {
      setSelectedService(found);
    } else {
      // Direct jump to lead form
      setFormPreselectedService(serviceName);
      const contactEl = document.getElementById('contact-consultation-section');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleApply = (serviceName?: string) => {
    const sName = (serviceName || '').toLowerCase().trim();

    if (sName.includes('12a') || sName.includes('80g')) {
      setCurrentPage('12a-80g-registration');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sName.includes('csr 1') || sName.includes('csr-1') || sName.includes('csr1')) {
      setCurrentPage('csr1-registration');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sName.includes('darpan')) {
      setCurrentPage('darpan-registration');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sName.includes('trust')) {
      setCurrentPage('trust-registration');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sName.includes('society')) {
      setCurrentPage('society-registration');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      sName.includes('ngo registration') ||
      sName.includes('non governmental')
    ) {
      setCurrentPage('ngo-registration');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      sName.includes('section 8') ||
      sName.includes('section-8') ||
      sName.includes('non profit') ||
      sName.includes('non-profit')
    ) {
      setCurrentPage('section-8');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      sName.includes('farmer producer') ||
      (sName.includes('producer') && !sName.includes('epr'))
    ) {
      setCurrentPage('producer');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      sName.includes('limited liability partnership') ||
      sName === 'llp' ||
      sName.includes('llp registration') ||
      sName.includes('llp-registration')
    ) {
      setCurrentPage('llp');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      sName.includes('partnership firm') ||
      sName.includes('partnership deed') ||
      (sName.includes('partnership') && !sName.includes('limited liability partnership') && !sName.includes('llp'))
    ) {
      setCurrentPage('partnership');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      sName.includes('sole proprietorship') ||
      sName.includes('proprietorship') ||
      sName.includes('sole proprietor')
    ) {
      setCurrentPage('sole-proprietorship');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      sName.includes('one person company') ||
      sName === 'opc' ||
      sName.includes('opc registration') ||
      sName.includes('opc company')
    ) {
      setCurrentPage('opc');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      sName.includes('private limited') ||
      sName.includes('pvt ltd')
    ) {
      setCurrentPage('pvt-ltd-landing');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sName.includes('fssai central') || sName.includes('central food license') || sName.includes('central fssai')) {
      setCurrentPage('fssai-central-license');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sName.includes('fssai state') || sName.includes('state food license') || sName.includes('state fssai')) {
      setCurrentPage('fssai-state-license');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sName.includes('fssai returns') || sName.includes('fssai return') || sName.includes('fssai annual return')) {
      setCurrentPage('fssai-returns');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sName.includes('fssai renewal') || sName.includes('fssai licensing renewal') || sName.includes('renew fssai') || sName.includes('renewal of fssai')) {
      setCurrentPage('fssai-renewal');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (sName === 'fssai' || sName.includes('fssai registration') || sName.includes('basic fssai') || sName.includes('basic food license')) {
      setCurrentPage('fssai-basic-registration');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    // Match in Category Services
    const catFound = ALL_CATEGORY_SERVICES.find((cs) => {
      const csName = cs.name.toLowerCase();
      const csSlug = cs.slug.toLowerCase();
      return (
        csSlug === sName ||
        csSlug === sName.replace(/\s+/g, '-') ||
        csName === sName ||
        sName.includes(csName) ||
        csName.includes(sName) ||
        (cs.keywords && cs.keywords.some((k) => sName.includes(k.toLowerCase()) || k.toLowerCase().includes(sName)))
      );
    });

    if (catFound) {
      setSelectedCategoryService(catFound);
      setCurrentPage('category-service-detail');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const found = SERVICES_DATA.find(
      (s) => s.name.toLowerCase() === serviceName?.toLowerCase()
    );
    if (found) {
      setSelectedService(found);
    } else {
      setFormPreselectedService(serviceName || '');
      const contactEl = document.getElementById('contact-consultation-section');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLeadSuccess = (lead: LeadFormData) => {
    setSubmittedLead(lead);
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentView = () => {
    if (currentPage === 'fssai-basic-registration') {
      return (
        <FssaiRegistrationLanding
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
          onOpenBrochure={() => setIsBrochureOpen(true)}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />
      );
    }

    if (currentPage === 'fssai-state-license') {
      return (
        <FssaiStateLicenseLanding
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
          onOpenBrochure={() => setIsBrochureOpen(true)}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />
      );
    }

    if (currentPage === 'fssai-central-license') {
      return (
        <FssaiCentralLicenseLanding
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
          onOpenBrochure={() => setIsBrochureOpen(true)}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />
      );
    }

    if (currentPage === 'fssai-returns') {
      return (
        <FssaiReturnsLanding
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
          onOpenBrochure={() => setIsBrochureOpen(true)}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />
      );
    }

    if (currentPage === 'fssai-renewal') {
      return (
        <FssaiRenewalLanding
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
          onOpenBrochure={() => setIsBrochureOpen(true)}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />
      );
    }

    if (currentPage === 'privacy-policy') {
      return (
        <PrivacyPolicyPage
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
        />
      );
    }

    if (currentPage === 'terms-and-conditions') {
      return (
        <TermsAndConditionsPage
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
        />
      );
    }

    if (currentPage === 'refund-and-cancellation') {
      return (
        <RefundAndCancellationPage
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
        />
      );
    }

    if (currentPage === 'service-delivery') {
      return (
        <ServiceDeliveryPage
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
        />
      );
    }

    if (currentPage === 'about-us') {
      return (
        <AboutUsPage
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
        />
      );
    }

    if (currentPage === 'all-services') {
      return (
        <AllServicesPage
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
        />
      );
    }

    if (currentPage === 'contact') {
      return (
        <ContactPage
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
          onSuccess={handleLeadSuccess}
        />
      );
    }

    if (currentPage === 'book-consultation') {
      return (
        <BookConsultationPage
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
          onSuccess={handleLeadSuccess}
        />
      );
    }

    if (currentPage === 'make-payment') {
      return (
        <MakePaymentPage
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
        />
      );
    }

    if (currentPage === 'society-registration') {
      return (
        <SocietyRegistrationLanding
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
          onOpenBrochure={() => setIsBrochureOpen(true)}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />
      );
    }

    if (currentPage === 'darpan-registration') {
      return (
        <DarpanRegistrationLanding
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
          onOpenBrochure={() => setIsBrochureOpen(true)}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />
      );
    }

    if (currentPage === 'trust-registration') {
      return (
        <TrustRegistrationLanding
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
          onOpenBrochure={() => setIsBrochureOpen(true)}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />
      );
    }

    if (currentPage === '12a-80g-registration') {
      return (
        <TwelveAEightyGLanding
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
          onOpenBrochure={() => setIsBrochureOpen(true)}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />
      );
    }

    if (currentPage === 'corporate-tax') {
      return (
        <CorporateTaxLanding
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
          onOpenBrochure={() => setIsBrochureOpen(true)}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />
      );
    }

    if (currentPage === 'csr1-registration') {
      return (
        <CsrOneRegistrationLanding
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
          onOpenBrochure={() => setIsBrochureOpen(true)}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />
      );
    }

    if (currentPage === 'ngo-registration') {
      return (
        <NgoRegistrationLanding
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
          onOpenBrochure={() => setIsBrochureOpen(true)}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />
      );
    }

    if (currentPage === 'section-8') {
      return (
        <Section8CompanyLanding
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
          onOpenBrochure={() => setIsBrochureOpen(true)}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />
      );
    }

    if (currentPage === 'producer') {
      return (
        <ProducerCompanyLanding
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
          onOpenBrochure={() => setIsBrochureOpen(true)}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />
      );
    }

    if (currentPage === 'partnership') {
      return (
        <PartnershipFirmLanding
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
          onOpenBrochure={() => setIsBrochureOpen(true)}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />
      );
    }

    if (currentPage === 'opc') {
      return (
        <OPCLanding
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
          onOpenBrochure={() => setIsBrochureOpen(true)}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />
      );
    }

    if (currentPage === 'llp') {
      return (
        <LLPLanding
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
          onOpenBrochure={() => setIsBrochureOpen(true)}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />
      );
    }

    if (currentPage === 'sole-proprietorship') {
      return (
        <SoleProprietorshipLanding
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
          onOpenBrochure={() => setIsBrochureOpen(true)}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />
      );
    }

    if (currentPage === 'legal-drafting') {
      return (
        <LegalDraftingLanding
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
          onApply={() => setIsAppointmentOpen(true)}
        />
      );
    }

    if (currentPage === 'pvt-ltd-landing') {
      return (
        <PrivateLimitedLanding
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
          onOpenBrochure={() => setIsBrochureOpen(true)}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />
      );
    }

    if (currentPage === 'business-website-development') {
      return (
        <BusinessWebsiteDevelopmentLanding
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
          onOpenBrochure={() => setIsBrochureOpen(true)}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />
      );
    }

    if (currentPage === 'website-development') {
      return (
        <WebsiteDevelopmentLanding
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
          onOpenBrochure={() => setIsBrochureOpen(true)}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />
      );
    }

    if (currentPage === 'app-development') {
      return (
        <AppDevelopmentLanding
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
          onOpenBrochure={() => setIsBrochureOpen(true)}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />
      );
    }

    if (currentPage === 'crm-development') {
      return (
        <CRMDevelopmentLanding
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
          onOpenBrochure={() => setIsBrochureOpen(true)}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />
      );
    }

    if (currentPage === 'software-development') {
      return (
        <SoftwareDevelopmentLanding
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
          onOpenBrochure={() => setIsBrochureOpen(true)}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />
      );
    }

    if (currentPage === 'digital-marketing') {
      return (
        <DigitalMarketingLanding
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
          onOpenBrochure={() => setIsBrochureOpen(true)}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />
      );
    }

    // RCMC Page Renderings
    if (currentPage === 'aepc-registration') {
      return (
        <AEPCRegistrationPage
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
          onOpenBrochure={() => setIsBrochureOpen(true)}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />
      );
    }

    if (currentPage === 'apeda-registration') {
      return (
        <APEDARegistrationPage
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
          onOpenBrochure={() => setIsBrochureOpen(true)}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />
      );
    }

    if (currentPage === 'capexil-registration') {
      return (
        <CAPEXILRegistrationPage
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
          onOpenBrochure={() => setIsBrochureOpen(true)}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />
      );
    }

    if (currentPage === 'chemexcil-registration') {
      return (
        <CHEMEXCILRegistrationPage
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
          onOpenBrochure={() => setIsBrochureOpen(true)}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />
      );
    }

    if (currentPage === 'eepc-registration') {
      return (
        <EEPCRegistrationPage
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
          onOpenBrochure={() => setIsBrochureOpen(true)}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />
      );
    }

    if (currentPage === 'pharmexcil-registration') {
      return (
        <PharmexcilRegistrationPage
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
          onOpenBrochure={() => setIsBrochureOpen(true)}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />
      );
    }

    if (currentPage === 'plexconcil-registration') {
      return (
        <PLEXCONCILRegistrationPage
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
          onOpenBrochure={() => setIsBrochureOpen(true)}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />
      );
    }

    if (currentPage === 'spice-board-registration') {
      return (
        <SpiceBoardRegistrationPage
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
          onOpenBrochure={() => setIsBrochureOpen(true)}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />
      );
    }

    if (currentPage === 'coffee-board-registration') {
      return (
        <CoffeeBoardRegistrationPage
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
          onOpenBrochure={() => setIsBrochureOpen(true)}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />
      );
    }

    if (currentPage === 'fieo-registration') {
      return (
        <FIEORegistrationPage
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
          onOpenBrochure={() => setIsBrochureOpen(true)}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />
      );
    }

    if (currentPage === 'mpeda-registration') {
      return (
        <MPEDARegistrationPage
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
          onOpenBrochure={() => setIsBrochureOpen(true)}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />
      );
    }

    // Category Service Detail Landing Page (EPR, GST, Filing, Food, License, Import/Export, Modification, etc.)
    if (currentPage === 'category-service-detail' && selectedCategoryService) {
      const DedicatedPage = SERVICE_PAGES_MAP[selectedCategoryService.slug];

      if (DedicatedPage) {
        return (
          <DedicatedPage
            onBackToHome={handleBackToHome}
            onSelectService={handleSelectServiceByName}
            onOpenBrochure={() => setIsBrochureOpen(true)}
            onOpenAppointment={() => setIsAppointmentOpen(true)}
          />
        );
      }

      return (
        <CategoryServiceDetailLanding
          service={selectedCategoryService}
          onBackToHome={handleBackToHome}
          onSelectService={handleSelectServiceByName}
          onOpenBrochure={() => setIsBrochureOpen(true)}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />
      );
    }

    // Home Page View
    return (
      <>
        {/* 1. TOP UTILITY BAR */}
        <TopUtilityBar onOpenBrochure={() => setIsBrochureOpen(true)} />

        {/* 2. HEADER & MEGA-MENU NAVIGATION */}
        <HeaderMegaMenu
          onSelectService={handleSelectServiceByName}
          onOpenConsultation={() => {
            const contactEl = document.getElementById('contact-consultation-section');
            if (contactEl) {
              contactEl.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        />

        <main className="flex-grow">
          {/* 3. HERO SECTION WITH IMAGE CAROUSEL & CTA PILLS */}
          <HeroCarousel
            onSelectService={(serviceName) => {
              if (serviceName.toLowerCase().includes('private limited')) {
                handleApply(serviceName);
              } else {
                handleSelectServiceByName(serviceName);
              }
            }}
            onOpenConsultation={() => setIsAppointmentOpen(true)}
          />

          {/* 4. LOGO STRIP / PARTNERS */}
          <PartnersLogoStrip />

          {/* 5. SERVICES SHOWCASE / POPULAR CATEGORIES */}
          <ServicesShowcase
            onSelectService={(srv) => setSelectedService(srv)}
            onApplyService={(srvName) => handleApply(srvName)}
          />

          {/* 6. WHAT MAKES US DIFFERENT */}
          <WhatMakesUsDifferent onLearnMore={() => setIsAppointmentOpen(true)} />

          {/* 7. "REGISTER YOUR BUSINESS WITH CONFIDENCE" CTA BANNER */}
          <CtaBanner onOpenAppointment={() => setIsAppointmentOpen(true)} />

          {/* 8. WORKING PROCESS SECTION */}
          <WorkingProcess />

          {/* 9. SPECIAL OFFERS + UPDATES & ALERTS + DUE DATES (3-Column) */}
          <OffersUpdatesDueDates
            onApplyOffer={(code) => {
              handleApply(`Offer: ${code}`);
            }}
            onOpenConsultation={() => {
              const contactEl = document.getElementById('contact-consultation-section');
              if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
            }}
          />

          {/* 10. "WHY LPI" / FEATURE HIGHLIGHTS */}
          <WhyLpiHighlights />

          {/* 11. "SIMPLIFYING COMPLIANCE THROUGH AI" DETAILED SECTION */}
          <AiComplianceSection />

          {/* 12. GLOBAL BRANDS LOGO STRIP */}
          <GlobalBrandsStrip />

          {/* 13. "WHY CHOOSE US" ICON GRID */}
          <WhyChooseUsGrid />

          {/* 14. STATS COUNTER SECTION ("Our Journey in Numbers") */}
          <StatsCounter />

          {/* 15. CUSTOMER REVIEWS SECTION */}
          <CustomerReviews />

          {/* 16. CONTACT INFO + MULTI-STEP LEAD FORM SECTION */}
          <MultiStepLeadForm
            initialService={formPreselectedService}
            onSuccess={handleLeadSuccess}
          />

          {/* 17. MOBILE APP PROMOTION BANNER */}
          <MobileAppBanner />

          {/* 18. BLOG SECTION ("Latest Tips & Trends") */}
          <BlogSection onReadArticle={(article) => setSelectedArticle(article)} />
        </main>

        {/* 19. FOOTER */}
        <Footer onSelectService={handleSelectServiceByName} />
      </>
    );
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-500 selection:text-white flex flex-col antialiased">
      <Suspense fallback={<PageLoadingFallback />}>
        {renderCurrentView()}
      </Suspense>

      {/* Interactive Modals */}
      <BrochureModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
      />

      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onApply={handleApply}
      />

      <BlogArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <SuccessModal
        lead={submittedLead}
        onClose={() => setSubmittedLead(null)}
      />

      {/* Floating Action Buttons */}
      <Chatbot />
      <EmailJSIntegration />
    </div>
  );
}

export default App;

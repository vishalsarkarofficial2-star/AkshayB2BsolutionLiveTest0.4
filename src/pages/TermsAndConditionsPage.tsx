import React, { useEffect } from 'react';
import {
  FileText,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Scale,
  CreditCard,
  Clock,
  Building,
  Lock,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  HelpCircle
} from 'lucide-react';
import { TopUtilityBar } from '../components/TopUtilityBar';
import { HeaderMegaMenu } from '../components/HeaderMegaMenu';
import { Footer } from '../components/Footer';
import { COMPANY_DETAILS } from '../data/servicesData';

interface TermsAndConditionsPageProps {
  onBackToHome: () => void;
  onSelectService: (serviceName: string) => void;
}

export const TermsAndConditionsPage: React.FC<TermsAndConditionsPageProps> = ({
  onBackToHome,
  onSelectService
}) => {
  useEffect(() => {
    document.title = 'Terms & Conditions | Akshay B2B Solutions';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Review the Terms & Conditions governing the use of Akshay B2B Solutions website, business registration services, professional fees, and customer responsibilities.');
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans antialiased">
      {/* Utility Bar & Header */}
      <TopUtilityBar />
      <HeaderMegaMenu
        onSelectService={onSelectService}
        onOpenConsultation={() => onSelectService('book-consultation')}
      />

      {/* Hero Header */}
      <section className="bg-[#164694] text-white py-12 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,90,0,0.15),transparent)] pointer-events-none"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-300 mb-6">
            <button
              onClick={onBackToHome}
              className="hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Home
            </button>
            <span>/</span>
            <span className="text-slate-300">Company Policy</span>
            <span>/</span>
            <span className="text-orange-400 font-semibold">Terms &amp; Conditions</span>
          </div>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#FF5A00]" />
              COMPANY POLICY
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Terms &amp; Conditions
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-3xl">
              These Terms &amp; Conditions govern the use of the Akshay B2B Solutions website and the services offered through it.
            </p>
            <div className="pt-2 text-xs text-slate-300">
              Last updated: August 27, 2026
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <main className="flex-grow max-w-5xl w-full mx-auto px-4 sm:px-6 py-10">
        <div className="space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">

          {/* Corporate Entity Details */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50/50 rounded-2xl border border-blue-100 p-6 sm:p-8 space-y-5">
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0 shadow-md shadow-blue-200">
                <Building className="w-6 h-6 text-white" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Registered Corporate Entity</span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B3D91]">
                  AKSHAYB2BSOLUTIONS Private Limited
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  A registered Service-Based Corporate Compliance, Legal Filings, Tax Advisory, and Technology consultancy incorporated under the Ministry of Corporate Affairs (MCA), Government of India.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-blue-100">
              <div className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-2xs">
                <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Corporate ID Number (CIN)</span>
                <span className="font-mono text-xs sm:text-sm font-bold text-slate-800 tracking-wider">U70200UP2026PTC251575</span>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-2xs">
                <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Company Type</span>
                <span className="text-xs sm:text-sm font-bold text-[#0B3D91]">Private Limited Company</span>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-2xs">
                <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Registered Category</span>
                <span className="text-xs sm:text-sm font-bold text-emerald-700">Service-Based Consultancy</span>
              </div>
            </div>
          </div>

          {/* 1. Acceptance of Terms */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center font-bold text-base flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-[#FF5A00]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B3D91]">
                1. Acceptance of Terms
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              By accessing or using the website of <strong className="text-slate-900">AKSHAYB2BSOLUTIONS Private Limited</strong> (CIN: U70200UP2026PTC251575) or purchasing/requesting any business services offered through it, you agree to be bound by these Terms &amp; Conditions, as well as our Privacy Policy and applicable service-level policies. If you do not agree with any part of these terms, you should not proceed with our services.
            </p>
          </section>

          {/* 2. Nature of Services */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center font-bold text-base flex-shrink-0">
                <Building className="w-5 h-5 text-[#0B3D91]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B3D91]">
                2. Nature of Services
              </h2>
            </div>
            <p className="text-slate-600">
              Akshay B2B Solutions provides professional management consultancy, business registration, licensing, tax compliance, intellectual property filing, statutory documentation, and government portal filing assistance. We act as independent professional advisors and service facilitators.
            </p>
          </section>

          {/* 3. Customer Responsibilities */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center font-bold text-base flex-shrink-0">
                <FileText className="w-5 h-5 text-[#0B3D91]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B3D91]">
                3. Customer Responsibilities
              </h2>
            </div>
            <p className="text-slate-600">
              To ensure timely processing and accurate statutory filings, customers must fulfill the following responsibilities:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              {[
                'Provide accurate, complete, and truthful personal and business information.',
                'Provide genuine, valid, and legally authentic documents for statutory filings.',
                'Respond promptly to requests for clarifications, OTP verifications, or signatures.',
                'Make required service and statutory payments in a timely manner.',
                'Cooperate with government verification calls, visits, or department queries where required.'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 4. Professional & Government Fees */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center font-bold text-base flex-shrink-0">
                <CreditCard className="w-5 h-5 text-[#0B3D91]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B3D91]">
                4. Professional &amp; Government Fees
              </h2>
            </div>
            <p className="text-slate-600">
              Our fee structure clearly distinguishes between:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl border border-slate-200 bg-blue-50/50 space-y-2">
                <span className="font-bold text-[#0B3D91] block text-sm">Akshay B2B Professional Service Fee</span>
                <p className="text-slate-600">
                  Charges for professional consultation, document drafting, verification, portal application preparation, and end-to-end service coordination.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-orange-50/50 space-y-2">
                <span className="font-bold text-[#FF5A00] block text-sm">Government / Statutory Fee</span>
                <p className="text-slate-600">
                  Official fees mandated by respective government departments (e.g., MCA, Trademark Registry, GST, FSSAI, DGFT). Government fees may be billed separately unless specifically stated as included in a promotional package.
                </p>
              </div>
            </div>
          </section>

          {/* 5. Processing Time */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center font-bold text-base flex-shrink-0">
                <Clock className="w-5 h-5 text-[#0B3D91]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B3D91]">
                5. Processing Time
              </h2>
            </div>
            <p className="text-slate-600">
              Stated service timelines are estimated business days based on average historic processing. Actual completion time depends on factors beyond our direct control, including government portal uptime, departmental workload, document completeness, customer verification response time, and third-party processing.
            </p>
          </section>

          {/* 6. Government Approval Disclaimer */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-4 border-l-4 border-l-[#FF5A00]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF5A00] flex items-center justify-center font-bold text-base flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-[#FF5A00]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B3D91]">
                6. Government Approval Disclaimer
              </h2>
            </div>
            <p className="text-slate-700 font-medium leading-relaxed">
              Akshay B2B Solutions assists with professional document preparation, verification, drafting, and portal submission. Final approval, registration issuance, or rejection is strictly at the sole discretion of the respective government authority or statutory department.
            </p>
          </section>

          {/* 7. Pricing & Payment */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center font-bold text-base flex-shrink-0">
                <CreditCard className="w-5 h-5 text-[#0B3D91]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B3D91]">
                7. Pricing &amp; Payment Responsibilities
              </h2>
            </div>
            <p className="text-slate-600">
              Pricing shown on the website may vary depending on the selected service scope, entity type, state jurisdiction, applicable government fees, and specific customization requirements. Payments must be completed through approved channels before statutory submission commences.
            </p>
          </section>

          {/* 8. Cancellation Policy Reference */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center font-bold text-base flex-shrink-0">
                <HelpCircle className="w-5 h-5 text-[#0B3D91]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B3D91]">
                8. Cancellation &amp; Refund Reference
              </h2>
            </div>
            <p className="text-slate-600">
              Service cancellations and refund requests are governed by our separate <button onClick={() => onSelectService('refund-and-cancellation')} className="text-[#0B3D91] font-bold underline hover:text-[#FF5A00]">Refund &amp; Cancellation Policy</button>. Please review it to understand eligibility, non-refundable government fees, and request procedures.
            </p>
          </section>

          {/* 9. Intellectual Property */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center font-bold text-base flex-shrink-0">
                <Lock className="w-5 h-5 text-[#0B3D91]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B3D91]">
                9. Intellectual Property
              </h2>
            </div>
            <p className="text-slate-600">
              All website designs, layout, graphics, text, logos, branding, and proprietary software materials belong exclusively to Akshay B2B Solutions. You may not copy, reproduce, distribute, or create derivative works without explicit written permission.
            </p>
          </section>

          {/* 10. Prohibited Use */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center font-bold text-base flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-[#0B3D91]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B3D91]">
                10. Prohibited Use
              </h2>
            </div>
            <p className="text-slate-600">
              Users are strictly prohibited from misusing the website or services for fraudulent activities, providing fake or forged documentation, unauthorized system access, data scraping, or engaging in any unlawful activities under Indian laws.
            </p>
          </section>

          {/* 11. Limitation of Liability */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center font-bold text-base flex-shrink-0">
                <Scale className="w-5 h-5 text-[#0B3D91]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B3D91]">
                11. Limitation of Liability
              </h2>
            </div>
            <p className="text-slate-600">
              To the maximum extent permitted by applicable law, Akshay B2B Solutions shall not be liable for indirect, incidental, consequential, or punitive damages arising from portal downtime, government rejection, customer document errors, or delays beyond reasonable control.
            </p>
          </section>

          {/* 12. Governing Law & Changes */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center font-bold text-base flex-shrink-0">
                <Scale className="w-5 h-5 text-[#0B3D91]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B3D91]">
                12. Governing Law &amp; Terms Modifications
              </h2>
            </div>
            <p className="text-slate-600">
              These Terms &amp; Conditions are governed by and construed in accordance with the applicable laws of India. We reserve the right to modify these terms at any time. Continued use of our website or services constitutes acceptance of the updated terms.
            </p>
          </section>

          {/* Contact CTA Card */}
          <section className="bg-[#164694] rounded-2xl p-6 sm:p-8 text-white space-y-6 shadow-md">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <Mail className="w-6 h-6 text-[#FF5A00]" />
                  Questions About Our Terms?
                </h3>
                <p className="text-slate-200 text-xs sm:text-sm">
                  Our legal compliance team is happy to assist you with any policy clarifications.
                </p>
              </div>
              <button
                onClick={() => onSelectService('contact')}
                className="px-6 py-3 rounded-xl bg-[#FF5A00] hover:bg-[#FF6B00] text-white font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer flex-shrink-0"
              >
                Contact Legal Support
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-blue-400/20 text-xs text-slate-200">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-orange-400" />
                <span>{COMPANY_DETAILS.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-orange-400" />
                <span>{COMPANY_DETAILS.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-orange-400" />
                <span>Noida &amp; Kanpur, UP</span>
              </div>
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <Footer onSelectService={onSelectService} />
    </div>
  );
};

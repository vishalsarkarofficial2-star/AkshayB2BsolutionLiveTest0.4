import React, { useEffect } from 'react';
import {
  RotateCcw,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  CreditCard,
  FileText,
  Clock,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  XCircle,
  HelpCircle,
  Building
} from 'lucide-react';
import { TopUtilityBar } from '../components/TopUtilityBar';
import { HeaderMegaMenu } from '../components/HeaderMegaMenu';
import { Footer } from '../components/Footer';
import { COMPANY_DETAILS } from '../data/servicesData';

interface RefundAndCancellationPageProps {
  onBackToHome: () => void;
  onSelectService: (serviceName: string) => void;
}

export const RefundAndCancellationPage: React.FC<RefundAndCancellationPageProps> = ({
  onBackToHome,
  onSelectService
}) => {
  useEffect(() => {
    document.title = 'Refund & Cancellation Policy | Akshay B2B Solutions';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Understand the Refund & Cancellation Policy of Akshay B2B Solutions, including cancellation eligibility, government fees, and refund processing procedures.');
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
            <span className="text-orange-400 font-semibold">Refund &amp; Cancellation</span>
          </div>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#FF5A00]" />
              COMPANY POLICY
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Refund &amp; Cancellation Policy
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-3xl">
              This policy explains the circumstances in which service cancellation or refund requests may be considered.
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

          {/* 1. Cancellation Before Processing */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center font-bold text-base flex-shrink-0">
                <RotateCcw className="w-5 h-5 text-[#FF5A00]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B3D91]">
                1. Cancellation Before Processing
              </h2>
            </div>
            <p className="text-slate-600">
              A customer may request service cancellation before substantial work, consultation, document drafting, or government portal filing has commenced. Refund eligibility in such cases will depend on the actual administrative work or consultation completed prior to the cancellation notice.
            </p>
          </section>

          {/* 2. Once Work Has Started */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center font-bold text-base flex-shrink-0">
                <FileText className="w-5 h-5 text-[#0B3D91]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B3D91]">
                2. Once Work Has Started
              </h2>
            </div>
            <p className="text-slate-600">
              Professional fees become partially or fully non-refundable once work activities have commenced. This includes activities such as:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              {[
                'Professional legal/tax consultation provided.',
                'Document review, auditing, and eligibility checks.',
                'Drafting MOA/AOA, affidavits, or customized deeds.',
                'Portal account creation, DSC processing, or application data entry.',
                'Filing and submission to official government departments.'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 3. Government Fees Non-Refundable */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-4 border-l-4 border-l-[#FF5A00]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF5A00] flex items-center justify-center font-bold text-base flex-shrink-0">
                <CreditCard className="w-5 h-5 text-[#FF5A00]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B3D91]">
                3. Government Fees &amp; Third-Party Charges
              </h2>
            </div>
            <p className="text-slate-700 font-medium leading-relaxed">
              Government or statutory fees already deposited into government department accounts (e.g., MCA, Income Tax, GST Network, FSSAI, Trademark Registry, DGFT) or paid to third-party vendors (e.g., DSC Certifying Authorities) are strictly non-refundable by Akshay B2B Solutions once payment has been remitted to the authority.
            </p>
          </section>

          {/* 4. Rejection by Government Authority */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center font-bold text-base flex-shrink-0">
                <XCircle className="w-5 h-5 text-[#0B3D91]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B3D91]">
                4. Rejection by Government Authority
              </h2>
            </div>
            <p className="text-slate-600">
              Government approvals and registrations are granted at the sole discretion of the respective statutory authority. An application rejection by a government department does not entitle an automatic refund of professional fees. Where appropriate, Akshay B2B Solutions will assist in identifying the reason for rejection and advise on corrective re-filing steps.
            </p>
          </section>

          {/* 5. Duplicate Payment Review */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center font-bold text-base flex-shrink-0">
                <CreditCard className="w-5 h-5 text-[#0B3D91]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B3D91]">
                5. Duplicate Payment Review
              </h2>
            </div>
            <p className="text-slate-600">
              In the event of a technical glitch resulting in a verified duplicate payment for the same order, the customer should notify our billing team with transaction references. Verified duplicate amounts will be refunded in full after gateway audit reconciliation.
            </p>
          </section>

          {/* 6. Refund Request Process */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center font-bold text-base flex-shrink-0">
                <FileText className="w-5 h-5 text-[#0B3D91]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B3D91]">
                6. Refund Request Process
              </h2>
            </div>
            <p className="text-slate-600">
              To request a cancellation or refund review, please submit an official request via email to <a href={`mailto:${COMPANY_DETAILS.email}`} className="text-[#0B3D91] font-bold underline">{COMPANY_DETAILS.email}</a> containing the following details:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs sm:text-sm">
              {[
                'Customer Full Name',
                'Registered Mobile Number',
                'Email Address',
                'Engaged Service Name',
                'Payment Reference / Transaction ID',
                'Detailed Reason for Refund Request'
              ].map((field, idx) => (
                <div key={idx} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                  <span className="text-slate-800 font-semibold">{field}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 7. Refund Processing */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center font-bold text-base flex-shrink-0">
                <Clock className="w-5 h-5 text-[#0B3D91]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B3D91]">
                7. Refund Processing &amp; Method
              </h2>
            </div>
            <p className="text-slate-600">
              Upon receiving a complete refund request, our accounts team will review service logs, government fee submissions, and work completed. Approved refunds will be credited back to the original payment source (bank account, card, UPI) or an agreed supported transfer method.
            </p>
          </section>

          {/* 8. Non-Refundable Situations */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center font-bold text-base flex-shrink-0">
                <XCircle className="w-5 h-5 text-[#FF5A00]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B3D91]">
                8. Non-Refundable Situations
              </h2>
            </div>
            <p className="text-slate-600">
              Refunds will not be entertained in situations including, but not limited to:
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 flex-shrink-0"></span>
                <span>Government fees already paid to statutory portals.</span>
              </li>
              <li className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 flex-shrink-0"></span>
                <span>Service scope substantially completed or application already filed.</span>
              </li>
              <li className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 flex-shrink-0"></span>
                <span>Submission of incorrect, invalid, or forged customer documentation.</span>
              </li>
              <li className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 flex-shrink-0"></span>
                <span>Customer failure to respond to clarification or OTP requests after work begins.</span>
              </li>
              <li className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 flex-shrink-0"></span>
                <span>Delays caused strictly by government department workload or portal maintenance.</span>
              </li>
              <li className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="w-2 h-2 rounded-full bg-red-500 mt-1.5 flex-shrink-0"></span>
                <span>Change of mind after substantial preparation or filing work has been executed.</span>
              </li>
            </ul>
          </section>

          {/* Contact CTA Card */}
          <section className="bg-[#164694] rounded-2xl p-6 sm:p-8 text-white space-y-6 shadow-md">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <Mail className="w-6 h-6 text-[#FF5A00]" />
                  Need Help With Your Payment or Order?
                </h3>
                <p className="text-slate-200 text-xs sm:text-sm">
                  Our customer support team is available to assist you with order status or billing queries.
                </p>
              </div>
              <button
                onClick={() => onSelectService('contact')}
                className="px-6 py-3 rounded-xl bg-[#FF5A00] hover:bg-[#FF6B00] text-white font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer flex-shrink-0"
              >
                Submit Billing Enquiry
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

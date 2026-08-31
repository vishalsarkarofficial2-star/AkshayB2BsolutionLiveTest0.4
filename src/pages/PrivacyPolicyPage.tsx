import React, { useEffect } from 'react';
import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  UserCheck,
  Server,
  Building,
  Mail,
  Phone,
  Clock,
  MapPin,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  Database,
  Globe,
  RefreshCw,
  Scale
} from 'lucide-react';
import { TopUtilityBar } from '../components/TopUtilityBar';
import { HeaderMegaMenu } from '../components/HeaderMegaMenu';
import { Footer } from '../components/Footer';
import { COMPANY_DETAILS } from '../data/servicesData';

interface PrivacyPolicyPageProps {
  onBackToHome: () => void;
  onSelectService: (serviceName: string) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({
  onBackToHome,
  onSelectService
}) => {
  useEffect(() => {
    document.title = 'Privacy Policy | Akshay B2B Solutions';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Read the official Privacy Policy of Akshay B2B Solutions regarding customer data collection, security safeguards, document protection, and DPDP compliance.');
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
            <span className="text-orange-400 font-semibold">Privacy Policy</span>
          </div>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#FF5A00]" />
              COMPANY POLICY
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Privacy Policy
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-3xl">
              At Akshay B2B Solutions, we respect your privacy and are committed to protecting the personal information you share with us while using our website and services.
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

          {/* Intro Card */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center font-bold text-base flex-shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#FF5A00]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B3D91]">
                Our Privacy Commitment
              </h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              This Privacy Policy applies to all visitors, users, and clients of <strong className="text-slate-900">AKSHAYB2BSOLUTIONS Private Limited</strong> (CIN: U70200UP2026PTC251575). It describes how we collect, handle, store, and safeguard your personal and business data across our website and statutory filing operations.
            </p>
          </div>

          {/* 1. Information We Collect */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center font-bold text-base flex-shrink-0">
                <FileText className="w-5 h-5 text-[#0B3D91]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B3D91]">
                1. Information We Collect
              </h2>
            </div>
            <p className="text-slate-600">
              We collect information that is reasonably necessary to provide business registration, tax compliance, licensing, and documentation services:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-1.5">
                <span className="font-bold text-[#0B3D91] flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-[#FF5A00]" /> Contact &amp; Personal Info
                </span>
                <p className="text-slate-600">Full name, mobile number, email address, and postal address submitted via contact or service booking forms.</p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-1.5">
                <span className="font-bold text-[#0B3D91] flex items-center gap-2">
                  <Building className="w-4 h-4 text-[#FF5A00]" /> Business Details
                </span>
                <p className="text-slate-600">Entity name, business activity, state of operation, PAN, GSTIN, and registration requirements.</p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-1.5">
                <span className="font-bold text-[#0B3D91] flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[#FF5A00]" /> Documents Voluntarily Submitted
                </span>
                <p className="text-slate-600">KYC documents, identity proofs, address proofs, bank statements, ownership documents, NOCs, and agreements necessary for government filing.</p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-1.5">
                <span className="font-bold text-[#0B3D91] flex items-center gap-2">
                  <Server className="w-4 h-4 text-[#FF5A00]" /> Technical &amp; Usage Data
                </span>
                <p className="text-slate-600">IP address, browser type, device details, website usage data, and payment/reference confirmation numbers.</p>
              </div>
            </div>
          </section>

          {/* 2. How We Use Your Information */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center font-bold text-base flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B3D91]">
                2. How We Use Your Information
              </h2>
            </div>
            <p className="text-slate-600">
              We use the collected information exclusively for valid operational, legal, and statutory service fulfillment purposes:
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              {[
                'Processing service enquiries and providing requested consultancy services.',
                'Preparing, verifying, and submitting applications on government portals.',
                'Customer communication regarding status updates, document requests, and renewals.',
                'Managing consultation appointments and scheduling advisor callbacks.',
                'Verifying payments and issuing official invoices/receipts.',
                'Service delivery, document transmission, and post-filing support.',
                'Improving website performance and customer support experience.',
                'Complying with applicable Indian legal and regulatory requirements.'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 3. Document & Data Security */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center font-bold text-base flex-shrink-0">
                <Lock className="w-5 h-5 text-[#0B3D91]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B3D91]">
                3. Document &amp; Data Security
              </h2>
            </div>
            <p className="text-slate-600">
              We employ reasonable physical, technical, organizational, and administrative safeguards to protect customer information and documents against unauthorized access, loss, misuse, or alteration. Access to confidential client files is restricted to authorized personnel who require access to perform specific service tasks.
            </p>
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm font-medium flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
              <span>
                While we implement industry-aligned security controls (such as 256-bit SSL encryption for data transmission and restricted cloud storage access), no digital transmission or electronic storage method can be guaranteed as entirely immune to all vulnerabilities.
              </span>
            </div>
          </section>

          {/* 4. Sharing of Information */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center font-bold text-base flex-shrink-0">
                <Building className="w-5 h-5 text-[#0B3D91]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B3D91]">
                4. Sharing of Information
              </h2>
            </div>
            <p className="text-slate-600">
              We do not sell, trade, or rent customer personal information to third parties as a normal business practice. Information is shared strictly when reasonably necessary with:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A00] mt-2 flex-shrink-0"></span>
                <span><strong className="text-slate-900">Authorised Team Members &amp; Professional Consultants:</strong> Legal, tax, and compliance experts assigned to process your service.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A00] mt-2 flex-shrink-0"></span>
                <span><strong className="text-slate-900">Government Portals &amp; Departments:</strong> Official regulatory authorities (e.g., MCA, Income Tax, GST Network, FSSAI, DGFT, IP India) required for filing applications.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A00] mt-2 flex-shrink-0"></span>
                <span><strong className="text-slate-900">Payment Providers:</strong> Secure gateway partners processing transaction payments and refunds.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A00] mt-2 flex-shrink-0"></span>
                <span><strong className="text-slate-900">Legal &amp; Regulatory Authorities:</strong> Where mandated by applicable court orders, statutory laws, or government investigations.</span>
              </li>
            </ul>
          </section>

          {/* 5. Cookies & Website Analytics */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center font-bold text-base flex-shrink-0">
                <Globe className="w-5 h-5 text-[#0B3D91]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B3D91]">
                5. Cookies &amp; Website Analytics
              </h2>
            </div>
            <p className="text-slate-600">
              Our website uses basic essential cookies and technical session markers to ensure proper page navigation, secure form submission, and optimal performance. We may utilize basic analytics tools to monitor general aggregate site traffic without identifying individual users. You can adjust your browser settings to decline cookies, though certain site features may function with reduced interactivity.
            </p>
          </section>

          {/* 6. Third-Party Links */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center font-bold text-base flex-shrink-0">
                <Globe className="w-5 h-5 text-[#0B3D91]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B3D91]">
                6. Third-Party Links
              </h2>
            </div>
            <p className="text-slate-600">
              Our website may contain links to external third-party websites (such as government portals, official payment gateways, or regulatory news sources). Akshay B2B Solutions does not control and is not responsible for the content or privacy practices of such external sites. We encourage users to review the privacy policies of any third-party websites they visit.
            </p>
          </section>

          {/* 7. Data Retention */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center font-bold text-base flex-shrink-0">
                <Database className="w-5 h-5 text-[#0B3D91]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B3D91]">
                7. Data Retention
              </h2>
            </div>
            <p className="text-slate-600">
              Customer personal information and uploaded statutory documents are retained only for as long as necessary to fulfill the requested services, provide ongoing compliance reminders, resolve disputes, and satisfy mandatory legal, tax, or statutory audit retention requirements under Indian law.
            </p>
          </section>

          {/* 8. User Rights */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center font-bold text-base flex-shrink-0">
                <Scale className="w-5 h-5 text-[#0B3D91]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B3D91]">
                8. User Rights
              </h2>
            </div>
            <p className="text-slate-600">
              You have the right to request access to your personal information stored with us, request corrections to inaccurate details, or request deletion of data where statutory retention obligations do not apply. To exercise your rights, please contact our support team using the official contact channels listed below.
            </p>
          </section>

          {/* 9. Policy Updates */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center font-bold text-base flex-shrink-0">
                <RefreshCw className="w-5 h-5 text-[#0B3D91]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B3D91]">
                9. Policy Updates
              </h2>
            </div>
            <p className="text-slate-600">
              This Privacy Policy may be updated periodically to reflect changes in regulatory standards, technology, or business operations. Any modifications will be posted on this page with an updated &ldquo;Last updated&rdquo; date. We encourage you to review this page periodically.
            </p>
          </section>

          {/* 10. Contact Us CTA Card */}
          <section className="bg-[#164694] rounded-2xl p-6 sm:p-8 text-white space-y-6 shadow-md">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <Mail className="w-6 h-6 text-[#FF5A00]" />
                  Have Privacy Questions?
                </h3>
                <p className="text-slate-200 text-xs sm:text-sm">
                  Our privacy team is available to address any data inquiries or document protection questions.
                </p>
              </div>
              <button
                onClick={() => onSelectService('contact')}
                className="px-6 py-3 rounded-xl bg-[#FF5A00] hover:bg-[#FF6B00] text-white font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer flex-shrink-0"
              >
                Contact Support Team
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

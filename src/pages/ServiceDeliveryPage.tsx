import React, { useEffect } from 'react';
import {
  Clock,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  FileText,
  Mail,
  Phone,
  MapPin,
  ArrowLeft,
  FileCheck,
  Send,
  Download,
  CheckSquare,
  Search,
  Users
} from 'lucide-react';
import { TopUtilityBar } from '../components/TopUtilityBar';
import { HeaderMegaMenu } from '../components/HeaderMegaMenu';
import { Footer } from '../components/Footer';
import { COMPANY_DETAILS } from '../data/servicesData';

interface ServiceDeliveryPageProps {
  onBackToHome: () => void;
  onSelectService: (serviceName: string) => void;
}

export const ServiceDeliveryPage: React.FC<ServiceDeliveryPageProps> = ({
  onBackToHome,
  onSelectService
}) => {
  useEffect(() => {
    document.title = 'Service Delivery Policy | Akshay B2B Solutions';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Explore the Service Delivery Policy of Akshay B2B Solutions outlining our 5-step digital delivery process, document verification, certificate delivery, and turnaround times.');
    }
  }, []);

  const PROCESS_STEPS = [
    {
      step: '01',
      title: 'Service Selection',
      desc: 'Choose your required legal, tax, or business licensing service and submit initial details.',
      icon: Search
    },
    {
      step: '02',
      title: 'Document Collection',
      desc: 'Upload or share necessary KYC proofs, business details, and statutory forms.',
      icon: FileText
    },
    {
      step: '03',
      title: 'Document Verification',
      desc: 'Our compliance experts audit all documents for accuracy and statutory formatting.',
      icon: FileCheck
    },
    {
      step: '04',
      title: 'Application Processing / Filing',
      desc: 'Application is prepared, signed/authenticated, and submitted to the government department.',
      icon: Send
    },
    {
      step: '05',
      title: 'Certificate / Service Completion',
      desc: 'Final government certificate, filing receipt, or deliverable is delivered digitally.',
      icon: Download
    }
  ];

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
            <span className="text-orange-400 font-semibold">Service Delivery</span>
          </div>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#FF5A00]" />
              COMPANY POLICY
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Service Delivery Policy
            </h1>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-3xl">
              This policy explains how Akshay B2B Solutions processes and delivers business registration, licensing, compliance and documentation services.
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

          {/* 1. Service Delivery Method */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center font-bold text-base flex-shrink-0">
                <Send className="w-5 h-5 text-[#FF5A00]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B3D91]">
                1. Digital Service Delivery Method
              </h2>
            </div>
            <p className="text-slate-600">
              Akshay B2B Solutions operates a paperless, technology-driven execution model. Most business registration, compliance, and licensing deliverables are delivered digitally through:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs sm:text-sm">
              {[
                'Registered Email Delivery',
                'Dedicated Communication Channels',
                'Downloadable Digital PDF Certificates',
                'Secure Cloud Document Sharing',
                'Government Portal Direct Receipts'
              ].map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl border border-slate-200 bg-slate-50 flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0" />
                  <span className="text-slate-800 font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* 2. Visual 5-Step Process */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center font-bold text-base flex-shrink-0">
                <CheckSquare className="w-5 h-5 text-[#0B3D91]" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0B3D91]">
                  2. Our 5-Step Service Execution Process
                </h2>
                <p className="text-xs text-slate-500">Structured workflow ensuring statutory precision at every stage</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {PROCESS_STEPS.map((step) => {
                const IconComp = step.icon;
                return (
                  <div key={step.step} className="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-3 relative group hover:border-[#0B3D91] transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-extrabold text-[#FF5A00] bg-orange-50 px-2 py-0.5 rounded-md border border-orange-200">
                        STEP {step.step}
                      </span>
                      <IconComp className="w-5 h-5 text-[#0B3D91]" />
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm leading-snug">{step.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 3. Required Customer Documents */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center font-bold text-base flex-shrink-0">
                <FileText className="w-5 h-5 text-[#0B3D91]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B3D91]">
                3. Required Customer Documents
              </h2>
            </div>
            <p className="text-slate-600">
              Service delivery timelines begin strictly after all required customer documents, identity proofs, address details, and necessary information have been submitted and validated. Delay in providing complete documents will proportionately shift the delivery schedule.
            </p>
          </section>

          {/* 4. Estimated Processing Time */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center font-bold text-base flex-shrink-0">
                <Clock className="w-5 h-5 text-[#0B3D91]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B3D91]">
                4. Estimated Processing Time
              </h2>
            </div>
            <p className="text-slate-600">
              Turnaround times vary by specific service type and jurisdiction. Stated timelines are estimated business days and depend on:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              {[
                'Government portal uptime & maintenance windows.',
                'Departmental officer workload & approval queues.',
                'State-specific municipal & statutory regulations.',
                'Accuracy and authenticity of submitted documents.',
                'Third-party verification (e.g., bank validation, DSC issuing authority).'
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <Clock className="w-4 h-4 text-[#FF5A00] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* 5. Certificate Delivery & Government Delays */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-4 border-l-4 border-l-[#FF5A00]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#FF5A00] flex items-center justify-center font-bold text-base flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-[#FF5A00]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B3D91]">
                5. Delivery of Certificates &amp; Government Delays
              </h2>
            </div>
            <p className="text-slate-700 font-medium leading-relaxed">
              Once issued by the respective government authority, registration certificates, licenses, or filed acknowledgments will be immediately forwarded to your registered email and communication channels. Processing delays caused directly by government departmental backlogs or portal downtime are beyond the control of Akshay B2B Solutions, but our team continuously monitors and follows up on pending applications.
            </p>
          </section>

          {/* 6. Incorrect Documents & Customer Communication */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center font-bold text-base flex-shrink-0">
                <Users className="w-5 h-5 text-[#0B3D91]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B3D91]">
                6. Customer Communication &amp; Document Corrections
              </h2>
            </div>
            <p className="text-slate-600">
              Incomplete or unreadable documents can result in government rejections or resubmission notices. Our team will notify you promptly via phone, WhatsApp, or email if additional documents or corrections are required. Fast customer response ensures minimal interruption to the delivery timeline.
            </p>
          </section>

          {/* 7. Completion of Service */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center font-bold text-base flex-shrink-0">
                <CheckCircle2 className="w-5 h-5 text-[#0B3D91]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B3D91]">
                7. Completion of Service
              </h2>
            </div>
            <p className="text-slate-600">
              A service is considered fully completed when the agreed professional scope has been fulfilled. This includes: certificate/license delivery, official filing submission receipt, completed audit report, or delivery of statutory documentation as agreed upon in the service scope.
            </p>
          </section>

          {/* 8. Post-Delivery Support */}
          <section className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center font-bold text-base flex-shrink-0">
                <Mail className="w-5 h-5 text-[#0B3D91]" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B3D91]">
                8. Support After Delivery
              </h2>
            </div>
            <p className="text-slate-600">
              We provide reasonable post-delivery support to clarify questions regarding your completed registration, certificate validity, or statutory renewal requirements.
            </p>
          </section>

          {/* Contact CTA Card */}
          <section className="bg-[#164694] rounded-2xl p-6 sm:p-8 text-white space-y-6 shadow-md">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <Mail className="w-6 h-6 text-[#FF5A00]" />
                  Need Help With Your Service Delivery?
                </h3>
                <p className="text-slate-200 text-xs sm:text-sm">
                  Our operations team is available to assist you with delivery updates or document requests.
                </p>
              </div>
              <button
                onClick={() => onSelectService('contact')}
                className="px-6 py-3 rounded-xl bg-[#FF5A00] hover:bg-[#FF6B00] text-white font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer flex-shrink-0"
              >
                Track Service Status
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

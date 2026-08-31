import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  ArrowLeft,
  Building2,
  MessageSquare,
  Sparkles,
  HelpCircle,
  Headphones,
  ExternalLink
} from 'lucide-react';
import { sendLeadEmail } from '../lib/emailService';
import { TopUtilityBar } from '../components/TopUtilityBar';
import { HeaderMegaMenu } from '../components/HeaderMegaMenu';
import { Footer } from '../components/Footer';
import { COMPANY_DETAILS, MEGA_CATEGORIES } from '../data/servicesData';
import { LeadFormData } from '../types';

interface ContactPageProps {
  onBackToHome: () => void;
  onSelectService: (serviceName: string) => void;
  onSuccess?: (lead: LeadFormData) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onBackToHome,
  onSelectService,
  onSuccess
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Private Limited Company',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Extract all service items for dropdown
  const allServicesList = React.useMemo(() => {
    const set = new Set<string>();
    MEGA_CATEGORIES.forEach((cat) => {
      cat.columns.forEach((col) => {
        col.items.forEach((item) => set.add(item));
      });
    });
    return Array.from(set);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const lead: LeadFormData = {
      fullName: formData.name,
      phone: formData.phone,
      email: formData.email,
      state: 'Uttar Pradesh',
      businessType: 'Private Limited Company',
      businessActivity: formData.service,
      servicesRequired: [formData.service],
      panNumber: '',
      notes: formData.message
    };

    await sendLeadEmail({
      sourceForm: 'Contact Page Form',
      ...lead,
      servicesRequired: lead.servicesRequired.join(', ')
    });

    setIsSubmitted(true);
    if (onSuccess) {
      onSuccess(lead);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans antialiased">
      {/* Utility Bar & Header */}
      <TopUtilityBar />
      <HeaderMegaMenu
        onSelectService={onSelectService}
        onOpenConsultation={() => onSelectService('book-consultation')}
      />

      {/* Hero Header */}
      <section className="bg-[#164694] text-white py-14 sm:py-16 px-4 sm:px-6 relative overflow-hidden border-b border-slate-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,90,0,0.18),transparent)] pointer-events-none"></div>
        <div className="absolute inset-0 z-0 pointer-events-none opacity-15 overflow-hidden">
          <div className="absolute -top-12 -right-12 w-80 h-80 bg-orange-400/30 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-12 -left-12 w-80 h-80 bg-blue-300/30 rounded-full blur-2xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10 space-y-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <button
              onClick={onBackToHome}
              className="hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Home
            </button>
            <span>/</span>
            <span className="text-[#FF5A00] font-semibold">Contact Us</span>
          </div>

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 text-xs font-semibold uppercase tracking-wider">
              <Headphones className="w-4 h-4 text-[#FF5A00]" />
              24/7 EXPERT COMPLIANCE HELPLINE
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Let&apos;s Talk About Your Business Needs
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Have questions about registration, licensing, taxation or compliance? Our team is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 py-12 space-y-12">
        
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center">
              <Phone className="w-5 h-5 text-[#FF5A00]" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phone Support</span>
              <a href={`tel:${COMPANY_DETAILS.phoneClean}`} className="block text-base font-bold text-[#0B3D91] hover:underline">
                {COMPANY_DETAILS.phone}
              </a>
              <p className="text-xs text-slate-500">Call or WhatsApp us for instant help</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center">
              <Mail className="w-5 h-5 text-[#FF5A00]" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Inquiry</span>
              <a href={`mailto:${COMPANY_DETAILS.email}`} className="block text-base font-bold text-[#0B3D91] hover:underline truncate">
                {COMPANY_DETAILS.email}
              </a>
              <p className="text-xs text-slate-500">Response within 15 minutes</p>
            </div>
          </div>

          <a
            href={COMPANY_DETAILS.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3 block hover:border-[#0B3D91] hover:shadow-md transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center group-hover:bg-[#0B3D91] group-hover:text-white transition-colors">
              <MapPin className="w-5 h-5 text-[#FF5A00] group-hover:text-white transition-colors" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Business Address</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#0B3D91] opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-xs font-bold text-slate-800 leading-snug group-hover:text-[#0B3D91] transition-colors">
                Noida, Kanpur &amp; Raebareli, UP, India
              </p>
              <p className="text-xs text-slate-500">Head Office &amp; Branch Network</p>
            </div>
          </a>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0B3D91] flex items-center justify-center">
              <Clock className="w-5 h-5 text-[#FF5A00]" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Working Hours</span>
              <p className="text-xs font-bold text-slate-800">
                {COMPANY_DETAILS.workingHours}
              </p>
              <p className="text-xs text-slate-500">Sunday Closed</p>
            </div>
          </div>
        </div>

        {/* Form & Trust Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Side */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
            <div className="space-y-1 border-b border-slate-100 pb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0B3D91]">
                Send Us a Message
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Fill out the form below and an expert consultant will get back to you immediately.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 p-8 rounded-2xl text-center space-y-4">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-xl text-emerald-900">Enquiry Received Successfully!</h3>
                <p className="text-xs sm:text-sm text-emerald-700 max-w-md mx-auto">
                  Thank you <strong className="text-emerald-950">{formData.name}</strong>. Our senior compliance expert will call you back on <strong className="text-emerald-950">{formData.phone}</strong> shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-5 py-2.5 bg-[#0B3D91] text-white text-xs font-bold rounded-xl hover:bg-[#082A66] transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3D91]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3D91]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3D91]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 block">
                      Service Required <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3D91] bg-white"
                    >
                      {allServicesList.map((srv) => (
                        <option key={srv} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700 block">
                    Message / Business Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your business requirement or query..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3D91]"
                  ></textarea>
                </div>

                {/* Form Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-2">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-200">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>100% Confidential</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-200">
                    <Clock className="w-3.5 h-3.5 text-[#FF5A00] flex-shrink-0" />
                    <span>Under 15 Min Callback</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-200">
                    <MapPin className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                    <span>Pan India Support</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#FF5A00] hover:bg-[#FF6B00] text-white font-bold text-sm transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Send Enquiry
                </button>
              </form>
            )}
          </div>

          {/* Right Info Box & Map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-[#0B3D91] to-[#082A66] text-white rounded-2xl shadow-md p-6 sm:p-8 space-y-6">
              <h3 className="font-extrabold text-xl text-white border-b border-white/10 pb-3 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-[#FF5A00]" />
                Akshay B2B Solutions
              </h3>

              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                We are India&apos;s trusted business partner helping startups, MSMEs, and enterprises achieve effortless statutory compliance across all Indian states.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0 mt-0.5" />
                  <span>Free initial consultation with senior compliance advisors.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0 mt-0.5" />
                  <span>Pan India government portal access &amp; expedite filings.</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5A00] flex-shrink-0 mt-0.5" />
                  <span>Digital document collection with zero paper physical visit needed.</span>
                </div>
              </div>
            </div>

            {/* Google Map Location Card with Real Interactive Map */}
            <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0B3D91] uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-[#FF5A00]" />
                  Head Office Location
                </span>
                <a
                  href={COMPANY_DETAILS.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-[#0B3D91] hover:text-[#FF5A00] flex items-center gap-1 bg-blue-50 hover:bg-orange-50 px-2.5 py-1 rounded-full transition-colors"
                >
                  <ExternalLink className="w-3 h-3" /> Open in Maps
                </a>
              </div>
              
              {/* Real Interactive Map Frame */}
              <div className="w-full h-72 rounded-xl overflow-hidden border border-slate-200 relative shadow-inner bg-slate-100">
                <iframe
                  title="Akshay B2B Solutions Head Office Map Location"
                  src="https://maps.google.com/maps?q=26.4960136,80.2520423&hl=en&z=16&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-600 pt-1 border-t border-slate-100">
                <div className="flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5 text-[#0B3D91]" />
                  <span className="font-semibold text-slate-800">Akshay B2B Solutions</span>
                </div>
                <span className="text-[11px] text-slate-500">Kanpur &amp; Noida, UP</span>
              </div>
            </div>
          </div>

        </div>

      </main>

      {/* Footer */}
      <Footer onSelectService={onSelectService} />
    </div>
  );
};

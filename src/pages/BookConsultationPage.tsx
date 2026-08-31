import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ArrowLeft,
  ShieldCheck,
  Briefcase,
  HelpCircle,
  Sparkles,
  FileText
} from 'lucide-react';
import { sendLeadEmail } from '../lib/emailService';
import { TopUtilityBar } from '../components/TopUtilityBar';
import { HeaderMegaMenu } from '../components/HeaderMegaMenu';
import { Footer } from '../components/Footer';
import { MEGA_CATEGORIES, INDIAN_STATES_AND_UTS } from '../data/servicesData';
import { LeadFormData } from '../types';

interface BookConsultationPageProps {
  onBackToHome: () => void;
  onSelectService: (serviceName: string) => void;
  onSuccess?: (lead: LeadFormData) => void;
}

export const BookConsultationPage: React.FC<BookConsultationPageProps> = ({
  onBackToHome,
  onSelectService,
  onSuccess
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Private Limited Company',
    preferredDate: '',
    preferredTime: '10:00 AM - 01:00 PM',
    state: 'Uttar Pradesh',
    message: ''
  });

  const [isBooked, setIsBooked] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

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

    const refNo = `ABS-CONS-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingRef(refNo);
    setIsBooked(true);

    const lead: LeadFormData = {
      fullName: formData.name,
      phone: formData.phone,
      email: formData.email,
      state: formData.state,
      businessType: 'Consultation',
      businessActivity: `Consultation: ${formData.service} (${formData.preferredDate || 'Earliest Slot'} @ ${formData.preferredTime})`,
      servicesRequired: [formData.service],
      panNumber: '',
      notes: formData.message
    };

    await sendLeadEmail({
      sourceForm: 'Book Consultation Page',
      ...lead,
      servicesRequired: lead.servicesRequired.join(', ')
    });

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
        onOpenConsultation={() => {}}
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
            <span className="text-[#FF5A00] font-semibold">Book Consultation</span>
          </div>

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 text-xs font-semibold uppercase tracking-wider">
              <Calendar className="w-4 h-4 text-[#FF5A00]" />
              EXPERT ADVISORY APPOINTMENT
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Book a Consultation With Our Business Experts
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Discuss your registration, compliance or business requirements with our team and get the right solution.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          
          {isBooked ? (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-8 sm:p-12 text-center space-y-6">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Appointment Confirmed
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Consultation Booked Successfully!
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
                  Your appointment request has been logged under Booking Reference ID: <strong className="text-[#0B3D91] font-mono font-bold text-base">{bookingRef}</strong>.
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-left max-w-md mx-auto space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Client Name:</span>
                  <span className="font-bold text-slate-900">{formData.name}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Phone:</span>
                  <span className="font-bold text-slate-900">{formData.phone}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Service:</span>
                  <span className="font-bold text-[#0B3D91]">{formData.service}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Preferred Slot:</span>
                  <span className="font-bold text-slate-900">{formData.preferredDate || 'Today / Next Slot'} ({formData.preferredTime})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">State:</span>
                  <span className="font-bold text-slate-900">{formData.state}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setIsBooked(false)}
                  className="px-6 py-3 bg-[#0B3D91] text-white text-xs font-bold rounded-xl hover:bg-[#082A66] transition-colors cursor-pointer"
                >
                  Book Another Consultation
                </button>
                <button
                  onClick={onBackToHome}
                  className="px-6 py-3 bg-slate-100 text-slate-700 text-xs font-bold rounded-xl hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  Back to Home
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10 space-y-8">
              <div className="border-b border-slate-100 pb-4 space-y-1">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#0B3D91]">
                  Fill Your Consultation Request
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  Select your preferred slot and service. Our senior advisor will connect with you at your chosen time.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#FF5A00] flex items-center gap-1.5">
                    <User className="w-4 h-4" /> 1. Personal &amp; Contact Details
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 block">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vikram Verma"
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

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. vikram@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3D91]"
                      />
                    </div>
                  </div>
                </div>

                {/* Consultation Details */}
                <div className="space-y-4 pt-2 border-t border-slate-100">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#FF5A00] flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4" /> 2. Consultation Preferences
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="space-y-1.5 sm:col-span-2">
                      <label className="text-xs font-bold text-slate-700 block">
                        Select Service <span className="text-red-500">*</span>
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

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 block">
                        State <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3D91] bg-white"
                      >
                        {INDIAN_STATES_AND_UTS.map((st) => (
                          <option key={st} value={st}>
                            {st}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 block">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3D91]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 block">
                        Preferred Time Slot
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3D91] bg-white"
                      >
                        <option value="10:00 AM - 01:00 PM">Morning (10:00 AM - 01:00 PM)</option>
                        <option value="01:00 PM - 04:00 PM">Afternoon (01:00 PM - 04:00 PM)</option>
                        <option value="04:00 PM - 06:30 PM">Evening (04:00 PM - 06:30 PM)</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 block">
                        Message / Requirement Details
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Need guidance regarding Pvt Ltd vs LLP registration"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3D91]"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#FF5A00] hover:bg-[#FF6B00] text-white font-bold text-sm transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-5 h-5" />
                    Book Consultation
                  </button>
                </div>
              </form>
            </div>
          )}

        </div>
      </main>

      {/* Footer */}
      <Footer onSelectService={onSelectService} />
    </div>
  );
};

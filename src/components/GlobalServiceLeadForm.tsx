import React, { useState } from 'react';
import { 
  User, Mail, Phone, MapPin, FileText, Package,
  CheckCircle2, ArrowRight, Loader2, ShieldCheck 
} from 'lucide-react';
import { INDIAN_STATES_AND_UTS } from '../data/servicesData';

export interface GlobalServiceLeadFormProps {
  serviceName: string;
  packageOptions?: string[];
  isConsultationOnly?: boolean;
  badgeText?: string;
  defaultRequirement?: string;
  onSuccess?: (formData: Record<string, string>) => void;
}

const DEFAULT_AGREEMENT_OPTIONS = [
  'Non-Disclosure Agreement (NDA)',
  'Founders/Shareholders Agreement',
  'Employment Contract',
  'Service Level Agreement (SLA)',
  'Commercial Lease',
  'Custom Agreement Drafting',
  'Legal Review'
];

export const GlobalServiceLeadForm: React.FC<GlobalServiceLeadFormProps> = ({
  serviceName,
  packageOptions = [],
  isConsultationOnly = false,
  badgeText,
  defaultRequirement,
  onSuccess
}) => {
  const defaultSelection = isConsultationOnly
    ? defaultRequirement || DEFAULT_AGREEMENT_OPTIONS[0]
    : packageOptions[0] || 'Standard Package';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    state: 'Delhi',
    requirementOrPackage: defaultSelection
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (cleanPhone.length !== 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API submission
      await new Promise(resolve => setTimeout(resolve, 1200));
      setIsSuccess(true);
      if (onSuccess) onSuccess({ ...formData, serviceName });
    } catch (err) {
      setError('Failed to submit request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      state: 'Delhi',
      requirementOrPackage: defaultSelection
    });
  };

  const currentBadge = badgeText || (
    isConsultationOnly 
      ? '⚡ Fast-Track Legal Drafting | Advocate Vetted'
      : '⚡ Guaranteed Lowest Consultancy Fee | Fast Filing'
  );

  if (isSuccess) {
    return (
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0D47A1] to-[#FF6B00]" />
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3">Consultation Requested!</h3>
        <p className="text-slate-600 mb-6 leading-relaxed text-sm sm:text-base">
          Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>. Our expert will contact you within 15 minutes at <span className="font-semibold text-slate-900">{formData.phone}</span> regarding your <span className="font-semibold text-slate-900">{formData.requirementOrPackage}</span> inquiry.
        </p>
        <button
          onClick={handleReset}
          className="text-sm font-semibold text-[#0D47A1] hover:text-blue-800 transition-colors underline underline-offset-4 decoration-2 cursor-pointer"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8 relative overflow-hidden">
      {/* 2px Gradient Bar Accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0D47A1] to-[#FF6B00]" />

      {/* Header & Pill */}
      <div className="mb-6">
        <span className="inline-block px-3 py-1 bg-orange-50 text-[#FF6B00] text-[10px] sm:text-xs font-bold rounded-full mb-3 border border-orange-100">
          {currentBadge}
        </span>
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
          {isConsultationOnly ? `Request ${serviceName}` : `Apply for ${serviceName}`}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1.5">
          {isConsultationOnly 
            ? 'Connect directly with senior legal experts for customized drafting and vetting.' 
            : 'Fill in details below to start your hassle-free registration process.'}
        </p>
      </div>

      {error && (
        <div className="mb-5 p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm rounded-xl flex items-start gap-2">
          <span className="font-bold">Error:</span> {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1.5">Full Name *</label>
          <div className="relative">
            <User className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
            <input
              type="text"
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:bg-white transition-all"
            />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">Email Address *</label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="email@company.com"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:bg-white transition-all"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">Mobile Number *</label>
            <div className="relative">
              <Phone className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
              <input
                type="tel"
                name="phone"
                required
                maxLength={10}
                value={formData.phone}
                onChange={handleChange}
                placeholder="10-digit mobile no."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:bg-white transition-all"
              />
            </div>
          </div>
        </div>

        {/* State & Requirement/Package Option */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">State of Business</label>
            <div className="relative">
              <MapPin className="absolute left-3.5 top-3 w-4 h-4 text-slate-400 pointer-events-none" />
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:bg-white transition-all appearance-none cursor-pointer"
              >
                {INDIAN_STATES_AND_UTS.map((st) => (
                  <option key={st} value={st}>{st}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            {isConsultationOnly ? (
              <>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Agreement Type *</label>
                <div className="relative">
                  <FileText className="absolute left-3.5 top-3 w-4 h-4 text-slate-400 pointer-events-none" />
                  <select
                    name="requirementOrPackage"
                    value={formData.requirementOrPackage}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:bg-white transition-all appearance-none cursor-pointer"
                  >
                    {DEFAULT_AGREEMENT_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </>
            ) : packageOptions.length <= 1 ? (
              <>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Selected Package</label>
                <div className="relative">
                  <Package className="absolute left-3.5 top-3 w-4 h-4 text-slate-400 pointer-events-none" />
                  <input
                    type="text"
                    readOnly
                    name="requirementOrPackage"
                    value={formData.requirementOrPackage}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 cursor-not-allowed"
                  />
                </div>
              </>
            ) : (
              <>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">Selected Package *</label>
                <div className="relative">
                  <Package className="absolute left-3.5 top-3 w-4 h-4 text-slate-400 pointer-events-none" />
                  <select
                    name="requirementOrPackage"
                    value={formData.requirementOrPackage}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:bg-white transition-all appearance-none cursor-pointer"
                  >
                    {packageOptions.map((pkg) => (
                      <option key={pkg} value={pkg}>{pkg}</option>
                    ))}
                  </select>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Submit CTA */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full mt-4 py-3.5 px-6 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold rounded-xl shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Submitting Request...</span>
            </>
          ) : (
            <>
              <span>{isConsultationOnly ? 'Get Free Legal Consultation' : 'Get Started Now'}</span>
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>

        {/* Trust Footer */}
        <div className="flex items-center justify-center gap-2 text-xs text-slate-500 mt-5 pt-4 border-t border-slate-100">
          <ShieldCheck className="w-4 h-4 text-green-600 flex-shrink-0" />
          <span>
            {isConsultationOnly
              ? '100% Confidential. Attorney-Client Privilege Maintained.'
              : '100% Confidential. No Spam Guarantee.'}
          </span>
        </div>
      </form>
    </div>
  );
};

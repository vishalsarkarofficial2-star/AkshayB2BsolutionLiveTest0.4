import React, { useState } from 'react';
import { 
  User, Mail, Phone, MapPin, FileText, 
  CheckCircle2, ArrowRight, Loader2, ShieldCheck 
} from 'lucide-react';
import { INDIAN_STATES_AND_UTS } from '../data/servicesData';

interface LegalDraftingLeadFormProps {
  defaultDocumentType?: string;
  onSuccess?: () => void;
}

export const LegalDraftingLeadForm: React.FC<LegalDraftingLeadFormProps> = ({
  defaultDocumentType = 'Custom Legal Drafting & Review',
  onSuccess
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    state: 'Delhi',
    documentType: defaultDocumentType
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

    // Validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (formData.phone.replace(/\D/g, '').length !== 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API Call / integration with lead handler
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSuccess(true);
      if (onSuccess) onSuccess();
    } catch (err) {
      setError('Something went wrong. Please try again.');
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
      documentType: defaultDocumentType
    });
  };

  if (isSuccess) {
    return (
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0D47A1] to-[#FF6B00]" />
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3">Consultation Requested!</h3>
        <p className="text-slate-600 mb-6 leading-relaxed">
          Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>. Our legal expert will reach out to you within 15 minutes at <span className="font-semibold text-slate-900">{formData.phone}</span> regarding your <span className="font-semibold text-slate-900">{formData.documentType}</span> request.
        </p>
        <button
          onClick={handleReset}
          className="text-sm font-semibold text-[#0D47A1] hover:text-blue-800 transition-colors underline underline-offset-4 decoration-2 cursor-pointer"
        >
          Request Another Agreement
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0D47A1] to-[#FF6B00]" />
      
      <div className="mb-6">
        <span className="inline-block px-3 py-1 bg-orange-50 text-[#FF6B00] text-[10px] sm:text-xs font-bold rounded-full mb-3 border border-orange-100">
          ⚡ Instant Legal Support | Expert Vetted
        </span>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
          Draft Your Legal Agreement
        </h3>
        <p className="text-sm text-slate-600 mt-1.5">
          Get customized, watertight legal documents drafted by senior corporate attorneys.
        </p>
      </div>

      {error && (
        <div className="mb-5 p-3.5 bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl flex items-start gap-2">
          <span className="font-semibold">Error:</span> {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
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
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:bg-white transition-all"
            />
          </div>
        </div>

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
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:bg-white transition-all"
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
                placeholder="9876543210"
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:bg-white transition-all"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">State of Business</label>
            <div className="relative">
              <MapPin className="absolute left-3.5 top-3 w-4 h-4 text-slate-400 pointer-events-none" />
              <select
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:bg-white transition-all appearance-none cursor-pointer"
              >
                {INDIAN_STATES_AND_UTS.map((st) => (
                  <option key={st} value={st}>{st}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">Document Needed *</label>
            <div className="relative">
              <FileText className="absolute left-3.5 top-3 w-4 h-4 text-slate-400 pointer-events-none" />
              <select
                name="documentType"
                value={formData.documentType}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:bg-white transition-all appearance-none cursor-pointer"
              >
                <option value="Non-Disclosure Agreement (NDA)">Non-Disclosure Agreement (NDA)</option>
                <option value="Founders / Shareholders Agreement">Founders / Shareholders Agreement</option>
                <option value="Employment / Vendor Contract">Employment / Vendor Contract</option>
                <option value="Service Level Agreement (SLA)">Service Level Agreement (SLA)</option>
                <option value="Custom Legal Drafting & Review">Custom Legal Drafting & Review</option>
                <option value="Other Legal Consultation">Other Legal Consultation</option>
              </select>
            </div>
          </div>
        </div>

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
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </>
          )}
        </button>

        <div className="flex items-center justify-center gap-2 text-xs text-slate-500 mt-5 pt-4 border-t border-slate-100">
          <ShieldCheck className="w-4 h-4 text-green-600 flex-shrink-0" />
          <span>100% Confidential. Attorney-Client Privilege Maintained.</span>
        </div>
      </form>
    </div>
  );
};

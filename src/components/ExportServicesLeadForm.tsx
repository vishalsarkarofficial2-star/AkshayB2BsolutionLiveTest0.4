import React, { useState, useEffect } from 'react';
import { 
  MapPin, Building2, Briefcase, User, Mail, Phone, CreditCard, FileText, 
  ShieldCheck, ArrowRight, ArrowLeft, Loader2, CheckCircle2, Lock, RefreshCw, Sparkles
} from 'lucide-react';
import { INDIAN_STATES_AND_UTS } from '../data/servicesData';

export interface ExportServicesLeadFormProps {
  serviceName: string;
  onSuccess?: (formData: Record<string, any>) => void;
  onApply?: (serviceName?: string) => void;
  customTrustPoints?: string[];
}

const EXPORT_BUSINESS_TYPES = [
  'Merchant Exporter',
  'Manufacturer Exporter',
  'Sole Proprietorship',
  'Pvt Ltd / OPC',
  'LLP / Partnership',
  'Star Export House',
  'Others'
];

const EXPORT_ACTIVITIES = [
  'Direct Export / Trading',
  'Manufacturing & Exporting',
  'Merchant Exporting',
  'Third-Party Exporting',
  'E-Commerce Export',
  'Raw Material Processing',
  'Other'
];

const CONSULTATION_REQUIREMENTS = [
  'Custom Export Registration & Consultation Quote',
  'New RCMC Certificate Application',
  'RCMC Renewal & Commodity Addition',
  'DGFT Portal & IEC Linking Assistance',
  'Full Export Compliance & Document Vetting'
];

const DEFAULT_EXPORT_TRUST_POINTS = [
  'Zero Physical Visits to Government / Board Offices Required',
  'Dedicated DGFT & Export Registration Specialist Assistance',
  'Fast-Track Document Scrutiny & Error-Free Portal Submission',
  'Over 15,000+ Indian Exporters & RCMC Holders Successfully Onboarded'
];

export const ExportServicesLeadForm: React.FC<ExportServicesLeadFormProps> = ({
  serviceName,
  onSuccess,
  onApply,
  customTrustPoints
}) => {
  const [step, setStep] = useState(1);

  // Form State
  const [formData, setFormData] = useState({
    state: 'Delhi',
    businessType: 'Merchant Exporter',
    businessActivity: 'Direct Export / Trading',
    fullName: '',
    phone: '',
    email: '',
    iecOrPanNumber: '',
    consultationRequirement: CONSULTATION_REQUIREMENTS[0],
    captchaAnswer: ''
  });

  // Captcha Generator State
  const [captchaNum1, setCaptchaNum1] = useState(8);
  const [captchaNum2, setCaptchaNum2] = useState(5);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const generateCaptcha = () => {
    const n1 = Math.floor(Math.random() * 9) + 1;
    const n2 = Math.floor(Math.random() * 9) + 1;
    setCaptchaNum1(n1);
    setCaptchaNum2(n2);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError('');
  };

  const handleNext = () => {
    setError('');
    if (step === 1) {
      if (!formData.state) {
        setError('Please select your state of business registration.');
        return;
      }
    } else if (step === 2) {
      if (!formData.businessType) {
        setError('Please select your business type.');
        return;
      }
      if (!formData.businessActivity) {
        setError('Please select your export activity / commodity category.');
        return;
      }
      if (!formData.fullName.trim()) {
        setError('Please enter proprietor or authorised signatory name.');
        return;
      }
      if (!formData.phone.trim()) {
        setError('Please enter your 10-digit mobile number.');
        return;
      }
      const cleanPhone = formData.phone.replace(/\D/g, '');
      if (cleanPhone.length !== 10) {
        setError('Please enter a valid 10-digit mobile number.');
        return;
      }
      if (!formData.email.trim()) {
        setError('Please enter your email address.');
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        setError('Please enter a valid email address.');
        return;
      }
    }
    setStep(prev => Math.min(prev + 1, 3));
  };

  const handleBack = () => {
    setError('');
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.iecOrPanNumber.trim()) {
      const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/i;
      const iecRegex = /^[A-Z0-9]{10}$/i;
      const val = formData.iecOrPanNumber.trim();
      if (!panRegex.test(val) && !iecRegex.test(val)) {
        setError('Please enter a valid 10-character PAN or IEC Number (e.g. ABCDE1234F).');
        return;
      }
    }

    const expectedAnswer = (captchaNum1 + captchaNum2).toString();
    if (formData.captchaAnswer.trim() !== expectedAnswer) {
      setError(`Incorrect Captcha answer. What is ${captchaNum1} + ${captchaNum2}?`);
      generateCaptcha();
      setFormData(prev => ({ ...prev, captchaAnswer: '' }));
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1200));
      setIsSubmitted(true);
      if (onApply) onApply(`${serviceName} Lead Submitted`);
      if (onSuccess) onSuccess({ ...formData, serviceName });
    } catch (err) {
      setError('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const trustPoints = customTrustPoints || DEFAULT_EXPORT_TRUST_POINTS;

  // SUCCESS CARD VIEW (Strictly matching specified layout)
  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl shadow-2xl border-2 border-slate-200 p-8 text-center relative overflow-hidden">
        {/* Subtle Top Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0D47A1] via-blue-600 to-[#FF6B00]" />

        {/* Top Badge */}
        <div className="mb-6">
          <span className="inline-block px-3 py-1 bg-orange-100 text-[#FF6B00] text-[10px] sm:text-xs font-black uppercase tracking-wider rounded-full border border-orange-200">
            🔥 INSTANT OFFER / CONSULTATION BOOKED
          </span>
        </div>

        {/* Centered Orange Checkmark Icon inside a soft light-orange circular background */}
        <div className="w-20 h-20 bg-orange-100/80 text-[#FF6B00] rounded-full flex items-center justify-center mx-auto mb-5 shadow-inner border border-orange-200/60">
          <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3 tracking-tight">
          Application Received!
        </h3>

        {/* Subtext */}
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-6">
          Thank you <span className="font-bold text-slate-900">{formData.fullName}</span>. Our Noida-based <span className="font-bold text-[#0D47A1]">{serviceName}</span> specialist has been assigned to your registration docket. We will call you within 15 minutes at <span className="font-bold text-slate-900">{formData.phone}</span>.
        </p>

        {/* Docket Detail Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left mb-6 text-xs text-slate-600 space-y-2">
          <div className="flex justify-between items-center pb-1.5 border-b border-slate-200/60">
            <span className="text-slate-500 font-medium">Service Docket:</span>
            <span className="font-bold text-slate-900">{serviceName}</span>
          </div>
          <div className="flex justify-between items-center pb-1.5 border-b border-slate-200/60">
            <span className="text-slate-500 font-medium">State Jurisdiction:</span>
            <span className="font-bold text-slate-900">{formData.state}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-slate-500 font-medium">Consultation Type:</span>
            <span className="font-bold text-[#0D47A1]">{formData.consultationRequirement}</span>
          </div>
        </div>

        {/* Reset Button */}
        <button
          onClick={() => {
            setIsSubmitted(false);
            setStep(1);
            setFormData({
              state: 'Delhi',
              businessType: 'Merchant Exporter',
              businessActivity: 'Direct Export / Trading',
              fullName: '',
              phone: '',
              email: '',
              iecOrPanNumber: '',
              consultationRequirement: CONSULTATION_REQUIREMENTS[0],
              captchaAnswer: ''
            });
            generateCaptcha();
          }}
          className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-xl text-xs sm:text-sm transition-all cursor-pointer shadow-xs"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl border-2 border-slate-200 relative overflow-hidden transition-all">
      {/* Golden/Blue Gradient Outline Bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0D47A1] via-orange-500 to-[#FF6B00]" />

      {/* 1. TOP DYNAMIC FEE BOX */}
      <div className="bg-orange-50 border-b border-orange-200 px-5 py-3.5 flex items-center justify-between text-xs font-bold text-orange-900">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#FF6B00] flex-shrink-0 animate-pulse" />
          <span>PROFESSIONAL FEE: Custom Quote / Free Consultation</span>
        </div>
        <span className="text-[11px] font-medium text-orange-700 hidden sm:inline">
          + Govt. Fee (as applicable, paid later)
        </span>
      </div>

      {/* Card Content Body */}
      <div className="p-6 sm:p-8">
        {/* Top Badges Bar */}
        <div className="flex items-center justify-between gap-2 mb-5">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-orange-100 text-[#FF6B00] text-[10px] sm:text-xs font-black uppercase tracking-wider rounded-full border border-orange-200 shadow-2xs">
            🔥 INSTANT OFFER / FREE CONSULTATION
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-50 text-[#0D47A1] text-[10px] sm:text-xs font-bold rounded-full border border-blue-100">
            <Lock className="w-3 h-3 text-emerald-600" />
            SSL 256-Bit Encrypted
          </span>
        </div>

        {/* Title & Header */}
        <div className="mb-5">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
            Apply for {serviceName}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Official Council RCMC & Board Registration with expert legal assistance.
          </p>
        </div>

        {/* 2. 3-STEP PROGRESS INDICATOR */}
        <div className="mb-6">
          <div className="flex justify-between items-center text-[11px] font-bold text-slate-600 mb-1.5">
            <span className="text-[#0D47A1] font-black">
              Step {step} of 3 • Quick 60-second setup
            </span>
            <span className="text-slate-400 font-medium">
              {step === 1 && 'Jurisdiction'}
              {step === 2 && 'Business Info'}
              {step === 3 && 'Verification'}
            </span>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            <div className={`h-2 rounded-full transition-all ${step >= 1 ? 'bg-[#0D47A1]' : 'bg-slate-200'}`} />
            <div className={`h-2 rounded-full transition-all ${step >= 2 ? 'bg-[#0D47A1]' : 'bg-slate-200'}`} />
            <div className={`h-2 rounded-full transition-all ${step >= 3 ? 'bg-[#0D47A1]' : 'bg-slate-200'}`} />
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-5 p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm rounded-xl font-semibold flex items-center gap-2">
            <span>⚠️</span>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }}>
          {/* --- STEP 1: JURISDICTION & TRUST BANNER --- */}
          {step === 1 && (
            <div className="space-y-5 animate-in fade-in duration-300">
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-2">
                  Select State of Business Registration *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-400 pointer-events-none" />
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:bg-white transition-all appearance-none cursor-pointer"
                  >
                    {INDIAN_STATES_AND_UTS.map((st) => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </select>
                </div>
                <p className="text-[11px] text-slate-500 mt-1.5 italic">
                  * State jurisdiction determines local DGFT licensing regional office and port authority.
                </p>
              </div>

              {/* Dynamic Trust Box */}
              <div className="bg-gradient-to-br from-blue-50/80 to-slate-50 border border-blue-100 rounded-xl p-4">
                <h4 className="text-xs font-black text-[#0D47A1] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Why apply with akshayb2bsolutions?
                </h4>
                <ul className="space-y-2">
                  {trustPoints.map((tp, idx) => (
                    <li key={idx} className="text-xs text-slate-700 flex items-start gap-2 font-medium">
                      <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{tp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={handleNext}
                className="w-full py-3.5 px-6 bg-[#0D47A1] hover:bg-blue-900 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-900/20 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
              >
                <span>Continue to Step 2</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* --- STEP 2: BUSINESS & APPLICANT DETAILS --- */}
          {step === 2 && (
            <div className="space-y-4 animate-in fade-in duration-300">
              {/* Grid Row 1: Business Type & Business Activity / Commodity */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">Business Type *</label>
                  <div className="relative">
                    <Building2 className="absolute left-3.5 top-3 w-4 h-4 text-slate-400 pointer-events-none" />
                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:bg-white appearance-none cursor-pointer"
                    >
                      {EXPORT_BUSINESS_TYPES.map(bt => (
                        <option key={bt} value={bt}>{bt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">Business Activity / Commodity *</label>
                  <div className="relative">
                    <Briefcase className="absolute left-3.5 top-3 w-4 h-4 text-slate-400 pointer-events-none" />
                    <select
                      name="businessActivity"
                      value={formData.businessActivity}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:bg-white appearance-none cursor-pointer"
                    >
                      {EXPORT_ACTIVITIES.map(ba => (
                        <option key={ba} value={ba}>{ba}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Grid Row 2: Proprietor / Authorised Signatory Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5">
                  Proprietor / Authorised Signatory Full Name * <span className="text-slate-400 font-normal">(As per PAN / Aadhaar)</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name as per PAN / Aadhaar"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:bg-white"
                  />
                </div>
              </div>

              {/* Grid Row 3: Mobile Number & Email Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">Mobile Number *</label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      maxLength={10}
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center gap-3 pt-3">
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex-1 py-3 px-6 bg-[#0D47A1] hover:bg-blue-900 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Continue to Step 3</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* --- STEP 3: CUSTOM CONSULTATION & CAPTCHA --- */}
          {step === 3 && (
            <div className="space-y-4 animate-in fade-in duration-300">
              {/* Field 1: IEC / PAN Number */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5">
                  IEC / PAN Number <span className="text-slate-400 font-normal">(Optional for quote)</span>
                </label>
                <div className="relative">
                  <CreditCard className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    name="iecOrPanNumber"
                    maxLength={10}
                    value={formData.iecOrPanNumber}
                    onChange={(e) => setFormData(prev => ({ ...prev, iecOrPanNumber: e.target.value.toUpperCase() }))}
                    placeholder="ABCDE1243F"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono font-bold text-slate-900 uppercase focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:bg-white"
                  />
                </div>
              </div>

              {/* Field 2: Select Consultation Requirement */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5">
                  Select Consultation Requirement *
                </label>
                <div className="relative">
                  <FileText className="absolute left-3.5 top-3 w-4 h-4 text-slate-400 pointer-events-none" />
                  <select
                    name="consultationRequirement"
                    value={formData.consultationRequirement}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:bg-white appearance-none cursor-pointer"
                  >
                    {CONSULTATION_REQUIREMENTS.map((req, idx) => (
                      <option key={idx} value={req}>
                        {req}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Field 3: Security Verification (Captcha) */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5">
                  Security Verification (Captcha) *
                </label>
                <div className="flex items-center gap-2">
                  <div className="bg-slate-100 border border-slate-300 rounded-xl px-3.5 py-2 text-xs font-extrabold text-slate-900 flex items-center gap-1.5 select-none">
                    <Lock className="w-3.5 h-3.5 text-[#0D47A1]" />
                    <span>{captchaNum1} + {captchaNum2} =</span>
                  </div>
                  <input
                    type="text"
                    name="captchaAnswer"
                    required
                    value={formData.captchaAnswer}
                    onChange={handleChange}
                    placeholder="Answer"
                    className="w-24 px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-center font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0D47A1]"
                  />
                  <button
                    type="button"
                    onClick={generateCaptcha}
                    className="p-2 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                    title="Refresh Captcha"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Step 3 Navigation Buttons */}
              <div className="flex items-center gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-4 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-3.5 px-6 bg-[#0D47A1] hover:bg-blue-900 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-blue-900/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit & Get Free Legal Consultation ✔</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>

      {/* Trust Footer */}
      <div className="bg-slate-50 px-6 py-3 flex items-center justify-center gap-2 text-xs font-bold text-emerald-700 border-t border-slate-100">
        <ShieldCheck className="w-4 h-4 flex-shrink-0" />
        <span>100% Confidential. DGFT & Export Council Registration Specialist Handled.</span>
      </div>
    </div>
  );
};

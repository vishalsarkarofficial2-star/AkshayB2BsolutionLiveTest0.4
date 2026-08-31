import React, { useState, useEffect } from 'react';
import { 
  MapPin, Building2, Briefcase, CreditCard, Package, ShieldCheck, 
  ArrowRight, ArrowLeft, Loader2, CheckCircle2, Lock, RefreshCw
} from 'lucide-react';
import { INDIAN_STATES_AND_UTS } from '../data/servicesData';

interface LegalDraftingMultiStepFormProps {
  onSuccess?: (formData?: any) => void;
  onApply?: (serviceName?: string) => void;
}

const BUSINESS_TYPES = [
  'Sole Proprietorship',
  'LLP',
  'Limited',
  'OPC/Pvt Ltd',
  'Partnership',
  'Others'
];

const BUSINESS_ACTIVITIES = [
  'Trading',
  'Manufacturing',
  'Services',
  'Other'
];

const PACKAGES = [
  { id: 'basic', name: 'Basic Draft Tier', desc: '1 Standard Agreement (NDA / SLA / Employment)', price: '₹1,499' },
  { id: 'standard', name: 'Standard Business Tier', desc: '3 Customized Agreements + Legal Vetting', price: '₹3,999' },
  { id: 'premium', name: 'Premium Enterprise Tier', desc: '5 Custom Contracts + Advocate Consultation', price: '₹7,999' },
  { id: 'custom', name: 'Custom Agreement Drafting', desc: 'Bespoke complex contract tailoring on quote', price: 'Quote on Request' }
];

export const LegalDraftingMultiStepForm: React.FC<LegalDraftingMultiStepFormProps> = ({ onSuccess, onApply }) => {
  const [step, setStep] = useState(1);

  // Form State
  const [formData, setFormData] = useState({
    state: 'Delhi',
    businessType: 'OPC/Pvt Ltd',
    businessActivity: 'Services',
    panNumber: '',
    packageTier: 'Standard Business Tier - ₹3,999',
    captchaAnswer: '',
    fullName: '',
    email: '',
    phone: ''
  });

  // Captcha Generator
  const [captchaNum1, setCaptchaNum1] = useState(5);
  const [captchaNum2, setCaptchaNum2] = useState(3);
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
        setError('Please select a state or UT.');
        return;
      }
    } else if (step === 2) {
      if (!formData.businessType) {
        setError('Please select a business type.');
        return;
      }
      if (!formData.businessActivity) {
        setError('Please select a business activity.');
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

    // Step 3 validation
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setError('Please provide your name and 10-digit mobile number.');
      return;
    }

    if (formData.phone.replace(/\D/g, '').length !== 10) {
      setError('Mobile number must be exactly 10 digits.');
      return;
    }

    if (formData.panNumber.trim()) {
      const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/i;
      if (!panRegex.test(formData.panNumber.trim())) {
        setError('Please enter a valid 10-character PAN number (e.g. ABCDE1234F).');
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
      if (onApply) onApply('Legal Drafting Lead Submitted');
      if (onSuccess) onSuccess(formData);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0D47A1] to-[#FF6B00]" />
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Application Submitted!</h3>
        <p className="text-slate-600 text-sm mb-6 leading-relaxed">
          Thank you, <span className="font-bold text-slate-900">{formData.fullName}</span>. Your legal drafting request for <span className="font-bold text-slate-900">{formData.packageTier}</span> has been received. Our senior legal advocate will contact you within 15 minutes.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setStep(1);
            setFormData({
              state: 'Delhi',
              businessType: 'OPC/Pvt Ltd',
              businessActivity: 'Services',
              panNumber: '',
              packageTier: 'Standard Business Tier - ₹3,999',
              captchaAnswer: '',
              fullName: '',
              email: '',
              phone: ''
            });
            generateCaptcha();
          }}
          className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-xs transition-all cursor-pointer"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 relative overflow-hidden">
      {/* Accent Header Bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0D47A1] to-[#FF6B00]" />

      <div className="p-6 sm:p-8">
        {/* Header & Step Badges */}
        <div className="flex items-center justify-between mb-6">
          <span className="px-2.5 py-1 bg-orange-50 text-[#FF6B00] text-[10px] sm:text-xs font-black uppercase tracking-wider rounded-md border border-orange-100 flex items-center gap-1">
            ⚡ Fast-Track Legal Drafting
          </span>
          <div className="flex items-center gap-1.5">
            {[1, 2, 3].map(i => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all ${
                  step >= i ? 'w-6 bg-[#0D47A1]' : 'w-2 bg-slate-200'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mb-6">
          <div className="text-xs font-bold text-[#0D47A1] uppercase tracking-wider mb-1">
            Step {step} of 3
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">
            {step === 1 && 'Select Your State / Jurisdiction'}
            {step === 2 && 'Business Type & Activity'}
            {step === 3 && 'Package & Legal Verification'}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            {step === 1 && 'Choose the primary state or Union Territory for your contract jurisdiction.'}
            {step === 2 && 'Select your business entity structure and core industry activity.'}
            {step === 3 && 'Enter PAN details, choose your preferred package, and complete captcha.'}
          </p>
        </div>

        {error && (
          <div className="mb-5 p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl font-medium">
            ⚠️ {error}
          </div>
        )}

        <form onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }}>
          {/* STEP 1: State Selector */}
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in duration-300">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Select State / Union Territory *
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-400 pointer-events-none" />
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:bg-white transition-all appearance-none cursor-pointer"
                  >
                    {INDIAN_STATES_AND_UTS.map((st) => (
                      <option key={st} value={st}>{st}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Business Type & Activity */}
          {step === 2 && (
            <div className="space-y-5 animate-in fade-in duration-300">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Business Type *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {BUSINESS_TYPES.map((bt) => (
                    <button
                      type="button"
                      key={bt}
                      onClick={() => setFormData(prev => ({ ...prev, businessType: bt }))}
                      className={`p-3 rounded-xl border text-xs font-bold transition-all text-center cursor-pointer ${
                        formData.businessType === bt
                          ? 'bg-blue-50 border-[#0D47A1] text-[#0D47A1] shadow-xs'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <Building2 className="w-4 h-4 mx-auto mb-1 opacity-75" />
                      {bt}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">
                  Business Activity *
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {BUSINESS_ACTIVITIES.map((ba) => (
                    <button
                      type="button"
                      key={ba}
                      onClick={() => setFormData(prev => ({ ...prev, businessActivity: ba }))}
                      className={`p-3 rounded-xl border text-xs font-bold transition-all text-center cursor-pointer ${
                        formData.businessActivity === ba
                          ? 'bg-orange-50 border-[#FF6B00] text-[#FF6B00] shadow-xs'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <Briefcase className="w-4 h-4 mx-auto mb-1 opacity-75" />
                      {ba}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: PAN Number, Package Dropdown, Captcha & Contact Info */}
          {step === 3 && (
            <div className="space-y-4 animate-in fade-in duration-300">
              {/* Contact Info (Required for callback) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    maxLength={10}
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-Digit Mobile No."
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:bg-white"
                  />
                </div>
              </div>

              {/* PAN Number */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  PAN Number (Optional / Recommended)
                </label>
                <div className="relative">
                  <CreditCard className="absolute left-3.5 top-2.5 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    name="panNumber"
                    maxLength={10}
                    value={formData.panNumber}
                    onChange={(e) => setFormData(prev => ({ ...prev, panNumber: e.target.value.toUpperCase() }))}
                    placeholder="e.g. ABCDE1234F"
                    className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono text-slate-900 uppercase focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:bg-white"
                  />
                </div>
              </div>

              {/* Package Dropdown */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Select Package Tier *
                </label>
                <div className="relative">
                  <Package className="absolute left-3.5 top-3 w-4 h-4 text-slate-400 pointer-events-none" />
                  <select
                    name="packageTier"
                    value={formData.packageTier}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:bg-white appearance-none cursor-pointer"
                  >
                    {PACKAGES.map((pkg) => (
                      <option key={pkg.id} value={`${pkg.name} - ${pkg.price}`}>
                        {pkg.name} — {pkg.price} ({pkg.desc})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Captcha */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Security Check (Captcha) *
                </label>
                <div className="flex items-center gap-2">
                  <div className="bg-slate-100 border border-slate-300 rounded-xl px-3 py-2 text-xs font-extrabold text-slate-800 flex items-center gap-1 select-none">
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
                    className="p-2 text-slate-500 hover:text-slate-800 transition-colors"
                    title="Refresh Captcha"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons: Back / Next / Submit */}
          <div className="flex items-center gap-3 pt-6 mt-4 border-t border-slate-100">
            {step > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={handleNext}
                className="flex-1 py-3 px-6 bg-[#0D47A1] hover:bg-blue-900 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Next Step</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 py-3.5 px-6 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold text-xs rounded-xl shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Submitting Application...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Legal Request</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            )}
          </div>
        </form>
      </div>

      <div className="bg-slate-50 px-6 py-3 flex items-center justify-center gap-2 text-xs font-bold text-emerald-700 border-t border-slate-100">
        <ShieldCheck className="w-4 h-4" />
        <span>100% Confidentiality & Legal Compliance Assured</span>
      </div>
    </div>
  );
};

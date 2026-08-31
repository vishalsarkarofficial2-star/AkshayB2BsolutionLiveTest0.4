import React, { useState, useEffect } from 'react';
import { sendLeadEmail } from '../lib/emailService';
import { 
  MapPin, Building2, Briefcase, User, Mail, Phone, CreditCard, Package, 
  ShieldCheck, ArrowRight, ArrowLeft, Loader2, CheckCircle2, Lock, RefreshCw, Sparkles, Check
} from 'lucide-react';
import { INDIAN_STATES_AND_UTS } from '../data/servicesData';

export interface PackageOption {
  id: string;
  name: string;
  price: string;
  description?: string;
}

export interface GlobalMultiStepLeadFormProps {
  serviceName: string;
  heroPrice?: string;
  packages?: PackageOption[];
  customTrustPoints?: string[];
  onSuccess?: (formData: Record<string, any>) => void;
  badgeText?: string;
  submitButtonText?: string;
  businessTypes?: string[];
  businessActivities?: string[];
  hidePricing?: boolean;
  quoteMessage?: string;
}

const DEFAULT_BUSINESS_TYPES = [
  'Sole Proprietorship',
  'Pvt Ltd',
  'LLP',
  'Partnership',
  'Individual / Proprietor',
  'OPC',
  'Others'
];

const DEFAULT_BUSINESS_ACTIVITIES = [
  'Trading / E-Commerce',
  'Manufacturing',
  'Services / IT / Consulting',
  'Food & Hospitality',
  'Retail / Shop',
  'Legal & Advisory',
  'Other'
];

const DEFAULT_CUSTOM_PACKAGES: PackageOption[] = [
  { id: 'custom-consult', name: 'Custom Consultation & Legal Review', price: 'Quote on Request', description: 'Expert 1-on-1 legal review & contract drafting' },
  { id: 'standard-draft', name: 'Standard Document Drafting Package', price: '₹1,499', description: 'Includes 1 custom agreement + lawyer consultation' },
  { id: 'enterprise-draft', name: 'Enterprise Compliance & Drafting Suite', price: '₹3,999', description: 'Comprehensive legal suite + priority processing' }
];

const DEFAULT_TRUST_POINTS = [
  '100% Online & Paperless Legal Registration',
  'Government Portal Verified & Fast Filing',
  'Dedicated CA/CS & Senior Legal Expert Assistance',
  'Over 50,000+ Happy Indian Businesses Served'
];

export const GlobalMultiStepLeadForm: React.FC<GlobalMultiStepLeadFormProps> = ({
  serviceName,
  heroPrice,
  packages,
  customTrustPoints,
  onSuccess,
  badgeText,
  submitButtonText,
  businessTypes,
  businessActivities,
  hidePricing,
  quoteMessage
}) => {
  const [step, setStep] = useState(1);

  const activeBusinessTypes = businessTypes && businessTypes.length > 0 ? businessTypes : DEFAULT_BUSINESS_TYPES;
  const activeBusinessActivities = businessActivities && businessActivities.length > 0 ? businessActivities : DEFAULT_BUSINESS_ACTIVITIES;

  // Available packages logic
  const availablePackages: PackageOption[] = packages && packages.length > 0
    ? packages
    : heroPrice
      ? [{ id: 'basic', name: `${serviceName} Basic Package`, price: heroPrice, description: 'All-inclusive processing & expert filing' }]
      : DEFAULT_CUSTOM_PACKAGES;

  // Form State
  const [formData, setFormData] = useState({
    state: 'Delhi',
    businessType: 'Sole Proprietorship',
    businessActivity: 'Services / IT / Consulting',
    fullName: '',
    phone: '',
    email: '',
    panNumber: '',
    selectedPackage: `${availablePackages[0].name} - ${availablePackages[0].price}`,
    captchaAnswer: ''
  });

  // Captcha Generator
  const [captchaNum1, setCaptchaNum1] = useState(7);
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
        setError('Please select your state of business registration.');
        return;
      }
    } else if (step === 2) {
      if (!formData.businessType) {
        setError('Please select your business type.');
        return;
      }
      if (!formData.businessActivity) {
        setError('Please select your business activity.');
        return;
      }
      if (!formData.fullName.trim()) {
        setError('Please enter your full name as per PAN / Aadhaar.');
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
      
      // Send Email
      await sendLeadEmail({
        sourceForm: `Global Lead Form - ${serviceName}`,
        fullName: formData.fullName || formData.name,
        phone: formData.phone,
        email: formData.email,
        state: formData.state,
        servicesRequired: serviceName,
        notes: formData.message || formData.notes
      });

      setIsSubmitted(true);
      if (onSuccess) onSuccess({ ...formData, serviceName });
    } catch (err) {
      setError('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const trustPoints = customTrustPoints || DEFAULT_TRUST_POINTS;

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-2xl shadow-2xl border-2 border-slate-200 p-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0D47A1] to-[#FF6B00]" />
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="text-2xl font-black text-slate-900 mb-2">Request Received!</h3>
        <p className="text-slate-600 text-sm mb-6 leading-relaxed max-w-md mx-auto">
          {quoteMessage || `Thank you! Our expert will contact you shortly with a customized quote for ${serviceName}.`}
        </p>

        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left mb-6 text-xs text-slate-600 space-y-1.5">
          <div className="flex justify-between"><span className="text-slate-500">Service:</span><span className="font-bold text-slate-800">{serviceName}</span></div>
          <div className="flex justify-between"><span className="text-slate-500">Selected State:</span><span className="font-bold text-slate-800">{formData.state}</span></div>
          <div className="flex justify-between"><span className="text-slate-500">Business Type:</span><span className="font-bold text-slate-800">{formData.businessType}</span></div>
        </div>

        <button
          onClick={() => {
            setIsSubmitted(false);
            setStep(1);
            setFormData({
              state: 'Delhi',
              businessType: 'Sole Proprietorship',
              businessActivity: 'Services / IT / Consulting',
              fullName: '',
              phone: '',
              email: '',
              panNumber: '',
              selectedPackage: `${availablePackages[0].name} - ${availablePackages[0].price}`,
              captchaAnswer: ''
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
    <div className="bg-white rounded-2xl shadow-2xl border-2 border-slate-200 relative overflow-hidden transition-all">
      {/* Top 2px Blue-Orange Gradient Border */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#0D47A1] via-blue-600 to-[#FF6B00]" />

      {/* DYNAMIC PROFESSIONAL FEE HEADER BANNER */}
      <div className="bg-orange-50 border-b border-orange-200 px-5 py-3 flex items-center justify-between text-xs font-bold text-orange-900">
        <div className="flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-[#FF6B00] flex-shrink-0 animate-pulse" />
          {hidePricing ? (
            <span>CUSTOM QUOTE & CONSULTATION • BEST PRICE GUARANTEE</span>
          ) : heroPrice ? (
            <span>
              PROFESSIONAL FEE <span className="text-emerald-700 text-sm font-black">{heroPrice}/-</span> ONLY
            </span>
          ) : (
            <span>PROFESSIONAL FEE: Custom Quote / Consultation</span>
          )}
        </div>
        <span className="text-[11px] font-medium text-orange-700 hidden sm:inline">
          {hidePricing ? 'Free Callback' : heroPrice ? '+ Govt. Fee (paid later)' : '+ Govt. Fee (if applicable)'}
        </span>
      </div>

      {/* Card Body */}
      <div className="p-6 sm:p-8">
        {/* Top Badges Bar */}
        <div className="flex items-center justify-between gap-2 mb-5">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-orange-100 text-[#FF6B00] text-[10px] sm:text-xs font-black uppercase tracking-wider rounded-full border border-orange-200 shadow-2xs">
            {badgeText || '🔥 INSTANT QUOTE'}
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-50 text-[#0D47A1] text-[10px] sm:text-xs font-bold rounded-full border border-blue-100">
            <Lock className="w-3 h-3 text-emerald-600" />
            SSL 256-Bit Encrypted
          </span>
        </div>

        {/* Header Title */}
        <div className="mb-5">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
            Apply for {serviceName}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Fast, 100% online legal registration with expert guidance.
          </p>
        </div>

        {/* 3-SEGMENT PROGRESS BAR */}
        <div className="mb-6">
          <div className="flex justify-between text-[11px] font-bold text-slate-600 mb-1.5">
            <span className={step >= 1 ? 'text-[#0D47A1] font-black' : ''}>1. State</span>
            <span className={step >= 2 ? 'text-[#0D47A1] font-black' : ''}>2. Business Type</span>
            <span className={step >= 3 ? 'text-[#0D47A1] font-black' : ''}>3. Verify & Submit</span>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            <div className={`h-2 rounded-full transition-all ${step >= 1 ? 'bg-[#0D47A1]' : 'bg-slate-200'}`} />
            <div className={`h-2 rounded-full transition-all ${step >= 2 ? 'bg-[#0D47A1]' : 'bg-slate-200'}`} />
            <div className={`h-2 rounded-full transition-all ${step >= 3 ? 'bg-[#0D47A1]' : 'bg-slate-200'}`} />
          </div>
        </div>

        {/* ERROR ALERT */}
        {error && (
          <div className="mb-5 p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm rounded-xl font-semibold flex items-center gap-2">
            <span>⚠️</span>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); handleNext(); }}>
          {/* STEP 1: JURISDICTION & TRUST BANNER */}
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
                  * State jurisdiction determines local shop act and GST rules.
                </p>
              </div>

              {/* Dynamic Trust Box */}
              <div className="bg-gradient-to-br from-blue-50/80 to-slate-50 border border-blue-100 rounded-xl p-4">
                <h4 className="text-xs font-black text-[#0D47A1] uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  Why register with akshayb2bsolutions?
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

          {/* STEP 2: BUSINESS & CONTACT DETAILS */}
          {step === 2 && (
            <div className="space-y-4 animate-in fade-in duration-300">
              {/* Row 1: Business Type & Business Activity */}
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
                      {activeBusinessTypes.map(bt => (
                        <option key={bt} value={bt}>{bt}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">Business Activity *</label>
                  <div className="relative">
                    <Briefcase className="absolute left-3.5 top-3 w-4 h-4 text-slate-400 pointer-events-none" />
                    <select
                      name="businessActivity"
                      value={formData.businessActivity}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:bg-white appearance-none cursor-pointer"
                    >
                      {activeBusinessActivities.map(ba => (
                        <option key={ba} value={ba}>{ba}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Row 2: Proprietor / Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5">
                  Proprietor / Full Name * <span className="text-slate-400 font-normal">(As per PAN / Aadhaar)</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your Full Name"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:bg-white"
                  />
                </div>
              </div>

              {/* Row 3: Mobile Number & Email Address */}
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

              {/* Step 2 Nav Buttons */}
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

          {/* STEP 3: PACKAGE & SECURITY VERIFICATION */}
          {step === 3 && (
            <div className="space-y-4 animate-in fade-in duration-300">
              {/* Field 1: PAN Number */}
              <div>
                <label className="block text-xs font-bold text-slate-800 mb-1.5">
                  PAN Number <span className="text-slate-400 font-normal">(Optional for quote)</span>
                </label>
                <div className="relative">
                  <CreditCard className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    name="panNumber"
                    maxLength={10}
                    value={formData.panNumber}
                    onChange={(e) => setFormData(prev => ({ ...prev, panNumber: e.target.value.toUpperCase() }))}
                    placeholder="e.g. ABCDE1234F"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-mono font-bold text-slate-900 uppercase focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:bg-white"
                  />
                </div>
              </div>

              {/* Field 2: Select Registration Package (Only if hidePricing is false) */}
              {!hidePricing && (
                <div>
                  <label className="block text-xs font-bold text-slate-800 mb-1.5">
                    Select Registration Package *
                  </label>
                  <div className="relative">
                    <Package className="absolute left-3.5 top-3 w-4 h-4 text-slate-400 pointer-events-none" />
                    <select
                      name="selectedPackage"
                      value={formData.selectedPackage}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0D47A1] focus:bg-white appearance-none cursor-pointer"
                    >
                      {availablePackages.map(pkg => (
                        <option key={pkg.id} value={`${pkg.name} - ${pkg.price}`}>
                          {pkg.name} — {pkg.price} {pkg.description ? `(${pkg.description})` : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

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

              {/* Step 3 Nav Buttons */}
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
                  className="flex-1 py-3.5 px-6 bg-[#FF6B00] hover:bg-[#e05e00] text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Submitting Request...</span>
                    </>
                  ) : (
                    <>
                      <span>{submitButtonText || 'Submit & Get Registration Certificate ✔'}</span>
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
        <span>100% Confidential. Attorney & CA Handled Registration.</span>
      </div>
    </div>
  );
};

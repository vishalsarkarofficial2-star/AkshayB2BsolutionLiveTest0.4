import React, { useState } from 'react';
import {
  ShieldCheck,
  CreditCard,
  Lock,
  IndianRupee,
  CheckCircle2,
  ArrowLeft,
  Building2,
  QrCode,
  HelpCircle,
  Sparkles,
  Phone,
  Mail,
  Zap,
  X,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import { TopUtilityBar } from '../components/TopUtilityBar';
import { HeaderMegaMenu } from '../components/HeaderMegaMenu';
import { Footer } from '../components/Footer';
import { COMPANY_DETAILS, MEGA_CATEGORIES } from '../data/servicesData';

interface MakePaymentPageProps {
  onBackToHome: () => void;
  onSelectService: (serviceName: string) => void;
}

const PAYMENT_QR_IMAGE_DIRECT = "https://drive.google.com/thumbnail?id=1BUrR_ac1SiDX74A2wFy3OmvJ54kE2OnD&sz=w1000";
const PAYMENT_QR_IMAGE_FALLBACK = "https://drive.google.com/thumbnail?id=1BUrR_ac1SiDX74A2wFy3OmvJ54kE2OnD&sz=w1000";
const PAYMENT_QR_DRIVE_LINK = "https://drive.google.com/file/d/1BUrR_ac1SiDX74A2wFy3OmvJ54kE2OnD/view?usp=drive_link";

export const MakePaymentPage: React.FC<MakePaymentPageProps> = ({
  onBackToHome,
  onSelectService
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    invoiceNo: '',
    service: 'Private Limited Company',
    amount: '4999'
  });

  const [paymentMethod, setPaymentMethod] = useState<'phonepe' | 'paytm' | 'gpay'>('phonepe');
  const [showQrModal, setShowQrModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [txnId, setTxnId] = useState('');
  const [copiedUpi, setCopiedUpi] = useState(false);

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

  const handleProceedToPay = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.amount) return;
    setShowQrModal(true);
  };

  const handleConfirmPayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      const generatedTxn = `TXN-ABS-${Math.floor(10000000 + Math.random() * 90000000)}`;
      setTxnId(generatedTxn);
      setIsProcessing(false);
      setShowQrModal(false);
      setIsSuccess(true);
    }, 1200);
  };

  const copyUpiId = () => {
    navigator.clipboard.writeText('akshayb2b@hdfcbank');
    setCopiedUpi(true);
    setTimeout(() => setCopiedUpi(false), 2000);
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
            <span className="text-[#FF5A00] font-semibold">Make a Payment</span>
          </div>

          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-200 border border-blue-400/30 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-[#FF5A00]" />
              256-BIT SSL ENCRYPTED PAYMENT GATEWAY
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Make a Payment
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              Make your payment securely for Akshay B2B Solutions services.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* Trust Security Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center gap-3 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-xs text-slate-900">Secure Payment</h3>
                <p className="text-[11px] text-slate-500">256-Bit SSL Protection</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center gap-3 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0B3D91] flex items-center justify-center font-bold">
                <Lock className="w-5 h-5 text-[#FF5A00]" />
              </div>
              <div>
                <h3 className="font-bold text-xs text-slate-900">Encrypted Transaction</h3>
                <p className="text-[11px] text-slate-500">PCI-DSS Gateway Compliant</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center gap-3 shadow-2xs">
              <div className="w-10 h-10 rounded-lg bg-orange-50 text-[#FF5A00] flex items-center justify-center font-bold">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-xs text-slate-900">Payment Support</h3>
                <p className="text-[11px] text-slate-500">{COMPANY_DETAILS.phone}</p>
              </div>
            </div>
          </div>

          {isSuccess ? (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-8 sm:p-12 text-center space-y-6 max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Payment Successful
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  Transaction Completed
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Transaction Reference ID: <strong className="text-[#0B3D91] font-mono font-bold text-base">{txnId}</strong>
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-left space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Customer Name:</span>
                  <span className="font-bold text-slate-900">{formData.name}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Service:</span>
                  <span className="font-bold text-[#0B3D91]">{formData.service}</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Invoice / Quote Ref:</span>
                  <span className="font-bold text-slate-900">{formData.invoiceNo || 'N/A'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Amount Paid:</span>
                  <span className="font-extrabold text-emerald-600 text-base">₹{Number(formData.amount).toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => setIsSuccess(false)}
                  className="px-6 py-3 bg-[#0B3D91] text-white text-xs font-bold rounded-xl hover:bg-[#082A66] transition-colors cursor-pointer"
                >
                  Make Another Payment
                </button>
                <button
                  onClick={onBackToHome}
                  className="px-6 py-3 bg-slate-100 text-slate-700 text-xs font-bold rounded-xl hover:bg-slate-200 transition-colors cursor-pointer"
                >
                  Return to Home
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Payment Form */}
              <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
                <div className="border-b border-slate-100 pb-4 space-y-1">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0B3D91]">
                    Enter Payment Details
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Provide customer &amp; service information to generate your instant payment QR code.
                  </p>
                </div>

                <form onSubmit={handleProceedToPay} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 block">
                        Customer / Business Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Kumar / ABC Traders"
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
                        placeholder="e.g. ramesh@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3D91]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 block">
                        Invoice / Quote Ref Number (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. INV-2026-981"
                        value={formData.invoiceNo}
                        onChange={(e) => setFormData({ ...formData, invoiceNo: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3D91]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1.5 sm:col-span-2">
                      <label className="text-xs font-bold text-slate-700 block">
                        Service Name <span className="text-red-500">*</span>
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
                        Amount (₹ INR) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        required
                        min="1"
                        placeholder="e.g. 4999"
                        value={formData.amount}
                        onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#0B3D91] font-bold text-[#0B3D91]"
                      />
                    </div>
                  </div>

                  {/* Select Payment Method */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <label className="text-xs font-bold text-slate-700 block">
                      Select Payment Mode
                    </label>

                    <div className="grid grid-cols-3 gap-3">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod('phonepe')}
                        className={`py-3 px-2 rounded-xl border text-xs font-bold flex flex-col items-center justify-center gap-2 transition-all cursor-pointer ${
                          paymentMethod === 'phonepe'
                            ? 'bg-purple-50/80 border-purple-500 text-purple-700 ring-1 ring-purple-500'
                            : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/7/71/PhonePe_Logo.svg"
                          alt="PhonePe"
                          referrerPolicy="no-referrer"
                          className="h-6 sm:h-7 object-contain"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "https://cdn.jsdelivr.net/npm/@thesvg/icons/icons/phonepe.svg";
                          }}
                        />
                        <span className="text-[10px] sm:text-xs">PhonePe</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod('paytm')}
                        className={`py-3 px-2 rounded-xl border text-xs font-bold flex flex-col items-center justify-center gap-2 transition-all cursor-pointer ${
                          paymentMethod === 'paytm'
                            ? 'bg-sky-50/80 border-sky-500 text-sky-700 ring-1 ring-sky-500'
                            : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <img
                          src="https://cdn.iconscout.com/icon/free/png-256/free-paytm-226448.png"
                          alt="Paytm"
                          referrerPolicy="no-referrer"
                          className="h-5 sm:h-6 object-contain"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "https://upload.wikimedia.org/wikipedia/commons/2/22/Paytm_Logo_%28standalone%29.svg";
                          }}
                        />
                        <span className="text-[10px] sm:text-xs">Paytm</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod('gpay')}
                        className={`py-3 px-2 rounded-xl border text-xs font-bold flex flex-col items-center justify-center gap-2 transition-all cursor-pointer ${
                          paymentMethod === 'gpay'
                            ? 'bg-blue-50/80 border-blue-500 text-blue-700 ring-1 ring-blue-500'
                            : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Pay_Logo_%282020%29.svg"
                          alt="Google Pay"
                          referrerPolicy="no-referrer"
                          className="h-5 sm:h-6 object-contain"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "https://cdn.jsdelivr.net/npm/@thesvg/icons/icons/google-pay.svg";
                          }}
                        />
                        <span className="text-[10px] sm:text-xs">Google Pay</span>
                      </button>
                    </div>

                    {paymentMethod === 'phonepe' && (
                      <div className="mt-3 p-4 bg-gradient-to-br from-purple-50 to-orange-50/20 border border-purple-100 rounded-xl space-y-2 text-center transition-all animate-in fade-in duration-200">
                        <div className="flex items-center justify-between border-b border-purple-100 pb-2">
                          <p className="font-bold text-purple-800 flex items-center gap-1.5 text-xs">
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/7/71/PhonePe_Logo.svg"
                              alt="PhonePe"
                              referrerPolicy="no-referrer"
                              className="h-4 object-contain inline-block"
                            />
                            <span>Pay with PhonePe</span>
                          </p>
                          <span className="text-[10px] font-bold text-purple-700 bg-purple-100/50 px-2.5 py-0.5 rounded-full border border-purple-200">
                            Instant PhonePe
                          </span>
                        </div>

                        <div className="space-y-1">
                          <p className="text-[11px] font-bold text-slate-800">
                            Proceed to scan the QR code
                          </p>
                          <p className="text-[10px] text-slate-500">
                            Click the <strong>Proceed to Pay</strong> button below to open the official secure PhonePe QR code to scan and pay instantly.
                          </p>
                        </div>
                      </div>
                    )}

                    {paymentMethod === 'paytm' && (
                      <div className="mt-3 p-4 bg-gradient-to-br from-sky-50 to-orange-50/20 border border-sky-100 rounded-xl space-y-2 text-center transition-all animate-in fade-in duration-200">
                        <div className="flex items-center justify-between border-b border-sky-100 pb-2">
                          <p className="font-bold text-sky-800 flex items-center gap-1.5 text-xs">
                            <img
                              src="https://cdn.iconscout.com/icon/free/png-256/free-paytm-226448.png"
                              alt="Paytm"
                              referrerPolicy="no-referrer"
                              className="h-3.5 object-contain inline-block"
                            />
                            <span>Pay with Paytm</span>
                          </p>
                          <span className="text-[10px] font-bold text-sky-700 bg-sky-100/50 px-2.5 py-0.5 rounded-full border border-sky-200">
                            Instant Paytm
                          </span>
                        </div>

                        <div className="space-y-1">
                          <p className="text-[11px] font-bold text-slate-800">
                            Proceed to scan the QR code
                          </p>
                          <p className="text-[10px] text-slate-500">
                            Click the <strong>Proceed to Pay</strong> button below to open the official secure Paytm QR code to scan and pay instantly.
                          </p>
                        </div>
                      </div>
                    )}

                    {paymentMethod === 'gpay' && (
                      <div className="mt-3 p-4 bg-gradient-to-br from-blue-50 to-orange-50/20 border border-blue-100 rounded-xl space-y-2 text-center transition-all animate-in fade-in duration-200">
                        <div className="flex items-center justify-between border-b border-blue-100 pb-2">
                          <p className="font-bold text-blue-800 flex items-center gap-1.5 text-xs">
                            <img
                              src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Pay_Logo_%282020%29.svg"
                              alt="Google Pay"
                              referrerPolicy="no-referrer"
                              className="h-4 object-contain inline-block"
                            />
                            <span>Pay with Google Pay</span>
                          </p>
                          <span className="text-[10px] font-bold text-blue-700 bg-blue-100/50 px-2.5 py-0.5 rounded-full border border-blue-200">
                            Instant Google Pay
                          </span>
                        </div>

                        <div className="space-y-1">
                          <p className="text-[11px] font-bold text-slate-800">
                            Proceed to scan the QR code
                          </p>
                          <p className="text-[10px] text-slate-500">
                            Click the <strong>Proceed to Pay</strong> button below to open the official secure Google Pay QR code to scan and pay instantly.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-[#FF5A00] hover:bg-[#FF6B00] text-white font-bold text-sm transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <QrCode className="w-5 h-5 text-white" />
                      <span>Proceed to Pay ₹{Number(formData.amount || 0).toLocaleString('en-IN')}</span>
                    </button>
                  </div>
                </form>
              </div>

              {/* Bank Details & Column */}
              <div className="lg:col-span-5 space-y-6">

                {/* Bank Details */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
                  <h3 className="font-bold text-base text-[#0B3D91] border-b border-slate-100 pb-2 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-[#FF5A00]" />
                    Direct Bank Transfer (NEFT / RTGS / IMPS)
                  </h3>

                  <div className="space-y-2.5 text-xs text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200 font-mono">
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-sans">Account Name:</span>
                      <span className="font-bold">AKSHAYB2BSOLUTIONS Pvt Ltd</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-sans">Bank Name:</span>
                      <span className="font-bold">ICICIBANK</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-sans">Account No:</span>
                      <span className="font-bold">071601521556</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-sans">IFSC Code:</span>
                      <span className="font-bold">ICIC0000716</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-sans">Branch:</span>
                      <span className="font-bold text-right pl-4">Okhla phase 2 new delhi</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    * After making a direct bank transfer, please share your payment receipt on WhatsApp or Email at <strong>{COMPANY_DETAILS.email}</strong> for instant acknowledgment.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-[#0B3D91] to-[#082A66] text-white rounded-2xl p-6 shadow-md space-y-3">
                  <h4 className="font-bold text-sm text-white">Need Billing Assistance?</h4>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    If you require a GST tax invoice, customized proforma quote, or payment support, connect directly with our accounts team.
                  </p>
                  <a
                    href={`tel:${COMPANY_DETAILS.phoneClean}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF5A00] text-white rounded-xl text-xs font-bold hover:bg-[#FF6B00] transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    Call Accounts Helpline
                  </a>
                </div>
              </div>

            </div>
          )}

        </div>
      </main>

      {/* Payment QR Code Modal (Triggered on Clicking Proceed to Pay) */}
      {showQrModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-2xl max-w-md w-full p-4 sm:p-6 space-y-4 sm:space-y-5 relative text-center max-h-[92vh] overflow-y-auto my-auto">
            
            {/* Modal Close Button */}
            <button
              onClick={() => setShowQrModal(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="space-y-1 text-center pt-1">
              <div className="w-20 h-10 flex items-center justify-center mx-auto mb-1.5 bg-slate-50 p-1.5 rounded-lg border border-slate-200">
                <img
                  src={
                    paymentMethod === 'phonepe'
                      ? "https://upload.wikimedia.org/wikipedia/commons/7/71/PhonePe_Logo.svg"
                      : paymentMethod === 'paytm'
                      ? "https://cdn.iconscout.com/icon/free/png-256/free-paytm-226448.png"
                      : "https://upload.wikimedia.org/wikipedia/commons/c/c7/Google_Pay_Logo_%282020%29.svg"
                  }
                  alt={paymentMethod.toUpperCase()}
                  referrerPolicy="no-referrer"
                  className="h-6 object-contain"
                  onError={(e) => {
                    const fallback = paymentMethod === 'phonepe'
                      ? "https://cdn.jsdelivr.net/npm/@thesvg/icons/icons/phonepe.svg"
                      : paymentMethod === 'paytm'
                      ? "https://upload.wikimedia.org/wikipedia/commons/2/22/Paytm_Logo_%28standalone%29.svg"
                      : "https://cdn.jsdelivr.net/npm/@thesvg/icons/icons/google-pay.svg";
                    (e.target as HTMLImageElement).src = fallback;
                  }}
                />
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#0B3D91]">
                Scan &amp; Pay via {paymentMethod === 'phonepe' ? 'PhonePe' : paymentMethod === 'paytm' ? 'Paytm' : 'Google Pay'}
              </h3>
              <p className="text-[11px] sm:text-xs text-slate-500">
                Akshay B2B Solutions — Instant Secure UPI Payment
              </p>
            </div>

            {/* Amount & Service Banner */}
            <div className="bg-slate-50 p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-200 text-left space-y-1.5 text-xs">
              <div className="flex justify-between items-center border-b border-slate-200 pb-1.5">
                <span className="text-slate-500">Payable Amount:</span>
                <span className="text-base sm:text-lg font-extrabold text-[#FF5A00]">
                  ₹{Number(formData.amount || 0).toLocaleString('en-IN')}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">Selected Service:</span>
                <span className="font-bold text-[#0B3D91] truncate max-w-[150px] sm:max-w-[200px]">
                  {formData.service}
                </span>
              </div>
              <div className="flex justify-between items-center text-[11px] text-slate-500 pt-0.5">
                <span>Payer Name:</span>
                <span className="font-semibold text-slate-800 truncate max-w-[150px]">{formData.name}</span>
              </div>
            </div>

            {/* Main QR Code Display */}
            <div className="p-2.5 sm:p-4 bg-white rounded-2xl border-2 border-[#0B3D91]/20 shadow-xs inline-block relative max-w-full">
              <img
                src={PAYMENT_QR_IMAGE_DIRECT}
                alt="Payment QR Code - Akshay B2B Solutions"
                referrerPolicy="no-referrer"
                className="w-52 h-52 sm:w-64 sm:h-64 object-contain mx-auto rounded-xl bg-white"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = PAYMENT_QR_IMAGE_FALLBACK;
                }}
              />
              <div className="mt-1.5 sm:mt-2 pt-1.5 border-t border-slate-100 flex flex-col items-center justify-center gap-1">
                <div className="flex items-center justify-center gap-1.5 text-[11px] sm:text-xs font-bold text-slate-800">
                  <Building2 className="w-3.5 h-3.5 text-[#0B3D91]" />
                  <span>AKSHAY B2B SOLUTIONS</span>
                </div>
                <a
                  href={PAYMENT_QR_DRIVE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[10px] text-blue-600 hover:text-blue-800 hover:underline mt-0.5"
                >
                  <span>Open direct QR link</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Accepted UPI Apps */}
            <div className="space-y-1.5">
              <p className="text-[10px] sm:text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                Supported UPI Apps
              </p>
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
                {['Google Pay', 'PhonePe', 'Paytm', 'BHIM UPI'].map((appName) => (
                  <span
                    key={appName}
                    className="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-slate-100 text-slate-700 text-[10px] sm:text-[11px] font-bold border border-slate-200"
                  >
                    {appName}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2.5 pt-1">
              <button
                onClick={handleConfirmPayment}
                disabled={isProcessing}
                className="w-full py-3 sm:py-3.5 rounded-xl bg-[#0B3D91] hover:bg-[#082A66] text-white font-bold text-xs sm:text-sm transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 min-h-[44px]"
              >
                {isProcessing ? (
                  <span>Verifying Payment...</span>
                ) : (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>I Have Completed Payment</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-between text-[11px] sm:text-xs px-1">
                <button
                  onClick={() => setShowQrModal(false)}
                  className="text-slate-500 hover:text-slate-800 font-semibold cursor-pointer py-1"
                >
                  Cancel &amp; Edit
                </button>
                <a
                  href={PAYMENT_QR_DRIVE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0B3D91] font-bold hover:underline flex items-center gap-1 py-1"
                >
                  <ExternalLink className="w-3 h-3 text-[#FF5A00]" /> Open Full Image
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Footer */}
      <Footer onSelectService={onSelectService} />
    </div>
  );
};


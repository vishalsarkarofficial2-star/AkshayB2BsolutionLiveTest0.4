import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Bot, RotateCcw, Sparkles, SendHorizontal, PhoneCall, Mail, ChevronUp } from 'lucide-react';
import { COMPANY_DETAILS } from '../data/servicesData';
import chatbotIcon from '../assets/images/chatbot_icon_1787845668576.jpg';

interface Message {
  id: string;
  role: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

const SUGGESTIONS = [
  "How to register Pvt Ltd company?",
  "FSSAI license registration guidance",
  "How can I file GST returns?",
  "Export RCMC registration details",
  "Do you build custom CRM & Apps?"
];

// Local Knowledge Base to resolve questions with 100% reliability and zero latency
const getFallbackAnswer = (query: string): string => {
  const clean = query.toLowerCase();

  if (clean.includes('pvt') || clean.includes('private limited') || clean.includes('register company') || clean.includes('incorporation') || clean.includes('business registration') || clean.includes('opc') || clean.includes('llp')) {
    return `To register a **Private Limited (Pvt Ltd) Company**, **LLP**, or **OPC** in India, we provide end-to-end guidance:

1. **Required Documents**:
   - PAN Card & Aadhaar Card of Directors.
   - Passport-sized photographs.
   - Proof of Registered Office Address (Utility Bill like Electricity Bill/Gas Bill).
   - Landlord's No Objection Certificate (NOC).

2. **Our Registration Deliverables**:
   - Digital Signature Certificate (DSC) & Director Identification Number (DIN).
   - Name Approval (RUN).
   - Certificate of Incorporation (COI), PAN, and TAN generation.
   - Professional Drafting of Memorandum (MoA) & Articles of Association (AoA).

Would you like to initiate your registration today? Let's connect at **+91 97180 04839** or share your coordinates to begin!`;
  }

  if (clean.includes('fssai') || clean.includes('food') || clean.includes('license') || clean.includes('renewal') || clean.includes('fssai return')) {
    return `We handle all categories of **FSSAI Food License Registrations & Filings**:

- **FSSAI Basic Registration**: For petty food businesses (annual turnover up to ₹12 Lakhs).
- **FSSAI State License**: For medium-sized food businesses (annual turnover ₹12 Lakhs to ₹20 Crores).
- **FSSAI Central License**: For large-scale manufacturers, importers, or businesses operating across multiple states.
- **Annual Returns & Renewals**: We track and file your FSSAI compliance schedules dynamically.

Let's avoid hefty compliance penalties! Reach out at **+91 97180 04839** to start your food licensing process instantly.`;
  }

  if (clean.includes('gst') || clean.includes('return') || clean.includes('tax') || clean.includes('itr') || clean.includes('income tax') || clean.includes('tds') || clean.includes('lut')) {
    return `Our premium **Tax & GST Compliance Desk** provides:

- **GST Registration & Monthly/Quarterly Filings**: Complete GST R1 & 3B filing, reconciliation, and claim matching.
- **Income Tax Return (ITR)**: Professional tax planning and filing for salaried individuals, proprietary firms, and corporates.
- **TDS Returns**: Timely quarterly filings to prevent penalties.
- **LUT Registration**: Seamless execution for exporters who wish to export without paying IGST.

Let our dedicated experts handle the paperwork while you build your business! Call us at **+91 97180 04839** or write to **contact@akshayb2bsolutions.com**.`;
  }

  if (clean.includes('rcmc') || clean.includes('export') || clean.includes('spice') || clean.includes('fieo') || clean.includes('coffee') || clean.includes('apeda') || clean.includes('mpeda')) {
    return `We specialize in seamless **RCMC (Registration-Cum-Membership Certificate)** registrations across key export promotion councils:

- **FIEO** (Federation of Indian Export Organisations)
- **Spice Board** & **Coffee Board**
- **APEDA** (Agricultural products) & **MPEDA** (Marine products)
- **AEPC** (Apparels) & **Pharmexcil** (Pharmaceuticals)
- **EEPC** (Engineering) & **CHEMEXCIL** (Chemicals)

Get your IEC and RCMC done professionally! To start your export business, connect with us at **+91 97180 04839**.`;
  }

  if (clean.includes('website') || clean.includes('crm') || clean.includes('app') || clean.includes('software') || clean.includes('development') || clean.includes('tech')) {
    return `Yes! We build stunning **Custom Software & Technology Systems**:

- **Business Website Development**: Fully responsive, speed-optimized, and lead-capture-friendly web portals.
- **Custom CRM Solutions**: Bespoke management tools to track your leads, tasks, and client relationships.
- **Mobile Applications**: High-performance Android & iOS app development matching your operational workflow.
- **E-Commerce Platforms**: Secure online storefronts integrated with high-speed payment gateways.

We offer custom consulting tailored to your budget. Call us at **+91 97180 04839** to set up a scoping discussion!`;
  }

  if (clean.includes('contact') || clean.includes('phone') || clean.includes('email') || clean.includes('address') || clean.includes('office') || clean.includes('hours') || clean.includes('branch') || clean.includes('where')) {
    return `Here are the official coordinates for **AKSHAYB2BSOLUTIONS Private Limited**:

- **Phone**: +91 97180 04839
- **Email**: contact@akshayb2bsolutions.com
- **Working Hours**: Monday to Saturday, 09:00 AM to 07:00 PM (Closed on Sundays)
- **Locations**:
  - *Head Office*: Noida, Uttar Pradesh
  - *Kanpur Branch*: Kanpur, Uttar Pradesh
  - *Raebareli Branch*: Raebareli, Uttar Pradesh

How can I help schedule a callback for you?`;
  }

  return `Thank you for your inquiry! As **${COMPANY_DETAILS.name}**, we provide full-service support for:

- **Business Setup**: Pvt Ltd, LLP, OPC, Society, Trust, Partnership firms.
- **Licenses**: FSSAI, ISO 22000, EPR, Startup India, Make in India.
- **Taxation**: Monthly GST Filings, TDS, and corporate Income Tax Returns (ITR).
- **RCMC Export Codes**: FIEO, APEDA, Spice Board, and more.
- **Software**: Mobile app, custom CRM, and responsive web portals.

To give you an immediate customized proposal, please contact our compliance desk directly at **+91 97180 04839** or share your requirement here!`;
};

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  // Monitor scroll height to toggle back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Auto Scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Handle Initial Greeting Message
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;

      // Add a small delay for realistic presentation
      const timer = setTimeout(() => {
        const greetingMsg: Message = {
          id: 'welcome',
          role: 'bot',
          text: `Hello! 👋 Welcome to **akshayb2bsolutions**!\n\nWe specialize in making business setup, tax filings, legal registrations, FSSAI, and custom software systems completely seamless.\n\nHow may I assist you in making your paperwork simple today?`,
          timestamp: new Date()
        };
        setMessages([greetingMsg]);
        setIsOpen(true); // Open the chatbot automatically as soon as website loads
      }, 800);

      return () => clearTimeout(timer);
    }
  }, []);

  // Sync Unread Badges when chat is closed
  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
    }
  }, [isOpen]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg: Message = {
      id: Math.random().toString(36).substring(7),
      role: 'user',
      text: textToSend,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    // Provide instant local expert response with zero network latency
    // Delay slightly (150ms) to simulate extremely fast typing and clear state transitions
    await new Promise((res) => setTimeout(res, 150));

    const localResponse = getFallbackAnswer(textToSend);
    const botMsg: Message = {
      id: Math.random().toString(36).substring(7),
      role: 'bot',
      text: localResponse,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, botMsg]);
    setIsLoading(false);
  };

  const handleResetChat = () => {
    if (window.confirm("Are you sure you want to reset your conversation history?")) {
      const welcomeMsg: Message = {
        id: 'welcome',
        role: 'bot',
        text: `Hello! 👋 Welcome to **akshayb2bsolutions**!\n\nWe specialize in making business setup, tax filings, legal registrations, FSSAI, and custom software systems completely seamless.\n\nHow may I assist you in making your paperwork simple today?`,
        timestamp: new Date()
      };
      setMessages([welcomeMsg]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto p-3.5 rounded-full bg-white hover:bg-slate-50 text-[#0B3D91] border border-slate-200 shadow-xl transition-all hover:scale-110 cursor-pointer animate-in fade-in"
          aria-label="Scroll to top"
          title="Back to Top"
        >
          <ChevronUp className="w-5 h-5 text-[#0B3D91]" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="pointer-events-auto w-[92vw] sm:w-[420px] h-[550px] max-h-[80vh] bg-white rounded-2xl shadow-2xl border border-slate-200/80 flex flex-col overflow-hidden mb-4 animate-in slide-in-from-bottom-5 fade-in duration-300">
          
          {/* Header perfectly matching website home page color */}
          <div className="bg-gradient-to-r from-[#0B3D91] to-[#FF5A00] p-4 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center border-2 border-white/40 shadow-inner bg-white">
                <img src={chatbotIcon} alt="akshayb2b AI" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="font-extrabold text-sm tracking-wide">akshayb2b AI Assistant</h4>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                </div>
                <p className="text-[10px] text-blue-200 uppercase font-black tracking-widest">
                  {COMPANY_DETAILS.tagline}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-1.5">
              <button
                onClick={handleResetChat}
                className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-white/80 hover:text-white cursor-pointer"
                title="Reset conversation"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/10 transition-colors text-white/80 hover:text-white cursor-pointer"
                title="Minimize chat"
              >
                <X className="w-4.5 h-4.5" />
              </button>
            </div>
          </div>

          {/* Quick Contact Header Ribbon */}
          <div className="bg-slate-50 border-b border-slate-100 py-2 px-4 flex items-center justify-between text-[11px] text-slate-500 font-medium">
            <span className="flex items-center gap-1">
              <PhoneCall className="w-3 h-3 text-[#FF5A00]" />
              {COMPANY_DETAILS.phone}
            </span>
            <span className="flex items-center gap-1">
              <Mail className="w-3 h-3 text-[#0B3D91]" />
              {COMPANY_DETAILS.email}
            </span>
          </div>

          {/* Messages list */}
          <div className="flex-1 overflow-y-auto p-4 bg-slate-50/50 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in-50 duration-150`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 text-xs shadow-3xs leading-relaxed whitespace-pre-line ${
                    msg.role === 'user'
                      ? 'bg-[#0B3D91] text-white rounded-tr-none font-medium'
                      : 'bg-white text-slate-800 border border-slate-100 rounded-tl-none'
                  }`}
                >
                  {msg.role === 'bot' && (
                    <div className="flex items-center gap-1 mb-1 text-[9px] font-bold text-emerald-600 uppercase tracking-wider">
                      <Sparkles className="w-2.5 h-2.5 text-emerald-500" />
                      <span>AI Expert</span>
                    </div>
                  )}
                  <div>
                    {msg.text.split('\n').map((line, idx) => {
                      // Custom bold markdown renderer: **text** to <strong>text</strong>
                      const parts = line.split('**');
                      if (parts.length > 1) {
                        return (
                          <p key={idx} className={idx > 0 ? 'mt-1' : ''}>
                            {parts.map((part, pIdx) =>
                              pIdx % 2 === 1 ? <strong key={pIdx} className="font-extrabold text-[#0B3D91]">{part}</strong> : part
                            )}
                          </p>
                        );
                      }
                      return <p key={idx} className={idx > 0 ? 'mt-1' : ''}>{line}</p>;
                    })}
                  </div>
                  <span className={`block text-[8px] mt-1.5 text-right ${msg.role === 'user' ? 'text-white/60' : 'text-slate-400'}`}>
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-100 rounded-2xl rounded-tl-none p-3 shadow-3xs flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#0B3D91] animate-bounce [animation-delay:-0.3s]"></span>
                  <span className="w-2 h-2 rounded-full bg-[#0B3D91] animate-bounce [animation-delay:-0.15s]"></span>
                  <span className="w-2 h-2 rounded-full bg-[#0B3D91] animate-bounce"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions */}
          <div className="bg-white px-3 pt-2.5 pb-1 border-t border-slate-100 overflow-x-auto whitespace-nowrap flex gap-2 scrollbar-none">
            {SUGGESTIONS.map((suggestion, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(suggestion)}
                className="inline-block text-[10px] font-bold text-[#0B3D91] bg-blue-50/70 hover:bg-[#0B3D91] hover:text-white px-3 py-1.5 rounded-full border border-blue-100 transition-all cursor-pointer whitespace-nowrap shadow-3xs"
              >
                {suggestion}
              </button>
            ))}
          </div>

          {/* Footer Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputText);
            }}
            className="p-3 bg-white border-t border-slate-200 flex gap-2 items-center"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask anything about our company or services..."
              className="flex-1 text-xs border border-slate-200 focus:border-[#0B3D91] outline-hidden rounded-xl px-3.5 py-2.5 transition-all text-slate-800 placeholder-slate-400 bg-slate-50/50 focus:bg-white"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !inputText.trim()}
              className="p-2.5 bg-[#0B3D91] text-white rounded-xl hover:bg-blue-900 transition-colors cursor-pointer flex items-center justify-center disabled:opacity-45 disabled:cursor-not-allowed shadow-md"
            >
              <SendHorizontal className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Trigger Button perfectly matched to home page color scheme */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto w-14 h-14 rounded-full bg-gradient-to-r from-[#0B3D91] to-[#FF5A00] flex items-center justify-center text-white shadow-2xl hover:shadow-orange-600/35 hover:scale-105 transition-all cursor-pointer duration-300 relative group"
        aria-label="Open Chatbot Assistance"
      >
        {isOpen ? (
          <X className="w-6 h-6 animate-in spin-in-90 duration-200" />
        ) : (
          <div className="w-full h-full rounded-full overflow-hidden p-0.5 border border-white/20">
            <img src={chatbotIcon} alt="akshayb2b AI Assistant" className="w-full h-full object-cover rounded-full" referrerPolicy="no-referrer" />
          </div>
        )}
        
        {/* Persistent speech bubble badge next to the chatbot icon */}
        {!isOpen && (
          <div className="absolute right-16 bg-gradient-to-r from-[#0B3D91] to-[#FF5A00] text-white font-extrabold text-xs px-4 py-2.5 rounded-full whitespace-nowrap shadow-xl flex items-center gap-2 animate-bounce select-none">
            <span>👋 We Are Here !</span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            {/* Small speech bubble arrow pointing directly to the chatbot trigger icon */}
            <div className="absolute top-1/2 -translate-y-1/2 right-[-6px] w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-[#FF5A00]"></div>
          </div>
        )}

        {unreadCount > 0 && (
          <span className="absolute -top-1.5 -right-1.5 w-6 h-6 bg-red-500 rounded-full text-white font-bold text-[10px] flex items-center justify-center border-2 border-white shadow-md animate-bounce">
            {unreadCount}
          </span>
        )}
      </button>
    </div>
  );
};

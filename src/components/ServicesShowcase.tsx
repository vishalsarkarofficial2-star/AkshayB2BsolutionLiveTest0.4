import React, { useState } from 'react';
import { SafeImage } from './SafeImage';
import {
  Building2,
  Users,
  User,
  UserCheck,
  Handshake,
  HeartHandshake,
  Utensils,
  ChefHat,
  Globe2,
  Anchor,
  FileSpreadsheet,
  Receipt,
  ShieldCheck,
  Gavel,
  Award,
  CheckCircle2,
  Lock,
  ShoppingBag,
  Rocket,
  Landmark,
  PlaneTakeoff,
  Building,
  Sparkles,
  ShieldAlert,
  Recycle,
  FileCheck,
  Calculator,
  Search,
  ArrowRight,
  Clock,
  Check,
  Eye,
  Filter
} from 'lucide-react';
import { DETAILED_SERVICES, SERVICE_CATEGORIES } from '../data/servicesData';
import { ServiceItem } from '../types';

interface ServicesShowcaseProps {
  onSelectServiceDetail?: (service: ServiceItem) => void;
  onSelectService?: (service: ServiceItem) => void;
  onApplyForService?: (serviceName: string) => void;
  onApplyService?: (serviceName: string) => void;
}

// Icon mapper for dynamic icon rendering
const iconMap: Record<string, React.ElementType> = {
  Building2,
  Users,
  User,
  UserCheck,
  Handshake,
  HeartHandshake,
  Utensils,
  ChefHat,
  Globe2,
  Anchor,
  FileSpreadsheet,
  Receipt,
  ShieldCheck,
  Gavel,
  Award,
  CheckCircle2,
  Lock,
  ShoppingBag,
  Rocket,
  Landmark,
  PlaneTakeoff,
  Building,
  Sparkles,
  ShieldAlert,
  Recycle,
  FileCheck,
  Calculator
};

const CATEGORY_IMAGES: Record<string, string> = {
  'Domestic': 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=400&q=80',
  'Food Business': 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=400&q=80',
  'GST & TAX': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=80',
  'Import Export': 'https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?auto=format&fit=crop&w=400&q=80',
  'Initial Registration': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80',
  'ISO Standard': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80',
  'Trademark': 'https://images.unsplash.com/photo-1450101499163-c8848c66cb85?auto=format&fit=crop&w=400&q=80',
  'IT & Digital Services': 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
  'Default': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80'
};

const SERVICE_IMAGES: Record<string, string> = {
  'pvt-ltd': 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80',
  'sole-proprietorship': 'https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&w=400&q=80',
  'llp': 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=400&q=80',
  'opc': 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80',
  'producer-company': 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=400&q=80',
  'partnership-firm': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80',
  'section-8': 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=400&q=80',
  'fssai-reg': 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=400&q=80',
  'fssai-state-license': 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=400&q=80',
  'iec-reg': 'https://images.unsplash.com/photo-1586528116311-ad8ed7c80a30?auto=format&fit=crop&w=400&q=80',
  'ad-code-reg': 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=400&q=80',
  'gst-reg': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=400&q=80',
  'gst-return-filing': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80',
  'tm-registration': 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=400&q=80',
  'tm-objection': 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=400&q=80',
  'msme-reg': 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80',
  'iso-9001': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=400&q=80',
  'iso-27001': 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=400&q=80',
  'startup-india': 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=400&q=80',
  'rera-reg': 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=400&q=80',
  'ngo-darpan': 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=400&q=80',
  'epf-esi': 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=400&q=80',
  'epr-plastic-waste': 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15f?auto=format&fit=crop&w=400&q=80',
  'posh-compliance': 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=400&q=80',
  'accounting-bookkeeping': 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=400&q=80',
  'website-development': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80',
  'app-development': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80',
  'crm-development': 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80',
  'software-development': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80',
  'digital-marketing': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80'
};

export const ServicesShowcase: React.FC<ServicesShowcaseProps> = ({
  onSelectServiceDetail,
  onSelectService,
  onApplyForService,
  onApplyService
}) => {
  const handleSelect = (service: ServiceItem) => {
    if (onSelectService) onSelectService(service);
    if (onSelectServiceDetail) onSelectServiceDetail(service);
  };

  const handleApply = (serviceName: string) => {
    if (onApplyService) onApplyService(serviceName);
    if (onApplyForService) onApplyForService(serviceName);
  };

  const [activeCategory, setActiveCategory] = useState('All Services');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter services by category and search
  const filteredServices = DETAILED_SERVICES.filter((service) => {
    const matchesCategory =
      activeCategory === 'All Services' ||
      service.category === activeCategory ||
      service.subCategory === activeCategory;

    const matchesSearch =
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.features.some(f => f.toLowerCase().includes(searchTerm.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="our-services-section" className="py-16 sm:py-20 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-slate-200 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0B3D91] text-xs font-bold uppercase tracking-wider mb-2 border border-blue-100">
              <Sparkles className="w-3.5 h-3.5 text-[#FF5A00]" />
              <span>Full Compliance Spectrum</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B3D91] tracking-tight">
              Our Comprehensive Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 max-w-2xl">
              End-to-end company incorporation, mandatory licensing, tax return filings, and IP rights protection with guaranteed fast turnaround times.
            </p>
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-72">
            <input
              id="services-filter-search"
              type="text"
              placeholder="Filter 30+ services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 pl-9 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0B3D91] focus:ring-1 focus:ring-[#0B3D91]"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-2.5 top-2.5" />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="text-slate-400 hover:text-slate-700 text-xs absolute right-2.5 top-2.5"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Main 2-Column Layout: Left Vertical Sidebar Filter + Right Tabbed Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Vertical Sidebar (Desktop) */}
          <div className="hidden lg:block lg:col-span-3 space-y-2">
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl sticky top-28 shadow-xs">
              <div className="flex items-center gap-2 px-2 py-2 mb-2 text-xs font-bold uppercase tracking-wider text-[#0B3D91] border-b border-slate-200">
                <Filter className="w-3.5 h-3.5 text-[#FF5A00]" />
                <span>Categories</span>
              </div>
              <div className="space-y-1">
                {SERVICE_CATEGORIES.map((cat) => {
                  const isActive = activeCategory === cat;
                  const count =
                    cat === 'All Services'
                      ? DETAILED_SERVICES.length
                      : DETAILED_SERVICES.filter(
                          (s) => s.category === cat || s.subCategory === cat
                        ).length;

                  return (
                    <button
                      key={cat}
                      id={`sidebar-cat-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                      onClick={() => setActiveCategory(cat)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold flex items-center justify-between transition-all cursor-pointer ${
                        isActive
                          ? 'bg-[#0B3D91] text-white shadow-sm'
                          : 'text-slate-700 hover:bg-slate-100 hover:text-[#0B3D91]'
                      }`}
                    >
                      <span className="truncate">{cat}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                          isActive
                            ? 'bg-white/20 text-white font-extrabold'
                            : 'bg-slate-200 text-slate-600'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Main Grid Section */}
          <div className="lg:col-span-9 space-y-6">
            {/* Horizontal Filter Tabs (Responsive for mobile & quick desktop switching) */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
              {SERVICE_CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    id={`tab-cat-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer border ${
                      isActive
                        ? 'bg-[#0B3D91] text-white border-[#0B3D91] shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:text-[#0B3D91]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Service Cards Responsive Grid */}
            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {filteredServices.map((service) => {
                  const Icon = iconMap[service.iconName] || Building2;
                  return (
                    <div
                      key={service.id}
                      id={`service-card-${service.id}`}
                      className="group bg-white border border-slate-200 hover:border-[#0B3D91] rounded-xl flex flex-col transition-all duration-300 hover:shadow-md hover:-translate-y-1 relative overflow-hidden h-full"
                    >
                      {/* Image Banner */}
                      <div className="h-32 relative overflow-hidden shrink-0 border-b border-slate-100">
                        <SafeImage 
                          src={SERVICE_IMAGES[service.id] || CATEGORY_IMAGES[service.category] || CATEGORY_IMAGES['Default']}
                          alt={service.name}
                          className="transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                        <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                            <div className="w-10 h-10 rounded-lg bg-white shadow-sm flex items-center justify-center text-[#0B3D91] group-hover:text-[#FF5A00] group-hover:scale-105 transition-all">
                                <Icon className="w-5 h-5" />
                            </div>
                            {service.badge && (
                                <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-orange-400 text-orange-950 shadow-sm border border-orange-300">
                                {service.badge}
                                </span>
                            )}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4 flex-1 flex flex-col space-y-3">
                        <div className="space-y-1.5 flex-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                            {service.category}
                          </span>
                          <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0B3D91] transition-colors line-clamp-2">
                            {service.name}
                          </h3>
                          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                            {service.shortDesc}
                          </p>
                        </div>

                        {/* Turnaround Time & Govt Fee Indicator */}
                        <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500 border-t border-slate-100">
                          <span className="flex items-center gap-1 font-medium">
                            <Clock className="w-3.5 h-3.5 text-[#0B3D91]" />
                            <span>{service.tat}</span>
                          </span>
                          <span className="text-slate-700 font-bold truncate max-w-[130px]">
                            {service.govtFee}
                          </span>
                        </div>

                        {/* Key Features Preview */}
                        <div className="pt-1 space-y-1">
                          {service.features.slice(0, 2).map((feat, fIdx) => (
                            <div key={fIdx} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                              <Check className="w-3 h-3 text-orange-600 flex-shrink-0" />
                              <span className="truncate">{feat}</span>
                            </div>
                          ))}
                        </div>

                        {/* Actions: View More & Apply Now */}
                        <div className="pt-3 mt-3 border-t border-slate-100 flex items-center gap-2">
                          <button
                            id={`service-view-btn-${service.id}`}
                            onClick={() => handleSelect(service)}
                            className="flex-1 py-2 px-3 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-[#0B3D91] text-xs font-bold border border-slate-200 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                          >
                            <Eye className="w-3.5 h-3.5 text-[#0B3D91]" />
                            <span>View More</span>
                          </button>
                          <button
                            id={`service-apply-btn-${service.id}`}
                            onClick={() => handleApply(service.name)}
                            className="py-2 px-3 rounded-lg bg-[#0B3D91] hover:bg-blue-900 text-white text-xs font-bold flex items-center justify-center gap-1 transition-colors shadow-xs cursor-pointer"
                          >
                            <span>Apply</span>
                            <ArrowRight className="w-3 h-3 text-[#FF5A00]" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="p-12 text-center bg-slate-50 border border-slate-200 rounded-xl">
                <Search className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                <h4 className="text-base font-bold text-slate-900">No services found</h4>
                <p className="text-xs text-slate-500 mt-1">Try clearing your search query or selecting a different category.</p>
                <button
                  onClick={() => {
                    setActiveCategory('All Services');
                    setSearchTerm('');
                  }}
                  className="mt-4 px-4 py-2 bg-[#0B3D91] text-white text-xs font-bold rounded-lg shadow-sm"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

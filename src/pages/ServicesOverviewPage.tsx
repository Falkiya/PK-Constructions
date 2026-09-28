import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Home, 
  Building2, 
  Castle, 
  Hammer, 
  Compass, 
  ClipboardCheck, 
  Layers, 
  Trees, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { CTASection } from '../components/common/CTASection';
import { servicesData } from '../data/servicesData';

export const ServicesOverviewPage: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home': return <Home className="w-6 h-6" />;
      case 'Building2': return <Building2 className="w-6 h-6" />;
      case 'Castle': return <Castle className="w-6 h-6" />;
      case 'Hammer': return <Hammer className="w-6 h-6" />;
      case 'Compass': return <Compass className="w-6 h-6" />;
      case 'ClipboardCheck': return <ClipboardCheck className="w-6 h-6" />;
      case 'Layers': return <Layers className="w-6 h-6" />;
      case 'Trees': return <Trees className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <>
      <SEOHead
        title="Real Estate & Property Dealing Services | PK Developers"
        description="Explore PK Developers full suite of property dealing services: residential villas, commercial leasing, approved layout plots, real estate investment advisory, and turnkey villa development."
        canonicalPath="/services"
      />

      {/* HERO SECTION */}
      <section className="relative py-28 bg-slate-900 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=2000&q=80"
            alt="PK Developers Real Estate Services"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/90" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
            Property & Advisory Capabilities
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Real Estate & Property Services
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            From verified residential villa acquisitions and corporate office leasing to approved plotted developments and strategic investment advisory, explore our core property divisions.
          </p>
        </div>
      </section>

      {/* SERVICES OVERVIEW GRID (8 LARGE CARDS) */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="group relative flex flex-col bg-white border border-slate-200 rounded-3xl overflow-hidden hover:border-blue-400 hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />
                  
                  {/* Icon badge */}
                  <div className="absolute top-5 left-5 p-3.5 rounded-2xl bg-white/95 border border-slate-200 text-blue-600 shadow-md backdrop-blur-md">
                    {getIcon(service.icon)}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {service.shortDescription}
                    </p>

                    {/* Key Benefits */}
                    <div className="space-y-2.5 pt-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                        Key Benefits & Capabilities:
                      </span>
                      <ul className="space-y-2">
                        {service.keyBenefits.map((benefit, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-400 font-medium">
                      RERA & Legal Standards
                    </span>
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 border border-blue-200 hover:border-blue-600 shadow-sm"
                    >
                      <span>View Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE OUR SERVICES */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <ShieldCheck className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-extrabold text-slate-900">
            100% Clear Titles & Institutional Due Diligence
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            By unifying property sourcing, 30-year title legal verification, direct owner negotiation, and registrar paperwork under one roof, PK Developers eliminates hidden middlemen, prevents fraud, and delivers verified real estate assets with peace of mind.
          </p>
          <div className="mt-8">
            <Link
              to="/get-a-quote"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-xl shadow-blue-500/20 transition-all hover:scale-105 active:scale-95"
            >
              <span>Request Property Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Have a Specific Property or Land Requirement?"
        subtitle="Schedule a consultation with our senior property advisors and legal team to review available inventory and off-market opportunities."
        primaryButtonText="Inquire About Properties"
        primaryButtonLink="/get-a-quote"
      />
    </>
  );
};

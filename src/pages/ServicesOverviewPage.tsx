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
        title="Construction & Development Services | PK Developers"
        description="Explore PK Developers full suite of civil construction services: residential villas, commercial complexes, structural renovations, architectural planning, and project management."
        canonicalPath="/services"
      />

      {/* HERO SECTION */}
      <section className="relative py-28 bg-stone-950 overflow-hidden border-b border-stone-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=2000&q=80"
            alt="PK Developers Construction Services"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950/90" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-6">
            End-to-End Capabilities
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Comprehensive Construction Services
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
            From groundbreaking geotechnical foundations to master architectural envelopes and turnkey interiors, discover our specialized divisions.
          </p>
        </div>
      </section>

      {/* SERVICES OVERVIEW GRID (8 LARGE CARDS) */}
      <section className="py-24 bg-stone-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="group relative flex flex-col bg-stone-900/60 border border-stone-800 rounded-3xl overflow-hidden hover:border-amber-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/5"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/30 to-transparent" />
                  
                  {/* Icon badge */}
                  <div className="absolute top-5 left-5 p-3.5 rounded-2xl bg-stone-950/90 border border-stone-800 text-amber-400 shadow-xl backdrop-blur-md">
                    {getIcon(service.icon)}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-sm text-stone-300 leading-relaxed">
                      {service.shortDescription}
                    </p>

                    {/* Key Benefits */}
                    <div className="space-y-2.5 pt-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-amber-500">
                        Key Benefits & Capabilities:
                      </span>
                      <ul className="space-y-2">
                        {service.keyBenefits.map((benefit, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-xs text-stone-300">
                            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-6 border-t border-stone-800/80 flex items-center justify-between">
                    <span className="text-xs text-stone-500">
                      RERA & NBC Standard
                    </span>
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-stone-950 font-bold text-xs uppercase tracking-wider transition-all duration-200 border border-amber-500/30 hover:border-amber-500"
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
      <section className="py-20 bg-stone-900/40 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <ShieldCheck className="w-12 h-12 text-amber-400 mx-auto mb-4" />
          <h2 className="text-3xl font-extrabold text-white">
            Integrated Design-Build Delivery Model
          </h2>
          <p className="mt-4 text-base text-stone-300 leading-relaxed">
            By unifying architectural planning, engineering calculation, procurement, and site execution under one single roof, PK Developers eliminates subcontractor blame-shifting, tightens construction schedules, and delivers superior quality control with a guaranteed 10-year structural warranty.
          </p>
          <div className="mt-8">
            <Link
              to="/get-a-quote"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm shadow-xl"
            >
              <span>Request Detailed Service Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Have a Specific Construction Requirement?"
        subtitle="Schedule a consultation with our senior project estimators and structural engineers to review your plot, drawings, and budget specifications."
        primaryButtonText="Request a Consultation"
        primaryButtonLink="/get-a-quote"
      />
    </>
  );
};

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Hammer, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Home, 
  Building2, 
  Sparkles, 
  Layers, 
  ChevronDown, 
  RefreshCw 
} from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { BeforeAfterSlider } from '../components/common/BeforeAfterSlider';
import { CTASection } from '../components/common/CTASection';

export const RenovationRemodelingPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const renovationServices = [
    {
      title: 'Full Home Renovation',
      description: 'Comprehensive transformation of aging residences into energy-efficient, open-concept luxury homes with custom joinery and modern spatial layouts.',
      icon: Home
    },
    {
      title: 'Corporate Office Renovation',
      description: 'Upgrading tired commercial floors into agile, high-density workspaces with acoustic ceiling treatments, modern MEP systems, and collaboration hubs.',
      icon: Building2
    },
    {
      title: 'Interior Remodeling & Joinery',
      description: 'Reconfiguring interior partition layouts, gourmet kitchen overhauls, spa-inspired bathrooms, and factory-finished artisan timber millwork.',
      icon: Sparkles
    },
    {
      title: 'Exterior Facade Upgrades',
      description: 'Replacing outdated exteriors with ventilated terracotta rainscreens, modern double-glazed curtain walls, ambient architectural lighting, and balconies.',
      icon: Layers
    },
    {
      title: 'Structural Retrofitting & Strengthening',
      description: 'Carbon fiber (CFRP) wrapping, column jacketing, foundation underpinning, and load-bearing redistribution to upgrade seismic resilience.',
      icon: Hammer
    }
  ];

  const faqs = [
    {
      q: 'Can a home or commercial building remain occupied during renovation?',
      a: 'Depending on the project scope, we frequently execute renovations in designated phases. Our team installs airtight dust containment barriers, negative air scrubbers, and sound dampening blankets to minimize disruption to unaffected areas.'
    },
    {
      q: 'How do you determine if existing walls can be removed for open-concept layouts?',
      a: 'Our senior structural engineers perform non-destructive concrete scanning and core testing. If a wall is load-bearing, we engineer concealed steel universal beams (UB) or post-tensioned lintels to safely transfer upper floor loads into reinforced columns.'
    },
    {
      q: 'What happens if hidden structural defects are uncovered during demolition?',
      a: 'We perform thorough pre-construction structural diagnostics to identify hidden issues early. Any unexpected latent site conditions are immediately logged with photographic evidence and presented with itemized remedial solutions before execution.'
    }
  ];

  return (
    <>
      <SEOHead
        title="Renovation & Remodeling Services | Structural Retrofitting | PK Developers"
        description="Transform your residential or commercial space with PK Developers. Specialized in structural retrofitting, interior remodeling, facade updates, and luxury renovations."
        canonicalPath="/services/renovation-remodeling"
      />

      {/* HERO */}
      <section className="relative py-28 bg-slate-900 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=80"
            alt="Renovation and Remodeling Services"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/90" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
            Transformation & Retrofitting
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Renovation & Remodeling
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Rejuvenating existing residential estates, corporate headquarters, and heritage structures with structural reinforcement, modern spatial design, and luxury finishes.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/get-a-quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-xl shadow-blue-500/25 transition-all"
            >
              <span>Discuss Your Renovation Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-medium text-base transition-all"
            >
              <span>Explore Portfolio</span>
            </Link>
          </div>
        </div>
      </section>

      {/* INTERACTIVE BEFORE & AFTER SLIDER SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-3">
              Interactive Proof
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Before & After Transformation
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Drag the interactive slider handle left or right to reveal the structural and architectural metamorphosis engineered by PK Developers.
            </p>
          </div>

          {/* Slider 1: Exterior / Villa Restoration */}
          <div className="max-w-4xl mx-auto">
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80"
              afterImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80"
              beforeLabel="Before: Aging 1980s Masonry"
              afterLabel="After: Modern Cantilever Villa"
              title="Signature Villa Structural Modernization (Whitefield)"
            />
          </div>

          {/* Slider 2: Interior Living Transformation */}
          <div className="max-w-4xl mx-auto mt-16">
            <BeforeAfterSlider
              beforeImage="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=80"
              afterImage="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=1600&q=80"
              beforeLabel="Before: Partitioned & Outdated"
              afterLabel="After: Double-Height Travertine Salon"
              title="Richmond Town Residence Interior Overhaul"
            />
          </div>
        </div>
      </section>

      {/* RENOVATION SECTORS */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Comprehensive Remodeling Solutions
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              From historic heritage preservation to corporate open-space conversions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {renovationServices.map((srv, idx) => {
              const IconComponent = srv.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{srv.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{srv.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900">Our Disciplined Renovation Process</h2>
            <p className="text-sm text-slate-600 mt-2">Eliminating surprises through rigorous diagnostics and structural shoring.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <span className="text-xs font-mono text-blue-600 font-bold block mb-1">Step 01</span>
              <h4 className="text-base font-bold text-slate-900 mb-2">Structural Diagnostic</h4>
              <p className="text-xs text-slate-600 leading-relaxed">Laser level surveying, rebar corrosion depth checks, ultrasonic crack testing, and load-path calculations.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <span className="text-xs font-mono text-blue-600 font-bold block mb-1">Step 02</span>
              <h4 className="text-base font-bold text-slate-900 mb-2">Shoring & Controlled Strip</h4>
              <p className="text-xs text-slate-600 leading-relaxed">Hydraulic shoring of upper levels, dust-tight negative pressure barriers, and selective surgical demolition.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <span className="text-xs font-mono text-blue-600 font-bold block mb-1">Step 03</span>
              <h4 className="text-base font-bold text-slate-900 mb-2">Structural Strengthening & MEP</h4>
              <p className="text-xs text-slate-600 leading-relaxed">Steel flitch beam installation, carbon-fiber column jacketing, new acoustic piping, and concealed wiring.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <span className="text-xs font-mono text-blue-600 font-bold block mb-1">Step 04</span>
              <h4 className="text-base font-bold text-slate-900 mb-2">Finishes & Commissioning</h4>
              <p className="text-xs text-slate-600 leading-relaxed">High-end wall treatments, imported stone flooring, energy-efficient fixtures, and full warranty handover.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">Renovation FAQs</h2>
            <p className="text-sm text-slate-600 mt-2">Common questions regarding remodeling logistics, permits, and timelines.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-base font-bold text-slate-900">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-blue-600 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Transform Your Existing Property?"
        subtitle="Book an engineering diagnostic with our structural renovation specialists. We inspect the building, review original drawings, and prepare a modernization plan."
        primaryButtonText="Request Renovation Audit"
        primaryButtonLink="/get-a-quote"
        secondaryButtonText="Explore Projects"
        secondaryButtonLink="/projects"
      />
    </>
  );
};

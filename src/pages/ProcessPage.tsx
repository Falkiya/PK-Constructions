import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Award, 
  MessageSquare, 
  MapPin, 
  FileText, 
  Compass, 
  Calculator, 
  HardHat, 
  ShieldAlert, 
  CheckSquare, 
  KeyRound 
} from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { CTASection } from '../components/common/CTASection';
import { processSteps } from '../data/companyData';

export const ProcessPage: React.FC = () => {
  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare': return <MessageSquare className="w-6 h-6" />;
      case 'MapPin': return <MapPin className="w-6 h-6" />;
      case 'FileText': return <FileText className="w-6 h-6" />;
      case 'Compass': return <Compass className="w-6 h-6" />;
      case 'Calculator': return <Calculator className="w-6 h-6" />;
      case 'HardHat': return <HardHat className="w-6 h-6" />;
      case 'ShieldAlert': return <ShieldAlert className="w-6 h-6" />;
      case 'CheckSquare': return <CheckSquare className="w-6 h-6" />;
      case 'KeyRound': return <KeyRound className="w-6 h-6" />;
      default: return <CheckCircle2 className="w-6 h-6" />;
    }
  };

  return (
    <>
      <SEOHead
        title="Our 6-Step Property Transaction Process | Clean Titles & Registration | PK Developers"
        description="Discover how PK Developers guarantees 100% clear titles, transparent valuation, and effortless registration through our disciplined 6-step property transaction roadmap."
        canonicalPath="/process"
      />

      {/* HERO */}
      <section className="relative py-28 bg-slate-900 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=2000&q=80"
            alt="PK Developers Transaction Process"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/90" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-200 text-xs font-semibold uppercase tracking-wider mb-6">
            Proven Transaction Roadmap
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Our 6-Step Property Transaction Process
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            From initial requirement mapping and 30-year title diligence to commercial negotiation and registered deed handover, every step is built on 100% transparency.
          </p>
        </div>
      </section>

      {/* IMMERSIVE 9-STAGE TIMELINE */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative border-l-2 border-blue-200 ml-4 sm:ml-8 space-y-16">
            {processSteps.map((step, idx) => (
              <div key={step.number} className="relative pl-8 sm:pl-12 group">
                {/* Visual Node / Circle on the timeline */}
                <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center text-blue-600 font-mono font-bold text-xs shadow-md shadow-blue-500/20 group-hover:scale-125 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  {step.number}
                </div>

                {/* Step Card */}
                <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:bg-white transition-all shadow-sm hover:shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100 text-blue-600">
                        {getStepIcon(step.iconName)}
                      </div>
                      <div>
                        <span className="text-xs font-mono text-blue-600 font-bold block uppercase tracking-wider">
                          Stage {step.number}
                        </span>
                        <h2 className="text-2xl font-extrabold text-slate-900">
                          {step.title}
                        </h2>
                      </div>
                    </div>
                    <span className="self-start sm:self-auto text-xs font-mono px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 font-semibold shadow-sm">
                      Duration: {step.durationEstimate}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-blue-600 mb-3">
                    {step.subtitle}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Key Deliverables */}
                  <div className="pt-4 border-t border-slate-200">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                      Key Stage Deliverables & Checkpoints:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-700 font-medium">
                      {step.deliverables.map((del, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-2 p-2.5 rounded-lg bg-white border border-slate-200 shadow-sm">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span>{del}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUMMARY BANNER */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <ShieldCheck className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-extrabold text-slate-900">
            “From First Consultation to Registered Deed Handover.”
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Our 6-step framework protects your capital, eliminates legal uncertainty, and ensures every transaction is backed by 100% clear titles and authentic documentation.
          </p>
          <div className="mt-8">
            <Link
              to="/get-a-quote"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-xl shadow-blue-500/25 transition-all hover:-translate-y-0.5"
            >
              <span>Initiate Step 01: Property Requirement Session</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Buy, Sell, or Invest in Verified Real Estate?"
        subtitle="Book a consultation with our senior property advisors. We evaluate your budget, legal criteria, and recommend prime vetted properties."
        primaryButtonText="Inquire Property"
        primaryButtonLink="/get-a-quote"
      />
    </>
  );
};

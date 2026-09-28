import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Target, 
  Eye, 
  CheckCircle2, 
  Award, 
  ArrowRight, 
  HardHat, 
  Scale, 
  Users, 
  Clock, 
  Sparkles,
  Layers
} from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { CTASection } from '../components/common/CTASection';
import { companyValues } from '../data/companyData';

export const AboutPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="About Us | Property Dealing & Real Estate Advisory | PK Developers"
        description="Learn the story, mission, core values, and legal integrity that define PK Developers. Transforming real estate transactions with 100% verified titles and complete transparency."
        canonicalPath="/about"
      />

      {/* HERO SECTION */}
      <section className="relative py-28 bg-slate-900 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=2000&q=80"
            alt="PK Developers Team"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-900/90" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-200 text-xs font-semibold uppercase tracking-wider mb-6">
            About PK Developers
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            “Integrity in Every Transaction.”
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            We are dedicated to real estate advisory and property dealing rooted in 100% clear legal titles, accurate market valuations, and radical transparency.
          </p>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
                Our Heritage & Philosophy
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Redefining Real Estate Dealing Through Institutional Due Diligence
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                PK Developers was established with a singular conviction: that acquiring or selling real estate should inspire confidence rather than anxiety. Too often in the property sector, buyers and investors face opaque title records, hidden brokerage layers, and unvetted land boundaries.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                We rebuilt the paradigm from the ground up. By combining comprehensive legal title searches (30-year Encumbrance Certificates, BDA/BBMP khata checks) with disciplined micro-market valuation, PK Developers helps families, high-net-worth investors, and corporates acquire verified residential villas, commercial assets, and approved layout plots with zero litigation risk.
              </p>
              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="text-2xl font-bold text-blue-600 font-mono">100%</h4>
                  <p className="text-xs text-slate-600 font-semibold mt-1">Clear Title Guarantee</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <h4 className="text-2xl font-bold text-slate-900 font-mono">30-Year</h4>
                  <p className="text-xs text-slate-600 font-semibold mt-1">Title & EC Legal Audit</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
                  alt="Real Estate Advisory Studio"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 border border-slate-200 shadow-lg backdrop-blur-md">
                  <p className="text-xs text-slate-700 italic">
                    "True value in property is not merely square footage—it is pristine title deed integrity and enduring market appreciation."
                  </p>
                  <p className="text-[11px] text-blue-600 font-bold mt-1">
                    — PK Developers Advisory Charter
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm relative overflow-hidden group hover:border-blue-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-3">Our Mission</h3>
              <p className="text-base text-slate-600 leading-relaxed">
                Deliver verified, high-value real estate opportunities that protect capital and maximize growth. We facilitate seamless property transactions through rigorous legal diligence, market-tested valuations, and an ethical code of conduct that respects our clients’ investments.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm relative overflow-hidden group hover:border-blue-400 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-3">Our Vision</h3>
              <p className="text-base text-slate-600 leading-relaxed">
                Become South India’s most trusted real estate dealership and property consultancy, celebrated for zero-litigation records, transparent dealing, and lifelong client relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
              Guiding Principles
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Core Values
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              The fundamental standards that govern every client consultation, property verification, and deed execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyValues.map((val, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-all hover:bg-white hover:shadow-md"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{val.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY & DUE DILIGENCE COMMITMENT */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
                Uncompromising Due Diligence
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Our Absolute Commitment to Clean Titles
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Trust is our currency at PK Developers. Every transaction is subjected to rigorous multi-tiered legal and regulatory protocols before any agreement is signed.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white border border-slate-200 text-blue-600 shrink-0 shadow-sm">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">30-Year Title Search & EC Audit</h4>
                    <p className="text-xs text-slate-600 mt-1">
                      Comprehensive verification of Nil-Encumbrance certificates, flow of title deeds, and lineage trace over three decades.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white border border-slate-200 text-blue-600 shrink-0 shadow-sm">
                    <HardHat className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Physical Survey & Boundary Demarcation</h4>
                    <p className="text-xs text-slate-600 mt-1">
                      On-site DGPS and total station surveys to verify physical land boundaries against municipal village maps and approved layouts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-white border border-slate-200 text-blue-600 shrink-0 shadow-sm">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Direct & Zero-Brokerage Transparency</h4>
                    <p className="text-xs text-slate-600 mt-1">
                      Clear transaction terms with no hidden escalation, no layered intermediaries, and transparent statutory fee calculations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden border border-slate-200 h-64 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80"
                  alt="Legal Document Audit"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-slate-200 h-64 translate-y-6 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=800&q=80"
                  alt="Property Site Inspection"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Partner With PK Developers"
        subtitle="Connect with a property consultancy that values your capital, eliminates litigation risk, and delivers high-appreciation real estate."
        primaryButtonText="Inquire About Properties"
        primaryButtonLink="/get-a-quote"
        secondaryButtonText="Explore Verified Inventory"
        secondaryButtonLink="/projects"
      />
    </>
  );
};

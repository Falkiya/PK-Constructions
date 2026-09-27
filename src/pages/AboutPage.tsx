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
import { companyValues, teamMembers } from '../data/companyData';

export const AboutPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="About Us | Property Dealing & Real Estate Advisory | PK Developers"
        description="Learn the story, mission, core values, and legal integrity that define PK Developers. Transforming real estate transactions with 100% verified titles and complete transparency."
        canonicalPath="/about"
      />

      {/* HERO SECTION */}
      <section className="relative py-28 bg-stone-950 overflow-hidden border-b border-stone-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=2000&q=80"
            alt="PK Developers Team"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950/90" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-6">
            About PK Developers
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            “Integrity in Every Transaction.”
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
            We are dedicated to real estate advisory and property dealing rooted in 100% clear legal titles, accurate market valuations, and radical transparency.
          </p>
        </div>
      </section>

      {/* COMPANY STORY */}
      <section className="py-24 bg-stone-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                Our Heritage & Philosophy
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Redefining Real Estate Dealing Through Institutional Due Diligence
              </h2>
              <p className="text-base text-stone-300 leading-relaxed">
                PK Developers was established with a singular conviction: that acquiring or selling real estate should inspire confidence rather than anxiety. Too often in the property sector, buyers and investors face opaque title records, hidden brokerage layers, and unvetted land boundaries.
              </p>
              <p className="text-base text-stone-400 leading-relaxed">
                We rebuilt the paradigm from the ground up. By combining comprehensive legal title searches (30-year Encumbrance Certificates, BDA/BBMP khata checks) with disciplined micro-market valuation, PK Developers helps families, high-net-worth investors, and corporates acquire verified residential villas, commercial assets, and approved layout plots with zero litigation risk.
              </p>
              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-stone-900 border border-stone-800">
                  <h4 className="text-2xl font-bold text-amber-400 font-mono">100%</h4>
                  <p className="text-xs text-stone-400 font-medium mt-1">Clear Title Guarantee</p>
                </div>
                <div className="p-4 rounded-xl bg-stone-900 border border-stone-800">
                  <h4 className="text-2xl font-bold text-white font-mono">₹650 Cr+</h4>
                  <p className="text-xs text-stone-400 font-medium mt-1">Real Estate Transacted</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-stone-800 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
                  alt="Real Estate Advisory Studio"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-stone-900/90 border border-stone-800 backdrop-blur-md">
                  <p className="text-xs text-stone-300 italic">
                    "True value in property is not merely square footage—it is pristine title deed integrity and enduring market appreciation."
                  </p>
                  <p className="text-[11px] text-amber-400 font-semibold mt-1">
                    — PK Developers Advisory Charter
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 bg-stone-900/60 border-y border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="p-8 sm:p-10 rounded-2xl bg-stone-900 border border-stone-800 relative overflow-hidden group hover:border-amber-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-3">Our Mission</h3>
              <p className="text-base text-stone-300 leading-relaxed">
                Deliver verified, high-value real estate opportunities that protect capital and maximize growth. We facilitate seamless property transactions through rigorous legal diligence, market-tested valuations, and an ethical code of conduct that respects our clients’ investments.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 sm:p-10 rounded-2xl bg-stone-900 border border-stone-800 relative overflow-hidden group hover:border-amber-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-3">Our Vision</h3>
              <p className="text-base text-stone-300 leading-relaxed">
                Become South India’s most trusted real estate dealership and property consultancy, celebrated for zero-litigation records, transparent dealing, and lifelong client relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 bg-stone-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
              Guiding Principles
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our Core Values
            </h2>
            <p className="mt-3 text-sm text-stone-400">
              The fundamental standards that govern every conversation, site decision, and structural pour.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyValues.map((val, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-stone-900/60 border border-stone-800 hover:border-amber-500/30 transition-all hover:bg-stone-900/90"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{val.title}</h3>
                <p className="text-sm text-stone-400 leading-relaxed">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR TEAM */}
      <section className="py-24 bg-stone-900/40 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
              Leadership & Advisory
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our Leadership & Advisory Team
            </h2>
            <p className="mt-3 text-sm text-stone-400">
              Experienced real estate professionals, property transaction consultants, and legal specialists driving deals across Bengaluru.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 hover:border-amber-500/40 transition-all"
              >
                <div className="relative h-64 overflow-hidden bg-stone-800">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[10px] text-amber-400 font-mono font-medium">
                      {member.experience}
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-semibold text-amber-400">
                    {member.role}
                  </p>
                  <p className="text-xs text-stone-400 leading-relaxed pt-1">
                    {member.bio}
                  </p>
                  <div className="pt-2 border-t border-stone-800 text-[11px] text-stone-500">
                    <span className="text-stone-400 font-medium">Focus:</span> {member.specialization}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY & DUE DILIGENCE COMMITMENT */}
      <section className="py-24 bg-stone-950 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                Uncompromising Due Diligence
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Our Absolute Commitment to Clean Titles
              </h2>
              <p className="text-base text-stone-300 leading-relaxed">
                Trust is our currency at PK Developers. Every transaction is subjected to rigorous multi-tiered legal and regulatory protocols before any agreement is signed.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-stone-900 border border-stone-800 text-amber-400 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">30-Year Title Search & EC Audit</h4>
                    <p className="text-xs text-stone-400 mt-1">
                      Comprehensive verification of Nil-Encumbrance certificates, flow of title deeds, and lineage trace over three decades.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-stone-900 border border-stone-800 text-amber-400 shrink-0">
                    <HardHat className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Physical Survey & Boundary Demarcation</h4>
                    <p className="text-xs text-stone-400 mt-1">
                      On-site DGPS and total station surveys to verify physical land boundaries against municipal village maps and approved layouts.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-stone-900 border border-stone-800 text-amber-400 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Direct & Zero-Brokerage Transparency</h4>
                    <p className="text-xs text-stone-400 mt-1">
                      Clear transaction terms with no hidden escalation, no layered intermediaries, and transparent statutory fee calculations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden border border-stone-800 h-64">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80"
                  alt="Legal Document Audit"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-stone-800 h-64 translate-y-6">
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

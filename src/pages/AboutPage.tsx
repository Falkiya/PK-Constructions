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
        title="About Us | Building With Purpose | PK Developers"
        description="Learn the story, mission, core values, and engineering discipline that define PK Developers. Transforming architectural dreams into enduring structures."
        canonicalPath="/about"
      />

      {/* HERO SECTION */}
      <section className="relative py-28 bg-stone-950 overflow-hidden border-b border-stone-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=2000&q=80"
            alt="PK Developers Construction Team"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950/90" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-6">
            About PK Developers
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            “Building With Purpose.”
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
            We are dedicated to building structures that combine architectural elegance, structural longevity, and radical transparency.
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
                Crafting Spaces Where Legacy & Structural Mastery Meet
              </h2>
              <p className="text-base text-stone-300 leading-relaxed">
                PK Developers was established with a singular conviction: that the construction process should inspire confidence rather than anxiety. Too often in the building industry, clients face ambiguous cost estimates, timeline drift, and compromises in material grade.
              </p>
              <p className="text-base text-stone-400 leading-relaxed">
                We rebuilt the paradigm from the ground up. By fusing advanced digital project management (CPM scheduling, BIM modeling) with rigorous on-site civil discipline, PK Developers delivers turnkey residential villas and commercial hubs on schedule, within fixed budgets, and built to withstand seismic and environmental tests for a century.
              </p>
              <div className="pt-2 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-stone-900 border border-stone-800">
                  <h4 className="text-2xl font-bold text-amber-400 font-mono">100%</h4>
                  <p className="text-xs text-stone-400 font-medium mt-1">Itemized BOQ & Rate Transparency</p>
                </div>
                <div className="p-4 rounded-xl bg-stone-900 border border-stone-800">
                  <h4 className="text-2xl font-bold text-white font-mono">10 Yrs</h4>
                  <p className="text-xs text-stone-400 font-medium mt-1">Comprehensive Structural Warranty</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-stone-800 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
                  alt="Architectural Planning Studio"
                  className="w-full h-[450px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-stone-900/90 border border-stone-800 backdrop-blur-md">
                  <p className="text-xs text-stone-300 italic">
                    "A structure is only as enduring as the integrity of the people who pour its foundation."
                  </p>
                  <p className="text-[11px] text-amber-400 font-semibold mt-1">
                    — PK Developers Engineering Manifesto
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
                Build quality spaces that combine functionality, durability and modern design. We transform blueprints into durable realities through engineering precision, certified high-grade materials, and an ethical code of conduct that respects our clients’ investments.
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 sm:p-10 rounded-2xl bg-stone-900 border border-stone-800 relative overflow-hidden group hover:border-amber-500/40 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-white mb-3">Our Vision</h3>
              <p className="text-base text-stone-300 leading-relaxed">
                Become a trusted construction and development brand known for quality and professionalism across every sector we touch. We aim to set the benchmark in South India for sustainable building, zero-defect execution, and lifelong customer trust.
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

      {/* OUR TEAM (PLACEHOLDERS AS REQUESTED) */}
      <section className="py-24 bg-stone-900/40 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
              Leadership & Engineering
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our Core Team
            </h2>
            <p className="mt-3 text-sm text-stone-400">
              Experienced professionals driving structural design, project management, and site supervision.
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

      {/* QUALITY COMMITMENT */}
      <section className="py-24 bg-stone-950 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                Uncompromising Standards
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Our Absolute Commitment to Quality
              </h2>
              <p className="text-base text-stone-300 leading-relaxed">
                Quality is not an afterthought at PK Developers; it is engineered into our processes. Every project is subjected to rigorous multi-tiered quality control protocols at every milestone.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-stone-900 border border-stone-800 text-amber-400 shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Certified Materials Only</h4>
                    <p className="text-xs text-stone-400 mt-1">
                      Batch testing of Fe 550D TMT rebar, 53-grade OPC cement, and ready-mix concrete with slump and cube compressive records.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-stone-900 border border-stone-800 text-amber-400 shrink-0">
                    <HardHat className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Full-Time Site Engineers</h4>
                    <p className="text-xs text-stone-400 mt-1">
                      Dedicated civil engineers on site every single hour to supervise casting, shuttering, MEP conduit routing, and worker safety.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-stone-900 border border-stone-800 text-amber-400 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">250+ Point Pre-Delivery Audit</h4>
                    <p className="text-xs text-stone-400 mt-1">
                      Exhaustive snag list rectification covering acoustic seals, thermal imaging, plumbing pressure drop tests, and marble leveling.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden border border-stone-800 h-64">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80"
                  alt="Material Batch Testing"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden border border-stone-800 h-64 translate-y-6">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=800&q=80"
                  alt="Site Quality Supervision"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Work With PK Developers"
        subtitle="Partner with a construction and development team that values your vision, your investment, and the durability of the spaces you inhabit."
        primaryButtonText="Work With PK Developers"
        primaryButtonLink="/get-a-quote"
        secondaryButtonText="Explore Our Work"
        secondaryButtonLink="/projects"
      />
    </>
  );
};

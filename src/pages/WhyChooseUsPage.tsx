import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Users, 
  Eye, 
  Compass, 
  ClipboardCheck, 
  Box, 
  HardHat, 
  HeartHandshake, 
  ArrowRight, 
  CheckCircle2, 
  Award,
  Clock
} from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { CTASection } from '../components/common/CTASection';

export const WhyChooseUsPage: React.FC = () => {
  const differentiators = [
    {
      title: 'Quality Construction',
      description: 'Zero tolerance for substandard workmanship. We enforce seismic design codes, calibrated concrete mix formulations, and certified welding across every square foot.',
      icon: ShieldCheck
    },
    {
      title: 'Experienced Professionals',
      description: 'Over 20 years of collective leadership in South Indian civil engineering, high-rise structural mechanics, and modern architectural design.',
      icon: Users
    },
    {
      title: 'Transparent Communication',
      description: 'No hidden escalation clauses or vague invoices. We provide locked itemized BOQs, shared procurement invoices, and daily photo logs.',
      icon: Eye
    },
    {
      title: 'Modern Architecture & Design',
      description: 'Harmonizing bioclimatic thermal performance with breathtaking volumetric cantilevers, double-height atriums, and natural stone textures.',
      icon: Compass
    },
    {
      title: 'Structured Project Management',
      description: 'Critical Path Method (CPM) baseline scheduling and automated milestone tracking to guarantee on-time completion without compromising safety.',
      icon: ClipboardCheck
    },
    {
      title: 'Certified Quality Materials',
      description: 'Primary-grade steel (Tata Tiscon / JSW Fe 550D), 53-grade OPC cement, and European fenestration systems verified through independent laboratory tests.',
      icon: Box
    },
    {
      title: 'Dedicated Site Supervision',
      description: 'Full-time licensed civil engineers stationed on site to supervise every cubic meter of concrete casting, shuttering stability, and worker safety.',
      icon: HardHat
    },
    {
      title: 'Lifetime Customer Support',
      description: 'Our relationship does not end at handover. We provide 1 year of complimentary maintenance inspections and a 10-year structural warranty.',
      icon: HeartHandshake
    }
  ];

  return (
    <>
      <SEOHead
        title="Why Choose PK Developers | Trust, Precision & Quality Guaranteed"
        description="Discover why leading homeowners, corporate enterprises, and institutions trust PK Developers as their primary civil construction and development partner."
        canonicalPath="/why-choose-us"
      />

      {/* HERO */}
      <section className="relative py-28 bg-stone-950 overflow-hidden border-b border-stone-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=2000&q=80"
            alt="PK Developers Quality Construction"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950/90" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-6">
            The PK Advantage
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Why Choose PK Developers
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
            Constructing a home or corporate facility is a monumental investment. Here is how we engineer confidence into every stage of your build.
          </p>
        </div>
      </section>

      {/* 8 DIFFERENTIATORS GRID */}
      <section className="py-24 bg-stone-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((diff, idx) => {
              const IconComp = diff.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-stone-900 border border-stone-800 hover:border-amber-500/40 transition-all hover:bg-stone-900/90 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center mb-6">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{diff.title}</h3>
                    <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">{diff.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LARGE VISUAL SECTION: "FROM FIRST CONVERSATION TO FINAL HANDOVER" */}
      <section className="py-24 bg-stone-900/50 border-t border-stone-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-stone-900 to-stone-950 border border-amber-500/30 relative overflow-hidden shadow-2xl">
            {/* Background decorative glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-3xl relative z-10 space-y-6">
              <span className="px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider inline-block">
                Our Signature Promise
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                “From First Conversation to Final Handover.”
              </h2>
              <p className="text-base sm:text-lg text-stone-300 leading-relaxed">
                When you partner with PK Developers, you gain more than a contractor; you gain a team of structural stewards who treat your project with the dedication, precision, and financial integrity it deserves. We stand behind every beam, every joint, and every cubic meter of concrete.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-800">
                  <h4 className="text-xl font-bold text-amber-400 font-mono">10 Years</h4>
                  <p className="text-xs text-stone-400 mt-1 font-medium">Structural Integrity Warranty</p>
                </div>
                <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-800">
                  <h4 className="text-xl font-bold text-white font-mono">Zero</h4>
                  <p className="text-xs text-stone-400 mt-1 font-medium">Unexpected Cost Escalations</p>
                </div>
                <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-800">
                  <h4 className="text-xl font-bold text-emerald-400 font-mono">250+ Points</h4>
                  <p className="text-xs text-stone-400 mt-1 font-medium">Snag Free Pre-Handover Audit</p>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  to="/get-a-quote"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm shadow-xl"
                >
                  <span>Start Your Journey With Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Experience The PK Developers Difference"
        subtitle="Let’s discuss your construction timeline, land survey, and budget requirements with our senior engineering directors."
        primaryButtonText="Request Project Consultation"
        primaryButtonLink="/get-a-quote"
        secondaryButtonText="Explore Projects"
        secondaryButtonLink="/projects"
      />
    </>
  );
};

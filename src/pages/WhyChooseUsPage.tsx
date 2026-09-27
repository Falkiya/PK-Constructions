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
      title: '100% Clear Title Guarantee',
      description: 'Zero litigation risk. Every property in our inventory undergoes a rigorous 30-year title search, Encumbrance Certificate (EC) scrutiny, and vetting by senior High Court advocates.',
      icon: ShieldCheck
    },
    {
      title: 'Curated Prime Inventory',
      description: 'We do not flood you with unverified listings. We curate only premium residential villas, A-grade commercial spaces, and high-appreciation layout plots in Bengaluru’s growth corridors.',
      icon: Award
    },
    {
      title: 'Direct Negotiation & Transparent Pricing',
      description: 'No inflated brokerage fees, phantom middle-agents, or hidden deal costs. We ensure direct owner/developer negotiations and market-aligned valuations.',
      icon: Eye
    },
    {
      title: 'Complete Legal & Documentation Support',
      description: 'From drafting standard Sale Agreements to stamp duty verification, Khata transfers, and registration representation at the sub-registrar office, we handle everything.',
      icon: ClipboardCheck
    },
    {
      title: 'RERA & Master Plan Compliance',
      description: 'Strict adherence to RERA guidelines, BDA/BMRDA approvals, and master plan zoning norms, ensuring your capital is shielded from municipal violations.',
      icon: Compass
    },
    {
      title: 'High-Yield Investment Advisory',
      description: 'Leverage our proprietary micro-market analysis, infrastructure pipeline data (Metro, Peripheral Ring Road), and projected rental yields to maximize ROI.',
      icon: Users
    },
    {
      title: 'Turnkey Development Capabilities',
      description: 'Buying an approved plot? Our in-house master builder team can seamlessly design, permit, and construct your bespoke luxury villa on the land you acquire.',
      icon: HardHat
    },
    {
      title: 'End-to-End Asset Stewardship',
      description: 'Our relationship does not end at registration. We assist with Khata transfer, property tax documentation, tenant sourcing, and resale advisory for life.',
      icon: HeartHandshake
    }
  ];

  return (
    <>
      <SEOHead
        title="Why Choose PK Developers | Verified Real Estate & Clear Title Assurance"
        description="Discover why discerning homebuyers, commercial tenants, and high-net-worth investors choose PK Developers as their trusted real estate dealers and property consultants."
        canonicalPath="/why-choose-us"
      />

      {/* HERO */}
      <section className="relative py-28 bg-stone-950 overflow-hidden border-b border-stone-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=2000&q=80"
            alt="PK Developers Quality Real Estate"
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
            Acquiring real estate or selling high-value property requires absolute legal certainty, accurate market valuation, and ethical representation. Here is why clients rely on PK Developers.
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

      {/* LARGE VISUAL SECTION: "100% CLEAR TITLES. ZERO COMPROMISES" */}
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
                “100% Clear Titles. Zero Compromises.”
              </h2>
              <p className="text-base sm:text-lg text-stone-300 leading-relaxed">
                When you partner with PK Developers, you gain more than a property broker; you gain an institutional real estate advisor committed to protecting your capital. We examine every survey number, verify every parent deed, and ensure every transaction is completely secure.
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-800">
                  <h4 className="text-xl font-bold text-amber-400 font-mono">100%</h4>
                  <p className="text-xs text-stone-400 mt-1 font-medium">Clear Title Guarantee</p>
                </div>
                <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-800">
                  <h4 className="text-xl font-bold text-white font-mono">30-Year</h4>
                  <p className="text-xs text-stone-400 mt-1 font-medium">Title & EC Verification</p>
                </div>
                <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-800">
                  <h4 className="text-xl font-bold text-emerald-400 font-mono">Direct</h4>
                  <p className="text-xs text-stone-400 mt-1 font-medium">Verified Owner Deals</p>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  to="/get-a-quote"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm shadow-xl"
                >
                  <span>Connect With a Property Advisor</span>
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
        subtitle="Let’s discuss your property acquisition, plot investment, or commercial requirement with our senior real estate consultants."
        primaryButtonText="Inquire About Properties"
        primaryButtonLink="/get-a-quote"
        secondaryButtonText="Explore Inventory"
        secondaryButtonLink="/projects"
      />
    </>
  );
};

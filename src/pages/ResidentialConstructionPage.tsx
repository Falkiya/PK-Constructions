import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Home, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Sparkles, 
  Clock, 
  HelpCircle, 
  ChevronDown, 
  Award,
  Maximize2
} from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { CTASection } from '../components/common/CTASection';
import { projectsData } from '../data/projectsData';
import { ProjectCard } from '../components/common/ProjectCard';

export const ResidentialConstructionPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const residentialProjects = projectsData.filter((p) => p.category === 'residential' || p.category === 'villas').slice(0, 2);

  const projectTypes = [
    {
      title: 'Independent Houses & Bungalows',
      description: 'Individual private residences crafted with bespoke layouts, private lawns, and multi-generational flexibility.',
      features: ['Custom elevation styling', 'Private compound walls & gates', 'Optimal Vastu orientations']
    },
    {
      title: 'Luxury Architectural Villas',
      description: 'Ultra-luxury modern estates featuring cantilevered concrete geometries, reflection pools, and double-height atriums.',
      features: ['Infinity plunge pools', 'Floor-to-ceiling acoustic glazing', 'Italian marble & travertine finishes']
    },
    {
      title: 'Multi-Unit Residential Buildings',
      description: 'Boutique duplexes, floor-per-unit condominiums, and row houses engineered for modern community living.',
      features: ['Dedicated basement parking', 'Acoustic slab isolation', 'Integrated elevator shafts']
    },
    {
      title: 'Premium Apartments',
      description: 'High-quality multi-storey residential complexes engineered with durable RCC frameworks and lifestyle amenities.',
      features: ['Earthquake-resilient frames', 'Centralized water filtration', 'EV charging infrastructure']
    },
    {
      title: 'Custom Luxury Homes',
      description: 'Bespoke custom homes built in golf estates and hill retreats, blending contextual landscapes with luxury finishes.',
      features: ['Climate-responsive facades', 'Smart home automation', 'Zero-defect turnkey delivery']
    }
  ];

  const faqs = [
    {
      q: 'How long does it typically take to build an independent residential villa?',
      a: 'A typical 4,000 to 8,000 sq.ft luxury villa takes approximately 10 to 14 months from municipal sanction to final handover. This includes deep foundation earthwork, post-tensioned RCC superstructure, MEP rough-ins, glazing, imported stone finishes, and comprehensive snag list rectification.'
    },
    {
      q: 'Do you handle the municipal plan sanctions and building permits?',
      a: 'Yes. PK Developers offers complete turnkey sanction support. Our architectural and liaison team manages soil testing, structural stability certificates, BBMP/BDA plan sanctions, and final Occupancy Certificate (OC) procurement.'
    },
    {
      q: 'Can we bring our own independent architect, or do you require in-house design?',
      a: 'We gladly accommodate both models. You can utilize our in-house architectural studio for complete turnkey design-build, or hire PK Developers as your civil contractor working in tight synchronization with your independent architectural consultant.'
    },
    {
      q: 'How do you guarantee material quality and prevent budget inflation?',
      a: 'We provide an itemized Bill of Quantities (BOQ) with locked-in material brand grades (e.g. Tata Tiscon Fe 550D TMT, Ultratech 53-grade cement, Saint-Gobain Low-E glass). Every batch undergoes on-site slump and cube tests with digital reports shared with you.'
    }
  ];

  return (
    <>
      <SEOHead
        title="Residential Property Dealing & Acquisition | Luxury Villas | PK Developers"
        description="Acquire verified luxury residential properties, independent villas, and penthouses in Bengaluru with PK Developers. 100% clear titles and expert real estate advisory."
        canonicalPath="/services/residential-construction"
      />

      {/* HERO */}
      <section className="relative py-28 bg-slate-900 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
            alt="Residential Luxury Villas"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/90" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
            Residential Property Dealing & Sales
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Residential Property Dealing
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Curating verified architectural residences, luxury independent villas, and prime apartments with 100% clear titles and transparent market valuation.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/get-a-quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-xl shadow-blue-500/25 transition-all"
            >
              <span>Inquire Residential Properties</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/projects/residential"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-medium text-base transition-all"
            >
              <span>Browse Residential Inventory</span>
            </Link>
          </div>
        </div>
      </section>

      {/* OVERVIEW & APPROACH */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider">
                Our Acquisition Approach
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Homes Verified For Generational Peace of Mind
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Acquiring a luxury residence is one of life’s most profound milestones. At PK Developers, we treat every transaction with institutional due diligence. Our advisory model integrates 30-year title searches, RERA compliance checks, encumbrance verification, and fair-market valuation.
              </p>
              <p className="text-base text-slate-500 leading-relaxed">
                Whether purchasing a cantilevered modernist sanctuary in Whitefield, an exclusive manor in Sadashivanagar, or a gated golf estate, our team manages the entire transaction lifecycle—from title deed vetting to registrar office execution.
              </p>

              <div className="pt-2 space-y-3">
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
                  <span>Seismic Zone compliant RCC frame with certified Fe 550D primary steel</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                  <span>Subterranean crystalline waterproofing with a 10-year anti-seepage guarantee</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                  <span>Acoustic floor underlayments and German thermal-break fenestrations</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern Luxury Residence by PK Developers"
                  className="w-full h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 border border-slate-200 backdrop-blur-md shadow-lg">
                  <span className="text-xs text-blue-600 font-semibold uppercase tracking-wider block">Featured Execution</span>
                  <span className="text-base font-bold text-slate-900">The Grand Courtyard Manor — 14,500 sq.ft</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TYPES OF RESIDENTIAL PROJECTS */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-3">
              Project Typologies
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Types of Residential Projects We Execute
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Tailored civil engineering and interior craftsmanship for every home typology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectTypes.map((type, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 font-bold font-mono">
                    0{idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{type.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{type.description}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2">
                  {type.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MATERIALS & QUALITY STANDARDS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Structural Steel</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Tata Tiscon / JSW Neosteel Fe 550D corrosion-resistant TMT rebar with batch mill certificates.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Certified Cement</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Ultratech / ACC 53-grade OPC cement for high compressive structural strength.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Crystalline Waterproofing</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Fosroc / BASF integral crystalline systems tested via 72-hour ponding tests.
                  </p>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Thermal Glazing</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Schüco / Reynaers aluminum systems with double-silver Low-E acoustic glass.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider">
                Materials & Engineering
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Zero Compromise on Material Specification
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                A home is as durable as the raw materials used in its core. At PK Developers, we strictly ban non-certified steel, substandard river sand alternatives, and unbranded electrical wiring.
              </p>
              <p className="text-base text-slate-500 leading-relaxed">
                Every batch of ready-mix concrete delivered to your site is tested on-site for slump and cast into test cubes for 7-day and 28-day compressive crushing strength verification at government-approved laboratories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT TIMELINE */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900">Residential Construction Milestone Timeline</h2>
            <p className="text-sm text-slate-600 mt-2">Predictable milestones tracked through digital Gantt charts.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <span className="text-xs font-mono text-blue-600 font-bold block mb-1">Phase 1 (Months 1-2)</span>
              <h4 className="text-base font-bold text-slate-900 mb-2">Soil, Sanctions & Raft</h4>
              <p className="text-xs text-slate-600 leading-relaxed">Geotechnical bore testing, municipal approvals, basement excavation, and waterproofed foundation raft casting.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <span className="text-xs font-mono text-blue-600 font-bold block mb-1">Phase 2 (Months 3-6)</span>
              <h4 className="text-base font-bold text-slate-900 mb-2">RCC Superstructure</h4>
              <p className="text-xs text-slate-600 leading-relaxed">Casting columns, post-tensioned floor slabs, cantilevers, and staircase frameworks with curing logs.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <span className="text-xs font-mono text-blue-600 font-bold block mb-1">Phase 3 (Months 7-10)</span>
              <h4 className="text-base font-bold text-slate-900 mb-2">Masonry, Plaster & MEP</h4>
              <p className="text-xs text-slate-600 leading-relaxed">Solid block masonry, thermal wall insulation, concealed plumbing and electrical conduit piping, acoustic windows.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <span className="text-xs font-mono text-blue-600 font-bold block mb-1">Phase 4 (Months 11-13)</span>
              <h4 className="text-base font-bold text-slate-900 mb-2">Finishes, Snagging & OC</h4>
              <p className="text-xs text-slate-600 leading-relaxed">Italian marble laying, custom carpentry, painting, 250-point quality audit, and handover of keys and warranty dossier.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED RESIDENTIAL WORK */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900">Featured Residential Projects</h2>
              <p className="text-sm text-slate-600 mt-1">Explore real homes built by PK Developers.</p>
            </div>
            <Link to="/projects/residential" className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
              <span>View All Residential</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {residentialProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">Frequently Asked Questions</h2>
            <p className="text-sm text-slate-600 mt-2">Everything you need to know before initiating a home construction project.</p>
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
        title="Ready to Build Your Bespoke Residence?"
        subtitle="Schedule an on-site consultation with our senior civil engineers. We provide an initial plot evaluation, zoning breakdown, and cost roadmap."
        primaryButtonText="Discuss Your Home Project"
        primaryButtonLink="/get-a-quote"
        secondaryButtonText="Explore Residential Projects"
        secondaryButtonLink="/projects/residential"
      />
    </>
  );
};

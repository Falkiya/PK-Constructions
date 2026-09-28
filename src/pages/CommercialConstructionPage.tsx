import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  TrendingUp, 
  Users, 
  Layers, 
  ChevronDown,
  Award
} from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { CTASection } from '../components/common/CTASection';
import { projectsData } from '../data/projectsData';
import { ProjectCard } from '../components/common/ProjectCard';

export const CommercialConstructionPage: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const commercialProjects = projectsData.filter((p) => p.category === 'commercial').slice(0, 2);

  const capabilities = [
    {
      title: 'Corporate Headquarters & IT Parks',
      description: 'Grade-A tech campuses, collaborative open-floor office complexes, and multi-tenant corporate towers with high floor-plate efficiencies.',
      metrics: 'Up to 350,000 sq.ft'
    },
    {
      title: 'Commercial High-Rise Towers',
      description: 'Multi-storey urban high-rises engineered with slip-form cores, composite structural steel frameworks, and unitized curtain wall glazing.',
      metrics: '15+ Floors'
    },
    {
      title: 'Retail Spaces & Shopping Centers',
      description: 'High-footfall lifestyle retail plazas, anchor tenant showrooms, experiential malls, and dynamic double-height retail promenades.',
      metrics: 'Flexible Retail Demising'
    },
    {
      title: 'Business Centres & Incubators',
      description: 'Modern executive flex-offices, co-working facilities, and incubation hubs engineered with high acoustic isolation and plug-and-play BMS.',
      metrics: 'Fast-Track Turnaround'
    },
    {
      title: 'Mixed-Use Developments',
      description: 'Integrated podium structures blending ground-floor retail and culinary spaces with upper-level corporate suites and executive hospitality.',
      metrics: 'Integrated Complex Infrastructure'
    }
  ];

  const faqs = [
    {
      q: 'Can PK Developers support green building certifications like LEED or IGBC?',
      a: 'Yes. Our civil engineering and MEP teams have proven experience delivering projects certified up to IGBC Platinum and LEED Gold. We integrate daylight harvesting, solar PV canopies, rainwater harvesting systems, and VRF HVAC systems that reduce lifetime operating energy costs by up to 32%.'
    },
    {
      q: 'How do you adhere to fast-track commercial project deadlines?',
      a: 'We deploy 4D BIM digital modeling for pre-construction clash detection, composite steel-concrete floor plates, and prefabricated precast elements. By overlapping substructure work with off-site steel fabrication, we consistently save 6 to 10 weeks compared to traditional RC methods.'
    },
    {
      q: 'What site safety and compliance standards does PK Developers follow?',
      a: 'We adhere strictly to OSHA and National Building Code (NBC 2016) regulations. Every commercial site operates under full-time Safety Officers with mandatory morning toolbox talks, PPE enforcement, perimeter netting, and zero-accident audits.'
    },
    {
      q: 'Do you manage structural design as well as MEP and fire suppression systems?',
      a: 'Yes. We offer complete turnkey Civil, Structural & MEP (Mechanical, Electrical, Plumbing, Fire Fighting & BMS) coordination, providing comprehensive single-point accountability.'
    }
  ];

  return (
    <>
      <SEOHead
        title="Commercial Construction Company | Corporate Office Towers & Retail | PK Developers"
        description="PK Developers delivers high-performance commercial construction: Grade-A office towers, IT parks, retail centres, and mixed-use commercial developments."
        canonicalPath="/services/commercial-construction"
      />

      {/* HERO */}
      <section className="relative py-28 bg-slate-900 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
            alt="Commercial Office Tower Construction"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/90" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
            Commercial & Corporate Division
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Commercial Construction
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Delivering high-efficiency office complexes, technology hubs, and retail destinations engineered for enterprise performance and longevity.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/get-a-quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-xl shadow-blue-500/25 transition-all"
            >
              <span>Discuss Commercial Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/projects/commercial"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-medium text-base transition-all"
            >
              <span>View Commercial Portfolio</span>
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICE OVERVIEW */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider">
                Built For Business
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Enterprise Infrastructure Executed With Precision
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Commercial real estate demands strict adherence to ROI, structural flexibility, accelerated construction schedules, and tenant safety. At PK Developers, we understand that every month of project acceleration translates to earlier commercial capitalization.
              </p>
              <p className="text-base text-slate-500 leading-relaxed">
                Our commercial contracting services encompass deep multi-level basement excavation, heavy structural steel fabrication, high-volume concrete pours, unitized glass envelope installation, and sophisticated building management system (BMS) integration.
              </p>

              <div className="pt-2 grid grid-cols-2 gap-4 text-xs text-slate-600">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-blue-600 font-bold block text-sm mb-1">Fast-Track Erection</span>
                  Composite precast & structural steel methods shaving 20% off build time.
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-blue-600 font-bold block text-sm mb-1">89% Space Efficiency</span>
                  Core-optimized floor layouts maximizing usable carpet area per level.
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                  alt="Commercial Office Tower by PK Developers"
                  className="w-full h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 border border-slate-200 backdrop-blur-md shadow-lg">
                  <span className="text-xs text-blue-600 font-semibold uppercase tracking-wider block">Featured High-Rise</span>
                  <span className="text-base font-bold text-slate-900">Vertex Corporate Tech Hub — 185,000 sq.ft</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMERCIAL CAPABILITIES */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-3">
              Sector Expertise
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Commercial Project Capabilities
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              From corporate tech campuses to retail lifestyle gallerias, we build commercial spaces that perform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold font-mono">
                      0{idx + 1}
                    </div>
                    <span className="text-[11px] font-mono text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200 font-medium">
                      {cap.metrics}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{cap.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{cap.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANNING, EXECUTION & QUALITY CONTROL */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">4D BIM Planning & Clash Detection</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Before the first shovel breaks ground, our digital twin engineers simulate structural, HVAC ducting, plumbing lines, and electrical conduits to eliminate expensive on-site rework.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Multi-Tier Quality Control (QA/QC)</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Strict adherence to ASTM and IS codes with 100% radiographic weld testing, ultrasonic concrete flaw detection, and building envelope water-tightness chamber testing.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Critical Path Project Management</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Dedicated CPM scheduling and automated daily drone progress tracking ensure all stakeholders have 24/7 visibility into milestones, procurement cycles, and cash flow forecasts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED COMMERCIAL PROJECTS */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900">Featured Commercial Works</h2>
              <p className="text-sm text-slate-600 mt-1">Grade-A facilities and urban landmarks constructed by PK Developers.</p>
            </div>
            <Link to="/projects/commercial" className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
              <span>View All Commercial</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commercialProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">Commercial Construction FAQs</h2>
            <p className="text-sm text-slate-600 mt-2">Answers regarding contracts, timelines, certifications, and compliance.</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-slate-50 border border-slate-200 shadow-sm overflow-hidden"
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
                  <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-4">
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
        title="Scale Your Commercial Footprint With PK Developers"
        subtitle="Consult with our corporate project directors to evaluate project feasibility, fast-track engineering roadmaps, and commercial tendering."
        primaryButtonText="Submit Commercial RFP"
        primaryButtonLink="/get-a-quote"
        secondaryButtonText="Explore Commercial Portfolio"
        secondaryButtonLink="/projects/commercial"
      />
    </>
  );
};

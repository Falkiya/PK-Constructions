import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  Layers, 
  Eye, 
  FileText, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles,
  Maximize2,
  Box
} from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { CTASection } from '../components/common/CTASection';

export const ArchitecturePlanningPage: React.FC = () => {
  const architecturalPillars = [
    {
      title: 'Concept Development & Massing',
      description: 'Analyzing topography, solar trajectories, wind paths, and context to craft visionary massing studies and design philosophies.',
      icon: Compass
    },
    {
      title: 'Detailed Floor Planning & Ergonomics',
      description: 'Spatial zoning balancing circulation efficiency, natural cross-ventilation, functional utility, and Vastu principles.',
      icon: Maximize2
    },
    {
      title: 'Photorealistic 3D Visualization & VR',
      description: 'Cinema-grade exterior renders, interior lighting simulations, and immersive 3D virtual reality walkthroughs for informed client decisions.',
      icon: Eye
    },
    {
      title: 'Material Palette & Specifications',
      description: 'Curating natural stones, fair-faced concrete mixes, imported acoustic glass, and durable timber finishes matched to climate demands.',
      icon: Box
    },
    {
      title: 'Integrated Engineering Coordination',
      description: 'Harmonizing architectural geometry with structural beam spans, mechanical ducting, electrical risers, and drainage paths.',
      icon: Layers
    },
    {
      title: 'Municipal Sanctions & Permit Support',
      description: 'Comprehensive liaison handling for municipal drawings, FAR calculations, environmental clearances, and fire department approvals.',
      icon: FileText
    }
  ];

  return (
    <>
      <SEOHead
        title="Architecture & Planning Services | 3D Visualization & Blueprints | PK Developers"
        description="Comprehensive architectural planning, photorealistic 3D visualization, BIM modeling, and municipal sanction support by PK Developers."
        canonicalPath="/services/architecture-planning"
      />

      {/* HERO */}
      <section className="relative py-28 bg-slate-900 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=80"
            alt="Architectural Planning and Blueprints"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/90" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
            Design & Studio Division
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Architecture & Planning
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Fusing visionary spatial design with civil engineering feasibility. From first sketch and 3D simulation to working construction blueprints.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/get-a-quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-xl shadow-blue-500/25 transition-all"
            >
              <span>Commission Architectural Design</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-medium text-base transition-all"
            >
              <span>Explore Built Work</span>
            </Link>
          </div>
        </div>
      </section>

      {/* VISUAL BLUEPRINTS & 3D RENDERING SHOWCASE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider">
                Precision Design
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Where Architectural Vision Meets Construction Rigor
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Many architectural designs look stunning on paper but become cost nightmares when subjected to actual structural realities. At PK Developers, our architects work shoulder-to-shoulder with our senior civil and structural engineers from Day 1.
              </p>
              <p className="text-base text-slate-500 leading-relaxed">
                Every line drawn in our studio is calibrated against structural loads, thermal efficiency, material supply chains, and municipal setback rules. We deliver complete Good-for-Construction (GFC) sets that eliminate contractor ambiguity on the job site.
              </p>

              <div className="pt-2 space-y-3 text-sm text-slate-700">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Sub-millimeter 3D BIM spatial coordination</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Passive solar heat gain reduction & bioclimatic shading</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Full statutory compliance with local municipal building bye-laws</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl relative">
                <img
                  src="https://images.unsplash.com/photo-160058515526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
                  alt="3D Architectural Visualization"
                  className="w-full h-72 sm:h-80 object-cover"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-white/95 backdrop-blur-md text-blue-600 border border-slate-200 text-xs font-semibold shadow-sm">
                  Photorealistic CGI Render
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl overflow-hidden border border-slate-200 h-44 relative shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80"
                    alt="Architectural Working Blueprint"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-slate-900/80 text-[10px] text-white">
                    GFC Blueprints
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden border border-slate-200 h-44 relative shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80"
                    alt="Interior Spatial Planning"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 px-2 py-0.5 rounded bg-slate-900/80 text-[10px] text-white">
                    Interior Moodboard
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 ARCHITECTURAL PILLARS */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Architectural Scope of Services
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              A comprehensive studio workflow from initial ideation to municipal certification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {architecturalPillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{pillar.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DELIVERABLES LIST */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
            Standard Studio Deliverables Package
          </h2>
          <p className="text-sm text-slate-600 mb-10">
            What every PK Developers architectural engagement provides to the client and construction team:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Full GFC Architectural Drawing Dossier</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Structural Framing & Steel Schedules</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>4K High-Res Exterior & Interior Renders</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>MEP Electrical & Plumbing Coordination</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Doors, Windows & Fenestration Schedules</span>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 flex items-center gap-3">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
              <span>Statutory Municipal Sanction Submission Sets</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Bring Your Architectural Vision to Life"
        subtitle="Schedule an exploratory design session with our principal architects. We review your plot parameters, design aspirations, and budget guidelines."
        primaryButtonText="Book Architectural Session"
        primaryButtonLink="/get-a-quote"
        secondaryButtonText="Explore Projects"
        secondaryButtonLink="/projects"
      />
    </>
  );
};

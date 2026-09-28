import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ClipboardCheck, 
  Calendar, 
  Users, 
  Box, 
  ShieldCheck, 
  TrendingUp, 
  Eye, 
  CheckSquare, 
  ArrowRight, 
  Clock, 
  CheckCircle2, 
  Layers
} from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { CTASection } from '../components/common/CTASection';

export const ProjectManagementPage: React.FC = () => {
  const [activeTimelineStep, setActiveTimelineStep] = useState(0);

  const managementPillars = [
    {
      title: 'Master CPM Scheduling',
      description: 'Critical Path Method (CPM) baseline scheduling with resource levelling. Every activity has a defined start, finish, and float calculation.',
      icon: Calendar
    },
    {
      title: 'Contractor & Vendor Oversight',
      description: 'Vetting, hiring, and directing specialized trade subcontractors under strict SLA performance bonds and quality metrics.',
      icon: Users
    },
    {
      title: 'Material Testing & Procurement',
      description: 'Multi-stage quality audits: pre-dispatch factory inspections, site receipt slump checks, batch mill certificates, and safe warehousing.',
      icon: Box
    },
    {
      title: 'Multi-Tier Quality Audits (QA/QC)',
      description: 'Continuous checkpoint testing: concrete cube compressive crushes, rebar cover block placement, waterproofing flood checks, and pipe pressure tests.',
      icon: ShieldCheck
    },
    {
      title: 'Budget & Cost Variance Tracking',
      description: 'Real-time earned value management (EVM), tracking committed costs against the approved Bill of Quantities (BOQ) with zero hidden creep.',
      icon: TrendingUp
    },
    {
      title: 'Full-Time On-Site Supervision',
      description: 'Stationed site civil engineers ensuring work strictly adheres to Good-for-Construction (GFC) drawings and OSHA safety codes.',
      icon: Eye
    },
    {
      title: 'Digital Progress Reporting',
      description: 'Weekly automated photo and drone progress reports, milestone dashboards, and transparent delay mitigation logs.',
      icon: ClipboardCheck
    },
    {
      title: 'Final 250-Point Snag Inspection',
      description: 'Exhaustive pre-handover snag audits covering acoustic isolation, plumbness, electrical phase balancing, and mechanical certifications.',
      icon: CheckSquare
    }
  ];

  const interactiveTimeline = [
    {
      stage: 'Phase 01: Pre-Construction & Baselines',
      timeframe: 'Weeks 1 - 4',
      focus: 'Scope, Risk Register & Procurement Master Plan',
      details: 'We establish the baseline CPM schedule, lock down the Bill of Quantities (BOQ), finalize sub-trade contracts, and register the safety protocol.',
      kpis: ['100% Locked BOQ', 'Approved Procurement Schedule', 'Site Safety Plan Sign-off']
    },
    {
      stage: 'Phase 02: Substructure & Heavy Civil',
      timeframe: 'Months 2 - 5',
      focus: 'Excavation, Shoring & Waterproofed Raft',
      details: 'Continuous monitoring of soil stability, water table dewatering, concrete batching quality, and diaphragm wall shoring.',
      kpis: ['Zero Soil Settlement', 'Slump & Cube Test Verification', '72-Hour Crystalline Ponding Signoff']
    },
    {
      stage: 'Phase 03: Superstructure Erection',
      timeframe: 'Months 6 - 9',
      focus: 'Columns, Slabs & Post-Tensioning',
      details: 'Supervising formwork tolerances, rebar tying spacing, post-tensioned tendon stressing, and curing duration logs.',
      kpis: ['Laser-Level Slab Flatness', '28-Day Concrete Compressive Strength', 'Weekly Drone Progress Video']
    },
    {
      stage: 'Phase 04: Envelope, MEP & Rough-ins',
      timeframe: 'Months 10 - 12',
      focus: 'Curtain Wall, HVAC, Plumbing & Power',
      details: 'Coordinating high-density MEP runs to ensure zero spatial clashes. Pressure testing potable and drainage piping under 10-bar test pressure.',
      kpis: ['Zero Pipe Leakage at 10 Bar', 'BIM Clash Free Verification', 'Facade Air/Water Tightness Pass']
    },
    {
      stage: 'Phase 05: Finishing, Snagging & Handover',
      timeframe: 'Months 13 - 14',
      focus: '250-Point Quality Snag Audit & Delivery',
      details: 'Rectifying all aesthetic and functional snags prior to client walkthrough. Handing over As-Built drawings, warranties, and Occupancy Certificate.',
      kpis: ['100% Snag Closure', 'Statutory Occupancy Certificate (OC)', '10-Year Structural Warranty Dossier']
    }
  ];

  return (
    <>
      <SEOHead
        title="Project Management Consultancy (PMC) | PK Developers"
        description="Disciplined construction project management, CPM scheduling, contractor supervision, budget control, and 250-point quality inspections by PK Developers."
        canonicalPath="/services/project-management"
      />

      {/* HERO */}
      <section className="relative py-28 bg-slate-900 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=2000&q=80"
            alt="Project Management and Site Supervision"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/90" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
            Project Management Consultancy (PMC)
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Disciplined Project Management
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Eliminating construction delays, budget overruns, and quality compromises through structured site supervision and engineering oversight.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/get-a-quote"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-base shadow-xl shadow-blue-500/25 transition-all"
            >
              <span>Inquire About PMC Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/process"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-medium text-base transition-all"
            >
              <span>Explore 9-Step Process</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 8 CORE MANAGEMENT PILLARS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-3">
              Total Site Control
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              How PK Developers Manages Your Construction
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Eight institutional safeguards that protect your capital, your timeline, and your architectural legacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {managementPillars.map((p, idx) => {
              const IconComponent = p.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">{p.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{p.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* INTERACTIVE PROJECT-MANAGEMENT TIMELINE */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-3">
              Interactive Roadmap
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Interactive Project Management Timeline
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Click on any phase below to inspect the engineering oversight protocols, focus areas, and milestone KPIs.
            </p>
          </div>

          {/* Timeline Phase Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
            {interactiveTimeline.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveTimelineStep(idx)}
                className={`p-4 rounded-xl text-left border transition-all ${
                  activeTimelineStep === idx
                    ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/20'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                <span className={`block text-[11px] font-mono uppercase font-semibold ${activeTimelineStep === idx ? 'text-white font-bold' : 'text-blue-600'}`}>
                  Phase 0{idx + 1}
                </span>
                <span className="block text-xs font-bold mt-1 line-clamp-1">
                  {item.stage.split(':')[1] || item.stage}
                </span>
                <span className={`block text-[10px] mt-1 ${activeTimelineStep === idx ? 'text-blue-100 font-medium' : 'text-slate-500'}`}>
                  {item.timeframe}
                </span>
              </button>
            ))}
          </div>

          {/* Active Phase Card Display */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl relative overflow-hidden">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-mono font-bold">
                    {interactiveTimeline[activeTimelineStep].timeframe}
                  </span>
                  <span className="text-xs text-slate-500">
                    Focus: {interactiveTimeline[activeTimelineStep].focus}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {interactiveTimeline[activeTimelineStep].stage}
                </h3>

                <p className="text-base text-slate-600 leading-relaxed">
                  {interactiveTimeline[activeTimelineStep].details}
                </p>
              </div>

              {/* KPIs & Sign-offs */}
              <div className="lg:w-80 p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shrink-0">
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700">
                  Mandatory Milestone Checkpoints
                </h4>
                <ul className="space-y-2.5 pt-1">
                  {interactiveTimeline[activeTimelineStep].kpis.map((kpi, kIdx) => (
                    <li key={kIdx} className="flex items-center gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{kpi}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Appoint PK Developers For Your Construction Project"
        subtitle="Ensure your investment is safeguarded by licensed civil engineers with proven track records in high-value delivery."
        primaryButtonText="Request PMC Consultation"
        primaryButtonLink="/get-a-quote"
        secondaryButtonText="Explore All Projects"
        secondaryButtonLink="/projects"
      />
    </>
  );
};

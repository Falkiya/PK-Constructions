import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  MapPin, 
  Calendar, 
  Maximize2, 
  ShieldCheck, 
  ArrowRight, 
  ChevronRight, 
  Layers, 
  Sparkles, 
  Box, 
  CheckCircle2, 
  Trees, 
  Compass,
  ArrowLeft,
  Clock,
  ExternalLink,
  Eye
} from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Lightbox } from '../components/common/Lightbox';
import { ProjectCard } from '../components/common/ProjectCard';
import { CTASection } from '../components/common/CTASection';
import { getProjectBySlug, getRelatedProjects } from '../data/projectsData';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  const relatedProjects = getRelatedProjects(project.slug, 3);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const getFeatureIcon = (category: string) => {
    switch (category) {
      case 'Architecture': return <Compass className="w-5 h-5" />;
      case 'Materials': return <Box className="w-5 h-5" />;
      case 'Interior': return <Sparkles className="w-5 h-5" />;
      case 'Landscaping': return <Trees className="w-5 h-5" />;
      case 'Sustainability': return <ShieldCheck className="w-5 h-5" />;
      default: return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <>
      <SEOHead
        title={`${project.name} | Case Study | PK Developers`}
        description={project.description}
        canonicalPath={`/projects/${project.slug}`}
      />

      {/* 1. HERO WITH LARGE PROJECT IMAGE */}
      <section className="relative min-h-[65vh] flex items-end overflow-hidden pb-16 pt-28">
        <div className="absolute inset-0 z-0">
          <img
            src={project.coverImage}
            alt={project.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-slate-300 mb-6">
            <Link to="/" className="hover:text-blue-400">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link to="/projects" className="hover:text-blue-400">Properties</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-blue-400 font-medium capitalize">{project.category}</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wider shadow-md">
              {project.subCategory}
            </span>
            {project.transactionType && (
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-200 border border-blue-400/40 uppercase tracking-wider">
                {project.transactionType}
              </span>
            )}
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                project.status === 'Completed'
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                  : 'bg-blue-500/20 text-blue-200 border-blue-400/30'
              }`}
            >
              {project.status}
            </span>
            {project.possession && (
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-slate-900/90 text-slate-300 border border-slate-700">
                {project.possession}
              </span>
            )}
          </div>

          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              {project.name}
            </h1>
            {project.price && (
              <div className="shrink-0 px-4 py-2 rounded-2xl bg-blue-600/30 border border-blue-400/40 backdrop-blur-md">
                <span className="text-xs uppercase text-blue-200 font-semibold block">Guide Price / Value</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">{project.price}</span>
              </div>
            )}
          </div>

          <div className="mt-4 flex flex-wrap items-center gap-6 text-sm text-slate-200">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-400" />
              {project.location}
            </span>
            <span className="flex items-center gap-2">
              <Maximize2 className="w-4 h-4 text-blue-400" />
              {project.area}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-400" />
              Completed {project.completionDate}
            </span>
            {project.reraId && (
              <span className="flex items-center gap-2 text-xs font-mono text-emerald-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                RERA: {project.reraId}
              </span>
            )}
          </div>
        </div>
      </section>

      {/* 2. PROJECT INFORMATION BAR */}
      <section className="bg-slate-900 border-y border-slate-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-left">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">Location</span>
              <span className="text-sm font-bold text-white mt-0.5 block">{project.location}</span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">Deal / Category</span>
              <span className="text-sm font-bold text-blue-400 mt-0.5 block">{project.transactionType || project.subCategory}</span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">Built-Up / Land Area</span>
              <span className="text-sm font-bold text-white mt-0.5 block">{project.area}</span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">Price / Investment</span>
              <span className="text-sm font-bold text-blue-400 font-mono mt-0.5 block">{project.price || 'Contact for Price'}</span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">Possession</span>
              <span className="text-sm font-bold text-white mt-0.5 block">{project.possession || project.status}</span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">Title Status</span>
              <span className="text-sm font-bold text-emerald-400 mt-0.5 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                100% Clear & Vetted
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3 & 4 & 5: PROJECT OVERVIEW, CHALLENGE & SOLUTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Overview Left Column */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
                  Project Overview
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                  Design Brief & Execution Scope
                </h2>
                <p className="mt-4 text-base text-slate-700 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Challenge & Solution Cards */}
              <div className="space-y-6 pt-4">
                <div className="p-6 rounded-2xl bg-red-50/50 border border-red-200">
                  <div className="flex items-center gap-2.5 text-red-600 text-xs font-bold uppercase tracking-wider mb-2">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    The Construction Challenge
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Technical Constraints</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-200">
                  <div className="flex items-center gap-2.5 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                    The PK Developers Solution
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Engineering & Execution Strategy</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Property Inquiry Sidebar */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm sticky top-28 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  {project.price && (
                    <div className="text-right">
                      <span className="text-[10px] uppercase font-bold text-slate-500 block">Offer Price</span>
                      <span className="text-2xl font-extrabold text-blue-600 font-mono">{project.price}</span>
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Interested in this Property?</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    Connect directly with our designated property consultant to receive verified title deeds, sanctioned layout blueprints, exact site coordinates, and private inspection slots.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <Link
                    to="/get-a-quote"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all"
                  >
                    <span>Inquire About This Property</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    to="/contact"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-semibold transition-all"
                  >
                    <span>Schedule Private Site Inspection</span>
                  </Link>
                </div>

                <div className="pt-4 border-t border-slate-200 text-[11px] text-slate-500 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>100% Clear Legal Title Guarantee & Direct Deal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONSTRUCTION GALLERY */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
                Visual Documentation
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                Project Gallery & On-Site Details
              </h2>
            </div>
            <span className="text-xs text-slate-500">Click any photograph to view high-resolution lightbox</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.galleryImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => openLightbox(idx)}
                className="group relative h-72 rounded-2xl overflow-hidden border border-slate-200 bg-white cursor-pointer shadow-md hover:border-blue-400 transition-all"
              >
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute top-3 right-3 p-2 rounded-lg bg-slate-900/80 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4 text-blue-400" />
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs text-white line-clamp-2 leading-snug">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PROJECT FEATURES CARDS */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
              Craftsmanship Matrix
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Engineering & Architectural Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.features.map((feat, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-all hover:shadow-md"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center">
                    {getFeatureIcon(feat.category)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                    {feat.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feat.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PROJECT TIMELINE */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900">Execution Timeline & Milestones</h2>
            <p className="text-sm text-slate-600 mt-2">Major stages achieved throughout the construction lifecycle.</p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {project.timeline.map((stage, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 font-bold font-mono flex items-center justify-center shrink-0 mt-0.5 text-xs border border-blue-200">
                    0{idx + 1}
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h4 className="text-base font-bold text-slate-900">{stage.stage}</h4>
                      <span className="text-xs font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 font-semibold">
                        {stage.duration}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{stage.description}</p>
                  </div>
                </div>

                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 shrink-0">
                  {stage.status === 'completed' ? 'Completed' : stage.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. RELATED PROJECTS */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900">Similar Properties</h2>
              <p className="text-sm text-slate-600 mt-1">Explore other landmarks in this category.</p>
            </div>
            <Link to="/projects" className="text-sm font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1">
              <span>View All Properties</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProjects.map((rel) => (
              <ProjectCard key={rel.id} project={rel} />
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA */}
      <CTASection
        title="Have a Similar Project?"
        subtitle="Bring your architectural visions to life with PK Developers. Contact our senior engineering team for a project review and feasibility estimate."
        primaryButtonText="Request a Consultation"
        primaryButtonLink="/get-a-quote"
        secondaryButtonText="Back to All Projects"
        secondaryButtonLink="/projects"
      />

      {/* Lightbox for gallery images */}
      <Lightbox
        isOpen={lightboxOpen}
        images={project.galleryImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setLightboxIndex((prev) => (prev > 0 ? prev - 1 : project.galleryImages.length - 1))}
        onNext={() => setLightboxIndex((prev) => (prev < project.galleryImages.length - 1 ? prev + 1 : 0))}
      />
    </>
  );
};

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
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-950/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs text-stone-400 mb-6">
            <Link to="/" className="hover:text-amber-400">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-600" />
            <Link to="/projects" className="hover:text-amber-400">Projects</Link>
            <ChevronRight className="w-3.5 h-3.5 text-stone-600" />
            <span className="text-amber-400 font-medium capitalize">{project.category}</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3.5 py-1 rounded-full bg-amber-500 text-stone-950 text-xs font-bold uppercase tracking-wider">
              {project.subCategory}
            </span>
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                project.status === 'Completed'
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                  : 'bg-amber-500/20 text-amber-300 border-amber-500/30'
              }`}
            >
              {project.status}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            {project.name}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-6 text-sm text-stone-300">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              {project.location}
            </span>
            <span className="flex items-center gap-2">
              <Maximize2 className="w-4 h-4 text-amber-400" />
              {project.area}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-amber-400" />
              Completed {project.completionDate}
            </span>
          </div>
        </div>
      </section>

      {/* 2. PROJECT INFORMATION BAR */}
      <section className="bg-stone-900 border-y border-stone-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-left">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold block">Location</span>
              <span className="text-sm font-bold text-white mt-0.5 block">{project.location}</span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold block">Project Type</span>
              <span className="text-sm font-bold text-amber-400 mt-0.5 block">{project.subCategory}</span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold block">Built-Up Area</span>
              <span className="text-sm font-bold text-white mt-0.5 block">{project.area}</span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold block">Completion</span>
              <span className="text-sm font-bold text-white mt-0.5 block">{project.completionDate}</span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold block">Status</span>
              <span className="text-sm font-bold text-white mt-0.5 block">{project.status}</span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-stone-500 font-semibold block">Client Type</span>
              <span className="text-sm font-bold text-white mt-0.5 block">{project.clientType}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3 & 4 & 5: PROJECT OVERVIEW, CHALLENGE & SOLUTION */}
      <section className="py-24 bg-stone-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Overview Left Column */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
                  Project Overview
                </div>
                <h2 className="text-3xl font-extrabold text-white tracking-tight">
                  Design Brief & Execution Scope
                </h2>
                <p className="mt-4 text-base text-stone-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Challenge & Solution Cards */}
              <div className="space-y-6 pt-4">
                <div className="p-6 rounded-2xl bg-stone-900 border border-red-500/20">
                  <div className="flex items-center gap-2.5 text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
                    <span className="w-2 h-2 rounded-full bg-red-400" />
                    The Construction Challenge
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Technical Constraints</h3>
                  <p className="text-sm text-stone-300 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-stone-900 border border-emerald-500/20">
                  <div className="flex items-center gap-2.5 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    The PK Developers Solution
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Engineering & Execution Strategy</h3>
                  <p className="text-sm text-stone-300 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Consultation Sidebar */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl bg-stone-900/70 border border-stone-800 sticky top-28 space-y-6">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Have a Similar Project?</h3>
                  <p className="text-xs text-stone-400 mt-2 leading-relaxed">
                    Our civil engineering team can review your site parameters, blueprints, or commercial requirements to provide a preliminary feasibility report and budget framework.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <Link
                    to="/get-a-quote"
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm shadow-xl transition-all"
                  >
                    <span>Request a Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    to="/contact"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold transition-all"
                  >
                    <span>Book On-Site Visit</span>
                  </Link>
                </div>

                <div className="pt-4 border-t border-stone-800 text-[11px] text-stone-500 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Backed by 10-Year PK Structural Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CONSTRUCTION GALLERY */}
      <section className="py-24 bg-stone-900/40 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
                Visual Documentation
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Project Gallery & On-Site Details
              </h2>
            </div>
            <span className="text-xs text-stone-400">Click any photograph to view high-resolution lightbox</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.galleryImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => openLightbox(idx)}
                className="group relative h-72 rounded-2xl overflow-hidden border border-stone-800 bg-stone-900 cursor-pointer shadow-lg hover:border-amber-500/50 transition-all"
              >
                <img
                  src={img.url}
                  alt={img.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                
                <div className="absolute top-3 right-3 p-2 rounded-lg bg-stone-950/80 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4 text-amber-400" />
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs text-stone-200 line-clamp-2 leading-snug">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PROJECT FEATURES CARDS */}
      <section className="py-24 bg-stone-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
              Craftsmanship Matrix
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Engineering & Architectural Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.features.map((feat, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-stone-900 border border-stone-800 hover:border-amber-500/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                    {getFeatureIcon(feat.category)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-500/80 bg-stone-950 px-2.5 py-1 rounded-md border border-stone-800">
                    {feat.category}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feat.title}</h3>
                <p className="text-xs text-stone-400 leading-relaxed">{feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. PROJECT TIMELINE */}
      <section className="py-20 bg-stone-900/40 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-white">Execution Timeline & Milestones</h2>
            <p className="text-sm text-stone-400 mt-2">Major stages achieved throughout the construction lifecycle.</p>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            {project.timeline.map((stage, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-stone-900 border border-stone-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 font-bold font-mono flex items-center justify-center shrink-0 mt-0.5 text-xs">
                    0{idx + 1}
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h4 className="text-base font-bold text-white">{stage.stage}</h4>
                      <span className="text-xs font-mono text-amber-400 bg-stone-950 px-2 py-0.5 rounded border border-stone-800">
                        {stage.duration}
                      </span>
                    </div>
                    <p className="text-xs text-stone-400 mt-1 leading-relaxed">{stage.description}</p>
                  </div>
                </div>

                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                  {stage.status === 'completed' ? 'Completed' : stage.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. RELATED PROJECTS */}
      <section className="py-24 bg-stone-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-extrabold text-white">Similar Projects</h2>
              <p className="text-sm text-stone-400 mt-1">Explore other landmarks in this category.</p>
            </div>
            <Link to="/projects" className="text-sm font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1">
              <span>View All Projects</span>
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

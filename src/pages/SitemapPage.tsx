import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Network, 
  Home, 
  Building2, 
  Hammer, 
  Compass, 
  ClipboardCheck, 
  Layers, 
  ShieldCheck, 
  Phone, 
  FileText,
  ArrowRight
} from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { projectsData } from '../data/projectsData';
import { servicesData } from '../data/servicesData';

export const SitemapPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Website Sitemap & Route Directory | PK Developers"
        description="Comprehensive index of all primary routes, construction service specializations, project portfolio case studies, and utility pages for PK Developers."
        canonicalPath="/sitemap"
      />

      <section className="py-24 bg-stone-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Network className="w-3.5 h-3.5" />
              Navigation Architecture
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Website Route Directory
            </h1>
            <p className="mt-4 text-base text-stone-400">
              Complete index of all public web pages, case study routes, and project estimation portals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Primary Navigation */}
            <div className="p-8 rounded-2xl bg-stone-900 border border-stone-800 space-y-4">
              <div className="flex items-center gap-2.5 text-amber-400 font-bold text-base">
                <Home className="w-5 h-5" />
                <span>Primary Routes</span>
              </div>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/" className="text-stone-300 hover:text-amber-400 transition-colors flex items-center justify-between">
                    <span>Home Page</span>
                    <span className="text-xs font-mono text-stone-600">/</span>
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-stone-300 hover:text-amber-400 transition-colors flex items-center justify-between">
                    <span>About PK Developers</span>
                    <span className="text-xs font-mono text-stone-600">/about</span>
                  </Link>
                </li>
                <li>
                  <Link to="/process" className="text-stone-300 hover:text-amber-400 transition-colors flex items-center justify-between">
                    <span>9-Step Process</span>
                    <span className="text-xs font-mono text-stone-600">/process</span>
                  </Link>
                </li>
                <li>
                  <Link to="/why-choose-us" className="text-stone-300 hover:text-amber-400 transition-colors flex items-center justify-between">
                    <span>Why Choose Us</span>
                    <span className="text-xs font-mono text-stone-600">/why-choose-us</span>
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="text-stone-300 hover:text-amber-400 transition-colors flex items-center justify-between">
                    <span>Visual Gallery</span>
                    <span className="text-xs font-mono text-stone-600">/gallery</span>
                  </Link>
                </li>
                <li>
                  <Link to="/testimonials" className="text-stone-300 hover:text-amber-400 transition-colors flex items-center justify-between">
                    <span>Client Testimonials</span>
                    <span className="text-xs font-mono text-stone-600">/testimonials</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-stone-300 hover:text-amber-400 transition-colors flex items-center justify-between">
                    <span>Contact Information</span>
                    <span className="text-xs font-mono text-stone-600">/contact</span>
                  </Link>
                </li>
                <li>
                  <Link to="/get-a-quote" className="text-amber-400 hover:text-amber-300 font-semibold flex items-center justify-between">
                    <span>Request a Quote (Lead Form)</span>
                    <span className="text-xs font-mono text-amber-500/70">/get-a-quote</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Construction Services Routes */}
            <div className="p-8 rounded-2xl bg-stone-900 border border-stone-800 space-y-4">
              <div className="flex items-center gap-2.5 text-amber-400 font-bold text-base">
                <Building2 className="w-5 h-5" />
                <span>Services Routes</span>
              </div>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/services" className="text-stone-300 hover:text-amber-400 transition-colors flex items-center justify-between">
                    <span>All Services Overview</span>
                    <span className="text-xs font-mono text-stone-600">/services</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services/residential-construction" className="text-stone-300 hover:text-amber-400 transition-colors flex items-center justify-between">
                    <span>Residential Construction</span>
                    <span className="text-xs font-mono text-stone-600">/residential</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services/commercial-construction" className="text-stone-300 hover:text-amber-400 transition-colors flex items-center justify-between">
                    <span>Commercial Construction</span>
                    <span className="text-xs font-mono text-stone-600">/commercial</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services/renovation-remodeling" className="text-stone-300 hover:text-amber-400 transition-colors flex items-center justify-between">
                    <span>Renovation & Remodeling</span>
                    <span className="text-xs font-mono text-stone-600">/renovation</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services/architecture-planning" className="text-stone-300 hover:text-amber-400 transition-colors flex items-center justify-between">
                    <span>Architecture & Planning</span>
                    <span className="text-xs font-mono text-stone-600">/architecture</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services/project-management" className="text-stone-300 hover:text-amber-400 transition-colors flex items-center justify-between">
                    <span>Project Management (PMC)</span>
                    <span className="text-xs font-mono text-stone-600">/management</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Portfolio & Case Studies */}
            <div className="p-8 rounded-2xl bg-stone-900 border border-stone-800 space-y-4">
              <div className="flex items-center gap-2.5 text-amber-400 font-bold text-base">
                <Layers className="w-5 h-5" />
                <span>Portfolios & Case Studies</span>
              </div>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/projects" className="text-stone-300 hover:text-amber-400 transition-colors flex items-center justify-between">
                    <span>All Projects Index</span>
                    <span className="text-xs font-mono text-stone-600">/projects</span>
                  </Link>
                </li>
                <li>
                  <Link to="/projects/residential" className="text-stone-300 hover:text-amber-400 transition-colors flex items-center justify-between">
                    <span>Residential Portfolio</span>
                    <span className="text-xs font-mono text-stone-600">/residential</span>
                  </Link>
                </li>
                <li>
                  <Link to="/projects/commercial" className="text-stone-300 hover:text-amber-400 transition-colors flex items-center justify-between">
                    <span>Commercial Portfolio</span>
                    <span className="text-xs font-mono text-stone-600">/commercial</span>
                  </Link>
                </li>
                {projectsData.slice(0, 4).map((p) => (
                  <li key={p.id}>
                    <Link to={`/projects/${p.slug}`} className="text-stone-400 hover:text-amber-400 transition-colors flex items-center justify-between text-xs">
                      <span className="truncate max-w-[180px]">{p.name}</span>
                      <span className="text-amber-500/70 font-mono text-[10px]">slug</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Utility & Legal */}
            <div className="p-8 rounded-2xl bg-stone-900 border border-stone-800 space-y-4">
              <div className="flex items-center gap-2.5 text-amber-400 font-bold text-base">
                <FileText className="w-5 h-5" />
                <span>Utility & Legal</span>
              </div>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/privacy-policy" className="text-stone-300 hover:text-amber-400 transition-colors flex items-center justify-between">
                    <span>Privacy Policy</span>
                    <span className="text-xs font-mono text-stone-600">/privacy-policy</span>
                  </Link>
                </li>
                <li>
                  <Link to="/terms-and-conditions" className="text-stone-300 hover:text-amber-400 transition-colors flex items-center justify-between">
                    <span>Terms & Conditions</span>
                    <span className="text-xs font-mono text-stone-600">/terms...</span>
                  </Link>
                </li>
                <li>
                  <Link to="/404" className="text-stone-300 hover:text-amber-400 transition-colors flex items-center justify-between">
                    <span>404 Error Page</span>
                    <span className="text-xs font-mono text-stone-600">/404</span>
                  </Link>
                </li>
                <li>
                  <Link to="/sitemap" className="text-amber-400 font-semibold flex items-center justify-between">
                    <span>HTML Sitemap</span>
                    <span className="text-xs font-mono text-amber-500/70">/sitemap</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

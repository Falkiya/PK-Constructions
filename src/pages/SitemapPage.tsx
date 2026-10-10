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
  ArrowRight,
  MapPin,
  Globe,
  Sparkles
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

      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4">
              <Network className="w-3.5 h-3.5" />
              Navigation Architecture
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Website Route Directory
            </h1>
            <p className="mt-4 text-base text-slate-600">
              Complete index of all public web pages, case study routes, and project estimation portals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Primary Navigation */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2.5 text-blue-600 font-bold text-base">
                <Home className="w-5 h-5" />
                <span>Primary Routes</span>
              </div>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/" className="text-slate-700 hover:text-blue-600 transition-colors flex items-center justify-between">
                    <span>Home Page</span>
                    <span className="text-xs font-mono text-slate-400">/</span>
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-slate-700 hover:text-blue-600 transition-colors flex items-center justify-between">
                    <span>About PK Developers</span>
                    <span className="text-xs font-mono text-slate-400">/about</span>
                  </Link>
                </li>
                <li>
                  <Link to="/process" className="text-slate-700 hover:text-blue-600 transition-colors flex items-center justify-between">
                    <span>9-Step Process</span>
                    <span className="text-xs font-mono text-slate-400">/process</span>
                  </Link>
                </li>
                <li>
                  <Link to="/why-choose-us" className="text-slate-700 hover:text-blue-600 transition-colors flex items-center justify-between">
                    <span>Why Choose Us</span>
                    <span className="text-xs font-mono text-slate-400">/why-choose-us</span>
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="text-slate-700 hover:text-blue-600 transition-colors flex items-center justify-between">
                    <span>Visual Gallery</span>
                    <span className="text-xs font-mono text-slate-400">/gallery</span>
                  </Link>
                </li>

                <li>
                  <Link to="/contact" className="text-slate-700 hover:text-blue-600 transition-colors flex items-center justify-between">
                    <span>Contact Information</span>
                    <span className="text-xs font-mono text-slate-400">/contact</span>
                  </Link>
                </li>
                <li>
                  <Link to="/get-a-quote" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center justify-between">
                    <span>Request a Quote (Lead Form)</span>
                    <span className="text-xs font-mono text-blue-600/70">/get-a-quote</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Construction Services Routes */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2.5 text-blue-600 font-bold text-base">
                <Building2 className="w-5 h-5" />
                <span>Services Routes</span>
              </div>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/services" className="text-slate-700 hover:text-blue-600 transition-colors flex items-center justify-between">
                    <span>All Services Overview</span>
                    <span className="text-xs font-mono text-slate-400">/services</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services/residential-construction" className="text-slate-700 hover:text-blue-600 transition-colors flex items-center justify-between">
                    <span>Residential Property</span>
                    <span className="text-xs font-mono text-slate-400">/residential</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services/commercial-construction" className="text-slate-700 hover:text-blue-600 transition-colors flex items-center justify-between">
                    <span>Commercial Property</span>
                    <span className="text-xs font-mono text-slate-400">/commercial</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services/renovation-remodeling" className="text-slate-700 hover:text-blue-600 transition-colors flex items-center justify-between">
                    <span>Renovation & Remodeling</span>
                    <span className="text-xs font-mono text-slate-400">/renovation</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services/architecture-planning" className="text-slate-700 hover:text-blue-600 transition-colors flex items-center justify-between">
                    <span>Architecture & Planning</span>
                    <span className="text-xs font-mono text-slate-400">/architecture</span>
                  </Link>
                </li>
                <li>
                  <Link to="/services/project-management" className="text-slate-700 hover:text-blue-600 transition-colors flex items-center justify-between">
                    <span>Project Management (PMC)</span>
                    <span className="text-xs font-mono text-slate-400">/management</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Portfolio & Case Studies */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2.5 text-blue-600 font-bold text-base">
                <Layers className="w-5 h-5" />
                <span>Portfolios & Case Studies</span>
              </div>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/projects" className="text-slate-700 hover:text-blue-600 transition-colors flex items-center justify-between">
                    <span>All Projects Index</span>
                    <span className="text-xs font-mono text-slate-400">/projects</span>
                  </Link>
                </li>
                <li>
                  <Link to="/projects/residential" className="text-slate-700 hover:text-blue-600 transition-colors flex items-center justify-between">
                    <span>Residential Portfolio</span>
                    <span className="text-xs font-mono text-slate-400">/residential</span>
                  </Link>
                </li>
                <li>
                  <Link to="/projects/commercial" className="text-slate-700 hover:text-blue-600 transition-colors flex items-center justify-between">
                    <span>Commercial Portfolio</span>
                    <span className="text-xs font-mono text-slate-400">/commercial</span>
                  </Link>
                </li>
                {projectsData.slice(0, 4).map((p) => (
                  <li key={p.id}>
                    <Link to={`/projects/${p.slug}`} className="text-slate-500 hover:text-blue-600 transition-colors flex items-center justify-between text-xs">
                      <span className="truncate max-w-[180px]">{p.name}</span>
                      <span className="text-blue-600/70 font-mono text-[10px]">slug</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Utility & Legal */}
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2.5 text-blue-600 font-bold text-base">
                <FileText className="w-5 h-5" />
                <span>Utility & Legal</span>
              </div>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/privacy-policy" className="text-slate-700 hover:text-blue-600 transition-colors flex items-center justify-between">
                    <span>Privacy Policy</span>
                    <span className="text-xs font-mono text-slate-400">/privacy-policy</span>
                  </Link>
                </li>
                <li>
                  <Link to="/terms-and-conditions" className="text-slate-700 hover:text-blue-600 transition-colors flex items-center justify-between">
                    <span>Terms & Conditions</span>
                    <span className="text-xs font-mono text-slate-400">/terms...</span>
                  </Link>
                </li>
                <li>
                  <Link to="/404" className="text-slate-700 hover:text-blue-600 transition-colors flex items-center justify-between">
                    <span>404 Error Page</span>
                    <span className="text-xs font-mono text-slate-400">/404</span>
                  </Link>
                </li>
                <li>
                  <Link to="/sitemap" className="text-blue-600 font-semibold flex items-center justify-between">
                    <span>HTML Sitemap</span>
                    <span className="text-xs font-mono text-blue-600/70">/sitemap</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Regional Hubs & NRI Desks Directory */}
          <div className="mt-12 p-8 rounded-2xl bg-white border border-slate-200 shadow-sm text-left">
            <div className="flex items-center gap-2.5 text-blue-600 font-bold text-base mb-3">
              <MapPin className="w-5 h-5" />
              <span>Target Regional Hubs &amp; Dedicated Global NRI Desks</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              PK Developers is actively engaged in plotted developments, turnkey villa construction, and property investments across Karnataka and key Gulf NRI markets:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <span className="font-bold text-slate-900 block text-sm">Karnataka Target Locations:</span>
                <div className="flex flex-wrap gap-2 text-slate-700">
                  <span className="px-2.5 py-1 bg-white rounded border border-slate-200 font-medium">Mysuru (Hebbal, Vijayanagar, JP Nagar, Bogadi, Bannur Rd)</span>
                  <span className="px-2.5 py-1 bg-white rounded border border-slate-200 font-medium">Mandya &amp; Srirangapatna</span>
                  <span className="px-2.5 py-1 bg-white rounded border border-slate-200 font-medium">Bangalore (Bengaluru)</span>
                  <span className="px-2.5 py-1 bg-white rounded border border-slate-200 font-medium">Dakshina Kannada (Mangaluru)</span>
                  <span className="px-2.5 py-1 bg-white rounded border border-slate-200 font-medium">Madikeri (Coorg)</span>
                  <span className="px-2.5 py-1 bg-white rounded border border-slate-200 font-medium">Tumkur</span>
                  <span className="px-2.5 py-1 bg-white rounded border border-slate-200 font-medium">Saligram</span>
                  <span className="px-2.5 py-1 bg-white rounded border border-slate-200 font-medium">Chamarajanagar</span>
                  <span className="px-2.5 py-1 bg-white rounded border border-slate-200 font-medium">Kollegal</span>
                </div>
              </div>

              <div className="space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <span className="font-bold text-slate-900 block text-sm flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-blue-600" />
                  <span>Global NRI Desks (Middle East &amp; GCC):</span>
                </span>
                <div className="flex flex-wrap gap-2 text-slate-700">
                  <span className="px-2.5 py-1 bg-white rounded border border-slate-200 font-medium">UAE (Dubai, Abu Dhabi, Sharjah)</span>
                  <span className="px-2.5 py-1 bg-white rounded border border-slate-200 font-medium">Saudi Arabia (Riyadh, Jeddah, Dammam)</span>
                  <span className="px-2.5 py-1 bg-white rounded border border-slate-200 font-medium">Bahrain</span>
                  <span className="px-2.5 py-1 bg-white rounded border border-slate-200 font-medium">Oman (Muscat)</span>
                  <span className="px-2.5 py-1 bg-white rounded border border-slate-200 font-medium">Kuwait</span>
                  <span className="px-2.5 py-1 bg-white rounded border border-slate-200 font-medium">Qatar (Doha)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Popular Search Keywords Directory */}
          <div className="mt-8 p-8 rounded-2xl bg-white border border-slate-200 shadow-sm text-left">
            <div className="flex items-center gap-2 text-blue-600 font-bold text-base mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Popular Property Searches in Mysuru &amp; Karnataka</span>
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              {[
                { label: 'PK Developers Mysuru', link: '/projects' },
                { label: 'Real Estate Developers in Mysuru', link: '/projects' },
                { label: 'Builders in Mysuru', link: '/residential-construction' },
                { label: 'Villas for Sale in Mysuru', link: '/projects/pk-signature-luxury-villa' },
                { label: 'Residential Plots in Mysuru', link: '/projects/pk-green-town-phase-2' },
                { label: 'Apartments in Mysuru', link: '/projects' },
                { label: 'Flats for Sale in Mysuru', link: '/projects' },
                { label: 'Gated Community Projects in Mysuru', link: '/projects/pk-vip-gallery' },
                { label: 'Independent Houses for Sale in Mysuru', link: '/residential-construction' },
                { label: 'Property in Hebbal Mysuru', link: '/projects' },
                { label: 'Flats in Vijayanagar Mysuru', link: '/projects' },
                { label: 'Property in JP Nagar Mysuru', link: '/projects' },
                { label: 'Property in Bogadi Mysuru', link: '/projects' },
                { label: 'Property in Bannur Road Mysuru', link: '/projects' },
                { label: 'Property in Hootagalli Mysuru', link: '/projects' },
                { label: 'Property in Dattagalli Mysuru', link: '/projects' },
                { label: 'New Residential Projects in Mysuru', link: '/projects' },
                { label: 'Trusted Builders in Mysuru', link: '/about' },
                { label: 'Buy Property in Mysuru', link: '/projects' },
                { label: 'PK Green Town Mandya', link: '/projects/pk-green-town-phase-2' },
                { label: 'PK VIP Gallery Mandya', link: '/projects/pk-vip-gallery' },
                { label: 'PK Signature Luxury Villa', link: '/projects/pk-signature-luxury-villa' },
                { label: 'PK Community Hall & Events', link: '/projects/pk-community-hall-events' }
              ].map((item, idx) => (
                <Link
                  key={idx}
                  to={item.link}
                  className="px-3 py-1.5 rounded-lg bg-slate-50 hover:bg-blue-50 text-slate-700 hover:text-blue-600 border border-slate-200 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

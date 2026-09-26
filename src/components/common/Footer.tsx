import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Instagram, 
  Linkedin, 
  Facebook,
  ExternalLink
} from 'lucide-react';
import { contactInfo } from '../../data/companyData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 border-t border-stone-800 text-stone-300">
      {/* Upper newsletter / quick CTA band */}
      <div className="border-b border-stone-800/80 bg-stone-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold mb-2">
                <Award className="w-3.5 h-3.5" />
                Premier Construction & Development Partner
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white">
                Planning your next landmark residential or commercial project?
              </h3>
              <p className="text-sm text-stone-400 mt-1">
                Consult with our senior structural engineers and architects today.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <Link
                to="/get-a-quote"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm shadow-xl shadow-amber-500/20 transition-all duration-200"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-white font-medium text-sm transition-all duration-200"
              >
                <span>Book Site Consultation</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Overview (Spans 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center font-bold text-stone-950 shadow-lg">
                <span className="text-lg font-extrabold text-stone-950">PK</span>
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white">
                  PK DEVELOPERS
                </span>
                <p className="text-[10px] tracking-widest uppercase text-stone-400 font-medium">
                  Construction & Development
                </p>
              </div>
            </Link>

            <p className="text-sm text-stone-400 leading-relaxed max-w-sm">
              PK Developers is a premier civil infrastructure and luxury development company. We deliver landmark residential villas, high-rise commercial complexes, and bespoke renovations built with structural integrity, absolute transparency, and modern architectural vision.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-amber-400 hover:border-amber-500/50 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-amber-400 hover:border-amber-500/50 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-400 hover:text-amber-400 hover:border-amber-500/50 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2 text-xs text-stone-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>RERA Registered & ISO 9001:2015 Compliant</span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Construction Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services/residential-construction" className="text-stone-400 hover:text-amber-400 transition-colors">
                  Residential Construction
                </Link>
              </li>
              <li>
                <Link to="/services/commercial-construction" className="text-stone-400 hover:text-amber-400 transition-colors">
                  Commercial Construction
                </Link>
              </li>
              <li>
                <Link to="/services/renovation-remodeling" className="text-stone-400 hover:text-amber-400 transition-colors">
                  Renovation & Remodeling
                </Link>
              </li>
              <li>
                <Link to="/services/architecture-planning" className="text-stone-400 hover:text-amber-400 transition-colors">
                  Architecture & Planning
                </Link>
              </li>
              <li>
                <Link to="/services/project-management" className="text-stone-400 hover:text-amber-400 transition-colors">
                  Project Management (PMC)
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-amber-500 hover:text-amber-400 transition-colors font-medium flex items-center gap-1">
                  <span>View All Services</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation & Portfolios */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Portfolios & Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/projects" className="text-stone-400 hover:text-amber-400 transition-colors">
                  All Projects Portfolio
                </Link>
              </li>
              <li>
                <Link to="/projects/residential" className="text-stone-400 hover:text-amber-400 transition-colors">
                  Residential Projects
                </Link>
              </li>
              <li>
                <Link to="/projects/commercial" className="text-stone-400 hover:text-amber-400 transition-colors">
                  Commercial Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-stone-400 hover:text-amber-400 transition-colors">
                  About PK Developers
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-stone-400 hover:text-amber-400 transition-colors">
                  9-Step Construction Process
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-stone-400 hover:text-amber-400 transition-colors">
                  Media & Site Gallery
                </Link>
              </li>
              <li>
                <Link to="/why-choose-us" className="text-stone-400 hover:text-amber-400 transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-stone-400 hover:text-amber-400 transition-colors">
                  Client Testimonials
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Headquarters
            </h4>
            <div className="space-y-3 text-sm text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <div>
                  <a href={`tel:${contactInfo.phone}`} className="hover:text-amber-400 transition-colors block">
                    {contactInfo.phone}
                  </a>
                  <a href={`tel:${contactInfo.phoneAlt}`} className="text-xs text-stone-500 hover:text-amber-400 transition-colors block">
                    {contactInfo.phoneAlt}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-amber-400 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1 text-xs text-stone-500">
                <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                <span>{contactInfo.businessHours}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800/80 bg-stone-950 py-6 text-xs text-stone-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} PK Developers. All Rights Reserved. Engineered with precision.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-stone-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-stone-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/sitemap" className="hover:text-stone-300 transition-colors flex items-center gap-1">
              <span>Sitemap</span>
              <ExternalLink className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

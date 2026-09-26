import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  X, 
  ChevronDown, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Home, 
  Building2, 
  Hammer, 
  Compass, 
  ClipboardCheck,
  Layers,
  Sparkles
} from 'lucide-react';
import { contactInfo } from '../../data/companyData';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [servicesExpanded, setServicesExpanded] = useState(true);
  const [projectsExpanded, setProjectsExpanded] = useState(true);
  const location = useLocation();

  if (!isOpen) return null;

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-stone-950/98 backdrop-blur-xl animate-in fade-in duration-200">
      {/* Drawer Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-stone-800/80">
        <Link to="/" onClick={onClose} className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-amber-500 flex items-center justify-center font-bold text-stone-950 text-sm">
            PK
          </div>
          <div>
            <span className="font-bold tracking-tight text-white text-base">PK DEVELOPERS</span>
            <span className="block text-[9px] uppercase tracking-widest text-stone-400">Construction</span>
          </div>
        </Link>
        <button
          type="button"
          onClick={onClose}
          className="p-2 rounded-xl bg-stone-900 border border-stone-800 text-stone-300 hover:text-white"
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Drawer Content */}
      <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6">
        {/* Prominent CTA */}
        <div>
          <Link
            to="/get-a-quote"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-sm shadow-xl shadow-amber-500/20"
          >
            <Sparkles className="w-4 h-4" />
            <span>Get a Quote / Estimate</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-1 text-sm font-medium">
          <Link
            to="/"
            onClick={onClose}
            className={`flex items-center justify-between px-3 py-2.5 rounded-lg ${
              location.pathname === '/' ? 'text-amber-400 bg-stone-900' : 'text-stone-200 hover:bg-stone-900/60'
            }`}
          >
            <span>Home</span>
          </Link>

          <Link
            to="/about"
            onClick={onClose}
            className={`flex items-center justify-between px-3 py-2.5 rounded-lg ${
              isActive('/about') ? 'text-amber-400 bg-stone-900' : 'text-stone-200 hover:bg-stone-900/60'
            }`}
          >
            <span>About Us</span>
          </Link>

          {/* Services Accordion */}
          <div className="rounded-xl bg-stone-900/40 border border-stone-800/60 p-2">
            <button
              type="button"
              onClick={() => setServicesExpanded(!servicesExpanded)}
              className="w-full flex items-center justify-between px-2 py-2 text-stone-200 font-semibold text-sm"
            >
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesExpanded ? 'rotate-180 text-amber-400' : ''}`} />
            </button>
            {servicesExpanded && (
              <div className="mt-1 space-y-1 pl-2 border-l-2 border-stone-800 ml-2">
                <Link
                  to="/services"
                  onClick={onClose}
                  className="block px-2 py-1.5 text-xs text-stone-400 hover:text-amber-400"
                >
                  All Services Overview
                </Link>
                <Link
                  to="/services/residential-construction"
                  onClick={onClose}
                  className="flex items-center gap-2 px-2 py-1.5 text-xs text-stone-300 hover:text-amber-400"
                >
                  <Home className="w-3.5 h-3.5 text-amber-400" />
                  Residential Construction
                </Link>
                <Link
                  to="/services/commercial-construction"
                  onClick={onClose}
                  className="flex items-center gap-2 px-2 py-1.5 text-xs text-stone-300 hover:text-amber-400"
                >
                  <Building2 className="w-3.5 h-3.5 text-amber-400" />
                  Commercial Construction
                </Link>
                <Link
                  to="/services/renovation-remodeling"
                  onClick={onClose}
                  className="flex items-center gap-2 px-2 py-1.5 text-xs text-stone-300 hover:text-amber-400"
                >
                  <Hammer className="w-3.5 h-3.5 text-amber-400" />
                  Renovation & Remodeling
                </Link>
                <Link
                  to="/services/architecture-planning"
                  onClick={onClose}
                  className="flex items-center gap-2 px-2 py-1.5 text-xs text-stone-300 hover:text-amber-400"
                >
                  <Compass className="w-3.5 h-3.5 text-amber-400" />
                  Architecture & Planning
                </Link>
                <Link
                  to="/services/project-management"
                  onClick={onClose}
                  className="flex items-center gap-2 px-2 py-1.5 text-xs text-stone-300 hover:text-amber-400"
                >
                  <ClipboardCheck className="w-3.5 h-3.5 text-amber-400" />
                  Project Management
                </Link>
              </div>
            )}
          </div>

          {/* Projects Accordion */}
          <div className="rounded-xl bg-stone-900/40 border border-stone-800/60 p-2">
            <button
              type="button"
              onClick={() => setProjectsExpanded(!projectsExpanded)}
              className="w-full flex items-center justify-between px-2 py-2 text-stone-200 font-semibold text-sm"
            >
              <span>Projects</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${projectsExpanded ? 'rotate-180 text-amber-400' : ''}`} />
            </button>
            {projectsExpanded && (
              <div className="mt-1 space-y-1 pl-2 border-l-2 border-stone-800 ml-2">
                <Link
                  to="/projects"
                  onClick={onClose}
                  className="flex items-center gap-2 px-2 py-1.5 text-xs text-stone-300 hover:text-amber-400"
                >
                  <Layers className="w-3.5 h-3.5 text-amber-400" />
                  All Projects
                </Link>
                <Link
                  to="/projects/residential"
                  onClick={onClose}
                  className="flex items-center gap-2 px-2 py-1.5 text-xs text-stone-300 hover:text-amber-400"
                >
                  <Home className="w-3.5 h-3.5 text-amber-400" />
                  Residential Projects
                </Link>
                <Link
                  to="/projects/commercial"
                  onClick={onClose}
                  className="flex items-center gap-2 px-2 py-1.5 text-xs text-stone-300 hover:text-amber-400"
                >
                  <Building2 className="w-3.5 h-3.5 text-amber-400" />
                  Commercial Projects
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/process"
            onClick={onClose}
            className={`flex items-center justify-between px-3 py-2.5 rounded-lg ${
              isActive('/process') ? 'text-amber-400 bg-stone-900' : 'text-stone-200 hover:bg-stone-900/60'
            }`}
          >
            <span>Our Process</span>
          </Link>

          <Link
            to="/gallery"
            onClick={onClose}
            className={`flex items-center justify-between px-3 py-2.5 rounded-lg ${
              isActive('/gallery') ? 'text-amber-400 bg-stone-900' : 'text-stone-200 hover:bg-stone-900/60'
            }`}
          >
            <span>Gallery</span>
          </Link>

          <Link
            to="/why-choose-us"
            onClick={onClose}
            className={`flex items-center justify-between px-3 py-2.5 rounded-lg ${
              isActive('/why-choose-us') ? 'text-amber-400 bg-stone-900' : 'text-stone-200 hover:bg-stone-900/60'
            }`}
          >
            <span>Why Choose Us</span>
          </Link>

          <Link
            to="/testimonials"
            onClick={onClose}
            className={`flex items-center justify-between px-3 py-2.5 rounded-lg ${
              isActive('/testimonials') ? 'text-amber-400 bg-stone-900' : 'text-stone-200 hover:bg-stone-900/60'
            }`}
          >
            <span>Testimonials</span>
          </Link>

          <Link
            to="/contact"
            onClick={onClose}
            className={`flex items-center justify-between px-3 py-2.5 rounded-lg ${
              isActive('/contact') ? 'text-amber-400 bg-stone-900' : 'text-stone-200 hover:bg-stone-900/60'
            }`}
          >
            <span>Contact</span>
          </Link>
        </nav>

        {/* Quick Contact & Details */}
        <div className="pt-4 border-t border-stone-800 space-y-3 text-xs text-stone-400">
          <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-2.5 text-stone-300 hover:text-amber-400">
            <Phone className="w-4 h-4 text-amber-500" />
            <span>{contactInfo.phone}</span>
          </a>
          <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2.5 text-stone-300 hover:text-amber-400">
            <Mail className="w-4 h-4 text-amber-500" />
            <span>{contactInfo.email}</span>
          </a>
          <div className="flex items-start gap-2.5 text-stone-400">
            <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
            <span>{contactInfo.address}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

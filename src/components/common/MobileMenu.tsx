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
    <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-white/98 backdrop-blur-xl animate-in fade-in duration-200">
      {/* Drawer Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
        <Link to="/" onClick={onClose} className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-bold text-white text-sm shadow-md">
            PK
          </div>
          <div>
            <span className="font-bold tracking-tight text-slate-900 text-base">PK DEVELOPERS</span>
            <span className="block text-[9px] uppercase tracking-widest text-slate-500 font-semibold">Properties & Real Estate</span>
          </div>
        </Link>
        <button
          type="button"
          onClick={onClose}
          className="p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900"
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
            className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-xl shadow-blue-500/20 transition-colors"
          >
            <Sparkles className="w-4 h-4" />
            <span>Inquire About Properties</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-1 text-sm font-semibold">
          <Link
            to="/"
            onClick={onClose}
            className={`flex items-center justify-between px-3 py-2.5 rounded-lg ${
              location.pathname === '/' ? 'text-blue-600 bg-blue-50' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <span>Home</span>
          </Link>

          <Link
            to="/about"
            onClick={onClose}
            className={`flex items-center justify-between px-3 py-2.5 rounded-lg ${
              isActive('/about') ? 'text-blue-600 bg-blue-50' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <span>About Us</span>
          </Link>

          {/* Services Accordion */}
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-2">
            <button
              type="button"
              onClick={() => setServicesExpanded(!servicesExpanded)}
              className="w-full flex items-center justify-between px-2 py-2 text-slate-800 font-semibold text-sm"
            >
              <span>Property Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesExpanded ? 'rotate-180 text-blue-600' : ''}`} />
            </button>
            {servicesExpanded && (
              <div className="mt-1 space-y-1 pl-2 border-l-2 border-blue-200 ml-2">
                <Link
                  to="/services"
                  onClick={onClose}
                  className="block px-2 py-1.5 text-xs text-slate-600 hover:text-blue-600 font-medium"
                >
                  All Services Overview
                </Link>
                <Link
                  to="/services/residential-construction"
                  onClick={onClose}
                  className="flex items-center gap-2 px-2 py-1.5 text-xs text-slate-700 hover:text-blue-600 font-medium"
                >
                  <Home className="w-3.5 h-3.5 text-blue-600" />
                  Residential Property Dealing
                </Link>
                <Link
                  to="/services/commercial-construction"
                  onClick={onClose}
                  className="flex items-center gap-2 px-2 py-1.5 text-xs text-slate-700 hover:text-blue-600 font-medium"
                >
                  <Building2 className="w-3.5 h-3.5 text-blue-600" />
                  Commercial Real Estate & Leasing
                </Link>
                <Link
                  to="/services/architecture-planning"
                  onClick={onClose}
                  className="flex items-center gap-2 px-2 py-1.5 text-xs text-slate-700 hover:text-blue-600 font-medium"
                >
                  <Compass className="w-3.5 h-3.5 text-blue-600" />
                  Plots & Land Acquisition
                </Link>
                <Link
                  to="/services/project-management"
                  onClick={onClose}
                  className="flex items-center gap-2 px-2 py-1.5 text-xs text-slate-700 hover:text-blue-600 font-medium"
                >
                  <ClipboardCheck className="w-3.5 h-3.5 text-blue-600" />
                  Real Estate Investment Advisory
                </Link>
                <Link
                  to="/services/renovation-remodeling"
                  onClick={onClose}
                  className="flex items-center gap-2 px-2 py-1.5 text-xs text-slate-700 hover:text-blue-600 font-medium"
                >
                  <Hammer className="w-3.5 h-3.5 text-blue-600" />
                  Turnkey Villa Development
                </Link>
              </div>
            )}
          </div>

          {/* Properties Accordion */}
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-2">
            <button
              type="button"
              onClick={() => setProjectsExpanded(!projectsExpanded)}
              className="w-full flex items-center justify-between px-2 py-2 text-slate-800 font-semibold text-sm"
            >
              <span>Properties & Deals</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${projectsExpanded ? 'rotate-180 text-blue-600' : ''}`} />
            </button>
            {projectsExpanded && (
              <div className="mt-1 space-y-1 pl-2 border-l-2 border-blue-200 ml-2">
                <Link
                  to="/projects"
                  onClick={onClose}
                  className="flex items-center gap-2 px-2 py-1.5 text-xs text-slate-700 hover:text-blue-600 font-medium"
                >
                  <Layers className="w-3.5 h-3.5 text-blue-600" />
                  All Properties & Deals
                </Link>
                <Link
                  to="/projects/residential"
                  onClick={onClose}
                  className="flex items-center gap-2 px-2 py-1.5 text-xs text-slate-700 hover:text-blue-600 font-medium"
                >
                  <Home className="w-3.5 h-3.5 text-blue-600" />
                  Luxury Residential
                </Link>
                <Link
                  to="/projects/commercial"
                  onClick={onClose}
                  className="flex items-center gap-2 px-2 py-1.5 text-xs text-slate-700 hover:text-blue-600 font-medium"
                >
                  <Building2 className="w-3.5 h-3.5 text-blue-600" />
                  Commercial Spaces
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/process"
            onClick={onClose}
            className={`flex items-center justify-between px-3 py-2.5 rounded-lg ${
              isActive('/process') ? 'text-blue-600 bg-blue-50' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <span>Our Process</span>
          </Link>

          <Link
            to="/gallery"
            onClick={onClose}
            className={`flex items-center justify-between px-3 py-2.5 rounded-lg ${
              isActive('/gallery') ? 'text-blue-600 bg-blue-50' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <span>Gallery</span>
          </Link>

          <Link
            to="/why-choose-us"
            onClick={onClose}
            className={`flex items-center justify-between px-3 py-2.5 rounded-lg ${
              isActive('/why-choose-us') ? 'text-blue-600 bg-blue-50' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <span>Why Choose Us</span>
          </Link>

          <Link
            to="/contact"
            onClick={onClose}
            className={`flex items-center justify-between px-3 py-2.5 rounded-lg ${
              isActive('/contact') ? 'text-blue-600 bg-blue-50' : 'text-slate-700 hover:bg-slate-100'
            }`}
          >
            <span>Contact</span>
          </Link>
        </nav>

        {/* Quick Contact & Details */}
        <div className="pt-4 border-t border-slate-200 space-y-3 text-xs text-slate-600">
          <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-2.5 text-slate-800 hover:text-blue-600 font-medium">
            <Phone className="w-4 h-4 text-blue-600" />
            <span>{contactInfo.phone}</span>
          </a>
          <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2.5 text-slate-800 hover:text-blue-600 font-medium">
            <Mail className="w-4 h-4 text-blue-600" />
            <span>{contactInfo.email}</span>
          </a>
          <div className="flex items-start gap-2.5 text-slate-600">
            <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <span>{contactInfo.address}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

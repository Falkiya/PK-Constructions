import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Menu, 
  Phone, 
  ArrowRight, 
  Home, 
  Building2, 
  Hammer, 
  Compass, 
  ClipboardCheck, 
  Layers
} from 'lucide-react';
import { contactInfo } from '../../data/companyData';
import { MobileMenu } from './MobileMenu';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
  const location = useLocation();

  const servicesTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const projectsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setProjectsDropdownOpen(false);
  }, [location.pathname]);

  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  const handleProjectsEnter = () => {
    if (projectsTimeoutRef.current) clearTimeout(projectsTimeoutRef.current);
    setProjectsDropdownOpen(true);
  };

  const handleProjectsLeave = () => {
    projectsTimeoutRef.current = setTimeout(() => {
      setProjectsDropdownOpen(false);
    }, 150);
  };

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Top micro-bar for quick contact */}
      <div className="bg-slate-900 border-b border-slate-800 text-slate-300 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              RERA Registered Property Dealers & Real Estate Consultants
            </span>
            <span className="text-slate-600">|</span>
            <span>Bengaluru & South India</span>
          </div>
          <div className="flex items-center gap-6">
            <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{contactInfo.phone}</span>
            </a>
            <Link to="/contact" className="hover:text-blue-400 transition-colors">
              Property Consultation Desk
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-md py-3.5'
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/50 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform duration-300">
              <span className="text-lg tracking-wider font-extrabold text-white">PK</span>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                  PK DEVELOPERS
                </span>
              </div>
              <p className="text-[10px] tracking-widest uppercase text-slate-500 font-semibold">
                Properties & Real Estate
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              to="/"
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                isActive('/') && location.pathname === '/'
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100/70'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                isActive('/about')
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100/70'
              }`}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleServicesEnter}
              onMouseLeave={handleServicesLeave}
            >
              <Link
                to="/services"
                className={`px-3 py-2 text-sm font-semibold rounded-lg inline-flex items-center gap-1 transition-colors ${
                  isActive('/services')
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100/70'
                }`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-blue-600' : ''}`} />
              </Link>

              {/* Services Mega Dropdown */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-80 bg-white border border-slate-200 rounded-xl shadow-2xl p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-3 py-2 border-b border-slate-100 mb-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Property & Advisory Services
                    </span>
                  </div>
                  <div className="space-y-1">
                    <Link
                      to="/services/residential-construction"
                      className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-blue-50/70 transition-colors group"
                    >
                      <div className="p-2 rounded-md bg-blue-50 group-hover:bg-blue-100 text-blue-600">
                        <Home className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-800 group-hover:text-blue-600">
                          Residential Property Dealing
                        </div>
                        <div className="text-xs text-slate-500">Villas, penthouses & luxury resale</div>
                      </div>
                    </Link>

                    <Link
                      to="/services/commercial-construction"
                      className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-blue-50/70 transition-colors group"
                    >
                      <div className="p-2 rounded-md bg-blue-50 group-hover:bg-blue-100 text-blue-600">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-800 group-hover:text-blue-600">
                          Commercial Real Estate & Leasing
                        </div>
                        <div className="text-xs text-slate-500">Offices, retail & tech towers</div>
                      </div>
                    </Link>

                    <Link
                      to="/services/architecture-planning"
                      className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-blue-50/70 transition-colors group"
                    >
                      <div className="p-2 rounded-md bg-blue-50 group-hover:bg-blue-100 text-blue-600">
                        <Compass className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-800 group-hover:text-blue-600">
                          Plots & Land Acquisition
                        </div>
                        <div className="text-xs text-slate-500">RERA & BDA approved layout plots</div>
                      </div>
                    </Link>

                    <Link
                      to="/services/project-management"
                      className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-blue-50/70 transition-colors group"
                    >
                      <div className="p-2 rounded-md bg-blue-50 group-hover:bg-blue-100 text-blue-600">
                        <ClipboardCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-800 group-hover:text-blue-600">
                          Real Estate Investment Advisory
                        </div>
                        <div className="text-xs text-slate-500">High-yield & pre-leased assets</div>
                      </div>
                    </Link>

                    <Link
                      to="/services/renovation-remodeling"
                      className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-blue-50/70 transition-colors group"
                    >
                      <div className="p-2 rounded-md bg-blue-50 group-hover:bg-blue-100 text-blue-600">
                        <Hammer className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-800 group-hover:text-blue-600">
                          Turnkey Property Development
                        </div>
                        <div className="text-xs text-slate-500">Custom villa build on your plot</div>
                      </div>
                    </Link>
                  </div>
                  <div className="pt-2 border-t border-slate-100 mt-1">
                    <Link
                      to="/services"
                      className="flex items-center justify-between p-2 text-xs font-semibold text-blue-600 hover:text-blue-800 rounded-lg hover:bg-blue-50/60"
                    >
                      <span>Explore All Services Overview</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Projects Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleProjectsEnter}
              onMouseLeave={handleProjectsLeave}
            >
              <Link
                to="/projects"
                className={`px-3 py-2 text-sm font-semibold rounded-lg inline-flex items-center gap-1 transition-colors ${
                  isActive('/projects')
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100/70'
                }`}
              >
                Properties
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${projectsDropdownOpen ? 'rotate-180 text-blue-600' : ''}`} />
              </Link>

              {projectsDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-slate-200 rounded-xl shadow-2xl p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-3 py-2 border-b border-slate-100 mb-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      Property Portals
                    </span>
                  </div>
                  <div className="space-y-1">
                    <Link
                      to="/projects"
                      className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-blue-50/70 transition-colors group"
                    >
                      <div className="p-2 rounded-md bg-blue-50 text-blue-600">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-800 group-hover:text-blue-600">
                          All Properties
                        </div>
                        <div className="text-xs text-slate-500">Verified deals & listings</div>
                      </div>
                    </Link>

                    <Link
                      to="/projects/residential"
                      className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-blue-50/70 transition-colors group"
                    >
                      <div className="p-2 rounded-md bg-blue-50 text-blue-600">
                        <Home className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-800 group-hover:text-blue-600">
                          Luxury Residential
                        </div>
                        <div className="text-xs text-slate-500">Villas, penthouses & houses</div>
                      </div>
                    </Link>

                    <Link
                      to="/projects/commercial"
                      className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-blue-50/70 transition-colors group"
                    >
                      <div className="p-2 rounded-md bg-blue-50 text-blue-600">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-800 group-hover:text-blue-600">
                          Commercial Spaces
                        </div>
                        <div className="text-xs text-slate-500">Corporate & retail assets</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/process"
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                isActive('/process')
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100/70'
              }`}
            >
              Process
            </Link>

            <Link
              to="/gallery"
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                isActive('/gallery')
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100/70'
              }`}
            >
              Gallery
            </Link>

            <Link
              to="/why-choose-us"
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                isActive('/why-choose-us')
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100/70'
              }`}
            >
              Why Choose Us
            </Link>

            <Link
              to="/contact"
              className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors ${
                isActive('/contact')
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-slate-700 hover:text-blue-600 hover:bg-slate-100/70'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Primary CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/get-a-quote"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Inquire Property</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/get-a-quote"
              className="px-3.5 py-1.5 rounded-lg bg-blue-600 text-white font-semibold text-xs shadow-md"
            >
              Inquire
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Open Mobile Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};

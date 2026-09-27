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
      <div className="bg-stone-900 border-b border-stone-800 text-stone-400 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              RERA Registered Property Dealers & Real Estate Consultants
            </span>
            <span className="text-stone-600">|</span>
            <span>Bengaluru & South India</span>
          </div>
          <div className="flex items-center gap-6">
            <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>{contactInfo.phone}</span>
            </a>
            <Link to="/contact" className="hover:text-amber-400 transition-colors">
              Property Consultation Desk
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-stone-950/90 backdrop-blur-md border-b border-stone-800/80 shadow-2xl py-3.5'
            : 'bg-stone-950/70 backdrop-blur-sm border-b border-stone-800/40 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center font-bold text-stone-950 shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
              <span className="text-lg tracking-wider font-extrabold text-stone-950">PK</span>
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="text-xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  PK DEVELOPERS
                </span>
              </div>
              <p className="text-[10px] tracking-widest uppercase text-stone-400 font-medium">
                Properties & Real Estate
              </p>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              to="/"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActive('/') && location.pathname === '/'
                  ? 'text-amber-400 bg-stone-900/60'
                  : 'text-stone-300 hover:text-white hover:bg-stone-900/40'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActive('/about')
                  ? 'text-amber-400 bg-stone-900/60'
                  : 'text-stone-300 hover:text-white hover:bg-stone-900/40'
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
                className={`px-3 py-2 text-sm font-medium rounded-lg inline-flex items-center gap-1 transition-colors ${
                  isActive('/services')
                    ? 'text-amber-400 bg-stone-900/60'
                    : 'text-stone-300 hover:text-white hover:bg-stone-900/40'
                }`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-amber-400' : ''}`} />
              </Link>

              {/* Services Mega Dropdown */}
              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-80 bg-stone-900 border border-stone-800 rounded-xl shadow-2xl p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-3 py-2 border-b border-stone-800/80 mb-1">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400">
                      Property & Advisory Services
                    </span>
                  </div>
                  <div className="space-y-1">
                    <Link
                      to="/services/residential-construction"
                      className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-stone-800 transition-colors group"
                    >
                      <div className="p-2 rounded-md bg-stone-800 group-hover:bg-amber-500/20 text-amber-400">
                        <Home className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-stone-200 group-hover:text-amber-400">
                          Residential Property Dealing
                        </div>
                        <div className="text-xs text-stone-400">Villas, penthouses & luxury resale</div>
                      </div>
                    </Link>

                    <Link
                      to="/services/commercial-construction"
                      className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-stone-800 transition-colors group"
                    >
                      <div className="p-2 rounded-md bg-stone-800 group-hover:bg-amber-500/20 text-amber-400">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-stone-200 group-hover:text-amber-400">
                          Commercial Real Estate & Leasing
                        </div>
                        <div className="text-xs text-stone-400">Offices, retail & tech towers</div>
                      </div>
                    </Link>

                    <Link
                      to="/services/architecture-planning"
                      className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-stone-800 transition-colors group"
                    >
                      <div className="p-2 rounded-md bg-stone-800 group-hover:bg-amber-500/20 text-amber-400">
                        <Compass className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-stone-200 group-hover:text-amber-400">
                          Plots & Land Acquisition
                        </div>
                        <div className="text-xs text-stone-400">RERA & BDA approved layout plots</div>
                      </div>
                    </Link>

                    <Link
                      to="/services/project-management"
                      className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-stone-800 transition-colors group"
                    >
                      <div className="p-2 rounded-md bg-stone-800 group-hover:bg-amber-500/20 text-amber-400">
                        <ClipboardCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-stone-200 group-hover:text-amber-400">
                          Real Estate Investment Advisory
                        </div>
                        <div className="text-xs text-stone-400">High-yield & pre-leased assets</div>
                      </div>
                    </Link>

                    <Link
                      to="/services/renovation-remodeling"
                      className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-stone-800 transition-colors group"
                    >
                      <div className="p-2 rounded-md bg-stone-800 group-hover:bg-amber-500/20 text-amber-400">
                        <Hammer className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-stone-200 group-hover:text-amber-400">
                          Turnkey Property Development
                        </div>
                        <div className="text-xs text-stone-400">Custom villa build on your plot</div>
                      </div>
                    </Link>
                  </div>
                  <div className="pt-2 border-t border-stone-800 mt-1">
                    <Link
                      to="/services"
                      className="flex items-center justify-between p-2 text-xs font-medium text-amber-400 hover:text-amber-300 rounded-lg hover:bg-stone-800/60"
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
                className={`px-3 py-2 text-sm font-medium rounded-lg inline-flex items-center gap-1 transition-colors ${
                  isActive('/projects')
                    ? 'text-amber-400 bg-stone-900/60'
                    : 'text-stone-300 hover:text-white hover:bg-stone-900/40'
                }`}
              >
                Properties
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${projectsDropdownOpen ? 'rotate-180 text-amber-400' : ''}`} />
              </Link>

              {projectsDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-stone-900 border border-stone-800 rounded-xl shadow-2xl p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-3 py-2 border-b border-stone-800/80 mb-1">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-stone-400">
                      Property Portals
                    </span>
                  </div>
                  <div className="space-y-1">
                    <Link
                      to="/projects"
                      className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-stone-800 transition-colors group"
                    >
                      <div className="p-2 rounded-md bg-stone-800 text-amber-400">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-stone-200 group-hover:text-amber-400">
                          All Properties
                        </div>
                        <div className="text-xs text-stone-400">Verified deals & listings</div>
                      </div>
                    </Link>

                    <Link
                      to="/projects/residential"
                      className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-stone-800 transition-colors group"
                    >
                      <div className="p-2 rounded-md bg-stone-800 text-amber-400">
                        <Home className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-stone-200 group-hover:text-amber-400">
                          Luxury Residential
                        </div>
                        <div className="text-xs text-stone-400">Villas, penthouses & houses</div>
                      </div>
                    </Link>

                    <Link
                      to="/projects/commercial"
                      className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-stone-800 transition-colors group"
                    >
                      <div className="p-2 rounded-md bg-stone-800 text-amber-400">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-stone-200 group-hover:text-amber-400">
                          Commercial Spaces
                        </div>
                        <div className="text-xs text-stone-400">Corporate & retail assets</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/process"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActive('/process')
                  ? 'text-amber-400 bg-stone-900/60'
                  : 'text-stone-300 hover:text-white hover:bg-stone-900/40'
              }`}
            >
              Process
            </Link>

            <Link
              to="/gallery"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActive('/gallery')
                  ? 'text-amber-400 bg-stone-900/60'
                  : 'text-stone-300 hover:text-white hover:bg-stone-900/40'
              }`}
            >
              Gallery
            </Link>

            <Link
              to="/why-choose-us"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActive('/why-choose-us')
                  ? 'text-amber-400 bg-stone-900/60'
                  : 'text-stone-300 hover:text-white hover:bg-stone-900/40'
              }`}
            >
              Why Choose Us
            </Link>

            <Link
              to="/testimonials"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActive('/testimonials')
                  ? 'text-amber-400 bg-stone-900/60'
                  : 'text-stone-300 hover:text-white hover:bg-stone-900/40'
              }`}
            >
              Reviews
            </Link>

            <Link
              to="/contact"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                isActive('/contact')
                  ? 'text-amber-400 bg-stone-900/60'
                  : 'text-stone-300 hover:text-white hover:bg-stone-900/40'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Primary CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/get-a-quote"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-sm shadow-lg shadow-amber-500/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Inquire Property</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/get-a-quote"
              className="px-3.5 py-1.5 rounded-lg bg-amber-500 text-stone-950 font-semibold text-xs shadow-md"
            >
              Inquire
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-xl bg-stone-900 border border-stone-800 text-stone-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
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

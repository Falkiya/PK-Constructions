import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu } from 'lucide-react';
import { contactInfo } from '../../data/companyData';
import { MobileMenu } from './MobileMenu';

export const GoldenTowersLogo: React.FC<{ className?: string }> = ({ className = "w-9 h-9" }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Left Tower */}
    <rect x="6" y="16" width="7" height="20" rx="1" fill="#c59b6d" />
    <rect x="8" y="19" width="3" height="3" fill="#ffffff" fillOpacity="0.85" />
    <rect x="8" y="24" width="3" height="3" fill="#ffffff" fillOpacity="0.85" />
    <rect x="8" y="29" width="3" height="3" fill="#ffffff" fillOpacity="0.85" />
    <path d="M6 16L9.5 12L13 16H6Z" fill="#b68a5c" />

    {/* Center Tall Tower */}
    <rect x="15" y="8" width="10" height="28" rx="1.5" fill="#c59b6d" />
    <rect x="18" y="12" width="4" height="4" fill="#ffffff" fillOpacity="0.85" />
    <rect x="18" y="18" width="4" height="4" fill="#ffffff" fillOpacity="0.85" />
    <rect x="18" y="24" width="4" height="4" fill="#ffffff" fillOpacity="0.85" />
    <rect x="18" y="30" width="4" height="4" fill="#ffffff" fillOpacity="0.85" />
    <path d="M15 8L20 3L25 8H15Z" fill="#a87c4f" />

    {/* Right Tower */}
    <rect x="27" y="13" width="7" height="23" rx="1" fill="#c59b6d" />
    <rect x="29" y="16" width="3" height="3" fill="#ffffff" fillOpacity="0.85" />
    <rect x="29" y="21" width="3" height="3" fill="#ffffff" fillOpacity="0.85" />
    <rect x="29" y="26" width="3" height="3" fill="#ffffff" fillOpacity="0.85" />
    <rect x="29" y="31" width="3" height="3" fill="#ffffff" fillOpacity="0.85" />
    <path d="M27 13L30.5 9L34 13H27Z" fill="#b68a5c" />

    {/* Base line */}
    <line x1="4" y1="37" x2="36" y2="37" stroke="#c59b6d" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      if (location.pathname === '/') {
        const sections = ['enquiry', 'location', 'amenities', 'projects', 'about', 'hero'];
        for (const sectionId of sections) {
          const el = document.getElementById(sectionId);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 140) {
              setActiveSection(sectionId === 'hero' ? 'home' : sectionId);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveSection(id === 'hero' ? 'home' : id);
      }
    }
  };

  const navLinks = [
    { label: 'Home', href: '/', id: 'hero' },
    { label: 'About', href: '/#about', id: 'about' },
    { label: 'Projects', href: '/#projects', id: 'projects' },
    { label: 'Amenities', href: '/#amenities', id: 'amenities' },
    { label: 'Location', href: '/#location', id: 'location' },
    { label: 'Enquiry', href: '/#enquiry', id: 'enquiry' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 bg-white ${
          isScrolled
            ? 'shadow-sm border-b border-gray-100 py-3'
            : 'border-b border-gray-100 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={(e) => scrollToSection(e, 'hero')}
            className="flex items-center gap-3 group"
          >
            <GoldenTowersLogo className="w-9 h-9 transition-transform duration-200 group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 leading-tight">
                PK DEVELOPERS
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.22em] uppercase font-bold text-[#c59b6d] leading-none mt-0.5">
                BUILDING BETTER TOMORROWS
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => {
              const isActive =
                location.pathname === '/' && activeSection === (link.id === 'hero' ? 'home' : link.id);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`text-[15px] transition-colors relative py-1 ${
                    isActive
                      ? 'text-[#c59b6d] font-bold'
                      : 'text-slate-700 hover:text-[#c59b6d] font-medium'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c59b6d] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Call Now Gold Button */}
          <div className="hidden sm:flex items-center">
            <a
              href={`tel:${contactInfo.phone}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#c59b6d] hover:bg-[#b68a5c] text-white text-sm font-semibold shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <Phone className="w-3.5 h-3.5 fill-white" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={`tel:${contactInfo.phone}`}
              className="p-2 rounded-full bg-[#c59b6d] text-white"
              aria-label="Call Now"
            >
              <Phone className="w-3.5 h-3.5 fill-white" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Toggle navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeSection={activeSection}
        onSelectSection={(id) => {
          setMobileMenuOpen(false);
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(id === 'hero' ? 'home' : id);
          }
        }}
      />
    </>
  );
};
export default Header;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu } from 'lucide-react';
import { contactInfo } from '../../data/companyData';
import { MobileMenu } from './MobileMenu';

export const GoldenTowersLogo: React.FC<{ className?: string }> = ({ className = "w-9 h-9" }) => (
  <img
    src="/images/pk-logo-mark.png"
    alt="PK Developers"
    className={`${className} object-contain`}
  />
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
            className="flex items-center gap-2 group py-0.5"
          >
            <img
              src="/images/pk-developers-logo-horizontal.png"
              alt="PK Developers — Building Spaces • Creating Futures"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8">
            {navLinks.map((link) => {
              const isActive =
                location.pathname === '/' && activeSection === (link.id === 'hero' ? 'home' : link.id);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.id)}
                  className={`text-[14px] lg:text-[15px] transition-colors py-1 ${
                    isActive
                      ? 'text-[#b68a5c] font-semibold'
                      : 'text-slate-800 hover:text-[#b68a5c] font-medium'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Call Now Gold Button */}
          <div className="hidden sm:flex items-center">
            <a
              href={`tel:${contactInfo.phone}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#b68a5c] hover:bg-[#a67c4e] text-white text-sm font-medium shadow-sm transition-all duration-200"
            >
              <Phone className="w-3.5 h-3.5 fill-white" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={`tel:${contactInfo.phone}`}
              className="p-2 rounded-lg bg-[#b68a5c] text-white"
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

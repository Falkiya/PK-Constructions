import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MapPin, Clock } from 'lucide-react';
import { contactInfo } from '../../data/companyData';

export const Footer: React.FC = () => {
  const location = useLocation();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
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
    <footer className="bg-[#07111e] text-slate-300 pt-12 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-10 border-b border-slate-800/80">
          {/* Logo & Tagline */}
          <Link
            to="/"
            onClick={(e) => scrollToSection(e, 'hero')}
            className="flex items-center gap-3 group text-left"
          >
            <div className="bg-white px-3.5 py-2 rounded-xl shadow-sm border border-[#b68a5c]/30 hover:border-[#b68a5c] transition-all duration-200">
              <img
                src="/images/pk-developers-logo-horizontal.png"
                alt="PK Developers — Building Spaces • Creating Futures"
                className="h-9 sm:h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-5 sm:gap-7 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.id)}
                className="text-slate-300 hover:text-[#b68a5c] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Office Address & Timings Strip */}
        <div className="py-6 border-b border-slate-800/80 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-300">
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-[#b68a5c] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-white block mb-0.5">Corporate Office</span>
              <span className="text-slate-300">{contactInfo.address}</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 text-[#b68a5c] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-white block mb-0.5">Office Timings</span>
              <span className="text-slate-300">{contactInfo.businessHours}</span>
            </div>
          </div>
        </div>

        {/* Bottom bar with copyright and Dream Click Growth Solutions badge */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 sm:pr-44 md:pr-48 lg:pr-52">
          <p>© PK Developers. All rights reserved.</p>

          <div className="flex items-center gap-2.5">
            <span className="text-slate-400">Website built by</span>
            <a
              href="https://dreamclick.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center bg-white px-2.5 py-1 rounded-lg border border-slate-700/60 hover:border-sky-400 shadow-sm transition-all duration-200"
              title="Dream Click Growth Solutions — We Build Digital Possibilities"
            >
              <img
                src="/images/dream-click-logo.png"
                alt="Dream Click Growth Solutions — We Build Digital Possibilities"
                className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

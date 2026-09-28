import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageCircle } from 'lucide-react';
import { contactInfo } from '../../data/companyData';
import { GoldenTowersLogo } from './Header';

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
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-800/80">
          {/* Logo & Tagline */}
          <Link
            to="/"
            onClick={(e) => scrollToSection(e, 'hero')}
            className="flex items-center gap-3 group text-left"
          >
            <GoldenTowersLogo className="w-9 h-9 transition-transform duration-200 group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-white leading-tight">
                PK DEVELOPERS
              </span>
              <span className="text-[9px] tracking-[0.22em] uppercase font-semibold text-[#b68a5c] mt-0.5">
                BUILDING BETTER TOMORROWS
              </span>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm font-medium">
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

          {/* Social / Direct Action Circular Buttons */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Us"
              className="w-10 h-10 rounded-full border border-[#b68a5c]/60 hover:border-[#b68a5c] bg-transparent flex items-center justify-center text-[#b68a5c] hover:scale-105 transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href={`tel:${contactInfo.phone}`}
              aria-label="Call Us"
              className="w-10 h-10 rounded-full border border-[#b68a5c]/60 hover:border-[#b68a5c] bg-transparent flex items-center justify-center text-[#b68a5c] hover:scale-105 transition-all duration-200"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom bar with copyright and Dream Click Growth Solutions badge */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2024 PK Developers. All rights reserved.</p>

          <div className="flex items-center gap-2">
            <span>Designed & Developed by</span>
            <a
              href="https://dreamclick.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-bold text-white transition-colors"
            >
              <span className="w-5 h-5 rounded bg-gradient-to-br from-blue-500 to-sky-400 flex items-center justify-center text-[10px] font-black text-white shadow-sm">
                DC
              </span>
              <span className="tracking-wider">DREAM CLICK GROWTH SOLUTIONS</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

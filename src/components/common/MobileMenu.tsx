import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, Phone, MessageCircle, MapPin, Mail, ArrowRight } from 'lucide-react';
import { contactInfo } from '../../data/companyData';
import { GoldenTowersLogo } from './Header';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection?: string;
  onSelectSection?: (id: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  activeSection = 'home',
  onSelectSection,
}) => {
  const location = useLocation();

  if (!isOpen) return null;

  const navLinks = [
    { label: 'Home', href: '/', id: 'hero' },
    { label: 'About', href: '/#about', id: 'about' },
    { label: 'Projects', href: '/#projects', id: 'projects' },
    { label: 'Amenities', href: '/#amenities', id: 'amenities' },
    { label: 'Location', href: '/#location', id: 'location' },
    { label: 'Enquiry', href: '/#enquiry', id: 'enquiry' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (location.pathname === '/' && onSelectSection) {
      e.preventDefault();
      onSelectSection(id);
    } else {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 md:hidden flex flex-col bg-white/98 backdrop-blur-xl animate-in fade-in duration-200">
      {/* Drawer Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
        <Link to="/" onClick={onClose} className="flex items-center gap-2.5">
          <GoldenTowersLogo className="w-8 h-8" />
          <div className="flex flex-col">
            <span className="font-extrabold tracking-tight text-slate-900 text-base leading-tight">
              PK DEVELOPERS
            </span>
            <span className="text-[8px] tracking-[0.2em] uppercase font-bold text-[#c59b6d]">
              BUILDING BETTER TOMORROWS
            </span>
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

      {/* Drawer Body */}
      <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6">
        {/* Quick CTA Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <a
            href={`tel:${contactInfo.phone}`}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#c59b6d] hover:bg-[#b68a5c] text-white font-bold text-sm shadow-md transition-colors"
          >
            <Phone className="w-4 h-4 fill-white" />
            <span>Call Now</span>
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-1">
          {navLinks.map((link) => {
            const isActive =
              location.pathname === '/' && activeSection === (link.id === 'hero' ? 'home' : link.id);
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                  isActive
                    ? 'text-[#c59b6d] bg-[#fbf7f2]'
                    : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
            );
          })}
        </nav>

        {/* Contact Info Footer */}
        <div className="pt-6 border-t border-slate-100 space-y-3 text-xs text-slate-600">
          <a
            href={`tel:${contactInfo.phone}`}
            className="flex items-center gap-2.5 text-slate-800 hover:text-[#c59b6d] font-semibold"
          >
            <Phone className="w-4 h-4 text-[#c59b6d]" />
            <span>{contactInfo.phone}</span>
          </a>
          <a
            href={`mailto:${contactInfo.email}`}
            className="flex items-center gap-2.5 text-slate-800 hover:text-[#c59b6d] font-semibold"
          >
            <Mail className="w-4 h-4 text-[#c59b6d]" />
            <span>{contactInfo.email}</span>
          </a>
          <div className="flex items-start gap-2.5 text-slate-600">
            <MapPin className="w-4 h-4 text-[#c59b6d] shrink-0 mt-0.5" />
            <span>{contactInfo.address}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

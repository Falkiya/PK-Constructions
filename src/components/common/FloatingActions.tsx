import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle, Phone } from 'lucide-react';
import { contactInfo } from '../../data/companyData';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Back to top button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="pointer-events-auto p-3 rounded-full bg-stone-900 border border-stone-700 text-stone-200 hover:text-amber-400 hover:border-amber-500 shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Mobile-only Call Now button */}
      <a
        href={`tel:${contactInfo.phone}`}
        className="pointer-events-auto md:hidden flex items-center gap-2 px-4 py-2.5 rounded-full bg-stone-900 border border-amber-500/40 text-amber-400 text-xs font-semibold shadow-2xl hover:bg-stone-800 transition-all active:scale-95"
      >
        <Phone className="w-4 h-4 text-amber-500 fill-amber-500/20" />
        <span>Call Expert</span>
      </a>

      {/* WhatsApp Floating Action Button */}
      <a
        href={`https://wa.me/${contactInfo.whatsapp}?text=Hello%20PK%20Developers,%20I%20would%20like%20to%20inquire%20about%20verified%20properties.`}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-900/40 hover:shadow-emerald-600/30 transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Chat With Us on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
        <span className="hidden sm:inline font-semibold text-xs tracking-wide">
          WhatsApp Us
        </span>
      </a>
    </div>
  );
};

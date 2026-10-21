import React, { useState, useEffect } from 'react';
import { ArrowUp, Phone, ChevronDown, Share2 } from 'lucide-react';
import { contactInfo } from '../../data/companyData';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

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

  // Dedicated config for each floating social action button
  const floatingItems = [
    {
      name: 'Call Us',
      url: `tel:${contactInfo.phoneRaw}`,
      bgClass: 'bg-[#b68a5c] hover:bg-[#a67c4e] shadow-amber-900/30',
      iconNode: <Phone className="w-4 h-4 sm:w-5 sm:h-5 fill-white text-white" />,
      tooltip: `Call: ${contactInfo.phone}`,
      isExternal: false
    },
    {
      name: 'Instagram',
      url: contactInfo.social.instagram,
      bgClass: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-rose-950/30',
      iconNode: (
        <img
          src="/images/social/instagram.png"
          alt="Instagram"
          className="w-5 h-5 object-contain rounded-full"
        />
      ),
      tooltip: 'Follow on Instagram',
      isExternal: true
    },
    {
      name: 'Facebook',
      url: contactInfo.social.facebook,
      bgClass: 'bg-[#1877F2] hover:bg-[#166fe5] shadow-blue-950/30',
      iconNode: (
        <img
          src="/images/social/facebook.png"
          alt="Facebook"
          className="w-5 h-5 object-contain rounded-full"
        />
      ),
      tooltip: 'Follow on Facebook',
      isExternal: true
    },
    {
      name: 'LinkedIn',
      url: contactInfo.social.linkedin,
      bgClass: 'bg-[#0A66C2] hover:bg-[#095196] shadow-blue-950/30',
      iconNode: (
        <img
          src="/images/social/linkedin.png"
          alt="LinkedIn"
          className="w-5 h-5 object-contain rounded-full"
        />
      ),
      tooltip: 'Connect on LinkedIn',
      isExternal: true
    },
    {
      name: 'X',
      url: contactInfo.social.x,
      bgClass: 'bg-black hover:bg-neutral-900 border border-slate-700 shadow-neutral-950/40',
      iconNode: (
        <img
          src="/images/social/x.png"
          alt="X (Twitter)"
          className="w-4 h-4 object-contain rounded-full"
        />
      ),
      tooltip: 'Follow on X',
      isExternal: true
    }
  ];

  return (
    <div className="fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2.5 pointer-events-none">
      {/* Back to top button */}
      {showBackToTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="pointer-events-auto p-2.5 sm:p-3 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-[#b68a5c] hover:border-[#b68a5c] shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none mb-1"
          aria-label="Back to Top"
          title="Back to Top"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      )}

      {/* Floating Social Channels Stack */}
      <div
        className={`flex flex-col items-end gap-2.5 transition-all duration-300 ${
          isExpanded
            ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
            : 'opacity-0 translate-y-4 scale-95 pointer-events-none hidden'
        }`}
      >
        {floatingItems.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target={item.isExternal ? '_blank' : undefined}
            rel={item.isExternal ? 'noopener noreferrer' : undefined}
            aria-label={item.tooltip}
            title={item.tooltip}
            className={`group relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full text-white shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 ${item.bgClass}`}
          >
            {item.iconNode}
            {/* Tooltip on Desktop hover */}
            <span className="hidden sm:inline-block absolute right-full mr-3 px-2.5 py-1 bg-slate-900/95 text-white text-xs font-medium rounded-lg whitespace-nowrap shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200">
              {item.tooltip}
            </span>
          </a>
        ))}
      </div>

      {/* Primary WhatsApp Action Button + Toggle */}
      <div className="flex items-center gap-2 pointer-events-auto">
        {/* Toggle to collapse/expand extra channels */}
        <button
          type="button"
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 sm:p-2.5 rounded-full bg-slate-900/90 hover:bg-slate-950 text-slate-200 hover:text-white shadow-lg border border-slate-700 transition-all duration-200 hover:scale-105 active:scale-95"
          aria-label={isExpanded ? 'Collapse Social Icons' : 'Expand Social Icons'}
          title={isExpanded ? 'Minimize channels' : 'Show all social channels'}
        >
          {isExpanded ? (
            <ChevronDown className="w-4 h-4 text-slate-300" />
          ) : (
            <Share2 className="w-4 h-4 text-[#c59b6d]" />
          )}
        </button>

        {/* Primary WhatsApp Floating Button (Icon Only) */}
        <a
          href={contactInfo.social.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl shadow-emerald-950/40 hover:shadow-emerald-600/30 transition-all duration-300 hover:scale-110 active:scale-95 p-2 sm:p-2.5"
          aria-label="Chat With Us on WhatsApp"
          title="WhatsApp Us"
        >
          <img
            src="/images/social/whatsapp.png"
            alt="WhatsApp"
            className="w-full h-full object-contain"
          />
          {/* Tooltip on Desktop hover */}
          <span className="hidden sm:inline-block absolute right-full mr-3 px-2.5 py-1 bg-slate-900/95 text-white text-xs font-medium rounded-lg whitespace-nowrap shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200">
            WhatsApp Us
          </span>
        </a>
      </div>
    </div>
  );
};

export default FloatingActions;

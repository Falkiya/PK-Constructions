import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-300 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Logo & Name */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20">
              <span className="text-lg font-extrabold text-white">PK</span>
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight text-white">
                PK DEVELOPERS
              </span>
              <p className="text-[10px] tracking-widest uppercase text-slate-400 font-medium">
                Properties & Real Estate
              </p>
            </div>
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm font-medium">
            <Link to="/" className="hover:text-blue-400 transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link to="/services" className="hover:text-blue-400 transition-colors">
              Services
            </Link>
            <Link to="/projects" className="hover:text-blue-400 transition-colors">
              Properties
            </Link>
            <Link to="/why-choose-us" className="hover:text-blue-400 transition-colors">
              Why Choose Us
            </Link>
            <Link to="/contact" className="hover:text-blue-400 transition-colors">
              Contact
            </Link>
            <Link to="/get-a-quote" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
              Inquire
            </Link>
          </nav>

          {/* Clean Copyright Notice */}
          <p className="text-xs text-slate-500">
            © PK Developers. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

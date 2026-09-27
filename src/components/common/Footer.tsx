import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowRight, 
  ShieldCheck 
} from 'lucide-react';
import { contactInfo } from '../../data/companyData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 border-t border-stone-800 text-stone-300">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand & Overview */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center font-bold text-stone-950 shadow-lg">
                <span className="text-lg font-extrabold text-stone-950">PK</span>
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white">
                  PK DEVELOPERS
                </span>
                <p className="text-[10px] tracking-widest uppercase text-stone-400 font-medium">
                  Properties & Real Estate
                </p>
              </div>
            </Link>

            <p className="text-sm text-stone-400 leading-relaxed">
              PK Developers is a premier real estate consultancy and property dealing firm delivering verified residential villas, commercial spaces, and approved layout plots with 100% clear titles.
            </p>

            <div className="pt-2 text-xs text-stone-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>100% Clear Title Verification Guarantee</span>
            </div>
          </div>

          {/* Col 2: Properties & Inventory */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Properties & Deals
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/projects" className="text-stone-400 hover:text-amber-400 transition-colors">
                  Verified Properties Inventory
                </Link>
              </li>
              <li>
                <Link to="/projects/residential" className="text-stone-400 hover:text-amber-400 transition-colors">
                  Residential Villas & Penthouses
                </Link>
              </li>
              <li>
                <Link to="/projects/commercial" className="text-stone-400 hover:text-amber-400 transition-colors">
                  Commercial Offices & Retail
                </Link>
              </li>
              <li>
                <Link to="/services/renovation-remodeling" className="text-stone-400 hover:text-amber-400 transition-colors">
                  Plots & Strategic Land Parcels
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-amber-500 hover:text-amber-400 transition-colors font-medium flex items-center gap-1 pt-1">
                  <span>Explore All Services</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Advisory */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="text-stone-400 hover:text-amber-400 transition-colors">
                  About PK Developers
                </Link>
              </li>
              <li>
                <Link to="/process" className="text-stone-400 hover:text-amber-400 transition-colors">
                  6-Step Transaction Process
                </Link>
              </li>
              <li>
                <Link to="/why-choose-us" className="text-stone-400 hover:text-amber-400 transition-colors">
                  Why Choose PK Developers
                </Link>
              </li>
              <li>
                <Link to="/get-a-quote" className="text-stone-400 hover:text-amber-400 transition-colors">
                  Property Requirement Inquiry
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-stone-400 hover:text-amber-400 transition-colors">
                  Contact Advisory Desk
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Advisory */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Property Advisory Desk
            </h4>
            <div className="space-y-3 text-sm text-stone-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{contactInfo.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-amber-400 transition-colors">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-amber-400 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1 text-xs text-stone-500">
                <Clock className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                <span>{contactInfo.businessHours}</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/get-a-quote"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs shadow-lg transition-all"
              >
                <span>Inquire Property</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800/80 bg-stone-950 py-6 text-xs text-stone-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>
            © {new Date().getFullYear()} PK Developers. All Rights Reserved. 100% Clear Titles & Verified Real Estate.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-stone-300 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-stone-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/sitemap" className="hover:text-stone-300 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

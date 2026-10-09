import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { contactInfo } from '../../data/companyData';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  tagline?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  title = 'Ready to Build With Purpose & Precision?',
  subtitle = 'Whether you are planning a bespoke residential estate or a landmark corporate facility, our team is equipped to turn architectural blueprints into lasting reality.',
  primaryButtonText = 'Start Your Project',
  primaryButtonLink = '/get-a-quote',
  secondaryButtonText = 'Explore Projects',
  secondaryButtonLink = '/projects',
  tagline = 'PK Developers Engineering & Construction'
}) => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background with geometric architectural glow */}
      <div className="absolute inset-0 bg-slate-900 border-y border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-600/20 via-slate-900/90 to-slate-950" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-6">
          <ShieldCheck className="w-4 h-4 text-blue-400" />
          <span>{tagline}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {title}
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        {/* Feature bullets */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-200">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-400" />
            Transparent itemized BOQ
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-400" />
            Milestone-based progress audits
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-blue-400" />
            10-Year structural guarantee
          </span>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={primaryButtonLink}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-base shadow-xl shadow-blue-500/30 transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>{primaryButtonText}</span>
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            to={secondaryButtonLink}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/25 font-semibold text-base transition-all duration-200"
          >
            <span>{secondaryButtonText}</span>
          </Link>
        </div>

        {/* Direct phone badge */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400">
          <Phone className="w-3.5 h-3.5 text-blue-400" />
          <span>Direct consultation hotline:</span>
          <a href={`tel:${contactInfo.phoneRaw}`} className="text-white hover:text-blue-300 font-medium underline underline-offset-4">
            {contactInfo.phone}
          </a>
        </div>
      </div>
    </section>
  );
};

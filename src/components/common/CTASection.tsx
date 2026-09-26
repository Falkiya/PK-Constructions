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
      <div className="absolute inset-0 bg-stone-900 border-y border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-stone-900/50 to-stone-950" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-6">
          <ShieldCheck className="w-4 h-4 text-amber-500" />
          <span>{tagline}</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
          {title}
        </h2>

        <p className="mt-4 text-base sm:text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        {/* Feature bullets */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-stone-300">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            Transparent itemized BOQ
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            Milestone-based progress audits
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400" />
            10-Year structural guarantee
          </span>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={primaryButtonLink}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-base shadow-xl shadow-amber-500/25 transition-all duration-200 hover:-translate-y-0.5"
          >
            <span>{primaryButtonText}</span>
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            to={secondaryButtonLink}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-stone-800/80 hover:bg-stone-800 text-stone-200 hover:text-white border border-stone-700 font-semibold text-base transition-all duration-200"
          >
            <span>{secondaryButtonText}</span>
          </Link>
        </div>

        {/* Direct phone badge */}
        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-stone-400">
          <Phone className="w-3.5 h-3.5 text-amber-500" />
          <span>Direct consultation hotline:</span>
          <a href={`tel:${contactInfo.phone}`} className="text-white hover:text-amber-400 font-medium underline underline-offset-4">
            {contactInfo.phone}
          </a>
        </div>
      </div>
    </section>
  );
};

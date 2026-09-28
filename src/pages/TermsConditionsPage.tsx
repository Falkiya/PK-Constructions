import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';

export const TermsConditionsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Terms & Conditions | PK Developers"
        description="Terms and conditions governing website use and civil engineering project tendering with PK Developers."
        canonicalPath="/terms-and-conditions"
      />

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-100">
            <ShieldCheck className="w-3.5 h-3.5" />
            Contractual Guidelines
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8">
            Terms & Conditions
          </h1>

          <div className="space-y-6 text-sm text-slate-600 leading-relaxed border-t border-slate-200 pt-6">
            <p>
              Welcome to PK Developers. By accessing this website or submitting project enquiries, you agree to comply with and be bound by the following terms and conditions.
            </p>

            <h3 className="text-lg font-bold text-slate-900 pt-4">1. Estimates and Bill of Quantities (BOQ)</h3>
            <p>
              Preliminary estimates, square-foot cost calculators, and online budget ranges provided on this website are indicative and intended for initial conceptual feasibility. Formal contracts, binding project timelines, and legally enforceable milestone payment schedules are governed exclusively by executed Master Construction Agreements and signed Bill of Quantities (BOQ).
            </p>

            <h3 className="text-lg font-bold text-slate-900 pt-4">2. Intellectual Property</h3>
            <p>
              All 3D architectural renders, site photographs, custom layouts, structural diagrams, and technical documentation displayed on this website remain the proprietary intellectual property of PK Developers and our respective design partners. Unauthorized reproduction or tendering usage is strictly prohibited.
            </p>

            <h3 className="text-lg font-bold text-slate-900 pt-4">3. Statutory Approvals & Sanctions</h3>
            <p>
              While PK Developers provides comprehensive municipal liaison services, final sanction approvals remain subject to the regulatory discretion of local planning authorities (e.g. BBMP, BDA, RERA, Environmental Boards).
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

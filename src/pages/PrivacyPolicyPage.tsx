import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Privacy Policy | PK Developers"
        description="Privacy policy and data protection principles of PK Developers."
        canonicalPath="/privacy-policy"
      />

      <section className="py-24 bg-stone-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            Legal & Governance
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-8">
            Privacy Policy
          </h1>

          <div className="space-y-6 text-sm text-stone-300 leading-relaxed border-t border-stone-800 pt-6">
            <p>
              At PK Developers (“we”, “us”, or “our”), we respect your privacy and are committed to protecting the personal and project-related information you entrust to us. This Privacy Policy outlines our procedures regarding the collection, use, and disclosure of information gathered through our website and client consultation channels.
            </p>

            <h3 className="text-lg font-bold text-white pt-4">1. Information We Collect</h3>
            <p>
              When you submit a consultation request, request a quote, or contact our engineering desk, we collect information including your full name, telephone number, email address, proposed project location, estimated built-up area, and architectural brief.
            </p>

            <h3 className="text-lg font-bold text-white pt-4">2. Use of Information</h3>
            <p>
              Your information is exclusively utilized to prepare preliminary civil cost estimates, conduct geotechnical and zoning feasibility reviews, communicate project updates, and arrange on-site inspections. We do not sell, rent, or trade your data to third-party marketing services.
            </p>

            <h3 className="text-lg font-bold text-white pt-4">3. Confidentiality of Architectural Blueprints</h3>
            <p>
              All architectural blueprints, cadastral land surveys, structural drawings, and client budget parameters submitted to PK Developers are maintained under strict confidentiality protocols.
            </p>

            <h3 className="text-lg font-bold text-white pt-4">4. Contact For Privacy Matters</h3>
            <p>
              For inquiries regarding your personal data or to request data deletion, contact our privacy desk at <span className="text-amber-400 font-mono">privacy@pkdevelopers.com</span>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

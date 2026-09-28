import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  Sparkles, 
  Send,
  FileCheck2,
  Calendar,
  Layers,
  Building,
  Home,
  Tag
} from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { contactInfo } from '../data/companyData';

export const GetAQuotePage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [submitted, setSubmitted] = useState<boolean>(false);

  // Form State
  const [formData, setFormData] = useState({
    // Step 1: Your Details
    fullName: '',
    phone: '',
    email: '',
    // Step 2: Property Requirements
    requirementType: 'Buy Luxury Villa / House',
    location: '',
    approximateArea: '',
    transactionIntent: 'Buying / Investing', // Buying / Investing or Selling / Listing
    // Step 3: Budget & Timeline
    budgetTier: '',
    timelinePreference: 'Immediate (Ready to Move / 30 Days)',
    // Step 4: Specific Requirements
    requirements: '',
    possessionPreference: 'Ready to Move / Immediate'
  });

  const nextStep = () => {
    if (currentStep === 1) {
      if (!formData.fullName || !formData.phone || !formData.email) {
        alert('Please complete all contact details.');
        return;
      }
    }
    if (currentStep === 2) {
      if (!formData.location) {
        alert('Please specify your preferred property location.');
        return;
      }
    }
    if (currentStep === 3) {
      if (!formData.budgetTier) {
        alert('Please select a budget framework or preference.');
        return;
      }
    }
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleFinalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const budgetOptions = [
    { id: 'tier-1', title: '₹50 Lakhs – ₹1.5 Cr', desc: 'Approved villa plots, gated layout land, starter residential properties' },
    { id: 'tier-2', title: '₹1.5 Cr – ₹4.0 Cr', desc: 'Premium gated community villas, luxury 3/4 BHK apartments' },
    { id: 'tier-3', title: '₹4.0 Cr – ₹10 Cr', desc: 'Ultra-luxury designer estates, penthouses, high-street retail spaces' },
    { id: 'tier-4', title: '₹10 Cr+', desc: 'Commercial tech parks, corporate buildings, large development land parcels' },
    { id: 'tier-5', title: 'Custom / High-Yield Portfolio', desc: 'Pre-leased institutional assets & tailored real estate investments' }
  ];

  return (
    <>
      <SEOHead
        title="Property Inquiry & Real Estate Advisory | PK Developers"
        description="Submit your property requirements to receive verified clear-title listings, market valuation reports, and personalized real estate guidance from PK Developers."
        canonicalPath="/get-a-quote"
      />

      {/* HERO */}
      <section className="relative py-24 bg-slate-900 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
            alt="Property Inquiry PK Developers"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/90" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
            Property Consultation & Inquiry
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            “Find Your Ideal Property.”
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Share your property buying, selling, leasing, or investment requirements below to receive a curated portfolio of verified, clear-title properties.
          </p>
        </div>
      </section>

      {/* MULTI-STEP FORM CONTAINER */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* STEP PROGRESS INDICATOR */}
          {!submitted && (
            <div className="mb-12">
              <div className="flex items-center justify-between max-w-2xl mx-auto">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                        currentStep === step
                          ? 'bg-blue-600 text-white ring-4 ring-blue-500/20 shadow-lg shadow-blue-500/30'
                          : currentStep > step
                          ? 'bg-emerald-600 text-white'
                          : 'bg-white border border-slate-300 text-slate-400 shadow-sm'
                      }`}
                    >
                      {currentStep > step ? <CheckCircle2 className="w-5 h-5" /> : step}
                    </div>
                    <span className="text-[11px] font-medium text-slate-500 mt-2">
                      {step === 1 && 'Contact'}
                      {step === 2 && 'Property'}
                      {step === 3 && 'Budget'}
                      {step === 4 && 'Details'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FORM CARD */}
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-6 animate-in zoom-in-95 duration-300">
                <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-3xl font-extrabold text-slate-900">
                  Property Inquiry Received!
                </h2>
                <p className="text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
                  Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Our senior real estate advisor has received your property request and will contact you within <strong>2 business hours</strong> with verified property options.
                </p>

                <div className="max-w-md mx-auto p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2">
                  <div className="flex justify-between text-slate-500">
                    <span>Requirement:</span>
                    <span className="text-slate-900 font-medium">{formData.requirementType}</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Target Location:</span>
                    <span className="text-slate-900 font-medium">{formData.location}</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Budget Tier:</span>
                    <span className="text-blue-600 font-semibold">{formData.budgetTier}</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    to="/"
                    className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all"
                  >
                    Back to Home
                  </Link>
                  <Link
                    to="/projects"
                    className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium text-sm border border-slate-200 transition-all"
                  >
                    Explore Properties
                  </Link>
                </div>
              </div>
            ) : (
              <div>
                {/* STEP 1: YOUR DETAILS */}
                {currentStep === 1 && (
                  <div className="space-y-6 animate-in fade-in duration-200">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-1">Step 1 — Your Details</h3>
                      <p className="text-xs text-slate-500">Provide your contact coordinates for customized property recommendations.</p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Anand Murthy"
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+91 98765 43210"
                            className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="anand@example.com"
                            className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2: PROPERTY REQUIREMENTS */}
                {currentStep === 2 && (
                  <div className="space-y-6 animate-in fade-in duration-200">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-1">Step 2 — Property Requirement</h3>
                      <p className="text-xs text-slate-500">Tell us what type of property you are looking for.</p>
                    </div>

                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Property Category *
                          </label>
                          <select
                            value={formData.requirementType}
                            onChange={(e) => setFormData({ ...formData, requirementType: e.target.value })}
                            className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all"
                          >
                            <option value="Buy Luxury Villa / House">Buy Luxury Villa / House</option>
                            <option value="Buy Premium Apartment / Penthouse">Buy Luxury Apartment / Penthouse</option>
                            <option value="Lease Commercial Office Space">Lease Commercial Office Space</option>
                            <option value="Buy Commercial Showroom / Retail Space">Buy Commercial Showroom / Retail</option>
                            <option value="Buy Approved Plot / Land Parcel">Buy Approved Plot / Land Parcel</option>
                            <option value="Sell My Property">Sell My Property With PK Developers</option>
                            <option value="Real Estate Investment / Pre-Leased">Real Estate Investment / Pre-Leased Asset</option>
                            <option value="Turnkey Villa Construction on My Plot">Turnkey Villa Construction on My Plot</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Transaction Intent *
                          </label>
                          <div className="grid grid-cols-2 gap-2">
                            <button
                              type="button"
                              onClick={() => setFormData({ ...formData, transactionIntent: 'Buying / Investing' })}
                              className={`py-3 px-3 rounded-xl text-xs font-bold border transition-all ${
                                formData.transactionIntent === 'Buying / Investing'
                                  ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                              }`}
                            >
                              Buying / Investing
                            </button>
                            <button
                              type="button"
                              onClick={() => setFormData({ ...formData, transactionIntent: 'Selling / Listing' })}
                              className={`py-3 px-3 rounded-xl text-xs font-bold border transition-all ${
                                formData.transactionIntent === 'Selling / Listing'
                                  ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                              }`}
                            >
                              Selling / Listing
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Target Location / Pin Code *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            placeholder="e.g. Whitefield, Indiranagar, Sarjapur, ORR"
                            className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Approximate Size / Configuration
                          </label>
                          <input
                            type="text"
                            value={formData.approximateArea}
                            onChange={(e) => setFormData({ ...formData, approximateArea: e.target.value })}
                            placeholder="e.g. 4BHK Villa / 2,400 sq.ft Plot / 10,000 sq.ft Office"
                            className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: BUDGET & TIMELINE */}
                {currentStep === 3 && (
                  <div className="space-y-6 animate-in fade-in duration-200">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-1">Step 3 — Budget & Timeline</h3>
                      <p className="text-xs text-slate-500">Select your intended budget framework to match with suitable inventory.</p>
                    </div>

                    <div className="space-y-3">
                      {budgetOptions.map((opt) => (
                        <div
                          key={opt.id}
                          onClick={() => setFormData({ ...formData, budgetTier: opt.title })}
                          className={`p-4 rounded-xl border cursor-pointer transition-all ${
                            formData.budgetTier === opt.title
                              ? 'bg-blue-50 border-blue-500 text-slate-900 shadow-sm'
                              : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-700'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-sm text-slate-900">{opt.title}</span>
                            <div
                              className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                                formData.budgetTier === opt.title
                                  ? 'border-blue-600 bg-blue-600'
                                  : 'border-slate-300'
                              }`}
                            >
                              {formData.budgetTier === opt.title && (
                                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                              )}
                            </div>
                          </div>
                          <p className="text-xs text-slate-500 mt-1">{opt.desc}</p>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Purchase / Possession Timeline
                      </label>
                      <select
                        value={formData.timelinePreference}
                        onChange={(e) => setFormData({ ...formData, timelinePreference: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all"
                      >
                        <option value="Immediate (Ready to Move / 30 Days)">Immediate (Ready to Move / 30 Days)</option>
                        <option value="1 – 3 Months">1 – 3 Months</option>
                        <option value="3 – 6 Months">3 – 6 Months</option>
                        <option value="Exploring & Market Evaluation">Exploring & Market Evaluation</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* STEP 4: SPECIFIC REQUIREMENTS */}
                {currentStep === 4 && (
                  <form onSubmit={handleFinalSubmit} className="space-y-6 animate-in fade-in duration-200">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-1">Step 4 — Specific Preferences</h3>
                      <p className="text-xs text-slate-500">Share any specific amenities, road width, Vastu preferences, or deal parameters.</p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Specific Requirements / Remarks
                        </label>
                        <textarea
                          rows={4}
                          value={formData.requirements}
                          onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                          placeholder="e.g. Prefer east-facing villa with private garden, minimum 40ft road width, gated community with clubhouse, or pre-leased office with 9% ROI..."
                          className="w-full px-4 py-3.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all"
                        />
                      </div>

                      <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-blue-700">
                          <ShieldCheck className="w-4 h-4 text-blue-600" />
                          <span>PK Developers Fiduciary Pledge</span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          Your contact information and requirements remain 100% confidential. We only share verified clear-title properties directly from authentic owners and institutional builders with zero spam.
                        </p>
                      </div>
                    </div>

                    {/* Step Navigation Controls */}
                    <div className="pt-4 flex items-center justify-between border-t border-slate-200">
                      <button
                        type="button"
                        onClick={prevStep}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold border border-slate-200 transition-all"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>

                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-xl shadow-blue-500/20 transition-all hover:scale-105 active:scale-95"
                      >
                        <span>Submit Property Inquiry</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                )}

                {/* Steps 1-3 Navigation Controls */}
                {currentStep < 4 && (
                  <div className="pt-6 mt-6 flex items-center justify-between border-t border-slate-200">
                    {currentStep > 1 ? (
                      <button
                        type="button"
                        onClick={prevStep}
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold border border-slate-200 transition-all"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>
                    ) : (
                      <div />
                    )}

                    <button
                      type="button"
                      onClick={nextStep}
                      className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-xl shadow-blue-500/20 transition-all hover:scale-105 active:scale-95 ml-auto"
                    >
                      <span>Continue</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

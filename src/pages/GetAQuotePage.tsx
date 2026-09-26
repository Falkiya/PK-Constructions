import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  Sparkles, 
  Home, 
  Building2, 
  Hammer, 
  Compass, 
  Send,
  FileCheck2,
  Calendar,
  Layers
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
    // Step 2: Project Details
    projectType: 'Residential Construction',
    location: '',
    approximateArea: '',
    constructionNature: 'New Construction', // New Construction or Renovation
    // Step 3: Budget
    budgetTier: '',
    timelinePreference: 'Immediate (Within 30 Days)',
    // Step 4: Requirements
    requirements: '',
    hasArchitecturalDrawings: 'No / Need PK Architects'
  });

  const nextStep = () => {
    if (currentStep === 1) {
      if (!formData.fullName || !formData.phone || !formData.email) {
        alert('Please complete all contact details.');
        return;
      }
    }
    if (currentStep === 2) {
      if (!formData.location || !formData.approximateArea) {
        alert('Please provide project location and approximate area.');
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
    { id: 'tier-1', title: 'Consultation & Planning Stage', desc: 'Seeking feasibility, soil testing & initial budgeting' },
    { id: 'tier-2', title: 'Standard Luxury Specification', desc: 'High-grade RCC, premium vitrified/granite, branded fittings' },
    { id: 'tier-3', title: 'Ultra-Luxury Bespoke Specification', desc: 'Post-tensioned spans, Italian marble, custom glass & smart automation' },
    { id: 'tier-4', title: 'Commercial & Institutional Scale', desc: 'High-rise structural steel, unitized curtain walling, Grade-A finish' },
    { id: 'tier-5', title: 'Custom Budget Discussion', desc: 'Direct technical consultation with PK estimating director' }
  ];

  return (
    <>
      <SEOHead
        title="Request a Quote & Cost Estimation | PK Developers"
        description="Submit your construction requirements for a comprehensive feasibility review, itemized Bill of Quantities (BOQ), and timeline roadmap from PK Developers."
        canonicalPath="/get-a-quote"
      />

      {/* HERO */}
      <section className="relative py-24 bg-stone-950 overflow-hidden border-b border-stone-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1541888946425-d0fbb186156f?auto=format&fit=crop&w=2000&q=80"
            alt="Request a Construction Quote"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950/90" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-6">
            Lead Generation & Estimation
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            “Tell Us About Your Project.”
          </h1>
          <p className="mt-4 text-base sm:text-lg text-stone-300 max-w-2xl mx-auto leading-relaxed">
            Complete our multi-step lead intake form below to receive a disciplined project assessment, budget feasibility model, and architectural roadmap.
          </p>
        </div>
      </section>

      {/* MULTI-STEP FORM CONTAINER */}
      <section className="py-20 bg-stone-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* STEP PROGRESS INDICATOR */}
          {!submitted && (
            <div className="mb-12">
              <div className="flex items-center justify-between mb-4">
                {['Your Details', 'Project Details', 'Budget', 'Requirements', 'Submission'].map((name, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div
                      className={`w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm transition-all ${
                        currentStep > idx + 1
                          ? 'bg-emerald-500 text-stone-950'
                          : currentStep === idx + 1
                          ? 'bg-amber-500 text-stone-950 ring-4 ring-amber-500/20 shadow-lg'
                          : 'bg-stone-900 border border-stone-800 text-stone-500'
                      }`}
                    >
                      {currentStep > idx + 1 ? '✓' : `0${idx + 1}`}
                    </div>
                    <span className="text-[10px] sm:text-xs font-semibold mt-2 hidden sm:block text-stone-400">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
              <div className="w-full bg-stone-900 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-amber-500 h-full transition-all duration-300"
                  style={{ width: `${((currentStep - 1) / 4) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* FORM CARD */}
          <div className="p-8 sm:p-12 rounded-3xl bg-stone-900 border border-stone-800 shadow-2xl">
            {submitted ? (
              /* CONFIRMATION STATE */
              <div className="py-12 text-center space-y-6 animate-in fade-in duration-300">
                <div className="w-20 h-20 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/20">
                  <FileCheck2 className="w-10 h-10" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs uppercase font-mono tracking-wider text-amber-500 font-bold block">
                    Submission Confirmed
                  </span>
                  <h3 className="text-3xl font-extrabold text-white">
                    Thank You, {formData.fullName}!
                  </h3>
                  <p className="text-base text-stone-300 max-w-lg mx-auto leading-relaxed">
                    Your project enquiry has been registered in the PK Developers engineering queue. A senior structural consultant will review your site parameters and contact you at <span className="text-amber-400 font-semibold">{formData.phone}</span> within 2 to 4 business hours.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-stone-950 border border-stone-800 max-w-md mx-auto text-left text-xs space-y-2">
                  <div className="flex justify-between text-stone-400">
                    <span>Project Type:</span>
                    <span className="text-white font-medium">{formData.projectType} ({formData.constructionNature})</span>
                  </div>
                  <div className="flex justify-between text-stone-400">
                    <span>Location:</span>
                    <span className="text-white font-medium">{formData.location}</span>
                  </div>
                  <div className="flex justify-between text-stone-400">
                    <span>Approx Area:</span>
                    <span className="text-white font-medium">{formData.approximateArea}</span>
                  </div>
                  <div className="flex justify-between text-stone-400">
                    <span>Budget Tier:</span>
                    <span className="text-amber-400 font-medium">{formData.budgetTier}</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    to="/"
                    className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm transition-all"
                  >
                    Back to Home
                  </Link>
                  <Link
                    to="/projects"
                    className="px-6 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-white font-medium text-sm transition-all"
                  >
                    Explore Projects
                  </Link>
                </div>
              </div>
            ) : (
              <div>
                {/* STEP 1: YOUR DETAILS */}
                {currentStep === 1 && (
                  <div className="space-y-6 animate-in fade-in duration-200">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">Step 1 — Your Details</h3>
                      <p className="text-xs text-stone-400">Provide your contact coordinates for project communication.</p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. Anand Murthy"
                          className="w-full px-4 py-3.5 rounded-xl bg-stone-950 border border-stone-800 text-white placeholder-stone-600 text-sm focus:outline-none focus:border-amber-500"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-1.5">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+91 98765 43210"
                            className="w-full px-4 py-3.5 rounded-xl bg-stone-950 border border-stone-800 text-white placeholder-stone-600 text-sm focus:outline-none focus:border-amber-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-1.5">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="anand@example.com"
                            className="w-full px-4 py-3.5 rounded-xl bg-stone-950 border border-stone-800 text-white placeholder-stone-600 text-sm focus:outline-none focus:border-amber-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2: PROJECT DETAILS */}
                {currentStep === 2 && (
                  <div className="space-y-6 animate-in fade-in duration-200">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">Step 2 — Project Details</h3>
                      <p className="text-xs text-stone-400">Tell us what and where you are planning to build.</p>
                    </div>

                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-1.5">
                            Project Type *
                          </label>
                          <select
                            value={formData.projectType}
                            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                            className="w-full px-4 py-3.5 rounded-xl bg-stone-950 border border-stone-800 text-white text-sm focus:outline-none focus:border-amber-500"
                          >
                            <option value="Residential Construction">Residential Luxury Villa</option>
                            <option value="Independent House">Independent Bungalow</option>
                            <option value="Apartment Building">Multi-Unit Apartments</option>
                            <option value="Commercial Office">Commercial Office Complex</option>
                            <option value="Retail Facility">Retail / Lifestyle Showroom</option>
                            <option value="Renovation & Remodeling">Renovation & Remodeling</option>
                            <option value="Architecture & Planning">Architecture & Planning Only</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-1.5">
                            Nature of Work *
                          </label>
                          <div className="grid grid-cols-2 gap-2">
                            <button
                              type="button"
                              onClick={() => setFormData({ ...formData, constructionNature: 'New Construction' })}
                              className={`py-3 px-3 rounded-xl text-xs font-bold border transition-all ${
                                formData.constructionNature === 'New Construction'
                                  ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-md'
                                  : 'bg-stone-950 text-stone-300 border-stone-800 hover:border-stone-700'
                              }`}
                            >
                              New Construction
                            </button>
                            <button
                              type="button"
                              onClick={() => setFormData({ ...formData, constructionNature: 'Renovation' })}
                              className={`py-3 px-3 rounded-xl text-xs font-bold border transition-all ${
                                formData.constructionNature === 'Renovation'
                                  ? 'bg-amber-500 text-stone-950 border-amber-400 shadow-md'
                                  : 'bg-stone-950 text-stone-300 border-stone-800 hover:border-stone-700'
                              }`}
                            >
                              Renovation / Retrofit
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-1.5">
                            Plot / Project Location *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            placeholder="e.g. Indiranagar, Bengaluru or Mysore"
                            className="w-full px-4 py-3.5 rounded-xl bg-stone-950 border border-stone-800 text-white placeholder-stone-600 text-sm focus:outline-none focus:border-amber-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-1.5">
                            Approximate Built-up Area *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.approximateArea}
                            onChange={(e) => setFormData({ ...formData, approximateArea: e.target.value })}
                            placeholder="e.g. 6,500 sq.ft or 2,400 sq.ft plot"
                            className="w-full px-4 py-3.5 rounded-xl bg-stone-950 border border-stone-800 text-white placeholder-stone-600 text-sm focus:outline-none focus:border-amber-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: BUDGET */}
                {currentStep === 3 && (
                  <div className="space-y-6 animate-in fade-in duration-200">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">Step 3 — Budget Framework</h3>
                      <p className="text-xs text-stone-400">Select your intended investment range or project tier.</p>
                    </div>

                    <div className="space-y-3">
                      {budgetOptions.map((opt) => (
                        <div
                          key={opt.id}
                          onClick={() => setFormData({ ...formData, budgetTier: opt.title })}
                          className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                            formData.budgetTier === opt.title
                              ? 'bg-amber-500/10 border-amber-500 text-white shadow-lg'
                              : 'bg-stone-950 border-stone-800 text-stone-300 hover:border-stone-700'
                          }`}
                        >
                          <div>
                            <h4 className="text-sm font-bold text-white">{opt.title}</h4>
                            <p className="text-xs text-stone-400 mt-0.5">{opt.desc}</p>
                          </div>
                          <div
                            className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                              formData.budgetTier === opt.title
                                ? 'border-amber-500 bg-amber-500 text-stone-950'
                                : 'border-stone-700'
                            }`}
                          >
                            {formData.budgetTier === opt.title && <span className="text-xs font-bold">✓</span>}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-1.5">
                        Anticipated Construction Start Timeline
                      </label>
                      <select
                        value={formData.timelinePreference}
                        onChange={(e) => setFormData({ ...formData, timelinePreference: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-stone-950 border border-stone-800 text-white text-sm focus:outline-none focus:border-amber-500"
                      >
                        <option value="Immediate (Within 30 Days)">Immediate (Within 30 Days)</option>
                        <option value="1 to 3 Months">1 to 3 Months</option>
                        <option value="3 to 6 Months">3 to 6 Months</option>
                        <option value="Planning / Concept Stage (6+ Months)">Planning / Concept Stage (6+ Months)</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* STEP 4: REQUIREMENTS */}
                {currentStep === 4 && (
                  <div className="space-y-6 animate-in fade-in duration-200">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">Step 4 — Requirements & Scope</h3>
                      <p className="text-xs text-stone-400">Describe any unique architectural or structural expectations.</p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-1.5">
                          Do you already have architectural blueprints?
                        </label>
                        <select
                          value={formData.hasArchitecturalDrawings}
                          onChange={(e) => setFormData({ ...formData, hasArchitecturalDrawings: e.target.value })}
                          className="w-full px-4 py-3.5 rounded-xl bg-stone-950 border border-stone-800 text-white text-sm focus:outline-none focus:border-amber-500"
                        >
                          <option value="No / Need PK Architects">No — Need PK Developers Turnkey Architecture & Civil</option>
                          <option value="Yes / Independent Architect Drawings Ready">Yes — Working with Independent Architect, Need Civil Execution</option>
                          <option value="Have Preliminary Concept Sketches">Have preliminary sketches / rough floor plans</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-1.5">
                          Detailed Project Brief & Specific Features *
                        </label>
                        <textarea
                          rows={5}
                          required
                          value={formData.requirements}
                          onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                          placeholder="Describe specific features: e.g. swimming pool, basement home theatre, solar micro-inverter grid, specific marble finishes, timeline constraints..."
                          className="w-full px-4 py-3.5 rounded-xl bg-stone-950 border border-stone-800 text-white placeholder-stone-600 text-sm focus:outline-none focus:border-amber-500"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 5: SUBMISSION REVIEW */}
                {currentStep === 5 && (
                  <div className="space-y-6 animate-in fade-in duration-200">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">Step 5 — Submission & Verification</h3>
                      <p className="text-xs text-stone-400">Please review your submission summary before finalizing.</p>
                    </div>

                    <div className="p-6 rounded-2xl bg-stone-950 border border-stone-800 space-y-3 text-sm">
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <span className="text-stone-400">Client Name:</span>
                        <span className="text-white font-semibold text-right">{formData.fullName}</span>

                        <span className="text-stone-400">Phone:</span>
                        <span className="text-white font-semibold text-right">{formData.phone}</span>

                        <span className="text-stone-400">Email:</span>
                        <span className="text-white font-semibold text-right">{formData.email}</span>

                        <span className="text-stone-400">Project Type:</span>
                        <span className="text-amber-400 font-semibold text-right">{formData.projectType}</span>

                        <span className="text-stone-400">Nature:</span>
                        <span className="text-white font-semibold text-right">{formData.constructionNature}</span>

                        <span className="text-stone-400">Location:</span>
                        <span className="text-white font-semibold text-right">{formData.location}</span>

                        <span className="text-stone-400">Approx. Area:</span>
                        <span className="text-white font-semibold text-right">{formData.approximateArea}</span>

                        <span className="text-stone-400">Selected Budget Tier:</span>
                        <span className="text-amber-400 font-semibold text-right">{formData.budgetTier}</span>
                      </div>

                      <div className="pt-3 border-t border-stone-800">
                        <span className="text-stone-400 text-xs block mb-1">Scope Brief:</span>
                        <p className="text-xs text-stone-300 italic bg-stone-900 p-3 rounded-lg">
                          "{formData.requirements || 'No extra notes provided.'}"
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-stone-400">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>All inquiries are kept strictly confidential and covered under our non-disclosure policy.</span>
                    </div>
                  </div>
                )}

                {/* FORM CONTROLS: NEXT, PREV, SUBMIT */}
                <div className="mt-8 pt-6 border-t border-stone-800/80 flex items-center justify-between">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  {currentStep < 5 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all"
                    >
                      <span>Continue to Step 0{currentStep + 1}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleFinalSubmit}
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-stone-950 font-bold text-xs uppercase tracking-wider shadow-xl shadow-emerald-500/20 transition-all"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Project Enquiry</span>
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

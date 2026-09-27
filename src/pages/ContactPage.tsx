import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Calendar 
} from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { contactInfo } from '../../src/data/companyData';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    projectType: 'Residential Villa',
    projectSize: '',
    budgetRange: 'Select Budget Range',
    preferredStartDate: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEOHead
        title="Contact Us | Real Estate & Property Advisory | PK Developers"
        description="Get in touch with PK Developers. Speak with senior real estate consultants, schedule a private property inspection, or visit our advisory office in Bengaluru."
        canonicalPath="/contact"
      />

      {/* HERO */}
      <section className="relative py-28 bg-stone-950 overflow-hidden border-b border-stone-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
            alt="Contact PK Developers"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950/90" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-6">
            Property Advisory Desk
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            “Let’s Find Your Next Property.”
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
            Looking to buy a luxury villa, lease prime commercial tech space, invest in approved plots, or sell your property? Our property advisors are at your service.
          </p>
        </div>
      </section>

      {/* MAIN CONTACT GRID & FORM */}
      <section className="py-24 bg-stone-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Details & WhatsApp CTA (Col 5) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-500 font-bold block">
                  Headquarters & Studio
                </span>
                <h2 className="text-3xl font-extrabold text-white">
                  Get In Touch Directly
                </h2>
                <p className="text-sm text-stone-400 leading-relaxed">
                  We welcome visits to our engineering studio. Alternatively, request an engineer to conduct an on-site geotechnical inspection of your plot.
                </p>
              </div>

              {/* Information Cards */}
              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Telephone Inquiries</h3>
                    <p className="text-xs text-stone-400 mt-1">General: <a href={`tel:${contactInfo.phone}`} className="text-amber-400 hover:underline">{contactInfo.phone}</a></p>
                    <p className="text-xs text-stone-400">Direct Desk: <a href={`tel:${contactInfo.phoneAlt}`} className="text-amber-400 hover:underline">{contactInfo.phoneAlt}</a></p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Email Addresses</h3>
                    <p className="text-xs text-stone-400 mt-1">General: <a href={`mailto:${contactInfo.email}`} className="text-amber-400 hover:underline">{contactInfo.email}</a></p>
                    <p className="text-xs text-stone-400">Tenders: <a href={`mailto:${contactInfo.emailSales}`} className="text-amber-400 hover:underline">{contactInfo.emailSales}</a></p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Corporate Office</h3>
                    <p className="text-xs text-stone-400 mt-1 leading-relaxed">{contactInfo.address}</p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-stone-900 border border-stone-800 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white">Office Hours</h3>
                    <p className="text-xs text-stone-400 mt-1 leading-relaxed">{contactInfo.businessHours}</p>
                  </div>
                </div>
              </div>

              {/* Dedicated WhatsApp CTA Card */}
              <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500 text-stone-950">
                    <MessageCircle className="w-6 h-6 fill-stone-950" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Fast-Track On WhatsApp</h3>
                    <p className="text-xs text-emerald-300">Direct connection to engineering coordinators</p>
                  </div>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Need quick answers regarding construction cost per sq.ft, material grades, or site inspections?
                </p>
                <a
                  href={`https://wa.me/${contactInfo.whatsapp}?text=Hello%20PK%20Developers,%20I%20would%20like%20to%20discuss%20a%20construction%20project.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Chat With Us on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Contact Form (Col 7) */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-stone-900 border border-stone-800 shadow-2xl">
                <h3 className="text-2xl font-extrabold text-white mb-2">Project Enquiry Form</h3>
                <p className="text-xs text-stone-400 mb-8">
                  Provide your initial project parameters below. An experienced civil engineer will review and respond within 2 to 4 hours.
                </p>

                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-bold text-white">Enquiry Submitted Successfully!</h4>
                    <p className="text-sm text-stone-300 max-w-md mx-auto">
                      Thank you for contacting PK Developers. Our engineering desk has logged your project details and will call you shortly at <span className="text-amber-400 font-mono">{formData.phone || 'your phone number'}</span>.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-6 py-2.5 rounded-xl bg-stone-800 text-xs font-semibold text-stone-200 hover:bg-stone-700"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Ramesh Kumar"
                          className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white text-sm placeholder-stone-600 focus:outline-none focus:border-amber-500"
                        />
                      </div>

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
                          className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white text-sm placeholder-stone-600 focus:outline-none focus:border-amber-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="ramesh@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white text-sm placeholder-stone-600 focus:outline-none focus:border-amber-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-1.5">
                          Project Location / City *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="e.g. Whitefield, Bengaluru"
                          className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white text-sm placeholder-stone-600 focus:outline-none focus:border-amber-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-1.5">
                          Property Requirement
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white text-sm focus:outline-none focus:border-amber-500"
                        >
                          <option value="Residential Luxury Villa">Buy Luxury Villa / House</option>
                          <option value="Apartment / Penthouse">Buy Luxury Apartment / Penthouse</option>
                          <option value="Commercial Office Space">Lease Commercial Office Space</option>
                          <option value="Retail Facility">Buy Commercial Showroom / Retail</option>
                          <option value="Plots & Land">Buy Approved Plot / Land Parcel</option>
                          <option value="Sell Property">Sell My Property With PK Developers</option>
                          <option value="Real Estate Investment">Real Estate Investment / Pre-Leased</option>
                          <option value="Turnkey Construction">Turnkey Villa Construction on My Plot</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-1.5">
                          Approximate Size / Config
                        </label>
                        <input
                          type="text"
                          value={formData.projectSize}
                          onChange={(e) => setFormData({ ...formData, projectSize: e.target.value })}
                          placeholder="e.g. 4BHK Villa / 2,400 sq.ft Plot / 15,000 sq.ft Office"
                          className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white text-sm placeholder-stone-600 focus:outline-none focus:border-amber-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-1.5">
                          Budget Range
                        </label>
                        <select
                          value={formData.budgetRange}
                          onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white text-sm focus:outline-none focus:border-amber-500"
                        >
                          <option value="Select Budget Range">Select Budget Framework</option>
                          <option value="₹50 Lakhs – ₹1.5 Crores">₹50 Lakhs – ₹1.5 Crores</option>
                          <option value="₹1.5 Crores – ₹4 Crores">₹1.5 Crores – ₹4 Crores</option>
                          <option value="₹4 Crores – ₹10 Crores">₹4 Crores – ₹10 Crores</option>
                          <option value="₹10+ Crores">₹10+ Crores (Commercial / Large Estates)</option>
                          <option value="Flexible / Pre-Leased Yield">Flexible / Pre-Leased Yield</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-1.5">
                          Preferred Start Date
                        </label>
                        <input
                          type="text"
                          value={formData.preferredStartDate}
                          onChange={(e) => setFormData({ ...formData, preferredStartDate: e.target.value })}
                          placeholder="e.g. Next Month / Q4 2026"
                          className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white text-sm placeholder-stone-600 focus:outline-none focus:border-amber-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-300 mb-1.5">
                        Project Description & Scope *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your architectural aspirations, specific requirements, plot dimensions, or tendering timelines..."
                        className="w-full px-4 py-3 rounded-xl bg-stone-950 border border-stone-800 text-white text-sm placeholder-stone-600 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm uppercase tracking-wider shadow-xl shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Property Enquiry</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP PLACEHOLDER / EMBED AREA */}
      <section className="py-12 bg-stone-900 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden border border-stone-800 shadow-2xl relative h-80 sm:h-96 bg-stone-950 flex items-center justify-center">
            {/* Interactive Map UI representation */}
            <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#d97706_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="relative text-center p-6 space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center mx-auto animate-bounce">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white">PK Developers Advisory Headquarters</h3>
              <p className="text-sm text-stone-400 max-w-md mx-auto">
                {contactInfo.address}
              </p>
              <div className="pt-2">
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-xs font-semibold text-white border border-stone-700 transition-colors"
                >
                  <span>Open in Google Maps</span>
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

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
import { contactInfo, socialLinks, WEB3FORMS_ACCESS_KEY } from '../data/companyData';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Detailed Enquiry from ${formData.name} - ${formData.projectType}`,
          from_name: 'PK Developers Contact Page',
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          preferred_location: formData.location || 'Not specified',
          project_type: formData.projectType,
          plot_built_size: formData.projectSize || 'Not specified',
          budget_framework: formData.budgetRange,
          possession_timeline: formData.preferredStartDate || 'Not specified',
          message: formData.message
        })
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        setSubmitError(result.message || 'Submission failed. Please try again or WhatsApp us directly.');
      }
    } catch (err) {
      setSubmitError('Unable to send enquiry right now. Please try again or WhatsApp us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Contact Us | Real Estate & Property Advisory | PK Developers"
        description="Get in touch with PK Developers. Speak with our property consultants, schedule an on-site layout inspection, or visit our office at Al Badar Circle, Rajiv Nagar, Mysuru."
        canonicalPath="/contact"
      />

      {/* HERO */}
      <section className="relative py-28 bg-slate-900 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
            alt="Contact PK Developers"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/90" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
            Property Advisory Desk
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            “Let’s Find Your Next Property.”
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Looking to buy a residential plot, build a custom turnkey villa, or reserve a convention venue? Our team is at your service.
          </p>
        </div>
      </section>

      {/* MAIN CONTACT GRID & FORM */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Details & WhatsApp CTA (Col 5) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-bold block">
                  Headquarters & Studio
                </span>
                <h2 className="text-3xl font-extrabold text-slate-900">
                  Get In Touch Directly
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We welcome visits to our advisory office. Alternatively, request an advisor to conduct an on-site property inspection or valuation.
                </p>
              </div>

              {/* Information Cards */}
              <div className="space-y-4">
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Telephone Inquiries</h3>
                    <p className="text-xs text-slate-600 mt-1">General: <a href={`tel:${contactInfo.phoneRaw}`} className="text-blue-600 font-medium hover:underline">{contactInfo.phone}</a></p>
                    <p className="text-xs text-slate-600">Direct Desk: <a href={`tel:${contactInfo.phoneRaw}`} className="text-blue-600 font-medium hover:underline">{contactInfo.phoneAlt}</a></p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Email Addresses</h3>
                    <p className="text-xs text-slate-600 mt-1">General: <a href={`mailto:${contactInfo.email}`} className="text-blue-600 font-medium hover:underline">{contactInfo.email}</a></p>
                    <p className="text-xs text-slate-600">Advisory: <a href={`mailto:${contactInfo.emailSales}`} className="text-blue-600 font-medium hover:underline">{contactInfo.emailSales}</a></p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Corporate Office</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{contactInfo.address}</p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Office Hours</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{contactInfo.businessHours}</p>
                  </div>
                </div>
              </div>

              {/* Dedicated WhatsApp CTA Card */}
              <div className="p-6 rounded-2xl bg-white border border-emerald-200 shadow-sm space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-600 text-white">
                    <MessageCircle className="w-6 h-6 fill-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">Fast-Track On WhatsApp</h3>
                    <p className="text-xs text-emerald-600 font-medium">Direct connection to property advisors</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Need quick answers regarding property pricing, site visits, or legal title verification?
                </p>
                <a
                  href={`https://wa.me/${contactInfo.whatsapp}?text=Hello%20PK%20Developers,%20I%20would%20like%20to%20discuss%20a%20property%20deal.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Chat With Us on WhatsApp</span>
                </a>
              </div>

              {/* Official Social Media Card */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                <h3 className="text-sm font-bold text-slate-900">Follow Our Social Channels</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Stay updated with new layout releases, plot availability, construction milestones, and event schedules.
                </p>
                <div className="flex items-center gap-3 pt-1">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      title={social.name}
                      className="w-10 h-10 rounded-full bg-slate-50 hover:bg-slate-100 p-1.5 flex items-center justify-center border border-slate-200 hover:border-[#b68a5c] hover:scale-110 transition-all duration-200 shadow-2xs group"
                    >
                      <img
                        src={social.icon}
                        alt={social.name}
                        className="w-full h-full object-contain rounded-full"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form (Col 7) */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl">
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Project Enquiry Form</h3>
                <p className="text-xs text-slate-500 mb-8">
                  Provide your initial property parameters below. An experienced property consultant will review and respond within 2 to 4 hours.
                </p>

                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900">Enquiry Submitted Successfully!</h4>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Thank you for contacting PK Developers. Our property desk has logged your requirement and will call you shortly at <span className="text-blue-600 font-mono font-semibold">{formData.phone || 'your phone number'}</span>.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-6 py-2.5 rounded-xl bg-slate-100 text-xs font-semibold text-slate-700 hover:bg-slate-200 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {submitError && (
                      <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs leading-relaxed">
                        {submitError}
                      </div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Ramesh Kumar"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 91080 81321"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="ramesh@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Project Location / City *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="e.g. Rajiv Nagar, Mysuru or Belvadi, Mandya"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Property Requirement
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all"
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
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Approximate Size / Config
                        </label>
                        <input
                          type="text"
                          value={formData.projectSize}
                          onChange={(e) => setFormData({ ...formData, projectSize: e.target.value })}
                          placeholder="e.g. 4BHK Villa / 2,400 sq.ft Plot / 15,000 sq.ft Office"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Budget Range
                        </label>
                        <select
                          value={formData.budgetRange}
                          onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all"
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
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Preferred Start Date
                        </label>
                        <input
                          type="text"
                          value={formData.preferredStartDate}
                          onChange={(e) => setFormData({ ...formData, preferredStartDate: e.target.value })}
                          placeholder="e.g. Next Month / Q4 2026"
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Project Description & Scope *
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your property preferences, specific requirements, plot dimensions, or timelines..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-bold text-sm uppercase tracking-wider shadow-xl shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? 'Sending Enquiry...' : 'Submit Property Enquiry'}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE GOOGLE MAP */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl relative h-[450px] bg-slate-100">
            <iframe
              title="PK Developers Head Office Location"
              src="https://maps.google.com/maps?q=Al+Badar+Circle,+Rajiv+Nagar,+Mysuru,+Karnataka+570019&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
            {/* Floating Office Card */}
            <div className="absolute top-6 left-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-slate-100 text-left max-w-sm hidden sm:block">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 text-[11px] font-bold uppercase tracking-wider mb-2">
                <MapPin className="w-3.5 h-3.5" />
                <span>Head Office</span>
              </div>
              <h4 className="text-base font-bold text-slate-900">PK Developers</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                {contactInfo.address}
              </p>
              <div className="mt-2 text-xs font-semibold text-blue-700">
                Office Timings: {contactInfo.businessHours}
              </div>
              <div className="pt-3">
                <a
                  href="https://maps.google.com/?q=Al+Badar+Circle,+Rajiv+Nagar,+Mysuru,+Karnataka+570019"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold transition-colors"
                >
                  <span>Get Driving Directions</span>
                  <MapPin className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

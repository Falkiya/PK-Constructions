import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, 
  MessageSquare, 
  Play, 
  ShieldCheck, 
  ArrowRight, 
  Building2, 
  Home, 
  Hammer,
  Quote
} from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { CTASection } from '../components/common/CTASection';
import { testimonialsData } from '../data/companyData';

export const TestimonialsPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Client Testimonials & Project References | PK Developers"
        description="Read verified project feedback and client testimonials from residential villa owners, commercial facility directors, and institutional trustees."
        canonicalPath="/testimonials"
      />

      {/* HERO */}
      <section className="relative py-28 bg-slate-900 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
            alt="Client Testimonials"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/90" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-6">
            Client Voices & Verification
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Client Testimonials
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Real feedback from homeowners, corporate leaders, and estate trustees who entrusted their real estate requirements to PK Developers.
          </p>
        </div>
      </section>

      {/* CLIENT FEEDBACK CARDS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase font-mono tracking-wider text-blue-600 font-bold block mb-2">
              Verified Project References
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              What Our Clients Say
            </h2>
            <p className="mt-2 text-xs text-slate-500 italic">
              Note: Client identifiers are formatted as project references in compliance with client privacy protocols. Genuine client contact references available upon qualified request.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((test) => (
              <div
                key={test.id}
                className="p-8 rounded-3xl bg-white border border-slate-200 flex flex-col justify-between space-y-6 shadow-md relative"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-blue-600">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-blue-600 text-blue-600" />
                      ))}
                    </div>
                    <span className="text-[11px] font-mono text-slate-400">{test.date}</span>
                  </div>

                  <Quote className="w-8 h-8 text-blue-600/20" />

                  <p className="text-sm text-slate-700 leading-relaxed italic">
                    "{test.comment}"
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center gap-4">
                  <img
                    src={test.image}
                    alt={test.clientName}
                    className="w-12 h-12 rounded-full object-cover border border-blue-200"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">{test.clientName}</h3>
                    <p className="text-xs text-blue-600 font-medium">{test.clientRole}</p>
                    <p className="text-[11px] text-slate-500 font-mono mt-0.5">{test.projectName}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPTIONAL VIDEO TESTIMONIALS PLACEHOLDERS */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-600 text-xs font-semibold uppercase tracking-wider mb-3">
              Video Walkthroughs
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              On-Site Client Case Study Interviews
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Watch walkthroughs of finished residences and corporate facilities with the owners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Video Placeholder 1 */}
            <div className="rounded-3xl overflow-hidden bg-slate-50 border border-slate-200 shadow-md group cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                  alt="Villa Walkthrough Video"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/50 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-white ml-1" />
                  </div>
                </div>
                <span className="absolute bottom-4 left-4 px-3 py-1 rounded bg-slate-900/80 text-xs text-white font-mono">
                  14:20 Walkthrough
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  From Groundbreaking to Handover: The Lumina Villa
                </h3>
                <p className="text-xs text-slate-600 mt-2">
                  Client video documentary highlighting on-site post-tensioning, cantilever slab casting, and zero-defect handover.
                </p>
              </div>
            </div>

            {/* Video Placeholder 2 */}
            <div className="rounded-3xl overflow-hidden bg-slate-50 border border-slate-200 shadow-md group cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80"
                  alt="Commercial Tower Case Study Video"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/50 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 fill-white ml-1" />
                  </div>
                </div>
                <span className="absolute bottom-4 left-4 px-3 py-1 rounded bg-slate-900/80 text-xs text-white font-mono">
                  18:45 Case Study
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Fast-Track Commercial Tech Hub: Vertex Campus
                </h3>
                <p className="text-xs text-slate-600 mt-2">
                  Corporate facilities director shares insights into how PK Developers completed an 185,000 sq.ft building ahead of schedule.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Ready to Build With Confidence?"
        subtitle="Speak with our client references or consult with our project engineering directors."
        primaryButtonText="Request References & Consultation"
        primaryButtonLink="/get-a-quote"
        secondaryButtonText="Explore Projects"
        secondaryButtonLink="/projects"
      />
    </>
  );
};

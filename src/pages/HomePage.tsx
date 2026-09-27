import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  CheckCircle, 
  MapPin, 
  Home, 
  Building2, 
  Hammer, 
  Compass, 
  ClipboardCheck, 
  ChevronRight,
  Phone,
  Mail,
  Calendar,
  Layers,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { HeroSlider } from '../components/common/HeroSlider';
import { ProjectCard } from '../components/common/ProjectCard';
import { CTASection } from '../components/common/CTASection';
import { projectsData } from '../data/projectsData';
import { servicesData } from '../data/servicesData';
import { companyStats, companyValues, processSteps, testimonialsData, contactInfo } from '../data/companyData';
import { galleryItems } from '../data/galleryData';

export const HomePage: React.FC = () => {
  const featuredProjects = projectsData.filter((p) => p.featured).slice(0, 4);
  const previewGallery = galleryItems.slice(0, 6);

  return (
    <>
      <SEOHead
        title="PK Developers | Construction & Real Estate Development Company"
        description="PK Developers is a premier civil construction and development company delivering excellence in residential, commercial, and renovation projects with superior craftsmanship and integrity."
        canonicalPath="/"
      />

      {/* SECTION 1: HERO SLIDER */}
      <HeroSlider />

      {/* SECTION 2: COMPANY INTRODUCTION */}
      <section className="py-20 bg-stone-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                Who We Are
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Bengaluru's Trusted Real Estate Consultants & Property Dealers.
              </h2>
              <p className="text-base text-stone-300 leading-relaxed">
                At PK Properties, we connect individuals, families, and corporate enterprises with verified, clear-title real estate assets. Founded on the tenets of radical transparency, accurate fair-market valuation, and zero hidden brokerage confusion, we have established ourselves as one of the most reliable property dealing firms in South India.
              </p>
              <p className="text-base text-stone-400 leading-relaxed">
                Our in-house team of experienced property consultants, legal advocates, and technical valuation experts oversees every dimension of your deal—from 30-year mother deed title searches and RERA compliance to sub-registrar deed execution and turnkey villa construction on acquired plots.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300"
                >
                  <span>Learn more about our advisory philosophy & team</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Visual Image Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-stone-800 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                  alt="PK Properties Signature Villa"
                  className="w-full h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
                
                {/* Floating Experience Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-stone-900/90 border border-stone-800 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-extrabold text-amber-400 font-mono">15+</div>
                      <div className="text-xs text-stone-300 font-medium">Years in Real Estate</div>
                    </div>
                    <div className="h-8 w-px bg-stone-800" />
                    <div>
                      <div className="text-2xl font-extrabold text-white font-mono">500+</div>
                      <div className="text-xs text-stone-300 font-medium">Closed Property Deals</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: KEY STATISTICS */}
      <section className="py-14 bg-stone-900 border-y border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {companyStats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-amber-400 font-mono tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-white uppercase tracking-wider">
                  {stat.label}
                </div>
                <p className="text-xs text-stone-400 leading-snug hidden sm:block">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: SERVICES OVERVIEW */}
      <section className="py-24 bg-stone-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
                Our Advisory Scope
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Property & Real Estate Services
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-400 hover:text-amber-300"
            >
              <span>View All 5 Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="group relative flex flex-col bg-stone-900/60 border border-stone-800 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent" />
                  <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-stone-950/80 border border-stone-800 text-amber-400 backdrop-blur-md">
                    {service.icon === 'Home' && <Home className="w-5 h-5" />}
                    {service.icon === 'Building2' && <Building2 className="w-5 h-5" />}
                    {service.icon === 'Hammer' && <Hammer className="w-5 h-5" />}
                    {service.icon === 'Compass' && <Compass className="w-5 h-5" />}
                    {service.icon === 'ClipboardCheck' && <ClipboardCheck className="w-5 h-5" />}
                    {!['Home', 'Building2', 'Hammer', 'Compass', 'ClipboardCheck'].includes(service.icon) && (
                      <Layers className="w-5 h-5" />
                    )}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-stone-400 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between">
                    <span className="text-xs text-stone-500 font-medium">Turnkey & Managed</span>
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300"
                    >
                      <span>View Service</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: FEATURED PROPERTIES */}
      <section className="py-24 bg-stone-900/50 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
                Featured Inventory
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Featured Properties & Prime Deals
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-400 hover:text-amber-300"
              >
                <span>View Full Property Showcase</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featuredLayout={true} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-white font-semibold text-sm transition-all"
            >
              <span>Explore All Residential, Commercial & Plot Listings</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: WHY CHOOSE PK PROPERTIES */}
      <section className="py-24 bg-stone-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
              Our Differentiators
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Why Buyers & Investors Choose PK Properties
            </h2>
            <p className="mt-4 text-base text-stone-400">
              We stand apart through 30-year legal due diligence, transparent market pricing, and an unwavering commitment to dispute-free property acquisition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyValues.map((val, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-stone-900/50 border border-stone-800/80 hover:border-amber-500/30 transition-all hover:bg-stone-900/80 group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {val.title}
                </h3>
                <p className="text-sm text-stone-400 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/why-choose-us"
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300"
            >
              <span>Explore our legal verification standards & guarantees</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7: PROPERTY TRANSACTION PROCESS */}
      <section className="py-24 bg-stone-900/40 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
                Dispute-Free Experience
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Our 6-Step Property Transaction Journey
              </h2>
            </div>
            <Link
              to="/process"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-400 hover:text-amber-300"
            >
              <span>Detailed Process Breakdown</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Quick steps preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {processSteps.slice(0, 3).map((step) => (
              <div key={step.number} className="relative p-6 rounded-2xl bg-stone-900 border border-stone-800">
                <div className="text-4xl font-extrabold text-amber-500/30 font-mono mb-2">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                <h4 className="text-xs text-amber-400 font-medium mb-3">{step.subtitle}</h4>
                <p className="text-sm text-stone-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/process"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold uppercase tracking-wider"
            >
              <span>View All 9 Stages From Concept to Handover</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 8: PROJECT GALLERY PREVIEW */}
      <section className="py-24 bg-stone-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
                Visual Proof
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Site & Construction Gallery
              </h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-400 hover:text-amber-300"
            >
              <span>View Full Gallery with Lightbox</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {previewGallery.map((item) => (
              <div
                key={item.id}
                className="group relative h-64 rounded-xl overflow-hidden border border-stone-800 bg-stone-900 cursor-pointer"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[10px] text-amber-400 uppercase tracking-wider font-semibold">
                    {item.category}
                  </span>
                  <h4 className="text-sm font-bold text-white truncate">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: TESTIMONIALS */}
      <section className="py-24 bg-stone-900/60 border-y border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
              Client Feedback
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              What Our Project Partners Say
            </h2>
            <p className="mt-3 text-sm text-stone-400">
              Verified feedback from homeowners, corporate clients, and project trustees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((test) => (
              <div
                key={test.id}
                className="p-8 rounded-2xl bg-stone-900 border border-stone-800 flex flex-col justify-between space-y-6 shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(test.rating)].map((_, i) => (
                      <span key={i} className="text-base">★</span>
                    ))}
                  </div>
                  <p className="text-sm text-stone-300 leading-relaxed italic">
                    "{test.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-stone-800/80 flex items-center gap-3">
                  <img
                    src={test.image}
                    alt={test.clientName}
                    className="w-11 h-11 rounded-full object-cover border border-amber-500/30"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white">{test.clientName}</h4>
                    <p className="text-xs text-amber-400">{test.clientRole}</p>
                    <p className="text-[11px] text-stone-500">{test.projectName}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300"
            >
              <span>Read all verified project references</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 10: CALL-TO-ACTION */}
      <CTASection
        title="Start Your Project With PK Developers"
        subtitle="Book a preliminary technical consultation with our senior project engineers. We review your plot, budget constraints, and provide an initial feasibility assessment."
        primaryButtonText="Start Your Project"
        primaryButtonLink="/get-a-quote"
        secondaryButtonText="Explore Projects"
        secondaryButtonLink="/projects"
      />

      {/* SECTION 11: CONTACT PREVIEW */}
      <section className="py-20 bg-stone-950 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
                Get In Touch
              </div>
              <h2 className="text-3xl font-extrabold text-white">
                Visit Our Engineering Studio or Schedule a Site Audit
              </h2>
              <p className="text-sm text-stone-400 leading-relaxed">
                Whether you have an architectural drawing ready for tender or are evaluating land for development, our team is at your disposal.
              </p>

              <div className="space-y-3 pt-2 text-sm">
                <div className="flex items-center gap-3 text-stone-300">
                  <Phone className="w-4 h-4 text-amber-500" />
                  <a href={`tel:${contactInfo.phone}`} className="hover:text-amber-400">{contactInfo.phone}</a>
                </div>
                <div className="flex items-center gap-3 text-stone-300">
                  <Mail className="w-4 h-4 text-amber-500" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-amber-400">{contactInfo.email}</a>
                </div>
                <div className="flex items-start gap-3 text-stone-300">
                  <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300"
                >
                  <span>Go to full contact page & interactive form</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 bg-stone-900 border border-stone-800 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg font-bold text-white mb-2">Quick Consultation Request</h3>
              <p className="text-xs text-stone-400 mb-6">Leave your coordinates and an engineer will connect within 2 business hours.</p>
              
              <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for reaching out! A PK Developers engineer will contact you shortly.'); }} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-white placeholder-stone-600 text-sm focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-white placeholder-stone-600 text-sm focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1">Project Type</label>
                  <select
                    className="w-full px-3.5 py-2.5 rounded-xl bg-stone-950 border border-stone-800 text-white text-sm focus:outline-none focus:border-amber-500"
                  >
                    <option value="residential">Residential Villa / Home</option>
                    <option value="commercial">Commercial Office / Hub</option>
                    <option value="renovation">Renovation & Remodeling</option>
                    <option value="architecture">Architectural Planning Only</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm shadow-lg shadow-amber-500/20 transition-all"
                >
                  Send Consultation Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

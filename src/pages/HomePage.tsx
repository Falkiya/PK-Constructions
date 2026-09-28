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
import { companyStats, companyValues, processSteps } from '../data/companyData';
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider">
                Who We Are
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Bengaluru's Trusted Real Estate Consultants & Property Dealers.
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                At PK Developers, we connect individuals, families, and corporate enterprises with verified, clear-title real estate assets. Founded on the tenets of radical transparency, accurate fair-market valuation, and zero hidden brokerage confusion, we have established ourselves as one of the most reliable property dealing firms in South India.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Our in-house team of experienced property consultants, legal advocates, and technical valuation experts oversees every dimension of your deal—from 30-year mother deed title searches and RERA compliance to sub-registrar deed execution and turnkey villa construction on acquired plots.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800"
                >
                  <span>Learn more about our advisory philosophy & team</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Visual Image Composition */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                  alt="PK Developers Signature Villa"
                  className="w-full h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                
                {/* Floating Experience Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 border border-slate-200 shadow-xl backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-extrabold text-blue-600 font-mono">15+</div>
                      <div className="text-xs text-slate-600 font-semibold">Years in Real Estate</div>
                    </div>
                    <div className="h-8 w-px bg-slate-200" />
                    <div>
                      <div className="text-2xl font-extrabold text-slate-900 font-mono">500+</div>
                      <div className="text-xs text-slate-600 font-semibold">Closed Property Deals</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE VALUE PILLARS */}
      <section className="py-14 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {companyStats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-400 font-mono tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm font-bold text-white uppercase tracking-wider">
                  {stat.label}
                </div>
                <p className="text-xs text-slate-400 leading-snug hidden sm:block">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: SERVICES OVERVIEW */}
      <section className="py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
                Our Advisory Scope
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Property & Real Estate Services
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800"
            >
              <span>View All 5 Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="group relative flex flex-col bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-400 transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                  <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white/95 border border-slate-200 text-blue-600 shadow-md backdrop-blur-md">
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
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">Turnkey & Managed</span>
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-800"
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
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
                Featured Inventory
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Featured Properties & Prime Deals
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800"
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
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 font-bold text-sm transition-all"
            >
              <span>Explore All Residential, Commercial & Plot Listings</span>
              <ArrowRight className="w-4 h-4 text-blue-600" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: WHY CHOOSE PK DEVELOPERS */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
              Our Differentiators
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
              Why Buyers & Investors Choose PK Developers
            </h2>
            <p className="mt-4 text-base text-slate-600">
              We stand apart through 30-year legal due diligence, transparent market pricing, and an unwavering commitment to dispute-free property acquisition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyValues.map((val, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 transition-all hover:shadow-lg group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {val.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/why-choose-us"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800"
            >
              <span>Explore our legal verification standards & guarantees</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 7: PROPERTY TRANSACTION PROCESS */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
                Dispute-Free Experience
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Our 6-Step Property Transaction Journey
              </h2>
            </div>
            <Link
              to="/process"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800"
            >
              <span>Detailed Process Breakdown</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Quick steps preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {processSteps.slice(0, 3).map((step) => (
              <div key={step.number} className="relative p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all">
                <div className="text-4xl font-extrabold text-blue-200 font-mono mb-2">
                  {step.number}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{step.title}</h3>
                <h4 className="text-xs text-blue-600 font-semibold mb-3">{step.subtitle}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/process"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider"
            >
              <span>View All 9 Stages From Concept to Handover</span>
              <ArrowRight className="w-4 h-4 text-blue-600" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 8: PROJECT GALLERY PREVIEW */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-wider mb-2">
                Visual Proof
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Site & Construction Gallery
              </h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800"
            >
              <span>View Full Gallery with Lightbox</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {previewGallery.map((item) => (
              <div
                key={item.id}
                className="group relative h-64 rounded-xl overflow-hidden border border-slate-200 bg-white cursor-pointer shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[10px] text-blue-400 uppercase tracking-wider font-semibold">
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

      {/* CALL-TO-ACTION */}
      <CTASection
        title="Acquire or Sell Verified Properties With PK Developers"
        subtitle="Book a consultation with our senior real estate advisors. We evaluate your residential, commercial, or plot requirements with 100% legal title assurance."
        primaryButtonText="Inquire Property"
        primaryButtonLink="/get-a-quote"
        secondaryButtonText="Explore Verified Inventory"
        secondaryButtonLink="/projects"
      />
    </>
  );
};

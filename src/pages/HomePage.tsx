import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  Home as HomeIcon, 
  Leaf, 
  Users, 
  MapPin, 
  Star, 
  ArrowRight, 
  ShieldCheck, 
  Car, 
  Trees, 
  Droplets, 
  Zap,
  ChevronLeft,
  ChevronRight,
  Building2,
  CheckCircle2,
  Compass,
  Award,
  Clock,
  FileText,
  Calendar
} from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { contactInfo, WEB3FORMS_ACCESS_KEY } from '../data/companyData';

// Authentic project imagery from PK Developers records
const heroSlides = [
  {
    image: '/images/projects/pk-community-hall-events.png',
    title: 'PK Community Hall & Events — Convention & Banquet Center',
    location: 'Srirangapatna / Mandya, Karnataka',
  },
  {
    image: '/images/projects/pk-luxury-villa-exterior.png',
    title: 'PK Signature Luxury Villa — Turnkey Custom Architecture',
    location: 'Mandya / Mysuru Corridor, Karnataka',
  },
  {
    image: '/images/projects/pk-vip-gallery-masterplan.jpg',
    title: 'PK VIP Gallery — Boutique Plotted Enclave',
    location: 'Belvadi, Srirangapatna, Mandya',
  },
  {
    image: '/images/projects/pk-green-town-phase-2-masterplan.jpg',
    title: 'PK Green Town (Phase-2) — Master-Planned Layout',
    location: 'Belvadi, Srirangapatna, Mandya',
  }
];

export const HomePage: React.FC = () => {
  // Background slide state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide effect every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  // Quick Enquiry Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    project: 'PK Green Town (Phase-2)',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

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
          subject: `Enquiry from ${formData.name} - ${formData.project}`,
          from_name: 'PK Developers Official Website',
          name: formData.name,
          phone: formData.phone,
          email: formData.email || 'Not provided',
          project_of_interest: formData.project,
          message: formData.message || 'General project enquiry'
        })
      });

      const result = await response.json();
      if (result.success) {
        setFormSubmitted(true);
        setFormData({
          name: '',
          phone: '',
          email: '',
          project: 'PK Green Town (Phase-2)',
          message: ''
        });
      } else {
        setSubmitError(result.message || 'Submission failed. Please try again or reach out on WhatsApp.');
      }
    } catch (err) {
      setSubmitError('Unable to send enquiry right now. Please call or WhatsApp us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead
        title="PK Developers | Property Developments & Plots in Mysuru & Mandya"
        description="Explore PK Developers' property developments, residential plotted layouts, turnkey villas, and commercial venues across Mysuru and Mandya. Clear documentation and direct consultation."
        canonicalPath="/"
        keywords={[
          'PK Developers',
          'PK Developers Mysuru',
          'PK Developers Mysore',
          'Property developers in Mysuru',
          'Residential plots in Mysuru',
          'PK Green Town Phase 2',
          'PK VIP Gallery',
          'PK Signature Luxury Villa',
          'PK Community Hall Srirangapatna',
          'Plots in Belvadi Srirangapatna',
          'Rajiv Nagar Mysuru builders'
        ]}
      />

      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section 
        id="hero" 
        className="relative bg-[#091527] text-white overflow-hidden min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center"
      >
        {/* Full-bleed background slideshow */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.title}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}

          {/* Gradients to keep typography crisp and legible */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/85 via-black/55 to-black/30" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#091527] via-transparent to-black/30" />
        </div>

        {/* Foreground Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-20 w-full">
          <div className="max-w-2xl text-left space-y-5">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b68a5c]/25 border border-[#c59b6d]/40 text-[#c59b6d] text-xs font-semibold tracking-widest uppercase">
              PK DEVELOPERS
            </div>

            {/* H1 Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-serif font-bold text-white tracking-tight leading-[1.15]">
              Building Spaces. <br />
              <span className="text-[#c59b6d]">Creating Futures.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-slate-200 text-sm sm:text-base max-w-xl font-normal leading-relaxed">
              Explore PK Developers' property developments and discover the project details, locations, and information you need to make an informed decision.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#b68a5c] hover:bg-[#a67c4e] text-white font-medium text-sm transition-all shadow-md"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#enquiry"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-black/40 hover:bg-black/60 text-white font-medium text-sm border border-white/30 backdrop-blur-sm transition-all"
              >
                <span>Enquire Now</span>
              </a>

              <a
                href={`tel:${contactInfo.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-sm border border-white/20 transition-all sm:hidden"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Call Desk</span>
              </a>
            </div>

            {/* 3 Concise Trust Indicators */}
            <div className="pt-6 border-t border-white/15 grid grid-cols-3 gap-4 max-w-lg">
              <div>
                <div className="text-lg sm:text-xl font-bold text-[#c59b6d]">25+</div>
                <div className="text-[11px] text-slate-300">Years Experience <span className="text-[9px] text-slate-400 block">[Company-Reported]</span></div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-white">Verified</div>
                <div className="text-[11px] text-slate-300">Plotted Layouts &amp; Villas</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-white">Direct</div>
                <div className="text-[11px] text-slate-300">Developer Consultation</div>
              </div>
            </div>

          </div>
        </div>

        {/* Slide Controls */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 flex items-center justify-center text-white transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 flex items-center justify-center text-white transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slide Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'w-6 bg-[#b68a5c]' : 'w-2 bg-white/40'
              }`}
            />
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. FEATURED PROJECTS SECTION */}
      {/* ========================================================================= */}
      <section id="projects" className="py-20 bg-[#fafaf9] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 text-left">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#b68a5c] block mb-1">
                OUR DEVELOPMENTS
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
                Explore Our Projects
              </h2>
              <p className="mt-2 text-sm text-slate-600 max-w-xl">
                Discover our projects and review the available details to find an option that matches your requirements.
              </p>
            </div>
            <div>
              <Link
                to="/projects"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-800 hover:text-[#b68a5c] transition-colors"
              >
                <span>View Full Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* 4 Verified Project Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            
            {/* Card 1: PK Green Town (Phase-2) */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-slate-200 transition-all flex flex-col group">
              <Link to="/projects/pk-green-town-phase-2" className="relative h-52 overflow-hidden bg-slate-100 block">
                <img
                  src="/images/projects/pk-green-town-phase-2-masterplan.jpg"
                  alt="PK Green Town Phase-2 Layout Masterplan"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-700 text-white shadow">
                    Ongoing
                  </span>
                </div>
              </Link>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <Link to="/projects/pk-green-town-phase-2" className="text-lg font-bold text-slate-900 mb-1 hover:text-[#b68a5c] transition-colors block">
                    PK Green Town (Phase-2)
                  </Link>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2.5">
                    <MapPin className="w-3.5 h-3.5 text-[#b68a5c] shrink-0" />
                    <span>Belvadi, Srirangapatna, Mandya</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    Residential plotted development offering 20x30, 20x40, and 30x40 plots at Sy No. 182/1 with 40ft central road, water, and power infrastructure.
                  </p>
                  <div className="flex flex-wrap gap-1 text-[11px] font-medium text-slate-700 mb-4">
                    <span className="px-2 py-0.5 bg-slate-100 rounded">89 Total Plots</span>
                    <span className="px-2 py-0.5 bg-slate-100 rounded">40' Main Road</span>
                  </div>
                </div>
                <Link
                  to="/projects/pk-green-town-phase-2"
                  className="text-xs font-bold text-[#b68a5c] hover:underline inline-flex items-center gap-1"
                >
                  <span>View Project Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 2: PK VIP Gallery */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-slate-200 transition-all flex flex-col group">
              <Link to="/projects/pk-vip-gallery" className="relative h-52 overflow-hidden bg-slate-100 block">
                <img
                  src="/images/projects/pk-vip-gallery-masterplan.jpg"
                  alt="PK VIP Gallery Gated Layout Masterplan"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-900 text-white shadow border border-white/20">
                    <Star className="w-3 h-3 text-[#c59b6d] fill-[#c59b6d]" />
                    Featured
                  </span>
                </div>
              </Link>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <Link to="/projects/pk-vip-gallery" className="text-lg font-bold text-slate-900 mb-1 hover:text-[#b68a5c] transition-colors block">
                    PK VIP Gallery
                  </Link>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2.5">
                    <MapPin className="w-3.5 h-3.5 text-[#b68a5c] shrink-0" />
                    <span>Belvadi, Srirangapatna, Mandya</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    Exclusive gated residential enclave featuring spacious 40x60 estate plots with 28-foot paved internal avenue and dedicated utility network.
                  </p>
                  <div className="flex flex-wrap gap-1 text-[11px] font-medium text-slate-700 mb-4">
                    <span className="px-2 py-0.5 bg-slate-100 rounded">40'x60' Plots</span>
                    <span className="px-2 py-0.5 bg-slate-100 rounded">28' Avenue</span>
                  </div>
                </div>
                <Link
                  to="/projects/pk-vip-gallery"
                  className="text-xs font-bold text-[#b68a5c] hover:underline inline-flex items-center gap-1"
                >
                  <span>View Project Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 3: PK Signature Luxury Villa */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-slate-200 transition-all flex flex-col group">
              <Link to="/projects/pk-signature-luxury-villa" className="relative h-52 overflow-hidden bg-slate-100 block">
                <img
                  src="/images/projects/pk-luxury-villa-exterior.png"
                  alt="PK Signature Luxury Villa Architecture"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-900 text-white shadow">
                    Completed
                  </span>
                </div>
              </Link>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <Link to="/projects/pk-signature-luxury-villa" className="text-lg font-bold text-slate-900 mb-1 hover:text-[#b68a5c] transition-colors block">
                    PK Signature Luxury Villa
                  </Link>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2.5">
                    <MapPin className="w-3.5 h-3.5 text-[#b68a5c] shrink-0" />
                    <span>Mandya / Mysuru Corridor</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    A 3,800 sq.ft contemporary duplex villa showcasing turnkey civil construction, CNC false ceilings, Italian-finish flooring, and designer lighting.
                  </p>
                  <div className="flex flex-wrap gap-1 text-[11px] font-medium text-slate-700 mb-4">
                    <span className="px-2 py-0.5 bg-slate-100 rounded">3,800 sq.ft</span>
                    <span className="px-2 py-0.5 bg-slate-100 rounded">Turnkey Build</span>
                  </div>
                </div>
                <Link
                  to="/projects/pk-signature-luxury-villa"
                  className="text-xs font-bold text-[#b68a5c] hover:underline inline-flex items-center gap-1"
                >
                  <span>View Project Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 4: PK Community Hall & Events */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-slate-200 transition-all flex flex-col group">
              <Link to="/projects/pk-community-hall-events" className="relative h-52 overflow-hidden bg-slate-100 block">
                <img
                  src="/images/projects/pk-community-hall-events.png"
                  alt="PK Community Hall & Events Facility"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-700 text-white shadow">
                    Bookings Open
                  </span>
                </div>
              </Link>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <Link to="/projects/pk-community-hall-events" className="text-lg font-bold text-slate-900 mb-1 hover:text-[#b68a5c] transition-colors block">
                    PK Community Hall &amp; Events
                  </Link>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2.5">
                    <MapPin className="w-3.5 h-3.5 text-[#b68a5c] shrink-0" />
                    <span>Srirangapatna / Mandya</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    Multi-level convention complex with 35,000 sq.ft built-up area and 25,000 sq.ft celebration lawn designed for weddings, banquets, and social events.
                  </p>
                  <div className="flex flex-wrap gap-1 text-[11px] font-medium text-slate-700 mb-4">
                    <span className="px-2 py-0.5 bg-slate-100 rounded">35,000 sq.ft Hall</span>
                    <span className="px-2 py-0.5 bg-slate-100 rounded">25,000 sq.ft Lawn</span>
                  </div>
                </div>
                <Link
                  to="/projects/pk-community-hall-events"
                  className="text-xs font-bold text-[#b68a5c] hover:underline inline-flex items-center gap-1"
                >
                  <span>View Project Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. WHY CHOOSE PK DEVELOPERS */}
      {/* ========================================================================= */}
      <section id="why-choose-us" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#b68a5c] block mb-2">
              OUR SERVICE PRINCIPLES
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              A Clearer Way to Explore Property
            </h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              We focus on clear documentation, verified site parameters, and direct developer communication to help you evaluate real estate options with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            
            {/* Point 1 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-[#b68a5c]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-[#b68a5c] flex items-center justify-center mb-5 shadow-2xs">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Project Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Access relevant project details, master layout maps, survey numbers, and infrastructure specifications before making an enquiry.
              </p>
            </div>

            {/* Point 2 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-[#b68a5c]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-[#b68a5c] flex items-center justify-center mb-5 shadow-2xs">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Transparent Communication
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Receive clear answers about plot dimensions, road widths, available documentation, and transparent pricing terms without middle-agent layers.
              </p>
            </div>

            {/* Point 3 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-[#b68a5c]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-[#b68a5c] flex items-center justify-center mb-5 shadow-2xs">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Project-Specific Guidance
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Discuss your exact requirements directly with the developer team to select plot sizes and construction models tailored to your family's budget.
              </p>
            </div>

            {/* Point 4 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-[#b68a5c]/50 transition-all">
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-[#b68a5c] flex items-center justify-center mb-5 shadow-2xs">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Informed Decisions
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Schedule guided on-site visits to inspect physical ground progress, road formation, utility connections, and surroundings before committing.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SHORT COMPANY INTRODUCTION */}
      {/* ========================================================================= */}
      <section id="about" className="py-20 bg-[#fafaf9] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Story (Col 7) */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#b68a5c] block">
                ABOUT PK DEVELOPERS
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight leading-tight">
                Committed to Reliable Real Estate &amp; Construction
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                PK Developers focuses on residential plotted layouts, turnkey luxury villa construction, and commercial spaces across the Mysuru and Mandya corridors. With an emphasis on clear title records, transparent project documentation, and direct customer consultation, we provide the information you need before making a property decision.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Whether you are exploring residential plots at PK Green Town and PK VIP Gallery or planning a custom turnkey residence, our team provides straightforward guidance from layout inspection to deed registration.
              </p>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <span>Know More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Visual (Col 5) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white">
                <img
                  src="/images/projects/pk-luxury-villa-hall.png"
                  alt="PK Developers Interior Living Space"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="p-4 bg-white border-t border-slate-100 text-left">
                  <div className="text-xs font-bold text-slate-900">End-to-End Civil &amp; Interior Execution</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">Custom turnkey villa delivered by PK Developers</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. CLIENT ASSURANCE & FAQ */}
      {/* ========================================================================= */}
      <section id="faq" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          
          <div className="text-center mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#b68a5c] block mb-2">
              CUSTOMER ASSURANCE &amp; ANSWERS
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Clear answers to the most common questions about our layouts, approvals, and site visits.
            </p>
          </div>

          <div className="space-y-4">
            
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50">
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Where are PK Developers' active projects located?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our active plotted developments—PK Green Town Phase-2 and PK VIP Gallery—are located in Belvadi Village, Kasaba Hobli, Srirangapatna Taluk, Mandya district, approximately 3 km from the Ring Road with direct access to the Bengaluru-Mysuru highway corridor.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50">
              <h3 className="text-base font-bold text-slate-900 mb-2">
                What plot sizes are available?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                At PK Green Town Phase-2, we offer 20x30 (60 units), 20x40 (12 units), and 30x40 (17 units) plots. At PK VIP Gallery, we offer spacious 40x60 estate parcels designed for executive independent villas.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50">
              <h3 className="text-base font-bold text-slate-900 mb-2">
                What infrastructure is provided in the layouts?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Layouts feature wide asphalted roads (40-foot central road and 22-foot cross streets at Green Town; 28-foot internal avenue at VIP Gallery), round-the-clock water pipeline network, electricity connection infrastructure, roadside drainage, and avenue tree plantation.
              </p>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50">
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Can I inspect the original title deeds and layout sanction documents?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Yes. We encourage all interested buyers to visit our office in Rajiv Nagar, Mysuru, to review the survey demarcation plans, Nil-Encumbrance certificates, conversion documentation, and parent deeds in full detail.
              </p>
            </div>

          </div>

          {/* Genuine Review & Privacy Disclosure Note */}
          <div className="mt-8 p-4 rounded-xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 leading-relaxed flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Transparent Review Policy: </span>
              In accordance with our factual standards, we publish verified customer experiences with express client authorization. You can speak directly with our team or meet existing plot owners during organized site visits.
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. OFFICE LOCATION & VISITING HOURS */}
      {/* ========================================================================= */}
      <section id="location" className="py-20 bg-[#fafaf9] border-t border-slate-200 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Office Details */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-[#b68a5c] block mb-1">
                  HEAD OFFICE
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
                  Visit Our Mysuru Office
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Visit our office to discuss project availability, inspect layout plans, and review property documentation with our team.
                </p>
              </div>

              {/* Address Card */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#fbf7f2] border border-[#e8dccf] flex items-center justify-center text-[#b68a5c] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Official Address</div>
                    <div className="text-sm font-semibold text-slate-900 mt-0.5 leading-snug">
                      {contactInfo.address}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 pt-3 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-[#fbf7f2] border border-[#e8dccf] flex items-center justify-center text-[#b68a5c] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Visiting Hours</div>
                    <div className="text-sm font-semibold text-slate-900 mt-0.5">
                      {contactInfo.businessHours}
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">Monday to Sunday</div>
                  </div>
                </div>
              </div>

              {/* Direct Actions */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://maps.google.com/?q=Al+Badar+Circle,+Rajiv+Nagar,+Mysuru,+Karnataka+570019"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#b68a5c] hover:bg-[#a67c4e] text-white text-sm font-medium transition-colors shadow-sm"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>

                <a
                  href={`tel:${contactInfo.phoneRaw}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium transition-colors"
                >
                  <Phone className="w-4 h-4 fill-white" />
                  <span>Call {contactInfo.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${contactInfo.whatsapp}?text=Hello%20PK%20Developers,%20I%20would%20like%20to%20visit%20your%20office.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Column: Google Maps Embed */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200">
                <iframe
                  title="PK Developers Office Location - Al Badar Circle Rajiv Nagar Mysuru"
                  src="https://maps.google.com/maps?q=Al+Badar+Circle,+Rajiv+Nagar,+Mysuru,+Karnataka+570019&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[400px] rounded-2xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. ENQUIRE NOW SECTION */}
      {/* ========================================================================= */}
      <section id="enquiry" className="py-20 bg-[#091527] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Text */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#b68a5c] block">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
                Looking for the Right Property?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-sm">
                Tell us what you are looking for. Contact PK Developers to discuss your requirements and request information about relevant projects.
              </p>
              
              <div className="pt-4 space-y-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c59b6d] shrink-0" />
                  <span>Direct developer response without broker commissions</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c59b6d] shrink-0" />
                  <span>On-site layout inspections scheduled 7 days a week</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#c59b6d] shrink-0" />
                  <span>Transparent survey maps and title documentation</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-7">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4 bg-slate-900/70 p-8 rounded-2xl border border-white/20 backdrop-blur-sm">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white">Thank You for Your Enquiry!</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                    We have received your enquiry and our team will get in touch with you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-lg bg-[#b68a5c] hover:bg-[#a67c4e] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-slate-900/70 p-6 sm:p-8 rounded-2xl border border-white/15 backdrop-blur-sm space-y-4 text-left shadow-xl"
                >
                  {submitError && (
                    <div className="p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-200 text-xs">
                      {submitError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Full Name <span className="text-[#c59b6d]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#b68a5c] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Phone Number <span className="text-[#c59b6d]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#b68a5c] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. name@example.com"
                        className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#b68a5c] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Project of Interest <span className="text-[#c59b6d]">*</span>
                      </label>
                      <select
                        value={formData.project}
                        onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg bg-[#0f1d33] border border-white/20 text-white text-sm focus:outline-none focus:border-[#b68a5c] transition-colors"
                      >
                        <option value="PK Green Town (Phase-2)">PK Green Town (Phase-2) — Plots</option>
                        <option value="PK VIP Gallery">PK VIP Gallery — 40x60 Plots</option>
                        <option value="PK Signature Luxury Villa">PK Signature Luxury Villa — Custom Build</option>
                        <option value="PK Community Hall & Events">PK Community Hall &amp; Events — Banquet Venue</option>
                        <option value="General Property Consultation">General Property Consultation</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Your Message or Requirements (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Let us know your preferred plot dimensions, budget, or timeline..."
                      className="w-full px-4 py-2.5 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#b68a5c] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-lg bg-[#b68a5c] hover:bg-[#a67c4e] text-white font-bold text-sm tracking-wide uppercase transition-all shadow-md disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending Enquiry...' : 'Send Enquiry'}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
export default HomePage;

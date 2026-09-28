import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  MapPin, 
  Users, 
  ArrowRight, 
  Check, 
  Car, 
  Trees, 
  Smile, 
  Droplets, 
  Zap,
  Star,
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { contactInfo } from '../data/companyData';

export const HomePage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState('PK Heights (Mandya)');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    project: 'PK Heights (Mandya)',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleEnquireClick = (projectName: string) => {
    setSelectedProject(projectName);
    setFormData((prev) => ({ ...prev, project: projectName }));
    const element = document.getElementById('enquiry');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        project: 'PK Heights (Mandya)',
        message: ''
      });
    }, 5000);
  };

  return (
    <>
      <SEOHead
        title="PK Developers | Building Better Tomorrows"
        description="Thoughtfully designed homes for a better, more meaningful life. Premium residential apartments, plots, and villas in Mandya, Mysuru, and Bengaluru."
        canonicalPath="/"
      />

      {/* ========================================================================= */}
      {/* SECTION 1: HERO SECTION */}
      {/* ========================================================================= */}
      <section id="hero" className="relative bg-[#091527] text-white overflow-hidden min-h-[640px] lg:min-h-[720px] flex items-center">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#c59b6d]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-900/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2">
                <span className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#c59b6d]">
                  —— PREMIUM LIVING SPACES ——
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                A Brighter{' '}
                <span className="font-serif italic font-normal text-[#c59b6d]">
                  Tomorrow
                </span>
                <br />
                Starts Here
              </h1>

              {/* Subtitle */}
              <p className="text-slate-300 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
                Thoughtfully designed homes for a better, more meaningful life.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2 pb-6">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#c59b6d] hover:bg-[#b68a5c] text-white text-sm font-bold shadow-lg shadow-[#c59b6d]/25 transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4 fill-white" />
                  <span>Call Now</span>
                </a>

                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-transparent hover:bg-white/10 text-white text-sm font-semibold border border-white/25 transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Bottom 3 Badges */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#c59b6d]/15 border border-[#c59b6d]/30 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-[#c59b6d]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white tracking-wide">
                      Quality Construction
                    </div>
                    <div className="text-[11px] text-slate-400">Tested Materials</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#c59b6d]/15 border border-[#c59b6d]/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#c59b6d]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white tracking-wide">
                      Prime Locations
                    </div>
                    <div className="text-[11px] text-slate-400">High Growth Corridors</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#c59b6d]/15 border border-[#c59b6d]/30 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-[#c59b6d]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white tracking-wide">
                      Trusted by Families
                    </div>
                    <div className="text-[11px] text-slate-400">500+ Happy Owners</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern residential building at twilight"
                  className="w-full h-[460px] sm:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Dark gradient overlay for rich contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#091527]/80 via-transparent to-black/20" />

                {/* Script Watermark Overlay: "More Than Just Buildings" */}
                <div className="absolute top-8 right-6 select-none pointer-events-none transform -rotate-6">
                  <span className="font-script text-3xl sm:text-4xl text-[#c59b6d] drop-shadow-lg tracking-wide font-bold">
                    More Than Just Buildings
                  </span>
                </div>

                {/* Subtle golden corner accent */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#091527]/90 backdrop-blur-md border border-[#c59b6d]/30 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] tracking-widest uppercase text-[#c59b6d] font-bold block">
                      PK Signature Living
                    </span>
                    <span className="text-sm font-semibold text-white">
                      RERA Registered • Clear Titles
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#c59b6d] text-white flex items-center justify-center">
                    <Star className="w-4 h-4 fill-white" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: ABOUT PK DEVELOPERS */}
      {/* ========================================================================= */}
      <section id="about" className="py-20 lg:py-28 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Text & Metrics */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-bold tracking-[0.22em] uppercase text-[#c59b6d]">
                  ABOUT PK DEVELOPERS
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-[1.2]">
                Building Trust, Creating Communities
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                At PK Developers, we believe that a home is more than brick and mortar. It's a sanctuary where memories are built, families grow, and life flourishes. With a dedication to quality craftsmanship, timely delivery, and customer-first values, we create spaces that stand the test of time.
              </p>

              {/* 3 Metric Stats */}
              <div className="pt-4 pb-2 grid grid-cols-3 gap-4 sm:gap-6 border-y border-slate-100 py-6">
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#c59b6d] font-serif">
                    500+
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 font-semibold mt-1">
                    Happy Families
                  </div>
                </div>

                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#c59b6d] font-serif">
                    5+
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 font-semibold mt-1">
                    Ongoing Projects
                  </div>
                </div>

                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#c59b6d] font-serif">
                    10+
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 font-semibold mt-1">
                    Years of Experience
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#fbf7f2] hover:bg-[#f3e7d8] border border-[#e8dccf] text-slate-900 text-sm font-bold transition-all duration-200 hover:shadow-sm"
                >
                  <span>Know More About Us</span>
                  <ArrowRight className="w-4 h-4 text-[#c59b6d]" />
                </Link>
              </div>
            </div>

            {/* Right Column: Interior Image with Quote Overlay */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80"
                  alt="Luxury modern living space"
                  className="w-full h-[440px] object-cover"
                />

                {/* Floating Quote Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-[#e8dccf] text-center">
                  <p className="font-serif italic text-lg sm:text-xl text-slate-800 font-semibold">
                    "Better Spaces Happier People"
                  </p>
                  <p className="text-[11px] uppercase tracking-wider text-[#c59b6d] font-bold mt-1">
                    The PK Developers Philosophy
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: ONGOING & FEATURED PROJECTS */}
      {/* ========================================================================= */}
      <section id="projects" className="py-20 lg:py-28 bg-[#fafaf9] border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold tracking-[0.22em] uppercase text-[#c59b6d] block mb-2">
                OUR DEVELOPMENTS
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
                Ongoing & Featured Projects
              </h2>
            </div>
            <div>
              <Link
                to="/projects"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#c59b6d] hover:text-[#b68a5c] transition-colors"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* 3 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1: PK Heights */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200/80 transition-all duration-300 flex flex-col group">
              <div className="relative h-60 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
                  alt="PK Heights in Mandya"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-600 text-white shadow-md">
                    Ongoing
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#c59b6d]" />
                    <span>Mandya, Karnataka</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">PK Heights</h3>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                    Spacious 2 & 3 BHK apartments designed for modern living.
                  </p>

                  <div className="flex flex-wrap gap-2 text-xs text-slate-700 pb-4 border-b border-slate-100">
                    <span className="px-2.5 py-1 bg-slate-100 rounded-md font-medium">2 & 3 BHK</span>
                    <span className="px-2.5 py-1 bg-slate-100 rounded-md font-medium">Covered Parking</span>
                    <span className="px-2.5 py-1 bg-slate-100 rounded-md font-medium">Clubhouse</span>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                    Possession 2025
                  </span>
                  <button
                    type="button"
                    onClick={() => handleEnquireClick('PK Heights (Mandya)')}
                    className="inline-flex items-center gap-1 text-sm font-bold text-[#c59b6d] hover:text-[#b68a5c]"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2: PK Enclave */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200/80 transition-all duration-300 flex flex-col group">
              <div className="relative h-60 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                  alt="PK Enclave in Mysuru"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-[#091527] text-white shadow-md border border-white/20">
                    <Star className="w-3 h-3 text-[#c59b6d] fill-[#c59b6d]" />
                    <span>Featured</span>
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#c59b6d]" />
                    <span>Mysuru, Karnataka</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">PK Enclave</h3>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                    Premium residential plots in a peaceful and well-connected location.
                  </p>

                  <div className="flex flex-wrap gap-2 text-xs text-slate-700 pb-4 border-b border-slate-100">
                    <span className="px-2.5 py-1 bg-slate-100 rounded-md font-medium">Gated Layout</span>
                    <span className="px-2.5 py-1 bg-slate-100 rounded-md font-medium">Clear Titles</span>
                    <span className="px-2.5 py-1 bg-slate-100 rounded-md font-medium">1,200 - 2,400 sq.ft</span>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full">
                    Ready For Registration
                  </span>
                  <button
                    type="button"
                    onClick={() => handleEnquireClick('PK Enclave (Mysuru)')}
                    className="inline-flex items-center gap-1 text-sm font-bold text-[#c59b6d] hover:text-[#b68a5c]"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3: PK Residency */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200/80 transition-all duration-300 flex flex-col group">
              <div className="relative h-60 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
                  alt="PK Residency in Bengaluru"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-sky-600 text-white shadow-md">
                    Upcoming
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#c59b6d]" />
                    <span>Bengaluru, Karnataka</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">PK Residency</h3>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                    Modern homes with world-class amenities for a better lifestyle.
                  </p>

                  <div className="flex flex-wrap gap-2 text-xs text-slate-700 pb-4 border-b border-slate-100">
                    <span className="px-2.5 py-1 bg-slate-100 rounded-md font-medium">Prime Location</span>
                    <span className="px-2.5 py-1 bg-slate-100 rounded-md font-medium">Eco Living</span>
                    <span className="px-2.5 py-1 bg-slate-100 rounded-md font-medium">Smart Layouts</span>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full">
                    Pre-Booking Open
                  </span>
                  <button
                    type="button"
                    onClick={() => handleEnquireClick('PK Residency (Bengaluru)')}
                    className="inline-flex items-center gap-1 text-sm font-bold text-[#c59b6d] hover:text-[#b68a5c]"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: AMENITIES */}
      {/* ========================================================================= */}
      <section id="amenities" className="py-20 lg:py-28 bg-[#091527] text-white relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c59b6d]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#c59b6d] block mb-3">
            LIFESTYLE & COMFORTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            Everything You Need For a Better Life
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-16 leading-relaxed">
            Designed with modern conveniences and thoughtful infrastructure to elevate everyday living.
          </p>

          {/* 6 Gold Line Icon Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
            
            {/* 1. 24/7 Security */}
            <div className="p-6 rounded-2xl bg-[#0e1e36]/80 border border-white/10 hover:border-[#c59b6d]/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-[#c59b6d]/15 border border-[#c59b6d]/30 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-6 h-6 text-[#c59b6d]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">24/7 Security</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Manned entrance gates, perimeter security, and round-the-clock CCTV surveillance.
              </p>
            </div>

            {/* 2. Car Parking */}
            <div className="p-6 rounded-2xl bg-[#0e1e36]/80 border border-white/10 hover:border-[#c59b6d]/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-[#c59b6d]/15 border border-[#c59b6d]/30 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Car className="w-6 h-6 text-[#c59b6d]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Car Parking</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Dedicated sheltered parking spaces with wide driveways and visitor parking zones.
              </p>
            </div>

            {/* 3. Landscaped Garden */}
            <div className="p-6 rounded-2xl bg-[#0e1e36]/80 border border-white/10 hover:border-[#c59b6d]/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-[#c59b6d]/15 border border-[#c59b6d]/30 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Trees className="w-6 h-6 text-[#c59b6d]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Landscaped Garden</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Lush green serene parks, flowering shrubs, seating gazebos, and walking paths.
              </p>
            </div>

            {/* 4. Children's Play Area */}
            <div className="p-6 rounded-2xl bg-[#0e1e36]/80 border border-white/10 hover:border-[#c59b6d]/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-[#c59b6d]/15 border border-[#c59b6d]/30 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Smile className="w-6 h-6 text-[#c59b6d]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Children's Play Area</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Safe, cushioned recreational play equipment where kids can play freely.
              </p>
            </div>

            {/* 5. Rainwater Harvesting */}
            <div className="p-6 rounded-2xl bg-[#0e1e36]/80 border border-white/10 hover:border-[#c59b6d]/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-[#c59b6d]/15 border border-[#c59b6d]/30 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Droplets className="w-6 h-6 text-[#c59b6d]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Rainwater Harvesting</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Sustainable water conservation systems recharging natural groundwater reservoirs.
              </p>
            </div>

            {/* 6. Power Backup */}
            <div className="p-6 rounded-2xl bg-[#0e1e36]/80 border border-white/10 hover:border-[#c59b6d]/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-[#c59b6d]/15 border border-[#c59b6d]/30 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Zap className="w-6 h-6 text-[#c59b6d]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Power Backup</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Uninterrupted electrical backup for elevators, common areas, and individual homes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: OUR LOCATION */}
      {/* ========================================================================= */}
      <section id="location" className="py-20 lg:py-28 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Connectivity Checklist */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="inline-flex items-center gap-2">
                <span className="text-xs font-bold tracking-[0.22em] uppercase text-[#c59b6d]">
                  STRATEGIC CONNECTIVITY
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-slate-900 tracking-tight leading-[1.2]">
                Well Connected. Always Accessible.
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                Located in the prime growth corridor with seamless connectivity to key transit hubs, educational institutions, healthcare centers, and commercial hubs.
              </p>

              {/* 5 Checklist Items */}
              <div className="space-y-3.5 pt-2">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fbf7f2] border border-[#e8dccf] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#c59b6d]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">
                    Schools & Colleges <span className="text-xs font-normal text-slate-500">— Within 5-10 mins</span>
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fbf7f2] border border-[#e8dccf] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#c59b6d]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">
                    Hospitals <span className="text-xs font-normal text-slate-500">— Immediate emergency & specialty care</span>
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fbf7f2] border border-[#e8dccf] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#c59b6d]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">
                    Shopping Centers <span className="text-xs font-normal text-slate-500">— Daily essentials & retail malls</span>
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fbf7f2] border border-[#e8dccf] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#c59b6d]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">
                    Public Transport <span className="text-xs font-normal text-slate-500">— Bus stands & train connectivity</span>
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fbf7f2] border border-[#e8dccf] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#c59b6d]" />
                  </div>
                  <span className="text-sm font-semibold text-slate-800">
                    Easy Highway Access <span className="text-xs font-normal text-slate-500">— Quick link to Bangalore-Mysore expressway</span>
                  </span>
                </div>
              </div>

              {/* Get Directions Button */}
              <div className="pt-4">
                <a
                  href="https://maps.google.com/?q=Mandya,Karnataka,India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#c59b6d] hover:bg-[#b68a5c] text-white text-sm font-bold shadow-md transition-all duration-200"
                >
                  <span>Get Directions</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Google Maps Card */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200">
                <iframe
                  title="PK Developers Project Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124806.94273397984!2d76.83226955567554!3d12.525545592892955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bafa0ce70845a7d%3A0xc3b8a36ff8a0fae3!2sMandya%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="420"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[420px] rounded-3xl"
                />

                {/* Floating location info badge */}
                <div className="absolute top-4 left-4 right-4 sm:right-auto p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#c59b6d] flex items-center justify-center text-white shrink-0">
                    <MapPin className="w-5 h-5 fill-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900">PK Developers</div>
                    <div className="text-xs text-slate-500">Mandya & Mysuru Region, Karnataka</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: ENQUIRE NOW */}
      {/* ========================================================================= */}
      <section id="enquiry" className="py-20 lg:py-28 bg-[#091527] text-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-10">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#c59b6d] block mb-2">
              GET IN TOUCH
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight mb-3">
              Enquire Now
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
              Reach out to our property advisors today and book your private site visit.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-[#0e1e36] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">Thank You for Your Enquiry!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto">
                  Our Senior Property Advisor will reach out to you within 2 business hours with project brochures and pricing.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-[#c59b6d] focus:ring-1 focus:ring-[#c59b6d] text-sm"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-[#c59b6d] focus:ring-1 focus:ring-[#c59b6d] text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="e.g. ramesh@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-[#c59b6d] focus:ring-1 focus:ring-[#c59b6d] text-sm"
                    />
                  </div>

                  {/* Property Interest */}
                  <div>
                    <label htmlFor="project" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                      Property Interest *
                    </label>
                    <select
                      id="project"
                      value={formData.project}
                      onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/15 text-white focus:outline-none focus:border-[#c59b6d] focus:ring-1 focus:ring-[#c59b6d] text-sm"
                    >
                      <option value="PK Heights (Mandya)">PK Heights (Mandya, Karnataka)</option>
                      <option value="PK Enclave (Mysuru)">PK Enclave (Mysuru, Karnataka)</option>
                      <option value="PK Residency (Bengaluru)">PK Residency (Bengaluru, Karnataka)</option>
                      <option value="General Inquiry">General Property Inquiry</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Your Message / Requirements
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="Tell us about your preferred budget, BHK configuration, or timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-white/15 text-white placeholder-slate-500 focus:outline-none focus:border-[#c59b6d] focus:ring-1 focus:ring-[#c59b6d] text-sm resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2 text-center">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-4 rounded-xl bg-[#c59b6d] hover:bg-[#b68a5c] text-white text-sm font-bold shadow-lg shadow-[#c59b6d]/25 transition-all duration-200 transform hover:-translate-y-0.5"
                  >
                    <span>Submit Enquiry</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
export default HomePage;

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
  Shield, 
  Car, 
  Trees, 
  Smile, 
  Droplets, 
  Zap,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Building2,
  ShoppingBag,
  Bus,
  Navigation,
  CheckCircle2
} from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { contactInfo } from '../data/companyData';

// Full background hero slides featuring premier architectural residential developments
const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80',
    title: 'PK Heights — Luxury Apartments',
    location: 'Mandya, Karnataka',
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80',
    title: 'PK Enclave — Gated Community Villas',
    location: 'Mysuru, Karnataka',
  },
  {
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80',
    title: 'PK Residency — Modern Living',
    location: 'Bengaluru, Karnataka',
  },
  {
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80',
    title: 'PK Signature Estates — Premium Plots',
    location: 'Mysuru Expressway Corridor',
  }
];

export const HomePage: React.FC = () => {
  // Hero background slide state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide effect every 4.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    project: 'PK Heights',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        project: 'PK Heights',
        message: ''
      });
    }, 5000);
  };

  return (
    <>
      <SEOHead
        title="PK Developers | Building Better Tomorrows"
        description="Thoughtfully designed homes for a better, more meaningful life. Premium residential apartments, plots, and gated communities in Mandya, Mysuru, and Bengaluru."
        canonicalPath="/"
      />

      {/* ========================================================================= */}
      {/* SECTION 1: FULL BACKGROUND IMAGE SLIDES HERO SECTION */}
      {/* ========================================================================= */}
      <section 
        id="hero" 
        className="relative bg-[#091527] text-white overflow-hidden min-h-[640px] sm:min-h-[700px] lg:min-h-[760px] flex items-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Full-bleed background image slideshow */}
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
                className="w-full h-full object-cover object-center scale-100 transition-transform duration-7000 ease-out"
              />
            </div>
          ))}

          {/* Light, refined cover overlay so the photo slides are clearly visible while text is crisp */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/75 via-black/45 to-black/15" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#091527]/70 via-transparent to-black/25" />
        </div>

        {/* Foreground Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-20 w-full">
          <div className="max-w-2xl text-left space-y-6">
            
            {/* Eyebrow */}
            <div className="text-xs font-semibold tracking-[0.22em] uppercase text-[#c59b6d] drop-shadow-sm">
              PREMIUM LIVING SPACES ——
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-serif font-bold text-white tracking-tight leading-[1.12] drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
              A Brighter <br />
              <span className="italic font-normal text-[#c59b6d]">Tomorrow</span> <br />
              <span className="text-[#c59b6d]">Starts Here</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-100 text-sm sm:text-base max-w-lg font-normal leading-relaxed drop-shadow-[0_1px_8px_rgba(0,0,0,0.85)]">
              Thoughtfully designed homes for a better,<br className="hidden sm:inline" /> more meaningful life.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1 pb-4">
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#b68a5c] hover:bg-[#a67c4e] text-white font-medium text-sm transition-colors shadow-xl shadow-black/40"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Call Now</span>
              </a>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-black/50 hover:bg-black/70 text-white font-medium text-sm border border-white/50 backdrop-blur-sm transition-colors shadow-xl"
              >
                <MessageCircle className="w-4 h-4 text-white" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Bottom 3 Badges with sleek gold outline icons */}
            <div className="pt-6 border-t border-white/20 flex flex-wrap items-center gap-6 sm:gap-10">
              <div className="flex items-center gap-3">
                <HomeIcon className="w-5 h-5 text-[#c59b6d] shrink-0 drop-shadow" strokeWidth={2} />
                <div className="text-xs text-white leading-tight font-medium drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                  <div>Quality</div>
                  <div>Construction</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Leaf className="w-5 h-5 text-[#c59b6d] shrink-0 drop-shadow" strokeWidth={2} />
                <div className="text-xs text-white leading-tight font-medium drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                  <div>Prime</div>
                  <div>Locations</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-[#c59b6d] shrink-0 drop-shadow" strokeWidth={2} />
                <div className="text-xs text-white leading-tight font-medium drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
                  <div>Trusted</div>
                  <div>by Families</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Script Watermark Overlay: "More Than Just Buildings" positioned on bottom-right of hero banner */}
        <div className="hidden sm:block absolute bottom-12 right-8 lg:right-16 z-20 pointer-events-none select-none text-right transform -rotate-3">
          <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] leading-none block font-bold">
            More Than
          </span>
          <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] leading-none block mt-1 font-bold">
            Just Buildings
          </span>
        </div>

        {/* Slide Controls: Subtle floating prev/next navigation arrows */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md transition-all border border-white/20 hidden sm:flex items-center justify-center shadow-lg"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next Slide"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2.5 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md transition-all border border-white/20 hidden sm:flex items-center justify-center shadow-lg"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slide Dots at bottom-center */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {heroSlides.map((_, dotIndex) => (
            <button
              key={dotIndex}
              type="button"
              onClick={() => setCurrentSlide(dotIndex)}
              aria-label={`Go to slide ${dotIndex + 1}`}
              className={`h-2 rounded-full transition-all duration-300 shadow-md ${
                dotIndex === currentSlide
                  ? 'w-8 bg-[#c59b6d]'
                  : 'w-2 bg-white/50 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: ABOUT PK DEVELOPERS */}
      {/* ========================================================================= */}
      <section id="about" className="py-20 lg:py-24 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Story & Stats */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#b68a5c]">
                —— ABOUT PK DEVELOPERS
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-slate-900 tracking-tight leading-[1.2]">
                Building Trust,<br />Creating Communities
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                At PK Developers, we believe a home is more than just structure — it's the beginning of new stories, stronger families and brighter futures. With a commitment to quality, transparency and customer satisfaction, we develop spaces that stand the test of time.
              </p>

              {/* 3 Stats with label on top, bold number on bottom */}
              <div className="pt-2 pb-2 grid grid-cols-3 gap-4 sm:gap-6">
                <div className="border-l-2 border-slate-200 pl-3 sm:pl-4">
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium leading-tight">
                    Happy<br />Families
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 mt-1">
                    500+
                  </div>
                </div>

                <div className="border-l-2 border-slate-200 pl-3 sm:pl-4">
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium leading-tight">
                    Ongoing<br />Projects
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 mt-1">
                    5+
                  </div>
                </div>

                <div className="border-l-2 border-slate-200 pl-3 sm:pl-4">
                  <div className="text-[11px] sm:text-xs text-slate-500 font-medium leading-tight">
                    Years of<br />Experience
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 mt-1">
                    10+
                  </div>
                </div>
              </div>

              {/* Button */}
              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#b68a5c] hover:bg-[#a67c4e] text-white text-sm font-medium transition-colors"
                >
                  <span>Know More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Living Room Image with "Better Spaces Happier People" on Wall */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
                  alt="PK Developers Interior Living Space"
                  className="w-full h-[440px] sm:h-[480px] object-cover"
                />

                {/* Elegant wall typographic quote matching mockup */}
                <div className="absolute top-12 right-10 text-right select-none pointer-events-none">
                  <div className="font-serif text-2xl sm:text-3xl text-slate-800 leading-snug font-medium">
                    “Better<br />
                    Spaces<br />
                    Happier<br />
                    People”
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: ONGOING & FEATURED PROJECTS */}
      {/* ========================================================================= */}
      <section id="projects" className="py-20 lg:py-24 bg-[#fafaf9] border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#b68a5c] block mb-1">
                —— OUR PROJECTS
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 tracking-tight">
                Ongoing & Featured Projects
              </h2>
            </div>
            <div>
              <Link
                to="/projects"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-800 hover:text-[#b68a5c] transition-colors"
              >
                <span>View All Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* 3 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1: PK Heights */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-slate-200 transition-all duration-300 flex flex-col group">
              <div className="relative h-60 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&q=80"
                  alt="PK Heights in Mandya"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3.5 right-3.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#0f766e] text-white shadow">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300"></span>
                    Ongoing
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">PK Heights</h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-[#b68a5c]" />
                    <span>Mandya, Karnataka</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Spacious 2 & 3 BHK apartments designed for modern living.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: PK Enclave */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-slate-200 transition-all duration-300 flex flex-col group">
              <div className="relative h-60 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                  alt="PK Enclave in Mysuru"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3.5 right-3.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#0f172a] text-white shadow border border-white/20">
                    <Star className="w-3 h-3 text-[#c59b6d] fill-[#c59b6d]" />
                    Featured
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">PK Enclave</h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-[#b68a5c]" />
                    <span>Mysuru, Karnataka</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Premium residential plots in a peaceful and well-connected location.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: PK Residency */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-slate-200 transition-all duration-300 flex flex-col group">
              <div className="relative h-60 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
                  alt="PK Residency in Bengaluru"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3.5 right-3.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#0284c7] text-white shadow">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-200"></span>
                    Upcoming
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">PK Residency</h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-[#b68a5c]" />
                    <span>Bengaluru, Karnataka</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Modern homes with world-class amenities for a better lifestyle.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: AMENITIES */}
      {/* ========================================================================= */}
      <section id="amenities" className="py-20 lg:py-24 bg-[#091527] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header Row: Title on Left, Subtext on Right */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
            <div className="text-left">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#b68a5c] block mb-2">
                —— AMENITIES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-white tracking-tight leading-[1.2]">
                Everything You Need<br />For a Better Life
              </h2>
            </div>
            <div className="lg:max-w-md text-left lg:text-right text-slate-300 text-xs sm:text-sm leading-relaxed">
              Thoughtfully planned amenities to give you comfort, convenience and a higher quality of life.
            </div>
          </div>

          {/* 6 Icons Grid matching the mockup */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 text-center">
            
            {/* 1. 24/7 Security */}
            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 flex items-center justify-center text-[#b68a5c] mb-3 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8" strokeWidth={1.6} />
              </div>
              <span className="text-xs sm:text-sm font-medium text-white">24/7 Security</span>
            </div>

            {/* 2. Car Parking */}
            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 flex items-center justify-center text-[#b68a5c] mb-3 group-hover:scale-110 transition-transform">
                <Car className="w-8 h-8" strokeWidth={1.6} />
              </div>
              <span className="text-xs sm:text-sm font-medium text-white">Car Parking</span>
            </div>

            {/* 3. Landscaped Garden */}
            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 flex items-center justify-center text-[#b68a5c] mb-3 group-hover:scale-110 transition-transform">
                <Trees className="w-8 h-8" strokeWidth={1.6} />
              </div>
              <span className="text-xs sm:text-sm font-medium text-white">Landscaped Garden</span>
            </div>

            {/* 4. Children's Play Area */}
            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 flex items-center justify-center text-[#b68a5c] mb-3 group-hover:scale-110 transition-transform">
                <Smile className="w-8 h-8" strokeWidth={1.6} />
              </div>
              <span className="text-xs sm:text-sm font-medium text-white">Children's Play Area</span>
            </div>

            {/* 5. Rainwater Harvesting */}
            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 flex items-center justify-center text-[#b68a5c] mb-3 group-hover:scale-110 transition-transform">
                <Droplets className="w-8 h-8" strokeWidth={1.6} />
              </div>
              <span className="text-xs sm:text-sm font-medium text-white">Rainwater Harvesting</span>
            </div>

            {/* 6. Power Backup */}
            <div className="flex flex-col items-center group">
              <div className="w-14 h-14 flex items-center justify-center text-[#b68a5c] mb-3 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8" strokeWidth={1.6} />
              </div>
              <span className="text-xs sm:text-sm font-medium text-white">Power Backup</span>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: OUR LOCATION */}
      {/* ========================================================================= */}
      <section id="location" className="py-20 lg:py-24 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Connectivity Checklist */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#b68a5c]">
                —— OUR LOCATION
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-slate-900 tracking-tight leading-[1.2]">
                Well Connected.<br />Always Accessible.
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Our projects are located in prime areas with easy access to schools, hospitals, shopping centers and major transport hubs.
              </p>

              {/* 5 Checklist Items with round brown icons */}
              <div className="space-y-3.5 pt-1">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fbf7f2] border border-[#e8dccf] flex items-center justify-center shrink-0">
                    <GraduationCap className="w-3.5 h-3.5 text-[#b68a5c]" />
                  </div>
                  <span className="text-sm font-medium text-slate-800">
                    Schools & Colleges
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fbf7f2] border border-[#e8dccf] flex items-center justify-center shrink-0">
                    <Building2 className="w-3.5 h-3.5 text-[#b68a5c]" />
                  </div>
                  <span className="text-sm font-medium text-slate-800">
                    Hospitals
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fbf7f2] border border-[#e8dccf] flex items-center justify-center shrink-0">
                    <ShoppingBag className="w-3.5 h-3.5 text-[#b68a5c]" />
                  </div>
                  <span className="text-sm font-medium text-slate-800">
                    Shopping Centers
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fbf7f2] border border-[#e8dccf] flex items-center justify-center shrink-0">
                    <Bus className="w-3.5 h-3.5 text-[#b68a5c]" />
                  </div>
                  <span className="text-sm font-medium text-slate-800">
                    Public Transport
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fbf7f2] border border-[#e8dccf] flex items-center justify-center shrink-0">
                    <Navigation className="w-3.5 h-3.5 text-[#b68a5c]" />
                  </div>
                  <span className="text-sm font-medium text-slate-800">
                    Easy Highway Access
                  </span>
                </div>
              </div>

              {/* Get Directions Button */}
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Mandya,Karnataka,India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#b68a5c] hover:bg-[#a67c4e] text-white text-sm font-medium transition-colors"
                >
                  <span>Get Directions</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Google Maps Card */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                <iframe
                  title="PK Developers Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124806.94273397984!2d76.83226955567554!3d12.525545592892955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bafa0ce70845a7d%3A0xc3b8a36ff8a0fae3!2sMandya%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[400px] rounded-2xl"
                />

                {/* Floating location info badge matching mockup */}
                <div className="absolute top-4 left-4 p-3.5 rounded-lg bg-white/95 backdrop-blur-md shadow border border-slate-100 text-left">
                  <div className="text-sm font-bold text-slate-900">PK Developers</div>
                  <div className="text-xs text-slate-500">Mandya, Karnataka</div>
                  <a
                    href="https://maps.google.com/?q=Mandya,Karnataka,India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:underline font-medium block mt-1"
                  >
                    View larger map
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: ENQUIRE NOW */}
      {/* ========================================================================= */}
      <section id="enquiry" className="py-20 lg:py-24 bg-[#091527] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Heading & Subtitle */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#b68a5c] block">
                GET IN TOUCH ——
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-white tracking-tight leading-[1.2]">
                Enquire Now
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-sm">
                Have a question or want to know more about our projects? Fill out the form and we'll get back to you soon.
              </p>
            </div>

            {/* Right Column: Clean Form matching mockup */}
            <div className="lg:col-span-7">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4 bg-slate-900/60 p-8 rounded-xl border border-white/15">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white">Thank You for Your Enquiry!</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Our team will contact you shortly with full project details.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1: Your Name* & Phone Number* */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      placeholder="Your Name*"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-md bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#b68a5c] text-sm"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number*"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-md bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#b68a5c] text-sm"
                    />
                  </div>

                  {/* Row 2: Email Address & I'm interested in */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-md bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#b68a5c] text-sm"
                    />
                    <select
                      value={formData.project}
                      onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                      className="w-full px-4 py-3 rounded-md bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-[#b68a5c] text-sm"
                    >
                      <option value="PK Heights">I'm interested in PK Heights (Mandya)</option>
                      <option value="PK Enclave">I'm interested in PK Enclave (Mysuru)</option>
                      <option value="PK Residency">I'm interested in PK Residency (Bengaluru)</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>

                  {/* Row 3: Your Message */}
                  <div>
                    <textarea
                      rows={3}
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-md bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#b68a5c] text-sm resize-none"
                    />
                  </div>

                  {/* Row 4: Submit Button */}
                  <div className="pt-1 text-left">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-[#b68a5c] hover:bg-[#a67c4e] text-white text-sm font-medium transition-colors shadow-sm"
                    >
                      <span>Submit Enquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
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

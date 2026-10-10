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
  CheckCircle2,
  Utensils,
  Globe,
  ChevronDown,
  Sparkles,
  ShieldCheck,
  Compass,
  Plane,
  Award
} from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { contactInfo } from '../data/companyData';

// Full background hero slides featuring authentic PK Developers projects
const heroSlides = [
  {
    image: '/images/projects/pk-community-hall-events.png',
    title: 'PK Community Hall & Events — Convention & Banquet Center',
    location: 'Srirangapatna / Mandya, Karnataka',
  },
  {
    image: '/images/projects/pk-luxury-villa-exterior.png',
    title: 'PK Signature Luxury Villa — Turnkey Architecture',
    location: 'Mandya, Karnataka',
  },
  {
    image: '/images/projects/pk-vip-gallery-masterplan.jpg',
    title: 'PK VIP Gallery — Luxury Plotted Enclave',
    location: 'Belvadi, Srirangapatna, Mandya',
  },
  {
    image: '/images/projects/pk-green-town-phase-2-masterplan.jpg',
    title: 'PK Green Town (Phase-2) — Sy No. 182/1',
    location: 'Belvadi, Srirangapatna, Mandya',
  },
  {
    image: '/images/projects/pk-luxury-villa-hall.png',
    title: 'Custom Interiors & Designer Ceilings — PK Living Concepts',
    location: 'Mandya, Karnataka',
  }
];

export const HomePage: React.FC = () => {
  // Hero background slide state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide effect every 2 seconds (2000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
    project: 'PK Green Town (Phase-2)',
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
        project: 'PK Green Town (Phase-2)',
        message: ''
      });
    }, 5000);
  };

  // Location tab & FAQ state for SEO sections
  const [activeLocationTab, setActiveLocationTab] = useState<'karnataka' | 'nri'>('karnataka');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      <SEOHead
        title="PK Developers | Best Builders & Real Estate Developers in Mysuru & Karnataka"
        description="PK Developers is a premier real estate developer & builder in Mysuru & Karnataka. Luxury villas, residential plots, apartments, and gated community projects across Mysuru, Mandya, Bangalore, Dakshina Kannada, Madikeri, and NRI investment desk for UAE, Saudi Arabia, Qatar, Bahrain, Kuwait, Oman."
        canonicalPath="/"
        keywords={[
          'PK Developers Mysuru',
          'PK Developers Mysore',
          'real estate developers in Mysuru',
          'property developers in Mysuru',
          'builders in Mysuru',
          'real estate company in Mysuru',
          'villas for sale in Mysuru',
          'residential plots in Mysuru',
          'luxury apartments in Mysuru',
          'flats for sale in Mysuru',
          'property in Hebbal Mysuru',
          'flats in Vijayanagar Mysuru',
          'property in JP Nagar Mysuru',
          'property in Bogadi Mysuru',
          'property in Bannur Road Mysuru',
          'Dakshina Kannada',
          'Madikeri',
          'Bangalore',
          'Mandya',
          'Tumkur',
          'Saligram',
          'Chamarajanagar',
          'Kollegal',
          'NRI real estate UAE',
          'Saudi Arabia',
          'Bahrain',
          'Oman',
          'Kuwait',
          'Qatar'
        ]}
      />

      {/* ========================================================================= */}
      {/* SECTION 1: FULL BACKGROUND IMAGE SLIDES HERO SECTION */}
      {/* ========================================================================= */}
      <section 
        id="hero" 
        className="relative bg-[#091527] text-white overflow-hidden min-h-[640px] sm:min-h-[700px] lg:min-h-[760px] flex items-center"
      >
        {/* Full-bleed background image slideshow */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.title}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
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
                href={`tel:${contactInfo.phoneRaw}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#b68a5c] hover:bg-[#a67c4e] text-white font-medium text-sm transition-colors shadow-xl shadow-black/40"
              >
                <Phone className="w-4 h-4 fill-white" />
                <span>Call Now</span>
              </a>

              <a
                href={`https://wa.me/${contactInfo.whatsapp}?text=Hello%20PK%20Developers,%20I%20would%20like%20to%20inquire%20about%20your%20properties.`}
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

          {/* 4 Cards Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: PK Green Town (Phase-2) */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-slate-200 transition-all duration-300 flex flex-col group">
              <Link to="/projects/pk-green-town-phase-2" className="relative h-56 overflow-hidden bg-slate-100 block">
                <img
                  src="/images/projects/pk-green-town-phase-2-masterplan.jpg"
                  alt="PK Green Town Phase-2 Layout"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3.5 right-3.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#0f766e] text-white shadow">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-300"></span>
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
                    <MapPin className="w-3.5 h-3.5 text-[#b68a5c]" />
                    <span>Belvadi, Srirangapatna, Mandya</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    Sy No. 182/1. 20x30, 20x40 & 30x40 residential plots with 40ft road, 24x7 water & electricity.
                  </p>
                  <div className="flex flex-wrap gap-1 text-[10px] font-semibold text-slate-700">
                    <span className="px-2 py-0.5 bg-slate-100 rounded">20x30 : 60 Units</span>
                    <span className="px-2 py-0.5 bg-slate-100 rounded">30x40 : 17 Units</span>
                    <span className="px-2 py-0.5 bg-slate-100 rounded">40' Road</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: PK VIP Gallery */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-slate-200 transition-all duration-300 flex flex-col group">
              <Link to="/projects/pk-vip-gallery" className="relative h-56 overflow-hidden bg-slate-100 block">
                <img
                  src="/images/projects/pk-vip-gallery-masterplan.jpg"
                  alt="PK VIP Gallery 3D Layout"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3.5 right-3.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#0f172a] text-white shadow border border-white/20">
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
                    <MapPin className="w-3.5 h-3.5 text-[#b68a5c]" />
                    <span>Belvadi, Srirangapatna, Mandya</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    Boutique gated enclave with 40x60, 30x40 & 20x30 luxury plots, 28ft wide road, and 24x7 utilities.
                  </p>
                  <div className="flex flex-wrap gap-1 text-[10px] font-semibold text-slate-700">
                    <span className="px-2 py-0.5 bg-slate-100 rounded">40'x60' Plots</span>
                    <span className="px-2 py-0.5 bg-slate-100 rounded">28' Road</span>
                    <span className="px-2 py-0.5 bg-slate-100 rounded">Clear Titles</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: PK Signature Luxury Villa */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-slate-200 transition-all duration-300 flex flex-col group">
              <Link to="/projects/pk-signature-luxury-villa" className="relative h-56 overflow-hidden bg-slate-900 block">
                <img
                  src="/images/projects/pk-luxury-villa-exterior.png"
                  alt="PK Signature Luxury Villa"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3.5 right-3.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-700 text-white shadow">
                    <CheckCircle2 className="w-3 h-3 text-emerald-200" />
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
                    <MapPin className="w-3.5 h-3.5 text-[#b68a5c]" />
                    <span>Mandya, Karnataka</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    Completed turnkey duplex villa featuring modern night facade lighting, CNC false ceilings, and luxury interiors.
                  </p>
                  <div className="flex flex-wrap gap-1 text-[10px] font-semibold text-slate-700">
                    <span className="px-2 py-0.5 bg-slate-100 rounded">Turnkey Build</span>
                    <span className="px-2 py-0.5 bg-slate-100 rounded">CNC Ceilings</span>
                    <span className="px-2 py-0.5 bg-slate-100 rounded">Marble Flooring</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: PK Community Hall & Events */}
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-slate-200 transition-all duration-300 flex flex-col group">
              <Link to="/projects/pk-community-hall-events" className="relative h-56 overflow-hidden bg-slate-900 block">
                <img
                  src="/images/projects/pk-community-hall-events.png"
                  alt="PK Community Hall & Events"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3.5 right-3.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#b68a5c] text-white shadow">
                    <Star className="w-3 h-3 text-white fill-white" />
                    Featured
                  </span>
                </div>
              </Link>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <Link to="/projects/pk-community-hall-events" className="text-lg font-bold text-slate-900 mb-1 hover:text-[#b68a5c] transition-colors block">
                    PK Community Hall & Events
                  </Link>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2.5">
                    <MapPin className="w-3.5 h-3.5 text-[#b68a5c]" />
                    <span>Srirangapatna / Mandya</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    Grand multi-level event complex with illuminated facade, open-air celebration lawn, and rooftop fire-pit lounges.
                  </p>
                  <div className="flex flex-wrap gap-1 text-[10px] font-semibold text-slate-700">
                    <span className="px-2 py-0.5 bg-slate-100 rounded">Event Lawn</span>
                    <span className="px-2 py-0.5 bg-slate-100 rounded">Banquet Hall</span>
                    <span className="px-2 py-0.5 bg-slate-100 rounded">Fire Pit Terrace</span>
                  </div>
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
                —— OUR LOCATION & CONNECTIVITY
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-slate-900 tracking-tight leading-[1.2]">
                Well Connected.<br />Prime Strategic Location.
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Our layouts in Belvadi Village (Srirangapatna Taluk, Mandya) offer rapid connectivity to Ring Road, top medical centers, prestigious schools, and popular dining destinations.
              </p>

              {/* 5 Checklist Items with real document distances */}
              <div className="space-y-3.5 pt-1">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fbf7f2] border border-[#e8dccf] flex items-center justify-center shrink-0">
                    <Navigation className="w-3.5 h-3.5 text-[#b68a5c]" />
                  </div>
                  <span className="text-sm font-medium text-slate-800">
                    3.0 KM Away From Ring Road
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fbf7f2] border border-[#e8dccf] flex items-center justify-center shrink-0">
                    <Building2 className="w-3.5 h-3.5 text-[#b68a5c]" />
                  </div>
                  <span className="text-sm font-medium text-slate-800">
                    2.0 KM Away From Prajwal Hospital
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fbf7f2] border border-[#e8dccf] flex items-center justify-center shrink-0">
                    <GraduationCap className="w-3.5 h-3.5 text-[#b68a5c]" />
                  </div>
                  <span className="text-sm font-medium text-slate-800">
                    1.5 KM Away From Presentation School
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fbf7f2] border border-[#e8dccf] flex items-center justify-center shrink-0">
                    <Utensils className="w-3.5 h-3.5 text-[#b68a5c]" />
                  </div>
                  <span className="text-sm font-medium text-slate-800">
                    2.0 KM Away From Lekenzi Restaurant
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#fbf7f2] border border-[#e8dccf] flex items-center justify-center shrink-0">
                    <MapPin className="w-3.5 h-3.5 text-[#b68a5c]" />
                  </div>
                  <span className="text-sm font-medium text-slate-800">
                    Kasaba Hobli, Belvadi Village, Srirangapatna Taluk, Mandya
                  </span>
                </div>
              </div>

              {/* Get Directions Button */}
              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=Belvadi,Srirangapatna,Mandya"
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
                  <div className="text-sm font-bold text-slate-900">PK Developers & Projects</div>
                  <div className="text-xs text-slate-500">Belvadi, Srirangapatna, Mandya</div>
                  <a
                    href="https://maps.google.com/?q=Belvadi,Srirangapatna,Mandya"
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
      {/* SECTION 5B: STRATEGIC LOCATIONS & NRI INVESTMENT DESK */}
      {/* ========================================================================= */}
      <section id="locations-footprint" className="py-20 lg:py-24 bg-[#fafaf9] border-t border-slate-200/70 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="max-w-3xl mb-12 text-left">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#b68a5c] block mb-2">
              —— STRATEGIC FOOTPRINT &amp; GLOBAL NRI DESK
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-slate-900 tracking-tight leading-[1.2]">
              Building Across Prime Karnataka &amp; Serving Global NRI Investors
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              From cultural living in Mysuru and coastal estates in Dakshina Kannada to prime townships in Bangalore and Mandya — PK Developers delivers clear-title gated layouts, luxury turnkey villas, and dedicated advisory for domestic buyers and Gulf NRIs.
            </p>

            {/* Toggle Tabs */}
            <div className="mt-6 inline-flex p-1 rounded-xl bg-slate-200/80 border border-slate-300/50">
              <button
                type="button"
                onClick={() => setActiveLocationTab('karnataka')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                  activeLocationTab === 'karnataka'
                    ? 'bg-[#b68a5c] text-white shadow-md'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                <Compass className="w-4 h-4" />
                <span>Karnataka Target Hubs</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveLocationTab('nri')}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                  activeLocationTab === 'nri'
                    ? 'bg-[#b68a5c] text-white shadow-md'
                    : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                <Globe className="w-4 h-4" />
                <span>Global NRI Desk (GCC / Middle East)</span>
              </button>
            </div>
          </div>

          {/* Tab 1: Karnataka Priority Hubs */}
          {activeLocationTab === 'karnataka' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
              {/* Mysuru / Mysore */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow text-left group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#fbf7f2] border border-[#e8dccf] flex items-center justify-center text-[#b68a5c]">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                    Flagship Hub
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1.5 group-hover:text-[#b68a5c] transition-colors">
                  Mysuru (Mysore)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Premier villas, approved residential plots, and modern apartments across Hebbal, Vijayanagar, JP Nagar, Bogadi, Hootagalli, Dattagalli, and Bannur Road.
                </p>
                <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-600">
                  <span className="px-2 py-0.5 rounded bg-slate-100">Hebbal</span>
                  <span className="px-2 py-0.5 rounded bg-slate-100">Vijayanagar</span>
                  <span className="px-2 py-0.5 rounded bg-slate-100">JP Nagar</span>
                  <span className="px-2 py-0.5 rounded bg-slate-100">Bogadi</span>
                  <span className="px-2 py-0.5 rounded bg-slate-100">Bannur Road</span>
                </div>
              </div>

              {/* Mandya & Srirangapatna */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow text-left group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#fbf7f2] border border-[#e8dccf] flex items-center justify-center text-[#b68a5c]">
                    <HomeIcon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#fbf7f2] text-[#b68a5c] border border-[#e8dccf]">
                    Active Projects
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1.5 group-hover:text-[#b68a5c] transition-colors">
                  Mandya &amp; Srirangapatna
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Flagship gated plotted townships with ready infrastructure: PK Green Town Phase-2, PK VIP Gallery, and grand convention destinations.
                </p>
                <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-600">
                  <span className="px-2 py-0.5 rounded bg-slate-100">PK Green Town</span>
                  <span className="px-2 py-0.5 rounded bg-slate-100">PK VIP Gallery</span>
                  <span className="px-2 py-0.5 rounded bg-slate-100">Belvadi</span>
                </div>
              </div>

              {/* Bangalore (Bengaluru) */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow text-left group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#fbf7f2] border border-[#e8dccf] flex items-center justify-center text-[#b68a5c]">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200/60">
                    High Appreciation
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1.5 group-hover:text-[#b68a5c] transition-colors">
                  Bangalore (Bengaluru)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Turnkey architectural villa construction, capital city real estate investments, and expressway connectivity to South Karnataka hubs.
                </p>
                <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-600">
                  <span className="px-2 py-0.5 rounded bg-slate-100">Expressway Corridor</span>
                  <span className="px-2 py-0.5 rounded bg-slate-100">Luxury Villas</span>
                </div>
              </div>

              {/* Dakshina Kannada */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow text-left group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#fbf7f2] border border-[#e8dccf] flex items-center justify-center text-[#b68a5c]">
                    <Trees className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                    Coastal Belt
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1.5 group-hover:text-[#b68a5c] transition-colors">
                  Dakshina Kannada (Mangaluru)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Coastal residential plots, premium custom residential estates, and turnkey house construction with coastal-grade engineering.
                </p>
                <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-600">
                  <span className="px-2 py-0.5 rounded bg-slate-100">Coastal Estates</span>
                  <span className="px-2 py-0.5 rounded bg-slate-100">Turnkey Homes</span>
                </div>
              </div>

              {/* Madikeri (Coorg) */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow text-left group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#fbf7f2] border border-[#e8dccf] flex items-center justify-center text-[#b68a5c]">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700">
                    Scenic Living
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1.5 group-hover:text-[#b68a5c] transition-colors">
                  Madikeri (Coorg)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Coffee estate holiday homes, hillside luxury villas, and tranquil residential layouts built for discerning lifestyle investors.
                </p>
                <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-600">
                  <span className="px-2 py-0.5 rounded bg-slate-100">Holiday Villas</span>
                  <span className="px-2 py-0.5 rounded bg-slate-100">Estate Land</span>
                </div>
              </div>

              {/* Tumkur, Saligram, Chamarajanagar & Kollegal */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow text-left group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#fbf7f2] border border-[#e8dccf] flex items-center justify-center text-[#b68a5c]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-amber-50 text-amber-700">
                    Emerging Corridors
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1.5 group-hover:text-[#b68a5c] transition-colors">
                  Tumkur, Saligram, Chamarajanagar &amp; Kollegal
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Fast-appreciating plotted developments and residential land along South Karnataka’s industrial and regional express corridors.
                </p>
                <div className="flex flex-wrap gap-1.5 text-[11px] text-slate-600">
                  <span className="px-2 py-0.5 rounded bg-slate-100">Tumkur</span>
                  <span className="px-2 py-0.5 rounded bg-slate-100">Saligram</span>
                  <span className="px-2 py-0.5 rounded bg-slate-100">Chamarajanagar</span>
                  <span className="px-2 py-0.5 rounded bg-slate-100">Kollegal</span>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: Global NRI Desk (Middle East & GCC) */}
          {activeLocationTab === 'nri' && (
            <div className="p-8 sm:p-10 rounded-3xl bg-[#091527] text-white border border-white/10 shadow-xl animate-fadeIn text-left">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b68a5c]/20 border border-[#b68a5c]/40 text-[#c59b6d] text-xs font-semibold">
                    <Plane className="w-3.5 h-3.5" />
                    <span>Specialized NRI Investor Concierge</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                    Seamless Real Estate Investments for NRIs in the GCC &amp; Middle East
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    We assist Non-Resident Indians residing in the Gulf region to safely purchase, build, and register premium properties across Mysuru, Mandya, Bangalore, and Karnataka without traveling back and forth.
                  </p>
                  
                  {/* Supported Gulf Countries */}
                  <div className="pt-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#c59b6d] block mb-2">
                      Active Investor Desks By Country:
                    </span>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {['UAE (Dubai & Abu Dhabi)', 'Saudi Arabia (Riyadh & Jeddah)', 'Bahrain', 'Oman (Muscat)', 'Kuwait', 'Qatar (Doha)'].map((country) => (
                        <span key={country} className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/15 text-slate-200 font-medium">
                          {country}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 4 Pillars of NRI Security */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#c59b6d] shrink-0" />
                      <span>100% Clear Legal Titles &amp; Encumbrance Free</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#c59b6d] shrink-0" />
                      <span>Remote Video &amp; Drone Site Inspections</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#c59b6d] shrink-0" />
                      <span>Power of Attorney (POA) Registration Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#c59b6d] shrink-0" />
                      <span>Direct WhatsApp Concierge &amp; Live Updates</span>
                    </div>
                  </div>
                </div>

                {/* Right Side: Quick Action Box */}
                <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 sm:p-8 rounded-2xl text-center space-y-4 backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-full bg-[#b68a5c]/20 text-[#c59b6d] flex items-center justify-center mx-auto">
                    <MessageCircle className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Connect with Our Global NRI Desk</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Chat directly with our senior property advisors on WhatsApp to receive project masterplans, title documents, and customized pricing.
                  </p>
                  <div className="space-y-2.5 pt-1">
                    <a
                      href={`https://wa.me/${contactInfo.whatsapp}?text=Hello%20PK%20Developers,%20I%20am%20an%20NRI%20investor%20interested%20in%20property%20opportunities%20in%20Karnataka.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>WhatsApp NRI Advisory</span>
                    </a>
                    <a
                      href={`tel:${contactInfo.phoneRaw}`}
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all border border-white/20"
                    >
                      <Phone className="w-4 h-4 fill-white" />
                      <span>Call +91 91080 81321</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5C: MYSURU REAL ESTATE DIRECTORY & FAQ (SEO & INTERNAL LINKING) */}
      {/* ========================================================================= */}
      <section id="mysuru-property-guide" className="py-20 lg:py-24 bg-white text-slate-900 border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-3xl mb-14 text-left">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#b68a5c] block mb-2">
              —— MYSURU PROPERTY GUIDE &amp; INSIGHTS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-slate-900 tracking-tight leading-[1.2]">
              Real Estate Developers, Luxury Villas &amp; Plots in Mysuru
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Whether you are looking to buy property in Mysuru, invest in high-yield residential plots, or commission a custom architect-designed villa, PK Developers is your trusted partner for enduring craftsmanship and legal peace of mind.
            </p>
          </div>

          {/* 3 Core Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-16">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-[#b68a5c] text-white flex items-center justify-center mb-4">
                <HomeIcon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Villas &amp; Independent Houses in Mysuru
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Explore signature independent houses and luxury villas for sale in Mysuru with private garden lawns, premium Italian marble, Vastu-compliant architecture, and turnkey handover.
              </p>
              <Link to="/projects/pk-signature-luxury-villa" className="text-xs font-bold text-[#b68a5c] hover:underline inline-flex items-center gap-1">
                <span>View Luxury Villa Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-[#b68a5c] text-white flex items-center justify-center mb-4">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Approved Residential Plots &amp; Layouts
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Sanctioned gated community projects and residential plots in Mysuru and Mandya featuring asphalt roads, underground drainage, storm water systems, and 24/7 security.
              </p>
              <Link to="/projects/pk-green-town-phase-2" className="text-xs font-bold text-[#b68a5c] hover:underline inline-flex items-center gap-1">
                <span>Explore Plotted Layouts</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="w-10 h-10 rounded-xl bg-[#b68a5c] text-white flex items-center justify-center mb-4">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Trusted Builders &amp; Turnkey Execution
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                Ranked among the trusted builders and property developers in Mysuru with end-to-end civil construction, municipal sanctions, structural guarantees, and clear-title registration.
              </p>
              <Link to="/residential-construction" className="text-xs font-bold text-[#b68a5c] hover:underline inline-flex items-center gap-1">
                <span>Construction Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Prime Neighbourhoods Strip */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#fafaf9] border border-slate-200 mb-16 text-left">
            <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#b68a5c]" />
              <span>Prime Residential Areas &amp; Property Hotspots in Mysuru</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              We monitor and develop properties across Mysuru’s highest-appreciating localities:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 text-xs">
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <div className="font-bold text-slate-900">Hebbal, Mysuru</div>
                <div className="text-[11px] text-slate-500 mt-0.5">IT park, apartments &amp; modern villas</div>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <div className="font-bold text-slate-900">Vijayanagar, Mysuru</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Established premium residential plots</div>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <div className="font-bold text-slate-900">JP Nagar, Mysuru</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Peaceful family living &amp; prime villas</div>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <div className="font-bold text-slate-900">Bogadi, Mysuru</div>
                <div className="text-[11px] text-slate-500 mt-0.5">High-appreciation gated layouts</div>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <div className="font-bold text-slate-900">Hootagalli, Mysuru</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Rapidly growing ring road corridor</div>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <div className="font-bold text-slate-900">Dattagalli, Mysuru</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Premium residential pockets</div>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <div className="font-bold text-slate-900">Bannur Road, Mysuru</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Plotted expansion &amp; strategic growth</div>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200">
                <div className="font-bold text-slate-900">Kasaba Hobli / Mandya</div>
                <div className="text-[11px] text-slate-500 mt-0.5">PK Green Town &amp; VIP Gallery</div>
              </div>
            </div>
          </div>

          {/* Interactive Collapsible FAQ */}
          <div className="mb-16 text-left max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#b68a5c] block mb-1">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-slate-900">
                Things to Consider Before Buying Property in Mysuru
              </h3>
            </div>

            <div className="space-y-3">
              {[
                {
                  q: 'Why invest in Mysuru real estate and residential property?',
                  a: 'Mysuru offers outstanding long-term investment potential due to the 10-lane Bengaluru-Mysuru Expressway (reducing travel time to 75 minutes), expanding IT parks in Hebbal, abundant civic infrastructure, pristine air quality, and consistently rising land values that make it South India’s most attractive alternative to Bengaluru.'
                },
                {
                  q: 'What are the best residential areas to buy property or flats in Mysuru?',
                  a: 'Prime areas in Mysuru include Hebbal (for IT corridor proximity and apartments), Vijayanagar (prime gated enclaves), JP Nagar & Bogadi (peaceful residential developments), Hootagalli & Dattagalli (connectivity along Ring Road), and Bannur Road (rapidly growing plotted townships).'
                },
                {
                  q: 'How does PK Developers support NRI property buyers from UAE, Saudi Arabia, Bahrain, Oman, Kuwait, and Qatar?',
                  a: 'We provide an end-to-end NRI Investor Concierge: complete legal title verification, virtual video walkthroughs, drone masterplan aerial scans, Power of Attorney (POA) registration assistance, direct bank loan coordination, and transparent registration directly in your name.'
                },
                {
                  q: 'What types of residential projects are available with PK Developers?',
                  a: 'PK Developers offers fully developed, approved residential plotted layouts (such as PK Green Town Phase-2 and PK VIP Gallery), turnkey custom luxury villas (PK Signature Luxury Villa), commercial and event venues (PK Community Hall & Events), and independent home construction across Mysuru and Mandya.'
                },
                {
                  q: 'How do I choose the right property developer and builder in Mysuru?',
                  a: 'Always verify: (1) 100% clear legal title deeds with local authority sanctions (MUDA/DTCP/RERA), (2) Quality of on-ground infrastructure (wide asphalt roads, drainage, water, electricity), (3) Past track record and transparent contracts, and (4) Turnkey accountability. PK Developers guarantees full documentation transparency for every property sold.'
                }
              ].map((item, idx) => (
                <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-semibold text-slate-900 hover:text-[#b68a5c] transition-colors"
                  >
                    <span className="text-sm sm:text-base pr-4">{item.q}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${openFaq === idx ? 'rotate-180 text-[#b68a5c]' : ''}`} />
                  </button>
                  {openFaq === idx && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {item.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Popular Search Keyword Anchor Cloud (Internal Backlinks Matrix) */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 text-left">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-[#b68a5c]" />
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-900">
                Popular Property Searches &amp; Regional Directory:
              </h4>
            </div>
            <div className="flex flex-wrap gap-2 text-xs">
              {[
                { label: 'PK Developers Mysuru', link: '/projects' },
                { label: 'Real Estate Developers in Mysuru', link: '/projects' },
                { label: 'Builders in Mysuru', link: '/residential-construction' },
                { label: 'Villas for Sale in Mysuru', link: '/projects/pk-signature-luxury-villa' },
                { label: 'Residential Plots in Mysuru', link: '/projects/pk-green-town-phase-2' },
                { label: 'Luxury Apartments in Mysuru', link: '/projects' },
                { label: 'Flats for Sale in Mysuru', link: '/projects' },
                { label: 'Gated Community Projects in Mysuru', link: '/projects/pk-vip-gallery' },
                { label: 'Independent Houses for Sale in Mysuru', link: '/residential-construction' },
                { label: 'Property in Hebbal Mysuru', link: '/projects' },
                { label: 'Flats in Vijayanagar Mysuru', link: '/projects' },
                { label: 'Property in JP Nagar Mysuru', link: '/projects' },
                { label: 'Property in Bogadi Mysuru', link: '/projects' },
                { label: 'Property in Bannur Road Mysuru', link: '/projects' },
                { label: 'Property in Hootagalli Mysuru', link: '/projects' },
                { label: 'Property in Dattagalli Mysuru', link: '/projects' },
                { label: 'Builders in Karnataka', link: '/residential-construction' },
                { label: 'Buy Property in Mysuru', link: '/projects' },
                { label: 'PK Green Town Mandya', link: '/projects/pk-green-town-phase-2' },
                { label: 'PK VIP Gallery Mandya', link: '/projects/pk-vip-gallery' },
                { label: 'PK Signature Luxury Villa', link: '/projects/pk-signature-luxury-villa' },
                { label: 'PK Community Hall & Events', link: '/projects/pk-community-hall-events' },
                { label: 'Property in Bangalore', link: '/residential-construction' },
                { label: 'Real Estate Dakshina Kannada', link: '/contact' },
                { label: 'Villas in Madikeri Coorg', link: '/projects/pk-signature-luxury-villa' },
                { label: 'Plots in Tumkur', link: '/projects' },
                { label: 'Real Estate Saligram', link: '/projects' },
                { label: 'Plots in Chamarajanagar', link: '/projects' },
                { label: 'Property in Kollegal', link: '/projects' },
                { label: 'NRI Property UAE & Dubai', link: '/contact' },
                { label: 'NRI Property Saudi Arabia', link: '/contact' },
                { label: 'NRI Property Qatar & Kuwait', link: '/contact' },
                { label: 'NRI Property Bahrain & Oman', link: '/contact' }
              ].map((pill, i) => (
                <Link
                  key={i}
                  to={pill.link}
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-[#b68a5c] hover:border-[#b68a5c] transition-colors shadow-2xs font-medium"
                >
                  {pill.label}
                </Link>
              ))}
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
                      <option value="PK Green Town (Phase-2)">I'm interested in PK Green Town (Phase-2) - Mandya</option>
                      <option value="PK VIP Gallery">I'm interested in PK VIP Gallery - Mandya</option>
                      <option value="PK Signature Luxury Villa">I'm interested in PK Signature Luxury Villa (Turnkey Build)</option>
                      <option value="PK Community Hall & Events">I'm interested in PK Community Hall & Events (Venue Booking)</option>
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

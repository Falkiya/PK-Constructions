import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronRight, 
  ChevronLeft, 
  ShieldCheck, 
  Award, 
  CheckCircle, 
  Sparkles,
  Pause,
  Play
} from 'lucide-react';

interface SlideData {
  id: number;
  badge: string;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix: string;
  subtitle: string;
  image: string;
  primaryCta: {
    label: string;
    path: string;
  };
  secondaryCta: {
    label: string;
    path: string;
  };
  category: string;
  statBadge: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    badge: 'Premier Property Dealing & Real Estate Advisory',
    titlePrefix: 'Connecting You With ',
    titleHighlight: 'Verified,',
    titleSuffix: ' Prime Properties.',
    subtitle: 'PK Properties specializes in high-value residential villas, Grade-A commercial tech hubs, and high-appreciation investment plots with 100% legal title verification.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80',
    primaryCta: {
      label: 'Explore Properties',
      path: '/projects',
    },
    secondaryCta: {
      label: 'Property Consultation',
      path: '/contact',
    },
    category: 'Property Dealing',
    statBadge: '500+ Deals Closed',
  },
  {
    id: 2,
    badge: 'Luxury Residential Buying & Selling',
    titlePrefix: 'Discover ',
    titleHighlight: 'Ultra-Luxury',
    titleSuffix: ' Villas & Dream Residencies.',
    subtitle: 'Curated portfolio of ready-to-move architectural villas, duplex penthouses, and gated community estates across Bengaluru\'s most coveted pin codes.',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=2000&q=80',
    primaryCta: {
      label: 'View Luxury Villas',
      path: '/projects/residential',
    },
    secondaryCta: {
      label: 'Inquire Now',
      path: '/get-a-quote',
    },
    category: 'Luxury Villas',
    statBadge: '100% Clear Titles',
  },
  {
    id: 3,
    badge: 'Commercial Real Estate & Corporate Leasing',
    titlePrefix: 'Acquire ',
    titleHighlight: 'High-Yield',
    titleSuffix: ' Commercial & Tech Spaces.',
    subtitle: 'Strategic corporate office tech parks, retail lifestyle showrooms, and pre-leased investment assets yielding 8% - 10% guaranteed rental returns.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80',
    primaryCta: {
      label: 'View Commercial Deals',
      path: '/projects/commercial',
    },
    secondaryCta: {
      label: 'Corporate Inquiry',
      path: '/contact',
    },
    category: 'Commercial Assets',
    statBadge: '8-10% Rental Yields',
  },
  {
    id: 4,
    badge: 'Approved Plots & Land Acquisition',
    titlePrefix: 'Verified ',
    titleHighlight: 'Plots & Land',
    titleSuffix: ' For Building & Investment.',
    subtitle: 'RERA, BDA, and BMRDA sanctioned residential layout plots, commercial highway frontage land, and high-appreciation development parcels.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=80',
    primaryCta: {
      label: 'Explore Plots & Land',
      path: '/services/architecture-planning',
    },
    secondaryCta: {
      label: 'Turnkey Villa Build',
      path: '/get-a-quote',
    },
    category: 'Plots & Land Deals',
    statBadge: 'RERA & BDA Approved',
  },
];

const SLIDE_DURATION = 6500; // 6.5 seconds per slide

export const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Autoplay management
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [nextSlide, isPaused]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      // Swiped left -> next
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      // Swiped right -> prev
      prevSlide();
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  const activeSlide = slides[currentSlide];

  return (
    <section 
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-20 pb-16 lg:py-24 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="PK Developers Featured Capabilities"
    >
      {/* Background Slides with Crossfade and Subtle Zoom */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.badge}
                className={`w-full h-full object-cover object-center filter brightness-[0.38] transition-transform duration-[7000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              />
            </div>
          );
        })}

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-950/60 pointer-events-none" />
        <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Main Slide Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-6 sm:pt-10 flex flex-col items-center">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-900/90 border border-amber-500/40 text-amber-400 text-xs sm:text-sm font-semibold shadow-xl backdrop-blur-md transition-all duration-300">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-ping" />
            <span>{activeSlide.badge}</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-stone-800/80 border border-stone-700 text-stone-300 text-xs font-medium backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{activeSlide.statBadge}</span>
          </div>
        </div>

        {/* Dynamic Animated Headline */}
        <div key={`title-${currentSlide}`} className="transition-all duration-500">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.15] sm:leading-[1.1] max-w-5xl mx-auto font-display">
            {activeSlide.titlePrefix}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
              {activeSlide.titleHighlight}
            </span>
            {activeSlide.titleSuffix}
          </h1>

          {/* Subtitle */}
          <p className="mt-5 sm:mt-6 text-sm sm:text-lg md:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed font-normal">
            {activeSlide.subtitle}
          </p>
        </div>

        {/* CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link
            to={activeSlide.primaryCta.path}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-base shadow-2xl shadow-amber-500/30 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>{activeSlide.primaryCta.label}</span>
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            to={activeSlide.secondaryCta.path}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-stone-900/80 hover:bg-stone-800 text-stone-100 hover:text-white border border-stone-700 font-semibold text-base backdrop-blur-md transition-all duration-200"
          >
            <span>{activeSlide.secondaryCta.label}</span>
            <ChevronRight className="w-4 h-4 text-stone-400" />
          </Link>
        </div>

        {/* Interactive Slide Tabs / Indicators */}
        <div className="mt-12 sm:mt-14 w-full max-w-3xl">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            {slides.map((slide, idx) => {
              const isSelected = idx === currentSlide;
              return (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(idx)}
                  className={`group relative text-left p-2.5 sm:p-3 rounded-xl border transition-all duration-300 backdrop-blur-md ${
                    isSelected
                      ? 'bg-stone-900/90 border-amber-500/60 shadow-lg shadow-amber-500/10'
                      : 'bg-stone-950/60 border-stone-800/80 hover:bg-stone-900/60 hover:border-stone-700 text-stone-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}: ${slide.category}`}
                  aria-current={isSelected ? 'true' : 'false'}
                >
                  <div className="flex items-center justify-between text-[11px] sm:text-xs font-semibold mb-1">
                    <span className={isSelected ? 'text-amber-400 font-mono' : 'text-stone-500 font-mono'}>
                      0{idx + 1}
                    </span>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                    )}
                  </div>
                  <div className={`text-xs sm:text-sm font-semibold truncate ${
                    isSelected ? 'text-white' : 'text-stone-300 group-hover:text-stone-200'
                  }`}>
                    {slide.category}
                  </div>

                  {/* Active Slide Progress Line */}
                  <div className="mt-2 w-full bg-stone-800 h-1 rounded-full overflow-hidden">
                    {isSelected ? (
                      <div
                        key={`prog-${currentSlide}`}
                        className={`h-full bg-amber-500 animate-slide-progress ${isPaused ? 'paused' : ''}`}
                      />
                    ) : (
                      <div className="h-full w-0 bg-stone-800" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Slide Counter & Play/Pause Controls */}
        <div className="mt-6 flex items-center justify-center gap-4 text-xs text-stone-400 font-mono">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-stone-900/80 border border-stone-800 hover:border-stone-700 hover:text-stone-200 transition-colors"
            title={isPaused ? 'Resume auto-play' : 'Pause auto-play'}
          >
            {isPaused ? (
              <>
                <Play className="w-3 h-3 text-amber-400 fill-amber-400" />
                <span>Play</span>
              </>
            ) : (
              <>
                <Pause className="w-3 h-3 text-amber-400" />
                <span>Pause</span>
              </>
            )}
          </button>
          <span>
            <strong className="text-amber-400">0{currentSlide + 1}</strong> / 0{slides.length}
          </span>
        </div>

        {/* Trust Highlights */}
        <div className="mt-10 sm:mt-12 pt-8 border-t border-stone-800/80 max-w-4xl w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0" />
            <span className="text-xs sm:text-sm text-stone-300 font-medium">100% Clear Title Guarantee</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Award className="w-5 h-5 text-amber-500 shrink-0" />
            <span className="text-xs sm:text-sm text-stone-300 font-medium">RERA & Legal Due-Diligence</span>
          </div>
          <div className="flex items-center gap-2.5">
            <CheckCircle className="w-5 h-5 text-amber-500 shrink-0" />
            <span className="text-xs sm:text-sm text-stone-300 font-medium">Zero Hidden Brokerage</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-amber-500 shrink-0" />
            <span className="text-xs sm:text-sm text-stone-300 font-medium">500+ Deals Successfully Closed</span>
          </div>
        </div>
      </div>

      {/* Floating Left / Right Navigation Chevrons */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full items-center justify-center bg-stone-900/70 hover:bg-stone-900 border border-stone-700/80 hover:border-amber-500/80 text-stone-300 hover:text-amber-400 backdrop-blur-md shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full items-center justify-center bg-stone-900/70 hover:bg-stone-900 border border-stone-700/80 hover:border-amber-500/80 text-stone-300 hover:text-amber-400 backdrop-blur-md shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </section>
  );
};

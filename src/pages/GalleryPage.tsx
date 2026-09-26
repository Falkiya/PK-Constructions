import React, { useState, useMemo } from 'react';
import { 
  Eye, 
  Filter, 
  MapPin, 
  ArrowRight, 
  Layers, 
  Sparkles 
} from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { Lightbox } from '../components/common/Lightbox';
import { CTASection } from '../components/common/CTASection';
import { galleryItems } from '../data/galleryData';
import { GalleryCategory } from '../types';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory | 'All'>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const categories: (GalleryCategory | 'All')[] = [
    'All',
    'Completed Projects',
    'Construction Sites',
    'Architecture',
    'Interiors',
    'Exteriors',
    'Materials',
    'Team',
    'Behind the Scenes'
  ];

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'All') return galleryItems;
    return galleryItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const lightboxImages = useMemo(() => {
    return filteredItems.map((item) => ({
      url: item.imageUrl,
      title: item.title,
      caption: item.caption
    }));
  }, [filteredItems]);

  return (
    <>
      <SEOHead
        title="Project & Construction Gallery | PK Developers"
        description="Explore high-resolution media documenting our completed luxury residences, commercial high-rises, on-site construction work, materials testing, and architecture."
        canonicalPath="/gallery"
      />

      {/* HERO */}
      <section className="relative py-28 bg-stone-950 overflow-hidden border-b border-stone-800">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"
            alt="PK Developers Media Gallery"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950/90" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-6">
            Visual Portfolio
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Construction & Project Gallery
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-stone-300 max-w-3xl mx-auto leading-relaxed">
            An unfiltered visual record of our civil engineering, architectural craft, on-site safety standards, and completed landmarks.
          </p>
        </div>
      </section>

      {/* CATEGORY FILTER BAR */}
      <section className="py-6 bg-stone-900 border-b border-stone-800 sticky top-[73px] z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-stone-950 shadow-md shadow-amber-500/20'
                    : 'bg-stone-800 text-stone-300 hover:text-white hover:bg-stone-700/80 border border-stone-700/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* MASONRY GALLERY */}
      <section className="py-20 bg-stone-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="break-inside-avoid group relative rounded-2xl overflow-hidden border border-stone-800 bg-stone-900 cursor-pointer shadow-lg hover:border-amber-500/50 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

                  {/* Hover icon */}
                  <div className="absolute top-4 right-4 p-2.5 rounded-xl bg-stone-950/80 text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    <Eye className="w-4 h-4" />
                  </div>

                  {/* Overlay text */}
                  <div className="absolute bottom-4 left-4 right-4 space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-stone-950/80 px-2 py-0.5 rounded border border-amber-500/20 inline-block">
                      {item.category}
                    </span>
                    <h3 className="text-base font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-stone-300 line-clamp-2 leading-relaxed">
                      {item.caption}
                    </p>
                    {item.location && (
                      <div className="flex items-center gap-1.5 text-[11px] text-stone-400 pt-1">
                        <MapPin className="w-3 h-3 text-amber-400" />
                        <span>{item.location}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Inspired by What You See?"
        subtitle="Bring your architectural visions to life with PK Developers. Our engineers and designers are ready to discuss your project."
        primaryButtonText="Start Your Project"
        primaryButtonLink="/get-a-quote"
        secondaryButtonText="Explore Projects"
        secondaryButtonLink="/projects"
      />

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setLightboxIndex((prev) => (prev > 0 ? prev - 1 : lightboxImages.length - 1))}
        onNext={() => setLightboxIndex((prev) => (prev < lightboxImages.length - 1 ? prev + 1 : 0))}
      />
    </>
  );
};

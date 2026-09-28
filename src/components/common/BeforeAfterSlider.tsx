import React, { useState, useRef, useCallback } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  title?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Before Renovation',
  afterLabel = 'After Modernization',
  title
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let position = (x / rect.width) * 100;
    if (position < 0) position = 0;
    if (position > 100) position = 100;
    setSliderPosition(position);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  return (
    <div className="w-full">
      {title && (
        <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center justify-between">
          <span>{title}</span>
          <span className="text-xs text-blue-600 font-medium">Drag slider to compare</span>
        </h4>
      )}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        className="relative w-full h-[400px] md:h-[520px] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-slate-200 shadow-xl bg-slate-100"
      >
        {/* AFTER Image (Full background) */}
        <img
          src={afterImage}
          alt={afterLabel}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* BEFORE Image (Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage}
            alt={beforeLabel}
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
          />
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 z-20 pointer-events-none">
          <span className="px-3 py-1 rounded-md bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold tracking-wide border border-slate-700">
            {beforeLabel}
          </span>
        </div>
        <div className="absolute top-4 right-4 z-20 pointer-events-none">
          <span className="px-3 py-1 rounded-md bg-blue-600/90 backdrop-blur-md text-white text-xs font-bold tracking-wide border border-blue-400">
            {afterLabel}
          </span>
        </div>

        {/* Divider Bar & Handle */}
        <div
          className="absolute top-0 bottom-0 z-30 flex items-center justify-center -translate-x-1/2 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-0.5 h-full bg-blue-500 shadow-[0_0_10px_rgba(37,99,235,0.8)]" />
          <div
            onMouseDown={handleMouseDown}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            className="pointer-events-auto absolute w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xl border-2 border-white cursor-ew-resize hover:scale-110 active:scale-95 transition-transform"
          >
            <div className="flex items-center gap-1">
              <div className="w-1 h-3 bg-white rounded-full" />
              <div className="w-1 h-3 bg-white rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

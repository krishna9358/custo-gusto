'use client';

import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { WorkItem } from '@/data/work';

interface LightboxProps {
  item: WorkItem | null;
  items: WorkItem[];
  onClose: () => void;
  onSelect: (item: WorkItem) => void;
}

export default function Lightbox({
  item,
  items,
  onClose,
  onSelect,
}: LightboxProps) {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, items]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIndex]);
  };

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % items.length;
    onSelect(items[nextIndex]);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative w-[min(1040px,94vw)] h-[min(660px,88vh)] bg-panel border border-rule shadow-2xl overflow-hidden p-6 flex flex-col md:flex-row gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          aria-label="Close Lightbox"
          className="absolute top-4 right-4 z-10 p-2 bg-ground text-ink hover:text-brick transition-colors"
          onClick={onClose}
        >
          <X className="w-6 h-6" />
        </button>

        {/* Image Preview Container */}
        <div className="relative flex-1 min-h-0 flex items-center justify-center bg-ground overflow-hidden">
          <img
            src={`/img/${item.id}.jpg`}
            alt={item.alt}
            decoding="async"
            className="max-h-full max-w-full w-auto h-auto object-contain"
          />

          {/* Navigation Controls */}
          {items.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous Image"
                className="absolute left-2 p-2 bg-panel/80 text-ink hover:text-brick transition-colors"
                onClick={handlePrev}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                aria-label="Next Image"
                className="absolute right-2 p-2 bg-panel/80 text-ink hover:text-brick transition-colors"
                onClick={handleNext}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Image Details */}
        <div className="md:w-80 md:shrink-0 flex flex-col justify-between space-y-4 overflow-hidden">
          <div>
            <span className="text-xs uppercase tracking-widest text-brick font-bold">
              {item.tech.toUpperCase()} &bull; {item.prod.toUpperCase()}
            </span>
            <h3 className="text-xl font-bold text-ink mt-2">
              {item.title || item.alt}
            </h3>
            <p className="text-sm text-soft mt-3">{item.alt}</p>
          </div>

          <div className="pt-4 border-t border-rule flex justify-between items-center text-xs text-soft font-mono">
            <span>SHOT CODE: {item.id.toUpperCase()}</span>
            <span>
              {currentIndex + 1} / {items.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

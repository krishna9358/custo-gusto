'use client';

import React, { useState } from 'react';
import { Photo } from './SharedSections';

const TOUCH_ITEMS = [
  {
    imgKey: 'touch_shoes',
    alt: 'An embroidered sneaker',
    caption: 'Shoes — lead the desk',
  },
  {
    imgKey: 'touch_caps',
    alt: 'A cap with a gold emblem',
    caption: 'Caps — gold emblem finish',
  },
  {
    imgKey: 'touch_leather',
    alt: 'An engraved leather wallet',
    caption: 'Leather — laser precision',
  },
  {
    imgKey: 'touch_foil',
    alt: 'Hot foil, close',
    caption: 'Digital hot foil detail',
  },
  {
    imgKey: 'w06',
    alt: 'Embroidery, close enough to count the threads',
    caption: 'Tees & jackets — thread density up close',
  },
  {
    imgKey: 'w12',
    alt: 'A name engraved into steel',
    caption: 'Hard goods — engraved into steel',
  },
];

export function TouchCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === TOUCH_ITEMS.length - 1;

  const handlePrev = () => {
    if (!isFirst) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (!isLast) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const current = TOUCH_ITEMS[currentIndex];

  return (
    <div className="w-full">
      <div className="relative overflow-hidden select-none">
        <Photo
          imgKey={current.imgKey}
          alt={current.alt}
          shape="ph-sq"
        />

        {/* Minimal Standalone Left Chevron Arrow */}
        <button
          type="button"
          aria-label="Previous image"
          onClick={handlePrev}
          disabled={isFirst}
          className={`absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center bg-transparent border-0 p-0 cursor-pointer transition-all duration-200 ${
            isFirst
              ? 'opacity-0 pointer-events-none'
              : 'opacity-90 hover:opacity-100 active:scale-90 text-[#F3EBE1]'
          }`}
          style={{
            filter: 'drop-shadow(0 1.5px 3px rgba(0, 0, 0, 0.5)) drop-shadow(0 3px 8px rgba(0, 0, 0, 0.35))',
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8 sm:w-9 sm:h-9"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Minimal Standalone Right Chevron Arrow */}
        <button
          type="button"
          aria-label="Next image"
          onClick={handleNext}
          disabled={isLast}
          className={`absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 flex items-center justify-center bg-transparent border-0 p-0 cursor-pointer transition-all duration-200 ${
            isLast
              ? 'opacity-0 pointer-events-none'
              : 'opacity-90 hover:opacity-100 active:scale-90 text-[#F3EBE1]'
          }`}
          style={{
            filter: 'drop-shadow(0 1.5px 3px rgba(0, 0, 0, 0.5)) drop-shadow(0 3px 8px rgba(0, 0, 0, 0.35))',
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8 sm:w-9 sm:h-9"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      <p className="ph-cap">{current.caption}</p>
    </div>
  );
}

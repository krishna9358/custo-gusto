'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CASES_DATA } from '@/data/clients';

const SWATCHES = ['e-ind', 'e-mar', 'e-bri'];

export function ClientsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollLimits = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScrollLimits();
    el.addEventListener('scroll', checkScrollLimits, { passive: true });
    window.addEventListener('resize', checkScrollLimits);
    return () => {
      el.removeEventListener('scroll', checkScrollLimits);
      window.removeEventListener('resize', checkScrollLimits);
    };
  }, [checkScrollLimits]);

  const handleScroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;

    const firstCard = el.firstElementChild as HTMLElement | null;
    const scrollStep = firstCard
      ? firstCard.offsetWidth + 20
      : el.clientWidth * 0.8;

    el.scrollBy({
      left: direction === 'left' ? -scrollStep : scrollStep,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <div className="tg-head" data-aos="fade-up">
        <div>
          <h2 className="big" data-aos="fade-up" data-aos-delay="100">
            TRUSTED BY
          </h2>
        </div>
        <div
          className="tg-nav"
          aria-label="Client case studies navigation"
          data-aos="fade-up"
          data-aos-delay="120"
        >
          <button
            type="button"
            aria-label="Previous client"
            onClick={() => handleScroll('left')}
            disabled={!canScrollLeft}
            className={`tg-nav-btn ${!canScrollLeft ? 'disabled' : ''}`}
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={2.2} />
          </button>
          <button
            type="button"
            aria-label="Next client"
            onClick={() => handleScroll('right')}
            disabled={!canScrollRight}
            className={`tg-nav-btn ${!canScrollRight ? 'disabled' : ''}`}
          >
            <ChevronRight className="w-5 h-5" strokeWidth={2.2} />
          </button>
        </div>
      </div>

      <div className="client-carousel-rail" style={{ marginTop: '30px' }}>
        <div className="client-carousel-track" ref={scrollRef}>
          {CASES_DATA.map((c, i) => (
            <div
              className="eng"
              key={i}
              data-aos="fade-up"
              data-aos-delay={(i % 3) * 100}
            >
              <div className={`eng-t ${SWATCHES[i % SWATCHES.length]}`}>
                <div className="n">{c.meta}</div>
                <div className="h">{c.title}</div>
              </div>
              <div className="eng-b">
                <p style={{ fontSize: '15px', lineHeight: '1.55', color: 'var(--soft)', margin: 0 }}>
                  {c.body}
                </p>
                {c.noteLabel && (
                  <div className="eng-f">
                    <p style={{ fontSize: '13.5px', color: 'var(--ink)', margin: 0 }}>
                      <strong style={{ color: 'var(--brick)' }}>{c.noteLabel}</strong> {c.noteText}
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

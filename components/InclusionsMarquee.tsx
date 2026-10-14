'use client';

import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const INCLUSIONS = [
  {
    title: 'Expert operator',
    desc: 'Trained on our system, so every city runs the same.',
  },
  {
    title: 'Live designer',
    desc: 'In-house design at the desk. Never a separate line.',
  },
  {
    title: 'All raw materials',
    desc: 'Threads, films, foils, backing. Nothing to source.',
  },
  {
    title: '365-day maintenance',
    desc: 'You will not lose a trading day to a machine.',
  },
];

export function InclusionsMarquee() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);
  const userInteractingTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    const step = (now: number) => {
      const delta = now - lastTime;
      lastTime = now;

      if (!isHoveredRef.current && el) {
        const halfWidth = el.scrollWidth / 2;
        el.scrollLeft += delta * 0.035;
        if (el.scrollLeft >= halfWidth) {
          el.scrollLeft -= halfWidth;
        } else if (el.scrollLeft <= 0) {
          el.scrollLeft += halfWidth;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (userInteractingTimeout.current) {
        clearTimeout(userInteractingTimeout.current);
      }
    };
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;

    isHoveredRef.current = true;
    if (userInteractingTimeout.current) {
      clearTimeout(userInteractingTimeout.current);
    }
    userInteractingTimeout.current = setTimeout(() => {
      isHoveredRef.current = false;
    }, 2800);

    const halfWidth = el.scrollWidth / 2;
    if (direction === 'left' && el.scrollLeft <= 10) {
      el.scrollLeft += halfWidth;
    } else if (direction === 'right' && el.scrollLeft >= halfWidth - 10) {
      el.scrollLeft -= halfWidth;
    }

    const firstCard = el.querySelector('.incl-card') as HTMLElement | null;
    const scrollStep = firstCard ? firstCard.offsetWidth + 20 : 300;

    el.scrollBy({
      left: direction === 'left' ? -scrollStep : scrollStep,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className="wrap">
        <div className="tg-head" data-aos="fade-up">
          <div>
            <h2 className="big" style={{ color: 'var(--brick)' }}>
              INCLUDED IN EVERY MODEL.
            </h2>
          </div>
          <div
            className="tg-nav"
            aria-label="Inclusions carousel navigation"
            data-aos="fade-up"
            data-aos-delay="120"
          >
            <button
              type="button"
              aria-label="Previous inclusion"
              onClick={() => handleScroll('left')}
              className="tg-nav-btn"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={2.2} />
            </button>
            <button
              type="button"
              aria-label="Next inclusion"
              onClick={() => handleScroll('right')}
              className="tg-nav-btn"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={2.2} />
            </button>
          </div>
        </div>
      </div>
      <div
        className="incl-marquee"
        ref={scrollRef}
        style={{ marginTop: '28px' }}
        data-aos="fade-up"
        data-aos-delay="100"
        onMouseEnter={() => {
          isHoveredRef.current = true;
        }}
        onMouseLeave={() => {
          isHoveredRef.current = false;
        }}
      >
        <div className="incl-track">
          {[0, 1, 2, 3].map((group) => (
            <div
              className="incl-group"
              key={group}
              aria-hidden={group > 0 ? true : undefined}
            >
              {INCLUSIONS.map((item, idx) => (
                <div key={idx} className="incl-card">
                  <h3 className="mid">{item.title}</h3>
                  <p style={{ fontSize: '15px', marginTop: '6px' }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import { CASES_DATA } from '@/data/clients';

function getYouTubeId(url?: string): string | null {
  if (!url) return null;
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/
  );
  return match ? match[1] : null;
}

function getYouTubeEmbedUrl(url: string): string {
  const id = getYouTubeId(url);
  return id
    ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`
    : url;
}

function getYouTubeThumbnailUrl(url?: string): string {
  const id = getYouTubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : '';
}

export function ClientsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

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

  useEffect(() => {
    if (!activeVideo) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveVideo(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeVideo]);

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
          {CASES_DATA.map((c, i) => {
            const thumb = getYouTubeThumbnailUrl(c.videoUrl);

            return (
              <div
                className="scale-card group"
                key={i}
                data-aos="fade-up"
                data-aos-delay={(i % 3) * 100}
              >
                {/* 1. Video Thumbnail / Play Area */}
                {c.videoUrl && (
                  <div
                    className="scale-card-video"
                    onClick={() => setActiveVideo(c.videoUrl!)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Play video for ${c.title}`}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveVideo(c.videoUrl!);
                      }
                    }}
                  >
                    {thumb ? (
                      <img
                        src={thumb}
                        alt={c.title}
                        loading="lazy"
                        decoding="async"
                      />
                    ) : (
                      <div className="w-full h-full bg-night flex items-center justify-center" />
                    )}
                    <div className="scale-video-overlay">
                      <div className="scale-play-btn">
                        <Play className="w-5 h-5 fill-current translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. Content Body */}
                <div className="scale-card-body">
                  <div className="scale-card-title">{c.title}</div>
                  <div className="scale-card-highlight">{c.meta}</div>
                  <p style={{ fontSize: '14.5px', lineHeight: '1.55', color: 'var(--soft)', margin: 0 }}>
                    {c.body}
                  </p>
                  {c.noteLabel && (
                    <p style={{ fontSize: '13.5px', color: 'var(--ink)', margin: '8px 0 0' }}>
                      <strong style={{ color: 'var(--brick)' }}>{c.noteLabel}</strong> {c.noteText}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-rule/30"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Close Video"
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-black/70 hover:bg-brick text-white transition-colors"
              onClick={() => setActiveVideo(null)}
            >
              <X className="w-5 h-5" />
            </button>
            <iframe
              src={getYouTubeEmbedUrl(activeVideo)}
              title="Client Case Study Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        </div>
      )}
    </div>
  );
}

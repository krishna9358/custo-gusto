'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import { SCALE_CASES_DATA, ScaleCaseItem } from '@/data/scaleCases';

function getYouTubeId(url: string): string | null {
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

function getYouTubeThumbnailUrl(url: string): string {
  const id = getYouTubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : '';
}

export function ScaleCasesSection({
  eyebrow = 'Activations &middot; scale',
  title = 'MADE LIVE. AT SCALE.',
}: {
  eyebrow?: string;
  title?: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const checkScrollLimits = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 6);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 6);
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
    <>
      <div className="tg-head" data-aos="fade-up">
        <div>
          {eyebrow && (
            <p
              className="eyebrow"
              style={{ color: 'var(--indigo)' }}
              dangerouslySetInnerHTML={{ __html: eyebrow }}
            />
          )}
          <h2 className="big" data-aos="fade-up" data-aos-delay="100" style={{ color: 'var(--brick)' }}>
            {title}
          </h2>
        </div>
        <div
          className="scale-nav"
          aria-label="Case studies navigation"
          data-aos="fade-up"
          data-aos-delay="120"
        >
          <button
            type="button"
            aria-label="Previous case studies"
            onClick={() => handleScroll('left')}
            disabled={!canScrollLeft}
            className={`tg-nav-btn ${!canScrollLeft ? 'disabled' : ''}`}
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={2.2} />
          </button>
          <Link href="/clients" className="scale-view-all">
            View all
          </Link>
          <button
            type="button"
            aria-label="Next case studies"
            onClick={() => handleScroll('right')}
            disabled={!canScrollRight}
            className={`tg-nav-btn ${!canScrollRight ? 'disabled' : ''}`}
          >
            <ChevronRight className="w-5 h-5" strokeWidth={2.2} />
          </button>
        </div>
      </div>

      <div className="scale-rail" style={{ marginTop: '30px' }}>
        <div className="scale-track" ref={scrollRef}>
          {SCALE_CASES_DATA.map((item: ScaleCaseItem, idx: number) => {
            const thumbnail =
              item.thumbnail || getYouTubeThumbnailUrl(item.videoUrl);

            return (
              <div
                key={item.id}
                className="scale-card group"
                data-aos="fade-up"
                data-aos-delay={(idx % 3) * 100}
              >
                {/* 1. Video Thumbnail / Play Area */}
                <div
                  className="scale-card-video"
                  onClick={() => setActiveVideo(item.videoUrl)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Play video for ${item.title}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setActiveVideo(item.videoUrl);
                    }
                  }}
                >
                  {thumbnail ? (
                    <img
                      src={thumbnail}
                      alt={item.title}
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

                {/* 2. Content Body */}
                <div className="scale-card-body">
                  <div className="scale-card-title">{item.title}</div>
                  <div className="scale-card-highlight">{item.highlight}</div>
                  <p className="scale-card-desc">{item.description}</p>
                </div>

                {/* 3. Techniques Footer */}
                <div className="scale-card-footer">
                  <div className="scale-card-tech-label">Techniques</div>
                  <div className="scale-card-tags">
                    {item.techniques.map((tag: string, tIdx: number) => (
                      <span key={tIdx} className="scale-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Watch our events YouTube CTA Button */}
      <div style={{ marginTop: '28px' }} data-aos="fade-up" data-aos-delay="150">
        <a
          href="https://www.youtube.com/@CustoGusto-desk"
          target="_blank"
          rel="noopener noreferrer"
          className="scale-events-btn"
        >
          <Play className="w-4 h-4 fill-current" />
          <span>Watch our events</span>
        </a>
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
              title="Case Study Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        </div>
      )}
    </>
  );
}

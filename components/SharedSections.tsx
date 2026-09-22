'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import { Dot, bc, YouTubeBrandIcon, InstagramBrandIcon } from './Glyphs';
import { Button } from './Button';
import { ShoeCarousel } from './ShoeCarousel';
import { ENGINES_DATA } from '@/data/engines';
import { TECHS_DATA } from '@/data/techniques';
import { TICKETS_DATA } from '@/data/clients';
import { Sticker } from './Sticker';

export const IMG_KEYS: Record<string, string> = {
  contact_e1: '/img/contact_e1.jpg',
  story_c2: '/img/story_c2.jpg',
  story_c3: '/img/story_c3.jpg',
  story_e2: '/img/story_e2.jpg',
  story_e5: '/img/story_e5.jpg',
  svc_a10: '/img/svc_a10.jpg',
  svc_c1: '/img/svc_c1.jpg',
  svc_e1: '/img/svc_e1.jpg',
  touch_caps: '/img/touch_caps.jpg',
  touch_foil: '/img/touch_foil.jpg',
  touch_leather: '/img/touch_leather.jpg',
  touch_shoes: '/img/touch_shoes.jpg',
  w01: '/img/w01.jpg',
  w02: '/img/w02.jpg',
  w03: '/img/w03.jpg',
  w04: '/img/w04.jpg',
  w05: '/img/w05.jpg',
  w06: '/img/w06.jpg',
  w08: '/img/w08.jpg',
  w09: '/img/w09.jpg',
  w10: '/img/w10.jpg',
  w11: '/img/w11.jpg',
  w12: '/img/w12.jpg',
  w13: '/img/w13.jpg',
  w14: '/img/w14.jpg',
  w15: '/img/w15.jpg',
  w16: '/img/w16.jpg',
  w17: '/img/w17.jpg',
  w18: '/img/w18.jpg',
  why_a1: '/img/why_a1.jpg',
  'shoe-02-vedh-product': '/img/shoe-02-vedh-product.jpg',
  'shoe-05-tyagi-09-on-foot': '/img/shoe-05-tyagi-09-on-foot.jpg',
  'shoe-07-blue-orange-on-foot': '/img/shoe-07-blue-orange-on-foot.jpg',
  'shoe-09-hrithik-product': '/img/shoe-09-hrithik-product.jpg',
  'shoe-10-red-cloud-on-foot': '/img/shoe-10-red-cloud-on-foot.jpg',
  '01-shoe-cursive-10-embroidered': '/img/01-shoe-cursive-10-embroidered.jpg',
  '05-dtf-heat-press-process': '/img/05-dtf-heat-press-process.jpg',
  'dhf-09-hands-loading-machine': '/img/dhf-09-hands-loading-machine.jpg',
  '04-machine-rotary-tumbler': '/img/04-machine-rotary-tumbler.jpg',
  '02-uv-phone-case-wide': '/img/02-uv-phone-case-wide.jpg',
  '04-orange-character-model-portrait': '/img/04-orange-character-model-portrait.jpg',
};

export function Slot({
  code,
  label,
  shape,
}: {
  code: string;
  label: string;
  shape?: string;
}) {
  return (
    <div className={`slot ${shape || 'slot-16'}`}>
      <div className="slot-in">
        <div className="slot-c">{code}</div>
        <div className="slot-l">{label}</div>
      </div>
    </div>
  );
}

export function Photo({
  imgKey,
  alt,
  shape,
}: {
  imgKey: string;
  alt: string;
  shape: string;
}) {
  if (!IMG_KEYS[imgKey]) {
    const slotShape =
      shape === 'ph-23' ? 'slot-23' : shape === 'ph-sq' ? 'slot-sq' : 'slot-16';
    return <Slot code={imgKey} label={alt} shape={slotShape} />;
  }
  return (
    <figure className={`ph ${shape}`} style={{ margin: 0 }}>
      <img src={IMG_KEYS[imgKey]} alt={alt} loading="lazy" decoding="async" />
    </figure>
  );
}

export function One8Photo({ shape }: { shape: string }) {
  return (
    <figure className={`ph ${shape}`} style={{ margin: 0 }}>
      <img
        src="/img/one8-midstitch.jpg"
        alt="A sneaker held in front of an embroidery machine at the one8 Global Premiere"
      />
    </figure>
  );
}

export function StatTiles({ night }: { night?: boolean }) {
  const row = [
    ['40,000+', 'Customers served'],
    ['1,20,000+', 'Pieces embroidered'],
    ['3', 'Things the average customer takes home, not one'],
  ];

  return (
    <>
      <div className="sr">
        {row.map((t, idx) => (
          <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
            <div className="v">{t[0]}</div>
            <div className="l">{t[1]}</div>
          </div>
        ))}
      </div>
      <div className="revband" data-aos="fade-up" data-aos-delay="300">
        <span className="st">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
        <span className="bg">A PERFECT 5.0</span>
        <span className="tx">
          500+ Google reviews, from stores right across India.
        </span>
      </div>
    </>
  );
}

export function HowItWorks() {
  const steps = [
    [
      'Pick the thing',
      'Your shoes, your cap, your jacket. Something you already own, or something off the shelf.',
    ],
    [
      'Tell us what to put on it',
      'A name. A date. A crest. A drawing your kid made. Our designer sits right there and draws it up with you.',
    ],
    [
      'Watch it being made',
      'The machine runs while you stand there. Minutes later you walk away with it.',
    ],
  ];

  return (
    <div className="steps-flow">
      <div className="g g3">
        {steps.map((s, i) => (
          <div
            className="tech transition-all duration-300 hover:-translate-y-1.5 hover:shadow-sh-lg hover:border-brick"
            key={i}
            data-aos="fade-up"
            data-aos-delay={i * 120}
          >
            <div
              className="tn"
              style={{ color: 'var(--indigo)', fontSize: '34px', lineHeight: 1 }}
            >
              {i + 1}
            </div>
            <div className="tn">{s[0]}</div>
            <div className="tb">{s[1]}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Engines() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const getYouTubeId = (url?: string) => {
    if (!url) return null;
    const match = url.match(
      /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/
    );
    return match ? match[1] : null;
  };

  const getYouTubeThumbnail = (url?: string) => {
    const id = getYouTubeId(url);
    return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : '';
  };

  const getYouTubeEmbedUrl = (url: string) => {
    const id = getYouTubeId(url);
    return id
      ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`
      : url;
  };

  return (
    <>
      <div className="g g3">
        {ENGINES_DATA.map((e, idx) => {
          const thumb = getYouTubeThumbnail(e.videoUrl);
          return (
            <div
              key={idx}
              className="eng-card group"
              data-aos="fade-up"
              data-aos-delay={idx * 120}
            >
              {e.videoUrl && (
                <div
                  className="eng-media"
                  onClick={() => setActiveVideo(e.videoUrl!)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Play video for ${e.name}`}
                  onKeyDown={(ev) => {
                    if (ev.key === 'Enter' || ev.key === ' ') {
                      ev.preventDefault();
                      setActiveVideo(e.videoUrl!);
                    }
                  }}
                >
                  <img
                    src={thumb || '/img/01-shoe-cursive-10-embroidered.jpg'}
                    alt={e.name}
                    className="eng-img"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="scale-video-overlay">
                    <div className="scale-play-btn">
                      <Play className="w-5 h-5 fill-current translate-x-0.5" />
                    </div>
                  </div>
                </div>
              )}

              <div className="eng-inner">
                <div className="eng-top">
                  <div>
                    <div className="eng-kicker">{e.kicker}</div>
                    <div className="eng-name">{bc(e.name)}</div>
                  </div>
                </div>
                <p className="eng-problem">{e.problem}</p>
                <p className="eng-solution">{e.solution}</p>
                <div className="eng-foot">
                  <span className="eng-proof">{e.proof}</span>
                  <Link
                    href={e.href}
                    className="eng-cta-link group-hover:translate-x-1 transition-transform duration-200"
                  >
                    {e.cta || 'See how this works'} &rarr;
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

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
              title="Engine Video"
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

export function SameDeskDifferentRooms() {
  return (
    <section className="sec">
      <div className="wrap rwrap">
        <div className="rm-stk" data-aos="fade-down">
          <Sticker isHindi style={{ fontSize: '13px' }}>
            आपका. सिर्फ़ आपका.
          </Sticker>
        </div>
        <p className="eyebrow" data-aos="fade-up">Beyond retail</p>
        <h2 className="big" data-aos="fade-up" data-aos-delay="100">THE SAME DESK, DIFFERENT ROOMS.</h2>
        <p className="sub" style={{ marginTop: '12px', maxWidth: '52ch' }} data-aos="fade-up" data-aos-delay="150">
          A festival floor, a hotel lobby, a wedding. Same machines, same
          people, entirely different night.
        </p>
        <div className="tks">
          {TICKETS_DATA.map((r, i) => (
            <div className="tk2" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="tk2-t">{r.title}</div>
              <div className="tk2-d">{r.desc}</div>
              <span className="tk2-f">{r.tag}</span>
            </div>
          ))}
        </div>
        <div className="rm-cta" style={{ marginTop: '30px' }} data-aos="fade-up" data-aos-delay="200">
          <Button href="/contact" variant="primary">
            Tell us about your event
          </Button>
          <Button href="/work" variant="ghost">
            See the work
          </Button>
        </div>
      </div>
    </section>
  );
}

export function TechGrid({
  eyebrow = 'Six techniques · in-house design always included',
  title = 'SIX WAYS TO MARK A THING.',
  subtitle,
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}) {
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
    const scrollStep = firstCard ? firstCard.offsetWidth + 20 : el.clientWidth * 0.8;
    el.scrollBy({
      left: direction === 'left' ? -scrollStep : scrollStep,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className="tg-head" data-aos="fade-up">
        <div>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h2 className="big" data-aos="fade-up" data-aos-delay="100" style={{ color: 'var(--brick)' }}>{title}</h2>
        </div>
        <div className="tg-nav" aria-label="Carousel navigation" data-aos="fade-up" data-aos-delay="120">
          <button
            type="button"
            aria-label="Previous technique"
            onClick={() => handleScroll('left')}
            disabled={!canScrollLeft}
            className={`tg-nav-btn ${!canScrollLeft ? 'disabled' : ''}`}
          >
            <ChevronLeft className="w-5 h-5" strokeWidth={2.2} />
          </button>
          <button
            type="button"
            aria-label="Next technique"
            onClick={() => handleScroll('right')}
            disabled={!canScrollRight}
            className={`tg-nav-btn ${!canScrollRight ? 'disabled' : ''}`}
          >
            <ChevronRight className="w-5 h-5" strokeWidth={2.2} />
          </button>
        </div>
      </div>

      <div className="tg-rail" style={{ marginTop: '30px' }}>
        <div className="tg" ref={scrollRef}>
          {TECHS_DATA.map((t, idx) => (
            <div
              key={idx}
              className={`tk ${t.isHero ? 'hero' : ''}`}
              data-aos="fade-up"
              data-aos-delay={(idx % 3) * 100}
            >
              <div className="tk-media">
                <img
                  src={t.image}
                  alt={t.name}
                  className="tk-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="tk-inner">
                <div className="tk-top">
                  <div className="tk-name">{bc(t.name)}</div>
                  {t.isLive ? (
                    <span className="tk-live on">
                      <Dot /> Live
                    </span>
                  ) : (
                    <span className="tk-live off">Applied live</span>
                  )}
                </div>
                <div className="tk-hook">{t.hook}</div>
                <p className="tk-desc">{t.body}</p>
                {t.chips && t.chips.length > 0 && (
                  <div className="scale-card-tags" style={{ marginTop: '2px' }}>
                    {t.chips.map((c, i) => (
                      <span key={i} className="scale-tag">
                        {c}
                      </span>
                    ))}
                  </div>
                )}
                <div className="tk-foot">
                  <span className="tk-time">{t.time}</span>
                </div>
                <details className="sci">
                  <summary>How it actually works</summary>
                  <p dangerouslySetInnerHTML={{ __html: t.technical }} />
                </details>
              </div>
            </div>
          ))}
        </div>
      </div>

      {subtitle && (
        <p
          className="sub"
          style={{ marginTop: '20px', fontSize: '15px' }}
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {subtitle}
        </p>
      )}
    </>
  );
}

export function ClosingBand({ dare, sub }: { dare: string; sub: string }) {
  return (
    <section className="band band-mar">
      <div className="wrap close-g">
        <div data-aos="fade-up">
          <h2 className="big">{dare}</h2>
          <p style={{ marginTop: '14px', maxWidth: '46ch', fontSize: '17.5px' }}>
            {sub}
          </p>
          <div className="btns" style={{ marginTop: '26px' }}>
            <Button href="/contact" variant="primary">
              Get a price in 24 hours
            </Button>
            <Button href="/work" variant="ghost">
              Just look at the work
            </Button>
          </div>
          <p style={{ marginTop: '14px', fontSize: '14px', opacity: 0.8 }}>
            No meeting needed to get a number. We reply the same day.
          </p>
        </div>
        <div style={{ display: 'grid', gap: '12px' }} data-aos="fade-left" data-aos-delay="150">
          <div className="close-c">
            <div className="k">CHECK US OUT</div>
            <div className="close-social-grid" style={{ marginTop: '10px' }}>
              <a
                href="https://www.youtube.com/@CustoGusto-desk/shorts"
                target="_blank"
                rel="noopener noreferrer"
                className="close-social-card"
                aria-label="Custo Gusto on YouTube Shorts"
              >
                <div className="close-social-thumb">
                  <img
                    src="https://img.youtube.com/vi/SHvAwvWKkWY/hqdefault.jpg"
                    alt="Custo Gusto YouTube Shorts"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="close-social-overlay">
                    <div className="close-social-icon-badge">
                      <YouTubeBrandIcon />
                    </div>
                  </div>
                </div>
                <span className="close-social-label">
                  YouTube <span className="close-social-arr">&rarr;</span>
                </span>
              </a>
              <a
                href="https://www.instagram.com/custogusto.embroidery"
                target="_blank"
                rel="noopener noreferrer"
                className="close-social-card"
                aria-label="Custo Gusto on Instagram"
              >
                <div className="close-social-thumb">
                  <img
                    src="/img/instagram-reel.jpg"
                    alt="Custo Gusto Instagram"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="close-social-overlay">
                    <div className="close-social-icon-badge">
                      <InstagramBrandIcon />
                    </div>
                  </div>
                </div>
                <span className="close-social-label">
                  Instagram <span className="close-social-arr">&rarr;</span>
                </span>
              </a>
            </div>
          </div>
          <div className="close-c">
            <div className="k">TALK TO US</div>
            <div className="v">
              +91 81308 68884
              <br />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=laksh@custogusto.in"
                target="_blank"
                rel="noopener noreferrer"
              >
                laksh@custogusto.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyItMatters() {
  const four = [
    ['This is mine.', 'Nobody else has one. Nobody else can get one.'],
    [
      'Nothing like it exists.',
      'Made once, in front of one person, and never again.',
    ],
    [
      'There is a reason it looks like this.',
      'A name, a date, a thing that happened. The object carries it.',
    ],
    [
      'I want to show someone.',
      'And they do. That is the part you cannot buy media for.',
    ],
  ];

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
      if (userInteractingTimeout.current) clearTimeout(userInteractingTimeout.current);
    };
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;

    isHoveredRef.current = true;
    if (userInteractingTimeout.current) clearTimeout(userInteractingTimeout.current);
    userInteractingTimeout.current = setTimeout(() => {
      isHoveredRef.current = false;
    }, 2800);

    const firstCard = el.querySelector('.q') as HTMLElement | null;
    const scrollStep = firstCard ? firstCard.offsetWidth + 20 : 280;

    el.scrollBy({
      left: direction === 'left' ? -scrollStep : scrollStep,
      behavior: 'smooth',
    });
  };

  return (
    <section className="sec">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 min-w-0" data-aos="fade-up">
            <p className="eyebrow">Why any of this matters</p>
            <h2 className="big">
              EVERYTHING YOU BUY LOSES VALUE. THIS DOESN&rsquo;T.
            </h2>
            <p className="why-lead" style={{ marginTop: '20px' }}>
              A pair of shoes is worth less the moment it leaves the shop. In a
              year they are worn. In three they are replaced.
            </p>
            <p className="why-lead">
              Put a name in them &mdash; or a number, a date, a crest, the
              drawing a daughter made &mdash; and the arithmetic runs backwards.
              They stop being stock and start being <em>hers</em>. Ten years on
              they are still in the cupboard. Still being explained to whoever
              asks about them.
            </p>
            <div className="pull">
              THAT IS WHAT A DESK ON YOUR FLOOR ACTUALLY SELLS.
              <small>Your story.</small>
            </div>
          </div>
          <div className="lg:col-span-5" data-aos="fade-left" data-aos-delay="150">
            <ShoeCarousel shape="ph-sq" />
            <p className="ph-cap">A sneaker embroidered live with a custom name</p>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '24px', marginBottom: '0px' }} data-aos="fade-up">
          <div className="tg-nav" aria-label="Why it matters carousel navigation">
            <button
              type="button"
              aria-label="Previous card"
              onClick={() => handleScroll('left')}
              className="tg-nav-btn"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={2.2} />
            </button>
            <button
              type="button"
              aria-label="Next card"
              onClick={() => handleScroll('right')}
              className="tg-nav-btn"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={2.2} />
            </button>
          </div>
        </div>

        <div
          className="four-mq"
          ref={scrollRef}
          onMouseEnter={() => { isHoveredRef.current = true; }}
          onMouseLeave={() => { isHoveredRef.current = false; }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="four">
            {four.map((q, idx) => (
              <div className="q" key={idx}>
                <div className="qt">{q[0]}</div>
                <div className="qb">{q[1]}</div>
              </div>
            ))}
            {/* second pass of the same four, so the loop never shows a gap */}
            {four.map((q, idx) => (
              <div className="q q-clone" key={`clone-${idx}`} aria-hidden="true">
                <div className="qt">{q[0]}</div>
                <div className="qb">{q[1]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

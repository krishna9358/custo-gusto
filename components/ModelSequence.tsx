'use client';

import React from 'react';

/* the four commercial models, one full-screen slide each:
   copy on the left, photo on the right */
const MODELS = [
  {
    name: 'Rental',
    meta: 'End-to-end · fixed monthly',
    body: 'The hassle-free one. Machines, expert operator, raw materials and maintenance for a fixed monthly price. Nothing to buy, nothing to learn.',
    best: 'a permanent desk on your shop floor.',
    img: '/img/svc_c1.jpg',
    alt: 'An embroidery machine stitching a bag',
  },
  {
    name: 'Ownership + services',
    meta: 'Long-term investment',
    body: 'You own the machines; we run them. Operation, maintenance and raw materials handled, with the cost efficiency that comes from owning the hardware.',
    best: 'multi-store rollouts with a long horizon.',
    img: '/img/svc_a10.jpg',
    alt: 'Finished pieces in wood, metal, leather and acrylic',
  },
  {
    name: 'Pay per use',
    meta: 'Flexibility, no commitment',
    body: 'Pay only for what you use. No long-term commitment, no capital outlay — the right shape for launches and short windows.',
    best: 'launches and festivals.',
    img: '/img/w09.jpg',
    alt: 'Personalised patches',
  },
  {
    name: 'Subscription',
    meta: 'Continuous support',
    body: 'Uninterrupted access to the desk and the design back-end, with the service kept current as the calendar changes.',
    best: 'seasonal programmes across a year.',
    img: '/img/story_e2.jpg',
    alt: 'Monogrammed tees, finished',
  },
];

export default function ModelSequence() {
  /* slide 0 is the intro, slides 1..4 are the models */
  const [slide, setSlide] = React.useState(0);
  const rootRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const marks = Array.from(root.querySelectorAll<HTMLElement>('[data-step]'));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting)
            setSlide(Number(e.target.getAttribute('data-step')));
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );
    marks.forEach((m) => io.observe(m));
    return () => io.disconnect();
  }, []);

  return (
    <div className="mdl-seq" ref={rootRef}>
      <div className="mdl-stage">
        <div
          className={`mdl-progress${slide > 0 ? ' on' : ''}`}
          aria-hidden="true"
        >
          {slide > 0 ? slide : 1}/{MODELS.length}
        </div>

        <div className={`mdl-slide mdl-intro${slide === 0 ? ' on' : ''}`}>
          <div className="mdl-intro-bg" aria-hidden="true" />
          <div className="wrap mdl-intro-copy">
            <p className="eyebrow">Commercials</p>
            <h1 className="big">FOUR WAYS TO WORK WITH US.</h1>
            <p className="lead">
              Pick the shape that fits your floor. We bring everything else.
            </p>
          </div>
        </div>

        {MODELS.map((m, i) => (
          <div
            className={`mdl-slide mdl-card${slide === i + 1 ? ' on' : ''}`}
            key={m.name}
          >
            <div className="wrap mdl-card-in">
              <div className="mdl-copy">
                <div className="ct">{m.name}</div>
                <div className="cm">{m.meta}</div>
                <p>{m.body}</p>
                <p className="mdl-best">
                  <strong>Best for</strong> {m.best}
                </p>
              </div>
              <figure className="ph ph-16 mdl-photo">
                <img src={m.img} alt={m.alt} loading="lazy" decoding="async" />
              </figure>
            </div>
          </div>
        ))}
      </div>

      <div className="mdl-track" aria-hidden="true">
        {[0, ...MODELS.map((_, i) => i + 1)].map((i) => (
          <div className="mdl-mark" data-step={i} key={i} />
        ))}
        <div className="mdl-tail" />
      </div>
    </div>
  );
}

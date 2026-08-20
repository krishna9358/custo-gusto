import React from 'react';
import Link from 'next/link';
import { Dot, bc } from './Glyphs';
import { Button } from './Button';
import { ENGINES_DATA } from '@/data/engines';
import { TECHS_DATA } from '@/data/techniques';

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
          <div key={idx}>
            <div className="v">{t[0]}</div>
            <div className="l">{t[1]}</div>
          </div>
        ))}
      </div>
      <div className="revband">
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
  );
}

export function Engines() {
  return (
    <div className="g g3">
      {ENGINES_DATA.map((e, idx) => (
        <Link
          key={idx}
          className="eng group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-sh-lg"
          href={e.href}
          data-aos="fade-up"
          data-aos-delay={idx * 120}
        >
          <div className={`eng-t ${e.swatch}`}>
            <div className="n">{e.kicker}</div>
            <div className="h">{e.name}</div>
          </div>
          <div className="eng-b">
            <p style={{ fontWeight: 500, color: 'var(--ink)' }}>{e.problem}</p>
            <p style={{ color: 'var(--soft)' }}>{e.solution}</p>
            <div className="eng-f">
              <b style={{ fontSize: '16px' }}>{e.proof}</b>
            </div>
            <div className="eng-go group-hover:translate-x-1 transition-transform duration-200">
              See how this works &rarr;
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function TechGrid() {
  return (
    <div className="tg">
      {TECHS_DATA.map((t, idx) => (
        <div
          key={idx}
          className={`tk rv transition-all duration-300 hover:-translate-y-1.5 hover:shadow-sh-lg ${
            t.isHero ? 'hero' : ''
          }`}
          data-aos="fade-up"
          data-aos-delay={(idx % 3) * 100}
        >
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
          <div className="tk-goes">Goes on</div>
          <div className="chips2">
            {t.chips.map((c, i) => (
              <span key={i} className="chip">
                {c}
              </span>
            ))}
          </div>
          <div className="tk-foot">
            <span className="tk-time">{t.time}</span>
          </div>
          <details className="sci">
            <summary>How it actually works</summary>
            <p dangerouslySetInnerHTML={{ __html: t.technical }} />
          </details>
        </div>
      ))}
    </div>
  );
}

export function ClosingBand({ dare, sub }: { dare: string; sub: string }) {
  return (
    <section className="band band-mar">
      <div className="wrap close-g">
        <div>
          <h2 className="big">{dare}</h2>
          <p style={{ marginTop: '14px', maxWidth: '46ch', fontSize: '17.5px' }}>
            {sub}
          </p>
          <div className="btns" style={{ marginTop: '26px' }}>
            <Button
              href="https://wa.me/919654382799"
              variant="live"
              target="_blank"
            >
              <Dot /> WhatsApp us
            </Button>
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
        <div style={{ display: 'grid', gap: '12px' }}>
          <div className="close-c">
            <div className="k">Watch the one8 film</div>
            <div className="v">
              <a
                href="https://youtube.com/shorts/PFZjzmlq5LI"
                target="_blank"
                rel="noopener noreferrer"
              >
                300 pieces, one evening &rarr;
              </a>
            </div>
          </div>
          <div className="close-c">
            <div className="k">Talk to Laksh</div>
            <div className="v">
              +91 96543 82799
              <br />
              laksh@custogusto.in
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

  return (
    <section className="sec">
      <div className="wrap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 min-w-0">
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
          <div className="lg:col-span-5" data-aos="fade-left">
            <Photo
              imgKey="why_a1"
              alt="A sneaker with a name embroidered on the side"
              shape="ph-sq"
            />
            <p className="ph-cap">A sneaker embroidered live with a custom name</p>
          </div>
        </div>
        <div className="four">
          {four.map((q, idx) => (
            <div className="q" key={idx}>
              <div className="qt">{q[0]}</div>
              <div className="qb">{q[1]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

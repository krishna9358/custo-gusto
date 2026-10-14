import React from 'react';
import { JsonLd } from '@/components/JsonLd';
import { Button } from '@/components/Button';
import { Breadcrumbs, DirectAnswer, RelatedLinks, VideoEmbed, type RelatedLink } from '@/components/IntentSections';
import { ClosingBand } from '@/components/SharedSections';
import { articleNode, breadcrumbNode, graph, pageMetadata, webPageNode, whatsApp, type Crumb } from '@/lib/seo';

/* Case study: Decathlon embedded desks.
   The constants below feed both the visible page and the JSON-LD, so the
   breadcrumb trail and the "In short" answer can never drift from the schema. */

const PATH = '/work/decathlon';
const TITLE = 'Decathlon Live Embroidery Desks Case Study | Custo Gusto';
const DESCRIPTION =
  'How Custo Gusto runs embedded live embroidery desks inside Decathlon stores across India, where customers come back to customise again.';
const IMAGE = '/img/decathlon.jpg';
const HEADLINE = 'Embedded live embroidery desks inside Decathlon stores across India';

const CRUMBS: Crumb[] = [
  { name: 'Home', path: '/' },
  { name: 'The Work', path: '/work' },
  { name: 'Decathlon', path: PATH },
];

/** The "In short" block. Also the Article description in the JSON-LD. */
const ANSWER =
  'Custo Gusto runs embedded live embroidery desks inside Decathlon stores across India. An operator and a designer personalise products from the store floor while the customer watches, every day, and customers come back to customise again. Across our store desks, the average customer does not take home one piece. They take home three.';

const VIDEO_ID = 'y3J-sEqtXcg';
const WATCH_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
const VIDEO_TITLE = 'Custo Gusto at Decathlon';

/* Where this case study sends people who want one of their own */
const BRIEF_HREF = '/retail-activation-live-customisation#brief';
const WA_TEXT = "Hi Custo Gusto, I'd like to book a call about a desk in our stores.";

const GLANCE: { v: string; l: string }[] = [
  { v: 'PAN INDIA', l: 'Desks inside stores across the country' },
  { v: 'DAILY', l: 'Live embroidery on the shop floor' },
  { v: '3', l: 'Pieces the average customer takes home, across our store desks' },
  { v: '13', l: 'Custo Gusto desks running in India' },
];

const IN_STORE: { tm: string; tn: string; tb: string; hero?: boolean }[] = [
  {
    tm: 'THE DESK',
    tn: 'Embedded, not a pop up.',
    tb: 'A permanent live embroidery desk inside the store, part of the floor rather than an event on it.',
    hero: true,
  },
  {
    tm: 'THE CREW',
    tn: 'Operator and designer.',
    tb: 'Trained on our system, so a desk in Delhi runs exactly like one in Bangalore.',
  },
  {
    tm: 'THE RANGE',
    tn: 'Products from the store floor.',
    tb: 'Customers personalise what they have just chosen, with their name, number or design.',
  },
];

const PROVES: { qt: string; qb: string }[] = [
  {
    qt: 'IT WORKS WITHOUT AN EVENT.',
    qb: 'The desk earns its space on ordinary days, not only on launch nights.',
  },
  {
    qt: 'IT GROWS THE BASKET.',
    qb: 'Across our store desks, the average customer takes home three pieces, not one.',
  },
  {
    qt: 'IT BRINGS PEOPLE BACK.',
    qb: 'Customers return to the desk to customise again.',
  },
  {
    qt: 'IT RUNS THE SAME EVERYWHERE.',
    qb: 'One trained system, so every store desk runs to the same standard.',
  },
];

const RELATED: RelatedLink[] = [
  {
    href: '/retail-activation-live-customisation',
    kicker: 'Service',
    title: 'Retail activation',
    desc: 'Permanent and seasonal live customisation desks for retail floors.',
  },
  {
    href: '/work/uniqlo',
    kicker: 'Case study',
    title: 'Uniqlo, three days in store',
    desc: '142 pieces from one compact station.',
  },
  {
    href: '/clients',
    kicker: 'Clients',
    title: 'Decathlon, Puma, Benetton and more',
    desc: 'The retail desks behind the numbers.',
  },
];

export const metadata = pageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  image: IMAGE,
  type: 'article',
});

export default function DecathlonCaseStudyPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageNode({ path: PATH, name: TITLE, description: DESCRIPTION, image: IMAGE }),
          breadcrumbNode(PATH, CRUMBS),
          articleNode({
            path: PATH,
            headline: HEADLINE,
            description: ANSWER,
            image: IMAGE,
            about: [
              { '@type': 'Organization', name: 'Decathlon' },
              { '@type': 'Thing', name: 'Live customisation' },
            ],
          })
        )}
      />

      {/* 1 · Hero + direct answer */}
      <section className="story-hero">
        <div className="wrap">
          <Breadcrumbs crumbs={CRUMBS} />
          <div className="story-hero-grid">
            <div>
              <p className="eyebrow" style={{ color: 'var(--peri)' }} data-aos="fade-up">
                Case study · Embedded desks · Pan-India
              </p>
              <h1 className="story-hero-title" data-aos="fade-up" data-aos-delay="100">
                A DESK THAT WORKS ON AN ORDINARY FLOOR, ON AN ORDINARY DAY.
              </h1>
              <DirectAnswer>{ANSWER}</DirectAnswer>
              <div className="btns" style={{ marginTop: '26px' }} data-aos="fade-up" data-aos-delay="250">
                <Button href={WATCH_URL} variant="live" target="_blank">
                  Watch it
                </Button>
                <Button href={BRIEF_HREF} variant="blush">
                  Plan a desk for your stores
                </Button>
              </div>
            </div>
            <figure
              className="story-hero-media"
              style={{ aspectRatio: '4/3' }}
              data-aos="fade-left"
              data-aos-delay="150"
            >
              <img
                src={IMAGE}
                alt="The Custo Gusto live customisation desk inside a Decathlon store, with an embroidery machine, heat press and finished pieces on display"
                style={{ objectPosition: 'center' }}
              />
            </figure>
          </div>
        </div>
      </section>

      {/* 2 · At a glance */}
      <section className="sec-sm">
        <div className="wrap">
          <p className="eyebrow" data-aos="fade-up">At a glance</p>
          <div className="cg-glance">
            {GLANCE.map((t, i) => (
              <div className="tile" key={t.l} data-aos="fade-up" data-aos-delay={i * 80}>
                <div className="v">{t.v}</div>
                <div className="l">{t.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 · The desk */}
      <section className="sec">
        <div className="wrap split" style={{ alignItems: 'start' }}>
          <div>
            <p className="eyebrow" data-aos="fade-up">The desk</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              THE PROOF THAT A DESK WORKS WITHOUT AN EVENT.
            </h2>
            <div className="prose" style={{ marginTop: '18px' }} data-aos="fade-up" data-aos-delay="150">
              <p>
                Launch nights prove that a desk can draw a crowd. Decathlon proves something harder: that it works on
                an ordinary floor, on an ordinary day.
              </p>
              <p>
                Live embroidery desks run inside Decathlon stores across the country. An operator and a designer sit
                on the shop floor, the customer picks a product from the store, and it is personalised while they
                wait.
              </p>
              <p>
                Customers return to customise again. And across our store desks, the behaviour that matters is this:
                the average customer does not take home one piece. They take home three.
              </p>
            </div>
          </div>
          <div style={{ marginBottom: '18px' }}>
            <VideoEmbed videoId={VIDEO_ID} title={VIDEO_TITLE} caption={VIDEO_TITLE} />
          </div>
        </div>
      </section>

      {/* 4 · What runs in store */}
      <section className="sec band-blush">
        <div className="wrap">
          <div className="cg-head">
            <p className="eyebrow" data-aos="fade-up">What runs in store</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              ONE DESK, EVERY DAY, IN EVERY CITY.
            </h2>
          </div>
          <div className="g g3 cg-mt">
            {IN_STORE.map((t, i) => (
              <div
                className={t.hero ? 'tech hero-tech' : 'tech'}
                key={t.tm}
                data-aos="fade-up"
                data-aos-delay={i * 120}
              >
                <div className="tm">{t.tm}</div>
                <div className="tn">{t.tn}</div>
                <p className="tb">{t.tb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 · What it proves */}
      <section className="sec">
        <div className="wrap">
          <div className="cg-head">
            <p className="eyebrow" data-aos="fade-up">What it means for your stores</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              WHAT DECATHLON PROVES.
            </h2>
          </div>
          <div className="four">
            {PROVES.map((q, i) => (
              <div className="q" key={q.qt} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="qt">{q.qt}</div>
                <p className="qb">{q.qb}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6 · Related */}
      <section className="sec-sm band-blush">
        <div className="wrap">
          <p className="eyebrow" data-aos="fade-up">Plan something like it</p>
          <RelatedLinks items={RELATED} />
        </div>
      </section>

      {/* 7 · Closing band */}
      <ClosingBand
        dare="PUT A REASON TO VISIT ON YOUR FLOOR."
        sub="A permanent desk, an operator and a designer. We bring everything else."
        primary={{ href: BRIEF_HREF, label: 'Send a brief' }}
        secondary={{ href: whatsApp(WA_TEXT), label: 'Book a call' }}
      />
    </>
  );
}

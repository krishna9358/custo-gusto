import React from 'react';
import { JsonLd } from '@/components/JsonLd';
import { Button } from '@/components/Button';
import { Breadcrumbs, DirectAnswer, RelatedLinks, VideoEmbed, type RelatedLink } from '@/components/IntentSections';
import { ClosingBand } from '@/components/SharedSections';
import { articleNode, breadcrumbNode, graph, pageMetadata, webPageNode, whatsApp, type Crumb } from '@/lib/seo';

/* Case study: RCB fan jersey personalisation.
   The constants below feed both the visible page and the JSON-LD, so the
   breadcrumb trail and the "In short" answer can never drift from the schema. */

const PATH = '/work/rcb';
const TITLE = 'RCB Fan Jersey Personalisation Case Study | Custo Gusto';
const DESCRIPTION =
  "Five seasons of RCB fan jerseys personalised with fans' names: more than 1,00,000 jerseys, each one theirs alone, by Custo Gusto.";
const VIDEO_ID = 'JJKBfhEdrHU';
/* The video thumbnail is the page image (og:image and JSON-LD) */
const IMAGE = `https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`;
const HEADLINE = 'Five seasons of RCB fan jersey personalisation: 1,00,000+ jerseys';

const CRUMBS: Crumb[] = [
  { name: 'Home', path: '/' },
  { name: 'The Work', path: '/work' },
  { name: 'RCB', path: PATH },
];

/** The "In short" block. Also the Article description in the JSON-LD. */
const ANSWER =
  'For five seasons, Custo Gusto has personalised RCB fan jerseys with fans’ own names on the back. More than 1,00,000 jerseys have been personalised so far, in a long-running partnership that shows personalisation holding up at sporting scale, season after season, with every jersey belonging to one fan.';

const WATCH_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;

/* Where this case study sends people who want one of their own */
const BRIEF_HREF = '/live-customisation-events-india#brief';
const WA_TEXT = "Hi Custo Gusto, I'd like to book a call about a fan activation.";

const GLANCE: { v: string; l: string }[] = [
  { v: '1,00,000+', l: 'Jerseys personalised' },
  { v: '5', l: 'Seasons running' },
  { v: 'PRINT', l: 'Fans’ names on the back' },
];

const WHAT_WE_RUN: { tm: string; tn: string; tb: string; hero?: boolean }[] = [
  {
    tm: 'THE TECHNIQUE',
    tn: 'Print customisation.',
    tb: 'Fans’ names applied to the back of their jerseys.',
    hero: true,
  },
  {
    tm: 'THE SCALE',
    tn: 'More than a lakh jerseys.',
    tb: '1,00,000+ personalised over five seasons.',
  },
  {
    tm: 'THE PARTNERSHIP',
    tn: 'Season after season.',
    tb: 'A long-running partnership rather than a one-off activation.',
  },
];

const PROVES: { qt: string; qb: string }[] = [
  {
    qt: 'IT SCALES.',
    qb: 'More than 1,00,000 jerseys, each carrying one fan’s name.',
  },
  {
    qt: 'IT LASTS.',
    qb: 'Five seasons and running. Personalisation is a programme, not a stunt.',
  },
  {
    qt: 'IDENTITY IS THE PRODUCT.',
    qb: 'The jersey was already theirs. The name makes it theirs alone.',
  },
  {
    qt: 'PRINT CARRIES VOLUME.',
    qb: 'Print customisation is the throughput engine when the fan base is this big.',
  },
];

const RELATED: RelatedLink[] = [
  {
    href: '/live-customisation-events-india',
    kicker: 'Service',
    title: 'Events',
    desc: 'Live customisation for festivals, conventions and sport.',
  },
  {
    href: '/live-apparel-accessory-customisation',
    kicker: 'Service',
    title: 'Apparel and accessories',
    desc: 'Jerseys, tees, caps and more, made personal.',
  },
  {
    href: '/work/comic-con-52-degrees',
    kicker: 'Case study',
    title: 'Comic Con × 52 Degrees',
    desc: 'Fan identity at festival scale.',
  },
];

export const metadata = pageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  image: IMAGE,
  type: 'article',
});

export default function RcbPage() {
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
              { '@type': 'Organization', name: 'Royal Challengers Bengaluru' },
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
                Case study · Sports fandom · Five seasons
              </p>
              <h1 className="story-hero-title" data-aos="fade-up" data-aos-delay="100">
                1,00,000+ FANS. EVERY JERSEY THEIRS ALONE.
              </h1>
              <DirectAnswer>{ANSWER}</DirectAnswer>
              <div className="btns" style={{ marginTop: '26px' }} data-aos="fade-up" data-aos-delay="250">
                <Button href={WATCH_URL} variant="live" target="_blank">
                  Watch it
                </Button>
                <Button href={BRIEF_HREF} variant="blush">
                  Plan a fan activation
                </Button>
              </div>
            </div>
            <VideoEmbed videoId={VIDEO_ID} title="RCB fan jersey personalisation" />
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

      {/* 3 · The partnership */}
      <section className="sec">
        <div className="wrap split" style={{ alignItems: 'start' }}>
          <div>
            <p className="eyebrow" data-aos="fade-up">The partnership</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              A NAME ON THE BACK, FIVE SEASONS RUNNING.
            </h2>
            <div className="prose" style={{ marginTop: '18px' }} data-aos="fade-up" data-aos-delay="150">
              <p>
                Fandom is identity, and a jersey is where fans wear it. The most personal thing a fan can add is their
                own name.
              </p>
              <p>
                For five years we have put fans’ names on the back of their RCB jerseys. More than a lakh fans now
                wear a jersey that is theirs alone.
              </p>
              <p>
                It is our clearest proof that personalisation is not only a launch-night spectacle. Run as a
                long-running partnership, it carries a fan base across seasons.
              </p>
            </div>
          </div>
          <div>
            <div style={{ marginBottom: '18px' }}>
              <VideoEmbed videoId={VIDEO_ID} title="RCB fan jerseys" caption="RCB fan jerseys" />
            </div>
          </div>
        </div>
      </section>

      {/* 4 · What we run */}
      <section className="sec band-blush">
        <div className="wrap">
          <div className="cg-head">
            <p className="eyebrow" data-aos="fade-up">What we run</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              ONE FAN, ONE NAME, ONE JERSEY.
            </h2>
          </div>
          <div className="g g3 cg-mt">
            {WHAT_WE_RUN.map((t, i) => (
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
            <p className="eyebrow" data-aos="fade-up">What it means for your fans</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              WHAT FIVE SEASONS WITH RCB PROVE.
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
        dare="GIVE EVERY FAN THEIR OWN."
        sub="Tell us about your fans. We bring everything else."
        primary={{ href: BRIEF_HREF, label: 'Send a brief' }}
        secondary={{ href: whatsApp(WA_TEXT), label: 'Book a call' }}
      />
    </>
  );
}

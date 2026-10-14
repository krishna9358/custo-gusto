import React from 'react';
import { JsonLd } from '@/components/JsonLd';
import { Button } from '@/components/Button';
import { Breadcrumbs, DirectAnswer, RelatedLinks, VideoEmbed, type RelatedLink } from '@/components/IntentSections';
import { ClosingBand } from '@/components/SharedSections';
import { articleNode, breadcrumbNode, graph, pageMetadata, webPageNode, whatsApp, type Crumb } from '@/lib/seo';

/* Case study: Uniqlo, three days in store.
   The constants below feed both the visible page and the JSON-LD, so the
   breadcrumb trail and the "In short" answer can never drift from the schema. */

const PATH = '/work/uniqlo';
const TITLE = 'Uniqlo In-Store Customisation Case Study | Custo Gusto';
const DESCRIPTION =
  'A three-day live customisation activation inside Uniqlo: 142 pieces for 85 to 90 customers from one compact station, with bags as the hero product.';
const VIDEO_ID = 'SHvAwvWKkWY';
/* the page has no photo of its own, so the video thumbnail is the share image */
const IMAGE = `https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`;
const HEADLINE = '142 pieces from one compact live customisation station inside Uniqlo';

const CRUMBS: Crumb[] = [
  { name: 'Home', path: '/' },
  { name: 'The Work', path: '/work' },
  { name: 'Uniqlo', path: PATH },
];

/** The "In short" block. Also the Article description in the JSON-LD. */
const ANSWER =
  'Custo Gusto ran a three-day live customisation activation inside Uniqlo, personalising bags, T-shirts, jackets and baby onesies from one compact station. 142 pieces were customised for 85 to 90 customers, bags led with 80 pieces, and customers returned with family members after seeing a finished bag. The store saw its own sales rise.';

const SHORTS_URL = `https://youtube.com/shorts/${VIDEO_ID}`;
const HERO_VIDEO_TITLE = 'Uniqlo in-store customisation';
const VIDEO_TITLE = 'Custo Gusto at Uniqlo';

/* Where this case study sends people who want one of their own */
const BRIEF_HREF = '/retail-activation-live-customisation#brief';
const WA_TEXT = "Hi Custo Gusto, I'd like to book a call about an in-store activation.";

const GLANCE: { v: string; l: string }[] = [
  { v: '142', l: 'Pieces customised' },
  { v: '80', l: 'Bags, 56% of all pieces' },
  { v: '40', l: 'T-shirts' },
  { v: '85+', l: 'Customers served (85 to 90)' },
  { v: '6', l: 'Designs per bag, on average' },
  { v: '1', l: 'Compact live station' },
];

const WHAT_WE_RAN: { tm: string; tn: string; tb: string; hero?: boolean }[] = [
  {
    tm: 'THE STATION',
    tn: 'One machine, one desk.',
    tb: 'A single compact station handled every category, and the shop floor stayed clean throughout.',
    hero: true,
  },
  {
    tm: 'THE RANGE',
    tn: 'Bags, tees, jackets, onesies.',
    tb: 'Plus an Influencer Day covering sweaters, pants, T-shirts and crop tops bought in store.',
  },
  {
    tm: 'THE FLOW',
    tn: 'Drop off, get notified.',
    tb: 'Customers were comfortable leaving products at the desk and returning to collect them.',
  },
];

const PROVES: { qt: string; qb: string }[] = [
  {
    qt: 'DEPTH BEATS VOLUME.',
    qb: 'Customers layered several designs onto each piece, turning a service into a longer, more personal visit.',
  },
  {
    qt: 'IT BRINGS FAMILIES BACK.',
    qb: 'One finished bag sent relatives back to the desk for their own.',
  },
  {
    qt: 'PEOPLE BUY TO CUSTOMISE.',
    qb: 'Some shoppers bought more products specifically because the live station was there.',
  },
  {
    qt: 'IT SITS LIGHTLY ON A FLOOR.',
    qb: 'One compact station, a clean floor, and a flow customers accepted.',
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
    href: '/work/decathlon',
    kicker: 'Case study',
    title: 'Decathlon',
    desc: 'Embedded desks that work on an ordinary day.',
  },
  {
    href: '/live-apparel-accessory-customisation',
    kicker: 'Service',
    title: 'Apparel and accessories',
    desc: 'What we can mark, and how.',
  },
];

export const metadata = pageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  image: IMAGE,
  type: 'article',
});

export default function UniqloCaseStudyPage() {
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
              { '@type': 'Organization', name: 'Uniqlo' },
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
                Case study · In-store activation · Three days
              </p>
              <h1 className="story-hero-title" data-aos="fade-up" data-aos-delay="100">
                142 PIECES. ONE COMPACT STATION. THREE DAYS.
              </h1>
              <DirectAnswer>{ANSWER}</DirectAnswer>
              <div className="btns" style={{ marginTop: '26px' }} data-aos="fade-up" data-aos-delay="250">
                <Button href={SHORTS_URL} variant="live" target="_blank">
                  Watch it
                </Button>
                <Button href={BRIEF_HREF} variant="blush">
                  Plan an in-store activation
                </Button>
              </div>
            </div>
            <VideoEmbed videoId={VIDEO_ID} title={HERO_VIDEO_TITLE} />
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

      {/* 3 · The activation */}
      <section className="sec">
        <div className="wrap split" style={{ alignItems: 'start' }}>
          <div>
            <p className="eyebrow" data-aos="fade-up">The activation</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              BAGS WON THE FLOOR. DEPTH BEAT VOLUME.
            </h2>
            <div className="prose" style={{ marginTop: '18px' }} data-aos="fade-up" data-aos-delay="150">
              <p>
                For three days, one compact station on the Uniqlo floor personalised bags, T-shirts, jackets and baby
                onesies, with a dedicated Influencer Day for products bought in store.
              </p>
              <p>
                Bags led: 80 of the 142 pieces, and the deepest canvas, averaging six designs per bag. T-shirts
                followed with 40 pieces at about three designs each. One customer customised nine T-shirts with seven
                designs on each.
              </p>
              <p>
                The signal was not only output. Customers came back with family members after seeing a finished bag,
                some bought products specifically to customise them, and shoppers asked for longer, more frequent
                activations across more stores. The store saw its own sales rise across the three days.
              </p>
            </div>
          </div>
          <div style={{ marginBottom: '18px' }}>
            <VideoEmbed videoId={VIDEO_ID} title={VIDEO_TITLE} caption={VIDEO_TITLE} />
          </div>
        </div>
      </section>

      {/* 4 · What we ran */}
      <section className="sec band-blush">
        <div className="wrap">
          <div className="cg-head">
            <p className="eyebrow" data-aos="fade-up">What we ran</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              ONE STATION, A WHOLE FLOOR OF RANGE.
            </h2>
          </div>
          <div className="g g3 cg-mt">
            {WHAT_WE_RAN.map((t, i) => (
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
              WHAT THREE DAYS AT UNIQLO PROVE.
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
        dare="THREE DAYS. A FLOOR PEOPLE CAME BACK TO."
        sub="One compact station on your floor. We bring everything else."
        primary={{ href: BRIEF_HREF, label: 'Send a brief' }}
        secondary={{ href: whatsApp(WA_TEXT), label: 'Book a call' }}
      />
    </>
  );
}

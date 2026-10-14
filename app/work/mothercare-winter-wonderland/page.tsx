import React from 'react';
import { JsonLd } from '@/components/JsonLd';
import { Button } from '@/components/Button';
import { Breadcrumbs, DirectAnswer, RelatedLinks, VideoEmbed, type RelatedLink } from '@/components/IntentSections';
import { ClosingBand } from '@/components/SharedSections';
import { articleNode, breadcrumbNode, graph, pageMetadata, webPageNode, whatsApp, type Crumb } from '@/lib/seo';

/* Case study: Mothercare and Edamame at Winter Wonderland.
   The constants below feed both the visible page and the JSON-LD, so the
   breadcrumb trail and the "In short" answer can never drift from the schema. */

const PATH = '/work/mothercare-winter-wonderland';
const TITLE = 'Mothercare and Edamame at Winter Wonderland | Custo Gusto';
const DESCRIPTION =
  "Live embroidery on Mothercare kidswear and live print on Edamame's kids' range at Winter Wonderland, plus Mothercare's embedded desk in Bandra.";
const IMAGE = '/img/mothercare.jpg';
const HEADLINE = 'Live kidswear customisation with Mothercare and Edamame at Winter Wonderland';

const CRUMBS: Crumb[] = [
  { name: 'Home', path: '/' },
  { name: 'The Work', path: '/work' },
  { name: 'Mothercare and Edamame', path: PATH },
];

/** The "In short" block. Also the Article description in the JSON-LD. */
const ANSWER =
  'At Winter Wonderland, Custo Gusto ran live customisation for two kidswear brands: parents personalised Mothercare childrenswear with embroidery stitched in front of them, and Edamame’s kids’ range with full-colour print applied on the spot. Mothercare also runs a Custo Gusto embedded desk in Bandra, putting names on babywear, blankets and towels.';

const WATCH_URL = 'https://www.youtube.com/watch?v=9Z110fUe90Q';
const VIDEOS: { id: string; title: string }[] = [
  { id: '9Z110fUe90Q', title: 'Mothercare at Winter Wonderland' },
  { id: '8pAUlRTw35Y', title: 'Edamame at Winter Wonderland' },
];

/* Where this case study sends people who want one of their own */
const BRIEF_HREF = '/on-ground-customer-engagement#brief';
const WA_TEXT = "Hi Custo Gusto, I'd like to book a call about a seasonal activation.";

const GLANCE: { v: string; l: string }[] = [
  { v: '2', l: 'Kidswear brands at Winter Wonderland' },
  { v: 'LIVE', l: 'Embroidery for Mothercare' },
  { v: 'LIVE', l: 'Full-colour print for Edamame' },
  { v: 'BANDRA', l: 'Mothercare embedded desk' },
];

const WHAT_WE_RAN: { tm: string; tn: string; tb: string; hero?: boolean }[] = [
  {
    tm: 'MOTHERCARE',
    tn: 'Live embroidery.',
    tb: 'Kidswear personalised with embroidery, stitched while the parents watched.',
    hero: true,
  },
  {
    tm: 'EDAMAME',
    tn: 'Live print.',
    tb: 'Full-colour designs applied on the spot to the kids’ range.',
  },
  {
    tm: 'BANDRA',
    tn: 'An embedded desk.',
    tb: 'Names on babywear, blankets and towels, every day in store.',
  },
];

const PROVES: { qt: string; qb: string }[] = [
  {
    qt: 'MEMORY IS THE STRONGEST MARKER.',
    qb: 'A name on babywear is a gift that gets kept rather than used.',
  },
  {
    qt: 'ONE EVENT, MORE THAN ONE BRAND.',
    qb: 'Two kidswear brands ran side by side, each with its own technique.',
  },
  {
    qt: 'EVENTS AND DESKS WORK TOGETHER.',
    qb: 'The same brand that ran the event desk runs a permanent desk in store.',
  },
  {
    qt: 'FAMILIES SHOP TOGETHER.',
    qb: 'Family retail at holiday footfall puts parents and children at the desk together.',
  },
];

const RELATED: RelatedLink[] = [
  {
    href: '/on-ground-customer-engagement',
    kicker: 'Service',
    title: 'On ground engagement',
    desc: 'Desks for malls, festivals and seasonal events.',
  },
  {
    href: '/retail-activation-live-customisation',
    kicker: 'Service',
    title: 'Retail activation',
    desc: 'Permanent desks like Mothercare Bandra.',
  },
  {
    href: '/wedding-live-customisation',
    kicker: 'Service',
    title: 'Weddings',
    desc: 'Keepsakes made live, with the date on them.',
  },
];

export const metadata = pageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  image: IMAGE,
  type: 'article',
});

export default function MothercareWinterWonderlandPage() {
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
              { '@type': 'Organization', name: 'Mothercare' },
              { '@type': 'Organization', name: 'Edamame' },
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
                Case study · Seasonal event and embedded desk
              </p>
              <h1 className="story-hero-title" data-aos="fade-up" data-aos-delay="100">
                A GIFT THAT BECOMES A KEEPSAKE.
              </h1>
              <DirectAnswer>{ANSWER}</DirectAnswer>
              <div className="btns" style={{ marginTop: '26px' }} data-aos="fade-up" data-aos-delay="250">
                <Button href={WATCH_URL} variant="live" target="_blank">
                  Watch it
                </Button>
                <Button href={BRIEF_HREF} variant="blush">
                  Plan a seasonal activation
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
                alt="The Mothercare personalisation desk run by Custo Gusto, with a ZSK embroidery machine and personalised kidswear"
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

      {/* 3 · The event and the desk */}
      <section className="sec">
        <div className="wrap split" style={{ alignItems: 'start' }}>
          <div>
            <p className="eyebrow" data-aos="fade-up">The event and the desk</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              THE MEMORY MARKER.
            </h2>
            <div className="prose" style={{ marginTop: '18px' }} data-aos="fade-up" data-aos-delay="150">
              <p>
                Winter Wonderland is family retail at holiday footfall. We ran two desks for two kidswear brands, side
                by side.
              </p>
              <p>
                For Mothercare, parents personalised kidswear with custom embroidery, stitched live: a gift that
                becomes a keepsake. For Edamame, we ran live print customization on the kids’ range, with full-colour
                designs applied on the spot for families moving through the event.
              </p>
              <p>
                Mothercare also runs an embedded Custo Gusto desk in Bandra: names on babywear, blankets and towels. It
                is the memory marker, a gift that gets kept rather than used, and the reason the desk earns its floor
                space in a category where nothing else is personal.
              </p>
            </div>
          </div>
          <div>
            {VIDEOS.map((v) => (
              <div key={v.id} style={{ marginBottom: '18px' }}>
                <VideoEmbed videoId={v.id} title={v.title} caption={v.title} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 · What we ran */}
      <section className="sec band-blush">
        <div className="wrap">
          <div className="cg-head">
            <p className="eyebrow" data-aos="fade-up">What we ran</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              TWO BRANDS, TWO TECHNIQUES, ONE EVENT.
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
            <p className="eyebrow" data-aos="fade-up">What it means for your brand</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              WHAT WINTER WONDERLAND PROVES.
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
        dare="THE GIFT THAT GETS KEPT."
        sub="Put a desk at your event or in your store. We bring everything else."
        primary={{ href: BRIEF_HREF, label: 'Send a brief' }}
        secondary={{ href: whatsApp(WA_TEXT), label: 'Book a call' }}
      />
    </>
  );
}

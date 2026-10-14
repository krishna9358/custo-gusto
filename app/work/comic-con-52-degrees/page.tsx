import React from 'react';
import { JsonLd } from '@/components/JsonLd';
import { Button } from '@/components/Button';
import { Breadcrumbs, DirectAnswer, RelatedLinks, VideoEmbed, type RelatedLink } from '@/components/IntentSections';
import { ClosingBand } from '@/components/SharedSections';
import { articleNode, breadcrumbNode, graph, pageMetadata, webPageNode, whatsApp, type Crumb } from '@/lib/seo';

/* Case study: Comic Con × 52 Degrees live caps.
   The constants below feed both the visible page and the JSON-LD, so the
   breadcrumb trail and the "In short" answer can never drift from the schema. */

const PATH = '/work/comic-con-52-degrees';
const TITLE = 'Comic Con × 52 Degrees Live Caps Case Study | Custo Gusto';
const DESCRIPTION =
  'Custo Gusto and cap brand 52 Degrees at Comic Con, edition after edition: fans design a cap around their fandom and watch it made live at the booth.';
const VIDEO_ID = 'jQ0MTVmFfFg';
/* the page has no photo of its own, so the video thumbnail is the share image */
const IMAGE = `https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`;
const HEADLINE = 'Live custom caps with 52 Degrees at Comic Con, edition after edition';

const CRUMBS: Crumb[] = [
  { name: 'Home', path: '/' },
  { name: 'The Work', path: '/work' },
  { name: 'Comic Con × 52 Degrees', path: PATH },
];

/** The "In short" block. Also the Article description in the JSON-LD. */
const ANSWER =
  'Custo Gusto partners with cap brand 52 Degrees at Comic Con editions every year. At the booth, fans design a cap around their fandom and watch it embroidered live in minutes. The crowd that gathers around the machine does the marketing, and at festival scale, demand has outrun capacity on both days.';

const WATCH_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
const HERO_VIDEO_TITLE = '52 Degrees custom caps at Comic Con';
const VIDEO_TITLE = '52 Degrees at Comic Con';

/* Where this case study sends people who want one of their own */
const BRIEF_HREF = '/live-customisation-events-india#brief';
const WA_TEXT = "Hi Custo Gusto, I'd like to book a call about an event.";

const GLANCE: { v: string; l: string }[] = [
  { v: 'EVERY YEAR', l: 'Comic Con editions with 52 Degrees' },
  { v: 'LIVE', l: 'Caps embroidered at the booth' },
  { v: 'BOTH DAYS', l: 'Demand outran capacity' },
  { v: '1 OF 1', l: 'Every cap designed around a fandom' },
];

const WHAT_WE_RUN: { tm: string; tn: string; tb: string; hero?: boolean }[] = [
  {
    tm: 'THE TECHNIQUE',
    tn: 'Live embroidery on caps.',
    tb: 'Each cap is stitched at the booth, designed around one fan’s fandom.',
    hero: true,
  },
  {
    tm: 'THE PARTNER',
    tn: '52 Degrees caps.',
    tb: 'The cap brand’s own product, made personal at its own booth.',
  },
  {
    tm: 'THE CROWD',
    tn: 'The machine is the signage.',
    tb: 'A running machine in a convention hall draws people in on its own.',
  },
];

const PROVES: { qt: string; qb: string }[] = [
  {
    qt: 'IDENTITY SELLS.',
    qb: 'People pay for a piece that says who they are. Fandom is the strongest version of that.',
  },
  {
    qt: 'THE BOOTH FILLS ITSELF.',
    qb: 'The crowd around the machine does the marketing.',
  },
  {
    qt: 'DEMAND OUTRUNS SUPPLY.',
    qb: 'At festival scale, demand outran capacity on both days. We size the desk to the crowd.',
  },
  {
    qt: 'PARTNERS COME BACK.',
    qb: '52 Degrees runs this with us edition after edition.',
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
    href: '/on-ground-customer-engagement',
    kicker: 'Service',
    title: 'On ground engagement',
    desc: 'Desks for malls, festivals and brand zones.',
  },
  {
    href: '/work/one8-global-premiere',
    kicker: 'Case study',
    title: 'one8 Global Premiere',
    desc: '300+ one-of-one pieces in a single evening.',
  },
];

export const metadata = pageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  image: IMAGE,
  type: 'article',
});

export default function ComicCon52DegreesPage() {
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
              { '@type': 'Organization', name: '52 Degrees' },
              { '@type': 'Organization', name: 'Comic Con' },
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
                Case study · Fan convention · Year after year
              </p>
              <h1 className="story-hero-title" data-aos="fade-up" data-aos-delay="100">
                FANS DESIGN THE CAP. THE CROWD DOES THE MARKETING.
              </h1>
              <DirectAnswer>{ANSWER}</DirectAnswer>
              <div className="btns" style={{ marginTop: '26px' }} data-aos="fade-up" data-aos-delay="250">
                <Button href={WATCH_URL} variant="live" target="_blank">
                  Watch it
                </Button>
                <Button href={BRIEF_HREF} variant="blush">
                  Plan your event desk
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

      {/* 3 · The booth */}
      <section className="sec">
        <div className="wrap split" style={{ alignItems: 'start' }}>
          <div>
            <p className="eyebrow" data-aos="fade-up">The booth</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              FAN IDENTITY, AT FESTIVAL SCALE.
            </h2>
            <div className="prose" style={{ marginTop: '18px' }} data-aos="fade-up" data-aos-delay="150">
              <p>
                Comic Con is where people come dressed as what they love. A cap with their own fandom on it, made in
                front of them, is the most natural thing to sell there.
              </p>
              <p>
                We partner with cap brand 52 Degrees at Comic Con editions every year. Fans design a cap around their
                fandom and get it made live at the booth.
              </p>
              <p>
                The machine does what a banner cannot: it stops people. The crowd around it does the marketing, and
                demand outran capacity on both days.
              </p>
            </div>
          </div>
          <div style={{ marginBottom: '18px' }}>
            <VideoEmbed videoId={VIDEO_ID} title={VIDEO_TITLE} caption={VIDEO_TITLE} />
          </div>
        </div>
      </section>

      {/* 4 · What we run */}
      <section className="sec band-blush">
        <div className="wrap">
          <div className="cg-head">
            <p className="eyebrow" data-aos="fade-up">What we run</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              A CAP BOOTH WITH A QUEUE.
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
            <p className="eyebrow" data-aos="fade-up">What it means for your event</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              WHAT COMIC CON PROVES.
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
        dare="YOUR BOOTH, WITH A QUEUE."
        sub="Put a machine at your event. We bring everything else."
        primary={{ href: BRIEF_HREF, label: 'Send a brief' }}
        secondary={{ href: whatsApp(WA_TEXT), label: 'Book a call' }}
      />
    </>
  );
}

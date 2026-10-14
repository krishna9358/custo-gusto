import React from 'react';
import { JsonLd } from '@/components/JsonLd';
import { Button } from '@/components/Button';
import { Breadcrumbs, DirectAnswer, RelatedLinks, VideoEmbed, type RelatedLink } from '@/components/IntentSections';
import { ClosingBand } from '@/components/SharedSections';
import { articleNode, breadcrumbNode, graph, pageMetadata, webPageNode, whatsApp, type Crumb } from '@/lib/seo';

/* Case study: one8 Global Premiere.
   The constants below feed both the visible page and the JSON-LD, so the
   breadcrumb trail and the "In short" answer can never drift from the schema. */

const PATH = '/work/one8-global-premiere';
const TITLE = 'one8 Global Premiere Case Study | Custo Gusto';
const DESCRIPTION =
  "How Custo Gusto ran live customisation at Virat Kohli's one8 Global Premiere: 4 ZSK machines, 8 operators, 3 designers, 300+ one-of-one pieces in about 5 hours.";
const IMAGE = '/img/one8-midstitch.jpg';
const HEADLINE = '300+ one-of-one pieces in a single evening at the one8 Global Premiere';

const CRUMBS: Crumb[] = [
  { name: 'Home', path: '/' },
  { name: 'The Work', path: '/work' },
  { name: 'one8 Global Premiere', path: PATH },
];

/** The "In short" block. Also the Article description in the JSON-LD. */
const ANSWER =
  'At the one8 Global Premiere, Virat Kohli’s brand launch at Yashobhoomi produced with District by Zomato, Custo Gusto ran a live customisation desk with four ZSK machines, eight operators and three designers. Guests designed their own pairs and walked out wearing them: 300+ one-of-one pieces in about five hours.';

const SHORTS_URL = 'https://youtube.com/shorts/PFZjzmlq5LI';
const VIDEO_ID = 'T0763nGCmkM';
const VIDEO_TITLE = 'one8 × Custo Gusto — Global Premiere';

/* Where this case study sends people who want one of their own */
const BRIEF_HREF = '/brand-activation-india#brief';
const WA_TEXT = "Hi Custo Gusto, I'd like to book a call about a launch.";

const GLANCE: { v: string; l: string }[] = [
  { v: '300+', l: 'One-of-one pieces' },
  { v: '5 HRS', l: 'About five hours, one evening' },
  { v: '4', l: 'ZSK machines' },
  { v: '8', l: 'Operators' },
  { v: '3', l: 'Live designers' },
];

const WHAT_WE_RAN: { tm: string; tn: string; tb: string; hero?: boolean }[] = [
  {
    tm: 'THE TECHNIQUE',
    tn: 'Live embroidery on footwear',
    tb: 'Thread into the shoe, on German ZSK machines, with the guest standing on the other side of the machine.',
    hero: true,
  },
  {
    tm: 'THE CREW',
    tn: '8 operators, 3 designers',
    tb: 'Operators on four machines, and three designers at the desk turning each guest’s idea into artwork on the spot.',
  },
  {
    tm: 'THE FLOW',
    tn: 'Pick. Design. Watch. Wear.',
    tb: 'Each guest picked their pair, designed it with us, watched it stitched, and left wearing it.',
  },
];

const PROVES: { qt: string; qb: string }[] = [
  {
    qt: 'IT HOLDS A QUEUE.',
    qb: 'On ready designs, one machine makes roughly fifteen pieces an hour. Four machines carried a premiere crowd for five hours.',
  },
  {
    qt: 'IT MAKES THE CONTENT.',
    qb: 'Creators designed their own pairs and posted them the same night. The piece is the post.',
  },
  {
    qt: 'IT RUNS INSIDE A PRODUCTION.',
    qb: 'The desk sat inside a show produced with District by Zomato. Machines, crew, design and materials were ours.',
  },
  {
    qt: 'IT SCALES TO YOUR NIGHT.',
    qb: 'We size machines, operators and designers to your footfall and hours. one8 is the configuration we have proven.',
  },
];

const RELATED: RelatedLink[] = [
  {
    href: '/brand-activation-india',
    kicker: 'Service',
    title: 'Brand activations in India',
    desc: 'How a live customisation desk runs at your launch, store or event.',
  },
  {
    href: '/work',
    kicker: 'More work',
    title: 'Every piece exists once',
    desc: 'Shoes, caps, apparel, leather and hard goods made live at our desks.',
  },
  {
    href: '/clients',
    kicker: 'Clients',
    title: 'Decathlon, Puma, Uniqlo and more',
    desc: 'The retail desks and events behind the numbers.',
  },
];

export const metadata = pageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  image: IMAGE,
  type: 'article',
});

export default function One8GlobalPremierePage() {
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
              { '@type': 'Organization', name: 'one8' },
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
                Case study · Brand launch · New Delhi
              </p>
              <h1 className="story-hero-title" data-aos="fade-up" data-aos-delay="100">
                300+ ONE OF ONE PIECES IN A SINGLE EVENING.
              </h1>
              <DirectAnswer>{ANSWER}</DirectAnswer>
              <div className="btns" style={{ marginTop: '26px' }} data-aos="fade-up" data-aos-delay="250">
                <Button href={SHORTS_URL} variant="live" target="_blank">
                  Watch the night
                </Button>
                <Button href={BRIEF_HREF} variant="blush">
                  Plan your launch
                </Button>
              </div>
            </div>
            <figure
              className="story-hero-media"
              style={{ aspectRatio: '4/5' }}
              data-aos="fade-left"
              data-aos-delay="150"
            >
              <img
                src={IMAGE}
                alt="A ZSK embroidery machine mid-stitch on a guest’s design at the one8 Global Premiere"
                width={688}
                height={1266}
                style={{ objectPosition: 'center 32%' }}
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

      {/* 3 · The night */}
      <section className="sec">
        <div className="wrap split">
          <div>
            <p className="eyebrow" data-aos="fade-up">The night</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              THE PRODUCT LAUNCH, AT THE HIGHEST LEVEL INDIA RUNS ONE.
            </h2>
            <div className="prose" style={{ marginTop: '18px' }} data-aos="fade-up" data-aos-delay="150">
              <p>
                one8 is Virat Kohli’s brand. Its Global Premiere took place at Yashobhoomi and was produced with
                District by Zomato. Custo Gusto was the live customisation desk inside it.
              </p>
              <p>
                We ran four machines and a live design desk. Guests picked their pair, designed it with us, and
                walked out wearing a one-of-one in minutes. Creators designed their own pairs at the desk and posted
                them the same night.
              </p>
              <p>
                300+ one-of-one pieces were made in a single evening, in roughly five hours. The queue never emptied.
                That was the point.
              </p>
            </div>
          </div>
          <VideoEmbed
            videoId={VIDEO_ID}
            title={VIDEO_TITLE}
            caption={
              <>
                one8 × Custo Gusto — Global Premiere. Also on{' '}
                <a href={SHORTS_URL} target="_blank" rel="noopener noreferrer">
                  YouTube Shorts
                </a>
                .
              </>
            }
          />
        </div>
      </section>

      {/* 4 · What we ran */}
      <section className="sec band-blush">
        <div className="wrap">
          <div className="cg-head">
            <p className="eyebrow" data-aos="fade-up">What we ran</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              ONE CONFIGURATION, BUILT FOR A QUEUE.
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
            <p className="eyebrow" data-aos="fade-up">What it means for your launch</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              WHAT ONE NIGHT AT one8 PROVES.
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
        dare="YOUR LAUNCH IS NEXT."
        sub="Tell us the date, the city and the crowd. We bring the machines, the crew and the design."
        primary={{ href: BRIEF_HREF, label: 'Send a brief' }}
        secondary={{ href: whatsApp(WA_TEXT), label: 'Book a call' }}
      />
    </>
  );
}

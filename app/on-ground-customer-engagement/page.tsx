import React from 'react';
import Ticker from '@/components/Ticker';
import { Button } from '@/components/Button';
import { Dot, bc } from '@/components/Glyphs';
import { JsonLd } from '@/components/JsonLd';
import { ClosingBand } from '@/components/SharedSections';
import {
  Breadcrumbs,
  DirectAnswer,
  CaseCard,
  VideoEmbed,
  FaqSection,
  BriefSection,
} from '@/components/IntentSections';
import type { BriefFormConfig } from '@/components/BriefForm';
import {
  pageMetadata,
  webPageNode,
  breadcrumbNode,
  serviceNode,
  faqNode,
  graph,
  whatsApp,
  type Crumb,
  type FaqItem,
} from '@/lib/seo';

/* ---------- SEO: one source for metadata, JSON-LD and the visible page ---------- */

const PATH = '/on-ground-customer-engagement';
const TITLE = 'On-Ground Customer Engagement Activities | Custo Gusto';
const DESCRIPTION =
  'On-ground engagement people queue for: live customisation desks for malls, festivals, sampling drives and brand zones across India, run end to end.';
const IMAGE = '/img/story_c2.jpg';

/** The "In short" block in the hero — also the Service description in the JSON-LD. */
const ANSWER =
  'Custo Gusto runs on-ground customer engagement through live customisation desks at malls, festivals, fan events and brand zones across India. Customers stop, design their own piece and watch it made in minutes, which holds them at your zone and sends them home with your brand on something they keep. We run the machines, crew and design end to end.';

/** Prefilled WhatsApp message for both "Book a call" buttons. */
const WA_TEXT = "Hi Custo Gusto, I'd like to book a call about an on-ground activation.";

export const metadata = pageMetadata({
  path: PATH,
  title: TITLE,
  description: DESCRIPTION,
  image: IMAGE,
  type: 'website',
});

const CRUMBS: Crumb[] = [
  { name: 'Home', path: '/' },
  { name: 'What We Do', path: '/services' },
  { name: 'On-ground engagement', path: PATH },
];

const FAQS: FaqItem[] = [
  {
    q: 'What is on-ground customer engagement with live customisation?',
    a: 'A desk at your mall, festival or brand zone where customers design their own piece and watch it made in minutes. It stops people, holds them at your zone while they wait, and sends them home with your brand on something they keep.',
  },
  {
    q: 'Where can the desk run?',
    a: 'Malls and high streets, festivals and fan events, sports fixtures, sampling drives, brand zones and in-store activations.',
  },
  {
    q: 'How much space does it need?',
    a: 'About 6 × 6 ft per embroidery desk and a power point. We bring the machines, operators, a live designer and all materials.',
  },
  {
    q: 'How many people can it engage in a day?',
    a: 'A ready embroidery design takes about four minutes, roughly fifteen pieces an hour per machine; DTF and UV stickers are faster. At the one8 Global Premiere, four machines made 300+ one-of-one pieces in about five hours. We size the desk to your footfall.',
  },
  {
    q: 'Can an agency run it under its own name?',
    a: 'Yes. The desk can sit inside an agency’s programme as a turnkey module, white-label or co-branded. We run the machines, operators and design; the agency keeps the client.',
  },
  {
    q: 'How do we measure it?',
    a: 'Pieces made are counted at the desk through the day. Footfall, dwell time and tagged posts can be tracked alongside with your agency or venue team.',
  },
  {
    q: 'How quickly can you set up?',
    a: 'About two days. Standing crews are based in Bangalore and Delhi, and two events can run at the same time.',
  },
  {
    q: 'How is it priced?',
    a: 'On-ground activations are usually pay per use, typically 3 to 14 days, with no long-term commitment. Send a brief and you get a real price within 24 hours.',
  },
];

const BRIEF: BriefFormConfig = {
  sourcePage: 'on-ground-customer-engagement',
  leadType: 'on_ground_engagement',
  companyLabel: 'Brand or agency',
  cityLabel: 'City',
  dateLabel: 'Start date',
  type: {
    name: 'brief_type',
    label: 'What is the activation?',
    options: [
      'A mall or high-street activation',
      'A festival or fan event',
      'A sampling drive or brand zone',
      'An agency programme',
      'Something else',
    ],
  },
  size: {
    name: 'size',
    label: 'Expected footfall a day',
    options: ['Not sure yet', 'Under 500', '500 to 2,000', '2,000 to 10,000', '10,000+'],
  },
  placeholder: 'The venue, the dates, and what you want people to walk away with.',
  footNote: 'Reply the same day. Price within 24 hours.',
};

/* ---------- Page copy ---------- */

const PROBLEMS = [
  {
    title: 'A REASON TO STOP.',
    body: 'A machine running in public stops people mid-step. The crowd around it does the marketing.',
  },
  {
    title: 'A REASON TO STAY.',
    body: 'Every customer waits for their own piece, minutes at a time, at your zone.',
  },
  {
    title: 'A REASON TO COME BACK.',
    body: 'At Uniqlo, customers came back with family members after seeing a finished bag.',
  },
  {
    title: 'A REASON TO POST.',
    body: 'A piece made for one person gets filmed and shared by that person.',
  },
];

const GROUNDS = [
  {
    meta: 'MALLS AND HIGH STREETS',
    name: 'An atrium people stop in.',
    body: 'A desk people watch, which lifts dwell for the zone around it.',
  },
  {
    meta: 'FESTIVALS AND FAN EVENTS',
    name: 'The booth with a queue.',
    body: 'Fan identity at festival scale: caps, tees and totes made around what people love.',
  },
  {
    meta: 'SPORT AND FANDOM',
    name: 'A name on the back.',
    body: 'Fans’ names on their own jerseys, season after season.',
  },
  {
    meta: 'SAMPLING AND BRAND ZONES',
    name: 'A sample they keep.',
    body: 'Your brand on a piece made for one person, instead of a leaflet.',
  },
];

const TECHNIQUES = [
  {
    name: 'Live embroidery',
    live: true,
    hook: 'Caps, made around a fandom.',
    desc: 'Thread into caps, tees, jackets and bags on German ZSK machines, designed with the person at the desk.',
    time: 'About 5 min',
    img: '/img/touch_caps.jpg',
    alt: 'A cap with a gold embroidered emblem',
  },
  {
    name: 'DTF print',
    live: false,
    hook: 'Full colour, for the busy hour.',
    desc: 'Full-colour artwork on tees, jerseys, hoodies and event tees. Transfers are printed ahead; the guest watches it pressed on.',
    time: 'About 3 min',
    img: '/img/05-dtf-heat-press-process.jpg',
    alt: 'A DTF transfer being pressed onto a tee with a heat press',
  },
  {
    name: 'UV stickers',
    live: false,
    hook: 'For what cannot be stitched.',
    desc: 'Bottles, phone cases, helmets and flasks. Cured on the spot and pressed on with no heat.',
    time: 'About 1 min',
    img: '/img/02-uv-phone-case-wide.jpg',
    alt: 'A UV sticker applied to a phone case',
  },
];

const PRODUCTS = [
  'Caps',
  'Tees',
  'Totes',
  'Jerseys',
  'Hoodies',
  'Bottles and flasks',
  'Phone cases',
  'Kidswear',
  'Notebooks',
];

const WINTER_TILES = [
  { v: '2', l: 'Kidswear brands, one event' },
  { v: 'LIVE', l: 'Embroidery and print, on the spot' },
];

const MORE_CASES: Omit<React.ComponentProps<typeof CaseCard>, 'aosDelay'>[] = [
  {
    href: '/work/comic-con-52-degrees',
    videoId: 'jQ0MTVmFfFg',
    alt: '52 Degrees — Comic Con, year after year',
    title: '52 Degrees — Comic Con, year after year',
    highlight: 'Custom caps, made on the spot',
    desc: 'Fans design a cap around their fandom and get it made live at the booth. The crowd around the machine does the marketing.',
    tags: ['Live embroidery', 'Caps', 'Fan events'],
  },
  {
    href: '/work/uniqlo',
    videoId: 'SHvAwvWKkWY',
    alt: 'Uniqlo — In-store customization',
    title: 'Uniqlo — In-store customization',
    highlight: '700+ designs in 3 days',
    desc: 'We turned Uniqlo clothes and bags into personal pieces, live in the store. The store saw its own sales rise across the three days.',
    tags: ['Apparel and bags', 'Retail activation'],
  },
  {
    href: '/work/rcb',
    videoId: 'JJKBfhEdrHU',
    alt: 'RCB — Five seasons of fan jerseys',
    title: 'RCB — Five seasons of fan jerseys',
    highlight: '1,00,000+ jerseys personalised',
    desc: "For five years we've put fans' names on the back of their RCB jerseys. More than a lakh fans now wear a jersey that's theirs alone.",
    tags: ['Print customization', 'Sports fandom', 'Long-running partnership'],
  },
];

const PROOF_TILES = [
  { v: '40,000+', l: 'Customers at our store desks' },
  { v: '1,20,000+', l: 'Pieces embroidered at our store desks' },
  { v: '5.0', l: '500+ Google reviews, from stores across India', stars: true },
  { v: '13', l: 'Desks running across India' },
];

const CAPACITY = [
  ['Embroidery, per piece', 'About 4 to 5 minutes on a ready design; about 10 minutes when designed on the spot'],
  ['Per machine', 'Roughly 15 pieces an hour on ready designs'],
  [
    'Biggest proven night',
    '300+ one-of-one pieces in about five hours, on 4 machines with 8 operators and 3 designers (one8 Global Premiere)',
  ],
  ['Busy hours', 'Extra heat-press stations are added for volume'],
  ['Setup', 'About two days from confirmation'],
  ['Crews', 'Standing crews in Bangalore and Delhi; two events can run at the same time'],
  ['Event windows', 'Pay per use, typically 3 to 14 days, with no long-term commitment'],
];

/** `crew: true` marks the cities where standing crews are based (highlighted chip). */
const CITIES = [
  { name: 'Delhi NCR', crew: true },
  { name: 'Bangalore', crew: true },
  { name: 'Mumbai' },
  { name: 'Hyderabad' },
  { name: 'Chennai' },
  { name: 'Pune' },
  { name: 'Kolkata' },
  { name: 'Ahmedabad' },
  { name: 'Anywhere in India' },
];

export default function OnGroundCustomerEngagementPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageNode({ path: PATH, name: TITLE, description: DESCRIPTION, image: IMAGE }),
          breadcrumbNode(PATH, CRUMBS),
          serviceNode({
            path: PATH,
            name: 'On-ground customer engagement with live customisation',
            serviceType: 'On-ground engagement activity',
            description: ANSWER,
          }),
          faqNode(PATH, FAQS)
        )}
      />

      {/* 1 · Hero + direct answer */}
      <section className="hero">
        <div className="wrap">
          <Breadcrumbs crumbs={CRUMBS} />
          <div className="hero-g">
            <div>
              <p className="eyebrow" data-aos="fade-up">
                <span className="liv">
                  <Dot /> LIVE
                </span>{' '}
                On-ground customer engagement
              </p>
              <h1 className="big" data-aos="fade-up" data-aos-delay="100">
                ENGAGEMENT THAT PEOPLE QUEUE FOR.
              </h1>
              <p className="hi hero-hi" data-aos="fade-up" data-aos-delay="150">
                आपका. सिर्फ़ आपका.
              </p>
              <DirectAnswer>{ANSWER}</DirectAnswer>
              <div className="btns" data-aos="fade-up" data-aos-delay="250">
                <Button href="#brief" variant="primary">
                  Send a brief
                </Button>
                <Button href={whatsApp(WA_TEXT)} variant="ghost" target="_blank">
                  Book a call
                </Button>
              </div>
            </div>
            <div className="hero-media" data-aos="fade-left" data-aos-delay="150">
              <img src={IMAGE} alt="A German ZSK embroidery machine running live" />
              <div className="hero-badge">
                <span className="stk">{bc('MADE LIVE ●')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Ticker />

      {/* 2 · Buyer + business problem */}
      <section className="sec">
        <div className="wrap">
          <div className="cg-head">
            <p className="eyebrow" data-aos="fade-up">Who this is for</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              MOST ACTIVATIONS COUNT FOOTFALL. FEW HOLD IT.
            </h2>
            <p className="sub" data-aos="fade-up" data-aos-delay="150">
              Brand managers, mall marketing teams and the BTL agencies who run on-ground
              programmes are judged on how many people stopped, how long they stayed and what they
              did next. A sample or a leaflet is gone in seconds.
            </p>
          </div>
          <div className="four">
            {PROBLEMS.map((p, i) => (
              <div className="q" key={p.title} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="qt">{p.title}</div>
                <p className="qb">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 · Where it runs */}
      <section className="sec band-blush">
        <div className="wrap">
          <div className="cg-head">
            <p className="eyebrow" data-aos="fade-up">Where it runs</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              ANY GROUND WITH PEOPLE ON IT.
            </h2>
          </div>
          <div className="g g4 cg-mt">
            {GROUNDS.map((g, i) => (
              <div className="tech" key={g.meta} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="tm">{g.meta}</div>
                <div className="tn">{g.name}</div>
                <p className="tb">{g.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 · Products + techniques */}
      <section className="sec">
        <div className="wrap">
          <div className="cg-head">
            <p className="eyebrow" data-aos="fade-up">What the desk makes on the ground</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              FAST ENOUGH FOR A QUEUE. PERSONAL ENOUGH TO KEEP.
            </h2>
            <p className="sub" data-aos="fade-up" data-aos-delay="150">
              Embroidery is the spectacle; DTF and UV stickers keep a busy queue moving.
            </p>
          </div>
          <div className="g g3 cg-mt">
            {TECHNIQUES.map((t, i) => (
              <article className="tk" key={t.name} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="tk-media">
                  <img className="tk-img" src={t.img} alt={t.alt} loading="lazy" decoding="async" />
                </div>
                <div className="tk-inner">
                  <div className="tk-top">
                    <h3 className="tk-name">{t.name}</h3>
                    {t.live ? (
                      <span className="tk-live on">Live</span>
                    ) : (
                      <span className="tk-live off">Applied live</span>
                    )}
                  </div>
                  <div className="tk-hook">{t.hook}</div>
                  <p className="tk-desc">{t.desc}</p>
                  <div className="tk-foot">
                    <span className="tk-time">{t.time}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="cg-also" data-aos="fade-up">
            <b>Also at the desk:</b> digital hot foil for leather, luggage tags, notebooks and gift
            boxes (about 2 minutes), and laser engraving for perfume bottles, pens, glassware and
            leather (about 5 minutes). In-house design is included in every engagement.
          </p>
          <div className="cg-chips" aria-label="Products" data-aos="fade-up" data-aos-delay="100">
            {PRODUCTS.map((p) => (
              <span className="chip" key={p}>
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5 · Case study: Winter Wonderland */}
      <section className="band band-night">
        <div className="wrap split split-night">
          <div className="night-side" style={{ paddingLeft: 0 }}>
            <div className="night-text">
              <p className="eyebrow" data-aos="fade-up">Case study · Seasonal retail event</p>
              <h2 className="big" data-aos="fade-up" data-aos-delay="100">
                WINTER WONDERLAND, WITH MOTHERCARE AND EDAMAME.
              </h2>
              <p className="lead" data-aos="fade-up" data-aos-delay="150">
                Family retail at holiday footfall. Parents personalised Mothercare kidswear with
                embroidery stitched live, and Edamame’s kids’ range with full-colour print applied
                on the spot, as families moved through the event.
              </p>
            </div>
            <div className="night-lower">
              <div className="g cg-case-tiles">
                {WINTER_TILES.map((t, i) => (
                  <div className="tile" key={t.l} data-aos="fade-up" data-aos-delay={i * 100}>
                    <div className="v">{t.v}</div>
                    <div className="l">{t.l}</div>
                  </div>
                ))}
              </div>
              <div className="btns" data-aos="fade-up" data-aos-delay="200">
                <Button href="/work/mothercare-winter-wonderland" variant="blush">
                  Read the Winter Wonderland case study
                </Button>
                <Button
                  href="https://www.youtube.com/watch?v=9Z110fUe90Q"
                  variant="live"
                  target="_blank"
                >
                  Watch it
                </Button>
              </div>
            </div>
          </div>
          <div style={{ alignSelf: 'center' }}>
            <VideoEmbed
              videoId="9Z110fUe90Q"
              title="Mothercare kidswear embroidery at Winter Wonderland"
            />
          </div>
        </div>
      </section>

      {/* 6 · More on the ground */}
      <section className="sec">
        <div className="wrap">
          <div className="cg-head">
            <p className="eyebrow" data-aos="fade-up">More on the ground</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              WHERE THE CROWD GATHERED.
            </h2>
          </div>
          <div className="g g3 cg-mt">
            {MORE_CASES.map((c, i) => (
              <CaseCard key={c.href} {...c} aosDelay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* 7 · Verified proof + operating capacity */}
      <section className="sec band-blush">
        <div className="wrap">
          <div className="cg-head">
            <p className="eyebrow" data-aos="fade-up">Verified proof · operating capacity</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              THE NUMBERS, AND WHAT ONE DESK CAN CARRY.
            </h2>
          </div>
          <div className="g g4 cg-mt">
            {PROOF_TILES.map((t, i) => (
              <div className="tile" key={t.l} data-aos="fade-up" data-aos-delay={i * 100}>
                {t.stars && (
                  <div className="stars" aria-hidden="true">
                    ★★★★★
                  </div>
                )}
                <div className="v">{t.v}</div>
                <div className="l">{t.l}</div>
              </div>
            ))}
          </div>
          <div className="tw cg-cap" data-aos="fade-up">
            <table>
              <thead>
                <tr>
                  <th scope="col">Capacity, stated plainly</th>
                  <th scope="col">What we run</th>
                </tr>
              </thead>
              <tbody>
                {CAPACITY.map(([k, v]) => (
                  <tr key={k}>
                    <td>{k}</td>
                    <td>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="cg-note" data-aos="fade-up">
            We size the desk to the event: machines, operators and designers are matched to your
            expected footfall and hours. Store-desk figures cover our retail desks only; event
            volumes are stated separately.
          </p>
        </div>
      </section>

      {/* 8 · Cities + nationwide */}
      <section className="sec">
        <div className="wrap split">
          <div>
            <p className="eyebrow" data-aos="fade-up">Where we work</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              ON THE GROUND ACROSS INDIA.
            </h2>
            <p className="lead" style={{ marginTop: '16px' }} data-aos="fade-up" data-aos-delay="150">
              Our office is in Noida, and standing crews wait in Delhi and Bangalore, so most places
              in India are about two days away. Two cities can run at the same time. Where our
              office sits has never decided where a desk can go.
            </p>
            <div className="cg-chips" aria-label="Cities" data-aos="fade-up" data-aos-delay="200">
              {CITIES.map((c) => (
                <span className={c.crew ? 'chip on' : 'chip'} key={c.name}>
                  {c.name}
                </span>
              ))}
            </div>
          </div>
          <div className="ph ph-16" data-aos="fade-left" data-aos-delay="150">
            <img
              src="/img/story_e2.jpg"
              alt="Finished custom garments packed for a nationwide rollout"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* 9 · FAQ (the same FAQS feed the FAQPage JSON-LD) */}
      <FaqSection eyebrow="Asked before the call" title="ENGAGEMENT QUESTIONS." items={FAQS} />

      {/* 10 · Brief form + book a call */}
      <BriefSection
        eyebrow="On-ground brief"
        title="TELL US THE GROUND. GET A PRICE IN 24 HOURS."
        sub="The venue, the dates and the crowd. You get a reply the same day."
        form={BRIEF}
        callCopy="Running a programme for a client? Book a call on WhatsApp, or ring us directly."
        waText={WA_TEXT}
      />

      {/* 11 · Closing band */}
      <ClosingBand
        dare="GIVE THEM A REASON TO STOP."
        sub="Put a machine on the ground. We bring everything else."
        primary={{ href: '#brief', label: 'Get a price in 24 hours' }}
        secondary={{ href: '/work', label: 'Just look at the work' }}
      />
    </>
  );
}

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

const PATH = '/live-customisation-events-india';
const TITLE = 'Live Customisation for Events in India | Custo Gusto';
const DESCRIPTION =
  'Live embroidery, print, foil and engraving desks for festivals, conventions, sport and brand events across India. Run at one8, Comic Con and Winter Wonderland.';
const IMAGE = '/img/05-dtf-heat-press-process.jpg';

/** The "In short" block in the hero — also the Service description in the JSON-LD. */
const ANSWER =
  'Custo Gusto brings live customisation to events across India: festivals, fan conventions, sports fixtures, seasonal markets and brand events. Attendees design a cap, tee, bag or shoe and watch it made in minutes, at a desk run by our machines, operators and designers, sized to the crowd, with setup in about two days.';

/** Prefilled WhatsApp message for both "Book a call" buttons. */
const WA_TEXT = "Hi Custo Gusto, I'd like to book a call about an event.";

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
  { name: 'Events', path: PATH },
];

const FAQS: FaqItem[] = [
  {
    q: 'Can you run live customisation at a festival or convention?',
    a: 'Yes. We have run it at Comic Con with 52 Degrees, at Winter Wonderland with Mothercare and Edamame, and at the one8 Global Premiere. The desk comes with machines, operators, a live designer and all materials.',
  },
  {
    q: 'How do you handle festival-sized crowds?',
    a: 'Embroidery runs at roughly fifteen pieces an hour per machine on ready designs, so for festival crowds we add DTF and heat-press stations, where application takes about three minutes. We size the machines and crew to the expected footfall and hours.',
  },
  {
    q: 'Can a sponsor brand the desk and the pieces?',
    a: 'Yes. In-house design is included: the sponsor’s mark goes into the artwork, and each attendee adds their own name or design on top.',
  },
  {
    q: 'Can you run multi-day events?',
    a: 'Yes. Events are usually pay per use and typically run 3 to 14 days, with no long-term commitment.',
  },
  {
    q: 'Can you run two events at the same time?',
    a: 'Yes. Standing crews in Bangalore and Delhi can run two events at once, and desks travel across India.',
  },
  {
    q: 'What do you need from the organiser?',
    a: 'Space and power: about 6 × 6 ft per embroidery desk and a power point. We bring everything else.',
  },
  {
    q: 'Which events have you done?',
    a: 'The one8 Global Premiere with District by Zomato, Comic Con with 52 Degrees, Winter Wonderland with Mothercare and Edamame, and five seasons of RCB fan jerseys.',
  },
  {
    q: 'How is an event desk priced?',
    a: 'Four things move the number: how long it runs, how many machines, which techniques and how many cities. Send a brief and you get a real price within 24 hours, with no meeting needed.',
  },
];

const BRIEF: BriefFormConfig = {
  sourcePage: 'live-customisation-events-india',
  leadType: 'events',
  companyLabel: 'Organiser, sponsor or agency',
  cityLabel: 'Event city',
  dateLabel: 'Event date',
  type: {
    name: 'brief_type',
    label: 'What kind of event?',
    options: [
      'A festival or concert',
      'A fan convention',
      'A sports event',
      'A seasonal or family event',
      'A brand event',
      'Something else',
    ],
  },
  size: {
    name: 'size',
    label: 'Expected attendance',
    options: ['Not sure yet', 'Under 1,000', '1,000 to 5,000', '5,000 to 20,000', '20,000+'],
  },
  placeholder: 'The event, the dates, the crowd, and whether a sponsor is funding the desk.',
  footNote: 'Reply the same day. Price within 24 hours.',
};

/* ---------- Page copy ---------- */

const PROBLEMS = [
  {
    title: 'FOR ORGANISERS.',
    body: 'A premium experience zone attendees queue for, and one a sponsor can fund.',
  },
  {
    title: 'FOR SPONSORS.',
    body: 'Your logo on a piece made live, only for that attendee.',
  },
  {
    title: 'FOR THE CROWD.',
    body: 'At Comic Con, demand outran capacity on both days.',
  },
  {
    title: 'FOR THE FEED.',
    body: 'Every finished piece is filmed and posted by the person who owns it.',
  },
];

const EVENTS = [
  {
    meta: 'FAN CONVENTIONS',
    name: 'Comic Con, edition after edition.',
    body: 'With cap brand 52 Degrees, fans design a cap around their fandom and get it made at the booth.',
  },
  {
    meta: 'BRAND EVENTS AND PREMIERES',
    name: 'The one8 Global Premiere.',
    body: 'Four machines and a live design desk, 300+ pieces in about five hours.',
  },
  {
    meta: 'SEASONAL AND FAMILY EVENTS',
    name: 'Winter Wonderland.',
    body: 'Live embroidery and print on kidswear with Mothercare and Edamame.',
  },
  {
    meta: 'SPORT AND FANDOM',
    name: 'Five seasons with RCB.',
    body: 'Fans’ names on the back of their jerseys: 1,00,000+ personalised.',
  },
];

const TECHNIQUES = [
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
    name: 'Live embroidery',
    live: true,
    hook: 'Caps, made around a fandom.',
    desc: 'Thread into caps, tees, jackets and bags on German ZSK machines, designed with the person at the desk.',
    time: 'About 5 min',
    img: '/img/touch_caps.jpg',
    alt: 'A cap with a gold embroidered emblem',
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
  'Jerseys',
  'Hoodies',
  'Totes',
  'Bottles and flasks',
  'Phone cases',
  'Kidswear',
];

const MORE_CASES: Omit<React.ComponentProps<typeof CaseCard>, 'aosDelay'>[] = [
  {
    href: '/work/one8-global-premiere',
    videoId: 'T0763nGCmkM',
    alt: 'one8 × Custo Gusto — Global Premiere',
    title: 'one8 × Custo Gusto — Global Premiere',
    highlight: '300+ custom shoes in 5 hours',
    desc: 'At the one8 Global Premiere with Virat Kohli (Yashobhoomi, with District by Zomato), we ran 4 machines and a live design desk. Guests picked their pair, designed it with us, and walked out wearing a one-of-one in minutes.',
    tags: ['Live embroidery', 'Footwear', 'Brand launch'],
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
  {
    href: '/work/mothercare-winter-wonderland',
    videoId: '9Z110fUe90Q',
    alt: 'Mothercare — Winter Wonderland',
    title: 'Mothercare — Winter Wonderland',
    highlight: 'Custom embroidery on childrenswear',
    desc: 'Parents personalised Mothercare kidswear with custom embroidery, stitched live. A gift that becomes a keepsake.',
    tags: ['Live embroidery', 'Kidswear', 'Festive event'],
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

export default function LiveCustomisationEventsIndiaPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageNode({ path: PATH, name: TITLE, description: DESCRIPTION, image: IMAGE }),
          breadcrumbNode(PATH, CRUMBS),
          serviceNode({
            path: PATH,
            name: 'Live customisation for events',
            serviceType: 'Event activation',
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
                Events · Festivals, conventions, sport
              </p>
              <h1 className="big" data-aos="fade-up" data-aos-delay="100">
                THE ONLY THING EVERY ATTENDEE WEARS OUT THE GATE.
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
              <img
                src={IMAGE}
                alt="A DTF transfer being pressed onto a tee at a Custo Gusto desk"
              />
              <div className="hero-badge">
                <span className="stk">{bc('MADE LIVE ●')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Ticker />

      {/* 2 · Buyers */}
      <section className="sec">
        <div className="wrap">
          <div className="cg-head">
            <p className="eyebrow" data-aos="fade-up">Who this is for</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              TWO BUYERS AT EVERY EVENT. ONE DESK FOR BOTH.
            </h2>
            <p className="sub" data-aos="fade-up" data-aos-delay="150">
              Organisers want a zone that lifts dwell and fills the hashtag. Sponsors want something
              attendees remember them by. A live customisation desk can be funded by either, and it
              is the one activation people physically carry out of the venue.
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

      {/* 3 · Events we run */}
      <section className="sec band-blush">
        <div className="wrap">
          <div className="cg-head">
            <p className="eyebrow" data-aos="fade-up">Events we run</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              FROM ONE EVENING TO A FULL FESTIVAL.
            </h2>
          </div>
          <div className="g g4 cg-mt">
            {EVENTS.map((e, i) => (
              <div className="tech" key={e.meta} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="tm">{e.meta}</div>
                <div className="tn">{e.name}</div>
                <p className="tb">{e.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 · Products + techniques */}
      <section className="sec">
        <div className="wrap">
          <div className="cg-head">
            <p className="eyebrow" data-aos="fade-up">What attendees walk out with</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              BUILT FOR A CROWD.
            </h2>
            <p className="sub" data-aos="fade-up" data-aos-delay="150">
              DTF and heat press carry festival volume, embroidery is the premium moment, and UV
              stickers cover hard goods.
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

      {/* 5 · Case study: Comic Con × 52 Degrees */}
      <section className="band band-night">
        <div className="wrap split split-night">
          <div className="night-side" style={{ paddingLeft: 0 }}>
            <div className="night-text">
              <p className="eyebrow" data-aos="fade-up">Case study · Fan convention</p>
              <h2 className="big" data-aos="fade-up" data-aos-delay="100">
                COMIC CON, WITH 52 DEGREES.
              </h2>
              <p className="lead" data-aos="fade-up" data-aos-delay="150">
                We partner with cap brand 52 Degrees at Comic Con editions every year. Fans design a
                cap around their fandom and get it made live at the booth. The crowd around the
                machine does the marketing, and demand outran capacity on both days.
              </p>
            </div>
            <div className="night-lower">
              <div className="btns" data-aos="fade-up" data-aos-delay="200">
                <Button href="/work/comic-con-52-degrees" variant="blush">
                  Read the Comic Con case study
                </Button>
                <Button
                  href="https://www.youtube.com/watch?v=jQ0MTVmFfFg"
                  variant="live"
                  target="_blank"
                >
                  Watch it
                </Button>
              </div>
            </div>
          </div>
          <div style={{ alignSelf: 'center' }}>
            <VideoEmbed videoId="jQ0MTVmFfFg" title="52 Degrees custom caps at Comic Con" />
          </div>
        </div>
      </section>

      {/* 6 · More events */}
      <section className="sec">
        <div className="wrap">
          <div className="cg-head">
            <p className="eyebrow" data-aos="fade-up">More events</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              SAME CREW. DIFFERENT CROWDS.
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
              THE NUMBERS, AND WHAT AN EVENT DESK CAN CARRY.
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
              CREWS IN DELHI AND BANGALORE. EVENTS ANYWHERE IN INDIA.
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
      <FaqSection eyebrow="Asked before the call" title="EVENT QUESTIONS." items={FAQS} />

      {/* 10 · Brief form + book a call */}
      <BriefSection
        eyebrow="Event brief"
        title="TELL US THE EVENT. GET A PRICE IN 24 HOURS."
        sub="The event, the dates and the expected crowd. You get a reply the same day."
        form={BRIEF}
        callCopy="Organiser, sponsor or agency, the call is the same fifteen minutes. Book on WhatsApp, or ring us directly."
        waText={WA_TEXT}
      />

      {/* 11 · Closing band */}
      <ClosingBand
        dare="WHAT THEY WEAR OUT THE GATE."
        sub="Put a machine at your event. We bring everything else."
        primary={{ href: '#brief', label: 'Get a price in 24 hours' }}
        secondary={{ href: '/work', label: 'Just look at the work' }}
      />
    </>
  );
}

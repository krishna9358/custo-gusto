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
  SixWays,
  ProofSection,
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

const STEPS = [
  {
    meta: 'STEP 1 · THE BRIEF',
    name: 'Tell us the event.',
    body: 'Dates, city, expected footfall and the sponsor. We reply the same day and send a real number within 24 hours.',
  },
  {
    meta: 'STEP 2 · ABOUT TWO DAYS',
    name: 'We set up the booth.',
    body: 'Machines, operators, a live designer and every material arrive with the crew. You provide about 6 × 6 ft per embroidery desk and a power point.',
  },
  {
    meta: 'STEP 3 · EVERY DAY OF THE EVENT',
    name: 'Attendees make theirs.',
    body: 'They pick the piece, add their name or fandom, and watch it being made. DTF and heat-press stations keep the queue moving at peak hours.',
    hero: true,
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

const EVENT_TILES = [
  { v: '3', l: 'Events' },
  { v: '500+', l: 'Caps customised' },
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

      {/* 2 · Case study: Comic Con + Horn OK Please */}
      <section className="band band-night">
        <div className="wrap split split-night">
          <div className="night-side" style={{ paddingLeft: 0 }}>
            <div className="night-text">
              <p className="eyebrow" data-aos="fade-up">Case study · Fan conventions and festivals</p>
              <h2 className="big" data-aos="fade-up" data-aos-delay="100">
                COMIC CON + HORN OK PLEASE.
              </h2>
              <p className="lead" data-aos="fade-up" data-aos-delay="150">
                Across three events at Comic Con and Horn OK Please, people designed caps around what
                they love and watched them made live at the booth. At Comic Con, where we partner
                with cap brand 52 Degrees, demand outran capacity on both days.
              </p>
            </div>
            <div className="night-lower">
              <div className="g cg-case-tiles">
                {EVENT_TILES.map((t, i) => (
                  <div className="tile" key={t.l} data-aos="fade-up" data-aos-delay={i * 100}>
                    <div className="v">{t.v}</div>
                    <div className="l">{t.l}</div>
                  </div>
                ))}
              </div>
              <div className="btns" data-aos="fade-up" data-aos-delay="200">
                <Button href="/work/comic-con-52-degrees" variant="blush">
                  Read the Comic Con case study
                </Button>
              </div>
            </div>
          </div>
          <div style={{ alignSelf: 'center' }}>
            <VideoEmbed videoId="jQ0MTVmFfFg" title="52 Degrees custom caps at Comic Con" />
          </div>
        </div>
      </section>

      {/* 3 · Buyers */}
      <section className="sec band-blush">
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

      {/* 4 · How it runs */}
      <section className="sec">
        <div className="wrap">
          <div className="cg-head">
            <p className="eyebrow" data-aos="fade-up">How an event desk runs</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              FROM BRIEF TO BOOTH IN ABOUT TWO DAYS.
            </h2>
          </div>
          <div className="g g3 steps-flow cg-mt">
            {STEPS.map((s, i) => (
              <div
                className={s.hero ? 'tech hero-tech' : 'tech'}
                key={s.meta}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="tm">{s.meta}</div>
                <div className="tn">{s.name}</div>
                <p className="tb">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 · 6 ways to customise */}
      <SixWays
        eyebrow="What attendees walk out with"
        title="6 WAYS TO CUSTOMISE."
        sub="DTF and heat press carry festival volume, embroidery is the premium moment, and UV stickers cover hard goods."
        blush
      >
        <div className="cg-chips" aria-label="Products" data-aos="fade-up" data-aos-delay="100">
          {PRODUCTS.map((p) => (
            <span className="chip" key={p}>
              {p}
            </span>
          ))}
        </div>
      </SixWays>

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

      {/* 7 · Verified proof */}
      <ProofSection
        note="We size the desk to the event: machines, operators and designers are matched to your expected footfall and hours."
      />

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

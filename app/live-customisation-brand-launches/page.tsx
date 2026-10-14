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

const PATH = '/live-customisation-brand-launches';
const TITLE = 'Live Customisation for Brand Launches in India | Custo Gusto';
const DESCRIPTION =
  'Hand every launch guest their own: live embroidery and print desks for product launches, drops and store openings across India, set up in about two days.';
const IMAGE = '/img/why_a1.jpg';

/** The "In short" block in the hero — also the Service description in the JSON-LD. */
const ANSWER =
  'Custo Gusto puts a live customisation desk inside your product or brand launch, anywhere in India. Guests personalise the product you are launching, or a piece made for the night, with embroidery, print or engraving, and watch it made in minutes. Machines, operators, designers and materials are ours, with setup in about two days.';

/** Prefilled WhatsApp message for both "Book a call" buttons. */
const WA_TEXT = "Hi Custo Gusto, I'd like to book a call about a product launch.";

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
  { name: 'Brand launches', path: PATH },
];

const FAQS: FaqItem[] = [
  {
    q: 'Can guests customise the exact product we are launching?',
    a: 'In most cases, yes. Around 90% of a typical retail range can be customised live: shoes, caps, apparel, bags, leather goods and hard goods. Send us the product and we confirm the technique and placement before the launch.',
  },
  {
    q: 'How many guests can a launch desk handle?',
    a: 'A ready design takes about four minutes on one embroidery machine, roughly fifteen pieces an hour. At the one8 Global Premiere, four machines, eight operators and three designers made 300+ one-of-one pieces in about five hours. We size the machines, operators and designers to your guest list and hours.',
  },
  {
    q: 'Can the artwork follow our launch campaign?',
    a: 'Yes. In-house design is included in every engagement. Our designer builds a set of designs from your launch name, colours and marks, and each guest adds a personal layer on top.',
  },
  {
    q: 'How far ahead should we book?',
    a: 'Setup takes about two days once the launch is confirmed. For a fixed launch date, send the brief early so the crew, machines and artwork are locked in for your night.',
  },
  {
    q: 'Can you run launches in more than one city?',
    a: 'Yes. Standing crews in Bangalore and Delhi can run two events at the same time, and the desk travels to launches across India.',
  },
  {
    q: 'Will it feel premium enough for our brand?',
    a: 'The desk runs on German ZSK embroidery machines, with thirty years of embroidery craft behind the brand. Operators are trained on one system, so every city runs the same.',
  },
  {
    q: 'What does a launch desk cost?',
    a: 'Launches are usually pay per use, with no long-term commitment or upfront equipment cost. Four things move the number: how long it runs, how many machines, which techniques and how many cities. Send a brief and you get a real price within 24 hours.',
  },
  {
    q: 'Is this the same as launch merchandise?',
    a: 'No. Launch merchandise is made in advance and identical. At our desk each piece is made individually, in front of the guest who will own it, and it is never made again. If you need branded launch merchandise as well, we make that too, as job work.',
  },
];

const BRIEF: BriefFormConfig = {
  sourcePage: 'live-customisation-brand-launches',
  leadType: 'brand_launch',
  companyLabel: 'Brand or company',
  cityLabel: 'Launch city',
  dateLabel: 'Launch date',
  type: {
    name: 'brief_type',
    label: 'What are you launching?',
    options: [
      'A product',
      'A collection or drop',
      'A store opening',
      'A brand event',
      'Something else',
    ],
  },
  size: {
    name: 'size',
    label: 'Expected guests',
    options: ['Not sure yet', 'Under 200', '200 to 500', '500 to 1,000', '1,000+'],
  },
  placeholder: 'The product, the date, and who is on the guest list.',
  footNote: 'Reply the same day. Price within 24 hours.',
};

/* ---------- Page copy ---------- */

const PROBLEMS = [
  {
    title: 'THE PRODUCT IN THEIR HANDS.',
    body: 'Guests do not just see what you are launching. They choose one, put their name or mark on it, and leave holding it.',
  },
  {
    title: 'A DROP THAT FEELS LIKE ONE.',
    body: 'Every piece made at the desk exists once. The scarcity is real, not printed on a poster.',
  },
  {
    title: 'THE FEED, THE SAME NIGHT.',
    body: 'People film the machine and post the finished piece. At the one8 premiere, creators posted their pairs the same night.',
  },
  {
    title: 'NO EXTRA LOAD ON YOUR TEAM.',
    body: 'We bring the machines, operators, a live designer and every material. You bring the product and the guest list.',
  },
];

const STEPS = [
  {
    meta: 'BEFORE DOORS OPEN',
    name: 'Artwork built around the launch.',
    body: 'Our in-house designer turns your launch name, colours and marks into designs guests choose from.',
  },
  {
    meta: 'DURING THE LAUNCH',
    name: 'Each guest makes theirs.',
    body: 'They pick the piece, add their own name, number, date or drawing, and watch it being made.',
    hero: true,
  },
  {
    meta: 'AFTER THE LAUNCH',
    name: 'The launch keeps travelling.',
    body: 'Every piece leaves on a guest and turns up on their feed. No two are the same.',
  },
];

const TECHNIQUES = [
  {
    name: 'Live embroidery',
    live: true,
    hook: 'The hero. The one they film.',
    desc: 'Names, dates and artwork stitched into shoes, caps, jackets and bags on German ZSK machines.',
    time: 'About 5 min',
    img: '/img/01-shoe-cursive-10-embroidered.jpg',
    alt: 'A name embroidered in cursive onto a sneaker at a Custo Gusto desk',
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
    name: 'Laser engraving',
    live: true,
    hook: 'Permanent, with nothing added.',
    desc: 'Perfume bottles, pens, glassware and leather, marked by laser. Nothing sits on top, so nothing wears off.',
    time: 'About 5 min',
    img: '/img/w12.jpg',
    alt: 'A name engraved into steel',
  },
];

const PRODUCTS = [
  'Sneakers',
  'Caps',
  'Jerseys',
  'Tees and hoodies',
  'Jackets',
  'Bags',
  'Leather goods',
  'Perfume bottles',
  'Gift boxes',
];

const ONE8_TILES = [
  { v: '300+', l: 'One-of-one pieces in about five hours' },
  { v: '4', l: 'ZSK machines' },
  { v: '8', l: 'Operators' },
  { v: '3', l: 'Live designers' },
];

const MORE_CASES: Omit<React.ComponentProps<typeof CaseCard>, 'aosDelay'>[] = [
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
    href: '/work/comic-con-52-degrees',
    videoId: 'jQ0MTVmFfFg',
    alt: '52 Degrees — Comic Con, year after year',
    title: '52 Degrees — Comic Con, year after year',
    highlight: 'Custom caps, made on the spot',
    desc: 'Fans design a cap around their fandom and get it made live at the booth. The crowd around the machine does the marketing.',
    tags: ['Live embroidery', 'Caps', 'Fan events'],
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

export default function BrandLaunchesPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageNode({ path: PATH, name: TITLE, description: DESCRIPTION, image: IMAGE }),
          breadcrumbNode(PATH, CRUMBS),
          serviceNode({
            path: PATH,
            name: 'Live customisation for product and brand launches',
            serviceType: 'Product launch activation',
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
                Product and brand launches · India
              </p>
              <h1 className="big" data-aos="fade-up" data-aos-delay="100">
                LAUNCH THE PRODUCT. HAND EVERY GUEST THEIR OWN.
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
                alt="A sneaker held up in front of a Custo Gusto embroidery machine"
              />
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
              THE LAUNCH IS ONE NIGHT. THE PRODUCT HAS TO OUTLIVE IT.
            </h2>
            <p className="sub" data-aos="fade-up" data-aos-delay="150">
              Brand and marketing heads launching a shoe, a collection or a store need the product
              in people’s hands, on their feeds and in conversation the week after. A stage and a
              goodie bag rarely do all three.
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

      {/* 3 · How a launch desk runs */}
      <section className="sec band-blush">
        <div className="wrap">
          <div className="cg-head">
            <p className="eyebrow" data-aos="fade-up">How a launch desk runs</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              BUILT AROUND YOUR LAUNCH, NOT BOLTED ON.
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

      {/* 4 · Products + techniques */}
      <section className="sec">
        <div className="wrap">
          <div className="cg-head">
            <p className="eyebrow" data-aos="fade-up">What a launch desk makes</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              WHAT GUESTS CARRY OUT OF YOUR LAUNCH.
            </h2>
            <p className="sub" data-aos="fade-up" data-aos-delay="150">
              Embroidery leads most launches, DTF carries the busy hour, and laser marks premium
              hard goods.
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
            boxes (about 2 minutes), and UV stickers for bottles, phone cases and flasks (about 1
            minute). In-house design is included in every engagement.
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

      {/* 5 · Case study: one8 */}
      <section className="band band-night">
        <div className="wrap split split-night">
          <div className="night-side" style={{ paddingLeft: 0 }}>
            <div className="night-text">
              <p className="eyebrow" data-aos="fade-up">Case study · Brand launch · New Delhi</p>
              <h2 className="big" data-aos="fade-up" data-aos-delay="100">
                THE one8 GLOBAL PREMIERE.
              </h2>
              <p className="lead" data-aos="fade-up" data-aos-delay="150">
                Virat Kohli’s brand launch at Yashobhoomi, produced with District by Zomato. Four
                machines, eight operators and three designers ran a live design desk for one
                evening. Guests picked their pair, designed it with us, and walked out wearing a
                one-of-one in minutes. The queue never emptied.
              </p>
            </div>
            <div className="night-lower">
              <div className="g cg-case-tiles">
                {ONE8_TILES.map((t, i) => (
                  <div className="tile" key={t.l} data-aos="fade-up" data-aos-delay={i * 100}>
                    <div className="v">{t.v}</div>
                    <div className="l">{t.l}</div>
                  </div>
                ))}
              </div>
              <div className="btns" data-aos="fade-up" data-aos-delay="200">
                <Button href="/work/one8-global-premiere" variant="blush">
                  Read the one8 case study
                </Button>
                <Button href="https://youtube.com/shorts/PFZjzmlq5LI" variant="live" target="_blank">
                  Watch it
                </Button>
              </div>
            </div>
          </div>
          <figure
            className="cg-case-photo"
            style={{ margin: 0 }}
            data-aos="fade-left"
            data-aos-delay="150"
          >
            <img
              src="/img/one8-midstitch.jpg"
              alt="A ZSK machine stitching a guest’s design at the one8 Global Premiere"
              loading="lazy"
              decoding="async"
            />
            <span className="stk stk-b">{bc('1/1')}</span>
          </figure>
        </div>
      </section>

      {/* 6 · More launches and activations */}
      <section className="sec">
        <div className="wrap">
          <div className="cg-head">
            <p className="eyebrow" data-aos="fade-up">More launches and activations</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              SAME CREW. DIFFERENT LAUNCH NIGHTS.
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
              THE NUMBERS, AND WHAT A LAUNCH DESK CAN CARRY.
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
              CREWS IN DELHI AND BANGALORE. LAUNCHES ANYWHERE IN INDIA.
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
      <FaqSection eyebrow="Asked before the call" title="LAUNCH QUESTIONS." items={FAQS} />

      {/* 10 · Brief form + book a call */}
      <BriefSection
        eyebrow="Launch brief"
        title="TELL US THE LAUNCH. GET A PRICE IN 24 HOURS."
        sub="The product, the date and the room. You get a reply the same day."
        form={BRIEF}
        callCopy="Give it fifteen minutes and you will see the desk mapped to your own launch. Book a call on WhatsApp, or ring us directly."
        waText={WA_TEXT}
      />

      {/* 11 · Closing band */}
      <ClosingBand
        dare="LAUNCH SOMETHING THEY KEEP."
        sub="Put a machine at your launch. We bring everything else."
        primary={{ href: '#brief', label: 'Get a price in 24 hours' }}
        secondary={{ href: '/work', label: 'Just look at the work' }}
      />
    </>
  );
}

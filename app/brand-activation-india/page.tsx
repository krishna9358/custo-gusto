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

const PATH = '/brand-activation-india';
const TITLE = 'Brand Activation in India — Live Customisation | Custo Gusto';
const DESCRIPTION =
  'Live customisation brand activations across India. Guests design one-of-one shoes, caps and apparel, made in front of them. 300+ pieces in one night at one8.';
const IMAGE = '/img/hero-live.jpg';

/** The "In short" block in the hero — also the Service description in the JSON-LD. */
const ANSWER =
  'Custo Gusto runs live customisation brand activations across India. We set up German ZSK embroidery machines, print and engraving stations, operators and designers at your launch, store or event, and every guest designs a one-of-one piece (shoes, caps, apparel, bags or accessories) that is made in front of them in minutes.';

/** Prefilled WhatsApp message for both "Book a call" buttons. */
const WA_TEXT = "Hi Custo Gusto, I'd like to book a call about a brand activation.";

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
  { name: 'Brand activation', path: PATH },
];

const FAQS: FaqItem[] = [
  {
    q: 'What is a live customisation brand activation?',
    a: 'A desk at your launch, store or event where each guest designs a personal piece and watches it being made in minutes. A name, number, date or drawing is embroidered, printed, foiled, engraved or applied while they wait, so every guest leaves with something made once, for them.',
  },
  {
    q: 'How many guests can you serve at one activation?',
    a: 'A ready design takes about four minutes on one embroidery machine, which is roughly fifteen pieces an hour. At the one8 Global Premiere, four machines, eight operators and three designers made 300+ one-of-one pieces in about five hours. We size the machines, operators and designers to your footfall, and add heat-press stations for the busiest hours.',
  },
  {
    q: 'How quickly can you set up?',
    a: 'About two days. Standing crews are based in Bangalore and Delhi, most places in India are about two days away, and two events can run at the same time.',
  },
  {
    q: 'What do we need to provide?',
    a: 'The space and the product. We bring the machines, the operators, a live designer, all raw materials and maintenance. Each embroidery desk needs a footprint of about 6 × 6 ft and a power point.',
  },
  {
    q: 'Can the designs carry our brand?',
    a: 'Yes. In-house design is included in every engagement: our designer prepares artwork around your brand, and each guest adds their own name, number, date or drawing at the desk.',
  },
  {
    q: 'Which products can be customised?',
    a: 'Around 90% of a typical retail range: shoes lead the desk, followed by caps, tees, jerseys, hoodies, jackets, bags, leather goods, notebooks, gift boxes, bottles, phone cases and other hard goods.',
  },
  {
    q: 'Do you work with experiential and event agencies?',
    a: 'Yes. The desk can sit inside an agency’s production as a turnkey module, white-label or co-branded. We run the machines, operators and design; the agency keeps the client relationship.',
  },
  {
    q: 'How is a brand activation priced?',
    a: 'Events are usually pay per use, with no long-term commitment or upfront equipment cost. Four things move the number: how long it runs, how many machines, which techniques and how many cities. Send a brief and you get a real price within 24 hours, with no meeting needed.',
  },
  {
    q: 'Is this the same as printing branded merchandise?',
    a: 'No. Merchandise is ordered months ahead and made identical. Here each piece is made individually, in front of the person who will own it, with their own name or design on it, and it is never made again.',
  },
];

const BRIEF: BriefFormConfig = {
  sourcePage: 'brand-activation-india',
  leadType: 'brand_activation',
  companyLabel: 'Brand or company',
  cityLabel: 'Event city',
  dateLabel: 'Event date',
  type: {
    name: 'activation_type',
    label: 'What are you planning?',
    options: [
      'A product or brand launch',
      'An in-store activation',
      'A festival or fan event',
      'A corporate event',
      'Something else',
    ],
  },
  size: {
    name: 'expected_guests',
    label: 'Expected guests',
    options: ['Not sure yet', 'Under 200', '200 to 500', '500 to 1,000', '1,000+'],
  },
  placeholder: 'The product, the hours, and what you want guests to walk away with.',
  footNote: 'Reply the same day. Price within 24 hours.',
};

/* ---------- Page copy ---------- */

const PROBLEMS = [
  {
    title: 'FOOTFALL WITHOUT DWELL.',
    body: 'People walk past a stall. They stop for a machine stitching someone’s name into a shoe, and they stay to watch their own being made.',
  },
  {
    title: 'CONTENT YOU PAY FOR.',
    body: 'A one-of-one piece gets filmed and posted by the person holding it. At the one8 premiere, creators designed their own pairs and posted them the same night.',
  },
  {
    title: 'GIVEAWAYS THAT GET BINNED.',
    body: 'Five hundred identical tees are forgotten by the car park. A piece with a guest’s own name, date or drawing on it is kept, worn and shown.',
  },
  {
    title: 'ONE MORE VENDOR TO RUN.',
    body: 'Machines, operators, designers, materials and maintenance are ours. You provide the space and the product.',
  },
];

const STEPS = [
  {
    meta: 'STEP 1 · THE BRIEF',
    name: 'Tell us the night.',
    body: 'Date, city, the product and the footfall you expect. We reply the same day and send a real number within 24 hours. No meeting needed to get a price.',
  },
  {
    meta: 'STEP 2 · ABOUT TWO DAYS',
    name: 'We set up the desk.',
    body: 'Machines, operators, an in-house designer and every material arrive with the crew. The designer prepares artwork around your brand before doors open.',
  },
  {
    meta: 'STEP 3 · ABOUT FIVE MINUTES A PIECE',
    name: 'Every guest makes theirs.',
    body: 'They pick the item, tell the designer what to add, and watch it being made. They walk away with something that exists once.',
    hero: true,
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
  'Shoes',
  'Caps',
  'Tees and jerseys',
  'Hoodies and jackets',
  'Bags and totes',
  'Leather goods',
  'Bottles and flasks',
  'Phone cases',
  'Notebooks and gift boxes',
  'Kidswear',
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
    alt: 'Uniqlo in-store customisation',
    title: 'Uniqlo — In-store customization',
    highlight: '700+ designs in 3 days',
    desc: 'We turned Uniqlo clothes and bags into personal pieces, live in the store. The store saw its own sales rise across the three days.',
    tags: ['Apparel and bags', 'Retail activation'],
  },
  {
    href: '/work/comic-con-52-degrees',
    videoId: 'jQ0MTVmFfFg',
    alt: '52 Degrees custom caps at Comic Con',
    title: '52 Degrees — Comic Con, year after year',
    highlight: 'Custom caps, made on the spot',
    desc: 'Fans design a cap around their fandom and get it made live at the booth. The crowd around the machine does the marketing.',
    tags: ['Live embroidery', 'Caps', 'Fan events'],
  },
  {
    href: '/work/mothercare-winter-wonderland',
    videoId: '9Z110fUe90Q',
    alt: 'Mothercare kidswear embroidery at Winter Wonderland',
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

export default function BrandActivationIndiaPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageNode({ path: PATH, name: TITLE, description: DESCRIPTION, image: IMAGE }),
          breadcrumbNode(PATH, CRUMBS),
          serviceNode({
            path: PATH,
            name: 'Live customisation brand activations',
            serviceType: 'Brand activation',
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
                Brand activation · India
              </p>
              <h1 className="big" data-aos="fade-up" data-aos-delay="100">
                BRAND ACTIVATIONS PEOPLE QUEUE FOR.
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
                src="/img/hero-live.jpg"
                alt="Custo Gusto live customisation counter with embroidery and customisation machines"
                width={1024}
                height={576}
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
              A LAUNCH NOBODY CARRIES HOME IS FORGOTTEN BY MONDAY.
            </h2>
            <p className="sub" data-aos="fade-up" data-aos-delay="150">
              Heads of marketing, brand and retail experience, and the experiential agencies who
              build for them, are measured on footfall, dwell, content and whether the night is
              still talked about next week. Most activations win the first and lose the rest.
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

      {/* 3 · How it runs */}
      <section className="sec band-blush">
        <div className="wrap">
          <div className="cg-head">
            <p className="eyebrow" data-aos="fade-up">How an activation runs</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              FROM BRIEF TO LIVE IN ABOUT TWO DAYS.
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
            <p className="eyebrow" data-aos="fade-up">What guests walk away with</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              THREE TECHNIQUES DO MOST OF THE WORK AT A LAUNCH.
            </h2>
            <p className="sub" data-aos="fade-up" data-aos-delay="150">
              Around 90% of a typical retail range can be customised live, with shoes leading the
              desk.
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
          <div
            className="cg-chips"
            aria-label="Products we customise at activations"
            data-aos="fade-up"
            data-aos-delay="100"
          >
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
                  Watch the night
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
              width={688}
              height={1266}
              loading="lazy"
              decoding="async"
            />
            <span className="stk stk-b">{bc('1/1')}</span>
          </figure>
        </div>
      </section>

      {/* 6 · More activations */}
      <section className="sec">
        <div className="wrap">
          <div className="cg-head">
            <p className="eyebrow" data-aos="fade-up">More activations</p>
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
              CREWS IN DELHI AND BANGALORE. DESKS ANYWHERE IN INDIA.
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
      <FaqSection eyebrow="Asked before the call" title="BRAND ACTIVATION QUESTIONS." items={FAQS} />

      {/* 10 · Brief form + book a call */}
      <BriefSection
        eyebrow="Brand activation brief"
        title="SEND A BRIEF. GET A PRICE IN 24 HOURS."
        sub="Tell us about the night. You get a reply the same day."
        form={BRIEF}
        callCopy="Give it fifteen minutes and you will see the desk mapped to your own launch. Book a call on WhatsApp, or ring us directly."
        waText={WA_TEXT}
      />

      {/* 11 · Closing band */}
      <ClosingBand
        dare="YOURS. ONLY YOURS."
        sub="Put a machine at your launch. We bring everything else."
        primary={{ href: '#brief', label: 'Get a price in 24 hours' }}
        secondary={{ href: '/work', label: 'Just look at the work' }}
      />
    </>
  );
}

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

const PATH = '/live-apparel-accessory-customisation';
const TITLE = 'Apparel and Accessory Customisation, Made Live | Custo Gusto';
const DESCRIPTION =
  'Shoes, caps, tees, jackets, bags and leather personalised live with embroidery, DTF, hot foil, laser and UV: at our desks, your event, or as job work.';
const IMAGE = '/img/01-shoe-cursive-10-embroidered.jpg';

/** The "In short" block in the hero — also the Service description in the JSON-LD. */
const ANSWER =
  'Custo Gusto customises shoes, caps, tees, jerseys, jackets, bags, leather goods and hard goods live in India, using embroidery, DTF print, digital hot foil, laser engraving and UV stickers. Each piece carries one person’s name, date or design, made in minutes at our desks or your event, or sent to us as job work.';

/** Prefilled WhatsApp message for both "Book a call" buttons. */
const WA_TEXT =
  "Hi Custo Gusto, I'd like to book a call about customising apparel and accessories.";

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
  { name: 'Apparel and accessories', path: PATH },
];

const FAQS: FaqItem[] = [
  {
    q: 'What products can you customise?',
    a: 'Around 90% of a typical retail range: shoes, caps, tees, jerseys, hoodies, jackets, bags, leather goods, notebooks, gift boxes, bottles, phone cases, kidswear, robes and towels.',
  },
  {
    q: 'Which technique is right for my product?',
    a: 'Embroidery for shoes, caps, jackets and bags; DTF print for tees, jerseys and hoodies; digital hot foil for leather, tags, notebooks and gift boxes; laser engraving for bottles, pens, glassware and leather; UV stickers for phone cases, bottles, helmets and flasks. We confirm the technique once we see the product.',
  },
  {
    q: 'Can you customise products we send you?',
    a: 'Yes. That is job work: you send the products, we work from your artwork and personalise them, and return finished pieces. It needs no desk and is priced per order.',
  },
  {
    q: 'Do you supply the products as well?',
    a: 'We can. Job work runs on your product or on one we source for you.',
  },
  {
    q: 'How long does each piece take?',
    a: 'About 5 minutes for embroidery or laser engraving, about 3 minutes for DTF print, about 2 minutes for digital hot foil and about 1 minute for UV stickers.',
  },
  {
    q: 'Can you handle a corporate or team order?',
    a: 'Yes, as job work, with no minimum order. We sample the material, placement and finish first, then produce the order to the approved sample and pack it. Sample timing, production window and price are confirmed after we see the product, artwork, quantity and destination.',
  },
  {
    q: 'Where can I get this done?',
    a: 'At a live desk anywhere in India, with standing crews in Delhi and Bangalore, or as job work sent to us.',
  },
  {
    q: 'How is it priced?',
    a: 'Three ways: a fixed monthly rental for a permanent desk, pay per use for events, and per order for job work. Send a brief and you get a real price within 24 hours.',
  },
];

const BRIEF: BriefFormConfig = {
  sourcePage: 'live-apparel-accessory-customisation',
  leadType: 'apparel_accessory',
  companyLabel: 'Brand or company',
  cityLabel: 'City',
  dateLabel: 'Needed by',
  type: {
    name: 'brief_type',
    label: 'What do you need?',
    options: [
      'A desk at our store',
      'A desk at our event',
      'Job work: send products to you',
      'Not sure yet',
    ],
  },
  size: {
    name: 'size',
    label: 'Rough quantity',
    options: ['Not sure yet', 'Under 10', '10 to 50', '50 to 200', '200 to 1,000', '1,000+'],
  },
  placeholder: 'The products, what goes on them, and when you need them.',
  footNote: 'Reply the same day. Price within 24 hours.',
};

/* ---------- Page copy ---------- */

const PROBLEMS = [
  {
    title: 'ONE PERSON PER PIECE.',
    body: 'Every piece carries something of the person who owns it: a name, a number, a date or a drawing.',
  },
  {
    title: 'THE RIGHT TECHNIQUE FOR THE SURFACE.',
    body: 'Thread for fabric and shoes, foil for leather and paper, laser for metal and glass, UV for hard plastics.',
  },
  {
    title: 'MADE IN FRONT OF THEM, OR SENT BACK.',
    body: 'At a desk on your floor, at your event, or as job work: send the product, we personalise it and return it.',
  },
  {
    title: 'DESIGN INCLUDED.',
    body: 'An in-house designer comes with every engagement, so each piece is drawn for one person, not pulled from a template.',
  },
];

const WAYS = [
  {
    meta: 'ON YOUR FLOOR',
    name: 'A desk that stays.',
    body: 'A permanent machine, operator and designer on your store floor, running every day.',
    hero: true,
  },
  {
    meta: 'AT YOUR LAUNCH OR EVENT',
    name: 'A desk that travels.',
    body: 'The full desk comes to your launch or event for a few days and makes a piece for each guest on the spot.',
  },
  {
    meta: 'SEND IT TO US',
    name: 'No desk at all.',
    body: 'Job work: we work from your artwork, on your product or one we source, and return finished, personalised pieces. Priced per order.',
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
  'Shoes',
  'Caps',
  'Tees',
  'Jerseys',
  'Hoodies',
  'Jackets',
  'Bags and totes',
  'Leather goods',
  'Bottles and flasks',
  'Phone cases',
  'Notebooks',
  'Kidswear',
];

const RCB_TILES = [
  { v: '1,00,000+', l: 'Jerseys personalised' },
  { v: '5', l: 'Seasons running' },
];

const MORE_WORK: Omit<React.ComponentProps<typeof CaseCard>, 'aosDelay'>[] = [
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
    href: '/work/mothercare-winter-wonderland',
    videoId: '9Z110fUe90Q',
    alt: 'Mothercare — Winter Wonderland',
    title: 'Mothercare — Winter Wonderland',
    highlight: 'Custom embroidery on childrenswear',
    desc: 'Parents personalised Mothercare kidswear with custom embroidery, stitched live. A gift that becomes a keepsake.',
    tags: ['Live embroidery', 'Kidswear', 'Festive event'],
  },
  {
    href: '/work/mothercare-winter-wonderland',
    videoId: '8pAUlRTw35Y',
    alt: 'Edamame — Winter Wonderland',
    title: 'Edamame — Winter Wonderland',
    highlight: "Print customization on children's clothing",
    desc: "Alongside Mothercare, we ran live print customization for Edamame's kids' range: full-colour designs, applied on the spot, for families moving through the event.",
    tags: ['Print customization', 'Kidswear', 'Festive event'],
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

export default function ApparelAccessoryPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageNode({ path: PATH, name: TITLE, description: DESCRIPTION, image: IMAGE }),
          breadcrumbNode(PATH, CRUMBS),
          serviceNode({
            path: PATH,
            name: 'Live apparel and accessory customisation',
            serviceType: 'Apparel and accessory personalisation',
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
                Apparel and accessory customisation
              </p>
              <h1 className="big" data-aos="fade-up" data-aos-delay="100">
                ALMOST ANYTHING YOU WEAR OR CARRY, MADE ONCE.
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
              <img src={IMAGE} alt="A name embroidered in cursive onto a sneaker" />
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
              ONE PERSON PER PIECE, OR YOUR LOGO ON EVERY ONE.
            </h2>
            <p className="sub" data-aos="fade-up" data-aos-delay="150">
              Brands, retailers and event teams come to us when a product needs to belong to one
              person: a name on a shoe, initials on a wallet, a name on the back of a jersey. When a
              team or a brand needs its logo on every piece, we run it as job work, with no minimum
              order.
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

      {/* 3 · Three ways to work with us */}
      <section className="sec band-blush">
        <div className="wrap">
          <div className="cg-head">
            <p className="eyebrow" data-aos="fade-up">Three ways to work with us</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              WE BRING THE MACHINE TO THE MOMENT.
            </h2>
          </div>
          <div className="g g3 cg-mt">
            {WAYS.map((w, i) => (
              <div
                className={w.hero ? 'tech hero-tech' : 'tech'}
                key={w.meta}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="tm">{w.meta}</div>
                <div className="tn">{w.name}</div>
                <p className="tb">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 · Products + techniques */}
      <section className="sec">
        <div className="wrap">
          <div className="cg-head">
            <p className="eyebrow" data-aos="fade-up">Products and techniques</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              WHAT WE MARK, AND HOW.
            </h2>
            <p className="sub" data-aos="fade-up" data-aos-delay="150">
              Around 90% of a typical retail range can be customised. Three techniques carry most of
              it.
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
          <div className="cg-chips" aria-label="Products" data-aos="fade-up" data-aos-delay="100">
            {PRODUCTS.map((p) => (
              <span className="chip" key={p}>
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 5 · Case study: RCB */}
      <section className="band band-night">
        <div className="wrap split split-night">
          <div className="night-side" style={{ paddingLeft: 0 }}>
            <div className="night-text">
              <p className="eyebrow" data-aos="fade-up">Case study · Sports fandom</p>
              <h2 className="big" data-aos="fade-up" data-aos-delay="100">
                RCB, FIVE SEASONS OF FAN JERSEYS.
              </h2>
              <p className="lead" data-aos="fade-up" data-aos-delay="150">
                For five years we have put fans’ names on the back of their RCB jerseys. More than a
                lakh fans now wear a jersey that is theirs alone: the same personal mark, delivered
                season after season.
              </p>
            </div>
            <div className="night-lower">
              <div className="g cg-case-tiles">
                {RCB_TILES.map((t, i) => (
                  <div className="tile" key={t.l} data-aos="fade-up" data-aos-delay={i * 100}>
                    <div className="v">{t.v}</div>
                    <div className="l">{t.l}</div>
                  </div>
                ))}
              </div>
              <div className="btns" data-aos="fade-up" data-aos-delay="200">
                <Button href="/work/rcb" variant="blush">
                  Read the RCB case study
                </Button>
                <Button
                  href="https://www.youtube.com/watch?v=JJKBfhEdrHU"
                  variant="live"
                  target="_blank"
                >
                  Watch it
                </Button>
              </div>
            </div>
          </div>
          <div style={{ alignSelf: 'center' }}>
            <VideoEmbed videoId="JJKBfhEdrHU" title="RCB fan jersey personalisation" />
          </div>
        </div>
      </section>

      {/* 6 · More work */}
      <section className="sec">
        <div className="wrap">
          <div className="cg-head">
            <p className="eyebrow" data-aos="fade-up">More work</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              EVERY ONE OF THESE EXISTS ONCE.
            </h2>
          </div>
          <div className="g g3 cg-mt">
            {MORE_WORK.map((c, i) => (
              <CaseCard key={c.videoId} {...c} aosDelay={i * 100} />
            ))}
          </div>
        </div>
      </section>

      {/* 7 · Verified proof */}
      <ProofSection
        note="Job work is sampled first, with no minimum order; timing and price are confirmed once we see the product, artwork, quantity and destination. Store-desk figures cover our retail desks only."
      />

      {/* 8 · Cities + nationwide */}
      <section className="sec">
        <div className="wrap split">
          <div>
            <p className="eyebrow" data-aos="fade-up">Where we work</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              MADE LIVE ACROSS INDIA, OR SENT BACK TO YOU.
            </h2>
            <p className="lead" style={{ marginTop: '16px' }} data-aos="fade-up" data-aos-delay="150">
              Our office is in Noida, with standing crews in Delhi and Bangalore, so most places in
              India are about two days away for a live desk. Job work needs no desk at all: send the
              products, and finished pieces come back.
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
      <FaqSection eyebrow="Asked before the call" title="CUSTOMISATION QUESTIONS." items={FAQS} />

      {/* 10 · Brief form + book a call */}
      <BriefSection
        eyebrow="Customisation brief"
        title="TELL US WHAT YOU WANT MADE. GET A PRICE IN 24 HOURS."
        sub="The product, the technique if you know it, and the timing."
        form={BRIEF}
        callCopy="Not sure which technique fits your product? Book a call on WhatsApp, or ring us directly, and we will tell you."
        waText={WA_TEXT}
      />

      {/* 11 · Closing band */}
      <ClosingBand
        dare="MADE ONCE. NEVER AGAIN."
        sub="On your floor, at your event, or on the box you send us."
        primary={{ href: '#brief', label: 'Get a price in 24 hours' }}
        secondary={{ href: '/work', label: 'Just look at the work' }}
      />
    </>
  );
}

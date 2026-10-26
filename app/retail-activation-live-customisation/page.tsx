import React from 'react';
import Link from 'next/link';
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

const PATH = '/retail-activation-live-customisation';
const TITLE = 'Retail Activation with Live Customisation Desks | Custo Gusto';
const DESCRIPTION =
  'Permanent and seasonal live customisation desks for retail floors, as run with Decathlon, Puma, Benetton and Uniqlo. Customers take home three pieces.';
const IMAGE = '/img/sports-yard.jpg';

/** The "In short" block in the hero — also the Service description in the JSON-LD. */
const ANSWER =
  'Custo Gusto runs live customisation desks inside retail stores across India, as a permanent desk or an in-store activation. Customers personalise products from your own floor with embroidery, print, foil or engraving and watch them made in minutes. We supply the machines, operator, designer, materials and maintenance; you supply the space and the product.';

/** Prefilled WhatsApp message for both "Book a call" buttons. */
const WA_TEXT = "Hi Custo Gusto, I'd like to book a call about a desk in our store.";

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
  { name: 'Retail activation', path: PATH },
];

const FAQS: FaqItem[] = [
  {
    q: 'What is a live customisation desk in a retail store?',
    a: 'A desk on your shop floor where an operator and a designer personalise products from your own range while the customer watches. A name, date or drawing is embroidered, printed, foiled or engraved in minutes, and the customer leaves with a piece that exists once.',
  },
  {
    q: 'What do we need to provide?',
    a: 'The space and the product. We bring the machines, the operator, a live designer, all raw materials and maintenance. Each embroidery desk needs a footprint of about 6 × 6 ft and a power point.',
  },
  {
    q: 'Who runs the desk day to day?',
    a: 'Our expert operator and designer, trained on our system. Your store team does not run the machines; they keep selling.',
  },
  {
    q: 'How long is the commitment?',
    a: 'A permanent desk is a rental with a minimum of six months. An in-store activation is pay per use and typically runs 3 to 14 days, with no long-term commitment.',
  },
  {
    q: 'Does a desk increase sales?',
    a: 'We measure a desk like store design: footfall, dwell and loyalty. At our desks the average customer takes home three pieces, not one, and at Benetton customised product sales rose 20% with 15% higher average spend on personalised items.',
  },
  {
    q: 'Can you run desks across many stores?',
    a: 'Yes. Thirteen desks run across India today, operators are trained on one system so every city runs the same, and we serve client stores nationwide.',
  },
  {
    q: 'Which products from our range can be customised?',
    a: 'Around 90% of a typical retail range: shoes lead the desk, followed by caps, apparel, babywear, bags, leather goods, notebooks, gift boxes and hard goods.',
  },
  {
    q: 'How is a store desk priced?',
    a: 'A permanent desk is a fixed monthly rental; an activation is pay per use. Four things move the number: how long it runs, how many machines, which techniques and how many stores. Send a brief and you get a real price within 24 hours.',
  },
];

const BRIEF: BriefFormConfig = {
  sourcePage: 'retail-activation-live-customisation',
  leadType: 'retail_activation',
  companyLabel: 'Brand or retailer',
  cityLabel: 'Store city',
  dateLabel: 'Start date',
  type: {
    name: 'brief_type',
    label: 'What are you looking for?',
    options: [
      'A permanent desk in our store',
      'An in-store activation or season',
      'A multi-store rollout',
      'Not sure yet',
    ],
  },
  size: {
    name: 'size',
    label: 'Number of stores',
    options: ['1', '2 to 5', '6 to 20', '20+', 'Not sure yet'],
  },
  placeholder: 'Your stores, the products on the floor, and when you want the desk running.',
  footNote: 'Reply the same day. Price within 24 hours.',
};

/* ---------- Page copy ---------- */

const PROBLEMS = [
  {
    title: 'A VISIT ONLINE CANNOT COPY.',
    body: 'The customer leaves with their own name, date or drawing on what they bought, made while they watched.',
  },
  {
    title: 'BASKETS THAT GROW.',
    body: 'At our desks the average customer does not take home one piece. They take home three.',
  },
  {
    title: 'STORES THAT RUN THE SAME.',
    body: 'Operators are trained on one system, so a desk in Delhi runs exactly like one in Bangalore.',
  },
  {
    title: 'NOTHING FOR YOUR STAFF TO RUN.',
    body: 'Operator, designer, materials and 365-day maintenance are ours. Your team keeps selling.',
  },
];

const MODELS = [
  {
    meta: 'RENTAL · 6 MONTHS+',
    name: 'A desk that stays.',
    body: 'A fixed monthly price covers the machines, an expert operator, materials and 365-day maintenance. Built for permanent desks and multi-store rollouts.',
    hero: true,
  },
  {
    meta: 'PAY PER USE · 3 TO 14 DAYS',
    name: 'An activation in store.',
    body: 'The full setup comes in for a launch, a festive season or a drop, with no long-term commitment and no upfront equipment cost.',
  },
  {
    meta: 'ROLLOUT · NATIONWIDE',
    name: 'Many stores, one standard.',
    body: 'Thirteen desks run across India today. Every operator is trained on our system, so each new store runs the same.',
  },
];

const PRODUCTS = [
  'Shoes',
  'Caps',
  'Tees',
  'Jackets',
  'Babywear',
  'Blankets and towels',
  'Bags and totes',
  'Wallets and leather',
  'Luggage tags',
];

const DECATHLON_TILES = [
  { v: '10+', l: 'Stores, pan India' },
  { v: '3', l: 'Pieces customised per person, on average' },
];

type CardBase = Omit<React.ComponentProps<typeof CaseCard>, 'aosDelay' | 'videoId'>;

/** Desks on real floors: case studies open a YouTube-thumbnail CaseCard; the
    Benetton and Puma cards have no case page or video, so they link to /clients
    with a still photo and no play overlay (as in the demo). */
const FLOOR_CARDS: (CardBase & ({ videoId: string } | { img: string }))[] = [
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
    href: '/clients',
    img: '/img/benetton.jpg',
    alt: 'Benetton — In-store embroidery, select stores',
    title: 'Benetton — In-store embroidery, select stores',
    highlight: '20% more customised product sales',
    desc: 'Live embroidery integrated into select stores. Customised product sales rose 20%, with 15% higher average spend on personalised items.',
    tags: ['Live embroidery', 'Apparel', 'Retail'],
  },
  {
    href: '/clients',
    img: '/img/puma.jpg',
    alt: 'Puma — Retail desks, five stores',
    title: 'Puma — Retail desks, five stores',
    highlight: 'Where the model was first tested',
    desc: 'One of the first floors that let this run at all. Five stores, real conditions, real customers.',
    tags: ['Live embroidery', 'Retail desks'],
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

/** A scale-card with a still photo instead of a video thumbnail. */
function PhotoCard({
  href,
  img,
  alt,
  title,
  highlight,
  desc,
  tags,
  aosDelay,
}: CardBase & { img: string; aosDelay?: number }) {
  return (
    <Link
      href={href}
      className="scale-card group"
      style={{ textDecoration: 'none', color: 'inherit' }}
      data-aos="fade-up"
      data-aos-delay={aosDelay}
    >
      <div className="scale-card-video">
        <img src={img} alt={alt} loading="lazy" decoding="async" />
      </div>
      <div className="scale-card-body">
        <div className="scale-card-title">{title}</div>
        <div className="scale-card-highlight">{highlight}</div>
        <p className="scale-card-desc">{desc}</p>
      </div>
      <div className="scale-card-footer">
        <div className="scale-card-tech-label">Techniques</div>
        <div className="scale-card-tags">
          {tags.map((t) => (
            <span key={t} className="scale-tag">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default function RetailActivationPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageNode({ path: PATH, name: TITLE, description: DESCRIPTION, image: IMAGE }),
          breadcrumbNode(PATH, CRUMBS),
          serviceNode({
            path: PATH,
            name: 'Live customisation desks for retail stores',
            serviceType: 'Retail activation',
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
                Retail activation · In-store desks
              </p>
              <h1 className="big" data-aos="fade-up" data-aos-delay="100">
                A REASON TO WALK INTO THE STORE.
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
                alt="A Custo Gusto live customisation desk inside a Sports Yard store"
              />
              <div className="hero-badge">
                <span className="stk">{bc('MADE LIVE ●')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Ticker />

      {/* 2 · Case study: Decathlon */}
      <section className="band band-night">
        <div className="wrap split split-night">
          <div className="night-side" style={{ paddingLeft: 0 }}>
            <div className="night-text">
              <p className="eyebrow" data-aos="fade-up">Case study · Embedded desks · Pan India</p>
              <h2 className="big" data-aos="fade-up" data-aos-delay="100">
                DECATHLON, DESKS IN STORES ACROSS INDIA.
              </h2>
              <p className="lead" data-aos="fade-up" data-aos-delay="150">
                Live embroidery desks embedded inside Decathlon stores across India. An operator and
                a designer personalise products from the store floor while the customer watches,
                every day, and customers come back to customise again.
              </p>
            </div>
            <div className="night-lower">
              <div className="g cg-case-tiles">
                {DECATHLON_TILES.map((t, i) => (
                  <div className="tile" key={t.l} data-aos="fade-up" data-aos-delay={i * 100}>
                    <div className="v">{t.v}</div>
                    <div className="l">{t.l}</div>
                  </div>
                ))}
              </div>
              <div className="btns" data-aos="fade-up" data-aos-delay="200">
                <Button href="/work/decathlon" variant="blush">
                  Read the Decathlon case study
                </Button>
              </div>
            </div>
          </div>
          <div style={{ alignSelf: 'center' }}>
            <VideoEmbed videoId="y3J-sEqtXcg" title="Custo Gusto at Decathlon" />
          </div>
        </div>
      </section>

      {/* 3 · Buyer + business problem */}
      <section className="sec band-blush">
        <div className="wrap">
          <div className="cg-head">
            <p className="eyebrow" data-aos="fade-up">Who this is for</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              EVERYTHING ON YOUR FLOOR CAN BE BOUGHT ONLINE. THIS CANNOT.
            </h2>
            <p className="sub" data-aos="fade-up" data-aos-delay="150">
              Heads of retail, store operations and brand experience are fighting the same thing:
              floors that look like every other floor, and products a phone delivers faster. A desk
              that makes the product personal, in the store, changes why people come in.
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

      {/* 4 · Ways onto your floor */}
      <section className="sec">
        <div className="wrap">
          <div className="cg-head">
            <p className="eyebrow" data-aos="fade-up">Ways onto your floor</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              A DESK THAT STAYS, OR A DESK FOR THE SEASON.
            </h2>
          </div>
          <div className="g g3 cg-mt">
            {MODELS.map((m, i) => (
              <div
                className={m.hero ? 'tech hero-tech' : 'tech'}
                key={m.meta}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="tm">{m.meta}</div>
                <div className="tn">{m.name}</div>
                <p className="tb">{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 · 6 ways to customise */}
      <SixWays
        eyebrow="What customers personalise"
        title="6 WAYS TO CUSTOMISE."
        sub="Around 90% of a typical retail range can be customised live, with shoes leading the desk."
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

      {/* 6 · Desks on real floors */}
      <section className="sec">
        <div className="wrap">
          <div className="cg-head">
            <p className="eyebrow" data-aos="fade-up">Desks on real floors</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              RUNNING INSIDE REAL STORES, AT REAL FOOTFALL.
            </h2>
            <p className="sub" data-aos="fade-up" data-aos-delay="150">
              Live customisation inside stores since June 2023.
            </p>
          </div>
          <div className="g g2 cg-mt">
            {FLOOR_CARDS.map((c, i) =>
              'videoId' in c ? (
                <CaseCard key={c.title} {...c} aosDelay={(i % 2) * 100} />
              ) : (
                <PhotoCard key={c.title} {...c} aosDelay={(i % 2) * 100} />
              )
            )}
          </div>
        </div>
      </section>

      {/* 7 · Verified proof */}
      <ProofSection
        note="We measure a desk like store design: by footfall, dwell and loyalty."
      />

      {/* 8 · Cities + nationwide */}
      <section className="sec">
        <div className="wrap split">
          <div>
            <p className="eyebrow" data-aos="fade-up">Where we work</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              DESKS IN STORES ACROSS INDIA.
            </h2>
            <p className="lead" style={{ marginTop: '16px' }} data-aos="fade-up" data-aos-delay="150">
              Our office is in Noida, with standing crews in Delhi and Bangalore, and we serve
              client stores nationwide. If your stores are somewhere else, that is fine. Where our
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
      <FaqSection eyebrow="Asked before the call" title="RETAIL DESK QUESTIONS." items={FAQS} />

      {/* 10 · Brief form + book a call */}
      <BriefSection
        eyebrow="Store desk brief"
        title="TELL US ABOUT YOUR FLOOR. GET A PRICE IN 24 HOURS."
        sub="The stores, the range and the timing. You get a reply the same day."
        form={BRIEF}
        callCopy="Give it fifteen minutes and you will see the desk mapped to your own stores. Book a call on WhatsApp, or ring us directly."
        waText={WA_TEXT}
      />

      {/* 11 · Closing band */}
      <ClosingBand
        dare="GIVE THEM A REASON TO COME IN."
        sub="Put a machine on your floor. We bring everything else."
        primary={{ href: '#brief', label: 'Get a price in 24 hours' }}
        secondary={{ href: '/work', label: 'Just look at the work' }}
      />
    </>
  );
}

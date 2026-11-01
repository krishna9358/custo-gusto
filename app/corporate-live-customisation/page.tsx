import React from 'react';
import Ticker from '@/components/Ticker';
import { Button } from '@/components/Button';
import { Dot, bc } from '@/components/Glyphs';
import { JsonLd } from '@/components/JsonLd';
import { ClosingBand } from '@/components/SharedSections';
import {
  Breadcrumbs,
  DirectAnswer,
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

const PATH = '/corporate-live-customisation';
const TITLE = 'Custom Corporate Merchandise, Gifting and Job Work | Custo Gusto';
const DESCRIPTION =
  'Any merch your brand needs, made custom: uniforms, caps, bags, towels, gifts and kits. Job work with no minimum order, sampled first, or a live desk.';
/* the demo's named-bottles photo (/img/cg/corp-named-bottles.webp) is not in the
   repo; w12 is the engraved bottle we have */
const IMAGE = '/img/w12.jpg';

/** The "In short" block in the hero — also the Service description in the JSON-LD. */
const ANSWER =
  'Custo Gusto makes any merchandise your brand needs custom, across India: uniforms, caps, bags, towels, socks, patches, gifts and welcome kits, embroidered, printed, engraved or foiled with your logo and, if you want, each person’s name. There is no minimum order, and every order is sampled first. Or bring a live desk to your event.';

/** Prefilled WhatsApp message for both "Book a call" buttons. */
const WA_TEXT =
  "Hi Custo Gusto, I'd like to talk about a corporate merchandise or job work order.";

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
  { name: 'Corporate merchandise', path: PATH },
];

const FAQS: FaqItem[] = [
  {
    q: 'What does Custo Gusto do for corporate merchandise?',
    a: 'Anything your brand’s merch needs to become custom: uniforms, caps, bags, towels, socks, patches, gifts and welcome kits, embroidered, printed, engraved or foiled with your logo, and with each person’s name if you want it. We run it as job work on your products, source and pack the products ourselves, or bring a live desk to your event.',
  },
  {
    q: 'Is there a minimum order?',
    a: 'No. There is no minimum order quantity on any product or finish. Sample timing, production window and price are confirmed once we see the product, artwork, quantity and destination.',
  },
  {
    q: 'Which companies have you made corporate merch for?',
    a: 'Recent job work includes corporate apparel for JK Cement and SimCorp, embroidered bags for Norstella’s employee kits, backpacks for Fujifilm, team logo embroidery for Vaidam, uniform logo embroidery for Kidzee, and more than 2,400 towels for Maxvida. At live desks and activations we have worked with one8, Decathlon, Uniqlo, Benetton, Puma and Mothercare.',
  },
  {
    q: 'Do you take bulk and repeat orders?',
    a: 'Yes. Large orders run as job work, sampled first and produced to the approved sample. Recent runs include 1,000 bags in 7 days with zero rejections, 130 caps embroidered and checked in a single day, and more than 2,400 towels on one order.',
  },
  {
    q: 'Can you work on products we already have?',
    a: 'Yes. That is client-supplied job work: you send the products, we sample the finish and apply it to every piece. We can also source the base products, customise them and pack the order.',
  },
  {
    q: 'Which products can you customise?',
    a: 'Uniforms, shirts and jackets, caps, chef coats and aprons, towels and robes, socks, patches, bags and backpacks, bottles and mugs, diaries and notebooks, pens, leather goods, boxes and gift bags, keychains and awards.',
  },
  {
    q: 'Do you send a sample first?',
    a: 'Yes. We digitise your logo in house, test the material, placement and finish, and the approved sample becomes the standard for the whole order.',
  },
  {
    q: 'Can every piece carry our branding and each person’s name?',
    a: 'Yes. In-house design is included: your mark goes into the artwork, and each person’s name or initials can go on top, so every piece is branded and personal at once.',
  },
  {
    q: 'What happens at a live corporate desk?',
    a: 'Each person chooses a piece, such as a bottle, notebook, wallet, cap or tote, and watches their own name or design engraved, foiled or stitched onto it in minutes. The desk becomes part of the day.',
  },
  {
    q: 'How many people can a live desk serve?',
    a: 'A ready design takes about four minutes on one embroidery machine, roughly fifteen pieces an hour; foil takes about two minutes a piece. At the one8 Global Premiere, four machines, eight operators and three designers made 300+ one-of-one pieces in about five hours. We size the desk to your headcount and the hours.',
  },
  {
    q: 'What do you need for a quote?',
    a: 'Five details: the product or category, the quantity, the artwork or names, the occasion, and the delivery date and location. Send them and we reply the same day.',
  },
];

const BRIEF: BriefFormConfig = {
  sourcePage: 'corporate-live-customisation',
  leadType: 'corporate',
  companyLabel: 'Company',
  cityLabel: 'Delivery location',
  dateLabel: 'Delivery or event date',
  type: {
    name: 'brief_type',
    label: 'What do you need?',
    options: [
      'Uniforms and team apparel',
      'Caps, bags and accessories',
      'Job work on our products',
      'Onboarding or festive gifting',
      'Client gifts and awards',
      'A live desk at our event',
      'Something else',
    ],
  },
  size: {
    name: 'size',
    label: 'Quantity',
    options: ['Not sure yet', 'Under 50', '50 to 200', '200 to 1,000', '1,000+'],
  },
  placeholder: 'The product, the artwork or names, and how it should be packed.',
  footNote: 'Reply the same day. No minimum order.',
};

/* ---------- Page copy ---------- */

const PROBLEMS = [
  {
    title: 'YOUR LOGO ON ANYTHING.',
    body: 'Uniforms, caps, jackets, bags, towels, socks, patches, bottles, notebooks and gift boxes. If it carries your brand, we can customise it.',
  },
  {
    title: 'NO MINIMUM ORDER.',
    body: 'A small team order or thousands of pieces: every order gets the same sampled finish.',
  },
  {
    title: 'SAMPLED BEFORE IT IS MADE.',
    body: 'We digitise your logo in house and test the material, placement and finish first. The approved sample becomes the standard.',
  },
  {
    title: 'NAMES WHEN YOU WANT THEM.',
    body: 'Add each person’s name or initials on top of your logo, and the piece becomes the one they keep.',
  },
];

const ORDER_WAYS = [
  {
    meta: 'CLIENT SUPPLIED JOB WORK',
    name: 'You send the products.',
    body: 'Uniforms, caps, bags, towels or anything else you already have. We sample the finish and apply it to every piece. No minimum order.',
    hero: true,
  },
  {
    meta: 'PRODUCT SUPPLY',
    name: 'We source, customise and pack.',
    body: 'We source the base products, customise them with your logo and names, and pack the order for dispatch.',
  },
  {
    meta: 'A LIVE DESK',
    name: 'Made while they watch.',
    body: 'Machines, operators and a live designer at your offsite, townhall or client event. Each person’s piece is made in front of them, in minutes.',
  },
];

/* The demo's five category photos (cg-assets/corp-*.webp) are not in the repo.
   Each card uses the closest existing photo, with the alt text describing what
   is actually shown. */
const NEEDS = [
  {
    name: 'Uniforms and team apparel',
    desc: 'Shirts, polos, jackets, caps, chef coats and aprons, with your logo stitched on.',
    img: '/img/w14.jpg',
    alt: 'Three caps embroidered with the same logo',
  },
  {
    name: 'Bags and accessories',
    desc: 'Totes, backpacks, pouches, socks, towels and patches, branded for your team or your customers.',
    img: '/img/w16.jpg',
    alt: 'A printed canvas tote bag',
  },
  {
    name: 'Onboarding kits',
    desc: 'Bottles, notebooks and welcome kits, each one carrying the new joiner’s name.',
    img: '/img/w12.jpg',
    alt: 'A black bottle engraved with an individual name',
  },
  {
    name: 'Festive and client gifts',
    desc: 'Boxes, pens, leather goods and stationery for Diwali, the year end and your clients.',
    img: '/img/w05.jpg',
    alt: 'A foiled gift box with a notebook, leather goods and luggage tags',
  },
  {
    name: 'Awards and mementos',
    desc: 'Wood, metal, acrylic and keepsakes, engraved with a name or a milestone.',
    /* same stand-in the wedding page uses for corp-keepsakes.webp */
    img: '/img/svc_a10.jpg',
    alt: 'Engraved wooden coasters, a leather card holder and an acrylic tag',
  },
];

const PRODUCTS = [
  'Uniforms',
  'Caps',
  'Jackets',
  'Chef coats and aprons',
  'Towels and robes',
  'Socks',
  'Patches',
  'Bags and backpacks',
  'Bottles and mugs',
  'Diaries and notebooks',
  'Leather goods',
  'Gift boxes',
  'Awards',
];

const ROUTE = [
  {
    meta: '01 · BRIEF',
    name: 'Tell us the order.',
    body: 'Product, quantity, artwork or names, and delivery date.',
  },
  {
    meta: '02 · SAMPLE',
    name: 'We test it first.',
    body: 'Logo digitised in house; material, placement and finish checked before production.',
  },
  {
    meta: '03 · PRODUCTION',
    name: 'The sample is the standard.',
    body: 'Every piece is made to the approved sample and checked by hand.',
  },
  {
    meta: '04 · PACK AND DISPATCH',
    name: 'Packed the way you need.',
    body: 'Names, kits and labels follow the agreed scope.',
  },
];

const JOB_WORK = [
  {
    title: 'Uniforms and apparel',
    clients: 'JK Cement · SimCorp · Vaidam · Kidzee',
    body: 'Corporate shirts and apparel for JK Cement and SimCorp, team logo embroidery for Vaidam, and uniform logos for Kidzee.',
  },
  {
    title: 'Bags and backpacks',
    clients: 'Norstella · Fujifilm',
    body: 'Everyday bags embroidered into employee kits for Norstella, and branded backpacks for Fujifilm.',
  },
  {
    title: 'Towels and home',
    clients: 'Maxvida',
    body: 'More than 2,400 towels customised for Maxvida on a single order. Hotel towels, robes, cushion covers and quilts.',
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

export default function CorporateCustomisationPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageNode({ path: PATH, name: TITLE, description: DESCRIPTION, image: IMAGE }),
          breadcrumbNode(PATH, CRUMBS),
          serviceNode({
            path: PATH,
            name: 'Custom corporate merchandise, gifting and job work',
            serviceType: 'Corporate merchandise customisation',
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
                Corporate merch · Job work · Gifting · Live desks
              </p>
              <h1 className="big" data-aos="fade-up" data-aos-delay="100">
                ANY MERCH YOUR BRAND NEEDS, MADE CUSTOM.
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
              <img src={IMAGE} alt="A black bottle laser engraved with the name Rohit" />
              <div className="hero-badge">
                <span className="stk">{bc('MADE LIVE ●')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Ticker />

      {/* 2 · Start with what you need */}
      <section className="sec band-blush">
        <div className="wrap">
          <div className="cg-head">
            <p className="eyebrow" data-aos="fade-up">Start with what you need</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              WHAT ARE YOU MAKING?
            </h2>
            <p className="sub" data-aos="fade-up" data-aos-delay="150">
              Pick the closest need. Products and finishes can change after sampling.
            </p>
          </div>
          <div className="g g3 cg-mt">
            {NEEDS.map((n, i) => (
              <article
                className="tk"
                key={n.name}
                data-aos="fade-up"
                data-aos-delay={(i % 3) * 100}
              >
                <div className="tk-media">
                  <img className="tk-img" src={n.img} alt={n.alt} loading="lazy" decoding="async" />
                </div>
                <div className="tk-inner">
                  <h3 className="tk-name">{n.name}</h3>
                  <p className="tk-desc">{n.desc}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="cg-also" data-aos="fade-up">
            <a
              href="https://www.instagram.com/custogusto.embroidery/"
              target="_blank"
              rel="noopener noreferrer"
            >
              See recent job work and corporate orders on Instagram →
            </a>
          </p>
        </div>
      </section>

      {/* 3 · 6 ways to customise */}
      <SixWays
        eyebrow="6 types of customisation"
        title="6 FINISHES FOR MOST COMPANY BRIEFS."
        sub="We recommend the finish after checking the material, the artwork and the quantity."
      >
        <div className="cg-chips" aria-label="Products" data-aos="fade-up" data-aos-delay="100">
          {PRODUCTS.map((p) => (
            <span className="chip" key={p}>
              {p}
            </span>
          ))}
        </div>
      </SixWays>

      {/* 4 · Buyer + business problem */}
      <section className="sec band-blush">
        <div className="wrap">
          <div className="cg-head">
            <p className="eyebrow" data-aos="fade-up">Who this is for</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              ONE PARTNER FOR EVERYTHING YOUR BRAND PUTS ITS NAME ON.
            </h2>
            <p className="sub" data-aos="fade-up" data-aos-delay="150">
              HR and admin teams, marketing, procurement, apparel and uniform brands, hotels and
              restaurants come to us when merch has to carry the brand: logo uniforms, team caps,
              branded bags, towels, festive gifts and client kits. You bring the brief; we handle
              the product, the finish, the packing and the dispatch.
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

      {/* 5 · Pull line */}
      <section className="sec-sm">
        <div className="wrap">
          <div className="pull" style={{ maxWidth: '860px' }} data-aos="fade-up">
            Whatever your merch is, we make it custom. Your logo on every piece, a name on each one
            if you want it, sampled first, then made to that standard.
            <small>As job work on your products, as products we source and pack, or live at your event.</small>
          </div>
        </div>
      </section>

      {/* 6 · Three ways to order */}
      <section className="sec">
        <div className="wrap">
          <div className="cg-head">
            <p className="eyebrow" data-aos="fade-up">Three ways to order</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              YOUR PRODUCTS, OURS, OR LIVE AT YOUR EVENT.
            </h2>
          </div>
          <div className="g g3 cg-mt">
            {ORDER_WAYS.map((w, i) => (
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

      {/* 7 · From brief to delivery */}
      <section className="sec band-blush">
        <div className="wrap">
          <div className="cg-head">
            <p className="eyebrow" data-aos="fade-up">From brief to delivery</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              A CLEAR ROUTE FROM IDEA TO FINISHED ORDER.
            </h2>
          </div>
          <div className="g g4 cg-mt">
            {ROUTE.map((s, i) => (
              <div className="tech" key={s.meta} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="tm">{s.meta}</div>
                <div className="tn">{s.name}</div>
                <p className="tb">{s.body}</p>
              </div>
            ))}
          </div>
          <p className="cg-note" data-aos="fade-up">
            There is no minimum order. Sample timing, production window and price are confirmed
            after we see the product, artwork, quantity and destination.
          </p>
        </div>
      </section>

      {/* 8 · Job work, recently */}
      <section className="sec">
        <div className="wrap">
          <div className="cg-head">
            <p className="eyebrow" data-aos="fade-up">Job work, recently</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              WHAT WE HAVE BEEN MAKING FOR BRANDS.
            </h2>
            <p className="sub" data-aos="fade-up" data-aos-delay="150">
              Recent job work, as posted on our Instagram.
            </p>
          </div>
          <div className="g g3 cg-mt">
            {JOB_WORK.map((j, i) => (
              <div className="case" key={j.title} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="ct">{j.title}</div>
                <div className="cm">{j.clients}</div>
                <p>{j.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9 · Verified proof */}
      <ProofSection />

      {/* 10 · Cities + nationwide */}
      <section className="sec">
        <div className="wrap split">
          <div>
            <p className="eyebrow" data-aos="fade-up">Where we work</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              YOUR OFFICE, YOUR OFFSITE, ANYWHERE IN INDIA.
            </h2>
            <p className="lead" style={{ marginTop: '16px' }} data-aos="fade-up" data-aos-delay="150">
              Our office is in Noida, and standing crews wait in Delhi and Bangalore, so most places
              in India are about two days away for a live desk. Job work and packed orders are
              dispatched to the delivery location in your brief.
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

      {/* 11 · FAQ (the same FAQS feed the FAQPage JSON-LD) */}
      <FaqSection eyebrow="Asked before the call" title="CORPORATE MERCH QUESTIONS." items={FAQS} />

      {/* 12 · Brief form + book a call */}
      <BriefSection
        eyebrow="The five details we need"
        title="SEND THE BRIEF. WE WILL MAKE IT CUSTOM."
        sub="Product, quantity, artwork or names, occasion, and delivery date and location. You get a reply the same day."
        form={BRIEF}
        callCopy="Prefer to send it on WhatsApp? Share the five details there, or ring us directly."
        waText={WA_TEXT}
      />

      {/* 13 · Closing band */}
      <ClosingBand
        dare="YOUR BRAND, ON ANYTHING. MADE CUSTOM."
        sub="No minimum order. Job work packed and sent, or live at your event."
        primary={{ href: '#brief', label: 'Get a price in 24 hours' }}
        secondary={{ href: '/work', label: 'Just look at the work' }}
      />
    </>
  );
}

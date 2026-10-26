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

const PATH = '/wedding-live-customisation';
const TITLE = 'Wedding Live Customisation and Favours in India | Custo Gusto';
const DESCRIPTION =
  'A live customisation desk for weddings, or favours made ahead: names, initials and your date foiled, stitched or engraved onto keepsakes guests keep.';
/* the demo's /img/cg/wed-monogram-totes.webp does not exist; contact_e1 is the
   same subject (canvas totes, one carrying a couple's monogram and date) */
const IMAGE = '/img/contact_e1.jpg';

/** The "In short" block in the hero — also the Service description in the JSON-LD. */
const ANSWER =
  'Custo Gusto personalises wedding favours across India two ways: a live desk at the function, where guests watch their name or the couple’s initials foiled, stitched or engraved onto a keepsake in minutes, or favours made ahead, sampled and packed for every guest. Totes, napkins, handkerchiefs, leather tags, stationery and boxes all carry your date.';

/** Prefilled WhatsApp message for both "Book a call" buttons. */
const WA_TEXT = "Hi Custo Gusto, I'd like to book a call about a wedding.";

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
  { name: 'Weddings', path: PATH },
];

const FAQS: FaqItem[] = [
  {
    q: 'What is a live customisation station at a wedding?',
    a: 'A desk at the wedding where each guest chooses a keepsake and watches their name, or the couple’s date and initials, foiled, stitched or engraved onto it in minutes. It is a favour and part of the entertainment at once.',
  },
  {
    q: 'Can you make wedding favours in advance?',
    a: 'Yes. We source the favours or work on ones you send, test the material, placement and finish on a sample, then personalise and pack every piece. Names, kits and labels follow the agreed scope.',
  },
  {
    q: 'What can guests personalise?',
    a: 'Handkerchiefs, napkins, totes, favour boxes, luggage tags, notebooks, robes, caps, leather keepsakes, wooden coasters and glassware.',
  },
  {
    q: 'How many guests can a live desk serve?',
    a: 'Digital hot foil takes about two minutes a piece and embroidery about four to five. We scope the machines, operators and designers to your guest count and the hours of the function before the day.',
  },
  {
    q: 'Can it match our wedding theme?',
    a: 'Yes. In-house design is included: our designer works your colours, monogram and date into the artwork, and each guest adds their own name.',
  },
  {
    q: 'Do you work with wedding planners?',
    a: 'Yes. A live desk drops into the planner’s run of show, with our machines, operators and designers and about two days to set up. Favours made ahead arrive packed for the planner’s team to place.',
  },
  {
    q: 'Is there a minimum order for favours?',
    a: 'No. There is no minimum order for favours. Sample timing, production window and price are confirmed after we see the product, the artwork or names, the quantity and the destination.',
  },
  {
    q: 'How is a wedding priced?',
    a: 'It depends on whether you want a live desk, favours made ahead, or both, and on the guest count, techniques and city. Send a brief and we reply the same day.',
  },
];

const BRIEF: BriefFormConfig = {
  sourcePage: 'wedding-live-customisation',
  leadType: 'wedding',
  companyLabel: 'Your name or planner’s company',
  companyRequired: false,
  cityLabel: 'Wedding city',
  dateLabel: 'Wedding date',
  type: {
    name: 'brief_type',
    label: 'What would you like?',
    options: ['A live desk at a function', 'Favours made ahead and packed', 'Both', 'Not sure yet'],
  },
  size: {
    name: 'size',
    label: 'Guest count',
    options: ['Not sure yet', 'Under 150', '150 to 400', '400 to 800', '800+'],
  },
  placeholder: 'The functions, the keepsakes you have in mind, and the names or monogram.',
  footNote: 'Reply the same day.',
};

/* ---------- Page copy ---------- */

const PROBLEMS = [
  {
    title: 'MADE FOR THEM, NOT FOR EVERYBODY.',
    body: 'Each guest’s piece carries their name, or the couple’s date and initials.',
  },
  {
    title: 'PART OF THE ENTERTAINMENT.',
    body: 'At a live desk, guests gather between functions, choose, and wait for their own.',
  },
  {
    title: 'A DATE THEY WILL KEEP.',
    body: 'Foiled onto a favour box or stitched into a handkerchief, the date stays in a drawer for years.',
  },
  {
    title: 'RELIABLE ON A FIXED HOUR.',
    body: 'Live desks are sized to your guest count before the day; favours made ahead are sampled first.',
  },
];

const WAYS = [
  {
    meta: 'A LIVE DESK',
    name: 'Made while they watch.',
    body: 'Machines, operators and a designer at the mehendi, sangeet or reception. Guests choose a keepsake and watch it personalised in minutes.',
    hero: true,
  },
  {
    meta: 'FAVOURS MADE AHEAD',
    name: 'Personalised and packed.',
    body: 'We source the favours or work on ones you send, sample the material, placement and finish, then personalise and pack them.',
  },
  {
    meta: 'BOTH',
    name: 'Ready favours, plus a desk.',
    body: 'Packed favours for every guest at the door, and a live desk for the guests who want to make their own.',
  },
];

/* The demo's three /img/cg/*.webp keepsake shots do not exist in the codebase;
   each is replaced by the closest existing photo of the same kind of piece. */
const KEEPSAKES = [
  {
    name: 'Monogram totes',
    desc: 'The couple’s initials and the date, on a tote every guest carries home.',
    img: '/img/contact_e1.jpg',
    alt: 'Totes with a couple’s monogram and wedding date',
  },
  {
    name: 'Foiled keepsakes',
    desc: 'Initials foiled onto leather, tags, notebooks, envelopes and gift boxes.',
    img: '/img/w05.jpg',
    alt: 'Foiled initials on leather wallets, tags, a notebook and envelopes',
  },
  {
    name: 'Engraved mementos',
    desc: 'Names and initials engraved into wood, leather and metal.',
    img: '/img/svc_a10.jpg',
    alt: 'Wooden coasters and leather pieces engraved with initials',
  },
];

const PRODUCTS = [
  'Handkerchiefs',
  'Napkins',
  'Totes',
  'Favour boxes',
  'Luggage tags',
  'Notebooks',
  'Robes',
  'Caps',
  'Leather keepsakes',
  'Wooden coasters',
  'Glassware',
];

const MORE_CASES: Omit<React.ComponentProps<typeof CaseCard>, 'aosDelay'>[] = [
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
    href: '/work/uniqlo',
    videoId: 'SHvAwvWKkWY',
    alt: 'Uniqlo — In-store customization',
    title: 'Uniqlo — In-store customization',
    highlight: '700+ designs in 3 days',
    desc: 'We turned Uniqlo clothes and bags into personal pieces, live in the store. The store saw its own sales rise across the three days.',
    tags: ['Apparel and bags', 'Retail activation'],
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

export default function WeddingLiveCustomisationPage() {
  return (
    <>
      <JsonLd
        data={graph(
          webPageNode({ path: PATH, name: TITLE, description: DESCRIPTION, image: IMAGE }),
          breadcrumbNode(PATH, CRUMBS),
          serviceNode({
            path: PATH,
            name: 'Wedding live customisation and personalised favours',
            serviceType: 'Wedding activity station',
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
                Weddings and private celebrations
              </p>
              <h1 className="big" data-aos="fade-up" data-aos-delay="100">
                THE FAVOUR NOBODY LEAVES ON THE TABLE.
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
                alt="Canvas totes with a monogram of the couple’s initials and the wedding date"
              />
              <div className="hero-badge">
                <span className="stk">{bc('MADE LIVE ●')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Ticker />

      {/* 2 · Keepsakes guests take home */}
      <section className="sec">
        <div className="wrap">
          <div className="cg-head">
            <p className="eyebrow" data-aos="fade-up">Keepsakes guests take home</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              FOILED, STITCHED OR ENGRAVED, WITH YOUR DATE ON IT.
            </h2>
            <p className="sub" data-aos="fade-up" data-aos-delay="150">
              Finishes are confirmed after sampling, on the products you choose.
            </p>
          </div>
          <div className="g g3 cg-mt">
            {KEEPSAKES.map((k, i) => (
              <article className="tk" key={k.name} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="tk-media">
                  <img className="tk-img" src={k.img} alt={k.alt} loading="lazy" decoding="async" />
                </div>
                <div className="tk-inner">
                  <h3 className="tk-name">{k.name}</h3>
                  <p className="tk-desc">{k.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3 · 6 ways to customise */}
      <SixWays
        eyebrow="What we use"
        title="6 TYPES OF CUSTOMISATION."
        sub="Foil leads at weddings; embroidery carries the soft keepsakes; laser marks wood, glass and leather."
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

      {/* 4 · Two ways to do it */}
      <section className="sec">
        <div className="wrap">
          <div className="cg-head">
            <p className="eyebrow" data-aos="fade-up">Two ways to do it</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              AT THE FUNCTION, OR READY BEFORE IT.
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

      {/* 5 · Buyer + problem */}
      <section className="sec band-blush">
        <div className="wrap">
          <div className="cg-head">
            <p className="eyebrow" data-aos="fade-up">Who this is for</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              A BEAUTIFUL WEDDING NOBODY REMEMBERS SPECIFICALLY.
            </h2>
            <p className="sub" data-aos="fade-up" data-aos-delay="150">
              Couples, families and the planners who run their weddings want guests to remember
              this wedding, not weddings in general. The favour made for everybody is the one left
              behind. The one made for a guest goes home.
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

      {/* 6 · Keepsakes we have made */}
      <section className="sec">
        <div className="wrap">
          <div className="cg-head">
            <p className="eyebrow" data-aos="fade-up">Keepsakes we have made</p>
            <h2 className="big" data-aos="fade-up" data-aos-delay="100">
              THE PIECES PEOPLE KEEP.
            </h2>
          </div>
          <div className="g g2 cg-mt">
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
              WEDDINGS IN YOUR CITY, OR THE ONE YOU ARE FLYING TO.
            </h2>
            <p className="lead" style={{ marginTop: '16px' }} data-aos="fade-up" data-aos-delay="150">
              Our office is in Noida, and standing crews wait in Delhi and Bangalore, so most places
              in India are about two days away. Two celebrations can run at the same time, and
              favours made ahead are dispatched to the venue.
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
      <FaqSection eyebrow="Asked before the call" title="WEDDING QUESTIONS." items={FAQS} />

      {/* 10 · Brief form + book a call */}
      <BriefSection
        eyebrow="Wedding brief"
        title="TELL US ABOUT THE WEDDING."
        sub="The functions, the guest count, the city, and whether you want a live desk, favours, or both."
        form={BRIEF}
        callCopy="Planning for a couple, or your own wedding? Book a call on WhatsApp, or ring us directly."
        waText={WA_TEXT}
      />

      {/* 11 · Closing band */}
      <ClosingBand
        dare="YOURS. ONLY YOURS."
        sub="A desk at the wedding, favours at the door, or both. We bring everything else."
        primary={{ href: '#brief', label: 'Get a price in 24 hours' }}
        secondary={{ href: '/work', label: 'Just look at the work' }}
      />
    </>
  );
}

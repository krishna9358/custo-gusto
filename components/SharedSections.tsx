import React from 'react';
import Link from 'next/link';
import { Dot, bc } from './Glyphs';

export const IMG_KEYS: Record<string, string> = {
  contact_e1: '/img/contact_e1.jpg',
  story_c2: '/img/story_c2.jpg',
  story_c3: '/img/story_c3.jpg',
  story_e2: '/img/story_e2.jpg',
  story_e5: '/img/story_e5.jpg',
  svc_a10: '/img/svc_a10.jpg',
  svc_c1: '/img/svc_c1.jpg',
  svc_e1: '/img/svc_e1.jpg',
  touch_caps: '/img/touch_caps.jpg',
  touch_foil: '/img/touch_foil.jpg',
  touch_leather: '/img/touch_leather.jpg',
  touch_shoes: '/img/touch_shoes.jpg',
  w01: '/img/w01.jpg',
  w02: '/img/w02.jpg',
  w03: '/img/w03.jpg',
  w04: '/img/w04.jpg',
  w05: '/img/w05.jpg',
  w06: '/img/w06.jpg',
  w07: '/img/w07.jpg',
  w08: '/img/w08.jpg',
  w09: '/img/w09.jpg',
  w10: '/img/w10.jpg',
  w11: '/img/w11.jpg',
  w12: '/img/w12.jpg',
  w13: '/img/w13.jpg',
  w14: '/img/w14.jpg',
  w15: '/img/w15.jpg',
  w16: '/img/w16.jpg',
  w17: '/img/w17.jpg',
  w18: '/img/w18.jpg',
  why_a1: '/img/why_a1.jpg',
};

export function Slot({
  code,
  label,
  shape,
}: {
  code: string;
  label: string;
  shape?: string;
}) {
  return (
    <div className={`slot ${shape || 'slot-16'}`}>
      <div className="slot-in">
        <div className="slot-c">{code}</div>
        <div className="slot-l">{label}</div>
      </div>
    </div>
  );
}

export function Photo({
  imgKey,
  alt,
  shape,
}: {
  imgKey: string;
  alt: string;
  shape: string;
}) {
  if (!IMG_KEYS[imgKey]) {
    const slotShape =
      shape === 'ph-23' ? 'slot-23' : shape === 'ph-sq' ? 'slot-sq' : 'slot-16';
    return <Slot code={imgKey} label={alt} shape={slotShape} />;
  }
  return (
    <figure className={`ph ${shape}`} style={{ margin: 0 }}>
      <img src={IMG_KEYS[imgKey]} alt={alt} loading="lazy" />
    </figure>
  );
}

export function One8Photo({ shape }: { shape: string }) {
  return (
    <figure className={`ph ${shape}`} style={{ margin: 0 }}>
      <img
        src="/img/one8-midstitch.jpg"
        alt="A sneaker held in front of an embroidery machine at the one8 Global Premiere"
      />
    </figure>
  );
}

export function StatTiles({ night }: { night?: boolean }) {
  const row = [
    ['40,000+', 'Customers served'],
    ['1,20,000+', 'Pieces embroidered'],
    ['3', 'Things the average customer takes home, not one'],
  ];

  return (
    <>
      <div className="sr">
        {row.map((t, idx) => (
          <div key={idx}>
            <div className="v">{t[0]}</div>
            <div className="l">{t[1]}</div>
          </div>
        ))}
      </div>
      <div className="revband">
        <span className="st">&#9733;&#9733;&#9733;&#9733;&#9733;</span>
        <span className="bg">A PERFECT 5.0</span>
        <span className="tx">
          500+ Google reviews, from stores right across India.
        </span>
      </div>
    </>
  );
}

export function HowItWorks() {
  const steps = [
    [
      'Pick the thing',
      'Your shoes, your cap, your jacket. Something you already own, or something off the shelf.',
    ],
    [
      'Tell us what to put on it',
      'A name. A date. A crest. A drawing your kid made. Our designer sits right there and draws it up with you.',
    ],
    [
      'Watch it being made',
      'The machine runs while you stand there. Minutes later you walk away with it.',
    ],
  ];

  return (
    <div className="g g3">
      {steps.map((s, i) => (
        <div className="tech" key={i}>
          <div
            className="tn"
            style={{ color: 'var(--indigo)', fontSize: '34px', lineHeight: 1 }}
          >
            {i + 1}
          </div>
          <div className="tn">{s[0]}</div>
          <div className="tb">{s[1]}</div>
        </div>
      ))}
    </div>
  );
}

export function Engines() {
  const enginesData = [
    {
      swatch: 'e-ind',
      kicker: 'A desk that stays',
      name: 'On your floor',
      problem:
        'Your store is competing with a phone that has everything on it and never closes.',
      solution:
        'We put a desk on your floor with a machine, an operator and a designer on it, and we keep it running every day. It gives a person a reason to come in that nothing online can match.',
      proof: '13 desks running today',
      href: '/services',
    },
    {
      swatch: 'e-mar',
      kicker: 'A desk that travels',
      name: 'At your launch',
      problem:
        'Most launches get seen, photographed once, and forgotten by the following week.',
      solution:
        'We bring the whole desk to your event for a few days and make something for each guest while they watch. They leave holding it, and they film it themselves.',
      proof: '300+ made in one evening',
      href: '/services',
    },
    {
      swatch: 'e-bri',
      kicker: 'No desk at all',
      name: 'Send it to us',
      problem:
        'Sometimes you just need two hundred good things made properly, by a certain date.',
      solution:
        'Send us the product, or we will find it. Tell us what goes on it. We make it here and send it back finished.',
      proof: 'Six ways to mark a thing',
      href: '/services',
    },
  ];

  return (
    <div className="g g3">
      {enginesData.map((e, idx) => (
        <Link key={idx} className="eng" href={e.href}>
          <div className={`eng-t ${e.swatch}`}>
            <div className="n">{e.kicker}</div>
            <div className="h">{e.name}</div>
          </div>
          <div className="eng-b">
            <p style={{ fontWeight: 500, color: 'var(--ink)' }}>{e.problem}</p>
            <p style={{ color: 'var(--soft)' }}>{e.solution}</p>
            <div className="eng-f">
              <b style={{ fontSize: '16px' }}>{e.proof}</b>
            </div>
            <div className="eng-go">See how this works &rarr;</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export interface TechItem {
  name: string;
  hook: string;
  body: string;
  chips: string[];
  time: string;
  isLive: boolean;
  technical: string;
  isHero: boolean;
}

export const TECHS_DATA: TechItem[] = [
  {
    name: 'Embroidery',
    hook: 'The one that feels expensive.',
    body: 'Thread raised off the surface, so your fingers find it before your eyes do. This is the jacket somebody still owns in twenty years, and still tells the story about.',
    chips: ['Shoes', 'Caps', 'Jackets', 'Bags'],
    time: '5 minutes',
    isLive: true,
    technical:
      'A needle and thread worked into the material itself by machine. Nothing is printed and nothing sits on top — the design is built out of the fabric.',
    isHero: true,
  },
  {
    name: 'DTF print',
    hook: 'For designs too wild for thread.',
    body: 'Photographs, gradients, six colours crashing into each other. Anything you can put on a screen goes onto the shirt. This is the one the whole crowd ends up wearing.',
    chips: ['T-shirts', 'Jerseys', 'Hoodies', 'Event tees'],
    time: '3 minutes',
    isLive: false,
    technical:
      'Direct-to-film. Artwork prints onto a carrier film, adhesive is cured onto the wet ink, then the whole thing is fused into the fabric under heat. The printing happens beforehand; the pressing happens in front of you.',
    isHero: false,
  },
  {
    name: 'Digital hot foil',
    hook: 'Gold you can see across a room.',
    body: 'The finish that makes a plain box look like it came from somewhere far more expensive. Put it on the invitation, the luggage tag, the inside of a wallet nobody else will open.',
    chips: ['Leather', 'Luggage tags', 'Notebooks', 'Gift boxes'],
    time: '2 minutes',
    isLive: true,
    technical:
      'Metallic foil bonded to the surface with heat. Because no metal plate has to be cut first, even hairline detail comes out clean.',
    isHero: false,
  },
  {
    name: 'Laser engraving',
    hook: 'The showpiece.',
    body: 'A perfume bottle with her name down the side. A pen. A whisky glass. Nobody expects these things to be personal, which is exactly why they stop the room. It cannot peel or fade — the mark is the object.',
    chips: ['Perfume bottles', 'Pens', 'Glassware', 'Leather'],
    time: '5 minutes',
    isLive: true,
    technical:
      'A laser burns the design into the surface. Nothing is added and nothing sits on top, so there is no layer that can lift, wash off or wear away.',
    isHero: false,
  },
  {
    name: 'UV stickers',
    hook: 'Colour on the hard stuff.',
    body: 'The water bottle at the gym. The helmet. The phone case face-up on the table all through the meeting. Glass, metal, curved, painted — things nothing else will stick to properly.',
    chips: ['Bottles', 'Phone cases', 'Helmets', 'Flasks'],
    time: '1 minute',
    isLive: false,
    technical:
      'The same idea as DTF, built for hard surfaces. The design is UV-printed onto a film and cured on the spot, a second film is laminated over it, then it is pressed onto the object and the film peeled away. <strong>No heat at all</strong> — which is why it will sit on glass, metal and curves a press could never reach.',
    isHero: false,
  },
  {
    name: 'Iron-on patches',
    hook: 'Built for a queue.',
    body: 'When there is a line out the door and every single person still walks away with their own. The fast one, for the days when speed is the whole point.',
    chips: ['Jackets', 'Bags', 'Caps', 'Uniforms'],
    time: '1 minute',
    isLive: false,
    technical:
      'Embroidered separately, then heat-set into place. The patch is cut for one person; only the pressing happens at the desk.',
    isHero: false,
  },
];

export function TechGrid() {
  return (
    <div className="tg">
      {TECHS_DATA.map((t, idx) => (
        <div key={idx} className={`tk rv ${t.isHero ? 'hero' : ''}`}>
          <div className="tk-top">
            <div className="tk-name">{bc(t.name)}</div>
            {t.isLive ? (
              <span className="tk-live on">
                <Dot /> Live
              </span>
            ) : (
              <span className="tk-live off">Applied live</span>
            )}
          </div>
          <div className="tk-hook">{t.hook}</div>
          <p className="tk-desc">{t.body}</p>
          <div className="tk-goes">Goes on</div>
          <div className="chips2">
            {t.chips.map((c, i) => (
              <span key={i} className="chip">
                {c}
              </span>
            ))}
          </div>
          <div className="tk-foot">
            <span className="tk-time">{t.time}</span>
          </div>
          <details className="sci">
            <summary>How it actually works</summary>
            <p dangerouslySetInnerHTML={{ __html: t.technical }} />
          </details>
        </div>
      ))}
    </div>
  );
}

export function ClosingBand({ dare, sub }: { dare: string; sub: string }) {
  return (
    <section className="band band-mar">
      <div className="wrap close-g">
        <div>
          <h2 className="big">{dare}</h2>
          <p style={{ marginTop: '14px', maxWidth: '46ch', fontSize: '17.5px' }}>
            {sub}
          </p>
          <div className="btns" style={{ marginTop: '26px' }}>
            <a
              className="btn btn-live"
              href="https://wa.me/919654382799"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Dot /> WhatsApp us
            </a>
            <Link className="btn btn-p" href="/contact">
              Get a price in 24 hours
            </Link>
            <Link className="btn btn-g" href="/work">
              Just look at the work
            </Link>
          </div>
          <p style={{ marginTop: '14px', fontSize: '14px', opacity: 0.8 }}>
            No meeting needed to get a number. We reply the same day.
          </p>
        </div>
        <div style={{ display: 'grid', gap: '12px' }}>
          <div className="close-c">
            <div className="k">Watch the one8 film</div>
            <div className="v">
              <a
                href="https://youtube.com/shorts/PFZjzmlq5LI"
                target="_blank"
                rel="noopener noreferrer"
              >
                300 pieces, one evening &rarr;
              </a>
            </div>
          </div>
          <div className="close-c">
            <div className="k">Talk to Laksh</div>
            <div className="v">
              +91 96543 82799
              <br />
              laksh@custogusto.in
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyItMatters() {
  const four = [
    ['This is mine.', 'Nobody else has one. Nobody else can get one.'],
    [
      'Nothing like it exists.',
      'Made once, in front of one person, and never again.',
    ],
    [
      'There is a reason it looks like this.',
      'A name, a date, a thing that happened. The object carries it.',
    ],
    [
      'I want to show someone.',
      'And they do. That is the part you cannot buy media for.',
    ],
  ];

  return (
    <section className="sec">
      <div className="wrap">
        <div className="split" style={{ alignItems: 'start' }}>
          <div>
            <p className="eyebrow">Why any of this matters</p>
            <h2 className="big">
              EVERYTHING YOU BUY LOSES VALUE. THIS DOESN&rsquo;T.
            </h2>
            <p className="why-lead" style={{ marginTop: '20px' }}>
              A pair of shoes is worth less the moment it leaves the shop. In a
              year they are worn. In three they are replaced.
            </p>
            <p className="why-lead">
              Put a name in them &mdash; or a number, a date, a crest, the
              drawing a daughter made &mdash; and the arithmetic runs backwards.
              They stop being stock and start being <em>hers</em>. Ten years on
              they are still in the cupboard. Still being explained to whoever
              asks about them.
            </p>
            <div className="pull">
              THAT IS WHAT A DESK ON YOUR FLOOR ACTUALLY SELLS.
              <small>Your story.</small>
            </div>
          </div>
          <div>
            <Photo
              imgKey="why_a1"
              alt="A sneaker with a name embroidered on the side"
              shape="ph-16"
            />
          </div>
        </div>
        <div className="four">
          {four.map((q, idx) => (
            <div className="q" key={idx}>
              <div className="qt">{q[0]}</div>
              <div className="qb">{q[1]}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export const COVERAGE = [
  'All types of shoes',
  'Caps',
  'Tees & denim',
  'Jackets',
  'Bags & totes',
  'Socks',
  'Towels',
  'Belts & straps',
  'Watch straps',
  'Leather goods',
  'Tags & packaging',
  'Stationery',
];

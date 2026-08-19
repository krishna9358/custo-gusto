import React from 'react';
import Link from 'next/link';
import { Dot, bc } from '@/components/Glyphs';
import Ticker from '@/components/Ticker';
import {
  WhyItMatters,
  HowItWorks,
  Engines,
  Photo,
  TechGrid,
  StatTiles,
  One8Photo,
  ClosingBand,
} from '@/components/SharedSections';
import { COVERAGE_CHIPS } from '@/data/engines';


export default function Home() {
  const trustedLogos = [
    'Decathlon',
    'Puma',
    'Sports Yard',
    'Benetton',
    'Mothercare',
    'one8',
    'Comic Con',
  ];

  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="hero-stk">
            <span className="stk">{bc('1/1')}</span>
          </div>
          <div className="hero-g">
            <div>
              <p className="eyebrow">
                <span className="liv">
                  <Dot /> LIVE
                </span>{' '}
                &mdash; at 13 desks across India
              </p>
              <h1 className="big">NOTHING LIKE IT EXISTS.</h1>
              <p className="hero-hi hi">आपका. सिर्फ़ आपका.</p>
              <p className="lead">
                Your name. Your number. A date that mattered. A drawing nobody
                else has.
                <br />
                Stitched, printed or engraved into something you already own,
                while you stand there and watch.
                <br />
                <strong>One of one. Never made again.</strong>
              </p>
              <div className="btns">
                <Link className="btn btn-p" href="/work">
                  See the work
                </Link>
                <a
                  className="btn btn-live"
                  href="https://youtube.com/shorts/PFZjzmlq5LI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Dot /> Watch it live
                </a>
              </div>
            </div>
            <div className="hero-media">
              <img
                src="/img/one8-midstitch.jpg"
                alt="A red one8 sneaker held in front of a ZSK embroidery machine mid-stitch at the one8 Global Premiere."
              />
              <div className="hero-badge">
                <span className="stk stk-b">{bc('MADE LIVE ●')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Ticker />

      <WhyItMatters />

      <section className="sec-sm">
        <div className="wrap">
          <p className="eyebrow">What actually happens</p>
          <h2 className="big">THREE STEPS. ABOUT FIVE MINUTES.</h2>
          <div style={{ marginTop: '28px' }}>
            <HowItWorks />
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <p className="eyebrow">Three ways to work with us</p>
          <h2 className="big">WHERE DO YOU WANT THE MACHINE?</h2>
          <p className="sub" style={{ marginTop: '14px' }}>
            On your shop floor every day, at your launch for a week, or nowhere
            near you at all &mdash; just send us the boxes.
          </p>
          <div style={{ marginTop: '34px' }}>
            <Engines />
          </div>
        </div>
      </section>

      <section className="sec-sm">
        <div className="wrap">
          <div className="split">
            <div>
              <p className="eyebrow">What can we touch?</p>
              <h2 className="big">ALMOST EVERYTHING.</h2>
              <p className="lead" style={{ marginTop: '14px' }}>
                We customise over 90% of what is already on your shelf. Shoes
                lead &mdash; they always lead.
              </p>
              <div className="chips">
                {COVERAGE_CHIPS.map((c, i) => (
                  <span key={i} className={`chip${i === 0 ? ' on' : ''}`}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="g g2">
              <Photo
                imgKey="touch_shoes"
                alt="An embroidered sneaker"
                shape="ph-sq"
              />
              <Photo
                imgKey="touch_caps"
                alt="A cap with a gold emblem"
                shape="ph-sq"
              />
              <Photo
                imgKey="touch_leather"
                alt="An engraved leather wallet"
                shape="ph-sq"
              />
              <Photo
                imgKey="touch_foil"
                alt="Hot foil, close"
                shape="ph-sq"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <p className="eyebrow">
            Six techniques &middot; in-house design always included
          </p>
          <h2 className="big">SIX WAYS TO MARK A THING.</h2>
          <div style={{ marginTop: '30px' }}>
            <TechGrid />
          </div>
          <p className="sub" style={{ marginTop: '20px', fontSize: '15px' }}>
            In-house design is included in every engagement and is never a
            separate line. It is what makes each piece one-of-one instead of a
            template.
          </p>
        </div>
      </section>

      <section className="band band-night">
        <div className="wrap">
          <p className="eyebrow">Three years, thirteen desks, counting</p>
          <h2 className="big">THE NUMBERS BEHIND THE CRAFT</h2>
          <div style={{ marginTop: '32px' }}>
            <StatTiles night={true} />
          </div>
          <p
            style={{
              marginTop: '30px',
              fontSize: '12px',
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              opacity: 0.7,
            }}
          >
            Trusted by
          </p>
          <div className="logos">
            {trustedLogos.map((l, i) => (
              <span key={i} className="logo-pill">
                {l}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="split">
            <div>
              <One8Photo shape="ph-16" />
            </div>
            <div>
              <p className="eyebrow">The biggest night we have had</p>
              <h2 className="big">THE NIGHT THE QUEUE DID NOT MOVE.</h2>
              <p className="lead" style={{ marginTop: '14px' }}>
                Virat Kohli&rsquo;s one8 Global Premiere at Yashobhoomi, with
                District by Zomato. Four machines, eight operators, three
                designers.
              </p>
              <div className="g g3" style={{ marginTop: '22px' }}>
                <div className="tile">
                  <div className="v">300+</div>
                  <div className="l">Pieces in one evening</div>
                </div>
                <div className="tile">
                  <div className="v">4</div>
                  <div className="l">Machines running</div>
                </div>
                <div className="tile">
                  <div className="v">5 hrs</div>
                  <div className="l">Start to finish</div>
                </div>
              </div>
              <div className="btns" style={{ marginTop: '24px' }}>
                <a
                  className="btn btn-live"
                  href="https://youtube.com/shorts/PFZjzmlq5LI"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Dot /> Watch what the world saw
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ClosingBand
        dare="YOURS. ONLY YOURS."
        sub="Put a machine on your floor, in your launch, or on the box you send us. We bring everything else."
      />
    </>
  );
}

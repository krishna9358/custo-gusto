import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Custo Gusto — Made in front of you. Never repeated.',
  description:
    'India’s live customisation brand. One-of-one shoes, apparel, and accessories embroidered, printed, or laser engraved live in minutes at retail desks across India.',
  keywords: [
    'live customisation',
    'live embroidery',
    'custom sneakers',
    'personalized caps',
    'retail activation',
    'one8 global premiere',
    'Noida',
    'Delhi',
    'Bangalore',
  ],
};
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
import { Button } from '@/components/Button';


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
        <div className="wrap relative">
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
                <Button href="/work" variant="primary">
                  See the work
                </Button>
                <Button
                  href="https://youtube.com/shorts/PFZjzmlq5LI"
                  variant="live"
                  target="_blank"
                >
                  Watch it live
                </Button>
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

      <section className="sec">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
              <p className="eyebrow">What can we touch?</p>
              <h2 className="big">ALMOST EVERYTHING.</h2>
              <p className="lead" style={{ marginTop: '14px' }}>
                We customise over 90% of what is already on your shelf. Shoes
                lead &mdash; they always lead.
              </p>
              <div className="chips" style={{ marginTop: '20px' }}>
                {COVERAGE_CHIPS.map((c, i) => {
                  const slug =
                    c.toLowerCase().includes('shoe') ? 'shoes' :
                    c.toLowerCase().includes('cap') ? 'caps' :
                    c.toLowerCase().includes('tee') || c.toLowerCase().includes('jacket') ? 'apparel' :
                    c.toLowerCase().includes('bag') || c.toLowerCase().includes('tote') ? 'bags' :
                    c.toLowerCase().includes('leather') || c.toLowerCase().includes('foil') ? 'leather' :
                    c.toLowerCase().includes('hard') ? 'hard' : 'all';
                  return (
                    <Link
                      key={i}
                      href={`/work?prod=${slug}`}
                      className={`chip transition-transform duration-200 hover:scale-105 ${i === 0 ? 'on' : ''}`}
                    >
                      {c}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <div data-aos="fade-up">
                <Photo
                  imgKey="touch_shoes"
                  alt="An embroidered sneaker"
                  shape="ph-sq"
                />
                <p className="ph-cap">Shoes — lead the desk</p>
              </div>
              <div data-aos="fade-up" data-aos-delay="100">
                <Photo
                  imgKey="touch_caps"
                  alt="A cap with a gold emblem"
                  shape="ph-sq"
                />
                <p className="ph-cap">Caps — gold emblem finish</p>
              </div>
              <div data-aos="fade-up" data-aos-delay="200">
                <Photo
                  imgKey="touch_leather"
                  alt="An engraved leather wallet"
                  shape="ph-sq"
                />
                <p className="ph-cap">Leather — laser precision</p>
              </div>
              <div data-aos="fade-up" data-aos-delay="300">
                <Photo
                  imgKey="touch_foil"
                  alt="Hot foil, close"
                  shape="ph-sq"
                />
                <p className="ph-cap">Digital hot foil detail</p>
              </div>
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

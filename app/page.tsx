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
  HowItWorks,
  Engines,
  Photo,
  TechGrid,
  StatTiles,
  ClosingBand,
} from '@/components/SharedSections';
import { TRUSTED_LOGOS } from '@/data/clients';
import { Button } from '@/components/Button';
import { TouchCarousel } from '@/components/TouchCarousel';
import { ScaleCasesSection } from '@/components/ScaleCasesSection';


export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap relative">
          <div className="hero-stk" data-aos="fade-down">
            <span className="stk">{bc('1/1')}</span>
          </div>
          <div className="hero-g">
            <div>
              <p className="eyebrow" data-aos="fade-up">
                <span className="liv">
                  <Dot /> LIVE
                </span>{' '}
                &mdash; at 13 desks across India
              </p>
              <h1 className="big" data-aos="fade-up" data-aos-delay="100">NOTHING LIKE IT EXISTS.</h1>
              <p className="hero-hi hi" data-aos="fade-up" data-aos-delay="150">आपका. सिर्फ़ आपका.</p>
              <p className="lead" data-aos="fade-up" data-aos-delay="200">
                Your name. Your number. A date that mattered. A drawing nobody
                else has.
                <br />
                Stitched, printed or engraved into something you already own,
                while you stand there and watch.
                <br />
                <strong>One of one. Never made again.</strong>
              </p>
              <div className="btns" data-aos="fade-up" data-aos-delay="250">
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
            <div className="hero-media" data-aos="fade-left" data-aos-delay="150">
              <img
                src="/img/hero-live.jpg"
                alt="Custo Gusto live customisation counter with embroidery and customization machines"
              />
              <div className="hero-badge">
                <span className="stk stk-b">{bc('MADE LIVE ●')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Ticker />

      <section className="sec-sm">
        <div className="wrap">
          <p className="eyebrow" data-aos="fade-up">What actually happens</p>
          <h2 className="big" data-aos="fade-up" data-aos-delay="100">THREE STEPS. ABOUT FIVE MINUTES.</h2>
          <div style={{ marginTop: '28px' }}>
            <HowItWorks />
          </div>
        </div>
      </section>

      <section className="sec sec-machine">
        <div className="wrap">
          <p className="eyebrow" data-aos="fade-up">Three ways to work with us</p>
          <h2 className="big" data-aos="fade-up" data-aos-delay="100">WHERE DO YOU WANT THE MACHINE?</h2>
          <p className="sub" style={{ marginTop: '12px' }} data-aos="fade-up" data-aos-delay="150">
            On your shop floor every day, at your launch for a week, or nowhere
            near you at all &mdash; just send us the boxes.
          </p>
          <div style={{ marginTop: '24px' }}>
            <Engines />
          </div>
        </div>
      </section>

      <section className="sec sec-touch">
        <div className="wrap">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            <div className="lg:col-span-5 touch-left" data-aos="fade-up">
              <p className="eyebrow">What can we touch?</p>
              <h2 className="big">ALMOST EVERYTHING.</h2>
              <p className="lead" style={{ marginTop: '14px' }}>
                We customise over 90% of what is already on your shelf. Shoes
                lead &mdash; they always lead.
              </p>
              <div className="btns" style={{ marginTop: '24px' }} data-aos="fade-up" data-aos-delay="100">
                <Button href="/work" variant="primary">
                  View All
                </Button>
              </div>
            </div>

            {/* Mobile Carousel */}
            <div className="block lg:hidden w-full" data-aos="fade-up">
              <TouchCarousel />
            </div>

            {/* Desktop Photo Stack */}
            <div className="hidden lg:grid lg:col-span-7 touch-photos">
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
              <div data-aos="fade-up">
                <Photo
                  imgKey="w06"
                  alt="Embroidery, close enough to count the threads"
                  shape="ph-sq"
                />
                <p className="ph-cap">Tees &amp; jackets — thread density up close</p>
              </div>
              <div data-aos="fade-up" data-aos-delay="100">
                <Photo
                  imgKey="w12"
                  alt="A name engraved into steel"
                  shape="ph-sq"
                />
                <p className="ph-cap">Hard goods — engraved into steel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <TechGrid
            eyebrow="Six techniques &middot; in-house design always included"
            subtitle="In-house design is included in every engagement and is never a separate line. It is what makes each piece one-of-one instead of a template."
          />
        </div>
      </section>

      <section className="band band-night">
        <div className="wrap">
          <p className="eyebrow" data-aos="fade-up">Three years, thirteen desks, counting</p>
          <h2 className="big" data-aos="fade-up" data-aos-delay="100">THE NUMBERS BEHIND THE CRAFT</h2>
          <div style={{ marginTop: '32px' }}>
            <StatTiles night={true} />
          </div>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
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
          <div className="logos" data-aos="fade-up" data-aos-delay="250">
            {TRUSTED_LOGOS.map((l, i) => (
              <span key={i} className="logo-pill">
                {l}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <ScaleCasesSection />
        </div>
      </section>

      <ClosingBand
        dare="YOURS. ONLY YOURS."
        sub="Put a machine on your floor, in your launch, or on the box you send us. We bring everything else."
      />
    </>
  );
}


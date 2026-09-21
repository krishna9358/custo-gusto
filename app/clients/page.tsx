import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Clients & Case Studies — Decathlon, Puma, one8 & More | Custo Gusto',
  description:
    'Trusted by Decathlon, Puma, Mothercare, Benetton, Comic Con, and Virat Kohli’s one8 Global Premiere. 13 desks running live across India.',
  keywords: [
    'one8 global premiere',
    'Decathlon customisation',
    'Puma live desk',
    'Comic Con activation',
    'brand launch experiences',
    'live embroidery India',
  ],
};
import { Tilde } from '@/components/Glyphs';
import {
  StatTiles,
  ClosingBand,
} from '@/components/SharedSections';
import { Button } from '@/components/Button';
import { Sticker } from '@/components/Sticker';
import { ClientsCarousel } from '@/components/ClientsCarousel';
import { TRUSTED_LOGOS, TICKETS_DATA } from '@/data/clients';

export default function ClientsPage() {
  return (
    <>
      <section
        className="band band-night"
        style={{ paddingTop: 'calc(var(--pad)*.8)' }}
      >
        <div className="wrap">
          <p className="eyebrow" data-aos="fade-up">Clients</p>
          <h1
            className="big"
            data-aos="fade-up"
            data-aos-delay="100"
            style={{
              color: 'var(--marigold)',
              fontSize: 'clamp(34px, 5.6vw, 64px)',
            }}
          >
            SIX BRANDS. THIRTEEN DESKS. THREE YEARS.
          </h1>
          <p
            className="lead"
            data-aos="fade-up"
            data-aos-delay="150"
            style={{
              marginTop: '16px',
              color: 'var(--on-night)',
              opacity: 0.9,
            }}
          >
            Live customisation running inside real stores, at real footfall,
            since June 2023.
          </p>
          <div style={{ marginTop: '36px' }}>
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
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            style={{
              marginTop: '24px',
              fontSize: '14.5px',
              opacity: 0.75,
              maxWidth: '60ch',
            }}
          >
            Four more footwear and lifestyle brands are in conversation.
          </p>
        </div>
      </section>

      <section className="sec" style={{ paddingBottom: 'calc(var(--pad) * 0.25)' }}>
        <div className="wrap">
          <ClientsCarousel />
        </div>
      </section>

      <section className="sec" style={{ paddingTop: 'calc(var(--pad) * 0.25)' }}>
        <div className="wrap rwrap">
          <div className="rm-stk" data-aos="fade-down">
            <Sticker isHindi style={{ fontSize: '13px' }}>
              आपका. सिर्फ़ आपका.
            </Sticker>
          </div>
          <p className="eyebrow" data-aos="fade-up">Beyond retail</p>
          <h2 className="big" data-aos="fade-up" data-aos-delay="100">THE SAME DESK, DIFFERENT ROOMS.</h2>
          <p className="sub" style={{ marginTop: '12px', maxWidth: '52ch' }} data-aos="fade-up" data-aos-delay="150">
            A festival floor, a hotel lobby, a wedding. Same machines, same
            people, entirely different night.
          </p>
          <div className="tks">
            {TICKETS_DATA.map((r, i) => (
              <div className="tk2" key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="tk2-t">{r.title}</div>
                <div className="tk2-d">{r.desc}</div>
                <span className="tk2-f">{r.tag}</span>
              </div>
            ))}
          </div>
          <div className="rm-cta" style={{ marginTop: '30px' }} data-aos="fade-up" data-aos-delay="200">
            <Button href="/contact" variant="primary">
              Tell us about your event
            </Button>
            <Button href="/work" variant="ghost">
              See the work
            </Button>
          </div>
        </div>
      </section>

      <ClosingBand
        dare="DOES IT WORK ON A FLOOR LIKE YOURS?"
        sub="Give it fifteen minutes and you will see it mapped to your own stores, your own launch calendar, or the batch you need by Friday."
      />
    </>
  );
}

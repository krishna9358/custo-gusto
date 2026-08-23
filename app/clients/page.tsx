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
  One8Photo,
  ClosingBand,
} from '@/components/SharedSections';
import { Button } from '@/components/Button';
import { Sticker } from '@/components/Sticker';
import { TRUSTED_LOGOS, TICKETS_DATA, CASES_DATA } from '@/data/clients';

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

      <section className="sec">
        <div className="wrap">
          <div className="split">
            <div data-aos="fade-up">
              <p className="eyebrow">The biggest night we have had</p>
              <h2 className="big">one8 Global Premiere</h2>
              <p className="lead" style={{ marginTop: '14px' }}>
                Virat Kohli&rsquo;s brand launch at Yashobhoomi, produced with
                District by Zomato. The product launch, at the highest level
                India runs one.
              </p>
              <p className="sub" style={{ marginTop: '12px' }}>
                Four machines, eight operators, three designers. 300+
                one-of-one pieces in a single evening, roughly five hours. The
                queue never emptied &mdash; that was the point.
              </p>
              <div className="g g3" style={{ marginTop: '20px' }}>
                <div className="tile" data-aos="fade-up" data-aos-delay="100">
                  <div className="v">300+</div>
                  <div className="l">Pieces, one evening</div>
                </div>
                <div className="tile" data-aos="fade-up" data-aos-delay="150">
                  <div className="v">
                    <Tilde />5 hrs
                  </div>
                  <div className="l">Start to finish</div>
                </div>
                <div className="tile" data-aos="fade-up" data-aos-delay="200">
                  <div className="v">15</div>
                  <div className="l">Pieces per machine, per hour</div>
                </div>
              </div>
              <div className="btns" style={{ marginTop: '22px' }} data-aos="fade-up" data-aos-delay="250">
                <Button
                  href="https://youtube.com/shorts/PFZjzmlq5LI"
                  variant="live"
                  target="_blank"
                >
                  Watch the film
                </Button>
              </div>
            </div>
            <div data-aos="fade-left" data-aos-delay="150">
              <One8Photo shape="ph-23" />
            </div>
          </div>
        </div>
      </section>

      <section className="sec-sm">
        <div className="wrap">
          <div className="case-mq" data-aos="fade-up">
            <div className="case-track">
              {CASES_DATA.concat(CASES_DATA).map((c, i) => (
                <div
                  className="case"
                  key={`${c.title}-${i}`}
                  aria-hidden={i >= CASES_DATA.length ? true : undefined}
                >
                  <div className="ct">{c.title}</div>
                  <div className="cm">{c.meta}</div>
                  <p>{c.body}</p>
                  {c.noteLabel && (
                    <p style={{ marginTop: '10px' }}>
                      <strong>{c.noteLabel}</strong> {c.noteText}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
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

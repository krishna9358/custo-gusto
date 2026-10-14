import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Engagement Models & Pricing | Custo Gusto',
  description:
    'Three business shapes: fixed monthly rental, pay-per-use for events, and job work orders. Transparent pricing and nationwide rollout.',
  keywords: [
    'retail desk rental',
    'event activation pricing',
    'customisation ROI',
    'retail footfall activation',
    'job work pricing',
  ],
};
import { ClosingBand } from '@/components/SharedSections';
import { AccordionGroup } from '@/components/Accordion';
import { CommercialCards } from '@/components/CommercialCards';
import { Button } from '@/components/Button';
import { COMMERCIAL_FAQS } from '@/data/faq';
import { DIALS_DATA } from '@/data/clients';
import { InclusionsMarquee } from '@/components/InclusionsMarquee';

export default function CommercialsPage() {
  return (
    <>
      <section className="sec comm-hero">
        <div className="wrap">
          <p className="eyebrow" data-aos="fade-up">Commercials</p>
          <h1
            className="big"
            data-aos="fade-up"
            data-aos-delay="100"
            style={{
              fontSize: 'clamp(34px, 5.6vw, 64px)',
            }}
          >
            THREE WAYS TO WORK WITH US.
          </h1>
          <p
            className="lead"
            data-aos="fade-up"
            data-aos-delay="150"
            style={{
              marginTop: '18px',
            }}
          >
            Pick the shape that fits your floor. We bring everything else.
          </p>
        </div>
      </section>

      <section className="sec-sm">
        <div className="wrap">
          <CommercialCards />
        </div>
      </section>

      <section className="sec-sm">
        <InclusionsMarquee />
      </section>

      <section className="sec sec-dials">
        <div className="wrap">
          <p className="eyebrow" data-aos="fade-up">Before you ask</p>
          <h2 className="big" data-aos="fade-up" data-aos-delay="100">WHAT MOVES THE NUMBER.</h2>
          <p className="lead" style={{ marginTop: '14px', maxWidth: '56ch' }} data-aos="fade-up" data-aos-delay="150">
            Four things, and you control all of them. Push any one up and the
            price follows. We are not the cheapest and will not pretend to be
            &mdash; but nothing here is a mystery.
          </p>
          <div className="dl">
            {DIALS_DATA.map((d, idx) => (
              <div className="dl-c" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <div className="dl-t">{d.title}</div>
                <div className="dl-bar">
                  <i style={{ width: `${d.pct}%` }}></i>
                </div>
                <div className="dl-ends">
                  <span>{d.min}</span>
                  {d.mid && <span>{d.mid}</span>}
                  <span>{d.max}</span>
                </div>
                <div className="dl-d">{d.desc}</div>
              </div>
            ))}
          </div>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            style={{
              marginTop: '26px',
              fontWeight: 600,
              fontSize: '17px',
            }}
          >
            Tell us where you sit on all four. A real number comes back within
            24 hours, no meeting first.
          </p>
          <div className="btns" style={{ marginTop: '16px' }} data-aos="fade-up" data-aos-delay="250">
            <Button href="/contact" variant="primary">
              Get a price in 24 hours
            </Button>
          </div>
        </div>
      </section>

      <section className="sec sec-faq-tight">
        <div className="wrap">
          <p className="eyebrow" data-aos="fade-up">The questions buyers actually ask</p>
          <h2 className="big" data-aos="fade-up" data-aos-delay="100">ANSWERED BEFORE THE CALL.</h2>
          <div style={{ marginTop: '26px', maxWidth: '820px' }}>
            <AccordionGroup items={COMMERCIAL_FAQS} />
          </div>
        </div>
      </section>

      <ClosingBand
        dare="WHAT SHAPE FITS YOUR FLOOR?"
        sub="Tell us the stores, the calendar or the order, and we will put real numbers against it."
      />
    </>
  );
}

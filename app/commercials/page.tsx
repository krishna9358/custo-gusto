import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Engagement Models & Pricing | Custo Gusto',
  description:
    'Four business shapes: fixed monthly rental, ownership plus services, pay-per-use for events, and subscription. Transparent pricing and nationwide rollout.',
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
import ModelSequence from '@/components/ModelSequence';
import { Button } from '@/components/Button';
import { COMMERCIAL_FAQS } from '@/data/faq';
import { DIALS_DATA } from '@/data/clients';

const INCLUSIONS = [
  {
    title: 'Expert operator',
    desc: 'Trained on our system, so every city runs the same.',
  },
  {
    title: 'Live designer',
    desc: 'In-house design at the desk. Never a separate line.',
  },
  {
    title: 'All raw materials',
    desc: 'Threads, films, foils, backing. Nothing to source.',
  },
  {
    title: '365-day maintenance',
    desc: 'You will not lose a trading day to a machine.',
  },
];

export default function CommercialsPage() {
  return (
    <>
      <section className="sec-models">
        <ModelSequence />
      </section>

      <section className="sec-sm">
        <div className="wrap">
          <h2 className="big" data-aos="fade-up">SIDE BY SIDE.</h2>
          <div className="tw" data-aos="fade-up" data-aos-delay="100">
            <table>
              <thead>
                <tr>
                  <th>Model</th>
                  <th>What is included</th>
                  <th>Commitment</th>
                  <th>Best for</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Rental</strong>
                  </td>
                  <td>
                    Machines, operator, designer, materials, 365-day maintenance
                  </td>
                  <td>6 months+</td>
                  <td>Permanent retail desk</td>
                </tr>
                <tr>
                  <td>
                    <strong>Ownership + services</strong>
                  </td>
                  <td>Operation, maintenance, materials, design back-end</td>
                  <td>Long term</td>
                  <td>Multi-store rollout</td>
                </tr>
                <tr>
                  <td>
                    <strong>Pay per use</strong>
                  </td>
                  <td>Everything, for the window you book</td>
                  <td>3&ndash;14 days</td>
                  <td>Launches, drops, festivals</td>
                </tr>
                <tr>
                  <td>
                    <strong>Subscription</strong>
                  </td>
                  <td>Ongoing access plus design back-end</td>
                  <td>Rolling</td>
                  <td>Seasonal programmes</td>
                </tr>
                <tr>
                  <td>
                    <strong>Job work</strong>
                  </td>
                  <td>Machines and hands; you send product or we source it</td>
                  <td>Per order</td>
                  <td>Gifting, weddings, team kit</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="band band-blush">
        <div className="wrap">
          <h2 className="big" data-aos="fade-up">INCLUDED IN EVERY MODEL.</h2>
        </div>
        <div className="incl-marquee" style={{ marginTop: '28px' }} data-aos="fade-up" data-aos-delay="100">
          <div className="incl-track">
            {[0, 1, 2, 3].map((group) => (
              <div
                className="incl-group"
                key={group}
                aria-hidden={group > 0 ? true : undefined}
              >
                {INCLUSIONS.map((item, idx) => (
                  <div key={idx} className="incl-card">
                    <h3 className="mid">{item.title}</h3>
                    <p style={{ fontSize: '15px', marginTop: '6px' }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
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

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
import { Accordion } from '@/components/Accordion';
import ModelSequence from '@/components/ModelSequence';
import { Button } from '@/components/Button';
import { COMMERCIAL_FAQS } from '@/data/faq';
import { DIALS_DATA } from '@/data/clients';

export default function CommercialsPage() {
  return (
    <>

      <section className="sec-models">
        <ModelSequence />
      </section>

      <section className="sec-sm">
        <div className="wrap">
          <h2 className="big">SIDE BY SIDE.</h2>
          <div className="tw">
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
          <h2 className="big">INCLUDED IN EVERY MODEL.</h2>
          <div className="incl-flow" style={{ marginTop: '26px' }}>
            <div className="g g4">
              <div>
                <h3 className="mid">Expert operator</h3>
                <p style={{ fontSize: '15px', marginTop: '6px' }}>
                  Trained on our system, so every city runs the same.
                </p>
              </div>
              <div>
                <h3 className="mid">Live designer</h3>
                <p style={{ fontSize: '15px', marginTop: '6px' }}>
                  In-house design at the desk. Never a separate line.
                </p>
              </div>
              <div>
                <h3 className="mid">All raw materials</h3>
                <p style={{ fontSize: '15px', marginTop: '6px' }}>
                  Threads, films, foils, backing. Nothing to source.
                </p>
              </div>
              <div>
                <h3 className="mid">365-day maintenance</h3>
                <p style={{ fontSize: '15px', marginTop: '6px' }}>
                  You will not lose a trading day to a machine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-dials">
        <div className="wrap">
          <p className="eyebrow">Before you ask</p>
          <h2 className="big">WHAT MOVES THE NUMBER.</h2>
          <p className="lead" style={{ marginTop: '14px', maxWidth: '56ch' }}>
            Four things, and you control all of them. Push any one up and the
            price follows. We are not the cheapest and will not pretend to be
            &mdash; but nothing here is a mystery.
          </p>
          <div className="dl">
            {DIALS_DATA.map((d, idx) => (
              <div className="dl-c" key={idx}>
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
            style={{
              marginTop: '26px',
              fontWeight: 600,
              fontSize: '17px',
            }}
          >
            Tell us where you sit on all four. A real number comes back within
            24 hours, no meeting first.
          </p>
          <div className="btns" style={{ marginTop: '16px' }}>
            <Button href="/contact" variant="primary">
              Get a price in 24 hours
            </Button>
          </div>
        </div>
      </section>

      <section className="sec sec-faq-tight">
        <div className="wrap">
          <p className="eyebrow">The questions buyers actually ask</p>
          <h2 className="big">ANSWERED BEFORE THE CALL.</h2>
          <div style={{ marginTop: '26px', maxWidth: '820px' }}>
            {COMMERCIAL_FAQS.map((f, i) => (
              <Accordion key={i} question={f.q} answer={f.a} />
            ))}
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

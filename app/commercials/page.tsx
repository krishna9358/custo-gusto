import React from 'react';
import Link from 'next/link';
import { ClosingBand } from '@/components/SharedSections';

export default function CommercialsPage() {
  const dials = [
    {
      title: 'Days',
      pct: 82,
      min: '3 days',
      max: '6 months',
      desc: 'The biggest single factor, by a distance.',
    },
    {
      title: 'Machines',
      pct: 55,
      min: 'One',
      max: 'Four+',
      desc: 'About fifteen pieces an hour each. Your queue decides.',
    },
    {
      title: 'Techniques',
      pct: 40,
      min: 'Transfers',
      max: 'Embroidery',
      desc: 'Thread and foil take longer than pressing.',
    },
    {
      title: 'Cities',
      pct: 28,
      min: 'One',
      max: 'Nationwide',
      desc: 'Travel, stated plainly rather than buried.',
    },
  ];

  const faqs = [
    {
      q: 'What is the ROI? What is the revenue share?',
      a: 'Do not think of us as a shop inside your shop. Think of us the way you think about how your store looks and feels: it brings people in, keeps them there longer, and gives them something to tell people about. The commercial proof does exist: the average customer at our desks takes home three pieces, not one, and every one of our 500+ Google reviews is five stars. But that is the consequence of the experience, not the pitch.',
    },
    {
      q: 'Can you handle our footfall? All of our stores?',
      a: 'A ready design takes about four minutes, and one drawn on the spot takes about ten. That is roughly fifteen pieces an hour from each machine. At the one8 premiere, four machines and eight operators produced 300+ pieces in one evening. For very busy days we add more heat-press stations. And the operator-training system means a desk in Delhi runs exactly like one in Bangalore — we serve stores nationwide.',
    },
    {
      q: 'Why not just buy a machine, or hire a vendor?',
      a: 'A machine in a corner is not the thing. The thing is thirty years of skill, a trained operator, a designer sitting right there, all the materials, the servicing — and a performance that stops people mid-step. Levi’s spent ten years building that inside their own company. We arrive with all of it already built, in about two days.',
    },
    {
      q: 'Is this not just customisation? Or printing?',
      a: 'No. Printing means a warehouse somewhere makes a thousand identical things and posts them to you. We make one thing, for one person, standing in front of them — and they almost always film it.',
    },
    {
      q: 'How quickly can you start?',
      a: 'About two days, from crews already standing by in Bangalore and Delhi. We can run two events at the same time, one in each city, and desks anywhere in the country.',
    },
  ];

  return (
    <>
      <section className="sec">
        <div className="wrap">
          <p className="eyebrow">Commercials</p>
          <h1 className="big" style={{ fontSize: 'clamp(34px, 5.6vw, 64px)' }}>
            FOUR WAYS TO WORK WITH US.
          </h1>
          <p className="lead" style={{ marginTop: '16px' }}>
            Pick the shape that fits your floor. We bring everything else.
          </p>
        </div>
      </section>

      <section className="sec-sm">
        <div className="wrap">
          <div className="g g2">
            <div className="case">
              <div className="ct">Rental</div>
              <div className="cm">End-to-end &middot; fixed monthly</div>
              <p>
                The hassle-free one. Machines, expert operator, raw materials
                and maintenance for a fixed monthly price. Nothing to buy,
                nothing to learn.
              </p>
              <p
                style={{
                  marginTop: '10px',
                  fontSize: '14px',
                  color: 'var(--soft)',
                }}
              >
                <strong>Best for</strong> a permanent desk on your shop floor.
              </p>
            </div>
            <div className="case">
              <div className="ct">Ownership + services</div>
              <div className="cm">Long-term investment</div>
              <p>
                You own the machines; we run them. Operation, maintenance and
                raw materials handled, with the cost efficiency that comes from
                owning the hardware.
              </p>
              <p
                style={{
                  marginTop: '10px',
                  fontSize: '14px',
                  color: 'var(--soft)',
                }}
              >
                <strong>Best for</strong> multi-store rollouts with a long horizon.
              </p>
            </div>
            <div className="case">
              <div className="ct">Pay per use</div>
              <div className="cm">Flexibility, no commitment</div>
              <p>
                Pay only for what you use. No long-term commitment, no capital
                outlay &mdash; the right shape for launches and short windows.
              </p>
              <p
                style={{
                  marginTop: '10px',
                  fontSize: '14px',
                  color: 'var(--soft)',
                }}
              >
                <strong>Best for</strong> launches and festivals.
              </p>
            </div>
            <div className="case">
              <div className="ct">Subscription</div>
              <div className="cm">Continuous support</div>
              <p>
                Uninterrupted access to the desk and the design back-end, with the
                service kept current as the calendar changes.
              </p>
              <p
                style={{
                  marginTop: '10px',
                  fontSize: '14px',
                  color: 'var(--soft)',
                }}
              >
                <strong>Best for</strong> seasonal programmes across a year.
              </p>
            </div>
          </div>
        </div>
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
                  <td>
                    Machines and hands; you send product or we source it
                  </td>
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
          <div className="g g4" style={{ marginTop: '26px' }}>
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
      </section>

      <section className="sec">
        <div className="wrap">
          <p className="eyebrow">Before you ask</p>
          <h2 className="big">WHAT MOVES THE NUMBER.</h2>
          <p className="lead" style={{ marginTop: '14px', maxWidth: '56ch' }}>
            Four things, and you control all of them. Push any one up and the
            price follows. We are not the cheapest and will not pretend to be
            &mdash; but nothing here is a mystery.
          </p>
          <div className="dl">
            {dials.map((d, idx) => (
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
            <Link className="btn btn-p" href="/contact">
              Get a price in 24 hours
            </Link>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <p className="eyebrow">The questions buyers actually ask</p>
          <h2 className="big">ANSWERED BEFORE THE CALL.</h2>
          <div style={{ marginTop: '26px', maxWidth: '820px' }}>
            {faqs.map((f, i) => (
              <details key={i} className="acc">
                <summary>{f.q}</summary>
                <div className="body">{f.a}</div>
              </details>
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

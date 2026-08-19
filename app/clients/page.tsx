import React from 'react';
import { Dot, Tilde } from '@/components/Glyphs';
import {
  StatTiles,
  One8Photo,
  ClosingBand,
} from '@/components/SharedSections';
import { Button } from '@/components/Button';
import { Sticker } from '@/components/Sticker';
import { TRUSTED_LOGOS, TICKETS_DATA } from '@/data/clients';

export default function ClientsPage() {
  return (
    <>
      <section
        className="band band-night"
        style={{ paddingTop: 'calc(var(--pad)*.8)' }}
      >
        <div className="wrap">
          <p className="eyebrow">Clients</p>
          <h1
            className="big"
            style={{
              color: 'var(--marigold)',
              fontSize: 'clamp(34px, 5.6vw, 64px)',
            }}
          >
            SIX BRANDS. THIRTEEN DESKS. THREE YEARS.
          </h1>
          <p
            className="lead"
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
            {TRUSTED_LOGOS.map((l, i) => (
              <span key={i} className="logo-pill">
                {l}
              </span>
            ))}
          </div>
          <p
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
            <div>
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
                <div className="tile">
                  <div className="v">300+</div>
                  <div className="l">Pieces, one evening</div>
                </div>
                <div className="tile">
                  <div className="v">
                    <Tilde />5 hrs
                  </div>
                  <div className="l">Start to finish</div>
                </div>
                <div className="tile">
                  <div className="v">15</div>
                  <div className="l">Pieces per machine, per hour</div>
                </div>
              </div>
              <div className="btns" style={{ marginTop: '22px' }}>
                <Button
                  href="https://youtube.com/shorts/PFZjzmlq5LI"
                  variant="live"
                  target="_blank"
                >
                  <Dot /> Watch the film
                </Button>
              </div>
            </div>
            <div>
              <One8Photo shape="ph-23" />
            </div>
          </div>
        </div>
      </section>

      <section className="sec-sm">
        <div className="wrap">
          <div className="g g2">
            <div className="case">
              <div className="ct">Decathlon</div>
              <div className="cm">Embedded desks &middot; pan-India</div>
              <p>
                The proof that a desk works on an ordinary floor, on an
                ordinary day. Live embroidery desks running inside stores
                across the country, with customers returning to customise again.
              </p>
              <p style={{ marginTop: '10px' }}>
                <strong>The behaviour that matters:</strong> the average
                customer at our desks does not take home one piece. They take
                home three.
              </p>
            </div>
            <div className="case">
              <div className="ct">Mothercare</div>
              <div className="cm">Embedded desk &middot; Bandra</div>
              <p>
                Names on babywear, blankets and towels. The memory marker
                &mdash; a gift that gets kept rather than used, and the reason
                the desk earns its floor space in a category where nothing else
                is personal.
              </p>
            </div>
            <div className="case">
              <div className="ct">Puma</div>
              <div className="cm">Retail desks &middot; five stores</div>
              <p>
                One of the first floors that let this run at all. Five stores,
                real conditions, real customers. The model you are looking at
                today only exists because someone was willing to give it a
                floor to be tested on.
              </p>
            </div>
            <div className="case">
              <div className="ct">Sports Yard &amp; Benetton</div>
              <div className="cm">Retail &middot; ongoing</div>
              <p>
                Live personalisation as a permanent part of the in-store
                experience &mdash; the layer an online store cannot ship,
                sitting on the floor where the decision is already being made.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap rwrap">
          <div className="rm-stk">
            <Sticker isHindi style={{ fontSize: '13px' }}>
              आपका. सिर्फ़ आपका.
            </Sticker>
          </div>
          <p className="eyebrow">Beyond retail</p>
          <h2 className="big">THE SAME DESK, DIFFERENT ROOMS.</h2>
          <p className="sub" style={{ marginTop: '12px', maxWidth: '52ch' }}>
            A festival floor, a hotel lobby, a wedding. Same machines, same
            people, entirely different night.
          </p>
          <div className="tks">
            {TICKETS_DATA.map((r, i) => (
              <div className="tk2" key={i}>
                <div className="tk2-t">{r.title}</div>
                <div className="tk2-d">{r.desc}</div>
                <span className="tk2-f">{r.tag}</span>
              </div>
            ))}
          </div>
          <div className="rm-cta" style={{ marginTop: '30px' }}>
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

import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'What We Do — Live Customisation Engines | Custo Gusto',
  description:
    'Three ways to put live customisation on your floor: permanent retail desks, traveling desks for product launches and drops, and job work orders.',
  keywords: [
    'retail customisation desk',
    'event customisation',
    'live DTF printing',
    'laser engraving service',
    'hot foil stamping',
    'job work India',
  ],
};
import {
  Engines,
  Photo,
  TechGrid,
  ClosingBand,
} from '@/components/SharedSections';
import { COVERAGE_CHIPS } from '@/data/engines';

export default function ServicesPage() {
  return (
    <>
      <section className="sec">
        <div className="wrap">
          <p className="eyebrow">What we do</p>
          <h1 className="big" style={{ fontSize: 'clamp(34px, 5.6vw, 64px)' }}>
            WE BRING THE MACHINE TO THE MOMENT.
          </h1>
          <p className="lead" style={{ marginTop: '18px' }}>
            Three ways to put a machine in front of your customer. Machines,
            operators, designers, materials and operations are ours. You provide
            space and product.
          </p>
        </div>
      </section>

      <section className="sec-sm">
        <div className="wrap">
          <Engines />
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="stk stk-i">A DESK THAT STAYS</span>
              <h2 className="big" style={{ marginTop: '18px' }}>
                On your floor.
              </h2>
              <p className="lead" style={{ marginTop: '14px' }}>
                A permanent desk on your retail floor, six months and up. The
                slow one to agree, and the one that keeps paying you back.
              </p>
              <p className="sub" style={{ marginTop: '14px' }}>
                What arrives: an expert operator, a live designer, the machines,
                all raw materials, the full design back-end, and 365-day
                maintenance. You will not lose a trading day.
              </p>
              <p className="sub">
                A structured operator-training system means a desk in Delhi runs
                exactly like one in Bangalore. That is the honest answer to
                &ldquo;can you do all our stores?&rdquo; &mdash; yes, identically,
                nationwide.
              </p>
              <div className="btns" style={{ marginTop: '22px' }}>
                <Link className="btn btn-g" href="/commercials">
                  See the models
                </Link>
              </div>
            </div>
            <div>
              <Photo
                imgKey="svc_e1"
                alt="A heat press closing onto a garment"
                shape="ph-16"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="band band-mar">
        <div className="wrap">
          <div className="split">
            <div>
              <Photo
                imgKey="svc_c1"
                alt="An embroidery machine stitching a bag"
                shape="ph-16"
              />
            </div>
            <div>
              <span className="stk stk-b">A DESK THAT TRAVELS</span>
              <h2
                className="big"
                style={{ marginTop: '18px', color: 'var(--indigo)' }}
              >
                At your launch.
              </h2>
              <p className="lead" style={{ marginTop: '14px', color: 'var(--onmar)' }}>
                Launches, drops, festivals and showroom openings. Compact
                windows of three days to a fortnight, moving city to city across
                your calendar.
              </p>
              <p style={{ marginTop: '14px', color: 'var(--onmar)', opacity: 0.9 }}>
                We can be set up in about two days. Crews sit ready in Bangalore
                and Delhi, so we can run two cities at once, and we add no work
                at all to your team &mdash; which is what the producers of the
                one8 premiere will tell you.
              </p>
              <div className="btns" style={{ marginTop: '22px' }}>
                <Link className="btn btn-p" href="/clients">
                  Read the one8 story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="split">
            <div>
              <span className="stk">NO DESK AT ALL</span>
              <h2 className="big" style={{ marginTop: '18px' }}>
                Send it to us.
              </h2>
              <p className="lead" style={{ marginTop: '14px' }}>
                The same hands and the same machines, pointed at your order.
                Corporate gifting, wedding memorabilia, team kit, small-batch
                runs.
              </p>
              <p className="sub" style={{ marginTop: '14px' }}>
                Send us your product, or we source it. Artwork in, finished
                pieces back. No desk, no floor space, no event.
              </p>
              <p className="sub">
                This is the one thing we do that is not a performance &mdash;
                and we would rather say so than pretend. What you get is access
                to the craft, not the moment.
              </p>
              <div className="btns" style={{ marginTop: '22px' }}>
                <Link className="btn btn-g" href="/contact">
                  Send us a brief
                </Link>
              </div>
            </div>
            <div>
              <Photo
                imgKey="svc_a10"
                alt="Finished pieces in wood, metal, leather and acrylic"
                shape="ph-16"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <p className="eyebrow">The techniques</p>
          <h2 className="big">SIX WAYS TO MARK A THING.</h2>
          <div style={{ marginTop: '30px' }}>
            <TechGrid />
          </div>
        </div>
      </section>

      <section className="sec-sm">
        <div className="wrap">
          <p className="eyebrow">Product coverage</p>
          <h2 className="big">90% OF WHAT IS ON YOUR SHELF.</h2>
          <div className="chips" style={{ marginTop: '20px' }}>
            {COVERAGE_CHIPS.map((c, i) => (
              <span key={i} className={`chip${i === 0 ? ' on' : ''}`}>
                {c}
              </span>
            ))}
          </div>
          <p className="sub" style={{ marginTop: '20px' }}>
            Everything at a live desk is made for one person, in front of that
            person. No bulk printing, no generic giveaways, and no generic
            patches &mdash; if a patch is not personalised, it is not ours.
          </p>
        </div>
      </section>

      <ClosingBand
        dare="WHERE DO YOU WANT THE MACHINE?"
        sub="Tell us the floor, the launch, or the order. We will tell you what walks out of it."
      />
    </>
  );
}

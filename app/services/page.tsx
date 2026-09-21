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
  SameDeskDifferentRooms,
  TechGrid,
  ClosingBand,
} from '@/components/SharedSections';
import { COVERAGE_CHIPS, coverageSlug } from '@/data/engines';

export default function ServicesPage() {
  return (
    <>
      <section className="sec svc-hero">
        <div className="wrap">
          <p className="eyebrow" data-aos="fade-up">What we do</p>
          <h1 className="big" data-aos="fade-up" data-aos-delay="100" style={{ fontSize: 'clamp(34px, 5.6vw, 64px)' }}>
            WE BRING THE MACHINE TO THE MOMENT.
          </h1>
          <p className="lead" data-aos="fade-up" data-aos-delay="150" style={{ marginTop: '18px' }}>
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

      <SameDeskDifferentRooms />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <TechGrid eyebrow="The techniques" />
        </div>
      </section>

      <section className="sec-sm">
        <div className="wrap">
          <p className="eyebrow" data-aos="fade-up">Product coverage</p>
          <h2 className="big" data-aos="fade-up" data-aos-delay="100">90% OF WHAT IS ON YOUR SHELF.</h2>
          <div className="chips" style={{ marginTop: '20px' }} data-aos="fade-up" data-aos-delay="150">
            {COVERAGE_CHIPS.map((c, i) => (
              <Link
                key={i}
                href={`/work?prod=${coverageSlug(c)}`}
                className="chip"
              >
                {c}
              </Link>
            ))}
          </div>
          <p className="sub" style={{ marginTop: '20px' }} data-aos="fade-up" data-aos-delay="200">
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

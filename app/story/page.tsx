import React from 'react';
import type { Metadata } from 'next';
import { ClosingBand } from '@/components/SharedSections';
import { LemonLogo } from '@/components/Glyphs';

export const metadata: Metadata = {
  title: 'Our Story — 30 Years of Craft, German Machines, Indian Hands | Custo Gusto',
  description:
    'Started during COVID by a father and daughter with 30 years of embroidery craft. German ZSK machines and master operators turning products into personal stories.',
  keywords: [
    'Custo Gusto story',
    'German ZSK embroidery',
    'Laksh Custo Gusto',
    'live craft retail',
    'personalized fashion India',
  ],
};

export default function StoryPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="story-hero band band-night">
        <div className="wrap">
          <div className="story-hero-grid">
            <div data-aos="fade-up">
              <p className="eyebrow" style={{ color: 'var(--peri)' }}>
                Our story
              </p>
              <h1 className="story-hero-title">
                A FATHER, A DAUGHTER, AND A MACHINE NOBODY WAS USING.
              </h1>
              <p
                className="lead"
                data-aos="fade-up"
                data-aos-delay="100"
                style={{
                  marginTop: '22px',
                  color: 'var(--on-night)',
                  opacity: 0.9,
                }}
              >
                Thirty years of embroidery craft behind a five-year-old brand.
                Live customisation running inside real stores across India.
              </p>
            </div>
            <div data-aos="fade-left" data-aos-delay="150">
              <figure className="story-hero-media">
                <img
                  src="/img/story_e5.jpg"
                  alt="A father, a daughter, and a machine at Custo Gusto"
                  loading="eager"
                  decoding="async"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Father + Daughter / Origin Story (Text Left | Image Right) */}
      <section className="story-sec">
        <div className="wrap">
          <div className="story-grid">
            <div data-aos="fade-up">
              <p className="eyebrow">Origin</p>
              <h2 className="big">HOW IT STARTED</h2>
              <p className="lead" style={{ marginTop: '16px' }}>
                Custo Gusto{' '}
                <LemonLogo
                  style={{ height: '1.05em', verticalAlign: '-0.12em' }}
                />{' '}
                started during COVID, when retail had stopped and an embroidery
                business with thirty years behind it had machines standing still.
                A father and daughter took one of them onto a shop floor and asked
                a simple question: what if the customer watched it happen?
              </p>
              <p className="sub" style={{ marginTop: '16px' }}>
                Five years later there are thirteen desks running across the
                country and a team of twenty-five. The question has not changed.
              </p>
            </div>
            <div data-aos="fade-left" data-aos-delay="150">
              <figure className="story-media">
                <img
                  src="/img/why_a1.jpg"
                  alt="Sneaker held in front of embroidery machine"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 30 Years of Craft (Image Left | Text Right) */}
      <section className="story-sec">
        <div className="wrap">
          <div className="story-grid story-rev">
            <div data-aos="fade-up">
              <p className="eyebrow">Thirty years</p>
              <h2 className="big">
                30 YEARS OF CRAFT BEHIND A 5-YEAR-OLD BRAND.
              </h2>
              <p className="lead" style={{ marginTop: '16px' }}>
                Not a thirty-year-old company &mdash; that distinction matters.
              </p>
              <p className="sub" style={{ marginTop: '16px' }}>
                The company is young. The hands are not.
              </p>
            </div>
            <div data-aos="fade-right" data-aos-delay="150">
              <figure className="story-media">
                <img
                  src="/img/01-shoe-cursive-10-embroidered.jpg"
                  alt="Thirty years of embroidery craft detail"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Major Story Statement (Full-Width Visual Statement) */}
      <section className="band band-night story-statement">
        <div className="wrap">
          <div className="story-statement-inner" data-aos="fade-up">
            <p
              className="eyebrow justify-center"
              style={{ color: 'var(--peri)' }}
            >
              The philosophy
            </p>
            <h2 className="story-statement-quote">
              THIS WAS NEVER REALLY ABOUT EMBROIDERY.
            </h2>
            <p className="story-statement-sub">
              It is about the moment a product stops being a product and starts
              belonging to one person.
            </p>
          </div>
        </div>
      </section>

      {/* 5. The Machines (Image Left | Text Right) */}
      <section className="story-sec">
        <div className="wrap">
          <div className="story-grid story-rev">
            <div data-aos="fade-up">
              <p className="eyebrow">The machines</p>
              <h2 className="big">GERMAN MACHINES, INDIAN HANDS</h2>
              <p className="lead" style={{ marginTop: '16px' }}>
                These are German ZSK machines, and that matters for exactly one
                reason: they are accurate enough to stitch a name into a finished
                shoe <em>without ruining the shoe</em> &mdash; in four minutes,
                while its owner stands and watches. It is a genuinely hard thing
                to do. It is also why a desk belongs on a good floor when a
                folding table does not.
              </p>
              <p className="sub" style={{ marginTop: '16px' }}>
                A machine in a corner is not the product. The product is craft,
                a trained operator, a live designer, materials, maintenance, and
                a performance that stops the floor.
              </p>
            </div>
            <div data-aos="fade-right" data-aos-delay="150">
              <figure className="story-media">
                <img
                  src="/img/story_c2.jpg"
                  alt="German ZSK embroidery machine running live"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Where We Are Going (Text Left | Image Right) */}
      <section className="story-sec">
        <div className="wrap">
          <div className="story-grid">
            <div data-aos="fade-up">
              <p className="eyebrow">What happens next</p>
              <h2 className="big">WHERE WE ARE GOING</h2>
              <p className="lead" style={{ marginTop: '16px' }}>
                Wherever your stores are, we can reach them. Crews sit ready in
                Bangalore and Delhi and can be set up in about two days, and
                where our office happens to be has never decided where a desk
                can go.
              </p>
              <p className="sub" style={{ marginTop: '16px' }}>
                Every operator is trained on the same system, so a desk in your
                Delhi store behaves exactly like the one in Bangalore. If you
                have ever rolled anything out across this country, you already
                know that is the hard part.
              </p>
            </div>
            <div data-aos="fade-left" data-aos-delay="150">
              <figure className="story-media">
                <img
                  src="/img/story_e2.jpg"
                  alt="Finished custom garments ready for nationwide rollout"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <ClosingBand
        dare="COME AND WATCH ONE RUN."
        sub="The fastest way to understand this is to stand next to the machine while it works."
      />
    </>
  );
}

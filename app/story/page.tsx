import React from 'react';
import type { Metadata } from 'next';

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
import { Photo, ClosingBand } from '@/components/SharedSections';

export default function StoryPage() {
  return (
    <>
      <section className="sec">
        <div className="wrap">
          <p className="eyebrow">Our story</p>
          <h1
            className="big"
            style={{
              fontSize: 'clamp(32px, 5.2vw, 60px)',
              maxWidth: '18ch',
            }}
          >
            A FATHER, A DAUGHTER, AND A MACHINE NOBODY WAS USING.
          </h1>
        </div>
      </section>

      <section className="sec-sm">
        <div className="wrap split">
          <div className="prose">
            <p>
              Custo Gusto started during COVID, when retail had stopped and an
              embroidery business with thirty years behind it had machines
              standing still. A father and daughter took one of them onto a
              shop floor and asked a simple question: what if the customer
              watched it happen?
            </p>
            <p>
              Five years later there are thirteen desks running across the
              country and a team of twenty-five. The question has not changed.
            </p>
            <p>
              <strong>Thirty years of craft behind a five-year-old brand.</strong>{' '}
              Not a thirty-year-old company &mdash; that distinction matters.
              The company is young. The hands are not.
            </p>
          </div>
          <div>
            <Photo
              imgKey="story_e5"
              alt="A patch being heat-set onto a jacket"
              shape="ph-16"
            />
          </div>
        </div>
      </section>

      <section className="sec-sm">
        <div className="wrap">
          <div className="pull">
            This was never really about embroidery. It is about the moment a
            product stops being a product and starts belonging to one person.
          </div>
        </div>
      </section>

      <section className="band band-night">
        <div className="wrap split">
          <div className="prose">
            <h2
              className="big"
              style={{
                color: 'var(--marigold)',
                fontSize: 'clamp(25px, 3.4vw, 38px)',
              }}
            >
              German machines, Indian hands
            </h2>
            <p style={{ marginTop: '14px', color: 'var(--on-night)', opacity: 0.92 }}>
              These are German ZSK machines, and that matters for exactly one
              reason: they are accurate enough to stitch a name into a finished
              shoe <em>without ruining the shoe</em> &mdash; in four minutes,
              while its owner stands and watches. It is a genuinely hard thing to
              do. It is also why a desk belongs on a good floor when a folding
              table does not.
            </p>
            <p style={{ color: 'var(--on-night)', opacity: 0.92 }}>
              A machine in a corner is not the product. The product is craft, a
              trained operator, a live designer, materials, maintenance, and a
              performance that stops the floor.
            </p>
          </div>
          <div>
            <Photo
              imgKey="story_c2"
              alt="A transfer being applied to a hard surface"
              shape="ph-16"
            />
          </div>
        </div>
      </section>

      <section className="sec-sm">
        <div className="wrap">
          <div className="split">
            <div className="prose">
              <h2
                className="big"
                style={{ fontSize: 'clamp(25px, 3.4vw, 38px)' }}
              >
                Where we are going
              </h2>
              <p style={{ marginTop: '14px' }}>
                Wherever your stores are, we can reach them. Crews sit ready in
                Bangalore and Delhi and can be set up in about two days, and
                where our office happens to be has never decided where a desk can
                go.
              </p>
              <p>
                Every operator is trained on the same system, so a desk in your
                Delhi store behaves exactly like the one in Bangalore. If you
                have ever rolled anything out across this country, you already
                know that is the hard part.
              </p>
            </div>
            <div>
              <Photo
                imgKey="story_e2"
                alt="Monogrammed tees, finished"
                shape="ph-16"
              />
            </div>
          </div>
        </div>
      </section>

      <ClosingBand
        dare="COME AND WATCH ONE RUN."
        sub="The fastest way to understand this is to stand next to the machine while it works."
      />
    </>
  );
}

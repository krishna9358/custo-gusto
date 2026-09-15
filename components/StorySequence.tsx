'use client';

import React from 'react';
import { LemonLogo } from './Glyphs';

/* one entry per story: the background stays put while the copy is revealed
   line by line as the reader scrolls */
const STORIES = [
  {
    img: '/img/story_e5.jpg',
    eyebrow: 'Our story',
    lines: 3,
  },
  {
    img: '/img/story_c2.jpg',
    eyebrow: 'The machines',
    lines: 2,
  },
  {
    img: '/img/story_e2.jpg',
    eyebrow: 'What happens next',
    lines: 2,
  },
];

/* flat list of scroll steps: [storyIndex, revealLevel] */
const STEPS: [number, number][] = STORIES.flatMap((s, i) =>
  Array.from({ length: s.lines }, (_, r) => [i, r] as [number, number])
);

export default function StorySequence() {
  const [step, setStep] = React.useState(0);
  const rootRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const marks = Array.from(root.querySelectorAll<HTMLElement>('[data-step]'));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setStep(Number(e.target.getAttribute('data-step')));
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );
    marks.forEach((m) => io.observe(m));
    return () => io.disconnect();
  }, []);

  const [story, reveal] = STEPS[step] || [0, 0];
  /* a reveal is in the layout only once the reader has scrolled to it */
  const on = (s: number, r: number) => (story === s && reveal >= r ? ' on' : '');

  return (
    <section className="story-seq" ref={rootRef}>
      <div className="story-stage">
        {STORIES.map((s, i) => (
          <div
            key={s.img}
            className={`story-bg${story === i ? ' on' : ''}`}
            style={{ backgroundImage: `url(${s.img})` }}
            aria-hidden="true"
          />
        ))}

        <div className="story-copy wrap">
          {/* story one */}
          <div className={`story-block${story === 0 ? ' on' : ''}`}>
            <p>
              <span className="eyebrow story-eyebrow">Our story</span>
            </p>
            <h1 className="big">
              A FATHER, A DAUGHTER, AND A MACHINE NOBODY WAS USING.
            </h1>
            <div className={`story-reveal story-prose${on(0, 1)}`}>
              <p>
                Custo Gusto{' '}
                <LemonLogo style={{ height: '1.05em', verticalAlign: '-0.12em' }} />{' '}
                started during COVID, when retail had stopped and an
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
                <strong>
                  Thirty years of craft behind a five-year-old brand.
                </strong>{' '}
                Not a thirty-year-old company &mdash; that distinction matters.
                The company is young. The hands are not.
              </p>
            </div>
            <div className={`pull story-reveal${on(0, 2)}`}>
              This was never really about embroidery. It is about the moment a
              product stops being a product and starts belonging to one person.
            </div>
          </div>

          {/* story two */}
          <div className={`story-block${story === 1 ? ' on' : ''}`}>
            <p>
              <span className="eyebrow story-eyebrow">The machines</span>
            </p>
            <h2 className="big">German machines, Indian hands</h2>
            <div className={`story-reveal story-prose${on(1, 1)}`}>
              <p>
                These are German ZSK machines, and that matters for exactly one
                reason: they are accurate enough to stitch a name into a
                finished shoe <em>without ruining the shoe</em> &mdash; in four
                minutes, while its owner stands and watches. It is a genuinely
                hard thing to do. It is also why a desk belongs on a good floor
                when a folding table does not.
              </p>
              <p>
                A machine in a corner is not the product. The product is craft,
                a trained operator, a live designer, materials, maintenance, and
                a performance that stops the floor.
              </p>
            </div>
          </div>

          {/* story three */}
          <div className={`story-block${story === 2 ? ' on' : ''}`}>
            <p>
              <span className="eyebrow story-eyebrow">What happens next</span>
            </p>
            <h2 className="big">Where we are going</h2>
            <div className={`story-reveal story-prose${on(2, 1)}`}>
              <p>
                Wherever your stores are, we can reach them. Crews sit ready in
                Bangalore and Delhi and can be set up in about two days, and
                where our office happens to be has never decided where a desk
                can go.
              </p>
              <p>
                Every operator is trained on the same system, so a desk in your
                Delhi store behaves exactly like the one in Bangalore. If you
                have ever rolled anything out across this country, you already
                know that is the hard part.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* scroll track: one mark per reveal step */}
      <div className="story-track" aria-hidden="true">
        {STEPS.map((_, i) => (
          <div className="story-mark" data-step={i} key={i} />
        ))}
        <div className="story-tail" />
      </div>
    </section>
  );
}

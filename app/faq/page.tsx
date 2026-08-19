import React from 'react';
import { ClosingBand } from '@/components/SharedSections';
import { Accordion } from '@/components/Accordion';
import { GENERAL_FAQS } from '@/data/faq';

export default function FaqPage() {
  return (
    <>
      <section className="sec">
        <div className="wrap">
          <p className="eyebrow">Questions</p>
          <h1 className="big" style={{ fontSize: 'clamp(34px, 5.6vw, 60px)' }}>
            EVERYTHING PEOPLE ASK.
          </h1>
          <div style={{ marginTop: '32px', maxWidth: '820px' }}>
            {GENERAL_FAQS.map((q, idx) => (
              <Accordion key={idx} question={q.q} answer={q.a} />
            ))}
          </div>
        </div>
      </section>

      <ClosingBand
        dare="STILL WONDERING?"
        sub="Message us. We answer quickly, and we will tell you if we are not the right fit."
      />
    </>
  );
}

import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Custo Gusto',
  description:
    'Everything you need to know about our live customisation desks: techniques, speed, volume capacity, machine specs, nationwide coverage, and logistics.',
  keywords: [
    'Custo Gusto FAQ',
    'live embroidery speed',
    'customisation product coverage',
    'ZSK machine accuracy',
    'retail desk setup time',
  ],
};
import { ClosingBand } from '@/components/SharedSections';
import { AccordionGroup } from '@/components/Accordion';
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
            <AccordionGroup items={GENERAL_FAQS} />
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

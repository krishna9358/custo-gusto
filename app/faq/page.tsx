import React from 'react';
import { ClosingBand } from '@/components/SharedSections';

export default function FaqPage() {
  const qs = [
    [
      'What services do you offer at the customisation desk?',
      'Six: live embroidery on ZSK machines, DTF print and heat-press, digital hot foil, laser engraving, UV stickers, and personalised iron-on patches. In-house design is included in all of them and is never charged separately.',
    ],
    [
      'Are your services available for events?',
      'Yes — it is one of our three engines. We run compact windows of three days to a fortnight for launches, drops, festivals and showroom openings, with set up in about two days.',
    ],
    [
      'What products and materials can you customise?',
      'Around 90% of a typical store’s inventory: all types of shoes, caps, clothing, bags, socks, totes, watch straps, belts, towels, leather goods, and stationery, tags and packaging. Laser and UV extend that to wood, metal, acrylic and hard goods.',
    ],
    [
      'What types of machines do you use?',
      'German ZSK embroidery machines — the same precision equipment used in luxury production — plus heat-press, digital hot foil, laser and UV. We use international-quality threads and professional framing.',
    ],
    [
      'What is the pricing structure?',
      'There are four engagement models: rental, ownership plus services, pay-per-use, and subscription. Job work is priced per order. Which one fits depends on your floor and your calendar, so we would rather agree a shape first and then put real numbers against it.',
    ],
    [
      'Do you offer long-term and short-term models?',
      'Both. Permanent embedded desks run six months and up. Launch and event windows run three days to a fortnight. Job work is per order with no commitment at all.',
    ],
    [
      'What do you provide with the desk?',
      'An expert operator, a live designer, the machines, all raw materials, the full design back-end and 365-day maintenance. You provide space and product; everything else is ours.',
    ],
    [
      'Can you handle high-volume orders?',
      'Yes, with the right technique. Embroidery is about fifteen pieces per machine per hour on a ready design. For genuinely high volume we add multi-station heat-press. We will always tell you what a configuration can actually deliver rather than over-promise.',
    ],
    [
      'Do you provide design assistance?',
      'Always, and it is never a separate charge. A live designer sits at the desk. It is what makes each piece one-of-one instead of a template.',
    ],
    [
      'Can the machines be moved to another location?',
      'Yes. That is exactly what the travelling desk is for — machines move city to city across a client’s calendar, with standing crews in Bangalore and Delhi.',
    ],
    [
      'How do I get started?',
      'Send us a brief, or message us on WhatsApp. If it helps, we will set up a live desk for an afternoon so your team can watch it work before anyone signs anything.',
    ],
    [
      'Where are you based, and where do you operate?',
      'The office is in Noida, with standing crews in Bangalore and Delhi. We serve client stores nationwide — where we sit does not limit where the desk goes.',
    ],
  ];

  return (
    <>
      <section className="sec">
        <div className="wrap">
          <p className="eyebrow">Questions</p>
          <h1 className="big" style={{ fontSize: 'clamp(34px, 5.6vw, 60px)' }}>
            EVERYTHING PEOPLE ASK.
          </h1>
          <div style={{ marginTop: '32px', maxWidth: '820px' }}>
            {qs.map((q, idx) => (
              <details key={idx} className="acc">
                <summary>{q[0]}</summary>
                <div className="body">{q[1]}</div>
              </details>
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

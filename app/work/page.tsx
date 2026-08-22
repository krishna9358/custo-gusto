import React, { Suspense } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Work — One-of-One Personalised Pieces | Custo Gusto',
  description:
    'Explore real one-of-one embroidered shoes, DTF tees, foiled leather, laser-engraved steel, and custom patches made live at Custo Gusto desks.',
  keywords: [
    'embroidered sneakers',
    'custom leather wallets',
    'engraved pens',
    'UV sticker bottles',
    'custom patches',
    'Custo Gusto portfolio',
  ],
};
import WorkGrid from '@/components/WorkGrid';
import { ClosingBand } from '@/components/SharedSections';
import { Button } from '@/components/Button';

export default function WorkPage() {
  return (
    <>
      <section className="sec-sm">
        <div className="wrap">
          <p className="eyebrow">The work</p>
          <h1 className="big" style={{ fontSize: 'clamp(34px, 5.6vw, 64px)' }}>
            EVERY ONE OF THESE EXISTS ONCE.
          </h1>
          <p className="lead" style={{ marginTop: '16px' }}>
            Made live, at a desk, for one person. Filter by technique or by
            product.
          </p>

          <Suspense fallback={<div className="py-12 text-center text-soft">Loading gallery...</div>}>
            <WorkGrid />
          </Suspense>

          <p className="sub" style={{ marginTop: '26px', fontSize: '14.5px' }}>
            Each block carries its shot code from the production list.
            Photography is being shot now; the layout is final.
          </p>
        </div>
      </section>

      <section className="band band-blush">
        <div className="wrap" style={{ textAlign: 'center' }}>
          <h2 className="big">SEEN SOMETHING YOU WANT ON YOUR FLOOR?</h2>
          <p
            style={{
              marginTop: '14px',
              maxWidth: '52ch',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Every piece here was made at a desk that can be on your retail
            floor, at your launch, or working on the product you send us.
          </p>
          <div
            className="btns"
            style={{ marginTop: '26px', justifyContent: 'center' }}
          >
            <Button href="/services" variant="primary">
              The three engines
            </Button>
            <Button href="/contact" variant="ghost">
              Send us a brief
            </Button>
          </div>
        </div>
      </section>

      <ClosingBand
        dare="MADE ONCE. NEVER AGAIN."
        sub="Every piece on this page belongs to one person and exists nowhere else."
      />
    </>
  );
}

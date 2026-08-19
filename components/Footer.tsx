import React from 'react';
import Link from 'next/link';
import { FOOTER_PAGES } from '@/data/navigation';

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr-g">
          <div>
            <div className="d" style={{ fontSize: '26px' }}>
              CUSTO GUSTO
            </div>
            <p
              style={{
                marginTop: '10px',
                opacity: 0.85,
                fontSize: '15px',
                maxWidth: '34ch',
              }}
            >
              India&rsquo;s live customisation brand. One-of-one pieces, made
              in front of the customer, in minutes.
            </p>
            <p
              className="hi"
              style={{
                color: 'var(--marigold)',
                fontSize: '19px',
                marginTop: '14px',
              }}
            >
              आपका. सिर्फ़ आपका.
            </p>
          </div>
          <div>
            <h4>Pages</h4>
            {FOOTER_PAGES.map((page) => (
              <Link key={page.href} href={page.href}>
                {page.label}
              </Link>
            ))}
          </div>
          <div>
            <h4>Talk to us</h4>
            <Link href="/contact">+91 96543 82799</Link>
            <Link href="/contact">laksh@custogusto.in</Link>
            <Link href="/contact">Noida &middot; Bangalore &middot; Delhi</Link>
            <Link
              href="/contact"
              style={{ marginTop: '10px', color: 'var(--bagh)', fontWeight: 600 }}
            >
              WhatsApp us
            </Link>
          </div>
        </div>
        <div className="ftr-b">
          <span>&copy; 2026 Custo Gusto. All rights reserved.</span>
          <span>Made in front of you. Never repeated.</span>
        </div>
      </div>
    </footer>
  );
}

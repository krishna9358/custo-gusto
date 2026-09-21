'use client';

import React from 'react';
import Link from 'next/link';

interface CommercialCardItem {
  swatch: string;
  eyebrow: string;
  title: string;
  body: string;
  supporting: string;
  bestFor: string;
  commitment: string;
  cta: string;
  href: string;
}

const COMMERCIAL_CARDS_DATA: CommercialCardItem[] = [
  {
    swatch: 'e-ind',
    eyebrow: 'A desk that stays',
    title: 'Rental',
    body: 'The hassle-free one. Machines, expert operator, raw materials and maintenance for a fixed monthly price. Nothing to buy, nothing to learn.',
    supporting:
      'What arrives: an expert operator, a live designer, the machines, all raw materials, the full design back-end, and 365-day maintenance. You will not lose a trading day.',
    bestFor: 'Permanent retail desk & multi-store rollout',
    commitment: '6 months+',
    cta: 'Get a quote',
    href: '/contact',
  },
  {
    swatch: 'e-mar',
    eyebrow: 'A desk that travels',
    title: 'Pay per use',
    body: 'Pay only for what you use. No long-term commitment, no capital outlay — the right shape for launches, drops, festivals and short windows.',
    supporting:
      'We bring the whole desk to your event for a few days and make something for each guest while they watch. They leave holding it, and they film it themselves.',
    bestFor: 'Launches, drops, festivals & seasonal programmes',
    commitment: '3–14 days',
    cta: 'Book for event',
    href: '/contact',
  },
  {
    swatch: 'e-bri',
    eyebrow: 'No desk at all',
    title: 'Job work',
    body: 'The same hands and the same machines, pointed at your order. Send us your product, or we source it. Artwork in, finished pieces back. No desk, no floor space, no event.',
    supporting:
      'Corporate gifting, wedding memorabilia, team kit, small-batch runs. Access to the craft without needing floor space or hosting an event.',
    bestFor: 'Gifting, weddings, team kit & batch runs',
    commitment: 'Per order',
    cta: 'Send a brief',
    href: '/contact',
  },
];

export function CommercialCards() {
  return (
    <div className="g g3">
      {COMMERCIAL_CARDS_DATA.map((card, idx) => (
        <div
          key={card.title}
          className="eng group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-sh-lg"
          data-aos="fade-up"
          data-aos-delay={idx * 120}
        >
          <div className={`eng-t ${card.swatch}`}>
            <div className="n">{card.eyebrow}</div>
            <div className="h">{card.title}</div>
          </div>
          <div className="eng-b">
            <p style={{ fontWeight: 500, color: 'var(--ink)' }}>{card.body}</p>
            <p style={{ color: 'var(--soft)' }}>{card.supporting}</p>
            <div
              className="eng-f"
              style={{
                marginTop: 'auto',
                paddingTop: '14px',
                borderTop: '1px solid var(--rule-2)',
              }}
            >
              <div>
                <span
                  style={{
                    fontSize: '12px',
                    letterSpacing: '.08em',
                    textTransform: 'uppercase',
                    color: 'var(--soft)',
                    fontWeight: 600,
                    display: 'block',
                    marginBottom: '2px',
                  }}
                >
                  Best for
                </span>
                <b style={{ fontSize: '15px' }}>{card.bestFor}</b>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <span
                  style={{
                    fontSize: '12px',
                    letterSpacing: '.08em',
                    textTransform: 'uppercase',
                    color: 'var(--soft)',
                    fontWeight: 600,
                    display: 'block',
                    marginBottom: '2px',
                  }}
                >
                  Commitment
                </span>
                <span style={{ fontWeight: 600, color: 'var(--ink)' }}>
                  {card.commitment}
                </span>
              </div>
            </div>
            <Link
              href={card.href}
              className="eng-go group-hover:translate-x-1 transition-transform duration-200"
              style={{ marginTop: '6px' }}
            >
              {card.cta} &rarr;
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

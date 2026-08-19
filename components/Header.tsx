'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dot } from './Glyphs';
import { NAV_ITEMS } from '@/data/navigation';
import { Button } from './Button';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

  return (
    <header className="hdr">
      <div className="wrap hdr-in">
        <Link href="/" className="logo transition-transform duration-200 hover:scale-[1.02]">
          CUSTO GUSTO
        </Link>
        <button
          className="burger"
          id="burger"
          aria-label="Menu"
          aria-expanded={navOpen ? 'true' : 'false'}
          onClick={() => setNavOpen(!navOpen)}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
          >
            <path d="M3 7h20M3 13h20M3 19h20" />
          </svg>
        </button>
        <nav className={`nav ${navOpen ? 'open' : ''}`} id="nav">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative transition-all duration-200 hover:opacity-100 ${
                  isActive ? 'on' : ''
                }`}
                onClick={() => setNavOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className={`hdr-cta ${navOpen ? 'open' : ''}`} id="hcta">
          <Button
            href="https://wa.me/919654382799"
            variant="live"
            target="_blank"
            onClick={() => setNavOpen(false)}
          >
            WhatsApp
          </Button>
          <Button
            href="/contact"
            variant="blush"
            onClick={() => setNavOpen(false)}
          >
            Book a desk
          </Button>
        </div>
      </div>
    </header>
  );
}

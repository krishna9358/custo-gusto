'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dot } from './Glyphs';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setNavOpen(false);
  }, [pathname]);

  const navItems = [
    { href: '/work', label: 'The Work' },
    { href: '/services', label: 'What We Do' },
    { href: '/clients', label: 'Clients' },
    { href: '/story', label: 'Story' },
    { href: '/commercials', label: 'Commercials' },
  ];

  return (
    <header className="hdr">
      <div className="wrap hdr-in">
        <Link href="/" className="logo">
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
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? 'on' : ''}
              onClick={() => setNavOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className={`hdr-cta ${navOpen ? 'open' : ''}`} id="hcta">
          <Link
            className="btn btn-live"
            href="/contact"
            onClick={() => setNavOpen(false)}
          >
            <Dot style={{ width: '.5em', height: '.5em', margin: 0 }} /> WhatsApp
          </Link>
          <Link
            className="btn btn-blush"
            href="/contact"
            onClick={() => setNavOpen(false)}
          >
            Book a desk
          </Link>
        </div>
      </div>
    </header>
  );
}

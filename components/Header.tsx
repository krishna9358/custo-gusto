'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
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
          aria-label="Toggle Navigation Menu"
          aria-expanded={navOpen ? 'true' : 'false'}
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? <X className="w-7 h-7 text-blush" /> : <Menu className="w-7 h-7 text-blush" />}
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
            href="/contact#book"
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

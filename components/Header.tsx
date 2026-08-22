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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [navOpen]);

  return (
    <header className="hdr">
      <div className="wrap hdr-in">
        <Link
          href="/"
          className="logo transition-transform duration-200 hover:scale-[1.02]"
          onClick={() => setNavOpen(false)}
        >
          CUSTO GUSTO
        </Link>

        {/* Hamburger toggle button */}
        <button
          className="burger"
          id="burger"
          aria-label="Toggle Navigation Menu"
          aria-expanded={navOpen ? 'true' : 'false'}
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? <X className="w-7 h-7 text-blush" /> : <Menu className="w-7 h-7 text-blush" />}
        </button>

        {/* Desktop navigation */}
        <nav className="nav desktop-nav" id="nav">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative transition-all duration-200 hover:opacity-100 ${
                  isActive ? 'on' : ''
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hdr-cta desktop-cta" id="hcta">
          <Button
            href="https://wa.me/919654382799"
            variant="live"
            target="_blank"
          >
            WhatsApp
          </Button>
          <Button href="/contact#book" variant="blush">
            Book a desk
          </Button>
        </div>
      </div>

      {/* Full-screen Mobile Navigation Overlay */}
      <div className={`mob-menu ${navOpen ? 'open' : ''}`} aria-hidden={!navOpen}>
        <div className="mob-menu-bg" aria-hidden="true" />
        <div className="mob-menu-in">
          <nav className="mob-nav">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`mob-nav-link ${isActive ? 'on' : ''}`}
                  onClick={() => setNavOpen(false)}
                >
                  <span className="mob-nav-text">{item.label}</span>
                  <span className="mob-zigzag" aria-hidden="true">
                    <svg viewBox="0 0 120 12" preserveAspectRatio="none" className="zigzag-svg">
                      <path
                        d="M0 9 L6 3 L12 9 L18 3 L24 9 L30 3 L36 9 L42 3 L48 9 L54 3 L60 9 L66 3 L72 9 L78 3 L84 9 L90 3 L96 9 L102 3 L108 9 L114 3 L120 9"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Link>
              );
            })}
          </nav>
          <div className="mob-cta">
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
          <div className="mob-foot">
            <p className="hi" style={{ color: 'var(--marigold)', fontSize: '18px', margin: 0 }}>
              आपका. सिर्फ़ आपका.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

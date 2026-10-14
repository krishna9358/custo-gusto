import React from 'react';
import { WhatsAppIcon } from './Glyphs';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/918130868884"
      target="_blank"
      rel="noopener noreferrer"
      className="wa-fab"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="wa-fab-icon" />
    </a>
  );
}

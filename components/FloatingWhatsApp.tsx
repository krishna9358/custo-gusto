import React from 'react';
import { WhatsAppIcon } from './Glyphs';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919654382799"
      target="_blank"
      rel="noopener noreferrer"
      className="wa-fab"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="wa-fab-icon" />
    </a>
  );
}

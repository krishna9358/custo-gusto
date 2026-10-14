import React from 'react';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AosProvider from '@/components/AosProvider';
import LoadingScreen from '@/components/LoadingScreen';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata = {
  title: 'Custo Gusto — Made in front of you. Never repeated.',
  description:
    'Custo Gusto puts your name, number or design onto things you already own — stitched, printed or engraved in front of you, in minutes. Live customisation desks for retail floors, launches and job work across India.',
};

/**
 * Root Layout for Custo Gusto Website
 * All page routes are Server Components by default.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <LoadingScreen />
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <AosProvider />
      </body>
    </html>
  );
}


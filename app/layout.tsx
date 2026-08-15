import React from 'react';

export const metadata = {
  title: 'Custo Gusto — Made in front of you. Never repeated.',
  description: 'Custo Gusto puts your name, number or design onto things you already own — stitched, printed or engraved in front of you, in minutes.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

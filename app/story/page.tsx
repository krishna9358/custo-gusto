import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Story — 30 Years of Craft, German Machines, Indian Hands | Custo Gusto',
  description:
    'Started during COVID by a father and daughter with 30 years of embroidery craft. German ZSK machines and master operators turning products into personal stories.',
  keywords: [
    'Custo Gusto story',
    'German ZSK embroidery',
    'Laksh Custo Gusto',
    'live craft retail',
    'personalized fashion India',
  ],
};
import { ClosingBand } from '@/components/SharedSections';
import StorySequence from '@/components/StorySequence';

export default function StoryPage() {
  return (
    <>
      <StorySequence />
      <ClosingBand
        dare="COME AND WATCH ONE RUN."
        sub="The fastest way to understand this is to stand next to the machine while it works."
      />
    </>
  );
}

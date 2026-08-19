'use client';

import React from 'react';
import { Photo } from './SharedSections';
import { WORK_ITEMS } from '@/data/work';

export default function WorkMarquee() {
  const featured = WORK_ITEMS.slice(0, 8);

  return (
    <div className="w-full overflow-hidden my-8 py-4 bg-panel border-y border-rule">
      <p className="eyebrow wrap mb-4 px-4">Live Craft Gallery Preview</p>
      <div className="flex gap-4 animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
        {featured.concat(featured).map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            className="flex-none w-64 transition-transform duration-300 hover:scale-105"
          >
            <Photo imgKey={item.id} alt={item.alt} shape="ph-sq" />
            <p className="ph-cap text-xs mt-2 px-1 truncate">{item.title || item.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

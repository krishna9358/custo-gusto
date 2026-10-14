import React from 'react';
import { Photo } from './SharedSections';
import { WORK_ITEMS } from '@/data/work';

export default function WorkMarquee() {
  const featured = WORK_ITEMS.filter((i) => i.shape === 'ph-sq').slice(0, 12);

  return (
    <div className="work-belt">
      <div className="work-belt-track">
        {featured.concat(featured).map((item, idx) => (
          <div
            key={`${item.id}-${idx}`}
            className="work-belt-item"
            aria-hidden={idx >= featured.length ? true : undefined}
          >
            <Photo imgKey={item.id} alt={item.alt} shape="ph-sq" />
          </div>
        ))}
      </div>
    </div>
  );
}

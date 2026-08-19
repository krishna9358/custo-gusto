'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Photo } from './SharedSections';
import { WORK_ITEMS, TECH_OPTIONS, PROD_OPTIONS, WorkItem } from '@/data/work';

export default function WorkGrid({ items = WORK_ITEMS }: { items?: WorkItem[] }) {
  const [techFilter, setTechFilter] = useState('all');
  const [prodFilter, setProdFilter] = useState('all');
  const searchParams = useSearchParams();

  useEffect(() => {
    const prodParam = searchParams ? searchParams.get('prod') : null;
    const techParam = searchParams ? searchParams.get('tech') : null;

    if (prodParam && PROD_OPTIONS.some((o) => o.value === prodParam)) {
      setProdFilter(prodParam);
    }
    if (techParam && TECH_OPTIONS.some((o) => o.value === techParam)) {
      setTechFilter(techParam);
    }

    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.replace('#', '');
      if (PROD_OPTIONS.some((o) => o.value === hash)) {
        setProdFilter(hash);
      }
    }
  }, [searchParams]);

  return (
    <>
      <div className="filters" id="f-tech">
        {TECH_OPTIONS.map((opt) => (
          <button
            key={opt.value}
            className={`fbtn ${techFilter === opt.value ? 'on' : ''}`}
            data-f="tech"
            data-v={opt.value}
            onClick={() => setTechFilter(opt.value)}
          >
            {opt.label}
          </button>
        ))}
      </div>
      <div className="filters" id="f-prod">
        {PROD_OPTIONS.map((opt) => (
          <button
            key={opt.value}
            className={`fbtn ${prodFilter === opt.value ? 'on' : ''}`}
            data-f="prod"
            data-v={opt.value}
            onClick={() => setProdFilter(opt.value)}
          >
            {opt.label}
          </button>
        ))}
      </div>
      <div className="masonry scroll-mt-28" id="grid">
        {items.map((i) => {
          const okT =
            techFilter === 'all' ||
            i.tech === techFilter ||
            i.tech === 'mixed';
          const okP =
            prodFilter === 'all' ||
            i.prod === prodFilter ||
            i.prod === 'all';
          if (!okT || !okP) return null;

          return (
            <div key={i.id} data-t={i.tech} data-p={i.prod}>
              <Photo imgKey={i.id} alt={i.alt} shape={i.shape} />
              <div className="ph-cap">{i.alt}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

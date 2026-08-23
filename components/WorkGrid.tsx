'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import AOS from 'aos';
import { Photo } from './SharedSections';
import { WORK_ITEMS, TECH_OPTIONS, PROD_OPTIONS, WorkItem } from '@/data/work';
import Lightbox from './Lightbox';

export default function WorkGrid({ items = WORK_ITEMS }: { items?: WorkItem[] }) {
  const [techFilter, setTechFilter] = useState('all');
  const [prodFilter, setProdFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState<WorkItem | null>(null);
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

  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 50);
    return () => clearTimeout(timer);
  }, [techFilter, prodFilter]);

  const visibleItems = items.filter((i) => {
    const okT =
      techFilter === 'all' || i.tech === techFilter || i.tech === 'mixed';
    const okP =
      prodFilter === 'all' || i.prod === prodFilter || i.prod === 'all';
    return okT && okP;
  });

  return (
    <>
      <div className="filters" id="f-tech" data-aos="fade-up">
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
      <div className="filters" id="f-prod" data-aos="fade-up" data-aos-delay="80">
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
        {visibleItems.map((i, idx) => (
          <div
            key={i.id}
            data-t={i.tech}
            data-p={i.prod}
            data-aos="fade-up"
            data-aos-delay={(idx % 6) * 60}
            className="cursor-pointer group"
            onClick={() => setSelectedItem(i)}
          >
            <div className="overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]">
              <Photo imgKey={i.id} alt={i.alt} shape={i.shape} />
            </div>
            <div className="ph-cap group-hover:text-brick transition-colors">
              {i.title || i.alt}
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        item={selectedItem}
        items={visibleItems}
        onClose={() => setSelectedItem(null)}
        onSelect={(item) => setSelectedItem(item)}
      />
    </>
  );
}

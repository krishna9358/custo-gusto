'use client';

import React, { useState } from 'react';
import { Photo } from './SharedSections';

export interface WorkItem {
  id: string;
  alt: string;
  tech: string;
  prod: string;
  shape: string;
}

// Initial items (w07 will be removed in commit 6 according to requirements, or kept removed)
export const WORK_ITEMS: WorkItem[] = [
  { id: 'w01', alt: 'Name embroidered on a sneaker', tech: 'emb', prod: 'shoes', shape: 'ph-sq' },
  { id: 'w02', alt: 'Embroidered motif on a shirt', tech: 'emb', prod: 'apparel', shape: 'ph-23' },
  { id: 'w03', alt: 'Engraved pen', tech: 'laser', prod: 'leather', shape: 'ph-16' },
  { id: 'w04', alt: 'Embroidered cap, worn', tech: 'emb', prod: 'caps', shape: 'ph-23' },
  { id: 'w05', alt: 'Foiled pieces, together', tech: 'foil', prod: 'leather', shape: 'ph-16' },
  { id: 'w06', alt: 'Embroidery, close enough to count the threads', tech: 'emb', prod: 'apparel', shape: 'ph-sq' },
  { id: 'w07', alt: 'Name and number on a shoe', tech: 'emb', prod: 'shoes', shape: 'ph-23' },
  { id: 'w08', alt: 'UV sticker on a bottle', tech: 'uv', prod: 'hard', shape: 'ph-23' },
  { id: 'w09', alt: 'Personalised patches', tech: 'patch', prod: 'apparel', shape: 'ph-16' },
  { id: 'w10', alt: 'Embroidered detail on denim', tech: 'emb', prod: 'apparel', shape: 'ph-23' },
  { id: 'w11', alt: 'Bags, finished', tech: 'emb', prod: 'bags', shape: 'ph-16' },
  { id: 'w12', alt: 'A name engraved into steel', tech: 'laser', prod: 'hard', shape: 'ph-sq' },
  { id: 'w13', alt: 'Printed transfer on a tee', tech: 'dtf', prod: 'apparel', shape: 'ph-23' },
  { id: 'w14', alt: 'Caps, a set', tech: 'emb', prod: 'caps', shape: 'ph-16' },
  { id: 'w15', alt: 'UV on a curved surface', tech: 'uv', prod: 'hard', shape: 'ph-sq' },
  { id: 'w16', alt: 'Printed tote', tech: 'dtf', prod: 'bags', shape: 'ph-23' },
  { id: 'w17', alt: 'A pair, embroidered', tech: 'emb', prod: 'shoes', shape: 'ph-16' },
  { id: 'w18', alt: 'Gold emblem, thread edge', tech: 'patch', prod: 'apparel', shape: 'ph-sq' },
];

export default function WorkGrid({ items = WORK_ITEMS }: { items?: WorkItem[] }) {
  const [techFilter, setTechFilter] = useState('all');
  const [prodFilter, setProdFilter] = useState('all');

  const techOptions = [
    { value: 'all', label: 'All techniques' },
    { value: 'emb', label: 'Embroidery' },
    { value: 'dtf', label: 'DTF' },
    { value: 'foil', label: 'Hot foil' },
    { value: 'laser', label: 'Laser' },
    { value: 'uv', label: 'UV' },
    { value: 'patch', label: 'Patches' },
  ];

  const prodOptions = [
    { value: 'all', label: 'All products' },
    { value: 'shoes', label: 'Shoes' },
    { value: 'caps', label: 'Caps' },
    { value: 'apparel', label: 'Apparel' },
    { value: 'bags', label: 'Bags' },
    { value: 'leather', label: 'Leather' },
    { value: 'hard', label: 'Hard goods' },
  ];

  return (
    <>
      <div className="filters" id="f-tech">
        {techOptions.map((opt) => (
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
        {prodOptions.map((opt) => (
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
      <div className="masonry" id="grid">
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

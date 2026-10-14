'use client';

import React from 'react';

const SHOES: { src: string; alt: string }[] = [
  {
    src: '/img/shoe-09-hrithik-product.jpg',
    alt: 'A navy sneaker with a name embroidered on the tongue',
  },
  {
    src: '/img/shoe-05-tyagi-09-on-foot.jpg',
    alt: 'A football boot embroidered with a name and squad number',
  },
  {
    src: '/img/shoe-02-vedh-product.jpg',
    alt: 'A black canvas shoe with a name and crest embroidered on the side',
  },
  {
    src: '/img/shoe-10-red-cloud-on-foot.jpg',
    alt: 'A white sneaker with a red patch stitched on the side, worn',
  },
  {
    src: '/img/shoe-07-blue-orange-on-foot.jpg',
    alt: 'A blue suede sneaker with initials embroidered in gold, worn',
  },
];

const INTERVAL = 3600;

export function ShoeCarousel({ shape = 'ph-sq' }: { shape?: string }) {
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(
      () => setActive((i) => (i + 1) % SHOES.length),
      INTERVAL
    );
    return () => window.clearInterval(id);
  }, []);

  return (
    <figure className={`ph ${shape} shoe-car`} style={{ margin: 0 }}>
      {SHOES.map((s, i) => (
        <img
          key={s.src}
          className={i === active ? 'on' : ''}
          src={s.src}
          alt={s.alt}
          aria-hidden={i === active ? undefined : true}
          loading={i === 0 ? 'eager' : 'lazy'}
          decoding="async"
        />
      ))}
    </figure>
  );
}

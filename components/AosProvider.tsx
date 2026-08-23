'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AosProvider() {
  const pathname = usePathname();

  useEffect(() => {
    AOS.init({
      duration: 650,
      easing: 'ease-out-cubic',
      once: false,
      offset: 40,
      delay: 0,
      disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    });

    const handleResize = () => {
      AOS.refresh();
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.refreshHard();
    }, 100);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}


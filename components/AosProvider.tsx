'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AosProvider() {
  const pathname = usePathname();

  useEffect(() => {
    let initialized = false;

    const startAos = () => {
      if (initialized) {
        AOS.refreshHard();
        return;
      }
      initialized = true;
      AOS.init({
        duration: 650,
        easing: 'ease-out-cubic',
        once: false,
        offset: 40,
        delay: 0,
        disable: () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      });
      AOS.refreshHard();
    };

    const loaderEl = typeof document !== 'undefined' ? document.querySelector('.loading-screen') : null;
    if (loaderEl && !loaderEl.classList.contains('fade-out')) {
      const handleLoaderDone = () => {
        // Trigger AOS immediately as the loader fades out
        startAos();
      };
      window.addEventListener('loaderDone', handleLoaderDone, { once: true });
      // Fallback timeout in case loader was interrupted
      const fallbackTimer = setTimeout(startAos, 1000);

      const handleResize = () => {
        if (initialized) AOS.refresh();
      };
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('loaderDone', handleLoaderDone);
        window.removeEventListener('resize', handleResize);
        clearTimeout(fallbackTimer);
      };
    } else {
      startAos();
      const handleResize = () => {
        AOS.refresh();
      };
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      AOS.refreshHard();
    }, 100);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}


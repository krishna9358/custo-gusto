'use client';

import React, { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const handleReady = () => {
      requestAnimationFrame(() => {
        setFading(true);
        if (typeof window !== 'undefined') {
          window.dispatchEvent(new CustomEvent('loaderDone'));
        }
        const timer = setTimeout(() => {
          setLoading(false);
        }, 350);
        return () => clearTimeout(timer);
      });
    };

    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      handleReady();
    } else {
      document.addEventListener('DOMContentLoaded', handleReady, { once: true });
      window.addEventListener('load', handleReady, { once: true });
      return () => {
        document.removeEventListener('DOMContentLoaded', handleReady);
        window.removeEventListener('load', handleReady);
      };
    }
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`loading-screen ${fading ? 'fade-out' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Loading Custo Gusto"
    >
      <div className="loader-content">
        <div className="loader-logo-wrap">
          <div className="loader-logo">CUSTO GUSTO</div>
          <div className="loader-bar-wrap">
            <div className="loader-bar" />
          </div>
          <div className="loader-tagline hi">आपका. सिर्फ़ आपका.</div>
        </div>
      </div>
    </div>
  );
}

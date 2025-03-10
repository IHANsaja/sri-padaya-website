import React, { useEffect, useRef } from 'react';
import HeroBack from '../assets/hero_back.png';

const HeroSection = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const loadVantaEffect = () => {
      if (window.VANTA && window.VANTA.BIRDS) {
        const effect = window.VANTA.BIRDS({
          el: vantaRef.current,
          backgroundColor: 0xffffff, // fallback; will be overridden
          backgroundAlpha: 0,        // force transparent background if supported
          color1: 0xfff1a8,          // light, pastel yellow
          color2: 0xffd700,          // richer golden yellow
          birdSize: 1.0,
          wingSpan: 30.0,
          speedLimit: 4.0,
          separation: 50.0,
          alignment: 50.0,
          cohesion: 50.0,
          quantity: 4.0,
        });

        return () => {
          if (effect) effect.destroy();
        };
      }
    };

    if (!window.VANTA || !window.VANTA.BIRDS) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/vanta/dist/vanta.birds.min.js';
      script.onload = loadVantaEffect;
      document.body.appendChild(script);
    } else {
      loadVantaEffect();
    }
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        position: 'relative',
        backgroundImage: `url(${HeroBack})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* The Vanta effect will be applied here */}
      <div
        ref={vantaRef}
        style={{
          width: '100%',
          height: '40%',
          position: 'absolute',
          top: 0,
          left: 0
        }}
      />
    </div>
  );
};

export default HeroSection;
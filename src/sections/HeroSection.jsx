import { useEffect, useRef, useState } from "react";
import * as THREE from "three"; 
import BIRDS from "vanta/dist/vanta.birds.min";

function HeroSection() {
  const [vantaEffect, setVantaEffect] = useState(null);
  const heroRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: heroRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 500,
          minWidth: 100,
          scale: 1.0,
          scaleMobile: 1.0,
          color1: 0xfffe00,
          color2: 0x00a4ff, // Fixed hex value
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={heroRef} className="h-screen flex items-center justify-center text-white">
      <h1 className="text-4xl font-bold">Welcome to My App</h1>
    </div>
  );
}

export default HeroSection;
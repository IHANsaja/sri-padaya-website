import React, { useEffect, useRef, Suspense } from 'react';
import HeroBack from '../assets/hero_back.png';
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, ContactShadows } from "@react-three/drei";
import { OrbitControls } from '@react-three/drei';
import ForgeModel from '../components/ForgeModel';
import Log from '../components/Log';
import CanvasLoader from '../components/CanvasLoader';
import DogModel from '../components/DogModel';

const HeroSection = () => {
  const vantaRef = useRef(null);

  useEffect(() => {
    const loadVantaEffect = () => {
      if (window.VANTA && window.VANTA.BIRDS) {
        const effect = window.VANTA.BIRDS({
          el: vantaRef.current,
          backgroundColor: 0xffffff,
          backgroundAlpha: 0,
          color1: 0xfff1a8,
          color2: 0xffd700,
          birdSize: 0.8,
          wingSpan: 30.0,
          speedLimit: 4.0,
          separation: 50.0,
          alignment: 50.0,
          cohesion: 50.0,
          quantity: 4.0,
        });
        return () => effect.destroy();
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
      className="w-full h-screen relative bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroBack})` }}
    >
      <div ref={vantaRef} className="w-full h-1/2" />

      <div className="w-full h-1/2 flex justify-center items-center">
        <Canvas shadows className='w-full h-full'>
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <OrbitControls enableZoom={false} enableRotate={false} />

            <ambientLight intensity={2.5} />

            <directionalLight
              position={[5, 10, 5]}
              intensity={2.5}
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
              shadow-camera-far={50}
              shadow-camera-left={-10}
              shadow-camera-right={10}
              shadow-camera-top={10}
              shadow-camera-bottom={-10}
            />

            <ForgeModel
              scale={0.8}
              rotation={[0, -Math.PI / 3, 0.1]}
              position={[5, -5, 0]}
              castShadow
              receiveShadow
              className="z-1"
            />

            <Log 
              scale={0.08}
              rotation={[0, -Math.PI / 5, 0]}
              position={[-60, -20, -50]}
              castShadow
              receiveShadow
              className="z-2"
            />

            <DogModel 
              scale={10}
              rotation={[0, 0, 0]}
              position={[-10, -20, -40]}
              castShadow
              receiveShadow
              className="z-3"
            />

            <ContactShadows
              position={[-0.1, -4.5, -1]}
              opacity={0.5}
              scale={40}
              blur={0.6}
              far={10}
              className="z-0"
            />
            
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default HeroSection;
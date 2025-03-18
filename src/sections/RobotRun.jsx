import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, ContactShadows, OrbitControls } from "@react-three/drei";
import RoboModel from "../components/RoboModel";
import CanvasLoader from "../components/CanvasLoader";

const RoboRun = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-r from-[#50A246] to-[#7AB53E]">
      <Canvas shadows className="w-full h-full bg-transparent">
        <Suspense fallback={<CanvasLoader />}>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} />
          <OrbitControls enableZoom={true} enableRotate={true} />
          <ambientLight intensity={5} />
          <directionalLight
            position={[5, 10, 5]}
            intensity={5}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <RoboModel scale={1} rotation={[0, Math.PI / 2, 0]} position={[-20, -1, -10]} />
          <ContactShadows position={[-0.1, -6.5, -1]} opacity={0.5} scale={40} blur={0.6} far={10} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default RoboRun;

import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const PhoneModel = (props) => {
  const { nodes, materials } = useGLTF('/sri-padaya-website/models/phone.glb');
  
  // Create a reference to the group containing the model
  const phoneRef = useRef();
  
  // Use `useFrame` to animate the rotation
  useFrame(() => {
    if (phoneRef.current) {
      phoneRef.current.rotation.y += 0.01; // Adjust the speed of rotation here
    }
  });

  return (
    <group ref={phoneRef} {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Eiffel_Tower_Telephone_4096_0.geometry}
          material={materials['4096']}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  );
};

useGLTF.preload('/sri-padaya-website/models/phone.glb');

export default PhoneModel;

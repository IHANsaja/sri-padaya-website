import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';

const ForgeModel = (props) => {
  const group = useRef();
  // Load GLTF and its animations from the specified file
  const { nodes, materials, animations } = useGLTF('/models/forge.glb');
  // Bind the animations to the model's group
  const { actions } = useAnimations(animations, group);

  // Use an effect to start playing animations once the actions are available
  useEffect(() => {
    if (actions) {
      // Example: Play all available animations.
      // If you want a specific animation, e.g. "Idle", you can do:
      // actions.Idle?.play();
      Object.values(actions).forEach((action) => {
        action.reset();
        action.fadeIn(0.5);
        action.play();
      });
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={1.838}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Cube_0">
                <mesh
                  name="Object_4"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_4.geometry}
                  material={materials.Material}
                />
              </group>
              <group
                name="Cube005_1"
                position={[1.576, 1.051, 2.839]}
                rotation={[-1.272, 0.673, -0.9]}>
                <mesh
                  name="Object_6"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_6.geometry}
                  material={materials.Material}
                />
              </group>
              <group name="Cube006_2" position={[2.219, 0.651, 1.541]}>
                <mesh
                  name="Object_8"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_8.geometry}
                  material={materials.Material}
                />
              </group>
              <group
                name="Cube008_3"
                position={[1.072, 0.457, 3.065]}
                rotation={[-0.001, 0, 0]}
                scale={1.198}>
                <mesh
                  name="Object_10"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_10.geometry}
                  material={materials.Material}
                />
              </group>
              <group name="Cube009_4" position={[2.322, 0.89, 1.768]}>
                <mesh
                  name="Object_12"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_12.geometry}
                  material={materials.Material}
                />
              </group>
              <group name="Cube010_5" position={[2.219, 0.651, 1.665]}>
                <mesh
                  name="Object_14"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_14.geometry}
                  material={materials.Material}
                />
              </group>
              <group name="Cube011_6" position={[2.39, 0.82, 1.542]}>
                <mesh
                  name="Object_16"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_16.geometry}
                  material={materials.Material}
                />
              </group>
              <group name="Cube012_7" position={[2.414, 0.651, 1.725]}>
                <mesh
                  name="Object_18"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_18.geometry}
                  material={materials.Material}
                />
              </group>
              <group
                name="Plane_8"
                position={[3.318, 3.188, -5.293]}
                rotation={[-1.538, 0.081, 1.568]}
                scale={0.067}>
                <mesh
                  name="Object_20"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_20.geometry}
                  material={materials.leaves}
                />
              </group>
              <group
                name="Plane001_9"
                position={[0.434, 2.497, -8.042]}
                rotation={[-1.541, 0, 1.573]}
                scale={0.062}>
                <mesh
                  name="Object_22"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_22.geometry}
                  material={materials.leaves}
                />
              </group>
              <group
                name="Plane002_10"
                position={[3.375, 2.144, -1.733]}
                rotation={[-2.508, -0.598, -3.142]}
                scale={0.127}>
                <mesh
                  name="Object_24"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_24.geometry}
                  material={materials.leaves}
                />
              </group>
              <group
                name="Plane003_11"
                position={[-1.802, 3.232, -6.071]}
                rotation={[-1.54, 0.001, 1.57]}
                scale={0.068}>
                <mesh
                  name="Object_26"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_26.geometry}
                  material={materials.leaves}
                />
              </group>
              <group
                name="Plane004_12"
                position={[-2.695, 0.042, -4.644]}
                rotation={[0.706, -1.348, -2.386]}
                scale={0.127}>
                <mesh
                  name="Object_28"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_28.geometry}
                  material={materials.leaves}
                />
              </group>
              <group
                name="Plane005_13"
                position={[-3.114, 0.036, -2.18]}
                rotation={[0.155, -1.191, -2.84]}
                scale={0.065}>
                <mesh
                  name="Object_30"
                  castShadow
                  receiveShadow
                  geometry={nodes.Object_30.geometry}
                  material={materials.leaves}
                />
              </group>
              <group name="Armature_27" position={[1.882, 1.687, 1.107]}>
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_35"
                    geometry={nodes.Object_35.geometry}
                    material={materials.Material}
                    skeleton={nodes.Object_35.skeleton}
                  />
                  <group name="Cube001_26" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload('/models/forge.glb');

export default ForgeModel;

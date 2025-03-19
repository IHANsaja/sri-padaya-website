import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const RoboModel = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/sri-padaya-website/models/robot.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && animations.length > 0) {
      const action = actions[Object.keys(actions)[0]]; // Get the first animation

      const playForwardAnimation = () => {
        action.timeScale = 1; // Normal forward direction
        action.play(); // Play forward animation
      };

      const playBackwardAnimation = () => {
        action.timeScale = -1; // Reverse the time scale
        action.time = action.getClip().duration; // Set the time to the end of the animation
        action.play(); // Play reverse animation
      };

      // Function to alternate between forward and backward animations in a loop
      const alternateAnimations = () => {
        playForwardAnimation(); // Play forward animation

        // Wait for forward animation to complete before playing backward animation
        setTimeout(() => {
          playBackwardAnimation(); // Play reverse animation after forward completes

          // After reverse animation is done, start the forward animation again
          setTimeout(() => {
            alternateAnimations(); // Call the function again to repeat the loop
          }, action.getClip().duration * 900); // Wait for reverse animation duration before starting forward again
        }, action.getClip().duration * 900); // Wait for forward animation to finish before starting reverse
      };

      alternateAnimations(); // Start the animation loop
    }
  }, [actions, animations]);

  return (
    <group ref={group} {...props} dispose={null} scale={0.5} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
      {/* Applying scale and rotation to fix size and animation direction */}
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="Object_2">
            <group name="RootNode">
              <group name="Object_4">
                <primitive object={nodes._rootJoint} dispose={null} />
                <skinnedMesh
                  name="Object_6"
                  geometry={nodes.Object_6.geometry}
                  material={materials.feuilles}
                  skeleton={nodes.Object_6.skeleton}
                  castShadow
                  receiveShadow
                />
                <skinnedMesh
                  name="Object_7"
                  geometry={nodes.Object_7.geometry}
                  material={materials.metal}
                  skeleton={nodes.Object_7.skeleton}
                  castShadow
                  receiveShadow
                />
                <skinnedMesh
                  name="Object_8"
                  geometry={nodes.Object_8.geometry}
                  material={materials.coque}
                  skeleton={nodes.Object_8.skeleton}
                  castShadow
                  receiveShadow
                />
                <skinnedMesh
                  name="Object_9"
                  geometry={nodes.Object_9.geometry}
                  material={materials.lentille1}
                  skeleton={nodes.Object_9.skeleton}
                  castShadow
                  receiveShadow
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/sri-padaya-website/models/robot.glb");

export default RoboModel;

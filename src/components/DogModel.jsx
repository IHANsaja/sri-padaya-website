import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import * as THREE from 'three'

const DogModel = (props) => {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/models/dog.glb')
  const { actions } = useAnimations(animations, group)

  // Start idle animation ("standing_skeletal.3") on mount.
  useEffect(() => {
    if (actions && actions['standing_skeletal.3']) {
      const idleAction = actions['standing_skeletal.3']
      idleAction.reset()
      idleAction.setLoop(THREE.LoopRepeat, Infinity)
      idleAction.play()
    }
  }, [actions])

  // When the dog is clicked, pick a random non-idle animation and play it once.
  const handleClick = () => {
    if (!actions) return

    // Filter out the idle animation.
    const nonIdle = Object.keys(actions).filter(name => name !== 'standing_skeletal.3')
    if (nonIdle.length === 0) return

    const randomName = nonIdle[Math.floor(Math.random() * nonIdle.length)]
    const action = actions[randomName]

    // Stop the idle animation.
    actions['standing_skeletal.3'].stop()

    action.reset()
    action.setLoop(THREE.LoopOnce, 1)
    action.clampWhenFinished = true
    action.play()

    const onFinished = (e) => {
      if (e.action === action) {
        action.getMixer().removeEventListener('finished', onFinished)
        const idleAction = actions['standing_skeletal.3']
        idleAction.reset()
        idleAction.setLoop(THREE.LoopRepeat, Infinity)
        idleAction.play()
      }
    }

    action.getMixer().addEventListener('finished', onFinished)
  }

  return (
    <group ref={group} {...props} dispose={null} onClick={handleClick}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={1.025}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Shiba_125" scale={0.01}>
                <group name="skeletal3_124">
                  <group name="GLTF_created_0">
                    <primitive object={nodes.GLTF_created_0_rootJoint} />
                    <skinnedMesh
                      name="Object_8"
                      geometry={nodes.Object_8.geometry}
                      material={materials.Material_0}
                      skeleton={nodes.Object_8.skeleton}
                    />
                    <skinnedMesh
                      name="Object_10"
                      geometry={nodes.Object_10.geometry}
                      material={materials['Material.001']}
                      skeleton={nodes.Object_10.skeleton}
                    />
                    <group name="shiba_inu001_122" />
                    <group name="shiba_inu2_123" />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/dog.glb')

export default DogModel;
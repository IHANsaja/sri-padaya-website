import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Log = (props) => {
  const { nodes, materials } = useGLTF('/sri-padaya-website/models/log.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <group
          position={[321.654, -174.441, -8.694]}
          rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
          scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_7.geometry}
            material={materials.log_main}
          />
          <group position={[-0.592, 0.063, -0.095]} rotation={[0, -0.132, Math.PI / 2]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_25.geometry}
              material={materials.log_moss}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_27.geometry}
              material={materials['Material.001']}
              position={[-0.8, -0.201, 0.414]}
              rotation={[1.809, -0.018, 0.981]}
              scale={0.942}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_29.geometry}
              material={materials['Material.011']}
              position={[0.042, -0.293, 0.456]}
              rotation={[1.66, -0.099, -0.833]}
              scale={0.866}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_31.geometry}
              material={materials['Material.006']}
              position={[-0.107, -0.254, 0.367]}
              rotation={[1.784, -0.071, 0.432]}
              scale={0.781}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_33.geometry}
              material={materials['Material.002']}
              position={[-0.718, -0.094, 0.252]}
              rotation={[1.741, 0.101, 2.353]}
              scale={0.716}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_35.geometry}
              material={materials['Material.003']}
              position={[0.615, -0.072, 0.456]}
              rotation={[1.597, -0.021, -1.798]}
              scale={1.022}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_37.geometry}
              material={materials['Material.004']}
              position={[0.769, -0.106, 0.369]}
              rotation={[1.785, -0.049, 0.681]}
              scale={0.747}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_39.geometry}
              material={materials['Material.010']}
              position={[-0.679, -0.145, 0.344]}
              rotation={[1.794, 0.057, 1.707]}
              scale={0.67}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_41.geometry}
              material={materials['Material.012']}
              position={[-0.962, -0.089, 0.389]}
              rotation={[1.774, 0.081, 1.993]}
              scale={0.594}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_43.geometry}
              material={materials['Material.008']}
              position={[-0.311, -0.271, 0.384]}
              rotation={[1.811, 0, 1.146]}
              scale={0.952}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_45.geometry}
              material={materials['Material.009']}
              position={[-0.345, -0.337, 0.569]}
              rotation={[1.802, 0.192, 1.585]}
              scale={0.952}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_47.geometry}
              material={materials['Material.007']}
              position={[-0.212, -0.287, 0.534]}
              rotation={[1.652, 0.095, -3.071]}
              scale={0.979}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_49.geometry}
              material={materials['Material.005']}
              position={[-0.092, -0.364, 0.538]}
              rotation={[1.595, 0.007, -2.053]}
              scale={0.459}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_51.geometry}
              material={materials.mushroom_stem}
              position={[-0.793, -0.313, 0.394]}
              rotation={[0.132, -0.985, 0]}
              scale={0.942}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_53.geometry}
              material={materials['mushroom_stem.008']}
              position={[0.036, -0.396, 0.436]}
              rotation={[0.132, 0.826, 0]}
              scale={0.866}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_55.geometry}
              material={materials['mushroom_stem.009']}
              position={[-0.104, -0.347, 0.348]}
              rotation={[0.132, -0.434, 0]}
              scale={0.781}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_57.geometry}
              material={materials['mushroom_stem.002']}
              position={[-0.713, -0.165, 0.252]}
              rotation={[2.97, -0.781, -Math.PI]}
              scale={0.716}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_59.geometry}
              material={materials['mushroom_stem.003']}
              position={[0.606, -0.194, 0.442]}
              rotation={[-3.01, 1.35, Math.PI]}
              scale={1.022}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_61.geometry}
              material={materials['mushroom_stem.001']}
              position={[-0.676, -0.214, 0.334]}
              rotation={[-3.01, -1.427, -Math.PI]}
              scale={0.67}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_63.geometry}
              material={materials['mushroom_stem.004']}
              position={[0.754, -0.198, 0.387]}
              rotation={[-0.399, -0.684, 0]}
              scale={0.747}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_65.geometry}
              material={materials['mushroom_stem.005']}
              position={[-0.957, -0.161, 0.382]}
              rotation={[-3.01, -1.14, -Math.PI]}
              scale={0.594}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_67.geometry}
              material={materials['mushroom_stem.011']}
              position={[-0.303, -0.384, 0.366]}
              rotation={[0.132, -1.151, 0]}
              scale={0.952}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_69.geometry}
              material={materials['mushroom_stem.006']}
              position={[-0.315, -0.425, 0.558]}
              rotation={[1.792, -1.151, 1.652]}
              scale={0.841}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_71.geometry}
              material={materials['mushroom_stem.010']}
              position={[-0.213, -0.405, 0.527]}
              rotation={[-3.01, 0.073, -Math.PI]}
              scale={0.979}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_73.geometry}
              material={materials['mushroom_stem.007']}
              position={[-0.096, -0.419, 0.533]}
              rotation={[-3.01, 1.094, Math.PI]}
              scale={0.459}
            />
          </group>
          <group position={[-0.592, 0.063, -0.095]} rotation={[0, -0.132, Math.PI / 2]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_75.geometry}
              material={materials['log_moss.001']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_77.geometry}
              material={materials['grass_001.006']}
              position={[0.227, -0.027, -0.074]}
              rotation={[0.264, -0.291, 2.519]}
              scale={0.686}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_79.geometry}
              material={materials['grass_001.007']}
              position={[0.167, 0.035, -0.052]}
              rotation={[1.283, -0.039, 2.337]}
              scale={0.59}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_81.geometry}
              material={materials['grass_001.016']}
              position={[0.279, -0.002, 0.04]}
              rotation={[1.822, -0.43, 2.737]}
              scale={0.629}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_83.geometry}
              material={materials['grass_001.017']}
              position={[-0.156, -0.106, -0.075]}
              rotation={[-0.002, 0.214, 0.617]}
              scale={0.588}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_85.geometry}
              material={materials['grass_001.008']}
              position={[-0.23, 0.005, 0.042]}
              rotation={[-3.077, 0.899, 0.712]}
              scale={0.607}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_87.geometry}
              material={materials['grass_001.009']}
              position={[-0.124, 0.032, -0.057]}
              rotation={[1.455, 0.206, 1.757]}
              scale={0.683}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_89.geometry}
              material={materials['grass_001.010']}
              position={[0.108, 0.042, -0.001]}
              rotation={[1.781, -0.102, 1.084]}
              scale={0.694}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_91.geometry}
              material={materials['grass_001.011']}
              position={[-0.117, 0.035, 0.021]}
              rotation={[1.487, 0.013, -1.091]}
              scale={0.614}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_93.geometry}
              material={materials['grass_001.012']}
              position={[0.129, 0.038, 0.013]}
              rotation={[1.781, -0.102, 1.481]}
              scale={0.623}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_95.geometry}
              material={materials['grass_001.013']}
              position={[-0.034, -0.008, 0.148]}
              rotation={[2.018, 0.143, -2.477]}
              scale={0.646}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_97.geometry}
              material={materials['grass_001.014']}
              position={[-0.088, 0.056, 0.101]}
              rotation={[2.527, 0.26, 0.985]}
              scale={0.599}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_99.geometry}
              material={materials['grass_001.015']}
              position={[0.202, 0.04, -0.05]}
              rotation={[1.571, -0.61, 0.142]}
              scale={0.622}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_9.geometry}
            material={materials.grass_001}
            position={[0.099, 0.562, 0.472]}
            rotation={[-2.88, Math.PI / 2, 0]}
            scale={0.694}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11.geometry}
            material={materials['grass_001.001']}
            position={[0.099, 0.697, 0.281]}
            rotation={[-2.346, Math.PI / 2, 0]}
            scale={0.743}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_13.geometry}
            material={materials['grass_001.002']}
            position={[0.143, -0.612, 0.313]}
            rotation={[2.964, Math.PI / 2, 0]}
            scale={0.701}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_15.geometry}
            material={materials['grass_001.003']}
            position={[0.143, -0.185, 0.521]}
            rotation={[-2.224, Math.PI / 2, 0]}
            scale={0.752}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_17.geometry}
            material={materials['grass_001.004']}
            position={[0.1, 1.443, -0.276]}
            rotation={[3.129, Math.PI / 2, 0]}
            scale={0.79}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_19.geometry}
            material={materials['grass_001.005']}
            position={[0.099, 1.407, -0.495]}
            rotation={[-2.221, Math.PI / 2, 0]}
            scale={0.729}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_21.geometry}
            material={materials['log_inside.001']}
            position={[-0.283, 1.218, 0.018]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_23.geometry}
            material={materials.log_inside}
            position={[-0.283, -1.536, 0]}
            rotation={[Math.PI, 0, 0]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials.floor}
          position={[293.414, -162.598, -0.243]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/public/models/log.glb')

export default Log;
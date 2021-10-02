import React, { Suspense, useRef } from 'react'

import { useGLTF, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import styles from './Background.module.scss'

useGLTF.preload('/space-3d.glb')

function Space({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/space-3d.glb') as any

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      position={[0, -0.65, 0]}
      scale={4}
    >
      <group
        position={[-0.02, 0.12, 0.02]}
        rotation={[-1.44, -0.69, 1.02]}
        scale={0.01}
      >
        <mesh
          geometry={nodes.Engine_parts_1.geometry}
          material={materials['Material 51']}
          position={[0, 0, 1.88]}
          rotation={[Math.PI / 2, 0, 0]}
        />

        <mesh
          geometry={nodes.Engine_parts_2.geometry}
          material={nodes.Engine_parts_2.material}
          position={[0, 0, 2.89]}
          rotation={[Math.PI / 2, 0, 0]}
        />

        <mesh
          geometry={nodes.Monocoque.geometry}
          material={materials['Material 54']}
          position={[0, 0, 4.6]}
          rotation={[Math.PI / 2, 0, 0]}
        />

        <mesh
          geometry={nodes.Frames.geometry}
          material={nodes.Frames.material}
          position={[0, 0, 4.54]}
          rotation={[Math.PI / 2, 0, 0]}
        />

        <mesh
          geometry={nodes.Lights.geometry}
          material={nodes.Lights.material}
          position={[0, 0, 3.58]}
        />
      </group>

      <group
        position={[0.05, 0.15, -0.13]}
        rotation={[-0.94, -0.14, 2.9]}
        scale={0.01}
      >
        <group position={[-0.06, -0.44, 4.82]}>
          <mesh
            geometry={nodes.Satellite_Antenna.geometry}
            material={nodes.Satellite_Antenna.material}
            position={[-1.14, 1.09, 2.34]}
            rotation={[-2.68, -0.74, 2.3]}
          />

          <mesh
            geometry={nodes.Arm.geometry}
            material={nodes.Arm.material}
            position={[-0.79, 0.79, 0.44]}
            rotation={[Math.PI / 2, -0.77, 0]}
          />

          <mesh
            geometry={nodes.Holder.geometry}
            material={nodes.Holder.material}
            position={[-0.79, 0.79, 0.07]}
          />

          <mesh
            geometry={nodes.Joints.geometry}
            material={nodes.Joints.material}
            position={[-1, 1, 0.75]}
            rotation={[0, 0, -Math.PI / 2]}
          />

          <mesh
            geometry={nodes.Platform.geometry}
            material={materials['Material 30']}
            position={[0, 0, 0.05]}
          />

          <mesh geometry={nodes.Ring.geometry} material={nodes.Ring.material} />

          <mesh
            geometry={nodes.Building.geometry}
            material={nodes.Building.material}
            position={[0, 0, 0.51]}
          />

          <mesh
            geometry={nodes.Tower.geometry}
            material={nodes.Tower.material}
            position={[0, 0, 0.9]}
          />

          <mesh
            geometry={nodes.Stripes.geometry}
            material={nodes.Stripes.material}
            position={[0.16, 0, 1.91]}
            rotation={[Math.PI / 2, -Math.PI / 2, 0]}
          />

          <mesh
            geometry={nodes.Relay.geometry}
            material={nodes.Relay.material}
            position={[0.77, 0.64, 0.08]}
          />

          <mesh
            geometry={nodes.Antenna.geometry}
            material={nodes.Antenna.material}
            position={[-0.68, -0.78, 0.03]}
          />

          <mesh
            geometry={nodes.Ball.geometry}
            material={nodes.Ball.material}
            position={[0, 0, 2.23]}
          />

          <mesh
            geometry={nodes.Ring_2.geometry}
            material={nodes.Ring_2.material}
            position={[0, 0, 2.45]}
          />

          <mesh
            geometry={nodes.Pipes.geometry}
            material={nodes.Pipes.material}
            position={[0.35, 0.11, 0.05]}
          />

          <mesh
            geometry={nodes.Lights_1.geometry}
            material={nodes.Lights_1.material}
            position={[0.09, 0.19, 0.53]}
          />
        </group>

        <group position={[-0.06, -0.45, -0.01]}>
          <mesh
            geometry={nodes.Asteroid_Large.geometry}
            material={materials['Material 29']}
            position={[-0.12, 0.03, 0.01]}
          />

          <mesh
            geometry={nodes.Rocks.geometry}
            material={materials['Material 35']}
            position={[0.6, 0.45, 0.86]}
          />
        </group>
      </group>

      <group
        position={[-0.07, 0.19, -0.18]}
        rotation={[-2.43, 0.86, -2.71]}
        scale={[0.01, 0.01, 0.01]}
      >
        <mesh
          geometry={nodes.Monocoque_1.geometry}
          material={materials['White material']}
          position={[-1, -0.39, 3.09]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
        />

        <mesh
          geometry={nodes.Light.geometry}
          material={nodes.Light.material}
          position={[-0.47, -0.44, 0.33]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
        />

        <mesh
          geometry={nodes.Wings.geometry}
          material={materials['Material 60']}
          position={[0, 0, 3.25]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
        />

        <mesh
          geometry={nodes.Glass.geometry}
          material={materials['Material 61']}
          position={[0, -0.06, 4.63]}
          rotation={[Math.PI / 2, Math.PI / 2, 0]}
        />
      </group>

      <group
        position={[-0.04, -0.02, -0.07]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0}
      >
        <mesh
          geometry={nodes['Asteroid_#1_1'].geometry}
          material={materials['Material 26']}
          position={[-128.84, -38.87, 239.12]}
          rotation={[0.38, 0, 0]}
          scale={[30.63, 30.63, 30.63]}
        />

        <mesh
          geometry={nodes['Asteroid_#1_2'].geometry}
          material={materials['Material 46']}
          position={[18.56, 44.87, 187.52]}
          rotation={[0, 0, 1.55]}
          scale={[4.16, 4.16, 4.16]}
        />

        <mesh
          geometry={nodes['Asteroid_#1_3'].geometry}
          material={materials['Material 44']}
          position={[19.72, 44.85, 175.95]}
          rotation={[0, 0, 1.55]}
          scale={[6.76, 6.76, 6.76]}
        />

        <mesh
          geometry={nodes['Asteroid_#1_4'].geometry}
          material={materials['Material 27']}
          position={[-150.71, 54.14, 58.55]}
          rotation={[0, 0, 1.55]}
          scale={[6.85, 6.85, 6.85]}
        />

        <mesh
          geometry={nodes['Asteroid_#1'].geometry}
          material={materials['Material 24']}
          position={[-128.58, -70.12, 194.4]}
          scale={[17.6, 17.6, 17.6]}
        />

        <mesh
          geometry={nodes['Asteroid_#2_2'].geometry}
          material={materials['Material 37']}
          position={[-103.52, 105.85, 225.12]}
          rotation={[1.12, 0.51, 1.79]}
          scale={[15.8, 15.8, 15.8]}
        />

        <mesh
          geometry={nodes['Asteroid_#2_3'].geometry}
          material={materials['Material 39']}
          position={[35.03, -43.56, 282.51]}
          rotation={[1.91, -0.27, 1.95]}
          scale={[24.16, 24.16, 24.16]}
        />

        <mesh
          geometry={nodes['Asteroid_#2_1'].geometry}
          material={materials['Material 45']}
          position={[-75.51, -54.09, 91.67]}
          rotation={[1.61, 0.67, 1.72]}
          scale={[16.19, 12.74, 14.14]}
        />

        <mesh
          geometry={nodes['Asteroid_#2'].geometry}
          material={materials['Material 25']}
          position={[157.57, -17.81, 196.65]}
          rotation={[1.72, 0, 0.24]}
          scale={[15.34, 15.34, 15.34]}
        />

        <mesh
          geometry={nodes['Asteroid_#3_1'].geometry}
          material={materials['Material 50']}
          position={[-161.07, 88.1, 131.08]}
          rotation={[-2.14, 0.28, 2.04]}
          scale={[12.91, 12.91, 15.53]}
        />

        <mesh
          geometry={nodes['Asteroid_#3_2'].geometry}
          material={materials['Material 36']}
          position={[-122.03, 88.1, 226.73]}
          rotation={[1.29, -0.35, 0.64]}
          scale={[24.83, 24.83, 29.88]}
        />

        <mesh
          geometry={nodes['Asteroid_#3_3'].geometry}
          material={materials['Material 41']}
          position={[107.08, -65.4, 43.49]}
          scale={[16.88, 16.88, 16.88]}
        />

        <mesh
          geometry={nodes['Asteroid_#3_4'].geometry}
          material={materials['Material 28']}
          position={[-100.34, 93.07, 0]}
          scale={[16.88, 16.88, 16.88]}
        />

        <mesh
          geometry={nodes['Asteroid_#4_1'].geometry}
          material={materials['Material 38']}
          position={[12.38, -47.34, 250.14]}
          rotation={[-2.57, -0.98, 2.67]}
          scale={[29.43, 29.43, 29.43]}
        />

        <mesh
          geometry={nodes['Asteroid_#4_2'].geometry}
          material={materials['Material 42']}
          position={[-115.01, 24.78, 103.93]}
          rotation={[-Math.PI, 0.98, -Math.PI]}
          scale={[11.92, 11.92, 11.92]}
        />

        <mesh
          geometry={nodes['Asteroid_#4'].geometry}
          material={materials['Material 40']}
          position={[-125.01, -9.11, 90.4]}
          rotation={[0, -0.21, 0]}
          scale={[21.34, 25.4, 24.82]}
        />

        <mesh
          geometry={nodes['Asteroid_#3_5'].geometry}
          material={materials['Material 49']}
          position={[132.95, 30.45, 263.44]}
          rotation={[2.66, 0.58, 1.17]}
          scale={[10.17, 10.17, 10.17]}
        />

        <mesh
          geometry={nodes['Asteroid_#3_6'].geometry}
          material={materials['Material 48']}
          position={[123.58, 30.45, 240.89]}
          rotation={[-0.19, -0.64, -0.44]}
          scale={[11.62, 11.62, 11.62]}
        />

        <mesh
          geometry={nodes['Asteroid_#3'].geometry}
          material={materials['Material 43']}
          position={[120.61, -96.83, 154.81]}
          rotation={[-2.13, -1.06, -1.97]}
          scale={[23.11, 23.11, 23.11]}
        />
      </group>

      <pointLight
        color="#ffcc91"
        decay={2}
        distance={10000}
        intensity={2.64}
        position={[-0.24, -0.11, 0.01]}
        rotation={[-Math.PI / 2, 0, -Math.PI / 2]}
        scale={0}
      />
    </group>
  )
}

export default function Background() {
  return (
    <Canvas camera={{ fov: 5 }} className={styles.canvasWrapper} dpr={[1, 2]}>
      <ambientLight intensity={1} />

      <Suspense fallback={null}>
        <Space />
      </Suspense>

      <OrbitControls
        {...({
          autoRotate: true,
          autoRotateSpeed: -5,
          enableZoom: false,
          maxPolarAngle: Math.PI / 2,
          minPolarAngle: Math.PI / 2,
        } as any)}
      />
    </Canvas>
  )
}

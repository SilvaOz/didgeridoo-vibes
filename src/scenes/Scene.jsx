import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, OrbitControls, Text, Sparkles } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { useRef } from 'react'
import { useTexture } from '@react-three/drei'

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 5, 12], fov: 50 }}>
      <color attach="background" args={['#0a2e38']} />
      <ambientLight intensity={0.8} color="#f5f5dc" />
      <directionalLight position={[10, 15, 10]} intensity={1.2} color="#f8f3e6" castShadow />
      <Environment preset="forest" background blur={0.5} />

      <TexturedCross />

      <EffectComposer>
        <Bloom intensity={0.6} luminanceThreshold={0.3} />
      </EffectComposer>
    </Canvas>
  )
}

function TexturedCross() {
  const ref = useRef()
  const normalMap = useTexture('/normal.jpg')

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.1
    }
  })

  return (
    <group ref={ref}>
      <Sparkles count={70} scale={10} />
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.2, 0.2, 6, 12]} />
        <meshStandardMaterial 
          color="#1a1a1a"
          normalMap={normalMap}
          roughness={0.5}
          metalness={0.2}
          emissive="#8d6e63"
        />
      </mesh>
      <mesh>
        <cylinderGeometry args={[0.2, 0.2, 6, 12]} />
        <meshStandardMaterial 
          color="#cfcfcf"
          normalMap={normalMap}
          roughness={0.3}
          metalness={0.1}
        />
      </mesh>
    </group>
  )
}

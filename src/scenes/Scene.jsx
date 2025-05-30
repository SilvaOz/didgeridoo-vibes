// components/Scene.jsx
import { Canvas } from '@react-three/fiber'
import { Environment, Float } from '@react-three/drei'

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 4, 14], fov: 50 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[10, 20, 10]} intensity={1.2} />
      {/* Montañas 3D simples */}
      <group>
        {[...Array(5)].map((_, i) => (
          <mesh
            key={i}
            position={[
              Math.sin(i) * 5 + (i % 2 === 0 ? 2 : -2),
              0,
              Math.cos(i) * 5 + i
            ]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <coneGeometry args={[2 + Math.random(), 4 + Math.random() * 2, 8]} />
            <meshStandardMaterial color="#8d9093" />
          </mesh>
        ))}
      </group>
      {/* Suelo */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color="#6b8e23" />
      </mesh>
      <Environment preset="forest" />
    </Canvas>
  )
}
